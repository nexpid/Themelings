// app/modules/premium/powerups/hooks/useHasEnhancedRoleColors.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useHasEnhancedRoleColors.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useHasEnhancedRoleColors(arg1) {
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
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = _closure1_slot2;
                var3 = var4.getGuild;
                var1 = _closure2_slot0;
                var3 = var3.bind(var4)(var1);
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = var3.features;
                var3 = var4.has;
                var2 = _closure1_slot3;
                var2 = var2.ENHANCED_ROLE_COLORS;
                var1 = var3.bind(var4)(var2);
case 2:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var4 = function getHasEnhancedRoleColors(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = _closure1_slot2;
            var3 = var4.getGuild;
            var3 = var3.bind(var4)(var5);
            var1 = var1 != var3;
            if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var4 = var3.features;
            var3 = var4.has;
            var2 = _closure1_slot3;
            var2 = var2.ENHANCED_ROLE_COLORS;
            var1 = var3.bind(var4)(var2);
case 2:
            return var1;
case 4:
            var1 = false;
            return var1;
        }
    };
    var3['getHasEnhancedRoleColors'] = var4;
    var4 = function useHasEnhancedRoleColorsForRole(arg1) {
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
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = _closure1_slot2;
                var3 = var4.getGuild;
                var1 = _closure2_slot0;
                var3 = var3.bind(var4)(var1);
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                var4 = var3.features;
                var3 = var4.has;
                var2 = _closure1_slot3;
                var2 = var2.ENHANCED_ROLE_COLORS;
                var1 = var3.bind(var4)(var2);
case 2:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useHasEnhancedRoleColorsForRole'] = var4;
    var2 = function getHasEnhancedRoleColorsForRole(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = _closure1_slot2;
            var3 = var4.getGuild;
            var1 = arg1;
            var3 = var3.bind(var4)(var1);
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0004_ip = 6; continue _fun0004 }
case 7:
            var4 = var3.features;
            var3 = var4.has;
            var2 = _closure1_slot3;
            var2 = var2.ENHANCED_ROLE_COLORS;
            var1 = var3.bind(var4)(var2);
case 6:
            return var1;
        }
    };
    var3['getHasEnhancedRoleColorsForRole'] = var2;
    return var1;
})();