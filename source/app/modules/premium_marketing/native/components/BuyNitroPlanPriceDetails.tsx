// app/modules/premium_marketing/native/components/BuyNitroPlanPriceDetails.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.SubscriptionIntervalTypes;
    var _closure1_slot4 = var7;
    var4 = var4.SubscriptionPlanInfo;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CurrencyCodes;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 7;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_4;
    var9['gap'] = var10;
    var4['container'] = var9;
    var9 = {};
    var10 = 'center';
    var9['textAlign'] = var10;
    var4['centeredText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium_marketing/native/components/BuyNitroPlanPriceDetails.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BuyNitroPlanPriceDetails(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var5 = var2.planSelection;
            var11 = var2.item;
            var _closure2_slot0 = var11;
            var3 = var2.centered;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = false;
case 2:
            var6 = var5.priceStringByProductId;
            var2 = var5.trialTier;
            var21 = var5.discounted;
            var5 = _closure1_slot9;
            var5 = var5.bind(var4)();
            var15 = undefined;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var15 = var5.centeredText;
case 4:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 8;
            var3 = var8[var3];
            var8 = var7.bind(var4)(var3);
            var7 = var8.useStateFromStores;
            var9 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var9;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot3;
                    var3 = var4.getProduct;
                    var1 = _closure2_slot0;
                    var1 = var1.productId;
                    var4 = var3.bind(var4)(var1);
                    var3 = null;
                    var5 = var3 == var4;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var5 = var4.currencyCode;
                    var4 = var5.toLowerCase;
                    var1 = var4.bind(var5)();
case 6:
                    if(!(var3 != var1)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = _closure1_slot6;
                    var3 = var1 in var3;
                    if(var3) { _fun0002_ip = 10; continue _fun0002 }
case 8:
                    var2 = _closure1_slot6;
                    var1 = var2.USD;
case 10:
                    return var1;
                }
            };
            var8 = var7.bind(var8)(var3, var1);
            var3 = var6.get;
            var1 = var11.productId;
            var14 = var3.bind(var6)(var1);
            var6 = null;
            if(!(var6 != var2)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = var11.premiumTier;
            if(!(var1 !== var2)) { _fun0001_ip = 13; continue _fun0001 }
case 11:
            var2 = var11.productId;
            var1 = var21.id;
            if(!(var2 === var1)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = var21.priceString;
            if(!(var6 != var1)) { _fun0001_ip = 14; continue _fun0001 }
case 16:
            var2 = _closure1_slot5;
            var1 = var11.basePlanId;
            var2 = var2[var1];
            var3 = var6 == var2;
            var1 = undefined;
            if(var3) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var1 = var2.intervalCount;
case 17:
            var3 = var6 != var1;
            var2 = 1;
            if(!var3) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var2 = var1;
case 19:
            var7 = _closure1_slot0;
            var1 = _closure1_slot1;
            var3 = 9;
            var1 = var1[var3];
            var12 = var7.bind(var4)(var1);
            var9 = var12.formatRate;
            var7 = var21.priceString;
            var1 = var11.interval;
            var20 = var9.bind(var12)(var7, var1, var2);
            var1 = var6 != var14;
            var7 = var2;
            var22 = null;
            if(!var1) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var3];
            var3 = var2.bind(var4)(var1);
            var2 = var3.formatRate;
            var1 = var11.interval;
            var22 = var2.bind(var3)(var14, var1, var7);
case 21:
            var3 = _closure1_slot8;
            var2 = _closure1_slot2;
            var1 = {};
            var7 = var5.container;
            var1['style'] = var7;
            var13 = _closure1_slot7;
            var17 = _closure1_slot0;
            var16 = _closure1_slot1;
            var12 = 10;
            var7 = var16[var12];
            var7 = var17.bind(var4)(var7);
            var9 = var7.Text;
            var7 = {'variant': 'text-xs/semibold', 'color': 'text-default'};
            var7['style'] = var15;
            var23 = 11;
            var18 = var16[var23];
            var18 = var17.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.formatToPlainString;
            var16 = var16[var23];
            var16 = var17.bind(var4)(var16);
            var16 = var16.t;
            var17 = var16["02Gmgm"];
            var16 = {};
            var16['discountedPrice'] = var20;
            var20 = var21.numMonths;
            var16['numMonths'] = var20;
            var16 = var18.bind(var19)(var17, var16);
            var7['children'] = var16;
            var9 = var13.bind(var4)(var9, var7);
            var7 = new Array(2);
            var7[0] = var9;
            var9 = var6 != var22;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var16 = _closure1_slot7;
            var18 = _closure1_slot0;
            var17 = _closure1_slot1;
            var12 = var17[var12];
            var12 = var18.bind(var4)(var12);
            var13 = var12.Text;
            var12 = {'variant': 'text-xs/medium', 'color': 'text-subtle'};
            var12['style'] = var15;
            var19 = var17[var23];
            var19 = var18.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.formatToPlainString;
            var17 = var17[var23];
            var17 = var18.bind(var4)(var17);
            var17 = var17.t;
            var18 = var17.vZk+c/;
            var17 = {};
            var17['regularPrice'] = var22;
            var21 = var21.numMonths;
            var17['numMonths'] = var21;
            var17 = var19.bind(var20)(var18, var17);
            var12['children'] = var17;
            var9 = var16.bind(var4)(var13, var12);
case 23:
            var7[1] = var9;
            var1['children'] = var7;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 14:
            return var6;
case 13:
            var13 = _closure1_slot0;
            var12 = _closure1_slot1;
            var1 = 9;
            var1 = var12[var1];
            var7 = var13.bind(var4)(var1);
            var3 = var7.formatPrice;
            var2 = 0;
            var1 = {'minimumFractionDigits': 0, 'maximumFractionDigits': 0};
            var19 = var3.bind(var7)(var2, var8, var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot2;
            var1 = {};
            var5 = var5.container;
            var1['style'] = var5;
            var9 = _closure1_slot7;
            var7 = 10;
            var5 = var12[var7];
            var5 = var13.bind(var4)(var5);
            var8 = var5.Text;
            var5 = {'variant': 'text-xs/semibold', 'color': 'text-default'};
            var5['style'] = var15;
            var16 = 11;
            var17 = var12[var16];
            var17 = var13.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.formatToPlainString;
            var12 = var12[var16];
            var12 = var13.bind(var4)(var12);
            var12 = var12.t;
            var13 = var12.hXcaLT;
            var12 = {};
            var12['price'] = var19;
            var12 = var17.bind(var18)(var13, var12);
            var5['children'] = var12;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var6 = var6 != var14;
            if(!var6) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var9 = _closure1_slot7;
            var13 = _closure1_slot0;
            var12 = _closure1_slot1;
            var7 = var12[var7];
            var7 = var13.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-xs/medium', 'color': 'text-subtle'};
            var7['style'] = var15;
            var12 = var12[var16];
            var12 = var13.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var15 = var11.interval;
            var11 = _closure1_slot4;
            var11 = var11.YEAR;
            if(!(var15 !== var11)) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var15 = _closure1_slot0;
            var11 = _closure1_slot1;
            var11 = var11[var16];
            var11 = var15.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.v9QeON;
            _fun0001_ip = 29; continue _fun0001;
case 27:
            var15 = _closure1_slot0;
            var10 = _closure1_slot1;
            var10 = var10[var16];
            var10 = var15.bind(var4)(var10);
            var10 = var10.t;
            var11 = var10.ECT4A5;
case 29:
            var10 = {};
            var10['price'] = var14;
            var10 = var12.bind(var13)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 25:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();