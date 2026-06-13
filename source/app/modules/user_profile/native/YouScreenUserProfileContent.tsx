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
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
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
            var7 = var4.bind(var5)(var3, var2);
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 11;
            var2 = var6[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.isAndroid;
            var5 = var2.bind(var3)();
            var3 = _closure1_slot12;
            var2 = _closure1_slot1;
            var1 = 12;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = arg1;
            var9 = var1;
            var6 = copyDataProperties(var9, var8);
            var6 = 'onPress';
            var1[5] = var7;
            var7 = 'no-hide-descendants';
            var6 = 'importantForAccessibility';
            var1[5] = var7;
            var6 = 'accessibilityElementsHidden';
            var1[5] = var5;
            var6 = !var5;
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = undefined;
case 2:
            var5 = 'accessible';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function EditSection(arg1) {
        var2 = arg1;
        var13 = var2.navigateToProfileCustomization;
        var _closure2_slot0 = var13;
        var7 = _closure1_slot1;
        var12 = _closure1_slot2;
        var2 = 13;
        var2 = var12[var2];
        var4 = undefined;
        var2 = var7.bind(var4)(var2);
        var14 = var2.bind(var4)();
        var21 = _closure1_slot0;
        var2 = 14;
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
        var2 = 15;
        var2 = var12[var2];
        var9 = var21.bind(var4)(var2);
        var5 = var9.useSelectedDismissibleContent;
        var2 = 16;
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
                if(!var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var3 = _closure2_slot2;
                var2 = _closure1_slot11;
                var2 = var2.TAKE_ACTION;
                var2 = var3.bind(var1)(var2);
case 4:
                return var1;
            }
        };
        var17 = var3.bind(var5)(var1, var2);
        var3 = _closure1_slot14;
        var2 = _closure1_slot13;
        var1 = {};
        var13 = _closure1_slot12;
        var5 = 17;
        var5 = var12[var5];
        var8 = var7.bind(var4)(var5);
        var5 = {};
        var14 = var14.primaryButtons;
        var5['style'] = var14;
        var16 = _closure1_slot12;
        var14 = 18;
        var14 = var12[var14];
        var14 = var21.bind(var4)(var14);
        var15 = var14.Button;
        var14 = {};
        var14['ref'] = var11;
        var18 = 'primary';
        var14['variant'] = var18;
        var20 = _closure1_slot12;
        var18 = 19;
        var18 = var12[var18];
        var18 = var21.bind(var4)(var18);
        var19 = var18.PencilIcon;
        var18 = {};
        var22 = 'sm';
        var18['size'] = var22;
        var22 = 20;
        var22 = var12[var22];
        var22 = var7.bind(var4)(var22);
        var22 = var22.colors;
        var22 = var22.WHITE;
        var18['color'] = var22;
        var18 = var20.bind(var4)(var19, var18);
        var14['icon'] = var18;
        var18 = 21;
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
        var6 = 22;
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
    var4 = 54;
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
            var9 = var2.navigateToFriends;
            var _closure2_slot1 = var9;
            var42 = var2.navigateToPremium;
            var _closure2_slot2 = var42;
            var40 = var2.navigateToShop;
            var _closure2_slot3 = var40;
            var11 = var2.initialTab;
            var _closure2_slot4 = var11;
            var14 = var2.animateAvatar;
            var4 = undefined;
            if(!(var14 === var4)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var14 = true;
case 6:
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
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var _closure2_slot19 = var4;
            var _closure2_slot20 = var4;
            var _closure2_slot21 = var4;
            var _closure2_slot22 = var4;
            var _closure2_slot23 = var4;
            var _closure2_slot24 = var4;
            var _closure2_slot25 = var4;
            var _closure2_slot26 = var4;
            var _closure2_slot27 = var4;
            var _closure2_slot28 = var4;
            var7 = _closure1_slot1;
            var21 = _closure1_slot2;
            var2 = 13;
            var2 = var21[var2];
            var2 = var7.bind(var4)(var2);
            var18 = var2.bind(var4)();
            _closure2_slot5 = var18;
            var22 = _closure1_slot0;
            var2 = 23;
            var3 = var21[var2];
            var6 = var22.bind(var4)(var3);
            var3 = var6.useNavigation;
            var10 = var3.bind(var6)();
            _closure2_slot6 = var10;
            var3 = 14;
            var3 = var21[var3];
            var6 = var22.bind(var4)(var3);
            var3 = var6.useUserProfileAnalyticsContext;
            var3 = var3.bind(var6)();
            var12 = var3.trackUserProfileAction;
            _closure2_slot7 = var12;
            var3 = 24;
            var3 = var21[var3];
            var6 = var7.bind(var4)(var3);
            var3 = var31.id;
            var30 = var6.bind(var4)(var3);
            _closure2_slot8 = var30;
            var3 = 25;
            var3 = var21[var3];
            var6 = var22.bind(var4)(var3);
            var3 = var6.useCustomStatusActivity;
            var34 = var3.bind(var6)();
            _closure2_slot9 = var34;
            var3 = 26;
            var3 = var21[var3];
            var3 = var7.bind(var4)(var3);
            var28 = var3.bind(var4)(var30);
            var3 = 27;
            var6 = var21[var3];
            var15 = var22.bind(var4)(var6);
            var13 = var15.useStateFromStores;
            var6 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var35 = var13.bind(var15)(var8, var6);
            var6 = 28;
            var6 = var21[var6];
            var6 = var7.bind(var4)(var6);
            var46 = 'YouScreenUserProfileContent';
            var43 = var6.bind(var4)(var46);
            _closure2_slot10 = var43;
            var6 = 29;
            var6 = var21[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['user'] = var31;
            var6['displayProfile'] = var30;
            var6 = var7.bind(var4)(var6);
            var16 = var6.theme;
            var15 = var6.primaryColor;
            var13 = var6.secondaryColor;
            var29 = null;
            var26 = var29 != var15;
            _closure2_slot11 = var26;
            var6 = 30;
            var6 = var21[var6];
            var8 = var22.bind(var4)(var6);
            var7 = var8.useUserProfileColors;
            var6 = {};
            var6['theme'] = var16;
            var6['primaryColor'] = var15;
            var6['secondaryColor'] = var13;
            var6 = var7.bind(var8)(var6);
            var23 = var6.containerBackground;
            _closure2_slot12 = var23;
            var44 = var6.containerBorderColor;
            _closure2_slot13 = var44;
            var37 = var6.avatarBackground;
            var38 = var6.statusBackground;
            var7 = _closure1_slot4;
            var6 = var7.useRef;
            var36 = var6.bind(var7)(var29);
            var13 = _closure1_slot4;
            var8 = var13.useCallback;
            var7 = new Array(1);
            var7[0] = var12;
            var6 = function() {
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
            var20 = var8.bind(var13)(var6, var7);
            var6 = 31;
            var6 = var21[var6];
            var7 = var22.bind(var4)(var6);
            var6 = var7.useVirtualCurrencyMobileEnabled;
            var6 = var6.bind(var7)();
            var39 = var6.enabled;
            _closure2_slot14 = var39;
            var7 = _closure1_slot4;
            var6 = var7.useState;
            var7 = var6.bind(var7)(var29);
            var6 = _closure1_slot3;
            var45 = 2;
            var6 = var6.bind(var4)(var7, var45);
            var13 = 0;
            var25 = var6[var13];
            var24 = 1;
            var33 = var6[var24];
            _closure2_slot15 = var33;
            var6 = 32;
            var6 = var21[var6];
            var7 = var22.bind(var4)(var6);
            var6 = var7.useShouldShowExpiringTrialOfferCard;
            var41 = var6.bind(var7)();
            _closure2_slot16 = var41;
            var3 = var21[var3];
            var8 = var22.bind(var4)(var3);
            var7 = var8.useStateFromStores;
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
            var32 = var7.bind(var8)(var6, var3);
            _closure2_slot17 = var32;
            var6 = _closure1_slot4;
            var3 = var6.useState;
            var6 = var3.bind(var6)(var13);
            var3 = _closure1_slot3;
            var3 = var3.bind(var4)(var6, var45);
            var17 = var3[var13];
            _closure2_slot18 = var17;
            var3 = var3[var24];
            _closure2_slot19 = var3;
            var8 = _closure1_slot4;
            var7 = var8.useCallback;
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
            var15 = var7.bind(var8)(var6, var3);
            var3 = 33;
            var6 = var21[var3];
            var7 = var22.bind(var4)(var6);
            var6 = var7.usePageHeights;
            var6 = var6.bind(var7)();
            var8 = var6.pageHeights;
            var6 = var6.handlePageContentSize;
            _closure2_slot20 = var6;
            var47 = _closure1_slot4;
            var16 = var47.useState;
            var7 = _closure1_slot9;
            var7 = var7.WISHLIST;
            var7 = var11 === var7;
            var16 = var16.bind(var47)(var7);
            var7 = _closure1_slot3;
            var16 = var7.bind(var4)(var16, var45);
            var7 = var16[var13];
            _closure2_slot21 = var7;
            var16 = var16[var24];
            _closure2_slot22 = var16;
            var47 = _closure1_slot4;
            var45 = var47.useCallback;
            var16 = new Array(1);
            var16[0] = var12;
            var12 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot22;
                    var4 = 1;
                    var1 = arg1;
                    var4 = var4 === var1;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var4);
                    var3 = _closure2_slot7;
                    var2 = {};
                    var5 = 'PRESS_SECTION';
                    var2['action'] = var5;
                    var5 = _closure1_slot9;
                    if(var4) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var4 = var5.MAIN;
                    _fun0004_ip = 10; continue _fun0004;
case 8:
                    var4 = var5.WISHLIST;
case 10:
                    var2['section'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var12 = var45.bind(var47)(var12, var16);
            var16 = 34;
            var16 = var21[var16];
            var45 = var22.bind(var4)(var16);
            var16 = var45.useYouBarEnabled;
            var16 = var16.bind(var45)(var46);
            _closure2_slot23 = var16;
            var47 = _closure1_slot4;
            var46 = var47.useCallback;
            var45 = new Array(2);
            var45[0] = var34;
            var45[1] = var33;
            var33 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot15;
                    var1 = _closure2_slot9;
                    var2 = null;
                    var1 = var2 == var1;
                    if(!var1) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 35;
                    var1 = var4[var1];
                    var4 = undefined;
                    var1 = var5.bind(var4)(var1);
                    var2 = var1.bind(var4)();
case 11:
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var45 = var46.bind(var47)(var33, var45);
            _closure2_slot24 = var45;
            var21 = var21[var2];
            var33 = var22.bind(var4)(var21);
            var22 = var33.useFocusEffect;
            var48 = _closure1_slot4;
            var47 = var48.useCallback;
            var46 = new Array(2);
            var46[0] = var45;
            var46[1] = var16;
            var21 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot23;
                    if(var2) { _fun0006_ip = 12; continue _fun0006 }
case 13:
                    var2 = _closure2_slot24;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 12:
                    var1 = undefined;
                    return var1;
                }
            };
            var21 = var47.bind(var48)(var21, var46);
            var21 = var22.bind(var33)(var21);
            var33 = _closure1_slot4;
            var22 = var33.useEffect;
            var21 = new Array(2);
            var21[0] = var45;
            var21[1] = var16;
            var16 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot23;
                    if(!var1) { _fun0007_ip = 14; continue _fun0007 }
case 13:
                    var1 = global;
                    var3 = var1.setImmediate;
                    var2 = undefined;
                    var1 = function() {
                        var2 = _closure2_slot24;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var1 = var3.bind(var2)(var1);
case 14:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var22.bind(var33)(var16, var21);
            var16 = var29 != var25;
            var33 = undefined;
            if(!var16) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var16 = var25.label;
            var33 = var16.bind(var25)();
case 15:
            var22 = _closure1_slot4;
            var21 = var22.useCallback;
            var16 = new Array(12);
            var16[0] = var23;
            var16[1] = var44;
            var16[2] = var43;
            var16[3] = var18;
            var16[4] = var42;
            var16[5] = var41;
            var16[6] = var40;
            var16[7] = var26;
            var16[8] = var39;
            var16[9] = var31;
            var16[10] = var30;
            var16[11] = var9;
            var9 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot10;
                    var1 = _closure2_slot5;
                    var3 = var1.card;
                    var1 = new Array(2);
                    var1[0] = var3;
                    if(var2) { _fun0008_ip = 17; continue _fun0008 }
case 18:
                    var2 = {};
                    var3 = _closure2_slot12;
                    var2['backgroundColor'] = var3;
                    var1[1] = var2;
                    var10 = var1;
                    _fun0008_ip = 19; continue _fun0008;
case 17:
                    var2 = {};
                    var3 = _closure2_slot12;
                    var2['backgroundColor'] = var3;
                    var3 = _closure2_slot13;
                    var2['borderColor'] = var3;
                    var3 = 1;
                    var2['borderWidth'] = var3;
                    var1[1] = var2;
                    var10 = var1;
case 19:
                    var4 = _closure1_slot14;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var1 = _closure2_slot5;
                    var5 = var1.cards;
                    var1 = new Array(2);
                    var1[0] = var5;
                    var5 = _closure2_slot5;
                    var5 = var5.profileContent;
                    var1[1] = var5;
                    var2['style'] = var1;
                    var8 = _closure1_slot12;
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 36;
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
                    if(!var7) { _fun0008_ip = 20; continue _fun0008 }
case 21:
                    var12 = _closure1_slot12;
                    var11 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var8 = 37;
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
case 20:
                    var5[1] = var7;
                    var7 = _closure2_slot14;
                    if(!var7) { _fun0008_ip = 22; continue _fun0008 }
case 23:
                    var12 = _closure1_slot12;
                    var11 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var8 = 38;
                    var8 = var13[var8];
                    var11 = var11.bind(var1)(var8);
                    var8 = {};
                    var8['style'] = var10;
                    var7 = var12.bind(var1)(var11, var8);
case 22:
                    var5[2] = var7;
                    var11 = _closure1_slot12;
                    var8 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var7 = 39;
                    var7 = var12[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = {};
                    var12 = _closure2_slot0;
                    var7['user'] = var12;
                    var7['currentUser'] = var12;
                    var13 = _closure2_slot10;
                    var12 = undefined;
                    if(var13) { _fun0008_ip = 24; continue _fun0008 }
case 25:
                    var12 = var10;
case 24:
                    var7['style'] = var12;
                    var7 = var11.bind(var1)(var8, var7);
                    var5[3] = var7;
                    var11 = _closure1_slot12;
                    var8 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var7 = 40;
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
                    if(var13) { _fun0008_ip = 26; continue _fun0008 }
case 27:
                    var12 = var10;
case 26:
                    var7['style'] = var12;
                    var7 = var11.bind(var1)(var8, var7);
                    var5[4] = var7;
                    var7 = _closure2_slot10;
                    if(!var7) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                    var12 = _closure1_slot12;
                    var11 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var8 = 41;
                    var8 = var13[var8];
                    var11 = var11.bind(var1)(var8);
                    var8 = {};
                    var7 = var12.bind(var1)(var11, var8);
case 28:
                    var5[5] = var7;
                    var11 = _closure1_slot12;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var12 = 42;
                    var7 = var7[var12];
                    var7 = var8.bind(var1)(var7);
                    var8 = var7.UserProfileAccountConnectionsCard;
                    var7 = {};
                    var13 = _closure2_slot0;
                    var13 = var13.id;
                    var7['userId'] = var13;
                    var14 = _closure2_slot10;
                    var13 = undefined;
                    if(var14) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                    var13 = var10;
case 30:
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
                    if(var13) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                    var12 = var10;
case 32:
                    var7['style'] = var12;
                    var7 = var11.bind(var1)(var8, var7);
                    var5[7] = var7;
                    var14 = _closure1_slot12;
                    var7 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var8 = 43;
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
                    var6 = 44;
                    var6 = var12[var6];
                    var7 = var7.bind(var1)(var6);
                    var6 = {};
                    var11 = var11.id;
                    var6['userId'] = var11;
                    var11 = _closure2_slot10;
                    var9 = undefined;
                    if(var11) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                    var9 = var10;
case 34:
                    var6['style'] = var9;
                    var6 = var8.bind(var1)(var7, var6);
                    var5[9] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var22 = var21.bind(var22)(var9, var16);
            _closure2_slot25 = var22;
            var21 = _closure1_slot4;
            var16 = var21.useCallback;
            var39 = var18.profileContent;
            var9 = new Array(4);
            var9[0] = var39;
            var9[1] = var32;
            var9[2] = var17;
            var9[3] = var7;
            var7 = function() {
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
                    if(!(var1 != var6)) { _fun0009_ip = 36; continue _fun0009 }
case 37:
                    var8 = _closure1_slot12;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 45;
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
                    if(!var11) { _fun0009_ip = 38; continue _fun0009 }
case 39:
                    var10 = _closure2_slot18;
case 38:
                    var1['containerWidth'] = var10;
                    var9 = _closure2_slot21;
                    var1['isVisible'] = var9;
                    var1 = var8.bind(var7)(var6, var1);
                    _fun0009_ip = 40; continue _fun0009;
case 36:
                    var8 = _closure1_slot12;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 45;
                    var5 = var7[var5];
                    var7 = undefined;
                    var5 = var6.bind(var7)(var5);
                    var6 = var5.WishlistEmptyState;
                    var5 = {};
                    var1 = var8.bind(var7)(var6, var5);
case 40:
                    var2['children'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var21 = var16.bind(var21)(var7, var9);
            _closure2_slot26 = var21;
            var16 = _closure1_slot4;
            var9 = var16.useMemo;
            var7 = new Array(3);
            var7[0] = var22;
            var7[1] = var21;
            var7[2] = var6;
            var6 = function() {
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
                    var5 = _closure2_slot20;
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
                var4 = var4["7lZ31J"];
                var4 = var10.bind(var11)(var4);
                var2['label'] = var4;
                var4 = _closure1_slot12;
                var3 = {};
                var3['scrollEnabled'] = var9;
                var8 = function onContentSizeChange(arg1, arg2) {
                    var5 = _closure2_slot20;
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
            var16 = var9.bind(var16)(var6, var7);
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 46;
            var6 = var9[var6];
            var9 = var7.bind(var4)(var6);
            var7 = var9.useSegmentedControlState;
            var6 = {};
            var6['pageWidth'] = var17;
            var17 = _closure1_slot9;
            var21 = var17.WISHLIST;
            var17 = 0;
            if(!(var11 === var21)) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var17 = var24;
case 41:
            var6['defaultIndex'] = var17;
            var17 = _closure1_slot1;
            var32 = _closure1_slot2;
            var21 = 20;
            var21 = var32[var21];
            var21 = var17.bind(var4)(var21);
            var21 = var21.space;
            var21 = var21.PX_24;
            var6['itemSpacing'] = var21;
            var6['items'] = var16;
            var6['onPageChange'] = var12;
            var22 = var7.bind(var9)(var6);
            _closure2_slot27 = var22;
            var6 = _closure1_slot0;
            var3 = var32[var3];
            var7 = var6.bind(var4)(var3);
            var3 = var7.usePagesHeightStyle;
            var21 = var3.bind(var7)(var22, var8);
            var8 = _closure1_slot4;
            var7 = var8.useRef;
            var3 = var22.setActiveIndex;
            var3 = var7.bind(var8)(var3);
            _closure2_slot28 = var3;
            var9 = _closure1_slot4;
            var8 = var9.useEffect;
            var7 = new Array(1);
            var7[0] = var22;
            var3 = function() {
                var2 = _closure2_slot28;
                var1 = _closure2_slot27;
                var1 = var1.setActiveIndex;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var3 = var8.bind(var9)(var3, var7);
            var2 = var32[var2];
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
                    if(!(var5 !== var3)) { _fun0010_ip = 43; continue _fun0010 }
case 44:
                    var4 = _closure2_slot4;
                    var2 = _closure1_slot9;
                    var3 = var2.WISHLIST;
                    var2 = 0;
                    if(!(var4 === var3)) { _fun0010_ip = 45; continue _fun0010 }
case 46:
                    var2 = 1;
case 45:
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
case 43:
                    var1 = function() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var3 = _closure3_slot0;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0011_ip = 47; continue _fun0011 }
case 48:
                            var3 = global;
                            var4 = var3.clearTimeout;
                            var3 = _closure3_slot0;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
case 47:
                            var4 = _closure2_slot6;
                            var3 = var4.isFocused;
                            var3 = var3.bind(var4)();
                            if(var3) { _fun0011_ip = 49; continue _fun0011 }
case 50:
                            var4 = _closure2_slot6;
                            var3 = var4.getParent;
                            var4 = var3.bind(var4)();
                            var2 = var2 != var4;
                            if(!var2) { _fun0011_ip = 51; continue _fun0011 }
case 43:
                            var3 = var4.isFocused;
                            var2 = var3.bind(var4)();
case 51:
                            if(!var2) { _fun0011_ip = 49; continue _fun0011 }
case 52:
                            var3 = _closure2_slot6;
                            var2 = var3.setParams;
                            var1 = {};
                            var4 = _closure1_slot9;
                            var4 = var4.MAIN;
                            var1['initialTab'] = var4;
                            var1 = var2.bind(var3)(var1);
case 49:
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
            var16 = 47;
            var1 = var32[var16];
            var1 = var17.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var1['style'] = var5;
            var7 = _closure1_slot12;
            var5 = 48;
            var5 = var32[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.LayerScope;
            var5 = {};
            var10 = _closure1_slot14;
            var9 = _closure1_slot6;
            var8 = {};
            var12 = var18.profileContentWrapper;
            var11 = new Array(2);
            var11[0] = var12;
            var12 = {};
            var12['paddingTop'] = var13;
            var11[1] = var12;
            var8['style'] = var11;
            var13 = _closure1_slot12;
            var12 = _closure1_slot15;
            var11 = {};
            var11['user'] = var31;
            var11['backgroundColor'] = var37;
            var37 = {};
            var37['backgroundColor'] = var38;
            var11['statusStyle'] = var37;
            var11['animate'] = var14;
            var12 = var13.bind(var4)(var12, var11);
            var11 = new Array(4);
            var11[0] = var12;
            var14 = _closure1_slot12;
            var12 = 49;
            var12 = var32[var12];
            var13 = var17.bind(var4)(var12);
            var12 = {};
            var12['ref'] = var36;
            var12['customStatusActivity'] = var34;
            var12['hasCustomProfileTheme'] = var26;
            var34 = var18.customStatusBubble;
            var26 = new Array(2);
            var26[0] = var34;
            var34 = var18.customStatusBubbleInset;
            var26[1] = var34;
            var12['style'] = var26;
            var26 = var18.emojiOnlyCustomStatusBubble;
            var12['emojiOnlyStyle'] = var26;
            var26 = true;
            var12['editEnabled'] = var26;
            var12['placeholderText'] = var33;
            var12['prompt'] = var25;
            var12 = var14.bind(var4)(var13, var12);
            var11[1] = var12;
            var13 = _closure1_slot14;
            var12 = {};
            var25 = var18.primaryInfo;
            var14 = new Array(2);
            var14[0] = var25;
            var25 = var18.profileContent;
            var14[1] = var25;
            var12['style'] = var14;
            var25 = _closure1_slot12;
            var14 = 50;
            var14 = var32[var14];
            var17 = var17.bind(var4)(var14);
            var14 = {};
            var14['user'] = var31;
            var31 = var29 == var30;
            var29 = undefined;
            if(var31) { _fun0003_ip = 53; continue _fun0003 }
case 54:
            var29 = var30.pronouns;
case 53:
            var14['pronouns'] = var29;
            var14['badges'] = var28;
            var14['badgeContainerBackground'] = var23;
            var14['onPressDisplayName'] = var20;
            var20 = _closure1_slot0;
            var23 = _closure1_slot2;
            var28 = 21;
            var29 = var23[var28];
            var29 = var20.bind(var4)(var29);
            var32 = var29.intl;
            var31 = var32.formatToPlainString;
            var29 = var23[var28];
            var29 = var20.bind(var4)(var29);
            var29 = var29.t;
            var30 = var29.er+FRD;
            var29 = {};
            var33 = 51;
            var33 = var23[var33];
            var34 = var20.bind(var4)(var33);
            var33 = var34.getStatusLabel;
            var33 = var33.bind(var34)(var35);
            var29['status'] = var33;
            var32 = var31.bind(var32)(var30, var29);
            var29 = var23[var28];
            var29 = var20.bind(var4)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var28 = var23[var28];
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
            var17 = var25.bind(var4)(var17, var14);
            var14 = new Array(2);
            var14[0] = var17;
            var26 = _closure1_slot12;
            var25 = _closure1_slot16;
            var17 = {};
            var17['navigateToProfileCustomization'] = var27;
            var17 = var26.bind(var4)(var25, var17);
            var14[1] = var17;
            var12['children'] = var14;
            var12 = var13.bind(var4)(var9, var12);
            var11[2] = var12;
            var14 = _closure1_slot14;
            var13 = _closure1_slot6;
            var12 = {};
            var17 = {};
            var17['flex'] = var24;
            var12['style'] = var17;
            var12['onLayout'] = var15;
            var17 = _closure1_slot12;
            var15 = {};
            var18 = var18.profileTablist;
            var15['style'] = var18;
            var25 = _closure1_slot12;
            var18 = 52;
            var18 = var23[var18];
            var18 = var20.bind(var4)(var18);
            var24 = var18.Tabs;
            var18 = {};
            var18['state'] = var22;
            var18 = var25.bind(var4)(var24, var18);
            var15['children'] = var18;
            var17 = var17.bind(var4)(var13, var15);
            var15 = new Array(2);
            var15[0] = var17;
            var18 = _closure1_slot12;
            var17 = _closure1_slot1;
            var16 = var23[var16];
            var16 = var17.bind(var4)(var16);
            var17 = var16.View;
            var16 = {};
            var16['style'] = var21;
            var21 = _closure1_slot12;
            var19 = 53;
            var19 = var23[var19];
            var19 = var20.bind(var4)(var19);
            var20 = var19.SegmentedControlPages;
            var19 = {};
            var19['state'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var16['children'] = var19;
            var16 = var18.bind(var4)(var17, var16);
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