'use strict';

var log = require('log-report');
log.clear();
var HTML = require('./index.js');
var fs = require('fs');
var path = require('path');

//var strHtml = fs.readFileSync(path.resolve('./tests/Page.html')).toString('utf-8');
var strHtml = `
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>Page</title>
</head>
<body>
    <div><p><code><b><span id="label">Testing...</span></b></code></p></div>
</body>
</html>
`;
var objHtml = HTML.parse(strHtml);

//var val = HTML.querySelector(objHtml, '#label');
var val = objHtml.querySelector('#label');
if (val) { val['@text'] = 'Tested!'; }

var strJson = JSON.stringify(objHtml);
var objJson = JSON.parse(strJson);
var result = HTML.stringify(objJson);

function trim(s) { return (s + '').split(/[\r|\n|\t| ]/).join(""); }

if (trim(strHtml.replace('Testing...', 'Tested!')) === trim(result)) { console.log('OK'); debugger; }
else { console.log('Something went wrong!'); debugger; }