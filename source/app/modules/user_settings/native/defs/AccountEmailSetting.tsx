// app/modules/user_settings/native/defs/AccountEmailSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = global;
    var10 = var1.Object;
    var7 = var10.defineProperty;
    var2 = {};
    var8 = true;
    var2['value'] = var8;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var10 = var2.MobileSetting;
    var2 = 4;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createPressable;
    var2 = {};
    var11 = function useTitle() {
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
        var1 = var1.w/qqKK;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['useTitle'] = var11;
    var10 = var10.ACCOUNT;
    var2['parent'] = var10;
    var10 = function useAccountEmailSettingTrailing() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = var2.email;
case 2:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['useTrailing'] = var10;
    var9 = function onAccountEmailSettingPress() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.open;
        var2 = true;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['onPress'] = var9;
    var2['withArrow'] = var8;
    var2 = var4.bind(var7)(var2);
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/AccountEmailSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();