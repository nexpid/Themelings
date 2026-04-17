// app/modules/premium/powerups/hooks/useTotalPossibleBoostCount.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = var4.useMemo;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MULTIPLE_PURCHASEABLE_PREMIUM_FEATURES_BOOST_INFO;
    var _closure1_slot1 = var7;
    var4 = var4.PURCHASABLE_PREMIUM_FEATURES_BOOST_INFO;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AppliedGuildBoostsRequiredForBoostedGuildTier;
    var _closure1_slot3 = var7;
    var7 = var4.BoostedGuildTiers;
    var _closure1_slot4 = var7;
    var4 = var4.GuildFeatures;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useTotalPossibleBoostCount.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTotalPossibleBoostCount(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = undefined;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot0;
                var4 = null;
                if(!(var4 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot0;
                var3 = var4 == var3;
                var4 = undefined;
                if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = _closure2_slot0;
                var5 = var2.features;
                var3 = var5.has;
                var2 = _closure1_slot5;
                var2 = var2.PREMIUM_TIER_3_OVERRIDE;
                var4 = var3.bind(var5)(var2);
case 4:
                var3 = true;
                var2 = 0;
                if(!(var3 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var4 = _closure1_slot3;
                var3 = _closure1_slot4;
                var3 = var3.TIER_3;
                var2 = var4[var3];
case 6:
                var _closure3_slot0 = var2;
                var3 = global;
                var6 = var3.Object;
                var5 = var6.values;
                var4 = _closure1_slot2;
                var4 = var5.bind(var6)(var4);
                var5 = var3.Object;
                var3 = var5.values;
                var2 = _closure1_slot1;
                var3 = var3.bind(var5)(var2);
                var2 = var4.concat;
                var4 = var2.bind(var4)(var3);
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.includedInLevel;
                        var3 = null;
                        var2 = var3 != var2;
                        if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 3:
                        var4 = var1.isEnabled;
                        var5 = var3 == var4;
                        var4 = undefined;
                        if(var5) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                        var6 = var1.isEnabled;
                        var5 = _closure2_slot0;
                        var5 = var5.id;
                        var4 = var6.bind(var1)(var5);
case 9:
                        var3 = var3 != var4;
                        if(!var3) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                        var3 = !var4;
case 11:
                        var2 = var3;
case 8:
                        if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var3 = _closure3_slot0;
                        var1 = var1.boostPrice;
                        var1 = var3 + var1;
                        _closure3_slot0 = var1;
case 6:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var1 = _closure3_slot0;
                return var1;
case 2:
                var1 = 0;
                return var1;
            }
        };
        var1 = var4.bind(var2)(var1, var3);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();