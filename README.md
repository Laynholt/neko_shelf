<p align="center">
  <img src="assets/icons/neko_shelf-256.png" width="128" alt="NekoShelf">
</p>

<h1 align="center">NekoShelf</h1>

<p align="center">
  Userscript для скачивания манги, манхвы и ранобэ одним файлом — прямо со страницы тайтла.
</p>

<p align="center">
  <a href="https://github.com/Laynholt/neko_shelf/releases/latest/download/neko_shelf.user.js">
    <img src="https://img.shields.io/badge/%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%82%D1%8C-NekoShelf-66bb6a?style=for-the-badge" alt="Установить NekoShelf">
  </a>
</p>

## Что умеет

- **Скачивание тайтла** в один файл: выбираешь перевод, диапазон глав и формат.
  - Манга / манхва: **PDF** (по умолчанию), CBZ, ZIP, EPUB, HTML.
  - Ранобэ: **TXT** (по умолчанию), EPUB, FB2, PDF, HTML.
- **Своя читалка вместо 404.** Некоторые тайтлы и главы сайт без входа в аккаунт уводит на «Страница не найдена», хотя сервер их отдаёт. NekoShelf в таком случае сам показывает главу или список глав.
- Если вы вошли в аккаунт на сайте, скрипт подхватывает вход сам — так доступны и тайтлы, которые сервер отдаёт только авторизованным (например, 18+).
- Работает на компьютере и на телефоне (iPhone — через Userscripts).

## Поддерживаемые сайты

| Сайт | Что качается |
|---|---|
| [MangaLIB](https://mangalib.me) | манга, манхва, маньхуа |
| [RanobeLIB](https://ranobelib.me) | ранобэ |
| [HentaiLIB](https://hentailib.me) | манга |
| [SlashLIB](https://v2.shlib.life) | манга |

## Установка

1. Поставьте менеджер userscript'ов:
   - **Chrome / Edge / Firefox:** [Violentmonkey](https://violentmonkey.github.io/) или [Tampermonkey](https://www.tampermonkey.net/).
   - **iPhone / iPad (Safari):** [Userscripts](https://apps.apple.com/app/userscripts/id1463298887) — после установки включите расширение в Safari.
2. Нажмите кнопку **«Установить»** выше — менеджер сам откроет окно установки.
   На iPhone: откройте ссылку в Safari, нажмите значок расширений в адресной строке → Userscripts → установить.

Обновления приходят автоматически из [релизов](https://github.com/Laynholt/neko_shelf/releases) — менеджер периодически проверяет новую версию.

## Как пользоваться

1. Откройте страницу тайтла на одном из сайтов — в углу появится кнопка с котиком-книжкой.
2. Нажмите её, выберите главы и формат, нажмите **«Скачать»**.
3. Кнопку можно перетащить в удобное место — позиция запоминается.

Если основной сервер картинок не отвечает, NekoShelf спросит, брать ли картинки с запасного (они в AVIF и перекодируются в JPEG).

## Для разработки

```bash
node neko_shelf.test.js
```

Новый релиз: поднять `@version` в шапке `neko_shelf.user.js`, затем

```bash
gh release create v1.0.1 neko_shelf.user.js --title "v1.0.1" --notes "Что изменилось"
```

Файл обязательно прикладывать к релизу под именем `neko_shelf.user.js` — по этому адресу менеджеры проверяют обновления.

## Благодарности и лицензия

NekoShelf основан на расширении [LibSaver](https://github.com/dfy-dpg/LibSaver) (DPG): логика работы с API и форматы файлов взяты оттуда.

Распространяется под лицензией [GPL-3.0](LICENSE).
