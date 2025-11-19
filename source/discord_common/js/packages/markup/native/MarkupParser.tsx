// discord_common/js/packages/markup/native/MarkupParser.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var2 = metroImportDefault;
    var _closure1_slot1 = var2;
    var _closure1_slot2 = var4;
    var2 = function saferParse(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arguments[3];
            var8 = arguments[4];
            var6 = arg1;
            var7 = arg2;
            var2 = arg3;
            var5 = undefined;
            if(!(var9 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = null;
case 2:
            var3 = var9;
            if(!(var8 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = true;
case 4:
            var4 = var8;
            var1 = undefined;
case 6: // try_start_0
            var8 = var4;
            if(!var8) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var9 = var7;
            var8 = '\n\n';
            var7 = var9 + var8;
case 7:
            var8 = var6;
            var10 = var2;
            var13 = var8.bind(var5)(var7, var10);
            var1 = var13;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 0;
            var9 = var11[var7];
            var12 = var8.bind(var5)(var9);
            var9 = var12.constrainAst;
            var9 = var9.bind(var12)(var13);
            var1 = var9;
            var7 = var11[var7];
            var8 = var8.bind(var5)(var7);
            var7 = var8.flattenAst;
            var1 = var7.bind(var8)(var10, var9);
case 9: // try_end0
            _fun0001_ip = 10; continue _fun0001;
case 11: // catch_target0
            CatchBlockStart(arg_register=6);
            var7 = var6;
            var6 = '';
            if(!var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = '\n\n';
case 12:
            var4 = var2;
            var1 = var7.bind(var5)(var6, var4);
case 10:
            var4 = var3;
            if(!var4) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var4 = var3;
            var3 = var1;
            var2 = var2.inline;
            var1 = var4.bind(var5)(var3, var2);
case 14:
            return var1;
        }
    };
    var _closure1_slot3 = var2;
    var2 = global;
    var8 = var2.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var2 = true;
    var6['value'] = var2;
    var2 = '__esModule';
    var2 = var7.bind(var8)(var3, var2, var6);
    var2 = {};
    var6 = function astParserFor(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.parserFor;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var7 = arguments[0];
                var1 = arguments[1];
                var8 = arguments[2];
                var6 = arguments[3];
                var5 = undefined;
                if(!(var7 === var5)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var7 = '';
case 16:
                if(!(var8 === var5)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var8 = {};
case 18:
                if(!(var6 === var5)) { _fun0002_ip = 20; continue _fun0002 }
case 4:
                var6 = null;
case 20:
                var4 = _closure1_slot3;
                var3 = _closure2_slot0;
                var2 = {};
                var2['inline'] = var1;
                var14 = var2;
                var13 = var8;
                var8 = copyDataProperties(var14, var13);
                var10 = !var1;
                var15 = undefined;
                var14 = var3;
                var13 = var7;
                var12 = var2;
                var11 = var6;
                var1 = var15[var4](var14, var13, var12, var11, var10, var9);
                return var1;
            }
        };
        return var1;
    };
    var2['astParserFor'] = var6;
    var1 = function reactParserFor(arg1) {
        var7 = arg1;
        var6 = _closure1_slot1;
        var8 = _closure1_slot2;
        var2 = 1;
        var3 = var8[var2];
        var5 = undefined;
        var4 = var6.bind(var5)(var3);
        var3 = var4.parserFor;
        var3 = var3.bind(var4)(var7);
        var _closure2_slot0 = var3;
        var3 = var8[var2];
        var4 = var6.bind(var5)(var3);
        var3 = var4.reactFor;
        var2 = var8[var2];
        var6 = var6.bind(var5)(var2);
        var5 = var6.ruleOutput;
        var2 = 'react';
        var2 = var5.bind(var6)(var7, var2);
        var2 = var3.bind(var4)(var2);
        var _closure2_slot1 = var2;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var9 = arguments[0];
                var1 = arguments[1];
                var2 = arguments[2];
                var6 = arguments[3];
                var4 = undefined;
                if(!(var9 === var4)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var9 = '';
case 16:
                if(!(var1 === var4)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                var1 = true;
case 18:
                if(!(var2 === var4)) { _fun0003_ip = 20; continue _fun0003 }
case 4:
                var2 = {};
case 20:
                if(!(var6 === var4)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                var6 = null;
case 21:
                var3 = var9.trim;
                var3 = var3.bind(var9)();
                if(var3) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                var3 = null;
                return var3;
case 23:
                var8 = {};
                var8['inline'] = var1;
                var14 = var8;
                var13 = var2;
                var2 = copyDataProperties(var14, var13);
                var5 = _closure1_slot3;
                var14 = _closure2_slot0;
                var10 = !var1;
                var15 = undefined;
                var13 = var9;
                var12 = var8;
                var11 = var6;
                var9 = var15[var5](var14, var13, var12, var11, var10, var9);
                var1 = var9;
                var6 = var8;
                var5 = undefined;
case 25: // try_start_0
                var8 = _closure2_slot1;
                var7 = var1;
                var6 = var8.bind(var4)(var7, var6);
case 26: // try_end0
                return var6;
case 27: // catch_target0
                CatchBlockStart(arg_register=5);
                var3 = var6;
                var7 = var6.message;
                var5 = var7;
                var6 = null;
                if(!(var6 != var7)) { _fun0003_ip = 28; continue _fun0003 }
case 12:
                var7 = var5;
                var6 = var7.includes;
                var5 = 'Cannot convert undefined';
                var5 = var6.bind(var7)(var5);
                if(var5) { _fun0003_ip = 29; continue _fun0003 }
case 28:
                throw var3;
case 29:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 0;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.MarkupParserNodeTypeError;
                var14 = var1;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var15 = var2;
                var1 = new var15[var3](var14, var13);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        return var1;
    };
    var2['reactParserFor'] = var1;
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/markup/native/MarkupParser.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();