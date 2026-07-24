// app/modules/premium_marketing/native/components/plan_selector/useBuyNitroPlanSubLabelRenderer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PRICE_PLACEHOLDER;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium_marketing/native/components/plan_selector/useBuyNitroPlanSubLabelRenderer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useBuyNitroPlanSubLabelRenderer() {
        var4 = _closure1_slot2;
        var3 = var4.useCallback;
        var2 = function(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var7 = arg1;
                var6 = arg2;
                var4 = var7.priceStringByProductId;
                var8 = var7.trialTier;
                var5 = var7.discounted;
                var2 = null;
                var3 = var2 != var8;
                if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = var6.premiumTier;
                var3 = var1 === var8;
case 2:
                var8 = var6.productId;
                var1 = var5.id;
                var1 = var8 === var1;
                if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = var5.priceString;
                var1 = var2 != var5;
case 4:
                if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 8:
                var3 = var4.get;
                var1 = var6.productId;
                var1 = var3.bind(var4)(var1);
                if(!(var2 == var1)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                var1 = _closure1_slot3;
case 9:
                _fun0001_ip = 11; continue _fun0001;
case 6:
                var5 = _closure1_slot4;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 3;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2['planSelection'] = var7;
                var2['item'] = var6;
                var1 = var5.bind(var4)(var3, var2);
case 11:
                return var1;
            }
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useBuyNitroPlanSubLabelRenderer'] = var2;
    return var1;
})();