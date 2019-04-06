# browser-xml
In-browser XML, XPath, XSLT api, packaged with sources in es6 and binaries compiled into UMD/AMD ES5.  
Browsers starting from IE11.

Project as successor of [AmdHarness-amd-xml](https://github.com/amdharness/AmdHarness-amd-xml) 
covers the XML stack for es6 module based JS projects. 

The npm module includes the sources in es6 format which could be consumed by modern browsers via `import` statement;
and binary compiled into ES5 AMD module for IE.

# Use
There is no external dependencies, library is one file JS. 

polymer-cli is internal development dependency and used only for self-test and ES5 binary compilation. 
It is not required for library use. 

## es6
Install as dependency into your npm project.
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
See more samples in [test sources](https://github.com/XmlAspect/browser-xml/blob/master/test/test.js). 
 
## AMD  
[AMD test sources](https://github.com/amdharness/AmdHarness-amd-xml/blob/master/test/test_base.js)

# Test and build
## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) 
and npm (packaged with [Node.js](https://nodejs.org)) installed. 
Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Viewing demo

```
$ polymer serve --npm --open
```

## Running Tests

```
$ npm run test
```

This library is set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). 
Run `polymer test` to run test suite locally or open test page in browser http://127.0.0.1:8081/test/index.html


## build
```
$ npm run build
```
