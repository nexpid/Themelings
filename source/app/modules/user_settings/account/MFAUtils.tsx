// app/modules/user_settings/account/MFAUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.GuildFeatures;
    var _closure1_slot5 = var5;
    var5 = var4.Permissions;
    var _closure1_slot6 = var5;
    var4 = var4.UserFlags;
    var _closure1_slot7 = var4;
    var4 = {};
    var5 = 'available';
    var4['AVAILABLE'] = var5;
    var5 = 'unavailable_no_crypto';
    var4['UNAVAILABLE_NO_CRYPTO'] = var5;
    var5 = 'unavailable_unverified';
    var4['UNAVAILABLE_UNVERIFIED'] = var5;
    var _closure1_slot8 = var4;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/account/MFAUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getSMSBackupDisabledMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var3 = arguments[1];
            var8 = undefined;
            if(!(var3 === var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = false;
case 2:
            var2 = null;
            var4 = var2 == var5;
            var1 = null;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var5.hasAnyStaffLevel;
            var6 = var4.bind(var5)();
            if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var5.hasFlag;
            var6 = _closure1_slot7;
            var6 = var6.PARTNER;
            var6 = var7.bind(var5)(var6);
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var5.email;
            var5 = var2 == var5;
            var2 = null;
            if(!var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = _closure1_slot0;
            var10 = _closure1_slot1;
            var5 = 4;
            var7 = var10[var5];
            var7 = var6.bind(var8)(var7);
            var9 = var7.intl;
            var7 = var9.string;
            var5 = var10[var5];
            var5 = var6.bind(var8)(var5);
            var6 = var5.t;
            if(var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5 = var6.LfCBZG;
            var5 = var7.bind(var9)(var5);
            _fun0001_ip = 14; continue _fun0001;
case 12:
            var6 = var6["9VWpT9"];
            var5 = var7.bind(var9)(var6);
case 14:
            var2 = var5;
case 10:
            _fun0001_ip = 15; continue _fun0001;
case 8:
            var6 = _closure1_slot0;
            var10 = _closure1_slot1;
            var5 = 4;
            var7 = var10[var5];
            var7 = var6.bind(var8)(var7);
            var9 = var7.intl;
            var7 = var9.string;
            var5 = var10[var5];
            var5 = var6.bind(var8)(var5);
            var6 = var5.t;
            if(var3) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var5 = var6.Sq6Q1u;
            var5 = var7.bind(var9)(var5);
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var6 = var6["9UucjT"];
            var5 = var7.bind(var9)(var6);
case 18:
            var2 = var5;
case 15:
            _fun0001_ip = 19; continue _fun0001;
case 6:
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var4 = 4;
            var5 = var9[var4];
            var5 = var7.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var7.bind(var8)(var4);
            var4 = var4.t;
            if(var3) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var3 = var4["3iKih7"];
            var3 = var5.bind(var6)(var3);
            _fun0001_ip = 22; continue _fun0001;
case 20:
            var4 = var4.YJGvuD;
            var3 = var5.bind(var6)(var4);
case 22:
            var2 = var3;
case 19:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['getSMSBackupDisabledMessage'] = var5;
    var5 = function useIsMFAEnabled() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                var1 = var2.mfaEnabled;
case 23:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useIsMFAEnabled'] = var5;
    var3['MFAAvailability'] = var4;
    var4 = function useMFAAvailability() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 5;
            var1 = var6[var1];
            var2 = undefined;
            var8 = var5.bind(var2)(var1);
            var7 = var8.useStateFromStores;
            var1 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure1_slot4;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var1 = var2.verified;
case 25:
                    return var1;
                }
            };
            var4 = var7.bind(var8)(var4, var1);
            var1 = 6;
            var1 = var6[var1];
            var1 = var5.bind(var2)(var1);
            var1 = var1.hasCrypto;
            if(var1) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var1 = _closure1_slot8;
            var1 = var1.UNAVAILABLE_NO_CRYPTO;
            _fun0003_ip = 29; continue _fun0003;
case 27:
            var2 = false;
            if(!(var2 !== var4)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var2 = _closure1_slot8;
            var2 = var2.AVAILABLE;
            _fun0003_ip = 32; continue _fun0003;
case 30:
            var3 = _closure1_slot8;
            var2 = var3.UNAVAILABLE_UNVERIFIED;
case 32:
            var1 = var2;
case 29:
            return var1;
        }
    };
    var3['useMFAAvailability'] = var4;
    var2 = function use2FARemoveDisableReason() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arguments[0];
            var4 = undefined;
            if(!(var2 === var4)) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var2 = false;
case 33:
            var _closure2_slot0 = var2;
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 5;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.useStateFromStores;
            var6 = _closure1_slot2;
            var2 = new Array(3);
            var2[0] = var6;
            var6 = _closure1_slot3;
            var2[1] = var6;
            var5 = _closure1_slot4;
            var2[2] = var5;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure1_slot4;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    if(!(var1 != var4)) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                    var2 = var4.hasAnyStaffLevel;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0006_ip = 8; continue _fun0006 }
case 35:
                    var4 = _closure1_slot2;
                    var2 = var4.getGuildsArray;
                    var5 = var2.bind(var4)();
                    var4 = var5.some;
                    var2 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var5 = arg1;
                            var4 = var5.features;
                            var3 = var4.has;
                            var1 = _closure1_slot5;
                            var1 = var1.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
                            var1 = var3.bind(var4)(var1);
                            if(!var1) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                            var4 = _closure1_slot3;
                            var3 = var4.can;
                            var2 = _closure1_slot6;
                            var2 = var2.ADMINISTRATOR;
                            var1 = var3.bind(var4)(var2, var5);
case 37:
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2);
                    var1 = null;
                    if(!var2) { _fun0006_ip = 10; continue _fun0006 }
case 39:
                    var2 = _closure2_slot0;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var4 = 4;
                    var5 = var9[var4];
                    var7 = undefined;
                    var5 = var8.bind(var7)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var9[var4];
                    var4 = var8.bind(var7)(var4);
                    var4 = var4.t;
                    if(var2) { _fun0006_ip = 12; continue _fun0006 }
case 13:
                    var2 = var4.HC8uSZ;
                    var2 = var5.bind(var6)(var2);
                    _fun0006_ip = 14; continue _fun0006;
case 12:
                    var4 = var4.OYTCUh;
                    var2 = var5.bind(var6)(var4);
case 14:
                    var1 = var2;
case 10:
                    _fun0006_ip = 40; continue _fun0006;
case 8:
                    var2 = _closure2_slot0;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var3 = 4;
                    var4 = var8[var3];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    if(var2) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                    var2 = var3["3iKih7"];
                    var2 = var4.bind(var5)(var2);
                    _fun0006_ip = 43; continue _fun0006;
case 41:
                    var3 = var3.hxf9fX;
                    var2 = var4.bind(var5)(var3);
case 43:
                    var1 = var2;
case 40:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['use2FARemoveDisableReason'] = var2;
    return var1;
})();