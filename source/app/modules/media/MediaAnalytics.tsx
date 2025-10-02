// app/modules/media/MediaAnalytics.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media/MediaAnalytics.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function logMediaAttachmentPlaybackStarted(arg1, arg2, arg3, arg4, arg5, arg6) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var6 = arg2;
            var10 = arg3;
            var9 = arg5;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot2;
            var3 = var2.MEDIA_ATTACHMENT_PLAYBACK_STARTED;
            var2 = {};
            var8 = var7.guild_id;
            var2['guild_id'] = var8;
            var8 = var7.id;
            var2['channel_id'] = var8;
            var7 = var7.type;
            var2['channel_type'] = var7;
            var7 = var6.content_type;
            var2['type'] = var7;
            var7 = var6.flags;
            var2['flags'] = var7;
            var6 = var6.size;
            var2['size'] = var6;
            var2['duration'] = var10;
            var6 = arg4;
            var2['message_id'] = var6;
            var6 = global;
            var8 = var6.Math;
            var7 = var8.min;
            var11 = null;
            var6 = var9;
            if(!(var11 != var10)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var10;
case 2:
            var6 = var7.bind(var8)(var6, var9);
            var2['start_duration_secs'] = var6;
            var6 = arg6;
            var2['sender_user_id'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['logMediaAttachmentPlaybackStarted'] = var4;
    var2 = function logMediaAttachmentPlaybackEnded(arg1, arg2, arg3, arg4, arg5, arg6) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
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
            var3 = var2.MEDIA_ATTACHMENT_PLAYBACK_ENDED;
            var2 = {};
            var6 = arg1;
            var2['message_id'] = var6;
            var2['total_duration_secs'] = var10;
            var6 = global;
            var8 = var6.Math;
            var7 = var8.min;
            var11 = null;
            var6 = var9;
            if(!(var11 != var10)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var6 = var10;
case 4:
            var6 = var7.bind(var8)(var6, var9);
            var2['end_duration_secs'] = var6;
            var6 = arg4;
            var2['sender_user_id'] = var6;
            var6 = arg5;
            var2['duration_listening_secs'] = var6;
            var6 = arg6;
            var6 = var6.content_type;
            var2['type'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['logMediaAttachmentPlaybackEnded'] = var2;
    return var1;
})();