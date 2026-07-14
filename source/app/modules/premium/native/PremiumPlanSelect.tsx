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
            var2 = _closure1_slot17;
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
    var _closure1_slot36 = var1;
    var1 = function PlanRow(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var17 = var1.plan;
            var _closure2_slot0 = var17;
            var2 = var1.purchase;
            var _closure2_slot1 = var2;
            var16 = var1.style;
            var23 = var1.subscription;
            var _closure2_slot2 = var23;
            var12 = var1.disabled;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var12 = false;
case 11:
            var7 = var1.hasBackground;
            if(!(var7 === var4)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var7 = false;
case 13:
            var _closure2_slot3 = var4;
            var1 = _closure1_slot32;
            var14 = var1.bind(var4)();
            var2 = _closure1_slot14;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.isPurchasing;
                return var1;
            };
            var3 = var2.bind(var4)(var1);
            var2 = _closure1_slot14;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.purchasingProductId;
                var1 = _closure2_slot0;
                var1 = var1.productId;
                var1 = var2 === var1;
                return var1;
            };
            var11 = var2.bind(var4)(var1);
            var9 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 26;
            var1 = var15[var1];
            var6 = var9.bind(var4)(var1);
            var2 = var6.useToken;
            var8 = _closure1_slot1;
            var19 = 17;
            var1 = var15[var19];
            var1 = var8.bind(var4)(var1);
            var1 = var1.colors;
            var1 = var1.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND;
            var13 = var2.bind(var6)(var1);
            var1 = 27;
            var1 = var15[var1];
            var8 = var9.bind(var4)(var1);
            var6 = var8.useStateFromStoresArray;
            var1 = _closure1_slot12;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var4 = _closure1_slot12;
                var3 = var4.getProduct;
                var1 = _closure2_slot0;
                var1 = var1.productId;
                var3 = var3.bind(var4)(var1);
                var1 = new Array(2);
                var1[0] = var3;
                var3 = _closure1_slot12;
                var2 = var3.isBusy;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            var6 = var6.bind(var8)(var2, var1);
            var2 = _closure1_slot4;
            var1 = 2;
            var2 = var2.bind(var4)(var6, var1);
            var8 = 0;
            var18 = var2[var8];
            var1 = 1;
            var2 = var2[var1];
            var6 = _closure1_slot9;
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
            var1 = var6.bind(var4)(var1);
            var6 = 28;
            var6 = var15[var6];
            var15 = var9.bind(var4)(var6);
            var9 = var15.useCheckoutPlanPriceString;
            var6 = var17.productId;
            var6 = var9.bind(var15)(var6, var18);
            var9 = null;
            var15 = var9 != var6;
            var21 = '$...';
            if(!var15) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var21 = var6;
case 16:
            var15 = _closure1_slot1;
            var18 = _closure1_slot2;
            var6 = 29;
            var6 = var18[var6];
            var6 = var15.bind(var4)(var6);
            var20 = var6.bind(var4)();
            var18 = var17.premiumTier;
            var6 = _closure1_slot17;
            var6 = var6.TIER_2;
            var15 = null;
            if(!(var18 === var6)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var6 = var17.numPremiumGuild;
            var15 = null;
            if(!(var8 === var6)) { _fun0002_ip = 18; continue _fun0002 }
case 20:
            var22 = _closure1_slot29;
            var25 = _closure1_slot0;
            var28 = _closure1_slot2;
            var6 = 30;
            var6 = var28[var6];
            var6 = var25.bind(var4)(var6);
            var18 = var6.LegacyText;
            var6 = {};
            var26 = var14.rowText;
            var24 = new Array(2);
            var24[0] = var26;
            var26 = var14.rowPlanDescriptionSubtext;
            var24[1] = var26;
            var6['style'] = var24;
            var24 = 18;
            var26 = var28[var24];
            var26 = var25.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.format;
            var24 = var28[var24];
            var24 = var25.bind(var4)(var24);
            var24 = var24.t;
            var25 = var24.he52LA;
            var24 = {};
            var28 = _closure1_slot15;
            var24['num'] = var28;
            var24 = var26.bind(var27)(var25, var24);
            var6['children'] = var24;
            var15 = var22.bind(var4)(var18, var6);
case 18:
            var6 = var17.premiumTier;
            if(!(var9 != var6)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var6 = var17.numPremiumGuild;
            if(!(var8 === var6)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var8 = var17.premiumTier;
            var6 = _closure1_slot17;
            var6 = var6.TIER_0;
            if(!(var6 !== var8)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var6 = _closure1_slot17;
            var6 = var6.TIER_1;
            if(!(var6 !== var8)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var6 = _closure1_slot17;
            var6 = var6.TIER_2;
            if(!(var6 !== var8)) { _fun0002_ip = 29; continue _fun0002 }
case 23:
            var8 = var17.premiumTier;
            var6 = _closure1_slot17;
            var6 = var6.TIER_1;
            if(!(var8 !== var6)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var8 = _closure1_slot1;
            var18 = _closure1_slot2;
            var6 = 25;
            var6 = var18[var6];
            var18 = var8.bind(var4)(var6);
            _fun0002_ip = 32; continue _fun0002;
case 30:
            var8 = _closure1_slot1;
            var22 = _closure1_slot2;
            var6 = 24;
            var6 = var22[var6];
            var18 = var8.bind(var4)(var6);
case 32:
            _fun0002_ip = 33; continue _fun0002;
case 29:
            var8 = _closure1_slot1;
            var22 = _closure1_slot2;
            var6 = 23;
            var6 = var22[var6];
            var18 = var8.bind(var4)(var6);
            _fun0002_ip = 33; continue _fun0002;
case 27:
            var8 = _closure1_slot1;
            var22 = _closure1_slot2;
            var6 = 22;
            var6 = var22[var6];
            var18 = var8.bind(var4)(var6);
            _fun0002_ip = 33; continue _fun0002;
case 25:
            var8 = _closure1_slot1;
            var22 = _closure1_slot2;
            var6 = 21;
            var6 = var22[var6];
            var18 = var8.bind(var4)(var6);
            _fun0002_ip = 33; continue _fun0002;
case 21:
            var8 = _closure1_slot1;
            var22 = _closure1_slot2;
            var6 = 20;
            var6 = var22[var6];
            var18 = var8.bind(var4)(var6);
case 33:
            var8 = var9 != var23;
            var6 = null;
            if(!var8) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var8 = 19;
            var8 = var24[var8];
            var22 = var22.bind(var4)(var8);
            var8 = var22.getPremiumTypeFromSubscription;
            var6 = var8.bind(var22)(var23);
case 34:
            _closure2_slot3 = var6;
            if(var12) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var12 = var3;
case 36:
            if(var12) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var12 = var2;
case 38:
            if(var12) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var12 = var1;
case 40:
            var3 = _closure1_slot29;
            var8 = _closure1_slot0;
            var22 = _closure1_slot2;
            var1 = 31;
            var1 = var22[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.TouchableHighlight;
            var1 = {'activeOpacity': 0.6, 'underlayColor': null, 'accessibilityRole': 'button'};
            var6 = 32;
            var6 = var22[var6];
            var8 = var8.bind(var4)(var6);
            var6 = var8.isThemeDark;
            var20 = var6.bind(var8)(var20);
            var8 = 'none';
            var6 = var8;
            if(var20) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var6 = var8;
            if(!var7) { _fun0002_ip = 42; continue _fun0002 }
case 44:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var19];
            var7 = var8.bind(var4)(var7);
            var7 = var7.unsafe_rawColors;
            var6 = var7.PRIMARY_230;
case 42:
            var1['underlayColor'] = var6;
            var1['disabled'] = var12;
            var5 = function onPress() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
                    var3 = _closure2_slot3;
                    var2 = _closure1_slot17;
                    var2 = var2.TIER_2;
                    if(!(var3 !== var2)) { _fun0004_ip = 47; continue _fun0004 }
case 48:
                    var3 = _closure2_slot3;
                    var2 = _closure1_slot17;
                    var2 = var2.TIER_1;
                    if(!(var3 === var2)) { _fun0004_ip = 45; continue _fun0004 }
case 47:
                    var2 = _closure2_slot0;
                    var3 = var2.premiumTier;
                    var2 = _closure1_slot17;
                    var2 = var2.TIER_0;
                    if(!(var3 === var2)) { _fun0004_ip = 45; continue _fun0004 }
case 49:
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 33;
                    var2 = var7[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var6 = _closure2_slot2;
                    var2['subscription'] = var6;
                    var6 = _closure1_slot0;
                    var5 = 34;
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
                    _fun0004_ip = 50; continue _fun0004;
case 45:
                    var3 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var2 = var1.productId;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 50:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPress'] = var5;
            var7 = _closure1_slot30;
            var6 = _closure1_slot7;
            var5 = {};
            var19 = var14.row;
            var8 = new Array(3);
            var8[0] = var19;
            var8[1] = var16;
            if(!var12) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var12 = !var11;
case 51:
            if(!var12) { _fun0002_ip = 53; continue _fun0002 }
case 54:
            var12 = var14.rowDisabled;
case 53:
            var8[2] = var12;
            var5['style'] = var8;
            var16 = _closure1_slot29;
            var12 = _closure1_slot6;
            var8 = {};
            var19 = _closure1_slot33;
            var19 = var19[var18];
            var19 = var14[var19];
            var8['style'] = var19;
            var8['source'] = var18;
            var12 = var16.bind(var4)(var12, var8);
            var8 = new Array(5);
            var8[0] = var12;
            var22 = _closure1_slot29;
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var12 = 30;
            var16 = var18[var12];
            var16 = var19.bind(var4)(var16);
            var20 = var16.LegacyText;
            var16 = {};
            var24 = var14.rowText;
            var23 = new Array(2);
            var23[0] = var24;
            var24 = var14.rowPlanDescription;
            var23[1] = var24;
            var16['style'] = var23;
            var23 = _closure1_slot36;
            var23 = var23.bind(var4)(var17);
            var16['children'] = var23;
            var16 = var22.bind(var4)(var20, var16);
            var8[1] = var16;
            var8[2] = var15;
            var16 = _closure1_slot29;
            var12 = var18[var12];
            var12 = var19.bind(var4)(var12);
            var15 = var12.LegacyText;
            var12 = {};
            var22 = var14.rowText;
            var20 = new Array(2);
            var20[0] = var22;
            var22 = var14.rowPrice;
            var20[1] = var22;
            var12['style'] = var20;
            var23 = 18;
            var18 = var18[var23];
            var18 = var19.bind(var4)(var18);
            var20 = var18.intl;
            var19 = var20.format;
            var18 = var17.interval;
            var17 = _closure1_slot18;
            var17 = var17.MONTH;
            if(!(var18 !== var17)) { _fun0002_ip = 55; continue _fun0002 }
case 56:
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var23];
            var17 = var18.bind(var4)(var17);
            var17 = var17.t;
            var18 = var17.rS8FA+;
            _fun0002_ip = 57; continue _fun0002;
case 55:
            var22 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var23];
            var17 = var22.bind(var4)(var17);
            var17 = var17.t;
            var18 = var17.AbOLNu;
case 57:
            var17 = {};
            var17['price'] = var21;
            var17 = var19.bind(var20)(var18, var17);
            var12['children'] = var17;
            var12 = var16.bind(var4)(var15, var12);
            var8[3] = var12;
            var9 = null;
            if(!var11) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            var12 = _closure1_slot29;
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 35;
            var10 = var15[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.ActivityIndicator;
            var10 = {'animating': true, 'size': 'small'};
            var14 = var14.purchasingSpinner;
            var10['style'] = var14;
            var10['color'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 58:
            var8[4] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot37 = var1;
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
            var2 = var1.subscription;
            var _closure2_slot4 = var2;
            var1 = var1.shouldRemoveYearlyUpsell;
            var _closure2_slot5 = var1;
            var4 = undefined;
            var _closure2_slot7 = var4;
            var3 = _closure1_slot9;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.getCheckoutContextRecord;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var3.bind(var4)(var2);
            var _closure2_slot6 = var6;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 36;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isIOS;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0005_ip = 60; continue _fun0005 }
case 61:
            var3 = null;
            var2 = var3 != var6;
case 60:
            _closure2_slot7 = var2;
            var3 = _closure1_slot29;
            var2 = _closure1_slot7;
            var1 = {};
            var6 = var7.map;
            var5 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot29;
                var4 = _closure1_slot37;
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
                        var14 = 37;
                        var1 = var1[var14];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.getToggledIntervalProduct;
                        var7 = var1.bind(var2)(var4);
                        var _closure4_slot1 = var7;
                        var2 = _closure2_slot7;
                        var5 = null;
                        var9 = null;
                        if(!var2) { _fun0006_ip = 62; continue _fun0006 }
case 14:
                        var2 = var5 != var7;
                        var9 = null;
                        if(!var2) { _fun0006_ip = 62; continue _fun0006 }
case 63:
                        var2 = _closure2_slot6;
                        var10 = var5 == var2;
                        var2 = undefined;
                        if(var10) { _fun0006_ip = 64; continue _fun0006 }
case 65:
                        var12 = _closure2_slot6;
                        var11 = var12.getAvailablePlanForItems;
                        var13 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var10 = var10[var14];
                        var13 = var13.bind(var3)(var10);
                        var10 = var13.getSubscriptionItemsForProduct;
                        var10 = var10.bind(var13)(var7);
                        var2 = var11.bind(var12)(var10);
case 64:
                        var10 = var5 != var2;
                        var9 = null;
                        if(!var10) { _fun0006_ip = 62; continue _fun0006 }
case 66:
                        var9 = var2;
case 62:
                        var _closure4_slot2 = var9;
                        var2 = _closure2_slot7;
                        if(var2) { _fun0006_ip = 67; continue _fun0006 }
case 68:
                        var2 = var5 != var7;
                        if(!var2) { _fun0006_ip = 69; continue _fun0006 }
case 70:
                        var11 = _closure1_slot12;
                        var10 = var11.getProduct;
                        var10 = var10.bind(var11)(var7);
                        var2 = var5 != var10;
case 69:
                        _fun0006_ip = 71; continue _fun0006;
case 67:
                        var2 = var5 != var9;
case 71:
                        if(!(var5 != var7)) { _fun0006_ip = 72; continue _fun0006 }
case 73:
                        if(!var2) { _fun0006_ip = 72; continue _fun0006 }
case 74:
                        var2 = _closure2_slot5;
                        if(var2) { _fun0006_ip = 72; continue _fun0006 }
case 75:
                        var5 = _closure2_slot3;
                        var2 = {};
                        var10 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var9 = 38;
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
                        var2 = 39;
                        var2 = var7[var2];
                        var7 = var5.bind(var3)(var2);
                        var5 = var7.openLazy;
                        var2 = {'importer': null, 'hideActionSheet': true, 'isDismissable': true};
                        var8 = function importer() {
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var2 = 41;
                            var2 = var1[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = 40;
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
                                        var4 = _closure1_slot29;
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
                                        if(var10) { _fun0007_ip = 76; continue _fun0007 }
case 77:
                                        var10 = _closure4_slot2;
                                        var9 = var10.getPriceString;
                                        var7 = var9.bind(var10)();
case 76:
                                        var9 = var8 != var7;
                                        var8 = null;
                                        if(!var9) { _fun0007_ip = 78; continue _fun0007 }
case 79:
                                        var8 = var7;
case 78:
                                        var7 = 'orderPriceString';
                                        var2[6] = var8;
                                        var8 = _closure1_slot3;
                                        var7 = function* () {
                                            var1 = function* anon_0_() {
                                                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                                    StartGenerator();
                                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                                    if(var2) { _fun0008_ip = 80; continue _fun0008 }
case 81:
                                                    var6 = _closure2_slot3;
                                                    var4 = {};
                                                    var7 = _closure1_slot0;
                                                    var8 = _closure1_slot2;
                                                    var5 = 38;
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
case 82:
                                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                                    if(var4) { _fun0008_ip = 83; continue _fun0008 }
case 64:
                                                    return var3;
case 83:
                                                    return var2;
case 80:
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
                                                    if(var2) { _fun0009_ip = 84; continue _fun0009 }
case 85:
                                                    var4 = _closure1_slot0;
                                                    var3 = _closure1_slot2;
                                                    var2 = 38;
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
case 65:
                                                    return var2;
case 78:
                                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                                    if(var4) { _fun0009_ip = 86; continue _fun0009 }
case 87:
                                                    return var3;
case 86:
                                                    return var2;
case 84:
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
case 72:
                        var5 = _closure2_slot3;
                        var2 = {};
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 38;
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
    var _closure1_slot38 = var1;
    var1 = function CurrentPlanRow(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg1;
            var13 = var2.subscription;
            var _closure2_slot0 = var13;
            var1 = var2.trackPaymentFlowStep;
            var _closure2_slot1 = var1;
            var1 = var2.trackNewPaymentFlow;
            var _closure2_slot2 = var1;
            var1 = var2.purchase;
            var _closure2_slot3 = var1;
            var1 = var2.analyticsLoadId;
            var _closure2_slot4 = var1;
            var1 = var2.showCurrentPlan;
            var2 = var2.shouldRemoveYearlyUpsell;
            var _closure2_slot5 = var2;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var2 = _closure1_slot32;
            var8 = var2.bind(var4)();
            if(!var1) { _fun0010_ip = 88; continue _fun0010 }
case 89:
            var14 = null;
            if(!(var14 != var13)) { _fun0010_ip = 88; continue _fun0010 }
case 90:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 37;
            var3 = var2[var1];
            var6 = var5.bind(var4)(var3);
            var3 = var6.getProductIdFromSubscription;
            var10 = true;
            var3 = var3.bind(var6)(var13, var10);
            _closure2_slot6 = var3;
            var2 = var2[var1];
            var5 = var5.bind(var4)(var2);
            var2 = var5.getPremiumBundledItemsFromProductId;
            var15 = var2.bind(var5)(var3);
            var6 = var15.premiumTier;
            if(!(var14 == var6)) { _fun0010_ip = 91; continue _fun0010 }
case 92:
            var2 = _closure1_slot27;
            var5 = var2.PREMIUM_GUILD;
            _fun0010_ip = 74; continue _fun0010;
case 91:
            var2 = _closure1_slot26;
            var5 = var2.bind(var4)(var6);
case 74:
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getToggledIntervalProduct;
            var11 = var1.bind(var2)(var3);
            _closure2_slot7 = var11;
            var3 = _closure1_slot29;
            var2 = _closure1_slot1;
            var1 = 42;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = var8.currentPlanGradient;
            var1['style'] = var6;
            var1['colors'] = var5;
            var5 = _closure1_slot23;
            var5 = var5.START;
            var1['start'] = var5;
            var5 = _closure1_slot23;
            var5 = var5.END;
            var1['end'] = var5;
            var7 = _closure1_slot29;
            var6 = _closure1_slot37;
            var5 = {};
            var5['plan'] = var15;
            var5['subscription'] = var13;
            var11 = var14 == var11;
            if(!var11) { _fun0010_ip = 93; continue _fun0010 }
case 94:
            var13 = var13.status;
            var12 = _closure1_slot25;
            var12 = var12.CANCELED;
            var11 = var13 !== var12;
case 93:
            var5['disabled'] = var11;
            var5['hasBackground'] = var10;
            var9 = function purchase() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 37;
                    var1 = var3[var1];
                    var6 = undefined;
                    var4 = var2.bind(var6)(var1);
                    var2 = var4.getProductIdsForBothIntervals;
                    var1 = _closure2_slot6;
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.monthly;
                    var _closure3_slot0 = var2;
                    var4 = var1.yearly;
                    var _closure3_slot1 = var4;
                    var1 = _closure2_slot0;
                    var2 = null;
                    var1 = var2 == var1;
                    var5 = undefined;
                    if(var1) { _fun0011_ip = 95; continue _fun0011 }
case 96:
                    var1 = _closure2_slot0;
                    var5 = var1.status;
case 95:
                    var1 = _closure1_slot25;
                    var1 = var1.CANCELED;
                    if(!(var5 !== var1)) { _fun0011_ip = 97; continue _fun0011 }
case 98:
                    var1 = _closure2_slot7;
                    var5 = var2 != var1;
                    var1 = undefined;
                    if(!var5) { _fun0011_ip = 99; continue _fun0011 }
case 82:
                    var10 = _closure1_slot12;
                    var9 = var10.getProduct;
                    var5 = _closure2_slot7;
                    var5 = var9.bind(var10)(var5);
                    var5 = var2 != var5;
                    var1 = undefined;
                    if(!var5) { _fun0011_ip = 99; continue _fun0011 }
case 8:
                    var9 = _closure2_slot1;
                    var5 = {};
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 38;
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
                    var10 = _closure2_slot7;
                    var5['productId'] = var10;
                    var5 = var9.bind(var6)(var5);
                    var10 = _closure2_slot3;
                    var9 = _closure2_slot7;
                    var5 = _closure2_slot4;
                    var1 = var10.bind(var6)(var9, var5);
case 99:
                    _fun0011_ip = 100; continue _fun0011;
case 97:
                    if(!(var2 != var4)) { _fun0011_ip = 101; continue _fun0011 }
case 102:
                    var2 = _closure2_slot5;
                    if(var2) { _fun0011_ip = 101; continue _fun0011 }
case 103:
                    var4 = _closure2_slot1;
                    var2 = {};
                    var10 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var9 = 38;
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
                    var9 = _closure2_slot6;
                    var2['productId'] = var9;
                    var2 = var4.bind(var6)(var2);
                    var4 = _closure1_slot1;
                    var2 = 39;
                    var2 = var5[var2];
                    var5 = var4.bind(var6)(var2);
                    var4 = var5.openLazy;
                    var2 = {'importer': null, 'hideActionSheet': true, 'isDismissable': true};
                    var8 = function importer() {
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 41;
                        var2 = var1[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = 40;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var3 = var3.bind(var4)(var2, var1);
                        var2 = var3.then;
                        var1 = function(arg1) {
                            var2 = arg1;
                            var2 = var2.default;
                            var _closure5_slot0 = var2;
                            var1 = function(arg1) {
                                var4 = _closure1_slot29;
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
                                            if(var2) { _fun0012_ip = 84; continue _fun0012 }
case 85:
                                            var4 = _closure1_slot0;
                                            var3 = _closure1_slot2;
                                            var2 = 38;
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
case 65:
                                            return var2;
case 78:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(var4) { _fun0012_ip = 86; continue _fun0012 }
case 87:
                                            return var3;
case 86:
                                            return var2;
case 84:
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
                                            if(var2) { _fun0013_ip = 80; continue _fun0013 }
case 81:
                                            var6 = _closure2_slot1;
                                            var4 = {};
                                            var7 = _closure1_slot0;
                                            var8 = _closure1_slot2;
                                            var5 = 38;
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
case 82:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(var4) { _fun0013_ip = 83; continue _fun0013 }
case 64:
                                            return var3;
case 83:
                                            return var2;
case 80:
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
                    _fun0011_ip = 104; continue _fun0011;
case 101:
                    var5 = _closure2_slot1;
                    var4 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 38;
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
                    var7 = _closure2_slot6;
                    var4['productId'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var5 = _closure2_slot3;
                    var4 = _closure2_slot6;
                    var3 = _closure2_slot4;
                    var2 = var5.bind(var6)(var4, var3);
case 104:
                    var1 = var2;
case 100:
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
case 88:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function PlanSectionHeader(arg1) {
        var1 = arg1;
        var5 = var1.string;
        var2 = _closure1_slot32;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var3 = _closure1_slot29;
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 30;
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
    var _closure1_slot40 = var1;
    var1 = function PlanSections(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var2 = var1.plans;
            var _closure2_slot0 = var2;
            var16 = var1.subscription;
            var _closure2_slot1 = var16;
            var11 = var1.showCurrentPlan;
            var10 = var1.isBoostPurchaseFlow;
            var15 = var1.analyticsLoadId;
            var _closure2_slot2 = var15;
            var13 = var1.trackPaymentFlowStep;
            var _closure2_slot3 = var13;
            var12 = var1.trackNewPaymentFlow;
            var _closure2_slot4 = var12;
            var14 = var1.purchase;
            var _closure2_slot5 = var14;
            var4 = undefined;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var1 = _closure1_slot32;
            var5 = var1.bind(var4)();
            var2 = _closure1_slot9;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.getCheckoutContextRecord;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var2.bind(var4)(var1);
            var _closure2_slot6 = var1;
            var1 = null;
            var2 = var1 != var16;
            if(!var2) { _fun0014_ip = 105; continue _fun0014 }
case 106:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 37;
            var2 = var8[var2];
            var8 = var3.bind(var4)(var2);
            var3 = var8.getProductIdFromSubscription;
            var2 = false;
            var1 = var3.bind(var8)(var16, var2);
case 105:
            _closure2_slot7 = var1;
            if(!var10) { _fun0014_ip = 107; continue _fun0014 }
case 108:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 43;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getShouldRemoveYearlyUpsell;
            var1 = 'PremiumPlanSelect';
            var10 = var2.bind(var3)(var1);
case 107:
            _closure2_slot8 = var10;
            var3 = _closure1_slot30;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var5.container;
            var1['style'] = var5;
            var9 = _closure1_slot29;
            var8 = _closure1_slot39;
            var5 = {};
            var5['subscription'] = var16;
            var5['analyticsLoadId'] = var15;
            var5['purchase'] = var14;
            var5['trackPaymentFlowStep'] = var13;
            var5['trackNewPaymentFlow'] = var12;
            var5['showCurrentPlan'] = var11;
            var5['shouldRemoveYearlyUpsell'] = var10;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = _closure1_slot34;
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
                            var5 = arg1;
                            var3 = var5.productId;
                            var1 = _closure2_slot7;
                            var1 = var3 !== var1;
                            if(!var1) { _fun0016_ip = 109; continue _fun0016 }
case 110:
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 37;
                            var4 = var4[var3];
                            var3 = undefined;
                            var7 = var6.bind(var3)(var4);
                            var6 = var7.productsHaveSamePerks;
                            var4 = var5.productId;
                            var3 = _closure2_slot7;
                            var3 = var6.bind(var7)(var4, var3);
                            var1 = !var3;
case 109:
                            if(!var1) { _fun0016_ip = 111; continue _fun0016 }
case 112:
                            var4 = _closure3_slot0;
                            var3 = undefined;
                            var1 = var4.bind(var3)(var5);
case 111:
                            if(!var1) { _fun0016_ip = 113; continue _fun0016 }
case 87:
                            var4 = var5.premiumTier;
                            var3 = _closure1_slot17;
                            var3 = var3.TIER_1;
                            var1 = var4 !== var3;
case 113:
                            if(!var1) { _fun0016_ip = 114; continue _fun0016 }
case 115:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 36;
                            var3 = var7[var3];
                            var9 = undefined;
                            var6 = var6.bind(var9)(var3);
                            var3 = var6.isIOS;
                            var3 = var3.bind(var6)();
                            var3 = !var3;
                            if(var3) { _fun0016_ip = 116; continue _fun0016 }
case 117:
                            var7 = _closure2_slot6;
                            var6 = null;
                            var3 = var6 == var7;
case 116:
                            if(var3) { _fun0016_ip = 118; continue _fun0016 }
case 119:
                            var7 = _closure2_slot6;
                            var6 = var7.getAvailablePlanForItems;
                            var8 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var4 = 37;
                            var4 = var10[var4];
                            var9 = var8.bind(var9)(var4);
                            var8 = var9.getSubscriptionItemsForProduct;
                            var4 = var5.productId;
                            var4 = var8.bind(var9)(var4);
                            var6 = var6.bind(var7)(var4);
                            var4 = null;
                            var3 = var4 != var6;
case 118:
                            var1 = var3;
case 114:
                            if(!var1) { _fun0016_ip = 120; continue _fun0016 }
case 121:
                            var4 = _closure2_slot7;
                            var6 = null;
                            var3 = var6 == var4;
                            var2 = true;
                            if(var3) { _fun0016_ip = 94; continue _fun0016 }
case 122:
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 44;
                            var7 = var7[var3];
                            var3 = undefined;
                            var3 = var8.bind(var3)(var7);
                            var3 = var3.AppStorePremiumProductIdsToPremiumBundledItems;
                            var4 = var3[var4];
                            var3 = var4.premiumTier;
                            var3 = var6 != var3;
                            if(var3) { _fun0016_ip = 123; continue _fun0016 }
case 17:
                            var5 = var5.numPremiumGuild;
                            var4 = var4.numPremiumGuild;
                            var3 = var5 >= var4;
case 123:
                            var2 = var3;
case 94:
                            var1 = var2;
case 120:
                            return var1;
                        }
                    };
                    var11 = var3.bind(var4)(var2);
                    var3 = var11.length;
                    var2 = 0;
                    if(!(var2 !== var3)) { _fun0015_ip = 124; continue _fun0015 }
case 125:
                    var5 = undefined;
                    var4 = var1.bind(var5)();
                    var3 = _closure1_slot30;
                    var2 = _closure1_slot7;
                    var1 = {};
                    var9 = _closure1_slot29;
                    var8 = _closure1_slot40;
                    var6 = {};
                    var6['string'] = var4;
                    var8 = var9.bind(var5)(var8, var6);
                    var6 = new Array(2);
                    var6[0] = var8;
                    var9 = _closure1_slot29;
                    var8 = _closure1_slot38;
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
                    var11 = _closure2_slot1;
                    var7['subscription'] = var11;
                    var10 = _closure2_slot8;
                    var7['shouldRemoveYearlyUpsell'] = var10;
                    var7 = var9.bind(var5)(var8, var7);
                    var6[1] = var7;
                    var1['children'] = var6;
                    var1 = var3.bind(var5)(var2, var1, var4);
                    return var1;
case 124:
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
    var _closure1_slot41 = var1;
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
    var7 = var4.Image;
    var _closure1_slot6 = var7;
    var7 = var4.View;
    var _closure1_slot7 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useNativeCheckoutStore;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var14 = 8;
    var4 = var6[var14];
    var4 = var5.bind(var1)(var4);
    var7 = var4.setIsPurchasing;
    var _closure1_slot13 = var7;
    var4 = var4.usePremiumPlanSelectStore;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
    var _closure1_slot15 = var7;
    var7 = var4.PremiumSubscriptionSKUs;
    var _closure1_slot16 = var7;
    var7 = var4.PremiumTypes;
    var _closure1_slot17 = var7;
    var7 = var4.SubscriptionIntervalTypes;
    var _closure1_slot18 = var7;
    var4 = var4.SubscriptionPlans;
    var _closure1_slot19 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot20 = var7;
    var7 = var4.AnalyticsObjects;
    var _closure1_slot21 = var7;
    var7 = var4.AnalyticsObjectTypes;
    var _closure1_slot22 = var7;
    var17 = var4.Fonts;
    var7 = var4.HorizontalGradient;
    var _closure1_slot23 = var7;
    var7 = var4.PaymentGateways;
    var _closure1_slot24 = var7;
    var7 = var4.SubscriptionStatusTypes;
    var _closure1_slot25 = var7;
    var15 = var4.USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.getPremiumGradientColor;
    var _closure1_slot26 = var7;
    var4 = var4.Gradients;
    var _closure1_slot27 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ItemPurchaseType;
    var _closure1_slot28 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot29 = var7;
    var7 = var4.jsxs;
    var _closure1_slot30 = var7;
    var4 = var4.Fragment;
    var _closure1_slot31 = var4;
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
    var7 = {};
    var18 = 0.5;
    var7['opacity'] = var18;
    var4['rowDisabled'] = var7;
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
    var13 = {'position': 'absolute', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0, 'alignItems': 'center', 'justifyContent': 'center'};
    var4['purchasingSpinner'] = var13;
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
    var _closure1_slot32 = var4;
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
    var _closure1_slot33 = var4;
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
            if(!var1) { _fun0017_ip = 126; continue _fun0017 }
case 3:
            var3 = var2.numPremiumGuild;
            var2 = 0;
            var1 = var2 === var3;
case 126:
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
            if(!var1) { _fun0018_ip = 126; continue _fun0018 }
case 3:
            var3 = var2.numPremiumGuild;
            var2 = 0;
            var1 = var2 !== var3;
case 126:
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
            if(!var1) { _fun0019_ip = 126; continue _fun0019 }
case 3:
            var3 = var2.numPremiumGuild;
            var2 = 0;
            var1 = var2 !== var3;
case 126:
            return var1;
        }
    };
    var7['predicate'] = var9;
    var4[2] = var7;
    var _closure1_slot34 = var4;
    var7 = var8.forwardRef;
    var4 = function PremiumPlanSelect(arg1, arg2) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = arg1;
            var9 = arg2;
            var20 = var1.predicate;
            var17 = var1.showCurrentPlan;
            var7 = undefined;
            if(!(var17 === var7)) { _fun0020_ip = 127; continue _fun0020 }
case 128:
            var17 = true;
case 127:
            var16 = var1.isBoostPurchaseFlow;
            if(!(var16 === var7)) { _fun0020_ip = 129; continue _fun0020 }
case 130:
            var16 = false;
case 129:
            var18 = var1.analyticsLocation;
            var12 = var1.planId;
            var24 = var1.applicationId;
            var _closure2_slot0 = var24;
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var7;
            var _closure2_slot4 = var7;
            var _closure2_slot5 = var7;
            var _closure2_slot6 = var7;
            var _closure2_slot7 = var7;
            var _closure2_slot8 = var7;
            var1 = _closure1_slot32;
            var19 = var1.bind(var7)();
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 49;
            var1 = var5[var1];
            var1 = var6.bind(var7)(var1);
            var1 = var1.bind(var7)();
            var26 = var1.analyticsLocations;
            var3 = _closure1_slot0;
            var11 = 27;
            var1 = var5[var11];
            var10 = var3.bind(var7)(var1);
            var4 = var10.useStateFromStoresArray;
            var1 = _closure1_slot11;
            var2 = new Array(2);
            var2[0] = var1;
            var1 = _closure1_slot10;
            var2[1] = var1;
            var1 = function() {
                var3 = _closure1_slot11;
                var1 = var3.hasFetchedSubscriptions;
                var3 = var1.bind(var3)();
                var1 = new Array(2);
                var1[0] = var3;
                var3 = _closure1_slot10;
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
            var13 = 1;
            var2 = var1[var13];
            _closure2_slot1 = var2;
            var22 = _closure1_slot5;
            var21 = var22.useEffect;
            var15 = new Array(1);
            var15[0] = var2;
            var1 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0021_ip = 131; continue _fun0021 }
case 81:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 50;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchPremiumSubscriptionPlans;
                    var1 = var1.bind(var2)();
case 131:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var21.bind(var22)(var1, var15);
            var1 = 51;
            var1 = var5[var1];
            var6 = var6.bind(var7)(var1);
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 38;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getNewAnalyticsLoadId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var6.bind(var7)(var1);
            var1 = 38;
            var1 = var5[var1];
            var5 = var3.bind(var7)(var1);
            var3 = var5.getBasePurchaseFlowAnalyticsFields;
            var1 = {};
            var1['analyticsLoadId'] = var15;
            var6 = {};
            var21 = _closure1_slot21;
            var21 = var21.BUTTON_CTA;
            var6['object'] = var21;
            var21 = _closure1_slot22;
            var21 = var21.BUY;
            var6['object_type'] = var21;
            var31 = var6;
            var30 = var18;
            var18 = copyDataProperties(var31, var30);
            var1['analyticsLocation'] = var6;
            var1['analyticsLocations'] = var26;
            var1 = var3.bind(var5)(var1);
            _closure2_slot2 = var1;
            var6 = null;
            if(!(var6 == var12)) { _fun0020_ip = 132; continue _fun0020 }
case 133:
            var3 = {};
            _fun0020_ip = 134; continue _fun0020;
case 132:
            var5 = {};
            var5['subscription_plan_id'] = var12;
            var3 = var5;
case 134:
            _closure2_slot3 = var3;
            var5 = _closure1_slot1;
            var21 = _closure1_slot2;
            var3 = 52;
            var3 = var21[var3];
            var5 = var5.bind(var7)(var3);
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 53;
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
            var5 = _closure1_slot9;
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
            var18 = var3.activeSubscription;
            var12 = _closure1_slot0;
            var3 = 54;
            var3 = var21[var3];
            var5 = var12.bind(var7)(var3);
            var3 = var5.useHandlePremiumPurchase;
            var23 = var3.bind(var5)();
            _closure2_slot4 = var23;
            var3 = 55;
            var3 = var21[var3];
            var5 = var12.bind(var7)(var3);
            var3 = var5.useNavigation;
            var22 = var3.bind(var5)();
            _closure2_slot5 = var22;
            var3 = 56;
            var3 = var21[var3];
            var5 = var12.bind(var7)(var3);
            var3 = var5.useIsPaymentsBlocked;
            var3 = var3.bind(var5)();
            var5 = 57;
            var5 = var21[var5];
            var21 = var12.bind(var7)(var5);
            var12 = var21.useFetchSubscriptionInvoicePreview;
            if(!(var6 == var18)) { _fun0020_ip = 135; continue _fun0020 }
case 136:
            var5 = {};
            _fun0020_ip = 137; continue _fun0020;
case 135:
            var25 = {};
            var27 = var18.id;
            var25['subscriptionId'] = var27;
            var27 = true;
            var25['renewal'] = var27;
            var25['analyticsLocations'] = var26;
            var27 = _closure1_slot1;
            var28 = _closure1_slot2;
            var26 = 58;
            var26 = var28[var26];
            var26 = var27.bind(var7)(var26);
            var26 = var26.PREMIUM_PLAN_SELECT;
            var25['analyticsLocation'] = var26;
            var5 = var25;
case 137:
            var12 = var12.bind(var21)(var5);
            var5 = _closure1_slot4;
            var5 = var5.bind(var7)(var12, var13);
            var25 = var5[var10];
            var10 = _closure1_slot9;
            var5 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.patchOrderLineItems;
                var1['patchOrderLineItems'] = var3;
                var3 = var2.isPatchOrderLoading;
                var1['isPatchOrderLoading'] = var3;
                var2 = var2.orderRequired;
                var1['orderRequired'] = var2;
                return var1;
            };
            var5 = var10.bind(var7)(var5);
            var21 = var5.patchOrderLineItems;
            _closure2_slot6 = var21;
            var13 = var5.orderRequired;
            _closure2_slot7 = var13;
            var10 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var11];
            var12 = var10.bind(var7)(var5);
            var11 = var12.useStateFromStores;
            var5 = _closure1_slot11;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var11.bind(var12)(var10, var5);
            _closure2_slot8 = var12;
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
                            var5 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0022_ip = 138; continue _fun0022 }
case 139:
                            var14 = var5;
                            var13 = arg2;
                            var3 = undefined;
                            var9 = undefined;
                            var10 = undefined;
                            var2 = _closure1_slot13;
                            var8 = true;
                            var2 = var2.bind(var3)(var8, var5);
                            var2 = _closure2_slot8;
                            var11 = null;
                            if(!(var11 == var2)) { _fun0022_ip = 140; continue _fun0022 }
case 47:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 37;
                            var2 = var6[var2];
                            var6 = var5.bind(var3)(var2);
                            var5 = var6.getSubscriptionItemsForProduct;
                            var2 = var14;
                            var15 = var5.bind(var6)(var2);
                            _fun0022_ip = 141; continue _fun0022;
case 140:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 37;
                            var2 = var6[var2];
                            var16 = var5.bind(var3)(var2);
                            var6 = var16.getModifySubscriptionItemsForProduct;
                            var5 = var14;
                            var2 = _closure2_slot8;
                            var15 = var6.bind(var16)(var5, var2);
case 141:
                            var9 = undefined;
                            var2 = _closure2_slot7;
                            if(!var2) { _fun0022_ip = 142; continue _fun0022 }
case 60:
                            var5 = _closure2_slot6;
                            var6 = var15.map;
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
                                var2 = _closure1_slot28;
                                var2 = var2.SUBSCRIPTION;
                                var1['purchase_type'] = var2;
                                return var1;
                            };
                            var2 = var6.bind(var15)(var2);
                            var2 = var5.bind(var3)(var2);
                            SaveGenerator(address=169);
case 143:
                            return var2;
case 144:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0022_ip = 145; continue _fun0022 }
case 146:
                            var9 = var2;
                            if(!(var11 != var2)) { _fun0022_ip = 32; continue _fun0022 }
case 142: // try_start_0
                            var6 = _closure2_slot4;
                            var5 = {};
                            var5['productId'] = var14;
                            var14 = _closure2_slot2;
                            var14 = var14.location;
                            var5['analyticsLocation'] = var14;
                            var5['analyticsLoadId'] = var13;
                            var12 = _closure2_slot0;
                            var5['applicationId'] = var12;
                            var10 = var9;
                            var11 = var11 == var9;
                            var9 = undefined;
                            if(var11) { _fun0022_ip = 147; continue _fun0022 }
case 148:
                            var9 = var10.id;
case 147:
                            var5['orderId'] = var9;
                            var7 = function onPurchaseComplete(arg1) {
                                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                                    var1 = arg1;
                                    var4 = var1.paymentGateway;
                                    var6 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var1 = 39;
                                    var5 = var5[var1];
                                    var1 = undefined;
                                    var6 = var6.bind(var1)(var5);
                                    var5 = var6.close;
                                    var5 = var5.bind(var6)();
                                    var3 = _closure1_slot24;
                                    var3 = var3.APPLE_ADVANCED_COMMERCE;
                                    if(!(var4 === var3)) { _fun0023_ip = 49; continue _fun0023 }
case 149:
                                    var3 = function showPremiumActivatedAlert(arg1) {
                                        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                                            var3 = arg1;
                                            var _closure7_slot0 = var3;
                                            var2 = _closure1_slot11;
                                            var1 = var2.getPremiumTypeSubscription;
                                            var2 = var1.bind(var2)();
                                            var _closure7_slot1 = var2;
                                            var1 = null;
                                            if(!(var1 != var2)) { _fun0024_ip = 65; continue _fun0024 }
case 150:
                                            var6 = _closure1_slot1;
                                            var5 = _closure1_slot2;
                                            var2 = 39;
                                            var5 = var5[var2];
                                            var2 = undefined;
                                            var7 = var6.bind(var2)(var5);
                                            var6 = var7.openLazy;
                                            var5 = {};
                                            var8 = function importer() {
                                                var3 = _closure1_slot0;
                                                var1 = _closure1_slot2;
                                                var2 = 41;
                                                var2 = var1[var2];
                                                var4 = undefined;
                                                var3 = var3.bind(var4)(var2);
                                                var2 = 48;
                                                var2 = var1[var2];
                                                var1 = var1.paths;
                                                var3 = var3.bind(var4)(var2, var1);
                                                var2 = var3.then;
                                                var1 = function(arg1) {
                                                    var2 = arg1;
                                                    var2 = var2.default;
                                                    var _closure9_slot0 = var2;
                                                    var1 = function(arg1) {
                                                        var5 = arg1;
                                                        var _closure10_slot0 = var5;
                                                        var4 = _closure1_slot29;
                                                        var3 = _closure9_slot0;
                                                        var2 = {};
                                                        var8 = var2;
                                                        var7 = var5;
                                                        var5 = copyDataProperties(var8, var7);
                                                        var6 = _closure7_slot1;
                                                        var5 = 'subscription';
                                                        var2[4] = var6;
                                                        var5 = function onClose() {
                                                            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                                                                var2 = _closure10_slot0;
                                                                var1 = var2.onClose;
                                                                var1 = var1.bind(var2)();
                                                                var4 = _closure1_slot1;
                                                                var6 = _closure1_slot2;
                                                                var1 = 46;
                                                                var3 = var6[var1];
                                                                var1 = undefined;
                                                                var4 = var4.bind(var1)(var3);
                                                                var3 = var4.popWithKey;
                                                                var5 = _closure1_slot0;
                                                                var2 = 47;
                                                                var2 = var6[var2];
                                                                var2 = var5.bind(var1)(var2);
                                                                var2 = var2.PREMIUM_KEY;
                                                                var2 = var3.bind(var4)(var2);
                                                                var4 = _closure7_slot0;
                                                                var3 = null;
                                                                if(!(var3 != var4)) { _fun0025_ip = 86; continue _fun0025 }
case 7:
                                                                var2 = _closure7_slot0;
                                                                var2 = var2.bind(var1)();
case 86:
                                                                return var1;
                                                            }
                                                        };
                                                        var1 = 'onClose';
                                                        var2[0] = var5;
                                                        var1 = undefined;
                                                        var1 = var4.bind(var1)(var3, var2);
                                                        return var1;
                                                    };
                                                    return var1;
                                                };
                                                var1 = var2.bind(var3)(var1);
                                                return var1;
                                            };
                                            var5['importer'] = var8;
                                            var5 = var6.bind(var7)(var5);
                                            return var2;
case 65:
                                            var7 = _closure1_slot0;
                                            var8 = _closure1_slot2;
                                            var2 = 45;
                                            var5 = var8[var2];
                                            var2 = undefined;
                                            var10 = var7.bind(var2)(var5);
                                            var9 = var10.captureBillingException;
                                            var5 = global;
                                            var11 = var5.Error;
                                            var5 = var11.prototype;
                                            var6 = Object.create(var5, {constructor: {value: var11}});
                                            var14 = 'PremiumActivatedAlert: no premium subscription in store post-activation';
                                            var15 = var6;
                                            var5 = new var15[var11](var14, var13);
                                            var6 = var5 instanceof Object ? var5 : var6;
                                            var5 = {};
                                            var11 = {};
                                            var12 = 'showPremiumActivatedAlert.nullSubscription';
                                            var11['source'] = var12;
                                            var5['tags'] = var11;
                                            var5 = var9.bind(var10)(var6, var5);
                                            var5 = _closure1_slot1;
                                            var4 = 46;
                                            var4 = var8[var4];
                                            var6 = var5.bind(var2)(var4);
                                            var5 = var6.popWithKey;
                                            var4 = 47;
                                            var4 = var8[var4];
                                            var4 = var7.bind(var2)(var4);
                                            var4 = var4.PREMIUM_KEY;
                                            var4 = var5.bind(var6)(var4);
                                            var1 = var1 == var3;
                                            if(var1) { _fun0024_ip = 151; continue _fun0024 }
case 152:
                                            var1 = var3.bind(var2)();
case 151:
                                            var1 = undefined;
                                            return var1;
                                        }
                                    };
                                    var2 = function() {
                                        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                                            var3 = _closure2_slot5;
                                            var2 = var3.canGoBack;
                                            var2 = var2.bind(var3)();
                                            if(!var2) { _fun0026_ip = 153; continue _fun0026 }
case 154:
                                            var2 = _closure2_slot5;
                                            var1 = var2.goBack;
                                            var1 = var1.bind(var2)();
case 153:
                                            var1 = undefined;
                                            return var1;
                                        }
                                    };
                                    var2 = var3.bind(var1)(var2);
case 49:
                                    return var1;
                                }
                            };
                            var5['onPurchaseComplete'] = var7;
                            var5 = var6.bind(var3)(var5);
                            SaveGenerator(address=269);
case 155:
                            return var5;
case 156:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(var6) { _fun0022_ip = 157; continue _fun0022 }
case 158: // try_end0
                            _fun0022_ip = 159; continue _fun0022;
case 157:
                            return var5;
case 160: // catch_target0
                            CatchBlockStart(arg_register=5);
                            var7 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var5 = 59;
                            var5 = var9[var5];
                            var5 = var7.bind(var3)(var5);
                            var5 = var6 instanceof var5;
                            if(var5) { _fun0022_ip = 161; continue _fun0022 }
case 162:
                            var6 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var5 = 39;
                            var5 = var13[var5];
                            var7 = var6.bind(var3)(var5);
                            var6 = var7.show;
                            var5 = {};
                            var12 = _closure1_slot0;
                            var9 = 18;
                            var10 = var13[var9];
                            var10 = var12.bind(var3)(var10);
                            var14 = var10.intl;
                            var11 = var14.string;
                            var10 = var13[var9];
                            var10 = var12.bind(var3)(var10);
                            var10 = var10.t;
                            var10 = var10.zrhHH3;
                            var10 = var11.bind(var14)(var10);
                            var5['title'] = var10;
                            var10 = var13[var9];
                            var10 = var12.bind(var3)(var10);
                            var11 = var10.intl;
                            var10 = var11.string;
                            var9 = var13[var9];
                            var9 = var12.bind(var3)(var9);
                            var9 = var9.t;
                            var9 = var9.PjfUXe;
                            var9 = var10.bind(var11)(var9);
                            var5['body'] = var9;
                            var5['isDismissable'] = var8;
                            var5 = var6.bind(var7)(var5);
                            _fun0022_ip = 159; continue _fun0022;
case 161:
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var5 = 60;
                            var5 = var12[var5];
                            var6 = var11.bind(var3)(var5);
                            var5 = var6.fetchSubscriptions;
                            var5 = var5.bind(var6)();
                            var6 = _closure1_slot1;
                            var5 = 39;
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
case 159:
                            var6 = _closure1_slot13;
                            var5 = false;
                            var5 = var6.bind(var3)(var5);
                            _fun0022_ip = 163; continue _fun0022;
case 32:
                            var5 = _closure1_slot13;
                            var4 = false;
                            var4 = var5.bind(var3)(var4);
case 163:
                            return var3;
case 145:
                            return var2;
case 138:
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
            var26 = var1.location;
            var1 = new Array(7);
            var1[0] = var26;
            var1[1] = var24;
            var1[2] = var23;
            var1[3] = var22;
            var1[4] = var21;
            var1[5] = var13;
            var1[6] = var12;
            var13 = var10.bind(var11)(var5, var1);
            var5 = var6 == var20;
            var1 = null;
            if(var5) { _fun0020_ip = 164; continue _fun0020 }
case 165:
            if(!var4) { _fun0020_ip = 166; continue _fun0020 }
case 167:
            if(var2) { _fun0020_ip = 168; continue _fun0020 }
case 166:
            var5 = _closure1_slot29;
            var4 = _closure1_slot7;
            var2 = {};
            var10 = var19.loadingSpinnerContainer;
            var2['style'] = var10;
            var12 = _closure1_slot29;
            var11 = _closure1_slot0;
            var21 = _closure1_slot2;
            var10 = 35;
            var10 = var21[var10];
            var10 = var11.bind(var7)(var10);
            var11 = var10.ActivityIndicator;
            var10 = {'animating': true, 'size': 'large'};
            var10 = var12.bind(var7)(var11, var10);
            var2['children'] = var10;
            var2 = var5.bind(var7)(var4, var2);
            _fun0020_ip = 169; continue _fun0020;
case 168:
            if(var3) { _fun0020_ip = 170; continue _fun0020 }
case 171:
            if(!(var6 != var18)) { _fun0020_ip = 172; continue _fun0020 }
case 173:
            var3 = var18.isOnPlatformMatchingExternalPaymentGateway;
            if(!var3) { _fun0020_ip = 174; continue _fun0020 }
case 175:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 37;
            var4 = var11[var3];
            var5 = var10.bind(var7)(var4);
            var4 = var5.isValidBundleProductId;
            var3 = var11[var3];
            var11 = var10.bind(var7)(var3);
            var10 = var11.getProductIdFromSubscription;
            var3 = false;
            var3 = var10.bind(var11)(var18, var3);
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0020_ip = 172; continue _fun0020 }
case 174:
            var5 = _closure1_slot30;
            var4 = _closure1_slot8;
            var3 = {};
            var10 = var6 != var25;
            if(!var10) { _fun0020_ip = 176; continue _fun0020 }
case 177:
            var12 = _closure1_slot30;
            var11 = _closure1_slot31;
            var6 = {};
            var24 = _closure1_slot29;
            var23 = _closure1_slot0;
            var26 = _closure1_slot2;
            var21 = 62;
            var21 = var26[var21];
            var21 = var23.bind(var7)(var21);
            var22 = var21.Text;
            var21 = {'style': null, 'variant': 'eyebrow', 'color': 'text-default'};
            var27 = var19.premiumHeaderLabel;
            var21['style'] = var27;
            var27 = 18;
            var28 = var26[var27];
            var28 = var23.bind(var7)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var27 = var26[var27];
            var27 = var23.bind(var7)(var27);
            var27 = var27.t;
            var27 = var27.ITurwY;
            var27 = var28.bind(var29)(var27);
            var21['children'] = var27;
            var22 = var24.bind(var7)(var22, var21);
            var21 = new Array(2);
            var21[0] = var22;
            var24 = _closure1_slot29;
            var22 = 63;
            var22 = var26[var22];
            var22 = var23.bind(var7)(var22);
            var23 = var22.PremiumSubscriptionHeader;
            var22 = {};
            var22['subscription'] = var18;
            var22['renewalInvoicePreview'] = var25;
            var22 = var24.bind(var7)(var23, var22);
            var21[1] = var22;
            var6['children'] = var21;
            var10 = var12.bind(var7)(var11, var6);
case 176:
            var6 = new Array(2);
            var6[0] = var10;
            var12 = _closure1_slot29;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var10 = 62;
            var10 = var22[var10];
            var10 = var21.bind(var7)(var10);
            var11 = var10.Text;
            var10 = {};
            var19 = var19.offPlatformSubscriptionMessage;
            var10['style'] = var19;
            var19 = 'text-md/semibold';
            var10['variant'] = var19;
            var19 = 64;
            var19 = var22[var19];
            var22 = var21.bind(var7)(var19);
            var21 = var22.getExternalManagementMessage;
            var19 = {};
            var23 = true;
            var19['shouldAllowExternalManagement'] = var23;
            var19 = var21.bind(var22)(var18, var19);
            var10['children'] = var19;
            var10 = var12.bind(var7)(var11, var10);
            var6[1] = var10;
            var3['children'] = var6;
            var3 = var5.bind(var7)(var4, var3);
            _fun0020_ip = 178; continue _fun0020;
case 172:
            var6 = _closure1_slot29;
            var5 = _closure1_slot8;
            var4 = {};
            var4['ref'] = var9;
            var12 = _closure1_slot29;
            var11 = _closure1_slot41;
            var10 = {};
            var10['subscription'] = var18;
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var18 = 37;
            var18 = var21[var18];
            var19 = var19.bind(var7)(var18);
            var18 = var19.getPremiumBundlesWithPredicate;
            var18 = var18.bind(var19)(var20);
            var10['plans'] = var18;
            var10['showCurrentPlan'] = var17;
            var10['isBoostPurchaseFlow'] = var16;
            var10['analyticsLoadId'] = var15;
            var15 = function trackPaymentFlowStep(arg1) {
                var1 = arg1;
                var10 = var1.productId;
                var12 = var1.fromStep;
                var11 = var1.toStep;
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 65;
                var2 = var9[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot20;
                var3 = var2.PAYMENT_FLOW_STEP;
                var2 = {};
                var8 = _closure2_slot0;
                var2['application_id'] = var8;
                var8 = _closure1_slot0;
                var7 = 38;
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
                var1 = 53;
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
case 178:
            _fun0020_ip = 179; continue _fun0020;
case 170:
            var6 = _closure1_slot29;
            var5 = _closure1_slot8;
            var4 = {};
            var4['ref'] = var9;
            var9 = {};
            var10 = 40;
            var9['top'] = var10;
            var4['contentInset'] = var9;
            var10 = _closure1_slot29;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 61;
            var8 = var11[var8];
            var9 = var9.bind(var7)(var8);
            var8 = {};
            var8 = var10.bind(var7)(var9, var8);
            var4['children'] = var8;
            var3 = var6.bind(var7)(var5, var4);
case 179:
            var2 = var3;
case 169:
            var1 = var2;
case 164:
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot35 = var4;
    var4 = 68;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/PremiumPlanSelect.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumPlanSelectWithOrderCTX(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var1 = _closure1_slot32;
            var4 = undefined;
            var12 = var1.bind(var4)();
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 55;
            var1 = var2[var1];
            var3 = var6.bind(var4)(var1);
            var1 = var3.useNavigation;
            var1 = var1.bind(var3)();
            var _closure2_slot0 = var1;
            var10 = 27;
            var1 = var2[var10];
            var9 = var6.bind(var4)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot11;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var8.bind(var9)(var3, var1);
            var1 = 66;
            var1 = var2[var1];
            var1 = var6.bind(var4)(var1);
            var9 = var1.NitroACOMSubscriptionExperiment;
            var3 = var9.useConfig;
            var1 = {};
            var11 = 'PremiumPlanSelectWithOrderCTX';
            var1['location'] = var11;
            var1 = var3.bind(var9)(var1);
            var1 = var1.enabled;
            var3 = 36;
            var2 = var2[var3];
            var6 = var6.bind(var4)(var2);
            var2 = var6.isIOS;
            var6 = var2.bind(var6)();
            var2 = _closure1_slot24;
            if(var6) { _fun0027_ip = 180; continue _fun0027 }
case 181:
            var11 = var2.GOOGLE;
            _fun0027_ip = 182; continue _fun0027;
case 180:
            if(var1) { _fun0027_ip = 183; continue _fun0027 }
case 69:
            var1 = var2.APPLE;
            _fun0027_ip = 184; continue _fun0027;
case 183:
            var1 = var2.APPLE_ADVANCED_COMMERCE;
case 184:
            var11 = var1;
case 182:
            var1 = null;
            if(!(var1 != var8)) { _fun0027_ip = 75; continue _fun0027 }
case 185:
            var11 = var8.paymentGateway;
case 75:
            var13 = {};
            var2 = _closure1_slot19;
            var2 = var2.PREMIUM_YEAR_TIER_2;
            var13['subscriptionPlanId'] = var2;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 19;
            var9 = var2[var9];
            var15 = var6.bind(var4)(var9);
            var14 = var15.castPremiumSubscriptionAsSkuId;
            var9 = _closure1_slot16;
            var9 = var9.TIER_2;
            var9 = var14.bind(var15)(var9);
            var13['skuId'] = var9;
            var9 = 1;
            var13['quantity'] = var9;
            var9 = new Array(1);
            var9[0] = var13;
            var2 = var2[var10];
            var13 = var6.bind(var4)(var2);
            var10 = var13.useStateFromStores;
            var2 = _closure1_slot11;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var2 = _closure1_slot11;
                var1 = var2.hasFetchedSubscriptions;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var10.bind(var13)(var6, var2);
            var _closure2_slot1 = var2;
            var14 = _closure1_slot5;
            var13 = var14.useEffect;
            var10 = new Array(1);
            var10[0] = var2;
            var6 = function() {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0028_ip = 131; continue _fun0028 }
case 81:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 60;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchSubscriptions;
                    var1 = var1.bind(var2)();
case 131:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var13.bind(var14)(var6, var10);
            if(var2) { _fun0027_ip = 186; continue _fun0027 }
case 187:
            var10 = _closure1_slot29;
            var6 = _closure1_slot7;
            var2 = {};
            var12 = var12.loadingSpinnerContainer;
            var2['style'] = var12;
            var14 = _closure1_slot29;
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var12 = 35;
            var12 = var15[var12];
            var12 = var13.bind(var4)(var12);
            var13 = var12.ActivityIndicator;
            var12 = {'animating': true, 'size': 'large'};
            var12 = var14.bind(var4)(var13, var12);
            var2['children'] = var12;
            var2 = var10.bind(var4)(var6, var2);
            return var2;
case 186:
            if(!(var1 != var11)) { _fun0027_ip = 188; continue _fun0027 }
case 189:
            if(!(var1 != var8)) { _fun0027_ip = 190; continue _fun0027 }
case 191:
            var2 = var8.isPurchasedExternally;
            var1 = false;
            if(!(var1 !== var2)) { _fun0027_ip = 188; continue _fun0027 }
case 190:
            var6 = _closure1_slot29;
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 67;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['paymentGateway'] = var11;
            var10 = _closure1_slot24;
            var10 = var10.APPLE_ADVANCED_COMMERCE;
            var10 = var11 === var10;
            var1['orderRequired'] = var10;
            var10 = new Array(0);
            var1['skuIds'] = var10;
            var1['defaultPlans'] = var9;
            var9 = false;
            var1['isGift'] = var9;
            var1['activeSubscription'] = var8;
            var7 = function onOrderRetryCancellation() {
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = var3.canGoBack;
                    var1 = var1.bind(var3)();
                    var2 = _closure2_slot0;
                    if(var1) { _fun0029_ip = 150; continue _fun0029 }
case 192:
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
                    _fun0029_ip = 193; continue _fun0029;
case 150:
                    var1 = var2.goBack;
                    var1 = var1.bind(var2)();
case 193:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onOrderRetryCancellation'] = var7;
            var9 = _closure1_slot29;
            var8 = _closure1_slot35;
            var7 = {};
            var16 = arg1;
            var17 = var7;
            var10 = copyDataProperties(var17, var16);
            var7 = var9.bind(var4)(var8, var7);
            var1['children'] = var7;
            var1 = var6.bind(var4)(var2, var1);
            return var1;
case 188:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isIOS;
            var1 = var1.bind(var2)();
            var11 = 'Android';
            if(!var1) { _fun0027_ip = 29; continue _fun0027 }
case 194:
            var11 = 'iOS';
case 29:
            var3 = _closure1_slot29;
            var2 = _closure1_slot7;
            var1 = {};
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 62;
            var5 = var12[var5];
            var5 = var8.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {};
            var7 = 'display-md';
            var5['variant'] = var7;
            var7 = 18;
            var9 = var12[var7];
            var9 = var8.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.format;
            var7 = var12[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.t;
            var8 = var7.CnoyAN;
            var7 = {};
            var7['mobilePlatform'] = var11;
            var7 = var9.bind(var10)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();