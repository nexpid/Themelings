// app/modules/messages/native/renderer/transformContentInventoryEntryMessageComponent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getMissingIconURL() {
        var3 = _closure1_slot3;
        var2 = var3.resolveAssetSource;
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 8;
        var4 = var4[var1];
        var1 = undefined;
        var1 = var5.bind(var1)(var4);
        var1 = var2.bind(var3)(var1);
        var1 = var1.uri;
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function getGradientColors(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var2 = _closure1_slot9;
            var6 = undefined;
            var2 = var2.bind(var6)();
            if(!(var5 !== var2)) { _fun0001_ip = 159; continue _fun0001 }
 23:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.hasFetchedColors;
            var2 = var2.bind(var3)(var5);
            if(var2) { _fun0001_ip = 59; continue _fun0001 }
 57:
            return var6;
 59:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var2 = var7[var2];
            var3 = var4.bind(var6)(var2);
            var2 = var3.getHeroColors;
            var2 = var2.bind(var3)(var5);
            var9 = var2.primaryColor;
            var5 = var2.secondaryColor;
            var3 = 11;
            var2 = var7[var3];
            var8 = var4.bind(var6)(var2);
            var2 = var8.hexToRgba;
            var8 = var2.bind(var8)(var9);
            var2 = new Array(2);
            var2[0] = var8;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.hexToRgba;
            var3 = var3.bind(var4)(var5);
            var2[1] = var3;
            return var2;
 159:
            var1 = _closure1_slot8;
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function buildTimestampBadge(arg1, arg2, arg3) {
        var7 = arg1;
        var1 = global;
        var4 = var1.Date;
        var3 = _closure1_slot1;
        var11 = _closure1_slot2;
        var1 = 12;
        var1 = var11[var1];
        var10 = undefined;
        var5 = var3.bind(var10)(var1);
        var3 = var5.extractTimestamp;
        var1 = arg2;
        var1 = var1.id;
        var15 = var3.bind(var5)(var1);
        var3 = var4.prototype;
        var3 = Object.create(var3, {constructor: {value: var4}});
        var16 = var3;
        var1 = new var16[var4](var15, var14);
        var3 = var1 instanceof Object ? var1 : var3;
        var1 = var3.getTime;
        var6 = var1.bind(var3)();
        var1 = {};
        var14 = arg3;
        var15 = var1;
        var3 = copyDataProperties(var15, var14);
        var9 = _closure1_slot0;
        var8 = 13;
        var3 = var11[var8];
        var5 = var9.bind(var10)(var3);
        var4 = var5.formatEntryTimestamp;
        var3 = _closure1_slot5;
        var3 = var3.locale;
        var4 = var4.bind(var5)(var7, var3, var6);
        var3 = 'text';
        var1[var3] = var4;
        var3 = var11[var8];
        var5 = var9.bind(var10)(var3);
        var4 = var5.formatEntryTimestamp;
        var2 = _closure1_slot5;
        var14 = var2.locale;
        var2 = {};
        var8 = var11[var8];
        var8 = var9.bind(var10)(var8);
        var8 = var8.A11Y_FORMAT_SET;
        var2['formatSet'] = var8;
        var16 = var5;
        var15 = var7;
        var13 = var6;
        var12 = var2;
        var3 = var16[var4](var15, var14, var13, var12, var11);
        var2 = 'ariaDescription';
        var1[var2] = var3;
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.Image;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ImageSizes;
    var _closure1_slot7 = var4;
    var4 = new Array(2);
    var7 = {'r': 0, 'g': 0, 'b': 0, 'a': 1};
    var4[0] = var7;
    var7 = {'r': 0, 'g': 0, 'b': 0, 'a': 1};
    var4[1] = var7;
    var _closure1_slot8 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/transformContentInventoryEntryMessageComponent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function transformToRowGeneratedContentInventoryEntryComponent(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.component;
            var4 = var2.contentInventoryEntry;
            var14 = var1.message;
            var5 = var4.content_type;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 5;
            var2 = var1[var6];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.ContentInventoryEntryType;
            var2 = var2.PLAYED_GAME;
            if(!(var2 !== var5)) { _fun0002_ip = 1742; continue _fun0002 }
 70:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var3.bind(var1)(var2);
            var2 = var2.ContentInventoryEntryType;
            var2 = var2.TOP_GAME;
            if(!(var2 !== var5)) { _fun0002_ip = 1742; continue _fun0002 }
 106:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var3.bind(var1)(var2);
            var2 = var2.ContentInventoryEntryType;
            var2 = var2.WATCHED_MEDIA;
            if(!(var2 !== var5)) { _fun0002_ip = 1243; continue _fun0002 }
 142:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var3.bind(var1)(var2);
            var2 = var2.ContentInventoryEntryType;
            var2 = var2.TOP_ARTIST;
            if(!(var2 !== var5)) { _fun0002_ip = 787; continue _fun0002 }
 178:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var3.bind(var1)(var2);
            var2 = var2.ContentInventoryEntryType;
            var2 = var2.LISTENED_SESSION;
            if(!(var2 !== var5)) { _fun0002_ip = 463; continue _fun0002 }
 214:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var3.bind(var1)(var2);
            var2 = var2.ContentInventoryEntryType;
            var2 = var2.LAUNCHED_ACTIVITY;
            var3 = undefined;
            if(!(var2 === var5)) { _fun0002_ip = 2267; continue _fun0002 }
 252:
            var6 = _closure1_slot4;
            var5 = var6.getApplication;
            var2 = var4.extra;
            var2 = var2.application_id;
            var9 = var5.bind(var6)(var2);
            var5 = null;
            var6 = var5 == var9;
            var2 = undefined;
            if(var6) { _fun0002_ip = 455; continue _fun0002 }
 293:
            var8 = var9.getIconURL;
            var6 = _closure1_slot7;
            var6 = var6.LARGE;
            var8 = var8.bind(var9)(var6);
            if(!(var5 == var8)) { _fun0002_ip = 326; continue _fun0002 }
 318:
            var6 = _closure1_slot9;
            var8 = var6.bind(var1)();
 326:
            var6 = _closure1_slot10;
            var6 = var6.bind(var1)(var8);
            var5 = var5 == var6;
            var9 = var8;
            var2 = undefined;
            if(var5) { _fun0002_ip = 455; continue _fun0002 }
 347:
            var8 = new Array(0);
            var10 = var8.push;
            var11 = _closure1_slot11;
            var5 = {};
            var15 = _closure1_slot3;
            var13 = var15.resolveAssetSource;
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var12 = 18;
            var12 = var17[var12];
            var12 = var16.bind(var1)(var12);
            var12 = var13.bind(var15)(var12);
            var12 = var12.uri;
            var5['badgeUrl'] = var12;
            var5 = var11.bind(var1)(var4, var14, var5);
            var5 = var10.bind(var8)(var5);
            var5 = {};
            var5['imageUrl'] = var9;
            var9 = var4.extra;
            var9 = var9.activity_name;
            var5['title'] = var9;
            var5['subtitles'] = var8;
            var5['gradientColors'] = var6;
            var2 = var5;
 455:
            var3 = var2;
            _fun0002_ip = 2267; continue _fun0002;
 463:
            var2 = var4.extra;
            var2 = var2.entries;
            var6 = 0;
            var5 = var2[var6];
            var2 = var5.media;
            var10 = var2.image_url;
            var2 = var5.media;
            var9 = var2.title;
            var2 = var5.media;
            var2 = var2.artists;
            var6 = var2[var6];
            var2 = null;
            var11 = var2 == var6;
            var8 = undefined;
            if(var11) { _fun0002_ip = 536; continue _fun0002 }
 531:
            var8 = var6.name;
 536:
            if(!(var2 == var8)) { _fun0002_ip = 551; continue _fun0002 }
 540:
            var5 = var5.media;
            var8 = var5.title;
 551:
            var5 = var2 == var10;
            var2 = undefined;
            if(var5) { _fun0002_ip = 779; continue _fun0002 }
 563:
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 9;
            var5 = var11[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.hasFetchedColors;
            var5 = var5.bind(var6)(var10);
            var2 = undefined;
            if(!var5) { _fun0002_ip = 779; continue _fun0002 }
 602:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 10;
            var5 = var11[var5];
            var6 = var12.bind(var1)(var5);
            var5 = var6.getHeroColors;
            var5 = var5.bind(var6)(var10);
            var16 = var5.primaryColor;
            var13 = var5.secondaryColor;
            var5 = 11;
            var6 = var11[var5];
            var15 = var12.bind(var1)(var6);
            var6 = var15.hexToRgba;
            var15 = var6.bind(var15)(var16);
            var6 = new Array(2);
            var6[0] = var15;
            var5 = var11[var5];
            var12 = var12.bind(var1)(var5);
            var5 = var12.hexToRgba;
            var5 = var5.bind(var12)(var13);
            var6[1] = var5;
            var5 = {};
            var5['imageUrl'] = var10;
            var5['title'] = var9;
            var9 = {};
            var9['text'] = var8;
            var8 = new Array(1);
            var8[0] = var9;
            var5['subtitles'] = var8;
            var5['gradientColors'] = var6;
            var9 = _closure1_slot3;
            var8 = var9.resolveAssetSource;
            var10 = _closure1_slot1;
            var6 = 21;
            var6 = var11[var6];
            var6 = var10.bind(var1)(var6);
            var6 = var8.bind(var9)(var6);
            var6 = var6.uri;
            var5['platformIconUrl'] = var6;
            var2 = var5;
 779:
            var3 = var2;
            _fun0002_ip = 2267; continue _fun0002;
 787:
            var2 = var4.extra;
            var2 = var2.media;
            var9 = var2.image_url;
            var5 = null;
            var6 = var5 == var9;
            var2 = undefined;
            if(var6) { _fun0002_ip = 1235; continue _fun0002 }
 819:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 9;
            var6 = var10[var6];
            var8 = var8.bind(var1)(var6);
            var6 = var8.hasFetchedColors;
            var6 = var6.bind(var8)(var9);
            var2 = undefined;
            if(!var6) { _fun0002_ip = 1235; continue _fun0002 }
 858:
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 10;
            var6 = var15[var6];
            var8 = var13.bind(var1)(var6);
            var6 = var8.getHeroColors;
            var6 = var6.bind(var8)(var9);
            var12 = var6.primaryColor;
            var11 = var6.secondaryColor;
            var8 = 11;
            var6 = var15[var8];
            var10 = var13.bind(var1)(var6);
            var6 = var10.hexToRgba;
            var10 = var6.bind(var10)(var12);
            var6 = new Array(2);
            var6[0] = var10;
            var8 = var15[var8];
            var10 = var13.bind(var1)(var8);
            var8 = var10.hexToRgba;
            var8 = var8.bind(var10)(var11);
            var6[1] = var8;
            var8 = new Array(0);
            var10 = 13;
            var10 = var15[var10];
            var12 = var13.bind(var1)(var10);
            var11 = var12.getTrait;
            var10 = 22;
            var10 = var15[var10];
            var10 = var13.bind(var1)(var10);
            var10 = var10.ContentInventoryTraitType;
            var10 = var10.AGGREGATE_COUNT;
            var10 = var11.bind(var12)(var4, var10);
            var11 = var5 == var10;
            var15 = undefined;
            if(var11) { _fun0002_ip = 1023; continue _fun0002 }
 1017:
            var15 = var10.count;
 1023:
            var5 = var5 == var15;
            var2 = undefined;
            if(var5) { _fun0002_ip = 1235; continue _fun0002 }
 1035:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 15;
            var12 = var11[var5];
            var12 = var10.bind(var1)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var5 = var11[var5];
            var5 = var10.bind(var1)(var5);
            var5 = var5.t;
            var10 = var5.HtifnJ;
            var5 = {};
            var5['count'] = var15;
            var13 = var12.bind(var13)(var10, var5);
            var12 = var8.push;
            var5 = {};
            var17 = _closure1_slot3;
            var16 = var17.resolveAssetSource;
            var10 = _closure1_slot1;
            var15 = 16;
            var15 = var11[var15];
            var15 = var10.bind(var1)(var15);
            var15 = var16.bind(var17)(var15);
            var15 = var15.uri;
            var5['badgeUrl'] = var15;
            var5['text'] = var13;
            var5 = var12.bind(var8)(var5);
            var5 = {};
            var5['imageUrl'] = var9;
            var9 = var4.extra;
            var9 = var9.artist;
            var9 = var9.name;
            var5['title'] = var9;
            var5['subtitles'] = var8;
            var5['gradientColors'] = var6;
            var9 = _closure1_slot3;
            var8 = var9.resolveAssetSource;
            var6 = 21;
            var6 = var11[var6];
            var6 = var10.bind(var1)(var6);
            var6 = var8.bind(var9)(var6);
            var6 = var6.uri;
            var5['platformIconUrl'] = var6;
            var2 = var5;
 1235:
            var3 = var2;
            _fun0002_ip = 2267; continue _fun0002;
 1243:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 19;
            var2 = var6[var2];
            var9 = var5.bind(var1)(var2);
            var8 = var9.getAssetImage;
            var2 = var4.extra;
            var6 = var2.application_id;
            var2 = var4.extra;
            var5 = var2.media_assets_large_image;
            var10 = _closure1_slot7;
            var11 = var10.LARGE;
            var2 = new Array(2);
            var2[0] = var11;
            var10 = var10.LARGE;
            var2[1] = var10;
            var5 = var8.bind(var9)(var6, var5, var2);
            var8 = _closure1_slot4;
            var6 = var8.getApplication;
            var2 = var4.extra;
            var2 = var2.application_id;
            var9 = var6.bind(var8)(var2);
            var12 = null;
            var6 = var12 == var9;
            var2 = undefined;
            if(var6) { _fun0002_ip = 1387; continue _fun0002 }
 1366:
            var8 = var9.getIconURL;
            var6 = _closure1_slot7;
            var6 = var6.LARGE;
            var2 = var8.bind(var9)(var6);
 1387:
            if(!(var12 == var2)) { _fun0002_ip = 1399; continue _fun0002 }
 1391:
            var6 = _closure1_slot9;
            var2 = var6.bind(var1)();
 1399:
            if(!(var12 != var5)) { _fun0002_ip = 1406; continue _fun0002 }
 1403:
            var2 = var5;
 1406:
            var5 = _closure1_slot10;
            var6 = var5.bind(var1)(var2);
            var5 = var12 == var6;
            var9 = var2;
            var2 = undefined;
            if(var5) { _fun0002_ip = 1734; continue _fun0002 }
 1430:
            var8 = new Array(0);
            var11 = /\w+ (\d+), \w+ (\d+)/;
            var10 = var11.exec;
            var5 = var4.extra;
            var13 = var5.media_assets_large_text;
            var15 = var12 != var13;
            var5 = '';
            if(!var15) { _fun0002_ip = 1482; continue _fun0002 }
 1479:
            var5 = var13;
 1482:
            var16 = var10.bind(var11)(var5);
            if(!(var12 != var16)) { _fun0002_ip = 1653; continue _fun0002 }
 1494:
            var10 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 15;
            var11 = var15[var5];
            var11 = var10.bind(var1)(var11);
            var13 = var11.intl;
            var11 = var13.formatToPlainString;
            var5 = var15[var5];
            var5 = var10.bind(var1)(var5);
            var5 = var5.t;
            var10 = var5.ijVm6+;
            var5 = {};
            var15 = 1;
            var15 = var16[var15];
            var5['seasonNum'] = var15;
            var15 = 2;
            var15 = var16[var15];
            var5['episodeNum'] = var15;
            var10 = var11.bind(var13)(var10, var5);
            var5 = var4.extra;
            var5 = var5.media_title;
            var11 = var10;
            if(!(var12 != var5)) { _fun0002_ip = 1637; continue _fun0002 }
 1595:
            var5 = var4.extra;
            var13 = var5.media_subtitle;
            var5 = global;
            var5 = var5.HermesInternal;
            var12 = var5.concat;
            var5 = ' · ';
            var5 = var12.bind(var5)(var13);
            var11 = var10 + var5;
 1637:
            var10 = var8.push;
            var5 = {};
            var5['text'] = var11;
            var5 = var10.bind(var8)(var5);
 1653:
            var5 = {};
            var5['imageUrl'] = var9;
            var9 = var4.extra;
            var9 = var9.media_title;
            var5['title'] = var9;
            var5['subtitles'] = var8;
            var5['gradientColors'] = var6;
            var9 = _closure1_slot3;
            var8 = var9.resolveAssetSource;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 20;
            var6 = var11[var6];
            var6 = var10.bind(var1)(var6);
            var6 = var8.bind(var9)(var6);
            var6 = var6.uri;
            var5['platformIconUrl'] = var6;
            var2 = var5;
 1734:
            var3 = var2;
            _fun0002_ip = 2267; continue _fun0002;
 1742:
            var6 = _closure1_slot4;
            var5 = var6.getApplication;
            var2 = var4.extra;
            var2 = var2.application_id;
            var9 = var5.bind(var6)(var2);
            var5 = null;
            var6 = var5 == var9;
            var2 = undefined;
            if(var6) { _fun0002_ip = 2264; continue _fun0002 }
 1783:
            var8 = var9.getIconURL;
            var6 = _closure1_slot7;
            var6 = var6.LARGE;
            var9 = var8.bind(var9)(var6);
            if(!(var5 == var9)) { _fun0002_ip = 1816; continue _fun0002 }
 1808:
            var6 = _closure1_slot9;
            var9 = var6.bind(var1)();
 1816:
            var6 = _closure1_slot10;
            var6 = var6.bind(var1)(var9);
            var8 = var5 == var6;
            var2 = undefined;
            if(var8) { _fun0002_ip = 2264; continue _fun0002 }
 1837:
            var8 = new Array(0);
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var12 = 13;
            var10 = var10[var12];
            var11 = var11.bind(var1)(var10);
            var10 = var11.isEntryTopGame;
            var10 = var10.bind(var11)(var4);
            if(var10) { _fun0002_ip = 1948; continue _fun0002 }
 1875:
            var11 = var8.push;
            var13 = _closure1_slot11;
            var10 = {};
            var17 = _closure1_slot3;
            var16 = var17.resolveAssetSource;
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var15 = 17;
            var15 = var19[var15];
            var15 = var18.bind(var1)(var15);
            var15 = var16.bind(var17)(var15);
            var15 = var15.uri;
            var10['badgeUrl'] = var15;
            var10 = var13.bind(var1)(var4, var14, var10);
            var10 = var11.bind(var8)(var10);
            _fun0002_ip = 2228; continue _fun0002;
 1948:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var12];
            var11 = var11.bind(var1)(var10);
            var10 = var11.getEntryDuration;
            var13 = var10.bind(var11)(var4);
            var5 = var5 == var13;
            var2 = undefined;
            if(var5) { _fun0002_ip = 2264; continue _fun0002 }
 1988:
            var5 = global;
            var12 = var5.Math;
            var11 = var12.round;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var10 = 14;
            var10 = var16[var10];
            var10 = var15.bind(var1)(var10);
            var10 = var10.Seconds;
            var10 = var10.HOUR;
            var10 = var13 / var10;
            var17 = var11.bind(var12)(var10);
            var11 = _closure1_slot0;
            var10 = 15;
            var12 = var16[var10];
            var12 = var11.bind(var1)(var12);
            var14 = var12.intl;
            var13 = var14.string;
            var12 = var16[var10];
            var12 = var11.bind(var1)(var12);
            var12 = var12.t;
            var12 = var12./50eHh;
            var13 = var13.bind(var14)(var12);
            var12 = var16[var10];
            var12 = var11.bind(var1)(var12);
            var14 = var12.intl;
            var12 = var14.formatToPlainString;
            var10 = var16[var10];
            var10 = var11.bind(var1)(var10);
            var10 = var10.t;
            var11 = var10.C0Axoa;
            var10 = {};
            var10['hours'] = var17;
            var12 = var12.bind(var14)(var11, var10);
            var5 = var5.HermesInternal;
            var11 = var5.concat;
            var10 = '';
            var5 = ' - ';
            var11 = var11.bind(var10)(var13, var5, var12);
            var10 = var8.push;
            var5 = {};
            var14 = _closure1_slot3;
            var13 = var14.resolveAssetSource;
            var12 = 16;
            var12 = var16[var12];
            var12 = var15.bind(var1)(var12);
            var12 = var13.bind(var14)(var12);
            var12 = var12.uri;
            var5['badgeUrl'] = var12;
            var5['text'] = var11;
            var5 = var10.bind(var8)(var5);
 2228:
            var5 = {};
            var5['imageUrl'] = var9;
            var9 = var4.extra;
            var9 = var9.game_name;
            var5['title'] = var9;
            var5['subtitles'] = var8;
            var5['gradientColors'] = var6;
            var2 = var5;
 2264:
            var3 = var2;
 2267:
            var6 = _closure1_slot6;
            var5 = var6.getUser;
            var2 = var4.author_id;
            var12 = var5.bind(var6)(var2);
            var5 = null;
            var6 = var5 == var12;
            var2 = undefined;
            if(var6) { _fun0002_ip = 2436; continue _fun0002 }
 2302:
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 6;
            var6 = var10[var6];
            var8 = var8.bind(var1)(var6);
            var6 = var8.getName;
            var8 = var6.bind(var8)(var1, var1, var12);
            var6 = {};
            var9 = var4.author_id;
            var6['authorId'] = var9;
            var9 = _closure1_slot0;
            var7 = 7;
            var7 = var10[var7];
            var10 = var9.bind(var1)(var7);
            var9 = var10.ensureAvatarSource;
            var11 = var12.getAvatarSource;
            var7 = 80;
            var7 = var11.bind(var12)(var5, var1, var7);
            var9 = var9.bind(var10)(var7);
            var10 = var5 == var9;
            var7 = undefined;
            if(var10) { _fun0002_ip = 2405; continue _fun0002 }
 2400:
            var7 = var9.uri;
 2405:
            var6['avatarUrl'] = var7;
            var6['userActionDescription'] = var8;
            var7 = {};
            var7['ariaDescription'] = var8;
            var6['userClickable'] = var7;
            var2 = var6;
 2436:
            if(!(var5 != var3)) { _fun0002_ip = 2444; continue _fun0002 }
 2440:
            if(!(var5 == var2)) { _fun0002_ip = 2446; continue _fun0002 }
 2444:
            return var1;
 2446:
            var1 = {};
            var4 = var4.id;
            var1['contentId'] = var4;
            var22 = var1;
            var21 = var3;
            var3 = copyDataProperties(var22, var21);
            var22 = var1;
            var21 = var2;
            var2 = copyDataProperties(var22, var21);
            return var1;
        }
    };
    var3['transformToRowGeneratedContentInventoryEntryComponent'] = var2;
    return var1;
})();