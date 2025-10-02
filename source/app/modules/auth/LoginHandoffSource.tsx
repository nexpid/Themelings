// app/modules/auth/LoginHandoffSource.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var5 = var4.Routes;
    var _closure1_slot2 = var5;
    var4 = var4.UserSettingsSections;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot4 = var4;
    var4 = {};
    var5 = 'role_subscription';
    var4['ROLE_SUBSCRIPTION'] = var5;
    var5 = 'role_subscription_setting';
    var4['ROLE_SUBSCRIPTION_SETTING'] = var5;
    var _closure1_slot5 = var4;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/auth/LoginHandoffSource.tsx';
    var5 = var6.bind(var7)(var5);
    var3['LoginHandoffSource'] = var4;
    var2 = function getLoginHandoffSourceFromRedirectTo(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = global;
            var3 = var1.decodeURIComponent;
            var1 = undefined;
            var2 = arg1;
            var4 = var3.bind(var1)(var2);
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 2;
            var3 = var6[var3];
            var5 = var5.bind(var1)(var3);
            var3 = var5.tryParseChannelPath;
            var3 = var3.bind(var5)(var4);
            var5 = null;
            if(!(var5 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var3.channelId;
            var3 = _closure1_slot4;
            var3 = var3.ROLE_SUBSCRIPTIONS;
            if(!(var5 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var7 = _closure1_slot2;
            var6 = var7.SETTINGS;
            var3 = _closure1_slot3;
            var5 = var3.SUBSCRIPTIONS;
            var3 = 'role-subscriptions';
            var3 = var6.bind(var7)(var5, var3);
            var1 = undefined;
            if(!(var4 === var3)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = _closure1_slot5;
            var1 = var3.ROLE_SUBSCRIPTION_SETTING;
case 5:
            _fun0001_ip = 7; continue _fun0001;
case 4:
            var2 = _closure1_slot5;
            var1 = var2.ROLE_SUBSCRIPTION;
case 7:
            return var1;
        }
    };
    var3['getLoginHandoffSourceFromRedirectTo'] = var2;
    return var1;
})();