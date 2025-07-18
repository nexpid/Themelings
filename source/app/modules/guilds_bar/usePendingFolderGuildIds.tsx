// app/modules/guilds_bar/usePendingFolderGuildIds.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function getPendingFolderGuildIds() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arguments[0];
            var2 = undefined;
            if(!(var3 === var2)) { _fun0001_ip = 37; continue _fun0001 }
 11:
            var6 = _closure1_slot2;
            var4 = new Array(2);
            var4[0] = var6;
            var5 = _closure1_slot3;
            var4[1] = var5;
            var3 = var4;
 37:
            var7 = var3;
            var5 = var7[Symbol.iterator];
            var7 = var5().next;
            var4 = var7().value;
            var3 = var5;
            var6 = var3 === var2;
            var3 = undefined;
            if(var6) { _fun0001_ip = 62; continue _fun0001 }
 59:
            var3 = var4;
 62:
            var4 = undefined;
            if(var6) { _fun0001_ip = 92; continue _fun0001 }
 67:
            var8 = var7().value;
            var7 = var5;
            var7 = var7 === var2;
            var4 = undefined;
            var6 = var7;
            if(var7) { _fun0001_ip = 92; continue _fun0001 }
 86:
            var4 = var8;
            var6 = var7;
 92:
            if(var6) { _fun0001_ip = 98; continue _fun0001 }
 95:
            var5.return();
 98:
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