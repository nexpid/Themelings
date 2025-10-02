// app/modules/quests/lib/VideoQuestAsset.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var6 = {};
    var1 = 'video_player_video';
    var6['VIDEO_PLAYER_VIDEO'] = var1;
    var1 = 'video_player_video_low_res';
    var6['VIDEO_PLAYER_VIDEO_LOW_RES'] = var1;
    var1 = 'video_player_video_hls';
    var6['VIDEO_PLAYER_VIDEO_HLS'] = var1;
    var1 = 'video_player_thumbnail';
    var6['VIDEO_PLAYER_THUMBNAIL'] = var1;
    var1 = 'video_player_caption';
    var6['VIDEO_PLAYER_CAPTION'] = var1;
    var1 = 'video_player_transcript';
    var6['VIDEO_PLAYER_TRANSCRIPT'] = var1;
    var1 = 'quest_bar_preview_video';
    var6['QUEST_BAR_PREVIEW_VIDEO'] = var1;
    var1 = 'quest_bar_preview_thumbnail';
    var6['QUEST_BAR_PREVIEW_THUMBNAIL'] = var1;
    var1 = 'quest_home_video';
    var6['QUEST_HOME_VIDEO'] = var1;
    var5 = {};
    var1 = 'video';
    var5['VIDEO'] = var1;
    var1 = 'videoLowRes';
    var5['VIDEO_LOW_RES'] = var1;
    var1 = 'videoHls';
    var5['VIDEO_HLS'] = var1;
    var4 = {};
    var1 = 'url';
    var4['VIDEO'] = var1;
    var1 = 'thumbnail';
    var4['THUMBNAIL'] = var1;
    var1 = 'caption';
    var4['CAPTION'] = var1;
    var1 = 'transcript';
    var4['TRANSCRIPT'] = var1;
    var1 = {};
    var10 = var5.VIDEO;
    var9 = var6.VIDEO_PLAYER_VIDEO;
    var1[var10] = var9;
    var10 = var5.VIDEO_LOW_RES;
    var9 = var6.VIDEO_PLAYER_VIDEO_LOW_RES;
    var1[var10] = var9;
    var10 = var5.VIDEO_HLS;
    var9 = var6.VIDEO_PLAYER_VIDEO_HLS;
    var1[var10] = var9;
    var _closure1_slot2 = var1;
    var1 = 1;
    var7 = var7[var1];
    var1 = undefined;
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/quests/lib/VideoQuestAsset.tsx';
    var7 = var8.bind(var9)(var7);
    var3['VideoQuestAssetId'] = var6;
    var3['VideoVariant'] = var5;
    var3['VideoAssetProperty'] = var4;
    var4 = function resolveVideoQuestAsset(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var1 = var9.config;
            var1 = var1.taskConfigV2;
            var2 = var1.tasks;
            var1 = arg2;
            var2 = var2[var1];
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2.assets;
            var2 = arg3;
            var3 = var3[var2];
            if(!(var1 != var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = arg4;
            var12 = var3[var2];
            if(!(var1 != var12)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var8 = 0;
            var2 = var2[var8];
            var7 = undefined;
            var3 = var3.bind(var7)(var2);
            var2 = var3.getMimetype;
            var6 = var2.bind(var3)(var12);
            var3 = var1 == var6;
            var2 = null;
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = {};
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var10 = var4[var8];
            var11 = var5.bind(var7)(var10);
            var10 = var11.buildUrl;
            var9 = var9.id;
            var9 = var10.bind(var11)(var9, var12);
            var3['url'] = var9;
            var3['mimetype'] = var6;
            var4 = var4[var8];
            var4 = var5.bind(var7)(var4);
            var5 = var4.ANIMATED_MIMETYPES;
            var4 = var5.includes;
            var4 = var4.bind(var5)(var6);
            var3['isAnimated'] = var4;
            var2 = var3;
case 8:
            return var2;
case 6:
            return var1;
case 4:
            return var1;
case 2:
            return var1;
        }
    };
    var3['resolveVideoQuestAsset'] = var4;
    var2 = function getVideoAssetId(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var2 = var1 == var3;
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = _closure1_slot2;
            var1 = var2[var3];
case 10:
            return var1;
        }
    };
    var3['getVideoAssetId'] = var2;
    return var1;
})();