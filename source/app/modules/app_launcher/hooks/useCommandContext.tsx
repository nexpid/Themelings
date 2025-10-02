// app/modules/app_launcher/hooks/useCommandContext.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var6 = dependencyMap;
    var4 = function getCommandContext(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.type;
            var1 = 'contextless';
            if(!(var1 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = {};
            var3 = var2.channel;
            var1['channel'] = var3;
            var4 = _closure1_slot1;
            var3 = var4.getGuild;
            var2 = var2.channel;
            var2 = var2.guild_id;
            var2 = var3.bind(var4)(var2);
            var1['guild'] = var2;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = {};
            var3 = undefined;
            var2['channel'] = var3;
            var2['guild'] = var3;
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var5);
    var1 = 0;
    var7 = var6[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var7);
    var _closure1_slot0 = var5;
    var5 = 1;
    var7 = var6[var5];
    var5 = metroImportDefault;
    var5 = var5.bind(var1)(var7);
    var _closure1_slot1 = var5;
    var5 = 2;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/app_launcher/hooks/useCommandContext.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getCommandContext'] = var4;
    var2 = function useCommandContext(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useCommandContext'] = var2;
    return var1;
})();