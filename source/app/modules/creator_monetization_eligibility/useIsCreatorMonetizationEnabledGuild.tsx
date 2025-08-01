// app/modules/creator_monetization_eligibility/useIsCreatorMonetizationEnabledGuild.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function isCreatorMonetizationEnabledGuild(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var5 = var4.features;
            var2 = var5.has;
            var1 = _closure1_slot3;
            var1 = var1.CREATOR_MONETIZABLE_DISABLED;
            var1 = var2.bind(var5)(var1);
            var1 = !var1;
            if(!var1) { _fun0001_ip = 96; continue _fun0001 }
 38:
            var6 = var4.features;
            var5 = var6.has;
            var2 = _closure1_slot3;
            var2 = var2.CREATOR_MONETIZABLE;
            var2 = var5.bind(var6)(var2);
            if(var2) { _fun0001_ip = 93; continue _fun0001 }
 67:
            var5 = var4.features;
            var4 = var5.has;
            var3 = _closure1_slot3;
            var3 = var3.CREATOR_MONETIZABLE_PROVISIONAL;
            var2 = var4.bind(var5)(var3);
 93:
            var1 = var2;
 96:
            return var1;
        }
    };
    var _closure1_slot4 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.GuildFeatures;
    var _closure1_slot3 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/creator_monetization_eligibility/useIsCreatorMonetizationEnabledGuild.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useIsCreatorMonetizationEnabledGuild(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = _closure1_slot2;
                var3 = var4.getGuild;
                var1 = _closure2_slot0;
                var4 = var3.bind(var4)(var1);
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0002_ip = 44; continue _fun0002 }
 33:
                var3 = _closure1_slot4;
                var2 = undefined;
                var1 = var3.bind(var2)(var4);
 44:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['isCreatorMonetizationEnabledGuild'] = var2;
    return var1;
})();