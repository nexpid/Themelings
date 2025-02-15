// discord_common/js/packages/media-engine/native/ios/VoiceEngine.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        golf = argBaz;
        zulu = argFred;
        oscar = argPlugh;
        entity = function(argFoo) { // Original name: base64Decode
            entity = global;
            tango = entity.Buffer;
            zulu = tango.from;
            mike = argFoo;
            entity = 'base64';
            entity = zulu.bind(tango)(mike, entity);
            entity = entity.buffer;
            return entity;
        };
        var _closure1_slot11 = entity;
        entity = function(argFoo) { // Original name: base64Encode
            entity = global;
            zulu = entity.Buffer;
            mike = zulu.from;
            entity = argFoo;
            zulu = mike.bind(zulu)(entity);
            mike = zulu.toString;
            entity = 'base64';
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        var _closure1_slot12 = entity;
        options = function(argFoo, argBar) { // Original name: callbackSetter
            mike = argBar;
            var _closure2_slot0 = mike;
            mike = null;
            var _closure2_slot1 = mike;
            report = _closure1_slot4;
            tango = report.addListener;
            zulu = argFoo;
            mike = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure2_slot1;
                    entity = null;
                    zulu = entity == zulu;
                    tango = undefined;
                    entity = undefined;
                    if(zulu) { _fun00004_ip = 61; continue _fun00003 }
 20:
                    zulu = _closure2_slot1;
                    report = _closure2_slot0;
                    mike = argFoo;
                    options = report.bind(tango)(mike);
                    mike = new Array(0);
                    golf = 0;
                    verify = mike;
                    report = arraySpread(verify, options, golf);
                    verify = zulu;
                    options = mike;
                    golf = undefined;
                    entity = apply(verify, options, golf);
 61:
                    return entity;
                }
            };
            mike = tango.bind(report)(zulu, mike);
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
        mike = {};
        entity = true;
        mike['value'] = entity;
        entity = '__esModule';
        entity = verify.bind(offset)(zulu, entity, mike);
        verify = 0;
        mike = oscar[verify];
        entity = undefined;
        mike = golf.bind(entity)(mike);
        var _closure1_slot0 = mike;
        mike = 1;
        mike = oscar[mike];
        mike = golf.bind(entity)(mike);
        var _closure1_slot1 = mike;
        mike = 2;
        mike = oscar[mike];
        golf = report.bind(entity)(mike);
        mike = golf.NativeModules;
        offset = golf.NativeEventEmitter;
        golf = golf.Platform;
        golf = 3;
        yankee = oscar[golf];
        yankee = report.bind(entity)(yankee);
        foxtrot = yankee.Logger;
        yankee = foxtrot.prototype;
        romeo = Object.create(yankee, {constructor: {value: foxtrot}});
        sizing = 'VoiceEngine';
        output = romeo;
        yankee = new output[foxtrot](sizing, kilo);
        yankee = yankee instanceof Object ? yankee : romeo;
        var _closure1_slot2 = yankee;
        mike = mike.VoiceEngine;
        var _closure1_slot3 = mike;
        yankee = offset.prototype;
        yankee = Object.create(yankee, {constructor: {value: offset}});
        output = yankee;
        sizing = mike;
        offset = new output[offset](sizing, kilo);
        offset = offset instanceof Object ? offset : yankee;
        var _closure1_slot4 = offset;
        offset = 'android';
        mike['platform'] = offset;
        offset = mike.getConstants;
        romeo = offset.bind(mike)();
        offset = null;
        foxtrot = offset == romeo;
        yankee = undefined;
        if(foxtrot) { _fun00002_ip = 252; continue _fun00001 }
 246:
        yankee = romeo.supportedFeatures;
 252:
        if(!(offset == yankee)) { _fun00002_ip = 266; continue _fun00001 }
 256:
        yankee = ['voice_sound_stop_loop', 'voice_relative_sounds', 'voice_legacy_subsystem', 'voice_experimental_subsystem', 'elevated_hook', 'soundshare', 'soundshare_loopback', 'set_audio_device_by_id', 'set_video_device_by_id', 'loopback', 'wumpus_video', 'hybrid_video', 'experimental_encoders', 'experiment_config', 'remote_locus_network_control', 'screen_previews', 'window_previews', 'audio_debug_state', 'connection_replay', 'simulcast_bugfix', 'RTC_REGION_RANKING', 'video_effects', 'direct_video', 'electron_video', 'mediapipe', 'fixed_keyframe_interval'];
 266:
        var _closure1_slot5 = yankee;
        yankee = function(argFoo) {
            zulu = _closure1_slot5;
            mike = zulu.includes;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike['supportsFeature'] = yankee;
        yankee = ['configureConnectionRetries', 'getEncryptionModes', 'setTransportOptions', 'mergeUsers', 'destroyUser', 'setLocalPan', 'setLocalVolume', 'setLocalMute', 'fastUdpReconnect', 'wasRemoteDisconnected', 'setMinimumOutputDelay', 'setSelfMute', 'setSelfDeafen', 'setNoInputThreshold', 'setPTTActive', 'setVideoBroadcast', 'triggerOnVideoCallback', 'getStats', 'getFilteredStats', 'setPingInterval', 'setDesktopSource', 'prepareSecureFramesTransition', 'executeSecureFramesTransition', 'prepareSecureFramesEpoch'];
        var _closure1_slot6 = yankee;
        yankee = mike.consoleLog;
        if(!(offset != yankee)) { _fun00002_ip = 330; continue _fun00001 }
 305:
        golf = oscar[golf];
        romeo = report.bind(entity)(golf);
        yankee = romeo.setNativeLogFn;
        golf = function(argFoo, argBar, argBaz) {
            tango = _closure1_slot3;
            zulu = tango.consoleLog;
            entity = global;
            entity = entity.HermesInternal;
            golf = entity.concat;
            oscar = '[';
            report = argFoo;
            mike = '] ';
            entity = argBaz;
            mike = golf.bind(oscar)(report, mike, entity);
            entity = argBar;
            entity = zulu.bind(tango)(entity, mike);
            entity = undefined;
            return entity;
        };
        golf = yankee.bind(romeo)(golf);
 330:
        golf = mike.getMLSSigningKeyB64;
        if(!(offset != golf)) { _fun00002_ip = 351; continue _fun00001 }
 340:
        golf = function(argFoo, argBar, argBaz) {
            mike = argBaz;
            var _closure2_slot0 = mike;
            report = _closure1_slot3;
            tango = report.getMLSSigningKeyB64;
            zulu = argFoo;
            mike = argBar;
            entity = function(argFoo, argBar) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    oscar = argBar;
                    tango = _closure2_slot0;
                    report = _closure1_slot11;
                    entity = undefined;
                    mike = argFoo;
                    zulu = report.bind(entity)(mike);
                    mike = null;
                    golf = mike != oscar;
                    mike = '';
                    if(!golf) { _fun00006_ip = 43; continue _fun00005 }
 40:
                    mike = oscar;
 43:
                    mike = report.bind(entity)(mike);
                    mike = tango.bind(entity)(zulu, mike);
                    return entity;
                }
            };
            entity = tango.bind(report)(zulu, mike, entity);
            return entity;
        };
        mike['getMLSSigningKey'] = golf;
 351:
        golf = function() {
            tango = _closure1_slot1;
            zulu = function() { // Original name: VoiceConnection
                report = this;
                var _closure3_slot0 = report;
                tango = _closure1_slot0;
                golf = _closure2_slot0;
                entity = undefined;
                tango = tango.bind(entity)(report, golf);
                tango = golf.nextId;
                tango = parseFloat(tango);
                oscar = tango + 1;
                golf['nextId'] = oscar;
                report['id'] = tango;
                tango = new Array(0);
                report['subscriptions'] = tango;
                golf = report.callbackSetter;
                oscar = 'no-input-callback';
                tango = function(argFoo) {
                    entity = argFoo;
                    mike = entity.input;
                    entity = new Array(1);
                    entity[0] = mike;
                    return entity;
                };
                tango = golf.bind(report)(oscar, tango);
                report['setNoInputCallback'] = tango;
                golf = report.callbackSetter;
                oscar = 'on-first-frame-callback';
                tango = function(argFoo) {
                    entity = argFoo;
                    tango = entity.userId;
                    zulu = entity.ssrc;
                    mike = entity.streamId;
                    entity = new Array(3);
                    entity[0] = tango;
                    entity[1] = zulu;
                    entity[2] = mike;
                    return entity;
                };
                tango = golf.bind(report)(oscar, tango);
                report['setOnFirstFrameCallback'] = tango;
                golf = report.callbackSetter;
                oscar = 'user-speaking';
                tango = function(argFoo) {
                    entity = argFoo;
                    zulu = entity.userId;
                    mike = entity.isSpeaking;
                    entity = new Array(2);
                    entity[0] = zulu;
                    entity[1] = mike;
                    return entity;
                };
                tango = golf.bind(report)(oscar, tango);
                report['setOnSpeakingCallback'] = tango;
                golf = report.callbackSetter;
                oscar = 'native-mute-toggle';
                tango = function() {
                    entity = new Array(0);
                    return entity;
                };
                tango = golf.bind(report)(oscar, tango);
                report['setOnNativeMuteToggleCallback'] = tango;
                golf = report.callbackSetter;
                oscar = 'native-mute-state-changed';
                tango = function(argFoo) {
                    entity = argFoo;
                    mike = entity.muted;
                    entity = new Array(1);
                    entity[0] = mike;
                    return entity;
                };
                tango = golf.bind(report)(oscar, tango);
                report['setOnNativeMuteChangedCallback'] = tango;
                golf = report.callbackSetter;
                oscar = 'ping-callback';
                tango = function(argFoo) {
                    entity = argFoo;
                    report = entity.ping;
                    tango = entity.server;
                    zulu = entity.port;
                    mike = entity.seq;
                    entity = new Array(4);
                    entity[0] = report;
                    entity[1] = tango;
                    entity[2] = zulu;
                    entity[3] = mike;
                    return entity;
                };
                tango = golf.bind(report)(oscar, tango);
                report['setPingCallback'] = tango;
                golf = report.callbackSetter;
                oscar = 'ping-timeout-callback';
                tango = function(argFoo) {
                    entity = argFoo;
                    tango = entity.server;
                    zulu = entity.port;
                    mike = entity.seq;
                    entity = new Array(3);
                    entity[0] = tango;
                    entity[1] = zulu;
                    entity[2] = mike;
                    return entity;
                };
                tango = golf.bind(report)(oscar, tango);
                report['setPingTimeoutCallback'] = tango;
                golf = report.callbackSetter;
                oscar = 'on-video-callback';
                tango = function(argFoo) {
                    entity = argFoo;
                    oscar = entity.userId;
                    report = entity.ssrc;
                    tango = entity.streamId;
                    zulu = entity.videoStreamParameters;
                    mike = entity.videoStreamParametersJSON;
                    entity = new Array(5);
                    entity[0] = oscar;
                    entity[1] = report;
                    entity[2] = tango;
                    entity[3] = zulu;
                    entity[4] = mike;
                    return entity;
                };
                tango = golf.bind(report)(oscar, tango);
                report['setOnVideoCallback_'] = tango;
                tango = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        zulu = argFoo;
                        var _closure4_slot0 = zulu;
                        mike = null;
                        if(!(mike != zulu)) { _fun00008_ip = 40; continue _fun00007 }
 15:
                        tango = _closure3_slot0;
                        mike = tango.setOnVideoCallback_;
                        entity = function(argFoo, argBar, argBaz, argCorge, argGrault) {
                            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                oscar = argCorge;
                                zulu = argGrault;
                                entity = zulu;
                                if(!entity) { _fun00010_ip = 15; continue _fun00009 }
 12:
                                entity = !oscar;
 15:
                                if(!entity) { _fun00010_ip = 37; continue _fun00009 }
 18:
                                entity = global;
                                mike = entity.JSON;
                                entity = mike.parse;
                                oscar = entity.bind(mike)(zulu);
 37:
                                report = _closure4_slot0;
                                yankee = undefined;
                                offset = argFoo;
                                verify = argBar;
                                options = argBaz;
                                golf = oscar;
                                entity = yankee[report](offset, verify, options, golf, oscar);
                                return entity;
                            }
                        };
                        entity = mike.bind(tango)(entity);
                        _fun00008_ip = 58; continue _fun00007;
 40:
                        mike = _closure3_slot0;
                        entity = mike.setOnVideoCallback_;
                        entity = entity.bind(mike)(zulu);
 58:
                        mike = _closure3_slot0;
                        entity = mike.triggerOnVideoCallback;
                        entity = entity.bind(mike)();
                        entity = undefined;
                        return entity;
                    }
                };
                report['setOnVideoCallback'] = tango;
                tango = function(argFoo) {
                    entity = argFoo;
                    var _closure4_slot0 = entity;
                    tango = _closure3_slot0;
                    zulu = tango.boundConnectionMethod;
                    entity = 'getMLSKeyPackageB64';
                    zulu = zulu.bind(tango)(entity);
                    entity = undefined;
                    mike = function(argFoo) {
                        zulu = _closure1_slot11;
                        entity = undefined;
                        mike = argFoo;
                        zulu = zulu.bind(entity)(mike);
                        mike = _closure4_slot0;
                        mike = mike.bind(entity)(zulu);
                        return entity;
                    };
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                report['getMLSKeyPackage'] = tango;
                tango = function(argFoo) {
                    tango = _closure1_slot12;
                    entity = undefined;
                    zulu = argFoo;
                    zulu = tango.bind(entity)(zulu);
                    report = _closure1_slot2;
                    tango = report.info;
                    mike = global;
                    mike = mike.HermesInternal;
                    oscar = mike.concat;
                    mike = 'updateMLSExternalSender: ';
                    mike = oscar.bind(mike)(zulu);
                    mike = tango.bind(report)(mike);
                    report = _closure3_slot0;
                    tango = report.boundConnectionMethod;
                    mike = 'updateMLSExternalSenderB64';
                    mike = tango.bind(report)(mike);
                    mike = mike.bind(entity)(zulu);
                    return entity;
                };
                report['updateMLSExternalSender'] = tango;
                tango = function(argFoo, argBar) {
                    entity = argBar;
                    var _closure4_slot0 = entity;
                    tango = _closure1_slot12;
                    entity = undefined;
                    zulu = argFoo;
                    tango = tango.bind(entity)(zulu);
                    oscar = _closure3_slot0;
                    report = oscar.boundConnectionMethod;
                    zulu = 'processMLSProposalsB64';
                    zulu = report.bind(oscar)(zulu);
                    mike = function(argFoo) {
                        zulu = _closure1_slot11;
                        entity = undefined;
                        mike = argFoo;
                        zulu = zulu.bind(entity)(mike);
                        mike = _closure4_slot0;
                        mike = mike.bind(entity)(zulu);
                        return entity;
                    };
                    mike = zulu.bind(entity)(tango, mike);
                    return entity;
                };
                report['processMLSProposals'] = tango;
                tango = function(argFoo, argBar, argBaz) {
                    zulu = _closure1_slot12;
                    entity = undefined;
                    mike = argBar;
                    report = zulu.bind(entity)(mike);
                    oscar = _closure3_slot0;
                    zulu = oscar.boundConnectionMethod;
                    mike = 'prepareMLSCommitTransitionB64';
                    tango = zulu.bind(oscar)(mike);
                    zulu = oscar.wrapRosterCallback;
                    mike = argBaz;
                    zulu = zulu.bind(oscar)(mike);
                    mike = argFoo;
                    mike = tango.bind(entity)(mike, report, zulu);
                    return entity;
                };
                report['prepareMLSCommitTransition'] = tango;
                tango = function(argFoo, argBar, argBaz) {
                    zulu = _closure1_slot12;
                    entity = undefined;
                    mike = argBar;
                    report = zulu.bind(entity)(mike);
                    oscar = _closure3_slot0;
                    zulu = oscar.boundConnectionMethod;
                    mike = 'processMLSWelcomeB64';
                    tango = zulu.bind(oscar)(mike);
                    zulu = oscar.wrapRosterCallback;
                    mike = argBaz;
                    zulu = zulu.bind(oscar)(mike);
                    mike = argFoo;
                    mike = tango.bind(entity)(mike, report, zulu);
                    return entity;
                };
                report['processMLSWelcome'] = tango;
                tango = function(argFoo, argBar, argBaz) {
                    entity = argBaz;
                    var _closure4_slot0 = entity;
                    tango = _closure3_slot0;
                    zulu = tango.boundConnectionMethod;
                    entity = 'getMLSPairwiseFingerprintB64';
                    report = zulu.bind(tango)(entity);
                    entity = undefined;
                    tango = argFoo;
                    zulu = argBar;
                    mike = function(argFoo) {
                        zulu = _closure1_slot11;
                        entity = undefined;
                        mike = argFoo;
                        zulu = zulu.bind(entity)(mike);
                        mike = _closure4_slot0;
                        mike = mike.bind(entity)(zulu);
                        return entity;
                    };
                    mike = report.bind(entity)(tango, zulu, mike);
                    return entity;
                };
                report['getMLSPairwiseFingerprint'] = tango;
                golf = report.callbackSetter;
                oscar = 'mls-failure-callback';
                tango = function(argFoo) {
                    entity = argFoo;
                    zulu = entity.source;
                    mike = entity.reason;
                    entity = new Array(2);
                    entity[0] = zulu;
                    entity[1] = mike;
                    return entity;
                };
                tango = golf.bind(report)(oscar, tango);
                report['setOnMLSFailureCallback'] = tango;
                golf = report.callbackSetter;
                oscar = 'secure-frames-state-update-callback';
                tango = function(argFoo) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        entity = argFoo;
                        mike = entity.stateUpdate;
                        tango = entity.stateUpdateJSON;
                        entity = null;
                        if(!(entity == mike)) { _fun00012_ip = 44; continue _fun00011 }
 25:
                        entity = global;
                        zulu = entity.JSON;
                        entity = zulu.parse;
                        mike = entity.bind(zulu)(tango);
 44:
                        entity = new Array(1);
                        entity[0] = mike;
                        return entity;
                    }
                };
                tango = golf.bind(report)(oscar, tango);
                report['setSecureFramesStateUpdateCallback'] = tango;
                tango = _closure1_slot6;
                zulu = tango.forEach;
                mike = function(argFoo) {
                    zulu = argFoo;
                    mike = _closure3_slot0;
                    entity = mike.boundConnectionMethod;
                    entity = entity.bind(mike)(zulu);
                    mike[zulu] = entity;
                    entity = undefined;
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            var _closure2_slot0 = zulu;
            entity = {};
            mike = 'wrapRosterCallback';
            entity['key'] = mike;
            mike = function(argFoo) { // Original name: value
                mike = argFoo;
                var _closure3_slot0 = mike;
                entity = function(argFoo, argBar, argBaz) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        zulu = argBaz;
                        report = {};
                        entity = null;
                        if(!(entity != zulu)) { _fun00014_ip = 77; continue _fun00013 }
 11:
                        entity = global;
                        mike = entity.JSON;
                        entity = mike.parse;
                        verify = entity.bind(mike)(zulu);
                        golf = verify;
                        entity = undefined;
                        for(zulu in golf)
 46:
                        {
 55:
                            yankee = zulu;
                            romeo = _closure1_slot11;
                            offset = verify[yankee];
                            offset = romeo.bind(entity)(offset);
                            report[yankee] = offset;
                            _fun00014_ip = 46; continue _fun00013;
                        }
 77:
                        tango = _closure3_slot0;
                        entity = undefined;
                        zulu = argFoo;
                        mike = argBar;
                        mike = tango.bind(entity)(zulu, mike, report);
                        return entity;
                    }
                };
                return entity;
            };
            entity['value'] = mike;
            mike = new Array(5);
            mike[0] = entity;
            entity = {};
            oscar = 'destroy';
            entity['key'] = oscar;
            oscar = function() { // Original name: value
                entity = this;
                tango = entity.subscriptions;
                zulu = tango.forEach;
                mike = function(argFoo) {
                    mike = argFoo;
                    entity = mike.remove;
                    entity = entity.bind(mike)();
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                zulu = entity.subscriptions;
                mike = 0;
                zulu['length'] = mike;
                zulu = _closure1_slot3;
                mike = zulu.connectionInstanceDestroy;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            entity['value'] = oscar;
            mike[1] = entity;
            entity = {};
            oscar = 'getId';
            entity['key'] = oscar;
            oscar = function() { // Original name: value
                entity = this;
                entity = entity.id;
                return entity;
            };
            entity['value'] = oscar;
            mike[2] = entity;
            entity = {};
            oscar = 'boundConnectionMethod';
            entity['key'] = oscar;
            oscar = function(argFoo) { // Original name: value
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = argFoo;
 3: // try_start_0
                    report = _closure1_slot3;
                    tango = entity;
                    mike = 0;
                    zulu = tango[mike];
                    mike = zulu.toUpperCase;
                    oscar = mike.bind(zulu)();
                    zulu = tango.slice;
                    mike = 1;
                    tango = zulu.bind(tango)(mike);
                    mike = global;
                    mike = mike.HermesInternal;
                    zulu = mike.concat;
                    mike = 'connectionInstance';
                    mike = zulu.bind(mike)(oscar, tango);
                    tango = report[mike];
                    zulu = tango.bind;
                    mike = this;
                    mike = mike.id;
                    mike = zulu.bind(tango)(report, mike);
 90: // try_end0
                    return mike;
 92: // catch_target0
                    CatchBlockStart(arg_register=1);
                    zulu = _closure1_slot2;
                    mike = zulu.warn;
                    oscar = entity;
                    entity = global;
                    entity = entity.HermesInternal;
                    report = entity.concat;
                    tango = 'VoiceConnection(...): ';
                    entity = ' does not exist.';
                    entity = report.bind(tango)(oscar, entity);
                    entity = mike.bind(zulu)(entity);
                    entity = function() {
                        entity = undefined;
                        return entity;
                    };
                    return entity;
                }
            };
            entity['value'] = oscar;
            mike[3] = entity;
            entity = {};
            oscar = 'callbackSetter';
            entity['key'] = oscar;
            report = function(argFoo, argBar) { // Original name: value
                mike = this;
                var _closure3_slot0 = mike;
                zulu = argBar;
                var _closure3_slot1 = zulu;
                zulu = null;
                var _closure3_slot2 = zulu;
                tango = mike.subscriptions;
                zulu = tango.push;
                golf = _closure1_slot4;
                oscar = golf.addListener;
                report = argFoo;
                mike = function(argFoo) {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        tango = argFoo;
                        mike = _closure3_slot0;
                        zulu = mike.id;
                        mike = tango.connectionId;
                        mike = zulu === mike;
                        if(!mike) { _fun00018_ip = 32; continue _fun00017 }
 28:
                        mike = _closure3_slot2;
 32:
                        if(!mike) { _fun00018_ip = 75; continue _fun00017 }
 35:
                        zulu = _closure3_slot2;
                        entity = _closure3_slot1;
                        mike = undefined;
                        golf = entity.bind(mike)(tango);
                        entity = new Array(0);
                        oscar = 0;
                        options = entity;
                        tango = arraySpread(options, golf, oscar);
                        options = zulu;
                        golf = entity;
                        oscar = undefined;
                        entity = apply(options, golf, oscar);
 75:
                        entity = undefined;
                        return entity;
                    }
                };
                mike = oscar.bind(golf)(report, mike);
                mike = zulu.bind(tango)(mike);
                entity = function(argFoo) {
                    entity = argFoo;
                    _closure3_slot2 = entity;
                    return entity;
                };
                return entity;
            };
            entity['value'] = report;
            mike[4] = entity;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        golf = golf.bind(entity)();
        var _closure1_slot7 = golf;
        golf['nextId'] = verify;
        golf = mike.createVoiceConnectionWithOptions;
        var _closure1_slot8 = golf;
        golf = function(argFoo, argBar, argBaz) {
            entity = _closure1_slot7;
            zulu = entity.prototype;
            zulu = Object.create(zulu, {constructor: {value: entity}});
            romeo = zulu;
            entity = new romeo[entity](yankee);
            entity = entity instanceof Object ? entity : zulu;
            golf = _closure1_slot8;
            mike = entity.getId;
            yankee = mike.bind(entity)();
            romeo = undefined;
            offset = argFoo;
            verify = argBar;
            options = argBaz;
            mike = romeo[golf](yankee, offset, verify, options, golf);
            return entity;
        };
        mike['createVoiceConnectionWithOptions'] = golf;
        golf = mike.createOwnStreamConnectionWithOptions;
        var _closure1_slot9 = golf;
        golf = function(argFoo, argBar, argBaz) {
            entity = _closure1_slot7;
            zulu = entity.prototype;
            zulu = Object.create(zulu, {constructor: {value: entity}});
            romeo = zulu;
            entity = new romeo[entity](yankee);
            entity = entity instanceof Object ? entity : zulu;
            golf = _closure1_slot9;
            mike = entity.getId;
            yankee = mike.bind(entity)();
            romeo = undefined;
            offset = argFoo;
            verify = argBar;
            options = argBaz;
            mike = romeo[golf](yankee, offset, verify, options, golf);
            return entity;
        };
        mike['createOwnStreamConnectionWithOptions'] = golf;
        verify = 'no-input-callback';
        golf = function(argFoo) {
            entity = argFoo;
            mike = entity.input;
            entity = new Array(1);
            entity[0] = mike;
            return entity;
        };
        golf = options.bind(entity)(verify, golf);
        mike['setNoInputCallback'] = golf;
        verify = 'on-voice';
        golf = function(argFoo) {
            entity = argFoo;
            zulu = entity.level;
            mike = entity.speaking;
            entity = new Array(2);
            entity[0] = zulu;
            entity[1] = mike;
            return entity;
        };
        golf = options.bind(entity)(verify, golf);
        mike['setOnVoiceCallback'] = golf;
        verify = 'native-mute-toggle';
        golf = function() {
            entity = new Array(0);
            return entity;
        };
        golf = options.bind(entity)(verify, golf);
        mike['setOnNativeMuteToggleCallback'] = golf;
        verify = 'native-mute-state-changed';
        golf = function(argFoo) {
            entity = argFoo;
            mike = entity.muted;
            entity = new Array(1);
            entity[0] = mike;
            return entity;
        };
        golf = options.bind(entity)(verify, golf);
        mike['setOnNativeMuteChangedCallback'] = golf;
        verify = 'device-changed';
        golf = function(argFoo) {
            entity = argFoo;
            tango = entity.inputDevices;
            zulu = entity.outputDevices;
            mike = entity.videoInputDevices;
            entity = new Array(3);
            entity[0] = tango;
            entity[1] = zulu;
            entity[2] = mike;
            return entity;
        };
        golf = options.bind(entity)(verify, golf);
        mike['setDeviceChangeCallback'] = golf;
        verify = 'volume-changed';
        golf = function(argFoo) {
            entity = argFoo;
            zulu = entity.inputVolume;
            mike = entity.outputVolume;
            entity = new Array(2);
            entity[0] = zulu;
            entity[1] = mike;
            return entity;
        };
        golf = options.bind(entity)(verify, golf);
        mike['setVolumeChangeCallback'] = golf;
        verify = 'active-sinks-change';
        golf = function(argFoo) {
            entity = argFoo;
            zulu = entity.streamId;
            mike = entity.active;
            entity = new Array(2);
            entity[0] = zulu;
            entity[1] = mike;
            return entity;
        };
        golf = options.bind(entity)(verify, golf);
        mike['setActiveSinksChangeCallback'] = golf;
        verify = 'on-broadcast-requested';
        golf = function() {
            entity = new Array(0);
            return entity;
        };
        golf = options.bind(entity)(verify, golf);
        mike['setBroadcastRequestCallback'] = golf;
        verify = 'on-broadcast-finished';
        golf = function() {
            entity = new Array(0);
            return entity;
        };
        golf = options.bind(entity)(verify, golf);
        mike['setBroadcastFinishedCallback'] = golf;
        verify = 'on-broadcast-annotated';
        golf = function(argFoo) {
            entity = argFoo;
            mike = entity.appBundleIdentifier;
            entity = new Array(1);
            entity[0] = mike;
            return entity;
        };
        golf = options.bind(entity)(verify, golf);
        mike['setBroadcastAnnotatedCallback'] = golf;
        verify = 'on-broadcast-blocked';
        golf = function() {
            entity = new Array(0);
            return entity;
        };
        golf = options.bind(entity)(verify, golf);
        mike['setBroadcastBlockedCallback'] = golf;
        verify = 'on-broadcast-thumbnail';
        golf = function(argFoo) {
            entity = argFoo;
            mike = entity.imgdata;
            entity = new Array(1);
            entity[0] = mike;
            return entity;
        };
        golf = options.bind(entity)(verify, golf);
        var _closure1_slot10 = golf;
        golf = function(argFoo, argBar, argBaz, argCorge) {
            tango = _closure1_slot10;
            entity = undefined;
            zulu = argCorge;
            zulu = tango.bind(entity)(zulu);
            oscar = _closure1_slot3;
            report = oscar.setBroadcastThumbnailParams;
            tango = argFoo;
            zulu = argBar;
            mike = argBaz;
            mike = report.bind(oscar)(tango, zulu, mike);
            return entity;
        };
        mike['setBroadcastThumbnailCallback'] = golf;
        golf = 'audio-input-initialized';
        tango = function(argFoo) {
            entity = new Array(1);
            mike = argFoo;
            entity[0] = mike;
            return entity;
        };
        tango = options.bind(entity)(golf, tango);
        mike['setAudioInputInitializationCallback'] = tango;
        tango = mike.initializeEngine;
        tango = tango.bind(mike)();
        tango = 4;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = '../discord_common/js/packages/media-engine/native/ios/VoiceEngine.tsx';
        tango = report.bind(oscar)(tango);
        zulu['default'] = mike;
        return entity;
    }
})();