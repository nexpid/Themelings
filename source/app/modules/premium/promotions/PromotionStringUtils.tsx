// app/modules/premium/promotions/PromotionStringUtils.tsx
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
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PremiumSubscriptionSKUs;
    var _closure1_slot4 = var7;
    var4 = var4.SubscriptionPlans;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/promotions/PromotionStringUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useFormatStringWithCommonPremiumParams(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = '...';
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var6 = undefined;
            var8 = var5.bind(var6)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure1_slot3;
                var2 = var3.isLoadedForSKU;
                var1 = _closure1_slot4;
                var1 = var1.TIER_2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var7.bind(var8)(var5, var2);
            var7 = var4.indexOf;
            var5 = '{price}';
            var7 = var7.bind(var4)(var5);
            var5 = -1;
            if(!(var5 !== var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 4: // try_start_0
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 3;
            var2 = var7[var2];
            var8 = var5.bind(var6)(var2);
            var5 = var8.getDefaultPrice;
            var2 = _closure1_slot5;
            var2 = var2.PREMIUM_MONTH_TIER_2;
            var2 = var5.bind(var8)(var2);
            var5 = _closure1_slot0;
            var3 = 4;
            var3 = var7[var3];
            var6 = var5.bind(var6)(var3);
            var5 = var6.formatPrice;
            var3 = var2.amount;
            var2 = var2.currency;
            var1 = var5.bind(var6)(var3, var2);
case 5: // try_end0
            _fun0001_ip = 2; continue _fun0001;
case 6: // catch_target0
            CatchBlockStart(arg_register=1);
case 2:
            var3 = var4.replace;
            var2 = var1;
            var1 = /\{price\}/g;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useFormatStringWithCommonPremiumParams'] = var4;
    var2 = function getHelpArticleLinkProps(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var5 = arg2;
            var1 = null;
            var4 = var1 == var2;
            var7 = undefined;
            var3 = undefined;
            if(var4) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var3 = var2.id;
case 7:
            var6 = var5;
            if(!(var1 != var3)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var4 = var2.id;
            var3 = '';
            var6 = var5;
            if(!(var3 !== var4)) { _fun0002_ip = 9; continue _fun0002 }
case 11:
            var6 = var2.id;
case 9:
            var4 = '';
            if(!(var4 !== var6)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var5 = var1 == var2;
            var3 = undefined;
            if(var5) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var3 = var2.linkText;
case 14:
            if(!(var1 != var3)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var3 = var2.linkText;
            if(!(var4 === var3)) { _fun0002_ip = 18; continue _fun0002 }
case 16:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 5;
            var4 = var9[var3];
            var4 = var8.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var9[var3];
            var3 = var8.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.sBp+u0;
            var3 = var4.bind(var5)(var3);
            _fun0002_ip = 19; continue _fun0002;
case 18:
            var3 = var2.linkText;
case 19:
            var2 = {};
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 6;
            var4 = var8[var4];
            var5 = var5.bind(var7)(var4);
            var4 = var5.getArticleURL;
            var4 = var4.bind(var5)(var6);
            var2['url'] = var4;
            var2['linkText'] = var3;
            return var2;
case 12:
            return var1;
        }
    };
    var3['getHelpArticleLinkProps'] = var2;
    return var1;
})();