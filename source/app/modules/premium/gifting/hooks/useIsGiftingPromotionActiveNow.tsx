// app/modules/premium/gifting/hooks/useIsGiftingPromotionActiveNow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/hooks/useIsGiftingPromotionActiveNow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsGiftingPromotionActiveNow(arg1) {
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var7 = 2;
        var3 = var3[var7];
        var4 = undefined;
        var5 = var5.bind(var4)(var3);
        var3 = arg1;
        var6 = var5.bind(var4)(var3);
        var _closure2_slot0 = var6;
        var5 = _closure1_slot4;
        var8 = var5.useState;
        var3 = function() {
            var3 = _closure2_slot0;
            var2 = var3.isAfter;
            var1 = global;
            var4 = var1.Date;
            var1 = var4.now;
            var1 = var1.bind(var4)();
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = var8.bind(var5)(var3);
        var1 = _closure1_slot3;
        var4 = var1.bind(var4)(var3, var7);
        var1 = 0;
        var1 = var4[var1];
        var _closure2_slot1 = var1;
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot2 = var3;
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var1;
        var3[1] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot1;
                if(var2) { _fun0001_ip = 16; continue _fun0001 }
 12:
                var2 = undefined;
                return var2;
 16:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 3;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var2 = var2.Timeout;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var6 = var4;
                var2 = new var6[var2](var5);
                var2 = var2 instanceof Object ? var2 : var4;
                var _closure3_slot0 = var2;
                var2 = function startTimer() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var1 = global;
                        var4 = var1.Math;
                        var3 = var4.min;
                        var6 = _closure2_slot0;
                        var5 = var6.diff;
                        var2 = var1.Date;
                        var1 = var2.now;
                        var2 = var1.bind(var2)();
                        var1 = 'millisecond';
                        var2 = var5.bind(var6)(var2, var1);
                        var1 = 86400000;
                        var4 = var3.bind(var4)(var2, var1);
                        var3 = _closure3_slot0;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0002_ip = 100; continue _fun0002 }
 76:
                        var3 = _closure3_slot0;
                        var2 = var3.start;
                        var1 = function() {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                var4 = _closure2_slot0;
                                var3 = var4.isBefore;
                                var2 = global;
                                var5 = var2.Date;
                                var2 = var5.now;
                                var2 = var2.bind(var5)();
                                var2 = var3.bind(var4)(var2);
                                if(var2) { _fun0003_ip = 53; continue _fun0003 }
 38:
                                var3 = _closure3_slot1;
                                var2 = undefined;
                                var2 = var3.bind(var2)();
                                _fun0003_ip = 66; continue _fun0003;
 53:
                                var3 = _closure2_slot2;
                                var2 = undefined;
                                var1 = false;
                                var1 = var3.bind(var2)(var1);
 66:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var4, var1);
 100:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot1 = var2;
                var2 = var2.bind(var3)();
                var1 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.stop;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useIsGiftingPromotionActiveNow'] = var2;
    return var1;
})();