// discord_common/js/packages/media-engine/webrtc/Loopback.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot9 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SpeakingFlags;
    var _closure1_slot7 = tangon;
    tangon = {'voiceActivityDetection': true, 'offerToReceiveAudio': true, 'offerToReceiveVideo': false, 'iceRestart': false};
    var _closure1_slot8 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.EventEmitter;
    michal = function(argFoo) {
        tangon = function(argFoo, argBar, argBaz) { // Original name: Loopback
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = argFoo;
                oscard = arguments[3];
                option = this;
                report = undefined;
                if(!(oscard === report)) { _fun00004_ip = 21; continue _fun00003 }
 17:
                oscard = '';
 21:
                var _closure3_slot0 = report;
                entity = _closure1_slot2;
                golfie = _closure2_slot0;
                entity = entity.bind(report)(option, golfie);
                entity = _closure1_slot5;
                foxtra = entity.bind(report)(golfie);
                golfie = _closure1_slot4;
                entity = _closure1_slot9;
                entity = entity.bind(report)();
                if(entity) { _fun00004_ip = 82; continue _fun00003 }
 69:
                entity = foxtra.apply;
                entity = entity.bind(foxtra)(option, report);
                _fun00004_ip = 120; continue _fun00003;
 82:
                verify = global;
                romeon = verify.Reflect;
                yankee = romeon.construct;
                verify = _closure1_slot5;
                verify = verify.bind(report)(option);
                offset = verify.constructor;
                verify = new Array(0);
                entity = yankee.bind(romeon)(foxtra, verify, offset);
 120:
                entity = golfie.bind(report)(option, entity);
                _closure3_slot0 = entity;
                golfie = new Array(0);
                entity['senders'] = golfie;
                golfie = {};
                entity['outputs'] = golfie;
                golfie = function() {
                    zuuluu = _closure3_slot0;
                    tangon = zuuluu.input;
                    zuuluu = tangon.getDelayedStream;
                    report = zuuluu.bind(tangon)();
                    var _closure4_slot0 = report;
                    zuuluu = _closure3_slot0;
                    oscard = zuuluu.senders;
                    tangon = oscard.forEach;
                    zuuluu = function(argFoo) {
                        entity = _closure3_slot0;
                        zuuluu = entity.pc1;
                        michal = zuuluu.removeTrack;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    zuuluu = _closure3_slot0;
                    tangon = report.getAudioTracks;
                    report = tangon.bind(report)();
                    tangon = report.map;
                    michal = function(argFoo) {
                        entity = _closure3_slot0;
                        tangon = entity.pc1;
                        zuuluu = tangon.addTrack;
                        michal = _closure4_slot0;
                        entity = argFoo;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    option = tangon.bind(report)(michal);
                    michal = new Array(0);
                    golfie = 0;
                    verify = michal;
                    tangon = arraySpread(verify, option, golfie);
                    zuuluu['senders'] = michal;
                    michal = _closure3_slot0;
                    entity = michal.handshake;
                    entity = entity.bind(michal)();
                    entity = undefined;
                    return entity;
                };
                entity['handleStream'] = golfie;
                golfie = function(argFoo) {
                    entity = argFoo;
                    michal = entity.streams;
                    entity = 0;
                    michal = michal[entity];
                    entity = michal.getTracks;
                    zuuluu = entity.bind(michal)();
                    michal = zuuluu.forEach;
                    entity = function(argFoo) {
                        michal = argFoo;
                        var _closure5_slot0 = michal;
                        report = _closure3_slot0;
                        tangon = report.createOutput;
                        zuuluu = michal.id;
                        zuuluu = tangon.bind(report)(zuuluu, michal);
                        entity = function() {
                            tangon = _closure3_slot0;
                            zuuluu = tangon.destroyOutput;
                            michal = _closure5_slot0;
                            entity = michal.id;
                            entity = zuuluu.bind(tangon)(entity, michal);
                            entity = undefined;
                            return entity;
                        };
                        michal['onmute'] = entity;
                        entity = undefined;
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                entity['handleTrack'] = golfie;
                entity['userId'] = oscard;
                oscard = argBaz;
                entity['sinkId'] = oscard;
                oscard = global;
                golfie = oscard.RTCPeerConnection;
                option = golfie.prototype;
                option = Object.create(option, {constructor: {value: golfie}});
                output = option;
                golfie = new output[golfie](sizing);
                golfie = golfie instanceof Object ? golfie : option;
                entity['pc1'] = golfie;
                option = entity.pc1;
                golfie = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        entity = argFoo;
                        zuuluu = entity.candidate;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00006_ip = 45; continue _fun00005 }
 15:
                        michal = _closure3_slot0;
                        zuuluu = michal.pc2;
                        michal = zuuluu.addIceCandidate;
                        entity = entity.candidate;
                        entity = michal.bind(zuuluu)(entity);
 45:
                        entity = undefined;
                        return entity;
                    }
                };
                option['onicecandidate'] = golfie;
                oscard = oscard.RTCPeerConnection;
                golfie = oscard.prototype;
                golfie = Object.create(golfie, {constructor: {value: oscard}});
                output = golfie;
                oscard = new output[oscard](sizing);
                oscard = oscard instanceof Object ? oscard : golfie;
                entity['pc2'] = oscard;
                oscard = entity.pc2;
                tangon = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = argFoo;
                        zuuluu = entity.candidate;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00008_ip = 45; continue _fun00007 }
 15:
                        michal = _closure3_slot0;
                        zuuluu = michal.pc1;
                        michal = zuuluu.addIceCandidate;
                        entity = entity.candidate;
                        entity = michal.bind(zuuluu)(entity);
 45:
                        entity = undefined;
                        return entity;
                    }
                };
                oscard['onicecandidate'] = tangon;
                oscard = entity.pc2;
                tangon = entity.handleTrack;
                oscard['ontrack'] = tangon;
                tangon = _closure1_slot0;
                oscard = _closure1_slot1;
                zuuluu = 6;
                zuuluu = oscard[zuuluu];
                zuuluu = tangon.bind(report)(zuuluu);
                tangon = zuuluu.prototype;
                tangon = Object.create(tangon, {constructor: {value: zuuluu}});
                output = tangon;
                sizing = michal;
                zuuluu = new output[zuuluu](sizing, kiloes);
                zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                entity['input'] = zuuluu;
                report = entity.input;
                tangon = report.setSource;
                zuuluu = argBar;
                zuuluu = tangon.bind(report)(zuuluu);
                oscard = entity.input;
                report = oscard.on;
                tangon = entity.handleStream;
                zuuluu = 'stream';
                zuuluu = report.bind(oscard)(zuuluu, tangon);
                tangon = entity.input;
                zuuluu = tangon.enable;
                zuuluu = zuuluu.bind(tangon)();
                entity['audioContext'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = 'stop';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = this;
                michal = tangon.pc1;
                entity = michal.close;
                entity = entity.bind(michal)();
                michal = tangon.pc2;
                entity = michal.close;
                entity = entity.bind(michal)();
                michal = tangon.input;
                entity = michal.destroy;
                entity = entity.bind(michal)();
                entity = global;
                zuuluu = entity.Object;
                michal = zuuluu.keys;
                entity = tangon.outputs;
                zuuluu = michal.bind(zuuluu)(entity);
                entity = zuuluu.length;
                michal = 0;
                entity = michal < entity;
                if(!entity) { _fun00010_ip = 116; continue _fun00009 }
 89:
                report = zuuluu[michal];
                entity = tangon.destroyOutput;
                entity = entity.bind(tangon)(report);
                michal = michal + 1;
                entity = zuuluu.length;
                if(michal < entity) { _fun00010_ip = 89; continue _fun00009 }
 116:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golfie = 'setAudioSource';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = this;
            zuuluu = entity.input;
            michal = zuuluu.setSource;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'setAudioSink';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                report = argFoo;
                tangon = this;
                tangon['sinkId'] = report;
                entity = global;
                zuuluu = entity.Object;
                michal = zuuluu.keys;
                entity = tangon.outputs;
                zuuluu = michal.bind(zuuluu)(entity);
                entity = zuuluu.length;
                michal = 0;
                entity = michal < entity;
                if(!entity) { _fun00012_ip = 87; continue _fun00011 }
 50:
                oscard = zuuluu[michal];
                entity = tangon.outputs;
                oscard = entity[oscard];
                entity = oscard.setSinkId;
                entity = entity.bind(oscard)(report);
                michal = michal + 1;
                entity = zuuluu.length;
                if(michal < entity) { _fun00012_ip = 50; continue _fun00011 }
 87:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'setNoiseCancellation';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = this;
            michal = entity.input;
            entity = argFoo;
            michal['noiseCancellation'] = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'createOutput';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tangon = argFoo;
                zuuluu = this;
                entity = zuuluu.outputs;
                michal = entity[tangon];
                entity = null;
                if(!(entity == michal)) { _fun00014_ip = 149; continue _fun00013 }
 25:
                golfie = _closure1_slot0;
                oscard = _closure1_slot1;
                entity = 7;
                oscard = oscard[entity];
                entity = undefined;
                option = golfie.bind(entity)(oscard);
                offset = zuuluu.userId;
                verify = zuuluu.audioContext;
                oscard = option.prototype;
                oscard = Object.create(oscard, {constructor: {value: option}});
                yankee = oscard;
                entity = new yankee[option](offset, verify, option);
                entity = entity instanceof Object ? entity : oscard;
                oscard = false;
                entity['mute'] = oscard;
                oscard = 100;
                entity['volume'] = oscard;
                oscard = entity.setSpeakingFlags;
                report = _closure1_slot7;
                report = report.VOICE;
                report = oscard.bind(entity)(report);
                oscard = entity.setSinkId;
                report = zuuluu.sinkId;
                report = oscard.bind(entity)(report);
                zuuluu = zuuluu.outputs;
                zuuluu[tangon] = entity;
                michal = entity;
 149:
                zuuluu = michal.addTrack;
                entity = argBar;
                entity = zuuluu.bind(michal)(entity);
                entity = michal.play;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'destroyOutput';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                michal = argFoo;
                golfie = argBar;
                entity = this;
                zuuluu = entity.outputs;
                tangon = zuuluu[michal];
                report = null;
                zuuluu = report == tangon;
                if(zuuluu) { _fun00016_ip = 55; continue _fun00015 }
 28:
                report = report != golfie;
                if(!report) { _fun00016_ip = 52; continue _fun00015 }
 35:
                oscard = tangon.removeTrack;
                golfie = oscard.bind(tangon)(golfie);
                oscard = 0;
                report = oscard !== golfie;
 52:
                zuuluu = report;
 55:
                if(zuuluu) { _fun00016_ip = 78; continue _fun00015 }
 58:
                zuuluu = tangon.destroy;
                zuuluu = zuuluu.bind(tangon)();
                entity = entity.outputs;
                entity = delete entity[michal];
 78:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'handshake';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            michal = this;
            var _closure3_slot0 = michal;
            tangon = michal.pc1;
            zuuluu = tangon.createOffer;
            michal = _closure1_slot8;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.then;
            entity = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    tangon = argFoo;
                    var _closure4_slot0 = tangon;
                    michal = _closure3_slot0;
                    zuuluu = michal.pc1;
                    michal = zuuluu.setLocalDescription;
                    oscard = tangon.sdp;
                    report = oscard.split;
                    golfie = '\n';
                    oscard = report.bind(oscard)(golfie);
                    report = oscard.length;
                    option = 0;
                    report = option < report;
                    if(!report) { _fun00018_ip = 105; continue _fun00017 }
 62:
                    offset = oscard[option];
                    verify = /^a=mid:/;
                    report = verify.test;
                    report = report.bind(verify)(offset);
                    if(report) { _fun00018_ip = 105; continue _fun00017 }
 93:
                    option = option + 1;
                    report = oscard.length;
                    if(option < report) { _fun00018_ip = 62; continue _fun00017 }
 105:
                    report = oscard.join;
                    report = report.bind(oscard)(golfie);
                    tangon['sdp'] = report;
                    zuuluu = michal.bind(zuuluu)(tangon);
                    michal = zuuluu.then;
                    entity = function() {
                        entity = _closure3_slot0;
                        zuuluu = entity.pc2;
                        michal = zuuluu.setRemoteDescription;
                        entity = _closure4_slot0;
                        zuuluu = michal.bind(zuuluu)(entity);
                        michal = zuuluu.then;
                        entity = function() {
                            entity = _closure3_slot0;
                            michal = entity.pc2;
                            entity = michal.createAnswer;
                            zuuluu = entity.bind(michal)();
                            michal = zuuluu.then;
                            entity = function(argFoo) {
                                tangon = argFoo;
                                var _closure7_slot0 = tangon;
                                michal = _closure3_slot0;
                                zuuluu = michal.pc2;
                                michal = zuuluu.setLocalDescription;
                                zuuluu = michal.bind(zuuluu)(tangon);
                                michal = zuuluu.then;
                                entity = function() {
                                    entity = _closure3_slot0;
                                    zuuluu = entity.pc1;
                                    michal = zuuluu.setRemoteDescription;
                                    entity = _closure7_slot0;
                                    entity = michal.bind(zuuluu)(entity);
                                    entity = undefined;
                                    return entity;
                                };
                                entity = michal.bind(zuuluu)(entity);
                                entity = undefined;
                                return entity;
                            };
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = oscard;
        entity[6] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/media-engine/webrtc/Loopback.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();