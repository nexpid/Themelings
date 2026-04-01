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
            var15 = _closure1_slot1;
            var28 = _closure1_slot2;
            var7 = 20;
            var7 = var28[var7];
            var7 = var15.bind(var4)(var7);
            var29 = var7.bind(var4)();
            var _closure2_slot2 = var29;
            var7 = _closure1_slot16;
            var38 = var29 * var7;
            var _closure2_slot3 = var38;
            var7 = _closure1_slot28;
            var35 = var7.bind(var4)(var29);
            var7 = 21;
            var7 = var28[var7];
            var10 = var15.bind(var4)(var7);
            var7 = {};
            var17 = _closure1_slot0;
            var12 = 22;
            var13 = var28[var12];
            var13 = var17.bind(var4)(var13);
            var13 = var13.ImpressionTypes;
            var13 = var13.VIEW;
            var7['type'] = var13;
            var12 = var28[var12];
            var12 = var17.bind(var4)(var12);
            var12 = var12.ImpressionNames;
            var12 = var12.USER_YOU_SCREEN;
            var7['name'] = var12;
            var7 = var10.bind(var4)(var7);
            var7 = 23;
            var7 = var28[var7];
            var10 = var15.bind(var4)(var7);
            var7 = var11.id;
            var12 = var10.bind(var4)(var7);
            var7 = 24;
            var7 = var28[var7];
            var7 = var15.bind(var4)(var7);
            var20 = var7.bind(var4)();
            var7 = 25;
            var7 = var28[var7];
            var10 = var15.bind(var4)(var7);
            var7 = {};
            var7['user'] = var11;
            var7['displayProfile'] = var12;
            var7 = var10.bind(var4)(var7);
            var16 = var7.theme;
            var14 = var7.primaryColor;
            var10 = var7.secondaryColor;
            var7 = 26;
            var7 = var28[var7];
            var7 = var15.bind(var4)(var7);
            var13 = var7.bind(var4)();
            var18 = _closure1_slot4;
            var7 = var18.useRef;
            var27 = null;
            var25 = var7.bind(var18)(var27);
            var21 = 15;
            var7 = var28[var21];
            var18 = var17.bind(var4)(var7);
            var7 = var18.useSharedValue;
            var24 = 0;
            var33 = var7.bind(var18)(var24);
            var _closure2_slot4 = var33;
            var7 = var28[var21];
            var22 = var17.bind(var4)(var7);
            var18 = var22.useAnimatedScrollHandler;
            var7 = function J(arg1) {
                var3 = _closure2_slot4;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.contentOffset;
                var1 = var1.y;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var23 = {};
            var23['scrollPosition'] = var33;
            var7['__closure'] = var23;
            var23 = 952837799380.0;
            var7['__workletHash'] = var23;
            var23 = _closure1_slot30;
            var7['__initData'] = var23;
            var23 = var18.bind(var22)(var7);
            var26 = _closure1_slot4;
            var22 = var26.useMemo;
            var18 = new Array(1);
            var18[0] = var29;
            var7 = function() {
                var2 = _closure2_slot2;
                var1 = -1;
                var1 = var1 * var2;
                return var1;
            };
            var39 = var22.bind(var26)(var7, var18);
            var _closure2_slot5 = var39;
            var7 = var28[var21];
            var22 = var17.bind(var4)(var7);
            var18 = var22.useDerivedValue;
            var7 = function X() {
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
            var26 = _closure1_slot31;
            var7['__initData'] = var26;
            var37 = var18.bind(var22)(var7);
            var _closure2_slot6 = var37;
            var7 = 27;
            var7 = var28[var7];
            var30 = var17.bind(var4)(var7);
            var26 = var30.useStateFromStores;
            var7 = _closure1_slot6;
            var22 = new Array(1);
            var22[0] = var7;
            var18 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure1_slot6;
                    var3 = var1.useReducedMotion;
                    var1 = 1;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = _closure1_slot13;
case 2:
                    return var1;
                }
            };
            var7 = new Array(0);
            var36 = var26.bind(var30)(var22, var18, var7);
            var _closure2_slot7 = var36;
            var18 = _closure1_slot4;
            var7 = var18.useState;
            var18 = var7.bind(var18)(var24);
            var7 = _closure1_slot3;
            var45 = 2;
            var7 = var7.bind(var4)(var18, var45);
            var26 = var7[var24];
            var34 = 1;
            var7 = var7[var34];
            var _closure2_slot8 = var7;
            var30 = _closure1_slot4;
            var22 = var30.useCallback;
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
            var18 = var22.bind(var30)(var18, var7);
            var7 = var28[var21];
            var30 = var17.bind(var4)(var7);
            var22 = var30.useAnimatedStyle;
            var7 = function q() {
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
                    var14 = _closure1_slot12;
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
            var40 = var17.bind(var4)(var40);
            var40 = var40.interpolate;
            var32['interpolate'] = var40;
            var32['scrollPosition'] = var33;
            var32['minScrollPosition'] = var39;
            var39 = _closure1_slot12;
            var32['SCALE_FACTOR'] = var39;
            var32['translateOnScale'] = var38;
            var32['isNegativeScrollPosition'] = var37;
            var7['__closure'] = var32;
            var32 = 5882939038632.0;
            var7['__workletHash'] = var32;
            var32 = _closure1_slot32;
            var7['__initData'] = var32;
            var44 = var22.bind(var30)(var7);
            var7 = var28[var21];
            var30 = var17.bind(var4)(var7);
            var22 = var30.useAnimatedStyle;
            var7 = function K() {
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
            var32 = _closure1_slot33;
            var7['__initData'] = var32;
            var30 = var22.bind(var30)(var7);
            var7 = var28[var21];
            var22 = var17.bind(var4)(var7);
            var17 = var22.useAnimatedStyle;
            var7 = function Z() {
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
            var32 = _closure1_slot34;
            var7['__initData'] = var32;
            var17 = var17.bind(var22)(var7);
            var7 = 28;
            var7 = var28[var7];
            var7 = var15.bind(var4)(var7);
            var7 = var7.bind(var4)();
            var22 = var7.isChatBesideChannelList;
            var7 = 29;
            var7 = var28[var7];
            var7 = var15.bind(var4)(var7);
            var7 = var7.bind(var4)();
            var15 = var7.width;
            var38 = var7.height;
            var _closure2_slot9 = var38;
            var7 = var20.right;
            var15 = var15 - var7;
            var7 = var20.left;
            var15 = var15 - var7;
            var7 = 0;
            if(!var22) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var7 = 16;
case 11:
            var22 = var15 - var7;
            var39 = var22;
            if(!(var26 > var24)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var7 = global;
            var15 = var7.Math;
            var7 = var15.min;
            var39 = var7.bind(var15)(var22, var26);
case 13:
            _closure2_slot10 = var39;
            var22 = _closure1_slot0;
            var26 = _closure1_slot2;
            var7 = var26[var21];
            var28 = var22.bind(var4)(var7);
            var15 = var28.useAnimatedProps;
            var7 = function Q() {
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
            var37 = var22.bind(var4)(var37);
            var37 = var37.clamp;
            var32['clamp'] = var37;
            var37 = var26[var21];
            var37 = var22.bind(var4)(var37);
            var37 = var37.interpolate;
            var32['interpolate'] = var37;
            var32['scrollPosition'] = var33;
            var32['windowHeight'] = var38;
            var32['coefficient'] = var36;
            var7['__closure'] = var32;
            var32 = 2402745247838.0;
            var7['__workletHash'] = var32;
            var32 = _closure1_slot35;
            var7['__initData'] = var32;
            var46 = var15.bind(var28)(var7);
            var28 = _closure1_slot4;
            var15 = var28.useState;
            var7 = var33.get;
            var7 = var7.bind(var33)();
            var7 = var7 < var24;
            var15 = var15.bind(var28)(var7);
            var7 = _closure1_slot3;
            var7 = var7.bind(var4)(var15, var45);
            var43 = var7[var24];
            var36 = var7[var34];
            _closure2_slot11 = var36;
            var7 = var26[var21];
            var32 = var22.bind(var4)(var7);
            var28 = var32.useAnimatedReaction;
            var15 = function ee() {
                var2 = _closure2_slot4;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var2 < var1;
                return var1;
            };
            var7 = {};
            var7['scrollPosition'] = var33;
            var15['__closure'] = var7;
            var7 = 1515709080541.0;
            var15['__workletHash'] = var7;
            var7 = _closure1_slot36;
            var15['__initData'] = var7;
            var7 = function $(arg1, arg2) {
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
            var37 = var22.bind(var4)(var37);
            var37 = var37.runOnJS;
            var33['runOnJS'] = var37;
            var33['setShowBlur'] = var36;
            var7['__closure'] = var33;
            var33 = 11057160578223.0;
            var7['__workletHash'] = var33;
            var33 = _closure1_slot37;
            var7['__initData'] = var33;
            var7 = var28.bind(var32)(var15, var7);
            var28 = _closure1_slot4;
            var15 = var28.useState;
            var7 = false;
            var15 = var15.bind(var28)(var7);
            var7 = _closure1_slot3;
            var15 = var7.bind(var4)(var15, var45);
            var7 = var15[var24];
            _closure2_slot12 = var7;
            var15 = var15[var34];
            _closure2_slot13 = var15;
            var15 = 30;
            var15 = var26[var15];
            var15 = var22.bind(var4)(var15);
            var22 = var15.GifAutoPlay;
            var15 = var22.getSetting;
            var49 = var15.bind(var22)();
            if(var49) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var49 = var7;
case 17:
            var7 = var27 == var12;
            var28 = undefined;
            if(var7) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var15 = var12.getBannerURL;
            var7 = {};
            var7['canAnimate'] = var49;
            var7['size'] = var39;
            var28 = var15.bind(var12)(var7);
case 19:
            var7 = var27 != var28;
            var52 = null;
            if(!var7) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var15 = _closure1_slot0;
            var22 = _closure1_slot2;
            var7 = 31;
            var7 = var22[var7];
            var15 = var15.bind(var4)(var7);
            var7 = var15.makeSource;
            var52 = var7.bind(var15)(var28);
case 21:
            var15 = _closure1_slot0;
            var22 = _closure1_slot2;
            var7 = 31;
            var7 = var22[var7];
            var26 = var15.bind(var4)(var7);
            var7 = var26.isAnimatedImageURL;
            var40 = var7.bind(var26)(var28);
            var33 = 32;
            var7 = var22[var33];
            var7 = var15.bind(var4)(var7);
            var32 = var7.intl;
            var28 = var32.formatToPlainString;
            var7 = var22[var33];
            var7 = var15.bind(var4)(var7);
            var7 = var7.t;
            var26 = var7.gVn4uJ;
            var7 = {};
            var36 = var11.username;
            var7['username'] = var36;
            var53 = var28.bind(var32)(var26, var7);
            var7 = 33;
            var7 = var22[var7];
            var22 = var15.bind(var4)(var7);
            var15 = var22.useUserProfileBannerBackgroundColor;
            var7 = {};
            var7['user'] = var11;
            var7['displayProfile'] = var12;
            var48 = var15.bind(var22)(var7);
            var7 = var27 == var12;
            if(var7) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var15 = var12.isLoaded;
            var7 = !var15;
case 23:
            var22 = _closure1_slot1;
            var28 = _closure1_slot2;
            var15 = 34;
            var15 = var28[var15];
            var15 = var22.bind(var4)(var15);
            var22 = var15.bind(var4)();
            var36 = _closure1_slot4;
            var32 = var36.useMemo;
            var26 = new Array(2);
            var26[0] = var29;
            var26[1] = var39;
            var15 = function() {
                var1 = {};
                var3 = _closure2_slot10;
                var1['width'] = var3;
                var2 = _closure2_slot2;
                var1['height'] = var2;
                return var1;
            };
            var55 = var32.bind(var36)(var15, var26);
            var26 = _closure1_slot0;
            var15 = 35;
            var15 = var28[var15];
            var26 = var26.bind(var4)(var15);
            var15 = var26.useYouBarEnabled;
            var47 = 'YouScreen';
            var26 = var15.bind(var26)(var47);
            var15 = _closure1_slot11;
            var15 = var15.bind(var4)(var47);
            _closure2_slot14 = var15;
            var28 = var22;
            if(var28) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var28 = var26;
case 25:
            if(var22) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            if(var15) { _fun0001_ip = 27; continue _fun0001 }
case 29:
            var37 = var20.top;
            _fun0001_ip = 30; continue _fun0001;
case 27:
            var37 = _closure1_slot14;
case 30:
            var26 = _closure1_slot4;
            var22 = var26.useMemo;
            var20 = new Array(1);
            var20[0] = var15;
            var15 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot14;
                    var5 = undefined;
                    var1 = undefined;
                    if(!var2) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                    var2 = {};
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 19;
                    var7 = var6[var3];
                    var7 = var4.bind(var5)(var7);
                    var7 = var7.radii;
                    var7 = var7.xl;
                    var2['borderTopLeftRadius'] = var7;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.radii;
                    var3 = var3.xl;
                    var2['borderTopRightRadius'] = var3;
                    var1 = var2;
case 31:
                    return var1;
                }
            };
            var22 = var22.bind(var26)(var15, var20);
            var15 = var27 == var12;
            var32 = undefined;
            if(var15) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var15 = var12.profileEffect;
            var20 = var27 == var15;
            var32 = undefined;
            if(var20) { _fun0001_ip = 33; continue _fun0001 }
case 35:
            var32 = var15.skuId;
case 33:
            var20 = var27 != var32;
            var26 = _closure1_slot1;
            var36 = _closure1_slot2;
            var15 = 36;
            var15 = var36[var15];
            var26 = var26.bind(var4)(var15);
            var36 = var27 == var12;
            var15 = undefined;
            if(var36) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var36 = var12.profileFrame;
            var41 = var27 == var36;
            var15 = undefined;
            if(var41) { _fun0001_ip = 36; continue _fun0001 }
case 38:
            var15 = var36.skuId;
case 36:
            var41 = var26.bind(var4)(var15, var47);
            _closure2_slot15 = var41;
            var42 = _closure1_slot4;
            var36 = var42.useMemo;
            var26 = new Array(2);
            var26[0] = var41;
            var26[1] = var39;
            var15 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot15;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0008_ip = 39; continue _fun0008 }
case 16:
                    var1 = undefined;
                    return var1;
case 39:
                    var1 = {};
                    var3 = _closure1_slot23;
                    var5 = _closure2_slot10;
                    var6 = _closure1_slot22;
                    var4 = 2;
                    var4 = var4 * var6;
                    var4 = var5 + var4;
                    var2 = _closure1_slot21;
                    var2 = var4 / var2;
                    var2 = var3 * var2;
                    var1['marginTop'] = var2;
                    var2 = 'visible';
                    var1['overflow'] = var2;
                    return var1;
                }
            };
            var15 = var36.bind(var42)(var15, var26);
            var42 = _closure1_slot0;
            var50 = _closure1_slot2;
            var26 = 37;
            var26 = var50[var26];
            var36 = var42.bind(var4)(var26);
            var26 = var36.useMobileWishlistOwnerExperiment;
            var26 = var26.bind(var36)(var47);
            _closure2_slot16 = var26;
            var54 = _closure1_slot4;
            var51 = var54.useMemo;
            var36 = var26.enabled;
            var47 = new Array(1);
            var47[0] = var36;
            var36 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot16;
                    var1 = var1.enabled;
                    if(var1) { _fun0009_ip = 8; continue _fun0009 }
case 40:
                    var1 = new Array(0);
                    _fun0009_ip = 41; continue _fun0009;
case 8:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 38;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.DismissibleContent;
                    var3 = var2.WISHLIST_MOBILE_YOU_SCREEN_COACHMARK;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 41:
                    return var1;
                }
            };
            var47 = var51.bind(var54)(var36, var47);
            var36 = 39;
            var36 = var50[var36];
            var42 = var42.bind(var4)(var36);
            var36 = var42.useSelectedDismissibleContent;
            var42 = var36.bind(var42)(var47);
            var36 = _closure1_slot3;
            var36 = var36.bind(var4)(var42, var45);
            var24 = var36[var24];
            var59 = var36[var34];
            var58 = var26.enabled;
            if(!var58) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var58 = var27 != var24;
case 42:
            _closure2_slot17 = var58;
            var42 = _closure1_slot4;
            var36 = var42.useMemo;
            var26 = new Array(1);
            var26[0] = var58;
            var24 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot17;
                    var1 = null;
                    if(!var2) { _fun0010_ip = 44; continue _fun0010 }
case 40:
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
                        var4 = _closure1_slot25;
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
case 44:
                    return var1;
                }
            };
            var57 = var36.bind(var42)(var24, var26);
            var26 = _closure1_slot4;
            var24 = var26.useRef;
            var60 = var24.bind(var26)(var27);
            var26 = _closure1_slot4;
            var24 = var26.useRef;
            var51 = var24.bind(var26)(var27);
            _closure2_slot18 = var59;
            var42 = _closure1_slot4;
            var36 = var42.useCallback;
            var26 = new Array(2);
            var26[0] = var59;
            var26[1] = var3;
            var24 = function() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure2_slot18;
                var2 = _closure1_slot24;
                var2 = var2.TAKE_ACTION;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var56 = var36.bind(var42)(var24, var26);
            var24 = {};
            var24['user'] = var11;
            var24['userTheme'] = var13;
            var24['scrollViewRef'] = var25;
            var26 = var35.content;
            var13 = new Array(2);
            var13[0] = var26;
            var13[1] = var17;
            var24['style'] = var13;
            var24['navigateToProfileCustomization'] = var9;
            var24['navigateToCustomStatus'] = var8;
            var24['navigateToFriends'] = var5;
            var24['navigateToPremium'] = var6;
            var24['navigateToShop'] = var3;
            var24['initialTab'] = var2;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 41;
            var2 = var13[var8];
            var5 = var9.bind(var4)(var2);
            var3 = var5.useCreateUserProfileAnalyticsContext;
            var2 = {};
            var17 = 'YOU_SCREEN';
            var2['layout'] = var17;
            var11 = var11.id;
            var2['userId'] = var11;
            var11 = var3.bind(var5)(var2);
            var42 = var27 != var57;
            var54 = 42;
            var2 = var13[var54];
            var5 = var9.bind(var4)(var2);
            var3 = var5.useYouSettingsCoachmark;
            var2 = {};
            var2['disabled'] = var42;
            var50 = var3.bind(var5)(var2);
            _closure2_slot19 = var50;
            var36 = var27 != var50;
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var1;
            var2[1] = var50;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot19;
                    var4 = null;
                    var2 = var4 == var2;
                    if(var2) { _fun0011_ip = 45; continue _fun0011 }
case 46:
                    var3 = _closure2_slot19;
                    var3 = var3.trackSettingsPress;
                    var2 = var4 == var3;
case 45:
                    if(var2) { _fun0011_ip = 47; continue _fun0011 }
case 48:
                    var3 = _closure2_slot19;
                    var2 = var3.trackSettingsPress;
                    var2 = var2.bind(var3)();
case 47:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot25;
            var2 = _closure1_slot1;
            var1 = 43;
            var1 = var13[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['isLoading'] = var7;
            var1['navigateToPremium'] = var6;
            var1['navigateToSettings'] = var5;
            var1['navigateToShop'] = var56;
            var1['shopButtonRef'] = var60;
            var1['settingsButtonRef'] = var51;
            var1['paddingTop'] = var37;
            var26 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot25;
            var45 = 44;
            var1 = var13[var45];
            var1 = var9.bind(var4)(var1);
            var2 = var1.LayerScope;
            var1 = {};
            var7 = _closure1_slot25;
            var5 = 45;
            var5 = var13[var5];
            var5 = var9.bind(var4)(var5);
            var6 = var5.ThemeContextProvider;
            var5 = {};
            var5['theme'] = var16;
            var5['primaryColor'] = var14;
            var5['secondaryColor'] = var10;
            var10 = _closure1_slot25;
            var8 = var13[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.UserProfileAnalyticsProvider;
            var8 = {};
            var8['value'] = var11;
            var13 = var27 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var11 = var12.isLoaded;
case 49:
            var8['isLoaded'] = var11;
            var13 = _closure1_slot26;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 46;
            var11 = var14[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var16 = var35.container;
            var14 = new Array(3);
            var14[0] = var16;
            var14[1] = var22;
            var14[2] = var15;
            var11['style'] = var14;
            var14 = _closure1_slot17;
            var11['nativeID'] = var14;
            var15 = var27 != var41;
            if(!var15) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var17 = _closure1_slot25;
            var16 = _closure1_slot1;
            var47 = _closure1_slot2;
            var14 = 47;
            var14 = var47[var14];
            var16 = var16.bind(var4)(var14);
            var14 = {};
            var14['frame'] = var41;
            var14['containerWidth'] = var39;
            var15 = var17.bind(var4)(var16, var14);
case 51:
            var14 = new Array(4);
            var14[0] = var15;
            var17 = _closure1_slot25;
            var16 = _closure1_slot1;
            var47 = _closure1_slot2;
            var15 = 48;
            var15 = var47[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var15['gradientHeight'] = var38;
            var15['bannerHeight'] = var29;
            var15['style'] = var22;
            var15 = var17.bind(var4)(var16, var15);
            var14[1] = var15;
            var15 = var42;
            if(var42) { _fun0001_ip = 53; continue _fun0001 }
case 54:
            var15 = var36;
case 53:
            if(!var15) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var29 = _closure1_slot26;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var45];
            var16 = var17.bind(var4)(var16);
            var17 = var16.LayerScope;
            var16 = {};
            var16['zIndex'] = var34;
            if(!var42) { _fun0001_ip = 57; continue _fun0001 }
case 58:
            var47 = _closure1_slot25;
            var45 = _closure1_slot1;
            var61 = _closure1_slot2;
            var34 = 49;
            var34 = var61[var34];
            var45 = var45.bind(var4)(var34);
            var34 = {};
            var34['buttonRef'] = var60;
            var34['markAsDismissed'] = var59;
            var34['visible'] = var58;
            var58 = var57.title;
            var34['title'] = var58;
            var58 = var57.description;
            var34['description'] = var58;
            var58 = var57.avatarSrc;
            var34['avatarSrc'] = var58;
            var58 = var57.decorationAsset;
            var34['decorationAsset'] = var58;
            var57 = var57.renderImgComponent;
            var34['renderImgComponent'] = var57;
            var34['navigateToShop'] = var56;
            var42 = var47.bind(var4)(var45, var34);
case 57:
            var34 = new Array(2);
            var34[0] = var42;
            if(!var36) { _fun0001_ip = 59; continue _fun0001 }
case 60:
            var47 = _closure1_slot25;
            var45 = _closure1_slot1;
            var42 = _closure1_slot2;
            var42 = var42[var54];
            var45 = var45.bind(var4)(var42);
            var42 = {};
            var42['buttonRef'] = var51;
            var63 = var50.props;
            var64 = var42;
            var50 = copyDataProperties(var64, var63);
            var36 = var47.bind(var4)(var45, var42);
case 59:
            var34[1] = var36;
            var16['children'] = var34;
            var15 = var29.bind(var4)(var17, var16);
case 55:
            var14[2] = var15;
            var17 = _closure1_slot26;
            var16 = _closure1_slot29;
            var15 = {};
            var15['ref'] = var25;
            var15['onScroll'] = var23;
            var15['onLayout'] = var18;
            var18 = _closure1_slot18;
            var15['scrollEventThrottle'] = var18;
            var23 = var35.scrollView;
            var18 = new Array(2);
            var18[0] = var23;
            var18[1] = var22;
            var15['style'] = var18;
            var23 = _closure1_slot26;
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
            if(!var28) { _fun0001_ip = 61; continue _fun0001 }
case 62:
            var29 = null;
            if(var20) { _fun0001_ip = 61; continue _fun0001 }
case 63:
            var36 = _closure1_slot25;
            var45 = _closure1_slot0;
            var50 = _closure1_slot2;
            var25 = 50;
            var25 = var50[var25];
            var25 = var45.bind(var4)(var25);
            var34 = var25.PressableOpacity;
            var25 = {};
            var47 = var35.backButton;
            var42 = new Array(2);
            var42[0] = var47;
            var47 = {};
            var47['top'] = var37;
            var42[1] = var47;
            var25['style'] = var42;
            var42 = var50[var33];
            var42 = var45.bind(var4)(var42);
            var51 = var42.intl;
            var47 = var51.string;
            var42 = var50[var33];
            var42 = var45.bind(var4)(var42);
            var42 = var42.t;
            var42 = var42["13/7kX"];
            var42 = var47.bind(var51)(var42);
            var25['accessibilityLabel'] = var42;
            var42 = function onPress() {
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
                    if(!(var2 != var3)) { _fun0012_ip = 64; continue _fun0012 }
case 65:
                    var2 = var3.canGoBack;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0012_ip = 66; continue _fun0012 }
case 67:
                    var4 = var3.navigate;
                    var2 = 'guilds';
                    var2 = var4.bind(var3)(var2);
                    _fun0012_ip = 64; continue _fun0012;
case 66:
                    var2 = var3.goBack;
                    var2 = var2.bind(var3)();
case 64:
                    return var1;
                }
            };
            var25['onPress'] = var42;
            var47 = _closure1_slot25;
            var42 = 52;
            var42 = var50[var42];
            var42 = var45.bind(var4)(var42);
            var45 = var42.CloseIconWithBadgeOnSide;
            var42 = {};
            var42 = var47.bind(var4)(var45, var42);
            var25['children'] = var42;
            var29 = var36.bind(var4)(var34, var25);
case 61:
            var25 = new Array(4);
            var25[0] = var29;
            var29 = !var20;
            if(var20) { _fun0001_ip = 68; continue _fun0001 }
case 69:
            var29 = var26;
case 68:
            var25[1] = var29;
            var36 = _closure1_slot26;
            var34 = _closure1_slot1;
            var50 = _closure1_slot2;
            var29 = var50[var21];
            var29 = var34.bind(var4)(var29);
            var34 = var29.View;
            var29 = {};
            var45 = {};
            var47 = _closure1_slot0;
            var42 = 53;
            var42 = var50[var42];
            var47 = var47.bind(var4)(var42);
            var42 = var47.int2hex;
            var42 = var42.bind(var47)(var48);
            var45['backgroundColor'] = var42;
            var42 = new Array(3);
            var42[0] = var45;
            var42[1] = var55;
            var42[2] = var44;
            var29['style'] = var42;
            var42 = var27 != var52;
            if(!var42) { _fun0001_ip = 70; continue _fun0001 }
case 71:
            if(var40) { _fun0001_ip = 72; continue _fun0001 }
case 73:
            var45 = _closure1_slot25;
            var44 = _closure1_slot1;
            var47 = _closure1_slot2;
            var40 = 40;
            var40 = var47[var40];
            var44 = var44.bind(var4)(var40);
            var40 = {};
            var40['style'] = var55;
            var47 = 'image';
            var40['accessibilityRole'] = var47;
            var40['accessibilityLabel'] = var53;
            var40['source'] = var52;
            var40 = var45.bind(var4)(var44, var40);
            _fun0001_ip = 74; continue _fun0001;
case 72:
            var47 = _closure1_slot26;
            var57 = _closure1_slot0;
            var56 = _closure1_slot2;
            var44 = 50;
            var44 = var56[var44];
            var44 = var57.bind(var4)(var44);
            var45 = var44.PressableOpacity;
            var44 = {};
            var48 = function onPress() {
                var3 = _closure2_slot13;
                var1 = _closure2_slot12;
                var2 = !var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var44['onPress'] = var48;
            var54 = 'image';
            var44['accessibilityRole'] = var54;
            var48 = var56[var33];
            var48 = var57.bind(var4)(var48);
            var51 = var48.intl;
            var50 = var51.string;
            var48 = var56[var33];
            var48 = var57.bind(var4)(var48);
            var48 = var48.t;
            var48 = var48["3fzj/l"];
            var48 = var50.bind(var51)(var48);
            var44['accessibilityLabel'] = var48;
            var51 = _closure1_slot25;
            var50 = _closure1_slot1;
            var48 = 40;
            var48 = var56[var48];
            var50 = var50.bind(var4)(var48);
            var48 = {};
            var48['style'] = var55;
            var48['accessibilityRole'] = var54;
            var48['accessibilityLabel'] = var53;
            var48['source'] = var52;
            var50 = var51.bind(var4)(var50, var48);
            var48 = new Array(2);
            var48[0] = var50;
            var49 = !var49;
            if(!var49) { _fun0001_ip = 75; continue _fun0001 }
case 76:
            var52 = _closure1_slot25;
            var56 = _closure1_slot0;
            var53 = _closure1_slot2;
            var50 = 54;
            var50 = var53[var50];
            var50 = var56.bind(var4)(var50);
            var51 = var50.Caption;
            var50 = {};
            var54 = var53[var33];
            var54 = var56.bind(var4)(var54);
            var55 = var54.intl;
            var54 = var55.string;
            var53 = var53[var33];
            var53 = var56.bind(var4)(var53);
            var53 = var53.t;
            var53 = var53.I5gL2H;
            var53 = var54.bind(var55)(var53);
            var50['label'] = var53;
            var54 = var35.gifTag;
            var53 = new Array(2);
            var53[0] = var54;
            var54 = {};
            var54['top'] = var37;
            var53[1] = var54;
            var50['style'] = var53;
            var53 = var35.gifTagText;
            var50['textStyle'] = var53;
            var49 = var52.bind(var4)(var51, var50);
case 75:
            var48[1] = var49;
            var44['children'] = var48;
            var40 = var47.bind(var4)(var45, var44);
case 74:
            var42 = var40;
case 70:
            var40 = new Array(2);
            var40[0] = var42;
            var44 = _closure1_slot0;
            var45 = _closure1_slot2;
            var42 = 55;
            var42 = var45[var42];
            var44 = var44.bind(var4)(var42);
            var42 = var44.isIOS;
            var42 = var42.bind(var44)();
            if(!var42) { _fun0001_ip = 77; continue _fun0001 }
case 78:
            var42 = var43;
case 77:
            if(!var42) { _fun0001_ip = 79; continue _fun0001 }
case 80:
            var45 = _closure1_slot25;
            var44 = _closure1_slot27;
            var43 = {};
            var43['animatedProps'] = var46;
            var46 = _closure1_slot5;
            var46 = var46.absoluteFillObject;
            var43['style'] = var46;
            var42 = var45.bind(var4)(var44, var43);
case 79:
            var40[1] = var42;
            var29['children'] = var40;
            var29 = var36.bind(var4)(var34, var29);
            var25[2] = var29;
            var29 = var27 != var41;
            if(!var29) { _fun0001_ip = 81; continue _fun0001 }
case 82:
            var40 = _closure1_slot25;
            var36 = _closure1_slot1;
            var42 = _closure1_slot2;
            var34 = 56;
            var34 = var42[var34];
            var36 = var36.bind(var4)(var34);
            var34 = {};
            var34['frame'] = var41;
            var34['containerWidth'] = var39;
            var29 = var40.bind(var4)(var36, var34);
case 81:
            var25[3] = var29;
            var18['children'] = var25;
            var22 = var23.bind(var4)(var22, var18);
            var18 = new Array(4);
            var18[0] = var22;
            if(!var20) { _fun0001_ip = 83; continue _fun0001 }
case 84:
            var23 = _closure1_slot26;
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
            var30 = _closure1_slot25;
            var25 = 57;
            var25 = var34[var25];
            var29 = var29.bind(var4)(var25);
            var25 = {'skuId': null, 'bannerAdjustment': 0, 'replayOnNavigationFocus': true};
            var25['skuId'] = var32;
            var29 = var30.bind(var4)(var29, var25);
            var25 = new Array(3);
            var25[0] = var29;
            var27 = null;
            if(!var28) { _fun0001_ip = 85; continue _fun0001 }
case 86:
            var30 = _closure1_slot25;
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
                    if(!(var2 != var3)) { _fun0013_ip = 64; continue _fun0013 }
case 65:
                    var2 = var3.canGoBack;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0013_ip = 66; continue _fun0013 }
case 67:
                    var4 = var3.navigate;
                    var2 = 'guilds';
                    var2 = var4.bind(var3)(var2);
                    _fun0013_ip = 64; continue _fun0013;
case 66:
                    var2 = var3.goBack;
                    var2 = var2.bind(var3)();
case 64:
                    return var1;
                }
            };
            var28['onPress'] = var31;
            var33 = _closure1_slot25;
            var31 = 52;
            var31 = var34[var31];
            var31 = var32.bind(var4)(var31);
            var32 = var31.CloseIconWithBadgeOnSide;
            var31 = {};
            var31 = var33.bind(var4)(var32, var31);
            var28['children'] = var31;
            var27 = var30.bind(var4)(var29, var28);
case 85:
            var25[1] = var27;
            var25[2] = var26;
            var21['children'] = var25;
            var20 = var23.bind(var4)(var22, var21);
case 83:
            var18[1] = var20;
            var23 = _closure1_slot25;
            var21 = _closure1_slot1;
            var22 = _closure1_slot2;
            var20 = 58;
            var20 = var22[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var64 = var20;
            var63 = var24;
            var24 = copyDataProperties(var64, var63);
            var20 = var23.bind(var4)(var21, var20);
            var18[2] = var20;
            var21 = _closure1_slot25;
            var20 = _closure1_slot0;
            var19 = 59;
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
            var14[3] = var15;
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
    var _closure1_slot39 = var2;
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
    var5 = var6.bind(var1)(var5);
    var5 = var5.useYouBarIOSModalPresentation;
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var11 = var5.SCALE_FACTOR;
    var _closure1_slot12 = var11;
    var11 = var5.SCROLL_POSITION_COEFFICIENT;
    var _closure1_slot13 = var11;
    var11 = var5.YOU_ACTION_SHEET_TOP_INSET;
    var _closure1_slot14 = var11;
    var11 = var5.YOU_AVATAR_SIZE;
    var _closure1_slot15 = var11;
    var11 = var5.YOU_BANNER_VERTICAL_TRANSLATE_SCALE_FACTOR;
    var _closure1_slot16 = var11;
    var11 = var5.YOU_SCREEN_ID;
    var _closure1_slot17 = var11;
    var5 = var5.YOU_SCROLL_EVENT_THROTTLE;
    var _closure1_slot18 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.UserSettingsSections;
    var _closure1_slot19 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.CollectiblesMobileShopScreen;
    var _closure1_slot20 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var11 = var5.PROFILE_FRAME_LAYER_WIDTH;
    var _closure1_slot21 = var11;
    var11 = var5.PROFILE_FRAME_OVERFLOW_LEFT;
    var _closure1_slot22 = var11;
    var5 = var5.PROFILE_FRAME_OVERFLOW_TOP;
    var _closure1_slot23 = var5;
    var5 = 13;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ContentDismissActionType;
    var _closure1_slot24 = var5;
    var5 = 14;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var11 = var5.jsx;
    var _closure1_slot25 = var11;
    var5 = var5.jsxs;
    var _closure1_slot26 = var5;
    var5 = 15;
    var11 = var7[var5];
    var13 = var8.bind(var1)(var11);
    var12 = var13.createAnimatedComponent;
    var11 = 16;
    var11 = var7[var11];
    var11 = var8.bind(var1)(var11);
    var11 = var12.bind(var13)(var11);
    var _closure1_slot27 = var11;
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
    var _closure1_slot28 = var11;
    var5 = var7[var5];
    var8 = var8.bind(var1)(var5);
    var5 = var8.createAnimatedComponent;
    var5 = var5.bind(var8)(var10);
    var _closure1_slot29 = var5;
    var5 = {};
    var8 = 'function YouScreenTsx1(e){const{scrollPosition}=this.__closure;scrollPosition.set(e.contentOffset.y);}';
    var5['code'] = var8;
    var _closure1_slot30 = var5;
    var5 = {};
    var8 = 'function YouScreenTsx2(){const{scrollPosition}=this.__closure;return scrollPosition.get()<=0;}';
    var5['code'] = var8;
    var _closure1_slot31 = var5;
    var5 = {};
    var8 = 'function YouScreenTsx3(){const{interpolate,scrollPosition,minScrollPosition,SCALE_FACTOR,translateOnScale,isNegativeScrollPosition}=this.__closure;const scale=interpolate(scrollPosition.get(),[minScrollPosition,0],[SCALE_FACTOR,1]);const translateY=interpolate(scrollPosition.get(),[minScrollPosition,0],[translateOnScale,0]);const transform=isNegativeScrollPosition.get()?[{scale:scale},{translateY:translateY}]:[];return{transform:transform};}';
    var5['code'] = var8;
    var _closure1_slot32 = var5;
    var5 = {};
    var8 = 'function YouScreenTsx4(){const{isNegativeScrollPosition,scrollPosition}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:scrollPosition.get()}]:[];return{transform:transform};}';
    var5['code'] = var8;
    var _closure1_slot33 = var5;
    var5 = {};
    var8 = 'function YouScreenTsx5(){const{isNegativeScrollPosition,scrollPosition,coefficient}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:scrollPosition.get()*(1/coefficient)}]:[];return{transform:transform};}';
    var5['code'] = var8;
    var _closure1_slot34 = var5;
    var5 = {};
    var8 = 'function YouScreenTsx6(){const{clamp,interpolate,scrollPosition,windowHeight,coefficient}=this.__closure;return{blurAmount:clamp(interpolate(scrollPosition.get(),[0,-windowHeight*coefficient],[0,1]),0,1)};}';
    var5['code'] = var8;
    var _closure1_slot35 = var5;
    var5 = {};
    var8 = 'function YouScreenTsx7(){const{scrollPosition}=this.__closure;return scrollPosition.get()<0;}';
    var5['code'] = var8;
    var _closure1_slot36 = var5;
    var5 = {};
    var8 = 'function YouScreenTsx8(result,previous){const{runOnJS,setShowBlur}=this.__closure;return result!==previous&&runOnJS(setShowBlur)(result);}';
    var5['code'] = var8;
    var _closure1_slot37 = var5;
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
            var8 = _closure1_slot10;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var10.bind(var11)(var9, var8);
            var _closure2_slot0 = var13;
            var1 = var1[var4];
            var9 = var7.bind(var5)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var1 = _closure1_slot8;
                var1 = var1.locale;
                return var1;
            };
            var10 = var8.bind(var9)(var7, var1);
            var1 = null;
            var7 = var1 == var13;
            var9 = undefined;
            if(var7) { _fun0014_ip = 87; continue _fun0014 }
case 88:
            var9 = var13.id;
case 87:
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
                    if(var3) { _fun0015_ip = 65; continue _fun0015 }
case 89:
                    var4 = _closure2_slot0;
                    var3 = var4.getAvatarURL;
                    var2 = _closure1_slot15;
                    var1 = var3.bind(var4)(var5, var2);
case 65:
                    return var1;
                }
            };
            var15 = var11.bind(var12)(var7, var8);
            _closure2_slot2 = var15;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var11 = 37;
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
                    if(!var2) { _fun0016_ip = 90; continue _fun0016 }
case 46:
                    var3 = _closure2_slot2;
                    var2 = var4 != var3;
case 90:
                    if(!var2) { _fun0016_ip = 91; continue _fun0016 }
case 7:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 60;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var1 = {};
                    var6 = 'you_screen';
                    var1['type'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 91:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var12.bind(var14)(var10, var11);
            var4 = var8[var4];
            var12 = var7.bind(var5)(var4);
            var11 = var12.useStateFromStores;
            var4 = _closure1_slot7;
            var10 = new Array(1);
            var10[0] = var4;
            var4 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var3 = var1.enabled;
                    var4 = null;
                    var1 = null;
                    if(!var3) { _fun0017_ip = 67; continue _fun0017 }
case 3:
                    var3 = _closure2_slot1;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0017_ip = 67; continue _fun0017 }
case 92:
                    var4 = _closure1_slot7;
                    var3 = var4.getFirstWishlistId;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 67:
                    return var1;
                }
            };
            var10 = var11.bind(var12)(var10, var4);
            var4 = 61;
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
                var4 = _closure1_slot9;
                var3 = var4.setState;
                var2 = {'query': '', 'isActive': false};
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 62;
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
                var1 = 62;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openUserSettings;
                var2 = {};
                var5 = _closure1_slot19;
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
                var1 = 63;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openCollectiblesShopMobile;
                var2 = {};
                var7 = _closure1_slot1;
                var6 = 64;
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
                var5 = _closure1_slot20;
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
                var1 = 62;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openUserSettings;
                var2 = {};
                var5 = _closure1_slot19;
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
                var1 = 65;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openEditCustomStatusModal;
                var2 = {};
                var6 = _closure1_slot1;
                var5 = 64;
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
                    if(!(var2 != var4)) { _fun0018_ip = 66; continue _fun0018 }
case 65:
                    var2 = var4.isReady;
                    var2 = var2.bind(var4)();
                    if(!var2) { _fun0018_ip = 66; continue _fun0018 }
case 67:
                    var3 = var4.navigate;
                    var2 = 'friends';
                    var2 = var3.bind(var4)(var2);
                    return var1;
case 66:
                    var1 = false;
                    return var1;
                }
            };
            var3 = new Array(0);
            var8 = var8.bind(var14)(var4, var3);
            var3 = var1 == var13;
            var1 = null;
            if(var3) { _fun0014_ip = 93; continue _fun0014 }
case 94:
            var4 = _closure1_slot25;
            var3 = _closure1_slot39;
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
case 93:
            return var1;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot38 = var5;
    var5 = 68;
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
            var4 = _closure1_slot9;
            var3 = var4.setState;
            var2 = {'query': '', 'isActive': false};
            var2 = var3.bind(var4)(var2);
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 62;
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
            var1 = 66;
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
        var2 = 67;
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
        var3 = _closure1_slot25;
        var2 = _closure1_slot38;
        var1 = {};
        var1['initialTab'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['UnconnectedYouScreen'] = var2;
    return var1;
})();