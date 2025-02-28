// discord_common/js/packages/media-engine/native/ios/VoiceEngine.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        golfie = argBaz;
        zuuluu = argFre;
        oscard = argPlu;
        entity = function(argFoo) { // Original name: base64Decode
            entity = global;
            tangon = entity.Buffer;
            zuuluu = tangon.from;
            michal = argFoo;
            entity = 'base64';
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = entity.buffer;
            return entity;
        };
        var _closure1_slot11 = entity;
        entity = function(argFoo) { // Original name: base64Encode
            entity = global;
            zuuluu = entity.Buffer;
            michal = zuuluu.from;
            entity = argFoo;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.toString;
            entity = 'base64';
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        var _closure1_slot12 = entity;
        option = function(argFoo, argBar) { // Original name: callbackSetter
            michal = argBar;
            var _closure2_slot0 = michal;
            michal = null;
            var _closure2_slot1 = michal;
            report = _closure1_slot4;
            tangon = report.addListener;
            zuuluu = argFoo;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    entity = null;
                    zuuluu = entity == zuuluu;
                    tangon = undefined;
                    entity = undefined;
                    if(zuuluu) { _fun00004_ip = 61; continue _fun00003 }
 20:
                    zuuluu = _closure2_slot1;
                    report = _closure2_slot0;
                    michal = argFoo;
                    option = report.bind(tangon)(michal);
                    michal = new Array(0);
                    golfie = 0;
                    verify = michal;
                    report = arraySpread(verify, option, golfie);
                    verify = zuuluu;
                    option = michal;
                    golfie = undefined;
                    entity = apply(verify, option, golfie);
 61:
                    return entity;
                }
            };
            michal = tangon.bind(report)(zuuluu, michal);
            entity = function(argFoo) {
                entity = argFoo;
                _closure2_slot1 = entity;
                return entity;
            };
            return entity;
        };
        entity = global;
        offset = entity.Object;
        verify = offset.defineProperty;
        michal = {};
        entity = true;
        michal['value'] = entity;
        entity = '__esModule';
        entity = verify.bind(offset)(zuuluu, entity, michal);
        verify = 0;
        michal = oscard[verify];
        entity = undefined;
        michal = golfie.bind(entity)(michal);
        var _closure1_slot0 = michal;
        michal = 1;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        var _closure1_slot1 = michal;
        michal = 2;
        michal = oscard[michal];
        golfie = report.bind(entity)(michal);
        michal = golfie.NativeModules;
        offset = golfie.NativeEventEmitter;
        golfie = golfie.Platform;
        golfie = 3;
        yankee = oscard[golfie];
        yankee = report.bind(entity)(yankee);
        foxtra = yankee.Logger;
        yankee = foxtra.prototype;
        romeon = Object.create(yankee, {constructor: {value: foxtra}});
        sizing = 'VoiceEngine';
        output = romeon;
        yankee = new output[foxtra](sizing, kiloes);
        yankee = yankee instanceof Object ? yankee : romeon;
        var _closure1_slot2 = yankee;
        michal = michal.VoiceEngine;
        var _closure1_slot3 = michal;
        yankee = offset.prototype;
        yankee = Object.create(yankee, {constructor: {value: offset}});
        output = yankee;
        sizing = michal;
        offset = new output[offset](sizing, kiloes);
        offset = offset instanceof Object ? offset : yankee;
        var _closure1_slot4 = offset;
        offset = 'android';
        michal['platform'] = offset;
        offset = michal.getConstants;
        romeon = offset.bind(michal)();
        offset = null;
        foxtra = offset == romeon;
        yankee = undefined;
        if(foxtra) { _fun00002_ip = 252; continue _fun00001 }
 246:
        yankee = romeon.supportedFeatures;
 252:
        if(!(offset == yankee)) { _fun00002_ip = 266; continue _fun00001 }
 256:
        yankee = ['voice_sound_stop_loop', 'voice_relative_sounds', 'voice_legacy_subsystem', 'voice_experimental_subsystem', 'elevated_hook', 'soundshare', 'soundshare_loopback', 'set_audio_device_by_id', 'set_video_device_by_id', 'loopback', 'wumpus_video', 'hybrid_video', 'experimental_encoders', 'experiment_config', 'remote_locus_network_control', 'screen_previews', 'window_previews', 'audio_debug_state', 'connection_replay', 'simulcast_bugfix', 'RTC_REGION_RANKING', 'video_effects', 'direct_video', 'electron_video', 'mediapipe', 'fixed_keyframe_interval'];
 266:
        var _closure1_slot5 = yankee;
        yankee = function(argFoo) {
            zuuluu = _closure1_slot5;
            michal = zuuluu.includes;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal['supportsFeature'] = yankee;
        yankee = ['configureConnectionRetries', 'getEncryptionModes', 'setTransportOptions', 'mergeUsers', 'destroyUser', 'setLocalPan', 'setLocalVolume', 'setLocalMute', 'fastUdpReconnect', 'wasRemoteDisconnected', 'setMinimumOutputDelay', 'setSelfMute', 'setSelfDeafen', 'setNoInputThreshold', 'setPTTActive', 'setVideoBroadcast', 'triggerOnVideoCallback', 'getStats', 'getFilteredStats', 'setPingInterval', 'setDesktopSource', 'prepareSecureFramesTransition', 'executeSecureFramesTransition', 'prepareSecureFramesEpoch', 'triggerOnSpeakingCallback'];
        var _closure1_slot6 = yankee;
        yankee = michal.consoleLog;
        if(!(offset != yankee)) { _fun00002_ip = 330; continue _fun00001 }
 305:
        golfie = oscard[golfie];
        romeon = report.bind(entity)(golfie);
        yankee = romeon.setNativeLogFn;
        golfie = function(argFoo, argBar, argBaz) {
            tangon = _closure1_slot3;
            zuuluu = tangon.consoleLog;
            entity = global;
            entity = entity.HermesInternal;
            golfie = entity.concat;
            oscard = '[';
            report = argFoo;
            michal = '] ';
            entity = argBaz;
            michal = golfie.bind(oscard)(report, michal, entity);
            entity = argBar;
            entity = zuuluu.bind(tangon)(entity, michal);
            entity = undefined;
            return entity;
        };
        golfie = yankee.bind(romeon)(golfie);
 330:
        golfie = michal.getMLSSigningKeyB64;
        if(!(offset != golfie)) { _fun00002_ip = 351; continue _fun00001 }
 340:
        golfie = function(argFoo, argBar, argBaz) {
            michal = argBaz;
            var _closure2_slot0 = michal;
            report = _closure1_slot3;
            tangon = report.getMLSSigningKeyB64;
            zuuluu = argFoo;
            michal = argBar;
            entity = function(argFoo, argBar) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    oscard = argBar;
                    tangon = _closure2_slot0;
                    report = _closure1_slot11;
                    entity = undefined;
                    michal = argFoo;
                    zuuluu = report.bind(entity)(michal);
                    michal = null;
                    golfie = michal != oscard;
                    michal = '';
                    if(!golfie) { _fun00006_ip = 43; continue _fun00005 }
 40:
                    michal = oscard;
 43:
                    michal = report.bind(entity)(michal);
                    michal = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                }
            };
            entity = tangon.bind(report)(zuuluu, michal, entity);
            return entity;
        };
        michal['getMLSSigningKey'] = golfie;
 351:
        golfie = function() {
            tangon = _closure1_slot1;
            zuuluu = function() { // Original name: VoiceConnection
                report = this;
                var _closure3_slot0 = report;
                tangon = _closure1_slot0;
                golfie = _closure2_slot0;
                entity = undefined;
                tangon = tangon.bind(entity)(report, golfie);
                tangon = golfie.nextId;
                tangon = parseFloat(tangon);
                oscard = tangon + 1;
                golfie['nextId'] = oscard;
                report['id'] = tangon;
                tangon = new Array(0);
                report['subscriptions'] = tangon;
                golfie = report.callbackSetter;
                oscard = 'no-input-callback';
                tangon = function(argFoo) {
                    entity = argFoo;
                    michal = entity.input;
                    entity = new Array(1);
                    entity[0] = michal;
                    return entity;
                };
                tangon = golfie.bind(report)(oscard, tangon);
                report['setNoInputCallback'] = tangon;
                golfie = report.callbackSetter;
                oscard = 'on-first-frame-callback';
                tangon = function(argFoo) {
                    entity = argFoo;
                    tangon = entity.userId;
                    zuuluu = entity.ssrc;
                    michal = entity.streamId;
                    entity = new Array(3);
                    entity[0] = tangon;
                    entity[1] = zuuluu;
                    entity[2] = michal;
                    return entity;
                };
                tangon = golfie.bind(report)(oscard, tangon);
                report['setOnFirstFrameCallback'] = tangon;
                golfie = report.callbackSetter;
                oscard = 'native-mute-toggle';
                tangon = function() {
                    entity = new Array(0);
                    return entity;
                };
                tangon = golfie.bind(report)(oscard, tangon);
                report['setOnNativeMuteToggleCallback'] = tangon;
                golfie = report.callbackSetter;
                oscard = 'native-mute-state-changed';
                tangon = function(argFoo) {
                    entity = argFoo;
                    michal = entity.muted;
                    entity = new Array(1);
                    entity[0] = michal;
                    return entity;
                };
                tangon = golfie.bind(report)(oscard, tangon);
                report['setOnNativeMuteChangedCallback'] = tangon;
                golfie = report.callbackSetter;
                oscard = 'ping-callback';
                tangon = function(argFoo) {
                    entity = argFoo;
                    report = entity.ping;
                    tangon = entity.server;
                    zuuluu = entity.port;
                    michal = entity.seq;
                    entity = new Array(4);
                    entity[0] = report;
                    entity[1] = tangon;
                    entity[2] = zuuluu;
                    entity[3] = michal;
                    return entity;
                };
                tangon = golfie.bind(report)(oscard, tangon);
                report['setPingCallback'] = tangon;
                golfie = report.callbackSetter;
                oscard = 'ping-timeout-callback';
                tangon = function(argFoo) {
                    entity = argFoo;
                    tangon = entity.server;
                    zuuluu = entity.port;
                    michal = entity.seq;
                    entity = new Array(3);
                    entity[0] = tangon;
                    entity[1] = zuuluu;
                    entity[2] = michal;
                    return entity;
                };
                tangon = golfie.bind(report)(oscard, tangon);
                report['setPingTimeoutCallback'] = tangon;
                golfie = report.callbackSetter;
                oscard = 'user-speaking';
                tangon = function(argFoo) {
                    entity = argFoo;
                    zuuluu = entity.userId;
                    michal = entity.isSpeaking;
                    entity = new Array(2);
                    entity[0] = zuuluu;
                    entity[1] = michal;
                    return entity;
                };
                tangon = golfie.bind(report)(oscard, tangon);
                report['setOnSpeakingCallback_'] = tangon;
                tangon = function(argFoo) {
                    michal = _closure3_slot0;
                    zuuluu = michal.setOnSpeakingCallback_;
                    entity = argFoo;
                    entity = zuuluu.bind(michal)(entity);
                    entity = michal.triggerOnSpeakingCallback;
                    entity = entity.bind(michal)();
                    entity = undefined;
                    return entity;
                };
                report['setOnSpeakingCallback'] = tangon;
                golfie = report.callbackSetter;
                oscard = 'on-video-callback';
                tangon = function(argFoo) {
                    entity = argFoo;
                    oscard = entity.userId;
                    report = entity.ssrc;
                    tangon = entity.streamId;
                    zuuluu = entity.videoStreamParameters;
                    michal = entity.videoStreamParametersJSON;
                    entity = new Array(5);
                    entity[0] = oscard;
                    entity[1] = report;
                    entity[2] = tangon;
                    entity[3] = zuuluu;
                    entity[4] = michal;
                    return entity;
                };
                tangon = golfie.bind(report)(oscard, tangon);
                report['setOnVideoCallback_'] = tangon;
                tangon = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        zuuluu = argFoo;
                        var _closure4_slot0 = zuuluu;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00008_ip = 40; continue _fun00007 }
 15:
                        tangon = _closure3_slot0;
                        michal = tangon.setOnVideoCallback_;
                        entity = function(argFoo, argBar, argBaz, argCor, argGra) {
                            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                oscard = argCor;
                                zuuluu = argGra;
                                entity = zuuluu;
                                if(!entity) { _fun00010_ip = 15; continue _fun00009 }
 12:
                                entity = !oscard;
 15:
                                if(!entity) { _fun00010_ip = 37; continue _fun00009 }
 18:
                                entity = global;
                                michal = entity.JSON;
                                entity = michal.parse;
                                oscard = entity.bind(michal)(zuuluu);
 37:
                                report = _closure4_slot0;
                                yankee = undefined;
                                offset = argFoo;
                                verify = argBar;
                                option = argBaz;
                                golfie = oscard;
                                entity = yankee[report](offset, verify, option, golfie, oscard);
                                return entity;
                            }
                        };
                        entity = michal.bind(tangon)(entity);
                        _fun00008_ip = 58; continue _fun00007;
 40:
                        michal = _closure3_slot0;
                        entity = michal.setOnVideoCallback_;
                        entity = entity.bind(michal)(zuuluu);
 58:
                        michal = _closure3_slot0;
                        entity = michal.triggerOnVideoCallback;
                        entity = entity.bind(michal)();
                        entity = undefined;
                        return entity;
                    }
                };
                report['setOnVideoCallback'] = tangon;
                tangon = function(argFoo) {
                    entity = argFoo;
                    var _closure4_slot0 = entity;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.boundConnectionMethod;
                    entity = 'getMLSKeyPackageB64';
                    zuuluu = zuuluu.bind(tangon)(entity);
                    entity = undefined;
                    michal = function(argFoo) {
                        zuuluu = _closure1_slot11;
                        entity = undefined;
                        michal = argFoo;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = _closure4_slot0;
                        michal = michal.bind(entity)(zuuluu);
                        return entity;
                    };
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                report['getMLSKeyPackage'] = tangon;
                tangon = function(argFoo) {
                    tangon = _closure1_slot12;
                    entity = undefined;
                    zuuluu = argFoo;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    report = _closure1_slot2;
                    tangon = report.info;
                    michal = global;
                    michal = michal.HermesInternal;
                    oscard = michal.concat;
                    michal = 'updateMLSExternalSender: ';
                    michal = oscard.bind(michal)(zuuluu);
                    michal = tangon.bind(report)(michal);
                    report = _closure3_slot0;
                    tangon = report.boundConnectionMethod;
                    michal = 'updateMLSExternalSenderB64';
                    michal = tangon.bind(report)(michal);
                    michal = michal.bind(entity)(zuuluu);
                    return entity;
                };
                report['updateMLSExternalSender'] = tangon;
                tangon = function(argFoo, argBar) {
                    entity = argBar;
                    var _closure4_slot0 = entity;
                    tangon = _closure1_slot12;
                    entity = undefined;
                    zuuluu = argFoo;
                    tangon = tangon.bind(entity)(zuuluu);
                    oscard = _closure3_slot0;
                    report = oscard.boundConnectionMethod;
                    zuuluu = 'processMLSProposalsB64';
                    zuuluu = report.bind(oscard)(zuuluu);
                    michal = function(argFoo) {
                        zuuluu = _closure1_slot11;
                        entity = undefined;
                        michal = argFoo;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = _closure4_slot0;
                        michal = michal.bind(entity)(zuuluu);
                        return entity;
                    };
                    michal = zuuluu.bind(entity)(tangon, michal);
                    return entity;
                };
                report['processMLSProposals'] = tangon;
                tangon = function(argFoo, argBar, argBaz) {
                    zuuluu = _closure1_slot12;
                    entity = undefined;
                    michal = argBar;
                    report = zuuluu.bind(entity)(michal);
                    oscard = _closure3_slot0;
                    zuuluu = oscard.boundConnectionMethod;
                    michal = 'prepareMLSCommitTransitionB64';
                    tangon = zuuluu.bind(oscard)(michal);
                    zuuluu = oscard.wrapRosterCallback;
                    michal = argBaz;
                    zuuluu = zuuluu.bind(oscard)(michal);
                    michal = argFoo;
                    michal = tangon.bind(entity)(michal, report, zuuluu);
                    return entity;
                };
                report['prepareMLSCommitTransition'] = tangon;
                tangon = function(argFoo, argBar, argBaz) {
                    zuuluu = _closure1_slot12;
                    entity = undefined;
                    michal = argBar;
                    report = zuuluu.bind(entity)(michal);
                    oscard = _closure3_slot0;
                    zuuluu = oscard.boundConnectionMethod;
                    michal = 'processMLSWelcomeB64';
                    tangon = zuuluu.bind(oscard)(michal);
                    zuuluu = oscard.wrapRosterCallback;
                    michal = argBaz;
                    zuuluu = zuuluu.bind(oscard)(michal);
                    michal = argFoo;
                    michal = tangon.bind(entity)(michal, report, zuuluu);
                    return entity;
                };
                report['processMLSWelcome'] = tangon;
                tangon = function(argFoo, argBar, argBaz) {
                    entity = argBaz;
                    var _closure4_slot0 = entity;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.boundConnectionMethod;
                    entity = 'getMLSPairwiseFingerprintB64';
                    report = zuuluu.bind(tangon)(entity);
                    entity = undefined;
                    tangon = argFoo;
                    zuuluu = argBar;
                    michal = function(argFoo) {
                        zuuluu = _closure1_slot11;
                        entity = undefined;
                        michal = argFoo;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = _closure4_slot0;
                        michal = michal.bind(entity)(zuuluu);
                        return entity;
                    };
                    michal = report.bind(entity)(tangon, zuuluu, michal);
                    return entity;
                };
                report['getMLSPairwiseFingerprint'] = tangon;
                golfie = report.callbackSetter;
                oscard = 'mls-failure-callback';
                tangon = function(argFoo) {
                    entity = argFoo;
                    zuuluu = entity.source;
                    michal = entity.reason;
                    entity = new Array(2);
                    entity[0] = zuuluu;
                    entity[1] = michal;
                    return entity;
                };
                tangon = golfie.bind(report)(oscard, tangon);
                report['setOnMLSFailureCallback'] = tangon;
                golfie = report.callbackSetter;
                oscard = 'secure-frames-state-update-callback';
                tangon = function(argFoo) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        entity = argFoo;
                        michal = entity.stateUpdate;
                        tangon = entity.stateUpdateJSON;
                        entity = null;
                        if(!(entity == michal)) { _fun00012_ip = 44; continue _fun00011 }
 25:
                        entity = global;
                        zuuluu = entity.JSON;
                        entity = zuuluu.parse;
                        michal = entity.bind(zuuluu)(tangon);
 44:
                        entity = new Array(1);
                        entity[0] = michal;
                        return entity;
                    }
                };
                tangon = golfie.bind(report)(oscard, tangon);
                report['setSecureFramesStateUpdateCallback'] = tangon;
                tangon = _closure1_slot6;
                zuuluu = tangon.forEach;
                michal = function(argFoo) {
                    zuuluu = argFoo;
                    michal = _closure3_slot0;
                    entity = michal.boundConnectionMethod;
                    entity = entity.bind(michal)(zuuluu);
                    michal[zuuluu] = entity;
                    entity = undefined;
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            var _closure2_slot0 = zuuluu;
            entity = {};
            michal = 'wrapRosterCallback';
            entity['key'] = michal;
            michal = function(argFoo) { // Original name: value
                michal = argFoo;
                var _closure3_slot0 = michal;
                entity = function(argFoo, argBar, argBaz) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        zuuluu = argBaz;
                        report = {};
                        entity = null;
                        if(!(entity != zuuluu)) { _fun00014_ip = 77; continue _fun00013 }
 11:
                        entity = global;
                        michal = entity.JSON;
                        entity = michal.parse;
                        verify = entity.bind(michal)(zuuluu);
                        golfie = verify;
                        entity = undefined;
                        for(zuuluu in golfie)
 46:
                        {
 55:
                            yankee = zuuluu;
                            romeon = _closure1_slot11;
                            offset = verify[yankee];
                            offset = romeon.bind(entity)(offset);
                            report[yankee] = offset;
                            _fun00014_ip = 46; continue _fun00013;
                        }
 77:
                        tangon = _closure3_slot0;
                        entity = undefined;
                        zuuluu = argFoo;
                        michal = argBar;
                        michal = tangon.bind(entity)(zuuluu, michal, report);
                        return entity;
                    }
                };
                return entity;
            };
            entity['value'] = michal;
            michal = new Array(5);
            michal[0] = entity;
            entity = {};
            oscard = 'destroy';
            entity['key'] = oscard;
            oscard = function() { // Original name: value
                entity = this;
                tangon = entity.subscriptions;
                zuuluu = tangon.forEach;
                michal = function(argFoo) {
                    michal = argFoo;
                    entity = michal.remove;
                    entity = entity.bind(michal)();
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = entity.subscriptions;
                michal = 0;
                zuuluu['length'] = michal;
                zuuluu = _closure1_slot3;
                michal = zuuluu.connectionInstanceDestroy;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            entity['value'] = oscard;
            michal[1] = entity;
            entity = {};
            oscard = 'getId';
            entity['key'] = oscard;
            oscard = function() { // Original name: value
                entity = this;
                entity = entity.id;
                return entity;
            };
            entity['value'] = oscard;
            michal[2] = entity;
            entity = {};
            oscard = 'boundConnectionMethod';
            entity['key'] = oscard;
            oscard = function(argFoo) { // Original name: value
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = argFoo;
 3: // try_start_0
                    report = _closure1_slot3;
                    tangon = entity;
                    michal = 0;
                    zuuluu = tangon[michal];
                    michal = zuuluu.toUpperCase;
                    oscard = michal.bind(zuuluu)();
                    zuuluu = tangon.slice;
                    michal = 1;
                    tangon = zuuluu.bind(tangon)(michal);
                    michal = global;
                    michal = michal.HermesInternal;
                    zuuluu = michal.concat;
                    michal = 'connectionInstance';
                    michal = zuuluu.bind(michal)(oscard, tangon);
                    tangon = report[michal];
                    zuuluu = tangon.bind;
                    michal = this;
                    michal = michal.id;
                    michal = zuuluu.bind(tangon)(report, michal);
 90: // try_end0
                    return michal;
 92: // catch_target0
                    CatchBlockStart(arg_register=1);
                    zuuluu = _closure1_slot2;
                    michal = zuuluu.warn;
                    oscard = entity;
                    entity = global;
                    entity = entity.HermesInternal;
                    report = entity.concat;
                    tangon = 'VoiceConnection(...): ';
                    entity = ' does not exist.';
                    entity = report.bind(tangon)(oscard, entity);
                    entity = michal.bind(zuuluu)(entity);
                    entity = function() {
                        entity = undefined;
                        return entity;
                    };
                    return entity;
                }
            };
            entity['value'] = oscard;
            michal[3] = entity;
            entity = {};
            oscard = 'callbackSetter';
            entity['key'] = oscard;
            report = function(argFoo, argBar) { // Original name: value
                michal = this;
                var _closure3_slot0 = michal;
                zuuluu = argBar;
                var _closure3_slot1 = zuuluu;
                zuuluu = null;
                var _closure3_slot2 = zuuluu;
                tangon = michal.subscriptions;
                zuuluu = tangon.push;
                golfie = _closure1_slot4;
                oscard = golfie.addListener;
                report = argFoo;
                michal = function(argFoo) {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        tangon = argFoo;
                        michal = _closure3_slot0;
                        zuuluu = michal.id;
                        michal = tangon.connectionId;
                        michal = zuuluu === michal;
                        if(!michal) { _fun00018_ip = 32; continue _fun00017 }
 28:
                        michal = _closure3_slot2;
 32:
                        if(!michal) { _fun00018_ip = 75; continue _fun00017 }
 35:
                        zuuluu = _closure3_slot2;
                        entity = _closure3_slot1;
                        michal = undefined;
                        golfie = entity.bind(michal)(tangon);
                        entity = new Array(0);
                        oscard = 0;
                        option = entity;
                        tangon = arraySpread(option, golfie, oscard);
                        option = zuuluu;
                        golfie = entity;
                        oscard = undefined;
                        entity = apply(option, golfie, oscard);
 75:
                        entity = undefined;
                        return entity;
                    }
                };
                michal = oscard.bind(golfie)(report, michal);
                michal = zuuluu.bind(tangon)(michal);
                entity = function(argFoo) {
                    entity = argFoo;
                    _closure3_slot2 = entity;
                    return entity;
                };
                return entity;
            };
            entity['value'] = report;
            michal[4] = entity;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        golfie = golfie.bind(entity)();
        var _closure1_slot7 = golfie;
        golfie['nextId'] = verify;
        golfie = michal.createVoiceConnectionWithOptions;
        var _closure1_slot8 = golfie;
        golfie = function(argFoo, argBar, argBaz) {
            entity = _closure1_slot7;
            zuuluu = entity.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
            romeon = zuuluu;
            entity = new romeon[entity](yankee);
            entity = entity instanceof Object ? entity : zuuluu;
            golfie = _closure1_slot8;
            michal = entity.getId;
            yankee = michal.bind(entity)();
            romeon = undefined;
            offset = argFoo;
            verify = argBar;
            option = argBaz;
            michal = romeon[golfie](yankee, offset, verify, option, golfie);
            return entity;
        };
        michal['createVoiceConnectionWithOptions'] = golfie;
        golfie = michal.createOwnStreamConnectionWithOptions;
        var _closure1_slot9 = golfie;
        golfie = function(argFoo, argBar, argBaz) {
            entity = _closure1_slot7;
            zuuluu = entity.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
            romeon = zuuluu;
            entity = new romeon[entity](yankee);
            entity = entity instanceof Object ? entity : zuuluu;
            golfie = _closure1_slot9;
            michal = entity.getId;
            yankee = michal.bind(entity)();
            romeon = undefined;
            offset = argFoo;
            verify = argBar;
            option = argBaz;
            michal = romeon[golfie](yankee, offset, verify, option, golfie);
            return entity;
        };
        michal['createOwnStreamConnectionWithOptions'] = golfie;
        verify = 'no-input-callback';
        golfie = function(argFoo) {
            entity = argFoo;
            michal = entity.input;
            entity = new Array(1);
            entity[0] = michal;
            return entity;
        };
        golfie = option.bind(entity)(verify, golfie);
        michal['setNoInputCallback'] = golfie;
        verify = 'on-voice';
        golfie = function(argFoo) {
            entity = argFoo;
            zuuluu = entity.level;
            michal = entity.speaking;
            entity = new Array(2);
            entity[0] = zuuluu;
            entity[1] = michal;
            return entity;
        };
        golfie = option.bind(entity)(verify, golfie);
        michal['setOnVoiceCallback'] = golfie;
        verify = 'native-mute-toggle';
        golfie = function() {
            entity = new Array(0);
            return entity;
        };
        golfie = option.bind(entity)(verify, golfie);
        michal['setOnNativeMuteToggleCallback'] = golfie;
        verify = 'native-mute-state-changed';
        golfie = function(argFoo) {
            entity = argFoo;
            michal = entity.muted;
            entity = new Array(1);
            entity[0] = michal;
            return entity;
        };
        golfie = option.bind(entity)(verify, golfie);
        michal['setOnNativeMuteChangedCallback'] = golfie;
        verify = 'device-changed';
        golfie = function(argFoo) {
            entity = argFoo;
            tangon = entity.inputDevices;
            zuuluu = entity.outputDevices;
            michal = entity.videoInputDevices;
            entity = new Array(3);
            entity[0] = tangon;
            entity[1] = zuuluu;
            entity[2] = michal;
            return entity;
        };
        golfie = option.bind(entity)(verify, golfie);
        michal['setDeviceChangeCallback'] = golfie;
        verify = 'volume-changed';
        golfie = function(argFoo) {
            entity = argFoo;
            zuuluu = entity.inputVolume;
            michal = entity.outputVolume;
            entity = new Array(2);
            entity[0] = zuuluu;
            entity[1] = michal;
            return entity;
        };
        golfie = option.bind(entity)(verify, golfie);
        michal['setVolumeChangeCallback'] = golfie;
        verify = 'active-sinks-change';
        golfie = function(argFoo) {
            entity = argFoo;
            zuuluu = entity.streamId;
            michal = entity.active;
            entity = new Array(2);
            entity[0] = zuuluu;
            entity[1] = michal;
            return entity;
        };
        golfie = option.bind(entity)(verify, golfie);
        michal['setActiveSinksChangeCallback'] = golfie;
        verify = 'on-broadcast-requested';
        golfie = function() {
            entity = new Array(0);
            return entity;
        };
        golfie = option.bind(entity)(verify, golfie);
        michal['setBroadcastRequestCallback'] = golfie;
        verify = 'on-broadcast-finished';
        golfie = function() {
            entity = new Array(0);
            return entity;
        };
        golfie = option.bind(entity)(verify, golfie);
        michal['setBroadcastFinishedCallback'] = golfie;
        verify = 'on-broadcast-annotated';
        golfie = function(argFoo) {
            entity = argFoo;
            michal = entity.appBundleIdentifier;
            entity = new Array(1);
            entity[0] = michal;
            return entity;
        };
        golfie = option.bind(entity)(verify, golfie);
        michal['setBroadcastAnnotatedCallback'] = golfie;
        verify = 'on-broadcast-blocked';
        golfie = function() {
            entity = new Array(0);
            return entity;
        };
        golfie = option.bind(entity)(verify, golfie);
        michal['setBroadcastBlockedCallback'] = golfie;
        verify = 'on-broadcast-thumbnail';
        golfie = function(argFoo) {
            entity = argFoo;
            michal = entity.imgdata;
            entity = new Array(1);
            entity[0] = michal;
            return entity;
        };
        golfie = option.bind(entity)(verify, golfie);
        var _closure1_slot10 = golfie;
        golfie = function(argFoo, argBar, argBaz, argCor) {
            tangon = _closure1_slot10;
            entity = undefined;
            zuuluu = argCor;
            zuuluu = tangon.bind(entity)(zuuluu);
            oscard = _closure1_slot3;
            report = oscard.setBroadcastThumbnailParams;
            tangon = argFoo;
            zuuluu = argBar;
            michal = argBaz;
            michal = report.bind(oscard)(tangon, zuuluu, michal);
            return entity;
        };
        michal['setBroadcastThumbnailCallback'] = golfie;
        golfie = 'audio-input-initialized';
        tangon = function(argFoo) {
            entity = new Array(1);
            michal = argFoo;
            entity[0] = michal;
            return entity;
        };
        tangon = option.bind(entity)(golfie, tangon);
        michal['setAudioInputInitializationCallback'] = tangon;
        tangon = michal.initializeEngine;
        tangon = tangon.bind(michal)();
        tangon = 4;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = '../discord_common/js/packages/media-engine/native/ios/VoiceEngine.tsx';
        tangon = report.bind(oscard)(tangon);
        zuuluu['default'] = michal;
        return entity;
    }
})();