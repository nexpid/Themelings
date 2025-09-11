// app/modules/hang_status/useCanSeeHangStatus.tsx
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
    var4 = 'modules/hang_status/useCanSeeHangStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCanSeeHangStatus(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg2;
            var _closure2_slot0 = var8;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 2;
            var1 = var5[var1];
            var6 = undefined;
            var1 = var4.bind(var6)(var1);
            var5 = var1.HangStatusExperiment;
            var4 = var5.useExperiment;
            var1 = {};
            var7 = null;
            var9 = var7 == var8;
            var7 = undefined;
            if(var9) { _fun0001_ip = 64; continue _fun0001 }
 59:
            var7 = var8.guild_id;
 64:
            var1['guildId'] = var7;
            var7 = arg1;
            var1['location'] = var7;
            var1 = var4.bind(var5)(var1);
            var1 = var1.enableHangStatus;
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 3;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.useStateFromStores;
            var6 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = function() {
                var4 = _closure1_slot2;
                var3 = var4.can;
                var1 = _closure1_slot3;
                var2 = var1.CONNECT;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2);
            if(!var1) { _fun0001_ip = 142; continue _fun0001 }
 139:
            var1 = var2;
 142:
            return var1;
        }
    };
    var3['useCanSeeHangStatus'] = var2;
    return var1;
})();