// app/modules/video_calls/native/useTrackActivityVideoPip.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot5 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/video_calls/native/useTrackActivityVideoPip.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useTrackActivityPip
        golfie = argFoo;
        var _closure2_slot0 = golfie;
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 3;
        tangon = oscard[entity];
        entity = undefined;
        verify = report.bind(entity)(tangon);
        option = verify.useStateFromStores;
        tangon = _closure1_slot4;
        report = new Array(1);
        report[0] = tangon;
        tangon = function() {
            michal = _closure1_slot4;
            entity = michal.isPipEnabledWhileFocusedOnActivityOrStream;
            entity = entity.bind(michal)();
            return entity;
        };
        verify = option.bind(verify)(report, tangon);
        var _closure2_slot1 = verify;
        report = _closure1_slot1;
        tangon = 4;
        tangon = oscard[tangon];
        tangon = report.bind(entity)(tangon);
        option = tangon.bind(entity)(verify);
        var _closure2_slot2 = option;
        tangon = 5;
        tangon = oscard[tangon];
        tangon = report.bind(entity)(tangon);
        oscard = tangon.bind(entity)();
        var _closure2_slot3 = oscard;
        report = _closure1_slot3;
        tangon = report.useEffect;
        zuuluu = new Array(4);
        zuuluu[0] = verify;
        zuuluu[1] = option;
        zuuluu[2] = golfie;
        zuuluu[3] = oscard;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot3;
                michal = null;
                if(!(michal != entity)) { _fun00002_ip = 149; continue _fun00001 }
 16:
                entity = _closure2_slot2;
                if(!(michal != entity)) { _fun00002_ip = 149; continue _fun00001 }
 27:
                michal = _closure2_slot1;
                entity = _closure2_slot2;
                if(!(michal !== entity)) { _fun00002_ip = 149; continue _fun00001 }
 39:
                zuuluu = _closure2_slot1;
                michal = _closure1_slot5;
                if(zuuluu) { _fun00002_ip = 61; continue _fun00001 }
 53:
                tangon = michal.ACTIVITY_VIDEO_PIP_HIDDEN;
                _fun00002_ip = 67; continue _fun00001;
 61:
                tangon = michal.ACTIVITY_VIDEO_PIP_SHOWN;
 67:
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 6;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.track;
                entity = {};
                oscard = _closure2_slot0;
                golfie = oscard.id;
                entity['channel_id'] = golfie;
                oscard = oscard.guild_id;
                entity['guild_id'] = oscard;
                report = _closure2_slot3;
                oscard = report.applicationId;
                entity['application_id'] = oscard;
                report = report.compositeInstanceId;
                entity['activity_session_id'] = report;
                entity = michal.bind(zuuluu)(tangon, entity);
 149:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();