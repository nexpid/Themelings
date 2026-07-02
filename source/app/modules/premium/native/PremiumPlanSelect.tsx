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
            var1 = var1.subscription;
            var _closure2_slot4 = var1;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var3 = _closure1_slot9;
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
            _closure2_slot6 = var2;
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
                        var2 = _closure2_slot6;
                        var5 = null;
                        var9 = null;
                        if(!var2) { _fun0006_ip = 62; continue _fun0006 }
case 14:
                        var2 = var5 != var7;
                        var9 = null;
                        if(!var2) { _fun0006_ip = 62; continue _fun0006 }
case 63:
                        var2 = _closure2_slot5;
                        var10 = var5 == var2;
                        var2 = undefined;
                        if(var10) { _fun0006_ip = 64; continue _fun0006 }
case 65:
                        var12 = _closure2_slot5;
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
                        var2 = _closure2_slot6;
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
                                        if(var10) { _fun0007_ip = 75; continue _fun0007 }
case 76:
                                        var10 = _closure4_slot2;
                                        var9 = var10.getPriceString;
                                        var7 = var9.bind(var10)();
case 75:
                                        var9 = var8 != var7;
                                        var8 = null;
                                        if(!var9) { _fun0007_ip = 77; continue _fun0007 }
case 78:
                                        var8 = var7;
case 77:
                                        var7 = 'orderPriceString';
                                        var2[6] = var8;
                                        var8 = _closure1_slot3;
                                        var7 = function* () {
                                            var1 = function* anon_0_() {
                                                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                                    StartGenerator();
                                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                                    if(var2) { _fun0008_ip = 79; continue _fun0008 }
case 80:
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
case 81:
                                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                                    if(var4) { _fun0008_ip = 82; continue _fun0008 }
case 64:
                                                    return var3;
case 82:
                                                    return var2;
case 79:
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
                                                    if(var2) { _fun0009_ip = 83; continue _fun0009 }
case 84:
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
case 77:
                                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                                    if(var4) { _fun0009_ip = 85; continue _fun0009 }
case 86:
                                                    return var3;
case 85:
                                                    return var2;
case 83:
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
            var2 = _closure1_slot32;
            var8 = var2.bind(var4)();
            if(!var1) { _fun0010_ip = 87; continue _fun0010 }
case 7:
            var14 = null;
            if(!(var14 != var13)) { _fun0010_ip = 87; continue _fun0010 }
case 88:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 37;
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
            if(!(var14 == var6)) { _fun0010_ip = 69; continue _fun0010 }
case 45:
            var2 = _closure1_slot27;
            var5 = var2.PREMIUM_GUILD;
            _fun0010_ip = 50; continue _fun0010;
case 69:
            var2 = _closure1_slot26;
            var5 = var2.bind(var4)(var6);
case 50:
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getToggledIntervalProduct;
            var11 = var1.bind(var2)(var3);
            _closure2_slot6 = var11;
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
            if(!var11) { _fun0010_ip = 89; continue _fun0010 }
case 90:
            var13 = var13.status;
            var12 = _closure1_slot25;
            var12 = var12.CANCELED;
            var11 = var13 !== var12;
case 89:
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
                    if(var1) { _fun0011_ip = 91; continue _fun0011 }
case 92:
                    var1 = _closure2_slot0;
                    var5 = var1.status;
case 91:
                    var1 = _closure1_slot25;
                    var1 = var1.CANCELED;
                    if(!(var5 !== var1)) { _fun0011_ip = 93; continue _fun0011 }
case 94:
                    var1 = _closure2_slot6;
                    var5 = var2 != var1;
                    var1 = undefined;
                    if(!var5) { _fun0011_ip = 95; continue _fun0011 }
case 81:
                    var10 = _closure1_slot12;
                    var9 = var10.getProduct;
                    var5 = _closure2_slot6;
                    var5 = var9.bind(var10)(var5);
                    var5 = var2 != var5;
                    var1 = undefined;
                    if(!var5) { _fun0011_ip = 95; continue _fun0011 }
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
                    var10 = _closure2_slot6;
                    var5['productId'] = var10;
                    var5 = var9.bind(var6)(var5);
                    var10 = _closure2_slot3;
                    var9 = _closure2_slot6;
                    var5 = _closure2_slot4;
                    var1 = var10.bind(var6)(var9, var5);
case 95:
                    _fun0011_ip = 96; continue _fun0011;
case 93:
                    if(!(var2 != var4)) { _fun0011_ip = 97; continue _fun0011 }
case 98:
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
                    var9 = _closure2_slot5;
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
                                            if(var2) { _fun0012_ip = 83; continue _fun0012 }
case 84:
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
case 77:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(var4) { _fun0012_ip = 85; continue _fun0012 }
case 86:
                                            return var3;
case 85:
                                            return var2;
case 83:
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
                                            if(var2) { _fun0013_ip = 79; continue _fun0013 }
case 80:
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
case 81:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(var4) { _fun0013_ip = 82; continue _fun0013 }
case 64:
                                            return var3;
case 82:
                                            return var2;
case 79:
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
                    _fun0011_ip = 99; continue _fun0011;
case 97:
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
                    var7 = _closure2_slot5;
                    var4['productId'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var5 = _closure2_slot3;
                    var4 = _closure2_slot5;
                    var3 = _closure2_slot4;
                    var2 = var5.bind(var6)(var4, var3);
case 99:
                    var1 = var2;
case 96:
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
case 87:
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
            var2 = var1 != var15;
            if(!var2) { _fun0014_ip = 68; continue _fun0014 }
case 100:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 37;
            var2 = var8[var2];
            var8 = var3.bind(var4)(var2);
            var3 = var8.getProductIdFromSubscription;
            var2 = false;
            var1 = var3.bind(var8)(var15, var2);
case 68:
            _closure2_slot7 = var1;
            var3 = _closure1_slot30;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var5.container;
            var1['style'] = var5;
            var9 = _closure1_slot29;
            var8 = _closure1_slot39;
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
                            var3 = arg1;
                            var2 = var3.productId;
                            var1 = _closure2_slot7;
                            var1 = var2 !== var1;
                            if(!var1) { _fun0016_ip = 101; continue _fun0016 }
case 102:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 37;
                            var5 = var5[var2];
                            var2 = undefined;
                            var7 = var6.bind(var2)(var5);
                            var6 = var7.productsHaveSamePerks;
                            var5 = var3.productId;
                            var2 = _closure2_slot7;
                            var2 = var6.bind(var7)(var5, var2);
                            var1 = !var2;
case 101:
                            if(!var1) { _fun0016_ip = 103; continue _fun0016 }
case 104:
                            var5 = _closure3_slot0;
                            var2 = undefined;
                            var1 = var5.bind(var2)(var3);
case 103:
                            if(!var1) { _fun0016_ip = 105; continue _fun0016 }
case 86:
                            var5 = var3.premiumTier;
                            var2 = _closure1_slot17;
                            var2 = var2.TIER_1;
                            var1 = var5 !== var2;
case 105:
                            if(!var1) { _fun0016_ip = 106; continue _fun0016 }
case 107:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 36;
                            var2 = var7[var2];
                            var8 = undefined;
                            var5 = var5.bind(var8)(var2);
                            var2 = var5.isIOS;
                            var2 = var2.bind(var5)();
                            var2 = !var2;
                            if(var2) { _fun0016_ip = 108; continue _fun0016 }
case 109:
                            var7 = _closure2_slot6;
                            var5 = null;
                            var2 = var5 == var7;
case 108:
                            if(var2) { _fun0016_ip = 110; continue _fun0016 }
case 111:
                            var5 = _closure2_slot6;
                            var4 = var5.getAvailablePlanForItems;
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var6 = 37;
                            var6 = var9[var6];
                            var7 = var7.bind(var8)(var6);
                            var6 = var7.getSubscriptionItemsForProduct;
                            var3 = var3.productId;
                            var3 = var6.bind(var7)(var3);
                            var4 = var4.bind(var5)(var3);
                            var3 = null;
                            var2 = var3 != var4;
case 110:
                            var1 = var2;
case 106:
                            return var1;
                        }
                    };
                    var11 = var3.bind(var4)(var2);
                    var3 = var11.length;
                    var2 = 0;
                    if(!(var2 !== var3)) { _fun0015_ip = 112; continue _fun0015 }
case 113:
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
                    var10 = _closure2_slot1;
                    var7['subscription'] = var10;
                    var7 = var9.bind(var5)(var8, var7);
                    var6[1] = var7;
                    var1['children'] = var6;
                    var1 = var3.bind(var5)(var2, var1, var4);
                    return var1;
case 112:
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
            if(!var1) { _fun0017_ip = 114; continue _fun0017 }
case 3:
            var3 = var2.numPremiumGuild;
            var2 = 0;
            var1 = var2 === var3;
case 114:
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
            if(!var1) { _fun0018_ip = 114; continue _fun0018 }
case 3:
            var3 = var2.numPremiumGuild;
            var2 = 0;
            var1 = var2 !== var3;
case 114:
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
            if(!var1) { _fun0019_ip = 114; continue _fun0019 }
case 3:
            var3 = var2.numPremiumGuild;
            var2 = 0;
            var1 = var2 !== var3;
case 114:
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
            var19 = var1.predicate;
            var16 = var1.showCurrentPlan;
            var7 = undefined;
            if(!(var16 === var7)) { _fun0020_ip = 115; continue _fun0020 }
case 116:
            var16 = true;
case 115:
            var13 = var1.analyticsLocation;
            var11 = var1.planId;
            var21 = var1.applicationId;
            var _closure2_slot0 = var21;
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var7;
            var _closure2_slot4 = var7;
            var _closure2_slot5 = var7;
            var _closure2_slot6 = var7;
            var1 = _closure1_slot32;
            var18 = var1.bind(var7)();
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 43;
            var1 = var5[var1];
            var1 = var6.bind(var7)(var1);
            var1 = var1.bind(var7)();
            var23 = var1.analyticsLocations;
            var3 = _closure1_slot0;
            var1 = 27;
            var1 = var5[var1];
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
            var12 = 1;
            var2 = var1[var12];
            _closure2_slot1 = var2;
            var20 = _closure1_slot5;
            var17 = var20.useEffect;
            var15 = new Array(1);
            var15[0] = var2;
            var1 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0021_ip = 117; continue _fun0021 }
case 80:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 44;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchPremiumSubscriptionPlans;
                    var1 = var1.bind(var2)();
case 117:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var17.bind(var20)(var1, var15);
            var1 = 45;
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
            var17 = _closure1_slot21;
            var17 = var17.BUTTON_CTA;
            var6['object'] = var17;
            var17 = _closure1_slot22;
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
            if(!(var6 == var11)) { _fun0020_ip = 118; continue _fun0020 }
case 119:
            var3 = {};
            _fun0020_ip = 120; continue _fun0020;
case 118:
            var5 = {};
            var5['subscription_plan_id'] = var11;
            var3 = var5;
case 120:
            _closure2_slot3 = var3;
            var5 = _closure1_slot1;
            var13 = _closure1_slot2;
            var3 = 46;
            var3 = var13[var3];
            var5 = var5.bind(var7)(var3);
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 47;
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
            var17 = var3.activeSubscription;
            var11 = _closure1_slot0;
            var3 = 48;
            var3 = var13[var3];
            var5 = var11.bind(var7)(var3);
            var3 = var5.useHandlePremiumPurchase;
            var20 = var3.bind(var5)();
            _closure2_slot4 = var20;
            var3 = 49;
            var3 = var13[var3];
            var5 = var11.bind(var7)(var3);
            var3 = var5.useIsPaymentsBlocked;
            var3 = var3.bind(var5)();
            var5 = 50;
            var5 = var13[var5];
            var13 = var11.bind(var7)(var5);
            var11 = var13.useFetchSubscriptionInvoicePreview;
            if(!(var6 == var17)) { _fun0020_ip = 121; continue _fun0020 }
case 122:
            var5 = {};
            _fun0020_ip = 123; continue _fun0020;
case 121:
            var22 = {};
            var24 = var17.id;
            var22['subscriptionId'] = var24;
            var24 = true;
            var22['renewal'] = var24;
            var22['analyticsLocations'] = var23;
            var24 = _closure1_slot1;
            var25 = _closure1_slot2;
            var23 = 51;
            var23 = var25[var23];
            var23 = var24.bind(var7)(var23);
            var23 = var23.PREMIUM_PLAN_SELECT;
            var22['analyticsLocation'] = var23;
            var5 = var22;
case 123:
            var11 = var11.bind(var13)(var5);
            var5 = _closure1_slot4;
            var5 = var5.bind(var7)(var11, var12);
            var24 = var5[var10];
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
            var13 = var5.patchOrderLineItems;
            _closure2_slot5 = var13;
            var12 = var5.orderRequired;
            _closure2_slot6 = var12;
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
                            if(var2) { _fun0022_ip = 124; continue _fun0022 }
case 125:
                            var11 = var6;
                            var10 = arg2;
                            var3 = undefined;
                            var7 = undefined;
                            var8 = undefined;
                            var5 = _closure1_slot13;
                            var2 = true;
                            var2 = var5.bind(var3)(var2, var6);
                            var5 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var2 = 37;
                            var2 = var9[var2];
                            var5 = var5.bind(var3)(var2);
                            var2 = var5.getSubscriptionItemsForProduct;
                            var12 = var2.bind(var5)(var6);
                            var2 = _closure2_slot6;
                            if(!var2) { _fun0022_ip = 79; continue _fun0022 }
case 126:
                            var5 = _closure2_slot5;
                            var6 = var12.map;
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
                            var2 = var6.bind(var12)(var2);
                            var2 = var5.bind(var3)(var2);
                            SaveGenerator(address=113);
case 127:
                            return var2;
case 128:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0022_ip = 129; continue _fun0022 }
case 81:
                            var7 = var2;
                            var5 = null;
                            if(!(var5 != var2)) { _fun0022_ip = 130; continue _fun0022 }
case 79: // try_start_0
                            var6 = _closure2_slot4;
                            var5 = {};
                            var5['productId'] = var11;
                            var11 = _closure2_slot2;
                            var11 = var11.location;
                            var5['analyticsLocation'] = var11;
                            var5['analyticsLoadId'] = var10;
                            var9 = _closure2_slot0;
                            var5['applicationId'] = var9;
                            var9 = var7;
                            var8 = var9;
                            var7 = null;
                            var9 = var7 == var9;
                            var7 = undefined;
                            if(var9) { _fun0022_ip = 131; continue _fun0022 }
case 112:
                            var7 = var8.id;
case 131:
                            var5['orderId'] = var7;
                            var5 = var6.bind(var3)(var5);
                            SaveGenerator(address=208);
case 132:
                            return var5;
case 133:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(var6) { _fun0022_ip = 134; continue _fun0022 }
case 135: // try_end0
                            _fun0022_ip = 136; continue _fun0022;
case 134:
                            return var5;
case 137: // catch_target0
                            CatchBlockStart(arg_register=5);
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var5 = 52;
                            var5 = var8[var5];
                            var5 = var7.bind(var3)(var5);
                            var5 = var6 instanceof var5;
                            if(!var5) { _fun0022_ip = 136; continue _fun0022 }
case 138:
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var5 = 53;
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
case 136:
                            var6 = _closure1_slot13;
                            var5 = false;
                            var5 = var6.bind(var3)(var5);
                            _fun0022_ip = 139; continue _fun0022;
case 130:
                            var5 = _closure1_slot13;
                            var4 = false;
                            var4 = var5.bind(var3)(var4);
case 139:
                            return var3;
case 129:
                            return var2;
case 124:
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
            var22 = var1.location;
            var1 = new Array(5);
            var1[0] = var22;
            var1[1] = var21;
            var1[2] = var20;
            var1[3] = var13;
            var1[4] = var12;
            var13 = var10.bind(var11)(var5, var1);
            var5 = var6 == var19;
            var1 = null;
            if(var5) { _fun0020_ip = 140; continue _fun0020 }
case 141:
            if(!var4) { _fun0020_ip = 142; continue _fun0020 }
case 143:
            if(var2) { _fun0020_ip = 144; continue _fun0020 }
case 142:
            var5 = _closure1_slot29;
            var4 = _closure1_slot7;
            var2 = {};
            var10 = var18.loadingSpinnerContainer;
            var2['style'] = var10;
            var12 = _closure1_slot29;
            var11 = _closure1_slot0;
            var20 = _closure1_slot2;
            var10 = 35;
            var10 = var20[var10];
            var10 = var11.bind(var7)(var10);
            var11 = var10.ActivityIndicator;
            var10 = {'animating': true, 'size': 'large'};
            var10 = var12.bind(var7)(var11, var10);
            var2['children'] = var10;
            var2 = var5.bind(var7)(var4, var2);
            _fun0020_ip = 145; continue _fun0020;
case 144:
            if(var3) { _fun0020_ip = 146; continue _fun0020 }
case 36:
            if(!(var6 != var17)) { _fun0020_ip = 147; continue _fun0020 }
case 148:
            var3 = var17.isOnPlatformMatchingExternalPaymentGateway;
            if(!var3) { _fun0020_ip = 149; continue _fun0020 }
case 150:
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
            var3 = var10.bind(var11)(var17, var3);
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0020_ip = 147; continue _fun0020 }
case 149:
            var5 = _closure1_slot30;
            var4 = _closure1_slot8;
            var3 = {};
            var10 = var6 != var24;
            if(!var10) { _fun0020_ip = 151; continue _fun0020 }
case 152:
            var12 = _closure1_slot30;
            var11 = _closure1_slot31;
            var6 = {};
            var23 = _closure1_slot29;
            var22 = _closure1_slot0;
            var25 = _closure1_slot2;
            var20 = 55;
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
            var23 = _closure1_slot29;
            var21 = 56;
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
case 151:
            var6 = new Array(2);
            var6[0] = var10;
            var12 = _closure1_slot29;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var10 = 55;
            var10 = var21[var10];
            var10 = var20.bind(var7)(var10);
            var11 = var10.Text;
            var10 = {};
            var18 = var18.offPlatformSubscriptionMessage;
            var10['style'] = var18;
            var18 = 'text-md/semibold';
            var10['variant'] = var18;
            var18 = 57;
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
            _fun0020_ip = 153; continue _fun0020;
case 147:
            var6 = _closure1_slot29;
            var5 = _closure1_slot8;
            var4 = {};
            var4['ref'] = var9;
            var12 = _closure1_slot29;
            var11 = _closure1_slot41;
            var10 = {};
            var10['subscription'] = var17;
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var17 = 37;
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
                var1 = 58;
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
                var1 = 47;
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
case 153:
            _fun0020_ip = 154; continue _fun0020;
case 146:
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
            var8 = 54;
            var8 = var11[var8];
            var9 = var9.bind(var7)(var8);
            var8 = {};
            var8 = var10.bind(var7)(var9, var8);
            var4['children'] = var8;
            var3 = var6.bind(var7)(var5, var4);
case 154:
            var2 = var3;
case 145:
            var1 = var2;
case 140:
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot35 = var4;
    var4 = 62;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/PremiumPlanSelect.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumPlanSelectWithOrderCTX(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = _closure1_slot32;
            var5 = undefined;
            var3 = var1.bind(var5)();
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 59;
            var1 = var8[var1];
            var2 = var4.bind(var5)(var1);
            var1 = var2.useNavigation;
            var1 = var1.bind(var2)();
            var _closure2_slot0 = var1;
            var1 = 60;
            var1 = var8[var1];
            var1 = var4.bind(var5)(var1);
            var9 = var1.NitroACOMSubscriptionExperiment;
            var2 = var9.useConfig;
            var1 = {};
            var10 = 'PremiumPlanSelectWithOrderCTX';
            var1['location'] = var10;
            var1 = var2.bind(var9)(var1);
            var1 = var1.enabled;
            var2 = 36;
            var2 = var8[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.isIOS;
            var4 = var2.bind(var4)();
            var2 = _closure1_slot24;
            if(var4) { _fun0023_ip = 155; continue _fun0023 }
case 156:
            var11 = var2.GOOGLE;
            _fun0023_ip = 157; continue _fun0023;
case 155:
            if(var1) { _fun0023_ip = 158; continue _fun0023 }
case 159:
            var1 = var2.APPLE;
            _fun0023_ip = 160; continue _fun0023;
case 158:
            var1 = var2.APPLE_ADVANCED_COMMERCE;
case 160:
            var11 = var1;
case 157:
            var1 = {};
            var2 = _closure1_slot19;
            var2 = var2.PREMIUM_YEAR_TIER_2;
            var1['subscriptionPlanId'] = var2;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 19;
            var2 = var10[var2];
            var9 = var8.bind(var5)(var2);
            var4 = var9.castPremiumSubscriptionAsSkuId;
            var2 = _closure1_slot16;
            var2 = var2.TIER_2;
            var2 = var4.bind(var9)(var2);
            var1['skuId'] = var2;
            var2 = 1;
            var1['quantity'] = var2;
            var9 = new Array(1);
            var9[0] = var1;
            var4 = 27;
            var1 = var10[var4];
            var14 = var8.bind(var5)(var1);
            var13 = var14.useStateFromStores;
            var2 = _closure1_slot11;
            var12 = new Array(1);
            var12[0] = var2;
            var1 = function() {
                var2 = _closure1_slot11;
                var1 = var2.hasFetchedSubscriptions;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var13.bind(var14)(var12, var1);
            var _closure2_slot1 = var1;
            var15 = _closure1_slot5;
            var14 = var15.useEffect;
            var13 = new Array(1);
            var13[0] = var1;
            var12 = function() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0024_ip = 117; continue _fun0024 }
case 80:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 53;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchSubscriptions;
                    var1 = var1.bind(var2)();
case 117:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var14.bind(var15)(var12, var13);
            var4 = var10[var4];
            var10 = var8.bind(var5)(var4);
            var8 = var10.useStateFromStores;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var8.bind(var10)(var4, var2);
            var4 = _closure1_slot29;
            if(var1) { _fun0023_ip = 161; continue _fun0023 }
case 162:
            var2 = _closure1_slot7;
            var1 = {};
            var3 = var3.loadingSpinnerContainer;
            var1['style'] = var3;
            var12 = _closure1_slot29;
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 35;
            var3 = var13[var3];
            var3 = var10.bind(var5)(var3);
            var10 = var3.ActivityIndicator;
            var3 = {'animating': true, 'size': 'large'};
            var3 = var12.bind(var5)(var10, var3);
            var1['children'] = var3;
            var1 = var4.bind(var5)(var2, var1);
            _fun0023_ip = 163; continue _fun0023;
case 161:
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 61;
            var2 = var10[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['paymentGateway'] = var11;
            var10 = _closure1_slot24;
            var10 = var10.APPLE_ADVANCED_COMMERCE;
            var10 = var11 === var10;
            var2['orderRequired'] = var10;
            var10 = new Array(0);
            var2['skuIds'] = var10;
            var2['defaultPlans'] = var9;
            var9 = false;
            var2['isGift'] = var9;
            var2['activeSubscription'] = var8;
            var7 = function onOrderRetryCancellation() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = var3.canGoBack;
                    var1 = var1.bind(var3)();
                    var2 = _closure2_slot0;
                    if(var1) { _fun0025_ip = 164; continue _fun0025 }
case 165:
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
                    _fun0025_ip = 166; continue _fun0025;
case 164:
                    var1 = var2.goBack;
                    var1 = var1.bind(var2)();
case 166:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['onOrderRetryCancellation'] = var7;
            var8 = _closure1_slot29;
            var7 = _closure1_slot35;
            var6 = {};
            var16 = arg1;
            var17 = var6;
            var9 = copyDataProperties(var17, var16);
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 163:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();