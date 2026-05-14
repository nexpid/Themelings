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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var5 = var7[var2];
    var5 = var9.bind(var1)(var5);
    var8 = 7;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 8;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.AnalyticEvents;
    var _closure1_slot10 = var8;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.ExperimentAssignment;
    var4 = function(arg1) {
        var4 = function ApexExperimentStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = this;
                var1 = _closure1_slot4;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 9;
                var7 = var8[var1];
                var7 = var9.bind(var4)(var7);
                var10 = new Array(3);
                var10[0] = var7;
                var7 = {};
                var9 = function CONNECTION_OPEN(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleConnectionOpen;
                    var1 = arg1;
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
                var9 = function GUILD_CREATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleGuildCreate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7['GUILD_CREATE'] = var9;
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
                var9 = function APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE(arg1) {
                    var1 = arg1;
                    var4 = _closure3_slot0;
                    var3 = var4.createSessionOverride;
                    var2 = var1.experimentName;
                    var1 = var1.variantId;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var7['APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE'] = var9;
                var9 = function APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.deleteSessionOverride;
                    var1 = arg1;
                    var1 = var1.experimentName;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7['APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE'] = var9;
                var9 = function APEX_EXPERIMENT_CLEAR_FOR_TESTS() {
                    var2 = _closure3_slot0;
                    var1 = var2.clearForTests;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var7['APEX_EXPERIMENT_CLEAR_FOR_TESTS'] = var9;
                var9 = function APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.setExperimentsMetadata;
                    var1 = arg1;
                    var1 = var1.experiments;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7['APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS'] = var9;
                var9 = function APEX_EXPERIMENTS_FETCH_START(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleFetchStart;
                    var1 = arg1;
                    var1 = var1.unitId;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7['APEX_EXPERIMENTS_FETCH_START'] = var9;
                var9 = function APEX_EXPERIMENTS_FETCH_SUCCESS(arg1) {
                    var1 = arg1;
                    var4 = _closure3_slot0;
                    var3 = var4.handleFetchSuccess;
                    var2 = var1.unitId;
                    var1 = var1.experiments;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var7['APEX_EXPERIMENTS_FETCH_SUCCESS'] = var9;
                var9 = function APEX_EXPERIMENTS_FETCH_FAILURE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleFetchFailure;
                    var1 = arg1;
                    var1 = var1.unitId;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7['APEX_EXPERIMENTS_FETCH_FAILURE'] = var9;
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
                var1 = _closure1_slot7;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot6;
                var1 = _closure1_slot11;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 8:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = function(arg1) {
                    var8 = 0;
                    var7 = copyRestArgs(var8);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 10;
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
                var1['track'] = var3;
                var3 = 'discord_app';
                var1['surface'] = var3;
                var3 = var1.addChangeListener;
                var2 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.maybeEmitDebugExperimentEvent;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var5 = this;
            var3 = var5.waitFor;
            var2 = _closure1_slot9;
            var2 = var3.bind(var5)(var2);
            var4 = var5.loadStoredState;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 11;
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
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'maybeEmitDebugExperimentEvent';
        var5['key'] = var7;
        var7 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = this;
                var4 = _closure1_slot9;
                var1 = var4.getId;
                var6 = var1.bind(var4)();
                var5 = var3.getEvaluationAndAssignment;
                var4 = 'user';
                var1 = '2026-03-debug-experiment';
                var6 = var5.bind(var3)(var4, var6, var1);
                var5 = _closure1_slot3;
                var1 = undefined;
                var4 = 2;
                var5 = var5.bind(var1)(var6, var4);
                var4 = 1;
                var5 = var5[var4];
                var4 = null;
                var7 = var4 == var5;
                var6 = undefined;
                if(var7) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var6 = var5.variantId;
case 9:
                if(!(var4 != var6)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var4 = 0;
                if(!(var4 === var6)) { _fun0003_ip = 13; continue _fun0003 }
case 11:
                var3['lastEmittedDebugVariantId'] = var1;
                _fun0003_ip = 14; continue _fun0003;
case 13:
                var4 = var3.lastEmittedDebugVariantId;
                if(!(var6 !== var4)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var3['lastEmittedDebugVariantId'] = var6;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 10;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot10;
                var3 = var2.EXPERIMENT_APEX_DEBUGGING_EVENT;
                var2 = {'experiment': '2026-03-debug-experiment', 'apex_debug_variant': null, 'experiment_location': 'apex_assignments_received'};
                var2['apex_debug_variant'] = var6;
                var2 = var4.bind(var5)(var3, var2);
case 14:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'handleConnectionOpen';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var4 = this;
            var6 = var1.guilds;
            var5 = var6.reduce;
            var3 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var2 = arg2;
                    var4 = var2.experiments;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var3 = var2.id;
                    var2 = var2.experiments;
                    var1[var3] = var2;
case 16:
                    return var1;
                }
            };
            var2 = {};
            var3 = var5.bind(var6)(var3, var2);
            var2 = var4.setExperimentAssignments;
            var1 = var1.apexExperiments;
            var1 = var2.bind(var4)(var1, var3);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'handleGuildCreate';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = arg1;
                var3 = this;
                var2 = var1.guild;
                var4 = var2.experiments;
                var2 = null;
                if(!(var2 != var4)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                var2 = {};
                var1 = var1.guild;
                var1 = var1.id;
                var2[0] = var4;
                var1 = var3.setGuildExperimentAssignments;
                var1 = var1.bind(var3)(var2);
                return var1;
case 18:
                var1 = true;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var13 = var5;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/experiments/apex/ApexExperimentStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['ExperimentAssignment'] = var2;
    return var1;
})();