// app/modules/main_tabs_v2/navigator/getNavigatorCurrentRoute.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/navigator/getNavigatorCurrentRoute.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getNavigatorCurrentRoute() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arguments[0];
            var2 = undefined;
            if(!(var4 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 0;
            var1 = var5[var1];
            var3 = var3.bind(var2)(var1);
            var1 = var3.getRootNavigationRef;
            var4 = var1.bind(var3)();
case 2:
            var3 = null;
            var1 = var3 == var4;
            var6 = undefined;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var4.isReady;
            var6 = var1.bind(var4)();
case 4:
            var5 = true;
            var1 = undefined;
            if(!(var5 === var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var3 == var4;
            var2 = undefined;
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var4.getCurrentRoute;
            var2 = var3.bind(var4)();
case 8:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();