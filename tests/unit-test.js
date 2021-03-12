'use strict';

var assert = require('assert');
var HTML = require('../index.min.js');
var fs = require('fs');
var path = require('path');

describe('HTML', function () {

    it('HTML.parse()', function (done) {
        
        var strHtml = fs.readFileSync(path.resolve('./tests/Page.html')).toString('utf-8');
        var objHtml = HTML.parse(strHtml);
        var val = objHtml.querySelector('#label');
        if (val) { val['@text'] = 'Tested!'; }
        var strJson = JSON.stringify(objHtml);
        var objJson = JSON.parse(strJson);
        var result = HTML.stringify(objJson);

        function trim(s) { return (s + '').split(/[\r|\n|\t| ]/).join(""); }

        if (trim(strHtml.replace('Testing...', 'Tested!')) === trim(result)) { done(); }
        else { done('Something went wrong!'); }
    });

    it('HTML.querySelector', function (done) {

        var strHtml = fs.readFileSync(path.resolve('./tests/Page.html')).toString('utf-8');
        var objHtml = HTML.parse(strHtml);
        var val = objHtml.querySelector('#label')['@text'];

        if (val === 'Testing...') { done(); }
        else { done('Something went wrong!'); }
    });
});