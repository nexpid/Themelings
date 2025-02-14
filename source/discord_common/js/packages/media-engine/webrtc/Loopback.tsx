// discord_common/js/packages/media-engine/webrtc/Loopback.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun51660: for(var _fun51660_ip = 0; ; ) switch(_fun51660_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot10;
            entity = entity.bind(zulu)();
            if(entity) { _fun51660_ip = 48; continue _fun51660 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun51660_ip = 86; continue _fun51660;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun51661: for(var _fun51661_ip = 0; ; ) switch(_fun51661_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 70: // try_end0
            _fun51661_ip = 74; continue _fun51661;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot10 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SpeakingFlags;
    var _closure1_slot7 = tango;
    tango = {'voiceActivityDetection': true, 'offerToReceiveAudio': true, 'offerToReceiveVideo': false, 'iceRestart': false};
    var _closure1_slot8 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.EventEmitter;
    mike = function(argFoo) {
        tango = function(argFoo, argBar, argBaz) { // Original name: Loopback
            _fun51665: for(var _fun51665_ip = 0; ; ) switch(_fun51665_ip) {
 0:
                mike = argFoo;
                oscar = arguments[3];
                options = this;
                report = undefined;
                if(!(oscar === report)) { _fun51665_ip = 21; continue _fun51665 }
 17:
                oscar = '';
 21:
                var _closure3_slot0 = report;
                entity = _closure1_slot2;
                golf = _closure2_slot0;
                entity = entity.bind(report)(options, golf);
                entity = _closure1_slot9;
                entity = entity.bind(report)(options, golf);
                _closure3_slot0 = entity;
                golf = new Array(0);
                entity['senders'] = golf;
                golf = {};
                entity['outputs'] = golf;
                golf = function() {
                    zulu = _closure3_slot0;
                    tango = zulu.input;
                    zulu = tango.getDelayedStream;
                    report = zulu.bind(tango)();
                    var _closure4_slot0 = report;
                    zulu = _closure3_slot0;
                    oscar = zulu.senders;
                    tango = oscar.forEach;
                    zulu = function(argFoo) {
                        entity = _closure3_slot0;
                        zulu = entity.pc1;
                        mike = zulu.removeTrack;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    zulu = tango.bind(oscar)(zulu);
                    zulu = _closure3_slot0;
                    tango = report.getAudioTracks;
                    report = tango.bind(report)();
                    tango = report.map;
                    mike = function(argFoo) {
                        entity = _closure3_slot0;
                        tango = entity.pc1;
                        zulu = tango.addTrack;
                        mike = _closure4_slot0;
                        entity = argFoo;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    options = tango.bind(report)(mike);
                    mike = new Array(0);
                    golf = 0;
                    verify = mike;
                    tango = arraySpread(verify, options, golf);
                    zulu['senders'] = mike;
                    mike = _closure3_slot0;
                    entity = mike.handshake;
                    entity = entity.bind(mike)();
                    entity = undefined;
                    return entity;
                };
                entity['handleStream'] = golf;
                golf = function(argFoo) {
                    entity = argFoo;
                    mike = entity.streams;
                    entity = 0;
                    mike = mike[entity];
                    entity = mike.getTracks;
                    zulu = entity.bind(mike)();
                    mike = zulu.forEach;
                    entity = function(argFoo) {
                        mike = argFoo;
                        var _closure5_slot0 = mike;
                        report = _closure3_slot0;
                        tango = report.createOutput;
                        zulu = mike.id;
                        zulu = tango.bind(report)(zulu, mike);
                        entity = function() {
                            tango = _closure3_slot0;
                            zulu = tango.destroyOutput;
                            mike = _closure5_slot0;
                            entity = mike.id;
                            entity = zulu.bind(tango)(entity, mike);
                            entity = undefined;
                            return entity;
                        };
                        mike['onmute'] = entity;
                        entity = undefined;
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                entity['handleTrack'] = golf;
                entity['userId'] = oscar;
                oscar = argBaz;
                entity['sinkId'] = oscar;
                oscar = global;
                golf = oscar.RTCPeerConnection;
                options = golf.prototype;
                options = Object.create(options, {constructor: {value: golf}});
                yankee = options;
                golf = new yankee[golf](offset);
                golf = golf instanceof Object ? golf : options;
                entity['pc1'] = golf;
                options = entity.pc1;
                golf = function(argFoo) {
                    _fun51672: for(var _fun51672_ip = 0; ; ) switch(_fun51672_ip) {
 0:
                        entity = argFoo;
                        zulu = entity.candidate;
                        mike = null;
                        if(!(mike != zulu)) { _fun51672_ip = 45; continue _fun51672 }
 15:
                        mike = _closure3_slot0;
                        zulu = mike.pc2;
                        mike = zulu.addIceCandidate;
                        entity = entity.candidate;
                        entity = mike.bind(zulu)(entity);
 45:
                        entity = undefined;
                        return entity;
                    }
                };
                options['onicecandidate'] = golf;
                oscar = oscar.RTCPeerConnection;
                golf = oscar.prototype;
                golf = Object.create(golf, {constructor: {value: oscar}});
                yankee = golf;
                oscar = new yankee[oscar](offset);
                oscar = oscar instanceof Object ? oscar : golf;
                entity['pc2'] = oscar;
                oscar = entity.pc2;
                tango = function(argFoo) {
                    _fun51673: for(var _fun51673_ip = 0; ; ) switch(_fun51673_ip) {
 0:
                        entity = argFoo;
                        zulu = entity.candidate;
                        mike = null;
                        if(!(mike != zulu)) { _fun51673_ip = 45; continue _fun51673 }
 15:
                        mike = _closure3_slot0;
                        zulu = mike.pc1;
                        mike = zulu.addIceCandidate;
                        entity = entity.candidate;
                        entity = mike.bind(zulu)(entity);
 45:
                        entity = undefined;
                        return entity;
                    }
                };
                oscar['onicecandidate'] = tango;
                oscar = entity.pc2;
                tango = entity.handleTrack;
                oscar['ontrack'] = tango;
                tango = _closure1_slot0;
                oscar = _closure1_slot1;
                zulu = 6;
                zulu = oscar[zulu];
                zulu = tango.bind(report)(zulu);
                tango = zulu.prototype;
                tango = Object.create(tango, {constructor: {value: zulu}});
                yankee = tango;
                offset = mike;
                zulu = new yankee[zulu](offset, verify);
                zulu = zulu instanceof Object ? zulu : tango;
                entity['input'] = zulu;
                report = entity.input;
                tango = report.setSource;
                zulu = argBar;
                zulu = tango.bind(report)(zulu);
                oscar = entity.input;
                report = oscar.on;
                tango = entity.handleStream;
                zulu = 'stream';
                zulu = report.bind(oscar)(zulu, tango);
                tango = entity.input;
                zulu = tango.enable;
                zulu = zulu.bind(tango)();
                entity['audioContext'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'stop';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun51674: for(var _fun51674_ip = 0; ; ) switch(_fun51674_ip) {
 0:
                tango = this;
                mike = tango.pc1;
                entity = mike.close;
                entity = entity.bind(mike)();
                mike = tango.pc2;
                entity = mike.close;
                entity = entity.bind(mike)();
                mike = tango.input;
                entity = mike.destroy;
                entity = entity.bind(mike)();
                entity = global;
                zulu = entity.Object;
                mike = zulu.keys;
                entity = tango.outputs;
                zulu = mike.bind(zulu)(entity);
                entity = zulu.length;
                mike = 0;
                entity = mike < entity;
                if(!entity) { _fun51674_ip = 116; continue _fun51674 }
 89:
                report = zulu[mike];
                entity = tango.destroyOutput;
                entity = entity.bind(tango)(report);
                mike = mike + 1;
                entity = zulu.length;
                if(mike < entity) { _fun51674_ip = 89; continue _fun51674 }
 116:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golf = 'setAudioSource';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.input;
            mike = zulu.setSource;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'setAudioSink';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun51676: for(var _fun51676_ip = 0; ; ) switch(_fun51676_ip) {
 0:
                report = argFoo;
                tango = this;
                tango['sinkId'] = report;
                entity = global;
                zulu = entity.Object;
                mike = zulu.keys;
                entity = tango.outputs;
                zulu = mike.bind(zulu)(entity);
                entity = zulu.length;
                mike = 0;
                entity = mike < entity;
                if(!entity) { _fun51676_ip = 87; continue _fun51676 }
 50:
                oscar = zulu[mike];
                entity = tango.outputs;
                oscar = entity[oscar];
                entity = oscar.setSinkId;
                entity = entity.bind(oscar)(report);
                mike = mike + 1;
                entity = zulu.length;
                if(mike < entity) { _fun51676_ip = 50; continue _fun51676 }
 87:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'setNoiseCancellation';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = this;
            mike = entity.input;
            entity = argFoo;
            mike['noiseCancellation'] = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'createOutput';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun51678: for(var _fun51678_ip = 0; ; ) switch(_fun51678_ip) {
 0:
                tango = argFoo;
                zulu = this;
                entity = zulu.outputs;
                mike = entity[tango];
                entity = null;
                if(!(entity == mike)) { _fun51678_ip = 149; continue _fun51678 }
 25:
                golf = _closure1_slot0;
                oscar = _closure1_slot1;
                entity = 7;
                oscar = oscar[entity];
                entity = undefined;
                options = golf.bind(entity)(oscar);
                offset = zulu.userId;
                verify = zulu.audioContext;
                oscar = options.prototype;
                oscar = Object.create(oscar, {constructor: {value: options}});
                yankee = oscar;
                entity = new yankee[options](offset, verify, options);
                entity = entity instanceof Object ? entity : oscar;
                oscar = false;
                entity['mute'] = oscar;
                oscar = 100;
                entity['volume'] = oscar;
                oscar = entity.setSpeakingFlags;
                report = _closure1_slot7;
                report = report.VOICE;
                report = oscar.bind(entity)(report);
                oscar = entity.setSinkId;
                report = zulu.sinkId;
                report = oscar.bind(entity)(report);
                zulu = zulu.outputs;
                zulu[tango] = entity;
                mike = entity;
 149:
                zulu = mike.addTrack;
                entity = argBar;
                entity = zulu.bind(mike)(entity);
                entity = mike.play;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'destroyOutput';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun51679: for(var _fun51679_ip = 0; ; ) switch(_fun51679_ip) {
 0:
                mike = argFoo;
                golf = argBar;
                entity = this;
                zulu = entity.outputs;
                tango = zulu[mike];
                report = null;
                zulu = report == tango;
                if(zulu) { _fun51679_ip = 55; continue _fun51679 }
 28:
                report = report != golf;
                if(!report) { _fun51679_ip = 52; continue _fun51679 }
 35:
                oscar = tango.removeTrack;
                golf = oscar.bind(tango)(golf);
                oscar = 0;
                report = oscar !== golf;
 52:
                zulu = report;
 55:
                if(zulu) { _fun51679_ip = 78; continue _fun51679 }
 58:
                zulu = tango.destroy;
                zulu = zulu.bind(tango)();
                entity = entity.outputs;
                entity = delete entity[mike];
 78:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'handshake';
        report['key'] = golf;
        oscar = function() { // Original name: value
            mike = this;
            var _closure3_slot0 = mike;
            tango = mike.pc1;
            zulu = tango.createOffer;
            mike = _closure1_slot8;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.then;
            entity = function(argFoo) {
                _fun51681: for(var _fun51681_ip = 0; ; ) switch(_fun51681_ip) {
 0:
                    tango = argFoo;
                    var _closure4_slot0 = tango;
                    mike = _closure3_slot0;
                    zulu = mike.pc1;
                    mike = zulu.setLocalDescription;
                    oscar = tango.sdp;
                    report = oscar.split;
                    golf = '\n';
                    oscar = report.bind(oscar)(golf);
                    report = oscar.length;
                    options = 0;
                    report = options < report;
                    if(!report) { _fun51681_ip = 105; continue _fun51681 }
 62:
                    offset = oscar[options];
                    verify = /^a=mid:/;
                    report = verify.test;
                    report = report.bind(verify)(offset);
                    if(report) { _fun51681_ip = 105; continue _fun51681 }
 93:
                    options = options + 1;
                    report = oscar.length;
                    if(options < report) { _fun51681_ip = 62; continue _fun51681 }
 105:
                    report = oscar.join;
                    report = report.bind(oscar)(golf);
                    tango['sdp'] = report;
                    zulu = mike.bind(zulu)(tango);
                    mike = zulu.then;
                    entity = function() {
                        entity = _closure3_slot0;
                        zulu = entity.pc2;
                        mike = zulu.setRemoteDescription;
                        entity = _closure4_slot0;
                        zulu = mike.bind(zulu)(entity);
                        mike = zulu.then;
                        entity = function() {
                            entity = _closure3_slot0;
                            mike = entity.pc2;
                            entity = mike.createAnswer;
                            zulu = entity.bind(mike)();
                            mike = zulu.then;
                            entity = function(argFoo) {
                                tango = argFoo;
                                var _closure7_slot0 = tango;
                                mike = _closure3_slot0;
                                zulu = mike.pc2;
                                mike = zulu.setLocalDescription;
                                zulu = mike.bind(zulu)(tango);
                                mike = zulu.then;
                                entity = function() {
                                    entity = _closure3_slot0;
                                    zulu = entity.pc1;
                                    mike = zulu.setRemoteDescription;
                                    entity = _closure7_slot0;
                                    entity = mike.bind(zulu)(entity);
                                    entity = undefined;
                                    return entity;
                                };
                                entity = mike.bind(zulu)(entity);
                                entity = undefined;
                                return entity;
                            };
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = oscar;
        entity[6] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/media-engine/webrtc/Loopback.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();