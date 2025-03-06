// discord_common/js/packages/media-engine/webrtc/PeerConnection.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            michal = _closure1_slot3;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot2;
            entity = _closure1_slot9;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 48; continue _fun00001 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, zuuluu);
            _fun00002_ip = 86; continue _fun00001;
 48:
            oscard = global;
            option = oscard.Reflect;
            golfie = option.construct;
            oscard = new Array(0);
            report = _closure1_slot3;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 86:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 74; continue _fun00003;
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
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.BROWSER_SUPPORTS_CONNECTION_STATE;
    var _closure1_slot5 = golfie;
    tangon = tangon.BROWSER_SUPPORTS_VIDEO;
    var _closure1_slot6 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.Logger;
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    romeon = 'PeerConnection';
    foxtra = golfie;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot7 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.EventEmitter;
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: PeerConnection
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                oscard = this;
                entity = _closure1_slot0;
                report = _closure2_slot0;
                tangon = undefined;
                entity = entity.bind(tangon)(oscard, report);
                entity = _closure1_slot8;
                entity = entity.bind(tangon)(oscard, report);
                var _closure3_slot0 = entity;
                tangon = null;
                entity['stream'] = tangon;
                tangon = new Array(0);
                entity['senders'] = tangon;
                tangon = false;
                entity['negotiating'] = tangon;
                entity['_negotiationNeeded'] = tangon;
                tangon = function() {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        michal = _closure3_slot0;
                        zuuluu = michal.peerConnectionState;
                        report = _closure1_slot7;
                        tangon = report.info;
                        michal = 'peerConnectionState =>';
                        michal = tangon.bind(report)(michal, zuuluu);
                        michal = 'connecting';
                        if(!(michal !== zuuluu)) { _fun00008_ip = 65; continue _fun00007 }
 48:
                        tangon = _closure3_slot0;
                        michal = tangon.emit;
                        michal = michal.bind(tangon)(zuuluu);
                        _fun00008_ip = 121; continue _fun00007;
 65:
                        michal = _closure3_slot0;
                        tangon = michal.iceConnectionState;
                        michal = 'connected';
                        if(!(michal !== tangon)) { _fun00008_ip = 106; continue _fun00007 }
 83:
                        report = _closure3_slot0;
                        tangon = report.emit;
                        michal = report.iceConnectionState;
                        michal = tangon.bind(report)(michal);
                        _fun00008_ip = 121; continue _fun00007;
 106:
                        michal = _closure3_slot0;
                        entity = michal.emit;
                        entity = entity.bind(michal)(zuuluu);
 121:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handlePeerConnectionStateChange'] = tangon;
                tangon = function() {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        michal = _closure3_slot0;
                        zuuluu = michal.iceConnectionState;
                        report = _closure1_slot7;
                        tangon = report.info;
                        michal = 'iceConnectionState =>';
                        michal = tangon.bind(report)(michal, zuuluu);
                        michal = 'completed';
                        if(!(michal === zuuluu)) { _fun00010_ip = 50; continue _fun00009 }
 46:
                        zuuluu = 'connected';
 50:
                        michal = _closure3_slot0;
                        entity = michal.emit;
                        entity = entity.bind(michal)(zuuluu);
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleIceConnectionStateChange'] = tangon;
                tangon = function() {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        report = _closure1_slot7;
                        tangon = report.info;
                        michal = _closure3_slot0;
                        verify = michal.signalingState;
                        oscard = michal._negotiationNeeded;
                        zuuluu = oscard.toString;
                        option = zuuluu.bind(oscard)();
                        zuuluu = global;
                        zuuluu = zuuluu.HermesInternal;
                        golfie = zuuluu.concat;
                        oscard = 'signalingState => ';
                        zuuluu = ', negotiation needed: ';
                        zuuluu = golfie.bind(oscard)(verify, zuuluu, option);
                        zuuluu = tangon.bind(report)(zuuluu);
                        zuuluu = michal.signalingState;
                        michal = 'stable';
                        if(!(michal === zuuluu)) { _fun00012_ip = 127; continue _fun00011 }
 92:
                        michal = _closure3_slot0;
                        zuuluu = false;
                        michal['negotiating'] = zuuluu;
                        michal = michal._negotiationNeeded;
                        if(!michal) { _fun00012_ip = 127; continue _fun00011 }
 113:
                        michal = _closure3_slot0;
                        entity = michal.negotiationNeeded;
                        entity = entity.bind(michal)();
 127:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleSignalingStateChange'] = tangon;
                tangon = function() {
                    tangon = _closure1_slot7;
                    zuuluu = tangon.info;
                    entity = _closure3_slot0;
                    michal = entity.iceGatheringState;
                    entity = 'iceGatheringState =>';
                    entity = zuuluu.bind(tangon)(entity, michal);
                    entity = undefined;
                    return entity;
                };
                entity['handleIceGatheringStateChange'] = tangon;
                zuuluu = function(argFoo) {
                    entity = argFoo;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.emitTrack;
                    report = entity.streams;
                    michal = 0;
                    michal = report[michal];
                    michal = michal.id;
                    entity = entity.track;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    entity = undefined;
                    return entity;
                };
                entity['handleTrack'] = zuuluu;
                zuuluu = argFoo;
                entity['bitrate'] = zuuluu;
                zuuluu = global;
                report = zuuluu.RTCPeerConnection;
                zuuluu = {};
                tangon = 'plan-b';
                zuuluu['sdpSemantics'] = tangon;
                tangon = report.prototype;
                tangon = Object.create(tangon, {constructor: {value: report}});
                verify = tangon;
                option = zuuluu;
                zuuluu = new verify[report](option, golfie);
                tangon = zuuluu instanceof Object ? zuuluu : tangon;
                entity['pc'] = tangon;
                zuuluu = _closure1_slot5;
                if(zuuluu) { _fun00006_ip = 208; continue _fun00005 }
 194:
                zuuluu = entity.handleIceConnectionStateChange;
                tangon['oniceconnectionstatechange'] = zuuluu;
                _fun00006_ip = 232; continue _fun00005;
 208:
                zuuluu = entity.handlePeerConnectionStateChange;
                tangon['onconnectionstatechange'] = zuuluu;
                zuuluu = entity.handlePeerConnectionStateChange;
                tangon['oniceconnectionstatechange'] = zuuluu;
 232:
                zuuluu = entity.handleSignalingStateChange;
                tangon['onsignalingstatechange'] = zuuluu;
                zuuluu = entity.handleIceGatheringStateChange;
                tangon['onicegatheringstatechange'] = zuuluu;
                report = entity.handleTrack;
                zuuluu = report.bind;
                zuuluu = zuuluu.bind(report)(entity);
                tangon['ontrack'] = zuuluu;
                tangon = _closure1_slot7;
                zuuluu = tangon.info;
                michal = 'Constructed RTCPeerConnection';
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot4;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot1;
        report = {};
        entity = 'setBitRate';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = argFoo;
                michal = this;
                zuuluu = michal.bitrate;
                if(!(zuuluu !== entity)) { _fun00014_ip = 32; continue _fun00013 }
 16:
                michal['bitrate'] = entity;
                entity = michal.negotiationNeeded;
                entity = entity.bind(michal)();
 32:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(16);
        entity[0] = report;
        report = {};
        golfie = 'close';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                michal = this;
                tangon = _closure1_slot7;
                zuuluu = tangon.info;
                entity = 'Close RTCPeerConnection';
                entity = zuuluu.bind(tangon)(entity);
                zuuluu = michal.signalingState;
                entity = 'closed';
                if(!(entity !== zuuluu)) { _fun00016_ip = 57; continue _fun00015 }
 41:
                zuuluu = michal.pc;
                entity = zuuluu.close;
                entity = entity.bind(zuuluu)();
 57:
                entity = michal.removeAllListeners;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'peerConnectionState';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = this;
            entity = entity.pc;
            entity = entity.connectionState;
            return entity;
        };
        report['get'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'iceGatheringState';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = this;
            entity = entity.pc;
            entity = entity.iceGatheringState;
            return entity;
        };
        report['get'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'iceConnectionState';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = this;
            entity = entity.pc;
            entity = entity.iceConnectionState;
            return entity;
        };
        report['get'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'signalingState';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = this;
            entity = entity.pc;
            entity = entity.signalingState;
            return entity;
        };
        report['get'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'connected';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                michal = this;
                zuuluu = michal.pc;
                entity = null;
                entity = entity != zuuluu;
                if(!entity) { _fun00018_ip = 54; continue _fun00017 }
 18:
                tangon = /connected|completed/;
                zuuluu = tangon.test;
                michal = michal.pc;
                michal = michal.iceConnectionState;
                entity = zuuluu.bind(tangon)(michal);
 54:
                return entity;
            }
        };
        report['get'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'setStream';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                verify = argFoo;
                tangon = arguments[1];
                zuuluu = this;
                var _closure3_slot0 = verify;
                entity = undefined;
                if(!(tangon === entity)) { _fun00020_ip = 23; continue _fun00019 }
 21:
                tangon = false;
 23:
                var _closure3_slot1 = entity;
                michal = zuuluu.pc;
                _closure3_slot1 = michal;
                report = zuuluu.iceConnectionState;
                michal = 'closed';
                golfie = michal === report;
                michal = zuuluu.stream;
                report = null;
                option = report == michal;
                if(option) { _fun00020_ip = 69; continue _fun00019 }
 66:
                option = golfie;
 69:
                michal = false;
                if(option) { _fun00020_ip = 97; continue _fun00019 }
 74:
                yankee = zuuluu.senders;
                offset = yankee.forEach;
                option = function(argFoo) {
                    zuuluu = _closure3_slot1;
                    michal = zuuluu.removeTrack;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                option = offset.bind(yankee)(option);
                michal = true;
 97:
                zuuluu['stream'] = verify;
                option = new Array(0);
                zuuluu['senders'] = option;
                report = report == verify;
                if(report) { _fun00020_ip = 123; continue _fun00019 }
 120:
                report = golfie;
 123:
                if(report) { _fun00020_ip = 204; continue _fun00019 }
 126:
                report = verify.getAudioTracks;
                option = report.bind(verify)();
                golfie = option.map;
                report = function(argFoo) {
                    tangon = _closure3_slot1;
                    zuuluu = tangon.addTrack;
                    michal = _closure3_slot0;
                    entity = argFoo;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                foxtra = golfie.bind(option)(report);
                report = new Array(0);
                romeon = 0;
                backup = report;
                romeon = arraySpread(backup, foxtra, romeon);
                option = verify.getVideoTracks;
                verify = option.bind(verify)();
                option = verify.map;
                oscard = function(argFoo) {
                    tangon = _closure3_slot1;
                    zuuluu = tangon.addTrack;
                    michal = _closure3_slot0;
                    entity = argFoo;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                foxtra = option.bind(verify)(oscard);
                backup = report;
                oscard = arraySpread(backup, foxtra, romeon);
                zuuluu['senders'] = report;
                michal = true;
 204:
                if(!michal) { _fun00020_ip = 210; continue _fun00019 }
 207:
                michal = !tangon;
 210:
                if(!michal) { _fun00020_ip = 223; continue _fun00019 }
 213:
                michal = zuuluu.negotiationNeeded;
                michal = michal.bind(zuuluu)();
 223:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'createOffer';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            report = this;
            var _closure3_slot0 = report;
            tangon = report.pc;
            var _closure3_slot1 = tangon;
            zuuluu = tangon.createOffer;
            michal = report.makeOfferAnswerOptions;
            michal = michal.bind(report)();
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.then;
            michal = function(argFoo) {
                zuuluu = _closure3_slot1;
                michal = zuuluu.setLocalDescription;
                report = _closure3_slot0;
                tangon = report.mungeLocalDescription;
                entity = argFoo;
                entity = tangon.bind(report)(entity);
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.then;
            michal = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    entity = _closure3_slot1;
                    entity = entity.localDescription;
                    zuuluu = null;
                    if(!(zuuluu != entity)) { _fun00022_ip = 41; continue _fun00021 }
 19:
                    tangon = _closure3_slot0;
                    zuuluu = tangon.emit;
                    michal = 'offer';
                    michal = zuuluu.bind(tangon)(michal, entity);
                    return entity;
 41:
                    entity = global;
                    zuuluu = entity.Error;
                    entity = zuuluu.prototype;
                    michal = Object.create(entity, {constructor: {value: zuuluu}});
                    oscard = 'localDescription is null';
                    golfie = michal;
                    entity = new golfie[zuuluu](oscard, report);
                    entity = entity instanceof Object ? entity : michal;
                    throw entity;
                }
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.catch;
            entity = function(argFoo) {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    tangon = argFoo;
                    michal = _closure3_slot1;
                    zuuluu = michal.signalingState;
                    michal = 'have-remote-offer';
                    if(!(michal !== zuuluu)) { _fun00024_ip = 28; continue _fun00023 }
 26:
                    throw tangon;
 28:
                    zuuluu = _closure1_slot7;
                    michal = zuuluu.error;
                    michal = michal.bind(zuuluu)(tangon);
                    michal = _closure3_slot0;
                    entity = michal.createOffer;
                    entity = entity.bind(michal)();
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'createAnswer';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            report = this;
            var _closure3_slot0 = report;
            tangon = report.pc;
            var _closure3_slot1 = tangon;
            zuuluu = tangon.createAnswer;
            michal = report.makeOfferAnswerOptions;
            michal = michal.bind(report)();
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.then;
            michal = function(argFoo) {
                zuuluu = _closure3_slot1;
                michal = zuuluu.setLocalDescription;
                report = _closure3_slot0;
                tangon = report.mungeLocalDescription;
                entity = argFoo;
                entity = tangon.bind(report)(entity);
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.then;
            michal = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    entity = _closure3_slot1;
                    entity = entity.localDescription;
                    zuuluu = null;
                    if(!(zuuluu != entity)) { _fun00026_ip = 41; continue _fun00025 }
 19:
                    tangon = _closure3_slot0;
                    zuuluu = tangon.emit;
                    michal = 'answer';
                    michal = zuuluu.bind(tangon)(michal, entity);
                    return entity;
 41:
                    entity = global;
                    zuuluu = entity.Error;
                    entity = zuuluu.prototype;
                    michal = Object.create(entity, {constructor: {value: zuuluu}});
                    oscard = 'localDescription is null';
                    golfie = michal;
                    entity = new golfie[zuuluu](oscard, report);
                    entity = entity instanceof Object ? entity : michal;
                    throw entity;
                }
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.catch;
            entity = function(argFoo) {
                zuuluu = _closure1_slot7;
                michal = zuuluu.warn;
                entity = _closure3_slot1;
                report = entity.signalingState;
                entity = global;
                entity = entity.HermesInternal;
                tangon = entity.concat;
                entity = 'PeerConnection#createAnswer: Attempted to set local description in state: ';
                entity = tangon.bind(entity)(report);
                entity = michal.bind(zuuluu)(entity);
                entity = argFoo;
                throw entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[9] = report;
        report = {};
        golfie = 'negotiationNeeded';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                michal = this;
                zuuluu = michal.negotiating;
                entity = true;
                if(zuuluu) { _fun00028_ip = 40; continue _fun00027 }
 14:
                michal['negotiating'] = entity;
                zuuluu = false;
                michal['_negotiationNeeded'] = zuuluu;
                zuuluu = michal.createOffer;
                zuuluu = zuuluu.bind(michal)();
                _fun00028_ip = 46; continue _fun00027;
 40:
                michal['_negotiationNeeded'] = entity;
 46:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[10] = report;
        report = {};
        golfie = 'setRemoteDescription';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = this;
            zuuluu = entity.pc;
            michal = zuuluu.setRemoteDescription;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[11] = report;
        report = {};
        golfie = 'getStats';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = this;
            michal = entity.pc;
            entity = michal.getStats;
            entity = entity.bind(michal)();
            return entity;
        };
        report['value'] = golfie;
        entity[12] = report;
        report = {};
        golfie = 'makeOfferAnswerOptions';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = {'offerToReceiveAudio': true, 'offerToReceiveVideo': null, 'iceRestart': false};
            michal = _closure1_slot6;
            entity['offerToReceiveVideo'] = michal;
            return entity;
        };
        report['value'] = golfie;
        entity[13] = report;
        report = {};
        golfie = 'mungeLocalDescription';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                entity = argFoo;
                option = this;
                zuuluu = entity.sdp;
                michal = zuuluu.split;
                tangon = '\n';
                zuuluu = michal.bind(zuuluu)(tangon);
                michal = zuuluu.length;
                golfie = 0;
                michal = golfie < michal;
                oscard = 0;
                if(!michal) { _fun00030_ip = 182; continue _fun00029 }
 45:
                verify = zuuluu[oscard];
                report = /^a=mid:/;
                michal = report.test;
                michal = michal.bind(report)(verify);
                report = oscard;
                if(michal) { _fun00030_ip = 93; continue _fun00029 }
 79:
                oscard = report + 1;
                michal = zuuluu.length;
                if(oscard < michal) { _fun00030_ip = 45; continue _fun00029 }
 91:
                _fun00030_ip = 182; continue _fun00029;
 93:
                oscard = option.bitrate;
                michal = null;
                if(!(michal != oscard)) { _fun00030_ip = 182; continue _fun00029 }
 105:
                oscard = zuuluu.splice;
                michal = 1;
                report = report + michal;
                michal = global;
                offset = michal.Math;
                verify = offset.floor;
                yankee = option.bitrate;
                option = 1000;
                option = yankee / option;
                verify = verify.bind(offset)(option);
                michal = michal.HermesInternal;
                option = michal.concat;
                michal = 'b=AS:';
                michal = option.bind(michal)(verify);
                michal = oscard.bind(zuuluu)(report, golfie, michal);
 182:
                michal = zuuluu.join;
                michal = michal.bind(zuuluu)(tangon);
                entity['sdp'] = michal;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[14] = report;
        report = {};
        golfie = 'emitTrack';
        report['key'] = golfie;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                report = argFoo;
                tangon = argBar;
                zuuluu = this;
                var _closure3_slot0 = zuuluu;
                var _closure3_slot1 = report;
                var _closure3_slot2 = tangon;
                golfie = /^default/;
                oscard = golfie.test;
                michal = tangon.id;
                michal = oscard.bind(golfie)(michal);
                if(michal) { _fun00032_ip = 85; continue _fun00031 }
 55:
                entity = function() {
                    report = _closure3_slot0;
                    tangon = report.emit;
                    zuuluu = _closure3_slot1;
                    michal = _closure3_slot2;
                    entity = 'removetrack';
                    entity = tangon.bind(report)(entity, zuuluu, michal);
                    entity = undefined;
                    return entity;
                };
                tangon['onended'] = entity;
                michal = zuuluu.emit;
                entity = 'addtrack';
                entity = michal.bind(zuuluu)(entity, report, tangon);
 85:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = oscard;
        entity[15] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/media-engine/webrtc/PeerConnection.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();