// app/lib/intlFormatDate.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function makeIntlFormatter(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = arg2;
 6: // try_start_0
            var3 = global;
            var5 = var3.Intl;
            var4 = var5.DateTimeFormat;
            var3 = var2;
            var2 = var1;
            var2 = var4.bind(var5)(var3, var2);
            var2 = var2.format;
 37: // try_end0
            return var2;
 39: // catch_target0
            CatchBlockStart(arg_register=1);
            var2 = global;
            var4 = var2.Intl;
            var3 = var4.DateTimeFormat;
            var2 = var1;
            var1 = undefined;
            var1 = var3.bind(var4)(var1, var2);
            var1 = var1.format;
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/intlFormatDate.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function makeFormatter(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var1 = _closure1_slot2;
            var4 = var1.locale;
            var1 = function tryMakeNativeFormatter(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = arg1;
                    var1 = arg2;
                    var7 = var4;
                    var _closure3_slot0 = var4;
                    var3 = var1;
                    var _closure3_slot1 = var1;
                    var4 = undefined;
                    var8 = undefined;
                    var9 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var5 = 1;
                    var1 = var1[var5];
                    var1 = var9.bind(var4)(var1);
                    var9 = var1.makeFormatter;
                    var1 = null;
                    if(!(var1 != var9)) { _fun0003_ip = 266; continue _fun0003 }
 64: // try_start_0
                    var10 = var7;
                    var10 = var1 != var10;
                    var9 = var10;
                    if(!var10) { _fun0003_ip = 176; continue _fun0003 }
 77:
                    var11 = var7;
                    var10 = var11.split;
                    var15 = '-';
                    var10 = var10.bind(var11)(var15);
                    var13 = 0;
                    var11 = var10[var13];
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var16 = 2;
                    var10 = var10[var16];
                    var10 = var12.bind(var4)(var10);
                    var10 = var10.systemLocale;
                    var12 = var1 == var10;
                    var10 = undefined;
                    if(var12) { _fun0003_ip = 172; continue _fun0003 }
 135:
                    var14 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var12 = var12[var16];
                    var12 = var14.bind(var4)(var12);
                    var14 = var12.systemLocale;
                    var12 = var14.split;
                    var12 = var12.bind(var14)(var15);
                    var10 = var12[var13];
 172:
                    var9 = var11 === var10;
 176:
                    var8 = var9;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var5 = var12[var5];
                    var6 = var11.bind(var4)(var5);
                    var5 = var6.makeFormatter;
                    var10 = var7;
                    var9 = 2;
                    var9 = var12[var9];
                    var9 = var11.bind(var4)(var9);
                    var9 = var9.initialLocale;
                    if(!(var10 === var9)) { _fun0003_ip = 232; continue _fun0003 }
 227:
                    var4 = undefined;
                    if(var8) { _fun0003_ip = 235; continue _fun0003 }
 232:
                    var4 = var7;
 235:
                    var3 = var5.bind(var6)(var4, var3);
                    var _closure3_slot2 = var3;
                    if(!(var1 != var3)) { _fun0003_ip = 260; continue _fun0003 }
 249:
                    var _closure3_slot3 = var1;
 253: // try_end0
                    var2 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var1 = arg1;
 3: // try_start_0
                            var4 = _closure3_slot2;
                            var3 = var1;
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
 20: // try_end0
                            return var2;
 22: // catch_target0
                            CatchBlockStart(arg_register=1);
                            var4 = _closure3_slot3;
                            var3 = null;
                            if(!(var3 == var4)) { _fun0004_ip = 64; continue _fun0004 }
 37:
                            var6 = _closure1_slot3;
                            var5 = _closure3_slot0;
                            var4 = _closure3_slot1;
                            var3 = undefined;
                            var3 = var6.bind(var3)(var5, var4);
                            _closure3_slot3 = var3;
 64:
                            var3 = _closure3_slot3;
                            var2 = var1;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    return var2;
 260:
                    return var1;
 262: // catch_target0
                    CatchBlockStart(arg_register=1);
                    return var1;
 266:
                    return var1;
                }
            };
            var3 = undefined;
            var1 = var1.bind(var3)(var4, var5);
            var6 = null;
            if(!(var6 == var1)) { _fun0002_ip = 47; continue _fun0002 }
 37:
            var2 = _closure1_slot3;
            var1 = var2.bind(var3)(var4, var5);
 47:
            return var1;
        }
    };
    var3['makeFormatter'] = var2;
    return var1;
})();