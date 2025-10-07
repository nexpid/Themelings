// app/modules/content_inventory/ContentInventoryActivityImageUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var9;
    var6 = function getApplicationImage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var4 = var2 == var1;
            var7 = undefined;
            var3 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var1.getIconURL;
            var4 = _closure1_slot4;
            var4 = var4.LARGE;
            var3 = var5.bind(var1)(var4);
case 2:
            var4 = var2 == var1;
            var6 = undefined;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var1.name;
case 4:
            if(!(var2 == var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            return var7;
case 6:
            var1 = {};
            var1['src'] = var3;
            if(!(var2 != var6)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 4;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.tiKyYm;
            var2 = {};
            var2['applicationName'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 4;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.2B/phI;
            var2 = var4.bind(var5)(var3);
case 10:
            var1['alt'] = var2;
            return var1;
        }
    };
    var _closure1_slot5 = var6;
    var4 = function useImageForActivity(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var11 = arg1;
            var6 = arg2;
            var1 = _closure1_slot7;
            var4 = undefined;
            var1 = var1.bind(var4)(var11, var6);
            var3 = var1.largeImage;
            var2 = var1.smallImage;
            var5 = null;
            if(!(var5 == var3)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 7;
            var1 = var1[var7];
            var8 = var8.bind(var4)(var1);
            var1 = var8.isStageActivity;
            var1 = var1.bind(var8)(var11);
            if(var1) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            if(!(var5 == var3)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 9;
            var1 = var10[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.bind(var4)(var11);
            if(var1) { _fun0002_ip = 17; continue _fun0002 }
case 15:
            if(!(var5 == var3)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            if(!(var5 == var2)) { _fun0002_ip = 18; continue _fun0002 }
case 20:
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 11;
            var1 = var10[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.bind(var4)(var11);
            if(var1) { _fun0002_ip = 21; continue _fun0002 }
case 18:
            var1 = _closure1_slot5;
            var8 = var1.bind(var4)(var6);
            if(!(var5 == var8)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var1 = {};
            var1['largeImage'] = var2;
            var1['smallImage'] = var4;
            _fun0002_ip = 24; continue _fun0002;
case 22:
            var6 = {};
            var6['largeImage'] = var8;
            var6['smallImage'] = var2;
            var1 = var6;
case 24:
            return var1;
case 21:
            var1 = {};
            var6 = {};
            var10 = _closure1_slot1;
            var14 = _closure1_slot2;
            var8 = 10;
            var8 = var14[var8];
            var12 = var10.bind(var4)(var8);
            var10 = var12.get;
            var8 = _closure1_slot3;
            var8 = var8.PLAYSTATION;
            var8 = var10.bind(var12)(var8);
            var8 = var8.icon;
            var8 = var8.lightPNG;
            var6['src'] = var8;
            var13 = _closure1_slot0;
            var8 = 4;
            var10 = var14[var8];
            var10 = var13.bind(var4)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var8 = var14[var8];
            var8 = var13.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.fFl4jo;
            var8 = var10.bind(var12)(var8);
            var6['alt'] = var8;
            var1['largeImage'] = var6;
            var1['smallImage'] = var4;
            return var1;
case 17:
            var1 = {};
            var6 = {};
            var10 = _closure1_slot1;
            var14 = _closure1_slot2;
            var8 = 10;
            var8 = var14[var8];
            var12 = var10.bind(var4)(var8);
            var10 = var12.get;
            var8 = _closure1_slot3;
            var8 = var8.XBOX;
            var8 = var10.bind(var12)(var8);
            var8 = var8.icon;
            var8 = var8.customPNG;
            var6['src'] = var8;
            var13 = _closure1_slot0;
            var8 = 4;
            var10 = var14[var8];
            var10 = var13.bind(var4)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var8 = var14[var8];
            var8 = var13.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.Nfvo7+;
            var8 = var10.bind(var12)(var8);
            var6['alt'] = var8;
            var1['largeImage'] = var6;
            var1['smallImage'] = var4;
            return var1;
case 13:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var6 = var6.bind(var4)(var1);
            var1 = var6.unpackStageChannelParty;
            var10 = var1.bind(var6)(var11);
            var1 = var5 != var10;
            var7 = undefined;
            if(!var1) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 8;
            var1 = var8[var1];
            var8 = var6.bind(var4)(var1);
            var6 = var8.getGuildIconURL;
            var1 = {};
            var10 = var10.guildId;
            var1['id'] = var10;
            var12 = var5 == var11;
            var10 = undefined;
            if(var12) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var11 = var11.assets;
            var12 = var5 == var11;
            var10 = undefined;
            if(var12) { _fun0002_ip = 27; continue _fun0002 }
case 29:
            var10 = var11.small_image;
case 27:
            var1['icon'] = var10;
            var9 = _closure1_slot4;
            var9 = var9.SMALL;
            var1['size'] = var9;
            var7 = var6.bind(var8)(var1);
case 25:
            var1 = {};
            var6 = var5 != var7;
            var5 = undefined;
            if(!var6) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var6 = {};
            var6['src'] = var7;
            var5 = var6;
case 30:
            var1['largeImage'] = var5;
            var1['smallImage'] = var4;
            return var1;
case 11:
            var1 = {};
            var1['largeImage'] = var3;
            var1['smallImage'] = var2;
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var2 = function useRichImageForActivity(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var9 = arg1;
            var7 = arg2;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 12;
            var1 = var2[var1];
            var2 = undefined;
            var4 = var3.bind(var2)(var1);
            var3 = var4.useGetOrFetchApplication;
            var8 = null;
            var5 = var8 == var9;
            var1 = undefined;
            if(var5) { _fun0003_ip = 4; continue _fun0003 }
case 32:
            var1 = var9.application_id;
case 4:
            var5 = var3.bind(var4)(var1);
            if(!(var8 != var9)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var1 = var8 == var9;
            var13 = undefined;
            if(var1) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var1 = var9.assets;
            var3 = var8 == var1;
            var13 = undefined;
            if(var3) { _fun0003_ip = 35; continue _fun0003 }
case 37:
            var13 = var1.large_image;
case 35:
            var1 = var8 != var13;
            var4 = undefined;
            if(!var1) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var1 = {};
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 3;
            var3 = var11[var3];
            var12 = var10.bind(var2)(var3);
            var11 = var12.getAssetImage;
            var10 = var9.application_id;
            var3 = _closure1_slot4;
            var14 = var3.LARGE;
            var3 = new Array(2);
            var3[0] = var14;
            var14 = _closure1_slot4;
            var14 = var14.LARGE;
            var3[1] = var14;
            var3 = var11.bind(var12)(var10, var13, var3);
            var1['src'] = var3;
            var10 = var9.assets;
            var11 = var8 == var10;
            var3 = undefined;
            if(var11) { _fun0003_ip = 40; continue _fun0003 }
case 10:
            var11 = var10.large_text;
            var10 = var8 == var11;
            var3 = undefined;
            if(var10) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var10 = var11.trim;
            var3 = var10.bind(var11)();
case 40:
            var1['text'] = var3;
            var10 = var9.assets;
            var11 = var8 == var10;
            var3 = undefined;
            if(var11) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var3 = var10.large_url;
case 42:
            var1['url'] = var3;
            var4 = var1;
case 38:
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 13;
            var1 = var10[var1];
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)(var9);
            var14 = undefined;
            if(var1) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var1 = var8 == var9;
            var14 = undefined;
            if(var1) { _fun0003_ip = 44; continue _fun0003 }
case 46:
            var1 = var9.assets;
            var3 = var8 == var1;
            var14 = undefined;
            if(var3) { _fun0003_ip = 44; continue _fun0003 }
case 47:
            var14 = var1.small_image;
case 44:
            var1 = var8 != var14;
            var3 = undefined;
            if(!var1) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var1 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 3;
            var10 = var12[var10];
            var13 = var11.bind(var2)(var10);
            var12 = var13.getAssetImage;
            var11 = var9.application_id;
            var10 = _closure1_slot4;
            var15 = var10.LARGE;
            var10 = new Array(2);
            var10[0] = var15;
            var15 = _closure1_slot4;
            var15 = var15.LARGE;
            var10[1] = var15;
            var10 = var12.bind(var13)(var11, var14, var10);
            var1['src'] = var10;
            var11 = var9.assets;
            var12 = var8 == var11;
            var10 = undefined;
            if(var12) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var12 = var11.small_text;
            var11 = var8 == var12;
            var10 = undefined;
            if(var11) { _fun0003_ip = 50; continue _fun0003 }
case 52:
            var11 = var12.trim;
            var10 = var11.bind(var12)();
case 50:
            var1['text'] = var10;
            var10 = var9.assets;
            var11 = var8 == var10;
            var9 = undefined;
            if(var11) { _fun0003_ip = 53; continue _fun0003 }
case 54:
            var9 = var10.small_url;
case 53:
            var1['url'] = var9;
            var3 = var1;
case 48:
            var1 = {};
            if(!(var8 == var4)) { _fun0003_ip = 55; continue _fun0003 }
case 56:
            var6 = _closure1_slot5;
            if(!(var8 != var7)) { _fun0003_ip = 57; continue _fun0003 }
case 58:
            var5 = var7;
case 57:
            var4 = var6.bind(var2)(var5);
case 55:
            var1['largeImage'] = var4;
            var1['smallImage'] = var3;
            return var1;
case 33:
            var1 = {};
            var1['largeImage'] = var2;
            var1['smallImage'] = var2;
            return var1;
        }
    };
    var _closure1_slot7 = var2;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var7 = var7.PlatformTypes;
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ImageSizes;
    var _closure1_slot4 = var7;
    var7 = 14;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/content_inventory/ContentInventoryActivityImageUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['getApplicationImage'] = var6;
    var5 = function useImageForContentEntry(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var10 = var1.entry;
            var1 = var1.showCoverImage;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var1 = true;
case 59:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 5;
            var2 = var4[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.bind(var5)(var10);
            var9 = var2.activity;
            var11 = var2.activityApplication;
            var6 = var2.fallbackApplication;
            var2 = _closure1_slot7;
            var2 = var2.bind(var5)(var9, var11);
            var4 = var2.largeImage;
            var3 = var2.smallImage;
            var8 = _closure1_slot6;
            var7 = null;
            var2 = var11;
            if(!(var7 != var6)) { _fun0004_ip = 61; continue _fun0004 }
case 62:
            var2 = var6;
case 61:
            var2 = var8.bind(var5)(var9, var2);
            var2 = var2.largeImage;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 6;
            var8 = var13[var8];
            var9 = var9.bind(var5)(var8);
            var8 = var9.useDetectableGameSupplementalData;
            if(!(var7 != var6)) { _fun0004_ip = 63; continue _fun0004 }
case 64:
            var11 = var6;
case 63:
            var13 = var7 == var11;
            var6 = undefined;
            if(var13) { _fun0004_ip = 65; continue _fun0004 }
case 23:
            var6 = var11.id;
case 65:
            var6 = var8.bind(var9)(var6);
            var8 = var6.coverImageUrl;
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 2;
            var9 = var9[var6];
            var11 = var11.bind(var5)(var9);
            var9 = var11.isListenedSessionEntry;
            var9 = var9.bind(var11)(var10);
            if(!var9) { _fun0004_ip = 66; continue _fun0004 }
case 67:
            var9 = var10.extra;
            var9 = var9.entries;
            var9 = var9.length;
            var11 = 0;
            if(!(!(var9 > var11))) { _fun0004_ip = 68; continue _fun0004 }
case 66:
            var13 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var6];
            var13 = var13.bind(var5)(var9);
            var9 = var13.isWatchedMediaEntry;
            var9 = var9.bind(var13)(var10);
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            if(var9) { _fun0004_ip = 69; continue _fun0004 }
case 70:
            var6 = var15[var6];
            var9 = var14.bind(var5)(var6);
            var6 = var9.isTopArtistEntry;
            var9 = var6.bind(var9)(var10);
            var6 = undefined;
            if(!var9) { _fun0004_ip = 71; continue _fun0004 }
case 72:
            var9 = {};
            var13 = var10.extra;
            var13 = var13.media;
            var13 = var13.image_url;
            var9['src'] = var13;
            var6 = var9;
case 71:
            _fun0004_ip = 73; continue _fun0004;
case 69:
            var9 = {};
            var13 = 3;
            var13 = var15[var13];
            var16 = var14.bind(var5)(var13);
            var15 = var16.getAssetImage;
            var13 = var10.extra;
            var14 = var13.application_id;
            var13 = var10.extra;
            var13 = var13.media_assets_large_image;
            var12 = _closure1_slot4;
            var12 = var12.LARGE;
            var12 = var15.bind(var16)(var14, var13, var12);
            var9['src'] = var12;
            var12 = var10.extra;
            var12 = var12.media_title;
            var9['alt'] = var12;
            var6 = var9;
case 73:
            _fun0004_ip = 74; continue _fun0004;
case 68:
            var9 = {};
            var10 = var10.extra;
            var10 = var10.entries;
            var10 = var10[var11];
            var10 = var10.media;
            var10 = var10.image_url;
            var9['src'] = var10;
            var6 = var9;
case 74:
            if(!(var7 == var4)) { _fun0004_ip = 75; continue _fun0004 }
case 76:
            if(!(var7 == var6)) { _fun0004_ip = 77; continue _fun0004 }
case 54:
            if(!(var7 != var8)) { _fun0004_ip = 78; continue _fun0004 }
case 79:
            if(var1) { _fun0004_ip = 80; continue _fun0004 }
case 78:
            var1 = {};
            var1['largeImage'] = var2;
            var1['smallImage'] = var5;
            _fun0004_ip = 81; continue _fun0004;
case 80:
            var2 = {};
            var7 = {};
            var7['src'] = var8;
            var2['largeImage'] = var7;
            var2['smallImage'] = var5;
            var1 = var2;
case 81:
            _fun0004_ip = 82; continue _fun0004;
case 77:
            var2 = {};
            var2['largeImage'] = var6;
            var2['smallImage'] = var5;
            var1 = var2;
case 82:
            _fun0004_ip = 83; continue _fun0004;
case 75:
            var2 = {};
            var2['largeImage'] = var4;
            var2['smallImage'] = var3;
            var1 = var2;
case 83:
            return var1;
        }
    };
    var3['useImageForContentEntry'] = var5;
    var3['useImageForActivity'] = var4;
    var3['useRichImageForActivity'] = var2;
    return var1;
})();