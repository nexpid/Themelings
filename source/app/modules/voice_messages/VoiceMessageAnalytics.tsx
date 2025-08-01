// app/modules/voice_messages/VoiceMessageAnalytics.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot2 = var4;
    var4 = {};
    var5 = 'sent';
    var4['SENT'] = var5;
    var5 = 'cancelled_duration';
    var4['CANCELLED_DURATION'] = var5;
    var5 = 'cancelled_user_requested';
    var4['CANCELLED_USER_REQUESTED'] = var5;
    var5 = 'cancelled_gesture_conflict';
    var4['CANCELLED_GESTURE_CONFLICT'] = var5;
    var5 = 'cancelled_on_background';
    var4['CANCELLED_ON_BACKGROUND'] = var5;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_messages/VoiceMessageAnalytics.tsx';
    var5 = var6.bind(var7)(var5);
    var3['VoiceMessageRecordingResult'] = var4;
    var4 = function logVoiceMessagePlaybackStarted(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var10 = arg2;
            var9 = arg3;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot2;
            var3 = var2.VOICE_MESSAGE_PLAYBACK_STARTED;
            var2 = {};
            var6 = arg1;
            var2['message_id'] = var6;
            var2['total_duration_secs'] = var10;
            var6 = global;
            var8 = var6.Math;
            var7 = var8.min;
            var11 = null;
            var6 = var9;
            if(!(var11 != var10)) { _fun0001_ip = 86; continue _fun0001 }
 83:
            var6 = var10;
 86:
            var6 = var7.bind(var8)(var6, var9);
            var2['start_duration_secs'] = var6;
            var6 = arg4;
            var2['sender_user_id'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['logVoiceMessagePlaybackStarted'] = var4;
    var4 = function logVoiceMessagePlaybackEnded(arg1, arg2, arg3, arg4, arg5) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var10 = arg2;
            var9 = arg3;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot2;
            var3 = var2.VOICE_MESSAGE_PLAYBACK_ENDED;
            var2 = {};
            var6 = arg1;
            var2['message_id'] = var6;
            var2['total_duration_secs'] = var10;
            var6 = global;
            var8 = var6.Math;
            var7 = var8.min;
            var11 = null;
            var6 = var9;
            if(!(var11 != var10)) { _fun0002_ip = 86; continue _fun0002 }
 83:
            var6 = var10;
 86:
            var6 = var7.bind(var8)(var6, var9);
            var2['end_duration_secs'] = var6;
            var6 = arg4;
            var2['sender_user_id'] = var6;
            var6 = arg5;
            var2['duration_listening_secs'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['logVoiceMessagePlaybackEnded'] = var4;
    var2 = function logVoiceMessagePlaybackFailed(arg1, arg2) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 1;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot2;
        var3 = var2.VOICE_MESSAGE_PLAYBACK_FAILED;
        var2 = {};
        var6 = arg1;
        var2['message_id'] = var6;
        var6 = arg2;
        var2['error_message'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['logVoiceMessagePlaybackFailed'] = var2;
    return var1;
})();