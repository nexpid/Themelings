// app/modules/voice_messages/VoiceMessageAnalytics.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot2 = tangon;
    tangon = {};
    report = 'sent';
    tangon['SENT'] = report;
    report = 'cancelled_duration';
    tangon['CANCELLED_DURATION'] = report;
    report = 'cancelled_user_requested';
    tangon['CANCELLED_USER_REQUESTED'] = report;
    report = 'cancelled_gesture_conflict';
    tangon['CANCELLED_GESTURE_CONFLICT'] = report;
    report = 'cancelled_on_background';
    tangon['CANCELLED_ON_BACKGROUND'] = report;
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/voice_messages/VoiceMessageAnalytics.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['VoiceMessageRecordingResult'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: logVoiceMessagePlaybackStarted
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            offset = argBar;
            verify = argBaz;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 1;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot2;
            zuuluu = michal.VOICE_MESSAGE_PLAYBACK_STARTED;
            michal = {};
            oscard = argFoo;
            michal['message_id'] = oscard;
            michal['total_duration_secs'] = offset;
            oscard = global;
            option = oscard.Math;
            golfie = option.min;
            yankee = null;
            oscard = verify;
            if(!(yankee != offset)) { _fun00002_ip = 86; continue _fun00001 }
 83:
            oscard = offset;
 86:
            oscard = golfie.bind(option)(oscard, verify);
            michal['start_duration_secs'] = oscard;
            oscard = argCor;
            michal['sender_user_id'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['logVoiceMessagePlaybackStarted'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: logVoiceMessagePlaybackEnded
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            offset = argBar;
            verify = argBaz;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 1;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot2;
            zuuluu = michal.VOICE_MESSAGE_PLAYBACK_ENDED;
            michal = {};
            oscard = argFoo;
            michal['message_id'] = oscard;
            michal['total_duration_secs'] = offset;
            oscard = global;
            option = oscard.Math;
            golfie = option.min;
            yankee = null;
            oscard = verify;
            if(!(yankee != offset)) { _fun00004_ip = 86; continue _fun00003 }
 83:
            oscard = offset;
 86:
            oscard = golfie.bind(option)(oscard, verify);
            michal['end_duration_secs'] = oscard;
            oscard = argCor;
            michal['sender_user_id'] = oscard;
            oscard = argGra;
            michal['duration_listening_secs'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['logVoiceMessagePlaybackEnded'] = tangon;
    michal = function(argFoo, argBar) { // Original name: logVoiceMessagePlaybackFailed
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 1;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot2;
        zuuluu = michal.VOICE_MESSAGE_PLAYBACK_FAILED;
        michal = {};
        oscard = argFoo;
        michal['message_id'] = oscard;
        oscard = argBar;
        michal['error_message'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['logVoiceMessagePlaybackFailed'] = michal;
    return entity;
})();