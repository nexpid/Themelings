// app/modules/premium/native/PremiumPlanSelect.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var1 = function getPlanDescription(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var2 = var6.premiumTier;
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var6.numPremiumGuild;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 18;
            var2 = var2[var8];
            var7 = undefined;
            var2 = var3.bind(var7)(var2);
            var4 = var2.intl;
            var3 = var4.formatToPlainString;
            var5 = var6.premiumTier;
            var2 = _closure1_slot19;
            var2 = var2.TIER_1;
            if(!(var5 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var5.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.u6dBsN;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var5.bind(var7)(var1);
            var1 = var1.t;
            var2 = var1.sexoHq;
case 8:
            var1 = {};
            var5 = var6.numPremiumGuild;
            var1['num'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 9; continue _fun0001;
case 4:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 19;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.getPremiumTypeDisplayName;
            var2 = var6.premiumTier;
            var1 = var3.bind(var4)(var2);
case 9:
            _fun0001_ip = 10; continue _fun0001;
case 2:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 18;
            var4 = var8[var2];
            var3 = undefined;
            var4 = var7.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var8[var2];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.gDsyB9;
            var2 = {};
            var6 = var6.numPremiumGuild;
            var2['numSubscriptions'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 10:
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function PlanRow(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var13 = var1.plan;
            var _closure2_slot0 = var13;
            var2 = var1.purchase;
            var _closure2_slot1 = var2;
            var9 = var1.style;
            var15 = var1.subscription;
            var _closure2_slot2 = var15;
            var6 = var1.disabled;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var6 = false;
case 11:
            var17 = var1.hasBackground;
            if(!(var17 === var4)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var17 = false;
case 13:
            var _closure2_slot3 = var4;
            var1 = _closure1_slot34;
            var18 = var1.bind(var4)();
            var2 = _closure1_slot16;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.isPurchasing;
                return var1;
            };
            var11 = var2.bind(var4)(var1);
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 26;
            var1 = var3[var1];
            var7 = var2.bind(var4)(var1);
            var3 = var7.useStateFromStoresArray;
            var1 = _closure1_slot14;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var4 = _closure1_slot14;
                var3 = var4.getProduct;
                var1 = _closure2_slot0;
                var1 = var1.productId;
                var3 = var3.bind(var4)(var1);
                var1 = new Array(2);
                var1[0] = var3;
                var3 = _closure1_slot14;
                var2 = var3.isBusy;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            var3 = var3.bind(var7)(var2, var1);
            var2 = _closure1_slot4;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var3 = 0;
            var16 = var2[var3];
            var1 = 1;
            var8 = var2[var1];
            var2 = _closure1_slot11;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.isPatchOrderLoading;
                    if(var1) { _fun0003_ip = 3; continue _fun0003 }
case 15:
                    var1 = var2.isCreateOrderLoading;
case 3:
                    return var1;
                }
            };
            var2 = var2.bind(var4)(var1);
            var1 = null;
            var7 = var1 != var2;
            if(!var7) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var7 = var2;
case 16:
            var10 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 27;
            var2 = var14[var2];
            var14 = var10.bind(var4)(var2);
            var10 = var14.useCheckoutPlanPriceString;
            var2 = var13.productId;
            var2 = var10.bind(var14)(var2, var16);
            var10 = var1 != var2;
            var16 = '$...';
            if(!var10) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var16 = var2;
case 18:
            var10 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 28;
            var2 = var14[var2];
            var2 = var10.bind(var4)(var2);
            var20 = var2.bind(var4)();
            var14 = var13.premiumTier;
            var2 = _closure1_slot19;
            var2 = var2.TIER_2;
            var10 = null;
            if(!(var14 === var2)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var2 = var13.numPremiumGuild;
            var10 = null;
            if(!(var3 === var2)) { _fun0002_ip = 20; continue _fun0002 }
case 22:
            var19 = _closure1_slot31;
            var22 = _closure1_slot0;
            var25 = _closure1_slot2;
            var2 = 29;
            var2 = var25[var2];
            var2 = var22.bind(var4)(var2);
            var14 = var2.LegacyText;
            var2 = {};
            var23 = var18.rowText;
            var21 = new Array(2);
            var21[0] = var23;
            var23 = var18.rowPlanDescriptionSubtext;
            var21[1] = var23;
            var2['style'] = var21;
            var21 = 18;
            var23 = var25[var21];
            var23 = var22.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.format;
            var21 = var25[var21];
            var21 = var22.bind(var4)(var21);
            var21 = var21.t;
            var22 = var21.he52LA;
            var21 = {};
            var25 = _closure1_slot17;
            var21['num'] = var25;
            var21 = var23.bind(var24)(var22, var21);
            var2['children'] = var21;
            var10 = var19.bind(var4)(var14, var2);
case 20:
            var2 = var13.premiumTier;
            if(!(var1 != var2)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var2 = var13.numPremiumGuild;
            if(!(var3 === var2)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var3 = var13.premiumTier;
            var2 = _closure1_slot19;
            var2 = var2.TIER_0;
            if(!(var2 !== var3)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var2 = _closure1_slot19;
            var2 = var2.TIER_1;
            if(!(var2 !== var3)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var2 = _closure1_slot19;
            var2 = var2.TIER_2;
            if(!(var2 !== var3)) { _fun0002_ip = 31; continue _fun0002 }
case 25:
            var3 = var13.premiumTier;
            var2 = _closure1_slot19;
            var2 = var2.TIER_1;
            if(!(var3 !== var2)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 25;
            var2 = var14[var2];
            var14 = var3.bind(var4)(var2);
            _fun0002_ip = 34; continue _fun0002;
case 32:
            var3 = _closure1_slot1;
            var19 = _closure1_slot2;
            var2 = 24;
            var2 = var19[var2];
            var14 = var3.bind(var4)(var2);
case 34:
            _fun0002_ip = 35; continue _fun0002;
case 31:
            var3 = _closure1_slot1;
            var19 = _closure1_slot2;
            var2 = 23;
            var2 = var19[var2];
            var14 = var3.bind(var4)(var2);
            _fun0002_ip = 35; continue _fun0002;
case 29:
            var3 = _closure1_slot1;
            var19 = _closure1_slot2;
            var2 = 22;
            var2 = var19[var2];
            var14 = var3.bind(var4)(var2);
            _fun0002_ip = 35; continue _fun0002;
case 27:
            var3 = _closure1_slot1;
            var19 = _closure1_slot2;
            var2 = 21;
            var2 = var19[var2];
            var14 = var3.bind(var4)(var2);
            _fun0002_ip = 35; continue _fun0002;
case 23:
            var3 = _closure1_slot1;
            var19 = _closure1_slot2;
            var2 = 20;
            var2 = var19[var2];
            var14 = var3.bind(var4)(var2);
case 35:
            var2 = var1 != var15;
            var1 = null;
            if(!var2) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var3 = _closure1_slot0;
            var19 = _closure1_slot2;
            var2 = 19;
            var2 = var19[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getPremiumTypeFromSubscription;
            var1 = var2.bind(var3)(var15);
case 36:
            _closure2_slot3 = var1;
            var3 = _closure1_slot31;
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var1 = 30;
            var1 = var21[var1];
            var1 = var19.bind(var4)(var1);
            var2 = var1.TouchableHighlight;
            var1 = {'activeOpacity': 0.6, 'underlayColor': null, 'accessibilityRole': 'button'};
            var15 = 31;
            var15 = var21[var15];
            var19 = var19.bind(var4)(var15);
            var15 = var19.isThemeDark;
            var20 = var15.bind(var19)(var20);
            var19 = 'none';
            var15 = var19;
            if(var20) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var15 = var19;
            if(!var17) { _fun0002_ip = 38; continue _fun0002 }
case 40:
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var17 = 17;
            var17 = var20[var17];
            var17 = var19.bind(var4)(var17);
            var17 = var17.unsafe_rawColors;
            var15 = var17.PRIMARY_230;
case 38:
            var1['underlayColor'] = var15;
            if(var6) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var6 = var11;
case 41:
            if(var6) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var6 = var8;
case 43:
            if(var6) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var6 = var7;
case 45:
            var1['disabled'] = var6;
            var5 = function onPress() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 47; continue _fun0004 }
case 48:
                    var3 = _closure2_slot3;
                    var2 = _closure1_slot19;
                    var2 = var2.TIER_2;
                    if(!(var3 !== var2)) { _fun0004_ip = 49; continue _fun0004 }
case 50:
                    var3 = _closure2_slot3;
                    var2 = _closure1_slot19;
                    var2 = var2.TIER_1;
                    if(!(var3 === var2)) { _fun0004_ip = 47; continue _fun0004 }
case 49:
                    var2 = _closure2_slot0;
                    var3 = var2.premiumTier;
                    var2 = _closure1_slot19;
                    var2 = var2.TIER_0;
                    if(!(var3 === var2)) { _fun0004_ip = 47; continue _fun0004 }
case 51:
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 32;
                    var2 = var7[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var6 = _closure2_slot2;
                    var2['subscription'] = var6;
                    var6 = _closure1_slot0;
                    var5 = 33;
                    var5 = var7[var5];
                    var5 = var6.bind(var4)(var5);
                    var5 = var5.WhatYouLoseMode;
                    var5 = var5.DOWNGRADE;
                    var2['mode'] = var5;
                    var5 = function onContinue() {
                        var3 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var2 = var1.productId;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2['onContinue'] = var5;
                    var2 = var3.bind(var4)(var2);
                    _fun0004_ip = 52; continue _fun0004;
case 47:
                    var3 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var2 = var1.productId;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 52:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPress'] = var5;
            var7 = _closure1_slot32;
            var6 = _closure1_slot8;
            var5 = {};
            var11 = var18.row;
            var8 = new Array(2);
            var8[0] = var11;
            var8[1] = var9;
            var5['style'] = var8;
            var11 = _closure1_slot31;
            var9 = _closure1_slot7;
            var8 = {};
            var15 = _closure1_slot35;
            var15 = var15[var14];
            var15 = var18[var15];
            var8['style'] = var15;
            var8['source'] = var14;
            var9 = var11.bind(var4)(var9, var8);
            var8 = new Array(4);
            var8[0] = var9;
            var19 = _closure1_slot31;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 29;
            var11 = var14[var9];
            var11 = var15.bind(var4)(var11);
            var17 = var11.LegacyText;
            var11 = {};
            var21 = var18.rowText;
            var20 = new Array(2);
            var20[0] = var21;
            var21 = var18.rowPlanDescription;
            var20[1] = var21;
            var11['style'] = var20;
            var20 = _closure1_slot38;
            var20 = var20.bind(var4)(var13);
            var11['children'] = var20;
            var11 = var19.bind(var4)(var17, var11);
            var8[1] = var11;
            var8[2] = var10;
            var11 = _closure1_slot31;
            var9 = var14[var9];
            var9 = var15.bind(var4)(var9);
            var10 = var9.LegacyText;
            var9 = {};
            var19 = var18.rowText;
            var17 = new Array(2);
            var17[0] = var19;
            var18 = var18.rowPrice;
            var17[1] = var18;
            var9['style'] = var17;
            var18 = 18;
            var14 = var14[var18];
            var14 = var15.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.format;
            var17 = var13.interval;
            var13 = _closure1_slot20;
            var13 = var13.MONTH;
            if(!(var17 !== var13)) { _fun0002_ip = 53; continue _fun0002 }
case 54:
            var17 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var18];
            var13 = var17.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.rS8FA+;
            _fun0002_ip = 55; continue _fun0002;
case 53:
            var17 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var18];
            var12 = var17.bind(var4)(var12);
            var12 = var12.t;
            var13 = var12.AbOLNu;
case 55:
            var12 = {};
            var12['price'] = var16;
            var12 = var14.bind(var15)(var13, var12);
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[3] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function PlanSection(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var7 = var1.plans;
            var2 = var1.purchase;
            var _closure2_slot0 = var2;
            var2 = var1.analyticsLoadId;
            var _closure2_slot1 = var2;
            var2 = var1.trackNewPaymentFlow;
            var _closure2_slot2 = var2;
            var2 = var1.trackPaymentFlowStep;
            var _closure2_slot3 = var2;
            var1 = var1.subscription;
            var _closure2_slot4 = var1;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var3 = _closure1_slot10;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.getCheckoutContextRecord;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var3.bind(var4)(var2);
            var _closure2_slot5 = var6;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 34;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isIOS;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0005_ip = 56; continue _fun0005 }
case 57:
            var3 = null;
            var2 = var3 != var6;
case 56:
            _closure2_slot6 = var2;
            var3 = _closure1_slot31;
            var2 = _closure1_slot8;
            var1 = {};
            var6 = var7.map;
            var5 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot31;
                var4 = _closure1_slot39;
                var3 = {};
                var3['plan'] = var1;
                var2 = _closure2_slot4;
                var3['subscription'] = var2;
                var2 = function purchase(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var4 = arg1;
                        var _closure4_slot0 = var4;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var14 = 35;
                        var1 = var1[var14];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.getToggledIntervalProduct;
                        var7 = var1.bind(var2)(var4);
                        var _closure4_slot1 = var7;
                        var2 = _closure2_slot6;
                        var5 = null;
                        var9 = null;
                        if(!var2) { _fun0006_ip = 58; continue _fun0006 }
case 14:
                        var2 = var5 != var7;
                        var9 = null;
                        if(!var2) { _fun0006_ip = 58; continue _fun0006 }
case 59:
                        var2 = _closure2_slot5;
                        var10 = var5 == var2;
                        var2 = undefined;
                        if(var10) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                        var12 = _closure2_slot5;
                        var11 = var12.getAvailablePlanForItems;
                        var13 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var10 = var10[var14];
                        var13 = var13.bind(var3)(var10);
                        var10 = var13.getSubscriptionItemsForProduct;
                        var10 = var10.bind(var13)(var7);
                        var2 = var11.bind(var12)(var10);
case 60:
                        var10 = var5 != var2;
                        var9 = null;
                        if(!var10) { _fun0006_ip = 58; continue _fun0006 }
case 62:
                        var9 = var2;
case 58:
                        var _closure4_slot2 = var9;
                        var2 = _closure2_slot6;
                        if(var2) { _fun0006_ip = 63; continue _fun0006 }
case 64:
                        var2 = var5 != var7;
                        if(!var2) { _fun0006_ip = 65; continue _fun0006 }
case 66:
                        var11 = _closure1_slot14;
                        var10 = var11.getProduct;
                        var10 = var10.bind(var11)(var7);
                        var2 = var5 != var10;
case 65:
                        _fun0006_ip = 67; continue _fun0006;
case 63:
                        var2 = var5 != var9;
case 67:
                        if(!(var5 != var7)) { _fun0006_ip = 68; continue _fun0006 }
case 69:
                        if(!var2) { _fun0006_ip = 68; continue _fun0006 }
case 70:
                        var5 = _closure2_slot3;
                        var2 = {};
                        var10 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var9 = 36;
                        var11 = var7[var9];
                        var11 = var10.bind(var3)(var11);
                        var11 = var11.PaymentFlowStep;
                        var11 = var11.PLAN_SELECT;
                        var2['fromStep'] = var11;
                        var9 = var7[var9];
                        var9 = var10.bind(var3)(var9);
                        var9 = var9.PaymentFlowStep;
                        var9 = var9.YEARLY_UPSELL;
                        var2['toStep'] = var9;
                        var2['productId'] = var4;
                        var2 = var5.bind(var3)(var2);
                        var5 = _closure1_slot1;
                        var2 = 37;
                        var2 = var7[var2];
                        var7 = var5.bind(var3)(var2);
                        var5 = var7.openLazy;
                        var2 = {'importer': null, 'hideActionSheet': true, 'isDismissable': true};
                        var8 = function importer() {
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var2 = 39;
                            var2 = var1[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = 38;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var3 = var3.bind(var4)(var2, var1);
                            var2 = var3.then;
                            var1 = function(arg1) {
                                var2 = arg1;
                                var2 = var2.default;
                                var _closure6_slot0 = var2;
                                var1 = function(arg1) {
                                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                        var4 = _closure1_slot31;
                                        var3 = _closure6_slot0;
                                        var2 = {};
                                        var11 = arg1;
                                        var12 = var2;
                                        var1 = copyDataProperties(var12, var11);
                                        var7 = _closure4_slot1;
                                        var1 = 'productId';
                                        var2[0] = var7;
                                        var1 = _closure4_slot2;
                                        var8 = null;
                                        var10 = var8 == var1;
                                        var1 = undefined;
                                        var7 = undefined;
                                        if(var10) { _fun0007_ip = 71; continue _fun0007 }
case 72:
                                        var10 = _closure4_slot2;
                                        var9 = var10.getPriceString;
                                        var7 = var9.bind(var10)();
case 71:
                                        var9 = var8 != var7;
                                        var8 = null;
                                        if(!var9) { _fun0007_ip = 73; continue _fun0007 }
case 74:
                                        var8 = var7;
case 73:
                                        var7 = 'orderPriceString';
                                        var2[6] = var8;
                                        var8 = _closure1_slot3;
                                        var7 = function* () {
                                            var1 = function* anon_0_() {
                                                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                                    StartGenerator();
                                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                                    if(var2) { _fun0008_ip = 75; continue _fun0008 }
case 76:
                                                    var6 = _closure2_slot3;
                                                    var4 = {};
                                                    var7 = _closure1_slot0;
                                                    var8 = _closure1_slot2;
                                                    var5 = 36;
                                                    var9 = var8[var5];
                                                    var3 = undefined;
                                                    var9 = var7.bind(var3)(var9);
                                                    var9 = var9.PaymentFlowStep;
                                                    var9 = var9.YEARLY_UPSELL;
                                                    var4['fromStep'] = var9;
                                                    var5 = var8[var5];
                                                    var5 = var7.bind(var3)(var5);
                                                    var5 = var5.PaymentFlowStep;
                                                    var5 = var5.EXTERNAL_PAYMENT;
                                                    var4['toStep'] = var5;
                                                    var5 = _closure4_slot0;
                                                    var4['productId'] = var5;
                                                    var4 = var6.bind(var3)(var4);
                                                    var4 = _closure2_slot0;
                                                    var2 = _closure2_slot1;
                                                    var2 = var4.bind(var3)(var5, var2);
                                                    SaveGenerator(address=122);
case 6:
                                                    return var2;
case 77:
                                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                                    if(var4) { _fun0008_ip = 78; continue _fun0008 }
case 60:
                                                    return var3;
case 78:
                                                    return var2;
case 75:
                                                    return var1;
                                                }
                                            };
                                            return var1;
                                        };
                                        var8 = var8.bind(var1)(var7);
                                        var7 = 'continueWithDefault';
                                        var2[6] = var8;
                                        var6 = _closure1_slot3;
                                        var5 = function* () {
                                            var1 = function* anon_0_() {
                                                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                                    StartGenerator();
                                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                                    if(var2) { _fun0009_ip = 79; continue _fun0009 }
case 80:
                                                    var4 = _closure1_slot0;
                                                    var3 = _closure1_slot2;
                                                    var2 = 36;
                                                    var2 = var3[var2];
                                                    var3 = undefined;
                                                    var4 = var4.bind(var3)(var2);
                                                    var2 = var4.getNewAnalyticsLoadId;
                                                    var5 = var2.bind(var4)();
                                                    var7 = _closure2_slot2;
                                                    var6 = {};
                                                    var6['newFlowAnalyticsLoadId'] = var5;
                                                    var4 = _closure4_slot1;
                                                    var6['productId'] = var4;
                                                    var6 = var7.bind(var3)(var6);
                                                    var2 = _closure2_slot0;
                                                    var2 = var2.bind(var3)(var4, var5);
                                                    SaveGenerator(address=87);
case 61:
                                                    return var2;
case 73:
                                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                                    if(var4) { _fun0009_ip = 81; continue _fun0009 }
case 82:
                                                    return var3;
case 81:
                                                    return var2;
case 79:
                                                    return var1;
                                                }
                                            };
                                            return var1;
                                        };
                                        var6 = var6.bind(var1)(var5);
                                        var5 = 'continueWithUpsell';
                                        var2[4] = var6;
                                        var1 = var4.bind(var1)(var3, var2);
                                        return var1;
                                    }
                                };
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var2['importer'] = var8;
                        var2 = var5.bind(var7)(var2);
                        return var3;
case 68:
                        var5 = _closure2_slot3;
                        var2 = {};
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 36;
                        var9 = var8[var6];
                        var9 = var7.bind(var3)(var9);
                        var9 = var9.PaymentFlowStep;
                        var9 = var9.PLAN_SELECT;
                        var2['fromStep'] = var9;
                        var6 = var8[var6];
                        var6 = var7.bind(var3)(var6);
                        var6 = var6.PaymentFlowStep;
                        var6 = var6.EXTERNAL_PAYMENT;
                        var2['toStep'] = var6;
                        var2['productId'] = var4;
                        var2 = var5.bind(var3)(var2);
                        var2 = _closure2_slot0;
                        var1 = _closure2_slot1;
                        var1 = var2.bind(var3)(var4, var1);
                        return var1;
                    }
                };
                var3['purchase'] = var2;
                var2 = var1.productId;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var1 = function CurrentPlanRow(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var13 = var1.subscription;
            var _closure2_slot0 = var13;
            var2 = var1.trackPaymentFlowStep;
            var _closure2_slot1 = var2;
            var2 = var1.trackNewPaymentFlow;
            var _closure2_slot2 = var2;
            var2 = var1.purchase;
            var _closure2_slot3 = var2;
            var2 = var1.analyticsLoadId;
            var _closure2_slot4 = var2;
            var1 = var1.showCurrentPlan;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var2 = _closure1_slot34;
            var8 = var2.bind(var4)();
            if(!var1) { _fun0010_ip = 83; continue _fun0010 }
case 7:
            var14 = null;
            if(!(var14 != var13)) { _fun0010_ip = 83; continue _fun0010 }
case 84:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 35;
            var3 = var2[var1];
            var6 = var5.bind(var4)(var3);
            var3 = var6.getProductIdFromSubscription;
            var10 = true;
            var3 = var3.bind(var6)(var13, var10);
            _closure2_slot5 = var3;
            var2 = var2[var1];
            var5 = var5.bind(var4)(var2);
            var2 = var5.getPremiumBundledItemsFromProductId;
            var15 = var2.bind(var5)(var3);
            var6 = var15.premiumTier;
            if(!(var14 == var6)) { _fun0010_ip = 65; continue _fun0010 }
case 47:
            var2 = _closure1_slot29;
            var5 = var2.PREMIUM_GUILD;
            _fun0010_ip = 52; continue _fun0010;
case 65:
            var2 = _closure1_slot28;
            var5 = var2.bind(var4)(var6);
case 52:
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getToggledIntervalProduct;
            var11 = var1.bind(var2)(var3);
            _closure2_slot6 = var11;
            var3 = _closure1_slot31;
            var2 = _closure1_slot1;
            var1 = 40;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = var8.currentPlanGradient;
            var1['style'] = var6;
            var1['colors'] = var5;
            var5 = _closure1_slot25;
            var5 = var5.START;
            var1['start'] = var5;
            var5 = _closure1_slot25;
            var5 = var5.END;
            var1['end'] = var5;
            var7 = _closure1_slot31;
            var6 = _closure1_slot39;
            var5 = {};
            var5['plan'] = var15;
            var5['subscription'] = var13;
            var11 = var14 == var11;
            if(!var11) { _fun0010_ip = 85; continue _fun0010 }
case 86:
            var13 = var13.status;
            var12 = _closure1_slot27;
            var12 = var12.CANCELED;
            var11 = var13 !== var12;
case 85:
            var5['disabled'] = var11;
            var5['hasBackground'] = var10;
            var9 = function purchase() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 35;
                    var1 = var3[var1];
                    var6 = undefined;
                    var4 = var2.bind(var6)(var1);
                    var2 = var4.getProductIdsForBothIntervals;
                    var1 = _closure2_slot5;
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.monthly;
                    var _closure3_slot0 = var2;
                    var4 = var1.yearly;
                    var _closure3_slot1 = var4;
                    var1 = _closure2_slot0;
                    var2 = null;
                    var1 = var2 == var1;
                    var5 = undefined;
                    if(var1) { _fun0011_ip = 87; continue _fun0011 }
case 88:
                    var1 = _closure2_slot0;
                    var5 = var1.status;
case 87:
                    var1 = _closure1_slot27;
                    var1 = var1.CANCELED;
                    if(!(var5 !== var1)) { _fun0011_ip = 89; continue _fun0011 }
case 90:
                    var1 = _closure2_slot6;
                    var5 = var2 != var1;
                    var1 = undefined;
                    if(!var5) { _fun0011_ip = 91; continue _fun0011 }
case 77:
                    var10 = _closure1_slot14;
                    var9 = var10.getProduct;
                    var5 = _closure2_slot6;
                    var5 = var9.bind(var10)(var5);
                    var5 = var2 != var5;
                    var1 = undefined;
                    if(!var5) { _fun0011_ip = 91; continue _fun0011 }
case 8:
                    var9 = _closure2_slot1;
                    var5 = {};
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 36;
                    var13 = var12[var10];
                    var13 = var11.bind(var6)(var13);
                    var13 = var13.PaymentFlowStep;
                    var13 = var13.PLAN_SELECT;
                    var5['fromStep'] = var13;
                    var10 = var12[var10];
                    var10 = var11.bind(var6)(var10);
                    var10 = var10.PaymentFlowStep;
                    var10 = var10.EXTERNAL_PAYMENT;
                    var5['toStep'] = var10;
                    var10 = _closure2_slot6;
                    var5['productId'] = var10;
                    var5 = var9.bind(var6)(var5);
                    var10 = _closure2_slot3;
                    var9 = _closure2_slot6;
                    var5 = _closure2_slot4;
                    var1 = var10.bind(var6)(var9, var5);
case 91:
                    _fun0011_ip = 92; continue _fun0011;
case 89:
                    if(!(var2 != var4)) { _fun0011_ip = 93; continue _fun0011 }
case 94:
                    var4 = _closure2_slot1;
                    var2 = {};
                    var10 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var9 = 36;
                    var11 = var5[var9];
                    var11 = var10.bind(var6)(var11);
                    var11 = var11.PaymentFlowStep;
                    var11 = var11.PLAN_SELECT;
                    var2['fromStep'] = var11;
                    var9 = var5[var9];
                    var9 = var10.bind(var6)(var9);
                    var9 = var9.PaymentFlowStep;
                    var9 = var9.YEARLY_UPSELL;
                    var2['toStep'] = var9;
                    var9 = _closure2_slot5;
                    var2['productId'] = var9;
                    var2 = var4.bind(var6)(var2);
                    var4 = _closure1_slot1;
                    var2 = 37;
                    var2 = var5[var2];
                    var5 = var4.bind(var6)(var2);
                    var4 = var5.openLazy;
                    var2 = {'importer': null, 'hideActionSheet': true, 'isDismissable': true};
                    var8 = function importer() {
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 39;
                        var2 = var1[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = 38;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var3 = var3.bind(var4)(var2, var1);
                        var2 = var3.then;
                        var1 = function(arg1) {
                            var2 = arg1;
                            var2 = var2.default;
                            var _closure5_slot0 = var2;
                            var1 = function(arg1) {
                                var4 = _closure1_slot31;
                                var3 = _closure5_slot0;
                                var2 = {};
                                var9 = arg1;
                                var10 = var2;
                                var1 = copyDataProperties(var10, var9);
                                var7 = _closure3_slot1;
                                var1 = 'productId';
                                var2[0] = var7;
                                var8 = _closure1_slot3;
                                var1 = undefined;
                                var7 = function* () {
                                    var1 = function* anon_0_() {
                                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(var2) { _fun0012_ip = 79; continue _fun0012 }
case 80:
                                            var4 = _closure1_slot0;
                                            var3 = _closure1_slot2;
                                            var2 = 36;
                                            var2 = var3[var2];
                                            var3 = undefined;
                                            var4 = var4.bind(var3)(var2);
                                            var2 = var4.getNewAnalyticsLoadId;
                                            var5 = var2.bind(var4)();
                                            var7 = _closure2_slot2;
                                            var6 = {};
                                            var6['newFlowAnalyticsLoadId'] = var5;
                                            var4 = _closure3_slot1;
                                            var6['productId'] = var4;
                                            var6 = var7.bind(var3)(var6);
                                            var2 = _closure2_slot3;
                                            var2 = var2.bind(var3)(var4, var5);
                                            SaveGenerator(address=87);
case 61:
                                            return var2;
case 73:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(var4) { _fun0012_ip = 81; continue _fun0012 }
case 82:
                                            return var3;
case 81:
                                            return var2;
case 79:
                                            return var1;
                                        }
                                    };
                                    return var1;
                                };
                                var8 = var8.bind(var1)(var7);
                                var7 = 'continueWithUpsell';
                                var2[6] = var8;
                                var6 = _closure1_slot3;
                                var5 = function* () {
                                    var1 = function* anon_0_() {
                                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(var2) { _fun0013_ip = 75; continue _fun0013 }
case 76:
                                            var6 = _closure2_slot1;
                                            var4 = {};
                                            var7 = _closure1_slot0;
                                            var8 = _closure1_slot2;
                                            var5 = 36;
                                            var9 = var8[var5];
                                            var3 = undefined;
                                            var9 = var7.bind(var3)(var9);
                                            var9 = var9.PaymentFlowStep;
                                            var9 = var9.YEARLY_UPSELL;
                                            var4['fromStep'] = var9;
                                            var5 = var8[var5];
                                            var5 = var7.bind(var3)(var5);
                                            var5 = var5.PaymentFlowStep;
                                            var5 = var5.EXTERNAL_PAYMENT;
                                            var4['toStep'] = var5;
                                            var5 = _closure3_slot0;
                                            var4['productId'] = var5;
                                            var4 = var6.bind(var3)(var4);
                                            var4 = _closure2_slot3;
                                            var2 = _closure2_slot4;
                                            var2 = var4.bind(var3)(var5, var2);
                                            SaveGenerator(address=122);
case 6:
                                            return var2;
case 77:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(var4) { _fun0013_ip = 78; continue _fun0013 }
case 60:
                                            return var3;
case 78:
                                            return var2;
case 75:
                                            return var1;
                                        }
                                    };
                                    return var1;
                                };
                                var6 = var6.bind(var1)(var5);
                                var5 = 'continueWithDefault';
                                var2[4] = var6;
                                var1 = var4.bind(var1)(var3, var2);
                                return var1;
                            };
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2['importer'] = var8;
                    var2 = var4.bind(var5)(var2);
                    var2 = undefined;
                    _fun0011_ip = 95; continue _fun0011;
case 93:
                    var5 = _closure2_slot1;
                    var4 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 36;
                    var10 = var9[var7];
                    var10 = var8.bind(var6)(var10);
                    var10 = var10.PaymentFlowStep;
                    var10 = var10.PLAN_SELECT;
                    var4['fromStep'] = var10;
                    var7 = var9[var7];
                    var7 = var8.bind(var6)(var7);
                    var7 = var7.PaymentFlowStep;
                    var7 = var7.EXTERNAL_PAYMENT;
                    var4['toStep'] = var7;
                    var7 = _closure2_slot5;
                    var4['productId'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var5 = _closure2_slot3;
                    var4 = _closure2_slot5;
                    var3 = _closure2_slot4;
                    var2 = var5.bind(var6)(var4, var3);
case 95:
                    var1 = var2;
case 92:
                    return var1;
                }
            };
            var5['purchase'] = var9;
            var8 = var8.currentPlanRow;
            var5['style'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 83:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = function PlanSectionHeader(arg1) {
        var1 = arg1;
        var5 = var1.string;
        var2 = _closure1_slot34;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var3 = _closure1_slot31;
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 29;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.LegacyText;
        var1 = {};
        var6 = var6.header;
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot42 = var1;
    var1 = function PlanSections(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var2 = var1.plans;
            var _closure2_slot0 = var2;
            var15 = var1.subscription;
            var _closure2_slot1 = var15;
            var10 = var1.showCurrentPlan;
            var14 = var1.analyticsLoadId;
            var _closure2_slot2 = var14;
            var12 = var1.trackPaymentFlowStep;
            var _closure2_slot3 = var12;
            var11 = var1.trackNewPaymentFlow;
            var _closure2_slot4 = var11;
            var13 = var1.purchase;
            var _closure2_slot5 = var13;
            var4 = undefined;
            var _closure2_slot7 = var4;
            var1 = _closure1_slot34;
            var5 = var1.bind(var4)();
            var2 = _closure1_slot10;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.getCheckoutContextRecord;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var2.bind(var4)(var1);
            var _closure2_slot6 = var1;
            var1 = null;
            var2 = var1 != var15;
            if(!var2) { _fun0014_ip = 64; continue _fun0014 }
case 96:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 35;
            var2 = var8[var2];
            var8 = var3.bind(var4)(var2);
            var3 = var8.getProductIdFromSubscription;
            var2 = false;
            var1 = var3.bind(var8)(var15, var2);
case 64:
            _closure2_slot7 = var1;
            var3 = _closure1_slot32;
            var2 = _closure1_slot8;
            var1 = {};
            var5 = var5.container;
            var1['style'] = var5;
            var9 = _closure1_slot31;
            var8 = _closure1_slot41;
            var5 = {};
            var5['subscription'] = var15;
            var5['analyticsLoadId'] = var14;
            var5['purchase'] = var13;
            var5['trackPaymentFlowStep'] = var12;
            var5['trackNewPaymentFlow'] = var11;
            var5['showCurrentPlan'] = var10;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = _closure1_slot36;
            var7 = var8.map;
            var6 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = arg1;
                    var1 = var3.getLabel;
                    var3 = var3.predicate;
                    var _closure3_slot0 = var3;
                    var4 = _closure2_slot0;
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                            var3 = arg1;
                            var2 = var3.productId;
                            var1 = _closure2_slot7;
                            var1 = var2 !== var1;
                            if(!var1) { _fun0016_ip = 97; continue _fun0016 }
case 98:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 35;
                            var5 = var5[var2];
                            var2 = undefined;
                            var7 = var6.bind(var2)(var5);
                            var6 = var7.productsHaveSamePerks;
                            var5 = var3.productId;
                            var2 = _closure2_slot7;
                            var2 = var6.bind(var7)(var5, var2);
                            var1 = !var2;
case 97:
                            if(!var1) { _fun0016_ip = 99; continue _fun0016 }
case 100:
                            var5 = _closure3_slot0;
                            var2 = undefined;
                            var1 = var5.bind(var2)(var3);
case 99:
                            if(!var1) { _fun0016_ip = 101; continue _fun0016 }
case 82:
                            var5 = var3.premiumTier;
                            var2 = _closure1_slot19;
                            var2 = var2.TIER_1;
                            var1 = var5 !== var2;
case 101:
                            if(!var1) { _fun0016_ip = 102; continue _fun0016 }
case 103:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 34;
                            var2 = var7[var2];
                            var8 = undefined;
                            var5 = var5.bind(var8)(var2);
                            var2 = var5.isIOS;
                            var2 = var2.bind(var5)();
                            var2 = !var2;
                            if(var2) { _fun0016_ip = 104; continue _fun0016 }
case 105:
                            var7 = _closure2_slot6;
                            var5 = null;
                            var2 = var5 == var7;
case 104:
                            if(var2) { _fun0016_ip = 106; continue _fun0016 }
case 107:
                            var5 = _closure2_slot6;
                            var4 = var5.getAvailablePlanForItems;
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var6 = 35;
                            var6 = var9[var6];
                            var7 = var7.bind(var8)(var6);
                            var6 = var7.getSubscriptionItemsForProduct;
                            var3 = var3.productId;
                            var3 = var6.bind(var7)(var3);
                            var4 = var4.bind(var5)(var3);
                            var3 = null;
                            var2 = var3 != var4;
case 106:
                            var1 = var2;
case 102:
                            return var1;
                        }
                    };
                    var11 = var3.bind(var4)(var2);
                    var3 = var11.length;
                    var2 = 0;
                    if(!(var2 !== var3)) { _fun0015_ip = 108; continue _fun0015 }
case 109:
                    var5 = undefined;
                    var4 = var1.bind(var5)();
                    var3 = _closure1_slot32;
                    var2 = _closure1_slot8;
                    var1 = {};
                    var9 = _closure1_slot31;
                    var8 = _closure1_slot42;
                    var6 = {};
                    var6['string'] = var4;
                    var8 = var9.bind(var5)(var8, var6);
                    var6 = new Array(2);
                    var6[0] = var8;
                    var9 = _closure1_slot31;
                    var8 = _closure1_slot40;
                    var7 = {};
                    var12 = _closure2_slot3;
                    var7['trackPaymentFlowStep'] = var12;
                    var12 = _closure2_slot4;
                    var7['trackNewPaymentFlow'] = var12;
                    var12 = _closure2_slot2;
                    var7['analyticsLoadId'] = var12;
                    var7['plans'] = var11;
                    var11 = _closure2_slot5;
                    var7['purchase'] = var11;
                    var10 = _closure2_slot1;
                    var7['subscription'] = var10;
                    var7 = var9.bind(var5)(var8, var7);
                    var6[1] = var7;
                    var1['children'] = var6;
                    var1 = var3.bind(var5)(var2, var1, var4);
                    return var1;
case 108:
                    var1 = null;
                    return var1;
                }
            };
            var6 = var7.bind(var8)(var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var9.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot5 = var8;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot6 = var7;
    var7 = var4.Image;
    var _closure1_slot7 = var7;
    var7 = var4.View;
    var _closure1_slot8 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.useNativeCheckoutStore;
    var _closure1_slot10 = var7;
    var4 = var4.useNativeCheckoutStoreOrNull;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var14 = 8;
    var4 = var6[var14];
    var4 = var5.bind(var1)(var4);
    var7 = var4.setIsPurchasing;
    var _closure1_slot15 = var7;
    var4 = var4.usePremiumPlanSelectStore;
    var _closure1_slot16 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
    var _closure1_slot17 = var7;
    var7 = var4.PremiumSubscriptionSKUs;
    var _closure1_slot18 = var7;
    var7 = var4.PremiumTypes;
    var _closure1_slot19 = var7;
    var7 = var4.SubscriptionIntervalTypes;
    var _closure1_slot20 = var7;
    var4 = var4.SubscriptionPlans;
    var _closure1_slot21 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot22 = var7;
    var7 = var4.AnalyticsObjects;
    var _closure1_slot23 = var7;
    var7 = var4.AnalyticsObjectTypes;
    var _closure1_slot24 = var7;
    var17 = var4.Fonts;
    var7 = var4.HorizontalGradient;
    var _closure1_slot25 = var7;
    var7 = var4.PaymentGateways;
    var _closure1_slot26 = var7;
    var7 = var4.SubscriptionStatusTypes;
    var _closure1_slot27 = var7;
    var15 = var4.USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.getPremiumGradientColor;
    var _closure1_slot28 = var7;
    var4 = var4.Gradients;
    var _closure1_slot29 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ItemPurchaseType;
    var _closure1_slot30 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot31 = var7;
    var7 = var4.jsxs;
    var _closure1_slot32 = var7;
    var4 = var4.Fragment;
    var _closure1_slot33 = var4;
    var4 = 14;
    var4 = var6[var4];
    var12 = var5.bind(var1)(var4);
    var11 = var12.createStyles;
    var4 = {};
    var7 = {};
    var10 = 15;
    var10 = var6[var10];
    var16 = var9.bind(var1)(var10);
    var13 = var17.DISPLAY_EXTRABOLD;
    var10 = 24;
    var20 = var16.bind(var1)(var13, var1, var10);
    var21 = var7;
    var13 = copyDataProperties(var21, var20);
    var13 = 16;
    var16 = 'marginTop';
    var7[15] = var13;
    var16 = var6[var13];
    var16 = var5.bind(var1)(var16);
    var18 = var16.DARK_WHITE_500_LIGHT_BLACK_500;
    var16 = 'color';
    var7[15] = var18;
    var4['header'] = var7;
    var7 = {'marginTop': 7, 'borderRadius': null, 'flexDirection': 'row', 'alignItems': 'center', 'paddingVertical': 12, 'paddingHorizontal': 12, 'flexWrap': 'wrap'};
    var16 = 17;
    var18 = var6[var16];
    var18 = var9.bind(var1)(var18);
    var18 = var18.radii;
    var18 = var18.sm;
    var7['borderRadius'] = var18;
    var18 = var6[var13];
    var18 = var5.bind(var1)(var18);
    var18 = var18.DARK_PRIMARY_630_LIGHT_PRIMARY_230;
    var7['backgroundColor'] = var18;
    var4['row'] = var7;
    var7 = {'height': 40, 'width': 40};
    var4['imgWumpusNitro'] = var7;
    var7 = {'height': 40, 'width': 40};
    var4['imgBoost'] = var7;
    var7 = {'width': 32, 'height': 32};
    var4['imgWumpusNitroBoost'] = var7;
    var7 = {'width': 40, 'height': 40};
    var4['imgWumpusNitroClassic'] = var7;
    var7 = {'width': 32, 'height': 32};
    var4['imgWumpusNitroClassicBoost'] = var7;
    var7 = {'width': 40, 'height': 40};
    var4['imgWumpusNitroTier0'] = var7;
    var7 = {};
    var7['fontSize'] = var13;
    var13 = var6[var13];
    var13 = var5.bind(var1)(var13);
    var13 = var13.DARK_WHITE_500_LIGHT_BLACK_500;
    var7['color'] = var13;
    var4['rowText'] = var7;
    var13 = {'marginLeft': 12, 'fontFamily': null, 'lineHeight': 20};
    var7 = var17.PRIMARY_SEMIBOLD;
    var13['fontFamily'] = var7;
    var7 = 20;
    var4['rowPlanDescription'] = var13;
    var13 = {'fontSize': 12, 'marginLeft': 5, 'fontFamily': null, 'fontWeight': '400'};
    var17 = var17.PRIMARY_MEDIUM;
    var13['fontFamily'] = var17;
    var4['rowPlanDescriptionSubtext'] = var13;
    var13 = {};
    var17 = 'auto';
    var13['marginLeft'] = var17;
    var4['rowPrice'] = var13;
    var13 = {'marginHorizontal': 14.5, 'paddingBottom': 10};
    var4['container'] = var13;
    var13 = {};
    var13['marginTop'] = var7;
    var16 = var6[var16];
    var16 = var9.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var13['borderRadius'] = var16;
    var4['currentPlanGradient'] = var13;
    var13 = {'marginTop': 0.5, 'marginRight': 0.5, 'marginLeft': 0.5, 'marginBottom': 0.5};
    var4['currentPlanRow'] = var13;
    var13 = {'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'height': '100%'};
    var4['loadingSpinnerContainer'] = var13;
    var13 = {'lineHeight': 20, 'marginTop': 40};
    var13['margin'] = var15;
    var4['offPlatformSubscriptionMessage'] = var13;
    var13 = {};
    var13['paddingHorizontal'] = var15;
    var13['marginTop'] = var14;
    var4['premiumHeaderLabel'] = var13;
    var4 = var11.bind(var12)(var4);
    var _closure1_slot34 = var4;
    var4 = {};
    var11 = 23;
    var11 = var6[var11];
    var12 = var9.bind(var1)(var11);
    var11 = 'imgWumpusNitro';
    var4[11] = var11;
    var11 = 25;
    var11 = var6[var11];
    var12 = var9.bind(var1)(var11);
    var11 = 'imgWumpusNitroBoost';
    var4[11] = var11;
    var11 = 22;
    var11 = var6[var11];
    var12 = var9.bind(var1)(var11);
    var11 = 'imgWumpusNitroClassic';
    var4[11] = var11;
    var10 = var6[var10];
    var11 = var9.bind(var1)(var10);
    var10 = 'imgWumpusNitroClassicBoost';
    var4[10] = var10;
    var10 = 21;
    var10 = var6[var10];
    var11 = var9.bind(var1)(var10);
    var10 = 'imgWumpusNitroTier0';
    var4[10] = var10;
    var7 = var6[var7];
    var9 = var9.bind(var1)(var7);
    var7 = 'imgBoost';
    var4[8] = var7;
    var _closure1_slot35 = var4;
    var7 = {};
    var4 = function getLabel() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 18;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.A4BfLn;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var7['getLabel'] = var4;
    var4 = function predicate(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var2 = arg1;
            var3 = var2.premiumTier;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0017_ip = 110; continue _fun0017 }
case 3:
            var3 = var2.numPremiumGuild;
            var2 = 0;
            var1 = var2 === var3;
case 110:
            return var1;
        }
    };
    var7['predicate'] = var4;
    var4 = new Array(3);
    var4[0] = var7;
    var7 = {};
    var9 = function getLabel() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 18;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.lyXyD0;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var7['getLabel'] = var9;
    var9 = function predicate(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var2 = arg1;
            var3 = var2.premiumTier;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0018_ip = 110; continue _fun0018 }
case 3:
            var3 = var2.numPremiumGuild;
            var2 = 0;
            var1 = var2 !== var3;
case 110:
            return var1;
        }
    };
    var7['predicate'] = var9;
    var4[1] = var7;
    var7 = {};
    var9 = function getLabel() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 18;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.rPoOQW;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var7['getLabel'] = var9;
    var9 = function predicate(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var2 = arg1;
            var3 = var2.premiumTier;
            var1 = null;
            var1 = var1 == var3;
            if(!var1) { _fun0019_ip = 110; continue _fun0019 }
case 3:
            var3 = var2.numPremiumGuild;
            var2 = 0;
            var1 = var2 !== var3;
case 110:
            return var1;
        }
    };
    var7['predicate'] = var9;
    var4[2] = var7;
    var _closure1_slot36 = var4;
    var7 = var8.forwardRef;
    var4 = function PremiumPlanSelect(arg1, arg2) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = arg1;
            var9 = arg2;
            var19 = var1.predicate;
            var16 = var1.showCurrentPlan;
            var7 = undefined;
            if(!(var16 === var7)) { _fun0020_ip = 111; continue _fun0020 }
case 112:
            var16 = true;
case 111:
            var13 = var1.analyticsLocation;
            var11 = var1.planId;
            var20 = var1.applicationId;
            var _closure2_slot0 = var20;
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var7;
            var _closure2_slot4 = var7;
            var _closure2_slot5 = var7;
            var1 = _closure1_slot34;
            var18 = var1.bind(var7)();
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 41;
            var1 = var5[var1];
            var1 = var6.bind(var7)(var1);
            var1 = var1.bind(var7)();
            var23 = var1.analyticsLocations;
            var3 = _closure1_slot0;
            var1 = 26;
            var1 = var5[var1];
            var10 = var3.bind(var7)(var1);
            var4 = var10.useStateFromStoresArray;
            var1 = _closure1_slot13;
            var2 = new Array(2);
            var2[0] = var1;
            var1 = _closure1_slot12;
            var2[1] = var1;
            var1 = function() {
                var3 = _closure1_slot13;
                var1 = var3.hasFetchedSubscriptions;
                var3 = var1.bind(var3)();
                var1 = new Array(2);
                var1[0] = var3;
                var3 = _closure1_slot12;
                var2 = var3.isLoadedForPremiumSKUs;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            var4 = var4.bind(var10)(var2, var1);
            var2 = _closure1_slot4;
            var1 = 2;
            var1 = var2.bind(var7)(var4, var1);
            var10 = 0;
            var4 = var1[var10];
            var12 = 1;
            var2 = var1[var12];
            _closure2_slot1 = var2;
            var21 = _closure1_slot5;
            var17 = var21.useEffect;
            var15 = new Array(1);
            var15[0] = var2;
            var1 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0021_ip = 113; continue _fun0021 }
case 76:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 42;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchPremiumSubscriptionPlans;
                    var1 = var1.bind(var2)();
case 113:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var17.bind(var21)(var1, var15);
            var1 = 43;
            var1 = var5[var1];
            var6 = var6.bind(var7)(var1);
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 36;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getNewAnalyticsLoadId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var6.bind(var7)(var1);
            var1 = 36;
            var1 = var5[var1];
            var5 = var3.bind(var7)(var1);
            var3 = var5.getBasePurchaseFlowAnalyticsFields;
            var1 = {};
            var1['analyticsLoadId'] = var15;
            var6 = {};
            var17 = _closure1_slot23;
            var17 = var17.BUTTON_CTA;
            var6['object'] = var17;
            var17 = _closure1_slot24;
            var17 = var17.BUY;
            var6['object_type'] = var17;
            var30 = var6;
            var29 = var13;
            var13 = copyDataProperties(var30, var29);
            var1['analyticsLocation'] = var6;
            var1['analyticsLocations'] = var23;
            var1 = var3.bind(var5)(var1);
            _closure2_slot2 = var1;
            var6 = null;
            if(!(var6 == var11)) { _fun0020_ip = 114; continue _fun0020 }
case 115:
            var3 = {};
            _fun0020_ip = 116; continue _fun0020;
case 114:
            var5 = {};
            var5['subscription_plan_id'] = var11;
            var3 = var5;
case 116:
            _closure2_slot3 = var3;
            var5 = _closure1_slot1;
            var21 = _closure1_slot2;
            var3 = 44;
            var3 = var21[var3];
            var5 = var5.bind(var7)(var3);
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 45;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.trackPaymentFlowStartedAnalyticsAndCTP;
                var2 = {};
                var7 = _closure2_slot2;
                var8 = var2;
                var6 = copyDataProperties(var8, var7);
                var7 = _closure2_slot3;
                var8 = var2;
                var6 = copyDataProperties(var8, var7);
                var6 = _closure2_slot0;
                var5 = 'application_id';
                var2[4] = var6;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var5.bind(var7)(var3);
            var5 = _closure1_slot10;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.checkoutInitParameters;
                var3 = var3.activeSubscription;
                var1['activeSubscription'] = var3;
                var2 = var2.orderRecord;
                var1['order'] = var2;
                return var1;
            };
            var3 = var5.bind(var7)(var3);
            var17 = var3.activeSubscription;
            var11 = _closure1_slot0;
            var3 = 46;
            var3 = var21[var3];
            var5 = var11.bind(var7)(var3);
            var3 = var5.useHandlePremiumPurchase;
            var13 = var3.bind(var5)();
            _closure2_slot4 = var13;
            var3 = 47;
            var3 = var21[var3];
            var5 = var11.bind(var7)(var3);
            var3 = var5.useIsPaymentsBlocked;
            var3 = var3.bind(var5)();
            var5 = 48;
            var5 = var21[var5];
            var21 = var11.bind(var7)(var5);
            var11 = var21.useFetchSubscriptionInvoicePreview;
            if(!(var6 == var17)) { _fun0020_ip = 117; continue _fun0020 }
case 118:
            var5 = {};
            _fun0020_ip = 119; continue _fun0020;
case 117:
            var22 = {};
            var24 = var17.id;
            var22['subscriptionId'] = var24;
            var24 = true;
            var22['renewal'] = var24;
            var22['analyticsLocations'] = var23;
            var24 = _closure1_slot1;
            var25 = _closure1_slot2;
            var23 = 49;
            var23 = var25[var23];
            var23 = var24.bind(var7)(var23);
            var23 = var23.PREMIUM_PLAN_SELECT;
            var22['analyticsLocation'] = var23;
            var5 = var22;
case 119:
            var11 = var11.bind(var21)(var5);
            var5 = _closure1_slot4;
            var5 = var5.bind(var7)(var11, var12);
            var24 = var5[var10];
            var10 = _closure1_slot10;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.patchOrderLineItems;
                return var1;
            };
            var12 = var10.bind(var7)(var5);
            _closure2_slot5 = var12;
            var11 = _closure1_slot5;
            var10 = var11.useCallback;
            var5 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1, arg2) {
                    var1 = function* anon_0_(arg1, arg2) {
                        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                            StartGenerator();
                            var6 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0022_ip = 120; continue _fun0022 }
case 121:
                            var10 = var6;
                            var9 = arg2;
                            var3 = undefined;
                            var8 = undefined;
                            var5 = _closure1_slot15;
                            var2 = true;
                            var2 = var5.bind(var3)(var2);
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 35;
                            var2 = var7[var2];
                            var5 = var5.bind(var3)(var2);
                            var2 = var5.getSubscriptionItemsForProduct;
                            var11 = var2.bind(var5)(var6);
                            var5 = _closure2_slot5;
                            var6 = var11.map;
                            var2 = function(arg1) {
                                var3 = arg1;
                                var1 = {};
                                var6 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var4 = 19;
                                var5 = var9[var4];
                                var8 = undefined;
                                var6 = var6.bind(var8)(var5);
                                var5 = var6.castPremiumSubscriptionAsSkuId;
                                var7 = _closure1_slot1;
                                var4 = var9[var4];
                                var8 = var7.bind(var8)(var4);
                                var7 = var8.getSkuIdForPlan;
                                var4 = var3.planId;
                                var4 = var7.bind(var8)(var4);
                                var4 = var5.bind(var6)(var4);
                                var1['sku_id'] = var4;
                                var4 = var3.planId;
                                var1['subscription_plan_id'] = var4;
                                var3 = var3.quantity;
                                var1['quantity'] = var3;
                                var2 = _closure1_slot30;
                                var2 = var2.SUBSCRIPTION;
                                var1['purchase_type'] = var2;
                                return var1;
                            };
                            var2 = var6.bind(var11)(var2);
                            var2 = var5.bind(var3)(var2);
                            SaveGenerator(address=103);
case 122:
                            return var2;
case 123:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0022_ip = 124; continue _fun0022 }
case 125:
                            var8 = var2;
case 126: // try_start_0
                            var6 = _closure2_slot4;
                            var5 = {};
                            var5['productId'] = var10;
                            var10 = _closure2_slot2;
                            var10 = var10.location;
                            var5['analyticsLocation'] = var10;
                            var5['analyticsLoadId'] = var9;
                            var7 = _closure2_slot0;
                            var5['applicationId'] = var7;
                            var9 = var8;
                            var7 = null;
                            var9 = var7 == var9;
                            var7 = undefined;
                            if(var9) { _fun0022_ip = 127; continue _fun0022 }
case 128:
                            var7 = var8.id;
case 127:
                            var5['orderId'] = var7;
                            var5 = var6.bind(var3)(var5);
                            SaveGenerator(address=186);
case 129:
                            return var5;
case 52:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(var6) { _fun0022_ip = 130; continue _fun0022 }
case 131: // try_end0
                            _fun0022_ip = 132; continue _fun0022;
case 130:
                            return var5;
case 133: // catch_target0
                            CatchBlockStart(arg_register=5);
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var5 = 50;
                            var5 = var8[var5];
                            var5 = var7.bind(var3)(var5);
                            var5 = var6 instanceof var5;
                            if(!var5) { _fun0022_ip = 132; continue _fun0022 }
case 134:
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var5 = 51;
                            var5 = var12[var5];
                            var6 = var11.bind(var3)(var5);
                            var5 = var6.fetchSubscriptions;
                            var5 = var5.bind(var6)();
                            var6 = _closure1_slot1;
                            var5 = 37;
                            var5 = var12[var5];
                            var7 = var6.bind(var3)(var5);
                            var6 = var7.show;
                            var5 = {};
                            var8 = 18;
                            var9 = var12[var8];
                            var9 = var11.bind(var3)(var9);
                            var13 = var9.intl;
                            var10 = var13.string;
                            var9 = var12[var8];
                            var9 = var11.bind(var3)(var9);
                            var9 = var9.t;
                            var9 = var9.U+H+kd;
                            var9 = var10.bind(var13)(var9);
                            var5['title'] = var9;
                            var9 = var12[var8];
                            var9 = var11.bind(var3)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var8 = var12[var8];
                            var8 = var11.bind(var3)(var8);
                            var8 = var8.t;
                            var8 = var8.yyDkbE;
                            var8 = var9.bind(var10)(var8);
                            var5['body'] = var8;
                            var5 = var6.bind(var7)(var5);
case 132:
                            var5 = _closure1_slot15;
                            var4 = false;
                            var4 = var5.bind(var3)(var4);
                            return var3;
case 124:
                            return var2;
case 120:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var5 = var5.bind(var7)();
            var21 = var1.location;
            var1 = new Array(4);
            var1[0] = var21;
            var1[1] = var20;
            var1[2] = var13;
            var1[3] = var12;
            var13 = var10.bind(var11)(var5, var1);
            var5 = var6 == var19;
            var1 = null;
            if(var5) { _fun0020_ip = 135; continue _fun0020 }
case 136:
            if(!var4) { _fun0020_ip = 137; continue _fun0020 }
case 23:
            if(var2) { _fun0020_ip = 138; continue _fun0020 }
case 137:
            var5 = _closure1_slot31;
            var4 = _closure1_slot8;
            var2 = {};
            var10 = var18.loadingSpinnerContainer;
            var2['style'] = var10;
            var12 = _closure1_slot31;
            var11 = _closure1_slot6;
            var10 = {'animating': true, 'size': 'large'};
            var10 = var12.bind(var7)(var11, var10);
            var2['children'] = var10;
            var2 = var5.bind(var7)(var4, var2);
            _fun0020_ip = 139; continue _fun0020;
case 138:
            if(var3) { _fun0020_ip = 140; continue _fun0020 }
case 141:
            if(!(var6 != var17)) { _fun0020_ip = 142; continue _fun0020 }
case 143:
            var3 = var17.isOnPlatformMatchingExternalPaymentGateway;
            if(!var3) { _fun0020_ip = 144; continue _fun0020 }
case 145:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 35;
            var4 = var11[var3];
            var5 = var10.bind(var7)(var4);
            var4 = var5.isValidBundleProductId;
            var3 = var11[var3];
            var11 = var10.bind(var7)(var3);
            var10 = var11.getProductIdFromSubscription;
            var3 = false;
            var3 = var10.bind(var11)(var17, var3);
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0020_ip = 142; continue _fun0020 }
case 144:
            var5 = _closure1_slot32;
            var4 = _closure1_slot9;
            var3 = {};
            var10 = var6 != var24;
            if(!var10) { _fun0020_ip = 146; continue _fun0020 }
case 147:
            var12 = _closure1_slot32;
            var11 = _closure1_slot33;
            var6 = {};
            var23 = _closure1_slot31;
            var22 = _closure1_slot0;
            var25 = _closure1_slot2;
            var20 = 53;
            var20 = var25[var20];
            var20 = var22.bind(var7)(var20);
            var21 = var20.Text;
            var20 = {'style': null, 'variant': 'eyebrow', 'color': 'text-default'};
            var26 = var18.premiumHeaderLabel;
            var20['style'] = var26;
            var26 = 18;
            var27 = var25[var26];
            var27 = var22.bind(var7)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var26 = var25[var26];
            var26 = var22.bind(var7)(var26);
            var26 = var26.t;
            var26 = var26.ITurwY;
            var26 = var27.bind(var28)(var26);
            var20['children'] = var26;
            var21 = var23.bind(var7)(var21, var20);
            var20 = new Array(2);
            var20[0] = var21;
            var23 = _closure1_slot31;
            var21 = 54;
            var21 = var25[var21];
            var21 = var22.bind(var7)(var21);
            var22 = var21.PremiumSubscriptionHeader;
            var21 = {};
            var21['subscription'] = var17;
            var21['renewalInvoicePreview'] = var24;
            var21 = var23.bind(var7)(var22, var21);
            var20[1] = var21;
            var6['children'] = var20;
            var10 = var12.bind(var7)(var11, var6);
case 146:
            var6 = new Array(2);
            var6[0] = var10;
            var12 = _closure1_slot31;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var10 = 53;
            var10 = var21[var10];
            var10 = var20.bind(var7)(var10);
            var11 = var10.Text;
            var10 = {};
            var18 = var18.offPlatformSubscriptionMessage;
            var10['style'] = var18;
            var18 = 'text-md/semibold';
            var10['variant'] = var18;
            var18 = 55;
            var18 = var21[var18];
            var21 = var20.bind(var7)(var18);
            var20 = var21.getExternalManagementMessage;
            var18 = {};
            var22 = true;
            var18['shouldAllowExternalManagement'] = var22;
            var18 = var20.bind(var21)(var17, var18);
            var10['children'] = var18;
            var10 = var12.bind(var7)(var11, var10);
            var6[1] = var10;
            var3['children'] = var6;
            var3 = var5.bind(var7)(var4, var3);
            _fun0020_ip = 148; continue _fun0020;
case 142:
            var6 = _closure1_slot31;
            var5 = _closure1_slot9;
            var4 = {};
            var4['ref'] = var9;
            var12 = _closure1_slot31;
            var11 = _closure1_slot43;
            var10 = {};
            var10['subscription'] = var17;
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var17 = 35;
            var17 = var20[var17];
            var18 = var18.bind(var7)(var17);
            var17 = var18.getPremiumBundlesWithPredicate;
            var17 = var17.bind(var18)(var19);
            var10['plans'] = var17;
            var10['showCurrentPlan'] = var16;
            var10['analyticsLoadId'] = var15;
            var15 = function trackPaymentFlowStep(arg1) {
                var1 = arg1;
                var10 = var1.productId;
                var12 = var1.fromStep;
                var11 = var1.toStep;
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 56;
                var2 = var9[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot22;
                var3 = var2.PAYMENT_FLOW_STEP;
                var2 = {};
                var8 = _closure2_slot0;
                var2['application_id'] = var8;
                var8 = _closure1_slot0;
                var7 = 36;
                var7 = var9[var7];
                var9 = var8.bind(var1)(var7);
                var8 = var9.getPaymentFlowStepAnalyticsFields;
                var7 = _closure2_slot2;
                var6 = {};
                var6['from_step'] = var12;
                var6['to_step'] = var11;
                var6['subscription_plan_gateway_plan_id'] = var10;
                var13 = var8.bind(var9)(var7, var6);
                var14 = var2;
                var6 = copyDataProperties(var14, var13);
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var10['trackPaymentFlowStep'] = var15;
            var14 = function trackNewPaymentFlow(arg1) {
                var1 = arg1;
                var7 = var1.newFlowAnalyticsLoadId;
                var8 = var1.productId;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 45;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.trackPaymentFlowStartedAnalyticsAndCTP;
                var2 = {};
                var9 = _closure2_slot2;
                var10 = var2;
                var6 = copyDataProperties(var10, var9);
                var6 = 'subscription_plan_gateway_plan_id';
                var2[5] = var8;
                var6 = 'load_id';
                var2[5] = var7;
                var6 = _closure2_slot0;
                var5 = 'application_id';
                var2[4] = var6;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var10['trackNewPaymentFlow'] = var14;
            var10['purchase'] = var13;
            var10 = var12.bind(var7)(var11, var10);
            var4['children'] = var10;
            var3 = var6.bind(var7)(var5, var4);
case 148:
            _fun0020_ip = 149; continue _fun0020;
case 140:
            var6 = _closure1_slot31;
            var5 = _closure1_slot9;
            var4 = {};
            var4['ref'] = var9;
            var9 = {};
            var10 = 40;
            var9['top'] = var10;
            var4['contentInset'] = var9;
            var10 = _closure1_slot31;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 52;
            var8 = var11[var8];
            var9 = var9.bind(var7)(var8);
            var8 = {};
            var8 = var10.bind(var7)(var9, var8);
            var4['children'] = var8;
            var3 = var6.bind(var7)(var5, var4);
case 149:
            var2 = var3;
case 139:
            var1 = var2;
case 135:
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot37 = var4;
    var4 = 59;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/PremiumPlanSelect.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumPlanSelectWithOrderCTX(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = _closure1_slot34;
            var5 = undefined;
            var3 = var1.bind(var5)();
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 57;
            var1 = var8[var1];
            var1 = var7.bind(var5)(var1);
            var9 = var1.NitroACOMSubscriptionExperiment;
            var4 = var9.useConfig;
            var1 = {};
            var10 = 'PremiumPlanSelectWithOrderCTX';
            var1['location'] = var10;
            var1 = var4.bind(var9)(var1);
            var1 = var1.enabled;
            var4 = 34;
            var4 = var8[var4];
            var7 = var7.bind(var5)(var4);
            var4 = var7.isIOS;
            var7 = var4.bind(var7)();
            var4 = _closure1_slot26;
            if(var7) { _fun0023_ip = 90; continue _fun0023 }
case 150:
            var10 = var4.GOOGLE;
            _fun0023_ip = 151; continue _fun0023;
case 90:
            if(var1) { _fun0023_ip = 96; continue _fun0023 }
case 152:
            var1 = var4.APPLE;
            _fun0023_ip = 57; continue _fun0023;
case 96:
            var1 = var4.APPLE_ADVANCED_COMMERCE;
case 57:
            var10 = var1;
case 151:
            var1 = {};
            var4 = _closure1_slot21;
            var4 = var4.PREMIUM_YEAR_TIER_2;
            var1['subscriptionPlanId'] = var4;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 19;
            var4 = var9[var4];
            var11 = var7.bind(var5)(var4);
            var8 = var11.castPremiumSubscriptionAsSkuId;
            var4 = _closure1_slot18;
            var4 = var4.TIER_2;
            var4 = var8.bind(var11)(var4);
            var1['skuId'] = var4;
            var4 = 1;
            var1['quantity'] = var4;
            var8 = new Array(1);
            var8[0] = var1;
            var4 = 26;
            var1 = var9[var4];
            var14 = var7.bind(var5)(var1);
            var13 = var14.useStateFromStores;
            var11 = _closure1_slot13;
            var12 = new Array(1);
            var12[0] = var11;
            var1 = function() {
                var2 = _closure1_slot13;
                var1 = var2.hasFetchedSubscriptions;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var13.bind(var14)(var12, var1);
            var _closure2_slot0 = var1;
            var15 = _closure1_slot5;
            var14 = var15.useEffect;
            var13 = new Array(1);
            var13[0] = var1;
            var12 = function() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0024_ip = 113; continue _fun0024 }
case 76:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 51;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchSubscriptions;
                    var1 = var1.bind(var2)();
case 113:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var14.bind(var15)(var12, var13);
            var4 = var9[var4];
            var9 = var7.bind(var5)(var4);
            var7 = var9.useStateFromStores;
            var4 = new Array(1);
            var4[0] = var11;
            var2 = function() {
                var2 = _closure1_slot13;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var7.bind(var9)(var4, var2);
            var4 = _closure1_slot31;
            if(var1) { _fun0023_ip = 153; continue _fun0023 }
case 154:
            var2 = _closure1_slot8;
            var1 = {};
            var3 = var3.loadingSpinnerContainer;
            var1['style'] = var3;
            var11 = _closure1_slot31;
            var9 = _closure1_slot6;
            var3 = {'animating': true, 'size': 'large'};
            var3 = var11.bind(var5)(var9, var3);
            var1['children'] = var3;
            var1 = var4.bind(var5)(var2, var1);
            _fun0023_ip = 155; continue _fun0023;
case 153:
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 58;
            var2 = var9[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['paymentGateway'] = var10;
            var9 = _closure1_slot26;
            var9 = var9.APPLE_ADVANCED_COMMERCE;
            var9 = var10 === var9;
            var2['waitAndCreateOrder'] = var9;
            var9 = new Array(0);
            var2['skuIds'] = var9;
            var2['defaultPlans'] = var8;
            var8 = false;
            var2['isGift'] = var8;
            var2['activeSubscription'] = var7;
            var8 = _closure1_slot31;
            var7 = _closure1_slot37;
            var6 = {};
            var16 = arg1;
            var17 = var6;
            var9 = copyDataProperties(var17, var16);
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 155:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();