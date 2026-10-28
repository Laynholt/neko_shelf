// node neko_shelf.test.js [out.zip] [out.pdf] — самопроверка чистых функций, ZIP- и PDF-писателей
const assert = require('assert');
const fs = require('fs');
const L = require('./neko_shelf.user.js');
let finished = false;
process.on('beforeExit', () => assert.ok(finished, 'Самопроверка не завершилась'));

assert.strictEqual(L.crc32(new TextEncoder().encode('123456789')), 0xcbf43926);
assert.strictEqual(L.parseSlug('/ru/manga/34466--jeonjijeog/read/v1/c1'), '34466--jeonjijeog');
assert.strictEqual(L.parseSlug('/ru/book/26690--orv-novel?section=chapters'), '26690--orv-novel');
assert.strictEqual(L.parseSlug('/ru'), null);

assert.deepStrictEqual(L.parseLost('https://v2.shlib.life/ru/20872--nettaigyo/read/v9/c34?bid=7'),
  { href: 'https://v2.shlib.life/ru/20872--nettaigyo/read/v9/c34?bid=7', slug: '20872--nettaigyo', read: { volume: '9', number: '34' }, bid: '7' });
assert.deepStrictEqual(L.parseLost('https://mangalib.me/ru/manga/9065--kanojo?section=info').read, null);
assert.strictEqual(L.parseLost('https://mangalib.me/ru/manga/34466--x/read/v1/c1').slug, '34466--x');
assert.strictEqual(L.parseLost('https://mangalib.me/404'), null);
assert.strictEqual(L.parseLost(undefined), null);
// снятые страницы выпадают, у оставшихся — исходные номера
assert.deepStrictEqual(L.keptPages(['a', 'b', 'c', 'd'], new Set([1, 2])), [['a', 0], ['d', 3]]);
assert.deepStrictEqual(L.keptPages(['a', 'b'], undefined), [['a', 0], ['b', 1]]);
// GroupLe: фрагмент реальной страницы главы ReadManga
const rmInit = `var chapterInfo = {}; rm_h.readerInit(chapterInfo, [['https://rm.one-way.work/','',"auto/89/39/43/1_res-py-01.jpg?t=1&u=0&h=zH",720,2725, ''],['https://rm.one-way.work/','',"auto/89/39/43/13_res.jpg",1080,1528, '']], true, [{"path":"https://rm.one-way.work/","res":false}], false);`;
assert.deepStrictEqual(L.grouplePages(rmInit), [
  { urls: ['https://rm.one-way.work/auto/89/39/43/1_res-py-01.jpg?t=1&u=0&h=zH', 'https://rm.one-way.work/auto/89/39/43/1_res-py-01.jpg'], width: 720, height: 2725 },
  { urls: ['https://rm.one-way.work/auto/89/39/43/13_res.jpg'], width: 1080, height: 1528 },
]);
assert.deepStrictEqual(L.grouplePages('<html>без читалки</html>'), []);
assert.ok(L.sameNum('01', '1') && L.sameNum('10.5', '10.5') && !L.sameNum('1', '2') && !L.sameNum('', '0'));

const jwt = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIn0.abc_DEF-123';
assert.strictEqual(L.findJwt(JSON.stringify({ auth: { token: { access_token: jwt } } })), jwt);
assert.strictEqual(L.findJwt('Bearer ' + jwt), jwt);
assert.strictEqual(L.findJwt('not a token'), null);

const doc = { type: 'doc', content: [
  { type: 'paragraph', content: [{ type: 'text', text: 'a<b', marks: [{ type: 'bold' }] }] },
  { type: 'paragraph' },
  { type: 'image', attrs: { images: [{ image: 'uuid1' }] } },
] };
assert.strictEqual(L.pmToHtml(doc, { uuid1: 'https://x/1.jpg' }), '<p><strong>a&lt;b</strong></p><p>&#160;</p><img src="https://x/1.jpg" alt=""/>');

assert.strictEqual(L.sniffExt(new Uint8Array([0xff, 0xd8, 0xff]).buffer), 'jpg');
assert.strictEqual(L.sniffExt(new Uint8Array([0x52, 0x49, 0x46, 0x46, 0, 0, 0, 0, 0x57, 0x45, 0x42, 0x50]).buffer), 'webp');
assert.strictEqual(L.sniffExt(new Uint8Array([0, 0, 0, 0x1c, ...new TextEncoder().encode('ftypavif')]).buffer), 'avif');
assert.throws(() => L.sniffExt(new TextEncoder().encode('<html>').buffer));
assert.strictEqual(L.safeName('a/b:c?'), 'a b c');
// имя файла: автор из тега, скобки из названия убираем, запрещённые символы -> «-»
assert.strictEqual(L.fileTitle('(C105) [Circle (Art)] Title: Sub | AC/DC (Parody) [English]', 'Art'), '[Art] - Title - Sub - AC-DC');
assert.strictEqual(L.fileTitle('[Circle (Art)] Title', ''), '[Circle (Art)] - Title');
assert.strictEqual(L.fileTitle('(GatorChan) Leo and Amalia', ''), '[GatorChan] - Leo and Amalia');
assert.strictEqual(L.fileTitle('Морино $ & Ко', 'Автор'), '[Автор] - Морино - Ко');
assert.strictEqual(L.fileTitle('Без автора', ''), 'Без автора');
assert.strictEqual(L.fileTitle('[Only]', 'A'), '[A] - Only');
assert.strictEqual(L.mostCommon([800, 690, 690, 800, 690]), 690);
assert.strictEqual(L.mostCommon([2, 20000]), 2);
assert.strictEqual(L.mostCommon([]), undefined);

// блок «О тайтле»: только заполненные поля, списки через запятую
assert.deepStrictEqual(L.infoRows({ title: 'Т', alt: ['A', '', 'B'], genres: [], tags: ['x'], year: '', url: 'https://s' }),
  [['Название', 'Т'], ['Другие названия', 'A, B'], ['Теги', 'x'], ['Источник', 'https://s']]);

// SOF0 после APP0: 2x3 пикселя, 3 канала
const jpg = new Uint8Array([0xff, 0xd8, 0xff, 0xe0, 0, 4, 0, 0, 0xff, 0xc0, 0, 17, 8, 0, 3, 0, 2, 3]);
assert.deepStrictEqual(L.jpegInfo(jpg), { h: 3, w: 2, c: 3 });
assert.strictEqual(L.jpegInfo(new Uint8Array([0x89, 0x50])), null);

(async () => {
  // Настоящие сетевые функции с управляемыми часами и ответами fetch / GM.
  const source = fs.readFileSync(require.resolve('./neko_shelf.user.js'), 'utf8');
  const networkSource = source.slice(source.indexOf('  // ---------- сеть ----------'), source.indexOf('  // После первой ошибки'));
  const downloadSource = source.slice(source.indexOf('  async function download('), source.indexOf('  // ---------- интерфейс ----------'));
  function network(fetch, gm) {
    let now = Date.parse('2026-10-27T12:00:00Z');
    const timers = [], messages = [], questions = [];
    const state = { busy: true, cancel: false, fallback: null, fromBackup: 0 };
    const context = {
      module: { exports: {} }, URL, fetch, GM_xmlhttpRequest: gm, state,
      location: { origin: 'https://mangalib.me' },
      site: { type: 'lib', kind: 'manga', siteId: 1, api: 'https://api.cdnlibs.org' }, sniffExt: L.sniffExt,
      settingsLoaded: Promise.resolve(), settings: { cover: true, info: false, requestDelay: 0 }, Zip: L.Zip,
      pickBranch: () => null, chapterLabel: L.chapterLabel, chapterBody: async () => ({ html: '' }),
      fileTitle: L.fileTitle, esc: L.esc,
      Date: class extends Date { static now() { return now; } },
      sleep: (ms) => new Promise((resolve) => timers.push({ at: now + ms, resolve })),
      ui: { status: (text) => messages.push(text), ask: async (text) => { questions.push(text); return false; } },
    };
    require('vm').runInNewContext(networkSource + downloadSource + '\nmodule.exports = { retry, getBuf, getImage, api, download };', context);
    return { ...context.module.exports, state, messages, questions, settings: context.settings, now: () => now,
      async advance(ms) {
        now += ms;
        for (const timer of timers.splice(0)) {
          if (timer.at <= now) timer.resolve(); else timers.push(timer);
        }
        await new Promise(setImmediate);
      },
    };
  }
  const url = 'https://img3.cdnlibs.org/page.jpg';
  // Общая задержка разносит старты запросов API и картинок из параллельных потоков.
  {
    const starts = [];
    const h = network(async (requested) => {
      starts.push(h.now());
      return requested === url ? new Response(jpg) : Response.json({ data: { title: 'Test' } });
    });
    h.settings.requestDelay = 0.5;
    const pending = Promise.all([h.api('/first'), h.getImage([url]), h.api('/second')]);
    await h.advance(0);
    const first = starts[0];
    assert.strictEqual(starts.length, 1);
    await h.advance(499);
    assert.strictEqual(starts.length, 1);
    await h.advance(1);
    assert.strictEqual(starts.length, 2);
    await h.advance(500);
    await pending;
    assert.deepStrictEqual(starts, [first, first + 500, first + 1000]);
  }
  // Отмена во время обычной задержки тоже не запускает следующий запрос.
  {
    let calls = 0;
    const h = network(async () => { calls++; return new Response(jpg); });
    h.settings.requestDelay = 2;
    await h.getImage([url]);
    const pending = assert.rejects(h.getImage([url]), /Отменено/);
    await h.advance(0);
    h.state.cancel = true;
    await h.advance(1000);
    await pending;
    assert.strictEqual(calls, 1);
  }
  // Нулевая задержка сохраняет параллельную загрузку.
  {
    let calls = 0;
    const h = network(async () => { calls++; return new Response(jpg); });
    await Promise.all([h.getImage([url]), h.getImage([url]), h.getImage([url])]);
    assert.strictEqual(calls, 3);
  }
  // Fetch с ошибкой CORS тоже мог дойти до сервера: переход на GM соблюдает интервал.
  {
    const starts = [];
    const h = network(async () => { starts.push(['fetch', h.now()]); throw new TypeError('CORS'); }, (opts) => {
      starts.push(['GM', h.now()]);
      opts.onload({ status: 200, response: jpg.buffer });
    });
    h.settings.requestDelay = 0.5;
    const pending = h.getImage([url]);
    await h.advance(0);
    const first = starts[0][1];
    assert.strictEqual(starts.length, 1);
    await h.advance(500);
    await pending;
    assert.deepStrictEqual(starts, [['fetch', first], ['GM', first + 500]]);
  }
  // При 429 ждём и сервер, и заданный интервал, затем сохраняем расстояние между потоками.
  {
    const starts = [];
    const h = network(async () => {
      starts.push(h.now());
      return starts.length === 1 ? new Response('', { status: 429, headers: { 'Retry-After': '1' } }) : new Response(jpg);
    });
    h.settings.requestDelay = 0.5;
    const first = h.getImage([url]);
    await h.advance(0);
    const second = h.getImage([url]);
    await h.advance(999);
    assert.strictEqual(starts.length, 1);
    await h.advance(1);
    assert.strictEqual(starts.length, 2);
    await h.advance(500);
    await Promise.all([first, second]);
    assert.deepStrictEqual(starts, [starts[0], starts[0] + 1000, starts[0] + 1500]);
  }

  // Новое поле переживает сохранение, а старые настройки получают значение 0.
  const settingsSource = source.slice(source.indexOf('  const settings ='), source.indexOf('  async function download('));
  function storedSettings(storage, gm = false) {
    const context = { module: { exports: {} },
      localStorage: { getItem: (key) => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) },
    };
    if (gm) context.GM = {
      getValue: async (key, fallback) => storage.has(key) ? JSON.parse(storage.get(key)) : fallback,
      setValue: async (key, value) => storage.set(key, JSON.stringify(value)),
    };
    require('vm').runInNewContext(settingsSource + '\nmodule.exports = { settings, settingsLoaded, saveSettings };', context);
    return context.module.exports;
  }
  for (const gm of [false, true]) {
    const storage = new Map([['neko-shelf-settings', JSON.stringify({ sameWidth: false, cover: false })]]);
    const first = storedSettings(storage, gm);
    await first.settingsLoaded;
    assert.strictEqual(first.settings.requestDelay, 0);
    first.settings.requestDelay = 0.5;
    await first.saveSettings();
    const second = storedSettings(storage, gm);
    await second.settingsLoaded;
    assert.strictEqual(second.settings.requestDelay, 0.5);
    assert.strictEqual(second.settings.sameWidth, false);
    assert.strictEqual(second.settings.cover, false);
  }
  for (const [value, want] of [[-1, 0], ['invalid', 0], [null, 0], [100, 60], ['0.5', 0.5]]) {
    const loaded = storedSettings(new Map([['neko-shelf-settings', JSON.stringify({ requestDelay: value })]]));
    await loaded.settingsLoaded;
    assert.strictEqual(loaded.settings.requestDelay, want);
  }
  for (const transport of ['fetch', 'GM']) {
    let calls = 0, result, error;
    const h = network(async (requested) => {
      assert.strictEqual(requested, url);
      if (transport === 'GM') throw new TypeError('CORS');
      return ++calls === 1 ? new Response('', { status: 429, headers: { 'Retry-After': '120' } }) : new Response(jpg);
    }, (opts) => {
      assert.strictEqual(opts.url, url);
      opts.onload(++calls === 1
        ? { status: 429, responseHeaders: 'Content-Type: text/html\r\nrEtRy-AfTeR: 120\r\n' }
        : { status: 200, response: jpg.buffer });
    });
    const pending = h.getImage([url, 'https://img2.imglib.info/page.avif']).then((img) => { result = img; }, (e) => { error = e; });
    await h.advance(0);
    await h.advance(5000);
    assert.strictEqual(calls, 1, `${transport}: Retry-After must delay the second request`);
    await h.advance(115000);
    await pending;
    assert.ifError(error);
    assert.deepStrictEqual(new Uint8Array(result.buf), jpg);
    assert.strictEqual(result.ext, 'jpg');
    assert.strictEqual(h.questions.length, 0, 'no fallback question after a successful retry');
    assert.ok(h.messages.some((text) => text.includes('429')), 'waiting is visible');
  }
  // API глав передаёт Retry-After в тот же механизм повторов.
  {
    let calls = 0;
    const h = network(async () => ++calls === 1
      ? new Response('', { status: 429, headers: { 'Retry-After': '90' } })
      : Response.json({ data: { title: 'Test' } }));
    const pending = h.api('/api/manga/test/chapter');
    await h.advance(0);
    await h.advance(89999);
    assert.strictEqual(calls, 1);
    await h.advance(1);
    assert.strictEqual((await pending).title, 'Test');
  }
  for (const [value, wait] of [
    [null, 60000], ['invalid', 60000], ['-1', 60000],
    ['Tue, 27 Oct 2026 12:02:00 GMT', 120000], ['0', 1000],
  ]) {
    let calls = 0;
    const h = network(async () => ++calls === 1
      ? new Response('', { status: 429, headers: value == null ? {} : { 'Retry-After': value } })
      : new Response(jpg));
    const pending = h.retry(() => h.getBuf(url), 3);
    await h.advance(0);
    await h.advance(wait - 1);
    assert.strictEqual(calls, 1, `Retry-After ${value}: no early retry`);
    await h.advance(1);
    await pending;
    assert.strictEqual(calls, 2);
  }
  // Новый запрос другого потока тоже ждёт снятия ограничения.
  {
    let calls = 0;
    const h = network(async () => ++calls === 1 ? new Response('', { status: 429 }) : new Response(jpg));
    const first = h.retry(() => h.getBuf(url), 3);
    await h.advance(0);
    const second = h.retry(() => h.getBuf(url), 3);
    await h.advance(59999);
    assert.strictEqual(calls, 1);
    await h.advance(1);
    await Promise.all([first, second]);
    assert.strictEqual(calls, 3);
  }
  // Бесконечных повторов нет; обычные 4xx и 5xx обрабатываются по-прежнему.
  for (const [status, delays, attempts] of [[429, [60000, 120000], 3], [404, [], 1], [503, [1500, 3000], 3]]) {
    let calls = 0;
    const h = network(async () => { calls++; return new Response('', { status }); });
    const pending = assert.rejects(h.retry(() => h.getBuf(url), 3), (e) => e.status === status);
    await h.advance(0);
    for (const delay of delays) await h.advance(delay);
    await pending;
    assert.strictEqual(calls, attempts);
  }
  {
    let calls = 0;
    const h = network(async () => { calls++; return new Response('', { status: 429 }); });
    const pending = assert.rejects(h.getImage([url, 'https://img2.imglib.info/page.avif']), (e) => e.status === 429);
    await h.advance(0);
    assert.strictEqual(h.questions.length, 0);
    await h.advance(60000);
    assert.strictEqual(h.questions.length, 0);
    await h.advance(120000);
    await pending;
    assert.strictEqual(calls, 3);
    assert.strictEqual(h.questions.length, 1, 'fallback is offered only after all retries fail');
  }
  // «Отмена» прерывает длинную паузу без нового запроса.
  {
    let calls = 0;
    const h = network(async () => { calls++; return new Response('', { status: 429 }); });
    const pending = assert.rejects(h.getImage([url, 'https://img2.imglib.info/page.avif']), /Отменено/);
    await h.advance(0);
    h.state.cancel = true;
    await h.advance(1000);
    await pending;
    assert.strictEqual(calls, 1);
    assert.strictEqual(h.questions.length, 0, 'cancel must not open the fallback question');
  }
  // Последний ответ 429 тоже запрещает следующие запросы до Retry-After.
  {
    let calls = 0;
    const h = network(async () => ++calls <= 3
      ? new Response('', { status: 429, headers: { 'Retry-After': '60' } }) : new Response(jpg));
    const exhausted = assert.rejects(h.retry(() => h.getBuf(url), 3), (e) => e.status === 429);
    await h.advance(0);
    await h.advance(60000);
    await h.advance(60000);
    await exhausted;
    const next = h.retry(() => h.getBuf(url), 3);
    await h.advance(59999);
    assert.strictEqual(calls, 3, 'the exhausted request still establishes a cooldown');
    await h.advance(1);
    await next;
    assert.strictEqual(calls, 4);
  }
  // CBZ берёт обложку последней: отмена её ожидания не должна сохранить файл.
  {
    const h = network(async () => new Response('', { status: 429 }));
    const pending = assert.rejects(h.download('test', {
      meta: { title: 'Test', cover: url }, chapters: [{ volume: '1', number: '1' }], branches: new Map(),
    }, { from: 0, to: 0, format: 'cbz' }, { status() {} }), /Отменено/);
    await h.advance(0);
    await h.advance(300);
    h.state.cancel = true;
    await h.advance(1000);
    await pending;
  }

  // PDF: каждая запись xref должна указывать ровно на начало «N 0 obj»
  const pdfText = async (sizes, sameWidth) => {
    const p = new L.Pdf(sameWidth);
    for (const [w, h, fit] of sizes) p.addImage({ bytes: jpg, w, h, c: 3, fit });
    const buf = Buffer.from(await p.blob({ title: 'Тест', keywords: 'Драма, Комедия' }).arrayBuffer());
    const s = buf.toString('latin1');
    const xref = +s.match(/startxref\n(\d+)/)[1];
    assert.strictEqual(s.slice(xref, xref + 4), 'xref');
    const entries = s.slice(xref).split('\n').slice(3).filter((l) => / n $/.test(l));
    entries.forEach((l, i) => assert.ok(s.startsWith(`${i + 1} 0 obj`, +l.slice(0, 10)), `xref ${i + 1}`));
    return { s, buf, boxes: [...s.matchAll(/MediaBox\[0 0 ([\d.]+) ([\d.]+)\]/g)].map((m) => `${m[1]}x${m[2]}`) };
  };
  // самая частая ширина 800: широкая 1000x1500 ужимается до 800x1200, узкая 600x900 растягивается до 800x1200
  const a = await pdfText([[800, 1200], [800, 1000], [1000, 1500], [600, 900]]);
  assert.deepStrictEqual(a.boxes, ['800x1200', '800x1000', '800x1200', '800x1200']);
  assert.ok(a.s.includes('/Count 4'));
  // настройка «одинаковая ширина» выключена: страницы своего размера
  assert.deepStrictEqual((await pdfText([[800, 1200], [1000, 1500], [600, 900]], false)).boxes, ['800x1200', '1000x1500', '600x900']);
  // обложка (fit) крупного оригинала ужимается до общей ширины и без «одинаковой ширины»
  assert.deepStrictEqual((await pdfText([[2000, 3000, true], [800, 1200], [800, 1000]], false)).boxes, ['800x1200', '800x1200', '800x1000']);
  // предел страницы PDF 14400pt: слишком широкую ужимаем, длинную полосу режем на страницы той же ширины
  assert.deepStrictEqual((await pdfText([[20000, 3]])).boxes, ['14400x2.16']);
  const strip = await pdfText([[690, 30000], [690, 1000]]);
  assert.deepStrictEqual(strip.boxes, ['690x14400', '690x14400', '690x1200', '690x1000']);
  assert.deepStrictEqual([...strip.s.matchAll(/q 690 0 0 30000 0 (-?[\d.]+) cm/g)].map((m) => +m[1]), [-15600, -1200, 0]);
  if (process.argv[3]) fs.writeFileSync(process.argv[3], a.buf);

  const z = new L.Zip();
  z.add('mimetype', 'application/epub+zip');
  z.add('OEBPS/глава.xhtml', '<p>привет</p>');
  z.add('img/1.jpg', new Uint8Array([0xff, 0xd8, 1, 2, 3]).buffer);
  const buf = Buffer.from(await z.blob('application/zip').arrayBuffer());
  assert.strictEqual(buf.toString('latin1', 30, 38), 'mimetype'); // mimetype — первый файл, как требует EPUB
  if (process.argv[2]) fs.writeFileSync(process.argv[2], buf);
  finished = true;
  console.log('OK');
})();
