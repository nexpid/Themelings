// app/modules/virtual_currency/checkout/OrbCheckoutUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.CurrencyCodes;
    var _closure1_slot2 = var7;
    var7 = var4.MarketingURLs;
    var _closure1_slot3 = var7;
    var4 = var4.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EXTERNAL_PRODUCT_SKU_IDS;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/checkout/OrbCheckoutUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = arg2;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot4;
            var2 = var2.PREMIUM_TIER_2;
            var4 = var3[var2];
            var2 = null;
            if(!(var2 == var4)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var2 = _closure1_slot4;
            var2 = var2.DEFAULT;
            var2 = var3[var2];
            _fun0001_ip = 5; continue _fun0001;
case 4:
            var1 = _closure1_slot4;
            var1 = var1.PREMIUM_TIER_2;
            var2 = var3[var1];
case 5:
            var1 = null;
            var5 = var1 == var2;
            var4 = undefined;
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var2.countryPrices;
            var5 = var1 == var2;
            var4 = undefined;
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var6 = var2.prices;
            var2 = var1 == var6;
            var4 = undefined;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 9:
            var5 = var6.slice;
            var3 = 0;
            var2 = 2;
            var4 = var5.bind(var6)(var3, var2);
case 6:
            if(!(var1 == var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = new Array(0);
case 10:
            var3 = var4.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.currency;
                var1 = _closure1_slot2;
                var1 = var1.DISCORD_ORB;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = var2;
case 12:
            return var1;
        }
    };
    var3['getOrbPriceFromPrices'] = var4;
    var2 = function getOrbCheckoutDisclaimerMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var9 = _closure1_slot0;
            var2 = _closure1_slot1;
            var8 = 2;
            var3 = var2[var8];
            var7 = undefined;
            var3 = var9.bind(var7)(var3);
            var10 = var3.intl;
            var6 = var10.format;
            var3 = var2[var8];
            var3 = var9.bind(var7)(var3);
            var3 = var3.t;
            var4 = var3["5qdUrO"];
            var3 = {};
            var11 = var2[var8];
            var11 = var9.bind(var7)(var11);
            var13 = var11.intl;
            var12 = var13.string;
            var11 = var2[var8];
            var11 = var9.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.zLch/S;
            var11 = var12.bind(var13)(var11);
            var3['buyButtonLabel'] = var11;
            var11 = _closure1_slot3;
            var12 = var11.PAID_TERMS;
            var3['paidServiceTermURL'] = var12;
            var11 = var11.PAID_TERMS_VIRTUAL_GOODS;
            var3['virtualGoodsURL'] = var11;
            var3 = var6.bind(var10)(var4, var3);
            var4 = var2[var8];
            var4 = var9.bind(var7)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var2 = var2[var8];
            var2 = var9.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.Sxed/G;
            var2 = var4.bind(var6)(var2);
            var4 = _closure1_slot5;
            var4 = var4.ORB_PROFILE_BADGE;
            if(!(var5 !== var4)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var4 = _closure1_slot5;
            var4 = var4.FRACTIONAL_PREMIUM;
            if(!(var5 === var4)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var9 = _closure1_slot0;
            var4 = _closure1_slot1;
            var5 = var4[var8];
            var5 = var9.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var4[var8];
            var4 = var9.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.FhJ74j;
            var2 = var5.bind(var6)(var4);
            _fun0002_ip = 16; continue _fun0002;
case 14:
            var6 = _closure1_slot0;
            var1 = _closure1_slot1;
            var4 = var1[var8];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var1 = var1[var8];
            var1 = var6.bind(var7)(var1);
            var1 = var1.t;
            var1 = var1.APcKRo;
            var2 = var4.bind(var5)(var1);
case 16:
            var1 = new Array(3);
            var1[0] = var3;
            var3 = ' ';
            var1[1] = var3;
            var1[2] = var2;
            return var1;
        }
    };
    var3['getOrbCheckoutDisclaimerMessage'] = var2;
    return var1;
})();