// app/modules/media_engine/trackVideoToggle.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_engine/trackVideoToggle.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function trackVideoToggle(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 1;
            var2 = var4[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.VideoHealthManager;
            var2 = var2.defaultConfig;
            var8 = var2.featureEnabled;
            var12 = var2.windowLength;
            var11 = var2.allowedPoorFpsRatio;
            var10 = var2.fpsThreshold;
            var7 = var2.backoffTimeSec;
            var3 = _closure1_slot1;
            var2 = 2;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot5;
            var3 = var2.VIDEO_TOGGLED;
            var2 = {};
            var6 = arg2;
            var2['video_toggle_reason'] = var6;
            var6 = arg1;
            var2['toggled_user_id'] = var6;
            var9 = _closure1_slot3;
            var6 = null;
            var14 = var6 == var9;
            var9 = undefined;
            if(var14) { _fun0001_ip = 143; continue _fun0001 }
 135:
            var14 = _closure1_slot3;
            var9 = var14.bind(var1)();
 143:
            var2['rtc_connection_id'] = var9;
            var9 = _closure1_slot4;
            var14 = var6 == var9;
            var9 = undefined;
            if(var14) { _fun0001_ip = 169; continue _fun0001 }
 161:
            var13 = _closure1_slot4;
            var9 = var13.bind(var1)();
 169:
            var2['media_session_id'] = var9;
            var9 = null;
            if(!var8) { _fun0001_ip = 182; continue _fun0001 }
 179:
            var9 = var12;
 182:
            var2['video_health_manager_window_length'] = var9;
            var9 = null;
            if(!var8) { _fun0001_ip = 197; continue _fun0001 }
 194:
            var9 = var11;
 197:
            var2['video_health_manager_poor_fps_ratio'] = var9;
            var9 = null;
            if(!var8) { _fun0001_ip = 212; continue _fun0001 }
 209:
            var9 = var10;
 212:
            var2['video_health_manager_fps_threshold'] = var9;
            var9 = arg3;
            var2['is_video_shown'] = var9;
            var6 = null;
            if(!var8) { _fun0001_ip = 237; continue _fun0001 }
 234:
            var6 = var7;
 237:
            var2['video_health_manager_backoff_time_seconds'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function setVideoToggleAnalyticsParams(arg1, arg2) {
        var1 = arg1;
        var _closure1_slot3 = var1;
        var1 = arg2;
        var _closure1_slot4 = var1;
        var1 = undefined;
        return var1;
    };
    var3['setVideoToggleAnalyticsParams'] = var2;
    return var1;
})();