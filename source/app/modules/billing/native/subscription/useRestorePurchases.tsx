// app/modules/billing/native/subscription/useRestorePurchases.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var7 = var5[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var5[var4];
    var7 = var6.bind(var1)(var4);
    var4 = var7.prototype;
    var6 = Object.create(var4, {constructor: {value: var7}});
    var11 = 'useRestorePurchases';
    var12 = var6;
    var4 = new var12[var7](var11, var10);
    var4 = var4 instanceof Object ? var4 : var6;
    var _closure1_slot5 = var4;
    var4 = 5;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/billing/native/subscription/useRestorePurchases.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useRestorePurchases() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arguments[0];
            var7 = undefined;
            if(!(var1 === var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = {};
case 2:
            var6 = var1.forceRestore;
            if(!(var6 === var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = true;
case 4:
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var7;
            var1 = function _restore() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot2;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                            var2 = _closure2_slot2;
                            var6 = undefined;
                            var7 = true;
                            var2 = var2.bind(var6)(var7);
                            var8 = _closure1_slot5;
                            var5 = var8.log;
                            var2 = 'isRestoring true';
                            var2 = var5.bind(var8)(var2);
case 8: // try_start_0 // try_start_1
                            var5 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var2 = 4;
                            var2 = var8[var2];
                            var5 = var5.bind(var6)(var2);
                            var2 = var5.restoreAndApplyPurchases;
                            var2 = var2.bind(var5)();
                            SaveGenerator(address=84);
case 9:
                            return var2;
case 10:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                            var9 = _closure1_slot5;
                            var8 = var9.log;
                            var5 = 'restored unfinished transactions';
                            var5 = var8.bind(var9)(var5);
                            var5 = _closure2_slot1;
                            var5['current'] = var7;
case 13: // try_end0
                            _fun0002_ip = 14; continue _fun0002;
case 11: // try_end1
                            var7 = _closure2_slot2;
                            var5 = false;
                            var5 = var7.bind(var6)(var5);
                            var8 = _closure1_slot5;
                            var7 = var8.log;
                            var5 = 'isRestoring false';
                            var5 = var7.bind(var8)(var5);
                            return var2;
case 15: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register=6);
                            var5 = _closure1_slot5;
                            var2 = var5.error;
                            var2 = var2.bind(var5)(var7);
case 14: // try_end2
                            var5 = _closure2_slot2;
                            var2 = false;
                            var2 = var5.bind(var6)(var2);
                            var7 = _closure1_slot5;
                            var5 = var7.log;
                            var2 = 'isRestoring false';
                            var2 = var5.bind(var7)(var2);
                            return var6;
case 16: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=1);
                            var5 = _closure2_slot2;
                            var4 = false;
                            var4 = var5.bind(var6)(var4);
                            var5 = _closure1_slot5;
                            var4 = var5.log;
                            var3 = 'isRestoring false';
                            var3 = var4.bind(var5)(var3);
                            throw var2;
case 6:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot3 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot3 = var1;
            var5 = _closure1_slot4;
            var3 = var5.useRef;
            var4 = false;
            var3 = var3.bind(var5)(var4);
            _closure2_slot1 = var3;
            var3 = var5.useState;
            var4 = var3.bind(var5)(var4);
            var3 = _closure1_slot3;
            var1 = 2;
            var4 = var3.bind(var7)(var4, var1);
            var1 = 0;
            var1 = var4[var1];
            var3 = 1;
            var3 = var4[var3];
            _closure2_slot2 = var3;
            var4 = var5.useEffect;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0003_ip = 17; continue _fun0003 }
case 7:
                    var2 = _closure2_slot1;
                    var2 = var2.current;
                    var1 = !var2;
case 17:
                    if(!var1) { _fun0003_ip = 18; continue _fun0003 }
case 4:
                    var2 = function restore() {
                        var1 = undefined;
                        var4 = _closure2_slot3;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();