// app/lib/VideoSpinnerTimer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var5 = global;
    var10 = var5.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot10 = var4;
    var4 = {};
    var8 = 'self_video';
    var4['SELF_VIDEO'] = var8;
    var8 = 'self_stream';
    var4['SELF_STREAM'] = var8;
    var8 = 'remote_video';
    var4['REMOTE_VIDEO'] = var8;
    var8 = 'remote_stream';
    var4['REMOTE_STREAM'] = var8;
    var8 = 'change_video_background';
    var4['CHANGE_VIDEO_BACKGROUND'] = var8;
    var8 = 'replay_video_stream';
    var4['REPLAY_VIDEO_STREAM'] = var8;
    var5 = var5.Map;
    var8 = var5.prototype;
    var8 = Object.create(var8, {constructor: {value: var5}});
    var14 = var8;
    var5 = new var14[var5](var13);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot11 = var5;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function VideoSpinnerTimer(arg1) {
            var3 = this;
            var5 = _closure1_slot3;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = null;
            var3['spinnerVisibleStart'] = var4;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 8;
            var2 = var5[var2];
            var5 = var4.bind(var1)(var2);
            var2 = var5.prototype;
            var4 = Object.create(var2, {constructor: {value: var5}});
            var7 = arg1;
            var8 = var4;
            var2 = new var8[var5](var7, var6);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['logger'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'onSpinnerStarted';
        var1['key'] = var2;
        var2 = function value() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = this;
                var3 = var2.spinnerVisibleStart;
                var1 = null;
                if(!(var1 == var3)) { _fun0001_ip = 55; continue _fun0001 }
 15:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 9;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var2['spinnerVisibleStart'] = var1;
 55:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'trackSpinnerDuration';
        var1['key'] = var6;
        var5 = function value(arg1, arg2, arg3) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var10 = arg1;
                var7 = arg3;
                var1 = this;
                var2 = var1.spinnerVisibleStart;
                var3 = null;
                if(!(var3 != var2)) { _fun0002_ip = 569; continue _fun0002 }
 24:
                var4 = _closure1_slot11;
                var2 = var4.get;
                var4 = var2.bind(var4)(var7);
                var8 = var3 != var4;
                var2 = 0;
                var5 = 0;
                if(!var8) { _fun0002_ip = 55; continue _fun0002 }
 52:
                var5 = var4;
 55:
                var4 = 1;
                var9 = var5 + var4;
                var5 = _closure1_slot11;
                var4 = var5.set;
                var4 = var4.bind(var5)(var7, var9);
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 9;
                var5 = var5[var4];
                var4 = undefined;
                var7 = var7.bind(var4)(var5);
                var5 = var7.now;
                var7 = var5.bind(var7)();
                var5 = var1.spinnerVisibleStart;
                var8 = var7 - var5;
                var1['spinnerVisibleStart'] = var3;
                if(!(!(var8 < var2))) { _fun0002_ip = 506; continue _fun0002 }
 131:
                var7 = var1.logger;
                var5 = var7.info;
                var2 = global;
                var2 = var2.HermesInternal;
                var14 = var2.concat;
                var21 = 'spinner visible for ';
                var19 = ' ms\n      [';
                var17 = ', count for stream: ';
                var15 = ']';
                var20 = var8;
                var18 = var10;
                var16 = var9;
                var2 = var21[var14](var20, var19, var18, var17, var16, var15, var14);
                var2 = var5.bind(var7)(var2);
                var14 = _closure1_slot8;
                var2 = var14.getGuildId;
                var12 = var2.bind(var14)();
                var7 = _closure1_slot9;
                var5 = var7.getUserVoiceChannelId;
                var11 = _closure1_slot5;
                var2 = var11.getId;
                var2 = var2.bind(var11)();
                var11 = var5.bind(var7)(var12, var2);
                var5 = _closure1_slot6;
                var2 = var5.getChannel;
                var5 = var2.bind(var5)(var11);
                var2 = var3 != var5;
                var7 = null;
                if(!var2) { _fun0002_ip = 338; continue _fun0002 }
 262:
                var2 = var5.isGuildVoice;
                var2 = var2.bind(var5)();
                var7 = 'guild_voice';
                if(var2) { _fun0002_ip = 338; continue _fun0002 }
 281:
                var2 = var5.isGuildStageVoice;
                var2 = var2.bind(var5)();
                var7 = 'is_stage_channel';
                if(var2) { _fun0002_ip = 338; continue _fun0002 }
 300:
                var2 = var5.isDM;
                var2 = var2.bind(var5)();
                var7 = 'dm';
                if(var2) { _fun0002_ip = 338; continue _fun0002 }
 317:
                var2 = var5.isGroupDM;
                var2 = var2.bind(var5)();
                var7 = null;
                if(!var2) { _fun0002_ip = 338; continue _fun0002 }
 332:
                var7 = 'group_dm';
 338:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 10;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var4 = var5.track;
                var2 = _closure1_slot10;
                var3 = var2.VIDEO_SPINNER_SHOWN_V2;
                var2 = {};
                var2['video_spinner_context'] = var10;
                var2['duration_video_spinner_visible_ms'] = var8;
                var13 = var14.getRTCConnectionId;
                var13 = var13.bind(var14)();
                var2['rtc_connection_id'] = var13;
                var13 = var14.getMediaSessionId;
                var13 = var13.bind(var14)();
                var2['media_session_id'] = var13;
                var2['event_count_for_stream'] = var9;
                var2['guild_id'] = var12;
                var2['channel_id'] = var11;
                var2['channel_type'] = var7;
                var7 = arg2;
                var2['spinning_user_id'] = var7;
                var7 = _closure1_slot7;
                var6 = var7.getType;
                var6 = var6.bind(var7)();
                var2['connection_type'] = var6;
                var6 = var7.getEffectiveConnectionSpeed;
                var6 = var6.bind(var7)();
                var2['effective_connection_speed'] = var6;
                var6 = var7.getServiceProvider;
                var6 = var6.bind(var7)();
                var2['service_provider'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                _fun0002_ip = 569; continue _fun0002;
 506:
                var3 = var1.logger;
                var2 = var3.warn;
                var1 = global;
                var1 = var1.HermesInternal;
                var7 = var1.concat;
                var21 = 'spinner duration is negative: ';
                var19 = ' ms\n        [';
                var17 = ', count for stream: ';
                var15 = ']';
                var20 = var8;
                var18 = var10;
                var16 = var9;
                var1 = var21[var7](var20, var19, var18, var17, var16, var15, var14);
                var1 = var2.bind(var3)(var1);
 569:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'lib/VideoSpinnerTimer.tsx';
    var5 = var6.bind(var7)(var5);
    var3['VideoSpinnerContext'] = var4;
    var3['VideoSpinnerTimer'] = var2;
    return var1;
})();