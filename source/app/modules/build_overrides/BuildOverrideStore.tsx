// app/modules/build_overrides/BuildOverrideStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
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
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var4 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var9)(var3, var1, var2);
    var12 = 0;
    var2 = var7[var12];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var11 = 1;
    var2 = var7[var11];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var10 = 2;
    var2 = var7[var10];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var9 = 3;
    var2 = var7[var9];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = {};
    var2['NotResolved'] = var12;
    var4 = 'NotResolved';
    var2[var12] = var4;
    var2['Resolving'] = var11;
    var4 = 'Resolving';
    var2[var11] = var4;
    var2['Resolved'] = var10;
    var4 = 'Resolved';
    var2[var10] = var4;
    var2['Invalid'] = var9;
    var4 = 'Invalid';
    var2[var9] = var4;
    var _closure1_slot8 = var2;
    var4 = var2.NotResolved;
    var _closure1_slot9 = var4;
    var4 = null;
    var _closure1_slot10 = var4;
    var4 = {};
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function BuildOverrideStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot12;
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
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'getCurrentBuildOverride';
        var5['key'] = var1;
        var1 = function value() {
            var2 = function resolveCurrentOverrideIfNecessary() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot9;
                    var2 = _closure1_slot8;
                    var2 = var2.NotResolved;
                    if(!(var3 === var2)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var2 = _closure1_slot8;
                    var2 = var2.Resolving;
                    _closure1_slot9 = var2;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.getBuildOverride;
                    var3 = var1.bind(var2)();
                    var2 = var3.then;
                    var1 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 6;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'CURRENT_BUILD_OVERRIDE_RESOLVED';
                        var2['type'] = var5;
                        var5 = arg1;
                        var2['overrides'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 9:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = {};
            var3 = _closure1_slot9;
            var1['state'] = var3;
            var2 = _closure1_slot10;
            var1['overrides'] = var2;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getBuildOverride';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = arg1;
            var3 = function resolveBuildOverrideIfNecessary(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var8 = arg1;
                    var _closure4_slot0 = var8;
                    var2 = _closure1_slot11;
                    var2 = var8 in var2;
                    if(var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 5;
                    var2 = var2[var6];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.validateURL;
                    var2 = var2.bind(var4)(var8);
                    var4 = null;
                    if(!(var4 == var2)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var4 = {};
                    var11 = _closure1_slot11;
                    var12 = var4;
                    var7 = copyDataProperties(var12, var11);
                    var7 = {};
                    var7['url'] = var8;
                    var9 = _closure1_slot8;
                    var9 = var9.Invalid;
                    var7['state'] = var9;
                    var4[var8] = var7;
                    _closure1_slot11 = var4;
                    _fun0004_ip = 11; continue _fun0004;
case 13:
                    var4 = {};
                    var11 = _closure1_slot11;
                    var12 = var4;
                    var7 = copyDataProperties(var12, var11);
                    var7 = {};
                    var7['url'] = var8;
                    var9 = var2.url;
                    var7['validatedURL'] = var9;
                    var9 = global;
                    var10 = var9.String;
                    var9 = var2.payload;
                    var9 = var10.bind(var5)(var9);
                    var7['payload'] = var9;
                    var9 = _closure1_slot8;
                    var9 = var9.Resolving;
                    var7['state'] = var9;
                    var4[var8] = var7;
                    _closure1_slot11 = var4;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.getBuildOverrideMeta;
                    var2 = var2.url;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.then;
                    var1 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 6;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'BUILD_OVERRIDE_RESOLVED';
                        var2['type'] = var5;
                        var5 = _closure4_slot0;
                        var2['url'] = var5;
                        var5 = arg1;
                        var2['override'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 11:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = _closure1_slot11;
            var1 = var1[var2];
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getBuildOverrides';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'BuildOverrideStore';
    var9['displayName'] = var4;
    var4 = 6;
    var4 = var7[var4];
    var15 = var8.bind(var1)(var4);
    var4 = {};
    var10 = function handleBuildOverrideResolved(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var4 = var1.url;
            var6 = var1.override;
            var1 = null;
            if(!(var1 != var6)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
            var1 = _closure1_slot8;
            var7 = var1.Resolved;
            _fun0005_ip = 17; continue _fun0005;
case 15:
            var1 = _closure1_slot8;
            var7 = var1.Invalid;
case 17:
            var2 = {};
            var8 = _closure1_slot11;
            var9 = var2;
            var3 = copyDataProperties(var9, var8);
            var3 = {};
            var5 = _closure1_slot11;
            var8 = var5[var4];
            var9 = var3;
            var5 = copyDataProperties(var9, var8);
            var5 = 'state';
            var3[var5] = var7;
            var5 = 'override';
            var3[var5] = var6;
            var2[var4] = var3;
            _closure1_slot11 = var2;
            var1 = undefined;
            return var1;
        }
    };
    var4['BUILD_OVERRIDE_RESOLVED'] = var10;
    var5 = function handleCurrentBuildOverrideResolved(arg1) {
        var1 = arg1;
        var2 = var1.overrides;
        var3 = _closure1_slot8;
        var3 = var3.Resolved;
        _closure1_slot9 = var3;
        _closure1_slot10 = var2;
        var1 = undefined;
        return var1;
    };
    var4['CURRENT_BUILD_OVERRIDE_RESOLVED'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var16 = var5;
    var14 = var4;
    var4 = new var16[var9](var15, var14, var13);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/build_overrides/BuildOverrideStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['State'] = var2;
    return var1;
})();