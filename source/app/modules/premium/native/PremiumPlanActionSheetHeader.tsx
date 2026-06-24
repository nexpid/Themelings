// app/modules/premium/native/PremiumPlanActionSheetHeader.tsx
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
    var10 = 0;
    var7 = var6[var10];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PremiumTypes;
    var _closure1_slot4 = var7;
    var4 = var4.SubscriptionIntervalTypes;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getPremiumGradientColor;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'height': 112, 'justifyContent': 'center', 'alignItems': 'center'};
    var4['header'] = var9;
    var9 = {'position': 'absolute', 'top': 16, 'left': 16};
    var4['logoContainer'] = var9;
    var9 = {'position': 'absolute', 'height': 90};
    var4['imgWumpus'] = var9;
    var9 = {};
    var12 = {};
    var11 = -1;
    var12['scaleX'] = var11;
    var11 = new Array(1);
    var11[0] = var12;
    var9['transform'] = var11;
    var4['imgWumpusRight'] = var9;
    var9 = {};
    var9['bottom'] = var10;
    var4['imgWumpusBottom'] = var9;
    var9 = {};
    var10 = 10;
    var9['marginTop'] = var10;
    var4['discountPill'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/PremiumPlanActionSheetHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumPlanActionSheetHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var14 = var2.premiumType;
            var _closure2_slot0 = var14;
            var23 = var2.trialOffer;
            var20 = var2.discountOffer;
            var9 = function getClouds() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot4;
                    var2 = var2.TIER_0;
                    if(!(var2 !== var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = _closure1_slot4;
                    var2 = var2.TIER_1;
                    if(!(var2 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = _closure1_slot4;
                    var2 = var2.TIER_2;
                    if(!(var2 !== var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = undefined;
                    return var2;
case 6:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    return var2;
case 4:
                    var2 = null;
                    return var2;
case 2:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var1 = _closure1_slot9;
            var4 = undefined;
            var12 = var1.bind(var4)();
            var15 = null;
            var18 = var15 != var23;
            if(!var18) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var23.subscription_trial;
            var3 = var15 == var1;
            var2 = undefined;
            if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var1.sku_id;
case 10:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 8;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getSkuIdForPremiumType;
            var1 = var1.bind(var3)(var14);
            var18 = var2 === var1;
case 8:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 8;
            var1 = var1[var7];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getPlanIdForPremiumType;
            var1 = _closure1_slot5;
            var1 = var1.MONTH;
            var5 = var2.bind(var3)(var14, var1);
            var16 = var15 != var20;
            if(!var16) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = var20.discount;
            var3 = var15 == var2;
            var1 = undefined;
            if(var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var3 = var2.planIds;
            var2 = var3.includes;
            var1 = var2.bind(var3)(var5);
case 14:
            var16 = var1;
case 12:
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 9;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = var12.header;
            var1['style'] = var6;
            var6 = _closure1_slot6;
            var6 = var6.bind(var4)(var14);
            var1['colors'] = var6;
            var6 = _closure1_slot0;
            var8 = 10;
            var10 = var5[var8];
            var10 = var6.bind(var4)(var10);
            var10 = var10.HorizontalGradient;
            var10 = var10.START;
            var1['start'] = var10;
            var8 = var5[var8];
            var8 = var6.bind(var4)(var8);
            var8 = var8.HorizontalGradient;
            var8 = var8.END;
            var1['end'] = var8;
            var19 = true;
            var1['accessible'] = var19;
            var8 = 'header';
            var1['accessibilityRole'] = var8;
            var5 = var5[var7];
            var6 = var6.bind(var4)(var5);
            var5 = var6.getPremiumTypeDisplayName;
            var5 = var5.bind(var6)(var14);
            var1['accessibilityLabel'] = var5;
            var6 = var9.bind(var4)();
            if(!var6) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var8 = _closure1_slot7;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 11;
            var5 = var10[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var9 = var9.bind(var4)();
            var5['source'] = var9;
            var6 = var8.bind(var4)(var7, var5);
case 16:
            var5 = new Array(3);
            var5[0] = var6;
            var8 = _closure1_slot8;
            var7 = _closure1_slot3;
            var6 = {};
            var9 = var12.logoContainer;
            var6['style'] = var9;
            var21 = _closure1_slot7;
            var13 = _closure1_slot1;
            var9 = _closure1_slot2;
            var10 = 11;
            var9 = var9[var10];
            var17 = var13.bind(var4)(var9);
            var13 = {};
            var9 = _closure1_slot4;
            var9 = var9.TIER_0;
            if(!(var9 !== var14)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var9 = _closure1_slot4;
            var9 = var9.TIER_1;
            if(!(var9 !== var14)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var9 = _closure1_slot4;
            var22 = var9.TIER_2;
            var9 = undefined;
            if(!(var22 === var14)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var24 = _closure1_slot1;
            var25 = _closure1_slot2;
            var22 = 14;
            var22 = var25[var22];
            var9 = var24.bind(var4)(var22);
            _fun0001_ip = 22; continue _fun0001;
case 20:
            var24 = _closure1_slot1;
            var25 = _closure1_slot2;
            var22 = 13;
            var22 = var25[var22];
            var9 = var24.bind(var4)(var22);
            _fun0001_ip = 22; continue _fun0001;
case 18:
            var24 = _closure1_slot1;
            var25 = _closure1_slot2;
            var22 = 12;
            var22 = var25[var22];
            var9 = var24.bind(var4)(var22);
case 22:
            var13['source'] = var9;
            var9 = 'contain';
            var13['resizeMode'] = var9;
            var17 = var21.bind(var4)(var17, var13);
            var13 = new Array(3);
            var13[0] = var17;
            var17 = null;
            if(!var18) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var22 = _closure1_slot7;
            var21 = _closure1_slot0;
            var24 = _closure1_slot2;
            var18 = 15;
            var18 = var24[var18];
            var18 = var21.bind(var4)(var18);
            var21 = var18.PremiumPill;
            var18 = {};
            var24 = var12.discountPill;
            var18['style'] = var24;
            var18['trialOffer'] = var23;
            var18['premiumType'] = var14;
            var18['useWhiteBackground'] = var19;
            var18['hideTrialCountdown'] = var19;
            var17 = var22.bind(var4)(var21, var18);
case 24:
            var13[1] = var17;
            var15 = null;
            if(!var16) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var18 = _closure1_slot7;
            var17 = _closure1_slot0;
            var21 = _closure1_slot2;
            var16 = 15;
            var16 = var21[var16];
            var16 = var17.bind(var4)(var16);
            var17 = var16.PremiumPill;
            var16 = {};
            var21 = var12.discountPill;
            var16['style'] = var21;
            var16['discountOffer'] = var20;
            var16['premiumType'] = var14;
            var16['shouldShowDiscountUpsell'] = var19;
            var16['useWhiteBackground'] = var19;
            var15 = var18.bind(var4)(var17, var16);
case 26:
            var13[2] = var15;
            var6['children'] = var13;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot7;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var10];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var10 = _closure1_slot4;
            var10 = var10.TIER_0;
            if(!(var10 !== var14)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var10 = _closure1_slot4;
            var10 = var10.TIER_1;
            if(!(var10 !== var14)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var10 = _closure1_slot4;
            var13 = var10.TIER_2;
            var10 = undefined;
            if(!(var13 === var14)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var13 = 18;
            var13 = var16[var13];
            var10 = var15.bind(var4)(var13);
            _fun0001_ip = 32; continue _fun0001;
case 30:
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var13 = 17;
            var13 = var16[var13];
            var10 = var15.bind(var4)(var13);
            _fun0001_ip = 32; continue _fun0001;
case 28:
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var13 = 16;
            var13 = var16[var13];
            var10 = var15.bind(var4)(var13);
case 32:
            var6['source'] = var10;
            var13 = var12.imgWumpus;
            var10 = new Array(2);
            var10[0] = var13;
            var13 = _closure1_slot4;
            var13 = var13.TIER_0;
            if(!(var13 !== var14)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var13 = _closure1_slot4;
            var13 = var13.TIER_1;
            if(!(var13 !== var14)) { _fun0001_ip = 34; continue _fun0001 }
case 36:
            var11 = _closure1_slot4;
            var13 = var11.TIER_2;
            var11 = undefined;
            if(!(var13 === var14)) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var11 = var12.imgWumpusRight;
            _fun0001_ip = 37; continue _fun0001;
case 34:
            var11 = var12.imgWumpusBottom;
case 37:
            var10[1] = var11;
            var6['style'] = var10;
            var6['resizeMode'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();