// discord_common/js/packages/markup/MarkupASTUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = function collectAst(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var1 = arguments[1];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0001_ip = 18; continue _fun0001 }
 14:
            var1 = new Array(0);
 18:
            var _closure2_slot0 = var1;
            var3 = global;
            var5 = var3.Array;
            var3 = var5.isArray;
            var3 = var3.bind(var5)(var4);
            if(var3) { _fun0001_ip = 107; continue _fun0001 }
 43:
            var3 = var4.content;
            var5 = 'string';
            var3 = typeof var3;
            if(!(var5 !== var3)) { _fun0001_ip = 90; continue _fun0001 }
 59:
            var5 = var4.content;
            var3 = null;
            if(!(var3 != var5)) { _fun0001_ip = 122; continue _fun0001 }
 70:
            var5 = _closure1_slot1;
            var3 = var4.content;
            var3 = var5.bind(var6)(var3, var1);
            _fun0001_ip = 122; continue _fun0001;
 90:
            var5 = var1.push;
            var3 = var4.content;
            var3 = var5.bind(var1)(var3);
            _fun0001_ip = 122; continue _fun0001;
 107:
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
 122:
            return var1;
        }
    };
    var _closure1_slot1 = var1;
    var1 = function collapseArrays(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var3 = arg2;
            var1 = global;
            var2 = var1.Array;
            var1 = var2.isArray;
            var1 = var1.bind(var2)(var3);
            if(var1) { _fun0002_ip = 39; continue _fun0002 }
 27:
            var1 = var4.push;
            var1 = var1.bind(var4)(var3);
            _fun0002_ip = 74; continue _fun0002;
 39:
            var2 = var3.length;
            var1 = 0;
            var5 = var1 < var2;
            if(!var5) { _fun0002_ip = 74; continue _fun0002 }
 53:
            var6 = var4.push;
            var5 = var3[var1];
            var5 = var6.bind(var4)(var5);
            var1 = var1 + 1;
            if(var1 < var2) { _fun0002_ip = 53; continue _fun0002 }
 74:
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
 0:
            var2 = arg1;
            var8 = arg2;
            var7 = arguments[2];
            var _closure2_slot0 = var2;
            var6 = undefined;
            if(!(var7 === var6)) { _fun0003_ip = 23; continue _fun0003 }
 21:
            var7 = null;
 23:
            var3 = global;
            var4 = var3.Array;
            var3 = var4.isArray;
            var3 = var3.bind(var4)(var8);
            if(var3) { _fun0003_ip = 172; continue _fun0003 }
 47:
            var4 = var8.content;
            var3 = null;
            if(!(var3 != var4)) { _fun0003_ip = 83; continue _fun0003 }
 58:
            var5 = _closure1_slot3;
            var4 = var8.content;
            var4 = var5.bind(var6)(var2, var4, var8);
            var8['content'] = var4;
 83:
            var5 = var8.type;
            var4 = 'inlineCode';
            if(!(var4 === var5)) { _fun0003_ip = 101; continue _fun0003 }
 96:
            var4 = delete var8.validationChildContent;
 101:
            var5 = var8.type;
            var4 = 'list';
            if(!(var4 === var5)) { _fun0003_ip = 141; continue _fun0003 }
 114:
            var5 = var8.items;
            var4 = var5.map;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var6 = arg1;
                    var1 = global;
                    var2 = var1.Array;
                    var1 = var2.isArray;
                    var2 = var1.bind(var2)(var6);
                    var1 = var6;
                    if(!var2) { _fun0004_ip = 52; continue _fun0004 }
 27:
                    var5 = _closure1_slot3;
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var2 = null;
                    var1 = var5.bind(var3)(var4, var6, var2);
 52:
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var1);
            var8['items'] = var1;
 141:
            var1 = var8;
            if(!(var3 != var7)) { _fun0003_ip = 170; continue _fun0003 }
 148:
            var4 = var8.type;
            var3 = var7.type;
            var1 = var8;
            if(!(var4 === var3)) { _fun0003_ip = 170; continue _fun0003 }
 165:
            var1 = var8.content;
 170:
            return var1;
 172:
            var5 = var8.length;
            var1 = new Array(0);
            var4 = 0;
            var9 = var4 < var5;
            if(!var9) { _fun0003_ip = 225; continue _fun0003 }
 193:
            var10 = _closure1_slot2;
            var11 = _closure1_slot3;
            var9 = var8[var4];
            var9 = var11.bind(var6)(var2, var9, var7);
            var9 = var10.bind(var6)(var1, var9);
            var4 = var4 + 1;
            if(var4 < var5) { _fun0003_ip = 193; continue _fun0003 }
 225:
            var2 = var2.isSlate;
            return var1;
        }
    };
    var _closure1_slot3 = var2;
    var3['flattenAst'] = var2;
    var2 = function constrainAst(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var7 = arguments[1];
            var6 = undefined;
            if(!(var7 === var6)) { _fun0005_ip = 26; continue _fun0005 }
 14:
            var3 = {};
            var4 = 200;
            var3['limit'] = var4;
            var7 = var3;
 26:
            var _closure2_slot0 = var7;
            var3 = global;
            var5 = var3.Array;
            var4 = var5.isArray;
            var4 = var4.bind(var5)(var1);
            if(var4) { _fun0005_ip = 198; continue _fun0005 }
 54:
            var5 = var1.type;
            var4 = 'text';
            if(!(var4 !== var5)) { _fun0005_ip = 259; continue _fun0005 }
 70:
            var5 = var7.limit;
            var4 = 1;
            var4 = var5 - var4;
            var7['limit'] = var4;
            var5 = var7.limit;
            var4 = 0;
            if(!(!(var5 <= var4))) { _fun0005_ip = 189; continue _fun0005 }
 99:
            var5 = var3.Array;
            var4 = var5.isArray;
            var3 = var1.content;
            var3 = var4.bind(var5)(var3);
            if(!var3) { _fun0005_ip = 147; continue _fun0005 }
 123:
            var4 = _closure1_slot4;
            var3 = var1.content;
            var3 = var4.bind(var6)(var3, var7);
            var1['content'] = var3;
 147:
            var4 = var1.type;
            var3 = 'list';
            if(!(var3 === var4)) { _fun0005_ip = 259; continue _fun0005 }
 160:
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
            _fun0005_ip = 259; continue _fun0005;
 189:
            var2 = _closure1_slot0;
            return var2;
 198:
            var5 = var1.length;
            var4 = 0;
            var2 = var4 < var5;
            if(!var2) { _fun0005_ip = 259; continue _fun0005 }
 215:
            var8 = _closure1_slot4;
            var2 = var1[var4];
            var8 = var8.bind(var6)(var2, var7);
            var9 = _closure1_slot0;
            var2 = var4;
            if(!(var8 !== var9)) { _fun0005_ip = 253; continue _fun0005 }
 240:
            var1[var2] = var8;
            var4 = var2 + 1;
            if(var4 < var5) { _fun0005_ip = 215; continue _fun0005 }
 251:
            _fun0005_ip = 259; continue _fun0005;
 253:
            var1['length'] = var2;
 259:
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
 0:
                var1 = arg1;
                var4 = _closure2_slot2;
                var3 = 0;
                if(!(var3 !== var4)) { _fun0006_ip = 41; continue _fun0006 }
 16:
                var5 = _closure2_slot0;
                var6 = _closure2_slot2;
                var4 = 1;
                var4 = var6 - var4;
                var4 = var5[var4];
                var3 = var4.endIndex;
 41:
                var4 = _closure2_slot2;
                var4 = var4 + 1;
                _closure2_slot2 = var4;
                var5 = var1.type;
                var4 = 'spoiler';
                if(!(var4 !== var5)) { _fun0006_ip = 340; continue _fun0006 }
 68:
                var4 = 'u';
                if(!(var4 !== var5)) { _fun0006_ip = 340; continue _fun0006 }
 79:
                var4 = 's';
                if(!(var4 !== var5)) { _fun0006_ip = 340; continue _fun0006 }
 90:
                var4 = 'strong';
                if(!(var4 !== var5)) { _fun0006_ip = 340; continue _fun0006 }
 101:
                var4 = 'em';
                if(!(var4 !== var5)) { _fun0006_ip = 262; continue _fun0006 }
 112:
                var4 = 'customEmoji';
                if(!(var4 !== var5)) { _fun0006_ip = 262; continue _fun0006 }
 123:
                var4 = 'emoji';
                if(!(var4 !== var5)) { _fun0006_ip = 262; continue _fun0006 }
 134:
                var4 = 'inlineCode';
                if(!(var4 !== var5)) { _fun0006_ip = 262; continue _fun0006 }
 142:
                var4 = 'text';
                if(!(var4 !== var5)) { _fun0006_ip = 220; continue _fun0006 }
 150:
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
 220:
                var4 = _closure2_slot1;
                var4 = var4 + var3;
                var1['startIndex'] = var4;
                var5 = var1.startIndex;
                var4 = var1.content;
                var4 = var4.length;
                var4 = var5 + var4;
                var1['endIndex'] = var4;
                return var1;
 262:
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
 340:
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