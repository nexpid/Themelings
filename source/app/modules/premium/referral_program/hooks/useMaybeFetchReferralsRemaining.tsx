// app/modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PremiumTypes;
    var _closure1_slot6 = var7;
    var4 = var4.FractionalPremiumStates;
    var _closure1_slot7 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arguments[0];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = false;
case 2:
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var1;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 4;
            var4 = var9[var4];
            var10 = var7.bind(var1)(var4);
            var8 = var10.useStateFromStores;
            var4 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var8.bind(var10)(var5, var4);
            var4 = 5;
            var4 = var9[var4];
            var5 = var7.bind(var1)(var4);
            var4 = var5.useHasDiscountApplied;
            var5 = var4.bind(var5)();
            var4 = 6;
            var4 = var9[var4];
            var7 = var7.bind(var1)(var4);
            var4 = var7.useHasActiveTrial;
            var4 = var4.bind(var7)();
            var8 = _closure1_slot1;
            var7 = 7;
            var7 = var9[var7];
            var7 = var8.bind(var1)(var7);
            var8 = var7.bind(var1)();
            var7 = null;
            var7 = var7 == var12;
            var9 = undefined;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = var12.verified;
case 4:
            var7 = true;
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 8;
            var9 = var11[var9];
            var11 = var10.bind(var1)(var9);
            var10 = var11.isPremiumExactly;
            var9 = _closure1_slot6;
            var9 = var9.TIER_2;
            var7 = var10.bind(var11)(var12, var9);
case 6:
            if(!var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var8.fetched;
case 8:
            if(!var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = var8.fractionalState;
            var8 = _closure1_slot7;
            var8 = var8.FP_ONLY;
            var7 = var9 !== var8;
case 10:
            if(!var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = !var5;
case 12:
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = !var4;
case 14:
            _closure2_slot1 = var7;
            var5 = _closure1_slot3;
            var4 = var5.useEffect;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(!var1) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var2 = _closure2_slot0;
                    var1 = !var2;
case 16:
                    if(!var1) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var2 = _closure1_slot5;
                    var1 = var2.checkAndFetchReferralsRemaining;
                    var1 = var1.bind(var2)();
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['useMaybeFetchReferralsRemaining'] = var2;
    return var1;
})();