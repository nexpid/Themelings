// app/modules/errors/av_errors/definitions/AVErrorStreamBadNetworkQuality.tsx
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
    michal = report.bind(entity)(michal);
    michal = michal.RTCConnectionQuality;
    var _closure1_slot4 = michal;
    michal = {};
    golfie = function() { // Original name: getActiveErrors
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot3;
            entity = zuuluu.getQuality;
            tangon = entity.bind(zuuluu)();
            entity = _closure1_slot4;
            zuuluu = entity.BAD;
            entity = null;
            if(!(tangon === zuuluu)) { _fun00002_ip = 66; continue _fun00001 }
 33:
            zuuluu = _closure1_slot2;
            michal = zuuluu.getAllActiveStreams;
            tangon = michal.bind(zuuluu)();
            zuuluu = tangon.map;
            michal = function(argFoo) {
                entity = {};
                oscard = _closure1_slot0;
                golfie = _closure1_slot1;
                michal = 3;
                michal = golfie[michal];
                report = undefined;
                michal = oscard.bind(report)(michal);
                michal = michal.AVError;
                michal = michal.STREAM_BAD_NETWORK_QUALITY;
                entity['type'] = michal;
                michal = 4;
                michal = golfie[michal];
                tangon = oscard.bind(report)(michal);
                zuuluu = tangon.getStreamErrorContext;
                michal = 5;
                michal = golfie[michal];
                oscard = oscard.bind(report)(michal);
                report = oscard.encodeStreamKey;
                michal = argFoo;
                michal = report.bind(oscard)(michal);
                option = zuuluu.bind(tangon)(michal);
                verify = entity;
                michal = copyDataProperties(verify, option);
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal);
 66:
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
    tangon = 'modules/errors/av_errors/definitions/AVErrorStreamBadNetworkQuality.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['AVErrorStreamBadNetworkQualityDefinition'] = michal;
    return entity;
})();