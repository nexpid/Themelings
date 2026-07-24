// app/modules/premium_marketing/native/hooks/useBuyNitroExperiment.tsx
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.usePremiumPlanPurchasedStore;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium_marketing/native/hooks/useBuyNitroExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useBuyNitroExperiment(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.userHasSubscription;
            var5 = var1.isNitroHomeSurface;
            var4 = var1.isConfirmedNonSubscriber;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 3;
            var3 = var6[var3];
            var6 = undefined;
            var7 = var7.bind(var6)(var3);
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getMobileNitroMarketingRedesignExperiment;
                var1 = {};
                var4 = 'PremiumMarketingPage';
                var1['location'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var7.bind(var6)(var3);
            var7 = _closure1_slot5;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.initiatedPurchaseFromNewFlow;
                    var2 = var2.isPaymentSuccess;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = !var2;
case 2:
                    return var1;
                }
            };
            var9 = var7.bind(var6)(var2);
            var10 = _closure1_slot4;
            var7 = var10.useState;
            var2 = false;
            var7 = var7.bind(var10)(var2);
            var2 = _closure1_slot3;
            var1 = 2;
            var2 = var2.bind(var6)(var7, var1);
            var1 = 0;
            var7 = var2[var1];
            var1 = 1;
            var1 = var2[var1];
            var2 = var3;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = !var8;
case 4:
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = !var5;
case 6:
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = var7;
            if(!var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = var9;
case 10:
            var2 = var8;
case 8:
            if(!(var7 !== var2)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = var1.bind(var6)(var2);
case 12:
            var1 = {};
            if(!var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var3 = !var5;
case 14:
            if(!var3) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var3 = var4;
case 16:
            var1['canRenderRedesignUpsellEarly'] = var3;
            var1['showRedesignUpsell'] = var2;
            return var1;
        }
    };
    var3['useBuyNitroExperiment'] = var2;
    return var1;
})();