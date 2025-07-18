// app/modules/billing/native/subscription/useRestoreFromLocalReceipt.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'useRestoreFromLocalReceipt';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/billing/native/subscription/useRestoreFromLocalReceipt.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useRestoreFromLocalReceipt() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arguments[0];
            var7 = undefined;
            if(!(var1 === var7)) { _fun0001_ip = 13; continue _fun0001 }
 11:
            var1 = {};
 13:
            var4 = var1.forceRestore;
            if(!(var4 === var7)) { _fun0001_ip = 25; continue _fun0001 }
 23:
            var4 = true;
 25:
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var7;
            var _closure2_slot4 = var7;
            var1 = function restore() {
                var1 = undefined;
                var4 = _closure2_slot6;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot5 = var1;
            var1 = function _restore() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 317; continue _fun0002 }
 10:
                            var2 = _closure2_slot2;
                            var6 = undefined;
                            var8 = true;
                            var2 = var2.bind(var6)(var8);
                            var7 = _closure1_slot7;
                            var5 = var7.log;
                            var2 = 'isRestoring true';
                            var2 = var5.bind(var7)(var2);
 50: // try_start_0 // try_start_1
                            var5 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var9 = 5;
                            var2 = var2[var9];
                            var5 = var5.bind(var6)(var2);
                            var2 = var5.loadProducts;
                            var2 = var2.bind(var5)();
                            SaveGenerator(address=84);
 82:
                            return var2;
 84:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0002_ip = 195; continue _fun0002 }
 90:
                            var7 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var5 = var5[var9];
                            var7 = var7.bind(var6)(var5);
                            var5 = var7.restoreFromLocalReceipt;
                            var5 = var5.bind(var7)();
                            SaveGenerator(address=121);
 119:
                            return var5;
 121:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                            if(var7) { _fun0002_ip = 160; continue _fun0002 }
 127:
                            var10 = _closure1_slot7;
                            var9 = var10.log;
                            var7 = 'restored from local receipt';
                            var7 = var9.bind(var10)(var7);
                            var7 = _closure2_slot1;
                            var7['current'] = var8;
 158: // try_end0
                            _fun0002_ip = 246; continue _fun0002;
 160: // try_end1
                            var8 = _closure2_slot2;
                            var7 = false;
                            var7 = var8.bind(var6)(var7);
                            var9 = _closure1_slot7;
                            var8 = var9.log;
                            var7 = 'isRestoring false';
                            var7 = var8.bind(var9)(var7);
                            return var5;
 195:
                            var7 = _closure2_slot2;
                            var5 = false;
                            var5 = var7.bind(var6)(var5);
                            var8 = _closure1_slot7;
                            var7 = var8.log;
                            var5 = 'isRestoring false';
                            var5 = var7.bind(var8)(var5);
                            return var2;
 230: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register=6);
                            var5 = _closure1_slot7;
                            var2 = var5.error;
                            var2 = var2.bind(var5)(var7);
 246: // try_end2
                            var5 = _closure2_slot2;
                            var2 = false;
                            var2 = var5.bind(var6)(var2);
                            var7 = _closure1_slot7;
                            var5 = var7.log;
                            var2 = 'isRestoring false';
                            var2 = var5.bind(var7)(var2);
                            return var6;
 281: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=1);
                            var5 = _closure2_slot2;
                            var4 = false;
                            var4 = var5.bind(var6)(var4);
                            var5 = _closure1_slot7;
                            var4 = var5.log;
                            var3 = 'isRestoring false';
                            var3 = var4.bind(var5)(var3);
                            throw var2;
 317:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot6 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot6 = var1;
            var5 = _closure1_slot5;
            var1 = var5.useRef;
            var6 = false;
            var1 = var1.bind(var5)(var6);
            _closure2_slot1 = var1;
            var1 = var5.useState;
            var8 = var1.bind(var5)(var6);
            var6 = _closure1_slot4;
            var1 = 2;
            var8 = var6.bind(var7)(var8, var1);
            var1 = 0;
            var1 = var8[var1];
            var6 = 1;
            var6 = var8[var6];
            _closure2_slot2 = var6;
            var8 = var5.useEffect;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot0;
                    if(var2) { _fun0003_ip = 22; continue _fun0003 }
 10:
                    var3 = _closure2_slot1;
                    var3 = var3.current;
                    var2 = !var3;
 22:
                    if(!var2) { _fun0003_ip = 35; continue _fun0003 }
 25:
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 35:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var8.bind(var5)(var4, var6);
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 6;
            var4 = var8[var4];
            var7 = var6.bind(var7)(var4);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var6.bind(var7)(var4, var3);
            _closure2_slot3 = var6;
            var3 = var5.useRef;
            var3 = var3.bind(var5)(var6);
            _closure2_slot4 = var3;
            var4 = var5.useEffect;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var5 = _closure2_slot3;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 7;
                    var3 = var1[var7];
                    var1 = undefined;
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.AppStates;
                    var3 = var3.ACTIVE;
                    var3 = var5 === var3;
                    if(!var3) { _fun0004_ip = 93; continue _fun0004 }
 51:
                    var5 = _closure2_slot4;
                    var5 = var5.current;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.AppStates;
                    var4 = var4.BACKGROUND;
                    var3 = var5 === var4;
 93:
                    if(!var3) { _fun0004_ip = 104; continue _fun0004 }
 96:
                    var3 = _closure2_slot5;
                    var3 = var3.bind(var1)();
 104:
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot3;
                    var3['current'] = var2;
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