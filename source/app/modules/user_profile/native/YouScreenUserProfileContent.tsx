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
        var1[4] = var6;
        var6 = 'no-hide-descendants';
        var5 = 'importantForAccessibility';
        var1[4] = var6;
        var6 = true;
        var5 = 'accessibilityElementsHidden';
        var1[4] = var6;
        var6 = false;
        var5 = 'accessible';
        var1[4] = var6;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function EditSection(arg1) {
        var2 = arg1;
        var13 = var2.navigateToProfileCustomization;
        var _closure2_slot0 = var13;
        var7 = _closure1_slot1;
        var12 = _closure1_slot2;
        var2 = 12;
        var2 = var12[var2];
        var4 = undefined;
        var2 = var7.bind(var4)(var2);
        var14 = var2.bind(var4)();
        var21 = _closure1_slot0;
        var2 = 13;
        var2 = var12[var2];
        var3 = var21.bind(var4)(var2);
        var2 = var3.useUserProfileAnalyticsContext;
        var2 = var2.bind(var3)();
        var8 = var2.trackUserProfileAction;
        var _closure2_slot1 = var8;
        var5 = _closure1_slot4;
        var3 = var5.useRef;
        var2 = null;
        var11 = var3.bind(var5)(var2);
        var2 = 14;
        var2 = var12[var2];
        var9 = var21.bind(var4)(var2);
        var5 = var9.useSelectedDismissibleContent;
        var2 = 15;
        var3 = var12[var2];
        var3 = var21.bind(var4)(var3);
        var3 = var3.DismissibleContent;
        var10 = var3.DISPLAY_NAME_STYLES_MOBILE_PROFILE_TOOLTIP;
        var3 = new Array(1);
        var3[0] = var10;
        var9 = var5.bind(var9)(var3);
        var5 = _closure1_slot3;
        var3 = 2;
        var9 = var5.bind(var4)(var9, var3);
        var3 = 0;
        var3 = var9[var3];
        var5 = 1;
        var9 = var9[var5];
        var _closure2_slot2 = var9;
        var2 = var12[var2];
        var2 = var21.bind(var4)(var2);
        var2 = var2.DismissibleContent;
        var2 = var2.DISPLAY_NAME_STYLES_MOBILE_PROFILE_TOOLTIP;
        var10 = var3 === var2;
        var _closure2_slot3 = var10;
        var5 = _closure1_slot4;
        var3 = var5.useCallback;
        var2 = new Array(4);
        var2[0] = var13;
        var2[1] = var8;
        var2[2] = var10;
        var2[3] = var9;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
                if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot2;
                var2 = _closure1_slot11;
                var2 = var2.TAKE_ACTION;
                var2 = var3.bind(var1)(var2);
case 2:
                return var1;
            }
        };
        var17 = var3.bind(var5)(var1, var2);
        var3 = _closure1_slot14;
        var2 = _closure1_slot13;
        var1 = {};
        var13 = _closure1_slot12;
        var5 = 16;
        var5 = var12[var5];
        var8 = var7.bind(var4)(var5);
        var5 = {};
        var14 = var14.primaryButtons;
        var5['style'] = var14;
        var16 = _closure1_slot12;
        var14 = 17;
        var14 = var12[var14];
        var14 = var21.bind(var4)(var14);
        var15 = var14.Button;
        var14 = {};
        var14['ref'] = var11;
        var18 = 'primary';
        var14['variant'] = var18;
        var20 = _closure1_slot12;
        var18 = 18;
        var18 = var12[var18];
        var18 = var21.bind(var4)(var18);
        var19 = var18.PencilIcon;
        var18 = {};
        var22 = 'sm';
        var18['size'] = var22;
        var22 = 19;
        var22 = var12[var22];
        var22 = var7.bind(var4)(var22);
        var22 = var22.colors;
        var22 = var22.WHITE;
        var18['color'] = var22;
        var18 = var20.bind(var4)(var19, var18);
        var14['icon'] = var18;
        var18 = 20;
        var19 = var12[var18];
        var19 = var21.bind(var4)(var19);
        var20 = var19.intl;
        var19 = var20.string;
        var18 = var12[var18];
        var18 = var21.bind(var4)(var18);
        var18 = var18.t;
        var18 = var18.AAjhgi;
        var18 = var19.bind(var20)(var18);
        var14['text'] = var18;
        var14['onPress'] = var17;
        var17 = true;
        var14['grow'] = var17;
        var14 = var16.bind(var4)(var15, var14);
        var5['secondaryButton'] = var14;
        var8 = var13.bind(var4)(var8, var5);
        var5 = new Array(2);
        var5[0] = var8;
        var8 = _closure1_slot12;
        var6 = 21;
        var6 = var12[var6];
        var7 = var7.bind(var4)(var6);
        var6 = {};
        var6['targetRef'] = var11;
        var6['visible'] = var10;
        var6['markAsDismissed'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
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
    var8 = var4.Platform;
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
    var4 = 52;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/YouScreenUserProfileContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function YouScreenUserProfileContent(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var29 = var2.user;
            var _closure2_slot0 = var29;
            var5 = var2.style;
            var27 = var2.navigateToProfileCustomization;
            var7 = var2.navigateToFriends;
            var _closure2_slot1 = var7;
            var40 = var2.navigateToPremium;
            var _closure2_slot2 = var40;
            var38 = var2.navigateToShop;
            var _closure2_slot3 = var38;
            var11 = var2.initialTab;
            var _closure2_slot4 = var11;
            var4 = undefined;
            var _closure2_slot22 = var4;
            var _closure2_slot23 = var4;
            var _closure2_slot24 = var4;
            var _closure2_slot25 = var4;
            var _closure2_slot26 = var4;
            var _closure2_slot27 = var4;
            var _closure2_slot28 = var4;
            var _closure2_slot29 = var4;
            var _closure2_slot30 = var4;
            var _closure2_slot31 = var4;
            var13 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 12;
            var2 = var9[var2];
            var2 = var13.bind(var4)(var2);
            var17 = var2.bind(var4)();
            var _closure2_slot5 = var17;
            var6 = _closure1_slot0;
            var2 = 22;
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
            var3 = 23;
            var3 = var9[var3];
            var12 = var13.bind(var4)(var3);
            var3 = var29.id;
            var30 = var12.bind(var4)(var3);
            var _closure2_slot8 = var30;
            var3 = 24;
            var3 = var9[var3];
            var12 = var6.bind(var4)(var3);
            var3 = var12.useCustomStatusActivity;
            var33 = var3.bind(var12)();
            var _closure2_slot9 = var33;
            var3 = 25;
            var3 = var9[var3];
            var3 = var13.bind(var4)(var3);
            var28 = var3.bind(var4)(var30);
            var3 = 26;
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
            var35 = var15.bind(var16)(var14, var12);
            var12 = 27;
            var12 = var9[var12];
            var12 = var13.bind(var4)(var12);
            var44 = 'YouScreenUserProfileContent';
            var41 = var12.bind(var4)(var44);
            var _closure2_slot10 = var41;
            var12 = 28;
            var12 = var9[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['user'] = var29;
            var12['displayProfile'] = var30;
            var12 = var13.bind(var4)(var12);
            var20 = var12.theme;
            var16 = var12.primaryColor;
            var15 = var12.secondaryColor;
            var19 = null;
            var26 = var19 != var16;
            var _closure2_slot11 = var26;
            var12 = 29;
            var12 = var9[var12];
            var14 = var6.bind(var4)(var12);
            var13 = var14.useUserProfileColors;
            var12 = {};
            var12['theme'] = var20;
            var12['primaryColor'] = var16;
            var12['secondaryColor'] = var15;
            var12 = var13.bind(var14)(var12);
            var24 = var12.containerBackground;
            var _closure2_slot12 = var24;
            var42 = var12.containerBorderColor;
            var _closure2_slot13 = var42;
            var14 = var12.avatarBackground;
            var36 = var12.statusBackground;
            var13 = _closure1_slot4;
            var12 = var13.useRef;
            var34 = var12.bind(var13)(var19);
            var16 = _closure1_slot4;
            var15 = var16.useCallback;
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
            var20 = var15.bind(var16)(var12, var13);
            var12 = 30;
            var12 = var9[var12];
            var15 = var6.bind(var4)(var12);
            var13 = var15.useVirtualCurrencyMobileEnabled;
            var12 = {};
            var12['location'] = var44;
            var12 = var13.bind(var15)(var12);
            var37 = var12.enabled;
            var _closure2_slot14 = var37;
            var13 = _closure1_slot4;
            var12 = var13.useState;
            var13 = var12.bind(var13)(var19);
            var12 = _closure1_slot3;
            var16 = 2;
            var12 = var12.bind(var4)(var13, var16);
            var13 = 0;
            var25 = var12[var13];
            var23 = 1;
            var32 = var12[var23];
            var _closure2_slot15 = var32;
            var12 = 31;
            var12 = var9[var12];
            var15 = var6.bind(var4)(var12);
            var12 = var15.useShouldShowExpiringTrialOfferCard;
            var39 = var12.bind(var15)();
            var _closure2_slot16 = var39;
            var3 = var9[var3];
            var12 = var6.bind(var4)(var3);
            var9 = var12.useStateFromStores;
            var3 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getFirstWishlistId;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var31 = var9.bind(var12)(var6, var3);
            var _closure2_slot17 = var31;
            var6 = _closure1_slot4;
            var3 = var6.useState;
            var6 = var3.bind(var6)(var13);
            var3 = _closure1_slot3;
            var3 = var3.bind(var4)(var6, var16);
            var12 = var3[var13];
            var _closure2_slot18 = var12;
            var3 = var3[var23];
            var _closure2_slot19 = var3;
            var15 = _closure1_slot4;
            var9 = var15.useCallback;
            var6 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.width;
                var2 = _closure2_slot19;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var3 = new Array(0);
            var15 = var9.bind(var15)(var6, var3);
            var9 = _closure1_slot4;
            var6 = var9.useRef;
            var3 = new Array(0);
            var3 = var6.bind(var9)(var3);
            var _closure2_slot20 = var3;
            var6 = _closure1_slot4;
            var3 = var6.useState;
            var6 = var3.bind(var6)(var4);
            var3 = _closure1_slot3;
            var3 = var3.bind(var4)(var6, var16);
            var22 = var3[var13];
            var3 = var3[var23];
            var _closure2_slot21 = var3;
            var9 = _closure1_slot4;
            var6 = var9.useRef;
            var3 = _closure1_slot9;
            var21 = var3.WISHLIST;
            var3 = 0;
            if(!(var11 === var21)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = var23;
case 4:
            var3 = var6.bind(var9)(var3);
            _closure2_slot22 = var3;
            var21 = _closure1_slot4;
            var9 = var21.useCallback;
            var6 = function(arg1, arg2, arg3) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = arg1;
                    var3 = arg3;
                    var1 = 0;
                    if(!(!(var3 <= var1))) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var2 = _closure2_slot20;
                    var4 = var2.current;
                    var4 = var4[var5];
                    var2 = var2.current;
                    var2[var5] = var3;
                    var2 = _closure2_slot22;
                    var2 = var2.current;
                    var2 = var5 === var2;
                    if(!var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var2 = var3 !== var4;
case 8:
                    if(!var2) { _fun0003_ip = 6; continue _fun0003 }
case 10:
                    var2 = _closure2_slot21;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = new Array(0);
            var3 = var9.bind(var21)(var6, var3);
            _closure2_slot23 = var3;
            var21 = _closure1_slot4;
            var9 = var21.useState;
            var6 = _closure1_slot9;
            var6 = var6.WISHLIST;
            var6 = var11 === var6;
            var9 = var9.bind(var21)(var6);
            var6 = _closure1_slot3;
            var9 = var6.bind(var4)(var9, var16);
            var6 = var9[var13];
            _closure2_slot24 = var6;
            var9 = var9[var23];
            _closure2_slot25 = var9;
            var21 = _closure1_slot4;
            var16 = var21.useCallback;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = arg1;
                    var1 = _closure2_slot22;
                    var1['current'] = var4;
                    var3 = _closure2_slot25;
                    var1 = 1;
                    var6 = var1 === var4;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var6);
                    var5 = _closure2_slot7;
                    var3 = {};
                    var7 = 'PRESS_SECTION';
                    var3['action'] = var7;
                    var7 = _closure1_slot9;
                    if(var6) { _fun0004_ip = 11; continue _fun0004 }
case 10:
                    var6 = var7.MAIN;
                    _fun0004_ip = 12; continue _fun0004;
case 11:
                    var6 = var7.WISHLIST;
case 12:
                    var3['section'] = var6;
                    var3 = var5.bind(var1)(var3);
                    var3 = _closure2_slot20;
                    var3 = var3.current;
                    var3 = var3[var4];
                    var4 = null;
                    if(!(var4 != var3)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var2 = _closure2_slot21;
                    var2 = var2.bind(var1)(var3);
case 13:
                    return var1;
                }
            };
            var8 = var16.bind(var21)(var8, var9);
            var21 = _closure1_slot0;
            var16 = _closure1_slot2;
            var9 = 32;
            var9 = var16[var9];
            var43 = var21.bind(var4)(var9);
            var9 = var43.useYouBarEnabled;
            var9 = var9.bind(var43)(var44);
            _closure2_slot26 = var9;
            var45 = _closure1_slot4;
            var44 = var45.useCallback;
            var43 = new Array(2);
            var43[0] = var33;
            var43[1] = var32;
            var32 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot15;
                    var1 = _closure2_slot9;
                    var2 = null;
                    var1 = var2 == var1;
                    if(!var1) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 33;
                    var1 = var4[var1];
                    var4 = undefined;
                    var1 = var5.bind(var4)(var1);
                    var2 = var1.bind(var4)();
case 15:
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var43 = var44.bind(var45)(var32, var43);
            _closure2_slot27 = var43;
            var16 = var16[var2];
            var32 = var21.bind(var4)(var16);
            var21 = var32.useFocusEffect;
            var46 = _closure1_slot4;
            var45 = var46.useCallback;
            var44 = new Array(2);
            var44[0] = var43;
            var44[1] = var9;
            var16 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot26;
                    if(var2) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                    var2 = _closure2_slot27;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var45.bind(var46)(var16, var44);
            var16 = var21.bind(var32)(var16);
            var32 = _closure1_slot4;
            var21 = var32.useEffect;
            var16 = new Array(2);
            var16[0] = var43;
            var16[1] = var9;
            var9 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot26;
                    if(!var1) { _fun0007_ip = 18; continue _fun0007 }
case 17:
                    var1 = global;
                    var3 = var1.setImmediate;
                    var2 = undefined;
                    var1 = function() {
                        var2 = _closure2_slot27;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var1 = var3.bind(var2)(var1);
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var21.bind(var32)(var9, var16);
            var9 = var19 != var25;
            var32 = undefined;
            if(!var9) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var9 = var25.label;
            var32 = var9.bind(var25)();
case 19:
            var21 = _closure1_slot4;
            var16 = var21.useCallback;
            var9 = new Array(12);
            var9[0] = var24;
            var9[1] = var42;
            var9[2] = var41;
            var9[3] = var17;
            var9[4] = var40;
            var9[5] = var39;
            var9[6] = var38;
            var9[7] = var26;
            var9[8] = var37;
            var9[9] = var29;
            var9[10] = var30;
            var9[11] = var7;
            var7 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot10;
                    var1 = _closure2_slot5;
                    var3 = var1.card;
                    var1 = new Array(2);
                    var1[0] = var3;
                    if(var2) { _fun0008_ip = 21; continue _fun0008 }
case 22:
                    var2 = {};
                    var3 = _closure2_slot12;
                    var2['backgroundColor'] = var3;
                    var1[1] = var2;
                    var10 = var1;
                    _fun0008_ip = 23; continue _fun0008;
case 21:
                    var2 = {};
                    var3 = _closure2_slot12;
                    var2['backgroundColor'] = var3;
                    var3 = _closure2_slot13;
                    var2['borderColor'] = var3;
                    var3 = 1;
                    var2['borderWidth'] = var3;
                    var1[1] = var2;
                    var10 = var1;
case 23:
                    var4 = _closure1_slot14;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var5 = _closure2_slot5;
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
                    var11 = _closure2_slot2;
                    var5['navigateToPremium'] = var11;
                    var5['style'] = var10;
                    var7 = var8.bind(var1)(var7, var5);
                    var5 = new Array(10);
                    var5[0] = var7;
                    var7 = _closure2_slot16;
                    var7 = !var7;
                    if(!var7) { _fun0008_ip = 24; continue _fun0008 }
case 25:
                    var12 = _closure1_slot12;
                    var11 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var8 = 35;
                    var8 = var13[var8];
                    var11 = var11.bind(var1)(var8);
                    var8 = {};
                    var13 = _closure2_slot2;
                    var8['navigateToPremium'] = var13;
                    var13 = _closure2_slot3;
                    var8['navigateToShop'] = var13;
                    var13 = _closure2_slot11;
                    var8['hasCustomProfileTheme'] = var13;
                    var7 = var12.bind(var1)(var11, var8);
case 24:
                    var5[1] = var7;
                    var7 = _closure2_slot14;
                    if(!var7) { _fun0008_ip = 26; continue _fun0008 }
case 27:
                    var12 = _closure1_slot12;
                    var11 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var8 = 36;
                    var8 = var13[var8];
                    var11 = var11.bind(var1)(var8);
                    var8 = {};
                    var8['style'] = var10;
                    var7 = var12.bind(var1)(var11, var8);
case 26:
                    var5[2] = var7;
                    var11 = _closure1_slot12;
                    var8 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var7 = 37;
                    var7 = var12[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = {};
                    var12 = _closure2_slot0;
                    var7['user'] = var12;
                    var7['currentUser'] = var12;
                    var13 = _closure2_slot10;
                    var12 = undefined;
                    if(var13) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                    var12 = var10;
case 28:
                    var7['style'] = var12;
                    var7 = var11.bind(var1)(var8, var7);
                    var5[3] = var7;
                    var11 = _closure1_slot12;
                    var8 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var7 = 38;
                    var7 = var12[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = {};
                    var12 = _closure2_slot0;
                    var12 = var12.id;
                    var7['userId'] = var12;
                    var12 = _closure2_slot8;
                    var7['displayProfile'] = var12;
                    var13 = _closure2_slot10;
                    var12 = undefined;
                    if(var13) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                    var12 = var10;
case 30:
                    var7['style'] = var12;
                    var7 = var11.bind(var1)(var8, var7);
                    var5[4] = var7;
                    var7 = _closure2_slot10;
                    if(!var7) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                    var12 = _closure1_slot12;
                    var11 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var8 = 39;
                    var8 = var13[var8];
                    var11 = var11.bind(var1)(var8);
                    var8 = {};
                    var7 = var12.bind(var1)(var11, var8);
case 32:
                    var5[5] = var7;
                    var11 = _closure1_slot12;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var12 = 40;
                    var7 = var7[var12];
                    var7 = var8.bind(var1)(var7);
                    var8 = var7.UserProfileAccountConnectionsCard;
                    var7 = {};
                    var13 = _closure2_slot0;
                    var13 = var13.id;
                    var7['userId'] = var13;
                    var14 = _closure2_slot10;
                    var13 = undefined;
                    if(var14) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                    var13 = var10;
case 34:
                    var7['style'] = var13;
                    var7 = var11.bind(var1)(var8, var7);
                    var5[6] = var7;
                    var11 = _closure1_slot12;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var12];
                    var7 = var8.bind(var1)(var7);
                    var8 = var7.UserProfileApplicationRoleConnectionsCard;
                    var7 = {};
                    var12 = _closure2_slot0;
                    var12 = var12.id;
                    var7['userId'] = var12;
                    var13 = _closure2_slot10;
                    var12 = undefined;
                    if(var13) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                    var12 = var10;
case 36:
                    var7['style'] = var12;
                    var7 = var11.bind(var1)(var8, var7);
                    var5[7] = var7;
                    var14 = _closure1_slot12;
                    var7 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var8 = 41;
                    var8 = var12[var8];
                    var13 = var7.bind(var1)(var8);
                    var8 = {};
                    var11 = _closure2_slot0;
                    var15 = var11.id;
                    var8['userId'] = var15;
                    var15 = _closure2_slot1;
                    var8['navigateToFriends'] = var15;
                    var8['style'] = var10;
                    var8 = var14.bind(var1)(var13, var8);
                    var5[8] = var8;
                    var8 = _closure1_slot12;
                    var6 = 42;
                    var6 = var12[var6];
                    var7 = var7.bind(var1)(var6);
                    var6 = {};
                    var11 = var11.id;
                    var6['userId'] = var11;
                    var11 = _closure2_slot10;
                    var9 = undefined;
                    if(var11) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                    var9 = var10;
case 38:
                    var6['style'] = var9;
                    var6 = var8.bind(var1)(var7, var6);
                    var5[9] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var21 = var16.bind(var21)(var7, var9);
            _closure2_slot28 = var21;
            var16 = _closure1_slot4;
            var9 = var16.useCallback;
            var37 = var17.profileContent;
            var7 = new Array(4);
            var7[0] = var37;
            var7[1] = var31;
            var7[2] = var12;
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
                    var6 = _closure2_slot17;
                    var1 = null;
                    if(!(var1 != var6)) { _fun0009_ip = 40; continue _fun0009 }
case 41:
                    var8 = _closure1_slot12;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 43;
                    var1 = var7[var1];
                    var7 = undefined;
                    var6 = var6.bind(var7)(var1);
                    var1 = {};
                    var10 = _closure2_slot17;
                    var1['wishlistId'] = var10;
                    var11 = _closure2_slot18;
                    var10 = 0;
                    var11 = var11 > var10;
                    var10 = undefined;
                    if(!var11) { _fun0009_ip = 42; continue _fun0009 }
case 43:
                    var10 = _closure2_slot18;
case 42:
                    var1['containerWidth'] = var10;
                    var9 = _closure2_slot24;
                    var1['isVisible'] = var9;
                    var1 = var8.bind(var7)(var6, var1);
                    _fun0009_ip = 44; continue _fun0009;
case 40:
                    var8 = _closure1_slot12;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 43;
                    var5 = var7[var5];
                    var7 = undefined;
                    var5 = var6.bind(var7)(var5);
                    var6 = var5.WishlistEmptyState;
                    var5 = {};
                    var1 = var8.bind(var7)(var6, var5);
case 44:
                    var2['children'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var16 = var9.bind(var16)(var6, var7);
            _closure2_slot29 = var16;
            var9 = _closure1_slot4;
            var7 = var9.useMemo;
            var6 = new Array(3);
            var6[0] = var21;
            var6[1] = var16;
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
                var10 = _closure1_slot12;
                var5 = _closure1_slot5;
                var1 = {};
                var9 = false;
                var1['scrollEnabled'] = var9;
                var7 = function onContentSizeChange(arg1, arg2) {
                    var5 = _closure2_slot23;
                    var4 = undefined;
                    var3 = 0;
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var1['onContentSizeChange'] = var7;
                var11 = _closure2_slot28;
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
                var4 = var4["7lZ31J"];
                var4 = var10.bind(var11)(var4);
                var2['label'] = var4;
                var4 = _closure1_slot12;
                var3 = {};
                var3['scrollEnabled'] = var9;
                var8 = function onContentSizeChange(arg1, arg2) {
                    var5 = _closure2_slot23;
                    var4 = undefined;
                    var3 = 1;
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var3['onContentSizeChange'] = var8;
                var7 = _closure2_slot29;
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
            var3['pageWidth'] = var12;
            var12 = _closure1_slot9;
            var16 = var12.WISHLIST;
            var12 = 0;
            if(!(var11 === var16)) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var12 = var23;
case 45:
            var3['defaultIndex'] = var12;
            var16 = _closure1_slot1;
            var31 = _closure1_slot2;
            var12 = 19;
            var12 = var31[var12];
            var12 = var16.bind(var4)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_24;
            var3['itemSpacing'] = var12;
            var3['items'] = var9;
            var3['onPageChange'] = var8;
            var21 = var6.bind(var7)(var3);
            _closure2_slot30 = var21;
            var7 = _closure1_slot4;
            var6 = var7.useRef;
            var3 = var21.setActiveIndex;
            var3 = var6.bind(var7)(var3);
            _closure2_slot31 = var3;
            var8 = _closure1_slot4;
            var7 = var8.useEffect;
            var6 = new Array(1);
            var6[0] = var21;
            var3 = function() {
                var2 = _closure2_slot31;
                var1 = _closure2_slot30;
                var1 = var1.setActiveIndex;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var3 = var7.bind(var8)(var3, var6);
            var6 = _closure1_slot0;
            var2 = var31[var2];
            var3 = var6.bind(var4)(var2);
            var2 = var3.useFocusEffect;
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var7 = new Array(2);
            var7[0] = var11;
            var7[1] = var10;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var5 = undefined;
                    if(!(var5 !== var3)) { _fun0010_ip = 47; continue _fun0010 }
case 48:
                    var4 = _closure2_slot4;
                    var2 = _closure1_slot9;
                    var3 = var2.WISHLIST;
                    var2 = 0;
                    if(!(var4 === var3)) { _fun0010_ip = 49; continue _fun0010 }
case 50:
                    var2 = 1;
case 49:
                    var _closure3_slot1 = var2;
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = function() {
                        var6 = _closure2_slot31;
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
case 47:
                    var1 = function() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var3 = _closure3_slot0;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0011_ip = 51; continue _fun0011 }
case 52:
                            var3 = global;
                            var4 = var3.clearTimeout;
                            var3 = _closure3_slot0;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
case 51:
                            var4 = _closure2_slot6;
                            var3 = var4.isFocused;
                            var3 = var3.bind(var4)();
                            if(var3) { _fun0011_ip = 53; continue _fun0011 }
case 54:
                            var4 = _closure2_slot6;
                            var3 = var4.getParent;
                            var4 = var3.bind(var4)();
                            var2 = var2 != var4;
                            if(!var2) { _fun0011_ip = 55; continue _fun0011 }
case 47:
                            var3 = var4.isFocused;
                            var2 = var3.bind(var4)();
case 55:
                            if(!var2) { _fun0011_ip = 53; continue _fun0011 }
case 56:
                            var3 = _closure2_slot6;
                            var2 = var3.setParams;
                            var1 = {};
                            var4 = _closure1_slot9;
                            var4 = var4.MAIN;
                            var1['initialTab'] = var4;
                            var1 = var2.bind(var3)(var1);
case 53:
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
            var1 = 45;
            var1 = var31[var1];
            var1 = var16.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var1['style'] = var5;
            var7 = _closure1_slot12;
            var5 = 46;
            var5 = var31[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.LayerScope;
            var5 = {};
            var10 = _closure1_slot14;
            var9 = _closure1_slot6;
            var8 = {};
            var12 = var17.profileContentWrapper;
            var11 = new Array(2);
            var11[0] = var12;
            var12 = {};
            var12['paddingTop'] = var13;
            var11[1] = var12;
            var8['style'] = var11;
            var13 = _closure1_slot12;
            var12 = _closure1_slot15;
            var11 = {};
            var11['user'] = var29;
            var11['backgroundColor'] = var14;
            var14 = {};
            var14['backgroundColor'] = var36;
            var11['statusStyle'] = var14;
            var12 = var13.bind(var4)(var12, var11);
            var11 = new Array(4);
            var11[0] = var12;
            var14 = _closure1_slot12;
            var12 = 47;
            var12 = var31[var12];
            var13 = var16.bind(var4)(var12);
            var12 = {};
            var12['ref'] = var34;
            var12['customStatusActivity'] = var33;
            var12['hasCustomProfileTheme'] = var26;
            var33 = var17.customStatusBubble;
            var26 = new Array(2);
            var26[0] = var33;
            var33 = var17.customStatusBubbleInset;
            var26[1] = var33;
            var12['style'] = var26;
            var26 = var17.emojiOnlyCustomStatusBubble;
            var12['emojiOnlyStyle'] = var26;
            var26 = true;
            var12['editEnabled'] = var26;
            var12['placeholderText'] = var32;
            var12['prompt'] = var25;
            var12 = var14.bind(var4)(var13, var12);
            var11[1] = var12;
            var13 = _closure1_slot14;
            var12 = {};
            var25 = var17.primaryInfo;
            var14 = new Array(2);
            var14[0] = var25;
            var25 = var17.profileContent;
            var14[1] = var25;
            var12['style'] = var14;
            var25 = _closure1_slot12;
            var14 = 48;
            var14 = var31[var14];
            var16 = var16.bind(var4)(var14);
            var14 = {};
            var14['user'] = var29;
            var31 = var19 == var30;
            var29 = undefined;
            if(var31) { _fun0002_ip = 57; continue _fun0002 }
case 58:
            var29 = var30.pronouns;
case 57:
            var14['pronouns'] = var29;
            var14['badges'] = var28;
            var14['badgeContainerBackground'] = var24;
            var14['onPressDisplayName'] = var20;
            var20 = _closure1_slot0;
            var24 = _closure1_slot2;
            var28 = 20;
            var29 = var24[var28];
            var29 = var20.bind(var4)(var29);
            var32 = var29.intl;
            var31 = var32.formatToPlainString;
            var29 = var24[var28];
            var29 = var20.bind(var4)(var29);
            var29 = var29.t;
            var30 = var29.er+FRD;
            var29 = {};
            var33 = 49;
            var33 = var24[var33];
            var34 = var20.bind(var4)(var33);
            var33 = var34.getStatusLabel;
            var33 = var33.bind(var34)(var35);
            var29['status'] = var33;
            var32 = var31.bind(var32)(var30, var29);
            var29 = var24[var28];
            var29 = var20.bind(var4)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var28 = var24[var28];
            var28 = var20.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.C6COaT;
            var31 = var29.bind(var30)(var28);
            var28 = global;
            var28 = var28.HermesInternal;
            var30 = var28.concat;
            var29 = '';
            var28 = ', ';
            var28 = var30.bind(var29)(var32, var28, var31);
            var14['displayNameAccessibilityHint'] = var28;
            var28 = _closure1_slot10;
            var28 = var28.YOU_SCREEN;
            var14['themeType'] = var28;
            var14['showChevron'] = var26;
            var16 = var25.bind(var4)(var16, var14);
            var14 = new Array(2);
            var14[0] = var16;
            var26 = _closure1_slot12;
            var25 = _closure1_slot16;
            var16 = {};
            var16['navigateToProfileCustomization'] = var27;
            var16 = var26.bind(var4)(var25, var16);
            var14[1] = var16;
            var12['children'] = var14;
            var12 = var13.bind(var4)(var9, var12);
            var11[2] = var12;
            var14 = _closure1_slot14;
            var13 = _closure1_slot6;
            var12 = {};
            var16 = {};
            var16['flex'] = var23;
            var12['style'] = var16;
            var12['onLayout'] = var15;
            var16 = _closure1_slot12;
            var15 = {};
            var17 = var17.profileTablist;
            var15['style'] = var17;
            var23 = _closure1_slot12;
            var17 = 50;
            var17 = var24[var17];
            var17 = var20.bind(var4)(var17);
            var20 = var17.Tabs;
            var17 = {};
            var17['state'] = var21;
            var17 = var23.bind(var4)(var20, var17);
            var15['children'] = var17;
            var16 = var16.bind(var4)(var13, var15);
            var15 = new Array(2);
            var15[0] = var16;
            var17 = _closure1_slot12;
            var16 = {};
            var20 = var19 != var22;
            var19 = undefined;
            if(!var20) { _fun0002_ip = 59; continue _fun0002 }
case 60:
            var20 = {};
            var20['height'] = var22;
            var19 = var20;
case 59:
            var16['style'] = var19;
            var20 = _closure1_slot12;
            var19 = _closure1_slot0;
            var22 = _closure1_slot2;
            var18 = 51;
            var18 = var22[var18];
            var18 = var19.bind(var4)(var18);
            var19 = var18.SegmentedControlPages;
            var18 = {};
            var18['state'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var16['children'] = var18;
            var16 = var17.bind(var4)(var13, var16);
            var15[1] = var16;
            var12['children'] = var15;
            var12 = var14.bind(var4)(var13, var12);
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