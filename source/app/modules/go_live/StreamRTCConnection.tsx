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
    var2 = var6.bind(var1)(var2);
    var2 = var2.getSystemAnalyticsInfo;
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
    var2 = var8.bind(var1)(var2);
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
case 0:
                var1 = arg1;
                var3 = this;
                var8 = var1.streamRegion;
                var9 = var1.streamApplication;
                var7 = var1.streamSourceType;
                var6 = var1.actionContext;
                var4 = var1.numViewers;
                var5 = var1.goLiveModalDurationMs;
                var2 = var1.analyticsLocations;
                var11 = _closure1_slot7;
                var10 = _closure2_slot0;
                var1 = undefined;
                var10 = var11.bind(var1)(var3, var10);
                var3['streamRegion'] = var8;
                var3['streamApplication'] = var9;
                var8 = new Array(1);
                var8[0] = var9;
                var3['streamApplicationHistory'] = var8;
                var3['streamSourceType'] = var7;
                var3['actionContext'] = var6;
                var3['maxViewers'] = var4;
                var3['goLiveModalDurationMs'] = var5;
                var3['numViewers'] = var4;
                var4 = null;
                if(!(var4 == var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var2 = new Array(0);
case 6:
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
        var2 = new Array(9);
        var2[0] = var1;
        var1 = {};
        var6 = 'updateStreamApplication';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = arg1;
            var2 = this;
            var2['streamApplication'] = var3;
            var7 = var2.streamApplicationHistory;
            var1 = new Array(1);
            var6 = 0;
            var8 = var1;
            var4 = arraySpread(var8, var7, var6);
            var1[3] = var3;
            var3 = 1;
            var3 = var4 + var3;
            var2['streamApplicationHistory'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
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
        var2[2] = var1;
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
        var2[3] = var1;
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
        var2[4] = var1;
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
        var2[5] = var1;
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
        var2[6] = var1;
        var1 = {};
        var6 = 'getStreamApplicationFromHistory';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var2 = var1.streamApplicationHistory;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'getDuration';
        var1['key'] = var6;
        var5 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = this;
                var3 = var2.startTime;
                var1 = null;
                if(!(var1 != var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var3 = global;
                var4 = var3.performance;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                var4 = var2.endTime;
                if(!(var1 != var4)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var3 = var4;
case 10:
                var2 = var2.startTime;
                var2 = var3 - var2;
                return var2;
case 8:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[8] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var5 = 36;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var4 = function(arg1) {
        var4 = function StreamRTCConnection(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg1;
                var12 = this;
                var18 = var1.sessionId;
                var7 = var1.streamKey;
                var15 = var1.serverId;
                var10 = var1.initialLayout;
                var3 = var1.analyticsContext;
                var13 = var1.parentMediaSessionId;
                var14 = var1.channelId;
                var1 = _closure1_slot7;
                var9 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var12, var9);
                var11 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 19;
                var1 = var6[var1];
                var8 = var11.bind(var5)(var1);
                var1 = var8.decodeStreamKey;
                var8 = var1.bind(var8)(var7);
                var17 = var8.guildId;
                var16 = var8.channelId;
                var1 = {};
                var20 = _closure1_slot12;
                var19 = var20.getId;
                var19 = var19.bind(var20)();
                var1['userId'] = var19;
                var1['sessionId'] = var18;
                var1['guildId'] = var17;
                var1['channelId'] = var16;
                var16 = _closure1_slot22;
                var16 = var16.STREAM;
                var1['context'] = var16;
                var1['streamServerId'] = var15;
                var1['streamChannelId'] = var14;
                var1['parentMediaSessionId'] = var13;
                var13 = null;
                var1['joinVoiceId'] = var13;
                var17 = new Array(1);
                var17[0] = var1;
                var1 = _closure1_slot4;
                var16 = var1.bind(var5)(var9);
                var9 = _closure1_slot3;
                var1 = _closure1_slot25;
                var1 = var1.bind(var5)();
                if(var1) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                var1 = var16.apply;
                var1 = var1.bind(var16)(var12, var17);
                _fun0004_ip = 14; continue _fun0004;
case 12:
                var13 = global;
                var15 = var13.Reflect;
                var14 = var15.construct;
                var13 = _closure1_slot4;
                var13 = var13.bind(var5)(var12);
                var13 = var13.constructor;
                var1 = var14.bind(var15)(var16, var17, var13);
case 14:
                var1 = var9.bind(var5)(var12, var1);
                var _closure3_slot0 = var1;
                var4 = _closure1_slot1;
                var9 = 20;
                var9 = var6[var9];
                var9 = var4.bind(var5)(var9);
                var12 = var9.prototype;
                var12 = Object.create(var12, {constructor: {value: var9}});
                var24 = var12;
                var9 = new var24[var9](var23);
                var9 = var9 instanceof Object ? var9 : var12;
                var1['soundshareStats'] = var9;
                var9 = false;
                var1['_firstFrameDelivered'] = var9;
                var9 = 0;
                var1['screenshareFinishedCount'] = var9;
                var9 = {};
                var1['soundshareFailuresReported'] = var9;
                var9 = 21;
                var9 = var6[var9];
                var9 = var11.bind(var5)(var9);
                var9 = var9.Timeout;
                var11 = var9.prototype;
                var11 = Object.create(var11, {constructor: {value: var9}});
                var24 = var11;
                var9 = new var24[var9](var23);
                var9 = var9 instanceof Object ? var9 : var11;
                var1['errorTimer'] = var9;
                var1['streamContext'] = var8;
                var1['streamKey'] = var7;
                var7 = 22;
                var7 = var6[var7];
                var9 = var4.bind(var5)(var7);
                var22 = var1.isOwner;
                var8 = var9.prototype;
                var8 = Object.create(var8, {constructor: {value: var9}});
                var24 = var8;
                var23 = var10;
                var7 = new var24[var9](var23, var22, var21);
                var7 = var7 instanceof Object ? var7 : var8;
                var1['videoStreamStats'] = var7;
                var1['analyticsContext'] = var3;
                var3 = 23;
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
                    var2 = 24;
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
            var3 = _closure1_slot12;
            var1 = var3.getId;
            var1 = var1.bind(var3)();
            var1 = var1 === var2;
            return var1;
        };
        var5['get'] = var1;
        var1 = new Array(17);
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
case 0:
                    var5 = arg1;
                    var7 = arg3;
                    var _closure4_slot0 = var7;
                    var6 = _closure1_slot5;
                    var4 = _closure1_slot4;
                    var1 = 1;
                    var3 = 3;
                    var8 = var1 & var3;
                    var1 = var5;
                    if(!var8) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                    var1 = var5.prototype;
case 15:
                    var5 = undefined;
                    var4 = var4.bind(var5)(var1);
                    var1 = 'destroy';
                    var5 = var6.bind(var5)(var4, var1, var7);
                    var _closure4_slot1 = var5;
                    var1 = 2;
                    var3 = var1 & var3;
                    var1 = var5;
                    if(!var3) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var4 = 'function';
                    var3 = typeof var5;
                    var1 = var5;
                    if(!(var4 === var3)) { _fun0005_ip = 17; continue _fun0005 }
case 19:
                    var1 = function(arg1) {
                        var4 = _closure4_slot1;
                        var3 = var4.apply;
                        var2 = _closure4_slot0;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
case 17:
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
case 0:
                var1 = this;
                var2 = var1._videoQuality;
                var1 = null;
                if(!(var1 != var2)) { _fun0006_ip = 20; continue _fun0006 }
case 9:
                var1 = arg1;
                if(var1) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                var1 = var2.resume;
                var1 = var1.bind(var2)();
                _fun0006_ip = 20; continue _fun0006;
case 21:
                var1 = var2.pause;
                var1 = var1.bind(var2)();
case 20:
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
        var7 = 'autoQualityChange';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.videoStreamStats;
            var1 = var2.autoQualityChange;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getVideoStats';
        var5['key'] = var7;
        var7 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = this;
                var2 = var1.streamContext;
                var2 = var2.ownerId;
                var4 = var1._videoQuality;
                var3 = null;
                if(!(var3 == var4)) { _fun0007_ip = 23; continue _fun0007 }
case 24:
                return var3;
case 23:
                var1 = var1.isOwner;
                if(var1) { _fun0007_ip = 8; continue _fun0007 }
case 25:
                var1 = var4.getInboundStats;
                var2 = var1.bind(var4)(var2);
                if(!(var3 == var2)) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                var2 = {};
case 26:
                _fun0007_ip = 28; continue _fun0007;
case 8:
                var1 = var4.getOutboundStats;
                var4 = var1.bind(var4)();
                var1 = 0;
                var1 = var4[var1];
                if(!(var3 == var1)) { _fun0007_ip = 18; continue _fun0007 }
case 29:
                var1 = {};
case 18:
                var2 = var1;
case 28:
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
        var1[5] = var5;
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
        var1[6] = var5;
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
        var1[7] = var5;
        var5 = {};
        var7 = 'getVoiceParticipantType';
        var5['key'] = var7;
        var7 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = this;
                var2 = var1.isOwner;
                var1 = 'receiver';
                if(!var2) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                var1 = 'streamer';
case 30:
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
            var3 = 25;
            var4 = var7[var3];
            var1 = undefined;
            var4 = var6.bind(var1)(var4);
            var4 = var4.RTCConnectionEvent;
            var8 = var4.State;
            var4 = function(arg1, arg2, arg3) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var6 = arg1;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 24;
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
                    var4[8] = var10;
                    var4 = var7.bind(var8)(var4);
                    var4 = _closure1_slot21;
                    var4 = var4.RTC_CONNECTED;
                    if(!(var6 === var4)) { _fun0009_ip = 32; continue _fun0009 }
case 33:
                    var4 = _closure3_slot0;
                    var9 = var4._connection;
                    var4 = null;
                    if(!(var4 != var9)) { _fun0009_ip = 34; continue _fun0009 }
case 35:
                    var8 = var9.on;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 26;
                    var6 = var10[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.BaseConnectionEvent;
                    var7 = var6.ScreenshareFinish;
                    var6 = function(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21, arg22, arg23, arg24, arg25, arg26) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var4 = arg10;
                            var11 = arg11;
                            var10 = arg12;
                            var9 = arg13;
                            var6 = arg14;
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
                            var _closure5_slot9 = var4;
                            var _closure5_slot10 = var11;
                            var _closure5_slot11 = var10;
                            var _closure5_slot12 = var9;
                            var _closure5_slot13 = var6;
                            var1 = arg15;
                            var _closure5_slot14 = var1;
                            var1 = arg16;
                            var _closure5_slot15 = var1;
                            var1 = arg17;
                            var _closure5_slot16 = var1;
                            var1 = arg18;
                            var _closure5_slot17 = var1;
                            var1 = arg19;
                            var _closure5_slot18 = var1;
                            var1 = arg20;
                            var _closure5_slot19 = var1;
                            var1 = arg21;
                            var _closure5_slot20 = var1;
                            var1 = arg22;
                            var _closure5_slot21 = var1;
                            var1 = arg23;
                            var _closure5_slot22 = var1;
                            var1 = arg24;
                            var _closure5_slot23 = var1;
                            var1 = arg25;
                            var _closure5_slot24 = var1;
                            var1 = arg26;
                            var _closure5_slot25 = var1;
                            var7 = _closure3_slot0;
                            var5 = var7.analyticsContext;
                            var3 = var5.getStreamApplicationFromHistory;
                            var1 = var7.screenshareFinishedCount;
                            var12 = var3.bind(var5)(var1);
                            var1 = var7.screenshareFinishedCount;
                            var1 = var1 + 1;
                            var7['screenshareFinishedCount'] = var1;
                            var8 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 27;
                            var5 = var5[var1];
                            var1 = undefined;
                            var8 = var8.bind(var1)(var5);
                            var5 = var8.getRunningGameAnalytics;
                            var5 = var5.bind(var8)(var12);
                            var8 = var5.gameName;
                            var _closure5_slot26 = var8;
                            var8 = var5.gameId;
                            var _closure5_slot27 = var8;
                            var8 = var5.exe;
                            var _closure5_slot28 = var8;
                            var5 = var5.distributor;
                            var _closure5_slot29 = var5;
                            var5 = var7.getMediaSessionId;
                            var5 = var5.bind(var7)();
                            var _closure5_slot30 = var5;
                            var5 = var7.getRTCConnectionId;
                            var5 = var5.bind(var7)();
                            var _closure5_slot31 = var5;
                            var7 = null;
                            var12 = var7 != var4;
                            var8 = 0;
                            if(!var12) { _fun0010_ip = 36; continue _fun0010 }
case 37:
                            var8 = var4;
case 36:
                            var12 = var7 != var11;
                            var4 = 0;
                            if(!var12) { _fun0010_ip = 38; continue _fun0010 }
case 39:
                            var4 = var11;
case 38:
                            var8 = var8 + var4;
                            var11 = var7 != var10;
                            var4 = 0;
                            if(!var11) { _fun0010_ip = 40; continue _fun0010 }
case 41:
                            var4 = var10;
case 40:
                            var8 = var8 + var4;
                            var10 = var7 != var9;
                            var4 = 0;
                            if(!var10) { _fun0010_ip = 42; continue _fun0010 }
case 43:
                            var4 = var9;
case 42:
                            var4 = var8 + var4;
                            var7 = var7 != var6;
                            var5 = 0;
                            if(!var7) { _fun0010_ip = 44; continue _fun0010 }
case 45:
                            var5 = var6;
case 44:
                            var4 = var4 + var5;
                            var _closure5_slot32 = var4;
                            var3 = _closure1_slot10;
                            var4 = var3.bind(var1)();
                            var3 = var4.then;
                            var2 = function(arg1) {
                                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                    var2 = arg1;
                                    var11 = null;
                                    var1 = var11 != var2;
                                    var6 = null;
                                    if(!var1) { _fun0011_ip = 4; continue _fun0011 }
case 46:
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
case 4:
                                    var1 = _closure5_slot0;
                                    var1 = var11 != var1;
                                    var3 = 0;
                                    if(!var1) { _fun0011_ip = 47; continue _fun0011 }
case 48:
                                    var3 = _closure5_slot0;
case 47:
                                    var1 = _closure5_slot1;
                                    var4 = var11 != var1;
                                    var1 = 0;
                                    if(!var4) { _fun0011_ip = 49; continue _fun0011 }
case 50:
                                    var1 = _closure5_slot1;
case 49:
                                    var3 = var3 + var1;
                                    var1 = _closure5_slot2;
                                    var4 = var11 != var1;
                                    var1 = 0;
                                    if(!var4) { _fun0011_ip = 7; continue _fun0011 }
case 51:
                                    var1 = _closure5_slot2;
case 7:
                                    var3 = var3 + var1;
                                    var1 = _closure5_slot3;
                                    var4 = var11 != var1;
                                    var1 = 0;
                                    if(!var4) { _fun0011_ip = 52; continue _fun0011 }
case 53:
                                    var1 = _closure5_slot3;
case 52:
                                    var3 = var3 + var1;
                                    var1 = _closure5_slot4;
                                    var4 = var11 != var1;
                                    var1 = 0;
                                    if(!var4) { _fun0011_ip = 54; continue _fun0011 }
case 55:
                                    var1 = _closure5_slot4;
case 54:
                                    var3 = var3 + var1;
                                    var1 = _closure5_slot5;
                                    var4 = var11 != var1;
                                    var1 = 0;
                                    if(!var4) { _fun0011_ip = 56; continue _fun0011 }
case 57:
                                    var1 = _closure5_slot5;
case 56:
                                    var3 = var3 + var1;
                                    var1 = _closure5_slot15;
                                    var4 = var11 != var1;
                                    var1 = 0;
                                    if(!var4) { _fun0011_ip = 58; continue _fun0011 }
case 59:
                                    var1 = _closure5_slot15;
case 58:
                                    var3 = var3 + var1;
                                    var1 = _closure5_slot19;
                                    var4 = var11 != var1;
                                    var1 = 0;
                                    if(!var4) { _fun0011_ip = 60; continue _fun0011 }
case 61:
                                    var1 = _closure5_slot19;
case 60:
                                    var3 = var3 + var1;
                                    var1 = _closure5_slot18;
                                    var4 = var11 != var1;
                                    var1 = 0;
                                    if(!var4) { _fun0011_ip = 62; continue _fun0011 }
case 63:
                                    var1 = _closure5_slot18;
case 62:
                                    var3 = var3 + var1;
                                    var1 = _closure5_slot24;
                                    var4 = var11 != var1;
                                    var1 = 0;
                                    if(!var4) { _fun0011_ip = 64; continue _fun0011 }
case 65:
                                    var1 = _closure5_slot24;
case 64:
                                    var1 = var3 + var1;
                                    var3 = _closure5_slot23;
                                    var3 = var11 != var3;
                                    var2 = 0;
                                    if(!var3) { _fun0011_ip = 66; continue _fun0011 }
case 67:
                                    var2 = _closure5_slot23;
case 66:
                                    var9 = var1 + var2;
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 28;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var5 = var3.bind(var1)(var2);
                                    var4 = var5.track;
                                    var2 = _closure1_slot19;
                                    var3 = var2.SCREENSHARE_FINISHED;
                                    var2 = {};
                                    var10 = _closure5_slot0;
                                    var2['screenshare_frames'] = var10;
                                    var10 = _closure5_slot1;
                                    var2['videohook_frames'] = var10;
                                    var10 = _closure5_slot2;
                                    var2['hybrid_dxgi_frames'] = var10;
                                    var10 = _closure5_slot3;
                                    var2['hybrid_gdi_frames'] = var10;
                                    var10 = _closure5_slot4;
                                    var2['hybrid_videohook_frames'] = var10;
                                    var10 = _closure5_slot5;
                                    var2['hybrid_graphics_capture_frames'] = var10;
                                    var10 = _closure5_slot6;
                                    var2['hybrid_capture_method_switches'] = var10;
                                    var10 = _closure5_slot7;
                                    var2['hybrid_gdi_bitblt_frames'] = var10;
                                    var10 = _closure5_slot8;
                                    var2['hybrid_gdi_printwindow_frames'] = var10;
                                    var10 = _closure5_slot9;
                                    var2['hybrid_graphics_capture_frames_unique'] = var10;
                                    var10 = _closure5_slot10;
                                    var2['hybrid_dxgi_frames_unique'] = var10;
                                    var10 = _closure5_slot11;
                                    var2['hybrid_videohook_frames_unique'] = var10;
                                    var10 = _closure5_slot12;
                                    var2['hybrid_gdi_bitblt_frames_unique'] = var10;
                                    var10 = _closure5_slot13;
                                    var2['hybrid_gdi_printwindow_frames_unique'] = var10;
                                    var10 = _closure5_slot14;
                                    var2['skip_history_json'] = var10;
                                    var10 = _closure5_slot15;
                                    var2['quartz_frames'] = var10;
                                    var10 = _closure5_slot19;
                                    var2['screencapturekit_frames'] = var10;
                                    var10 = _closure5_slot18;
                                    var2['go_live_camera_frames'] = var10;
                                    var2['total_frames'] = var9;
                                    var9 = _closure5_slot32;
                                    var2['total_frames_unique'] = var9;
                                    var9 = _closure5_slot16;
                                    var2['desktop_capturer_type'] = var9;
                                    var9 = _closure5_slot30;
                                    var2['media_session_id'] = var9;
                                    var9 = _closure5_slot31;
                                    var2['rtc_connection_id'] = var9;
                                    var9 = _closure1_slot22;
                                    var9 = var9.STREAM;
                                    var2['context'] = var9;
                                    var9 = _closure5_slot17;
                                    var2['activity'] = var9;
                                    var10 = _closure3_slot0;
                                    var13 = var10.soundshareStats;
                                    var12 = var13.getStats;
                                    var12 = var12.bind(var13)();
                                    var12 = var12.soundshare_last_session;
                                    var2['soundshare_session'] = var12;
                                    var10 = var10.analyticsContext;
                                    var10 = var10.nativePickerStyleUsed;
                                    var11 = var11 != var10;
                                    var10 = 'internal';
                                    if(!var11) { _fun0011_ip = 68; continue _fun0011 }
case 69:
                                    var10 = 'native';
case 68:
                                    var2['picker_type_used'] = var10;
                                    var9 = _closure3_slot0;
                                    var10 = var9.analyticsContext;
                                    var9 = var10.getDuration;
                                    var9 = var9.bind(var10)();
                                    var2['duration'] = var9;
                                    var9 = _closure5_slot26;
                                    var2['share_game_name'] = var9;
                                    var9 = _closure5_slot27;
                                    var2['share_game_id'] = var9;
                                    var9 = _closure5_slot28;
                                    var2['share_game_exe'] = var9;
                                    var9 = _closure5_slot29;
                                    var2['share_game_distributor'] = var9;
                                    var9 = _closure5_slot20;
                                    var2['hdr_frames_capable'] = var9;
                                    var9 = _closure5_slot21;
                                    var2['hdr_frames'] = var9;
                                    var9 = _closure1_slot1;
                                    var10 = _closure1_slot2;
                                    var8 = 29;
                                    var8 = var10[var8];
                                    var9 = var9.bind(var1)(var8);
                                    var8 = var9.getDiscordIsElevated;
                                    var8 = var8.bind(var9)();
                                    var2['discord_is_elevated'] = var8;
                                    var8 = _closure5_slot22;
                                    var2['target_window_elevated'] = var8;
                                    var8 = _closure5_slot23;
                                    var2['pipewire_frames'] = var8;
                                    var8 = _closure5_slot24;
                                    var2['x11_frames'] = var8;
                                    var7 = _closure5_slot25;
                                    var2['videohook_backend'] = var7;
                                    var15 = var2;
                                    var14 = var6;
                                    var6 = copyDataProperties(var15, var14);
                                    var2 = var4.bind(var5)(var3, var2);
                                    return var1;
                                }
                            };
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var6 = var8.bind(var9)(var7, var6);
case 34:
                    var6 = _closure3_slot0;
                    var9 = var6._connection;
                    if(!(var4 != var9)) { _fun0009_ip = 70; continue _fun0009 }
case 71:
                    var8 = var9.on;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 26;
                    var6 = var10[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.BaseConnectionEvent;
                    var7 = var6.SoundshareAttached;
                    var6 = function() {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var3 = _closure1_slot15;
                            var1 = var3.getGoLiveSource;
                            var8 = var1.bind(var3)();
                            var6 = null;
                            var4 = var6 == var8;
                            var1 = undefined;
                            var3 = undefined;
                            if(var4) { _fun0012_ip = 72; continue _fun0012 }
case 73:
                            var3 = var8.desktopSource;
case 72:
                            if(!(var6 != var3)) { _fun0012_ip = 74; continue _fun0012 }
case 75:
                            var9 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var3 = 28;
                            var3 = var10[var3];
                            var5 = var9.bind(var1)(var3);
                            var4 = var5.track;
                            var2 = _closure1_slot19;
                            var3 = var2.SOUNDSHARE_ATTACHED;
                            var2 = {};
                            var7 = 30;
                            var7 = var10[var7];
                            var7 = var9.bind(var1)(var7);
                            var9 = var6 == var8;
                            var6 = undefined;
                            if(var9) { _fun0012_ip = 76; continue _fun0012 }
case 17:
                            var6 = var8.desktopSource;
case 76:
                            var11 = var7.bind(var1)(var6);
                            var12 = var2;
                            var6 = copyDataProperties(var12, var11);
                            var7 = _closure3_slot0;
                            var6 = var7.getSoundshareAnalyticsProperties;
                            var11 = var6.bind(var7)();
                            var12 = var2;
                            var6 = copyDataProperties(var12, var11);
                            var2 = var4.bind(var5)(var3, var2);
case 74:
                            return var1;
                        }
                    };
                    var6 = var8.bind(var9)(var7, var6);
case 70:
                    var6 = _closure3_slot0;
                    var9 = var6._connection;
                    if(!(var4 != var9)) { _fun0009_ip = 77; continue _fun0009 }
case 78:
                    var8 = var9.on;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 26;
                    var6 = var10[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.BaseConnectionEvent;
                    var7 = var6.SoundshareFailed;
                    var6 = function(arg1) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var1 = arg1;
                            var7 = var1.failureCode;
                            var6 = var1.failureReason;
                            var5 = var1.willRetry;
                            var2 = _closure1_slot15;
                            var1 = var2.getGoLiveSource;
                            var8 = var1.bind(var2)();
                            var4 = _closure3_slot0;
                            var3 = var4.reportSoundshareFailure;
                            var1 = null;
                            var9 = var1 == var8;
                            var1 = undefined;
                            var2 = undefined;
                            if(var9) { _fun0013_ip = 3; continue _fun0013 }
case 79:
                            var2 = var8.desktopSource;
case 3:
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
case 77:
                    var6 = _closure3_slot0;
                    var9 = var6._connection;
                    if(!(var4 != var9)) { _fun0009_ip = 80; continue _fun0009 }
case 81:
                    var8 = var9.on;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 26;
                    var6 = var10[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.BaseConnectionEvent;
                    var7 = var6.SoundshareSpeaking;
                    var6 = function() {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var3 = _closure1_slot15;
                            var1 = var3.getGoLiveSource;
                            var10 = var1.bind(var3)();
                            var4 = null;
                            var5 = var4 == var10;
                            var1 = undefined;
                            var3 = undefined;
                            if(var5) { _fun0014_ip = 72; continue _fun0014 }
case 73:
                            var3 = var10.desktopSource;
case 72:
                            if(!(var4 != var3)) { _fun0014_ip = 82; continue _fun0014 }
case 20:
                            var9 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var3 = 28;
                            var3 = var11[var3];
                            var7 = var9.bind(var1)(var3);
                            var6 = var7.track;
                            var3 = _closure1_slot19;
                            var5 = var3.SOUNDSHARE_TRANSMITTING;
                            var3 = {};
                            var8 = 30;
                            var8 = var11[var8];
                            var9 = var9.bind(var1)(var8);
                            var11 = var4 == var10;
                            var8 = undefined;
                            if(var11) { _fun0014_ip = 50; continue _fun0014 }
case 83:
                            var8 = var10.desktopSource;
case 50:
                            var12 = var9.bind(var1)(var8);
                            var13 = var3;
                            var8 = copyDataProperties(var13, var12);
                            var9 = _closure3_slot0;
                            var8 = var9.getSoundshareAnalyticsProperties;
                            var12 = var8.bind(var9)();
                            var13 = var3;
                            var8 = copyDataProperties(var13, var12);
                            var3 = var6.bind(var7)(var5, var3);
                            var6 = _closure1_slot14;
                            var5 = var6.getHookError;
                            var3 = _closure1_slot20;
                            var3 = var3.SOUND;
                            var3 = var5.bind(var6)(var3);
                            if(!(var4 != var3)) { _fun0014_ip = 82; continue _fun0014 }
case 34:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 24;
                            var2 = var4[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var5 = 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING';
                            var2['type'] = var5;
                            var2 = var3.bind(var4)(var2);
case 82:
                            return var1;
                        }
                    };
                    var6 = var8.bind(var9)(var7, var6);
case 80:
                    var6 = _closure3_slot0;
                    var9 = var6._connection;
                    if(!(var4 != var9)) { _fun0009_ip = 84; continue _fun0009 }
case 85:
                    var8 = var9.on;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 26;
                    var6 = var10[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.BaseConnectionEvent;
                    var7 = var6.SoundshareTrace;
                    var6 = function(arg1) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var4 = arg1;
                            var3 = _closure1_slot15;
                            var1 = var3.getGoLiveSource;
                            var10 = var1.bind(var3)();
                            var1 = _closure3_slot0;
                            var8 = var1.soundshareStats;
                            var7 = var8.traceEvent;
                            var5 = null;
                            var9 = var5 == var10;
                            var1 = undefined;
                            var6 = undefined;
                            if(var9) { _fun0015_ip = 86; continue _fun0015 }
case 87:
                            var9 = var10.desktopSource;
                            var11 = var5 == var9;
                            var6 = undefined;
                            if(var11) { _fun0015_ip = 86; continue _fun0015 }
case 88:
                            var6 = var9.soundshareSession;
case 86:
                            var6 = var7.bind(var8)(var6, var4);
                            var7 = var4.type;
                            var6 = 'soundshare_attach_requested';
                            if(!(var6 !== var7)) { _fun0015_ip = 89; continue _fun0015 }
case 90:
                            var6 = 'soundshare_recv_failed';
                            if(!(var6 !== var7)) { _fun0015_ip = 59; continue _fun0015 }
case 91:
                            var6 = 'soundshare_state_transition';
                            if(!(var6 === var7)) { _fun0015_ip = 92; continue _fun0015 }
case 93:
                            var7 = var4.newState;
                            var6 = _closure1_slot24;
                            var6 = var6.PLAYING;
                            if(!(var7 === var6)) { _fun0015_ip = 92; continue _fun0015 }
case 94:
                            var6 = _closure3_slot0;
                            var7 = var6.errorTimer;
                            var6 = var7.stop;
                            var6 = var6.bind(var7)();
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var6 = 24;
                            var6 = var8[var6];
                            var8 = var7.bind(var1)(var6);
                            var7 = var8.dispatch;
                            var6 = {};
                            var9 = 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING';
                            var6['type'] = var9;
                            var6 = var7.bind(var8)(var6);
                            _fun0015_ip = 92; continue _fun0015;
case 59:
                            var8 = var4.reason;
                            var7 = var4.code;
                            var4 = var4.retry;
                            var9 = var5 == var10;
                            var6 = undefined;
                            if(var9) { _fun0015_ip = 95; continue _fun0015 }
case 96:
                            var6 = var10.desktopSource;
case 95:
                            if(!(var5 != var6)) { _fun0015_ip = 92; continue _fun0015 }
case 97:
                            var9 = _closure3_slot0;
                            var6 = var9.reportSoundshareFailure;
                            var11 = var5 == var10;
                            var5 = undefined;
                            if(var11) { _fun0015_ip = 98; continue _fun0015 }
case 99:
                            var5 = var10.desktopSource;
case 98:
                            var16 = var9;
                            var15 = var5;
                            var14 = var7;
                            var13 = var8;
                            var12 = var4;
                            var5 = var16[var6](var15, var14, var13, var12, var11);
                            if(var4) { _fun0015_ip = 92; continue _fun0015 }
case 100:
                            var4 = _closure3_slot0;
                            var5 = var4.errorTimer;
                            var4 = var5.stop;
                            var4 = var4.bind(var5)();
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 24;
                            var4 = var6[var4];
                            var6 = var5.bind(var1)(var4);
                            var5 = var6.dispatch;
                            var4 = {};
                            var9 = 'MEDIA_ENGINE_SOUNDSHARE_FAILED';
                            var4['type'] = var9;
                            var4['errorMessage'] = var8;
                            var4['errorCode'] = var7;
                            var4 = var5.bind(var6)(var4);
                            _fun0015_ip = 92; continue _fun0015;
case 89:
                            var3 = _closure3_slot0;
                            var5 = var3.errorTimer;
                            var4 = var5.start;
                            var3 = _closure1_slot23;
                            var2 = function() {
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 24;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.dispatch;
                                var2 = {'type': 'MEDIA_ENGINE_SOUNDSHARE_FAILED', 'errorMessage': 'Sound Hook Failed'};
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            };
                            var2 = var4.bind(var5)(var3, var2);
case 92:
                            return var1;
                        }
                    };
                    var6 = var8.bind(var9)(var7, var6);
case 84:
                    var6 = _closure3_slot0;
                    var9 = var6._connection;
                    if(!(var4 != var9)) { _fun0009_ip = 101; continue _fun0009 }
case 102:
                    var8 = var9.on;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 26;
                    var6 = var10[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.BaseConnectionEvent;
                    var7 = var6.FirstFrameStats;
                    var6 = function(arg1) {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                            var6 = arg1;
                            var2 = _closure3_slot0;
                            var2 = var2._firstFrameDelivered;
                            if(var2) { _fun0016_ip = 103; continue _fun0016 }
case 104:
                            var9 = _closure3_slot0;
                            var1 = true;
                            var9['_firstFrameDelivered'] = var1;
                            var1 = var9.getStreamAnalyticsProperties;
                            var7 = var1.bind(var9)();
                            var2 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var1 = 28;
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
                            var5 = 31;
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
                            if(!(var8 !== var7)) { _fun0016_ip = 105; continue _fun0016 }
case 61:
                            var7 = var6.remoteUserCreatedTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0016_ip = 105; continue _fun0016 }
case 106:
                            var7 = global;
                            var10 = var7.Number;
                            var11 = var6.remoteVideoStreamCreatedTimestamp;
                            var7 = var6.remoteUserCreatedTimestamp;
                            var7 = var11 - var7;
                            var5 = var10.bind(var8)(var7);
case 105:
                            var1['time_remote_user_to_video_stream_created'] = var5;
                            var7 = var6.videoDataReceivedTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0016_ip = 107; continue _fun0016 }
case 108:
                            var7 = var6.remoteVideoStreamCreatedTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0016_ip = 107; continue _fun0016 }
case 109:
                            var7 = global;
                            var10 = var7.Number;
                            var11 = var6.videoDataReceivedTimestamp;
                            var7 = var6.remoteVideoStreamCreatedTimestamp;
                            var7 = var11 - var7;
                            var5 = var10.bind(var8)(var7);
case 107:
                            var1['time_video_stream_created_to_video_data_received'] = var5;
                            var7 = var6.videoSourceDeliveredFrameTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0016_ip = 110; continue _fun0016 }
case 111:
                            var7 = var6.videoDataReceivedTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0016_ip = 110; continue _fun0016 }
case 112:
                            var7 = global;
                            var10 = var7.Number;
                            var11 = var6.videoSourceDeliveredFrameTimestamp;
                            var7 = var6.videoDataReceivedTimestamp;
                            var7 = var11 - var7;
                            var5 = var10.bind(var8)(var7);
case 110:
                            var1['time_video_data_received_to_video_source_delivered_frame'] = var5;
                            var7 = var6.updateMLSExternalSenderTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0016_ip = 113; continue _fun0016 }
case 114:
                            var7 = var6.remoteUserCreatedTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0016_ip = 113; continue _fun0016 }
case 115:
                            var7 = global;
                            var10 = var7.Number;
                            var11 = var6.updateMLSExternalSenderTimestamp;
                            var7 = var6.remoteUserCreatedTimestamp;
                            var7 = var11 - var7;
                            var5 = var10.bind(var8)(var7);
case 113:
                            var1['time_remote_user_to_mls_external_sender_updated'] = var5;
                            var7 = var6.setRemoteSecureFrameKeyRatchetTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0016_ip = 116; continue _fun0016 }
case 117:
                            var7 = var6.remoteUserCreatedTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0016_ip = 116; continue _fun0016 }
case 118:
                            var7 = global;
                            var10 = var7.Number;
                            var11 = var6.setRemoteSecureFrameKeyRatchetTimestamp;
                            var7 = var6.remoteUserCreatedTimestamp;
                            var7 = var11 - var7;
                            var5 = var10.bind(var8)(var7);
case 116:
                            var1['time_remote_user_to_secure_frame_remote_key_ratchet_set'] = var5;
                            var7 = var6.setLocalSecureFrameKeyRatchetTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0016_ip = 119; continue _fun0016 }
case 120:
                            var7 = var6.remoteUserCreatedTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0016_ip = 119; continue _fun0016 }
case 121:
                            var7 = global;
                            var10 = var7.Number;
                            var11 = var6.setLocalSecureFrameKeyRatchetTimestamp;
                            var7 = var6.remoteUserCreatedTimestamp;
                            var7 = var11 - var7;
                            var5 = var10.bind(var8)(var7);
case 119:
                            var1['time_remote_user_to_secure_frame_local_key_ratchet_set'] = var5;
                            var7 = var6.firstFrameDecryptedTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0016_ip = 122; continue _fun0016 }
case 123:
                            var7 = var6.remoteUserCreatedTimestamp;
                            var5 = null;
                            if(!(var8 !== var7)) { _fun0016_ip = 122; continue _fun0016 }
case 124:
                            var7 = global;
                            var7 = var7.Number;
                            var9 = var6.firstFrameDecryptedTimestamp;
                            var6 = var6.remoteUserCreatedTimestamp;
                            var6 = var9 - var6;
                            var5 = var7.bind(var8)(var6);
case 122:
                            var1['time_remote_user_to_first_frame_decrypted'] = var5;
                            var1 = var3.bind(var4)(var2, var1);
case 103:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var6 = var8.bind(var9)(var7, var6);
case 101:
                    var6 = _closure3_slot0;
                    var9 = var6._connection;
                    if(!(var4 != var9)) { _fun0009_ip = 125; continue _fun0009 }
case 126:
                    var8 = var9.on;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 26;
                    var6 = var10[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.BaseConnectionEvent;
                    var7 = var6.FirstFrameEncryptedStats;
                    var6 = function(arg1) {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                            var7 = arg1;
                            var2 = _closure3_slot0;
                            var1 = var2.getStreamAnalyticsProperties;
                            var6 = var1.bind(var2)();
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 28;
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
                            if(!(var1 !== var8)) { _fun0017_ip = 127; continue _fun0017 }
case 128:
                            var8 = var7.localUserCreatedTimestamp;
                            var6 = null;
                            if(!(var1 !== var8)) { _fun0017_ip = 127; continue _fun0017 }
case 129:
                            var8 = global;
                            var10 = var8.Number;
                            var11 = var7.videoReceiversSetTimestamp;
                            var8 = var7.localUserCreatedTimestamp;
                            var8 = var11 - var8;
                            var6 = var10.bind(var1)(var8);
case 127:
                            var2['time_local_user_to_video_receivers_set'] = var6;
                            var8 = var7.updateMLSExternalSenderTimestamp;
                            var6 = null;
                            if(!(var1 !== var8)) { _fun0017_ip = 12; continue _fun0017 }
case 130:
                            var8 = var7.localUserCreatedTimestamp;
                            var6 = null;
                            if(!(var1 !== var8)) { _fun0017_ip = 12; continue _fun0017 }
case 131:
                            var8 = global;
                            var10 = var8.Number;
                            var11 = var7.updateMLSExternalSenderTimestamp;
                            var8 = var7.localUserCreatedTimestamp;
                            var8 = var11 - var8;
                            var6 = var10.bind(var1)(var8);
case 12:
                            var2['time_local_user_to_mls_external_sender_updated'] = var6;
                            var8 = var7.setRemoteSecureFrameKeyRatchetTimestamp;
                            var6 = null;
                            if(!(var1 !== var8)) { _fun0017_ip = 132; continue _fun0017 }
case 106:
                            var8 = var7.localUserCreatedTimestamp;
                            var6 = null;
                            if(!(var1 !== var8)) { _fun0017_ip = 132; continue _fun0017 }
case 133:
                            var8 = global;
                            var10 = var8.Number;
                            var11 = var7.setRemoteSecureFrameKeyRatchetTimestamp;
                            var8 = var7.localUserCreatedTimestamp;
                            var8 = var11 - var8;
                            var6 = var10.bind(var1)(var8);
case 132:
                            var2['time_local_user_to_secure_frame_remote_key_ratchet_set'] = var6;
                            var8 = var7.setLocalSecureFrameKeyRatchetTimestamp;
                            var6 = null;
                            if(!(var1 !== var8)) { _fun0017_ip = 37; continue _fun0017 }
case 109:
                            var8 = var7.localUserCreatedTimestamp;
                            var6 = null;
                            if(!(var1 !== var8)) { _fun0017_ip = 37; continue _fun0017 }
case 134:
                            var8 = global;
                            var10 = var8.Number;
                            var11 = var7.setLocalSecureFrameKeyRatchetTimestamp;
                            var8 = var7.localUserCreatedTimestamp;
                            var8 = var11 - var8;
                            var6 = var10.bind(var1)(var8);
case 37:
                            var2['time_local_user_to_secure_frame_local_key_ratchet_set'] = var6;
                            var8 = var7.firstFrameEncryptedTimestamp;
                            var6 = null;
                            if(!(var1 !== var8)) { _fun0017_ip = 45; continue _fun0017 }
case 112:
                            var8 = var7.localUserCreatedTimestamp;
                            var6 = null;
                            if(!(var1 !== var8)) { _fun0017_ip = 45; continue _fun0017 }
case 40:
                            var8 = global;
                            var8 = var8.Number;
                            var9 = var7.firstFrameEncryptedTimestamp;
                            var7 = var7.localUserCreatedTimestamp;
                            var7 = var9 - var7;
                            var6 = var8.bind(var1)(var7);
case 45:
                            var2['time_local_user_to_first_frame_encrypted'] = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        }
                    };
                    var6 = var8.bind(var9)(var7, var6);
case 125:
                    var5 = _closure3_slot0;
                    var5 = var5._connection;
                    if(!(var4 != var5)) { _fun0009_ip = 32; continue _fun0009 }
case 135:
                    var4 = var5.on;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 26;
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
case 32:
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
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
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
                    if(!var3) { _fun0018_ip = 136; continue _fun0018 }
case 79:
                    var6 = var4.channelId;
                    var5 = arg2;
                    var3 = var6 === var5;
case 136:
                    if(!var3) { _fun0018_ip = 137; continue _fun0018 }
case 18:
                    var5 = var4.ownerId;
                    var4 = arg3;
                    var3 = var5 === var4;
case 137:
                    if(!var3) { _fun0018_ip = 138; continue _fun0018 }
case 139:
                    var4 = _closure3_slot0;
                    var3 = var4.getMediaSessionId;
                    var4 = var3.bind(var4)();
                    var3 = null;
                    var3 = var3 == var4;
                    if(var3) { _fun0018_ip = 93; continue _fun0018 }
case 140:
                    var3 = _closure3_slot1;
case 93:
                    if(var3) { _fun0018_ip = 141; continue _fun0018 }
case 128:
                    var4 = _closure3_slot0;
                    var3 = var4.trackVideoStartStats;
                    var3 = var3.bind(var4)();
                    var3 = true;
                    _closure3_slot1 = var3;
case 141:
                    var5 = _closure3_slot0;
                    var4 = var5.updateVideoStreamId;
                    var3 = arg4;
                    var2 = arg5;
                    var2 = var4.bind(var5)(var3, var2);
case 138:
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
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED';
                var2['type'] = var5;
                var5 = arg1;
                var2['guildId'] = var5;
                var5 = arg2;
                var2['channelId'] = var5;
                var5 = arg3;
                var2['senderUserId'] = var5;
                var5 = arg4;
                var2['maxResolution'] = var5;
                var5 = arg5;
                var2['maxFrameRate'] = var5;
                var5 = arg6;
                var2['context'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
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
                var1 = 24;
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
                var1 = 24;
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
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var8 = arg1;
                var6 = arg2;
                var7 = this;
                var2 = null;
                var4 = var2 == var8;
                var1 = undefined;
                var3 = undefined;
                if(var4) { _fun0019_ip = 142; continue _fun0019 }
case 104:
                var3 = var8.soundshareSession;
case 142:
                var4 = var2 != var3;
                var5 = '';
                if(!var4) { _fun0019_ip = 11; continue _fun0019 }
case 16:
                var5 = var3;
case 11:
                var3 = var7.soundshareFailuresReported;
                var3 = var3[var5];
                if(!(var2 == var3)) { _fun0019_ip = 47; continue _fun0019 }
case 143:
                var4 = var7.soundshareFailuresReported;
                var3 = global;
                var3 = var3.Set;
                var9 = var3.prototype;
                var9 = Object.create(var9, {constructor: {value: var3}});
                var13 = var9;
                var3 = new var13[var3](var12);
                var3 = var3 instanceof Object ? var3 : var9;
                var4[var5] = var3;
case 47:
                var3 = var2 != var6;
                if(!var3) { _fun0019_ip = 144; continue _fun0019 }
case 83:
                var4 = var7.soundshareFailuresReported;
                var9 = var4[var5];
                var4 = var9.has;
                var4 = var4.bind(var9)(var6);
                var3 = !var4;
case 144:
                if(!var3) { _fun0019_ip = 141; continue _fun0019 }
case 145:
                var4 = var7.soundshareFailuresReported;
                var5 = var4[var5];
                var4 = var5.add;
                var4 = var4.bind(var5)(var6);
case 141:
                var2 = var2 == var6;
                if(var2) { _fun0019_ip = 146; continue _fun0019 }
case 147:
                var2 = var3;
case 146:
                if(!var2) { _fun0019_ip = 105; continue _fun0019 }
case 148:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var3 = 28;
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
                var6 = 30;
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
case 105:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getStreamAnalyticsProperties';
        var5['key'] = var7;
        var7 = function value() {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var2 = this;
                var1 = var2.analyticsContext;
                var12 = var1.streamRegion;
                var5 = var1.streamApplication;
                var11 = var1.streamSourceType;
                var3 = var1.actionContext;
                var1 = var2.streamContext;
                var15 = var1.ownerId;
                var13 = var1.guildId;
                var6 = _closure1_slot18;
                var4 = var6.getRegion;
                var7 = _closure1_slot17;
                var1 = var7.getHostname;
                var1 = var1.bind(var7)();
                var10 = var4.bind(var6)(var1);
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 27;
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
                if(!var11) { _fun0020_ip = 149; continue _fun0020 }
case 150:
                var10 = 'streamer';
case 149:
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
            var3 = _closure1_slot15;
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
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var6 = this;
                var1 = var6.isOwner;
                var8 = null;
                if(!var1) { _fun0021_ip = 20; continue _fun0021 }
case 46:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 32;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var3.bind(var2)(var1);
                var8 = var1.bind(var2)();
case 20:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 28;
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
                var8 = _closure1_slot16;
                var7 = var8.getType;
                var9 = var7.bind(var8)();
                var7 = 'connection_type';
                var2[6] = var9;
                var7 = var8.getEffectiveConnectionSpeed;
                var9 = var7.bind(var8)();
                var7 = 'effective_connection_speed';
                var2[6] = var9;
                var7 = var8.getServiceProvider;
                var8 = var7.bind(var8)();
                var7 = 'service_provider';
                var2[6] = var8;
                var7 = var6.analyticsContext;
                var8 = var7.goLiveModalDurationMs;
                var7 = 'duration_go_live_modal';
                var2[6] = var8;
                var6 = var6.analyticsContext;
                var7 = var6.analyticsLocations;
                var6 = 'source_location_stack';
                var2[5] = var7;
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
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var6 = this;
                var _closure3_slot0 = var6;
                var2 = arg1;
                var _closure3_slot1 = var2;
                var4 = _closure1_slot13;
                var3 = var4.getChannel;
                var2 = var6.channelId;
                var4 = var3.bind(var4)(var2);
                var2 = null;
                var5 = var2 != var4;
                var3 = null;
                if(!var5) { _fun0022_ip = 87; continue _fun0022 }
case 151:
                var3 = var4.type;
case 87:
                var _closure3_slot4 = var3;
                var3 = var6.streamContext;
                var4 = var3.ownerId;
                var3 = var6._videoQuality;
                var _closure3_slot5 = var3;
                if(!(var2 != var3)) { _fun0022_ip = 152; continue _fun0022 }
case 153:
                var2 = var3.getNetworkStats;
                var2 = var2.bind(var3)();
                var _closure3_slot2 = var2;
                var2 = var6.isOwner;
                var8 = var3.getCodecUsageStats;
                if(var2) { _fun0022_ip = 154; continue _fun0022 }
case 155:
                var2 = 'receiver';
                var2 = var8.bind(var3)(var2, var4);
                _fun0022_ip = 141; continue _fun0022;
case 154:
                var5 = var6.userId;
                var4 = 'streamer';
                var2 = var8.bind(var3)(var4, var5);
case 141:
                var _closure3_slot3 = var2;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 33;
                var2 = var5[var2];
                var9 = undefined;
                var2 = var4.bind(var9)(var2);
                var5 = var2.default;
                var2 = {};
                var4 = var5.getApplicationNames;
                var4 = var4.bind(var5)();
                var2['stream_application_name'] = var4;
                var _closure3_slot6 = var2;
                var4 = _closure1_slot9;
                var2 = var4.getSettings;
                var5 = var2.bind(var4)();
                var2 = var6.isOwner;
                if(var2) { _fun0022_ip = 156; continue _fun0022 }
case 12:
                var2 = {};
                _fun0022_ip = 157; continue _fun0022;
case 156:
                var4 = {};
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 34;
                var7 = var10[var7];
                var8 = var8.bind(var9)(var7);
                var7 = var8.isClipsEnabled;
                var7 = var7.bind(var8)();
                var4['clips_enabled'] = var7;
                var5 = var5.clipsLength;
                var4['clips_buffer_length'] = var5;
                var2 = var4;
case 157:
                var _closure3_slot7 = var2;
                var2 = var6.isOwner;
                if(var2) { _fun0022_ip = 158; continue _fun0022 }
case 100:
                var2 = {};
                _fun0022_ip = 159; continue _fun0022;
case 158:
                var4 = {};
                var5 = var6.getBandwidthEstimationExperiment;
                var5 = var5.bind(var6)();
                var4['bandwidth_estimation_experiment'] = var5;
                var2 = var4;
case 159:
                var _closure3_slot8 = var2;
                var2 = var3.getOutboundStats;
                var5 = var2.bind(var3)();
                var4 = var5.forEach;
                var2 = function(arg1) {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                        var8 = arg1;
                        var3 = var8.num_frames;
                        var9 = null;
                        var4 = var9 != var3;
                        var2 = 0;
                        var1 = 0;
                        if(!var4) { _fun0023_ip = 160; continue _fun0023 }
case 104:
                        var1 = var3;
case 160:
                        if(!(var1 > var2)) { _fun0023_ip = 161; continue _fun0023 }
case 162:
                        var12 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var1 = 28;
                        var1 = var11[var1];
                        var7 = undefined;
                        var4 = var12.bind(var7)(var1);
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
                        var15 = var8;
                        var8 = copyDataProperties(var16, var15);
                        var13 = var6.soundshareStats;
                        var8 = var13.getStats;
                        var15 = var8.bind(var13)();
                        var16 = var1;
                        var8 = copyDataProperties(var16, var15);
                        var8 = var6.getStreamAnalyticsProperties;
                        var15 = var8.bind(var6)();
                        var16 = var1;
                        var8 = copyDataProperties(var16, var15);
                        var15 = _closure3_slot7;
                        var16 = var1;
                        var8 = copyDataProperties(var16, var15);
                        var15 = _closure3_slot8;
                        var16 = var1;
                        var8 = copyDataProperties(var16, var15);
                        var8 = 29;
                        var11 = var11[var8];
                        var12 = var12.bind(var7)(var11);
                        var11 = var12.getAppHardwareAccelerationEnabled;
                        var12 = var11.bind(var12)();
                        var11 = 'app_hardware_acceleration_enabled';
                        var1[10] = var12;
                        var12 = _closure3_slot4;
                        var11 = 'channel_type';
                        var1[10] = var12;
                        var11 = _closure3_slot1;
                        var10 = 'reason';
                        var1[9] = var11;
                        var10 = var6.analyticsContext;
                        var11 = var10.maxViewers;
                        var10 = 'max_viewers';
                        var1[9] = var11;
                        var11 = var6.hostname;
                        var10 = 'hostname';
                        var1[9] = var11;
                        var11 = _closure1_slot15;
                        var10 = var11.getHardwareEncoding;
                        var11 = var10.bind(var11)();
                        var10 = 'hardware_enabled';
                        var1[9] = var11;
                        var6 = var6.isOwner;
                        var9 = null;
                        if(!var6) { _fun0023_ip = 163; continue _fun0023 }
case 164:
                        var10 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var6 = 35;
                        var6 = var11[var6];
                        var6 = var10.bind(var7)(var6);
                        var9 = var6.bind(var7)();
case 163:
                        var6 = 'device_performance_class';
                        var1[5] = var9;
                        var9 = _closure1_slot15;
                        var6 = var9.getExperimentalSoundshare;
                        var9 = var6.bind(var9)();
                        var6 = 'soundshare_experimental';
                        var1[5] = var9;
                        var9 = _closure1_slot11;
                        var6 = var9.getState;
                        var6 = var6.bind(var9)();
                        var9 = var6.preset;
                        var6 = 'quality_preset';
                        var1[5] = var9;
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var8];
                        var6 = var6.bind(var7)(var5);
                        var5 = var6.getDiscordIsElevated;
                        var6 = var5.bind(var6)();
                        var5 = 'discord_is_elevated';
                        var1[4] = var6;
                        var1 = var3.bind(var4)(var2, var1);
case 161:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2);
                var2 = var3.getInboundParticipants;
                var3 = var2.bind(var3)();
                var2 = var3.forEach;
                var1 = function(arg1) {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                        var3 = _closure3_slot5;
                        var2 = var3.getInboundStats;
                        var1 = arg1;
                        var10 = var2.bind(var3)(var1);
                        var7 = null;
                        var2 = var7 == var10;
                        var1 = undefined;
                        var4 = undefined;
                        if(var2) { _fun0024_ip = 75; continue _fun0024 }
case 165:
                        var4 = var10.num_frames;
case 75:
                        var5 = var7 != var4;
                        var3 = 0;
                        var2 = 0;
                        if(!var5) { _fun0024_ip = 87; continue _fun0024 }
case 166:
                        var2 = var4;
case 87:
                        if(!(var2 > var3)) { _fun0024_ip = 167; continue _fun0024 }
case 168:
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var2 = 28;
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
                        var13 = var8.soundshareStats;
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
                        var10 = 29;
                        var10 = var12[var10];
                        var11 = var11.bind(var1)(var10);
                        var10 = var11.getAppHardwareAccelerationEnabled;
                        var11 = var10.bind(var11)();
                        var10 = 'app_hardware_acceleration_enabled';
                        var2[9] = var11;
                        var11 = _closure3_slot4;
                        var10 = 'channel_type';
                        var2[9] = var11;
                        var10 = _closure3_slot1;
                        var9 = 'reason';
                        var2[8] = var10;
                        var9 = var8.analyticsContext;
                        var10 = var9.maxViewers;
                        var9 = 'max_viewers';
                        var2[8] = var10;
                        var10 = var8.hostname;
                        var9 = 'hostname';
                        var2[8] = var10;
                        var10 = _closure1_slot15;
                        var9 = var10.getHardwareEncoding;
                        var10 = var9.bind(var10)();
                        var9 = 'hardware_enabled';
                        var2[8] = var10;
                        var8 = var8.isOwner;
                        var7 = null;
                        if(!var8) { _fun0024_ip = 169; continue _fun0024 }
case 163:
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var6 = 35;
                        var6 = var9[var6];
                        var6 = var8.bind(var1)(var6);
                        var7 = var6.bind(var1)();
case 169:
                        var6 = 'device_performance_class';
                        var2[5] = var7;
                        var2 = var4.bind(var5)(var3, var2);
case 167:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
case 152:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getExtraConnectionOptions';
        var5['key'] = var7;
        var7 = function value() {
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
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getMediaStreamKey';
        var5['key'] = var7;
        var6 = function value() {
            var1 = this;
            var1 = var1.streamKey;
            return var1;
        };
        var5['value'] = var6;
        var1[16] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = 37;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/go_live/StreamRTCConnection.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['StreamRTCAnalyticsContext'] = var2;
    return var1;
})();