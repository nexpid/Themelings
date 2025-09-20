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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot38;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot38;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
            _fun0004_ip = 74; continue _fun0004;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot39 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function makeRTXSSRC(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var1 = null;
            var4 = var1 != var3;
            var1 = 0;
            if(!var4) { _fun0005_ip = 27; continue _fun0005 }
 14:
            var1 = 0;
            if(!(var1 !== var3)) { _fun0005_ip = 27; continue _fun0005 }
 20:
            var2 = 1;
            var1 = var3 + var2;
 27:
            return var1;
        }
    };
    var _closure1_slot40 = var1;
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
    var9 = var8.RTCPMessageTypes;
    var _closure1_slot16 = var9;
    var9 = var8.SIMULCAST_HQ_QUALITY;
    var _closure1_slot17 = var9;
    var8 = var8.SIMULCAST_LQ_QUALITY;
    var _closure1_slot18 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.NATIVE_MODE_VALUES;
    var _closure1_slot19 = var9;
    var9 = var8.InputModes;
    var _closure1_slot20 = var9;
    var9 = var8.ConnectionStates;
    var _closure1_slot21 = var9;
    var9 = var8.Codecs;
    var _closure1_slot22 = var9;
    var9 = var8.MediaEngineContextTypes;
    var _closure1_slot23 = var9;
    var9 = var8.SpeakingFlags;
    var _closure1_slot24 = var9;
    var9 = var8.ResolutionTypes;
    var _closure1_slot25 = var9;
    var9 = var8.NativeFeatures;
    var _closure1_slot26 = var9;
    var9 = var8.NoiseCancellerError;
    var _closure1_slot27 = var9;
    var9 = var8.DEFAULT_VOLUME;
    var _closure1_slot28 = var9;
    var9 = var8.DEFAULT_STREAM_VOLUME;
    var _closure1_slot29 = var9;
    var9 = var8.DEFAULT_SOUNDSHARE_VOICE_BITRATE;
    var _closure1_slot30 = var9;
    var9 = var8.DEFAULT_CALL_BITRATE;
    var _closure1_slot31 = var9;
    var9 = var8.DEFAULT_CALL_MIN_BITRATE;
    var _closure1_slot32 = var9;
    var9 = var8.DEFAULT_CALL_MAX_BITRATE;
    var _closure1_slot33 = var9;
    var9 = var8.DEFAULT_PRIORITY_SPEAKER_DUCKING;
    var _closure1_slot34 = var9;
    var8 = var8.PING_INTERVAL;
    var _closure1_slot35 = var8;
    var _closure1_slot36 = var4;
    var4 = 22;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var5 = function Connection(arg1, arg2, arg3) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var7 = arg1;
                var6 = this;
                var1 = _closure1_slot4;
                var3 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var6, var3);
                var12 = new Array(2);
                var12[0] = var7;
                var1 = arg2;
                var12[1] = var1;
                var1 = _closure1_slot7;
                var11 = var1.bind(var5)(var3);
                var3 = _closure1_slot6;
                var1 = _closure1_slot39;
                var1 = var1.bind(var5)();
                if(var1) { _fun0006_ip = 82; continue _fun0006 }
 69:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var6, var12);
                _fun0006_ip = 116; continue _fun0006;
 82:
                var8 = global;
                var10 = var8.Reflect;
                var9 = var10.construct;
                var8 = _closure1_slot7;
                var8 = var8.bind(var5)(var6);
                var8 = var8.constructor;
                var1 = var9.bind(var10)(var11, var12, var8);
 116:
                var1 = var3.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var3 = _closure1_slot36;
                var6 = parseFloat(var3);
                var3 = var6 + 1;
                _closure1_slot36 = var3;
                var3 = 'Native-';
                var3 = var3 + var6;
                var1['mediaEngineConnectionId'] = var3;
                var8 = false;
                var1['selfVideo'] = var8;
                var1['forceAudioNormal'] = var8;
                var1['forceAudioPriority'] = var8;
                var3 = new Array(0);
                var1['codecs'] = var3;
                var1['videoEncoderFallbackPending'] = var8;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var9 = 9;
                var10 = var6[var9];
                var11 = var3.bind(var5)(var10);
                var10 = var11.getVoiceEngine;
                var10 = var10.bind(var11)();
                var10 = var10.DegradationPreference;
                var10 = var10.MAINTAIN_FRAMERATE;
                var1['desktopDegradationPreference'] = var10;
                var10 = var6[var9];
                var11 = var3.bind(var5)(var10);
                var10 = var11.getVoiceEngine;
                var10 = var10.bind(var11)();
                var10 = var10.DegradationPreference;
                var10 = var10.DISABLED;
                var1['sourceDesktopDegradationPreference'] = var10;
                var9 = var6[var9];
                var10 = var3.bind(var5)(var9);
                var9 = var10.getVoiceEngine;
                var9 = var9.bind(var10)();
                var9 = var9.DegradationPreference;
                var9 = var9.BALANCED;
                var1['videoDegradationPreference'] = var9;
                var9 = {};
                var1['localPans'] = var9;
                var9 = {};
                var1['remoteAudioSSRCs'] = var9;
                var9 = {};
                var1['remoteVideoSSRCs'] = var9;
                var4 = _closure1_slot20;
                var4 = var4.VOICE_ACTIVITY;
                var1['inputMode'] = var4;
                var4 = -40;
                var1['vadThreshold'] = var4;
                var4 = true;
                var1['vadAutoThreshold'] = var4;
                var9 = 0.5;
                var1['vadKrispActivationThreshold'] = var9;
                var1['vadUseKrisp'] = var4;
                var10 = 5;
                var1['vadLeading'] = var10;
                var10 = 25;
                var1['vadTrailing'] = var10;
                var10 = 20;
                var1['pttReleaseDelay'] = var10;
                var1['soundshareActive'] = var8;
                var10 = null;
                var1['soundshareId'] = var10;
                var1['soundshareSentSpeakingEvent'] = var8;
                var1['echoCancellation'] = var4;
                var1['noiseSuppression'] = var4;
                var11 = {};
                var11['enabled'] = var4;
                var1['automaticGainControl'] = var11;
                var1['noiseCancellation'] = var8;
                var1['noiseCancellationDuringProcessing'] = var8;
                var1['voiceFilterId'] = var10;
                var1['experimentalEncoders'] = var8;
                var1['hardwareH264'] = var4;
                var1['softwareH264'] = var4;
                var1['attenuationFactor'] = var9;
                var1['attenuateWhileSpeakingSelf'] = var8;
                var1['attenuateWhileSpeakingOthers'] = var4;
                var1['qos'] = var4;
                var8 = 0;
                var1['minimumJitterBufferLevel'] = var8;
                var9 = 100;
                var1['postponeDecodeLevel'] = var9;
                var9 = 60000;
                var1['reconnectInterval'] = var9;
                var1['keyframeInterval'] = var8;
                var1['clipsKeyFrameInterval'] = var8;
                var9 = '';
                var1['videoQualityMeasurement'] = var9;
                var1['videoEncoderExperiments'] = var9;
                var1['numFastUdpReconnects'] = var8;
                var1['simulcastLQDisabledSsrc'] = var5;
                var8 = -1;
                var1['lastPreparedTransitionId'] = var8;
                var1['lastExecutedTransitionId'] = var8;
                var8 = function(arg1, arg2) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var1 = arg2;
                        var3 = _closure1_slot24;
                        var3 = var3.NONE;
                        var5 = 'boolean';
                        var3 = typeof var1;
                        var4 = var1;
                        if(!(var5 === var3)) { _fun0007_ip = 54; continue _fun0007 }
 30:
                        var2 = _closure1_slot24;
                        if(var1) { _fun0007_ip = 45; continue _fun0007 }
 37:
                        var1 = var2.NONE;
                        _fun0007_ip = 51; continue _fun0007;
 45:
                        var1 = var2.VOICE;
 51:
                        var4 = var1;
 54:
                        var3 = _closure3_slot0;
                        var2 = var3.handleSpeakingFlags;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1, var4);
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSpeakingNative'] = var8;
                var8 = function() {
                    var4 = _closure3_slot0;
                    var3 = var4.emit;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.BaseConnectionEvent;
                    var2 = var2.ToggleMuteFromNative;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleNativeMuteToggled'] = var8;
                var8 = function(arg1) {
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
                var1['handleNativeMuteChanged'] = var8;
                var8 = function(arg1, arg2) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var10 = arg1;
                        var5 = arg2;
                        var1 = _closure3_slot0;
                        var2 = var1.localSpeakingFlags;
                        var2[var10] = var5;
                        var1 = var1.userId;
                        if(!(var10 !== var1)) { _fun0008_ip = 48; continue _fun0008 }
 32:
                        var1 = _closure3_slot0;
                        var1 = var1.remoteAudioSSRCs;
                        var9 = var1[var10];
                        _fun0008_ip = 58; continue _fun0008;
 48:
                        var1 = _closure3_slot0;
                        var9 = var1.audioSSRC;
 58:
                        var8 = _closure3_slot0;
                        var7 = var8.emit;
                        var11 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var6 = 10;
                        var4 = var1[var6];
                        var1 = undefined;
                        var4 = var11.bind(var1)(var4);
                        var4 = var4.BaseConnectionEvent;
                        var15 = var4.Speaking;
                        var16 = var8;
                        var14 = var10;
                        var13 = var5;
                        var12 = var9;
                        var4 = var16[var7](var15, var14, var13, var12, var11);
                        var4 = _closure1_slot24;
                        var4 = var4.SOUNDSHARE;
                        var4 = var5 & var4;
                        if(!var4) { _fun0008_ip = 154; continue _fun0008 }
 138:
                        var5 = _closure3_slot0;
                        var7 = var5.soundshareSentSpeakingEvent;
                        var5 = false;
                        var4 = var5 === var7;
 154:
                        if(!var4) { _fun0008_ip = 209; continue _fun0008 }
 157:
                        var3 = _closure3_slot0;
                        var4 = var3.emit;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var2 = var5.bind(var1)(var2);
                        var2 = var2.BaseConnectionEvent;
                        var2 = var2.SoundshareSpeaking;
                        var2 = var4.bind(var3)(var2);
                        var2 = true;
                        var3['soundshareSentSpeakingEvent'] = var2;
 209:
                        return var1;
                    }
                };
                var1['handleSpeakingFlags'] = var8;
                var8 = function() {
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
                var1['handleSpeakingWhileMuted'] = var8;
                var8 = function(arg1) {
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
                var1['handlePing'] = var8;
                var8 = function(arg1, arg2, arg3, arg4) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
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
                        if(!var7) { _fun0009_ip = 71; continue _fun0009 }
 68:
                        var3 = var2;
 71:
                        var2 = arg3;
                        var2 = var5.bind(var6)(var4, var2, var3);
                        return var1;
                    }
                };
                var1['handlePingTimeout'] = var8;
                var8 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var7 = arg1;
                        var _closure4_slot0 = var7;
                        var3 = _closure3_slot0;
                        var3 = var3.videoEncoderFallbackPending;
                        if(var3) { _fun0010_ip = 177; continue _fun0010 }
 28:
                        var2 = _closure3_slot0;
                        var5 = var2.logger;
                        var4 = var5.info;
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var6 = var3.concat;
                        var3 = 'Falling back from current video encoder: ';
                        var3 = var6.bind(var3)(var7);
                        var3 = var4.bind(var5)(var3);
                        var5 = var2.codecs;
                        var4 = var5.map;
                        var3 = function(arg1) {
                            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                                var1 = arg1;
                                var3 = _closure4_slot0;
                                var2 = var1.name;
                                var2 = var3 === var2;
                                if(var2) { _fun0011_ip = 55; continue _fun0011 }
 22:
                                var5 = var1.name;
                                var3 = 'AV1';
                                var3 = var3 === var5;
                                if(!var3) { _fun0011_ip = 52; continue _fun0011 }
 38:
                                var5 = _closure4_slot0;
                                var4 = 'AV1X';
                                var3 = var4 === var5;
 52:
                                var2 = var3;
 55:
                                if(!var2) { _fun0011_ip = 66; continue _fun0011 }
 58:
                                var2 = false;
                                var1['encode'] = var2;
 66:
                                return var1;
                            }
                        };
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.filter;
                        var1 = function(arg1) {
                            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                                var2 = arg1;
                                var3 = var2.type;
                                var1 = 'video';
                                var1 = var1 === var3;
                                if(!var1) { _fun0012_ip = 31; continue _fun0012 }
 19:
                                var4 = var2.encode;
                                var3 = false;
                                var1 = var3 === var4;
 31:
                                if(!var1) { _fun0012_ip = 46; continue _fun0012 }
 34:
                                var3 = var2.decode;
                                var2 = false;
                                var1 = var2 === var3;
 46:
                                var1 = !var1;
                                return var1;
                            }
                        };
                        var1 = var3.bind(var4)(var1);
                        var2['codecs'] = var1;
                        var4 = var2.emit;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 10;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var5.bind(var1)(var3);
                        var1 = var1.BaseConnectionEvent;
                        var3 = var1.VideoEncoderFallback;
                        var1 = var2.codecs;
                        var1 = var4.bind(var2)(var3, var1);
                        var1 = true;
                        var2['videoEncoderFallbackPending'] = var1;
 177:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleVideoEncoderFallback'] = var8;
                var8 = function(arg1, arg2) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                        var3 = _closure1_slot16;
                        var4 = var3.REMB;
                        var3 = arg1;
                        if(!(var3 === var4)) { _fun0013_ip = 97; continue _fun0013 }
 22:
                        var3 = _closure3_slot0;
                        var3 = var3.context;
                        var2 = _closure1_slot23;
                        var2 = var2.STREAM;
                        if(!(var3 === var2)) { _fun0013_ip = 97; continue _fun0013 }
 48:
                        var2 = global;
                        var4 = var2.JSON;
                        var3 = var4.parse;
                        var2 = arg2;
                        var2 = var3.bind(var4)(var2);
                        var _closure4_slot0 = var2;
                        var3 = var2.ssrcs;
                        var2 = var3.forEach;
                        var1 = function(arg1) {
                            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                                var11 = arg1;
                                var _closure5_slot0 = var11;
                                var2 = _closure3_slot0;
                                var4 = var2.videoStreamParameters;
                                var2 = var4.find;
                                var1 = function(arg1) {
                                    var1 = arg1;
                                    var2 = var1.ssrc;
                                    var1 = _closure5_slot0;
                                    var1 = var2 === var1;
                                    return var1;
                                };
                                var7 = var2.bind(var4)(var1);
                                var1 = undefined;
                                if(!(var1 !== var7)) { _fun0014_ip = 380; continue _fun0014 }
 46:
                                var2 = var7.quality;
                                var8 = null;
                                var6 = var8 != var2;
                                var5 = 0;
                                if(!var6) { _fun0014_ip = 66; continue _fun0014 }
 63:
                                var5 = var2;
 66:
                                var2 = 100;
                                if(!(var5 < var2)) { _fun0014_ip = 380; continue _fun0014 }
 76:
                                var5 = var7.type;
                                var2 = 'video';
                                if(!(var2 === var5)) { _fun0014_ip = 380; continue _fun0014 }
 92:
                                var2 = global;
                                var9 = var2.Math;
                                var6 = var9.floor;
                                var5 = _closure4_slot0;
                                var10 = var5.bitrate;
                                var5 = 0.9;
                                var5 = var5 * var10;
                                var10 = var6.bind(var9)(var5);
                                var6 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var5 = 11;
                                var5 = var9[var5];
                                var9 = var6.bind(var1)(var5);
                                var5 = var7.minBitrate;
                                var12 = var8 != var5;
                                var6 = 0;
                                if(!var12) { _fun0014_ip = 179; continue _fun0014 }
 176:
                                var6 = var5;
 179:
                                var12 = var7.maxBitrate;
                                var5 = var10;
                                if(!(var8 != var12)) { _fun0014_ip = 195; continue _fun0014 }
 192:
                                var5 = var12;
 195:
                                var5 = var9.bind(var1)(var10, var6, var5);
                                var6 = var7.targetBitrate;
                                var8 = var8 != var6;
                                var4 = 0;
                                if(!var8) { _fun0014_ip = 220; continue _fun0014 }
 217:
                                var4 = var6;
 220:
                                var9 = var2.Math;
                                var8 = var9.abs;
                                var6 = var5 - var4;
                                var6 = var8.bind(var9)(var6);
                                var8 = var5 + var4;
                                var4 = 2;
                                var4 = var8 / var4;
                                var6 = var6 / var4;
                                var4 = 0.1;
                                var4 = var6 > var4;
                                if(var4) { _fun0014_ip = 283; continue _fun0014 }
 273:
                                var6 = var7.targetBitrate;
                                var4 = var1 === var6;
 283:
                                if(!var4) { _fun0014_ip = 380; continue _fun0014 }
 286:
                                var3 = _closure3_slot0;
                                var6 = var3.logger;
                                var4 = var6.info;
                                var16 = var7.targetBitrate;
                                var2 = var2.HermesInternal;
                                var9 = var2.concat;
                                var19 = 'Updating target bitrate for SSRC ';
                                var17 = ' from ';
                                var15 = ' to ';
                                var18 = var11;
                                var14 = var5;
                                var2 = var19[var9](var18, var17, var16, var15, var14, var13);
                                var2 = var4.bind(var6)(var2);
                                var4 = var3.videoQualityManager;
                                var2 = var4.setGoLiveSimulcastLQTargetBitrate;
                                var2 = var2.bind(var4)(var5);
                                var2 = var3.updateVideoQuality;
                                var2 = var2.bind(var3)();
 380:
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
 97:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleRTCPMessage'] = var8;
                var8 = function(arg1, arg2, arg3, arg4) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                        var10 = arg1;
                        var9 = arg2;
                        var4 = arg3;
                        var8 = arg4;
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var11 = var5.bind(var1)(var2);
                        var7 = _closure3_slot0;
                        var5 = var7.videoStreamParameters;
                        var5 = var11.bind(var1)(var5);
                        var _closure4_slot0 = var5;
                        var7 = var7.userId;
                        if(!(var10 !== var7)) { _fun0015_ip = 208; continue _fun0015 }
 73:
                        var13 = 0;
                        if(!(var9 > var13)) { _fun0015_ip = 324; continue _fun0015 }
 82:
                        var7 = _closure3_slot0;
                        var7 = var7.remoteVideoSSRCs;
                        var7 = var7[var10];
                        if(!(var1 === var7)) { _fun0015_ip = 127; continue _fun0015 }
 100:
                        var7 = _closure3_slot0;
                        var11 = var7.remoteVideoSSRCs;
                        var7 = new Array(1);
                        var7[0] = var9;
                        var11[var10] = var7;
                        _fun0015_ip = 324; continue _fun0015;
 127:
                        var7 = _closure3_slot0;
                        var7 = var7.remoteVideoSSRCs;
                        var11 = var7[var10];
                        var7 = var11.includes;
                        var7 = var7.bind(var11)(var9);
                        if(var7) { _fun0015_ip = 324; continue _fun0015 }
 157:
                        var7 = _closure3_slot0;
                        var11 = var7.remoteVideoSSRCs;
                        var7 = var7.remoteVideoSSRCs;
                        var19 = var7[var10];
                        var7 = new Array(1);
                        var20 = var7;
                        var18 = 0;
                        var13 = arraySpread(var20, var19, var18);
                        var7[var13] = var9;
                        var12 = 1;
                        var12 = var13 + var12;
                        var11[var10] = var7;
                        _fun0015_ip = 324; continue _fun0015;
 208:
                        var7 = null;
                        if(!(var7 != var8)) { _fun0015_ip = 246; continue _fun0015 }
 214:
                        var7 = global;
                        var11 = var7.Array;
                        var7 = var11.isArray;
                        var7 = var7.bind(var11)(var8);
                        if(!var7) { _fun0015_ip = 246; continue _fun0015 }
 235:
                        var11 = var8.length;
                        var7 = 0;
                        if(!(!(var11 > var7))) { _fun0015_ip = 309; continue _fun0015 }
 246:
                        var7 = 0;
                        if(!(!(var9 > var7))) { _fun0015_ip = 266; continue _fun0015 }
 252:
                        var12 = var5[var7];
                        var11 = false;
                        var12['active'] = var11;
                        _fun0015_ip = 324; continue _fun0015;
 266:
                        var12 = var5[var7];
                        var11 = true;
                        var12['active'] = var11;
                        var11 = var5[var7];
                        var11['ssrc'] = var9;
                        var11 = var5[var7];
                        var7 = _closure1_slot40;
                        var7 = var7.bind(var1)(var9);
                        var11['rtxSsrc'] = var7;
                        _fun0015_ip = 324; continue _fun0015;
 309:
                        var7 = var8.forEach;
                        var6 = function(arg1) {
                            var2 = arg1;
                            var _closure5_slot0 = var2;
                            var3 = _closure4_slot0;
                            var2 = var3.forEach;
                            var1 = function(arg1, arg2) {
                                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                                    var5 = arg1;
                                    var3 = var5.rid;
                                    var2 = _closure5_slot0;
                                    var2 = var2.rid;
                                    if(!(var3 === var2)) { _fun0016_ip = 135; continue _fun0016 }
 26:
                                    var2 = _closure3_slot0;
                                    var3 = var2.simulcastLQDisabledSsrc;
                                    var2 = _closure5_slot0;
                                    var2 = var2.ssrc;
                                    var4 = var3 !== var2;
                                    if(!var4) { _fun0016_ip = 66; continue _fun0016 }
 56:
                                    var2 = _closure5_slot0;
                                    var4 = var2.active;
 66:
                                    var3 = _closure4_slot0;
                                    var2 = {};
                                    var8 = var2;
                                    var7 = var5;
                                    var5 = copyDataProperties(var8, var7);
                                    var1 = _closure5_slot0;
                                    var6 = var1.ssrc;
                                    var5 = 'ssrc';
                                    var2[var5] = var6;
                                    var5 = var1.rtxSsrc;
                                    var1 = 'rtxSsrc';
                                    var2[var1] = var5;
                                    var1 = 'active';
                                    var2[var1] = var4;
                                    var1 = arg2;
                                    var3[var1] = var2;
 135:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var6 = var7.bind(var8)(var6);
 324:
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
                        if(!var11) { _fun0015_ip = 396; continue _fun0015 }
 383:
                        var11 = '';
                        var5 = null;
                        if(!(var11 !== var4)) { _fun0015_ip = 396; continue _fun0015 }
 393:
                        var5 = var4;
 396:
                        var4 = _closure3_slot0;
                        var4 = var4.userId;
                        if(!(var10 !== var4)) { _fun0015_ip = 425; continue _fun0015 }
 409:
                        var4 = _closure3_slot0;
                        var4 = var4.remoteAudioSSRCs;
                        var4 = var4[var10];
                        _fun0015_ip = 435; continue _fun0015;
 425:
                        var11 = _closure3_slot0;
                        var4 = var11.audioSSRC;
 435:
                        var3 = _closure1_slot40;
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
                var1['handleVideo'] = var8;
                var8 = function(arg1, arg2, arg3) {
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
                var1['handleFirstFrame'] = var8;
                var8 = function(arg1) {
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
                var1['handleFirstFrameStats'] = var8;
                var8 = function(arg1) {
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
                var1['handleNoInput'] = var8;
                var8 = function(arg1, arg2) {
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
                var1['handleDesktopSourceEnded'] = var8;
                var8 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                        var1 = arg1;
                        if(!var1) { _fun0017_ip = 122; continue _fun0017 }
 6:
                        var3 = _closure3_slot0;
                        var1 = true;
                        var3['soundshareActive'] = var1;
                        var5 = var3.conn;
                        var4 = var5.setTransportOptions;
                        var2 = {};
                        var1 = global;
                        var9 = var1.Math;
                        var8 = var9.max;
                        var7 = _closure1_slot30;
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
 122:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSoundshare'] = var8;
                var8 = function(arg1, arg2, arg3) {
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
                var1['handleSoundshareFailed'] = var8;
                var8 = function() {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        var2 = _closure3_slot0;
                        var3 = false;
                        var2['soundshareActive'] = var3;
                        var2 = var2.destroyed;
                        if(var2) { _fun0018_ip = 58; continue _fun0018 }
 24:
                        var4 = _closure3_slot0;
                        var3 = var4.conn;
                        var2 = var3.setTransportOptions;
                        var1 = {};
                        var4 = var4.voiceBitrate;
                        var1['encodingVoiceBitRate'] = var4;
                        var1 = var2.bind(var3)(var1);
 58:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSoundshareEnded'] = var8;
                var8 = function(arg1) {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                        var5 = arg1;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var2 = var2.BaseConnectionEvent;
                        var2 = var2.ConnectionStateChange;
                        if(!(var5 === var2)) { _fun0019_ip = 69; continue _fun0019 }
 44:
                        var4 = _closure3_slot0;
                        var3 = var4.emit;
                        var2 = var4.connectionState;
                        var2 = var3.bind(var4)(var5, var2);
 69:
                        return var1;
                    }
                };
                var1['handleNewListenerNative'] = var8;
                var8 = function(arg1) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                        var2 = arg1;
                        var3 = _closure3_slot0;
                        var6 = var3.connectionState;
                        var5 = _closure1_slot21;
                        var5 = var5.DISCONNECTED;
                        if(!(var6 === var5)) { _fun0020_ip = 96; continue _fun0020 }
 35:
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
                        _fun0020_ip = 984; continue _fun0020;
 96:
                        var9 = null;
                        if(!(var9 != var2)) { _fun0020_ip = 984; continue _fun0020 }
 105:
                        var5 = _closure3_slot0;
                        var5 = var5.stats;
                        if(!(var9 != var5)) { _fun0020_ip = 974; continue _fun0020 }
 122:
                        var6 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var5 = 13;
                        var7 = var11[var5];
                        var8 = undefined;
                        var14 = var6.bind(var8)(var7);
                        var7 = var2.rtp;
                        var13 = var7.outbound;
                        var10 = 0;
                        var12 = function(arg1, arg2) {
                            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                                var1 = arg1;
                                var4 = arg2;
                                var6 = var1.lost;
                                var7 = var4.packetsLost;
                                var5 = null;
                                var8 = var5 != var7;
                                var2 = 0;
                                if(!var8) { _fun0021_ip = 32; continue _fun0021 }
 29:
                                var2 = var7;
 32:
                                var2 = var6 + var2;
                                var1['lost'] = var2;
                                var2 = var1.sent;
                                var4 = var4.packetsSent;
                                var5 = var5 != var4;
                                var3 = 0;
                                if(!var5) { _fun0021_ip = 66; continue _fun0021 }
 63:
                                var3 = var4;
 66:
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
                            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                                var1 = arg1;
                                var4 = arg2;
                                var6 = var1.lost;
                                var7 = var4.packetsLost;
                                var5 = null;
                                var8 = var5 != var7;
                                var2 = 0;
                                if(!var8) { _fun0022_ip = 32; continue _fun0022 }
 29:
                                var2 = var7;
 32:
                                var2 = var6 + var2;
                                var1['lost'] = var2;
                                var2 = var1.sent;
                                var4 = var4.packetsSent;
                                var5 = var5 != var4;
                                var3 = 0;
                                if(!var5) { _fun0022_ip = 66; continue _fun0022 }
 63:
                                var3 = var4;
 66:
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
                        if(!(var10 !== var5)) { _fun0020_ip = 382; continue _fun0020 }
 277:
                        if(!(var5 > var10)) { _fun0020_ip = 430; continue _fun0020 }
 284:
                        if(!(var6 >= var10)) { _fun0020_ip = 430; continue _fun0020 }
 291:
                        var11 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var7 = 11;
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
                        _fun0020_ip = 430; continue _fun0020;
 382:
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
 430:
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
                        if(!(var9 != var6)) { _fun0020_ip = 974; continue _fun0020 }
 509:
                        if(!(var9 != var4)) { _fun0020_ip = 974; continue _fun0020 }
 516:
                        var5 = var6.framesCaptured;
                        if(!(var9 != var5)) { _fun0020_ip = 974; continue _fun0020 }
 529:
                        var5 = var4.framesCaptured;
                        if(!(var9 != var5)) { _fun0020_ip = 974; continue _fun0020 }
 542:
                        var7 = var6.framesCaptured;
                        var5 = var4.framesCaptured;
                        var5 = var7 - var5;
                        var7 = var6.noiseCancellerFrames;
                        var11 = var5;
                        if(!(var9 != var7)) { _fun0020_ip = 605; continue _fun0020 }
 571:
                        var7 = var4.noiseCancellerFrames;
                        var12 = var9 != var7;
                        var7 = 0;
                        if(!var12) { _fun0020_ip = 602; continue _fun0020 }
 586:
                        var13 = var6.noiseCancellerFrames;
                        var12 = var4.noiseCancellerFrames;
                        var7 = var13 - var12;
 602:
                        var11 = var7;
 605:
                        var7 = _closure3_slot0;
                        var7 = var7.noiseCancellation;
                        if(!var7) { _fun0020_ip = 806; continue _fun0020 }
 621:
                        var7 = 50;
                        if(!(var11 > var7)) { _fun0020_ip = 806; continue _fun0020 }
 631:
                        var7 = var6.noiseCancellerProcessTime;
                        if(!(var9 != var7)) { _fun0020_ip = 806; continue _fun0020 }
 644:
                        var7 = var4.noiseCancellerProcessTime;
                        if(!(var9 != var7)) { _fun0020_ip = 806; continue _fun0020 }
 657:
                        var12 = var6.noiseCancellerProcessTime;
                        var7 = var4.noiseCancellerProcessTime;
                        var7 = var12 - var7;
                        var12 = var7 / var11;
                        var11 = 8;
                        if(!(!(var12 > var11))) { _fun0020_ip = 748; continue _fun0020 }
 684:
                        if(!(var10 === var7)) { _fun0020_ip = 806; continue _fun0020 }
 688:
                        var12 = _closure3_slot0;
                        var11 = var12.emit;
                        var10 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var7 = 10;
                        var7 = var13[var7];
                        var7 = var10.bind(var8)(var7);
                        var7 = var7.BaseConnectionEvent;
                        var10 = var7.NoiseCancellationError;
                        var7 = _closure1_slot27;
                        var7 = var7.FAILED;
                        var7 = var11.bind(var12)(var10, var7);
                        _fun0020_ip = 806; continue _fun0020;
 748:
                        var12 = _closure3_slot0;
                        var11 = var12.emit;
                        var10 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var7 = 10;
                        var7 = var13[var7];
                        var7 = var10.bind(var8)(var7);
                        var7 = var7.BaseConnectionEvent;
                        var10 = var7.NoiseCancellationError;
                        var7 = _closure1_slot27;
                        var7 = var7.CPU_OVERUSE;
                        var7 = var11.bind(var12)(var10, var7);
 806:
                        var7 = _closure3_slot0;
                        var10 = var7.inputMode;
                        var7 = _closure1_slot20;
                        var7 = var7.VOICE_ACTIVITY;
                        if(!(var10 === var7)) { _fun0020_ip = 974; continue _fun0020 }
 833:
                        var7 = _closure3_slot0;
                        var7 = var7.vadAutoThreshold;
                        if(!var7) { _fun0020_ip = 974; continue _fun0020 }
 849:
                        var7 = _closure3_slot0;
                        var7 = var7.vadUseKrisp;
                        if(!var7) { _fun0020_ip = 974; continue _fun0020 }
 862:
                        var7 = 50;
                        if(!(var5 > var7)) { _fun0020_ip = 974; continue _fun0020 }
 869:
                        var7 = var6.voiceActivityDetectorProcessTime;
                        if(!(var9 != var7)) { _fun0020_ip = 974; continue _fun0020 }
 879:
                        var7 = var4.voiceActivityDetectorProcessTime;
                        if(!(var9 != var7)) { _fun0020_ip = 974; continue _fun0020 }
 889:
                        var6 = var6.voiceActivityDetectorProcessTime;
                        var4 = var4.voiceActivityDetectorProcessTime;
                        var4 = var6 - var4;
                        var5 = var4 / var5;
                        var4 = 4;
                        if(!(var5 > var4)) { _fun0020_ip = 974; continue _fun0020 }
 916:
                        var6 = _closure3_slot0;
                        var5 = var6.emit;
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 10;
                        var4 = var9[var4];
                        var4 = var7.bind(var8)(var4);
                        var4 = var4.BaseConnectionEvent;
                        var4 = var4.VoiceActivityDetectorError;
                        var3 = _closure1_slot27;
                        var3 = var3.VAD_CPU_OVERUSE;
                        var3 = var5.bind(var6)(var4, var3);
 974:
                        var1 = _closure3_slot0;
                        var1['stats'] = var2;
 984:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleStats'] = var8;
                var2 = function(arg1, arg2) {
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
                var1['handleMLSFailure'] = var2;
                var2 = arg3;
                var1['videoSupported'] = var2;
                var2 = 14;
                var2 = var6[var2];
                var2 = var3.bind(var5)(var2);
                var5 = var2.Logger;
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var3 = 'Connection(';
                var2 = ')';
                var15 = var6.bind(var3)(var7, var2);
                var3 = var5.prototype;
                var3 = Object.create(var3, {constructor: {value: var5}});
                var16 = var3;
                var2 = new var16[var5](var15, var14);
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
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
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
                var1 = _closure1_slot23;
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
                var7 = var4.getCodecCapabilities;
                var6 = null;
                if(!(var6 == var7)) { _fun0023_ip = 318; continue _fun0023 }
 310:
                var7 = var4.getSupportedVideoCodecs;
                _fun0023_ip = 324; continue _fun0023;
 318:
                var7 = var4.getCodecCapabilities;
 324:
                var _closure3_slot4 = var7;
                var7 = var4.createOwnStreamConnectionWithOptions;
                if(!(var6 == var7)) { _fun0023_ip = 416; continue _fun0023 }
 338:
                var7 = var4.createOwnStreamConnection;
                if(!(var6 == var7)) { _fun0023_ip = 355; continue _fun0023 }
 348:
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
                _fun0023_ip = 467; continue _fun0023;
 355:
                var10 = var5.context;
                var9 = _closure1_slot23;
                var9 = var9.STREAM;
                if(!(var10 === var9)) { _fun0023_ip = 389; continue _fun0023 }
 374:
                var10 = var5.streamUserId;
                var9 = var5.userId;
                if(!(var10 !== var9)) { _fun0023_ip = 399; continue _fun0023 }
 389:
                var9 = var4.createVoiceConnection;
                _fun0023_ip = 405; continue _fun0023;
 399:
                var9 = var4.createOwnStreamConnection;
 405:
                var _closure3_slot5 = var9;
                var7 = function n(arg1, arg2, arg3) {
                    var1 = arg2;
                    var9 = _closure3_slot5;
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
                _fun0023_ip = 467; continue _fun0023;
 416:
                var9 = var5.context;
                var3 = _closure1_slot23;
                var3 = var3.STREAM;
                if(!(var9 === var3)) { _fun0023_ip = 450; continue _fun0023 }
 435:
                var9 = var5.streamUserId;
                var3 = var5.userId;
                if(!(var9 !== var3)) { _fun0023_ip = 458; continue _fun0023 }
 450:
                var3 = var4.createVoiceConnectionWithOptions;
                _fun0023_ip = 464; continue _fun0023;
 458:
                var3 = var4.createOwnStreamConnectionWithOptions;
 464:
                var7 = var3;
 467:
                var4 = var5.userId;
                var3 = function(arg1, arg2) {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                        var4 = arg1;
                        var3 = arg2;
                        var5 = _closure3_slot0;
                        var5 = var5.destroyed;
                        if(var5) { _fun0024_ip = 301; continue _fun0024 }
 27:
                        var5 = null;
                        if(!(var5 != var4)) { _fun0024_ip = 44; continue _fun0024 }
 33:
                        var6 = '';
                        if(!(var6 === var4)) { _fun0024_ip = 224; continue _fun0024 }
 44:
                        if(!(var5 != var3)) { _fun0024_ip = 188; continue _fun0024 }
 51:
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
                        var5 = _closure3_slot4;
                        var3 = undefined;
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
                            var1 = 'Available codecs: ';
                            var1 = var8.bind(var1)(var9);
                            var1 = var5.bind(var6)(var1);
                            var9 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var6 = 15;
                            var8 = var12[var6];
                            var1 = undefined;
                            var13 = var9.bind(var1)(var8);
                            var10 = var13.getExperimentCodecs;
                            var8 = var7.experimentFlags;
                            var10 = var10.bind(var13)(var8);
                            var14 = var7.logger;
                            var13 = var14.info;
                            var15 = var4.JSON;
                            var8 = var15.stringify;
                            var16 = var8.bind(var15)(var10);
                            var8 = var4.HermesInternal;
                            var15 = var8.concat;
                            var8 = 'Experimental codecs: ';
                            var8 = var15.bind(var8)(var16);
                            var8 = var13.bind(var14)(var8);
                            var13 = {'type': 'audio', 'name': null, 'priority': 1, 'payloadType': 120};
                            var5 = _closure1_slot22;
                            var5 = var5.OPUS;
                            var13['name'] = var5;
                            var17 = 1;
                            var5 = new Array(1);
                            var5[0] = var13;
                            var6 = var12[var6];
                            var9 = var9.bind(var1)(var6);
                            var6 = var9.filterVideoCodecs;
                            var10 = var6.bind(var9)(var11, var10);
                            var9 = var10.map;
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
                            var18 = var9.bind(var10)(var6);
                            var19 = var5;
                            var6 = arraySpread(var19, var18, var17);
                            var7['codecs'] = var5;
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
                                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
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
                                    if(var1) { _fun0025_ip = 143; continue _fun0025 }
 117:
                                    var6 = _closure3_slot0;
                                    var7 = var6.context;
                                    var6 = _closure1_slot23;
                                    var6 = var6.STREAM;
                                    var1 = var7 === var6;
 143:
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
                                    var1 = var1.setOnNativeMuteToggleCallback;
                                    var2 = null;
                                    if(!(var2 != var1)) { _fun0025_ip = 235; continue _fun0025 }
 210:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setOnNativeMuteToggleCallback;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handleNativeMuteToggled;
                                    var1 = var4.bind(var6)(var1);
 235:
                                    var1 = _closure3_slot2;
                                    var1 = var1.setOnNativeMuteChangedCallback;
                                    if(!(var2 != var1)) { _fun0025_ip = 274; continue _fun0025 }
 249:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setOnNativeMuteChangedCallback;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handleNativeMuteChanged;
                                    var1 = var4.bind(var6)(var1);
 274:
                                    var1 = _closure3_slot2;
                                    var1 = var1.setOnSpeakingWhileMutedCallback;
                                    if(!(var2 != var1)) { _fun0025_ip = 313; continue _fun0025 }
 288:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setOnSpeakingWhileMutedCallback;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handleSpeakingWhileMuted;
                                    var1 = var4.bind(var6)(var1);
 313:
                                    var1 = _closure3_slot2;
                                    var1 = var1.setPingInterval;
                                    if(!(var2 != var1)) { _fun0025_ip = 349; continue _fun0025 }
 327:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setPingInterval;
                                    var1 = _closure1_slot35;
                                    var1 = var4.bind(var6)(var1);
 349:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setPingCallback;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handlePing;
                                    var1 = var4.bind(var6)(var1);
                                    var1 = _closure3_slot2;
                                    var1 = var1.setPingTimeoutCallback;
                                    if(!(var2 != var1)) { _fun0025_ip = 413; continue _fun0025 }
 388:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setPingTimeoutCallback;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handlePingTimeout;
                                    var1 = var4.bind(var6)(var1);
 413:
                                    var1 = _closure3_slot2;
                                    var1 = var1.setOnVideoEncoderFallbackCallback;
                                    if(!(var2 != var1)) { _fun0025_ip = 452; continue _fun0025 }
 427:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setOnVideoEncoderFallbackCallback;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handleVideoEncoderFallback;
                                    var1 = var4.bind(var6)(var1);
 452:
                                    var1 = _closure3_slot2;
                                    var1 = var1.setOnRtcpMessageCallback;
                                    if(!(var2 != var1)) { _fun0025_ip = 491; continue _fun0025 }
 466:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setOnRtcpMessageCallback;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handleRTCPMessage;
                                    var1 = var4.bind(var6)(var1);
 491:
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
                                    var8 = var1.voiceFilterId;
                                    var8 = var2 != var8;
                                    var4['voiceFilters'] = var8;
                                    var4 = var6.bind(var7)(var4);
                                    var6 = var7.setNoInputThreshold;
                                    var4 = -100;
                                    var4 = var6.bind(var7)(var4);
                                    var6 = var7.setNoInputCallback;
                                    var4 = var1.handleNoInput;
                                    var4 = var6.bind(var7)(var4);
                                    var1 = var1.videoSupported;
                                    if(!var1) { _fun0025_ip = 912; continue _fun0025 }
 653:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setOnVideoCallback;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handleVideo;
                                    var1 = var4.bind(var6)(var1);
                                    var1 = _closure3_slot2;
                                    var1 = var1.setOnFirstFrameCallback;
                                    if(!(var2 != var1)) { _fun0025_ip = 717; continue _fun0025 }
 692:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setOnFirstFrameCallback;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handleFirstFrame;
                                    var1 = var4.bind(var6)(var1);
 717:
                                    var1 = _closure3_slot2;
                                    var1 = var1.setOnFirstFrameDeliveredStatsCallback;
                                    if(!(var2 != var1)) { _fun0025_ip = 756; continue _fun0025 }
 731:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setOnFirstFrameDeliveredStatsCallback;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handleFirstFrameStats;
                                    var1 = var4.bind(var6)(var1);
 756:
                                    var1 = _closure3_slot2;
                                    var1 = var1.setOnDesktopSourceEnded;
                                    if(!(var2 != var1)) { _fun0025_ip = 795; continue _fun0025 }
 770:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setOnDesktopSourceEnded;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handleDesktopSourceEnded;
                                    var1 = var4.bind(var6)(var1);
 795:
                                    var1 = _closure3_slot2;
                                    var1 = var1.setOnSoundshare;
                                    if(!(var2 != var1)) { _fun0025_ip = 834; continue _fun0025 }
 809:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setOnSoundshare;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handleSoundshare;
                                    var1 = var4.bind(var6)(var1);
 834:
                                    var1 = _closure3_slot2;
                                    var1 = var1.setOnSoundshareEnded;
                                    if(!(var2 != var1)) { _fun0025_ip = 873; continue _fun0025 }
 848:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setOnSoundshareEnded;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handleSoundshareEnded;
                                    var1 = var4.bind(var6)(var1);
 873:
                                    var1 = _closure3_slot2;
                                    var1 = var1.setOnSoundshareFailed;
                                    if(!(var2 != var1)) { _fun0025_ip = 912; continue _fun0025 }
 887:
                                    var6 = _closure3_slot2;
                                    var4 = var6.setOnSoundshareFailed;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handleSoundshareFailed;
                                    var1 = var4.bind(var6)(var1);
 912:
                                    var1 = _closure3_slot2;
                                    var1 = var1.setOnMLSFailureCallback;
                                    if(!(var2 != var1)) { _fun0025_ip = 951; continue _fun0025 }
 926:
                                    var4 = _closure3_slot2;
                                    var2 = var4.setOnMLSFailureCallback;
                                    var1 = _closure3_slot0;
                                    var1 = var1.handleMLSFailure;
                                    var1 = var2.bind(var4)(var1);
 951:
                                    var2 = _closure3_slot0;
                                    var6 = var2.setConnectionState;
                                    var4 = _closure1_slot21;
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
                                        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
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
                                            if(var5) { _fun0026_ip = 63; continue _fun0026 }
 49:
                                            var6 = var7.join;
                                            var5 = ',';
                                            var1 = var6.bind(var7)(var5);
 63:
                                            var4 = var4 != var1;
                                            var7 = 0;
                                            if(!var4) { _fun0026_ip = 75; continue _fun0026 }
 72:
                                            var7 = var1;
 75:
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
                                    if(!var2) { _fun0025_ip = 1300; continue _fun0025 }
 1245:
                                    var8 = var4[var3];
                                    var2 = _closure3_slot0;
                                    var2 = var2.userId;
                                    if(!(var8 !== var2)) { _fun0025_ip = 1288; continue _fun0025 }
 1262:
                                    var7 = _closure3_slot0;
                                    var6 = var7.setSpeakingFlags;
                                    var2 = var7.localSpeakingFlags;
                                    var2 = var2[var8];
                                    var2 = var6.bind(var7)(var8, var2);
 1288:
                                    var3 = var3 + 1;
                                    var2 = var4.length;
                                    if(var3 < var2) { _fun0025_ip = 1245; continue _fun0025 }
 1300:
                                    return var1;
                                }
                            };
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var2 = var5.bind(var3)(var2);
                        _fun0024_ip = 301; continue _fun0024;
 188:
                        var2 = global;
                        var5 = var2.Error;
                        var2 = var5.prototype;
                        var3 = Object.create(var2, {constructor: {value: var5}});
                        var19 = 'Invalid transport info';
                        var20 = var3;
                        var2 = new var20[var5](var19, var18);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
 224:
                        var3 = _closure3_slot0;
                        var5 = var3.setConnectionState;
                        var2 = _closure1_slot21;
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
 301:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4 = var7.bind(var1)(var4, var8, var3);
                var5['conn'] = var4;
                var _closure3_slot2 = var4;
                var3 = var4.setSecureFramesStateUpdateCallback;
                if(!(var6 != var3)) { _fun0023_ip = 520; continue _fun0023 }
 504:
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
 520:
                var3 = var4.setDesktopSourceStatusCallback;
                if(!(var6 != var3)) { _fun0023_ip = 546; continue _fun0023 }
 530:
                var3 = var4.setDesktopSourceStatusCallback;
                var2 = function(arg1) {
                    _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                        var1 = arg1;
                        var3 = var1.type;
                        var2 = 'videohook_start';
                        if(!(var2 !== var3)) { _fun0027_ip = 632; continue _fun0027 }
 21:
                        var3 = var1.type;
                        var2 = 'videohook_stop';
                        if(!(var2 !== var3)) { _fun0027_ip = 575; continue _fun0027 }
 39:
                        var3 = var1.type;
                        var2 = 'videohook_initialize';
                        if(!(var2 !== var3)) { _fun0027_ip = 477; continue _fun0027 }
 57:
                        var3 = var1.type;
                        var2 = 'screenshare_finish';
                        if(!(var2 !== var3)) { _fun0027_ip = 245; continue _fun0027 }
 75:
                        var3 = var1.type;
                        var2 = 'video_state';
                        if(!(var2 !== var3)) { _fun0027_ip = 179; continue _fun0027 }
 90:
                        var4 = var1.type;
                        var3 = var4.startsWith;
                        var2 = 'soundshare_';
                        var2 = var3.bind(var4)(var2);
                        if(!var2) { _fun0027_ip = 687; continue _fun0027 }
 118:
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
                        _fun0027_ip = 687; continue _fun0027;
 179:
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
                        _fun0027_ip = 687; continue _fun0027;
 245:
                        var20 = _closure3_slot0;
                        var19 = var20.emit;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 10;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var2 = var2.BaseConnectionEvent;
                        var18 = var2.ScreenshareFinish;
                        var17 = var1.screenshareFrames;
                        var16 = var1.videohookFrames;
                        var15 = var1.hybridDxgiFrames;
                        var14 = var1.hybridGdiFrames;
                        var13 = var1.hybridVideohookFrames;
                        var12 = var1.hybridGraphicsCaptureFrames;
                        var11 = var1.hybridCaptureMethodSwitches;
                        var10 = var1.hybridGdiBitBltFrames;
                        var9 = var1.hybridGdiPrintWindowFrames;
                        var8 = var1.quartzFrames;
                        var7 = var1.desktopCapturerType;
                        var2 = null;
                        if(!(var2 == var7)) { _fun0027_ip = 395; continue _fun0027 }
 389:
                        var7 = var1.desktop_capturer_type;
 395:
                        var25 = var1.screens;
                        var24 = var1.windows;
                        var23 = var1.activity;
                        var22 = var1.goLiveCameraFrames;
                        var21 = var1.screenCaptureKitFrames;
                        var38 = var20;
                        var37 = var18;
                        var36 = var17;
                        var35 = var16;
                        var34 = var15;
                        var33 = var14;
                        var32 = var13;
                        var31 = var12;
                        var30 = var11;
                        var29 = var10;
                        var28 = var9;
                        var27 = var8;
                        var26 = var7;
                        var2 = var38[var19](var37, var36, var35, var34, var33, var32, var31, var30, var29, var28, var27, var26, var25, var24, var23, var22, var21, var20);
                        _fun0027_ip = 687; continue _fun0027;
 477:
                        var9 = _closure3_slot0;
                        var8 = var9.emit;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 10;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var2 = var2.BaseConnectionEvent;
                        var37 = var2.VideoHookInitialize;
                        var36 = var1.backend;
                        var35 = var1.format;
                        var34 = var1.framebufferFormat;
                        var33 = var1.sampleCount;
                        var32 = var1.success;
                        var31 = var1.reinitialization;
                        var38 = var9;
                        var1 = var38[var8](var37, var36, var35, var34, var33, var32, var31, var30);
                        _fun0027_ip = 687; continue _fun0027;
 575:
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
                        _fun0027_ip = 687; continue _fun0027;
 632:
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
 687:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
 546:
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
            var6 = this;
            var _closure3_slot0 = var6;
            var3 = var6.conn;
            var2 = var3.destroy;
            var2 = var2.bind(var3)();
            var2 = global;
            var4 = var2.Object;
            var3 = var4.keys;
            var2 = var6.localSpeakingFlags;
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var2 = function(arg1) {
                var1 = _closure3_slot0;
                var2 = var1.userId;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.forEach;
            var2 = function(arg1) {
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
                var1 = _closure1_slot24;
                var9 = var1.NONE;
                var1 = var5.remoteAudioSSRCs;
                var8 = var1[var6];
                var12 = var5;
                var10 = var6;
                var1 = var12[var4](var11, var10, var9, var8, var7);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var3 = var6.setConnectionState;
            var2 = _closure1_slot21;
            var2 = var2.DISCONNECTED;
            var2 = var3.bind(var6)(var2);
            var10 = _closure2_slot0;
            var4 = function _superPropGet(arg1, arg2, arg3, arg4) {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                    var5 = arg1;
                    var7 = arg3;
                    var _closure4_slot0 = var7;
                    var6 = _closure1_slot8;
                    var4 = _closure1_slot7;
                    var1 = 1;
                    var3 = 3;
                    var8 = var1 & var3;
                    var1 = var5;
                    if(!var8) { _fun0028_ip = 44; continue _fun0028 }
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
                    if(!var3) { _fun0028_ip = 98; continue _fun0028 }
 79:
                    var4 = 'function';
                    var3 = typeof var5;
                    var1 = var5;
                    if(!(var4 === var3)) { _fun0028_ip = 98; continue _fun0028 }
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
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'setCodecs';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                var2 = this;
                var4 = var2.conn;
                var3 = var4.setTransportOptions;
                var7 = var2.getCodecOptions;
                var6 = arg1;
                var5 = arg2;
                var1 = arg3;
                var1 = var7.bind(var2)(var6, var5, var1);
                var1 = var3.bind(var4)(var1);
                var1 = var2.videoEncoderFallbackPending;
                if(!var1) { _fun0029_ip = 61; continue _fun0029 }
 53:
                var1 = false;
                var2['videoEncoderFallbackPending'] = var1;
 61:
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
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var4 = var2.connectionState;
                var3 = _closure1_slot21;
                var3 = var3.DISCONNECTED;
                if(!(var4 !== var3)) { _fun0030_ip = 135; continue _fun0030 }
 32:
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
                    _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var3 = _closure3_slot0;
                        var3 = var3.conn;
                        var3 = var3.getFilteredStats;
                        var4 = null;
                        if(!(var4 == var3)) { _fun0031_ip = 135; continue _fun0031 }
 34:
                        var3 = _closure3_slot0;
                        var3 = var3.conn;
                        var3 = var3.getStats;
                        if(!(var4 == var3)) { _fun0031_ip = 107; continue _fun0031 }
 54:
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
                        _fun0031_ip = 175; continue _fun0031;
 107:
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
                        _fun0031_ip = 175; continue _fun0031;
 135:
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
 175:
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
                    _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
                        var2 = arg1;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 16;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var3 = var3.TimeoutError;
                        var3 = var2 instanceof var3;
                        if(var3) { _fun0032_ip = 43; continue _fun0032 }
 41:
                        throw var2;
 43:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                _fun0030_ip = 156; continue _fun0030;
 135:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.resolve;
                var2 = null;
                var1 = var3.bind(var4)(var2);
 156:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'createUser';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
                var4 = arg1;
                var13 = arg2;
                var8 = arg3;
                var3 = this;
                var1 = var3.remoteAudioSSRCs;
                var7 = var1[var4];
                var1 = var3.remoteVideoSSRCs;
                var10 = var1[var4];
                var1 = null;
                if(!(var1 != var7)) { _fun0033_ip = 96; continue _fun0033 }
 38:
                var2 = 0;
                if(!(var2 === var13)) { _fun0033_ip = 96; continue _fun0033 }
 44:
                var6 = var3.logger;
                var5 = var6.info;
                var2 = global;
                var2 = var2.HermesInternal;
                var11 = var2.concat;
                var9 = 'Ignoring attempt to recreate user ';
                var2 = ' with 0 audio SSRC';
                var2 = var11.bind(var9)(var4, var2);
                var2 = var5.bind(var6)(var2);
                _fun0033_ip = 578; continue _fun0033;
 96:
                var2 = undefined;
                if(!(var2 === var10)) { _fun0033_ip = 108; continue _fun0033 }
 102:
                var9 = new Array(0);
                _fun0033_ip = 134; continue _fun0033;
 108:
                var6 = new Array(0);
                var16 = 0;
                var18 = var6;
                var17 = var10;
                var5 = arraySpread(var18, var17, var16);
                var5 = var6.sort;
                var9 = var5.bind(var6)();
 134:
                if(!(var2 !== var8)) { _fun0033_ip = 166; continue _fun0033 }
 138:
                var6 = new Array(0);
                var16 = 0;
                var18 = var6;
                var17 = var8;
                var5 = arraySpread(var18, var17, var16);
                var5 = var6.sort;
                var8 = var5.bind(var6)();
                _fun0033_ip = 180; continue _fun0033;
 166:
                var5 = var9;
                if(!(var1 == var5)) { _fun0033_ip = 177; continue _fun0033 }
 173:
                var5 = new Array(0);
 177:
                var8 = var5;
 180:
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
                if(!(var1 == var8)) { _fun0033_ip = 242; continue _fun0033 }
 238:
                var8 = new Array(0);
 242:
                var9[var4] = var8;
                var8 = var3.userId;
                if(!(var8 !== var4)) { _fun0033_ip = 578; continue _fun0033 }
 258:
                if(!(var7 === var13)) { _fun0033_ip = 268; continue _fun0033 }
 262:
                if(!var6) { _fun0033_ip = 578; continue _fun0033 }
 268:
                var12 = 0;
                var8 = 0;
                if(!(var2 !== var11)) { _fun0033_ip = 294; continue _fun0033 }
 276:
                var6 = var11.length;
                var6 = var6 > var12;
                var8 = 0;
                if(!var6) { _fun0033_ip = 294; continue _fun0033 }
 290:
                var8 = var11[var12];
 294:
                var7 = {};
                var7['id'] = var4;
                var7['ssrc'] = var13;
                var7['videoSsrc'] = var8;
                var7['videoSsrcs'] = var11;
                var6 = _closure1_slot40;
                var6 = var6.bind(var2)(var8);
                var7['rtxSsrc'] = var6;
                var6 = var3.getLocalMute;
                var6 = var6.bind(var3)(var4);
                var7['mute'] = var6;
                var6 = var3.getLocalVolume;
                var6 = var6.bind(var3)(var4);
                var7['volume'] = var6;
                var8 = var3.connectionState;
                var6 = _closure1_slot21;
                var6 = var6.CONNECTED;
                if(!(var8 === var6)) { _fun0033_ip = 495; continue _fun0033 }
 381:
                var8 = var3.logger;
                var6 = var8.info;
                var9 = var1 == var11;
                var2 = undefined;
                if(var9) { _fun0033_ip = 415; continue _fun0033 }
 401:
                var10 = var11.join;
                var9 = ',';
                var2 = var10.bind(var11)(var9);
 415:
                var9 = var1 != var2;
                var12 = 0;
                if(!var9) { _fun0033_ip = 427; continue _fun0033 }
 424:
                var12 = var2;
 427:
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
 495:
                var2 = var3.localPans;
                var2 = var2[var4];
                if(!(var1 != var2)) { _fun0033_ip = 532; continue _fun0033 }
 509:
                var7 = var3.setLocalPan;
                var6 = var2.left;
                var2 = var2.right;
                var2 = var7.bind(var3)(var4, var6, var2);
 532:
                var2 = var3.localSpeakingFlags;
                var2 = var2[var4];
                var1 = var1 != var2;
                if(!var1) { _fun0033_ip = 563; continue _fun0033 }
 549:
                var5 = _closure1_slot24;
                var5 = var5.NONE;
                var1 = var2 !== var5;
 563:
                if(!var1) { _fun0033_ip = 578; continue _fun0033 }
 566:
                var1 = var3.setSpeakingFlags;
                var1 = var1.bind(var3)(var4, var2);
 578:
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
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
                var2 = arg1;
                var1 = this;
                var3 = var1.remoteAudioSSRCs;
                var4 = var3[var2];
                var3 = null;
                if(!(var3 != var4)) { _fun0034_ip = 59; continue _fun0034 }
 22:
                var4 = var1.conn;
                var3 = var4.destroyUser;
                var3 = var3.bind(var4)(var2);
                var3 = var1.remoteAudioSSRCs;
                var3 = delete var3[var2];
                var1 = var1.remoteVideoSSRCs;
                var1 = delete var1[var2];
 59:
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
        var6 = 'setSelfDeaf';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = arg1;
            var1 = this;
            var1['selfDeaf'] = var3;
            var2 = var1.conn;
            var1 = var2.setSelfDeafen;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'setSoundshareSource';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
                var4 = arg1;
                var1 = this;
                var2 = var1.soundshareId;
                if(!(var2 === var4)) { _fun0035_ip = 25; continue _fun0035 }
 16:
                var2 = var1.soundshareSentSpeakingEvent;
                if(var2) { _fun0035_ip = 112; continue _fun0035 }
 25:
                var3 = var1.context;
                var2 = _closure1_slot23;
                var2 = var2.STREAM;
                if(!(var3 === var2)) { _fun0035_ip = 112; continue _fun0035 }
 47:
                var1['soundshareId'] = var4;
                var2 = false;
                var1['soundshareSentSpeakingEvent'] = var2;
                var2 = null;
                if(!(var2 === var4)) { _fun0035_ip = 69; continue _fun0035 }
 67:
                var4 = 0;
 69:
                var3 = var1.conn;
                var2 = var3.setTransportOptions;
                var1 = {};
                var1['soundsharePid'] = var4;
                var4 = true;
                var1['soundshareEventDriven'] = var4;
                var4 = arg2;
                var1['soundshareLoopback'] = var4;
                var1 = var2.bind(var3)(var1);
 112:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[9] = var1;
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
        var2[10] = var1;
        var1 = {};
        var6 = 'fastUdpReconnect';
        var1['key'] = var6;
        var6 = function value() {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
                var1 = this;
                var2 = var1.conn;
                var3 = var2.fastUdpReconnect;
                var2 = null;
                if(!(var2 != var3)) { _fun0036_ip = 56; continue _fun0036 }
 21:
                var3 = var1.numFastUdpReconnects;
                var2 = 1;
                var2 = var3 + var2;
                var1['numFastUdpReconnects'] = var2;
                var2 = var1.conn;
                var1 = var2.fastUdpReconnect;
                var1 = var1.bind(var2)();
 56:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'getNumFastUdpReconnects';
        var1['key'] = var6;
        var6 = function value() {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
                var2 = this;
                var1 = var2.conn;
                var3 = var1.fastUdpReconnect;
                var1 = null;
                var3 = var1 != var3;
                if(!var3) { _fun0037_ip = 30; continue _fun0037 }
 24:
                var1 = var2.numFastUdpReconnects;
 30:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'wasRemoteDisconnected';
        var1['key'] = var6;
        var6 = function value() {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
                var1 = this;
                var3 = var1.conn;
                var2 = var3.wasRemoteDisconnected;
                var1 = null;
                if(!(var1 != var2)) { _fun0038_ip = 31; continue _fun0038 }
 21:
                var1 = var2.call;
                var1 = var1.bind(var2)(var3);
 31:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[13] = var1;
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
        var2[14] = var1;
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
        var2[15] = var1;
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
        var2[16] = var1;
        var1 = {};
        var6 = 'setClipRecordUser';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
                var1 = this;
                var2 = var1.destroyed;
                if(var2) { _fun0039_ip = 110; continue _fun0039 }
 12:
                var6 = var1.conn;
                var5 = var6.setClipRecordUser;
                var2 = null;
                if(!(var2 != var5)) { _fun0039_ip = 110; continue _fun0039 }
 30:
                var4 = var5.call;
                var2 = var1.context;
                var1 = _closure1_slot23;
                var1 = var1.STREAM;
                var3 = 'user';
                if(!(var2 === var1)) { _fun0039_ip = 65; continue _fun0039 }
 61:
                var3 = 'application';
 65:
                var2 = var3.concat;
                var1 = 'Video';
                var8 = 'audio';
                var7 = arg2;
                if(!(var8 === var7)) { _fun0039_ip = 89; continue _fun0039 }
 85:
                var1 = 'Audio';
 89:
                var10 = var2.bind(var3)(var1);
                var11 = arg1;
                var9 = arg3;
                var13 = var5;
                var12 = var6;
                var1 = var13[var4](var12, var11, var10, var9, var8);
 110:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[17] = var1;
        var1 = {};
        var6 = 'setClipsKeyFrameInterval';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
 0:
                var4 = this;
                var2 = var4.context;
                var1 = _closure1_slot23;
                var1 = var1.STREAM;
                if(!(var2 === var1)) { _fun0040_ip = 85; continue _fun0040 }
 25:
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
 85:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[18] = var1;
        var1 = {};
        var6 = 'setViewerSideClip';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
 0:
                var1 = this;
                var3 = var1.context;
                var2 = _closure1_slot23;
                var2 = var2.STREAM;
                if(!(var3 === var2)) { _fun0041_ip = 54; continue _fun0041 }
 25:
                var3 = var1.conn;
                var2 = var3.setTransportOptions;
                var1 = {};
                var4 = arg1;
                var1['enableViewerSideClip'] = var4;
                var1 = var2.bind(var3)(var1);
 54:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[19] = var1;
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
        var2[20] = var1;
        var1 = {};
        var6 = 'setQualityDecoupling';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
 0:
                var1 = this;
                var3 = var1.context;
                var2 = _closure1_slot23;
                var2 = var2.STREAM;
                if(!(var3 === var2)) { _fun0042_ip = 54; continue _fun0042 }
 25:
                var3 = var1.conn;
                var2 = var3.setTransportOptions;
                var1 = {};
                var4 = arg1;
                var1['enableQualityDecoupling'] = var4;
                var1 = var2.bind(var3)(var1);
 54:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[21] = var1;
        var1 = {};
        var6 = 'getLocalVolume';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
 0:
                var3 = this;
                var2 = var3.localVolumes;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                if(!(var1 == var2)) { _fun0043_ip = 57; continue _fun0043 }
 22:
                var5 = var3.context;
                var3 = _closure1_slot23;
                var3 = var3.DEFAULT;
                if(!(var5 !== var3)) { _fun0043_ip = 50; continue _fun0043 }
 44:
                var3 = _closure1_slot29;
                _fun0043_ip = 54; continue _fun0043;
 50:
                var3 = _closure1_slot28;
 54:
                var2 = var3;
 57:
                if(!(var1 == var2)) { _fun0043_ip = 68; continue _fun0043 }
 61:
                var2 = _closure1_slot28;
 68:
                var1 = _closure1_slot28;
                var1 = var2 / var1;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[22] = var1;
        var1 = {};
        var6 = 'setLocalVolume';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
 0:
                var6 = arg1;
                var5 = arg2;
                var2 = this;
                var4 = var6;
                var1 = var5;
                var3 = var2.localVolumes;
                var3[var6] = var5;
 25: // try_start_0
                var7 = var2.conn;
                var6 = var7.setLocalVolume;
                var5 = var4;
                var3 = var2.getLocalVolume;
                var3 = var3.bind(var2)(var5);
                var3 = var6.bind(var7)(var5, var3);
 57: // try_end0
                _fun0044_ip = 114; continue _fun0044;
 59: // catch_target0
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
 114:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[23] = var1;
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
        var2[24] = var1;
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
        var2[25] = var1;
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
        var2[26] = var1;
        var1 = {};
        var6 = 'setCanHavePriority';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
 0:
                var1 = this;
                var5 = var1.conn;
                var4 = var5.setRemoteUserCanHavePriority;
                var1 = null;
                if(!(var1 != var4)) { _fun0045_ip = 41; continue _fun0045 }
 23:
                var3 = var4.call;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var5, var2, var1);
 41:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[27] = var1;
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
        var2[28] = var1;
        var1 = {};
        var6 = 'setVoiceBitRate';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
 0:
                var2 = arg1;
                var1 = this;
                var3 = var1.voiceBitrate;
                if(!(var3 !== var2)) { _fun0046_ip = 90; continue _fun0046 }
 16:
                var1['voiceBitrate'] = var2;
                var6 = var1.voiceBitrate;
                var2 = var1.soundshareActive;
                var4 = var6;
                if(!var2) { _fun0046_ip = 66; continue _fun0046 }
 40:
                var2 = global;
                var5 = var2.Math;
                var3 = var5.max;
                var2 = _closure1_slot30;
                var4 = var3.bind(var5)(var2, var6);
 66:
                var3 = var1.conn;
                var2 = var3.setTransportOptions;
                var1 = {};
                var1['encodingVoiceBitRate'] = var4;
                var1 = var2.bind(var3)(var1);
 90:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[29] = var1;
        var1 = {};
        var6 = 'setCameraBitRate';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
 0:
                var4 = arg2;
                var5 = arg3;
                var1 = this;
                var8 = null;
                if(!(var8 == var5)) { _fun0047_ip = 40; continue _fun0047 }
 15:
                if(!(var8 == var4)) { _fun0047_ip = 40; continue _fun0047 }
 19:
                var6 = var1.videoQualityManager;
                var3 = var6.setQualityOverwrite;
                var2 = {};
                var2 = var3.bind(var6)(var2);
                _fun0047_ip = 88; continue _fun0047;
 40:
                var6 = var1.videoQualityManager;
                var3 = var6.setQualityOverwrite;
                var2 = {};
                var7 = var4;
                if(!(var8 != var5)) { _fun0047_ip = 73; continue _fun0047 }
 61:
                var8 = 0;
                var7 = var4;
                if(!(var5 > var8)) { _fun0047_ip = 73; continue _fun0047 }
 70:
                var7 = var5;
 73:
                var2['bitrateMin'] = var7;
                var2['bitrateMax'] = var4;
                var2 = var3.bind(var6)(var2);
 88:
                var2 = var1.hasDesktopSource;
                var2 = var2.bind(var1)();
                if(var2) { _fun0047_ip = 138; continue _fun0047 }
 101:
                var3 = var1.conn;
                var2 = var3.setTransportOptions;
                var1 = {};
                var6 = arg1;
                var1['encodingVideoBitRate'] = var6;
                var1['encodingVideoMinBitRate'] = var5;
                var1['encodingVideoMaxBitRate'] = var4;
                var1 = var2.bind(var3)(var1);
 138:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[30] = var1;
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
        var2[31] = var1;
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
        var2[32] = var1;
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
        var2[33] = var1;
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
        var2[34] = var1;
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
        var2[35] = var1;
        var1 = {};
        var6 = 'getNoiseCancellation';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.noiseCancellation;
            return var1;
        };
        var1['value'] = var6;
        var2[36] = var1;
        var1 = {};
        var6 = 'getVoiceFilterId';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.voiceFilterId;
            return var1;
        };
        var1['value'] = var6;
        var2[37] = var1;
        var1 = {};
        var6 = 'setVoiceFilterId';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var7 = arg1;
            var5 = this;
            var5['voiceFilterId'] = var7;
            var6 = var5.emit;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var2 = var4[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.BaseConnectionEvent;
            var2 = var2.VoiceFilterChanged;
            var2 = var6.bind(var5)(var2, var7);
            var2 = 9;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.getVoiceEngine;
            var4 = var2.bind(var3)();
            var3 = var4.setTransportOptions;
            var2 = {};
            var6 = var5.voiceFilterId;
            var5 = null;
            var5 = var5 != var6;
            var2['voiceFilters'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['value'] = var6;
        var2[38] = var1;
        var1 = {};
        var6 = 'setExperimentalEncoders';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var4 = this;
            var1 = arg1;
            var4['experimentalEncoders'] = var1;
            var3 = var4.conn;
            var2 = var3.setTransportOptions;
            var1 = {};
            var4 = var4.experimentalEncoders;
            var1['experimentalEncoders'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[39] = var1;
        var1 = {};
        var6 = 'setHardwareH264';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var4 = this;
            var1 = arg1;
            var4['hardwareH264'] = var1;
            var3 = var4.conn;
            var2 = var3.setTransportOptions;
            var1 = {};
            var4 = var4.hardwareH264;
            var1['hardwareH264'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[40] = var1;
        var1 = {};
        var6 = 'setSoftwareH264';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var4 = this;
            var1 = arg1;
            var4['softwareH264'] = var1;
            var3 = var4.conn;
            var2 = var3.setTransportOptions;
            var1 = {};
            var4 = var4.softwareH264;
            var1['softwareH264'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[41] = var1;
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
        var2[42] = var1;
        var1 = {};
        var6 = 'setInputMode';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
 0:
                var7 = arg1;
                var1 = arg2;
                var5 = this;
                var5['inputMode'] = var7;
                var2 = _closure1_slot20;
                var2 = var2.PUSH_TO_TALK;
                if(!(var2 !== var7)) { _fun0048_ip = 175; continue _fun0048 }
 35:
                var2 = _closure1_slot20;
                var2 = var2.VOICE_ACTIVITY;
                if(!(var2 !== var7)) { _fun0048_ip = 101; continue _fun0048 }
 49:
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
 101:
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
                _fun0048_ip = 187; continue _fun0048;
 175:
                var1 = var1.pttReleaseDelay;
                var5['pttReleaseDelay'] = var1;
 187:
                var3 = var5.conn;
                var2 = var3.setTransportOptions;
                var1 = {};
                var6 = _closure1_slot19;
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
        var2[43] = var1;
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
        var2[44] = var1;
        var1 = {};
        var6 = 'setForceAudioInput';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
 0:
                var3 = arg1;
                var4 = arguments[1];
                var2 = this;
                var1 = undefined;
                if(!(var4 === var1)) { _fun0049_ip = 17; continue _fun0049 }
 15:
                var4 = false;
 17:
                if(var4) { _fun0049_ip = 28; continue _fun0049 }
 20:
                var2['forceAudioNormal'] = var3;
                _fun0049_ip = 34; continue _fun0049;
 28:
                var2['forceAudioPriority'] = var3;
 34:
                var5 = var2.conn;
                var4 = var5.setPTTActive;
                var3 = var2.forceAudioPriority;
                if(var3) { _fun0049_ip = 63; continue _fun0049 }
 57:
                var3 = var2.forceAudioNormal;
 63:
                var2 = var2.forceAudioPriority;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[45] = var1;
        var1 = {};
        var6 = 'setSpeakingFlags';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
 0:
                var4 = arg1;
                var3 = arg2;
                var2 = this;
                var1 = var2.conn;
                var1 = var1.setRemoteUserSpeakingStatus;
                var5 = null;
                if(!(var5 == var1)) { _fun0050_ip = 90; continue _fun0050 }
 27:
                var1 = var2.conn;
                var1 = var1.setRemoteUserSpeaking;
                if(!(var5 != var1)) { _fun0050_ip = 108; continue _fun0050 }
 43:
                var6 = var2.conn;
                var5 = var6.setRemoteUserSpeaking;
                var1 = _closure1_slot24;
                var7 = var1.VOICE;
                var7 = var3 & var7;
                var1 = var1.VOICE;
                var1 = var7 === var1;
                var1 = var5.bind(var6)(var4, var1);
                _fun0050_ip = 108; continue _fun0050;
 90:
                var5 = var2.conn;
                var1 = var5.setRemoteUserSpeakingStatus;
                var1 = var1.bind(var5)(var4, var3);
 108:
                var1 = var2.handleSpeakingFlags;
                var1 = var1.bind(var2)(var4, var3);
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[46] = var1;
        var1 = {};
        var6 = 'clearAllSpeaking';
        var1['key'] = var6;
        var6 = function value() {
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[47] = var1;
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
        var2[48] = var1;
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
        var2[49] = var1;
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
        var2[50] = var1;
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
        var2[51] = var1;
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
        var2[52] = var1;
        var1 = {};
        var6 = 'setVideoBroadcast';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
 0:
                var1 = arg1;
                var2 = this;
                var3 = var2.selfVideo;
                if(!(var3 !== var1)) { _fun0051_ip = 34; continue _fun0051 }
 16:
                var2['selfVideo'] = var1;
                var1 = var2.applyVideoTransportOptions;
                var1 = var1.bind(var2)();
 34:
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
            _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
 0:
                var1 = arg1;
                var5 = this;
                var2 = var1.quality;
                var4 = var2.resolution;
                var3 = var2.frameRate;
                var2 = 480;
                if(!(!(var4 <= var2))) { _fun0052_ip = 50; continue _fun0052 }
 34:
                var2 = 9;
                var6 = var4 / var2;
                var2 = 16;
                var2 = var6 * var2;
                _fun0052_ip = 64; continue _fun0052;
 50:
                var6 = 3;
                var7 = var4 / var6;
                var6 = 4;
                var2 = var7 * var6;
 64:
                var7 = var1.desktopDescription;
                var6 = null;
                if(!(var6 == var7)) { _fun0052_ip = 145; continue _fun0052 }
 76:
                var7 = var1.cameraDescription;
                var8 = var6 != var7;
                var7 = null;
                if(!var8) { _fun0052_ip = 156; continue _fun0052 }
 91:
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
                _fun0052_ip = 156; continue _fun0052;
 145:
                var8 = var1.desktopDescription;
                var7 = var8.id;
 156:
                var8 = var5.goLiveSourceIdentifier;
                if(!(var8 === var7)) { _fun0052_ip = 240; continue _fun0052 }
 166:
                var8 = var5.setDesktopEncodingOptions;
                var8 = var8.bind(var5)(var2, var4, var3);
                var8 = var1.desktopDescription;
                if(!(var6 != var8)) { _fun0052_ip = 812; continue _fun0052 }
 192:
                var8 = var1.desktopDescription;
                var10 = var8.soundshareId;
                var9 = var8.useLoopback;
                var8 = var5.soundshareId;
                if(!(var8 !== var10)) { _fun0052_ip = 812; continue _fun0052 }
 223:
                var8 = var5.setSoundshareSource;
                var8 = var8.bind(var5)(var10, var9);
                _fun0052_ip = 812; continue _fun0052;
 240:
                var5['goLiveSourceIdentifier'] = var7;
                var7 = var5.conn;
                var7 = var7.setDesktopSource;
                if(!(var6 != var7)) { _fun0052_ip = 812; continue _fun0052 }
 265:
                var7 = var1.desktopDescription;
                if(!(var6 == var7)) { _fun0052_ip = 344; continue _fun0052 }
 275:
                var7 = var1.cameraDescription;
                if(!(var6 != var7)) { _fun0052_ip = 799; continue _fun0052 }
 288:
                var7 = var1.cameraDescription;
                var11 = var7.videoDeviceGuid;
                var10 = var7.audioDeviceGuid;
                var9 = var5.conn;
                var8 = var9.setGoLiveDevices;
                var7 = {};
                var7['videoInputDeviceId'] = var11;
                var7['audioInputDeviceId'] = var10;
                var7 = var8.bind(var9)(var7);
                _fun0052_ip = 799; continue _fun0052;
 344:
                var7 = var1.desktopDescription;
                var1 = var7.id;
                var17 = var7.soundshareId;
                var16 = var7.useLoopback;
                var15 = var7.useVideoHook;
                var13 = var7.useGraphicsCaptureApiLevel;
                var14 = var7.useGraphicsCapture;
                var12 = var7.useQuartzCapturer;
                var11 = var7.allowScreenCaptureKit;
                var10 = var7.videoHookStaleFrameTimeoutMs;
                var9 = var7.graphicsCaptureStaleFrameTimeoutMs;
                var8 = var7.hdrCaptureMode;
                var7 = var5.setSoundshareSource;
                var7 = var7.bind(var5)(var17, var16);
                if(!(var6 == var1)) { _fun0052_ip = 443; continue _fun0052 }
 431:
                var17 = ['', ''];
                _fun0052_ip = 457; continue _fun0052;
 443:
                var16 = var1.split;
                var7 = ':';
                var17 = var16.bind(var1)(var7);
 457:
                var16 = _closure1_slot3;
                var20 = undefined;
                var7 = 2;
                var16 = var16.bind(var20)(var17, var7);
                var7 = 0;
                var17 = var16[var7];
                var7 = 1;
                var16 = var16[var7];
                if(!(var6 == var1)) { _fun0052_ip = 519; continue _fun0052 }
 492:
                var19 = var5.logger;
                var18 = var19.info;
                var7 = 'capturing desktop (type: <stop>).';
                var7 = var18.bind(var19)(var7);
                _fun0052_ip = 648; continue _fun0052;
 519:
                var19 = var5.logger;
                var18 = var19.info;
                var7 = var15.toString;
                var28 = var7.bind(var15)();
                var7 = var6 == var14;
                var27 = undefined;
                if(var7) { _fun0052_ip = 557; continue _fun0052 }
 548:
                var7 = var14.toString;
                var27 = var7.bind(var14)();
 557:
                var7 = var6 == var13;
                var26 = undefined;
                if(var7) { _fun0052_ip = 575; continue _fun0052 }
 566:
                var7 = var13.toString;
                var26 = var7.bind(var13)();
 575:
                var7 = global;
                var7 = var7.HermesInternal;
                var25 = var7.concat;
                var39 = 'capturing desktop (type: ';
                var37 = ', handle: ';
                var35 = ', use-video-hook: ';
                var33 = ', use-graphics-capture: ';
                var31 = ', use-graphics-capture-api-level: ';
                var29 = ').';
                var38 = var17;
                var36 = var16;
                var34 = var28;
                var32 = var27;
                var30 = var26;
                var7 = var39[var25](var38, var37, var36, var35, var34, var33, var32, var31, var30, var29, var28);
                var7 = var18.bind(var19)(var7);
 648:
                var7 = var5.conn;
                var7 = var7.setDesktopSourceWithOptions;
                if(!(var6 == var7)) { _fun0052_ip = 709; continue _fun0052 }
 664:
                var19 = var5.conn;
                var18 = var19.setDesktopSource;
                var7 = global;
                var7 = var7.HermesInternal;
                var20 = var7.concat;
                var7 = 'wumpus-';
                var7 = var20.bind(var7)(var16);
                var7 = var18.bind(var19)(var7, var15, var17);
                _fun0052_ip = 799; continue _fun0052;
 709:
                if(!(var6 == var1)) { _fun0052_ip = 731; continue _fun0052 }
 713:
                var6 = var5.conn;
                var1 = var6.clearDesktopSource;
                var1 = var1.bind(var6)();
                _fun0052_ip = 799; continue _fun0052;
 731:
                var7 = var5.conn;
                var6 = var7.setDesktopSourceWithOptions;
                var1 = {};
                var1['type'] = var17;
                var1['sourceId'] = var16;
                var1['useVideoHook'] = var15;
                var1['useGraphicsCapture'] = var14;
                var1['useGraphicsCaptureApiLevel'] = var13;
                var1['useQuartzCapturer'] = var12;
                var1['allowScreenCaptureKit'] = var11;
                var1['videoHookStaleFrameTimeoutMs'] = var10;
                var1['graphicsCaptureStaleFrameTimeoutMs'] = var9;
                var1['hdrCaptureMode'] = var8;
                var1 = var6.bind(var7)(var1);
 799:
                var1 = var5.setDesktopEncodingOptions;
                var1 = var1.bind(var5)(var2, var4, var3);
 812:
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
            _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
 0:
                var1 = this;
                var2 = var1.goLiveSourceIdentifier;
                var3 = null;
                if(!(var3 != var2)) { _fun0053_ip = 43; continue _fun0053 }
 15:
                var6 = var1.setDesktopEncodingOptions;
                var5 = 1280;
                var4 = 720;
                var2 = 30;
                var2 = var6.bind(var1)(var5, var4, var2);
 43:
                var2 = var1.conn;
                var2 = var2.clearGoLiveDevices;
                if(!(var3 != var2)) { _fun0053_ip = 75; continue _fun0053 }
 59:
                var2 = var1.conn;
                var1 = var2.clearGoLiveDevices;
                var1 = var1.bind(var2)();
 75:
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
            _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
 0:
                var1 = this;
                var2 = var1.goLiveSourceIdentifier;
                var3 = null;
                if(!(var3 != var2)) { _fun0054_ip = 43; continue _fun0054 }
 15:
                var6 = var1.setDesktopEncodingOptions;
                var5 = 1280;
                var4 = 720;
                var2 = 30;
                var2 = var6.bind(var1)(var5, var4, var2);
 43:
                var1['goLiveSourceIdentifier'] = var3;
                var2 = var1.conn;
                var2 = var2.clearDesktopSource;
                if(!(var3 == var2)) { _fun0054_ip = 92; continue _fun0054 }
 65:
                var5 = var1.conn;
                var4 = var5.setDesktopSource;
                var3 = '';
                var2 = false;
                var2 = var4.bind(var5)(var3, var2, var3);
                _fun0054_ip = 108; continue _fun0054;
 92:
                var2 = var1.conn;
                var1 = var2.clearDesktopSource;
                var1 = var1.bind(var2)();
 108:
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
            _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
 0:
                var1 = this;
                var4 = var1.conn;
                var3 = var4.setDesktopSourceStatusCallback;
                var1 = null;
                if(!(var1 != var3)) { _fun0055_ip = 35; continue _fun0055 }
 21:
                var2 = var3.call;
                var1 = arg1;
                var1 = var2.bind(var3)(var4, var1);
 35:
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
            _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
 0:
                var14 = arg1;
                var13 = arg2;
                var11 = arg3;
                var4 = this;
                var1 = var4.destroyed;
                if(var1) { _fun0056_ip = 641; continue _fun0056 }
 26:
                var16 = 0;
                var15 = var16 === var13;
                if(!var15) { _fun0056_ip = 42; continue _fun0056 }
 35:
                var1 = 10;
                if(!(!(var11 >= var1))) { _fun0056_ip = 68; continue _fun0056 }
 42:
                var1 = 720;
                if(!(!(var13 > var1))) { _fun0056_ip = 68; continue _fun0056 }
 52:
                var1 = 30;
                if(!(!(var11 > var1))) { _fun0056_ip = 68; continue _fun0056 }
 59:
                var8 = _closure1_slot13;
                _fun0056_ip = 75; continue _fun0056;
 68:
                var8 = _closure1_slot12;
 75:
                var9 = {};
                var9['width'] = var14;
                var9['height'] = var13;
                var9['framerate'] = var11;
                var2 = var4.videoQualityManager;
                var1 = var2.getQuality;
                var5 = var1.bind(var2)();
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 20;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var7.bind(var3)(var2);
                var10 = var2.VideoQuality;
                var7 = var10.equals;
                var2 = var5.capture;
                var2 = var7.bind(var10)(var9, var2);
                var2 = !var2;
                if(var2) { _fun0056_ip = 171; continue _fun0056 }
 161:
                var5 = var5.bitrateMax;
                var2 = var5 !== var8;
 171:
                var10 = var4.videoStreamParameters;
                var7 = var10.findIndex;
                var5 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.quality;
                    var1 = _closure1_slot17;
                    var1 = var2 === var1;
                    return var1;
                };
                var10 = var7.bind(var10)(var5);
                var5 = -1;
                if(!(var5 === var10)) { _fun0056_ip = 205; continue _fun0056 }
 203:
                var10 = 0;
 205:
                if(!var2) { _fun0056_ip = 353; continue _fun0056 }
 211:
                var17 = var4.videoQualityManager;
                var12 = var17.setGoliveQuality;
                var7 = {};
                var7['capture'] = var9;
                var7['encode'] = var9;
                var7['bitrateMax'] = var8;
                var7 = var12.bind(var17)(var7);
                var7 = var4.videoStreamParameters;
                var7 = var7.length;
                if(!(var7 > var10)) { _fun0056_ip = 353; continue _fun0056 }
 262:
                var7 = var4.videoStreamParameters;
                var12 = var7[var10];
                var7 = {};
                if(!(var16 === var14)) { _fun0056_ip = 281; continue _fun0056 }
 278:
                if(var15) { _fun0056_ip = 293; continue _fun0056 }
 281:
                var15 = _closure1_slot25;
                var15 = var15.FIXED;
                _fun0056_ip = 303; continue _fun0056;
 293:
                var16 = _closure1_slot25;
                var15 = var16.SOURCE;
 303:
                var7['type'] = var15;
                var7['width'] = var14;
                var7['height'] = var13;
                var12['maxResolution'] = var7;
                var7 = var4.videoStreamParameters;
                var7 = var7[var10];
                var7['maxFrameRate'] = var11;
                var7 = var4.videoStreamParameters;
                var7 = var7[var10];
                var7['maxBitrate'] = var8;
 353:
                var8 = var4.videoStreamParameters;
                var7 = var8.findIndex;
                var6 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.quality;
                    var1 = _closure1_slot18;
                    var1 = var2 === var1;
                    return var1;
                };
                var8 = var7.bind(var8)(var6);
                var6 = var5 !== var8;
                if(!var6) { _fun0056_ip = 397; continue _fun0056 }
 382:
                var5 = var4.videoStreamParameters;
                var5 = var5.length;
                var6 = var5 > var8;
 397:
                var7 = var4.videoQualityManager;
                var5 = var7.shouldEnableGoliveSimulcastForHqQuality;
                var7 = var5.bind(var7)(var9);
                var5 = var6;
                if(!var5) { _fun0056_ip = 442; continue _fun0056 }
 422:
                var9 = var4.videoStreamParameters;
                var9 = var9[var8];
                var9 = var9.active;
                var5 = var9 !== var7;
 442:
                if(!var6) { _fun0056_ip = 488; continue _fun0056 }
 445:
                var6 = var4.videoStreamParameters;
                var6 = var6[var8];
                var6['active'] = var7;
                var6 = undefined;
                if(var7) { _fun0056_ip = 482; continue _fun0056 }
 466:
                var7 = var4.videoStreamParameters;
                var7 = var7[var8];
                var6 = var7.ssrc;
 482:
                var4['simulcastLQDisabledSsrc'] = var6;
 488:
                if(var2) { _fun0056_ip = 494; continue _fun0056 }
 491:
                var2 = var5;
 494:
                if(!var2) { _fun0056_ip = 641; continue _fun0056 }
 500:
                var9 = var4.emit;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 10;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.BaseConnectionEvent;
                var8 = var2.Video;
                var24 = var4.userId;
                var22 = var4.audioSSRC;
                var2 = var4.videoStreamParameters;
                var2 = var2[var10];
                var21 = var2.ssrc;
                var2 = _closure1_slot40;
                var1 = var4.videoStreamParameters;
                var1 = var1[var10];
                var1 = var1.ssrc;
                var20 = var2.bind(var3)(var1);
                var19 = var4.videoStreamParameters;
                var23 = null;
                var26 = var4;
                var25 = var8;
                var1 = var26[var9](var25, var24, var23, var22, var21, var20, var19, var18);
                var3 = var4.conn;
                var2 = var3.setTransportOptions;
                var1 = var4.applyQualityConstraints;
                var1 = var1.bind(var4)();
                var1 = var1.constraints;
                var1 = var2.bind(var3)(var1);
 641:
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
            _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
 0:
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
                if(!var4) { _fun0057_ip = 350; continue _fun0057 }
 83:
                var20 = var18[var10];
                var4 = _closure1_slot3;
                var4 = var4.bind(var1)(var20, var12);
                var26 = var4[var17];
                var20 = _closure1_slot37;
                var4 = var4[var11];
                var25 = var20.bind(var1)(var4);
                var4 = var25.bind(var1)();
                var20 = var4.done;
                var23 = var4;
                var22 = 0;
                var21 = 0;
                var24 = 0;
                var4 = 0;
                if(var20) { _fun0057_ip = 203; continue _fun0057 }
 137:
                var27 = var23.value;
                var28 = var15 == var19;
                var20 = undefined;
                if(var28) { _fun0057_ip = 155; continue _fun0057 }
 151:
                var20 = var19[var27];
 155:
                var29 = var22 + var20;
                var28 = var15 == var3;
                var20 = undefined;
                if(var28) { _fun0057_ip = 172; continue _fun0057 }
 168:
                var20 = var3[var27];
 172:
                var21 = var21 + var20;
                var30 = var25.bind(var1)();
                var20 = var30.done;
                var23 = var30;
                var22 = var29;
                var24 = var22;
                var4 = var21;
                var5 = var27;
                if(!var20) { _fun0057_ip = 137; continue _fun0057 }
 203:
                var23 = var9;
                var22 = var8;
                if(!(var17 === var24)) { _fun0057_ip = 263; continue _fun0057 }
 213:
                var23 = var9;
                var22 = var8;
                if(!(var17 !== var4)) { _fun0057_ip = 263; continue _fun0057 }
 223:
                var20 = var2.conn;
                var21 = var20.setDisableLocalVideo;
                var22 = var20;
                var23 = var21;
                if(!(var15 != var23)) { _fun0057_ip = 263; continue _fun0057 }
 245:
                var25 = var21.call;
                var25 = var25.bind(var21)(var20, var26, var14);
                var23 = var21;
                var22 = var20;
 263:
                var21 = var7;
                var20 = var6;
                if(!(var17 !== var24)) { _fun0057_ip = 323; continue _fun0057 }
 273:
                var21 = var7;
                var20 = var6;
                if(!(var17 === var4)) { _fun0057_ip = 323; continue _fun0057 }
 283:
                var4 = var2.conn;
                var24 = var4.setDisableLocalVideo;
                var20 = var4;
                var21 = var24;
                if(!(var15 != var21)) { _fun0057_ip = 323; continue _fun0057 }
 305:
                var25 = var24.call;
                var25 = var25.bind(var24)(var4, var26, var16);
                var21 = var24;
                var20 = var4;
 323:
                var10 = var10 + 1;
                var4 = var18.length;
                var7 = var21;
                var6 = var20;
                var9 = var23;
                var8 = var22;
                if(var10 < var4) { _fun0057_ip = 83; continue _fun0057 }
 350:
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
            _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
 0:
                var1 = arg2;
                var4 = arg4;
                var3 = var1.numberOfChannels;
                var2 = 2;
                if(!(!(var3 > var2))) { _fun0058_ip = 133; continue _fun0058 }
 19:
                var6 = new Array(0);
                var2 = var1.numberOfChannels;
                var3 = 0;
                var2 = var3 < var2;
                if(!var2) { _fun0058_ip = 74; continue _fun0058 }
 38:
                var2 = var1.getChannelData;
                var5 = var2.bind(var1)(var3);
                var2 = var6.push;
                var2 = var2.bind(var6)(var5);
                var3 = var3 + 1;
                var2 = var1.numberOfChannels;
                if(var3 < var2) { _fun0058_ip = 38; continue _fun0058 }
 74:
                var2 = this;
                var5 = var2.conn;
                var3 = var5.startSamplesLocalPlayback;
                var2 = {};
                var1 = var1.sampleRate;
                var2['sampleRate'] = var1;
                var1 = arg3;
                var2['volume'] = var1;
                var10 = arg1;
                var11 = var5;
                var9 = var2;
                var8 = var6;
                var7 = var4;
                var1 = var11[var3](var10, var9, var8, var7, var6);
                _fun0058_ip = 150; continue _fun0058;
 133:
                var3 = undefined;
                var2 = 1;
                var1 = 'Too many channels';
                var1 = var4.bind(var3)(var2, var1);
 150:
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
            var1 = this;
            var3 = var1.conn;
            var2 = var3.stopSamplesLocalPlayback;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
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
            _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
 0:
                var1 = this;
                var2 = var1.videoSupported;
                if(!var2) { _fun0059_ip = 41; continue _fun0059 }
 12:
                var2 = var1.destroyed;
                if(var2) { _fun0059_ip = 41; continue _fun0059 }
 21:
                var3 = var1.conn;
                var2 = var3.setTransportOptions;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
 41:
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
                _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
 0:
                    var2 = arg2;
                    var _closure4_slot0 = var2;
                    var6 = function _loop(arg1) {
                        _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
 0:
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
                            if(!(var1 !== var7)) { _fun0061_ip = 189; continue _fun0061 }
 45:
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
                            if(var3) { _fun0061_ip = 159; continue _fun0061 }
 105:
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
 159:
                            var2 = _closure3_slot2;
                            var4 = var2.conn;
                            var3 = var4.setTransportOptions;
                            var2 = {};
                            var2['streamParameters'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
 189:
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
                    var3 = _closure1_slot37;
                    var1 = _closure3_slot0;
                    var2 = var1.videoStreamParameters;
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var3 = var5.bind(var1)();
                    var2 = var3.done;
                    var4 = var3;
                    if(var2) { _fun0060_ip = 93; continue _fun0060 }
 56:
                    var2 = var4.value;
                    var2 = var6.bind(var1)(var2);
                    if(var2) { _fun0060_ip = 86; continue _fun0060 }
 69:
                    var7 = var5.bind(var1)();
                    var3 = var7.done;
                    var4 = var7;
                    if(var3) { _fun0060_ip = 93; continue _fun0060 }
 84:
                    _fun0060_ip = 56; continue _fun0060;
 86:
                    var2 = var2.v;
                    return var2;
 93:
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
            _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
 0:
                var1 = this;
                var2 = var1.videoSupported;
                if(!var2) { _fun0062_ip = 208; continue _fun0062 }
 15:
                var2 = var1.hasDesktopSource;
                var2 = var2.bind(var1)();
                var7 = false;
                if(!var2) { _fun0062_ip = 101; continue _fun0062 }
 30:
                var2 = var1.videoStreamParameters;
                var2 = var2.length;
                var3 = 0;
                var2 = var2 > var3;
                var7 = false;
                if(!var2) { _fun0062_ip = 101; continue _fun0062 }
 52:
                var2 = var1.videoStreamParameters;
                var2 = var2[var3];
                var2 = var2.maxResolution;
                var3 = null;
                var4 = var3 == var2;
                var3 = undefined;
                if(var4) { _fun0062_ip = 84; continue _fun0062 }
 79:
                var3 = var2.type;
 84:
                var2 = _closure1_slot25;
                var2 = var2.SOURCE;
                var7 = var3 === var2;
 101:
                var4 = var1.conn;
                var3 = var4.setTransportOptions;
                var5 = var1.applyQualityConstraints;
                var2 = {};
                var6 = var1.hasDesktopSource;
                var6 = var6.bind(var1)();
                if(var6) { _fun0062_ip = 142; continue _fun0062 }
 134:
                var6 = var1.videoDegradationPreference;
                _fun0062_ip = 162; continue _fun0062;
 142:
                if(var7) { _fun0062_ip = 153; continue _fun0062 }
 145:
                var7 = var1.desktopDegradationPreference;
                _fun0062_ip = 159; continue _fun0062;
 153:
                var7 = var1.sourceDesktopDegradationPreference;
 159:
                var6 = var7;
 162:
                var2['encodingVideoDegradationPreference'] = var6;
                var2 = var5.bind(var1)(var2);
                var2 = var2.constraints;
                var2 = var3.bind(var4)(var2);
                var3 = var1.conn;
                var2 = var3.setVideoBroadcast;
                var1 = var1.selfVideo;
                var1 = var2.bind(var3)(var1);
 208:
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
            _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
 0:
                var6 = arg1;
                var2 = _closure1_slot37;
                var4 = undefined;
                var1 = arg2;
                var3 = var2.bind(var4)(var1);
                var2 = var3.bind(var4)();
                var1 = var2.done;
                if(var1) { _fun0063_ip = 101; continue _fun0063 }
 32:
                var1 = var2.value;
                var7 = _closure1_slot37;
                var9 = var7.bind(var4)(var6);
                var8 = var9.bind(var4)();
                var7 = var8.done;
                if(var7) { _fun0063_ip = 86; continue _fun0063 }
 58:
                var7 = var8.value;
                if(!(var1 !== var7)) { _fun0063_ip = 84; continue _fun0063 }
 67:
                var10 = var9.bind(var4)();
                var7 = var10.done;
                var8 = var10;
                if(var7) { _fun0063_ip = 86; continue _fun0063 }
 82:
                _fun0063_ip = 58; continue _fun0063;
 84:
                return var1;
 86:
                var7 = var3.bind(var4)();
                var1 = var7.done;
                var2 = var7;
                if(!var1) { _fun0063_ip = 32; continue _fun0063 }
 101:
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
                _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
 0:
                    var4 = arg1;
                    var1 = _closure3_slot0;
                    var1 = var1.remoteVideoSSRCs;
                    var1 = var1[var4];
                    var3 = 0;
                    var6 = undefined;
                    var5 = 0;
                    if(!(var6 !== var1)) { _fun0064_ip = 76; continue _fun0064 }
 30:
                    var1 = _closure3_slot0;
                    var1 = var1.remoteVideoSSRCs;
                    var1 = var1[var4];
                    var1 = var1.length;
                    var1 = var1 > var3;
                    var5 = 0;
                    if(!var1) { _fun0064_ip = 76; continue _fun0064 }
 58:
                    var1 = _closure3_slot0;
                    var1 = var1.remoteVideoSSRCs;
                    var1 = var1[var4];
                    var5 = var1[var3];
 76:
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
                    var2 = _closure1_slot40;
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
            _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
 0:
                var2 = this;
                var3 = var2.inputMode;
                var1 = _closure1_slot20;
                var1 = var1.VOICE_ACTIVITY;
                if(!(var1 !== var3)) { _fun0065_ip = 113; continue _fun0065 }
 26:
                var1 = _closure1_slot20;
                var1 = var1.PUSH_TO_TALK;
                if(!(var1 !== var3)) { _fun0065_ip = 98; continue _fun0065 }
 40:
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
 98:
                var1 = {};
                var3 = var2.pttReleaseDelay;
                var1['pttReleaseDelay'] = var3;
                return var1;
 113:
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
                if(var3) { _fun0065_ip = 171; continue _fun0065 }
 163:
                var3 = var4.DISABLED;
                _fun0065_ip = 177; continue _fun0065;
 171:
                var3 = var4.VERY_AGGRESSIVE;
 177:
                var1['vadAutoThreshold'] = var3;
                var3 = var2.vadUseKrisp;
                var1['vadUseKrisp'] = var3;
                var3 = var2.vadLeading;
                var1['vadLeading'] = var3;
                var3 = var2.vadTrailing;
                var1['vadTrailing'] = var3;
                var2 = var2.vadKrispActivationThreshold;
                var1['vadKrispActivationThreshold'] = var2;
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
            _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
 0:
                var1 = _closure1_slot22;
                var3 = var1.H264;
                var1 = arg1;
                if(!(var1 === var3)) { _fun0066_ip = 158; continue _fun0066 }
 23:
                var1 = arg2;
                if(var1) { _fun0066_ip = 142; continue _fun0066 }
 29:
                var1 = {'level-asymmetry-allowed': '1', 'packetization-mode': '1'};
                var3 = '1';
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 9;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var5.bind(var2)(var4);
                var2 = var4.getVoiceEngine;
                var2 = var2.bind(var4)();
                var5 = var2.platform;
                var2 = '4d0033';
                var4 = 'android';
                if(!(var4 === var5)) { _fun0066_ip = 107; continue _fun0066 }
 101:
                var2 = '42e01f';
 107:
                var1['profile-level-id'] = var2;
                var2 = this;
                var4 = var2.softwareH264;
                var2 = '0';
                if(!var4) { _fun0066_ip = 133; continue _fun0066 }
 130:
                var2 = var3;
 133:
                var1['software-h264'] = var2;
                _fun0066_ip = 156; continue _fun0066;
 142:
                var1 = {'level-asymmetry-allowed': '1', 'packetization-mode': '1', 'profile-level-id': '42e034'};
 156:
                _fun0066_ip = 160; continue _fun0066;
 158:
                var1 = {};
 160:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[74] = var1;
        var1 = {};
        var6 = 'getCodecOptions';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
 0:
                var28 = arg1;
                var27 = arg2;
                var26 = this;
                var _closure3_slot0 = var28;
                var4 = var26.codecs;
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
                var25 = null;
                var5 = var25 == var2;
                var24 = undefined;
                var4 = undefined;
                if(var5) { _fun0067_ip = 69; continue _fun0067 }
 63:
                var4 = var2.payloadType;
 69:
                var5 = var25 != var4;
                var2 = 0;
                if(!var5) { _fun0067_ip = 81; continue _fun0067 }
 78:
                var2 = var4;
 81:
                var3['type'] = var2;
                var3['name'] = var28;
                var5 = var26.codecs;
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
                    _fun0068: for(var _fun0068_ip = 0; ; ) switch(_fun0068_ip) {
 0:
                        var2 = arg1;
                        var1 = {};
                        var3 = null;
                        var5 = var3 == var2;
                        var4 = undefined;
                        if(var5) { _fun0068_ip = 22; continue _fun0068 }
 16:
                        var4 = var2.payloadType;
 22:
                        var5 = var3 != var4;
                        var3 = 0;
                        if(!var5) { _fun0068_ip = 34; continue _fun0068 }
 31:
                        var3 = var4;
 34:
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
                var1 = _closure1_slot23;
                var4 = var1.STREAM;
                var1 = arg3;
                if(!(var1 === var4)) { _fun0067_ip = 158; continue _fun0067 }
 149:
                var1 = 2;
                var3['channels'] = var1;
 158:
                var4 = new Array(0);
                var5 = {'name': '', 'type': 0, 'rtxType': 0};
                var1 = {};
                var5['params'] = var1;
                var6 = _closure1_slot37;
                var1 = var26.codecs;
                var21 = var6.bind(var24)(var1);
                var6 = var21.bind(var24)();
                var1 = var6.done;
                var20 = '1';
                var19 = false;
                var18 = 'params';
                var17 = '0';
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
                if(var1) { _fun0067_ip = 780; continue _fun0067 }
 263:
                var31 = var13.value;
                var1 = var31.name;
                var29 = var12;
                if(!(var1 !== var28)) { _fun0067_ip = 756; continue _fun0067 }
 283:
                var30 = {};
                var32 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var14];
                var33 = var32.bind(var24)(var1);
                var32 = var33.codecNameToPayloadName;
                var1 = var31.name;
                var1 = var32.bind(var33)(var1);
                var30['name'] = var1;
                var1 = var25 == var31;
                var33 = undefined;
                if(var1) { _fun0067_ip = 337; continue _fun0067 }
 331:
                var33 = var31.payloadType;
 337:
                var32 = var25 != var33;
                var1 = 0;
                if(!var32) { _fun0067_ip = 349; continue _fun0067 }
 346:
                var1 = var33;
 349:
                var30['type'] = var1;
                var1 = var25 == var31;
                var32 = undefined;
                if(var1) { _fun0067_ip = 368; continue _fun0067 }
 362:
                var32 = var31.rtxPayloadType;
 368:
                var34 = var25 != var32;
                var1 = 0;
                if(!var34) { _fun0067_ip = 380; continue _fun0067 }
 377:
                var1 = var32;
 380:
                var30['rtxType'] = var1;
                var34 = var26.getCodecParams;
                var1 = var31.name;
                var1 = var34.bind(var26)(var1, var15);
                var30['params'] = var1;
                var35 = var26.experimentFlags;
                var34 = var35.has;
                var1 = _closure1_slot11;
                var1 = var1.RESET_DECODER_ON_ERRORS;
                var1 = var34.bind(var35)(var1);
                if(!var1) { _fun0067_ip = 450; continue _fun0067 }
 436:
                var1 = var30.params;
                var1['reset-on-errors'] = var20;
 450:
                var35 = var26.experimentFlags;
                var34 = var35.has;
                var1 = _closure1_slot11;
                var1 = var1.SOFTWARE_FALLBACK_ON_ERRORS;
                var1 = var34.bind(var35)(var1);
                if(!var1) { _fun0067_ip = 493; continue _fun0067 }
 479:
                var1 = var30.params;
                var1['fallback-after-errors'] = var16;
 493:
                var35 = var26.experimentFlags;
                var34 = var35.has;
                var1 = _closure1_slot11;
                var1 = var1.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS;
                var1 = var34.bind(var35)(var1);
                if(!var1) { _fun0067_ip = 536; continue _fun0067 }
 522:
                var1 = var30.params;
                var1['fallback-on-consecutive-errors'] = var20;
 536:
                var35 = var26.experimentFlags;
                var34 = var35.has;
                var1 = _closure1_slot11;
                var1 = var1.SIGNAL_AV1_HARDWARE_DECODE;
                var1 = var34.bind(var35)(var1);
                if(!var1) { _fun0067_ip = 579; continue _fun0067 }
 565:
                var1 = var30.params;
                var1['hardware-av1-decode'] = var20;
 579:
                var34 = var26.hardwareH264;
                var1 = var17;
                if(!var34) { _fun0067_ip = 594; continue _fun0067 }
 591:
                var1 = var20;
 594:
                var34 = var30.params;
                var34['hardware-h264'] = var1;
                var34 = var4.push;
                var34 = var34.bind(var4)(var30);
                var34 = var31.name;
                var29 = var12;
                var11 = var33;
                var10 = var31;
                var9 = var32;
                var8 = var10;
                var7 = var30;
                var6 = var1;
                if(!(var34 === var27)) { _fun0067_ip = 756; continue _fun0067 }
 646:
                var34 = {};
                var39 = var34;
                var38 = var30;
                var35 = copyDataProperties(var39, var38);
                var36 = var26.getCodecParams;
                var35 = var31.name;
                var35 = var36.bind(var26)(var35, var19);
                var34[var18] = var35;
                var37 = var26.experimentFlags;
                var36 = var37.has;
                var35 = _closure1_slot11;
                var35 = var35.VIDEOTOOLBOX_RATE_CONTROL;
                var35 = var36.bind(var37)(var35);
                if(!var35) { _fun0067_ip = 723; continue _fun0067 }
 709:
                var35 = var34.params;
                var35['fixed-rate-presentation-timestamps'] = var20;
 723:
                var35 = var34.params;
                var35['hardware-h264'] = var1;
                var29 = var34;
                var11 = var33;
                var10 = var31;
                var9 = var32;
                var8 = var10;
                var7 = var30;
                var6 = var1;
 756:
                var30 = var21.bind(var24)();
                var1 = var30.done;
                var12 = var29;
                var13 = var30;
                var5 = var12;
                if(!var1) { _fun0067_ip = 263; continue _fun0067 }
 780:
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
            _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
 0:
                var2 = this;
                var1 = var2.keyframeInterval;
                var3 = 0;
                if(!(var1 > var3)) { _fun0069_ip = 25; continue _fun0069 }
 15:
                var1 = var2.clipsKeyFrameInterval;
                if(!(!(var1 > var3))) { _fun0069_ip = 58; continue _fun0069 }
 25:
                var1 = global;
                var5 = var1.Math;
                var4 = var5.max;
                var3 = var2.keyframeInterval;
                var1 = var2.clipsKeyFrameInterval;
                var1 = var4.bind(var5)(var3, var1);
                _fun0069_ip = 89; continue _fun0069;
 58:
                var3 = global;
                var5 = var3.Math;
                var4 = var5.min;
                var3 = var2.keyframeInterval;
                var2 = var2.clipsKeyFrameInterval;
                var1 = var4.bind(var5)(var3, var2);
 89:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[76] = var1;
        var1 = {};
        var6 = 'getConnectionTransportOptions';
        var1['key'] = var6;
        var6 = function value() {
            _fun0070: for(var _fun0070_ip = 0; ; ) switch(_fun0070_ip) {
 0:
                var4 = this;
                var1 = {};
                var2 = var4.selfMute;
                var1['selfMute'] = var2;
                var5 = _closure1_slot19;
                var2 = var4.inputMode;
                var2 = var5[var2];
                var1['inputMode'] = var2;
                var2 = var4.createInputModeOptions;
                var2 = var2.bind(var4)();
                var1['inputModeOptions'] = var2;
                var2 = var4.minimumJitterBufferLevel;
                var1['minimumJitterBufferLevel'] = var2;
                var2 = var4.postponeDecodeLevel;
                var1['postponeDecodeLevel'] = var2;
                var2 = var4.getAttenuationOptions;
                var8 = var2.bind(var4)();
                var9 = var1;
                var2 = copyDataProperties(var9, var8);
                var2 = true;
                var5 = 'fec';
                var1[var5] = var2;
                var6 = 0.3;
                var5 = 'packetLossRate';
                var1[var5] = var6;
                var6 = var4.qos;
                var5 = 'qos';
                var1[var5] = var6;
                var6 = _closure1_slot34;
                var5 = 'prioritySpeakerDucking';
                var1[var5] = var6;
                var6 = var4.voiceBitrate;
                var5 = 'encodingVoiceBitRate';
                var1[var5] = var6;
                var6 = _closure1_slot31;
                var5 = 'callBitRate';
                var1[var5] = var6;
                var6 = _closure1_slot32;
                var5 = 'callMinBitRate';
                var1[var5] = var6;
                var6 = _closure1_slot33;
                var5 = 'callMaxBitRate';
                var1[var5] = var6;
                var6 = var4.videoDegradationPreference;
                var5 = 'encodingVideoDegradationPreference';
                var1[var5] = var6;
                var6 = var4.experimentalEncoders;
                var5 = 'experimentalEncoders';
                var1[var5] = var6;
                var6 = var4.hardwareH264;
                var5 = 'hardwareH264';
                var1[var5] = var6;
                var6 = var4.softwareH264;
                var5 = 'softwareH264';
                var1[var5] = var6;
                var6 = var4.reconnectInterval;
                var5 = 'reconnectInterval';
                var1[var5] = var6;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 9;
                var6 = var6[var5];
                var5 = undefined;
                var7 = var7.bind(var5)(var6);
                var6 = var7.supportsFeature;
                var5 = _closure1_slot26;
                var5 = var5.VIDEO_EFFECTS;
                var5 = var6.bind(var7)(var5);
                if(!var5) { _fun0070_ip = 354; continue _fun0070 }
 335:
                var7 = var4.context;
                var6 = _closure1_slot23;
                var6 = var6.STREAM;
                var5 = var7 === var6;
 354:
                if(!var5) { _fun0070_ip = 365; continue _fun0070 }
 357:
                var1['enableVideoEffects'] = var2;
 365:
                var7 = var4.experimentFlags;
                var6 = var7.has;
                var5 = _closure1_slot11;
                var5 = var5.MUTE_BEFORE_PROCESSING;
                var5 = var6.bind(var7)(var5);
                if(!var5) { _fun0070_ip = 400; continue _fun0070 }
 394:
                var1['muteBeforeProcessing'] = var2;
 400:
                var7 = var4.experimentFlags;
                var6 = var7.has;
                var5 = _closure1_slot11;
                var5 = var5.PTT_BEFORE_PROCESSING;
                var5 = var6.bind(var7)(var5);
                if(!var5) { _fun0070_ip = 435; continue _fun0070 }
 429:
                var1['pttBeforeProcessing'] = var2;
 435:
                var5 = var4.experimentFlags;
                var4 = var5.has;
                var3 = _closure1_slot11;
                var3 = var3.SKIP_ENCODE;
                var3 = var4.bind(var5)(var3);
                if(!var3) { _fun0070_ip = 470; continue _fun0070 }
 464:
                var1['skipEncode'] = var2;
 470:
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
            _fun0071: for(var _fun0071_ip = 0; ; ) switch(_fun0071_ip) {
 0:
                var6 = arg1;
                var1 = this;
                var2 = 0;
                if(!(var2 === var6)) { _fun0071_ip = 30; continue _fun0071 }
 12:
                var2 = -1;
                var1['lastExecutedTransitionId'] = var2;
                var1['lastPreparedTransitionId'] = var2;
 30:
                var1['lastPreparedTransitionId'] = var6;
                var5 = var1.conn;
                var4 = var5.prepareSecureFramesTransition;
                var1 = null;
                if(!(var1 != var4)) { _fun0071_ip = 78; continue _fun0071 }
 54:
                var3 = var4.call;
                var8 = arg2;
                var7 = arg3;
                var11 = var4;
                var10 = var5;
                var9 = var6;
                var1 = var11[var3](var10, var9, var8, var7, var6);
 78:
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
            _fun0072: for(var _fun0072_ip = 0; ; ) switch(_fun0072_ip) {
 0:
                var1 = this;
                var6 = var1.conn;
                var5 = var6.prepareSecureFramesEpoch;
                var1 = null;
                if(!(var1 != var5)) { _fun0072_ip = 45; continue _fun0072 }
 21:
                var4 = var5.call;
                var9 = arg1;
                var8 = arg2;
                var7 = arg3;
                var11 = var5;
                var10 = var6;
                var1 = var11[var4](var10, var9, var8, var7, var6);
 45:
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
            _fun0073: for(var _fun0073_ip = 0; ; ) switch(_fun0073_ip) {
 0:
                var4 = arg1;
                var1 = this;
                var2 = var1.lastExecutedTransitionId;
                var3 = -1;
                if(!(var3 !== var2)) { _fun0073_ip = 206; continue _fun0073 }
 25:
                var2 = var1.lastPreparedTransitionId;
                if(!(var3 !== var2)) { _fun0073_ip = 206; continue _fun0073 }
 38:
                var3 = var1.lastPreparedTransitionId;
                var2 = var1.lastExecutedTransitionId;
                if(!(!(var3 >= var2))) { _fun0073_ip = 79; continue _fun0073 }
 54:
                var2 = var1.lastExecutedTransitionId;
                var2 = var4 > var2;
                if(var2) { _fun0073_ip = 77; continue _fun0073 }
 67:
                var3 = var1.lastPreparedTransitionId;
                var2 = var4 <= var3;
 77:
                _fun0073_ip = 105; continue _fun0073;
 79:
                var3 = var1.lastExecutedTransitionId;
                var3 = var4 > var3;
                if(!var3) { _fun0073_ip = 102; continue _fun0073 }
 92:
                var5 = var1.lastPreparedTransitionId;
                var3 = var4 <= var5;
 102:
                var2 = var3;
 105:
                if(var2) { _fun0073_ip = 206; continue _fun0073 }
 108:
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
 206:
                var1['lastExecutedTransitionId'] = var4;
                var3 = var1.conn;
                var2 = var3.executeSecureFramesTransition;
                var1 = null;
                if(!(var1 != var2)) { _fun0073_ip = 241; continue _fun0073 }
 230:
                var1 = var2.call;
                var1 = var1.bind(var2)(var3, var4);
 241:
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
            _fun0074: for(var _fun0074_ip = 0; ; ) switch(_fun0074_ip) {
 0:
                var1 = this;
                var4 = var1.conn;
                var3 = var4.getMLSKeyPackage;
                var1 = null;
                if(!(var1 != var3)) { _fun0074_ip = 35; continue _fun0074 }
 21:
                var2 = var3.call;
                var1 = arg1;
                var1 = var2.bind(var3)(var4, var1);
 35:
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
            _fun0075: for(var _fun0075_ip = 0; ; ) switch(_fun0075_ip) {
 0:
                var1 = this;
                var4 = var1.conn;
                var3 = var4.updateMLSExternalSender;
                var1 = null;
                if(!(var1 != var3)) { _fun0075_ip = 35; continue _fun0075 }
 21:
                var2 = var3.call;
                var1 = arg1;
                var1 = var2.bind(var3)(var4, var1);
 35:
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
            _fun0076: for(var _fun0076_ip = 0; ; ) switch(_fun0076_ip) {
 0:
                var1 = this;
                var5 = var1.conn;
                var4 = var5.processMLSProposals;
                var1 = null;
                if(!(var1 != var4)) { _fun0076_ip = 39; continue _fun0076 }
 21:
                var3 = var4.call;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var5, var2, var1);
 39:
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
            _fun0077: for(var _fun0077_ip = 0; ; ) switch(_fun0077_ip) {
 0:
                var6 = arg1;
                var1 = this;
                var1['lastPreparedTransitionId'] = var6;
                var5 = var1.conn;
                var4 = var5.prepareMLSCommitTransition;
                var1 = null;
                if(!(var1 != var4)) { _fun0077_ip = 54; continue _fun0077 }
 30:
                var3 = var4.call;
                var8 = arg2;
                var7 = arg3;
                var11 = var4;
                var10 = var5;
                var9 = var6;
                var1 = var11[var3](var10, var9, var8, var7, var6);
 54:
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
            _fun0078: for(var _fun0078_ip = 0; ; ) switch(_fun0078_ip) {
 0:
                var6 = arg1;
                var1 = this;
                var1['lastPreparedTransitionId'] = var6;
                var5 = var1.conn;
                var4 = var5.processMLSWelcome;
                var1 = null;
                if(!(var1 != var4)) { _fun0078_ip = 54; continue _fun0078 }
 30:
                var3 = var4.call;
                var8 = arg2;
                var7 = arg3;
                var11 = var4;
                var10 = var5;
                var9 = var6;
                var1 = var11[var3](var10, var9, var8, var7, var6);
 54:
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
            _fun0079: for(var _fun0079_ip = 0; ; ) switch(_fun0079_ip) {
 0:
                var1 = this;
                var6 = var1.conn;
                var5 = var6.getMLSPairwiseFingerprint;
                var1 = null;
                if(!(var1 != var5)) { _fun0079_ip = 45; continue _fun0079 }
 21:
                var4 = var5.call;
                var9 = arg1;
                var8 = arg2;
                var7 = arg3;
                var11 = var5;
                var10 = var6;
                var1 = var11[var4](var10, var9, var8, var7, var6);
 45:
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
            _fun0080: for(var _fun0080_ip = 0; ; ) switch(_fun0080_ip) {
 0:
                var1 = this;
                var4 = var1.conn;
                var3 = var4.presentDesktopSourcePicker;
                var1 = null;
                if(!(var1 != var3)) { _fun0080_ip = 37; continue _fun0080 }
 23:
                var2 = var3.call;
                var1 = arg1;
                var1 = var2.bind(var3)(var4, var1);
 37:
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
            _fun0081: for(var _fun0081_ip = 0; ; ) switch(_fun0081_ip) {
 0:
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
                    _fun0082: for(var _fun0082_ip = 0; ; ) switch(_fun0082_ip) {
 0:
                        var2 = _closure3_slot2;
                        var3 = var2.getCodecCapabilities;
                        var2 = null;
                        if(!(var2 == var3)) { _fun0082_ip = 31; continue _fun0082 }
 19:
                        var2 = _closure3_slot2;
                        var3 = var2.getSupportedVideoCodecs;
                        _fun0082_ip = 41; continue _fun0082;
 31:
                        var2 = _closure3_slot2;
                        var3 = var2.getCodecCapabilities;
 41:
                        var2 = _closure3_slot1;
                        var6 = var2.on;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 10;
                        var4 = var4[var1];
                        var1 = undefined;
                        var4 = var5.bind(var1)(var4);
                        var4 = var4.BaseConnectionEvent;
                        var5 = var4.Stats;
                        var4 = var2.handleStats;
                        var4 = var6.bind(var2)(var5, var4);
                        var5 = var2.conn;
                        var4 = var5.setOnVideoCallback;
                        var2 = var2.handleVideo;
                        var2 = var4.bind(var5)(var2);
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
                            var4 = _closure1_slot22;
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
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var1 = arg2;
                var3 = var5.bind(var6)(var4, var3, var1);
                var1 = null;
                var4 = var1 == var3;
                if(var4) { _fun0081_ip = 182; continue _fun0081 }
 173:
                var2['conn'] = var3;
                var1 = var2;
 182:
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