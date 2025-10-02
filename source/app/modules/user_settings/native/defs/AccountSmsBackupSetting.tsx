// app/modules/user_settings/native/defs/AccountSmsBackupSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var4 = function useAccountSMSBackupSettingDescription() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var5 = undefined;
            var6 = var3.bind(var5)(var1);
            var4 = var6.useStateFromStores;
            var1 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var4.bind(var6)(var3, var1);
            var1 = null;
            var3 = var1 == var4;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.getSMSBackupDisabledMessage;
            var1 = var2.bind(var3)(var4);
case 2:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.MobileSetting;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.UserFlags;
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.PHONE_VERIFICATION_MODAL_KEY;
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var9 = var2.RendererType;
    var2 = 15;
    var2 = var6[var2];
    var12 = var5.bind(var1)(var2);
    var11 = var12.debounce;
    var10 = function toggleSMS(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.mfaSMSEnabled;
            var1 = var1.user;
            if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var2 = null;
            if(!(var2 != var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var1.phone;
            if(!(var2 == var1)) { _fun0002_ip = 8; continue _fun0002 }
case 6:
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 11;
            var2 = var9[var2];
            var8 = undefined;
            var5 = var3.bind(var8)(var2);
            var4 = var5.pushLazy;
            var7 = _closure1_slot0;
            var2 = 13;
            var2 = var9[var2];
            var6 = var7.bind(var8)(var2);
            var2 = 12;
            var3 = var9[var2];
            var2 = var9.paths;
            var3 = var6.bind(var8)(var3, var2);
            var2 = {};
            var6 = 14;
            var6 = var9[var6];
            var6 = var7.bind(var8)(var6);
            var6 = var6.ChangePhoneReason;
            var6 = var6.USER_SETTINGS_UPDATE;
            var2['reason'] = var6;
            var1 = _closure1_slot5;
            var1 = var4.bind(var5)(var3, var2, var1);
            _fun0002_ip = 9; continue _fun0002;
case 8:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 7;
            var4 = var5[var2];
            var3 = undefined;
            var4 = var7.bind(var3)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var2 = var5[var2];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2.DZQe29;
            var4 = var4.bind(var6)(var2);
            var2 = var4.toUpperCase;
            var4 = var2.bind(var4)();
            var2 = _closure1_slot1;
            var1 = 10;
            var1 = var5[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.confirm;
            var1 = {};
            var1['title'] = var4;
            var3 = var2.bind(var3)(var1);
            var2 = var3.then;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.enableSMS;
                    var1 = var1.bind(var2)();
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            _fun0002_ip = 9; continue _fun0002;
case 4:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 7;
            var1 = var5[var2];
            var3 = undefined;
            var1 = var8.bind(var3)(var1);
            var7 = var1.intl;
            var6 = var7.string;
            var1 = var5[var2];
            var1 = var8.bind(var3)(var1);
            var1 = var1.t;
            var1 = var1.CIGa+/;
            var6 = var6.bind(var7)(var1);
            var1 = var6.toUpperCase;
            var1 = var1.bind(var6)();
            var6 = var5[var2];
            var6 = var8.bind(var3)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var2 = var5[var2];
            var2 = var8.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2.wlfmlZ;
            var6 = var6.bind(var7)(var2);
            var2 = var6.toUpperCase;
            var6 = var2.bind(var6)();
            var2 = {};
            var4 = _closure1_slot1;
            var7 = 8;
            var7 = var5[var7];
            var7 = var4.bind(var3)(var7);
            var7 = var7.disableSMS;
            var2['onSubmit'] = var7;
            var2['title'] = var6;
            var2['placeholder'] = var1;
            var1 = true;
            var2['closeOnSuccess'] = var1;
            var1 = 9;
            var1 = var5[var1];
            var1 = var4.bind(var3)(var1);
            var1 = var1.bind(var3)(var2);
case 9:
            var1 = undefined;
            return var1;
        }
    };
    var2 = 200;
    var2 = var11.bind(var12)(var10, var2);
    var _closure1_slot6 = var2;
    var2 = {};
    var9 = var9.TOGGLE;
    var2['type'] = var9;
    var9 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 7;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.uHAJ5u;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var9;
    var8 = var8.ACCOUNT;
    var2['parent'] = var8;
    var8 = function useAccountSMSBackupSettingIsDisabled() {
        var2 = _closure1_slot7;
        var1 = undefined;
        var2 = var2.bind(var1)();
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var2['useIsDisabled'] = var8;
    var8 = function useAccountSMSBackupSettingToggleValue() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 5;
            var1 = var2[var1];
            var2 = undefined;
            var6 = var4.bind(var2)(var1);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var5.bind(var6)(var4, var1);
            var1 = null;
            var4 = var1 == var5;
            if(var4) { _fun0004_ip = 12; continue _fun0004 }
case 3:
            var4 = var5.hasFlag;
            var3 = _closure1_slot4;
            var3 = var3.MFA_SMS;
            var2 = var4.bind(var5)(var3);
case 12:
            var1 = var1 != var2;
            if(!var1) { _fun0004_ip = 2; continue _fun0004 }
case 13:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var2['useValue'] = var8;
    var7 = function onAccountSMSBackupSettingTogglePress(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot3;
            var1 = var3.getCurrentUser;
            var1 = var1.bind(var3)();
            var3 = null;
            if(!(var3 != var1)) { _fun0005_ip = 14; continue _fun0005 }
case 15:
            var3 = _closure1_slot6;
            var2 = {};
            var4 = arg1;
            var4 = !var4;
            var2['mfaSMSEnabled'] = var4;
            var2['user'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
case 14:
            var1 = undefined;
            return var1;
        }
    };
    var2['onValueChange'] = var7;
    var2['useDescription'] = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useIsTOTPEnabled;
    var2['usePredicate'] = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/AccountSmsBackupSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();