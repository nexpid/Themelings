// app/modules/native_on_demand/native/NativeOnDemandResourceManager.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AppStates;
    var _closure1_slot9 = var8;
    var4 = var4.InputModes;
    var _closure1_slot10 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function NativeOnDemandResourceManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot11;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 120; continue _fun0002;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = {};
                var4 = function APP_STATE_UPDATE() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleAppStateUpdate;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['APP_STATE_UPDATE'] = var4;
                var1['actions'] = var3;
                var3 = false;
                var1['hasFetchedKrisp'] = var3;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = _closure1_slot8;
                        var2 = var3.getState;
                        var3 = var2.bind(var3)();
                        var2 = _closure1_slot9;
                        var2 = var2.ACTIVE;
                        if(!(var3 === var2)) { _fun0003_ip = 289; continue _fun0003 }
 36:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var8 = 8;
                        var2 = var2[var8];
                        var7 = undefined;
                        var2 = var3.bind(var7)(var2);
                        var5 = null;
                        if(!(var5 != var2)) { _fun0003_ip = 104; continue _fun0003 }
 64:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var8];
                        var6 = var3.bind(var7)(var2);
                        var3 = var6.hasOnDemandResource;
                        var2 = 'krisp';
                        var2 = var3.bind(var6)(var2);
                        if(var2) { _fun0003_ip = 289; continue _fun0003 }
 104:
                        var3 = _closure3_slot0;
                        var3 = var3.hasFetchedKrisp;
                        if(var3) { _fun0003_ip = 289; continue _fun0003 }
 123:
                        var3 = _closure3_slot0;
                        var2 = true;
                        var3['hasFetchedKrisp'] = var2;
                        var3 = _closure1_slot7;
                        var2 = var3.getModeOptions;
                        var2 = var2.bind(var3)();
                        var2 = var2.autoThreshold;
                        var _closure4_slot0 = var2;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var6 = 9;
                        var6 = var2[var6];
                        var11 = var3.bind(var7)(var6);
                        var10 = var11.setMode;
                        var6 = _closure1_slot10;
                        var9 = var6.VOICE_ACTIVITY;
                        var6 = {};
                        var12 = false;
                        var6['autoThreshold'] = var12;
                        var6 = var10.bind(var11)(var9, var6);
                        var2 = var2[var8];
                        var2 = var3.bind(var7)(var2);
                        var2 = var5 == var2;
                        var3 = undefined;
                        if(var2) { _fun0003_ip = 269; continue _fun0003 }
 228:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var4 = var4[var8];
                        var7 = var6.bind(var7)(var4);
                        var6 = var7.fetchOnDemandResource;
                        var4 = 'krisp';
                        var4 = var6.bind(var7)(var4);
                        var2 = var5 == var4;
                        var3 = var4;
 269:
                        if(var2) { _fun0003_ip = 289; continue _fun0003 }
 272:
                        var2 = var3.then;
                        var1 = function(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var6 = 8;
                                var3 = var1[var6];
                                var1 = undefined;
                                var4 = var4.bind(var1)(var3);
                                var3 = null;
                                var3 = var3 == var4;
                                var4 = undefined;
                                if(var3) { _fun0004_ip = 65; continue _fun0004 }
 36:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var3 = var3[var6];
                                var5 = var5.bind(var1)(var3);
                                var3 = var5.isOnDemandResourcingAvailable;
                                var4 = var3.bind(var5)();
 65:
                                var3 = arg1;
                                var3 = !var3;
                                if(!var3) { _fun0004_ip = 77; continue _fun0004 }
 74:
                                var3 = var4;
 77:
                                if(var3) { _fun0004_ip = 136; continue _fun0004 }
 80:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var3 = 9;
                                var3 = var5[var3];
                                var5 = var4.bind(var1)(var3);
                                var4 = var5.setMode;
                                var2 = _closure1_slot10;
                                var3 = var2.VOICE_ACTIVITY;
                                var2 = {};
                                var6 = _closure4_slot0;
                                var2['autoThreshold'] = var6;
                                var2 = var4.bind(var5)(var3, var2);
 136:
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
 289:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleAppStateUpdate'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot2;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/native_on_demand/native/NativeOnDemandResourceManager.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();