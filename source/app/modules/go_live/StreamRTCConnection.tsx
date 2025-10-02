// app/modules/go_live/StreamRTCConnection.tsx
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
            _closure1_slot25 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = global;
    var9 = var1.Object;
    var5 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var2);
    var14 = 0;
    var2 = var7[var14];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var13 = 1;
    var2 = var7[var13];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var12 = 2;
    var2 = var7[var12];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var11 = 3;
    var2 = var7[var11];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var10 = 4;
    var2 = var7[var10];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var9 = 5;
    var2 = var7[var9];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 11;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 12;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot15 = var2;
    var2 = 13;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot16 = var2;
    var2 = 14;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot17 = var2;
    var2 = 15;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.getSystemAnalyticsInfo;
    var _closure1_slot18 = var2;
    var2 = 16;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.AnalyticEvents;
    var _closure1_slot19 = var5;
    var5 = var2.MediaEngineHookTypes;
    var _closure1_slot20 = var5;
    var2 = var2.RTCConnectionStates;
    var _closure1_slot21 = var2;
    var2 = 17;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.MediaEngineContextTypes;
    var _closure1_slot22 = var2;
    var2 = 18;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var2 = var2.Millis;
    var2 = var2.SECOND;
    var2 = var9 * var2;
    var _closure1_slot23 = var2;
    var2 = {};
    var2['DETACHED'] = var14;
    var5 = 'DETACHED';
    var2[var14] = var5;
    var2['WAITING'] = var13;
    var5 = 'WAITING';
    var2[var13] = var5;
    var2['ATTACHED'] = var12;
    var5 = 'ATTACHED';
    var2[var12] = var5;
    var2['STARTED'] = var11;
    var5 = 'STARTED';
    var2[var11] = var5;
    var2['PLAYING'] = var10;
    var5 = 'PLAYING';
    var2[var10] = var5;
    var2['SILENCE'] = var9;
    var5 = 'SILENCE';
    var2[var9] = var5;
    var _closure1_slot24 = var2;
    var2 = function() {
        var4 = _closure1_slot8;
        var3 = function StreamRTCAnalyticsContext(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var3 = this;
                var9 = var1.streamRegion;
                var8 = var1.streamApplication;
                var7 = var1.streamSourceType;
                var6 = var1.actionContext;
                var4 = var1.numViewers;
                var5 = var1.goLiveModalDurationMs;
                var2 = var1.analyticsLocations;
                var11 = _closure1_slot7;
                var10 = _closure2_slot0;
                var1 = undefined;
                var10 = var11.bind(var1)(var3, var10);
                var3['streamRegion'] = var9;
                var3['streamApplication'] = var8;
                var3['streamSourceType'] = var7;
                var3['actionContext'] = var6;
                var3['maxViewers'] = var4;
                var3['goLiveModalDurationMs'] = var5;
                var3['numViewers'] = var4;
                var4 = null;
                if(!(var4 == var2)) { _fun0002_ip = 122; continue _fun0002 }
 118:
                var2 = new Array(0);
 122:
                var3['analyticsLocations'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'setActionContext';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['actionContext'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(7);
        var2[0] = var1;
        var1 = {};
        var6 = 'setAnalyticsLocations';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['analyticsLocations'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'trackViewerCount';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var3 = global;
            var5 = var3.Math;
            var4 = var5.max;
            var3 = var1.maxViewers;
            var3 = var4.bind(var5)(var2, var3);
            var1['maxViewers'] = var3;
            var1['numViewers'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'setNativePickerStyleUsed';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['nativePickerStyleUsed'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'trackStart';
        var1['key'] = var6;
        var6 = function value() {
            var1 = global;
            var2 = var1.performance;
            var1 = var2.now;
            var2 = var1.bind(var2)();
            var1 = this;
            var1['startTime'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'trackEnd';
        var1['key'] = var6;
        var6 = function value() {
            var1 = global;
            var2 = var1.performance;
            var1 = var2.now;
            var2 = var1.bind(var2)();
            var1 = this;
            var1['endTime'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'getDuration';
        var1['key'] = var6;
        var5 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = this;
                var3 = var2.startTime;
                var1 = null;
                if(!(var1 != var3)) { _fun0003_ip = 57; continue _fun0003 }
 15:
                var3 = global;
                var4 = var3.performance;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                var4 = var2.endTime;
                if(!(var1 != var4)) { _fun0003_ip = 45; continue _fun0003 }
 42:
                var3 = var4;
 45:
                var2 = var2.startTime;
                var2 = var3 - var2;
                return var2;
 57:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[6] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var5 = 35;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var4 = function(arg1) {
        var4 = function StreamRTCConnection(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg1;
                var13 = this;
                var19 = var1.sessionId;
                var8 = var1.streamKey;
                var16 = var1.serverId;
                var10 = var1.initialLayout;
                var3 = var1.analyticsContext;
                var7 = var1.isStreamer;
                var14 = var1.parentMediaSessionId;
                var15 = var1.channelId;
                var1 = _closure1_slot7;
                var11 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var13, var11);
                var12 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 19;
                var1 = var6[var1];
                var9 = var12.bind(var5)(var1);
                var1 = var9.decodeStreamKey;
                var9 = var1.bind(var9)(var8);
                var18 = var9.guildId;
                var17 = var9.channelId;
                var1 = {};
                var21 = _closure1_slot11;
                var20 = var21.getId;
                var20 = var20.bind(var21)();
                var1['userId'] = var20;
                var1['sessionId'] = var19;
                var1['guildId'] = var18;
                var1['channelId'] = var17;
                var17 = _closure1_slot22;
                var17 = var17.STREAM;
                var1['context'] = var17;
                var1['streamServerId'] = var16;
                var1['streamChannelId'] = var15;
                var1['parentMediaSessionId'] = var14;
                var14 = null;
                var1['joinVoiceId'] = var14;
                var18 = new Array(1);
                var18[0] = var1;
                var1 = _closure1_slot4;
                var17 = var1.bind(var5)(var11);
                var11 = _closure1_slot3;
                var1 = _closure1_slot25;
                var1 = var1.bind(var5)();
                if(var1) { _fun0004_ip = 232; continue _fun0004 }
 219:
                var1 = var17.apply;
                var1 = var1.bind(var17)(var13, var18);
                _fun0004_ip = 266; continue _fun0004;
 232:
                var14 = global;
                var16 = var14.Reflect;
                var15 = var16.construct;
                var14 = _closure1_slot4;
                var14 = var14.bind(var5)(var13);
                var14 = var14.constructor;
                var1 = var15.bind(var16)(var17, var18, var14);
 266:
                var1 = var11.bind(var5)(var13, var1);
                var _closure3_slot0 = var1;
                var11 = new Array(0);
                var1['bandwidthSamples'] = var11;
                var11 = false;
                var1['_firstFrameDelivered'] = var11;
                var11 = {};
                var1['soundshareFailuresReported'] = var11;
                var11 = 20;
                var11 = var6[var11];
                var11 = var12.bind(var5)(var11);
                var11 = var11.Timeout;
                var12 = var11.prototype;
                var12 = Object.create(var12, {constructor: {value: var11}});
                var25 = var12;
                var11 = new var25[var11](var24);
                var11 = var11 instanceof Object ? var11 : var12;
                var1['errorTimer'] = var11;
                var1['streamContext'] = var9;
                var1['streamKey'] = var8;
                var1['isStreamer'] = var7;
                var4 = _closure1_slot1;
                var7 = 21;
                var7 = var6[var7];
                var9 = var4.bind(var5)(var7);
                var23 = var1.isOwner;
                var8 = var9.prototype;
                var8 = Object.create(var8, {constructor: {value: var9}});
                var25 = var8;
                var24 = var10;
                var7 = new var25[var9](var24, var23, var22);
                var7 = var7 instanceof Object ? var7 : var8;
                var1['videoStreamStats'] = var7;
                var1['analyticsContext'] = var3;
                var3 = 22;
                var3 = var6[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.debounce;
                var3 = function(arg1, arg2) {
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 19;
                    var2 = var4[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var3 = var6.decodeStreamKey;
                    var7 = _closure3_slot0;
                    var2 = var7.streamKey;
                    var2 = var3.bind(var6)(var2);
                    var9 = var2.guildId;
                    var8 = var2.channelId;
                    var6 = var2.ownerId;
                    var3 = _closure1_slot1;
                    var2 = 23;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var10 = 'RTC_CONNECTION_VIDEO';
                    var2['type'] = var10;
                    var2['guildId'] = var9;
                    var2['channelId'] = var8;
                    var2['userId'] = var6;
                    var6 = arg1;
                    var2['streamId'] = var6;
                    var6 = arg2;
                    var2['rtcServerId'] = var6;
                    var6 = var7.getMediaEngineConnectionId;
                    var6 = var6.bind(var7)();
                    var2['mediaEngineConnectionId'] = var6;
                    var5 = _closure1_slot22;
                    var5 = var5.STREAM;
                    var2['context'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = 200;
                var2 = var4.bind(var5)(var3, var2);
                var1['updateVideoStreamId'] = var2;
                var3 = var1.videoStreamStats;
                var2 = var3.start;
                var2 = var2.bind(var3)();
                var2 = var1.initializeEvents;
                var2 = var2.bind(var1)();
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot8;
        var5 = {};
        var1 = 'isOwner';
        var5['key'] = var1;
        var1 = function get() {
            var1 = this;
            var1 = var1.streamContext;
            var2 = var1.ownerId;
            var3 = _closure1_slot11;
            var1 = var3.getId;
            var1 = var1.bind(var3)();
            var1 = var1 === var2;
            return var1;
        };
        var5['get'] = var1;
        var1 = new Array(16);
        var1[0] = var5;
        var5 = {};
        var7 = 'destroy';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var6 = this;
            var2 = var6.videoStreamStats;
            var1 = var2.stop;
            var1 = var1.bind(var2)();
            var2 = var6.trackVideoEndStats;
            var1 = arg1;
            var1 = var2.bind(var6)(var1);
            var2 = var6.updateVideoStreamId;
            var1 = var2.cancel;
            var1 = var1.bind(var2)();
            var2 = var6.updateVideoStreamId;
            var1 = null;
            var1 = var2.bind(var6)(var1, var1);
            var2 = var6.updateVideoStreamId;
            var1 = var2.flush;
            var1 = var1.bind(var2)();
            var2 = var6.errorTimer;
            var1 = var2.stop;
            var1 = var1.bind(var2)();
            var10 = _closure2_slot0;
            var4 = function _superPropGet(arg1, arg2, arg3, arg4) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var5 = arg1;
                    var7 = arg3;
                    var _closure4_slot0 = var7;
                    var6 = _closure1_slot5;
                    var4 = _closure1_slot4;
                    var1 = 1;
                    var3 = 3;
                    var8 = var1 & var3;
                    var1 = var5;
                    if(!var8) { _fun0005_ip = 44; continue _fun0005 }
 39:
                    var1 = var5.prototype;
 44:
                    var5 = undefined;
                    var4 = var4.bind(var5)(var1);
                    var1 = 'destroy';
                    var5 = var6.bind(var5)(var4, var1, var7);
                    var _closure4_slot1 = var5;
                    var1 = 2;
                    var3 = var1 & var3;
                    var1 = var5;
                    if(!var3) { _fun0005_ip = 98; continue _fun0005 }
 79:
                    var4 = 'function';
                    var3 = typeof var5;
                    var1 = var5;
                    if(!(var4 === var3)) { _fun0005_ip = 98; continue _fun0005 }
 93:
                    var1 = function(arg1) {
                        var4 = _closure4_slot1;
                        var3 = var4.apply;
                        var2 = _closure4_slot0;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
 98:
                    return var1;
                }
            };
            var1 = undefined;
            var9 = 'destroy';
            var7 = 3;
            var11 = undefined;
            var8 = var6;
            var3 = var11[var4](var10, var9, var8, var7, var6);
            var2 = new Array(0);
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'streamUpdate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = this;
                var2 = var1._videoQuality;
                var1 = null;
                if(!(var1 != var2)) { _fun0006_ip = 43; continue _fun0006 }
 15:
                var1 = arg1;
                if(var1) { _fun0006_ip = 33; continue _fun0006 }
 21:
                var1 = var2.resume;
                var1 = var1.bind(var2)();
                _fun0006_ip = 43; continue _fun0006;
 33:
                var1 = var2.pause;
                var1 = var1.bind(var2)();
 43:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'layoutChange';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = this;
            var3 = var1.videoStreamStats;
            var2 = var3.layoutChange;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getVideoStats';
        var5['key'] = var7;
        var7 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = this;
                var2 = var1.streamContext;
                var2 = var2.ownerId;
                var4 = var1._videoQuality;
                var3 = null;
                if(!(var3 == var4)) { _fun0007_ip = 29; continue _fun0007 }
 27:
                return var3;
 29:
                var1 = var1.isOwner;
                if(var1) { _fun0007_ip = 57; continue _fun0007 }
 38:
                var1 = var4.getInboundStats;
                var2 = var1.bind(var4)(var2);
                if(!(var3 == var2)) { _fun0007_ip = 55; continue _fun0007 }
 53:
                var2 = {};
 55:
                _fun0007_ip = 82; continue _fun0007;
 57:
                var1 = var4.getOutboundStats;
                var4 = var1.bind(var4)();
                var1 = 0;
                var1 = var4[var1];
                if(!(var3 == var1)) { _fun0007_ip = 79; continue _fun0007 }
 77:
                var1 = {};
 79:
                var2 = var1;
 82:
                var1 = {};
                var3 = var2.duration;
                var1['duration'] = var3;
                var3 = var2.avg_bitrate;
                var1['avg_bitrate'] = var3;
                var3 = var2.avg_fps;
                var1['avg_fps'] = var3;
                var3 = var2.avg_resolution;
                var1['avg_resolution'] = var3;
                var2 = var2.inbound_bitrate_estimate_percentile99;
                var1['inbound_bitrate_estimate_percentile99'] = var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getRegion';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.analyticsContext;
            var1 = var1.streamRegion;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getMaxViewers';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.analyticsContext;
            var1 = var1.maxViewers;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getVoiceParticipantType';
        var5['key'] = var7;
        var7 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var1 = this;
                var2 = var1.isOwner;
                var1 = 'receiver';
                if(!var2) { _fun0008_ip = 24; continue _fun0008 }
 18:
                var1 = 'streamer';
 24:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'updateStats';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var7 = arg1;
                var4 = this;
                var _closure3_slot0 = var4;
                var1 = var4.isOwner;
                var5 = !var1;
                if(!var5) { _fun0009_ip = 55; continue _fun0009 }
 24:
                var8 = var4._goLiveQualityManager;
                var2 = null;
                var6 = var2 == var8;
                var1 = undefined;
                if(var6) { _fun0009_ip = 51; continue _fun0009 }
 41:
                var6 = var8.getUserID;
                var1 = var6.bind(var8)();
 51:
                var5 = var2 != var1;
 55:
                var2 = var4.goliveCurrentMaxResolution;
                var1 = undefined;
                var2 = var1 !== var2;
                if(!var2) { _fun0009_ip = 114; continue _fun0009 }
 70:
                var6 = var4.goliveCurrentMaxResolution;
                var8 = var6.height;
                var6 = 720;
                var6 = var8 > var6;
                if(var6) { _fun0009_ip = 111; continue _fun0009 }
 94:
                var8 = var4.goliveCurrentMaxResolution;
                var9 = var8.height;
                var8 = 0;
                var6 = var8 === var9;
 111:
                var2 = var6;
 114:
                var6 = var7.find;
                var3 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var1 = arg1;
                        var2 = var1.mediaEngineConnectionId;
                        var1 = _closure3_slot0;
                        var3 = var1._connection;
                        var1 = null;
                        var4 = var1 == var3;
                        var1 = undefined;
                        if(var4) { _fun0010_ip = 39; continue _fun0010 }
 33:
                        var1 = var3.mediaEngineConnectionId;
 39:
                        var1 = var2 === var1;
                        return var1;
                    }
                };
                var7 = var6.bind(var7)(var3);
                var3 = null;
                var8 = var3 == var7;
                var6 = undefined;
                if(var8) { _fun0009_ip = 147; continue _fun0009 }
 141:
                var6 = var7.stats;
 147:
                var8 = var3 != var6;
                var12 = 'unknown';
                var11 = undefined;
                var7 = var12;
                if(!var8) { _fun0009_ip = 374; continue _fun0009 }
 166:
                var11 = undefined;
                var7 = var12;
                if(!var5) { _fun0009_ip = 374; continue _fun0009 }
 177:
                var6 = var6.transport;
                var9 = var6.inboundBitrateEstimate;
                var6 = var3 != var9;
                if(!var6) { _fun0009_ip = 206; continue _fun0009 }
 196:
                var8 = 100000000;
                var6 = var9 < var8;
 206:
                var11 = undefined;
                var7 = var12;
                if(!var6) { _fun0009_ip = 374; continue _fun0009 }
 217:
                var8 = var4.bandwidthSamples;
                var6 = var8.push;
                var6 = var6.bind(var8)(var9);
                var6 = var4.bandwidthSamples;
                var6 = var6.length;
                var10 = 10;
                if(!(var6 > var10)) { _fun0009_ip = 267; continue _fun0009 }
 251:
                var8 = var4.bandwidthSamples;
                var6 = var8.shift;
                var6 = var6.bind(var8)();
 267:
                var6 = var4.bandwidthSamples;
                var9 = var6.length;
                var8 = undefined;
                var6 = var12;
                if(!(var10 === var9)) { _fun0009_ip = 368; continue _fun0009 }
 287:
                var10 = _closure1_slot1;
                var13 = _closure1_slot2;
                var9 = 22;
                var9 = var13[var9];
                var13 = var10.bind(var1)(var9);
                var10 = var13.mean;
                var9 = var4.bandwidthSamples;
                var10 = var10.bind(var13)(var9);
                var13 = 1500000;
                var14 = var10 > var13;
                var9 = 'HQ';
                if(var14) { _fun0009_ip = 362; continue _fun0009 }
 346:
                var13 = var10 < var13;
                if(!var13) { _fun0009_ip = 359; continue _fun0009 }
 353:
                var12 = 'LQ';
 359:
                var9 = var12;
 362:
                var6 = var9;
                var8 = var10;
 368:
                var11 = var8;
                var7 = var6;
 374:
                var9 = var4._goLiveQualityManager;
                var6 = var3 == var9;
                var8 = undefined;
                if(var6) { _fun0009_ip = 399; continue _fun0009 }
 389:
                var6 = var9.isDowngraded;
                var8 = var6.bind(var9)();
 399:
                var6 = var3 != var8;
                if(!var6) { _fun0009_ip = 409; continue _fun0009 }
 406:
                var6 = var8;
 409:
                var8 = 'HQ';
                if(!(var8 === var7)) { _fun0009_ip = 422; continue _fun0009 }
 419:
                if(var6) { _fun0009_ip = 512; continue _fun0009 }
 422:
                var8 = 'LQ';
                if(!(var8 === var7)) { _fun0009_ip = 575; continue _fun0009 }
 435:
                if(var6) { _fun0009_ip = 575; continue _fun0009 }
 441:
                if(!var2) { _fun0009_ip = 575; continue _fun0009 }
 447:
                var9 = var4.logger;
                var8 = var9.info;
                var6 = global;
                var6 = var6.HermesInternal;
                var10 = var6.concat;
                var6 = 'Attempting to downgrade to LQ simulcast stream, bandwidth estimate: ';
                var6 = var10.bind(var6)(var11);
                var6 = var8.bind(var9)(var6);
                var9 = var4._goLiveQualityManager;
                if(!(var3 != var9)) { _fun0009_ip = 575; continue _fun0009 }
 497:
                var8 = var9.setGoLiveStreamDowngraded;
                var6 = true;
                var6 = var8.bind(var9)(var6);
                _fun0009_ip = 575; continue _fun0009;
 512:
                var9 = var4.logger;
                var8 = var9.info;
                var6 = global;
                var6 = var6.HermesInternal;
                var10 = var6.concat;
                var6 = 'Attempting to upgrade to HQ simulcast stream, bandwidth estimate: ';
                var6 = var10.bind(var6)(var11);
                var6 = var8.bind(var9)(var6);
                var9 = var4._goLiveQualityManager;
                if(!(var3 != var9)) { _fun0009_ip = 575; continue _fun0009 }
 562:
                var8 = var9.setGoLiveStreamDowngraded;
                var6 = false;
                var6 = var8.bind(var9)(var6);
 575:
                if(!var5) { _fun0009_ip = 744; continue _fun0009 }
 581:
                var8 = var4._goLiveQualityManager;
                var5 = var3 != var8;
                if(!var5) { _fun0009_ip = 604; continue _fun0009 }
 594:
                var6 = var8.senderSupportsSimulcast;
                var5 = var6.bind(var8)();
 604:
                var8 = !var5;
                if(var8) { _fun0009_ip = 641; continue _fun0009 }
 610:
                var9 = var4._goLiveQualityManager;
                var5 = var3 == var9;
                var6 = undefined;
                if(var5) { _fun0009_ip = 635; continue _fun0009 }
 625:
                var5 = var9.isDowngraded;
                var6 = var5.bind(var9)();
 635:
                var5 = false;
                var8 = var5 === var6;
 641:
                var6 = var4._videoQuality;
                if(!(var3 != var6)) { _fun0009_ip = 664; continue _fun0009 }
 651:
                var5 = var6.setViewedSimulcastQuality;
                var5 = var5.bind(var6)(var8);
 664:
                var8 = var4._goLiveQualityManager;
                var5 = var3 == var8;
                var6 = undefined;
                if(var5) { _fun0009_ip = 689; continue _fun0009 }
 679:
                var5 = var8.isOneToOneCall;
                var6 = var5.bind(var8)();
 689:
                var5 = var3 != var6;
                if(!var5) { _fun0009_ip = 699; continue _fun0009 }
 696:
                var5 = var6;
 699:
                if(!var2) { _fun0009_ip = 712; continue _fun0009 }
 702:
                var6 = 'LQ';
                var2 = var6 === var7;
 712:
                if(!var2) { _fun0009_ip = 718; continue _fun0009 }
 715:
                var2 = !var5;
 718:
                var4 = var4._videoQuality;
                if(!(var3 != var4)) { _fun0009_ip = 744; continue _fun0009 }
 728:
                var3 = var4.setEligibleSimulcastQuality;
                var2 = !var2;
                var2 = var3.bind(var4)(var2);
 744:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'initializeEvents';
        var5['key'] = var7;
        var7 = function value() {
            var5 = this;
            var _closure3_slot0 = var5;
            var1 = false;
            var _closure3_slot1 = var1;
            var9 = var5.on;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 24;
            var4 = var7[var3];
            var1 = undefined;
            var4 = var6.bind(var1)(var4);
            var4 = var4.RTCConnectionEvent;
            var8 = var4.State;
            var4 = function(arg1, arg2, arg3) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var6 = arg1;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 23;
                    var4 = var4[var1];
                    var1 = undefined;
                    var8 = var5.bind(var1)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var5 = 'RTC_CONNECTION_STATE';
                    var4['type'] = var5;
                    var4['state'] = var6;
                    var11 = arg2;
                    var12 = var4;
                    var5 = copyDataProperties(var12, var11);
                    var11 = arg3;
                    var12 = var4;
                    var5 = copyDataProperties(var12, var11);
                    var9 = _closure3_slot0;
                    var10 = var9.streamKey;
                    var9 = 'streamKey';
                    var4[var9] = var10;
                    var4 = var7.bind(var8)(var4);
                    var4 = _closure1_slot21;
                    var4 = var4.RTC_CONNECTED;
                    if(!(var6 === var4)) { _fun0011_ip = 619; continue _fun0011 }
 113:
                    var4 = _closure3_slot0;
                    var9 = var4._connection;
                    var4 = null;
                    if(!(var4 != var9)) { _fun0011_ip = 178; continue _fun0011 }
 129:
                    var8 = var9.on;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 25;
                    var6 = var10[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.BaseConnectionEvent;
                    var7 = var6.ScreenshareFinish;
                    var6 = function(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16) {
                        var1 = arg1;
                        var _closure5_slot0 = var1;
                        var1 = arg2;
                        var _closure5_slot1 = var1;
                        var1 = arg3;
                        var _closure5_slot2 = var1;
                        var1 = arg4;
                        var _closure5_slot3 = var1;
                        var1 = arg5;
                        var _closure5_slot4 = var1;
                        var1 = arg6;
                        var _closure5_slot5 = var1;
                        var1 = arg7;
                        var _closure5_slot6 = var1;
                        var1 = arg8;
                        var _closure5_slot7 = var1;
                        var1 = arg9;
                        var _closure5_slot8 = var1;
                        var1 = arg10;
                        var _closure5_slot9 = var1;
                        var1 = arg11;
                        var _closure5_slot10 = var1;
                        var1 = arg12;
                        var _closure5_slot11 = var1;
                        var1 = arg13;
                        var _closure5_slot12 = var1;
                        var1 = arg14;
                        var _closure5_slot13 = var1;
                        var1 = arg15;
                        var _closure5_slot14 = var1;
                        var1 = arg16;
                        var _closure5_slot15 = var1;
                        var3 = _closure3_slot0;
                        var1 = var3.getMediaSessionId;
                        var1 = var1.bind(var3)();
                        var _closure5_slot16 = var1;
                        var1 = var3.getRTCConnectionId;
                        var1 = var1.bind(var3)();
                        var _closure5_slot17 = var1;
                        var1 = var3.getGoLiveSource;
                        var1 = var1.bind(var3)();
                        var _closure5_slot18 = var1;
                        var3 = _closure1_slot18;
                        var1 = undefined;
                        var4 = var3.bind(var1)();
                        var3 = var4.then;
                        var2 = function(arg1) {
                            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                                var2 = arg1;
                                var9 = null;
                                var1 = var9 != var2;
                                var6 = null;
                                if(!var1) { _fun0012_ip = 74; continue _fun0012 }
 14:
                                var1 = {};
                                var3 = var2.cpu_brand;
                                var1['cpu_brand'] = var3;
                                var3 = var2.cpu_vendor;
                                var1['cpu_vendor'] = var3;
                                var3 = var2.cpu_memory;
                                var1['cpu_memory'] = var3;
                                var3 = var2.gpu_brand;
                                var1['gpu_brand'] = var3;
                                var2 = var2.gpu_memory;
                                var1['gpu_memory'] = var2;
                                var6 = var1;
 74:
                                var1 = _closure5_slot0;
                                var1 = var9 != var1;
                                var3 = 0;
                                if(!var1) { _fun0012_ip = 94; continue _fun0012 }
 90:
                                var3 = _closure5_slot0;
 94:
                                var1 = _closure5_slot1;
                                var4 = var9 != var1;
                                var1 = 0;
                                if(!var4) { _fun0012_ip = 111; continue _fun0012 }
 107:
                                var1 = _closure5_slot1;
 111:
                                var3 = var3 + var1;
                                var1 = _closure5_slot2;
                                var4 = var9 != var1;
                                var1 = 0;
                                if(!var4) { _fun0012_ip = 132; continue _fun0012 }
 128:
                                var1 = _closure5_slot2;
 132:
                                var3 = var3 + var1;
                                var1 = _closure5_slot3;
                                var4 = var9 != var1;
                                var1 = 0;
                                if(!var4) { _fun0012_ip = 153; continue _fun0012 }
 149:
                                var1 = _closure5_slot3;
 153:
                                var3 = var3 + var1;
                                var1 = _closure5_slot4;
                                var4 = var9 != var1;
                                var1 = 0;
                                if(!var4) { _fun0012_ip = 174; continue _fun0012 }
 170:
                                var1 = _closure5_slot4;
 174:
                                var3 = var3 + var1;
                                var1 = _closure5_slot5;
                                var4 = var9 != var1;
                                var1 = 0;
                                if(!var4) { _fun0012_ip = 195; continue _fun0012 }
 191:
                                var1 = _closure5_slot5;
 195:
                                var3 = var3 + var1;
                                var1 = _closure5_slot9;
                                var4 = var9 != var1;
                                var1 = 0;
                                if(!var4) { _fun0012_ip = 216; continue _fun0012 }
 212:
                                var1 = _closure5_slot9;
 216:
                                var3 = var3 + var1;
                                var1 = _closure5_slot15;
                                var4 = var9 != var1;
                                var1 = 0;
                                if(!var4) { _fun0012_ip = 237; continue _fun0012 }
 233:
                                var1 = _closure5_slot15;
 237:
                                var1 = var3 + var1;
                                var3 = _closure5_slot14;
                                var3 = var9 != var3;
                                var2 = 0;
                                if(!var3) { _fun0012_ip = 258; continue _fun0012 }
 254:
                                var2 = _closure5_slot14;
 258:
                                var14 = var1 + var2;
                                var1 = _closure5_slot18;
                                var3 = var9 == var1;
                                var1 = undefined;
                                var2 = undefined;
                                if(var3) { _fun0012_ip = 302; continue _fun0012 }
 277:
                                var3 = _closure5_slot18;
                                var3 = var3.desktopSource;
                                var4 = var9 == var3;
                                var2 = undefined;
                                if(var4) { _fun0012_ip = 302; continue _fun0012 }
 296:
                                var2 = var3.sourcePid;
 302:
                                var2 = var9 != var2;
                                var5 = null;
                                if(!var2) { _fun0012_ip = 345; continue _fun0012 }
 311:
                                var4 = _closure1_slot10;
                                var3 = var4.getGameForPID;
                                var2 = _closure5_slot18;
                                var2 = var2.desktopSource;
                                var2 = var2.sourcePid;
                                var5 = var3.bind(var4)(var2);
 345:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 26;
                                var2 = var4[var2];
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.getRunningGameAnalytics;
                                var2 = var2.bind(var3)(var5);
                                var11 = var2.gameName;
                                var10 = var2.gameId;
                                var8 = var2.exe;
                                var7 = var2.distributor;
                                var3 = _closure1_slot1;
                                var2 = 27;
                                var2 = var4[var2];
                                var5 = var3.bind(var1)(var2);
                                var4 = var5.track;
                                var2 = _closure1_slot19;
                                var3 = var2.SCREENSHARE_FINISHED;
                                var2 = {};
                                var15 = _closure5_slot0;
                                var2['screenshare_frames'] = var15;
                                var15 = _closure5_slot1;
                                var2['videohook_frames'] = var15;
                                var15 = _closure5_slot2;
                                var2['hybrid_dxgi_frames'] = var15;
                                var15 = _closure5_slot3;
                                var2['hybrid_gdi_frames'] = var15;
                                var15 = _closure5_slot4;
                                var2['hybrid_videohook_frames'] = var15;
                                var15 = _closure5_slot5;
                                var2['hybrid_graphics_capture_frames'] = var15;
                                var15 = _closure5_slot6;
                                var2['hybrid_capture_method_switches'] = var15;
                                var15 = _closure5_slot7;
                                var2['hybrid_gdi_bitblt_frames'] = var15;
                                var15 = _closure5_slot8;
                                var2['hybrid_gdi_printwindow_frames'] = var15;
                                var15 = _closure5_slot9;
                                var2['quartz_frames'] = var15;
                                var15 = _closure5_slot15;
                                var2['screencapturekit_frames'] = var15;
                                var15 = _closure5_slot14;
                                var2['go_live_camera_frames'] = var15;
                                var2['total_frames'] = var14;
                                var14 = _closure5_slot10;
                                var2['desktop_capturer_type'] = var14;
                                var14 = _closure5_slot16;
                                var2['media_session_id'] = var14;
                                var14 = _closure5_slot17;
                                var2['rtc_connection_id'] = var14;
                                var13 = _closure1_slot22;
                                var13 = var13.STREAM;
                                var2['context'] = var13;
                                var13 = _closure5_slot11;
                                var2['screens'] = var13;
                                var13 = _closure5_slot12;
                                var2['windows'] = var13;
                                var13 = _closure5_slot13;
                                var2['activity'] = var13;
                                var13 = _closure5_slot18;
                                var14 = var9 == var13;
                                var13 = undefined;
                                if(var14) { _fun0012_ip = 681; continue _fun0012 }
 656:
                                var12 = _closure5_slot18;
                                var12 = var12.desktopSource;
                                var14 = var9 == var12;
                                var13 = undefined;
                                if(var14) { _fun0012_ip = 681; continue _fun0012 }
 675:
                                var13 = var12.soundshareSession;
 681:
                                var14 = var9 != var13;
                                var12 = undefined;
                                if(!var14) { _fun0012_ip = 693; continue _fun0012 }
 690:
                                var12 = var13;
 693:
                                var2['soundshare_session'] = var12;
                                var2['share_game_name'] = var11;
                                var2['share_game_id'] = var10;
                                var2['share_game_exe'] = var8;
                                var2['share_game_distributor'] = var7;
                                var8 = _closure3_slot0;
                                var8 = var8.analyticsContext;
                                var8 = var8.nativePickerStyleUsed;
                                var9 = var9 != var8;
                                var8 = 'internal';
                                if(!var9) { _fun0012_ip = 756; continue _fun0012 }
 752:
                                var8 = 'native';
 756:
                                var2['picker_type_used'] = var8;
                                var7 = _closure3_slot0;
                                var8 = var7.analyticsContext;
                                var7 = var8.getDuration;
                                var7 = var7.bind(var8)();
                                var2['duration'] = var7;
                                var17 = var2;
                                var16 = var6;
                                var6 = copyDataProperties(var17, var16);
                                var2 = var4.bind(var5)(var3, var2);
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var6 = var8.bind(var9)(var7, var6);
 178:
                    var6 = _closure3_slot0;
                    var9 = var6._connection;
                    if(!(var4 != var9)) { _fun0011_ip = 241; continue _fun0011 }
 192:
                    var8 = var9.on;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 25;
                    var6 = var10[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.BaseConnectionEvent;
                    var7 = var6.SoundshareAttached;
                    var6 = function() {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                            var2 = _closure3_slot0;
                            var1 = var2.getGoLiveSource;
                            var9 = var1.bind(var2)();
                            var7 = null;
                            var3 = var7 == var9;
                            var1 = undefined;
                            var2 = undefined;
                            if(var3) { _fun0013_ip = 36; continue _fun0013 }
 30:
                            var2 = var9.desktopSource;
 36:
                            if(!(var7 != var2)) { _fun0013_ip = 146; continue _fun0013 }
 40:
                            var10 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var3 = 27;
                            var3 = var11[var3];
                            var5 = var10.bind(var1)(var3);
                            var4 = var5.track;
                            var2 = _closure1_slot19;
                            var3 = var2.SOUNDSHARE_ATTACHED;
                            var2 = {};
                            var8 = 28;
                            var8 = var11[var8];
                            var8 = var10.bind(var1)(var8);
                            var10 = var7 == var9;
                            var7 = undefined;
                            if(var10) { _fun0013_ip = 107; continue _fun0013 }
 101:
                            var7 = var9.desktopSource;
 107:
                            var12 = var8.bind(var1)(var7);
                            var13 = var2;
                            var7 = copyDataProperties(var13, var12);
                            var7 = _closure3_slot0;
                            var6 = var7.getSoundshareAnalyticsProperties;
                            var12 = var6.bind(var7)();
                            var13 = var2;
                            var6 = copyDataProperties(var13, var12);
                            var2 = var4.bind(var5)(var3, var2);
 146:
                            return var1;
                        }
                    };
                    var6 = var8.bind(var9)(var7, var6);
 241:
                    var6 = _closure3_slot0;
                    var9 = var6._connection;
                    if(!(var4 != var9)) { _fun0011_ip = 304; continue _fun0011 }
 255:
                    var8 = var9.on;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 25;
                    var6 = var10[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.BaseConnectionEvent;
                    var7 = var6.SoundshareFailed;
                    var6 = function(arg1) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                            var1 = arg1;
                            var7 = var1.failureCode;
                            var6 = var1.failureReason;
                            var5 = var1.willRetry;
                            var4 = _closure3_slot0;
                            var1 = var4.getGoLiveSource;
                            var8 = var1.bind(var4)();
                            var3 = var4.reportSoundshareFailure;
                            var1 = null;
                            var9 = var1 == var8;
                            var1 = undefined;
                            var2 = undefined;
                            if(var9) { _fun0014_ip = 63; continue _fun0014 }
 57:
                            var2 = var8.desktopSource;
 63:
                            var14 = var4;
                            var13 = var2;
                            var12 = var7;
                            var11 = var6;
                            var10 = var5;
                            var2 = var14[var3](var13, var12, var11, var10, var9);
                            return var1;
                        }
                    };
                    var6 = var8.bind(var9)(var7, var6);
 304:
                    var6 = _closure3_slot0;
                    var9 = var6._connection;
                    if(!(var4 != var9)) { _fun0011_ip = 367; continue _fun0011 }
 318:
                    var8 = var9.on;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 25;
                    var6 = var10[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.BaseConnectionEvent;
                    var7 = var6.SoundshareSpeaking;
                    var6 = function() {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                            var2 = _closure3_slot0;
                            var1 = var2.getGoLiveSource;
                            var11 = var1.bind(var2)();
                            var4 = null;
                            var3 = var4 == var11;
                            var1 = undefined;
                            var2 = undefined;
                            if(var3) { _fun0015_ip = 36; continue _fun0015 }
 30:
                            var2 = var11.desktopSource;
 36:
                            if(!(var4 != var2)) { _fun0015_ip = 220; continue _fun0015 }
 43:
                            var10 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var3 = 27;
                            var3 = var12[var3];
                            var7 = var10.bind(var1)(var3);
                            var6 = var7.track;
                            var3 = _closure1_slot19;
                            var5 = var3.SOUNDSHARE_TRANSMITTING;
                            var3 = {};
                            var9 = 28;
                            var9 = var12[var9];
                            var10 = var10.bind(var1)(var9);
                            var12 = var4 == var11;
                            var9 = undefined;
                            if(var12) { _fun0015_ip = 110; continue _fun0015 }
 104:
                            var9 = var11.desktopSource;
 110:
                            var13 = var10.bind(var1)(var9);
                            var14 = var3;
                            var9 = copyDataProperties(var14, var13);
                            var9 = _closure3_slot0;
                            var8 = var9.getSoundshareAnalyticsProperties;
                            var13 = var8.bind(var9)();
                            var14 = var3;
                            var8 = copyDataProperties(var14, var13);
                            var3 = var6.bind(var7)(var5, var3);
                            var6 = _closure1_slot13;
                            var5 = var6.getHookError;
                            var3 = _closure1_slot20;
                            var3 = var3.SOUND;
                            var3 = var5.bind(var6)(var3);
                            if(!(var4 != var3)) { _fun0015_ip = 220; continue _fun0015 }
 178:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 23;
                            var2 = var4[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var5 = 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING';
                            var2['type'] = var5;
                            var2 = var3.bind(var4)(var2);
 220:
                            return var1;
                        }
                    };
                    var6 = var8.bind(var9)(var7, var6);
 367:
                    var6 = _closure3_slot0;
                    var9 = var6._connection;
                    if(!(var4 != var9)) { _fun0011_ip = 430; continue _fun0011 }
 381:
                    var8 = var9.on;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 25;
                    var6 = var10[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.BaseConnectionEvent;
                    var7 = var6.SoundshareTrace;
                    var6 = function(arg1) {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                            var2 = arg1;
                            var4 = _closure3_slot0;
                            var3 = var4.getGoLiveSource;
                            var9 = var3.bind(var4)();
                            var4 = var2.type;
                            var3 = 'soundshare_attach_requested';
                            if(!(var3 !== var4)) { _fun0016_ip = 321; continue _fun0016 }
 38:
                            var3 = 'soundshare_recv_failed';
                            if(!(var3 !== var4)) { _fun0016_ip = 156; continue _fun0016 }
 48:
                            var3 = 'soundshare_state_transition';
                            if(!(var3 === var4)) { _fun0016_ip = 356; continue _fun0016 }
 61:
                            var5 = var2.newState;
                            var4 = _closure1_slot24;
                            var4 = var4.PLAYING;
                            if(!(var5 === var4)) { _fun0016_ip = 356; continue _fun0016 }
 87:
                            var4 = _closure3_slot0;
                            var5 = var4.errorTimer;
                            var4 = var5.stop;
                            var4 = var4.bind(var5)();
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var3 = 23;
                            var4 = var4[var3];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.dispatch;
                            var3 = {};
                            var6 = 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING';
                            var3['type'] = var6;
                            var3 = var4.bind(var5)(var3);
                            _fun0016_ip = 356; continue _fun0016;
 156:
                            var6 = var2.reason;
                            var5 = var2.code;
                            var2 = var2.retry;
                            var3 = null;
                            var8 = var3 == var9;
                            var4 = undefined;
                            var7 = undefined;
                            if(var8) { _fun0016_ip = 192; continue _fun0016 }
 186:
                            var7 = var9.desktopSource;
 192:
                            if(!(var3 != var7)) { _fun0016_ip = 356; continue _fun0016 }
 199:
                            var8 = _closure3_slot0;
                            var7 = var8.reportSoundshareFailure;
                            var10 = var3 == var9;
                            var3 = undefined;
                            if(var10) { _fun0016_ip = 224; continue _fun0016 }
 218:
                            var3 = var9.desktopSource;
 224:
                            var15 = var8;
                            var14 = var3;
                            var13 = var5;
                            var12 = var6;
                            var11 = var2;
                            var3 = var15[var7](var14, var13, var12, var11, var10);
                            if(var2) { _fun0016_ip = 356; continue _fun0016 }
 246:
                            var2 = _closure3_slot0;
                            var3 = var2.errorTimer;
                            var2 = var3.stop;
                            var2 = var2.bind(var3)();
                            var3 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var2 = 23;
                            var2 = var7[var2];
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var7 = 'MEDIA_ENGINE_SOUNDSHARE_FAILED';
                            var2['type'] = var7;
                            var2['errorMessage'] = var6;
                            var2['errorCode'] = var5;
                            var2 = var3.bind(var4)(var2);
                            _fun0016_ip = 356; continue _fun0016;
 321:
                            var1 = _closure3_slot0;
                            var4 = var1.errorTimer;
                            var3 = var4.start;
                            var2 = _closure1_slot23;
                            var1 = function() {
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 23;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.dispatch;
                                var2 = {'type': 'MEDIA_ENGINE_SOUNDSHARE_FAILED', 'errorMessage': 'Sound Hook Failed'};
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            };
                            var1 = var3.bind(var4)(var2, var1);
 356:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var6 = var8.bind(var9)(var7, var6);
 430:
                    var6 = _closure3_slot0;
                    var9 = var6._connection;
                    if(!(var4 != var9)) { _fun0011_ip = 493; continue _fun0011 }
 444:
                    var8 = var9.on;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 25;
                    var6 = var10[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.BaseConnectionEvent;
                    var7 = var6.FirstFrameStats;
                    var6 = function(arg1) {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                            var6 = arg1;
                            var2 = _closure3_slot0;
                            var2 = var2._firstFrameDelivered;
                            if(var2) { _fun0017_ip = 647; continue _fun0017 }
 22:
                            var9 = _closure3_slot0;
                            var1 = true;
                            var9['_firstFrameDelivered'] = var1;
                            var1 = var9.getStreamAnalyticsProperties;
                            var7 = var1.bind(var9)();
                            var2 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var1 = 27;
                            var1 = var10[var1];
                            var8 = undefined;
                            var4 = var2.bind(var8)(var1);
                            var3 = var4.track;
                            var1 = _closure1_slot19;
                            var2 = var1.RECEIVER_FIRST_FRAME_DELIVERED;
                            var1 = {};
                            var11 = var7.guild_id;
                            var1['guild_id'] = var11;
                            var11 = var7.channel_id;
                            var1['channel_id'] = var11;
                            var11 = var7.rtc_connection_id;
                            var1['rtc_connection_id'] = var11;
                            var11 = var7.media_session_id;
                            var1['media_session_id'] = var11;
                            var7 = var7.parent_media_session_id;
                            var1['parent_media_session_id'] = var7;
                            var7 = var9.analyticsContext;
                            var7 = var7.numViewers;
                            var1['num_viewers'] = var7;
                            var7 = var9.getDuration;
                            var7 = var7.bind(var9)();
                            var1['time_connected_to_first_frame_delivered'] = var7;
                            var7 = _closure1_slot0;
                            var5 = 29;
                            var5 = var10[var5];
                            var7 = var7.bind(var8)(var5);
                            var5 = var7.now;
                            var7 = var5.bind(var7)();
                            var5 = var9.getCreatedTime;
                            var5 = var5.bind(var9)();
                            var5 = var7 - var5;
                            var1['time_total_to_first_frame'] = var5;
                            var7 = var6.remoteVideoStreamCreatedTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0017_ip = 274; continue _fun0017 }
 233:
                            var7 = var6.remoteUserCreatedTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0017_ip = 274; continue _fun0017 }
 245:
                            var7 = global;
                            var10 = var7.Number;
                            var11 = var6.remoteVideoStreamCreatedTimestamp;
                            var7 = var6.remoteUserCreatedTimestamp;
                            var7 = var11 - var7;
                            var5 = var10.bind(var8)(var7);
 274:
                            var1['time_remote_user_to_video_stream_created'] = var5;
                            var7 = var6.videoDataReceivedTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0017_ip = 334; continue _fun0017 }
 293:
                            var7 = var6.remoteVideoStreamCreatedTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0017_ip = 334; continue _fun0017 }
 305:
                            var7 = global;
                            var10 = var7.Number;
                            var11 = var6.videoDataReceivedTimestamp;
                            var7 = var6.remoteVideoStreamCreatedTimestamp;
                            var7 = var11 - var7;
                            var5 = var10.bind(var8)(var7);
 334:
                            var1['time_video_stream_created_to_video_data_received'] = var5;
                            var7 = var6.videoSourceDeliveredFrameTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0017_ip = 394; continue _fun0017 }
 353:
                            var7 = var6.videoDataReceivedTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0017_ip = 394; continue _fun0017 }
 365:
                            var7 = global;
                            var10 = var7.Number;
                            var11 = var6.videoSourceDeliveredFrameTimestamp;
                            var7 = var6.videoDataReceivedTimestamp;
                            var7 = var11 - var7;
                            var5 = var10.bind(var8)(var7);
 394:
                            var1['time_video_data_received_to_video_source_delivered_frame'] = var5;
                            var7 = var6.updateMLSExternalSenderTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0017_ip = 454; continue _fun0017 }
 413:
                            var7 = var6.remoteUserCreatedTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0017_ip = 454; continue _fun0017 }
 425:
                            var7 = global;
                            var10 = var7.Number;
                            var11 = var6.updateMLSExternalSenderTimestamp;
                            var7 = var6.remoteUserCreatedTimestamp;
                            var7 = var11 - var7;
                            var5 = var10.bind(var8)(var7);
 454:
                            var1['time_remote_user_to_mls_external_sender_updated'] = var5;
                            var7 = var6.setRemoteSecureFrameKeyRatchetTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0017_ip = 514; continue _fun0017 }
 473:
                            var7 = var6.remoteUserCreatedTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0017_ip = 514; continue _fun0017 }
 485:
                            var7 = global;
                            var10 = var7.Number;
                            var11 = var6.setRemoteSecureFrameKeyRatchetTimestamp;
                            var7 = var6.remoteUserCreatedTimestamp;
                            var7 = var11 - var7;
                            var5 = var10.bind(var8)(var7);
 514:
                            var1['time_remote_user_to_secure_frame_remote_key_ratchet_set'] = var5;
                            var7 = var6.setLocalSecureFrameKeyRatchetTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0017_ip = 574; continue _fun0017 }
 533:
                            var7 = var6.remoteUserCreatedTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0017_ip = 574; continue _fun0017 }
 545:
                            var7 = global;
                            var10 = var7.Number;
                            var11 = var6.setLocalSecureFrameKeyRatchetTimestamp;
                            var7 = var6.remoteUserCreatedTimestamp;
                            var7 = var11 - var7;
                            var5 = var10.bind(var8)(var7);
 574:
                            var1['time_remote_user_to_secure_frame_local_key_ratchet_set'] = var5;
                            var7 = var6.firstFrameDecryptedTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0017_ip = 634; continue _fun0017 }
 593:
                            var7 = var6.remoteUserCreatedTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0017_ip = 634; continue _fun0017 }
 605:
                            var7 = global;
                            var7 = var7.Number;
                            var9 = var6.firstFrameDecryptedTimestamp;
                            var6 = var6.remoteUserCreatedTimestamp;
                            var6 = var9 - var6;
                            var5 = var7.bind(var8)(var6);
 634:
                            var1['time_remote_user_to_first_frame_decrypted'] = var5;
                            var1 = var3.bind(var4)(var2, var1);
 647:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var6 = var8.bind(var9)(var7, var6);
 493:
                    var6 = _closure3_slot0;
                    var9 = var6._connection;
                    if(!(var4 != var9)) { _fun0011_ip = 556; continue _fun0011 }
 507:
                    var8 = var9.on;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 25;
                    var6 = var10[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.BaseConnectionEvent;
                    var7 = var6.FirstFrameEncryptedStats;
                    var6 = function(arg1) {
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                            var7 = arg1;
                            var2 = _closure3_slot0;
                            var1 = var2.getStreamAnalyticsProperties;
                            var6 = var1.bind(var2)();
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 27;
                            var3 = var3[var1];
                            var1 = undefined;
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.track;
                            var2 = _closure1_slot19;
                            var3 = var2.STREAMER_FIRST_FRAME_ENCRYPTED;
                            var2 = {};
                            var8 = var6.guild_id;
                            var2['guild_id'] = var8;
                            var8 = var6.channel_id;
                            var2['channel_id'] = var8;
                            var8 = var6.rtc_connection_id;
                            var2['rtc_connection_id'] = var8;
                            var8 = var6.media_session_id;
                            var2['media_session_id'] = var8;
                            var6 = var6.parent_media_session_id;
                            var2['parent_media_session_id'] = var6;
                            var8 = var7.videoReceiversSetTimestamp;
                            var6 = null;
                            if(!(var1 !== var8)) { _fun0018_ip = 166; continue _fun0018 }
 125:
                            var8 = var7.localUserCreatedTimestamp;
                            var6 = null;
                            if(!(var1 !== var8)) { _fun0018_ip = 166; continue _fun0018 }
 137:
                            var8 = global;
                            var10 = var8.Number;
                            var11 = var7.videoReceiversSetTimestamp;
                            var8 = var7.localUserCreatedTimestamp;
                            var8 = var11 - var8;
                            var6 = var10.bind(var1)(var8);
 166:
                            var2['time_local_user_to_video_receivers_set'] = var6;
                            var8 = var7.updateMLSExternalSenderTimestamp;
                            var6 = null;
                            if(!(var1 !== var8)) { _fun0018_ip = 226; continue _fun0018 }
 185:
                            var8 = var7.localUserCreatedTimestamp;
                            var6 = null;
                            if(!(var1 !== var8)) { _fun0018_ip = 226; continue _fun0018 }
 197:
                            var8 = global;
                            var10 = var8.Number;
                            var11 = var7.updateMLSExternalSenderTimestamp;
                            var8 = var7.localUserCreatedTimestamp;
                            var8 = var11 - var8;
                            var6 = var10.bind(var1)(var8);
 226:
                            var2['time_local_user_to_mls_external_sender_updated'] = var6;
                            var8 = var7.setRemoteSecureFrameKeyRatchetTimestamp;
                            var6 = null;
                            if(!(var1 !== var8)) { _fun0018_ip = 286; continue _fun0018 }
 245:
                            var8 = var7.localUserCreatedTimestamp;
                            var6 = null;
                            if(!(var1 !== var8)) { _fun0018_ip = 286; continue _fun0018 }
 257:
                            var8 = global;
                            var10 = var8.Number;
                            var11 = var7.setRemoteSecureFrameKeyRatchetTimestamp;
                            var8 = var7.localUserCreatedTimestamp;
                            var8 = var11 - var8;
                            var6 = var10.bind(var1)(var8);
 286:
                            var2['time_local_user_to_secure_frame_remote_key_ratchet_set'] = var6;
                            var8 = var7.setLocalSecureFrameKeyRatchetTimestamp;
                            var6 = null;
                            if(!(var1 !== var8)) { _fun0018_ip = 346; continue _fun0018 }
 305:
                            var8 = var7.localUserCreatedTimestamp;
                            var6 = null;
                            if(!(var1 !== var8)) { _fun0018_ip = 346; continue _fun0018 }
 317:
                            var8 = global;
                            var10 = var8.Number;
                            var11 = var7.setLocalSecureFrameKeyRatchetTimestamp;
                            var8 = var7.localUserCreatedTimestamp;
                            var8 = var11 - var8;
                            var6 = var10.bind(var1)(var8);
 346:
                            var2['time_local_user_to_secure_frame_local_key_ratchet_set'] = var6;
                            var8 = var7.firstFrameEncryptedTimestamp;
                            var6 = null;
                            if(!(var1 !== var8)) { _fun0018_ip = 406; continue _fun0018 }
 365:
                            var8 = var7.localUserCreatedTimestamp;
                            var6 = null;
                            if(!(var1 !== var8)) { _fun0018_ip = 406; continue _fun0018 }
 377:
                            var8 = global;
                            var8 = var8.Number;
                            var9 = var7.firstFrameEncryptedTimestamp;
                            var7 = var7.localUserCreatedTimestamp;
                            var7 = var9 - var7;
                            var6 = var8.bind(var1)(var7);
 406:
                            var2['time_local_user_to_first_frame_encrypted'] = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        }
                    };
                    var6 = var8.bind(var9)(var7, var6);
 556:
                    var5 = _closure3_slot0;
                    var5 = var5._connection;
                    if(!(var4 != var5)) { _fun0011_ip = 619; continue _fun0011 }
 570:
                    var4 = var5.on;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 25;
                    var3 = var7[var3];
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.BaseConnectionEvent;
                    var3 = var3.Destroy;
                    var2 = function() {
                        var1 = _closure3_slot0;
                        var2 = var1.errorTimer;
                        var1 = var2.stop;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
                    };
                    var2 = var4.bind(var5)(var3, var2);
 619:
                    return var1;
                }
            };
            var4 = var9.bind(var5)(var8, var4);
            var9 = var5.on;
            var4 = var7[var3];
            var4 = var6.bind(var1)(var4);
            var4 = var4.RTCConnectionEvent;
            var8 = var4.Video;
            var4 = function(arg1, arg2, arg3, arg4, arg5) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.decodeStreamKey;
                    var3 = _closure3_slot0;
                    var3 = var3.streamKey;
                    var4 = var4.bind(var5)(var3);
                    var5 = var4.guildId;
                    var3 = arg1;
                    var3 = var5 === var3;
                    if(!var3) { _fun0019_ip = 76; continue _fun0019 }
 64:
                    var6 = var4.channelId;
                    var5 = arg2;
                    var3 = var6 === var5;
 76:
                    if(!var3) { _fun0019_ip = 92; continue _fun0019 }
 79:
                    var5 = var4.ownerId;
                    var4 = arg3;
                    var3 = var5 === var4;
 92:
                    if(!var3) { _fun0019_ip = 169; continue _fun0019 }
 95:
                    var4 = _closure3_slot0;
                    var3 = var4.getMediaSessionId;
                    var4 = var3.bind(var4)();
                    var3 = null;
                    var3 = var3 == var4;
                    if(var3) { _fun0019_ip = 122; continue _fun0019 }
 118:
                    var3 = _closure3_slot1;
 122:
                    if(var3) { _fun0019_ip = 147; continue _fun0019 }
 125:
                    var4 = _closure3_slot0;
                    var3 = var4.trackVideoStartStats;
                    var3 = var3.bind(var4)();
                    var3 = true;
                    _closure3_slot1 = var3;
 147:
                    var5 = _closure3_slot0;
                    var4 = var5.updateVideoStreamId;
                    var3 = arg4;
                    var2 = arg5;
                    var2 = var4.bind(var5)(var3, var2);
 169:
                    return var1;
                }
            };
            var4 = var9.bind(var5)(var8, var4);
            var9 = var5.on;
            var4 = var7[var3];
            var4 = var6.bind(var1)(var4);
            var4 = var4.RTCConnectionEvent;
            var8 = var4.VideoSourceQualityChanged;
            var4 = function(arg1, arg2, arg3, arg4, arg5, arg6) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                    var6 = arg3;
                    var5 = arg4;
                    var1 = _closure3_slot0;
                    var7 = var1._goLiveQualityManager;
                    var1 = null;
                    var4 = var1 == var7;
                    var1 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0020_ip = 42; continue _fun0020 }
 32:
                    var4 = var7.getUserID;
                    var3 = var4.bind(var7)();
 42:
                    if(!(var6 === var3)) { _fun0020_ip = 56; continue _fun0020 }
 46:
                    var2 = _closure3_slot0;
                    var2['goliveCurrentMaxResolution'] = var5;
 56:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 23;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var7 = 'MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED';
                    var2['type'] = var7;
                    var7 = arg1;
                    var2['guildId'] = var7;
                    var7 = arg2;
                    var2['channelId'] = var7;
                    var2['senderUserId'] = var6;
                    var2['maxResolution'] = var5;
                    var5 = arg5;
                    var2['maxFrameRate'] = var5;
                    var5 = arg6;
                    var2['context'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var4 = var9.bind(var5)(var8, var4);
            var9 = var5.on;
            var4 = var7[var3];
            var4 = var6.bind(var1)(var4);
            var4 = var4.RTCConnectionEvent;
            var8 = var4.SecureFramesUpdate;
            var4 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'RTC_CONNECTION_SECURE_FRAMES_UPDATE';
                var2['type'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var4 = var9.bind(var5)(var8, var4);
            var4 = var5.on;
            var3 = var7[var3];
            var3 = var6.bind(var1)(var3);
            var3 = var3.RTCConnectionEvent;
            var3 = var3.RosterMapUpdate;
            var2 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'RTC_CONNECTION_ROSTER_MAP_UPDATE';
                var2['type'] = var5;
                var5 = arg1;
                var2['userIds'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'reportSoundshareFailure';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var8 = arg1;
                var6 = arg2;
                var7 = this;
                var2 = null;
                var4 = var2 == var8;
                var1 = undefined;
                var3 = undefined;
                if(var4) { _fun0021_ip = 28; continue _fun0021 }
 22:
                var3 = var8.soundshareSession;
 28:
                var4 = var2 != var3;
                var5 = '';
                if(!var4) { _fun0021_ip = 42; continue _fun0021 }
 39:
                var5 = var3;
 42:
                var3 = var7.soundshareFailuresReported;
                var3 = var3[var5];
                if(!(var2 == var3)) { _fun0021_ip = 94; continue _fun0021 }
 56:
                var4 = var7.soundshareFailuresReported;
                var3 = global;
                var3 = var3.Set;
                var9 = var3.prototype;
                var9 = Object.create(var9, {constructor: {value: var3}});
                var13 = var9;
                var3 = new var13[var3](var12);
                var3 = var3 instanceof Object ? var3 : var9;
                var4[var5] = var3;
 94:
                var3 = var2 != var6;
                if(!var3) { _fun0021_ip = 124; continue _fun0021 }
 101:
                var4 = var7.soundshareFailuresReported;
                var9 = var4[var5];
                var4 = var9.has;
                var4 = var4.bind(var9)(var6);
                var3 = !var4;
 124:
                if(!var3) { _fun0021_ip = 147; continue _fun0021 }
 127:
                var4 = var7.soundshareFailuresReported;
                var5 = var4[var5];
                var4 = var5.add;
                var4 = var4.bind(var5)(var6);
 147:
                var2 = var2 == var6;
                if(var2) { _fun0021_ip = 157; continue _fun0021 }
 154:
                var2 = var3;
 157:
                if(!var2) { _fun0021_ip = 274; continue _fun0021 }
 160:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var3 = 27;
                var3 = var10[var3];
                var5 = var9.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot19;
                var3 = var2.SOUNDSHARE_FAILED;
                var2 = {};
                var2['soundshare_failure_code'] = var6;
                var6 = arg3;
                var2['soundshare_failure_reason'] = var6;
                var6 = arg4;
                var2['soundshare_failure_will_retry'] = var6;
                var6 = 28;
                var6 = var10[var6];
                var6 = var9.bind(var1)(var6);
                var11 = var6.bind(var1)(var8);
                var12 = var2;
                var6 = copyDataProperties(var12, var11);
                var6 = var7.getSoundshareAnalyticsProperties;
                var11 = var6.bind(var7)();
                var12 = var2;
                var6 = copyDataProperties(var12, var11);
                var2 = var4.bind(var5)(var3, var2);
 274:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getStreamAnalyticsProperties';
        var5['key'] = var7;
        var7 = function value() {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                var2 = this;
                var1 = var2.analyticsContext;
                var12 = var1.streamRegion;
                var5 = var1.streamApplication;
                var11 = var1.streamSourceType;
                var3 = var1.actionContext;
                var1 = var2.streamContext;
                var15 = var1.ownerId;
                var13 = var1.guildId;
                var6 = _closure1_slot17;
                var4 = var6.getRegion;
                var7 = _closure1_slot16;
                var1 = var7.getHostname;
                var1 = var1.bind(var7)();
                var10 = var4.bind(var6)(var1);
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 26;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var4);
                var1 = var4.getRunningGameAnalytics;
                var1 = var1.bind(var4)(var5);
                var9 = var1.gameName;
                var8 = var1.gameId;
                var7 = var1.exe;
                var6 = var1.distributor;
                var5 = var1.sku;
                var4 = var1.gameMetadata;
                var1 = {};
                var16 = var2.channelId;
                var1['channel_id'] = var16;
                var16 = var2.getRTCConnectionId;
                var16 = var16.bind(var2)();
                var1['rtc_connection_id'] = var16;
                var16 = var2.getMediaSessionId;
                var16 = var16.bind(var2)();
                var1['media_session_id'] = var16;
                var16 = var2.parentMediaSessionId;
                var1['parent_media_session_id'] = var16;
                var1['sender_user_id'] = var15;
                var14 = _closure1_slot22;
                var14 = var14.STREAM;
                var1['context'] = var14;
                var1['guild_id'] = var13;
                var1['stream_region'] = var12;
                var1['stream_source_type'] = var11;
                var1['guild_region'] = var10;
                var11 = var2.isOwner;
                var10 = 'receiver';
                if(!var11) { _fun0022_ip = 262; continue _fun0022 }
 256:
                var10 = 'streamer';
 262:
                var1['participant_type'] = var10;
                var1['share_application_name'] = var9;
                var1['share_application_id'] = var8;
                var1['share_application_executable'] = var7;
                var1['share_application_distributor'] = var6;
                var1['share_application_distributor_game_id'] = var5;
                var1['share_application_game_metadata'] = var4;
                var5 = var2.videoStreamStats;
                var4 = var5.getLayout;
                var4 = var4.bind(var5)();
                var1['video_layout'] = var4;
                var1['client_event_source'] = var3;
                var3 = var2.voiceVersion;
                var1['voice_backend_version'] = var3;
                var2 = var2.rtcWorkerVersion;
                var1['rtc_worker_backend_version'] = var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getSoundshareAnalyticsProperties';
        var5['key'] = var7;
        var7 = function value() {
            var3 = this;
            var1 = {};
            var2 = var3.getRTCConnectionId;
            var2 = var2.bind(var3)();
            var1['rtc_connection_id'] = var2;
            var3 = _closure1_slot14;
            var2 = var3.getExperimentalSoundshare;
            var2 = var2.bind(var3)();
            var1['soundshare_experimental'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'trackVideoStartStats';
        var5['key'] = var7;
        var7 = function value() {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var6 = this;
                var1 = var6.isOwner;
                var8 = null;
                if(!var1) { _fun0023_ip = 43; continue _fun0023 }
 14:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 30;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var3.bind(var2)(var1);
                var8 = var1.bind(var2)();
 43:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 27;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot19;
                var3 = var2.VIDEO_STREAM_STARTED;
                var2 = {};
                var9 = var6.getStreamAnalyticsProperties;
                var10 = var9.bind(var6)();
                var11 = var2;
                var9 = copyDataProperties(var11, var10);
                var11 = var2;
                var10 = var8;
                var8 = copyDataProperties(var11, var10);
                var8 = _closure1_slot15;
                var7 = var8.getType;
                var9 = var7.bind(var8)();
                var7 = 'connection_type';
                var2[var7] = var9;
                var7 = var8.getEffectiveConnectionSpeed;
                var9 = var7.bind(var8)();
                var7 = 'effective_connection_speed';
                var2[var7] = var9;
                var7 = var8.getServiceProvider;
                var8 = var7.bind(var8)();
                var7 = 'service_provider';
                var2[var7] = var8;
                var7 = var6.analyticsContext;
                var8 = var7.goLiveModalDurationMs;
                var7 = 'duration_go_live_modal';
                var2[var7] = var8;
                var6 = var6.analyticsContext;
                var7 = var6.analyticsLocations;
                var6 = 'source_location_stack';
                var2[var6] = var7;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'trackVideoEndStats';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                var6 = this;
                var _closure3_slot0 = var6;
                var2 = arg1;
                var _closure3_slot1 = var2;
                var5 = _closure1_slot12;
                var4 = var5.getChannel;
                var3 = var6.channelId;
                var5 = var4.bind(var5)(var3);
                var4 = null;
                var7 = var4 != var5;
                var3 = null;
                if(!var7) { _fun0024_ip = 54; continue _fun0024 }
 49:
                var3 = var5.type;
 54:
                var _closure3_slot4 = var3;
                var3 = var6.streamContext;
                var5 = var3.ownerId;
                var3 = var6._videoQuality;
                var _closure3_slot5 = var3;
                if(!(var4 != var3)) { _fun0024_ip = 382; continue _fun0024 }
 87:
                var4 = var3.getNetworkStats;
                var4 = var4.bind(var3)();
                var _closure3_slot2 = var4;
                var4 = var6.isOwner;
                var8 = var3.getCodecUsageStats;
                if(var4) { _fun0024_ip = 130; continue _fun0024 }
 116:
                var4 = 'receiver';
                var4 = var8.bind(var3)(var4, var5);
                _fun0024_ip = 147; continue _fun0024;
 130:
                var7 = var6.userId;
                var5 = 'streamer';
                var4 = var8.bind(var3)(var5, var7);
 147:
                var _closure3_slot3 = var4;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 31;
                var4 = var8[var4];
                var5 = undefined;
                var4 = var7.bind(var5)(var4);
                var10 = var4.default;
                var4 = {};
                var9 = var10.getApplicationNames;
                var9 = var9.bind(var10)();
                var4['stream_application_name'] = var9;
                var _closure3_slot6 = var4;
                var4 = 32;
                var4 = var8[var4];
                var5 = var7.bind(var5)(var4);
                var4 = var5.areClipsEnabled;
                var8 = var4.bind(var5)();
                var4 = _closure1_slot9;
                var2 = var4.getSettings;
                var5 = var2.bind(var4)();
                var2 = var6.isOwner;
                if(var2) { _fun0024_ip = 252; continue _fun0024 }
 248:
                var2 = {};
                _fun0024_ip = 289; continue _fun0024;
 252:
                var4 = {};
                var7 = var5.clipsEnabled;
                if(!var7) { _fun0024_ip = 266; continue _fun0024 }
 263:
                var7 = var8;
 266:
                var4['clips_enabled'] = var7;
                var5 = var5.clipsLength;
                var4['clips_buffer_length'] = var5;
                var2 = var4;
 289:
                var _closure3_slot7 = var2;
                var2 = var6.isOwner;
                if(var2) { _fun0024_ip = 306; continue _fun0024 }
 302:
                var2 = {};
                _fun0024_ip = 328; continue _fun0024;
 306:
                var4 = {};
                var5 = var6.getBandwidthEstimationExperiment;
                var5 = var5.bind(var6)();
                var4['bandwidth_estimation_experiment'] = var5;
                var2 = var4;
 328:
                var _closure3_slot8 = var2;
                var2 = var3.getOutboundStats;
                var5 = var2.bind(var3)();
                var4 = var5.forEach;
                var2 = function(arg1) {
                    _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                        var10 = arg1;
                        var3 = var10.num_frames;
                        var7 = null;
                        var4 = var7 != var3;
                        var2 = 0;
                        var1 = 0;
                        if(!var4) { _fun0025_ip = 25; continue _fun0025 }
 22:
                        var1 = var3;
 25:
                        if(!(var1 > var2)) { _fun0025_ip = 406; continue _fun0025 }
 32:
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var1 = 27;
                        var1 = var12[var1];
                        var8 = undefined;
                        var4 = var11.bind(var8)(var1);
                        var3 = var4.track;
                        var1 = _closure1_slot19;
                        var2 = var1.VIDEO_STREAM_ENDED;
                        var1 = {};
                        var15 = _closure3_slot3;
                        var16 = var1;
                        var6 = copyDataProperties(var16, var15);
                        var15 = _closure3_slot2;
                        var16 = var1;
                        var6 = copyDataProperties(var16, var15);
                        var15 = _closure3_slot6;
                        var16 = var1;
                        var6 = copyDataProperties(var16, var15);
                        var6 = _closure3_slot0;
                        var14 = var6.videoStreamStats;
                        var13 = var14.getStats;
                        var15 = var13.bind(var14)();
                        var16 = var1;
                        var13 = copyDataProperties(var16, var15);
                        var16 = var1;
                        var15 = var10;
                        var10 = copyDataProperties(var16, var15);
                        var13 = var6._soundshareStats;
                        var10 = var13.getStats;
                        var15 = var10.bind(var13)();
                        var16 = var1;
                        var10 = copyDataProperties(var16, var15);
                        var10 = var6.getStreamAnalyticsProperties;
                        var15 = var10.bind(var6)();
                        var16 = var1;
                        var10 = copyDataProperties(var16, var15);
                        var15 = _closure3_slot7;
                        var16 = var1;
                        var10 = copyDataProperties(var16, var15);
                        var15 = _closure3_slot8;
                        var16 = var1;
                        var10 = copyDataProperties(var16, var15);
                        var10 = 33;
                        var10 = var12[var10];
                        var11 = var11.bind(var8)(var10);
                        var10 = var11.getAppHardwareAccelerationEnabled;
                        var11 = var10.bind(var11)();
                        var10 = 'app_hardware_acceleration_enabled';
                        var1[var10] = var11;
                        var11 = _closure3_slot4;
                        var10 = 'channel_type';
                        var1[var10] = var11;
                        var10 = _closure3_slot1;
                        var9 = 'reason';
                        var1[var9] = var10;
                        var9 = var6.analyticsContext;
                        var10 = var9.maxViewers;
                        var9 = 'max_viewers';
                        var1[var9] = var10;
                        var10 = var6.hostname;
                        var9 = 'hostname';
                        var1[var9] = var10;
                        var10 = _closure1_slot14;
                        var9 = var10.getHardwareEncoding;
                        var10 = var9.bind(var10)();
                        var9 = 'hardware_enabled';
                        var1[var9] = var10;
                        var6 = var6.isOwner;
                        var7 = null;
                        if(!var6) { _fun0025_ip = 364; continue _fun0025 }
 340:
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var6 = 34;
                        var6 = var10[var6];
                        var6 = var9.bind(var8)(var6);
                        var7 = var6.bind(var8)();
 364:
                        var6 = 'device_performance_class';
                        var1[var6] = var7;
                        var6 = _closure1_slot14;
                        var5 = var6.getExperimentalSoundshare;
                        var6 = var5.bind(var6)();
                        var5 = 'soundshare_experimental';
                        var1[var5] = var6;
                        var1 = var3.bind(var4)(var2, var1);
 406:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2);
                var2 = var3.getInboundParticipants;
                var3 = var2.bind(var3)();
                var2 = var3.forEach;
                var1 = function(arg1) {
                    _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                        var3 = _closure3_slot5;
                        var2 = var3.getInboundStats;
                        var1 = arg1;
                        var10 = var2.bind(var3)(var1);
                        var7 = null;
                        var2 = var7 == var10;
                        var1 = undefined;
                        var4 = undefined;
                        if(var2) { _fun0026_ip = 40; continue _fun0026 }
 34:
                        var4 = var10.num_frames;
 40:
                        var5 = var7 != var4;
                        var3 = 0;
                        var2 = 0;
                        if(!var5) { _fun0026_ip = 54; continue _fun0026 }
 51:
                        var2 = var4;
 54:
                        if(!(var2 > var3)) { _fun0026_ip = 405; continue _fun0026 }
 61:
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var2 = 27;
                        var2 = var12[var2];
                        var5 = var11.bind(var1)(var2);
                        var4 = var5.track;
                        var2 = _closure1_slot19;
                        var3 = var2.VIDEO_STREAM_ENDED;
                        var2 = {};
                        var15 = _closure3_slot3;
                        var16 = var2;
                        var8 = copyDataProperties(var16, var15);
                        var15 = _closure3_slot2;
                        var16 = var2;
                        var8 = copyDataProperties(var16, var15);
                        var15 = _closure3_slot6;
                        var16 = var2;
                        var8 = copyDataProperties(var16, var15);
                        var8 = _closure3_slot0;
                        var14 = var8.videoStreamStats;
                        var13 = var14.getStats;
                        var15 = var13.bind(var14)();
                        var16 = var2;
                        var13 = copyDataProperties(var16, var15);
                        var16 = var2;
                        var15 = var10;
                        var10 = copyDataProperties(var16, var15);
                        var13 = var8._soundshareStats;
                        var10 = var13.getStats;
                        var15 = var10.bind(var13)();
                        var16 = var2;
                        var10 = copyDataProperties(var16, var15);
                        var10 = var8.getStreamAnalyticsProperties;
                        var15 = var10.bind(var8)();
                        var16 = var2;
                        var10 = copyDataProperties(var16, var15);
                        var15 = _closure3_slot7;
                        var16 = var2;
                        var10 = copyDataProperties(var16, var15);
                        var15 = _closure3_slot8;
                        var16 = var2;
                        var10 = copyDataProperties(var16, var15);
                        var10 = 33;
                        var10 = var12[var10];
                        var11 = var11.bind(var1)(var10);
                        var10 = var11.getAppHardwareAccelerationEnabled;
                        var11 = var10.bind(var11)();
                        var10 = 'app_hardware_acceleration_enabled';
                        var2[var10] = var11;
                        var11 = _closure3_slot4;
                        var10 = 'channel_type';
                        var2[var10] = var11;
                        var10 = _closure3_slot1;
                        var9 = 'reason';
                        var2[var9] = var10;
                        var9 = var8.analyticsContext;
                        var10 = var9.maxViewers;
                        var9 = 'max_viewers';
                        var2[var9] = var10;
                        var10 = var8.hostname;
                        var9 = 'hostname';
                        var2[var9] = var10;
                        var10 = _closure1_slot14;
                        var9 = var10.getHardwareEncoding;
                        var10 = var9.bind(var10)();
                        var9 = 'hardware_enabled';
                        var2[var9] = var10;
                        var8 = var8.isOwner;
                        var7 = null;
                        if(!var8) { _fun0026_ip = 388; continue _fun0026 }
 364:
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var6 = 34;
                        var6 = var9[var6];
                        var6 = var8.bind(var1)(var6);
                        var7 = var6.bind(var1)();
 388:
                        var6 = 'device_performance_class';
                        var2[var6] = var7;
                        var2 = var4.bind(var5)(var3, var2);
 405:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
 382:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getExtraConnectionOptions';
        var5['key'] = var7;
        var6 = function value() {
            var1 = {};
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 19;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.decodeStreamKey;
            var2 = this;
            var2 = var2.streamKey;
            var2 = var3.bind(var4)(var2);
            var2 = var2.ownerId;
            var1['streamUserId'] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[15] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = 36;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/go_live/StreamRTCConnection.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['StreamRTCAnalyticsContext'] = var2;
    return var1;
})();