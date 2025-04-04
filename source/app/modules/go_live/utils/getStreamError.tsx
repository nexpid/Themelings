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
    var _closure1_slot12 = entity;
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
            entity = 2;
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
            zuuluu = 'sender';
            entity['type'] = zuuluu;
            offset = entity;
            verify = michal;
            michal = copyDataProperties(offset, verify);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: getStreamErrorFromStats
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            tangon = argBar;
            zuuluu = michal.type;
            entity = 'sender';
            if(!(entity !== zuuluu)) { _fun00008_ip = 288; continue _fun00007 }
 22:
            entity = argBaz;
            if(!entity) { _fun00008_ip = 336; continue _fun00007 }
 31:
            zuuluu = michal.packetLossRate;
            entity = 100;
            report = entity * zuuluu;
            zuuluu = _closure1_slot7;
            if(!(!(report > zuuluu))) { _fun00008_ip = 184; continue _fun00007 }
 58:
            report = michal.frameRate;
            zuuluu = _closure1_slot12;
            option = undefined;
            zuuluu = zuuluu.bind(option)(tangon);
            if(!(report <= zuuluu)) { _fun00008_ip = 336; continue _fun00007 }
 82:
            golfie = _closure1_slot11;
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            zuuluu = 4;
            report = offset[zuuluu];
            report = verify.bind(option)(report);
            oscard = report.intl;
            report = oscard.string;
            zuuluu = offset[zuuluu];
            zuuluu = verify.bind(option)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.BcOif3;
            oscard = report.bind(oscard)(zuuluu);
            zuuluu = _closure1_slot10;
            report = zuuluu.FRAME_RATE_NETWORK;
            zuuluu = 5;
            zuuluu = offset[zuuluu];
            zuuluu = verify.bind(option)(zuuluu);
            zuuluu = zuuluu.AVError;
            zuuluu = zuuluu.STREAM_VIEW_LOW_FPS;
            zuuluu = golfie.bind(option)(oscard, report, zuuluu);
            return zuuluu;
 184:
            golfie = _closure1_slot11;
            option = _closure1_slot0;
            verify = _closure1_slot1;
            zuuluu = 4;
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
            entity = _closure1_slot10;
            zuuluu = entity.PACKET_LOSS;
            entity = 5;
            entity = verify[entity];
            entity = option.bind(oscard)(entity);
            entity = entity.AVError;
            entity = entity.STREAM_VIEW_HIGH_PACKET_LOSS;
            entity = golfie.bind(oscard)(report, zuuluu, entity);
            return entity;
 288:
            zuuluu = michal.packetLossRate;
            entity = 100;
            report = entity * zuuluu;
            zuuluu = _closure1_slot7;
            if(!(!(report > zuuluu))) { _fun00008_ip = 442; continue _fun00007 }
 315:
            zuuluu = michal.frameRate;
            michal = _closure1_slot12;
            oscard = undefined;
            michal = michal.bind(oscard)(tangon);
            if(!(!(zuuluu <= michal))) { _fun00008_ip = 340; continue _fun00007 }
 336:
            michal = null;
            return michal;
 340:
            report = _closure1_slot11;
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            michal = 4;
            zuuluu = option[michal];
            zuuluu = golfie.bind(oscard)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = option[michal];
            michal = golfie.bind(oscard)(michal);
            michal = michal.t;
            michal = michal.1f1LHh;
            tangon = zuuluu.bind(tangon)(michal);
            michal = _closure1_slot10;
            zuuluu = michal.FRAME_RATE_INPUT;
            michal = 5;
            michal = option[michal];
            michal = golfie.bind(oscard)(michal);
            michal = michal.AVError;
            michal = michal.STREAM_SEND_LOW_FPS;
            michal = report.bind(oscard)(tangon, zuuluu, michal);
            return michal;
 442:
            report = _closure1_slot11;
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 4;
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
            entity = _closure1_slot10;
            michal = entity.PACKET_LOSS;
            entity = 5;
            entity = golfie[entity];
            entity = oscard.bind(tangon)(entity);
            entity = entity.AVError;
            entity = entity.STREAM_SEND_HIGH_PACKET_LOSS;
            entity = report.bind(tangon)(zuuluu, michal, entity);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: getVideoErrorFromStats
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            report = michal.type;
            zuuluu = 'sender';
            entity = null;
            if(!(zuuluu === report)) { _fun00010_ip = 147; continue _fun00009 }
 21:
            report = michal.frameRate;
            zuuluu = _closure1_slot8;
            zuuluu = report <= zuuluu;
            entity = null;
            if(!zuuluu) { _fun00010_ip = 147; continue _fun00009 }
 43:
            oscard = _closure1_slot11;
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            zuuluu = 4;
            tangon = option[zuuluu];
            report = undefined;
            tangon = golfie.bind(report)(tangon);
            verify = tangon.intl;
            tangon = verify.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(report)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.YKVlCw;
            tangon = tangon.bind(verify)(zuuluu);
            michal = _closure1_slot10;
            zuuluu = michal.FRAME_RATE_INPUT;
            michal = 5;
            michal = option[michal];
            michal = golfie.bind(report)(michal);
            michal = michal.AVError;
            michal = michal.CAMERA_SEND_LOW_FPS;
            entity = oscard.bind(report)(tangon, zuuluu, michal);
 147:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
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
    option = 10;
    var _closure1_slot7 = option;
    var _closure1_slot8 = option;
    golfie = 1;
    verify = oscard[golfie];
    golfie = argBaz;
    golfie = golfie.bind(entity)(verify);
    golfie = golfie.Millis;
    golfie = golfie.SECOND;
    golfie = option * golfie;
    var _closure1_slot9 = golfie;
    golfie = {};
    option = 'Packet Loss';
    golfie['PACKET_LOSS'] = option;
    option = 'Frame Rate Encode';
    golfie['FRAME_RATE_INPUT'] = option;
    option = 'Frame Rate Decode';
    golfie['FRAME_RATE_NETWORK'] = option;
    option = 'Soundshare Failed';
    golfie['SOUNDSHARE_FAILED'] = option;
    option = 'Bad Connection';
    golfie['BAD_CONNECTION'] = option;
    var _closure1_slot10 = golfie;
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
    var _closure1_slot11 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/go_live/utils/getStreamError.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: getStreamError
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argBar;
            golfie = argCor;
            entity = argBaz;
            if(entity) { _fun00012_ip = 353; continue _fun00011 }
 15:
            michal = null;
            if(!(michal != report)) { _fun00012_ip = 167; continue _fun00011 }
 24:
            tangon = _closure1_slot13;
            oscard = undefined;
            option = 5;
            verify = tangon.bind(oscard)(report, option);
            entity = 30;
            report = tangon.bind(oscard)(report, entity);
            tangon = _closure1_slot0;
            entity = _closure1_slot1;
            romeon = 6;
            entity = entity[romeon];
            entity = tangon.bind(oscard)(entity);
            tangon = entity.WindowVisibilityVideoManager;
            entity = tangon.isIncomingVideoEnabled;
            tangon = entity.bind(tangon)();
            if(!tangon) { _fun00012_ip = 154; continue _fun00011 }
 90:
            entity = global;
            offset = entity.Date;
            entity = offset.now;
            offset = entity.bind(offset)();
            yankee = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[romeon];
            entity = yankee.bind(oscard)(entity);
            yankee = entity.WindowVisibilityVideoManager;
            entity = yankee.lastIncomingVideoEnabledChangeTime;
            entity = entity.bind(yankee)();
            offset = offset - entity;
            entity = _closure1_slot9;
            tangon = offset > entity;
 154:
            entity = report.numDatapoints;
            if(!(!(entity >= option))) { _fun00012_ip = 295; continue _fun00011 }
 167:
            entity = _closure1_slot2;
            yankee = entity.BAD;
            offset = argFoo;
            entity = null;
            if(!(offset === yankee)) { _fun00012_ip = 293; continue _fun00011 }
 189:
            foxtra = _closure1_slot11;
            backup = _closure1_slot0;
            kiloes = _closure1_slot1;
            offset = 4;
            yankee = kiloes[offset];
            romeon = undefined;
            yankee = backup.bind(romeon)(yankee);
            sizing = yankee.intl;
            yankee = sizing.string;
            offset = kiloes[offset];
            offset = backup.bind(romeon)(offset);
            offset = offset.t;
            offset = offset.Ic588P;
            yankee = yankee.bind(sizing)(offset);
            option = _closure1_slot10;
            offset = option.BAD_CONNECTION;
            option = 5;
            option = kiloes[option];
            option = backup.bind(romeon)(option);
            option = option.AVError;
            option = option.STREAM_BAD_NETWORK_QUALITY;
            entity = foxtra.bind(romeon)(yankee, offset, option);
 293:
            return entity;
 295:
            option = _closure1_slot14;
            offset = michal == golfie;
            entity = undefined;
            if(offset) { _fun00012_ip = 314; continue _fun00011 }
 308:
            entity = golfie.maxFrameRate;
 314:
            entity = option.bind(oscard)(verify, entity, tangon);
            if(!(michal == entity)) { _fun00012_ip = 351; continue _fun00011 }
 325:
            zuuluu = _closure1_slot14;
            option = michal == golfie;
            michal = undefined;
            if(option) { _fun00012_ip = 344; continue _fun00011 }
 338:
            michal = golfie.maxFrameRate;
 344:
            entity = zuuluu.bind(oscard)(report, michal, tangon);
 351:
            return entity;
 353:
            report = _closure1_slot11;
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 4;
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
            entity = _closure1_slot10;
            michal = entity.SOUNDSHARE_FAILED;
            entity = 5;
            entity = golfie[entity];
            entity = oscard.bind(tangon)(entity);
            entity = entity.AVError;
            entity = entity.STREAM_SOUNDSHARE_FAILED;
            entity = report.bind(tangon)(zuuluu, michal, entity);
            return entity;
        }
    };
    zuuluu['getStreamError'] = tangon;
    michal = function(argFoo) { // Original name: getVideoError
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            option = argFoo;
            report = null;
            if(!(report != option)) { _fun00014_ip = 46; continue _fun00013 }
 9:
            zuuluu = _closure1_slot13;
            tangon = undefined;
            golfie = 5;
            oscard = zuuluu.bind(tangon)(option, golfie);
            entity = 30;
            zuuluu = zuuluu.bind(tangon)(option, entity);
            entity = zuuluu.numDatapoints;
            if(!(!(entity >= golfie))) { _fun00014_ip = 48; continue _fun00013 }
 46:
            return report;
 48:
            entity = _closure1_slot15;
            entity = entity.bind(tangon)(oscard);
            if(!(report == entity)) { _fun00014_ip = 70; continue _fun00013 }
 61:
            michal = _closure1_slot15;
            entity = michal.bind(tangon)(zuuluu);
 70:
            return entity;
        }
    };
    zuuluu['getVideoError'] = michal;
    return entity;
})();