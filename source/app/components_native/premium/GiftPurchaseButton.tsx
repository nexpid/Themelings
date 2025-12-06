// app/components_native/premium/GiftPurchaseButton.tsx
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/premium/GiftPurchaseButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var13 = var1.style;
            var11 = var1.color;
            var18 = var1.planId;
            var _closure2_slot0 = var18;
            var16 = var1.analyticsLocation;
            var4 = undefined;
            if(!(var16 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var16 = {};
case 2:
            var _closure2_slot1 = var16;
            var17 = var1.recipientUserId;
            var _closure2_slot2 = var17;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 5;
            var2 = var9[var7];
            var6 = var8.bind(var4)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getPremiumSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var5.bind(var6)(var3, var2);
            var2 = 6;
            var2 = var9[var2];
            var5 = var8.bind(var4)(var2);
            var2 = var5.getProductIdForGift;
            var6 = var2.bind(var5)(var18);
            _closure2_slot3 = var6;
            var2 = 7;
            var2 = var9[var2];
            var5 = var8.bind(var4)(var2);
            var2 = var5.useCanPurchaseIAP;
            var5 = var2.bind(var5)(var6);
            var2 = var9[var7];
            var15 = var8.bind(var4)(var2);
            var14 = var15.useStateFromStores;
            var2 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var2;
            var6 = function() {
                var3 = _closure1_slot6;
                var2 = var3.isPurchasingProduct;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var14.bind(var15)(var10, var6);
            var7 = var9[var7];
            var9 = var8.bind(var4)(var7);
            var8 = var9.useStateFromStores;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getProduct;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var8.bind(var9)(var7, var2);
            _closure2_slot4 = var2;
            var2 = null;
            var2 = var2 != var3;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var3.planId;
            var2 = var3 === var18;
case 4:
            _closure2_slot5 = var2;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 8;
            var2 = var10[var2];
            var2 = var9.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var15 = var2.analyticsLocations;
            _closure2_slot6 = var15;
            var3 = _closure1_slot0;
            var2 = 9;
            var2 = var10[var2];
            var7 = var3.bind(var4)(var2);
            var3 = var7.useCreateOrReuseGiftOrder;
            var2 = 'GiftPurchaseButton';
            var14 = var3.bind(var7)(var2);
            _closure2_slot7 = var14;
            var8 = _closure1_slot4;
            var7 = var8.useCallback;
            var3 = _closure1_slot3;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var9 = undefined;
                        var6 = undefined;
case 8: // try_start_0
                        var3 = _closure2_slot7;
                        var2 = {};
                        var4 = _closure2_slot0;
                        var2['planId'] = var4;
                        var4 = _closure2_slot2;
                        var2['recipientUserId'] = var4;
                        var2 = var3.bind(var9)(var2);
                        SaveGenerator(address=50);
case 9:
                        return var2;
case 10:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                        var6 = var2;
case 13: // try_end0
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 12;
                        var3 = var5[var3];
                        var10 = var4.bind(var9)(var3);
                        var8 = var10.getPremiumTypeFromPlanId;
                        var3 = _closure2_slot0;
                        var3 = var8.bind(var10)(var3);
                        var10 = var3.premiumType;
                        var8 = var3.planInterval;
                        var3 = 13;
                        var3 = var5[var3];
                        var5 = var4.bind(var9)(var3);
                        var4 = var5.openGiftModal;
                        var3 = {};
                        var11 = _closure2_slot2;
                        var3['recipientUserId'] = var11;
                        var3['premiumType'] = var10;
                        var3['planInterval'] = var8;
                        var8 = _closure2_slot1;
                        var3['analyticsLocation'] = var8;
                        var7 = _closure2_slot6;
                        var3['analyticsLocations'] = var7;
                        var3['order'] = var6;
                        var3 = var4.bind(var5)(var3);
                        return var9;
case 11:
                        return var2;
case 14: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var3 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var2 = 10;
                        var2 = var10[var2];
                        var4 = var3.bind(var9)(var2);
                        var3 = var4.show;
                        var2 = {};
                        var8 = _closure1_slot0;
                        var5 = 11;
                        var6 = var10[var5];
                        var6 = var8.bind(var9)(var6);
                        var11 = var6.intl;
                        var7 = var11.string;
                        var6 = var10[var5];
                        var6 = var8.bind(var9)(var6);
                        var6 = var6.t;
                        var6 = var6.R0RpRX;
                        var6 = var7.bind(var11)(var6);
                        var2['title'] = var6;
                        var6 = var10[var5];
                        var6 = var8.bind(var9)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var10[var5];
                        var5 = var8.bind(var9)(var5);
                        var5 = var5.t;
                        var5 = var5.CKsXk3;
                        var5 = var6.bind(var7)(var5);
                        var2['body'] = var5;
                        var2 = var3.bind(var4)(var2);
                        var2 = undefined;
                        return var2;
case 6:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = new Array(5);
            var2[0] = var18;
            var2[1] = var17;
            var2[2] = var16;
            var2[3] = var15;
            var2[4] = var14;
            var7 = var7.bind(var8)(var3, var2);
            var3 = _closure1_slot7;
            var8 = 14;
            var1 = var10[var8];
            var2 = var9.bind(var4)(var1);
            var1 = {};
            var1['style'] = var13;
            var12 = function text(arg1) {
                var1 = arg1;
                var4 = var1.style;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 15;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1['style'] = var4;
                var5 = _closure2_slot0;
                var1['basePlanId'] = var5;
                var5 = _closure2_slot5;
                var1['isCurrentPlan'] = var5;
                var5 = true;
                var1['isGift'] = var5;
                var4 = _closure2_slot4;
                var1['product'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1['text'] = var12;
            var1['color'] = var11;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.Sizes;
            var8 = var8.XSMALL;
            var1['size'] = var8;
            var1['onPress'] = var7;
            var1['loading'] = var6;
            var5 = !var5;
            var1['disabled'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();