// app/modules/guilds_bar/native/GuildsBarItemIconPressable.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var20 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var20;
    var _closure1_slot2 = var7;
    var1 = function GuildsBarItemIconPressableWithGuildIcons(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var23 = var3.backgroundIcons;
            var2 = var3.isExpanded;
            var12 = var3.selected;
            var _closure2_slot0 = var12;
            var5 = var3.onPress;
            var8 = var3.onLayout;
            var11 = var3.accessibilityLabel;
            var15 = var3.style;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var3 = _closure1_slot26;
            var9 = var3.bind(var4)();
            var _closure2_slot1 = var9;
            var6 = _closure1_slot4;
            var3 = var6.useRef;
            var27 = 0;
            var3 = var3.bind(var6)(var27);
            var _closure2_slot2 = var3;
            var7 = _closure1_slot4;
            var6 = var7.useState;
            var3 = false;
            var6 = var6.bind(var7)(var3);
            var3 = _closure1_slot3;
            var7 = 2;
            var6 = var3.bind(var4)(var6, var7);
            var3 = var6[var27];
            var22 = 1;
            var6 = var6[var22];
            var _closure2_slot3 = var6;
            var16 = _closure1_slot4;
            var14 = var16.useCallback;
            var10 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var4 = var2.current;
                    var3 = 1;
                    var3 = var4 + var3;
                    var2['current'] = var3;
                    var3 = var2.current;
                    var2 = 2;
                    if(!(var3 >= var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot3;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = new Array(0);
            var21 = var14.bind(var16)(var10, var6);
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3;
case 4:
            _closure2_slot4 = var2;
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 5;
            var3 = var3[var6];
            var14 = var10.bind(var4)(var3);
            var10 = var14.useSharedValue;
            var3 = 0;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var22;
case 6:
            var19 = var10.bind(var14)(var3);
            _closure2_slot5 = var19;
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var14 = var10.bind(var4)(var3);
            var10 = var14.useSharedValue;
            var3 = 0;
            if(!var12) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var22;
case 8:
            var16 = var10.bind(var14)(var3);
            _closure2_slot6 = var16;
            var14 = _closure1_slot4;
            var10 = var14.useEffect;
            var3 = new Array(4);
            var3[0] = var2;
            var3[1] = var19;
            var3[2] = var12;
            var3[3] = var16;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = _closure2_slot5;
                    var2 = var5.set;
                    var6 = _closure2_slot4;
                    var1 = 0;
                    if(!var6) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var1 = 1;
case 10:
                    var1 = var2.bind(var5)(var1);
                    var2 = _closure2_slot6;
                    var1 = var2.set;
                    var4 = _closure2_slot0;
                    var3 = 0;
                    if(!var4) { _fun0003_ip = 2; continue _fun0003 }
case 12:
                    var3 = 1;
case 2:
                    var1 = var1.bind(var2)(var3);
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var10.bind(var14)(var2, var3);
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = var17[var6];
            var10 = var18.bind(var4)(var2);
            var3 = var10.useAnimatedStyle;
            var2 = function q() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var9 = 0;
                    var5 = var9 !== var1;
                    var2 = _closure2_slot6;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var6 = var9 !== var1;
                    if(var5) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    if(var6) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var14 = _closure1_slot21;
                    _fun0004_ip = 17; continue _fun0004;
case 15:
                    var14 = _closure1_slot6;
case 17:
                    _fun0004_ip = 18; continue _fun0004;
case 13:
                    var14 = _closure1_slot15;
case 18:
                    var1 = {};
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 9;
                    var7 = var7[var4];
                    var10 = undefined;
                    var12 = var8.bind(var10)(var7);
                    var11 = var12.withTiming;
                    if(var5) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var8 = _closure1_slot18;
                    _fun0004_ip = 21; continue _fun0004;
case 19:
                    var8 = _closure1_slot14;
case 21:
                    var7 = _closure1_slot22;
                    var7 = var11.bind(var12)(var8, var7);
                    var1['width'] = var7;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var4];
                    var12 = var8.bind(var10)(var7);
                    var11 = var12.withTiming;
                    if(var5) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var8 = _closure1_slot18;
                    _fun0004_ip = 24; continue _fun0004;
case 22:
                    var8 = _closure1_slot14;
case 24:
                    var7 = _closure1_slot22;
                    var7 = var11.bind(var12)(var8, var7);
                    var1['height'] = var7;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var11 = var7[var4];
                    var13 = var8.bind(var10)(var11);
                    var12 = var13.withTiming;
                    var11 = _closure1_slot22;
                    var11 = var12.bind(var13)(var14, var11);
                    var1['borderRadius'] = var11;
                    var7 = var7[var4];
                    var12 = var8.bind(var10)(var7);
                    var11 = var12.withTiming;
                    if(var5) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var8 = _closure1_slot19;
                    _fun0004_ip = 27; continue _fun0004;
case 25:
                    var8 = _closure1_slot16;
case 27:
                    var7 = _closure1_slot22;
                    var7 = var11.bind(var12)(var8, var7);
                    var1['left'] = var7;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var4];
                    var11 = var8.bind(var10)(var7);
                    var8 = var11.withTiming;
                    if(var5) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var7 = _closure1_slot20;
                    _fun0004_ip = 30; continue _fun0004;
case 28:
                    var7 = _closure1_slot17;
case 30:
                    var5 = _closure1_slot22;
                    var5 = var8.bind(var11)(var7, var5);
                    var1['top'] = var5;
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = var11[var4];
                    var5 = var8.bind(var10)(var4);
                    var4 = var5.withTiming;
                    var7 = 5;
                    var7 = var11[var7];
                    var8 = var8.bind(var10)(var7);
                    var7 = var8.interpolateColor;
                    var9 = 0;
                    if(!var6) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var9 = 1;
case 31:
                    var3 = _closure2_slot1;
                    var6 = var3.newIconInactive;
                    var10 = var6.backgroundColor;
                    var6 = new Array(2);
                    var6[0] = var10;
                    var3 = var3.newIconActive;
                    var3 = var3.backgroundColor;
                    var6[1] = var3;
                    var3 = [0, 1];
                    var3 = var7.bind(var8)(var9, var3, var6);
                    var2 = _closure1_slot22;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['backgroundColor'] = var2;
                    return var1;
                }
            };
            var14 = {};
            var14['isExpandedSV'] = var19;
            var14['isSelectedSV'] = var16;
            var16 = _closure1_slot15;
            var14['OVERLAY_BORDER_RADIUS'] = var16;
            var16 = _closure1_slot6;
            var14['GUILD_ITEM_SELECTED_BORDER_RADIUS'] = var16;
            var16 = _closure1_slot21;
            var14['OVERLAY_COLLAPSED_BORDER_RADIUS'] = var16;
            var16 = 9;
            var20 = var17[var16];
            var20 = var18.bind(var4)(var20);
            var20 = var20.withTiming;
            var14['withTiming'] = var20;
            var20 = _closure1_slot14;
            var14['OVERLAY_ICON_SIZE'] = var20;
            var20 = _closure1_slot18;
            var14['OVERLAY_COLLAPSED_SIZE'] = var20;
            var20 = _closure1_slot22;
            var14['OVERLAY_TIMING'] = var20;
            var20 = _closure1_slot16;
            var14['OVERLAY_ICON_OFFSET_X'] = var20;
            var20 = _closure1_slot19;
            var14['OVERLAY_COLLAPSED_LEFT'] = var20;
            var20 = _closure1_slot17;
            var14['OVERLAY_ICON_OFFSET_Y'] = var20;
            var20 = _closure1_slot20;
            var14['OVERLAY_COLLAPSED_TOP'] = var20;
            var20 = var17[var6];
            var20 = var18.bind(var4)(var20);
            var20 = var20.interpolateColor;
            var14['interpolateColor'] = var20;
            var14['styles'] = var9;
            var2['__closure'] = var14;
            var14 = 8399089467740.0;
            var2['__workletHash'] = var14;
            var14 = _closure1_slot27;
            var2['__initData'] = var14;
            var10 = var3.bind(var10)(var2);
            var2 = var17[var6];
            var14 = var18.bind(var4)(var2);
            var3 = var14.useAnimatedStyle;
            var2 = function J() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var7 = 0;
                    var8 = var7 !== var1;
                    var1 = {};
                    var3 = {};
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var10 = 9;
                    var2 = var2[var10];
                    var9 = undefined;
                    var11 = var5.bind(var9)(var2);
                    var6 = var11.withTiming;
                    var5 = 0;
                    if(var8) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                    var12 = _closure1_slot12;
                    var2 = 2;
                    var5 = var12 / var2;
case 33:
                    var2 = _closure1_slot23;
                    var2 = var6.bind(var11)(var5, var2);
                    var3['translateX'] = var2;
                    var2 = new Array(4);
                    var2[0] = var3;
                    var3 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var10];
                    var12 = var6.bind(var9)(var5);
                    var11 = var12.withTiming;
                    var6 = 0;
                    if(var8) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                    var13 = _closure1_slot12;
                    var5 = 2;
                    var6 = var13 / var5;
case 35:
                    var5 = _closure1_slot23;
                    var5 = var11.bind(var12)(var6, var5);
                    var3['translateY'] = var5;
                    var2[1] = var3;
                    var3 = {};
                    var5 = '-8deg';
                    var3['rotate'] = var5;
                    var2[2] = var3;
                    var3 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var10];
                    var6 = var6.bind(var9)(var5);
                    var5 = var6.withTiming;
                    var7 = 0;
                    if(!var8) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                    var7 = 1;
case 37:
                    var4 = _closure1_slot23;
                    var4 = var5.bind(var6)(var7, var4);
                    var3['scale'] = var4;
                    var2[3] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var20 = {};
            var20['isExpandedSV'] = var19;
            var24 = var17[var16];
            var24 = var18.bind(var4)(var24);
            var24 = var24.withTiming;
            var20['withTiming'] = var24;
            var24 = _closure1_slot12;
            var20['BG_LARGE_ICON_SIZE'] = var24;
            var24 = _closure1_slot23;
            var20['GUILD_ICON_TIMING'] = var24;
            var24 = -8;
            var20['BG_LARGE_ICON_ROTATION_DEGREES'] = var24;
            var2['__closure'] = var20;
            var20 = 16484002406012.0;
            var2['__workletHash'] = var20;
            var20 = _closure1_slot28;
            var2['__initData'] = var20;
            var29 = var3.bind(var14)(var2);
            var2 = var17[var6];
            var3 = var18.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function Q() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var7 = 0;
                    var8 = var7 !== var1;
                    var1 = {};
                    var3 = {};
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var10 = 9;
                    var2 = var2[var10];
                    var9 = undefined;
                    var11 = var5.bind(var9)(var2);
                    var6 = var11.withTiming;
                    var5 = 0;
                    if(var8) { _fun0006_ip = 39; continue _fun0006 }
case 34:
                    var2 = _closure1_slot13;
                    var12 = -var2;
                    var2 = 2;
                    var5 = var12 / var2;
case 39:
                    var2 = _closure1_slot23;
                    var2 = var6.bind(var11)(var5, var2);
                    var3['translateX'] = var2;
                    var2 = new Array(4);
                    var2[0] = var3;
                    var3 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var10];
                    var12 = var6.bind(var9)(var5);
                    var11 = var12.withTiming;
                    var6 = 0;
                    if(var8) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                    var13 = _closure1_slot13;
                    var5 = 2;
                    var6 = var13 / var5;
case 40:
                    var5 = _closure1_slot23;
                    var5 = var11.bind(var12)(var6, var5);
                    var3['translateY'] = var5;
                    var2[1] = var3;
                    var3 = {};
                    var5 = '9deg';
                    var3['rotate'] = var5;
                    var2[2] = var3;
                    var3 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var10];
                    var6 = var6.bind(var9)(var5);
                    var5 = var6.withTiming;
                    var7 = 0;
                    if(!var8) { _fun0006_ip = 42; continue _fun0006 }
case 37:
                    var7 = 1;
case 42:
                    var4 = _closure1_slot23;
                    var4 = var5.bind(var6)(var7, var4);
                    var3['scale'] = var4;
                    var2[3] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var14 = {};
            var14['isExpandedSV'] = var19;
            var17 = var17[var16];
            var17 = var18.bind(var4)(var17);
            var17 = var17.withTiming;
            var14['withTiming'] = var17;
            var17 = _closure1_slot13;
            var14['BG_SMALL_ICON_SIZE'] = var17;
            var17 = _closure1_slot23;
            var14['GUILD_ICON_TIMING'] = var17;
            var14['BG_SMALL_ICON_ROTATION_DEGREES'] = var16;
            var1['__closure'] = var14;
            var14 = 8721375757202.0;
            var1['__workletHash'] = var14;
            var14 = _closure1_slot29;
            var1['__initData'] = var14;
            var25 = var2.bind(var3)(var1);
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var16 = var9.bgContainer;
            var14 = new Array(2);
            var14[0] = var16;
            var14[1] = var15;
            var1['style'] = var14;
            var14 = 'button';
            var1['accessibilityRole'] = var14;
            var1['accessibilityLabel'] = var11;
            var1['onLayout'] = var8;
            var1['onPress'] = var5;
            var5 = var23.length;
            var7 = var5 >= var7;
            if(!var7) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var11 = _closure1_slot9;
            var8 = _closure1_slot8;
            var5 = {};
            var19 = _closure1_slot7;
            var16 = _closure1_slot1;
            var18 = _closure1_slot2;
            var15 = 6;
            var14 = var18[var15];
            var17 = var16.bind(var4)(var14);
            var14 = {};
            var20 = var9.bgClipView;
            var14['style'] = var20;
            var20 = _closure1_slot24;
            var14['cutouts'] = var20;
            var26 = _closure1_slot7;
            var24 = _closure1_slot11;
            var20 = {};
            var30 = var9.bgIconLarge;
            var28 = new Array(2);
            var28[0] = var30;
            var28[1] = var29;
            var20['style'] = var28;
            var27 = var23[var27];
            var20['source'] = var27;
            var20['onLoad'] = var21;
            var20 = var26.bind(var4)(var24, var20);
            var14['children'] = var20;
            var17 = var19.bind(var4)(var17, var14);
            var14 = new Array(2);
            var14[0] = var17;
            var17 = _closure1_slot7;
            var15 = var18[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var18 = var9.bgSmallClipView;
            var15['style'] = var18;
            var18 = _closure1_slot25;
            var15['cutouts'] = var18;
            var20 = _closure1_slot7;
            var19 = _closure1_slot11;
            var18 = {};
            var26 = var9.bgIconSmall;
            var24 = new Array(2);
            var24[0] = var26;
            var24[1] = var25;
            var18['style'] = var24;
            var22 = var23[var22];
            var18['source'] = var22;
            var18['onLoad'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var15['children'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[1] = var15;
            var5['children'] = var14;
            var7 = var11.bind(var4)(var8, var5);
case 43:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot7;
            var7 = _closure1_slot1;
            var14 = _closure1_slot2;
            var6 = var14[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.View;
            var6 = {};
            var11 = var9.overlayIconBase;
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var10;
            var6['style'] = var9;
            var11 = _closure1_slot7;
            var10 = _closure1_slot0;
            var9 = 10;
            var9 = var14[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.PlusSmallIcon;
            var9 = {};
            var14 = 'lg';
            var9['size'] = var14;
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 8;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.colors;
            if(var12) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var12 = var13.ICON_SUBTLE;
            _fun0001_ip = 47; continue _fun0001;
case 45:
            var12 = var13.WHITE;
case 47:
            var9['color'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function GuildsBarItemIconPresableNoIcons(arg1) {
        var2 = arg1;
        var9 = var2.iconSource;
        var22 = var2.selected;
        var _closure2_slot0 = var22;
        var20 = var2.desaturated;
        var _closure2_slot1 = var20;
        var10 = var2.onPress;
        var11 = var2.onLayout;
        var12 = var2.accessibilityLabel;
        var15 = var2.style;
        var2 = _closure1_slot26;
        var4 = undefined;
        var13 = var2.bind(var4)();
        var _closure2_slot2 = var13;
        var18 = _closure1_slot0;
        var19 = _closure1_slot2;
        var2 = 11;
        var2 = var19[var2];
        var6 = var18.bind(var4)(var2);
        var3 = var6.useClientThemesOverride;
        var2 = var13.iconBackground;
        var16 = var3.bind(var6)(var2);
        var _closure2_slot3 = var16;
        var2 = 5;
        var3 = var19[var2];
        var7 = var18.bind(var4)(var3);
        var6 = var7.useSharedValue;
        var3 = false;
        var23 = var6.bind(var7)(var3);
        var _closure2_slot4 = var23;
        var8 = _closure1_slot4;
        var7 = var8.useCallback;
        var6 = new Array(1);
        var6[0] = var23;
        var3 = function() {
            var3 = _closure2_slot4;
            var2 = var3.set;
            var1 = true;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var7 = var7.bind(var8)(var3, var6);
        var14 = _closure1_slot4;
        var8 = var14.useCallback;
        var6 = new Array(1);
        var6[0] = var23;
        var3 = function() {
            var3 = _closure2_slot4;
            var2 = var3.set;
            var1 = false;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var8.bind(var14)(var3, var6);
        var3 = var19[var2];
        var14 = var18.bind(var4)(var3);
        var8 = var14.useAnimatedStyle;
        var3 = function u() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = _closure2_slot3;
                var1 = null;
                var2 = var1 == var2;
                var7 = undefined;
                var5 = undefined;
                if(var2) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                var2 = _closure2_slot3;
                var5 = var2.backgroundColor;
case 48:
                if(!(var1 == var5)) { _fun0007_ip = 12; continue _fun0007 }
case 50:
                var1 = _closure2_slot2;
                var1 = var1.icon;
                var5 = var1.backgroundColor;
case 12:
                var2 = _closure2_slot4;
                var1 = var2.get;
                var6 = var1.bind(var2)();
                if(var6) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                var6 = _closure2_slot0;
case 51:
                var1 = {};
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 9;
                var3 = var9[var3];
                var4 = var4.bind(var7)(var3);
                var3 = var4.withTiming;
                if(!var6) { _fun0007_ip = 40; continue _fun0007 }
case 53:
                var6 = _closure2_slot1;
                var8 = _closure2_slot2;
                if(var6) { _fun0007_ip = 36; continue _fun0007 }
case 54:
                var6 = var8.iconColorActive;
                var6 = var6.color;
                _fun0007_ip = 35; continue _fun0007;
case 36:
                var8 = var8.iconColorDesaturated;
                var6 = var8.color;
case 35:
                var5 = var6;
case 40:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 12;
                var2 = var8[var2];
                var2 = var6.bind(var7)(var2);
                var2 = var2.timingStandard;
                var2 = var3.bind(var4)(var5, var2);
                var1['backgroundColor'] = var2;
                return var1;
            }
        };
        var24 = {};
        var24['stylesClientThemeOverride'] = var16;
        var24['styles'] = var13;
        var24['active'] = var23;
        var24['selected'] = var22;
        var21 = 9;
        var17 = var19[var21];
        var17 = var18.bind(var4)(var17);
        var17 = var17.withTiming;
        var24['withTiming'] = var17;
        var24['desaturated'] = var20;
        var17 = 12;
        var25 = var19[var17];
        var25 = var18.bind(var4)(var25);
        var25 = var25.timingStandard;
        var24['timingStandard'] = var25;
        var3['__closure'] = var24;
        var24 = 15959074190934.0;
        var3['__workletHash'] = var24;
        var24 = _closure1_slot30;
        var3['__initData'] = var24;
        var14 = var8.bind(var14)(var3);
        var2 = var19[var2];
        var3 = var18.bind(var4)(var2);
        var2 = var3.useAnimatedStyle;
        var1 = function E() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = _closure2_slot4;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                if(var2) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                var2 = _closure2_slot0;
case 55:
                var1 = {};
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 9;
                var3 = var5[var3];
                var8 = undefined;
                var5 = var4.bind(var8)(var3);
                var4 = var5.withTiming;
                if(var2) { _fun0008_ip = 57; continue _fun0008 }
case 17:
                var3 = _closure2_slot1;
                var9 = _closure2_slot2;
                if(var3) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                var3 = var9.iconColorInactive;
                var3 = var3.color;
                _fun0008_ip = 60; continue _fun0008;
case 58:
                var9 = var9.iconColorDesaturated;
                var3 = var9.color;
case 60:
                _fun0008_ip = 61; continue _fun0008;
case 57:
                var7 = _closure2_slot2;
                var7 = var7.iconColor;
                var3 = var7.color;
case 61:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 12;
                var6 = var9[var6];
                var6 = var7.bind(var8)(var6);
                if(var2) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                var2 = var6.timingStandard;
                _fun0008_ip = 64; continue _fun0008;
case 62:
                var2 = var6.timingNone;
case 64:
                var2 = var4.bind(var5)(var3, var2);
                var1['tintColor'] = var2;
                return var1;
            }
        };
        var8 = {};
        var8['active'] = var23;
        var8['selected'] = var22;
        var21 = var19[var21];
        var21 = var18.bind(var4)(var21);
        var21 = var21.withTiming;
        var8['withTiming'] = var21;
        var8['styles'] = var13;
        var8['desaturated'] = var20;
        var20 = var19[var17];
        var20 = var18.bind(var4)(var20);
        var20 = var20.timingNone;
        var8['timingNone'] = var20;
        var17 = var19[var17];
        var17 = var18.bind(var4)(var17);
        var17 = var17.timingStandard;
        var8['timingStandard'] = var17;
        var1['__closure'] = var8;
        var8 = 4178133946289.0;
        var1['__workletHash'] = var8;
        var8 = _closure1_slot31;
        var1['__initData'] = var8;
        var8 = var2.bind(var3)(var1);
        var3 = _closure1_slot7;
        var2 = _closure1_slot10;
        var1 = {};
        var17 = var13.icon;
        var13 = new Array(4);
        var13[0] = var17;
        var13[1] = var16;
        var13[2] = var15;
        var13[3] = var14;
        var1['style'] = var13;
        var13 = 'button';
        var1['accessibilityRole'] = var13;
        var1['accessibilityLabel'] = var12;
        var1['onLayout'] = var11;
        var1['onPress'] = var10;
        var1['onPressIn'] = var7;
        var1['onPressOut'] = var6;
        var7 = _closure1_slot7;
        var6 = _closure1_slot11;
        var5 = {};
        var5['source'] = var9;
        var5['style'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot33 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var16 = 0;
    var2 = var7[var16];
    var1 = undefined;
    var2 = var20.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var5 = var7[var2];
    var2 = metroImportAll;
    var8 = var2.bind(var1)(var5);
    var _closure1_slot4 = var8;
    var22 = 2;
    var2 = var7[var22];
    var2 = var6.bind(var1)(var2);
    var10 = var2.Image;
    var12 = var2.Pressable;
    var _closure1_slot5 = var12;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var21 = var2.GUILD_ITEM_SIZE;
    var18 = var2.GUILD_ITEM_PADDING;
    var2 = var2.GUILD_ITEM_SELECTED_BORDER_RADIUS;
    var _closure1_slot6 = var2;
    var5 = 4;
    var2 = var7[var5];
    var2 = var6.bind(var1)(var2);
    var9 = var2.jsx;
    var _closure1_slot7 = var9;
    var9 = var2.Fragment;
    var _closure1_slot8 = var9;
    var2 = var2.jsxs;
    var _closure1_slot9 = var2;
    var11 = 5;
    var2 = var7[var11];
    var9 = var20.bind(var1)(var2);
    var2 = var9.createAnimatedComponent;
    var2 = var2.bind(var9)(var12);
    var _closure1_slot10 = var2;
    var2 = var7[var11];
    var9 = var20.bind(var1)(var2);
    var2 = var9.createAnimatedComponent;
    var2 = var2.bind(var9)(var10);
    var _closure1_slot11 = var2;
    var2 = 12;
    var2 = var21 + var2;
    var9 = 0.6666666666666666;
    var17 = var9 * var2;
    var _closure1_slot12 = var17;
    var9 = 0.4666666666666667;
    var13 = var9 * var2;
    var _closure1_slot13 = var13;
    var9 = 0.48333333333333334;
    var15 = var9 * var2;
    var9 = 0.11666666666666667;
    var14 = var9 * var2;
    var9 = 0.2857142857142857;
    var12 = var9 * var13;
    var9 = 0.5333333333333333;
    var19 = var9 * var2;
    var _closure1_slot14 = var19;
    var9 = 0.3125;
    var10 = var9 * var19;
    var _closure1_slot15 = var10;
    var9 = var2 - var19;
    var24 = var9 / var22;
    var _closure1_slot16 = var24;
    var9 = 0.3333333333333333;
    var23 = var9 * var2;
    var _closure1_slot17 = var23;
    var _closure1_slot18 = var21;
    var9 = var2 - var21;
    var9 = var9 / var22;
    var _closure1_slot19 = var9;
    var9 = var23 + var19;
    var9 = var9 - var21;
    var _closure1_slot20 = var9;
    var9 = var21 / var22;
    var _closure1_slot21 = var9;
    var9 = {};
    var25 = 150;
    var9['duration'] = var25;
    var25 = var7[var11];
    var25 = var6.bind(var1)(var25);
    var27 = var25.Easing;
    var26 = var27.inOut;
    var25 = var7[var11];
    var25 = var6.bind(var1)(var25);
    var25 = var25.Easing;
    var25 = var25.ease;
    var25 = var26.bind(var27)(var25);
    var9['easing'] = var25;
    var _closure1_slot22 = var9;
    var9 = {};
    var25 = 240;
    var9['duration'] = var25;
    var25 = var7[var11];
    var25 = var6.bind(var1)(var25);
    var26 = var25.Easing;
    var25 = var26.inOut;
    var11 = var7[var11];
    var11 = var6.bind(var1)(var11);
    var11 = var11.Easing;
    var11 = var11.ease;
    var11 = var25.bind(var26)(var11);
    var9['easing'] = var11;
    var _closure1_slot23 = var9;
    var9 = {};
    var11 = 6;
    var25 = var7[var11];
    var25 = var6.bind(var1)(var25);
    var25 = var25.CutoutShape;
    var25 = var25.RoundedRect;
    var9['shape'] = var25;
    var24 = var24 - var22;
    var9['x'] = var24;
    var23 = var23 - var22;
    var9['y'] = var23;
    var19 = var19 + var5;
    var9['width'] = var19;
    var9['height'] = var19;
    var10 = var10 + var22;
    var9['cornerRadius'] = var10;
    var10 = {};
    var11 = var7[var11];
    var11 = var6.bind(var1)(var11);
    var11 = var11.CutoutShape;
    var11 = var11.RoundedRect;
    var10['shape'] = var11;
    var11 = var15 - var22;
    var10['x'] = var11;
    var11 = var14 - var22;
    var10['y'] = var11;
    var5 = var13 + var5;
    var10['width'] = var5;
    var10['height'] = var5;
    var5 = var12 + var22;
    var10['cornerRadius'] = var5;
    var5 = 9;
    var10['rotationDegrees'] = var5;
    var5 = new Array(2);
    var5[0] = var10;
    var5[1] = var9;
    var _closure1_slot24 = var5;
    var5 = new Array(1);
    var5[0] = var9;
    var _closure1_slot25 = var5;
    var5 = 7;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = {};
    var11 = {};
    var19 = 8;
    var23 = var7[var19];
    var23 = var20.bind(var1)(var23);
    var23 = var23.colors;
    var23 = var23.BACKGROUND_MOD_STRONG;
    var11['backgroundColor'] = var23;
    var5['iconBackground'] = var11;
    var11 = {};
    var11['marginTop'] = var18;
    var11['width'] = var21;
    var11['height'] = var21;
    var21 = var21 / var22;
    var11['borderRadius'] = var21;
    var21 = 'center';
    var11['justifyContent'] = var21;
    var11['alignItems'] = var21;
    var21 = var7[var19];
    var21 = var20.bind(var1)(var21);
    var21 = var21.colors;
    var21 = var21.BACKGROUND_MOD_STRONG;
    var11['backgroundColor'] = var21;
    var5['icon'] = var11;
    var11 = {};
    var21 = var7[var19];
    var21 = var20.bind(var1)(var21);
    var21 = var21.colors;
    var21 = var21.WHITE;
    var11['color'] = var21;
    var5['iconColor'] = var11;
    var11 = {};
    var21 = var7[var19];
    var21 = var20.bind(var1)(var21);
    var21 = var21.unsafe_rawColors;
    var21 = var21.GREEN_360;
    var11['color'] = var21;
    var5['iconColorActive'] = var11;
    var11 = {};
    var21 = var7[var19];
    var21 = var20.bind(var1)(var21);
    var21 = var21.unsafe_rawColors;
    var21 = var21.GREEN_360;
    var11['color'] = var21;
    var5['iconColorInactive'] = var11;
    var11 = {};
    var21 = var7[var19];
    var21 = var20.bind(var1)(var21);
    var21 = var21.colors;
    var21 = var21.ICON_SUBTLE;
    var11['color'] = var21;
    var5['iconColorDesaturated'] = var11;
    var11 = {};
    var21 = var7[var19];
    var21 = var20.bind(var1)(var21);
    var21 = var21.colors;
    var21 = var21.BACKGROUND_BRAND;
    var11['backgroundColor'] = var21;
    var5['newIconActive'] = var11;
    var11 = {};
    var19 = var7[var19];
    var19 = var20.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.BACKGROUND_MOD_STRONG;
    var11['backgroundColor'] = var19;
    var5['newIconInactive'] = var11;
    var11 = {};
    var11['marginTop'] = var18;
    var11['width'] = var2;
    var11['height'] = var2;
    var5['bgContainer'] = var11;
    var11 = {};
    var11['width'] = var2;
    var11['height'] = var2;
    var5['bgClipView'] = var11;
    var11 = {};
    var18 = 0.05;
    var18 = var18 * var2;
    var11['left'] = var18;
    var11['top'] = var16;
    var11['width'] = var17;
    var11['height'] = var17;
    var16 = 0.35;
    var16 = var16 * var17;
    var11['borderRadius'] = var16;
    var5['bgIconLarge'] = var11;
    var11 = {};
    var16 = 'absolute';
    var11['position'] = var16;
    var11['width'] = var2;
    var11['height'] = var2;
    var5['bgSmallClipView'] = var11;
    var11 = {};
    var11['position'] = var16;
    var11['left'] = var15;
    var11['top'] = var14;
    var11['width'] = var13;
    var11['height'] = var13;
    var11['borderRadius'] = var12;
    var5['bgIconSmall'] = var11;
    var11 = {'position': 'absolute', 'justifyContent': 'center', 'alignItems': 'center'};
    var5['overlayIconBase'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot26 = var5;
    var5 = {};
    var9 = 'function GuildsBarItemIconPressableTsx1(){const{isExpandedSV,isSelectedSV,OVERLAY_BORDER_RADIUS,GUILD_ITEM_SELECTED_BORDER_RADIUS,OVERLAY_COLLAPSED_BORDER_RADIUS,withTiming,OVERLAY_ICON_SIZE,OVERLAY_COLLAPSED_SIZE,OVERLAY_TIMING,OVERLAY_ICON_OFFSET_X,OVERLAY_COLLAPSED_LEFT,OVERLAY_ICON_OFFSET_Y,OVERLAY_COLLAPSED_TOP,interpolateColor,styles}=this.__closure;const expanded=isExpandedSV.get()!==0;const selected=isSelectedSV.get()!==0;const taretBorderRadius=function(){if(expanded){return OVERLAY_BORDER_RADIUS;}if(selected){return GUILD_ITEM_SELECTED_BORDER_RADIUS;}return OVERLAY_COLLAPSED_BORDER_RADIUS;}();return{width:withTiming(expanded?OVERLAY_ICON_SIZE:OVERLAY_COLLAPSED_SIZE,OVERLAY_TIMING),height:withTiming(expanded?OVERLAY_ICON_SIZE:OVERLAY_COLLAPSED_SIZE,OVERLAY_TIMING),borderRadius:withTiming(taretBorderRadius,OVERLAY_TIMING),left:withTiming(expanded?OVERLAY_ICON_OFFSET_X:OVERLAY_COLLAPSED_LEFT,OVERLAY_TIMING),top:withTiming(expanded?OVERLAY_ICON_OFFSET_Y:OVERLAY_COLLAPSED_TOP,OVERLAY_TIMING),backgroundColor:withTiming(interpolateColor(selected?1:0,[0,1],[styles.newIconInactive.backgroundColor,styles.newIconActive.backgroundColor]),OVERLAY_TIMING)};}';
    var5['code'] = var9;
    var _closure1_slot27 = var5;
    var5 = {};
    var9 = "function GuildsBarItemIconPressableTsx2(){const{isExpandedSV,withTiming,BG_LARGE_ICON_SIZE,GUILD_ICON_TIMING,BG_LARGE_ICON_ROTATION_DEGREES}=this.__closure;const expanded=isExpandedSV.get()!==0;return{transform:[{translateX:withTiming(expanded?0:BG_LARGE_ICON_SIZE/2,GUILD_ICON_TIMING)},{translateY:withTiming(expanded?0:BG_LARGE_ICON_SIZE/2,GUILD_ICON_TIMING)},{rotate:BG_LARGE_ICON_ROTATION_DEGREES+'deg'},{scale:withTiming(expanded?1:0,GUILD_ICON_TIMING)}]};}";
    var5['code'] = var9;
    var _closure1_slot28 = var5;
    var5 = {};
    var9 = "function GuildsBarItemIconPressableTsx3(){const{isExpandedSV,withTiming,BG_SMALL_ICON_SIZE,GUILD_ICON_TIMING,BG_SMALL_ICON_ROTATION_DEGREES}=this.__closure;const expanded=isExpandedSV.get()!==0;return{transform:[{translateX:withTiming(expanded?0:-BG_SMALL_ICON_SIZE/2,GUILD_ICON_TIMING)},{translateY:withTiming(expanded?0:BG_SMALL_ICON_SIZE/2,GUILD_ICON_TIMING)},{rotate:BG_SMALL_ICON_ROTATION_DEGREES+'deg'},{scale:withTiming(expanded?1:0,GUILD_ICON_TIMING)}]};}";
    var5['code'] = var9;
    var _closure1_slot29 = var5;
    var5 = {};
    var9 = 'function GuildsBarItemIconPressableTsx4(){const{stylesClientThemeOverride,styles,active,selected,withTiming,desaturated,timingStandard}=this.__closure;var _stylesClientThemeOve,_stylesClientThemeOve2;const defaultBackgroundColor=(_stylesClientThemeOve=(_stylesClientThemeOve2=stylesClientThemeOverride)===null||_stylesClientThemeOve2===void 0?void 0:_stylesClientThemeOve2.backgroundColor)!==null&&_stylesClientThemeOve!==void 0?_stylesClientThemeOve:styles.icon.backgroundColor;const isActive=active.get()||selected;return{backgroundColor:withTiming(isActive?desaturated?styles.iconColorDesaturated.color:styles.iconColorActive.color:defaultBackgroundColor,timingStandard)};}';
    var5['code'] = var9;
    var _closure1_slot30 = var5;
    var5 = {};
    var9 = 'function GuildsBarItemIconPressableTsx5(){const{active,selected,withTiming,styles,desaturated,timingNone,timingStandard}=this.__closure;const isActive=active.get()||selected;return{tintColor:withTiming(isActive?styles.iconColor.color:desaturated?styles.iconColorDesaturated.color:styles.iconColorInactive.color,isActive?timingNone:timingStandard)};}';
    var5['code'] = var9;
    var _closure1_slot31 = var5;
    var5 = var8.memo;
    var4 = function GuildsBarItemIconPresable(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var13 = var1.iconSource;
            var12 = var1.backgroundIcons;
            var11 = var1.isExpanded;
            var5 = undefined;
            if(!(var11 === var5)) { _fun0009_ip = 48; continue _fun0009 }
case 65:
            var11 = false;
case 48:
            var4 = var1.desaturated;
            if(!(var4 === var5)) { _fun0009_ip = 66; continue _fun0009 }
case 67:
            var4 = false;
case 66:
            var10 = var1.selected;
            if(!(var10 === var5)) { _fun0009_ip = 68; continue _fun0009 }
case 69:
            var10 = false;
case 68:
            var9 = var1.onPress;
            var8 = var1.onLayout;
            var7 = var1.accessibilityLabel;
            var6 = var1.style;
            var1 = null;
            if(!(var1 == var12)) { _fun0009_ip = 63; continue _fun0009 }
case 70:
            var3 = _closure1_slot7;
            var2 = _closure1_slot33;
            var1 = {};
            var1['iconSource'] = var13;
            var1['selected'] = var10;
            var1['desaturated'] = var4;
            var1['onPress'] = var9;
            var1['onLayout'] = var8;
            var1['accessibilityLabel'] = var7;
            var1['style'] = var6;
            var1 = var3.bind(var5)(var2, var1);
            _fun0009_ip = 71; continue _fun0009;
case 63:
            var4 = _closure1_slot7;
            var3 = _closure1_slot32;
            var2 = {};
            var2['backgroundIcons'] = var12;
            var2['isExpanded'] = var11;
            var2['selected'] = var10;
            var2['onPress'] = var9;
            var2['onLayout'] = var8;
            var2['accessibilityLabel'] = var7;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 71:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guilds_bar/native/GuildsBarItemIconPressable.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['BG_CONTAINER_SIZE'] = var2;
    return var1;
})();