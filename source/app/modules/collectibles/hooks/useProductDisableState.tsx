// app/modules/collectibles/hooks/useProductDisableState.tsx
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
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useProductDisableState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var1 = var3[var1];
            var8 = undefined;
            var7 = var2.bind(var8)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot2;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure1_slot2;
                    var1 = var2.getPremiumSubscription;
                    var1 = var1.bind(var2)();
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = var1.isPurchasedExternally;
case 2:
                    var1 = true;
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5, var1);
            var1 = 2;
            var1 = var3[var1];
            var1 = var2.bind(var8)(var1);
            var1 = var1.FractionalPremiumSKUs;
            var2 = var1.PREMIUM_TIER_2_3_DAY;
            var1 = arg1;
            if(!(var1 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = {'isDisabled': false, 'disabledReason': null};
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var2 = {};
            var2['isDisabled'] = var5;
            var3 = null;
            if(!var5) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var4 = 3;
            var5 = var9[var4];
            var5 = var7.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var7.bind(var8)(var4);
            var4 = var4.t;
            var4 = var4.NbveHB;
            var3 = var5.bind(var6)(var4);
case 7:
            var2['disabledReason'] = var3;
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['useProductDisableState'] = var2;
    return var1;
})();