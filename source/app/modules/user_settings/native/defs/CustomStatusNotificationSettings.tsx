// app/modules/user_settings/native/defs/CustomStatusNotificationSettings.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function onChange(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var4 = var3.CustomStatusPushNotifications;
            var3 = var4.updateSetting;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 3;
            var2 = var6[var2];
            var2 = var5.bind(var1)(var2);
            var5 = var2.CustomStatusPushNotificationType;
            var2 = arg1;
            if(var2) { _fun0001_ip = 77; continue _fun0001 }
 69:
            var2 = var5.STATUS_PUSH_DISABLED;
            _fun0001_ip = 83; continue _fun0001;
 77:
            var2 = var5.STATUS_PUSH_ENABLED;
 83:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var8 = var4.MobileSetting;
    var4 = {};
    var9 = 1;
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var9 = var9.RendererType;
    var9 = var9.TOGGLE;
    var4['type'] = var9;
    var9 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 4;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.PTtxi4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['title'] = var9;
    var8 = var8.NOTIFICATIONS;
    var4['parent'] = var8;
    var5 = function useValue() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 2;
        var1 = var5[var1];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.CustomStatusPushNotifications;
        var1 = var2.useSetting;
        var2 = var1.bind(var2)();
        var1 = 3;
        var1 = var5[var1];
        var1 = var4.bind(var3)(var1);
        var1 = var1.CustomStatusPushNotificationType;
        var1 = var1.STATUS_PUSH_DISABLED;
        var1 = var2 !== var1;
        return var1;
    };
    var4['useValue'] = var5;
    var4['onValueChange'] = var2;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.useCustomStatusPushExperiment;
    var4['usePredicate'] = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/native/defs/CustomStatusNotificationSettings.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['onChange'] = var2;
    return var1;
})();