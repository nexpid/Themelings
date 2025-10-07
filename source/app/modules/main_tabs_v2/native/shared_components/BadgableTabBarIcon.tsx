// app/modules/main_tabs_v2/native/shared_components/BadgableTabBarIcon.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function BadgeContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var13 = var1.value;
            var12 = var1.countA11yLabel;
            var2 = var1.unread;
            var10 = var1.lowPriority;
            var6 = var1.unreadA11yLabel;
            var1 = _closure1_slot16;
            var5 = undefined;
            var11 = var1.bind(var5)();
            var1 = null;
            if(!(var1 == var12)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 15;
            var3 = var7[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.t;
            var12 = var3.XNn2u7;
case 2:
            var3 = 0;
            if(!(!(var13 > var3))) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = null;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = _closure1_slot13;
            var3 = _closure1_slot4;
            var2 = {};
            var2['accessibilityLabel'] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot1;
            var14 = _closure1_slot2;
            var6 = 17;
            var6 = var14[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var14 = 12;
            var6['size'] = var14;
            var14 = var11.unread;
            var6['style'] = var14;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 6:
            _fun0001_ip = 8; continue _fun0001;
case 4:
            var4 = _closure1_slot13;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = {};
            var7 = 3;
            var6['margin'] = var7;
            var2['style'] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot1;
            var14 = _closure1_slot2;
            var6 = 16;
            var6 = var14[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            if(!var10) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var10 = var11.lowPriorityBadge;
case 9:
            var6['style'] = var10;
            var6['value'] = var13;
            var10 = false;
            var6['accessible'] = var10;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 15;
            var9 = var11[var9];
            var9 = var10.bind(var5)(var9);
            var11 = var9.intl;
            var10 = var11.formatToPlainString;
            var9 = {};
            var9['count'] = var13;
            var9 = var10.bind(var11)(var12, var9);
            var6['accessibilityLabel'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function useIconContentStyle(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var7 = var3.iconSize;
            var _closure2_slot0 = var7;
            var6 = var3.offset;
            var2 = undefined;
            if(!(var6 === var2)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var6 = 0;
case 11:
            var _closure2_slot1 = var6;
            var5 = var3.adjustForYouTab;
            if(!(var5 === var2)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var5 = false;
case 13:
            var _closure2_slot2 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var6;
            var2[2] = var5;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = {};
                    var2 = 8;
                    var1['borderRadius'] = var2;
                    var3 = _closure2_slot2;
                    var5 = _closure2_slot0;
                    if(var3) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var3 = 3;
                    var4 = var5 / var3;
                    _fun0003_ip = 17; continue _fun0003;
case 15:
                    var3 = 0.55;
                    var4 = var3 * var5;
case 17:
                    var3 = _closure2_slot1;
                    var3 = var4 + var3;
                    var1['top'] = var3;
                    var3 = _closure2_slot2;
                    var5 = _closure2_slot0;
                    if(var3) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var3 = 0.625;
                    var3 = var3 * var5;
                    _fun0003_ip = 20; continue _fun0003;
case 18:
                    var4 = 0.65;
                    var3 = var4 * var5;
case 20:
                    var2 = _closure2_slot1;
                    var2 = var3 + var2;
                    var1['left'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function useIconBadgeCutout(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var9 = var2.iconSize;
            var _closure2_slot0 = var9;
            var8 = var2.offset;
            var3 = undefined;
            if(!(var8 === var3)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var8 = 0;
case 11:
            var _closure2_slot1 = var8;
            var7 = var2.cutoutRadius;
            var _closure2_slot2 = var7;
            var6 = var2.badgeCount;
            var _closure2_slot3 = var6;
            var5 = var2.isWindowLarge;
            var _closure2_slot4 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(5);
            var2[0] = var9;
            var2[1] = var8;
            var2[2] = var7;
            var2[3] = var6;
            var2[4] = var5;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = 0;
                    if(!(!(var2 > var1))) { _fun0005_ip = 11; continue _fun0005 }
case 21:
                    var2 = {'x': 2, 'y': 2, 'size': 4294967292};
                    _fun0005_ip = 14; continue _fun0005;
case 11:
                    var2 = {'x': 0, 'y': 0, 'size': 0};
case 14:
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 18;
                    var5 = var5[var4];
                    var4 = undefined;
                    var4 = var6.bind(var4)(var5);
                    var4 = var4.CutoutShape;
                    var4 = var4.Circle;
                    var1['shape'] = var4;
                    var4 = _closure2_slot4;
                    var6 = _closure2_slot0;
                    if(var4) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                    var4 = 0.625;
                    var5 = var4 * var6;
                    var4 = var2.x;
                    var5 = var5 + var4;
                    _fun0005_ip = 24; continue _fun0005;
case 22:
                    var4 = 0.67;
                    var5 = var4 * var6;
case 24:
                    var4 = _closure2_slot1;
                    var4 = var5 + var4;
                    var1['x'] = var4;
                    var4 = _closure2_slot4;
                    var6 = _closure2_slot0;
                    if(var4) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                    var4 = 3;
                    var5 = var6 / var4;
                    var4 = var2.y;
                    var5 = var5 + var4;
                    _fun0005_ip = 27; continue _fun0005;
case 25:
                    var4 = 0.57;
                    var5 = var4 * var6;
case 27:
                    var4 = _closure2_slot1;
                    var4 = var5 + var4;
                    var1['y'] = var4;
                    var4 = _closure2_slot4;
                    var5 = _closure2_slot2;
                    var3 = 2;
                    var3 = var3 * var5;
                    if(var4) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                    var2 = var2.size;
                    var2 = var3 + var2;
                    _fun0005_ip = 30; continue _fun0005;
case 28:
                    var2 = var3;
case 30:
                    var1['size'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
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
    var _closure1_slot3 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var7 = var4.Image;
    var _closure1_slot5 = var7;
    var4 = var4.Modal;
    var _closure1_slot6 = var4;
    var16 = 2;
    var4 = var6[var16];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var15 = var4.BADGE_SIZE;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StatusSizes;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StatusTypes;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AVATAR_SIZE_MAP;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AvatarSizes;
    var4 = var4.NORMAL;
    var14 = var7[var4];
    var _closure1_slot15 = var14;
    var4 = 12;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {};
    var11 = 'relative';
    var10['position'] = var11;
    var7['container'] = var10;
    var10 = {};
    var11 = 'absolute';
    var10['position'] = var11;
    var7['content'] = var10;
    var10 = {};
    var11 = 13;
    var17 = var6[var11];
    var17 = var13.bind(var1)(var17);
    var17 = var17.unsafe_rawColors;
    var17 = var17.PRIMARY_400;
    var10['backgroundColor'] = var17;
    var7['lowPriorityBadge'] = var10;
    var10 = {'height': 22, 'width': 22};
    var15 = var15 / var16;
    var10['borderRadius'] = var15;
    var7['unread'] = var10;
    var10 = {};
    var10['width'] = var14;
    var10['height'] = var14;
    var7['avatarTablet'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var13.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var10['padding'] = var11;
    var7['avatarCutout'] = var10;
    var10 = {};
    var11 = 14;
    var13 = var6[var11];
    var13 = var5.bind(var1)(var13);
    var13 = var13.ICON_SIZE;
    var13 = var13.md;
    var10['width'] = var13;
    var13 = var6[var11];
    var13 = var5.bind(var1)(var13);
    var13 = var13.ICON_SIZE;
    var13 = var13.md;
    var10['height'] = var13;
    var10['opacity'] = var12;
    var7['tabBarIconSelected'] = var10;
    var10 = {};
    var12 = var6[var11];
    var12 = var5.bind(var1)(var12);
    var12 = var12.ICON_SIZE;
    var12 = var12.md;
    var10['width'] = var12;
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var11 = var11.ICON_SIZE;
    var11 = var11.md;
    var10['height'] = var11;
    var11 = 0.5;
    var10['opacity'] = var11;
    var7['tabBarIconUnselected'] = var10;
    var10 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0, 'backgroundColor': 'rgba(0, 0, 0, 0.33)', 'zIndex': 4294967286};
    var7['dimOverlay'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot16 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        var8 = arg1;
        var1 = {};
        var2 = {};
        var3 = _closure1_slot15;
        var5 = var8 - var3;
        var6 = -var5;
        var5 = 2;
        var10 = var6 / var5;
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var4 = 13;
        var9 = var7[var4];
        var5 = undefined;
        var9 = var6.bind(var5)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_24;
        var9 = var10 + var9;
        var2['left'] = var9;
        var1['containerTablet'] = var2;
        var2 = {'width': null, 'left': null, 'height': null, 'justifyContent': 'center', 'position': 'absolute', 'bottom': 0, 'top': 0};
        var9 = var8 - var3;
        var8 = var7[var4];
        var8 = var6.bind(var5)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_24;
        var8 = var9 - var8;
        var2['width'] = var8;
        var4 = var7[var4];
        var4 = var6.bind(var5)(var4);
        var4 = var4.spacing;
        var4 = var4.PX_16;
        var4 = var3 + var4;
        var2['left'] = var4;
        var2['height'] = var3;
        var1['usernameTablet'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot17 = var4;
    var4 = {};
    var7 = 'function BadgableTabBarIconTsx1(){const{scaleDownAnimation,rotationAnimation,wobbleAnimationX,wobbleAnimationY}=this.__closure;return{transform:[{scale:scaleDownAnimation.get()},{rotate:rotationAnimation.get()+"deg"},{scaleX:wobbleAnimationX.get()},{scaleY:wobbleAnimationY.get()}]};}';
    var4['code'] = var7;
    var _closure1_slot18 = var4;
    var4 = 39;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/BadgableTabBarIcon.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function BadgableTabBarIcon(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var22 = var1.badgeA11yLabel;
            var13 = var1.color;
            var20 = var1.icon;
            var3 = var1.iconAnimated;
            var14 = var1.focused;
            var8 = var1.navigation;
            var _closure2_slot0 = var8;
            var1 = var1.useBadgeCount;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var5 = _closure1_slot16;
            var6 = var5.bind(var4)();
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 19;
            var5 = var11[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.bind(var4)();
            var9 = _closure1_slot0;
            var7 = 14;
            var7 = var11[var7];
            var7 = var9.bind(var4)(var7);
            var7 = var7.ICON_SIZE;
            var11 = var7.md;
            if(var14) { _fun0006_ip = 31; continue _fun0006 }
case 32:
            if(var5) { _fun0006_ip = 31; continue _fun0006 }
case 33:
            var21 = var6.tabBarIconUnselected;
            _fun0006_ip = 34; continue _fun0006;
case 31:
            var21 = var6.tabBarIconSelected;
case 34:
            var9 = _closure1_slot20;
            var7 = {};
            var7['iconSize'] = var11;
            var9 = var9.bind(var4)(var7);
            var1 = var1.bind(var4)();
            var23 = var1.value;
            var19 = var1.showDot;
            var18 = var1.lowPriority;
            var7 = _closure1_slot21;
            var1 = {};
            var1['iconSize'] = var11;
            var11 = 11;
            var1['cutoutRadius'] = var11;
            var1['badgeCount'] = var23;
            var1['isWindowLarge'] = var5;
            var17 = var7.bind(var4)(var1);
            var11 = _closure1_slot3;
            var7 = var11.useRef;
            var1 = null;
            var15 = var7.bind(var11)(var1);
            _closure2_slot1 = var15;
            var12 = undefined;
            if(var5) { _fun0006_ip = 35; continue _fun0006 }
case 36:
            var12 = var3;
case 35:
            _closure2_slot2 = var12;
            var3 = 0;
            var11 = var23 > var3;
            if(var11) { _fun0006_ip = 37; continue _fun0006 }
case 38:
            var11 = var19;
case 37:
            var7 = _closure1_slot3;
            var5 = var7.useEffect;
            var3 = new Array(2);
            var3[0] = var8;
            var3[1] = var12;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0007_ip = 39; continue _fun0007 }
case 21:
                    var2 = undefined;
                    return var2;
case 39:
                    var4 = _closure2_slot0;
                    var3 = var4.addListener;
                    var2 = 'tabPress';
                    var1 = function() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var1 = _closure2_slot1;
                            var5 = null;
                            var2 = var5 == var1;
                            var1 = undefined;
                            var3 = undefined;
                            if(var2) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                            var4 = _closure2_slot1;
                            var4 = var4.current;
                            var2 = var5 == var4;
                            var3 = var4;
case 40:
                            if(var2) { _fun0008_ip = 42; continue _fun0008 }
case 43:
                            var2 = var3.play;
                            var2 = var2.bind(var3)();
case 42:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var2 = var5.bind(var7)(var2, var3);
            var7 = null;
            if(!var11) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var5 = _closure1_slot13;
            var3 = _closure1_slot4;
            var2 = {};
            var16 = var6.content;
            var8 = new Array(2);
            var8[0] = var16;
            var8[1] = var9;
            var2['style'] = var8;
            var16 = _closure1_slot13;
            var9 = _closure1_slot19;
            var8 = {};
            var8['value'] = var23;
            var8['countA11yLabel'] = var22;
            var8['unread'] = var19;
            var8['lowPriority'] = var18;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var18 = 15;
            var19 = var24[var18];
            var19 = var23.bind(var4)(var19);
            var22 = var19.intl;
            var19 = var22.string;
            var18 = var24[var18];
            var18 = var23.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.sRUdBw;
            var18 = var19.bind(var22)(var18);
            var8['unreadA11yLabel'] = var18;
            var8 = var16.bind(var4)(var9, var8);
            var2['children'] = var8;
            var7 = var5.bind(var4)(var3, var2);
case 44:
            var3 = _closure1_slot14;
            var2 = _closure1_slot4;
            if(!(var1 == var12)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var1 = {};
            var5 = var6.container;
            var1['style'] = var5;
            var9 = _closure1_slot13;
            var8 = _closure1_slot1;
            var16 = _closure1_slot2;
            var5 = 18;
            var5 = var16[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            if(var11) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            var16 = new Array(0);
            _fun0006_ip = 50; continue _fun0006;
case 48:
            var18 = new Array(1);
            var18[0] = var17;
            var16 = var18;
case 50:
            var5['cutouts'] = var16;
            var19 = _closure1_slot13;
            var18 = _closure1_slot5;
            var16 = {};
            var16['source'] = var20;
            var22 = {};
            var22['tintColor'] = var13;
            var20 = new Array(2);
            var20[0] = var22;
            var20[1] = var21;
            var16['style'] = var20;
            var16 = var19.bind(var4)(var18, var16);
            var5['children'] = var16;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var5[1] = var7;
            var1['children'] = var5;
            _fun0006_ip = 51; continue _fun0006;
case 46:
            var5 = {};
            var6 = var6.container;
            var5['style'] = var6;
            var9 = _closure1_slot13;
            var8 = _closure1_slot1;
            var16 = _closure1_slot2;
            var6 = 18;
            var6 = var16[var6];
            var8 = var8.bind(var4)(var6);
            var6 = {};
            if(var11) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var11 = new Array(0);
            _fun0006_ip = 54; continue _fun0006;
case 52:
            var16 = new Array(1);
            var16[0] = var17;
            var11 = var16;
case 54:
            var6['cutouts'] = var11;
            var11 = _closure1_slot13;
            var10 = {};
            var10['ref'] = var15;
            var15 = 'md';
            var10['size'] = var15;
            var10['color'] = var13;
            var13 = 0.5;
            if(!var14) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var13 = 1;
case 55:
            var10['opacity'] = var13;
            var10 = var11.bind(var4)(var12, var10);
            var6['children'] = var10;
            var8 = var9.bind(var4)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var5['children'] = var6;
            var1 = var5;
case 51:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['BadgableTabBarIcon'] = var4;
    var2 = function YouIcon(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var1 = var2.focused;
            var31 = var2.tintColor;
            var21 = var2.navigation;
            var _closure2_slot0 = var21;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 20;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useTabletIconYouWidth;
            var3 = var2.bind(var3)();
            var2 = _closure1_slot16;
            var20 = var2.bind(var4)();
            var2 = _closure1_slot17;
            var10 = var2.bind(var4)(var3);
            var3 = _closure1_slot1;
            var2 = 19;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var7 = var2.bind(var4)();
            var35 = var7;
            if(var35) { _fun0009_ip = 34; continue _fun0009 }
case 57:
            var35 = var1;
case 34:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 21;
            var3 = var1[var8];
            var11 = var2.bind(var4)(var3);
            var9 = var11.useStateFromStores;
            var3 = _closure1_slot10;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var36 = var9.bind(var11)(var6, var3);
            var6 = _closure1_slot1;
            var3 = 22;
            var3 = var1[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.useName;
            var14 = var3.bind(var6)(var36);
            var1 = var1[var8];
            var6 = var2.bind(var4)(var1);
            var3 = var6.useStateFromStores;
            var1 = _closure1_slot9;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var25 = var3.bind(var6)(var2, var1);
            var27 = null;
            var1 = var27 != var25;
            if(!var1) { _fun0009_ip = 58; continue _fun0009 }
case 59:
            var2 = _closure1_slot12;
            var2 = var2.UNKNOWN;
            var1 = var25 !== var2;
case 58:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 23;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useIsEligibleForPomelo;
            var6 = var2.bind(var3)();
            var3 = var27 == var36;
            var2 = undefined;
            if(var3) { _fun0009_ip = 60; continue _fun0009 }
case 61:
            var2 = var36.avatar;
case 60:
            var37 = var27 == var2;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = var9[var8];
            var15 = var3.bind(var4)(var2);
            var12 = var15.useStateFromStores;
            var2 = _closure1_slot8;
            var11 = new Array(1);
            var11[0] = var2;
            var2 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var12.bind(var15)(var11, var2);
            var12 = _closure1_slot3;
            var2 = var12.useRef;
            var17 = var2.bind(var12)(var27);
            var2 = 24;
            var2 = var9[var2];
            var9 = var3.bind(var4)(var2);
            var3 = var9.useGuildTagCoachmark;
            var12 = var27 != var11;
            var2 = null;
            if(!var12) { _fun0009_ip = 62; continue _fun0009 }
case 63:
            var2 = var11;
case 62:
            var2 = var3.bind(var9)(var17, var2);
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 25;
            var9 = var2[var9];
            var11 = var3.bind(var4)(var9);
            var9 = var11.useVirtualCurrencyOnboardingCoachmark;
            var18 = var9.bind(var11)();
            var15 = _closure1_slot3;
            var12 = var15.useCallback;
            var11 = new Array(1);
            var11[0] = var21;
            var9 = function() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 26;
                var5 = var4[var2];
                var1 = undefined;
                var6 = var3.bind(var1)(var5);
                var5 = var6.hideVirtualCurrencyOnboardingCoachmark;
                var5 = var5.bind(var6)();
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.setVirtualCurrencyOnboardingPillEnabled;
                var2 = true;
                var2 = var3.bind(var4)(var2);
                var5 = _closure2_slot0;
                var4 = var5.navigate;
                var3 = {};
                var2 = 'you';
                var3['screen'] = var2;
                var2 = 'tabs';
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var16 = var12.bind(var15)(var9, var11);
            var2 = var2[var8];
            var9 = var3.bind(var4)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot7;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var38 = var8.bind(var9)(var3, var2);
            _closure2_slot1 = var38;
            var24 = 0.5;
            if(!var35) { _fun0009_ip = 64; continue _fun0009 }
case 65:
            var24 = 1;
case 64:
            if(var7) { _fun0009_ip = 66; continue _fun0009 }
case 67:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 14;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ICON_SIZE;
            var8 = var2.md;
            _fun0009_ip = 68; continue _fun0009;
case 66:
            var8 = _closure1_slot15;
case 68:
            var3 = _closure1_slot3;
            var2 = var3.useRef;
            var32 = var2.bind(var3)(var27);
            _closure2_slot2 = var32;
            var3 = _closure1_slot20;
            var2 = {};
            var2['iconSize'] = var8;
            var9 = var20.avatarCutout;
            var9 = var9.padding;
            var2['offset'] = var9;
            var2['adjustForYouTab'] = var7;
            var23 = var3.bind(var4)(var2);
            var3 = _closure1_slot21;
            var2 = {};
            var2['iconSize'] = var8;
            var8 = var20.avatarCutout;
            var8 = var8.padding;
            var2['offset'] = var8;
            var39 = 11;
            var2['cutoutRadius'] = var39;
            var15 = 0;
            var2['badgeCount'] = var15;
            var2['isWindowLarge'] = var7;
            var2 = var3.bind(var4)(var2);
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var22 = 27;
            var8 = var3[var22];
            var11 = var9.bind(var4)(var8);
            var8 = var11.useSharedValue;
            var12 = 1;
            var33 = var8.bind(var11)(var12);
            _closure2_slot3 = var33;
            var8 = var3[var22];
            var11 = var9.bind(var4)(var8);
            var8 = var11.useSharedValue;
            var30 = var8.bind(var11)(var15);
            _closure2_slot4 = var30;
            var8 = var3[var22];
            var11 = var9.bind(var4)(var8);
            var8 = var11.useSharedValue;
            var29 = var8.bind(var11)(var12);
            _closure2_slot5 = var29;
            var8 = var3[var22];
            var11 = var9.bind(var4)(var8);
            var8 = var11.useSharedValue;
            var28 = var8.bind(var11)(var12);
            _closure2_slot6 = var28;
            var19 = _closure1_slot3;
            var12 = var19.useCallback;
            var11 = new Array(1);
            var11[0] = var33;
            var8 = function() {
                var10 = {};
                var1 = 0.13;
                var10['mass'] = var1;
                var4 = _closure2_slot3;
                var3 = var4.set;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 27;
                var2 = var9[var1];
                var1 = undefined;
                var7 = var8.bind(var1)(var2);
                var6 = var7.withSequence;
                var2 = 28;
                var5 = var9[var2];
                var12 = var8.bind(var1)(var5);
                var11 = var12.withSpring;
                var5 = 0.7;
                var5 = var11.bind(var12)(var5, var10);
                var2 = var9[var2];
                var9 = var8.bind(var1)(var2);
                var8 = var9.withSpring;
                var2 = 1;
                var2 = var8.bind(var9)(var2, var10);
                var2 = var6.bind(var7)(var5, var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var34 = var12.bind(var19)(var8, var11);
            _closure2_slot7 = var34;
            var19 = _closure1_slot3;
            var12 = var19.useCallback;
            var11 = new Array(1);
            var11[0] = var30;
            var8 = function() {
                var4 = _closure2_slot4;
                var3 = var4.set;
                var12 = _closure1_slot0;
                var15 = _closure1_slot2;
                var2 = 27;
                var5 = var15[var2];
                var1 = undefined;
                var7 = var12.bind(var1)(var5);
                var6 = var7.withDelay;
                var2 = var15[var2];
                var11 = var12.bind(var1)(var2);
                var10 = var11.withSequence;
                var13 = 28;
                var2 = var15[var13];
                var14 = var12.bind(var1)(var2);
                var9 = var14.withSpring;
                var2 = 29;
                var5 = var15[var2];
                var5 = var12.bind(var1)(var5);
                var8 = var5.springStandard;
                var5 = -4;
                var9 = var9.bind(var14)(var5, var8);
                var5 = var15[var13];
                var16 = var12.bind(var1)(var5);
                var14 = var16.withSpring;
                var5 = var15[var2];
                var5 = var12.bind(var1)(var5);
                var8 = var5.springStandard;
                var5 = 3;
                var8 = var14.bind(var16)(var5, var8);
                var5 = var15[var13];
                var17 = var12.bind(var1)(var5);
                var16 = var17.withSpring;
                var5 = var15[var2];
                var5 = var12.bind(var1)(var5);
                var14 = var5.springStandard;
                var5 = -2;
                var19 = var16.bind(var17)(var5, var14);
                var13 = var15[var13];
                var14 = var12.bind(var1)(var13);
                var13 = var14.withSpring;
                var2 = var15[var2];
                var2 = var12.bind(var1)(var2);
                var12 = var2.springStandard;
                var2 = 0;
                var18 = var13.bind(var14)(var2, var12);
                var22 = var11;
                var21 = var9;
                var20 = var8;
                var5 = var22[var10](var21, var20, var19, var18, var17);
                var2 = 30;
                var2 = var6.bind(var7)(var2, var5);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var26 = var12.bind(var19)(var8, var11);
            _closure2_slot8 = var26;
            var19 = _closure1_slot3;
            var12 = var19.useCallback;
            var11 = new Array(2);
            var11[0] = var29;
            var11[1] = var28;
            var8 = function() {
                var6 = _closure2_slot5;
                var5 = var6.set;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var8 = 27;
                var2 = var20[var8];
                var1 = undefined;
                var10 = var19.bind(var1)(var2);
                var9 = var10.withDelay;
                var2 = var20[var8];
                var22 = var19.bind(var1)(var2);
                var21 = var22.withSequence;
                var16 = 28;
                var2 = var20[var16];
                var12 = var19.bind(var1)(var2);
                var11 = var12.withSpring;
                var2 = 29;
                var4 = var20[var2];
                var4 = var19.bind(var1)(var4);
                var7 = var4.springStandard;
                var4 = 1.09;
                var15 = var11.bind(var12)(var4, var7);
                var4 = var20[var16];
                var12 = var19.bind(var1)(var4);
                var11 = var12.withSpring;
                var4 = var20[var2];
                var4 = var19.bind(var1)(var4);
                var7 = var4.springStandard;
                var4 = 0.9;
                var14 = var11.bind(var12)(var4, var7);
                var4 = var20[var16];
                var11 = var19.bind(var1)(var4);
                var7 = var11.withSpring;
                var4 = var20[var2];
                var4 = var19.bind(var1)(var4);
                var4 = var4.springStandard;
                var17 = 1.04;
                var29 = var7.bind(var11)(var17, var4);
                var4 = var20[var16];
                var12 = var19.bind(var1)(var4);
                var11 = var12.withSpring;
                var4 = var20[var2];
                var4 = var19.bind(var1)(var4);
                var7 = var4.springStandard;
                var4 = 0.96;
                var28 = var11.bind(var12)(var4, var7);
                var4 = var20[var16];
                var18 = var19.bind(var1)(var4);
                var11 = var18.withSpring;
                var4 = var20[var2];
                var4 = var19.bind(var1)(var4);
                var7 = var4.springStandard;
                var4 = 1.02;
                var27 = var11.bind(var18)(var4, var7);
                var4 = var20[var16];
                var23 = var19.bind(var1)(var4);
                var18 = var23.withSpring;
                var4 = var20[var2];
                var4 = var19.bind(var1)(var4);
                var7 = var4.springStandard;
                var4 = 0.99;
                var26 = var18.bind(var23)(var4, var7);
                var4 = var20[var16];
                var24 = var19.bind(var1)(var4);
                var23 = var24.withSpring;
                var4 = var20[var2];
                var4 = var19.bind(var1)(var4);
                var4 = var4.springStandard;
                var18 = 1;
                var25 = var23.bind(var24)(var18, var4);
                var32 = var22;
                var31 = var15;
                var30 = var14;
                var4 = var32[var21](var31, var30, var29, var28, var27, var26, var25, var24);
                var7 = 8;
                var4 = var9.bind(var10)(var7, var4);
                var4 = var5.bind(var6)(var4);
                var4 = _closure2_slot6;
                var3 = var4.set;
                var5 = var20[var8];
                var6 = var19.bind(var1)(var5);
                var5 = var6.withDelay;
                var8 = var20[var8];
                var15 = var19.bind(var1)(var8);
                var14 = var15.withSequence;
                var8 = var20[var16];
                var11 = var19.bind(var1)(var8);
                var10 = var11.withSpring;
                var8 = var20[var2];
                var8 = var19.bind(var1)(var8);
                var9 = var8.springStandard;
                var8 = 0.87;
                var13 = var10.bind(var11)(var8, var9);
                var8 = var20[var16];
                var11 = var19.bind(var1)(var8);
                var10 = var11.withSpring;
                var8 = var20[var2];
                var8 = var19.bind(var1)(var8);
                var9 = var8.springStandard;
                var8 = 1.06;
                var12 = var10.bind(var11)(var8, var9);
                var8 = var20[var16];
                var11 = var19.bind(var1)(var8);
                var10 = var11.withSpring;
                var8 = var20[var2];
                var8 = var19.bind(var1)(var8);
                var9 = var8.springStandard;
                var8 = 0.95;
                var29 = var10.bind(var11)(var8, var9);
                var8 = var20[var16];
                var10 = var19.bind(var1)(var8);
                var9 = var10.withSpring;
                var8 = var20[var2];
                var8 = var19.bind(var1)(var8);
                var8 = var8.springStandard;
                var28 = var9.bind(var10)(var17, var8);
                var8 = var20[var16];
                var21 = var19.bind(var1)(var8);
                var17 = var21.withSpring;
                var8 = var20[var2];
                var8 = var19.bind(var1)(var8);
                var9 = var8.springStandard;
                var8 = 0.97;
                var27 = var17.bind(var21)(var8, var9);
                var8 = var20[var16];
                var22 = var19.bind(var1)(var8);
                var21 = var22.withSpring;
                var8 = var20[var2];
                var8 = var19.bind(var1)(var8);
                var17 = var8.springStandard;
                var8 = 1.01;
                var26 = var21.bind(var22)(var8, var17);
                var16 = var20[var16];
                var17 = var19.bind(var1)(var16);
                var16 = var17.withSpring;
                var2 = var20[var2];
                var2 = var19.bind(var1)(var2);
                var2 = var2.springStandard;
                var25 = var16.bind(var17)(var18, var2);
                var32 = var15;
                var31 = var13;
                var30 = var12;
                var2 = var32[var14](var31, var30, var29, var28, var27, var26, var25, var24);
                var2 = var5.bind(var6)(var7, var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var8 = var12.bind(var19)(var8, var11);
            _closure2_slot9 = var8;
            var19 = _closure1_slot3;
            var12 = var19.useCallback;
            var11 = new Array(4);
            var11[0] = var38;
            var11[1] = var34;
            var11[2] = var26;
            var11[3] = var8;
            var8 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0010_ip = 40; continue _fun0010 }
case 69:
                    var3 = _closure2_slot7;
                    var2 = undefined;
                    var3 = var3.bind(var2)();
                    var3 = _closure2_slot8;
                    var3 = var3.bind(var2)();
                    var1 = _closure2_slot9;
                    var1 = var1.bind(var2)();
case 40:
                    var1 = undefined;
                    return var1;
                }
            };
            var19 = var12.bind(var19)(var8, var11);
            _closure2_slot10 = var19;
            var8 = var3[var22];
            var12 = var9.bind(var4)(var8);
            var11 = var12.useAnimatedStyle;
            var8 = function Y() {
                var1 = {};
                var3 = {};
                var5 = _closure2_slot3;
                var2 = var5.get;
                var2 = var2.bind(var5)();
                var3['scale'] = var2;
                var2 = new Array(4);
                var2[0] = var3;
                var3 = {};
                var6 = _closure2_slot4;
                var5 = var6.get;
                var8 = var5.bind(var6)();
                var5 = global;
                var5 = var5.HermesInternal;
                var7 = var5.concat;
                var6 = '';
                var5 = 'deg';
                var5 = var7.bind(var6)(var8, var5);
                var3['rotate'] = var5;
                var2[1] = var3;
                var3 = {};
                var6 = _closure2_slot5;
                var5 = var6.get;
                var5 = var5.bind(var6)();
                var3['scaleX'] = var5;
                var2[2] = var3;
                var3 = {};
                var5 = _closure2_slot6;
                var4 = var5.get;
                var4 = var4.bind(var5)();
                var3['scaleY'] = var4;
                var2[3] = var3;
                var1['transform'] = var2;
                return var1;
            };
            var26 = {};
            var26['scaleDownAnimation'] = var33;
            var26['rotationAnimation'] = var30;
            var26['wobbleAnimationX'] = var29;
            var26['wobbleAnimationY'] = var28;
            var8['__closure'] = var26;
            var26 = 3024112617373.0;
            var8['__workletHash'] = var26;
            var26 = _closure1_slot18;
            var8['__initData'] = var26;
            var38 = var11.bind(var12)(var8);
            var12 = _closure1_slot3;
            var11 = var12.useEffect;
            var8 = new Array(2);
            var8[0] = var21;
            var8[1] = var19;
            var5 = function() {
                var4 = _closure2_slot0;
                var3 = var4.addListener;
                var2 = 'tabPress';
                var1 = function() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var1 = _closure2_slot2;
                        var6 = null;
                        var3 = var6 == var1;
                        var1 = undefined;
                        var4 = undefined;
                        if(var3) { _fun0011_ip = 40; continue _fun0011 }
case 41:
                        var5 = _closure2_slot2;
                        var5 = var5.current;
                        var3 = var6 == var5;
                        var4 = var5;
case 40:
                        if(var3) { _fun0011_ip = 42; continue _fun0011 }
case 43:
                        var3 = var4.play;
                        var3 = var3.bind(var4)();
case 42:
                        var2 = _closure2_slot10;
                        var2 = var2.bind(var1)();
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var5 = var11.bind(var12)(var5, var8);
            var12 = new Array(0);
            var5 = var3[var39];
            var8 = var9.bind(var4)(var5);
            var5 = var8.getStatusSize;
            var3 = var3[var39];
            var3 = var9.bind(var4)(var3);
            var3 = var3.AvatarSizes;
            var3 = var3.TABS_22;
            var26 = var5.bind(var8)(var3);
            if(!var1) { _fun0009_ip = 70; continue _fun0009 }
case 71:
            var1 = !var6;
case 70:
            if(!var1) { _fun0009_ip = 72; continue _fun0009 }
case 73:
            var1 = var12.push;
            var1 = var1.bind(var12)(var2);
case 72:
            var3 = _closure1_slot14;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = undefined;
            if(!var7) { _fun0009_ip = 74; continue _fun0009 }
case 75:
            var5 = var10.containerTablet;
case 74:
            var1['style'] = var5;
            var9 = _closure1_slot14;
            var8 = _closure1_slot4;
            var5 = {};
            var11 = var20.container;
            var5['style'] = var11;
            var5['ref'] = var17;
            var21 = _closure1_slot13;
            var19 = _closure1_slot1;
            var28 = _closure1_slot2;
            var11 = 18;
            var11 = var28[var11];
            var19 = var19.bind(var4)(var11);
            var11 = {};
            var11['cutouts'] = var12;
            var28 = var20.avatarCutout;
            var11['style'] = var28;
            var30 = _closure1_slot13;
            if(var37) { _fun0009_ip = 76; continue _fun0009 }
case 77:
            var33 = _closure1_slot1;
            var29 = _closure1_slot2;
            var22 = var29[var22];
            var22 = var33.bind(var4)(var22);
            var28 = var22.View;
            var22 = {};
            var34 = new Array(1);
            var34[0] = var38;
            var22['style'] = var34;
            var34 = _closure1_slot13;
            var29 = var29[var39];
            var33 = var33.bind(var4)(var29);
            var29 = {};
            var29['user'] = var36;
            var29['guildId'] = var4;
            if(var35) { _fun0009_ip = 78; continue _fun0009 }
case 79:
            var35 = var20.tabBarIconUnselected;
            _fun0009_ip = 80; continue _fun0009;
case 78:
            if(var7) { _fun0009_ip = 81; continue _fun0009 }
case 82:
            var38 = var20.tabBarIconSelected;
            _fun0009_ip = 83; continue _fun0009;
case 81:
            var38 = var20.avatarTablet;
case 83:
            var35 = var38;
case 80:
            var29['style'] = var35;
            var35 = undefined;
            if(!var37) { _fun0009_ip = 84; continue _fun0009 }
case 85:
            var38 = {};
            var38['tintColor'] = var31;
            var35 = var38;
case 84:
            var29['avatarStyle'] = var35;
            var38 = _closure1_slot0;
            var35 = _closure1_slot2;
            var35 = var35[var39];
            var35 = var38.bind(var4)(var35);
            var38 = var35.AvatarSizes;
            if(var7) { _fun0009_ip = 86; continue _fun0009 }
case 87:
            var35 = var38.TABS_22;
            _fun0009_ip = 88; continue _fun0009;
case 86:
            var35 = var38.NORMAL;
case 88:
            var29['size'] = var35;
            var35 = false;
            var29['animate'] = var35;
            var35 = null;
            if(!var37) { _fun0009_ip = 89; continue _fun0009 }
case 90:
            var38 = _closure1_slot1;
            var39 = _closure1_slot2;
            var37 = 31;
            var37 = var39[var37];
            var35 = var38.bind(var4)(var37);
case 89:
            var29['source'] = var35;
            var35 = true;
            var29['needsOffscreenAlphaCompositing'] = var35;
            var37 = var27 == var36;
            var35 = undefined;
            if(var37) { _fun0009_ip = 91; continue _fun0009 }
case 92:
            var35 = var36.avatarDecoration;
case 91:
            var29['avatarDecoration'] = var35;
            var29 = var34.bind(var4)(var33, var29);
            var22['children'] = var29;
            var22 = var30.bind(var4)(var28, var22);
            _fun0009_ip = 93; continue _fun0009;
case 76:
            var29 = _closure1_slot0;
            var33 = _closure1_slot2;
            var28 = 30;
            var28 = var33[var28];
            var28 = var29.bind(var4)(var28);
            var29 = var28.YouTabLottie;
            var28 = {};
            var28['ref'] = var32;
            var32 = 'lg';
            if(var7) { _fun0009_ip = 94; continue _fun0009 }
case 95:
            var32 = 'md';
case 94:
            var28['size'] = var32;
            var28['color'] = var31;
            var28['opacity'] = var24;
            var22 = var30.bind(var4)(var29, var28);
case 93:
            var11['children'] = var22;
            var19 = var21.bind(var4)(var19, var11);
            var11 = new Array(2);
            var11[0] = var19;
            var12 = var12.length;
            var12 = var12 > var15;
            if(!var12) { _fun0009_ip = 96; continue _fun0009 }
case 97:
            var21 = _closure1_slot13;
            var19 = _closure1_slot4;
            var15 = {};
            var28 = var20.content;
            var22 = new Array(3);
            var22[0] = var28;
            var22[1] = var23;
            var23 = {};
            var23['opacity'] = var24;
            var22[2] = var23;
            var15['style'] = var22;
            var24 = _closure1_slot13;
            var23 = _closure1_slot1;
            var28 = _closure1_slot2;
            var22 = 32;
            var22 = var28[var22];
            var23 = var23.bind(var4)(var22);
            var22 = {};
            if(!(var27 == var26)) { _fun0009_ip = 98; continue _fun0009 }
case 99:
            var27 = _closure1_slot11;
            var26 = var27.MEDIUM;
case 98:
            var22['size'] = var26;
            var22['status'] = var25;
            var25 = {};
            var26 = 2;
            var25['margin'] = var26;
            var22['style'] = var25;
            var22 = var24.bind(var4)(var23, var22);
            var15['children'] = var22;
            var12 = var21.bind(var4)(var19, var15);
case 96:
            var11[1] = var12;
            var5['children'] = var11;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(5);
            var5[0] = var8;
            if(!var6) { _fun0009_ip = 100; continue _fun0009 }
case 101:
            var11 = _closure1_slot13;
            var15 = _closure1_slot1;
            var19 = _closure1_slot2;
            var8 = 33;
            var8 = var19[var8];
            var9 = var15.bind(var4)(var8);
            var8 = {};
            var12 = 13;
            var12 = var19[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.colors;
            var12 = var12.STATUS_WARNING;
            var8['themedColor'] = var12;
            var12 = 34;
            var12 = var19[var12];
            var12 = var15.bind(var4)(var12);
            var8['source'] = var12;
            var6 = var11.bind(var4)(var9, var8);
case 100:
            var5[1] = var6;
            var9 = _closure1_slot13;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 35;
            var6 = var11[var6];
            var6 = var8.bind(var4)(var6);
            var8 = var6.MobileTrialUserSettingsAvatarBadge;
            var6 = {};
            var6 = var9.bind(var4)(var8, var6);
            var5[2] = var6;
            var6 = undefined;
            if(!var7) { _fun0009_ip = 102; continue _fun0009 }
case 103:
            var9 = _closure1_slot13;
            var8 = _closure1_slot4;
            var7 = {};
            var10 = var10.usernameTablet;
            var7['style'] = var10;
            var12 = _closure1_slot13;
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 36;
            var10 = var15[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-md/semibold', 'lineClamp': 1, 'color': 'interactive-active', 'maxFontSizeMultiplier': 2};
            var10['children'] = var14;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 102:
            var5[3] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot6;
            var6 = {'visible': null, 'transparent': true, 'statusBarTranslucent': true};
            var6['visible'] = var18;
            var11 = _closure1_slot14;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 37;
            var9 = var12[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.LayerScope;
            var9 = {};
            var14 = var18;
            if(!var14) { _fun0009_ip = 104; continue _fun0009 }
case 105:
            var19 = _closure1_slot13;
            var15 = _closure1_slot4;
            var12 = {};
            var20 = var20.dimOverlay;
            var12['style'] = var20;
            var14 = var19.bind(var4)(var15, var12);
case 104:
            var12 = new Array(2);
            var12[0] = var14;
            var15 = _closure1_slot13;
            var14 = _closure1_slot0;
            var19 = _closure1_slot2;
            var13 = 38;
            var13 = var19[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.OrbsOnboardingCoachmark;
            var13 = {};
            var13['show'] = var18;
            var13['targetRef'] = var17;
            var13['onClose'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[4] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['YouIcon'] = var2;
    return var1;
})();