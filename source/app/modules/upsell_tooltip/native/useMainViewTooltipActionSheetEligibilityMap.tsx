// app/modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PermissionPromptType;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserSettingsTypes;
    var _closure1_slot11 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMainViewTooltipActionSheetMap() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var14 = _closure1_slot0;
            var18 = _closure1_slot2;
            var11 = 9;
            var1 = var18[var11];
            var9 = undefined;
            var5 = var14.bind(var9)(var1);
            var4 = var5.useStateFromStores;
            var1 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.hasLoaded;
                var1 = _closure1_slot11;
                var1 = var1.PRELOADED_USER_SETTINGS;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var4.bind(var5)(var3, var1);
            var3 = _closure1_slot1;
            var1 = 10;
            var1 = var18[var1];
            var4 = var3.bind(var9)(var1);
            var3 = var4.getConfig;
            var1 = {};
            var19 = 'MainViewTooltipActionSheets';
            var1['location'] = var19;
            var1 = var3.bind(var4)(var1);
            var3 = var1.disabled;
            var1 = var18[var11];
            var6 = var14.bind(var9)(var1);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot9;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var2 = _closure1_slot9;
                var1 = var2.hasAction;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var5.bind(var6)(var4, var1);
            var4 = var18[var11];
            var8 = var14.bind(var9)(var4);
            var6 = var8.useStateFromStoresArray;
            var4 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var2 = _closure1_slot6;
                var3 = var2.shouldShowGooglePlayPriceChange;
                var1 = new Array(2);
                var1[0] = var3;
                var2 = var2.priceChangeRecord;
                var1[1] = var2;
                return var1;
            };
            var6 = var6.bind(var8)(var5, var4);
            var5 = _closure1_slot3;
            var4 = 2;
            var5 = var5.bind(var9)(var6, var4);
            var6 = 0;
            var13 = var5[var6];
            var4 = 1;
            var26 = var5[var4];
            var4 = 11;
            var4 = var18[var4];
            var5 = var14.bind(var9)(var4);
            var4 = var5.useSelectedDiscountOfferActionSheet;
            var4 = var4.bind(var5)();
            var24 = var4.discountOffer;
            var22 = var4.discountOfferDismissibleContent;
            var4 = 12;
            var4 = var18[var4];
            var8 = var14.bind(var9)(var4);
            var5 = var8.usePromotionMarketingComponent;
            var4 = 13;
            var4 = var18[var4];
            var4 = var14.bind(var9)(var4);
            var4 = var4.MarketingComponentType;
            var4 = var4.MOBILE_BOTTOM_SHEET;
            var23 = var5.bind(var8)(var4);
            var5 = 14;
            var4 = var18[var5];
            var15 = var14.bind(var9)(var4);
            var12 = var15.useShouldSeePushNotificationNudge;
            var4 = _closure1_slot10;
            var8 = var4.APP_LOAD_PROMPT;
            var12 = var12.bind(var15)(var8);
            var5 = var18[var5];
            var8 = var14.bind(var9)(var5);
            var5 = var8.useNudgeExperimentConfigWithoutExposure;
            var4 = var4.APP_LOAD_PROMPT;
            var20 = var5.bind(var8)(var4);
            var4 = 15;
            var4 = var18[var4];
            var5 = var14.bind(var9)(var4);
            var4 = var5.useIsEligibleSenderForReferralProgram;
            var4 = var4.bind(var5)();
            var5 = var18[var11];
            var16 = var14.bind(var9)(var5);
            var15 = var16.useStateFromStores;
            var5 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getReferralsRemaining;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var15.bind(var16)(var8, var5);
            var8 = 16;
            var15 = var18[var8];
            var17 = var14.bind(var9)(var15);
            var16 = var17.useMobileReferralEntryPointsExperimentTreatment;
            var15 = {};
            var15['location'] = var19;
            var15 = var16.bind(var17)(var15);
            var8 = var18[var8];
            var8 = var14.bind(var9)(var8);
            var8 = var8.MobileReferralEntryPointsExperimentTreatment;
            var8 = var8.BOTTOM_SHEET;
            var8 = var15 === var8;
            var15 = var18[var11];
            var25 = var14.bind(var9)(var15);
            var21 = var25.useStateFromStores;
            var15 = _closure1_slot7;
            var17 = new Array(1);
            var17[0] = var15;
            var16 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getMarketingComponentByType;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 13;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.MarketingComponentType;
                    var1 = var1.GIFT_ICON_COACHMARK;
                    var2 = var2.bind(var3)(var1);
                    var5 = null;
                    var3 = var5 != var2;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = var2.properties;
                    var3 = var3.properties;
                    var4 = var3.oneofKind;
                    var3 = 'giftIconCoachmark';
                    var1 = null;
                    if(!(var3 === var4)) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var2 = var2.properties;
                    var2 = var2.properties;
                    var1 = var2.giftIconCoachmark;
case 2:
                    return var1;
                }
            };
            var25 = var21.bind(var25)(var17, var16);
            var16 = var18[var11];
            var21 = var14.bind(var9)(var16);
            var17 = var21.useStateFromStores;
            var16 = new Array(1);
            var16[0] = var15;
            var15 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getMarketingComponentByType;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 13;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.MarketingComponentType;
                    var1 = var1.GIFT_REMINDER_COACHMARK;
                    var2 = var2.bind(var3)(var1);
                    var5 = null;
                    var3 = var5 != var2;
                    var1 = null;
                    if(!var3) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                    var3 = var2.properties;
                    var3 = var3.properties;
                    var4 = var3.oneofKind;
                    var3 = 'giftReminderCoachmark';
                    var1 = null;
                    if(!(var3 === var4)) { _fun0003_ip = 2; continue _fun0003 }
case 4:
                    var2 = var2.properties;
                    var2 = var2.properties;
                    var1 = var2.giftReminderCoachmark;
case 2:
                    return var1;
                }
            };
            var21 = var17.bind(var21)(var16, var15);
            var15 = 17;
            var15 = var18[var15];
            var16 = var14.bind(var9)(var15);
            var15 = var16.useShouldShowRobloxConnectionCoachmark;
            var17 = var15.bind(var16)();
            var15 = 18;
            var15 = var18[var15];
            var16 = var14.bind(var9)(var15);
            var15 = var16.useIsEligibleForBogoPromotion;
            var16 = var15.bind(var16)();
            var15 = 19;
            var15 = var18[var15];
            var28 = var14.bind(var9)(var15);
            var27 = var28.useIsDisplayNameStylesMobileEnabled;
            var15 = {};
            var15['location'] = var19;
            var15 = var27.bind(var28)(var15);
            var11 = var18[var11];
            var18 = var14.bind(var9)(var11);
            var14 = var18.useStateFromStores;
            var27 = _closure1_slot4;
            var11 = new Array(1);
            var11[0] = var27;
            var7 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentGame;
                var1 = var1.bind(var2)();
                return var1;
            };
            var14 = var14.bind(var18)(var11, var7);
            var7 = null;
            var18 = var7 != var25;
            if(!var10) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            if(var3) { _fun0001_ip = 5; continue _fun0001 }
case 7:
            if(var1) { _fun0001_ip = 5; continue _fun0001 }
case 8:
            var1 = {};
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var10 = 20;
            var3 = var3[var10];
            var3 = var11.bind(var9)(var3);
            var3 = var3.DismissibleContent;
            var11 = var3.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET;
            var3 = {};
            if(!var13) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var13 = var7 != var26;
case 9:
            var3['isEligible'] = var13;
            var27 = var7 == var26;
            var13 = undefined;
            if(var27) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var13 = var26.priceChangeId;
case 11:
            var3['newSnowflakeId'] = var13;
            var13 = {};
            var3['actionSheetProperties'] = var13;
            var1[var11] = var3;
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var11.bind(var9)(var3);
            var3 = var3.DismissibleContent;
            var11 = var3.DISCOUNT_OFFER_ACTION_SHEET;
            var3 = {};
            var13 = var7 != var24;
            if(!var13) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var13 = var7 != var22;
case 13:
            var3['isEligible'] = var13;
            var22 = var7 == var24;
            var13 = undefined;
            if(var22) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var13 = var24.id;
case 15:
            var3['newSnowflakeId'] = var13;
            if(!(var7 == var24)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var13 = {};
            _fun0001_ip = 19; continue _fun0001;
case 17:
            var22 = {};
            var22['userDiscountOffer'] = var24;
            var13 = var22;
case 19:
            var3['actionSheetProperties'] = var13;
            var1[var11] = var3;
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var11.bind(var9)(var3);
            var3 = var3.DismissibleContent;
            var11 = var3.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
            var3 = {};
            var13 = var7 != var23;
            if(!var13) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var22 = var23.properties;
            var22 = var22.properties;
            var24 = var22.oneofKind;
            var22 = 'mobileBottomSheet';
            var13 = var22 === var24;
case 20:
            var3['isEligible'] = var13;
            var22 = var7 == var23;
            var13 = undefined;
            if(var22) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var13 = var23.promotionId;
case 22:
            var3['newSnowflakeId'] = var13;
            var13 = {};
            var24 = var7 == var23;
            var22 = undefined;
            if(var24) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var24 = var23.properties;
            var26 = var7 == var24;
            var22 = undefined;
            if(var26) { _fun0001_ip = 24; continue _fun0001 }
case 26:
            var24 = var24.properties;
            var26 = var7 == var24;
            var22 = undefined;
            if(var26) { _fun0001_ip = 24; continue _fun0001 }
case 27:
            var22 = var24.mobileBottomSheet;
case 24:
            var13['bottomSheetData'] = var22;
            var24 = var7 == var23;
            var22 = undefined;
            if(var24) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var22 = var23.id;
case 28:
            var13['componentId'] = var22;
            var3['actionSheetProperties'] = var13;
            var1[var11] = var3;
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var13 = var3[var10];
            var13 = var11.bind(var9)(var13);
            var13 = var13.DismissibleContent;
            var23 = var13.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET;
            var22 = {};
            var22['isEligible'] = var18;
            var13 = 21;
            var24 = var3[var13];
            var27 = var11.bind(var9)(var24);
            var26 = var27.getVersionedDismissibleContentCurrentVersion;
            var24 = var3[var10];
            var24 = var11.bind(var9)(var24);
            var24 = var24.DismissibleContent;
            var24 = var24.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET;
            var24 = var26.bind(var27)(var24);
            var22['latestVersion'] = var24;
            var24 = {};
            var24['coachmarkComponent'] = var25;
            var22['actionSheetProperties'] = var24;
            var1[var23] = var22;
            var3 = var3[var10];
            var3 = var11.bind(var9)(var3);
            var3 = var3.DismissibleContent;
            var11 = var3.GIFTING_PROMOTION_REMINDER;
            var3 = {};
            var22 = !var18;
            if(!var18) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var22 = var7 == var21;
case 30:
            var18 = !var22;
            if(var22) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var25 = _closure1_slot0;
            var22 = _closure1_slot2;
            var23 = 22;
            var23 = var22[var23];
            var24 = var25.bind(var9)(var23);
            var23 = var24.isVersionedDismissibleContentDismissed;
            var22 = var22[var10];
            var22 = var25.bind(var9)(var22);
            var22 = var22.DismissibleContent;
            var22 = var22.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET;
            var22 = var23.bind(var24)(var22);
            var22 = var22.isDismissed;
            var22 = !var22;
            var18 = !var22;
case 32:
            if(!var18) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var22 = 23;
            var22 = var24[var22];
            var22 = var23.bind(var9)(var22);
            var24 = var22.SeasonalGiftingReminderExperiment;
            var23 = var24.getCurrentConfig;
            var22 = {};
            var22['location'] = var19;
            var19 = {};
            var25 = false;
            var19['autoTrackExposure'] = var25;
            var19 = var23.bind(var24)(var22, var19);
            var18 = var19.enabled;
case 34:
            var3['isEligible'] = var18;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var13 = var19[var13];
            var23 = var18.bind(var9)(var13);
            var22 = var23.getVersionedDismissibleContentCurrentVersion;
            var13 = var19[var10];
            var13 = var18.bind(var9)(var13);
            var13 = var13.DismissibleContent;
            var13 = var13.GIFTING_PROMOTION_REMINDER;
            var13 = var22.bind(var23)(var13);
            var3['latestVersion'] = var13;
            var13 = {};
            var13['coachmarkComponent'] = var21;
            var3['actionSheetProperties'] = var13;
            var1[var11] = var3;
            var3 = var19[var10];
            var3 = var18.bind(var9)(var3);
            var3 = var3.DismissibleContent;
            var11 = var3.NOTIFICATION_NUDGE_APP_START_BOTTOM_SHEET;
            var3 = {};
            var3['isEligible'] = var12;
            var12 = {};
            var13 = 24;
            var13 = var19[var13];
            var19 = var18.bind(var9)(var13);
            var18 = var19.getNotificationNudgeCooldownMs;
            var21 = var7 == var20;
            var13 = undefined;
            if(var21) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var13 = var20.timing;
case 36:
            var13 = var18.bind(var19)(var13);
            var12['cooldownDurationMs'] = var13;
            var3['cooldownConfig'] = var12;
            var12 = {};
            var3['actionSheetProperties'] = var12;
            var1[var11] = var3;
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var12 = var3[var10];
            var12 = var11.bind(var9)(var12);
            var12 = var12.DismissibleContent;
            var13 = var12.CUSTOM_APP_ICONS_COACHMARK;
            var12 = {};
            var18 = true;
            var12['isEligible'] = var18;
            var18 = {};
            var12['actionSheetProperties'] = var18;
            var1[var13] = var12;
            var12 = var3[var10];
            var12 = var11.bind(var9)(var12);
            var12 = var12.DismissibleContent;
            var13 = var12.ROBLOX_CONNECTION_COACHMARK;
            var12 = {};
            var12['isEligible'] = var17;
            var17 = {};
            var12['actionSheetProperties'] = var17;
            var1[var13] = var12;
            var12 = var3[var10];
            var12 = var11.bind(var9)(var12);
            var12 = var12.DismissibleContent;
            var13 = var12.MOBILE_BOGO_PROMOTION_ACTION_SHEET;
            var12 = {};
            var12['isEligible'] = var16;
            var16 = {};
            var12['actionSheetProperties'] = var16;
            var1[var13] = var12;
            var12 = var3[var10];
            var12 = var11.bind(var9)(var12);
            var12 = var12.DismissibleContent;
            var13 = var12.DISPLAY_NAME_STYLES_MOBILE_ANNOUNCEMENT_MODAL;
            var12 = {};
            var12['isEligible'] = var15;
            var15 = {};
            var12['actionSheetProperties'] = var15;
            var1[var13] = var12;
            var3 = var3[var10];
            var3 = var11.bind(var9)(var3);
            var3 = var3.DismissibleContent;
            var11 = var3.INSTALLED_GAME_COMMUNITY_UPSELL;
            var3 = {};
            var12 = var7 != var14;
            var3['isEligible'] = var12;
            if(!(var7 == var14)) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var12 = {};
            _fun0001_ip = 40; continue _fun0001;
case 38:
            var13 = {};
            var13['game'] = var14;
            var12 = var13;
case 40:
            var3['actionSheetProperties'] = var12;
            var1[var11] = var3;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var10];
            var2 = var3.bind(var9)(var2);
            var2 = var2.DismissibleContent;
            var3 = var2.MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT;
            var2 = {};
            if(!var4) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var4 = var8;
case 41:
            if(!var4) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var4 = var7 != var5;
case 43:
            if(!var4) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var4 = var5 > var6;
case 45:
            var2['isEligible'] = var4;
            var4 = {};
            var2['actionSheetProperties'] = var4;
            var1[var3] = var2;
            _fun0001_ip = 47; continue _fun0001;
case 5:
            var1 = {};
case 47:
            return var1;
        }
    };
    var3['useMainViewTooltipActionSheetMap'] = var2;
    return var1;
})();