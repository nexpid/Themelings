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
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/premium/GiftPurchaseButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GiftPurchaseButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.style;
            var11 = var1.variant;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = 'primary';
case 2:
            var15 = var1.planId;
            var _closure2_slot0 = var15;
            var21 = var1.analyticsLocation;
            if(!(var21 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var21 = {};
case 4:
            var _closure2_slot1 = var21;
            var22 = var1.recipientUserId;
            var _closure2_slot2 = var22;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 6;
            var3 = var12[var3];
            var6 = var10.bind(var4)(var3);
            var3 = var6.useButtonTextColorStyles;
            var3 = var3.bind(var6)(var11);
            var16 = {};
            var6 = 7;
            var6 = var12[var6];
            var6 = var10.bind(var4)(var6);
            var6 = var6.TextStyleSheet;
            var24 = var6.text-sm/semibold;
            var25 = var16;
            var6 = copyDataProperties(var25, var24);
            var25 = var16;
            var24 = var3;
            var3 = copyDataProperties(var25, var24);
            var7 = 8;
            var3 = var12[var7];
            var9 = var10.bind(var4)(var3);
            var8 = var9.useStateFromStores;
            var3 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getPremiumSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var8.bind(var9)(var6, var3);
            var6 = 9;
            var6 = var12[var6];
            var8 = var10.bind(var4)(var6);
            var6 = var8.getProductIdForGift;
            var18 = var6.bind(var8)(var15);
            _closure2_slot3 = var18;
            var6 = 10;
            var6 = var12[var6];
            var8 = var10.bind(var4)(var6);
            var6 = var8.useCanPurchaseIAP;
            var8 = var6.bind(var8)(var18);
            var6 = var12[var7];
            var17 = var10.bind(var4)(var6);
            var14 = var17.useStateFromStores;
            var6 = _closure1_slot7;
            var13 = new Array(1);
            var13[0] = var6;
            var9 = function() {
                var3 = _closure1_slot7;
                var2 = var3.isPurchasingProduct;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var14.bind(var17)(var13, var9);
            var7 = var12[var7];
            var12 = var10.bind(var4)(var7);
            var10 = var12.useStateFromStores;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getProduct;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var10.bind(var12)(var7, var6);
            var6 = null;
            var7 = var6 != var3;
            if(!var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var3.planId;
            var7 = var3 === var15;
case 6:
            var13 = _closure1_slot1;
            var17 = _closure1_slot2;
            var3 = 11;
            var3 = var17[var3];
            var3 = var13.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var20 = var3.analyticsLocations;
            _closure2_slot4 = var20;
            var6 = _closure1_slot0;
            var3 = 12;
            var3 = var17[var3];
            var12 = var6.bind(var4)(var3);
            var10 = var12.useCreateOrReuseGiftOrder;
            var3 = 'GiftPurchaseButton';
            var19 = var10.bind(var12)(var3);
            _closure2_slot5 = var19;
            var12 = _closure1_slot4;
            var10 = var12.useCallback;
            var3 = _closure1_slot3;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                        var9 = undefined;
                        var6 = undefined;
case 10: // try_start_0
                        var3 = _closure2_slot5;
                        var2 = {};
                        var4 = _closure2_slot0;
                        var2['planId'] = var4;
                        var4 = _closure2_slot2;
                        var2['recipientUserId'] = var4;
                        var4 = _closure2_slot3;
                        var2['productId'] = var4;
                        var2 = var3.bind(var9)(var2);
                        SaveGenerator(address=59);
case 11:
                        return var2;
case 12:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                        var6 = var2;
case 15: // try_end0
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 15;
                        var3 = var5[var3];
                        var10 = var4.bind(var9)(var3);
                        var8 = var10.getPremiumTypeFromPlanId;
                        var3 = _closure2_slot0;
                        var3 = var8.bind(var10)(var3);
                        var10 = var3.premiumType;
                        var8 = var3.planInterval;
                        var3 = 16;
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
                        var7 = _closure2_slot4;
                        var3['analyticsLocations'] = var7;
                        var3['order'] = var6;
                        var3 = var4.bind(var5)(var3);
                        return var9;
case 13:
                        return var2;
case 16: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var3 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var2 = 13;
                        var2 = var10[var2];
                        var4 = var3.bind(var9)(var2);
                        var3 = var4.show;
                        var2 = {};
                        var8 = _closure1_slot0;
                        var5 = 14;
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
case 8:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = new Array(6);
            var2[0] = var15;
            var2[1] = var22;
            var2[2] = var21;
            var2[3] = var20;
            var2[4] = var19;
            var2[5] = var18;
            var10 = var10.bind(var12)(var3, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var1['style'] = var5;
            var5 = 17;
            var5 = var17[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BaseTextButton;
            var5 = {};
            var12 = 18;
            var12 = var17[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['style'] = var16;
            var12['basePlanId'] = var15;
            var12['isCurrentPlan'] = var7;
            var7 = true;
            var12['isGift'] = var7;
            var12['product'] = var14;
            var12 = var13.bind(var4)(var12);
            var5['textElement'] = var12;
            var5['variant'] = var11;
            var11 = 'sm';
            var5['size'] = var11;
            var5['onPress'] = var10;
            var5['loading'] = var9;
            var8 = !var8;
            var5['disabled'] = var8;
            var5['grow'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();