// discord_common/js/packages/media-engine/BaseConnection.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
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
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var6);
    var6 = 0;
    var8 = var5[var6];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var5[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var5[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var5[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var5[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var5[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var5[var8];
    var8 = var4.bind(var1)(var8);
    var9 = var8.ConnectionStates;
    var _closure1_slot9 = var9;
    var9 = var8.DEFAULT_VOICE_BITRATE;
    var _closure1_slot10 = var9;
    var9 = var8.MediaTypes;
    var _closure1_slot11 = var9;
    var9 = var8.ResolutionTypes;
    var _closure1_slot12 = var9;
    var9 = var8.MediaEngineContextTypes;
    var _closure1_slot13 = var9;
    var9 = var8.VIDEO_QUALITY_FRAMERATE;
    var _closure1_slot14 = var9;
    var8 = var8.SIMULCAST_HQ_QUALITY;
    var _closure1_slot15 = var8;
    var _closure1_slot16 = var6;
    var6 = 12;
    var6 = var5[var6];
    var6 = var7.bind(var1)(var6);
    var2 = function(arg1) {
        var4 = function BaseConnection(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var7 = arg1;
                var6 = this;
                var1 = _closure1_slot4;
                var5 = _closure2_slot1;
                var4 = undefined;
                var1 = var1.bind(var4)(var6, var5);
                var1 = _closure1_slot7;
                var12 = var1.bind(var4)(var5);
                var5 = _closure1_slot6;
                var1 = _closure1_slot17;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var12.apply;
                var1 = var1.bind(var12)(var6, var4);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var8 = global;
                var11 = var8.Reflect;
                var10 = var11.construct;
                var8 = _closure1_slot7;
                var8 = var8.bind(var4)(var6);
                var9 = var8.constructor;
                var8 = new Array(0);
                var1 = var10.bind(var11)(var12, var8, var9);
case 8:
                var1 = var5.bind(var4)(var6, var1);
                var5 = _closure1_slot16;
                var6 = parseFloat(var5);
                var5 = var6 + 1;
                _closure1_slot16 = var5;
                var5 = 'WebRTC-';
                var5 = var5 + var6;
                var1['mediaEngineConnectionId'] = var5;
                var6 = false;
                var1['destroyed'] = var6;
                var5 = 0;
                var1['audioSSRC'] = var5;
                var1['videoSSRC'] = var5;
                var1['selfDeaf'] = var6;
                var1['selfMute'] = var6;
                var5 = {};
                var1['localMutes'] = var5;
                var5 = {};
                var1['disabledLocalVideos'] = var5;
                var5 = {};
                var1['localVolumes'] = var5;
                var1['isActiveOutputSinksEnabled'] = var6;
                var5 = global;
                var8 = var5.Map;
                var9 = var8.prototype;
                var9 = Object.create(var9, {constructor: {value: var8}});
                var16 = var9;
                var8 = new var16[var8](var15);
                var8 = var8 instanceof Object ? var8 : var9;
                var1['activeOutputSinks'] = var8;
                var1['videoSupported'] = var6;
                var1['useElectronVideo'] = var6;
                var1['spatialAudioEnabled'] = var6;
                var8 = _closure1_slot10;
                var1['voiceBitrate'] = var8;
                var8 = _closure1_slot14;
                var1['remoteSinkWantsMaxFramerate'] = var8;
                var8 = var5.Set;
                var9 = var8.prototype;
                var9 = Object.create(var9, {constructor: {value: var8}});
                var16 = var9;
                var8 = new var16[var8](var15);
                var8 = var8 instanceof Object ? var8 : var9;
                var1['wantsPriority'] = var8;
                var8 = {};
                var1['localSpeakingFlags'] = var8;
                var1['videoReady'] = var6;
                var6 = new Array(0);
                var1['videoStreamParameters'] = var6;
                var6 = {};
                var8 = 100;
                var6['any'] = var8;
                var1['remoteVideoSinkWants'] = var6;
                var6 = {};
                var6['any'] = var8;
                var1['localVideoSinkWants'] = var6;
                var6 = _closure1_slot9;
                var6 = var6.CONNECTING;
                var1['connectionState'] = var6;
                var6 = function() {
                    var1 = undefined;
                    return var1;
                };
                var1['onDesktopEncodingOptionsSet'] = var6;
                var5 = var5.Set;
                var6 = var5.prototype;
                var6 = Object.create(var6, {constructor: {value: var5}});
                var16 = var6;
                var5 = new var16[var5](var15);
                var5 = var5 instanceof Object ? var5 : var6;
                var1['experimentFlags'] = var5;
                var3 = function() {
                    var1 = null;
                    return var1;
                };
                var1['calcMaxBitrateFunc'] = var3;
                var1['context'] = var7;
                var3 = arg2;
                var1['userId'] = var3;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 7;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.VideoQualityManager;
                var6 = var2.prototype;
                var6 = Object.create(var6, {constructor: {value: var2}});
                var16 = var6;
                var15 = var7;
                var14 = var1;
                var2 = new var16[var2](var15, var14, var13);
                var2 = var2 instanceof Object ? var2 : var6;
                var1['videoQualityManager'] = var2;
                var2 = 8;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var4 = var2.default;
                var14 = var1.videoQualityManager;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var16 = var3;
                var15 = var1;
                var2 = new var16[var4](var15, var14, var13);
                var2 = var2 instanceof Object ? var2 : var3;
                var1['framerateReducer'] = var2;
                return var1;
            }
        };
        var _closure2_slot1 = var4;
        var2 = _closure1_slot8;
        var3 = undefined;
        var1 = arg1;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'destroy';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var1 = true;
            var3['destroyed'] = var1;
            var2 = var3.framerateReducer;
            var1 = var2.destroy;
            var1 = var1.bind(var2)();
            var4 = var3.setConnectionState;
            var2 = _closure1_slot9;
            var2 = var2.DISCONNECTED;
            var2 = var4.bind(var3)(var2);
            var4 = var3.emit;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var5.bind(var1)(var2);
            var2 = var2.BaseConnectionEvent;
            var2 = var2.Destroy;
            var2 = var4.bind(var3)(var2, var3);
            var2 = var3.removeAllListeners;
            var2 = var2.bind(var3)();
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(29);
        var1[0] = var5;
        var5 = {};
        var8 = 'getLocalMute';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = this;
                var2 = var1.localMutes;
                var1 = arg1;
                var1 = var2[var1];
                if(var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var1 = false;
case 9:
                return var1;
            }
        };
        var5['value'] = var8;
        var1[1] = var5;
        var5 = {};
        var8 = 'getLocalVideoDisabled';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = this;
                var2 = var1.disabledLocalVideos;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var1 = var2;
case 11:
                return var1;
            }
        };
        var5['value'] = var8;
        var1[2] = var5;
        var5 = {};
        var8 = 'setLocalVideoDisabled';
        var5['key'] = var8;
        var8 = function value(arg1, arg2) {
            var6 = arg1;
            var5 = arg2;
            var4 = this;
            var1 = var4.disabledLocalVideos;
            var1[var6] = var5;
            var3 = var4.emit;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var7.bind(var1)(var2);
            var2 = var2.BaseConnectionEvent;
            var2 = var2.LocalVideoDisabled;
            var2 = var3.bind(var4)(var2, var6, var5);
            return var1;
        };
        var5['value'] = var8;
        var1[3] = var5;
        var5 = {};
        var8 = 'getHasActiveVideoOutputSink';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var2 = this;
                var3 = var2.activeOutputSinks;
                var1 = var3.has;
                var1 = var1.bind(var3)(var4);
                if(!var1) { _fun0005_ip = 13; continue _fun0005 }
case 12:
                var3 = var2.activeOutputSinks;
                var2 = var3.get;
                var2 = var2.bind(var3)(var4);
                var3 = var2.size;
                var2 = 0;
                var1 = var3 > var2;
case 13:
                return var1;
            }
        };
        var5['value'] = var8;
        var1[4] = var5;
        var5 = {};
        var8 = 'setHasActiveVideoOutputSink';
        var5['key'] = var8;
        var8 = function value(arg1, arg2, arg3) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = arg1;
                var3 = arg3;
                var4 = this;
                var1 = var4.getHasActiveVideoOutputSink;
                var1 = var1.bind(var4)(var5);
                var6 = var4.activeOutputSinks;
                var2 = var6.get;
                var6 = var2.bind(var6)(var5);
                var2 = null;
                if(!(var2 == var6)) { _fun0006_ip = 3; continue _fun0006 }
case 14:
                var2 = global;
                var2 = var2.Set;
                var7 = var2.prototype;
                var7 = Object.create(var7, {constructor: {value: var2}});
                var11 = var7;
                var2 = new var11[var2](var10);
                var6 = var2 instanceof Object ? var2 : var7;
case 3:
                var2 = arg2;
                if(var2) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                var2 = var6.delete;
                var2 = var2.bind(var6)(var3);
                _fun0006_ip = 17; continue _fun0006;
case 15:
                var2 = var6.add;
                var2 = var2.bind(var6)(var3);
case 17:
                var3 = var4.activeOutputSinks;
                var2 = var3.set;
                var2 = var2.bind(var3)(var5, var6);
                var2 = var4.getHasActiveVideoOutputSink;
                var3 = var2.bind(var4)(var5);
                var2 = true;
                var4['isActiveOutputSinksEnabled'] = var2;
                if(!(var1 !== var3)) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                var2 = var4.emit;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 9;
                var6 = var6[var1];
                var1 = undefined;
                var1 = var7.bind(var1)(var6);
                var1 = var1.BaseConnectionEvent;
                var1 = var1.ActiveSinksChange;
                var1 = var2.bind(var4)(var1, var5, var3);
case 18:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[5] = var5;
        var5 = {};
        var8 = 'getActiveOutputSinkTrackingEnabled';
        var5['key'] = var8;
        var8 = function value() {
            var1 = this;
            var1 = var1.isActiveOutputSinksEnabled;
            return var1;
        };
        var5['value'] = var8;
        var1[6] = var5;
        var5 = {};
        var8 = 'setUseElectronVideo';
        var5['key'] = var8;
        var8 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['useElectronVideo'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var8;
        var1[7] = var5;
        var5 = {};
        var8 = 'setClipRecordUser';
        var5['key'] = var8;
        var8 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var8;
        var1[8] = var5;
        var5 = {};
        var8 = 'setViewerSideClip';
        var5['key'] = var8;
        var8 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var8;
        var1[9] = var5;
        var5 = {};
        var8 = 'setRemoteAudioHistory';
        var5['key'] = var8;
        var8 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var8;
        var1[10] = var5;
        var5 = {};
        var8 = 'setClipsKeyFrameInterval';
        var5['key'] = var8;
        var8 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var8;
        var1[11] = var5;
        var5 = {};
        var8 = 'setQualityDecoupling';
        var5['key'] = var8;
        var8 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var8;
        var1[12] = var5;
        var5 = {};
        var8 = 'presentDesktopSourcePicker';
        var5['key'] = var8;
        var8 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var8;
        var1[13] = var5;
        var5 = {};
        var8 = 'getStreamParameters';
        var5['key'] = var8;
        var8 = function value() {
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = this;
            var1 = var1.videoStreamParameters;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var8;
        var1[14] = var5;
        var5 = {};
        var8 = 'setExperimentFlag';
        var5['key'] = var8;
        var8 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var2 = var1.experimentFlags;
                var1 = arg2;
                if(var1) { _fun0007_ip = 20; continue _fun0007 }
case 21:
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
                _fun0007_ip = 22; continue _fun0007;
case 20:
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
case 22:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[15] = var5;
        var5 = {};
        var8 = 'setConnectionState';
        var5['key'] = var8;
        var8 = function value(arg1) {
            var1 = arg1;
            var5 = this;
            var4 = var5.logger;
            var3 = var4.info;
            var8 = var5.connectionState;
            var2 = global;
            var2 = var2.HermesInternal;
            var7 = var2.concat;
            var6 = 'Connection state change: ';
            var2 = ' => ';
            var2 = var7.bind(var6)(var8, var2, var1);
            var2 = var3.bind(var4)(var2);
            var5['connectionState'] = var1;
            var4 = var5.emit;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.BaseConnectionEvent;
            var3 = var2.ConnectionStateChange;
            var2 = var5.connectionState;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var8;
        var1[16] = var5;
        var5 = {};
        var8 = 'updateVideoQuality';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var8 = arg1;
                var5 = this;
                var3 = var5.videoStreamParameters;
                var2 = var3.findIndex;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.quality;
                    var1 = 100;
                    var1 = var1 === var2;
                    return var1;
                };
                var19 = var2.bind(var3)(var1);
                var1 = -1;
                if(!(var1 === var19)) { _fun0008_ip = 14; continue _fun0008 }
case 22:
                var19 = 0;
case 14:
                var3 = var5.applyQualityConstraints;
                var1 = var5.videoStreamParameters;
                var1 = var1[var19];
                var2 = var1.ssrc;
                var1 = {};
                var1 = var3.bind(var5)(var1, var2);
                var4 = var1.quality;
                var7 = var1.constraints;
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var11 = 10;
                var2 = var1[var11];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var5.videoStreamParameters;
                var2 = var3.bind(var1)(var2);
                var3 = null;
                if(!(var3 != var4)) { _fun0008_ip = 23; continue _fun0008 }
case 24:
                var12 = var2[var19];
                var10 = var4.bitrateMax;
                var12['maxBitrate'] = var10;
                var12 = var2[var19];
                var10 = var4.bitrateMin;
                var12['minBitrate'] = var10;
                var12 = var2[var19];
                var13 = var4.bitrateTarget;
                var14 = var3 != var13;
                var10 = 0;
                if(!var14) { _fun0008_ip = 25; continue _fun0008 }
case 26:
                var10 = var13;
case 25:
                var12['targetBitrate'] = var10;
                var10 = var4.encode;
                if(!(var3 != var10)) { _fun0008_ip = 23; continue _fun0008 }
case 27:
                var12 = var2[var19];
                var10 = var4.encode;
                var10 = var10.pixelCount;
                var12['maxPixelCount'] = var10;
                var12 = var2[var19];
                var10 = var4.encode;
                var10 = var10.framerate;
                var12['maxFrameRate'] = var10;
case 23:
                var5['videoStreamParameters'] = var2;
                var2 = var5.videoStreamParameters;
                var2 = var2.length;
                var13 = 0;
                var2 = var13 < var2;
                var18 = 100;
                var17 = var4;
                var16 = var7;
                var15 = 0;
                var14 = undefined;
                var12 = undefined;
                var10 = undefined;
                var4 = var17;
                var7 = var16;
                if(!var2) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                var21 = var17;
                var20 = var16;
                var22 = var14;
                if(!(var15 !== var19)) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                var24 = var5.applyQualityConstraints;
                var2 = var5.videoStreamParameters;
                var2 = var2[var15];
                var23 = var2.ssrc;
                var2 = {};
                var2 = var24.bind(var5)(var2, var23);
                var23 = var2.quality;
                var2 = var2.constraints;
                if(!(var3 != var23)) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                var24 = var5.videoStreamParameters;
                var25 = var24[var15];
                var24 = var23.bitrateMax;
                var25['maxBitrate'] = var24;
                var24 = var5.videoStreamParameters;
                var25 = var24[var15];
                var24 = var23.bitrateMin;
                var25['minBitrate'] = var24;
                var24 = var5.videoStreamParameters;
                var26 = var24[var15];
                var24 = var23.bitrateTarget;
                var27 = var3 != var24;
                var25 = 0;
                if(!var27) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                var25 = var24;
case 34:
                var26['targetBitrate'] = var25;
                var25 = var23.encode;
                var14 = var24;
                if(!(var3 != var25)) { _fun0008_ip = 32; continue _fun0008 }
case 36:
                var25 = var5.videoStreamParameters;
                var26 = var25[var15];
                var25 = var23.encode;
                var25 = var25.pixelCount;
                var26['maxPixelCount'] = var25;
                var25 = var5.videoStreamParameters;
                var26 = var25[var15];
                var25 = var23.encode;
                var25 = var25.framerate;
                var26['maxFrameRate'] = var25;
                var14 = var24;
case 32:
                var24 = var5.videoStreamParameters;
                var24 = var24[var15];
                var24 = var24.quality;
                var21 = var17;
                var20 = var16;
                var22 = var14;
                var12 = var23;
                var10 = var2;
                if(!(var18 === var24)) { _fun0008_ip = 30; continue _fun0008 }
case 37:
                var21 = var23;
                var20 = var2;
                var22 = var14;
                var12 = var21;
                var10 = var20;
case 30:
                var15 = var15 + 1;
                var2 = var5.videoStreamParameters;
                var2 = var2.length;
                var17 = var21;
                var16 = var20;
                var14 = var22;
                var4 = var17;
                var7 = var16;
                if(var15 < var2) { _fun0008_ip = 29; continue _fun0008 }
case 28:
                var10 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var11];
                var10 = var10.bind(var1)(var2);
                var2 = var5.videoStreamParameters;
                var2 = var10.bind(var1)(var2);
                var7['streamParameters'] = var2;
                var2 = global;
                var11 = var2.Math;
                var10 = var11.max;
                var14 = var5.videoStreamParameters;
                var12 = var14.map;
                var9 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.maxPixelCount;
                        var1 = null;
                        var3 = var1 != var2;
                        var1 = 0;
                        if(!var3) { _fun0009_ip = 38; continue _fun0009 }
case 39:
                        var1 = var2;
case 38:
                        return var1;
                    }
                };
                var29 = var12.bind(var14)(var9);
                var9 = new Array(0);
                var30 = var9;
                var28 = 0;
                var12 = arraySpread(var30, var29, var28);
                var30 = var10;
                var29 = var9;
                var28 = var11;
                var9 = apply(var30, var29, var28);
                var7['remoteSinkWantsPixelCount'] = var9;
                if(!(var3 == var8)) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                var3 = {};
                var30 = var3;
                var29 = var7;
                var9 = copyDataProperties(var30, var29);
                _fun0008_ip = 42; continue _fun0008;
case 40:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var6 = 11;
                var6 = var10[var6];
                var6 = var9.bind(var1)(var6);
                var3 = var6.bind(var1)(var7, var8);
case 42:
                var7 = var5.logger;
                var6 = var7.verbose;
                var9 = var2.JSON;
                var8 = var9.stringify;
                var9 = var8.bind(var9)(var3);
                var2 = var2.HermesInternal;
                var8 = var2.concat;
                var2 = 'updateVideoQuality: ';
                var2 = var8.bind(var2)(var9);
                var2 = var6.bind(var7)(var2);
                var2 = var5.updateVideoQualityCore;
                var2 = var2.bind(var5)(var3, var4);
                return var1;
            }
        };
        var5['value'] = var8;
        var1[17] = var5;
        var5 = {};
        var8 = 'applyVideoQualityMode';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = this;
                var4 = var2.context;
                var3 = _closure1_slot13;
                var3 = var3.DEFAULT;
                if(!(var4 === var3)) { _fun0010_ip = 43; continue _fun0010 }
case 12:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var3 = var1.VIDEO_QUALITY_MODES_TO_OVERWRITES;
                var1 = arg1;
                var4 = var3[var1];
                var3 = var2.videoQualityManager;
                var1 = var3.setQualityOverwrite;
                var1 = var1.bind(var3)(var4);
                var1 = var2.updateVideoQuality;
                var1 = var1.bind(var2)();
case 43:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[18] = var5;
        var5 = {};
        var8 = 'overwriteQualityForTesting';
        var5['key'] = var8;
        var8 = function value(arg1) {
            var2 = this;
            var4 = var2.videoQualityManager;
            var3 = var4.setQualityOverwrite;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var1 = var2.updateVideoQuality;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var8;
        var1[19] = var5;
        var5 = {};
        var8 = 'applyQualityConstraints';
        var5['key'] = var8;
        var8 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var4 = arguments[0];
                var1 = undefined;
                if(!(var4 === var1)) { _fun0011_ip = 44; continue _fun0011 }
case 45:
                var4 = {};
case 44:
                var1 = this;
                var3 = var1.videoQualityManager;
                var2 = var3.applyQualityConstraints;
                var1 = arguments[1];
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var5['value'] = var8;
        var1[20] = var5;
        var5 = {};
        var8 = 'initializeStreamParameters';
        var5['key'] = var8;
        var8 = function value(arg1) {
            var5 = arg1;
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = var5.filter;
            var3 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = arg1;
                    var4 = var2.type;
                    var1 = _closure1_slot11;
                    var1 = var1.VIDEO;
                    var1 = var4 === var1;
                    if(var1) { _fun0012_ip = 46; continue _fun0012 }
case 11:
                    var4 = var2.type;
                    var3 = _closure1_slot11;
                    var3 = var3.SCREEN;
                    var1 = var4 === var3;
case 46:
                    if(!var1) { _fun0012_ip = 6; continue _fun0012 }
case 47:
                    var2 = var2.rid;
                    var3 = 'string';
                    var2 = typeof var2;
                    var1 = var3 === var2;
case 6:
                    return var1;
                }
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.map;
            var1 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = arg1;
                    var1 = _closure3_slot0;
                    var4 = var1.videoQualityManager;
                    var3 = var4.getQuality;
                    var1 = var2.ssrc;
                    var4 = var3.bind(var4)(var1);
                    var1 = {};
                    var3 = var2.type;
                    var1['type'] = var3;
                    var3 = var2.active;
                    var1['active'] = var3;
                    var3 = var2.rid;
                    var1['rid'] = var3;
                    var3 = var2.ssrc;
                    var1['ssrc'] = var3;
                    var3 = var2.rtxSsrc;
                    var1['rtxSsrc'] = var3;
                    var3 = var2.quality;
                    var1['quality'] = var3;
                    var6 = var2.quality;
                    var5 = null;
                    var7 = var5 != var6;
                    var3 = 100;
                    var2 = var3;
                    if(!var7) { _fun0013_ip = 48; continue _fun0013 }
case 49:
                    var2 = var6;
case 48:
                    if(!(!(var2 < var3))) { _fun0013_ip = 50; continue _fun0013 }
case 51:
                    var2 = var4.bitrateMax;
                    _fun0013_ip = 52; continue _fun0013;
case 50:
                    var6 = var4.bitrateMax;
                    var3 = 4;
                    var2 = var6 / var3;
case 52:
                    var1['maxBitrate'] = var2;
                    var6 = var4.capture;
                    var7 = var5 == var6;
                    var2 = undefined;
                    if(var7) { _fun0013_ip = 53; continue _fun0013 }
case 54:
                    var2 = var6.framerate;
case 53:
                    var1['maxFrameRate'] = var2;
                    var2 = {};
                    var6 = _closure1_slot12;
                    var6 = var6.FIXED;
                    var2['type'] = var6;
                    var7 = var4.capture;
                    var8 = var5 == var7;
                    var6 = undefined;
                    if(var8) { _fun0013_ip = 55; continue _fun0013 }
case 56:
                    var6 = var7.width;
case 55:
                    var2['width'] = var6;
                    var4 = var4.capture;
                    var5 = var5 == var4;
                    var3 = undefined;
                    if(var5) { _fun0013_ip = 57; continue _fun0013 }
case 58:
                    var3 = var4.height;
case 57:
                    var2['height'] = var3;
                    var1['maxResolution'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1);
            var2['videoStreamParameters'] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var8;
        var1[21] = var5;
        var5 = {};
        var8 = 'getLocalWant';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var7 = arg1;
                var2 = this;
                var _closure3_slot0 = var7;
                var4 = var2.videoStreamParameters;
                var3 = var4.some;
                var1 = function(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var2 = arg1;
                        var3 = var2.ssrc;
                        var1 = _closure3_slot0;
                        var1 = var3 === var1;
                        if(!var1) { _fun0015_ip = 22; continue _fun0015 }
case 38:
                        var3 = var2.quality;
                        var2 = _closure1_slot15;
                        var1 = var3 === var2;
case 22:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1);
                if(var1) { _fun0014_ip = 59; continue _fun0014 }
case 60:
                var3 = undefined;
                var1 = var3 === var7;
case 59:
                var4 = var2.context;
                var3 = _closure1_slot13;
                var3 = var3.DEFAULT;
                var4 = var4 === var3;
                if(var4) { _fun0014_ip = 61; continue _fun0014 }
case 62:
                var4 = var1;
case 61:
                var6 = var2.remoteVideoSinkWants;
                var5 = null;
                if(!(var5 == var7)) { _fun0014_ip = 63; continue _fun0014 }
case 64:
                var3 = var2.videoStreamParameters;
                var1 = 0;
                var3 = var3[var1];
                var8 = var5 == var3;
                var1 = undefined;
                if(var8) { _fun0014_ip = 65; continue _fun0014 }
case 66:
                var1 = var3.ssrc;
case 65:
                var7 = var1;
case 63:
                var8 = var5 != var7;
                var3 = 0;
                var1 = 0;
                if(!var8) { _fun0014_ip = 51; continue _fun0014 }
case 67:
                var1 = var7;
case 51:
                var1 = var6[var1];
                if(!(var5 != var1)) { _fun0014_ip = 68; continue _fun0014 }
case 50:
                if(!(!(var1 > var3))) { _fun0014_ip = 69; continue _fun0014 }
case 68:
                var2 = var2.remoteVideoSinkWants;
                var2 = var2.any;
                if(!(var5 != var2)) { _fun0014_ip = 70; continue _fun0014 }
case 71:
                if(!(var2 > var3)) { _fun0014_ip = 70; continue _fun0014 }
case 72:
                if(var4) { _fun0014_ip = 73; continue _fun0014 }
case 70:
                var3 = 0;
                if(!var4) { _fun0014_ip = 74; continue _fun0014 }
case 75:
                var3 = 100;
case 74:
                var2 = var3;
case 73:
                return var2;
case 69:
                return var1;
            }
        };
        var5['value'] = var8;
        var1[22] = var5;
        var5 = {};
        var8 = 'getRemoteVideoSinkWants';
        var5['key'] = var8;
        var8 = function value(arg1) {
            var1 = this;
            var2 = var1.remoteVideoSinkWants;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var8;
        var1[23] = var5;
        var5 = {};
        var8 = 'getRemoteVideoSinkPixelCount';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var6 = arg1;
                var3 = undefined;
                var1 = 0;
                if(!(var3 !== var6)) { _fun0016_ip = 76; continue _fun0016 }
case 44:
                var4 = this;
                var4 = var4.remoteVideoSinkWants;
                var5 = var4.pixelCounts;
                var4 = null;
                var7 = var4 == var5;
                var3 = undefined;
                if(var7) { _fun0016_ip = 77; continue _fun0016 }
case 60:
                var3 = var5[var6];
case 77:
                var4 = var4 != var3;
                var2 = 0;
                if(!var4) { _fun0016_ip = 78; continue _fun0016 }
case 47:
                var2 = var3;
case 78:
                var1 = var2;
case 76:
                return var1;
            }
        };
        var5['value'] = var8;
        var1[24] = var5;
        var5 = {};
        var8 = 'emitStats';
        var5['key'] = var8;
        var8 = _closure1_slot3;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    StartGenerator();
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0017_ip = 79; continue _fun0017 }
case 80:
                    var2 = var5.getStats;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=24);
case 81:
                    return var2;
case 82:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0017_ip = 15; continue _fun0017 }
case 20:
                    var3 = null;
                    if(!(var3 != var2)) { _fun0017_ip = 83; continue _fun0017 }
case 84:
                    var4 = var5.emit;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 9;
                    var6 = var6[var3];
                    var3 = undefined;
                    var3 = var7.bind(var3)(var6);
                    var3 = var3.BaseConnectionEvent;
                    var3 = var3.Stats;
                    var3 = var4.bind(var5)(var3, var2);
case 83:
                    return var2;
case 15:
                    return var2;
case 79:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var7 = function emitStats() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[25] = var5;
        var5 = {};
        var7 = 'getSpatialAudioEnabled';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.spatialAudioEnabled;
            return var1;
        };
        var5['value'] = var7;
        var1[26] = var5;
        var5 = {};
        var7 = 'setSpatialAudioEnabled';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var2 = arg1;
                var1 = this;
                if(!var2) { _fun0018_ip = 85; continue _fun0018 }
case 45:
                var4 = var1.context;
                var3 = _closure1_slot13;
                var3 = var3.DEFAULT;
                var2 = var4 === var3;
case 85:
                var1['spatialAudioEnabled'] = var2;
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[27] = var5;
        var5 = {};
        var7 = 'setCalcMaxBitrateFunc';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['calcMaxBitrateFunc'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[28] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var6);
    var6 = 13;
    var6 = var5[var6];
    var8 = var4.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = '../discord_common/js/packages/media-engine/BaseConnection.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var2;
    var2 = 9;
    var2 = var5[var2];
    var2 = var4.bind(var1)(var2);
    var2 = var2.BaseConnectionEvent;
    var3['BaseConnectionEvent'] = var2;
    return var1;
})();