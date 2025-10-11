// app/modules/premium/native/trials/PremiumTrialOfferActionSheet.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
    var _closure1_slot6 = var7;
    var4 = var4.PremiumTypes;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/trials/PremiumTrialOfferActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.fallbackPremiumType;
            var5 = undefined;
            if(!(var9 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot7;
            var9 = var1.TIER_2;
case 2:
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var2 = var4.bind(var5)(var1);
            var1 = 7;
            var1 = var3[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.PREMIUM_TRIAL_OFFER_ACTION_SHEET;
            var1 = var2.bind(var5)(var1);
            var1 = var1.analyticsLocations;
            _closure2_slot0 = var1;
            var2 = _closure1_slot0;
            var6 = 8;
            var4 = var3[var6];
            var12 = var2.bind(var5)(var4);
            var11 = var12.useStateFromStoresObject;
            var4 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var4;
            var4 = function() {
                var1 = {};
                var3 = _closure1_slot5;
                var2 = var3.isFetchingProducts;
                var2 = var2.bind(var3)();
                var1['isFetchingProducts'] = var2;
                var2 = var3.getOfferIds;
                var2 = var2.bind(var3)();
                var1['offerIds'] = var2;
                return var1;
            };
            var10 = var11.bind(var12)(var10, var4);
            var4 = var10.isFetchingProducts;
            _closure2_slot1 = var4;
            var13 = var10.offerIds;
            _closure2_slot2 = var13;
            var6 = var3[var6];
            var12 = var2.bind(var5)(var6);
            var11 = var12.useStateFromStores;
            var6 = _closure1_slot4;
            var10 = new Array(1);
            var10[0] = var6;
            var6 = function() {
                var2 = _closure1_slot4;
                var1 = var2.hasFetchedOffer;
                var1 = var1.bind(var2)();
                return var1;
            };
            var14 = var11.bind(var12)(var10, var6);
            _closure2_slot3 = var14;
            var6 = 9;
            var6 = var3[var6];
            var10 = var2.bind(var5)(var6);
            var6 = var10.usePremiumTrialOffer;
            var6 = var6.bind(var10)();
            _closure2_slot4 = var6;
            var12 = _closure1_slot3;
            var11 = var12.useEffect;
            var10 = new Array(4);
            var10[0] = var6;
            var10[1] = var14;
            var10[2] = var13;
            var10[3] = var4;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var1 = null;
                    var1 = var1 == var3;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = _closure2_slot3;
case 4:
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure2_slot1;
                    var3 = false;
                    var1 = var3 === var4;
case 6:
                    if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = _closure2_slot2;
                    var3 = var2.size;
                    var2 = 0;
                    var1 = var3 > var2;
case 8:
                    if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 10;
                    var1 = var4[var1];
                    var2 = undefined;
                    var6 = var3.bind(var2)(var1);
                    var5 = var6.captureMessage;
                    var1 = 'PremiumTrialOfferActionSheet: Trial offer is null, hiding action sheet';
                    var1 = var5.bind(var6)(var1);
                    var1 = 11;
                    var1 = var4[var1];
                    var2 = var3.bind(var2)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var11.bind(var12)(var4, var10);
            var11 = var12.useEffect;
            var10 = new Array(2);
            var10[0] = var6;
            var10[1] = var1;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var9 = null;
                    var2 = var9 != var2;
                    if(!var2) { _fun0003_ip = 2; continue _fun0003 }
case 5:
                    var3 = _closure2_slot4;
                    var3 = var3.expires_at;
                    var2 = var9 == var3;
case 2:
                    if(!var2) { _fun0003_ip = 12; continue _fun0003 }
case 6:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 12;
                    var3 = var4[var3];
                    var4 = undefined;
                    var7 = var5.bind(var4)(var3);
                    var6 = var7.track;
                    var3 = _closure1_slot8;
                    var5 = var3.PREMIUM_TRIAL_OFFER_ACTION_SHEET_VIEWED;
                    var3 = {};
                    var8 = _closure2_slot0;
                    var3['location'] = var8;
                    var8 = _closure2_slot4;
                    var9 = var9 == var8;
                    var8 = undefined;
                    if(var9) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var9 = _closure2_slot4;
                    var8 = var9.trial_id;
case 13:
                    var3['trial_id'] = var8;
                    var3 = var6.bind(var7)(var5, var3);
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 13;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.acknowledgeUserTrialOffer;
                    var1 = _closure2_slot4;
                    var1 = var2.bind(var3)(var1);
case 12:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var11.bind(var12)(var4, var10);
            var11 = var12.useCallback;
            var10 = new Array(2);
            var10[0] = var1;
            var10[1] = var6;
            var4 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var2);
                    var7 = var8.track;
                    var2 = _closure1_slot8;
                    var5 = var2.PREMIUM_TRIAL_OFFER_ACTION_SHEET_CTA_CLICKED;
                    var2 = {};
                    var4 = _closure2_slot0;
                    var2['location'] = var4;
                    var9 = _closure2_slot4;
                    var4 = null;
                    var10 = var4 == var9;
                    var9 = undefined;
                    if(var10) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var10 = _closure2_slot4;
                    var9 = var10.trial_id;
case 15:
                    var2['trial_id'] = var9;
                    var2 = var7.bind(var8)(var5, var2);
                    var2 = _closure2_slot4;
                    var2 = var4 == var2;
                    var4 = undefined;
                    if(var2) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var2 = _closure2_slot4;
                    var4 = var2.trial_id;
case 17:
                    var2 = _closure1_slot6;
                    if(!(var4 === var2)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 14;
                    var2 = var8[var2];
                    var5 = var7.bind(var1)(var2);
                    var4 = var5.UNSAFE_markDismissibleContentAsDismissed;
                    var2 = 15;
                    var2 = var8[var2];
                    var2 = var7.bind(var1)(var2);
                    var2 = var2.DismissibleContent;
                    var2 = var2.TRIAL_FOR_ALL_INITIAL_UPSELL;
                    var2 = var4.bind(var5)(var2);
case 19:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = 11;
                    var4 = var2[var4];
                    var7 = var5.bind(var1)(var4);
                    var4 = var7.hideActionSheet;
                    var4 = var4.bind(var7)();
                    var4 = 16;
                    var4 = var2[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.pushLazy;
                    var7 = _closure1_slot0;
                    var3 = 18;
                    var3 = var2[var3];
                    var7 = var7.bind(var1)(var3);
                    var3 = 17;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var7.bind(var1)(var3, var2);
                    var2 = {};
                    var6 = _closure2_slot0;
                    var2['analyticsLocations'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var11 = var11.bind(var12)(var4, var10);
            var10 = var12.useCallback;
            var4 = new Array(2);
            var4[0] = var1;
            var4[1] = var6;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var3 = var3[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var3);
                    var7 = var8.track;
                    var3 = _closure1_slot8;
                    var6 = var3.PREMIUM_TRIAL_OFFER_ACTION_SHEET_DISMISSED;
                    var4 = {};
                    var5 = _closure2_slot0;
                    var4['location'] = var5;
                    var9 = _closure2_slot4;
                    var5 = null;
                    var10 = var5 == var9;
                    var9 = undefined;
                    if(var10) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                    var10 = _closure2_slot4;
                    var9 = var10.trial_id;
case 15:
                    var4['trial_id'] = var9;
                    var4 = var7.bind(var8)(var6, var4);
                    var4 = _closure2_slot4;
                    var5 = var5 == var4;
                    var4 = undefined;
                    if(var5) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var3 = _closure2_slot4;
                    var4 = var3.trial_id;
case 17:
                    var3 = _closure1_slot6;
                    if(!(var4 === var3)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 14;
                    var3 = var7[var3];
                    var5 = var6.bind(var1)(var3);
                    var4 = var5.UNSAFE_markDismissibleContentAsDismissed;
                    var3 = 15;
                    var3 = var7[var3];
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.DismissibleContent;
                    var3 = var3.TRIAL_FOR_ALL_INITIAL_UPSELL;
                    var3 = var4.bind(var5)(var3);
case 19:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var10 = var10.bind(var12)(var1, var4);
            var1 = 19;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.formatIntervalDuration;
            var2 = {};
            var1 = null;
            var13 = var1 == var6;
            var12 = undefined;
            if(var13) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var13 = var6.subscription_trial;
            var14 = var1 == var13;
            var12 = undefined;
            if(var14) { _fun0001_ip = 21; continue _fun0001 }
case 23:
            var12 = var13.interval;
case 21:
            var2['intervalType'] = var12;
            var13 = var1 == var6;
            var12 = undefined;
            if(var13) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var13 = var6.subscription_trial;
            var14 = var1 == var13;
            var12 = undefined;
            if(var14) { _fun0001_ip = 24; continue _fun0001 }
case 26:
            var12 = var13.interval_count;
case 24:
            var2['intervalCount'] = var12;
            var12 = var3.bind(var4)(var2);
            var4 = _closure1_slot9;
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 20;
            var2 = var13[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.BottomSheet;
            var2 = {};
            var14 = true;
            var2['startExpanded'] = var14;
            var8 = function onDismiss() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var3 = var3[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var3);
                    var7 = var8.track;
                    var3 = _closure1_slot8;
                    var6 = var3.PREMIUM_TRIAL_OFFER_ACTION_SHEET_DISMISSED;
                    var4 = {};
                    var5 = _closure2_slot0;
                    var4['location'] = var5;
                    var9 = _closure2_slot4;
                    var5 = null;
                    var10 = var5 == var9;
                    var9 = undefined;
                    if(var10) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                    var10 = _closure2_slot4;
                    var9 = var10.trial_id;
case 15:
                    var4['trial_id'] = var9;
                    var4 = var7.bind(var8)(var6, var4);
                    var4 = _closure2_slot4;
                    var5 = var5 == var4;
                    var4 = undefined;
                    if(var5) { _fun0006_ip = 17; continue _fun0006 }
case 18:
                    var3 = _closure2_slot4;
                    var4 = var3.trial_id;
case 17:
                    var3 = _closure1_slot6;
                    if(!(var4 === var3)) { _fun0006_ip = 19; continue _fun0006 }
case 20:
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
                    var2 = var2.TRIAL_FOR_ALL_INITIAL_UPSELL;
                    var2 = var3.bind(var4)(var2);
case 19:
                    return var1;
                }
            };
            var2['onDismiss'] = var8;
            var8 = _closure1_slot1;
            var7 = 21;
            var7 = var13[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var7['intervalDuration'] = var12;
            var7['trialOffer'] = var6;
            var7['onConfirm'] = var11;
            var7['onDismiss'] = var10;
            var7['fallbackPremiumType'] = var9;
            var7 = var4.bind(var5)(var8, var7);
            var2['children'] = var7;
            var7 = var1 == var6;
            var1 = undefined;
            if(var7) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var1 = var6.trial_id;
case 27:
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();