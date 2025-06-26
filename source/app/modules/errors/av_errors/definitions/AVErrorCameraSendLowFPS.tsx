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
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    michal = michal.Millis;
    golfie = michal.SECOND;
    michal = 20;
    michal = michal * golfie;
    var _closure1_slot5 = michal;
    michal = {};
    golfie = function() { // Original name: getActiveErrors
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot4;
            entity = michal.getRTCConnection;
            zuuluu = entity.bind(michal)();
            entity = null;
            if(!(entity != zuuluu)) { _fun00002_ip = 376; continue _fun00001 }
 26:
            michal = zuuluu.getMediaEngineConnectionId;
            oscard = michal.bind(zuuluu)();
            if(!(entity != oscard)) { _fun00002_ip = 374; continue _fun00001 }
 43:
            report = _closure1_slot3;
            michal = report.isVideoEnabled;
            michal = michal.bind(report)();
            if(michal) { _fun00002_ip = 62; continue _fun00001 }
 60:
            return entity;
 62:
            report = _closure1_slot4;
            michal = report.getLastNonZeroRemoteVideoSinkWantsTime;
            report = michal.bind(report)();
            if(!(entity != report)) { _fun00002_ip = 114; continue _fun00001 }
 82:
            michal = global;
            golfie = michal.performance;
            michal = golfie.now;
            michal = michal.bind(golfie)();
            report = michal - report;
            michal = _closure1_slot5;
            if(!(!(report < michal))) { _fun00002_ip = 372; continue _fun00001 }
 114:
            michal = zuuluu.getRemoteVideoSinkWants;
            report = michal.bind(zuuluu)();
            michal = global;
            zuuluu = michal.Object;
            michal = zuuluu.entries;
            report = michal.bind(zuuluu)(report);
            zuuluu = report.every;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = argFoo;
                    entity = report[Symbol.iterator];
                    report = entity().next;
                    zuuluu = report().value;
                    michal = entity;
                    golfie = undefined;
                    tangon = michal === golfie;
                    michal = undefined;
                    if(tangon) { _fun00004_ip = 27; continue _fun00003 }
 24:
                    michal = zuuluu;
 27:
                    zuuluu = undefined;
                    if(tangon) { _fun00004_ip = 57; continue _fun00003 }
 32:
                    oscard = report().value;
                    report = entity;
                    report = report === golfie;
                    zuuluu = undefined;
                    tangon = report;
                    if(report) { _fun00004_ip = 57; continue _fun00003 }
 51:
                    zuuluu = oscard;
                    tangon = report;
 57:
                    if(tangon) { _fun00004_ip = 63; continue _fun00003 }
 60:
                    entity.return();
 63:
                    entity = 'any';
                    entity = entity === michal;
                    if(entity) { _fun00004_ip = 80; continue _fun00003 }
 74:
                    michal = 0;
                    entity = michal === zuuluu;
 80:
                    return entity;
                }
            };
            michal = zuuluu.bind(report)(michal);
            if(michal) { _fun00002_ip = 370; continue _fun00001 }
 169:
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 4;
            michal = report[michal];
            golfie = undefined;
            report = zuuluu.bind(golfie)(michal);
            zuuluu = report.getAccumulatedStatsWithMinDatapoints;
            option = _closure1_slot2;
            michal = option.getId;
            michal = michal.bind(option)();
            zuuluu = zuuluu.bind(report)(oscard, michal);
            report = entity == zuuluu;
            michal = null;
            if(report) { _fun00002_ip = 368; continue _fun00001 }
 229:
            report = zuuluu.short;
            oscard = report.frameRate;
            report = 10;
            if(!(!(oscard < report))) { _fun00002_ip = 269; continue _fun00001 }
 248:
            zuuluu = zuuluu.long;
            zuuluu = zuuluu.frameRate;
            report = zuuluu < report;
            zuuluu = undefined;
            if(!report) { _fun00002_ip = 365; continue _fun00001 }
 269:
            report = {};
            oscard = _closure1_slot0;
            option = _closure1_slot1;
            verify = 5;
            verify = option[verify];
            verify = oscard.bind(golfie)(verify);
            verify = verify.AVError;
            verify = verify.CAMERA_SEND_LOW_FPS;
            report['type'] = verify;
            verify = _closure1_slot2;
            tangon = verify.getId;
            tangon = tangon.bind(verify)();
            report['userId'] = tangon;
            tangon = 6;
            tangon = option[tangon];
            oscard = oscard.bind(golfie)(tangon);
            tangon = oscard.getVoiceChannelErrorContext;
            offset = tangon.bind(oscard)();
            yankee = report;
            tangon = copyDataProperties(yankee, offset);
            tangon = new Array(1);
            tangon[0] = report;
            zuuluu = tangon;
 365:
            michal = zuuluu;
 368:
            return michal;
 370:
            return entity;
 372:
            return entity;
 374:
            return entity;
 376:
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
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/errors/av_errors/definitions/AVErrorCameraSendLowFPS.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['AVErrorCameraSendLowFPSDefinition'] = michal;
    return entity;
})();