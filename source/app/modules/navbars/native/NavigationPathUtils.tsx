// app/modules/navbars/native/NavigationPathUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var4 = function getSelectedSpecialNavigationPath(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.pathname;
            var2 = _closure1_slot2;
            var2 = var2.FRIENDS;
            if(!(var3 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = undefined;
            return var2;
case 2:
            var1 = _closure1_slot3;
            var1 = var1.FRIENDS;
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var5);
    var9 = 0;
    var5 = var8[var9];
    var1 = undefined;
    var5 = var7.bind(var1)(var5);
    var5 = var5.Routes;
    var _closure1_slot2 = var5;
    var5 = {};
    var5['FRIENDS'] = var9;
    var6 = 'FRIENDS';
    var5[var9] = var6;
    var _closure1_slot3 = var5;
    var6 = 2;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/navbars/native/NavigationPathUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['SpecialNavigationPath'] = var5;
    var3['getSelectedSpecialNavigationPath'] = var4;
    var2 = function useSelectedSpecialNavigationPath() {
        var3 = _closure1_slot4;
        var4 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var1 = var2[var1];
        var2 = undefined;
        var4 = var4.bind(var2)(var1);
        var1 = var4.useLocation;
        var1 = var1.bind(var4)();
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useSelectedSpecialNavigationPath'] = var2;
    return var1;
})();