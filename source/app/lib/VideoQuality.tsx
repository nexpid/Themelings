// app/lib/VideoQuality.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot10;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot10;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
case 36: // try_start_0
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
case 37: // try_end0
            _fun0004_ip = 38; continue _fun0004;
case 39: // catch_target0
            CatchBlockStart(arg_register=1);
case 38:
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
    var1 = function round(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var1 = arguments[1];
            var2 = undefined;
            if(!(var1 === var2)) { _fun0005_ip = 32; continue _fun0005 }
case 40:
            var1 = 0;
case 32:
            var2 = null;
            if(!(var2 != var4)) { _fun0005_ip = 41; continue _fun0005 }
case 29:
            var2 = global;
            var3 = var2.Math;
            var2 = var3.round;
            var1 = var2.bind(var3)(var4);
case 41:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var5 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = {};
    var5 = 'fps-update';
    var4['FpsUpdate'] = var5;
    var _closure1_slot8 = var4;
    var5 = 14;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var2 = function(arg1) {
        var4 = function VideoQuality(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var8 = arguments[1];
                var6 = this;
                var4 = undefined;
                if(!(var8 === var4)) { _fun0006_ip = 42; continue _fun0006 }
case 32:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 5;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var8 = var1.TimeStampProducer;
case 42:
                var _closure3_slot0 = var4;
                var1 = _closure1_slot3;
                var5 = _closure2_slot0;
                var1 = var1.bind(var4)(var6, var5);
                var1 = _closure1_slot6;
                var12 = var1.bind(var4)(var5);
                var5 = _closure1_slot5;
                var1 = _closure1_slot11;
                var1 = var1.bind(var4)();
                if(var1) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                var1 = var12.apply;
                var1 = var1.bind(var12)(var6, var4);
                _fun0006_ip = 45; continue _fun0006;
case 43:
                var7 = global;
                var11 = var7.Reflect;
                var10 = var11.construct;
                var7 = _closure1_slot6;
                var7 = var7.bind(var4)(var6);
                var9 = var7.constructor;
                var7 = new Array(0);
                var1 = var10.bind(var11)(var12, var7, var9);
case 45:
                var1 = var5.bind(var4)(var6, var1);
                _closure3_slot0 = var1;
                var5 = arg1;
                var1['connection'] = var5;
                var1['timestampProducer'] = var8;
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var6 = 6;
                var6 = var5[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var16 = var7;
                var6 = new var16[var6](var15);
                var6 = var6 instanceof Object ? var6 : var7;
                var1['networkQuality'] = var6;
                var6 = 0;
                var1['pausedCount'] = var6;
                var1['simulcastQualityChanges'] = var6;
                var1['cameraToggles'] = var6;
                var1['callUserIdsCount'] = var6;
                var1['numWindowOcclusionChanges'] = var6;
                var7 = {};
                var1['outboundStats'] = var7;
                var7 = {};
                var1['inboundStats'] = var7;
                var1['symmetricCodecUpdates'] = var6;
                var1['asymmetricCodecUpdates'] = var6;
                var6 = global;
                var6 = var6.Set;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var16 = var7;
                var6 = new var16[var6](var15);
                var6 = var6 instanceof Object ? var6 : var7;
                var1['statCollectionPausedUsers'] = var6;
                var3 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var5 = arg1;
                        var2 = null;
                        if(!(var2 != var5)) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                        var3 = _closure3_slot0;
                        var4 = var3.timestampProducer;
                        var3 = var4.now;
                        var4 = var3.bind(var4)();
                        var3 = _closure3_slot0;
                        var6 = var3.networkQuality;
                        var3 = var6.incrementNetworkStats;
                        var3 = var3.bind(var6)(var4);
                        var6 = _closure3_slot0;
                        var3 = var6.updateSystemResourceStats;
                        var3 = var3.bind(var6)();
                        var6 = _closure3_slot0;
                        var3 = var6.updateVideoEffectStats;
                        var3 = var3.bind(var6)(var5);
                        if(!(var2 != var5)) { _fun0007_ip = 46; continue _fun0007 }
case 48:
                        var2 = _closure3_slot0;
                        var3 = var2.connection;
                        var2 = var3.getStreamParameters;
                        var3 = var2.bind(var3)();
                        var2 = _closure3_slot0;
                        var1 = var2.receivedStats;
                        var1 = var1.bind(var2)(var4, var5, var3);
case 46:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['sampleStats'] = var3;
                var3 = _closure1_slot0;
                var2 = 5;
                var6 = var5[var2];
                var6 = var3.bind(var4)(var6);
                var6 = var6.DurationEnabled;
                var7 = var6.prototype;
                var9 = Object.create(var7, {constructor: {value: var6}});
                var16 = var9;
                var15 = false;
                var14 = var8;
                var6 = new var16[var6](var15, var14, var13);
                var6 = var6 instanceof Object ? var6 : var9;
                var1['paused'] = var6;
                var6 = var5[var2];
                var6 = var3.bind(var4)(var6);
                var6 = var6.DurationEnabled;
                var9 = var6.prototype;
                var9 = Object.create(var9, {constructor: {value: var6}});
                var16 = var9;
                var15 = false;
                var14 = var8;
                var6 = new var16[var6](var15, var14, var13);
                var6 = var6 instanceof Object ? var6 : var9;
                var1['zeroReceivers'] = var6;
                var6 = var5[var2];
                var6 = var3.bind(var4)(var6);
                var6 = var6.DurationEnabled;
                var9 = var6.prototype;
                var9 = Object.create(var9, {constructor: {value: var6}});
                var16 = var9;
                var15 = false;
                var14 = var8;
                var6 = new var16[var6](var15, var14, var13);
                var6 = var6 instanceof Object ? var6 : var9;
                var1['videoStopped'] = var6;
                var6 = var5[var2];
                var6 = var3.bind(var4)(var6);
                var6 = var6.DurationEnabled;
                var9 = var6.prototype;
                var9 = Object.create(var9, {constructor: {value: var6}});
                var16 = var9;
                var15 = false;
                var14 = var8;
                var6 = new var16[var6](var15, var14, var13);
                var6 = var6 instanceof Object ? var6 : var9;
                var1['videoEffectDuration'] = var6;
                var6 = var5[var2];
                var6 = var3.bind(var4)(var6);
                var6 = var6.DurationEnabled;
                var9 = var6.prototype;
                var9 = Object.create(var9, {constructor: {value: var6}});
                var16 = var9;
                var15 = false;
                var14 = var8;
                var6 = new var16[var6](var15, var14, var13);
                var6 = var6 instanceof Object ? var6 : var9;
                var1['hqSimulcastStreamEncoded'] = var6;
                var6 = var5[var2];
                var6 = var3.bind(var4)(var6);
                var6 = var6.DurationEnabled;
                var9 = var6.prototype;
                var9 = Object.create(var9, {constructor: {value: var6}});
                var16 = var9;
                var15 = false;
                var14 = var8;
                var6 = new var16[var6](var15, var14, var13);
                var6 = var6 instanceof Object ? var6 : var9;
                var1['lqSimulcastStreamEncoded'] = var6;
                var6 = var5[var2];
                var6 = var3.bind(var4)(var6);
                var6 = var6.DurationEnabled;
                var9 = var6.prototype;
                var9 = Object.create(var9, {constructor: {value: var6}});
                var16 = var9;
                var15 = false;
                var14 = var8;
                var6 = new var16[var6](var15, var14, var13);
                var6 = var6 instanceof Object ? var6 : var9;
                var1['bothSimulcastStreamsEncoded'] = var6;
                var6 = var5[var2];
                var6 = var3.bind(var4)(var6);
                var6 = var6.DurationEnabled;
                var9 = var6.prototype;
                var9 = Object.create(var9, {constructor: {value: var6}});
                var16 = var9;
                var15 = false;
                var14 = var8;
                var6 = new var16[var6](var15, var14, var13);
                var6 = var6 instanceof Object ? var6 : var9;
                var1['hqSimulcastStreamWatched'] = var6;
                var6 = var5[var2];
                var6 = var3.bind(var4)(var6);
                var6 = var6.DurationEnabled;
                var9 = var6.prototype;
                var9 = Object.create(var9, {constructor: {value: var6}});
                var16 = var9;
                var15 = false;
                var14 = var8;
                var6 = new var16[var6](var15, var14, var13);
                var6 = var6 instanceof Object ? var6 : var9;
                var1['lqSimulcastStreamWatched'] = var6;
                var6 = var5[var2];
                var6 = var3.bind(var4)(var6);
                var6 = var6.DurationEnabled;
                var9 = var6.prototype;
                var9 = Object.create(var9, {constructor: {value: var6}});
                var16 = var9;
                var15 = false;
                var14 = var8;
                var6 = new var16[var6](var15, var14, var13);
                var6 = var6 instanceof Object ? var6 : var9;
                var1['hqSimulcastStreamEligible'] = var6;
                var6 = var5[var2];
                var6 = var3.bind(var4)(var6);
                var6 = var6.DurationEnabled;
                var9 = var6.prototype;
                var9 = Object.create(var9, {constructor: {value: var6}});
                var16 = var9;
                var15 = false;
                var14 = var8;
                var6 = new var16[var6](var15, var14, var13);
                var6 = var6 instanceof Object ? var6 : var9;
                var1['lqSimulcastStreamEligible'] = var6;
                var6 = var5[var2];
                var6 = var3.bind(var4)(var6);
                var6 = var6.DurationEnabled;
                var9 = var6.prototype;
                var9 = Object.create(var9, {constructor: {value: var6}});
                var16 = var9;
                var15 = false;
                var14 = var8;
                var6 = new var16[var6](var15, var14, var13);
                var6 = var6 instanceof Object ? var6 : var9;
                var1['windowOccluded'] = var6;
                var6 = var5[var2];
                var6 = var3.bind(var4)(var6);
                var6 = var6.DurationEnabled;
                var9 = var6.prototype;
                var9 = Object.create(var9, {constructor: {value: var6}});
                var16 = var9;
                var15 = false;
                var14 = var8;
                var6 = new var16[var6](var15, var14, var13);
                var6 = var6 instanceof Object ? var6 : var9;
                var1['videoStoppedForOcclusion'] = var6;
                var6 = var5[var2];
                var6 = var3.bind(var4)(var6);
                var6 = var6.DurationEnabled;
                var9 = var6.prototype;
                var9 = Object.create(var9, {constructor: {value: var6}});
                var16 = var9;
                var15 = false;
                var14 = var8;
                var6 = new var16[var6](var15, var14, var13);
                var6 = var6 instanceof Object ? var6 : var9;
                var1['bandwidthLimitedFramerate'] = var6;
                var6 = var5[var2];
                var6 = var3.bind(var4)(var6);
                var6 = var6.DurationEnabled;
                var9 = var6.prototype;
                var9 = Object.create(var9, {constructor: {value: var6}});
                var16 = var9;
                var15 = false;
                var14 = var8;
                var6 = new var16[var6](var15, var14, var13);
                var6 = var6 instanceof Object ? var6 : var9;
                var1['bandwidthLimitedResolution'] = var6;
                var6 = var5[var2];
                var6 = var3.bind(var4)(var6);
                var6 = var6.DurationEnabled;
                var9 = var6.prototype;
                var9 = Object.create(var9, {constructor: {value: var6}});
                var16 = var9;
                var15 = false;
                var14 = var8;
                var6 = new var16[var6](var15, var14, var13);
                var6 = var6 instanceof Object ? var6 : var9;
                var1['cameraDuration'] = var6;
                var6 = var5[var2];
                var6 = var3.bind(var4)(var6);
                var6 = var6.DurationEnabled;
                var9 = var6.prototype;
                var9 = Object.create(var9, {constructor: {value: var6}});
                var16 = var9;
                var15 = false;
                var14 = var8;
                var6 = new var16[var6](var15, var14, var13);
                var6 = var6 instanceof Object ? var6 : var9;
                var1['cameraOpportunityDuration'] = var6;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.DurationEnabled;
                var6 = var2.prototype;
                var6 = Object.create(var6, {constructor: {value: var2}});
                var16 = var6;
                var15 = false;
                var14 = var8;
                var2 = new var16[var2](var15, var14, var13);
                var2 = var2 instanceof Object ? var2 : var6;
                var1['cameraSendDuration'] = var2;
                var2 = 7;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.Histogram;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var16 = var3;
                var2 = new var16[var2](var15);
                var2 = var2 instanceof Object ? var2 : var3;
                var1['videoEntropy'] = var2;
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
        var1 = 'addUserToStatsCollectionPausedSet';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var1 = this;
            var3 = var1.statCollectionPausedUsers;
            var2 = var3.add;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(29);
        var1[0] = var5;
        var5 = {};
        var7 = 'removeUserFromStatsCollectionPausedSet';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = this;
            var3 = var1.statCollectionPausedUsers;
            var2 = var3.delete;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'start';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var3 = var2.timestampProducer;
            var1 = var3.now;
            var1 = var1.bind(var3)();
            var2['streamStart'] = var1;
            var5 = var2.connection;
            var4 = var5.on;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var6.bind(var1)(var3);
            var3 = var3.BaseConnectionEvent;
            var3 = var3.Stats;
            var2 = var2.sampleStats;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'setOutboundSsrc';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var2 = var1.outboundStats;
                var4 = var2[var3];
                var2 = null;
                if(!(var2 == var4)) { _fun0008_ip = 48; continue _fun0008 }
case 49:
                var2 = var1.outboundStats;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 9;
                var5 = var5[var4];
                var4 = undefined;
                var4 = var6.bind(var4)(var5);
                var5 = var4.OutboundStats;
                var7 = var1.timestampProducer;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var8 = var4;
                var1 = new var8[var5](var7, var6);
                var1 = var1 instanceof Object ? var1 : var4;
                var2[var3] = var1;
case 48:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getOrCreateInboundStats';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = arg1;
                var1 = this;
                var3 = var1.inboundStats;
                var4 = var3[var2];
                var3 = null;
                if(!(var3 == var4)) { _fun0009_ip = 48; continue _fun0009 }
case 49:
                var4 = var1.inboundStats;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 9;
                var5 = var5[var3];
                var3 = undefined;
                var3 = var6.bind(var3)(var5);
                var6 = var3.InboundStats;
                var7 = var1.timestampProducer;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var8 = var5;
                var3 = new var8[var6](var7, var6);
                var3 = var3 instanceof Object ? var3 : var5;
                var4[var2] = var3;
case 48:
                var1 = var1.inboundStats;
                var1 = var1[var2];
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'updateCallUserIdsCount';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['callUserIdsCount'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'setInboundUser';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var3 = this;
            var2 = var3.getOrCreateInboundStats;
            var1 = arg1;
            var5 = var2.bind(var3)(var1);
            var4 = var5.setVideoStopped;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.VideoStoppedReasons;
            var3 = var2.SenderStopped;
            var6 = 0;
            var2 = arg2;
            var2 = var6 === var2;
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'setUserVideoDisabled';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = arg2;
                var2 = this;
                var3 = var2.getOrCreateInboundStats;
                var1 = arg1;
                var3 = var3.bind(var2)(var1);
                var6 = var3.setVideoStopped;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 9;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var7.bind(var1)(var5);
                var5 = var5.VideoStoppedReasons;
                var5 = var5.ClientSideDisableVideo;
                var5 = var6.bind(var3)(var4, var5);
                var4 = !var4;
                if(!var4) { _fun0010_ip = 50; continue _fun0010 }
case 51:
                var5 = var3.statsWindow;
                var6 = var5.length;
                var5 = 0;
                var4 = var6 > var5;
case 50:
                if(!var4) { _fun0010_ip = 52; continue _fun0010 }
case 53:
                var5 = var3.statsWindow;
                var6 = 0;
                var5 = var5[var6];
                var5 = var5.packets;
                var4 = var6 === var5;
case 52:
                if(!var4) { _fun0010_ip = 54; continue _fun0010 }
case 55:
                var4 = var2.timestampProducer;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                var3['startTime'] = var2;
case 54:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'setOcclusionIncomingVideoEnabled';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = this;
            var2 = var1.videoStoppedForOcclusion;
            var1 = arg1;
            var1 = !var1;
            var2['value'] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'setWindowOcclusionState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = arg1;
                var1 = this;
                var3 = var1.windowOccluded;
                var3 = var3.value;
                if(!(var2 !== var3)) { _fun0011_ip = 56; continue _fun0011 }
case 57:
                var3 = var1.numWindowOcclusionChanges;
                var3 = var3 + 1;
                var1['numWindowOcclusionChanges'] = var3;
case 56:
                var1 = var1.windowOccluded;
                var1['value'] = var2;
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'pause';
        var5['key'] = var7;
        var7 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var4 = this;
                var1 = var4.paused;
                var1 = var1.value;
                if(var1) { _fun0012_ip = 58; continue _fun0012 }
case 59:
                var1 = var4.pausedCount;
                var1 = var1 + 1;
                var4['pausedCount'] = var1;
case 58:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 10;
                var7 = var6[var3];
                var1 = undefined;
                var10 = var5.bind(var1)(var7);
                var9 = var10.forEach;
                var8 = var4.outboundStats;
                var7 = function(arg1) {
                    var2 = new Array(0);
                    var1 = arg1;
                    var1['statsWindow'] = var2;
                    var1 = undefined;
                    return var1;
                };
                var7 = var9.bind(var10)(var8, var7);
                var3 = var6[var3];
                var6 = var5.bind(var1)(var3);
                var5 = var6.forEach;
                var3 = var4.inboundStats;
                var2 = function(arg1) {
                    var2 = new Array(0);
                    var1 = arg1;
                    var1['statsWindow'] = var2;
                    var1 = undefined;
                    return var1;
                };
                var2 = var5.bind(var6)(var3, var2);
                var3 = var4.updateSendState;
                var2 = {};
                var5 = true;
                var2['paused'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'resume';
        var5['key'] = var7;
        var7 = function value() {
            var3 = this;
            var2 = var3.updateSendState;
            var1 = {};
            var4 = false;
            var1['paused'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'stop';
        var5['key'] = var7;
        var7 = function value() {
            var3 = this;
            var6 = var3.connection;
            var5 = var6.off;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var2 = var2.BaseConnectionEvent;
            var4 = var2.Stats;
            var2 = var3.sampleStats;
            var2 = var5.bind(var6)(var4, var2);
            var4 = var3.timestampProducer;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var3['streamEnd'] = var2;
            var2 = var3.removeAllListeners;
            var2 = var2.bind(var3)();
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'setViewedSimulcastQuality';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var1 = arg1;
                var2 = this;
                var3 = var2.hqSimulcastStreamWatched;
                var3 = var3.value;
                var3 = var1 !== var3;
                if(!var3) { _fun0013_ip = 37; continue _fun0013 }
case 60:
                var5 = var2.hqSimulcastStreamWatched;
                var4 = var5.totalDuration;
                var4 = var4.bind(var5)();
                var6 = 0;
                var4 = var4 > var6;
                if(var4) { _fun0013_ip = 61; continue _fun0013 }
case 5:
                var7 = var2.lqSimulcastStreamWatched;
                var5 = var7.totalDuration;
                var5 = var5.bind(var7)();
                var4 = var5 > var6;
case 61:
                var3 = var4;
case 37:
                if(!var3) { _fun0013_ip = 62; continue _fun0013 }
case 51:
                var3 = var2.simulcastQualityChanges;
                var3 = var3 + 1;
                var2['simulcastQualityChanges'] = var3;
case 62:
                var3 = var2.hqSimulcastStreamWatched;
                var3['value'] = var1;
                var2 = var2.lqSimulcastStreamWatched;
                var1 = !var1;
                var2['value'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'setEligibleSimulcastQuality';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var2 = this;
            var3 = var2.hqSimulcastStreamEligible;
            var3['value'] = var1;
            var2 = var2.lqSimulcastStreamEligible;
            var1 = !var1;
            var2['value'] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getNetworkStats';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.networkQuality;
            var1 = var2.getStats;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getEncoderUsageStats';
        var5['key'] = var7;
        var7 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var15 = this;
                var14 = global;
                var1 = var14.Map;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var21 = var2;
                var1 = new var21[var1](var20);
                var1 = var1 instanceof Object ? var1 : var2;
                var12 = var15.outboundStats;
                var7 = undefined;
                for(var9 in var12)
case 63:
                {
case 64:
                    var6 = var9;
                    var2 = var14.Map;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var21 = var3;
                    var2 = new var21[var2](var20);
                    var5 = var2 instanceof Object ? var2 : var3;
                    var3 = _closure1_slot9;
                    var2 = var15.outboundStats;
                    var4 = var2[var6];
                    var2 = var4.getCodecsUsed;
                    var2 = var2.bind(var4)();
                    var4 = var3.bind(var7)(var2);
                    var3 = var4.bind(var7)();
                    var2 = var3.done;
                    if(var2) { _fun0014_ip = 63; continue _fun0014 }
case 65:
                    var16 = var3.value;
                    var2 = var16.toUpperCase;
                    var17 = var2.bind(var16)();
                    var16 = var5.set;
                    var18 = _closure1_slot12;
                    var2 = var15.outboundStats;
                    var2 = var2[var6];
                    var2 = var2.codecBuckets;
                    var2 = var2[var17];
                    var2 = var18.bind(var7)(var2);
                    var2 = var16.bind(var5)(var17, var2);
                    var16 = var1.set;
                    var2 = var14.parseInt;
                    var2 = var2.bind(var7)(var6);
                    var2 = var16.bind(var1)(var2, var5);
                    var16 = var4.bind(var7)();
                    var2 = var16.done;
                    var3 = var16;
                    if(var2) { _fun0014_ip = 63; continue _fun0014 }
case 66:
                    _fun0014_ip = 65; continue _fun0014;
                }
case 67:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getDecoderUsageStats';
        var5['key'] = var7;
        var7 = function value() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var15 = this;
                var14 = global;
                var1 = var14.Map;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var21 = var2;
                var1 = new var21[var1](var20);
                var1 = var1 instanceof Object ? var1 : var2;
                var12 = var15.inboundStats;
                var7 = undefined;
                for(var9 in var12)
case 63:
                {
case 64:
                    var6 = var9;
                    var2 = var14.Map;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var21 = var3;
                    var2 = new var21[var2](var20);
                    var5 = var2 instanceof Object ? var2 : var3;
                    var3 = _closure1_slot9;
                    var2 = var15.inboundStats;
                    var4 = var2[var6];
                    var2 = var4.getCodecsUsed;
                    var2 = var2.bind(var4)();
                    var4 = var3.bind(var7)(var2);
                    var3 = var4.bind(var7)();
                    var2 = var3.done;
                    if(var2) { _fun0015_ip = 63; continue _fun0015 }
case 65:
                    var16 = var3.value;
                    var2 = var16.toUpperCase;
                    var17 = var2.bind(var16)();
                    var16 = var5.set;
                    var18 = _closure1_slot12;
                    var2 = var15.inboundStats;
                    var2 = var2[var6];
                    var2 = var2.codecBuckets;
                    var2 = var2[var17];
                    var2 = var18.bind(var7)(var2);
                    var2 = var16.bind(var5)(var17, var2);
                    var2 = var1.set;
                    var2 = var2.bind(var1)(var6, var5);
                    var16 = var4.bind(var7)();
                    var2 = var16.done;
                    var3 = var16;
                    if(var2) { _fun0015_ip = 63; continue _fun0015 }
case 68:
                    _fun0015_ip = 65; continue _fun0015;
                }
case 69:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getCodecUsageStats';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var4 = arg1;
                var6 = arg2;
                var2 = this;
                var3 = var2.asymmetricCodecUpdates;
                var1 = var2.symmetricCodecUpdates;
                var3 = var3 > var1;
                var1 = global;
                var1 = var1.Map;
                var5 = var1.prototype;
                var5 = Object.create(var5, {constructor: {value: var1}});
                var17 = var5;
                var1 = new var17[var1](var16);
                var5 = var1 instanceof Object ? var1 : var5;
                var1 = 'sender';
                if(!(var1 !== var4)) { _fun0016_ip = 70; continue _fun0016 }
case 71:
                var1 = 'streamer';
                if(!(var1 !== var4)) { _fun0016_ip = 70; continue _fun0016 }
case 72:
                var1 = var2.getDecoderUsageStats;
                var4 = var1.bind(var2)();
                var1 = var4.has;
                var1 = var1.bind(var4)(var6);
                var8 = var5;
                if(!var1) { _fun0016_ip = 73; continue _fun0016 }
case 74:
                var1 = var4.get;
                var8 = var1.bind(var4)(var6);
case 73:
                var1 = {};
                var1['codec_asymmetric_session'] = var3;
                var7 = var8.get;
                var9 = _closure1_slot0;
                var4 = _closure1_slot2;
                var12 = 9;
                var4 = var4[var12];
                var11 = undefined;
                var4 = var9.bind(var11)(var4);
                var4 = var4.CodecTypes;
                var4 = var4.H264;
                var10 = var7.bind(var8)(var4);
                var7 = null;
                var13 = var7 != var10;
                var9 = var8;
                var8 = 0;
                if(!var13) { _fun0016_ip = 75; continue _fun0016 }
case 76:
                var8 = var10;
case 75:
                var1['codec_h264_decode_duration_sec'] = var8;
                var10 = var9.get;
                var13 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var12];
                var8 = var13.bind(var11)(var8);
                var8 = var8.CodecTypes;
                var8 = var8.H265;
                var10 = var10.bind(var9)(var8);
                var13 = var7 != var10;
                var8 = 0;
                if(!var13) { _fun0016_ip = 77; continue _fun0016 }
case 78:
                var8 = var10;
case 77:
                var1['codec_h265_decode_duration_sec'] = var8;
                var10 = var9.get;
                var13 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var12];
                var8 = var13.bind(var11)(var8);
                var8 = var8.CodecTypes;
                var8 = var8.VP8;
                var10 = var10.bind(var9)(var8);
                var13 = var7 != var10;
                var8 = 0;
                if(!var13) { _fun0016_ip = 79; continue _fun0016 }
case 80:
                var8 = var10;
case 79:
                var1['codec_vp8_decode_duration_sec'] = var8;
                var10 = var9.get;
                var13 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var12];
                var8 = var13.bind(var11)(var8);
                var8 = var8.CodecTypes;
                var8 = var8.VP9;
                var10 = var10.bind(var9)(var8);
                var13 = var7 != var10;
                var8 = 0;
                if(!var13) { _fun0016_ip = 81; continue _fun0016 }
case 82:
                var8 = var10;
case 81:
                var1['codec_vp9_decode_duration_sec'] = var8;
                var10 = var9.get;
                var13 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var12];
                var8 = var13.bind(var11)(var8);
                var8 = var8.CodecTypes;
                var8 = var8.AV1;
                var10 = var10.bind(var9)(var8);
                var13 = var7 != var10;
                var8 = 0;
                if(!var13) { _fun0016_ip = 83; continue _fun0016 }
case 84:
                var8 = var10;
case 83:
                var1['codec_av1_decode_duration_sec'] = var8;
                var8 = var9.get;
                var10 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var12];
                var6 = var10.bind(var11)(var6);
                var6 = var6.CodecTypes;
                var6 = var6.UNKNOWN;
                var6 = var8.bind(var9)(var6);
                var7 = var7 != var6;
                var4 = 0;
                if(!var7) { _fun0016_ip = 85; continue _fun0016 }
case 86:
                var4 = var6;
case 85:
                var1['codec_unknown_decode_duration_sec'] = var4;
                return var1;
case 70:
                var1 = var2.getEncoderUsageStats;
                var6 = var1.bind(var2)();
                var1 = var6.size;
                var2 = 0;
                if(!(var1 > var2)) { _fun0016_ip = 87; continue _fun0016 }
case 88:
                var1 = var6.keys;
                var15 = var1.bind(var6)();
                var4 = new Array(0);
                var16 = var4;
                var14 = 0;
                var1 = arraySpread(var16, var15, var14);
                var1 = var4.sort;
                var1 = var1.bind(var4)();
                var4 = var1[var2];
                var1 = var6.get;
                var5 = var1.bind(var6)(var4);
case 87:
                var1 = {};
                var1['codec_asymmetric_session'] = var3;
                var6 = var5.get;
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var9 = 9;
                var4 = var4[var9];
                var8 = undefined;
                var4 = var7.bind(var8)(var4);
                var4 = var4.CodecTypes;
                var4 = var4.H264;
                var7 = var6.bind(var5)(var4);
                var4 = null;
                var10 = var4 != var7;
                var6 = var5;
                var5 = 0;
                if(!var10) { _fun0016_ip = 89; continue _fun0016 }
case 90:
                var5 = var7;
case 89:
                var1['codec_h264_encode_duration_sec'] = var5;
                var7 = var6.get;
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var9];
                var5 = var10.bind(var8)(var5);
                var5 = var5.CodecTypes;
                var5 = var5.H265;
                var7 = var7.bind(var6)(var5);
                var10 = var4 != var7;
                var5 = 0;
                if(!var10) { _fun0016_ip = 91; continue _fun0016 }
case 92:
                var5 = var7;
case 91:
                var1['codec_h265_encode_duration_sec'] = var5;
                var7 = var6.get;
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var9];
                var5 = var10.bind(var8)(var5);
                var5 = var5.CodecTypes;
                var5 = var5.VP8;
                var7 = var7.bind(var6)(var5);
                var10 = var4 != var7;
                var5 = 0;
                if(!var10) { _fun0016_ip = 93; continue _fun0016 }
case 94:
                var5 = var7;
case 93:
                var1['codec_vp8_encode_duration_sec'] = var5;
                var7 = var6.get;
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var9];
                var5 = var10.bind(var8)(var5);
                var5 = var5.CodecTypes;
                var5 = var5.VP9;
                var7 = var7.bind(var6)(var5);
                var10 = var4 != var7;
                var5 = 0;
                if(!var10) { _fun0016_ip = 95; continue _fun0016 }
case 96:
                var5 = var7;
case 95:
                var1['codec_vp9_encode_duration_sec'] = var5;
                var7 = var6.get;
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var9];
                var5 = var10.bind(var8)(var5);
                var5 = var5.CodecTypes;
                var5 = var5.AV1;
                var7 = var7.bind(var6)(var5);
                var10 = var4 != var7;
                var5 = 0;
                if(!var10) { _fun0016_ip = 97; continue _fun0016 }
case 98:
                var5 = var7;
case 97:
                var1['codec_av1_encode_duration_sec'] = var5;
                var5 = var6.get;
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var9];
                var3 = var7.bind(var8)(var3);
                var3 = var3.CodecTypes;
                var3 = var3.UNKNOWN;
                var3 = var5.bind(var6)(var3);
                var4 = var4 != var3;
                var2 = 0;
                if(!var4) { _fun0016_ip = 99; continue _fun0016 }
case 100:
                var2 = var3;
case 99:
                var1['codec_unknown_encode_duration_sec'] = var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'getCameraDurationStats';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = {};
            var3 = global;
            var6 = var3.Math;
            var5 = var6.round;
            var7 = var2.cameraDuration;
            var4 = var7.totalDurationSeconds;
            var4 = var4.bind(var7)();
            var4 = var5.bind(var6)(var4);
            var1['camera_enabled_duration'] = var4;
            var6 = var3.Math;
            var5 = var6.round;
            var7 = var2.cameraOpportunityDuration;
            var4 = var7.totalDurationSeconds;
            var4 = var4.bind(var7)();
            var4 = var5.bind(var6)(var4);
            var1['camera_send_opportunity_duration'] = var4;
            var5 = var3.Math;
            var4 = var5.round;
            var6 = var2.cameraSendDuration;
            var3 = var6.totalDurationSeconds;
            var3 = var3.bind(var6)();
            var3 = var4.bind(var5)(var3);
            var1['camera_send_duration'] = var3;
            var2 = var2.cameraToggles;
            var1['num_camera_on_toggles'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'getOutboundStats';
        var5['key'] = var7;
        var7 = function value() {
            var3 = this;
            var _closure3_slot0 = var3;
            var1 = new Array(0);
            var _closure3_slot1 = var1;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 10;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var4 = var5.forEach;
            var3 = var3.outboundStats;
            var2 = function(arg1, arg2) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var7 = arg1;
                    var1 = arg2;
                    var _closure4_slot0 = var1;
                    var1 = _closure3_slot0;
                    var3 = var1.connection;
                    var8 = null;
                    var2 = var8 == var3;
                    var1 = undefined;
                    var4 = undefined;
                    if(var2) { _fun0017_ip = 101; continue _fun0017 }
case 41:
                    var2 = var3.getStreamParameters;
                    var4 = var2.bind(var3)();
case 101:
                    var2 = var4.length;
                    var13 = 1;
                    if(!(var2 > var13)) { _fun0017_ip = 72; continue _fun0017 }
case 102:
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                            var2 = arg1;
                            var1 = global;
                            var5 = var1.parseInt;
                            var4 = _closure4_slot0;
                            var1 = undefined;
                            var5 = var5.bind(var1)(var4);
                            var4 = var2.ssrc;
                            if(!(var5 === var4)) { _fun0018_ip = 102; continue _fun0018 }
case 103:
                            var4 = var2.quality;
                            var2 = null;
                            var5 = var2 != var4;
                            var2 = 50;
                            if(!var5) { _fun0018_ip = 28; continue _fun0018 }
case 63:
                            var2 = var4;
case 28:
                            var _closure4_slot1 = var2;
case 102:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
case 72:
                    var5 = [1, 5, 10, 25, 50, 75];
                    var4 = [1, 5, 10, 25, 50, 75, 99];
                    var3 = var7.vmafHistogram;
                    var2 = var3.getReport;
                    var14 = var2.bind(var3)(var5);
                    var3 = var7.psnrHistogram;
                    var2 = var3.getReport;
                    var12 = var2.bind(var3)(var5);
                    var3 = var7.targetBitrateHistogram;
                    var2 = var3.getReport;
                    var16 = var2.bind(var3)(var4);
                    var3 = var7.outboundBandwidthSurplus;
                    var2 = var3.getReport;
                    var5 = var2.bind(var3)(var4);
                    var11 = _closure3_slot0;
                    var3 = var11.videoEntropy;
                    var2 = var3.getReport;
                    var6 = var2.bind(var3)(var4);
                    var3 = var7.aggregationDuration;
                    var2 = 1000;
                    var19 = var3 / var2;
                    var4 = _closure3_slot1;
                    var3 = var4.push;
                    var2 = {};
                    var9 = var11.getStats;
                    var24 = var9.bind(var11)(var7);
                    var25 = var2;
                    var9 = copyDataProperties(var25, var24);
                    var11 = 0;
                    var9 = var19 > var11;
                    var18 = 0;
                    if(!var9) { _fun0017_ip = 104; continue _fun0017 }
case 105:
                    var17 = global;
                    var21 = var17.Math;
                    var20 = var21.round;
                    var22 = var7.targetFrames;
                    var23 = var8 != var22;
                    var17 = 0;
                    if(!var23) { _fun0017_ip = 106; continue _fun0017 }
case 12:
                    var17 = var22;
case 106:
                    var17 = var17 / var19;
                    var18 = var20.bind(var21)(var17);
case 104:
                    var17 = 'target_fps';
                    var2[var17] = var18;
                    var18 = 0;
                    if(!var9) { _fun0017_ip = 6; continue _fun0017 }
case 107:
                    var17 = global;
                    var21 = var17.Math;
                    var20 = var21.round;
                    var17 = var7.targetBytesNetwork;
                    var23 = var8 != var17;
                    var22 = 0;
                    if(!var23) { _fun0017_ip = 108; continue _fun0017 }
case 27:
                    var22 = var17;
case 108:
                    var17 = 8;
                    var17 = var17 * var22;
                    var17 = var17 / var19;
                    var18 = var20.bind(var21)(var17);
case 6:
                    var17 = 'target_bitrate_network';
                    var2[var17] = var18;
                    var17 = var16.count;
                    var17 = var17 > var11;
                    var18 = null;
                    if(!var17) { _fun0017_ip = 109; continue _fun0017 }
case 110:
                    var17 = var16.percentiles;
                    var18 = var17[var13];
case 109:
                    var17 = 'target_bitrate_network_percentile1';
                    var2[var17] = var18;
                    var17 = var16.count;
                    var17 = var17 > var11;
                    var18 = null;
                    if(!var17) { _fun0017_ip = 111; continue _fun0017 }
case 112:
                    var20 = var16.percentiles;
                    var17 = 5;
                    var18 = var20[var17];
case 111:
                    var17 = 'target_bitrate_network_percentile5';
                    var2[var17] = var18;
                    var17 = var16.count;
                    var17 = var17 > var11;
                    var18 = null;
                    if(!var17) { _fun0017_ip = 113; continue _fun0017 }
case 114:
                    var20 = var16.percentiles;
                    var17 = 10;
                    var18 = var20[var17];
case 113:
                    var17 = 'target_bitrate_network_percentile10';
                    var2[var17] = var18;
                    var17 = var16.count;
                    var17 = var17 > var11;
                    var18 = null;
                    if(!var17) { _fun0017_ip = 115; continue _fun0017 }
case 70:
                    var20 = var16.percentiles;
                    var17 = 25;
                    var18 = var20[var17];
case 115:
                    var17 = 'target_bitrate_network_percentile25';
                    var2[var17] = var18;
                    var17 = var16.count;
                    var17 = var17 > var11;
                    var18 = null;
                    if(!var17) { _fun0017_ip = 116; continue _fun0017 }
case 117:
                    var20 = var16.percentiles;
                    var17 = 50;
                    var18 = var20[var17];
case 116:
                    var17 = 'target_bitrate_network_percentile50';
                    var2[var17] = var18;
                    var17 = var16.count;
                    var17 = var17 > var11;
                    var18 = null;
                    if(!var17) { _fun0017_ip = 118; continue _fun0017 }
case 119:
                    var20 = var16.percentiles;
                    var17 = 75;
                    var18 = var20[var17];
case 118:
                    var17 = 'target_bitrate_network_percentile75';
                    var2[var17] = var18;
                    var17 = var16.count;
                    var18 = var17 > var11;
                    var17 = null;
                    if(!var18) { _fun0017_ip = 120; continue _fun0017 }
case 121:
                    var18 = var16.percentiles;
                    var16 = 99;
                    var17 = var18[var16];
case 120:
                    var16 = 'target_bitrate_network_percentile99';
                    var2[var16] = var17;
                    var17 = 0;
                    if(!var9) { _fun0017_ip = 122; continue _fun0017 }
case 123:
                    var16 = global;
                    var20 = var16.Math;
                    var18 = var20.round;
                    var16 = var7.targetBytesMax;
                    var22 = var8 != var16;
                    var21 = 0;
                    if(!var22) { _fun0017_ip = 124; continue _fun0017 }
case 125:
                    var21 = var16;
case 124:
                    var16 = 8;
                    var16 = var16 * var21;
                    var16 = var16 / var19;
                    var17 = var18.bind(var20)(var16);
case 122:
                    var16 = 'target_bitrate_max';
                    var2[var16] = var17;
                    var16 = 0;
                    if(!var9) { _fun0017_ip = 93; continue _fun0017 }
case 126:
                    var9 = global;
                    var18 = var9.Math;
                    var17 = var18.round;
                    var9 = var7.outboundBytesAvailable;
                    var21 = var8 != var9;
                    var20 = 0;
                    if(!var21) { _fun0017_ip = 127; continue _fun0017 }
case 128:
                    var20 = var9;
case 127:
                    var9 = 8;
                    var9 = var9 * var20;
                    var9 = var9 / var19;
                    var16 = var17.bind(var18)(var9);
case 93:
                    var9 = 'outbound_bandwidth_estimate';
                    var2[var9] = var16;
                    var9 = var5.count;
                    var9 = var9 > var11;
                    var16 = null;
                    if(!var9) { _fun0017_ip = 129; continue _fun0017 }
case 130:
                    var9 = var5.percentiles;
                    var16 = var9[var13];
case 129:
                    var9 = 'outbound_bandwidth_surplus_percentile1';
                    var2[var9] = var16;
                    var9 = var5.count;
                    var9 = var9 > var11;
                    var16 = null;
                    if(!var9) { _fun0017_ip = 131; continue _fun0017 }
case 132:
                    var17 = var5.percentiles;
                    var9 = 5;
                    var16 = var17[var9];
case 131:
                    var9 = 'outbound_bandwidth_surplus_percentile5';
                    var2[var9] = var16;
                    var9 = var5.count;
                    var9 = var9 > var11;
                    var16 = null;
                    if(!var9) { _fun0017_ip = 133; continue _fun0017 }
case 134:
                    var17 = var5.percentiles;
                    var9 = 10;
                    var16 = var17[var9];
case 133:
                    var9 = 'outbound_bandwidth_surplus_percentile10';
                    var2[var9] = var16;
                    var9 = var5.count;
                    var9 = var9 > var11;
                    var16 = null;
                    if(!var9) { _fun0017_ip = 135; continue _fun0017 }
case 136:
                    var17 = var5.percentiles;
                    var9 = 25;
                    var16 = var17[var9];
case 135:
                    var9 = 'outbound_bandwidth_surplus_percentile25';
                    var2[var9] = var16;
                    var9 = var5.count;
                    var9 = var9 > var11;
                    var16 = null;
                    if(!var9) { _fun0017_ip = 137; continue _fun0017 }
case 138:
                    var17 = var5.percentiles;
                    var9 = 50;
                    var16 = var17[var9];
case 137:
                    var9 = 'outbound_bandwidth_surplus_percentile50';
                    var2[var9] = var16;
                    var9 = var5.count;
                    var9 = var9 > var11;
                    var16 = null;
                    if(!var9) { _fun0017_ip = 139; continue _fun0017 }
case 140:
                    var17 = var5.percentiles;
                    var9 = 75;
                    var16 = var17[var9];
case 139:
                    var9 = 'outbound_bandwidth_surplus_percentile75';
                    var2[var9] = var16;
                    var9 = var5.count;
                    var16 = var9 > var11;
                    var9 = null;
                    if(!var16) { _fun0017_ip = 141; continue _fun0017 }
case 142:
                    var16 = var5.percentiles;
                    var5 = 99;
                    var9 = var16[var5];
case 141:
                    var5 = 'outbound_bandwidth_surplus_percentile99';
                    var2[var5] = var9;
                    var17 = _closure1_slot12;
                    var20 = var7.encoderBuckets;
                    var19 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var9 = 9;
                    var18 = var16[var9];
                    var18 = var19.bind(var1)(var18);
                    var18 = var18.Encoders;
                    var18 = var18.NVIDIA_CUDA;
                    var18 = var20[var18];
                    var20 = var17.bind(var1)(var18);
                    var18 = 'duration_encoder_nvidia_cuda';
                    var2[var18] = var20;
                    var20 = var7.encoderBuckets;
                    var18 = var16[var9];
                    var18 = var19.bind(var1)(var18);
                    var18 = var18.Encoders;
                    var18 = var18.NVIDIA_DIRECT_3D;
                    var18 = var20[var18];
                    var20 = var17.bind(var1)(var18);
                    var18 = 'duration_encoder_nvidia_direct3d';
                    var2[var18] = var20;
                    var20 = var7.encoderBuckets;
                    var18 = var16[var9];
                    var18 = var19.bind(var1)(var18);
                    var18 = var18.Encoders;
                    var18 = var18.OPENH264;
                    var18 = var20[var18];
                    var20 = var17.bind(var1)(var18);
                    var18 = 'duration_encoder_openh264';
                    var2[var18] = var20;
                    var20 = var7.encoderBuckets;
                    var18 = var16[var9];
                    var18 = var19.bind(var1)(var18);
                    var18 = var18.Encoders;
                    var18 = var18.VIDEOTOOLBOX;
                    var18 = var20[var18];
                    var20 = var17.bind(var1)(var18);
                    var18 = 'duration_encoder_videotoolbox';
                    var2[var18] = var20;
                    var20 = var7.encoderBuckets;
                    var18 = var16[var9];
                    var18 = var19.bind(var1)(var18);
                    var18 = var18.Encoders;
                    var18 = var18.AMD_DIRECT_3D;
                    var18 = var20[var18];
                    var20 = var17.bind(var1)(var18);
                    var18 = 'duration_encoder_amd_direct3d';
                    var2[var18] = var20;
                    var20 = var7.encoderBuckets;
                    var18 = var16[var9];
                    var18 = var19.bind(var1)(var18);
                    var18 = var18.Encoders;
                    var18 = var18.AMD_VAAPI;
                    var18 = var20[var18];
                    var20 = var17.bind(var1)(var18);
                    var18 = 'duration_encoder_amd_vaapi';
                    var2[var18] = var20;
                    var20 = var7.encoderBuckets;
                    var18 = var16[var9];
                    var18 = var19.bind(var1)(var18);
                    var18 = var18.Encoders;
                    var18 = var18.INTEL;
                    var18 = var20[var18];
                    var20 = var17.bind(var1)(var18);
                    var18 = 'duration_encoder_intel';
                    var2[var18] = var20;
                    var20 = var7.encoderBuckets;
                    var18 = var16[var9];
                    var18 = var19.bind(var1)(var18);
                    var18 = var18.Encoders;
                    var18 = var18.INTEL_DIRECT_3D;
                    var18 = var20[var18];
                    var20 = var17.bind(var1)(var18);
                    var18 = 'duration_encoder_intel_direct3d';
                    var2[var18] = var20;
                    var20 = var7.encoderBuckets;
                    var18 = var16[var9];
                    var18 = var19.bind(var1)(var18);
                    var18 = var18.Encoders;
                    var18 = var18.VP8_LIBVPX;
                    var18 = var20[var18];
                    var20 = var17.bind(var1)(var18);
                    var18 = 'duration_encoder_vp8_libvpx';
                    var2[var18] = var20;
                    var20 = var7.encoderBuckets;
                    var18 = var16[var9];
                    var18 = var19.bind(var1)(var18);
                    var18 = var18.Encoders;
                    var18 = var18.UNCATEGORIZED;
                    var18 = var20[var18];
                    var20 = var17.bind(var1)(var18);
                    var18 = 'duration_encoder_uncategorized';
                    var2[var18] = var20;
                    var18 = var7.encoderBuckets;
                    var16 = var16[var9];
                    var16 = var19.bind(var1)(var16);
                    var16 = var16.Encoders;
                    var16 = var16.UNKNOWN;
                    var16 = var18[var16];
                    var17 = var17.bind(var1)(var16);
                    var16 = 'duration_encoder_unknown';
                    var2[var16] = var17;
                    var16 = _closure4_slot1;
                    var15 = 'quality';
                    var2[var15] = var16;
                    var16 = var7.averageEncodeTime;
                    var15 = 'average_encode_time_ms';
                    var2[var15] = var16;
                    var15 = var7.vmafScoreNum;
                    var15 = var15 > var11;
                    var16 = null;
                    if(!var15) { _fun0017_ip = 143; continue _fun0017 }
case 144:
                    var17 = var7.vmafScoreSum;
                    var15 = var7.vmafScoreNum;
                    var16 = var17 / var15;
case 143:
                    var15 = 'average_encoder_vmaf_score';
                    var2[var15] = var16;
                    var15 = var14.count;
                    var15 = var15 > var11;
                    var16 = null;
                    if(!var15) { _fun0017_ip = 145; continue _fun0017 }
case 146:
                    var15 = var14.percentiles;
                    var16 = var15[var13];
case 145:
                    var15 = 'encoder_vmaf_score_percentile1';
                    var2[var15] = var16;
                    var15 = var14.count;
                    var15 = var15 > var11;
                    var16 = null;
                    if(!var15) { _fun0017_ip = 147; continue _fun0017 }
case 148:
                    var17 = var14.percentiles;
                    var15 = 5;
                    var16 = var17[var15];
case 147:
                    var15 = 'encoder_vmaf_score_percentile5';
                    var2[var15] = var16;
                    var15 = var14.count;
                    var15 = var15 > var11;
                    var16 = null;
                    if(!var15) { _fun0017_ip = 149; continue _fun0017 }
case 150:
                    var17 = var14.percentiles;
                    var15 = 10;
                    var16 = var17[var15];
case 149:
                    var15 = 'encoder_vmaf_score_percentile10';
                    var2[var15] = var16;
                    var15 = var14.count;
                    var15 = var15 > var11;
                    var16 = null;
                    if(!var15) { _fun0017_ip = 151; continue _fun0017 }
case 152:
                    var17 = var14.percentiles;
                    var15 = 25;
                    var16 = var17[var15];
case 151:
                    var15 = 'encoder_vmaf_score_percentile25';
                    var2[var15] = var16;
                    var15 = var14.count;
                    var15 = var15 > var11;
                    var16 = null;
                    if(!var15) { _fun0017_ip = 153; continue _fun0017 }
case 154:
                    var17 = var14.percentiles;
                    var15 = 50;
                    var16 = var17[var15];
case 153:
                    var15 = 'encoder_vmaf_score_percentile50';
                    var2[var15] = var16;
                    var15 = var14.count;
                    var16 = var15 > var11;
                    var15 = null;
                    if(!var16) { _fun0017_ip = 155; continue _fun0017 }
case 156:
                    var16 = var14.percentiles;
                    var14 = 75;
                    var15 = var16[var14];
case 155:
                    var14 = 'encoder_vmaf_score_percentile75';
                    var2[var14] = var15;
                    var14 = var7.psnrDbNum;
                    var14 = var14 > var11;
                    var15 = null;
                    if(!var14) { _fun0017_ip = 157; continue _fun0017 }
case 158:
                    var16 = var7.psnrDbSum;
                    var14 = var7.psnrDbNum;
                    var15 = var16 / var14;
case 157:
                    var14 = 'average_encoder_psnr_db';
                    var2[var14] = var15;
                    var14 = var12.count;
                    var14 = var14 > var11;
                    var15 = null;
                    if(!var14) { _fun0017_ip = 159; continue _fun0017 }
case 160:
                    var14 = var12.percentiles;
                    var15 = var14[var13];
case 159:
                    var14 = 'encoder_psnr_db_percentile1';
                    var2[var14] = var15;
                    var14 = var12.count;
                    var14 = var14 > var11;
                    var15 = null;
                    if(!var14) { _fun0017_ip = 161; continue _fun0017 }
case 162:
                    var16 = var12.percentiles;
                    var14 = 5;
                    var15 = var16[var14];
case 161:
                    var14 = 'encoder_psnr_db_percentile5';
                    var2[var14] = var15;
                    var14 = var12.count;
                    var14 = var14 > var11;
                    var15 = null;
                    if(!var14) { _fun0017_ip = 163; continue _fun0017 }
case 164:
                    var16 = var12.percentiles;
                    var14 = 10;
                    var15 = var16[var14];
case 163:
                    var14 = 'encoder_psnr_db_percentile10';
                    var2[var14] = var15;
                    var14 = var12.count;
                    var14 = var14 > var11;
                    var15 = null;
                    if(!var14) { _fun0017_ip = 165; continue _fun0017 }
case 166:
                    var16 = var12.percentiles;
                    var14 = 25;
                    var15 = var16[var14];
case 165:
                    var14 = 'encoder_psnr_db_percentile25';
                    var2[var14] = var15;
                    var14 = var12.count;
                    var14 = var14 > var11;
                    var15 = null;
                    if(!var14) { _fun0017_ip = 167; continue _fun0017 }
case 168:
                    var16 = var12.percentiles;
                    var14 = 50;
                    var15 = var16[var14];
case 167:
                    var14 = 'encoder_psnr_db_percentile50';
                    var2[var14] = var15;
                    var14 = var12.count;
                    var15 = var14 > var11;
                    var14 = null;
                    if(!var15) { _fun0017_ip = 169; continue _fun0017 }
case 170:
                    var15 = var12.percentiles;
                    var12 = 75;
                    var14 = var15[var12];
case 169:
                    var12 = 'encoder_psnr_db_percentile75';
                    var2[var12] = var14;
                    var12 = var7.outboundSinkWantNum;
                    var12 = var12 > var11;
                    var14 = null;
                    if(!var12) { _fun0017_ip = 171; continue _fun0017 }
case 172:
                    var15 = var7.outboundSinkWantSum;
                    var12 = var7.outboundSinkWantNum;
                    var14 = var15 / var12;
case 171:
                    var12 = 'average_outbound_want';
                    var2[var12] = var14;
                    var14 = var7.framesDroppedRateLimiter;
                    var12 = 'frames_dropped_rate_limiter';
                    var2[var12] = var14;
                    var14 = var7.framesDroppedEncoderQueue;
                    var12 = 'frames_dropped_encoder_queue';
                    var2[var12] = var14;
                    var14 = var7.framesDroppedCongestionWindow;
                    var12 = 'frames_dropped_congestion_window';
                    var2[var12] = var14;
                    var14 = var7.framesDroppedEncoder;
                    var12 = 'frames_dropped_encoder';
                    var2[var12] = var14;
                    var12 = _closure1_slot12;
                    var10 = _closure3_slot0;
                    var15 = var10.hqSimulcastStreamEncoded;
                    var14 = var15.totalDurationSeconds;
                    var14 = var14.bind(var15)();
                    var15 = var12.bind(var1)(var14);
                    var14 = 'duration_hq_simulcast_stream_encoded';
                    var2[var14] = var15;
                    var15 = var10.lqSimulcastStreamEncoded;
                    var14 = var15.totalDurationSeconds;
                    var14 = var14.bind(var15)();
                    var15 = var12.bind(var1)(var14);
                    var14 = 'duration_lq_simulcast_stream_encoded';
                    var2[var14] = var15;
                    var15 = var10.bothSimulcastStreamsEncoded;
                    var14 = var15.totalDurationSeconds;
                    var14 = var14.bind(var15)();
                    var15 = var12.bind(var1)(var14);
                    var14 = 'duration_both_simulcast_streams_encoded';
                    var2[var14] = var15;
                    var15 = var10.bandwidthLimitedFramerate;
                    var14 = var15.totalDurationSeconds;
                    var14 = var14.bind(var15)();
                    var15 = var12.bind(var1)(var14);
                    var14 = 'duration_fps_bandwidth_limited';
                    var2[var14] = var15;
                    var14 = var10.bandwidthLimitedResolution;
                    var10 = var14.totalDurationSeconds;
                    var10 = var10.bind(var14)();
                    var12 = var12.bind(var1)(var10);
                    var10 = 'duration_resolution_bandwidth_limited';
                    var2[var10] = var12;
                    var10 = var6.count;
                    var10 = var10 > var11;
                    var12 = null;
                    if(!var10) { _fun0017_ip = 173; continue _fun0017 }
case 174:
                    var10 = var6.percentiles;
                    var12 = var10[var13];
case 173:
                    var10 = 'video_entropy_percentile1';
                    var2[var10] = var12;
                    var10 = var6.count;
                    var10 = var10 > var11;
                    var12 = null;
                    if(!var10) { _fun0017_ip = 175; continue _fun0017 }
case 176:
                    var13 = var6.percentiles;
                    var10 = 5;
                    var12 = var13[var10];
case 175:
                    var10 = 'video_entropy_percentile5';
                    var2[var10] = var12;
                    var10 = var6.count;
                    var10 = var10 > var11;
                    var12 = null;
                    if(!var10) { _fun0017_ip = 177; continue _fun0017 }
case 178:
                    var13 = var6.percentiles;
                    var10 = 10;
                    var12 = var13[var10];
case 177:
                    var10 = 'video_entropy_percentile10';
                    var2[var10] = var12;
                    var10 = var6.count;
                    var10 = var10 > var11;
                    var12 = null;
                    if(!var10) { _fun0017_ip = 179; continue _fun0017 }
case 180:
                    var13 = var6.percentiles;
                    var10 = 25;
                    var12 = var13[var10];
case 179:
                    var10 = 'video_entropy_percentile25';
                    var2[var10] = var12;
                    var10 = var6.count;
                    var10 = var10 > var11;
                    var12 = null;
                    if(!var10) { _fun0017_ip = 181; continue _fun0017 }
case 182:
                    var13 = var6.percentiles;
                    var10 = 50;
                    var12 = var13[var10];
case 181:
                    var10 = 'video_entropy_percentile50';
                    var2[var10] = var12;
                    var10 = var6.count;
                    var10 = var10 > var11;
                    var12 = null;
                    if(!var10) { _fun0017_ip = 183; continue _fun0017 }
case 184:
                    var13 = var6.percentiles;
                    var10 = 75;
                    var12 = var13[var10];
case 183:
                    var10 = 'video_entropy_percentile75';
                    var2[var10] = var12;
                    var10 = var6.count;
                    var10 = var10 > var11;
                    var8 = null;
                    if(!var10) { _fun0017_ip = 185; continue _fun0017 }
case 186:
                    var10 = var6.percentiles;
                    var6 = 99;
                    var8 = var10[var6];
case 185:
                    var6 = 'video_entropy_percentile99';
                    var2[var6] = var8;
                    var6 = _closure1_slot12;
                    var11 = var7.encoderBuckets;
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var10 = var5[var9];
                    var10 = var8.bind(var1)(var10);
                    var10 = var10.Encoders;
                    var10 = var10.EXYNOS;
                    var10 = var11[var10];
                    var11 = var6.bind(var1)(var10);
                    var10 = 'duration_encoder_exynos';
                    var2[var10] = var11;
                    var11 = var7.encoderBuckets;
                    var10 = var5[var9];
                    var10 = var8.bind(var1)(var10);
                    var10 = var10.Encoders;
                    var10 = var10.QUALCOMM;
                    var10 = var11[var10];
                    var11 = var6.bind(var1)(var10);
                    var10 = 'duration_encoder_qualcomm';
                    var2[var10] = var11;
                    var11 = var7.encoderBuckets;
                    var10 = var5[var9];
                    var10 = var8.bind(var1)(var10);
                    var10 = var10.Encoders;
                    var10 = var10.MEDIATEK;
                    var10 = var11[var10];
                    var11 = var6.bind(var1)(var10);
                    var10 = 'duration_encoder_mediatek';
                    var2[var10] = var11;
                    var7 = var7.encoderBuckets;
                    var5 = var5[var9];
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.Encoders;
                    var5 = var5.WMF_SW;
                    var5 = var7[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = 'duration_encoder_wmf_sw';
                    var2[var5] = var6;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'getInboundStats';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var2 = var3.getStats;
            var4 = var3.inboundStats;
            var1 = arg1;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'destroyUser';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = this;
            var2 = var1.inboundStats;
            var1 = arg1;
            var1 = delete var2[var1];
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'getInboundParticipants';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.keys;
            var1 = this;
            var1 = var1.inboundStats;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'updateSendState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var2 = arg1;
                var1 = this;
                var3 = var2.paused;
                var4 = null;
                if(!(var4 != var3)) { _fun0019_ip = 56; continue _fun0019 }
case 187:
                var5 = var1.paused;
                var3 = var2.paused;
                var5['value'] = var3;
case 56:
                var3 = var2.receivers;
                if(!(var4 != var3)) { _fun0019_ip = 35; continue _fun0019 }
case 2:
                var3 = var1.zeroReceivers;
                var4 = var2.receivers;
                var2 = 0;
                var2 = var2 === var4;
                var3['value'] = var2;
case 35:
                var2 = var1.paused;
                var3 = var2.value;
                if(var3) { _fun0019_ip = 53; continue _fun0019 }
case 188:
                var2 = var1.zeroReceivers;
                var3 = var2.value;
case 53:
                var2 = var1.videoStopped;
                var2 = var2.value;
                var4 = var1.videoStopped;
                var4['value'] = var3;
                if(!(var3 !== var2)) { _fun0019_ip = 189; continue _fun0019 }
case 190:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 10;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.forEach;
                var2 = var1.outboundStats;
                var1 = function(arg1) {
                    var1 = new Array(0);
                    var2 = arg1;
                    var2['statsWindow'] = var1;
                    return var1;
                };
                var1 = var3.bind(var4)(var2, var1);
case 189:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[24] = var5;
        var5 = {};
        var7 = 'getStats';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var3 = arg1;
                var4 = this;
                var1 = null;
                if(!(var1 != var3)) { _fun0020_ip = 191; continue _fun0020 }
case 192:
                var29 = global;
                var5 = var29.Number;
                var2 = var4.streamStart;
                var38 = undefined;
                var6 = var5.bind(var38)(var2);
                var2 = var4.streamEnd;
                if(!(var1 == var2)) { _fun0020_ip = 30; continue _fun0020 }
case 2:
                var5 = var4.timestampProducer;
                var2 = var5.now;
                var2 = var2.bind(var5)();
                var5 = var2 - var6;
                _fun0020_ip = 72; continue _fun0020;
case 30:
                var2 = var4.streamEnd;
                var5 = var2 - var6;
case 72:
                var7 = var29.Math;
                var6 = var7.max;
                var2 = var3.aggregationDuration;
                var22 = 0;
                var2 = var6.bind(var7)(var2, var22);
                var6 = 1000;
                var31 = var2 / var6;
                var8 = [1, 5, 10, 25, 50, 75];
                var7 = var3.fpsHistogram;
                var2 = var7.getReport;
                var9 = var2.bind(var7)(var8);
                var10 = var3.bitrateHistogram;
                var7 = var10.getReport;
                var2 = [1, 5, 10, 25, 50, 75, 99];
                var15 = var7.bind(var10)(var2);
                var7 = var3.resolutionHistogram;
                var2 = var7.getReport;
                var16 = var2.bind(var7)(var8);
                var8 = var3.inboundBitrateEstimateHistogram;
                var7 = var8.getReport;
                var2 = [1, 5, 10, 25, 50, 75, 99];
                var8 = var7.bind(var8)(var2);
                var10 = var3.localWantHistogram;
                var7 = var10.getReport;
                var2 = [1, 5, 10, 25, 50, 75, 90, 95];
                var7 = var7.bind(var10)(var2);
                var10 = var3.systemResources;
                var2 = var10.getStats;
                var2 = var2.bind(var10)();
                var28 = {};
                var11 = var29.Math;
                var10 = var11.floor;
                var5 = var5 / var6;
                var5 = var10.bind(var11)(var5);
                var28['duration'] = var5;
                var14 = _closure1_slot12;
                var5 = var14.bind(var38)(var31);
                var28['duration_aggregation'] = var5;
                var10 = var3.videoStoppedDuration;
                var5 = var10.asSeconds;
                var5 = var5.bind(var10)();
                var5 = var14.bind(var38)(var5);
                var28['duration_stopped_receiving'] = var5;
                var10 = var3.bitrateBuckets;
                var5 = 8000000;
                var5 = var10[var5];
                var5 = var14.bind(var38)(var5);
                var28['duration_stream_under_8mbps'] = var5;
                var10 = var3.bitrateBuckets;
                var5 = 7000000;
                var5 = var10[var5];
                var5 = var14.bind(var38)(var5);
                var28['duration_stream_under_7mbps'] = var5;
                var10 = var3.bitrateBuckets;
                var5 = 6000000;
                var5 = var10[var5];
                var5 = var14.bind(var38)(var5);
                var28['duration_stream_under_6mbps'] = var5;
                var10 = var3.bitrateBuckets;
                var5 = 5000000;
                var5 = var10[var5];
                var5 = var14.bind(var38)(var5);
                var28['duration_stream_under_5mbps'] = var5;
                var10 = var3.bitrateBuckets;
                var5 = 4000000;
                var5 = var10[var5];
                var5 = var14.bind(var38)(var5);
                var28['duration_stream_under_4mbps'] = var5;
                var10 = var3.bitrateBuckets;
                var5 = 3000000;
                var5 = var10[var5];
                var5 = var14.bind(var38)(var5);
                var28['duration_stream_under_3mbps'] = var5;
                var10 = var3.bitrateBuckets;
                var5 = 2000000;
                var5 = var10[var5];
                var5 = var14.bind(var38)(var5);
                var28['duration_stream_under_2mbps'] = var5;
                var10 = var3.bitrateBuckets;
                var5 = 1500000;
                var5 = var10[var5];
                var5 = var14.bind(var38)(var5);
                var28['duration_stream_under_1_5mbps'] = var5;
                var10 = var3.bitrateBuckets;
                var5 = 1000000;
                var5 = var10[var5];
                var5 = var14.bind(var38)(var5);
                var28['duration_stream_under_1mbps'] = var5;
                var10 = var3.bitrateBuckets;
                var5 = 500000;
                var5 = var10[var5];
                var5 = var14.bind(var38)(var5);
                var28['duration_stream_under_0_5mbps'] = var5;
                var5 = var3.bitrateBuckets;
                var5 = var5[var22];
                var5 = var14.bind(var38)(var5);
                var28['duration_stream_at_0mbps'] = var5;
                var10 = var3.fpsBuckets;
                var5 = 60;
                var5 = var10[var5];
                var5 = var14.bind(var38)(var5);
                var28['duration_fps_under_60'] = var5;
                var10 = var3.fpsBuckets;
                var5 = 55;
                var5 = var10[var5];
                var5 = var14.bind(var38)(var5);
                var28['duration_fps_under_55'] = var5;
                var5 = var3.fpsBuckets;
                var10 = 50;
                var5 = var5[var10];
                var5 = var14.bind(var38)(var5);
                var28['duration_fps_under_50'] = var5;
                var11 = var3.fpsBuckets;
                var5 = 45;
                var5 = var11[var5];
                var5 = var14.bind(var38)(var5);
                var28['duration_fps_under_45'] = var5;
                var11 = var3.fpsBuckets;
                var5 = 40;
                var5 = var11[var5];
                var5 = var14.bind(var38)(var5);
                var28['duration_fps_under_40'] = var5;
                var11 = var3.fpsBuckets;
                var5 = 35;
                var5 = var11[var5];
                var5 = var14.bind(var38)(var5);
                var28['duration_fps_under_35'] = var5;
                var11 = var3.fpsBuckets;
                var5 = 30;
                var5 = var11[var5];
                var5 = var14.bind(var38)(var5);
                var28['duration_fps_under_30'] = var5;
                var5 = var3.fpsBuckets;
                var11 = 25;
                var5 = var5[var11];
                var5 = var14.bind(var38)(var5);
                var28['duration_fps_under_25'] = var5;
                var12 = var3.fpsBuckets;
                var5 = 20;
                var5 = var12[var5];
                var5 = var14.bind(var38)(var5);
                var28['duration_fps_under_20'] = var5;
                var12 = var3.fpsBuckets;
                var5 = 15;
                var5 = var12[var5];
                var5 = var14.bind(var38)(var5);
                var28['duration_fps_under_15'] = var5;
                var5 = var3.fpsBuckets;
                var12 = 10;
                var5 = var5[var12];
                var5 = var14.bind(var38)(var5);
                var28['duration_fps_under_10'] = var5;
                var5 = var3.fpsBuckets;
                var13 = 5;
                var5 = var5[var13];
                var5 = var14.bind(var38)(var5);
                var28['duration_fps_under_5'] = var5;
                var5 = var3.fpsBuckets;
                var5 = var5[var22];
                var5 = var14.bind(var38)(var5);
                var28['duration_fps_at_0'] = var5;
                var5 = var3.intervalTotal;
                var14 = var5 > var22;
                var5 = 0;
                if(!var14) { _fun0020_ip = 193; continue _fun0020 }
case 194:
                var18 = var29.Math;
                var17 = var18.round;
                var19 = var3.resolutionTotal;
                var14 = var3.intervalTotal;
                var14 = var19 / var14;
                var5 = var17.bind(var18)(var14);
case 193:
                var28['avg_resolution'] = var5;
                var5 = var3.intervalTotal;
                var14 = var5 > var22;
                var5 = 0;
                if(!var14) { _fun0020_ip = 195; continue _fun0020 }
case 196:
                var18 = var29.Math;
                var17 = var18.round;
                var19 = var3.minorResolutionTotal;
                var14 = var3.intervalTotal;
                var14 = var19 / var14;
                var5 = var17.bind(var18)(var14);
case 195:
                var28['avg_minor_resolution'] = var5;
                var5 = var3.intervalTotal;
                var14 = var5 > var22;
                var5 = 0;
                if(!var14) { _fun0020_ip = 197; continue _fun0020 }
case 198:
                var18 = var29.Math;
                var17 = var18.round;
                var19 = var3.majorResolutionTotal;
                var14 = var3.intervalTotal;
                var14 = var19 / var14;
                var5 = var17.bind(var18)(var14);
case 197:
                var28['avg_major_resolution'] = var5;
                var5 = _closure1_slot12;
                var17 = var3.resolutionBuckets;
                var14 = 720;
                var14 = var17[var14];
                var14 = var5.bind(var38)(var14);
                var28['duration_resolution_under_720'] = var14;
                var17 = var3.resolutionBuckets;
                var14 = 480;
                var14 = var17[var14];
                var14 = var5.bind(var38)(var14);
                var28['duration_resolution_under_480'] = var14;
                var17 = var3.resolutionBuckets;
                var14 = 360;
                var14 = var17[var14];
                var14 = var5.bind(var38)(var14);
                var28['duration_resolution_under_360'] = var14;
                var14 = var4.pausedCount;
                var28['num_pauses'] = var14;
                var17 = var4.paused;
                var14 = var17.totalDuration;
                var14 = var14.bind(var17)();
                var14 = var14 / var6;
                var14 = var5.bind(var38)(var14);
                var28['duration_paused'] = var14;
                var17 = var4.zeroReceivers;
                var14 = var17.totalDuration;
                var14 = var14.bind(var17)();
                var14 = var14 / var6;
                var14 = var5.bind(var38)(var14);
                var28['duration_zero_receivers'] = var14;
                var17 = var4.videoStopped;
                var14 = var17.totalDuration;
                var14 = var14.bind(var17)();
                var14 = var14 / var6;
                var14 = var5.bind(var38)(var14);
                var28['duration_video_stopped'] = var14;
                var17 = var4.hqSimulcastStreamWatched;
                var14 = var17.totalDurationSeconds;
                var14 = var14.bind(var17)();
                var14 = var5.bind(var38)(var14);
                var28['duration_hq_simulcast_stream_watched'] = var14;
                var17 = var4.lqSimulcastStreamWatched;
                var14 = var17.totalDurationSeconds;
                var14 = var14.bind(var17)();
                var14 = var5.bind(var38)(var14);
                var28['duration_lq_simulcast_stream_watched'] = var14;
                var17 = var4.hqSimulcastStreamEligible;
                var14 = var17.totalDurationSeconds;
                var14 = var14.bind(var17)();
                var14 = var5.bind(var38)(var14);
                var28['duration_hq_simulcast_stream_eligible'] = var14;
                var17 = var4.lqSimulcastStreamEligible;
                var14 = var17.totalDurationSeconds;
                var14 = var14.bind(var17)();
                var14 = var5.bind(var38)(var14);
                var28['duration_lq_simulcast_stream_eligible'] = var14;
                var14 = var4.simulcastQualityChanges;
                var28['num_quality_changes'] = var14;
                var17 = var4.windowOccluded;
                var14 = var17.totalDurationSeconds;
                var14 = var14.bind(var17)();
                var14 = var5.bind(var38)(var14);
                var28['duration_window_occluded'] = var14;
                var17 = var4.videoStoppedForOcclusion;
                var14 = var17.totalDurationSeconds;
                var14 = var14.bind(var17)();
                var14 = var5.bind(var38)(var14);
                var28['duration_incoming_video_stopped_for_occlusion'] = var14;
                var14 = var4.numWindowOcclusionChanges;
                var28['num_window_occlusion_changes'] = var14;
                var17 = var9.percentiles;
                var14 = 1;
                var17 = var17[var14];
                var28['fps_percentile1'] = var17;
                var17 = var9.percentiles;
                var17 = var17[var13];
                var28['fps_percentile5'] = var17;
                var17 = var9.percentiles;
                var17 = var17[var12];
                var28['fps_percentile10'] = var17;
                var17 = var9.percentiles;
                var17 = var17[var11];
                var28['fps_percentile25'] = var17;
                var17 = var9.percentiles;
                var17 = var17[var10];
                var28['fps_percentile50'] = var17;
                var17 = var9.percentiles;
                var9 = 75;
                var17 = var17[var9];
                var28['fps_percentile75'] = var17;
                var17 = var15.percentiles;
                var17 = var17[var14];
                var28['bitrate_percentile1'] = var17;
                var17 = var15.percentiles;
                var17 = var17[var13];
                var28['bitrate_percentile5'] = var17;
                var17 = var15.percentiles;
                var17 = var17[var12];
                var28['bitrate_percentile10'] = var17;
                var17 = var15.percentiles;
                var17 = var17[var11];
                var28['bitrate_percentile25'] = var17;
                var17 = var15.percentiles;
                var17 = var17[var10];
                var28['bitrate_percentile50'] = var17;
                var17 = var15.percentiles;
                var17 = var17[var9];
                var28['bitrate_percentile75'] = var17;
                var17 = var15.percentiles;
                var15 = 99;
                var17 = var17[var15];
                var28['bitrate_percentile99'] = var17;
                var17 = var16.percentiles;
                var17 = var17[var14];
                var28['resolution_percentile1'] = var17;
                var17 = var16.percentiles;
                var17 = var17[var13];
                var28['resolution_percentile5'] = var17;
                var17 = var16.percentiles;
                var17 = var17[var12];
                var28['resolution_percentile10'] = var17;
                var17 = var16.percentiles;
                var17 = var17[var11];
                var28['resolution_percentile25'] = var17;
                var17 = var16.percentiles;
                var17 = var17[var10];
                var28['resolution_percentile50'] = var17;
                var16 = var16.percentiles;
                var16 = var16[var9];
                var28['resolution_percentile75'] = var16;
                var16 = var8.percentiles;
                var16 = var16[var14];
                var28['inbound_bitrate_estimate_percentile1'] = var16;
                var16 = var8.percentiles;
                var16 = var16[var13];
                var28['inbound_bitrate_estimate_percentile5'] = var16;
                var16 = var8.percentiles;
                var16 = var16[var12];
                var28['inbound_bitrate_estimate_percentile10'] = var16;
                var16 = var8.percentiles;
                var16 = var16[var11];
                var28['inbound_bitrate_estimate_percentile25'] = var16;
                var16 = var8.percentiles;
                var16 = var16[var10];
                var28['inbound_bitrate_estimate_percentile50'] = var16;
                var16 = var8.percentiles;
                var16 = var16[var9];
                var28['inbound_bitrate_estimate_percentile75'] = var16;
                var8 = var8.percentiles;
                var8 = var8[var15];
                var28['inbound_bitrate_estimate_percentile99'] = var8;
                var8 = var7.percentiles;
                var8 = var8[var14];
                var28['local_want_percentile1'] = var8;
                var8 = var7.percentiles;
                var8 = var8[var13];
                var28['local_want_percentile5'] = var8;
                var8 = var7.percentiles;
                var8 = var8[var12];
                var28['local_want_percentile10'] = var8;
                var8 = var7.percentiles;
                var8 = var8[var11];
                var28['local_want_percentile25'] = var8;
                var8 = var7.percentiles;
                var8 = var8[var10];
                var28['local_want_percentile50'] = var8;
                var8 = var7.percentiles;
                var8 = var8[var9];
                var28['local_want_percentile75'] = var8;
                var9 = var7.percentiles;
                var8 = 90;
                var8 = var9[var8];
                var28['local_want_percentile90'] = var8;
                var9 = var7.percentiles;
                var8 = 95;
                var8 = var9[var8];
                var28['local_want_percentile95'] = var8;
                var7 = var7.mean;
                var28['average_local_want'] = var7;
                var7 = var4.videoEffectDuration;
                var4 = var7.totalDuration;
                var4 = var4.bind(var7)();
                var4 = var4 / var6;
                var4 = var5.bind(var38)(var4);
                var28['duration_video_effect'] = var4;
                var4 = var3.cryptorMaxAttempts;
                var28['cryptor_max_attempts'] = var4;
                var8 = var3.decoderBuckets;
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var39 = 9;
                var6 = var4[var39];
                var6 = var7.bind(var38)(var6);
                var6 = var6.Decoders;
                var6 = var6.FFMPEG;
                var6 = var8[var6];
                var6 = var5.bind(var38)(var6);
                var28['duration_decoder_ffmpeg'] = var6;
                var8 = var3.decoderBuckets;
                var6 = var4[var39];
                var6 = var7.bind(var38)(var6);
                var6 = var6.Decoders;
                var6 = var6.DAV1D;
                var6 = var8[var6];
                var6 = var5.bind(var38)(var6);
                var28['duration_decoder_dav1d'] = var6;
                var8 = var3.decoderBuckets;
                var6 = var4[var39];
                var6 = var7.bind(var38)(var6);
                var6 = var6.Decoders;
                var6 = var6.VP8_LIBVPX;
                var6 = var8[var6];
                var6 = var5.bind(var38)(var6);
                var28['duration_decoder_vp8_libvpx'] = var6;
                var8 = var3.decoderBuckets;
                var6 = var4[var39];
                var6 = var7.bind(var38)(var6);
                var6 = var6.Decoders;
                var6 = var6.ELECTRON;
                var6 = var8[var6];
                var6 = var5.bind(var38)(var6);
                var28['duration_decoder_electron'] = var6;
                var8 = var3.decoderBuckets;
                var6 = var4[var39];
                var6 = var7.bind(var38)(var6);
                var6 = var6.Decoders;
                var6 = var6.VIDEOTOOLBOX;
                var6 = var8[var6];
                var6 = var5.bind(var38)(var6);
                var28['duration_decoder_videotoolbox'] = var6;
                var8 = var3.decoderBuckets;
                var6 = var4[var39];
                var6 = var7.bind(var38)(var6);
                var6 = var6.Decoders;
                var6 = var6.UNCATEGORIZED;
                var6 = var8[var6];
                var6 = var5.bind(var38)(var6);
                var28['duration_decoder_uncategorized'] = var6;
                var8 = var3.decoderBuckets;
                var6 = var4[var39];
                var6 = var7.bind(var38)(var6);
                var6 = var6.Decoders;
                var6 = var6.UNKNOWN;
                var6 = var8[var6];
                var6 = var5.bind(var38)(var6);
                var28['duration_decoder_unknown'] = var6;
                var8 = var3.decoderBuckets;
                var6 = var4[var39];
                var6 = var7.bind(var38)(var6);
                var6 = var6.Decoders;
                var6 = var6.EXYNOS;
                var6 = var8[var6];
                var6 = var5.bind(var38)(var6);
                var28['duration_decoder_exynos'] = var6;
                var8 = var3.decoderBuckets;
                var6 = var4[var39];
                var6 = var7.bind(var38)(var6);
                var6 = var6.Decoders;
                var6 = var6.WEBRTC;
                var6 = var8[var6];
                var6 = var5.bind(var38)(var6);
                var28['duration_decoder_webrtc'] = var6;
                var8 = var3.decoderBuckets;
                var6 = var4[var39];
                var6 = var7.bind(var38)(var6);
                var6 = var6.Decoders;
                var6 = var6.QUALCOMM;
                var6 = var8[var6];
                var6 = var5.bind(var38)(var6);
                var28['duration_decoder_qualcomm'] = var6;
                var6 = var3.decoderBuckets;
                var4 = var4[var39];
                var4 = var7.bind(var38)(var4);
                var4 = var4.Decoders;
                var4 = var4.MEDIATEK;
                var4 = var6[var4];
                var4 = var5.bind(var38)(var4);
                var28['duration_decoder_mediatek'] = var4;
                var43 = var28;
                var42 = var2;
                var2 = copyDataProperties(var43, var42);
                var4 = var3.aggregatedProperties;
                var27 = var4.bytes;
                var21 = var4.framesDropped;
                var23 = var4.framesCodecError;
                var32 = var4.framesCodec;
                var24 = var4.framesNetwork;
                var25 = var4.packets;
                var26 = var4.packetsLost;
                var20 = var4.nackCount;
                var19 = var4.pliCount;
                var18 = var4.qpSum;
                var35 = var4.pauseCount;
                var33 = var4.freezeCount;
                var34 = var4.totalPausesDuration;
                var30 = var4.totalFreezesDuration;
                var2 = var4.totalFramesDuration;
                var17 = var4.keyframes;
                var16 = var4.passthroughCount;
                var15 = var4.cryptorSuccessCount;
                var14 = var4.cryptorFailureCount;
                var13 = var4.cryptorDuration;
                var12 = var4.cryptorAttempts;
                var11 = var4.cryptorMissingKeyCount;
                var10 = var4.cryptorInvalidNonceCount;
                var8 = var4.qualityDecodeErrors;
                var7 = var4.qualityDecoderReboots;
                var6 = var4.qualityScoreErrors;
                var5 = var4.qualityFrameDrops;
                var4 = var4.qualitySizeMismatches;
                var9 = var1 != var14;
                var37 = 0;
                if(!var9) { _fun0020_ip = 199; continue _fun0020 }
case 200:
                var37 = var14;
case 199:
                var40 = var3.cryptorFailureBeforeSuccessCount;
                var41 = var1 != var40;
                var9 = 0;
                if(!var41) { _fun0020_ip = 201; continue _fun0020 }
case 202:
                var9 = var40;
case 201:
                var9 = var37 - var9;
                var37 = _closure1_slot0;
                var36 = _closure1_slot2;
                var36 = var36[var39];
                var36 = var37.bind(var38)(var36);
                var36 = var36.OutboundStats;
                var36 = var3 instanceof var36;
                if(var36) { _fun0020_ip = 203; continue _fun0020 }
case 204:
                var28['receiver_freeze_count'] = var33;
                var28['receiver_total_freezes_duration'] = var30;
                var28['receiver_total_frames_duration'] = var2;
                var28['receiver_pause_count'] = var35;
                var28['receiver_total_pauses_duration'] = var34;
                _fun0020_ip = 205; continue _fun0020;
case 203:
                var28['sender_freeze_count'] = var33;
                var28['sender_total_freezes_duration'] = var30;
                var28['sender_total_frames_duration'] = var2;
case 205:
                var2 = {};
                var43 = var2;
                var42 = var28;
                var28 = copyDataProperties(var43, var42);
                var30 = var31 > var22;
                var33 = 0;
                if(!var30) { _fun0020_ip = 206; continue _fun0020 }
case 207:
                var35 = var29.Math;
                var34 = var35.round;
                var28 = var1 != var27;
                var36 = 0;
                if(!var28) { _fun0020_ip = 208; continue _fun0020 }
case 209:
                var36 = var27;
case 208:
                var28 = 8;
                var28 = var28 * var36;
                var28 = var28 / var31;
                var33 = var34.bind(var35)(var28);
case 206:
                var28 = 'avg_bitrate';
                var2[var28] = var33;
                var28 = 0;
                if(!var30) { _fun0020_ip = 210; continue _fun0020 }
case 211:
                var30 = var29.Math;
                var29 = var30.round;
                var33 = var1 != var32;
                var22 = 0;
                if(!var33) { _fun0020_ip = 212; continue _fun0020 }
case 213:
                var22 = var32;
case 212:
                var22 = var22 / var31;
                var28 = var29.bind(var30)(var22);
case 210:
                var22 = 'avg_fps';
                var2[var22] = var28;
                var22 = 'num_bytes';
                var2[var22] = var27;
                var22 = 'num_packets_lost';
                var2[var22] = var26;
                var22 = 'num_packets';
                var2[var22] = var25;
                var22 = 'num_frames';
                var2[var22] = var24;
                var22 = 'num_frames_codec_error';
                var2[var22] = var23;
                var22 = var3.timeToFirstFrame;
                var3 = 'time_to_first_frame_ms';
                var2[var3] = var22;
                var3 = 'num_frames_dropped';
                var2[var3] = var21;
                var3 = 'num_nacks';
                var2[var3] = var20;
                var3 = 'num_plis';
                var2[var3] = var19;
                var3 = 'qp_sum';
                var2[var3] = var18;
                var3 = 'num_keyframes';
                var2[var3] = var17;
                var3 = 'cryptor_passthrough_count';
                var2[var3] = var16;
                var3 = 'cryptor_success_count';
                var2[var3] = var15;
                var3 = 'cryptor_failure_count';
                var2[var3] = var14;
                var3 = 'cryptor_duration';
                var2[var3] = var13;
                var3 = 'cryptor_attempts';
                var2[var3] = var12;
                var3 = 'cryptor_missing_key_count';
                var2[var3] = var11;
                var3 = 'cryptor_invalid_nonce_count';
                var2[var3] = var10;
                var3 = 'cryptor_failure_after_success_count';
                var2[var3] = var9;
                var3 = 'encoder_quality_decode_errors';
                var2[var3] = var8;
                var3 = 'encoder_quality_decoder_reboots';
                var2[var3] = var7;
                var3 = 'encoder_quality_score_errors';
                var2[var3] = var6;
                var3 = 'encoder_quality_frame_drops';
                var2[var3] = var5;
                var3 = 'encoder_quality_size_mismatches';
                var2[var3] = var4;
                return var2;
case 191:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[25] = var5;
        var5 = {};
        var7 = 'receivedStats';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var7 = arg2;
                var13 = arg3;
                var3 = this;
                var _closure3_slot0 = var3;
                var1 = arg1;
                var _closure3_slot1 = var1;
                var _closure3_slot2 = var13;
                var5 = var7.transport;
                var _closure3_slot3 = var5;
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 12;
                var6 = var6[var1];
                var1 = undefined;
                var8 = var8.bind(var1)(var6);
                var6 = var8.isWeb;
                var6 = var6.bind(var8)();
                var14 = 1;
                var12 = var14;
                if(var6) { _fun0021_ip = 52; continue _fun0021 }
case 214:
                var8 = var5.receiverReports;
                var5 = null;
                var9 = var5 == var8;
                var6 = undefined;
                if(var9) { _fun0021_ip = 215; continue _fun0021 }
case 216:
                var6 = var8.length;
case 215:
                var8 = var5 != var6;
                var5 = 0;
                if(!var8) { _fun0021_ip = 217; continue _fun0021 }
case 218:
                var5 = var6;
case 217:
                var12 = var5;
case 52:
                var5 = global;
                var6 = var5.Set;
                var8 = var6.prototype;
                var8 = Object.create(var8, {constructor: {value: var6}});
                var19 = var8;
                var6 = new var19[var6](var18);
                var6 = var6 instanceof Object ? var6 : var8;
                var _closure3_slot4 = var6;
                var5 = var5.Set;
                var8 = var5.prototype;
                var8 = Object.create(var8, {constructor: {value: var5}});
                var19 = var8;
                var5 = new var19[var5](var18);
                var5 = var5 instanceof Object ? var5 : var8;
                var _closure3_slot5 = var5;
                var9 = var3.updateSendState;
                var8 = {};
                var8['receivers'] = var12;
                var8 = var9.bind(var3)(var8);
                var8 = var3.cameraDuration;
                var9 = var8.value;
                var10 = var3.cameraDuration;
                var8 = var3.connection;
                var11 = var8.context;
                var16 = _closure1_slot0;
                var8 = _closure1_slot2;
                var15 = 8;
                var8 = var8[var15];
                var8 = var16.bind(var1)(var8);
                var8 = var8.MediaEngineContextTypes;
                var8 = var8.DEFAULT;
                var8 = var11 === var8;
                if(!var8) { _fun0021_ip = 219; continue _fun0021 }
case 220:
                var16 = var7.camera;
                var11 = null;
                var8 = var11 != var16;
case 219:
                var10['value'] = var8;
                var10 = var3.cameraOpportunityDuration;
                var8 = var3.connection;
                var11 = var8.context;
                var16 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var15];
                var8 = var16.bind(var1)(var8);
                var8 = var8.MediaEngineContextTypes;
                var8 = var8.DEFAULT;
                var8 = var11 === var8;
                if(!var8) { _fun0021_ip = 221; continue _fun0021 }
case 222:
                var16 = var7.camera;
                var11 = null;
                var8 = var11 != var16;
case 221:
                if(!var8) { _fun0021_ip = 81; continue _fun0021 }
case 223:
                var11 = var3.callUserIdsCount;
                var8 = var11 > var14;
case 81:
                var10['value'] = var8;
                var10 = var3.cameraSendDuration;
                var8 = var3.connection;
                var11 = var8.context;
                var14 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var15];
                var8 = var14.bind(var1)(var8);
                var8 = var8.MediaEngineContextTypes;
                var8 = var8.DEFAULT;
                var8 = var11 === var8;
                if(!var8) { _fun0021_ip = 224; continue _fun0021 }
case 225:
                var14 = var7.camera;
                var11 = null;
                var8 = var11 != var14;
case 224:
                if(!var8) { _fun0021_ip = 226; continue _fun0021 }
case 227:
                var11 = 0;
                var8 = var12 > var11;
case 226:
                var10['value'] = var8;
                var8 = var3.cameraDuration;
                var8 = var8.value;
                if(!var8) { _fun0021_ip = 228; continue _fun0021 }
case 229:
                var8 = !var9;
case 228:
                if(!var8) { _fun0021_ip = 230; continue _fun0021 }
case 231:
                var8 = var3.cameraToggles;
                var8 = var8 + 1;
                var3['cameraToggles'] = var8;
case 230:
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var11 = 10;
                var8 = var8[var11];
                var10 = var9.bind(var1)(var8);
                var9 = var10.max;
                var12 = var13.map;
                var8 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.quality;
                    return var1;
                };
                var8 = var12.bind(var13)(var8);
                var8 = var9.bind(var10)(var8);
                var _closure3_slot6 = var8;
                var8 = var7.rtp;
                var10 = var8.outbound;
                var9 = var10.filter;
                var8 = function(arg1) {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                        var4 = arg1;
                        var2 = var4.type;
                        var1 = 'video';
                        var1 = var1 === var2;
                        if(!var1) { _fun0022_ip = 232; continue _fun0022 }
case 59:
                        var3 = null;
                        var5 = var3 == var4;
                        var2 = undefined;
                        if(var5) { _fun0022_ip = 56; continue _fun0022 }
case 3:
                        var2 = var4.videoEntropy;
case 56:
                        var1 = var3 != var2;
case 232:
                        return var1;
                    }
                };
                var9 = var9.bind(var10)(var8);
                var8 = 0;
                var10 = var9[var8];
                var9 = null;
                var12 = var9 == var10;
                var9 = undefined;
                if(var12) { _fun0021_ip = 233; continue _fun0021 }
case 234:
                var9 = var10.videoEntropy;
case 233:
                var _closure3_slot7 = var9;
                var9 = var7.rtp;
                var12 = var9.outbound;
                var10 = var12.filter;
                var9 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = 'video';
                    var1 = var1 === var2;
                    return var1;
                };
                var12 = var10.bind(var12)(var9);
                var10 = var12.forEach;
                var9 = function(arg1) {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                        var3 = arg1;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0023_ip = 235; continue _fun0023 }
case 32:
                        var11 = var3.ssrc;
                        var _closure4_slot0 = var11;
                        var5 = _closure3_slot0;
                        var5 = var5.outboundStats;
                        var5 = var5[var11];
                        if(!(var1 == var5)) { _fun0023_ip = 236; continue _fun0023 }
case 237:
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var6 = 9;
                        var7 = var7[var6];
                        var6 = undefined;
                        var6 = var8.bind(var6)(var7);
                        var9 = var6.OutboundStats;
                        var7 = _closure3_slot0;
                        var18 = var7.timestampProducer;
                        var8 = var9.prototype;
                        var8 = Object.create(var8, {constructor: {value: var9}});
                        var19 = var8;
                        var6 = new var19[var9](var18, var17);
                        var6 = var6 instanceof Object ? var6 : var8;
                        var7 = var7.outboundStats;
                        var7[var11] = var6;
                        var5 = var6;
case 236:
                        var6 = var5.timeToFirstFrame;
                        var6 = var1 == var6;
                        if(!var6) { _fun0023_ip = 238; continue _fun0023 }
case 239:
                        var7 = var3.framesEncoded;
                        var9 = 0;
                        var7 = var7 > var9;
                        if(var7) { _fun0023_ip = 17; continue _fun0023 }
case 240:
                        var10 = var3.frameRateInput;
                        var12 = var1 != var10;
                        var8 = 0;
                        if(!var12) { _fun0023_ip = 241; continue _fun0023 }
case 242:
                        var8 = var10;
case 241:
                        var7 = var8 > var9;
case 17:
                        var6 = var7;
case 238:
                        if(!var6) { _fun0023_ip = 243; continue _fun0023 }
case 244:
                        var6 = global;
                        var9 = var6.Math;
                        var8 = var9.max;
                        var7 = _closure3_slot1;
                        var6 = var5.startTime;
                        var7 = var7 - var6;
                        var6 = 0;
                        var6 = var8.bind(var9)(var6, var7);
                        var5['timeToFirstFrame'] = var6;
case 243:
                        var6 = _closure3_slot7;
                        var6 = var1 != var6;
                        if(!var6) { _fun0023_ip = 245; continue _fun0023 }
case 246:
                        var8 = _closure3_slot7;
                        var7 = 0;
                        var6 = var8 >= var7;
case 245:
                        if(!var6) { _fun0023_ip = 24; continue _fun0023 }
case 247:
                        var6 = _closure3_slot0;
                        var8 = var6.videoEntropy;
                        var7 = var8.addSample;
                        var6 = _closure3_slot7;
                        var6 = var7.bind(var8)(var6);
case 24:
                        var7 = _closure3_slot2;
                        var6 = var7.find;
                        var4 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.ssrc;
                            var1 = _closure4_slot0;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var4 = var6.bind(var7)(var4);
                        var6 = _closure3_slot0;
                        var6 = var6.connection;
                        var10 = var6.context;
                        var9 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var7 = 8;
                        var8 = var8[var7];
                        var7 = undefined;
                        var8 = var9.bind(var7)(var8);
                        var8 = var8.MediaEngineContextTypes;
                        var8 = var8.STREAM;
                        var9 = true;
                        if(!(var10 === var8)) { _fun0023_ip = 248; continue _fun0023 }
case 6:
                        var8 = _closure3_slot0;
                        var10 = var8.connection;
                        var8 = var10.getRemoteVideoSinkWants;
                        var10 = var8.bind(var10)(var11);
                        var8 = var1 != var10;
                        if(!var8) { _fun0023_ip = 249; continue _fun0023 }
case 250:
                        var11 = 0;
                        var8 = var11 !== var10;
case 249:
                        if(var8) { _fun0023_ip = 251; continue _fun0023 }
case 252:
                        var11 = var1 == var4;
                        var12 = undefined;
                        if(var11) { _fun0023_ip = 253; continue _fun0023 }
case 254:
                        var12 = var4.quality;
case 253:
                        var11 = _closure3_slot6;
                        var8 = var12 !== var11;
case 251:
                        var11 = var10;
                        if(var8) { _fun0023_ip = 255; continue _fun0023 }
case 256:
                        var8 = _closure3_slot0;
                        var12 = var8.connection;
                        var10 = var12.getRemoteVideoSinkWants;
                        var8 = 'any';
                        var11 = var10.bind(var12)(var8);
case 255:
                        var12 = var1 != var11;
                        var10 = 0;
                        var8 = 0;
                        if(!var12) { _fun0023_ip = 257; continue _fun0023 }
case 258:
                        var8 = var11;
case 257:
                        var9 = var8 > var10;
case 248:
                        var8 = _closure3_slot0;
                        var8 = var8.videoStopped;
                        var8 = var8.value;
                        if(var8) { _fun0023_ip = 259; continue _fun0023 }
case 260:
                        var8 = !var9;
case 259:
                        var9 = var5.isVideoStopped;
                        if(!(var8 !== var9)) { _fun0023_ip = 261; continue _fun0023 }
case 70:
                        var10 = var5.setVideoStopped;
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var9 = 9;
                        var9 = var12[var9];
                        var9 = var11.bind(var7)(var9);
                        var9 = var9.VideoStoppedReasons;
                        var9 = var9.SenderStopped;
                        var9 = var10.bind(var5)(var8, var9);
case 261:
                        if(var8) { _fun0023_ip = 235; continue _fun0023 }
case 262:
                        var11 = var5.appendAndIncrementStats;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var6 = 9;
                        var8 = var10[var6];
                        var8 = var9.bind(var7)(var8);
                        var13 = var8.RawVideoStats;
                        var12 = var13.parseOutboundStats;
                        var8 = _closure3_slot1;
                        var8 = var12.bind(var13)(var3, var8);
                        var8 = var11.bind(var5)(var8);
                        var8 = var5.encoderCodec;
                        var6 = var10[var6];
                        var6 = var9.bind(var7)(var6);
                        var6 = var6.CodecTypes;
                        var6 = var6.UNKNOWN;
                        if(!(var8 !== var6)) { _fun0023_ip = 263; continue _fun0023 }
case 264:
                        var9 = _closure3_slot4;
                        var8 = var9.add;
                        var6 = var5.encoderCodec;
                        var6 = var8.bind(var9)(var6);
case 263:
                        var6 = var1 == var4;
                        var9 = undefined;
                        if(var6) { _fun0023_ip = 265; continue _fun0023 }
case 266:
                        var9 = var4.maxBitrate;
case 265:
                        var8 = var5.appendTargetRates;
                        var6 = var1 == var4;
                        var7 = undefined;
                        if(var6) { _fun0023_ip = 267; continue _fun0023 }
case 268:
                        var7 = var4.maxFrameRate;
case 267:
                        var6 = var3.bitrateTarget;
                        if(!(var1 == var6)) { _fun0023_ip = 269; continue _fun0023 }
case 270:
                        var4 = global;
                        var12 = var4.Math;
                        var11 = var12.min;
                        var4 = _closure3_slot3;
                        var13 = var4.availableOutgoingBitrate;
                        var14 = var1 != var13;
                        var4 = 0;
                        if(!var14) { _fun0023_ip = 128; continue _fun0023 }
case 271:
                        var4 = var13;
case 128:
                        var13 = var1 != var9;
                        var10 = 0;
                        if(!var13) { _fun0023_ip = 272; continue _fun0023 }
case 273:
                        var10 = var9;
case 272:
                        var6 = var11.bind(var12)(var4, var10);
case 269:
                        var4 = _closure3_slot3;
                        var15 = var4.availableOutgoingBitrate;
                        var19 = var5;
                        var18 = var7;
                        var17 = var6;
                        var16 = var9;
                        var4 = var19[var8](var18, var17, var16, var15, var14);
                        var6 = var3.averageEncodeTime;
                        var7 = var1 != var6;
                        var4 = 0;
                        if(!var7) { _fun0023_ip = 274; continue _fun0023 }
case 275:
                        var4 = var6;
case 274:
                        var5['averageEncodeTime'] = var4;
                        var6 = var3.framesDroppedRateLimiter;
                        var7 = var1 != var6;
                        var4 = null;
                        if(!var7) { _fun0023_ip = 276; continue _fun0023 }
case 277:
                        var4 = var6;
case 276:
                        var5['framesDroppedRateLimiter'] = var4;
                        var6 = var3.framesDroppedEncoderQueue;
                        var7 = var1 != var6;
                        var4 = null;
                        if(!var7) { _fun0023_ip = 278; continue _fun0023 }
case 279:
                        var4 = var6;
case 278:
                        var5['framesDroppedEncoderQueue'] = var4;
                        var6 = var3.framesDroppedCongestionWindow;
                        var7 = var1 != var6;
                        var4 = null;
                        if(!var7) { _fun0023_ip = 280; continue _fun0023 }
case 281:
                        var4 = var6;
case 280:
                        var5['framesDroppedCongestionWindow'] = var4;
                        var6 = var3.framesDroppedEncoder;
                        var7 = var1 != var6;
                        var4 = null;
                        if(!var7) { _fun0023_ip = 282; continue _fun0023 }
case 283:
                        var4 = var6;
case 282:
                        var5['framesDroppedEncoder'] = var4;
                        var4 = _closure3_slot0;
                        var5 = var4.hqSimulcastStreamEncoded;
                        var6 = var3.hqSimulcastStreamEncoded;
                        var4 = var1 != var6;
                        if(!var4) { _fun0023_ip = 100; continue _fun0023 }
case 284:
                        var4 = var6;
case 100:
                        var5['value'] = var4;
                        var4 = _closure3_slot0;
                        var5 = var4.lqSimulcastStreamEncoded;
                        var6 = var3.lqSimulcastStreamEncoded;
                        var4 = var1 != var6;
                        if(!var4) { _fun0023_ip = 285; continue _fun0023 }
case 286:
                        var4 = var6;
case 285:
                        var5['value'] = var4;
                        var4 = _closure3_slot0;
                        var5 = var4.bothSimulcastStreamsEncoded;
                        var4 = var4.hqSimulcastStreamEncoded;
                        var4 = var4.value;
                        if(!var4) { _fun0023_ip = 287; continue _fun0023 }
case 288:
                        var6 = _closure3_slot0;
                        var6 = var6.lqSimulcastStreamEncoded;
                        var4 = var6.value;
case 287:
                        var5['value'] = var4;
                        var4 = _closure3_slot0;
                        var5 = var4.bandwidthLimitedResolution;
                        var6 = var3.bandwidthLimitedResolution;
                        var4 = var1 != var6;
                        if(!var4) { _fun0023_ip = 289; continue _fun0023 }
case 290:
                        var4 = var6;
case 289:
                        var5['value'] = var4;
                        var2 = _closure3_slot0;
                        var2 = var2.bandwidthLimitedFramerate;
                        var3 = var3.bandwidthLimitedFrameRate;
                        var1 = var1 != var3;
                        if(!var1) { _fun0023_ip = 291; continue _fun0023 }
case 292:
                        var1 = var3;
case 291:
                        var2['value'] = var1;
case 235:
                        var1 = undefined;
                        return var1;
                    }
                };
                var9 = var10.bind(var12)(var9);
                var9 = var3.paused;
                var9 = var9.value;
                if(var9) { _fun0021_ip = 293; continue _fun0021 }
case 294:
                var10 = _closure1_slot1;
                var9 = _closure1_slot2;
                var9 = var9[var11];
                var10 = var10.bind(var1)(var9);
                var9 = var10.forEach;
                var7 = var7.rtp;
                var7 = var7.inbound;
                var4 = function(arg1, arg2) {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                        var3 = arg1;
                        var14 = arg2;
                        var2 = var3.find;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.type;
                            var1 = 'video';
                            var1 = var1 === var2;
                            return var1;
                        };
                        var4 = var2.bind(var3)(var1);
                        var6 = null;
                        if(!(var6 != var4)) { _fun0024_ip = 295; continue _fun0024 }
case 103:
                        var2 = _closure3_slot0;
                        var2 = var2.inboundStats;
                        var2 = var2[var14];
                        if(!(var6 == var2)) { _fun0024_ip = 296; continue _fun0024 }
case 28:
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 9;
                        var5 = var5[var3];
                        var3 = undefined;
                        var3 = var7.bind(var3)(var5);
                        var8 = var3.InboundStats;
                        var5 = _closure3_slot0;
                        var18 = var5.timestampProducer;
                        var7 = var8.prototype;
                        var7 = Object.create(var7, {constructor: {value: var8}});
                        var19 = var7;
                        var3 = new var19[var8](var18, var17);
                        var3 = var3 instanceof Object ? var3 : var7;
                        var5 = var5.inboundStats;
                        var5[var14] = var3;
                        var2 = var3;
case 296:
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var10 = 9;
                        var5 = var5[var10];
                        var9 = undefined;
                        var5 = var7.bind(var9)(var5);
                        var8 = var5.RawVideoStats;
                        var7 = var8.parseInboundStats;
                        var5 = _closure3_slot1;
                        var7 = var7.bind(var8)(var4, var5);
                        var5 = _closure3_slot0;
                        var8 = var5.statCollectionPausedUsers;
                        var5 = var8.has;
                        var5 = var5.bind(var8)(var14);
                        if(var5) { _fun0024_ip = 66; continue _fun0024 }
case 297:
                        var5 = var2.appendAndIncrementStats;
                        var5 = var5.bind(var2)(var7);
                        var8 = var2.appendTransportStats;
                        var5 = _closure3_slot3;
                        var5 = var8.bind(var2)(var5);
case 66:
                        var8 = var7.packets;
                        var5 = 0;
                        if(!(var8 > var5)) { _fun0024_ip = 298; continue _fun0024 }
case 105:
                        var13 = _closure3_slot0;
                        var12 = var13.emit;
                        var8 = _closure1_slot8;
                        var18 = var8.FpsUpdate;
                        var16 = var7.framesCodec;
                        var15 = var7.timestamp;
                        var19 = var13;
                        var17 = var14;
                        var7 = var19[var12](var18, var17, var16, var15, var14);
case 298:
                        var7 = var2.decoderCodec;
                        var8 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var10];
                        var3 = var8.bind(var9)(var3);
                        var3 = var3.CodecTypes;
                        var3 = var3.UNKNOWN;
                        if(!(var7 !== var3)) { _fun0024_ip = 299; continue _fun0024 }
case 8:
                        var8 = _closure3_slot5;
                        var7 = var8.add;
                        var3 = var2.decoderCodec;
                        var3 = var7.bind(var8)(var3);
case 299:
                        var3 = var2.timeToFirstFrame;
                        var3 = var6 == var3;
                        if(!var3) { _fun0024_ip = 300; continue _fun0024 }
case 301:
                        var4 = var4.framesDecoded;
                        var3 = var4 > var5;
case 300:
                        if(!var3) { _fun0024_ip = 295; continue _fun0024 }
case 302:
                        var3 = _closure3_slot1;
                        var1 = var2.startTime;
                        var1 = var3 - var1;
                        var2['timeToFirstFrame'] = var1;
case 295:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4 = var9.bind(var10)(var7, var4);
case 293:
                var4 = var6.size;
                var4 = var8 !== var4;
                if(!var4) { _fun0021_ip = 303; continue _fun0021 }
case 304:
                var7 = var5.size;
                var4 = var8 !== var7;
case 303:
                if(!var4) { _fun0021_ip = 305; continue _fun0021 }
case 271:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 13;
                var2 = var7[var2];
                var4 = var4.bind(var1)(var2);
                var2 = var4.areSetsEqual;
                var2 = var2.bind(var4)(var6, var5);
                if(var2) { _fun0021_ip = 306; continue _fun0021 }
case 307:
                var2 = var3.asymmetricCodecUpdates;
                var2 = var2 + 1;
                var3['asymmetricCodecUpdates'] = var2;
                _fun0021_ip = 305; continue _fun0021;
case 306:
                var2 = var3.symmetricCodecUpdates;
                var2 = var2 + 1;
                var3['symmetricCodecUpdates'] = var2;
case 305:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[26] = var5;
        var5 = {};
        var7 = 'updateSystemResourceStats';
        var5['key'] = var7;
        var7 = function value() {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var6 = this;
                var4 = var6.outboundStats;
                for(var1 in var4)
case 308:
                {
case 309:
                    var8 = var1;
                    var7 = var6.outboundStats;
                    var8 = var7[var8];
                    var7 = var8.addSystemResources;
                    var7 = var7.bind(var8)();
                    _fun0025_ip = 308; continue _fun0025;
                }
case 310:
                var4 = var6.inboundStats;
                for(var1 in var4)
case 64:
                {
case 39:
                    var8 = var1;
                    var7 = var6.inboundStats;
                    var8 = var7[var8];
                    var7 = var8.addSystemResources;
                    var7 = var7.bind(var8)();
                    _fun0025_ip = 64; continue _fun0025;
                }
case 311:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[27] = var5;
        var5 = {};
        var7 = 'updateVideoEffectStats';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var2 = arg1;
                var5 = null;
                var3 = var5 == var2;
                var1 = undefined;
                var4 = undefined;
                if(var3) { _fun0026_ip = 101; continue _fun0026 }
case 312:
                var2 = var2.rtp;
                var6 = var2.outbound;
                var3 = var6.find;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = 'video';
                    var1 = var1 === var2;
                    return var1;
                };
                var4 = var3.bind(var6)(var2);
case 101:
                var2 = this;
                var3 = var2.videoEffectDuration;
                var2 = var5 == var4;
                var6 = undefined;
                if(var2) { _fun0026_ip = 313; continue _fun0026 }
case 314:
                var6 = var4.type;
case 313:
                var2 = 'video';
                var2 = var2 === var6;
                if(!var2) { _fun0026_ip = 44; continue _fun0026 }
case 315:
                var4 = var4.filter;
                var2 = var5 != var4;
case 44:
                var3['value'] = var2;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[28] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var5);
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'lib/VideoQuality.tsx';
    var5 = var6.bind(var7)(var5);
    var3['VideoQualityEvent'] = var4;
    var3['VideoQuality'] = var2;
    return var1;
})();