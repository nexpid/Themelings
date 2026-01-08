// app/modules/premium/powerups/hooks/useGuildPowerupTier3OverrideConfig.tsx
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
    var4 = var4.GuildFeatures;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useGuildPowerupTier3OverrideConfig.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildPowerupTier3OverrideConfig(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var7 = undefined;
            var5 = var4.bind(var7)(var2);
            var4 = var5.useStateFromStores;
            var6 = _closure1_slot3;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot3;
                    var3 = var4.getGuild;
                    var2 = _closure2_slot0;
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    var4 = var2 == var3;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = var3.features;
                    var3 = var4.has;
                    var1 = _closure1_slot4;
                    var1 = var1.PREMIUM_TIER_3_OVERRIDE;
                    var2 = var3.bind(var4)(var1);
case 2:
                    var1 = true;
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var2, var1);
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = {'shouldShow': false, 'text': ''};
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var2 = {};
            var4 = true;
            var2['shouldShow'] = var4;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 3;
            var4 = var8[var4];
            var4 = var5.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var6 = _closure1_slot1;
            var3 = 4;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.l9n4QZ;
            var3 = var4.bind(var5)(var3);
            var2['text'] = var3;
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();