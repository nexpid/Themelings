// discord_common/js/packages/media-engine/native/ios/VoiceEngine.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var4 = require;
        var7 = metroImportDefault;
        var3 = exports;
        var5 = dependencyMap;
        var _closure1_slot0 = var4;
        var _closure1_slot1 = var5;
        var1 = function base64Decode(arg1) {
            var1 = global;
            var4 = var1.Buffer;
            var3 = var4.from;
            var2 = arg1;
            var1 = 'base64';
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.buffer;
            return var1;
        };
        var _closure1_slot11 = var1;
        var1 = function base64Encode(arg1) {
            var1 = global;
            var3 = var1.Buffer;
            var2 = var3.from;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var2 = var3.toString;
            var1 = 'base64';
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var _closure1_slot12 = var1;
        var9 = function callbackSetter(arg1, arg2) {
            var2 = arg2;
            var _closure2_slot0 = var2;
            var2 = null;
            var _closure2_slot1 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 4;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var5 = var2.VoiceEngineEmitter;
            var4 = var5.addListener;
            var3 = arg1;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 == var3;
                    var4 = undefined;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot1;
                    var5 = _closure2_slot0;
                    var2 = arg1;
                    var8 = var5.bind(var4)(var2);
                    var2 = new Array(0);
                    var7 = 0;
                    var9 = var2;
                    var5 = arraySpread(var9, var8, var7);
                    var9 = var3;
                    var8 = var2;
                    var7 = undefined;
                    var1 = apply(var9, var8, var7);
case 2:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            var1 = function(arg1) {
                var1 = arg1;
                _closure2_slot1 = var1;
                return var1;
            };
            return var1;
        };
        var1 = global;
        var10 = var1.Object;
        var8 = var10.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var10)(var3, var1, var2);
        var8 = 0;
        var2 = var5[var8];
        var1 = undefined;
        var2 = var7.bind(var1)(var2);
        var _closure1_slot2 = var2;
        var2 = 1;
        var2 = var5[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot3 = var2;
        var2 = 2;
        var2 = var5[var2];
        var2 = var4.bind(var1)(var2);
        var2 = var2.Platform;
        var7 = 3;
        var2 = var5[var7];
        var2 = var4.bind(var1)(var2);
        var11 = var2.Logger;
        var2 = var11.prototype;
        var10 = Object.create(var2, {constructor: {value: var11}});
        var16 = 'VoiceEngine';
        var17 = var10;
        var2 = new var17[var11](var16, var15);
        var2 = var2 instanceof Object ? var2 : var10;
        var _closure1_slot4 = var2;
        var2 = 4;
        var10 = var5[var2];
        var10 = var4.bind(var1)(var10);
        var11 = var10.VoiceEngine;
        var10 = 'android';
        var11['platform'] = var10;
        var10 = var5[var2];
        var10 = var4.bind(var1)(var10);
        var11 = var10.VoiceEngine;
        var10 = var11.getConstants;
        var12 = var10.bind(var11)();
        var10 = null;
        var13 = var10 == var12;
        var11 = undefined;
        if(var13) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var11 = var12.supportedFeatures;
case 4:
        if(!(var10 == var11)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
        var11 = ['voice_sound_stop_loop', 'voice_relative_sounds', 'voice_legacy_subsystem', 'voice_experimental_subsystem', 'elevated_hook', 'soundshare', 'soundshare_loopback', 'set_audio_device_by_id', 'set_video_device_by_id', 'loopback', 'wumpus_video', 'hybrid_video', 'experimental_encoders', 'experiment_config', 'remote_locus_network_control', 'screen_previews', 'window_previews', 'audio_debug_state', 'connection_replay', 'simulcast_bugfix', 'RTC_REGION_RANKING', 'video_effects', 'electron_video', 'mediapipe', 'fixed_keyframe_interval'];
case 6:
        var _closure1_slot5 = var11;
        var11 = var5[var2];
        var11 = var4.bind(var1)(var11);
        var12 = var11.VoiceEngine;
        var11 = function(arg1) {
            var3 = _closure1_slot5;
            var2 = var3.includes;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var12['supportsFeature'] = var11;
        var11 = ['configureConnectionRetries', 'getEncryptionModes', 'setTransportOptions', 'mergeUsers', 'destroyUser', 'setLocalPan', 'setLocalVolume', 'setLocalMute', 'fastUdpReconnect', 'wasRemoteDisconnected', 'setMinimumOutputDelay', 'setSelfMute', 'setSelfDeafen', 'setNoInputThreshold', 'setPTTActive', 'setVideoBroadcast', 'triggerOnVideoCallback', 'getStats', 'getFilteredStats', 'setPingInterval', 'setDesktopSource', 'prepareSecureFramesTransition', 'executeSecureFramesTransition', 'prepareSecureFramesEpoch', 'triggerOnSpeakingCallback'];
        var _closure1_slot6 = var11;
        var11 = var5[var2];
        var11 = var4.bind(var1)(var11);
        var11 = var11.VoiceEngine;
        var11 = var11.consoleLog;
        if(!(var10 != var11)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
        var7 = var5[var7];
        var12 = var4.bind(var1)(var7);
        var11 = var12.setNativeLogFn;
        var7 = function(arg1, arg2, arg3) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var5 = var2.VoiceEngine;
            var4 = var5.consoleLog;
            var2 = global;
            var2 = var2.HermesInternal;
            var8 = var2.concat;
            var7 = '[';
            var6 = arg1;
            var3 = '] ';
            var2 = arg3;
            var3 = var8.bind(var7)(var6, var3, var2);
            var2 = arg2;
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var7 = var11.bind(var12)(var7);
case 8:
        var7 = var5[var2];
        var7 = var4.bind(var1)(var7);
        var7 = var7.VoiceEngine;
        var7 = var7.getMLSSigningKeyB64;
        if(!(var10 != var7)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
        var7 = var5[var2];
        var7 = var4.bind(var1)(var7);
        var10 = var7.VoiceEngine;
        var7 = function(arg1, arg2, arg3) {
            var2 = arg3;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 4;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var5 = var2.VoiceEngine;
            var4 = var5.getMLSSigningKeyB64;
            var3 = arg1;
            var2 = arg2;
            var1 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var6 = arg2;
                    var4 = _closure2_slot0;
                    var5 = _closure1_slot11;
                    var1 = undefined;
                    var2 = arg1;
                    var3 = var5.bind(var1)(var2);
                    var2 = null;
                    var7 = var2 != var6;
                    var2 = '';
                    if(!var7) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var2 = var6;
case 12:
                    var2 = var5.bind(var1)(var2);
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        };
        var10['getMLSSigningKey'] = var7;
case 10:
        var7 = function() {
            var4 = _closure1_slot3;
            var3 = function VoiceConnection() {
                var5 = this;
                var _closure3_slot0 = var5;
                var4 = _closure1_slot2;
                var7 = _closure2_slot0;
                var1 = undefined;
                var4 = var4.bind(var1)(var5, var7);
                var4 = var7.nextId;
                var4 = parseFloat(var4);
                var6 = var4 + 1;
                var7['nextId'] = var6;
                var5['id'] = var4;
                var4 = new Array(0);
                var5['subscriptions'] = var4;
                var7 = var5.callbackSetter;
                var6 = 'no-input-callback';
                var4 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.input;
                    var1 = new Array(1);
                    var1[0] = var2;
                    return var1;
                };
                var4 = var7.bind(var5)(var6, var4);
                var5['setNoInputCallback'] = var4;
                var7 = var5.callbackSetter;
                var6 = 'on-first-frame-callback';
                var4 = function(arg1) {
                    var1 = arg1;
                    var4 = var1.userId;
                    var3 = var1.ssrc;
                    var2 = var1.streamId;
                    var1 = new Array(3);
                    var1[0] = var4;
                    var1[1] = var3;
                    var1[2] = var2;
                    return var1;
                };
                var4 = var7.bind(var5)(var6, var4);
                var5['setOnFirstFrameCallback'] = var4;
                var7 = var5.callbackSetter;
                var6 = 'native-mute-toggle';
                var4 = function() {
                    var1 = new Array(0);
                    return var1;
                };
                var4 = var7.bind(var5)(var6, var4);
                var5['setOnNativeMuteToggleCallback'] = var4;
                var7 = var5.callbackSetter;
                var6 = 'native-mute-state-changed';
                var4 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.muted;
                    var1 = new Array(1);
                    var1[0] = var2;
                    return var1;
                };
                var4 = var7.bind(var5)(var6, var4);
                var5['setOnNativeMuteChangedCallback'] = var4;
                var7 = var5.callbackSetter;
                var6 = 'ping-callback';
                var4 = function(arg1) {
                    var1 = arg1;
                    var5 = var1.ping;
                    var4 = var1.server;
                    var3 = var1.port;
                    var2 = var1.seq;
                    var1 = new Array(4);
                    var1[0] = var5;
                    var1[1] = var4;
                    var1[2] = var3;
                    var1[3] = var2;
                    return var1;
                };
                var4 = var7.bind(var5)(var6, var4);
                var5['setPingCallback'] = var4;
                var7 = var5.callbackSetter;
                var6 = 'ping-timeout-callback';
                var4 = function(arg1) {
                    var1 = arg1;
                    var4 = var1.server;
                    var3 = var1.port;
                    var2 = var1.seq;
                    var1 = new Array(3);
                    var1[0] = var4;
                    var1[1] = var3;
                    var1[2] = var2;
                    return var1;
                };
                var4 = var7.bind(var5)(var6, var4);
                var5['setPingTimeoutCallback'] = var4;
                var7 = var5.callbackSetter;
                var6 = 'user-speaking';
                var4 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.userId;
                    var2 = var1.isSpeaking;
                    var1 = new Array(2);
                    var1[0] = var3;
                    var1[1] = var2;
                    return var1;
                };
                var4 = var7.bind(var5)(var6, var4);
                var5['setOnSpeakingCallback_'] = var4;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var3 = var2.setOnSpeakingCallback_;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
                    var1 = var2.triggerOnSpeakingCallback;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var5['setOnSpeakingCallback'] = var4;
                var7 = var5.callbackSetter;
                var6 = 'on-video-callback';
                var4 = function(arg1) {
                    var1 = arg1;
                    var6 = var1.userId;
                    var5 = var1.ssrc;
                    var4 = var1.streamId;
                    var3 = var1.videoStreamParameters;
                    var2 = var1.videoStreamParametersJSON;
                    var1 = new Array(5);
                    var1[0] = var6;
                    var1[1] = var5;
                    var1[2] = var4;
                    var1[3] = var3;
                    var1[4] = var2;
                    return var1;
                };
                var4 = var7.bind(var5)(var6, var4);
                var5['setOnVideoCallback_'] = var4;
                var4 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = arg1;
                        var _closure4_slot0 = var3;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                        var4 = _closure3_slot0;
                        var2 = var4.setOnVideoCallback_;
                        var1 = function(arg1, arg2, arg3, arg4, arg5) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                var6 = arg4;
                                var3 = arg5;
                                var1 = var3;
                                if(!var1) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                                var1 = !var6;
case 14:
                                if(!var1) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                                var1 = global;
                                var2 = var1.JSON;
                                var1 = var2.parse;
                                var6 = var1.bind(var2)(var3);
case 16:
                                var5 = _closure4_slot0;
                                var11 = undefined;
                                var10 = arg1;
                                var9 = arg2;
                                var8 = arg3;
                                var7 = var6;
                                var1 = var11[var5](var10, var9, var8, var7, var6);
                                return var1;
                            }
                        };
                        var1 = var2.bind(var4)(var1);
                        _fun0004_ip = 18; continue _fun0004;
case 13:
                        var2 = _closure3_slot0;
                        var1 = var2.setOnVideoCallback_;
                        var1 = var1.bind(var2)(var3);
case 18:
                        var2 = _closure3_slot0;
                        var1 = var2.triggerOnVideoCallback;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
                    }
                };
                var5['setOnVideoCallback'] = var4;
                var4 = function(arg1) {
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var4 = _closure3_slot0;
                    var3 = var4.boundConnectionMethod;
                    var1 = 'getMLSKeyPackageB64';
                    var3 = var3.bind(var4)(var1);
                    var1 = undefined;
                    var2 = function(arg1) {
                        var3 = _closure1_slot11;
                        var1 = undefined;
                        var2 = arg1;
                        var3 = var3.bind(var1)(var2);
                        var2 = _closure4_slot0;
                        var2 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var5['getMLSKeyPackage'] = var4;
                var4 = function(arg1) {
                    var4 = _closure1_slot12;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var5 = _closure1_slot4;
                    var4 = var5.info;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var6 = var2.concat;
                    var2 = 'updateMLSExternalSender: ';
                    var2 = var6.bind(var2)(var3);
                    var2 = var4.bind(var5)(var2);
                    var5 = _closure3_slot0;
                    var4 = var5.boundConnectionMethod;
                    var2 = 'updateMLSExternalSenderB64';
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.bind(var1)(var3);
                    return var1;
                };
                var5['updateMLSExternalSender'] = var4;
                var4 = function(arg1, arg2) {
                    var1 = arg2;
                    var _closure4_slot0 = var1;
                    var4 = _closure1_slot12;
                    var1 = undefined;
                    var3 = arg1;
                    var4 = var4.bind(var1)(var3);
                    var6 = _closure3_slot0;
                    var5 = var6.boundConnectionMethod;
                    var3 = 'processMLSProposalsB64';
                    var3 = var5.bind(var6)(var3);
                    var2 = function(arg1) {
                        var3 = _closure1_slot11;
                        var1 = undefined;
                        var2 = arg1;
                        var3 = var3.bind(var1)(var2);
                        var2 = _closure4_slot0;
                        var2 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var2 = var3.bind(var1)(var4, var2);
                    return var1;
                };
                var5['processMLSProposals'] = var4;
                var4 = function(arg1, arg2, arg3) {
                    var3 = _closure1_slot12;
                    var1 = undefined;
                    var2 = arg2;
                    var5 = var3.bind(var1)(var2);
                    var6 = _closure3_slot0;
                    var3 = var6.boundConnectionMethod;
                    var2 = 'prepareMLSCommitTransitionB64';
                    var4 = var3.bind(var6)(var2);
                    var3 = var6.wrapRosterCallback;
                    var2 = arg3;
                    var3 = var3.bind(var6)(var2);
                    var2 = arg1;
                    var2 = var4.bind(var1)(var2, var5, var3);
                    return var1;
                };
                var5['prepareMLSCommitTransition'] = var4;
                var4 = function(arg1, arg2, arg3) {
                    var3 = _closure1_slot12;
                    var1 = undefined;
                    var2 = arg2;
                    var5 = var3.bind(var1)(var2);
                    var6 = _closure3_slot0;
                    var3 = var6.boundConnectionMethod;
                    var2 = 'processMLSWelcomeB64';
                    var4 = var3.bind(var6)(var2);
                    var3 = var6.wrapRosterCallback;
                    var2 = arg3;
                    var3 = var3.bind(var6)(var2);
                    var2 = arg1;
                    var2 = var4.bind(var1)(var2, var5, var3);
                    return var1;
                };
                var5['processMLSWelcome'] = var4;
                var4 = function(arg1, arg2, arg3) {
                    var1 = arg3;
                    var _closure4_slot0 = var1;
                    var4 = _closure3_slot0;
                    var3 = var4.boundConnectionMethod;
                    var1 = 'getMLSPairwiseFingerprintB64';
                    var5 = var3.bind(var4)(var1);
                    var1 = undefined;
                    var4 = arg1;
                    var3 = arg2;
                    var2 = function(arg1) {
                        var3 = _closure1_slot11;
                        var1 = undefined;
                        var2 = arg1;
                        var3 = var3.bind(var1)(var2);
                        var2 = _closure4_slot0;
                        var2 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var2 = var5.bind(var1)(var4, var3, var2);
                    return var1;
                };
                var5['getMLSPairwiseFingerprint'] = var4;
                var7 = var5.callbackSetter;
                var6 = 'mls-failure-callback';
                var4 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.source;
                    var2 = var1.reason;
                    var1 = new Array(2);
                    var1[0] = var3;
                    var1[1] = var2;
                    return var1;
                };
                var4 = var7.bind(var5)(var6, var4);
                var5['setOnMLSFailureCallback'] = var4;
                var7 = var5.callbackSetter;
                var6 = 'secure-frames-state-update-callback';
                var4 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.stateUpdate;
                        var4 = var1.stateUpdateJSON;
                        var1 = null;
                        if(!(var1 == var2)) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                        var1 = global;
                        var3 = var1.JSON;
                        var1 = var3.parse;
                        var2 = var1.bind(var3)(var4);
case 19:
                        var1 = new Array(1);
                        var1[0] = var2;
                        return var1;
                    }
                };
                var4 = var7.bind(var5)(var6, var4);
                var5['setSecureFramesStateUpdateCallback'] = var4;
                var4 = _closure1_slot6;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    var3 = arg1;
                    var2 = _closure3_slot0;
                    var1 = var2.boundConnectionMethod;
                    var1 = var1.bind(var2)(var3);
                    var2[var3] = var1;
                    var1 = undefined;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var _closure2_slot0 = var3;
            var1 = {};
            var2 = 'wrapRosterCallback';
            var1['key'] = var2;
            var2 = function value(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var1 = function(arg1, arg2, arg3) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var3 = arg3;
                        var5 = {};
                        var1 = null;
                        if(!(var1 != var3)) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                        var1 = global;
                        var2 = var1.JSON;
                        var1 = var2.parse;
                        var9 = var1.bind(var2)(var3);
                        var7 = var9;
                        var1 = undefined;
                        for(var3 in var7)
case 23:
                        {
case 24:
                            var11 = var3;
                            var12 = _closure1_slot11;
                            var10 = var9[var11];
                            var10 = var12.bind(var1)(var10);
                            var5[var11] = var10;
                            _fun0007_ip = 23; continue _fun0007;
                        }
case 21:
                        var4 = _closure3_slot0;
                        var1 = undefined;
                        var3 = arg1;
                        var2 = arg2;
                        var2 = var4.bind(var1)(var3, var2, var5);
                        return var1;
                    }
                };
                return var1;
            };
            var1['value'] = var2;
            var2 = new Array(5);
            var2[0] = var1;
            var1 = {};
            var6 = 'destroy';
            var1['key'] = var6;
            var6 = function value() {
                var2 = this;
                var4 = var2.subscriptions;
                var3 = var4.forEach;
                var1 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.remove;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = var3.bind(var4)(var1);
                var3 = var2.subscriptions;
                var1 = 0;
                var3['length'] = var1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 4;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = var3.VoiceEngine;
                var3 = var4.connectionInstanceDestroy;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['value'] = var6;
            var2[1] = var1;
            var1 = {};
            var6 = 'getId';
            var1['key'] = var6;
            var6 = function value() {
                var1 = this;
                var1 = var1.id;
                return var1;
            };
            var1['value'] = var6;
            var2[2] = var1;
            var1 = {};
            var6 = 'boundConnectionMethod';
            var1['key'] = var6;
            var6 = function value(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
case 25: // try_start_0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 4;
                    var4 = var7[var2];
                    var3 = undefined;
                    var4 = var6.bind(var3)(var4);
                    var5 = var4.VoiceEngine;
                    var9 = var1;
                    var4 = 0;
                    var8 = var9[var4];
                    var4 = var8.toUpperCase;
                    var10 = var4.bind(var8)();
                    var8 = var9.slice;
                    var4 = 1;
                    var9 = var8.bind(var9)(var4);
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var8 = var4.concat;
                    var4 = 'connectionInstance';
                    var4 = var8.bind(var4)(var10, var9);
                    var5 = var5[var4];
                    var4 = var5.bind;
                    var2 = var7[var2];
                    var2 = var6.bind(var3)(var2);
                    var3 = var2.VoiceEngine;
                    var2 = this;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var3, var2);
case 26: // try_end0
                    return var2;
case 27: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var3 = _closure1_slot4;
                    var2 = var3.warn;
                    var6 = var1;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var4 = 'VoiceConnection(...): ';
                    var1 = ' does not exist.';
                    var1 = var5.bind(var4)(var6, var1);
                    var1 = var2.bind(var3)(var1);
                    var1 = function() {
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
                }
            };
            var1['value'] = var6;
            var2[3] = var1;
            var1 = {};
            var6 = 'callbackSetter';
            var1['key'] = var6;
            var5 = function value(arg1, arg2) {
                var2 = this;
                var _closure3_slot0 = var2;
                var3 = arg2;
                var _closure3_slot1 = var3;
                var3 = null;
                var _closure3_slot2 = var3;
                var4 = var2.subscriptions;
                var3 = var4.push;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 4;
                var5 = var5[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var5);
                var7 = var2.VoiceEngineEmitter;
                var6 = var7.addListener;
                var5 = arg1;
                var2 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var4 = arg1;
                        var2 = _closure3_slot0;
                        var3 = var2.id;
                        var2 = var4.connectionId;
                        var2 = var3 === var2;
                        if(!var2) { _fun0009_ip = 28; continue _fun0009 }
case 29:
                        var2 = _closure3_slot2;
case 28:
                        if(!var2) { _fun0009_ip = 30; continue _fun0009 }
case 31:
                        var3 = _closure3_slot2;
                        var1 = _closure3_slot1;
                        var2 = undefined;
                        var7 = var1.bind(var2)(var4);
                        var1 = new Array(0);
                        var6 = 0;
                        var8 = var1;
                        var4 = arraySpread(var8, var7, var6);
                        var8 = var3;
                        var7 = var1;
                        var6 = undefined;
                        var1 = apply(var8, var7, var6);
case 30:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var6.bind(var7)(var5, var2);
                var2 = var3.bind(var4)(var2);
                var1 = function(arg1) {
                    var1 = arg1;
                    _closure3_slot2 = var1;
                    return var1;
                };
                return var1;
            };
            var1['value'] = var5;
            var2[4] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var7 = var7.bind(var1)();
        var _closure1_slot7 = var7;
        var7['nextId'] = var8;
        var7 = var5[var2];
        var7 = var4.bind(var1)(var7);
        var7 = var7.VoiceEngine;
        var7 = var7.createVoiceConnectionWithOptions;
        var _closure1_slot8 = var7;
        var7 = var5[var2];
        var7 = var4.bind(var1)(var7);
        var8 = var7.VoiceEngine;
        var7 = function(arg1, arg2, arg3) {
            var1 = _closure1_slot7;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var12 = var3;
            var1 = new var12[var1](var11);
            var1 = var1 instanceof Object ? var1 : var3;
            var7 = _closure1_slot8;
            var2 = var1.getId;
            var11 = var2.bind(var1)();
            var12 = undefined;
            var10 = arg1;
            var9 = arg2;
            var8 = arg3;
            var2 = var12[var7](var11, var10, var9, var8, var7);
            return var1;
        };
        var8['createVoiceConnectionWithOptions'] = var7;
        var7 = var5[var2];
        var7 = var4.bind(var1)(var7);
        var7 = var7.VoiceEngine;
        var7 = var7.createOwnStreamConnectionWithOptions;
        var _closure1_slot9 = var7;
        var7 = var5[var2];
        var7 = var4.bind(var1)(var7);
        var8 = var7.VoiceEngine;
        var7 = function(arg1, arg2, arg3) {
            var1 = _closure1_slot7;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var12 = var3;
            var1 = new var12[var1](var11);
            var1 = var1 instanceof Object ? var1 : var3;
            var7 = _closure1_slot9;
            var2 = var1.getId;
            var11 = var2.bind(var1)();
            var12 = undefined;
            var10 = arg1;
            var9 = arg2;
            var8 = arg3;
            var2 = var12[var7](var11, var10, var9, var8, var7);
            return var1;
        };
        var8['createOwnStreamConnectionWithOptions'] = var7;
        var7 = var5[var2];
        var7 = var4.bind(var1)(var7);
        var8 = var7.VoiceEngine;
        var10 = 'no-input-callback';
        var7 = function(arg1) {
            var1 = arg1;
            var2 = var1.input;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var7 = var9.bind(var1)(var10, var7);
        var8['setNoInputCallback'] = var7;
        var7 = var5[var2];
        var7 = var4.bind(var1)(var7);
        var8 = var7.VoiceEngine;
        var10 = 'on-voice';
        var7 = function(arg1) {
            var1 = arg1;
            var3 = var1.level;
            var2 = var1.speaking;
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        };
        var7 = var9.bind(var1)(var10, var7);
        var8['setOnVoiceCallback'] = var7;
        var7 = var5[var2];
        var7 = var4.bind(var1)(var7);
        var8 = var7.VoiceEngine;
        var10 = 'native-mute-toggle';
        var7 = function() {
            var1 = new Array(0);
            return var1;
        };
        var7 = var9.bind(var1)(var10, var7);
        var8['setOnNativeMuteToggleCallback'] = var7;
        var7 = var5[var2];
        var7 = var4.bind(var1)(var7);
        var8 = var7.VoiceEngine;
        var10 = 'native-mute-state-changed';
        var7 = function(arg1) {
            var1 = arg1;
            var2 = var1.muted;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var7 = var9.bind(var1)(var10, var7);
        var8['setOnNativeMuteChangedCallback'] = var7;
        var7 = var5[var2];
        var7 = var4.bind(var1)(var7);
        var8 = var7.VoiceEngine;
        var10 = 'device-changed';
        var7 = function(arg1) {
            var1 = arg1;
            var4 = var1.inputDevices;
            var3 = var1.outputDevices;
            var2 = var1.videoInputDevices;
            var1 = new Array(3);
            var1[0] = var4;
            var1[1] = var3;
            var1[2] = var2;
            return var1;
        };
        var7 = var9.bind(var1)(var10, var7);
        var8['setDeviceChangeCallback'] = var7;
        var7 = var5[var2];
        var7 = var4.bind(var1)(var7);
        var8 = var7.VoiceEngine;
        var10 = 'volume-changed';
        var7 = function(arg1) {
            var1 = arg1;
            var3 = var1.inputVolume;
            var2 = var1.outputVolume;
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        };
        var7 = var9.bind(var1)(var10, var7);
        var8['setVolumeChangeCallback'] = var7;
        var7 = var5[var2];
        var7 = var4.bind(var1)(var7);
        var8 = var7.VoiceEngine;
        var10 = 'active-sinks-change';
        var7 = function(arg1) {
            var1 = arg1;
            var3 = var1.streamId;
            var2 = var1.active;
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        };
        var7 = var9.bind(var1)(var10, var7);
        var8['setActiveSinksChangeCallback'] = var7;
        var7 = var5[var2];
        var7 = var4.bind(var1)(var7);
        var8 = var7.VoiceEngine;
        var10 = 'on-broadcast-requested';
        var7 = function() {
            var1 = new Array(0);
            return var1;
        };
        var7 = var9.bind(var1)(var10, var7);
        var8['setBroadcastRequestCallback'] = var7;
        var7 = var5[var2];
        var7 = var4.bind(var1)(var7);
        var8 = var7.VoiceEngine;
        var10 = 'on-broadcast-finished';
        var7 = function() {
            var1 = new Array(0);
            return var1;
        };
        var7 = var9.bind(var1)(var10, var7);
        var8['setBroadcastFinishedCallback'] = var7;
        var7 = var5[var2];
        var7 = var4.bind(var1)(var7);
        var8 = var7.VoiceEngine;
        var10 = 'on-broadcast-annotated';
        var7 = function(arg1) {
            var1 = arg1;
            var2 = var1.appBundleIdentifier;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var7 = var9.bind(var1)(var10, var7);
        var8['setBroadcastAnnotatedCallback'] = var7;
        var7 = var5[var2];
        var7 = var4.bind(var1)(var7);
        var8 = var7.VoiceEngine;
        var10 = 'on-broadcast-blocked';
        var7 = function() {
            var1 = new Array(0);
            return var1;
        };
        var7 = var9.bind(var1)(var10, var7);
        var8['setBroadcastBlockedCallback'] = var7;
        var7 = var5[var2];
        var7 = var4.bind(var1)(var7);
        var8 = var7.VoiceEngine;
        var10 = 'system-microphone-mode-change';
        var7 = function(arg1) {
            var1 = arg1;
            var2 = var1.mode;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var7 = var9.bind(var1)(var10, var7);
        var8['setSystemMicrophoneModeChangeCallback'] = var7;
        var8 = 'on-broadcast-thumbnail';
        var7 = function(arg1) {
            var1 = arg1;
            var2 = var1.imgdata;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var7 = var9.bind(var1)(var8, var7);
        var _closure1_slot10 = var7;
        var7 = var5[var2];
        var7 = var4.bind(var1)(var7);
        var8 = var7.VoiceEngine;
        var7 = function(arg1, arg2, arg3, arg4) {
            var4 = _closure1_slot10;
            var1 = undefined;
            var3 = arg4;
            var3 = var4.bind(var1)(var3);
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 4;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var6 = var2.VoiceEngine;
            var5 = var6.setBroadcastThumbnailParams;
            var4 = arg1;
            var3 = arg2;
            var2 = arg3;
            var2 = var5.bind(var6)(var4, var3, var2);
            return var1;
        };
        var8['setBroadcastThumbnailCallback'] = var7;
        var7 = var5[var2];
        var7 = var4.bind(var1)(var7);
        var7 = var7.VoiceEngine;
        var8 = 'audio-input-initialized';
        var6 = function(arg1) {
            var1 = new Array(1);
            var2 = arg1;
            var1[0] = var2;
            return var1;
        };
        var6 = var9.bind(var1)(var8, var6);
        var7['setAudioInputInitializationCallback'] = var6;
        var6 = var5[var2];
        var6 = var4.bind(var1)(var6);
        var7 = var6.VoiceEngine;
        var6 = var7.initializeEngine;
        var6 = var6.bind(var7)();
        var6 = 5;
        var6 = var5[var6];
        var8 = var4.bind(var1)(var6);
        var7 = var8.fileFinishedImporting;
        var6 = '../discord_common/js/packages/media-engine/native/ios/VoiceEngine.tsx';
        var6 = var7.bind(var8)(var6);
        var2 = var5[var2];
        var2 = var4.bind(var1)(var2);
        var2 = var2.VoiceEngine;
        var3['default'] = var2;
        return var1;
    }
})();