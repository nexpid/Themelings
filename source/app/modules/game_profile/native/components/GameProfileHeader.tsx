// app/modules/game_profile/native/components/GameProfileHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var7 = var6[var10];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.Image;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 5;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var9['backgroundColor'] = var13;
    var4['container'] = var9;
    var9 = {'width': '100%', 'position': 'absolute', 'top': 0, 'bottom': null, 'left': 0, 'right': 0};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_80;
    var13 = -var13;
    var9['bottom'] = var13;
    var4['artHero'] = var9;
    var9 = {'height': '100%', 'width': '100%', 'resizeMode': 'cover'};
    var4['artHeroImage'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
    var4['artHeroGradient'] = var9;
    var9 = {'paddingTop': null, 'paddingHorizontal': null, 'gap': null, 'flexDirection': 'row', 'alignItems': 'flex-end', 'maxWidth': 520, 'alignSelf': 'center', 'width': '100%'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_32;
    var9['paddingTop'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['paddingHorizontal'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9['gap'] = var13;
    var4['headerContent'] = var9;
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.shadows;
    var15 = var13.SHADOW_LOW;
    var16 = var9;
    var13 = copyDataProperties(var16, var15);
    var4['shadowContainer'] = var9;
    var9 = {'width': 85, 'height': 114, 'borderRadius': null, 'backgroundColor': null, 'overflow': 'hidden'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var13;
    var4['coverContainer'] = var9;
    var9 = {'width': 85, 'height': 85, 'borderRadius': null, 'backgroundColor': null, 'overflow': 'hidden'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var13;
    var4['iconContainer'] = var9;
    var9 = {'width': '100%', 'height': '100%'};
    var4['image'] = var9;
    var9 = {'flex': 1, 'flexDirection': 'column', 'alignItems': 'flex-start'};
    var4['titleContainer'] = var9;
    var9 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BLACK;
    var9['textShadowColor'] = var11;
    var11 = {'width': 0, 'height': 0};
    var9['textShadowOffset'] = var11;
    var9['textShadowRadius'] = var10;
    var4['textShadow'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function GameProfileHeaderTsx1(){const{effectiveScrollY}=this.__closure;return{top:-Math.max(0,-effectiveScrollY.get())};}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/native/components/GameProfileHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GameProfileHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = var3.application;
            var _closure2_slot0 = var2;
            var10 = var3.game;
            var _closure2_slot1 = var10;
            var5 = var3.scrollY;
            var6 = var3.onHeightMeasured;
            var _closure2_slot2 = var6;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var3 = _closure1_slot9;
            var19 = var3.bind(var4)();
            var8 = _closure1_slot4;
            var7 = var8.useState;
            var3 = function() {
                var1 = global;
                var2 = var1.Math;
                var1 = var2.random;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var7.bind(var8)(var3);
            var7 = _closure1_slot3;
            var3 = 1;
            var3 = var7.bind(var4)(var8, var3);
            var11 = 0;
            var3 = var3[var11];
            var _closure2_slot3 = var3;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 6;
            var8 = var8[var7];
            var9 = var9.bind(var4)(var8);
            var8 = var9.useSharedValue;
            var12 = var8.bind(var9)(var11);
            var17 = null;
            if(!(var17 != var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = var5;
case 2:
            _closure2_slot4 = var12;
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var9 = var8.bind(var4)(var5);
            var8 = var9.useAnimatedStyle;
            var5 = function _() {
                var1 = {};
                var2 = global;
                var5 = var2.Math;
                var4 = var5.max;
                var3 = _closure2_slot4;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var3 = -var2;
                var2 = 0;
                var2 = var4.bind(var5)(var2, var3);
                var2 = -var2;
                var1['top'] = var2;
                return var1;
            };
            var11 = {};
            var11['effectiveScrollY'] = var12;
            var5['__closure'] = var11;
            var11 = 1177397229282.0;
            var5['__workletHash'] = var11;
            var11 = _closure1_slot10;
            var5['__initData'] = var11;
            var8 = var8.bind(var9)(var5);
            var5 = var17 == var10;
            var22 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var22 = var10.name;
case 4:
            if(!(var17 == var22)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = var17 == var2;
            var5 = undefined;
            if(var9) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var2.name;
case 8:
            var22 = var5;
case 6:
            var5 = var17 == var10;
            var18 = undefined;
            if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var11 = var10.genres;
            var9 = var11.map;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 7;
            var5 = var13[var5];
            var5 = var12.bind(var4)(var5);
            var5 = var5.getGenreText;
            var11 = var9.bind(var11)(var5);
            var9 = var11.join;
            var5 = ', ';
            var18 = var9.bind(var11)(var5);
case 10:
            var5 = var17 == var10;
            var21 = undefined;
            if(var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var21 = var10.l30Rank;
case 12:
            var5 = _closure1_slot4;
            var11 = var5.useMemo;
            var12 = var2.id;
            var9 = new Array(3);
            var9[0] = var12;
            var9[1] = var10;
            var9[2] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var3 = null;
                    var2 = var3 == var1;
                    var4 = undefined;
                    var1 = undefined;
                    if(var2) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var2 = _closure2_slot1;
                    var1 = var2.bannerHash;
case 14:
                    if(!(var3 == var1)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var1 = _closure2_slot1;
                    var2 = var3 == var1;
                    var1 = undefined;
                    if(var2) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var2 = _closure2_slot1;
                    var1 = var2.screenshotUrls;
case 18:
                    var2 = var3 != var1;
                    var1 = null;
                    if(!var2) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var2 = _closure2_slot1;
                    var2 = var2.screenshotUrls;
                    var6 = var2.length;
                    var2 = 0;
                    var2 = var6 > var2;
                    var1 = null;
                    if(!var2) { _fun0002_ip = 20; continue _fun0002 }
case 22:
                    var2 = _closure2_slot1;
                    var3 = var2.screenshotUrls;
                    var6 = global;
                    var7 = var6.Math;
                    var6 = var7.floor;
                    var8 = _closure2_slot3;
                    var2 = var2.screenshotUrls;
                    var2 = var2.length;
                    var2 = var8 * var2;
                    var2 = var6.bind(var7)(var2);
                    var1 = var3[var2];
case 20:
                    _fun0002_ip = 23; continue _fun0002;
case 16:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 8;
                    var2 = var6[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.getGameAssetURL;
                    var2 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.id;
                    var2['id'] = var6;
                    var5 = _closure2_slot1;
                    var5 = var5.bannerHash;
                    var2['hash'] = var5;
                    var5 = 1024;
                    var2['size'] = var5;
                    var5 = true;
                    var2['keepAspectRatio'] = var5;
                    var1 = var3.bind(var4)(var2);
case 23:
                    return var1;
                }
            };
            var12 = var11.bind(var5)(var3, var9);
            var11 = var5.useMemo;
            var9 = new Array(1);
            var9[0] = var10;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    if(var3) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var3 = _closure2_slot1;
                    var2 = var3.getCoverURL;
                    var1 = var2.bind(var3)();
case 24:
                    return var1;
                }
            };
            var23 = var11.bind(var5)(var3, var9);
            var9 = var5.useMemo;
            var3 = new Array(2);
            var3[0] = var10;
            var3[1] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var2 = null;
                    var3 = var2 == var1;
                    var7 = undefined;
                    var1 = undefined;
                    if(var3) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var3 = _closure2_slot1;
                    var1 = var3.iconHash;
case 14:
                    if(!(var2 != var1)) { _fun0004_ip = 26; continue _fun0004 }
case 17:
                    var1 = _closure2_slot1;
                    var3 = var1.iconHash;
                    var1 = '';
                    if(!(var1 === var3)) { _fun0004_ip = 27; continue _fun0004 }
case 26:
                    var1 = _closure2_slot0;
                    var2 = var2 == var1;
                    var1 = undefined;
                    if(var2) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var5 = _closure2_slot0;
                    var4 = var5.getIconURL;
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 8;
                    var2 = var6[var2];
                    var2 = var3.bind(var7)(var2);
                    var2 = var2.SUPPORTS_WEBP;
                    var3 = 'png';
                    if(!var2) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var3 = 'webp';
case 30:
                    var2 = 114;
                    var1 = var4.bind(var5)(var2, var3);
case 28:
                    _fun0004_ip = 5; continue _fun0004;
case 27:
                    var3 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 8;
                    var2 = var8[var5];
                    var4 = var3.bind(var7)(var2);
                    var3 = var4.getGameAssetURL;
                    var2 = {};
                    var9 = _closure2_slot1;
                    var10 = var9.id;
                    var2['id'] = var10;
                    var9 = var9.iconHash;
                    var2['hash'] = var9;
                    var9 = 114;
                    var2['size'] = var9;
                    var6 = _closure1_slot0;
                    var5 = var8[var5];
                    var5 = var6.bind(var7)(var5);
                    var6 = var5.SUPPORTS_WEBP;
                    var5 = 'png';
                    if(!var6) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                    var5 = 'webp';
case 32:
                    var2['format'] = var5;
                    var1 = var3.bind(var4)(var2);
case 5:
                    return var1;
                }
            };
            var24 = var9.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                    var3 = _closure2_slot2;
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var2 = var1.height;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 34:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var6 = var19.container;
            var1['style'] = var6;
            var1['onLayout'] = var5;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var6.bind(var4)(var5);
            var6 = var5.View;
            var5 = {};
            var9 = var19.artHero;
            var7 = new Array(2);
            var7[0] = var9;
            var7[1] = var8;
            var5['style'] = var7;
            var8 = var17 != var12;
            if(!var8) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var10 = _closure1_slot7;
            var9 = _closure1_slot6;
            var7 = {};
            var11 = {};
            var11['uri'] = var12;
            var7['source'] = var11;
            var11 = var19.artHeroImage;
            var7['style'] = var11;
            var8 = var10.bind(var4)(var9, var7);
case 36:
            var7 = new Array(2);
            var7[0] = var8;
            var10 = _closure1_slot7;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 9;
            var8 = var11[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var11 = var19.container;
            var12 = var11.backgroundColor;
            var11 = ['rgba(0,0,0,0.3)'];
            var11[1] = var12;
            var8['colors'] = var11;
            var11 = var19.artHeroGradient;
            var8['style'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var7[1] = var8;
            var5['children'] = var7;
            var6 = var3.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot8;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = var19.headerContent;
            var6['style'] = var9;
            var9 = {};
            var11 = var19.shadowContainer;
            var9['style'] = var11;
            if(!(var17 == var23)) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var11 = {};
            var12 = var19.iconContainer;
            var11['style'] = var12;
            var12 = var17 != var24;
            if(!var12) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var16 = _closure1_slot7;
            var14 = _closure1_slot6;
            var13 = {};
            var20 = {};
            var20['uri'] = var24;
            var13['source'] = var20;
            var20 = var19.image;
            var13['style'] = var20;
            var12 = var16.bind(var4)(var14, var13);
case 40:
            var11['children'] = var12;
            _fun0001_ip = 42; continue _fun0001;
case 38:
            var12 = {};
            var13 = var19.coverContainer;
            var12['style'] = var13;
            var16 = _closure1_slot7;
            var14 = _closure1_slot6;
            var13 = {};
            var20 = {};
            var20['uri'] = var23;
            var13['source'] = var20;
            var20 = var19.image;
            var13['style'] = var20;
            var13 = var16.bind(var4)(var14, var13);
            var12['children'] = var13;
            var11 = var12;
case 42:
            var11 = var10.bind(var4)(var7, var11);
            var9['children'] = var11;
            var10 = var10.bind(var4)(var7, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot8;
            var11 = _closure1_slot5;
            var10 = {};
            var13 = var19.titleContainer;
            var10['style'] = var13;
            var14 = var17 != var21;
            if(!var14) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var20 = _closure1_slot7;
            var16 = _closure1_slot1;
            var23 = _closure1_slot2;
            var13 = 10;
            var13 = var23[var13];
            var16 = var16.bind(var4)(var13);
            var13 = {};
            var13['rank'] = var21;
            var14 = var20.bind(var4)(var16, var13);
case 43:
            var13 = new Array(3);
            var13[0] = var14;
            var21 = _closure1_slot7;
            var16 = _closure1_slot0;
            var14 = _closure1_slot2;
            var20 = 11;
            var14 = var14[var20];
            var14 = var16.bind(var4)(var14);
            var16 = var14.Text;
            var14 = {'variant': 'heading-xxl/semibold', 'color': 'text-overlay-light', 'lineClamp': 2};
            var23 = var19.textShadow;
            var14['style'] = var23;
            var14['children'] = var22;
            var14 = var21.bind(var4)(var16, var14);
            var13[1] = var14;
            var16 = var17 != var18;
            var14 = null;
            if(!var16) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var16 = '';
            var14 = null;
            if(!(var16 !== var18)) { _fun0001_ip = 45; continue _fun0001 }
case 47:
            var17 = _closure1_slot7;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var20];
            var15 = var16.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'text-md/normal', 'color': 'text-overlay-light', 'lineClamp': 2};
            var19 = var19.textShadow;
            var15['style'] = var19;
            var15['children'] = var18;
            var14 = var17.bind(var4)(var16, var15);
case 45:
            var13[2] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();