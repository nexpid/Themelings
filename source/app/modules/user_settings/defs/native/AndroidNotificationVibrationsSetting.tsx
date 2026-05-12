// app/modules/user_settings/defs/native/AndroidNotificationVibrationsSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var7 = var1.Object;
    var4 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var7)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var4 = var2.useAndroidNotificationVibrationsEnabled;
    var _closure1_slot2 = var4;
    var9 = var2.setAndroidNotificationVibrationsEnabled;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var10 = var2.MobileSetting;
    var2 = 4;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createToggle;
    var2 = {};
    var11 = function useTitle() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 5;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.lFg/O1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['useTitle'] = var11;
    var10 = var10.NOTIFICATIONS;
    var2['parent'] = var10;
    var10 = function useAndroidNotificationVibrationsSettingValue() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot2;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var2['useValue'] = var10;
    var2['onValueChange'] = var9;
    var8 = function useHasAndroidNotificationVibrationsSetting() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot2;
            var5 = undefined;
            var3 = var1.bind(var5)();
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 2;
            var1 = var6[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.isIOS;
            var1 = var1.bind(var4)();
            var1 = !var1;
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 3;
            var2 = var6[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.hasAndroidNotificationChannels;
            var2 = var2.bind(var4)();
            var1 = !var2;
case 4:
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = null;
            var1 = var2 != var3;
case 6:
            return var1;
        }
    };
    var2['usePredicate'] = var8;
    var2 = var4.bind(var7)(var2);
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/defs/native/AndroidNotificationVibrationsSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();