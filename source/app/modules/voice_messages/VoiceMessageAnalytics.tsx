// app/modules/voice_messages/VoiceMessageAnalytics.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot2 = tango;
    tango = {};
    report = 'sent';
    tango['SENT'] = report;
    report = 'cancelled_duration';
    tango['CANCELLED_DURATION'] = report;
    report = 'cancelled_user_requested';
    tango['CANCELLED_USER_REQUESTED'] = report;
    report = 'cancelled_gesture_conflict';
    tango['CANCELLED_GESTURE_CONFLICT'] = report;
    report = 'cancelled_on_background';
    tango['CANCELLED_ON_BACKGROUND'] = report;
    report = 2;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/voice_messages/VoiceMessageAnalytics.tsx';
    report = oscar.bind(golf)(report);
    zulu['VoiceMessageRecordingResult'] = tango;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: logVoiceMessagePlaybackStarted
        _fun92018: for(var _fun92018_ip = 0; ; ) switch(_fun92018_ip) {
 0:
            offset = argBar;
            verify = argBaz;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 1;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.track;
            mike = _closure1_slot2;
            zulu = mike.VOICE_MESSAGE_PLAYBACK_STARTED;
            mike = {};
            oscar = argFoo;
            mike['message_id'] = oscar;
            mike['total_duration_secs'] = offset;
            oscar = global;
            options = oscar.Math;
            golf = options.min;
            yankee = null;
            oscar = verify;
            if(!(yankee != offset)) { _fun92018_ip = 86; continue _fun92018 }
 83:
            oscar = offset;
 86:
            oscar = golf.bind(options)(oscar, verify);
            mike['start_duration_secs'] = oscar;
            oscar = argCorge;
            mike['sender_user_id'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['logVoiceMessagePlaybackStarted'] = tango;
    tango = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: logVoiceMessagePlaybackEnded
        _fun92019: for(var _fun92019_ip = 0; ; ) switch(_fun92019_ip) {
 0:
            offset = argBar;
            verify = argBaz;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 1;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.track;
            mike = _closure1_slot2;
            zulu = mike.VOICE_MESSAGE_PLAYBACK_ENDED;
            mike = {};
            oscar = argFoo;
            mike['message_id'] = oscar;
            mike['total_duration_secs'] = offset;
            oscar = global;
            options = oscar.Math;
            golf = options.min;
            yankee = null;
            oscar = verify;
            if(!(yankee != offset)) { _fun92019_ip = 86; continue _fun92019 }
 83:
            oscar = offset;
 86:
            oscar = golf.bind(options)(oscar, verify);
            mike['end_duration_secs'] = oscar;
            oscar = argCorge;
            mike['sender_user_id'] = oscar;
            oscar = argGrault;
            mike['duration_listening_secs'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['logVoiceMessagePlaybackEnded'] = tango;
    mike = function(argFoo, argBar) { // Original name: logVoiceMessagePlaybackFailed
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 1;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot2;
        zulu = mike.VOICE_MESSAGE_PLAYBACK_FAILED;
        mike = {};
        oscar = argFoo;
        mike['message_id'] = oscar;
        oscar = argBar;
        mike['error_message'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['logVoiceMessagePlaybackFailed'] = mike;
    return entity;
})();