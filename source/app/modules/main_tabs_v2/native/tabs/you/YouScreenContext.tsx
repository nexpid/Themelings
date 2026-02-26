// app/modules/main_tabs_v2/native/tabs/you/YouScreenContext.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var _closure1_slot0 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot1 = var8;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot2 = var4;
    var7 = var8.createContext;
    var4 = {};
    var9 = false;
    var4['showOrbsBadgeCoachmark'] = var9;
    var9 = function setShowOrbsBadgeCoachmark() {
        var1 = undefined;
        return var1;
    };
    var4['setShowOrbsBadgeCoachmark'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/you/YouScreenContext.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useYouScreenContext() {
        var3 = _closure1_slot1;
        var2 = var3.useContext;
        var1 = _closure1_slot3;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useYouScreenContext'] = var4;
    var2 = function YouScreenContextProvider(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.children;
            var3 = var1.showOrbsBadgeCoachmark;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = false;
case 2:
            var _closure2_slot0 = var3;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var7 = _closure1_slot1;
            var6 = var7.useState;
            var9 = var6.bind(var7)(var3);
            var8 = _closure1_slot0;
            var6 = 2;
            var9 = var8.bind(var4)(var9, var6);
            var6 = 0;
            var8 = var9[var6];
            _closure2_slot1 = var8;
            var6 = 1;
            var6 = var9[var6];
            _closure2_slot2 = var6;
            var9 = var7.useEffect;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure2_slot2;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = var9.bind(var7)(var3, var6);
            var6 = var7.useMemo;
            var3 = new Array(1);
            var3[0] = var8;
            var2 = function() {
                var1 = {};
                var3 = _closure2_slot1;
                var1['showOrbsBadgeCoachmark'] = var3;
                var2 = _closure2_slot2;
                var1['setShowOrbsBadgeCoachmark'] = var2;
                return var1;
            };
            var6 = var6.bind(var7)(var2, var3);
            var3 = _closure1_slot2;
            var1 = _closure1_slot3;
            var2 = var1.Provider;
            var1 = {};
            var1['value'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['YouScreenContextProvider'] = var2;
    return var1;
})();