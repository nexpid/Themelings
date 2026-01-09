// app/modules/routing/RouteUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var4 = function isPseudoGuildId(arg1) {
        var3 = _closure1_slot0;
        var2 = var3.includes;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot3 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var5 = var5.PSEUDO_GUILD_IDS;
    var _closure1_slot0 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.isStaticChannelRoute;
    var _closure1_slot1 = var5;
    var5 = /^\d+$/;
    var _closure1_slot2 = var5;
    var5 = 2;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.fileFinishedImporting;
    var5 = 'modules/routing/RouteUtils.tsx';
    var5 = var8.bind(var9)(var5);
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.RouteParam;
    var3['RouteParam'] = var5;
    var3['isPseudoGuildId'] = var4;
    var4 = function isValidGuildId(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot3;
            var2 = undefined;
            var2 = var4.bind(var2)(var5);
            var4 = !var2;
            var2 = !var4;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot2;
            var3 = var4.test;
            var3 = var3.bind(var4)(var5);
            var3 = !var3;
            var2 = !var3;
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['isValidGuildId'] = var4;
    var2 = function isValidChannelId(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var1 = var1 == var5;
            if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var4 = _closure1_slot2;
            var2 = var4.test;
            var2 = var2.bind(var4)(var5);
            var4 = !var2;
            var2 = !var4;
            if(!var4) { _fun0002_ip = 4; continue _fun0002 }
case 6:
            var4 = _closure1_slot1;
            var3 = undefined;
            var3 = var4.bind(var3)(var5);
            var3 = !var3;
            var2 = !var3;
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['isValidChannelId'] = var2;
    return var1;
})();