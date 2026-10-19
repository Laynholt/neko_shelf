// node neko_shelf.test.js [out.zip] [out.pdf] — самопроверка чистых функций, ZIP- и PDF-писателей
const assert = require('assert');
const fs = require('fs');
const L = require('./neko_shelf.user.js');

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
  console.log('OK');
})();
