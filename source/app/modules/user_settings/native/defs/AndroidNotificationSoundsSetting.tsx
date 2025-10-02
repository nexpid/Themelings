// app/modules/user_settings/native/defs/AndroidNotificationSoundsSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var7 = var2.useAndroidNotificationSoundsEnabled;
    var _closure1_slot2 = var7;
    var7 = var2.setAndroidNotificationSoundsEnabled;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.MobileSetting;
    var2 = {};
    var9 = 2;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.RendererType;
    var9 = var9.TOGGLE;
    var2['type'] = var9;
    var9 = function title() {
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
        var1 = var1.1CWknJ;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var9;
    var8 = var8.NOTIFICATIONS;
    var2['parent'] = var8;
    var8 = function useAndroidNotificationSoundsSettingValue() {
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
    var2['useValue'] = var8;
    var2['onValueChange'] = var7;
    var4 = function useHasAndroidNotificationSoundsSetting() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot2;
            var5 = undefined;
            var3 = var1.bind(var5)();
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 3;
            var1 = var6[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.isIOS;
            var1 = var1.bind(var4)();
            var1 = !var1;
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 4;
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
    var2['usePredicate'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/AndroidNotificationSoundsSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();