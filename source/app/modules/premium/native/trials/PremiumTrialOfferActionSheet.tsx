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
    var4 = var4.PremiumTypes;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/trials/PremiumTrialOfferActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var11 = var3.markAsDismissed;
            var _closure2_slot0 = var11;
            var2 = var3.userTrialOffer;
            var _closure2_slot1 = var2;
            var9 = var3.fallbackPremiumType;
            var6 = undefined;
            if(!(var9 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot4;
            var9 = var3.TIER_2;
case 2:
            var _closure2_slot2 = var6;
            var8 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 5;
            var3 = var4[var3];
            var5 = var8.bind(var6)(var3);
            var3 = 6;
            var3 = var4[var3];
            var3 = var8.bind(var6)(var3);
            var3 = var3.PREMIUM_TRIAL_OFFER_ACTION_SHEET;
            var3 = var5.bind(var6)(var3);
            var12 = var3.analyticsLocations;
            _closure2_slot2 = var12;
            var10 = _closure1_slot3;
            var8 = var10.useEffect;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 7;
                    var6 = var5[var2];
                    var2 = undefined;
                    var8 = var4.bind(var2)(var6);
                    var7 = var8.track;
                    var1 = _closure1_slot5;
                    var6 = var1.PREMIUM_TRIAL_OFFER_ACTION_SHEET_VIEWED;
                    var1 = {};
                    var9 = _closure2_slot2;
                    var1['location'] = var9;
                    var3 = _closure2_slot1;
                    var9 = var3.trial_id;
                    var1['trial_id'] = var9;
                    var1 = var7.bind(var8)(var6, var1);
                    var1 = 8;
                    var1 = var5[var1];
                    var2 = var4.bind(var2)(var1);
                    var1 = var2.acknowledgeUserTrialOffer;
                    var1 = var1.bind(var2)(var3);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = new Array(0);
            var3 = var8.bind(var10)(var5, var3);
            var8 = var10.useEffect;
            var5 = new Array(2);
            var5[0] = var2;
            var5[1] = var11;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0003_ip = 3; continue _fun0003 }
case 5:
                    var3 = _closure2_slot0;
                    var1 = _closure1_slot6;
                    var2 = var1.AUTO_DISMISS;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 3:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var8.bind(var10)(var3, var5);
            var8 = var10.useCallback;
            var5 = new Array(3);
            var5[0] = var12;
            var5[1] = var11;
            var5[2] = var2;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 7;
                    var3 = var3[var1];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var3);
                    var6 = var7.track;
                    var3 = _closure1_slot5;
                    var5 = var3.PREMIUM_TRIAL_OFFER_ACTION_SHEET_DISMISSED;
                    var4 = {};
                    var8 = _closure2_slot2;
                    var4['location'] = var8;
                    var9 = _closure2_slot1;
                    var8 = null;
                    var9 = var8 == var9;
                    var8 = undefined;
                    if(var9) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                    var9 = _closure2_slot1;
                    var8 = var9.trial_id;
case 6:
                    var4['trial_id'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot6;
                    var2 = var2.USER_DISMISS;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var8 = var8.bind(var10)(var3, var5);
            var5 = var10.useCallback;
            var3 = new Array(3);
            var3[0] = var12;
            var3[1] = var11;
            var3[2] = var2;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 7;
                    var3 = var3[var1];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var3);
                    var6 = var7.track;
                    var3 = _closure1_slot5;
                    var5 = var3.PREMIUM_TRIAL_OFFER_ACTION_SHEET_CTA_CLICKED;
                    var3 = {};
                    var8 = _closure2_slot2;
                    var3['location'] = var8;
                    var9 = _closure2_slot1;
                    var8 = null;
                    var9 = var8 == var9;
                    var8 = undefined;
                    if(var9) { _fun0005_ip = 6; continue _fun0005 }
case 7:
                    var9 = _closure2_slot1;
                    var8 = var9.trial_id;
case 6:
                    var3['trial_id'] = var8;
                    var3 = var6.bind(var7)(var5, var3);
                    var5 = _closure2_slot0;
                    var3 = _closure1_slot6;
                    var3 = var3.TAKE_ACTION;
                    var3 = var5.bind(var1)(var3);
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 9;
                    var2 = var5[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var4 = _closure2_slot2;
                    var2['analyticsLocations'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var10 = var5.bind(var10)(var1, var3);
            var3 = _closure1_slot0;
            var1 = 10;
            var1 = var4[var1];
            var5 = var3.bind(var6)(var1);
            var4 = var5.formatIntervalDuration;
            var3 = {};
            var1 = null;
            var12 = var1 == var2;
            var11 = undefined;
            if(var12) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var12 = var2.subscription_trial;
            var13 = var1 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var11 = var12.interval;
case 8:
            var3['intervalType'] = var11;
            var12 = var1 == var2;
            var11 = undefined;
            if(var12) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var12 = var2.subscription_trial;
            var13 = var1 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var11 = var12.interval_count;
case 11:
            var3['intervalCount'] = var11;
            var11 = var4.bind(var5)(var3);
            var3 = var1 == var2;
            var1 = null;
            if(var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var5 = _closure1_slot7;
            var4 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 11;
            var3 = var12[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.BottomSheet;
            var3 = {};
            var13 = true;
            var3['startExpanded'] = var13;
            var3['onDismiss'] = var8;
            var8 = _closure1_slot1;
            var7 = 12;
            var7 = var12[var7];
            var8 = var8.bind(var6)(var7);
            var7 = {};
            var7['intervalDuration'] = var11;
            var7['trialOffer'] = var2;
            var7['onConfirm'] = var10;
            var7['fallbackPremiumType'] = var9;
            var7 = var5.bind(var6)(var8, var7);
            var3['children'] = var7;
            var2 = var2.id;
            var1 = var5.bind(var6)(var4, var3, var2);
case 14:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();