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
            var1 = 9;
            var2 = var4[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var2 = var5.trackYouTabAvatarPress;
            var2 = var2.bind(var5)();
            var2 = 10;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.showYouAccountActionSheet;
            var2 = var2.bind(var3)();
            return var1;
        };
        var2 = new Array(0);
        var6 = var4.bind(var5)(var3, var2);
        var4 = _closure1_slot12;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 11;
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
    var _closure1_slot15 = var1;
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
            var2 = 12;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var13 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var2 = 13;
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
            var2 = 14;
            var2 = var5[var2];
            var10 = var3.bind(var4)(var2);
            var6 = var10.useIsDisplayNameStylesMobileEnabled;
            var2 = {};
            var11 = 'YouScreenUserProfileContent';
            var2['location'] = var11;
            var6 = var6.bind(var10)(var2);
            var2 = 15;
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
            var10 = 16;
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
            var2 = 16;
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
                    var4 = 9;
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
                    var2 = _closure1_slot11;
                    var2 = var2.TAKE_ACTION;
                    var2 = var3.bind(var1)(var2);
case 5:
                    return var1;
                }
            };
            var16 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot14;
            var2 = _closure1_slot13;
            var1 = {};
            var9 = _closure1_slot12;
            var23 = _closure1_slot1;
            var5 = 17;
            var5 = var21[var5];
            var8 = var23.bind(var4)(var5);
            var5 = {};
            var13 = var13.primaryButtons;
            var5['style'] = var13;
            var15 = _closure1_slot12;
            var13 = 18;
            var13 = var21[var13];
            var13 = var20.bind(var4)(var13);
            var14 = var13.Button;
            var13 = {};
            var13['ref'] = var12;
            var17 = 'primary';
            var13['variant'] = var17;
            var19 = _closure1_slot12;
            var17 = 19;
            var17 = var21[var17];
            var17 = var20.bind(var4)(var17);
            var18 = var17.PencilIcon;
            var17 = {};
            var22 = 'sm';
            var17['size'] = var22;
            var22 = 20;
            var22 = var21[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.colors;
            var22 = var22.WHITE;
            var17['color'] = var22;
            var17 = var19.bind(var4)(var18, var17);
            var13['icon'] = var17;
            var17 = 21;
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
            var9 = _closure1_slot12;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var7 = 22;
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
    var _closure1_slot16 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserProfileSections;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserProfileThemeTypes;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var7 = var4.Fragment;
    var _closure1_slot13 = var7;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 51;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/YouScreenUserProfileContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function YouScreenUserProfileContent(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var31 = var2.user;
            var _closure2_slot0 = var31;
            var5 = var2.style;
            var27 = var2.navigateToProfileCustomization;
            var7 = var2.navigateToFriends;
            var _closure2_slot1 = var7;
            var41 = var2.navigateToPremium;
            var _closure2_slot2 = var41;
            var39 = var2.navigateToShop;
            var _closure2_slot3 = var39;
            var11 = var2.initialTab;
            var _closure2_slot4 = var11;
            var4 = undefined;
            var _closure2_slot21 = var4;
            var _closure2_slot22 = var4;
            var _closure2_slot23 = var4;
            var _closure2_slot24 = var4;
            var _closure2_slot25 = var4;
            var _closure2_slot26 = var4;
            var _closure2_slot27 = var4;
            var _closure2_slot28 = var4;
            var13 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 12;
            var2 = var9[var2];
            var2 = var13.bind(var4)(var2);
            var18 = var2.bind(var4)();
            var _closure2_slot5 = var18;
            var6 = _closure1_slot0;
            var2 = 23;
            var3 = var9[var2];
            var8 = var6.bind(var4)(var3);
            var3 = var8.useNavigation;
            var10 = var3.bind(var8)();
            var _closure2_slot6 = var10;
            var3 = 13;
            var3 = var9[var3];
            var8 = var6.bind(var4)(var3);
            var3 = var8.useUserProfileAnalyticsContext;
            var3 = var3.bind(var8)();
            var8 = var3.trackUserProfileAction;
            var _closure2_slot7 = var8;
            var3 = 24;
            var3 = var9[var3];
            var12 = var13.bind(var4)(var3);
            var3 = var31.id;
            var32 = var12.bind(var4)(var3);
            var _closure2_slot8 = var32;
            var3 = 25;
            var3 = var9[var3];
            var12 = var6.bind(var4)(var3);
            var3 = var12.useCustomStatusActivity;
            var35 = var3.bind(var12)();
            var _closure2_slot9 = var35;
            var3 = 26;
            var3 = var9[var3];
            var3 = var13.bind(var4)(var3);
            var30 = var3.bind(var4)(var32);
            var3 = 27;
            var12 = var9[var3];
            var16 = var6.bind(var4)(var12);
            var15 = var16.useStateFromStores;
            var12 = _closure1_slot7;
            var14 = new Array(1);
            var14[0] = var12;
            var12 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var37 = var15.bind(var16)(var14, var12);
            var12 = 28;
            var12 = var9[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['user'] = var31;
            var12['displayProfile'] = var32;
            var12 = var13.bind(var4)(var12);
            var17 = var12.theme;
            var16 = var12.primaryColor;
            var15 = var12.secondaryColor;
            var20 = null;
            var26 = var20 != var16;
            var _closure2_slot10 = var26;
            var12 = 29;
            var12 = var9[var12];
            var14 = var6.bind(var4)(var12);
            var13 = var14.useUserProfileColors;
            var12 = {};
            var12['theme'] = var17;
            var12['primaryColor'] = var16;
            var12['secondaryColor'] = var15;
            var12 = var13.bind(var14)(var12);
            var29 = var12.containerBackground;
            var _closure2_slot11 = var29;
            var17 = var12.avatarBackground;
            var38 = var12.statusBackground;
            var13 = _closure1_slot4;
            var12 = var13.useRef;
            var36 = var12.bind(var13)(var20);
            var15 = _closure1_slot4;
            var14 = var15.useCallback;
            var13 = new Array(1);
            var13[0] = var8;
            var12 = function() {
                var3 = _closure2_slot7;
                var2 = {};
                var1 = 'PRESS_SET_STATUS';
                var2['action'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 10;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.showYouAccountActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var28 = var14.bind(var15)(var12, var13);
            var12 = 30;
            var12 = var9[var12];
            var14 = var6.bind(var4)(var12);
            var13 = var14.useVirtualCurrencyMobileEnabled;
            var12 = {};
            var16 = 'YouScreenUserProfileContent';
            var12['location'] = var16;
            var12 = var13.bind(var14)(var12);
            var33 = var12.enabled;
            var _closure2_slot12 = var33;
            var13 = _closure1_slot4;
            var12 = var13.useState;
            var14 = var12.bind(var13)(var20);
            var13 = _closure1_slot3;
            var12 = 2;
            var13 = var13.bind(var4)(var14, var12);
            var15 = 0;
            var25 = var13[var15];
            var21 = 1;
            var13 = var13[var21];
            var _closure2_slot13 = var13;
            var13 = 31;
            var13 = var9[var13];
            var14 = var6.bind(var4)(var13);
            var13 = var14.useShouldShowExpiringTrialOfferCard;
            var40 = var13.bind(var14)();
            var _closure2_slot14 = var40;
            var13 = 32;
            var13 = var9[var13];
            var14 = var6.bind(var4)(var13);
            var13 = var14.useMobileWishlistOwnerExperiment;
            var13 = var13.bind(var14)(var16);
            var13 = var13.enabled;
            var _closure2_slot15 = var13;
            var3 = var9[var3];
            var14 = var6.bind(var4)(var3);
            var9 = var14.useStateFromStores;
            var3 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot15;
                    var1 = null;
                    if(!var3) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var4 = _closure1_slot8;
                    var3 = var4.getFirstWishlistId;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 9:
                    return var1;
                }
            };
            var24 = var9.bind(var14)(var6, var3);
            var _closure2_slot16 = var24;
            var6 = _closure1_slot4;
            var3 = var6.useState;
            var6 = var3.bind(var6)(var15);
            var3 = _closure1_slot3;
            var3 = var3.bind(var4)(var6, var12);
            var14 = var3[var15];
            var _closure2_slot17 = var14;
            var3 = var3[var21];
            var _closure2_slot18 = var3;
            var16 = _closure1_slot4;
            var9 = var16.useCallback;
            var6 = function(arg1) {
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
            var16 = var9.bind(var16)(var6, var3);
            var9 = _closure1_slot4;
            var6 = var9.useRef;
            var3 = new Array(0);
            var3 = var6.bind(var9)(var3);
            var _closure2_slot19 = var3;
            var6 = _closure1_slot4;
            var3 = var6.useState;
            var6 = var3.bind(var6)(var4);
            var3 = _closure1_slot3;
            var3 = var3.bind(var4)(var6, var12);
            var23 = var3[var15];
            var3 = var3[var21];
            var _closure2_slot20 = var3;
            var9 = _closure1_slot4;
            var6 = var9.useRef;
            var3 = _closure1_slot9;
            var22 = var3.WISHLIST;
            var3 = 0;
            if(!(var11 === var22)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var3 = var21;
case 11:
            var3 = var6.bind(var9)(var3);
            _closure2_slot21 = var3;
            var22 = _closure1_slot4;
            var9 = var22.useCallback;
            var6 = function(arg1, arg2, arg3) {
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
            var3 = var9.bind(var22)(var6, var3);
            _closure2_slot22 = var3;
            var22 = _closure1_slot4;
            var9 = var22.useState;
            var6 = _closure1_slot9;
            var6 = var6.WISHLIST;
            var6 = var11 === var6;
            var9 = var9.bind(var22)(var6);
            var6 = _closure1_slot3;
            var9 = var6.bind(var4)(var9, var12);
            var6 = var9[var15];
            _closure2_slot23 = var6;
            var9 = var9[var21];
            _closure2_slot24 = var9;
            var22 = _closure1_slot4;
            var12 = var22.useCallback;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = arg1;
                    var1 = _closure2_slot21;
                    var1['current'] = var4;
                    var3 = _closure2_slot24;
                    var1 = 1;
                    var6 = var1 === var4;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var6);
                    var5 = _closure2_slot7;
                    var3 = {};
                    var7 = 'PRESS_SECTION';
                    var3['action'] = var7;
                    var7 = _closure1_slot9;
                    if(var6) { _fun0006_ip = 17; continue _fun0006 }
case 16:
                    var6 = var7.MAIN;
                    _fun0006_ip = 18; continue _fun0006;
case 17:
                    var6 = var7.WISHLIST;
case 18:
                    var3['section'] = var6;
                    var3 = var5.bind(var1)(var3);
                    var3 = _closure2_slot19;
                    var3 = var3.current;
                    var3 = var3[var4];
                    var4 = null;
                    if(!(var4 != var3)) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                    var2 = _closure2_slot20;
                    var2 = var2.bind(var1)(var3);
case 19:
                    return var1;
                }
            };
            var8 = var12.bind(var22)(var8, var9);
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var2];
            var22 = var12.bind(var4)(var9);
            var12 = var22.useFocusEffect;
            var43 = _closure1_slot4;
            var42 = var43.useCallback;
            var34 = new Array(1);
            var34[0] = var35;
            var9 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot13;
                    var1 = _closure2_slot9;
                    var2 = null;
                    var1 = var2 == var1;
                    if(!var1) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 33;
                    var1 = var4[var1];
                    var4 = undefined;
                    var1 = var5.bind(var4)(var1);
                    var2 = var1.bind(var4)();
case 21:
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var9 = var42.bind(var43)(var9, var34);
            var9 = var12.bind(var22)(var9);
            var9 = var20 != var25;
            var34 = undefined;
            if(!var9) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var9 = var25.label;
            var34 = var9.bind(var25)();
case 23:
            var22 = _closure1_slot4;
            var12 = var22.useCallback;
            var9 = new Array(10);
            var9[0] = var29;
            var9[1] = var18;
            var9[2] = var41;
            var9[3] = var40;
            var9[4] = var39;
            var9[5] = var26;
            var9[6] = var33;
            var9[7] = var31;
            var9[8] = var32;
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
                    var4 = _closure1_slot14;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var7 = var5.cards;
                    var1 = new Array(2);
                    var1[0] = var7;
                    var5 = var5.profileContent;
                    var1[1] = var5;
                    var2['style'] = var1;
                    var8 = _closure1_slot12;
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 34;
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
                    var7 = _closure2_slot14;
                    var7 = !var7;
                    if(!var7) { _fun0008_ip = 25; continue _fun0008 }
case 26:
                    var11 = _closure1_slot12;
                    var10 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var8 = 35;
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
case 25:
                    var5[1] = var7;
                    var7 = _closure2_slot12;
                    if(!var7) { _fun0008_ip = 27; continue _fun0008 }
case 28:
                    var11 = _closure1_slot12;
                    var10 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var8 = 36;
                    var8 = var12[var8];
                    var10 = var10.bind(var1)(var8);
                    var8 = {};
                    var8['style'] = var9;
                    var7 = var11.bind(var1)(var10, var8);
case 27:
                    var5[2] = var7;
                    var13 = _closure1_slot12;
                    var7 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var8 = 37;
                    var8 = var11[var8];
                    var12 = var7.bind(var1)(var8);
                    var8 = {};
                    var10 = _closure2_slot0;
                    var8['user'] = var10;
                    var8['currentUser'] = var10;
                    var8['style'] = var9;
                    var8 = var13.bind(var1)(var12, var8);
                    var5[3] = var8;
                    var13 = _closure1_slot12;
                    var8 = 38;
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
                    var16 = _closure1_slot12;
                    var12 = _closure1_slot0;
                    var8 = 39;
                    var13 = var11[var8];
                    var13 = var12.bind(var1)(var13);
                    var15 = var13.UserProfileAccountConnectionsCard;
                    var13 = {};
                    var17 = var10.id;
                    var13['userId'] = var17;
                    var13['style'] = var9;
                    var13 = var16.bind(var1)(var15, var13);
                    var5[5] = var13;
                    var13 = _closure1_slot12;
                    var8 = var11[var8];
                    var8 = var12.bind(var1)(var8);
                    var12 = var8.UserProfileApplicationRoleConnectionsCard;
                    var8 = {};
                    var15 = var10.id;
                    var8['userId'] = var15;
                    var8['style'] = var9;
                    var8 = var13.bind(var1)(var12, var8);
                    var5[6] = var8;
                    var13 = _closure1_slot12;
                    var8 = 40;
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
                    var8 = _closure1_slot12;
                    var6 = 41;
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
            var12 = var12.bind(var22)(var7, var9);
            _closure2_slot25 = var12;
            var22 = _closure1_slot4;
            var9 = var22.useCallback;
            var33 = var18.profileContent;
            var7 = new Array(4);
            var7[0] = var33;
            var7[1] = var24;
            var7[2] = var14;
            var7[3] = var6;
            var6 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = _closure1_slot12;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var1 = _closure2_slot5;
                    var1 = var1.profileContent;
                    var2['style'] = var1;
                    var6 = _closure2_slot16;
                    var1 = null;
                    if(!(var1 != var6)) { _fun0009_ip = 29; continue _fun0009 }
case 30:
                    var8 = _closure1_slot12;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 42;
                    var1 = var7[var1];
                    var7 = undefined;
                    var6 = var6.bind(var7)(var1);
                    var1 = {};
                    var10 = _closure2_slot16;
                    var1['wishlistId'] = var10;
                    var11 = _closure2_slot17;
                    var10 = 0;
                    var11 = var11 > var10;
                    var10 = undefined;
                    if(!var11) { _fun0009_ip = 31; continue _fun0009 }
case 32:
                    var10 = _closure2_slot17;
case 31:
                    var1['containerWidth'] = var10;
                    var9 = _closure2_slot23;
                    var1['isVisible'] = var9;
                    var1 = var8.bind(var7)(var6, var1);
                    _fun0009_ip = 33; continue _fun0009;
case 29:
                    var8 = _closure1_slot12;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 42;
                    var5 = var7[var5];
                    var7 = undefined;
                    var5 = var6.bind(var7)(var5);
                    var6 = var5.WishlistEmptyState;
                    var5 = {};
                    var1 = var8.bind(var7)(var6, var5);
case 33:
                    var2['children'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var22 = var9.bind(var22)(var6, var7);
            _closure2_slot26 = var22;
            var9 = _closure1_slot4;
            var7 = var9.useMemo;
            var6 = new Array(3);
            var6[0] = var12;
            var6[1] = var22;
            var6[2] = var3;
            var3 = function() {
                var2 = {};
                var1 = 'main';
                var2['id'] = var1;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var4 = 21;
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
                var10 = _closure1_slot12;
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
                var11 = _closure2_slot25;
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
                var4 = _closure1_slot12;
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
                var7 = _closure2_slot26;
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
            var3 = 43;
            var3 = var7[var3];
            var7 = var6.bind(var4)(var3);
            var6 = var7.useSegmentedControlState;
            var3 = {};
            var3['pageWidth'] = var14;
            var14 = _closure1_slot9;
            var22 = var14.WISHLIST;
            var14 = 0;
            if(!(var11 === var22)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var14 = var21;
case 34:
            var3['defaultIndex'] = var14;
            var24 = _closure1_slot1;
            var33 = _closure1_slot2;
            var14 = 20;
            var14 = var33[var14];
            var14 = var24.bind(var4)(var14);
            var14 = var14.spacing;
            var14 = var14.PX_24;
            var3['itemSpacing'] = var14;
            var3['items'] = var9;
            var3['onPageChange'] = var8;
            var22 = var6.bind(var7)(var3);
            _closure2_slot27 = var22;
            var7 = _closure1_slot4;
            var6 = var7.useRef;
            var3 = var22.setActiveIndex;
            var3 = var6.bind(var7)(var3);
            _closure2_slot28 = var3;
            var8 = _closure1_slot4;
            var7 = var8.useEffect;
            var6 = new Array(1);
            var6[0] = var22;
            var3 = function() {
                var2 = _closure2_slot28;
                var1 = _closure2_slot27;
                var1 = var1.setActiveIndex;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var3 = var7.bind(var8)(var3, var6);
            var6 = _closure1_slot0;
            var2 = var33[var2];
            var3 = var6.bind(var4)(var2);
            var2 = var3.useFocusEffect;
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var7 = new Array(3);
            var7[0] = var11;
            var7[1] = var13;
            var7[2] = var10;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot15;
                    var5 = undefined;
                    if(var3) { _fun0010_ip = 36; continue _fun0010 }
case 37:
                    return var5;
case 36:
                    var3 = _closure2_slot4;
                    if(!(var5 !== var3)) { _fun0010_ip = 38; continue _fun0010 }
case 39:
                    var4 = _closure2_slot4;
                    var2 = _closure1_slot9;
                    var3 = var2.WISHLIST;
                    var2 = 0;
                    if(!(var4 === var3)) { _fun0010_ip = 40; continue _fun0010 }
case 41:
                    var2 = 1;
case 40:
                    var _closure3_slot1 = var2;
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = function() {
                        var6 = _closure2_slot28;
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
case 38:
                    var1 = function() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var3 = _closure3_slot0;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0011_ip = 42; continue _fun0011 }
case 43:
                            var3 = global;
                            var4 = var3.clearTimeout;
                            var3 = _closure3_slot0;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
case 42:
                            var4 = _closure2_slot6;
                            var3 = var4.isFocused;
                            var3 = var3.bind(var4)();
                            if(var3) { _fun0011_ip = 44; continue _fun0011 }
case 45:
                            var4 = _closure2_slot6;
                            var3 = var4.getParent;
                            var4 = var3.bind(var4)();
                            var2 = var2 != var4;
                            if(!var2) { _fun0011_ip = 46; continue _fun0011 }
case 47:
                            var3 = var4.isFocused;
                            var2 = var3.bind(var4)();
case 46:
                            if(!var2) { _fun0011_ip = 44; continue _fun0011 }
case 48:
                            var3 = _closure2_slot6;
                            var2 = var3.setParams;
                            var1 = {};
                            var4 = _closure1_slot9;
                            var4 = var4.MAIN;
                            var1['initialTab'] = var4;
                            var1 = var2.bind(var3)(var1);
case 44:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var1 = var8.bind(var9)(var1, var7);
            var1 = var2.bind(var3)(var1);
            var3 = _closure1_slot12;
            var1 = 44;
            var1 = var33[var1];
            var1 = var24.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var1['style'] = var5;
            var7 = _closure1_slot12;
            var5 = 45;
            var5 = var33[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.LayerScope;
            var5 = {};
            var10 = _closure1_slot14;
            var9 = _closure1_slot6;
            var8 = {};
            var14 = var18.profileContentWrapper;
            var11 = new Array(2);
            var11[0] = var14;
            var14 = {};
            var14['paddingTop'] = var15;
            var11[1] = var14;
            var8['style'] = var11;
            var15 = _closure1_slot12;
            var14 = _closure1_slot15;
            var11 = {};
            var11['user'] = var31;
            var11['backgroundColor'] = var17;
            var17 = {};
            var17['backgroundColor'] = var38;
            var11['statusStyle'] = var17;
            var14 = var15.bind(var4)(var14, var11);
            var11 = new Array(4);
            var11[0] = var14;
            var17 = _closure1_slot12;
            var14 = 46;
            var14 = var33[var14];
            var15 = var24.bind(var4)(var14);
            var14 = {};
            var14['ref'] = var36;
            var14['customStatusActivity'] = var35;
            var14['hasCustomProfileTheme'] = var26;
            var35 = var18.customStatusBubble;
            var26 = new Array(2);
            var26[0] = var35;
            var35 = var18.customStatusBubbleInset;
            var26[1] = var35;
            var14['style'] = var26;
            var26 = var18.emojiOnlyCustomStatusBubble;
            var14['emojiOnlyStyle'] = var26;
            var26 = true;
            var14['editEnabled'] = var26;
            var14['placeholderText'] = var34;
            var14['prompt'] = var25;
            var14 = var17.bind(var4)(var15, var14);
            var11[1] = var14;
            var15 = _closure1_slot14;
            var14 = {};
            var25 = var18.primaryInfo;
            var17 = new Array(2);
            var17[0] = var25;
            var25 = var18.profileContent;
            var17[1] = var25;
            var14['style'] = var17;
            var25 = _closure1_slot12;
            var17 = 47;
            var17 = var33[var17];
            var24 = var24.bind(var4)(var17);
            var17 = {};
            var17['user'] = var31;
            var33 = var20 == var32;
            var31 = undefined;
            if(var33) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            var31 = var32.pronouns;
case 49:
            var17['pronouns'] = var31;
            var17['badges'] = var30;
            var17['badgeContainerBackground'] = var29;
            var17['onPressDisplayName'] = var28;
            var31 = _closure1_slot0;
            var33 = _closure1_slot2;
            var28 = 21;
            var29 = var33[var28];
            var29 = var31.bind(var4)(var29);
            var34 = var29.intl;
            var32 = var34.formatToPlainString;
            var29 = var33[var28];
            var29 = var31.bind(var4)(var29);
            var29 = var29.t;
            var30 = var29.er+FRD;
            var29 = {};
            var35 = 48;
            var35 = var33[var35];
            var36 = var31.bind(var4)(var35);
            var35 = var36.getStatusLabel;
            var35 = var35.bind(var36)(var37);
            var29['status'] = var35;
            var32 = var32.bind(var34)(var30, var29);
            var29 = var33[var28];
            var29 = var31.bind(var4)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var28 = var33[var28];
            var28 = var31.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.C6COaT;
            var31 = var29.bind(var30)(var28);
            var28 = global;
            var28 = var28.HermesInternal;
            var30 = var28.concat;
            var29 = '';
            var28 = ', ';
            var28 = var30.bind(var29)(var32, var28, var31);
            var17['displayNameAccessibilityHint'] = var28;
            var28 = _closure1_slot10;
            var28 = var28.YOU_SCREEN;
            var17['themeType'] = var28;
            var17['showChevron'] = var26;
            var24 = var25.bind(var4)(var24, var17);
            var17 = new Array(2);
            var17[0] = var24;
            var26 = _closure1_slot12;
            var25 = _closure1_slot16;
            var24 = {};
            var24['navigateToProfileCustomization'] = var27;
            var24 = var26.bind(var4)(var25, var24);
            var17[1] = var24;
            var14['children'] = var17;
            var14 = var15.bind(var4)(var9, var14);
            var11[2] = var14;
            if(var13) { _fun0003_ip = 51; continue _fun0003 }
case 52:
            var12 = var12.bind(var4)();
            _fun0003_ip = 53; continue _fun0003;
case 51:
            var15 = _closure1_slot14;
            var14 = _closure1_slot6;
            var13 = {};
            var17 = {};
            var17['flex'] = var21;
            var13['style'] = var17;
            var13['onLayout'] = var16;
            var17 = _closure1_slot12;
            var16 = {};
            var18 = var18.profileTablist;
            var16['style'] = var18;
            var24 = _closure1_slot12;
            var21 = _closure1_slot0;
            var25 = _closure1_slot2;
            var18 = 49;
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
            var18 = _closure1_slot12;
            var17 = {};
            var21 = var20 != var23;
            var20 = undefined;
            if(!var21) { _fun0003_ip = 54; continue _fun0003 }
case 55:
            var21 = {};
            var21['height'] = var23;
            var20 = var21;
case 54:
            var17['style'] = var20;
            var21 = _closure1_slot12;
            var20 = _closure1_slot0;
            var23 = _closure1_slot2;
            var19 = 50;
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
case 53:
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