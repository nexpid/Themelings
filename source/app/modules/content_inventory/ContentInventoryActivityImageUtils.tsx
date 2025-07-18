// app/modules/content_inventory/ContentInventoryActivityImageUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
    var1 = function getApplicationImage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = null;
            var4 = var2 == var1;
            var7 = undefined;
            var3 = undefined;
            if(var4) { _fun0001_ip = 40; continue _fun0001 }
 16:
            var5 = var1.getIconURL;
            var4 = _closure1_slot4;
            var4 = var4.LARGE;
            var3 = var5.bind(var1)(var4);
 40:
            var4 = var2 == var1;
            var6 = undefined;
            if(var4) { _fun0001_ip = 54; continue _fun0001 }
 49:
            var6 = var1.name;
 54:
            if(!(var2 == var3)) { _fun0001_ip = 60; continue _fun0001 }
 58:
            return var7;
 60:
            var1 = {};
            var1['src'] = var3;
            if(!(var2 != var6)) { _fun0001_ip = 141; continue _fun0001 }
 71:
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
            _fun0001_ip = 201; continue _fun0001;
 141:
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
 201:
            var1['alt'] = var2;
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var4 = function useImageForActivity(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var11 = arg1;
            var6 = arg2;
            var1 = _closure1_slot7;
            var4 = undefined;
            var1 = var1.bind(var4)(var11, var6);
            var3 = var1.largeImage;
            var2 = var1.smallImage;
            var5 = null;
            if(!(var5 == var3)) { _fun0002_ip = 610; continue _fun0002 }
 42:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 7;
            var1 = var1[var7];
            var8 = var8.bind(var4)(var1);
            var1 = var8.isStageActivity;
            var1 = var1.bind(var8)(var11);
            if(var1) { _fun0002_ip = 450; continue _fun0002 }
 79:
            if(!(var5 == var3)) { _fun0002_ip = 114; continue _fun0002 }
 83:
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 9;
            var1 = var10[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.bind(var4)(var11);
            if(var1) { _fun0002_ip = 322; continue _fun0002 }
 114:
            if(!(var5 == var3)) { _fun0002_ip = 150; continue _fun0002 }
 118:
            if(!(var5 == var2)) { _fun0002_ip = 150; continue _fun0002 }
 122:
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 11;
            var1 = var10[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.bind(var4)(var11);
            if(var1) { _fun0002_ip = 194; continue _fun0002 }
 150:
            var1 = _closure1_slot5;
            var8 = var1.bind(var4)(var6);
            if(!(var5 == var8)) { _fun0002_ip = 177; continue _fun0002 }
 163:
            var1 = {};
            var1['largeImage'] = var2;
            var1['smallImage'] = var4;
            _fun0002_ip = 192; continue _fun0002;
 177:
            var6 = {};
            var6['largeImage'] = var8;
            var6['smallImage'] = var2;
            var1 = var6;
 192:
            return var1;
 194:
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
 322:
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
 450:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var6 = var6.bind(var4)(var1);
            var1 = var6.unpackStageChannelParty;
            var10 = var1.bind(var6)(var11);
            var1 = var5 != var10;
            var7 = undefined;
            if(!var1) { _fun0002_ip = 577; continue _fun0002 }
 487:
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
            if(var12) { _fun0002_ip = 554; continue _fun0002 }
 533:
            var11 = var11.assets;
            var12 = var5 == var11;
            var10 = undefined;
            if(var12) { _fun0002_ip = 554; continue _fun0002 }
 548:
            var10 = var11.small_image;
 554:
            var1['icon'] = var10;
            var9 = _closure1_slot4;
            var9 = var9.SMALL;
            var1['size'] = var9;
            var7 = var6.bind(var8)(var1);
 577:
            var1 = {};
            var6 = var5 != var7;
            var5 = undefined;
            if(!var6) { _fun0002_ip = 598; continue _fun0002 }
 588:
            var6 = {};
            var6['src'] = var7;
            var5 = var6;
 598:
            var1['largeImage'] = var5;
            var1['smallImage'] = var4;
            return var1;
 610:
            var1 = {};
            var1['largeImage'] = var3;
            var1['smallImage'] = var2;
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var2 = function useRichImageForActivity(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
            if(var5) { _fun0003_ip = 54; continue _fun0003 }
 48:
            var1 = var9.application_id;
 54:
            var5 = var3.bind(var4)(var1);
            if(!(var8 != var9)) { _fun0003_ip = 514; continue _fun0003 }
 66:
            var1 = var8 == var9;
            var13 = undefined;
            if(var1) { _fun0003_ip = 96; continue _fun0003 }
 75:
            var1 = var9.assets;
            var3 = var8 == var1;
            var13 = undefined;
            if(var3) { _fun0003_ip = 96; continue _fun0003 }
 90:
            var13 = var1.large_image;
 96:
            var1 = var8 != var13;
            var4 = undefined;
            if(!var1) { _fun0003_ip = 258; continue _fun0003 }
 108:
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
            if(var11) { _fun0003_ip = 226; continue _fun0003 }
 201:
            var11 = var10.large_text;
            var10 = var8 == var11;
            var3 = undefined;
            if(var10) { _fun0003_ip = 226; continue _fun0003 }
 216:
            var10 = var11.trim;
            var3 = var10.bind(var11)();
 226:
            var1['text'] = var3;
            var10 = var9.assets;
            var11 = var8 == var10;
            var3 = undefined;
            if(var11) { _fun0003_ip = 251; continue _fun0003 }
 245:
            var3 = var10.large_url;
 251:
            var1['url'] = var3;
            var4 = var1;
 258:
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 13;
            var1 = var10[var1];
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)(var9);
            var14 = undefined;
            if(var1) { _fun0003_ip = 318; continue _fun0003 }
 288:
            var1 = var8 == var9;
            var14 = undefined;
            if(var1) { _fun0003_ip = 318; continue _fun0003 }
 297:
            var1 = var9.assets;
            var3 = var8 == var1;
            var14 = undefined;
            if(var3) { _fun0003_ip = 318; continue _fun0003 }
 312:
            var14 = var1.small_image;
 318:
            var1 = var8 != var14;
            var3 = undefined;
            if(!var1) { _fun0003_ip = 480; continue _fun0003 }
 330:
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
            if(var12) { _fun0003_ip = 448; continue _fun0003 }
 423:
            var12 = var11.small_text;
            var11 = var8 == var12;
            var10 = undefined;
            if(var11) { _fun0003_ip = 448; continue _fun0003 }
 438:
            var11 = var12.trim;
            var10 = var11.bind(var12)();
 448:
            var1['text'] = var10;
            var10 = var9.assets;
            var11 = var8 == var10;
            var9 = undefined;
            if(var11) { _fun0003_ip = 473; continue _fun0003 }
 467:
            var9 = var10.small_url;
 473:
            var1['url'] = var9;
            var3 = var1;
 480:
            var1 = {};
            if(!(var8 == var4)) { _fun0003_ip = 502; continue _fun0003 }
 486:
            var6 = _closure1_slot5;
            if(!(var8 != var7)) { _fun0003_ip = 497; continue _fun0003 }
 494:
            var5 = var7;
 497:
            var4 = var6.bind(var2)(var5);
 502:
            var1['largeImage'] = var4;
            var1['smallImage'] = var3;
            return var1;
 514:
            var1 = {};
            var1['largeImage'] = var2;
            var1['smallImage'] = var2;
            return var1;
        }
    };
    var _closure1_slot7 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var6 = var6.PlatformTypes;
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.ImageSizes;
    var _closure1_slot4 = var6;
    var6 = 14;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/content_inventory/ContentInventoryActivityImageUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function useImageForContentEntry(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var10 = var1.entry;
            var1 = var1.showCoverImage;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0004_ip = 25; continue _fun0004 }
 23:
            var1 = true;
 25:
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
            if(!(var7 != var6)) { _fun0004_ip = 109; continue _fun0004 }
 106:
            var2 = var6;
 109:
            var2 = var8.bind(var5)(var9, var2);
            var2 = var2.largeImage;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 6;
            var8 = var13[var8];
            var9 = var9.bind(var5)(var8);
            var8 = var9.useDetectableGameSupplementalData;
            if(!(var7 != var6)) { _fun0004_ip = 154; continue _fun0004 }
 151:
            var11 = var6;
 154:
            var13 = var7 == var11;
            var6 = undefined;
            if(var13) { _fun0004_ip = 168; continue _fun0004 }
 163:
            var6 = var11.id;
 168:
            var6 = var8.bind(var9)(var6);
            var8 = var6.coverImageUrl;
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 2;
            var9 = var9[var6];
            var11 = var11.bind(var5)(var9);
            var9 = var11.isListenedSessionEntry;
            var9 = var9.bind(var11)(var10);
            if(!var9) { _fun0004_ip = 239; continue _fun0004 }
 213:
            var9 = var10.extra;
            var9 = var9.entries;
            var9 = var9.length;
            var11 = 0;
            if(!(!(var9 > var11))) { _fun0004_ip = 421; continue _fun0004 }
 239:
            var13 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var6];
            var13 = var13.bind(var5)(var9);
            var9 = var13.isWatchedMediaEntry;
            var9 = var9.bind(var13)(var10);
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            if(var9) { _fun0004_ip = 333; continue _fun0004 }
 278:
            var6 = var15[var6];
            var9 = var14.bind(var5)(var6);
            var6 = var9.isTopArtistEntry;
            var9 = var6.bind(var9)(var10);
            var6 = undefined;
            if(!var9) { _fun0004_ip = 331; continue _fun0004 }
 303:
            var9 = {};
            var13 = var10.extra;
            var13 = var13.media;
            var13 = var13.image_url;
            var9['src'] = var13;
            var6 = var9;
 331:
            _fun0004_ip = 419; continue _fun0004;
 333:
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
 419:
            _fun0004_ip = 459; continue _fun0004;
 421:
            var9 = {};
            var10 = var10.extra;
            var10 = var10.entries;
            var10 = var10[var11];
            var10 = var10.media;
            var10 = var10.image_url;
            var9['src'] = var10;
            var6 = var9;
 459:
            if(!(var7 == var4)) { _fun0004_ip = 529; continue _fun0004 }
 463:
            if(!(var7 == var6)) { _fun0004_ip = 512; continue _fun0004 }
 467:
            if(!(var7 != var8)) { _fun0004_ip = 474; continue _fun0004 }
 471:
            if(var1) { _fun0004_ip = 488; continue _fun0004 }
 474:
            var1 = {};
            var1['largeImage'] = var2;
            var1['smallImage'] = var5;
            _fun0004_ip = 510; continue _fun0004;
 488:
            var2 = {};
            var7 = {};
            var7['src'] = var8;
            var2['largeImage'] = var7;
            var2['smallImage'] = var5;
            var1 = var2;
 510:
            _fun0004_ip = 527; continue _fun0004;
 512:
            var2 = {};
            var2['largeImage'] = var6;
            var2['smallImage'] = var5;
            var1 = var2;
 527:
            _fun0004_ip = 544; continue _fun0004;
 529:
            var2 = {};
            var2['largeImage'] = var4;
            var2['smallImage'] = var3;
            var1 = var2;
 544:
            return var1;
        }
    };
    var3['useImageForContentEntry'] = var5;
    var3['useImageForActivity'] = var4;
    var3['useRichImageForActivity'] = var2;
    return var1;
})();