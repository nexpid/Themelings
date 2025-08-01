// app/design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx
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
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useNavigatorShouldCrossfade() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot2;
            var2 = var3.useContext;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 2;
            var1 = var6[var1];
            var4 = undefined;
            var1 = var5.bind(var4)(var1);
            var1 = var1.AccessibilityPreferencesContext;
            var1 = var2.bind(var3)(var1);
            var2 = var1.reducedMotion;
            var2 = var2.enabled;
            var1 = var1.prefersCrossfades;
            var3 = 1;
            var3 = var6[var3];
            var4 = var5.bind(var4)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0001_ip = 90; continue _fun0001 }
 87:
            var1 = var2;
 90:
            return var1;
        }
    };
    var3['useNavigatorShouldCrossfade'] = var2;
    return var1;
})();