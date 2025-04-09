// app/modules/activities/trackActivityThermalStateNoticeShown.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot6 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/trackActivityThermalStateNoticeShown.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: trackActivityThermalStateNoticeShown
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot5;
            entity = michal.getCurrentEmbeddedActivity;
            michal = entity.bind(michal)();
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 4;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.getEmbeddedActivityLocationChannelId;
            golfie = null;
            option = golfie == michal;
            zuuluu = undefined;
            if(option) { _fun00002_ip = 61; continue _fun00001 }
 56:
            zuuluu = michal.location;
 61:
            yankee = tangon.bind(report)(zuuluu);
            tangon = _closure1_slot3;
            zuuluu = tangon.getBasicChannel;
            option = zuuluu.bind(tangon)(yankee);
            zuuluu = golfie == michal;
            verify = undefined;
            if(zuuluu) { _fun00002_ip = 96; continue _fun00001 }
 90:
            verify = michal.compositeInstanceId;
 96:
            zuuluu = golfie == michal;
            offset = undefined;
            if(zuuluu) { _fun00002_ip = 110; continue _fun00001 }
 105:
            offset = michal.applicationId;
 110:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 5;
            michal = tangon[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.track;
            michal = _closure1_slot6;
            zuuluu = michal.ACTIVITY_THERMAL_STATE_NOTICE_SHOWN;
            michal = {};
            michal['channel_id'] = yankee;
            michal['application_id'] = offset;
            michal['activity_session_id'] = verify;
            verify = golfie == option;
            golfie = undefined;
            if(verify) { _fun00002_ip = 175; continue _fun00001 }
 170:
            golfie = option.guild_id;
 175:
            michal['guild_id'] = golfie;
            golfie = _closure1_slot4;
            oscard = golfie.getMediaSessionId;
            oscard = oscard.bind(golfie)();
            michal['media_session_id'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['trackActivityThermalStateNoticeShown'] = michal;
    return entity;
})();