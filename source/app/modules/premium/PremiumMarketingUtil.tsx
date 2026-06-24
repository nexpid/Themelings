// app/modules/premium/PremiumMarketingUtil.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.Routes;
    var _closure1_slot2 = var7;
    var4 = var4.UserSettingsSections;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/PremiumMarketingUtil.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function navigateToPremiumHomePage() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var3 = var2.openUserSettings;
        var2 = {};
        var4 = _closure1_slot3;
        var4 = var4.PREMIUM;
        var2['screen'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['navigateToPremiumHomePage'] = var4;
    var2 = function navigateToNitroHomePage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = undefined;
            var1 = var2.bind(var1)();
case 2:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 2;
            var3 = var5[var1];
            var1 = undefined;
            var6 = var4.bind(var1)(var3);
            var3 = var6.popLayer;
            var3 = var3.bind(var6)();
            var3 = 3;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.transitionTo;
            var2 = _closure1_slot2;
            var2 = var2.APPLICATION_STORE;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['navigateToNitroHomePage'] = var2;
    return var1;
})();