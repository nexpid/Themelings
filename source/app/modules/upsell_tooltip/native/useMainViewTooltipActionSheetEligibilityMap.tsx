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
    var4 = var5.bind(var1)(var4);
    var4 = var4.PermissionPromptType;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserSettingsTypes;
    var _closure1_slot10 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMainViewTooltipActionSheetMap() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 8;
            var1 = var15[var6];
            var5 = undefined;
            var9 = var8.bind(var5)(var1);
            var7 = var9.useStateFromStores;
            var1 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.hasLoaded;
                var1 = _closure1_slot10;
                var1 = var1.PRELOADED_USER_SETTINGS;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var7.bind(var9)(var3, var1);
            var3 = _closure1_slot1;
            var1 = 9;
            var1 = var15[var1];
            var9 = var3.bind(var5)(var1);
            var3 = var9.getConfig;
            var1 = {};
            var16 = 'MainViewTooltipActionSheets';
            var1['location'] = var16;
            var1 = var3.bind(var9)(var1);
            var3 = var1.disabled;
            var1 = var15[var6];
            var11 = var8.bind(var5)(var1);
            var10 = var11.useStateFromStores;
            var1 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var1;
            var1 = function() {
                var2 = _closure1_slot8;
                var1 = var2.hasAction;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var10.bind(var11)(var9, var1);
            var9 = var15[var6];
            var12 = var8.bind(var5)(var9);
            var11 = var12.useStateFromStoresArray;
            var9 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var2 = _closure1_slot5;
                var3 = var2.shouldShowGooglePlayPriceChange;
                var1 = new Array(2);
                var1[0] = var3;
                var2 = var2.priceChangeRecord;
                var1[1] = var2;
                return var1;
            };
            var11 = var11.bind(var12)(var10, var9);
            var10 = _closure1_slot3;
            var9 = 2;
            var10 = var10.bind(var5)(var11, var9);
            var9 = 0;
            var14 = var10[var9];
            var9 = 1;
            var23 = var10[var9];
            var9 = 10;
            var9 = var15[var9];
            var10 = var8.bind(var5)(var9);
            var9 = var10.useSelectedDiscountOfferActionSheet;
            var9 = var9.bind(var10)();
            var21 = var9.discountOffer;
            var19 = var9.discountOfferDismissibleContent;
            var9 = 11;
            var9 = var15[var9];
            var11 = var8.bind(var5)(var9);
            var10 = var11.usePromotionMarketingComponent;
            var9 = 12;
            var9 = var15[var9];
            var9 = var8.bind(var5)(var9);
            var9 = var9.MarketingComponentType;
            var9 = var9.MOBILE_BOTTOM_SHEET;
            var20 = var10.bind(var11)(var9);
            var11 = 13;
            var9 = var15[var11];
            var13 = var8.bind(var5)(var9);
            var12 = var13.useShouldSeePushNotificationNudge;
            var10 = _closure1_slot9;
            var9 = var10.APP_LOAD_PROMPT;
            var9 = var12.bind(var13)(var9);
            var11 = var15[var11];
            var12 = var8.bind(var5)(var11);
            var11 = var12.useNudgeExperimentConfigWithoutExposure;
            var10 = var10.APP_LOAD_PROMPT;
            var17 = var11.bind(var12)(var10);
            var10 = var15[var6];
            var18 = var8.bind(var5)(var10);
            var13 = var18.useStateFromStores;
            var10 = _closure1_slot6;
            var12 = new Array(1);
            var12[0] = var10;
            var11 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getMarketingComponentByType;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 12;
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
            var22 = var13.bind(var18)(var12, var11);
            var11 = var15[var6];
            var13 = var8.bind(var5)(var11);
            var12 = var13.useStateFromStores;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getMarketingComponentByType;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 12;
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
            var18 = var12.bind(var13)(var11, var10);
            var10 = 14;
            var10 = var15[var10];
            var10 = var8.bind(var5)(var10);
            var12 = var10.CheckpointExperiment;
            var11 = var12.useConfig;
            var10 = {};
            var10['location'] = var16;
            var10 = var11.bind(var12)(var10);
            var13 = var10.enabled;
            var10 = 15;
            var10 = var15[var10];
            var11 = var8.bind(var5)(var10);
            var10 = var11.useShouldShowRobloxConnectionCoachmark;
            var12 = var10.bind(var11)();
            var10 = 16;
            var10 = var15[var10];
            var11 = var8.bind(var5)(var10);
            var10 = var11.useIsEligibleForBogoPromotion;
            var11 = var10.bind(var11)();
            var10 = 17;
            var10 = var15[var10];
            var25 = var8.bind(var5)(var10);
            var24 = var25.useIsDisplayNameStylesMobileEnabled;
            var10 = {};
            var10['location'] = var16;
            var10 = var24.bind(var25)(var10);
            var6 = var15[var6];
            var15 = var8.bind(var5)(var6);
            var8 = var15.useStateFromStores;
            var24 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var24;
            var4 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentGame;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var8.bind(var15)(var6, var4);
            var4 = null;
            var15 = var4 != var22;
            if(!var7) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            if(var3) { _fun0001_ip = 5; continue _fun0001 }
case 7:
            if(var1) { _fun0001_ip = 5; continue _fun0001 }
case 8:
            var1 = {};
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 18;
            var3 = var3[var7];
            var3 = var8.bind(var5)(var3);
            var3 = var3.DismissibleContent;
            var8 = var3.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET;
            var3 = {};
            if(!var14) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var14 = var4 != var23;
case 9:
            var3['isEligible'] = var14;
            var24 = var4 == var23;
            var14 = undefined;
            if(var24) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var14 = var23.priceChangeId;
case 11:
            var3['newSnowflakeId'] = var14;
            var14 = {};
            var3['actionSheetProperties'] = var14;
            var1[var8] = var3;
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var8.bind(var5)(var3);
            var3 = var3.DismissibleContent;
            var8 = var3.DISCOUNT_OFFER_ACTION_SHEET;
            var3 = {};
            var14 = var4 != var21;
            if(!var14) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var14 = var4 != var19;
case 13:
            var3['isEligible'] = var14;
            var19 = var4 == var21;
            var14 = undefined;
            if(var19) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var14 = var21.id;
case 15:
            var3['newSnowflakeId'] = var14;
            if(!(var4 == var21)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var14 = {};
            _fun0001_ip = 19; continue _fun0001;
case 17:
            var19 = {};
            var19['userDiscountOffer'] = var21;
            var14 = var19;
case 19:
            var3['actionSheetProperties'] = var14;
            var1[var8] = var3;
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var8.bind(var5)(var3);
            var3 = var3.DismissibleContent;
            var8 = var3.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
            var3 = {};
            var14 = var4 != var20;
            if(!var14) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var19 = var20.properties;
            var19 = var19.properties;
            var21 = var19.oneofKind;
            var19 = 'mobileBottomSheet';
            var14 = var19 === var21;
case 20:
            var3['isEligible'] = var14;
            var19 = var4 == var20;
            var14 = undefined;
            if(var19) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var14 = var20.promotionId;
case 22:
            var3['newSnowflakeId'] = var14;
            var14 = {};
            var21 = var4 == var20;
            var19 = undefined;
            if(var21) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var21 = var20.properties;
            var23 = var4 == var21;
            var19 = undefined;
            if(var23) { _fun0001_ip = 24; continue _fun0001 }
case 26:
            var21 = var21.properties;
            var23 = var4 == var21;
            var19 = undefined;
            if(var23) { _fun0001_ip = 24; continue _fun0001 }
case 27:
            var19 = var21.mobileBottomSheet;
case 24:
            var14['bottomSheetData'] = var19;
            var21 = var4 == var20;
            var19 = undefined;
            if(var21) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var19 = var20.id;
case 28:
            var14['componentId'] = var19;
            var3['actionSheetProperties'] = var14;
            var1[var8] = var3;
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var14 = var3[var7];
            var14 = var8.bind(var5)(var14);
            var14 = var14.DismissibleContent;
            var20 = var14.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET;
            var19 = {};
            var19['isEligible'] = var15;
            var14 = 19;
            var21 = var3[var14];
            var24 = var8.bind(var5)(var21);
            var23 = var24.getVersionedDismissibleContentCurrentVersion;
            var21 = var3[var7];
            var21 = var8.bind(var5)(var21);
            var21 = var21.DismissibleContent;
            var21 = var21.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET;
            var21 = var23.bind(var24)(var21);
            var19['latestVersion'] = var21;
            var21 = {};
            var21['coachmarkComponent'] = var22;
            var19['actionSheetProperties'] = var21;
            var1[var20] = var19;
            var3 = var3[var7];
            var3 = var8.bind(var5)(var3);
            var3 = var3.DismissibleContent;
            var8 = var3.GIFTING_PROMOTION_REMINDER;
            var3 = {};
            var19 = !var15;
            if(!var15) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var19 = var4 == var18;
case 30:
            var15 = !var19;
            if(var19) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var22 = _closure1_slot0;
            var19 = _closure1_slot2;
            var20 = 20;
            var20 = var19[var20];
            var21 = var22.bind(var5)(var20);
            var20 = var21.isVersionedDismissibleContentDismissed;
            var19 = var19[var7];
            var19 = var22.bind(var5)(var19);
            var19 = var19.DismissibleContent;
            var19 = var19.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET;
            var19 = var20.bind(var21)(var19);
            var19 = var19.isDismissed;
            var19 = !var19;
            var15 = !var19;
case 32:
            if(!var15) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var19 = 21;
            var19 = var21[var19];
            var19 = var20.bind(var5)(var19);
            var21 = var19.SeasonalGiftingReminderExperiment;
            var20 = var21.getCurrentConfig;
            var19 = {};
            var19['location'] = var16;
            var16 = {};
            var22 = false;
            var16['autoTrackExposure'] = var22;
            var16 = var20.bind(var21)(var19, var16);
            var15 = var16.enabled;
case 34:
            var3['isEligible'] = var15;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var14 = var16[var14];
            var20 = var15.bind(var5)(var14);
            var19 = var20.getVersionedDismissibleContentCurrentVersion;
            var14 = var16[var7];
            var14 = var15.bind(var5)(var14);
            var14 = var14.DismissibleContent;
            var14 = var14.GIFTING_PROMOTION_REMINDER;
            var14 = var19.bind(var20)(var14);
            var3['latestVersion'] = var14;
            var14 = {};
            var14['coachmarkComponent'] = var18;
            var3['actionSheetProperties'] = var14;
            var1[var8] = var3;
            var3 = var16[var7];
            var3 = var15.bind(var5)(var3);
            var3 = var3.DismissibleContent;
            var8 = var3.NOTIFICATION_NUDGE_APP_START_BOTTOM_SHEET;
            var3 = {};
            var3['isEligible'] = var9;
            var9 = {};
            var14 = 22;
            var14 = var16[var14];
            var16 = var15.bind(var5)(var14);
            var15 = var16.getNotificationNudgeCooldownMs;
            var18 = var4 == var17;
            var14 = undefined;
            if(var18) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var14 = var17.timing;
case 36:
            var14 = var15.bind(var16)(var14);
            var9['cooldownDurationMs'] = var14;
            var3['cooldownConfig'] = var9;
            var9 = {};
            var3['actionSheetProperties'] = var9;
            var1[var8] = var3;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = var2[var7];
            var8 = var3.bind(var5)(var8);
            var8 = var8.DismissibleContent;
            var9 = var8.CHECKPOINT_2025_BOTTOM_SHEET;
            var8 = {};
            var8['isEligible'] = var13;
            var13 = {};
            var8['actionSheetProperties'] = var13;
            var1[var9] = var8;
            var8 = var2[var7];
            var8 = var3.bind(var5)(var8);
            var8 = var8.DismissibleContent;
            var9 = var8.CUSTOM_APP_ICONS_COACHMARK;
            var8 = {};
            var13 = true;
            var8['isEligible'] = var13;
            var13 = {};
            var8['actionSheetProperties'] = var13;
            var1[var9] = var8;
            var8 = var2[var7];
            var8 = var3.bind(var5)(var8);
            var8 = var8.DismissibleContent;
            var9 = var8.ROBLOX_CONNECTION_COACHMARK;
            var8 = {};
            var8['isEligible'] = var12;
            var12 = {};
            var8['actionSheetProperties'] = var12;
            var1[var9] = var8;
            var8 = var2[var7];
            var8 = var3.bind(var5)(var8);
            var8 = var8.DismissibleContent;
            var9 = var8.MOBILE_BOGO_PROMOTION_ACTION_SHEET;
            var8 = {};
            var8['isEligible'] = var11;
            var11 = {};
            var8['actionSheetProperties'] = var11;
            var1[var9] = var8;
            var8 = var2[var7];
            var8 = var3.bind(var5)(var8);
            var8 = var8.DismissibleContent;
            var9 = var8.DISPLAY_NAME_STYLES_MOBILE_ANNOUNCEMENT_MODAL;
            var8 = {};
            var8['isEligible'] = var10;
            var10 = {};
            var8['actionSheetProperties'] = var10;
            var1[var9] = var8;
            var2 = var2[var7];
            var2 = var3.bind(var5)(var2);
            var2 = var2.DismissibleContent;
            var3 = var2.INSTALLED_GAME_COMMUNITY_UPSELL;
            var2 = {};
            var5 = var4 != var6;
            var2['isEligible'] = var5;
            if(!(var4 == var6)) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var4 = {};
            _fun0001_ip = 40; continue _fun0001;
case 38:
            var5 = {};
            var5['game'] = var6;
            var4 = var5;
case 40:
            var2['actionSheetProperties'] = var4;
            var1[var3] = var2;
            _fun0001_ip = 41; continue _fun0001;
case 5:
            var1 = {};
case 41:
            return var1;
        }
    };
    var3['useMainViewTooltipActionSheetMap'] = var2;
    return var1;
})();