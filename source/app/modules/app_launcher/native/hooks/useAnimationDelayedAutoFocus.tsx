// app/modules/app_launcher/native/hooks/useAnimationDelayedAutoFocus.tsx
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
    var4 = 'modules/app_launcher/native/hooks/useAnimationDelayedAutoFocus.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAnimationDelayedAutoFocus(arg1, arg2) {
        var8 = arg1;
        var7 = arg2;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var7;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 1;
        var4 = var4[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var4 = var5.useAwaitAnimationCompletion;
        var6 = var4.bind(var5)();
        var _closure2_slot2 = var6;
        var5 = _closure1_slot2;
        var4 = var5.useRef;
        var3 = false;
        var3 = var4.bind(var5)(var3);
        var _closure2_slot3 = var3;
        var4 = var5.useEffect;
        var3 = new Array(3);
        var3[0] = var8;
        var3[1] = var7;
        var3[2] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot0;
                if(!var2) { _fun0001_ip = 22; continue _fun0001 }
 10:
                var3 = _closure2_slot3;
                var3 = var3.current;
                var2 = !var3;
 22:
                if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 25:
                var4 = _closure2_slot2;
                var3 = undefined;
                var2 = function() {
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
 45:
                var2 = _closure2_slot3;
                var1 = true;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useAnimationDelayedAutoFocus'] = var2;
    return var1;
})();