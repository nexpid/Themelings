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
            var6 = _closure1_slot11;
            var4 = undefined;
            var2 = arg1;
            var1 = arg3;
            var2 = var6.bind(var4)(var2, var5, var1);
            var1 = _closure1_slot12;
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
    var _closure1_slot9 = var6;
    var1 = function getVideoOrDefaultAsset(arg1, arg2) {
        var1 = arg2;
        return var1;
    };
    var _closure1_slot10 = var1;
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
    var _closure1_slot11 = var5;
    var4 = function getMimetype(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var2 = var4.startsWith;
            var1 = 'blob:';
            var1 = var2.bind(var4)(var1);
            if(var1) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var2 = _closure1_slot6;
            var1 = var2.exec;
            var5 = var1.bind(var2)(var4);
            var1 = null;
            var2 = var1 == var5;
            var3 = undefined;
            if(var2) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var2 = 1;
            var5 = var5[var2];
            var2 = var1 == var5;
            var3 = undefined;
            if(var2) { _fun0003_ip = 17; continue _fun0003 }
case 19:
            var2 = var5.toLowerCase;
            var3 = var2.bind(var5)();
case 17:
            var2 = 'webm';
            if(!(var2 !== var3)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var2 = 'mp4';
            if(!(var2 !== var3)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var2 = 'webp';
            if(!(var2 !== var3)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var2 = 'jpg';
            if(!(var2 !== var3)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var2 = 'jpeg';
            if(!(var2 !== var3)) { _fun0003_ip = 26; continue _fun0003 }
case 28:
            var2 = 'png';
            if(!(var2 !== var3)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var2 = 'gif';
            if(!(var2 !== var3)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = 'svg';
            if(!(var2 !== var3)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = 'txt';
            if(!(var2 !== var3)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var2 = 'vtt';
            if(!(var2 !== var3)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var2 = 'ts';
            if(!(var2 !== var3)) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var2 = 'm3u8';
            if(!(var2 !== var3)) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            return var1;
case 41:
            var1 = 'application/x-mpegURL';
            return var1;
case 39:
            var1 = 'video/mp2t';
            return var1;
case 37:
            var1 = 'text/vtt';
            return var1;
case 35:
            var1 = 'text/plain';
            return var1;
case 33:
            var1 = 'image/svg+xml';
            return var1;
case 31:
            var1 = 'image/gif';
            return var1;
case 29:
            var1 = 'image/png';
            return var1;
case 26:
            var1 = 'image/jpeg';
            return var1;
case 24:
            var1 = 'image/webp';
            return var1;
case 22:
            var1 = 'video/mp4';
            return var1;
case 20:
            var1 = 'video/webm';
            return var1;
case 15:
            var2 = global;
            var1 = var2.URL;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var8 = var3;
            var7 = var4;
            var1 = new var8[var1](var7, var6);
            var1 = var1 instanceof Object ? var1 : var3;
            var4 = var1.searchParams;
            var3 = var4.get;
            var1 = 'mimetype';
            var5 = var3.bind(var4)(var1);
            var1 = null;
            var6 = var1 != var5;
            var4 = undefined;
            var3 = undefined;
            if(!var6) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var3 = var5;
case 43:
            var5 = var1 != var3;
            var1 = null;
            if(!var5) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var2 = var2.decodeURIComponent;
            var1 = var2.bind(var4)(var3);
case 45:
            return var1;
        }
    };
    var _closure1_slot12 = var4;
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
    var _closure1_slot13 = var1;
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
    var _closure1_slot8 = var7;
    var10 = 8;
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
            var1 = arg1;
            var6 = arg2;
            var7 = arg3;
            var3 = _closure1_slot8;
            var3 = var3.HERO;
            if(!(var3 !== var6)) { _fun0004_ip = 47; continue _fun0004 }
case 5:
            var3 = _closure1_slot8;
            var3 = var3.HERO_IMAGE;
            if(!(var3 !== var6)) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var3 = _closure1_slot8;
            var3 = var3.HERO_VIDEO;
            if(!(var3 !== var6)) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var3 = _closure1_slot8;
            var3 = var3.QUEST_BAR_HERO;
            if(!(var3 !== var6)) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var3 = _closure1_slot8;
            var3 = var3.QUEST_BAR_HERO_VIDEO;
            if(!(var3 !== var6)) { _fun0004_ip = 54; continue _fun0004 }
case 55:
            var3 = _closure1_slot8;
            var3 = var3.REWARD;
            if(!(var3 !== var6)) { _fun0004_ip = 56; continue _fun0004 }
case 57:
            var3 = _closure1_slot8;
            var3 = var3.REWARD_IMAGE;
            if(!(var3 !== var6)) { _fun0004_ip = 58; continue _fun0004 }
case 59:
            var3 = _closure1_slot8;
            var3 = var3.GAME_TILE;
            if(!(var3 !== var6)) { _fun0004_ip = 60; continue _fun0004 }
case 61:
            var3 = _closure1_slot8;
            var3 = var3.LOGO_TYPE;
            if(!(var3 !== var6)) { _fun0004_ip = 62; continue _fun0004 }
case 63:
            var3 = _closure1_slot8;
            var3 = var3.COSPONSOR_LOGO_TYPE;
            var5 = undefined;
            var8 = false;
            if(!(var3 === var6)) { _fun0004_ip = 64; continue _fun0004 }
case 65:
            var3 = var1.config;
            var6 = var3.cosponsorMetadata;
            var3 = null;
            if(!(var3 != var6)) { _fun0004_ip = 66; continue _fun0004 }
case 67:
            var6 = 'dark';
            if(!(var6 === var7)) { _fun0004_ip = 68; continue _fun0004 }
case 13:
            var6 = var1.config;
            var6 = var6.cosponsorMetadata;
            var6 = var6.logotypeDark;
            if(!(var3 == var6)) { _fun0004_ip = 69; continue _fun0004 }
case 68:
            var6 = 'light';
            if(!(var6 === var7)) { _fun0004_ip = 70; continue _fun0004 }
case 71:
            var6 = var1.config;
            var6 = var6.cosponsorMetadata;
            var6 = var6.logotypeLight;
            if(!(var3 == var6)) { _fun0004_ip = 72; continue _fun0004 }
case 70:
            var6 = var1.config;
            var6 = var6.cosponsorMetadata;
            var5 = var6.logotype;
            var8 = true;
            _fun0004_ip = 64; continue _fun0004;
case 72:
            var6 = var1.config;
            var6 = var6.cosponsorMetadata;
            var5 = var6.logotypeLight;
            var8 = false;
            _fun0004_ip = 64; continue _fun0004;
case 69:
            var6 = var1.config;
            var6 = var6.cosponsorMetadata;
            var5 = var6.logotypeDark;
            var8 = false;
            _fun0004_ip = 64; continue _fun0004;
case 66:
            return var3;
case 62:
            var3 = 'dark';
            if(!(var3 === var7)) { _fun0004_ip = 73; continue _fun0004 }
case 74:
            var3 = var1.config;
            var3 = var3.assets;
            var4 = var3.logotypeDark;
            var3 = null;
            if(!(var3 == var4)) { _fun0004_ip = 75; continue _fun0004 }
case 73:
            var3 = 'light';
            if(!(var3 === var7)) { _fun0004_ip = 76; continue _fun0004 }
case 77:
            var3 = var1.config;
            var3 = var3.assets;
            var4 = var3.logotypeLight;
            var3 = null;
            if(!(var3 == var4)) { _fun0004_ip = 78; continue _fun0004 }
case 76:
            var3 = var1.config;
            var3 = var3.assets;
            var5 = var3.logotype;
            var8 = true;
            _fun0004_ip = 64; continue _fun0004;
case 78:
            var3 = var1.config;
            var3 = var3.assets;
            var5 = var3.logotypeLight;
            var8 = false;
            _fun0004_ip = 64; continue _fun0004;
case 75:
            var3 = var1.config;
            var3 = var3.assets;
            var5 = var3.logotypeDark;
            var8 = false;
            _fun0004_ip = 64; continue _fun0004;
case 60:
            var3 = 'dark';
            if(!(var3 === var7)) { _fun0004_ip = 79; continue _fun0004 }
case 80:
            var3 = var1.config;
            var3 = var3.assets;
            var4 = var3.gameTileDark;
            var3 = null;
            if(!(var3 == var4)) { _fun0004_ip = 81; continue _fun0004 }
case 79:
            var3 = 'light';
            if(!(var3 === var7)) { _fun0004_ip = 82; continue _fun0004 }
case 83:
            var3 = var1.config;
            var3 = var3.assets;
            var4 = var3.gameTileLight;
            var3 = null;
            if(!(var3 == var4)) { _fun0004_ip = 84; continue _fun0004 }
case 82:
            var3 = var1.config;
            var3 = var3.assets;
            var5 = var3.gameTile;
            var8 = true;
            _fun0004_ip = 64; continue _fun0004;
case 84:
            var3 = var1.config;
            var3 = var3.assets;
            var5 = var3.gameTileLight;
            var8 = false;
            _fun0004_ip = 64; continue _fun0004;
case 81:
            var3 = var1.config;
            var3 = var3.assets;
            var5 = var3.gameTileDark;
            var8 = false;
            _fun0004_ip = 64; continue _fun0004;
case 58:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 2;
            var3 = var11[var3];
            var9 = undefined;
            var4 = var10.bind(var9)(var3);
            var3 = var4.getQuestPrimaryReward;
            var3 = var3.bind(var4)(var1);
            var6 = var3.type;
            var4 = 3;
            var4 = var11[var4];
            var4 = var10.bind(var9)(var4);
            var4 = var4.QuestRewardTypes;
            var4 = var4.VIRTUAL_CURRENCY;
            if(!(var6 !== var4)) { _fun0004_ip = 85; continue _fun0004 }
case 86:
            var5 = var3.asset;
            var8 = false;
            _fun0004_ip = 64; continue _fun0004;
case 85:
            var3 = null;
            return var3;
case 56:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 2;
            var3 = var11[var3];
            var10 = undefined;
            var4 = var9.bind(var10)(var3);
            var3 = var4.getQuestPrimaryReward;
            var4 = var3.bind(var4)(var1);
            var6 = var4.type;
            var3 = 3;
            var3 = var11[var3];
            var3 = var9.bind(var10)(var3);
            var3 = var3.QuestRewardTypes;
            var3 = var3.VIRTUAL_CURRENCY;
            if(!(var6 !== var3)) { _fun0004_ip = 87; continue _fun0004 }
case 88:
            var3 = _closure1_slot10;
            var6 = var4.assetVideo;
            var4 = var4.asset;
            var3 = var3.bind(var10)(var10, var4);
            var8 = false;
            var5 = var4;
            _fun0004_ip = 64; continue _fun0004;
case 87:
            var3 = arg4;
            if(var3) { _fun0004_ip = 89; continue _fun0004 }
case 90:
            var3 = {'url': null, 'mimetype': 'video/webm', 'isAnimated': true};
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 5;
            var4 = var9[var4];
            var4 = var6.bind(var10)(var4);
            var3['url'] = var4;
            _fun0004_ip = 91; continue _fun0004;
case 89:
            var4 = {'url': null, 'mimetype': 'video/mp4', 'isAnimated': true};
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 4;
            var6 = var11[var6];
            var6 = var9.bind(var10)(var6);
            var4['url'] = var6;
            var3 = var4;
case 91:
            return var3;
case 54:
            var3 = var1.config;
            var3 = var3.assets;
            var4 = var3.questBarHeroVideo;
            var6 = var1.config;
            var3 = 'videoMetadata';
            var6 = var3 in var6;
            var3 = null;
            var9 = null;
            if(!var6) { _fun0004_ip = 92; continue _fun0004 }
case 93:
            var6 = var1.config;
            var10 = var6.videoMetadata;
            var11 = var3 == var10;
            var6 = undefined;
            if(var11) { _fun0004_ip = 94; continue _fun0004 }
case 95:
            var10 = var10.assets;
            var6 = var10.questBarPreviewVideo;
case 94:
            var9 = var6;
case 92:
            if(!(var3 != var4)) { _fun0004_ip = 96; continue _fun0004 }
case 97:
            var9 = var4;
case 96:
            var4 = var3 == var9;
            var8 = false;
            var5 = var9;
            if(!var4) { _fun0004_ip = 64; continue _fun0004 }
case 98:
            return var3;
case 52:
            var6 = _closure1_slot10;
            var3 = var1.config;
            var3 = var3.assets;
            var3 = var3.questBarHeroVideo;
            var3 = var1.config;
            var3 = var3.assets;
            var4 = var3.questBarHero;
            var3 = undefined;
            var3 = var6.bind(var3)(var3, var4);
            var8 = false;
            var5 = var4;
            _fun0004_ip = 64; continue _fun0004;
case 50:
            var3 = var1.config;
            var3 = var3.assets;
            var4 = var3.heroVideo;
            var6 = var1.config;
            var3 = 'videoMetadata';
            var6 = var3 in var6;
            var3 = null;
            var9 = null;
            if(!var6) { _fun0004_ip = 99; continue _fun0004 }
case 100:
            var6 = var1.config;
            var10 = var6.videoMetadata;
            var11 = var3 == var10;
            var6 = undefined;
            if(var11) { _fun0004_ip = 101; continue _fun0004 }
case 102:
            var10 = var10.assets;
            var6 = var10.questHomeVideo;
case 101:
            var9 = var6;
case 99:
            if(!(var3 != var4)) { _fun0004_ip = 103; continue _fun0004 }
case 104:
            var9 = var4;
case 103:
            var4 = var3 == var9;
            var8 = false;
            var5 = var9;
            if(!var4) { _fun0004_ip = 64; continue _fun0004 }
case 105:
            return var3;
case 48:
            var3 = var1.config;
            var3 = var3.assets;
            var5 = var3.hero;
            var8 = false;
            _fun0004_ip = 64; continue _fun0004;
case 47:
            var6 = _closure1_slot10;
            var3 = var1.config;
            var3 = var3.assets;
            var3 = var3.heroVideo;
            var3 = var1.config;
            var3 = var3.assets;
            var4 = var3.hero;
            var3 = undefined;
            var3 = var6.bind(var3)(var3, var4);
            var8 = false;
            var5 = var4;
case 64:
            var4 = _closure1_slot9;
            var3 = var1.id;
            var2 = {};
            var1 = undefined;
            var6 = undefined;
            if(!var8) { _fun0004_ip = 106; continue _fun0004 }
case 107:
            var6 = var7;
case 106:
            var2['theme'] = var6;
            var1 = var4.bind(var1)(var3, var5, var2);
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
            var1 = 6;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var5.bind(var2)(var1);
            var2 = var1.bind(var2)();
            var1 = 3;
            if(!(!(var2 < var1))) { _fun0005_ip = 108; continue _fun0005 }
case 109:
            var1 = {};
            var5 = var4 * var2;
            var1['width'] = var5;
            var2 = var3 * var2;
            var1['height'] = var2;
            _fun0005_ip = 110; continue _fun0005;
case 108:
            var2 = {};
            var2['width'] = var4;
            var2['height'] = var3;
            var1 = var2;
case 110:
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
            if(!(var3 === var8)) { _fun0006_ip = 111; continue _fun0006 }
case 112:
            var3 = {};
case 111:
            var4 = var1.startsWith;
            var2 = 'blob:';
            var2 = var4.bind(var1)(var2);
            if(var2) { _fun0006_ip = 70; continue _fun0006 }
case 113:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var4 = var4.bind(var8)(var2);
            var2 = var4.toURLSafe;
            var4 = var2.bind(var4)(var1);
            var7 = null;
            var2 = var1;
            if(!(var7 != var4)) { _fun0006_ip = 114; continue _fun0006 }
case 115:
            var6 = var3.format;
            if(!(var7 != var6)) { _fun0006_ip = 116; continue _fun0006 }
case 117:
            var11 = var4.searchParams;
            var10 = var11.append;
            var9 = var3.format;
            var6 = 'format';
            var6 = var10.bind(var11)(var6, var9);
case 116:
            var6 = var3.width;
            if(!(var7 != var6)) { _fun0006_ip = 65; continue _fun0006 }
case 118:
            var11 = var4.searchParams;
            var10 = var11.append;
            var9 = _closure1_slot13;
            var6 = var3.width;
            var12 = var9.bind(var8)(var6);
            var6 = global;
            var6 = var6.HermesInternal;
            var9 = var6.concat;
            var6 = '';
            var9 = var9.bind(var6)(var12);
            var6 = 'width';
            var6 = var10.bind(var11)(var6, var9);
case 65:
            var6 = var3.height;
            if(!(var7 != var6)) { _fun0006_ip = 119; continue _fun0006 }
case 40:
            var7 = var4.searchParams;
            var6 = var7.append;
            var5 = _closure1_slot13;
            var3 = var3.height;
            var8 = var5.bind(var8)(var3);
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var3 = '';
            var5 = var5.bind(var3)(var8);
            var3 = 'height';
            var3 = var6.bind(var7)(var3, var5);
case 119:
            var3 = var4.toString;
            var2 = var3.bind(var4)();
case 114:
            return var2;
case 70:
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
            if(var2) { _fun0007_ip = 120; continue _fun0007 }
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
            if(var7) { _fun0007_ip = 121; continue _fun0007 }
case 122:
            var11 = var4.searchParams;
            var9 = var11.append;
            var8 = 'format';
            var7 = 'webp';
            var7 = var9.bind(var11)(var8, var7);
            if(!(var6 != var5)) { _fun0007_ip = 123; continue _fun0007 }
case 124:
            var12 = var4.searchParams;
            var11 = var12.append;
            var9 = _closure1_slot13;
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
            var6 = var7.append;
            var5 = var5.height;
            var5 = var9.bind(var10)(var5);
            var3 = var3.HermesInternal;
            var3 = var3.concat;
            var5 = var3.bind(var8)(var5);
            var3 = 'height';
            var3 = var6.bind(var7)(var3, var5);
case 123:
            var3 = var4.toString;
            var2 = var3.bind(var4)();
case 121:
            return var2;
case 120:
            return var1;
        }
    };
    var3['convertVideoToFirstFrameImageWithMediaProxy'] = var2;
    return var1;
})();