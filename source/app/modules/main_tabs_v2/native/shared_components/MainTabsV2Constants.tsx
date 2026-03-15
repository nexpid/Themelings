// app/modules/main_tabs_v2/native/shared_components/MainTabsV2Constants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var2 = var2.StyleSheet;
    var2 = var2.hairlineWidth;
    var5 = 2;
    var2 = var5 * var2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/shared_components/MainTabsV2Constants.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = 56;
    var3['MIN_HEADER_HEIGHT'] = var5;
    var5 = 8;
    var3['HEADER_CORNER_RADIUS'] = var5;
    var4 = function getMinHeaderHeight(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.isMobileVisualRefreshEnabled;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = 56;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 64;
case 2:
            return var1;
        }
    };
    var3['getMinHeaderHeight'] = var4;
    var3['MIDNIGHT_BORDER_WIDTH'] = var2;
    return var1;
})();