// app/modules/user_settings/defs/native/SyncContactsSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var9 = var2.MobileSetting;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.PlatformTypes;
    var _closure1_slot4 = var2;
    var2 = 6;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createToggle;
    var2 = {};
    var10 = function useTitle() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 7;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.uSvEy7;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['useTitle'] = var10;
    var9 = var9.CONTENT_AND_SOCIAL_DISCORD;
    var2['parent'] = var9;
    var9 = function useContactSyncSettingValue() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 4;
        var3 = var5[var1];
        var2 = undefined;
        var6 = var4.bind(var2)(var3);
        var3 = var6.useContactSyncAccount;
        var3 = var3.bind(var6)();
        var1 = var5[var1];
        var2 = var4.bind(var2)(var1);
        var1 = var2.isContactSyncEnabled;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2['useValue'] = var9;
    var8 = function onContactSyncSettingValueChange(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot2;
            var3 = var4.getLocalAccount;
            var1 = _closure1_slot4;
            var1 = var1.CONTACTS;
            var6 = var3.bind(var4)(var1);
            var3 = _closure1_slot3;
            var1 = var3.getCurrentUser;
            var3 = var1.bind(var3)();
            var1 = null;
            var4 = var1 == var3;
            var1 = undefined;
            var5 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var3.phone;
case 2:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 5;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.handleSyncContacts;
            var2 = arg1;
            var2 = var3.bind(var4)(var6, var5, var2);
            return var1;
        }
    };
    var2['onValueChange'] = var8;
    var2 = var4.bind(var7)(var2);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/defs/native/SyncContactsSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();