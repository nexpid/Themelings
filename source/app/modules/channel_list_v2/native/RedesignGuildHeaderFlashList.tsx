// app/modules/channel_list_v2/native/RedesignGuildHeaderFlashList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = function ReanimatedGuildStickyHeader(arg1) {
        var1 = arg1;
        var8 = var1.guild;
        var10 = var1.scrollPosition;
        var _closure2_slot0 = var10;
        var11 = var1.bannerHeight;
        var _closure2_slot1 = var11;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 7;
        var3 = var9[var1];
        var4 = undefined;
        var6 = var6.bind(var4)(var3);
        var3 = var6.useAnimatedStyle;
        var2 = function o() {
            var1 = {};
            var3 = {};
            var2 = global;
            var6 = var2.Math;
            var5 = var6.max;
            var4 = _closure2_slot1;
            var7 = _closure2_slot0;
            var2 = var7.get;
            var2 = var2.bind(var7)();
            var4 = var4 - var2;
            var2 = 0;
            var2 = var5.bind(var6)(var2, var4);
            var3['translateY'] = var2;
            var2 = new Array(1);
            var2[0] = var3;
            var1['transform'] = var2;
            return var1;
        };
        var7 = {};
        var7['bannerHeight'] = var11;
        var7['scrollPosition'] = var10;
        var2['__closure'] = var7;
        var7 = 9266558832320.0;
        var2['__workletHash'] = var7;
        var7 = _closure1_slot16;
        var2['__initData'] = var7;
        var10 = var3.bind(var6)(var2);
        var3 = _closure1_slot11;
        var6 = _closure1_slot1;
        var1 = var9[var1];
        var1 = var6.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var7 = new Array(2);
        var7[0] = var10;
        var10 = {};
        var11 = 5;
        var10['zIndex'] = var11;
        var7[1] = var10;
        var1['style'] = var7;
        var7 = _closure1_slot11;
        var5 = 14;
        var5 = var9[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var5['guild'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot19 = var1;
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
            var11 = var4.onPress;
            var _closure2_slot4 = var11;
            var4 = _closure1_slot4;
            var5 = undefined;
            var4 = var4.bind(var5)();
            var6 = var4.height;
            var4 = _closure1_slot15;
            var10 = var4.bind(var5)(var6);
            var _closure2_slot5 = var10;
            var22 = _closure1_slot0;
            var21 = _closure1_slot2;
            var4 = 15;
            var4 = var21[var4];
            var8 = var22.bind(var5)(var4);
            var7 = var8.useStateFromStoresObject;
            var4 = _closure1_slot7;
            var6 = new Array(2);
            var6[0] = var4;
            var4 = _closure1_slot6;
            var6[1] = var4;
            var4 = function() {
                var1 = {};
                var4 = _closure1_slot7;
                var3 = var4.getKey;
                var4 = var3.bind(var4)();
                var3 = null;
                var3 = var3 != var4;
                var1['actionSheetOpen'] = var3;
                var2 = _closure1_slot6;
                var2 = var2.useReducedMotion;
                var1['useReducedMotion'] = var2;
                return var1;
            };
            var4 = var7.bind(var8)(var6, var4);
            var7 = var4.actionSheetOpen;
            var8 = var4.useReducedMotion;
            var4 = 16;
            var4 = var21[var4];
            var6 = var22.bind(var5)(var4);
            var4 = var6.useIsFocused;
            var4 = var4.bind(var6)();
            var _closure2_slot6 = var1;
            var12 = 7;
            var6 = var21[var12];
            var14 = var22.bind(var5)(var6);
            var13 = var14.useSharedValue;
            var6 = 0;
            var20 = var13.bind(var14)(var6);
            var _closure2_slot7 = var20;
            var15 = _closure1_slot3;
            var14 = var15.useCallback;
            var13 = new Array(1);
            var13[0] = var20;
            var6 = function() {
                var4 = _closure2_slot7;
                var3 = var4.set;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 17;
                var2 = var6[var1];
                var1 = undefined;
                var8 = var5.bind(var1)(var2);
                var7 = var8.withSpring;
                var2 = 18;
                var2 = var6[var2];
                var2 = var5.bind(var1)(var2);
                var6 = var2.springStandard;
                var5 = 1;
                var2 = 'animate-always';
                var2 = var7.bind(var8)(var5, var6, var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var13 = var14.bind(var15)(var6, var13);
            var16 = _closure1_slot3;
            var15 = var16.useCallback;
            var14 = new Array(1);
            var14[0] = var20;
            var6 = function() {
                var4 = _closure2_slot7;
                var3 = var4.set;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 17;
                var2 = var6[var1];
                var1 = undefined;
                var8 = var5.bind(var1)(var2);
                var7 = var8.withSpring;
                var2 = 18;
                var2 = var6[var2];
                var2 = var5.bind(var1)(var2);
                var6 = var2.springStandard;
                var5 = 0;
                var2 = 'animate-always';
                var2 = var7.bind(var8)(var5, var6, var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6 = var15.bind(var16)(var6, var14);
            var16 = _closure1_slot3;
            var15 = var16.useCallback;
            var14 = new Array(2);
            var14[0] = var3;
            var14[1] = var11;
            var11 = function() {
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
                    var1 = 19;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var14 = var15.bind(var16)(var11, var14);
            var11 = var21[var12];
            var16 = var22.bind(var5)(var11);
            var15 = var16.useAnimatedStyle;
            var11 = function p() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var9 = 7;
                    var2 = var2[var9];
                    var8 = undefined;
                    var12 = var3.bind(var8)(var2);
                    var10 = var12.interpolate;
                    var6 = _closure2_slot1;
                    var2 = var6.get;
                    var16 = var2.bind(var6)();
                    var2 = _closure2_slot6;
                    var3 = [0];
                    var3[1] = var2;
                    var14 = [1, 0];
                    var11 = 'clamp';
                    var17 = var12;
                    var15 = var3;
                    var13 = var11;
                    var2 = var17[var10](var16, var15, var14, var13, var12);
                    var1['opacity'] = var2;
                    var3 = {};
                    var2 = var6.get;
                    var2 = var2.bind(var6)();
                    var6 = 0;
                    if(!(!(var2 >= var6))) { _fun0003_ip = 140; continue _fun0003 }
 115:
                    var7 = _closure2_slot1;
                    var2 = var7.get;
                    var2 = var2.bind(var7)();
                    var7 = -var2;
                    var2 = 2;
                    var2 = var7 / var2;
                    _fun0003_ip = 227; continue _fun0003;
 140:
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var9];
                    var10 = var7.bind(var8)(var4);
                    var9 = var10.interpolate;
                    var7 = _closure2_slot1;
                    var4 = var7.get;
                    var16 = var4.bind(var7)();
                    var4 = _closure2_slot2;
                    var7 = [0];
                    var7[1] = var4;
                    var12 = -var4;
                    var4 = [0];
                    var4[1] = var12;
                    var17 = var10;
                    var15 = var7;
                    var14 = var4;
                    var13 = var11;
                    var2 = var17[var9](var16, var15, var14, var13, var12);
 227:
                    var3['translateY'] = var2;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var7 = _closure2_slot1;
                    var4 = var7.get;
                    var4 = var4.bind(var7)();
                    var6 = var4 >= var6;
                    var4 = 1;
                    if(var6) { _fun0003_ip = 290; continue _fun0003 }
 265:
                    var6 = _closure2_slot2;
                    var7 = _closure2_slot1;
                    var5 = var7.get;
                    var5 = var5.bind(var7)();
                    var5 = var6 - var5;
                    var4 = var5 / var6;
 290:
                    var3['scale'] = var4;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var17 = {};
            var23 = var21[var12];
            var23 = var22.bind(var5)(var23);
            var23 = var23.interpolate;
            var17['interpolate'] = var23;
            var17['scrollPosition'] = var18;
            var17['maxScrollPosition'] = var1;
            var17['bannerHeight'] = var1;
            var11['__closure'] = var17;
            var17 = 15907500536097.0;
            var11['__workletHash'] = var17;
            var17 = _closure1_slot17;
            var11['__initData'] = var17;
            var18 = var15.bind(var16)(var11);
            var11 = var21[var12];
            var16 = var22.bind(var5)(var11);
            var15 = var16.useAnimatedStyle;
            var11 = function P() {
                var1 = {};
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 7;
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
            var17 = {};
            var21 = var21[var12];
            var21 = var22.bind(var5)(var21);
            var21 = var21.interpolate;
            var17['interpolate'] = var21;
            var17['pressed'] = var20;
            var11['__closure'] = var17;
            var17 = 4831335588917.0;
            var11['__workletHash'] = var17;
            var17 = _closure1_slot18;
            var11['__initData'] = var17;
            var11 = var15.bind(var16)(var11);
            var17 = _closure1_slot3;
            var16 = var17.useMemo;
            var15 = new Array(3);
            var15[0] = var10;
            var15[1] = var19;
            var15[2] = var1;
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
            var16 = var16.bind(var17)(var1, var15);
            var15 = var3.banner;
            var1 = null;
            if(!(var1 != var15)) { _fun0001_ip = 771; continue _fun0001 }
 538:
            var15 = !var8;
            if(!var15) { _fun0001_ip = 547; continue _fun0001 }
 544:
            var15 = !var7;
 547:
            if(!var15) { _fun0001_ip = 553; continue _fun0001 }
 550:
            var15 = var4;
 553:
            if(!var15) { _fun0001_ip = 582; continue _fun0001 }
 556:
            var7 = var3.features;
            var4 = var7.has;
            var3 = _closure1_slot10;
            var3 = var3.ANIMATED_BANNER;
            var15 = var4.bind(var7)(var3);
 582:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 20;
            var3 = var7[var3];
            var4 = var8.bind(var5)(var3);
            var3 = var4.getAnimatableSourceWithFallback;
            var2 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 20;
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
            var15 = var3.bind(var4)(var15, var2);
            var4 = _closure1_slot13;
            var3 = _closure1_slot14;
            var2 = {};
            var19 = var10.bannerWrapper;
            var17 = new Array(2);
            var17[0] = var19;
            var17[1] = var18;
            var2['style'] = var17;
            var2['onPress'] = var14;
            var2['onPressIn'] = var13;
            var2['onPressOut'] = var6;
            var14 = _closure1_slot11;
            var6 = 21;
            var6 = var7[var6];
            var13 = var8.bind(var5)(var6);
            var6 = {};
            var6['style'] = var16;
            var6['source'] = var15;
            var13 = var14.bind(var5)(var13, var6);
            var6 = new Array(2);
            var6[0] = var13;
            var9 = _closure1_slot11;
            var7 = var7[var12];
            var7 = var8.bind(var5)(var7);
            var8 = var7.View;
            var7 = {};
            var12 = var10.bannerOverlay;
            var10 = new Array(2);
            var10[0] = var12;
            var10[1] = var11;
            var7['style'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 771:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var8 = var6[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var8 = var2.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var9 = var2.Pressable;
    var10 = var2.useWindowDimensions;
    var _closure1_slot4 = var10;
    var2 = var2.StyleSheet;
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var10 = var2.STICKY_BANNER_ASPECT_RATIO;
    var _closure1_slot8 = var10;
    var2 = var2.BANNER_MAX_HEIGHT_PERCENTAGE;
    var _closure1_slot9 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.GuildFeatures;
    var _closure1_slot10 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var10 = var2.jsx;
    var _closure1_slot11 = var10;
    var10 = var2.Fragment;
    var _closure1_slot12 = var10;
    var2 = var2.jsxs;
    var _closure1_slot13 = var2;
    var2 = 7;
    var2 = var6[var2];
    var4 = var4.bind(var1)(var2);
    var2 = var4.createAnimatedComponent;
    var2 = var2.bind(var4)(var9);
    var _closure1_slot14 = var2;
    var2 = 8;
    var2 = var6[var2];
    var9 = var5.bind(var1)(var2);
    var4 = var9.createStyles;
    var2 = function(arg1) {
        var1 = {};
        var2 = {'position': 'absolute', 'width': '100%', 'maxHeight': null, 'aspectRatio': null, 'overflow': 'hidden', 'zIndex': 1};
        var5 = _closure1_slot9;
        var4 = arg1;
        var4 = var4 * var5;
        var2['maxHeight'] = var4;
        var4 = _closure1_slot8;
        var2['aspectRatio'] = var4;
        var1['bannerWrapper'] = var2;
        var2 = {'position': 'absolute', 'left': '50%', 'top': '50%'};
        var1['guildBanner'] = var2;
        var2 = {};
        var4 = _closure1_slot5;
        var6 = var4.absoluteFillObject;
        var7 = var2;
        var4 = copyDataProperties(var7, var6);
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var3 = 9;
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
    var2 = var4.bind(var9)(var2);
    var _closure1_slot15 = var2;
    var4 = var8.memo;
    var2 = function RedesignGuildHeaderFlashList(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 10;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useLocation;
            var2 = var2.bind(var3)();
            var3 = var2.state;
            var16 = null;
            var5 = var16 == var3;
            var2 = undefined;
            if(var5) { _fun0004_ip = 99; continue _fun0004 }
 93:
            var2 = var3.shouldShowSubscribeTooltip;
 99:
            var8 = var16 != var2;
            if(!var8) { _fun0004_ip = 109; continue _fun0004 }
 106:
            var8 = var2;
 109:
            _closure2_slot1 = var8;
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var6 = var15.id;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var8;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0005_ip = 78; continue _fun0005 }
 10:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 11;
                    var2 = var7[var2];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var2);
                    var3 = var4.transitionToGuild;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = 12;
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
            var10 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot13;
            var2 = _closure1_slot12;
            var1 = {};
            var9 = _closure1_slot11;
            var6 = _closure1_slot20;
            var5 = {};
            var5['guild'] = var15;
            var5['scrollPosition'] = var11;
            var5['bannerHeight'] = var14;
            var5['bannerWidth'] = var13;
            var5['onPress'] = var10;
            var6 = var9.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var17 = _closure1_slot11;
            var9 = _closure1_slot19;
            var6 = {};
            var6['guild'] = var15;
            var6['scrollPosition'] = var11;
            var13 = var15.banner;
            var19 = var16 != var13;
            var18 = 0;
            if(!var19) { _fun0004_ip = 246; continue _fun0004 }
 243:
            var18 = var14;
 246:
            var6['bannerHeight'] = var18;
            var6 = var17.bind(var4)(var9, var6);
            var5[1] = var6;
            var6 = null;
            if(!var8) { _fun0004_ip = 342; continue _fun0004 }
 266:
            var9 = _closure1_slot11;
            var8 = _closure1_slot0;
            var17 = _closure1_slot2;
            var7 = 13;
            var7 = var17[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.PremiumGuildSubscriptionPromptTooltipFlashList;
            var7 = {};
            var15 = var15.banner;
            var15 = var16 != var15;
            var13 = 0;
            if(!var15) { _fun0004_ip = 316; continue _fun0004 }
 313:
            var13 = var14;
 316:
            var7['bannerHeight'] = var13;
            var7['headerHeight'] = var12;
            var7['scrollPosition'] = var11;
            var7['onClosePress'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 342:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var8)(var2);
    var4 = {};
    var8 = 'function RedesignGuildHeaderFlashListTsx1(){const{bannerHeight,scrollPosition}=this.__closure;return{transform:[{translateY:Math.max(0,bannerHeight-scrollPosition.get())}]};}';
    var4['code'] = var8;
    var _closure1_slot16 = var4;
    var4 = {};
    var8 = "function RedesignGuildHeaderFlashListTsx2(){const{interpolate,scrollPosition,maxScrollPosition,bannerHeight}=this.__closure;return{opacity:interpolate(scrollPosition.get(),[0,maxScrollPosition],[1,0],'clamp'),transform:[{translateY:scrollPosition.get()>=0?interpolate(scrollPosition.get(),[0,bannerHeight],[0,-bannerHeight],'clamp'):-scrollPosition.get()/2},{scale:scrollPosition.get()>=0?1:(bannerHeight-scrollPosition.get())/bannerHeight}]};}";
    var4['code'] = var8;
    var _closure1_slot17 = var4;
    var4 = {};
    var8 = 'function RedesignGuildHeaderFlashListTsx3(){const{interpolate,pressed}=this.__closure;return{opacity:interpolate(pressed.get(),[0,1],[0,0.3])};}';
    var4['code'] = var8;
    var _closure1_slot18 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/RedesignGuildHeaderFlashList.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();