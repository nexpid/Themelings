// app/lib/search/EnglishAnalyzer.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var8;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = function stripPossessive(arg1) {
        var4 = arg1;
        var3 = var4.replace;
        var2 = /('|\u2019|\uFF07)(s|S)$/;
        var1 = '';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = function lowercase(arg1) {
        var2 = arg1;
        var1 = var2.toLowerCase;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = function isStopWord(arg1) {
        var3 = _closure1_slot3;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = function isBlank(arg1) {
        var1 = arg1;
        var2 = var1.length;
        var1 = 0;
        var1 = var1 === var2;
        return var1;
    };
    var _closure1_slot7 = var1;
    var6 = function analyze(arg1) {
        var7 = arg1;
        var3 = _closure1_slot1;
        var6 = _closure1_slot2;
        var2 = 0;
        var2 = var6[var2];
        var5 = undefined;
        var3 = var3.bind(var5)(var2);
        var4 = var7.split;
        var2 = /\W+/;
        var2 = var4.bind(var7)(var2);
        var4 = var3.bind(var5)(var2);
        var3 = var4.map;
        var2 = _closure1_slot4;
        var4 = var3.bind(var4)(var2);
        var3 = var4.reject;
        var2 = _closure1_slot7;
        var4 = var3.bind(var4)(var2);
        var3 = var4.map;
        var2 = _closure1_slot5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.reject;
        var2 = _closure1_slot6;
        var3 = var3.bind(var4)(var2);
        var2 = var3.map;
        var4 = _closure1_slot0;
        var1 = 1;
        var1 = var6[var1];
        var1 = var4.bind(var5)(var1);
        var1 = var1.stemmer;
        var2 = var2.bind(var3)(var1);
        var1 = var2.value;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot8 = var6;
    var5 = function shouldHighlight(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg2;
            var1 = _closure1_slot7;
            var5 = _closure1_slot5;
            var6 = _closure1_slot4;
            var7 = undefined;
            var3 = arg1;
            var3 = var6.bind(var7)(var3);
            var6 = var5.bind(var7)(var3);
            var3 = var1.bind(var7)(var6);
            var1 = !var3;
            if(var3) { _fun0001_ip = 56; continue _fun0001 }
 44:
            var3 = _closure1_slot6;
            var3 = var3.bind(var7)(var6);
            var1 = !var3;
 56:
            if(!var1) { _fun0001_ip = 100; continue _fun0001 }
 59:
            var3 = var4.has;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 1;
            var2 = var8[var2];
            var5 = var5.bind(var7)(var2);
            var2 = var5.stemmer;
            var2 = var2.bind(var5)(var6);
            var1 = var3.bind(var4)(var2);
 100:
            return var1;
        }
    };
    var _closure1_slot9 = var5;
    var4 = function highlightAST(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var6 = arg2;
            var _closure2_slot0 = var6;
            var3 = global;
            var4 = var3.Array;
            var3 = var4.isArray;
            var3 = var3.bind(var4)(var1);
            if(var3) { _fun0002_ip = 265; continue _fun0002 }
 36:
            var3 = var1.content;
            var4 = 'string';
            var3 = typeof var3;
            if(!(var4 === var3)) { _fun0002_ip = 65; continue _fun0002 }
 52:
            var4 = var1.type;
            var3 = 'codeBlock';
            if(!(var3 === var4)) { _fun0002_ip = 104; continue _fun0002 }
 65:
            var4 = var1.content;
            var3 = null;
            if(!(var3 != var4)) { _fun0002_ip = 282; continue _fun0002 }
 79:
            var5 = _closure1_slot10;
            var4 = var1.content;
            var3 = undefined;
            var3 = var5.bind(var3)(var4, var6);
            _fun0002_ip = 282; continue _fun0002;
 104:
            var3 = new Array(0);
            var _closure2_slot1 = var3;
            var4 = '';
            var _closure2_slot2 = var4;
            var6 = var1.content;
            var5 = var6.split;
            var4 = /(\W+)/g;
            var6 = var5.bind(var6)(var4);
            var5 = var6.forEach;
            var4 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var6 = arg1;
                    var4 = _closure1_slot9;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var6, var2);
                    var2 = _closure2_slot2;
                    if(var4) { _fun0003_ip = 42; continue _fun0003 }
 32:
                    var4 = var2 + var6;
                    _closure2_slot2 = var4;
                    _fun0003_ip = 121; continue _fun0003;
 42:
                    var4 = var2.length;
                    var2 = 0;
                    if(!(var4 > var2)) { _fun0003_ip = 85; continue _fun0003 }
 53:
                    var5 = _closure2_slot1;
                    var4 = var5.push;
                    var2 = {};
                    var7 = 'text';
                    var2['type'] = var7;
                    var7 = _closure2_slot2;
                    var2['content'] = var7;
                    var2 = var4.bind(var5)(var2);
 85:
                    var5 = _closure2_slot1;
                    var4 = var5.push;
                    var2 = {};
                    var7 = 'highlight';
                    var2['type'] = var7;
                    var2['content'] = var6;
                    var2 = var4.bind(var5)(var2);
                    var2 = '';
                    _closure2_slot2 = var2;
 121:
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var4);
            var4 = var3.length;
            var5 = 0;
            if(!(var4 > var5)) { _fun0002_ip = 282; continue _fun0002 }
 177:
            var4 = _closure2_slot2;
            var4 = var4.length;
            if(!(var4 > var5)) { _fun0002_ip = 218; continue _fun0002 }
 190:
            var5 = var3.push;
            var4 = {};
            var6 = 'text';
            var4['type'] = var6;
            var6 = _closure2_slot2;
            var4['content'] = var6;
            var4 = var5.bind(var3)(var4);
 218:
            var5 = var1.type;
            var4 = 'text';
            if(!(var4 !== var5)) { _fun0002_ip = 257; continue _fun0002 }
 231:
            var5 = {};
            var5['type'] = var4;
            var5['content'] = var3;
            var4 = new Array(1);
            var4[0] = var5;
            var1['content'] = var4;
            _fun0002_ip = 282; continue _fun0002;
 257:
            var1['content'] = var3;
            _fun0002_ip = 282; continue _fun0002;
 265:
            var3 = var1.forEach;
            var2 = function(arg1) {
                var1 = arg1;
                var4 = _closure1_slot10;
                var3 = _closure2_slot0;
                var2 = undefined;
                var2 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var2 = var3.bind(var1)(var2);
 282:
            return var1;
        }
    };
    var _closure1_slot10 = var4;
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
    var1 = 2;
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
        var2 = global;
        var4 = var2.Set;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var6 = var5.bind(var3)(var2);
        var3 = var4.prototype;
        var3 = Object.create(var3, {constructor: {value: var4}});
        var7 = var3;
        var2 = new var7[var4](var6, var5);
        var2 = var2 instanceof Object ? var2 : var3;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            var1 = arg1;
            var4 = _closure1_slot10;
            var3 = _closure2_slot0;
            var2 = undefined;
            var2 = var4.bind(var2)(var1, var3);
            return var1;
        };
        return var1;
    };
    var3['createASTHighlighter'] = var2;
    return var1;
})();