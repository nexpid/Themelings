// app/modules/errors/av_errors/definitions/AVErrorStreamBadNetworkQuality.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    golfie = oscard[entity];
    michal = argBaz;
    entity = undefined;
    michal = michal.bind(entity)(golfie);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.RTCConnectionQuality;
    var _closure1_slot3 = michal;
    michal = {};
    golfie = function() { // Original name: getActiveErrors
        zuuluu = _closure1_slot2;
        michal = zuuluu.getAllActiveStreamKeys;
        tangon = michal.bind(zuuluu)();
        zuuluu = tangon.map;
        michal = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = argFoo;
                michal = _closure1_slot2;
                entity = michal.getQuality;
                tangon = entity.bind(michal)(report);
                entity = _closure1_slot3;
                michal = entity.BAD;
                entity = null;
                if(!(tangon === michal)) { _fun00002_ip = 110; continue _fun00001 }
 37:
                michal = {};
                oscard = _closure1_slot0;
                golfie = _closure1_slot1;
                zuuluu = 2;
                zuuluu = golfie[zuuluu];
                tangon = undefined;
                zuuluu = oscard.bind(tangon)(zuuluu);
                zuuluu = zuuluu.AVError;
                zuuluu = zuuluu.STREAM_BAD_NETWORK_QUALITY;
                michal['type'] = zuuluu;
                zuuluu = 3;
                zuuluu = golfie[zuuluu];
                tangon = oscard.bind(tangon)(zuuluu);
                zuuluu = tangon.getStreamErrorContext;
                option = zuuluu.bind(tangon)(report);
                verify = michal;
                zuuluu = copyDataProperties(verify, option);
                entity = michal;
 110:
                return entity;
            }
        };
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.filter;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        entity = 4;
        tangon = tangon[entity];
        entity = undefined;
        entity = report.bind(entity)(tangon);
        entity = entity.isNotNullish;
        entity = michal.bind(zuuluu)(entity);
        return entity;
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
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/errors/av_errors/definitions/AVErrorStreamBadNetworkQuality.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['AVErrorStreamBadNetworkQualityDefinition'] = michal;
    return entity;
})();