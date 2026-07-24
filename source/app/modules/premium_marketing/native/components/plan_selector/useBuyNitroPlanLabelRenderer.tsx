// app/modules/premium_marketing/native/components/plan_selector/useBuyNitroPlanLabelRenderer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var12 = 2;
    var4 = var6[var12];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.DISCOUNTS;
    var _closure1_slot6 = var7;
    var4 = var4.SubscriptionPlans;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var10 = 6;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_8;
    var9['gap'] = var13;
    var4['labelRow'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var9['borderRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.GREEN_360;
    var9['backgroundColor'] = var13;
    var9['paddingVertical'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_8;
    var9['paddingHorizontal'] = var10;
    var4['discountBadge'] = var9;
    var9 = {};
    var10 = 'uppercase';
    var9['textTransform'] = var10;
    var4['discountBadgeText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium_marketing/native/components/plan_selector/useBuyNitroPlanLabelRenderer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useBuyNitroPlanLabelRenderer() {
        var3 = _closure1_slot10;
        var9 = undefined;
        var7 = var3.bind(var9)();
        var _closure2_slot0 = var7;
        var5 = _closure1_slot0;
        var10 = _closure1_slot2;
        var4 = 7;
        var3 = var10[var4];
        var12 = var5.bind(var9)(var3);
        var11 = var12.useToken;
        var8 = _closure1_slot1;
        var3 = 6;
        var6 = var10[var3];
        var6 = var8.bind(var9)(var6);
        var6 = var6.modules;
        var6 = var6.mobile;
        var6 = var6.TABLE_ROW_LABEL_TEXT_STYLE;
        var6 = var11.bind(var12)(var6);
        var _closure2_slot1 = var6;
        var4 = var10[var4];
        var5 = var5.bind(var9)(var4);
        var4 = var5.useToken;
        var3 = var10[var3];
        var3 = var8.bind(var9)(var3);
        var3 = var3.modules;
        var3 = var3.mobile;
        var3 = var3.TABLE_ROW_LABEL_COLOR;
        var5 = var4.bind(var5)(var3);
        var _closure2_slot2 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = arg1;
                var9 = arg2;
                var3 = var1.bogoEligible;
                var7 = var1.hasDiscountOffer;
                var8 = var1.trialTier;
                var5 = var1.discounted;
                var2 = _closure1_slot6;
                var1 = var9.basePlanId;
                var14 = var2[var1];
                var2 = var9.productId;
                var1 = var5.id;
                var2 = var2 === var1;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = var5.priceString;
                var1 = null;
                var2 = var1 != var4;
case 2:
                var6 = null;
                var4 = var6 != var8;
                if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var1 = var9.premiumTier;
                var4 = var1 === var8;
case 4:
                var1 = var6 == var14;
                if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var1 = var7;
case 6:
                if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var1 = var4;
case 8:
                if(var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var4 = var3;
                if(!var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                var8 = var9.basePlanId;
                var7 = _closure1_slot7;
                var7 = var7.PREMIUM_YEAR_TIER_2;
                var4 = var8 === var7;
case 12:
                var1 = var4;
case 10:
                var1 = !var1;
                if(!var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                var4 = var9.basePlanId;
                var3 = _closure1_slot7;
                var3 = var3.PREMIUM_MONTH_TIER_2;
                if(!(var4 !== var3)) { _fun0001_ip = 16; continue _fun0001 }
case 14:
                if(!var2) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                var2 = var5.percentOff;
                if(!(var6 == var2)) { _fun0001_ip = 19; continue _fun0001 }
case 17:
                var12 = null;
                if(!var1) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 8;
                var2 = var13[var1];
                var8 = undefined;
                var2 = var11.bind(var8)(var2);
                var4 = var2.intl;
                var3 = var4.format;
                var1 = var13[var1];
                var1 = var11.bind(var8)(var1);
                var1 = var1.t;
                var2 = var1.IAybsG;
                var1 = {};
                var7 = 9;
                var7 = var13[var7];
                var13 = var11.bind(var8)(var7);
                var11 = var13.formatPercent;
                var7 = _closure1_slot5;
                var8 = var7.locale;
                var7 = 100;
                var7 = var14 / var7;
                var7 = var11.bind(var13)(var8, var7);
                var1['discount'] = var7;
                var12 = var3.bind(var4)(var2, var1);
                _fun0001_ip = 20; continue _fun0001;
case 19:
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 8;
                var2 = var13[var1];
                var8 = undefined;
                var2 = var11.bind(var8)(var2);
                var4 = var2.intl;
                var3 = var4.format;
                var1 = var13[var1];
                var1 = var11.bind(var8)(var1);
                var1 = var1.t;
                var2 = var1.IAybsG;
                var1 = {};
                var7 = 9;
                var7 = var13[var7];
                var11 = var11.bind(var8)(var7);
                var8 = var11.formatPercent;
                var7 = _closure1_slot5;
                var7 = var7.locale;
                var13 = var5.percentOff;
                var5 = 100;
                var5 = var13 / var5;
                var5 = var8.bind(var11)(var7, var5);
                var1['discount'] = var5;
                var12 = var3.bind(var4)(var2, var1);
                _fun0001_ip = 20; continue _fun0001;
case 16:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 8;
                var2 = var7[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.iQTfWx;
                var12 = var2.bind(var3)(var1);
case 20:
                var4 = _closure1_slot9;
                var3 = _closure1_slot4;
                var2 = {};
                var1 = _closure2_slot0;
                var1 = var1.labelRow;
                var2['style'] = var1;
                var8 = _closure1_slot8;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var14 = 10;
                var5 = var16[var14];
                var1 = undefined;
                var5 = var15.bind(var1)(var5);
                var7 = var5.Text;
                var5 = {};
                var13 = _closure2_slot1;
                var5['variant'] = var13;
                var13 = _closure2_slot2;
                var5['color'] = var13;
                var13 = 11;
                var13 = var16[var13];
                var16 = var15.bind(var1)(var13);
                var15 = var16.getIntervalString;
                var13 = var9.interval;
                var9 = false;
                var9 = var15.bind(var16)(var13, var9);
                var5['children'] = var9;
                var7 = var8.bind(var1)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var6 = var6 != var12;
                if(!var6) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                var9 = _closure1_slot8;
                var8 = _closure1_slot4;
                var7 = {};
                var13 = _closure2_slot0;
                var11 = var13.discountBadge;
                var7['style'] = var11;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var14];
                var10 = var11.bind(var1)(var10);
                var11 = var10.Text;
                var10 = {'variant': 'text-xs/bold', 'color': 'text-overlay-light'};
                var13 = var13.discountBadgeText;
                var10['style'] = var13;
                var10['children'] = var12;
                var10 = var9.bind(var1)(var11, var10);
                var7['children'] = var10;
                var6 = var9.bind(var1)(var8, var7);
case 22:
                var5[1] = var6;
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useBuyNitroPlanLabelRenderer'] = var2;
    return var1;
})();