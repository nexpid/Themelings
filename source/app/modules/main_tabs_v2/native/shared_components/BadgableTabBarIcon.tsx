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
            var1 = _closure1_slot15;
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
            var4 = _closure1_slot12;
            var3 = _closure1_slot4;
            var2 = {};
            var2['accessibilityLabel'] = var6;
            var8 = _closure1_slot12;
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
            _fun0001_ip = 309; continue _fun0001;
 173:
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
 309:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var _closure1_slot18 = var1;
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
    var _closure1_slot19 = var1;
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
    var4 = var4.Image;
    var _closure1_slot5 = var4;
    var16 = 2;
    var4 = var6[var16];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var15 = var4.BADGE_SIZE;
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
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
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
    var _closure1_slot14 = var10;
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
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = 'function BadgableTabBarIconTsx1(){const{scaleDownAnimation,rotationAnimation,wobbleAnimationX,wobbleAnimationY}=this.__closure;return{transform:[{scale:scaleDownAnimation.get()},{rotate:rotationAnimation.get()+"deg"},{scaleX:wobbleAnimationX.get()},{scaleY:wobbleAnimationY.get()}]};}';
    var4['code'] = var7;
    var _closure1_slot16 = var4;
    var4 = 35;
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
            var5 = _closure1_slot15;
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
            var9 = _closure1_slot18;
            var7 = {};
            var7['iconSize'] = var11;
            var9 = var9.bind(var4)(var7);
            var1 = var1.bind(var4)();
            var23 = var1.value;
            var19 = var1.showDot;
            var18 = var1.lowPriority;
            var7 = _closure1_slot19;
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
            var5 = _closure1_slot12;
            var3 = _closure1_slot4;
            var2 = {};
            var16 = var6.content;
            var8 = new Array(2);
            var8[0] = var16;
            var8[1] = var9;
            var2['style'] = var8;
            var16 = _closure1_slot12;
            var9 = _closure1_slot17;
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
            var3 = _closure1_slot13;
            var2 = _closure1_slot4;
            if(!(var1 == var12)) { _fun0006_ip = 594; continue _fun0006 }
 458:
            var1 = {};
            var5 = var6.container;
            var1['style'] = var5;
            var9 = _closure1_slot12;
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
            var19 = _closure1_slot12;
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
            var9 = _closure1_slot12;
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
            var11 = _closure1_slot12;
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
            var27 = var2.tintColor;
            var22 = var2.navigation;
            var _closure2_slot0 = var22;
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
            var2 = _closure1_slot15;
            var11 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 20;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var7 = var2.bind(var4)();
            var31 = var7;
            if(var31) { _fun0009_ip = 113; continue _fun0009 }
 110:
            var31 = var1;
 113:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 21;
            var3 = var1[var8];
            var12 = var2.bind(var4)(var3);
            var9 = var12.useStateFromStores;
            var3 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var32 = var9.bind(var12)(var6, var3);
            var6 = _closure1_slot1;
            var3 = 22;
            var3 = var1[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.useName;
            var13 = var3.bind(var6)(var32);
            var1 = var1[var8];
            var6 = var2.bind(var4)(var1);
            var3 = var6.useStateFromStores;
            var1 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var21 = var3.bind(var6)(var2, var1);
            var23 = null;
            var1 = var23 != var21;
            if(!var1) { _fun0009_ip = 252; continue _fun0009 }
 238:
            var2 = _closure1_slot11;
            var2 = var2.UNKNOWN;
            var1 = var21 !== var2;
 252:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 23;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useIsEligibleForPomelo;
            var6 = var2.bind(var3)();
            var3 = var23 == var32;
            var2 = undefined;
            if(var3) { _fun0009_ip = 297; continue _fun0009 }
 291:
            var2 = var32.avatar;
 297:
            var33 = var23 == var2;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = var9[var8];
            var15 = var3.bind(var4)(var2);
            var14 = var15.useStateFromStores;
            var2 = _closure1_slot7;
            var12 = new Array(1);
            var12[0] = var2;
            var2 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var14 = var14.bind(var15)(var12, var2);
            var12 = _closure1_slot3;
            var2 = var12.useRef;
            var12 = var2.bind(var12)(var23);
            var2 = 24;
            var2 = var9[var2];
            var9 = var3.bind(var4)(var2);
            var3 = var9.useGuildTagCoachmark;
            var15 = var23 != var14;
            var2 = null;
            if(!var15) { _fun0009_ip = 392; continue _fun0009 }
 389:
            var2 = var14;
 392:
            var2 = var3.bind(var9)(var12, var2);
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var9 = var3.bind(var4)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var36 = var8.bind(var9)(var3, var2);
            _closure2_slot1 = var36;
            var20 = 0.5;
            if(!var31) { _fun0009_ip = 465; continue _fun0009 }
 462:
            var20 = 1;
 465:
            if(var7) { _fun0009_ip = 502; continue _fun0009 }
 468:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 15;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ICON_SIZE;
            var8 = var2.md;
            _fun0009_ip = 506; continue _fun0009;
 502:
            var8 = _closure1_slot14;
 506:
            var3 = _closure1_slot3;
            var2 = var3.useRef;
            var28 = var2.bind(var3)(var23);
            _closure2_slot2 = var28;
            var3 = _closure1_slot18;
            var2 = {};
            var2['iconSize'] = var8;
            var9 = var11.avatarCutout;
            var9 = var9.padding;
            var2['offset'] = var9;
            var2['adjustForYouTab'] = var7;
            var19 = var3.bind(var4)(var2);
            var3 = _closure1_slot19;
            var2 = {};
            var2['iconSize'] = var8;
            var8 = var11.avatarCutout;
            var8 = var8.padding;
            var2['offset'] = var8;
            var35 = 11;
            var2['cutoutRadius'] = var35;
            var15 = 0;
            var2['badgeCount'] = var15;
            var2['isWindowLarge'] = var7;
            var2 = var3.bind(var4)(var2);
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var18 = 25;
            var8 = var3[var18];
            var14 = var9.bind(var4)(var8);
            var8 = var14.useSharedValue;
            var16 = 1;
            var30 = var8.bind(var14)(var16);
            _closure2_slot3 = var30;
            var8 = var3[var18];
            var14 = var9.bind(var4)(var8);
            var8 = var14.useSharedValue;
            var29 = var8.bind(var14)(var15);
            _closure2_slot4 = var29;
            var8 = var3[var18];
            var14 = var9.bind(var4)(var8);
            var8 = var14.useSharedValue;
            var26 = var8.bind(var14)(var16);
            _closure2_slot5 = var26;
            var8 = var3[var18];
            var14 = var9.bind(var4)(var8);
            var8 = var14.useSharedValue;
            var25 = var8.bind(var14)(var16);
            _closure2_slot6 = var25;
            var17 = _closure1_slot3;
            var16 = var17.useCallback;
            var14 = new Array(1);
            var14[0] = var30;
            var8 = function() {
                var10 = {};
                var1 = 0.13;
                var10['mass'] = var1;
                var4 = _closure2_slot3;
                var3 = var4.set;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 25;
                var2 = var9[var1];
                var1 = undefined;
                var7 = var8.bind(var1)(var2);
                var6 = var7.withSequence;
                var2 = 26;
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
            var34 = var16.bind(var17)(var8, var14);
            _closure2_slot7 = var34;
            var17 = _closure1_slot3;
            var16 = var17.useCallback;
            var14 = new Array(1);
            var14[0] = var29;
            var8 = function() {
                var4 = _closure2_slot4;
                var3 = var4.set;
                var12 = _closure1_slot0;
                var15 = _closure1_slot2;
                var2 = 25;
                var5 = var15[var2];
                var1 = undefined;
                var7 = var12.bind(var1)(var5);
                var6 = var7.withDelay;
                var2 = var15[var2];
                var11 = var12.bind(var1)(var2);
                var10 = var11.withSequence;
                var13 = 26;
                var2 = var15[var13];
                var14 = var12.bind(var1)(var2);
                var9 = var14.withSpring;
                var2 = 27;
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
            var24 = var16.bind(var17)(var8, var14);
            _closure2_slot8 = var24;
            var17 = _closure1_slot3;
            var16 = var17.useCallback;
            var14 = new Array(2);
            var14[0] = var26;
            var14[1] = var25;
            var8 = function() {
                var6 = _closure2_slot5;
                var5 = var6.set;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var8 = 25;
                var2 = var20[var8];
                var1 = undefined;
                var10 = var19.bind(var1)(var2);
                var9 = var10.withDelay;
                var2 = var20[var8];
                var22 = var19.bind(var1)(var2);
                var21 = var22.withSequence;
                var16 = 26;
                var2 = var20[var16];
                var12 = var19.bind(var1)(var2);
                var11 = var12.withSpring;
                var2 = 27;
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
            var8 = var16.bind(var17)(var8, var14);
            _closure2_slot9 = var8;
            var17 = _closure1_slot3;
            var16 = var17.useCallback;
            var14 = new Array(4);
            var14[0] = var36;
            var14[1] = var34;
            var14[2] = var24;
            var14[3] = var8;
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
            var17 = var16.bind(var17)(var8, var14);
            _closure2_slot10 = var17;
            var8 = var3[var18];
            var16 = var9.bind(var4)(var8);
            var14 = var16.useAnimatedStyle;
            var8 = function D() {
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
            var8['__closure'] = var24;
            var24 = 3024112617373.0;
            var8['__workletHash'] = var24;
            var24 = _closure1_slot16;
            var8['__initData'] = var24;
            var34 = var14.bind(var16)(var8);
            var16 = _closure1_slot3;
            var14 = var16.useEffect;
            var8 = new Array(2);
            var8[0] = var22;
            var8[1] = var17;
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
            var5 = var14.bind(var16)(var5, var8);
            var14 = new Array(0);
            var5 = var3[var35];
            var8 = var9.bind(var4)(var5);
            var5 = var8.getStatusSize;
            var3 = var3[var35];
            var3 = var9.bind(var4)(var3);
            var3 = var3.AvatarSizes;
            var3 = var3.TABS_22;
            var22 = var5.bind(var8)(var3);
            if(!var1) { _fun0009_ip = 1045; continue _fun0009 }
 1042:
            var1 = !var6;
 1045:
            if(!var1) { _fun0009_ip = 1058; continue _fun0009 }
 1048:
            var1 = var14.push;
            var1 = var1.bind(var14)(var2);
 1058:
            var3 = _closure1_slot13;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = undefined;
            if(!var7) { _fun0009_ip = 1079; continue _fun0009 }
 1073:
            var5 = var11.containerTablet;
 1079:
            var1['style'] = var5;
            var9 = _closure1_slot13;
            var8 = _closure1_slot4;
            var5 = {};
            var16 = var11.container;
            var5['style'] = var16;
            var5['ref'] = var12;
            var17 = _closure1_slot12;
            var16 = _closure1_slot1;
            var24 = _closure1_slot2;
            var12 = 19;
            var12 = var24[var12];
            var16 = var16.bind(var4)(var12);
            var12 = {};
            var12['cutouts'] = var14;
            var24 = var11.avatarCutout;
            var12['style'] = var24;
            var26 = _closure1_slot12;
            if(var33) { _fun0009_ip = 1396; continue _fun0009 }
 1157:
            var29 = _closure1_slot1;
            var25 = _closure1_slot2;
            var18 = var25[var18];
            var18 = var29.bind(var4)(var18);
            var24 = var18.View;
            var18 = {};
            var30 = new Array(1);
            var30[0] = var34;
            var18['style'] = var30;
            var30 = _closure1_slot12;
            var25 = var25[var35];
            var29 = var29.bind(var4)(var25);
            var25 = {};
            var25['user'] = var32;
            var25['guildId'] = var4;
            if(var31) { _fun0009_ip = 1227; continue _fun0009 }
 1219:
            var31 = var11.tabBarIconUnselected;
            _fun0009_ip = 1247; continue _fun0009;
 1227:
            if(var7) { _fun0009_ip = 1238; continue _fun0009 }
 1230:
            var34 = var11.tabBarIconSelected;
            _fun0009_ip = 1244; continue _fun0009;
 1238:
            var34 = var11.avatarTablet;
 1244:
            var31 = var34;
 1247:
            var25['style'] = var31;
            var31 = undefined;
            if(!var33) { _fun0009_ip = 1266; continue _fun0009 }
 1256:
            var34 = {};
            var34['tintColor'] = var27;
            var31 = var34;
 1266:
            var25['avatarStyle'] = var31;
            var34 = _closure1_slot0;
            var31 = _closure1_slot2;
            var31 = var31[var35];
            var31 = var34.bind(var4)(var31);
            var34 = var31.AvatarSizes;
            if(var7) { _fun0009_ip = 1305; continue _fun0009 }
 1297:
            var31 = var34.TABS_22;
            _fun0009_ip = 1311; continue _fun0009;
 1305:
            var31 = var34.NORMAL;
 1311:
            var25['size'] = var31;
            var31 = false;
            var25['animate'] = var31;
            var31 = null;
            if(!var33) { _fun0009_ip = 1347; continue _fun0009 }
 1327:
            var34 = _closure1_slot1;
            var35 = _closure1_slot2;
            var33 = 29;
            var33 = var35[var33];
            var31 = var34.bind(var4)(var33);
 1347:
            var25['source'] = var31;
            var31 = true;
            var25['needsOffscreenAlphaCompositing'] = var31;
            var33 = var23 == var32;
            var31 = undefined;
            if(var33) { _fun0009_ip = 1373; continue _fun0009 }
 1367:
            var31 = var32.avatarDecoration;
 1373:
            var25['avatarDecoration'] = var31;
            var25 = var30.bind(var4)(var29, var25);
            var18['children'] = var25;
            var18 = var26.bind(var4)(var24, var18);
            _fun0009_ip = 1457; continue _fun0009;
 1396:
            var25 = _closure1_slot0;
            var29 = _closure1_slot2;
            var24 = 28;
            var24 = var29[var24];
            var24 = var25.bind(var4)(var24);
            var25 = var24.YouTabLottie;
            var24 = {};
            var24['ref'] = var28;
            var28 = 'lg';
            if(var7) { _fun0009_ip = 1439; continue _fun0009 }
 1435:
            var28 = 'md';
 1439:
            var24['size'] = var28;
            var24['color'] = var27;
            var24['opacity'] = var20;
            var18 = var26.bind(var4)(var25, var24);
 1457:
            var12['children'] = var18;
            var16 = var17.bind(var4)(var16, var12);
            var12 = new Array(2);
            var12[0] = var16;
            var14 = var14.length;
            var14 = var14 > var15;
            if(!var14) { _fun0009_ip = 1606; continue _fun0009 }
 1487:
            var17 = _closure1_slot12;
            var16 = _closure1_slot4;
            var15 = {};
            var24 = var11.content;
            var18 = new Array(3);
            var18[0] = var24;
            var18[1] = var19;
            var19 = {};
            var19['opacity'] = var20;
            var18[2] = var19;
            var15['style'] = var18;
            var20 = _closure1_slot12;
            var19 = _closure1_slot1;
            var24 = _closure1_slot2;
            var18 = 30;
            var18 = var24[var18];
            var19 = var19.bind(var4)(var18);
            var18 = {};
            if(!(var23 == var22)) { _fun0009_ip = 1568; continue _fun0009 }
 1558:
            var23 = _closure1_slot10;
            var22 = var23.MEDIUM;
 1568:
            var18['size'] = var22;
            var18['status'] = var21;
            var21 = {};
            var22 = 2;
            var21['margin'] = var22;
            var18['style'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var15['children'] = var18;
            var14 = var17.bind(var4)(var16, var15);
 1606:
            var12[1] = var14;
            var5['children'] = var12;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(4);
            var5[0] = var8;
            if(!var6) { _fun0009_ip = 1707; continue _fun0009 }
 1631:
            var12 = _closure1_slot12;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var8 = 31;
            var8 = var16[var8];
            var9 = var15.bind(var4)(var8);
            var8 = {};
            var14 = 14;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.colors;
            var14 = var14.STATUS_WARNING;
            var8['themedColor'] = var14;
            var14 = 32;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var8['source'] = var14;
            var6 = var12.bind(var4)(var9, var8);
 1707:
            var5[1] = var6;
            var9 = _closure1_slot12;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 33;
            var6 = var12[var6];
            var6 = var8.bind(var4)(var6);
            var8 = var6.MobileTrialUserSettingsAvatarBadge;
            var6 = {};
            var6 = var9.bind(var4)(var8, var6);
            var5[2] = var6;
            var6 = undefined;
            if(!var7) { _fun0009_ip = 1841; continue _fun0009 }
 1758:
            var9 = _closure1_slot12;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = var11.usernameTablet;
            var7['style'] = var11;
            var12 = _closure1_slot12;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 34;
            var10 = var14[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-md/semibold', 'lineClamp': 1, 'color': 'interactive-active', 'maxFontSizeMultiplier': 2};
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 1841:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['YouIcon'] = var2;
    return var1;
})();