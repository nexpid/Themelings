// app/modules/errors/av_errors/definitions/AVErrorStreamSendHighPacketLoss.tsx
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
    michal = {};
    golfie = function() { // Original name: getActiveErrors
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot2;
            entity = michal.getCurrentUserActiveStream;
            verify = entity.bind(michal)();
            entity = null;
            if(!(entity != verify)) { _fun00002_ip = 335; continue _fun00001 }
 26:
            zuuluu = _closure1_slot2;
            michal = zuuluu.getViewerIds;
            michal = michal.bind(zuuluu)(verify);
            zuuluu = michal.length;
            michal = 0;
            if(!(michal !== zuuluu)) { _fun00002_ip = 333; continue _fun00001 }
 55:
            report = _closure1_slot3;
            zuuluu = report.getRTCConnection;
            oscard = _closure1_slot0;
            michal = _closure1_slot1;
            yankee = 2;
            michal = michal[yankee];
            offset = undefined;
            oscard = oscard.bind(offset)(michal);
            michal = oscard.encodeStreamKey;
            michal = michal.bind(oscard)(verify);
            zuuluu = zuuluu.bind(report)(michal);
            michal = entity == zuuluu;
            oscard = undefined;
            if(michal) { _fun00002_ip = 122; continue _fun00001 }
 112:
            michal = zuuluu.getMediaEngineConnectionId;
            oscard = michal.bind(zuuluu)();
 122:
            if(!(entity != oscard)) { _fun00002_ip = 331; continue _fun00001 }
 129:
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 3;
            michal = report[michal];
            report = zuuluu.bind(offset)(michal);
            zuuluu = report.getAccumulatedStatsWithMinDatapoints;
            michal = verify.ownerId;
            zuuluu = zuuluu.bind(report)(oscard, michal);
            report = entity == zuuluu;
            michal = null;
            if(report) { _fun00002_ip = 329; continue _fun00001 }
 179:
            report = zuuluu.short;
            oscard = report.packetLossRate;
            report = 100;
            golfie = report * oscard;
            oscard = 10;
            if(!(!(golfie > oscard))) { _fun00002_ip = 227; continue _fun00001 }
 205:
            zuuluu = zuuluu.long;
            zuuluu = zuuluu.packetLossRate;
            report = report * zuuluu;
            zuuluu = undefined;
            if(!(report > oscard)) { _fun00002_ip = 326; continue _fun00001 }
 227:
            report = {};
            option = _closure1_slot0;
            tangon = _closure1_slot1;
            oscard = 4;
            oscard = tangon[oscard];
            oscard = option.bind(offset)(oscard);
            oscard = oscard.AVError;
            oscard = oscard.STREAM_SEND_HIGH_PACKET_LOSS;
            report['type'] = oscard;
            oscard = 5;
            oscard = tangon[oscard];
            golfie = option.bind(offset)(oscard);
            oscard = golfie.getStreamErrorContext;
            tangon = tangon[yankee];
            option = option.bind(offset)(tangon);
            tangon = option.encodeStreamKey;
            tangon = tangon.bind(option)(verify);
            romeon = oscard.bind(golfie)(tangon);
            foxtra = report;
            tangon = copyDataProperties(foxtra, romeon);
            tangon = new Array(1);
            tangon[0] = report;
            zuuluu = tangon;
 326:
            michal = zuuluu;
 329:
            return michal;
 331:
            return entity;
 333:
            return entity;
 335:
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
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/errors/av_errors/definitions/AVErrorStreamSendHighPacketLoss.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['AVErrorStreamSendHighPacketLossDefinition'] = michal;
    return entity;
})();