// app/modules/user_profile/native/YouScreenUserProfileContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function YouAvatar(arg1) {
        var5 = _closure1_slot4;
        var4 = var5.useCallback;
        var3 = function() {
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 8;
            var2 = var4[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var2 = var5.trackYouTabAvatarPress;
            var2 = var2.bind(var5)();
            var2 = 9;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.showYouAccountActionSheet;
            var2 = var2.bind(var3)();
            return var1;
        };
        var2 = new Array(0);
        var6 = var4.bind(var5)(var3, var2);
        var4 = _closure1_slot11;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 10;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var7 = arg1;
        var8 = var1;
        var5 = copyDataProperties(var8, var7);
        var5 = 'onPress';
        var1[var5] = var6;
        var6 = false;
        var5 = 'accessible';
        var1[var5] = var6;
        var6 = 'no';
        var5 = 'importantForAccessibility';
        var1[var5] = var6;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function EditSection(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var9 = var2.navigateToProfileCustomization;
            var _closure2_slot0 = var9;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 11;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var13 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var2 = 12;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var2 = var6.useUserProfileAnalyticsContext;
            var2 = var2.bind(var6)();
            var8 = var2.trackUserProfileAction;
            var _closure2_slot1 = var8;
            var10 = _closure1_slot4;
            var6 = var10.useRef;
            var2 = null;
            var12 = var6.bind(var10)(var2);
            var2 = 13;
            var2 = var5[var2];
            var10 = var3.bind(var4)(var2);
            var6 = var10.useIsDisplayNameStylesMobileEnabled;
            var2 = {};
            var11 = 'YouScreenUserProfileContent';
            var2['location'] = var11;
            var6 = var6.bind(var10)(var2);
            var2 = 14;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useSelectedDismissibleContent;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = new Array(0);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 15;
            var10 = var14[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.DismissibleContent;
            var11 = var10.DISPLAY_NAME_STYLES_MOBILE_PROFILE_TOOLTIP;
            var10 = new Array(1);
            var10[0] = var11;
            var2 = var10;
case 4:
            var5 = var3.bind(var5)(var2);
            var3 = _closure1_slot3;
            var2 = 2;
            var5 = var3.bind(var4)(var5, var2);
            var2 = 0;
            var3 = var5[var2];
            var2 = 1;
            var10 = var5[var2];
            _closure2_slot2 = var10;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var2 = 15;
            var2 = var21[var2];
            var2 = var20.bind(var4)(var2);
            var2 = var2.DismissibleContent;
            var2 = var2.DISPLAY_NAME_STYLES_MOBILE_PROFILE_TOOLTIP;
            var11 = var3 === var2;
            _closure2_slot3 = var11;
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(4);
            var2[0] = var9;
            var2[1] = var8;
            var2[2] = var11;
            var2[3] = var10;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var2 = {};
                    var1 = 'EDIT_PROFILE';
                    var2['action'] = var1;
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 8;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.trackYouTabEditProfilePress;
                    var4 = var4.bind(var5)();
                    var4 = _closure2_slot0;
                    var4 = var4.bind(var1)();
                    var4 = _closure2_slot3;
                    if(!var4) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var3 = _closure2_slot2;
                    var2 = _closure1_slot10;
                    var2 = var2.TAKE_ACTION;
                    var2 = var3.bind(var1)(var2);
case 5:
                    return var1;
                }
            };
            var16 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot13;
            var2 = _closure1_slot12;
            var1 = {};
            var9 = _closure1_slot11;
            var23 = _closure1_slot1;
            var5 = 16;
            var5 = var21[var5];
            var8 = var23.bind(var4)(var5);
            var5 = {};
            var13 = var13.primaryButtons;
            var5['style'] = var13;
            var15 = _closure1_slot11;
            var13 = 17;
            var13 = var21[var13];
            var13 = var20.bind(var4)(var13);
            var14 = var13.Button;
            var13 = {};
            var13['ref'] = var12;
            var17 = 'primary';
            var13['variant'] = var17;
            var19 = _closure1_slot11;
            var17 = 18;
            var17 = var21[var17];
            var17 = var20.bind(var4)(var17);
            var18 = var17.PencilIcon;
            var17 = {};
            var22 = 'sm';
            var17['size'] = var22;
            var22 = 19;
            var22 = var21[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.colors;
            var22 = var22.WHITE;
            var17['color'] = var22;
            var17 = var19.bind(var4)(var18, var17);
            var13['icon'] = var17;
            var17 = 20;
            var18 = var21[var17];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var21[var17];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.AAjhgi;
            var17 = var18.bind(var19)(var17);
            var13['text'] = var17;
            var13['onPress'] = var16;
            var16 = true;
            var13['grow'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var5['secondaryButton'] = var13;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var9 = _closure1_slot11;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var7 = 21;
            var7 = var13[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['targetRef'] = var12;
            var7['visible'] = var11;
            var7['markAsDismissed'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 7:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var8 = var4.ScrollView;
    var _closure1_slot5 = var8;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserProfileSections;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserProfileThemeTypes;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var7 = var4.Fragment;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 53;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/YouScreenUserProfileContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function YouScreenUserProfileContent(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var32 = var2.user;
            var _closure2_slot0 = var32;
            var5 = var2.style;
            var28 = var2.navigateToProfileCustomization;
            var7 = var2.navigateToFriends;
            var _closure2_slot1 = var7;
            var43 = var2.navigateToPremium;
            var _closure2_slot2 = var43;
            var40 = var2.navigateToShop;
            var _closure2_slot3 = var40;
            var39 = var2.initialTab;
            var _closure2_slot4 = var39;
            var4 = undefined;
            var _closure2_slot21 = var4;
            var _closure2_slot22 = var4;
            var _closure2_slot23 = var4;
            var _closure2_slot24 = var4;
            var _closure2_slot25 = var4;
            var _closure2_slot26 = var4;
            var11 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 11;
            var2 = var8[var2];
            var2 = var11.bind(var4)(var2);
            var18 = var2.bind(var4)();
            var _closure2_slot5 = var18;
            var6 = _closure1_slot0;
            var2 = 22;
            var3 = var8[var2];
            var9 = var6.bind(var4)(var3);
            var3 = var9.useNavigation;
            var10 = var3.bind(var9)();
            var _closure2_slot6 = var10;
            var3 = 12;
            var3 = var8[var3];
            var9 = var6.bind(var4)(var3);
            var3 = var9.useUserProfileAnalyticsContext;
            var3 = var3.bind(var9)();
            var3 = var3.trackUserProfileAction;
            var _closure2_slot7 = var3;
            var9 = 23;
            var9 = var8[var9];
            var12 = var11.bind(var4)(var9);
            var9 = var32.id;
            var33 = var12.bind(var4)(var9);
            var _closure2_slot8 = var33;
            var9 = 24;
            var9 = var8[var9];
            var12 = var6.bind(var4)(var9);
            var9 = var12.useCustomStatusActivity;
            var36 = var9.bind(var12)();
            var _closure2_slot9 = var36;
            var9 = 25;
            var9 = var8[var9];
            var9 = var11.bind(var4)(var9);
            var31 = var9.bind(var4)(var33);
            var9 = 26;
            var9 = var8[var9];
            var9 = var6.bind(var4)(var9);
            var12 = var9.StatusSetting;
            var9 = var12.useSetting;
            var34 = var9.bind(var12)();
            var9 = 27;
            var9 = var8[var9];
            var11 = var11.bind(var4)(var9);
            var9 = {};
            var9['user'] = var32;
            var9['displayProfile'] = var33;
            var9 = var11.bind(var4)(var9);
            var13 = var9.theme;
            var15 = var9.primaryColor;
            var14 = var9.secondaryColor;
            var20 = null;
            var27 = var20 != var15;
            var _closure2_slot10 = var27;
            var9 = 28;
            var9 = var8[var9];
            var12 = var6.bind(var4)(var9);
            var11 = var12.useUserProfileColors;
            var9 = {};
            var9['theme'] = var13;
            var9['primaryColor'] = var15;
            var9['secondaryColor'] = var14;
            var9 = var11.bind(var12)(var9);
            var11 = var9.gradientFallbackBackground;
            var30 = var9.containerBackground;
            var _closure2_slot11 = var30;
            var17 = var9.avatarBackground;
            var38 = var9.statusBackground;
            var12 = _closure1_slot4;
            var9 = var12.useRef;
            var37 = var9.bind(var12)(var20);
            var13 = _closure1_slot4;
            var12 = var13.useCallback;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                var3 = _closure2_slot7;
                var2 = {};
                var1 = 'PRESS_SET_STATUS';
                var2['action'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 9;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.showYouAccountActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var29 = var12.bind(var13)(var3, var9);
            var3 = 29;
            var3 = var8[var3];
            var12 = var6.bind(var4)(var3);
            var9 = var12.useIsEligibleForCustomStatusLabelsExperiment;
            var3 = {};
            var16 = 'YouScreenUserProfileContent';
            var3['location'] = var16;
            var9 = var9.bind(var12)(var3);
            var _closure2_slot12 = var9;
            var3 = 30;
            var3 = var8[var3];
            var13 = var6.bind(var4)(var3);
            var12 = var13.useVirtualCurrencyMobileEnabled;
            var3 = {};
            var3['location'] = var16;
            var3 = var12.bind(var13)(var3);
            var35 = var3.enabled;
            var _closure2_slot13 = var35;
            var12 = _closure1_slot4;
            var3 = var12.useState;
            var13 = var3.bind(var12)(var20);
            var3 = _closure1_slot3;
            var12 = 2;
            var3 = var3.bind(var4)(var13, var12);
            var41 = 0;
            var24 = var3[var41];
            var21 = 1;
            var3 = var3[var21];
            var _closure2_slot14 = var3;
            var3 = 31;
            var3 = var8[var3];
            var13 = var6.bind(var4)(var3);
            var3 = var13.useShouldShowExpiringTrialOfferCard;
            var42 = var3.bind(var13)();
            var _closure2_slot15 = var42;
            var3 = 32;
            var3 = var8[var3];
            var13 = var6.bind(var4)(var3);
            var3 = var13.useMobileWishlistOwnerExperiment;
            var3 = var3.bind(var13)(var16);
            var13 = var3.enabled;
            var _closure2_slot16 = var13;
            var3 = 33;
            var3 = var8[var3];
            var16 = var6.bind(var4)(var3);
            var8 = var16.useStateFromStores;
            var3 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot16;
                    var1 = null;
                    if(!var3) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var4 = _closure1_slot7;
                    var3 = var4.getFirstWishlistId;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 9:
                    return var1;
                }
            };
            var6 = var8.bind(var16)(var6, var3);
            var _closure2_slot17 = var6;
            var8 = _closure1_slot4;
            var3 = var8.useState;
            var8 = var3.bind(var8)(var41);
            var3 = _closure1_slot3;
            var3 = var3.bind(var4)(var8, var12);
            var22 = var3[var41];
            var3 = var3[var21];
            var _closure2_slot18 = var3;
            var23 = _closure1_slot4;
            var16 = var23.useCallback;
            var8 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.width;
                var2 = _closure2_slot18;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var3 = new Array(0);
            var16 = var16.bind(var23)(var8, var3);
            var23 = _closure1_slot4;
            var8 = var23.useRef;
            var3 = new Array(0);
            var3 = var8.bind(var23)(var3);
            var _closure2_slot19 = var3;
            var8 = _closure1_slot4;
            var3 = var8.useState;
            var8 = var3.bind(var8)(var4);
            var3 = _closure1_slot3;
            var3 = var3.bind(var4)(var8, var12);
            var23 = var3[var41];
            var3 = var3[var21];
            var _closure2_slot20 = var3;
            var12 = _closure1_slot4;
            var8 = var12.useRef;
            var3 = _closure1_slot8;
            var25 = var3.WISHLIST;
            var3 = 0;
            if(!(var39 === var25)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var3 = var21;
case 11:
            var3 = var8.bind(var12)(var3);
            _closure2_slot21 = var3;
            var25 = _closure1_slot4;
            var12 = var25.useCallback;
            var8 = function(arg1, arg2, arg3) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var5 = arg1;
                    var3 = arg3;
                    var1 = 0;
                    if(!(!(var3 <= var1))) { _fun0005_ip = 13; continue _fun0005 }
case 10:
                    var2 = _closure2_slot19;
                    var4 = var2.current;
                    var4 = var4[var5];
                    var2 = var2.current;
                    var2[var5] = var3;
                    var2 = _closure2_slot21;
                    var2 = var2.current;
                    var2 = var5 === var2;
                    if(!var2) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                    var2 = var3 !== var4;
case 14:
                    if(!var2) { _fun0005_ip = 13; continue _fun0005 }
case 16:
                    var2 = _closure2_slot20;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 13:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = new Array(0);
            var3 = var12.bind(var25)(var8, var3);
            _closure2_slot22 = var3;
            var26 = _closure1_slot4;
            var25 = var26.useCallback;
            var12 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot21;
                    var2['current'] = var3;
                    var2 = _closure2_slot19;
                    var2 = var2.current;
                    var3 = var2[var3];
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 17; continue _fun0006 }
case 18:
                    var2 = _closure2_slot20;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = new Array(0);
            var8 = var25.bind(var26)(var12, var8);
            var25 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var2];
            var25 = var25.bind(var4)(var12);
            var12 = var25.useFocusEffect;
            var45 = _closure1_slot4;
            var44 = var45.useCallback;
            var26 = new Array(2);
            var26[0] = var36;
            var26[1] = var9;
            var9 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot14;
                    var2 = _closure2_slot9;
                    var4 = null;
                    var5 = var4 == var2;
                    var2 = null;
                    if(!var5) { _fun0007_ip = 16; continue _fun0007 }
case 19:
                    var1 = _closure2_slot12;
                    var2 = null;
                    if(!var1) { _fun0007_ip = 16; continue _fun0007 }
case 20:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 34;
                    var1 = var4[var1];
                    var4 = undefined;
                    var1 = var5.bind(var4)(var1);
                    var2 = var1.bind(var4)();
case 16:
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var9 = var44.bind(var45)(var9, var26);
            var9 = var12.bind(var25)(var9);
            var9 = var20 != var24;
            var26 = undefined;
            if(!var9) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var9 = var24.label;
            var26 = var9.bind(var24)();
case 21:
            var25 = _closure1_slot4;
            var12 = var25.useCallback;
            var9 = new Array(10);
            var9[0] = var30;
            var9[1] = var18;
            var9[2] = var43;
            var9[3] = var42;
            var9[4] = var40;
            var9[5] = var27;
            var9[6] = var35;
            var9[7] = var32;
            var9[8] = var33;
            var9[9] = var7;
            var7 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var5 = _closure2_slot5;
                    var1 = var5.card;
                    var9 = new Array(2);
                    var9[0] = var1;
                    var1 = {};
                    var2 = _closure2_slot11;
                    var1['backgroundColor'] = var2;
                    var9[1] = var1;
                    var4 = _closure1_slot13;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var7 = var5.cards;
                    var1 = new Array(2);
                    var1[0] = var7;
                    var5 = var5.profileContent;
                    var1[1] = var5;
                    var2['style'] = var1;
                    var8 = _closure1_slot11;
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 35;
                    var5 = var5[var1];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var5);
                    var5 = {};
                    var10 = _closure2_slot2;
                    var5['navigateToPremium'] = var10;
                    var5['style'] = var9;
                    var7 = var8.bind(var1)(var7, var5);
                    var5 = new Array(9);
                    var5[0] = var7;
                    var7 = _closure2_slot15;
                    var7 = !var7;
                    if(!var7) { _fun0008_ip = 23; continue _fun0008 }
case 24:
                    var11 = _closure1_slot11;
                    var10 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var8 = 36;
                    var8 = var12[var8];
                    var10 = var10.bind(var1)(var8);
                    var8 = {};
                    var12 = _closure2_slot2;
                    var8['navigateToPremium'] = var12;
                    var12 = _closure2_slot3;
                    var8['navigateToShop'] = var12;
                    var12 = _closure2_slot10;
                    var8['hasCustomProfileTheme'] = var12;
                    var7 = var11.bind(var1)(var10, var8);
case 23:
                    var5[1] = var7;
                    var7 = _closure2_slot13;
                    if(!var7) { _fun0008_ip = 25; continue _fun0008 }
case 26:
                    var11 = _closure1_slot11;
                    var10 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var8 = 37;
                    var8 = var12[var8];
                    var10 = var10.bind(var1)(var8);
                    var8 = {};
                    var8['style'] = var9;
                    var7 = var11.bind(var1)(var10, var8);
case 25:
                    var5[2] = var7;
                    var13 = _closure1_slot11;
                    var7 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var8 = 38;
                    var8 = var11[var8];
                    var12 = var7.bind(var1)(var8);
                    var8 = {};
                    var10 = _closure2_slot0;
                    var8['user'] = var10;
                    var8['currentUser'] = var10;
                    var8['style'] = var9;
                    var8 = var13.bind(var1)(var12, var8);
                    var5[3] = var8;
                    var13 = _closure1_slot11;
                    var8 = 39;
                    var8 = var11[var8];
                    var12 = var7.bind(var1)(var8);
                    var8 = {};
                    var15 = var10.id;
                    var8['userId'] = var15;
                    var15 = _closure2_slot8;
                    var8['displayProfile'] = var15;
                    var8['style'] = var9;
                    var8 = var13.bind(var1)(var12, var8);
                    var5[4] = var8;
                    var16 = _closure1_slot11;
                    var12 = _closure1_slot0;
                    var8 = 40;
                    var13 = var11[var8];
                    var13 = var12.bind(var1)(var13);
                    var15 = var13.UserProfileAccountConnectionsCard;
                    var13 = {};
                    var17 = var10.id;
                    var13['userId'] = var17;
                    var13['style'] = var9;
                    var13 = var16.bind(var1)(var15, var13);
                    var5[5] = var13;
                    var13 = _closure1_slot11;
                    var8 = var11[var8];
                    var8 = var12.bind(var1)(var8);
                    var12 = var8.UserProfileApplicationRoleConnectionsCard;
                    var8 = {};
                    var15 = var10.id;
                    var8['userId'] = var15;
                    var8['style'] = var9;
                    var8 = var13.bind(var1)(var12, var8);
                    var5[6] = var8;
                    var13 = _closure1_slot11;
                    var8 = 41;
                    var8 = var11[var8];
                    var12 = var7.bind(var1)(var8);
                    var8 = {};
                    var15 = var10.id;
                    var8['userId'] = var15;
                    var14 = _closure2_slot1;
                    var8['navigateToFriends'] = var14;
                    var8['style'] = var9;
                    var8 = var13.bind(var1)(var12, var8);
                    var5[7] = var8;
                    var8 = _closure1_slot11;
                    var6 = 42;
                    var6 = var11[var6];
                    var7 = var7.bind(var1)(var6);
                    var6 = {};
                    var10 = var10.id;
                    var6['userId'] = var10;
                    var6['style'] = var9;
                    var6 = var8.bind(var1)(var7, var6);
                    var5[8] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var12 = var12.bind(var25)(var7, var9);
            _closure2_slot23 = var12;
            var25 = _closure1_slot4;
            var9 = var25.useCallback;
            var35 = var18.profileContent;
            var7 = new Array(3);
            var7[0] = var35;
            var7[1] = var6;
            var7[2] = var30;
            var6 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = _closure1_slot11;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var1 = _closure2_slot5;
                    var1 = var1.profileContent;
                    var2['style'] = var1;
                    var6 = _closure2_slot17;
                    var1 = null;
                    if(!(var1 != var6)) { _fun0009_ip = 27; continue _fun0009 }
case 28:
                    var8 = _closure1_slot11;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 43;
                    var1 = var7[var1];
                    var7 = undefined;
                    var6 = var6.bind(var7)(var1);
                    var1 = {};
                    var10 = _closure2_slot17;
                    var1['wishlistId'] = var10;
                    var9 = _closure2_slot11;
                    var1['backgroundColor'] = var9;
                    var1 = var8.bind(var7)(var6, var1);
                    _fun0009_ip = 29; continue _fun0009;
case 27:
                    var8 = _closure1_slot11;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 43;
                    var5 = var7[var5];
                    var7 = undefined;
                    var5 = var6.bind(var7)(var5);
                    var6 = var5.WishlistEmptyState;
                    var5 = {};
                    var1 = var8.bind(var7)(var6, var5);
case 29:
                    var2['children'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var25 = var9.bind(var25)(var6, var7);
            _closure2_slot24 = var25;
            var9 = _closure1_slot4;
            var7 = var9.useMemo;
            var6 = new Array(3);
            var6[0] = var12;
            var6[1] = var25;
            var6[2] = var3;
            var3 = function() {
                var2 = {};
                var1 = 'main';
                var2['id'] = var1;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var4 = 20;
                var1 = var13[var4];
                var6 = undefined;
                var1 = var12.bind(var6)(var1);
                var7 = var1.intl;
                var5 = var7.string;
                var1 = var13[var4];
                var1 = var12.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.LXw470;
                var1 = var5.bind(var7)(var1);
                var2['label'] = var1;
                var10 = _closure1_slot11;
                var5 = _closure1_slot5;
                var1 = {};
                var9 = false;
                var1['scrollEnabled'] = var9;
                var7 = function onContentSizeChange(arg1, arg2) {
                    var5 = _closure2_slot22;
                    var4 = undefined;
                    var3 = 0;
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var1['onContentSizeChange'] = var7;
                var11 = _closure2_slot23;
                var11 = var11.bind(var6)();
                var1['children'] = var11;
                var1 = var10.bind(var6)(var5, var1);
                var2['page'] = var1;
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var10 = 'wishlist';
                var2['id'] = var10;
                var10 = var13[var4];
                var10 = var12.bind(var6)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var4 = var13[var4];
                var4 = var12.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4.7lZ31J;
                var4 = var10.bind(var11)(var4);
                var2['label'] = var4;
                var4 = _closure1_slot11;
                var3 = {};
                var3['scrollEnabled'] = var9;
                var8 = function onContentSizeChange(arg1, arg2) {
                    var5 = _closure2_slot22;
                    var4 = undefined;
                    var3 = 1;
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var3['onContentSizeChange'] = var8;
                var7 = _closure2_slot24;
                var7 = var7.bind(var6)();
                var3['children'] = var7;
                var3 = var4.bind(var6)(var5, var3);
                var2['page'] = var3;
                var1[1] = var2;
                return var1;
            };
            var9 = var7.bind(var9)(var3, var6);
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 44;
            var3 = var7[var3];
            var7 = var6.bind(var4)(var3);
            var6 = var7.useSegmentedControlState;
            var3 = {};
            var3['pageWidth'] = var22;
            var22 = _closure1_slot8;
            var25 = var22.WISHLIST;
            var22 = 0;
            if(!(var39 === var25)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var22 = var21;
case 30:
            var3['defaultIndex'] = var22;
            var25 = _closure1_slot1;
            var35 = _closure1_slot2;
            var22 = 19;
            var22 = var35[var22];
            var22 = var25.bind(var4)(var22);
            var22 = var22.spacing;
            var22 = var22.PX_24;
            var3['itemSpacing'] = var22;
            var3['items'] = var9;
            var3['onPageChange'] = var8;
            var22 = var6.bind(var7)(var3);
            _closure2_slot25 = var22;
            var7 = _closure1_slot4;
            var6 = var7.useRef;
            var3 = var22.setActiveIndex;
            var3 = var6.bind(var7)(var3);
            _closure2_slot26 = var3;
            var8 = _closure1_slot4;
            var7 = var8.useEffect;
            var6 = new Array(1);
            var6[0] = var22;
            var3 = function() {
                var2 = _closure2_slot26;
                var1 = _closure2_slot25;
                var1 = var1.setActiveIndex;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var3 = var7.bind(var8)(var3, var6);
            var6 = _closure1_slot0;
            var2 = var35[var2];
            var3 = var6.bind(var4)(var2);
            var2 = var3.useFocusEffect;
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var7 = new Array(3);
            var7[0] = var39;
            var7[1] = var13;
            var7[2] = var10;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot16;
                    var5 = undefined;
                    if(var3) { _fun0010_ip = 32; continue _fun0010 }
case 33:
                    return var5;
case 32:
                    var3 = _closure2_slot4;
                    if(!(var5 !== var3)) { _fun0010_ip = 34; continue _fun0010 }
case 35:
                    var4 = _closure2_slot4;
                    var2 = _closure1_slot8;
                    var3 = var2.WISHLIST;
                    var2 = 0;
                    if(!(var4 === var3)) { _fun0010_ip = 36; continue _fun0010 }
case 37:
                    var2 = 1;
case 36:
                    var _closure3_slot1 = var2;
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = function() {
                        var6 = _closure2_slot26;
                        var5 = var6.current;
                        var4 = _closure3_slot1;
                        var3 = false;
                        var2 = true;
                        var2 = var5.bind(var6)(var4, var3, var2);
                        var4 = _closure2_slot6;
                        var3 = var4.setParams;
                        var2 = {};
                        var1 = undefined;
                        var2['initialTab'] = var1;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2 = 80;
                    var2 = var4.bind(var5)(var3, var2);
                    var _closure3_slot0 = var2;
case 34:
                    var1 = function() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var3 = _closure3_slot0;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0011_ip = 38; continue _fun0011 }
case 39:
                            var3 = global;
                            var4 = var3.clearTimeout;
                            var3 = _closure3_slot0;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
case 38:
                            var4 = _closure2_slot6;
                            var3 = var4.isFocused;
                            var3 = var3.bind(var4)();
                            if(var3) { _fun0011_ip = 40; continue _fun0011 }
case 41:
                            var4 = _closure2_slot6;
                            var3 = var4.getParent;
                            var4 = var3.bind(var4)();
                            var2 = var2 != var4;
                            if(!var2) { _fun0011_ip = 42; continue _fun0011 }
case 43:
                            var3 = var4.isFocused;
                            var2 = var3.bind(var4)();
case 42:
                            if(!var2) { _fun0011_ip = 40; continue _fun0011 }
case 44:
                            var3 = _closure2_slot6;
                            var2 = var3.setParams;
                            var1 = {};
                            var4 = _closure1_slot8;
                            var4 = var4.MAIN;
                            var1['initialTab'] = var4;
                            var1 = var2.bind(var3)(var1);
case 40:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var1 = var8.bind(var9)(var1, var7);
            var1 = var2.bind(var3)(var1);
            var3 = _closure1_slot11;
            var1 = 45;
            var1 = var35[var1];
            var1 = var25.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var1['style'] = var5;
            var7 = _closure1_slot11;
            var5 = 46;
            var5 = var35[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.LayerScope;
            var5 = {};
            var10 = _closure1_slot13;
            var8 = 47;
            var8 = var35[var8];
            var9 = var25.bind(var4)(var8);
            var8 = {};
            var40 = var18.profileContentWrapper;
            var39 = new Array(2);
            var39[0] = var40;
            var40 = {};
            var40['paddingTop'] = var41;
            var39[1] = var40;
            var8['containerStyle'] = var39;
            var8['primaryColor'] = var15;
            var8['secondaryColor'] = var14;
            var8['fallbackBackground'] = var11;
            var15 = _closure1_slot11;
            var14 = _closure1_slot14;
            var11 = {};
            var11['user'] = var32;
            var11['backgroundColor'] = var17;
            var17 = {};
            var17['backgroundColor'] = var38;
            var11['statusStyle'] = var17;
            var14 = var15.bind(var4)(var14, var11);
            var11 = new Array(4);
            var11[0] = var14;
            var17 = _closure1_slot11;
            var14 = 48;
            var14 = var35[var14];
            var15 = var25.bind(var4)(var14);
            var14 = {};
            var14['ref'] = var37;
            var14['customStatusActivity'] = var36;
            var14['hasCustomProfileTheme'] = var27;
            var27 = var18.customStatusBubble;
            var14['style'] = var27;
            var27 = var18.emojiOnlyCustomStatusBubble;
            var14['emojiOnlyStyle'] = var27;
            var27 = true;
            var14['editEnabled'] = var27;
            var14['placeholderText'] = var26;
            var14['prompt'] = var24;
            var14 = var17.bind(var4)(var15, var14);
            var11[1] = var14;
            var17 = _closure1_slot13;
            var15 = _closure1_slot6;
            var14 = {};
            var26 = var18.primaryInfo;
            var24 = new Array(2);
            var24[0] = var26;
            var26 = var18.profileContent;
            var24[1] = var26;
            var14['style'] = var24;
            var26 = _closure1_slot11;
            var24 = 49;
            var24 = var35[var24];
            var25 = var25.bind(var4)(var24);
            var24 = {};
            var24['user'] = var32;
            var35 = var20 == var33;
            var32 = undefined;
            if(var35) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var32 = var33.pronouns;
case 45:
            var24['pronouns'] = var32;
            var24['badges'] = var31;
            var24['badgeContainerBackground'] = var30;
            var24['onPressDisplayName'] = var29;
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var29 = 20;
            var30 = var33[var29];
            var30 = var32.bind(var4)(var30);
            var35 = var30.intl;
            var31 = var35.string;
            var30 = var33[var29];
            var30 = var32.bind(var4)(var30);
            var30 = var30.t;
            var30 = var30.0DPAZH;
            var35 = var31.bind(var35)(var30);
            var30 = 50;
            var30 = var33[var30];
            var31 = var32.bind(var4)(var30);
            var30 = var31.getStatusLabel;
            var49 = var30.bind(var31)(var34);
            var30 = var33[var29];
            var30 = var32.bind(var4)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var33[var29];
            var29 = var32.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.C6COaT;
            var47 = var30.bind(var31)(var29);
            var29 = global;
            var29 = var29.HermesInternal;
            var32 = var29.concat;
            var52 = '';
            var50 = ': ';
            var48 = '. ';
            var51 = var35;
            var29 = var52[var32](var51, var50, var49, var48, var47, var46);
            var24['displayNameAccessibilityHint'] = var29;
            var29 = _closure1_slot9;
            var29 = var29.YOU_SCREEN;
            var24['themeType'] = var29;
            var24['showChevron'] = var27;
            var25 = var26.bind(var4)(var25, var24);
            var24 = new Array(2);
            var24[0] = var25;
            var27 = _closure1_slot11;
            var26 = _closure1_slot15;
            var25 = {};
            var25['navigateToProfileCustomization'] = var28;
            var25 = var27.bind(var4)(var26, var25);
            var24[1] = var25;
            var14['children'] = var24;
            var14 = var17.bind(var4)(var15, var14);
            var11[2] = var14;
            if(var13) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var12 = var12.bind(var4)();
            _fun0003_ip = 49; continue _fun0003;
case 47:
            var15 = _closure1_slot13;
            var14 = _closure1_slot6;
            var13 = {};
            var17 = {};
            var17['flex'] = var21;
            var13['style'] = var17;
            var13['onLayout'] = var16;
            var17 = _closure1_slot11;
            var16 = {};
            var18 = var18.profileTablist;
            var16['style'] = var18;
            var24 = _closure1_slot11;
            var21 = _closure1_slot0;
            var25 = _closure1_slot2;
            var18 = 51;
            var18 = var25[var18];
            var18 = var21.bind(var4)(var18);
            var21 = var18.Tabs;
            var18 = {};
            var18['state'] = var22;
            var18 = var24.bind(var4)(var21, var18);
            var16['children'] = var18;
            var17 = var17.bind(var4)(var14, var16);
            var16 = new Array(2);
            var16[0] = var17;
            var18 = _closure1_slot11;
            var17 = {};
            var21 = var20 != var23;
            var20 = undefined;
            if(!var21) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var21 = {};
            var21['height'] = var23;
            var20 = var21;
case 50:
            var17['style'] = var20;
            var21 = _closure1_slot11;
            var20 = _closure1_slot0;
            var23 = _closure1_slot2;
            var19 = 52;
            var19 = var23[var19];
            var19 = var20.bind(var4)(var19);
            var20 = var19.SegmentedControlPages;
            var19 = {};
            var19['state'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var17['children'] = var19;
            var17 = var18.bind(var4)(var14, var17);
            var16[1] = var17;
            var13['children'] = var16;
            var12 = var15.bind(var4)(var14, var13);
case 49:
            var11[3] = var12;
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();