// discord_common/js/packages/markup/MarkupASTUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = function collectAst(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = arguments[1];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = new Array(0);
case 2:
            var _closure2_slot0 = var1;
            var3 = global;
            var5 = var3.Array;
            var3 = var5.isArray;
            var3 = var3.bind(var5)(var4);
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var4.content;
            var5 = 'string';
            var3 = typeof var3;
            if(!(var5 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var4.content;
            var3 = null;
            if(!(var3 != var5)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = _closure1_slot1;
            var3 = var4.content;
            var3 = var5.bind(var6)(var3, var1);
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var5 = var1.push;
            var3 = var4.content;
            var3 = var5.bind(var1)(var3);
            _fun0001_ip = 8; continue _fun0001;
case 4:
            var3 = var4.forEach;
            var2 = function(arg1) {
                var4 = _closure1_slot1;
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
case 8:
            return var1;
        }
    };
    var _closure1_slot1 = var1;
    var1 = function collapseArrays(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var1 = global;
            var2 = var1.Array;
            var1 = var2.isArray;
            var1 = var1.bind(var2)(var3);
            if(var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var1 = var4.push;
            var1 = var1.bind(var4)(var3);
            _fun0002_ip = 12; continue _fun0002;
case 10:
            var2 = var3.length;
            var1 = 0;
            var5 = var1 < var2;
            if(!var5) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var6 = var4.push;
            var5 = var3[var1];
            var5 = var6.bind(var4)(var5);
            var1 = var1 + 1;
            if(var1 < var2) { _fun0002_ip = 13; continue _fun0002 }
case 12:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot2 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var2);
    var1 = {};
    var _closure1_slot0 = var1;
    var2 = dependencyMap;
    var1 = 0;
    var5 = var2[var1];
    var2 = require;
    var1 = undefined;
    var6 = var2.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var2 = '../discord_common/js/packages/markup/MarkupASTUtils.tsx';
    var2 = var5.bind(var6)(var2);
    var2 = function astToString(arg1) {
        var3 = _closure1_slot1;
        var2 = undefined;
        var1 = arg1;
        var3 = var3.bind(var2)(var1);
        var2 = var3.join;
        var1 = '';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['astToString'] = var2;
    var2 = function flattenAst(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var8 = arg2;
            var7 = arguments[2];
            var _closure2_slot0 = var2;
            var6 = undefined;
            if(!(var7 === var6)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var7 = null;
case 14:
            var3 = global;
            var4 = var3.Array;
            var3 = var4.isArray;
            var3 = var3.bind(var4)(var8);
            if(var3) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var4 = var8.content;
            var3 = null;
            if(!(var3 != var4)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var5 = _closure1_slot3;
            var4 = var8.content;
            var4 = var5.bind(var6)(var2, var4, var8);
            var8['content'] = var4;
case 18:
            var5 = var8.type;
            var4 = 'inlineCode';
            if(!(var4 === var5)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var4 = delete var8.validationChildContent;
case 20:
            var5 = var8.type;
            var4 = 'list';
            if(!(var4 === var5)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var5 = var8.items;
            var4 = var5.map;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var6 = arg1;
                    var1 = global;
                    var2 = var1.Array;
                    var1 = var2.isArray;
                    var2 = var1.bind(var2)(var6);
                    var1 = var6;
                    if(!var2) { _fun0004_ip = 24; continue _fun0004 }
case 11:
                    var5 = _closure1_slot3;
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var2 = null;
                    var1 = var5.bind(var3)(var4, var6, var2);
case 24:
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var1);
            var8['items'] = var1;
case 22:
            var1 = var8;
            if(!(var3 != var7)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var4 = var8.type;
            var3 = var7.type;
            var1 = var8;
            if(!(var4 === var3)) { _fun0003_ip = 25; continue _fun0003 }
case 27:
            var1 = var8.content;
case 25:
            return var1;
case 16:
            var5 = var8.length;
            var1 = new Array(0);
            var4 = 0;
            var9 = var4 < var5;
            if(!var9) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var10 = _closure1_slot2;
            var11 = _closure1_slot3;
            var9 = var8[var4];
            var9 = var11.bind(var6)(var2, var9, var7);
            var9 = var10.bind(var6)(var1, var9);
            var4 = var4 + 1;
            if(var4 < var5) { _fun0003_ip = 29; continue _fun0003 }
case 28:
            var2 = var2.isSlate;
            return var1;
        }
    };
    var _closure1_slot3 = var2;
    var3['flattenAst'] = var2;
    var2 = function constrainAst(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var7 = arguments[1];
            var6 = undefined;
            if(!(var7 === var6)) { _fun0005_ip = 30; continue _fun0005 }
case 3:
            var3 = {};
            var4 = 200;
            var3['limit'] = var4;
            var7 = var3;
case 30:
            var _closure2_slot0 = var7;
            var3 = global;
            var5 = var3.Array;
            var4 = var5.isArray;
            var4 = var4.bind(var5)(var1);
            if(var4) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var5 = var1.type;
            var4 = 'text';
            if(!(var4 !== var5)) { _fun0005_ip = 33; continue _fun0005 }
case 9:
            var5 = var7.limit;
            var4 = 1;
            var4 = var5 - var4;
            var7['limit'] = var4;
            var5 = var7.limit;
            var4 = 0;
            if(!(!(var5 <= var4))) { _fun0005_ip = 34; continue _fun0005 }
case 35:
            var5 = var3.Array;
            var4 = var5.isArray;
            var3 = var1.content;
            var3 = var4.bind(var5)(var3);
            if(!var3) { _fun0005_ip = 36; continue _fun0005 }
case 37:
            var4 = _closure1_slot4;
            var3 = var1.content;
            var3 = var4.bind(var6)(var3, var7);
            var1['content'] = var3;
case 36:
            var4 = var1.type;
            var3 = 'list';
            if(!(var3 === var4)) { _fun0005_ip = 33; continue _fun0005 }
case 38:
            var4 = var1.items;
            var3 = var4.map;
            var2 = function(arg1) {
                var4 = _closure1_slot4;
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var1['items'] = var2;
            _fun0005_ip = 33; continue _fun0005;
case 34:
            var2 = _closure1_slot0;
            return var2;
case 31:
            var5 = var1.length;
            var4 = 0;
            var2 = var4 < var5;
            if(!var2) { _fun0005_ip = 33; continue _fun0005 }
case 39:
            var8 = _closure1_slot4;
            var2 = var1[var4];
            var8 = var8.bind(var6)(var2, var7);
            var9 = _closure1_slot0;
            var2 = var4;
            if(!(var8 !== var9)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var1[var2] = var8;
            var4 = var2 + 1;
            if(var4 < var5) { _fun0005_ip = 39; continue _fun0005 }
case 42:
            _fun0005_ip = 33; continue _fun0005;
case 40:
            var1['length'] = var2;
case 33:
            return var1;
        }
    };
    var _closure1_slot4 = var2;
    var3['constrainAst'] = var2;
    var2 = function getIndexedAST(arg1, arg2) {
        var3 = arg1;
        var _closure2_slot0 = var3;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = 0;
        var _closure2_slot2 = var2;
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = arg1;
                var4 = _closure2_slot2;
                var3 = 0;
                if(!(var3 !== var4)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                var5 = _closure2_slot0;
                var6 = _closure2_slot2;
                var4 = 1;
                var4 = var6 - var4;
                var4 = var5[var4];
                var3 = var4.endIndex;
case 43:
                var4 = _closure2_slot2;
                var4 = var4 + 1;
                _closure2_slot2 = var4;
                var5 = var1.type;
                var4 = 'spoiler';
                if(!(var4 !== var5)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                var4 = 'u';
                if(!(var4 !== var5)) { _fun0006_ip = 45; continue _fun0006 }
case 47:
                var4 = 's';
                if(!(var4 !== var5)) { _fun0006_ip = 45; continue _fun0006 }
case 6:
                var4 = 'strong';
                if(!(var4 !== var5)) { _fun0006_ip = 45; continue _fun0006 }
case 20:
                var4 = 'em';
                if(!(var4 !== var5)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                var4 = 'customEmoji';
                if(!(var4 !== var5)) { _fun0006_ip = 48; continue _fun0006 }
case 37:
                var4 = 'emoji';
                if(!(var4 !== var5)) { _fun0006_ip = 48; continue _fun0006 }
case 50:
                var4 = 'inlineCode';
                if(!(var4 !== var5)) { _fun0006_ip = 48; continue _fun0006 }
case 51:
                var4 = 'text';
                if(!(var4 !== var5)) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                var4 = _closure2_slot1;
                var4 = var4 + var3;
                var1['startIndex'] = var4;
                var7 = _closure1_slot5;
                var6 = var1.content;
                var5 = var1.startIndex;
                var4 = undefined;
                var5 = var7.bind(var4)(var6, var5);
                var6 = var5.length;
                var4 = 1;
                var4 = var6 - var4;
                var4 = var5[var4];
                var4 = var4.endIndex;
                var1['endIndex'] = var4;
                return var1;
case 52:
                var4 = _closure2_slot1;
                var4 = var4 + var3;
                var1['startIndex'] = var4;
                var5 = var1.startIndex;
                var4 = var1.content;
                var4 = var4.length;
                var4 = var5 + var4;
                var1['endIndex'] = var4;
                return var1;
case 48:
                var4 = _closure2_slot1;
                var4 = var4 + var3;
                var1['startIndex'] = var4;
                var8 = _closure1_slot5;
                var7 = var1.content;
                var4 = var1.startIndex;
                var5 = 1;
                var6 = var4 + var5;
                var4 = undefined;
                var6 = var8.bind(var4)(var7, var6);
                var4 = var6.length;
                var4 = var4 - var5;
                var4 = var6[var4];
                var4 = var4.endIndex;
                var4 = var4 + var5;
                var1['endIndex'] = var4;
                return var1;
case 45:
                var2 = _closure2_slot1;
                var2 = var2 + var3;
                var1['startIndex'] = var2;
                var6 = _closure1_slot5;
                var5 = var1.content;
                var2 = var1.startIndex;
                var3 = 2;
                var4 = var2 + var3;
                var2 = undefined;
                var4 = var6.bind(var2)(var5, var4);
                var5 = var4.length;
                var2 = 1;
                var2 = var5 - var2;
                var2 = var4[var2];
                var2 = var2.endIndex;
                var2 = var2 + var3;
                var1['endIndex'] = var2;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot5 = var2;
    var3['getIndexedAST'] = var2;
    return var1;
})();