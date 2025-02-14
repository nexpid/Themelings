// app/modules/activities/trackActivityThermalStateNoticeShown.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot6 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/trackActivityThermalStateNoticeShown.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: trackActivityThermalStateNoticeShown
        _fun103693: for(var _fun103693_ip = 0; ; ) switch(_fun103693_ip) {
 0:
            mike = _closure1_slot4;
            entity = mike.getVoiceChannelId;
            yankee = entity.bind(mike)();
            mike = _closure1_slot2;
            entity = mike.getBasicChannel;
            options = entity.bind(mike)(yankee);
            golf = null;
            entity = golf != yankee;
            mike = null;
            if(!entity) { _fun103693_ip = 58; continue _fun103693 }
 43:
            zulu = _closure1_slot5;
            entity = zulu.getSelfEmbeddedActivityForChannel;
            mike = entity.bind(zulu)(yankee);
 58:
            zulu = golf == mike;
            entity = undefined;
            verify = undefined;
            if(zulu) { _fun103693_ip = 75; continue _fun103693 }
 69:
            verify = mike.compositeInstanceId;
 75:
            zulu = golf == mike;
            offset = undefined;
            if(zulu) { _fun103693_ip = 89; continue _fun103693 }
 84:
            offset = mike.applicationId;
 89:
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 5;
            mike = tango[mike];
            report = zulu.bind(entity)(mike);
            tango = report.track;
            mike = _closure1_slot6;
            zulu = mike.ACTIVITY_THERMAL_STATE_NOTICE_SHOWN;
            mike = {};
            mike['channel_id'] = yankee;
            mike['application_id'] = offset;
            mike['activity_session_id'] = verify;
            verify = golf == options;
            golf = undefined;
            if(verify) { _fun103693_ip = 154; continue _fun103693 }
 149:
            golf = options.guild_id;
 154:
            mike['guild_id'] = golf;
            golf = _closure1_slot3;
            oscar = golf.getMediaSessionId;
            oscar = oscar.bind(golf)();
            mike['media_session_id'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['trackActivityThermalStateNoticeShown'] = mike;
    return entity;
})();