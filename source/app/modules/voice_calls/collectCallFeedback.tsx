// app/modules/voice_calls/collectCallFeedback.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_calls/collectCallFeedback.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz, argCorge) { // Original name: collectCallFeedback
        _fun105402: for(var _fun105402_ip = 0; ; ) switch(_fun105402_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot7;
            mike = zulu.getVoiceChannelId;
            mike = mike.bind(zulu)();
            report = _closure1_slot4;
            zulu = report.getChannel;
            oscar = zulu.bind(report)(mike);
            report = null;
            zulu = argBar;
            if(!(report == zulu)) { _fun105402_ip = 51; continue _fun105402 }
 43:
            if(!(report != mike)) { _fun105402_ip = 51; continue _fun105402 }
 47:
            if(!(report == oscar)) { _fun105402_ip = 62; continue _fun105402 }
 51:
            mike = undefined;
            mike = tango.bind(mike)();
            _fun105402_ip = 525; continue _fun105402;
 62:
            mike = {};
            zulu = oscar.id;
            mike['channel_id'] = zulu;
            zulu = oscar.type;
            mike['channel_type'] = zulu;
            zulu = oscar.getGuildId;
            zulu = zulu.bind(oscar)();
            mike['guild_id'] = zulu;
            golf = _closure1_slot6;
            zulu = golf.getRTCConnectionId;
            zulu = zulu.bind(golf)();
            mike['rtc_connection_id'] = zulu;
            zulu = golf.getDuration;
            zulu = zulu.bind(golf)();
            mike['duration'] = zulu;
            zulu = golf.getMediaSessionId;
            zulu = zulu.bind(golf)();
            mike['media_session_id'] = zulu;
            options = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 6;
            oscar = oscar[zulu];
            zulu = undefined;
            offset = options.bind(zulu)(oscar);
            verify = offset.getVoiceStateMetadata;
            oscar = golf.getGuildId;
            options = oscar.bind(golf)();
            oscar = golf.getChannelId;
            golf = oscar.bind(golf)();
            oscar = argCorge;
            romeo = verify.bind(offset)(options, golf, oscar);
            foxtrot = mike;
            oscar = copyDataProperties(foxtrot, romeo);
            tango = tango.bind(zulu)();
            tango = _closure1_slot3;
            tango = tango.hasUsedBackgroundInCall;
            if(tango) { _fun105402_ip = 281; continue _fun105402 }
 229:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            tango = 9;
            tango = golf[tango];
            golf = oscar.bind(zulu)(tango);
            oscar = golf.dispatch;
            tango = {};
            options = 'VOICE_CHANNEL_SHOW_FEEDBACK';
            tango['type'] = options;
            tango['analyticsData'] = mike;
            tango = oscar.bind(golf)(tango);
            _fun105402_ip = 525; continue _fun105402;
 281:
            tango = {};
            foxtrot = tango;
            romeo = mike;
            mike = copyDataProperties(foxtrot, romeo);
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 7;
            mike = golf[mike];
            golf = oscar.bind(zulu)(mike);
            oscar = golf.getLastUsedVideoBackgroundOption;
            options = _closure1_slot8;
            mike = options.getCurrentUser;
            mike = mike.bind(options)();
            options = oscar.bind(golf)(mike);
            mike = {};
            verify = _closure1_slot5;
            oscar = verify.getVideoDevices;
            golf = oscar.bind(verify)();
            oscar = verify.getVideoDeviceId;
            oscar = oscar.bind(verify)();
            oscar = golf[oscar];
            golf = report == oscar;
            report = undefined;
            if(golf) { _fun105402_ip = 381; continue _fun105402 }
 376:
            report = oscar.name;
 381:
            mike['video_device_name'] = report;
            oscar = _closure1_slot5;
            report = oscar.getHardwareEncoding;
            report = report.bind(oscar)();
            mike['video_hardware_scaling_enabled'] = report;
            golf = _closure1_slot0;
            report = _closure1_slot2;
            oscar = 8;
            verify = report[oscar];
            offset = golf.bind(zulu)(verify);
            verify = offset.getEffectAnalyticsType;
            verify = verify.bind(offset)(options);
            mike['video_effect_type'] = verify;
            oscar = report[oscar];
            golf = golf.bind(zulu)(oscar);
            oscar = golf.getEffectDetailAnalyticsName;
            oscar = oscar.bind(golf)(options);
            mike['video_effect_detail'] = oscar;
            foxtrot = tango;
            romeo = mike;
            mike = copyDataProperties(foxtrot, romeo);
            mike = _closure1_slot1;
            entity = 9;
            entity = report[entity];
            zulu = mike.bind(zulu)(entity);
            mike = zulu.dispatch;
            entity = {};
            report = 'VIDEO_BACKGROUND_SHOW_FEEDBACK';
            entity['type'] = report;
            entity['analyticsData'] = tango;
            entity = mike.bind(zulu)(entity);
 525:
            entity = undefined;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();