// app/modules/user_settings/native/PremiumSettingScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/PremiumSettingScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumScreen() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var4 = undefined;
            var5 = var3.bind(var4)(var2);
            var2 = var5.useSettingNavigationRoute;
            var5 = var2.bind(var5)();
            var2 = 3;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useStackNavigation;
            var3 = var2.bind(var3)();
            var2 = var3.canGoBack;
            var2 = var2.bind(var3)();
            var6 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 4;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var6 = var2.close;
case 2:
            var3 = _closure1_slot3;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 5;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['onClose'] = var6;
            var8 = var5.params;
            var9 = var1;
            var5 = copyDataProperties(var9, var8);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();