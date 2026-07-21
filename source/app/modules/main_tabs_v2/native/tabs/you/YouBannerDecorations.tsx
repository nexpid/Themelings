// app/modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var2 = function useHasSettingsBadge() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 10;
            var1 = var8[var1];
            var6 = undefined;
            var3 = var7.bind(var6)(var1);
            var1 = var3.useUnseenOutboundPromotions;
            var1 = var1.bind(var3)();
            var3 = var1.length;
            var1 = 0;
            var1 = var3 > var1;
            var3 = 11;
            var3 = var8[var3];
            var4 = var7.bind(var6)(var3);
            var3 = var4.useTrialOffer;
            var2 = _closure1_slot9;
            var3 = var3.bind(var4)(var2);
            var2 = null;
            var3 = var2 != var3;
            var2 = 12;
            var2 = var8[var2];
            var5 = var7.bind(var6)(var2);
            var4 = var5.useIsDismissibleContentDismissed_UNSAFE;
            var2 = 13;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.DismissibleContent;
            var2 = var2.TRIAL_FOR_ALL_2026_SETTINGS_BADGE;
            var2 = var4.bind(var5)(var2);
            var2 = !var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3;
case 2:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot14 = var2;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var8 = var5.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.View;
    var _closure1_slot4 = var10;
    var10 = var5.ActivityIndicator;
    var _closure1_slot5 = var10;
    var5 = var5.StyleSheet;
    var _closure1_slot6 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ContentDismissActionType;
    var _closure1_slot8 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot10 = var9;
    var9 = var5.Fragment;
    var _closure1_slot11 = var9;
    var5 = var5.jsxs;
    var _closure1_slot12 = var5;
    var5 = 6;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = function(arg1, arg2, arg3, arg4, arg5) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var4 = arg3;
            var1 = {};
            var2 = {};
            var6 = _closure1_slot6;
            var11 = var6.absoluteFillObject;
            var12 = var2;
            var5 = copyDataProperties(var12, var11);
            var8 = 10;
            var5 = 'zIndex';
            var2[4] = var8;
            var5 = 'paddingTop';
            var2[4] = var7;
            var1['container'] = var2;
            var2 = {};
            var11 = var6.absoluteFillObject;
            var12 = var2;
            var5 = copyDataProperties(var12, var11);
            var5 = undefined;
            var8 = 'top';
            var2[7] = var5;
            var9 = 'center';
            var8 = 'alignItems';
            var2[7] = var9;
            var1['containerFloatingWrap'] = var2;
            var2 = {};
            var11 = var6.absoluteFillObject;
            var12 = var2;
            var6 = copyDataProperties(var12, var11);
            var8 = arg4;
            var6 = 'color';
            var2[5] = var8;
            var1['containerFloatingGradient'] = var2;
            var2 = {};
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 7;
            var6 = var9[var6];
            var8 = var8.bind(var5)(var6);
            var6 = var8.isIOS;
            var8 = var6.bind(var8)();
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 8;
            var9 = var9[var6];
            var9 = var10.bind(var5)(var9);
            var9 = var9.space;
            if(var8) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var10 = var9.PX_4;
            var8 = arg2;
            var8 = var10 + var8;
            _fun0002_ip = 8; continue _fun0002;
case 6:
            var8 = var9.PX_24;
case 8:
            var2['marginBottom'] = var8;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = var10[var6];
            var8 = var9.bind(var5)(var8);
            var8 = var8.space;
            var8 = var8.PX_8;
            var2['paddingVertical'] = var8;
            var8 = var10[var6];
            var8 = var9.bind(var5)(var8);
            var8 = var8.space;
            var8 = var8.PX_24;
            var2['paddingHorizontal'] = var8;
            var9 = _closure1_slot0;
            var8 = 9;
            var8 = var10[var8];
            var10 = var9.bind(var5)(var8);
            var9 = var10.isMobileVisualRefreshEnabled;
            var8 = 'YouBannerDecorations';
            var8 = var9.bind(var10)(var8);
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var6];
            var9 = var10.bind(var5)(var9);
            var9 = var9.radii;
            if(var8) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var8 = var9.round;
            _fun0002_ip = 11; continue _fun0002;
case 9:
            var8 = var9.lg;
case 11:
            var2['borderRadius'] = var8;
            var8 = null;
            if(!(var8 == var4)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var6];
            var8 = var9.bind(var5)(var8);
            var8 = var8.colors;
            var4 = var8.BACKGROUND_SURFACE_HIGH;
case 12:
            var2['backgroundColor'] = var4;
            var4 = 'row';
            var2['flexDirection'] = var4;
            var4 = arg5;
            var2['borderColor'] = var4;
            var4 = 1;
            var2['borderWidth'] = var4;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var8 = var3[var6];
            var8 = var4.bind(var5)(var8);
            var8 = var8.shadows;
            var11 = var8.SHADOW_HIGH;
            var12 = var2;
            var8 = copyDataProperties(var12, var11);
            var1['containerFloating'] = var2;
            var2 = {'position': 'absolute', 'flexDirection': 'row', 'alignItems': 'center'};
            var8 = var3[var6];
            var8 = var4.bind(var5)(var8);
            var8 = var8.space;
            var8 = var8.PX_4;
            var2['top'] = var8;
            var8 = var3[var6];
            var8 = var4.bind(var5)(var8);
            var8 = var8.space;
            var8 = var8.PX_12;
            var2['right'] = var8;
            var2['paddingTop'] = var7;
            var1['buttons'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center'};
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.space;
            var3 = var3.PX_16;
            var2['gap'] = var3;
            var1['buttonsFloating'] = var2;
            var2 = {'height': '100%', 'alignItems': 'center', 'justifyContent': 'center'};
            var1['loading'] = var2;
            return var1;
        }
    };
    var5 = var9.bind(var10)(var5);
    var _closure1_slot13 = var5;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var3 = var2.isLoading;
            var23 = var2.navigateToSettings;
            var _closure2_slot0 = var23;
            var17 = var2.navigateToPremium;
            var _closure2_slot1 = var17;
            var15 = var2.navigateToShop;
            var20 = var2.shopButtonRef;
            var13 = var2.settingsButtonRef;
            var12 = var2.paddingTop;
            var5 = undefined;
            if(!(var12 === var5)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var12 = 0;
case 14:
            var11 = var2.paddingBottom;
            if(!(var11 === var5)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var11 = 0;
case 16:
            var8 = var2.backButton;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 14;
            var2 = var7[var2];
            var10 = var4.bind(var5)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var9.bind(var10)(var4, var2);
            var4 = _closure1_slot1;
            var2 = 15;
            var2 = var7[var2];
            var4 = var4.bind(var5)(var2);
            var9 = null;
            var7 = var9 == var10;
            var2 = undefined;
            if(var7) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var2 = var10.id;
case 18:
            var7 = var4.bind(var5)(var2);
            var4 = _closure1_slot1;
            var19 = _closure1_slot2;
            var2 = 16;
            var2 = var19[var2];
            var4 = var4.bind(var5)(var2);
            var2 = {};
            var2['user'] = var10;
            var2['displayProfile'] = var7;
            var4 = var4.bind(var5)(var2);
            var21 = var4.theme;
            var2 = var4.primaryColor;
            var16 = var4.secondaryColor;
            var18 = _closure1_slot0;
            var4 = 17;
            var4 = var19[var4];
            var10 = var18.bind(var5)(var4);
            var7 = var10.useUserProfileColors;
            var4 = {};
            var4['theme'] = var21;
            var4['primaryColor'] = var2;
            var4['secondaryColor'] = var16;
            var7 = var7.bind(var10)(var4);
            var4 = var7.containerBackground;
            var10 = var7.containerBorderColor;
            var7 = var7.gradientSecondaryBackground;
            _closure2_slot2 = var7;
            var14 = 9;
            var14 = var19[var14];
            var19 = var18.bind(var5)(var14);
            var18 = var19.isMobileVisualRefreshEnabled;
            var14 = 'YouBannerDecorations';
            var18 = var18.bind(var19)(var14);
            if(!var18) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var19 = _closure1_slot0;
            var22 = _closure1_slot2;
            var18 = 18;
            var18 = var22[var18];
            var19 = var19.bind(var5)(var18);
            var18 = var19.isThemeLight;
            var18 = var18.bind(var19)(var21);
            if(!var18) { _fun0003_ip = 20; continue _fun0003 }
case 22:
            var18 = var9 == var2;
            var2 = null;
            if(var18) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var16 = var9 == var16;
            var2 = null;
            if(var16) { _fun0003_ip = 23; continue _fun0003 }
case 20:
            var2 = var4;
case 23:
            _closure2_slot3 = var2;
            var22 = _closure1_slot3;
            var16 = var22.useMemo;
            var4 = new Array(2);
            var4[0] = var7;
            var4[1] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var3 = var1 == var3;
                    if(var3) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var8 = 19;
                    var3 = var11[var8];
                    var9 = undefined;
                    var7 = var10.bind(var9)(var3);
                    var6 = var7.mix;
                    var5 = _closure2_slot2;
                    var3 = var11[var8];
                    var4 = var10.bind(var9)(var3);
                    var3 = _closure2_slot3;
                    var12 = var4.bind(var9)(var3);
                    var3 = var12.hex;
                    var4 = 'rgb';
                    var15 = var3.bind(var12)(var4);
                    var8 = var11[var8];
                    var8 = var10.bind(var9)(var8);
                    var2 = _closure2_slot3;
                    var8 = var8.bind(var9)(var2);
                    var2 = var8.alpha;
                    var14 = var2.bind(var8)();
                    var17 = var7;
                    var16 = var5;
                    var13 = var4;
                    var3 = var17[var6](var16, var15, var14, var13, var12);
                    var2 = var3.hex;
                    var1 = var2.bind(var3)(var4);
case 25:
                    return var1;
                }
            };
            var30 = var16.bind(var22)(var2, var4);
            var2 = _closure1_slot13;
            var33 = undefined;
            var32 = var12;
            var31 = var11;
            var29 = var7;
            var28 = var10;
            var10 = var33[var2](var32, var31, var30, var29, var28, var27);
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var2 = 20;
            var2 = var21[var2];
            var4 = var19.bind(var5)(var2);
            var2 = var4.useHasPremiumSubscriptionToDisplay;
            var4 = var2.bind(var4)();
            var2 = _closure1_slot14;
            var2 = var2.bind(var5)();
            _closure2_slot4 = var2;
            var11 = _closure1_slot1;
            var7 = 21;
            var7 = var21[var7];
            var7 = var11.bind(var5)(var7);
            var11 = var7.bind(var5)();
            var7 = var11.showBadge;
            _closure2_slot5 = var7;
            var16 = var11.dismissBadge;
            _closure2_slot6 = var16;
            var11 = 22;
            var11 = var21[var11];
            var12 = var19.bind(var5)(var11);
            var11 = var12.getIsEligibleForQuests;
            var18 = var11.bind(var12)();
            var11 = 23;
            var11 = var21[var11];
            var12 = var19.bind(var5)(var11);
            var11 = var12.useMobileReferralSubscriberProfileEntrypointButtonConfig;
            var11 = var11.bind(var12)(var14);
            var14 = var11.enabled;
            var11 = var11.showReferralNotificationDot;
            var12 = 11;
            var12 = var21[var12];
            var21 = var19.bind(var5)(var12);
            var19 = var21.useTrialOffer;
            var12 = _closure1_slot9;
            var12 = var19.bind(var21)(var12);
            var12 = var9 != var12;
            _closure2_slot7 = var12;
            var21 = var22.useCallback;
            var19 = new Array(3);
            var19[0] = var2;
            var19[1] = var23;
            var19[2] = var12;
            var12 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 24;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.trackYouTabSettingsIconPress;
                    var4 = {};
                    var7 = _closure2_slot4;
                    var4['isBadged'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var4 = _closure2_slot0;
                    var4 = var4.bind(var1)();
                    var3 = _closure2_slot7;
                    if(!var3) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 12;
                    var4 = var8[var4];
                    var6 = var7.bind(var1)(var4);
                    var5 = var6.UNSAFE_isDismissibleContentDismissed;
                    var4 = 13;
                    var4 = var8[var4];
                    var4 = var7.bind(var1)(var4);
                    var4 = var4.DismissibleContent;
                    var4 = var4.TRIAL_FOR_ALL_2026_SETTINGS_BADGE;
                    var4 = var5.bind(var6)(var4);
                    var3 = !var4;
case 27:
                    if(!var3) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 12;
                    var2 = var6[var2];
                    var4 = var5.bind(var1)(var2);
                    var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
                    var2 = 13;
                    var2 = var6[var2];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.DismissibleContent;
                    var2 = var2.TRIAL_FOR_ALL_2026_SETTINGS_BADGE;
                    var2 = var3.bind(var4)(var2);
case 29:
                    return var1;
                }
            };
            var12 = var21.bind(var22)(var12, var19);
            var21 = var22.useCallback;
            var19 = new Array(1);
            var19[0] = var17;
            var17 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.trackYouTabNitroIconPress;
                var2 = var2.bind(var3)();
                var2 = _closure2_slot1;
                var2 = var2.bind(var1)();
                return var1;
            };
            var17 = var21.bind(var22)(var17, var19);
            var21 = var22.useCallback;
            var19 = new Array(2);
            var19[0] = var7;
            var19[1] = var16;
            var16 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                    var3 = _closure2_slot6;
                    var1 = _closure1_slot8;
                    var2 = var1.TAKE_ACTION;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 31:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 25;
                    var2 = var7[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var2);
                    var3 = var4.openQuestHome;
                    var2 = {};
                    var5 = 26;
                    var5 = var7[var5];
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.QuestContent;
                    var5 = var5.USER_PROFILE_HEADER;
                    var2['fromContent'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var22 = var21.bind(var22)(var16, var19);
            var16 = null;
            if(!var18) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var21 = _closure1_slot10;
            var19 = _closure1_slot1;
            var27 = _closure1_slot2;
            var18 = 27;
            var18 = var27[var18];
            var19 = var19.bind(var5)(var18);
            var18 = {};
            var26 = _closure1_slot0;
            var23 = 28;
            var23 = var27[var23];
            var23 = var26.bind(var5)(var23);
            var23 = var23.QuestsIcon;
            var18['IconComponent'] = var23;
            var23 = 29;
            var24 = var27[var23];
            var24 = var26.bind(var5)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var27[var23];
            var23 = var26.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.JALI2K;
            var23 = var24.bind(var25)(var23);
            var18['accessibilityLabel'] = var23;
            var18['onPress'] = var22;
            var18['showRedDot'] = var7;
            var7 = 'quests';
            var16 = var21.bind(var5)(var19, var18, var7);
case 33:
            var7 = new Array(4);
            var7[0] = var16;
            var19 = _closure1_slot10;
            var18 = _closure1_slot1;
            var21 = _closure1_slot2;
            var16 = 30;
            var16 = var21[var16];
            var18 = var18.bind(var5)(var16);
            var16 = {};
            var16['shopButtonRef'] = var20;
            var16['navigateToShop'] = var15;
            var15 = 'shop';
            var15 = var19.bind(var5)(var18, var16, var15);
            var7[1] = var15;
            if(var4) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var18 = _closure1_slot10;
            var15 = _closure1_slot1;
            var22 = _closure1_slot2;
            var4 = 27;
            var4 = var22[var4];
            var16 = var15.bind(var5)(var4);
            var15 = {};
            var21 = _closure1_slot0;
            var4 = 32;
            var4 = var22[var4];
            var4 = var21.bind(var5)(var4);
            var4 = var4.NitroWheelIcon;
            var15['IconComponent'] = var4;
            var4 = 29;
            var19 = var22[var4];
            var19 = var21.bind(var5)(var19);
            var23 = var19.intl;
            var20 = var23.string;
            var19 = var22[var4];
            var19 = var21.bind(var5)(var19);
            var19 = var19.t;
            var19 = var19.Ipxkog;
            var19 = var20.bind(var23)(var19);
            var15['accessibilityLabel'] = var19;
            var19 = var22[var4];
            var19 = var21.bind(var5)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var4 = var22[var4];
            var4 = var21.bind(var5)(var4);
            var4 = var4.t;
            var4 = var4.Ipxkog;
            var4 = var19.bind(var20)(var4);
            var15['label'] = var4;
            var15['onPress'] = var17;
            var4 = true;
            var15['showNitroSlant'] = var4;
            var4 = 'nitro';
            var4 = var18.bind(var5)(var16, var15, var4);
            _fun0003_ip = 37; continue _fun0003;
case 35:
            var9 = null;
            if(!var14) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var16 = _closure1_slot10;
            var15 = _closure1_slot1;
            var18 = _closure1_slot2;
            var14 = 31;
            var14 = var18[var14];
            var15 = var15.bind(var5)(var14);
            var14 = {};
            var14['onPress'] = var17;
            var14['showReferralNotificationDot'] = var11;
            var11 = 'nitro-subscriber';
            var9 = var16.bind(var5)(var15, var14, var11);
case 38:
            var4 = var9;
case 37:
            var7[2] = var4;
            var11 = _closure1_slot10;
            var9 = _closure1_slot1;
            var17 = _closure1_slot2;
            var4 = 27;
            var4 = var17[var4];
            var9 = var9.bind(var5)(var4);
            var4 = {};
            var4['ref'] = var13;
            var16 = _closure1_slot0;
            var13 = 33;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.SettingsIcon;
            var4['IconComponent'] = var13;
            var13 = 29;
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13["3D5yo/"];
            var13 = var14.bind(var15)(var13);
            var4['accessibilityLabel'] = var13;
            var4['onPress'] = var12;
            var4['showRedDot'] = var2;
            var2 = 'settings';
            var2 = var11.bind(var5)(var9, var4, var2);
            var7[3] = var2;
            var4 = var7.filter;
            var2 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var15 = var4.bind(var7)(var2);
            var9 = _closure1_slot12;
            var4 = _closure1_slot11;
            var2 = {};
            if(!var3) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var12 = _closure1_slot10;
            var11 = _closure1_slot4;
            var7 = {};
            var13 = var10.loading;
            var7['style'] = var13;
            var14 = _closure1_slot5;
            var13 = {};
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var16 = 34;
            var16 = var18[var16];
            var17 = var17.bind(var5)(var16);
            var16 = var17.isYouNavFloating;
            var17 = var16.bind(var17)();
            var16 = 'large';
            if(!var17) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var16 = 'small';
case 42:
            var13['size'] = var16;
            var13 = var12.bind(var5)(var14, var13);
            var7['children'] = var13;
            var3 = var12.bind(var5)(var11, var7);
case 40:
            var11 = new Array(2);
            var11[0] = var3;
            var14 = _closure1_slot10;
            var13 = _closure1_slot4;
            var12 = {};
            var16 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 34;
            var7 = var7[var3];
            var16 = var16.bind(var5)(var7);
            var7 = var16.isYouNavFloating;
            var7 = var7.bind(var16)();
            if(var7) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var7 = var10.buttons;
            _fun0003_ip = 46; continue _fun0003;
case 44:
            var7 = var10.buttonsFloating;
case 46:
            var12['style'] = var7;
            var7 = 'box-none';
            var12['pointerEvents'] = var7;
            var12['children'] = var15;
            var12 = var14.bind(var5)(var13, var12);
            var11[1] = var12;
            var2['children'] = var11;
            var9 = var9.bind(var5)(var4, var2);
            var2 = var10.containerFloatingGradient;
            var12 = var2.color;
            _closure2_slot8 = var12;
            var11 = _closure1_slot3;
            var4 = var11.useMemo;
            var2 = new Array(1);
            var2[0] = var12;
            var1 = function() {
                var1 = {};
                var10 = 0;
                var2 = {'x': 0, 'y': 0};
                var1['start'] = var2;
                var5 = 1;
                var2 = {'x': 0, 'y': 1};
                var1['end'] = var2;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 19;
                var2 = var8[var4];
                var6 = undefined;
                var9 = var7.bind(var6)(var2);
                var2 = _closure2_slot8;
                var9 = var9.bind(var6)(var2);
                var2 = var9.alpha;
                var9 = var2.bind(var9)(var10);
                var2 = var9.hex;
                var9 = var2.bind(var9)();
                var2 = new Array(2);
                var2[0] = var9;
                var4 = var8[var4];
                var4 = var7.bind(var6)(var4);
                var3 = _closure2_slot8;
                var4 = var4.bind(var6)(var3);
                var3 = var4.alpha;
                var4 = var3.bind(var4)(var5);
                var3 = var4.hex;
                var3 = var3.bind(var4)();
                var2[1] = var3;
                var1['colors'] = var2;
                return var1;
            };
            var11 = var4.bind(var11)(var1, var2);
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var2 = var2.bind(var5)(var1);
            var1 = var2.isYouNavFloating;
            var1 = var1.bind(var2)();
            var4 = _closure1_slot12;
            var3 = _closure1_slot4;
            var2 = {};
            if(var1) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var1 = var10.container;
            var2['style'] = var1;
            var2['pointerEvents'] = var7;
            var1 = new Array(2);
            var1[0] = var8;
            var1[1] = var9;
            var2['children'] = var1;
            var1 = var4.bind(var5)(var3, var2);
            _fun0003_ip = 49; continue _fun0003;
case 47:
            var8 = var10.containerFloatingWrap;
            var2['style'] = var8;
            var2['pointerEvents'] = var7;
            var8 = _closure1_slot10;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 35;
            var6 = var12[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var12 = var10.containerFloatingGradient;
            var6['style'] = var12;
            var32 = var6;
            var31 = var11;
            var11 = copyDataProperties(var32, var31);
            var12 = 'none';
            var11 = 'pointerEvents';
            var6[10] = var12;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var10 = var10.containerFloating;
            var7['style'] = var10;
            var7['children'] = var9;
            var7 = var8.bind(var5)(var3, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 49:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 36;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['useHasSettingsBadge'] = var2;
    return var1;
})();