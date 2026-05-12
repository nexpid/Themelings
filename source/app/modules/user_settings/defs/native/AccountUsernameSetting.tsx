// app/modules/user_settings/defs/native/AccountUsernameSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
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
    var7 = var6[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var7);
    var2 = 1;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.MobileSetting;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var10 = var2.UserSettingsSections;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot4 = var2;
    var2 = 9;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createRoute;
    var2 = {};
    var11 = function useTitle() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.IEpCBQ;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['useTitle'] = var11;
    var8 = var8.ACCOUNT;
    var2['parent'] = var8;
    var8 = function useAccountUsernameSettingTrailing() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.getUserTag;
            var2 = _closure1_slot3;
            var1 = var2.getCurrentUser;
            var2 = var1.bind(var2)();
            var1 = {};
            var5 = 'never';
            var1['decoration'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['useTrailing'] = var8;
    var8 = function useAccountUsernameSettingDescription() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 7;
            var1 = var4[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.useGuildAutomodProfileQuarantineErrors;
            var3 = var1.bind(var3)();
            var1 = null;
            var4 = var1 == var3;
            var6 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var3.nick;
            var3 = var1 == var4;
            var6 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = 0;
            var6 = var4[var3];
case 2:
            var3 = var1 == var6;
            var1 = null;
            if(var3) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var4 = _closure1_slot4;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 8;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {'variant': 'text-xs/medium', 'color': 'text-feedback-warning'};
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 5:
            return var1;
        }
    };
    var2['useDescription'] = var8;
    var8 = {};
    var10 = var10.ACCOUNT_CHANGE_USERNAME;
    var8['route'] = var10;
    var9 = function getComponent() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.default;
        return var1;
    };
    var8['getComponent'] = var9;
    var2['screen'] = var8;
    var2 = var4.bind(var7)(var2);
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/defs/native/AccountUsernameSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();