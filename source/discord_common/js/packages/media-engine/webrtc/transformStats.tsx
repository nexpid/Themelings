// discord_common/js/packages/media-engine/webrtc/transformStats.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
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
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot3;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot3;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
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
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
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
                    _fun00004_ip = 67; continue _fun00003;
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
    var _closure1_slot2 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = function(argFoo) { // Original name: parseCodec
        mike = argFoo;
        entity = {};
        zulu = mike.payloadType;
        entity['id'] = zulu;
        tango = mike.mimeType;
        zulu = tango.split;
        mike = '/';
        tango = zulu.bind(tango)(mike);
        zulu = tango.slice;
        mike = 1;
        zulu = zulu.bind(tango)(mike);
        mike = 0;
        mike = zulu[mike];
        entity['name'] = mike;
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = 1;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/media-engine/webrtc/transformStats.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: transformStats
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argFoo;
            variable42 = argBar;
            variable41 = argBaz;
            variable40 = argCorge;
            echo = argGrault;
            zulu = {};
            variable39 = {};
            variable38 = new Array(0);
            result = new Array(0);
            mike = _closure1_slot2;
            entity = tango.values;
            entity = entity.bind(tango)();
            variable36 = undefined;
            options = mike.bind(variable36)(entity);
            mike = options.bind(variable36)();
            entity = mike.done;
            golf = 'outbound-rtp';
            oscar = 'inbound-rtp';
            report = 'codec';
            tango = 'candidate-pair';
            if(entity) { _fun00008_ip = 169; continue _fun00007 }
 84:
            verify = mike.value;
            entity = verify.type;
            if(!(tango !== entity)) { _fun00008_ip = 145; continue _fun00007 }
 98:
            if(!(report !== entity)) { _fun00008_ip = 134; continue _fun00007 }
 102:
            if(!(oscar !== entity)) { _fun00008_ip = 122; continue _fun00007 }
 106:
            if(!(golf === entity)) { _fun00008_ip = 154; continue _fun00007 }
 110:
            entity = result.push;
            entity = entity.bind(result)(verify);
            _fun00008_ip = 154; continue _fun00007;
 122:
            entity = variable38.push;
            entity = entity.bind(variable38)(verify);
            _fun00008_ip = 154; continue _fun00007;
 134:
            entity = verify.id;
            variable39[entity] = verify;
            _fun00008_ip = 154; continue _fun00007;
 145:
            entity = verify.id;
            zulu[entity] = verify;
 154:
            verify = options.bind(variable36)();
            entity = verify.done;
            mike = verify;
            if(!entity) { _fun00008_ip = 84; continue _fun00007 }
 169:
            quebec = global;
            mike = quebec.Object;
            entity = mike.values;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.find;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.state;
                entity = 'succeeded';
                entity = entity === mike;
                return entity;
            };
            oscar = mike.bind(zulu)(entity);
            if(!(variable36 !== oscar)) { _fun00008_ip = 1839; continue _fun00007 }
 211:
            zulu = new Array(0);
            entity = result.length;
            golf = 0;
            entity = golf < entity;
            equality = 'audio';
            output = 'type';
            sizing = 'averageEncodeTime';
            whiskey = 'resolution';
            kilo = 'framesSent';
            backup = 'frameRateInput';
            lima = 'video';
            mike = 1000;
            sierra = 1;
            verify = null;
            foxtrot = 'framesEncoded';
            romeo = 'keyFramesEncoded';
            status = 'firCount';
            target = 'nackCount';
            papa = 'pliCount';
            yankee = 'bitrateTarget';
            context = 'qpSum';
            offset = undefined;
            options = 0;
            report = undefined;
            tango = undefined;
            if(!entity) { _fun00008_ip = 850; continue _fun00007 }
 307:
            record = result[options];
            entity = record.codecId;
            vacuum = variable39[entity];
            source = offset;
            update = tango;
            if(!(verify != vacuum)) { _fun00008_ip = 829; continue _fun00007 }
 334:
            entity = {};
            control = record.kind;
            entity['type'] = control;
            control = record.ssrc;
            entity['ssrc'] = control;
            control = record.timestamp;
            entity['timestamp'] = control;
            sequence = _closure1_slot0;
            control = _closure1_slot1;
            config = control[golf];
            variable45 = sequence.bind(variable36)(config);
            variable44 = variable45.formatSinkWantStat;
            variable43 = record.ssrc;
            config = record.kind;
            config = lima === config;
            config = variable44.bind(variable45)(variable41, variable43, config);
            entity['sinkWant'] = config;
            control = control[golf];
            config = sequence.bind(variable36)(control);
            sequence = config.formatSinkWantAsInt;
            control = record.ssrc;
            control = sequence.bind(config)(variable41, control);
            entity['sinkWantAsInt'] = control;
            control = _closure1_slot4;
            control = control.bind(variable36)(vacuum);
            entity['codec'] = control;
            control = record.bytesSent;
            entity['bytesSent'] = control;
            control = record.packetsSent;
            entity['packetsSent'] = control;
            control = record.kind;
            if(!(equality !== control)) { _fun00008_ip = 793; continue _fun00007 }
 497:
            control = record.kind;
            source = offset;
            report = entity;
            update = tango;
            if(!(lima === control)) { _fun00008_ip = 829; continue _fun00007 }
 518:
            source = offset;
            report = entity;
            update = tango;
            if(!echo) { _fun00008_ip = 829; continue _fun00007 }
 533:
            vacuum = record.frameWidth;
            control = undefined;
            if(!(verify !== vacuum)) { _fun00008_ip = 570; continue _fun00007 }
 545:
            vacuum = {};
            sequence = record.frameWidth;
            vacuum['width'] = sequence;
            sequence = record.frameHeight;
            vacuum['height'] = sequence;
            control = vacuum;
 570:
            config = zulu.push;
            sequence = {};
            variable56 = sequence;
            variable55 = entity;
            vacuum = copyDataProperties(variable56, variable55);
            vacuum = record.framesEncoded;
            sequence[foxtrot] = vacuum;
            vacuum = record.keyFramesEncoded;
            sequence[romeo] = vacuum;
            vacuum = record.firCount;
            sequence[status] = vacuum;
            vacuum = record.nackCount;
            sequence[target] = vacuum;
            vacuum = record.pliCount;
            sequence[papa] = vacuum;
            vacuum = record.targetBitrate;
            sequence[yankee] = vacuum;
            vacuum = record.qpSum;
            sequence[context] = vacuum;
            vacuum = record.framesEncoded;
            variable44 = verify == vacuum;
            vacuum = offset;
            variable43 = undefined;
            if(variable44) { _fun00008_ip = 740; continue _fun00007 }
 682:
            variable45 = record.totalEncodeTime;
            variable43 = undefined;
            vacuum = variable45;
            if(!(verify !== vacuum)) { _fun00008_ip = 740; continue _fun00007 }
 697:
            vacuum = variable45;
            variable43 = undefined;
            if(!(golf !== variable45)) { _fun00008_ip = 740; continue _fun00007 }
 706:
            variable44 = record.totalEncodeTime;
            variable46 = mike * variable44;
            variable44 = record.framesEncoded;
            variable46 = variable46 / variable44;
            variable44 = variable46.toFixed;
            variable43 = variable44.bind(variable46)(sierra);
            vacuum = variable45;
 740:
            sequence[sizing] = variable43;
            sequence[whiskey] = control;
            variable43 = record.framesSent;
            sequence[kilo] = variable43;
            record = record.framesPerSecond;
            sequence[backup] = record;
            sequence[output] = lima;
            sequence = config.bind(zulu)(sequence);
            source = vacuum;
            report = entity;
            update = control;
            _fun00008_ip = 829; continue _fun00007;
 793:
            vacuum = zulu.push;
            control = {};
            variable56 = control;
            variable55 = entity;
            sequence = copyDataProperties(variable56, variable55);
            control[output] = equality;
            control = vacuum.bind(zulu)(control);
            source = offset;
            report = entity;
            update = tango;
 829:
            options = options + 1;
            entity = result.length;
            offset = source;
            tango = update;
            if(options < entity) { _fun00008_ip = 307; continue _fun00007 }
 850:
            tango = {};
            entity = variable38.length;
            entity = golf < entity;
            record = 'audioLevel';
            config = 'jitter';
            sequence = 'jitterBuffer';
            vacuum = 'averageDecodeTime';
            control = 'freezeCount';
            source = 'pauseCount';
            update = 'totalFreezesDuration';
            echo = 'totalPausesDuration';
            result = 'WebRTC';
            output = 'decoderImplementationName';
            sizing = 'framesDecoded';
            kilo = 'keyFramesDecoded';
            backup = 'framesDropped';
            foxtrot = 'framesReceived';
            romeo = 'frameRateDecode';
            yankee = 0;
            offset = undefined;
            options = undefined;
            report = undefined;
            if(!entity) { _fun00008_ip = 1737; continue _fun00007 }
 939:
            variable50 = variable38[yankee];
            entity = variable50.codecId;
            variable47 = variable39[entity];
            variable44 = options;
            variable43 = report;
            if(!(verify != variable47)) { _fun00008_ip = 1716; continue _fun00007 }
 966:
            entity = variable50.ssrc;
            variable46 = variable42.bind(variable36)(entity);
            variable44 = options;
            variable43 = report;
            offset = variable46;
            if(!(verify != offset)) { _fun00008_ip = 1716; continue _fun00007 }
 993:
            variable45 = {};
            entity = variable50.kind;
            variable45['type'] = entity;
            entity = variable50.ssrc;
            variable45['ssrc'] = entity;
            entity = variable50.timestamp;
            variable45['timestamp'] = entity;
            variable48 = _closure1_slot0;
            entity = _closure1_slot1;
            variable49 = entity[golf];
            variable53 = variable48.bind(variable36)(variable49);
            variable52 = variable53.formatSinkWantStat;
            variable51 = variable50.ssrc;
            variable49 = variable50.kind;
            variable49 = lima === variable49;
            variable49 = variable52.bind(variable53)(variable41, variable51, variable49);
            variable45['sinkWant'] = variable49;
            variable49 = entity[golf];
            variable52 = variable48.bind(variable36)(variable49);
            variable51 = variable52.formatSinkWantAsInt;
            variable49 = variable50.ssrc;
            variable49 = variable51.bind(variable52)(variable41, variable49);
            variable45['sinkWantAsInt'] = variable49;
            variable49 = entity[golf];
            variable53 = variable48.bind(variable36)(variable49);
            variable52 = variable53.formatSinkWantStat;
            variable51 = variable50.ssrc;
            variable49 = variable50.kind;
            variable49 = lima === variable49;
            variable49 = variable52.bind(variable53)(variable40, variable51, variable49);
            variable45['sinkWantLocal'] = variable49;
            entity = entity[golf];
            variable49 = variable48.bind(variable36)(entity);
            variable48 = variable49.formatSinkWantAsInt;
            entity = variable50.ssrc;
            entity = variable48.bind(variable49)(variable40, entity);
            variable45['sinkWantLocalAsInt'] = entity;
            entity = _closure1_slot4;
            entity = entity.bind(variable36)(variable47);
            variable45['codec'] = entity;
            entity = variable50.bytesReceived;
            variable45['bytesReceived'] = entity;
            entity = variable50.packetsReceived;
            variable45['packetsReceived'] = entity;
            entity = variable50.packetsLost;
            variable45['packetsLost'] = entity;
            entity = variable50.kind;
            if(!(equality !== entity)) { _fun00008_ip = 1574; continue _fun00007 }
 1241:
            entity = variable50.kind;
            offset = variable46;
            variable44 = variable45;
            variable43 = report;
            if(!(lima === entity)) { _fun00008_ip = 1716; continue _fun00007 }
 1262:
            entity = tango[variable46];
            if(!(verify == entity)) { _fun00008_ip = 1278; continue _fun00007 }
 1270:
            entity = new Array(0);
            tango[variable46] = entity;
 1278:
            entity = variable50.frameWidth;
            variable49 = undefined;
            if(!(verify !== entity)) { _fun00008_ip = 1315; continue _fun00007 }
 1290:
            entity = {};
            variable47 = variable50.frameWidth;
            entity['width'] = variable47;
            variable47 = variable50.frameHeight;
            entity['height'] = variable47;
            variable49 = entity;
 1315:
            variable48 = tango[variable46];
            variable47 = variable48.push;
            entity = {};
            variable56 = entity;
            variable55 = variable45;
            variable51 = copyDataProperties(variable56, variable55);
            entity[whiskey] = variable49;
            variable49 = variable50.framesDecoded;
            entity[sizing] = variable49;
            variable49 = variable50.keyFramesDecoded;
            entity[kilo] = variable49;
            variable49 = variable50.framesDropped;
            entity[backup] = variable49;
            variable49 = variable50.framesReceived;
            entity[foxtrot] = variable49;
            variable49 = variable50.framesPerSecond;
            entity[romeo] = variable49;
            variable49 = variable50.framesDecoded;
            variable51 = verify == variable49;
            variable49 = undefined;
            if(variable51) { _fun00008_ip = 1457; continue _fun00007 }
 1411:
            variable51 = variable50.totalDecodeTime;
            variable51 = verify == variable51;
            variable49 = undefined;
            if(variable51) { _fun00008_ip = 1457; continue _fun00007 }
 1426:
            variable51 = variable50.totalDecodeTime;
            variable52 = mike * variable51;
            variable51 = variable50.framesDecoded;
            variable52 = variable52 / variable51;
            variable51 = variable52.toFixed;
            variable49 = variable51.bind(variable52)(sierra);
 1457:
            entity[vacuum] = variable49;
            variable49 = variable50.firCount;
            entity[status] = variable49;
            variable49 = variable50.nackCount;
            entity[target] = variable49;
            variable49 = variable50.pliCount;
            entity[papa] = variable49;
            variable49 = variable50.freezeCount;
            entity[control] = variable49;
            variable49 = variable50.pauseCount;
            entity[source] = variable49;
            variable49 = variable50.totalFreezesDuration;
            entity[update] = variable49;
            variable49 = variable50.totalPausesDuration;
            entity[echo] = variable49;
            variable49 = variable50.qpSum;
            entity[context] = variable49;
            entity[output] = result;
            entity = variable47.bind(variable48)(entity);
            offset = variable46;
            variable44 = variable45;
            variable43 = report;
            _fun00008_ip = 1716; continue _fun00007;
 1574:
            variable47 = variable50.jitterBufferDelay;
            entity = 0;
            if(!(variable36 !== variable47)) { _fun00008_ip = 1634; continue _fun00007 }
 1586:
            variable47 = variable50.jitterBufferEmittedCount;
            entity = 0;
            if(!(variable36 !== variable47)) { _fun00008_ip = 1634; continue _fun00007 }
 1598:
            variable49 = quebec.Math;
            variable48 = variable49.round;
            variable47 = variable50.jitterBufferDelay;
            variable51 = mike * variable47;
            variable47 = variable50.jitterBufferEmittedCount;
            variable47 = variable51 / variable47;
            entity = variable48.bind(variable49)(variable47);
 1634:
            variable47 = tango[variable46];
            if(!(verify == variable47)) { _fun00008_ip = 1650; continue _fun00007 }
 1642:
            variable47 = new Array(0);
            tango[variable46] = variable47;
 1650:
            variable49 = tango[variable46];
            variable48 = variable49.push;
            variable47 = {};
            variable56 = variable47;
            variable55 = variable45;
            variable51 = copyDataProperties(variable56, variable55);
            variable51 = variable50.audioLevel;
            variable47[record] = variable51;
            variable50 = variable50.jitter;
            variable50 = mike * variable50;
            variable47[config] = variable50;
            variable47[sequence] = entity;
            variable47 = variable48.bind(variable49)(variable47);
            offset = variable46;
            variable44 = variable45;
            variable43 = entity;
 1716:
            yankee = yankee + 1;
            entity = variable38.length;
            options = variable44;
            report = variable43;
            if(yankee < entity) { _fun00008_ip = 939; continue _fun00007 }
 1737:
            report = oscar.currentRoundTripTime;
            options = verify != report;
            entity = 0;
            if(!options) { _fun00008_ip = 1757; continue _fun00007 }
 1754:
            entity = report;
 1757:
            report = mike * entity;
            entity = {};
            mike = {};
            options = oscar.availableOutgoingBitrate;
            verify = verify != options;
            golf = 0;
            if(!verify) { _fun00008_ip = 1783; continue _fun00007 }
 1780:
            golf = options;
 1783:
            mike['availableOutgoingBitrate'] = golf;
            golf = oscar.bytesReceived;
            mike['bytesReceived'] = golf;
            oscar = oscar.bytesSent;
            mike['bytesSent'] = oscar;
            mike['ping'] = report;
            entity['transport'] = mike;
            mike = {};
            mike['inbound'] = tango;
            mike['outbound'] = zulu;
            entity['rtp'] = mike;
            return entity;
 1839:
            entity = null;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();