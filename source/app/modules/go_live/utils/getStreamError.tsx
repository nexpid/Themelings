// app/modules/go_live/utils/getStreamError.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function() { // Original name: getWarningFrameRate
        _fun75577: for(var _fun75577_ip = 0; ; ) switch(_fun75577_ip) {
 0:
            mike = arguments[0];
            entity = undefined;
            if(!(mike === entity)) { _fun75577_ip = 12; continue _fun75577 }
 9:
            mike = 30;
 12:
            entity = 5;
            if(!(!(mike <= entity))) { _fun75577_ip = 44; continue _fun75577 }
 19:
            entity = 15;
            if(!(!(mike <= entity))) { _fun75577_ip = 35; continue _fun75577 }
 26:
            entity = _closure1_slot3;
            _fun75577_ip = 42; continue _fun75577;
 35:
            entity = _closure1_slot4;
 42:
            _fun75577_ip = 51; continue _fun75577;
 44:
            entity = _closure1_slot5;
 51:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar) { // Original name: getAverage
        _fun75578: for(var _fun75578_ip = 0; ; ) switch(_fun75578_ip) {
 0:
            oscar = argFoo;
            mike = {'packetsSentOrReceived': 0, 'packetsLost': 0, 'packetLossRate': 0, 'frameRate': 0, 'resolution': 0, 'numDatapoints': 0};
            zulu = 0;
            var _closure2_slot0 = mike;
            report = oscar.slice;
            golf = -1;
            entity = argBar;
            entity = golf * entity;
            oscar = report.bind(oscar)(entity);
            report = oscar.filter;
            options = _closure1_slot0;
            golf = _closure1_slot1;
            entity = 1;
            golf = golf[entity];
            entity = undefined;
            entity = options.bind(entity)(golf);
            entity = entity.isNotNullish;
            entity = report.bind(oscar)(entity);
            report = entity.length;
            if(!(zulu !== report)) { _fun75578_ip = 228; continue _fun75578 }
 101:
            report = entity.forEach;
            tango = function(argFoo, argBar, argBaz) {
                _fun75579: for(var _fun75579_ip = 0; ; ) switch(_fun75579_ip) {
 0:
                    entity = argFoo;
                    verify = argBar;
                    options = argBaz;
                    tango = _closure2_slot0;
                    oscar = tango.packetsSentOrReceived;
                    report = 0;
                    golf = verify > report;
                    zulu = 0;
                    if(!golf) { _fun75579_ip = 64; continue _fun75579 }
 33:
                    golf = options[verify];
                    offset = golf.packetsSentOrReceived;
                    golf = 1;
                    golf = verify - golf;
                    golf = options[golf];
                    golf = golf.packetsSentOrReceived;
                    zulu = offset - golf;
 64:
                    zulu = oscar + zulu;
                    tango['packetsSentOrReceived'] = zulu;
                    tango = _closure2_slot0;
                    zulu = tango.packetsLost;
                    oscar = verify > report;
                    report = 0;
                    if(!oscar) { _fun75579_ip = 124; continue _fun75579 }
 93:
                    oscar = options[verify];
                    golf = oscar.packetsLost;
                    oscar = 1;
                    oscar = verify - oscar;
                    oscar = options[oscar];
                    oscar = oscar.packetsLost;
                    report = golf - oscar;
 124:
                    zulu = zulu + report;
                    tango['packetsLost'] = zulu;
                    mike = _closure2_slot0;
                    tango = mike.frameRate;
                    zulu = entity.frameRate;
                    zulu = tango + zulu;
                    mike['frameRate'] = zulu;
                    zulu = mike.resolution;
                    entity = entity.resolution;
                    entity = zulu + entity;
                    mike['resolution'] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            tango = report.bind(entity)(tango);
            zulu = entity[zulu];
            tango = zulu.type;
            zulu = entity.length;
            entity = {};
            entity['type'] = tango;
            tango = mike.packetsSentOrReceived;
            entity['packetsSentOrReceived'] = tango;
            tango = mike.packetsLost;
            entity['packetsLost'] = tango;
            report = mike.packetsLost;
            oscar = mike.packetsLost;
            tango = mike.packetsSentOrReceived;
            tango = oscar + tango;
            tango = report / tango;
            entity['packetLossRate'] = tango;
            tango = mike.frameRate;
            tango = tango / zulu;
            entity['frameRate'] = tango;
            tango = mike.resolution;
            tango = tango / zulu;
            entity['resolution'] = tango;
            entity['numDatapoints'] = zulu;
            return entity;
 228:
            entity = {};
            zulu = 'streamer';
            entity['type'] = zulu;
            offset = entity;
            verify = mike;
            mike = copyDataProperties(offset, verify);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar) { // Original name: getPerfErrorFromStats
        _fun75580: for(var _fun75580_ip = 0; ; ) switch(_fun75580_ip) {
 0:
            mike = argFoo;
            tango = argBar;
            zulu = mike.type;
            entity = 'streamer';
            if(!(entity !== zulu)) { _fun75580_ip = 228; continue _fun75580 }
 24:
            zulu = mike.packetLossRate;
            entity = 100;
            report = entity * zulu;
            zulu = _closure1_slot6;
            if(!(!(report > zulu))) { _fun75580_ip = 149; continue _fun75580 }
 48:
            report = mike.frameRate;
            zulu = _closure1_slot9;
            golf = undefined;
            zulu = zulu.bind(golf)(tango);
            if(!(report <= zulu)) { _fun75580_ip = 273; continue _fun75580 }
 72:
            oscar = _closure1_slot8;
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            zulu = 3;
            report = offset[zulu];
            report = verify.bind(golf)(report);
            options = report.intl;
            report = options.string;
            zulu = offset[zulu];
            zulu = verify.bind(golf)(zulu);
            zulu = zulu.t;
            zulu = zulu.BcOif3;
            report = report.bind(options)(zulu);
            zulu = _closure1_slot7;
            zulu = zulu.FRAME_RATE_NETWORK;
            zulu = oscar.bind(golf)(report, zulu);
            return zulu;
 149:
            oscar = _closure1_slot8;
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            zulu = 3;
            golf = offset[zulu];
            report = undefined;
            golf = verify.bind(report)(golf);
            options = golf.intl;
            golf = options.string;
            zulu = offset[zulu];
            zulu = verify.bind(report)(zulu);
            zulu = zulu.t;
            zulu = zulu.BcOif3;
            zulu = golf.bind(options)(zulu);
            entity = _closure1_slot7;
            entity = entity.PACKET_LOSS;
            entity = oscar.bind(report)(zulu, entity);
            return entity;
 228:
            zulu = mike.packetLossRate;
            entity = 100;
            report = entity * zulu;
            zulu = _closure1_slot6;
            if(!(!(report > zulu))) { _fun75580_ip = 354; continue _fun75580 }
 252:
            zulu = mike.frameRate;
            mike = _closure1_slot9;
            report = undefined;
            mike = mike.bind(report)(tango);
            if(!(!(zulu <= mike))) { _fun75580_ip = 277; continue _fun75580 }
 273:
            mike = null;
            return mike;
 277:
            tango = _closure1_slot8;
            golf = _closure1_slot0;
            options = _closure1_slot1;
            mike = 3;
            zulu = options[mike];
            zulu = golf.bind(report)(zulu);
            oscar = zulu.intl;
            zulu = oscar.string;
            mike = options[mike];
            mike = golf.bind(report)(mike);
            mike = mike.t;
            mike = mike.1f1LHh;
            zulu = zulu.bind(oscar)(mike);
            mike = _closure1_slot7;
            mike = mike.FRAME_RATE_INPUT;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 354:
            tango = _closure1_slot8;
            golf = _closure1_slot0;
            options = _closure1_slot1;
            mike = 3;
            report = options[mike];
            zulu = undefined;
            report = golf.bind(zulu)(report);
            oscar = report.intl;
            report = oscar.string;
            mike = options[mike];
            mike = golf.bind(zulu)(mike);
            mike = mike.t;
            mike = mike.1f1LHh;
            mike = report.bind(oscar)(mike);
            entity = _closure1_slot7;
            entity = entity.PACKET_LOSS;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.RTCConnectionQuality;
    var _closure1_slot2 = tango;
    tango = 15;
    var _closure1_slot3 = tango;
    tango = 10;
    var _closure1_slot4 = tango;
    golf = 3;
    var _closure1_slot5 = golf;
    var _closure1_slot6 = tango;
    tango = {};
    golf = 'Packet Loss';
    tango['PACKET_LOSS'] = golf;
    golf = 'Frame Rate Encode';
    tango['FRAME_RATE_INPUT'] = golf;
    golf = 'Frame Rate Decode';
    tango['FRAME_RATE_NETWORK'] = golf;
    golf = 'Soundshare Failed';
    tango['SOUNDSHARE_FAILED'] = golf;
    golf = 'Bad Connection';
    tango['BAD_CONNECTION'] = golf;
    var _closure1_slot7 = tango;
    tango = 2;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.cachedFunction;
    tango = function(argFoo, argBar) {
        entity = {};
        mike = argFoo;
        entity['message'] = mike;
        mike = argBar;
        entity['errorType'] = mike;
        return entity;
    };
    tango = golf.bind(options)(tango);
    var _closure1_slot8 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/go_live/utils/getStreamError.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz, argCorge) { // Original name: getStreamError
        _fun75582: for(var _fun75582_ip = 0; ; ) switch(_fun75582_ip) {
 0:
            verify = argBar;
            oscar = argCorge;
            entity = argBaz;
            if(entity) { _fun75582_ip = 215; continue _fun75582 }
 15:
            mike = null;
            if(!(mike != verify)) { _fun75582_ip = 58; continue _fun75582 }
 21:
            tango = _closure1_slot10;
            report = undefined;
            golf = 5;
            options = tango.bind(report)(verify, golf);
            entity = 30;
            tango = tango.bind(report)(verify, entity);
            entity = tango.numDatapoints;
            if(!(!(entity >= golf))) { _fun75582_ip = 159; continue _fun75582 }
 58:
            entity = _closure1_slot2;
            offset = entity.BAD;
            verify = argFoo;
            entity = null;
            if(!(verify === offset)) { _fun75582_ip = 157; continue _fun75582 }
 80:
            yankee = _closure1_slot8;
            backup = _closure1_slot0;
            kilo = _closure1_slot1;
            verify = 3;
            romeo = kilo[verify];
            offset = undefined;
            romeo = backup.bind(offset)(romeo);
            foxtrot = romeo.intl;
            romeo = foxtrot.string;
            verify = kilo[verify];
            verify = backup.bind(offset)(verify);
            verify = verify.t;
            verify = verify.Ic588P;
            verify = romeo.bind(foxtrot)(verify);
            golf = _closure1_slot7;
            golf = golf.BAD_CONNECTION;
            entity = yankee.bind(offset)(verify, golf);
 157:
            return entity;
 159:
            golf = _closure1_slot11;
            verify = mike == oscar;
            entity = undefined;
            if(verify) { _fun75582_ip = 178; continue _fun75582 }
 172:
            entity = oscar.maxFrameRate;
 178:
            entity = golf.bind(report)(options, entity);
            if(!(mike == entity)) { _fun75582_ip = 213; continue _fun75582 }
 188:
            zulu = _closure1_slot11;
            golf = mike == oscar;
            mike = undefined;
            if(golf) { _fun75582_ip = 207; continue _fun75582 }
 201:
            mike = oscar.maxFrameRate;
 207:
            entity = zulu.bind(report)(tango, mike);
 213:
            return entity;
 215:
            tango = _closure1_slot8;
            golf = _closure1_slot0;
            options = _closure1_slot1;
            mike = 3;
            report = options[mike];
            zulu = undefined;
            report = golf.bind(zulu)(report);
            oscar = report.intl;
            report = oscar.string;
            mike = options[mike];
            mike = golf.bind(zulu)(mike);
            mike = mike.t;
            mike = mike.9lcycn;
            mike = report.bind(oscar)(mike);
            entity = _closure1_slot7;
            entity = entity.SOUNDSHARE_FAILED;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();