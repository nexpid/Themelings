// app/modules/contact_sync/native/ContactSyncModalStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = function initialValues() {
        var1 = {'mode': null, 'permissionState': null, 'error': '', 'phone': null, 'phoneToken': null, 'name': null, 'isNameFromContactBook': false, 'allowPhone': true, 'allowEmail': true, 'bulkAddToken': null};
        var3 = _closure1_slot6;
        var3 = var3.NORMAL;
        var1['mode'] = var3;
        var2 = _closure1_slot4;
        var2 = var2.NOT_DETERMINED;
        var1['permissionState'] = var2;
        var2 = new Array(0);
        var1['suggestions'] = var2;
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var4);
    var10 = 0;
    var4 = var8[var10];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var9 = 1;
    var4 = var8[var9];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var6 = 2;
    var4 = var8[var6];
    var4 = var7.bind(var1)(var4);
    var4 = var4.ContactPermissions;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.PlatformTypes;
    var _closure1_slot5 = var4;
    var5 = {};
    var5['NORMAL'] = var10;
    var4 = 'NORMAL';
    var5[var10] = var4;
    var5['ONBOARDING'] = var9;
    var4 = 'ONBOARDING';
    var5[var9] = var4;
    var5['ONBOARDING_INVITE'] = var6;
    var4 = 'ONBOARDING_INVITE';
    var5[var6] = var4;
    var _closure1_slot6 = var5;
    var4 = 4;
    var4 = var8[var4];
    var9 = var7.bind(var1)(var4);
    var6 = var9.create;
    var4 = function() {
        var2 = _closure1_slot8;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var4 = var6.bind(var9)(var4);
    var _closure1_slot7 = var4;
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/contact_sync/native/ContactSyncModalStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['ContactSyncModes'] = var5;
    var3['useContactSyncModalStore'] = var4;
    var4 = function initialize(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var5 = _closure1_slot2;
            var4 = var5.getLocalAccount;
            var1 = _closure1_slot5;
            var1 = var1.CONTACTS;
            var6 = var4.bind(var5)(var1);
            var4 = null;
            var7 = var4 == var6;
            var1 = undefined;
            var5 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var6.name;
case 2:
            var _closure2_slot1 = var5;
            var6 = _closure1_slot3;
            var5 = var6.getCurrentUser;
            var5 = var5.bind(var6)();
            var6 = var4 == var5;
            var4 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var5.phone;
case 4:
            var _closure2_slot2 = var4;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 5;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.setState;
                var1 = function() {
                    var1 = {};
                    var3 = _closure1_slot8;
                    var2 = undefined;
                    var5 = var3.bind(var2)();
                    var6 = var1;
                    var2 = copyDataProperties(var6, var5);
                    var4 = _closure2_slot0;
                    var3 = 'mode';
                    var1[var3] = var4;
                    var4 = _closure2_slot2;
                    var3 = 'phone';
                    var1[var3] = var4;
                    var3 = _closure2_slot1;
                    var2 = 'name';
                    var1[var2] = var3;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['initialize'] = var4;
    var4 = function setAllowSync(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 5;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot7;
            var2 = var3.setState;
            var1 = function(arg1) {
                var1 = {};
                var4 = arg1;
                var5 = var1;
                var2 = copyDataProperties(var5, var4);
                var3 = _closure2_slot0;
                var2 = 'allowPhone';
                var1[var2] = var3;
                var2 = 'allowEmail';
                var1[var2] = var3;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setAllowSync'] = var4;
    var4 = function setAllowPhone(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 5;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot7;
            var2 = var3.setState;
            var1 = function(arg1) {
                var1 = {};
                var4 = arg1;
                var5 = var1;
                var2 = copyDataProperties(var5, var4);
                var3 = _closure2_slot0;
                var2 = 'allowPhone';
                var1[var2] = var3;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setAllowPhone'] = var4;
    var4 = function setAllowEmail(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 5;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot7;
            var2 = var3.setState;
            var1 = function(arg1) {
                var1 = {};
                var4 = arg1;
                var5 = var1;
                var2 = copyDataProperties(var5, var4);
                var3 = _closure2_slot0;
                var2 = 'allowEmail';
                var1[var2] = var3;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setAllowEmail'] = var4;
    var4 = function setSuggestions(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 5;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot7;
            var2 = var3.setState;
            var1 = function(arg1) {
                var1 = {};
                var5 = arg1;
                var6 = var1;
                var2 = copyDataProperties(var6, var5);
                var4 = _closure2_slot0;
                var3 = 'suggestions';
                var1[var3] = var4;
                var3 = _closure2_slot1;
                var2 = 'bulkAddToken';
                var1[var2] = var3;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setSuggestions'] = var4;
    var4 = function setPhone(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 5;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot7;
            var2 = var3.setState;
            var1 = function(arg1) {
                var1 = {};
                var4 = arg1;
                var5 = var1;
                var2 = copyDataProperties(var5, var4);
                var3 = _closure2_slot0;
                var2 = 'phone';
                var1[var2] = var3;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPhone'] = var4;
    var4 = function setPhoneToken(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 5;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot7;
            var2 = var3.setState;
            var1 = function(arg1) {
                var1 = {};
                var4 = arg1;
                var5 = var1;
                var2 = copyDataProperties(var5, var4);
                var3 = _closure2_slot0;
                var2 = 'phoneToken';
                var1[var2] = var3;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPhoneToken'] = var4;
    var4 = function setName(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arguments[1];
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = false;
case 6:
            var _closure2_slot1 = var3;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 5;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.setState;
                var1 = function(arg1) {
                    var1 = {};
                    var5 = arg1;
                    var6 = var1;
                    var2 = copyDataProperties(var6, var5);
                    var4 = _closure2_slot0;
                    var3 = 'name';
                    var1[var3] = var4;
                    var3 = _closure2_slot1;
                    var2 = 'isNameFromContactBook';
                    var1[var2] = var3;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['setName'] = var4;
    var4 = function setPermissionState(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 5;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot7;
            var2 = var3.setState;
            var1 = function(arg1) {
                var1 = {};
                var4 = arg1;
                var5 = var1;
                var2 = copyDataProperties(var5, var4);
                var3 = _closure2_slot0;
                var2 = 'permissionState';
                var1[var2] = var3;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPermissionState'] = var4;
    var4 = function setError(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 5;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot7;
            var2 = var3.setState;
            var1 = function(arg1) {
                var1 = {};
                var4 = arg1;
                var5 = var1;
                var2 = copyDataProperties(var5, var4);
                var3 = _closure2_slot0;
                var2 = 'error';
                var1[var2] = var3;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setError'] = var4;
    var4 = function useIsOnboarding() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot7;
            var1 = undefined;
            var1 = var3.bind(var1)();
            var3 = var1.mode;
            var1 = _closure1_slot6;
            var1 = var1.ONBOARDING;
            var1 = var3 === var1;
            if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var2 = _closure1_slot6;
            var2 = var2.ONBOARDING_INVITE;
            var1 = var3 === var2;
case 8:
            return var1;
        }
    };
    var3['useIsOnboarding'] = var4;
    var2 = function getIsOnboarding() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot7;
            var1 = var3.getState;
            var1 = var1.bind(var3)();
            var3 = var1.mode;
            var1 = _closure1_slot6;
            var1 = var1.ONBOARDING;
            var1 = var3 === var1;
            if(var1) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var2 = _closure1_slot6;
            var2 = var2.ONBOARDING_INVITE;
            var1 = var3 === var2;
case 10:
            return var1;
        }
    };
    var3['getIsOnboarding'] = var2;
    return var1;
})();