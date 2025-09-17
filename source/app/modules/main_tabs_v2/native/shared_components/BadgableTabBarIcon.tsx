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
 0:
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
            if(!(var1 == var12)) { _fun0001_ip = 84; continue _fun0001 }
 51:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 16;
            var3 = var7[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.t;
            var12 = var3.XNn2u7;
 84:
            var3 = 0;
            if(!(!(var13 > var3))) { _fun0001_ip = 173; continue _fun0001 }
 90:
            var1 = null;
            if(!var2) { _fun0001_ip = 168; continue _fun0001 }
 95:
            var4 = _closure1_slot13;
            var3 = _closure1_slot4;
            var2 = {};
            var2['accessibilityLabel'] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot1;
            var14 = _closure1_slot2;
            var6 = 18;
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
 168:
            _fun0001_ip = 310; continue _fun0001;
 173:
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
            var6 = 17;
            var6 = var14[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            if(!var10) { _fun0001_ip = 232; continue _fun0001 }
 226:
            var10 = var11.lowPriorityBadge;
 232:
            var6['style'] = var10;
            var6['value'] = var13;
            var10 = false;
            var6['accessible'] = var10;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 16;
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
 310:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function useIconContentStyle(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var7 = var3.iconSize;
            var _closure2_slot0 = var7;
            var6 = var3.offset;
            var2 = undefined;
            if(!(var6 === var2)) { _fun0002_ip = 29; continue _fun0002 }
 27:
            var6 = 0;
 29:
            var _closure2_slot1 = var6;
            var5 = var3.adjustForYouTab;
            if(!(var5 === var2)) { _fun0002_ip = 45; continue _fun0002 }
 43:
            var5 = false;
 45:
            var _closure2_slot2 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var6;
            var2[2] = var5;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = {};
                    var2 = 8;
                    var1['borderRadius'] = var2;
                    var3 = _closure2_slot2;
                    var5 = _closure2_slot0;
                    if(var3) { _fun0003_ip = 32; continue _fun0003 }
 23:
                    var3 = 3;
                    var4 = var5 / var3;
                    _fun0003_ip = 46; continue _fun0003;
 32:
                    var3 = 0.55;
                    var4 = var3 * var5;
 46:
                    var3 = _closure2_slot1;
                    var3 = var4 + var3;
                    var1['top'] = var3;
                    var3 = _closure2_slot2;
                    var5 = _closure2_slot0;
                    if(var3) { _fun0003_ip = 85; continue _fun0003 }
 69:
                    var3 = 0.625;
                    var3 = var3 * var5;
                    _fun0003_ip = 99; continue _fun0003;
 85:
                    var4 = 0.65;
                    var3 = var4 * var5;
 99:
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
    var _closure1_slot19 = var1;
    var1 = function useIconBadgeCutout(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var9 = var2.iconSize;
            var _closure2_slot0 = var9;
            var8 = var2.offset;
            var3 = undefined;
            if(!(var8 === var3)) { _fun0004_ip = 29; continue _fun0004 }
 27:
            var8 = 0;
 29:
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
 0:
                    var2 = _closure2_slot3;
                    var1 = 0;
                    if(!(!(var2 > var1))) { _fun0005_ip = 29; continue _fun0005 }
 13:
                    var2 = {'x': 2, 'y': 2, 'size': 4294967292};
                    _fun0005_ip = 43; continue _fun0005;
 29:
                    var2 = {'x': 0, 'y': 0, 'size': 0};
 43:
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 19;
                    var5 = var5[var4];
                    var4 = undefined;
                    var4 = var6.bind(var4)(var5);
                    var4 = var4.CutoutShape;
                    var4 = var4.Circle;
                    var1['shape'] = var4;
                    var4 = _closure2_slot4;
                    var6 = _closure2_slot0;
                    if(var4) { _fun0005_ip = 123; continue _fun0005 }
 98:
                    var4 = 0.625;
                    var5 = var4 * var6;
                    var4 = var2.x;
                    var5 = var5 + var4;
                    _fun0005_ip = 137; continue _fun0005;
 123:
                    var4 = 0.67;
                    var5 = var4 * var6;
 137:
                    var4 = _closure2_slot1;
                    var4 = var5 + var4;
                    var1['x'] = var4;
                    var4 = _closure2_slot4;
                    var6 = _closure2_slot0;
                    if(var4) { _fun0005_ip = 178; continue _fun0005 }
 160:
                    var4 = 3;
                    var5 = var6 / var4;
                    var4 = var2.y;
                    var5 = var5 + var4;
                    _fun0005_ip = 192; continue _fun0005;
 178:
                    var4 = 0.57;
                    var5 = var4 * var6;
 192:
                    var4 = _closure2_slot1;
                    var4 = var5 + var4;
                    var1['y'] = var4;
                    var4 = _closure2_slot4;
                    var5 = _closure2_slot2;
                    var3 = 2;
                    var3 = var3 * var5;
                    if(var4) { _fun0005_ip = 233; continue _fun0005 }
 222:
                    var2 = var2.size;
                    var2 = var3 + var2;
                    _fun0005_ip = 236; continue _fun0005;
 233:
                    var2 = var3;
 236:
                    var1['size'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
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
    var11 = 1;
    var4 = var6[var11];
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
    var10 = var7[var4];
    var _closure1_slot15 = var10;
    var4 = 12;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var12 = 'relative';
    var9['position'] = var12;
    var4['container'] = var9;
    var9 = {};
    var14 = 13;
    var12 = var6[var14];
    var12 = var5.bind(var1)(var12);
    var12 = var12.TABLET_ICON_YOU_WIDTH;
    var12 = var12 - var10;
    var12 = -var12;
    var18 = var12 / var16;
    var12 = 14;
    var17 = var6[var12];
    var17 = var13.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_24;
    var17 = var18 + var17;
    var9['left'] = var17;
    var4['containerTablet'] = var9;
    var9 = {};
    var17 = 'absolute';
    var9['position'] = var17;
    var4['content'] = var9;
    var9 = {};
    var17 = var6[var12];
    var17 = var13.bind(var1)(var17);
    var17 = var17.unsafe_rawColors;
    var17 = var17.PRIMARY_400;
    var9['backgroundColor'] = var17;
    var4['lowPriorityBadge'] = var9;
    var9 = {'height': 22, 'width': 22};
    var15 = var15 / var16;
    var9['borderRadius'] = var15;
    var4['unread'] = var9;
    var9 = {};
    var9['width'] = var10;
    var9['height'] = var10;
    var4['avatarTablet'] = var9;
    var9 = {};
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_4;
    var9['padding'] = var15;
    var4['avatarCutout'] = var9;
    var9 = {'width': null, 'left': null, 'height': null, 'justifyContent': 'center', 'position': 'absolute', 'bottom': 0, 'top': 0};
    var14 = var6[var14];
    var14 = var5.bind(var1)(var14);
    var14 = var14.TABLET_ICON_YOU_WIDTH;
    var15 = var14 - var10;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_24;
    var14 = var15 - var14;
    var9['width'] = var14;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var12 = var10 + var12;
    var9['left'] = var12;
    var9['height'] = var10;
    var4['usernameTablet'] = var9;
    var9 = {};
    var10 = 15;
    var12 = var6[var10];
    var12 = var5.bind(var1)(var12);
    var12 = var12.ICON_SIZE;
    var12 = var12.md;
    var9['width'] = var12;
    var12 = var6[var10];
    var12 = var5.bind(var1)(var12);
    var12 = var12.ICON_SIZE;
    var12 = var12.md;
    var9['height'] = var12;
    var9['opacity'] = var11;
    var4['tabBarIconSelected'] = var9;
    var9 = {};
    var11 = var6[var10];
    var11 = var5.bind(var1)(var11);
    var11 = var11.ICON_SIZE;
    var11 = var11.md;
    var9['width'] = var11;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.ICON_SIZE;
    var10 = var10.md;
    var9['height'] = var10;
    var10 = 0.5;
    var9['opacity'] = var10;
    var4['tabBarIconUnselected'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0, 'backgroundColor': 'rgba(0, 0, 0, 0.7)', 'zIndex': 4294967286};
    var4['dimOverlay'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = {};
    var7 = 'function BadgableTabBarIconTsx1(){const{scaleDownAnimation,rotationAnimation,wobbleAnimationX,wobbleAnimationY}=this.__closure;return{transform:[{scale:scaleDownAnimation.get()},{rotate:rotationAnimation.get()+"deg"},{scaleX:wobbleAnimationX.get()},{scaleY:wobbleAnimationY.get()}]};}';
    var4['code'] = var7;
    var _closure1_slot17 = var4;
    var4 = 39;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/BadgableTabBarIcon.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function BadgableTabBarIcon(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
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
            var5 = 20;
            var5 = var11[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.bind(var4)();
            var9 = _closure1_slot0;
            var7 = 15;
            var7 = var11[var7];
            var7 = var9.bind(var4)(var7);
            var7 = var7.ICON_SIZE;
            var11 = var7.md;
            if(var14) { _fun0006_ip = 142; continue _fun0006 }
 131:
            if(var5) { _fun0006_ip = 142; continue _fun0006 }
 134:
            var21 = var6.tabBarIconUnselected;
            _fun0006_ip = 148; continue _fun0006;
 142:
            var21 = var6.tabBarIconSelected;
 148:
            var9 = _closure1_slot19;
            var7 = {};
            var7['iconSize'] = var11;
            var9 = var9.bind(var4)(var7);
            var1 = var1.bind(var4)();
            var23 = var1.value;
            var19 = var1.showDot;
            var18 = var1.lowPriority;
            var7 = _closure1_slot20;
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
            if(var5) { _fun0006_ip = 247; continue _fun0006 }
 244:
            var12 = var3;
 247:
            _closure2_slot2 = var12;
            var3 = 0;
            var11 = var23 > var3;
            if(var11) { _fun0006_ip = 263; continue _fun0006 }
 260:
            var11 = var19;
 263:
            var7 = _closure1_slot3;
            var5 = var7.useEffect;
            var3 = new Array(2);
            var3[0] = var8;
            var3[1] = var12;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0007_ip = 17; continue _fun0007 }
 13:
                    var2 = undefined;
                    return var2;
 17:
                    var4 = _closure2_slot0;
                    var3 = var4.addListener;
                    var2 = 'tabPress';
                    var1 = function() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var1 = _closure2_slot1;
                            var5 = null;
                            var2 = var5 == var1;
                            var1 = undefined;
                            var3 = undefined;
                            if(var2) { _fun0008_ip = 36; continue _fun0008 }
 20:
                            var4 = _closure2_slot1;
                            var4 = var4.current;
                            var2 = var5 == var4;
                            var3 = var4;
 36:
                            if(var2) { _fun0008_ip = 49; continue _fun0008 }
 39:
                            var2 = var3.play;
                            var2 = var2.bind(var3)();
 49:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var2 = var5.bind(var7)(var2, var3);
            var7 = null;
            if(!var11) { _fun0006_ip = 443; continue _fun0006 }
 305:
            var5 = _closure1_slot13;
            var3 = _closure1_slot4;
            var2 = {};
            var16 = var6.content;
            var8 = new Array(2);
            var8[0] = var16;
            var8[1] = var9;
            var2['style'] = var8;
            var16 = _closure1_slot13;
            var9 = _closure1_slot18;
            var8 = {};
            var8['value'] = var23;
            var8['countA11yLabel'] = var22;
            var8['unread'] = var19;
            var8['lowPriority'] = var18;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var18 = 16;
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
 443:
            var3 = _closure1_slot14;
            var2 = _closure1_slot4;
            if(!(var1 == var12)) { _fun0006_ip = 594; continue _fun0006 }
 458:
            var1 = {};
            var5 = var6.container;
            var1['style'] = var5;
            var9 = _closure1_slot13;
            var8 = _closure1_slot1;
            var16 = _closure1_slot2;
            var5 = 19;
            var5 = var16[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            if(var11) { _fun0006_ip = 504; continue _fun0006 }
 498:
            var16 = new Array(0);
            _fun0006_ip = 515; continue _fun0006;
 504:
            var18 = new Array(1);
            var18[0] = var17;
            var16 = var18;
 515:
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
            _fun0006_ip = 733; continue _fun0006;
 594:
            var5 = {};
            var6 = var6.container;
            var5['style'] = var6;
            var9 = _closure1_slot13;
            var8 = _closure1_slot1;
            var16 = _closure1_slot2;
            var6 = 19;
            var6 = var16[var6];
            var8 = var8.bind(var4)(var6);
            var6 = {};
            if(var11) { _fun0006_ip = 640; continue _fun0006 }
 634:
            var11 = new Array(0);
            _fun0006_ip = 651; continue _fun0006;
 640:
            var16 = new Array(1);
            var16[0] = var17;
            var11 = var16;
 651:
            var6['cutouts'] = var11;
            var11 = _closure1_slot13;
            var10 = {};
            var10['ref'] = var15;
            var15 = 'md';
            var10['size'] = var15;
            var10['color'] = var13;
            var13 = 0.5;
            if(!var14) { _fun0006_ip = 694; continue _fun0006 }
 691:
            var13 = 1;
 694:
            var10['opacity'] = var13;
            var10 = var11.bind(var4)(var12, var10);
            var6['children'] = var10;
            var8 = var9.bind(var4)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var5['children'] = var6;
            var1 = var5;
 733:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['BadgableTabBarIcon'] = var4;
    var2 = function YouIcon(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var2 = arg1;
            var1 = var2.focused;
            var30 = var2.tintColor;
            var19 = var2.navigation;
            var _closure2_slot0 = var19;
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
            var2 = _closure1_slot16;
            var20 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 20;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var7 = var2.bind(var4)();
            var34 = var7;
            if(var34) { _fun0009_ip = 113; continue _fun0009 }
 110:
            var34 = var1;
 113:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 21;
            var3 = var1[var8];
            var10 = var2.bind(var4)(var3);
            var9 = var10.useStateFromStores;
            var3 = _closure1_slot10;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var35 = var9.bind(var10)(var6, var3);
            var6 = _closure1_slot1;
            var3 = 22;
            var3 = var1[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.useName;
            var14 = var3.bind(var6)(var35);
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
            var24 = var3.bind(var6)(var2, var1);
            var26 = null;
            var1 = var26 != var24;
            if(!var1) { _fun0009_ip = 252; continue _fun0009 }
 238:
            var2 = _closure1_slot12;
            var2 = var2.UNKNOWN;
            var1 = var24 !== var2;
 252:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 23;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useIsEligibleForPomelo;
            var6 = var2.bind(var3)();
            var3 = var26 == var35;
            var2 = undefined;
            if(var3) { _fun0009_ip = 297; continue _fun0009 }
 291:
            var2 = var35.avatar;
 297:
            var36 = var26 == var2;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = var9[var8];
            var12 = var3.bind(var4)(var2);
            var11 = var12.useStateFromStores;
            var2 = _closure1_slot8;
            var10 = new Array(1);
            var10[0] = var2;
            var2 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var11.bind(var12)(var10, var2);
            var11 = _closure1_slot3;
            var2 = var11.useRef;
            var17 = var2.bind(var11)(var26);
            var2 = 24;
            var2 = var9[var2];
            var9 = var3.bind(var4)(var2);
            var3 = var9.useGuildTagCoachmark;
            var11 = var26 != var10;
            var2 = null;
            if(!var11) { _fun0009_ip = 392; continue _fun0009 }
 389:
            var2 = var10;
 392:
            var2 = var3.bind(var9)(var17, var2);
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 25;
            var9 = var2[var9];
            var10 = var3.bind(var4)(var9);
            var9 = var10.useVirtualCurrencyOnboardingCoachmark;
            var18 = var9.bind(var10)();
            var12 = _closure1_slot3;
            var11 = var12.useCallback;
            var10 = new Array(1);
            var10[0] = var19;
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
            var16 = var11.bind(var12)(var9, var10);
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
            var37 = var8.bind(var9)(var3, var2);
            _closure2_slot1 = var37;
            var23 = 0.5;
            if(!var34) { _fun0009_ip = 517; continue _fun0009 }
 514:
            var23 = 1;
 517:
            if(var7) { _fun0009_ip = 554; continue _fun0009 }
 520:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 15;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ICON_SIZE;
            var8 = var2.md;
            _fun0009_ip = 558; continue _fun0009;
 554:
            var8 = _closure1_slot15;
 558:
            var3 = _closure1_slot3;
            var2 = var3.useRef;
            var31 = var2.bind(var3)(var26);
            _closure2_slot2 = var31;
            var3 = _closure1_slot19;
            var2 = {};
            var2['iconSize'] = var8;
            var9 = var20.avatarCutout;
            var9 = var9.padding;
            var2['offset'] = var9;
            var2['adjustForYouTab'] = var7;
            var22 = var3.bind(var4)(var2);
            var3 = _closure1_slot20;
            var2 = {};
            var2['iconSize'] = var8;
            var8 = var20.avatarCutout;
            var8 = var8.padding;
            var2['offset'] = var8;
            var38 = 11;
            var2['cutoutRadius'] = var38;
            var12 = 0;
            var2['badgeCount'] = var12;
            var2['isWindowLarge'] = var7;
            var2 = var3.bind(var4)(var2);
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var21 = 27;
            var8 = var3[var21];
            var10 = var9.bind(var4)(var8);
            var8 = var10.useSharedValue;
            var11 = 1;
            var32 = var8.bind(var10)(var11);
            _closure2_slot3 = var32;
            var8 = var3[var21];
            var10 = var9.bind(var4)(var8);
            var8 = var10.useSharedValue;
            var29 = var8.bind(var10)(var12);
            _closure2_slot4 = var29;
            var8 = var3[var21];
            var10 = var9.bind(var4)(var8);
            var8 = var10.useSharedValue;
            var28 = var8.bind(var10)(var11);
            _closure2_slot5 = var28;
            var8 = var3[var21];
            var10 = var9.bind(var4)(var8);
            var8 = var10.useSharedValue;
            var27 = var8.bind(var10)(var11);
            _closure2_slot6 = var27;
            var15 = _closure1_slot3;
            var11 = var15.useCallback;
            var10 = new Array(1);
            var10[0] = var32;
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
            var33 = var11.bind(var15)(var8, var10);
            _closure2_slot7 = var33;
            var15 = _closure1_slot3;
            var11 = var15.useCallback;
            var10 = new Array(1);
            var10[0] = var29;
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
            var25 = var11.bind(var15)(var8, var10);
            _closure2_slot8 = var25;
            var15 = _closure1_slot3;
            var11 = var15.useCallback;
            var10 = new Array(2);
            var10[0] = var28;
            var10[1] = var27;
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
            var8 = var11.bind(var15)(var8, var10);
            _closure2_slot9 = var8;
            var15 = _closure1_slot3;
            var11 = var15.useCallback;
            var10 = new Array(4);
            var10[0] = var37;
            var10[1] = var33;
            var10[2] = var25;
            var10[3] = var8;
            var8 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0010_ip = 36; continue _fun0010 }
 10:
                    var3 = _closure2_slot7;
                    var2 = undefined;
                    var3 = var3.bind(var2)();
                    var3 = _closure2_slot8;
                    var3 = var3.bind(var2)();
                    var1 = _closure2_slot9;
                    var1 = var1.bind(var2)();
 36:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var11.bind(var15)(var8, var10);
            _closure2_slot10 = var15;
            var8 = var3[var21];
            var11 = var9.bind(var4)(var8);
            var10 = var11.useAnimatedStyle;
            var8 = function M() {
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
            var25 = {};
            var25['scaleDownAnimation'] = var32;
            var25['rotationAnimation'] = var29;
            var25['wobbleAnimationX'] = var28;
            var25['wobbleAnimationY'] = var27;
            var8['__closure'] = var25;
            var25 = 3024112617373.0;
            var8['__workletHash'] = var25;
            var25 = _closure1_slot17;
            var8['__initData'] = var25;
            var37 = var10.bind(var11)(var8);
            var11 = _closure1_slot3;
            var10 = var11.useEffect;
            var8 = new Array(2);
            var8[0] = var19;
            var8[1] = var15;
            var5 = function() {
                var4 = _closure2_slot0;
                var3 = var4.addListener;
                var2 = 'tabPress';
                var1 = function() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var1 = _closure2_slot2;
                        var6 = null;
                        var3 = var6 == var1;
                        var1 = undefined;
                        var4 = undefined;
                        if(var3) { _fun0011_ip = 36; continue _fun0011 }
 20:
                        var5 = _closure2_slot2;
                        var5 = var5.current;
                        var3 = var6 == var5;
                        var4 = var5;
 36:
                        if(var3) { _fun0011_ip = 49; continue _fun0011 }
 39:
                        var3 = var4.play;
                        var3 = var3.bind(var4)();
 49:
                        var2 = _closure2_slot10;
                        var2 = var2.bind(var1)();
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var5 = var10.bind(var11)(var5, var8);
            var11 = new Array(0);
            var5 = var3[var38];
            var8 = var9.bind(var4)(var5);
            var5 = var8.getStatusSize;
            var3 = var3[var38];
            var3 = var9.bind(var4)(var3);
            var3 = var3.AvatarSizes;
            var3 = var3.TABS_22;
            var25 = var5.bind(var8)(var3);
            if(!var1) { _fun0009_ip = 1101; continue _fun0009 }
 1098:
            var1 = !var6;
 1101:
            if(!var1) { _fun0009_ip = 1114; continue _fun0009 }
 1104:
            var1 = var11.push;
            var1 = var1.bind(var11)(var2);
 1114:
            var3 = _closure1_slot14;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = undefined;
            if(!var7) { _fun0009_ip = 1135; continue _fun0009 }
 1129:
            var5 = var20.containerTablet;
 1135:
            var1['style'] = var5;
            var9 = _closure1_slot14;
            var8 = _closure1_slot4;
            var5 = {};
            var10 = var20.container;
            var5['style'] = var10;
            var5['ref'] = var17;
            var19 = _closure1_slot13;
            var15 = _closure1_slot1;
            var27 = _closure1_slot2;
            var10 = 19;
            var10 = var27[var10];
            var15 = var15.bind(var4)(var10);
            var10 = {};
            var10['cutouts'] = var11;
            var27 = var20.avatarCutout;
            var10['style'] = var27;
            var29 = _closure1_slot13;
            if(var36) { _fun0009_ip = 1452; continue _fun0009 }
 1213:
            var32 = _closure1_slot1;
            var28 = _closure1_slot2;
            var21 = var28[var21];
            var21 = var32.bind(var4)(var21);
            var27 = var21.View;
            var21 = {};
            var33 = new Array(1);
            var33[0] = var37;
            var21['style'] = var33;
            var33 = _closure1_slot13;
            var28 = var28[var38];
            var32 = var32.bind(var4)(var28);
            var28 = {};
            var28['user'] = var35;
            var28['guildId'] = var4;
            if(var34) { _fun0009_ip = 1283; continue _fun0009 }
 1275:
            var34 = var20.tabBarIconUnselected;
            _fun0009_ip = 1303; continue _fun0009;
 1283:
            if(var7) { _fun0009_ip = 1294; continue _fun0009 }
 1286:
            var37 = var20.tabBarIconSelected;
            _fun0009_ip = 1300; continue _fun0009;
 1294:
            var37 = var20.avatarTablet;
 1300:
            var34 = var37;
 1303:
            var28['style'] = var34;
            var34 = undefined;
            if(!var36) { _fun0009_ip = 1322; continue _fun0009 }
 1312:
            var37 = {};
            var37['tintColor'] = var30;
            var34 = var37;
 1322:
            var28['avatarStyle'] = var34;
            var37 = _closure1_slot0;
            var34 = _closure1_slot2;
            var34 = var34[var38];
            var34 = var37.bind(var4)(var34);
            var37 = var34.AvatarSizes;
            if(var7) { _fun0009_ip = 1361; continue _fun0009 }
 1353:
            var34 = var37.TABS_22;
            _fun0009_ip = 1367; continue _fun0009;
 1361:
            var34 = var37.NORMAL;
 1367:
            var28['size'] = var34;
            var34 = false;
            var28['animate'] = var34;
            var34 = null;
            if(!var36) { _fun0009_ip = 1403; continue _fun0009 }
 1383:
            var37 = _closure1_slot1;
            var38 = _closure1_slot2;
            var36 = 31;
            var36 = var38[var36];
            var34 = var37.bind(var4)(var36);
 1403:
            var28['source'] = var34;
            var34 = true;
            var28['needsOffscreenAlphaCompositing'] = var34;
            var36 = var26 == var35;
            var34 = undefined;
            if(var36) { _fun0009_ip = 1429; continue _fun0009 }
 1423:
            var34 = var35.avatarDecoration;
 1429:
            var28['avatarDecoration'] = var34;
            var28 = var33.bind(var4)(var32, var28);
            var21['children'] = var28;
            var21 = var29.bind(var4)(var27, var21);
            _fun0009_ip = 1513; continue _fun0009;
 1452:
            var28 = _closure1_slot0;
            var32 = _closure1_slot2;
            var27 = 30;
            var27 = var32[var27];
            var27 = var28.bind(var4)(var27);
            var28 = var27.YouTabLottie;
            var27 = {};
            var27['ref'] = var31;
            var31 = 'lg';
            if(var7) { _fun0009_ip = 1495; continue _fun0009 }
 1491:
            var31 = 'md';
 1495:
            var27['size'] = var31;
            var27['color'] = var30;
            var27['opacity'] = var23;
            var21 = var29.bind(var4)(var28, var27);
 1513:
            var10['children'] = var21;
            var15 = var19.bind(var4)(var15, var10);
            var10 = new Array(2);
            var10[0] = var15;
            var11 = var11.length;
            var11 = var11 > var12;
            if(!var11) { _fun0009_ip = 1662; continue _fun0009 }
 1543:
            var19 = _closure1_slot13;
            var15 = _closure1_slot4;
            var12 = {};
            var27 = var20.content;
            var21 = new Array(3);
            var21[0] = var27;
            var21[1] = var22;
            var22 = {};
            var22['opacity'] = var23;
            var21[2] = var22;
            var12['style'] = var21;
            var23 = _closure1_slot13;
            var22 = _closure1_slot1;
            var27 = _closure1_slot2;
            var21 = 32;
            var21 = var27[var21];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            if(!(var26 == var25)) { _fun0009_ip = 1624; continue _fun0009 }
 1614:
            var26 = _closure1_slot11;
            var25 = var26.MEDIUM;
 1624:
            var21['size'] = var25;
            var21['status'] = var24;
            var24 = {};
            var25 = 2;
            var24['margin'] = var25;
            var21['style'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            var12['children'] = var21;
            var11 = var19.bind(var4)(var15, var12);
 1662:
            var10[1] = var11;
            var5['children'] = var10;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(5);
            var5[0] = var8;
            if(!var6) { _fun0009_ip = 1763; continue _fun0009 }
 1687:
            var10 = _closure1_slot13;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var8 = 33;
            var8 = var15[var8];
            var9 = var12.bind(var4)(var8);
            var8 = {};
            var11 = 14;
            var11 = var15[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.colors;
            var11 = var11.STATUS_WARNING;
            var8['themedColor'] = var11;
            var11 = 34;
            var11 = var15[var11];
            var11 = var12.bind(var4)(var11);
            var8['source'] = var11;
            var6 = var10.bind(var4)(var9, var8);
 1763:
            var5[1] = var6;
            var9 = _closure1_slot13;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 35;
            var6 = var10[var6];
            var6 = var8.bind(var4)(var6);
            var8 = var6.MobileTrialUserSettingsAvatarBadge;
            var6 = {};
            var6 = var9.bind(var4)(var8, var6);
            var5[2] = var6;
            var6 = undefined;
            if(!var7) { _fun0009_ip = 1897; continue _fun0009 }
 1814:
            var9 = _closure1_slot13;
            var8 = _closure1_slot4;
            var7 = {};
            var10 = var20.usernameTablet;
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
 1897:
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
            if(!var14) { _fun0009_ip = 1993; continue _fun0009 }
 1967:
            var19 = _closure1_slot13;
            var15 = _closure1_slot4;
            var12 = {};
            var20 = var20.dimOverlay;
            var12['style'] = var20;
            var14 = var19.bind(var4)(var15, var12);
 1993:
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