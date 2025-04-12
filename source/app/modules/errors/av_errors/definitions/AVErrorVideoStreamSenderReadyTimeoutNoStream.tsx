// app/modules/errors/av_errors/definitions/AVErrorVideoStreamSenderReadyTimeoutNoStream.tsx
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
        zuuluu = _closure1_slot3;
        michal = zuuluu.getTimedoutVideos;
        tangon = michal.bind(zuuluu)();
        michal = global;
        zuuluu = michal.Object;
        michal = zuuluu.values;
        tangon = michal.bind(zuuluu)(tangon);
        zuuluu = tangon.filter;
        michal = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                michal = entity.userId;
                zuuluu = entity.videoStreamId;
                tangon = _closure1_slot2;
                entity = tangon.getId;
                entity = entity.bind(tangon)();
                entity = entity === michal;
                if(!entity) { _fun00002_ip = 44; continue _fun00001 }
 38:
                michal = null;
                entity = michal == zuuluu;
 44:
                return entity;
            }
        };
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.map;
        entity = function(argFoo) {
            entity = {};
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            michal = michal.AVError;
            michal = michal.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM;
            entity['type'] = michal;
            report = argFoo;
            oscard = entity;
            michal = copyDataProperties(oscard, report);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['getActiveErrors'] = golfie;
    tangon = function(argFoo) { // Original name: makeErrorContextKey
        entity = argFoo;
        report = entity.mediaContext;
        tangon = entity.userId;
        entity = global;
        entity = entity.HermesInternal;
        zuuluu = entity.concat;
        michal = '';
        entity = ':';
        entity = zuuluu.bind(michal)(report, entity, tangon);
        return entity;
    };
    michal['makeErrorContextKey'] = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/errors/av_errors/definitions/AVErrorVideoStreamSenderReadyTimeoutNoStream.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition'] = michal;
    return entity;
})();