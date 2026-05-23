// app/modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var7;
    var2 = function useHasSettingsBadge() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 12;
            var1 = var8[var1];
            var6 = undefined;
            var3 = var7.bind(var6)(var1);
            var1 = var3.useUnseenOutboundPromotions;
            var1 = var1.bind(var3)();
            var3 = var1.length;
            var1 = 0;
            var1 = var3 > var1;
            var3 = 13;
            var3 = var8[var3];
            var4 = var7.bind(var6)(var3);
            var3 = var4.useTrialOffer;
            var2 = _closure1_slot12;
            var3 = var3.bind(var4)(var2);
            var2 = null;
            var3 = var2 != var3;
            var2 = 14;
            var2 = var8[var2];
            var5 = var7.bind(var6)(var2);
            var4 = var5.UNSAFE_useIsDismissibleContentDismissed;
            var2 = 15;
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
    var _closure1_slot17 = var2;
    var1 = function SubscriberNitroIcon(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var10 = var1.onPress;
            var _closure2_slot0 = var10;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var4 = 16;
            var1 = var1[var4];
            var6 = var2.bind(var5)(var1);
            var2 = var6.useMobileReferralSubscriberProfileEntrypointButtonConfig;
            var1 = 'YouBannerDecorations';
            var1 = var2.bind(var6)(var1);
            var2 = var1.enabled;
            var1 = var1.showReferralNotificationDot;
            var6 = var2;
            if(!var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = var1;
case 6:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 17;
            var1 = var9[var1];
            var9 = var7.bind(var5)(var1);
            var7 = var9.useIsEligibleSenderForReferralProgram;
            var1 = !var6;
            var1 = var7.bind(var9)(var1);
            if(!var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var6 = var1;
case 8:
            _closure2_slot1 = var6;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 18;
            var1 = var11[var1];
            var14 = var9.bind(var5)(var1);
            var13 = var14.useStateFromStores;
            var1 = _closure1_slot8;
            var12 = new Array(1);
            var12[0] = var1;
            var7 = new Array(1);
            var7[0] = var6;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getReferralsRemaining;
                var1 = {};
                var4 = _closure2_slot1;
                var4 = !var4;
                var1['bypassFetch'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var13.bind(var14)(var12, var1, var7);
            var1 = 19;
            var1 = var11[var1];
            var13 = var9.bind(var5)(var1);
            var12 = var13.useSelectedTimeRecurringDismissibleContent;
            var1 = null;
            var11 = null;
            if(!var6) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var1 != var7;
            var11 = null;
            if(!var6) { _fun0002_ip = 10; continue _fun0002 }
case 12:
            var6 = 0;
            var6 = var7 > var6;
            var11 = null;
            if(!var6) { _fun0002_ip = 10; continue _fun0002 }
case 13:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 15;
            var6 = var9[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.DismissibleContent;
            var11 = var6.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
case 10:
            var6 = {};
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = var9[var4];
            var4 = var7.bind(var5)(var4);
            var4 = var4.REFERRAL_NITRO_BUTTON_RED_DOT_COOLDOWN_MS;
            var6['cooldownDurationMs'] = var4;
            var15 = true;
            var19 = var13;
            var18 = var11;
            var17 = var6;
            var16 = undefined;
            var11 = var19[var12](var18, var17, var16, var15, var14);
            var6 = _closure1_slot3;
            var4 = 2;
            var11 = var6.bind(var5)(var11, var4);
            var4 = 0;
            var6 = var11[var4];
            var4 = 1;
            var11 = var11[var4];
            _closure2_slot2 = var11;
            var4 = 15;
            var4 = var9[var4];
            var4 = var7.bind(var5)(var4);
            var4 = var4.DismissibleContent;
            var4 = var4.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
            var6 = var6 === var4;
            _closure2_slot3 = var6;
            var9 = _closure1_slot4;
            var7 = var9.useCallback;
            var4 = new Array(3);
            var4[0] = var6;
            var4[1] = var11;
            var4[2] = var10;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var4 = _closure2_slot2;
                    var2 = _closure1_slot11;
                    var3 = var2.TAKE_ACTION;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = _closure1_slot9;
                    var3 = var4.setState;
                    var2 = {};
                    var5 = _closure1_slot10;
                    var5 = var5.REFERRAL_PROGRAM;
                    var2['scrollToSectionId'] = var5;
                    var2 = var3.bind(var4)(var2);
case 14:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var7 = var7.bind(var9)(var3, var4);
            var1 = null;
            if(!var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var4 = _closure1_slot13;
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 20;
            var2 = var12[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var11 = _closure1_slot0;
            var8 = 21;
            var8 = var12[var8];
            var8 = var11.bind(var5)(var8);
            var8 = var8.NitroWheelIcon;
            var2['IconComponent'] = var8;
            var8 = 22;
            var9 = var12[var8];
            var9 = var11.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.Ipxkog;
            var8 = var9.bind(var10)(var8);
            var2['accessibilityLabel'] = var8;
            var2['onPress'] = var7;
            var2['showRedDot'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 16:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var10.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportAll;
    var8 = var5.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.View;
    var _closure1_slot5 = var9;
    var9 = var5.ActivityIndicator;
    var _closure1_slot6 = var9;
    var5 = var5.StyleSheet;
    var _closure1_slot7 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var10.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 4;
    var9 = var7[var5];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot9 = var9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.NitroHomeSectionId;
    var _closure1_slot10 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ContentDismissActionType;
    var _closure1_slot11 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
    var _closure1_slot12 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot13 = var9;
    var9 = var5.jsxs;
    var _closure1_slot14 = var9;
    var5 = var5.Fragment;
    var _closure1_slot15 = var5;
    var5 = 8;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = function(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var7 = arg1;
            var9 = arg3;
            var1 = {};
            var2 = {};
            var4 = _closure1_slot7;
            var13 = var4.absoluteFillObject;
            var14 = var2;
            var5 = copyDataProperties(var14, var13);
            var6 = 10;
            var5 = 'zIndex';
            var2[4] = var6;
            var5 = 'paddingTop';
            var2[4] = var7;
            var1['container'] = var2;
            var2 = {};
            var13 = var4.absoluteFillObject;
            var14 = var2;
            var5 = copyDataProperties(var14, var13);
            var5 = undefined;
            var8 = 'top';
            var2[7] = var5;
            var10 = 'center';
            var8 = 'alignItems';
            var2[7] = var10;
            var1['containerFloatingWrap'] = var2;
            var2 = {};
            var13 = var4.absoluteFillObject;
            var14 = var2;
            var4 = copyDataProperties(var14, var13);
            var4 = null;
            if(!(var4 == var9)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var10 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var6];
            var8 = var10.bind(var5)(var8);
            var8 = var8.colors;
            var10 = var8.BACKGROUND_BASE_LOW;
            _fun0004_ip = 20; continue _fun0004;
case 18:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var8 = 9;
            var8 = var12[var8];
            var8 = var11.bind(var5)(var8);
            var12 = var8.bind(var5)(var9);
            var11 = var12.darken;
            var8 = 0.1;
            var11 = var11.bind(var12)(var8);
            var8 = var11.hex;
            var10 = var8.bind(var11)();
case 20:
            var8 = 'color';
            var2[7] = var10;
            var1['containerFloatingGradient'] = var2;
            var2 = {};
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 11;
            var8 = var11[var8];
            var10 = var10.bind(var5)(var8);
            var8 = var10.isIOS;
            var8 = var8.bind(var10)();
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var10 = var10[var6];
            var10 = var11.bind(var5)(var10);
            var10 = var10.spacing;
            if(var8) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var11 = var10.PX_4;
            var8 = arg2;
            var8 = var11 + var8;
            _fun0004_ip = 23; continue _fun0004;
case 21:
            var8 = var10.PX_24;
case 23:
            var2['marginBottom'] = var8;
            var10 = _closure1_slot1;
            var8 = _closure1_slot2;
            var11 = var8[var6];
            var11 = var10.bind(var5)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_8;
            var2['paddingVertical'] = var11;
            var11 = var8[var6];
            var11 = var10.bind(var5)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_24;
            var2['paddingHorizontal'] = var11;
            var8 = var8[var6];
            var8 = var10.bind(var5)(var8);
            var8 = var8.radii;
            var8 = var8.round;
            var2['borderRadius'] = var8;
            var8 = var9;
            if(!(var4 == var8)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var10 = var10[var6];
            var10 = var11.bind(var5)(var10);
            var10 = var10.colors;
            var8 = var10.CARD_BACKGROUND_DEFAULT;
case 24:
            var2['backgroundColor'] = var8;
            var8 = 'row';
            var2['flexDirection'] = var8;
            if(!(var4 == var9)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var8 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var6];
            var4 = var8.bind(var5)(var4);
            var4 = var4.colors;
            var4 = var4.BORDER_MUTED;
            _fun0004_ip = 28; continue _fun0004;
case 26:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 9;
            var8 = var11[var8];
            var8 = var10.bind(var5)(var8);
            var10 = var8.bind(var5)(var9);
            var9 = var10.brighten;
            var8 = 0.2;
            var9 = var9.bind(var10)(var8);
            var8 = var9.hex;
            var4 = var8.bind(var9)();
case 28:
            var2['borderColor'] = var4;
            var4 = 1;
            var2['borderWidth'] = var4;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var8 = var3[var6];
            var8 = var4.bind(var5)(var8);
            var8 = var8.shadows;
            var13 = var8.SHADOW_HIGH;
            var14 = var2;
            var8 = copyDataProperties(var14, var13);
            var1['containerFloating'] = var2;
            var2 = {'position': 'absolute', 'flexDirection': 'row', 'alignItems': 'center'};
            var8 = var3[var6];
            var8 = var4.bind(var5)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_4;
            var2['top'] = var8;
            var8 = var3[var6];
            var8 = var4.bind(var5)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_12;
            var2['right'] = var8;
            var2['paddingTop'] = var7;
            var1['buttons'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center'};
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_16;
            var2['gap'] = var3;
            var1['buttonsFloating'] = var2;
            var2 = {'height': '100%', 'alignItems': 'center', 'justifyContent': 'center'};
            var1['loading'] = var2;
            return var1;
        }
    };
    var5 = var9.bind(var10)(var5);
    var _closure1_slot16 = var5;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var3 = var1.isLoading;
            var14 = var1.navigateToSettings;
            var _closure2_slot0 = var14;
            var8 = var1.navigateToPremium;
            var _closure2_slot1 = var8;
            var23 = var1.navigateToShop;
            var24 = var1.shopButtonRef;
            var2 = var1.settingsButtonRef;
            var11 = var1.paddingTop;
            var5 = undefined;
            if(!(var11 === var5)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var11 = 0;
case 29:
            var10 = var1.paddingBottom;
            if(!(var10 === var5)) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var10 = 0;
case 31:
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var9 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 23;
            var1 = var12[var1];
            var1 = var9.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var6 = var1.primaryColor;
            var1 = _closure1_slot16;
            var10 = var1.bind(var5)(var11, var10, var6);
            var11 = _closure1_slot0;
            var1 = 24;
            var1 = var12[var1];
            var6 = var11.bind(var5)(var1);
            var1 = var6.useHasPremiumSubscriptionToDisplay;
            var1 = var1.bind(var6)();
            var6 = _closure1_slot17;
            var20 = var6.bind(var5)();
            _closure2_slot2 = var20;
            var6 = 25;
            var6 = var12[var6];
            var6 = var9.bind(var5)(var6);
            var6 = var6.bind(var5)();
            var25 = var6.showBadge;
            _closure2_slot3 = var25;
            var6 = var6.dismissBadge;
            _closure2_slot4 = var6;
            var9 = 26;
            var9 = var12[var9];
            var13 = var11.bind(var5)(var9);
            var9 = var13.getIsEligibleForQuests;
            var16 = var9.bind(var13)();
            var9 = 13;
            var9 = var12[var9];
            var12 = var11.bind(var5)(var9);
            var11 = var12.useTrialOffer;
            var9 = _closure1_slot12;
            var9 = var11.bind(var12)(var9);
            var17 = null;
            var9 = var17 != var9;
            _closure2_slot5 = var9;
            var13 = _closure1_slot4;
            var12 = var13.useCallback;
            var11 = new Array(3);
            var11[0] = var20;
            var11[1] = var14;
            var11[2] = var9;
            var9 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 27;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.trackYouTabSettingsIconPress;
                    var4 = {};
                    var7 = _closure2_slot2;
                    var4['isBadged'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var4 = _closure2_slot0;
                    var4 = var4.bind(var1)();
                    var3 = _closure2_slot5;
                    if(!var3) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 14;
                    var4 = var8[var4];
                    var6 = var7.bind(var1)(var4);
                    var5 = var6.UNSAFE_isDismissibleContentDismissed;
                    var4 = 15;
                    var4 = var8[var4];
                    var4 = var7.bind(var1)(var4);
                    var4 = var4.DismissibleContent;
                    var4 = var4.TRIAL_FOR_ALL_2026_SETTINGS_BADGE;
                    var4 = var5.bind(var6)(var4);
                    var3 = !var4;
case 33:
                    if(!var3) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 14;
                    var2 = var6[var2];
                    var4 = var5.bind(var1)(var2);
                    var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
                    var2 = 15;
                    var2 = var6[var2];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.DismissibleContent;
                    var2 = var2.TRIAL_FOR_ALL_2026_SETTINGS_BADGE;
                    var2 = var3.bind(var4)(var2);
case 35:
                    return var1;
                }
            };
            var21 = var12.bind(var13)(var9, var11);
            var12 = _closure1_slot4;
            var11 = var12.useCallback;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 27;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.trackYouTabNitroIconPress;
                var2 = var2.bind(var3)();
                var2 = _closure2_slot1;
                var2 = var2.bind(var1)();
                return var1;
            };
            var22 = var11.bind(var12)(var8, var9);
            var11 = _closure1_slot4;
            var9 = var11.useCallback;
            var8 = new Array(2);
            var8[0] = var25;
            var8[1] = var6;
            var6 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0007_ip = 37; continue _fun0007 }
case 15:
                    var3 = _closure2_slot4;
                    var1 = _closure1_slot11;
                    var2 = var1.TAKE_ACTION;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 37:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 28;
                    var2 = var7[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var2);
                    var3 = var4.openQuestHome;
                    var2 = {};
                    var5 = 29;
                    var5 = var7[var5];
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.QuestContent;
                    var5 = var5.USER_PROFILE_HEADER;
                    var2['fromContent'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var26 = var9.bind(var11)(var6, var8);
            var11 = _closure1_slot14;
            var9 = _closure1_slot15;
            var8 = {};
            if(!var3) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var13 = _closure1_slot13;
            var12 = _closure1_slot5;
            var6 = {};
            var14 = var10.loading;
            var6['style'] = var14;
            var18 = _closure1_slot13;
            var15 = _closure1_slot6;
            var14 = {};
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var19 = 30;
            var19 = var28[var19];
            var27 = var27.bind(var5)(var19);
            var19 = var27.isYouNavFloating;
            var27 = var19.bind(var27)();
            var19 = 'large';
            if(!var27) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var19 = 'small';
case 40:
            var14['size'] = var19;
            var14 = var18.bind(var5)(var15, var14);
            var6['children'] = var14;
            var3 = var13.bind(var5)(var12, var6);
case 38:
            var12 = new Array(2);
            var12[0] = var3;
            var15 = _closure1_slot14;
            var14 = _closure1_slot5;
            var13 = {};
            var18 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 30;
            var6 = var6[var3];
            var18 = var18.bind(var5)(var6);
            var6 = var18.isYouNavFloating;
            var6 = var6.bind(var18)();
            if(var6) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var6 = var10.buttons;
            _fun0005_ip = 44; continue _fun0005;
case 42:
            var6 = var10.buttonsFloating;
case 44:
            var13['style'] = var6;
            var6 = 'box-none';
            var13['pointerEvents'] = var6;
            var17 = null;
            if(!var16) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var19 = _closure1_slot13;
            var18 = _closure1_slot1;
            var31 = _closure1_slot2;
            var16 = 20;
            var16 = var31[var16];
            var18 = var18.bind(var5)(var16);
            var16 = {};
            var30 = _closure1_slot0;
            var27 = 31;
            var27 = var31[var27];
            var27 = var30.bind(var5)(var27);
            var27 = var27.QuestsIcon;
            var16['IconComponent'] = var27;
            var27 = 22;
            var28 = var31[var27];
            var28 = var30.bind(var5)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var27 = var31[var27];
            var27 = var30.bind(var5)(var27);
            var27 = var27.t;
            var27 = var27.JALI2K;
            var27 = var28.bind(var29)(var27);
            var16['accessibilityLabel'] = var27;
            var16['onPress'] = var26;
            var16['showRedDot'] = var25;
            var17 = var19.bind(var5)(var18, var16);
case 45:
            var16 = new Array(4);
            var16[0] = var17;
            var19 = _closure1_slot13;
            var18 = _closure1_slot1;
            var25 = _closure1_slot2;
            var17 = 32;
            var17 = var25[var17];
            var18 = var18.bind(var5)(var17);
            var17 = {};
            var17['shopButtonRef'] = var24;
            var17['navigateToShop'] = var23;
            var17 = var19.bind(var5)(var18, var17);
            var16[1] = var17;
            var19 = _closure1_slot13;
            if(var1) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var17 = _closure1_slot1;
            var26 = _closure1_slot2;
            var1 = 20;
            var1 = var26[var1];
            var17 = var17.bind(var5)(var1);
            var1 = {};
            var25 = _closure1_slot0;
            var18 = 21;
            var18 = var26[var18];
            var18 = var25.bind(var5)(var18);
            var18 = var18.NitroWheelIcon;
            var1['IconComponent'] = var18;
            var18 = 22;
            var23 = var26[var18];
            var23 = var25.bind(var5)(var23);
            var27 = var23.intl;
            var24 = var27.string;
            var23 = var26[var18];
            var23 = var25.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.Ipxkog;
            var23 = var24.bind(var27)(var23);
            var1['accessibilityLabel'] = var23;
            var23 = var26[var18];
            var23 = var25.bind(var5)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var18 = var26[var18];
            var18 = var25.bind(var5)(var18);
            var18 = var18.t;
            var18 = var18.Ipxkog;
            var18 = var23.bind(var24)(var18);
            var1['label'] = var18;
            var1['onPress'] = var22;
            var18 = true;
            var1['showNitroSlant'] = var18;
            var1 = var19.bind(var5)(var17, var1);
            _fun0005_ip = 49; continue _fun0005;
case 47:
            var18 = _closure1_slot18;
            var17 = {};
            var17['onPress'] = var22;
            var1 = var19.bind(var5)(var18, var17);
case 49:
            var16[2] = var1;
            var19 = _closure1_slot13;
            var18 = _closure1_slot1;
            var1 = _closure1_slot2;
            var17 = 20;
            var17 = var1[var17];
            var18 = var18.bind(var5)(var17);
            var17 = {};
            var17['ref'] = var2;
            var2 = _closure1_slot0;
            var22 = 33;
            var22 = var1[var22];
            var22 = var2.bind(var5)(var22);
            var22 = var22.SettingsIcon;
            var17['IconComponent'] = var22;
            var22 = 22;
            var23 = var1[var22];
            var23 = var2.bind(var5)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var1[var22];
            var22 = var2.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22["3D5yo/"];
            var22 = var23.bind(var24)(var22);
            var17['accessibilityLabel'] = var22;
            var17['onPress'] = var21;
            var17['showRedDot'] = var20;
            var17 = var19.bind(var5)(var18, var17);
            var16[3] = var17;
            var13['children'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[1] = var13;
            var8['children'] = var12;
            var9 = var11.bind(var5)(var9, var8);
            var8 = var10.containerFloatingGradient;
            var13 = var8.color;
            _closure2_slot6 = var13;
            var12 = _closure1_slot4;
            var11 = var12.useMemo;
            var8 = new Array(1);
            var8[0] = var13;
            var4 = function() {
                var1 = {};
                var10 = 0;
                var2 = {'x': 0, 'y': 0};
                var1['start'] = var2;
                var5 = 1;
                var2 = {'x': 0, 'y': 1};
                var1['end'] = var2;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 9;
                var2 = var8[var4];
                var6 = undefined;
                var9 = var7.bind(var6)(var2);
                var2 = _closure2_slot6;
                var9 = var9.bind(var6)(var2);
                var2 = var9.alpha;
                var9 = var2.bind(var9)(var10);
                var2 = var9.hex;
                var9 = var2.bind(var9)();
                var2 = new Array(2);
                var2[0] = var9;
                var4 = var8[var4];
                var4 = var7.bind(var6)(var4);
                var3 = _closure2_slot6;
                var4 = var4.bind(var6)(var3);
                var3 = var4.alpha;
                var4 = var3.bind(var4)(var5);
                var3 = var4.hex;
                var3 = var3.bind(var4)();
                var2[1] = var3;
                var1['colors'] = var2;
                return var1;
            };
            var12 = var11.bind(var12)(var4, var8);
            var1 = var1[var3];
            var2 = var2.bind(var5)(var1);
            var1 = var2.isYouNavFloating;
            var1 = var1.bind(var2)();
            if(var1) { _fun0005_ip = 50; continue _fun0005 }
case 51:
            var3 = _closure1_slot13;
            var2 = _closure1_slot5;
            var1 = {};
            var4 = var10.container;
            var1['style'] = var4;
            var1['pointerEvents'] = var6;
            var1['children'] = var9;
            var1 = var3.bind(var5)(var2, var1);
            _fun0005_ip = 52; continue _fun0005;
case 50:
            var4 = _closure1_slot14;
            var3 = _closure1_slot5;
            var2 = {};
            var8 = var10.containerFloatingWrap;
            var2['style'] = var8;
            var2['pointerEvents'] = var6;
            var11 = _closure1_slot13;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var6 = 34;
            var6 = var13[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var13 = var10.containerFloatingGradient;
            var6['style'] = var13;
            var34 = var6;
            var33 = var12;
            var12 = copyDataProperties(var34, var33);
            var13 = 'none';
            var12 = 'pointerEvents';
            var6[11] = var13;
            var8 = var11.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var8 = _closure1_slot13;
            var7 = {};
            var10 = var10.containerFloating;
            var7['style'] = var10;
            var7['children'] = var9;
            var7 = var8.bind(var5)(var3, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 52:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 35;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['useHasSettingsBadge'] = var2;
    return var1;
})();