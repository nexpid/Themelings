// app/modules/premium/native/trials/PremiumTrialOfferActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
    var _closure1_slot4 = var7;
    var4 = var4.PremiumTypes;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/trials/PremiumTrialOfferActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = var1.fallbackPremiumType;
            var5 = undefined;
            if(!(var8 === var5)) { _fun0001_ip = 30; continue _fun0001 }
 17:
            var1 = _closure1_slot5;
            var8 = var1.TIER_2;
 30:
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var5;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var2 = var4.bind(var5)(var1);
            var1 = 5;
            var1 = var3[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.PREMIUM_TRIAL_OFFER_ACTION_SHEET;
            var1 = var2.bind(var5)(var1);
            var1 = var1.analyticsLocations;
            _closure2_slot0 = var1;
            var2 = _closure1_slot0;
            var4 = 6;
            var4 = var3[var4];
            var9 = var2.bind(var5)(var4);
            var4 = var9.usePremiumTrialOffer;
            var11 = var4.bind(var9)();
            _closure2_slot1 = var11;
            var12 = _closure1_slot3;
            var10 = var12.useEffect;
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var1;
            var4 = function() {
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
                    var3 = 7;
                    var3 = var4[var3];
                    var4 = undefined;
                    var7 = var5.bind(var4)(var3);
                    var6 = var7.track;
                    var3 = _closure1_slot6;
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
                    var2 = 8;
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
            var4 = var10.bind(var12)(var4, var9);
            var10 = var12.useCallback;
            var9 = new Array(2);
            var9[0] = var1;
            var9[1] = var11;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var2);
                    var7 = var8.track;
                    var2 = _closure1_slot6;
                    var5 = var2.PREMIUM_TRIAL_OFFER_ACTION_SHEET_CTA_CLICKED;
                    var2 = {};
                    var4 = _closure2_slot0;
                    var2['location'] = var4;
                    var9 = _closure2_slot1;
                    var4 = null;
                    var10 = var4 == var9;
                    var9 = undefined;
                    if(var10) { _fun0003_ip = 78; continue _fun0003 }
 68:
                    var10 = _closure2_slot1;
                    var9 = var10.trial_id;
 78:
                    var2['trial_id'] = var9;
                    var2 = var7.bind(var8)(var5, var2);
                    var2 = _closure2_slot1;
                    var2 = var4 == var2;
                    var4 = undefined;
                    if(var2) { _fun0003_ip = 112; continue _fun0003 }
 102:
                    var2 = _closure2_slot1;
                    var4 = var2.trial_id;
 112:
                    var2 = _closure1_slot4;
                    if(!(var4 === var2)) { _fun0003_ip = 175; continue _fun0003 }
 120:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 9;
                    var2 = var8[var2];
                    var5 = var7.bind(var1)(var2);
                    var4 = var5.UNSAFE_markDismissibleContentAsDismissed;
                    var2 = 10;
                    var2 = var8[var2];
                    var2 = var7.bind(var1)(var2);
                    var2 = var2.DismissibleContent;
                    var2 = var2.TRIAL_FOR_ALL_INITIAL_UPSELL;
                    var2 = var4.bind(var5)(var2);
 175:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = 11;
                    var4 = var2[var4];
                    var7 = var5.bind(var1)(var4);
                    var4 = var7.hideActionSheet;
                    var4 = var4.bind(var7)();
                    var4 = 12;
                    var4 = var2[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.pushLazy;
                    var7 = _closure1_slot0;
                    var3 = 14;
                    var3 = var2[var3];
                    var7 = var7.bind(var1)(var3);
                    var3 = 13;
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
            var10 = var10.bind(var12)(var4, var9);
            var9 = var12.useCallback;
            var4 = new Array(2);
            var4[0] = var1;
            var4[1] = var11;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 7;
                    var3 = var3[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var3);
                    var7 = var8.track;
                    var3 = _closure1_slot6;
                    var6 = var3.PREMIUM_TRIAL_OFFER_ACTION_SHEET_DISMISSED;
                    var4 = {};
                    var5 = _closure2_slot0;
                    var4['location'] = var5;
                    var9 = _closure2_slot1;
                    var5 = null;
                    var10 = var5 == var9;
                    var9 = undefined;
                    if(var10) { _fun0004_ip = 78; continue _fun0004 }
 68:
                    var10 = _closure2_slot1;
                    var9 = var10.trial_id;
 78:
                    var4['trial_id'] = var9;
                    var4 = var7.bind(var8)(var6, var4);
                    var4 = _closure2_slot1;
                    var5 = var5 == var4;
                    var4 = undefined;
                    if(var5) { _fun0004_ip = 112; continue _fun0004 }
 102:
                    var3 = _closure2_slot1;
                    var4 = var3.trial_id;
 112:
                    var3 = _closure1_slot4;
                    if(!(var4 === var3)) { _fun0004_ip = 175; continue _fun0004 }
 120:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 9;
                    var3 = var7[var3];
                    var5 = var6.bind(var1)(var3);
                    var4 = var5.UNSAFE_markDismissibleContentAsDismissed;
                    var3 = 10;
                    var3 = var7[var3];
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.DismissibleContent;
                    var3 = var3.TRIAL_FOR_ALL_INITIAL_UPSELL;
                    var3 = var4.bind(var5)(var3);
 175:
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
            var9 = var9.bind(var12)(var1, var4);
            var1 = 15;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.formatIntervalDuration;
            var2 = {};
            var1 = null;
            var13 = var1 == var11;
            var12 = undefined;
            if(var13) { _fun0001_ip = 270; continue _fun0001 }
 249:
            var13 = var11.subscription_trial;
            var14 = var1 == var13;
            var12 = undefined;
            if(var14) { _fun0001_ip = 270; continue _fun0001 }
 264:
            var12 = var13.interval;
 270:
            var2['intervalType'] = var12;
            var13 = var1 == var11;
            var12 = undefined;
            if(var13) { _fun0001_ip = 305; continue _fun0001 }
 284:
            var13 = var11.subscription_trial;
            var14 = var1 == var13;
            var12 = undefined;
            if(var14) { _fun0001_ip = 305; continue _fun0001 }
 299:
            var12 = var13.interval_count;
 305:
            var2['intervalCount'] = var12;
            var12 = var3.bind(var4)(var2);
            var2 = var1 == var11;
            var1 = null;
            if(var2) { _fun0001_ip = 434; continue _fun0001 }
 324:
            var4 = _closure1_slot7;
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 16;
            var2 = var13[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.BottomSheet;
            var2 = {};
            var14 = true;
            var2['startExpanded'] = var14;
            var7 = function onDismiss() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 7;
                    var3 = var3[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var3);
                    var7 = var8.track;
                    var3 = _closure1_slot6;
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
                    var3 = _closure1_slot4;
                    if(!(var4 === var3)) { _fun0005_ip = 175; continue _fun0005 }
 120:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 9;
                    var2 = var6[var2];
                    var4 = var5.bind(var1)(var2);
                    var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
                    var2 = 10;
                    var2 = var6[var2];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.DismissibleContent;
                    var2 = var2.TRIAL_FOR_ALL_INITIAL_UPSELL;
                    var2 = var3.bind(var4)(var2);
 175:
                    return var1;
                }
            };
            var2['onDismiss'] = var7;
            var7 = _closure1_slot1;
            var6 = 17;
            var6 = var13[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['intervalDuration'] = var12;
            var6['trialOffer'] = var11;
            var6['onConfirm'] = var10;
            var6['onDismiss'] = var9;
            var6['fallbackPremiumType'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 434:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();