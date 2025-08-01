// app/modules/safe_area/useStableSafeAreaInsets.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function getStableSafeAreaInsets() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 69; continue _fun0001 }
 37:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 4;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getSafeAreaInsets;
            var1 = var1.bind(var3)();
            _fun0001_ip = 99; continue _fun0001;
 69:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getStableSafeAreaInsets;
            var1 = var2.bind(var3)();
 99:
            return var1;
        }
    };
    var _closure1_slot5 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot4 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/safe_area/useStableSafeAreaInsets.native.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useStableSafeAreaInsets() {
        var5 = _closure1_slot4;
        var4 = var5.useState;
        var3 = _closure1_slot5;
        var6 = undefined;
        var3 = var3.bind(var6)();
        var4 = var4.bind(var5)(var3);
        var3 = _closure1_slot3;
        var1 = 2;
        var4 = var3.bind(var6)(var4, var1);
        var1 = 0;
        var1 = var4[var1];
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot0 = var3;
        var4 = var5.useEffect;
        var3 = function() {
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = function() {
                var3 = _closure2_slot0;
                var2 = _closure1_slot5;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['default'] = var4;
    var3['getStableSafeAreaInsets'] = var2;
    return var1;
})();