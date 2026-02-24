// app/modules/voice_calls/collectCallFeedback.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_calls/collectCallFeedback.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function collectCallFeedback(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot7;
            var2 = var3.getVoiceChannelId;
            var2 = var2.bind(var3)();
            var5 = _closure1_slot4;
            var3 = var5.getChannel;
            var8 = var3.bind(var5)(var2);
            var5 = null;
            var3 = arg2;
            if(!(var5 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!(var5 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            if(!(var5 == var8)) { _fun0001_ip = 5; continue _fun0001 }
case 2:
            var2 = undefined;
            var2 = var4.bind(var2)();
            _fun0001_ip = 6; continue _fun0001;
case 5:
            var3 = _closure1_slot6;
            var2 = var3.getRTCConnection;
            var6 = var2.bind(var3)();
            var2 = var5 == var6;
            var3 = undefined;
            var7 = undefined;
            if(var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = var6.getVoiceDurationStats;
            var7 = var2.bind(var6)();
case 7:
            var2 = {};
            var6 = var8.id;
            var2['channel_id'] = var6;
            var6 = var8.type;
            var2['channel_type'] = var6;
            var6 = var8.getGuildId;
            var6 = var6.bind(var8)();
            var2['guild_id'] = var6;
            var8 = _closure1_slot6;
            var6 = var8.getRTCConnectionId;
            var6 = var6.bind(var8)();
            var2['rtc_connection_id'] = var6;
            var6 = var8.getDuration;
            var6 = var6.bind(var8)();
            var2['duration'] = var6;
            var6 = var8.getMediaSessionId;
            var6 = var6.bind(var8)();
            var2['media_session_id'] = var6;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 7;
            var6 = var10[var6];
            var11 = var9.bind(var3)(var6);
            var10 = var11.getVoiceStateMetadata;
            var6 = var8.getGuildId;
            var9 = var6.bind(var8)();
            var6 = var8.getChannelId;
            var8 = var6.bind(var8)();
            var6 = arg4;
            var13 = var10.bind(var11)(var9, var8, var6);
            var14 = var2;
            var6 = copyDataProperties(var14, var13);
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var6 = var7.duration_speaking_voice_filter_ids;
case 9:
            var9 = var5 != var6;
            var8 = null;
            if(!var9) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var8 = var6;
case 11:
            var6 = 'duration_speaking_voice_filter_ids';
            var2[var6] = var8;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var6 = var7.duration_speaking_voice_filter_ms;
case 13:
            var9 = var5 != var6;
            var8 = null;
            if(!var9) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var8 = var6;
case 15:
            var6 = 'duration_speaking_voice_filter_ms';
            var2[var6] = var8;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var6 = var7.duration_muted_ms;
case 17:
            var8 = var5 != var6;
            var7 = null;
            if(!var8) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var7 = var6;
case 19:
            var6 = 'duration_muted_ms';
            var2[var6] = var7;
            var7 = _closure1_slot9;
            var6 = var7.getCurrentRouteType;
            var7 = var6.bind(var7)();
            var6 = 'output_audio_route_type';
            var2[var6] = var7;
            var4 = var4.bind(var3)();
            var4 = _closure1_slot3;
            var4 = var4.hasUsedBackgroundInCall;
            if(var4) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 10;
            var4 = var7[var4];
            var7 = var6.bind(var3)(var4);
            var6 = var7.dispatch;
            var4 = {};
            var8 = 'VOICE_CHANNEL_SHOW_FEEDBACK';
            var4['type'] = var8;
            var4['analyticsData'] = var2;
            var4 = var6.bind(var7)(var4);
            _fun0001_ip = 6; continue _fun0001;
case 21:
            var4 = {};
            var14 = var4;
            var13 = var2;
            var2 = copyDataProperties(var14, var13);
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 8;
            var2 = var7[var2];
            var7 = var6.bind(var3)(var2);
            var6 = var7.getLastUsedVideoBackgroundOption;
            var8 = _closure1_slot8;
            var2 = var8.getCurrentUser;
            var2 = var2.bind(var8)();
            var8 = var6.bind(var7)(var2);
            var2 = {};
            var9 = _closure1_slot5;
            var6 = var9.getVideoDevices;
            var7 = var6.bind(var9)();
            var6 = var9.getVideoDeviceId;
            var6 = var6.bind(var9)();
            var6 = var7[var6];
            var7 = var5 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var5 = var6.name;
case 23:
            var2['video_device_name'] = var5;
            var6 = _closure1_slot5;
            var5 = var6.getHardwareEncoding;
            var5 = var5.bind(var6)();
            var2['video_hardware_scaling_enabled'] = var5;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = 9;
            var9 = var5[var6];
            var10 = var7.bind(var3)(var9);
            var9 = var10.getEffectAnalyticsType;
            var9 = var9.bind(var10)(var8);
            var2['video_effect_type'] = var9;
            var6 = var5[var6];
            var7 = var7.bind(var3)(var6);
            var6 = var7.getEffectDetailAnalyticsName;
            var6 = var6.bind(var7)(var8);
            var2['video_effect_detail'] = var6;
            var14 = var4;
            var13 = var2;
            var2 = copyDataProperties(var14, var13);
            var2 = _closure1_slot1;
            var1 = 10;
            var1 = var5[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var5 = 'VIDEO_BACKGROUND_SHOW_FEEDBACK';
            var1['type'] = var5;
            var1['analyticsData'] = var4;
            var1 = var2.bind(var3)(var1);
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();