# React Blog
This is a sample of a React App created with Create React App as a sample to test the automated auditing tool Chome Lighhouse.
This tool provides a well-lit path for improving the quality of sites by allowing developers to run audits for performance, accessibility, progressive web apps compatibility and more.

To override the CRA default configuration without ejecting, this App uses CRACO (it stands for <b>C</b>reate <b>R</b>eact <b>A</b>pp <b>C</b>onfiguration <b>O</b>verride).


## Install 

Clone App
```sh
git clone https://github.com/jorgemcdev/react-blog-lighthouse.git
```

Install npm module
```sh
npm i
```

## Run

```sh
npm run build
```

```sh
npx serve -s build
```

## Sample server (CSP and Cache)

```sh
node server
```
Test this server on PORT 3002


## Links
CRACO Config:

https://craco.js.org/docs/getting-started/


Webpack Plugins:

https://www.npmjs.com/package/webpack-bundle-analyzer

https://www.npmjs.com/package/purgecss-webpack-plugin

https://www.npmjs.com/package/compression-webpack-plugin


Lighhouse

https://developer.chrome.com/docs/lighthouse/overview/


Content Security Policy (CSP)

https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP


CSP Evaluator Plugin

https://chrome.google.com/webstore/detail/csp-evaluator/fjohamlofnakbnbfjkohkbdigoodcejf?hl=en
