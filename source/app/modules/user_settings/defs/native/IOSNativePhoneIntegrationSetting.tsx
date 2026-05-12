// app/modules/user_settings/defs/native/IOSNativePhoneIntegrationSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var9 = var2.MobileSetting;
    var2 = 1;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createToggle;
    var2 = {};
    var10 = function useTitle() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.V6D0wU;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['useTitle'] = var10;
    var9 = var9.NOTIFICATIONS;
    var2['parent'] = var9;
    var9 = 3;
    var10 = var6[var9];
    var10 = var5.bind(var1)(var10);
    var10 = var10.NativePhoneIntegrationEnabled;
    var10 = var10.useSetting;
    var2['useValue'] = var10;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.NativePhoneIntegrationEnabled;
    var9 = var9.updateSetting;
    var2['onValueChange'] = var9;
    var8 = function usePredicate() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 4;
            var1 = var4[var1];
            var4 = undefined;
            var5 = var3.bind(var4)(var1);
            var3 = var5.useConfig;
            var1 = {};
            var6 = 'IOSNativePhoneIntegrationSetting';
            var1['location'] = var6;
            var1 = var3.bind(var5)(var1);
            var1 = var1.enabled;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 5;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isIOS;
            var1 = var2.bind(var3)();
case 2:
            return var1;
        }
    };
    var2['usePredicate'] = var8;
    var2 = var4.bind(var7)(var2);
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/defs/native/IOSNativePhoneIntegrationSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();