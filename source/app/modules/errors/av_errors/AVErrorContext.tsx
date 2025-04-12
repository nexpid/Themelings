// app/modules/errors/av_errors/AVErrorContext.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    michal = function() { // Original name: getCommonErrorContext
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = {};
            tangon = _closure1_slot2;
            michal = tangon.getVideoDevices;
            tangon = michal.bind(tangon)();
            report = _closure1_slot2;
            michal = report.getVideoDeviceId;
            michal = michal.bind(report)();
            oscard = tangon[michal];
            tangon = null;
            golfie = tangon == oscard;
            report = undefined;
            if(golfie) { _fun00002_ip = 53; continue _fun00001 }
 48:
            report = oscard.name;
 53:
            entity['videoDeviceName'] = report;
            oscard = _closure1_slot2;
            report = oscard.getInputDevices;
            oscard = report.bind(oscard)();
            golfie = _closure1_slot2;
            report = golfie.getInputDeviceId;
            report = report.bind(golfie)();
            oscard = oscard[report];
            golfie = tangon == oscard;
            report = undefined;
            if(golfie) { _fun00002_ip = 104; continue _fun00001 }
 99:
            report = oscard.name;
 104:
            entity['audioInputDeviceName'] = report;
            oscard = _closure1_slot2;
            report = oscard.getOutputDevices;
            report = report.bind(oscard)();
            oscard = _closure1_slot2;
            zuuluu = oscard.getOutputDeviceId;
            zuuluu = zuuluu.bind(oscard)();
            zuuluu = report[zuuluu];
            tangon = tangon == zuuluu;
            michal = undefined;
            if(tangon) { _fun00002_ip = 155; continue _fun00001 }
 150:
            michal = zuuluu.name;
 155:
            entity['audioOutputDeviceName'] = michal;
            return entity;
        }
    };
    var _closure1_slot6 = michal;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 6;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/errors/av_errors/AVErrorContext.tsx';
    report = oscard.bind(golfie)(report);
    report = function() { // Original name: getVoiceChannelErrorContext
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot4;
            entity = zuuluu.getVoiceChannelId;
            oscard = entity.bind(zuuluu)();
            entity = {};
            tangon = null;
            golfie = tangon != oscard;
            zuuluu = undefined;
            report = undefined;
            if(!golfie) { _fun00004_ip = 35; continue _fun00003 }
 32:
            report = oscard;
 35:
            entity['channelId'] = report;
            oscard = _closure1_slot3;
            report = oscard.getMediaSessionId;
            report = report.bind(oscard)();
            oscard = tangon != report;
            tangon = undefined;
            if(!oscard) { _fun00004_ip = 65; continue _fun00003 }
 62:
            tangon = report;
 65:
            entity['mediaSessionId'] = tangon;
            report = _closure1_slot3;
            tangon = report.getRTCConnectionId;
            tangon = tangon.bind(report)();
            entity['rtcConnectionId'] = tangon;
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            tangon = 4;
            tangon = oscard[tangon];
            tangon = report.bind(zuuluu)(tangon);
            tangon = tangon.MediaEngineContextTypes;
            tangon = tangon.DEFAULT;
            entity['mediaContext'] = tangon;
            michal = _closure1_slot6;
            option = michal.bind(zuuluu)();
            verify = entity;
            michal = copyDataProperties(verify, option);
            return entity;
        }
    };
    zuuluu['getVoiceChannelErrorContext'] = report;
    tangon = function(argFoo) { // Original name: getStreamErrorContext
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 5;
            entity = zuuluu[entity];
            zuuluu = undefined;
            report = report.bind(zuuluu)(entity);
            entity = report.decodeStreamKey;
            entity = entity.bind(report)(tangon);
            report = entity.channelId;
            oscard = _closure1_slot5;
            entity = oscard.getRTCConnection;
            golfie = entity.bind(oscard)(tangon);
            entity = {};
            entity['channelId'] = report;
            report = null;
            oscard = report == golfie;
            option = undefined;
            if(oscard) { _fun00006_ip = 86; continue _fun00005 }
 76:
            oscard = golfie.getMediaSessionId;
            option = oscard.bind(golfie)();
 86:
            verify = report != option;
            oscard = undefined;
            if(!verify) { _fun00006_ip = 98; continue _fun00005 }
 95:
            oscard = option;
 98:
            entity['mediaSessionId'] = oscard;
            oscard = report == golfie;
            report = undefined;
            if(oscard) { _fun00006_ip = 122; continue _fun00005 }
 112:
            oscard = golfie.getRTCConnectionId;
            report = oscard.bind(golfie)();
 122:
            entity['rtcConnectionId'] = report;
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            report = 4;
            report = golfie[report];
            report = oscard.bind(zuuluu)(report);
            report = report.MediaEngineContextTypes;
            report = report.STREAM;
            entity['mediaContext'] = report;
            entity['streamKey'] = tangon;
            michal = _closure1_slot6;
            offset = michal.bind(zuuluu)();
            yankee = entity;
            michal = copyDataProperties(yankee, offset);
            return entity;
        }
    };
    zuuluu['getStreamErrorContext'] = tangon;
    zuuluu['getCommonErrorContext'] = michal;
    return entity;
})();