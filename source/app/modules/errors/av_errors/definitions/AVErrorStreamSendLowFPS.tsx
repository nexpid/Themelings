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
    michal = {};
    golfie = function() { // Original name: getActiveErrors
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot3;
            entity = michal.getCurrentUserActiveStream;
            verify = entity.bind(michal)();
            entity = null;
            if(!(entity != verify)) { _fun00002_ip = 512; continue _fun00001 }
 26:
            zuuluu = verify.state;
            michal = _closure1_slot5;
            michal = michal.PAUSED;
            if(!(zuuluu !== michal)) { _fun00002_ip = 512; continue _fun00001 }
 48:
            zuuluu = _closure1_slot3;
            michal = zuuluu.getViewerIds;
            michal = michal.bind(zuuluu)(verify);
            zuuluu = michal.length;
            michal = 0;
            if(!(michal !== zuuluu)) { _fun00002_ip = 510; continue _fun00001 }
 77:
            report = _closure1_slot4;
            zuuluu = report.getRTCConnection;
            oscard = _closure1_slot0;
            michal = _closure1_slot1;
            yankee = 4;
            michal = michal[yankee];
            offset = undefined;
            oscard = oscard.bind(offset)(michal);
            michal = oscard.encodeStreamKey;
            michal = michal.bind(oscard)(verify);
            zuuluu = zuuluu.bind(report)(michal);
            michal = entity == zuuluu;
            golfie = undefined;
            if(michal) { _fun00002_ip = 144; continue _fun00001 }
 134:
            michal = zuuluu.getMediaEngineConnectionId;
            golfie = michal.bind(zuuluu)();
 144:
            if(!(entity != golfie)) { _fun00002_ip = 508; continue _fun00001 }
 151:
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
            if(!(entity != oscard)) { _fun00002_ip = 506; continue _fun00001 }
 207:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            option = 5;
            michal = michal[option];
            report = zuuluu.bind(offset)(michal);
            zuuluu = report.getAccumulatedStatsWithMinDatapoints;
            michal = verify.ownerId;
            report = zuuluu.bind(report)(golfie, michal);
            if(!(entity != report)) { _fun00002_ip = 504; continue _fun00001 }
 252:
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 6;
            michal = golfie[michal];
            zuuluu = zuuluu.bind(offset)(michal);
            michal = zuuluu.getMaxQuality;
            zuuluu = michal.bind(zuuluu)(oscard);
            oscard = entity == zuuluu;
            michal = null;
            if(oscard) { _fun00002_ip = 502; continue _fun00001 }
 295:
            oscard = report.short;
            golfie = oscard.frameRate;
            romeon = _closure1_slot0;
            oscard = _closure1_slot1;
            oscard = oscard[option];
            foxtra = romeon.bind(offset)(oscard);
            romeon = foxtra.getWarningFrameRate;
            oscard = zuuluu.maxFrameRate;
            oscard = romeon.bind(foxtra)(oscard);
            if(!(!(golfie < oscard))) { _fun00002_ip = 400; continue _fun00001 }
 345:
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
            if(!report) { _fun00002_ip = 499; continue _fun00001 }
 400:
            report = {};
            option = _closure1_slot0;
            tangon = _closure1_slot1;
            oscard = 7;
            oscard = tangon[oscard];
            oscard = option.bind(offset)(oscard);
            oscard = oscard.AVError;
            oscard = oscard.STREAM_SEND_LOW_FPS;
            report['type'] = oscard;
            oscard = 8;
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
 499:
            michal = zuuluu;
 502:
            return michal;
 504:
            return entity;
 506:
            return entity;
 508:
            return entity;
 510:
            return entity;
 512:
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
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/errors/av_errors/definitions/AVErrorStreamSendLowFPS.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['AVErrorStreamSendLowFPSDefinition'] = michal;
    return entity;
})();