// app/modules/main_tabs_v2/native/shared_components/BadgableTabBarIcon.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
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
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 14;
            var1 = var4[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = 'BadgableTabBarIcon';
            var3 = var3.bind(var5)(var1);
            var1 = _closure1_slot16;
            var11 = var1.bind(var5)(var3);
            var1 = null;
            if(!(var1 == var12)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 15;
            var3 = var7[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.t;
            var12 = var3.XNn2u2;
case 2:
            var3 = 0;
            if(!(!(var13 > var3))) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = null;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = _closure1_slot12;
            var3 = _closure1_slot4;
            var2 = {};
            var2['accessibilityLabel'] = var6;
            var8 = _closure1_slot12;
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
            var4 = _closure1_slot12;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = {};
            var7 = 3;
            var6['margin'] = var7;
            var2['style'] = var6;
            var8 = _closure1_slot12;
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
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.BADGE_SIZE;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StatusSizes;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StatusTypes;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot12 = var8;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AVATAR_SIZE_MAP;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AvatarSizes;
    var4 = var4.NORMAL;
    var4 = var8[var4];
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.spacing;
    var4 = var4.PX_4;
    var _closure1_slot15 = var4;
    var4 = 13;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = {};
            var2 = {};
            var3 = 'relative';
            var2['position'] = var3;
            var1['container'] = var2;
            var2 = {};
            var3 = 'absolute';
            var2['position'] = var3;
            var1['content'] = var2;
            var2 = {};
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 12;
            var8 = var7[var5];
            var4 = undefined;
            var8 = var6.bind(var4)(var8);
            var8 = var8.unsafe_rawColors;
            var8 = var8.PRIMARY_400;
            var2['backgroundColor'] = var8;
            var1['lowPriorityBadge'] = var2;
            var2 = {};
            var8 = var7[var5];
            var8 = var6.bind(var4)(var8);
            var8 = var8.modules;
            var8 = var8.mobile;
            var8 = var8.TAB_BAR_UNREAD_BADGE_SIZE;
            var2['height'] = var8;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.modules;
            var5 = var5.mobile;
            var5 = var5.TAB_BAR_UNREAD_BADGE_SIZE;
            var2['width'] = var5;
            var6 = _closure1_slot9;
            var5 = 2;
            var5 = var6 / var5;
            var2['borderRadius'] = var5;
            var1['unread'] = var2;
            var2 = {};
            var5 = _closure1_slot14;
            var2['width'] = var5;
            var2['height'] = var5;
            var1['avatarTablet'] = var2;
            var2 = {};
            var3 = _closure1_slot15;
            var2['padding'] = var3;
            var1['avatarCutoutWrapper'] = var2;
            var2 = {};
            var3 = 1;
            var2['opacity'] = var3;
            var1['tabBarIconSelected'] = var2;
            var2 = {};
            var3 = 0.5;
            var5 = arg1;
            if(!var5) { _fun0006_ip = 31; continue _fun0006 }
case 32:
            var3 = undefined;
case 31:
            var2['opacity'] = var3;
            var1['tabBarIconUnselected'] = var2;
            return var1;
        }
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot16 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        var8 = arg1;
        var1 = {};
        var2 = {};
        var3 = _closure1_slot14;
        var5 = var8 - var3;
        var6 = -var5;
        var5 = 2;
        var10 = var6 / var5;
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var4 = 12;
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
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/BadgableTabBarIcon.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function BadgableTabBarIcon(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var23 = var1.badgeA11yLabel;
            var13 = var1.color;
            var22 = var1.icon;
            var3 = var1.iconAnimated;
            var14 = var1.focused;
            var8 = var1.navigation;
            var _closure2_slot0 = var8;
            var1 = var1.useBadgeCount;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 14;
            var5 = var11[var5];
            var6 = var7.bind(var4)(var5);
            var5 = 'BadgableTabBarIcon';
            var15 = var6.bind(var4)(var5);
            var5 = _closure1_slot16;
            var6 = var5.bind(var4)(var15);
            var5 = 19;
            var5 = var11[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.bind(var4)();
            var9 = _closure1_slot0;
            var7 = 20;
            var7 = var11[var7];
            var7 = var9.bind(var4)(var7);
            var7 = var7.ICON_SIZE;
            var11 = var7.md;
            if(var14) { _fun0007_ip = 33; continue _fun0007 }
case 34:
            if(var5) { _fun0007_ip = 33; continue _fun0007 }
case 35:
            var21 = var6.tabBarIconUnselected;
            _fun0007_ip = 36; continue _fun0007;
case 33:
            var21 = var6.tabBarIconSelected;
case 36:
            var9 = _closure1_slot20;
            var7 = {};
            var7['iconSize'] = var11;
            var9 = var9.bind(var4)(var7);
            var1 = var1.bind(var4)();
            var24 = var1.value;
            var20 = var1.showDot;
            var19 = var1.lowPriority;
            var7 = _closure1_slot21;
            var1 = {};
            var1['iconSize'] = var11;
            var11 = 11;
            var1['cutoutRadius'] = var11;
            var1['badgeCount'] = var24;
            var1['isWindowLarge'] = var5;
            var18 = var7.bind(var4)(var1);
            var11 = _closure1_slot3;
            var7 = var11.useRef;
            var1 = null;
            var16 = var7.bind(var11)(var1);
            _closure2_slot1 = var16;
            var12 = undefined;
            if(var5) { _fun0007_ip = 37; continue _fun0007 }
case 38:
            var12 = var3;
case 37:
            _closure2_slot2 = var12;
            var3 = 0;
            var11 = var24 > var3;
            if(var11) { _fun0007_ip = 39; continue _fun0007 }
case 40:
            var11 = var20;
case 39:
            var7 = _closure1_slot3;
            var5 = var7.useEffect;
            var3 = new Array(2);
            var3[0] = var8;
            var3[1] = var12;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0008_ip = 41; continue _fun0008 }
case 21:
                    var2 = undefined;
                    return var2;
case 41:
                    var4 = _closure2_slot0;
                    var3 = var4.addListener;
                    var2 = 'tabPress';
                    var1 = function() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var1 = _closure2_slot1;
                            var5 = null;
                            var2 = var5 == var1;
                            var1 = undefined;
                            var3 = undefined;
                            if(var2) { _fun0009_ip = 42; continue _fun0009 }
case 43:
                            var4 = _closure2_slot1;
                            var4 = var4.current;
                            var2 = var5 == var4;
                            var3 = var4;
case 42:
                            if(var2) { _fun0009_ip = 44; continue _fun0009 }
case 45:
                            var2 = var3.play;
                            var2 = var2.bind(var3)();
case 44:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var2 = var5.bind(var7)(var2, var3);
            var7 = null;
            if(!var11) { _fun0007_ip = 46; continue _fun0007 }
case 47:
            var5 = _closure1_slot12;
            var3 = _closure1_slot4;
            var2 = {};
            var17 = var6.content;
            var8 = new Array(2);
            var8[0] = var17;
            var8[1] = var9;
            var2['style'] = var8;
            var17 = _closure1_slot12;
            var9 = _closure1_slot19;
            var8 = {};
            var8['value'] = var24;
            var8['countA11yLabel'] = var23;
            var8['unread'] = var20;
            var8['lowPriority'] = var19;
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var19 = 15;
            var20 = var25[var19];
            var20 = var24.bind(var4)(var20);
            var23 = var20.intl;
            var20 = var23.string;
            var19 = var25[var19];
            var19 = var24.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.sRUdB8;
            var19 = var20.bind(var23)(var19);
            var8['unreadA11yLabel'] = var19;
            var8 = var17.bind(var4)(var9, var8);
            var2['children'] = var8;
            var7 = var5.bind(var4)(var3, var2);
case 46:
            var3 = _closure1_slot13;
            var2 = _closure1_slot4;
            if(!(var1 == var12)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var1 = {};
            var5 = var6.container;
            var1['style'] = var5;
            var9 = _closure1_slot12;
            var8 = _closure1_slot1;
            var17 = _closure1_slot2;
            var5 = 18;
            var5 = var17[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            if(var11) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var17 = new Array(0);
            _fun0007_ip = 52; continue _fun0007;
case 50:
            var19 = new Array(1);
            var19[0] = var18;
            var17 = var19;
case 52:
            var5['cutouts'] = var17;
            var20 = _closure1_slot12;
            var19 = _closure1_slot0;
            var23 = _closure1_slot2;
            var17 = 21;
            var17 = var23[var17];
            var17 = var19.bind(var4)(var17);
            var19 = var17.BaseIconImage;
            var17 = {};
            var17['source'] = var22;
            var22 = 'sm';
            var17['size'] = var22;
            var17['color'] = var13;
            var17['style'] = var21;
            var17 = var20.bind(var4)(var19, var17);
            var5['children'] = var17;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var5[1] = var7;
            var1['children'] = var5;
            _fun0007_ip = 53; continue _fun0007;
case 48:
            var5 = {};
            var6 = var6.container;
            var5['style'] = var6;
            var9 = _closure1_slot12;
            var8 = _closure1_slot1;
            var17 = _closure1_slot2;
            var6 = 18;
            var6 = var17[var6];
            var8 = var8.bind(var4)(var6);
            var6 = {};
            if(var11) { _fun0007_ip = 54; continue _fun0007 }
case 55:
            var11 = new Array(0);
            _fun0007_ip = 56; continue _fun0007;
case 54:
            var17 = new Array(1);
            var17[0] = var18;
            var11 = var17;
case 56:
            var6['cutouts'] = var11;
            var11 = _closure1_slot12;
            var10 = {};
            var10['ref'] = var16;
            var16 = 'refresh_sm';
            if(var15) { _fun0007_ip = 57; continue _fun0007 }
case 58:
            var16 = 'md';
case 57:
            var10['size'] = var16;
            var10['color'] = var13;
            var13 = 1;
            if(var14) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var14 = 0.5;
            if(!var15) { _fun0007_ip = 61; continue _fun0007 }
case 62:
            var14 = undefined;
case 61:
            var13 = var14;
case 59:
            var10['opacity'] = var13;
            var10 = var11.bind(var4)(var12, var10);
            var6['children'] = var10;
            var8 = var9.bind(var4)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var5['children'] = var6;
            var1 = var5;
case 53:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['BadgableTabBarIcon'] = var4;
    var2 = function YouIcon(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg1;
            var1 = var2.focused;
            var31 = var2.tintColor;
            var23 = var2.navigation;
            var _closure2_slot0 = var23;
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
            var2 = 22;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useTabletIconYouWidth;
            var3 = var2.bind(var3)();
            var5 = _closure1_slot1;
            var2 = 14;
            var2 = var6[var2];
            var5 = var5.bind(var4)(var2);
            var2 = 'YouIcon';
            var5 = var5.bind(var4)(var2);
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var38 = 11;
            var2 = var2[var38];
            var2 = var6.bind(var4)(var2);
            var2 = var2.AvatarSizes;
            if(var5) { _fun0010_ip = 33; continue _fun0010 }
case 35:
            var35 = var2.TABS_22;
            _fun0010_ip = 36; continue _fun0010;
case 33:
            var35 = var2.XSMALL;
case 36:
            var2 = _closure1_slot16;
            var19 = var2.bind(var4)(var5);
            var2 = _closure1_slot17;
            var11 = var2.bind(var4)(var3);
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 19;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var6 = var2.bind(var4)();
            var36 = var6;
            if(var6) { _fun0010_ip = 63; continue _fun0010 }
case 64:
            var36 = var1;
case 63:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 23;
            var3 = var1[var5];
            var12 = var2.bind(var4)(var3);
            var9 = var12.useStateFromStores;
            var3 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var14 = var9.bind(var12)(var7, var3);
            var7 = _closure1_slot1;
            var3 = 24;
            var3 = var1[var3];
            var7 = var7.bind(var4)(var3);
            var3 = var7.useName;
            var13 = var3.bind(var7)(var14);
            var1 = var1[var5];
            var7 = var2.bind(var4)(var1);
            var3 = var7.useStateFromStores;
            var1 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var22 = var3.bind(var7)(var2, var1);
            var7 = null;
            var1 = var7 != var22;
            if(!var1) { _fun0010_ip = 65; continue _fun0010 }
case 66:
            var2 = _closure1_slot11;
            var2 = var2.UNKNOWN;
            var1 = var22 !== var2;
case 65:
            var3 = var7 == var14;
            var2 = undefined;
            if(var3) { _fun0010_ip = 67; continue _fun0010 }
case 68:
            var2 = var14.avatar;
case 67:
            var28 = var7 == var2;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = var2[var5];
            var16 = var3.bind(var4)(var9);
            var15 = var16.useStateFromStores;
            var9 = _closure1_slot6;
            var12 = new Array(1);
            var12[0] = var9;
            var9 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var16 = var15.bind(var16)(var12, var9);
            var12 = _closure1_slot3;
            var9 = var12.useRef;
            var12 = var9.bind(var12)(var7);
            var9 = 25;
            var2 = var2[var9];
            var15 = var3.bind(var4)(var2);
            var3 = var15.useGuildTagAvailableCoachmark;
            var17 = var7 != var16;
            var2 = null;
            if(!var17) { _fun0010_ip = 69; continue _fun0010 }
case 70:
            var2 = var16;
case 69:
            var2 = var3.bind(var15)(var12, var2);
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var9 = var3.bind(var4)(var2);
            var3 = var9.useGuildTagUpdatedCoachmark;
            var15 = var7 != var14;
            var2 = null;
            if(!var15) { _fun0010_ip = 71; continue _fun0010 }
case 72:
            var2 = var14;
case 71:
            var2 = var3.bind(var9)(var12, var2);
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var9 = var3.bind(var4)(var2);
            var5 = var9.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot5;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var34 = var5.bind(var9)(var3, var2);
            _closure2_slot1 = var34;
            var21 = 0.5;
            if(!var36) { _fun0010_ip = 73; continue _fun0010 }
case 74:
            var21 = 1;
case 73:
            if(var6) { _fun0010_ip = 75; continue _fun0010 }
case 76:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 20;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ICON_SIZE;
            var5 = var2.md;
            _fun0010_ip = 77; continue _fun0010;
case 75:
            var5 = _closure1_slot14;
case 77:
            var3 = _closure1_slot3;
            var2 = var3.useRef;
            var32 = var2.bind(var3)(var7);
            _closure2_slot2 = var32;
            var3 = _closure1_slot20;
            var2 = {};
            var2['iconSize'] = var5;
            var9 = _closure1_slot15;
            var2['offset'] = var9;
            var2['adjustForYouTab'] = var6;
            var20 = var3.bind(var4)(var2);
            var3 = _closure1_slot21;
            var2 = {'iconSize': null, 'cutoutRadius': 11, 'badgeCount': 0};
            var2['iconSize'] = var5;
            var16 = 0;
            var2['isWindowLarge'] = var6;
            var2 = var3.bind(var4)(var2);
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var27 = 26;
            var9 = var3[var27];
            var15 = var5.bind(var4)(var9);
            var9 = var15.useSharedValue;
            var17 = 1;
            var30 = var9.bind(var15)(var17);
            _closure2_slot3 = var30;
            var9 = var3[var27];
            var15 = var5.bind(var4)(var9);
            var9 = var15.useSharedValue;
            var29 = var9.bind(var15)(var16);
            _closure2_slot4 = var29;
            var9 = var3[var27];
            var15 = var5.bind(var4)(var9);
            var9 = var15.useSharedValue;
            var26 = var9.bind(var15)(var17);
            _closure2_slot5 = var26;
            var9 = var3[var27];
            var15 = var5.bind(var4)(var9);
            var9 = var15.useSharedValue;
            var25 = var9.bind(var15)(var17);
            _closure2_slot6 = var25;
            var18 = _closure1_slot3;
            var17 = var18.useCallback;
            var15 = new Array(1);
            var15[0] = var30;
            var9 = function() {
                var10 = {};
                var1 = 0.13;
                var10['mass'] = var1;
                var4 = _closure2_slot3;
                var3 = var4.set;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 26;
                var2 = var9[var1];
                var1 = undefined;
                var7 = var8.bind(var1)(var2);
                var6 = var7.withSequence;
                var2 = 27;
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
            var33 = var17.bind(var18)(var9, var15);
            _closure2_slot7 = var33;
            var18 = _closure1_slot3;
            var17 = var18.useCallback;
            var15 = new Array(1);
            var15[0] = var29;
            var9 = function() {
                var4 = _closure2_slot4;
                var3 = var4.set;
                var12 = _closure1_slot0;
                var15 = _closure1_slot2;
                var2 = 26;
                var5 = var15[var2];
                var1 = undefined;
                var7 = var12.bind(var1)(var5);
                var6 = var7.withDelay;
                var2 = var15[var2];
                var11 = var12.bind(var1)(var2);
                var10 = var11.withSequence;
                var13 = 27;
                var2 = var15[var13];
                var14 = var12.bind(var1)(var2);
                var9 = var14.withSpring;
                var2 = 28;
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
            var24 = var17.bind(var18)(var9, var15);
            _closure2_slot8 = var24;
            var18 = _closure1_slot3;
            var17 = var18.useCallback;
            var15 = new Array(2);
            var15[0] = var26;
            var15[1] = var25;
            var9 = function() {
                var6 = _closure2_slot5;
                var5 = var6.set;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var8 = 26;
                var2 = var20[var8];
                var1 = undefined;
                var10 = var19.bind(var1)(var2);
                var9 = var10.withDelay;
                var2 = var20[var8];
                var22 = var19.bind(var1)(var2);
                var21 = var22.withSequence;
                var16 = 27;
                var2 = var20[var16];
                var12 = var19.bind(var1)(var2);
                var11 = var12.withSpring;
                var2 = 28;
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
            var9 = var17.bind(var18)(var9, var15);
            _closure2_slot9 = var9;
            var18 = _closure1_slot3;
            var17 = var18.useCallback;
            var15 = new Array(4);
            var15[0] = var34;
            var15[1] = var33;
            var15[2] = var24;
            var15[3] = var9;
            var9 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0011_ip = 42; continue _fun0011 }
case 78:
                    var3 = _closure2_slot7;
                    var2 = undefined;
                    var3 = var3.bind(var2)();
                    var3 = _closure2_slot8;
                    var3 = var3.bind(var2)();
                    var1 = _closure2_slot9;
                    var1 = var1.bind(var2)();
case 42:
                    var1 = undefined;
                    return var1;
                }
            };
            var18 = var17.bind(var18)(var9, var15);
            _closure2_slot10 = var18;
            var9 = var3[var27];
            var17 = var5.bind(var4)(var9);
            var15 = var17.useAnimatedStyle;
            var9 = function k() {
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
            var24 = {};
            var24['scaleDownAnimation'] = var30;
            var24['rotationAnimation'] = var29;
            var24['wobbleAnimationX'] = var26;
            var24['wobbleAnimationY'] = var25;
            var9['__closure'] = var24;
            var24 = 3024112617373.0;
            var9['__workletHash'] = var24;
            var24 = _closure1_slot18;
            var9['__initData'] = var24;
            var37 = var15.bind(var17)(var9);
            var17 = _closure1_slot3;
            var15 = var17.useEffect;
            var9 = new Array(2);
            var9[0] = var23;
            var9[1] = var18;
            var8 = function() {
                var4 = _closure2_slot0;
                var3 = var4.addListener;
                var2 = 'tabPress';
                var1 = function() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var1 = _closure2_slot2;
                        var6 = null;
                        var3 = var6 == var1;
                        var1 = undefined;
                        var4 = undefined;
                        if(var3) { _fun0012_ip = 42; continue _fun0012 }
case 43:
                        var5 = _closure2_slot2;
                        var5 = var5.current;
                        var3 = var6 == var5;
                        var4 = var5;
case 42:
                        if(var3) { _fun0012_ip = 44; continue _fun0012 }
case 45:
                        var3 = var4.play;
                        var3 = var3.bind(var4)();
case 44:
                        var2 = _closure2_slot10;
                        var2 = var2.bind(var1)();
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var8 = var15.bind(var17)(var8, var9);
            var15 = new Array(0);
            var3 = var3[var38];
            var5 = var5.bind(var4)(var3);
            var3 = var5.getStatusSize;
            var23 = var3.bind(var5)(var35);
            if(!var1) { _fun0010_ip = 79; continue _fun0010 }
case 80:
            var1 = var15.push;
            var1 = var1.bind(var15)(var2);
case 79:
            var3 = _closure1_slot13;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = undefined;
            if(!var6) { _fun0010_ip = 81; continue _fun0010 }
case 82:
            var5 = var11.containerTablet;
case 81:
            var1['style'] = var5;
            var9 = _closure1_slot13;
            var8 = _closure1_slot4;
            var5 = {};
            var17 = var19.container;
            var5['style'] = var17;
            var5['ref'] = var12;
            var18 = _closure1_slot12;
            var17 = _closure1_slot4;
            var12 = {};
            var24 = var19.avatarCutoutWrapper;
            var12['style'] = var24;
            var26 = _closure1_slot12;
            var25 = _closure1_slot1;
            var29 = _closure1_slot2;
            var24 = 18;
            var24 = var29[var24];
            var25 = var25.bind(var4)(var24);
            var24 = {};
            var24['cutouts'] = var15;
            var30 = _closure1_slot12;
            if(var28) { _fun0010_ip = 83; continue _fun0010 }
case 84:
            var33 = _closure1_slot1;
            var29 = _closure1_slot2;
            var27 = var29[var27];
            var27 = var33.bind(var4)(var27);
            var28 = var27.View;
            var27 = {};
            var34 = new Array(1);
            var34[0] = var37;
            var27['style'] = var34;
            var34 = _closure1_slot12;
            var29 = var29[var38];
            var33 = var33.bind(var4)(var29);
            var29 = {};
            var29['user'] = var14;
            var29['guildId'] = var4;
            if(var36) { _fun0010_ip = 85; continue _fun0010 }
case 86:
            var36 = var19.tabBarIconUnselected;
            _fun0010_ip = 87; continue _fun0010;
case 85:
            if(var6) { _fun0010_ip = 88; continue _fun0010 }
case 89:
            var37 = var19.tabBarIconSelected;
            _fun0010_ip = 90; continue _fun0010;
case 88:
            var37 = var19.avatarTablet;
case 90:
            var36 = var37;
case 87:
            var29['style'] = var36;
            if(!var6) { _fun0010_ip = 91; continue _fun0010 }
case 92:
            var37 = _closure1_slot0;
            var36 = _closure1_slot2;
            var36 = var36[var38];
            var36 = var37.bind(var4)(var36);
            var36 = var36.AvatarSizes;
            var35 = var36.NORMAL;
case 91:
            var29['size'] = var35;
            var35 = false;
            var29['animate'] = var35;
            var35 = true;
            var29['needsOffscreenAlphaCompositing'] = var35;
            var36 = var7 == var14;
            var35 = undefined;
            if(var36) { _fun0010_ip = 93; continue _fun0010 }
case 94:
            var35 = var14.avatarDecoration;
case 93:
            var29['avatarDecoration'] = var35;
            var29 = var34.bind(var4)(var33, var29);
            var27['children'] = var29;
            var27 = var30.bind(var4)(var28, var27);
            _fun0010_ip = 95; continue _fun0010;
case 83:
            var29 = _closure1_slot0;
            var33 = _closure1_slot2;
            var28 = 29;
            var28 = var33[var28];
            var28 = var29.bind(var4)(var28);
            var29 = var28.YouTabLottie;
            var28 = {};
            var28['ref'] = var32;
            var32 = 'lg';
            if(var6) { _fun0010_ip = 96; continue _fun0010 }
case 97:
            var32 = 'md';
case 96:
            var28['size'] = var32;
            var28['color'] = var31;
            var28['opacity'] = var21;
            var27 = var30.bind(var4)(var29, var28);
case 95:
            var24['children'] = var27;
            var24 = var26.bind(var4)(var25, var24);
            var12['children'] = var24;
            var17 = var18.bind(var4)(var17, var12);
            var12 = new Array(2);
            var12[0] = var17;
            var15 = var15.length;
            var15 = var15 > var16;
            if(!var15) { _fun0010_ip = 98; continue _fun0010 }
case 99:
            var18 = _closure1_slot12;
            var17 = _closure1_slot4;
            var16 = {};
            var24 = var19.content;
            var19 = new Array(3);
            var19[0] = var24;
            var19[1] = var20;
            var20 = {};
            var20['opacity'] = var21;
            var19[2] = var20;
            var16['style'] = var19;
            var21 = _closure1_slot12;
            var20 = _closure1_slot1;
            var24 = _closure1_slot2;
            var19 = 30;
            var19 = var24[var19];
            var20 = var20.bind(var4)(var19);
            var19 = {};
            if(!(var7 == var23)) { _fun0010_ip = 100; continue _fun0010 }
case 101:
            var24 = _closure1_slot10;
            var23 = var24.MEDIUM;
case 100:
            var19['size'] = var23;
            var19['status'] = var22;
            var22 = {};
            var23 = 2;
            var22['margin'] = var23;
            var19['style'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var16['children'] = var19;
            var15 = var18.bind(var4)(var17, var16);
case 98:
            var12[1] = var15;
            var5['children'] = var12;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(3);
            var5[0] = var8;
            var12 = _closure1_slot12;
            var9 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = 31;
            var8 = var15[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.MobileTrialUserSettingsAvatarBadge;
            var8 = {};
            var8 = var12.bind(var4)(var9, var8);
            var5[1] = var8;
            if(!var6) { _fun0010_ip = 102; continue _fun0010 }
case 103:
            var6 = var7 != var14;
case 102:
            if(!var6) { _fun0010_ip = 104; continue _fun0010 }
case 105:
            var6 = var7 != var13;
case 104:
            if(!var6) { _fun0010_ip = 106; continue _fun0010 }
case 107:
            var9 = _closure1_slot12;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = var11.usernameTablet;
            var7['style'] = var11;
            var12 = _closure1_slot12;
            var11 = _closure1_slot1;
            var15 = _closure1_slot2;
            var10 = 32;
            var10 = var15[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {'userId': null, 'userName': null, 'defaultColor': 'interactive-text-active', 'variant': 'text-md/semibold', 'lineClamp': 1, 'maxFontSizeMultiplier': 2};
            var14 = var14.id;
            var10['userId'] = var14;
            var10['userName'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 106:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['YouIcon'] = var2;
    return var1;
})();