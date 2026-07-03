// app/modules/main_tabs_v2/native/tabs/you/YouScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function handleBackButtonPress() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 20;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getRootNavigationRef;
            var3 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3.canGoBack;
            var2 = var2.bind(var3)();
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var3.navigate;
            var2 = 'guilds';
            var2 = var4.bind(var3)(var2);
            _fun0001_ip = 2; continue _fun0001;
case 4:
            var2 = var3.goBack;
            var2 = var2.bind(var3)();
case 2:
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function BackButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var12 = var1.paddingTop;
            var1 = _closure1_slot25;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 21;
            var1 = var3[var1];
            var6 = var2.bind(var4)(var1);
            var3 = var6.useStateFromStores;
            var1 = _closure1_slot10;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getTotalMentionCount;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var3.bind(var6)(var2, var1);
            var1 = 0;
            if(!(!(var8 > var1))) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 22;
            var2 = var7[var1];
            var2 = var6.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1["13/7kX"];
            var7 = var2.bind(var3)(var1);
            _fun0002_ip = 8; continue _fun0002;
case 6:
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 22;
            var3 = var9[var1];
            var3 = var2.bind(var4)(var3);
            var6 = var3.intl;
            var3 = var6.formatToPlainString;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.vxFYaM;
            var1 = {};
            var1['mentionCount'] = var8;
            var7 = var3.bind(var6)(var2, var1);
case 8:
            var3 = _closure1_slot21;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 23;
            var1 = var9[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var11 = var10.backButton;
            var10 = new Array(2);
            var10[0] = var11;
            var11 = {};
            var11['top'] = var12;
            var10[1] = var11;
            var1['style'] = var10;
            var10 = 'button';
            var1['accessibilityRole'] = var10;
            var1['accessibilityLabel'] = var7;
            var7 = _closure1_slot28;
            var1['onPress'] = var7;
            var7 = _closure1_slot21;
            var5 = 24;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.CloseIconWithBadgeOnSide;
            var5 = {};
            var5['count'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function UnconnectedYouScreen(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var41 = var1.user;
            var19 = var1.navigateToSettings;
            var _closure2_slot0 = var19;
            var33 = var1.navigateToPremium;
            var32 = var1.navigateToShop;
            var _closure2_slot1 = var32;
            var36 = var1.navigateToProfileCustomization;
            var35 = var1.navigateToCustomStatus;
            var34 = var1.navigateToFriends;
            var31 = var1.initialTab;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var2 = _closure1_slot4;
            var1 = var2.useState;
            var3 = 0;
            var2 = var1.bind(var2)(var3);
            var1 = _closure1_slot3;
            var44 = 2;
            var1 = var1.bind(var4)(var2, var44);
            var8 = var1[var3];
            var48 = 1;
            var1 = var1[var48];
            var _closure2_slot2 = var1;
            var6 = _closure1_slot4;
            var5 = var6.useCallback;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.width;
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var1 = new Array(0);
            var25 = var5.bind(var6)(var2, var1);
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 25;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var5 = var8 > var3;
            var1 = undefined;
            if(!var5) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var1 = var8;
case 9:
            var43 = var2.bind(var4)(var1);
            _closure2_slot3 = var43;
            var1 = _closure1_slot12;
            var5 = var1.bind(var4)();
            var1 = _closure1_slot24;
            var37 = var1.bind(var4)(var43, var5);
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 26;
            var1 = var9[var1];
            var6 = var2.bind(var4)(var1);
            var1 = {};
            var7 = _closure1_slot0;
            var10 = 27;
            var11 = var9[var10];
            var11 = var7.bind(var4)(var11);
            var11 = var11.ImpressionTypes;
            var11 = var11.VIEW;
            var1['type'] = var11;
            var10 = var9[var10];
            var10 = var7.bind(var4)(var10);
            var10 = var10.ImpressionNames;
            var10 = var10.USER_YOU_SCREEN;
            var1['name'] = var10;
            var1 = var6.bind(var4)(var1);
            var1 = 28;
            var1 = var9[var1];
            var6 = var2.bind(var4)(var1);
            var1 = var41.id;
            var12 = var6.bind(var4)(var1);
            var1 = 29;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var6 = var1.bind(var4)();
            _closure2_slot4 = var6;
            var1 = 30;
            var1 = var9[var1];
            var10 = var2.bind(var4)(var1);
            var1 = {};
            var1['user'] = var41;
            var1['displayProfile'] = var12;
            var1 = var10.bind(var4)(var1);
            var22 = var1.theme;
            var21 = var1.primaryColor;
            var10 = var1.secondaryColor;
            var1 = 31;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var40 = var1.bind(var4)();
            var11 = _closure1_slot4;
            var1 = var11.useRef;
            var17 = null;
            var39 = var1.bind(var11)(var17);
            var27 = 15;
            var1 = var9[var27];
            var11 = var7.bind(var4)(var1);
            var1 = var11.useSharedValue;
            var11 = var1.bind(var11)(var3);
            _closure2_slot5 = var11;
            var1 = var9[var27];
            var13 = var7.bind(var4)(var1);
            var7 = var13.useAnimatedScrollHandler;
            var1 = function H(arg1) {
                var3 = _closure2_slot5;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.contentOffset;
                var1 = var1.y;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var14 = {};
            var14['scrollPosition'] = var11;
            var1['__closure'] = var14;
            var14 = 952837799380.0;
            var1['__workletHash'] = var14;
            var14 = _closure1_slot27;
            var1['__initData'] = var14;
            var28 = var7.bind(var13)(var1);
            var1 = 32;
            var1 = var9[var1];
            var7 = var2.bind(var4)(var1);
            var1 = {};
            var1['scrollPosition'] = var11;
            var1['bannerHeight'] = var43;
            var1 = var7.bind(var4)(var1);
            var45 = var1.bannerAnimatedStyle;
            var51 = var1.bannerImageAnimatedStyle;
            var38 = var1.contentAnimatedStyle;
            var55 = var1.blurAnimatedProps;
            var52 = var1.showBlur;
            var1 = 33;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var7 = var1.isChatBesideChannelList;
            var1 = 34;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var2 = var1.width;
            var49 = var1.height;
            var1 = var6.right;
            var2 = var2 - var1;
            var1 = var6.left;
            var2 = var2 - var1;
            var1 = 0;
            if(!var7) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var1 = 16;
case 11:
            var7 = var2 - var1;
            var23 = var7;
            if(!(var8 > var3)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var1 = global;
            var2 = var1.Math;
            var1 = var2.min;
            var23 = var1.bind(var2)(var7, var8);
case 13:
            _closure2_slot6 = var23;
            var2 = _closure1_slot4;
            var1 = var2.useState;
            var13 = false;
            var2 = var1.bind(var2)(var13);
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var2, var44);
            var2 = var1[var3];
            _closure2_slot7 = var2;
            var1 = var1[var48];
            _closure2_slot8 = var1;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 35;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var7 = var1.GifAutoPlay;
            var1 = var7.getSetting;
            var7 = var1.bind(var7)();
            var1 = 36;
            var1 = var9[var1];
            var11 = var8.bind(var4)(var1);
            var1 = var11.useIsFocused;
            var14 = var1.bind(var11)();
            var1 = 37;
            var1 = var9[var1];
            var8 = var8.bind(var4)(var1);
            var1 = var8.useIsProfileModalTransitioning;
            var1 = var1.bind(var8)();
            var30 = !var14;
            if(!var30) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var30 = !var1;
case 15:
            var11 = _closure1_slot4;
            var9 = var11.useRef;
            var1 = global;
            var16 = var1.Date;
            var8 = var16.now;
            var8 = var8.bind(var16)();
            var11 = var9.bind(var11)(var8);
            var9 = _closure1_slot4;
            var8 = var9.useRef;
            var9 = var8.bind(var9)(var4);
            var16 = _closure1_slot4;
            var8 = var16.useRef;
            var8 = var8.bind(var16)(var13);
            if(!var14) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var16 = var8.current;
            if(var16) { _fun0003_ip = 17; continue _fun0003 }
case 19:
            var16 = true;
            var8['current'] = var16;
            var18 = var1.Date;
            var16 = var18.now;
            var16 = var16.bind(var18)();
            var9['current'] = var16;
            _fun0003_ip = 20; continue _fun0003;
case 17:
            if(var14) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var8['current'] = var13;
case 20:
            var59 = var7;
            if(var59) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var59 = var2;
case 22:
            var2 = var17 == var12;
            var14 = undefined;
            if(var2) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var7 = var12.getBannerURL;
            var2 = {};
            var2['canAnimate'] = var59;
            var2['size'] = var23;
            var14 = var7.bind(var12)(var2);
case 24:
            var2 = var17 != var14;
            var62 = null;
            if(!var2) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 38;
            var2 = var8[var2];
            var7 = var7.bind(var4)(var2);
            var2 = var7.makeSource;
            var62 = var2.bind(var7)(var14);
case 26:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 38;
            var2 = var8[var2];
            var13 = var7.bind(var4)(var2);
            var2 = var13.isAnimatedImageURL;
            var53 = var2.bind(var13)(var14);
            var67 = 22;
            var2 = var8[var67];
            var2 = var7.bind(var4)(var2);
            var16 = var2.intl;
            var14 = var16.formatToPlainString;
            var2 = var8[var67];
            var2 = var7.bind(var4)(var2);
            var2 = var2.t;
            var13 = var2.gVn4uJ;
            var2 = {};
            var18 = var41.username;
            var2['username'] = var18;
            var63 = var14.bind(var16)(var13, var2);
            var2 = 39;
            var2 = var8[var2];
            var8 = var7.bind(var4)(var2);
            var7 = var8.useUserProfileBannerBackgroundColor;
            var2 = {};
            var2['user'] = var41;
            var2['displayProfile'] = var12;
            var64 = var7.bind(var8)(var2);
            var42 = var17 == var12;
            if(var42) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var2 = var12.isLoaded;
            var42 = !var2;
case 28:
            var8 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 40;
            var2 = var16[var2];
            var2 = var8.bind(var4)(var2);
            var7 = var2.bind(var4)();
            var18 = _closure1_slot4;
            var14 = var18.useMemo;
            var13 = new Array(3);
            var13[0] = var43;
            var13[1] = var23;
            var2 = var6.bottom;
            var13[2] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var2 = {};
                    var4 = _closure2_slot6;
                    var2['width'] = var4;
                    var4 = _closure2_slot3;
                    var2['height'] = var4;
                    var1['dimensionStyle'] = var2;
                    var2 = {};
                    var3 = _closure2_slot4;
                    var4 = var3.bottom;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 41;
                    var3 = var7[var3];
                    var7 = undefined;
                    var6 = var6.bind(var7)(var3);
                    var3 = var6.isYouNavFloating;
                    var6 = var3.bind(var6)();
                    var3 = 0;
                    if(!var6) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 18;
                    var5 = var8[var5];
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.space;
                    var3 = var5.PX_64;
case 30:
                    var3 = var4 + var3;
                    var2['paddingBottom'] = var3;
                    var1['contentContainerStyle'] = var2;
                    return var1;
                }
            };
            var2 = var14.bind(var18)(var2, var13);
            var65 = var2.dimensionStyle;
            var29 = var2.contentContainerStyle;
            var18 = _closure1_slot0;
            var14 = 42;
            var2 = var16[var14];
            var20 = var18.bind(var4)(var2);
            var13 = var20.useCreateUserProfileAnalyticsContext;
            var2 = {};
            var24 = 'YOU_SCREEN';
            var2['layout'] = var24;
            var24 = var41.id;
            var2['userId'] = var24;
            var13 = var13.bind(var20)(var2);
            var2 = 43;
            var2 = var16[var2];
            var18 = var18.bind(var4)(var2);
            var2 = var18.useIsScreenLandscape;
            var18 = var2.bind(var18)();
            var2 = 44;
            var2 = var16[var2];
            var16 = var8.bind(var4)(var2);
            var8 = undefined;
            if(var18) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var2 = var17 == var12;
            var8 = undefined;
            if(var2) { _fun0003_ip = 32; continue _fun0003 }
case 34:
            var2 = var12.profileFrame;
            var20 = var17 == var2;
            var8 = undefined;
            if(var20) { _fun0003_ip = 32; continue _fun0003 }
case 35:
            var8 = var2.skuId;
case 32:
            var2 = 'YouScreen';
            var24 = var16.bind(var4)(var8, var2);
            var8 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 45;
            var2 = var16[var2];
            var8 = var8.bind(var4)(var2);
            var2 = {};
            var16 = undefined;
            if(var18) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var18 = var17 == var12;
            var16 = undefined;
            if(var18) { _fun0003_ip = 36; continue _fun0003 }
case 38:
            var18 = var12.profileFrame;
            var20 = var17 == var18;
            var16 = undefined;
            if(var20) { _fun0003_ip = 36; continue _fun0003 }
case 39:
            var16 = var18.skuId;
case 36:
            var2['skuId'] = var16;
            var9 = var9.current;
            var2['openedAt'] = var9;
            var16 = _closure1_slot1;
            var18 = _closure1_slot2;
            var9 = 46;
            var9 = var18[var9];
            var9 = var16.bind(var4)(var9);
            var16 = var9.YOU_SCREEN;
            var9 = new Array(1);
            var9[0] = var16;
            var2['analyticsLocations'] = var9;
            var2['context'] = var13;
            var2 = var8.bind(var4)(var2);
            var8 = var17 != var24;
            var2 = 0;
            if(!var8) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var9 = _closure1_slot1;
            var16 = _closure1_slot2;
            var8 = 47;
            var8 = var16[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.bind(var4)(var24, var23);
            var2 = var8.overflowTop;
case 40:
            _closure2_slot9 = var2;
            var18 = _closure1_slot4;
            var16 = var18.useMemo;
            var9 = new Array(1);
            var9[0] = var2;
            var8 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot9;
                    var1 = 0;
                    var2 = var2 > var1;
                    var1 = undefined;
                    if(!var2) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var2 = {};
                    var3 = _closure2_slot9;
                    var2['marginTop'] = var3;
                    var1 = var2;
case 42:
                    return var1;
                }
            };
            var20 = var16.bind(var18)(var8, var9);
            if(var7) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            if(var5) { _fun0003_ip = 44; continue _fun0003 }
case 46:
            var7 = var1.Math;
            var5 = var7.max;
            var1 = var6.top;
            var2 = var1 - var2;
            var1 = _closure1_slot13;
            var47 = var5.bind(var7)(var2, var1);
            _fun0003_ip = 47; continue _fun0003;
case 44:
            var47 = _closure1_slot13;
case 47:
            var1 = var17 == var12;
            var46 = undefined;
            if(var1) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var1 = var12.profileEffect;
            var2 = var17 == var1;
            var46 = undefined;
            if(var2) { _fun0003_ip = 48; continue _fun0003 }
case 50:
            var46 = var1.skuId;
case 48:
            var26 = var17 != var46;
            var7 = _closure1_slot4;
            var5 = var7.useMemo;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 48;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.DismissibleContent;
                var2 = var1.WISHLIST_MOBILE_YOU_SCREEN_COACHMARK;
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            };
            var1 = new Array(0);
            var8 = var5.bind(var7)(var2, var1);
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 49;
            var5 = var1[var5];
            var7 = var2.bind(var4)(var5);
            var5 = var7.useSelectedDismissibleContent;
            var7 = var5.bind(var7)(var8);
            var5 = _closure1_slot3;
            var7 = var5.bind(var4)(var7, var44);
            var5 = var7[var3];
            var68 = var7[var48];
            var66 = var17 != var5;
            _closure2_slot10 = var66;
            var9 = _closure1_slot4;
            var8 = var9.useMemo;
            var7 = new Array(1);
            var7[0] = var66;
            var5 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot10;
                    var1 = null;
                    if(!var2) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                    var2 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 22;
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
                        var4 = _closure1_slot21;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 50;
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
            var61 = var8.bind(var9)(var5, var7);
            var7 = _closure1_slot4;
            var5 = var7.useRef;
            var8 = var5.bind(var7)(var17);
            var7 = _closure1_slot4;
            var5 = var7.useRef;
            var7 = var5.bind(var7)(var17);
            _closure2_slot11 = var68;
            var18 = _closure1_slot4;
            var16 = var18.useCallback;
            var9 = new Array(2);
            var9[0] = var68;
            var9[1] = var32;
            var5 = function() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure2_slot11;
                var2 = _closure1_slot19;
                var2 = var2.TAKE_ACTION;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var9 = var16.bind(var18)(var5, var9);
            var54 = var17 != var61;
            var60 = 51;
            var1 = var1[var60];
            var5 = var2.bind(var4)(var1);
            var2 = var5.useYouSettingsCoachmark;
            var1 = {};
            var1['disabled'] = var54;
            var1 = var2.bind(var5)(var1);
            _closure2_slot12 = var1;
            var50 = var17 != var1;
            var2 = var54;
            if(var54) { _fun0003_ip = 53; continue _fun0003 }
case 54:
            var2 = var50;
case 53:
            _closure2_slot13 = var2;
            var56 = _closure1_slot4;
            var16 = var56.useState;
            var57 = _closure1_slot0;
            var5 = _closure1_slot2;
            var18 = 41;
            var5 = var5[var18];
            var57 = var57.bind(var4)(var5);
            var5 = var57.isYouNavFloating;
            var5 = var5.bind(var57)();
            var5 = !var5;
            var16 = var16.bind(var56)(var5);
            var5 = _closure1_slot3;
            var5 = var5.bind(var4)(var16, var44);
            var3 = var5[var3];
            var5 = var5[var48];
            _closure2_slot14 = var5;
            var16 = null;
            if(!var2) { _fun0003_ip = 55; continue _fun0003 }
case 56:
            var16 = null;
            if(!var3) { _fun0003_ip = 55; continue _fun0003 }
case 57:
            var44 = _closure1_slot22;
            var5 = _closure1_slot0;
            var56 = _closure1_slot2;
            var3 = 52;
            var3 = var56[var3];
            var3 = var5.bind(var4)(var3);
            var5 = var3.LayerScope;
            var3 = {};
            var3['zIndex'] = var48;
            if(!var54) { _fun0003_ip = 58; continue _fun0003 }
case 59:
            var57 = _closure1_slot21;
            var56 = _closure1_slot1;
            var69 = _closure1_slot2;
            var48 = 53;
            var48 = var69[var48];
            var56 = var56.bind(var4)(var48);
            var48 = {};
            var48['buttonRef'] = var8;
            var48['markAsDismissed'] = var68;
            var48['visible'] = var66;
            var66 = var61.title;
            var48['title'] = var66;
            var66 = var61.description;
            var48['description'] = var66;
            var66 = var61.avatarSrc;
            var48['avatarSrc'] = var66;
            var66 = var61.decorationAsset;
            var48['decorationAsset'] = var66;
            var61 = var61.renderImgComponent;
            var48['renderImgComponent'] = var61;
            var48['navigateToShop'] = var9;
            var54 = var57.bind(var4)(var56, var48);
case 58:
            var48 = new Array(2);
            var48[0] = var54;
            if(!var50) { _fun0003_ip = 60; continue _fun0003 }
case 61:
            var57 = _closure1_slot21;
            var56 = _closure1_slot1;
            var54 = _closure1_slot2;
            var54 = var54[var60];
            var56 = var56.bind(var4)(var54);
            var54 = {};
            var54['buttonRef'] = var7;
            var70 = var1.props;
            var71 = var54;
            var60 = copyDataProperties(var71, var70);
            var50 = var57.bind(var4)(var56, var54);
case 60:
            var48[1] = var50;
            var3['children'] = var48;
            var16 = var44.bind(var4)(var5, var3);
case 55:
            var44 = _closure1_slot4;
            var5 = var44.useEffect;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot13;
                    if(!var2) { _fun0007_ip = 62; continue _fun0007 }
case 63:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 41;
                    var2 = var4[var2];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.isYouNavFloating;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0007_ip = 5; continue _fun0007 }
case 62:
                    var2 = undefined;
                    return var2;
case 5:
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = function() {
                        var3 = _closure2_slot14;
                        var2 = undefined;
                        var1 = true;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var2 = 500;
                    var2 = var4.bind(var5)(var3, var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var2 = var5.bind(var44)(var2, var3);
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var19;
            var2[1] = var1;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot12;
                    var4 = null;
                    var2 = var4 == var2;
                    if(var2) { _fun0008_ip = 64; continue _fun0008 }
case 65:
                    var3 = _closure2_slot12;
                    var3 = var3.trackSettingsPress;
                    var2 = var4 == var3;
case 64:
                    if(var2) { _fun0008_ip = 66; continue _fun0008 }
case 67:
                    var3 = _closure2_slot12;
                    var2 = var3.trackSettingsPress;
                    var2 = var2.bind(var3)();
case 66:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var19 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot21;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 54;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['isLoading'] = var42;
            var1['navigateToPremium'] = var33;
            var1['navigateToSettings'] = var19;
            var1['navigateToShop'] = var9;
            var1['shopButtonRef'] = var8;
            var1['settingsButtonRef'] = var7;
            var1['paddingTop'] = var47;
            var7 = _closure1_slot0;
            var5 = var5[var18];
            var7 = var7.bind(var4)(var5);
            var5 = var7.isYouNavFloating;
            var7 = var5.bind(var7)();
            var5 = undefined;
            if(!var7) { _fun0003_ip = 68; continue _fun0003 }
case 69:
            var5 = var6.bottom;
case 68:
            var1['paddingBottom'] = var5;
            var19 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot21;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 52;
            var1 = var8[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.LayerScope;
            var1 = {};
            var7 = _closure1_slot21;
            var5 = 55;
            var5 = var8[var5];
            var5 = var9.bind(var4)(var5);
            var6 = var5.ThemeContextProvider;
            var5 = {};
            var5['theme'] = var22;
            var5['primaryColor'] = var21;
            var5['secondaryColor'] = var10;
            var10 = _closure1_slot21;
            var8 = var8[var14];
            var8 = var9.bind(var4)(var8);
            var9 = var8.UserProfileAnalyticsProvider;
            var8 = {};
            var8['value'] = var13;
            var11 = var11.current;
            var8['openedAt'] = var11;
            var13 = var17 == var12;
            var11 = undefined;
            if(var13) { _fun0003_ip = 70; continue _fun0003 }
case 71:
            var11 = var12.fetchStartedAt;
case 70:
            var8['fetchStartedAt'] = var11;
            var13 = var17 == var12;
            var11 = undefined;
            if(var13) { _fun0003_ip = 72; continue _fun0003 }
case 73:
            var11 = var12.fetchEndedAt;
case 72:
            var8['fetchEndedAt'] = var11;
            var13 = var17 == var12;
            var11 = undefined;
            if(var13) { _fun0003_ip = 74; continue _fun0003 }
case 75:
            var11 = var12.isLoaded;
case 74:
            var8['isLoaded'] = var11;
            var13 = _closure1_slot22;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 56;
            var11 = var14[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var21 = var37.container;
            var14 = new Array(2);
            var14[0] = var21;
            var14[1] = var20;
            var11['style'] = var14;
            var14 = _closure1_slot15;
            var11['nativeID'] = var14;
            var20 = var17 != var24;
            if(!var20) { _fun0003_ip = 76; continue _fun0003 }
case 77:
            var22 = _closure1_slot21;
            var21 = _closure1_slot1;
            var48 = _closure1_slot2;
            var14 = 57;
            var14 = var48[var14];
            var21 = var21.bind(var4)(var14);
            var14 = {};
            var14['frame'] = var24;
            var42 = _closure1_slot20;
            var42 = var42.YOU_SCREEN;
            var14['profileThemeType'] = var42;
            var44 = _closure1_slot0;
            var42 = 58;
            var42 = var48[var42];
            var42 = var44.bind(var4)(var42);
            var42 = var42.ProfileFrameLayerOrder;
            var42 = var42.BACK;
            var14['frameOrder'] = var42;
            var14['containerWidth'] = var23;
            var20 = var22.bind(var4)(var21, var14);
case 76:
            var14 = new Array(7);
            var14[0] = var20;
            var42 = _closure1_slot21;
            var22 = _closure1_slot1;
            var20 = _closure1_slot2;
            var21 = 59;
            var21 = var20[var21];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            var21['gradientHeight'] = var49;
            var21['bannerHeight'] = var43;
            var43 = var37.background;
            var21['style'] = var43;
            var21 = var42.bind(var4)(var22, var21);
            var14[1] = var21;
            var21 = _closure1_slot0;
            var20 = var20[var18];
            var21 = var21.bind(var4)(var20);
            var20 = var21.isYouNavFloating;
            var20 = var20.bind(var21)();
            var20 = !var20;
            if(!var20) { _fun0003_ip = 78; continue _fun0003 }
case 79:
            var20 = var16;
case 78:
            var14[2] = var20;
            var22 = _closure1_slot22;
            var21 = _closure1_slot26;
            var20 = {};
            var20['contentContainerStyle'] = var29;
            var20['ref'] = var39;
            var20['onScroll'] = var28;
            var20['onLayout'] = var25;
            var25 = _closure1_slot16;
            var20['scrollEventThrottle'] = var25;
            var25 = var37.scrollView;
            var20['style'] = var25;
            var29 = _closure1_slot22;
            var28 = _closure1_slot1;
            var25 = _closure1_slot2;
            var25 = var25[var27];
            var25 = var28.bind(var4)(var25);
            var28 = var25.View;
            var25 = {};
            var43 = var37.banner;
            var42 = new Array(2);
            var42[0] = var43;
            var42[1] = var45;
            var25['style'] = var42;
            var43 = null;
            if(var26) { _fun0003_ip = 80; continue _fun0003 }
case 81:
            var48 = _closure1_slot21;
            var44 = _closure1_slot29;
            var42 = {};
            var42['paddingTop'] = var47;
            var43 = var48.bind(var4)(var44, var42);
case 80:
            var42 = new Array(3);
            var42[0] = var43;
            var43 = !var26;
            if(var26) { _fun0003_ip = 82; continue _fun0003 }
case 83:
            var48 = _closure1_slot0;
            var44 = _closure1_slot2;
            var44 = var44[var18];
            var48 = var48.bind(var4)(var44);
            var44 = var48.isYouNavFloating;
            var44 = var44.bind(var48)();
            var43 = !var44;
case 82:
            if(!var43) { _fun0003_ip = 84; continue _fun0003 }
case 85:
            var43 = var19;
case 84:
            var42[1] = var43;
            var48 = _closure1_slot22;
            var44 = _closure1_slot1;
            var66 = _closure1_slot2;
            var43 = var66[var27];
            var43 = var44.bind(var4)(var43);
            var44 = var43.View;
            var43 = {};
            var50 = new Array(2);
            var50[0] = var65;
            var50[1] = var51;
            var43['style'] = var50;
            var54 = _closure1_slot21;
            var51 = _closure1_slot6;
            var50 = {};
            var56 = _closure1_slot5;
            var57 = var56.absoluteFill;
            var56 = new Array(2);
            var56[0] = var57;
            var57 = {};
            var61 = _closure1_slot0;
            var60 = 60;
            var60 = var66[var60];
            var61 = var61.bind(var4)(var60);
            var60 = var61.int2hex;
            var60 = var60.bind(var61)(var64);
            var57['backgroundColor'] = var60;
            var56[1] = var57;
            var50['style'] = var56;
            var51 = var54.bind(var4)(var51, var50);
            var50 = new Array(3);
            var50[0] = var51;
            var51 = var17 != var62;
            if(!var51) { _fun0003_ip = 86; continue _fun0003 }
case 87:
            if(var53) { _fun0003_ip = 88; continue _fun0003 }
case 89:
            var56 = _closure1_slot21;
            var54 = _closure1_slot1;
            var57 = _closure1_slot2;
            var53 = 50;
            var53 = var57[var53];
            var54 = var54.bind(var4)(var53);
            var53 = {};
            var53['style'] = var65;
            var57 = 'image';
            var53['accessibilityRole'] = var57;
            var53['accessibilityLabel'] = var63;
            var53['source'] = var62;
            var53['paused'] = var30;
            var53 = var56.bind(var4)(var54, var53);
            _fun0003_ip = 90; continue _fun0003;
case 88:
            var57 = _closure1_slot22;
            var68 = _closure1_slot0;
            var66 = _closure1_slot2;
            var54 = 23;
            var54 = var66[var54];
            var54 = var68.bind(var4)(var54);
            var56 = var54.PressableOpacity;
            var54 = {};
            var58 = function onPress() {
                var3 = _closure2_slot8;
                var1 = _closure2_slot7;
                var2 = !var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var54['onPress'] = var58;
            var64 = 'image';
            var54['accessibilityRole'] = var64;
            var58 = var66[var67];
            var58 = var68.bind(var4)(var58);
            var61 = var58.intl;
            var60 = var61.string;
            var58 = var66[var67];
            var58 = var68.bind(var4)(var58);
            var58 = var58.t;
            var58 = var58["3fzj/l"];
            var58 = var60.bind(var61)(var58);
            var54['accessibilityLabel'] = var58;
            var61 = _closure1_slot21;
            var60 = _closure1_slot1;
            var58 = 50;
            var58 = var66[var58];
            var60 = var60.bind(var4)(var58);
            var58 = {};
            var58['style'] = var65;
            var58['accessibilityRole'] = var64;
            var58['accessibilityLabel'] = var63;
            var58['source'] = var62;
            var58['paused'] = var30;
            var60 = var61.bind(var4)(var60, var58);
            var58 = new Array(2);
            var58[0] = var60;
            var59 = !var59;
            if(!var59) { _fun0003_ip = 91; continue _fun0003 }
case 92:
            var62 = _closure1_slot21;
            var66 = _closure1_slot0;
            var63 = _closure1_slot2;
            var60 = 61;
            var60 = var63[var60];
            var60 = var66.bind(var4)(var60);
            var61 = var60.Caption;
            var60 = {};
            var64 = var63[var67];
            var64 = var66.bind(var4)(var64);
            var65 = var64.intl;
            var64 = var65.string;
            var63 = var63[var67];
            var63 = var66.bind(var4)(var63);
            var63 = var63.t;
            var63 = var63.I5gL2H;
            var63 = var64.bind(var65)(var63);
            var60['label'] = var63;
            var64 = var37.gifTag;
            var63 = new Array(2);
            var63[0] = var64;
            var64 = {};
            var64['top'] = var47;
            var63[1] = var64;
            var60['style'] = var63;
            var63 = var37.gifTagText;
            var60['textStyle'] = var63;
            var59 = var62.bind(var4)(var61, var60);
case 91:
            var58[1] = var59;
            var54['children'] = var58;
            var53 = var57.bind(var4)(var56, var54);
case 90:
            var51 = var53;
case 86:
            var50[1] = var51;
            var53 = _closure1_slot0;
            var54 = _closure1_slot2;
            var51 = 62;
            var51 = var54[var51];
            var53 = var53.bind(var4)(var51);
            var51 = var53.isIOS;
            var51 = var51.bind(var53)();
            if(!var51) { _fun0003_ip = 93; continue _fun0003 }
case 94:
            var51 = var52;
case 93:
            if(!var51) { _fun0003_ip = 95; continue _fun0003 }
case 96:
            var54 = _closure1_slot21;
            var53 = _closure1_slot23;
            var52 = {};
            var52['animatedProps'] = var55;
            var55 = _closure1_slot5;
            var55 = var55.absoluteFillObject;
            var52['style'] = var55;
            var51 = var54.bind(var4)(var53, var52);
case 95:
            var50[2] = var51;
            var43['children'] = var50;
            var43 = var48.bind(var4)(var44, var43);
            var42[2] = var43;
            var25['children'] = var42;
            var28 = var29.bind(var4)(var28, var25);
            var25 = new Array(4);
            var25[0] = var28;
            if(!var26) { _fun0003_ip = 97; continue _fun0003 }
case 98:
            var29 = _closure1_slot22;
            var44 = _closure1_slot1;
            var43 = _closure1_slot2;
            var27 = var43[var27];
            var27 = var44.bind(var4)(var27);
            var28 = var27.View;
            var27 = {};
            var42 = 'box-none';
            var27['pointerEvents'] = var42;
            var48 = var37.profileEffectLayer;
            var42 = new Array(3);
            var42[0] = var48;
            var48 = {};
            var48['width'] = var23;
            var48['height'] = var49;
            var42[1] = var48;
            var42[2] = var45;
            var27['style'] = var42;
            var45 = _closure1_slot21;
            var42 = 63;
            var42 = var43[var42];
            var44 = var44.bind(var4)(var42);
            var42 = {'skuId': null, 'bannerAdjustment': 0, 'replayOnNavigationFocus': true};
            var42['skuId'] = var46;
            var42['paused'] = var30;
            var44 = var45.bind(var4)(var44, var42);
            var42 = new Array(3);
            var42[0] = var44;
            var46 = _closure1_slot21;
            var45 = _closure1_slot29;
            var44 = {};
            var44['paddingTop'] = var47;
            var44 = var46.bind(var4)(var45, var44);
            var42[1] = var44;
            var44 = _closure1_slot0;
            var43 = var43[var18];
            var44 = var44.bind(var4)(var43);
            var43 = var44.isYouNavFloating;
            var43 = var43.bind(var44)();
            var43 = !var43;
            if(!var43) { _fun0003_ip = 99; continue _fun0003 }
case 100:
            var43 = var19;
case 99:
            var42[2] = var43;
            var27['children'] = var42;
            var26 = var29.bind(var4)(var28, var27);
case 97:
            var25[1] = var26;
            var28 = _closure1_slot21;
            var27 = _closure1_slot1;
            var29 = _closure1_slot2;
            var26 = 64;
            var26 = var29[var26];
            var27 = var27.bind(var4)(var26);
            var26 = {};
            var26['user'] = var41;
            var26['userTheme'] = var40;
            var26['scrollViewRef'] = var39;
            var39 = var37.content;
            var37 = new Array(2);
            var37[0] = var39;
            var37[1] = var38;
            var26['style'] = var37;
            var26['navigateToProfileCustomization'] = var36;
            var26['navigateToCustomStatus'] = var35;
            var26['navigateToFriends'] = var34;
            var26['navigateToPremium'] = var33;
            var26['navigateToShop'] = var32;
            var26['initialTab'] = var31;
            var30 = !var30;
            var26['animateAvatar'] = var30;
            var26 = var28.bind(var4)(var27, var26);
            var25[2] = var26;
            var28 = _closure1_slot21;
            var27 = _closure1_slot0;
            var26 = 65;
            var26 = var29[var26];
            var26 = var27.bind(var4)(var26);
            var27 = var26.TTIFirstContentfulPaint;
            var26 = {};
            var29 = 'you_screen';
            var26['label'] = var29;
            var26 = var28.bind(var4)(var27, var26);
            var25[3] = var26;
            var20['children'] = var25;
            var20 = var22.bind(var4)(var21, var20);
            var14[3] = var20;
            var17 = var17 != var24;
            if(!var17) { _fun0003_ip = 101; continue _fun0003 }
case 102:
            var22 = _closure1_slot21;
            var21 = _closure1_slot1;
            var26 = _closure1_slot2;
            var20 = 57;
            var20 = var26[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var20['frame'] = var24;
            var24 = _closure1_slot20;
            var24 = var24.YOU_SCREEN;
            var20['profileThemeType'] = var24;
            var25 = _closure1_slot0;
            var24 = 58;
            var24 = var26[var24];
            var24 = var25.bind(var4)(var24);
            var24 = var24.ProfileFrameLayerOrder;
            var24 = var24.FRONT;
            var20['frameOrder'] = var24;
            var20['containerWidth'] = var23;
            var17 = var22.bind(var4)(var21, var20);
case 101:
            var14[4] = var17;
            var20 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var18];
            var20 = var20.bind(var4)(var17);
            var17 = var20.isYouNavFloating;
            var17 = var17.bind(var20)();
            if(!var17) { _fun0003_ip = 103; continue _fun0003 }
case 104:
            var17 = var19;
case 103:
            var14[5] = var17;
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var18];
            var17 = var17.bind(var4)(var15);
            var15 = var17.isYouNavFloating;
            var15 = var15.bind(var17)();
            if(!var15) { _fun0003_ip = 105; continue _fun0003 }
case 106:
            var15 = var16;
case 105:
            var14[6] = var15;
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
    var _closure1_slot30 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.StyleSheet;
    var _closure1_slot5 = var8;
    var8 = var4.ScrollView;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useYouBarIOSModalPresentation;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.YOU_ACTION_SHEET_TOP_INSET;
    var _closure1_slot13 = var9;
    var9 = var4.YOU_AVATAR_SIZE;
    var _closure1_slot14 = var9;
    var9 = var4.YOU_SCREEN_ID;
    var _closure1_slot15 = var9;
    var4 = var4.YOU_SCROLL_EVENT_THROTTLE;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserSettingsSections;
    var _closure1_slot17 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot18 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot19 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserProfileThemeTypes;
    var _closure1_slot20 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot21 = var9;
    var4 = var4.jsxs;
    var _closure1_slot22 = var4;
    var4 = 15;
    var9 = var6[var4];
    var11 = var7.bind(var1)(var9);
    var10 = var11.createAnimatedComponent;
    var9 = 16;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var9 = var10.bind(var11)(var9);
    var _closure1_slot23 = var9;
    var9 = 17;
    var10 = var6[var9];
    var12 = var5.bind(var1)(var10);
    var11 = var12.createStyles;
    var10 = function(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var4 = {};
            var6 = undefined;
            var1 = undefined;
            if(!var2) { _fun0009_ip = 107; continue _fun0009 }
case 52:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 18;
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var5 = var5.radii;
            var1 = var5.xl;
case 107:
            var4['borderTopLeftRadius'] = var1;
            var1 = undefined;
            if(!var2) { _fun0009_ip = 108; continue _fun0009 }
case 109:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 18;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.radii;
            var1 = var2.xl;
case 108:
            var4['borderTopRightRadius'] = var1;
            var1 = {};
            var2 = {'flex': 1, 'flexGrow': 1, 'position': 'relative'};
            var5 = 1;
            var12 = var2;
            var11 = var4;
            var7 = copyDataProperties(var12, var11);
            var1['container'] = var2;
            var2 = {};
            var7 = 'hidden';
            var2['overflow'] = var7;
            var12 = var2;
            var11 = var4;
            var7 = copyDataProperties(var12, var11);
            var1['background'] = var2;
            var2 = {};
            var2['flex'] = var5;
            var12 = var2;
            var11 = var4;
            var4 = copyDataProperties(var12, var11);
            var1['scrollView'] = var2;
            var2 = {'position': 'absolute', 'top': 0, 'zIndex': 1};
            var1['profileEffectLayer'] = var2;
            var2 = {'minHeight': null, 'position': 'absolute', 'top': 0, 'maxWidth': '100%'};
            var2['minHeight'] = var3;
            var1['banner'] = var2;
            var2 = {'position': 'absolute', 'left': 16, 'right': 'auto', 'bottom': 'auto', 'marginTop': 8};
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 19;
            var4 = var7[var4];
            var9 = var5.bind(var6)(var4);
            var4 = 18;
            var8 = var7[var4];
            var8 = var5.bind(var6)(var8);
            var8 = var8.unsafe_rawColors;
            var8 = var8.WHITE;
            var10 = var9.bind(var6)(var8);
            var9 = var10.alpha;
            var8 = 0.9;
            var9 = var9.bind(var10)(var8);
            var8 = var9.css;
            var8 = var8.bind(var9)();
            var2['backgroundColor'] = var8;
            var1['gifTag'] = var2;
            var2 = {};
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.unsafe_rawColors;
            var4 = var4.PRIMARY_800;
            var2['color'] = var4;
            var4 = 14;
            var2['fontSize'] = var4;
            var1['gifTagText'] = var2;
            var2 = {'marginTop': null, 'flex': 1, 'flexGrow': 1};
            var2['marginTop'] = var3;
            var1['content'] = var2;
            return var1;
        }
    };
    var10 = var11.bind(var12)(var10);
    var _closure1_slot24 = var10;
    var9 = var6[var9];
    var11 = var5.bind(var1)(var9);
    var10 = var11.createStyles;
    var9 = function() {
        var1 = {};
        var2 = {'position': 'absolute', 'marginTop': null, 'left': null, 'zIndex': 99, 'alignItems': 'center', 'justifyContent': 'center'};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 18;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.space;
        var7 = var7.PX_4;
        var2['marginTop'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.space;
        var3 = var3.PX_16;
        var2['left'] = var3;
        var1['backButton'] = var2;
        return var1;
    };
    var9 = var10.bind(var11)(var9);
    var _closure1_slot25 = var9;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var4 = var7.createAnimatedComponent;
    var4 = var4.bind(var7)(var8);
    var _closure1_slot26 = var4;
    var4 = {};
    var7 = 'function YouScreenTsx1(e){const{scrollPosition}=this.__closure;scrollPosition.set(e.contentOffset.y);}';
    var4['code'] = var7;
    var _closure1_slot27 = var4;
    var4 = 72;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/you/YouScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function YouScreen(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var6 = var1.initialTab;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 21;
            var7 = var1[var3];
            var10 = var4.bind(var5)(var7);
            var9 = var10.useStateFromStores;
            var7 = _closure1_slot11;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var9.bind(var10)(var8, var7);
            var _closure2_slot0 = var13;
            var1 = var1[var3];
            var8 = var4.bind(var5)(var1);
            var7 = var8.useStateFromStores;
            var1 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var1 = _closure1_slot8;
                var1 = var1.locale;
                return var1;
            };
            var4 = var7.bind(var8)(var4, var1);
            var1 = null;
            var7 = var1 == var13;
            var9 = undefined;
            if(var7) { _fun0010_ip = 6; continue _fun0010 }
case 110:
            var9 = var13.id;
case 6:
            _closure2_slot1 = var9;
            var11 = _closure1_slot4;
            var10 = var11.useMemo;
            var8 = new Array(1);
            var8[0] = var13;
            var7 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var5 = null;
                    var3 = var5 == var1;
                    var1 = undefined;
                    if(var3) { _fun0011_ip = 3; continue _fun0011 }
case 43:
                    var4 = _closure2_slot0;
                    var3 = var4.getAvatarURL;
                    var2 = _closure1_slot14;
                    var1 = var3.bind(var4)(var5, var2);
case 3:
                    return var1;
                }
            };
            var11 = var10.bind(var11)(var7, var8);
            _closure2_slot2 = var11;
            var10 = _closure1_slot4;
            var8 = var10.useLayoutEffect;
            var7 = new Array(3);
            var7[0] = var9;
            var7[1] = var11;
            var7[2] = var4;
            var4 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0012_ip = 111; continue _fun0012 }
case 65:
                    var3 = _closure2_slot2;
                    var2 = var4 != var3;
case 111:
                    if(!var2) { _fun0012_ip = 31; continue _fun0012 }
case 112:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 66;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var1 = {};
                    var6 = 'you_screen';
                    var1['type'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var8.bind(var10)(var4, var7);
            var4 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = var14[var3];
            var10 = var4.bind(var5)(var3);
            var8 = var10.useStateFromStores;
            var3 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 == var3;
                    if(var3) { _fun0013_ip = 113; continue _fun0013 }
case 65:
                    var4 = _closure1_slot7;
                    var3 = var4.getFirstWishlistId;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 113:
                    return var1;
                }
            };
            var10 = var8.bind(var10)(var7, var3);
            var3 = 67;
            var3 = var14[var3];
            var8 = var4.bind(var5)(var3);
            var7 = var8.useFetchWishlist;
            var3 = {};
            var3['wishlistId'] = var10;
            var3['userId'] = var9;
            var3 = var7.bind(var8)(var3);
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var7 = function() {
                var4 = _closure1_slot9;
                var3 = var4.setState;
                var2 = {'query': '', 'isActive': false};
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 68;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.openUserSettings;
                var2 = var2.bind(var3)();
                return var1;
            };
            var3 = new Array(0);
            var12 = var8.bind(var9)(var7, var3);
            _closure2_slot3 = var12;
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var7 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 68;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openUserSettings;
                var2 = {};
                var5 = _closure1_slot17;
                var5 = var5.PREMIUM;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = new Array(0);
            var11 = var8.bind(var9)(var7, var3);
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var7 = function() {
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 69;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openCollectiblesShopMobile;
                var2 = {};
                var7 = _closure1_slot1;
                var6 = 46;
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
                var5 = _closure1_slot18;
                var5 = var5.FEATURED_PAGE;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = new Array(0);
            var7 = var8.bind(var9)(var7, var3);
            var10 = _closure1_slot4;
            var9 = var10.useCallback;
            var8 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 68;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openUserSettings;
                var2 = {};
                var5 = _closure1_slot17;
                var5 = var5.PROFILE_CUSTOMIZATION;
                var2['screen'] = var5;
                var5 = {};
                var6 = arg1;
                var5['autoFocusElement'] = var6;
                var2['params'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = new Array(0);
            var10 = var9.bind(var10)(var8, var3);
            var15 = _closure1_slot4;
            var9 = var15.useCallback;
            var8 = function() {
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 70;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openEditCustomStatusModal;
                var2 = {};
                var6 = _closure1_slot1;
                var5 = 46;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var6 = var5.YOU_SCREEN;
                var5 = new Array(1);
                var5[0] = var6;
                var2['analyticsLocations'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = new Array(0);
            var9 = var9.bind(var15)(var8, var3);
            var16 = _closure1_slot4;
            var15 = var16.useCallback;
            var8 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 20;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var4 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var4)) { _fun0014_ip = 4; continue _fun0014 }
case 3:
                    var2 = var4.isReady;
                    var2 = var2.bind(var4)();
                    if(!var2) { _fun0014_ip = 4; continue _fun0014 }
case 5:
                    var3 = var4.navigate;
                    var2 = 'friends';
                    var2 = var3.bind(var4)(var2);
                    return var1;
case 4:
                    var1 = false;
                    return var1;
                }
            };
            var3 = new Array(0);
            var8 = var15.bind(var16)(var8, var3);
            var18 = _closure1_slot4;
            var16 = var18.useLayoutEffect;
            var15 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 71;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.trackAppUIViewed;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = new Array(0);
            var3 = var16.bind(var18)(var15, var3);
            var3 = 36;
            var3 = var14[var3];
            var14 = var4.bind(var5)(var3);
            var4 = var14.useScrollToTop;
            var16 = _closure1_slot4;
            var15 = var16.useRef;
            var3 = {};
            var17 = function scrollToTop() {
                var2 = _closure2_slot3;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var3['scrollToTop'] = var17;
            var3 = var15.bind(var16)(var3);
            var3 = var4.bind(var14)(var3);
            var3 = var1 == var13;
            var1 = null;
            if(var3) { _fun0010_ip = 114; continue _fun0010 }
case 115:
            var4 = _closure1_slot21;
            var3 = _closure1_slot30;
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
case 114:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();