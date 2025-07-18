// app/modules/main_tabs_v2/native/settings/definitions/AndroidMessageNotificationsSetting.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var4 = function useAndroidMessageNotificationsSettingValue() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot2;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 25; continue _fun0001 }
 22:
            var1 = var2;
 25:
            return var1;
        }
    };
    var2 = function useHasAndroidMessageNotificationsSetting() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = _closure1_slot2;
            var4 = undefined;
            var3 = var2.bind(var4)();
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 3;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isAndroid;
            var1 = var1.bind(var2)();
            if(!var1) { _fun0002_ip = 51; continue _fun0002 }
 45:
            var2 = null;
            var1 = var2 != var3;
 51:
            return var1;
        }
    };
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var7.bind(var1)(var5);
    var6 = var5.useAndroidMessageNotificationsEnabled;
    var _closure1_slot2 = var6;
    var6 = var5.setAndroidMessageNotificationsEnabled;
    var5 = 1;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var9 = var5.MobileSetting;
    var5 = {};
    var11 = 2;
    var11 = var8[var11];
    var11 = var7.bind(var1)(var11);
    var11 = var11.RendererType;
    var11 = var11.TOGGLE;
    var5['type'] = var11;
    var10 = function title() {
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
        var1 = var1.zViLy8;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var5['title'] = var10;
    var9 = var9.NOTIFICATIONS;
    var5['parent'] = var9;
    var5['useValue'] = var4;
    var5['onValueChange'] = var6;
    var5['usePredicate'] = var2;
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/main_tabs_v2/native/settings/definitions/AndroidMessageNotificationsSetting.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['useAndroidMessageNotificationsSettingValue'] = var4;
    var3['useHasAndroidMessageNotificationsSetting'] = var2;
    return var1;
})();