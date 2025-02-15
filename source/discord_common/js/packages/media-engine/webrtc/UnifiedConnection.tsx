// discord_common/js/packages/media-engine/webrtc/UnifiedConnection.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        golf = argBaz;
        zulu = argFred;
        oscar = argPlugh;
        var _closure1_slot0 = report;
        var _closure1_slot1 = oscar;
        entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = argFoo;
                var _closure2_slot0 = zulu;
                report = global;
                mike = report.Symbol;
                tango = 'undefined';
                mike = typeof mike;
                mike = tango !== mike;
                if(!mike) { _fun00004_ip = 46; continue _fun00003 }
 30:
                tango = report.Symbol;
                tango = tango.iterator;
                mike = zulu[tango];
 46:
                if(mike) { _fun00004_ip = 55; continue _fun00003 }
 49:
                mike = zulu.@@iterator;
 55:
                if(mike) { _fun00004_ip = 343; continue _fun00003 }
 61:
                oscar = report.Array;
                tango = oscar.isArray;
                oscar = tango.bind(oscar)(zulu);
                tango = mike;
                if(oscar) { _fun00004_ip = 323; continue _fun00003 }
 86:
                options = undefined;
                oscar = undefined;
                if(!zulu) { _fun00004_ip = 283; continue _fun00003 }
 96:
                verify = 'string';
                golf = typeof zulu;
                if(!(verify !== golf)) { _fun00004_ip = 270; continue _fun00003 }
 110:
                golf = {};
                verify = golf.toString;
                golf = verify.call;
                yankee = golf.bind(verify)(zulu);
                offset = yankee.slice;
                verify = 8;
                golf = -1;
                verify = offset.bind(yankee)(verify, golf);
                golf = 'Object';
                golf = golf === verify;
                if(!golf) { _fun00004_ip = 163; continue _fun00003 }
 158:
                golf = zulu.constructor;
 163:
                offset = verify;
                if(!golf) { _fun00004_ip = 179; continue _fun00003 }
 169:
                golf = zulu.constructor;
                offset = golf.name;
 179:
                golf = 'Map';
                if(!(golf !== offset)) { _fun00004_ip = 249; continue _fun00003 }
 187:
                golf = 'Set';
                if(!(golf !== offset)) { _fun00004_ip = 249; continue _fun00003 }
 195:
                golf = 'Arguments';
                if(!(golf !== offset)) { _fun00004_ip = 234; continue _fun00003 }
 205:
                verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                golf = verify.test;
                verify = golf.bind(verify)(offset);
                golf = undefined;
                if(!verify) { _fun00004_ip = 247; continue _fun00003 }
 234:
                verify = _closure1_slot15;
                golf = verify.bind(options)(zulu, options);
 247:
                _fun00004_ip = 265; continue _fun00003;
 249:
                offset = report.Array;
                verify = offset.from;
                golf = verify.bind(offset)(zulu);
 265:
                oscar = golf;
                _fun00004_ip = 283; continue _fun00003;
 270:
                golf = _closure1_slot15;
                oscar = golf.bind(options)(zulu, options);
 283:
                tango = oscar;
                if(tango) { _fun00004_ip = 323; continue _fun00003 }
 289:
                golf = report.TypeError;
                report = golf.prototype;
                oscar = Object.create(report, {constructor: {value: golf}});
                foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                backup = oscar;
                report = new backup[golf](foxtrot, romeo);
                report = report instanceof Object ? report : oscar;
                throw report;
 323:
                if(!tango) { _fun00004_ip = 330; continue _fun00003 }
 326:
                _closure2_slot0 = tango;
 330:
                tango = 0;
                var _closure2_slot1 = tango;
                entity = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        mike = _closure2_slot1;
                        entity = _closure2_slot0;
                        entity = entity.length;
                        if(!(!(mike >= entity))) { _fun00006_ip = 56; continue _fun00005 }
 20:
                        entity = {};
                        mike = false;
                        entity['done'] = mike;
                        zulu = _closure2_slot0;
                        mike = _closure2_slot1;
                        mike = parseFloat(mike);
                        tango = mike + 1;
                        _closure2_slot1 = tango;
                        mike = zulu[mike];
                        entity['value'] = mike;
                        _fun00006_ip = 67; continue _fun00005;
 56:
                        mike = {};
                        zulu = true;
                        mike['done'] = zulu;
                        entity = mike;
 67:
                        return entity;
                    }
                };
                return entity;
 343:
                entity = mike.call;
                zulu = entity.bind(mike)(zulu);
                mike = zulu.next;
                entity = mike.bind;
                entity = entity.bind(mike)(zulu);
                return entity;
            }
        };
        var _closure1_slot14 = entity;
        entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tango = argFoo;
                entity = null;
                zulu = undefined;
                entity = entity == zulu;
                if(entity) { _fun00008_ip = 23; continue _fun00007 }
 14:
                mike = tango.length;
                entity = zulu > mike;
 23:
                mike = undefined;
                if(!entity) { _fun00008_ip = 33; continue _fun00007 }
 28:
                mike = tango.length;
 33:
                entity = global;
                entity = entity.Array;
                entity = entity.bind(zulu)(mike);
                zulu = 0;
                report = zulu < mike;
                if(!report) { _fun00008_ip = 70; continue _fun00007 }
 55:
                report = tango[zulu];
                entity[zulu] = report;
                zulu = zulu + 1;
                if(zulu < mike) { _fun00008_ip = 55; continue _fun00007 }
 70:
                return entity;
            }
        };
        var _closure1_slot15 = entity;
        entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tango = argFoo;
                oscar = argBaz;
                mike = _closure1_slot7;
                zulu = undefined;
                entity = argBar;
                verify = mike.bind(zulu)(entity);
                mike = _closure1_slot6;
                entity = _closure1_slot17;
                entity = entity.bind(zulu)();
                if(entity) { _fun00010_ip = 51; continue _fun00009 }
 38:
                entity = verify.apply;
                entity = entity.bind(verify)(tango, oscar);
                _fun00010_ip = 92; continue _fun00009;
 51:
                golf = global;
                options = golf.Reflect;
                golf = options.construct;
                if(oscar) { _fun00010_ip = 71; continue _fun00009 }
 67:
                oscar = new Array(0);
 71:
                report = _closure1_slot7;
                report = report.bind(zulu)(tango);
                report = report.constructor;
                entity = golf.bind(options)(verify, oscar, report);
 92:
                entity = mike.bind(zulu)(tango, entity);
                return entity;
            }
        };
        var _closure1_slot16 = entity;
        entity = function() { // Original name: _isNativeReflectConstruct
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
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
                _fun00012_ip = 74; continue _fun00011;
 72: // catch_target0
                CatchBlockStart(arg_register=1);
 74:
                mike = function() { // Original name: _isNativeReflectConstruct
                    entity = _closure2_slot0;
                    entity = !entity;
                    entity = !entity;
                    return entity;
                };
                _closure1_slot17 = mike;
                entity = undefined;
                entity = mike.bind(entity)();
                return entity;
            }
        };
        var _closure1_slot17 = entity;
        entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: _superPropGet
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                report = argFoo;
                golf = argBaz;
                var _closure2_slot0 = golf;
                oscar = _closure1_slot8;
                zulu = _closure1_slot7;
                entity = 1;
                tango = 3;
                options = entity & tango;
                entity = report;
                if(!options) { _fun00014_ip = 44; continue _fun00013 }
 39:
                entity = report.prototype;
 44:
                report = undefined;
                zulu = zulu.bind(report)(entity);
                entity = argBar;
                entity = oscar.bind(report)(zulu, entity, golf);
                var _closure2_slot1 = entity;
                zulu = 2;
                zulu = zulu & tango;
                if(!zulu) { _fun00014_ip = 80; continue _fun00013 }
 75:
                entity = function(argFoo) {
                    tango = _closure2_slot1;
                    zulu = tango.apply;
                    mike = _closure2_slot0;
                    entity = argFoo;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
 80:
                return entity;
            }
        };
        var _closure1_slot18 = entity;
        entity = function(argFoo, argBar) { // Original name: replaceTrack
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                mike = argFoo;
                zulu = argBar;
                tango = mike.sender;
                entity = tango.replaceTrack;
                entity = entity.bind(tango)(zulu);
                entity = null;
                zulu = entity != zulu;
                entity = 'recvonly';
                if(!zulu) { _fun00016_ip = 46; continue _fun00015 }
 40:
                entity = 'sendrecv';
 46:
                mike['direction'] = entity;
                entity = undefined;
                return entity;
            }
        };
        var _closure1_slot19 = entity;
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
        tango = golf.bind(entity)(tango);
        var _closure1_slot7 = tango;
        tango = 6;
        tango = oscar[tango];
        tango = golf.bind(entity)(tango);
        var _closure1_slot8 = tango;
        tango = 7;
        tango = oscar[tango];
        tango = golf.bind(entity)(tango);
        var _closure1_slot9 = tango;
        tango = 8;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        tango = tango.ConnectionStates;
        var _closure1_slot10 = tango;
        tango = 9;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        options = tango.BROWSER_SUPPORTS_CONNECTION_STATE;
        var _closure1_slot11 = options;
        tango = tango.BROWSER_SUPPORTS_VIDEO;
        var _closure1_slot12 = tango;
        tango = 10;
        tango = oscar[tango];
        tango = golf.bind(entity)(tango);
        verify = tango.name;
        tango = null;
        options = tango == verify;
        tango = undefined;
        if(options) { _fun00002_ip = 345; continue _fun00001 }
 319:
        options = verify.toLowerCase;
        offset = options.bind(verify)();
        verify = offset.includes;
        options = 'firefox';
        tango = verify.bind(offset)(options);
 345:
        var _closure1_slot13 = tango;
        tango = 12;
        tango = oscar[tango];
        tango = golf.bind(entity)(tango);
        mike = function(argFoo) {
            tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: UnifiedConnection
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    options = argFoo;
                    golf = this;
                    entity = _closure1_slot4;
                    report = _closure2_slot2;
                    oscar = undefined;
                    entity = entity.bind(oscar)(golf, report);
                    zulu = _closure1_slot16;
                    entity = new Array(4);
                    entity[0] = options;
                    verify = argBar;
                    entity[1] = verify;
                    verify = argBaz;
                    entity[2] = verify;
                    verify = argCorge;
                    entity[3] = verify;
                    entity = zulu.bind(oscar)(golf, report, entity);
                    var _closure3_slot0 = entity;
                    report = null;
                    entity['sdp'] = report;
                    zulu = false;
                    entity['negotiating'] = zulu;
                    entity['negotiationNeeded'] = zulu;
                    zulu = global;
                    golf = zulu.Map;
                    verify = golf.prototype;
                    verify = Object.create(verify, {constructor: {value: golf}});
                    backup = verify;
                    golf = new backup[golf](foxtrot);
                    golf = golf instanceof Object ? golf : verify;
                    entity['users'] = golf;
                    golf = zulu.Map;
                    verify = golf.prototype;
                    verify = Object.create(verify, {constructor: {value: golf}});
                    backup = verify;
                    golf = new backup[golf](foxtrot);
                    golf = golf instanceof Object ? golf : verify;
                    entity['userIdsBySsrc'] = golf;
                    golf = zulu.Map;
                    verify = golf.prototype;
                    verify = Object.create(verify, {constructor: {value: golf}});
                    backup = verify;
                    golf = new backup[golf](foxtrot);
                    golf = golf instanceof Object ? golf : verify;
                    entity['assignedStreams'] = golf;
                    golf = {};
                    verify = new Array(0);
                    golf['audio'] = verify;
                    verify = new Array(0);
                    golf['video'] = verify;
                    entity['unassignedStreams'] = golf;
                    golf = {};
                    verify = new Array(0);
                    golf['audio'] = verify;
                    verify = new Array(0);
                    golf['video'] = verify;
                    entity['inactiveTransceivers'] = golf;
                    golf = new Array(0);
                    entity['outboundStreams'] = golf;
                    golf = {};
                    entity['trackUserIds'] = golf;
                    entity['audioCodec'] = report;
                    entity['audioPayloadType'] = report;
                    entity['videoCodec'] = report;
                    entity['videoPayloadType'] = report;
                    entity['rtxPayloadType'] = report;
                    report = new Array(0);
                    entity['extensions'] = report;
                    report = new Array(0);
                    entity['codecs'] = report;
                    report = function(argFoo) {
                        entity = _closure3_slot0;
                        zulu = entity.userIdsBySsrc;
                        mike = zulu.get;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    entity['getUserIdBySsrc'] = report;
                    report = function() {
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            mike = _closure3_slot0;
                            tango = mike.peerConnectionState;
                            report = mike.logger;
                            zulu = report.info;
                            mike = 'peerConnectionState =>';
                            mike = zulu.bind(report)(mike, tango);
                            zulu = 'connected';
                            if(!(zulu !== tango)) { _fun00020_ip = 220; continue _fun00019 }
 47:
                            mike = 'connecting';
                            if(!(mike !== tango)) { _fun00020_ip = 146; continue _fun00019 }
 57:
                            mike = 'failed';
                            if(!(mike !== tango)) { _fun00020_ip = 116; continue _fun00019 }
 67:
                            mike = 'disconnected';
                            if(!(mike !== tango)) { _fun00020_ip = 86; continue _fun00019 }
 75:
                            mike = 'closed';
                            if(!(mike === tango)) { _fun00020_ip = 234; continue _fun00019 }
 86:
                            report = _closure3_slot0;
                            tango = report.setConnectionState;
                            mike = _closure1_slot10;
                            mike = mike.DISCONNECTED;
                            mike = tango.bind(report)(mike);
                            _fun00020_ip = 234; continue _fun00019;
 116:
                            report = _closure3_slot0;
                            tango = report.setConnectionState;
                            mike = _closure1_slot10;
                            mike = mike.NO_ROUTE;
                            mike = tango.bind(report)(mike);
                            _fun00020_ip = 234; continue _fun00019;
 146:
                            mike = _closure3_slot0;
                            mike = mike.iceConnectionState;
                            if(!(zulu !== mike)) { _fun00020_ip = 190; continue _fun00019 }
 160:
                            tango = _closure3_slot0;
                            zulu = tango.setConnectionState;
                            mike = _closure1_slot10;
                            mike = mike.ICE_CHECKING;
                            mike = zulu.bind(tango)(mike);
                            _fun00020_ip = 234; continue _fun00019;
 190:
                            tango = _closure3_slot0;
                            zulu = tango.setConnectionState;
                            mike = _closure1_slot10;
                            mike = mike.DTLS_CONNECTING;
                            mike = zulu.bind(tango)(mike);
                            _fun00020_ip = 234; continue _fun00019;
 220:
                            mike = _closure3_slot0;
                            entity = mike.setConnected;
                            entity = entity.bind(mike)();
 234:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity['handlePeerConnectionStateChange'] = report;
                    report = function() {
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                            mike = _closure3_slot0;
                            zulu = mike.iceConnectionState;
                            report = mike.logger;
                            tango = report.info;
                            mike = 'iceConnectionState =>';
                            mike = tango.bind(report)(mike, zulu);
                            mike = 'connected';
                            if(!(mike !== zulu)) { _fun00022_ip = 171; continue _fun00021 }
 47:
                            mike = 'checking';
                            if(!(mike !== zulu)) { _fun00022_ip = 141; continue _fun00021 }
 55:
                            mike = 'failed';
                            if(!(mike !== zulu)) { _fun00022_ip = 111; continue _fun00021 }
 65:
                            mike = 'disconnected';
                            if(!(mike !== zulu)) { _fun00022_ip = 81; continue _fun00021 }
 73:
                            mike = 'closed';
                            if(!(mike === zulu)) { _fun00022_ip = 185; continue _fun00021 }
 81:
                            tango = _closure3_slot0;
                            zulu = tango.setConnectionState;
                            mike = _closure1_slot10;
                            mike = mike.DISCONNECTED;
                            mike = zulu.bind(tango)(mike);
                            _fun00022_ip = 185; continue _fun00021;
 111:
                            tango = _closure3_slot0;
                            zulu = tango.setConnectionState;
                            mike = _closure1_slot10;
                            mike = mike.NO_ROUTE;
                            mike = zulu.bind(tango)(mike);
                            _fun00022_ip = 185; continue _fun00021;
 141:
                            tango = _closure3_slot0;
                            zulu = tango.setConnectionState;
                            mike = _closure1_slot10;
                            mike = mike.ICE_CHECKING;
                            mike = zulu.bind(tango)(mike);
                            _fun00022_ip = 185; continue _fun00021;
 171:
                            mike = _closure3_slot0;
                            entity = mike.setConnected;
                            entity = entity.bind(mike)();
 185:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity['handleIceConnectionStateChange'] = report;
                    report = function() {
                        entity = _closure3_slot0;
                        report = entity.signalingState;
                        zulu = entity.logger;
                        mike = zulu.info;
                        entity = global;
                        entity = entity.HermesInternal;
                        tango = entity.concat;
                        entity = 'signalingState => ';
                        entity = tango.bind(entity)(report);
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    entity['handleSignalingStateChange'] = report;
                    report = function() {
                        entity = _closure3_slot0;
                        tango = entity.logger;
                        zulu = tango.info;
                        mike = entity.iceGatheringState;
                        entity = 'iceGatheringState =>';
                        entity = zulu.bind(tango)(entity, mike);
                        entity = undefined;
                        return entity;
                    };
                    entity['handleIceGatheringStateChange'] = report;
                    tango = function(argFoo) {
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            entity = argFoo;
                            tango = entity.streams;
                            mike = 0;
                            tango = tango[mike];
                            oscar = tango.id;
                            entity = entity.track;
                            var _closure4_slot0 = entity;
                            golf = /^default/;
                            report = golf.test;
                            tango = entity.id;
                            tango = report.bind(golf)(tango);
                            if(tango) { _fun00024_ip = 367; continue _fun00023 }
 66:
                            report = oscar.split;
                            tango = '-';
                            oscar = report.bind(oscar)(tango);
                            report = _closure1_slot3;
                            golf = undefined;
                            tango = 2;
                            tango = report.bind(golf)(oscar, tango);
                            verify = tango[mike];
                            var _closure4_slot1 = verify;
                            mike = 1;
                            options = tango[mike];
                            tango = _closure3_slot0;
                            oscar = tango.trackUserIds;
                            report = entity.id;
                            oscar[report] = verify;
                            report = tango.users;
                            tango = report.get;
                            report = tango.bind(report)(verify);
                            offset = null;
                            oscar = offset == report;
                            tango = undefined;
                            if(oscar) { _fun00024_ip = 200; continue _fun00023 }
 162:
                            yankee = report.videoSSRC;
                            oscar = offset == yankee;
                            tango = undefined;
                            if(oscar) { _fun00024_ip = 200; continue _fun00023 }
 177:
                            oscar = yankee.toString;
                            oscar = offset == oscar;
                            tango = undefined;
                            if(oscar) { _fun00024_ip = 200; continue _fun00023 }
 191:
                            oscar = yankee.toString;
                            tango = oscar.bind(yankee)();
 200:
                            if(!(tango !== options)) { _fun00024_ip = 255; continue _fun00023 }
 204:
                            oscar = offset == report;
                            tango = undefined;
                            if(oscar) { _fun00024_ip = 251; continue _fun00023 }
 213:
                            oscar = report.audioSSRC;
                            report = offset == oscar;
                            tango = undefined;
                            if(report) { _fun00024_ip = 251; continue _fun00023 }
 228:
                            report = oscar.toString;
                            report = offset == report;
                            tango = undefined;
                            if(report) { _fun00024_ip = 251; continue _fun00023 }
 242:
                            report = oscar.toString;
                            tango = report.bind(oscar)();
 251:
                            if(!(tango === options)) { _fun00024_ip = 297; continue _fun00023 }
 255:
                            report = _closure3_slot0;
                            tango = report.createOutput;
                            tango = tango.bind(report)(verify, entity);
                            tango = function() {
                                tango = _closure3_slot0;
                                zulu = tango.createOutput;
                                mike = _closure4_slot1;
                                entity = _closure4_slot0;
                                entity = zulu.bind(tango)(mike, entity);
                                return entity;
                            };
                            entity['onunmute'] = tango;
                            zulu = function() {
                                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                                    entity = _closure3_slot0;
                                    report = entity.users;
                                    tango = report.get;
                                    entity = _closure4_slot1;
                                    oscar = tango.bind(report)(entity);
                                    report = null;
                                    golf = report == oscar;
                                    entity = undefined;
                                    tango = undefined;
                                    if(golf) { _fun00026_ip = 49; continue _fun00025 }
 43:
                                    tango = oscar.videoSSRC;
 49:
                                    if(!(report == tango)) { _fun00026_ip = 77; continue _fun00025 }
 53:
                                    report = _closure3_slot0;
                                    tango = report.destroyOutput;
                                    zulu = _closure4_slot1;
                                    mike = _closure4_slot0;
                                    mike = tango.bind(report)(zulu, mike);
 77:
                                    return entity;
                                }
                            };
                            entity['onmute'] = zulu;
                            _fun00024_ip = 367; continue _fun00023;
 297:
                            mike = _closure3_slot0;
                            zulu = mike.logger;
                            mike = zulu.info;
                            backup = entity.kind;
                            entity = global;
                            entity = entity.HermesInternal;
                            oscar = entity.concat;
                            output = 'Got stale ssrc ';
                            kilo = ' for ';
                            foxtrot = ' track, user ID ';
                            sizing = options;
                            romeo = verify;
                            entity = output[oscar](sizing, kilo, backup, foxtrot, romeo, yankee);
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
 367:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity['handleTrack'] = tango;
                    report = _closure1_slot0;
                    golf = _closure1_slot1;
                    tango = 11;
                    tango = golf[tango];
                    tango = report.bind(oscar)(tango);
                    oscar = tango.Logger;
                    tango = zulu.HermesInternal;
                    golf = tango.concat;
                    report = 'UnifiedConnection(';
                    tango = ')';
                    foxtrot = golf.bind(report)(options, tango);
                    report = oscar.prototype;
                    report = Object.create(report, {constructor: {value: oscar}});
                    backup = report;
                    tango = new backup[oscar](foxtrot, romeo);
                    tango = tango instanceof Object ? tango : report;
                    entity['logger'] = tango;
                    tango = _closure1_slot12;
                    entity['videoSupported'] = tango;
                    report = zulu.RTCPeerConnection;
                    zulu = report.prototype;
                    tango = Object.create(zulu, {constructor: {value: report}});
                    foxtrot = {'bundlePolicy': 'max-bundle', 'sdpSemantics': 'unified-plan'};
                    backup = tango;
                    zulu = new backup[report](foxtrot, romeo);
                    oscar = zulu instanceof Object ? zulu : tango;
                    entity['pc'] = oscar;
                    mike = _closure1_slot11;
                    if(mike) { _fun00018_ip = 536; continue _fun00017 }
 522:
                    mike = entity.handleIceConnectionStateChange;
                    oscar['oniceconnectionstatechange'] = mike;
                    _fun00018_ip = 560; continue _fun00017;
 536:
                    mike = entity.handlePeerConnectionStateChange;
                    oscar['onconnectionstatechange'] = mike;
                    mike = entity.handlePeerConnectionStateChange;
                    oscar['oniceconnectionstatechange'] = mike;
 560:
                    mike = entity.handleSignalingStateChange;
                    oscar['onsignalingstatechange'] = mike;
                    mike = entity.handleIceGatheringStateChange;
                    oscar['onicegatheringstatechange'] = mike;
                    mike = entity.handleTrack;
                    oscar['ontrack'] = mike;
                    tango = oscar.addTransceiver;
                    mike = {};
                    report = 'recvonly';
                    mike['direction'] = report;
                    golf = {};
                    zulu = entity.voiceBitrate;
                    golf['maxBitrate'] = zulu;
                    zulu = new Array(1);
                    zulu[0] = golf;
                    mike['sendEncodings'] = zulu;
                    zulu = 'audio';
                    mike = tango.bind(oscar)(zulu, mike);
                    mike = oscar.getTransceivers;
                    tango = mike.bind(oscar)();
                    mike = 0;
                    mike = tango[mike];
                    entity['audioTransceiver'] = mike;
                    mike = entity.videoSupported;
                    if(!mike) { _fun00018_ip = 744; continue _fun00017 }
 682:
                    options = entity.addTransceivers;
                    tango = entity.input;
                    mike = tango.getVideoStream;
                    offset = mike.bind(tango)();
                    foxtrot = 'video';
                    tango = 1;
                    backup = entity;
                    romeo = report;
                    yankee = tango;
                    mike = backup[options](foxtrot, romeo, yankee, offset, verify);
                    mike = oscar.getTransceivers;
                    mike = mike.bind(oscar)();
                    mike = mike[tango];
                    entity['videoTransceiver'] = mike;
 744:
                    mike = entity.addTransceivers;
                    tango = 10;
                    mike = mike.bind(entity)(zulu, report, tango);
                    mike = entity.videoSupported;
                    if(!mike) { _fun00018_ip = 786; continue _fun00017 }
 769:
                    zulu = entity.addTransceivers;
                    mike = 'video';
                    mike = zulu.bind(entity)(mike, report, tango);
 786:
                    zulu = entity.setStream;
                    mike = entity.input;
                    mike = mike.stream;
                    mike = zulu.bind(entity)(mike);
                    tango = entity.logger;
                    zulu = tango.info;
                    mike = 'Renegotiating: Initial negotiation';
                    mike = zulu.bind(tango)(mike);
                    zulu = entity.handleNegotiationNeeded;
                    mike = true;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                }
            };
            var _closure2_slot2 = tango;
            mike = _closure1_slot9;
            zulu = undefined;
            entity = argFoo;
            entity = mike.bind(zulu)(tango, entity);
            mike = _closure1_slot5;
            report = {};
            entity = 'destroy';
            report['key'] = entity;
            entity = function() { // Original name: value
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    mike = this;
                    oscar = _closure1_slot18;
                    offset = _closure2_slot2;
                    entity = undefined;
                    verify = 'destroy';
                    golf = 3;
                    yankee = undefined;
                    options = mike;
                    tango = yankee[oscar](offset, verify, options, golf, oscar);
                    zulu = new Array(0);
                    zulu = tango.bind(entity)(zulu);
                    tango = mike.signalingState;
                    zulu = 'closed';
                    if(!(zulu !== tango)) { _fun00028_ip = 74; continue _fun00027 }
 58:
                    zulu = mike.pc;
                    mike = zulu.close;
                    mike = mike.bind(zulu)();
 74:
                    return entity;
                }
            };
            report['value'] = entity;
            entity = new Array(24);
            entity[0] = report;
            report = {};
            options = 'setCodecs';
            report['key'] = options;
            options = function(argFoo, argBar) { // Original name: value
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    zulu = argFoo;
                    oscar = argBar;
                    mike = this;
                    var _closure3_slot0 = zulu;
                    var _closure3_slot1 = oscar;
                    entity = mike.audioCodec;
                    if(!(entity === zulu)) { _fun00030_ip = 42; continue _fun00029 }
 29:
                    entity = mike.videoCodec;
                    if(!(entity !== oscar)) { _fun00030_ip = 229; continue _fun00029 }
 42:
                    golf = mike.codecs;
                    tango = golf.find;
                    entity = function(argFoo) {
                        entity = argFoo;
                        mike = entity.name;
                        entity = _closure3_slot0;
                        entity = mike === entity;
                        return entity;
                    };
                    entity = tango.bind(golf)(entity);
                    mike['audioCodec'] = zulu;
                    tango = null;
                    golf = tango == entity;
                    options = undefined;
                    if(golf) { _fun00030_ip = 86; continue _fun00029 }
 80:
                    options = entity.payloadType;
 86:
                    verify = tango != options;
                    golf = 0;
                    if(!verify) { _fun00030_ip = 98; continue _fun00029 }
 95:
                    golf = options;
 98:
                    mike['audioPayloadType'] = golf;
                    options = mike.codecs;
                    golf = options.find;
                    report = function(argFoo) {
                        entity = argFoo;
                        mike = entity.name;
                        entity = _closure3_slot1;
                        entity = mike === entity;
                        return entity;
                    };
                    report = golf.bind(options)(report);
                    mike['videoCodec'] = oscar;
                    oscar = tango == report;
                    golf = undefined;
                    if(oscar) { _fun00030_ip = 146; continue _fun00029 }
 140:
                    golf = report.payloadType;
 146:
                    options = tango != golf;
                    oscar = 0;
                    if(!options) { _fun00030_ip = 158; continue _fun00029 }
 155:
                    oscar = golf;
 158:
                    mike['videoPayloadType'] = oscar;
                    oscar = tango == report;
                    zulu = undefined;
                    if(oscar) { _fun00030_ip = 179; continue _fun00029 }
 173:
                    zulu = report.rtxPayloadType;
 179:
                    tango = tango != zulu;
                    entity = 0;
                    if(!tango) { _fun00030_ip = 191; continue _fun00029 }
 188:
                    entity = zulu;
 191:
                    mike['rtxPayloadType'] = entity;
                    tango = mike.logger;
                    zulu = tango.info;
                    entity = 'Renegotiating: Codecs changed';
                    entity = zulu.bind(tango)(entity);
                    entity = mike.handleNegotiationNeeded;
                    entity = entity.bind(mike)();
 229:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = options;
            entity[1] = report;
            report = {};
            options = 'setStream';
            report['key'] = options;
            options = function(argFoo) { // Original name: value
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    golf = argFoo;
                    mike = this;
                    zulu = mike.iceConnectionState;
                    entity = 'closed';
                    zulu = entity === zulu;
                    entity = null;
                    entity = entity == golf;
                    if(entity) { _fun00032_ip = 32; continue _fun00031 }
 29:
                    entity = zulu;
 32:
                    if(entity) { _fun00032_ip = 111; continue _fun00031 }
 35:
                    options = _closure1_slot19;
                    tango = mike.audioTransceiver;
                    zulu = golf.getAudioTracks;
                    zulu = zulu.bind(golf)();
                    oscar = 0;
                    zulu = zulu[oscar];
                    report = undefined;
                    zulu = options.bind(report)(tango, zulu);
                    zulu = mike.videoSupported;
                    if(!zulu) { _fun00032_ip = 111; continue _fun00031 }
 81:
                    tango = _closure1_slot19;
                    zulu = mike.videoTransceiver;
                    entity = golf.getVideoTracks;
                    entity = entity.bind(golf)();
                    entity = entity[oscar];
                    entity = tango.bind(report)(zulu, entity);
 111:
                    tango = mike.logger;
                    zulu = tango.info;
                    entity = 'Renegotiating: Streams changed';
                    entity = zulu.bind(tango)(entity);
                    entity = mike.handleNegotiationNeeded;
                    entity = entity.bind(mike)();
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = options;
            entity[2] = report;
            report = {};
            options = 'createUser';
            report['key'] = options;
            options = function(argFoo, argBar, argBaz) { // Original name: value
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    report = argFoo;
                    options = argBar;
                    zulu = argBaz;
                    mike = this;
                    entity = 0;
                    if(!(entity === options)) { _fun00034_ip = 69; continue _fun00033 }
 18:
                    golf = mike.logger;
                    oscar = golf.warn;
                    tango = global;
                    tango = tango.HermesInternal;
                    offset = tango.concat;
                    verify = 'Attempting to create user ';
                    tango = ' with 0 audio SSRC';
                    tango = offset.bind(verify)(report, tango);
                    tango = oscar.bind(golf)(tango);
                    _fun00034_ip = 667; continue _fun00033;
 69:
                    offset = mike.logger;
                    verify = offset.info;
                    tango = null;
                    yankee = tango == zulu;
                    golf = undefined;
                    oscar = undefined;
                    if(yankee) { _fun00034_ip = 107; continue _fun00033 }
 93:
                    romeo = zulu.join;
                    yankee = ',';
                    oscar = romeo.bind(zulu)(yankee);
 107:
                    yankee = tango != oscar;
                    backup = 0;
                    if(!yankee) { _fun00034_ip = 119; continue _fun00033 }
 116:
                    backup = oscar;
 119:
                    oscar = global;
                    oscar = oscar.HermesInternal;
                    foxtrot = oscar.concat;
                    update = 'Creating user: ';
                    result = ' with audio SSRC: ';
                    sizing = ' and video SSRCs: ';
                    echo = report;
                    output = options;
                    kilo = backup;
                    oscar = update[foxtrot](echo, result, output, sizing, kilo, backup);
                    oscar = verify.bind(offset)(oscar);
                    verify = mike.users;
                    oscar = verify.get;
                    verify = oscar.bind(verify)(report);
                    if(!(tango == verify)) { _fun00034_ip = 190; continue _fun00033 }
 188:
                    verify = {};
 190:
                    oscar = verify.audioSSRC;
                    offset = false;
                    if(!(oscar !== options)) { _fun00034_ip = 312; continue _fun00033 }
 202:
                    verify['audioSSRC'] = options;
                    oscar = mike.unassignedStreams;
                    romeo = oscar.audio;
                    yankee = romeo.push;
                    oscar = {};
                    oscar['cname'] = report;
                    oscar['ssrc'] = options;
                    oscar = yankee.bind(romeo)(oscar);
                    oscar = mike.inactiveTransceivers;
                    oscar = oscar.audio;
                    yankee = oscar.length;
                    oscar = mike.unassignedStreams;
                    oscar = oscar.audio;
                    romeo = oscar.length;
                    foxtrot = mike.addTransceivers;
                    oscar = 10;
                    oscar = oscar + romeo;
                    romeo = oscar - yankee;
                    yankee = 'audio';
                    oscar = 'recvonly';
                    oscar = foxtrot.bind(mike)(yankee, oscar, romeo);
                    offset = true;
 312:
                    yankee = mike.videoSupported;
                    oscar = offset;
                    if(!yankee) { _fun00034_ip = 546; continue _fun00033 }
 327:
                    oscar = offset;
                    if(!(golf !== zulu)) { _fun00034_ip = 546; continue _fun00033 }
 337:
                    yankee = _closure1_slot13;
                    if(!yankee) { _fun00034_ip = 363; continue _fun00033 }
 347:
                    yankee = verify.videoSSRC;
                    oscar = offset;
                    if(!(golf === yankee)) { _fun00034_ip = 546; continue _fun00033 }
 363:
                    yankee = tango != zulu;
                    romeo = 0;
                    if(!yankee) { _fun00034_ip = 390; continue _fun00033 }
 372:
                    yankee = zulu.length;
                    yankee = yankee > entity;
                    romeo = 0;
                    if(!yankee) { _fun00034_ip = 390; continue _fun00033 }
 386:
                    romeo = zulu[entity];
 390:
                    if(!(!(romeo > entity))) { _fun00034_ip = 423; continue _fun00033 }
 394:
                    yankee = verify.videoSSRC;
                    oscar = offset;
                    if(!(tango != yankee)) { _fun00034_ip = 546; continue _fun00033 }
 410:
                    verify['videoSSRC'] = golf;
                    oscar = true;
                    _fun00034_ip = 546; continue _fun00033;
 423:
                    golf = verify.videoSSRC;
                    oscar = offset;
                    if(!(golf !== romeo)) { _fun00034_ip = 546; continue _fun00033 }
 436:
                    verify['videoSSRC'] = romeo;
                    golf = mike.unassignedStreams;
                    yankee = golf.video;
                    offset = yankee.push;
                    golf = {};
                    golf['cname'] = report;
                    golf['ssrc'] = romeo;
                    golf = offset.bind(yankee)(golf);
                    golf = mike.inactiveTransceivers;
                    golf = golf.video;
                    offset = golf.length;
                    golf = mike.unassignedStreams;
                    golf = golf.video;
                    yankee = golf.length;
                    romeo = mike.addTransceivers;
                    golf = 10;
                    golf = golf + yankee;
                    yankee = golf - offset;
                    offset = 'video';
                    golf = 'recvonly';
                    golf = romeo.bind(mike)(offset, golf, yankee);
                    oscar = true;
 546:
                    if(!oscar) { _fun00034_ip = 667; continue _fun00033 }
 549:
                    golf = mike.users;
                    oscar = golf.set;
                    oscar = oscar.bind(golf)(report, verify);
                    if(!(options > entity)) { _fun00034_ip = 587; continue _fun00033 }
 570:
                    golf = mike.userIdsBySsrc;
                    oscar = golf.set;
                    oscar = oscar.bind(golf)(options, report);
 587:
                    oscar = tango != zulu;
                    tango = 0;
                    if(!oscar) { _fun00034_ip = 614; continue _fun00033 }
 596:
                    oscar = zulu.length;
                    oscar = oscar > entity;
                    tango = 0;
                    if(!oscar) { _fun00034_ip = 614; continue _fun00033 }
 610:
                    tango = zulu[entity];
 614:
                    if(!(tango > entity)) { _fun00034_ip = 635; continue _fun00033 }
 618:
                    zulu = mike.userIdsBySsrc;
                    entity = zulu.set;
                    entity = entity.bind(zulu)(tango, report);
 635:
                    tango = mike.logger;
                    zulu = tango.info;
                    entity = 'Renegotiating: User joined';
                    entity = zulu.bind(tango)(entity);
                    entity = mike.handleNegotiationNeeded;
                    entity = entity.bind(mike)();
 667:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = options;
            entity[3] = report;
            report = {};
            options = 'destroyUser';
            report['key'] = options;
            options = function(argFoo) { // Original name: value
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    golf = argFoo;
                    mike = this;
                    zulu = mike.users;
                    entity = zulu.get;
                    zulu = entity.bind(zulu)(golf);
                    entity = null;
                    if(!(entity != zulu)) { _fun00036_ip = 128; continue _fun00035 }
 28:
                    oscar = zulu.audioSSRC;
                    tango = zulu.videoSSRC;
                    report = mike.users;
                    zulu = report.delete;
                    zulu = zulu.bind(report)(golf);
                    if(!(entity != oscar)) { _fun00036_ip = 76; continue _fun00035 }
 60:
                    report = mike.userIdsBySsrc;
                    zulu = report.delete;
                    zulu = zulu.bind(report)(oscar);
 76:
                    if(!(entity != tango)) { _fun00036_ip = 96; continue _fun00035 }
 80:
                    zulu = mike.userIdsBySsrc;
                    entity = zulu.delete;
                    entity = entity.bind(zulu)(tango);
 96:
                    tango = mike.logger;
                    zulu = tango.info;
                    entity = 'Renegotiating: User left';
                    entity = zulu.bind(tango)(entity);
                    entity = mike.handleNegotiationNeeded;
                    entity = entity.bind(mike)();
 128:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = options;
            entity[4] = report;
            report = {};
            options = 'setBitRate';
            report['key'] = options;
            options = function(argFoo) { // Original name: value
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    entity = argFoo;
                    zulu = this;
                    mike = zulu.voiceBitrate;
                    if(!(mike !== entity)) { _fun00038_ip = 125; continue _fun00037 }
 16:
                    options = _closure1_slot18;
                    romeo = _closure2_slot2;
                    golf = undefined;
                    yankee = 'setBitRate';
                    verify = 3;
                    foxtrot = undefined;
                    offset = zulu;
                    tango = foxtrot[options](romeo, yankee, offset, verify, options);
                    mike = new Array(1);
                    mike[0] = entity;
                    mike = tango.bind(golf)(mike);
                    mike = zulu.setAudioEncoderParameters;
                    tango = {};
                    oscar = _closure1_slot0;
                    options = _closure1_slot1;
                    report = 12;
                    report = options[report];
                    report = oscar.bind(golf)(report);
                    report = report.EncoderParameter;
                    report = report.AUDIO_BITRATE;
                    tango['parameter'] = report;
                    tango['value'] = entity;
                    entity = new Array(1);
                    entity[0] = tango;
                    entity = mike.bind(zulu)(entity);
 125:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = options;
            entity[5] = report;
            report = {};
            options = 'setSDP';
            report['key'] = options;
            options = function(argFoo) { // Original name: value
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    mike = argFoo;
                    zulu = this;
                    report = _closure1_slot0;
                    tango = _closure1_slot1;
                    entity = 13;
                    tango = tango[entity];
                    entity = undefined;
                    report = report.bind(entity)(tango);
                    tango = report.validateSdp;
                    tango = tango.bind(report)(mike);
                    if(tango) { _fun00040_ip = 97; continue _fun00039 }
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
                    zulu['sdp'] = mike;
                    mike = zulu.setRemoteAnswer;
                    mike = mike.bind(zulu)();
                    return entity;
                }
            };
            report['value'] = options;
            entity[6] = report;
            report = {};
            options = 'peerConnectionState';
            report['key'] = options;
            options = function() { // Original name: get
                entity = this;
                entity = entity.pc;
                entity = entity.connectionState;
                return entity;
            };
            report['get'] = options;
            entity[7] = report;
            report = {};
            options = 'iceGatheringState';
            report['key'] = options;
            options = function() { // Original name: get
                entity = this;
                entity = entity.pc;
                entity = entity.iceGatheringState;
                return entity;
            };
            report['get'] = options;
            entity[8] = report;
            report = {};
            options = 'iceConnectionState';
            report['key'] = options;
            options = function() { // Original name: get
                entity = this;
                entity = entity.pc;
                entity = entity.iceConnectionState;
                return entity;
            };
            report['get'] = options;
            entity[9] = report;
            report = {};
            options = 'signalingState';
            report['key'] = options;
            options = function() { // Original name: get
                entity = this;
                entity = entity.pc;
                entity = entity.signalingState;
                return entity;
            };
            report['get'] = options;
            entity[10] = report;
            report = {};
            options = 'connected';
            report['key'] = options;
            options = function() { // Original name: get
                entity = this;
                entity = entity.pc;
                mike = entity.iceConnectionState;
                entity = 'connected';
                entity = entity === mike;
                return entity;
            };
            report['get'] = options;
            entity[11] = report;
            report = {};
            options = 'setTransceiverEncodingParameters';
            report['key'] = options;
            options = function(argFoo, argBar) { // Original name: value
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    mike = argFoo;
                    update = argBar;
                    echo = this;
                    var _closure3_slot0 = echo;
                    var _closure3_slot1 = update;
                    report = null;
                    if(!(report != mike)) { _fun00042_ip = 367; continue _fun00041 }
 28:
                    tango = update.length;
                    zulu = 0;
                    if(!(zulu !== tango)) { _fun00042_ip = 367; continue _fun00041 }
 42:
                    tango = mike.sender;
                    mike = tango.getParameters;
                    zulu = mike.bind(tango)();
                    mike = zulu.encodings;
                    if(!(report != mike)) { _fun00042_ip = 367; continue _fun00041 }
 71:
                    report = _closure1_slot14;
                    mike = zulu.encodings;
                    output = undefined;
                    sizing = report.bind(output)(mike);
                    oscar = sizing.bind(output)();
                    report = oscar.done;
                    options = false;
                    kilo = global;
                    backup = 'UnifiedConnection.setTransceiverEncodingParameters: ';
                    foxtrot = ": from '";
                    romeo = "' to '";
                    yankee = "'";
                    verify = oscar;
                    golf = undefined;
                    oscar = undefined;
                    mike = false;
                    if(report) { _fun00042_ip = 307; continue _fun00041 }
 141:
                    config = verify.value;
                    report = _closure1_slot14;
                    sequence = report.bind(output)(update);
                    source = sequence.bind(output)();
                    report = source.done;
                    vacuum = options;
                    control = source;
                    source = vacuum;
                    if(report) { _fun00042_ip = 283; continue _fun00041 }
 176:
                    report = control.value;
                    context = report.propertyName;
                    record = report.value;
                    report = config[context];
                    if(!(report !== record)) { _fun00042_ip = 259; continue _fun00041 }
 200:
                    target = echo.logger;
                    papa = target.info;
                    equality = config[context];
                    report = kilo.HermesInternal;
                    report = report.concat;
                    variable37 = backup;
                    variable36 = context;
                    quebec = foxtrot;
                    whiskey = romeo;
                    lima = record;
                    sierra = yankee;
                    report = variable37[report](variable36, quebec, equality, whiskey, lima, sierra, status);
                    report = papa.bind(target)(report);
                    config[context] = record;
                    vacuum = true;
 259:
                    target = sequence.bind(output)();
                    report = target.done;
                    control = target;
                    source = vacuum;
                    golf = context;
                    oscar = record;
                    if(!report) { _fun00042_ip = 176; continue _fun00041 }
 283:
                    control = sizing.bind(output)();
                    report = control.done;
                    options = source;
                    verify = control;
                    mike = options;
                    if(!report) { _fun00042_ip = 141; continue _fun00041 }
 307:
                    if(!mike) { _fun00042_ip = 367; continue _fun00041 }
 310:
                    mike = function(argFoo) { // Original name: logError
                        entity = _closure3_slot0;
                        zulu = entity.logger;
                        mike = zulu.error;
                        entity = global;
                        oscar = entity.JSON;
                        report = oscar.stringify;
                        tango = _closure3_slot1;
                        offset = report.bind(oscar)(tango);
                        entity = entity.HermesInternal;
                        golf = entity.concat;
                        foxtrot = 'UnifiedConnection.setTransceiverEncodingProperty: setParameters failed: "';
                        romeo = argFoo;
                        yankee = '" (';
                        verify = ')"';
                        entity = foxtrot[golf](romeo, yankee, offset, verify, options);
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    var _closure3_slot2 = mike;
                    mike = tango.setParameters;
                    report = mike.bind(tango)(zulu);
                    tango = report.then;
                    zulu = function() {
                        entity = undefined;
                        return entity;
                    };
                    mike = function(argFoo) {
                        zulu = _closure3_slot2;
                        mike = undefined;
                        entity = argFoo;
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    zulu = tango.bind(report)(zulu, mike);
                    mike = zulu.catch;
                    entity = function(argFoo) {
                        zulu = _closure3_slot2;
                        mike = undefined;
                        entity = argFoo;
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
 367:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = options;
            entity[12] = report;
            report = {};
            options = 'setAudioEncoderParameters';
            report['key'] = options;
            options = function(argFoo) { // Original name: value
                _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                    report = this;
                    options = {};
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    entity = 12;
                    zulu = zulu[entity];
                    entity = undefined;
                    zulu = tango.bind(entity)(zulu);
                    zulu = zulu.EncoderParameter;
                    tango = zulu.AUDIO_BITRATE;
                    zulu = 'maxBitrate';
                    options[tango] = zulu;
                    tango = new Array(0);
                    zulu = _closure1_slot14;
                    mike = argFoo;
                    golf = zulu.bind(entity)(mike);
                    zulu = golf.bind(entity)();
                    mike = zulu.done;
                    oscar = null;
                    if(mike) { _fun00044_ip = 192; continue _fun00043 }
 81:
                    mike = zulu.value;
                    verify = mike.parameter;
                    yankee = mike.value;
                    romeo = options[verify];
                    if(!(oscar != romeo)) { _fun00044_ip = 143; continue _fun00043 }
 105:
                    offset = tango.push;
                    mike = {};
                    mike['propertyName'] = romeo;
                    mike['value'] = yankee;
                    mike = offset.bind(tango)(mike);
                    offset = golf.bind(entity)();
                    mike = offset.done;
                    zulu = offset;
                    if(mike) { _fun00044_ip = 192; continue _fun00043 }
 141:
                    _fun00044_ip = 81; continue _fun00043;
 143:
                    oscar = report.logger;
                    zulu = oscar.info;
                    mike = global;
                    mike = mike.HermesInternal;
                    options = mike.concat;
                    golf = 'UnifiedConnection.setEncoderParameter: Unable to set parameter "';
                    mike = '"';
                    mike = options.bind(golf)(verify, mike);
                    mike = zulu.bind(oscar)(mike);
                    mike = undefined;
                    return mike;
 192:
                    zulu = report.setTransceiverEncodingParameters;
                    mike = report.audioTransceiver;
                    mike = zulu.bind(report)(mike, tango);
                    return entity;
                }
            };
            report['value'] = options;
            entity[13] = report;
            report = {};
            options = 'setVideoEncoderParameters';
            report['key'] = options;
            options = function(argFoo) { // Original name: value
                _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                    report = this;
                    options = {};
                    tango = _closure1_slot0;
                    oscar = _closure1_slot1;
                    zulu = 12;
                    golf = oscar[zulu];
                    entity = undefined;
                    golf = tango.bind(entity)(golf);
                    golf = golf.EncoderParameter;
                    verify = golf.VIDEO_BITRATE;
                    golf = 'maxBitrate';
                    options[verify] = golf;
                    golf = oscar[zulu];
                    golf = tango.bind(entity)(golf);
                    golf = golf.EncoderParameter;
                    verify = golf.VIDEO_RESOLUTION_SCALE;
                    golf = 'scaleResolutionDownBy';
                    options[verify] = golf;
                    zulu = oscar[zulu];
                    zulu = tango.bind(entity)(zulu);
                    zulu = zulu.EncoderParameter;
                    tango = zulu.VIDEO_FRAMERATE;
                    zulu = 'maxFramerate';
                    options[tango] = zulu;
                    tango = new Array(0);
                    zulu = _closure1_slot14;
                    mike = argFoo;
                    golf = zulu.bind(entity)(mike);
                    zulu = golf.bind(entity)();
                    mike = zulu.done;
                    oscar = null;
                    if(mike) { _fun00046_ip = 256; continue _fun00045 }
 145:
                    mike = zulu.value;
                    verify = mike.parameter;
                    yankee = mike.value;
                    romeo = options[verify];
                    if(!(oscar != romeo)) { _fun00046_ip = 207; continue _fun00045 }
 169:
                    offset = tango.push;
                    mike = {};
                    mike['propertyName'] = romeo;
                    mike['value'] = yankee;
                    mike = offset.bind(tango)(mike);
                    offset = golf.bind(entity)();
                    mike = offset.done;
                    zulu = offset;
                    if(mike) { _fun00046_ip = 256; continue _fun00045 }
 205:
                    _fun00046_ip = 145; continue _fun00045;
 207:
                    oscar = report.logger;
                    zulu = oscar.info;
                    mike = global;
                    mike = mike.HermesInternal;
                    options = mike.concat;
                    golf = 'UnifiedConnection.setEncoderParameter: Unable to set parameter "';
                    mike = '"';
                    mike = options.bind(golf)(verify, mike);
                    mike = zulu.bind(oscar)(mike);
                    mike = undefined;
                    return mike;
 256:
                    zulu = report.setTransceiverEncodingParameters;
                    mike = report.videoTransceiver;
                    mike = zulu.bind(report)(mike, tango);
                    return entity;
                }
            };
            report['value'] = options;
            entity[14] = report;
            report = {};
            options = 'getRawStats';
            report['key'] = options;
            options = function() { // Original name: value
                entity = this;
                mike = entity.pc;
                entity = mike.getStats;
                entity = entity.bind(mike)();
                return entity;
            };
            report['value'] = options;
            entity[15] = report;
            report = {};
            options = 'makeOfferAnswerOptions';
            report['key'] = options;
            options = function() { // Original name: value
                entity = {};
                mike = false;
                entity['iceRestart'] = mike;
                return entity;
            };
            report['value'] = options;
            entity[16] = report;
            report = {};
            options = 'parseLocalDescription';
            report['key'] = options;
            options = function() { // Original name: value
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    offset = this;
                    entity = offset.pc;
                    entity = entity.localDescription;
                    mike = null;
                    if(!(mike != entity)) { _fun00048_ip = 403; continue _fun00047 }
 24:
                    entity = entity.sdp;
                    oscar = _closure1_slot0;
                    golf = _closure1_slot1;
                    report = 13;
                    zulu = golf[report];
                    tango = undefined;
                    options = oscar.bind(tango)(zulu);
                    zulu = options.extractSDP;
                    options = zulu.bind(options)(entity);
                    romeo = options.outboundStreams;
                    yankee = options.codecs;
                    zulu = options.audioSSRC;
                    verify = options.videoSSRC;
                    options = options.rtxSSRC;
                    offset['outboundStreams'] = romeo;
                    offset['codecs'] = yankee;
                    report = golf[report];
                    oscar = oscar.bind(tango)(report);
                    report = oscar.getExtensions;
                    report = report.bind(oscar)(entity);
                    offset['extensions'] = report;
                    offset['audioSSRC'] = zulu;
                    report = 0;
                    zulu = verify > report;
                    if(!zulu) { _fun00048_ip = 153; continue _fun00047 }
 149:
                    zulu = options > report;
 153:
                    offset['videoReady'] = zulu;
                    zulu = offset.videoStreamParameters;
                    zulu = zulu[report];
                    zulu = zulu.ssrc;
                    zulu = zulu !== verify;
                    if(zulu) { _fun00048_ip = 202; continue _fun00047 }
 182:
                    oscar = offset.videoStreamParameters;
                    oscar = oscar[report];
                    oscar = oscar.rtxSsrc;
                    zulu = oscar !== options;
 202:
                    if(zulu) { _fun00048_ip = 211; continue _fun00047 }
 205:
                    zulu = offset.videoReady;
 211:
                    if(!zulu) { _fun00048_ip = 401; continue _fun00047 }
 217:
                    zulu = offset.videoStreamParameters;
                    oscar = zulu[report];
                    zulu = verify;
                    if(!(report === zulu)) { _fun00048_ip = 250; continue _fun00047 }
 234:
                    golf = offset.videoStreamParameters;
                    golf = golf[report];
                    zulu = golf.ssrc;
 250:
                    oscar['ssrc'] = zulu;
                    zulu = offset.videoStreamParameters;
                    oscar = zulu[report];
                    zulu = options;
                    if(!(report === zulu)) { _fun00048_ip = 289; continue _fun00047 }
 273:
                    golf = offset.videoStreamParameters;
                    golf = golf[report];
                    zulu = golf.rtxSsrc;
 289:
                    oscar['rtxSsrc'] = zulu;
                    zulu = offset.videoStreamParameters;
                    report = zulu[report];
                    zulu = offset.videoReady;
                    report['active'] = zulu;
                    golf = offset.emit;
                    zulu = _closure1_slot0;
                    report = _closure1_slot1;
                    mike = 14;
                    mike = report[mike];
                    mike = zulu.bind(tango)(mike);
                    mike = mike.BaseConnectionEvent;
                    echo = mike.Video;
                    result = offset.userId;
                    zulu = offset.input;
                    mike = zulu.getVideoStreamId;
                    output = mike.bind(zulu)();
                    sizing = offset.audioSSRC;
                    foxtrot = offset.videoStreamParameters;
                    update = offset;
                    kilo = verify;
                    backup = options;
                    mike = update[golf](echo, result, output, sizing, kilo, backup, foxtrot, romeo);
 401:
                    return entity;
 403:
                    entity = global;
                    zulu = entity.Error;
                    entity = zulu.prototype;
                    mike = Object.create(entity, {constructor: {value: zulu}});
                    echo = 'localDescription is null';
                    update = mike;
                    entity = new update[zulu](echo, result);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                }
            };
            report['value'] = options;
            entity[17] = report;
            report = {};
            options = 'addTransceivers';
            report['key'] = options;
            options = function(argFoo, argBar, argBaz, argCorge) { // Original name: value
                _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                    yankee = argFoo;
                    offset = argBar;
                    verify = argBaz;
                    options = argCorge;
                    golf = this;
                    oscar = golf.pc;
                    entity = oscar.getTransceivers;
                    entity = entity.bind(oscar)();
                    report = entity.length;
                    entity = report + verify;
                    tango = null;
                    zulu = 'video';
                    mike = report;
                    if(!(mike < entity)) { _fun00050_ip = 154; continue _fun00049 }
 53:
                    if(!(zulu === yankee)) { _fun00050_ip = 61; continue _fun00049 }
 57:
                    if(!(tango == options)) { _fun00050_ip = 82; continue _fun00049 }
 61:
                    romeo = oscar.addTransceiver;
                    entity = {};
                    entity['direction'] = offset;
                    entity = romeo.bind(oscar)(yankee, entity);
                    _fun00050_ip = 114; continue _fun00049;
 82:
                    romeo = oscar.addTransceiver;
                    entity = {};
                    entity['direction'] = offset;
                    foxtrot = new Array(1);
                    foxtrot[0] = options;
                    entity['streams'] = foxtrot;
                    entity = romeo.bind(oscar)(yankee, entity);
 114:
                    entity = golf.inactiveTransceivers;
                    foxtrot = entity[yankee];
                    romeo = foxtrot.push;
                    entity = mike.toString;
                    entity = entity.bind(mike)();
                    entity = romeo.bind(foxtrot)(entity);
                    mike = mike + 1;
                    entity = report + verify;
                    if(mike < entity) { _fun00050_ip = 53; continue _fun00049 }
 154:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = options;
            entity[18] = report;
            report = {};
            options = 'buildSSRCsFromOutboundStreams';
            report['key'] = options;
            options = function() { // Original name: value
                mike = this;
                var _closure3_slot0 = mike;
                zulu = mike.outboundStreams;
                mike = zulu.map;
                entity = function(argFoo) {
                    _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                        entity = argFoo;
                        mike = entity.mid;
                        zulu = entity.type;
                        report = entity.direction;
                        entity = global;
                        entity = entity.String;
                        oscar = undefined;
                        mike = entity.bind(oscar)(mike);
                        entity = _closure3_slot0;
                        tango = entity.assignedStreams;
                        entity = tango.get;
                        offset = entity.bind(tango)(mike);
                        entity = null;
                        tango = offset;
                        if(!(entity != tango)) { _fun00052_ip = 171; continue _fun00051 }
 67:
                        golf = _closure3_slot0;
                        yankee = golf.users;
                        verify = yankee.get;
                        golf = offset.cname;
                        yankee = verify.bind(yankee)(golf);
                        golf = 'audio';
                        if(!(golf !== zulu)) { _fun00052_ip = 118; continue _fun00051 }
 101:
                        golf = entity == yankee;
                        verify = undefined;
                        if(golf) { _fun00052_ip = 116; continue _fun00051 }
 110:
                        verify = yankee.videoSSRC;
 116:
                        _fun00052_ip = 136; continue _fun00051;
 118:
                        romeo = entity == yankee;
                        golf = undefined;
                        if(romeo) { _fun00052_ip = 133; continue _fun00051 }
 127:
                        golf = yankee.audioSSRC;
 133:
                        verify = golf;
 136:
                        golf = offset.ssrc;
                        tango = offset;
                        if(!(golf !== verify)) { _fun00052_ip = 171; continue _fun00051 }
 149:
                        golf = _closure3_slot0;
                        verify = golf.assignedStreams;
                        golf = verify.delete;
                        golf = golf.bind(verify)(mike);
                        tango = undefined;
 171:
                        golf = _closure3_slot0;
                        verify = golf.unassignedStreams;
                        verify = verify[zulu];
                        golf = golf.inactiveTransceivers;
                        romeo = golf[zulu];
                        golf = romeo.indexOf;
                        yankee = golf.bind(romeo)(mike);
                        golf = entity == tango;
                        if(!golf) { _fun00052_ip = 223; continue _fun00051 }
 212:
                        foxtrot = verify.length;
                        offset = 0;
                        golf = foxtrot > offset;
 223:
                        if(!golf) { _fun00052_ip = 236; continue _fun00051 }
 226:
                        offset = -1;
                        golf = offset !== yankee;
 236:
                        if(!golf) { _fun00052_ip = 288; continue _fun00051 }
 239:
                        golf = verify.pop;
                        golf = golf.bind(verify)();
                        offset = romeo.splice;
                        verify = 1;
                        verify = offset.bind(romeo)(yankee, verify);
                        options = _closure3_slot0;
                        verify = options.assignedStreams;
                        options = verify.set;
                        options = options.bind(verify)(mike, golf);
                        tango = golf;
 288:
                        if(!(entity == tango)) { _fun00052_ip = 302; continue _fun00051 }
 292:
                        tango = {'ssrc': 4294967295, 'cname': ''};
 302:
                        entity = {};
                        golf = tango.ssrc;
                        entity['ssrc'] = golf;
                        tango = tango.cname;
                        entity['cname'] = tango;
                        entity['type'] = zulu;
                        tango = _closure1_slot0;
                        golf = _closure1_slot1;
                        zulu = 13;
                        zulu = golf[zulu];
                        tango = tango.bind(oscar)(zulu);
                        zulu = tango.getDirection;
                        zulu = zulu.bind(tango)(report);
                        entity['direction'] = zulu;
                        entity['mid'] = mike;
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report['value'] = options;
            entity[19] = report;
            report = {};
            options = 'generateSDPAnswer';
            report['key'] = options;
            options = function() { // Original name: value
                _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                    offset = this;
                    backup = offset.audioCodec;
                    golf = offset.audioPayloadType;
                    foxtrot = offset.videoCodec;
                    oscar = offset.videoPayloadType;
                    romeo = offset.videoSupported;
                    if(!romeo) { _fun00054_ip = 77; continue _fun00053 }
 36:
                    zulu = offset.videoTransceiver;
                    mike = null;
                    tango = mike == zulu;
                    entity = undefined;
                    if(tango) { _fun00054_ip = 73; continue _fun00053 }
 53:
                    zulu = zulu.sender;
                    tango = mike == zulu;
                    entity = undefined;
                    if(tango) { _fun00054_ip = 73; continue _fun00053 }
 68:
                    entity = zulu.track;
 73:
                    romeo = mike != entity;
 77:
                    report = offset.rtxPayloadType;
                    mike = offset.sdp;
                    tango = null;
                    if(!(tango != backup)) { _fun00054_ip = 276; continue _fun00053 }
 98:
                    if(!(tango != golf)) { _fun00054_ip = 276; continue _fun00053 }
 105:
                    if(!(tango != foxtrot)) { _fun00054_ip = 276; continue _fun00053 }
 112:
                    if(!(tango != oscar)) { _fun00054_ip = 276; continue _fun00053 }
 119:
                    if(!(tango != report)) { _fun00054_ip = 276; continue _fun00053 }
 126:
                    if(!(tango != mike)) { _fun00054_ip = 276; continue _fun00053 }
 133:
                    entity = offset.buildSSRCsFromOutboundStreams;
                    yankee = entity.bind(offset)();
                    entity = {};
                    entity['ssrcs'] = yankee;
                    verify = _closure1_slot0;
                    options = _closure1_slot1;
                    zulu = 13;
                    options = options[zulu];
                    zulu = undefined;
                    verify = verify.bind(zulu)(options);
                    options = verify.generateUnifiedSessionDescription;
                    zulu = {};
                    kilo = 'answer';
                    zulu['type'] = kilo;
                    zulu['baseSDP'] = mike;
                    zulu['audioCodec'] = backup;
                    zulu['audioPayloadType'] = golf;
                    kilo = offset.voiceBitrate;
                    zulu['audioBitRate'] = kilo;
                    zulu['videoCodec'] = foxtrot;
                    zulu['videoPayloadType'] = oscar;
                    kilo = 2500;
                    zulu['videoBitRate'] = kilo;
                    zulu['sendingVideo'] = romeo;
                    zulu['rtxPayloadType'] = report;
                    zulu['ssrcs'] = yankee;
                    offset = offset.extensions;
                    zulu['extensions'] = offset;
                    zulu = options.bind(verify)(zulu);
                    entity['answer'] = zulu;
                    return entity;
 276:
                    entity = global;
                    zulu = entity.Error;
                    options = tango == golf;
                    romeo = 'null';
                    yankee = romeo;
                    if(options) { _fun00054_ip = 301; continue _fun00053 }
 298:
                    yankee = golf;
 301:
                    golf = tango == oscar;
                    offset = romeo;
                    if(golf) { _fun00054_ip = 314; continue _fun00053 }
 311:
                    offset = oscar;
 314:
                    oscar = tango == report;
                    verify = romeo;
                    if(oscar) { _fun00054_ip = 327; continue _fun00053 }
 324:
                    verify = report;
 327:
                    tango = tango == mike;
                    if(tango) { _fun00054_ip = 337; continue _fun00053 }
 334:
                    romeo = mike;
 337:
                    entity = entity.HermesInternal;
                    options = entity.concat;
                    context = 'Invalid payload: audioCodec: ';
                    config = ', audioPayloadType: ';
                    vacuum = ', videoCodec: ';
                    source = ', videoCodecPayloadType: ';
                    echo = ', rtxPayloadType: ';
                    output = ', sdp: ';
                    record = backup;
                    sequence = yankee;
                    control = foxtrot;
                    update = offset;
                    result = verify;
                    sizing = romeo;
                    record = context[options](record, config, sequence, vacuum, control, source, update, echo, result, output, sizing, kilo);
                    mike = zulu.prototype;
                    mike = Object.create(mike, {constructor: {value: zulu}});
                    context = mike;
                    entity = new context[zulu](record, config);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                }
            };
            report['value'] = options;
            entity[20] = report;
            report = {};
            options = 'setRemoteAnswer';
            report['key'] = options;
            options = _closure1_slot2;
            golf = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                        StartGenerator();
                        tango = this;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00056_ip = 590; continue _fun00055 }
 13:
                        mike = undefined;
                        offset = undefined;
                        verify = undefined;
                        golf = undefined;
                        options = undefined;
                        report = undefined;
                        yankee = undefined;
                        oscar = global;
                        backup = oscar.JSON;
                        foxtrot = backup.stringify;
                        romeo = tango.unassignedStreams;
                        offset = foxtrot.bind(backup)(romeo);
                        backup = oscar.JSON;
                        foxtrot = backup.stringify;
                        romeo = tango.assignedStreams;
                        verify = foxtrot.bind(backup)(romeo);
                        romeo = tango.pc;
                        golf = romeo;
                        foxtrot = tango.generateSDPAnswer;
                        foxtrot = foxtrot.bind(tango)();
                        options = foxtrot.ssrcs;
                        report = foxtrot.answer;
                        yankee = romeo.localDescription;
 114: // try_start_0
                        foxtrot = golf;
                        romeo = foxtrot.setRemoteDescription;
                        golf = report;
                        golf = romeo.bind(foxtrot)(golf);
                        SaveGenerator(address=135);
 133:
                        return golf;
 135:
                        ResumeGenerator(result_out_reg=6, return_bool_out_reg=11);
                        if(romeo) { _fun00056_ip = 146; continue _fun00055 }
 141: // try_end0
                        _fun00056_ip = 477; continue _fun00055;
 146:
                        return golf;
 149: // catch_target0
                        CatchBlockStart(arg_register=12);
                        zulu = foxtrot;
                        backup = tango.logger;
                        golf = backup.warn;
                        romeo = report;
                        control = romeo.type;
                        update = romeo.sdp;
                        report = oscar.HermesInternal;
                        output = report.concat;
                        config = 'Failed to set remote answer: ';
                        vacuum = ', type: ';
                        source = ', sdp: ';
                        sequence = foxtrot;
                        report = config[output](sequence, vacuum, control, source, update, echo);
                        report = golf.bind(backup)(report);
                        output = tango.emit;
                        kilo = _closure1_slot0;
                        backup = _closure1_slot1;
                        golf = 14;
                        backup = backup[golf];
                        backup = kilo.bind(mike)(backup);
                        backup = backup.BaseConnectionEvent;
                        sequence = backup.SdpError;
                        control = foxtrot.message;
                        source = romeo.type;
                        update = romeo.sdp;
                        vacuum = 'setRemoteDescription';
                        config = tango;
                        romeo = config[output](sequence, vacuum, control, source, update, echo);
                        foxtrot = yankee;
                        romeo = null;
                        if(!(romeo != foxtrot)) { _fun00056_ip = 361; continue _fun00055 }
 296:
                        sizing = tango.emit;
                        foxtrot = _closure1_slot0;
                        romeo = _closure1_slot1;
                        romeo = romeo[golf];
                        romeo = foxtrot.bind(mike)(romeo);
                        romeo = romeo.BaseConnectionEvent;
                        sequence = romeo.SdpError;
                        romeo = zulu;
                        control = romeo.message;
                        source = yankee.type;
                        update = yankee.sdp;
                        vacuum = 'setLocalDescription';
                        config = tango;
                        yankee = config[sizing](sequence, vacuum, control, source, update, echo);
 361:
                        foxtrot = offset;
                        control = verify;
                        offset = oscar.JSON;
                        verify = offset.stringify;
                        update = verify.bind(offset)(options);
                        oscar = oscar.HermesInternal;
                        offset = oscar.concat;
                        config = 'unassignedStreams: ';
                        vacuum = ', assignedStreams: ';
                        source = ', ssrcs: ';
                        sequence = foxtrot;
                        update = config[offset](sequence, vacuum, control, source, update, echo);
                        options = tango.emit;
                        oscar = _closure1_slot0;
                        report = _closure1_slot1;
                        report = report[golf];
                        report = oscar.bind(mike)(report);
                        report = report.BaseConnectionEvent;
                        sequence = report.SdpError;
                        control = zulu.message;
                        vacuum = 'generateSDPAnswer';
                        source = 'streams';
                        config = tango;
                        zulu = config[options](sequence, vacuum, control, source, update, echo);
 477:
                        report = tango.unassignedStreams;
                        report = report.audio;
                        report = report.length;
                        oscar = 0;
                        report = report > oscar;
                        zulu = report;
                        if(report) { _fun00056_ip = 527; continue _fun00055 }
 506:
                        report = tango.unassignedStreams;
                        report = report.video;
                        report = report.length;
                        zulu = report > oscar;
 527:
                        if(!zulu) { _fun00056_ip = 560; continue _fun00055 }
 530:
                        zulu = true;
                        tango['negotiationNeeded'] = zulu;
                        oscar = tango.logger;
                        report = oscar.info;
                        zulu = 'Renegotiating: Streams left unassigned after negotiation - renegotiate';
                        zulu = report.bind(oscar)(zulu);
 560:
                        zulu = false;
                        tango['negotiating'] = zulu;
                        zulu = tango.negotiationNeeded;
                        if(!zulu) { _fun00056_ip = 587; continue _fun00055 }
 577:
                        zulu = tango.handleNegotiationNeeded;
                        zulu = zulu.bind(tango)();
 587:
                        return mike;
 590:
                        return entity;
                    }
                };
                return entity;
            };
            golf = options.bind(zulu)(golf);
            var _closure2_slot1 = golf;
            golf = function() { // Original name: setRemoteAnswer
                entity = undefined;
                tango = _closure2_slot1;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            report['value'] = golf;
            entity[21] = report;
            report = {};
            golf = 'setConnected';
            report['key'] = golf;
            golf = function() { // Original name: value
                mike = this;
                zulu = mike.input;
                entity = zulu.reset;
                entity = entity.bind(zulu)();
                tango = mike.setConnectionState;
                zulu = _closure1_slot10;
                zulu = zulu.CONNECTED;
                zulu = tango.bind(mike)(zulu);
                report = mike.on;
                oscar = _closure1_slot0;
                golf = _closure1_slot1;
                entity = 14;
                zulu = golf[entity];
                entity = undefined;
                zulu = oscar.bind(entity)(zulu);
                zulu = zulu.BaseConnectionEvent;
                tango = zulu.Stats;
                zulu = mike.handleStats;
                zulu = report.bind(mike)(tango, zulu);
                report = mike.input;
                tango = report.on;
                zulu = 15;
                zulu = golf[zulu];
                zulu = oscar.bind(entity)(zulu);
                zulu = zulu.InputEvent;
                zulu = zulu.VoiceActivity;
                mike = mike.handleVoiceActivity;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            report['value'] = golf;
            entity[22] = report;
            report = {};
            golf = 'handleNegotiationNeeded';
            report['key'] = golf;
            golf = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                        StartGenerator();
                        zulu = arguments[0];
                        verify = this;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00058_ip = 433; continue _fun00057 }
 16:
                        tango = undefined;
                        if(!(zulu === tango)) { _fun00058_ip = 24; continue _fun00057 }
 22:
                        zulu = false;
 24:
                        golf = undefined;
                        oscar = undefined;
                        report = undefined;
                        SaveGenerator(address=34);
 32:
                        return tango;
 34:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                        if(options) { _fun00058_ip = 430; continue _fun00057 }
 43:
                        if(zulu) { _fun00058_ip = 80; continue _fun00057 }
 46:
                        zulu = verify.negotiating;
                        if(zulu) { _fun00058_ip = 67; continue _fun00057 }
 55:
                        options = verify.sdp;
                        zulu = null;
                        if(!(zulu == options)) { _fun00058_ip = 80; continue _fun00057 }
 67:
                        zulu = true;
                        verify['negotiationNeeded'] = zulu;
                        _fun00058_ip = 424; continue _fun00057;
 80:
                        zulu = true;
                        verify['negotiating'] = zulu;
                        zulu = false;
                        verify['negotiationNeeded'] = zulu;
                        offset = verify.pc;
                        golf = offset;
                        options = offset.createOffer;
                        zulu = verify.makeOfferAnswerOptions;
                        zulu = zulu.bind(verify)();
                        zulu = options.bind(offset)(zulu);
                        SaveGenerator(address=130);
 128:
                        return zulu;
 130:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                        if(options) { _fun00058_ip = 427; continue _fun00057 }
 139:
                        oscar = zulu;
 142: // try_start_0
                        offset = golf;
                        options = offset.setLocalDescription;
                        golf = oscar;
                        golf = options.bind(offset)(golf);
                        SaveGenerator(address=163);
 161:
                        return golf;
 163:
                        ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                        if(options) { _fun00058_ip = 174; continue _fun00057 }
 169: // try_end0
                        _fun00058_ip = 311; continue _fun00057;
 174:
                        return golf;
 177: // catch_target0
                        CatchBlockStart(arg_register=6);
                        yankee = verify.logger;
                        offset = yankee.warn;
                        echo = oscar.type;
                        output = oscar.sdp;
                        options = global;
                        options = options.HermesInternal;
                        backup = options.concat;
                        control = 'Failed to set local offer: ';
                        update = ', type: ';
                        result = ', sdp: ';
                        source = golf;
                        options = control[backup](source, update, echo, result, output, sizing);
                        options = offset.bind(yankee)(options);
                        romeo = verify.emit;
                        offset = _closure1_slot0;
                        yankee = _closure1_slot1;
                        options = 14;
                        options = yankee[options];
                        options = offset.bind(tango)(options);
                        options = options.BaseConnectionEvent;
                        source = options.SdpError;
                        echo = golf.message;
                        result = oscar.type;
                        output = oscar.sdp;
                        update = 'setLocalDescription';
                        control = verify;
                        oscar = control[romeo](source, update, echo, result, output, sizing);
 311:
                        oscar = verify.parseLocalDescription;
                        report = oscar.bind(verify)();
                        golf = verify.sdp;
                        oscar = null;
                        if(!(oscar != golf)) { _fun00058_ip = 347; continue _fun00057 }
 335:
                        oscar = verify.setRemoteAnswer;
                        oscar = oscar.bind(verify)();
                        _fun00058_ip = 424; continue _fun00057;
 347:
                        options = verify.emit;
                        offset = _closure1_slot0;
                        yankee = _closure1_slot1;
                        oscar = 14;
                        oscar = yankee[oscar];
                        oscar = offset.bind(tango)(oscar);
                        oscar = oscar.BaseConnectionEvent;
                        golf = oscar.Connected;
                        oscar = 13;
                        oscar = yankee[oscar];
                        offset = offset.bind(tango)(oscar);
                        oscar = offset.truncateSDP;
                        oscar = oscar.bind(offset)(report);
                        report = 'webrtc';
                        report = options.bind(verify)(golf, report, oscar);
 424:
                        return tango;
 427:
                        return zulu;
 430:
                        return mike;
 433:
                        return entity;
                    }
                };
                mike = entity.next;
                mike = mike.bind(entity)();
                return entity;
            };
            golf = options.bind(zulu)(golf);
            var _closure2_slot0 = golf;
            oscar = function() { // Original name: handleNegotiationNeeded
                entity = undefined;
                tango = _closure2_slot0;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            report['value'] = oscar;
            entity[23] = report;
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        };
        mike = mike.bind(entity)(tango);
        tango = 16;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = '../discord_common/js/packages/media-engine/webrtc/UnifiedConnection.tsx';
        tango = report.bind(oscar)(tango);
        zulu['default'] = mike;
        return entity;
    }
})();