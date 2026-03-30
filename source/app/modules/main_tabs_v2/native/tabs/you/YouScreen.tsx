// app/modules/main_tabs_v2/native/tabs/you/YouScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function UnconnectedYouScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var11 = var2.user;
            var1 = var2.navigateToSettings;
            var _closure2_slot0 = var1;
            var6 = var2.navigateToPremium;
            var3 = var2.navigateToShop;
            var _closure2_slot1 = var3;
            var9 = var2.navigateToProfileCustomization;
            var8 = var2.navigateToCustomStatus;
            var5 = var2.navigateToFriends;
            var2 = var2.initialTab;
            var4 = undefined;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var _closure2_slot19 = var4;
            var _closure2_slot20 = var4;
            var _closure2_slot21 = var4;
            var _closure2_slot22 = var4;
            var23 = _closure1_slot1;
            var28 = _closure1_slot2;
            var7 = 20;
            var7 = var28[var7];
            var7 = var23.bind(var4)(var7);
            var17 = var7.bind(var4)();
            var _closure2_slot2 = var17;
            var7 = _closure1_slot17;
            var38 = var17 * var7;
            var _closure2_slot3 = var38;
            var7 = _closure1_slot26;
            var35 = var7.bind(var4)(var17);
            var7 = 21;
            var7 = var28[var7];
            var10 = var23.bind(var4)(var7);
            var7 = {};
            var16 = _closure1_slot0;
            var12 = 22;
            var13 = var28[var12];
            var13 = var16.bind(var4)(var13);
            var13 = var13.ImpressionTypes;
            var13 = var13.VIEW;
            var7['type'] = var13;
            var12 = var28[var12];
            var12 = var16.bind(var4)(var12);
            var12 = var12.ImpressionNames;
            var12 = var12.USER_YOU_SCREEN;
            var7['name'] = var12;
            var7 = var10.bind(var4)(var7);
            var7 = 23;
            var7 = var28[var7];
            var10 = var23.bind(var4)(var7);
            var7 = var11.id;
            var12 = var10.bind(var4)(var7);
            var7 = 24;
            var7 = var28[var7];
            var7 = var23.bind(var4)(var7);
            var20 = var7.bind(var4)();
            var7 = 25;
            var7 = var28[var7];
            var10 = var23.bind(var4)(var7);
            var7 = {};
            var7['user'] = var11;
            var7['displayProfile'] = var12;
            var7 = var10.bind(var4)(var7);
            var15 = var7.theme;
            var14 = var7.primaryColor;
            var10 = var7.secondaryColor;
            var7 = 26;
            var7 = var28[var7];
            var7 = var23.bind(var4)(var7);
            var13 = var7.bind(var4)();
            var18 = _closure1_slot4;
            var7 = var18.useRef;
            var27 = null;
            var25 = var7.bind(var18)(var27);
            var21 = 15;
            var7 = var28[var21];
            var18 = var16.bind(var4)(var7);
            var7 = var18.useSharedValue;
            var41 = 0;
            var33 = var7.bind(var18)(var41);
            var _closure2_slot4 = var33;
            var7 = var28[var21];
            var22 = var16.bind(var4)(var7);
            var18 = var22.useAnimatedScrollHandler;
            var7 = function G(arg1) {
                var3 = _closure2_slot4;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.contentOffset;
                var1 = var1.y;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var24 = {};
            var24['scrollPosition'] = var33;
            var7['__closure'] = var24;
            var24 = 952837799380.0;
            var7['__workletHash'] = var24;
            var24 = _closure1_slot28;
            var7['__initData'] = var24;
            var22 = var18.bind(var22)(var7);
            var26 = _closure1_slot4;
            var24 = var26.useMemo;
            var18 = new Array(1);
            var18[0] = var17;
            var7 = function() {
                var2 = _closure2_slot2;
                var1 = -1;
                var1 = var1 * var2;
                return var1;
            };
            var39 = var24.bind(var26)(var7, var18);
            var _closure2_slot5 = var39;
            var7 = var28[var21];
            var24 = var16.bind(var4)(var7);
            var18 = var24.useDerivedValue;
            var7 = function j() {
                var2 = _closure2_slot4;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var2 <= var1;
                return var1;
            };
            var26 = {};
            var26['scrollPosition'] = var33;
            var7['__closure'] = var26;
            var26 = 588222792165.0;
            var7['__workletHash'] = var26;
            var26 = _closure1_slot29;
            var7['__initData'] = var26;
            var37 = var18.bind(var24)(var7);
            var _closure2_slot6 = var37;
            var29 = 27;
            var7 = var28[var29];
            var30 = var16.bind(var4)(var7);
            var26 = var30.useStateFromStores;
            var7 = _closure1_slot6;
            var24 = new Array(1);
            var24[0] = var7;
            var18 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure1_slot6;
                    var3 = var1.useReducedMotion;
                    var1 = 1;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = _closure1_slot14;
case 2:
                    return var1;
                }
            };
            var7 = new Array(0);
            var36 = var26.bind(var30)(var24, var18, var7);
            var _closure2_slot7 = var36;
            var18 = _closure1_slot4;
            var7 = var18.useState;
            var18 = var7.bind(var18)(var41);
            var7 = _closure1_slot3;
            var46 = 2;
            var7 = var7.bind(var4)(var18, var46);
            var26 = var7[var41];
            var34 = 1;
            var7 = var7[var34];
            var _closure2_slot8 = var7;
            var30 = _closure1_slot4;
            var24 = var30.useCallback;
            var18 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.width;
                var2 = _closure2_slot8;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var7 = new Array(0);
            var18 = var24.bind(var30)(var18, var7);
            var7 = var28[var21];
            var30 = var16.bind(var4)(var7);
            var24 = var30.useAnimatedStyle;
            var7 = function J() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 15;
                    var1 = var9[var4];
                    var6 = undefined;
                    var13 = var7.bind(var6)(var1);
                    var12 = var13.interpolate;
                    var5 = _closure2_slot4;
                    var1 = var5.get;
                    var11 = var1.bind(var5)();
                    var1 = _closure2_slot5;
                    var10 = new Array(2);
                    var10[0] = var1;
                    var8 = 0;
                    var10[1] = var8;
                    var14 = _closure1_slot13;
                    var3 = new Array(2);
                    var3[0] = var14;
                    var14 = 1;
                    var3[1] = var14;
                    var3 = var12.bind(var13)(var11, var10, var3);
                    var4 = var9[var4];
                    var7 = var7.bind(var6)(var4);
                    var6 = var7.interpolate;
                    var4 = var5.get;
                    var5 = var4.bind(var5)();
                    var4 = new Array(2);
                    var4[0] = var1;
                    var4[1] = var8;
                    var9 = _closure2_slot3;
                    var1 = new Array(2);
                    var1[0] = var9;
                    var1[1] = var8;
                    var5 = var6.bind(var7)(var5, var4, var1);
                    var1 = {};
                    var4 = _closure2_slot6;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var2 = new Array(0);
                    _fun0003_ip = 6; continue _fun0003;
case 4:
                    var4 = {};
                    var4['scale'] = var3;
                    var3 = new Array(2);
                    var3[0] = var4;
                    var4 = {};
                    var4['translateY'] = var5;
                    var3[1] = var4;
                    var2 = var3;
case 6:
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var32 = {};
            var40 = var28[var21];
            var40 = var16.bind(var4)(var40);
            var40 = var40.interpolate;
            var32['interpolate'] = var40;
            var32['scrollPosition'] = var33;
            var32['minScrollPosition'] = var39;
            var39 = _closure1_slot13;
            var32['SCALE_FACTOR'] = var39;
            var32['translateOnScale'] = var38;
            var32['isNegativeScrollPosition'] = var37;
            var7['__closure'] = var32;
            var32 = 5882939038632.0;
            var7['__workletHash'] = var32;
            var32 = _closure1_slot30;
            var7['__initData'] = var32;
            var43 = var24.bind(var30)(var7);
            var7 = var28[var21];
            var30 = var16.bind(var4)(var7);
            var24 = var30.useAnimatedStyle;
            var7 = function X() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot6;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0004_ip = 7; continue _fun0004 }
case 8:
                    var2 = new Array(0);
                    _fun0004_ip = 9; continue _fun0004;
case 7:
                    var4 = {};
                    var5 = _closure2_slot4;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var4['translateY'] = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var2 = var3;
case 9:
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var32 = {};
            var32['isNegativeScrollPosition'] = var37;
            var32['scrollPosition'] = var33;
            var7['__closure'] = var32;
            var32 = 17425045144242.0;
            var7['__workletHash'] = var32;
            var32 = _closure1_slot31;
            var7['__initData'] = var32;
            var30 = var24.bind(var30)(var7);
            var7 = var28[var21];
            var24 = var16.bind(var4)(var7);
            var16 = var24.useAnimatedStyle;
            var7 = function K() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot6;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0005_ip = 7; continue _fun0005 }
case 8:
                    var2 = new Array(0);
                    _fun0005_ip = 10; continue _fun0005;
case 7:
                    var4 = {};
                    var6 = _closure2_slot4;
                    var5 = var6.get;
                    var5 = var5.bind(var6)();
                    var6 = _closure2_slot7;
                    var3 = 1;
                    var3 = var3 / var6;
                    var3 = var5 * var3;
                    var4['translateY'] = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var2 = var3;
case 10:
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var32 = {};
            var32['isNegativeScrollPosition'] = var37;
            var32['scrollPosition'] = var33;
            var32['coefficient'] = var36;
            var7['__closure'] = var32;
            var32 = 9336428823274.0;
            var7['__workletHash'] = var32;
            var32 = _closure1_slot32;
            var7['__initData'] = var32;
            var16 = var16.bind(var24)(var7);
            var7 = 28;
            var7 = var28[var7];
            var7 = var23.bind(var4)(var7);
            var7 = var7.bind(var4)();
            var24 = var7.isChatBesideChannelList;
            var7 = 29;
            var7 = var28[var7];
            var7 = var23.bind(var4)(var7);
            var7 = var7.bind(var4)();
            var23 = var7.width;
            var38 = var7.height;
            var _closure2_slot9 = var38;
            var7 = var20.right;
            var23 = var23 - var7;
            var7 = var20.left;
            var23 = var23 - var7;
            var7 = 0;
            if(!var24) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var7 = 16;
case 11:
            var24 = var23 - var7;
            var39 = var24;
            if(!(var26 > var41)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var7 = global;
            var23 = var7.Math;
            var7 = var23.min;
            var39 = var7.bind(var23)(var24, var26);
case 13:
            _closure2_slot10 = var39;
            var24 = _closure1_slot0;
            var26 = _closure1_slot2;
            var7 = var26[var21];
            var28 = var24.bind(var4)(var7);
            var23 = var28.useAnimatedProps;
            var7 = function q() {
                var1 = {};
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 15;
                var5 = var7[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var5);
                var5 = var6.clamp;
                var2 = var7[var2];
                var8 = var4.bind(var3)(var2);
                var7 = var8.interpolate;
                var4 = _closure2_slot4;
                var3 = var4.get;
                var4 = var3.bind(var4)();
                var3 = _closure2_slot9;
                var3 = -var3;
                var2 = _closure2_slot7;
                var2 = var3 * var2;
                var3 = [0];
                var3[1] = var2;
                var2 = [0, 1];
                var4 = var7.bind(var8)(var4, var3, var2);
                var3 = 0;
                var2 = 1;
                var2 = var5.bind(var6)(var4, var3, var2);
                var1['blurAmount'] = var2;
                return var1;
            };
            var32 = {};
            var37 = var26[var21];
            var37 = var24.bind(var4)(var37);
            var37 = var37.clamp;
            var32['clamp'] = var37;
            var37 = var26[var21];
            var37 = var24.bind(var4)(var37);
            var37 = var37.interpolate;
            var32['interpolate'] = var37;
            var32['scrollPosition'] = var33;
            var32['windowHeight'] = var38;
            var32['coefficient'] = var36;
            var7['__closure'] = var32;
            var32 = 2402745247838.0;
            var7['__workletHash'] = var32;
            var32 = _closure1_slot33;
            var7['__initData'] = var32;
            var45 = var23.bind(var28)(var7);
            var28 = _closure1_slot4;
            var23 = var28.useState;
            var7 = var33.get;
            var7 = var7.bind(var33)();
            var7 = var7 < var41;
            var23 = var23.bind(var28)(var7);
            var7 = _closure1_slot3;
            var7 = var7.bind(var4)(var23, var46);
            var42 = var7[var41];
            var36 = var7[var34];
            _closure2_slot11 = var36;
            var7 = var26[var21];
            var32 = var24.bind(var4)(var7);
            var28 = var32.useAnimatedReaction;
            var23 = function Q() {
                var2 = _closure2_slot4;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var2 < var1;
                return var1;
            };
            var7 = {};
            var7['scrollPosition'] = var33;
            var23['__closure'] = var7;
            var7 = 1515709080541.0;
            var23['__workletHash'] = var7;
            var7 = _closure1_slot34;
            var23['__initData'] = var7;
            var7 = function Z(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = arg1;
                    var1 = arg2;
                    var1 = var4 !== var1;
                    if(!var1) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var2 = var3[var2];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.runOnJS;
                    var2 = _closure2_slot11;
                    var2 = var5.bind(var6)(var2);
                    var1 = var2.bind(var3)(var4);
case 15:
                    return var1;
                }
            };
            var33 = {};
            var37 = var26[var21];
            var37 = var24.bind(var4)(var37);
            var37 = var37.runOnJS;
            var33['runOnJS'] = var37;
            var33['setShowBlur'] = var36;
            var7['__closure'] = var33;
            var33 = 11057160578223.0;
            var7['__workletHash'] = var33;
            var33 = _closure1_slot35;
            var7['__initData'] = var33;
            var7 = var28.bind(var32)(var23, var7);
            var28 = _closure1_slot4;
            var23 = var28.useState;
            var7 = false;
            var23 = var23.bind(var28)(var7);
            var7 = _closure1_slot3;
            var23 = var7.bind(var4)(var23, var46);
            var7 = var23[var41];
            _closure2_slot12 = var7;
            var23 = var23[var34];
            _closure2_slot13 = var23;
            var23 = 30;
            var23 = var26[var23];
            var23 = var24.bind(var4)(var23);
            var24 = var23.GifAutoPlay;
            var23 = var24.getSetting;
            var48 = var23.bind(var24)();
            if(var48) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var48 = var7;
case 17:
            var7 = var27 == var12;
            var28 = undefined;
            if(var7) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var23 = var12.getBannerURL;
            var7 = {};
            var7['canAnimate'] = var48;
            var7['size'] = var39;
            var28 = var23.bind(var12)(var7);
case 19:
            var7 = var27 != var28;
            var51 = null;
            if(!var7) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var7 = 31;
            var7 = var24[var7];
            var23 = var23.bind(var4)(var7);
            var7 = var23.makeSource;
            var51 = var7.bind(var23)(var28);
case 21:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var7 = 31;
            var7 = var24[var7];
            var26 = var23.bind(var4)(var7);
            var7 = var26.isAnimatedImageURL;
            var40 = var7.bind(var26)(var28);
            var33 = 32;
            var7 = var24[var33];
            var7 = var23.bind(var4)(var7);
            var32 = var7.intl;
            var28 = var32.formatToPlainString;
            var7 = var24[var33];
            var7 = var23.bind(var4)(var7);
            var7 = var7.t;
            var26 = var7.gVn4uJ;
            var7 = {};
            var36 = var11.username;
            var7['username'] = var36;
            var52 = var28.bind(var32)(var26, var7);
            var7 = 33;
            var7 = var24[var7];
            var24 = var23.bind(var4)(var7);
            var23 = var24.useUserProfileBannerBackgroundColor;
            var7 = {};
            var7['user'] = var11;
            var7['displayProfile'] = var12;
            var47 = var23.bind(var24)(var7);
            var7 = var27 == var12;
            if(var7) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var23 = var12.isLoaded;
            var7 = !var23;
case 23:
            var24 = _closure1_slot1;
            var28 = _closure1_slot2;
            var23 = 34;
            var23 = var28[var23];
            var23 = var24.bind(var4)(var23);
            var24 = var23.bind(var4)();
            var36 = _closure1_slot4;
            var32 = var36.useMemo;
            var26 = new Array(2);
            var26[0] = var17;
            var26[1] = var39;
            var23 = function() {
                var1 = {};
                var3 = _closure2_slot10;
                var1['width'] = var3;
                var2 = _closure2_slot2;
                var1['height'] = var2;
                return var1;
            };
            var54 = var32.bind(var36)(var23, var26);
            var26 = _closure1_slot0;
            var23 = 35;
            var23 = var28[var23];
            var26 = var26.bind(var4)(var23);
            var23 = var26.useYouBarEnabled;
            var49 = 'YouScreen';
            var26 = var23.bind(var26)(var49);
            var23 = _closure1_slot12;
            var23 = var23.bind(var4)(var49);
            var28 = var24;
            if(var28) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var28 = var26;
case 25:
            if(var24) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            if(var23) { _fun0001_ip = 27; continue _fun0001 }
case 29:
            var37 = var20.top;
            _fun0001_ip = 30; continue _fun0001;
case 27:
            var37 = _closure1_slot15;
case 30:
            var20 = var27 == var12;
            var32 = undefined;
            if(var20) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var20 = var12.profileEffect;
            var24 = var27 == var20;
            var32 = undefined;
            if(var24) { _fun0001_ip = 31; continue _fun0001 }
case 33:
            var32 = var20.skuId;
case 31:
            var20 = var27 != var32;
            var26 = _closure1_slot0;
            var24 = _closure1_slot2;
            var24 = var24[var29];
            var36 = var26.bind(var4)(var24);
            var29 = var36.useStateFromStores;
            var24 = _closure1_slot7;
            var26 = new Array(1);
            var26[0] = var24;
            var24 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getMarketingBySurface;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 36;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.CollectiblesMarketingSurface;
                var1 = var1.MOBILE_SHOP_BUTTON;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var55 = var29.bind(var36)(var26, var24);
            _closure2_slot14 = var55;
            var24 = var27 == var55;
            var29 = undefined;
            if(var24) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var29 = var55.dismissibleContent;
case 34:
            var36 = _closure1_slot0;
            var24 = _closure1_slot2;
            var59 = 37;
            var26 = var24[var59];
            var26 = var36.bind(var4)(var26);
            var26 = var26.DismissibleContent;
            var26 = var26.COLLECTIBLES_SHOP_ENTRY_MARKETING;
            var29 = var29 === var26;
            _closure2_slot15 = var29;
            var26 = 38;
            var26 = var24[var26];
            var44 = var36.bind(var4)(var26);
            var26 = var44.useMobileWishlistOwnerExperiment;
            var26 = var26.bind(var44)(var49);
            _closure2_slot16 = var26;
            var53 = _closure1_slot4;
            var50 = var53.useMemo;
            var44 = var26.enabled;
            var49 = new Array(1);
            var49[0] = var44;
            var44 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot16;
                    var1 = var1.enabled;
                    if(var1) { _fun0007_ip = 8; continue _fun0007 }
case 36:
                    var1 = new Array(0);
                    _fun0007_ip = 37; continue _fun0007;
case 8:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 37;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.DismissibleContent;
                    var3 = var2.WISHLIST_MOBILE_YOU_SCREEN_COACHMARK;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 37:
                    return var1;
                }
            };
            var44 = var50.bind(var53)(var44, var49);
            var49 = 39;
            var24 = var24[var49];
            var36 = var36.bind(var4)(var24);
            var24 = var36.useSelectedDismissibleContent;
            var36 = var24.bind(var36)(var44);
            var24 = _closure1_slot3;
            var36 = var24.bind(var4)(var36, var46);
            var24 = var36[var41];
            var58 = var36[var34];
            var36 = var26.enabled;
            if(!var36) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var36 = var27 != var24;
case 38:
            _closure2_slot17 = var36;
            var50 = _closure1_slot4;
            var44 = var50.useMemo;
            var26 = new Array(3);
            var26[0] = var36;
            var26[1] = var29;
            var26[2] = var55;
            var24 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot17;
                    if(var2) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                    var3 = _closure2_slot14;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 40; continue _fun0008 }
case 42:
                    var2 = _closure2_slot15;
                    if(var2) { _fun0008_ip = 40; continue _fun0008 }
case 7:
                    var1 = _closure2_slot14;
                    var2 = var1.dismissibleContent;
                    var1 = new Array(1);
                    var1[0] = var2;
                    _fun0008_ip = 43; continue _fun0008;
case 40:
                    var1 = new Array(0);
case 43:
                    return var1;
                }
            };
            var53 = var44.bind(var50)(var24, var26);
            var50 = _closure1_slot4;
            var44 = var50.useMemo;
            var26 = new Array(2);
            var26[0] = var36;
            var26[1] = var55;
            var24 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot17;
                    if(var1) { _fun0009_ip = 44; continue _fun0009 }
case 16:
                    var1 = _closure2_slot14;
                    var4 = null;
                    var1 = var4 == var1;
                    var6 = undefined;
                    var5 = undefined;
                    if(var1) { _fun0009_ip = 45; continue _fun0009 }
case 46:
                    var1 = _closure2_slot14;
                    var5 = var1.type;
case 45:
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 41;
                    var1 = var7[var1];
                    var1 = var2.bind(var6)(var1);
                    var1 = var1.CollectiblesMarketingType;
                    var2 = var1.COACHTIP;
                    var1 = null;
                    if(!(var5 === var2)) { _fun0009_ip = 47; continue _fun0009 }
case 48:
                    var2 = {};
                    var5 = _closure2_slot14;
                    var5 = var5.title;
                    var2['title'] = var5;
                    var5 = _closure2_slot14;
                    var5 = var5.body;
                    var6 = var4 != var5;
                    var4 = '';
                    if(!var6) { _fun0009_ip = 49; continue _fun0009 }
case 50:
                    var4 = var5;
case 49:
                    var2['description'] = var4;
                    var4 = {};
                    var5 = _closure2_slot14;
                    var5 = var5.avatar;
                    var4['uri'] = var5;
                    var2['avatarSrc'] = var4;
                    var3 = _closure2_slot14;
                    var4 = var3.decorations;
                    var3 = 0;
                    var3 = var4[var3];
                    var2['decorationAsset'] = var3;
                    var1 = var2;
case 47:
                    _fun0009_ip = 51; continue _fun0009;
case 44:
                    var2 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 32;
                    var4 = var8[var3];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var4);
                    var9 = var4.intl;
                    var5 = var9.string;
                    var4 = var8[var3];
                    var4 = var7.bind(var6)(var4);
                    var4 = var4.t;
                    var4 = var4.epBu6F;
                    var4 = var5.bind(var9)(var4);
                    var2['title'] = var4;
                    var4 = var8[var3];
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    var3 = var3.o8+3AX;
                    var3 = var4.bind(var5)(var3);
                    var2['description'] = var3;
                    var3 = {};
                    var2['avatarSrc'] = var3;
                    var3 = '';
                    var2['decorationAsset'] = var3;
                    var3 = function renderImgComponent() {
                        var4 = _closure1_slot23;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 40;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var5 = {};
                        var6 = 'https://cdn.discordapp.com/assets/content/1979309f7455b06e0bc1e8f5da89de9934155a0a9a74bfff5b680c82fb45d53f.png';
                        var5['uri'] = var6;
                        var1['source'] = var5;
                        var5 = {'width': 80, 'height': 80};
                        var1['style'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var2['renderImgComponent'] = var3;
                    var1 = var2;
case 51:
                    return var1;
                }
            };
            var56 = var44.bind(var50)(var24, var26);
            _closure2_slot18 = var56;
            var44 = _closure1_slot0;
            var26 = _closure1_slot2;
            var24 = var26[var49];
            var50 = var44.bind(var4)(var24);
            var24 = var50.useSelectedDismissibleContent;
            var50 = var24.bind(var50)(var53);
            var24 = _closure1_slot3;
            var24 = var24.bind(var4)(var50, var46);
            var50 = var24[var41];
            _closure2_slot19 = var50;
            var24 = var24[var34];
            var26 = var26[var49];
            var53 = var44.bind(var4)(var26);
            var49 = var53.useSelectedVersionedDismissibleContent;
            var44 = null;
            if(var36) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var44 = null;
            if(!var29) { _fun0001_ip = 52; continue _fun0001 }
case 54:
            var26 = var27 == var55;
            var57 = undefined;
            if(var26) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var57 = var55.type;
case 55:
            var60 = _closure1_slot0;
            var61 = _closure1_slot2;
            var26 = 41;
            var26 = var61[var26];
            var26 = var60.bind(var4)(var26);
            var26 = var26.CollectiblesMarketingType;
            var26 = var26.COACHTIP;
            var44 = null;
            if(!(var57 === var26)) { _fun0001_ip = 52; continue _fun0001 }
case 57:
            var57 = _closure1_slot0;
            var26 = _closure1_slot2;
            var26 = var26[var59];
            var26 = var57.bind(var4)(var26);
            var26 = var26.DismissibleContent;
            var44 = var26.COLLECTIBLES_SHOP_ENTRY_MARKETING;
case 52:
            var26 = var27 == var55;
            var57 = undefined;
            if(var26) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var57 = var55.version;
case 58:
            var59 = var27 != var57;
            var26 = 0;
            if(!var59) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var26 = var57;
case 60:
            var44 = var49.bind(var53)(var44, var26);
            var26 = _closure1_slot3;
            var26 = var26.bind(var4)(var44, var46);
            var41 = var26[var41];
            _closure2_slot20 = var41;
            var26 = var26[var34];
            var49 = _closure1_slot4;
            var46 = var49.useMemo;
            var44 = new Array(5);
            var44[0] = var36;
            var44[1] = var56;
            var57 = var27 == var55;
            var53 = undefined;
            if(var57) { _fun0001_ip = 62; continue _fun0001 }
case 63:
            var53 = var55.type;
case 62:
            var44[2] = var53;
            var44[3] = var50;
            var44[4] = var41;
            var41 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot17;
                    var2 = !var1;
                    var1 = !var2;
                    if(!var2) { _fun0010_ip = 64; continue _fun0010 }
case 65:
                    var2 = _closure2_slot19;
                    var6 = null;
                    var2 = var6 != var2;
                    if(var2) { _fun0010_ip = 66; continue _fun0010 }
case 67:
                    var3 = _closure2_slot20;
                    var2 = var6 != var3;
case 66:
                    if(!var2) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                    var3 = _closure2_slot18;
                    var3 = var6 != var3;
                    if(!var3) { _fun0010_ip = 70; continue _fun0010 }
case 43:
                    var5 = _closure2_slot14;
                    var6 = var6 == var5;
                    var7 = undefined;
                    var5 = undefined;
                    if(var6) { _fun0010_ip = 71; continue _fun0010 }
case 72:
                    var4 = _closure2_slot14;
                    var5 = var4.type;
case 71:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 41;
                    var4 = var8[var4];
                    var4 = var6.bind(var7)(var4);
                    var4 = var4.CollectiblesMarketingType;
                    var4 = var4.COACHTIP;
                    var3 = var5 === var4;
case 70:
                    var2 = var3;
case 68:
                    var1 = var2;
case 64:
                    return var1;
                }
            };
            var57 = var46.bind(var49)(var41, var44);
            var44 = _closure1_slot4;
            var41 = var44.useRef;
            var59 = var41.bind(var44)(var27);
            var44 = _closure1_slot4;
            var41 = var44.useRef;
            var50 = var41.bind(var44)(var27);
            if(var36) { _fun0001_ip = 73; continue _fun0001 }
case 74:
            if(!var29) { _fun0001_ip = 75; continue _fun0001 }
case 76:
            var24 = var26;
case 75:
            var58 = var24;
case 73:
            _closure2_slot21 = var58;
            var36 = _closure1_slot4;
            var29 = var36.useCallback;
            var26 = new Array(2);
            var26[0] = var58;
            var26[1] = var3;
            var24 = function() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure2_slot21;
                var2 = _closure1_slot22;
                var2 = var2.TAKE_ACTION;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var55 = var29.bind(var36)(var24, var26);
            var24 = {};
            var24['user'] = var11;
            var24['userTheme'] = var13;
            var24['scrollViewRef'] = var25;
            var26 = var35.content;
            var13 = new Array(2);
            var13[0] = var26;
            var13[1] = var16;
            var24['style'] = var13;
            var24['navigateToProfileCustomization'] = var9;
            var24['navigateToCustomStatus'] = var8;
            var24['navigateToFriends'] = var5;
            var24['navigateToPremium'] = var6;
            var24['navigateToShop'] = var3;
            var24['initialTab'] = var2;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 42;
            var2 = var13[var8];
            var5 = var9.bind(var4)(var2);
            var3 = var5.useCreateUserProfileAnalyticsContext;
            var2 = {};
            var16 = 'YOU_SCREEN';
            var2['layout'] = var16;
            var11 = var11.id;
            var2['userId'] = var11;
            var11 = var3.bind(var5)(var2);
            var41 = var27 != var56;
            var53 = 43;
            var2 = var13[var53];
            var5 = var9.bind(var4)(var2);
            var3 = var5.useYouSettingsCoachmark;
            var2 = {};
            var2['disabled'] = var41;
            var49 = var3.bind(var5)(var2);
            _closure2_slot22 = var49;
            var36 = var27 != var49;
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var1;
            var2[1] = var49;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot22;
                    var4 = null;
                    var2 = var4 == var2;
                    if(var2) { _fun0011_ip = 46; continue _fun0011 }
case 65:
                    var3 = _closure2_slot22;
                    var3 = var3.trackSettingsPress;
                    var2 = var4 == var3;
case 46:
                    if(var2) { _fun0011_ip = 40; continue _fun0011 }
case 77:
                    var3 = _closure2_slot22;
                    var2 = var3.trackSettingsPress;
                    var2 = var2.bind(var3)();
case 40:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot23;
            var2 = _closure1_slot1;
            var1 = 44;
            var1 = var13[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['isLoading'] = var7;
            var1['navigateToPremium'] = var6;
            var1['navigateToSettings'] = var5;
            var1['navigateToShop'] = var55;
            var1['shopButtonRef'] = var59;
            var1['settingsButtonRef'] = var50;
            var1['paddingTop'] = var37;
            var26 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot23;
            var44 = 45;
            var1 = var13[var44];
            var1 = var9.bind(var4)(var1);
            var2 = var1.LayerScope;
            var1 = {};
            var7 = _closure1_slot23;
            var5 = 46;
            var5 = var13[var5];
            var5 = var9.bind(var4)(var5);
            var6 = var5.ThemeContextProvider;
            var5 = {};
            var5['theme'] = var15;
            var5['primaryColor'] = var14;
            var5['secondaryColor'] = var10;
            var10 = _closure1_slot23;
            var8 = var13[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.UserProfileAnalyticsProvider;
            var8 = {};
            var8['value'] = var11;
            var13 = var27 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 78; continue _fun0001 }
case 79:
            var11 = var12.isLoaded;
case 78:
            var8['isLoaded'] = var11;
            var13 = _closure1_slot24;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 47;
            var11 = var14[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var15 = var35.container;
            var14 = new Array(2);
            var14[0] = var15;
            var15 = null;
            if(!var23) { _fun0001_ip = 80; continue _fun0001 }
case 81:
            var16 = {};
            var46 = _closure1_slot1;
            var60 = _closure1_slot2;
            var29 = 19;
            var61 = var60[var29];
            var61 = var46.bind(var4)(var61);
            var61 = var61.radii;
            var61 = var61.xl;
            var16['borderTopLeftRadius'] = var61;
            var29 = var60[var29];
            var29 = var46.bind(var4)(var29);
            var29 = var29.radii;
            var29 = var29.xl;
            var16['borderTopRightRadius'] = var29;
            var15 = var16;
case 80:
            var14[1] = var15;
            var11['style'] = var14;
            var14 = _closure1_slot18;
            var11['nativeID'] = var14;
            var16 = _closure1_slot23;
            var15 = _closure1_slot1;
            var29 = _closure1_slot2;
            var14 = 48;
            var14 = var29[var14];
            var15 = var15.bind(var4)(var14);
            var14 = {};
            var14['gradientHeight'] = var38;
            var14['bannerHeight'] = var17;
            var15 = var16.bind(var4)(var15, var14);
            var14 = new Array(3);
            var14[0] = var15;
            var15 = var41;
            if(var41) { _fun0001_ip = 82; continue _fun0001 }
case 83:
            var15 = var36;
case 82:
            if(!var15) { _fun0001_ip = 84; continue _fun0001 }
case 85:
            var29 = _closure1_slot24;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var44];
            var16 = var17.bind(var4)(var16);
            var17 = var16.LayerScope;
            var16 = {};
            var16['zIndex'] = var34;
            if(!var41) { _fun0001_ip = 86; continue _fun0001 }
case 87:
            var46 = _closure1_slot23;
            var44 = _closure1_slot1;
            var60 = _closure1_slot2;
            var34 = 49;
            var34 = var60[var34];
            var44 = var44.bind(var4)(var34);
            var34 = {};
            var34['buttonRef'] = var59;
            var34['markAsDismissed'] = var58;
            var34['visible'] = var57;
            var57 = var56.title;
            var34['title'] = var57;
            var57 = var56.description;
            var34['description'] = var57;
            var57 = var56.avatarSrc;
            var34['avatarSrc'] = var57;
            var57 = var56.decorationAsset;
            var34['decorationAsset'] = var57;
            var56 = var56.renderImgComponent;
            var34['renderImgComponent'] = var56;
            var34['navigateToShop'] = var55;
            var41 = var46.bind(var4)(var44, var34);
case 86:
            var34 = new Array(2);
            var34[0] = var41;
            if(!var36) { _fun0001_ip = 88; continue _fun0001 }
case 89:
            var46 = _closure1_slot23;
            var44 = _closure1_slot1;
            var41 = _closure1_slot2;
            var41 = var41[var53];
            var44 = var44.bind(var4)(var41);
            var41 = {};
            var41['buttonRef'] = var50;
            var63 = var49.props;
            var64 = var41;
            var49 = copyDataProperties(var64, var63);
            var36 = var46.bind(var4)(var44, var41);
case 88:
            var34[1] = var36;
            var16['children'] = var34;
            var15 = var29.bind(var4)(var17, var16);
case 84:
            var14[1] = var15;
            var17 = _closure1_slot24;
            var16 = _closure1_slot27;
            var15 = {};
            var15['ref'] = var25;
            var15['onScroll'] = var22;
            var15['onLayout'] = var18;
            var18 = _closure1_slot19;
            var15['scrollEventThrottle'] = var18;
            var22 = var35.scrollView;
            var18 = new Array(2);
            var18[0] = var22;
            var22 = null;
            if(!var23) { _fun0001_ip = 90; continue _fun0001 }
case 91:
            var23 = {};
            var29 = _closure1_slot1;
            var34 = _closure1_slot2;
            var25 = 19;
            var36 = var34[var25];
            var36 = var29.bind(var4)(var36);
            var36 = var36.radii;
            var36 = var36.xl;
            var23['borderTopLeftRadius'] = var36;
            var25 = var34[var25];
            var25 = var29.bind(var4)(var25);
            var25 = var25.radii;
            var25 = var25.xl;
            var23['borderTopRightRadius'] = var25;
            var22 = var23;
case 90:
            var18[1] = var22;
            var15['style'] = var18;
            var23 = _closure1_slot24;
            var22 = _closure1_slot1;
            var18 = _closure1_slot2;
            var18 = var18[var21];
            var18 = var22.bind(var4)(var18);
            var22 = var18.View;
            var18 = {};
            var29 = var35.banner;
            var25 = new Array(2);
            var25[0] = var29;
            var25[1] = var30;
            var18['style'] = var25;
            var29 = null;
            if(!var28) { _fun0001_ip = 92; continue _fun0001 }
case 93:
            var29 = null;
            if(var20) { _fun0001_ip = 92; continue _fun0001 }
case 94:
            var36 = _closure1_slot23;
            var44 = _closure1_slot0;
            var49 = _closure1_slot2;
            var25 = 50;
            var25 = var49[var25];
            var25 = var44.bind(var4)(var25);
            var34 = var25.PressableOpacity;
            var25 = {};
            var46 = var35.backButton;
            var41 = new Array(2);
            var41[0] = var46;
            var46 = {};
            var46['top'] = var37;
            var41[1] = var46;
            var25['style'] = var41;
            var41 = var49[var33];
            var41 = var44.bind(var4)(var41);
            var50 = var41.intl;
            var46 = var50.string;
            var41 = var49[var33];
            var41 = var44.bind(var4)(var41);
            var41 = var41.t;
            var41 = var41["13/7kX"];
            var41 = var46.bind(var50)(var41);
            var25['accessibilityLabel'] = var41;
            var41 = function onPress() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 51;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var3)) { _fun0012_ip = 95; continue _fun0012 }
case 96:
                    var2 = var3.canGoBack;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0012_ip = 97; continue _fun0012 }
case 98:
                    var4 = var3.navigate;
                    var2 = 'guilds';
                    var2 = var4.bind(var3)(var2);
                    _fun0012_ip = 95; continue _fun0012;
case 97:
                    var2 = var3.goBack;
                    var2 = var2.bind(var3)();
case 95:
                    return var1;
                }
            };
            var25['onPress'] = var41;
            var46 = _closure1_slot23;
            var41 = 52;
            var41 = var49[var41];
            var41 = var44.bind(var4)(var41);
            var44 = var41.CloseIconWithBadgeOnSide;
            var41 = {};
            var41 = var46.bind(var4)(var44, var41);
            var25['children'] = var41;
            var29 = var36.bind(var4)(var34, var25);
case 92:
            var25 = new Array(3);
            var25[0] = var29;
            var29 = !var20;
            if(var20) { _fun0001_ip = 99; continue _fun0001 }
case 100:
            var29 = var26;
case 99:
            var25[1] = var29;
            var36 = _closure1_slot24;
            var34 = _closure1_slot1;
            var49 = _closure1_slot2;
            var29 = var49[var21];
            var29 = var34.bind(var4)(var29);
            var34 = var29.View;
            var29 = {};
            var44 = {};
            var46 = _closure1_slot0;
            var41 = 53;
            var41 = var49[var41];
            var46 = var46.bind(var4)(var41);
            var41 = var46.int2hex;
            var41 = var41.bind(var46)(var47);
            var44['backgroundColor'] = var41;
            var41 = new Array(3);
            var41[0] = var44;
            var41[1] = var54;
            var41[2] = var43;
            var29['style'] = var41;
            var41 = var27 != var51;
            if(!var41) { _fun0001_ip = 101; continue _fun0001 }
case 102:
            if(var40) { _fun0001_ip = 103; continue _fun0001 }
case 104:
            var44 = _closure1_slot23;
            var43 = _closure1_slot1;
            var46 = _closure1_slot2;
            var40 = 40;
            var40 = var46[var40];
            var43 = var43.bind(var4)(var40);
            var40 = {};
            var40['style'] = var54;
            var46 = 'image';
            var40['accessibilityRole'] = var46;
            var40['accessibilityLabel'] = var52;
            var40['source'] = var51;
            var40 = var44.bind(var4)(var43, var40);
            _fun0001_ip = 105; continue _fun0001;
case 103:
            var46 = _closure1_slot24;
            var56 = _closure1_slot0;
            var55 = _closure1_slot2;
            var43 = 50;
            var43 = var55[var43];
            var43 = var56.bind(var4)(var43);
            var44 = var43.PressableOpacity;
            var43 = {};
            var47 = function onPress() {
                var3 = _closure2_slot13;
                var1 = _closure2_slot12;
                var2 = !var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var43['onPress'] = var47;
            var53 = 'image';
            var43['accessibilityRole'] = var53;
            var47 = var55[var33];
            var47 = var56.bind(var4)(var47);
            var50 = var47.intl;
            var49 = var50.string;
            var47 = var55[var33];
            var47 = var56.bind(var4)(var47);
            var47 = var47.t;
            var47 = var47["3fzj/l"];
            var47 = var49.bind(var50)(var47);
            var43['accessibilityLabel'] = var47;
            var50 = _closure1_slot23;
            var49 = _closure1_slot1;
            var47 = 40;
            var47 = var55[var47];
            var49 = var49.bind(var4)(var47);
            var47 = {};
            var47['style'] = var54;
            var47['accessibilityRole'] = var53;
            var47['accessibilityLabel'] = var52;
            var47['source'] = var51;
            var49 = var50.bind(var4)(var49, var47);
            var47 = new Array(2);
            var47[0] = var49;
            var48 = !var48;
            if(!var48) { _fun0001_ip = 106; continue _fun0001 }
case 107:
            var51 = _closure1_slot23;
            var55 = _closure1_slot0;
            var52 = _closure1_slot2;
            var49 = 54;
            var49 = var52[var49];
            var49 = var55.bind(var4)(var49);
            var50 = var49.Caption;
            var49 = {};
            var53 = var52[var33];
            var53 = var55.bind(var4)(var53);
            var54 = var53.intl;
            var53 = var54.string;
            var52 = var52[var33];
            var52 = var55.bind(var4)(var52);
            var52 = var52.t;
            var52 = var52.I5gL2H;
            var52 = var53.bind(var54)(var52);
            var49['label'] = var52;
            var53 = var35.gifTag;
            var52 = new Array(2);
            var52[0] = var53;
            var53 = {};
            var53['top'] = var37;
            var52[1] = var53;
            var49['style'] = var52;
            var52 = var35.gifTagText;
            var49['textStyle'] = var52;
            var48 = var51.bind(var4)(var50, var49);
case 106:
            var47[1] = var48;
            var43['children'] = var47;
            var40 = var46.bind(var4)(var44, var43);
case 105:
            var41 = var40;
case 101:
            var40 = new Array(2);
            var40[0] = var41;
            var43 = _closure1_slot0;
            var44 = _closure1_slot2;
            var41 = 55;
            var41 = var44[var41];
            var43 = var43.bind(var4)(var41);
            var41 = var43.isIOS;
            var41 = var41.bind(var43)();
            if(!var41) { _fun0001_ip = 108; continue _fun0001 }
case 109:
            var41 = var42;
case 108:
            if(!var41) { _fun0001_ip = 110; continue _fun0001 }
case 111:
            var44 = _closure1_slot23;
            var43 = _closure1_slot25;
            var42 = {};
            var42['animatedProps'] = var45;
            var45 = _closure1_slot5;
            var45 = var45.absoluteFillObject;
            var42['style'] = var45;
            var41 = var44.bind(var4)(var43, var42);
case 110:
            var40[1] = var41;
            var29['children'] = var40;
            var29 = var36.bind(var4)(var34, var29);
            var25[2] = var29;
            var18['children'] = var25;
            var22 = var23.bind(var4)(var22, var18);
            var18 = new Array(4);
            var18[0] = var22;
            if(!var20) { _fun0001_ip = 112; continue _fun0001 }
case 113:
            var23 = _closure1_slot24;
            var29 = _closure1_slot1;
            var34 = _closure1_slot2;
            var21 = var34[var21];
            var21 = var29.bind(var4)(var21);
            var22 = var21.View;
            var21 = {};
            var25 = 'box-none';
            var21['pointerEvents'] = var25;
            var36 = var35.profileEffectLayer;
            var25 = new Array(3);
            var25[0] = var36;
            var36 = {};
            var36['width'] = var39;
            var36['height'] = var38;
            var25[1] = var36;
            var25[2] = var30;
            var21['style'] = var25;
            var30 = _closure1_slot23;
            var25 = 56;
            var25 = var34[var25];
            var29 = var29.bind(var4)(var25);
            var25 = {'skuId': null, 'bannerAdjustment': 0, 'replayOnNavigationFocus': true};
            var25['skuId'] = var32;
            var29 = var30.bind(var4)(var29, var25);
            var25 = new Array(3);
            var25[0] = var29;
            var27 = null;
            if(!var28) { _fun0001_ip = 114; continue _fun0001 }
case 115:
            var30 = _closure1_slot23;
            var32 = _closure1_slot0;
            var34 = _closure1_slot2;
            var28 = 50;
            var28 = var34[var28];
            var28 = var32.bind(var4)(var28);
            var29 = var28.PressableOpacity;
            var28 = {};
            var36 = var35.backButton;
            var35 = new Array(2);
            var35[0] = var36;
            var36 = {};
            var36['top'] = var37;
            var35[1] = var36;
            var28['style'] = var35;
            var35 = var34[var33];
            var35 = var32.bind(var4)(var35);
            var36 = var35.intl;
            var35 = var36.string;
            var33 = var34[var33];
            var33 = var32.bind(var4)(var33);
            var33 = var33.t;
            var33 = var33["13/7kX"];
            var33 = var35.bind(var36)(var33);
            var28['accessibilityLabel'] = var33;
            var31 = function onPress() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 51;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var3)) { _fun0013_ip = 95; continue _fun0013 }
case 96:
                    var2 = var3.canGoBack;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0013_ip = 97; continue _fun0013 }
case 98:
                    var4 = var3.navigate;
                    var2 = 'guilds';
                    var2 = var4.bind(var3)(var2);
                    _fun0013_ip = 95; continue _fun0013;
case 97:
                    var2 = var3.goBack;
                    var2 = var2.bind(var3)();
case 95:
                    return var1;
                }
            };
            var28['onPress'] = var31;
            var33 = _closure1_slot23;
            var31 = 52;
            var31 = var34[var31];
            var31 = var32.bind(var4)(var31);
            var32 = var31.CloseIconWithBadgeOnSide;
            var31 = {};
            var31 = var33.bind(var4)(var32, var31);
            var28['children'] = var31;
            var27 = var30.bind(var4)(var29, var28);
case 114:
            var25[1] = var27;
            var25[2] = var26;
            var21['children'] = var25;
            var20 = var23.bind(var4)(var22, var21);
case 112:
            var18[1] = var20;
            var23 = _closure1_slot23;
            var21 = _closure1_slot1;
            var22 = _closure1_slot2;
            var20 = 57;
            var20 = var22[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var64 = var20;
            var63 = var24;
            var24 = copyDataProperties(var64, var63);
            var20 = var23.bind(var4)(var21, var20);
            var18[2] = var20;
            var21 = _closure1_slot23;
            var20 = _closure1_slot0;
            var19 = 58;
            var19 = var22[var19];
            var19 = var20.bind(var4)(var19);
            var20 = var19.TTIFirstContentfulPaint;
            var19 = {};
            var22 = 'you_screen';
            var19['label'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var18[3] = var19;
            var15['children'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[2] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot37 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = metroImportAll;
    var9 = var5.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.StyleSheet;
    var _closure1_slot5 = var10;
    var10 = var5.ScrollView;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.useYouBarIOSModalPresentation;
    var _closure1_slot12 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var11 = var5.SCALE_FACTOR;
    var _closure1_slot13 = var11;
    var11 = var5.SCROLL_POSITION_COEFFICIENT;
    var _closure1_slot14 = var11;
    var11 = var5.YOU_ACTION_SHEET_TOP_INSET;
    var _closure1_slot15 = var11;
    var11 = var5.YOU_AVATAR_SIZE;
    var _closure1_slot16 = var11;
    var11 = var5.YOU_BANNER_VERTICAL_TRANSLATE_SCALE_FACTOR;
    var _closure1_slot17 = var11;
    var11 = var5.YOU_SCREEN_ID;
    var _closure1_slot18 = var11;
    var5 = var5.YOU_SCROLL_EVENT_THROTTLE;
    var _closure1_slot19 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.UserSettingsSections;
    var _closure1_slot20 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.CollectiblesMobileShopScreen;
    var _closure1_slot21 = var5;
    var5 = 13;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ContentDismissActionType;
    var _closure1_slot22 = var5;
    var5 = 14;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var11 = var5.jsx;
    var _closure1_slot23 = var11;
    var5 = var5.jsxs;
    var _closure1_slot24 = var5;
    var5 = 15;
    var11 = var7[var5];
    var13 = var8.bind(var1)(var11);
    var12 = var13.createAnimatedComponent;
    var11 = 16;
    var11 = var7[var11];
    var11 = var8.bind(var1)(var11);
    var11 = var12.bind(var13)(var11);
    var _closure1_slot25 = var11;
    var11 = 17;
    var11 = var7[var11];
    var13 = var6.bind(var1)(var11);
    var12 = var13.createStyles;
    var11 = function(arg1) {
        var7 = arg1;
        var1 = {};
        var3 = 1;
        var2 = {'flex': 1, 'flexGrow': 1, 'position': 'relative', 'overflow': 'hidden'};
        var1['container'] = var2;
        var2 = {};
        var2['flex'] = var3;
        var1['scrollView'] = var2;
        var2 = {'position': 'absolute', 'top': 0, 'zIndex': 1};
        var1['profileEffectLayer'] = var2;
        var2 = {'minHeight': null, 'position': 'absolute', 'top': 0, 'maxWidth': '100%'};
        var2['minHeight'] = var7;
        var1['banner'] = var2;
        var2 = {'position': 'absolute', 'left': 16, 'right': 'auto', 'bottom': 'auto', 'marginTop': 8};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 18;
        var3 = var6[var3];
        var4 = undefined;
        var9 = var5.bind(var4)(var3);
        var3 = 19;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.unsafe_rawColors;
        var8 = var8.WHITE;
        var10 = var9.bind(var4)(var8);
        var9 = var10.alpha;
        var8 = 0.9;
        var9 = var9.bind(var10)(var8);
        var8 = var9.css;
        var8 = var8.bind(var9)();
        var2['backgroundColor'] = var8;
        var1['gifTag'] = var2;
        var2 = {};
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.unsafe_rawColors;
        var8 = var8.PRIMARY_800;
        var2['color'] = var8;
        var8 = 14;
        var2['fontSize'] = var8;
        var1['gifTagText'] = var2;
        var2 = {'marginTop': null, 'flex': 1, 'flexGrow': 1};
        var2['marginTop'] = var7;
        var1['content'] = var2;
        var2 = {'position': 'absolute', 'marginTop': null, 'left': null, 'zIndex': 99, 'alignItems': 'center', 'justifyContent': 'center'};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_4;
        var2['marginTop'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.spacing;
        var3 = var3.PX_16;
        var2['left'] = var3;
        var1['backButton'] = var2;
        return var1;
    };
    var11 = var12.bind(var13)(var11);
    var _closure1_slot26 = var11;
    var5 = var7[var5];
    var8 = var8.bind(var1)(var5);
    var5 = var8.createAnimatedComponent;
    var5 = var5.bind(var8)(var10);
    var _closure1_slot27 = var5;
    var5 = {};
    var8 = 'function YouScreenTsx1(e){const{scrollPosition}=this.__closure;scrollPosition.set(e.contentOffset.y);}';
    var5['code'] = var8;
    var _closure1_slot28 = var5;
    var5 = {};
    var8 = 'function YouScreenTsx2(){const{scrollPosition}=this.__closure;return scrollPosition.get()<=0;}';
    var5['code'] = var8;
    var _closure1_slot29 = var5;
    var5 = {};
    var8 = 'function YouScreenTsx3(){const{interpolate,scrollPosition,minScrollPosition,SCALE_FACTOR,translateOnScale,isNegativeScrollPosition}=this.__closure;const scale=interpolate(scrollPosition.get(),[minScrollPosition,0],[SCALE_FACTOR,1]);const translateY=interpolate(scrollPosition.get(),[minScrollPosition,0],[translateOnScale,0]);const transform=isNegativeScrollPosition.get()?[{scale:scale},{translateY:translateY}]:[];return{transform:transform};}';
    var5['code'] = var8;
    var _closure1_slot30 = var5;
    var5 = {};
    var8 = 'function YouScreenTsx4(){const{isNegativeScrollPosition,scrollPosition}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:scrollPosition.get()}]:[];return{transform:transform};}';
    var5['code'] = var8;
    var _closure1_slot31 = var5;
    var5 = {};
    var8 = 'function YouScreenTsx5(){const{isNegativeScrollPosition,scrollPosition,coefficient}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:scrollPosition.get()*(1/coefficient)}]:[];return{transform:transform};}';
    var5['code'] = var8;
    var _closure1_slot32 = var5;
    var5 = {};
    var8 = 'function YouScreenTsx6(){const{clamp,interpolate,scrollPosition,windowHeight,coefficient}=this.__closure;return{blurAmount:clamp(interpolate(scrollPosition.get(),[0,-windowHeight*coefficient],[0,1]),0,1)};}';
    var5['code'] = var8;
    var _closure1_slot33 = var5;
    var5 = {};
    var8 = 'function YouScreenTsx7(){const{scrollPosition}=this.__closure;return scrollPosition.get()<0;}';
    var5['code'] = var8;
    var _closure1_slot34 = var5;
    var5 = {};
    var8 = 'function YouScreenTsx8(result,previous){const{runOnJS,setShowBlur}=this.__closure;return result!==previous&&runOnJS(setShowBlur)(result);}';
    var5['code'] = var8;
    var _closure1_slot35 = var5;
    var8 = var9.memo;
    var5 = function(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var6 = var1.initialTab;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var7 = _closure1_slot0;
            var1 = _closure1_slot2;
            var4 = 27;
            var8 = var1[var4];
            var11 = var7.bind(var5)(var8);
            var10 = var11.useStateFromStores;
            var8 = _closure1_slot11;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var10.bind(var11)(var9, var8);
            var _closure2_slot0 = var13;
            var1 = var1[var4];
            var9 = var7.bind(var5)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot9;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var1 = _closure1_slot9;
                var1 = var1.locale;
                return var1;
            };
            var10 = var8.bind(var9)(var7, var1);
            var1 = null;
            var7 = var1 == var13;
            var9 = undefined;
            if(var7) { _fun0014_ip = 116; continue _fun0014 }
case 117:
            var9 = var13.id;
case 116:
            _closure2_slot1 = var9;
            var12 = _closure1_slot4;
            var11 = var12.useMemo;
            var8 = new Array(1);
            var8[0] = var13;
            var7 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var5 = null;
                    var3 = var5 == var1;
                    var1 = undefined;
                    if(var3) { _fun0015_ip = 96; continue _fun0015 }
case 118:
                    var4 = _closure2_slot0;
                    var3 = var4.getAvatarURL;
                    var2 = _closure1_slot16;
                    var1 = var3.bind(var4)(var5, var2);
case 96:
                    return var1;
                }
            };
            var15 = var11.bind(var12)(var7, var8);
            _closure2_slot2 = var15;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var11 = 38;
            var11 = var8[var11];
            var14 = var7.bind(var5)(var11);
            var12 = var14.useMobileWishlistOwnerExperiment;
            var11 = 'YouScreen';
            var11 = var12.bind(var14)(var11);
            _closure2_slot3 = var11;
            var14 = _closure1_slot4;
            var12 = var14.useLayoutEffect;
            var11 = new Array(3);
            var11[0] = var9;
            var11[1] = var15;
            var11[2] = var10;
            var10 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0016_ip = 119; continue _fun0016 }
case 65:
                    var3 = _closure2_slot2;
                    var2 = var4 != var3;
case 119:
                    if(!var2) { _fun0016_ip = 120; continue _fun0016 }
case 7:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 59;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var1 = {};
                    var6 = 'you_screen';
                    var1['type'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 120:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var12.bind(var14)(var10, var11);
            var4 = var8[var4];
            var12 = var7.bind(var5)(var4);
            var11 = var12.useStateFromStores;
            var4 = _closure1_slot8;
            var10 = new Array(1);
            var10[0] = var4;
            var4 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var3 = var1.enabled;
                    var4 = null;
                    var1 = null;
                    if(!var3) { _fun0017_ip = 98; continue _fun0017 }
case 3:
                    var3 = _closure2_slot1;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0017_ip = 98; continue _fun0017 }
case 121:
                    var4 = _closure1_slot8;
                    var3 = var4.getFirstWishlistId;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 98:
                    return var1;
                }
            };
            var10 = var11.bind(var12)(var10, var4);
            var4 = 60;
            var4 = var8[var4];
            var8 = var7.bind(var5)(var4);
            var7 = var8.useFetchWishlist;
            var4 = {};
            var4['wishlistId'] = var10;
            var4['userId'] = var9;
            var4 = var7.bind(var8)(var4);
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var7 = function() {
                var4 = _closure1_slot10;
                var3 = var4.setState;
                var2 = {'query': '', 'isActive': false};
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 61;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.openUserSettings;
                var2 = var2.bind(var3)();
                return var1;
            };
            var4 = new Array(0);
            var12 = var8.bind(var9)(var7, var4);
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var7 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 61;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openUserSettings;
                var2 = {};
                var5 = _closure1_slot20;
                var5 = var5.PREMIUM;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var4 = new Array(0);
            var11 = var8.bind(var9)(var7, var4);
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var7 = function() {
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 62;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openCollectiblesShopMobile;
                var2 = {};
                var7 = _closure1_slot1;
                var6 = 63;
                var9 = var8[var6];
                var9 = var7.bind(var1)(var9);
                var9 = var9.YOU_SCREEN;
                var2['analyticsSource'] = var9;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var7 = var6.YOU_SCREEN;
                var6 = new Array(1);
                var6[0] = var7;
                var2['analyticsLocations'] = var6;
                var5 = _closure1_slot21;
                var5 = var5.FEATURED_PAGE;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var4 = new Array(0);
            var7 = var8.bind(var9)(var7, var4);
            var10 = _closure1_slot4;
            var9 = var10.useCallback;
            var8 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 61;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openUserSettings;
                var2 = {};
                var5 = _closure1_slot20;
                var5 = var5.PROFILE_CUSTOMIZATION;
                var2['screen'] = var5;
                var5 = {};
                var6 = arg1;
                var5['autoFocusElement'] = var6;
                var2['params'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var4 = new Array(0);
            var10 = var9.bind(var10)(var8, var4);
            var14 = _closure1_slot4;
            var9 = var14.useCallback;
            var8 = function() {
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 64;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openEditCustomStatusModal;
                var2 = {};
                var6 = _closure1_slot1;
                var5 = 63;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var6 = var5.YOU_SCREEN;
                var5 = new Array(1);
                var5[0] = var6;
                var2['analyticsLocations'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var4 = new Array(0);
            var9 = var9.bind(var14)(var8, var4);
            var14 = _closure1_slot4;
            var8 = var14.useCallback;
            var4 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 51;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var4 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var4)) { _fun0018_ip = 97; continue _fun0018 }
case 96:
                    var2 = var4.isReady;
                    var2 = var2.bind(var4)();
                    if(!var2) { _fun0018_ip = 97; continue _fun0018 }
case 98:
                    var3 = var4.navigate;
                    var2 = 'friends';
                    var2 = var3.bind(var4)(var2);
                    return var1;
case 97:
                    var1 = false;
                    return var1;
                }
            };
            var3 = new Array(0);
            var8 = var8.bind(var14)(var4, var3);
            var3 = var1 == var13;
            var1 = null;
            if(var3) { _fun0014_ip = 122; continue _fun0014 }
case 123:
            var4 = _closure1_slot23;
            var3 = _closure1_slot37;
            var2 = {};
            var2['user'] = var13;
            var2['navigateToSettings'] = var12;
            var2['navigateToPremium'] = var11;
            var2['navigateToProfileCustomization'] = var10;
            var2['navigateToCustomStatus'] = var9;
            var2['navigateToFriends'] = var8;
            var2['navigateToShop'] = var7;
            var2['initialTab'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 122:
            return var1;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot36 = var5;
    var5 = 67;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/tabs/you/YouScreen.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function ConnectedYouScreen(arg1) {
        var1 = arg1;
        var5 = var1.initialTab;
        var6 = _closure1_slot4;
        var4 = var6.useCallback;
        var3 = function() {
            var4 = _closure1_slot10;
            var3 = var4.setState;
            var2 = {'query': '', 'isActive': false};
            var2 = var3.bind(var4)(var2);
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 61;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.openUserSettings;
            var2 = var2.bind(var3)();
            return var1;
        };
        var2 = new Array(0);
        var2 = var4.bind(var6)(var3, var2);
        var _closure2_slot0 = var2;
        var6 = _closure1_slot4;
        var4 = var6.useLayoutEffect;
        var3 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 65;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.trackAppUIViewed;
            var1 = var1.bind(var2)();
            return var1;
        };
        var2 = new Array(0);
        var2 = var4.bind(var6)(var3, var2);
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 66;
        var2 = var4[var2];
        var4 = undefined;
        var6 = var3.bind(var4)(var2);
        var3 = var6.useScrollToTop;
        var8 = _closure1_slot4;
        var7 = var8.useRef;
        var2 = {};
        var9 = function scrollToTop() {
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        };
        var2['scrollToTop'] = var9;
        var2 = var7.bind(var8)(var2);
        var2 = var3.bind(var6)(var2);
        var3 = _closure1_slot23;
        var2 = _closure1_slot36;
        var1 = {};
        var1['initialTab'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['UnconnectedYouScreen'] = var2;
    return var1;
})();