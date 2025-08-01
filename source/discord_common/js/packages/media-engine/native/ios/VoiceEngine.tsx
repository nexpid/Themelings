// discord_common/js/packages/media-engine/native/ios/VoiceEngine.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var7 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
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
        var8 = function callbackSetter(arg1, arg2) {
            var2 = arg2;
            var _closure2_slot0 = var2;
            var2 = null;
            var _closure2_slot1 = var2;
            var5 = _closure1_slot4;
            var4 = var5.addListener;
            var3 = arg1;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 == var3;
                    var4 = undefined;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 61; continue _fun0002 }
 20:
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
 61:
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
        var9 = var10.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var9.bind(var10)(var3, var1, var2);
        var9 = 0;
        var2 = var6[var9];
        var1 = undefined;
        var2 = var7.bind(var1)(var2);
        var _closure1_slot0 = var2;
        var2 = 1;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot1 = var2;
        var2 = 2;
        var2 = var6[var2];
        var7 = var5.bind(var1)(var2);
        var2 = var7.NativeModules;
        var10 = var7.NativeEventEmitter;
        var7 = var7.Platform;
        var7 = 3;
        var11 = var6[var7];
        var11 = var5.bind(var1)(var11);
        var13 = var11.Logger;
        var11 = var13.prototype;
        var12 = Object.create(var11, {constructor: {value: var13}});
        var16 = 'VoiceEngine';
        var17 = var12;
        var11 = new var17[var13](var16, var15);
        var11 = var11 instanceof Object ? var11 : var12;
        var _closure1_slot2 = var11;
        var2 = var2.VoiceEngine;
        var _closure1_slot3 = var2;
        var11 = var10.prototype;
        var11 = Object.create(var11, {constructor: {value: var10}});
        var17 = var11;
        var16 = var2;
        var10 = new var17[var10](var16, var15);
        var10 = var10 instanceof Object ? var10 : var11;
        var _closure1_slot4 = var10;
        var10 = 'android';
        var2['platform'] = var10;
        var10 = var2.getConstants;
        var12 = var10.bind(var2)();
        var10 = null;
        var13 = var10 == var12;
        var11 = undefined;
        if(var13) { _fun0001_ip = 252; continue _fun0001 }
 246:
        var11 = var12.supportedFeatures;
 252:
        if(!(var10 == var11)) { _fun0001_ip = 266; continue _fun0001 }
 256:
        var11 = ['voice_sound_stop_loop', 'voice_relative_sounds', 'voice_legacy_subsystem', 'voice_experimental_subsystem', 'elevated_hook', 'soundshare', 'soundshare_loopback', 'set_audio_device_by_id', 'set_video_device_by_id', 'loopback', 'wumpus_video', 'hybrid_video', 'experimental_encoders', 'experiment_config', 'remote_locus_network_control', 'screen_previews', 'window_previews', 'audio_debug_state', 'connection_replay', 'simulcast_bugfix', 'RTC_REGION_RANKING', 'video_effects', 'electron_video', 'mediapipe', 'fixed_keyframe_interval'];
 266:
        var _closure1_slot5 = var11;
        var11 = function(arg1) {
            var3 = _closure1_slot5;
            var2 = var3.includes;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2['supportsFeature'] = var11;
        var11 = ['configureConnectionRetries', 'getEncryptionModes', 'setTransportOptions', 'mergeUsers', 'destroyUser', 'setLocalPan', 'setLocalVolume', 'setLocalMute', 'fastUdpReconnect', 'wasRemoteDisconnected', 'setMinimumOutputDelay', 'setSelfMute', 'setSelfDeafen', 'setNoInputThreshold', 'setPTTActive', 'setVideoBroadcast', 'triggerOnVideoCallback', 'getStats', 'getFilteredStats', 'setPingInterval', 'setDesktopSource', 'prepareSecureFramesTransition', 'executeSecureFramesTransition', 'prepareSecureFramesEpoch', 'triggerOnSpeakingCallback'];
        var _closure1_slot6 = var11;
        var11 = var2.consoleLog;
        if(!(var10 != var11)) { _fun0001_ip = 330; continue _fun0001 }
 305:
        var7 = var6[var7];
        var12 = var5.bind(var1)(var7);
        var11 = var12.setNativeLogFn;
        var7 = function(arg1, arg2, arg3) {
            var4 = _closure1_slot3;
            var3 = var4.consoleLog;
            var1 = global;
            var1 = var1.HermesInternal;
            var7 = var1.concat;
            var6 = '[';
            var5 = arg1;
            var2 = '] ';
            var1 = arg3;
            var2 = var7.bind(var6)(var5, var2, var1);
            var1 = arg2;
            var1 = var3.bind(var4)(var1, var2);
            var1 = undefined;
            return var1;
        };
        var7 = var11.bind(var12)(var7);
 330:
        var7 = var2.getMLSSigningKeyB64;
        if(!(var10 != var7)) { _fun0001_ip = 351; continue _fun0001 }
 340:
        var7 = function(arg1, arg2, arg3) {
            var2 = arg3;
            var _closure2_slot0 = var2;
            var5 = _closure1_slot3;
            var4 = var5.getMLSSigningKeyB64;
            var3 = arg1;
            var2 = arg2;
            var1 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var6 = arg2;
                    var4 = _closure2_slot0;
                    var5 = _closure1_slot11;
                    var1 = undefined;
                    var2 = arg1;
                    var3 = var5.bind(var1)(var2);
                    var2 = null;
                    var7 = var2 != var6;
                    var2 = '';
                    if(!var7) { _fun0003_ip = 43; continue _fun0003 }
 40:
                    var2 = var6;
 43:
                    var2 = var5.bind(var1)(var2);
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        };
        var2['getMLSSigningKey'] = var7;
 351:
        var7 = function() {
            var4 = _closure1_slot1;
            var3 = function VoiceConnection() {
                var5 = this;
                var _closure3_slot0 = var5;
                var4 = _closure1_slot0;
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
 0:
                        var3 = arg1;
                        var _closure4_slot0 = var3;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0004_ip = 40; continue _fun0004 }
 15:
                        var4 = _closure3_slot0;
                        var2 = var4.setOnVideoCallback_;
                        var1 = function(arg1, arg2, arg3, arg4, arg5) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                var6 = arg4;
                                var3 = arg5;
                                var1 = var3;
                                if(!var1) { _fun0005_ip = 15; continue _fun0005 }
 12:
                                var1 = !var6;
 15:
                                if(!var1) { _fun0005_ip = 37; continue _fun0005 }
 18:
                                var1 = global;
                                var2 = var1.JSON;
                                var1 = var2.parse;
                                var6 = var1.bind(var2)(var3);
 37:
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
                        _fun0004_ip = 58; continue _fun0004;
 40:
                        var2 = _closure3_slot0;
                        var1 = var2.setOnVideoCallback_;
                        var1 = var1.bind(var2)(var3);
 58:
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
                    var5 = _closure1_slot2;
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
 0:
                        var1 = arg1;
                        var2 = var1.stateUpdate;
                        var4 = var1.stateUpdateJSON;
                        var1 = null;
                        if(!(var1 == var2)) { _fun0006_ip = 44; continue _fun0006 }
 25:
                        var1 = global;
                        var3 = var1.JSON;
                        var1 = var3.parse;
                        var2 = var1.bind(var3)(var4);
 44:
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
 0:
                        var3 = arg3;
                        var5 = {};
                        var1 = null;
                        if(!(var1 != var3)) { _fun0007_ip = 77; continue _fun0007 }
 11:
                        var1 = global;
                        var2 = var1.JSON;
                        var1 = var2.parse;
                        var9 = var1.bind(var2)(var3);
                        var7 = var9;
                        var1 = undefined;
                        for(var3 in var7)
 46:
                        {
 55:
                            var11 = var3;
                            var12 = _closure1_slot11;
                            var10 = var9[var11];
                            var10 = var12.bind(var1)(var10);
                            var5[var11] = var10;
                            _fun0007_ip = 46; continue _fun0007;
                        }
 77:
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
                var1 = this;
                var4 = var1.subscriptions;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.remove;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var3 = var1.subscriptions;
                var2 = 0;
                var3['length'] = var2;
                var3 = _closure1_slot3;
                var2 = var3.connectionInstanceDestroy;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
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
 0:
                    var1 = arg1;
 3: // try_start_0
                    var5 = _closure1_slot3;
                    var4 = var1;
                    var2 = 0;
                    var3 = var4[var2];
                    var2 = var3.toUpperCase;
                    var6 = var2.bind(var3)();
                    var3 = var4.slice;
                    var2 = 1;
                    var4 = var3.bind(var4)(var2);
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = 'connectionInstance';
                    var2 = var3.bind(var2)(var6, var4);
                    var4 = var5[var2];
                    var3 = var4.bind;
                    var2 = this;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var5, var2);
 90: // try_end0
                    return var2;
 92: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var3 = _closure1_slot2;
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
                var7 = _closure1_slot4;
                var6 = var7.addListener;
                var5 = arg1;
                var2 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var4 = arg1;
                        var2 = _closure3_slot0;
                        var3 = var2.id;
                        var2 = var4.connectionId;
                        var2 = var3 === var2;
                        if(!var2) { _fun0009_ip = 32; continue _fun0009 }
 28:
                        var2 = _closure3_slot2;
 32:
                        if(!var2) { _fun0009_ip = 75; continue _fun0009 }
 35:
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
 75:
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
        var7['nextId'] = var9;
        var7 = var2.createVoiceConnectionWithOptions;
        var _closure1_slot8 = var7;
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
        var2['createVoiceConnectionWithOptions'] = var7;
        var7 = var2.createOwnStreamConnectionWithOptions;
        var _closure1_slot9 = var7;
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
        var2['createOwnStreamConnectionWithOptions'] = var7;
        var9 = 'no-input-callback';
        var7 = function(arg1) {
            var1 = arg1;
            var2 = var1.input;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var7 = var8.bind(var1)(var9, var7);
        var2['setNoInputCallback'] = var7;
        var9 = 'on-voice';
        var7 = function(arg1) {
            var1 = arg1;
            var3 = var1.level;
            var2 = var1.speaking;
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        };
        var7 = var8.bind(var1)(var9, var7);
        var2['setOnVoiceCallback'] = var7;
        var9 = 'native-mute-toggle';
        var7 = function() {
            var1 = new Array(0);
            return var1;
        };
        var7 = var8.bind(var1)(var9, var7);
        var2['setOnNativeMuteToggleCallback'] = var7;
        var9 = 'native-mute-state-changed';
        var7 = function(arg1) {
            var1 = arg1;
            var2 = var1.muted;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var7 = var8.bind(var1)(var9, var7);
        var2['setOnNativeMuteChangedCallback'] = var7;
        var9 = 'device-changed';
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
        var7 = var8.bind(var1)(var9, var7);
        var2['setDeviceChangeCallback'] = var7;
        var9 = 'volume-changed';
        var7 = function(arg1) {
            var1 = arg1;
            var3 = var1.inputVolume;
            var2 = var1.outputVolume;
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        };
        var7 = var8.bind(var1)(var9, var7);
        var2['setVolumeChangeCallback'] = var7;
        var9 = 'active-sinks-change';
        var7 = function(arg1) {
            var1 = arg1;
            var3 = var1.streamId;
            var2 = var1.active;
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        };
        var7 = var8.bind(var1)(var9, var7);
        var2['setActiveSinksChangeCallback'] = var7;
        var9 = 'on-broadcast-requested';
        var7 = function() {
            var1 = new Array(0);
            return var1;
        };
        var7 = var8.bind(var1)(var9, var7);
        var2['setBroadcastRequestCallback'] = var7;
        var9 = 'on-broadcast-finished';
        var7 = function() {
            var1 = new Array(0);
            return var1;
        };
        var7 = var8.bind(var1)(var9, var7);
        var2['setBroadcastFinishedCallback'] = var7;
        var9 = 'on-broadcast-annotated';
        var7 = function(arg1) {
            var1 = arg1;
            var2 = var1.appBundleIdentifier;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var7 = var8.bind(var1)(var9, var7);
        var2['setBroadcastAnnotatedCallback'] = var7;
        var9 = 'on-broadcast-blocked';
        var7 = function() {
            var1 = new Array(0);
            return var1;
        };
        var7 = var8.bind(var1)(var9, var7);
        var2['setBroadcastBlockedCallback'] = var7;
        var9 = 'on-broadcast-thumbnail';
        var7 = function(arg1) {
            var1 = arg1;
            var2 = var1.imgdata;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var7 = var8.bind(var1)(var9, var7);
        var _closure1_slot10 = var7;
        var7 = function(arg1, arg2, arg3, arg4) {
            var4 = _closure1_slot10;
            var1 = undefined;
            var3 = arg4;
            var3 = var4.bind(var1)(var3);
            var6 = _closure1_slot3;
            var5 = var6.setBroadcastThumbnailParams;
            var4 = arg1;
            var3 = arg2;
            var2 = arg3;
            var2 = var5.bind(var6)(var4, var3, var2);
            return var1;
        };
        var2['setBroadcastThumbnailCallback'] = var7;
        var7 = 'audio-input-initialized';
        var4 = function(arg1) {
            var1 = new Array(1);
            var2 = arg1;
            var1[0] = var2;
            return var1;
        };
        var4 = var8.bind(var1)(var7, var4);
        var2['setAudioInputInitializationCallback'] = var4;
        var4 = var2.initializeEngine;
        var4 = var4.bind(var2)();
        var4 = 4;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = '../discord_common/js/packages/media-engine/native/ios/VoiceEngine.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();