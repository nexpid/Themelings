// discord_common/js/packages/media-engine/native/Connection.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot36;
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
            var7 = _closure1_slot36;
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
    var _closure1_slot35 = var1;
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
    var _closure1_slot36 = var1;
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
case 35: // try_end0
            _fun0004_ip = 37; continue _fun0004;
case 38: // catch_target0
            CatchBlockStart(arg_register=1);
case 37:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot37 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = function makeRTXSSRC(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var4 = var1 != var3;
            var1 = 0;
            if(!var4) { _fun0005_ip = 39; continue _fun0005 }
case 32:
            var1 = 0;
            if(!(var1 !== var3)) { _fun0005_ip = 39; continue _fun0005 }
case 29:
            var2 = 1;
            var1 = var3 + var2;
case 39:
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var4 = 0;
    var8 = var6[var4];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.StatsFilter;
    var _closure1_slot10 = var9;
    var9 = var8.ExperimentFlags;
    var _closure1_slot11 = var9;
    var9 = var8.DESKTOP_BITRATE_ENHANCED;
    var _closure1_slot12 = var9;
    var9 = var8.DESKTOP_BITRATE;
    var _closure1_slot13 = var9;
    var9 = var8.MEDIA_SINK_WANTS_PROPERTIES;
    var _closure1_slot14 = var9;
    var9 = var8.MediaTypes;
    var _closure1_slot15 = var9;
    var8 = var8.SIMULCAST_HQ_QUALITY;
    var _closure1_slot16 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.NATIVE_MODE_VALUES;
    var _closure1_slot17 = var9;
    var9 = var8.InputModes;
    var _closure1_slot18 = var9;
    var9 = var8.ConnectionStates;
    var _closure1_slot19 = var9;
    var9 = var8.Codecs;
    var _closure1_slot20 = var9;
    var9 = var8.MediaEngineContextTypes;
    var _closure1_slot21 = var9;
    var9 = var8.SpeakingFlags;
    var _closure1_slot22 = var9;
    var9 = var8.ResolutionTypes;
    var _closure1_slot23 = var9;
    var9 = var8.NativeFeatures;
    var _closure1_slot24 = var9;
    var9 = var8.NoiseCancellerError;
    var _closure1_slot25 = var9;
    var9 = var8.DEFAULT_VOLUME;
    var _closure1_slot26 = var9;
    var9 = var8.DEFAULT_STREAM_VOLUME;
    var _closure1_slot27 = var9;
    var9 = var8.DEFAULT_SOUNDSHARE_VOICE_BITRATE;
    var _closure1_slot28 = var9;
    var9 = var8.DEFAULT_CALL_BITRATE;
    var _closure1_slot29 = var9;
    var9 = var8.DEFAULT_CALL_MIN_BITRATE;
    var _closure1_slot30 = var9;
    var9 = var8.DEFAULT_CALL_MAX_BITRATE;
    var _closure1_slot31 = var9;
    var9 = var8.DEFAULT_PRIORITY_SPEAKER_DUCKING;
    var _closure1_slot32 = var9;
    var8 = var8.PING_INTERVAL;
    var _closure1_slot33 = var8;
    var _closure1_slot34 = var4;
    var4 = 22;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var5 = function Connection(arg1, arg2, arg3) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var7 = arg1;
                var5 = this;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var6 = undefined;
                var1 = var1.bind(var6)(var5, var2);
                var12 = new Array(2);
                var12[0] = var7;
                var1 = arg2;
                var12[1] = var1;
                var1 = _closure1_slot7;
                var11 = var1.bind(var6)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot37;
                var1 = var1.bind(var6)();
                if(var1) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var5, var12);
                _fun0006_ip = 42; continue _fun0006;
case 40:
                var8 = global;
                var10 = var8.Reflect;
                var9 = var10.construct;
                var8 = _closure1_slot7;
                var8 = var8.bind(var6)(var5);
                var8 = var8.constructor;
                var1 = var9.bind(var10)(var11, var12, var8);
case 42:
                var1 = var2.bind(var6)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = _closure1_slot34;
                var5 = parseFloat(var2);
                var2 = var5 + 1;
                _closure1_slot34 = var2;
                var2 = 'Native-';
                var2 = var2 + var5;
                var1['mediaEngineConnectionId'] = var2;
                var12 = false;
                var1['selfVideo'] = var12;
                var2 = new Array(0);
                var1['codecs'] = var2;
                var2 = new Array(0);
                var1['initialCodecs'] = var2;
                var1['videoEncoderFallbackPending'] = var12;
                var2 = global;
                var5 = var2.Set;
                var8 = var5.prototype;
                var8 = Object.create(var8, {constructor: {value: var5}});
                var19 = var8;
                var5 = new var19[var5](var18);
                var5 = var5 instanceof Object ? var5 : var8;
                var1['videoDecoderFallbackSent'] = var5;
                var11 = '';
                var1['lastOverrideCodecDenylist'] = var11;
                var1['lastOverrideEncoderDenylist'] = var11;
                var1['lastCaptureOverrides'] = var11;
                var10 = 0;
                var1['overrideCodecResetAt'] = var10;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var9 = 9;
                var13 = var8[var9];
                var14 = var5.bind(var6)(var13);
                var13 = var14.getVoiceEngine;
                var13 = var13.bind(var14)();
                var13 = var13.DegradationPreference;
                var13 = var13.MAINTAIN_FRAMERATE;
                var1['desktopDegradationPreference'] = var13;
                var13 = var8[var9];
                var14 = var5.bind(var6)(var13);
                var13 = var14.getVoiceEngine;
                var13 = var13.bind(var14)();
                var13 = var13.DegradationPreference;
                var13 = var13.DISABLED;
                var1['sourceDesktopDegradationPreference'] = var13;
                var9 = var8[var9];
                var13 = var5.bind(var6)(var9);
                var9 = var13.getVoiceEngine;
                var9 = var9.bind(var13)();
                var9 = var9.DegradationPreference;
                var9 = var9.BALANCED;
                var1['videoDegradationPreference'] = var9;
                var9 = {};
                var1['localPans'] = var9;
                var9 = {};
                var1['remoteAudioSSRCs'] = var9;
                var9 = {};
                var1['remoteVideoSSRCs'] = var9;
                var4 = _closure1_slot18;
                var4 = var4.VOICE_ACTIVITY;
                var1['inputMode'] = var4;
                var4 = -40;
                var1['vadThreshold'] = var4;
                var4 = true;
                var1['vadAutoThreshold'] = var4;
                var13 = 0.5;
                var1['vadKrispActivationThreshold'] = var13;
                var1['vadUseKrisp'] = var4;
                var9 = 5;
                var1['vadLeading'] = var9;
                var9 = 25;
                var1['vadTrailing'] = var9;
                var1['vadDuringPreProcess'] = var12;
                var9 = 20;
                var1['pttReleaseDelay'] = var9;
                var1['soundshareActive'] = var12;
                var9 = null;
                var1['soundshareId'] = var9;
                var1['soundshareSentSpeakingEvent'] = var12;
                var1['echoCancellation'] = var4;
                var1['noiseSuppression'] = var4;
                var14 = {};
                var14['enabled'] = var4;
                var1['automaticGainControl'] = var14;
                var1['noiseCancellation'] = var12;
                var1['noiseCancellationDuringProcessing'] = var12;
                var14 = 'mix';
                var1['echoReferenceMode'] = var14;
                var1['attenuationFactor'] = var13;
                var1['attenuateWhileSpeakingSelf'] = var12;
                var1['attenuateWhileSpeakingOthers'] = var4;
                var1['qos'] = var4;
                var1['minimumJitterBufferLevel'] = var10;
                var12 = 100;
                var1['postponeDecodeLevel'] = var12;
                var12 = 60000;
                var1['reconnectInterval'] = var12;
                var1['keyframeInterval'] = var10;
                var1['clipsKeyFrameInterval'] = var10;
                var1['videoQualityMeasurement'] = var11;
                var1['videoEncoderExperiments'] = var11;
                var1['numFastUdpReconnects'] = var10;
                var10 = -1;
                var1['lastPreparedTransitionId'] = var10;
                var1['lastExecutedTransitionId'] = var10;
                var1['currentVideoCodec'] = var9;
                var1['lastDesktopEncodingOptions'] = var9;
                var9 = function(arg1, arg2, arg3) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = arg2;
                        var3 = _closure1_slot22;
                        var3 = var3.NONE;
                        var4 = 'boolean';
                        var3 = typeof var1;
                        var5 = var1;
                        if(!(var4 === var3)) { _fun0007_ip = 43; continue _fun0007 }
case 3:
                        var2 = _closure1_slot22;
                        if(var1) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                        var1 = var2.NONE;
                        _fun0007_ip = 46; continue _fun0007;
case 44:
                        var1 = var2.VOICE;
case 46:
                        var5 = var1;
case 43:
                        var4 = _closure3_slot0;
                        var3 = var4.handleSpeakingFlags;
                        var2 = arg1;
                        var1 = arg3;
                        var1 = var3.bind(var4)(var2, var5, var1);
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSpeakingNative'] = var9;
                var9 = function(arg1) {
                    var5 = _closure3_slot0;
                    var4 = var5.emit;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.BaseConnectionEvent;
                    var3 = var2.NativeMuteChanged;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['handleNativeMuteChanged'] = var9;
                var9 = function(arg1, arg2, arg3) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var11 = arg1;
                        var4 = arg2;
                        var1 = _closure3_slot0;
                        var1 = var1.localSpeakingFlags;
                        var3 = var1[var11];
                        var1 = null;
                        if(!(var1 == var3)) { _fun0008_ip = 47; continue _fun0008 }
case 48:
                        var1 = _closure1_slot22;
                        var3 = var1.NONE;
case 47:
                        var1 = _closure3_slot0;
                        var7 = var1.experimentFlags;
                        var6 = var7.has;
                        var5 = _closure1_slot11;
                        var5 = var5.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS;
                        var5 = var6.bind(var7)(var5);
                        if(!var5) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                        if(!(var3 !== var4)) { _fun0008_ip = 51; continue _fun0008 }
case 49:
                        var3 = _closure3_slot0;
                        var5 = var3.localSpeakingFlags;
                        var5[var11] = var4;
                        var3 = var3.userId;
                        if(!(var11 !== var3)) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                        var3 = _closure3_slot0;
                        var3 = var3.remoteAudioSSRCs;
                        var10 = var3[var11];
                        _fun0008_ip = 54; continue _fun0008;
case 52:
                        var3 = _closure3_slot0;
                        var10 = var3.audioSSRC;
case 54:
                        var9 = _closure3_slot0;
                        var8 = var9.emit;
                        var7 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var6 = 10;
                        var3 = var3[var6];
                        var5 = undefined;
                        var3 = var7.bind(var5)(var3);
                        var3 = var3.BaseConnectionEvent;
                        var16 = var3.Speaking;
                        var12 = arg3;
                        var17 = var9;
                        var15 = var11;
                        var14 = var4;
                        var13 = var10;
                        var3 = var17[var8](var16, var15, var14, var13, var12, var11);
                        var3 = _closure1_slot22;
                        var3 = var3.SOUNDSHARE;
                        var3 = var4 & var3;
                        if(!var3) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                        var4 = _closure3_slot0;
                        var7 = var4.soundshareSentSpeakingEvent;
                        var4 = false;
                        var3 = var4 === var7;
case 55:
                        if(!var3) { _fun0008_ip = 51; continue _fun0008 }
case 57:
                        var2 = _closure3_slot0;
                        var3 = var2.emit;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var6];
                        var1 = var4.bind(var5)(var1);
                        var1 = var1.BaseConnectionEvent;
                        var1 = var1.SoundshareSpeaking;
                        var1 = var3.bind(var2)(var1);
                        var1 = true;
                        var2['soundshareSentSpeakingEvent'] = var1;
case 51:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSpeakingFlags'] = var9;
                var9 = function() {
                    var4 = _closure3_slot0;
                    var3 = var4.emit;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.BaseConnectionEvent;
                    var2 = var2.SpeakingWhileMuted;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleSpeakingWhileMuted'] = var9;
                var9 = function(arg1) {
                    var5 = _closure3_slot0;
                    var4 = var5.emit;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.BaseConnectionEvent;
                    var3 = var2.Ping;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['handlePing'] = var9;
                var9 = function(arg1, arg2, arg3, arg4) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var2 = arg4;
                        var6 = _closure3_slot0;
                        var5 = var6.emit;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 10;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var3 = var3.BaseConnectionEvent;
                        var4 = var3.PingTimeout;
                        var3 = 0;
                        var7 = var2 > var3;
                        var3 = 4000;
                        if(!var7) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                        var3 = var2;
case 58:
                        var2 = arg3;
                        var2 = var5.bind(var6)(var4, var2, var3);
                        return var1;
                    }
                };
                var1['handlePingTimeout'] = var9;
                var9 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var6 = arg1;
                        var _closure4_slot0 = var6;
                        var1 = _closure3_slot0;
                        var1 = var1.videoEncoderFallbackPending;
                        if(var1) { _fun0010_ip = 60; continue _fun0010 }
case 34:
                        var1 = _closure3_slot0;
                        var4 = var1.overrideCodecResetAt;
                        var1 = 0;
                        if(!(var4 > var1)) { _fun0010_ip = 61; continue _fun0010 }
case 62:
                        var1 = global;
                        var5 = var1.performance;
                        var4 = var5.now;
                        var5 = var4.bind(var5)();
                        var4 = _closure3_slot0;
                        var4 = var4.overrideCodecResetAt;
                        var5 = var5 - var4;
                        var4 = 1000;
                        if(!(!(var5 < var4))) { _fun0010_ip = 63; continue _fun0010 }
case 61:
                        var4 = _closure3_slot0;
                        var8 = var4.logger;
                        var7 = var8.info;
                        var5 = global;
                        var5 = var5.HermesInternal;
                        var9 = var5.concat;
                        var5 = 'Falling back from current video encoder: ';
                        var5 = var9.bind(var5)(var6);
                        var5 = var7.bind(var8)(var5);
                        var8 = var4.codecs;
                        var7 = var8.map;
                        var5 = function(arg1) {
                            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                var1 = arg1;
                                var3 = _closure4_slot0;
                                var2 = var1.name;
                                var2 = var3 === var2;
                                if(var2) { _fun0011_ip = 4; continue _fun0011 }
case 64:
                                var5 = var1.name;
                                var3 = 'AV1';
                                var3 = var3 === var5;
                                if(!var3) { _fun0011_ip = 65; continue _fun0011 }
case 66:
                                var5 = _closure4_slot0;
                                var4 = 'AV1X';
                                var3 = var4 === var5;
case 65:
                                var2 = var3;
case 4:
                                if(!var2) { _fun0011_ip = 67; continue _fun0011 }
case 68:
                                var2 = false;
                                var1['encode'] = var2;
case 67:
                                return var1;
                            }
                        };
                        var7 = var7.bind(var8)(var5);
                        var5 = var7.filter;
                        var3 = function(arg1) {
                            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                                var2 = arg1;
                                var3 = var2.type;
                                var1 = 'video';
                                var1 = var1 === var3;
                                if(!var1) { _fun0012_ip = 69; continue _fun0012 }
case 70:
                                var4 = var2.encode;
                                var3 = false;
                                var1 = var3 === var4;
case 69:
                                if(!var1) { _fun0012_ip = 2; continue _fun0012 }
case 71:
                                var3 = var2.decode;
                                var2 = false;
                                var1 = var2 === var3;
case 2:
                                var1 = !var1;
                                return var1;
                            }
                        };
                        var3 = var5.bind(var7)(var3);
                        var4['codecs'] = var3;
                        var7 = var4.emit;
                        var8 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 10;
                        var5 = var5[var3];
                        var3 = undefined;
                        var3 = var8.bind(var3)(var5);
                        var3 = var3.BaseConnectionEvent;
                        var5 = var3.VideoEncoderFallback;
                        var3 = var4.codecs;
                        var3 = var7.bind(var4)(var5, var3);
                        var3 = true;
                        var4['videoEncoderFallbackPending'] = var3;
                        _fun0010_ip = 60; continue _fun0010;
case 63:
                        var2 = _closure3_slot0;
                        var3 = var2.logger;
                        var2 = var3.info;
                        var1 = var1.HermesInternal;
                        var5 = var1.concat;
                        var4 = 'Suppressing encoder fallback for ';
                        var1 = ' (override codec reset in progress)';
                        var1 = var5.bind(var4)(var6, var1);
                        var1 = var2.bind(var3)(var1);
case 60:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleVideoEncoderFallback'] = var9;
                var9 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var7 = arg1;
                        var _closure4_slot0 = var7;
                        var3 = _closure3_slot0;
                        var4 = var3.videoDecoderFallbackSent;
                        var3 = var4.has;
                        var3 = var3.bind(var4)(var7);
                        if(var3) { _fun0013_ip = 72; continue _fun0013 }
case 66:
                        var4 = _closure3_slot0;
                        var3 = var4.videoDecoderFallbackSent;
                        var2 = var3.add;
                        var2 = var2.bind(var3)(var7);
                        var5 = var4.logger;
                        var3 = var5.info;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var6 = var2.concat;
                        var2 = 'Falling back from current video decoder: ';
                        var2 = var6.bind(var2)(var7);
                        var2 = var3.bind(var5)(var2);
                        var5 = var4.codecs;
                        var3 = var5.map;
                        var2 = function(arg1) {
                            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                                var1 = arg1;
                                var3 = _closure4_slot0;
                                var2 = var1.name;
                                var2 = var3 === var2;
                                if(var2) { _fun0014_ip = 4; continue _fun0014 }
case 64:
                                var5 = var1.name;
                                var3 = 'AV1';
                                var3 = var3 === var5;
                                if(!var3) { _fun0014_ip = 65; continue _fun0014 }
case 66:
                                var5 = _closure4_slot0;
                                var4 = 'AV1X';
                                var3 = var4 === var5;
case 65:
                                var2 = var3;
case 4:
                                if(!var2) { _fun0014_ip = 67; continue _fun0014 }
case 68:
                                var2 = false;
                                var1['decode'] = var2;
case 67:
                                return var1;
                            }
                        };
                        var3 = var3.bind(var5)(var2);
                        var2 = var3.filter;
                        var1 = function(arg1) {
                            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                                var2 = arg1;
                                var3 = var2.type;
                                var1 = 'video';
                                var1 = var1 === var3;
                                if(!var1) { _fun0015_ip = 69; continue _fun0015 }
case 70:
                                var4 = var2.encode;
                                var3 = false;
                                var1 = var3 === var4;
case 69:
                                if(!var1) { _fun0015_ip = 2; continue _fun0015 }
case 71:
                                var3 = var2.decode;
                                var2 = false;
                                var1 = var2 === var3;
case 2:
                                var1 = !var1;
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        var4['codecs'] = var1;
                        var3 = var4.emit;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var5.bind(var1)(var2);
                        var1 = var1.BaseConnectionEvent;
                        var2 = var1.VideoDecoderFallback;
                        var1 = var4.codecs;
                        var1 = var3.bind(var4)(var2, var1);
case 72:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleVideoDecoderFallback'] = var9;
                var9 = function(arg1, arg2, arg3, arg4) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var10 = arg1;
                        var9 = arg2;
                        var4 = arg3;
                        var8 = arg4;
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var11 = var5.bind(var1)(var2);
                        var7 = _closure3_slot0;
                        var5 = var7.videoStreamParameters;
                        var5 = var11.bind(var1)(var5);
                        var _closure4_slot0 = var5;
                        var7 = var7.userId;
                        if(!(var10 !== var7)) { _fun0016_ip = 73; continue _fun0016 }
case 74:
                        var13 = 0;
                        if(!(var9 > var13)) { _fun0016_ip = 75; continue _fun0016 }
case 40:
                        var7 = _closure3_slot0;
                        var7 = var7.remoteVideoSSRCs;
                        var7 = var7[var10];
                        if(!(var1 === var7)) { _fun0016_ip = 76; continue _fun0016 }
case 77:
                        var7 = _closure3_slot0;
                        var11 = var7.remoteVideoSSRCs;
                        var7 = new Array(1);
                        var7[0] = var9;
                        var11[var10] = var7;
                        _fun0016_ip = 75; continue _fun0016;
case 76:
                        var7 = _closure3_slot0;
                        var7 = var7.remoteVideoSSRCs;
                        var11 = var7[var10];
                        var7 = var11.includes;
                        var7 = var7.bind(var11)(var9);
                        if(var7) { _fun0016_ip = 75; continue _fun0016 }
case 78:
                        var7 = _closure3_slot0;
                        var11 = var7.remoteVideoSSRCs;
                        var7 = var7.remoteVideoSSRCs;
                        var19 = var7[var10];
                        var7 = new Array(1);
                        var20 = var7;
                        var18 = 0;
                        var13 = arraySpread(var20, var19, var18);
                        var7[12] = var9;
                        var12 = 1;
                        var12 = var13 + var12;
                        var11[var10] = var7;
                        _fun0016_ip = 75; continue _fun0016;
case 73:
                        var7 = null;
                        if(!(var7 != var8)) { _fun0016_ip = 79; continue _fun0016 }
case 56:
                        var7 = global;
                        var11 = var7.Array;
                        var7 = var11.isArray;
                        var7 = var7.bind(var11)(var8);
                        if(!var7) { _fun0016_ip = 79; continue _fun0016 }
case 80:
                        var11 = var8.length;
                        var7 = 0;
                        if(!(!(var11 > var7))) { _fun0016_ip = 81; continue _fun0016 }
case 79:
                        var7 = 0;
                        if(!(!(var9 > var7))) { _fun0016_ip = 82; continue _fun0016 }
case 83:
                        var12 = var5[var7];
                        var11 = false;
                        var12['active'] = var11;
                        _fun0016_ip = 75; continue _fun0016;
case 82:
                        var12 = var5[var7];
                        var11 = true;
                        var12['active'] = var11;
                        var11 = var5[var7];
                        var11['ssrc'] = var9;
                        var11 = var5[var7];
                        var7 = _closure1_slot38;
                        var7 = var7.bind(var1)(var9);
                        var11['rtxSsrc'] = var7;
                        _fun0016_ip = 75; continue _fun0016;
case 81:
                        var7 = var8.forEach;
                        var6 = function(arg1) {
                            var2 = arg1;
                            var _closure5_slot0 = var2;
                            var3 = _closure4_slot0;
                            var2 = var3.forEach;
                            var1 = function(arg1, arg2) {
                                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                                    var5 = arg1;
                                    var3 = var5.rid;
                                    var2 = _closure5_slot0;
                                    var2 = var2.rid;
                                    if(!(var3 === var2)) { _fun0017_ip = 84; continue _fun0017 }
case 85:
                                    var1 = _closure5_slot0;
                                    var4 = var1.active;
                                    var3 = _closure4_slot0;
                                    var2 = {};
                                    var8 = var2;
                                    var7 = var5;
                                    var5 = copyDataProperties(var8, var7);
                                    var6 = var1.ssrc;
                                    var5 = 'ssrc';
                                    var2[4] = var6;
                                    var5 = var1.rtxSsrc;
                                    var1 = 'rtxSsrc';
                                    var2[0] = var5;
                                    var1 = 'active';
                                    var2[0] = var4;
                                    var1 = arg2;
                                    var3[var1] = var2;
case 84:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var6 = var7.bind(var8)(var6);
case 75:
                        var8 = _closure3_slot0;
                        var8['videoStreamParameters'] = var5;
                        var7 = var8.emit;
                        var6 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var5 = 10;
                        var5 = var11[var5];
                        var5 = var6.bind(var1)(var5);
                        var5 = var5.BaseConnectionEvent;
                        var6 = var5.Video;
                        var12 = null;
                        var11 = var12 != var4;
                        var5 = null;
                        if(!var11) { _fun0016_ip = 86; continue _fun0016 }
case 87:
                        var11 = '';
                        var5 = null;
                        if(!(var11 !== var4)) { _fun0016_ip = 86; continue _fun0016 }
case 88:
                        var5 = var4;
case 86:
                        var4 = _closure3_slot0;
                        var4 = var4.userId;
                        if(!(var10 !== var4)) { _fun0016_ip = 89; continue _fun0016 }
case 90:
                        var4 = _closure3_slot0;
                        var4 = var4.remoteAudioSSRCs;
                        var4 = var4[var10];
                        _fun0016_ip = 91; continue _fun0016;
case 89:
                        var11 = _closure3_slot0;
                        var4 = var11.audioSSRC;
case 91:
                        var3 = _closure1_slot38;
                        var15 = var3.bind(var1)(var9);
                        var2 = _closure3_slot0;
                        var14 = var2.videoStreamParameters;
                        var21 = var8;
                        var20 = var6;
                        var19 = var10;
                        var18 = var5;
                        var17 = var4;
                        var16 = var9;
                        var2 = var21[var7](var20, var19, var18, var17, var16, var15, var14, var13);
                        return var1;
                    }
                };
                var1['handleVideo'] = var9;
                var9 = function(arg1, arg2, arg3) {
                    var7 = _closure3_slot0;
                    var6 = var7.emit;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.BaseConnectionEvent;
                    var11 = var2.FirstFrame;
                    var10 = arg1;
                    var9 = arg2;
                    var8 = arg3;
                    var12 = var7;
                    var2 = var12[var6](var11, var10, var9, var8, var7);
                    return var1;
                };
                var1['handleFirstFrame'] = var9;
                var9 = function(arg1) {
                    var5 = _closure3_slot0;
                    var4 = var5.emit;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.BaseConnectionEvent;
                    var3 = var2.FirstFrameStats;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['handleFirstFrameStats'] = var9;
                var9 = function(arg1) {
                    var5 = _closure3_slot0;
                    var4 = var5.emit;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.BaseConnectionEvent;
                    var3 = var2.FirstFrameEncryptedStats;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['handleFirstFrameEncryptedStats'] = var9;
                var9 = function(arg1) {
                    var5 = _closure3_slot0;
                    var4 = var5.emit;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.BaseConnectionEvent;
                    var3 = var2.Silence;
                    var2 = arg1;
                    var2 = !var2;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['handleNoInput'] = var9;
                var9 = function(arg1, arg2) {
                    var6 = _closure3_slot0;
                    var5 = var6.emit;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.BaseConnectionEvent;
                    var4 = var2.DesktopSourceEnd;
                    var3 = arg1;
                    var2 = arg2;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                };
                var1['handleDesktopSourceEnded'] = var9;
                var9 = function(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var1 = arg1;
                        if(!var1) { _fun0018_ip = 92; continue _fun0018 }
case 93:
                        var3 = _closure3_slot0;
                        var1 = true;
                        var3['soundshareActive'] = var1;
                        var5 = var3.conn;
                        var4 = var5.setTransportOptions;
                        var2 = {};
                        var1 = global;
                        var9 = var1.Math;
                        var8 = var9.max;
                        var7 = _closure1_slot28;
                        var6 = var3.voiceBitrate;
                        var6 = var8.bind(var9)(var7, var6);
                        var2['encodingVoiceBitRate'] = var6;
                        var2 = var4.bind(var5)(var2);
                        var2 = var3.emit;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 10;
                        var4 = var4[var1];
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4);
                        var1 = var1.BaseConnectionEvent;
                        var1 = var1.SoundshareAttached;
                        var1 = var2.bind(var3)(var1);
case 92:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSoundshare'] = var9;
                var9 = function(arg1, arg2, arg3) {
                    var5 = _closure3_slot0;
                    var4 = var5.emit;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.BaseConnectionEvent;
                    var3 = var2.SoundshareFailed;
                    var2 = {};
                    var6 = arg1;
                    var2['failureCode'] = var6;
                    var6 = arg2;
                    var2['failureReason'] = var6;
                    var6 = arg3;
                    var2['willRetry'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['handleSoundshareFailed'] = var9;
                var9 = function() {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var3 = false;
                        var2['soundshareActive'] = var3;
                        var2 = var2.destroyed;
                        if(var2) { _fun0019_ip = 68; continue _fun0019 }
case 94:
                        var4 = _closure3_slot0;
                        var3 = var4.conn;
                        var2 = var3.setTransportOptions;
                        var1 = {};
                        var4 = var4.voiceBitrate;
                        var1['encodingVoiceBitRate'] = var4;
                        var1 = var2.bind(var3)(var1);
case 68:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSoundshareEnded'] = var9;
                var9 = function(arg1) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var5 = arg1;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var2 = var2.BaseConnectionEvent;
                        var2 = var2.ConnectionStateChange;
                        if(!(var5 === var2)) { _fun0020_ip = 41; continue _fun0020 }
case 62:
                        var4 = _closure3_slot0;
                        var3 = var4.emit;
                        var2 = var4.connectionState;
                        var2 = var3.bind(var4)(var5, var2);
case 41:
                        return var1;
                    }
                };
                var1['handleNewListenerNative'] = var9;
                var9 = function(arg1) {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                        var2 = arg1;
                        var3 = _closure3_slot0;
                        var6 = var3.connectionState;
                        var5 = _closure1_slot19;
                        var5 = var5.DISCONNECTED;
                        if(!(var6 === var5)) { _fun0021_ip = 11; continue _fun0021 }
case 95:
                        var8 = _closure3_slot0;
                        var7 = var8.off;
                        var9 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var5 = 10;
                        var6 = var6[var5];
                        var5 = undefined;
                        var5 = var9.bind(var5)(var6);
                        var5 = var5.BaseConnectionEvent;
                        var6 = var5.Stats;
                        var5 = var8.handleStats;
                        var5 = var7.bind(var8)(var6, var5);
                        _fun0021_ip = 96; continue _fun0021;
case 11:
                        var9 = null;
                        if(!(var9 != var2)) { _fun0021_ip = 96; continue _fun0021 }
case 97:
                        var5 = _closure3_slot0;
                        var5 = var5.stats;
                        if(!(var9 != var5)) { _fun0021_ip = 98; continue _fun0021 }
case 92:
                        var6 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var5 = 12;
                        var7 = var11[var5];
                        var8 = undefined;
                        var14 = var6.bind(var8)(var7);
                        var7 = var2.rtp;
                        var13 = var7.outbound;
                        var10 = 0;
                        var12 = function(arg1, arg2) {
                            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                                var1 = arg1;
                                var4 = arg2;
                                var6 = var1.lost;
                                var7 = var4.packetsLost;
                                var5 = null;
                                var8 = var5 != var7;
                                var2 = 0;
                                if(!var8) { _fun0022_ip = 99; continue _fun0022 }
case 48:
                                var2 = var7;
case 99:
                                var2 = var6 + var2;
                                var1['lost'] = var2;
                                var2 = var1.sent;
                                var4 = var4.packetsSent;
                                var5 = var5 != var4;
                                var3 = 0;
                                if(!var5) { _fun0022_ip = 67; continue _fun0022 }
case 100:
                                var3 = var4;
case 67:
                                var2 = var2 + var3;
                                var1['sent'] = var2;
                                return var1;
                            }
                        };
                        var7 = {'lost': 0, 'sent': 0};
                        var7 = var14.bind(var8)(var13, var12, var7);
                        var5 = var11[var5];
                        var12 = var6.bind(var8)(var5);
                        var5 = _closure3_slot0;
                        var5 = var5.stats;
                        var5 = var5.rtp;
                        var11 = var5.outbound;
                        var6 = function(arg1, arg2) {
                            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                                var1 = arg1;
                                var4 = arg2;
                                var6 = var1.lost;
                                var7 = var4.packetsLost;
                                var5 = null;
                                var8 = var5 != var7;
                                var2 = 0;
                                if(!var8) { _fun0023_ip = 99; continue _fun0023 }
case 48:
                                var2 = var7;
case 99:
                                var2 = var6 + var2;
                                var1['lost'] = var2;
                                var2 = var1.sent;
                                var4 = var4.packetsSent;
                                var5 = var5 != var4;
                                var3 = 0;
                                if(!var5) { _fun0023_ip = 67; continue _fun0023 }
case 100:
                                var3 = var4;
case 67:
                                var2 = var2 + var3;
                                var1['sent'] = var2;
                                return var1;
                            }
                        };
                        var5 = {'lost': 0, 'sent': 0};
                        var6 = var12.bind(var8)(var11, var6, var5);
                        var11 = var7.sent;
                        var5 = var6.sent;
                        var5 = var11 - var5;
                        var7 = var7.lost;
                        var6 = var6.lost;
                        var6 = var7 - var6;
                        if(!(var10 !== var5)) { _fun0021_ip = 101; continue _fun0021 }
case 102:
                        if(!(var5 > var10)) { _fun0021_ip = 103; continue _fun0021 }
case 104:
                        if(!(var6 >= var10)) { _fun0021_ip = 103; continue _fun0021 }
case 105:
                        var11 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var7 = 13;
                        var7 = var13[var7];
                        var7 = var11.bind(var8)(var7);
                        var5 = var5 + var6;
                        var6 = var6 / var5;
                        var5 = 1;
                        var12 = var7.bind(var8)(var6, var10, var5);
                        var11 = _closure3_slot0;
                        var7 = var11.emit;
                        var6 = _closure1_slot0;
                        var5 = 10;
                        var5 = var13[var5];
                        var5 = var6.bind(var8)(var5);
                        var5 = var5.BaseConnectionEvent;
                        var6 = var5.OutboundLossRate;
                        var5 = 100;
                        var5 = var5 * var12;
                        var5 = var7.bind(var11)(var6, var5);
                        _fun0021_ip = 103; continue _fun0021;
case 101:
                        var7 = _closure3_slot0;
                        var6 = var7.emit;
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var5 = 10;
                        var5 = var12[var5];
                        var5 = var11.bind(var8)(var5);
                        var5 = var5.BaseConnectionEvent;
                        var5 = var5.OutboundLossRate;
                        var5 = var6.bind(var7)(var5, var10);
case 103:
                        var5 = var2.rtp;
                        var7 = var5.outbound;
                        var6 = var7.filter;
                        var5 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.type;
                            var1 = 'audio';
                            var1 = var1 === var2;
                            return var1;
                        };
                        var5 = var6.bind(var7)(var5);
                        var6 = var5[var10];
                        var5 = _closure3_slot0;
                        var5 = var5.stats;
                        var5 = var5.rtp;
                        var7 = var5.outbound;
                        var5 = var7.filter;
                        var4 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.type;
                            var1 = 'audio';
                            var1 = var1 === var2;
                            return var1;
                        };
                        var4 = var5.bind(var7)(var4);
                        var4 = var4[var10];
                        if(!(var9 != var6)) { _fun0021_ip = 98; continue _fun0021 }
case 106:
                        if(!(var9 != var4)) { _fun0021_ip = 98; continue _fun0021 }
case 107:
                        var5 = var6.framesCaptured;
                        if(!(var9 != var5)) { _fun0021_ip = 98; continue _fun0021 }
case 108:
                        var5 = var4.framesCaptured;
                        if(!(var9 != var5)) { _fun0021_ip = 98; continue _fun0021 }
case 109:
                        var7 = var6.framesCaptured;
                        var5 = var4.framesCaptured;
                        var5 = var7 - var5;
                        var7 = var6.noiseCancellerFrames;
                        var11 = var5;
                        if(!(var9 != var7)) { _fun0021_ip = 110; continue _fun0021 }
case 111:
                        var7 = var4.noiseCancellerFrames;
                        var12 = var9 != var7;
                        var7 = 0;
                        if(!var12) { _fun0021_ip = 112; continue _fun0021 }
case 113:
                        var13 = var6.noiseCancellerFrames;
                        var12 = var4.noiseCancellerFrames;
                        var7 = var13 - var12;
case 112:
                        var11 = var7;
case 110:
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var7 = 9;
                        var7 = var13[var7];
                        var13 = var12.bind(var8)(var7);
                        var12 = var13.supportsFeature;
                        var7 = _closure1_slot24;
                        var7 = var7.KRISP_NATIVE_ERROR;
                        var7 = var12.bind(var13)(var7);
                        if(var7) { _fun0021_ip = 98; continue _fun0021 }
case 114:
                        var7 = _closure3_slot0;
                        var7 = var7.noiseCancellation;
                        if(!var7) { _fun0021_ip = 115; continue _fun0021 }
case 116:
                        var7 = 50;
                        if(!(var11 > var7)) { _fun0021_ip = 115; continue _fun0021 }
case 117:
                        var7 = var6.noiseCancellerProcessTime;
                        if(!(var9 != var7)) { _fun0021_ip = 115; continue _fun0021 }
case 118:
                        var7 = var4.noiseCancellerProcessTime;
                        if(!(var9 != var7)) { _fun0021_ip = 115; continue _fun0021 }
case 119:
                        var12 = var6.noiseCancellerProcessTime;
                        var7 = var4.noiseCancellerProcessTime;
                        var7 = var12 - var7;
                        var12 = var7 / var11;
                        var11 = 8;
                        if(!(!(var12 > var11))) { _fun0021_ip = 120; continue _fun0021 }
case 121:
                        if(!(var10 === var7)) { _fun0021_ip = 115; continue _fun0021 }
case 122:
                        var12 = _closure3_slot0;
                        var11 = var12.emit;
                        var10 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var7 = 10;
                        var7 = var13[var7];
                        var7 = var10.bind(var8)(var7);
                        var7 = var7.BaseConnectionEvent;
                        var10 = var7.NoiseCancellationError;
                        var7 = _closure1_slot25;
                        var7 = var7.KRISP_FAILED;
                        var7 = var11.bind(var12)(var10, var7);
                        _fun0021_ip = 115; continue _fun0021;
case 120:
                        var12 = _closure3_slot0;
                        var11 = var12.emit;
                        var10 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var7 = 10;
                        var7 = var13[var7];
                        var7 = var10.bind(var8)(var7);
                        var7 = var7.BaseConnectionEvent;
                        var10 = var7.NoiseCancellationError;
                        var7 = _closure1_slot25;
                        var7 = var7.KRISP_CPU_OVERUSE;
                        var7 = var11.bind(var12)(var10, var7);
case 115:
                        var7 = _closure3_slot0;
                        var10 = var7.inputMode;
                        var7 = _closure1_slot18;
                        var7 = var7.VOICE_ACTIVITY;
                        if(!(var10 === var7)) { _fun0021_ip = 98; continue _fun0021 }
case 123:
                        var7 = _closure3_slot0;
                        var7 = var7.vadAutoThreshold;
                        if(!var7) { _fun0021_ip = 98; continue _fun0021 }
case 124:
                        var7 = _closure3_slot0;
                        var7 = var7.vadUseKrisp;
                        if(!var7) { _fun0021_ip = 98; continue _fun0021 }
case 125:
                        var7 = 50;
                        if(!(var5 > var7)) { _fun0021_ip = 98; continue _fun0021 }
case 126:
                        var7 = var6.voiceActivityDetectorProcessTime;
                        if(!(var9 != var7)) { _fun0021_ip = 98; continue _fun0021 }
case 127:
                        var7 = var4.voiceActivityDetectorProcessTime;
                        if(!(var9 != var7)) { _fun0021_ip = 98; continue _fun0021 }
case 128:
                        var6 = var6.voiceActivityDetectorProcessTime;
                        var4 = var4.voiceActivityDetectorProcessTime;
                        var4 = var6 - var4;
                        var5 = var4 / var5;
                        var4 = 4;
                        if(!(var5 > var4)) { _fun0021_ip = 98; continue _fun0021 }
case 129:
                        var6 = _closure3_slot0;
                        var5 = var6.emit;
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 10;
                        var4 = var9[var4];
                        var4 = var7.bind(var8)(var4);
                        var4 = var4.BaseConnectionEvent;
                        var4 = var4.VoiceActivityDetectorError;
                        var3 = _closure1_slot25;
                        var3 = var3.KRISP_VAD_CPU_OVERUSE;
                        var3 = var5.bind(var6)(var4, var3);
case 98:
                        var1 = _closure3_slot0;
                        var1['stats'] = var2;
case 96:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleStats'] = var9;
                var3 = function(arg1, arg2) {
                    var6 = _closure3_slot0;
                    var5 = var6.emit;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.BaseConnectionEvent;
                    var4 = var2.MLSFailure;
                    var3 = arg1;
                    var2 = arg2;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                };
                var1['handleMLSFailure'] = var3;
                var3 = arg3;
                var1['videoSupported'] = var3;
                var3 = 14;
                var3 = var8[var3];
                var3 = var5.bind(var6)(var3);
                var5 = var3.Logger;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var3 = 'Connection(';
                var2 = ')';
                var18 = var6.bind(var3)(var7, var2);
                var3 = var5.prototype;
                var3 = Object.create(var3, {constructor: {value: var5}});
                var19 = var3;
                var2 = new var19[var5](var18, var17);
                var2 = var2 instanceof Object ? var2 : var3;
                var1['logger'] = var2;
                var3 = var1.logger;
                var2 = var3.enableNativeLogger;
                var2 = var2.bind(var3)(var4);
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var3 = _closure1_slot9;
        var4 = undefined;
        var2 = arg1;
        var2 = var3.bind(var4)(var5, var2);
        var3 = _closure1_slot5;
        var1 = {};
        var2 = 'initialize';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var8 = arg1;
                var5 = this;
                var _closure3_slot0 = var5;
                var _closure3_slot1 = var8;
                var6 = var5.logger;
                var4 = var6.info;
                var18 = var8.address;
                var16 = var8.port;
                var14 = var8.ssrc;
                var1 = global;
                var3 = var1.HermesInternal;
                var10 = var3.concat;
                var19 = 'Creating connection to ';
                var17 = ':';
                var15 = ' with audio ssrc: ';
                var3 = var19[var10](var18, var17, var16, var15, var14, var13);
                var3 = var4.bind(var6)(var3);
                var3 = var1.performance;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var5['beginInitializeAt'] = var1;
                var1 = var8.ssrc;
                var5['audioSSRC'] = var1;
                var1 = var8.streamUserId;
                var5['streamUserId'] = var1;
                var3 = var5.initializeStreamParameters;
                var1 = var8.streamParameters;
                var1 = var3.bind(var5)(var1);
                var4 = {};
                var1 = _closure1_slot15;
                var1 = var1.AUDIO;
                var4['type'] = var1;
                var1 = var5.audioSSRC;
                var4['ssrc'] = var1;
                var1 = '';
                var4['rid'] = var1;
                var1 = 64000;
                var4['maxBitrate'] = var1;
                var6 = var5.context;
                var1 = _closure1_slot21;
                var1 = var1.STREAM;
                var1 = var6 === var1;
                var4['soundshare'] = var1;
                var1 = new Array(1);
                var1[0] = var4;
                var17 = var5.videoStreamParameters;
                var16 = 1;
                var18 = var1;
                var4 = arraySpread(var18, var17, var16);
                var8['streamParameters'] = var1;
                var1 = var5.context;
                var8['context'] = var1;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 9;
                var4 = var4[var1];
                var1 = undefined;
                var6 = var6.bind(var1)(var4);
                var4 = var6.getVoiceEngine;
                var4 = var4.bind(var6)();
                var _closure3_slot3 = var4;
                var7 = var4.createOwnStreamConnectionWithOptions;
                var6 = null;
                if(!(var6 == var7)) { _fun0024_ip = 130; continue _fun0024 }
case 131:
                var7 = var4.createOwnStreamConnection;
                if(!(var6 == var7)) { _fun0024_ip = 132; continue _fun0024 }
case 133:
                var7 = function n(arg1, arg2, arg3) {
                    var1 = arg2;
                    var2 = _closure3_slot3;
                    var9 = var2.VoiceConnection;
                    var16 = var1.ssrc;
                    var14 = var1.address;
                    var13 = var1.port;
                    var11 = var1.experiments;
                    var10 = var1.streamParameters;
                    var1 = var9.prototype;
                    var2 = Object.create(var1, {constructor: {value: var9}});
                    var15 = arg1;
                    var12 = arg3;
                    var17 = var2;
                    var1 = new var17[var9](var16, var15, var14, var13, var12, var11, var10, var9);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                };
                _fun0024_ip = 134; continue _fun0024;
case 132:
                var10 = var5.context;
                var9 = _closure1_slot21;
                var9 = var9.STREAM;
                if(!(var10 === var9)) { _fun0024_ip = 135; continue _fun0024 }
case 136:
                var10 = var5.streamUserId;
                var9 = var5.userId;
                if(!(var10 !== var9)) { _fun0024_ip = 137; continue _fun0024 }
case 135:
                var9 = var4.createVoiceConnection;
                _fun0024_ip = 138; continue _fun0024;
case 137:
                var9 = var4.createOwnStreamConnection;
case 138:
                var _closure3_slot4 = var9;
                var7 = function n(arg1, arg2, arg3) {
                    var1 = arg2;
                    var9 = _closure3_slot4;
                    var16 = var1.ssrc;
                    var2 = _closure3_slot0;
                    var15 = var2.userId;
                    var14 = var1.address;
                    var13 = var1.port;
                    var11 = var1.experiments;
                    var10 = var1.streamParameters;
                    var17 = undefined;
                    var12 = arg3;
                    var1 = var17[var9](var16, var15, var14, var13, var12, var11, var10, var9);
                    return var1;
                };
                _fun0024_ip = 134; continue _fun0024;
case 130:
                var9 = var5.context;
                var3 = _closure1_slot21;
                var3 = var3.STREAM;
                if(!(var9 === var3)) { _fun0024_ip = 139; continue _fun0024 }
case 140:
                var9 = var5.streamUserId;
                var3 = var5.userId;
                if(!(var9 !== var3)) { _fun0024_ip = 141; continue _fun0024 }
case 139:
                var3 = var4.createVoiceConnectionWithOptions;
                _fun0024_ip = 142; continue _fun0024;
case 141:
                var3 = var4.createOwnStreamConnectionWithOptions;
case 142:
                var7 = var3;
case 134:
                var4 = var5.userId;
                var3 = function(arg1, arg2) {
                    _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                        var4 = arg1;
                        var3 = arg2;
                        var5 = _closure3_slot0;
                        var5 = var5.destroyed;
                        if(var5) { _fun0025_ip = 143; continue _fun0025 }
case 39:
                        var5 = null;
                        if(!(var5 != var4)) { _fun0025_ip = 62; continue _fun0025 }
case 33:
                        var6 = '';
                        if(!(var6 === var4)) { _fun0025_ip = 144; continue _fun0025 }
case 62:
                        if(!(var5 != var3)) { _fun0025_ip = 145; continue _fun0025 }
case 46:
                        var5 = _closure3_slot0;
                        var5['transportInfo'] = var3;
                        var14 = var3.protocol;
                        var _closure4_slot0 = var14;
                        var13 = var3.address;
                        var _closure4_slot1 = var13;
                        var12 = var3.port;
                        var _closure4_slot2 = var12;
                        var8 = var5.logger;
                        var7 = var8.info;
                        var3 = global;
                        var6 = var3.HermesInternal;
                        var11 = var6.concat;
                        var20 = 'Connected with local address ';
                        var18 = ':';
                        var16 = ' and protocol: ';
                        var19 = var13;
                        var17 = var12;
                        var15 = var14;
                        var6 = var20[var11](var19, var18, var17, var16, var15, var14);
                        var6 = var7.bind(var8)(var6);
                        var6 = var3.performance;
                        var3 = var6.now;
                        var3 = var3.bind(var6)();
                        var5['onConnectCallbackAt'] = var3;
                        var5 = _closure3_slot3;
                        var3 = var5.getCodecCapabilities;
                        var2 = function(arg1) {
                            var11 = arg1;
                            var7 = _closure3_slot0;
                            var4 = global;
                            var5 = var4.performance;
                            var1 = var5.now;
                            var1 = var1.bind(var5)();
                            var7['onVideoCodecsCallbackAt'] = var1;
                            var6 = var7.logger;
                            var5 = var6.info;
                            var8 = var4.JSON;
                            var1 = var8.stringify;
                            var9 = var1.bind(var8)(var11);
                            var1 = var4.HermesInternal;
                            var8 = var1.concat;
                            var1 = 'Available engine codecs: ';
                            var1 = var8.bind(var1)(var9);
                            var1 = var5.bind(var6)(var1);
                            var10 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var6 = 15;
                            var8 = var13[var6];
                            var1 = undefined;
                            var12 = var10.bind(var1)(var8);
                            var9 = var12.getExperimentCodecs;
                            var8 = var7.experimentFlags;
                            var12 = var9.bind(var12)(var8);
                            var14 = var7.logger;
                            var9 = var14.info;
                            var15 = var4.JSON;
                            var8 = var15.stringify;
                            var16 = var8.bind(var15)(var12);
                            var8 = var4.HermesInternal;
                            var15 = var8.concat;
                            var8 = 'Experimental codecs: ';
                            var8 = var15.bind(var8)(var16);
                            var8 = var9.bind(var14)(var8);
                            var8 = var13[var6];
                            var9 = var10.bind(var1)(var8);
                            var8 = var9.parseNativeCodecs;
                            var9 = var8.bind(var9)(var11);
                            var8 = var7.lastOverrideCodecDenylist;
                            var11 = var8.length;
                            var8 = 0;
                            var11 = var11 > var8;
                            var14 = {'type': 'audio', 'name': null, 'priority': 1, 'payloadType': 120};
                            var5 = _closure1_slot20;
                            var5 = var5.OPUS;
                            var14['name'] = var5;
                            var8 = 1;
                            var5 = new Array(1);
                            var5[0] = var14;
                            var6 = var13[var6];
                            var10 = var10.bind(var1)(var6);
                            var6 = var10.filterParsedVideoCodecs;
                            var11 = var6.bind(var10)(var9, var12, var11);
                            var10 = var11.map;
                            var6 = function(arg1, arg2) {
                                var2 = arg1;
                                var5 = arg2;
                                var1 = 2;
                                var3 = var1 * var5;
                                var1 = 101;
                                var4 = var1 + var3;
                                var1 = {};
                                var3 = 'video';
                                var1['type'] = var3;
                                var3 = var2.name;
                                var1['name'] = var3;
                                var3 = 1;
                                var5 = var5 + var3;
                                var1['priority'] = var5;
                                var1['payloadType'] = var4;
                                var3 = var4 + var3;
                                var1['rtxPayloadType'] = var3;
                                var3 = var2.encode;
                                var1['encode'] = var3;
                                var2 = var2.decode;
                                var1['decode'] = var2;
                                return var1;
                            };
                            var18 = var10.bind(var11)(var6);
                            var19 = var5;
                            var17 = var8;
                            var6 = arraySpread(var19, var18, var17);
                            var7['codecs'] = var5;
                            var8 = var4.Map;
                            var6 = var9.map;
                            var5 = function(arg1) {
                                var2 = arg1;
                                var3 = var2.name;
                                var1 = new Array(2);
                                var1[0] = var3;
                                var2 = var2.encode;
                                var1[1] = var2;
                                return var1;
                            };
                            var19 = var6.bind(var9)(var5);
                            var6 = var8.prototype;
                            var6 = Object.create(var6, {constructor: {value: var8}});
                            var20 = var6;
                            var5 = new var20[var8](var19, var18);
                            var5 = var5 instanceof Object ? var5 : var6;
                            var _closure5_slot0 = var5;
                            var8 = var7.codecs;
                            var6 = var8.map;
                            var5 = function(arg1) {
                                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                                    var2 = arg1;
                                    var1 = {};
                                    var7 = var1;
                                    var6 = var2;
                                    var3 = copyDataProperties(var7, var6);
                                    var4 = var2.type;
                                    var3 = 'video';
                                    if(!(var3 === var4)) { _fun0026_ip = 28; continue _fun0026 }
case 34:
                                    var5 = _closure5_slot0;
                                    var4 = var5.get;
                                    var3 = var2.name;
                                    var3 = var4.bind(var5)(var3);
                                    var4 = null;
                                    if(!(var4 == var3)) { _fun0026_ip = 146; continue _fun0026 }
case 28:
                                    var3 = var2.encode;
case 146:
                                    var2 = 'encode';
                                    var1[1] = var3;
                                    return var1;
                                }
                            };
                            var5 = var6.bind(var8)(var5);
                            var7['initialCodecs'] = var5;
                            var8 = var7.logger;
                            var6 = var8.info;
                            var10 = var7.codecs;
                            var9 = var10.filter;
                            var5 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.type;
                                var1 = 'audio';
                                var1 = var1 === var2;
                                return var1;
                            };
                            var10 = var9.bind(var10)(var5);
                            var9 = var10.map;
                            var5 = function(arg1) {
                                var1 = arg1;
                                var1 = var1.name;
                                return var1;
                            };
                            var10 = var9.bind(var10)(var5);
                            var5 = var4.HermesInternal;
                            var9 = var5.concat;
                            var5 = 'Audio codecs: ';
                            var5 = var9.bind(var5)(var10);
                            var5 = var6.bind(var8)(var5);
                            var6 = var7.logger;
                            var5 = var6.info;
                            var9 = var7.codecs;
                            var8 = var9.filter;
                            var7 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.type;
                                var1 = 'video';
                                var1 = var1 === var2;
                                return var1;
                            };
                            var9 = var8.bind(var9)(var7);
                            var8 = var9.map;
                            var7 = function(arg1) {
                                var1 = arg1;
                                var3 = var1.name;
                                var2 = '[encode: ';
                                var3 = var3 + var2;
                                var2 = var1.encode;
                                var3 = var3 + var2;
                                var2 = var1.decode;
                                var1 = ', decode: ';
                                var1 = var3 + var1;
                                var2 = var1 + var2;
                                var1 = ']';
                                var1 = var2 + var1;
                                return var1;
                            };
                            var8 = var8.bind(var9)(var7);
                            var4 = var4.HermesInternal;
                            var7 = var4.concat;
                            var4 = 'Video codecs: ';
                            var4 = var7.bind(var4)(var8);
                            var4 = var5.bind(var6)(var4);
                            var4 = _closure3_slot2;
                            var3 = var4.getEncryptionModes;
                            var2 = function(arg1) {
                                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                                    var14 = arg1;
                                    var1 = _closure3_slot0;
                                    var3 = global;
                                    var4 = var3.performance;
                                    var2 = var4.now;
                                    var2 = var2.bind(var4)();
                                    var1['onEncryptionModesCallbackAt'] = var2;
                                    var6 = var1.logger;
                                    var4 = var6.info;
                                    var2 = var3.HermesInternal;
                                    var7 = var2.concat;
                                    var2 = 'Encryption modes: ';
                                    var2 = var7.bind(var2)(var14);
                                    var2 = var4.bind(var6)(var2);
                                    var6 = _closure3_slot2;
                                    var4 = var6.setTransportOptions;
                                    var2 = var1.getConnectionTransportOptions;
                                    var2 = var2.bind(var1)();
                                    var2 = var4.bind(var6)(var2);
                                    var4 = _closure3_slot2;
                                    var2 = var4.setSelfMute;
                                    var1 = var1.selfMute;
                                    if(var1) { _fun0027_ip = 147; continue _fun0027 }
case 148:
                                    var6 = _closure3_slot0;
                                    var7 = var6.context;
                                    var6 = _closure1_slot21;
                                    var6 = var6.STREAM;
                                    var1 = var7 === var6;
case 147:
                                    var1 = var2.bind(var4)(var1);
                                    var6 = _closure3_slot2;
                                    var4 = var6.setSelfDeafen;
                                    var1 = _closure3_slot0;
                                    var2 = var1.selfDeaf;
                                    var2 = var4.bind(var6)(var2);
                                    var4 = _closure3_slot2;
                                    var2 = var4.setOnSpeakingCallback;
                                    var1 = var1.handleSpeakingNative;
                                    var1 = var2.bind(var4)(var1);
                                    var1 = _closure3_slot2;
                                    var1 = var1.setOnNativeMuteChangedCallback;
                                    var2 = null;
                                    if(!(var2 != var1)) { _fun0027_ip = 149; continue _fun0027 }
case 150:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setOnNativeMuteChangedCallback;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handleNativeMuteChanged;
                                    var1 = var4.bind(var6)(var1);
case 149:
                                    var1 = _closure3_slot2;
                                    var1 = var1.setOnSpeakingWhileMutedCallback;
                                    if(!(var2 != var1)) { _fun0027_ip = 151; continue _fun0027 }
case 152:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setOnSpeakingWhileMutedCallback;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handleSpeakingWhileMuted;
                                    var1 = var4.bind(var6)(var1);
case 151:
                                    var1 = _closure3_slot2;
                                    var1 = var1.setPingInterval;
                                    if(!(var2 != var1)) { _fun0027_ip = 131; continue _fun0027 }
case 25:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setPingInterval;
                                    var1 = _closure1_slot33;
                                    var1 = var4.bind(var6)(var1);
case 131:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setPingCallback;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handlePing;
                                    var1 = var4.bind(var6)(var1);
                                    var1 = _closure3_slot2;
                                    var1 = var1.setPingTimeoutCallback;
                                    if(!(var2 != var1)) { _fun0027_ip = 153; continue _fun0027 }
case 154:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setPingTimeoutCallback;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handlePingTimeout;
                                    var1 = var4.bind(var6)(var1);
case 153:
                                    var1 = _closure3_slot2;
                                    var1 = var1.setOnVideoEncoderFallbackCallback;
                                    if(!(var2 != var1)) { _fun0027_ip = 155; continue _fun0027 }
case 130:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setOnVideoEncoderFallbackCallback;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handleVideoEncoderFallback;
                                    var1 = var4.bind(var6)(var1);
case 155:
                                    var1 = _closure3_slot2;
                                    var1 = var1.setOnVideoDecoderFallbackCallback;
                                    if(!(var2 != var1)) { _fun0027_ip = 156; continue _fun0027 }
case 157:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setOnVideoDecoderFallbackCallback;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handleVideoDecoderFallback;
                                    var1 = var4.bind(var6)(var1);
case 156:
                                    var7 = _closure3_slot3;
                                    var6 = var7.setTransportOptions;
                                    var4 = {};
                                    var1 = true;
                                    var4['builtInEchoCancellation'] = var1;
                                    var1 = _closure3_slot0;
                                    var8 = var1.echoCancellation;
                                    var4['echoCancellation'] = var8;
                                    var8 = var1.noiseSuppression;
                                    var4['noiseSuppression'] = var8;
                                    var8 = var1.automaticGainControl;
                                    var8 = var8.enabled;
                                    var4['automaticGainControl'] = var8;
                                    var8 = var1.automaticGainControl;
                                    var4['automaticGainControlConfig'] = var8;
                                    var8 = var1.noiseCancellation;
                                    var4['noiseCancellation'] = var8;
                                    var8 = var1.noiseCancellationDuringProcessing;
                                    var4['noiseCancellationDuringProcessing'] = var8;
                                    var4 = var6.bind(var7)(var4);
                                    var6 = var7.setNoInputThreshold;
                                    var4 = -100;
                                    var4 = var6.bind(var7)(var4);
                                    var6 = var7.setNoInputCallback;
                                    var4 = var1.handleNoInput;
                                    var4 = var6.bind(var7)(var4);
                                    var1 = var1.videoSupported;
                                    if(!var1) { _fun0027_ip = 158; continue _fun0027 }
case 159:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setOnVideoCallback;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handleVideo;
                                    var1 = var4.bind(var6)(var1);
                                    var1 = _closure3_slot2;
                                    var1 = var1.setOnFirstFrameCallback;
                                    if(!(var2 != var1)) { _fun0027_ip = 160; continue _fun0027 }
case 161:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setOnFirstFrameCallback;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handleFirstFrame;
                                    var1 = var4.bind(var6)(var1);
case 160:
                                    var1 = _closure3_slot2;
                                    var1 = var1.setOnFirstFrameDeliveredStatsCallback;
                                    if(!(var2 != var1)) { _fun0027_ip = 162; continue _fun0027 }
case 117:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setOnFirstFrameDeliveredStatsCallback;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handleFirstFrameStats;
                                    var1 = var4.bind(var6)(var1);
case 162:
                                    var1 = _closure3_slot2;
                                    var1 = var1.setOnFirstFrameEncryptedStatsCallback;
                                    if(!(var2 != var1)) { _fun0027_ip = 163; continue _fun0027 }
case 164:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setOnFirstFrameEncryptedStatsCallback;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handleFirstFrameEncryptedStats;
                                    var1 = var4.bind(var6)(var1);
case 163:
                                    var1 = _closure3_slot2;
                                    var1 = var1.setOnDesktopSourceEnded;
                                    if(!(var2 != var1)) { _fun0027_ip = 165; continue _fun0027 }
case 166:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setOnDesktopSourceEnded;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handleDesktopSourceEnded;
                                    var1 = var4.bind(var6)(var1);
case 165:
                                    var1 = _closure3_slot2;
                                    var1 = var1.setOnSoundshare;
                                    if(!(var2 != var1)) { _fun0027_ip = 167; continue _fun0027 }
case 120:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setOnSoundshare;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handleSoundshare;
                                    var1 = var4.bind(var6)(var1);
case 167:
                                    var1 = _closure3_slot2;
                                    var1 = var1.setOnSoundshareEnded;
                                    if(!(var2 != var1)) { _fun0027_ip = 168; continue _fun0027 }
case 169:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setOnSoundshareEnded;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handleSoundshareEnded;
                                    var1 = var4.bind(var6)(var1);
case 168:
                                    var1 = _closure3_slot2;
                                    var1 = var1.setOnSoundshareFailed;
                                    if(!(var2 != var1)) { _fun0027_ip = 158; continue _fun0027 }
case 170:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setOnSoundshareFailed;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handleSoundshareFailed;
                                    var1 = var4.bind(var6)(var1);
case 158:
                                    var1 = _closure3_slot2;
                                    var1 = var1.setOnMLSFailureCallback;
                                    if(!(var2 != var1)) { _fun0027_ip = 171; continue _fun0027 }
case 172:
                                    var4 = _closure3_slot2;
                                    var2 = var4.setOnMLSFailureCallback;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handleMLSFailure;
                                    var1 = var2.bind(var4)(var1);
case 171:
                                    var2 = _closure3_slot0;
                                    var6 = var2.setConnectionState;
                                    var4 = _closure1_slot19;
                                    var4 = var4.CONNECTED;
                                    var4 = var6.bind(var2)(var4);
                                    var11 = var2.emit;
                                    var8 = _closure1_slot0;
                                    var9 = _closure1_slot2;
                                    var6 = 10;
                                    var4 = var9[var6];
                                    var1 = undefined;
                                    var4 = var8.bind(var1)(var4);
                                    var4 = var4.BaseConnectionEvent;
                                    var10 = var4.Connected;
                                    var7 = _closure4_slot0;
                                    var4 = {};
                                    var13 = _closure4_slot1;
                                    var4['address'] = var13;
                                    var12 = _closure4_slot2;
                                    var4['port'] = var12;
                                    var13 = var2.chooseEncryptionMode;
                                    var12 = _closure3_slot1;
                                    var12 = var12.modes;
                                    var12 = var13.bind(var2)(var12, var14);
                                    var4['mode'] = var12;
                                    var12 = var2.codecs;
                                    var4['codecs'] = var12;
                                    var4 = var11.bind(var2)(var10, var7, var4);
                                    var10 = var2.on;
                                    var4 = var9[var6];
                                    var4 = var8.bind(var1)(var4);
                                    var4 = var4.BaseConnectionEvent;
                                    var7 = var4.Stats;
                                    var4 = var2.handleStats;
                                    var4 = var10.bind(var2)(var7, var4);
                                    var4 = var2.getUserOptions;
                                    var4 = var4.bind(var2)();
                                    var10 = var4.forEach;
                                    var7 = function(arg1) {
                                        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                                            var1 = arg1;
                                            var2 = _closure3_slot0;
                                            var3 = var2.logger;
                                            var2 = var3.info;
                                            var9 = var1.id;
                                            var8 = var1.ssrc;
                                            var7 = var1.videoSsrcs;
                                            var4 = null;
                                            var5 = var4 == var7;
                                            var1 = undefined;
                                            if(var5) { _fun0028_ip = 173; continue _fun0028 }
case 174:
                                            var6 = var7.join;
                                            var5 = ',';
                                            var1 = var6.bind(var7)(var5);
case 173:
                                            var4 = var4 != var1;
                                            var7 = 0;
                                            if(!var4) { _fun0028_ip = 175; continue _fun0028 }
case 74:
                                            var7 = var1;
case 175:
                                            var1 = global;
                                            var1 = var1.HermesInternal;
                                            var6 = var1.concat;
                                            var15 = 'Creating user: ';
                                            var13 = ' with audio SSRC: ';
                                            var11 = ' and video SSRCs: ';
                                            var14 = var9;
                                            var12 = var8;
                                            var10 = var7;
                                            var1 = var15[var6](var14, var13, var12, var11, var10, var9);
                                            var1 = var2.bind(var3)(var1);
                                            return var1;
                                        }
                                    };
                                    var7 = var10.bind(var4)(var7);
                                    var7 = var2.mergeUsers;
                                    var7 = var7.bind(var2)(var4);
                                    var7 = var2.emit;
                                    var6 = var9[var6];
                                    var6 = var8.bind(var1)(var6);
                                    var6 = var6.BaseConnectionEvent;
                                    var6 = var6.RemoteStreamsReady;
                                    var4 = var4.length;
                                    var4 = var7.bind(var2)(var6, var4);
                                    var4 = var3.Object;
                                    var3 = var4.keys;
                                    var2 = var2.localSpeakingFlags;
                                    var4 = var3.bind(var4)(var2);
                                    var2 = var4.length;
                                    var3 = 0;
                                    var2 = var3 < var2;
                                    if(!var2) { _fun0027_ip = 176; continue _fun0027 }
case 177:
                                    var8 = var4[var3];
                                    var2 = _closure3_slot0;
                                    var2 = var2.userId;
                                    if(!(var8 !== var2)) { _fun0027_ip = 178; continue _fun0027 }
case 179:
                                    var7 = _closure3_slot0;
                                    var6 = var7.setSpeakingFlags;
                                    var2 = var7.localSpeakingFlags;
                                    var2 = var2[var8];
                                    var2 = var6.bind(var7)(var8, var2);
case 178:
                                    var3 = var3 + 1;
                                    var2 = var4.length;
                                    if(var3 < var2) { _fun0027_ip = 177; continue _fun0027 }
case 176:
                                    return var1;
                                }
                            };
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var2 = var3.bind(var5)(var2);
                        _fun0025_ip = 143; continue _fun0025;
case 145:
                        var2 = global;
                        var5 = var2.Error;
                        var2 = var5.prototype;
                        var3 = Object.create(var2, {constructor: {value: var5}});
                        var19 = 'Invalid transport info';
                        var20 = var3;
                        var2 = new var20[var5](var19, var18);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
case 144:
                        var3 = _closure3_slot0;
                        var5 = var3.setConnectionState;
                        var2 = _closure1_slot19;
                        var2 = var2.NO_ROUTE;
                        var2 = var5.bind(var3)(var2);
                        var2 = var3.emit;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 10;
                        var5 = var5[var1];
                        var1 = undefined;
                        var1 = var6.bind(var1)(var5);
                        var1 = var1.BaseConnectionEvent;
                        var1 = var1.Error;
                        var1 = var2.bind(var3)(var1, var4);
                        var1 = undefined;
                        return var1;
case 143:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4 = var7.bind(var1)(var4, var8, var3);
                var5['conn'] = var4;
                var _closure3_slot2 = var4;
                var3 = var4.setSecureFramesStateUpdateCallback;
                if(!(var6 != var3)) { _fun0024_ip = 180; continue _fun0024 }
case 181:
                var7 = var4.setSecureFramesStateUpdateCallback;
                var3 = function(arg1) {
                    var5 = arg1;
                    var4 = _closure3_slot0;
                    var3 = var4.logger;
                    var2 = var3.info;
                    var1 = global;
                    var7 = var1.JSON;
                    var6 = var7.stringify;
                    var7 = var6.bind(var7)(var5);
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var1 = 'DAVE protocol state update: ';
                    var1 = var6.bind(var1)(var7);
                    var1 = var2.bind(var3)(var1);
                    var3 = var4.emit;
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.BaseConnectionEvent;
                    var2 = var2.SecureFramesUpdate;
                    var2 = var3.bind(var4)(var2, var5);
                    return var1;
                };
                var3 = var7.bind(var4)(var3);
case 180:
                var3 = var4.setDesktopSourceStatusCallback;
                if(!(var6 != var3)) { _fun0024_ip = 182; continue _fun0024 }
case 183:
                var3 = var4.setDesktopSourceStatusCallback;
                var2 = function(arg1) {
                    _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.type;
                        var2 = 'videohook_start';
                        if(!(var2 !== var3)) { _fun0029_ip = 119; continue _fun0029 }
case 184:
                        var3 = var1.type;
                        var2 = 'videohook_stop';
                        if(!(var2 !== var3)) { _fun0029_ip = 185; continue _fun0029 }
case 186:
                        var3 = var1.type;
                        var2 = 'videohook_initialize';
                        if(!(var2 !== var3)) { _fun0029_ip = 187; continue _fun0029 }
case 188:
                        var3 = var1.type;
                        var2 = 'screenshare_finish';
                        if(!(var2 !== var3)) { _fun0029_ip = 189; continue _fun0029 }
case 190:
                        var3 = var1.type;
                        var2 = 'video_state';
                        if(!(var2 !== var3)) { _fun0029_ip = 16; continue _fun0029 }
case 191:
                        var4 = var1.type;
                        var3 = var4.startsWith;
                        var2 = 'soundshare_';
                        var2 = var3.bind(var4)(var2);
                        if(!var2) { _fun0029_ip = 192; continue _fun0029 }
case 148:
                        var4 = _closure3_slot0;
                        var3 = var4.emit;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 10;
                        var5 = var5[var2];
                        var2 = undefined;
                        var2 = var6.bind(var2)(var5);
                        var2 = var2.BaseConnectionEvent;
                        var2 = var2.SoundshareTrace;
                        var2 = var3.bind(var4)(var2, var1);
                        _fun0029_ip = 192; continue _fun0029;
case 16:
                        var5 = _closure3_slot0;
                        var4 = var5.emit;
                        var6 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 10;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var6.bind(var2)(var3);
                        var2 = var2.BaseConnectionEvent;
                        var3 = var2.VideoState;
                        var2 = var1.state;
                        var2 = var4.bind(var5)(var3, var2);
                        _fun0029_ip = 192; continue _fun0029;
case 189:
                        var30 = _closure3_slot0;
                        var29 = var30.emit;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 10;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var2 = var2.BaseConnectionEvent;
                        var28 = var2.ScreenshareFinish;
                        var27 = var1.screenshareFrames;
                        var26 = var1.videohookFrames;
                        var25 = var1.hybridDxgiFrames;
                        var24 = var1.hybridGdiFrames;
                        var23 = var1.hybridVideohookFrames;
                        var22 = var1.hybridGraphicsCaptureFrames;
                        var21 = var1.hybridCaptureMethodSwitches;
                        var20 = var1.hybridGdiBitBltFrames;
                        var19 = var1.hybridGdiPrintWindowFrames;
                        var18 = var1.hybridGraphicsCaptureFramesUnique;
                        var17 = var1.hybridDxgiFramesUnique;
                        var16 = var1.hybridVideohookFramesUnique;
                        var15 = var1.hybridGdiBitBltFramesUnique;
                        var14 = var1.hybridGdiPrintWindowFramesUnique;
                        var13 = var1.skipHistoryJson;
                        var12 = var1.quartzFrames;
                        var11 = var1.desktopCapturerType;
                        var2 = null;
                        if(!(var2 == var11)) { _fun0029_ip = 193; continue _fun0029 }
case 194:
                        var11 = var1.desktop_capturer_type;
case 193:
                        var39 = var1.activity;
                        var38 = var1.goLiveCameraFrames;
                        var37 = var1.screenCaptureKitFrames;
                        var36 = var1.hdrFramesCapable;
                        var35 = var1.hdrFrames;
                        var34 = var1.targetWindowElevated;
                        var33 = var1.pipewireFrames;
                        var32 = var1.x11Frames;
                        var31 = var1.videohookBackend;
                        var58 = var30;
                        var57 = var28;
                        var56 = var27;
                        var55 = var26;
                        var54 = var25;
                        var53 = var24;
                        var52 = var23;
                        var51 = var22;
                        var50 = var21;
                        var49 = var20;
                        var48 = var19;
                        var47 = var18;
                        var46 = var17;
                        var45 = var16;
                        var44 = var15;
                        var43 = var14;
                        var42 = var13;
                        var41 = var12;
                        var40 = var11;
                        var2 = var58[var29](var57, var56, var55, var54, var53, var52, var51, var50, var49, var48, var47, var46, var45, var44, var43, var42, var41, var40, var39, var38, var37, var36, var35, var34, var33, var32, var31, var30);
                        _fun0029_ip = 192; continue _fun0029;
case 187:
                        var9 = _closure3_slot0;
                        var8 = var9.emit;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 10;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var2 = var2.BaseConnectionEvent;
                        var57 = var2.VideoHookInitialize;
                        var56 = var1.backend;
                        var55 = var1.format;
                        var54 = var1.framebufferFormat;
                        var53 = var1.sampleCount;
                        var52 = var1.success;
                        var51 = var1.reinitialization;
                        var58 = var9;
                        var1 = var58[var8](var57, var56, var55, var54, var53, var52, var51, var50);
                        _fun0029_ip = 192; continue _fun0029;
case 185:
                        var3 = _closure3_slot0;
                        var2 = var3.emit;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 10;
                        var4 = var4[var1];
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4);
                        var1 = var1.BaseConnectionEvent;
                        var1 = var1.VideoHookStop;
                        var1 = var2.bind(var3)(var1);
                        _fun0029_ip = 192; continue _fun0029;
case 119:
                        var3 = _closure3_slot0;
                        var2 = var3.emit;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 10;
                        var4 = var4[var1];
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4);
                        var1 = var1.BaseConnectionEvent;
                        var1 = var1.VideoHookStart;
                        var1 = var2.bind(var3)(var1);
case 192:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
case 182:
                var4 = var5.on;
                var3 = var5.handleNewListenerNative;
                var2 = 'newListener';
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(91);
        var2[0] = var1;
        var1 = {};
        var6 = 'destroy';
        var1['key'] = var6;
        var6 = function value() {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var5 = arguments[0];
                var6 = this;
                var _closure3_slot0 = var6;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0030_ip = 29; continue _fun0030 }
case 195:
                var5 = false;
case 29:
                var4 = var6.conn;
                var3 = var4.destroy;
                var3 = var3.bind(var4)(var5);
                var3 = global;
                var5 = var3.Object;
                var4 = var5.keys;
                var3 = var6.localSpeakingFlags;
                var5 = var4.bind(var5)(var3);
                var4 = var5.filter;
                var3 = function(arg1) {
                    var1 = _closure3_slot0;
                    var2 = var1.userId;
                    var1 = arg1;
                    var1 = var1 !== var2;
                    return var1;
                };
                var5 = var4.bind(var5)(var3);
                var4 = var5.forEach;
                var3 = function(arg1) {
                    var6 = arg1;
                    var5 = _closure3_slot0;
                    var4 = var5.emit;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var3);
                    var2 = var2.BaseConnectionEvent;
                    var11 = var2.Speaking;
                    var1 = _closure1_slot22;
                    var9 = var1.NONE;
                    var1 = var5.remoteAudioSSRCs;
                    var8 = var1[var6];
                    var12 = var5;
                    var10 = var6;
                    var1 = var12[var4](var11, var10, var9, var8, var7);
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var4 = var6.setConnectionState;
                var3 = _closure1_slot19;
                var3 = var3.DISCONNECTED;
                var3 = var4.bind(var6)(var3);
                var10 = _closure2_slot0;
                var4 = function _superPropGet(arg1, arg2, arg3, arg4) {
                    _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                        var5 = arg1;
                        var7 = arg3;
                        var _closure4_slot0 = var7;
                        var6 = _closure1_slot8;
                        var4 = _closure1_slot7;
                        var1 = 1;
                        var3 = 3;
                        var8 = var1 & var3;
                        var1 = var5;
                        if(!var8) { _fun0031_ip = 62; continue _fun0031 }
case 186:
                        var1 = var5.prototype;
case 62:
                        var5 = undefined;
                        var4 = var4.bind(var5)(var1);
                        var1 = 'destroy';
                        var5 = var6.bind(var5)(var4, var1, var7);
                        var _closure4_slot1 = var5;
                        var1 = 2;
                        var3 = var1 & var3;
                        var1 = var5;
                        if(!var3) { _fun0031_ip = 196; continue _fun0031 }
case 197:
                        var4 = 'function';
                        var3 = typeof var5;
                        var1 = var5;
                        if(!(var4 === var3)) { _fun0031_ip = 196; continue _fun0031 }
case 198:
                        var1 = function(arg1) {
                            var4 = _closure4_slot1;
                            var3 = var4.apply;
                            var2 = _closure4_slot0;
                            var1 = arg1;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        };
case 196:
                        return var1;
                    }
                };
                var9 = 'destroy';
                var7 = 3;
                var11 = undefined;
                var8 = var6;
                var3 = var11[var4](var10, var9, var8, var7, var6);
                var2 = new Array(0);
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'setCodecs';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var7 = arg2;
                var2 = this;
                var1 = var2.currentVideoCodec;
                var2['currentVideoCodec'] = var7;
                if(!(var1 !== var7)) { _fun0032_ip = 41; continue _fun0032 }
case 64:
                var3 = var2.lastDesktopEncodingOptions;
                var1 = null;
                if(!(var1 != var3)) { _fun0032_ip = 41; continue _fun0032 }
case 71:
                var1 = var2.lastDesktopEncodingOptions;
                var5 = var1.width;
                var4 = var1.height;
                var3 = var1.framerate;
                var1 = var2.setDesktopEncodingOptions;
                var1 = var1.bind(var2)(var5, var4, var3);
case 41:
                var4 = var2.conn;
                var3 = var4.setTransportOptions;
                var6 = var2.getCodecOptions;
                var5 = arg1;
                var1 = arg3;
                var1 = var6.bind(var2)(var5, var7, var1);
                var1 = var3.bind(var4)(var1);
                var1 = var2.videoEncoderFallbackPending;
                if(!var1) { _fun0032_ip = 52; continue _fun0032 }
case 42:
                var1 = false;
                var2['videoEncoderFallbackPending'] = var1;
case 52:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'getStats';
        var1['key'] = var6;
        var6 = function value() {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var4 = var2.connectionState;
                var3 = _closure1_slot19;
                var3 = var3.DISCONNECTED;
                if(!(var4 !== var3)) { _fun0033_ip = 199; continue _fun0033 }
case 99:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 16;
                var2 = var8[var2];
                var6 = undefined;
                var5 = var7.bind(var6)(var2);
                var4 = var5.timeout;
                var2 = global;
                var9 = var2.Promise;
                var2 = var9.prototype;
                var3 = Object.create(var2, {constructor: {value: var9}});
                var11 = function(arg1) {
                    _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var3 = _closure3_slot0;
                        var3 = var3.conn;
                        var3 = var3.getFilteredStats;
                        var4 = null;
                        if(!(var4 == var3)) { _fun0034_ip = 199; continue _fun0034 }
case 71:
                        var3 = _closure3_slot0;
                        var3 = var3.conn;
                        var3 = var3.getStats;
                        if(!(var4 == var3)) { _fun0034_ip = 200; continue _fun0034 }
case 43:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 9;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var3 = var4.getVoiceEngine;
                        var5 = var3.bind(var4)();
                        var4 = var5.getStats;
                        var3 = function(arg1) {
                            var3 = _closure4_slot0;
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 17;
                            var1 = var2[var1];
                            var2 = undefined;
                            var7 = var4.bind(var2)(var1);
                            var1 = _closure3_slot0;
                            var11 = var1.mediaEngineConnectionId;
                            var9 = var1.remoteVideoSinkWants;
                            var8 = var1.localVideoSinkWants;
                            var10 = arg1;
                            var12 = undefined;
                            var1 = var12[var7](var11, var10, var9, var8, var7);
                            var1 = var3.bind(var2)(var1);
                            return var1;
                        };
                        var3 = var4.bind(var5)(var3);
                        _fun0034_ip = 201; continue _fun0034;
case 200:
                        var3 = _closure3_slot0;
                        var5 = var3.conn;
                        var4 = var5.getStats;
                        var3 = function(arg1) {
                            var3 = _closure4_slot0;
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 17;
                            var1 = var2[var1];
                            var2 = undefined;
                            var7 = var4.bind(var2)(var1);
                            var1 = _closure3_slot0;
                            var11 = var1.mediaEngineConnectionId;
                            var9 = var1.remoteVideoSinkWants;
                            var8 = var1.localVideoSinkWants;
                            var10 = arg1;
                            var12 = undefined;
                            var1 = var12[var7](var11, var10, var9, var8, var7);
                            var1 = var3.bind(var2)(var1);
                            return var1;
                        };
                        var3 = var4.bind(var5)(var3);
                        _fun0034_ip = 201; continue _fun0034;
case 199:
                        var2 = _closure3_slot0;
                        var4 = var2.conn;
                        var3 = var4.getFilteredStats;
                        var2 = _closure1_slot10;
                        var2 = var2.ALL;
                        var1 = function(arg1) {
                            var3 = _closure4_slot0;
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 17;
                            var1 = var2[var1];
                            var2 = undefined;
                            var7 = var4.bind(var2)(var1);
                            var1 = _closure3_slot0;
                            var11 = var1.mediaEngineConnectionId;
                            var9 = var1.remoteVideoSinkWants;
                            var8 = var1.localVideoSinkWants;
                            var10 = arg1;
                            var12 = undefined;
                            var1 = var12[var7](var11, var10, var9, var8, var7);
                            var1 = var3.bind(var2)(var1);
                            return var1;
                        };
                        var1 = var3.bind(var4)(var2, var1);
case 201:
                        var1 = undefined;
                        return var1;
                    }
                };
                var12 = var3;
                var2 = new var12[var9](var11, var10);
                var3 = var2 instanceof Object ? var2 : var3;
                var2 = 18;
                var2 = var8[var2];
                var2 = var7.bind(var6)(var2);
                var2 = var2.STATS_INTERVAL;
                var3 = var4.bind(var5)(var3, var2);
                var2 = var3.catch;
                var1 = function(arg1) {
                    _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                        var2 = arg1;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 16;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var3 = var3.TimeoutError;
                        var3 = var2 instanceof var3;
                        if(var3) { _fun0035_ip = 202; continue _fun0035 }
case 203:
                        throw var2;
case 202:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                _fun0033_ip = 204; continue _fun0033;
case 199:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.resolve;
                var2 = null;
                var1 = var3.bind(var4)(var2);
case 204:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'createUser';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var4 = arg1;
                var13 = arg2;
                var8 = arg3;
                var3 = this;
                var1 = var3.remoteAudioSSRCs;
                var7 = var1[var4];
                var1 = var3.remoteVideoSSRCs;
                var10 = var1[var4];
                var1 = null;
                if(!(var1 != var7)) { _fun0036_ip = 205; continue _fun0036 }
case 66:
                var2 = 0;
                if(!(var2 === var13)) { _fun0036_ip = 205; continue _fun0036 }
case 62:
                var6 = var3.logger;
                var5 = var6.info;
                var2 = global;
                var2 = var2.HermesInternal;
                var11 = var2.concat;
                var9 = 'Ignoring attempt to recreate user ';
                var2 = ' with 0 audio SSRC';
                var2 = var11.bind(var9)(var4, var2);
                var2 = var5.bind(var6)(var2);
                _fun0036_ip = 206; continue _fun0036;
case 205:
                var2 = undefined;
                if(!(var2 === var10)) { _fun0036_ip = 207; continue _fun0036 }
case 208:
                var9 = new Array(0);
                _fun0036_ip = 199; continue _fun0036;
case 207:
                var6 = new Array(0);
                var16 = 0;
                var18 = var6;
                var17 = var10;
                var5 = arraySpread(var18, var17, var16);
                var5 = var6.sort;
                var9 = var5.bind(var6)();
case 199:
                if(!(var2 !== var8)) { _fun0036_ip = 209; continue _fun0036 }
case 210:
                var6 = new Array(0);
                var16 = 0;
                var18 = var6;
                var17 = var8;
                var5 = arraySpread(var18, var17, var16);
                var5 = var6.sort;
                var8 = var5.bind(var6)();
                _fun0036_ip = 211; continue _fun0036;
case 209:
                var5 = var9;
                if(!(var1 == var5)) { _fun0036_ip = 212; continue _fun0036 }
case 213:
                var5 = new Array(0);
case 212:
                var8 = var5;
case 211:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 19;
                var6 = var11[var6];
                var6 = var10.bind(var2)(var6);
                var6 = var6.bind(var2)(var9, var8);
                var6 = !var6;
                var9 = var3.remoteAudioSSRCs;
                var9[var4] = var13;
                var9 = var3.remoteVideoSSRCs;
                var11 = var8;
                var8 = var11;
                if(!(var1 == var8)) { _fun0036_ip = 214; continue _fun0036 }
case 215:
                var8 = new Array(0);
case 214:
                var9[var4] = var8;
                var8 = var3.userId;
                if(!(var8 !== var4)) { _fun0036_ip = 206; continue _fun0036 }
case 216:
                if(!(var7 === var13)) { _fun0036_ip = 217; continue _fun0036 }
case 218:
                if(!var6) { _fun0036_ip = 206; continue _fun0036 }
case 217:
                var12 = 0;
                var8 = 0;
                if(!(var2 !== var11)) { _fun0036_ip = 219; continue _fun0036 }
case 102:
                var6 = var11.length;
                var6 = var6 > var12;
                var8 = 0;
                if(!var6) { _fun0036_ip = 219; continue _fun0036 }
case 105:
                var8 = var11[var12];
case 219:
                var7 = {};
                var7['id'] = var4;
                var7['ssrc'] = var13;
                var7['videoSsrc'] = var8;
                var7['videoSsrcs'] = var11;
                var6 = _closure1_slot38;
                var6 = var6.bind(var2)(var8);
                var7['rtxSsrc'] = var6;
                var6 = var3.getLocalMute;
                var6 = var6.bind(var3)(var4);
                var7['mute'] = var6;
                var6 = var3.getLocalVolume;
                var6 = var6.bind(var3)(var4);
                var7['volume'] = var6;
                var8 = var3.connectionState;
                var6 = _closure1_slot19;
                var6 = var6.CONNECTED;
                if(!(var8 === var6)) { _fun0036_ip = 220; continue _fun0036 }
case 101:
                var8 = var3.logger;
                var6 = var8.info;
                var9 = var1 == var11;
                var2 = undefined;
                if(var9) { _fun0036_ip = 221; continue _fun0036 }
case 222:
                var10 = var11.join;
                var9 = ',';
                var2 = var10.bind(var11)(var9);
case 221:
                var9 = var1 != var2;
                var12 = 0;
                if(!var9) { _fun0036_ip = 223; continue _fun0036 }
case 224:
                var12 = var2;
case 223:
                var2 = global;
                var2 = var2.HermesInternal;
                var11 = var2.concat;
                var19 = 'Creating user: ';
                var17 = ' with audio SSRC: ';
                var15 = ' and video SSRCs: ';
                var18 = var4;
                var16 = var13;
                var14 = var12;
                var2 = var19[var11](var18, var17, var16, var15, var14, var13);
                var2 = var6.bind(var8)(var2);
                var6 = var3.mergeUsers;
                var2 = new Array(1);
                var2[0] = var7;
                var2 = var6.bind(var3)(var2);
case 220:
                var2 = var3.localPans;
                var2 = var2[var4];
                if(!(var1 != var2)) { _fun0036_ip = 225; continue _fun0036 }
case 226:
                var7 = var3.setLocalPan;
                var6 = var2.left;
                var2 = var2.right;
                var2 = var7.bind(var3)(var4, var6, var2);
case 225:
                var2 = var3.localSpeakingFlags;
                var2 = var2[var4];
                var1 = var1 != var2;
                if(!var1) { _fun0036_ip = 227; continue _fun0036 }
case 228:
                var5 = _closure1_slot22;
                var5 = var5.NONE;
                var1 = var2 !== var5;
case 227:
                if(!var1) { _fun0036_ip = 206; continue _fun0036 }
case 229:
                var1 = var3.setSpeakingFlags;
                var1 = var1.bind(var3)(var4, var2);
case 206:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'destroyUser';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                var2 = arg1;
                var1 = this;
                var3 = var1.remoteAudioSSRCs;
                var4 = var3[var2];
                var3 = null;
                if(!(var3 != var4)) { _fun0037_ip = 230; continue _fun0037 }
case 64:
                var4 = var1.conn;
                var3 = var4.destroyUser;
                var3 = var3.bind(var4)(var2);
                var3 = var1.remoteAudioSSRCs;
                var3 = delete var3[var2];
                var1 = var1.remoteVideoSSRCs;
                var1 = delete var1[var2];
case 230:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'setSelfMute';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var5 = arg1;
            var4 = this;
            var4['selfMute'] = var5;
            var2 = var4.conn;
            var1 = var2.setSelfMute;
            var1 = var1.bind(var2)(var5);
            var3 = var4.emit;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var6.bind(var1)(var2);
            var2 = var2.BaseConnectionEvent;
            var2 = var2.Mute;
            var2 = var3.bind(var4)(var2, var5);
            return var1;
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'getSelfMute';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.selfMute;
            return var1;
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'getSelfDeaf';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.selfDeaf;
            return var1;
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'setSelfDeaf';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var5 = arg1;
            var4 = this;
            var4['selfDeaf'] = var5;
            var2 = var4.conn;
            var1 = var2.setSelfDeafen;
            var1 = var1.bind(var2)(var5);
            var3 = var4.emit;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var6.bind(var1)(var2);
            var2 = var2.BaseConnectionEvent;
            var2 = var2.Deafen;
            var2 = var3.bind(var4)(var2, var5);
            return var1;
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'setSoundshareSource';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                var4 = arg1;
                var1 = this;
                var2 = var1.soundshareId;
                if(!(var2 === var4)) { _fun0038_ip = 231; continue _fun0038 }
case 232:
                var2 = var1.soundshareSentSpeakingEvent;
                if(var2) { _fun0038_ip = 233; continue _fun0038 }
case 231:
                var3 = var1.context;
                var2 = _closure1_slot21;
                var2 = var2.STREAM;
                if(!(var3 === var2)) { _fun0038_ip = 233; continue _fun0038 }
case 234:
                var1['soundshareId'] = var4;
                var2 = false;
                var1['soundshareSentSpeakingEvent'] = var2;
                var2 = null;
                if(!(var2 === var4)) { _fun0038_ip = 41; continue _fun0038 }
case 30:
                var4 = 0;
case 41:
                var3 = var1.conn;
                var2 = var3.setTransportOptions;
                var1 = {};
                var1['soundsharePid'] = var4;
                var4 = true;
                var1['soundshareEventDriven'] = var4;
                var4 = arg2;
                var1['soundshareLoopback'] = var4;
                var1 = var2.bind(var3)(var1);
case 233:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'setLocalMute';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var6 = arg1;
            var5 = arg2;
            var4 = this;
            var1 = var4.localMutes;
            var1[var6] = var5;
            var2 = var4.conn;
            var1 = var2.setLocalMute;
            var1 = var1.bind(var2)(var6, var5);
            var3 = var4.emit;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var7.bind(var1)(var2);
            var2 = var2.BaseConnectionEvent;
            var2 = var2.LocalMute;
            var2 = var3.bind(var4)(var2, var6, var5);
            return var1;
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'setUserPosition';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                var1 = this;
                var5 = var1.conn;
                var4 = var5.setUserPosition;
                var1 = null;
                if(!(var1 != var4)) { _fun0039_ip = 186; continue _fun0039 }
case 184:
                var3 = var4.call;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var5, var2, var1);
case 186:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'fastUdpReconnect';
        var1['key'] = var6;
        var6 = function value() {
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                var1 = this;
                var2 = var1.conn;
                var3 = var2.fastUdpReconnect;
                var2 = null;
                if(!(var2 != var3)) { _fun0040_ip = 28; continue _fun0040 }
case 184:
                var3 = var1.numFastUdpReconnects;
                var2 = 1;
                var2 = var3 + var2;
                var1['numFastUdpReconnects'] = var2;
                var2 = var1.conn;
                var1 = var2.fastUdpReconnect;
                var1 = var1.bind(var2)();
case 28:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[13] = var1;
        var1 = {};
        var6 = 'getNumFastUdpReconnects';
        var1['key'] = var6;
        var6 = function value() {
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                var2 = this;
                var1 = var2.conn;
                var3 = var1.fastUdpReconnect;
                var1 = null;
                var3 = var1 != var3;
                if(!var3) { _fun0041_ip = 3; continue _fun0041 }
case 94:
                var1 = var2.numFastUdpReconnects;
case 3:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[14] = var1;
        var1 = {};
        var6 = 'wasRemoteDisconnected';
        var1['key'] = var6;
        var6 = function value() {
            _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                var1 = this;
                var3 = var1.conn;
                var2 = var3.wasRemoteDisconnected;
                var1 = null;
                if(!(var1 != var2)) { _fun0042_ip = 69; continue _fun0042 }
case 184:
                var1 = var2.call;
                var1 = var1.bind(var2)(var3);
case 69:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[15] = var1;
        var1 = {};
        var6 = 'setLocalVideoDisabled';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var6 = arg1;
            var5 = arg2;
            var4 = this;
            var1 = var4.disabledLocalVideos;
            var1[var6] = var5;
            var3 = var4.emit;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var7.bind(var1)(var2);
            var2 = var2.BaseConnectionEvent;
            var2 = var2.LocalVideoDisabled;
            var2 = var3.bind(var4)(var2, var6, var5);
            return var1;
        };
        var1['value'] = var6;
        var2[16] = var1;
        var1 = {};
        var6 = 'setMinimumJitterBufferLevel';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['minimumJitterBufferLevel'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[17] = var1;
        var1 = {};
        var6 = 'setPostponeDecodeLevel';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['postponeDecodeLevel'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[18] = var1;
        var1 = {};
        var6 = 'setClipRecordUser';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                var7 = arg2;
                var1 = this;
                var2 = var1.destroyed;
                if(var2) { _fun0043_ip = 76; continue _fun0043 }
case 235:
                var6 = 'soundboardAudio';
                var2 = 'soundboard';
                if(!(var2 !== var7)) { _fun0043_ip = 49; continue _fun0043 }
case 48:
                var3 = var1.context;
                var2 = _closure1_slot21;
                var2 = var2.STREAM;
                var4 = 'user';
                if(!(var3 === var2)) { _fun0043_ip = 230; continue _fun0043 }
case 4:
                var4 = 'application';
case 230:
                var3 = var4.concat;
                var2 = 'Video';
                var5 = 'audio';
                if(!(var5 === var7)) { _fun0043_ip = 236; continue _fun0043 }
case 175:
                var2 = 'Audio';
case 236:
                var6 = var3.bind(var4)(var2);
case 49:
                var5 = var1.conn;
                var4 = var5.setClipRecordUser;
                var1 = null;
                if(!(var1 != var4)) { _fun0043_ip = 76; continue _fun0043 }
case 208:
                var3 = var4.call;
                var10 = arg1;
                var8 = arg3;
                var12 = var4;
                var11 = var5;
                var9 = var6;
                var1 = var12[var3](var11, var10, var9, var8, var7);
case 76:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[19] = var1;
        var1 = {};
        var6 = 'setClipsKeyFrameInterval';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                var4 = this;
                var2 = var4.context;
                var1 = _closure1_slot21;
                var1 = var1.STREAM;
                if(!(var2 === var1)) { _fun0044_ip = 49; continue _fun0044 }
case 231:
                var1 = arg1;
                var4['clipsKeyFrameInterval'] = var1;
                var3 = var4.conn;
                var2 = var3.setTransportOptions;
                var1 = {};
                var5 = var4.getKeyFrameInterval;
                var5 = var5.bind(var4)();
                var1['keyframeInterval'] = var5;
                var5 = var4.keyframeInterval;
                var4 = 0;
                var4 = var5 > var4;
                var1['alwaysSendVideo'] = var4;
                var1 = var2.bind(var3)(var1);
case 49:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[20] = var1;
        var1 = {};
        var6 = 'setViewerSideClip';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                var1 = this;
                var3 = var1.context;
                var2 = _closure1_slot21;
                var2 = var2.STREAM;
                if(!(var3 === var2)) { _fun0045_ip = 43; continue _fun0045 }
case 231:
                var3 = var1.conn;
                var2 = var3.setTransportOptions;
                var1 = {};
                var4 = arg1;
                var1['enableViewerSideClip'] = var4;
                var1 = var2.bind(var3)(var1);
case 43:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[21] = var1;
        var1 = {};
        var6 = 'setRemoteAudioHistory';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1.conn;
            var2 = var3.setTransportOptions;
            var1 = {};
            var4 = arg1;
            var1['remoteAudioHistoryMs'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[22] = var1;
        var1 = {};
        var6 = 'setQualityDecoupling';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                var1 = this;
                var3 = var1.context;
                var2 = _closure1_slot21;
                var2 = var2.STREAM;
                if(!(var3 === var2)) { _fun0046_ip = 43; continue _fun0046 }
case 231:
                var3 = var1.conn;
                var2 = var3.setTransportOptions;
                var1 = {};
                var4 = arg1;
                var1['enableQualityDecoupling'] = var4;
                var1 = var2.bind(var3)(var1);
case 43:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[23] = var1;
        var1 = {};
        var6 = 'getLocalVolume';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
                var3 = this;
                var2 = var3.localVolumes;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                if(!(var1 == var2)) { _fun0047_ip = 188; continue _fun0047 }
case 64:
                var5 = var3.context;
                var3 = _closure1_slot21;
                var3 = var3.DEFAULT;
                if(!(var5 !== var3)) { _fun0047_ip = 174; continue _fun0047 }
case 62:
                var3 = _closure1_slot27;
                _fun0047_ip = 43; continue _fun0047;
case 174:
                var3 = _closure1_slot26;
case 43:
                var2 = var3;
case 188:
                if(!(var1 == var2)) { _fun0047_ip = 59; continue _fun0047 }
case 7:
                var2 = _closure1_slot26;
case 59:
                var1 = _closure1_slot26;
                var1 = var2 / var1;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[24] = var1;
        var1 = {};
        var6 = 'setLocalVolume';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
                var6 = arg1;
                var5 = arg2;
                var2 = this;
                var4 = var6;
                var1 = var5;
                var3 = var2.localVolumes;
                var3[var6] = var5;
case 231: // try_start_0
                var7 = var2.conn;
                var6 = var7.setLocalVolume;
                var5 = var4;
                var3 = var2.getLocalVolume;
                var3 = var3.bind(var2)(var5);
                var3 = var6.bind(var7)(var5, var3);
case 188: // try_end0
                _fun0048_ip = 237; continue _fun0048;
case 230: // catch_target0
                CatchBlockStart(arg_register=2);
                var3 = var2.logger;
                var2 = var3.warn;
                var7 = var4;
                var6 = var1;
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var4 = 'Failed to set volume for user: ';
                var1 = ': ';
                var1 = var5.bind(var4)(var7, var1, var6);
                var1 = var2.bind(var3)(var1);
case 237:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[25] = var1;
        var1 = {};
        var6 = 'setLocalPan';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            var5 = arg1;
            var4 = arg2;
            var3 = arg3;
            var1 = this;
            var6 = var1.localPans;
            var2 = {};
            var2['left'] = var4;
            var2['right'] = var3;
            var6[var5] = var2;
            var2 = var1.conn;
            var1 = var2.setLocalPan;
            var1 = var1.bind(var2)(var5, var4, var3);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[26] = var1;
        var1 = {};
        var6 = 'isAttenuating';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.attenuationFactor;
            var1 = 1;
            var1 = var2 < var1;
            return var1;
        };
        var1['value'] = var6;
        var2[27] = var1;
        var1 = {};
        var6 = 'setAttenuation';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            var4 = this;
            var2 = 100;
            var1 = arg1;
            var1 = var2 - var1;
            var1 = var1 / var2;
            var4['attenuationFactor'] = var1;
            var1 = arg2;
            var4['attenuateWhileSpeakingSelf'] = var1;
            var1 = arg3;
            var4['attenuateWhileSpeakingOthers'] = var1;
            var3 = var4.conn;
            var2 = var3.setTransportOptions;
            var1 = var4.getAttenuationOptions;
            var1 = var1.bind(var4)();
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[28] = var1;
        var1 = {};
        var6 = 'setCanHavePriority';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
                var1 = this;
                var5 = var1.conn;
                var4 = var5.setRemoteUserCanHavePriority;
                var1 = null;
                if(!(var1 != var4)) { _fun0049_ip = 203; continue _fun0049 }
case 31:
                var3 = var4.call;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var5, var2, var1);
case 203:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[29] = var1;
        var1 = {};
        var6 = 'setBitRate';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = this;
            var2 = var3.setVoiceBitRate;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[30] = var1;
        var1 = {};
        var6 = 'setVoiceBitRate';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
                var2 = arg1;
                var1 = this;
                var3 = var1.voiceBitrate;
                if(!(var3 !== var2)) { _fun0050_ip = 191; continue _fun0050 }
case 232:
                var1['voiceBitrate'] = var2;
                var6 = var1.voiceBitrate;
                var2 = var1.soundshareActive;
                var4 = var6;
                if(!var2) { _fun0050_ip = 67; continue _fun0050 }
case 238:
                var2 = global;
                var5 = var2.Math;
                var3 = var5.max;
                var2 = _closure1_slot28;
                var4 = var3.bind(var5)(var2, var6);
case 67:
                var3 = var1.conn;
                var2 = var3.setTransportOptions;
                var1 = {};
                var1['encodingVoiceBitRate'] = var4;
                var1 = var2.bind(var3)(var1);
case 191:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[31] = var1;
        var1 = {};
        var6 = 'setCameraBitRate';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
                var4 = arg2;
                var5 = arg3;
                var1 = this;
                var8 = null;
                if(!(var8 == var5)) { _fun0051_ip = 238; continue _fun0051 }
case 235:
                if(!(var8 == var4)) { _fun0051_ip = 238; continue _fun0051 }
case 70:
                var6 = var1.videoQualityManager;
                var3 = var6.setQualityOverwrite;
                var2 = {};
                var2 = var3.bind(var6)(var2);
                _fun0051_ip = 61; continue _fun0051;
case 238:
                var6 = var1.videoQualityManager;
                var3 = var6.setQualityOverwrite;
                var2 = {};
                var7 = var4;
                if(!(var8 != var5)) { _fun0051_ip = 74; continue _fun0051 }
case 7:
                var8 = 0;
                var7 = var4;
                if(!(var5 > var8)) { _fun0051_ip = 74; continue _fun0051 }
case 35:
                var7 = var5;
case 74:
                var2['bitrateMin'] = var7;
                var2['bitrateMax'] = var4;
                var2 = var3.bind(var6)(var2);
case 61:
                var2 = var1.hasDesktopSource;
                var2 = var2.bind(var1)();
                if(var2) { _fun0051_ip = 239; continue _fun0051 }
case 84:
                var3 = var1.conn;
                var2 = var3.setTransportOptions;
                var1 = {};
                var6 = arg1;
                var1['encodingVideoBitRate'] = var6;
                var1['encodingVideoMinBitRate'] = var5;
                var1['encodingVideoMaxBitRate'] = var4;
                var1 = var2.bind(var3)(var1);
case 239:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[32] = var1;
        var1 = {};
        var6 = 'setEchoCancellation';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var5 = this;
            var1 = arg1;
            var5['echoCancellation'] = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getVoiceEngine;
            var4 = var2.bind(var3)();
            var3 = var4.setTransportOptions;
            var2 = {};
            var5 = var5.echoCancellation;
            var2['echoCancellation'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['value'] = var6;
        var2[33] = var1;
        var1 = {};
        var6 = 'setNoiseSuppression';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var5 = this;
            var1 = arg1;
            var5['noiseSuppression'] = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getVoiceEngine;
            var4 = var2.bind(var3)();
            var3 = var4.setTransportOptions;
            var2 = {};
            var5 = var5.noiseSuppression;
            var2['noiseSuppression'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['value'] = var6;
        var2[34] = var1;
        var1 = {};
        var6 = 'setAutomaticGainControl';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var5 = this;
            var1 = arg1;
            var5['automaticGainControl'] = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getVoiceEngine;
            var4 = var2.bind(var3)();
            var3 = var4.setTransportOptions;
            var2 = {};
            var6 = var5.automaticGainControl;
            var6 = var6.enabled;
            var2['automaticGainControl'] = var6;
            var5 = var5.automaticGainControl;
            var2['automaticGainControlConfig'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['value'] = var6;
        var2[35] = var1;
        var1 = {};
        var6 = 'setNoiseCancellation';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var5 = this;
            var1 = arg1;
            var5['noiseCancellation'] = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getVoiceEngine;
            var4 = var2.bind(var3)();
            var3 = var4.setTransportOptions;
            var2 = {};
            var5 = var5.noiseCancellation;
            var2['noiseCancellation'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['value'] = var6;
        var2[36] = var1;
        var1 = {};
        var6 = 'setNoiseCancellationDuringProcessing';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var5 = this;
            var1 = arg1;
            var5['noiseCancellationDuringProcessing'] = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getVoiceEngine;
            var4 = var2.bind(var3)();
            var3 = var4.setTransportOptions;
            var2 = {};
            var5 = var5.noiseCancellationDuringProcessing;
            var2['noiseCancellationDuringProcessing'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['value'] = var6;
        var2[37] = var1;
        var1 = {};
        var6 = 'setEchoReferenceMode';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var5 = this;
            var1 = arg1;
            var5['echoReferenceMode'] = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getVoiceEngine;
            var4 = var2.bind(var3)();
            var3 = var4.setTransportOptions;
            var2 = {};
            var5 = var5.echoReferenceMode;
            var2['echoReferenceMode'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['value'] = var6;
        var2[38] = var1;
        var1 = {};
        var6 = 'getNoiseCancellation';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.noiseCancellation;
            return var1;
        };
        var1['value'] = var6;
        var2[39] = var1;
        var1 = {};
        var6 = 'setQoS';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var4 = this;
            var1 = arg1;
            var4['qos'] = var1;
            var3 = var4.conn;
            var2 = var3.setTransportOptions;
            var1 = {};
            var4 = var4.qos;
            var1['qos'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[40] = var1;
        var1 = {};
        var6 = 'setSoundshareDiscardRearChannels';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1.conn;
            var2 = var3.setTransportOptions;
            var1 = {};
            var4 = arg1;
            var1['soundshareDiscardRearChannels'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[41] = var1;
        var1 = {};
        var6 = 'setInputMode';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
                var7 = arg1;
                var1 = arg2;
                var5 = this;
                var5['inputMode'] = var7;
                var2 = _closure1_slot18;
                var2 = var2.PUSH_TO_TALK;
                if(!(var2 !== var7)) { _fun0052_ip = 19; continue _fun0052 }
case 95:
                var2 = _closure1_slot18;
                var2 = var2.VOICE_ACTIVITY;
                if(!(var2 !== var7)) { _fun0052_ip = 84; continue _fun0052 }
case 5:
                var2 = global;
                var6 = var2.Error;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = 'Unknown Input Mode: ';
                var8 = var3.bind(var2)(var7);
                var3 = var6.prototype;
                var3 = Object.create(var3, {constructor: {value: var6}});
                var9 = var3;
                var2 = new var9[var6](var8, var7);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
case 84:
                var2 = var1.vadThreshold;
                var5['vadThreshold'] = var2;
                var2 = var1.vadAutoThreshold;
                var5['vadAutoThreshold'] = var2;
                var2 = var1.vadUseKrisp;
                var5['vadUseKrisp'] = var2;
                var2 = var1.vadLeading;
                var5['vadLeading'] = var2;
                var2 = var1.vadTrailing;
                var5['vadTrailing'] = var2;
                var2 = var1.vadKrispActivationThreshold;
                var5['vadKrispActivationThreshold'] = var2;
                var2 = var1.vadDuringPreProcess;
                var5['vadDuringPreProcess'] = var2;
                _fun0052_ip = 240; continue _fun0052;
case 19:
                var1 = var1.pttReleaseDelay;
                var5['pttReleaseDelay'] = var1;
case 240:
                var3 = var5.conn;
                var2 = var3.setTransportOptions;
                var1 = {};
                var6 = _closure1_slot17;
                var4 = var5.inputMode;
                var4 = var6[var4];
                var1['inputMode'] = var4;
                var4 = var5.createInputModeOptions;
                var4 = var4.bind(var5)();
                var1['inputModeOptions'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[42] = var1;
        var1 = {};
        var6 = 'setSilenceThreshold';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getVoiceEngine;
            var4 = var2.bind(var3)();
            var3 = var4.setNoInputThreshold;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['value'] = var6;
        var2[43] = var1;
        var1 = {};
        var6 = 'setForceAudioInput';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
                var6 = arguments[1];
                var5 = arguments[2];
                var1 = undefined;
                if(!(var6 === var1)) { _fun0053_ip = 32; continue _fun0053 }
case 241:
                var6 = false;
case 32:
                if(!(var5 === var1)) { _fun0053_ip = 29; continue _fun0053 }
case 195:
                var5 = false;
case 29:
                var2 = this;
                var4 = var2.conn;
                var3 = var4.setPTTActive;
                var2 = arg1;
                var2 = var3.bind(var4)(var2, var6, var5);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[44] = var1;
        var1 = {};
        var6 = 'setSpeakingFlags';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
                var4 = arg1;
                var3 = arg2;
                var2 = this;
                var1 = var2.conn;
                var1 = var1.setRemoteUserSpeakingStatus;
                var5 = null;
                if(!(var5 == var1)) { _fun0054_ip = 191; continue _fun0054 }
case 39:
                var1 = var2.conn;
                var1 = var1.setRemoteUserSpeaking;
                if(!(var5 != var1)) { _fun0054_ip = 53; continue _fun0054 }
case 202:
                var6 = var2.conn;
                var5 = var6.setRemoteUserSpeaking;
                var1 = _closure1_slot22;
                var7 = var1.VOICE;
                var7 = var3 & var7;
                var1 = var1.VOICE;
                var1 = var7 === var1;
                var1 = var5.bind(var6)(var4, var1);
                _fun0054_ip = 53; continue _fun0054;
case 191:
                var5 = var2.conn;
                var1 = var5.setRemoteUserSpeakingStatus;
                var1 = var1.bind(var5)(var4, var3);
case 53:
                var1 = var2.handleSpeakingFlags;
                var1 = var1.bind(var2)(var4, var3);
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[45] = var1;
        var1 = {};
        var6 = 'clearAllSpeaking';
        var1['key'] = var6;
        var6 = function value() {
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[46] = var1;
        var1 = {};
        var6 = 'setEncryption';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var5 = arg1;
            var1 = this;
            var4 = var1.logger;
            var3 = var4.info;
            var2 = global;
            var2 = var2.HermesInternal;
            var6 = var2.concat;
            var2 = 'Selected encryption mode: ';
            var2 = var6.bind(var2)(var5);
            var2 = var3.bind(var4)(var2);
            var3 = var1.conn;
            var2 = var3.setTransportOptions;
            var1 = {};
            var4 = {};
            var4['mode'] = var5;
            var5 = arg2;
            var4['secretKey'] = var5;
            var1['encryptionSettings'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[47] = var1;
        var1 = {};
        var6 = 'setReconnectInterval';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var4 = this;
            var1 = arg1;
            var4['reconnectInterval'] = var1;
            var3 = var4.conn;
            var2 = var3.setTransportOptions;
            var1 = {};
            var4 = var4.reconnectInterval;
            var1['reconnectInterval'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[48] = var1;
        var1 = {};
        var6 = 'setKeyframeInterval';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var4 = this;
            var1 = arg1;
            var4['keyframeInterval'] = var1;
            var3 = var4.conn;
            var2 = var3.setTransportOptions;
            var1 = {};
            var5 = var4.getKeyFrameInterval;
            var5 = var5.bind(var4)();
            var1['keyframeInterval'] = var5;
            var5 = var4.keyframeInterval;
            var4 = 0;
            var4 = var5 > var4;
            var1['alwaysSendVideo'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[49] = var1;
        var1 = {};
        var6 = 'setVideoQualityMeasurement';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var4 = this;
            var1 = arg1;
            var4['videoQualityMeasurement'] = var1;
            var3 = var4.conn;
            var2 = var3.setTransportOptions;
            var1 = {};
            var4 = var4.videoQualityMeasurement;
            var1['videoQualityMeasurement'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[50] = var1;
        var1 = {};
        var6 = 'setVideoEncoderExperiments';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var4 = this;
            var1 = arg1;
            var4['videoEncoderExperiments'] = var1;
            var3 = var4.conn;
            var2 = var3.setTransportOptions;
            var1 = {};
            var4 = var4.videoEncoderExperiments;
            var1['videoEncoderExperiments'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[51] = var1;
        var1 = {};
        var6 = 'setAudioVideoOverridesTransport';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
                var6 = arg1;
                var4 = this;
                var2 = var6.overrideDeniedVideoCodecs;
                var1 = null;
                var2 = var1 != var2;
                if(!var2) { _fun0055_ip = 186; continue _fun0055 }
case 31:
                var7 = var6.overrideDeniedVideoCodecs;
                var5 = var4.lastOverrideCodecDenylist;
                var2 = var7 !== var5;
case 186:
                var5 = var6.overrideDeniedVideoEncoders;
                var5 = var1 != var5;
                if(!var5) { _fun0055_ip = 59; continue _fun0055 }
case 65:
                var8 = var6.overrideDeniedVideoEncoders;
                var7 = var4.lastOverrideEncoderDenylist;
                var5 = var8 !== var7;
case 59:
                var7 = var6.captureOverrides;
                var7 = var1 != var7;
                if(!var7) { _fun0055_ip = 205; continue _fun0055 }
case 242:
                var9 = var6.captureOverrides;
                var8 = var4.lastCaptureOverrides;
                var7 = var9 !== var8;
case 205:
                var10 = {};
                if(!var2) { _fun0055_ip = 243; continue _fun0055 }
case 244:
                var8 = var6.overrideDeniedVideoCodecs;
                var10['overrideDeniedVideoCodecs'] = var8;
case 243:
                if(!var5) { _fun0055_ip = 245; continue _fun0055 }
case 246:
                var8 = var6.overrideDeniedVideoEncoders;
                var10['overrideDeniedVideoEncoders'] = var8;
case 245:
                if(!var7) { _fun0055_ip = 147; continue _fun0055 }
case 247:
                var8 = var6.captureOverrides;
                var10['captureOverrides'] = var8;
case 147:
                var8 = var2;
                if(var2) { _fun0055_ip = 248; continue _fun0055 }
case 249:
                var8 = var5;
case 248:
                if(var8) { _fun0055_ip = 250; continue _fun0055 }
case 251:
                var8 = var7;
case 250:
                if(!var8) { _fun0055_ip = 16; continue _fun0055 }
case 252:
                var9 = var4.conn;
                var8 = var9.setTransportOptions;
                var8 = var8.bind(var9)(var10);
case 16:
                if(!var2) { _fun0055_ip = 253; continue _fun0055 }
case 254:
                var8 = var6.overrideDeniedVideoCodecs;
                var4['lastOverrideCodecDenylist'] = var8;
case 253:
                if(!var5) { _fun0055_ip = 255; continue _fun0055 }
case 256:
                var8 = var6.overrideDeniedVideoEncoders;
                var4['lastOverrideEncoderDenylist'] = var8;
case 255:
                if(!var7) { _fun0055_ip = 257; continue _fun0055 }
case 258:
                var6 = var6.captureOverrides;
                var4['lastCaptureOverrides'] = var6;
case 257:
                var6 = var2;
                if(var2) { _fun0055_ip = 57; continue _fun0055 }
case 55:
                var6 = var5;
case 57:
                if(!var6) { _fun0055_ip = 259; continue _fun0055 }
case 149:
                var6 = false;
                var4['videoEncoderFallbackPending'] = var6;
                var7 = var4.videoDecoderFallbackSent;
                var6 = var7.clear;
                var6 = var6.bind(var7)();
case 259:
                if(var2) { _fun0055_ip = 217; continue _fun0055 }
case 218:
                if(!var5) { _fun0055_ip = 260; continue _fun0055 }
case 217:
                var5 = var4.initialCodecs;
                var5 = var5.length;
                var8 = 0;
                if(!(var5 > var8)) { _fun0055_ip = 260; continue _fun0055 }
case 25:
                var5 = var4.lastOverrideCodecDenylist;
                var5 = var5.length;
                var5 = var5 > var8;
                var1 = null;
                if(!var5) { _fun0055_ip = 137; continue _fun0055 }
case 81:
                var5 = global;
                var7 = var5.Set;
                var9 = var4.lastOverrideCodecDenylist;
                var6 = var9.split;
                var5 = ',';
                var9 = var6.bind(var9)(var5);
                var6 = var9.map;
                var5 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.trim;
                    var2 = var1.bind(var2)();
                    var1 = var2.toUpperCase;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var14 = var6.bind(var9)(var5);
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var15 = var6;
                var5 = new var15[var7](var14, var13);
                var1 = var5 instanceof Object ? var5 : var6;
case 137:
                var _closure3_slot0 = var1;
                var6 = var4.initialCodecs;
                var5 = var6.map;
                var1 = function(arg1) {
                    var1 = {};
                    var3 = arg1;
                    var4 = var1;
                    var2 = copyDataProperties(var4, var3);
                    return var1;
                };
                var6 = var5.bind(var6)(var1);
                var5 = var6.filter;
                var1 = function(arg1) {
                    _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
case 0:
                        var2 = arg1;
                        var3 = var2.type;
                        var1 = 'video';
                        var1 = var1 !== var3;
                        if(var1) { _fun0056_ip = 99; continue _fun0056 }
case 70:
                        var4 = _closure3_slot0;
                        var3 = null;
                        var1 = var3 == var4;
case 99:
                        if(var1) { _fun0056_ip = 261; continue _fun0056 }
case 95:
                        var4 = var2.name;
                        var3 = 'VP8';
                        var1 = var3 === var4;
case 261:
                        if(var1) { _fun0056_ip = 173; continue _fun0056 }
case 46:
                        var4 = var2.name;
                        var3 = 'VP9';
                        var1 = var3 === var4;
case 173:
                        if(var1) { _fun0056_ip = 262; continue _fun0056 }
case 30:
                        var4 = _closure3_slot0;
                        var3 = var4.has;
                        var2 = var2.name;
                        var2 = var3.bind(var4)(var2);
                        var1 = !var2;
case 262:
                        return var1;
                    }
                };
                var5 = var5.bind(var6)(var1);
                var1 = global;
                var9 = var1.Set;
                var10 = var4.codecs;
                var7 = var10.filter;
                var6 = function(arg1) {
                    _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
                        var2 = arg1;
                        var3 = var2.type;
                        var1 = 'video';
                        var1 = var1 === var3;
                        if(!var1) { _fun0057_ip = 231; continue _fun0057 }
case 70:
                        var1 = var2.encode;
case 231:
                        return var1;
                    }
                };
                var10 = var7.bind(var10)(var6);
                var7 = var10.map;
                var6 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.name;
                    return var1;
                };
                var14 = var7.bind(var10)(var6);
                var7 = var9.prototype;
                var7 = Object.create(var7, {constructor: {value: var9}});
                var15 = var7;
                var6 = new var15[var9](var14, var13);
                var13 = var6 instanceof Object ? var6 : var7;
                var10 = var1.Set;
                var9 = var5.filter;
                var7 = function(arg1) {
                    _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
case 0:
                        var2 = arg1;
                        var3 = var2.type;
                        var1 = 'video';
                        var1 = var1 === var3;
                        if(!var1) { _fun0058_ip = 231; continue _fun0058 }
case 70:
                        var1 = var2.encode;
case 231:
                        return var1;
                    }
                };
                var11 = var9.bind(var5)(var7);
                var9 = var11.map;
                var7 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.name;
                    return var1;
                };
                var14 = var9.bind(var11)(var7);
                var9 = var10.prototype;
                var9 = Object.create(var9, {constructor: {value: var10}});
                var15 = var9;
                var7 = new var15[var10](var14, var13);
                var7 = var7 instanceof Object ? var7 : var9;
                var _closure3_slot1 = var7;
                var7 = new Array(0);
                var14 = var7;
                var12 = 0;
                var6 = arraySpread(var14, var13, var12);
                var6 = var7.some;
                var3 = function(arg1) {
                    var3 = _closure3_slot1;
                    var2 = var3.has;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    return var1;
                };
                var3 = var6.bind(var7)(var3);
                var4['codecs'] = var5;
                if(!var2) { _fun0055_ip = 263; continue _fun0055 }
case 264:
                var2 = var3;
case 263:
                if(!var2) { _fun0055_ip = 265; continue _fun0055 }
case 206:
                var2 = var1.performance;
                var1 = var2.now;
                var1 = var1.bind(var2)();
                var4['overrideCodecResetAt'] = var1;
case 265:
                var3 = var4.emit;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.BaseConnectionEvent;
                var2 = var1.VideoEncoderFallback;
                var1 = var4.codecs;
                var1 = var3.bind(var4)(var2, var1);
case 260:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[52] = var1;
        var1 = {};
        var6 = 'setVideoBroadcast';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
case 0:
                var1 = arg1;
                var2 = this;
                var3 = var2.selfVideo;
                if(!(var3 !== var1)) { _fun0059_ip = 71; continue _fun0059 }
case 232:
                var2['selfVideo'] = var1;
                var1 = var2.applyVideoTransportOptions;
                var1 = var1.bind(var2)();
case 71:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[53] = var1;
        var1 = {};
        var6 = 'setGoLiveSource';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
case 0:
                var1 = arg1;
                var5 = this;
                var2 = var1.quality;
                var4 = var2.resolution;
                var3 = var2.frameRate;
                var2 = 480;
                if(!(!(var4 <= var2))) { _fun0060_ip = 174; continue _fun0060 }
case 71:
                var2 = 9;
                var6 = var4 / var2;
                var2 = 16;
                var2 = var6 * var2;
                _fun0060_ip = 173; continue _fun0060;
case 174:
                var6 = 3;
                var7 = var4 / var6;
                var6 = 4;
                var2 = var7 * var6;
case 173:
                var7 = var1.desktopDescription;
                var6 = null;
                if(!(var6 == var7)) { _fun0060_ip = 266; continue _fun0060 }
case 175:
                var7 = var1.cameraDescription;
                var8 = var6 != var7;
                var7 = null;
                if(!var8) { _fun0060_ip = 251; continue _fun0060 }
case 267:
                var8 = var1.cameraDescription;
                var12 = var8.videoDeviceGuid;
                var8 = var1.cameraDescription;
                var11 = var8.audioDeviceGuid;
                var8 = global;
                var8 = var8.HermesInternal;
                var10 = var8.concat;
                var9 = '';
                var8 = ':';
                var7 = var10.bind(var9)(var12, var8, var11);
                _fun0060_ip = 251; continue _fun0060;
case 266:
                var8 = var1.desktopDescription;
                var7 = var8.id;
case 251:
                var8 = var5.goLiveSourceIdentifier;
                if(!(var8 === var7)) { _fun0060_ip = 63; continue _fun0060 }
case 268:
                var8 = var5.setDesktopEncodingOptions;
                var8 = var8.bind(var5)(var2, var4, var3);
                var8 = var1.desktopDescription;
                if(!(var6 != var8)) { _fun0060_ip = 269; continue _fun0060 }
case 270:
                var8 = var1.desktopDescription;
                var10 = var8.soundshareId;
                var9 = var8.useLoopback;
                var8 = var5.soundshareId;
                if(!(var8 !== var10)) { _fun0060_ip = 269; continue _fun0060 }
case 271:
                var8 = var5.setSoundshareSource;
                var8 = var8.bind(var5)(var10, var9);
                _fun0060_ip = 269; continue _fun0060;
case 63:
                var5['goLiveSourceIdentifier'] = var7;
                var7 = var5.conn;
                var7 = var7.setDesktopSource;
                if(!(var6 != var7)) { _fun0060_ip = 269; continue _fun0060 }
case 24:
                var7 = var1.desktopDescription;
                if(!(var6 == var7)) { _fun0060_ip = 272; continue _fun0060 }
case 151:
                var7 = var1.cameraDescription;
                if(!(var6 != var7)) { _fun0060_ip = 273; continue _fun0060 }
case 274:
                var7 = var1.cameraDescription;
                var11 = var7.videoDeviceGuid;
                var10 = var7.audioDeviceGuid;
                var9 = var5.conn;
                var8 = var9.setGoLiveDevices;
                var7 = {};
                var7['videoInputDeviceId'] = var11;
                var7['audioInputDeviceId'] = var10;
                var7 = var8.bind(var9)(var7);
                _fun0060_ip = 273; continue _fun0060;
case 272:
                var7 = var1.desktopDescription;
                var1 = var7.id;
                var24 = var7.soundshareId;
                var23 = var7.useLoopback;
                var22 = var7.useVideoHook;
                var21 = var7.useHookFramePacer;
                var19 = var7.useGraphicsCaptureApiLevel;
                var18 = var7.useCaptureDeviceForEncode;
                var20 = var7.useGraphicsCapture;
                var17 = var7.useQuartzCapturer;
                var16 = var7.allowScreenCaptureKit;
                var15 = var7.videoHookStaleFrameTimeoutMs;
                var14 = var7.graphicsCaptureStaleFrameTimeoutMs;
                var13 = var7.hdrCaptureMode;
                var12 = var7.enableGlobalFramePoolLock;
                var11 = var7.useGraphicsCaptureDirtyRegions;
                var10 = var7.videoHookAllowDx12;
                var9 = var7.minCaptureWidth;
                var8 = var7.minCaptureHeight;
                var7 = var5.setSoundshareSource;
                var7 = var7.bind(var5)(var24, var23);
                if(!(var6 == var1)) { _fun0060_ip = 275; continue _fun0060 }
case 276:
                var24 = ['', ''];
                _fun0060_ip = 220; continue _fun0060;
case 275:
                var23 = var1.split;
                var7 = ':';
                var24 = var23.bind(var1)(var7);
case 220:
                var23 = _closure1_slot3;
                var27 = undefined;
                var7 = 2;
                var23 = var23.bind(var27)(var24, var7);
                var7 = 0;
                var24 = var23[var7];
                var7 = 1;
                var23 = var23[var7];
                if(!(var6 == var1)) { _fun0060_ip = 277; continue _fun0060 }
case 278:
                var26 = var5.logger;
                var25 = var26.info;
                var7 = 'capturing desktop (type: <stop>).';
                var7 = var25.bind(var26)(var7);
                _fun0060_ip = 164; continue _fun0060;
case 277:
                var26 = var5.logger;
                var25 = var26.info;
                var7 = var22.toString;
                var37 = var7.bind(var22)();
                var7 = var6 == var20;
                var36 = undefined;
                if(var7) { _fun0060_ip = 279; continue _fun0060 }
case 280:
                var7 = var20.toString;
                var36 = var7.bind(var20)();
case 279:
                var7 = var6 == var19;
                var35 = undefined;
                if(var7) { _fun0060_ip = 281; continue _fun0060 }
case 282:
                var7 = var19.toString;
                var35 = var7.bind(var19)();
case 281:
                var7 = var6 == var18;
                var34 = undefined;
                if(var7) { _fun0060_ip = 283; continue _fun0060 }
case 284:
                var7 = var18.toString;
                var34 = var7.bind(var18)();
case 283:
                var7 = global;
                var7 = var7.HermesInternal;
                var33 = var7.concat;
                var50 = 'capturing desktop (type: ';
                var48 = ', handle: ';
                var46 = ', use-video-hook: ';
                var44 = ', use-graphics-capture: ';
                var42 = ', use-graphics-capture-api-level: ';
                var40 = ', use-capture-device-for-encode: ';
                var38 = ').';
                var49 = var24;
                var47 = var23;
                var45 = var37;
                var43 = var36;
                var41 = var35;
                var39 = var34;
                var7 = var50[var33](var49, var48, var47, var46, var45, var44, var43, var42, var41, var40, var39, var38, var37);
                var7 = var25.bind(var26)(var7);
case 164:
                var7 = var5.conn;
                var7 = var7.setDesktopSourceWithOptions;
                if(!(var6 == var7)) { _fun0060_ip = 165; continue _fun0060 }
case 285:
                var26 = var5.conn;
                var25 = var26.setDesktopSource;
                var7 = global;
                var7 = var7.HermesInternal;
                var27 = var7.concat;
                var7 = 'wumpus-';
                var7 = var27.bind(var7)(var23);
                var7 = var25.bind(var26)(var7, var22, var24);
                _fun0060_ip = 273; continue _fun0060;
case 165:
                if(!(var6 == var1)) { _fun0060_ip = 286; continue _fun0060 }
case 287:
                var6 = var5.conn;
                var1 = var6.clearDesktopSource;
                var1 = var1.bind(var6)();
                _fun0060_ip = 273; continue _fun0060;
case 286:
                var1 = var5.setDesktopEncodingOptions;
                var1 = var1.bind(var5)(var2, var4, var3);
                var7 = var5.conn;
                var6 = var7.setDesktopSourceWithOptions;
                var1 = {};
                var1['type'] = var24;
                var1['sourceId'] = var23;
                var1['useVideoHook'] = var22;
                var1['useHookFramePacer'] = var21;
                var1['useGraphicsCapture'] = var20;
                var1['useGraphicsCaptureApiLevel'] = var19;
                var1['useCaptureDeviceForEncode'] = var18;
                var1['useQuartzCapturer'] = var17;
                var1['allowScreenCaptureKit'] = var16;
                var1['videoHookStaleFrameTimeoutMs'] = var15;
                var1['graphicsCaptureStaleFrameTimeoutMs'] = var14;
                var1['hdrCaptureMode'] = var13;
                var1['enableGlobalFramePoolLock'] = var12;
                var1['useGraphicsCaptureDirtyRegions'] = var11;
                var1['videoHookAllowDx12'] = var10;
                var1['minCaptureWidth'] = var9;
                var1['minCaptureHeight'] = var8;
                var1 = var6.bind(var7)(var1);
case 273:
                var1 = var5.setDesktopEncodingOptions;
                var1 = var1.bind(var5)(var2, var4, var3);
case 269:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[54] = var1;
        var1 = {};
        var6 = 'clearGoLiveDevices';
        var1['key'] = var6;
        var6 = function value() {
            _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
case 0:
                var1 = this;
                var2 = var1.conn;
                var3 = var2.clearGoLiveDevices;
                var2 = null;
                if(!(var2 != var3)) { _fun0061_ip = 45; continue _fun0061 }
case 184:
                var2 = var1.conn;
                var1 = var2.clearGoLiveDevices;
                var1 = var1.bind(var2)();
case 45:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[55] = var1;
        var1 = {};
        var6 = 'clearDesktopSource';
        var1['key'] = var6;
        var6 = function value() {
            _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
case 0:
                var1 = this;
                var3 = null;
                var1['goLiveSourceIdentifier'] = var3;
                var2 = var1.conn;
                var2 = var2.clearDesktopSource;
                if(!(var3 == var2)) { _fun0062_ip = 43; continue _fun0062 }
case 39:
                var5 = var1.conn;
                var4 = var5.setDesktopSource;
                var3 = '';
                var2 = false;
                var2 = var4.bind(var5)(var3, var2, var3);
                _fun0062_ip = 35; continue _fun0062;
case 43:
                var2 = var1.conn;
                var1 = var2.clearDesktopSource;
                var1 = var1.bind(var2)();
case 35:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[56] = var1;
        var1 = {};
        var6 = 'setDesktopSourceStatusCallback';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
case 0:
                var1 = this;
                var4 = var1.conn;
                var3 = var4.setDesktopSourceStatusCallback;
                var1 = null;
                if(!(var1 != var3)) { _fun0063_ip = 95; continue _fun0063 }
case 184:
                var2 = var3.call;
                var1 = arg1;
                var1 = var2.bind(var3)(var4, var1);
case 95:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[57] = var1;
        var1 = {};
        var6 = 'hasDesktopSource';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.goLiveSourceIdentifier;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var1['value'] = var6;
        var2[58] = var1;
        var1 = {};
        var6 = 'setDesktopEncodingOptions';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
case 0:
                var8 = arg1;
                var7 = arg2;
                var5 = arg3;
                var4 = this;
                var1 = var4.destroyed;
                if(var1) { _fun0064_ip = 288; continue _fun0064 }
case 94:
                var1 = {};
                var1['width'] = var8;
                var1['height'] = var7;
                var1['framerate'] = var5;
                var4['lastDesktopEncodingOptions'] = var1;
                var2 = var4.calcMaxBitrateFunc;
                var1 = {};
                var1['width'] = var8;
                var1['height'] = var7;
                var1['framerate'] = var5;
                var3 = var4.currentVideoCodec;
                var1['videoCodec'] = var3;
                var3 = var2.bind(var4)(var1);
                var9 = null;
                if(!(var9 == var3)) { _fun0064_ip = 289; continue _fun0064 }
case 61:
                var1 = 0;
                if(!(var1 === var7)) { _fun0064_ip = 84; continue _fun0064 }
case 290:
                var1 = 10;
                if(!(!(var5 >= var1))) { _fun0064_ip = 76; continue _fun0064 }
case 84:
                var1 = 720;
                if(!(!(var7 > var1))) { _fun0064_ip = 76; continue _fun0064 }
case 291:
                var1 = 30;
                if(!(!(var5 > var1))) { _fun0064_ip = 76; continue _fun0064 }
case 148:
                var1 = _closure1_slot13;
                _fun0064_ip = 54; continue _fun0064;
case 76:
                var1 = _closure1_slot12;
case 54:
                var3 = var1;
case 289:
                var13 = {};
                var13['width'] = var8;
                var13['height'] = var7;
                var13['framerate'] = var5;
                var2 = var4.videoQualityManager;
                var1 = var2.getQuality;
                var6 = var1.bind(var2)();
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 20;
                var2 = var10[var2];
                var10 = undefined;
                var2 = var11.bind(var10)(var2);
                var12 = var2.VideoQuality;
                var11 = var12.equals;
                var2 = var6.capture;
                var2 = var11.bind(var12)(var13, var2);
                var2 = !var2;
                if(var2) { _fun0064_ip = 57; continue _fun0064 }
case 271:
                var6 = var6.bitrateMax;
                var2 = var6 !== var3;
case 57:
                var12 = var4.videoStreamParameters;
                var11 = var12.findIndex;
                var6 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.quality;
                    var1 = _closure1_slot16;
                    var1 = var2 === var1;
                    return var1;
                };
                var11 = var11.bind(var12)(var6);
                var6 = -1;
                if(!(var6 === var11)) { _fun0064_ip = 217; continue _fun0064 }
case 292:
                var11 = 0;
case 217:
                if(!var2) { _fun0064_ip = 288; continue _fun0064 }
case 151:
                var12 = var4.videoQualityManager;
                var6 = var12.setGoliveQuality;
                var2 = {};
                var2['capture'] = var13;
                var2['encode'] = var13;
                var2['bitrateMax'] = var3;
                var2 = var6.bind(var12)(var2);
                var2 = var4.videoStreamParameters;
                var2 = var2.length;
                if(!(var2 > var11)) { _fun0064_ip = 293; continue _fun0064 }
case 27:
                var2 = var4.videoStreamParameters;
                var6 = var2[var11];
                var2 = {};
                var12 = 0;
                if(!(var12 === var8)) { _fun0064_ip = 294; continue _fun0064 }
case 295:
                if(!(var12 !== var7)) { _fun0064_ip = 296; continue _fun0064 }
case 294:
                var12 = _closure1_slot23;
                var12 = var12.FIXED;
                _fun0064_ip = 297; continue _fun0064;
case 296:
                var13 = _closure1_slot23;
                var12 = var13.SOURCE;
case 297:
                var2['type'] = var12;
                var2['width'] = var8;
                var2['height'] = var7;
                var6['maxResolution'] = var2;
                var2 = var4.videoStreamParameters;
                var2 = var2[var11];
                var2['maxFrameRate'] = var5;
                var2 = var4.videoStreamParameters;
                var2 = var2[var11];
                var2['maxBitrate'] = var3;
case 293:
                var8 = var4.emit;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 10;
                var2 = var5[var2];
                var2 = var3.bind(var10)(var2);
                var2 = var2.BaseConnectionEvent;
                var7 = var2.Video;
                var20 = var4.userId;
                var18 = var4.audioSSRC;
                var2 = var4.videoStreamParameters;
                var2 = var2[var11];
                var17 = var2.ssrc;
                var2 = _closure1_slot38;
                var1 = var4.videoStreamParameters;
                var1 = var1[var11];
                var1 = var1.ssrc;
                var16 = var2.bind(var10)(var1);
                var15 = var4.videoStreamParameters;
                var22 = var4;
                var21 = var7;
                var19 = null;
                var1 = var22[var8](var21, var20, var19, var18, var17, var16, var15, var14);
                var3 = var4.conn;
                var2 = var3.setTransportOptions;
                var1 = var4.applyQualityConstraints;
                var1 = var1.bind(var4)();
                var1 = var1.constraints;
                var1 = var2.bind(var3)(var1);
case 288:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[59] = var1;
        var1 = {};
        var6 = 'setSDP';
        var1['key'] = var6;
        var6 = function value() {
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[60] = var1;
        var1 = {};
        var6 = 'setRemoteVideoSinkWants';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = this;
            var1 = arg1;
            var3['remoteVideoSinkWants'] = var1;
            var2 = var3.updateVideoQuality;
            var1 = _closure1_slot14;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[61] = var1;
        var1 = {};
        var6 = 'setLocalVideoSinkWants';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
case 0:
                var3 = arg1;
                var2 = this;
                var19 = var2.localVideoSinkWants;
                var1 = global;
                var5 = var1.Object;
                var4 = var5.entries;
                var1 = var2.remoteVideoSSRCs;
                var18 = var4.bind(var5)(var1);
                var1 = var18.length;
                var17 = 0;
                var4 = var17 < var1;
                var1 = undefined;
                var16 = true;
                var15 = null;
                var14 = false;
                var12 = 2;
                var11 = 1;
                var10 = 0;
                var9 = undefined;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                var5 = undefined;
                if(!var4) { _fun0065_ip = 154; continue _fun0065 }
case 298:
                var20 = var18[var10];
                var4 = _closure1_slot3;
                var4 = var4.bind(var1)(var20, var12);
                var26 = var4[var17];
                var20 = _closure1_slot35;
                var4 = var4[var11];
                var25 = var20.bind(var1)(var4);
                var4 = var25.bind(var1)();
                var20 = var4.done;
                var23 = var4;
                var22 = 0;
                var21 = 0;
                var24 = 0;
                var4 = 0;
                if(var20) { _fun0065_ip = 299; continue _fun0065 }
case 289:
                var27 = var23.value;
                var28 = var15 == var19;
                var20 = undefined;
                if(var28) { _fun0065_ip = 204; continue _fun0065 }
case 300:
                var20 = var19[var27];
case 204:
                var29 = var22 + var20;
                var28 = var15 == var3;
                var20 = undefined;
                if(var28) { _fun0065_ip = 301; continue _fun0065 }
case 302:
                var20 = var3[var27];
case 301:
                var21 = var21 + var20;
                var30 = var25.bind(var1)();
                var20 = var30.done;
                var23 = var30;
                var22 = var29;
                var24 = var22;
                var4 = var21;
                var5 = var27;
                if(!var20) { _fun0065_ip = 289; continue _fun0065 }
case 299:
                var23 = var9;
                var22 = var8;
                if(!(var17 === var24)) { _fun0065_ip = 218; continue _fun0065 }
case 303:
                var23 = var9;
                var22 = var8;
                if(!(var17 !== var4)) { _fun0065_ip = 218; continue _fun0065 }
case 271:
                var20 = var2.conn;
                var21 = var20.setDisableLocalVideo;
                var22 = var20;
                var23 = var21;
                if(!(var15 != var23)) { _fun0065_ip = 218; continue _fun0065 }
case 189:
                var25 = var21.call;
                var25 = var25.bind(var21)(var20, var26, var14);
                var23 = var21;
                var22 = var20;
case 218:
                var21 = var7;
                var20 = var6;
                if(!(var17 !== var24)) { _fun0065_ip = 8; continue _fun0065 }
case 304:
                var21 = var7;
                var20 = var6;
                if(!(var17 === var4)) { _fun0065_ip = 8; continue _fun0065 }
case 10:
                var4 = var2.conn;
                var24 = var4.setDisableLocalVideo;
                var20 = var4;
                var21 = var24;
                if(!(var15 != var21)) { _fun0065_ip = 8; continue _fun0065 }
case 305:
                var25 = var24.call;
                var25 = var25.bind(var24)(var4, var26, var16);
                var21 = var24;
                var20 = var4;
case 8:
                var10 = var10 + 1;
                var4 = var18.length;
                var7 = var21;
                var6 = var20;
                var9 = var23;
                var8 = var22;
                if(var10 < var4) { _fun0065_ip = 298; continue _fun0065 }
case 154:
                var2['localVideoSinkWants'] = var3;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[62] = var1;
        var1 = {};
        var6 = 'startSamplesLocalPlayback';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3, arg4) {
            _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
case 0:
                var1 = arg2;
                var4 = arg4;
                var2 = this;
                var5 = var1.numberOfChannels;
                var3 = 2;
                if(!(!(var5 > var3))) { _fun0066_ip = 213; continue _fun0066 }
case 231:
                var5 = var2.conn;
                var6 = var5.startSamplesLocalPlayback;
                var5 = null;
                if(!(var5 == var6)) { _fun0066_ip = 306; continue _fun0066 }
case 202:
                var7 = undefined;
                var6 = 3;
                var5 = 'Not supported';
                var5 = var4.bind(var7)(var6, var5);
                _fun0066_ip = 307; continue _fun0066;
case 306:
                var7 = new Array(0);
                var5 = var1.numberOfChannels;
                var6 = 0;
                var5 = var6 < var5;
                if(!var5) { _fun0066_ip = 308; continue _fun0066 }
case 309:
                var5 = var1.getChannelData;
                var8 = var5.bind(var1)(var6);
                var5 = var7.push;
                var5 = var5.bind(var7)(var8);
                var6 = var6 + 1;
                var5 = var1.numberOfChannels;
                if(var6 < var5) { _fun0066_ip = 309; continue _fun0066 }
case 308:
                var6 = var2.conn;
                var5 = var6.startSamplesLocalPlayback;
                var2 = {};
                var1 = var1.sampleRate;
                var2['sampleRate'] = var1;
                var1 = arg3;
                var2['volume'] = var1;
                var12 = arg1;
                var13 = var6;
                var11 = var2;
                var10 = var7;
                var9 = var4;
                var1 = var13[var5](var12, var11, var10, var9, var8);
                _fun0066_ip = 307; continue _fun0066;
case 213:
                var2 = undefined;
                var1 = 'Too many channels';
                var1 = var4.bind(var2)(var3, var1);
case 307:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[63] = var1;
        var1 = {};
        var6 = 'stopAllSamplesLocalPlayback';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.conn;
            var1 = var2.stopAllSamplesLocalPlayback;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[64] = var1;
        var1 = {};
        var6 = 'stopSamplesLocalPlayback';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
case 0:
                var1 = this;
                var4 = var1.conn;
                var3 = var4.stopSamplesLocalPlayback;
                var1 = null;
                if(!(var1 != var3)) { _fun0067_ip = 45; continue _fun0067 }
case 31:
                var2 = var3.call;
                var1 = arg1;
                var1 = var2.bind(var3)(var4, var1);
case 45:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[65] = var1;
        var1 = {};
        var6 = 'setBandwidthEstimationExperiments';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1.conn;
            var2 = var3.setTransportOptions;
            var1 = {};
            var4 = arg1;
            var1['bandwidthEstimationExperiments'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[66] = var1;
        var1 = {};
        var6 = 'updateVideoQualityCore';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0068: for(var _fun0068_ip = 0; ; ) switch(_fun0068_ip) {
case 0:
                var1 = this;
                var2 = var1.videoSupported;
                if(!var2) { _fun0068_ip = 203; continue _fun0068 }
case 241:
                var2 = var1.destroyed;
                if(var2) { _fun0068_ip = 203; continue _fun0068 }
case 184:
                var3 = var1.conn;
                var2 = var3.setTransportOptions;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
case 203:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[67] = var1;
        var1 = {};
        var6 = 'setStreamParameters';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = this;
            var _closure3_slot0 = var2;
            var3 = arg1;
            var _closure3_slot1 = var3;
            var _closure3_slot2 = var2;
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var4 = function(arg1, arg2) {
                _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
case 0:
                    var2 = arg2;
                    var _closure4_slot0 = var2;
                    var6 = function _loop(arg1) {
                        _fun0070: for(var _fun0070_ip = 0; ; ) switch(_fun0070_ip) {
case 0:
                            var2 = arg1;
                            var _closure5_slot0 = var2;
                            var4 = _closure3_slot1;
                            var3 = var4.findIndex;
                            var1 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.rid;
                                var1 = _closure5_slot0;
                                var1 = var1.rid;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var7 = var3.bind(var4)(var1);
                            var1 = -1;
                            if(!(var1 !== var7)) { _fun0070_ip = 310; continue _fun0070 }
case 44:
                            var5 = new Array(0);
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 19;
                            var3 = var3[var1];
                            var1 = undefined;
                            var6 = var4.bind(var1)(var3);
                            var3 = _closure3_slot2;
                            var3 = var3.videoStreamParameters;
                            var4 = var3[var7];
                            var3 = _closure3_slot1;
                            var3 = var3[var7];
                            var3 = var6.bind(var1)(var4, var3);
                            if(var3) { _fun0070_ip = 250; continue _fun0070 }
case 97:
                            var3 = _closure3_slot2;
                            var4 = var3.videoStreamParameters;
                            var3 = {};
                            var6 = _closure3_slot1;
                            var9 = var6[var7];
                            var10 = var3;
                            var8 = copyDataProperties(var10, var9);
                            var4[var7] = var3;
                            var4 = var5.push;
                            var3 = {};
                            var9 = var6[var7];
                            var10 = var3;
                            var6 = copyDataProperties(var10, var9);
                            var3 = var4.bind(var5)(var3);
case 250:
                            var2 = _closure3_slot2;
                            var4 = var2.conn;
                            var3 = var4.setTransportOptions;
                            var2 = {};
                            var2['streamParameters'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
case 310:
                            var3 = _closure4_slot0;
                            var1 = global;
                            var4 = var1.Error;
                            var1 = var4.prototype;
                            var2 = Object.create(var1, {constructor: {value: var4}});
                            var10 = 'Invalid rid';
                            var11 = var2;
                            var1 = new var11[var4](var10, var9);
                            var1 = var1 instanceof Object ? var1 : var2;
                            var2 = undefined;
                            var1 = var3.bind(var2)(var1);
                            var1 = {};
                            var1['v'] = var2;
                            return var1;
                        }
                    };
                    var3 = _closure1_slot35;
                    var1 = _closure3_slot0;
                    var2 = var1.videoStreamParameters;
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var3 = var5.bind(var1)();
                    var2 = var3.done;
                    var4 = var3;
                    if(var2) { _fun0069_ip = 198; continue _fun0069 }
case 28:
                    var2 = var4.value;
                    var2 = var6.bind(var1)(var2);
                    if(var2) { _fun0069_ip = 9; continue _fun0069 }
case 41:
                    var7 = var5.bind(var1)();
                    var3 = var7.done;
                    var4 = var7;
                    if(var3) { _fun0069_ip = 198; continue _fun0069 }
case 309:
                    _fun0069_ip = 28; continue _fun0069;
case 9:
                    var2 = var2.v;
                    return var2;
case 198:
                    var2 = arg1;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1['value'] = var6;
        var2[68] = var1;
        var1 = {};
        var6 = 'applyVideoTransportOptions';
        var1['key'] = var6;
        var6 = function value() {
            _fun0071: for(var _fun0071_ip = 0; ; ) switch(_fun0071_ip) {
case 0:
                var1 = this;
                var2 = var1.videoSupported;
                if(!var2) { _fun0071_ip = 73; continue _fun0071 }
case 235:
                var2 = var1.hasDesktopSource;
                var2 = var2.bind(var1)();
                var7 = false;
                if(!var2) { _fun0071_ip = 84; continue _fun0071 }
case 3:
                var2 = var1.videoStreamParameters;
                var2 = var2.length;
                var3 = 0;
                var2 = var2 > var3;
                var7 = false;
                if(!var2) { _fun0071_ip = 84; continue _fun0071 }
case 65:
                var2 = var1.videoStreamParameters;
                var2 = var2[var3];
                var2 = var2.maxResolution;
                var3 = null;
                var4 = var3 == var2;
                var3 = undefined;
                if(var4) { _fun0071_ip = 309; continue _fun0071 }
case 197:
                var3 = var2.type;
case 309:
                var2 = _closure1_slot23;
                var2 = var2.SOURCE;
                var7 = var3 === var2;
case 84:
                var4 = var1.conn;
                var3 = var4.setTransportOptions;
                var5 = var1.applyQualityConstraints;
                var2 = {};
                var6 = var1.hasDesktopSource;
                var6 = var6.bind(var1)();
                if(var6) { _fun0071_ip = 311; continue _fun0071 }
case 54:
                var6 = var1.videoDegradationPreference;
                _fun0071_ip = 252; continue _fun0071;
case 311:
                if(var7) { _fun0071_ip = 248; continue _fun0071 }
case 266:
                var7 = var1.desktopDegradationPreference;
                _fun0071_ip = 250; continue _fun0071;
case 248:
                var7 = var1.sourceDesktopDegradationPreference;
case 250:
                var6 = var7;
case 252:
                var2['encodingVideoDegradationPreference'] = var6;
                var2 = var5.bind(var1)(var2);
                var2 = var2.constraints;
                var2 = var3.bind(var4)(var2);
                var3 = var1.conn;
                var2 = var3.setVideoBroadcast;
                var1 = var1.selfVideo;
                var1 = var2.bind(var3)(var1);
case 73:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[69] = var1;
        var1 = {};
        var6 = 'chooseEncryptionMode';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0072: for(var _fun0072_ip = 0; ; ) switch(_fun0072_ip) {
case 0:
                var6 = arg1;
                var2 = _closure1_slot35;
                var4 = undefined;
                var1 = arg2;
                var3 = var2.bind(var4)(var1);
                var2 = var3.bind(var4)();
                var1 = var2.done;
                if(var1) { _fun0072_ip = 84; continue _fun0072 }
case 99:
                var1 = var2.value;
                var7 = _closure1_slot35;
                var9 = var7.bind(var4)(var6);
                var8 = var9.bind(var4)();
                var7 = var8.done;
                if(var7) { _fun0072_ip = 9; continue _fun0072 }
case 68:
                var7 = var8.value;
                if(!(var1 !== var7)) { _fun0072_ip = 309; continue _fun0072 }
case 30:
                var10 = var9.bind(var4)();
                var7 = var10.done;
                var8 = var10;
                if(var7) { _fun0072_ip = 9; continue _fun0072 }
case 40:
                _fun0072_ip = 68; continue _fun0072;
case 309:
                return var1;
case 9:
                var7 = var3.bind(var4)();
                var1 = var7.done;
                var2 = var7;
                if(!var1) { _fun0072_ip = 99; continue _fun0072 }
case 84:
                var1 = 'xsalsa20_poly1305';
                return var1;
            }
        };
        var1['value'] = var6;
        var2[70] = var1;
        var1 = {};
        var6 = 'getUserOptions';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var _closure3_slot0 = var2;
            var3 = global;
            var4 = var3.Object;
            var3 = var4.keys;
            var2 = var2.remoteAudioSSRCs;
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0073: for(var _fun0073_ip = 0; ; ) switch(_fun0073_ip) {
case 0:
                    var4 = arg1;
                    var1 = _closure3_slot0;
                    var1 = var1.remoteVideoSSRCs;
                    var1 = var1[var4];
                    var3 = 0;
                    var6 = undefined;
                    var5 = 0;
                    if(!(var6 !== var1)) { _fun0073_ip = 175; continue _fun0073 }
case 3:
                    var1 = _closure3_slot0;
                    var1 = var1.remoteVideoSSRCs;
                    var1 = var1[var4];
                    var1 = var1.length;
                    var1 = var1 > var3;
                    var5 = 0;
                    if(!var1) { _fun0073_ip = 175; continue _fun0073 }
case 68:
                    var1 = _closure3_slot0;
                    var1 = var1.remoteVideoSSRCs;
                    var1 = var1[var4];
                    var5 = var1[var3];
case 175:
                    var1 = {};
                    var1['id'] = var4;
                    var3 = _closure3_slot0;
                    var2 = var3.remoteAudioSSRCs;
                    var2 = var2[var4];
                    var1['ssrc'] = var2;
                    var1['videoSsrc'] = var5;
                    var2 = var3.remoteVideoSSRCs;
                    var2 = var2[var4];
                    var1['videoSsrcs'] = var2;
                    var2 = _closure1_slot38;
                    var2 = var2.bind(var6)(var5);
                    var1['rtxSsrc'] = var2;
                    var2 = var3.getLocalMute;
                    var2 = var2.bind(var3)(var4);
                    var1['mute'] = var2;
                    var2 = var3.getLocalVolume;
                    var2 = var2.bind(var3)(var4);
                    var1['volume'] = var2;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[71] = var1;
        var1 = {};
        var6 = 'createInputModeOptions';
        var1['key'] = var6;
        var6 = function value() {
            _fun0074: for(var _fun0074_ip = 0; ; ) switch(_fun0074_ip) {
case 0:
                var2 = this;
                var3 = var2.inputMode;
                var1 = _closure1_slot18;
                var1 = var1.VOICE_ACTIVITY;
                if(!(var1 !== var3)) { _fun0074_ip = 312; continue _fun0074 }
case 85:
                var1 = _closure1_slot18;
                var1 = var1.PUSH_TO_TALK;
                if(!(var1 !== var3)) { _fun0074_ip = 196; continue _fun0074 }
case 238:
                var1 = global;
                var5 = var1.Error;
                var6 = var2.inputMode;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var1 = 'Unknown Input Mode: ';
                var7 = var3.bind(var1)(var6);
                var3 = var5.prototype;
                var3 = Object.create(var3, {constructor: {value: var5}});
                var8 = var3;
                var1 = new var8[var5](var7, var6);
                var1 = var1 instanceof Object ? var1 : var3;
                throw var1;
case 196:
                var1 = {};
                var3 = var2.pttReleaseDelay;
                var1['pttReleaseDelay'] = var3;
                return var1;
case 312:
                var1 = {};
                var3 = var2.vadThreshold;
                var1['vadThreshold'] = var3;
                var3 = var2.vadAutoThreshold;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 21;
                var5 = var5[var4];
                var4 = undefined;
                var4 = var6.bind(var4)(var5);
                var4 = var4.VADAggressiveness;
                if(var3) { _fun0074_ip = 313; continue _fun0074 }
case 14:
                var3 = var4.DISABLED;
                _fun0074_ip = 314; continue _fun0074;
case 313:
                var3 = var4.VERY_AGGRESSIVE;
case 314:
                var1['vadAutoThreshold'] = var3;
                var3 = var2.vadUseKrisp;
                var1['vadUseKrisp'] = var3;
                var3 = var2.vadLeading;
                var1['vadLeading'] = var3;
                var3 = var2.vadTrailing;
                var1['vadTrailing'] = var3;
                var3 = var2.vadKrispActivationThreshold;
                var1['vadKrispActivationThreshold'] = var3;
                var2 = var2.vadDuringPreProcess;
                var1['vadDuringPreProcess'] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[72] = var1;
        var1 = {};
        var6 = 'getAttenuationOptions';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var1 = {};
            var3 = var2.isAttenuating;
            var3 = var3.bind(var2)();
            var1['attenuation'] = var3;
            var3 = var2.attenuationFactor;
            var1['attenuationFactor'] = var3;
            var3 = var2.attenuateWhileSpeakingSelf;
            var1['attenuateWhileSpeakingSelf'] = var3;
            var2 = var2.attenuateWhileSpeakingOthers;
            var1['attenuateWhileSpeakingOthers'] = var2;
            return var1;
        };
        var1['value'] = var6;
        var2[73] = var1;
        var1 = {};
        var6 = 'getCodecParams';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0075: for(var _fun0075_ip = 0; ; ) switch(_fun0075_ip) {
case 0:
                var1 = _closure1_slot20;
                var3 = var1.H264;
                var1 = arg1;
                if(!(var1 === var3)) { _fun0075_ip = 315; continue _fun0075 }
case 29:
                var1 = arg2;
                if(var1) { _fun0075_ip = 97; continue _fun0075 }
case 85:
                var1 = {'level-asymmetry-allowed': '1', 'packetization-mode': '1'};
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.getVoiceEngine;
                var2 = var2.bind(var3)();
                var4 = var2.platform;
                var2 = '4d0033';
                var3 = 'android';
                if(!(var3 === var4)) { _fun0075_ip = 196; continue _fun0075 }
case 262:
                var2 = '42e01f';
case 196:
                var1['profile-level-id'] = var2;
                _fun0075_ip = 316; continue _fun0075;
case 97:
                var1 = {'level-asymmetry-allowed': '1', 'packetization-mode': '1', 'profile-level-id': '42e034'};
case 316:
                _fun0075_ip = 317; continue _fun0075;
case 315:
                var1 = {};
case 317:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[74] = var1;
        var1 = {};
        var6 = 'getCodecOptions';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0076: for(var _fun0076_ip = 0; ; ) switch(_fun0076_ip) {
case 0:
                var29 = arg1;
                var28 = arg2;
                var27 = this;
                var _closure3_slot0 = var29;
                var4 = var27.codecs;
                var3 = var4.find;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.name;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var3 = {'type': null, 'name': null, 'freq': 48000, 'pacsize': 960, 'channels': 1, 'rate': 64000};
                var26 = null;
                var5 = var26 == var2;
                var25 = undefined;
                var4 = undefined;
                if(var5) { _fun0076_ip = 35; continue _fun0076 }
case 173:
                var4 = var2.payloadType;
case 35:
                var5 = var26 != var4;
                var2 = 0;
                if(!var5) { _fun0076_ip = 40; continue _fun0076 }
case 197:
                var2 = var4;
case 40:
                var3['type'] = var2;
                var3['name'] = var29;
                var5 = var27.codecs;
                var4 = var5.filter;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = 'audio';
                    var1 = var1 === var2;
                    return var1;
                };
                var4 = var4.bind(var5)(var2);
                var2 = var4.map;
                var1 = function(arg1) {
                    _fun0077: for(var _fun0077_ip = 0; ; ) switch(_fun0077_ip) {
case 0:
                        var2 = arg1;
                        var1 = {};
                        var3 = null;
                        var5 = var3 == var2;
                        var4 = undefined;
                        if(var5) { _fun0077_ip = 64; continue _fun0077 }
case 232:
                        var4 = var2.payloadType;
case 64:
                        var5 = var3 != var4;
                        var3 = 0;
                        if(!var5) { _fun0077_ip = 71; continue _fun0077 }
case 69:
                        var3 = var4;
case 71:
                        var1['type'] = var3;
                        var2 = var2.name;
                        var1['name'] = var2;
                        var2 = 48000;
                        var1['freq'] = var2;
                        var2 = 2;
                        var1['channels'] = var2;
                        var2 = {};
                        var3 = '1';
                        var2['stereo'] = var3;
                        var1['params'] = var2;
                        return var1;
                    }
                };
                var2 = var2.bind(var4)(var1);
                var1 = _closure1_slot21;
                var4 = var1.STREAM;
                var1 = arg3;
                if(!(var1 === var4)) { _fun0076_ip = 250; continue _fun0076 }
case 249:
                var1 = 2;
                var3['channels'] = var1;
case 250:
                var4 = new Array(0);
                var5 = {'name': '', 'type': 0, 'rtxType': 0};
                var1 = {};
                var5['params'] = var1;
                var6 = _closure1_slot35;
                var1 = var27.codecs;
                var22 = var6.bind(var25)(var1);
                var6 = var22.bind(var25)();
                var1 = var6.done;
                var21 = '0';
                var20 = '1';
                var19 = false;
                var18 = 'params';
                var17 = 9;
                var16 = '3';
                var15 = true;
                var14 = 15;
                var13 = var6;
                var12 = var5;
                var11 = undefined;
                var10 = undefined;
                var9 = undefined;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                var5 = var12;
                if(var1) { _fun0076_ip = 318; continue _fun0076 }
case 292:
                var32 = var13.value;
                var1 = var32.name;
                var30 = var12;
                var31 = var6;
                if(!(var1 !== var29)) { _fun0076_ip = 319; continue _fun0076 }
case 60:
                var1 = {};
                var34 = _closure1_slot0;
                var33 = _closure1_slot2;
                var33 = var33[var14];
                var35 = var34.bind(var25)(var33);
                var34 = var35.codecNameToPayloadName;
                var33 = var32.name;
                var33 = var34.bind(var35)(var33);
                var1['name'] = var33;
                var33 = var26 == var32;
                var34 = undefined;
                if(var33) { _fun0076_ip = 295; continue _fun0076 }
case 320:
                var34 = var32.payloadType;
case 295:
                var35 = var26 != var34;
                var33 = 0;
                if(!var35) { _fun0076_ip = 321; continue _fun0076 }
case 322:
                var33 = var34;
case 321:
                var1['type'] = var33;
                var35 = var26 == var32;
                var33 = undefined;
                if(var35) { _fun0076_ip = 153; continue _fun0076 }
case 323:
                var33 = var32.rtxPayloadType;
case 153:
                var36 = var26 != var33;
                var35 = 0;
                if(!var36) { _fun0076_ip = 324; continue _fun0076 }
case 325:
                var35 = var33;
case 324:
                var1['rtxType'] = var35;
                var36 = var27.getCodecParams;
                var35 = var32.name;
                var35 = var36.bind(var27)(var35, var15);
                var1['params'] = var35;
                var37 = var27.experimentFlags;
                var36 = var37.has;
                var35 = _closure1_slot11;
                var35 = var35.RESET_DECODER_ON_ERRORS;
                var35 = var36.bind(var37)(var35);
                if(!var35) { _fun0076_ip = 326; continue _fun0076 }
case 327:
                var35 = var1.params;
                var35['reset-on-errors'] = var20;
case 326:
                var37 = var27.experimentFlags;
                var36 = var37.has;
                var35 = _closure1_slot11;
                var35 = var35.SOFTWARE_FALLBACK_ON_ERRORS;
                var35 = var36.bind(var37)(var35);
                if(!var35) { _fun0076_ip = 328; continue _fun0076 }
case 329:
                var35 = var1.params;
                var35['fallback-after-errors'] = var16;
case 328:
                var37 = var27.experimentFlags;
                var36 = var37.has;
                var35 = _closure1_slot11;
                var35 = var35.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS;
                var35 = var36.bind(var37)(var35);
                if(!var35) { _fun0076_ip = 330; continue _fun0076 }
case 108:
                var35 = var1.params;
                var35['fallback-on-consecutive-errors'] = var20;
case 330:
                var37 = var27.experimentFlags;
                var36 = var37.has;
                var35 = _closure1_slot11;
                var35 = var35.SIGNAL_AV1_HARDWARE_DECODE;
                var35 = var36.bind(var37)(var35);
                if(!var35) { _fun0076_ip = 113; continue _fun0076 }
case 331:
                var35 = var1.params;
                var35['hardware-av1-decode'] = var20;
case 113:
                var35 = var1.name;
                var35 = var1.params;
                var35['hardware-h264'] = var20;
                var37 = var27.experimentFlags;
                var36 = var37.has;
                var35 = _closure1_slot11;
                var35 = var35.USE_LIBOPENH264_DECODER;
                var35 = var36.bind(var37)(var35);
                if(!var35) { _fun0076_ip = 332; continue _fun0076 }
case 333:
                var36 = _closure1_slot0;
                var35 = _closure1_slot2;
                var35 = var35[var17];
                var36 = var36.bind(var25)(var35);
                var35 = var36.getOpenH264LibraryPath;
                var35 = var35.bind(var36)();
                var6 = var35;
                if(!(var26 != var6)) { _fun0076_ip = 332; continue _fun0076 }
case 116:
                var36 = var1.params;
                var36['libopenh264'] = var20;
                var36 = var1.params;
                var36['libopenh264-path'] = var35;
                var6 = var35;
case 332:
                var35 = var4.push;
                var35 = var35.bind(var4)(var1);
                var35 = var32.name;
                var30 = var12;
                var11 = var34;
                var10 = var32;
                var9 = var33;
                var8 = var10;
                var7 = var1;
                var31 = var6;
                if(!(var35 === var28)) { _fun0076_ip = 319; continue _fun0076 }
case 163:
                var35 = {};
                var40 = var35;
                var39 = var1;
                var36 = copyDataProperties(var40, var39);
                var37 = var27.getCodecParams;
                var36 = var32.name;
                var36 = var37.bind(var27)(var36, var19);
                var35[17] = var36;
                var38 = var27.experimentFlags;
                var37 = var38.has;
                var36 = _closure1_slot11;
                var36 = var36.VIDEOTOOLBOX_RATE_CONTROL;
                var36 = var37.bind(var38)(var36);
                if(!var36) { _fun0076_ip = 334; continue _fun0076 }
case 335:
                var36 = var35.params;
                var36['fixed-rate-presentation-timestamps'] = var20;
case 334:
                var38 = var27.experimentFlags;
                var37 = var38.has;
                var36 = _closure1_slot11;
                var36 = var36.LOW_LATENCY_RATE_CONTROL;
                var36 = var37.bind(var38)(var36);
                if(!var36) { _fun0076_ip = 336; continue _fun0076 }
case 337:
                var36 = var35.params;
                var36['low-latency-rate-control'] = var20;
case 336:
                var38 = var27.experimentFlags;
                var37 = var38.has;
                var36 = _closure1_slot11;
                var36 = var36.WMF_GPU_ENCODE;
                var36 = var37.bind(var38)(var36);
                if(!var36) { _fun0076_ip = 338; continue _fun0076 }
case 339:
                var36 = var35.params;
                var36['wmf-gpu'] = var20;
case 338:
                var38 = var27.experimentFlags;
                var37 = var38.has;
                var36 = _closure1_slot11;
                var36 = var36.INTEL_GPU_DISABLE;
                var36 = var37.bind(var38)(var36);
                var30 = var35;
                var11 = var34;
                var10 = var32;
                var9 = var33;
                var8 = var10;
                var7 = var1;
                var31 = var6;
                if(!var36) { _fun0076_ip = 319; continue _fun0076 }
case 340:
                var36 = var35.params;
                var36['intel-gpu'] = var21;
                var30 = var35;
                var11 = var34;
                var10 = var32;
                var9 = var33;
                var8 = var10;
                var7 = var1;
                var31 = var6;
case 319:
                var32 = var22.bind(var25)();
                var1 = var32.done;
                var12 = var30;
                var6 = var31;
                var13 = var32;
                var5 = var12;
                if(!var1) { _fun0076_ip = 292; continue _fun0076 }
case 318:
                var1 = {};
                var1['videoEncoder'] = var5;
                var1['videoDecoders'] = var4;
                var1['audioEncoder'] = var3;
                var1['audioDecoders'] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[75] = var1;
        var1 = {};
        var6 = 'getKeyFrameInterval';
        var1['key'] = var6;
        var6 = function value() {
            _fun0078: for(var _fun0078_ip = 0; ; ) switch(_fun0078_ip) {
case 0:
                var2 = this;
                var1 = var2.keyframeInterval;
                var3 = 0;
                if(!(var1 > var3)) { _fun0078_ip = 231; continue _fun0078 }
case 235:
                var1 = var2.clipsKeyFrameInterval;
                if(!(!(var1 > var3))) { _fun0078_ip = 68; continue _fun0078 }
case 231:
                var1 = global;
                var5 = var1.Math;
                var4 = var5.max;
                var3 = var2.keyframeInterval;
                var1 = var2.clipsKeyFrameInterval;
                var1 = var4.bind(var5)(var3, var1);
                _fun0078_ip = 191; continue _fun0078;
case 68:
                var3 = global;
                var5 = var3.Math;
                var4 = var5.min;
                var3 = var2.keyframeInterval;
                var2 = var2.clipsKeyFrameInterval;
                var1 = var4.bind(var5)(var3, var2);
case 191:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[76] = var1;
        var1 = {};
        var6 = 'getConnectionTransportOptions';
        var1['key'] = var6;
        var6 = function value() {
            _fun0079: for(var _fun0079_ip = 0; ; ) switch(_fun0079_ip) {
case 0:
                var5 = this;
                var1 = {};
                var2 = var5.selfMute;
                var1['selfMute'] = var2;
                var3 = _closure1_slot17;
                var2 = var5.inputMode;
                var2 = var3[var2];
                var1['inputMode'] = var2;
                var2 = var5.createInputModeOptions;
                var2 = var2.bind(var5)();
                var1['inputModeOptions'] = var2;
                var2 = var5.minimumJitterBufferLevel;
                var1['minimumJitterBufferLevel'] = var2;
                var2 = var5.postponeDecodeLevel;
                var1['postponeDecodeLevel'] = var2;
                var2 = var5.getAttenuationOptions;
                var8 = var2.bind(var5)();
                var9 = var1;
                var2 = copyDataProperties(var9, var8);
                var2 = true;
                var3 = 'fec';
                var1[2] = var2;
                var6 = 0.3;
                var3 = 'packetLossRate';
                var1[2] = var6;
                var6 = var5.qos;
                var3 = 'qos';
                var1[2] = var6;
                var6 = _closure1_slot32;
                var3 = 'prioritySpeakerDucking';
                var1[2] = var6;
                var6 = var5.voiceBitrate;
                var3 = 'encodingVoiceBitRate';
                var1[2] = var6;
                var6 = _closure1_slot29;
                var3 = 'callBitRate';
                var1[2] = var6;
                var6 = _closure1_slot30;
                var3 = 'callMinBitRate';
                var1[2] = var6;
                var6 = _closure1_slot31;
                var3 = 'callMaxBitRate';
                var1[2] = var6;
                var6 = var5.videoDegradationPreference;
                var3 = 'encodingVideoDegradationPreference';
                var1[2] = var6;
                var6 = var5.reconnectInterval;
                var3 = 'reconnectInterval';
                var1[2] = var6;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 9;
                var6 = var6[var3];
                var3 = undefined;
                var7 = var7.bind(var3)(var6);
                var6 = var7.supportsFeature;
                var3 = _closure1_slot24;
                var3 = var3.VIDEO_EFFECTS;
                var3 = var6.bind(var7)(var3);
                if(!var3) { _fun0079_ip = 81; continue _fun0079 }
case 60:
                var5 = var5.context;
                var4 = _closure1_slot21;
                var4 = var4.STREAM;
                var3 = var5 === var4;
case 81:
                if(!var3) { _fun0079_ip = 341; continue _fun0079 }
case 342:
                var1['enableVideoEffects'] = var2;
case 341:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[77] = var1;
        var1 = {};
        var6 = 'setStream';
        var1['key'] = var6;
        var6 = function value() {
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = 'Method not implemented.';
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        };
        var1['value'] = var6;
        var2[78] = var1;
        var1 = {};
        var6 = 'getUserIdBySsrc';
        var1['key'] = var6;
        var6 = function value() {
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[79] = var1;
        var1 = {};
        var6 = 'prepareSecureFramesTransition';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0080: for(var _fun0080_ip = 0; ; ) switch(_fun0080_ip) {
case 0:
                var6 = arg1;
                var1 = this;
                var2 = 0;
                if(!(var2 === var6)) { _fun0080_ip = 3; continue _fun0080 }
case 241:
                var2 = -1;
                var1['lastExecutedTransitionId'] = var2;
                var1['lastPreparedTransitionId'] = var2;
case 3:
                var1['lastPreparedTransitionId'] = var6;
                var5 = var1.conn;
                var4 = var5.prepareSecureFramesTransition;
                var1 = null;
                if(!(var1 != var4)) { _fun0080_ip = 50; continue _fun0080 }
case 43:
                var3 = var4.call;
                var8 = arg2;
                var7 = arg3;
                var11 = var4;
                var10 = var5;
                var9 = var6;
                var1 = var11[var3](var10, var9, var8, var7, var6);
case 50:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[80] = var1;
        var1 = {};
        var6 = 'prepareSecureFramesEpoch';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0081: for(var _fun0081_ip = 0; ; ) switch(_fun0081_ip) {
case 0:
                var1 = this;
                var6 = var1.conn;
                var5 = var6.prepareSecureFramesEpoch;
                var1 = null;
                if(!(var1 != var5)) { _fun0081_ip = 44; continue _fun0081 }
case 184:
                var4 = var5.call;
                var9 = arg1;
                var8 = arg2;
                var7 = arg3;
                var11 = var5;
                var10 = var6;
                var1 = var11[var4](var10, var9, var8, var7, var6);
case 44:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[81] = var1;
        var1 = {};
        var6 = 'executeSecureFramesTransition';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0082: for(var _fun0082_ip = 0; ; ) switch(_fun0082_ip) {
case 0:
                var4 = arg1;
                var1 = this;
                var2 = var1.lastExecutedTransitionId;
                var3 = -1;
                if(!(var3 !== var2)) { _fun0082_ip = 343; continue _fun0082 }
case 231:
                var2 = var1.lastPreparedTransitionId;
                if(!(var3 !== var2)) { _fun0082_ip = 343; continue _fun0082 }
case 66:
                var3 = var1.lastPreparedTransitionId;
                var2 = var1.lastExecutedTransitionId;
                if(!(!(var3 >= var2))) { _fun0082_ip = 197; continue _fun0082 }
case 43:
                var2 = var1.lastExecutedTransitionId;
                var2 = var4 > var2;
                if(var2) { _fun0082_ip = 344; continue _fun0082 }
case 30:
                var3 = var1.lastPreparedTransitionId;
                var2 = var4 <= var3;
case 344:
                _fun0082_ip = 97; continue _fun0082;
case 197:
                var3 = var1.lastExecutedTransitionId;
                var3 = var4 > var3;
                if(!var3) { _fun0082_ip = 244; continue _fun0082 }
case 262:
                var5 = var1.lastPreparedTransitionId;
                var3 = var4 <= var5;
case 244:
                var2 = var3;
case 97:
                if(var2) { _fun0082_ip = 343; continue _fun0082 }
case 53:
                var14 = var1.lastExecutedTransitionId;
                var12 = var1.lastPreparedTransitionId;
                var2 = global;
                var3 = var2.HermesInternal;
                var8 = var3.concat;
                var17 = 'Skipping invalid transition ';
                var15 = ' outside of range (';
                var13 = '-';
                var11 = ']';
                var16 = var4;
                var5 = var17[var8](var16, var15, var14, var13, var12, var11, var10);
                var6 = var1.logger;
                var3 = var6.warn;
                var3 = var3.bind(var6)(var5);
                var2 = var2.Error;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var17 = var3;
                var16 = var5;
                var2 = new var17[var2](var16, var15);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
case 343:
                var1['lastExecutedTransitionId'] = var4;
                var3 = var1.conn;
                var2 = var3.executeSecureFramesTransition;
                var1 = null;
                if(!(var1 != var2)) { _fun0082_ip = 345; continue _fun0082 }
case 346:
                var1 = var2.call;
                var1 = var1.bind(var2)(var3, var4);
case 345:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[82] = var1;
        var1 = {};
        var6 = 'getMLSKeyPackage';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0083: for(var _fun0083_ip = 0; ; ) switch(_fun0083_ip) {
case 0:
                var1 = this;
                var4 = var1.conn;
                var3 = var4.getMLSKeyPackage;
                var1 = null;
                if(!(var1 != var3)) { _fun0083_ip = 95; continue _fun0083 }
case 184:
                var2 = var3.call;
                var1 = arg1;
                var1 = var2.bind(var3)(var4, var1);
case 95:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[83] = var1;
        var1 = {};
        var6 = 'updateMLSExternalSender';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0084: for(var _fun0084_ip = 0; ; ) switch(_fun0084_ip) {
case 0:
                var1 = this;
                var4 = var1.conn;
                var3 = var4.updateMLSExternalSender;
                var1 = null;
                if(!(var1 != var3)) { _fun0084_ip = 95; continue _fun0084 }
case 184:
                var2 = var3.call;
                var1 = arg1;
                var1 = var2.bind(var3)(var4, var1);
case 95:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[84] = var1;
        var1 = {};
        var6 = 'processMLSProposals';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0085: for(var _fun0085_ip = 0; ; ) switch(_fun0085_ip) {
case 0:
                var1 = this;
                var5 = var1.conn;
                var4 = var5.processMLSProposals;
                var1 = null;
                if(!(var1 != var4)) { _fun0085_ip = 186; continue _fun0085 }
case 184:
                var3 = var4.call;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var5, var2, var1);
case 186:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[85] = var1;
        var1 = {};
        var6 = 'prepareMLSCommitTransition';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0086: for(var _fun0086_ip = 0; ; ) switch(_fun0086_ip) {
case 0:
                var6 = arg1;
                var1 = this;
                var1['lastPreparedTransitionId'] = var6;
                var5 = var1.conn;
                var4 = var5.prepareMLSCommitTransition;
                var1 = null;
                if(!(var1 != var4)) { _fun0086_ip = 43; continue _fun0086 }
case 3:
                var3 = var4.call;
                var8 = arg2;
                var7 = arg3;
                var11 = var4;
                var10 = var5;
                var9 = var6;
                var1 = var11[var3](var10, var9, var8, var7, var6);
case 43:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[86] = var1;
        var1 = {};
        var6 = 'processMLSWelcome';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0087: for(var _fun0087_ip = 0; ; ) switch(_fun0087_ip) {
case 0:
                var6 = arg1;
                var1 = this;
                var1['lastPreparedTransitionId'] = var6;
                var5 = var1.conn;
                var4 = var5.processMLSWelcome;
                var1 = null;
                if(!(var1 != var4)) { _fun0087_ip = 43; continue _fun0087 }
case 3:
                var3 = var4.call;
                var8 = arg2;
                var7 = arg3;
                var11 = var4;
                var10 = var5;
                var9 = var6;
                var1 = var11[var3](var10, var9, var8, var7, var6);
case 43:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[87] = var1;
        var1 = {};
        var6 = 'getMLSPairwiseFingerprint';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0088: for(var _fun0088_ip = 0; ; ) switch(_fun0088_ip) {
case 0:
                var1 = this;
                var6 = var1.conn;
                var5 = var6.getMLSPairwiseFingerprint;
                var1 = null;
                if(!(var1 != var5)) { _fun0088_ip = 44; continue _fun0088 }
case 184:
                var4 = var5.call;
                var9 = arg1;
                var8 = arg2;
                var7 = arg3;
                var11 = var5;
                var10 = var6;
                var1 = var11[var4](var10, var9, var8, var7, var6);
case 44:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[88] = var1;
        var1 = {};
        var6 = 'presentDesktopSourcePicker';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0089: for(var _fun0089_ip = 0; ; ) switch(_fun0089_ip) {
case 0:
                var1 = this;
                var4 = var1.conn;
                var3 = var4.presentDesktopSourcePicker;
                var1 = null;
                if(!(var1 != var3)) { _fun0089_ip = 45; continue _fun0089 }
case 31:
                var2 = var3.call;
                var1 = arg1;
                var1 = var2.bind(var3)(var4, var1);
case 45:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[89] = var1;
        var1 = {};
        var6 = 'mergeUsers';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var5 = arg1;
            var4 = this;
            var2 = var4.conn;
            var1 = var2.mergeUsers;
            var1 = var1.bind(var2)(var5);
            var3 = var4.emit;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var6.bind(var1)(var2);
            var2 = var2.BaseConnectionEvent;
            var2 = var2.UsersMerged;
            var2 = var3.bind(var4)(var2, var5);
            return var1;
        };
        var1['value'] = var6;
        var2[90] = var1;
        var6 = {};
        var1 = 'create';
        var6['key'] = var1;
        var1 = function value(arg1, arg2, arg3) {
            var5 = _closure2_slot0;
            var1 = var5.prototype;
            var2 = Object.create(var1, {constructor: {value: var5}});
            var8 = arg1;
            var7 = arg2;
            var6 = true;
            var9 = var2;
            var1 = new var9[var5](var8, var7, var6, var5);
            var1 = var1 instanceof Object ? var1 : var2;
            var3 = var1.initialize;
            var2 = arg3;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var6['value'] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var6 = {};
        var8 = 'createReplay';
        var6['key'] = var8;
        var7 = function value(arg1, arg2) {
            _fun0090: for(var _fun0090_ip = 0; ; ) switch(_fun0090_ip) {
case 0:
                var6 = arg1;
                var _closure3_slot0 = var6;
                var5 = _closure2_slot0;
                var2 = var5.prototype;
                var3 = Object.create(var2, {constructor: {value: var5}});
                var8 = '0';
                var7 = true;
                var10 = var3;
                var9 = var6;
                var2 = new var10[var5](var9, var8, var7, var6);
                var2 = var2 instanceof Object ? var2 : var3;
                var _closure3_slot1 = var2;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 9;
                var5 = var5[var4];
                var4 = undefined;
                var5 = var6.bind(var4)(var5);
                var4 = var5.getVoiceEngine;
                var6 = var4.bind(var5)();
                var _closure3_slot2 = var6;
                var4 = var2.initializeStreamParameters;
                var5 = {'type': null, 'rid': '100', 'ssrc': 0, 'rtxSsrc': 0, 'quality': 100, 'active': false};
                var3 = _closure1_slot15;
                var3 = var3.VIDEO;
                var5['type'] = var3;
                var3 = new Array(1);
                var3[0] = var5;
                var3 = var4.bind(var2)(var3);
                var5 = var6.createReplayConnection;
                var4 = 'default';
                var3 = function() {
                    var3 = _closure3_slot1;
                    var6 = var3.on;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 10;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.BaseConnectionEvent;
                    var5 = var4.Stats;
                    var4 = var3.handleStats;
                    var4 = var6.bind(var3)(var5, var4);
                    var5 = var3.conn;
                    var4 = var5.setOnVideoCallback;
                    var3 = var3.handleVideo;
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure3_slot2;
                    var3 = var4.getCodecCapabilities;
                    var2 = function(arg1) {
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var6 = 15;
                        var2 = var9[var6];
                        var1 = undefined;
                        var10 = var8.bind(var1)(var2);
                        var7 = var10.getExperimentCodecs;
                        var2 = _closure3_slot1;
                        var5 = var2.experimentFlags;
                        var10 = var7.bind(var10)(var5);
                        var11 = {'type': 'audio', 'name': null, 'priority': 1, 'payloadType': 120};
                        var4 = _closure1_slot20;
                        var5 = var4.OPUS;
                        var11['name'] = var5;
                        var12 = 1;
                        var5 = new Array(1);
                        var5[0] = var11;
                        var6 = var9[var6];
                        var9 = var8.bind(var1)(var6);
                        var8 = var9.filterVideoCodecs;
                        var6 = arg1;
                        var9 = var8.bind(var9)(var6, var10);
                        var8 = var9.map;
                        var6 = function(arg1, arg2) {
                            var2 = arg1;
                            var5 = arg2;
                            var1 = 2;
                            var3 = var1 * var5;
                            var1 = 101;
                            var4 = var1 + var3;
                            var1 = {};
                            var3 = 'video';
                            var1['type'] = var3;
                            var3 = var2.name;
                            var1['name'] = var3;
                            var3 = 1;
                            var5 = var5 + var3;
                            var1['priority'] = var5;
                            var1['payloadType'] = var4;
                            var3 = var4 + var3;
                            var1['rtxPayloadType'] = var3;
                            var3 = var2.encode;
                            var1['encode'] = var3;
                            var2 = var2.decode;
                            var1['decode'] = var2;
                            return var1;
                        };
                        var13 = var8.bind(var9)(var6);
                        var14 = var5;
                        var6 = arraySpread(var14, var13, var12);
                        var2['codecs'] = var5;
                        var6 = var2.setCodecs;
                        var5 = var4.OPUS;
                        var4 = var4.H264;
                        var3 = _closure3_slot0;
                        var3 = var6.bind(var2)(var5, var4, var3);
                        var3 = var2.conn;
                        var2 = var3.startReplay;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1 = arg2;
                var3 = var5.bind(var6)(var4, var3, var1);
                var1 = null;
                var4 = var1 == var3;
                if(var4) { _fun0090_ip = 254; continue _fun0090 }
case 347:
                var2['conn'] = var3;
                var1 = var2;
case 254:
                return var1;
            }
        };
        var6['value'] = var7;
        var1[1] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/media-engine/native/Connection.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();