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
    var13 = var13.BACKGROUND_BASE_LOW;
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
    var4['iconContainer'] = var9;
    var9 = {'width': '100%', 'height': '100%'};
    var4['icon'] = var9;
    var9 = {'flex': 1, 'flexDirection': 'column'};
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
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/native/components/GameProfileHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GameProfileHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var6 = var2.application;
            var9 = var2.supplementalGameData;
            var _closure2_slot0 = var9;
            var2 = var2.scrollY;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var3 = _closure1_slot9;
            var19 = var3.bind(var4)();
            var7 = _closure1_slot4;
            var5 = var7.useState;
            var3 = function() {
                var1 = global;
                var2 = var1.Math;
                var1 = var2.random;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var5.bind(var7)(var3);
            var5 = _closure1_slot3;
            var3 = 1;
            var3 = var5.bind(var4)(var7, var3);
            var8 = 0;
            var10 = var3[var8];
            var _closure2_slot1 = var10;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 6;
            var3 = var3[var7];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useSharedValue;
            var11 = var3.bind(var5)(var8);
            var17 = null;
            if(!(var17 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = var2;
case 2:
            _closure2_slot2 = var11;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useAnimatedStyle;
            var2 = function w() {
                var1 = {};
                var2 = global;
                var5 = var2.Math;
                var4 = var5.max;
                var3 = _closure2_slot2;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var3 = -var2;
                var2 = 0;
                var2 = var4.bind(var5)(var2, var3);
                var2 = -var2;
                var1['top'] = var2;
                return var1;
            };
            var8 = {};
            var8['effectiveScrollY'] = var11;
            var2['__closure'] = var8;
            var8 = 1177397229282.0;
            var2['__workletHash'] = var8;
            var8 = _closure1_slot10;
            var2['__initData'] = var8;
            var8 = var3.bind(var5)(var2);
            var2 = var17 == var9;
            var21 = undefined;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var21 = var9.name;
case 4:
            if(!(var17 == var21)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var17 == var6;
            var2 = undefined;
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var6.name;
case 8:
            var21 = var2;
case 6:
            var2 = var17 == var9;
            var18 = undefined;
            if(var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var9.genres;
            var3 = var5.map;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 7;
            var2 = var12[var2];
            var2 = var11.bind(var4)(var2);
            var2 = var2.getGenreText;
            var5 = var3.bind(var5)(var2);
            var3 = var5.join;
            var2 = ', ';
            var18 = var3.bind(var5)(var2);
case 10:
            var5 = _closure1_slot4;
            var3 = var5.useMemo;
            var2 = new Array(2);
            var2[0] = var9;
            var2[1] = var10;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var2 = _closure2_slot0;
                    var4 = var2.artwork;
                    var6 = var2.screenshots;
                    var2 = var4.length;
                    var5 = 0;
                    if(!(!(var2 > var5))) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var2 = var6.length;
                    var5 = var2 > var5;
                    var2 = null;
                    if(!var5) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var5 = global;
                    var8 = var5.Math;
                    var7 = var8.floor;
                    var9 = _closure2_slot1;
                    var5 = var6.length;
                    var5 = var9 * var5;
                    var5 = var7.bind(var8)(var5);
                    var2 = var6[var5];
case 16:
                    _fun0002_ip = 18; continue _fun0002;
case 14:
                    var5 = global;
                    var6 = var5.Math;
                    var5 = var6.floor;
                    var7 = _closure2_slot1;
                    var3 = var4.length;
                    var3 = var7 * var3;
                    var3 = var5.bind(var6)(var3);
                    var2 = var4[var3];
case 18:
                    return var2;
case 12:
                    return var1;
                }
            };
            var12 = var3.bind(var5)(var1, var2);
            var1 = var17 == var9;
            var20 = undefined;
            if(var1) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var20 = var9.coverImageUrl;
case 19:
            if(!(var17 == var20)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var2 = var17 == var9;
            var1 = undefined;
            if(var2) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var1 = var9.iconHash;
case 23:
            if(!(var17 != var1)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var2 = var9.iconHash;
            var1 = '';
            if(!(var1 === var2)) { _fun0001_ip = 27; continue _fun0001 }
case 25:
            var2 = var17 == var6;
            var1 = undefined;
            if(var2) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var5 = var6.getIconURL;
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 8;
            var2 = var10[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.SUPPORTS_WEBP;
            var3 = 'png';
            if(!var2) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var3 = 'webp';
case 30:
            var2 = 114;
            var1 = var5.bind(var6)(var2, var3);
case 28:
            _fun0001_ip = 32; continue _fun0001;
case 27:
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 8;
            var2 = var10[var6];
            var5 = var3.bind(var4)(var2);
            var3 = var5.getGameAssetURL;
            var2 = {};
            var11 = var9.applicationId;
            var2['id'] = var11;
            var9 = var9.iconHash;
            var2['hash'] = var9;
            var9 = 114;
            var2['size'] = var9;
            var9 = _closure1_slot0;
            var6 = var10[var6];
            var6 = var9.bind(var4)(var6);
            var9 = var6.SUPPORTS_WEBP;
            var6 = 'png';
            if(!var9) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var6 = 'webp';
case 33:
            var2['format'] = var6;
            var1 = var3.bind(var5)(var2);
case 32:
            var20 = var1;
case 21:
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var19.container;
            var1['style'] = var5;
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
            if(!var8) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var10 = _closure1_slot7;
            var9 = _closure1_slot6;
            var7 = {};
            var11 = {};
            var11['uri'] = var12;
            var7['source'] = var11;
            var11 = var19.artHeroImage;
            var7['style'] = var11;
            var8 = var10.bind(var4)(var9, var7);
case 35:
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
            var11 = ['rgba(0,0,0,0.1)'];
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
            var11 = var19.iconContainer;
            var9['style'] = var11;
            var11 = var17 != var20;
            if(!var11) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var14 = _closure1_slot7;
            var13 = _closure1_slot6;
            var12 = {};
            var16 = {};
            var16['uri'] = var20;
            var12['source'] = var16;
            var16 = var19.icon;
            var12['style'] = var16;
            var11 = var14.bind(var4)(var13, var12);
case 37:
            var9['children'] = var11;
            var10 = var10.bind(var4)(var7, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot8;
            var11 = _closure1_slot5;
            var10 = {};
            var13 = var19.titleContainer;
            var10['style'] = var13;
            var16 = _closure1_slot7;
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var20 = 10;
            var13 = var13[var20];
            var13 = var14.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {'variant': 'heading-xxl/semibold', 'color': 'text-overlay-light', 'lineClamp': 2};
            var22 = var19.textShadow;
            var13['style'] = var22;
            var13['children'] = var21;
            var14 = var16.bind(var4)(var14, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var16 = var17 != var18;
            var14 = null;
            if(!var16) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var16 = '';
            var14 = null;
            if(!(var16 !== var18)) { _fun0001_ip = 39; continue _fun0001 }
case 41:
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
case 39:
            var13[1] = var14;
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