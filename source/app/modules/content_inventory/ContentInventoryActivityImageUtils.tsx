// app/modules/content_inventory/ContentInventoryActivityImageUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function getApplicationImage(arg1) {
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
            var4 = _closure1_slot7;
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
            var2 = 6;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.tiKyYg;
            var2 = {};
            var2['applicationName'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 6;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3["2B/phM"];
            var2 = var4.bind(var5)(var3);
case 10:
            var1['alt'] = var2;
            return var1;
        }
    };
    var _closure1_slot8 = var5;
    var1 = function useComputedImagesForActivity(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var1 = _closure1_slot11;
            var5 = undefined;
            var2 = var1.bind(var5)(var4, var3);
            var1 = {};
            var1['activity'] = var4;
            var1['application'] = var3;
            var3 = var2.largeImage;
            var1['largeImage'] = var3;
            var2 = var2.smallImage;
            var1['smallImage'] = var2;
            var12 = var1.activity;
            var2 = var1.application;
            var4 = var1.largeImage;
            var3 = var1.smallImage;
            var6 = null;
            if(!(var6 == var4)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var7 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 9;
            var1 = var1[var8];
            var7 = var7.bind(var5)(var1);
            var1 = var7.isStageActivity;
            var1 = var1.bind(var7)(var12);
            if(var1) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            if(!(var6 == var4)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 11;
            var1 = var9[var1];
            var1 = var7.bind(var5)(var1);
            var1 = var1.bind(var5)(var12);
            if(var1) { _fun0002_ip = 17; continue _fun0002 }
case 15:
            if(!(var6 == var4)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            if(!(var6 == var3)) { _fun0002_ip = 18; continue _fun0002 }
case 20:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 13;
            var1 = var9[var1];
            var1 = var7.bind(var5)(var1);
            var1 = var1.bind(var5)(var12);
            if(var1) { _fun0002_ip = 21; continue _fun0002 }
case 18:
            var1 = _closure1_slot8;
            var7 = var1.bind(var5)(var2);
            if(!(var6 == var7)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var1 = {};
            var1['largeImage'] = var3;
            var1['smallImage'] = var5;
            _fun0002_ip = 24; continue _fun0002;
case 22:
            var2 = {};
            var2['largeImage'] = var7;
            var2['smallImage'] = var3;
            var1 = var2;
            _fun0002_ip = 24; continue _fun0002;
case 21:
            var2 = {};
            var7 = {};
            var11 = _closure1_slot1;
            var15 = _closure1_slot2;
            var9 = 12;
            var9 = var15[var9];
            var13 = var11.bind(var5)(var9);
            var11 = var13.get;
            var9 = _closure1_slot6;
            var9 = var9.PLAYSTATION;
            var9 = var11.bind(var13)(var9);
            var9 = var9.icon;
            var9 = var9.lightPNG;
            var7['src'] = var9;
            var14 = _closure1_slot0;
            var9 = 6;
            var11 = var15[var9];
            var11 = var14.bind(var5)(var11);
            var13 = var11.intl;
            var11 = var13.string;
            var9 = var15[var9];
            var9 = var14.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.fFl4jo;
            var9 = var11.bind(var13)(var9);
            var7['alt'] = var9;
            var2['largeImage'] = var7;
            var2['smallImage'] = var5;
            var1 = var2;
            _fun0002_ip = 24; continue _fun0002;
case 17:
            var2 = {};
            var7 = {};
            var11 = _closure1_slot1;
            var15 = _closure1_slot2;
            var9 = 12;
            var9 = var15[var9];
            var13 = var11.bind(var5)(var9);
            var11 = var13.get;
            var9 = _closure1_slot6;
            var9 = var9.XBOX;
            var9 = var11.bind(var13)(var9);
            var9 = var9.icon;
            var9 = var9.customPNG;
            var7['src'] = var9;
            var14 = _closure1_slot0;
            var9 = 6;
            var11 = var15[var9];
            var11 = var14.bind(var5)(var11);
            var13 = var11.intl;
            var11 = var13.string;
            var9 = var15[var9];
            var9 = var14.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.Nfvo72;
            var9 = var11.bind(var13)(var9);
            var7['alt'] = var9;
            var2['largeImage'] = var7;
            var2['smallImage'] = var5;
            var1 = var2;
            _fun0002_ip = 24; continue _fun0002;
case 13:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var7 = var7.bind(var5)(var2);
            var2 = var7.unpackStageChannelParty;
            var11 = var2.bind(var7)(var12);
            var2 = var6 != var11;
            var8 = undefined;
            if(!var2) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 10;
            var2 = var9[var2];
            var9 = var7.bind(var5)(var2);
            var7 = var9.getGuildIconURL;
            var2 = {};
            var11 = var11.guildId;
            var2['id'] = var11;
            var13 = var6 == var12;
            var11 = undefined;
            if(var13) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var12 = var12.assets;
            var13 = var6 == var12;
            var11 = undefined;
            if(var13) { _fun0002_ip = 27; continue _fun0002 }
case 29:
            var11 = var12.small_image;
case 27:
            var2['icon'] = var11;
            var10 = _closure1_slot7;
            var10 = var10.SMALL;
            var2['size'] = var10;
            var8 = var7.bind(var9)(var2);
case 25:
            var2 = {};
            var7 = var6 != var8;
            var6 = undefined;
            if(!var7) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var7 = {};
            var7['src'] = var8;
            var6 = var7;
case 30:
            var2['largeImage'] = var6;
            var2['smallImage'] = var5;
            var1 = var2;
            _fun0002_ip = 24; continue _fun0002;
case 11:
            var2 = {};
            var2['largeImage'] = var4;
            var2['smallImage'] = var3;
            var1 = var2;
case 24:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function useTrackActivityDefaultIcon(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var13 = var1.activity;
            var7 = var1.application;
            var5 = var1.largeImageSrc;
            var14 = var1.trackingSource;
            var _closure2_slot0 = var14;
            var1 = undefined;
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var1;
            var _closure2_slot3 = var1;
            var _closure2_slot4 = var1;
            var _closure2_slot5 = var1;
            var _closure2_slot6 = var1;
            var _closure2_slot7 = var1;
            var _closure2_slot8 = var1;
            var _closure2_slot9 = var1;
            var4 = null;
            var3 = var4 == var13;
            var9 = undefined;
            if(var3) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var9 = var13.application_id;
case 32:
            _closure2_slot1 = var9;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 14;
            var6 = var11[var6];
            var8 = var10.bind(var1)(var6);
            var6 = var8.useGetOrFetchApplication;
            var6 = var6.bind(var8)(var9);
            var8 = 15;
            var8 = var11[var8];
            var12 = var10.bind(var1)(var8);
            var11 = var12.useStateFromStores;
            var8 = _closure1_slot4;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0004_ip = 34; continue _fun0004 }
case 3:
                    var4 = _closure1_slot4;
                    var3 = var4.didFetchingApplicationFail;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 34:
                    return var1;
                }
            };
            var8 = var11.bind(var12)(var10, var8);
            var12 = var4 == var9;
            var10 = var9;
            if(var12) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var12 = var4 != var6;
case 35:
            if(var12) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var12 = var8;
case 37:
            _closure2_slot2 = var12;
            var6 = var4 != var6;
            if(var6) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var6 = var4 != var7;
case 39:
            _closure2_slot3 = var6;
            var11 = var4 == var5;
            _closure2_slot4 = var11;
            var5 = var4 == var13;
            var9 = undefined;
            if(var5) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var9 = var13.name;
case 41:
            _closure2_slot5 = var9;
            var5 = var4 == var13;
            var8 = undefined;
            if(var5) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var8 = var13.type;
case 43:
            _closure2_slot6 = var8;
            var5 = var4 == var13;
            var7 = undefined;
            if(var5) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var7 = var13.session_id;
case 45:
            _closure2_slot7 = var7;
            var15 = var4 == var13;
            var5 = undefined;
            if(var15) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var15 = var13.assets;
            var16 = var4 == var15;
            var5 = undefined;
            if(var16) { _fun0003_ip = 47; continue _fun0003 }
case 49:
            var5 = var15.large_image;
case 47:
            var5 = var4 != var5;
            if(var5) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var16 = var4 == var13;
            var15 = undefined;
            if(var16) { _fun0003_ip = 52; continue _fun0003 }
case 53:
            var16 = var13.assets;
            var17 = var4 == var16;
            var15 = undefined;
            if(var17) { _fun0003_ip = 52; continue _fun0003 }
case 54:
            var15 = var16.small_image;
case 52:
            var5 = var4 != var15;
case 50:
            _closure2_slot8 = var5;
            var13 = var4 != var13;
            _closure2_slot9 = var13;
            var4 = _closure1_slot3;
            var3 = new Array(10);
            var3[0] = var14;
            var3[1] = var13;
            var3[2] = var12;
            var3[3] = var11;
            var3[4] = var10;
            var3[5] = var9;
            var3[6] = var8;
            var3[7] = var7;
            var3[8] = var6;
            var3[9] = var5;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot9;
                    if(!var1) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                    var1 = _closure2_slot2;
case 55:
                    if(!var1) { _fun0005_ip = 57; continue _fun0005 }
case 58:
                    var1 = _closure2_slot4;
case 57:
                    if(!var1) { _fun0005_ip = 59; continue _fun0005 }
case 60:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 16;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.track;
                    var1 = _closure1_slot5;
                    var2 = var1.ACTIVITY_DEFAULT_ICON_SHOWN;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var1['source'] = var6;
                    var6 = _closure2_slot1;
                    var1['application_id'] = var6;
                    var6 = _closure2_slot5;
                    var1['activity_name'] = var6;
                    var6 = _closure2_slot6;
                    var1['activity_type'] = var6;
                    var6 = _closure2_slot7;
                    var1['activity_session_id'] = var6;
                    var6 = _closure2_slot3;
                    var1['application_found'] = var6;
                    var5 = _closure2_slot8;
                    var1['has_rich_assets'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 59:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var2 = function useRichImageForActivity(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var9 = arg1;
            var7 = arg2;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 14;
            var1 = var2[var1];
            var2 = undefined;
            var4 = var3.bind(var2)(var1);
            var3 = var4.useGetOrFetchApplication;
            var8 = null;
            var5 = var8 == var9;
            var1 = undefined;
            if(var5) { _fun0006_ip = 4; continue _fun0006 }
case 61:
            var1 = var9.application_id;
case 4:
            var5 = var3.bind(var4)(var1);
            if(!(var8 != var9)) { _fun0006_ip = 62; continue _fun0006 }
case 63:
            var1 = var8 == var9;
            var13 = undefined;
            if(var1) { _fun0006_ip = 64; continue _fun0006 }
case 65:
            var1 = var9.assets;
            var3 = var8 == var1;
            var13 = undefined;
            if(var3) { _fun0006_ip = 64; continue _fun0006 }
case 66:
            var13 = var1.large_image;
case 64:
            var1 = var8 != var13;
            var4 = undefined;
            if(!var1) { _fun0006_ip = 67; continue _fun0006 }
case 68:
            var1 = {};
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 5;
            var3 = var11[var3];
            var12 = var10.bind(var2)(var3);
            var11 = var12.getAssetImage;
            var10 = var9.application_id;
            var3 = _closure1_slot7;
            var14 = var3.LARGE;
            var3 = new Array(2);
            var3[0] = var14;
            var14 = _closure1_slot7;
            var14 = var14.LARGE;
            var3[1] = var14;
            var3 = var11.bind(var12)(var10, var13, var3);
            var1['src'] = var3;
            var10 = var9.assets;
            var11 = var8 == var10;
            var3 = undefined;
            if(var11) { _fun0006_ip = 69; continue _fun0006 }
case 10:
            var11 = var10.large_text;
            var10 = var8 == var11;
            var3 = undefined;
            if(var10) { _fun0006_ip = 69; continue _fun0006 }
case 70:
            var10 = var11.trim;
            var3 = var10.bind(var11)();
case 69:
            var1['text'] = var3;
            var10 = var9.assets;
            var11 = var8 == var10;
            var3 = undefined;
            if(var11) { _fun0006_ip = 71; continue _fun0006 }
case 72:
            var3 = var10.large_url;
case 71:
            var1['url'] = var3;
            var4 = var1;
case 67:
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 17;
            var1 = var10[var1];
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)(var9);
            var14 = undefined;
            if(var1) { _fun0006_ip = 73; continue _fun0006 }
case 74:
            var1 = var8 == var9;
            var14 = undefined;
            if(var1) { _fun0006_ip = 73; continue _fun0006 }
case 75:
            var1 = var9.assets;
            var3 = var8 == var1;
            var14 = undefined;
            if(var3) { _fun0006_ip = 73; continue _fun0006 }
case 76:
            var14 = var1.small_image;
case 73:
            var1 = var8 != var14;
            var3 = undefined;
            if(!var1) { _fun0006_ip = 77; continue _fun0006 }
case 54:
            var1 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 5;
            var10 = var12[var10];
            var13 = var11.bind(var2)(var10);
            var12 = var13.getAssetImage;
            var11 = var9.application_id;
            var10 = _closure1_slot7;
            var15 = var10.LARGE;
            var10 = new Array(2);
            var10[0] = var15;
            var15 = _closure1_slot7;
            var15 = var15.LARGE;
            var10[1] = var15;
            var10 = var12.bind(var13)(var11, var14, var10);
            var1['src'] = var10;
            var11 = var9.assets;
            var12 = var8 == var11;
            var10 = undefined;
            if(var12) { _fun0006_ip = 78; continue _fun0006 }
case 79:
            var12 = var11.small_text;
            var11 = var8 == var12;
            var10 = undefined;
            if(var11) { _fun0006_ip = 78; continue _fun0006 }
case 80:
            var11 = var12.trim;
            var10 = var11.bind(var12)();
case 78:
            var1['text'] = var10;
            var10 = var9.assets;
            var11 = var8 == var10;
            var9 = undefined;
            if(var11) { _fun0006_ip = 81; continue _fun0006 }
case 82:
            var9 = var10.small_url;
case 81:
            var1['url'] = var9;
            var3 = var1;
case 77:
            var1 = {};
            if(!(var8 == var4)) { _fun0006_ip = 83; continue _fun0006 }
case 84:
            var6 = _closure1_slot8;
            if(!(var8 != var7)) { _fun0006_ip = 85; continue _fun0006 }
case 86:
            var5 = var7;
case 85:
            var4 = var6.bind(var2)(var5);
case 83:
            var1['largeImage'] = var4;
            var1['smallImage'] = var3;
            return var1;
case 62:
            var1 = {};
            var1['largeImage'] = var2;
            var1['smallImage'] = var2;
            return var1;
        }
    };
    var _closure1_slot11 = var2;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var6 = var6.useEffect;
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.AnalyticEvents;
    var _closure1_slot5 = var9;
    var6 = var6.PlatformTypes;
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.ImageSizes;
    var _closure1_slot7 = var6;
    var6 = 18;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/content_inventory/ContentInventoryActivityImageUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['getApplicationImage'] = var5;
    var5 = function useImageForContentEntry(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var15 = var2.entry;
            var1 = var2.showCoverImage;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0007_ip = 87; continue _fun0007 }
case 88:
            var1 = true;
case 87:
            var5 = var2.trackingSource;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 7;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.bind(var4)(var15);
            var14 = var3.activity;
            var11 = var3.activityApplication;
            var13 = var3.fallbackApplication;
            var6 = null;
            var10 = var11;
            if(!(var6 != var13)) { _fun0007_ip = 89; continue _fun0007 }
case 12:
            var10 = var13;
case 89:
            var3 = _closure1_slot11;
            var3 = var3.bind(var4)(var14, var11);
            var9 = var3.largeImage;
            var8 = var3.smallImage;
            var3 = _closure1_slot9;
            var3 = var3.bind(var4)(var14, var10);
            var7 = var3.largeImage;
            var3 = var6 == var10;
            var12 = undefined;
            if(var3) { _fun0007_ip = 90; continue _fun0007 }
case 91:
            var3 = var10.getCanonicalGameId;
            var12 = var3.bind(var10)();
case 90:
            var10 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = 8;
            var3 = var16[var3];
            var10 = var10.bind(var4)(var3);
            var3 = var10.useGame;
            var3 = var3.bind(var10)(var12);
            var10 = var3.data;
            var3 = var6 == var10;
            var12 = undefined;
            if(var3) { _fun0007_ip = 10; continue _fun0007 }
case 92:
            var3 = var10.getCoverURL;
            var12 = var3.bind(var10)();
case 10:
            var16 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 4;
            var10 = var10[var3];
            var16 = var16.bind(var4)(var10);
            var10 = var16.isListenedSessionEntry;
            var10 = var10.bind(var16)(var15);
            if(!var10) { _fun0007_ip = 93; continue _fun0007 }
case 94:
            var10 = var15.extra;
            var10 = var10.entries;
            var10 = var10.length;
            var16 = 0;
            if(!(!(var10 > var16))) { _fun0007_ip = 95; continue _fun0007 }
case 93:
            var17 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var3];
            var17 = var17.bind(var4)(var10);
            var10 = var17.isWatchedMediaEntry;
            var10 = var10.bind(var17)(var15);
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            if(var10) { _fun0007_ip = 96; continue _fun0007 }
case 97:
            var3 = var19[var3];
            var10 = var18.bind(var4)(var3);
            var3 = var10.isTopArtistEntry;
            var3 = var3.bind(var10)(var15);
            var10 = undefined;
            if(!var3) { _fun0007_ip = 98; continue _fun0007 }
case 99:
            var3 = {};
            var17 = var15.extra;
            var17 = var17.media;
            var17 = var17.image_url;
            var3['src'] = var17;
            var10 = var3;
case 98:
            _fun0007_ip = 100; continue _fun0007;
case 96:
            var3 = {};
            var17 = 5;
            var17 = var19[var17];
            var21 = var18.bind(var4)(var17);
            var20 = var21.getAssetImage;
            var17 = var15.extra;
            var19 = var17.application_id;
            var17 = var15.extra;
            var18 = var17.media_assets_large_image;
            var17 = _closure1_slot7;
            var17 = var17.LARGE;
            var17 = var20.bind(var21)(var19, var18, var17);
            var3['src'] = var17;
            var17 = var15.extra;
            var17 = var17.media_title;
            var3['alt'] = var17;
            var10 = var3;
case 100:
            _fun0007_ip = 101; continue _fun0007;
case 95:
            var3 = {};
            var15 = var15.extra;
            var15 = var15.entries;
            var15 = var15[var16];
            var15 = var15.media;
            var15 = var15.image_url;
            var3['src'] = var15;
            var10 = var3;
case 101:
            var3 = _closure1_slot10;
            var2 = {};
            var2['activity'] = var14;
            if(!(var6 != var13)) { _fun0007_ip = 102; continue _fun0007 }
case 103:
            var11 = var13;
case 102:
            var2['application'] = var11;
            if(!(var6 == var9)) { _fun0007_ip = 104; continue _fun0007 }
case 105:
            if(!(var6 == var10)) { _fun0007_ip = 106; continue _fun0007 }
case 107:
            if(!(var6 != var12)) { _fun0007_ip = 108; continue _fun0007 }
case 109:
            if(var1) { _fun0007_ip = 110; continue _fun0007 }
case 108:
            var1 = {};
            var1['largeImage'] = var7;
            var1['smallImage'] = var4;
            _fun0007_ip = 111; continue _fun0007;
case 110:
            var7 = {};
            var11 = {};
            var11['src'] = var12;
            var7['largeImage'] = var11;
            var7['smallImage'] = var4;
            var1 = var7;
case 111:
            _fun0007_ip = 112; continue _fun0007;
case 106:
            var7 = {};
            var7['largeImage'] = var10;
            var7['smallImage'] = var4;
            var1 = var7;
case 112:
            _fun0007_ip = 113; continue _fun0007;
case 104:
            var7 = {};
            var7['largeImage'] = var9;
            var7['smallImage'] = var8;
            var1 = var7;
case 113:
            var7 = var1.largeImage;
            var8 = var6 == var7;
            var6 = undefined;
            if(var8) { _fun0007_ip = 114; continue _fun0007 }
case 115:
            var6 = var7.src;
case 114:
            var2['largeImageSrc'] = var6;
            var2['trackingSource'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['useImageForContentEntry'] = var5;
    var4 = function useImageForActivity(arg1, arg2, arg3) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var1 = _closure1_slot9;
            var4 = undefined;
            var1 = var1.bind(var4)(var6, var5);
            var3 = _closure1_slot10;
            var2 = {};
            var2['activity'] = var6;
            var2['application'] = var5;
            var6 = var1.largeImage;
            var5 = null;
            var7 = var5 == var6;
            var5 = undefined;
            if(var7) { _fun0008_ip = 116; continue _fun0008 }
case 117:
            var5 = var6.src;
case 116:
            var2['largeImageSrc'] = var5;
            var5 = arg3;
            var2['trackingSource'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['useImageForActivity'] = var4;
    var3['useRichImageForActivity'] = var2;
    return var1;
})();