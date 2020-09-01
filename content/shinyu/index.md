---
title: Vivliostyle FAQ よくある質問
author:
  - 村上真雄
---

<!-- 
直したい:
- 内部リンク、見出しの自動idがvivliostyle.orgと違うので、修正が必要
- URLの表示を見直し（とりあえず word-break: break-all にしてる↓）
-->

<style>
.url { word-break: break-all; }
style { display: none !important; } /* body内のstyle要素内容が表示されてしまうbug対策 */
</style>

# Vivliostyle FAQ よくある質問

<div class="draft-author">
村上真雄
</div>

Vivliostyle 公式サイトの FAQ ページをリニューアルしました。これからもっと充実させていきたいです。そのためにも、もっとフィードバックや質問をください。　👉Vivliostyle コミュニティ <https://vivliostyle.org/ja/community/>

今回更新した FAQ を掲載します。


## Vivliostyle Viewer についての FAQ

### ローカル環境で Vivliostyle Viewer を使うには？

👉 [Vivliostyle Viewer の配布パッケージの README（日本語）](https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/viewer/README.ja.md) の「配布パッケージ `vivliostyle-viewer-*.zip` を使う場合」をご覧ください。

### オンラインの Vivliostyle Viewer でローカルの文書を表示するには？

まず、ローカルWebサーバーを起動して、ローカルのHTML文書にブラウザからアクセスできるようにします。ここでは、ローカルWebサーバーとして Node.js の http-server を使う方法を説明します。

Node.js がインストールされていない場合はまずそのインストールをします。👉 <span class="url"><https://nodejs.org></span>

ターミナル（Windows ではコマンドプロンプト）で、次のコマンドにより http-server をインストールします：

```
npm install -g http-server
```

組版表示したいHTMLやCSSファイルが含まれるディレクトリ上で http-server を次のように起動します：

```
http-server . --cors -o -c-1
```

これで、ローカルWebサーバーのURL <http://localhost:8080> が開き、ブラウザでローカルにあるファイルの一覧を見ることができます。そこで表示したいHTMLファイルを見つけてそのURLをコピーし、別に開いたオンラインの Vivliostyle Viewer <span class="url"><https://vivliostyle.org/viewer/></span> にそのURLを指定して組版表示することができます。 
（http-server コマンドの `--cors` オプションは、別のドメインでのスクリプトからこのローカルサーバーの文書をアクセスできるようにする指定、`-o` オプションはブラウザを起動する指定、`-c-1` はキャッシュを無効にする指定です。）

### GitHubやGistにある文書を Vivliostyle Viewer で表示するには？

[GitHub](https://github.com/) や [Gist](https://gist.github.com/) 上にあるHTML文書を [Vivliostyle Viewer](https://vivliostyle.org/viewer/) で表示することができます。

例1: GitHubリポジトリ内のHTMLファイル <span class="url"><https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/core/test/files/math-sample.html></span> を Vivliostyle Viewer で開く:
<span class="url"><https://vivliostyle.org/viewer/#src=https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/core/test/files/math-sample.html></span>

- GitHub上のファイルのURLをそのまま Vivliostyle Viewer に指定できます。

例2: Gist に置かれた HTML ファイル <span class="url"><https://gist.github.com/MurakamiShinyu/4f0423fd3578a277c7d29f56a31912b7#file-index-html></span> を Vivliostyle Viewer で開く:
<span class="url"><https://vivliostyle.org/viewer/#src=https://gist.github.com/MurakamiShinyu/4f0423fd3578a277c7d29f56a31912b7/raw/af7fea921d57d6601d153101850bf95850262ece/index.html&bookMode=true></span>

- Gist上のファイルの `Raw` コンテンツへのリンクのURLを Vivliostyle Viewer に指定できます。
- この例では URL にパラメータとして `&bookMode=true` を指定することにより、この HTML ファイル内の目次からリンクされる複数のHTMLファイルをロードします。

### EPUBを閲覧するには？

Vivliostyle Viewer では ZIP 解凍済みの EPUB ファイルを表示することができます。この場合、次のようにパラメータを指定します:

```
#src=⟨表示する解凍済みEPUBフォルダのURL⟩&bookMode=true
```

GitHub上に公開されているZIP解凍済みのEPUBファイルを表示する例:

- [IDPF/epub3-samples](https://github.com/IDPF/epub3-samples/)の 『[Accessible EPUB 3](https://github.com/IDPF/epub3-samples/tree/master/30/accessible_epub_3/)』

  <span class="url"><https://vivliostyle.org/viewer/#src=https://github.com/IDPF/epub3-samples/tree/master/30/accessible_epub_3/&bookMode=true></span>

👉ユーザーガイドの [EPUB](https://docs.vivliostyle.org/#/ja/user-guide#epub)

### Webサイトに Vivliostyle Viewer を組み込むには？

[Vivliostyle Viewer の配布パッケージをダウンロード](https://vivliostyle.org/ja/download/)して解凍した内容をWebサーバー上の公開ディレクトリにコピーします。パッケージ内容の `viewer/` ディレクトリに Vivliostyle Viewer があります。例えば `https://example.com/example/` として公開されるディレクトリにパッケージ内容をコピーした場合、`https://example.com/example/viewer/` が Vivliostyle Viewer のURLになります。

### 目次パネルを有効にするには？

HTMLファイル内に次のような目次要素がある場合、Vivliostyle Viewer で [**Book Mode**](#Book%20Mode%20とは？) を指定することで、目次パネルが有効になります。

```html
<nav role="doc-toc">
  <h2>Table of Contents</h2>
    <ol>
      <li><a href="#section1">First Section</a></li>
      <li><a href="#section2">Second Section</a></li>
      <li><a href="#section3">Third Section</a></li>
    </ol>
</nav>
```

👉ユーザーガイドの [目次パネル](https://docs.vivliostyle.org/#/ja/user-guide#%E7%9B%AE%E6%AC%A1%E3%83%91%E3%83%8D%E3%83%AB)

👉次も参照: [目次を作るには？](#目次を作るには？)

### 複数のHTMLファイルを連結して組版表示するには？

Vivliostyle Viewer で [**Book Mode**](#Book%20Mode%20とは？) を指定した場合、次のように別のHTMLファイルへのリンクからなる目次要素を含むHTMLファイルをロードすると、目次要素内からリンクされているHTMLファイルも連続してロードされて、それらが連結された組版表示となります：

```html
<nav role="doc-toc">
  <h2>Table of Contents</h2>
    <ol>
      <li><a href="chapter1.html">First Chapter</a>
        <ol>
          <li><a href="chapter1.html#section1">First Section</a></li>
          <li><a href="chapter1.html#section2">Second Section</a></li>
        </ol>
      </li>
      <li><a href="chapter2.html">Second Chapter</a></li>
    </ol>
</nav>
```

👉ユーザーガイドの [Web出版物（複数HTML文書）](https://docs.vivliostyle.org/#/ja/user-guide#web%E5%87%BA%E7%89%88%E7%89%A9%EF%BC%88%E8%A4%87%E6%95%B0html%E6%96%87%E6%9B%B8%EF%BC%89)

👉次も参照: [目次を作るには？](#目次を作るには？)

### Book Mode とは？

[Vivliostyle Viewer](https://vivliostyle.org/viewer/) のUIの **Book Mode** チェックボックスをチェック、あるいはURLパラメータに `&bookMode=true` を追加することにより Book Mode が有効になります。このモードでは、次の機能が有効になります：

- [目次パネルからのナビゲーションが有効](#目次パネルを有効にするには？)
- [複数の HTML ファイルを連結して組版表示](#複数のHTMLファイルを連結して組版表示するには？)
- [EPUB（ZIP解凍済み）の組版表示](#EPUBを閲覧するには？)

### 文字サイズを可変にするには？

Vivliostyle Viewer のUIには `A⁻` (Text: Smaller), `A⁺` (Text: Larger), `A⁼` (Text: Default Size) のボタンがあり、表示する文字のサイズを変えることができます。しかし、文書に指定されているスタイルシートに固定の文字サイズが指定されていると、UI から文字サイズを変更できません。

UI から文字サイズを変更できるようにうするには、font-size の指定に相対的な長さの単位（`%`, `em`, `rem`）を使うことです。Vivliostyle Viewer では、font-size のデフォルトは、ブラウザと同様に 12pt (= 16px) です。ルート要素で font-size を設定していない場合、`rem` (root em) 単位を使うと、そのデフォルトの font-size を 1rem として、相対的な文字サイズの指定ができます。そうすると、Vivliostyle Viewer UI からの文字サイズ変更が有効になります。

スタイルシートでルートの font-size を相対的に指定するには、12pt (= 16px) を 100% とした `%` 単位を使えます。例：

```css
:root {
  font-size: 87.5%; /* set 1rem = 10.5pt (87.5% of 12pt) */
}
```

### ページサイズを可変にするには？

Vivliostyle Viewer は、スタイルシートによるページサイズの指定がない（あるいは `auto` が指定されている）場合、ブラウザのウインドウの表示領域をページサイズとします。これにより、画面の大きさに応じた可変のページサイズでの表示が可能です。

また、Vivliostyle Viewer の設定メニューの **User Style Preferences** → **Page Size** でページサイズを指定することも可能です。ここで指定するページサイズはスタイルシートで次のようにページサイズを指定するのと同じことになります：

```css
@page { size: A4; }
```

## Vivliostyle CLI についての FAQ

### PDFの「しおり」(Bookmarks)」を有効にするには？

[Vivliostyle CLI](https://www.npmjs.com/package/@vivliostyle/cli) v2.1 以降では、組版する文書の目次データを使ってPDFの「しおり」(Bookmarks) を自動生成することができます。PDF の「しおり」は、Adobe Acrobat のような PDF 閲覧ソフトで目次ナビゲーションに利用できるものです。

PDFの「しおり」生成を有効にするには `vivliostyle build` コマンドに `--book` オプションを指定する必要があります。

例：

```
vivliostyle build --book --size A4 --output example.pdf example.html
```

### EPUBをPDFに変換するには？

[Vivliostyle CLI](https://www.npmjs.com/package/@vivliostyle/cli) ではZIP解凍済みのEPUBファイルからPDFを生成することができます。それには `vivliostyle build` コマンドに --book オプションを指定して、入力として解凍済みEPUBのディレクトリを指定します。

例えば、EPUBファイル `example.epub` をPDFファイル `example.pdf` に変換するには、次のように、まずEPUBファイルをZIP解凍してそれから vivliostyle を実行します：

```
unzip example.epub -d example/
vivliostyle build --book --size A4 --output example.pdf example/
```

### 印刷用のPDF（PDF/X-1a 形式）を生成するには？

`vivliostyle build` コマンドの `--press-ready` オプションにより印刷入稿に適した PDF/X-1a 形式で出力することができます。

この機能を使うためには [Ghostscript](https://www.ghostscript.com) と [Xpdf](https://www.xpdfreader.com/)（または [Poppler](https://poppler.freedesktop.org/)）をインストールする必要があります。主なOSでそれらをインストールする方法は以下です：

macOS ([Homebrew](https://brew.sh/index_ja) を利用):
```
brew install poppler ghostscript
```

Ubuntu:
```
apt-get install poppler-utils ghostscript
```

Windows:
- Ghostscript for Windows を <span class="url"><https://www.ghostscript.com/download/gsdnld.html></span> からダウンロードしてインストール。それからインストールしたGhostscriptの実行ファイルのあるディレクトリ（例："C:\Program Files\gs\gs9.52\bin"）を `PATH` 環境変数に追加。
- Xpdf command line tools for Windows を <http://www.xpdfreader.com/download.html> からダウンロードしてインストール。それからインストールしたXpdfの実行ファイルのあるディレクトリ（例："C:\xpdf-tools-win-4.02\bin64"）を `PATH` 環境変数に追加。

## Create Book についての FAQ

### Create Book とは？

[Create Book](https://www.npmjs.com/package/create-book) は、簡単に本を作れる環境を構築します。

👉[チュートリアルガイド: Create Book](https://docs.vivliostyle.org/#/ja/create-book)

### テーマをカスタマイズするには？

Create Book によりインストールされたテーマパッケージは、プロジェクトフォルダ内の `node_modules` フォルダ内にインストールされます（例：テーマ「techbook」の場合 `node_modules/@vivliostyle/theme-techbook/`）。これを別のフォルダ（例えば `my-theme/` フォルダ）にコピーしてカスタマイズすることができます。

```
cp -R node_modules/@vivliostyle/theme-techbook/ my-theme/
```

そして `vivliostyle.config.js` ファイルの `theme:` のところを次のように変更します：

```
  theme: '@vivliostyle/theme-techbook', // .css or local dir or npm package. default to undefined.
```
↓
```
  theme: 'my-theme',
```

これで `my-theme` フォルダ内のスタイルシートをカスタマイズして自由にスタイルを変えることができるようになります。

既存のテーマパッケージをコピーしないで、オリジナルのテーマを作ることもできます。その場合、テーマのフォルダ（この場合 `my-theme` フォルダ）内に、次のような `package.json` ファイルを作る必要があります：

```
{
  "name": "my-theme",
  "main": "theme.css"
}
```

## CSS組版のテクニックについてのFAQ

### 複数のHTMLファイルから本を作るには？

👉ユーザーガイドの [Web出版物（複数HTML文書）](https://docs.vivliostyle.org/#/ja/user-guide#web%E5%87%BA%E7%89%88%E7%89%A9%EF%BC%88%E8%A4%87%E6%95%B0html%E6%96%87%E6%9B%B8%EF%BC%89) をご覧ください。

[Vivliostyle CLI](https://www.npmjs.com/package/@vivliostyle/cli) でこの機能を使うには `--book` オプションを指定します。

### 目次を作るには？

HTMLのマークアップで目次を作るには、`<nav role="doc-toc">` … `</nav>` で囲むブロック内に目次項目（本文中の各見出しへのリンク）のリストを入れます。

参考：[W3CのPublication Manifest](https://www.w3.org/TR/pub-manifest/)仕様の付録の [Machine-Processable Table of Contents](https://www.w3.org/TR/pub-manifest/#app-toc-structure)

ページ番号入りの目次のスタイルは、次のようなスタイルシートによって実現できます：

```css
nav li a {
  display: inline-flex;
  width: 100%;
  text-decoration: none;
  break-inside: avoid;
  align-items: baseline;
}
nav li a::before {
  margin-left: 3px;
  margin-right: 3px;
  border-bottom: 1px dotted;
  content: "";
  order: 1;
  flex: auto;
}
nav li a::after {
  text-align: right;
  content: target-counter(attr(href url), page);  
  align-self: flex-end;
  flex: none;
  order: 2;
}
```

実例については、Vivliostyleのサンプル紹介ページ <span class="url"><https://vivliostyle.org/ja/samples/></span> の「目次」タグが付いたサンプルをご覧ください。

👉以下も参照:
- [目次パネルを有効にするには？](#目次パネルを有効にするには？)
- [複数のHTMLファイルを連結して組版表示するには？](#複数のHTMLファイルを連結して組版表示するには？)

### 数式（MathML、TeX、AsciiMath）を埋め込むには？

Vivliostyle Viewer では [MathJax](https://www.mathjax.org/) により数式を組版表示することができます。

次の形式の数式をHTML文書内に埋め込むことができます：
- MathML
- TeX 数式
- AsciiMath 

MathML の要素 `<math>` … `</math>` は、HTML文書内に直接書くことができます。

TeX または AsciiMath の数式を利用するには、その数式を含むHTML要素に属性 `data-math-typeset="true"` を指定し、テキスト内に以下の方法で数式を記述します：
- TeX 数式は `\(` … `\)` または `$$`…`$$` で囲む
- AsciiMath は \` … \` で囲む

数式のテストのHTMLソース: <span class="url"><https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/core/test/files/math-sample.html></span>

Vivliostyle Viewer で組版表示: <span class="url"><https://vivliostyle.org/viewer/#src=https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/core/test/files/math-sample.html></span>

👉[vivliostyle.js issue#523: ASCIIMATH and MathJAX](https://github.com/vivliostyle/vivliostyle.js/issues/523)

### 本の途中でページ・カウンターをリセットするには？

👉[vivliostyle.js issue#522: "reset-counter: page;" doesn't work properly with web publications](https://github.com/vivliostyle/vivliostyle.js/issues/522) をご覧ください。


## Vivliostyle のライセンスについての FAQ

Vivliostyle 公式サイトの [Vivliostyle のライセンスについての FAQ](https://vivliostyle.org/ja/faq/#Vivliostyle%20%E3%81%AE%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%81%AE%20FAQ) をご覧ください。
