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
                var1 = 10;
                var2 = var4[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var2 = var5.trackYouTabAvatarPress;
                var2 = var2.bind(var5)();
                var2 = 11;
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
            var2 = 12;
            var2 = var6[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.isAndroid;
            var5 = var2.bind(var3)();
            var3 = _closure1_slot13;
            var2 = _closure1_slot1;
            var1 = 13;
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
    var _closure1_slot16 = var1;
    var1 = function EditSection(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var8 = var2.navigateToProfileCustomization;
            var _closure2_slot0 = var8;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 14;
            var2 = var12[var2];
            var2 = var3.bind(var4)(var2);
            var14 = var2.bind(var4)();
            var9 = _closure1_slot0;
            var2 = 15;
            var2 = var12[var2];
            var3 = var9.bind(var4)(var2);
            var2 = var3.useUserProfileAnalyticsContext;
            var2 = var2.bind(var3)();
            var7 = var2.trackUserProfileAction;
            var _closure2_slot1 = var7;
            var5 = _closure1_slot4;
            var3 = var5.useRef;
            var2 = null;
            var11 = var3.bind(var5)(var2);
            var2 = 16;
            var2 = var12[var2];
            var5 = var9.bind(var4)(var2);
            var3 = var5.useIsDisplayNameStylesFlywheelSettersEnabled;
            var2 = 'YouScreenUserProfileContent';
            var10 = var3.bind(var5)(var2);
            var5 = _closure1_slot7;
            var2 = 17;
            var3 = var12[var2];
            var3 = var9.bind(var4)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS;
            var3 = var5.bind(var4)(var3);
            var5 = 18;
            var5 = var12[var5];
            var9 = var9.bind(var4)(var5);
            var5 = var9.useSelectedDismissibleContent;
            if(!var10) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 6:
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var2];
            var3 = var10.bind(var4)(var3);
            var3 = var3.DismissibleContent;
            var10 = var3.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK;
            var3 = new Array(1);
            var3[0] = var10;
            _fun0002_ip = 7; continue _fun0002;
case 4:
            var3 = new Array(0);
case 7:
            var9 = var5.bind(var9)(var3);
            var5 = _closure1_slot3;
            var3 = 2;
            var9 = var5.bind(var4)(var9, var3);
            var3 = 0;
            var3 = var9[var3];
            var5 = 1;
            var9 = var9[var5];
            _closure2_slot2 = var9;
            var21 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = var12[var2];
            var2 = var21.bind(var4)(var2);
            var2 = var2.DismissibleContent;
            var2 = var2.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK;
            var10 = var3 === var2;
            _closure2_slot3 = var10;
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(4);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var10;
            var2[3] = var9;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var2 = {};
                    var1 = 'EDIT_PROFILE';
                    var2['action'] = var1;
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 10;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.trackYouTabEditProfilePress;
                    var4 = var4.bind(var5)();
                    var4 = _closure2_slot0;
                    var4 = var4.bind(var1)();
                    var4 = _closure2_slot3;
                    if(!var4) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var3 = _closure2_slot2;
                    var2 = _closure1_slot12;
                    var2 = var2.TAKE_ACTION;
                    var2 = var3.bind(var1)(var2);
case 8:
                    return var1;
                }
            };
            var17 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot15;
            var2 = _closure1_slot14;
            var1 = {};
            var13 = _closure1_slot13;
            var7 = _closure1_slot1;
            var5 = 19;
            var5 = var12[var5];
            var8 = var7.bind(var4)(var5);
            var5 = {};
            var14 = var14.primaryButtons;
            var5['style'] = var14;
            var16 = _closure1_slot13;
            var14 = 20;
            var14 = var12[var14];
            var14 = var21.bind(var4)(var14);
            var15 = var14.Button;
            var14 = {};
            var14['ref'] = var11;
            var18 = 'primary';
            var14['variant'] = var18;
            var20 = _closure1_slot13;
            var18 = 21;
            var18 = var12[var18];
            var18 = var21.bind(var4)(var18);
            var19 = var18.PencilIcon;
            var18 = {};
            var22 = 'sm';
            var18['size'] = var22;
            var22 = 22;
            var22 = var12[var22];
            var22 = var7.bind(var4)(var22);
            var22 = var22.colors;
            var22 = var22.WHITE;
            var18['color'] = var22;
            var18 = var20.bind(var4)(var19, var18);
            var14['icon'] = var18;
            var18 = 23;
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
            var8 = _closure1_slot13;
            var6 = 24;
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
        }
    };
    var _closure1_slot17 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.useIsContentShown;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserProfileSections;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserProfileThemeTypes;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var7 = var4.Fragment;
    var _closure1_slot14 = var7;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 55;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/YouScreenUserProfileContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function YouScreenUserProfileContent(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var34 = var2.user;
            var _closure2_slot0 = var34;
            var5 = var2.style;
            var30 = var2.navigateToProfileCustomization;
            var8 = var2.navigateToFriends;
            var _closure2_slot1 = var8;
            var42 = var2.navigateToPremium;
            var _closure2_slot2 = var42;
            var35 = var2.navigateToShop;
            var _closure2_slot3 = var35;
            var11 = var2.initialTab;
            var _closure2_slot4 = var11;
            var14 = var2.animateAvatar;
            var4 = undefined;
            if(!(var14 === var4)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var14 = true;
case 10:
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
            var13 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 14;
            var2 = var6[var2];
            var2 = var13.bind(var4)(var2);
            var18 = var2.bind(var4)();
            _closure2_slot5 = var18;
            var7 = _closure1_slot0;
            var2 = 25;
            var3 = var6[var2];
            var9 = var7.bind(var4)(var3);
            var3 = var9.useNavigation;
            var10 = var3.bind(var9)();
            _closure2_slot6 = var10;
            var3 = 15;
            var3 = var6[var3];
            var9 = var7.bind(var4)(var3);
            var3 = var9.useUserProfileAnalyticsContext;
            var3 = var3.bind(var9)();
            var12 = var3.trackUserProfileAction;
            _closure2_slot7 = var12;
            var3 = 26;
            var3 = var6[var3];
            var9 = var13.bind(var4)(var3);
            var3 = var34.id;
            var33 = var9.bind(var4)(var3);
            _closure2_slot8 = var33;
            var3 = 27;
            var3 = var6[var3];
            var9 = var7.bind(var4)(var3);
            var3 = var9.useCustomStatusActivity;
            var29 = var3.bind(var9)();
            _closure2_slot9 = var29;
            var3 = 28;
            var3 = var6[var3];
            var3 = var13.bind(var4)(var3);
            var31 = var3.bind(var4)(var33);
            var3 = 29;
            var9 = var6[var3];
            var17 = var7.bind(var4)(var9);
            var16 = var17.useStateFromStores;
            var9 = _closure1_slot8;
            var15 = new Array(1);
            var15[0] = var9;
            var9 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var38 = var16.bind(var17)(var15, var9);
            var9 = 30;
            var9 = var6[var9];
            var15 = var13.bind(var4)(var9);
            var9 = 'YouScreenUserProfileContent';
            var43 = var15.bind(var4)(var9);
            _closure2_slot10 = var43;
            var9 = 31;
            var9 = var6[var9];
            var13 = var13.bind(var4)(var9);
            var9 = {};
            var9['user'] = var34;
            var9['displayProfile'] = var33;
            var9 = var13.bind(var4)(var9);
            var20 = var9.theme;
            var17 = var9.primaryColor;
            var16 = var9.secondaryColor;
            var32 = null;
            var27 = var32 != var17;
            _closure2_slot11 = var27;
            var9 = 32;
            var9 = var6[var9];
            var15 = var7.bind(var4)(var9);
            var13 = var15.useUserProfileColors;
            var9 = {};
            var9['theme'] = var20;
            var9['primaryColor'] = var17;
            var9['secondaryColor'] = var16;
            var9 = var13.bind(var15)(var9);
            var26 = var9.containerBackground;
            _closure2_slot12 = var26;
            var44 = var9.containerBorderColor;
            _closure2_slot13 = var44;
            var39 = var9.avatarBackground;
            var40 = var9.statusBackground;
            var13 = _closure1_slot4;
            var9 = var13.useRef;
            var37 = var9.bind(var13)(var32);
            var16 = _closure1_slot4;
            var15 = var16.useCallback;
            var13 = new Array(1);
            var13[0] = var12;
            var9 = function() {
                var3 = _closure2_slot7;
                var2 = {};
                var1 = 'PRESS_SET_STATUS';
                var2['action'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 11;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.showYouAccountActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var23 = var15.bind(var16)(var9, var13);
            var9 = 33;
            var9 = var6[var9];
            var13 = var7.bind(var4)(var9);
            var9 = var13.useVirtualCurrencyMobileEnabled;
            var9 = var9.bind(var13)();
            var24 = var9.enabled;
            _closure2_slot14 = var24;
            var13 = _closure1_slot4;
            var9 = var13.useState;
            var13 = var9.bind(var13)(var32);
            var9 = _closure1_slot3;
            var21 = 2;
            var9 = var9.bind(var4)(var13, var21);
            var13 = 0;
            var28 = var9[var13];
            var25 = 1;
            var16 = var9[var25];
            _closure2_slot15 = var16;
            var9 = 34;
            var9 = var6[var9];
            var15 = var7.bind(var4)(var9);
            var9 = var15.useShouldShowExpiringTrialOfferCard;
            var41 = var9.bind(var15)();
            _closure2_slot16 = var41;
            var3 = var6[var3];
            var17 = var7.bind(var4)(var3);
            var15 = var17.useStateFromStores;
            var3 = _closure1_slot9;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getFirstWishlistId;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var22 = var15.bind(var17)(var9, var3);
            _closure2_slot17 = var22;
            var9 = _closure1_slot4;
            var3 = var9.useState;
            var9 = var3.bind(var9)(var13);
            var3 = _closure1_slot3;
            var3 = var3.bind(var4)(var9, var21);
            var17 = var3[var13];
            _closure2_slot18 = var17;
            var3 = var3[var25];
            _closure2_slot19 = var3;
            var20 = _closure1_slot4;
            var15 = var20.useCallback;
            var9 = function(arg1) {
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
            var15 = var15.bind(var20)(var9, var3);
            var3 = 35;
            var6 = var6[var3];
            var7 = var7.bind(var4)(var6);
            var6 = var7.usePageHeights;
            var6 = var6.bind(var7)();
            var9 = var6.pageHeights;
            var6 = var6.handlePageContentSize;
            _closure2_slot20 = var6;
            var36 = _closure1_slot4;
            var20 = var36.useState;
            var7 = _closure1_slot10;
            var7 = var7.WISHLIST;
            var7 = var11 === var7;
            var20 = var20.bind(var36)(var7);
            var7 = _closure1_slot3;
            var20 = var7.bind(var4)(var20, var21);
            var7 = var20[var13];
            _closure2_slot21 = var7;
            var20 = var20[var25];
            _closure2_slot22 = var20;
            var36 = _closure1_slot4;
            var21 = var36.useCallback;
            var20 = new Array(1);
            var20[0] = var12;
            var12 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
                    var5 = _closure1_slot10;
                    if(var4) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                    var4 = var5.MAIN;
                    _fun0005_ip = 14; continue _fun0005;
case 12:
                    var4 = var5.WISHLIST;
case 14:
                    var2['section'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var12 = var21.bind(var36)(var12, var20);
            var36 = _closure1_slot4;
            var21 = var36.useCallback;
            var20 = new Array(2);
            var20[0] = var29;
            var20[1] = var16;
            var16 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot15;
                    var1 = _closure2_slot9;
                    var2 = null;
                    var1 = var2 == var1;
                    if(!var1) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 36;
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
            var16 = var21.bind(var36)(var16, var20);
            _closure2_slot23 = var16;
            var36 = _closure1_slot4;
            var21 = var36.useEffect;
            var20 = new Array(1);
            var20[0] = var16;
            var16 = function() {
                var1 = global;
                var3 = var1.setImmediate;
                var1 = undefined;
                var2 = function() {
                    var2 = _closure2_slot23;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var16 = var21.bind(var36)(var16, var20);
            var16 = var32 != var28;
            var36 = undefined;
            if(!var16) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var16 = var28.label;
            var36 = var16.bind(var28)();
case 17:
            var21 = _closure1_slot4;
            var20 = var21.useCallback;
            var16 = new Array(12);
            var16[0] = var26;
            var16[1] = var44;
            var16[2] = var43;
            var16[3] = var18;
            var16[4] = var42;
            var16[5] = var41;
            var16[6] = var35;
            var16[7] = var27;
            var16[8] = var24;
            var16[9] = var34;
            var16[10] = var33;
            var16[11] = var8;
            var8 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot10;
                    var1 = _closure2_slot5;
                    var3 = var1.card;
                    var1 = new Array(2);
                    var1[0] = var3;
                    if(var2) { _fun0007_ip = 19; continue _fun0007 }
case 20:
                    var2 = {};
                    var3 = _closure2_slot12;
                    var2['backgroundColor'] = var3;
                    var1[1] = var2;
                    var10 = var1;
                    _fun0007_ip = 21; continue _fun0007;
case 19:
                    var2 = {};
                    var3 = _closure2_slot12;
                    var2['backgroundColor'] = var3;
                    var3 = _closure2_slot13;
                    var2['borderColor'] = var3;
                    var3 = 1;
                    var2['borderWidth'] = var3;
                    var1[1] = var2;
                    var10 = var1;
case 21:
                    var4 = _closure1_slot15;
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
                    var8 = _closure1_slot13;
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 37;
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
                    if(!var7) { _fun0007_ip = 22; continue _fun0007 }
case 23:
                    var12 = _closure1_slot13;
                    var11 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var8 = 38;
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
case 22:
                    var5[1] = var7;
                    var7 = _closure2_slot14;
                    if(!var7) { _fun0007_ip = 24; continue _fun0007 }
case 25:
                    var12 = _closure1_slot13;
                    var11 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var8 = 39;
                    var8 = var13[var8];
                    var11 = var11.bind(var1)(var8);
                    var8 = {};
                    var8['style'] = var10;
                    var7 = var12.bind(var1)(var11, var8);
case 24:
                    var5[2] = var7;
                    var14 = _closure1_slot13;
                    var8 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var7 = 40;
                    var7 = var13[var7];
                    var11 = var8.bind(var1)(var7);
                    var7 = {};
                    var12 = _closure2_slot0;
                    var7['user'] = var12;
                    var7['currentUser'] = var12;
                    var7['style'] = var10;
                    var7 = var14.bind(var1)(var11, var7);
                    var5[3] = var7;
                    var11 = _closure1_slot13;
                    var7 = 41;
                    var7 = var13[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = {};
                    var12 = var12.id;
                    var7['userId'] = var12;
                    var12 = _closure2_slot8;
                    var7['displayProfile'] = var12;
                    var13 = _closure2_slot10;
                    var12 = undefined;
                    if(var13) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                    var12 = var10;
case 26:
                    var7['style'] = var12;
                    var7 = var11.bind(var1)(var8, var7);
                    var5[4] = var7;
                    var7 = _closure2_slot10;
                    if(!var7) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                    var12 = _closure1_slot13;
                    var11 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var8 = 42;
                    var8 = var13[var8];
                    var11 = var11.bind(var1)(var8);
                    var8 = {};
                    var7 = var12.bind(var1)(var11, var8);
case 28:
                    var5[5] = var7;
                    var11 = _closure1_slot13;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var12 = 43;
                    var7 = var7[var12];
                    var7 = var8.bind(var1)(var7);
                    var8 = var7.UserProfileAccountConnectionsCard;
                    var7 = {};
                    var13 = _closure2_slot0;
                    var13 = var13.id;
                    var7['userId'] = var13;
                    var14 = _closure2_slot10;
                    var13 = undefined;
                    if(var14) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                    var13 = var10;
case 30:
                    var7['style'] = var13;
                    var7 = var11.bind(var1)(var8, var7);
                    var5[6] = var7;
                    var11 = _closure1_slot13;
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
                    if(var13) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                    var12 = var10;
case 32:
                    var7['style'] = var12;
                    var7 = var11.bind(var1)(var8, var7);
                    var5[7] = var7;
                    var14 = _closure1_slot13;
                    var7 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var8 = 44;
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
                    var8 = _closure1_slot13;
                    var6 = 45;
                    var6 = var12[var6];
                    var7 = var7.bind(var1)(var6);
                    var6 = {};
                    var11 = var11.id;
                    var6['userId'] = var11;
                    var11 = _closure2_slot10;
                    var9 = undefined;
                    if(var11) { _fun0007_ip = 34; continue _fun0007 }
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
            var21 = var20.bind(var21)(var8, var16);
            _closure2_slot24 = var21;
            var20 = _closure1_slot4;
            var16 = var20.useCallback;
            var24 = var18.profileContent;
            var8 = new Array(4);
            var8[0] = var24;
            var8[1] = var22;
            var8[2] = var17;
            var8[3] = var7;
            var7 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = _closure1_slot13;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var1 = _closure2_slot5;
                    var1 = var1.profileContent;
                    var2['style'] = var1;
                    var6 = _closure2_slot17;
                    var1 = null;
                    if(!(var1 != var6)) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                    var8 = _closure1_slot13;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 46;
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
                    if(!var11) { _fun0008_ip = 38; continue _fun0008 }
case 8:
                    var10 = _closure2_slot18;
case 38:
                    var1['containerWidth'] = var10;
                    var9 = _closure2_slot21;
                    var1['isVisible'] = var9;
                    var1 = var8.bind(var7)(var6, var1);
                    _fun0008_ip = 39; continue _fun0008;
case 36:
                    var8 = _closure1_slot13;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 46;
                    var5 = var7[var5];
                    var7 = undefined;
                    var5 = var6.bind(var7)(var5);
                    var6 = var5.WishlistEmptyState;
                    var5 = {};
                    var1 = var8.bind(var7)(var6, var5);
case 39:
                    var2['children'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var20 = var16.bind(var20)(var7, var8);
            _closure2_slot25 = var20;
            var16 = _closure1_slot4;
            var8 = var16.useMemo;
            var7 = new Array(3);
            var7[0] = var21;
            var7[1] = var20;
            var7[2] = var6;
            var6 = function() {
                var2 = {};
                var1 = 'main';
                var2['id'] = var1;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var4 = 23;
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
                var10 = _closure1_slot13;
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
                var11 = _closure2_slot24;
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
                var4 = _closure1_slot13;
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
                var7 = _closure2_slot25;
                var7 = var7.bind(var6)();
                var3['children'] = var7;
                var3 = var4.bind(var6)(var5, var3);
                var2['page'] = var3;
                var1[1] = var2;
                return var1;
            };
            var16 = var8.bind(var16)(var6, var7);
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 47;
            var6 = var8[var6];
            var8 = var7.bind(var4)(var6);
            var7 = var8.useSegmentedControlState;
            var6 = {};
            var6['pageWidth'] = var17;
            var17 = _closure1_slot10;
            var20 = var17.WISHLIST;
            var17 = 0;
            if(!(var11 === var20)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var17 = var25;
case 40:
            var6['defaultIndex'] = var17;
            var17 = _closure1_slot1;
            var35 = _closure1_slot2;
            var20 = 22;
            var20 = var35[var20];
            var20 = var17.bind(var4)(var20);
            var20 = var20.space;
            var20 = var20.PX_24;
            var6['itemSpacing'] = var20;
            var6['items'] = var16;
            var6['onPageChange'] = var12;
            var22 = var7.bind(var8)(var6);
            _closure2_slot26 = var22;
            var6 = _closure1_slot0;
            var7 = var35[var3];
            var8 = var6.bind(var4)(var7);
            var7 = var8.usePagerFillHeight;
            var7 = var7.bind(var8)();
            var24 = var7.pagerRef;
            var8 = var7.fillHeight;
            var21 = var7.measureFill;
            var3 = var35[var3];
            var7 = var6.bind(var4)(var3);
            var3 = var7.usePagesHeightStyle;
            var20 = var3.bind(var7)(var22, var9, var8);
            var8 = _closure1_slot4;
            var7 = var8.useRef;
            var3 = var22.setActiveIndex;
            var3 = var7.bind(var8)(var3);
            _closure2_slot27 = var3;
            var9 = _closure1_slot4;
            var8 = var9.useEffect;
            var7 = new Array(1);
            var7[0] = var22;
            var3 = function() {
                var2 = _closure2_slot27;
                var1 = _closure2_slot26;
                var1 = var1.setActiveIndex;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var3 = var8.bind(var9)(var3, var7);
            var2 = var35[var2];
            var3 = var6.bind(var4)(var2);
            var2 = var3.useFocusEffect;
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var7 = new Array(2);
            var7[0] = var11;
            var7[1] = var10;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var5 = undefined;
                    if(!(var5 !== var3)) { _fun0009_ip = 9; continue _fun0009 }
case 42:
                    var4 = _closure2_slot4;
                    var2 = _closure1_slot10;
                    var3 = var2.WISHLIST;
                    var2 = 0;
                    if(!(var4 === var3)) { _fun0009_ip = 43; continue _fun0009 }
case 44:
                    var2 = 1;
case 43:
                    var _closure3_slot1 = var2;
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = function() {
                        var6 = _closure2_slot27;
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
case 9:
                    var1 = function() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var3 = _closure3_slot0;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0010_ip = 45; continue _fun0010 }
case 46:
                            var3 = global;
                            var4 = var3.clearTimeout;
                            var3 = _closure3_slot0;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
case 45:
                            var4 = _closure2_slot6;
                            var3 = var4.isFocused;
                            var3 = var3.bind(var4)();
                            if(var3) { _fun0010_ip = 47; continue _fun0010 }
case 48:
                            var4 = _closure2_slot6;
                            var3 = var4.getParent;
                            var4 = var3.bind(var4)();
                            var2 = var2 != var4;
                            if(!var2) { _fun0010_ip = 49; continue _fun0010 }
case 9:
                            var3 = var4.isFocused;
                            var2 = var3.bind(var4)();
case 49:
                            if(!var2) { _fun0010_ip = 47; continue _fun0010 }
case 50:
                            var3 = _closure2_slot6;
                            var2 = var3.setParams;
                            var1 = {};
                            var4 = _closure1_slot10;
                            var4 = var4.MAIN;
                            var1['initialTab'] = var4;
                            var1 = var2.bind(var3)(var1);
case 47:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var1 = var8.bind(var9)(var1, var7);
            var1 = var2.bind(var3)(var1);
            var3 = _closure1_slot13;
            var16 = 48;
            var1 = var35[var16];
            var1 = var17.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var1['style'] = var5;
            var7 = _closure1_slot13;
            var5 = 49;
            var5 = var35[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.LayerScope;
            var5 = {};
            var10 = _closure1_slot15;
            var9 = _closure1_slot6;
            var8 = {};
            var12 = var18.profileContentWrapper;
            var11 = new Array(2);
            var11[0] = var12;
            var12 = {};
            var12['paddingTop'] = var13;
            var11[1] = var12;
            var8['style'] = var11;
            var13 = _closure1_slot13;
            var12 = _closure1_slot16;
            var11 = {};
            var11['user'] = var34;
            var11['backgroundColor'] = var39;
            var39 = {};
            var39['backgroundColor'] = var40;
            var11['statusStyle'] = var39;
            var11['animate'] = var14;
            var12 = var13.bind(var4)(var12, var11);
            var11 = new Array(4);
            var11[0] = var12;
            var14 = _closure1_slot13;
            var12 = 50;
            var12 = var35[var12];
            var13 = var17.bind(var4)(var12);
            var12 = {};
            var12['ref'] = var37;
            var12['customStatusActivity'] = var29;
            var12['hasCustomProfileTheme'] = var27;
            var37 = var18.customStatusBubble;
            var29 = new Array(2);
            var29[0] = var37;
            var37 = var18.customStatusBubbleInset;
            var29[1] = var37;
            var12['style'] = var29;
            var29 = var18.emojiOnlyCustomStatusBubble;
            var12['emojiOnlyStyle'] = var29;
            var29 = true;
            var12['editEnabled'] = var29;
            var12['placeholderText'] = var36;
            var12['prompt'] = var28;
            var12 = var14.bind(var4)(var13, var12);
            var11[1] = var12;
            var13 = _closure1_slot15;
            var12 = {};
            var28 = var18.primaryInfo;
            var14 = new Array(2);
            var14[0] = var28;
            var28 = var18.profileContent;
            var14[1] = var28;
            var12['style'] = var14;
            var28 = _closure1_slot13;
            var14 = 51;
            var14 = var35[var14];
            var17 = var17.bind(var4)(var14);
            var14 = {};
            var14['user'] = var34;
            var34 = var32 == var33;
            var32 = undefined;
            if(var34) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var32 = var33.pronouns;
case 51:
            var14['pronouns'] = var32;
            var14['badges'] = var31;
            var14['badgeContainerBackground'] = var26;
            var14['onPressDisplayName'] = var23;
            var23 = _closure1_slot0;
            var26 = _closure1_slot2;
            var31 = 23;
            var32 = var26[var31];
            var32 = var23.bind(var4)(var32);
            var35 = var32.intl;
            var34 = var35.formatToPlainString;
            var32 = var26[var31];
            var32 = var23.bind(var4)(var32);
            var32 = var32.t;
            var33 = var32.er+FRD;
            var32 = {};
            var36 = 52;
            var36 = var26[var36];
            var37 = var23.bind(var4)(var36);
            var36 = var37.getStatusLabel;
            var36 = var36.bind(var37)(var38);
            var32['status'] = var36;
            var35 = var34.bind(var35)(var33, var32);
            var32 = var26[var31];
            var32 = var23.bind(var4)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var31 = var26[var31];
            var31 = var23.bind(var4)(var31);
            var31 = var31.t;
            var31 = var31.C6COaT;
            var34 = var32.bind(var33)(var31);
            var31 = global;
            var31 = var31.HermesInternal;
            var33 = var31.concat;
            var32 = '';
            var31 = ', ';
            var31 = var33.bind(var32)(var35, var31, var34);
            var14['displayNameAccessibilityHint'] = var31;
            var31 = _closure1_slot11;
            var31 = var31.YOU_SCREEN;
            var14['themeType'] = var31;
            var14['showChevron'] = var29;
            var17 = var28.bind(var4)(var17, var14);
            var14 = new Array(2);
            var14[0] = var17;
            var29 = _closure1_slot13;
            var28 = _closure1_slot17;
            var17 = {};
            var17['navigateToProfileCustomization'] = var30;
            var17 = var29.bind(var4)(var28, var17);
            var14[1] = var17;
            var12['children'] = var14;
            var12 = var13.bind(var4)(var9, var12);
            var11[2] = var12;
            var14 = _closure1_slot15;
            var13 = _closure1_slot6;
            var12 = {};
            var17 = {};
            var17['flex'] = var25;
            var12['style'] = var17;
            var12['onLayout'] = var15;
            var17 = _closure1_slot13;
            var15 = {};
            var18 = var18.profileTablist;
            var15['style'] = var18;
            var25 = _closure1_slot13;
            var18 = 53;
            var18 = var26[var18];
            var18 = var23.bind(var4)(var18);
            var23 = var18.Tabs;
            var18 = {};
            var18['state'] = var22;
            var26 = undefined;
            if(!var27) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            var26 = 'gradient-background';
case 53:
            var18['variant'] = var26;
            var18 = var25.bind(var4)(var23, var18);
            var15['children'] = var18;
            var17 = var17.bind(var4)(var13, var15);
            var15 = new Array(2);
            var15[0] = var17;
            var18 = _closure1_slot13;
            var17 = _closure1_slot1;
            var23 = _closure1_slot2;
            var16 = var23[var16];
            var16 = var17.bind(var4)(var16);
            var17 = var16.View;
            var16 = {};
            var16['ref'] = var24;
            var16['onLayout'] = var21;
            var16['style'] = var20;
            var21 = _closure1_slot13;
            var20 = _closure1_slot0;
            var19 = 54;
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