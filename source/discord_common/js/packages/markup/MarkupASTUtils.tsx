// discord_common/js/packages/markup/MarkupASTUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot6 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function collectAst(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var1 = arguments[1];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = new Array(0);
case 6:
            var _closure2_slot0 = var1;
            var3 = global;
            var5 = var3.Array;
            var3 = var5.isArray;
            var3 = var3.bind(var5)(var4);
            if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = var4.content;
            var5 = 'string';
            var3 = typeof var3;
            if(!(var5 !== var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var5 = var4.content;
            var3 = null;
            if(!(var3 != var5)) { _fun0002_ip = 12; continue _fun0002 }
case 3:
            var5 = _closure1_slot7;
            var3 = var4.content;
            var3 = var5.bind(var6)(var3, var1);
            _fun0002_ip = 12; continue _fun0002;
case 10:
            var5 = var1.push;
            var3 = var4.content;
            var3 = var5.bind(var1)(var3);
            _fun0002_ip = 12; continue _fun0002;
case 8:
            var3 = var4.forEach;
            var2 = function(arg1) {
                var4 = _closure1_slot7;
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
case 12:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function collapseArrays(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var1 = global;
            var2 = var1.Array;
            var1 = var2.isArray;
            var1 = var1.bind(var2)(var3);
            if(var1) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var1 = var4.push;
            var1 = var1.bind(var4)(var3);
            _fun0003_ip = 4; continue _fun0003;
case 13:
            var2 = var3.length;
            var1 = 0;
            var5 = var1 < var2;
            if(!var5) { _fun0003_ip = 4; continue _fun0003 }
case 15:
            var6 = var4.push;
            var5 = var3[var1];
            var5 = var6.bind(var4)(var5);
            var1 = var1 + 1;
            if(var1 < var2) { _fun0003_ip = 15; continue _fun0003 }
case 4:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var2 = global;
    var9 = var2.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var7 = {};
    var _closure1_slot5 = var7;
    var2 = var2.Error;
    var4 = var4.bind(var1)(var2);
    var2 = function(arg1) {
        var5 = function MarkupParserNodeTypeError(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var5 = this;
                var1 = _closure1_slot0;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var7 = global;
                var1 = var7.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var19 = var2;
                var1 = new var19[var1](var18);
                var8 = var1 instanceof Object ? var1 : var2;
                var11 = new Array(1);
                var1 = arg1;
                var11[0] = var1;
                var1 = var11.length;
                var10 = 0;
                var9 = 'items';
                var2 = 'content';
                if(!(var1 > var10)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var1 = var11.pop;
                var13 = var1.bind(var11)();
                if(!(var4 !== var13)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var12 = var7.Array;
                var1 = var12.isArray;
                var1 = var1.bind(var12)(var13);
                if(var1) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                var12 = var8.add;
                var1 = var13.type;
                var1 = var12.bind(var8)(var1);
                var1 = var2 in var13;
                if(!var1) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                var15 = var7.Array;
                var14 = var15.isArray;
                var12 = var13.content;
                var1 = var14.bind(var15)(var12);
case 22:
                if(!var1) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                var12 = var11.push;
                var17 = var13.content;
                var1 = new Array(0);
                var18 = var1;
                var16 = 0;
                var14 = arraySpread(var18, var17, var16);
                var18 = var12;
                var17 = var1;
                var16 = var11;
                var1 = apply(var18, var17, var16);
case 24:
                var1 = var9 in var13;
                if(!var1) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var15 = var7.Array;
                var14 = var15.isArray;
                var12 = var13.items;
                var1 = var14.bind(var15)(var12);
case 26:
                if(!var1) { _fun0004_ip = 18; continue _fun0004 }
case 28:
                var12 = var11.push;
                var17 = var13.items;
                var1 = new Array(0);
                var18 = var1;
                var16 = 0;
                var14 = arraySpread(var18, var17, var16);
                var18 = var12;
                var17 = var1;
                var16 = var11;
                var1 = apply(var18, var17, var16);
                _fun0004_ip = 18; continue _fun0004;
case 20:
                var12 = var11.push;
                var1 = new Array(0);
                var18 = var1;
                var17 = var13;
                var16 = 0;
                var13 = arraySpread(var18, var17, var16);
                var18 = var12;
                var17 = var1;
                var16 = var11;
                var1 = apply(var18, var17, var16);
case 18:
                var1 = var11.length;
                if(var1 > var10) { _fun0004_ip = 17; continue _fun0004 }
case 16:
                var2 = var7.Array;
                var1 = var2.from;
                var2 = var1.bind(var2)(var8);
                var1 = var3.getMessage;
                var1 = var1.bind(var3)(var2);
                var10 = new Array(1);
                var10[0] = var1;
                var1 = _closure1_slot3;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot2;
                var1 = _closure1_slot6;
                var1 = var1.bind(var4)();
                if(var1) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0004_ip = 31; continue _fun0004;
case 29:
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 31:
                var1 = var3.bind(var4)(var5, var1);
                var1['nodeTypes'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot4;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot1;
        var1 = {};
        var6 = 'getMessage';
        var1['key'] = var6;
        var2 = function value(arg1) {
            var3 = arg1;
            var2 = var3.join;
            var1 = ', ';
            var4 = var2.bind(var3)(var1);
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = 'MarkupParserNodeTypeError: Unknown AST node type in "';
            var1 = '" caused rendering failure';
            var1 = var3.bind(var2)(var4, var1);
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = null;
        var1 = var3.bind(var4)(var5, var1, var2);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 6;
    var6 = var6[var4];
    var4 = require;
    var7 = var4.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var4 = '../discord_common/js/packages/markup/MarkupASTUtils.tsx';
    var4 = var6.bind(var7)(var4);
    var4 = function astToString(arg1) {
        var3 = _closure1_slot7;
        var2 = undefined;
        var1 = arg1;
        var3 = var3.bind(var2)(var1);
        var2 = var3.join;
        var1 = '';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['astToString'] = var4;
    var4 = function flattenAst(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var8 = arg2;
            var7 = arguments[2];
            var _closure2_slot0 = var2;
            var6 = undefined;
            if(!(var7 === var6)) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            var7 = null;
case 32:
            var3 = global;
            var4 = var3.Array;
            var3 = var4.isArray;
            var3 = var3.bind(var4)(var8);
            if(var3) { _fun0005_ip = 34; continue _fun0005 }
case 35:
            var4 = var8.content;
            var3 = null;
            if(!(var3 != var4)) { _fun0005_ip = 36; continue _fun0005 }
case 37:
            var5 = _closure1_slot9;
            var4 = var8.content;
            var4 = var5.bind(var6)(var2, var4, var8);
            var8['content'] = var4;
case 36:
            var5 = var8.type;
            var4 = 'inlineCode';
            if(!(var4 === var5)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var4 = delete var8.validationChildContent;
case 38:
            var5 = var8.type;
            var4 = 'list';
            if(!(var4 === var5)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var5 = var8.items;
            var4 = var5.map;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var6 = arg1;
                    var1 = global;
                    var2 = var1.Array;
                    var1 = var2.isArray;
                    var2 = var1.bind(var2)(var6);
                    var1 = var6;
                    if(!var2) { _fun0006_ip = 42; continue _fun0006 }
case 14:
                    var5 = _closure1_slot9;
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var2 = null;
                    var1 = var5.bind(var3)(var4, var6, var2);
case 42:
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var1);
            var8['items'] = var1;
case 40:
            var1 = var8;
            if(!(var3 != var7)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var4 = var8.type;
            var3 = var7.type;
            var1 = var8;
            if(!(var4 === var3)) { _fun0005_ip = 43; continue _fun0005 }
case 45:
            var1 = var8.content;
case 43:
            return var1;
case 34:
            var5 = var8.length;
            var1 = new Array(0);
            var4 = 0;
            var9 = var4 < var5;
            if(!var9) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var10 = _closure1_slot8;
            var11 = _closure1_slot9;
            var9 = var8[var4];
            var9 = var11.bind(var6)(var2, var9, var7);
            var9 = var10.bind(var6)(var1, var9);
            var4 = var4 + 1;
            if(var4 < var5) { _fun0005_ip = 47; continue _fun0005 }
case 46:
            var2 = var2.isSlate;
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var3['flattenAst'] = var4;
    var4 = function constrainAst(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var7 = arguments[1];
            var6 = undefined;
            if(!(var7 === var6)) { _fun0007_ip = 48; continue _fun0007 }
case 7:
            var3 = {};
            var4 = 200;
            var3['limit'] = var4;
            var7 = var3;
case 48:
            var _closure2_slot0 = var7;
            var3 = global;
            var5 = var3.Array;
            var4 = var5.isArray;
            var4 = var4.bind(var5)(var1);
            if(var4) { _fun0007_ip = 49; continue _fun0007 }
case 50:
            var5 = var1.type;
            var4 = 'text';
            if(!(var4 !== var5)) { _fun0007_ip = 51; continue _fun0007 }
case 3:
            var5 = var7.limit;
            var4 = 1;
            var4 = var5 - var4;
            var7['limit'] = var4;
            var5 = var7.limit;
            var4 = 0;
            if(!(!(var5 <= var4))) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var5 = var3.Array;
            var4 = var5.isArray;
            var3 = var1.content;
            var3 = var4.bind(var5)(var3);
            if(!var3) { _fun0007_ip = 23; continue _fun0007 }
case 54:
            var4 = _closure1_slot10;
            var3 = var1.content;
            var3 = var4.bind(var6)(var3, var7);
            var1['content'] = var3;
case 23:
            var4 = var1.type;
            var3 = 'list';
            if(!(var3 === var4)) { _fun0007_ip = 51; continue _fun0007 }
case 55:
            var4 = var1.items;
            var3 = var4.map;
            var2 = function(arg1) {
                var4 = _closure1_slot10;
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var1['items'] = var2;
            _fun0007_ip = 51; continue _fun0007;
case 52:
            var2 = _closure1_slot5;
            return var2;
case 49:
            var5 = var1.length;
            var4 = 0;
            var2 = var4 < var5;
            if(!var2) { _fun0007_ip = 51; continue _fun0007 }
case 56:
            var8 = _closure1_slot10;
            var2 = var1[var4];
            var8 = var8.bind(var6)(var2, var7);
            var9 = _closure1_slot5;
            var2 = var4;
            if(!(var8 !== var9)) { _fun0007_ip = 57; continue _fun0007 }
case 58:
            var1[var2] = var8;
            var4 = var2 + 1;
            if(var4 < var5) { _fun0007_ip = 56; continue _fun0007 }
case 59:
            _fun0007_ip = 51; continue _fun0007;
case 57:
            var1['length'] = var2;
case 51:
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var3['constrainAst'] = var4;
    var4 = function getIndexedAST(arg1, arg2) {
        var3 = arg1;
        var _closure2_slot0 = var3;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = 0;
        var _closure2_slot2 = var2;
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arg1;
                var4 = _closure2_slot2;
                var3 = 0;
                if(!(var3 !== var4)) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                var5 = _closure2_slot0;
                var6 = _closure2_slot2;
                var4 = 1;
                var4 = var6 - var4;
                var4 = var5[var4];
                var3 = var4.endIndex;
case 60:
                var4 = _closure2_slot2;
                var4 = var4 + 1;
                _closure2_slot2 = var4;
                var5 = var1.type;
                var4 = 'spoiler';
                if(!(var4 !== var5)) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                var4 = 'u';
                if(!(var4 !== var5)) { _fun0008_ip = 62; continue _fun0008 }
case 64:
                var4 = 's';
                if(!(var4 !== var5)) { _fun0008_ip = 62; continue _fun0008 }
case 10:
                var4 = 'strong';
                if(!(var4 !== var5)) { _fun0008_ip = 62; continue _fun0008 }
case 38:
                var4 = 'em';
                if(!(var4 !== var5)) { _fun0008_ip = 65; continue _fun0008 }
case 66:
                var4 = 'customEmoji';
                if(!(var4 !== var5)) { _fun0008_ip = 65; continue _fun0008 }
case 54:
                var4 = 'emoji';
                if(!(var4 !== var5)) { _fun0008_ip = 65; continue _fun0008 }
case 67:
                var4 = 'inlineCode';
                if(!(var4 !== var5)) { _fun0008_ip = 65; continue _fun0008 }
case 68:
                var4 = 'text';
                if(!(var4 !== var5)) { _fun0008_ip = 69; continue _fun0008 }
case 70:
                var4 = _closure2_slot1;
                var4 = var4 + var3;
                var1['startIndex'] = var4;
                var7 = _closure1_slot11;
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
case 69:
                var4 = _closure2_slot1;
                var4 = var4 + var3;
                var1['startIndex'] = var4;
                var5 = var1.startIndex;
                var4 = var1.content;
                var4 = var4.length;
                var4 = var5 + var4;
                var1['endIndex'] = var4;
                return var1;
case 65:
                var4 = _closure2_slot1;
                var4 = var4 + var3;
                var1['startIndex'] = var4;
                var8 = _closure1_slot11;
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
case 62:
                var2 = _closure2_slot1;
                var2 = var2 + var3;
                var1['startIndex'] = var2;
                var6 = _closure1_slot11;
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
    var _closure1_slot11 = var4;
    var3['getIndexedAST'] = var4;
    var3['MarkupParserNodeTypeError'] = var2;
    return var1;
})();