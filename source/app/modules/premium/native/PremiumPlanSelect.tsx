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
            var8 = 16;
            var2 = var2[var8];
            var7 = undefined;
            var2 = var3.bind(var7)(var2);
            var4 = var2.intl;
            var3 = var4.formatToPlainString;
            var5 = var6.premiumTier;
            var2 = _closure1_slot16;
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
            var2 = 17;
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
            var2 = 16;
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
    var _closure1_slot31 = var1;
    var1 = function PlanRow(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var13 = var1.plan;
            var _closure2_slot0 = var13;
            var2 = var1.purchase;
            var _closure2_slot1 = var2;
            var9 = var1.style;
            var11 = var1.subscription;
            var _closure2_slot2 = var11;
            var6 = var1.disabled;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var6 = false;
case 11:
            var15 = var1.hasBackground;
            if(!(var15 === var4)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var15 = false;
case 13:
            var _closure2_slot3 = var4;
            var1 = _closure1_slot28;
            var19 = var1.bind(var4)();
            var2 = _closure1_slot14;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.isPurchasing;
                return var1;
            };
            var8 = var2.bind(var4)(var1);
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 24;
            var1 = var10[var1];
            var7 = var2.bind(var4)(var1);
            var3 = var7.useStateFromStoresArray;
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
            var3 = var3.bind(var7)(var2, var1);
            var2 = _closure1_slot4;
            var1 = 2;
            var3 = var2.bind(var4)(var3, var1);
            var2 = 0;
            var18 = var3[var2];
            var1 = 1;
            var7 = var3[var1];
            var3 = _closure1_slot1;
            var1 = 25;
            var1 = var10[var1];
            var1 = var3.bind(var4)(var1);
            var20 = var1.bind(var4)();
            var3 = var13.premiumTier;
            var1 = _closure1_slot16;
            var1 = var1.TIER_2;
            var16 = null;
            var10 = null;
            if(!(var3 === var1)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var1 = var13.numPremiumGuild;
            var10 = null;
            if(!(var2 === var1)) { _fun0002_ip = 15; continue _fun0002 }
case 17:
            var14 = _closure1_slot25;
            var21 = _closure1_slot0;
            var24 = _closure1_slot2;
            var1 = 26;
            var1 = var24[var1];
            var1 = var21.bind(var4)(var1);
            var3 = var1.LegacyText;
            var1 = {};
            var22 = var19.rowText;
            var17 = new Array(2);
            var17[0] = var22;
            var22 = var19.rowPlanDescriptionSubtext;
            var17[1] = var22;
            var1['style'] = var17;
            var17 = 16;
            var22 = var24[var17];
            var22 = var21.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.format;
            var17 = var24[var17];
            var17 = var21.bind(var4)(var17);
            var17 = var17.t;
            var21 = var17.he52LA;
            var17 = {};
            var24 = _closure1_slot15;
            var17['num'] = var24;
            var17 = var22.bind(var23)(var21, var17);
            var1['children'] = var17;
            var10 = var14.bind(var4)(var3, var1);
case 15:
            var1 = var13.premiumTier;
            if(!(var16 != var1)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var1 = var13.numPremiumGuild;
            if(!(var2 === var1)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var2 = var13.premiumTier;
            var1 = _closure1_slot16;
            var1 = var1.TIER_0;
            if(!(var1 !== var2)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var1 = _closure1_slot16;
            var1 = var1.TIER_1;
            if(!(var1 !== var2)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var1 = _closure1_slot16;
            var1 = var1.TIER_2;
            if(!(var1 !== var2)) { _fun0002_ip = 26; continue _fun0002 }
case 20:
            var2 = var13.premiumTier;
            var1 = _closure1_slot16;
            var1 = var1.TIER_1;
            if(!(var2 !== var1)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 23;
            var1 = var3[var1];
            var14 = var2.bind(var4)(var1);
            _fun0002_ip = 29; continue _fun0002;
case 27:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 22;
            var1 = var3[var1];
            var14 = var2.bind(var4)(var1);
case 29:
            _fun0002_ip = 30; continue _fun0002;
case 26:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 21;
            var1 = var3[var1];
            var14 = var2.bind(var4)(var1);
            _fun0002_ip = 30; continue _fun0002;
case 24:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 20;
            var1 = var3[var1];
            var14 = var2.bind(var4)(var1);
            _fun0002_ip = 30; continue _fun0002;
case 22:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 19;
            var1 = var3[var1];
            var14 = var2.bind(var4)(var1);
            _fun0002_ip = 30; continue _fun0002;
case 18:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 18;
            var1 = var3[var1];
            var14 = var2.bind(var4)(var1);
case 30:
            var2 = var16 != var11;
            var1 = null;
            if(!var2) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var3 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 17;
            var2 = var17[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getPremiumTypeFromSubscription;
            var1 = var2.bind(var3)(var11);
case 31:
            _closure2_slot3 = var1;
            var3 = _closure1_slot25;
            var17 = _closure1_slot0;
            var21 = _closure1_slot2;
            var1 = 27;
            var1 = var21[var1];
            var1 = var17.bind(var4)(var1);
            var2 = var1.TouchableHighlight;
            var1 = {'activeOpacity': 0.6, 'underlayColor': null, 'accessibilityRole': 'button'};
            var11 = 28;
            var11 = var21[var11];
            var17 = var17.bind(var4)(var11);
            var11 = var17.isThemeDark;
            var20 = var11.bind(var17)(var20);
            var17 = 'none';
            var11 = var17;
            if(var20) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var11 = var17;
            if(!var15) { _fun0002_ip = 33; continue _fun0002 }
case 35:
            var17 = _closure1_slot1;
            var20 = _closure1_slot2;
            var15 = 15;
            var15 = var20[var15];
            var15 = var17.bind(var4)(var15);
            var15 = var15.unsafe_rawColors;
            var11 = var15.PRIMARY_230;
case 33:
            var1['underlayColor'] = var11;
            if(var6) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var6 = var8;
case 36:
            if(var6) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var6 = var7;
case 38:
            var1['disabled'] = var6;
            var5 = function onPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 40; continue _fun0003 }
case 41:
                    var3 = _closure2_slot3;
                    var2 = _closure1_slot16;
                    var2 = var2.TIER_2;
                    if(!(var3 !== var2)) { _fun0003_ip = 42; continue _fun0003 }
case 43:
                    var3 = _closure2_slot3;
                    var2 = _closure1_slot16;
                    var2 = var2.TIER_1;
                    if(!(var3 === var2)) { _fun0003_ip = 40; continue _fun0003 }
case 42:
                    var2 = _closure2_slot0;
                    var3 = var2.premiumTier;
                    var2 = _closure1_slot16;
                    var2 = var2.TIER_0;
                    if(!(var3 === var2)) { _fun0003_ip = 40; continue _fun0003 }
case 44:
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 29;
                    var2 = var7[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var6 = _closure2_slot2;
                    var2['subscription'] = var6;
                    var6 = _closure1_slot0;
                    var5 = 30;
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
                    _fun0003_ip = 45; continue _fun0003;
case 40:
                    var3 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var2 = var1.productId;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 45:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPress'] = var5;
            var7 = _closure1_slot26;
            var6 = _closure1_slot8;
            var5 = {};
            var11 = var19.row;
            var8 = new Array(2);
            var8[0] = var11;
            var8[1] = var9;
            var5['style'] = var8;
            var11 = _closure1_slot25;
            var9 = _closure1_slot7;
            var8 = {};
            var15 = _closure1_slot29;
            var15 = var15[var14];
            var15 = var19[var15];
            var8['style'] = var15;
            var8['source'] = var14;
            var9 = var11.bind(var4)(var9, var8);
            var8 = new Array(4);
            var8[0] = var9;
            var20 = _closure1_slot25;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 26;
            var11 = var14[var9];
            var11 = var15.bind(var4)(var11);
            var17 = var11.LegacyText;
            var11 = {};
            var22 = var19.rowText;
            var21 = new Array(2);
            var21[0] = var22;
            var22 = var19.rowPlanDescription;
            var21[1] = var22;
            var11['style'] = var21;
            var21 = _closure1_slot31;
            var21 = var21.bind(var4)(var13);
            var11['children'] = var21;
            var11 = var20.bind(var4)(var17, var11);
            var8[1] = var11;
            var8[2] = var10;
            var11 = _closure1_slot25;
            var9 = var14[var9];
            var9 = var15.bind(var4)(var9);
            var10 = var9.LegacyText;
            var9 = {};
            var20 = var19.rowText;
            var17 = new Array(2);
            var17[0] = var20;
            var19 = var19.rowPrice;
            var17[1] = var19;
            var9['style'] = var17;
            var19 = 16;
            var14 = var14[var19];
            var14 = var15.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.format;
            var17 = var13.interval;
            var13 = _closure1_slot17;
            var13 = var13.MONTH;
            if(!(var17 !== var13)) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var17 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var19];
            var13 = var17.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.rS8FA+;
            _fun0002_ip = 48; continue _fun0002;
case 46:
            var17 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var19];
            var12 = var17.bind(var4)(var12);
            var12 = var12.t;
            var13 = var12.AbOLNu;
case 48:
            var12 = {};
            var19 = var16 == var18;
            var17 = undefined;
            if(var19) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var17 = var18.priceString;
case 49:
            var18 = var16 != var17;
            var16 = '$...';
            if(!var18) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var16 = var17;
case 51:
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
    var _closure1_slot32 = var1;
    var1 = function PlanSection(arg1) {
        var2 = arg1;
        var6 = var2.plans;
        var3 = var2.purchase;
        var _closure2_slot0 = var3;
        var3 = var2.analyticsLoadId;
        var _closure2_slot1 = var3;
        var3 = var2.trackNewPaymentFlow;
        var _closure2_slot2 = var3;
        var3 = var2.trackPaymentFlowStep;
        var _closure2_slot3 = var3;
        var2 = var2.subscription;
        var _closure2_slot4 = var2;
        var4 = _closure1_slot25;
        var3 = _closure1_slot8;
        var2 = {};
        var5 = var6.map;
        var1 = function(arg1) {
            var1 = arg1;
            var5 = _closure1_slot25;
            var4 = _closure1_slot32;
            var3 = {};
            var3['plan'] = var1;
            var2 = _closure2_slot4;
            var3['subscription'] = var2;
            var2 = function purchase(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = arg1;
                    var _closure4_slot0 = var4;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 31;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.getToggledIntervalProduct;
                    var8 = var1.bind(var2)(var4);
                    var _closure4_slot1 = var8;
                    var2 = null;
                    if(!(var2 != var8)) { _fun0004_ip = 53; continue _fun0004 }
case 54:
                    var5 = _closure1_slot12;
                    var1 = var5.getProduct;
                    var1 = var1.bind(var5)(var8);
                    if(!(var2 != var1)) { _fun0004_ip = 53; continue _fun0004 }
case 55:
                    var2 = _closure2_slot3;
                    var1 = {};
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var8 = 32;
                    var10 = var5[var8];
                    var10 = var9.bind(var3)(var10);
                    var10 = var10.PaymentFlowStep;
                    var10 = var10.PLAN_SELECT;
                    var1['fromStep'] = var10;
                    var8 = var5[var8];
                    var8 = var9.bind(var3)(var8);
                    var8 = var8.PaymentFlowStep;
                    var8 = var8.YEARLY_UPSELL;
                    var1['toStep'] = var8;
                    var1['productId'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure1_slot1;
                    var1 = 33;
                    var1 = var5[var1];
                    var5 = var2.bind(var3)(var1);
                    var2 = var5.openLazy;
                    var1 = {'importer': null, 'hideActionSheet': true, 'isDismissable': true};
                    var7 = function importer() {
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 35;
                        var2 = var1[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = 34;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var3 = var3.bind(var4)(var2, var1);
                        var2 = var3.then;
                        var1 = function(arg1) {
                            var2 = arg1;
                            var2 = var2.default;
                            var _closure6_slot0 = var2;
                            var1 = function(arg1) {
                                var4 = _closure1_slot25;
                                var3 = _closure6_slot0;
                                var2 = {};
                                var9 = arg1;
                                var10 = var2;
                                var1 = copyDataProperties(var10, var9);
                                var7 = _closure4_slot1;
                                var1 = 'productId';
                                var2[0] = var7;
                                var8 = _closure1_slot3;
                                var1 = undefined;
                                var7 = function* () {
                                    var1 = function* anon_0_() {
                                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(var2) { _fun0005_ip = 56; continue _fun0005 }
case 57:
                                            var6 = _closure2_slot3;
                                            var4 = {};
                                            var7 = _closure1_slot0;
                                            var8 = _closure1_slot2;
                                            var5 = 32;
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
case 58:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(var4) { _fun0005_ip = 59; continue _fun0005 }
case 60:
                                            return var3;
case 59:
                                            return var2;
case 56:
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
                                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(var2) { _fun0006_ip = 61; continue _fun0006 }
case 62:
                                            var4 = _closure1_slot0;
                                            var3 = _closure1_slot2;
                                            var2 = 32;
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
case 63:
                                            return var2;
case 64:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(var4) { _fun0006_ip = 65; continue _fun0006 }
case 66:
                                            return var3;
case 65:
                                            return var2;
case 61:
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
                            };
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['importer'] = var7;
                    var1 = var2.bind(var5)(var1);
                    return var3;
case 53:
                    var5 = _closure2_slot3;
                    var2 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 32;
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
        var1 = var5.bind(var6)(var1);
        var2['children'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot33 = var1;
    var1 = function CurrentPlanRow(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
            var2 = _closure1_slot28;
            var8 = var2.bind(var4)();
            if(!var1) { _fun0007_ip = 67; continue _fun0007 }
case 7:
            var14 = null;
            if(!(var14 != var13)) { _fun0007_ip = 67; continue _fun0007 }
case 68:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 31;
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
            if(!(var14 == var6)) { _fun0007_ip = 69; continue _fun0007 }
case 40:
            var2 = _closure1_slot24;
            var5 = var2.PREMIUM_GUILD;
            _fun0007_ip = 45; continue _fun0007;
case 69:
            var2 = _closure1_slot23;
            var5 = var2.bind(var4)(var6);
case 45:
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getToggledIntervalProduct;
            var11 = var1.bind(var2)(var3);
            _closure2_slot6 = var11;
            var3 = _closure1_slot25;
            var2 = _closure1_slot1;
            var1 = 36;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = var8.currentPlanGradient;
            var1['style'] = var6;
            var1['colors'] = var5;
            var5 = _closure1_slot21;
            var5 = var5.START;
            var1['start'] = var5;
            var5 = _closure1_slot21;
            var5 = var5.END;
            var1['end'] = var5;
            var7 = _closure1_slot25;
            var6 = _closure1_slot32;
            var5 = {};
            var5['plan'] = var15;
            var5['subscription'] = var13;
            var11 = var14 == var11;
            if(!var11) { _fun0007_ip = 70; continue _fun0007 }
case 71:
            var13 = var13.status;
            var12 = _closure1_slot22;
            var12 = var12.CANCELED;
            var11 = var13 !== var12;
case 70:
            var5['disabled'] = var11;
            var5['hasBackground'] = var10;
            var9 = function purchase() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 31;
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
                    if(var1) { _fun0008_ip = 72; continue _fun0008 }
case 55:
                    var1 = _closure2_slot0;
                    var5 = var1.status;
case 72:
                    var1 = _closure1_slot22;
                    var1 = var1.CANCELED;
                    if(!(var5 !== var1)) { _fun0008_ip = 73; continue _fun0008 }
case 74:
                    var1 = _closure2_slot6;
                    var5 = var2 != var1;
                    var1 = undefined;
                    if(!var5) { _fun0008_ip = 75; continue _fun0008 }
case 58:
                    var10 = _closure1_slot12;
                    var9 = var10.getProduct;
                    var5 = _closure2_slot6;
                    var5 = var9.bind(var10)(var5);
                    var5 = var2 != var5;
                    var1 = undefined;
                    if(!var5) { _fun0008_ip = 75; continue _fun0008 }
case 8:
                    var9 = _closure2_slot1;
                    var5 = {};
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 32;
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
case 75:
                    _fun0008_ip = 76; continue _fun0008;
case 73:
                    if(!(var2 != var4)) { _fun0008_ip = 77; continue _fun0008 }
case 78:
                    var4 = _closure2_slot1;
                    var2 = {};
                    var10 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var9 = 32;
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
                    var2 = 33;
                    var2 = var5[var2];
                    var5 = var4.bind(var6)(var2);
                    var4 = var5.openLazy;
                    var2 = {'importer': null, 'hideActionSheet': true, 'isDismissable': true};
                    var8 = function importer() {
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 35;
                        var2 = var1[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = 34;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var3 = var3.bind(var4)(var2, var1);
                        var2 = var3.then;
                        var1 = function(arg1) {
                            var2 = arg1;
                            var2 = var2.default;
                            var _closure5_slot0 = var2;
                            var1 = function(arg1) {
                                var4 = _closure1_slot25;
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
                                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(var2) { _fun0009_ip = 61; continue _fun0009 }
case 62:
                                            var4 = _closure1_slot0;
                                            var3 = _closure1_slot2;
                                            var2 = 32;
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
case 63:
                                            return var2;
case 64:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(var4) { _fun0009_ip = 65; continue _fun0009 }
case 66:
                                            return var3;
case 65:
                                            return var2;
case 61:
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
                                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(var2) { _fun0010_ip = 56; continue _fun0010 }
case 57:
                                            var6 = _closure2_slot1;
                                            var4 = {};
                                            var7 = _closure1_slot0;
                                            var8 = _closure1_slot2;
                                            var5 = 32;
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
case 58:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(var4) { _fun0010_ip = 59; continue _fun0010 }
case 60:
                                            return var3;
case 59:
                                            return var2;
case 56:
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
                    _fun0008_ip = 79; continue _fun0008;
case 77:
                    var5 = _closure2_slot1;
                    var4 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 32;
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
case 79:
                    var1 = var2;
case 76:
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
case 67:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function PlanSectionHeader(arg1) {
        var1 = arg1;
        var5 = var1.string;
        var2 = _closure1_slot28;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var3 = _closure1_slot25;
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 26;
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
    var _closure1_slot35 = var1;
    var1 = function PlanSections(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
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
            var _closure2_slot6 = var4;
            var1 = _closure1_slot28;
            var5 = var1.bind(var4)();
            var1 = null;
            var2 = var1 != var15;
            if(!var2) { _fun0011_ip = 59; continue _fun0011 }
case 68:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 31;
            var2 = var8[var2];
            var8 = var3.bind(var4)(var2);
            var3 = var8.getProductIdFromSubscription;
            var2 = false;
            var1 = var3.bind(var8)(var15, var2);
case 59:
            _closure2_slot6 = var1;
            var3 = _closure1_slot26;
            var2 = _closure1_slot8;
            var1 = {};
            var5 = var5.container;
            var1['style'] = var5;
            var9 = _closure1_slot25;
            var8 = _closure1_slot34;
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
            var8 = _closure1_slot30;
            var7 = var8.map;
            var6 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = arg1;
                    var1 = var3.getLabel;
                    var3 = var3.predicate;
                    var _closure3_slot0 = var3;
                    var4 = _closure2_slot0;
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var2 = arg1;
                            var4 = var2.productId;
                            var1 = _closure2_slot6;
                            var1 = var4 !== var1;
                            if(!var1) { _fun0013_ip = 80; continue _fun0013 }
case 81:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var4 = 31;
                            var5 = var5[var4];
                            var4 = undefined;
                            var6 = var6.bind(var4)(var5);
                            var5 = var6.productsHaveSamePerks;
                            var4 = var2.productId;
                            var3 = _closure2_slot6;
                            var3 = var5.bind(var6)(var4, var3);
                            var1 = !var3;
case 80:
                            if(!var1) { _fun0013_ip = 82; continue _fun0013 }
case 83:
                            var4 = _closure3_slot0;
                            var3 = undefined;
                            var1 = var4.bind(var3)(var2);
case 82:
                            if(!var1) { _fun0013_ip = 84; continue _fun0013 }
case 66:
                            var3 = var2.premiumTier;
                            var2 = _closure1_slot16;
                            var2 = var2.TIER_1;
                            var1 = var3 !== var2;
case 84:
                            return var1;
                        }
                    };
                    var11 = var3.bind(var4)(var2);
                    var3 = var11.length;
                    var2 = 0;
                    if(!(var2 !== var3)) { _fun0012_ip = 85; continue _fun0012 }
case 86:
                    var5 = undefined;
                    var4 = var1.bind(var5)();
                    var3 = _closure1_slot26;
                    var2 = _closure1_slot8;
                    var1 = {};
                    var9 = _closure1_slot25;
                    var8 = _closure1_slot35;
                    var6 = {};
                    var6['string'] = var4;
                    var8 = var9.bind(var5)(var8, var6);
                    var6 = new Array(2);
                    var6[0] = var8;
                    var9 = _closure1_slot25;
                    var8 = _closure1_slot33;
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
case 85:
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
    var _closure1_slot36 = var1;
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ActivityIndicator;
    var _closure1_slot6 = var8;
    var8 = var4.Image;
    var _closure1_slot7 = var8;
    var8 = var4.View;
    var _closure1_slot8 = var8;
    var4 = var4.ScrollView;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.setIsPurchasing;
    var _closure1_slot13 = var8;
    var4 = var4.usePremiumPlanSelectStore;
    var _closure1_slot14 = var4;
    var13 = 8;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var8 = var4.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
    var _closure1_slot15 = var8;
    var8 = var4.PremiumTypes;
    var _closure1_slot16 = var8;
    var4 = var4.SubscriptionIntervalTypes;
    var _closure1_slot17 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot18 = var8;
    var8 = var4.AnalyticsObjects;
    var _closure1_slot19 = var8;
    var8 = var4.AnalyticsObjectTypes;
    var _closure1_slot20 = var8;
    var16 = var4.Fonts;
    var8 = var4.HorizontalGradient;
    var _closure1_slot21 = var8;
    var8 = var4.SubscriptionStatusTypes;
    var _closure1_slot22 = var8;
    var14 = var4.USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.getPremiumGradientColor;
    var _closure1_slot23 = var8;
    var4 = var4.Gradients;
    var _closure1_slot24 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot25 = var8;
    var8 = var4.jsxs;
    var _closure1_slot26 = var8;
    var4 = var4.Fragment;
    var _closure1_slot27 = var4;
    var4 = 12;
    var4 = var6[var4];
    var11 = var5.bind(var1)(var4);
    var10 = var11.createStyles;
    var4 = {};
    var8 = {};
    var12 = 13;
    var12 = var6[var12];
    var17 = var9.bind(var1)(var12);
    var15 = var16.DISPLAY_EXTRABOLD;
    var12 = 24;
    var20 = var17.bind(var1)(var15, var1, var12);
    var21 = var8;
    var12 = copyDataProperties(var21, var20);
    var17 = 16;
    var12 = 'marginTop';
    var8[11] = var17;
    var12 = 14;
    var15 = var6[var12];
    var15 = var5.bind(var1)(var15);
    var18 = var15.DARK_WHITE_500_LIGHT_BLACK_500;
    var15 = 'color';
    var8[14] = var18;
    var4['header'] = var8;
    var8 = {'marginTop': 7, 'borderRadius': null, 'flexDirection': 'row', 'alignItems': 'center', 'paddingVertical': 12, 'paddingHorizontal': 12, 'flexWrap': 'wrap'};
    var15 = 15;
    var18 = var6[var15];
    var18 = var9.bind(var1)(var18);
    var18 = var18.radii;
    var18 = var18.sm;
    var8['borderRadius'] = var18;
    var18 = var6[var12];
    var18 = var5.bind(var1)(var18);
    var18 = var18.DARK_PRIMARY_630_LIGHT_PRIMARY_230;
    var8['backgroundColor'] = var18;
    var4['row'] = var8;
    var8 = {'height': 40, 'width': 40};
    var4['imgWumpusNitro'] = var8;
    var8 = {'height': 40, 'width': 40};
    var4['imgBoost'] = var8;
    var8 = {'width': 32, 'height': 32};
    var4['imgWumpusNitroBoost'] = var8;
    var8 = {'width': 40, 'height': 40};
    var4['imgWumpusNitroClassic'] = var8;
    var8 = {'width': 32, 'height': 32};
    var4['imgWumpusNitroClassicBoost'] = var8;
    var8 = {'width': 40, 'height': 40};
    var4['imgWumpusNitroTier0'] = var8;
    var8 = {};
    var8['fontSize'] = var17;
    var12 = var6[var12];
    var12 = var5.bind(var1)(var12);
    var12 = var12.DARK_WHITE_500_LIGHT_BLACK_500;
    var8['color'] = var12;
    var4['rowText'] = var8;
    var12 = {'marginLeft': 12, 'fontFamily': null, 'lineHeight': 20};
    var8 = var16.PRIMARY_SEMIBOLD;
    var12['fontFamily'] = var8;
    var8 = 20;
    var4['rowPlanDescription'] = var12;
    var12 = {'fontSize': 12, 'marginLeft': 5, 'fontFamily': null, 'fontWeight': '400'};
    var16 = var16.PRIMARY_MEDIUM;
    var12['fontFamily'] = var16;
    var4['rowPlanDescriptionSubtext'] = var12;
    var12 = {};
    var16 = 'auto';
    var12['marginLeft'] = var16;
    var4['rowPrice'] = var12;
    var12 = {'marginHorizontal': 14.5, 'paddingBottom': 10};
    var4['container'] = var12;
    var12 = {};
    var12['marginTop'] = var8;
    var15 = var6[var15];
    var15 = var9.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var12['borderRadius'] = var15;
    var4['currentPlanGradient'] = var12;
    var12 = {'marginTop': 0.5, 'marginRight': 0.5, 'marginLeft': 0.5, 'marginBottom': 0.5};
    var4['currentPlanRow'] = var12;
    var12 = {'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'height': '100%'};
    var4['loadingSpinnerContainer'] = var12;
    var12 = {'lineHeight': 20, 'marginTop': 40};
    var12['margin'] = var14;
    var4['offPlatformSubscriptionMessage'] = var12;
    var12 = {};
    var12['paddingHorizontal'] = var14;
    var12['marginTop'] = var13;
    var4['premiumHeaderLabel'] = var12;
    var4 = var10.bind(var11)(var4);
    var _closure1_slot28 = var4;
    var4 = {};
    var10 = 21;
    var10 = var6[var10];
    var11 = var9.bind(var1)(var10);
    var10 = 'imgWumpusNitro';
    var4[10] = var10;
    var10 = 23;
    var10 = var6[var10];
    var11 = var9.bind(var1)(var10);
    var10 = 'imgWumpusNitroBoost';
    var4[10] = var10;
    var8 = var6[var8];
    var10 = var9.bind(var1)(var8);
    var8 = 'imgWumpusNitroClassic';
    var4[9] = var8;
    var8 = 22;
    var8 = var6[var8];
    var10 = var9.bind(var1)(var8);
    var8 = 'imgWumpusNitroClassicBoost';
    var4[9] = var8;
    var8 = 19;
    var8 = var6[var8];
    var10 = var9.bind(var1)(var8);
    var8 = 'imgWumpusNitroTier0';
    var4[9] = var8;
    var8 = 18;
    var8 = var6[var8];
    var9 = var9.bind(var1)(var8);
    var8 = 'imgBoost';
    var4[8] = var8;
    var _closure1_slot29 = var4;
    var8 = {};
    var4 = function getLabel() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 16;
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
    var8['getLabel'] = var4;
    var4 = function predicate(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = arg1;
            var3 = var2.premiumTier;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0014_ip = 87; continue _fun0014 }
case 3:
            var3 = var2.numPremiumGuild;
            var2 = 0;
            var1 = var2 === var3;
case 87:
            return var1;
        }
    };
    var8['predicate'] = var4;
    var4 = new Array(3);
    var4[0] = var8;
    var8 = {};
    var9 = function getLabel() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 16;
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
    var8['getLabel'] = var9;
    var9 = function predicate(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var2 = arg1;
            var3 = var2.premiumTier;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0015_ip = 87; continue _fun0015 }
case 3:
            var3 = var2.numPremiumGuild;
            var2 = 0;
            var1 = var2 !== var3;
case 87:
            return var1;
        }
    };
    var8['predicate'] = var9;
    var4[1] = var8;
    var8 = {};
    var9 = function getLabel() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 16;
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
    var8['getLabel'] = var9;
    var9 = function predicate(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var2 = arg1;
            var3 = var2.premiumTier;
            var1 = null;
            var1 = var1 == var3;
            if(!var1) { _fun0016_ip = 87; continue _fun0016 }
case 3:
            var3 = var2.numPremiumGuild;
            var2 = 0;
            var1 = var2 !== var3;
case 87:
            return var1;
        }
    };
    var8['predicate'] = var9;
    var4[2] = var8;
    var _closure1_slot30 = var4;
    var4 = var7.forwardRef;
    var2 = function PremiumPlanSelect(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var9 = arg2;
            var19 = var1.predicate;
            var16 = var1.showCurrentPlan;
            var7 = undefined;
            if(!(var16 === var7)) { _fun0017_ip = 88; continue _fun0017 }
case 89:
            var16 = true;
case 88:
            var20 = var1.analyticsLocation;
            var13 = var1.planId;
            var1 = var1.applicationId;
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var7;
            var _closure2_slot4 = var7;
            var _closure2_slot5 = var7;
            var1 = _closure1_slot28;
            var18 = var1.bind(var7)();
            var15 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 37;
            var1 = var11[var1];
            var1 = var15.bind(var7)(var1);
            var1 = var1.bind(var7)();
            var21 = var1.analyticsLocations;
            var6 = _closure1_slot0;
            var1 = 24;
            var2 = var11[var1];
            var5 = var6.bind(var7)(var2);
            var4 = var5.useStateFromStoresArray;
            var2 = _closure1_slot11;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = _closure1_slot10;
            var3[1] = var2;
            var2 = function() {
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
            var4 = var4.bind(var5)(var3, var2);
            var3 = _closure1_slot4;
            var2 = 2;
            var2 = var3.bind(var7)(var4, var2);
            var5 = 0;
            var4 = var2[var5];
            _closure2_slot1 = var4;
            var12 = 1;
            var2 = var2[var12];
            _closure2_slot2 = var2;
            var22 = _closure1_slot5;
            var17 = var22.useEffect;
            var10 = new Array(1);
            var10[0] = var2;
            var3 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0018_ip = 90; continue _fun0018 }
case 57:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 38;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchPremiumSubscriptionPlans;
                    var1 = var1.bind(var2)();
case 90:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var17.bind(var22)(var3, var10);
            var17 = var22.useEffect;
            var10 = new Array(1);
            var10[0] = var4;
            var3 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0019_ip = 90; continue _fun0019 }
case 57:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 39;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchSubscriptions;
                    var1 = var1.bind(var2)();
case 90:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var17.bind(var22)(var3, var10);
            var10 = 40;
            var3 = var11[var10];
            var15 = var15.bind(var7)(var3);
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 32;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getNewAnalyticsLoadId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var15.bind(var7)(var3);
            var3 = 32;
            var3 = var11[var3];
            var11 = var6.bind(var7)(var3);
            var6 = var11.getBasePurchaseFlowAnalyticsFields;
            var3 = {};
            var3['analyticsLoadId'] = var15;
            var17 = {};
            var22 = _closure1_slot19;
            var22 = var22.BUTTON_CTA;
            var17['object'] = var22;
            var22 = _closure1_slot20;
            var22 = var22.BUY;
            var17['object_type'] = var22;
            var30 = var17;
            var29 = var20;
            var20 = copyDataProperties(var30, var29);
            var3['analyticsLocation'] = var17;
            var3['analyticsLocations'] = var21;
            var3 = var6.bind(var11)(var3);
            _closure2_slot3 = var3;
            var6 = null;
            if(!(var6 == var13)) { _fun0017_ip = 91; continue _fun0017 }
case 92:
            var3 = {};
            _fun0017_ip = 93; continue _fun0017;
case 91:
            var11 = {};
            var11['subscription_plan_id'] = var13;
            var3 = var11;
case 93:
            _closure2_slot4 = var3;
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var3 = 41;
            var3 = var13[var3];
            var11 = var11.bind(var7)(var3);
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 42;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.trackPaymentFlowStartedAnalyticsAndCTP;
                var2 = {};
                var7 = _closure2_slot3;
                var8 = var2;
                var6 = copyDataProperties(var8, var7);
                var7 = _closure2_slot4;
                var8 = var2;
                var6 = copyDataProperties(var8, var7);
                var6 = _closure2_slot0;
                var5 = 'application_id';
                var2[4] = var6;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var11.bind(var7)(var3);
            var11 = _closure1_slot0;
            var1 = var13[var1];
            var20 = var11.bind(var7)(var1);
            var17 = var20.useStateFromStores;
            var1 = _closure1_slot11;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var17 = var17.bind(var20)(var3, var1);
            var1 = 43;
            var1 = var13[var1];
            var3 = var11.bind(var7)(var1);
            var1 = var3.useHandlePremiumPurchase;
            var1 = var1.bind(var3)();
            _closure2_slot5 = var1;
            var1 = 44;
            var1 = var13[var1];
            var3 = var11.bind(var7)(var1);
            var1 = var3.useIsPaymentsBlocked;
            var3 = var1.bind(var3)();
            var1 = 45;
            var1 = var13[var1];
            var13 = var11.bind(var7)(var1);
            var11 = var13.useSubscriptionInvoicePreview;
            if(!(var6 == var17)) { _fun0017_ip = 94; continue _fun0017 }
case 95:
            var1 = {};
            _fun0017_ip = 96; continue _fun0017;
case 94:
            var20 = {};
            var22 = var17.id;
            var20['subscriptionId'] = var22;
            var22 = true;
            var20['renewal'] = var22;
            var20['analyticsLocations'] = var21;
            var22 = _closure1_slot1;
            var23 = _closure1_slot2;
            var21 = 46;
            var21 = var23[var21];
            var21 = var22.bind(var7)(var21);
            var21 = var21.PREMIUM_PLAN_SELECT;
            var20['analyticsLocation'] = var21;
            var1 = var20;
case 96:
            var11 = var11.bind(var13)(var1);
            var1 = _closure1_slot4;
            var1 = var1.bind(var7)(var11, var12);
            var24 = var1[var5];
            var5 = var6 == var19;
            var1 = null;
            if(var5) { _fun0017_ip = 97; continue _fun0017 }
case 98:
            if(!var4) { _fun0017_ip = 99; continue _fun0017 }
case 31:
            if(var2) { _fun0017_ip = 100; continue _fun0017 }
case 99:
            var5 = _closure1_slot25;
            var4 = _closure1_slot8;
            var2 = {};
            var11 = var18.loadingSpinnerContainer;
            var2['style'] = var11;
            var13 = _closure1_slot25;
            var12 = _closure1_slot6;
            var11 = {'animating': true, 'size': 'large'};
            var11 = var13.bind(var7)(var12, var11);
            var2['children'] = var11;
            var2 = var5.bind(var7)(var4, var2);
            _fun0017_ip = 101; continue _fun0017;
case 100:
            if(var3) { _fun0017_ip = 102; continue _fun0017 }
case 103:
            if(!(var6 != var17)) { _fun0017_ip = 104; continue _fun0017 }
case 105:
            var3 = var17.isOnPlatformMatchingExternalPaymentGateway;
            if(!var3) { _fun0017_ip = 106; continue _fun0017 }
case 107:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 31;
            var4 = var12[var3];
            var5 = var11.bind(var7)(var4);
            var4 = var5.isValidBundleProductId;
            var3 = var12[var3];
            var12 = var11.bind(var7)(var3);
            var11 = var12.getProductIdFromSubscription;
            var3 = false;
            var3 = var11.bind(var12)(var17, var3);
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0017_ip = 104; continue _fun0017 }
case 106:
            var5 = _closure1_slot26;
            var4 = _closure1_slot9;
            var3 = {};
            var11 = var6 != var24;
            if(!var11) { _fun0017_ip = 108; continue _fun0017 }
case 109:
            var13 = _closure1_slot26;
            var12 = _closure1_slot27;
            var6 = {};
            var23 = _closure1_slot25;
            var22 = _closure1_slot0;
            var25 = _closure1_slot2;
            var20 = 48;
            var20 = var25[var20];
            var20 = var22.bind(var7)(var20);
            var21 = var20.Text;
            var20 = {'style': null, 'variant': 'eyebrow', 'color': 'text-default'};
            var26 = var18.premiumHeaderLabel;
            var20['style'] = var26;
            var26 = 16;
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
            var23 = _closure1_slot25;
            var21 = 49;
            var21 = var25[var21];
            var21 = var22.bind(var7)(var21);
            var22 = var21.PremiumSubscriptionHeader;
            var21 = {};
            var21['subscription'] = var17;
            var21['renewalInvoicePreview'] = var24;
            var21 = var23.bind(var7)(var22, var21);
            var20[1] = var21;
            var6['children'] = var20;
            var11 = var13.bind(var7)(var12, var6);
case 108:
            var6 = new Array(2);
            var6[0] = var11;
            var13 = _closure1_slot25;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var11 = 48;
            var11 = var21[var11];
            var11 = var20.bind(var7)(var11);
            var12 = var11.Text;
            var11 = {};
            var18 = var18.offPlatformSubscriptionMessage;
            var11['style'] = var18;
            var18 = 'text-md/semibold';
            var11['variant'] = var18;
            var18 = 50;
            var18 = var21[var18];
            var21 = var20.bind(var7)(var18);
            var20 = var21.getExternalManagementMessage;
            var18 = {};
            var22 = true;
            var18['shouldAllowExternalManagement'] = var22;
            var18 = var20.bind(var21)(var17, var18);
            var11['children'] = var18;
            var11 = var13.bind(var7)(var12, var11);
            var6[1] = var11;
            var3['children'] = var6;
            var3 = var5.bind(var7)(var4, var3);
            _fun0017_ip = 110; continue _fun0017;
case 104:
            var6 = _closure1_slot25;
            var5 = _closure1_slot9;
            var4 = {};
            var4['ref'] = var9;
            var13 = _closure1_slot25;
            var12 = _closure1_slot36;
            var11 = {};
            var11['subscription'] = var17;
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var17 = 31;
            var17 = var20[var17];
            var18 = var18.bind(var7)(var17);
            var17 = var18.getPremiumBundlesWithPredicate;
            var17 = var17.bind(var18)(var19);
            var11['plans'] = var17;
            var11['showCurrentPlan'] = var16;
            var11['analyticsLoadId'] = var15;
            var15 = function trackPaymentFlowStep(arg1) {
                var1 = arg1;
                var10 = var1.productId;
                var12 = var1.fromStep;
                var11 = var1.toStep;
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 51;
                var2 = var9[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot18;
                var3 = var2.PAYMENT_FLOW_STEP;
                var2 = {};
                var8 = _closure2_slot0;
                var2['application_id'] = var8;
                var8 = _closure1_slot0;
                var7 = 32;
                var7 = var9[var7];
                var9 = var8.bind(var1)(var7);
                var8 = var9.getPaymentFlowStepAnalyticsFields;
                var7 = _closure2_slot3;
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
            var11['trackPaymentFlowStep'] = var15;
            var15 = function trackNewPaymentFlow(arg1) {
                var1 = arg1;
                var7 = var1.newFlowAnalyticsLoadId;
                var8 = var1.productId;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 42;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.trackPaymentFlowStartedAnalyticsAndCTP;
                var2 = {};
                var9 = _closure2_slot3;
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
            var11['trackNewPaymentFlow'] = var15;
            var14 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1, arg2) {
                    var1 = function* anon_0_(arg1, arg2) {
                        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0020_ip = 111; continue _fun0020 }
case 57:
                            var8 = arg1;
                            var7 = arg2;
                            var5 = _closure1_slot13;
                            var2 = undefined;
                            var4 = true;
                            var4 = var5.bind(var2)(var4);
case 112: // try_start_0
                            var5 = _closure2_slot5;
                            var4 = {};
                            var4['productId'] = var8;
                            var8 = _closure2_slot3;
                            var8 = var8.location;
                            var4['analyticsLocation'] = var8;
                            var4['analyticsLoadId'] = var7;
                            var6 = _closure2_slot0;
                            var4['applicationId'] = var6;
                            var4 = var5.bind(var2)(var4);
                            SaveGenerator(address=82);
case 55:
                            return var4;
case 113:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                            if(var5) { _fun0020_ip = 66; continue _fun0020 }
case 7: // try_end0
                            _fun0020_ip = 114; continue _fun0020;
case 66:
                            return var4;
case 65: // catch_target0
                            CatchBlockStart(arg_register=4);
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var4 = 52;
                            var4 = var7[var4];
                            var4 = var6.bind(var2)(var4);
                            var4 = var5 instanceof var4;
                            if(!var4) { _fun0020_ip = 114; continue _fun0020 }
case 60:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var4 = 39;
                            var4 = var11[var4];
                            var5 = var10.bind(var2)(var4);
                            var4 = var5.fetchSubscriptions;
                            var4 = var4.bind(var5)();
                            var5 = _closure1_slot1;
                            var4 = 33;
                            var4 = var11[var4];
                            var6 = var5.bind(var2)(var4);
                            var5 = var6.show;
                            var4 = {};
                            var7 = 16;
                            var8 = var11[var7];
                            var8 = var10.bind(var2)(var8);
                            var12 = var8.intl;
                            var9 = var12.string;
                            var8 = var11[var7];
                            var8 = var10.bind(var2)(var8);
                            var8 = var8.t;
                            var8 = var8.U+H+kd;
                            var8 = var9.bind(var12)(var8);
                            var4['title'] = var8;
                            var8 = var11[var7];
                            var8 = var10.bind(var2)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var7 = var11[var7];
                            var7 = var10.bind(var2)(var7);
                            var7 = var7.t;
                            var7 = var7.yyDkbE;
                            var7 = var8.bind(var9)(var7);
                            var4['body'] = var7;
                            var4 = var5.bind(var6)(var4);
case 114:
                            var4 = _closure1_slot13;
                            var3 = false;
                            var3 = var4.bind(var2)(var3);
                            return var2;
case 111:
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
            var14 = var14.bind(var7)();
            var11['purchase'] = var14;
            var11 = var13.bind(var7)(var12, var11);
            var4['children'] = var11;
            var3 = var6.bind(var7)(var5, var4);
case 110:
            _fun0017_ip = 115; continue _fun0017;
case 102:
            var6 = _closure1_slot25;
            var5 = _closure1_slot9;
            var4 = {};
            var4['ref'] = var9;
            var9 = {};
            var9['top'] = var10;
            var4['contentInset'] = var9;
            var10 = _closure1_slot25;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 47;
            var8 = var11[var8];
            var9 = var9.bind(var7)(var8);
            var8 = {};
            var8 = var10.bind(var7)(var9, var8);
            var4['children'] = var8;
            var3 = var6.bind(var7)(var5, var4);
case 115:
            var2 = var3;
case 101:
            var1 = var2;
case 97:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 53;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/PremiumPlanSelect.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();