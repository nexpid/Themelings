// app/modules/errors/av_errors/definitions/AVErrorCameraSendLowFPS.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = {};
    golfie = function() { // Original name: getActiveErrors
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot4;
            entity = michal.getRTCConnection;
            zuuluu = entity.bind(michal)();
            entity = null;
            michal = entity == zuuluu;
            golfie = undefined;
            oscard = undefined;
            if(michal) { _fun00002_ip = 40; continue _fun00001 }
 30:
            michal = zuuluu.getMediaEngineConnectionId;
            oscard = michal.bind(zuuluu)();
 40:
            if(!(entity != oscard)) { _fun00002_ip = 244; continue _fun00001 }
 47:
            zuuluu = _closure1_slot3;
            michal = zuuluu.isVideoEnabled;
            michal = michal.bind(zuuluu)();
            if(michal) { _fun00002_ip = 66; continue _fun00001 }
 64:
            return entity;
 66:
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 3;
            michal = report[michal];
            report = zuuluu.bind(golfie)(michal);
            zuuluu = report.getAccumulatedStatsWithMinDatapoints;
            option = _closure1_slot2;
            michal = option.getId;
            michal = michal.bind(option)();
            zuuluu = zuuluu.bind(report)(oscard, michal);
            report = entity == zuuluu;
            michal = null;
            if(report) { _fun00002_ip = 242; continue _fun00001 }
 121:
            report = zuuluu.short;
            oscard = report.frameRate;
            report = 10;
            if(!(!(oscard < report))) { _fun00002_ip = 161; continue _fun00001 }
 140:
            zuuluu = zuuluu.long;
            zuuluu = zuuluu.frameRate;
            report = zuuluu < report;
            zuuluu = undefined;
            if(!report) { _fun00002_ip = 239; continue _fun00001 }
 161:
            report = {};
            oscard = _closure1_slot0;
            option = _closure1_slot1;
            tangon = 4;
            tangon = option[tangon];
            tangon = oscard.bind(golfie)(tangon);
            tangon = tangon.AVError;
            tangon = tangon.CAMERA_SEND_LOW_FPS;
            report['type'] = tangon;
            tangon = 5;
            tangon = option[tangon];
            oscard = oscard.bind(golfie)(tangon);
            tangon = oscard.getVoiceChannelErrorContext;
            verify = tangon.bind(oscard)();
            offset = report;
            tangon = copyDataProperties(offset, verify);
            tangon = new Array(1);
            tangon[0] = report;
            zuuluu = tangon;
 239:
            michal = zuuluu;
 242:
            return michal;
 244:
            return entity;
        }
    };
    michal['getActiveErrors'] = golfie;
    tangon = function(argFoo) { // Original name: makeErrorContextKey
        entity = argFoo;
        zuuluu = entity.mediaSessionId;
        entity = global;
        entity = entity.HermesInternal;
        michal = entity.concat;
        entity = '';
        entity = michal.bind(entity)(zuuluu);
        return entity;
    };
    michal['makeErrorContextKey'] = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/errors/av_errors/definitions/AVErrorCameraSendLowFPS.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['AVErrorCameraSendLowFPSDefinition'] = michal;
    return entity;
})();