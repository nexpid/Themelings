// app/modules/errors/av_errors/definitions/AVErrorStreamSoundshareFailed.tsx
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
    michal = michal.MediaEngineHookTypes;
    var _closure1_slot4 = michal;
    michal = {};
    golfie = function() { // Original name: getActiveErrors
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot2;
            entity = zuuluu.getCurrentUserActiveStream;
            golfie = entity.bind(zuuluu)();
            tangon = null;
            zuuluu = tangon != golfie;
            option = undefined;
            entity = undefined;
            if(!zuuluu) { _fun00002_ip = 169; continue _fun00001 }
 33:
            oscard = _closure1_slot3;
            report = oscard.getHookError;
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.SOUND;
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = tangon != zuuluu;
            entity = undefined;
            if(!zuuluu) { _fun00002_ip = 169; continue _fun00001 }
 67:
            zuuluu = {};
            oscard = _closure1_slot0;
            verify = _closure1_slot1;
            michal = 3;
            michal = verify[michal];
            michal = oscard.bind(option)(michal);
            michal = michal.AVError;
            michal = michal.STREAM_SOUNDSHARE_FAILED;
            zuuluu['type'] = michal;
            michal = 4;
            michal = verify[michal];
            report = oscard.bind(option)(michal);
            tangon = report.getStreamErrorContext;
            michal = 5;
            michal = verify[michal];
            oscard = oscard.bind(option)(michal);
            michal = oscard.encodeStreamKey;
            michal = michal.bind(oscard)(golfie);
            offset = tangon.bind(report)(michal);
            yankee = zuuluu;
            michal = copyDataProperties(yankee, offset);
            michal = new Array(1);
            michal[0] = zuuluu;
            entity = michal;
 169:
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
    tangon = 'modules/errors/av_errors/definitions/AVErrorStreamSoundshareFailed.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['AVErrorStreamSoundshareFailedDefinition'] = michal;
    return entity;
})();