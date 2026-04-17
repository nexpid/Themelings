// app/modules/collectibles/hooks/useCanPurchaseFrames.tsx
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
    var4 = var4.PremiumTypes;
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useCanPurchaseFrames.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useCanPurchaseFrames(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var10 = arg1;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 2;
            var1 = var2[var1];
            var7 = undefined;
            var4 = var6.bind(var7)(var1);
            var1 = var4.useIsProfileFramesEnabled;
            var1 = var1.bind(var4)(var10);
            var5 = _closure1_slot1;
            var8 = 3;
            var4 = var2[var8];
            var9 = var5.bind(var7)(var4);
            var5 = var9.useConfig;
            var4 = {};
            var4['location'] = var10;
            var4 = var5.bind(var9)(var4);
            var5 = var4.bucket;
            var4 = 4;
            var4 = var2[var4];
            var11 = var6.bind(var7)(var4);
            var10 = var11.useStateFromStores;
            var4 = _closure1_slot3;
            var9 = new Array(1);
            var9[0] = var4;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot3;
                    var1 = var3.getCurrentUser;
                    var3 = var1.bind(var3)();
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 5;
                    var1 = var5[var1];
                    var5 = undefined;
                    var6 = var4.bind(var5)(var1);
                    var4 = var6.isPremiumExactly;
                    var1 = _closure1_slot4;
                    var1 = var1.TIER_2;
                    var1 = var4.bind(var6)(var3, var1);
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var6 = null;
                    var7 = var6 == var3;
                    var4 = undefined;
                    if(var7) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = var3.premiumState;
case 4:
                    var1 = var6 != var4;
case 2:
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = var3.premiumState;
                    var3 = var3.premiumSubscriptionType;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 6;
                    var2 = var6[var2];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.PremiumSubscriptionType;
                    var2 = var2.TIER_2;
                    var1 = var3 === var2;
case 6:
                    return var1;
                }
            };
            var4 = var10.bind(var11)(var9, var4);
            var2 = var2[var8];
            var2 = var6.bind(var7)(var2);
            var2 = var2.ProfileFramesPurchaseBucket;
            var2 = var2.OPEN_PURCHASE;
            var2 = var5 === var2;
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var6.bind(var7)(var3);
            var3 = var3.ProfileFramesPurchaseBucket;
            var3 = var3.PAID_PREMIUM_SUBSCRIBERS_ONLY;
            var3 = var5 === var3;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var4;
case 10:
            var2 = var3;
case 8:
            if(!var1) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = var2;
case 12:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function useCanViewProfileFramesInCollectiblesShop(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var8 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 2;
            var1 = var3[var1];
            var5 = undefined;
            var4 = var4.bind(var5)(var1);
            var1 = var4.useIsProfileFramesEnabled;
            var1 = var1.bind(var4)(var8);
            var4 = _closure1_slot1;
            var6 = 3;
            var3 = var3[var6];
            var7 = var4.bind(var5)(var3);
            var4 = var7.useConfig;
            var3 = {};
            var3['location'] = var8;
            var3 = var4.bind(var7)(var3);
            var3 = var3.bucket;
            if(!var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ProfileFramesPurchaseBucket;
            var2 = var2.CONTROL;
            var1 = var3 !== var2;
case 14:
            return var1;
        }
    };
    var3['useCanViewProfileFramesInCollectiblesShop'] = var2;
    return var1;
})();