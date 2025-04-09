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
            report = arguments[0];
            entity = undefined;
            if(!(report === entity)) { _fun00002_ip = 12; continue _fun00001 }
 9:
            report = 30;
 12:
            entity = 5;
            michal = report <= entity;
            entity = 3;
            if(michal) { _fun00002_ip = 57; continue _fun00001 }
 25:
            tangon = 15;
            zuuluu = report <= tangon;
            michal = 8;
            if(zuuluu) { _fun00002_ip = 54; continue _fun00001 }
 38:
            zuuluu = 30;
            report = report <= zuuluu;
            if(!report) { _fun00002_ip = 51; continue _fun00001 }
 48:
            zuuluu = tangon;
 51:
            michal = zuuluu;
 54:
            entity = michal;
 57:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar) { // Original name: getAverage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            zuuluu = {'packetsSentOrReceived': 0, 'packetsLost': 0, 'packetLossRate': 0, 'frameRate': 0, 'resolution': 0, 'numDatapoints': 0};
            michal = 0;
            var _closure2_slot0 = zuuluu;
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
            if(!(michal !== report)) { _fun00004_ip = 228; continue _fun00003 }
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
            michal = entity[michal];
            tangon = michal.type;
            michal = entity.length;
            entity = {};
            entity['type'] = tangon;
            tangon = zuuluu.packetsSentOrReceived;
            entity['packetsSentOrReceived'] = tangon;
            tangon = zuuluu.packetsLost;
            entity['packetsLost'] = tangon;
            report = zuuluu.packetsLost;
            oscard = zuuluu.packetsLost;
            tangon = zuuluu.packetsSentOrReceived;
            tangon = oscard + tangon;
            tangon = report / tangon;
            entity['packetLossRate'] = tangon;
            tangon = zuuluu.frameRate;
            tangon = tangon / michal;
            entity['frameRate'] = tangon;
            zuuluu = zuuluu.resolution;
            zuuluu = zuuluu / michal;
            entity['resolution'] = zuuluu;
            entity['numDatapoints'] = michal;
            return entity;
 228:
            entity = null;
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: getStreamErrorFromStats
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            report = argBar;
            entity = null;
            if(!(entity != michal)) { _fun00008_ip = 557; continue _fun00007 }
 15:
            tangon = michal.type;
            zuuluu = 'sender';
            if(!(zuuluu !== tangon)) { _fun00008_ip = 299; continue _fun00007 }
 31:
            zuuluu = argBaz;
            if(!zuuluu) { _fun00008_ip = 346; continue _fun00007 }
 40:
            tangon = michal.packetLossRate;
            zuuluu = 100;
            tangon = zuuluu * tangon;
            zuuluu = 10;
            if(!(!(tangon > zuuluu))) { _fun00008_ip = 192; continue _fun00007 }
 63:
            oscard = michal.frameRate;
            tangon = _closure1_slot6;
            option = undefined;
            tangon = tangon.bind(option)(report);
            if(!(oscard <= tangon)) { _fun00008_ip = 346; continue _fun00007 }
 90:
            golfie = _closure1_slot5;
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            tangon = 4;
            oscard = offset[tangon];
            oscard = verify.bind(option)(oscard);
            yankee = oscard.intl;
            oscard = yankee.string;
            tangon = offset[tangon];
            tangon = verify.bind(option)(tangon);
            tangon = tangon.t;
            tangon = tangon.BcOif3;
            oscard = oscard.bind(yankee)(tangon);
            zuuluu = _closure1_slot4;
            tangon = zuuluu.FRAME_RATE_NETWORK;
            zuuluu = 5;
            zuuluu = offset[zuuluu];
            zuuluu = verify.bind(option)(zuuluu);
            zuuluu = zuuluu.AVError;
            zuuluu = zuuluu.STREAM_VIEW_LOW_FPS;
            zuuluu = golfie.bind(option)(oscard, tangon, zuuluu);
            return zuuluu;
 192:
            option = _closure1_slot5;
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            tangon = 4;
            oscard = offset[tangon];
            golfie = undefined;
            oscard = verify.bind(golfie)(oscard);
            yankee = oscard.intl;
            oscard = yankee.string;
            tangon = offset[tangon];
            tangon = verify.bind(golfie)(tangon);
            tangon = tangon.t;
            tangon = tangon.BcOif3;
            oscard = oscard.bind(yankee)(tangon);
            zuuluu = _closure1_slot4;
            tangon = zuuluu.PACKET_LOSS;
            zuuluu = 5;
            zuuluu = offset[zuuluu];
            zuuluu = verify.bind(golfie)(zuuluu);
            zuuluu = zuuluu.AVError;
            zuuluu = zuuluu.STREAM_VIEW_HIGH_PACKET_LOSS;
            zuuluu = option.bind(golfie)(oscard, tangon, zuuluu);
            return zuuluu;
 299:
            tangon = michal.packetLossRate;
            zuuluu = 100;
            tangon = zuuluu * tangon;
            zuuluu = 10;
            if(!(!(tangon > zuuluu))) { _fun00008_ip = 450; continue _fun00007 }
 322:
            tangon = michal.frameRate;
            zuuluu = _closure1_slot6;
            oscard = undefined;
            zuuluu = zuuluu.bind(oscard)(report);
            if(!(!(tangon <= zuuluu))) { _fun00008_ip = 348; continue _fun00007 }
 346:
            return entity;
 348:
            report = _closure1_slot5;
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            zuuluu = 4;
            tangon = option[zuuluu];
            tangon = golfie.bind(oscard)(tangon);
            verify = tangon.intl;
            tangon = verify.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.1f1LHh;
            tangon = tangon.bind(verify)(zuuluu);
            michal = _closure1_slot4;
            zuuluu = michal.FRAME_RATE_INPUT;
            michal = 5;
            michal = option[michal];
            michal = golfie.bind(oscard)(michal);
            michal = michal.AVError;
            michal = michal.STREAM_SEND_LOW_FPS;
            michal = report.bind(oscard)(tangon, zuuluu, michal);
            return michal;
 450:
            oscard = _closure1_slot5;
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
            zuuluu = zuuluu.1f1LHh;
            tangon = tangon.bind(verify)(zuuluu);
            michal = _closure1_slot4;
            zuuluu = michal.PACKET_LOSS;
            michal = 5;
            michal = option[michal];
            michal = golfie.bind(report)(michal);
            michal = michal.AVError;
            michal = michal.STREAM_SEND_HIGH_PACKET_LOSS;
            michal = oscard.bind(report)(tangon, zuuluu, michal);
            return michal;
 557:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: getVideoErrorFromStats
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            zuuluu = null;
            tangon = zuuluu != michal;
            entity = null;
            if(!tangon) { _fun00010_ip = 160; continue _fun00009 }
 17:
            report = michal.type;
            tangon = 'sender';
            entity = null;
            if(!(tangon === report)) { _fun00010_ip = 160; continue _fun00009 }
 35:
            tangon = michal.frameRate;
            michal = 10;
            michal = tangon <= michal;
            entity = null;
            if(!michal) { _fun00010_ip = 160; continue _fun00009 }
 53:
            oscard = _closure1_slot5;
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
            michal = _closure1_slot4;
            zuuluu = michal.FRAME_RATE_INPUT;
            michal = 5;
            michal = option[michal];
            michal = golfie.bind(report)(michal);
            michal = michal.AVError;
            michal = michal.CAMERA_SEND_LOW_FPS;
            entity = oscard.bind(report)(tangon, zuuluu, michal);
 160:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argBaz;
    tangon = tangon.bind(entity)(golfie);
    tangon = tangon.Millis;
    golfie = tangon.SECOND;
    tangon = 10;
    tangon = tangon * golfie;
    var _closure1_slot3 = tangon;
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
    var _closure1_slot4 = tangon;
    tangon = 3;
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
    var _closure1_slot5 = tangon;
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
            if(entity) { _fun00012_ip = 357; continue _fun00011 }
 15:
            michal = null;
            if(!(michal != report)) { _fun00012_ip = 171; continue _fun00011 }
 24:
            tangon = _closure1_slot7;
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
            entity = _closure1_slot3;
            tangon = offset > entity;
 154:
            if(!(michal != report)) { _fun00012_ip = 171; continue _fun00011 }
 158:
            entity = report.numDatapoints;
            if(!(!(entity >= option))) { _fun00012_ip = 299; continue _fun00011 }
 171:
            entity = _closure1_slot2;
            yankee = entity.BAD;
            offset = argFoo;
            entity = null;
            if(!(offset === yankee)) { _fun00012_ip = 297; continue _fun00011 }
 193:
            foxtra = _closure1_slot5;
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
            option = _closure1_slot4;
            offset = option.BAD_CONNECTION;
            option = 5;
            option = kiloes[option];
            option = backup.bind(romeon)(option);
            option = option.AVError;
            option = option.STREAM_BAD_NETWORK_QUALITY;
            entity = foxtra.bind(romeon)(yankee, offset, option);
 297:
            return entity;
 299:
            option = _closure1_slot8;
            offset = michal == golfie;
            entity = undefined;
            if(offset) { _fun00012_ip = 318; continue _fun00011 }
 312:
            entity = golfie.maxFrameRate;
 318:
            entity = option.bind(oscard)(verify, entity, tangon);
            if(!(michal == entity)) { _fun00012_ip = 355; continue _fun00011 }
 329:
            zuuluu = _closure1_slot8;
            option = michal == golfie;
            michal = undefined;
            if(option) { _fun00012_ip = 348; continue _fun00011 }
 342:
            michal = golfie.maxFrameRate;
 348:
            entity = zuuluu.bind(oscard)(report, michal, tangon);
 355:
            return entity;
 357:
            report = _closure1_slot5;
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
            entity = _closure1_slot4;
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
            if(!(report != option)) { _fun00014_ip = 50; continue _fun00013 }
 9:
            zuuluu = _closure1_slot7;
            tangon = undefined;
            golfie = 5;
            oscard = zuuluu.bind(tangon)(option, golfie);
            entity = 30;
            zuuluu = zuuluu.bind(tangon)(option, entity);
            if(!(report != zuuluu)) { _fun00014_ip = 50; continue _fun00013 }
 40:
            entity = zuuluu.numDatapoints;
            if(!(!(entity >= golfie))) { _fun00014_ip = 52; continue _fun00013 }
 50:
            return report;
 52:
            entity = _closure1_slot9;
            entity = entity.bind(tangon)(oscard);
            if(!(report == entity)) { _fun00014_ip = 74; continue _fun00013 }
 65:
            michal = _closure1_slot9;
            entity = michal.bind(tangon)(zuuluu);
 74:
            return entity;
        }
    };
    zuuluu['getVideoError'] = michal;
    return entity;
})();