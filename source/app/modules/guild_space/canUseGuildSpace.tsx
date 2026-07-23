// app/modules/guild_space/canUseGuildSpace.tsx
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
    var4 = var4.Permissions;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_space/canUseGuildSpace.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function canUseGuildSpace(arg1, arg2) {
        var1 = false;
        return var1;
    };
    var3['canUseGuildSpace'] = var4;
    var2 = function useCanUseGuildSpace(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 2;
            var3 = var5[var3];
            var5 = undefined;
            var8 = var4.bind(var5)(var3);
            var7 = var8.useGuildSpaceExperimentEnabled;
            var3 = null;
            var3 = var3 == var6;
            var4 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var6.id;
case 2:
            var3 = arg2;
            var3 = var7.bind(var8)(var4, var3);
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 3;
            var3 = var7[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.useStateFromStores;
            var2 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure1_slot2;
                    var4 = var5.can;
                    var3 = _closure1_slot3;
                    var3 = var3.MANAGE_GUILD;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
case 4:
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var3, var1, var2);
            var1 = false;
            return var1;
        }
    };
    var3['useCanUseGuildSpace'] = var2;
    return var1;
})();