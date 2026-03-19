// app/modules/guilds_bar/native/GuildsBarItemIconPressable.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function GuildsBarItemIconPressableWithGuildIcons(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var24 = var3.backgroundIcons;
            var2 = var3.isExpanded;
            var12 = var3.selected;
            var _closure2_slot0 = var12;
            var5 = var3.onPress;
            var8 = var3.onLayout;
            var11 = var3.accessibilityLabel;
            var16 = var3.style;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var14 = _closure1_slot1;
            var3 = _closure1_slot2;
            var17 = 9;
            var6 = var3[var17];
            var7 = var14.bind(var4)(var6);
            var6 = 'GuildsBarItemIconPressable';
            var7 = var7.bind(var4)(var6);
            var10 = _closure1_slot0;
            var9 = 10;
            var6 = var3[var9];
            var19 = var10.bind(var4)(var6);
            var18 = var19.useToken;
            var15 = 8;
            var6 = var3[var15];
            var6 = var14.bind(var4)(var6);
            var6 = var6.modules;
            var6 = var6.mobile;
            var6 = var6.GUILD_BAR_ITEM_SIZE;
            var6 = var18.bind(var19)(var6);
            var9 = var3[var9];
            var10 = var10.bind(var4)(var9);
            var9 = var10.useToken;
            var3 = var3[var15];
            var3 = var14.bind(var4)(var3);
            var3 = var3.modules;
            var3 = var3.mobile;
            var3 = var3.GUILD_ITEM_SELECTED_BORDER_RADIUS;
            var18 = var9.bind(var10)(var3);
            var _closure2_slot1 = var18;
            var3 = _closure1_slot32;
            var9 = var3.bind(var4)(var7, var6);
            var _closure2_slot2 = var9;
            var6 = _closure1_slot4;
            var3 = var6.useRef;
            var28 = 0;
            var3 = var3.bind(var6)(var28);
            var _closure2_slot3 = var3;
            var7 = _closure1_slot4;
            var6 = var7.useState;
            var3 = false;
            var6 = var6.bind(var7)(var3);
            var3 = _closure1_slot3;
            var7 = 2;
            var6 = var3.bind(var4)(var6, var7);
            var3 = var6[var28];
            var23 = 1;
            var6 = var6[var23];
            var _closure2_slot4 = var6;
            var19 = _closure1_slot4;
            var14 = var19.useCallback;
            var10 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var4 = var2.current;
                    var3 = 1;
                    var3 = var4 + var3;
                    var2['current'] = var3;
                    var3 = var2.current;
                    var2 = 2;
                    if(!(var3 >= var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = new Array(0);
            var22 = var14.bind(var19)(var10, var6);
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3;
case 4:
            _closure2_slot5 = var2;
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 5;
            var3 = var3[var6];
            var14 = var10.bind(var4)(var3);
            var10 = var14.useSharedValue;
            var3 = 0;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var23;
case 6:
            var21 = var10.bind(var14)(var3);
            _closure2_slot6 = var21;
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var14 = var10.bind(var4)(var3);
            var10 = var14.useSharedValue;
            var3 = 0;
            if(!var12) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var23;
case 8:
            var25 = var10.bind(var14)(var3);
            _closure2_slot7 = var25;
            var14 = _closure1_slot4;
            var10 = var14.useEffect;
            var3 = new Array(4);
            var3[0] = var2;
            var3[1] = var21;
            var3[2] = var12;
            var3[3] = var25;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = _closure2_slot6;
                    var2 = var5.set;
                    var6 = _closure2_slot5;
                    var1 = 0;
                    if(!var6) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var1 = 1;
case 10:
                    var1 = var2.bind(var5)(var1);
                    var2 = _closure2_slot7;
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
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var2 = var20[var6];
            var10 = var19.bind(var4)(var2);
            var3 = var10.useAnimatedStyle;
            var2 = function Q() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var9 = 0;
                    var5 = var9 !== var1;
                    var2 = _closure2_slot7;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var6 = var9 !== var1;
                    if(var5) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    if(var6) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var14 = _closure1_slot27;
                    _fun0004_ip = 17; continue _fun0004;
case 15:
                    var14 = _closure2_slot1;
case 17:
                    _fun0004_ip = 18; continue _fun0004;
case 13:
                    var14 = _closure1_slot21;
case 18:
                    var1 = {};
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 11;
                    var7 = var7[var4];
                    var10 = undefined;
                    var12 = var8.bind(var10)(var7);
                    var11 = var12.withTiming;
                    if(var5) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var8 = _closure1_slot24;
                    _fun0004_ip = 21; continue _fun0004;
case 19:
                    var8 = _closure1_slot20;
case 21:
                    var7 = _closure1_slot28;
                    var7 = var11.bind(var12)(var8, var7);
                    var1['width'] = var7;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var4];
                    var12 = var8.bind(var10)(var7);
                    var11 = var12.withTiming;
                    if(var5) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var8 = _closure1_slot24;
                    _fun0004_ip = 24; continue _fun0004;
case 22:
                    var8 = _closure1_slot20;
case 24:
                    var7 = _closure1_slot28;
                    var7 = var11.bind(var12)(var8, var7);
                    var1['height'] = var7;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var11 = var7[var4];
                    var13 = var8.bind(var10)(var11);
                    var12 = var13.withTiming;
                    var11 = _closure1_slot28;
                    var11 = var12.bind(var13)(var14, var11);
                    var1['borderRadius'] = var11;
                    var7 = var7[var4];
                    var12 = var8.bind(var10)(var7);
                    var11 = var12.withTiming;
                    if(var5) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var8 = _closure1_slot25;
                    _fun0004_ip = 27; continue _fun0004;
case 25:
                    var8 = _closure1_slot22;
case 27:
                    var7 = _closure1_slot28;
                    var7 = var11.bind(var12)(var8, var7);
                    var1['left'] = var7;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var4];
                    var11 = var8.bind(var10)(var7);
                    var8 = var11.withTiming;
                    if(var5) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var7 = _closure1_slot26;
                    _fun0004_ip = 30; continue _fun0004;
case 28:
                    var7 = _closure1_slot23;
case 30:
                    var5 = _closure1_slot28;
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
                    if(!var6) { _fun0004_ip = 7; continue _fun0004 }
case 31:
                    var9 = 1;
case 7:
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
                    var2 = _closure1_slot28;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['backgroundColor'] = var2;
                    return var1;
                }
            };
            var14 = {};
            var14['isExpandedSV'] = var21;
            var14['isSelectedSV'] = var25;
            var25 = _closure1_slot21;
            var14['OVERLAY_BORDER_RADIUS'] = var25;
            var14['guildItemSelectedBorderRadius'] = var18;
            var18 = _closure1_slot27;
            var14['OVERLAY_COLLAPSED_BORDER_RADIUS'] = var18;
            var18 = 11;
            var25 = var20[var18];
            var25 = var19.bind(var4)(var25);
            var25 = var25.withTiming;
            var14['withTiming'] = var25;
            var25 = _closure1_slot20;
            var14['OVERLAY_ICON_SIZE'] = var25;
            var25 = _closure1_slot24;
            var14['OVERLAY_COLLAPSED_SIZE'] = var25;
            var25 = _closure1_slot28;
            var14['OVERLAY_TIMING'] = var25;
            var25 = _closure1_slot22;
            var14['OVERLAY_ICON_OFFSET_X'] = var25;
            var25 = _closure1_slot25;
            var14['OVERLAY_COLLAPSED_LEFT'] = var25;
            var25 = _closure1_slot23;
            var14['OVERLAY_ICON_OFFSET_Y'] = var25;
            var25 = _closure1_slot26;
            var14['OVERLAY_COLLAPSED_TOP'] = var25;
            var25 = var20[var6];
            var25 = var19.bind(var4)(var25);
            var25 = var25.interpolateColor;
            var14['interpolateColor'] = var25;
            var14['styles'] = var9;
            var2['__closure'] = var14;
            var14 = 9223164272732.0;
            var2['__workletHash'] = var14;
            var14 = _closure1_slot33;
            var2['__initData'] = var14;
            var10 = var3.bind(var10)(var2);
            var2 = var20[var6];
            var14 = var19.bind(var4)(var2);
            var3 = var14.useAnimatedStyle;
            var2 = function $() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var7 = 0;
                    var8 = var7 !== var1;
                    var1 = {};
                    var3 = {};
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var10 = 11;
                    var2 = var2[var10];
                    var9 = undefined;
                    var11 = var5.bind(var9)(var2);
                    var6 = var11.withTiming;
                    var5 = 0;
                    if(var8) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                    var12 = _closure1_slot13;
                    var2 = 2;
                    var5 = var12 / var2;
case 32:
                    var2 = _closure1_slot29;
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
                    if(var8) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                    var13 = _closure1_slot13;
                    var5 = 2;
                    var6 = var13 / var5;
case 34:
                    var5 = _closure1_slot29;
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
                    if(!var8) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var7 = 1;
case 36:
                    var4 = _closure1_slot29;
                    var4 = var5.bind(var6)(var7, var4);
                    var3['scale'] = var4;
                    var2[3] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var25 = {};
            var25['isExpandedSV'] = var21;
            var26 = var20[var18];
            var26 = var19.bind(var4)(var26);
            var26 = var26.withTiming;
            var25['withTiming'] = var26;
            var26 = _closure1_slot13;
            var25['BG_LARGE_ICON_SIZE'] = var26;
            var26 = _closure1_slot29;
            var25['GUILD_ICON_TIMING'] = var26;
            var26 = -8;
            var25['BG_LARGE_ICON_ROTATION_DEGREES'] = var26;
            var2['__closure'] = var25;
            var25 = 16484002406012.0;
            var2['__workletHash'] = var25;
            var25 = _closure1_slot34;
            var2['__initData'] = var25;
            var30 = var3.bind(var14)(var2);
            var2 = var20[var6];
            var3 = var19.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function ee() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var7 = 0;
                    var8 = var7 !== var1;
                    var1 = {};
                    var3 = {};
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var10 = 11;
                    var2 = var2[var10];
                    var9 = undefined;
                    var11 = var5.bind(var9)(var2);
                    var6 = var11.withTiming;
                    var5 = 0;
                    if(var8) { _fun0006_ip = 38; continue _fun0006 }
case 33:
                    var2 = _closure1_slot14;
                    var12 = -var2;
                    var2 = 2;
                    var5 = var12 / var2;
case 38:
                    var2 = _closure1_slot29;
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
                    if(var8) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                    var13 = _closure1_slot14;
                    var5 = 2;
                    var6 = var13 / var5;
case 39:
                    var5 = _closure1_slot29;
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
                    if(!var8) { _fun0006_ip = 41; continue _fun0006 }
case 36:
                    var7 = 1;
case 41:
                    var4 = _closure1_slot29;
                    var4 = var5.bind(var6)(var7, var4);
                    var3['scale'] = var4;
                    var2[3] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var14 = {};
            var14['isExpandedSV'] = var21;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.withTiming;
            var14['withTiming'] = var18;
            var18 = _closure1_slot14;
            var14['BG_SMALL_ICON_SIZE'] = var18;
            var18 = _closure1_slot29;
            var14['GUILD_ICON_TIMING'] = var18;
            var14['BG_SMALL_ICON_ROTATION_DEGREES'] = var17;
            var1['__closure'] = var14;
            var14 = 8721375757202.0;
            var1['__workletHash'] = var14;
            var14 = _closure1_slot35;
            var1['__initData'] = var14;
            var26 = var2.bind(var3)(var1);
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var17 = var9.bgContainer;
            var14 = new Array(2);
            var14[0] = var17;
            var14[1] = var16;
            var1['style'] = var14;
            var14 = 'button';
            var1['accessibilityRole'] = var14;
            var1['accessibilityLabel'] = var11;
            var1['onLayout'] = var8;
            var1['onPress'] = var5;
            var5 = var24.length;
            var7 = var5 >= var7;
            if(!var7) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var11 = _closure1_slot9;
            var8 = _closure1_slot8;
            var5 = {};
            var20 = _closure1_slot7;
            var17 = _closure1_slot1;
            var19 = _closure1_slot2;
            var16 = 6;
            var14 = var19[var16];
            var18 = var17.bind(var4)(var14);
            var14 = {};
            var21 = var9.bgClipView;
            var14['style'] = var21;
            var21 = _closure1_slot30;
            var14['cutouts'] = var21;
            var27 = _closure1_slot7;
            var25 = _closure1_slot11;
            var21 = {};
            var31 = var9.bgIconLarge;
            var29 = new Array(2);
            var29[0] = var31;
            var29[1] = var30;
            var21['style'] = var29;
            var28 = var24[var28];
            var21['source'] = var28;
            var21['onLoad'] = var22;
            var21 = var27.bind(var4)(var25, var21);
            var14['children'] = var21;
            var18 = var20.bind(var4)(var18, var14);
            var14 = new Array(2);
            var14[0] = var18;
            var18 = _closure1_slot7;
            var16 = var19[var16];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            var19 = var9.bgSmallClipView;
            var16['style'] = var19;
            var19 = _closure1_slot31;
            var16['cutouts'] = var19;
            var21 = _closure1_slot7;
            var20 = _closure1_slot11;
            var19 = {};
            var27 = var9.bgIconSmall;
            var25 = new Array(2);
            var25[0] = var27;
            var25[1] = var26;
            var19['style'] = var25;
            var23 = var24[var23];
            var19['source'] = var23;
            var19['onLoad'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var16['children'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var14[1] = var16;
            var5['children'] = var14;
            var7 = var11.bind(var4)(var8, var5);
case 42:
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
            var9 = 12;
            var9 = var14[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.PlusSmallIcon;
            var9 = {};
            var14 = 'lg';
            var9['size'] = var14;
            var14 = _closure1_slot1;
            var13 = _closure1_slot2;
            var13 = var13[var15];
            var13 = var14.bind(var4)(var13);
            var13 = var13.colors;
            if(var12) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var12 = var13.ICON_SUBTLE;
            _fun0001_ip = 46; continue _fun0001;
case 44:
            var12 = var13.WHITE;
case 46:
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
    var _closure1_slot38 = var1;
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
        var8 = _closure1_slot1;
        var19 = _closure1_slot2;
        var2 = 9;
        var2 = var19[var2];
        var4 = undefined;
        var3 = var8.bind(var4)(var2);
        var2 = 'GuildsBarItemIconPressable';
        var6 = var3.bind(var4)(var2);
        var18 = _closure1_slot0;
        var2 = 10;
        var2 = var19[var2];
        var7 = var18.bind(var4)(var2);
        var3 = var7.useToken;
        var2 = 8;
        var2 = var19[var2];
        var2 = var8.bind(var4)(var2);
        var2 = var2.modules;
        var2 = var2.mobile;
        var2 = var2.GUILD_BAR_ITEM_SIZE;
        var3 = var3.bind(var7)(var2);
        var2 = _closure1_slot32;
        var13 = var2.bind(var4)(var6, var3);
        var _closure2_slot2 = var13;
        var2 = 13;
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
        var3 = function E() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = _closure2_slot3;
                var1 = null;
                var2 = var1 == var2;
                var7 = undefined;
                var5 = undefined;
                if(var2) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                var2 = _closure2_slot3;
                var5 = var2.backgroundColor;
case 47:
                if(!(var1 == var5)) { _fun0007_ip = 12; continue _fun0007 }
case 49:
                var1 = _closure2_slot2;
                var1 = var1.icon;
                var5 = var1.backgroundColor;
case 12:
                var2 = _closure2_slot4;
                var1 = var2.get;
                var6 = var1.bind(var2)();
                if(var6) { _fun0007_ip = 18; continue _fun0007 }
case 50:
                var6 = _closure2_slot0;
case 18:
                var1 = {};
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 11;
                var3 = var9[var3];
                var4 = var4.bind(var7)(var3);
                var3 = var4.withTiming;
                if(!var6) { _fun0007_ip = 39; continue _fun0007 }
case 51:
                var6 = _closure2_slot1;
                var8 = _closure2_slot2;
                if(var6) { _fun0007_ip = 35; continue _fun0007 }
case 52:
                var6 = var8.iconColorActive;
                var6 = var6.color;
                _fun0007_ip = 34; continue _fun0007;
case 35:
                var8 = var8.iconColorDesaturated;
                var6 = var8.color;
case 34:
                var5 = var6;
case 39:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 14;
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
        var21 = 11;
        var17 = var19[var21];
        var17 = var18.bind(var4)(var17);
        var17 = var17.withTiming;
        var24['withTiming'] = var17;
        var24['desaturated'] = var20;
        var17 = 14;
        var25 = var19[var17];
        var25 = var18.bind(var4)(var25);
        var25 = var25.timingStandard;
        var24['timingStandard'] = var25;
        var3['__closure'] = var24;
        var24 = 15959074190934.0;
        var3['__workletHash'] = var24;
        var24 = _closure1_slot36;
        var3['__initData'] = var24;
        var14 = var8.bind(var14)(var3);
        var2 = var19[var2];
        var3 = var18.bind(var4)(var2);
        var2 = var3.useAnimatedStyle;
        var1 = function T() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = _closure2_slot4;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                if(var2) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                var2 = _closure2_slot0;
case 53:
                var1 = {};
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 11;
                var3 = var5[var3];
                var8 = undefined;
                var5 = var4.bind(var8)(var3);
                var4 = var5.withTiming;
                if(var2) { _fun0008_ip = 55; continue _fun0008 }
case 17:
                var3 = _closure2_slot1;
                var9 = _closure2_slot2;
                if(var3) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                var3 = var9.iconColorActive;
                var3 = var3.color;
                _fun0008_ip = 58; continue _fun0008;
case 56:
                var9 = var9.iconColorDesaturated;
                var3 = var9.color;
case 58:
                _fun0008_ip = 59; continue _fun0008;
case 55:
                var7 = _closure2_slot2;
                var7 = var7.iconColor;
                var3 = var7.color;
case 59:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 14;
                var6 = var9[var6];
                var6 = var7.bind(var8)(var6);
                if(var2) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                var2 = var6.timingStandard;
                _fun0008_ip = 62; continue _fun0008;
case 60:
                var2 = var6.timingNone;
case 62:
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
        var8 = 3048736124982.0;
        var1['__workletHash'] = var8;
        var8 = _closure1_slot37;
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
    var _closure1_slot39 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var8 = var7[var2];
    var2 = metroImportAll;
    var8 = var2.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var11 = 2;
    var2 = var7[var11];
    var2 = var6.bind(var1)(var2);
    var10 = var2.Image;
    var14 = var2.Pressable;
    var _closure1_slot5 = var14;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var9 = var2.GUILD_ITEM_SIZE;
    var _closure1_slot6 = var9;
    var13 = 4;
    var2 = var7[var13];
    var2 = var6.bind(var1)(var2);
    var12 = var2.jsx;
    var _closure1_slot7 = var12;
    var12 = var2.Fragment;
    var _closure1_slot8 = var12;
    var2 = var2.jsxs;
    var _closure1_slot9 = var2;
    var16 = 5;
    var2 = var7[var16];
    var12 = var5.bind(var1)(var2);
    var2 = var12.createAnimatedComponent;
    var2 = var2.bind(var12)(var14);
    var _closure1_slot10 = var2;
    var2 = var7[var16];
    var5 = var5.bind(var1)(var2);
    var2 = var5.createAnimatedComponent;
    var2 = var2.bind(var5)(var10);
    var _closure1_slot11 = var2;
    var2 = 12;
    var2 = var9 + var2;
    var _closure1_slot12 = var2;
    var5 = 0.6666666666666666;
    var10 = var5 * var2;
    var _closure1_slot13 = var10;
    var5 = 0.4666666666666667;
    var12 = var5 * var2;
    var _closure1_slot14 = var12;
    var5 = 0.05;
    var5 = var5 * var2;
    var _closure1_slot15 = var5;
    var5 = 0.48333333333333334;
    var15 = var5 * var2;
    var _closure1_slot16 = var15;
    var5 = 0.11666666666666667;
    var14 = var5 * var2;
    var _closure1_slot17 = var14;
    var5 = 0.35;
    var5 = var5 * var10;
    var _closure1_slot18 = var5;
    var5 = 0.2857142857142857;
    var5 = var5 * var12;
    var _closure1_slot19 = var5;
    var10 = 0.5333333333333333;
    var17 = var10 * var2;
    var _closure1_slot20 = var17;
    var10 = 0.3125;
    var10 = var10 * var17;
    var _closure1_slot21 = var10;
    var18 = var2 - var17;
    var19 = var18 / var11;
    var _closure1_slot22 = var19;
    var18 = 0.3333333333333333;
    var18 = var18 * var2;
    var _closure1_slot23 = var18;
    var _closure1_slot24 = var9;
    var20 = var2 - var9;
    var20 = var20 / var11;
    var _closure1_slot25 = var20;
    var20 = var18 + var17;
    var20 = var20 - var9;
    var _closure1_slot26 = var20;
    var9 = var9 / var11;
    var _closure1_slot27 = var9;
    var9 = {};
    var20 = 150;
    var9['duration'] = var20;
    var20 = var7[var16];
    var20 = var6.bind(var1)(var20);
    var22 = var20.Easing;
    var21 = var22.inOut;
    var20 = var7[var16];
    var20 = var6.bind(var1)(var20);
    var20 = var20.Easing;
    var20 = var20.ease;
    var20 = var21.bind(var22)(var20);
    var9['easing'] = var20;
    var _closure1_slot28 = var9;
    var9 = {};
    var20 = 240;
    var9['duration'] = var20;
    var20 = var7[var16];
    var20 = var6.bind(var1)(var20);
    var21 = var20.Easing;
    var20 = var21.inOut;
    var16 = var7[var16];
    var16 = var6.bind(var1)(var16);
    var16 = var16.Easing;
    var16 = var16.ease;
    var16 = var20.bind(var21)(var16);
    var9['easing'] = var16;
    var _closure1_slot29 = var9;
    var9 = {};
    var16 = 6;
    var20 = var7[var16];
    var20 = var6.bind(var1)(var20);
    var20 = var20.CutoutShape;
    var20 = var20.RoundedRect;
    var9['shape'] = var20;
    var19 = var19 - var11;
    var9['x'] = var19;
    var18 = var18 - var11;
    var9['y'] = var18;
    var17 = var17 + var13;
    var9['width'] = var17;
    var9['height'] = var17;
    var10 = var10 + var11;
    var9['cornerRadius'] = var10;
    var10 = {};
    var16 = var7[var16];
    var16 = var6.bind(var1)(var16);
    var16 = var16.CutoutShape;
    var16 = var16.RoundedRect;
    var10['shape'] = var16;
    var15 = var15 - var11;
    var10['x'] = var15;
    var14 = var14 - var11;
    var10['y'] = var14;
    var12 = var12 + var13;
    var10['width'] = var12;
    var10['height'] = var12;
    var5 = var5 + var11;
    var10['cornerRadius'] = var5;
    var5 = 9;
    var10['rotationDegrees'] = var5;
    var5 = new Array(2);
    var5[0] = var10;
    var5[1] = var9;
    var _closure1_slot30 = var5;
    var5 = new Array(1);
    var5[0] = var9;
    var _closure1_slot31 = var5;
    var5 = 7;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = function() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = arguments[0];
            var8 = arguments[1];
            var6 = undefined;
            if(!(var4 === var6)) { _fun0009_ip = 63; continue _fun0009 }
case 64:
            var4 = false;
case 63:
            if(!(var8 === var6)) { _fun0009_ip = 65; continue _fun0009 }
case 66:
            var8 = _closure1_slot6;
case 65:
            var1 = {};
            var2 = {};
            var9 = _closure1_slot1;
            var5 = _closure1_slot2;
            var7 = 8;
            var10 = var5[var7];
            var10 = var9.bind(var6)(var10);
            var10 = var10.colors;
            var10 = var10.BACKGROUND_MOD_STRONG;
            var2['backgroundColor'] = var10;
            var1['iconBackground'] = var2;
            var2 = {};
            var10 = var5[var7];
            var10 = var9.bind(var6)(var10);
            var10 = var10.modules;
            var10 = var10.mobile;
            var10 = var10.GUILD_BAR_ITEM_PADDING;
            var2['marginTop'] = var10;
            var10 = var5[var7];
            var10 = var9.bind(var6)(var10);
            var10 = var10.modules;
            var10 = var10.mobile;
            var10 = var10.GUILD_BAR_ITEM_SIZE;
            var2['width'] = var10;
            var5 = var5[var7];
            var5 = var9.bind(var6)(var5);
            var5 = var5.modules;
            var5 = var5.mobile;
            var5 = var5.GUILD_BAR_ITEM_SIZE;
            var2['height'] = var5;
            if(var4) { _fun0009_ip = 67; continue _fun0009 }
case 68:
            var5 = 2;
            var5 = var8 / var5;
            _fun0009_ip = 69; continue _fun0009;
case 67:
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.radii;
            var5 = var8.lg;
case 69:
            var2['borderRadius'] = var5;
            var5 = 'center';
            var2['justifyContent'] = var5;
            var2['alignItems'] = var5;
            var8 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var8.bind(var6)(var5);
            var8 = var5.colors;
            if(var4) { _fun0009_ip = 70; continue _fun0009 }
case 71:
            var5 = var8.BACKGROUND_SURFACE_HIGH;
            _fun0009_ip = 72; continue _fun0009;
case 70:
            var5 = var8.BACKGROUND_MOD_SUBTLE;
case 72:
            var2['backgroundColor'] = var5;
            var1['icon'] = var2;
            var2 = {};
            var8 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var8.bind(var6)(var5);
            var5 = var5.colors;
            var5 = var5.WHITE;
            var2['color'] = var5;
            var1['iconColor'] = var2;
            var2 = {};
            var8 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var8.bind(var6)(var5);
            if(var4) { _fun0009_ip = 73; continue _fun0009 }
case 74:
            var4 = var5.unsafe_rawColors;
            var4 = var4.GREEN_360;
            _fun0009_ip = 75; continue _fun0009;
case 73:
            var5 = var5.colors;
            var4 = var5.MOBILE_GUILDBAR_ICON_DEFAULT;
case 75:
            var2['color'] = var4;
            var1['iconColorActive'] = var2;
            var2 = {};
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var8 = var4[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.colors;
            var8 = var8.ICON_SUBTLE;
            var2['color'] = var8;
            var1['iconColorDesaturated'] = var2;
            var2 = {};
            var8 = var4[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.colors;
            var8 = var8.BACKGROUND_BRAND;
            var2['backgroundColor'] = var8;
            var1['newIconActive'] = var2;
            var2 = {};
            var8 = var4[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.colors;
            var8 = var8.BACKGROUND_MOD_STRONG;
            var2['backgroundColor'] = var8;
            var1['newIconInactive'] = var2;
            var2 = {};
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.modules;
            var4 = var4.mobile;
            var4 = var4.GUILD_BAR_ITEM_PADDING;
            var2['marginTop'] = var4;
            var5 = _closure1_slot12;
            var2['width'] = var5;
            var2['height'] = var5;
            var1['bgContainer'] = var2;
            var2 = {};
            var2['width'] = var5;
            var2['height'] = var5;
            var1['bgClipView'] = var2;
            var2 = {};
            var4 = _closure1_slot15;
            var2['left'] = var4;
            var4 = 0;
            var2['top'] = var4;
            var4 = _closure1_slot13;
            var2['width'] = var4;
            var4 = _closure1_slot13;
            var2['height'] = var4;
            var4 = _closure1_slot18;
            var2['borderRadius'] = var4;
            var1['bgIconLarge'] = var2;
            var2 = {};
            var4 = 'absolute';
            var2['position'] = var4;
            var2['width'] = var5;
            var2['height'] = var5;
            var1['bgSmallClipView'] = var2;
            var2 = {};
            var2['position'] = var4;
            var4 = _closure1_slot16;
            var2['left'] = var4;
            var4 = _closure1_slot17;
            var2['top'] = var4;
            var4 = _closure1_slot14;
            var2['width'] = var4;
            var4 = _closure1_slot14;
            var2['height'] = var4;
            var3 = _closure1_slot19;
            var2['borderRadius'] = var3;
            var1['bgIconSmall'] = var2;
            var2 = {'position': 'absolute', 'justifyContent': 'center', 'alignItems': 'center'};
            var1['overlayIconBase'] = var2;
            return var1;
        }
    };
    var5 = var9.bind(var10)(var5);
    var _closure1_slot32 = var5;
    var5 = {};
    var9 = 'function GuildsBarItemIconPressableTsx1(){const{isExpandedSV,isSelectedSV,OVERLAY_BORDER_RADIUS,guildItemSelectedBorderRadius,OVERLAY_COLLAPSED_BORDER_RADIUS,withTiming,OVERLAY_ICON_SIZE,OVERLAY_COLLAPSED_SIZE,OVERLAY_TIMING,OVERLAY_ICON_OFFSET_X,OVERLAY_COLLAPSED_LEFT,OVERLAY_ICON_OFFSET_Y,OVERLAY_COLLAPSED_TOP,interpolateColor,styles}=this.__closure;const expanded=isExpandedSV.get()!==0;const selected=isSelectedSV.get()!==0;const taretBorderRadius=function(){if(expanded){return OVERLAY_BORDER_RADIUS;}if(selected){return guildItemSelectedBorderRadius;}return OVERLAY_COLLAPSED_BORDER_RADIUS;}();return{width:withTiming(expanded?OVERLAY_ICON_SIZE:OVERLAY_COLLAPSED_SIZE,OVERLAY_TIMING),height:withTiming(expanded?OVERLAY_ICON_SIZE:OVERLAY_COLLAPSED_SIZE,OVERLAY_TIMING),borderRadius:withTiming(taretBorderRadius,OVERLAY_TIMING),left:withTiming(expanded?OVERLAY_ICON_OFFSET_X:OVERLAY_COLLAPSED_LEFT,OVERLAY_TIMING),top:withTiming(expanded?OVERLAY_ICON_OFFSET_Y:OVERLAY_COLLAPSED_TOP,OVERLAY_TIMING),backgroundColor:withTiming(interpolateColor(selected?1:0,[0,1],[styles.newIconInactive.backgroundColor,styles.newIconActive.backgroundColor]),OVERLAY_TIMING)};}';
    var5['code'] = var9;
    var _closure1_slot33 = var5;
    var5 = {};
    var9 = "function GuildsBarItemIconPressableTsx2(){const{isExpandedSV,withTiming,BG_LARGE_ICON_SIZE,GUILD_ICON_TIMING,BG_LARGE_ICON_ROTATION_DEGREES}=this.__closure;const expanded=isExpandedSV.get()!==0;return{transform:[{translateX:withTiming(expanded?0:BG_LARGE_ICON_SIZE/2,GUILD_ICON_TIMING)},{translateY:withTiming(expanded?0:BG_LARGE_ICON_SIZE/2,GUILD_ICON_TIMING)},{rotate:BG_LARGE_ICON_ROTATION_DEGREES+'deg'},{scale:withTiming(expanded?1:0,GUILD_ICON_TIMING)}]};}";
    var5['code'] = var9;
    var _closure1_slot34 = var5;
    var5 = {};
    var9 = "function GuildsBarItemIconPressableTsx3(){const{isExpandedSV,withTiming,BG_SMALL_ICON_SIZE,GUILD_ICON_TIMING,BG_SMALL_ICON_ROTATION_DEGREES}=this.__closure;const expanded=isExpandedSV.get()!==0;return{transform:[{translateX:withTiming(expanded?0:-BG_SMALL_ICON_SIZE/2,GUILD_ICON_TIMING)},{translateY:withTiming(expanded?0:BG_SMALL_ICON_SIZE/2,GUILD_ICON_TIMING)},{rotate:BG_SMALL_ICON_ROTATION_DEGREES+'deg'},{scale:withTiming(expanded?1:0,GUILD_ICON_TIMING)}]};}";
    var5['code'] = var9;
    var _closure1_slot35 = var5;
    var5 = {};
    var9 = 'function GuildsBarItemIconPressableTsx4(){const{stylesClientThemeOverride,styles,active,selected,withTiming,desaturated,timingStandard}=this.__closure;var _stylesClientThemeOve,_stylesClientThemeOve2;const defaultBackgroundColor=(_stylesClientThemeOve=(_stylesClientThemeOve2=stylesClientThemeOverride)===null||_stylesClientThemeOve2===void 0?void 0:_stylesClientThemeOve2.backgroundColor)!==null&&_stylesClientThemeOve!==void 0?_stylesClientThemeOve:styles.icon.backgroundColor;const isActive=active.get()||selected;return{backgroundColor:withTiming(isActive?desaturated?styles.iconColorDesaturated.color:styles.iconColorActive.color:defaultBackgroundColor,timingStandard)};}';
    var5['code'] = var9;
    var _closure1_slot36 = var5;
    var5 = {};
    var9 = 'function GuildsBarItemIconPressableTsx5(){const{active,selected,withTiming,styles,desaturated,timingNone,timingStandard}=this.__closure;const isActive=active.get()||selected;return{tintColor:withTiming(isActive?styles.iconColor.color:desaturated?styles.iconColorDesaturated.color:styles.iconColorActive.color,isActive?timingNone:timingStandard)};}';
    var5['code'] = var9;
    var _closure1_slot37 = var5;
    var5 = var8.memo;
    var4 = function GuildsBarItemIconPresable(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var13 = var1.iconSource;
            var12 = var1.backgroundIcons;
            var11 = var1.isExpanded;
            var5 = undefined;
            if(!(var11 === var5)) { _fun0010_ip = 47; continue _fun0010 }
case 76:
            var11 = false;
case 47:
            var4 = var1.desaturated;
            if(!(var4 === var5)) { _fun0010_ip = 77; continue _fun0010 }
case 78:
            var4 = false;
case 77:
            var10 = var1.selected;
            if(!(var10 === var5)) { _fun0010_ip = 79; continue _fun0010 }
case 80:
            var10 = false;
case 79:
            var9 = var1.onPress;
            var8 = var1.onLayout;
            var7 = var1.accessibilityLabel;
            var6 = var1.style;
            var1 = null;
            if(!(var1 == var12)) { _fun0010_ip = 61; continue _fun0010 }
case 81:
            var3 = _closure1_slot7;
            var2 = _closure1_slot39;
            var1 = {};
            var1['iconSource'] = var13;
            var1['selected'] = var10;
            var1['desaturated'] = var4;
            var1['onPress'] = var9;
            var1['onLayout'] = var8;
            var1['accessibilityLabel'] = var7;
            var1['style'] = var6;
            var1 = var3.bind(var5)(var2, var1);
            _fun0010_ip = 82; continue _fun0010;
case 61:
            var4 = _closure1_slot7;
            var3 = _closure1_slot38;
            var2 = {};
            var2['backgroundIcons'] = var12;
            var2['isExpanded'] = var11;
            var2['selected'] = var10;
            var2['onPress'] = var9;
            var2['onLayout'] = var8;
            var2['accessibilityLabel'] = var7;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 82:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guilds_bar/native/GuildsBarItemIconPressable.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['BG_CONTAINER_SIZE'] = var2;
    return var1;
})();