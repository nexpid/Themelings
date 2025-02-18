// app/modules/activities/trackActivityThermalStateNoticeShown.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
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
            michal = _closure1_slot4;
            entity = michal.getVoiceChannelId;
            yankee = entity.bind(michal)();
            michal = _closure1_slot2;
            entity = michal.getBasicChannel;
            option = entity.bind(michal)(yankee);
            golfie = null;
            entity = golfie != yankee;
            michal = null;
            if(!entity) { _fun00002_ip = 58; continue _fun00001 }
 43:
            zuuluu = _closure1_slot5;
            entity = zuuluu.getSelfEmbeddedActivityForChannel;
            michal = entity.bind(zuuluu)(yankee);
 58:
            zuuluu = golfie == michal;
            entity = undefined;
            verify = undefined;
            if(zuuluu) { _fun00002_ip = 75; continue _fun00001 }
 69:
            verify = michal.compositeInstanceId;
 75:
            zuuluu = golfie == michal;
            offset = undefined;
            if(zuuluu) { _fun00002_ip = 89; continue _fun00001 }
 84:
            offset = michal.applicationId;
 89:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
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
            if(verify) { _fun00002_ip = 154; continue _fun00001 }
 149:
            golfie = option.guild_id;
 154:
            michal['guild_id'] = golfie;
            golfie = _closure1_slot3;
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