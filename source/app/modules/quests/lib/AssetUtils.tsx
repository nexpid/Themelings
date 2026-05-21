// app/modules/quests/lib/AssetUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var14 = require;
    var18 = metroImportDefault;
    var3 = exports;
    var15 = dependencyMap;
    var _closure1_slot0 = var14;
    var _closure1_slot1 = var18;
    var _closure1_slot2 = var15;
    var9 = function resolveAsset(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg2;
            var6 = _closure1_slot13;
            var4 = undefined;
            var2 = arg1;
            var1 = arg3;
            var2 = var6.bind(var4)(var2, var5, var1);
            var1 = _closure1_slot14;
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
    var _closure1_slot11 = var9;
    var1 = function getVideoOrDefaultAsset(arg1, arg2) {
        var1 = arg2;
        return var1;
    };
    var _closure1_slot12 = var1;
    var7 = function buildUrl(arg1, arg2, arg3) {
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
    var _closure1_slot13 = var7;
    var6 = function getMimetype(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var8 = arg1;
            var2 = var8.startsWith;
            var1 = 'blob:';
            var6 = var2.bind(var8)(var1);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 11;
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
    var _closure1_slot14 = var6;
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
    var _closure1_slot15 = var1;
    var5 = function getAssetUrlWithMediaProxyQueryParams(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var3 = arguments[1];
            var8 = undefined;
            if(!(var3 === var8)) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            var3 = {};
case 53:
            var4 = var1.startsWith;
            var2 = 'blob:';
            var2 = var4.bind(var1)(var2);
            if(var2) { _fun0004_ip = 55; continue _fun0004 }
case 56:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 11;
            var2 = var6[var2];
            var4 = var4.bind(var8)(var2);
            var2 = var4.toURLSafe;
            var4 = var2.bind(var4)(var1);
            var7 = null;
            var2 = var1;
            if(!(var7 != var4)) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var6 = var3.format;
            if(!(var7 != var6)) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var11 = var4.searchParams;
            var10 = var11.set;
            var9 = var3.format;
            var6 = 'format';
            var6 = var10.bind(var11)(var6, var9);
case 59:
            var6 = var3.width;
            if(!(var7 != var6)) { _fun0004_ip = 61; continue _fun0004 }
case 62:
            var11 = var4.searchParams;
            var10 = var11.set;
            var9 = _closure1_slot15;
            var6 = var3.width;
            var12 = var9.bind(var8)(var6);
            var6 = global;
            var6 = var6.HermesInternal;
            var9 = var6.concat;
            var6 = '';
            var9 = var9.bind(var6)(var12);
            var6 = 'width';
            var6 = var10.bind(var11)(var6, var9);
case 61:
            var6 = var3.height;
            if(!(var7 != var6)) { _fun0004_ip = 63; continue _fun0004 }
case 64:
            var7 = var4.searchParams;
            var6 = var7.set;
            var5 = _closure1_slot15;
            var3 = var3.height;
            var8 = var5.bind(var8)(var3);
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var3 = '';
            var5 = var5.bind(var3)(var8);
            var3 = 'height';
            var3 = var6.bind(var7)(var3, var5);
case 63:
            var3 = var4.toString;
            var2 = var3.bind(var4)();
case 57:
            return var2;
case 55:
            return var1;
        }
    };
    var _closure1_slot16 = var5;
    var4 = function convertVideoToFirstFrameImageWithMediaProxy(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var5 = arg2;
            var3 = var1.startsWith;
            var2 = 'blob:';
            var2 = var3.bind(var1)(var2);
            if(var2) { _fun0005_ip = 65; continue _fun0005 }
case 5:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 11;
            var2 = var6[var2];
            var10 = undefined;
            var4 = var4.bind(var10)(var2);
            var2 = var4.toURLSafe;
            var4 = var2.bind(var4)(var1);
            var6 = null;
            var7 = var6 == var4;
            var2 = null;
            if(var7) { _fun0005_ip = 66; continue _fun0005 }
case 67:
            var11 = var4.searchParams;
            var9 = var11.set;
            var8 = 'format';
            var7 = 'webp';
            var7 = var9.bind(var11)(var8, var7);
            if(!(var6 != var5)) { _fun0005_ip = 68; continue _fun0005 }
case 69:
            var12 = var4.searchParams;
            var11 = var12.set;
            var9 = _closure1_slot15;
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
case 68:
            var3 = var4.toString;
            var2 = var3.bind(var4)();
case 66:
            return var2;
case 65:
            return var1;
        }
    };
    var _closure1_slot17 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var8);
    var1 = 0;
    var8 = var15[var1];
    var1 = undefined;
    var8 = var14.bind(var1)(var8);
    var10 = var8.CDN_URL_BASE;
    var _closure1_slot3 = var10;
    var8 = var8.QUESTS_CDN_URL_BASE;
    var _closure1_slot4 = var8;
    var16 = 1;
    var8 = var15[var16];
    var8 = var14.bind(var1)(var8);
    var8 = var8.MEDIA_PROXY_MAX_TARGET_RESOLUTION;
    var _closure1_slot5 = var8;
    var12 = /\.([a-zA-Z0-9]+)$/;
    var _closure1_slot6 = var12;
    var11 = ['video/mp4', 'video/webm'];
    var _closure1_slot7 = var11;
    var10 = {};
    var8 = 'hero';
    var10['HERO'] = var8;
    var8 = 'hero_image';
    var10['HERO_IMAGE'] = var8;
    var8 = 'hero_video';
    var10['HERO_VIDEO'] = var8;
    var8 = 'quest_bar_hero';
    var10['QUEST_BAR_HERO'] = var8;
    var8 = 'quest_bar_hero_video';
    var10['QUEST_BAR_HERO_VIDEO'] = var8;
    var8 = 'quest_bar_hero_image';
    var10['QUEST_BAR_HERO_IMAGE'] = var8;
    var8 = 'reward';
    var10['REWARD'] = var8;
    var8 = 'reward_image';
    var10['REWARD_IMAGE'] = var8;
    var8 = 'game_tile';
    var10['GAME_TILE'] = var8;
    var8 = 'logo_type';
    var10['LOGO_TYPE'] = var8;
    var8 = 'cosponsor_logo_type';
    var10['COSPONSOR_LOGO_TYPE'] = var8;
    var8 = 'video_player_video';
    var10['VIDEO_PLAYER_VIDEO'] = var8;
    var8 = 'video_player_video_low_res';
    var10['VIDEO_PLAYER_VIDEO_LOW_RES'] = var8;
    var8 = 'video_player_video_hls';
    var10['VIDEO_PLAYER_VIDEO_HLS'] = var8;
    var8 = 'video_player_thumbnail';
    var10['VIDEO_PLAYER_THUMBNAIL'] = var8;
    var8 = 'video_player_caption';
    var10['VIDEO_PLAYER_CAPTION'] = var8;
    var8 = 'video_player_transcript';
    var10['VIDEO_PLAYER_TRANSCRIPT'] = var8;
    var _closure1_slot8 = var10;
    var23 = {};
    var8 = 'video';
    var23['VIDEO'] = var8;
    var8 = 'videoLowRes';
    var23['VIDEO_LOW_RES'] = var8;
    var8 = 'videoHls';
    var23['VIDEO_HLS'] = var8;
    var22 = {};
    var8 = 'url';
    var22['VIDEO'] = var8;
    var8 = 'thumbnail';
    var22['THUMBNAIL'] = var8;
    var8 = 'caption';
    var22['CAPTION'] = var8;
    var8 = 'transcript';
    var22['TRANSCRIPT'] = var8;
    var8 = {};
    var8['TIER_1'] = var16;
    var13 = 'TIER_1';
    var8[var16] = var13;
    var19 = 2;
    var8['TIER_2'] = var19;
    var13 = 'TIER_2';
    var8[var19] = var13;
    var17 = 3;
    var8['TIER_3'] = var17;
    var13 = 'TIER_3';
    var8[var17] = var13;
    var16 = 4;
    var8['TIER_4'] = var16;
    var13 = 'TIER_4';
    var8[var16] = var13;
    var13 = {};
    var21 = var10.VIDEO_PLAYER_VIDEO;
    var20 = {};
    var24 = var23.VIDEO;
    var20['variant'] = var24;
    var24 = var22.VIDEO;
    var20['property'] = var24;
    var13[20] = var20;
    var21 = var10.VIDEO_PLAYER_VIDEO_LOW_RES;
    var20 = {};
    var24 = var23.VIDEO_LOW_RES;
    var20['variant'] = var24;
    var24 = var22.VIDEO;
    var20['property'] = var24;
    var13[20] = var20;
    var21 = var10.VIDEO_PLAYER_VIDEO_HLS;
    var20 = {};
    var24 = var23.VIDEO_HLS;
    var20['variant'] = var24;
    var24 = var22.VIDEO;
    var20['property'] = var24;
    var13[20] = var20;
    var21 = var10.VIDEO_PLAYER_THUMBNAIL;
    var20 = {};
    var24 = var23.VIDEO;
    var20['variant'] = var24;
    var24 = var22.THUMBNAIL;
    var20['property'] = var24;
    var13[20] = var20;
    var21 = var10.VIDEO_PLAYER_CAPTION;
    var20 = {};
    var24 = var23.VIDEO;
    var20['variant'] = var24;
    var24 = var22.CAPTION;
    var20['property'] = var24;
    var13[20] = var20;
    var21 = var10.VIDEO_PLAYER_TRANSCRIPT;
    var20 = {};
    var23 = var23.VIDEO;
    var20['variant'] = var23;
    var22 = var22.TRANSCRIPT;
    var20['property'] = var22;
    var13[20] = var20;
    var _closure1_slot9 = var13;
    var13 = {};
    var20 = var8.TIER_1;
    var19 = var15[var19];
    var19 = var18.bind(var1)(var19);
    var13[19] = var19;
    var19 = var8.TIER_2;
    var17 = var15[var17];
    var17 = var18.bind(var1)(var17);
    var13[18] = var17;
    var17 = var8.TIER_3;
    var16 = var15[var16];
    var16 = var18.bind(var1)(var16);
    var13[16] = var16;
    var17 = var8.TIER_4;
    var16 = 5;
    var16 = var15[var16];
    var16 = var18.bind(var1)(var16);
    var13[16] = var16;
    var _closure1_slot10 = var13;
    var13 = 13;
    var13 = var15[var13];
    var15 = var14.bind(var1)(var13);
    var14 = var15.fileFinishedImporting;
    var13 = 'modules/quests/lib/AssetUtils.tsx';
    var13 = var14.bind(var15)(var13);
    var3['EXTENSION_RE'] = var12;
    var3['ANIMATED_MIMETYPES'] = var11;
    var3['QuestAssetType'] = var10;
    var3['resolveAsset'] = var9;
    var3['OrbsValueTier'] = var8;
    var8 = function getQuestAsset(arg1, arg2, arg3, arg4, arg5) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var7 = arg2;
            var8 = arg3;
            var4 = arg4;
            var11 = arg5;
            var1 = _closure1_slot8;
            var1 = var1.HERO;
            if(!(var1 !== var7)) { _fun0006_ip = 70; continue _fun0006 }
case 71:
            var1 = _closure1_slot8;
            var1 = var1.HERO_IMAGE;
            if(!(var1 !== var7)) { _fun0006_ip = 72; continue _fun0006 }
case 73:
            var1 = _closure1_slot8;
            var1 = var1.HERO_VIDEO;
            if(!(var1 !== var7)) { _fun0006_ip = 74; continue _fun0006 }
case 75:
            var1 = _closure1_slot8;
            var1 = var1.QUEST_BAR_HERO;
            if(!(var1 !== var7)) { _fun0006_ip = 76; continue _fun0006 }
case 77:
            var1 = _closure1_slot8;
            var1 = var1.QUEST_BAR_HERO_VIDEO;
            if(!(var1 !== var7)) { _fun0006_ip = 78; continue _fun0006 }
case 79:
            var1 = _closure1_slot8;
            var1 = var1.QUEST_BAR_HERO_IMAGE;
            if(!(var1 !== var7)) { _fun0006_ip = 80; continue _fun0006 }
case 81:
            var1 = _closure1_slot8;
            var1 = var1.REWARD;
            if(!(var1 !== var7)) { _fun0006_ip = 82; continue _fun0006 }
case 83:
            var1 = _closure1_slot8;
            var1 = var1.REWARD_IMAGE;
            if(!(var1 !== var7)) { _fun0006_ip = 84; continue _fun0006 }
case 85:
            var1 = _closure1_slot8;
            var1 = var1.GAME_TILE;
            if(!(var1 !== var7)) { _fun0006_ip = 86; continue _fun0006 }
case 87:
            var1 = _closure1_slot8;
            var1 = var1.LOGO_TYPE;
            if(!(var1 !== var7)) { _fun0006_ip = 88; continue _fun0006 }
case 89:
            var1 = _closure1_slot8;
            var1 = var1.COSPONSOR_LOGO_TYPE;
            if(!(var1 !== var7)) { _fun0006_ip = 90; continue _fun0006 }
case 91:
            var1 = _closure1_slot8;
            var1 = var1.VIDEO_PLAYER_VIDEO;
            if(!(var1 !== var7)) { _fun0006_ip = 92; continue _fun0006 }
case 93:
            var1 = _closure1_slot8;
            var1 = var1.VIDEO_PLAYER_VIDEO_LOW_RES;
            if(!(var1 !== var7)) { _fun0006_ip = 92; continue _fun0006 }
case 94:
            var1 = _closure1_slot8;
            var1 = var1.VIDEO_PLAYER_VIDEO_HLS;
            if(!(var1 !== var7)) { _fun0006_ip = 92; continue _fun0006 }
case 36:
            var1 = _closure1_slot8;
            var1 = var1.VIDEO_PLAYER_THUMBNAIL;
            if(!(var1 !== var7)) { _fun0006_ip = 92; continue _fun0006 }
case 55:
            var1 = _closure1_slot8;
            var1 = var1.VIDEO_PLAYER_CAPTION;
            if(!(var1 !== var7)) { _fun0006_ip = 92; continue _fun0006 }
case 42:
            var1 = _closure1_slot8;
            var5 = var1.VIDEO_PLAYER_TRANSCRIPT;
            var9 = false;
            var6 = undefined;
            var1 = false;
            if(!(var5 === var7)) { _fun0006_ip = 95; continue _fun0006 }
case 92:
            var10 = var2.config;
            var5 = 'taskConfigV2';
            var5 = var5 in var10;
            if(var5) { _fun0006_ip = 39; continue _fun0006 }
case 96:
            var5 = null;
            return var5;
case 39:
            var5 = var2.config;
            var5 = var5.taskConfigV2;
            var10 = var5.tasks;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 10;
            var5 = var13[var5];
            var14 = undefined;
            var5 = var12.bind(var14)(var5);
            var12 = var5.FirstPartyQuestTaskTypes;
            if(var4) { _fun0006_ip = 97; continue _fun0006 }
case 98:
            var5 = var12.WATCH_VIDEO;
            _fun0006_ip = 99; continue _fun0006;
case 97:
            var5 = var12.WATCH_VIDEO_ON_MOBILE;
case 99:
            var10 = var10[var5];
            var5 = _closure1_slot9;
            var7 = var5[var7];
            var5 = null;
            var12 = var5 == var10;
            var13 = undefined;
            if(var12) { _fun0006_ip = 100; continue _fun0006 }
case 101:
            var12 = var10.assets;
            var10 = var7.variant;
            var10 = var12[var10];
            var12 = var5 == var10;
            var13 = undefined;
            if(var12) { _fun0006_ip = 100; continue _fun0006 }
case 52:
            var7 = var7.property;
            var13 = var10[var7];
case 100:
            var7 = var5 == var13;
            var9 = false;
            var1 = true;
            var6 = var13;
            if(!var7) { _fun0006_ip = 95; continue _fun0006 }
case 102:
            return var5;
case 90:
            var5 = var2.config;
            var7 = var5.cosponsorMetadata;
            var5 = null;
            if(!(var5 != var7)) { _fun0006_ip = 103; continue _fun0006 }
case 104:
            var7 = 'dark';
            if(!(var7 === var8)) { _fun0006_ip = 105; continue _fun0006 }
case 106:
            var7 = var2.config;
            var7 = var7.cosponsorMetadata;
            var7 = var7.logotypeDark;
            if(!(var5 == var7)) { _fun0006_ip = 107; continue _fun0006 }
case 105:
            var7 = 'light';
            if(!(var7 === var8)) { _fun0006_ip = 108; continue _fun0006 }
case 109:
            var7 = var2.config;
            var7 = var7.cosponsorMetadata;
            var7 = var7.logotypeLight;
            if(!(var5 == var7)) { _fun0006_ip = 110; continue _fun0006 }
case 108:
            var7 = var2.config;
            var7 = var7.cosponsorMetadata;
            var6 = var7.logotype;
            var9 = true;
            var1 = false;
            _fun0006_ip = 95; continue _fun0006;
case 110:
            var7 = var2.config;
            var7 = var7.cosponsorMetadata;
            var6 = var7.logotypeLight;
            var9 = false;
            var1 = false;
            _fun0006_ip = 95; continue _fun0006;
case 107:
            var7 = var2.config;
            var7 = var7.cosponsorMetadata;
            var6 = var7.logotypeDark;
            var9 = false;
            var1 = false;
            _fun0006_ip = 95; continue _fun0006;
case 103:
            return var5;
case 88:
            var5 = 'dark';
            if(!(var5 === var8)) { _fun0006_ip = 111; continue _fun0006 }
case 112:
            var5 = var2.config;
            var5 = var5.assets;
            var7 = var5.logotypeDark;
            var5 = null;
            if(!(var5 == var7)) { _fun0006_ip = 113; continue _fun0006 }
case 111:
            var5 = 'light';
            if(!(var5 === var8)) { _fun0006_ip = 114; continue _fun0006 }
case 115:
            var5 = var2.config;
            var5 = var5.assets;
            var7 = var5.logotypeLight;
            var5 = null;
            if(!(var5 == var7)) { _fun0006_ip = 116; continue _fun0006 }
case 114:
            var5 = var2.config;
            var5 = var5.assets;
            var6 = var5.logotype;
            var9 = true;
            var1 = false;
            _fun0006_ip = 95; continue _fun0006;
case 116:
            var5 = var2.config;
            var5 = var5.assets;
            var6 = var5.logotypeLight;
            var9 = false;
            var1 = false;
            _fun0006_ip = 95; continue _fun0006;
case 113:
            var5 = var2.config;
            var5 = var5.assets;
            var6 = var5.logotypeDark;
            var9 = false;
            var1 = false;
            _fun0006_ip = 95; continue _fun0006;
case 86:
            var5 = 'dark';
            if(!(var5 === var8)) { _fun0006_ip = 117; continue _fun0006 }
case 118:
            var5 = var2.config;
            var5 = var5.assets;
            var7 = var5.gameTileDark;
            var5 = null;
            if(!(var5 == var7)) { _fun0006_ip = 119; continue _fun0006 }
case 117:
            var5 = 'light';
            if(!(var5 === var8)) { _fun0006_ip = 120; continue _fun0006 }
case 121:
            var5 = var2.config;
            var5 = var5.assets;
            var7 = var5.gameTileLight;
            var5 = null;
            if(!(var5 == var7)) { _fun0006_ip = 122; continue _fun0006 }
case 120:
            var5 = var2.config;
            var5 = var5.assets;
            var6 = var5.gameTile;
            var9 = true;
            var1 = false;
            _fun0006_ip = 95; continue _fun0006;
case 122:
            var5 = var2.config;
            var5 = var5.assets;
            var6 = var5.gameTileLight;
            var9 = false;
            var1 = false;
            _fun0006_ip = 95; continue _fun0006;
case 119:
            var5 = var2.config;
            var5 = var5.assets;
            var6 = var5.gameTileDark;
            var9 = false;
            var1 = false;
            _fun0006_ip = 95; continue _fun0006;
case 84:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 6;
            var5 = var14[var5];
            var12 = undefined;
            var7 = var13.bind(var12)(var5);
            var5 = var7.getQuestPrimaryReward;
            var5 = var5.bind(var7)(var2);
            var10 = var5.type;
            var7 = 7;
            var7 = var14[var7];
            var7 = var13.bind(var12)(var7);
            var7 = var7.QuestRewardTypes;
            var7 = var7.VIRTUAL_CURRENCY;
            if(!(var10 !== var7)) { _fun0006_ip = 123; continue _fun0006 }
case 124:
            var6 = var5.asset;
            var9 = false;
            var1 = false;
            _fun0006_ip = 95; continue _fun0006;
case 123:
            var5 = null;
            return var5;
case 82:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 6;
            var5 = var14[var5];
            var12 = undefined;
            var7 = var13.bind(var12)(var5);
            var5 = var7.getQuestPrimaryReward;
            var7 = var5.bind(var7)(var2);
            var10 = var7.type;
            var5 = 7;
            var5 = var14[var5];
            var5 = var13.bind(var12)(var5);
            var5 = var5.QuestRewardTypes;
            var5 = var5.VIRTUAL_CURRENCY;
            if(!(var10 !== var5)) { _fun0006_ip = 125; continue _fun0006 }
case 126:
            var5 = _closure1_slot12;
            var10 = var7.assetVideo;
            var7 = var7.asset;
            var5 = var5.bind(var12)(var12, var7);
            var9 = false;
            var6 = var7;
            var1 = false;
            _fun0006_ip = 95; continue _fun0006;
case 125:
            var5 = null;
            var10 = var5 != var11;
            var7 = undefined;
            if(!var10) { _fun0006_ip = 127; continue _fun0006 }
case 128:
            var10 = _closure1_slot10;
            var7 = var10[var11];
case 127:
            if(!(var5 == var7)) { _fun0006_ip = 129; continue _fun0006 }
case 130:
            if(var4) { _fun0006_ip = 131; continue _fun0006 }
case 132:
            var4 = {'url': null, 'mimetype': 'video/webm', 'isAnimated': true};
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 9;
            var5 = var11[var5];
            var5 = var10.bind(var12)(var5);
            var4['url'] = var5;
            _fun0006_ip = 133; continue _fun0006;
case 131:
            var5 = {'url': null, 'mimetype': 'video/mp4', 'isAnimated': true};
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 8;
            var10 = var13[var10];
            var10 = var11.bind(var12)(var10);
            var5['url'] = var10;
            var4 = var5;
case 133:
            _fun0006_ip = 134; continue _fun0006;
case 129:
            var5 = {'url': null, 'mimetype': 'video/webm', 'isAnimated': true};
            var5['url'] = var7;
            var4 = var5;
case 134:
            return var4;
case 80:
            var4 = var2.config;
            var4 = var4.assets;
            var6 = var4.questBarHero;
            var9 = false;
            var1 = false;
            _fun0006_ip = 95; continue _fun0006;
case 78:
            var4 = var2.config;
            var4 = var4.assets;
            var10 = var4.questBarHeroVideo;
            var4 = null;
            var5 = var4 == var10;
            var9 = false;
            var6 = var10;
            var1 = false;
            if(!var5) { _fun0006_ip = 95; continue _fun0006 }
case 135:
            return var4;
case 76:
            var7 = _closure1_slot12;
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
            _fun0006_ip = 95; continue _fun0006;
case 74:
            var4 = var2.config;
            var4 = var4.assets;
            var10 = var4.heroVideo;
            var4 = null;
            var5 = var4 == var10;
            var9 = false;
            var6 = var10;
            var1 = false;
            if(!var5) { _fun0006_ip = 95; continue _fun0006 }
case 136:
            return var4;
case 72:
            var4 = var2.config;
            var4 = var4.assets;
            var6 = var4.hero;
            var9 = false;
            var1 = false;
            _fun0006_ip = 95; continue _fun0006;
case 70:
            var7 = _closure1_slot12;
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
case 95:
            var5 = _closure1_slot11;
            var4 = var2.id;
            var3 = {};
            var2 = undefined;
            var7 = undefined;
            if(!var9) { _fun0006_ip = 137; continue _fun0006 }
case 138:
            var7 = var8;
case 137:
            var3['theme'] = var7;
            var2 = var5.bind(var2)(var4, var6, var3);
            if(!var1) { _fun0006_ip = 139; continue _fun0006 }
case 140:
            var3 = var2.mimetype;
            var1 = null;
            var3 = var1 == var3;
            if(var3) { _fun0006_ip = 141; continue _fun0006 }
case 139:
            var1 = var2;
case 141:
            return var1;
        }
    };
    var3['getQuestAsset'] = var8;
    var3['buildUrl'] = var7;
    var7 = function resolveAdCreativeCdnUrl(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 == var5)) { _fun0007_ip = 142; continue _fun0007 }
case 143:
            var1 = undefined;
            return var1;
case 142:
            var2 = var5.startsWith;
            var1 = 'http://';
            var2 = var2.bind(var5)(var1);
            var1 = var5;
            if(var2) { _fun0007_ip = 16; continue _fun0007 }
case 144:
            var3 = var5.startsWith;
            var2 = 'https://';
            var2 = var3.bind(var5)(var2);
            var1 = var5;
            if(var2) { _fun0007_ip = 16; continue _fun0007 }
case 145:
            var3 = var5.startsWith;
            var2 = 'blob:';
            var2 = var3.bind(var5)(var2);
            var1 = var5;
            if(var2) { _fun0007_ip = 16; continue _fun0007 }
case 146:
            var4 = _closure1_slot3;
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '';
            var1 = var3.bind(var2)(var4, var5);
case 16:
            return var1;
        }
    };
    var3['resolveAdCreativeCdnUrl'] = var7;
    var3['getMimetype'] = var6;
    var6 = function getDevicePixelScaledDimensions(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 12;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var5.bind(var2)(var1);
            var2 = var1.bind(var2)();
            var1 = 3;
            if(!(!(var2 < var1))) { _fun0008_ip = 147; continue _fun0008 }
case 148:
            var1 = {};
            var5 = var4 * var2;
            var1['width'] = var5;
            var2 = var3 * var2;
            var1['height'] = var2;
            _fun0008_ip = 149; continue _fun0008;
case 147:
            var2 = {};
            var2['width'] = var4;
            var2['height'] = var3;
            var1 = var2;
case 149:
            return var1;
        }
    };
    var3['getDevicePixelScaledDimensions'] = var6;
    var3['getAssetUrlWithMediaProxyQueryParams'] = var5;
    var5 = function getScaledImageUrl(arg1) {
        var1 = arg1;
        var4 = var1.assetUrl;
        var7 = var1.width;
        var6 = var1.height;
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 12;
        var2 = var3[var2];
        var3 = undefined;
        var2 = var5.bind(var3)(var2);
        var5 = var2.bind(var3)();
        var2 = _closure1_slot16;
        var1 = {};
        var7 = var7 * var5;
        var1['width'] = var7;
        var5 = var6 * var5;
        var1['height'] = var5;
        var5 = 'webp';
        var1['format'] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var3['getScaledImageUrl'] = var5;
    var3['convertVideoToFirstFrameImageWithMediaProxy'] = var4;
    var2 = function getScaledFirstFrameImageUrl(arg1) {
        var1 = arg1;
        var4 = var1.assetUrl;
        var7 = var1.width;
        var6 = var1.height;
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 12;
        var2 = var3[var2];
        var3 = undefined;
        var2 = var5.bind(var3)(var2);
        var5 = var2.bind(var3)();
        var2 = _closure1_slot17;
        var1 = {};
        var7 = var7 * var5;
        var1['width'] = var7;
        var5 = var6 * var5;
        var1['height'] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var3['getScaledFirstFrameImageUrl'] = var2;
    return var1;
})();