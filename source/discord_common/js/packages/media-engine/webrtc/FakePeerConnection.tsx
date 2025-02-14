// discord_common/js/packages/media-engine/webrtc/FakePeerConnection.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun51194: for(var _fun51194_ip = 0; ; ) switch(_fun51194_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot9;
            entity = entity.bind(zulu)();
            if(entity) { _fun51194_ip = 51; continue _fun51194 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun51194_ip = 92; continue _fun51194;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun51194_ip = 71; continue _fun51194 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun51195: for(var _fun51195_ip = 0; ; ) switch(_fun51195_ip) {
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
            _fun51195_ip = 74; continue _fun51195;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.EventEmitter;
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: FakePeerConnection
            report = this;
            offset = 0;
            oscar = copyRestArgs(offset);
            mike = _closure1_slot3;
            tango = _closure2_slot0;
            zulu = undefined;
            mike = mike.bind(zulu)(report, tango);
            mike = _closure1_slot8;
            entity = new Array(0);
            offset = entity;
            verify = oscar;
            options = 0;
            oscar = arraySpread(offset, verify, options);
            entity = mike.bind(zulu)(report, tango, entity);
            mike = null;
            entity['audioCodec'] = mike;
            entity['audioPayloadType'] = mike;
            entity['videoCodec'] = mike;
            entity['videoPayloadType'] = mike;
            entity['rtxPayloadType'] = mike;
            entity['direction'] = mike;
            zulu = new Array(0);
            entity['outboundStreams'] = zulu;
            zulu = new Array(0);
            entity['extensions'] = zulu;
            zulu = new Array(0);
            entity['streams'] = zulu;
            zulu = {};
            entity['activeAudioSSRCs'] = zulu;
            zulu = {};
            entity['activeVideoSSRCs'] = zulu;
            entity['_sdp'] = mike;
            mike = false;
            entity['connected'] = mike;
            entity['negotiating'] = mike;
            entity['_negotiationNeeded'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'addStream';
        report['key'] = entity;
        entity = function(argFoo, argBar, argBaz) { // Original name: value
            _fun51200: for(var _fun51200_ip = 0; ; ) switch(_fun51200_ip) {
 0:
                golf = argFoo;
                zulu = argBar;
                oscar = argBaz;
                mike = this;
                var _closure3_slot0 = zulu;
                var _closure3_slot1 = oscar;
                options = mike.streams;
                tango = options.some;
                entity = function(argFoo) {
                    entity = argFoo;
                    mike = entity.ssrc;
                    entity = _closure3_slot0;
                    entity = mike === entity;
                    return entity;
                };
                entity = tango.bind(options)(entity);
                if(entity) { _fun51200_ip = 83; continue _fun51200 }
 47:
                options = mike.streams;
                tango = options.push;
                entity = {};
                entity['ssrc'] = zulu;
                entity['cname'] = golf;
                verify = 'audio';
                entity['type'] = verify;
                entity = tango.bind(options)(entity);
 83:
                entity = mike.activeAudioSSRCs;
                entity = entity[golf];
                tango = false;
                if(!(entity !== zulu)) { _fun51200_ip = 127; continue _fun51200 }
 99:
                entity = {};
                yankee = mike.activeAudioSSRCs;
                romeo = entity;
                options = copyDataProperties(romeo, yankee);
                entity[golf] = zulu;
                mike['activeAudioSSRCs'] = entity;
                tango = true;
 127:
                verify = null;
                entity = tango;
                if(!(verify != oscar)) { _fun51200_ip = 306; continue _fun51200 }
 139:
                zulu = 0;
                if(!(!(oscar > zulu))) { _fun51200_ip = 197; continue _fun51200 }
 145:
                zulu = mike.activeVideoSSRCs;
                options = zulu[golf];
                zulu = tango;
                if(!(verify != options)) { _fun51200_ip = 195; continue _fun51200 }
 162:
                options = {};
                yankee = mike.activeVideoSSRCs;
                romeo = options;
                verify = copyDataProperties(romeo, yankee);
                mike['activeVideoSSRCs'] = options;
                options = mike.activeVideoSSRCs;
                options = delete options[golf];
                zulu = true;
 195:
                _fun51200_ip = 303; continue _fun51200;
 197:
                verify = mike.streams;
                options = verify.some;
                report = function(argFoo) {
                    entity = argFoo;
                    mike = entity.ssrc;
                    entity = _closure3_slot1;
                    entity = mike === entity;
                    return entity;
                };
                report = options.bind(verify)(report);
                if(report) { _fun51200_ip = 258; continue _fun51200 }
 222:
                verify = mike.streams;
                options = verify.push;
                report = {};
                report['ssrc'] = oscar;
                report['cname'] = golf;
                offset = 'video';
                report['type'] = offset;
                report = options.bind(verify)(report);
 258:
                report = mike.activeVideoSSRCs;
                report = report[golf];
                if(!(report !== oscar)) { _fun51200_ip = 300; continue _fun51200 }
 272:
                report = {};
                yankee = mike.activeVideoSSRCs;
                romeo = report;
                options = copyDataProperties(romeo, yankee);
                report[golf] = oscar;
                mike['activeVideoSSRCs'] = report;
                tango = true;
 300:
                zulu = tango;
 303:
                entity = zulu;
 306:
                if(!entity) { _fun51200_ip = 319; continue _fun51200 }
 309:
                entity = mike.negotiationNeeded;
                entity = entity.bind(mike)();
 319:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(8);
        entity[0] = report;
        report = {};
        golf = 'removeStream';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun51203: for(var _fun51203_ip = 0; ; ) switch(_fun51203_ip) {
 0:
                tango = argFoo;
                mike = this;
                entity = mike.activeAudioSSRCs;
                entity = entity[tango];
                report = null;
                zulu = report != entity;
                entity = false;
                if(!zulu) { _fun51203_ip = 60; continue _fun51203 }
 27:
                zulu = {};
                golf = mike.activeAudioSSRCs;
                options = zulu;
                oscar = copyDataProperties(options, golf);
                mike['activeAudioSSRCs'] = zulu;
                zulu = mike.activeAudioSSRCs;
                zulu = delete zulu[tango];
                entity = true;
 60:
                zulu = mike.activeVideoSSRCs;
                zulu = zulu[tango];
                if(!(report != zulu)) { _fun51203_ip = 107; continue _fun51203 }
 74:
                zulu = {};
                golf = mike.activeVideoSSRCs;
                options = zulu;
                report = copyDataProperties(options, golf);
                mike['activeVideoSSRCs'] = zulu;
                zulu = mike.activeVideoSSRCs;
                zulu = delete zulu[tango];
                entity = true;
 107:
                if(!entity) { _fun51203_ip = 120; continue _fun51203 }
 110:
                entity = mike.negotiationNeeded;
                entity = entity.bind(mike)();
 120:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'sdp';
        report['key'] = golf;
        golf = function() { // Original name: get
            _fun51204: for(var _fun51204_ip = 0; ; ) switch(_fun51204_ip) {
 0:
                entity = this;
                zulu = entity._sdp;
                mike = null;
                if(!(mike != zulu)) { _fun51204_ip = 23; continue _fun51204 }
 15:
                entity = entity._sdp;
                return entity;
 23:
                entity = global;
                zulu = entity.Error;
                entity = zulu.prototype;
                mike = Object.create(entity, {constructor: {value: zulu}});
                tango = 'sdp is not set';
                report = mike;
                entity = new report[zulu](tango, zulu);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        report['get'] = golf;
        golf = function(argFoo) { // Original name: set
            _fun51205: for(var _fun51205_ip = 0; ; ) switch(_fun51205_ip) {
 0:
                mike = argFoo;
                zulu = this;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 5;
                tango = tango[entity];
                entity = undefined;
                report = report.bind(entity)(tango);
                tango = report.validateSdp;
                tango = tango.bind(report)(mike);
                if(tango) { _fun51205_ip = 97; continue _fun51205 }
 45:
                tango = global;
                oscar = tango.Error;
                tango = tango.HermesInternal;
                report = tango.concat;
                tango = 'Incorrect SDP received from rtc-worker: ';
                golf = report.bind(tango)(mike);
                report = oscar.prototype;
                report = Object.create(report, {constructor: {value: oscar}});
                options = report;
                tango = new options[oscar](golf, oscar);
                tango = tango instanceof Object ? tango : report;
                throw tango;
 97:
                zulu['_sdp'] = mike;
                mike = zulu.createAnswer;
                mike = mike.bind(zulu)();
                mike = true;
                zulu['connected'] = mike;
                mike = zulu._negotiationNeeded;
                if(!mike) { _fun51205_ip = 140; continue _fun51205 }
 130:
                mike = zulu.negotiationNeeded;
                mike = mike.bind(zulu)();
 140:
                return entity;
            }
        };
        report['set'] = golf;
        entity[2] = report;
        report = {};
        golf = 'negotiationNeeded';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun51206: for(var _fun51206_ip = 0; ; ) switch(_fun51206_ip) {
 0:
                mike = this;
                entity = mike.negotiating;
                if(entity) { _fun51206_ip = 69; continue _fun51206 }
 12:
                zulu = mike._sdp;
                entity = null;
                if(!(entity == zulu)) { _fun51206_ip = 34; continue _fun51206 }
 24:
                entity = true;
                mike['_negotiationNeeded'] = entity;
                _fun51206_ip = 77; continue _fun51206;
 34:
                entity = true;
                mike['negotiating'] = entity;
                entity = false;
                mike['_negotiationNeeded'] = entity;
                zulu = mike.generateSessionDescription;
                entity = 'offer';
                entity = zulu.bind(mike)(entity);
                _fun51206_ip = 77; continue _fun51206;
 69:
                entity = true;
                mike['_negotiationNeeded'] = entity;
 77:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'setRemoteDescription';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun51207: for(var _fun51207_ip = 0; ; ) switch(_fun51207_ip) {
 0:
                mike = this;
                entity = false;
                mike['negotiating'] = entity;
                entity = mike._negotiationNeeded;
                if(!entity) { _fun51207_ip = 30; continue _fun51207 }
 20:
                entity = mike.negotiationNeeded;
                entity = entity.bind(mike)();
 30:
                entity = global;
                mike = entity.Promise;
                entity = mike.resolve;
                entity = entity.bind(mike)();
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'createAnswer';
        report['key'] = golf;
        golf = function() { // Original name: value
            zulu = this;
            mike = zulu.generateSessionDescription;
            entity = 'answer';
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getSSRCs';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun51209: for(var _fun51209_ip = 0; ; ) switch(_fun51209_ip) {
 0:
                mike = this;
                var _closure3_slot0 = mike;
                report = mike.streams;
                tango = report.map;
                entity = function(argFoo, argBar) {
                    _fun51210: for(var _fun51210_ip = 0; ; ) switch(_fun51210_ip) {
 0:
                        entity = argFoo;
                        golf = entity.cname;
                        tango = entity.ssrc;
                        oscar = entity.type;
                        entity = _closure3_slot0;
                        mike = entity.activeAudioSSRCs;
                        report = mike[golf];
                        entity = entity.activeVideoSSRCs;
                        mike = entity[golf];
                        entity = new Array(5);
                        entity[0] = tango;
                        entity[1] = golf;
                        entity[2] = oscar;
                        if(!(report !== tango)) { _fun51210_ip = 110; continue _fun51210 }
 67:
                        if(!(mike !== tango)) { _fun51210_ip = 110; continue _fun51210 }
 71:
                        report = _closure1_slot0;
                        tango = _closure1_slot2;
                        mike = 5;
                        tango = tango[mike];
                        mike = undefined;
                        mike = report.bind(mike)(tango);
                        mike = mike.Directions;
                        mike = mike.INACTIVE;
                        _fun51210_ip = 120; continue _fun51210;
 110:
                        zulu = _closure3_slot0;
                        mike = zulu.direction;
 120:
                        entity[3] = mike;
                        mike = global;
                        mike = mike.HermesInternal;
                        report = mike.concat;
                        tango = '';
                        zulu = '_inbound_';
                        mike = argBar;
                        mike = report.bind(tango)(oscar, zulu, mike);
                        entity[4] = mike;
                        return entity;
                    }
                };
                entity = tango.bind(report)(entity);
                oscar = _closure1_slot1;
                report = _closure1_slot2;
                tango = 6;
                report = report[tango];
                tango = undefined;
                tango = oscar.bind(tango)(report);
                report = tango.name;
                tango = 'Firefox';
                if(!(tango === report)) { _fun51209_ip = 184; continue _fun51209 }
 70:
                oscar = mike.outboundStreams;
                report = oscar.map;
                tango = function(argFoo, argBar) {
                    mike = argFoo;
                    zulu = mike.type;
                    entity = [0, 'outbound'];
                    entity[2] = zulu;
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 5;
                    tango = tango[zulu];
                    zulu = undefined;
                    report = report.bind(zulu)(tango);
                    tango = report.getDirection;
                    zulu = mike.direction;
                    zulu = tango.bind(report)(zulu);
                    entity[3] = zulu;
                    oscar = mike.type;
                    mike = global;
                    mike = mike.HermesInternal;
                    report = mike.concat;
                    tango = '';
                    zulu = '_outbound_';
                    mike = argBar;
                    mike = report.bind(tango)(oscar, zulu, mike);
                    entity[4] = mike;
                    return entity;
                };
                tango = report.bind(oscar)(tango);
                oscar = 'answer';
                report = argFoo;
                if(!(oscar !== report)) { _fun51209_ip = 114; continue _fun51209 }
 102:
                report = tango.concat;
                report = report.bind(tango)(entity);
                return report;
 114:
                oscar = tango.length;
                report = entity.length;
                oscar = oscar - report;
                report = tango.slice;
                golf = 0;
                oscar = report.bind(tango)(golf, oscar);
                report = oscar.concat;
                oscar = report.bind(oscar)(entity);
                report = oscar.slice;
                tango = tango.length;
                report = report.bind(oscar)(golf, tango);
                tango = report.map;
                zulu = function(argFoo, argBar) {
                    _fun51212: for(var _fun51212_ip = 0; ; ) switch(_fun51212_ip) {
 0:
                        zulu = argBar;
                        options = argFoo;
                        entity = options[Symbol.iterator];
                        options = entity().next;
                        mike = options().value;
                        tango = entity;
                        report = undefined;
                        golf = tango === report;
                        oscar = undefined;
                        if(golf) { _fun51212_ip = 30; continue _fun51212 }
 27:
                        oscar = mike;
 30:
                        tango = undefined;
                        if(golf) { _fun51212_ip = 60; continue _fun51212 }
 35:
                        verify = options().value;
                        mike = entity;
                        mike = mike === report;
                        tango = undefined;
                        golf = mike;
                        if(mike) { _fun51212_ip = 60; continue _fun51212 }
 54:
                        tango = verify;
                        golf = mike;
 60:
                        mike = undefined;
                        if(golf) { _fun51212_ip = 90; continue _fun51212 }
 65:
                        offset = options().value;
                        verify = entity;
                        verify = verify === report;
                        mike = undefined;
                        golf = verify;
                        if(verify) { _fun51212_ip = 90; continue _fun51212 }
 84:
                        mike = offset;
                        golf = verify;
 90:
                        if(golf) { _fun51212_ip = 104; continue _fun51212 }
 93:
                        verify = options().value;
                        verify = entity;
                        golf = verify === report;
 104:
                        if(golf) { _fun51212_ip = 118; continue _fun51212 }
 107:
                        options = options().value;
                        options = entity;
                        golf = options === report;
 118:
                        if(golf) { _fun51212_ip = 124; continue _fun51212 }
 121:
                        entity.return();
 124:
                        entity = new Array(5);
                        entity[0] = oscar;
                        entity[1] = tango;
                        entity[2] = mike;
                        tango = _closure1_slot0;
                        oscar = _closure1_slot2;
                        mike = 5;
                        mike = oscar[mike];
                        oscar = tango.bind(report)(mike);
                        report = oscar.getDirection;
                        mike = _closure3_slot0;
                        tango = mike.outboundStreams;
                        tango = tango[zulu];
                        tango = tango.direction;
                        tango = report.bind(oscar)(tango);
                        entity[3] = tango;
                        mike = mike.outboundStreams;
                        mike = mike[zulu];
                        mike = mike.mid;
                        entity[4] = mike;
                        return entity;
                    }
                };
                zulu = tango.bind(report)(zulu);
                return zulu;
 184:
                mike = mike.connected;
                if(mike) { _fun51209_ip = 197; continue _fun51209 }
 193:
                entity = new Array(0);
 197:
                return entity;
            }
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'generateSessionDescription';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun51213: for(var _fun51213_ip = 0; ; ) switch(_fun51213_ip) {
 0:
                options = argFoo;
                zulu = this;
                backup = zulu.audioCodec;
                oscar = zulu.audioPayloadType;
                foxtrot = zulu.videoCodec;
                report = zulu.videoPayloadType;
                mike = zulu.rtxPayloadType;
                romeo = zulu.sdp;
                tango = null;
                if(!(tango != backup)) { _fun51213_ip = 261; continue _fun51213 }
 51:
                if(!(tango != oscar)) { _fun51213_ip = 261; continue _fun51213 }
 58:
                if(!(tango != foxtrot)) { _fun51213_ip = 261; continue _fun51213 }
 65:
                if(!(tango != report)) { _fun51213_ip = 261; continue _fun51213 }
 72:
                if(!(tango != mike)) { _fun51213_ip = 261; continue _fun51213 }
 79:
                if(!(tango != romeo)) { _fun51213_ip = 261; continue _fun51213 }
 86:
                entity = zulu.direction;
                if(!(tango != entity)) { _fun51213_ip = 261; continue _fun51213 }
 99:
                verify = _closure1_slot0;
                golf = _closure1_slot2;
                entity = 5;
                golf = golf[entity];
                entity = undefined;
                verify = verify.bind(entity)(golf);
                golf = verify.generateSessionDescription;
                entity = {};
                entity['type'] = options;
                entity['baseSDP'] = romeo;
                offset = zulu.direction;
                entity['direction'] = offset;
                entity['audioCodec'] = backup;
                entity['audioPayloadType'] = oscar;
                offset = 40;
                entity['audioBitRate'] = offset;
                entity['videoCodec'] = foxtrot;
                entity['videoPayloadType'] = report;
                offset = 2500;
                entity['videoBitRate'] = offset;
                entity['rtxPayloadType'] = mike;
                offset = zulu.getSSRCs;
                offset = offset.bind(zulu)(options);
                entity['ssrcs'] = offset;
                offset = zulu.extensions;
                entity['extensions'] = offset;
                golf = golf.bind(verify)(entity);
                entity = zulu.emit;
                entity = entity.bind(zulu)(options, golf);
                entity = global;
                zulu = entity.Promise;
                entity = zulu.resolve;
                entity = entity.bind(zulu)(golf);
                return entity;
 261:
                entity = global;
                zulu = entity.Error;
                golf = tango == oscar;
                yankee = 'null';
                offset = yankee;
                if(golf) { _fun51213_ip = 286; continue _fun51213 }
 283:
                offset = oscar;
 286:
                oscar = tango == report;
                verify = yankee;
                if(oscar) { _fun51213_ip = 299; continue _fun51213 }
 296:
                verify = report;
 299:
                tango = tango == mike;
                if(tango) { _fun51213_ip = 309; continue _fun51213 }
 306:
                yankee = mike;
 309:
                entity = entity.HermesInternal;
                options = entity.concat;
                record = 'Invalid payload: audioCodec: ';
                sequence = ', audioPayloadType: ';
                control = ', videoCodec: ';
                update = ', videoCodecPayloadType: ';
                result = ', rtxPayloadType: ';
                sizing = ', sdp: ';
                config = backup;
                vacuum = offset;
                source = foxtrot;
                echo = verify;
                output = yankee;
                kilo = romeo;
                config = record[options](config, sequence, vacuum, control, source, update, echo, result, output, sizing, kilo, backup);
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                record = mike;
                entity = new record[zulu](config, sequence);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        report['value'] = oscar;
        entity[7] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/media-engine/webrtc/FakePeerConnection.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();