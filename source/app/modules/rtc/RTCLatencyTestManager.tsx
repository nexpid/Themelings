// app/modules/rtc/RTCLatencyTestManager.tsx
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var4 = {};
    var9 = true;
    var4['value'] = var9;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
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
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var8 = var8.SECOND;
    var8 = var10 * var8;
    var _closure1_slot10 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var8 = var4.SECOND;
    var4 = 30;
    var4 = var4 * var8;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var10 = var7.bind(var1)(var4);
    var4 = var10.prototype;
    var8 = Object.create(var4, {constructor: {value: var10}});
    var13 = 'RTCLatencyTestManager';
    var14 = var8;
    var4 = new var14[var10](var13, var12);
    var8 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot12 = var8;
    var4 = var8.enableNativeLogger;
    var4 = var4.bind(var8)(var9);
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function RTCLatencyTestManager(arg1) {
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
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot13;
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
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = {};
                var4 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2._handleConnectionOpen;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['POST_CONNECTION_OPEN'] = var4;
                var1['actions'] = var3;
                var3 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var4 = arg1;
                        var3 = var4.map;
                        var2 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.region;
                            return var1;
                        };
                        var6 = var3.bind(var4)(var2);
                        var _closure4_slot0 = var6;
                        var5 = _closure1_slot9;
                        var3 = var5.shouldPerformLatencyTest;
                        var3 = var3.bind(var5)(var6);
                        if(var3) { _fun0003_ip = 104; continue _fun0003 }
 49:
                        var6 = _closure1_slot12;
                        var5 = var6.verbose;
                        var7 = _closure1_slot9;
                        var3 = var7.getPreferredRegions;
                        var8 = var3.bind(var7)();
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var7 = var3.concat;
                        var3 = 'RTC cached ranked preferred regions are ';
                        var3 = var7.bind(var3)(var8);
                        var3 = var5.bind(var6)(var3);
                        _fun0003_ip = 164; continue _fun0003;
 104:
                        var3 = _closure1_slot8;
                        var2 = var3.getMediaEngine;
                        var3 = var2.bind(var3)();
                        var2 = var3.rankRtcRegions;
                        var4 = var2.bind(var3)(var4);
                        var3 = var4.then;
                        var2 = function(arg1) {
                            var5 = arg1;
                            var4 = _closure1_slot12;
                            var3 = var4.verbose;
                            var2 = 'RTC region latency test completed, ranked regions are: ';
                            var2 = var3.bind(var4)(var2, var5);
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.completeRTCLatencyTest;
                            var2 = _closure4_slot0;
                            var2 = var3.bind(var4)(var5, var2);
                            return var1;
                        };
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.catch;
                        var1 = function(arg1) {
                            var3 = _closure1_slot12;
                            var2 = var3.warn;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
 164:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['_handleTestRegionsResponse'] = var3;
                var3 = function() {
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 9;
                    var4 = var7[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.fetchRTCLatencyTestRegions;
                    var6 = var4.bind(var5)();
                    var5 = var6.then;
                    var4 = function(arg1) {
                        var3 = _closure3_slot0;
                        var2 = var3._handleTestRegionsResponse;
                        var1 = arg1;
                        var1 = var1.body;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.catch;
                    var3 = function(arg1) {
                        var3 = _closure1_slot12;
                        var2 = var3.warn;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure3_slot0;
                    var4 = global;
                    var5 = var4.setTimeout;
                    var4 = var3._fetchAndScheduleRefetch;
                    var6 = _closure1_slot1;
                    var2 = 7;
                    var2 = var7[var2];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.Millis;
                    var6 = var2.MINUTE;
                    var2 = 360;
                    var2 = var2 * var6;
                    var2 = var5.bind(var1)(var4, var2);
                    var3['refetchTimeout'] = var2;
                    return var1;
                };
                var1['_fetchAndScheduleRefetch'] = var3;
                var2 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var4.bind(var1)(var2);
                        var2 = var2.isPlatformEmbedded;
                        if(!var2) { _fun0004_ip = 153; continue _fun0004 }
 34:
                        var2 = global;
                        var5 = var2.Math;
                        var4 = var5.floor;
                        var6 = _closure1_slot10;
                        var8 = var2.Math;
                        var7 = var8.random;
                        var7 = var7.bind(var8)();
                        var3 = _closure1_slot11;
                        var3 = var7 * var3;
                        var3 = var6 + var3;
                        var5 = var4.bind(var5)(var3);
                        var4 = _closure3_slot0;
                        var6 = var4.refetchTimeout;
                        var4 = null;
                        if(!(var4 != var6)) { _fun0004_ip = 125; continue _fun0004 }
 104:
                        var6 = var2.clearTimeout;
                        var4 = _closure3_slot0;
                        var4 = var4.refetchTimeout;
                        var4 = var6.bind(var1)(var4);
 125:
                        var3 = _closure3_slot0;
                        var4 = var2.setTimeout;
                        var2 = var3._fetchAndScheduleRefetch;
                        var2 = var4.bind(var1)(var2, var5);
                        var3['refetchTimeout'] = var2;
 153:
                        return var1;
                    }
                };
                var1['_handleConnectionOpen'] = var2;
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
        var6 = '_terminate';
        var5['key'] = var6;
        var1 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = this;
                var3 = var1.refetchTimeout;
                var2 = null;
                if(!(var2 != var3)) { _fun0005_ip = 36; continue _fun0005 }
 15:
                var2 = global;
                var3 = var2.clearTimeout;
                var2 = var1.refetchTimeout;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
 36:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var14 = var4;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rtc/RTCLatencyTestManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();