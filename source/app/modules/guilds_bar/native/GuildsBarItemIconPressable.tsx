// app/modules/guilds_bar/native/GuildsBarItemIconPressable.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var21 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var21;
    var _closure1_slot2 = var7;
    var1 = function GuildsBarItemIconPressableWithGuildIcons(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var22 = var3.backgroundIcons;
            var2 = var3.isExpanded;
            var _closure2_slot0 = var2;
            var12 = var3.selected;
            var _closure2_slot1 = var12;
            var5 = var3.onPress;
            var7 = var3.onLayout;
            var8 = var3.accessibilityLabel;
            var17 = var3.style;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var3 = _closure1_slot24;
            var11 = var3.bind(var4)();
            var _closure2_slot2 = var11;
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 4;
            var3 = var3[var6];
            var10 = var9.bind(var4)(var3);
            var9 = var10.useSharedValue;
            var21 = 0;
            var3 = 0;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 1;
case 2:
            var18 = var9.bind(var10)(var3);
            _closure2_slot3 = var18;
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var10 = var9.bind(var4)(var3);
            var9 = var10.useSharedValue;
            var3 = 0;
            if(!var12) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = 1;
case 4:
            var9 = var9.bind(var10)(var3);
            _closure2_slot4 = var9;
            var14 = _closure1_slot3;
            var10 = var14.useEffect;
            var3 = new Array(4);
            var3[0] = var2;
            var3[1] = var18;
            var3[2] = var12;
            var3[3] = var9;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure2_slot3;
                    var2 = var5.set;
                    var6 = _closure2_slot0;
                    var1 = 0;
                    if(!var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = 1;
case 6:
                    var1 = var2.bind(var5)(var1);
                    var2 = _closure2_slot4;
                    var1 = var2.set;
                    var4 = _closure2_slot1;
                    var3 = 0;
                    if(!var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = 1;
case 8:
                    var1 = var1.bind(var2)(var3);
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var10.bind(var14)(var2, var3);
            var10 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = var14[var6];
            var15 = var10.bind(var4)(var2);
            var3 = var15.useAnimatedStyle;
            var2 = function G() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var9 = 0;
                    var5 = var9 !== var1;
                    var2 = _closure2_slot4;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var6 = var9 !== var1;
                    if(var5) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    if(var6) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var14 = _closure1_slot19;
                    _fun0003_ip = 14; continue _fun0003;
case 12:
                    var14 = _closure1_slot5;
case 14:
                    _fun0003_ip = 15; continue _fun0003;
case 10:
                    var14 = _closure1_slot13;
case 15:
                    var1 = {};
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 8;
                    var7 = var7[var4];
                    var10 = undefined;
                    var12 = var8.bind(var10)(var7);
                    var11 = var12.withTiming;
                    if(var5) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var8 = _closure1_slot16;
                    _fun0003_ip = 18; continue _fun0003;
case 16:
                    var8 = _closure1_slot12;
case 18:
                    var7 = _closure1_slot20;
                    var7 = var11.bind(var12)(var8, var7);
                    var1['width'] = var7;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var4];
                    var12 = var8.bind(var10)(var7);
                    var11 = var12.withTiming;
                    if(var5) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var8 = _closure1_slot16;
                    _fun0003_ip = 21; continue _fun0003;
case 19:
                    var8 = _closure1_slot12;
case 21:
                    var7 = _closure1_slot20;
                    var7 = var11.bind(var12)(var8, var7);
                    var1['height'] = var7;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var11 = var7[var4];
                    var13 = var8.bind(var10)(var11);
                    var12 = var13.withTiming;
                    var11 = _closure1_slot20;
                    var11 = var12.bind(var13)(var14, var11);
                    var1['borderRadius'] = var11;
                    var7 = var7[var4];
                    var12 = var8.bind(var10)(var7);
                    var11 = var12.withTiming;
                    if(var5) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var8 = _closure1_slot17;
                    _fun0003_ip = 24; continue _fun0003;
case 22:
                    var8 = _closure1_slot14;
case 24:
                    var7 = _closure1_slot20;
                    var7 = var11.bind(var12)(var8, var7);
                    var1['left'] = var7;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var4];
                    var11 = var8.bind(var10)(var7);
                    var8 = var11.withTiming;
                    if(var5) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var7 = _closure1_slot18;
                    _fun0003_ip = 27; continue _fun0003;
case 25:
                    var7 = _closure1_slot15;
case 27:
                    var5 = _closure1_slot20;
                    var5 = var8.bind(var11)(var7, var5);
                    var1['top'] = var5;
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = var11[var4];
                    var5 = var8.bind(var10)(var4);
                    var4 = var5.withTiming;
                    var7 = 4;
                    var7 = var11[var7];
                    var8 = var8.bind(var10)(var7);
                    var7 = var8.interpolateColor;
                    var9 = 0;
                    if(!var6) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var9 = 1;
case 28:
                    var3 = _closure2_slot2;
                    var6 = var3.newIconInactive;
                    var10 = var6.backgroundColor;
                    var6 = new Array(2);
                    var6[0] = var10;
                    var3 = var3.newIconActive;
                    var3 = var3.backgroundColor;
                    var6[1] = var3;
                    var3 = [0, 1];
                    var3 = var7.bind(var8)(var9, var3, var6);
                    var2 = _closure1_slot20;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['backgroundColor'] = var2;
                    return var1;
                }
            };
            var16 = {};
            var16['isExpandedSV'] = var18;
            var16['isSelectedSV'] = var9;
            var9 = _closure1_slot13;
            var16['OVERLAY_BORDER_RADIUS'] = var9;
            var9 = _closure1_slot5;
            var16['GUILD_ITEM_SELECTED_BORDER_RADIUS'] = var9;
            var9 = _closure1_slot19;
            var16['OVERLAY_COLLAPSED_BORDER_RADIUS'] = var9;
            var9 = 8;
            var19 = var14[var9];
            var19 = var10.bind(var4)(var19);
            var19 = var19.withTiming;
            var16['withTiming'] = var19;
            var19 = _closure1_slot12;
            var16['OVERLAY_ICON_SIZE'] = var19;
            var19 = _closure1_slot16;
            var16['OVERLAY_COLLAPSED_SIZE'] = var19;
            var19 = _closure1_slot20;
            var16['OVERLAY_TIMING'] = var19;
            var19 = _closure1_slot14;
            var16['OVERLAY_ICON_OFFSET_X'] = var19;
            var19 = _closure1_slot17;
            var16['OVERLAY_COLLAPSED_LEFT'] = var19;
            var19 = _closure1_slot15;
            var16['OVERLAY_ICON_OFFSET_Y'] = var19;
            var19 = _closure1_slot18;
            var16['OVERLAY_COLLAPSED_TOP'] = var19;
            var19 = var14[var6];
            var19 = var10.bind(var4)(var19);
            var19 = var19.interpolateColor;
            var16['interpolateColor'] = var19;
            var16['styles'] = var11;
            var2['__closure'] = var16;
            var16 = 8399089467740.0;
            var2['__workletHash'] = var16;
            var16 = _closure1_slot25;
            var2['__initData'] = var16;
            var15 = var3.bind(var15)(var2);
            var2 = var14[var6];
            var16 = var10.bind(var4)(var2);
            var3 = var16.useAnimatedStyle;
            var2 = function D() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var7 = 0;
                    var8 = var7 !== var1;
                    var1 = {};
                    var3 = {};
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var10 = 8;
                    var2 = var2[var10];
                    var9 = undefined;
                    var11 = var5.bind(var9)(var2);
                    var6 = var11.withTiming;
                    var5 = 0;
                    if(var8) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var12 = _closure1_slot10;
                    var2 = 2;
                    var5 = var12 / var2;
case 30:
                    var2 = _closure1_slot21;
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
                    if(var8) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                    var13 = _closure1_slot10;
                    var5 = 2;
                    var6 = var13 / var5;
case 32:
                    var5 = _closure1_slot21;
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
                    if(!var8) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                    var7 = 1;
case 34:
                    var4 = _closure1_slot21;
                    var4 = var5.bind(var6)(var7, var4);
                    var3['scale'] = var4;
                    var2[3] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var19 = {};
            var19['isExpandedSV'] = var18;
            var20 = var14[var9];
            var20 = var10.bind(var4)(var20);
            var20 = var20.withTiming;
            var19['withTiming'] = var20;
            var20 = _closure1_slot10;
            var19['BG_LARGE_ICON_SIZE'] = var20;
            var20 = _closure1_slot21;
            var19['GUILD_ICON_TIMING'] = var20;
            var20 = -8;
            var19['BG_LARGE_ICON_ROTATION_DEGREES'] = var20;
            var2['__closure'] = var19;
            var19 = 16484002406012.0;
            var2['__workletHash'] = var19;
            var19 = _closure1_slot26;
            var2['__initData'] = var19;
            var25 = var3.bind(var16)(var2);
            var2 = var14[var6];
            var3 = var10.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function N() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var7 = 0;
                    var8 = var7 !== var1;
                    var1 = {};
                    var3 = {};
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var10 = 8;
                    var2 = var2[var10];
                    var9 = undefined;
                    var11 = var5.bind(var9)(var2);
                    var6 = var11.withTiming;
                    var5 = 0;
                    if(var8) { _fun0005_ip = 36; continue _fun0005 }
case 31:
                    var2 = _closure1_slot11;
                    var12 = -var2;
                    var2 = 2;
                    var5 = var12 / var2;
case 36:
                    var2 = _closure1_slot21;
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
                    if(var8) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                    var13 = _closure1_slot11;
                    var5 = 2;
                    var6 = var13 / var5;
case 37:
                    var5 = _closure1_slot21;
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
                    if(!var8) { _fun0005_ip = 39; continue _fun0005 }
case 34:
                    var7 = 1;
case 39:
                    var4 = _closure1_slot21;
                    var4 = var5.bind(var6)(var7, var4);
                    var3['scale'] = var4;
                    var2[3] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var16 = {};
            var16['isExpandedSV'] = var18;
            var9 = var14[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.withTiming;
            var16['withTiming'] = var9;
            var9 = _closure1_slot11;
            var16['BG_SMALL_ICON_SIZE'] = var9;
            var9 = _closure1_slot21;
            var16['GUILD_ICON_TIMING'] = var9;
            var9 = 9;
            var16['BG_SMALL_ICON_ROTATION_DEGREES'] = var9;
            var1['__closure'] = var16;
            var16 = 8721375757202.0;
            var1['__workletHash'] = var16;
            var16 = _closure1_slot27;
            var1['__initData'] = var16;
            var23 = var2.bind(var3)(var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var18 = var11.bgContainer;
            var16 = new Array(2);
            var16[0] = var18;
            var16[1] = var17;
            var1['style'] = var16;
            var16 = 'button';
            var1['accessibilityRole'] = var16;
            var1['accessibilityLabel'] = var8;
            var1['onLayout'] = var7;
            var1['onPress'] = var5;
            var17 = _closure1_slot6;
            var7 = _closure1_slot1;
            var8 = 5;
            var5 = var14[var8];
            var16 = var7.bind(var4)(var5);
            var5 = {};
            var18 = var11.bgClipView;
            var5['style'] = var18;
            var18 = _closure1_slot22;
            var5['cutouts'] = var18;
            var20 = _closure1_slot6;
            var19 = _closure1_slot9;
            var18 = {};
            var26 = var11.bgIconLarge;
            var24 = new Array(2);
            var24[0] = var26;
            var24[1] = var25;
            var18['style'] = var24;
            var21 = var22[var21];
            var18['source'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var5['children'] = var18;
            var16 = var17.bind(var4)(var16, var5);
            var5 = new Array(3);
            var5[0] = var16;
            var17 = _closure1_slot6;
            var8 = var14[var8];
            var16 = var7.bind(var4)(var8);
            var8 = {};
            var18 = var11.bgSmallClipView;
            var8['style'] = var18;
            var18 = _closure1_slot23;
            var8['cutouts'] = var18;
            var20 = _closure1_slot6;
            var19 = _closure1_slot9;
            var18 = {};
            var24 = var11.bgIconSmall;
            var21 = new Array(2);
            var21[0] = var24;
            var21[1] = var23;
            var18['style'] = var21;
            var21 = 1;
            var21 = var22[var21];
            var18['source'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var8['children'] = var18;
            var8 = var17.bind(var4)(var16, var8);
            var5[1] = var8;
            var8 = _closure1_slot6;
            var6 = var14[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.View;
            var6 = {};
            var16 = var11.overlayIconBase;
            var11 = new Array(2);
            var11[0] = var16;
            var11[1] = var15;
            var6['style'] = var11;
            var11 = _closure1_slot6;
            var9 = var14[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.PlusSmallIcon;
            var9 = {};
            var14 = 'lg';
            var9['size'] = var14;
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 7;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.colors;
            if(var12) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var12 = var13.ICON_SUBTLE;
            _fun0001_ip = 42; continue _fun0001;
case 40:
            var12 = var13.WHITE;
case 42:
            var9['color'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot30 = var1;
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
        var2 = _closure1_slot24;
        var4 = undefined;
        var13 = var2.bind(var4)();
        var _closure2_slot2 = var13;
        var18 = _closure1_slot0;
        var19 = _closure1_slot2;
        var2 = 10;
        var2 = var19[var2];
        var6 = var18.bind(var4)(var2);
        var3 = var6.useClientThemesOverride;
        var2 = var13.iconBackground;
        var16 = var3.bind(var6)(var2);
        var _closure2_slot3 = var16;
        var2 = 4;
        var3 = var19[var2];
        var7 = var18.bind(var4)(var3);
        var6 = var7.useSharedValue;
        var3 = false;
        var23 = var6.bind(var7)(var3);
        var _closure2_slot4 = var23;
        var8 = _closure1_slot3;
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
        var14 = _closure1_slot3;
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
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = _closure2_slot3;
                var1 = null;
                var2 = var1 == var2;
                var7 = undefined;
                var5 = undefined;
                if(var2) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                var2 = _closure2_slot3;
                var5 = var2.backgroundColor;
case 43:
                if(!(var1 == var5)) { _fun0006_ip = 9; continue _fun0006 }
case 45:
                var1 = _closure2_slot2;
                var1 = var1.icon;
                var5 = var1.backgroundColor;
case 9:
                var2 = _closure2_slot4;
                var1 = var2.get;
                var6 = var1.bind(var2)();
                if(var6) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                var6 = _closure2_slot0;
case 46:
                var1 = {};
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 8;
                var3 = var9[var3];
                var4 = var4.bind(var7)(var3);
                var3 = var4.withTiming;
                if(!var6) { _fun0006_ip = 37; continue _fun0006 }
case 48:
                var6 = _closure2_slot1;
                var8 = _closure2_slot2;
                if(var6) { _fun0006_ip = 33; continue _fun0006 }
case 49:
                var6 = var8.iconColorActive;
                var6 = var6.color;
                _fun0006_ip = 32; continue _fun0006;
case 33:
                var8 = var8.iconColorDesaturated;
                var6 = var8.color;
case 32:
                var5 = var6;
case 37:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 11;
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
        var21 = 8;
        var17 = var19[var21];
        var17 = var18.bind(var4)(var17);
        var17 = var17.withTiming;
        var24['withTiming'] = var17;
        var24['desaturated'] = var20;
        var17 = 11;
        var25 = var19[var17];
        var25 = var18.bind(var4)(var25);
        var25 = var25.timingStandard;
        var24['timingStandard'] = var25;
        var3['__closure'] = var24;
        var24 = 15959074190934.0;
        var3['__workletHash'] = var24;
        var24 = _closure1_slot28;
        var3['__initData'] = var24;
        var14 = var8.bind(var14)(var3);
        var2 = var19[var2];
        var3 = var18.bind(var4)(var2);
        var2 = var3.useAnimatedStyle;
        var1 = function O() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = _closure2_slot4;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                if(var2) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                var2 = _closure2_slot0;
case 50:
                var1 = {};
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 8;
                var3 = var5[var3];
                var8 = undefined;
                var5 = var4.bind(var8)(var3);
                var4 = var5.withTiming;
                if(var2) { _fun0007_ip = 52; continue _fun0007 }
case 14:
                var3 = _closure2_slot1;
                var9 = _closure2_slot2;
                if(var3) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                var3 = var9.iconColorInactive;
                var3 = var3.color;
                _fun0007_ip = 55; continue _fun0007;
case 53:
                var9 = var9.iconColorDesaturated;
                var3 = var9.color;
case 55:
                _fun0007_ip = 3; continue _fun0007;
case 52:
                var7 = _closure2_slot2;
                var7 = var7.iconColor;
                var3 = var7.color;
case 3:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 11;
                var6 = var9[var6];
                var6 = var7.bind(var8)(var6);
                if(var2) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                var2 = var6.timingStandard;
                _fun0007_ip = 58; continue _fun0007;
case 56:
                var2 = var6.timingNone;
case 58:
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
        var8 = _closure1_slot29;
        var1['__initData'] = var8;
        var8 = var2.bind(var3)(var1);
        var3 = _closure1_slot6;
        var2 = _closure1_slot8;
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
        var7 = _closure1_slot6;
        var6 = _closure1_slot9;
        var5 = {};
        var5['source'] = var9;
        var5['style'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var17 = 0;
    var5 = var7[var17];
    var2 = metroImportAll;
    var1 = undefined;
    var9 = var2.bind(var1)(var5);
    var _closure1_slot3 = var9;
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var10 = var2.Image;
    var11 = var2.Pressable;
    var _closure1_slot4 = var11;
    var23 = 2;
    var2 = var7[var23];
    var2 = var6.bind(var1)(var2);
    var22 = var2.GUILD_ITEM_SIZE;
    var19 = var2.GUILD_ITEM_PADDING;
    var2 = var2.GUILD_ITEM_SELECTED_BORDER_RADIUS;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot6 = var5;
    var2 = var2.jsxs;
    var _closure1_slot7 = var2;
    var8 = 4;
    var2 = var7[var8];
    var5 = var21.bind(var1)(var2);
    var2 = var5.createAnimatedComponent;
    var2 = var2.bind(var5)(var11);
    var _closure1_slot8 = var2;
    var2 = var7[var8];
    var5 = var21.bind(var1)(var2);
    var2 = var5.createAnimatedComponent;
    var2 = var2.bind(var5)(var10);
    var _closure1_slot9 = var2;
    var5 = 12;
    var2 = var22 + var5;
    var10 = 0.6666666666666666;
    var18 = var10 * var2;
    var _closure1_slot10 = var18;
    var10 = 0.4666666666666667;
    var14 = var10 * var2;
    var _closure1_slot11 = var14;
    var10 = 0.48333333333333334;
    var16 = var10 * var2;
    var10 = 0.11666666666666667;
    var15 = var10 * var2;
    var10 = 0.2857142857142857;
    var13 = var10 * var14;
    var10 = 0.5333333333333333;
    var20 = var10 * var2;
    var _closure1_slot12 = var20;
    var10 = 0.3125;
    var11 = var10 * var20;
    var _closure1_slot13 = var11;
    var10 = var2 - var20;
    var25 = var10 / var23;
    var _closure1_slot14 = var25;
    var10 = 0.3333333333333333;
    var24 = var10 * var2;
    var _closure1_slot15 = var24;
    var _closure1_slot16 = var22;
    var10 = var2 - var22;
    var10 = var10 / var23;
    var _closure1_slot17 = var10;
    var10 = var24 + var20;
    var10 = var10 - var22;
    var _closure1_slot18 = var10;
    var10 = var22 / var23;
    var _closure1_slot19 = var10;
    var10 = {};
    var12 = 200;
    var10['duration'] = var12;
    var12 = var7[var8];
    var12 = var6.bind(var1)(var12);
    var27 = var12.Easing;
    var26 = var27.inOut;
    var12 = var7[var8];
    var12 = var6.bind(var1)(var12);
    var12 = var12.Easing;
    var12 = var12.ease;
    var12 = var26.bind(var27)(var12);
    var10['easing'] = var12;
    var _closure1_slot20 = var10;
    var10 = {};
    var12 = 300;
    var10['duration'] = var12;
    var12 = var7[var8];
    var12 = var6.bind(var1)(var12);
    var27 = var12.Easing;
    var26 = var27.inOut;
    var12 = var7[var8];
    var12 = var6.bind(var1)(var12);
    var12 = var12.Easing;
    var12 = var12.ease;
    var12 = var26.bind(var27)(var12);
    var10['easing'] = var12;
    var _closure1_slot21 = var10;
    var10 = {};
    var12 = 5;
    var26 = var7[var12];
    var26 = var6.bind(var1)(var26);
    var26 = var26.CutoutShape;
    var26 = var26.RoundedRect;
    var10['shape'] = var26;
    var25 = var25 - var23;
    var10['x'] = var25;
    var24 = var24 - var23;
    var10['y'] = var24;
    var20 = var20 + var8;
    var10['width'] = var20;
    var10['height'] = var20;
    var11 = var11 + var23;
    var10['cornerRadius'] = var11;
    var11 = {};
    var12 = var7[var12];
    var12 = var6.bind(var1)(var12);
    var12 = var12.CutoutShape;
    var12 = var12.RoundedRect;
    var11['shape'] = var12;
    var12 = var16 - var23;
    var11['x'] = var12;
    var12 = var15 - var23;
    var11['y'] = var12;
    var8 = var14 + var8;
    var11['width'] = var8;
    var11['height'] = var8;
    var8 = var13 + var23;
    var11['cornerRadius'] = var8;
    var8 = 9;
    var11['rotationDegrees'] = var8;
    var8 = new Array(2);
    var8[0] = var11;
    var8[1] = var10;
    var _closure1_slot22 = var8;
    var8 = new Array(1);
    var8[0] = var10;
    var _closure1_slot23 = var8;
    var8 = 6;
    var8 = var7[var8];
    var11 = var6.bind(var1)(var8);
    var10 = var11.createStyles;
    var8 = {};
    var12 = {};
    var20 = 7;
    var24 = var7[var20];
    var24 = var21.bind(var1)(var24);
    var24 = var24.colors;
    var24 = var24.BACKGROUND_MOD_STRONG;
    var12['backgroundColor'] = var24;
    var8['iconBackground'] = var12;
    var12 = {};
    var12['marginTop'] = var19;
    var12['width'] = var22;
    var12['height'] = var22;
    var22 = var22 / var23;
    var12['borderRadius'] = var22;
    var22 = 'center';
    var12['justifyContent'] = var22;
    var12['alignItems'] = var22;
    var22 = var7[var20];
    var22 = var21.bind(var1)(var22);
    var22 = var22.colors;
    var22 = var22.BACKGROUND_MOD_STRONG;
    var12['backgroundColor'] = var22;
    var8['icon'] = var12;
    var12 = {};
    var22 = var7[var20];
    var22 = var21.bind(var1)(var22);
    var22 = var22.colors;
    var22 = var22.WHITE;
    var12['color'] = var22;
    var8['iconColor'] = var12;
    var12 = {};
    var22 = var7[var20];
    var22 = var21.bind(var1)(var22);
    var22 = var22.unsafe_rawColors;
    var22 = var22.GREEN_360;
    var12['color'] = var22;
    var8['iconColorActive'] = var12;
    var12 = {};
    var22 = var7[var20];
    var22 = var21.bind(var1)(var22);
    var22 = var22.unsafe_rawColors;
    var22 = var22.GREEN_360;
    var12['color'] = var22;
    var8['iconColorInactive'] = var12;
    var12 = {};
    var22 = var7[var20];
    var22 = var21.bind(var1)(var22);
    var22 = var22.colors;
    var22 = var22.ICON_SUBTLE;
    var12['color'] = var22;
    var8['iconColorDesaturated'] = var12;
    var12 = {};
    var22 = var7[var20];
    var22 = var21.bind(var1)(var22);
    var22 = var22.colors;
    var22 = var22.BACKGROUND_BRAND;
    var12['backgroundColor'] = var22;
    var8['newIconActive'] = var12;
    var12 = {};
    var20 = var7[var20];
    var20 = var21.bind(var1)(var20);
    var20 = var20.colors;
    var20 = var20.BACKGROUND_MOD_STRONG;
    var12['backgroundColor'] = var20;
    var8['newIconInactive'] = var12;
    var12 = {};
    var12['marginTop'] = var19;
    var12['width'] = var2;
    var12['height'] = var2;
    var8['bgContainer'] = var12;
    var12 = {};
    var12['width'] = var2;
    var12['height'] = var2;
    var8['bgClipView'] = var12;
    var12 = {};
    var19 = 0.05;
    var19 = var19 * var2;
    var12['left'] = var19;
    var12['top'] = var17;
    var12['width'] = var18;
    var12['height'] = var18;
    var17 = 0.35;
    var17 = var17 * var18;
    var12['borderRadius'] = var17;
    var8['bgIconLarge'] = var12;
    var12 = {};
    var17 = 'absolute';
    var12['position'] = var17;
    var12['width'] = var2;
    var12['height'] = var2;
    var8['bgSmallClipView'] = var12;
    var12 = {};
    var12['position'] = var17;
    var12['left'] = var16;
    var12['top'] = var15;
    var12['width'] = var14;
    var12['height'] = var14;
    var12['borderRadius'] = var13;
    var8['bgIconSmall'] = var12;
    var12 = {'position': 'absolute', 'justifyContent': 'center', 'alignItems': 'center'};
    var8['overlayIconBase'] = var12;
    var8 = var10.bind(var11)(var8);
    var _closure1_slot24 = var8;
    var8 = {};
    var10 = 'function GuildsBarItemIconPressableTsx1(){const{isExpandedSV,isSelectedSV,OVERLAY_BORDER_RADIUS,GUILD_ITEM_SELECTED_BORDER_RADIUS,OVERLAY_COLLAPSED_BORDER_RADIUS,withTiming,OVERLAY_ICON_SIZE,OVERLAY_COLLAPSED_SIZE,OVERLAY_TIMING,OVERLAY_ICON_OFFSET_X,OVERLAY_COLLAPSED_LEFT,OVERLAY_ICON_OFFSET_Y,OVERLAY_COLLAPSED_TOP,interpolateColor,styles}=this.__closure;const expanded=isExpandedSV.get()!==0;const selected=isSelectedSV.get()!==0;const taretBorderRadius=function(){if(expanded){return OVERLAY_BORDER_RADIUS;}if(selected){return GUILD_ITEM_SELECTED_BORDER_RADIUS;}return OVERLAY_COLLAPSED_BORDER_RADIUS;}();return{width:withTiming(expanded?OVERLAY_ICON_SIZE:OVERLAY_COLLAPSED_SIZE,OVERLAY_TIMING),height:withTiming(expanded?OVERLAY_ICON_SIZE:OVERLAY_COLLAPSED_SIZE,OVERLAY_TIMING),borderRadius:withTiming(taretBorderRadius,OVERLAY_TIMING),left:withTiming(expanded?OVERLAY_ICON_OFFSET_X:OVERLAY_COLLAPSED_LEFT,OVERLAY_TIMING),top:withTiming(expanded?OVERLAY_ICON_OFFSET_Y:OVERLAY_COLLAPSED_TOP,OVERLAY_TIMING),backgroundColor:withTiming(interpolateColor(selected?1:0,[0,1],[styles.newIconInactive.backgroundColor,styles.newIconActive.backgroundColor]),OVERLAY_TIMING)};}';
    var8['code'] = var10;
    var _closure1_slot25 = var8;
    var8 = {};
    var10 = "function GuildsBarItemIconPressableTsx2(){const{isExpandedSV,withTiming,BG_LARGE_ICON_SIZE,GUILD_ICON_TIMING,BG_LARGE_ICON_ROTATION_DEGREES}=this.__closure;const expanded=isExpandedSV.get()!==0;return{transform:[{translateX:withTiming(expanded?0:BG_LARGE_ICON_SIZE/2,GUILD_ICON_TIMING)},{translateY:withTiming(expanded?0:BG_LARGE_ICON_SIZE/2,GUILD_ICON_TIMING)},{rotate:BG_LARGE_ICON_ROTATION_DEGREES+'deg'},{scale:withTiming(expanded?1:0,GUILD_ICON_TIMING)}]};}";
    var8['code'] = var10;
    var _closure1_slot26 = var8;
    var8 = {};
    var10 = "function GuildsBarItemIconPressableTsx3(){const{isExpandedSV,withTiming,BG_SMALL_ICON_SIZE,GUILD_ICON_TIMING,BG_SMALL_ICON_ROTATION_DEGREES}=this.__closure;const expanded=isExpandedSV.get()!==0;return{transform:[{translateX:withTiming(expanded?0:-BG_SMALL_ICON_SIZE/2,GUILD_ICON_TIMING)},{translateY:withTiming(expanded?0:BG_SMALL_ICON_SIZE/2,GUILD_ICON_TIMING)},{rotate:BG_SMALL_ICON_ROTATION_DEGREES+'deg'},{scale:withTiming(expanded?1:0,GUILD_ICON_TIMING)}]};}";
    var8['code'] = var10;
    var _closure1_slot27 = var8;
    var8 = {};
    var10 = 'function GuildsBarItemIconPressableTsx4(){const{stylesClientThemeOverride,styles,active,selected,withTiming,desaturated,timingStandard}=this.__closure;var _stylesClientThemeOve,_stylesClientThemeOve2;const defaultBackgroundColor=(_stylesClientThemeOve=(_stylesClientThemeOve2=stylesClientThemeOverride)===null||_stylesClientThemeOve2===void 0?void 0:_stylesClientThemeOve2.backgroundColor)!==null&&_stylesClientThemeOve!==void 0?_stylesClientThemeOve:styles.icon.backgroundColor;const isActive=active.get()||selected;return{backgroundColor:withTiming(isActive?desaturated?styles.iconColorDesaturated.color:styles.iconColorActive.color:defaultBackgroundColor,timingStandard)};}';
    var8['code'] = var10;
    var _closure1_slot28 = var8;
    var8 = {};
    var10 = 'function GuildsBarItemIconPressableTsx5(){const{active,selected,withTiming,styles,desaturated,timingNone,timingStandard}=this.__closure;const isActive=active.get()||selected;return{tintColor:withTiming(isActive?styles.iconColor.color:desaturated?styles.iconColorDesaturated.color:styles.iconColorInactive.color,isActive?timingNone:timingStandard)};}';
    var8['code'] = var10;
    var _closure1_slot29 = var8;
    var8 = var9.memo;
    var4 = function GuildsBarItemIconPresable(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var13 = var1.iconSource;
            var12 = var1.backgroundIcons;
            var11 = var1.isExpanded;
            var5 = undefined;
            if(!(var11 === var5)) { _fun0008_ip = 43; continue _fun0008 }
case 59:
            var11 = false;
case 43:
            var4 = var1.desaturated;
            if(!(var4 === var5)) { _fun0008_ip = 60; continue _fun0008 }
case 61:
            var4 = false;
case 60:
            var10 = var1.selected;
            if(!(var10 === var5)) { _fun0008_ip = 62; continue _fun0008 }
case 63:
            var10 = false;
case 62:
            var9 = var1.onPress;
            var8 = var1.onLayout;
            var7 = var1.accessibilityLabel;
            var6 = var1.style;
            var1 = null;
            if(!(var1 != var12)) { _fun0008_ip = 64; continue _fun0008 }
case 65:
            var2 = var12.length;
            var1 = 2;
            if(!(!(var2 >= var1))) { _fun0008_ip = 20; continue _fun0008 }
case 64:
            var3 = _closure1_slot6;
            var2 = _closure1_slot31;
            var1 = {};
            var1['iconSource'] = var13;
            var1['selected'] = var10;
            var1['desaturated'] = var4;
            var1['onPress'] = var9;
            var1['onLayout'] = var8;
            var1['accessibilityLabel'] = var7;
            var1['style'] = var6;
            var1 = var3.bind(var5)(var2, var1);
            _fun0008_ip = 66; continue _fun0008;
case 20:
            var4 = _closure1_slot6;
            var3 = _closure1_slot30;
            var2 = {};
            var2['backgroundIcons'] = var12;
            var2['isExpanded'] = var11;
            var2['selected'] = var10;
            var2['onPress'] = var9;
            var2['onLayout'] = var8;
            var2['accessibilityLabel'] = var7;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 66:
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guilds_bar/native/GuildsBarItemIconPressable.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['BG_CONTAINER_SIZE'] = var2;
    return var1;
})();