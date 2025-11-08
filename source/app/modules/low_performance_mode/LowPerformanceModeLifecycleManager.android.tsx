// app/modules/low_performance_mode/LowPerformanceModeLifecycleManager.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot10 = var4;
    var4 = function() {
        var4 = _closure1_slot8;
        var3 = function LowPerformanceModeManager() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot7;
            var4 = _closure2_slot1;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = false;
            var3['justEnabled'] = var4;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure1_slot9;
                    var3 = var1.enabled;
                    var4 = _closure3_slot0;
                    var4 = var4.justEnabled;
                    if(!var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    if(!var3) { _fun0002_ip = 8; continue _fun0002 }
case 6:
                    var4 = _closure3_slot0;
                    var6 = false;
                    var4['justEnabled'] = var6;
                    if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = _closure3_slot0;
                    var1 = var3.unsubscribeFromStoreChanges;
                    var1 = var1.bind(var3)();
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var3 = 8;
                    var4 = var1[var3];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var5 = var4.Storage;
                    var4 = var5.get;
                    var7 = 'lowPerformanceModeOptedOut';
                    var4 = var4.bind(var5)(var7, var6);
                    if(var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var6 = var3.Storage;
                    var4 = var6.set;
                    var3 = true;
                    var3 = var4.bind(var6)(var7, var3);
                    var4 = _closure1_slot1;
                    var3 = 9;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.track;
                    var2 = _closure1_slot10;
                    var2 = var2.LOW_PERFORMANCE_MODE_OPT_OUT;
                    var2 = var3.bind(var4)(var2);
                    _fun0002_ip = 8; continue _fun0002;
case 10:
                    return var1;
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleStoreChanged'] = var2;
            return var1;
        };
        var _closure2_slot1 = var3;
        var5 = {};
        var2 = 'initialize';
        var5['key'] = var2;
        var7 = _closure1_slot6;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var2 = var5.unsubscribeFromStoreChanges;
                    var2 = var2.bind(var5)();
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var7 = 8;
                    var2 = var2[var7];
                    var3 = undefined;
                    var2 = var6.bind(var3)(var2);
                    var8 = var2.Storage;
                    var6 = var8.get;
                    var11 = 'lowPerformanceModeDevicesVersion';
                    var2 = -1;
                    var2 = var6.bind(var8)(var11, var2);
                    var10 = 1;
                    if(!(var10 !== var2)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var9 = var2.Storage;
                    var8 = var9.set;
                    var6 = 'lowPerformanceModeMonitoringEligible';
                    var2 = true;
                    var2 = var8.bind(var9)(var6, var2);
case 14:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var8 = var2[var7];
                    var8 = var6.bind(var3)(var8);
                    var9 = var8.Storage;
                    var8 = var9.set;
                    var8 = var8.bind(var9)(var11, var10);
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var9 = var2.Storage;
                    var8 = var9.get;
                    var6 = 'lowPerformanceModeMonitoringEligible';
                    var2 = true;
                    var2 = var8.bind(var9)(var6, var2);
                    if(!var2) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var6 = _closure1_slot9;
                    var6 = var6.enabled;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 10;
                    var8 = var10[var8];
                    var8 = var9.bind(var3)(var8);
                    var10 = var8.LowPerformanceModeExperiment;
                    var9 = var10.getConfig;
                    var8 = {};
                    var11 = 'LowPerformanceModeManager.initialize';
                    var8['location'] = var11;
                    var8 = var9.bind(var10)(var8);
                    var8 = var8.enabled;
                    if(var8) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    if(!var6) { _fun0003_ip = 16; continue _fun0003 }
case 20:
                    var8 = var5.disable;
                    var8 = var8.bind(var5)();
                    _fun0003_ip = 16; continue _fun0003;
case 18:
                    if(!var2) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var8 = 12;
                    var8 = var2[var8];
                    var9 = var9.bind(var3)(var8);
                    var8 = 11;
                    var8 = var2[var8];
                    var2 = var2.paths;
                    var9 = var9.bind(var3)(var8, var2);
                    var8 = var9.then;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.isLowPerformanceDevice;
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var1);
                        var1 = var4.getDevice;
                        var1 = var1.bind(var4)();
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var2 = var8.bind(var9)(var2);
                    SaveGenerator(address=351);
case 23:
                    return var2;
case 24:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    if(var2) { _fun0003_ip = 21; continue _fun0003 }
case 27:
                    var8 = var6;
                    if(!var8) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var9 = var5.disable;
                    var8 = var9.bind(var5)();
case 28:
                    var8 = undefined;
                    return var8;
case 21:
                    if(var6) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var6 = var5.enable;
                    var6 = var6.bind(var5)();
                    _fun0003_ip = 16; continue _fun0003;
case 30:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var3)(var4);
                    var8 = var4.Storage;
                    var7 = var8.get;
                    var6 = 'lowPerformanceModeOptedOut';
                    var4 = false;
                    var4 = var7.bind(var8)(var6, var4);
                    if(var4) { _fun0003_ip = 16; continue _fun0003 }
case 32:
                    var4 = var5.subscribeToStoreChanges;
                    var4 = var4.bind(var5)();
case 16:
                    return var3;
case 25:
                    return var2;
case 12:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var7.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var1 = function initialize() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'terminate';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = var2.unsubscribeFromStoreChanges;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'subscribeToStoreChanges';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot9;
            var2 = var3.addChangeListener;
            var1 = this;
            var1 = var1.handleStoreChanged;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'unsubscribeFromStoreChanges';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot9;
            var2 = var3.removeChangeListener;
            var1 = this;
            var1 = var1.handleStoreChanged;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'enable';
        var5['key'] = var7;
        var7 = function value() {
            var5 = this;
            var7 = true;
            var5['justEnabled'] = var7;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 14;
            var6 = var4[var2];
            var1 = undefined;
            var8 = var3.bind(var1)(var6);
            var6 = var8.setEnabled;
            var6 = var6.bind(var8)(var7);
            var2 = var4[var2];
            var6 = var3.bind(var1)(var2);
            var2 = var6.setVisible;
            var2 = var2.bind(var6)(var7);
            var2 = var5.subscribeToStoreChanges;
            var2 = var2.bind(var5)();
            var2 = 8;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var5 = var2.Storage;
            var4 = var5.set;
            var3 = 'lowPerformanceModeOptedOut';
            var2 = false;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'disable';
        var5['key'] = var7;
        var6 = function value() {
            var2 = this;
            var1 = var2.unsubscribeFromStoreChanges;
            var1 = var1.bind(var2)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 14;
            var5 = var4[var2];
            var1 = undefined;
            var7 = var3.bind(var1)(var5);
            var5 = var7.setEnabled;
            var6 = false;
            var5 = var5.bind(var7)(var6);
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var2 = var5.setVisible;
            var2 = var2.bind(var5)(var6);
            var2 = 8;
            var5 = var4[var2];
            var5 = var3.bind(var1)(var5);
            var7 = var5.Storage;
            var6 = var7.remove;
            var5 = 'lowPerformanceModeOptedOut';
            var5 = var6.bind(var7)(var5);
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var4 = var2.Storage;
            var3 = var4.remove;
            var2 = 'lowPerformanceModeMonitoringEligible';
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var4 = var4.bind(var1)();
    var8 = var4.prototype;
    var8 = Object.create(var8, {constructor: {value: var4}});
    var13 = var8;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot11 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function LowPerformanceModeLifecycleManager() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot7;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot4;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot3;
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 35; continue _fun0004;
case 33:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot4;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 35:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot8;
        var5 = {};
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            var2 = _closure1_slot11;
            var1 = var2.initialize;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var6 = function value() {
            var2 = _closure1_slot11;
            var1 = var2.terminate;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/low_performance_mode/LowPerformanceModeLifecycleManager.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();