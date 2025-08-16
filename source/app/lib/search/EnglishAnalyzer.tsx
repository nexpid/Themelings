// app/lib/search/EnglishAnalyzer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var8;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot5;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot5;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot4 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = function stripPossessive(arg1) {
        var4 = arg1;
        var3 = var4.replace;
        var2 = /('|\u2019|\uFF07)(s|S)$/;
        var1 = '';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = function lowercase(arg1) {
        var2 = arg1;
        var1 = var2.toLowerCase;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function isStopWord(arg1) {
        var3 = _closure1_slot3;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function isBlank(arg1) {
        var1 = arg1;
        var2 = var1.length;
        var1 = 0;
        var1 = var1 === var2;
        return var1;
    };
    var _closure1_slot9 = var1;
    var6 = function analyze(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var7 = arg1;
            var3 = arguments[1];
            var5 = undefined;
            if(!(var3 === var5)) { _fun0004_ip = 40; continue _fun0004 }
 12:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 0;
            var1 = var4[var1];
            var1 = var2.bind(var5)(var1);
            var3 = var1.stemmer;
 40:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 1;
            var2 = var6[var2];
            var4 = var4.bind(var5)(var2);
            var6 = var7.split;
            var2 = /\W+/;
            var2 = var6.bind(var7)(var2);
            var5 = var4.bind(var5)(var2);
            var4 = var5.map;
            var2 = _closure1_slot6;
            var5 = var4.bind(var5)(var2);
            var4 = var5.reject;
            var2 = _closure1_slot9;
            var5 = var4.bind(var5)(var2);
            var4 = var5.map;
            var2 = _closure1_slot7;
            var4 = var4.bind(var5)(var2);
            var2 = var4.reject;
            var1 = _closure1_slot8;
            var2 = var2.bind(var4)(var1);
            var1 = var2.map;
            var2 = var1.bind(var2)(var3);
            var1 = var2.value;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var _closure1_slot10 = var6;
    var5 = function shouldHighlight(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg2;
            var2 = arguments[2];
            var5 = undefined;
            if(!(var2 === var5)) { _fun0005_ip = 14; continue _fun0005 }
 12:
            var2 = false;
 14:
            var6 = _closure1_slot9;
            var7 = _closure1_slot7;
            var8 = _closure1_slot6;
            var4 = arg1;
            var4 = var8.bind(var5)(var4);
            var4 = var7.bind(var5)(var4);
            var6 = var6.bind(var5)(var4);
            if(var6) { _fun0005_ip = 187; continue _fun0005 }
 53:
            var6 = _closure1_slot8;
            var6 = var6.bind(var5)(var4);
            if(var6) { _fun0005_ip = 183; continue _fun0005 }
 65:
            if(var2) { _fun0005_ip = 110; continue _fun0005 }
 68:
            var6 = var3.has;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 0;
            var2 = var8[var2];
            var7 = var7.bind(var5)(var2);
            var2 = var7.stemmer;
            var2 = var2.bind(var7)(var4);
            var2 = var6.bind(var3)(var2);
            return var2;
 110:
            var2 = _closure1_slot4;
            var1 = var3.values;
            var1 = var1.bind(var3)();
            var3 = var2.bind(var5)(var1);
            var2 = var3.bind(var5)();
            var1 = var2.done;
            if(var1) { _fun0005_ip = 179; continue _fun0005 }
 140:
            var6 = var2.value;
            var1 = var4.includes;
            var1 = var1.bind(var4)(var6);
            if(var1) { _fun0005_ip = 175; continue _fun0005 }
 158:
            var6 = var3.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0005_ip = 179; continue _fun0005 }
 173:
            _fun0005_ip = 140; continue _fun0005;
 175:
            var1 = true;
            return var1;
 179:
            var1 = false;
            return var1;
 183:
            var1 = false;
            return var1;
 187:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot11 = var5;
    var4 = function highlightAST(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var7 = arg2;
            var6 = arg3;
            var _closure2_slot0 = var7;
            var _closure2_slot1 = var6;
            var3 = global;
            var4 = var3.Array;
            var3 = var4.isArray;
            var3 = var3.bind(var4)(var1);
            if(var3) { _fun0006_ip = 317; continue _fun0006 }
 43:
            var4 = var1.type;
            var3 = 'list';
            if(!(var3 !== var4)) { _fun0006_ip = 292; continue _fun0006 }
 59:
            var3 = var1.content;
            var4 = 'string';
            var3 = typeof var3;
            if(!(var4 === var3)) { _fun0006_ip = 88; continue _fun0006 }
 75:
            var4 = var1.type;
            var3 = 'codeBlock';
            if(!(var3 === var4)) { _fun0006_ip = 128; continue _fun0006 }
 88:
            var4 = var1.content;
            var3 = null;
            if(!(var3 != var4)) { _fun0006_ip = 334; continue _fun0006 }
 102:
            var5 = _closure1_slot12;
            var4 = var1.content;
            var3 = undefined;
            var3 = var5.bind(var3)(var4, var7, var6);
            _fun0006_ip = 334; continue _fun0006;
 128:
            var3 = new Array(0);
            var _closure2_slot2 = var3;
            var4 = '';
            var _closure2_slot3 = var4;
            var6 = var1.content;
            var5 = var6.split;
            var4 = /(\W+)/g;
            var6 = var5.bind(var6)(var4);
            var5 = var6.forEach;
            var4 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var6 = arg1;
                    var5 = _closure1_slot11;
                    var4 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var4 = var5.bind(var1)(var6, var4, var2);
                    var2 = _closure2_slot3;
                    if(var4) { _fun0007_ip = 47; continue _fun0007 }
 37:
                    var4 = var2 + var6;
                    _closure2_slot3 = var4;
                    _fun0007_ip = 126; continue _fun0007;
 47:
                    var4 = var2.length;
                    var2 = 0;
                    if(!(var4 > var2)) { _fun0007_ip = 90; continue _fun0007 }
 58:
                    var5 = _closure2_slot2;
                    var4 = var5.push;
                    var2 = {};
                    var7 = 'text';
                    var2['type'] = var7;
                    var7 = _closure2_slot3;
                    var2['content'] = var7;
                    var2 = var4.bind(var5)(var2);
 90:
                    var5 = _closure2_slot2;
                    var4 = var5.push;
                    var2 = {};
                    var7 = 'highlight';
                    var2['type'] = var7;
                    var2['content'] = var6;
                    var2 = var4.bind(var5)(var2);
                    var2 = '';
                    _closure2_slot3 = var2;
 126:
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var4);
            var4 = var3.length;
            var5 = 0;
            if(!(var4 > var5)) { _fun0006_ip = 334; continue _fun0006 }
 204:
            var4 = _closure2_slot3;
            var4 = var4.length;
            if(!(var4 > var5)) { _fun0006_ip = 245; continue _fun0006 }
 217:
            var5 = var3.push;
            var4 = {};
            var6 = 'text';
            var4['type'] = var6;
            var6 = _closure2_slot3;
            var4['content'] = var6;
            var4 = var5.bind(var3)(var4);
 245:
            var5 = var1.type;
            var4 = 'text';
            if(!(var4 !== var5)) { _fun0006_ip = 284; continue _fun0006 }
 258:
            var5 = {};
            var5['type'] = var4;
            var5['content'] = var3;
            var4 = new Array(1);
            var4[0] = var5;
            var1['content'] = var4;
            _fun0006_ip = 334; continue _fun0006;
 284:
            var1['content'] = var3;
            _fun0006_ip = 334; continue _fun0006;
 292:
            var5 = var1.items;
            var4 = var5.forEach;
            var3 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot12;
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var2 = undefined;
                var2 = var5.bind(var2)(var1, var4, var3);
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            _fun0006_ip = 334; continue _fun0006;
 317:
            var3 = var1.forEach;
            var2 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot12;
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var2 = undefined;
                var2 = var5.bind(var2)(var1, var4, var3);
                return var1;
            };
            var2 = var3.bind(var1)(var2);
 334:
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var10 = {};
    var9 = true;
    var10['value'] = var9;
    var9 = '__esModule';
    var9 = var11.bind(var12)(var3, var9, var10);
    var10 = var1.Set;
    var1 = var10.prototype;
    var9 = Object.create(var1, {constructor: {value: var10}});
    var15 = ['a', 'an', 'and', 'are', 'as', 'at', 'be', 'but', 'by', 'for', 'if', 'in', 'into', 'is', 'it', 'no', 'not', 'of', 'on', 'or', 'such', 'that', 'the', 'their', 'then', 'there', 'these', 'they', 'this', 'to', 'was', 'will', 'with'];
    var16 = var9;
    var1 = new var16[var10](var15, var14);
    var1 = var1 instanceof Object ? var1 : var9;
    var _closure1_slot3 = var1;
    var1 = 4;
    var7 = var7[var1];
    var1 = undefined;
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'lib/search/EnglishAnalyzer.tsx';
    var7 = var8.bind(var9)(var7);
    var3['analyze'] = var6;
    var3['shouldHighlight'] = var5;
    var3['highlightAST'] = var4;
    var2 = function createASTHighlighter(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var6 = arg1;
            var3 = arguments[1];
            var5 = undefined;
            if(!(var3 === var5)) { _fun0008_ip = 16; continue _fun0008 }
 14:
            var3 = false;
 16:
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var5;
            var4 = var6.length;
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = 2;
            var2 = var2[var10];
            var2 = var8.bind(var5)(var2);
            var2 = var2.SEARCH_PARTIAL_NAME_MATCH_MIN_QUERY_LENGTH;
            var2 = var4 >= var2;
            if(!var2) { _fun0008_ip = 97; continue _fun0008 }
 65:
            var8 = var6.length;
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var10];
            var4 = var9.bind(var5)(var4);
            var4 = var4.SEARCH_PARTIAL_NAME_MATCH_MAX_QUERY_LENGTH;
            var2 = var8 <= var4;
 97:
            if(!var2) { _fun0008_ip = 103; continue _fun0008 }
 100:
            var2 = var3;
 103:
            _closure2_slot0 = var2;
            var3 = global;
            var4 = var3.Set;
            var3 = _closure1_slot10;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            if(var2) { _fun0008_ip = 149; continue _fun0008 }
 130:
            var2 = 0;
            var2 = var9[var2];
            var2 = var8.bind(var5)(var2);
            var2 = var2.stemmer;
            _fun0008_ip = 167; continue _fun0008;
 149:
            var7 = 3;
            var7 = var9[var7];
            var7 = var8.bind(var5)(var7);
            var2 = var7.snowballStem;
 167:
            var12 = var3.bind(var5)(var6, var2);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var13 = var3;
            var2 = new var13[var4](var12, var11);
            var2 = var2 instanceof Object ? var2 : var3;
            _closure2_slot1 = var2;
            var1 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot12;
                var4 = _closure2_slot1;
                var3 = _closure2_slot0;
                var2 = undefined;
                var2 = var5.bind(var2)(var1, var4, var3);
                return var1;
            };
            return var1;
        }
    };
    var3['createASTHighlighter'] = var2;
    return var1;
})();