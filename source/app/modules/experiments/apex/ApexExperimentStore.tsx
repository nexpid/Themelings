// app/modules/experiments/apex/ApexExperimentStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
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
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var5 = var7[var2];
    var5 = var9.bind(var1)(var5);
    var8 = 6;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.ExperimentAssignment;
    var4 = function(arg1) {
        var4 = function ApexExperimentStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = this;
                var1 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 7;
                var7 = var8[var1];
                var7 = var9.bind(var4)(var7);
                var10 = new Array(3);
                var10[0] = var7;
                var7 = {};
                var9 = function CONNECTION_OPEN(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.setExperimentAssignments;
                    var1 = arg1;
                    var1 = var1.apexExperiments;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7['CONNECTION_OPEN'] = var9;
                var9 = function CONNECTION_OPEN_STATE_UPDATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.setExperimentAssignments;
                    var1 = arg1;
                    var1 = var1.apexExperiments;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7['CONNECTION_OPEN_STATE_UPDATE'] = var9;
                var9 = function APEX_EXPERIMENT_OVERRIDE_CREATE(arg1) {
                    var1 = arg1;
                    var4 = _closure3_slot0;
                    var3 = var4.createOverride;
                    var2 = var1.experimentName;
                    var1 = var1.variantId;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var7['APEX_EXPERIMENT_OVERRIDE_CREATE'] = var9;
                var9 = function APEX_EXPERIMENT_OVERRIDE_DELETE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.deleteOverride;
                    var1 = arg1;
                    var1 = var1.experimentName;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7['APEX_EXPERIMENT_OVERRIDE_DELETE'] = var9;
                var9 = function APEX_EXPERIMENT_OVERRIDE_CLEAR() {
                    var2 = _closure3_slot0;
                    var1 = var2.clearAllOverrides;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var7['APEX_EXPERIMENT_OVERRIDE_CLEAR'] = var9;
                var9 = function APEX_EXPERIMENT_CLEAR_SERVER_ASSIGNMENTS() {
                    var2 = _closure3_slot0;
                    var1 = var2.clearAllServerAssignments;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var7['APEX_EXPERIMENT_CLEAR_SERVER_ASSIGNMENTS'] = var9;
                var9 = function APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.setExperimentsMetadata;
                    var1 = arg1;
                    var1 = var1.experiments;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7['APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS'] = var9;
                var9 = function LOGOUT(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleLogout;
                    var1 = arg1;
                    var1 = var1.isSwitchingAccount;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7['LOGOUT'] = var9;
                var10[1] = var7;
                var7 = _closure1_slot0;
                var1 = var8[var1];
                var1 = var7.bind(var4)(var1);
                var1 = var1.DispatchBand;
                var1 = var1.Early;
                var10[2] = var1;
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot9;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 217; continue _fun0002 }
 204:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 251; continue _fun0002;
 217:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 251:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = function(arg1) {
                    var8 = 0;
                    var7 = copyRestArgs(var8);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.track;
                    var1 = new Array(0);
                    var8 = var1;
                    var6 = 0;
                    var4 = arraySpread(var8, var7, var6);
                    var8 = var2;
                    var7 = var1;
                    var6 = var3;
                    var1 = apply(var8, var7, var6);
                    return var1;
                };
                var1['track'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot7;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot4;
        var5 = {};
        var6 = 'initialize';
        var5['key'] = var6;
        var1 = function value(arg1) {
            var5 = this;
            var3 = var5.waitFor;
            var2 = _closure1_slot8;
            var2 = var3.bind(var5)(var2);
            var4 = var5.loadStoredState;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getBuildOverrideExperiments;
            var3 = var2.bind(var3)();
            var2 = arg1;
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var13 = var5;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/experiments/apex/ApexExperimentStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['ExperimentAssignment'] = var2;
    return var1;
})();