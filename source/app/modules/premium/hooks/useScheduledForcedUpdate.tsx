// app/modules/premium/hooks/useScheduledForcedUpdate.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/hooks/useScheduledForcedUpdate.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useScheduledForcedUpdate(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = var1.delay;
            var _closure2_slot0 = var8;
            var7 = var1.disable;
            var1 = undefined;
            if(!(var7 === var1)) { _fun0001_ip = 29; continue _fun0001 }
 27:
            var7 = false;
 29:
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var1;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 1;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.useForceUpdate;
            var6 = var4.bind(var5)();
            _closure2_slot2 = var6;
            var5 = _closure1_slot2;
            var4 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure2_slot0;
                    var3 = 0;
                    if(!(!(var4 <= var3))) { _fun0002_ip = 58; continue _fun0002 }
 15:
                    var3 = _closure2_slot1;
                    if(var3) { _fun0002_ip = 58; continue _fun0002 }
 22:
                    var3 = global;
                    var5 = var3.setTimeout;
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var2 = function() {
                        var2 = _closure2_slot2;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var2 = var5.bind(var3)(var2, var4);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
 58:
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