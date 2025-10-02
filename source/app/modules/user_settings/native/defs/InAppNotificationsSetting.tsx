// app/modules/user_settings/native/defs/InAppNotificationsSetting.tsx
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
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var7 = var2.MobileSetting;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot3 = var2;
    var2 = {};
    var8 = 2;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.RendererType;
    var8 = var8.TOGGLE;
    var2['type'] = var8;
    var8 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 5;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.rqEZdn;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var8;
    var7 = var7.NOTIFICATIONS;
    var2['parent'] = var7;
    var7 = function useInAppNotificationsSettingValue() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 3;
            var1 = var5[var2];
            var3 = undefined;
            var1 = var4.bind(var3)(var1);
            var6 = var1.FocusMode;
            var1 = var6.useSetting;
            var1 = var1.bind(var6)();
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var3 = var2.ShowInAppNotifications;
            var2 = var3.useSetting;
            var2 = var2.bind(var3)();
            var1 = !var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var2['useValue'] = var7;
    var7 = function updateInAppNotificationSettings(arg1) {
        var6 = arg1;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 3;
        var3 = var5[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var4 = var3.ShowInAppNotifications;
        var3 = var4.updateSetting;
        var3 = var3.bind(var4)(var6);
        var4 = _closure1_slot1;
        var3 = 6;
        var3 = var5[var3];
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot3;
        var3 = var2.LOCAL_SETTINGS_UPDATED;
        var2 = {};
        var2['notifications_in_app_enabled'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['onValueChange'] = var7;
    var4 = function useInAppNotificationsDescription() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 4;
            var1 = var4[var1];
            var6 = undefined;
            var3 = var3.bind(var6)(var1);
            var1 = var3.useFocusModeEnabled;
            var3 = var1.bind(var3)();
            var1 = undefined;
            if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.cIRG0t;
            var1 = var3.bind(var4)(var2);
case 4:
            return var1;
        }
    };
    var2['useDescription'] = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useFocusModeEnabled;
    var2['useIsDisabled'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/InAppNotificationsSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();