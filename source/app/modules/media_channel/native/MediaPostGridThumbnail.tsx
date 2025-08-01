// app/modules/media_channel/native/MediaPostGridThumbnail.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function MediaPostGridThumbnailAndroid(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var10 = var2.shouldSpoiler;
            var9 = var2.blurTheme;
            var6 = var2.source;
            var7 = var2.androidStyle;
            var1 = var2.backgroundImagesource;
            var14 = var2.resizeMode;
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 223; continue _fun0001 }
 47:
            var4 = _closure1_slot6;
            var3 = _closure1_slot3;
            var2 = {};
            var2['style'] = var7;
            var2['source'] = var1;
            var1 = 'cover';
            var2['resizeMode'] = var1;
            var1 = {};
            var5 = 0.2;
            var1['opacity'] = var5;
            var2['imageStyle'] = var1;
            var12 = _closure1_slot5;
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 4;
            var5 = var13[var1];
            var1 = undefined;
            var11 = var11.bind(var1)(var5);
            var5 = {};
            var15 = _closure1_slot4;
            var15 = var15.absoluteFill;
            var5['style'] = var15;
            var5['source'] = var6;
            var5['resizeMode'] = var14;
            var11 = var12.bind(var1)(var11, var5);
            var5 = new Array(2);
            var5[0] = var11;
            var12 = _closure1_slot5;
            var11 = _closure1_slot0;
            var8 = 3;
            var8 = var13[var8];
            var8 = var11.bind(var1)(var8);
            var11 = var8.ForumPostMediaSpoiler;
            var8 = {};
            var8['shouldSpoiler'] = var10;
            var8['blurTheme'] = var9;
            var8 = var12.bind(var1)(var11, var8);
            var5[1] = var8;
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            _fun0001_ip = 326; continue _fun0001;
 223:
            var5 = _closure1_slot5;
            var4 = _closure1_slot3;
            var3 = {};
            var3['style'] = var7;
            var3['source'] = var6;
            var6 = 0;
            if(!var10) { _fun0001_ip = 252; continue _fun0001 }
 249:
            var6 = 10;
 252:
            var3['blurRadius'] = var6;
            var6 = 'cover';
            var3['resizeMode'] = var6;
            var8 = _closure1_slot5;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 3;
            var6 = var6[var2];
            var2 = undefined;
            var6 = var7.bind(var2)(var6);
            var7 = var6.ForumPostMediaSpoiler;
            var6 = {};
            var6['shouldSpoiler'] = var10;
            var6['blurTheme'] = var9;
            var6 = var8.bind(var2)(var7, var6);
            var3['children'] = var6;
            var1 = var5.bind(var2)(var4, var3);
 326:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function MediaPostGridThumbnailIOS(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var11 = var1.shouldSpoiler;
            var10 = var1.blurTheme;
            var14 = var1.source;
            var15 = var1.iosStyle;
            var17 = var1.backgroundImagesource;
            var13 = var1.resizeMode;
            var4 = _closure1_slot6;
            var3 = _closure1_slot7;
            var1 = null;
            if(!(var1 != var17)) { _fun0002_ip = 249; continue _fun0002 }
 58:
            var2 = {};
            var16 = _closure1_slot5;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var5 = 4;
            var1 = var12[var5];
            var9 = undefined;
            var8 = var7.bind(var9)(var1);
            var1 = {};
            var18 = _closure1_slot4;
            var19 = var18.absoluteFill;
            var18 = new Array(2);
            var18[0] = var19;
            var19 = {};
            var20 = 0.2;
            var19['opacity'] = var20;
            var18[1] = var19;
            var1['style'] = var18;
            var1['source'] = var17;
            var17 = 'cover';
            var1['resizeMode'] = var17;
            var8 = var16.bind(var9)(var8, var1);
            var1 = new Array(3);
            var1[0] = var8;
            var8 = _closure1_slot5;
            var5 = var12[var5];
            var7 = var7.bind(var9)(var5);
            var5 = {};
            var5['style'] = var15;
            var5['source'] = var14;
            var5['resizeMode'] = var13;
            var5 = var8.bind(var9)(var7, var5);
            var1[1] = var5;
            var8 = _closure1_slot5;
            var7 = _closure1_slot0;
            var5 = 3;
            var5 = var12[var5];
            var5 = var7.bind(var9)(var5);
            var7 = var5.ForumPostMediaSpoiler;
            var5 = {};
            var5['shouldSpoiler'] = var11;
            var5['blurTheme'] = var10;
            var5 = var8.bind(var9)(var7, var5);
            var1[2] = var5;
            var2['children'] = var1;
            _fun0002_ip = 361; continue _fun0002;
 249:
            var1 = {};
            var8 = _closure1_slot5;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var5 = 4;
            var5 = var12[var5];
            var9 = undefined;
            var7 = var7.bind(var9)(var5);
            var5 = {};
            var5['style'] = var15;
            var5['source'] = var14;
            var5['resizeMode'] = var13;
            var7 = var8.bind(var9)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot0;
            var6 = 3;
            var6 = var12[var6];
            var6 = var7.bind(var9)(var6);
            var7 = var6.ForumPostMediaSpoiler;
            var6 = {};
            var6['shouldSpoiler'] = var11;
            var6['blurTheme'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var2 = var1;
 361:
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ImageBackground;
    var _closure1_slot3 = var7;
    var4 = var4.StyleSheet;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var7 = var4.jsxs;
    var _closure1_slot6 = var7;
    var4 = var4.Fragment;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_channel/native/MediaPostGridThumbnail.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MediaPostGridThumbnail(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var3 = var1.isPortrait;
            var2 = true;
            var4 = var2 === var3;
            if(!var4) { _fun0003_ip = 30; continue _fun0003 }
 18:
            var3 = var1.shouldSpoiler;
            var2 = false;
            var4 = var2 === var3;
 30:
            var5 = undefined;
            var2 = 'cover';
            var3 = undefined;
            if(!var4) { _fun0003_ip = 50; continue _fun0003 }
 41:
            var3 = var1.source;
            var2 = 'contain';
 50:
            var6 = {};
            var9 = var6;
            var8 = var1;
            var1 = copyDataProperties(var9, var8);
            var1 = 'backgroundImagesource';
            var6[var1] = var3;
            var1 = 'resizeMode';
            var6[var1] = var2;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            var4 = _closure1_slot5;
            if(var1) { _fun0003_ip = 143; continue _fun0003 }
 119:
            var3 = _closure1_slot9;
            var1 = {};
            var9 = var1;
            var8 = var6;
            var7 = copyDataProperties(var9, var8);
            var1 = var4.bind(var5)(var3, var1);
            _fun0003_ip = 165; continue _fun0003;
 143:
            var3 = _closure1_slot8;
            var2 = {};
            var9 = var2;
            var8 = var6;
            var6 = copyDataProperties(var9, var8);
            var1 = var4.bind(var5)(var3, var2);
 165:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();