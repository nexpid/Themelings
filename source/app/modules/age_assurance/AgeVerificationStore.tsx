// app/modules/age_assurance/AgeVerificationStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function getStorageKey() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot7;
            var1 = var2.getCurrentUser;
            var2 = var1.bind(var2)();
            var1 = null;
            var3 = var1 == var2;
            var4 = undefined;
            if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var2.id;
case 6:
            var2 = var1 == var4;
            var1 = null;
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'AgeVerificationStore_';
            var1 = var3.bind(var2)(var4);
case 8:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function resetToDefaults() {
        var1 = 'unchecked';
        _closure1_slot11 = var1;
        var1 = null;
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function persist() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = _closure1_slot14;
            var1 = undefined;
            var5 = var2.bind(var1)();
            var2 = null;
            if(!(var2 != var5)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 6;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var4 = var2.Storage;
            var3 = var4.set;
            var2 = {};
            var7 = _closure1_slot11;
            var2['reactiveCheckStatus'] = var7;
            var6 = _closure1_slot12;
            var2['reactiveCheckMissAt'] = var6;
            var2 = var3.bind(var4)(var5, var2);
case 10:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function loadFromStorage() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot14;
            var1 = undefined;
            var5 = var3.bind(var1)();
            var6 = null;
            if(!(var6 == var5)) { _fun0004_ip = 6; continue _fun0004 }
case 11:
            var3 = _closure1_slot15;
            var3 = var3.bind(var1)();
            _fun0004_ip = 12; continue _fun0004;
case 6:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 6;
            var3 = var7[var3];
            var3 = var4.bind(var1)(var3);
            var4 = var3.Storage;
            var3 = var4.get;
            var3 = var3.bind(var4)(var5);
            if(!(var6 != var3)) { _fun0004_ip = 13; continue _fun0004 }
case 5:
            var5 = 'object';
            var4 = typeof var3;
            if(!(var5 !== var4)) { _fun0004_ip = 14; continue _fun0004 }
case 13:
            var4 = _closure1_slot15;
            var4 = var4.bind(var1)();
            _fun0004_ip = 12; continue _fun0004;
case 14:
            var5 = var3.reactiveCheckStatus;
            var7 = var6 != var5;
            var4 = 'unchecked';
            if(!var7) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var4 = var5;
case 15:
            var5 = var3.reactiveCheckMissAt;
            var7 = var6 != var5;
            var3 = null;
            if(!var7) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var3 = var5;
case 17:
            var5 = 'miss';
            var5 = var5 === var4;
            if(!var5) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var5 = var6 != var3;
case 19:
            if(!var5) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var6 = global;
            var7 = var6.Date;
            var6 = var7.now;
            var6 = var6.bind(var7)();
            var7 = var6 - var3;
            var6 = _closure1_slot8;
            var5 = var7 >= var6;
case 21:
            if(var5) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            _closure1_slot11 = var4;
            _closure1_slot12 = var3;
            _fun0004_ip = 12; continue _fun0004;
case 23:
            var2 = _closure1_slot15;
            var2 = var2.bind(var1)();
case 12:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function isMissWithinTTL() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot11;
            var1 = 'miss';
            var1 = var1 === var3;
            if(!var1) { _fun0005_ip = 25; continue _fun0005 }
case 26:
            var4 = _closure1_slot12;
            var3 = null;
            var1 = var3 != var4;
case 25:
            if(!var1) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var3 = global;
            var4 = var3.Date;
            var3 = var4.now;
            var4 = var3.bind(var4)();
            var3 = _closure1_slot12;
            var3 = var4 - var3;
            var2 = _closure1_slot8;
            var1 = var3 < var2;
case 27:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 86400000;
    var _closure1_slot8 = var2;
    var2 = null;
    var _closure1_slot9 = var2;
    var8 = false;
    var _closure1_slot10 = var8;
    var8 = 'unchecked';
    var _closure1_slot11 = var8;
    var _closure1_slot12 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function AgeVerificationStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot13;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 31; continue _fun0006;
case 29:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 31:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot7;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'loading';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'methods';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getReactiveCheckStatus';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getReactiveCheckMiss';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot18;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getReactiveCheckPassed';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot11;
            var1 = 'passed';
            var1 = var1 === var2;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'shouldCallReactiveCheck';
        var5['key'] = var7;
        var6 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = _closure1_slot11;
                var1 = 'passed';
                var1 = var1 !== var2;
                if(!var1) { _fun0007_ip = 30; continue _fun0007 }
case 32:
                var4 = _closure1_slot11;
                var2 = 'suppress';
                var2 = var2 !== var4;
                if(!var2) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                var4 = _closure1_slot18;
                var3 = undefined;
                var3 = var4.bind(var3)();
                var2 = !var3;
case 33:
                var1 = var2;
case 30:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'AgeVerificationStore';
    var8['displayName'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleAgeVerificationMethodsLoadStart() {
        var1 = true;
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var2['AGE_VERIFICATION_METHODS_LOAD_START'] = var9;
    var9 = function handleAgeVerificationMethodsLoadSuccess(arg1) {
        var1 = arg1;
        var1 = var1.methods;
        _closure1_slot9 = var1;
        var1 = false;
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var2['AGE_VERIFICATION_METHODS_LOAD_SUCCESS'] = var9;
    var9 = function handleAgeVerificationMethodsLoadFailure() {
        var1 = false;
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var2['AGE_VERIFICATION_METHODS_LOAD_FAILURE'] = var9;
    var9 = function handleConnectionOpen() {
        var2 = _closure1_slot17;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleReactiveCheckResultSet(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var4 = var1.status;
            _closure1_slot11 = var4;
            var3 = 'miss';
            var2 = null;
            if(!(var3 === var4)) { _fun0008_ip = 35; continue _fun0008 }
case 36:
            var3 = global;
            var4 = var3.Date;
            var3 = var4.now;
            var2 = var3.bind(var4)();
case 35:
            _closure1_slot12 = var2;
            var2 = _closure1_slot16;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var2['AGE_VERIFICATION_CHECK_RESULT_SET'] = var9;
    var4 = function handleAgeVerificationReset() {
        var2 = 'suppress';
        _closure1_slot11 = var2;
        var2 = null;
        _closure1_slot12 = var2;
        var2 = _closure1_slot16;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['AGE_VERIFICATION_RESET'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_assurance/AgeVerificationStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();