// app/modules/user_profile/native/UserProfileLegacyUsernameSwitch.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot2 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileLegacyUsernameSwitch.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileLegacyUsernameSwitch(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.legacyUsername;
            var2 = var1.pendingLegacyUsernameDisabled;
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 2;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var6 = var3.LegacyUsernameDisabled;
            var3 = var6.useSetting;
            var3 = var3.bind(var6)();
            var _closure2_slot0 = var3;
            var6 = var3;
            if(!(var4 !== var2)) { _fun0001_ip = 72; continue _fun0001 }
 69:
            var6 = var2;
 72:
            var3 = _closure1_slot2;
            var7 = _closure1_slot0;
            var11 = _closure1_slot1;
            var1 = 3;
            var1 = var11[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.UserProfileEditFormSwitch;
            var1 = {};
            var6 = !var6;
            var1['value'] = var6;
            var6 = 4;
            var8 = var11[var6];
            var8 = var7.bind(var4)(var8);
            var12 = var8.intl;
            var9 = var12.string;
            var8 = var11[var6];
            var8 = var7.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.3cWDuL;
            var8 = var9.bind(var12)(var8);
            var1['label'] = var8;
            var8 = var11[var6];
            var8 = var7.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.t;
            var7 = var6.aYhclZ;
            var6 = {};
            var6['username'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var1['subLabel'] = var6;
            var5 = function onValueChange(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var3 = !var1;
                    var2 = _closure2_slot0;
                    if(!(var3 !== var2)) { _fun0002_ip = 58; continue _fun0002 }
 17:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.setPendingLegacyUsernameDisabled;
                    var1 = !var1;
                    var1 = var2.bind(var3)(var1);
                    _fun0002_ip = 93; continue _fun0002;
 58:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.resetPendingLegacyUsernameDisabled;
                    var1 = var1.bind(var2)();
 93:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onValueChange'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();