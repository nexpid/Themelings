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
 0:
            var1 = arg1;
            var7 = var1.fallbackPremiumType;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 30; continue _fun0001 }
 17:
            var1 = _closure1_slot7;
            var7 = var1.TIER_2;
 30:
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var8 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var2 = var8.bind(var4)(var1);
            var1 = 7;
            var1 = var3[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.PREMIUM_TRIAL_OFFER_ACTION_SHEET;
            var1 = var2.bind(var4)(var1);
            var1 = var1.analyticsLocations;
            _closure2_slot0 = var1;
            var2 = _closure1_slot0;
            var8 = 8;
            var8 = var3[var8];
            var9 = var2.bind(var4)(var8);
            var8 = var9.usePremiumTrialOffer;
            var10 = var8.bind(var9)();
            _closure2_slot1 = var10;
            var8 = 9;
            var9 = var3[var8];
            var13 = var2.bind(var4)(var9);
            var12 = var13.useStateFromStores;
            var9 = _closure1_slot4;
            var11 = new Array(1);
            var11[0] = var9;
            var9 = function() {
                var2 = _closure1_slot4;
                var1 = var2.hasFetchedOffer;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var12.bind(var13)(var11, var9);
            _closure2_slot2 = var13;
            var8 = var3[var8];
            var12 = var2.bind(var4)(var8);
            var11 = var12.useStateFromStores;
            var8 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getOfferIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var11.bind(var12)(var9, var8);
            _closure2_slot3 = var8;
            var12 = _closure1_slot3;
            var14 = var12.useEffect;
            var11 = new Array(2);
            var11[0] = var10;
            var11[1] = var1;
            var9 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var9 = null;
                    var2 = var9 != var2;
                    if(!var2) { _fun0002_ip = 30; continue _fun0002 }
 16:
                    var3 = _closure2_slot1;
                    var3 = var3.expires_at;
                    var2 = var9 == var3;
 30:
                    if(!var2) { _fun0002_ip = 152; continue _fun0002 }
 33:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 10;
                    var3 = var4[var3];
                    var4 = undefined;
                    var7 = var5.bind(var4)(var3);
                    var6 = var7.track;
                    var3 = _closure1_slot8;
                    var5 = var3.PREMIUM_TRIAL_OFFER_ACTION_SHEET_VIEWED;
                    var3 = {};
                    var8 = _closure2_slot0;
                    var3['location'] = var8;
                    var8 = _closure2_slot1;
                    var9 = var9 == var8;
                    var8 = undefined;
                    if(var9) { _fun0002_ip = 106; continue _fun0002 }
 96:
                    var9 = _closure2_slot1;
                    var8 = var9.trial_id;
 106:
                    var3['trial_id'] = var8;
                    var3 = var6.bind(var7)(var5, var3);
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 11;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.acknowledgeUserTrialOffer;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
 152:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var14.bind(var12)(var9, var11);
            var11 = var12.useEffect;
            var9 = new Array(3);
            var9[0] = var10;
            var9[1] = var13;
            var9[2] = var8;
            var8 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 == var3;
                    if(!var1) { _fun0003_ip = 20; continue _fun0003 }
 16:
                    var1 = _closure2_slot2;
 20:
                    if(!var1) { _fun0003_ip = 38; continue _fun0003 }
 23:
                    var2 = _closure2_slot3;
                    var3 = var2.size;
                    var2 = 0;
                    var1 = var3 > var2;
 38:
                    if(!var1) { _fun0003_ip = 105; continue _fun0003 }
 41:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 12;
                    var1 = var4[var1];
                    var2 = undefined;
                    var6 = var3.bind(var2)(var1);
                    var5 = var6.captureMessage;
                    var1 = 'PremiumTrialOfferActionSheet: Trial offer is null, hiding action sheet';
                    var1 = var5.bind(var6)(var1);
                    var1 = 13;
                    var1 = var4[var1];
                    var2 = var3.bind(var2)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
 105:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var11.bind(var12)(var8, var9);
            var11 = var12.useCallback;
            var9 = new Array(2);
            var9[0] = var1;
            var9[1] = var10;
            var8 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var2);
                    var7 = var8.track;
                    var2 = _closure1_slot8;
                    var5 = var2.PREMIUM_TRIAL_OFFER_ACTION_SHEET_CTA_CLICKED;
                    var2 = {};
                    var4 = _closure2_slot0;
                    var2['location'] = var4;
                    var9 = _closure2_slot1;
                    var4 = null;
                    var10 = var4 == var9;
                    var9 = undefined;
                    if(var10) { _fun0004_ip = 78; continue _fun0004 }
 68:
                    var10 = _closure2_slot1;
                    var9 = var10.trial_id;
 78:
                    var2['trial_id'] = var9;
                    var2 = var7.bind(var8)(var5, var2);
                    var2 = _closure2_slot1;
                    var2 = var4 == var2;
                    var4 = undefined;
                    if(var2) { _fun0004_ip = 112; continue _fun0004 }
 102:
                    var2 = _closure2_slot1;
                    var4 = var2.trial_id;
 112:
                    var2 = _closure1_slot6;
                    if(!(var4 === var2)) { _fun0004_ip = 175; continue _fun0004 }
 120:
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
 175:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = 13;
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
            var9 = var11.bind(var12)(var8, var9);
            var11 = var12.useCallback;
            var8 = new Array(2);
            var8[0] = var1;
            var8[1] = var10;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 10;
                    var3 = var3[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var3);
                    var7 = var8.track;
                    var3 = _closure1_slot8;
                    var6 = var3.PREMIUM_TRIAL_OFFER_ACTION_SHEET_DISMISSED;
                    var4 = {};
                    var5 = _closure2_slot0;
                    var4['location'] = var5;
                    var9 = _closure2_slot1;
                    var5 = null;
                    var10 = var5 == var9;
                    var9 = undefined;
                    if(var10) { _fun0005_ip = 78; continue _fun0005 }
 68:
                    var10 = _closure2_slot1;
                    var9 = var10.trial_id;
 78:
                    var4['trial_id'] = var9;
                    var4 = var7.bind(var8)(var6, var4);
                    var4 = _closure2_slot1;
                    var5 = var5 == var4;
                    var4 = undefined;
                    if(var5) { _fun0005_ip = 112; continue _fun0005 }
 102:
                    var3 = _closure2_slot1;
                    var4 = var3.trial_id;
 112:
                    var3 = _closure1_slot6;
                    if(!(var4 === var3)) { _fun0005_ip = 175; continue _fun0005 }
 120:
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
 175:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 13;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var8 = var11.bind(var12)(var1, var8);
            var1 = 19;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.formatIntervalDuration;
            var1 = {};
            var13 = null;
            var12 = var13 == var10;
            var11 = undefined;
            if(var12) { _fun0001_ip = 401; continue _fun0001 }
 380:
            var12 = var10.subscription_trial;
            var14 = var13 == var12;
            var11 = undefined;
            if(var14) { _fun0001_ip = 401; continue _fun0001 }
 395:
            var11 = var12.interval;
 401:
            var1['intervalType'] = var11;
            var12 = var13 == var10;
            var11 = undefined;
            if(var12) { _fun0001_ip = 436; continue _fun0001 }
 415:
            var12 = var10.subscription_trial;
            var13 = var13 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 436; continue _fun0001 }
 430:
            var11 = var12.interval_count;
 436:
            var1['intervalCount'] = var11;
            var11 = var2.bind(var3)(var1);
            var3 = _closure1_slot9;
            var2 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 20;
            var1 = var12[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var13 = true;
            var1['startExpanded'] = var13;
            var6 = function onDismiss() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 10;
                    var3 = var3[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var3);
                    var7 = var8.track;
                    var3 = _closure1_slot8;
                    var6 = var3.PREMIUM_TRIAL_OFFER_ACTION_SHEET_DISMISSED;
                    var4 = {};
                    var5 = _closure2_slot0;
                    var4['location'] = var5;
                    var9 = _closure2_slot1;
                    var5 = null;
                    var10 = var5 == var9;
                    var9 = undefined;
                    if(var10) { _fun0006_ip = 78; continue _fun0006 }
 68:
                    var10 = _closure2_slot1;
                    var9 = var10.trial_id;
 78:
                    var4['trial_id'] = var9;
                    var4 = var7.bind(var8)(var6, var4);
                    var4 = _closure2_slot1;
                    var5 = var5 == var4;
                    var4 = undefined;
                    if(var5) { _fun0006_ip = 112; continue _fun0006 }
 102:
                    var3 = _closure2_slot1;
                    var4 = var3.trial_id;
 112:
                    var3 = _closure1_slot6;
                    if(!(var4 === var3)) { _fun0006_ip = 175; continue _fun0006 }
 120:
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
 175:
                    return var1;
                }
            };
            var1['onDismiss'] = var6;
            var6 = _closure1_slot1;
            var5 = 21;
            var5 = var12[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['intervalDuration'] = var11;
            var5['trialOffer'] = var10;
            var5['onConfirm'] = var9;
            var5['onDismiss'] = var8;
            var5['fallbackPremiumType'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();