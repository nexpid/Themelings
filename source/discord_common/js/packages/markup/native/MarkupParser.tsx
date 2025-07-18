// discord_common/js/packages/markup/native/MarkupParser.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var2 = native3;
    var _closure1_slot1 = var2;
    var _closure1_slot2 = var4;
    var2 = function saferParse(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var9 = arguments[3];
            var8 = arguments[4];
            var6 = arg1;
            var7 = arg2;
            var2 = arg3;
            var5 = undefined;
            if(!(var9 === var5)) { _fun0001_ip = 23; continue _fun0001 }
 21:
            var9 = null;
 23:
            var3 = var9;
            if(!(var8 === var5)) { _fun0001_ip = 32; continue _fun0001 }
 30:
            var8 = true;
 32:
            var4 = var8;
            var1 = undefined;
 37: // try_start_0
            var8 = var4;
            if(!var8) { _fun0001_ip = 56; continue _fun0001 }
 43:
            var9 = var7;
            var8 = '\n\n';
            var7 = var9 + var8;
 56:
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
 128: // try_end0
            _fun0001_ip = 157; continue _fun0001;
 130: // catch_target0
            CatchBlockStart(arg_register=6);
            var7 = var6;
            var6 = '';
            if(!var4) { _fun0001_ip = 148; continue _fun0001 }
 142:
            var6 = '\n\n';
 148:
            var4 = var2;
            var1 = var7.bind(var5)(var6, var4);
 157:
            var4 = var3;
            if(!var4) { _fun0001_ip = 181; continue _fun0001 }
 163:
            var4 = var3;
            var3 = var1;
            var2 = var2.inline;
            var1 = var4.bind(var5)(var3, var2);
 181:
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
 0:
                var7 = arguments[0];
                var1 = arguments[1];
                var8 = arguments[2];
                var6 = arguments[3];
                var5 = undefined;
                if(!(var7 === var5)) { _fun0002_ip = 22; continue _fun0002 }
 18:
                var7 = '';
 22:
                if(!(var8 === var5)) { _fun0002_ip = 28; continue _fun0002 }
 26:
                var8 = {};
 28:
                if(!(var6 === var5)) { _fun0002_ip = 34; continue _fun0002 }
 32:
                var6 = null;
 34:
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
 0:
                var8 = arguments[0];
                var2 = arguments[1];
                var1 = arguments[2];
                var7 = arguments[3];
                var4 = undefined;
                if(!(var8 === var4)) { _fun0003_ip = 22; continue _fun0003 }
 18:
                var8 = '';
 22:
                if(!(var2 === var4)) { _fun0003_ip = 28; continue _fun0003 }
 26:
                var2 = true;
 28:
                if(!(var1 === var4)) { _fun0003_ip = 34; continue _fun0003 }
 32:
                var1 = {};
 34:
                if(!(var7 === var4)) { _fun0003_ip = 40; continue _fun0003 }
 38:
                var7 = null;
 40:
                var3 = var8.trim;
                var3 = var3.bind(var8)();
                if(var3) { _fun0003_ip = 57; continue _fun0003 }
 53:
                var3 = null;
                return var3;
 57:
                var3 = {};
                var3['inline'] = var2;
                var13 = var3;
                var12 = var1;
                var1 = copyDataProperties(var13, var12);
                var6 = _closure1_slot3;
                var13 = _closure2_slot0;
                var9 = !var2;
                var14 = undefined;
                var12 = var8;
                var11 = var3;
                var10 = var7;
                var2 = var14[var6](var13, var12, var11, var10, var9, var8);
                var1 = _closure2_slot1;
                var1 = var1.bind(var4)(var2, var3);
                return var1;
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