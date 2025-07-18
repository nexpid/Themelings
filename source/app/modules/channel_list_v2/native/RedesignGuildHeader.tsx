// app/modules/channel_list_v2/native/RedesignGuildHeader.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var5 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function GuildInfoHeader(arg1) {
        var2 = arg1;
        var12 = var2.guild;
        var8 = var2.scrollPosition;
        var _closure2_slot0 = var8;
        var6 = var2.bannerHeight;
        var _closure2_slot1 = var6;
        var2 = _closure1_slot19;
        var4 = undefined;
        var11 = var2.bind(var4)();
        var3 = _closure1_slot0;
        var13 = _closure1_slot2;
        var2 = 21;
        var5 = var13[var2];
        var10 = var3.bind(var4)(var5);
        var7 = var10.useAnimatedStyle;
        var5 = function o() {
            var1 = {};
            var3 = {};
            var2 = global;
            var6 = var2.Math;
            var5 = var6.max;
            var7 = _closure2_slot0;
            var4 = var7.get;
            var4 = var4.bind(var7)();
            var2 = _closure2_slot1;
            var4 = var4 - var2;
            var2 = 0;
            var2 = var5.bind(var6)(var2, var4);
            var3['translateY'] = var2;
            var2 = new Array(1);
            var2[0] = var3;
            var1['transform'] = var2;
            return var1;
        };
        var14 = {};
        var14['scrollPosition'] = var8;
        var14['bannerHeight'] = var6;
        var5['__closure'] = var14;
        var14 = 6302330113586.0;
        var5['__workletHash'] = var14;
        var14 = _closure1_slot20;
        var5['__initData'] = var14;
        var7 = var7.bind(var10)(var5);
        var2 = var13[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.useAnimatedStyle;
        var1 = function u() {
            var1 = {};
            var3 = {};
            var2 = global;
            var6 = var2.Math;
            var5 = var6.min;
            var7 = _closure2_slot0;
            var4 = var7.get;
            var4 = var4.bind(var7)();
            var2 = _closure2_slot1;
            var4 = var4 - var2;
            var2 = 0;
            var2 = var5.bind(var6)(var2, var4);
            var3['translateY'] = var2;
            var2 = new Array(1);
            var2[0] = var3;
            var1['transform'] = var2;
            return var1;
        };
        var5 = {};
        var5['scrollPosition'] = var8;
        var5['bannerHeight'] = var6;
        var1['__closure'] = var5;
        var5 = 16710117141903.0;
        var1['__workletHash'] = var5;
        var5 = _closure1_slot21;
        var1['__initData'] = var5;
        var8 = var2.bind(var3)(var1);
        var3 = _closure1_slot15;
        var10 = _closure1_slot1;
        var5 = 22;
        var1 = var13[var5];
        var2 = var10.bind(var4)(var1);
        var1 = {};
        var6 = new Array(2);
        var6[0] = var7;
        var7 = {};
        var14 = 'hidden';
        var7['overflow'] = var14;
        var6[1] = var7;
        var1['style'] = var6;
        var7 = _closure1_slot14;
        var5 = var13[var5];
        var6 = var10.bind(var4)(var5);
        var5 = {};
        var5['style'] = var8;
        var15 = _closure1_slot14;
        var8 = 23;
        var8 = var13[var8];
        var14 = var10.bind(var4)(var8);
        var8 = {'absolute': true, 'tall': true};
        var8 = var15.bind(var4)(var14, var8);
        var5['children'] = var8;
        var6 = var7.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var8 = _closure1_slot14;
        var7 = _closure1_slot6;
        var6 = {};
        var11 = var11.headerWrapper;
        var6['style'] = var11;
        var11 = _closure1_slot14;
        var9 = 24;
        var9 = var13[var9];
        var10 = var10.bind(var4)(var9);
        var9 = {};
        var9['guild'] = var12;
        var9 = var11.bind(var4)(var10, var9);
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function ReanimatedGuildBanner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var3 = var4.guild;
            var _closure2_slot0 = var3;
            var18 = var4.scrollPosition;
            var _closure2_slot1 = var18;
            var1 = var4.bannerHeight;
            var _closure2_slot2 = var1;
            var19 = var4.bannerWidth;
            var _closure2_slot3 = var19;
            var6 = var4.onPress;
            var _closure2_slot4 = var6;
            var4 = _closure1_slot4;
            var5 = undefined;
            var4 = var4.bind(var5)();
            var7 = var4.height;
            var4 = _closure1_slot17;
            var13 = var4.bind(var5)(var7);
            var _closure2_slot5 = var13;
            var22 = _closure1_slot0;
            var21 = _closure1_slot2;
            var4 = 25;
            var4 = var21[var4];
            var9 = var22.bind(var5)(var4);
            var8 = var9.useStateFromStoresObject;
            var4 = _closure1_slot9;
            var7 = new Array(2);
            var7[0] = var4;
            var4 = _closure1_slot8;
            var7[1] = var4;
            var4 = function() {
                var1 = {};
                var4 = _closure1_slot9;
                var3 = var4.getKey;
                var4 = var3.bind(var4)();
                var3 = null;
                var3 = var3 != var4;
                var1['actionSheetOpen'] = var3;
                var2 = _closure1_slot8;
                var2 = var2.useReducedMotion;
                var1['useReducedMotion'] = var2;
                return var1;
            };
            var4 = var8.bind(var9)(var7, var4);
            var8 = var4.actionSheetOpen;
            var7 = var4.useReducedMotion;
            var4 = 26;
            var4 = var21[var4];
            var9 = var22.bind(var5)(var4);
            var4 = var9.useIsFocused;
            var4 = var4.bind(var9)();
            var _closure2_slot6 = var1;
            var15 = 21;
            var9 = var21[var15];
            var11 = var22.bind(var5)(var9);
            var10 = var11.useSharedValue;
            var9 = 0;
            var20 = var10.bind(var11)(var9);
            var _closure2_slot7 = var20;
            var14 = _closure1_slot3;
            var11 = var14.useCallback;
            var10 = new Array(1);
            var10[0] = var20;
            var9 = function() {
                var4 = _closure2_slot7;
                var3 = var4.set;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 27;
                var2 = var6[var1];
                var1 = undefined;
                var8 = var5.bind(var1)(var2);
                var7 = var8.withSpring;
                var2 = 28;
                var2 = var6[var2];
                var2 = var5.bind(var1)(var2);
                var6 = var2.springStandard;
                var5 = 1;
                var2 = 'animate-always';
                var2 = var7.bind(var8)(var5, var6, var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var16 = var11.bind(var14)(var9, var10);
            var14 = _closure1_slot3;
            var11 = var14.useCallback;
            var10 = new Array(1);
            var10[0] = var20;
            var9 = function() {
                var4 = _closure2_slot7;
                var3 = var4.set;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 27;
                var2 = var6[var1];
                var1 = undefined;
                var8 = var5.bind(var1)(var2);
                var7 = var8.withSpring;
                var2 = 28;
                var2 = var6[var2];
                var2 = var5.bind(var1)(var2);
                var6 = var2.springStandard;
                var5 = 0;
                var2 = 'animate-always';
                var2 = var7.bind(var8)(var5, var6, var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var9 = var11.bind(var14)(var9, var10);
            var14 = _closure1_slot3;
            var11 = var14.useCallback;
            var10 = new Array(2);
            var10[0] = var3;
            var10[1] = var6;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot4;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0002_ip = 23; continue _fun0002 }
 13:
                    var3 = _closure2_slot4;
                    var1 = undefined;
                    var1 = var3.bind(var1)();
 23:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 29;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var17 = var11.bind(var14)(var6, var10);
            var6 = var21[var15];
            var11 = var22.bind(var5)(var6);
            var10 = var11.useAnimatedStyle;
            var6 = function b() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = var2.get;
                    var5 = var1.bind(var2)();
                    var1 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var10 = 21;
                    var2 = var2[var10];
                    var9 = undefined;
                    var8 = var3.bind(var9)(var2);
                    var4 = var8.interpolate;
                    var2 = _closure2_slot6;
                    var3 = [0];
                    var3[1] = var2;
                    var15 = [1, 0];
                    var12 = 'clamp';
                    var18 = var8;
                    var17 = var5;
                    var16 = var3;
                    var14 = var12;
                    var2 = var18[var4](var17, var16, var15, var14, var13);
                    var1['opacity'] = var2;
                    var3 = {};
                    var4 = 0;
                    if(!(!(var5 >= var4))) { _fun0003_ip = 118; continue _fun0003 }
 109:
                    var2 = 2;
                    var2 = var5 / var2;
                    _fun0003_ip = 195; continue _fun0003;
 118:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var10];
                    var11 = var8.bind(var9)(var7);
                    var10 = var11.interpolate;
                    var17 = -var5;
                    var7 = _closure2_slot2;
                    var8 = [0];
                    var8[1] = var7;
                    var13 = -var7;
                    var7 = [0];
                    var7[1] = var13;
                    var18 = var11;
                    var16 = var8;
                    var15 = var7;
                    var14 = var12;
                    var2 = var18[var10](var17, var16, var15, var14, var13);
 195:
                    var3['translateY'] = var2;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var7 = var5 >= var4;
                    var4 = 1;
                    if(var7) { _fun0003_ip = 232; continue _fun0003 }
 220:
                    var6 = _closure2_slot2;
                    var5 = var6 - var5;
                    var4 = var5 / var6;
 232:
                    var3['scale'] = var4;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var14 = {};
            var14['scrollPosition'] = var18;
            var18 = var21[var15];
            var18 = var22.bind(var5)(var18);
            var18 = var18.interpolate;
            var14['interpolate'] = var18;
            var14['maxScrollPosition'] = var1;
            var14['bannerHeight'] = var1;
            var6['__closure'] = var14;
            var14 = 16532496584630.0;
            var6['__workletHash'] = var14;
            var14 = _closure1_slot22;
            var6['__initData'] = var14;
            var6 = var10.bind(var11)(var6);
            var10 = var21[var15];
            var14 = var22.bind(var5)(var10);
            var11 = var14.useAnimatedStyle;
            var10 = function H() {
                var1 = {};
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 21;
                var3 = var3[var2];
                var2 = undefined;
                var6 = var4.bind(var2)(var3);
                var5 = var6.interpolate;
                var3 = _closure2_slot7;
                var2 = var3.get;
                var4 = var2.bind(var3)();
                var3 = [0, 1];
                var2 = [0, 0.3];
                var2 = var5.bind(var6)(var4, var3, var2);
                var1['opacity'] = var2;
                return var1;
            };
            var18 = {};
            var21 = var21[var15];
            var21 = var22.bind(var5)(var21);
            var21 = var21.interpolate;
            var18['interpolate'] = var21;
            var18['pressed'] = var20;
            var10['__closure'] = var18;
            var18 = 13777976622560.0;
            var10['__workletHash'] = var18;
            var18 = _closure1_slot23;
            var10['__initData'] = var18;
            var14 = var11.bind(var14)(var10);
            var18 = _closure1_slot3;
            var11 = var18.useMemo;
            var10 = new Array(3);
            var10[0] = var13;
            var10[1] = var19;
            var10[2] = var1;
            var1 = function() {
                var1 = _closure2_slot5;
                var2 = var1.guildBanner;
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var4 = _closure2_slot3;
                var2['width'] = var4;
                var5 = _closure2_slot2;
                var2['height'] = var5;
                var3 = 2;
                var6 = var4 / var3;
                var4 = -1;
                var6 = var6 * var4;
                var2['marginLeft'] = var6;
                var3 = var5 / var3;
                var3 = var3 * var4;
                var2['marginTop'] = var3;
                var1[1] = var2;
                return var1;
            };
            var19 = var11.bind(var18)(var1, var10);
            var10 = var3.banner;
            var1 = null;
            if(!(var1 != var10)) { _fun0001_ip = 791; continue _fun0001 }
 538:
            var7 = !var7;
            if(!var7) { _fun0001_ip = 547; continue _fun0001 }
 544:
            var7 = !var8;
 547:
            if(!var7) { _fun0001_ip = 553; continue _fun0001 }
 550:
            var7 = var4;
 553:
            if(!var7) { _fun0001_ip = 582; continue _fun0001 }
 556:
            var8 = var3.features;
            var4 = var8.has;
            var3 = _closure1_slot13;
            var3 = var3.ANIMATED_BANNER;
            var7 = var4.bind(var8)(var3);
 582:
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 30;
            var3 = var10[var3];
            var4 = var11.bind(var5)(var3);
            var3 = var4.getAnimatableSourceWithFallback;
            var2 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 30;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getGuildBannerSource;
                var2 = {};
                var1 = _closure2_slot0;
                var5 = var1.id;
                var2['id'] = var5;
                var1 = var1.banner;
                var2['banner'] = var1;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var18 = var3.bind(var4)(var7, var2);
            var4 = _closure1_slot14;
            var2 = 22;
            var2 = var10[var2];
            var3 = var11.bind(var5)(var2);
            var2 = {};
            var2['style'] = var6;
            var8 = _closure1_slot15;
            var7 = _closure1_slot7;
            var6 = {};
            var20 = var13.bannerWrapper;
            var6['style'] = var20;
            var6['onPress'] = var17;
            var6['onPressIn'] = var16;
            var6['onPressOut'] = var9;
            var17 = _closure1_slot14;
            var9 = 31;
            var9 = var10[var9];
            var16 = var11.bind(var5)(var9);
            var9 = {};
            var9['style'] = var19;
            var9['source'] = var18;
            var16 = var17.bind(var5)(var16, var9);
            var9 = new Array(2);
            var9[0] = var16;
            var12 = _closure1_slot14;
            var10 = var10[var15];
            var10 = var11.bind(var5)(var10);
            var11 = var10.View;
            var10 = {};
            var15 = var13.bannerOverlay;
            var13 = new Array(2);
            var13[0] = var15;
            var13[1] = var14;
            var10['style'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 791:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var7[var1];
    var4 = native4;
    var1 = undefined;
    var8 = var4.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var9 = var4.useWindowDimensions;
    var _closure1_slot4 = var9;
    var9 = var4.StyleSheet;
    var _closure1_slot5 = var9;
    var9 = var4.View;
    var _closure1_slot6 = var9;
    var4 = var4.Pressable;
    var _closure1_slot7 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.STICKY_BANNER_ASPECT_RATIO;
    var _closure1_slot10 = var5;
    var5 = var4.BANNER_MAX_HEIGHT_PERCENTAGE;
    var _closure1_slot11 = var5;
    var4 = var4.SEARCH_BAR_MARGIN_BOTTOM;
    var _closure1_slot12 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot13 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot14 = var5;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 15;
    var5 = var7[var4];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = function() {
        var1 = {};
        var2 = {};
        var3 = 5;
        var2['zIndex'] = var3;
        var1['guildHeaderWrapper'] = var2;
        return var1;
    };
    var5 = var9.bind(var10)(var5);
    var _closure1_slot16 = var5;
    var5 = var7[var4];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = function(arg1) {
        var1 = {};
        var2 = {};
        var3 = '100%';
        var2['width'] = var3;
        var5 = _closure1_slot11;
        var4 = arg1;
        var4 = var4 * var5;
        var2['maxHeight'] = var4;
        var4 = _closure1_slot10;
        var2['aspectRatio'] = var4;
        var4 = 'hidden';
        var2['overflow'] = var4;
        var1['bannerWrapper'] = var2;
        var2 = {'left': '50%', 'top': '50%'};
        var1['guildBanner'] = var2;
        var2 = {};
        var4 = _closure1_slot5;
        var6 = var4.absoluteFillObject;
        var7 = var2;
        var4 = copyDataProperties(var7, var6);
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var3 = 16;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.colors;
        var4 = var3.BLACK;
        var3 = 'backgroundColor';
        var2[var3] = var4;
        var1['bannerOverlay'] = var2;
        return var1;
    };
    var5 = var9.bind(var10)(var5);
    var _closure1_slot17 = var5;
    var5 = var7[var4];
    var10 = var6.bind(var1)(var5);
    var9 = var10.experimental_createToken;
    var5 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var2 = var1.gradient;
            var1 = null;
            if(!(var1 == var2)) { _fun0004_ip = 53; continue _fun0004 }
 15:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.colors;
            var1 = var1.PANEL_BG;
            _fun0004_ip = 89; continue _fun0004;
 53:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 16;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.colors;
            var1 = var2.BG_BASE_PRIMARY;
 89:
            return var1;
        }
    };
    var5 = var9.bind(var10)(var5);
    var _closure1_slot18 = var5;
    var4 = var7[var4];
    var9 = var6.bind(var1)(var4);
    var5 = var9.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {};
        var3 = _closure1_slot18;
        var2['backgroundColor'] = var3;
        var1['headerWrapper'] = var2;
        return var1;
    };
    var4 = var5.bind(var9)(var4);
    var _closure1_slot19 = var4;
    var5 = var8.memo;
    var4 = function RedesignGuildHeader(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var15 = var2.guild;
            var _closure2_slot0 = var15;
            var11 = var2.scrollPosition;
            var14 = var2.bannerHeight;
            var13 = var2.bannerWidth;
            var12 = var2.headerHeight;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var2 = _closure1_slot16;
            var5 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 17;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useLocation;
            var2 = var2.bind(var3)();
            var3 = var2.state;
            var16 = null;
            var6 = var16 == var3;
            var2 = undefined;
            if(var6) { _fun0005_ip = 107; continue _fun0005 }
 101:
            var2 = var3.shouldShowSubscribeTooltip;
 107:
            var8 = var16 != var2;
            if(!var8) { _fun0005_ip = 117; continue _fun0005 }
 114:
            var8 = var2;
 117:
            _closure2_slot1 = var8;
            var6 = _closure1_slot3;
            var3 = var6.useCallback;
            var9 = var15.id;
            var2 = new Array(2);
            var2[0] = var9;
            var2[1] = var8;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0006_ip = 78; continue _fun0006 }
 10:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 18;
                    var2 = var7[var2];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var2);
                    var3 = var4.transitionToGuild;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = 19;
                    var1 = var7[var1];
                    var5 = var6.bind(var5)(var1);
                    var1 = var5.getSelectedChannelFromRoute;
                    var1 = var1.bind(var5)();
                    var1 = var3.bind(var4)(var2, var1);
 78:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot15;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var5.guildHeaderWrapper;
            var1['style'] = var5;
            var5 = true;
            var1['preventClipping'] = var5;
            var9 = _closure1_slot14;
            var6 = _closure1_slot25;
            var5 = {};
            var5['guild'] = var15;
            var5['scrollPosition'] = var11;
            var5['bannerHeight'] = var14;
            var5['bannerWidth'] = var13;
            var5['onPress'] = var10;
            var6 = var9.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var17 = _closure1_slot14;
            var9 = _closure1_slot24;
            var6 = {};
            var6['guild'] = var15;
            var6['scrollPosition'] = var11;
            var13 = var15.banner;
            var19 = var16 != var13;
            var18 = 0;
            if(!var19) { _fun0005_ip = 271; continue _fun0005 }
 268:
            var18 = var14;
 271:
            var6['bannerHeight'] = var18;
            var6 = var17.bind(var4)(var9, var6);
            var5[1] = var6;
            var6 = null;
            if(!var8) { _fun0005_ip = 361; continue _fun0005 }
 291:
            var9 = _closure1_slot14;
            var8 = _closure1_slot1;
            var17 = _closure1_slot2;
            var7 = 20;
            var7 = var17[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var15 = var15.banner;
            var15 = var16 != var15;
            var13 = 0;
            if(!var15) { _fun0005_ip = 335; continue _fun0005 }
 332:
            var13 = var14;
 335:
            var7['bannerHeight'] = var13;
            var7['headerHeight'] = var12;
            var7['scrollPosition'] = var11;
            var7['onClosePress'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 361:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = {};
    var8 = 'function RedesignGuildHeaderTsx1(){const{scrollPosition,bannerHeight}=this.__closure;return{transform:[{translateY:Math.max(0,scrollPosition.get()-bannerHeight)}]};}';
    var5['code'] = var8;
    var _closure1_slot20 = var5;
    var5 = {};
    var8 = 'function RedesignGuildHeaderTsx2(){const{scrollPosition,bannerHeight}=this.__closure;return{transform:[{translateY:Math.min(0,scrollPosition.get()-bannerHeight)}]};}';
    var5['code'] = var8;
    var _closure1_slot21 = var5;
    var5 = {};
    var8 = "function RedesignGuildHeaderTsx3(){const{scrollPosition,interpolate,maxScrollPosition,bannerHeight}=this.__closure;const scrollPosValue=scrollPosition.get();return{opacity:interpolate(scrollPosValue,[0,maxScrollPosition],[1,0],'clamp'),transform:[{translateY:scrollPosValue>=0?interpolate(-scrollPosValue,[0,bannerHeight],[0,-bannerHeight],'clamp'):scrollPosValue/2},{scale:scrollPosValue>=0?1:(bannerHeight-scrollPosValue)/bannerHeight}]};}";
    var5['code'] = var8;
    var _closure1_slot22 = var5;
    var5 = {};
    var8 = 'function RedesignGuildHeaderTsx4(){const{interpolate,pressed}=this.__closure;return{opacity:interpolate(pressed.get(),[0,1],[0,0.3])};}';
    var5['code'] = var8;
    var _closure1_slot23 = var5;
    var5 = 32;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/channel_list_v2/native/RedesignGuildHeader.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function useRedesignGuildHeaderHeight(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var3 = undefined;
            var2 = var5.bind(var3)(var2);
            var8 = var2.bind(var3)();
            var4 = 8;
            var4 = var6[var4];
            var4 = var5.bind(var3)(var4);
            var5 = var4.bind(var3)();
            if(var8) { _fun0007_ip = 79; continue _fun0007 }
 48:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 9;
            var2 = var6[var2];
            var4 = var4.bind(var3)(var2);
            var2 = var4.isThemeDark;
            var8 = var2.bind(var4)(var5);
 79:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 10;
            var2 = var4[var2];
            var5 = var6.bind(var3)(var2);
            var2 = var5.useFontScale;
            var5 = var2.bind(var5)();
            var7 = _closure1_slot1;
            var2 = 11;
            var2 = var4[var2];
            var7 = var7.bind(var3)(var2);
            var2 = arg1;
            var7 = var7.bind(var3)(var2);
            var2 = null;
            var2 = var2 != var7;
            var9 = 12;
            var4 = var4[var9];
            var4 = var6.bind(var3)(var4);
            var4 = var4.TextStyleSheet;
            var4 = var4.redesign/heading-18/bold;
            var4 = var4.lineHeight;
            var6 = var4 * var5;
            var4 = 0;
            if(!var8) { _fun0007_ip = 181; continue _fun0007 }
 178:
            var4 = 1;
 181:
            var7 = 0;
            if(!var2) { _fun0007_ip = 225; continue _fun0007 }
 186:
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var2 = var8.bind(var3)(var2);
            var2 = var2.TextStyleSheet;
            var2 = var2.text-xs/medium;
            var2 = var2.lineHeight;
            var7 = var2 * var5;
 225:
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 13;
            var2 = var9[var2];
            var2 = var5.bind(var3)(var2);
            var5 = 16;
            var6 = var5 + var6;
            var6 = var6 + var7;
            var8 = _closure1_slot0;
            var7 = 14;
            var7 = var9[var7];
            var7 = var8.bind(var3)(var7);
            var7 = var7.SMALL_BUTTON_HEIGHT;
            var1 = _closure1_slot12;
            var1 = var7 + var1;
            var1 = var6 + var1;
            var1 = var1 + var5;
            var1 = var1 + var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['useRedesignGuildHeaderHeight'] = var2;
    return var1;
})();