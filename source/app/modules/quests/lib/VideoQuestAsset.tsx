// app/modules/quests/lib/VideoQuestAsset.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var4 = var4.QuestVariants;
    var _closure1_slot2 = var4;
    var6 = {};
    var4 = 'video_player_video';
    var6['VIDEO_PLAYER_VIDEO'] = var4;
    var4 = 'video_player_video_low_res';
    var6['VIDEO_PLAYER_VIDEO_LOW_RES'] = var4;
    var4 = 'video_player_video_hls';
    var6['VIDEO_PLAYER_VIDEO_HLS'] = var4;
    var4 = 'video_player_thumbnail';
    var6['VIDEO_PLAYER_THUMBNAIL'] = var4;
    var4 = 'video_player_caption';
    var6['VIDEO_PLAYER_CAPTION'] = var4;
    var4 = 'video_player_transcript';
    var6['VIDEO_PLAYER_TRANSCRIPT'] = var4;
    var4 = 'quest_bar_preview_video';
    var6['QUEST_BAR_PREVIEW_VIDEO'] = var4;
    var4 = 'quest_bar_preview_thumbnail';
    var6['QUEST_BAR_PREVIEW_THUMBNAIL'] = var4;
    var4 = 'quest_home_video';
    var6['QUEST_HOME_VIDEO'] = var4;
    var5 = {};
    var4 = 'video';
    var5['VIDEO'] = var4;
    var4 = 'videoLowRes';
    var5['VIDEO_LOW_RES'] = var4;
    var4 = 'videoHls';
    var5['VIDEO_HLS'] = var4;
    var4 = {};
    var7 = 'url';
    var4['VIDEO'] = var7;
    var7 = 'thumbnail';
    var4['THUMBNAIL'] = var7;
    var7 = 'caption';
    var4['CAPTION'] = var7;
    var7 = 'transcript';
    var4['TRANSCRIPT'] = var7;
    var7 = {};
    var11 = var5.VIDEO;
    var10 = var6.VIDEO_PLAYER_VIDEO;
    var7[var11] = var10;
    var11 = var5.VIDEO_LOW_RES;
    var10 = var6.VIDEO_PLAYER_VIDEO_LOW_RES;
    var7[var11] = var10;
    var11 = var5.VIDEO_HLS;
    var10 = var6.VIDEO_PLAYER_VIDEO_HLS;
    var7[var11] = var10;
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/quests/lib/VideoQuestAsset.tsx';
    var7 = var8.bind(var9)(var7);
    var3['VideoQuestAssetId'] = var6;
    var3['VideoVariant'] = var5;
    var3['VideoAssetProperty'] = var4;
    var4 = function resolveVideoQuestAsset(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var9 = arg1;
            var1 = var9.config;
            var1 = var1.taskConfigV2;
            var2 = var1.tasks;
            var1 = arg2;
            var2 = var2[var1];
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 238; continue _fun0001 }
 36:
            var3 = var2.assets;
            var2 = arg3;
            var3 = var3[var2];
            if(!(var1 != var3)) { _fun0001_ip = 236; continue _fun0001 }
 56:
            var2 = arg4;
            var13 = var3[var2];
            if(!(var1 != var13)) { _fun0001_ip = 234; continue _fun0001 }
 70:
            var2 = var9.config;
            var5 = var2.features;
            var3 = var5.includes;
            var2 = _closure1_slot2;
            var2 = var2.QUESTS_CDN;
            var14 = var3.bind(var5)(var2);
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var8 = 1;
            var2 = var2[var8];
            var7 = undefined;
            var3 = var3.bind(var7)(var2);
            var2 = var3.getMimetype;
            var6 = var2.bind(var3)(var13);
            var3 = var1 == var6;
            var2 = null;
            if(var3) { _fun0001_ip = 232; continue _fun0001 }
 146:
            var3 = {};
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var10 = var4[var8];
            var12 = var5.bind(var7)(var10);
            var11 = var12.buildUrl;
            var10 = var9.id;
            var9 = {};
            var9['newCdn'] = var14;
            var9 = var11.bind(var12)(var10, var13, var9);
            var3['url'] = var9;
            var3['mimetype'] = var6;
            var4 = var4[var8];
            var4 = var5.bind(var7)(var4);
            var5 = var4.ANIMATED_MIMETYPES;
            var4 = var5.includes;
            var4 = var4.bind(var5)(var6);
            var3['isAnimated'] = var4;
            var2 = var3;
 232:
            return var2;
 234:
            return var1;
 236:
            return var1;
 238:
            return var1;
        }
    };
    var3['resolveVideoQuestAsset'] = var4;
    var2 = function getVideoAssetId(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var1 = null;
            var2 = var1 == var3;
            if(var2) { _fun0002_ip = 23; continue _fun0002 }
 12:
            var2 = _closure1_slot3;
            var1 = var2[var3];
 23:
            return var1;
        }
    };
    var3['getVideoAssetId'] = var2;
    return var1;
})();