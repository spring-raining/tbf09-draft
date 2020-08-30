module.exports = {
  title: 'tbf09-draft', // populated into `manifest.json`, default to `title` of the first entry or `name` in `package.json`.
  author: 'spring-raining <harusamex.com@gmail.com>', // default to `author` in `package.json` or undefined.
  language: 'ja',
  size: 'JIS-B5',
  theme: 'dist/bundle.css', // .css or local dir or npm package. default to undefined.
  // entryContext: './manuscripts', // default to '.' (relative to `vivliostyle.config.js`).
  entry: [
    //
    'content/index.html',
    'content/maegaki.md',
    'content/atogaki.html',
  ], // `entry` can be `string` or `object` if there's only single markdown file.
  // toc: true, // whether generate and include toc.html or not (does not affect manifest.json), default to `true`. if `string` given, use it as a custom toc.html.
  // cover: './cover.png', // cover image. default to undefined.
  // workDir: './dist', // default to `.vivliostyle`.
};