// discord_common/js/packages/media-engine/webrtc/FakePeerConnection.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot9;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.EventEmitter;
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: FakePeerConnection
            report = this;
            offset = 0;
            oscard = copyRestArgs(offset);
            michal = _closure1_slot3;
            tangon = _closure2_slot0;
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(report, tangon);
            michal = _closure1_slot8;
            entity = new Array(0);
            offset = entity;
            verify = oscard;
            option = 0;
            oscard = arraySpread(offset, verify, option);
            entity = michal.bind(zuuluu)(report, tangon, entity);
            michal = null;
            entity['audioCodec'] = michal;
            entity['audioPayloadType'] = michal;
            entity['videoCodec'] = michal;
            entity['videoPayloadType'] = michal;
            entity['rtxPayloadType'] = michal;
            entity['direction'] = michal;
            zuuluu = new Array(0);
            entity['outboundStreams'] = zuuluu;
            zuuluu = new Array(0);
            entity['extensions'] = zuuluu;
            zuuluu = new Array(0);
            entity['streams'] = zuuluu;
            zuuluu = {};
            entity['activeAudioSSRCs'] = zuuluu;
            zuuluu = {};
            entity['activeVideoSSRCs'] = zuuluu;
            entity['_sdp'] = michal;
            michal = false;
            entity['connected'] = michal;
            entity['negotiating'] = michal;
            entity['_negotiationNeeded'] = michal;
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'addStream';
        report['key'] = entity;
        entity = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                golfie = argFoo;
                zuuluu = argBar;
                oscard = argBaz;
                michal = this;
                var _closure3_slot0 = zuuluu;
                var _closure3_slot1 = oscard;
                option = michal.streams;
                tangon = option.some;
                entity = function(argFoo) {
                    entity = argFoo;
                    michal = entity.ssrc;
                    entity = _closure3_slot0;
                    entity = michal === entity;
                    return entity;
                };
                entity = tangon.bind(option)(entity);
                if(entity) { _fun00006_ip = 83; continue _fun00005 }
 47:
                option = michal.streams;
                tangon = option.push;
                entity = {};
                entity['ssrc'] = zuuluu;
                entity['cname'] = golfie;
                verify = 'audio';
                entity['type'] = verify;
                entity = tangon.bind(option)(entity);
 83:
                entity = michal.activeAudioSSRCs;
                entity = entity[golfie];
                tangon = false;
                if(!(entity !== zuuluu)) { _fun00006_ip = 127; continue _fun00005 }
 99:
                entity = {};
                yankee = michal.activeAudioSSRCs;
                romeon = entity;
                option = copyDataProperties(romeon, yankee);
                entity[golfie] = zuuluu;
                michal['activeAudioSSRCs'] = entity;
                tangon = true;
 127:
                verify = null;
                entity = tangon;
                if(!(verify != oscard)) { _fun00006_ip = 306; continue _fun00005 }
 139:
                zuuluu = 0;
                if(!(!(oscard > zuuluu))) { _fun00006_ip = 197; continue _fun00005 }
 145:
                zuuluu = michal.activeVideoSSRCs;
                option = zuuluu[golfie];
                zuuluu = tangon;
                if(!(verify != option)) { _fun00006_ip = 195; continue _fun00005 }
 162:
                option = {};
                yankee = michal.activeVideoSSRCs;
                romeon = option;
                verify = copyDataProperties(romeon, yankee);
                michal['activeVideoSSRCs'] = option;
                option = michal.activeVideoSSRCs;
                option = delete option[golfie];
                zuuluu = true;
 195:
                _fun00006_ip = 303; continue _fun00005;
 197:
                verify = michal.streams;
                option = verify.some;
                report = function(argFoo) {
                    entity = argFoo;
                    michal = entity.ssrc;
                    entity = _closure3_slot1;
                    entity = michal === entity;
                    return entity;
                };
                report = option.bind(verify)(report);
                if(report) { _fun00006_ip = 258; continue _fun00005 }
 222:
                verify = michal.streams;
                option = verify.push;
                report = {};
                report['ssrc'] = oscard;
                report['cname'] = golfie;
                offset = 'video';
                report['type'] = offset;
                report = option.bind(verify)(report);
 258:
                report = michal.activeVideoSSRCs;
                report = report[golfie];
                if(!(report !== oscard)) { _fun00006_ip = 300; continue _fun00005 }
 272:
                report = {};
                yankee = michal.activeVideoSSRCs;
                romeon = report;
                option = copyDataProperties(romeon, yankee);
                report[golfie] = oscard;
                michal['activeVideoSSRCs'] = report;
                tangon = true;
 300:
                zuuluu = tangon;
 303:
                entity = zuuluu;
 306:
                if(!entity) { _fun00006_ip = 319; continue _fun00005 }
 309:
                entity = michal.negotiationNeeded;
                entity = entity.bind(michal)();
 319:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(8);
        entity[0] = report;
        report = {};
        golfie = 'removeStream';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = argFoo;
                michal = this;
                entity = michal.activeAudioSSRCs;
                entity = entity[tangon];
                report = null;
                zuuluu = report != entity;
                entity = false;
                if(!zuuluu) { _fun00008_ip = 60; continue _fun00007 }
 27:
                zuuluu = {};
                golfie = michal.activeAudioSSRCs;
                option = zuuluu;
                oscard = copyDataProperties(option, golfie);
                michal['activeAudioSSRCs'] = zuuluu;
                zuuluu = michal.activeAudioSSRCs;
                zuuluu = delete zuuluu[tangon];
                entity = true;
 60:
                zuuluu = michal.activeVideoSSRCs;
                zuuluu = zuuluu[tangon];
                if(!(report != zuuluu)) { _fun00008_ip = 107; continue _fun00007 }
 74:
                zuuluu = {};
                golfie = michal.activeVideoSSRCs;
                option = zuuluu;
                report = copyDataProperties(option, golfie);
                michal['activeVideoSSRCs'] = zuuluu;
                zuuluu = michal.activeVideoSSRCs;
                zuuluu = delete zuuluu[tangon];
                entity = true;
 107:
                if(!entity) { _fun00008_ip = 120; continue _fun00007 }
 110:
                entity = michal.negotiationNeeded;
                entity = entity.bind(michal)();
 120:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'sdp';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = this;
                zuuluu = entity._sdp;
                michal = null;
                if(!(michal != zuuluu)) { _fun00010_ip = 23; continue _fun00009 }
 15:
                entity = entity._sdp;
                return entity;
 23:
                entity = global;
                zuuluu = entity.Error;
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                tangon = 'sdp is not set';
                report = michal;
                entity = new report[zuuluu](tangon, zuuluu);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        report['get'] = golfie;
        golfie = function(argFoo) { // Original name: set
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = argFoo;
                zuuluu = this;
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 5;
                tangon = tangon[entity];
                entity = undefined;
                report = report.bind(entity)(tangon);
                tangon = report.validateSdp;
                tangon = tangon.bind(report)(michal);
                if(tangon) { _fun00012_ip = 97; continue _fun00011 }
 45:
                tangon = global;
                oscard = tangon.Error;
                tangon = tangon.HermesInternal;
                report = tangon.concat;
                tangon = 'Incorrect SDP received from rtc-worker: ';
                golfie = report.bind(tangon)(michal);
                report = oscard.prototype;
                report = Object.create(report, {constructor: {value: oscard}});
                option = report;
                tangon = new option[oscard](golfie, oscard);
                tangon = tangon instanceof Object ? tangon : report;
                throw tangon;
 97:
                zuuluu['_sdp'] = michal;
                michal = zuuluu.createAnswer;
                michal = michal.bind(zuuluu)();
                michal = true;
                zuuluu['connected'] = michal;
                michal = zuuluu._negotiationNeeded;
                if(!michal) { _fun00012_ip = 140; continue _fun00011 }
 130:
                michal = zuuluu.negotiationNeeded;
                michal = michal.bind(zuuluu)();
 140:
                return entity;
            }
        };
        report['set'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'negotiationNeeded';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                michal = this;
                entity = michal.negotiating;
                if(entity) { _fun00014_ip = 69; continue _fun00013 }
 12:
                zuuluu = michal._sdp;
                entity = null;
                if(!(entity == zuuluu)) { _fun00014_ip = 34; continue _fun00013 }
 24:
                entity = true;
                michal['_negotiationNeeded'] = entity;
                _fun00014_ip = 77; continue _fun00013;
 34:
                entity = true;
                michal['negotiating'] = entity;
                entity = false;
                michal['_negotiationNeeded'] = entity;
                zuuluu = michal.generateSessionDescription;
                entity = 'offer';
                entity = zuuluu.bind(michal)(entity);
                _fun00014_ip = 77; continue _fun00013;
 69:
                entity = true;
                michal['_negotiationNeeded'] = entity;
 77:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'setRemoteDescription';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                michal = this;
                entity = false;
                michal['negotiating'] = entity;
                entity = michal._negotiationNeeded;
                if(!entity) { _fun00016_ip = 30; continue _fun00015 }
 20:
                entity = michal.negotiationNeeded;
                entity = entity.bind(michal)();
 30:
                entity = global;
                michal = entity.Promise;
                entity = michal.resolve;
                entity = entity.bind(michal)();
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'createAnswer';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            zuuluu = this;
            michal = zuuluu.generateSessionDescription;
            entity = 'answer';
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getSSRCs';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                michal = this;
                var _closure3_slot0 = michal;
                report = michal.streams;
                tangon = report.map;
                entity = function(argFoo, argBar) {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        entity = argFoo;
                        golfie = entity.cname;
                        tangon = entity.ssrc;
                        oscard = entity.type;
                        entity = _closure3_slot0;
                        michal = entity.activeAudioSSRCs;
                        report = michal[golfie];
                        entity = entity.activeVideoSSRCs;
                        michal = entity[golfie];
                        entity = new Array(5);
                        entity[0] = tangon;
                        entity[1] = golfie;
                        entity[2] = oscard;
                        if(!(report !== tangon)) { _fun00020_ip = 110; continue _fun00019 }
 67:
                        if(!(michal !== tangon)) { _fun00020_ip = 110; continue _fun00019 }
 71:
                        report = _closure1_slot0;
                        tangon = _closure1_slot2;
                        michal = 5;
                        tangon = tangon[michal];
                        michal = undefined;
                        michal = report.bind(michal)(tangon);
                        michal = michal.Directions;
                        michal = michal.INACTIVE;
                        _fun00020_ip = 120; continue _fun00019;
 110:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.direction;
 120:
                        entity[3] = michal;
                        michal = global;
                        michal = michal.HermesInternal;
                        report = michal.concat;
                        tangon = '';
                        zuuluu = '_inbound_';
                        michal = argBar;
                        michal = report.bind(tangon)(oscard, zuuluu, michal);
                        entity[4] = michal;
                        return entity;
                    }
                };
                entity = tangon.bind(report)(entity);
                oscard = _closure1_slot1;
                report = _closure1_slot2;
                tangon = 6;
                report = report[tangon];
                tangon = undefined;
                tangon = oscard.bind(tangon)(report);
                report = tangon.name;
                tangon = 'Firefox';
                if(!(tangon === report)) { _fun00018_ip = 184; continue _fun00017 }
 70:
                oscard = michal.outboundStreams;
                report = oscard.map;
                tangon = function(argFoo, argBar) {
                    michal = argFoo;
                    zuuluu = michal.type;
                    entity = [0, 'outbound'];
                    entity[2] = zuuluu;
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 5;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.getDirection;
                    zuuluu = michal.direction;
                    zuuluu = tangon.bind(report)(zuuluu);
                    entity[3] = zuuluu;
                    oscard = michal.type;
                    michal = global;
                    michal = michal.HermesInternal;
                    report = michal.concat;
                    tangon = '';
                    zuuluu = '_outbound_';
                    michal = argBar;
                    michal = report.bind(tangon)(oscard, zuuluu, michal);
                    entity[4] = michal;
                    return entity;
                };
                tangon = report.bind(oscard)(tangon);
                oscard = 'answer';
                report = argFoo;
                if(!(oscard !== report)) { _fun00018_ip = 114; continue _fun00017 }
 102:
                report = tangon.concat;
                report = report.bind(tangon)(entity);
                return report;
 114:
                oscard = tangon.length;
                report = entity.length;
                oscard = oscard - report;
                report = tangon.slice;
                golfie = 0;
                oscard = report.bind(tangon)(golfie, oscard);
                report = oscard.concat;
                oscard = report.bind(oscard)(entity);
                report = oscard.slice;
                tangon = tangon.length;
                report = report.bind(oscard)(golfie, tangon);
                tangon = report.map;
                zuuluu = function(argFoo, argBar) {
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        zuuluu = argBar;
                        option = argFoo;
                        entity = option[Symbol.iterator];
                        option = entity().next;
                        michal = option().value;
                        tangon = entity;
                        report = undefined;
                        golfie = tangon === report;
                        oscard = undefined;
                        if(golfie) { _fun00022_ip = 30; continue _fun00021 }
 27:
                        oscard = michal;
 30:
                        tangon = undefined;
                        if(golfie) { _fun00022_ip = 60; continue _fun00021 }
 35:
                        verify = option().value;
                        michal = entity;
                        michal = michal === report;
                        tangon = undefined;
                        golfie = michal;
                        if(michal) { _fun00022_ip = 60; continue _fun00021 }
 54:
                        tangon = verify;
                        golfie = michal;
 60:
                        michal = undefined;
                        if(golfie) { _fun00022_ip = 90; continue _fun00021 }
 65:
                        offset = option().value;
                        verify = entity;
                        verify = verify === report;
                        michal = undefined;
                        golfie = verify;
                        if(verify) { _fun00022_ip = 90; continue _fun00021 }
 84:
                        michal = offset;
                        golfie = verify;
 90:
                        if(golfie) { _fun00022_ip = 104; continue _fun00021 }
 93:
                        verify = option().value;
                        verify = entity;
                        golfie = verify === report;
 104:
                        if(golfie) { _fun00022_ip = 118; continue _fun00021 }
 107:
                        option = option().value;
                        option = entity;
                        golfie = option === report;
 118:
                        if(golfie) { _fun00022_ip = 124; continue _fun00021 }
 121:
                        entity.return();
 124:
                        entity = new Array(5);
                        entity[0] = oscard;
                        entity[1] = tangon;
                        entity[2] = michal;
                        tangon = _closure1_slot0;
                        oscard = _closure1_slot2;
                        michal = 5;
                        michal = oscard[michal];
                        oscard = tangon.bind(report)(michal);
                        report = oscard.getDirection;
                        michal = _closure3_slot0;
                        tangon = michal.outboundStreams;
                        tangon = tangon[zuuluu];
                        tangon = tangon.direction;
                        tangon = report.bind(oscard)(tangon);
                        entity[3] = tangon;
                        michal = michal.outboundStreams;
                        michal = michal[zuuluu];
                        michal = michal.mid;
                        entity[4] = michal;
                        return entity;
                    }
                };
                zuuluu = tangon.bind(report)(zuuluu);
                return zuuluu;
 184:
                michal = michal.connected;
                if(michal) { _fun00018_ip = 197; continue _fun00017 }
 193:
                entity = new Array(0);
 197:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'generateSessionDescription';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                option = argFoo;
                zuuluu = this;
                backup = zuuluu.audioCodec;
                oscard = zuuluu.audioPayloadType;
                foxtra = zuuluu.videoCodec;
                report = zuuluu.videoPayloadType;
                michal = zuuluu.rtxPayloadType;
                romeon = zuuluu.sdp;
                tangon = null;
                if(!(tangon != backup)) { _fun00024_ip = 261; continue _fun00023 }
 51:
                if(!(tangon != oscard)) { _fun00024_ip = 261; continue _fun00023 }
 58:
                if(!(tangon != foxtra)) { _fun00024_ip = 261; continue _fun00023 }
 65:
                if(!(tangon != report)) { _fun00024_ip = 261; continue _fun00023 }
 72:
                if(!(tangon != michal)) { _fun00024_ip = 261; continue _fun00023 }
 79:
                if(!(tangon != romeon)) { _fun00024_ip = 261; continue _fun00023 }
 86:
                entity = zuuluu.direction;
                if(!(tangon != entity)) { _fun00024_ip = 261; continue _fun00023 }
 99:
                verify = _closure1_slot0;
                golfie = _closure1_slot2;
                entity = 5;
                golfie = golfie[entity];
                entity = undefined;
                verify = verify.bind(entity)(golfie);
                golfie = verify.generateSessionDescription;
                entity = {};
                entity['type'] = option;
                entity['baseSDP'] = romeon;
                offset = zuuluu.direction;
                entity['direction'] = offset;
                entity['audioCodec'] = backup;
                entity['audioPayloadType'] = oscard;
                offset = 40;
                entity['audioBitRate'] = offset;
                entity['videoCodec'] = foxtra;
                entity['videoPayloadType'] = report;
                offset = 2500;
                entity['videoBitRate'] = offset;
                entity['rtxPayloadType'] = michal;
                offset = zuuluu.getSSRCs;
                offset = offset.bind(zuuluu)(option);
                entity['ssrcs'] = offset;
                offset = zuuluu.extensions;
                entity['extensions'] = offset;
                golfie = golfie.bind(verify)(entity);
                entity = zuuluu.emit;
                entity = entity.bind(zuuluu)(option, golfie);
                entity = global;
                zuuluu = entity.Promise;
                entity = zuuluu.resolve;
                entity = entity.bind(zuuluu)(golfie);
                return entity;
 261:
                entity = global;
                zuuluu = entity.Error;
                golfie = tangon == oscard;
                yankee = 'null';
                offset = yankee;
                if(golfie) { _fun00024_ip = 286; continue _fun00023 }
 283:
                offset = oscard;
 286:
                oscard = tangon == report;
                verify = yankee;
                if(oscard) { _fun00024_ip = 299; continue _fun00023 }
 296:
                verify = report;
 299:
                tangon = tangon == michal;
                if(tangon) { _fun00024_ip = 309; continue _fun00023 }
 306:
                yankee = michal;
 309:
                entity = entity.HermesInternal;
                option = entity.concat;
                record = 'Invalid payload: audioCodec: ';
                sequen = ', audioPayloadType: ';
                ctrled = ', videoCodec: ';
                update = ', videoCodecPayloadType: ';
                result = ', rtxPayloadType: ';
                sizing = ', sdp: ';
                config = backup;
                vacuum = offset;
                source = foxtra;
                echoed = verify;
                output = yankee;
                kiloes = romeon;
                config = record[option](config, sequen, vacuum, ctrled, source, update, echoed, result, output, sizing, kiloes, backup);
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                record = michal;
                entity = new record[zuuluu](config, sequen);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        report['value'] = oscard;
        entity[7] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/media-engine/webrtc/FakePeerConnection.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();