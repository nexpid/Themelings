// app/modules/quests/lib/AssetUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var12;
    var6 = function resolveAsset(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg2;
            var6 = _closure1_slot12;
            var4 = undefined;
            var2 = arg1;
            var1 = arg3;
            var2 = var6.bind(var4)(var2, var5, var1);
            var1 = _closure1_slot13;
            var5 = var1.bind(var4)(var5);
            var1 = {};
            var1['url'] = var2;
            var1['mimetype'] = var5;
            var2 = null;
            var2 = var2 != var5;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot7;
            var3 = var4.includes;
            var2 = var3.bind(var4)(var5);
case 2:
            var1['isAnimated'] = var2;
            return var1;
        }
    };
    var _closure1_slot10 = var6;
    var1 = function getVideoOrDefaultAsset(arg1, arg2) {
        var1 = arg2;
        return var1;
    };
    var _closure1_slot11 = var1;
    var5 = function buildUrl(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg2;
            var2 = arg3;
            var4 = var1.startsWith;
            var3 = 'blob:';
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var8 = _closure1_slot4;
            var4 = var1.includes;
            var7 = '/';
            var4 = var4.bind(var1)(var7);
            if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var5 = null;
            var6 = var5 == var2;
            var4 = undefined;
            if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = var2.theme;
case 8:
            var4 = var5 != var4;
            var6 = '';
            var5 = var6;
            if(!var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4 = var2.theme;
            var2 = global;
            var2 = var2.HermesInternal;
            var2 = var2.concat;
            var5 = var2.bind(var7)(var4);
case 10:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var12 = arg1;
            var14 = var6;
            var13 = var8;
            var11 = var5;
            var10 = var7;
            var9 = var1;
            var2 = var14[var4](var13, var12, var11, var10, var9, var8);
            _fun0002_ip = 12; continue _fun0002;
case 6:
            var5 = _closure1_slot3;
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = '';
            var2 = var4.bind(var3)(var5, var1);
case 12:
            return var2;
case 4:
            var4 = var1.split;
            var3 = '?';
            var2 = 1;
            var4 = var4.bind(var1)(var3, var2);
            var3 = var4.at;
            var2 = 0;
            var2 = var3.bind(var4)(var2);
            var3 = null;
            if(!(var3 != var2)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var1 = var2;
case 13:
            return var1;
        }
    };
    var _closure1_slot12 = var5;
    var4 = function getMimetype(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var8 = arg1;
            var2 = var8.startsWith;
            var1 = 'blob:';
            var6 = var2.bind(var8)(var1);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 7;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.toURLSafe;
            var3 = var1.bind(var3)(var8);
            var1 = null;
            var5 = var1 == var3;
            if(var6) { _fun0003_ip = 15; continue _fun0003 }
case 2:
            var6 = undefined;
            if(var5) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var10 = var3.searchParams;
            var9 = var10.get;
            var7 = 'format';
            var9 = var9.bind(var10)(var7);
            var7 = var1 == var9;
            var6 = undefined;
            if(var7) { _fun0003_ip = 16; continue _fun0003 }
case 18:
            var7 = var9.toLowerCase;
            var6 = var7.bind(var9)();
case 16:
            if(!(var1 == var6)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var7 = _closure1_slot6;
            var2 = var7.exec;
            var8 = var2.bind(var7)(var8);
            var7 = var1 == var8;
            var2 = undefined;
            if(var7) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var7 = 1;
            var8 = var8[var7];
            var7 = var1 == var8;
            var2 = undefined;
            if(var7) { _fun0003_ip = 21; continue _fun0003 }
case 23:
            var7 = var8.toLowerCase;
            var2 = var7.bind(var8)();
case 21:
            var6 = var2;
case 19:
            var2 = 'webm';
            if(!(var2 !== var6)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var2 = 'mp4';
            if(!(var2 !== var6)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var2 = 'webp';
            if(!(var2 !== var6)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var2 = 'jpg';
            if(!(var2 !== var6)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var2 = 'jpeg';
            if(!(var2 !== var6)) { _fun0003_ip = 30; continue _fun0003 }
case 32:
            var2 = 'png';
            if(!(var2 !== var6)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = 'gif';
            if(!(var2 !== var6)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var2 = 'svg';
            if(!(var2 !== var6)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var2 = 'txt';
            if(!(var2 !== var6)) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var2 = 'vtt';
            if(!(var2 !== var6)) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var2 = 'ts';
            if(!(var2 !== var6)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var2 = 'm3u8';
            if(!(var2 !== var6)) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            return var1;
case 45:
            var2 = 'application/x-mpegURL';
            return var2;
case 43:
            var2 = 'video/mp2t';
            return var2;
case 41:
            var2 = 'text/vtt';
            return var2;
case 39:
            var2 = 'text/plain';
            return var2;
case 37:
            var2 = 'image/svg+xml';
            return var2;
case 35:
            var2 = 'image/gif';
            return var2;
case 33:
            var2 = 'image/png';
            return var2;
case 30:
            var2 = 'image/jpeg';
            return var2;
case 28:
            var2 = 'image/webp';
            return var2;
case 26:
            var2 = 'video/mp4';
            return var2;
case 24:
            var2 = 'video/webm';
            return var2;
case 15:
            var2 = undefined;
            if(var5) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var6 = var3.searchParams;
            var5 = var6.get;
            var3 = 'mimetype';
            var2 = var5.bind(var6)(var3);
case 47:
            var5 = var1 != var2;
            var3 = undefined;
            if(!var5) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            var3 = var2;
case 49:
            var2 = var1 != var3;
            var1 = null;
            if(!var2) { _fun0003_ip = 51; continue _fun0003 }
case 52:
            var2 = global;
            var2 = var2.decodeURIComponent;
            var1 = var2.bind(var4)(var3);
case 51:
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var1 = function safeMediaProxyDimension(arg1) {
        var1 = global;
        var4 = var1.Math;
        var3 = var4.min;
        var5 = var1.Math;
        var2 = var5.ceil;
        var1 = arg1;
        var2 = var2.bind(var5)(var1);
        var1 = _closure1_slot5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var12[var1];
    var1 = undefined;
    var7 = var11.bind(var1)(var7);
    var8 = var7.CDN_URL_BASE;
    var _closure1_slot3 = var8;
    var7 = var7.QUESTS_CDN_URL_BASE;
    var _closure1_slot4 = var7;
    var7 = 1;
    var7 = var12[var7];
    var7 = var11.bind(var1)(var7);
    var7 = var7.MEDIA_PROXY_MAX_TARGET_RESOLUTION;
    var _closure1_slot5 = var7;
    var9 = /\.([a-zA-Z0-9]+)$/;
    var _closure1_slot6 = var9;
    var8 = ['video/mp4', 'video/webm'];
    var _closure1_slot7 = var8;
    var7 = {};
    var10 = 'hero';
    var7['HERO'] = var10;
    var10 = 'hero_image';
    var7['HERO_IMAGE'] = var10;
    var10 = 'hero_video';
    var7['HERO_VIDEO'] = var10;
    var10 = 'quest_bar_hero';
    var7['QUEST_BAR_HERO'] = var10;
    var10 = 'quest_bar_hero_video';
    var7['QUEST_BAR_HERO_VIDEO'] = var10;
    var10 = 'quest_bar_hero_image';
    var7['QUEST_BAR_HERO_IMAGE'] = var10;
    var10 = 'reward';
    var7['REWARD'] = var10;
    var10 = 'reward_image';
    var7['REWARD_IMAGE'] = var10;
    var10 = 'game_tile';
    var7['GAME_TILE'] = var10;
    var10 = 'logo_type';
    var7['LOGO_TYPE'] = var10;
    var10 = 'cosponsor_logo_type';
    var7['COSPONSOR_LOGO_TYPE'] = var10;
    var10 = 'video_player_video';
    var7['VIDEO_PLAYER_VIDEO'] = var10;
    var10 = 'video_player_video_low_res';
    var7['VIDEO_PLAYER_VIDEO_LOW_RES'] = var10;
    var10 = 'video_player_video_hls';
    var7['VIDEO_PLAYER_VIDEO_HLS'] = var10;
    var10 = 'video_player_thumbnail';
    var7['VIDEO_PLAYER_THUMBNAIL'] = var10;
    var10 = 'video_player_caption';
    var7['VIDEO_PLAYER_CAPTION'] = var10;
    var10 = 'video_player_transcript';
    var7['VIDEO_PLAYER_TRANSCRIPT'] = var10;
    var _closure1_slot8 = var7;
    var16 = {};
    var10 = 'video';
    var16['VIDEO'] = var10;
    var10 = 'videoLowRes';
    var16['VIDEO_LOW_RES'] = var10;
    var10 = 'videoHls';
    var16['VIDEO_HLS'] = var10;
    var15 = {};
    var10 = 'url';
    var15['VIDEO'] = var10;
    var10 = 'thumbnail';
    var15['THUMBNAIL'] = var10;
    var10 = 'caption';
    var15['CAPTION'] = var10;
    var10 = 'transcript';
    var15['TRANSCRIPT'] = var10;
    var10 = {};
    var14 = var7.VIDEO_PLAYER_VIDEO;
    var13 = {};
    var17 = var16.VIDEO;
    var13['variant'] = var17;
    var17 = var15.VIDEO;
    var13['property'] = var17;
    var10[13] = var13;
    var14 = var7.VIDEO_PLAYER_VIDEO_LOW_RES;
    var13 = {};
    var17 = var16.VIDEO_LOW_RES;
    var13['variant'] = var17;
    var17 = var15.VIDEO;
    var13['property'] = var17;
    var10[13] = var13;
    var14 = var7.VIDEO_PLAYER_VIDEO_HLS;
    var13 = {};
    var17 = var16.VIDEO_HLS;
    var13['variant'] = var17;
    var17 = var15.VIDEO;
    var13['property'] = var17;
    var10[13] = var13;
    var14 = var7.VIDEO_PLAYER_THUMBNAIL;
    var13 = {};
    var17 = var16.VIDEO;
    var13['variant'] = var17;
    var17 = var15.THUMBNAIL;
    var13['property'] = var17;
    var10[13] = var13;
    var14 = var7.VIDEO_PLAYER_CAPTION;
    var13 = {};
    var17 = var16.VIDEO;
    var13['variant'] = var17;
    var17 = var15.CAPTION;
    var13['property'] = var17;
    var10[13] = var13;
    var14 = var7.VIDEO_PLAYER_TRANSCRIPT;
    var13 = {};
    var16 = var16.VIDEO;
    var13['variant'] = var16;
    var15 = var15.TRANSCRIPT;
    var13['property'] = var15;
    var10[13] = var13;
    var _closure1_slot9 = var10;
    var10 = 9;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/quests/lib/AssetUtils.tsx';
    var10 = var11.bind(var12)(var10);
    var3['EXTENSION_RE'] = var9;
    var3['ANIMATED_MIMETYPES'] = var8;
    var3['QuestAssetType'] = var7;
    var3['resolveAsset'] = var6;
    var6 = function getQuestAsset(arg1, arg2, arg3, arg4) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var7 = arg2;
            var8 = arg3;
            var4 = arg4;
            var1 = _closure1_slot8;
            var1 = var1.HERO;
            if(!(var1 !== var7)) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            var1 = _closure1_slot8;
            var1 = var1.HERO_IMAGE;
            if(!(var1 !== var7)) { _fun0004_ip = 55; continue _fun0004 }
case 56:
            var1 = _closure1_slot8;
            var1 = var1.HERO_VIDEO;
            if(!(var1 !== var7)) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var1 = _closure1_slot8;
            var1 = var1.QUEST_BAR_HERO;
            if(!(var1 !== var7)) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var1 = _closure1_slot8;
            var1 = var1.QUEST_BAR_HERO_VIDEO;
            if(!(var1 !== var7)) { _fun0004_ip = 61; continue _fun0004 }
case 62:
            var1 = _closure1_slot8;
            var1 = var1.QUEST_BAR_HERO_IMAGE;
            if(!(var1 !== var7)) { _fun0004_ip = 63; continue _fun0004 }
case 64:
            var1 = _closure1_slot8;
            var1 = var1.REWARD;
            if(!(var1 !== var7)) { _fun0004_ip = 65; continue _fun0004 }
case 66:
            var1 = _closure1_slot8;
            var1 = var1.REWARD_IMAGE;
            if(!(var1 !== var7)) { _fun0004_ip = 67; continue _fun0004 }
case 68:
            var1 = _closure1_slot8;
            var1 = var1.GAME_TILE;
            if(!(var1 !== var7)) { _fun0004_ip = 69; continue _fun0004 }
case 70:
            var1 = _closure1_slot8;
            var1 = var1.LOGO_TYPE;
            if(!(var1 !== var7)) { _fun0004_ip = 71; continue _fun0004 }
case 72:
            var1 = _closure1_slot8;
            var1 = var1.COSPONSOR_LOGO_TYPE;
            if(!(var1 !== var7)) { _fun0004_ip = 73; continue _fun0004 }
case 74:
            var1 = _closure1_slot8;
            var1 = var1.VIDEO_PLAYER_VIDEO;
            if(!(var1 !== var7)) { _fun0004_ip = 45; continue _fun0004 }
case 75:
            var1 = _closure1_slot8;
            var1 = var1.VIDEO_PLAYER_VIDEO_LOW_RES;
            if(!(var1 !== var7)) { _fun0004_ip = 45; continue _fun0004 }
case 76:
            var1 = _closure1_slot8;
            var1 = var1.VIDEO_PLAYER_VIDEO_HLS;
            if(!(var1 !== var7)) { _fun0004_ip = 45; continue _fun0004 }
case 77:
            var1 = _closure1_slot8;
            var1 = var1.VIDEO_PLAYER_THUMBNAIL;
            if(!(var1 !== var7)) { _fun0004_ip = 45; continue _fun0004 }
case 78:
            var1 = _closure1_slot8;
            var1 = var1.VIDEO_PLAYER_CAPTION;
            if(!(var1 !== var7)) { _fun0004_ip = 45; continue _fun0004 }
case 79:
            var1 = _closure1_slot8;
            var5 = var1.VIDEO_PLAYER_TRANSCRIPT;
            var9 = false;
            var6 = undefined;
            var1 = false;
            if(!(var5 === var7)) { _fun0004_ip = 80; continue _fun0004 }
case 45:
            var10 = var2.config;
            var5 = 'taskConfigV2';
            var5 = var5 in var10;
            if(var5) { _fun0004_ip = 81; continue _fun0004 }
case 82:
            var5 = null;
            return var5;
case 81:
            var5 = var2.config;
            var5 = var5.taskConfigV2;
            var10 = var5.tasks;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 6;
            var5 = var12[var5];
            var13 = undefined;
            var5 = var11.bind(var13)(var5);
            var11 = var5.FirstPartyQuestTaskTypes;
            if(var4) { _fun0004_ip = 83; continue _fun0004 }
case 84:
            var5 = var11.WATCH_VIDEO;
            _fun0004_ip = 85; continue _fun0004;
case 83:
            var5 = var11.WATCH_VIDEO_ON_MOBILE;
case 85:
            var10 = var10[var5];
            var5 = _closure1_slot9;
            var7 = var5[var7];
            var5 = null;
            var11 = var5 == var10;
            var12 = undefined;
            if(var11) { _fun0004_ip = 86; continue _fun0004 }
case 87:
            var11 = var10.assets;
            var10 = var7.variant;
            var10 = var11[var10];
            var11 = var5 == var10;
            var12 = undefined;
            if(var11) { _fun0004_ip = 86; continue _fun0004 }
case 88:
            var7 = var7.property;
            var12 = var10[var7];
case 86:
            var7 = var5 == var12;
            var9 = false;
            var1 = true;
            var6 = var12;
            if(!var7) { _fun0004_ip = 80; continue _fun0004 }
case 89:
            return var5;
case 73:
            var5 = var2.config;
            var7 = var5.cosponsorMetadata;
            var5 = null;
            if(!(var5 != var7)) { _fun0004_ip = 90; continue _fun0004 }
case 91:
            var7 = 'dark';
            if(!(var7 === var8)) { _fun0004_ip = 92; continue _fun0004 }
case 93:
            var7 = var2.config;
            var7 = var7.cosponsorMetadata;
            var7 = var7.logotypeDark;
            if(!(var5 == var7)) { _fun0004_ip = 94; continue _fun0004 }
case 92:
            var7 = 'light';
            if(!(var7 === var8)) { _fun0004_ip = 95; continue _fun0004 }
case 96:
            var7 = var2.config;
            var7 = var7.cosponsorMetadata;
            var7 = var7.logotypeLight;
            if(!(var5 == var7)) { _fun0004_ip = 97; continue _fun0004 }
case 95:
            var7 = var2.config;
            var7 = var7.cosponsorMetadata;
            var6 = var7.logotype;
            var9 = true;
            var1 = false;
            _fun0004_ip = 80; continue _fun0004;
case 97:
            var7 = var2.config;
            var7 = var7.cosponsorMetadata;
            var6 = var7.logotypeLight;
            var9 = false;
            var1 = false;
            _fun0004_ip = 80; continue _fun0004;
case 94:
            var7 = var2.config;
            var7 = var7.cosponsorMetadata;
            var6 = var7.logotypeDark;
            var9 = false;
            var1 = false;
            _fun0004_ip = 80; continue _fun0004;
case 90:
            return var5;
case 71:
            var5 = 'dark';
            if(!(var5 === var8)) { _fun0004_ip = 98; continue _fun0004 }
case 99:
            var5 = var2.config;
            var5 = var5.assets;
            var7 = var5.logotypeDark;
            var5 = null;
            if(!(var5 == var7)) { _fun0004_ip = 100; continue _fun0004 }
case 98:
            var5 = 'light';
            if(!(var5 === var8)) { _fun0004_ip = 101; continue _fun0004 }
case 102:
            var5 = var2.config;
            var5 = var5.assets;
            var7 = var5.logotypeLight;
            var5 = null;
            if(!(var5 == var7)) { _fun0004_ip = 103; continue _fun0004 }
case 101:
            var5 = var2.config;
            var5 = var5.assets;
            var6 = var5.logotype;
            var9 = true;
            var1 = false;
            _fun0004_ip = 80; continue _fun0004;
case 103:
            var5 = var2.config;
            var5 = var5.assets;
            var6 = var5.logotypeLight;
            var9 = false;
            var1 = false;
            _fun0004_ip = 80; continue _fun0004;
case 100:
            var5 = var2.config;
            var5 = var5.assets;
            var6 = var5.logotypeDark;
            var9 = false;
            var1 = false;
            _fun0004_ip = 80; continue _fun0004;
case 69:
            var5 = 'dark';
            if(!(var5 === var8)) { _fun0004_ip = 104; continue _fun0004 }
case 105:
            var5 = var2.config;
            var5 = var5.assets;
            var7 = var5.gameTileDark;
            var5 = null;
            if(!(var5 == var7)) { _fun0004_ip = 106; continue _fun0004 }
case 104:
            var5 = 'light';
            if(!(var5 === var8)) { _fun0004_ip = 107; continue _fun0004 }
case 108:
            var5 = var2.config;
            var5 = var5.assets;
            var7 = var5.gameTileLight;
            var5 = null;
            if(!(var5 == var7)) { _fun0004_ip = 109; continue _fun0004 }
case 107:
            var5 = var2.config;
            var5 = var5.assets;
            var6 = var5.gameTile;
            var9 = true;
            var1 = false;
            _fun0004_ip = 80; continue _fun0004;
case 109:
            var5 = var2.config;
            var5 = var5.assets;
            var6 = var5.gameTileLight;
            var9 = false;
            var1 = false;
            _fun0004_ip = 80; continue _fun0004;
case 106:
            var5 = var2.config;
            var5 = var5.assets;
            var6 = var5.gameTileDark;
            var9 = false;
            var1 = false;
            _fun0004_ip = 80; continue _fun0004;
case 67:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 2;
            var5 = var13[var5];
            var11 = undefined;
            var7 = var12.bind(var11)(var5);
            var5 = var7.getQuestPrimaryReward;
            var5 = var5.bind(var7)(var2);
            var10 = var5.type;
            var7 = 3;
            var7 = var13[var7];
            var7 = var12.bind(var11)(var7);
            var7 = var7.QuestRewardTypes;
            var7 = var7.VIRTUAL_CURRENCY;
            if(!(var10 !== var7)) { _fun0004_ip = 110; continue _fun0004 }
case 111:
            var6 = var5.asset;
            var9 = false;
            var1 = false;
            _fun0004_ip = 80; continue _fun0004;
case 110:
            var5 = null;
            return var5;
case 65:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 2;
            var5 = var13[var5];
            var11 = undefined;
            var7 = var12.bind(var11)(var5);
            var5 = var7.getQuestPrimaryReward;
            var7 = var5.bind(var7)(var2);
            var10 = var7.type;
            var5 = 3;
            var5 = var13[var5];
            var5 = var12.bind(var11)(var5);
            var5 = var5.QuestRewardTypes;
            var5 = var5.VIRTUAL_CURRENCY;
            if(!(var10 !== var5)) { _fun0004_ip = 112; continue _fun0004 }
case 113:
            var5 = _closure1_slot11;
            var10 = var7.assetVideo;
            var7 = var7.asset;
            var5 = var5.bind(var11)(var11, var7);
            var9 = false;
            var6 = var7;
            var1 = false;
            _fun0004_ip = 80; continue _fun0004;
case 112:
            if(var4) { _fun0004_ip = 114; continue _fun0004 }
case 115:
            var4 = {'url': null, 'mimetype': 'video/webm', 'isAnimated': true};
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 5;
            var5 = var10[var5];
            var5 = var7.bind(var11)(var5);
            var4['url'] = var5;
            _fun0004_ip = 116; continue _fun0004;
case 114:
            var5 = {'url': null, 'mimetype': 'video/mp4', 'isAnimated': true};
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 4;
            var7 = var12[var7];
            var7 = var10.bind(var11)(var7);
            var5['url'] = var7;
            var4 = var5;
case 116:
            return var4;
case 63:
            var4 = var2.config;
            var4 = var4.assets;
            var6 = var4.questBarHero;
            var9 = false;
            var1 = false;
            _fun0004_ip = 80; continue _fun0004;
case 61:
            var4 = var2.config;
            var4 = var4.assets;
            var10 = var4.questBarHeroVideo;
            var4 = null;
            var5 = var4 == var10;
            var9 = false;
            var6 = var10;
            var1 = false;
            if(!var5) { _fun0004_ip = 80; continue _fun0004 }
case 117:
            return var4;
case 59:
            var7 = _closure1_slot11;
            var4 = var2.config;
            var4 = var4.assets;
            var4 = var4.questBarHeroVideo;
            var4 = var2.config;
            var4 = var4.assets;
            var5 = var4.questBarHero;
            var4 = undefined;
            var4 = var7.bind(var4)(var4, var5);
            var9 = false;
            var6 = var5;
            var1 = false;
            _fun0004_ip = 80; continue _fun0004;
case 57:
            var4 = var2.config;
            var4 = var4.assets;
            var10 = var4.heroVideo;
            var4 = null;
            var5 = var4 == var10;
            var9 = false;
            var6 = var10;
            var1 = false;
            if(!var5) { _fun0004_ip = 80; continue _fun0004 }
case 118:
            return var4;
case 55:
            var4 = var2.config;
            var4 = var4.assets;
            var6 = var4.hero;
            var9 = false;
            var1 = false;
            _fun0004_ip = 80; continue _fun0004;
case 53:
            var7 = _closure1_slot11;
            var4 = var2.config;
            var4 = var4.assets;
            var4 = var4.heroVideo;
            var4 = var2.config;
            var4 = var4.assets;
            var5 = var4.hero;
            var4 = undefined;
            var4 = var7.bind(var4)(var4, var5);
            var9 = false;
            var6 = var5;
            var1 = false;
case 80:
            var5 = _closure1_slot10;
            var4 = var2.id;
            var3 = {};
            var2 = undefined;
            var7 = undefined;
            if(!var9) { _fun0004_ip = 119; continue _fun0004 }
case 120:
            var7 = var8;
case 119:
            var3['theme'] = var7;
            var2 = var5.bind(var2)(var4, var6, var3);
            if(!var1) { _fun0004_ip = 121; continue _fun0004 }
case 122:
            var3 = var2.mimetype;
            var1 = null;
            var3 = var1 == var3;
            if(var3) { _fun0004_ip = 123; continue _fun0004 }
case 121:
            var1 = var2;
case 123:
            return var1;
        }
    };
    var3['getQuestAsset'] = var6;
    var3['buildUrl'] = var5;
    var3['getMimetype'] = var4;
    var4 = function getDevicePixelScaledDimensions(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var5.bind(var2)(var1);
            var2 = var1.bind(var2)();
            var1 = 3;
            if(!(!(var2 < var1))) { _fun0005_ip = 124; continue _fun0005 }
case 125:
            var1 = {};
            var5 = var4 * var2;
            var1['width'] = var5;
            var2 = var3 * var2;
            var1['height'] = var2;
            _fun0005_ip = 126; continue _fun0005;
case 124:
            var2 = {};
            var2['width'] = var4;
            var2['height'] = var3;
            var1 = var2;
case 126:
            return var1;
        }
    };
    var3['getDevicePixelScaledDimensions'] = var4;
    var4 = function getAssetUrlWithMediaProxyQueryParams(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var3 = arguments[1];
            var8 = undefined;
            if(!(var3 === var8)) { _fun0006_ip = 127; continue _fun0006 }
case 128:
            var3 = {};
case 127:
            var4 = var1.startsWith;
            var2 = 'blob:';
            var2 = var4.bind(var1)(var2);
            if(var2) { _fun0006_ip = 129; continue _fun0006 }
case 130:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var4 = var4.bind(var8)(var2);
            var2 = var4.toURLSafe;
            var4 = var2.bind(var4)(var1);
            var7 = null;
            var2 = var1;
            if(!(var7 != var4)) { _fun0006_ip = 131; continue _fun0006 }
case 60:
            var6 = var3.format;
            if(!(var7 != var6)) { _fun0006_ip = 132; continue _fun0006 }
case 133:
            var11 = var4.searchParams;
            var10 = var11.set;
            var9 = var3.format;
            var6 = 'format';
            var6 = var10.bind(var11)(var6, var9);
case 132:
            var6 = var3.width;
            if(!(var7 != var6)) { _fun0006_ip = 134; continue _fun0006 }
case 135:
            var11 = var4.searchParams;
            var10 = var11.set;
            var9 = _closure1_slot14;
            var6 = var3.width;
            var12 = var9.bind(var8)(var6);
            var6 = global;
            var6 = var6.HermesInternal;
            var9 = var6.concat;
            var6 = '';
            var9 = var9.bind(var6)(var12);
            var6 = 'width';
            var6 = var10.bind(var11)(var6, var9);
case 134:
            var6 = var3.height;
            if(!(var7 != var6)) { _fun0006_ip = 136; continue _fun0006 }
case 137:
            var7 = var4.searchParams;
            var6 = var7.set;
            var5 = _closure1_slot14;
            var3 = var3.height;
            var8 = var5.bind(var8)(var3);
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var3 = '';
            var5 = var5.bind(var3)(var8);
            var3 = 'height';
            var3 = var6.bind(var7)(var3, var5);
case 136:
            var3 = var4.toString;
            var2 = var3.bind(var4)();
case 131:
            return var2;
case 129:
            return var1;
        }
    };
    var3['getAssetUrlWithMediaProxyQueryParams'] = var4;
    var2 = function convertVideoToFirstFrameImageWithMediaProxy(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var5 = arg2;
            var3 = var1.startsWith;
            var2 = 'blob:';
            var2 = var3.bind(var1)(var2);
            if(var2) { _fun0007_ip = 138; continue _fun0007 }
case 5:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var10 = undefined;
            var4 = var4.bind(var10)(var2);
            var2 = var4.toURLSafe;
            var4 = var2.bind(var4)(var1);
            var6 = null;
            var7 = var6 == var4;
            var2 = null;
            if(var7) { _fun0007_ip = 139; continue _fun0007 }
case 140:
            var11 = var4.searchParams;
            var9 = var11.set;
            var8 = 'format';
            var7 = 'webp';
            var7 = var9.bind(var11)(var8, var7);
            if(!(var6 != var5)) { _fun0007_ip = 13; continue _fun0007 }
case 141:
            var12 = var4.searchParams;
            var11 = var12.set;
            var9 = _closure1_slot14;
            var3 = var5.width;
            var7 = var9.bind(var10)(var3);
            var3 = global;
            var6 = var3.HermesInternal;
            var6 = var6.concat;
            var8 = '';
            var7 = var6.bind(var8)(var7);
            var6 = 'width';
            var6 = var11.bind(var12)(var6, var7);
            var7 = var4.searchParams;
            var6 = var7.set;
            var5 = var5.height;
            var5 = var9.bind(var10)(var5);
            var3 = var3.HermesInternal;
            var3 = var3.concat;
            var5 = var3.bind(var8)(var5);
            var3 = 'height';
            var3 = var6.bind(var7)(var3, var5);
case 13:
            var3 = var4.toString;
            var2 = var3.bind(var4)();
case 139:
            return var2;
case 138:
            return var1;
        }
    };
    var3['convertVideoToFirstFrameImageWithMediaProxy'] = var2;
    return var1;
})();