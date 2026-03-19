// app/modules/user_settings/native/defs/PremiumSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var7 = var6[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var7);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var10 = var2.UserSettingsSections;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot6 = var2;
    var2 = 10;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createRoute;
    var2 = {};
    var8 = function getPremiumSettingTitle() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var6 = undefined;
            var5 = var3.bind(var6)(var1);
            var4 = var5.hasPremiumSubscriptionToDisplay;
            var3 = _closure1_slot4;
            var1 = var3.getCurrentUser;
            var3 = var1.bind(var3)();
            var7 = _closure1_slot5;
            var1 = var7.getPremiumTypeSubscription;
            var1 = var1.bind(var7)();
            var1 = var4.bind(var5)(var3, var1);
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 6;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.8x0jKT;
            var1 = var3.bind(var4)(var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = var2.8jmdON;
            var1 = var3.bind(var4)(var2);
case 4:
            return var1;
        }
    };
    var2['title'] = var8;
    var8 = null;
    var2['parent'] = var8;
    var8 = 11;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.NitroWheelIcon;
    var2['IconComponent'] = var8;
    var8 = function useCanNavigateToPaymentSetting() {
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var3 = undefined;
                var4 = var4.bind(var3)(var1);
                var1 = var4.getIsPaymentsBlocked;
                var1 = var1.bind(var4)();
                var1 = !var1;
                if(var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 8;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var1 = false;
case 5:
                return var1;
            }
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['usePreNavigationAction'] = var8;
    var8 = function usePremiumSettingTrailing() {
        var4 = _closure1_slot6;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 9;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var2['useTrailing'] = var8;
    var8 = {};
    var10 = var10.PREMIUM;
    var8['route'] = var10;
    var9 = function getComponent() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 12;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.default;
        return var1;
    };
    var8['getComponent'] = var9;
    var2['screen'] = var8;
    var2 = var4.bind(var7)(var2);
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/PremiumSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();