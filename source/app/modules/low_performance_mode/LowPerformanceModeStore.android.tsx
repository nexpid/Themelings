// app/modules/low_performance_mode/LowPerformanceModeStore.android.tsx
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
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var2 = {'enabled': false, 'optedOut': false};
    var _closure1_slot8 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function LowPerformanceModeStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot1;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot9;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot1 = var4;
        var2 = _closure1_slot7;
        var3 = undefined;
        var1 = arg1;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var6 = arg1;
                var3 = this;
                var4 = {};
                var2 = null;
                var5 = var2 == var6;
                var1 = undefined;
                var7 = undefined;
                if(var5) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var7 = var6.enabled;
case 9:
                var5 = var2 != var7;
                if(!var5) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var5 = var7;
case 11:
                var4['enabled'] = var5;
                var7 = var2 == var6;
                var5 = undefined;
                if(var7) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var5 = var6.optedOut;
case 13:
                var2 = var2 != var5;
                if(!var2) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var2 = var5;
case 15:
                var4['optedOut'] = var2;
                _closure1_slot8 = var4;
                var2 = var3.evaluate;
                var2 = var2.bind(var3)();
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var8 = 'getState';
        var5['key'] = var8;
        var8 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var8;
        var1[1] = var5;
        var5 = {};
        var8 = 'optedOut';
        var5['key'] = var8;
        var8 = function get() {
            var1 = _closure1_slot8;
            var1 = var1.optedOut;
            return var1;
        };
        var5['get'] = var8;
        var1[2] = var5;
        var5 = {};
        var8 = 'enabled';
        var5['key'] = var8;
        var8 = function get() {
            var1 = _closure1_slot8;
            var1 = var1.enabled;
            return var1;
        };
        var5['get'] = var8;
        var1[3] = var5;
        var5 = {};
        var8 = 'visible';
        var5['key'] = var8;
        var8 = function get() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = _closure1_slot8;
                var1 = var1.enabled;
                if(var1) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var2 = _closure1_slot8;
                var1 = var2.optedOut;
case 17:
                return var1;
            }
        };
        var5['get'] = var8;
        var1[4] = var5;
        var5 = {};
        var8 = 'active';
        var5['key'] = var8;
        var8 = function get() {
            var1 = _closure1_slot8;
            var1 = var1.enabled;
            return var1;
        };
        var5['get'] = var8;
        var1[5] = var5;
        var5 = {};
        var8 = 'evaluate';
        var5['key'] = var8;
        var8 = _closure1_slot2;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var7 = var2.LowPerformanceModeExperiment;
                    var4 = var7.getConfig;
                    var2 = {};
                    var8 = 'LowPerformanceModeStore.evaluate';
                    var2['location'] = var8;
                    var2 = var4.bind(var7)(var2);
                    var2 = var2.enabled;
                    if(var2) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                    var2 = _closure1_slot8;
                    var2 = var2.enabled;
                    if(var2) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                    var4 = _closure1_slot8;
                    var2 = var4.optedOut;
case 23:
                    if(!var2) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                    var2 = {'enabled': false, 'optedOut': false};
                    _closure1_slot8 = var2;
                    var2 = var5.emitChange;
                    var2 = var2.bind(var5)();
                    _fun0005_ip = 25; continue _fun0005;
case 21:
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var4 = 8;
                    var4 = var2[var4];
                    var7 = var7.bind(var3)(var4);
                    var4 = 7;
                    var4 = var2[var4];
                    var2 = var2.paths;
                    var2 = var7.bind(var3)(var4, var2);
                    SaveGenerator(address=174);
case 27:
                    return var2;
case 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                    var7 = var2.isLowPerformanceDevice;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var4 = 9;
                    var4 = var9[var4];
                    var8 = var8.bind(var3)(var4);
                    var4 = var8.getDevice;
                    var4 = var4.bind(var8)();
                    var7 = var7.bind(var3)(var4);
                    var4 = _closure1_slot8;
                    if(var7) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                    var7 = var4.enabled;
                    if(!var7) { _fun0005_ip = 25; continue _fun0005 }
case 33:
                    var7 = {};
                    var10 = _closure1_slot8;
                    var11 = var7;
                    var8 = copyDataProperties(var11, var10);
                    var9 = false;
                    var8 = 'enabled';
                    var7[var8] = var9;
                    _closure1_slot8 = var7;
                    var7 = var5.emitChange;
                    var7 = var7.bind(var5)();
                    _fun0005_ip = 25; continue _fun0005;
case 31:
                    var4 = var4.optedOut;
                    if(var4) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                    var7 = _closure1_slot8;
                    var4 = var7.enabled;
case 34:
                    if(var4) { _fun0005_ip = 25; continue _fun0005 }
case 36:
                    var4 = {};
                    var10 = _closure1_slot8;
                    var11 = var4;
                    var7 = copyDataProperties(var11, var10);
                    var8 = true;
                    var7 = 'enabled';
                    var4[var7] = var8;
                    _closure1_slot8 = var4;
                    var4 = var5.emitChange;
                    var4 = var4.bind(var5)();
case 25:
                    return var3;
case 29:
                    return var2;
case 19:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var6 = function evaluate() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'LowPerformanceModeStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = 11;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var4 = function handleSetEnabled(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var4 = var1.enabled;
            if(var4) { _fun0006_ip = 37; continue _fun0006 }
case 38:
            var1 = _closure1_slot8;
            var1 = var1.enabled;
            if(!var1) { _fun0006_ip = 37; continue _fun0006 }
case 9:
            var1 = _closure1_slot8;
            var1 = var1.optedOut;
            if(var1) { _fun0006_ip = 37; continue _fun0006 }
case 39:
            var1 = {};
            var5 = _closure1_slot8;
            var6 = var1;
            var2 = copyDataProperties(var6, var5);
            var2 = 'enabled';
            var1[var2] = var4;
            var3 = true;
            var2 = 'optedOut';
            var1[var2] = var3;
            var2 = var1;
            _fun0006_ip = 8; continue _fun0006;
case 37:
            var1 = {};
            var5 = _closure1_slot8;
            var6 = var1;
            var3 = copyDataProperties(var6, var5);
            var3 = 'enabled';
            var1[var3] = var4;
            var2 = var1;
case 8:
            _closure1_slot8 = var2;
            var1 = undefined;
            return var1;
        }
    };
    var2['LOW_PERFORMANCE_MODE_SET_ENABLED'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/low_performance_mode/LowPerformanceModeStore.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();