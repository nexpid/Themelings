// app/modules/errors/av_errors/definitions/AVErrorStreamViewLowFPS.tsx
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
    var _closure1_slot5 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.ApplicationStreamStates;
    var _closure1_slot6 = michal;
    michal = {};
    golfie = function() { // Original name: getActiveErrors
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 5;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = tangon.bind(entity)(zuuluu);
            entity = zuuluu.getReportInboundErrors;
            zuuluu = entity.bind(zuuluu)();
            entity = null;
            if(!zuuluu) { _fun00002_ip = 79; continue _fun00001 }
 40:
            zuuluu = _closure1_slot3;
            michal = zuuluu.getAllActiveStreams;
            report = michal.bind(zuuluu)();
            tangon = report.reduce;
            zuuluu = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    option = argBar;
                    report = _closure1_slot5;
                    zuuluu = report.getRTCConnection;
                    oscard = _closure1_slot0;
                    michal = _closure1_slot1;
                    offset = 6;
                    michal = michal[offset];
                    verify = undefined;
                    oscard = oscard.bind(verify)(michal);
                    michal = oscard.encodeStreamKey;
                    michal = michal.bind(oscard)(option);
                    zuuluu = zuuluu.bind(report)(michal);
                    report = null;
                    michal = report == zuuluu;
                    yankee = undefined;
                    if(michal) { _fun00004_ip = 78; continue _fun00003 }
 68:
                    michal = zuuluu.getMediaEngineConnectionId;
                    yankee = michal.bind(zuuluu)();
 78:
                    if(!(report != yankee)) { _fun00004_ip = 479; continue _fun00003 }
 85:
                    zuuluu = option.ownerId;
                    oscard = _closure1_slot4;
                    michal = oscard.getId;
                    michal = michal.bind(oscard)();
                    if(!(zuuluu !== michal)) { _fun00004_ip = 477; continue _fun00003 }
 112:
                    zuuluu = option.state;
                    michal = _closure1_slot6;
                    michal = michal.PAUSED;
                    if(!(zuuluu !== michal)) { _fun00004_ip = 477; continue _fun00003 }
 134:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot1;
                    golfie = 5;
                    michal = michal[golfie];
                    oscard = zuuluu.bind(verify)(michal);
                    zuuluu = oscard.getAccumulatedStatsWithMinDatapoints;
                    michal = option.ownerId;
                    zuuluu = zuuluu.bind(oscard)(yankee, michal);
                    if(!(report != zuuluu)) { _fun00004_ip = 475; continue _fun00003 }
 179:
                    romeon = _closure1_slot2;
                    yankee = romeon.getParticipant;
                    oscard = option.channelId;
                    foxtra = _closure1_slot0;
                    michal = _closure1_slot1;
                    michal = michal[offset];
                    foxtra = foxtra.bind(verify)(michal);
                    michal = foxtra.encodeStreamKey;
                    michal = michal.bind(foxtra)(option);
                    yankee = yankee.bind(romeon)(oscard, michal);
                    if(!(report != yankee)) { _fun00004_ip = 473; continue _fun00003 }
 235:
                    oscard = _closure1_slot0;
                    romeon = _closure1_slot1;
                    michal = 7;
                    michal = romeon[michal];
                    oscard = oscard.bind(verify)(michal);
                    michal = oscard.getMaxQuality;
                    michal = michal.bind(oscard)(yankee);
                    if(!(report != michal)) { _fun00004_ip = 471; continue _fun00003 }
 273:
                    report = zuuluu.short;
                    oscard = report.frameRate;
                    yankee = _closure1_slot0;
                    report = _closure1_slot1;
                    report = report[golfie];
                    romeon = yankee.bind(verify)(report);
                    yankee = romeon.getWarningFrameRate;
                    report = michal.maxFrameRate;
                    report = yankee.bind(romeon)(report);
                    if(!(!(oscard < report))) { _fun00004_ip = 373; continue _fun00003 }
 323:
                    zuuluu = zuuluu.long;
                    zuuluu = zuuluu.frameRate;
                    oscard = _closure1_slot0;
                    report = _closure1_slot1;
                    report = report[golfie];
                    oscard = oscard.bind(verify)(report);
                    report = oscard.getWarningFrameRate;
                    michal = michal.maxFrameRate;
                    michal = report.bind(oscard)(michal);
                    if(!(zuuluu < michal)) { _fun00004_ip = 471; continue _fun00003 }
 373:
                    zuuluu = entity.push;
                    michal = {};
                    golfie = _closure1_slot0;
                    tangon = _closure1_slot1;
                    report = 8;
                    report = tangon[report];
                    report = golfie.bind(verify)(report);
                    report = report.AVError;
                    report = report.STREAM_VIEW_LOW_FPS;
                    michal['type'] = report;
                    report = 9;
                    report = tangon[report];
                    oscard = golfie.bind(verify)(report);
                    report = oscard.getStreamErrorContext;
                    tangon = tangon[offset];
                    golfie = golfie.bind(verify)(tangon);
                    tangon = golfie.encodeStreamKey;
                    tangon = tangon.bind(golfie)(option);
                    backup = report.bind(oscard)(tangon);
                    kiloes = michal;
                    tangon = copyDataProperties(kiloes, backup);
                    michal = zuuluu.bind(entity)(michal);
 471:
                    return entity;
 473:
                    return entity;
 475:
                    return entity;
 477:
                    return entity;
 479:
                    return entity;
                }
            };
            michal = new Array(0);
            entity = tangon.bind(report)(zuuluu, michal);
 79:
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
    tangon = 'modules/errors/av_errors/definitions/AVErrorStreamViewLowFPS.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['AVErrorStreamViewLowFPSDefinition'] = michal;
    return entity;
})();