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
            if(!(!(michal <= entity))) { _fun00002_ip = 60; continue _fun00001 }
 19:
            entity = 15;
            if(!(!(michal <= entity))) { _fun00002_ip = 51; continue _fun00001 }
 26:
            entity = 30;
            if(!(!(michal <= entity))) { _fun00002_ip = 42; continue _fun00001 }
 33:
            entity = _closure1_slot3;
            _fun00002_ip = 49; continue _fun00001;
 42:
            entity = _closure1_slot4;
 49:
            _fun00002_ip = 58; continue _fun00001;
 51:
            entity = _closure1_slot5;
 58:
            _fun00002_ip = 67; continue _fun00001;
 60:
            entity = _closure1_slot6;
 67:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
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
            if(!(zuuluu !== report)) { _fun00004_ip = 228; continue _fun00003 }
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
 228:
            entity = {};
            zuuluu = 'streamer';
            entity['type'] = zuuluu;
            offset = entity;
            verify = michal;
            michal = copyDataProperties(offset, verify);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar) { // Original name: getPerfErrorFromStats
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            tangon = argBar;
            zuuluu = michal.type;
            entity = 'streamer';
            if(!(entity !== zuuluu)) { _fun00008_ip = 281; continue _fun00007 }
 24:
            zuuluu = michal.packetLossRate;
            entity = 100;
            report = entity * zuuluu;
            zuuluu = _closure1_slot7;
            if(!(!(report > zuuluu))) { _fun00008_ip = 177; continue _fun00007 }
 51:
            report = michal.frameRate;
            zuuluu = _closure1_slot10;
            option = undefined;
            zuuluu = zuuluu.bind(option)(tangon);
            if(!(report <= zuuluu)) { _fun00008_ip = 329; continue _fun00007 }
 75:
            golfie = _closure1_slot9;
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            zuuluu = 3;
            report = offset[zuuluu];
            report = verify.bind(option)(report);
            oscard = report.intl;
            report = oscard.string;
            zuuluu = offset[zuuluu];
            zuuluu = verify.bind(option)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.BcOif3;
            oscard = report.bind(oscard)(zuuluu);
            zuuluu = _closure1_slot8;
            report = zuuluu.FRAME_RATE_NETWORK;
            zuuluu = 4;
            zuuluu = offset[zuuluu];
            zuuluu = verify.bind(option)(zuuluu);
            zuuluu = zuuluu.AVError;
            zuuluu = zuuluu.STREAM_VIEW_LOW_FPS;
            zuuluu = golfie.bind(option)(oscard, report, zuuluu);
            return zuuluu;
 177:
            golfie = _closure1_slot9;
            option = _closure1_slot0;
            verify = _closure1_slot1;
            zuuluu = 3;
            report = verify[zuuluu];
            oscard = undefined;
            report = option.bind(oscard)(report);
            offset = report.intl;
            report = offset.string;
            zuuluu = verify[zuuluu];
            zuuluu = option.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.BcOif3;
            report = report.bind(offset)(zuuluu);
            entity = _closure1_slot8;
            zuuluu = entity.PACKET_LOSS;
            entity = 4;
            entity = verify[entity];
            entity = option.bind(oscard)(entity);
            entity = entity.AVError;
            entity = entity.STREAM_VIEW_HIGH_PACKET_LOSS;
            entity = golfie.bind(oscard)(report, zuuluu, entity);
            return entity;
 281:
            zuuluu = michal.packetLossRate;
            entity = 100;
            report = entity * zuuluu;
            zuuluu = _closure1_slot7;
            if(!(!(report > zuuluu))) { _fun00008_ip = 435; continue _fun00007 }
 308:
            zuuluu = michal.frameRate;
            michal = _closure1_slot10;
            oscard = undefined;
            michal = michal.bind(oscard)(tangon);
            if(!(!(zuuluu <= michal))) { _fun00008_ip = 333; continue _fun00007 }
 329:
            michal = null;
            return michal;
 333:
            report = _closure1_slot9;
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            michal = 3;
            zuuluu = option[michal];
            zuuluu = golfie.bind(oscard)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = option[michal];
            michal = golfie.bind(oscard)(michal);
            michal = michal.t;
            michal = michal.1f1LHh;
            tangon = zuuluu.bind(tangon)(michal);
            michal = _closure1_slot8;
            zuuluu = michal.FRAME_RATE_INPUT;
            michal = 4;
            michal = option[michal];
            michal = golfie.bind(oscard)(michal);
            michal = michal.AVError;
            michal = michal.STREAM_SEND_LOW_FPS;
            michal = report.bind(oscard)(tangon, zuuluu, michal);
            return michal;
 435:
            report = _closure1_slot9;
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 3;
            zuuluu = golfie[michal];
            tangon = undefined;
            zuuluu = oscard.bind(tangon)(zuuluu);
            option = zuuluu.intl;
            zuuluu = option.string;
            michal = golfie[michal];
            michal = oscard.bind(tangon)(michal);
            michal = michal.t;
            michal = michal.1f1LHh;
            zuuluu = zuuluu.bind(option)(michal);
            entity = _closure1_slot8;
            michal = entity.PACKET_LOSS;
            entity = 4;
            entity = golfie[entity];
            entity = oscard.bind(tangon)(entity);
            entity = entity.AVError;
            entity = entity.STREAM_SEND_HIGH_PACKET_LOSS;
            entity = report.bind(tangon)(zuuluu, michal, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
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
    tangon = 30;
    var _closure1_slot3 = tangon;
    tangon = 15;
    var _closure1_slot4 = tangon;
    tangon = 8;
    var _closure1_slot5 = tangon;
    tangon = 3;
    var _closure1_slot6 = tangon;
    tangon = 10;
    var _closure1_slot7 = tangon;
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
    var _closure1_slot8 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.cachedFunction;
    tangon = function(argFoo, argBar, argBaz) {
        entity = {};
        michal = argFoo;
        entity['message'] = michal;
        michal = argBar;
        entity['errorType'] = michal;
        michal = argBaz;
        entity['avError'] = michal;
        return entity;
    };
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 5;
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
            if(entity) { _fun00010_ip = 245; continue _fun00009 }
 15:
            michal = null;
            if(!(michal != verify)) { _fun00010_ip = 61; continue _fun00009 }
 21:
            tangon = _closure1_slot11;
            report = undefined;
            golfie = 5;
            option = tangon.bind(report)(verify, golfie);
            entity = 30;
            tangon = tangon.bind(report)(verify, entity);
            entity = tangon.numDatapoints;
            if(!(!(entity >= golfie))) { _fun00010_ip = 189; continue _fun00009 }
 61:
            entity = _closure1_slot2;
            offset = entity.BAD;
            verify = argFoo;
            entity = null;
            if(!(verify === offset)) { _fun00010_ip = 187; continue _fun00009 }
 83:
            romeon = _closure1_slot9;
            foxtra = _closure1_slot0;
            backup = _closure1_slot1;
            verify = 3;
            offset = backup[verify];
            yankee = undefined;
            offset = foxtra.bind(yankee)(offset);
            kiloes = offset.intl;
            offset = kiloes.string;
            verify = backup[verify];
            verify = foxtra.bind(yankee)(verify);
            verify = verify.t;
            verify = verify.Ic588P;
            offset = offset.bind(kiloes)(verify);
            golfie = _closure1_slot8;
            verify = golfie.BAD_CONNECTION;
            golfie = 4;
            golfie = backup[golfie];
            golfie = foxtra.bind(yankee)(golfie);
            golfie = golfie.AVError;
            golfie = golfie.STREAM_BAD_NETWORK_QUALITY;
            entity = romeon.bind(yankee)(offset, verify, golfie);
 187:
            return entity;
 189:
            golfie = _closure1_slot12;
            verify = michal == oscard;
            entity = undefined;
            if(verify) { _fun00010_ip = 208; continue _fun00009 }
 202:
            entity = oscard.maxFrameRate;
 208:
            entity = golfie.bind(report)(option, entity);
            if(!(michal == entity)) { _fun00010_ip = 243; continue _fun00009 }
 218:
            zuuluu = _closure1_slot12;
            golfie = michal == oscard;
            michal = undefined;
            if(golfie) { _fun00010_ip = 237; continue _fun00009 }
 231:
            michal = oscard.maxFrameRate;
 237:
            entity = zuuluu.bind(report)(tangon, michal);
 243:
            return entity;
 245:
            report = _closure1_slot9;
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 3;
            zuuluu = golfie[michal];
            tangon = undefined;
            zuuluu = oscard.bind(tangon)(zuuluu);
            option = zuuluu.intl;
            zuuluu = option.string;
            michal = golfie[michal];
            michal = oscard.bind(tangon)(michal);
            michal = michal.t;
            michal = michal.9lcycn;
            zuuluu = zuuluu.bind(option)(michal);
            entity = _closure1_slot8;
            michal = entity.SOUNDSHARE_FAILED;
            entity = 4;
            entity = golfie[entity];
            entity = oscard.bind(tangon)(entity);
            entity = entity.AVError;
            entity = entity.STREAM_SOUNDSHARE_FAILED;
            entity = report.bind(tangon)(zuuluu, michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();