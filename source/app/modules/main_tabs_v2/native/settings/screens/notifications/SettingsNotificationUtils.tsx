// app/modules/main_tabs_v2/native/settings/screens/notifications/SettingsNotificationUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/screens/notifications/SettingsNotificationUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function hasAndroidNotificationChannels() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 0;
            var1 = var4[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0001_ip = 90; continue _fun0001 }
 36:
            var3 = global;
            var4 = var3.parseInt;
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 1;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.getSystemVersion;
            var3 = var2.bind(var3)();
            var2 = 10;
            var3 = var4.bind(var5)(var3, var2);
            var2 = 26;
            var1 = var3 >= var2;
 90:
            return var1;
        }
    };
    var3['hasAndroidNotificationChannels'] = var2;
    return var1;
})();