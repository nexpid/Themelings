// app/modules/guilds_bar/usePendingFolderGuildIds.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function getPendingFolderGuildIds() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arguments[0];
            var2 = undefined;
            if(!(var3 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot2;
            var4 = new Array(2);
            var4[0] = var6;
            var5 = _closure1_slot3;
            var4[1] = var5;
            var3 = var4;
case 2:
            var7 = var3;
            var5 = var7[Symbol.iterator];
            var7 = var5().next;
            var4 = var7().value;
            var3 = var5;
            var6 = var3 === var2;
            var3 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var4;
case 4:
            var4 = undefined;
            if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = var7().value;
            var7 = var5;
            var7 = var7 === var2;
            var4 = undefined;
            var6 = var7;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var4 = var8;
            var6 = var7;
case 6:
            if(var6) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var5.return();
case 9:
            var _closure2_slot0 = var2;
            var2 = var3.computeGuildIds;
            var3 = var2.bind(var3)();
            var2 = var4.getGuilds;
            var2 = var2.bind(var4)();
            _closure2_slot0 = var2;
            var2 = var3.filter;
            var1 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 == var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot4 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guilds_bar/usePendingFolderGuildIds.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function usePendingFolderGuildIds() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresArray;
        var5 = _closure1_slot2;
        var2 = new Array(2);
        var2[0] = var5;
        var1 = _closure1_slot3;
        var2[1] = var1;
        var1 = function() {
            var3 = _closure1_slot4;
            var4 = _closure1_slot2;
            var2 = new Array(2);
            var2[0] = var4;
            var1 = _closure1_slot3;
            var2[1] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['getPendingFolderGuildIds'] = var2;
    return var1;
})();