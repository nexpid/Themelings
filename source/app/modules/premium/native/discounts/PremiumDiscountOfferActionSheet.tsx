// app/modules/premium/native/discounts/PremiumDiscountOfferActionSheet.tsx
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
    var7 = var4.PremiumTypes;
    var _closure1_slot4 = var7;
    var4 = var4.SubscriptionPlanInfo;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot6 = var7;
    var7 = var4.AnalyticsObjectTypes;
    var9 = var4.AnalyticsPages;
    var8 = var4.AnalyticsSections;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = {};
    var9 = var9.USER_SETTINGS;
    var4['page'] = var9;
    var8 = var8.SETTINGS_PREMIUM;
    var4['section'] = var8;
    var7 = var7.BUY;
    var4['objectType'] = var7;
    var _closure1_slot9 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/discounts/PremiumDiscountOfferActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var12 = var1.markAsDismissed;
            var _closure2_slot0 = var12;
            var6 = var1.userDiscountOffer;
            var _closure2_slot1 = var6;
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 5;
            var1 = var9[var1];
            var5 = undefined;
            var4 = var7.bind(var5)(var1);
            var1 = 6;
            var1 = var9[var1];
            var1 = var7.bind(var5)(var1);
            var1 = var1.PREMIUM_DISCOUNT_OFFER_ACTION_SHEET;
            var1 = var4.bind(var5)(var1);
            var13 = var1.analyticsLocations;
            var _closure2_slot2 = var13;
            var10 = _closure1_slot3;
            var8 = var10.useMemo;
            var4 = new Array(1);
            var4[0] = var6;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var1 = var1.discount;
                    var2 = var1.planIds;
                    var1 = 0;
                    var4 = var2[var1];
                    var2 = null;
                    var1 = var2 != var4;
                    var3 = null;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = _closure1_slot5;
                    var3 = var1[var4];
case 2:
                    var4 = var2 == var3;
                    var1 = undefined;
                    if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = var3.premiumType;
case 4:
                    if(!(var2 == var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = _closure1_slot4;
                    var1 = var2.TIER_2;
case 6:
                    return var1;
                }
            };
            var11 = var8.bind(var10)(var1, var4);
            var _closure2_slot3 = var11;
            var8 = var10.useEffect;
            var4 = function() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 7;
                var3 = var5[var1];
                var1 = undefined;
                var8 = var4.bind(var1)(var3);
                var7 = var8.track;
                var3 = _closure1_slot6;
                var6 = var3.PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_VIEWED;
                var3 = {};
                var9 = _closure2_slot2;
                var3['location'] = var9;
                var4 = _closure2_slot1;
                var9 = var4.id;
                var3['discount_offer_id'] = var9;
                var3 = var7.bind(var8)(var6, var3);
                var3 = _closure1_slot0;
                var2 = 8;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.acknowledgeUserOffer;
                var2 = var2.bind(var3)(var1, var4);
                return var1;
            };
            var1 = new Array(0);
            var1 = var8.bind(var10)(var4, var1);
            var8 = var10.useCallback;
            var4 = new Array(3);
            var4[0] = var13;
            var4[1] = var12;
            var4[2] = var6;
            var1 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 7;
                var3 = var3[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var3);
                var6 = var7.track;
                var3 = _closure1_slot6;
                var5 = var3.PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_DISMISSED;
                var4 = {};
                var8 = _closure2_slot2;
                var4['location'] = var8;
                var8 = _closure2_slot1;
                var8 = var8.id;
                var4['discount_offer_id'] = var8;
                var4 = var6.bind(var7)(var5, var4);
                var3 = _closure2_slot0;
                var2 = _closure1_slot7;
                var2 = var2.USER_DISMISS;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var8.bind(var10)(var1, var4);
            var8 = var10.useCallback;
            var4 = new Array(4);
            var4[0] = var13;
            var4[1] = var12;
            var4[2] = var6;
            var4[3] = var11;
            var3 = function() {
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 7;
                var2 = var7[var1];
                var1 = undefined;
                var10 = var3.bind(var1)(var2);
                var9 = var10.track;
                var2 = _closure1_slot6;
                var8 = var2.PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_CTA_CLICKED;
                var2 = {};
                var5 = _closure2_slot2;
                var2['location'] = var5;
                var11 = _closure2_slot1;
                var11 = var11.id;
                var2['discount_offer_id'] = var11;
                var2 = var9.bind(var10)(var8, var2);
                var8 = _closure2_slot0;
                var2 = _closure1_slot7;
                var2 = var2.TAKE_ACTION;
                var2 = var8.bind(var1)(var2);
                var2 = 9;
                var2 = var7[var2];
                var8 = var3.bind(var1)(var2);
                var2 = {};
                var2['analyticsLocations'] = var5;
                var2 = var8.bind(var1)(var2);
                var2 = 10;
                var2 = var7[var2];
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var6 = _closure1_slot9;
                var2['analyticsLocation'] = var6;
                var2['analyticsLocations'] = var5;
                var4 = _closure2_slot3;
                var2['premiumType'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8 = var8.bind(var10)(var3, var4);
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var2 = 11;
            var2 = var9[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.BottomSheet;
            var2 = {};
            var10 = true;
            var2['startExpanded'] = var10;
            var2['onDismiss'] = var1;
            var1 = 12;
            var1 = var9[var1];
            var7 = var7.bind(var5)(var1);
            var1 = {};
            var1['discountOffer'] = var6;
            var1['onConfirm'] = var8;
            var1 = var4.bind(var5)(var7, var1);
            var2['children'] = var1;
            var1 = null;
            var7 = var1 == var6;
            var1 = undefined;
            if(var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var6.id;
case 8:
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();