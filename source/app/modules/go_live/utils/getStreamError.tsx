// app/modules/go_live/utils/getStreamError.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: getWarningFrameRate
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = arguments[0];
            entity = undefined;
            if(!(michal === entity)) { _fun00002_ip = 12; continue _fun00001 }
 9:
            michal = 30;
 12:
            entity = 5;
            if(!(!(michal <= entity))) { _fun00002_ip = 44; continue _fun00001 }
 19:
            entity = 15;
            if(!(!(michal <= entity))) { _fun00002_ip = 35; continue _fun00001 }
 26:
            entity = _closure1_slot3;
            _fun00002_ip = 42; continue _fun00001;
 35:
            entity = _closure1_slot4;
 42:
            _fun00002_ip = 51; continue _fun00001;
 44:
            entity = _closure1_slot5;
 51:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar) { // Original name: getAverage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            michal = {'packetsSentOrReceived': 0, 'packetsLost': 0, 'packetLossRate': 0, 'frameRate': 0, 'resolution': 0, 'numDatapoints': 0};
            zuuluu = 0;
            var _closure2_slot0 = michal;
            report = oscard.slice;
            golfie = -1;
            entity = argBar;
            entity = golfie * entity;
            oscard = report.bind(oscard)(entity);
            report = oscard.filter;
            option = _closure1_slot0;
            golfie = _closure1_slot1;
            entity = 1;
            golfie = golfie[entity];
            entity = undefined;
            entity = option.bind(entity)(golfie);
            entity = entity.isNotNullish;
            entity = report.bind(oscard)(entity);
            report = entity.length;
            if(!(zuuluu !== report)) { _fun00004_ip = 226; continue _fun00003 }
 101:
            report = entity.forEach;
            tangon = function(argFoo, argBar, argBaz) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    verify = argBar;
                    option = argBaz;
                    tangon = _closure2_slot0;
                    oscard = tangon.packetsSentOrReceived;
                    report = 0;
                    golfie = verify > report;
                    zuuluu = 0;
                    if(!golfie) { _fun00006_ip = 64; continue _fun00005 }
 33:
                    golfie = option[verify];
                    offset = golfie.packetsSentOrReceived;
                    golfie = 1;
                    golfie = verify - golfie;
                    golfie = option[golfie];
                    golfie = golfie.packetsSentOrReceived;
                    zuuluu = offset - golfie;
 64:
                    zuuluu = oscard + zuuluu;
                    tangon['packetsSentOrReceived'] = zuuluu;
                    tangon = _closure2_slot0;
                    zuuluu = tangon.packetsLost;
                    oscard = verify > report;
                    report = 0;
                    if(!oscard) { _fun00006_ip = 124; continue _fun00005 }
 93:
                    oscard = option[verify];
                    golfie = oscard.packetsLost;
                    oscard = 1;
                    oscard = verify - oscard;
                    oscard = option[oscard];
                    oscard = oscard.packetsLost;
                    report = golfie - oscard;
 124:
                    zuuluu = zuuluu + report;
                    tangon['packetsLost'] = zuuluu;
                    michal = _closure2_slot0;
                    tangon = michal.frameRate;
                    zuuluu = entity.frameRate;
                    zuuluu = tangon + zuuluu;
                    michal['frameRate'] = zuuluu;
                    zuuluu = michal.resolution;
                    entity = entity.resolution;
                    entity = zuuluu + entity;
                    michal['resolution'] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            tangon = report.bind(entity)(tangon);
            zuuluu = entity[zuuluu];
            tangon = zuuluu.type;
            zuuluu = entity.length;
            entity = {};
            entity['type'] = tangon;
            tangon = michal.packetsSentOrReceived;
            entity['packetsSentOrReceived'] = tangon;
            tangon = michal.packetsLost;
            entity['packetsLost'] = tangon;
            report = michal.packetsLost;
            oscard = michal.packetsLost;
            tangon = michal.packetsSentOrReceived;
            tangon = oscard + tangon;
            tangon = report / tangon;
            entity['packetLossRate'] = tangon;
            tangon = michal.frameRate;
            tangon = tangon / zuuluu;
            entity['frameRate'] = tangon;
            tangon = michal.resolution;
            tangon = tangon / zuuluu;
            entity['resolution'] = tangon;
            entity['numDatapoints'] = zuuluu;
            return entity;
 226:
            entity = {};
            zuuluu = 'streamer';
            entity['type'] = zuuluu;
            offset = entity;
            verify = michal;
            michal = copyDataProperties(offset, verify);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar) { // Original name: getPerfErrorFromStats
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            tangon = argBar;
            zuuluu = michal.type;
            entity = 'streamer';
            if(!(entity !== zuuluu)) { _fun00008_ip = 228; continue _fun00007 }
 24:
            zuuluu = michal.packetLossRate;
            entity = 100;
            report = entity * zuuluu;
            zuuluu = _closure1_slot6;
            if(!(!(report > zuuluu))) { _fun00008_ip = 149; continue _fun00007 }
 48:
            report = michal.frameRate;
            zuuluu = _closure1_slot9;
            golfie = undefined;
            zuuluu = zuuluu.bind(golfie)(tangon);
            if(!(report <= zuuluu)) { _fun00008_ip = 273; continue _fun00007 }
 72:
            oscard = _closure1_slot8;
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            zuuluu = 3;
            report = offset[zuuluu];
            report = verify.bind(golfie)(report);
            option = report.intl;
            report = option.string;
            zuuluu = offset[zuuluu];
            zuuluu = verify.bind(golfie)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.BcOif3;
            report = report.bind(option)(zuuluu);
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.FRAME_RATE_NETWORK;
            zuuluu = oscard.bind(golfie)(report, zuuluu);
            return zuuluu;
 149:
            oscard = _closure1_slot8;
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            zuuluu = 3;
            golfie = offset[zuuluu];
            report = undefined;
            golfie = verify.bind(report)(golfie);
            option = golfie.intl;
            golfie = option.string;
            zuuluu = offset[zuuluu];
            zuuluu = verify.bind(report)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.BcOif3;
            zuuluu = golfie.bind(option)(zuuluu);
            entity = _closure1_slot7;
            entity = entity.PACKET_LOSS;
            entity = oscard.bind(report)(zuuluu, entity);
            return entity;
 228:
            zuuluu = michal.packetLossRate;
            entity = 100;
            report = entity * zuuluu;
            zuuluu = _closure1_slot6;
            if(!(!(report > zuuluu))) { _fun00008_ip = 354; continue _fun00007 }
 252:
            zuuluu = michal.frameRate;
            michal = _closure1_slot9;
            report = undefined;
            michal = michal.bind(report)(tangon);
            if(!(!(zuuluu <= michal))) { _fun00008_ip = 277; continue _fun00007 }
 273:
            michal = null;
            return michal;
 277:
            tangon = _closure1_slot8;
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            michal = 3;
            zuuluu = option[michal];
            zuuluu = golfie.bind(report)(zuuluu);
            oscard = zuuluu.intl;
            zuuluu = oscard.string;
            michal = option[michal];
            michal = golfie.bind(report)(michal);
            michal = michal.t;
            michal = michal.1f1LHh;
            zuuluu = zuuluu.bind(oscard)(michal);
            michal = _closure1_slot7;
            michal = michal.FRAME_RATE_INPUT;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 354:
            tangon = _closure1_slot8;
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            michal = 3;
            report = option[michal];
            zuuluu = undefined;
            report = golfie.bind(zuuluu)(report);
            oscard = report.intl;
            report = oscard.string;
            michal = option[michal];
            michal = golfie.bind(zuuluu)(michal);
            michal = michal.t;
            michal = michal.1f1LHh;
            michal = report.bind(oscard)(michal);
            entity = _closure1_slot7;
            entity = entity.PACKET_LOSS;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.RTCConnectionQuality;
    var _closure1_slot2 = tangon;
    tangon = 15;
    var _closure1_slot3 = tangon;
    tangon = 10;
    var _closure1_slot4 = tangon;
    golfie = 3;
    var _closure1_slot5 = golfie;
    var _closure1_slot6 = tangon;
    tangon = {};
    golfie = 'Packet Loss';
    tangon['PACKET_LOSS'] = golfie;
    golfie = 'Frame Rate Encode';
    tangon['FRAME_RATE_INPUT'] = golfie;
    golfie = 'Frame Rate Decode';
    tangon['FRAME_RATE_NETWORK'] = golfie;
    golfie = 'Soundshare Failed';
    tangon['SOUNDSHARE_FAILED'] = golfie;
    golfie = 'Bad Connection';
    tangon['BAD_CONNECTION'] = golfie;
    var _closure1_slot7 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.cachedFunction;
    tangon = function(argFoo, argBar) {
        entity = {};
        michal = argFoo;
        entity['message'] = michal;
        michal = argBar;
        entity['errorType'] = michal;
        return entity;
    };
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/go_live/utils/getStreamError.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz, argCor) { // Original name: getStreamError
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            verify = argBar;
            oscard = argCor;
            entity = argBaz;
            if(entity) { _fun00010_ip = 217; continue _fun00009 }
 15:
            michal = null;
            if(!(michal != verify)) { _fun00010_ip = 58; continue _fun00009 }
 21:
            tangon = _closure1_slot10;
            report = undefined;
            golfie = 5;
            option = tangon.bind(report)(verify, golfie);
            entity = 30;
            tangon = tangon.bind(report)(verify, entity);
            entity = tangon.numDatapoints;
            if(!(!(entity >= golfie))) { _fun00010_ip = 161; continue _fun00009 }
 58:
            entity = _closure1_slot2;
            offset = entity.BAD;
            verify = argFoo;
            entity = null;
            if(!(verify === offset)) { _fun00010_ip = 159; continue _fun00009 }
 80:
            yankee = _closure1_slot8;
            backup = _closure1_slot0;
            kiloes = _closure1_slot1;
            verify = 3;
            romeon = kiloes[verify];
            offset = undefined;
            romeon = backup.bind(offset)(romeon);
            foxtra = romeon.intl;
            romeon = foxtra.string;
            verify = kiloes[verify];
            verify = backup.bind(offset)(verify);
            verify = verify.t;
            verify = verify.Ic588P;
            verify = romeon.bind(foxtra)(verify);
            golfie = _closure1_slot7;
            golfie = golfie.BAD_CONNECTION;
            entity = yankee.bind(offset)(verify, golfie);
 159:
            return entity;
 161:
            golfie = _closure1_slot11;
            verify = michal == oscard;
            entity = undefined;
            if(verify) { _fun00010_ip = 180; continue _fun00009 }
 174:
            entity = oscard.maxFrameRate;
 180:
            entity = golfie.bind(report)(option, entity);
            if(!(michal == entity)) { _fun00010_ip = 215; continue _fun00009 }
 190:
            zuuluu = _closure1_slot11;
            golfie = michal == oscard;
            michal = undefined;
            if(golfie) { _fun00010_ip = 209; continue _fun00009 }
 203:
            michal = oscard.maxFrameRate;
 209:
            entity = zuuluu.bind(report)(tangon, michal);
 215:
            return entity;
 217:
            tangon = _closure1_slot8;
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            michal = 3;
            report = option[michal];
            zuuluu = undefined;
            report = golfie.bind(zuuluu)(report);
            oscard = report.intl;
            report = oscard.string;
            michal = option[michal];
            michal = golfie.bind(zuuluu)(michal);
            michal = michal.t;
            michal = michal.9lcycn;
            michal = report.bind(oscard)(michal);
            entity = _closure1_slot7;
            entity = entity.SOUNDSHARE_FAILED;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();