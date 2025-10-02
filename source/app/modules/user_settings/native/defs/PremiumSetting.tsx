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
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var8 = var6[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var8);
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
    var8 = var2.UserSettingsSections;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.RendererType;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot6 = var2;
    var2 = {};
    var4 = var4.ROUTE;
    var2['type'] = var4;
    var4 = function getPremiumSettingTitle() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 6;
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
            var2 = 7;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.8x0jKS;
            var1 = var3.bind(var4)(var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = var2.8jmdOD;
            var1 = var3.bind(var4)(var2);
case 4:
            return var1;
        }
    };
    var2['title'] = var4;
    var4 = null;
    var2['parent'] = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NitroWheelIcon;
    var2['IconComponent'] = var4;
    var4 = function useCanNavigateToPaymentSetting() {
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 8;
                var1 = var4[var1];
                var4 = undefined;
                var7 = var2.bind(var4)(var1);
                var6 = var7.getCurrentConfig;
                var5 = {};
                var1 = 'ddafe5_1';
                var5['location'] = var1;
                var1 = {};
                var2 = false;
                var1['autoTrackExposure'] = var2;
                var1 = var6.bind(var7)(var5, var1);
                var1 = var1.paymentsBlocked;
                var1 = !var1;
                if(var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 9;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.bind(var4)();
                var1 = false;
case 5:
                return var1;
            }
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['usePreNavigationAction'] = var4;
    var4 = function usePremiumSettingTrailing() {
        var4 = _closure1_slot6;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 10;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var2['useTrailing'] = var4;
    var4 = {};
    var8 = var8.PREMIUM;
    var4['route'] = var8;
    var7 = function getComponent() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 12;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.default;
        return var1;
    };
    var4['getComponent'] = var7;
    var2['screen'] = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/PremiumSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();