// ==UserScript==
// @name         NekoShelf
// @namespace    https://github.com/Laynholt/neko_shelf
// @version      1.0.2
// @description  Скачивание манги и ранобэ с MangaLIB / RanobeLIB / HentaiLIB / SlashLIB в PDF, CBZ, ZIP, EPUB, FB2, TXT и HTML. Своя читалка там, где сайт без входа показывает 404. Основан на LibSaver (dfy-dpg).
// @author       laynholt
// @license      GPL-3.0
// @homepageURL  https://github.com/Laynholt/neko_shelf
// @supportURL   https://github.com/Laynholt/neko_shelf/issues
// @updateURL    https://github.com/Laynholt/neko_shelf/releases/latest/download/neko_shelf.user.js
// @downloadURL  https://github.com/Laynholt/neko_shelf/releases/latest/download/neko_shelf.user.js
// @icon         data:image/png;base64,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
// @match        https://ranobelib.me/*
// @match        https://*.ranobelib.me/*
// @match        https://novelslib.me/*
// @match        https://*.novelslib.me/*
// @match        https://mangalib.me/*
// @match        https://*.mangalib.me/*
// @match        https://mangalib.org/*
// @match        https://*.mangalib.org/*
// @match        https://hentailib.me/*
// @match        https://*.hentailib.me/*
// @match        https://hentailib.org/*
// @match        https://*.hentailib.org/*
// @match        https://shlib.life/*
// @match        https://*.shlib.life/*
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @connect      imglib.info
// @connect      cdnlibs.org
// @connect      hentaicdn.org
// @connect      mangalib.me
// @connect      mangalib.org
// @connect      ranobelib.me
// @connect      novelslib.me
// @connect      hentailib.me
// @connect      hentailib.org
// @connect      shlib.life
// @connect      cdn.jsdelivr.net
// @run-at       document-start
// @noframes
// ==/UserScript==

/* Логика взята из https://github.com/dfy-dpg/LibSaver (GPL-3.0):
 * токен сайта из localStorage -> API /api/manga/{slug}/chapters -> /chapter -> картинки с CDN. */

(function () {
  'use strict';

  const SITES = [
    { re: /(^|\.)(ranobelib|novelslib)\.me$/, kind: 'ranobe', siteId: 3, api: 'https://api.cdnlibs.org', img: [] },
    { re: /(^|\.)mangalib\.(me|org)$/, kind: 'manga', siteId: 1, api: 'https://api.cdnlibs.org', img: ['https://img3.cdnlibs.org', 'https://img2.imglib.info'] },
    { re: /(^|\.)hentailib\.(me|org)$/, kind: 'manga', siteId: 4, api: 'https://hapi.hentaicdn.org', img: ['https://img3h.hentaicdn.org', 'https://img2h.hentaicdn.org'] },
    // как в оригинале: метаданные SlashLIB с Site-Id 2, главы и страницы с Site-Id 4
    { re: /(^|\.)shlib\.life$/, kind: 'manga', siteId: 2, chapSiteId: 4, api: 'https://hapi.hentaicdn.org', img: ['https://img3.hentaicdn.org', 'https://img2.hentaicdn.org'] },
  ];
  // Набор как в оригинале; первый — по умолчанию (манга — PDF, ранобэ — TXT)
  const FORMATS = { ranobe: ['txt', 'epub', 'fb2', 'pdf', 'html'], manga: ['pdf', 'cbz', 'zip', 'epub', 'html'] };
  // Шрифт с кириллицей для PDF ранобэ — из репозитория оригинала, закреплён на коммите
  const FONT_URL = 'https://cdn.jsdelivr.net/gh/dfy-dpg/LibSaver@2fcd3ce2e5100f288954987f410f45e7767171b7/src/assets/fonts/NotoSerif-Regular.ttf';

  const JWT = /^eyJ[\w\-+=/]+\.eyJ[\w\-+=/]+\.[\w\-+=/]+$/;
  const MARKS = { bold: 'strong', italic: 'em', underline: 'u', strike: 's' };
  const MIME = { jpg: 'image/jpeg', png: 'image/png', gif: 'image/gif', webp: 'image/webp', avif: 'image/avif' };
  const IMG_TOKEN = /neko-shelf-img:(\d+)/; // временный src картинки, которую встраиваем в HTML/FB2/PDF

  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pad = (n, w) => String(n).padStart(w, '0');
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const enc = (s) => new TextEncoder().encode(s);
  const parseSlug = (path) => (path.match(/\/(?:book|manga)\/([^/?#]+)/) || [])[1] || null;
  // Адрес, который сайт без входа увёл на /404: страница тайтла или глава /{slug}/read/v{том}/c{глава}
  function parseLost(href) {
    let u;
    try { u = new URL(href); } catch { return null; }
    const r = u.pathname.match(/\/([^/]+)\/read\/v([^/]+)\/c([^/]+)/);
    const slug = r ? r[1] : parseSlug(u.pathname);
    return slug ? { href: u.href, slug, read: r ? { volume: r[2], number: r[3] } : null, bid: u.searchParams.get('bid') || '' } : null;
  }
  // Номер тома/главы из адреса (c01) и из API ("1") — одно и то же
  const sameNum = (a, b) => String(a) === String(b) || (a !== '' && b !== '' && +a === +b);
  const chapterLabel = (ch) => `Том ${ch.volume} Глава ${ch.number}${ch.name ? ' — ' + ch.name : ''}`;
  // Самое частое значение (при равенстве — то, что раньше набрало максимум)
  function mostCommon(arr) {
    const f = new Map();
    let best, top = 0;
    for (const x of arr) { const c = (f.get(x) || 0) + 1; f.set(x, c); if (c > top) { top = c; best = x; } }
    return best;
  }
  const safeName = (s) => String(s).replace(/[\\/:*?"<>|\n\r\t]+/g, ' ').trim().slice(0, 120) || 'title';

  // Ищет JWT в строке / JSON / вложенных объектах (сайт хранит токен в localStorage под разными ключами)
  function findJwt(v) {
    if (typeof v === 'string') {
      const bare = v.replace(/^Bearer /, '');
      if (JWT.test(bare)) return bare;
      try { return findJwt(JSON.parse(v)); } catch { return null; }
    }
    if (v && typeof v === 'object') {
      for (const x of Object.values(v)) { const f = findJwt(x); if (f) return f; }
    }
    return null;
  }

  // Текст главы ранобэ бывает JSON-документом (ProseMirror) — переводим в HTML
  function pmToHtml(n, att) {
    if (!n) return '';
    if (typeof n === 'string') return n;
    if (Array.isArray(n)) return n.map((x) => pmToHtml(x, att)).join('');
    const inner = () => pmToHtml(n.content, att);
    const align = n.attrs?.textAlign ? ` style="text-align:${esc(n.attrs.textAlign)}"` : '';
    switch (n.type) {
      case 'text': return (n.marks || []).reduce((t, m) => (MARKS[m.type] ? `<${MARKS[m.type]}>${t}</${MARKS[m.type]}>` : t), esc(n.text || ''));
      case 'paragraph': return `<p${align}>${inner() || '&#160;'}</p>`;
      case 'heading': { const l = Math.min(Math.max(+n.attrs?.level || 2, 1), 6); return `<h${l}${align}>${inner()}</h${l}>`; }
      case 'hardBreak': return '<br/>';
      case 'horizontalRule': return '<hr/>';
      case 'blockquote': return `<blockquote>${inner()}</blockquote>`;
      case 'bulletList': return `<ul>${inner()}</ul>`;
      case 'orderedList': return `<ol>${inner()}</ol>`;
      case 'listItem': return `<li>${inner()}</li>`;
      case 'image': {
        const imgs = (Array.isArray(n.attrs?.images) ? n.attrs.images : [n.attrs]).map((i) => i?.image || i?.src || i?.url).filter(Boolean);
        const cap = n.attrs?.description ? `<p>${esc(n.attrs.description)}</p>` : '';
        return imgs.map((k) => `<img src="${esc(att[k] || k)}" alt=""/>`).join('') + cap;
      }
      default: return inner();
    }
  }

  function sniffExt(buf) {
    const u = new Uint8Array(buf.slice(0, 12));
    if (u[0] === 0xff && u[1] === 0xd8) return 'jpg';
    if (u[0] === 0x89 && u[1] === 0x50) return 'png';
    if (u[0] === 0x47 && u[1] === 0x49) return 'gif';
    if (u[8] === 0x57 && u[9] === 0x45 && u[10] === 0x42 && u[11] === 0x50) return 'webp';
    if (String.fromCharCode(...u.slice(4, 11)) === 'ftypavi') return 'avif'; // запасной (основной на сайте) сервер манги отдаёт AVIF
    if (u[0] === 0x3c || u.length === 0) throw new Error('сервер вернул не картинку');
    return 'jpg';
  }

  // Размер и число цветовых каналов JPEG из маркера SOF — чтобы вставить JPEG в PDF без перекодирования
  function jpegInfo(u8) {
    for (let i = 2; i + 9 < u8.length;) {
      if (u8[i] !== 0xff) return null;
      const m = u8[i + 1];
      if (m === 0xff) { i++; continue; }
      if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) {
        return { h: u8[i + 5] << 8 | u8[i + 6], w: u8[i + 7] << 8 | u8[i + 8], c: u8[i + 9] };
      }
      i += 2 + (u8[i + 2] << 8 | u8[i + 3]);
    }
    return null;
  }

  const CRC_TABLE = Uint32Array.from({ length: 256 }, (_, n) => {
    for (let k = 0; k < 8; k++) n = n & 1 ? 0xedb88320 ^ (n >>> 1) : n >>> 1;
    return n >>> 0;
  });
  function crc32(u8) {
    let c = 0xffffffff;
    for (let i = 0; i < u8.length; i++) c = CRC_TABLE[(c ^ u8[i]) & 0xff] ^ (c >>> 8);
    return (c ^ 0xffffffff) >>> 0;
  }

  // Минимальный ZIP без сжатия (STORE). Картинки и так сжаты, а данные сразу уходят в Blob и не копятся в JS-памяти.
  // shortcut: ZIP32 — до 65535 файлов и 4 ГБ на архив; для манги на десятки тысяч страниц нужен ZIP64.
  class Zip {
    constructor() {
      this.parts = []; this.central = []; this.offset = 0; this.count = 0;
      const d = new Date();
      this.time = ((d.getFullYear() - 1980) << 25 | (d.getMonth() + 1) << 21 | d.getDate() << 16 | d.getHours() << 11 | d.getMinutes() << 5 | d.getSeconds() >> 1) >>> 0;
    }
    add(name, data) {
      const bytes = typeof data === 'string' ? enc(data) : new Uint8Array(data);
      const nameB = enc(name);
      const crc = crc32(bytes);
      const head = (sig, len, extra) => {
        const v = new DataView(new ArrayBuffer(len));
        v.setUint32(0, sig, true);
        let o = 4;
        if (extra) { v.setUint16(o, 20, true); o += 2; } // version made by
        for (const [val, size] of [[20, 2], [0x0800, 2], [0, 2], [this.time, 4], [crc, 4], [bytes.length, 4], [bytes.length, 4], [nameB.length, 2]]) {
          size === 2 ? v.setUint16(o, val, true) : v.setUint32(o, val, true); o += size;
        }
        if (extra) v.setUint32(42, this.offset, true); // смещение локального заголовка
        return v;
      };
      this.parts.push(head(0x04034b50, 30, false), nameB, new Blob([bytes]));
      this.central.push(head(0x02014b50, 46, true), nameB);
      this.offset += 30 + nameB.length + bytes.length;
      this.count++;
    }
    blob(type) {
      const cdSize = this.central.reduce((s, p) => s + p.byteLength, 0);
      const end = new DataView(new ArrayBuffer(22));
      end.setUint32(0, 0x06054b50, true);
      end.setUint16(8, this.count, true); end.setUint16(10, this.count, true);
      end.setUint32(12, cdSize, true); end.setUint32(16, this.offset, true);
      return new Blob([...this.parts, ...this.central, end], { type });
    }
  }

  // Минимальный PDF «страница = картинка» для манги: JPEG вставляется как есть, данные сразу уходят в Blob
  class Pdf {
    constructor() { this.parts = []; this.off = []; this.len = 0; this.pages = []; this.next = 3; this.put('%PDF-1.4\n%\xff\xff\xff\xff\n'); }
    put(x) { const b = typeof x === 'string' ? enc(x) : x; this.parts.push(b instanceof Uint8Array ? new Blob([b]) : b); this.len += b.byteLength ?? b.size; }
    obj(id, dict, data) {
      this.off[id] = this.len;
      if (!data) return this.put(`${id} 0 obj\n${dict}\nendobj\n`);
      this.put(`${id} 0 obj\n${dict}\nstream\n`); this.put(data); this.put('\nendstream\nendobj\n');
    }
    // Картинку пишем сразу, а страницу — в blob(), когда известна самая частая ширина
    addImage({ bytes, w, h, c }) {
      const img = this.next++;
      this.obj(img, `<</Type/XObject/Subtype/Image/Width ${w}/Height ${h}/ColorSpace/${c === 1 ? 'DeviceGray' : 'DeviceRGB'}/BitsPerComponent 8/Filter/DCTDecode/Length ${bytes.length}>>`, bytes);
      this.pages.push({ img, w, h });
    }
    blob(title) {
      // Все страницы приводим к самой частой ширине (широкие ужимаем, узкие растягиваем) с сохранением пропорций.
      // Это только масштаб страницы в PDF: пиксели картинки не пересжимаются.
      const common = mostCommon(this.pages.map((p) => p.w));
      const MAX = 14400; // предел размера страницы PDF, pt
      const f = (n) => +n.toFixed(2);
      const kids = [];
      for (const { img, w, h } of this.pages) {
        const s = Math.min(common / w, MAX / w);
        const pw = f(w * s), ph = h * s;
        // Длинную полосу (вебтун) не ужимаем, а режем на страницы одной ширины: та же картинка, сдвинутая вверх
        for (let y0 = 0; ph - y0 > 0.5; y0 += MAX) {
          const hk = Math.min(MAX, ph - y0);
          const content = this.next++, page = this.next++;
          const draw = enc(`q ${pw} 0 0 ${f(ph)} 0 ${f(hk + y0 - ph)} cm /I Do Q`);
          this.obj(content, `<</Length ${draw.length}>>`, draw);
          this.obj(page, `<</Type/Page/Parent 2 0 R/MediaBox[0 0 ${pw} ${f(hk)}]/Resources<</XObject<</I ${img} 0 R>>>>/Contents ${content} 0 R>>`);
          kids.push(page);
        }
      }
      const t = title ? `/Title<FEFF${[...String(title)].map((ch) => { const p = ch.codePointAt(0); return p > 0xffff ? '' : pad(p.toString(16), 4); }).join('')}>` : '';
      this.obj(1, '<</Type/Catalog/Pages 2 0 R>>');
      this.obj(2, `<</Type/Pages/Kids[${kids.map((k) => k + ' 0 R').join(' ')}]/Count ${kids.length}>>`);
      const info = this.next;
      this.obj(info, `<<${t}/Producer(NekoShelf userscript)>>`);
      const xref = this.len;
      let x = `xref\n0 ${info + 1}\n0000000000 65535 f \n`;
      for (let i = 1; i <= info; i++) x += `${pad(this.off[i], 10)} 00000 n \n`;
      this.put(`${x}trailer\n<</Size ${info + 1}/Root 1 0 R/Info ${info} 0 R>>\nstartxref\n${xref}\n%%EOF\n`);
      return new Blob(this.parts, { type: 'application/pdf' });
    }
  }

  if (typeof module === 'object' && module.exports) {
    module.exports = { findJwt, pmToHtml, sniffExt, jpegInfo, parseSlug, parseLost, sameNum, chapterLabel, esc, safeName, mostCommon, crc32, Zip, Pdf };
    return;
  }

  const site = SITES.find((s) => s.re.test(location.hostname));
  if (!site) return;

  // ---------- сеть ----------

  const gmXhr = typeof GM !== 'undefined' && GM.xmlHttpRequest ? GM.xmlHttpRequest.bind(GM)
    : typeof GM_xmlhttpRequest === 'function' ? GM_xmlhttpRequest : null;

  const GM_HOSTS = /(^|\.)(cdnlibs\.org|imglib\.info|hentaicdn\.org|mangalib\.(me|org)|ranobelib\.me|novelslib\.me|hentailib\.(me|org)|shlib\.life|cdn\.jsdelivr\.net)$/;
  function gmGet(url, responseType, headers) {
    return new Promise((resolve, reject) => {
      if (!gmXhr) return reject(new Error('менеджер скриптов не дал GM.xmlHttpRequest'));
      // адреса картинок приходят из глав — привилегированный запрос пускаем только к своим серверам
      // (продублировано с @connect: Userscripts на iOS его не соблюдает)
      let u;
      try { u = new URL(url); } catch { return reject(new Error('плохой адрес')); }
      // status 403 — чтобы retry не повторял: ответ не изменится
      if (u.protocol !== 'https:' || !GM_HOSTS.test(u.hostname)) return reject(Object.assign(new Error('чужой сервер: ' + u.hostname), { status: 403 }));
      gmXhr({
        method: 'GET', url, responseType, headers, timeout: 60000,
        onload: (r) => (r.status >= 200 && r.status < 300 ? resolve(r.response) : reject(Object.assign(new Error('HTTP ' + r.status), { status: r.status }))),
        onerror: () => reject(new Error('сетевая ошибка')),
        ontimeout: () => reject(new Error('таймаут')),
      });
    });
  }

  // 429/5xx/сеть — ждём и повторяем; 4xx (кроме 429) — сразу ошибка
  async function retry(fn, tries = 5) {
    for (let i = 0; ; i++) {
      try { return await fn(); } catch (e) {
        if (i >= tries - 1 || (e.status && e.status !== 429 && e.status < 500)) throw e;
        await sleep((e.status === 429 ? 5000 : 1500) * (i + 1));
      }
    }
  }

  function token() {
    try {
      for (const s of [localStorage, sessionStorage]) {
        for (let i = 0; i < s.length; i++) { const t = findJwt(s.getItem(s.key(i))); if (t) return t; }
      }
    } catch { /* storage недоступен — качаем без авторизации */ }
    return null;
  }

  // API ходим из контекста страницы, как сам сайт (CORS для него открыт)
  function api(path, siteId = site.siteId) {
    const headers = { 'Site-Id': String(siteId) };
    const t = token();
    if (t) headers.Authorization = 'Bearer ' + t;
    return retry(async () => {
      const r = await fetch(site.api + path, { headers });
      if (!r.ok) throw Object.assign(new Error(`API ${r.status}`), { status: r.status });
      return (await r.json()).data;
    });
  }

  // CDN без Referer сайта отвечает 403, а Userscripts на iOS не передаёт Referer в GM.xmlHttpRequest.
  // Поэтому сначала обычный fetch со страницы (Referer ставит браузер; у сервера скачивания CORS открыт),
  // а если сервер без CORS — через GM.xmlHttpRequest
  function getBuf(url) {
    return fetch(url).then(
      (r) => (r.ok ? r.arrayBuffer() : Promise.reject(Object.assign(new Error('HTTP ' + r.status), { status: r.status }))),
      () => gmGet(url, 'arraybuffer', { Referer: location.origin + '/' }),
    );
  }

  // urls[0] — сервер скачивания (JPEG), остальные — запасные (AVIF); переход на них только с согласия пользователя
  async function getImage(urls) {
    // после согласия не тратим время на повторы к упавшему основному серверу
    for (let i = (await state.fallback) && urls.length > 1 ? 1 : 0; ; i++) {
      try {
        const buf = await retry(() => getBuf(urls[i]), 3);
        if (i) state.fromBackup++;
        return { buf, ext: sniffExt(buf) };
      } catch (e) {
        if (i + 1 >= urls.length || !(await askFallback(e))) throw e;
      }
    }
  }

  // Спрашиваем один раз за загрузку; параллельные запросы ждут тот же ответ
  function askFallback(err) {
    state.fallback ??= ui.ask(`Сервер скачивания картинок не отвечает (${err.message}).\nБрать картинки с запасного сервера? Они в формате AVIF: для всех форматов, кроме HTML, перекодируются в JPEG (чуть хуже качество, дольше на телефоне). Иначе такие страницы будут пропущены, а глава попадёт в ошибки.`);
    return state.fallback;
  }

  // После первой ошибки остальные потоки не берут новые элементы — иначе главу, которая уже провалилась,
  // докачивали бы в фоне, пока идёт следующая
  async function pool(items, n, fn) {
    let i = 0, failed = false;
    await Promise.all(Array.from({ length: Math.min(n, items.length) }, async () => {
      while (i < items.length && !failed) {
        const k = i++;
        try { await fn(items[k], k); } catch (e) { failed = true; throw e; }
      }
    }));
  }

  let imageServers;
  async function getImageServers() {
    if (imageServers) return imageServers;
    try {
      const list = (await api('/api/constants?fields[]=imageServers')).imageServers || [];
      // сначала сервер «Скачивание» (полноразмерный JPEG), потом остальные (основной отдаёт AVIF)
      const rank = (s) => (['download', 'compress'].includes(s.id) ? 0 : 1);
      imageServers = [...new Set(list.filter((s) => s.url && s.site_ids?.includes(site.siteId) && s.id !== 'crop').sort((a, b) => rank(a) - rank(b)).map((s) => s.url))];
    } catch { /* берём захардкоженные ниже */ }
    if (!imageServers?.length) imageServers = site.img;
    return imageServers;
  }

  // ---------- картинки ----------

  // Рисуем картинку в размере w×h на белом фоне и сохраняем как JPEG
  async function drawJpeg(bmp, w, h) {
    const cv = document.createElement('canvas');
    cv.width = w; cv.height = h;
    const ctx = cv.getContext('2d');
    ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h); // прозрачность PNG -> белый фон
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(bmp, 0, 0, w, h);
    const blob = await new Promise((r) => cv.toBlob(r, 'image/jpeg', 0.92));
    cv.width = cv.height = 0; // освобождаем память canvas (важно на iOS)
    if (!blob) throw new Error('не удалось перекодировать картинку в JPEG');
    return new Uint8Array(await blob.arrayBuffer());
  }

  // JPEG (серый/RGB) отдаём как есть, остальное (PNG/WebP/GIF/AVIF/CMYK) перекодируем через canvas
  async function toJpeg(buf, ext) {
    const bytes = new Uint8Array(buf);
    const info = ext === 'jpg' && jpegInfo(bytes);
    if (info && (info.c === 1 || info.c === 3)) return { bytes, ...info };
    const bmp = await createImageBitmap(new Blob([buf]));
    try { return { bytes: await drawJpeg(bmp, bmp.width, bmp.height), w: bmp.width, h: bmp.height, c: 3 }; } finally { bmp.close?.(); }
  }

  // CBZ: приводим картинку к ширине target с сохранением пропорций; картинку нужной ширины не трогаем
  // shortcut: больше ~16 Мпикс после масштаба оставляем как есть — столько canvas на iOS не тянет
  async function fitWidth(buf, ext, target) {
    if (ext === 'jpg' && jpegInfo(new Uint8Array(buf))?.w === target) return { buf, ext }; // быстрый путь без декодирования
    const bmp = await createImageBitmap(new Blob([buf]));
    try {
      const h = Math.round(bmp.height * target / bmp.width);
      if (bmp.width === target || target * h > 16e6 || h > 32000) return { buf, ext };
      return { buf: await drawJpeg(bmp, target, h), ext: 'jpg' };
    } finally { bmp.close?.(); }
  }

  const base64 = (buf) => new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(fr.result.slice(fr.result.indexOf(',') + 1));
    fr.onerror = () => reject(fr.error);
    fr.readAsDataURL(new Blob([buf]));
  });

  let fontBytes;
  const getFont = async () => fontBytes || (fontBytes = await retry(() => gmGet(FONT_URL, 'arraybuffer'), 3));

  // ---------- загрузка тайтла ----------

  async function loadTitle(slug) {
    const fields = ['eng_name', 'otherNames', 'summary', 'authors', 'releaseDate'].map((f) => `fields[]=${f}`).join('&');
    const [meta, chapters] = await Promise.all([
      api(`/api/manga/${slug}?${fields}`),
      api(`/api/manga/${slug}/chapters`, site.chapSiteId),
    ]);
    const branches = new Map();
    for (const ch of chapters) {
      for (const b of ch.branches || []) {
        if (!branches.has(String(b.branch_id))) branches.set(String(b.branch_id), (b.teams || []).map((t) => t.name).join(', ') || 'Без команды');
      }
    }
    return { meta, chapters, branches };
  }

  function pickBranch(ch, wanted) {
    const bs = ch.branches || [];
    const b = bs.find((x) => String(x.branch_id) === wanted) || bs[0];
    return b && b.branch_id != null ? `&branch_id=${b.branch_id}` : '';
  }

  async function chapterData(slug, ch, branch) {
    const data = await api(`/api/manga/${slug}/chapter?number=${encodeURIComponent(ch.number)}&volume=${encodeURIComponent(ch.volume)}${pickBranch(ch, branch)}`, site.chapSiteId);
    const d = Array.isArray(data) ? data[0] : data;
    if (!d) throw new Error('пустой ответ');
    return d;
  }

  // Страницы манги: для каждой — список адресов (по серверам картинок)
  async function pageUrls(d) {
    const servers = await getImageServers();
    const pages = d.pages || [];
    if (!pages.length) throw new Error('нет страниц (платная или удалённая глава?)');
    return pages.map((p) => (/^https?:/.test(p.url) ? [p.url] : servers.map((s) => s + p.url.replace(/^\/+/, '/'))));
  }

  // Текст главы ранобэ -> DOM с картинками-вложениями
  function ranobeDoc(d) {
    let content = d.content;
    if (typeof content === 'string' && content.startsWith('{')) { try { content = JSON.parse(content); } catch { /* оставляем как HTML */ } }
    const att = {};
    for (const a of d.attachments || []) if (a.name && a.url) att[a.name] = new URL(a.url, location.origin).href;
    if (content == null || content === '') throw new Error('нет текста (платная глава или нужен вход в аккаунт?)');

    const doc = new DOMParser().parseFromString(`<body>${pmToHtml(content, att)}</body>`, 'text/html');
    // как в оригинале: <img> с пустым src заполняем вложениями по порядку, а если картинок нет — дописываем вложения в конец
    const imgs = [...doc.querySelectorAll('img')];
    const attList = Object.values(att);
    if (typeof content === 'string') {
      if (!imgs.length) for (const u of attList) { const im = doc.createElement('img'); im.setAttribute('src', u); doc.body.appendChild(im); }
      else { let k = 0; for (const im of imgs) if (!im.getAttribute('src') && k < attList.length) im.setAttribute('src', attList[k++]); }
    }
    return cleanDoc(doc);
  }

  // HTML главы пишут люди на сайте: оставляем только разметку текста и картинки по http(s), остальное — текстом
  const KEEP_TAGS = new Set('P BR HR H1 H2 H3 H4 H5 H6 STRONG B EM I U S DEL BLOCKQUOTE UL OL LI IMG SUP SUB SPAN DIV TABLE THEAD TBODY TR TD TH'.split(' '));
  const httpUrl = (v) => { try { return /^https?:$/.test(new URL(v, location.origin).protocol); } catch { return false; } };
  function cleanDoc(doc) {
    for (const el of doc.body.querySelectorAll('script,style,iframe,object,embed,svg,math,template,noscript,textarea,select,form,link,meta,base,title')) el.remove();
    for (const el of [...doc.body.querySelectorAll('*')]) {
      if (!KEEP_TAGS.has(el.tagName)) { el.replaceWith(...el.childNodes); continue; }
      for (const a of [...el.attributes]) {
        const ok = a.name === 'alt' || (a.name === 'src' && el.tagName === 'IMG' && httpUrl(a.value)) || (a.name === 'style' && /^text-align:\s*\w+;?$/.test(a.value));
        if (!ok) el.removeAttribute(a.name);
      }
    }
    return doc;
  }

  // Возвращает XHTML-фрагмент главы; каждую картинку отдаёт в addImage(buf, ext, page) -> её src
  async function chapterBody(slug, ch, branch, addImage, onImage) {
    const d = await chapterData(slug, ch, branch);

    if (site.kind === 'manga') {
      const got = [];
      await pool(await pageUrls(d), 3, async (urls, i) => {
        got[i] = await getImage(urls);
        onImage();
      });
      const out = [];
      const common = mostCommon(d.pages.map((p) => p.width).filter(Boolean)); // самая частая ширина страниц главы (из API)
      for (let i = 0; i < got.length; i++) { out.push(await addImage(got[i].buf, got[i].ext, i, common)); got[i] = null; } // по порядку страниц
      return { html: out.map((src) => `<div class="page"><img src="${src}" alt=""/></div>`).join('\n') };
    }

    // ранобэ
    const doc = ranobeDoc(d);
    for (const im of doc.querySelectorAll('img')) {
      const src = im.getAttribute('src');
      try {
        if (!src) throw new Error('пустой src');
        const img = await getImage([new URL(src, location.origin).href]);
        im.setAttribute('src', await addImage(img.buf, img.ext));
        im.setAttribute('alt', im.getAttribute('alt') || '');
        onImage();
      } catch (e) {
        const p = doc.createElement('p'); p.textContent = '[картинка не загрузилась]'; im.replaceWith(p);
      }
    }
    const xs = new XMLSerializer();
    return { html: [...doc.body.childNodes].map((n) => xs.serializeToString(n)).join('\n') };
  }

  // XHTML главы -> плоский список блоков для FB2/TXT/PDF: {img} | {hr} | {text, fb2, head}
  const FB2_INLINE = { STRONG: 'strong', B: 'strong', EM: 'emphasis', I: 'emphasis', U: 'emphasis', S: 'strikethrough', DEL: 'strikethrough' };
  function blocks(html) {
    const body = new DOMParser().parseFromString(`<body>${html}</body>`, 'text/html').body;
    const ws = (s) => s.replace(/\s+/g, ' ').trim();
    const inline = (n) => {
      if (n.nodeType === 3) return esc(n.data);
      if (n.nodeType !== 1) return '';
      if (n.tagName === 'BR') return ' ';
      const c = [...n.childNodes].map(inline).join('');
      const t = FB2_INLINE[n.tagName];
      return t && c.trim() ? `<${t}>${c}</${t}>` : c;
    };
    const out = [];
    const walk = (el) => {
      if (el.nodeType === 3) { const t = ws(el.data); if (t) out.push({ text: t, fb2: esc(t) }); return; }
      if (el.nodeType !== 1) return;
      if (el.tagName === 'IMG') { out.push({ img: el.getAttribute('src') || '' }); return; }
      if (el.tagName === 'HR') { out.push({ hr: true }); return; }
      if (el.querySelector('img') || /^(DIV|SECTION|BLOCKQUOTE|UL|OL|FIGURE|TABLE|TBODY|TR)$/.test(el.tagName)) { el.childNodes.forEach(walk); return; }
      out.push({ text: ws(el.textContent), fb2: ws(inline(el)), head: /^H[1-6]$/.test(el.tagName) });
    };
    body.childNodes.forEach(walk);
    return out;
  }

  // ---------- форматы ----------

  function epubFiles(zip, book, chapters, images, cover) {
    const title = esc(book.title + book.range);
    zip.add('META-INF/container.xml', '<?xml version="1.0"?><container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container"><rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles></container>');
    zip.add('OEBPS/style.css', 'body{margin:0 4%;line-height:1.5}img{max-width:100%;height:auto;display:block;margin:0 auto}.page{text-align:center;page-break-after:always}h2{text-align:center}');
    chapters.forEach((c, i) => zip.add(`OEBPS/c${pad(i + 1, 4)}.xhtml`,
      `<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE html>\n<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru"><head><meta charset="utf-8"/><title>${esc(c.title)}</title><link rel="stylesheet" type="text/css" href="style.css"/></head><body><h2>${esc(c.title)}</h2>\n${c.html}\n</body></html>`));
    const navLis = chapters.map((c, i) => `<li><a href="c${pad(i + 1, 4)}.xhtml">${esc(c.title)}</a></li>`).join('');
    zip.add('OEBPS/nav.xhtml', `<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE html>\n<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="ru"><head><meta charset="utf-8"/><title>${title}</title></head><body><nav epub:type="toc"><h1>${title}</h1><ol>${navLis}</ol></nav></body></html>`);
    // Отдельная первая страница с обложкой: cover-image в манифесте читалки используют только для библиотеки
    if (cover) zip.add('OEBPS/cover.xhtml', `<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE html>\n<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru"><head><meta charset="utf-8"/><title>${title}</title><style>body{margin:0;text-align:center}img{max-width:100%;max-height:100vh;height:auto}</style></head><body><img src="${cover.path}" alt="${title}"/></body></html>`);
    const ncx = chapters.map((c, i) => `<navPoint id="n${i + 1}" playOrder="${i + 1}"><navLabel><text>${esc(c.title)}</text></navLabel><content src="c${pad(i + 1, 4)}.xhtml"/></navPoint>`).join('');
    zip.add('OEBPS/toc.ncx', `<?xml version="1.0" encoding="utf-8"?><ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1"><head><meta name="dtb:uid" content="urn:neko-shelf:${esc(book.uid)}"/></head><docTitle><text>${title}</text></docTitle><navMap>${ncx}</navMap></ncx>`);
    const items = [
      '<item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>',
      '<item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>',
      '<item id="css" href="style.css" media-type="text/css"/>',
      ...(cover ? ['<item id="cover-page" href="cover.xhtml" media-type="application/xhtml+xml"/>'] : []),
      ...chapters.map((c, i) => `<item id="c${i + 1}" href="c${pad(i + 1, 4)}.xhtml" media-type="application/xhtml+xml"/>`),
      ...images.map((im, i) => `<item id="${im === cover ? 'cover' : 'i' + i}" href="${im.path}" media-type="${MIME[im.ext]}"${im === cover ? ' properties="cover-image"' : ''}/>`),
    ];
    const spine = (cover ? '<itemref idref="cover-page"/>' : '') + chapters.map((c, i) => `<itemref idref="c${i + 1}"/>`).join('');
    zip.add('OEBPS/content.opf', `<?xml version="1.0" encoding="utf-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="uid" xml:lang="ru">
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
<dc:identifier id="uid">urn:neko-shelf:${esc(book.uid)}</dc:identifier>
<dc:title>${title}</dc:title><dc:language>ru</dc:language>
${book.author ? `<dc:creator>${esc(book.author)}</dc:creator>` : ''}
${book.description ? `<dc:description>${esc(book.description)}</dc:description>` : ''}
<meta property="dcterms:modified">${new Date().toISOString().replace(/\.\d+Z$/, 'Z')}</meta>
${cover ? '<meta name="cover" content="cover"/>' : ''}
</metadata>
<manifest>${items.join('\n')}</manifest>
<spine toc="ncx">${spine}</spine>
${cover ? '<guide><reference type="cover" title="Обложка" href="cover.xhtml"/></guide>' : ''}
</package>`);
  }

  // Встроенные картинки (base64) хранятся отдельными Blob и подставляются вместо neko-shelf-img:N при сборке
  function withImages(parts, html, emb) {
    html.split(IMG_TOKEN).forEach((s, j) => {
      if (j % 2 === 0) parts.push(s);
      else if (emb[s]) parts.push(`data:${MIME[emb[s].ext]};base64,`, emb[s].b64);
    });
  }

  function htmlBook(book, chapters, emb, cover) {
    const parts = [`<!DOCTYPE html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(book.title)}</title><style>body{max-width:820px;margin:0 auto;padding:0 14px;font:18px/1.6 Georgia,serif;background:#fdfaf3;color:#222}img{max-width:100%;height:auto;display:block;margin:0 auto}section{margin:2em 0}h2{text-align:center}@media(prefers-color-scheme:dark){body{background:#161616;color:#ddd}a{color:#ff8a65}}</style></head><body><h1>${esc(book.title)}</h1>`];
    if (book.author) parts.push(`<p><i>${esc(book.author)}</i></p>`);
    if (cover) withImages(parts, `<img src="${cover}" alt=""/>`, emb);
    if (book.description) parts.push(`<p>${esc(book.description).replace(/\n+/g, '<br>')}</p>`);
    parts.push(`<nav><h2>Оглавление</h2><ol>${chapters.map((c, i) => `<li><a href="#c${i + 1}">${esc(c.title)}</a></li>`).join('')}</ol></nav>`);
    chapters.forEach((c, i) => withImages(parts, `<section id="c${i + 1}"><h2>${esc(c.title)}</h2>${c.html}</section>`, emb));
    parts.push('</body></html>');
    return new Blob(parts, { type: 'text/html;charset=utf-8' });
  }

  function fb2Book(book, chapters, emb, cover) {
    const img = (src) => { const m = IMG_TOKEN.exec(src); return m && emb[m[1]] ? `<image l:href="#i${m[1]}"/>` : ''; };
    const sections = chapters.map((c) => {
      const body = blocks(c.html).map((b) => (b.img != null ? img(b.img) : b.hr ? '<empty-line/>' : !b.fb2 ? '<empty-line/>' : b.head ? `<subtitle>${b.fb2}</subtitle>` : `<p>${b.fb2}</p>`)).join('');
      return `<section><title><p>${esc(c.title)}</p></title>${body || '<empty-line/>'}</section>`;
    }).join('\n');
    const annotation = book.description ? `<annotation>${book.description.split(/\n+/).map((p) => `<p>${esc(p)}</p>`).join('')}</annotation>` : '';
    const parts = [`<?xml version="1.0" encoding="UTF-8"?>
<FictionBook xmlns="http://www.gribuser.ru/xml/fictionbook/2.0" xmlns:l="http://www.w3.org/1999/xlink">
<description><title-info><genre>prose_contemporary</genre><author><nickname>${esc(book.author || 'Неизвестен')}</nickname></author><book-title>${esc(book.title + book.range)}</book-title>${annotation}${cover ? `<coverpage>${img(cover)}</coverpage>` : ''}<lang>ru</lang></title-info>
<document-info><author><nickname>NekoShelf</nickname></author><program-used>NekoShelf userscript</program-used><date>${new Date().toISOString().slice(0, 10)}</date><id>neko-shelf-${esc(book.uid)}</id><version>1.0</version></document-info></description>
<body><title><p>${esc(book.title)}</p></title>
${sections}
</body>\n`];
    emb.forEach((e, k) => e && parts.push(`<binary id="i${k}" content-type="${MIME[e.ext]}">`, e.b64, '</binary>\n'));
    parts.push('</FictionBook>');
    return new Blob(parts, { type: 'application/x-fictionbook+xml' });
  }

  function txtBook(book, chapters) {
    const out = [book.title, book.author, '', book.description];
    for (const c of chapters) {
      out.push('', '', c.title, '');
      for (const b of blocks(c.html)) out.push(b.img != null ? `[Картинка: ${b.img}]` : b.hr ? '* * *' : b.text, '');
    }
    return out.filter((s) => s != null).join('\n');
  }

  // pdf-lib и fontkit (~1,3 МБ) нужны только для PDF ранобэ — грузим при первом таком скачивании, а не на каждой странице.
  // UMD-сборки кладут себя в module.exports, если он передан
  const PDF_LIB_URLS = ['https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js', 'https://cdn.jsdelivr.net/npm/@pdf-lib/fontkit@1.1.1/dist/fontkit.umd.min.js'];
  async function loadUmd(url) {
    const code = await retry(() => fetch(url).then((r) => (r.ok ? r.text() : Promise.reject(Object.assign(new Error('HTTP ' + r.status), { status: r.status })))), 3);
    const module = { exports: {} };
    new Function('module', 'exports', code)(module, module.exports);
    return module.exports;
  }
  let pdfLibs;
  const getPdfLibs = () => (pdfLibs ??= Promise.all(PDF_LIB_URLS.map(loadUmd)).catch((e) => {
    pdfLibs = null; // в следующий раз попробуем снова
    throw new Error('не загрузилась библиотека PDF: ' + e.message);
  }));

  // PDF ранобэ: текст нужно набирать шрифтом с кириллицей — для этого pdf-lib + fontkit
  // shortcut: только обычное начертание без курсива/жирного и без закладок; слово шире строки не переносится
  async function textPdf(book, chapters, emb, cover) {
    const [PDFLib, fontkit] = await getPdfLibs();
    const doc = await PDFLib.PDFDocument.create();
    doc.registerFontkit(fontkit);
    const font = await doc.embedFont(await getFont(), { subset: true });
    doc.setTitle(book.title);
    if (book.author) doc.setAuthor(book.author);
    const A5 = PDFLib.PageSizes.A5; // удобно читать на телефоне
    const [W, H] = A5, M = 36, maxW = W - 2 * M;
    let page, y;
    const newPage = () => { page = doc.addPage(A5); y = H - M; };
    const wrap = (str, size) => {
      const lines = []; let line = '';
      for (const w of str.split(' ')) {
        const t = line ? line + ' ' + w : w;
        if (!line || font.widthOfTextAtSize(t, size) <= maxW) line = t; else { lines.push(line); line = w; }
      }
      if (line) lines.push(line);
      return lines;
    };
    const text = (str, size, after) => {
      for (const line of wrap(str, size)) {
        if (y - size * 1.35 < M) newPage();
        y -= size * 1.35;
        page.drawText(line, { x: M, y, size, font });
      }
      y -= after;
    };
    const image = async (src, full) => {
      const m = IMG_TOKEN.exec(src);
      const e = m && emb[m[1]];
      if (!e) return;
      const j = await toJpeg(e.buf, e.ext);
      const pic = await doc.embedJpg(j.bytes);
      const s = Math.min(maxW / j.w, (H - 2 * M) / j.h, full ? Infinity : 1);
      const w = j.w * s, h = j.h * s;
      if (y - h < M) newPage();
      y -= h;
      page.drawImage(pic, { x: M + (maxW - w) / 2, y, width: w, height: h });
      y -= 8;
    };
    newPage();
    text(book.title, 18, 8);
    if (book.author) text(book.author, 12, 8);
    if (cover) await image(cover, true);
    for (const c of chapters) {
      newPage();
      text(c.title, 15, 10);
      for (const b of blocks(c.html)) {
        if (b.img != null) await image(b.img);
        else text(b.hr ? '* * *' : b.text, b.head ? 13 : 11, 5);
      }
    }
    return new Blob([await doc.save()], { type: 'application/pdf' });
  }

  // ---------- скачивание ----------

  const state = { busy: false, cancel: false, fallback: null, fromBackup: 0 };

  async function download(slug, info, opts, ui) {
    const fmt = opts.format;
    state.fallback = null; state.fromBackup = 0;
    const list = info.chapters.slice(opts.from, opts.to + 1);
    const m = info.meta;
    const range = list.length === info.chapters.length ? '' : ` (${list[0].volume}-${list[0].number}…${list.at(-1).volume}-${list.at(-1).number})`;
    const book = {
      slug,
      range, // часть тайтла: идёт в название и id книги, чтобы читалки не путали разные диапазоны одного тайтла
      uid: slug + (range ? ':' + encodeURIComponent(range.trim()) : ''),
      title: m.rus_name || m.name || m.eng_name || slug,
      author: (m.authors || []).map((a) => a.name).filter(Boolean).join(', '),
      description: typeof m.summary === 'string' ? m.summary
        : (m.summary?.content || []).map((p) => (p.content || []).map((t) => t.text || '').join('')).join('\n\n'),
    };
    const zip = new Zip();
    if (fmt === 'epub') zip.add('mimetype', 'application/epub+zip'); // EPUB требует mimetype первым файлом
    const imagePdf = fmt === 'pdf' && site.kind === 'manga' ? new Pdf() : null;
    const images = []; // EPUB/TXT: картинки-файлы {path, ext}
    const emb = []; // HTML/FB2: {ext, b64}; PDF ранобэ: {ext, buf}
    const done = [];
    const errors = [];
    let n = 0, imgCount = 0;
    let cbzWidth = null; // CBZ: ширина, к которой приводим все страницы (самая частая в первой главе)

    // Куда кладём картинку зависит от формата; возвращает src для <img>
    const addImage = async (buf, ext, chap, page, chTitle, common) => {
      const k = ++n;
      // AVIF не открывают многие читалки CBZ/EPUB и не принимает PDF; браузер (HTML) показывает его сам
      if (ext === 'avif' && fmt !== 'html') { buf = (await toJpeg(buf, ext)).bytes; ext = 'jpg'; }
      switch (fmt) {
        case 'cbz':
          cbzWidth ??= common;
          if (cbzWidth) try { ({ buf, ext } = await fitWidth(buf, ext, cbzWidth)); } catch { /* не смогли перекодировать — кладём как есть */ }
          zip.add(`${pad(chap, 4)}-${pad(page + 1, 3)}.${ext}`, buf);
          return '';
        case 'zip': zip.add(`${pad(chap, 4)} ${safeName(chTitle)}/${pad(page + 1, 3)}.${ext}`, buf); return '';
        case 'pdf': if (imagePdf) { imagePdf.addImage(await toJpeg(buf, ext)); return ''; } emb[k] = { ext, buf }; return `neko-shelf-img:${k}`;
        case 'html': case 'fb2': emb[k] = { ext, b64: new Blob([await base64(buf)]) }; return `neko-shelf-img:${k}`;
        default: { // epub, txt
          const path = `img/${pad(k, 5)}.${ext}`;
          zip.add((fmt === 'epub' ? 'OEBPS/' : '') + path, buf);
          images.push({ path, ext });
          return path;
        }
      }
    };

    let cover = null;
    const addCover = async () => {
      if (fmt === 'txt' || !m.cover?.default) return;
      try {
        const c = await getImage([m.cover.default]);
        cover = await addImage(c.buf, c.ext, 0, 0, 'Обложка');
        if (fmt === 'epub') cover = images.at(-1);
      } catch { /* без обложки */ }
    };
    // CBZ: обложку берём после глав, когда известна ширина; в архиве она всё равно первая (0000-001)
    if (fmt !== 'cbz') await addCover();

    for (let i = 0; i < list.length; i++) {
      if (state.cancel) throw new Error('Отменено');
      const ch = list[i];
      const title = chapterLabel(ch);
      ui.status(`Глава ${i + 1}/${list.length}: ${title}`, i / list.length);
      try {
        const body = await chapterBody(slug, ch, opts.branch, (buf, ext, page, common) => addImage(buf, ext, i + 1, page, title, common),
          () => ui.status(`Глава ${i + 1}/${list.length}: ${title} · картинок ${++imgCount}`, i / list.length));
        done.push({ title, html: body.html });
      } catch (e) {
        errors.push(`${title}: ${e.message}`);
        done.push({ title, html: `<p>[Глава не скачана: ${esc(e.message)}]</p>` });
      }
      await sleep(300); // бережём API от 429
    }
    // пустой файл не отдаём: iOS открывает его как непонятную blob-ссылку
    if (errors.length === list.length) throw new Error('ни одна глава не скачалась:\n' + errors.join('\n'));

    if (fmt === 'cbz') await addCover();
    ui.status('Сборка файла…', 1);
    let blob, ext = fmt;
    if (fmt === 'cbz') {
      zip.add('ComicInfo.xml', `<?xml version="1.0" encoding="utf-8"?><ComicInfo><Title>${esc(book.title)}</Title><Series>${esc(book.title)}</Series><Writer>${esc(book.author)}</Writer><Summary>${esc(book.description)}</Summary><LanguageISO>ru</LanguageISO><Manga>YesAndRightToLeft</Manga></ComicInfo>`);
      blob = zip.blob('application/vnd.comicbook+zip');
    } else if (fmt === 'zip') blob = zip.blob('application/zip');
    else if (fmt === 'epub') { epubFiles(zip, book, done, images, cover); blob = zip.blob('application/epub+zip'); }
    else if (fmt === 'html') blob = htmlBook(book, done, emb, cover);
    else if (fmt === 'fb2') blob = fb2Book(book, done, emb, cover);
    else if (fmt === 'pdf') blob = imagePdf ? imagePdf.blob(book.title) : await textPdf(book, done, emb, cover);
    else { // txt: с картинками — архивом, без них — просто текстом
      const txt = txtBook(book, done);
      if (images.length) { zip.add(`${safeName(book.title)}.txt`, txt); blob = zip.blob('application/zip'); ext = 'zip'; }
      else blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
    }
    return { blob, name: `${safeName(book.title)}${range}.${ext}`, errors };
  }

  // ---------- интерфейс ----------

  const FAB = 56; // размер кнопки, px
  // Иконка-кнопка (assets/icons/neko_shelf-128.png): 128px, чтобы была чёткой на Retina
  const ICON = 'data:image/png;base64,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';
  const POS_KEY = 'neko-shelf-fab-pos';
  const host = document.createElement('div');
  host.style.cssText = 'position:fixed;right:16px;bottom:16px;z-index:2147483647';
  const root = host.attachShadow({ mode: 'open' });
  root.innerHTML = `
<style>
  :host{all:initial;font:14px/1.4 system-ui,-apple-system,sans-serif;color:#eee}
  .fab{width:${FAB}px;height:${FAB}px;padding:0;border:0;background:url(${ICON}) center/contain no-repeat;filter:drop-shadow(0 2px 4px #0008);cursor:grab;touch-action:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}
  .fab:active{cursor:grabbing}
  .panel{position:fixed;width:min(360px,calc(100vw - 24px));overflow:auto;background:#1e1e1e;border:1px solid #444;border-radius:12px;padding:14px;box-sizing:border-box;box-shadow:0 4px 20px #000a}
  [hidden]{display:none!important}
  h3{margin:0 0 10px;font-size:15px}
  label{display:block;margin:8px 0 3px;color:#aaa;font-size:12px}
  select{width:100%;box-sizing:border-box;font-size:15px;padding:8px;border-radius:8px;border:1px solid #555;background:#2a2a2a;color:#eee}
  .row{display:flex;gap:8px;margin-top:12px}
  .row button{flex:1;padding:10px;border-radius:8px;border:0;font-size:15px;cursor:pointer;background:#444;color:#fff}
  .row .go,.row .yes{background:#e64a19}
  .ask{margin-top:10px;padding:10px;border:1px solid #e64a19;border-radius:8px}
  .q{font-size:13px;white-space:pre-wrap}
  progress{-webkit-appearance:none;appearance:none;display:block;width:100%;height:8px;margin-top:10px;border:0;border-radius:4px;background:#333;overflow:hidden}
  progress::-webkit-progress-bar{background:#333;border-radius:4px}
  progress::-webkit-progress-value{background:linear-gradient(90deg,#2e7d32,#66bb6a);border-radius:4px;transition:width .2s}
  progress::-moz-progress-bar{background:linear-gradient(90deg,#2e7d32,#66bb6a);border-radius:4px}
  .st{margin-top:6px;font-size:12px;color:#ccc;word-break:break-word;white-space:pre-wrap}
  a{color:#ff8a65}
</style>
<div class="panel" hidden>
  <h3 class="title">NekoShelf</h3>
  <div class="form" hidden>
    <label>Перевод</label><select class="branch"></select>
    <label>С главы</label><select class="from"></select>
    <label>По главу</label><select class="to"></select>
    <label>Формат</label><select class="fmt"></select>
    <div class="row"><button class="go">Скачать</button><button class="stop">Отмена</button></div>
  </div>
  <div class="ask" hidden><div class="q"></div><div class="row"><button class="yes">Да, сжатые</button><button class="no">Нет, пропустить</button></div></div>
  <progress max="1" value="0" hidden></progress>
  <div class="st"></div>
</div>
<button class="fab" title="NekoShelf: скачать тайтл (можно перетащить)" aria-label="NekoShelf: скачать тайтл"></button>`;
  const $ = (s) => root.querySelector(s);
  const panel = $('.panel');
  // Панель открывается у кнопки: под ней, если кнопка в верхней половине экрана, иначе над ней;
  // прижата к той же стороне, что и кнопка. Привязка по top/bottom — чтобы рост панели шёл от кнопки.
  function positionPanel() {
    if (panel.hidden) return;
    const r = $('.fab').getBoundingClientRect(), pw = panel.offsetWidth, gap = 8, m = 12;
    const left = r.left + r.width / 2 > innerWidth / 2 ? r.right - pw : r.left;
    const below = r.top + r.height / 2 < innerHeight / 2;
    Object.assign(panel.style, {
      left: Math.min(Math.max(m, left), innerWidth - pw - m) + 'px',
      top: below ? r.bottom + gap + 'px' : 'auto',
      bottom: below ? 'auto' : innerHeight - r.top + gap + 'px',
      maxHeight: (below ? innerHeight - r.bottom : r.top) - gap - m + 'px',
    });
  }
  let answer = null; // ждёт ответа на вопрос в панели
  const ui = {
    status(text, frac) { $('.st').textContent = text; const p = $('progress'); p.hidden = frac == null; if (frac != null) p.value = frac; },
    ask(text) {
      $('.q').textContent = text;
      $('.ask').hidden = false;
      panel.hidden = false;
      positionPanel();
      return new Promise((resolve) => { answer = (v) => { $('.ask').hidden = true; answer = null; resolve(v); }; });
    },
  };
  $('.yes').addEventListener('click', () => answer?.(true));
  $('.no').addEventListener('click', () => answer?.(false));
  for (const f of FORMATS[site.kind]) $('.fmt').add(new Option(f.toUpperCase(), f));

  let current = null; // { slug, info }
  let lastUrl = null;

  async function openPanel() {
    panel.hidden = !panel.hidden;
    positionPanel();
    if (panel.hidden || state.busy) return;
    const slug = pageSlug();
    if (current?.slug === slug) return;
    $('.form').hidden = true;
    ui.status('Загружаю список глав…');
    try {
      const info = await loadTitle(slug);
      current = { slug, info };
      $('.title').textContent = info.meta.rus_name || info.meta.name || slug;
      const opts = info.chapters.map((ch, i) => `<option value="${i}">${esc(chapterLabel(ch))}</option>`).join('');
      $('.from').innerHTML = opts;
      $('.to').innerHTML = opts;
      $('.to').value = String(info.chapters.length - 1);
      $('.branch').innerHTML = '<option value="">Авто (первый доступный)</option>' +
        [...info.branches].map(([id, name]) => `<option value="${esc(id)}">${esc(name)}</option>`).join('');
      const oneBranch = info.branches.size < 2;
      $('.branch').hidden = oneBranch;
      $('.branch').previousElementSibling.hidden = oneBranch;
      $('.form').hidden = !info.chapters.length;
      ui.status(info.chapters.length ? `Глав: ${info.chapters.length}` : 'Глав нет');
    } catch (e) {
      ui.status('Ошибка: ' + e.message);
    }
  }

  async function start() {
    if (state.busy || !current) return;
    const from = +$('.from').value, to = +$('.to').value;
    if (from > to) return ui.status('«С главы» должна быть не позже «По главу»');
    state.busy = true; state.cancel = false;
    $('.go').disabled = true;
    try {
      const { blob, name, errors } = await download(current.slug, current.info, { from, to, branch: $('.branch').value, format: $('.fmt').value }, ui);
      if (lastUrl) URL.revokeObjectURL(lastUrl); // освобождаем прошлый файл
      const url = lastUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = name; a.textContent = 'Сохранить файл ещё раз';
      root.appendChild(a); a.click(); a.remove();
      ui.status(`Готово: ${name} (${(blob.size / 1048576).toFixed(1)} МБ)` +
        (state.fromBackup ? `\nКартинок с запасного сервера (AVIF): ${state.fromBackup}` : '') + (errors.length ? `\nОшибки (${errors.length}):\n` + errors.join('\n') : ''), 1);
      $('.st').append(document.createElement('br'), a); // ссылка на случай, если браузер (iOS) не начал загрузку сам
    } catch (e) {
      ui.status('Ошибка: ' + e.message);
    } finally {
      state.busy = false;
      $('.go').disabled = false;
    }
  }

  // Перетаскивание кнопки (мышь и палец); позиция запоминается для сайта
  const fab = $('.fab');
  let drag = null, moved = false;
  function place(x, y) {
    x = Math.min(Math.max(0, x), innerWidth - FAB);
    y = Math.min(Math.max(0, y), innerHeight - FAB);
    Object.assign(host.style, { left: x + 'px', top: y + 'px', right: 'auto', bottom: 'auto' });
    return [x, y];
  }
  fab.addEventListener('pointerdown', (e) => {
    const r = fab.getBoundingClientRect();
    drag = { dx: e.clientX - r.left, dy: e.clientY - r.top, x0: e.clientX, y0: e.clientY, pos: null };
    moved = false;
    fab.setPointerCapture(e.pointerId);
  });
  fab.addEventListener('pointermove', (e) => {
    if (!drag || (!moved && Math.hypot(e.clientX - drag.x0, e.clientY - drag.y0) < 6)) return; // мелкое дрожание — это клик
    moved = true;
    drag.pos = place(e.clientX - drag.dx, e.clientY - drag.dy);
    positionPanel(); // открытая панель едет за кнопкой
  });
  const endDrag = () => {
    if (drag?.pos) try { localStorage.setItem(POS_KEY, JSON.stringify(drag.pos)); } catch { /* не запомним — не страшно */ }
    drag = null;
  };
  fab.addEventListener('pointerup', endDrag);
  fab.addEventListener('pointercancel', endDrag);
  fab.addEventListener('click', () => { if (moved) moved = false; else openPanel(); });
  try { const p = JSON.parse(localStorage.getItem(POS_KEY)); if (p) place(...p); } catch { /* позиция по умолчанию */ }
  addEventListener('resize', () => { if (host.style.left) place(parseFloat(host.style.left), parseFloat(host.style.top)); positionPanel(); });
  $('.go').addEventListener('click', start);
  $('.stop').addEventListener('click', () => { if (state.busy) { state.cancel = true; answer?.(false); } else panel.hidden = true; });
  document.documentElement.appendChild(host);

  // ---------- читалка вместо 404 ----------
  // Без входа сайт уводит часть тайтлов и глав на /404, хотя API отдаёт их и гостю — показываем сами

  const reader = document.createElement('div');
  reader.style.cssText = 'position:fixed;inset:0;z-index:2147483646;display:none';
  const rRoot = reader.attachShadow({ mode: 'open' });
  rRoot.innerHTML = `
<style>
  :host{all:initial}
  .wrap{position:absolute;inset:0;overflow:auto;background:#121212;color:#ddd;font:17px/1.6 system-ui,-apple-system,sans-serif}
  .bar{position:sticky;top:0;z-index:1;display:flex;gap:6px;align-items:center;padding:8px 12px;background:#1e1e1e;border-bottom:1px solid #333}
  .bar b{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:15px}
  button,select{font:inherit;font-size:14px;padding:6px 10px;border-radius:8px;border:1px solid #555;background:#2a2a2a;color:#eee;cursor:pointer}
  button:disabled{opacity:.4;cursor:default}
  select{max-width:38vw}
  .body{max-width:900px;margin:0 auto;padding:12px 12px 80px;box-sizing:border-box}
  .body img{display:block;max-width:100%;height:auto;margin:0 auto}
  .ch{display:block;width:100%;text-align:left;margin:4px 0;border-color:#333}
  .text{max-width:720px;margin:0 auto}
</style>
<div class="wrap"><div class="bar"><b></b><button class="toc" title="Список глав" aria-label="Список глав">☰</button><button class="prev" aria-label="Предыдущая глава">‹</button><select class="sel" aria-label="Глава"></select><button class="next" aria-label="Следующая глава">›</button><button class="x" title="Закрыть читалку" aria-label="Закрыть читалку">✕</button></div><div class="body"></div></div>`;
  const r$ = (s) => rRoot.querySelector(s);
  document.documentElement.appendChild(reader);

  let lost = null; // parseLost(): что сайт не показал
  let shut = null; // адрес, на котором читалку закрыли руками
  let lastClick = null; // SPA уходит на /404 без перезагрузки — помним, куда кликнули
  let rTitle = null; // { slug, meta, chapters }
  let rSeq = 0; // ответ старой главы не должен перерисовать новую
  const pageSlug = () => lost?.slug || parseSlug(location.pathname);
  addEventListener('click', (e) => { const a = e.target.closest?.('a[href]'); if (a) lastClick = a.href; }, true);
  // «Назад»/«Вперёд»: адрес уже сменился, а уход на /404 ещё впереди — иначе открыли бы старый клик
  addEventListener('popstate', () => { lastClick = location.href; });

  async function showLost() {
    const seq = ++rSeq, body = r$('.body');
    reader.style.display = '';
    r$('.wrap').scrollTop = 0;
    body.textContent = 'Загружаю…';
    try {
      if (rTitle?.slug !== lost.slug) rTitle = { slug: lost.slug, ...(await loadTitle(lost.slug)) };
      if (seq !== rSeq) return;
      const { meta, chapters } = rTitle;
      const i = lost.read ? chapters.findIndex((ch) => sameNum(ch.volume, lost.read.volume) && sameNum(ch.number, lost.read.number)) : -1;
      r$('b').textContent = meta.rus_name || meta.name || lost.slug;
      r$('.sel').innerHTML = '<option value="">Список глав</option>' + chapters.map((ch, k) => `<option value="${k}">${esc(chapterLabel(ch))}</option>`).join('');
      r$('.sel').value = i < 0 ? '' : String(i);
      r$('.prev').disabled = i <= 0;
      r$('.next').disabled = i < 0 || i >= chapters.length - 1;
      if (i < 0) {
        body.innerHTML = (lost.read ? '<p>Этой главы нет в списке.</p>' : '') +
          (chapters.map((ch, k) => `<button class="ch" data-i="${k}">${esc(chapterLabel(ch))}</button>`).join('') || '<p>Глав нет</p>');
        return;
      }
      const d = await chapterData(lost.slug, chapters[i], lost.bid);
      if (site.kind === 'manga') {
        const all = await pageUrls(d);
        if (seq !== rSeq) return;
        body.replaceChildren(...all.map((urls, k) => {
          const img = new Image(), p = d.pages[k];
          if (p.width && p.height) { img.width = p.width; img.height = p.height; } // место под ленивую картинку
          img.loading = 'lazy'; img.alt = `Страница ${k + 1}`;
          let n = 0;
          img.onerror = () => { if (++n < urls.length) img.src = urls[n]; };
          img.src = urls[0];
          return img;
        }));
      } else {
        if (seq !== rSeq) return;
        const doc = ranobeDoc(d); // уже очищен cleanDoc
        const div = document.createElement('div');
        div.className = 'text';
        div.append(...doc.body.childNodes);
        body.replaceChildren(div);
      }
    } catch (e) {
      if (seq !== rSeq) return;
      body.textContent = e.status === 404 && !token()
        ? 'Сервер не отдаёт этот тайтл без входа в аккаунт (обычно так закрыты тайтлы 18+). Войдите на сайте — читалка и скачивание подхватят вход сами.'
        : 'Ошибка: ' + e.message;
    }
  }

  // Переход внутри читалки; k == null — список глав. Адрес меняем, чтобы обновление страницы вернуло сюда же
  function go(k) {
    const prefix = (new URL(lost.href).pathname.match(/^\/[a-z]{2}(?=\/)/) || [''])[0];
    const ch = rTitle?.chapters[k];
    const path = ch ? `${prefix}/${lost.slug}/read/v${ch.volume}/c${ch.number}` : `${prefix}/${site.kind === 'ranobe' ? 'book' : 'manga'}/${lost.slug}`;
    lost = parseLost(location.origin + path + (lost.bid ? `?bid=${encodeURIComponent(lost.bid)}` : ''));
    history.replaceState(history.state, '', lost.href);
    showLost();
  }

  function closeReader() {
    reader.style.display = 'none';
    shut = location.href;
    lost = null;
    rSeq++;
  }

  rRoot.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b || b.disabled) return;
    if (b.matches('.x')) closeReader();
    else if (b.matches('.toc')) go(null);
    else if (b.matches('.prev, .next')) go(+r$('.sel').value + (b.matches('.next') ? 1 : -1));
    else if (b.dataset.i) go(+b.dataset.i);
  });
  r$('.sel').addEventListener('change', (e) => go(e.target.value === '' ? null : +e.target.value));

  // Сайт — SPA: следим за адресом после каждой перерисовки — читалка встаёт до того, как 404 успеет показаться.
  // Кнопку показываем только на странице тайтла (или в читалке)
  function check() {
    const is404 = location.pathname.endsWith('/404');
    if (is404 && !lost && location.href !== shut) {
      lost = parseLost(lastClick || performance.getEntriesByType('navigation')[0]?.name);
      if (lost) { history.replaceState(history.state, '', lost.href); showLost(); }
    } else if (lost && !is404 && location.href !== lost.href) closeReader(); // ушли со страницы средствами сайта
    host.style.display = pageSlug() || state.busy ? '' : 'none';
  }
  new MutationObserver(check).observe(document, { childList: true, subtree: true });
  check();
})();
