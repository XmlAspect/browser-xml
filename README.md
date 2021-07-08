# browser-xml
In-browser XML, XPath, XSLT api, packaged with sources in es6 and binaries compiled into UMD/AMD ES5.  
Browsers starting from IE11.

[![NPM version][npm-image]][npm-url]
[![git](https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mark-github.svg) GitHub](https://github.com/XmlAspect/browser-xml)

Project as successor of [AmdHarness-amd-xml](https://github.com/amdharness/AmdHarness-amd-xml)
covers the XML stack for es6 module based JS projects.

The npm module includes the sources in es6 format which could be consumed by modern browsers via `import` statement.

# Use
There is no external dependencies, library is one file JS.

## es6 import from CDN
```javascript
import browserXml from "https://unpkg.com/@xmlaspect/browser-xml@1.0.5/index.js";
```
## npm
install as dependency into your npm project.
```
$ npm i -P "@xmlaspect/browser-xml"
```
In your project JS
```javascript
import browserXml from "@xmlaspect/browser-xml";

let  xmlDoc = await browserXml.getXml( xmlUrl );
let  nodes  = browserXml.XPath( '//my-el[@name="abc"]', xmlDoc );

let renderedString = browserXml.transform( xml, xslUrl );
```
See more samples in [test sources](https://github.com/XmlAspect/browser-xml-test/blob/main/test/browser-xml.test.js).

# build
There is no binaries build. Please use your project build toolchain to generate specific binary format like AMD.

Please file the [new issue](https://github.com/XmlAspect/browser-xml/issues/new) if need binary of particular format
as a part of npm package or in CDN.

#test
reside in sibling project https://github.com/XmlAspect/browser-xml-test

[npm-image]:      https://img.shields.io/npm/v/@xmlaspect/browser-xml.svg
[npm-url]:        https://npmjs.org/package/@xmlaspect/browser-xml
