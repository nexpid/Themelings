// app/stores/game_store/TestModeStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var9 = function resetError() {
        var1 = null;
        var _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot18 = var9;
    var4 = function reset() {
        var3 = null;
        var _closure1_slot10 = var3;
        var _closure1_slot11 = var3;
        var2 = global;
        var2 = var2.Set;
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var5 = var4;
        var2 = new var5[var2](var4);
        var2 = var2 instanceof Object ? var2 : var4;
        _closure1_slot15 = var2;
        var2 = _closure1_slot14;
        var2['applicationId'] = var3;
        var2 = _closure1_slot14;
        var2['originURL'] = var3;
        var2 = _closure1_slot18;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2 = global;
    var12 = var2.Object;
    var11 = var12.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = {'applicationId': null, 'originURL': null};
    var _closure1_slot13 = var8;
    var _closure1_slot14 = var8;
    var2 = var2.Set;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var16 = var8;
    var2 = new var16[var2](var15);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot15 = var2;
    var2 = false;
    var _closure1_slot16 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function TestModeStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot17;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
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
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var6 = this;
                var3 = {};
                var4 = null;
                if(!(var4 == var2)) { _fun0003_ip = 23; continue _fun0003 }
 16:
                var2 = _closure1_slot13;
 23:
                var9 = var3;
                var8 = var2;
                var2 = copyDataProperties(var9, var8);
                _closure1_slot14 = var3;
                var3 = var3.applicationId;
                _closure1_slot10 = var3;
                var3 = _closure1_slot14;
                var3 = var3.originURL;
                _closure1_slot11 = var3;
                var4 = var6.waitFor;
                var7 = _closure1_slot8;
                var3 = _closure1_slot7;
                var4 = var4.bind(var6)(var7, var3);
                var5 = var6.syncWith;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var3;
                var3 = function() {
                    var1 = true;
                    return var1;
                };
                var3 = var5.bind(var6)(var4, var3);
                var3 = _closure1_slot9;
                var2 = var3.whenInitialized;
                var1 = function() {
                    var1 = true;
                    _closure1_slot16 = var1;
                    var1 = undefined;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(12);
        var1[0] = var5;
        var5 = {};
        var7 = 'inTestModeForApplication';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot10;
            var1 = arg1;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'inTestModeForEmbeddedApplication';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = _closure1_slot10;
                var1 = arg1;
                var1 = var3 === var1;
                if(!var1) { _fun0004_ip = 27; continue _fun0004 }
 17:
                var3 = _closure1_slot11;
                var2 = null;
                var1 = var2 != var3;
 27:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'shouldDisplayTestMode';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = this;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.DeveloperMode;
                var1 = var2.getSetting;
                var1 = var1.bind(var2)();
                if(!var1) { _fun0005_ip = 61; continue _fun0005 }
 47:
                var3 = var4.inTestModeForApplication;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
 61:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isTestMode';
        var5['key'] = var7;
        var7 = function get() {
            var2 = _closure1_slot10;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isFetchingAuthorization';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot15;
            var2 = var1.size;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'testModeEmbeddedApplicationId';
        var5['key'] = var7;
        var7 = function get() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = _closure1_slot11;
                var1 = null;
                var3 = var1 != var3;
                if(!var3) { _fun0006_ip = 20; continue _fun0006 }
 16:
                var1 = _closure1_slot10;
 20:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'testModeApplicationId';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['get'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'testModeOriginURL';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['get'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'error';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['get'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'whenInitialized';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = this;
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = var3.addConditionalChangeListener;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure1_slot16;
                    var3 = undefined;
                    if(var1) { _fun0007_ip = 14; continue _fun0007 }
 12:
                    return var3;
 14:
                    var1 = global;
                    var2 = var1.setImmediate;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    var1 = false;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[11] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'TestModeStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = 10;
    var2 = var6[var2];
    var15 = var7.bind(var1)(var2);
    var2 = {};
    var11 = function handleDeveloperTestModeAuthorizationStart(arg1) {
        var1 = arg1;
        var4 = var1.applicationId;
        var3 = _closure1_slot15;
        var1 = var3.add;
        var1 = var1.bind(var3)(var4);
        var1 = null;
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var2['DEVELOPER_TEST_MODE_AUTHORIZATION_START'] = var11;
    var11 = function handleDeveloperTestModeAuthorizationSuccess(arg1) {
        var1 = arg1;
        var4 = var1.applicationId;
        var2 = var1.originURL;
        _closure1_slot10 = var4;
        _closure1_slot11 = var2;
        var5 = _closure1_slot15;
        var3 = var5.delete;
        var3 = var3.bind(var5)(var4);
        var3 = null;
        _closure1_slot12 = var3;
        var3 = _closure1_slot14;
        var3['applicationId'] = var4;
        var1 = _closure1_slot14;
        var1['originURL'] = var2;
        var1 = undefined;
        return var1;
    };
    var2['DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS'] = var11;
    var11 = function handleDeveloperTestModeAuthorizationFail(arg1) {
        var1 = arg1;
        var5 = var1.applicationId;
        var2 = var1.error;
        var4 = _closure1_slot15;
        var3 = var4.delete;
        var3 = var3.bind(var4)(var5);
        _closure1_slot12 = var2;
        var1 = undefined;
        return var1;
    };
    var2['DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL'] = var11;
    var10 = function handleOverlayInitialize(arg1) {
        var1 = arg1;
        var2 = var1.testModeApplicationId;
        _closure1_slot10 = var2;
        var1 = undefined;
        return var1;
    };
    var2['OVERLAY_INITIALIZE'] = var10;
    var2['DEVELOPER_TEST_MODE_RESET_ERROR'] = var9;
    var2['LOGOUT'] = var4;
    var2['DEVELOPER_TEST_MODE_RESET'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var16 = var4;
    var14 = var2;
    var2 = new var16[var8](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/game_store/TestModeStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();