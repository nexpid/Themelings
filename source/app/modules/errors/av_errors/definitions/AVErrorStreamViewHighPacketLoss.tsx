// app/modules/errors/av_errors/definitions/AVErrorStreamViewHighPacketLoss.tsx
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
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 3;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = tangon.bind(entity)(zuuluu);
            entity = zuuluu.getReportInboundErrors;
            zuuluu = entity.bind(zuuluu)();
            entity = null;
            if(!zuuluu) { _fun00002_ip = 79; continue _fun00001 }
 40:
            zuuluu = _closure1_slot2;
            michal = zuuluu.getAllActiveStreams;
            report = michal.bind(zuuluu)();
            tangon = report.reduce;
            zuuluu = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    option = argBar;
                    report = _closure1_slot4;
                    zuuluu = report.getRTCConnection;
                    oscard = _closure1_slot0;
                    michal = _closure1_slot1;
                    offset = 4;
                    michal = michal[offset];
                    verify = undefined;
                    oscard = oscard.bind(verify)(michal);
                    michal = oscard.encodeStreamKey;
                    michal = michal.bind(oscard)(option);
                    report = zuuluu.bind(report)(michal);
                    zuuluu = null;
                    michal = zuuluu == report;
                    golfie = undefined;
                    if(michal) { _fun00004_ip = 78; continue _fun00003 }
 68:
                    michal = report.getMediaEngineConnectionId;
                    golfie = michal.bind(report)();
 78:
                    if(!(zuuluu != golfie)) { _fun00004_ip = 305; continue _fun00003 }
 85:
                    report = option.ownerId;
                    oscard = _closure1_slot3;
                    michal = oscard.getId;
                    michal = michal.bind(oscard)();
                    if(!(report !== michal)) { _fun00004_ip = 303; continue _fun00003 }
 112:
                    report = _closure1_slot0;
                    oscard = _closure1_slot1;
                    michal = 3;
                    michal = oscard[michal];
                    oscard = report.bind(verify)(michal);
                    report = oscard.getAccumulatedStatsWithMinDatapoints;
                    michal = option.ownerId;
                    michal = report.bind(oscard)(golfie, michal);
                    if(!(zuuluu != michal)) { _fun00004_ip = 301; continue _fun00003 }
 157:
                    zuuluu = michal.short;
                    zuuluu = zuuluu.packetLossRate;
                    report = 100;
                    oscard = report * zuuluu;
                    zuuluu = 10;
                    if(!(!(oscard > zuuluu))) { _fun00004_ip = 203; continue _fun00003 }
 183:
                    michal = michal.long;
                    michal = michal.packetLossRate;
                    michal = report * michal;
                    if(!(michal > zuuluu)) { _fun00004_ip = 301; continue _fun00003 }
 203:
                    zuuluu = entity.push;
                    michal = {};
                    golfie = _closure1_slot0;
                    tangon = _closure1_slot1;
                    report = 5;
                    report = tangon[report];
                    report = golfie.bind(verify)(report);
                    report = report.AVError;
                    report = report.STREAM_VIEW_HIGH_PACKET_LOSS;
                    michal['type'] = report;
                    report = 6;
                    report = tangon[report];
                    oscard = golfie.bind(verify)(report);
                    report = oscard.getStreamErrorContext;
                    tangon = tangon[offset];
                    golfie = golfie.bind(verify)(tangon);
                    tangon = golfie.encodeStreamKey;
                    tangon = tangon.bind(golfie)(option);
                    yankee = report.bind(oscard)(tangon);
                    romeon = michal;
                    tangon = copyDataProperties(romeon, yankee);
                    michal = zuuluu.bind(entity)(michal);
 301:
                    return entity;
 303:
                    return entity;
 305:
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
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/errors/av_errors/definitions/AVErrorStreamViewHighPacketLoss.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['AVErrorStreamViewHighPacketLossDefinition'] = michal;
    return entity;
})();