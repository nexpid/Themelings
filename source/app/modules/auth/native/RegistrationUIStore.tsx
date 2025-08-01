// app/modules/auth/native/RegistrationUIStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var8 = var6.bind(var1)(var4);
    var5 = var8.create;
    var4 = function() {
        var1 = {};
        var2 = {};
        var1['errors'] = var2;
        var2 = {};
        var1['registrationOptions'] = var2;
        var2 = false;
        var1['submitting'] = var2;
        var2 = undefined;
        var1['registrationVariant'] = var2;
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/auth/native/RegistrationUIStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useRegistrationUIStore'] = var4;
    var4 = function setRegistrationErrors(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 1;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot3;
            var2 = var3.setState;
            var1 = {};
            var4 = _closure2_slot0;
            var1['errors'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setRegistrationErrors'] = var4;
    var4 = function clearRegistrationErrorMessage() {
        var3 = {};
        var5 = _closure1_slot3;
        var4 = var5.getState;
        var4 = var4.bind(var5)();
        var6 = var4.errors;
        var7 = var3;
        var4 = copyDataProperties(var7, var6);
        var _closure2_slot0 = var3;
        var3 = delete var3.message;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 1;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot3;
            var2 = var3.setState;
            var1 = {};
            var4 = _closure2_slot0;
            var1['errors'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearRegistrationErrorMessage'] = var4;
    var4 = function updateRegistrationOptions(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot3;
        var3 = var4.getState;
        var3 = var3.bind(var4)();
        var3 = var3.registrationOptions;
        var _closure2_slot1 = var3;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 1;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot3;
            var2 = var3.setState;
            var1 = {};
            var4 = {};
            var7 = _closure2_slot1;
            var8 = var4;
            var6 = copyDataProperties(var8, var7);
            var7 = _closure2_slot0;
            var8 = var4;
            var5 = copyDataProperties(var8, var7);
            var1['registrationOptions'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateRegistrationOptions'] = var4;
    var4 = function resetRegistration() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.batchUpdates;
        var2 = function() {
            var4 = _closure1_slot3;
            var3 = var4.setState;
            var2 = {};
            var1 = {};
            var2['errors'] = var1;
            var1 = {};
            var2['registrationOptions'] = var1;
            var1 = false;
            var2['submitting'] = var1;
            var1 = undefined;
            var2['registrationVariant'] = var1;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetRegistration'] = var4;
    var4 = function setSubmitting(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 1;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot3;
            var2 = var3.setState;
            var1 = {};
            var4 = {};
            var1['errors'] = var4;
            var4 = _closure2_slot0;
            var1['submitting'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setSubmitting'] = var4;
    var4 = function getRegistrationVariant() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot3;
            var1 = var3.getState;
            var1 = var1.bind(var3)();
            var1 = var1.registrationVariant;
            var3 = null;
            if(!(var3 != var1)) { _fun0001_ip = 31; continue _fun0001 }
 29:
            return var1;
 31:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.getCurrentConfig;
            var3 = {};
            var1 = 'Auth';
            var3['location'] = var1;
            var1 = {};
            var6 = true;
            var1['autoTrackExposure'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            var1 = var1.variant;
            var4 = _closure1_slot3;
            var3 = var4.setState;
            var2 = {};
            var2['registrationVariant'] = var1;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['getRegistrationVariant'] = var4;
    var2 = function doesRegistrationHaveIdentityType() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = _closure1_slot3;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            var2 = var1.registrationOptions;
            var1 = var2.email;
            var3 = null;
            var1 = var3 != var1;
            if(var1) { _fun0002_ip = 48; continue _fun0002 }
 38:
            var2 = var2.phone;
            var1 = var3 != var2;
 48:
            return var1;
        }
    };
    var3['doesRegistrationHaveIdentityType'] = var2;
    return var1;
})();