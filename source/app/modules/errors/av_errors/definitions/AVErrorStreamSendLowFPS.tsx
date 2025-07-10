// app/modules/errors/av_errors/definitions/AVErrorStreamSendLowFPS.tsx
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
    michal = report.bind(entity)(michal);
    michal = michal.ApplicationStreamStates;
    var _closure1_slot5 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    michal = michal.Millis;
    golfie = michal.SECOND;
    michal = 20;
    michal = michal * golfie;
    var _closure1_slot6 = michal;
    michal = {};
    golfie = function() { // Original name: getActiveErrors
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot3;
            entity = michal.getCurrentUserActiveStream;
            verify = entity.bind(michal)();
            entity = null;
            if(!(entity != verify)) { _fun00002_ip = 622; continue _fun00001 }
 26:
            zuuluu = verify.state;
            michal = _closure1_slot5;
            michal = michal.PAUSED;
            if(!(zuuluu !== michal)) { _fun00002_ip = 622; continue _fun00001 }
 48:
            zuuluu = _closure1_slot3;
            michal = zuuluu.getViewerIds;
            michal = michal.bind(zuuluu)(verify);
            zuuluu = michal.length;
            michal = 0;
            if(!(michal !== zuuluu)) { _fun00002_ip = 620; continue _fun00001 }
 77:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            yankee = 5;
            michal = michal[yankee];
            offset = undefined;
            zuuluu = zuuluu.bind(offset)(michal);
            michal = zuuluu.encodeStreamKey;
            oscard = michal.bind(zuuluu)(verify);
            zuuluu = _closure1_slot4;
            michal = zuuluu.getRTCConnection;
            zuuluu = michal.bind(zuuluu)(oscard);
            if(!(entity != zuuluu)) { _fun00002_ip = 618; continue _fun00001 }
 132:
            michal = zuuluu.getMediaEngineConnectionId;
            golfie = michal.bind(zuuluu)();
            if(!(entity != golfie)) { _fun00002_ip = 616; continue _fun00001 }
 149:
            report = _closure1_slot4;
            michal = report.getLastNonZeroRemoteVideoSinkWantsTime;
            report = michal.bind(report)(oscard);
            if(!(entity != report)) { _fun00002_ip = 200; continue _fun00001 }
 168:
            michal = global;
            oscard = michal.performance;
            michal = oscard.now;
            michal = michal.bind(oscard)();
            report = michal - report;
            michal = _closure1_slot6;
            if(!(!(report < michal))) { _fun00002_ip = 614; continue _fun00001 }
 200:
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
            if(michal) { _fun00002_ip = 612; continue _fun00001 }
 255:
            oscard = _closure1_slot2;
            report = oscard.getParticipant;
            zuuluu = verify.channelId;
            option = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[yankee];
            option = option.bind(offset)(michal);
            michal = option.encodeStreamKey;
            michal = michal.bind(option)(verify);
            oscard = report.bind(oscard)(zuuluu, michal);
            if(!(entity != oscard)) { _fun00002_ip = 610; continue _fun00001 }
 311:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            option = 6;
            michal = michal[option];
            report = zuuluu.bind(offset)(michal);
            zuuluu = report.getAccumulatedStatsWithMinDatapoints;
            michal = verify.ownerId;
            report = zuuluu.bind(report)(golfie, michal);
            if(!(entity != report)) { _fun00002_ip = 608; continue _fun00001 }
 356:
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 7;
            michal = golfie[michal];
            zuuluu = zuuluu.bind(offset)(michal);
            michal = zuuluu.getMaxQuality;
            zuuluu = michal.bind(zuuluu)(oscard);
            oscard = entity == zuuluu;
            michal = null;
            if(oscard) { _fun00002_ip = 606; continue _fun00001 }
 399:
            oscard = report.short;
            golfie = oscard.frameRate;
            romeon = _closure1_slot0;
            oscard = _closure1_slot1;
            oscard = oscard[option];
            foxtra = romeon.bind(offset)(oscard);
            romeon = foxtra.getWarningFrameRate;
            oscard = zuuluu.maxFrameRate;
            oscard = romeon.bind(foxtra)(oscard);
            if(!(!(golfie < oscard))) { _fun00002_ip = 504; continue _fun00001 }
 449:
            report = report.long;
            report = report.frameRate;
            golfie = _closure1_slot0;
            oscard = _closure1_slot1;
            oscard = oscard[option];
            golfie = golfie.bind(offset)(oscard);
            oscard = golfie.getWarningFrameRate;
            zuuluu = zuuluu.maxFrameRate;
            zuuluu = oscard.bind(golfie)(zuuluu);
            report = report < zuuluu;
            zuuluu = null;
            if(!report) { _fun00002_ip = 603; continue _fun00001 }
 504:
            report = {};
            option = _closure1_slot0;
            tangon = _closure1_slot1;
            oscard = 8;
            oscard = tangon[oscard];
            oscard = option.bind(offset)(oscard);
            oscard = oscard.AVError;
            oscard = oscard.STREAM_SEND_LOW_FPS;
            report['type'] = oscard;
            oscard = 9;
            oscard = tangon[oscard];
            golfie = option.bind(offset)(oscard);
            oscard = golfie.getStreamErrorContext;
            tangon = tangon[yankee];
            option = option.bind(offset)(tangon);
            tangon = option.encodeStreamKey;
            tangon = tangon.bind(option)(verify);
            backup = oscard.bind(golfie)(tangon);
            kiloes = report;
            tangon = copyDataProperties(kiloes, backup);
            tangon = new Array(1);
            tangon[0] = report;
            zuuluu = tangon;
 603:
            michal = zuuluu;
 606:
            return michal;
 608:
            return entity;
 610:
            return entity;
 612:
            return entity;
 614:
            return entity;
 616:
            return entity;
 618:
            return entity;
 620:
            return entity;
 622:
            return entity;
        }
    };
    michal['getActiveErrors'] = golfie;
    tangon = function(argFoo) { // Original name: makeErrorContextKey
        entity = argFoo;
        report = entity.streamKey;
        tangon = entity.mediaSessionId;
        entity = global;
        entity = entity.HermesInternal;
        zuuluu = entity.concat;
        michal = '';
        entity = ':';
        entity = zuuluu.bind(michal)(report, entity, tangon);
        return entity;
    };
    michal['makeErrorContextKey'] = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/errors/av_errors/definitions/AVErrorStreamSendLowFPS.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['AVErrorStreamSendLowFPSDefinition'] = michal;
    return entity;
})();