// app/modules/guild_mod_dash_member_safety/GuildMemberSafetySearchUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_mod_dash_member_safety/GuildMemberSafetySearchUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function splitQuery(arg1) {
        var4 = arg1;
        var3 = var4.split;
        var2 = ',';
        var4 = var3.bind(var4)(var2);
        var3 = var4.map;
        var2 = function(arg1) {
            var2 = arg1;
            var1 = var2.trim;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5 = var3.bind(var4)(var2);
        var2 = new Array(0);
        var _closure2_slot0 = var2;
        var3 = new Array(0);
        var _closure2_slot1 = var3;
        var4 = var5.forEach;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = arg1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isSnowflake;
                var3 = var2.bind(var3)(var4);
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = _closure2_slot1;
                var3 = var5.push;
                var3 = var3.bind(var5)(var4);
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var3 = _closure2_slot0;
                var2 = var3.push;
                var2 = var2.bind(var3)(var4);
case 4:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var1);
        var1 = new Array(2);
        var1[0] = var3;
        var1[1] = var2;
        return var1;
    };
    var3['splitQuery'] = var2;
    return var1;
})();