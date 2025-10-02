// app/stores/DeveloperExperimentStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var7 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var6;
        var1 = function _isNativeReflectConstruct() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                _fun0002_ip = 4; continue _fun0002;
case 5: // catch_target0
                CatchBlockStart(arg_register=1);
case 4:
                var2 = function _isNativeReflectConstruct() {
                    var1 = _closure2_slot0;
                    var1 = !var1;
                    var1 = !var1;
                    return var1;
                };
                _closure1_slot11 = var2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var _closure1_slot11 = var1;
        var4 = function init() {
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var2);
            var4 = var5.isStaffEnv;
            var6 = _closure1_slot8;
            var2 = var6.getCurrentUser;
            var2 = var2.bind(var6)();
            var2 = var4.bind(var5)(var2);
            _closure1_slot10 = var2;
            return var1;
        };
        var _closure1_slot12 = var4;
        var10 = global;
        var11 = var10.Object;
        var9 = var11.defineProperty;
        var8 = {};
        var1 = true;
        var8['value'] = var1;
        var1 = '__esModule';
        var1 = var9.bind(var11)(var3, var1, var8);
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
        var8 = var5.bind(var1)(var8);
        var8 = var8.ExperimentBuckets;
        var _closure1_slot9 = var8;
        var8 = 8;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var9 = var8.Environments;
        var11 = var9.DEVELOPMENT;
        var8 = 'production';
        var8 = var8 === var11;
        if(var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
        var10 = var10.window;
        var10 = var10.GLOBAL_ENV;
        var10 = var10.RELEASE_CHANNEL;
        var9 = var9.STAGING;
        var8 = var10 === var9;
case 6:
        var _closure1_slot10 = var8;
        var8 = 10;
        var8 = var6[var8];
        var8 = var7.bind(var1)(var8);
        var8 = var8.Store;
        var2 = function(arg1) {
            var4 = function DeveloperExperimentStore(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = this;
                    var12 = 0;
                    var1 = copyRestArgs(var12);
                    var7 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var1;
                    var10 = 0;
                    var1 = arraySpread(var12, var11, var10);
                    var1 = _closure1_slot5;
                    var8 = var1.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var1 = _closure1_slot11;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var1 = var8.apply;
                    var1 = var1.bind(var8)(var4, var9);
                    _fun0003_ip = 10; continue _fun0003;
case 8:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var1 = var6.bind(var7)(var8, var9, var5);
case 10:
                    var1 = var2.bind(var3)(var4, var1);
                    var2 = false;
                    var1['isDeveloper'] = var2;
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
                var7 = this;
                var _closure3_slot0 = var7;
                var5 = var7.waitFor;
                var4 = _closure1_slot8;
                var3 = _closure1_slot7;
                var3 = var5.bind(var7)(var4, var3);
                var3 = global;
                var6 = var3.Object;
                var5 = var6.defineProperties;
                var4 = {};
                var8 = {};
                var9 = false;
                var8['configurable'] = var9;
                var9 = function get() {
                    var1 = _closure1_slot10;
                    return var1;
                };
                var8['get'] = var9;
                var9 = function set() {
                    var1 = undefined;
                    return var1;
                };
                var8['set'] = var9;
                var4['isDeveloper'] = var8;
                var4 = var5.bind(var6)(var7, var4);
                var4 = _closure1_slot12;
                var1 = undefined;
                var4 = var4.bind(var1)();
                var3 = var3.setTimeout;
                var2 = function() {
                    var1 = global;
                    var3 = var1.Object;
                    var2 = var3.freeze;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5['value'] = var1;
            var1 = new Array(2);
            var1[0] = var5;
            var5 = {};
            var7 = 'getExperimentDescriptor';
            var5['key'] = var7;
            var6 = function value() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure1_slot10;
                    var1 = null;
                    if(!var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var2 = {'type': 'developer', 'name': 'discord_dev_testing', 'revision': 1, 'override': true};
                    var3 = _closure1_slot9;
                    var3 = var3.TREATMENT_1;
                    var2['bucket'] = var3;
                    var1 = var2;
case 11:
                    return var1;
                }
            };
            var5['value'] = var6;
            var1[1] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var8 = var2.bind(var1)(var8);
        var2 = 'DeveloperExperimentStore';
        var8['displayName'] = var2;
        var2 = 11;
        var2 = var6[var2];
        var14 = var7.bind(var1)(var2);
        var2 = {};
        var2['CONNECTION_OPEN'] = var4;
        var2['OVERLAY_INITIALIZE'] = var4;
        var2['CURRENT_USER_UPDATE'] = var4;
        var4 = var8.prototype;
        var4 = Object.create(var4, {constructor: {value: var8}});
        var15 = var4;
        var13 = var2;
        var2 = new var15[var8](var14, var13, var12);
        var2 = var2 instanceof Object ? var2 : var4;
        var4 = 12;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'stores/DeveloperExperimentStore.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();