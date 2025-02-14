// discord_common/js/packages/media-engine/webrtc/PeerConnection.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun51329: for(var _fun51329_ip = 0; ; ) switch(_fun51329_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot9;
            entity = entity.bind(zulu)();
            if(entity) { _fun51329_ip = 48; continue _fun51329 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun51329_ip = 86; continue _fun51329;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun51330: for(var _fun51330_ip = 0; ; ) switch(_fun51330_ip) {
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
            _fun51330_ip = 74; continue _fun51330;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot9 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot1 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.BROWSER_SUPPORTS_CONNECTION_STATE;
    var _closure1_slot5 = golf;
    tango = tango.BROWSER_SUPPORTS_VIDEO;
    var _closure1_slot6 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.Logger;
    tango = options.prototype;
    golf = Object.create(tango, {constructor: {value: options}});
    romeo = 'PeerConnection';
    foxtrot = golf;
    tango = new foxtrot[options](romeo, yankee);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot7 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.EventEmitter;
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: PeerConnection
            _fun51334: for(var _fun51334_ip = 0; ; ) switch(_fun51334_ip) {
 0:
                oscar = this;
                entity = _closure1_slot0;
                report = _closure2_slot0;
                tango = undefined;
                entity = entity.bind(tango)(oscar, report);
                entity = _closure1_slot8;
                entity = entity.bind(tango)(oscar, report);
                var _closure3_slot0 = entity;
                tango = null;
                entity['stream'] = tango;
                tango = new Array(0);
                entity['senders'] = tango;
                tango = false;
                entity['negotiating'] = tango;
                entity['_negotiationNeeded'] = tango;
                tango = function() {
                    _fun51335: for(var _fun51335_ip = 0; ; ) switch(_fun51335_ip) {
 0:
                        mike = _closure3_slot0;
                        zulu = mike.peerConnectionState;
                        report = _closure1_slot7;
                        tango = report.info;
                        mike = 'peerConnectionState =>';
                        mike = tango.bind(report)(mike, zulu);
                        mike = 'connecting';
                        if(!(mike !== zulu)) { _fun51335_ip = 65; continue _fun51335 }
 48:
                        tango = _closure3_slot0;
                        mike = tango.emit;
                        mike = mike.bind(tango)(zulu);
                        _fun51335_ip = 121; continue _fun51335;
 65:
                        mike = _closure3_slot0;
                        tango = mike.iceConnectionState;
                        mike = 'connected';
                        if(!(mike !== tango)) { _fun51335_ip = 106; continue _fun51335 }
 83:
                        report = _closure3_slot0;
                        tango = report.emit;
                        mike = report.iceConnectionState;
                        mike = tango.bind(report)(mike);
                        _fun51335_ip = 121; continue _fun51335;
 106:
                        mike = _closure3_slot0;
                        entity = mike.emit;
                        entity = entity.bind(mike)(zulu);
 121:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handlePeerConnectionStateChange'] = tango;
                tango = function() {
                    _fun51336: for(var _fun51336_ip = 0; ; ) switch(_fun51336_ip) {
 0:
                        mike = _closure3_slot0;
                        zulu = mike.iceConnectionState;
                        report = _closure1_slot7;
                        tango = report.info;
                        mike = 'iceConnectionState =>';
                        mike = tango.bind(report)(mike, zulu);
                        mike = 'completed';
                        if(!(mike === zulu)) { _fun51336_ip = 50; continue _fun51336 }
 46:
                        zulu = 'connected';
 50:
                        mike = _closure3_slot0;
                        entity = mike.emit;
                        entity = entity.bind(mike)(zulu);
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleIceConnectionStateChange'] = tango;
                tango = function() {
                    _fun51337: for(var _fun51337_ip = 0; ; ) switch(_fun51337_ip) {
 0:
                        report = _closure1_slot7;
                        tango = report.info;
                        mike = _closure3_slot0;
                        verify = mike.signalingState;
                        oscar = mike._negotiationNeeded;
                        zulu = oscar.toString;
                        options = zulu.bind(oscar)();
                        zulu = global;
                        zulu = zulu.HermesInternal;
                        golf = zulu.concat;
                        oscar = 'signalingState => ';
                        zulu = ', negotiation needed: ';
                        zulu = golf.bind(oscar)(verify, zulu, options);
                        zulu = tango.bind(report)(zulu);
                        zulu = mike.signalingState;
                        mike = 'stable';
                        if(!(mike === zulu)) { _fun51337_ip = 127; continue _fun51337 }
 92:
                        mike = _closure3_slot0;
                        zulu = false;
                        mike['negotiating'] = zulu;
                        mike = mike._negotiationNeeded;
                        if(!mike) { _fun51337_ip = 127; continue _fun51337 }
 113:
                        mike = _closure3_slot0;
                        entity = mike.negotiationNeeded;
                        entity = entity.bind(mike)();
 127:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleSignalingStateChange'] = tango;
                tango = function() {
                    tango = _closure1_slot7;
                    zulu = tango.info;
                    entity = _closure3_slot0;
                    mike = entity.iceGatheringState;
                    entity = 'iceGatheringState =>';
                    entity = zulu.bind(tango)(entity, mike);
                    entity = undefined;
                    return entity;
                };
                entity['handleIceGatheringStateChange'] = tango;
                zulu = function(argFoo) {
                    entity = argFoo;
                    tango = _closure3_slot0;
                    zulu = tango.emitTrack;
                    report = entity.streams;
                    mike = 0;
                    mike = report[mike];
                    mike = mike.id;
                    entity = entity.track;
                    entity = zulu.bind(tango)(mike, entity);
                    entity = undefined;
                    return entity;
                };
                entity['handleTrack'] = zulu;
                zulu = argFoo;
                entity['bitrate'] = zulu;
                zulu = global;
                report = zulu.RTCPeerConnection;
                zulu = {};
                tango = 'plan-b';
                zulu['sdpSemantics'] = tango;
                tango = report.prototype;
                tango = Object.create(tango, {constructor: {value: report}});
                verify = tango;
                options = zulu;
                zulu = new verify[report](options, golf);
                tango = zulu instanceof Object ? zulu : tango;
                entity['pc'] = tango;
                zulu = _closure1_slot5;
                if(zulu) { _fun51334_ip = 208; continue _fun51334 }
 194:
                zulu = entity.handleIceConnectionStateChange;
                tango['oniceconnectionstatechange'] = zulu;
                _fun51334_ip = 232; continue _fun51334;
 208:
                zulu = entity.handlePeerConnectionStateChange;
                tango['onconnectionstatechange'] = zulu;
                zulu = entity.handlePeerConnectionStateChange;
                tango['oniceconnectionstatechange'] = zulu;
 232:
                zulu = entity.handleSignalingStateChange;
                tango['onsignalingstatechange'] = zulu;
                zulu = entity.handleIceGatheringStateChange;
                tango['onicegatheringstatechange'] = zulu;
                report = entity.handleTrack;
                zulu = report.bind;
                zulu = zulu.bind(report)(entity);
                tango['ontrack'] = zulu;
                tango = _closure1_slot7;
                zulu = tango.info;
                mike = 'Constructed RTCPeerConnection';
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot4;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot1;
        report = {};
        entity = 'setBitRate';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun51340: for(var _fun51340_ip = 0; ; ) switch(_fun51340_ip) {
 0:
                entity = argFoo;
                mike = this;
                zulu = mike.bitrate;
                if(!(zulu !== entity)) { _fun51340_ip = 32; continue _fun51340 }
 16:
                mike['bitrate'] = entity;
                entity = mike.negotiationNeeded;
                entity = entity.bind(mike)();
 32:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(16);
        entity[0] = report;
        report = {};
        golf = 'close';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun51341: for(var _fun51341_ip = 0; ; ) switch(_fun51341_ip) {
 0:
                mike = this;
                tango = _closure1_slot7;
                zulu = tango.info;
                entity = 'Close RTCPeerConnection';
                entity = zulu.bind(tango)(entity);
                zulu = mike.signalingState;
                entity = 'closed';
                if(!(entity !== zulu)) { _fun51341_ip = 57; continue _fun51341 }
 41:
                zulu = mike.pc;
                entity = zulu.close;
                entity = entity.bind(zulu)();
 57:
                entity = mike.removeAllListeners;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'peerConnectionState';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = this;
            entity = entity.pc;
            entity = entity.connectionState;
            return entity;
        };
        report['get'] = golf;
        entity[2] = report;
        report = {};
        golf = 'iceGatheringState';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = this;
            entity = entity.pc;
            entity = entity.iceGatheringState;
            return entity;
        };
        report['get'] = golf;
        entity[3] = report;
        report = {};
        golf = 'iceConnectionState';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = this;
            entity = entity.pc;
            entity = entity.iceConnectionState;
            return entity;
        };
        report['get'] = golf;
        entity[4] = report;
        report = {};
        golf = 'signalingState';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = this;
            entity = entity.pc;
            entity = entity.signalingState;
            return entity;
        };
        report['get'] = golf;
        entity[5] = report;
        report = {};
        golf = 'connected';
        report['key'] = golf;
        golf = function() { // Original name: get
            _fun51346: for(var _fun51346_ip = 0; ; ) switch(_fun51346_ip) {
 0:
                mike = this;
                zulu = mike.pc;
                entity = null;
                entity = entity != zulu;
                if(!entity) { _fun51346_ip = 54; continue _fun51346 }
 18:
                tango = /connected|completed/;
                zulu = tango.test;
                mike = mike.pc;
                mike = mike.iceConnectionState;
                entity = zulu.bind(tango)(mike);
 54:
                return entity;
            }
        };
        report['get'] = golf;
        entity[6] = report;
        report = {};
        golf = 'setStream';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun51347: for(var _fun51347_ip = 0; ; ) switch(_fun51347_ip) {
 0:
                verify = argFoo;
                tango = arguments[1];
                zulu = this;
                var _closure3_slot0 = verify;
                entity = undefined;
                if(!(tango === entity)) { _fun51347_ip = 23; continue _fun51347 }
 21:
                tango = false;
 23:
                var _closure3_slot1 = entity;
                mike = zulu.pc;
                _closure3_slot1 = mike;
                report = zulu.iceConnectionState;
                mike = 'closed';
                golf = mike === report;
                mike = zulu.stream;
                report = null;
                options = report == mike;
                if(options) { _fun51347_ip = 69; continue _fun51347 }
 66:
                options = golf;
 69:
                mike = false;
                if(options) { _fun51347_ip = 97; continue _fun51347 }
 74:
                yankee = zulu.senders;
                offset = yankee.forEach;
                options = function(argFoo) {
                    zulu = _closure3_slot1;
                    mike = zulu.removeTrack;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                options = offset.bind(yankee)(options);
                mike = true;
 97:
                zulu['stream'] = verify;
                options = new Array(0);
                zulu['senders'] = options;
                report = report == verify;
                if(report) { _fun51347_ip = 123; continue _fun51347 }
 120:
                report = golf;
 123:
                if(report) { _fun51347_ip = 204; continue _fun51347 }
 126:
                report = verify.getAudioTracks;
                options = report.bind(verify)();
                golf = options.map;
                report = function(argFoo) {
                    tango = _closure3_slot1;
                    zulu = tango.addTrack;
                    mike = _closure3_slot0;
                    entity = argFoo;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                foxtrot = golf.bind(options)(report);
                report = new Array(0);
                romeo = 0;
                backup = report;
                romeo = arraySpread(backup, foxtrot, romeo);
                options = verify.getVideoTracks;
                verify = options.bind(verify)();
                options = verify.map;
                oscar = function(argFoo) {
                    tango = _closure3_slot1;
                    zulu = tango.addTrack;
                    mike = _closure3_slot0;
                    entity = argFoo;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                foxtrot = options.bind(verify)(oscar);
                backup = report;
                oscar = arraySpread(backup, foxtrot, romeo);
                zulu['senders'] = report;
                mike = true;
 204:
                if(!mike) { _fun51347_ip = 210; continue _fun51347 }
 207:
                mike = !tango;
 210:
                if(!mike) { _fun51347_ip = 223; continue _fun51347 }
 213:
                mike = zulu.negotiationNeeded;
                mike = mike.bind(zulu)();
 223:
                return entity;
            }
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'createOffer';
        report['key'] = golf;
        golf = function() { // Original name: value
            report = this;
            var _closure3_slot0 = report;
            tango = report.pc;
            var _closure3_slot1 = tango;
            zulu = tango.createOffer;
            mike = report.makeOfferAnswerOptions;
            mike = mike.bind(report)();
            tango = zulu.bind(tango)(mike);
            zulu = tango.then;
            mike = function(argFoo) {
                zulu = _closure3_slot1;
                mike = zulu.setLocalDescription;
                report = _closure3_slot0;
                tango = report.mungeLocalDescription;
                entity = argFoo;
                entity = tango.bind(report)(entity);
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = zulu.bind(tango)(mike);
            zulu = tango.then;
            mike = function() {
                _fun51353: for(var _fun51353_ip = 0; ; ) switch(_fun51353_ip) {
 0:
                    entity = _closure3_slot1;
                    entity = entity.localDescription;
                    zulu = null;
                    if(!(zulu != entity)) { _fun51353_ip = 43; continue _fun51353 }
 19:
                    tango = _closure3_slot0;
                    zulu = tango.emit;
                    mike = 'offer';
                    mike = zulu.bind(tango)(mike, entity);
                    return entity;
 43:
                    entity = global;
                    zulu = entity.Error;
                    entity = zulu.prototype;
                    mike = Object.create(entity, {constructor: {value: zulu}});
                    oscar = 'localDescription is null';
                    golf = mike;
                    entity = new golf[zulu](oscar, report);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                }
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.catch;
            entity = function(argFoo) {
                _fun51354: for(var _fun51354_ip = 0; ; ) switch(_fun51354_ip) {
 0:
                    tango = argFoo;
                    mike = _closure3_slot1;
                    zulu = mike.signalingState;
                    mike = 'have-remote-offer';
                    if(!(mike !== zulu)) { _fun51354_ip = 28; continue _fun51354 }
 26:
                    throw tango;
 28:
                    zulu = _closure1_slot7;
                    mike = zulu.error;
                    mike = mike.bind(zulu)(tango);
                    mike = _closure3_slot0;
                    entity = mike.createOffer;
                    entity = entity.bind(mike)();
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'createAnswer';
        report['key'] = golf;
        golf = function() { // Original name: value
            report = this;
            var _closure3_slot0 = report;
            tango = report.pc;
            var _closure3_slot1 = tango;
            zulu = tango.createAnswer;
            mike = report.makeOfferAnswerOptions;
            mike = mike.bind(report)();
            tango = zulu.bind(tango)(mike);
            zulu = tango.then;
            mike = function(argFoo) {
                zulu = _closure3_slot1;
                mike = zulu.setLocalDescription;
                report = _closure3_slot0;
                tango = report.mungeLocalDescription;
                entity = argFoo;
                entity = tango.bind(report)(entity);
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = zulu.bind(tango)(mike);
            zulu = tango.then;
            mike = function() {
                _fun51357: for(var _fun51357_ip = 0; ; ) switch(_fun51357_ip) {
 0:
                    entity = _closure3_slot1;
                    entity = entity.localDescription;
                    zulu = null;
                    if(!(zulu != entity)) { _fun51357_ip = 41; continue _fun51357 }
 19:
                    tango = _closure3_slot0;
                    zulu = tango.emit;
                    mike = 'answer';
                    mike = zulu.bind(tango)(mike, entity);
                    return entity;
 41:
                    entity = global;
                    zulu = entity.Error;
                    entity = zulu.prototype;
                    mike = Object.create(entity, {constructor: {value: zulu}});
                    oscar = 'localDescription is null';
                    golf = mike;
                    entity = new golf[zulu](oscar, report);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                }
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.catch;
            entity = function(argFoo) {
                zulu = _closure1_slot7;
                mike = zulu.warn;
                entity = _closure3_slot1;
                report = entity.signalingState;
                entity = global;
                entity = entity.HermesInternal;
                tango = entity.concat;
                entity = 'PeerConnection#createAnswer: Attempted to set local description in state: ';
                entity = tango.bind(entity)(report);
                entity = mike.bind(zulu)(entity);
                entity = argFoo;
                throw entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[9] = report;
        report = {};
        golf = 'negotiationNeeded';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun51359: for(var _fun51359_ip = 0; ; ) switch(_fun51359_ip) {
 0:
                mike = this;
                zulu = mike.negotiating;
                entity = true;
                if(zulu) { _fun51359_ip = 40; continue _fun51359 }
 14:
                mike['negotiating'] = entity;
                zulu = false;
                mike['_negotiationNeeded'] = zulu;
                zulu = mike.createOffer;
                zulu = zulu.bind(mike)();
                _fun51359_ip = 46; continue _fun51359;
 40:
                mike['_negotiationNeeded'] = entity;
 46:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[10] = report;
        report = {};
        golf = 'setRemoteDescription';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.pc;
            mike = zulu.setRemoteDescription;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[11] = report;
        report = {};
        golf = 'getStats';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            mike = entity.pc;
            entity = mike.getStats;
            entity = entity.bind(mike)();
            return entity;
        };
        report['value'] = golf;
        entity[12] = report;
        report = {};
        golf = 'makeOfferAnswerOptions';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = {'offerToReceiveAudio': true, 'offerToReceiveVideo': null, 'iceRestart': false};
            mike = _closure1_slot6;
            entity['offerToReceiveVideo'] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[13] = report;
        report = {};
        golf = 'mungeLocalDescription';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun51363: for(var _fun51363_ip = 0; ; ) switch(_fun51363_ip) {
 0:
                entity = argFoo;
                options = this;
                zulu = entity.sdp;
                mike = zulu.split;
                tango = '\n';
                zulu = mike.bind(zulu)(tango);
                mike = zulu.length;
                golf = 0;
                mike = golf < mike;
                oscar = 0;
                if(!mike) { _fun51363_ip = 182; continue _fun51363 }
 45:
                verify = zulu[oscar];
                report = /^a=mid:/;
                mike = report.test;
                mike = mike.bind(report)(verify);
                report = oscar;
                if(mike) { _fun51363_ip = 93; continue _fun51363 }
 79:
                oscar = report + 1;
                mike = zulu.length;
                if(oscar < mike) { _fun51363_ip = 45; continue _fun51363 }
 91:
                _fun51363_ip = 182; continue _fun51363;
 93:
                oscar = options.bitrate;
                mike = null;
                if(!(mike != oscar)) { _fun51363_ip = 182; continue _fun51363 }
 105:
                oscar = zulu.splice;
                mike = 1;
                report = report + mike;
                mike = global;
                offset = mike.Math;
                verify = offset.floor;
                yankee = options.bitrate;
                options = 1000;
                options = yankee / options;
                verify = verify.bind(offset)(options);
                mike = mike.HermesInternal;
                options = mike.concat;
                mike = 'b=AS:';
                mike = options.bind(mike)(verify);
                mike = oscar.bind(zulu)(report, golf, mike);
 182:
                mike = zulu.join;
                mike = mike.bind(zulu)(tango);
                entity['sdp'] = mike;
                return entity;
            }
        };
        report['value'] = golf;
        entity[14] = report;
        report = {};
        golf = 'emitTrack';
        report['key'] = golf;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun51364: for(var _fun51364_ip = 0; ; ) switch(_fun51364_ip) {
 0:
                report = argFoo;
                tango = argBar;
                zulu = this;
                var _closure3_slot0 = zulu;
                var _closure3_slot1 = report;
                var _closure3_slot2 = tango;
                golf = /^default/;
                oscar = golf.test;
                mike = tango.id;
                mike = oscar.bind(golf)(mike);
                if(mike) { _fun51364_ip = 85; continue _fun51364 }
 55:
                entity = function() {
                    report = _closure3_slot0;
                    tango = report.emit;
                    zulu = _closure3_slot1;
                    mike = _closure3_slot2;
                    entity = 'removetrack';
                    entity = tango.bind(report)(entity, zulu, mike);
                    entity = undefined;
                    return entity;
                };
                tango['onended'] = entity;
                mike = zulu.emit;
                entity = 'addtrack';
                entity = mike.bind(zulu)(entity, report, tango);
 85:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = oscar;
        entity[15] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/media-engine/webrtc/PeerConnection.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();