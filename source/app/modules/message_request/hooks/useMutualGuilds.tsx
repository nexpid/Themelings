// app/modules/message_request/hooks/useMutualGuilds.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/message_request/hooks/useMutualGuilds.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMutualGuildsForMessageRequests(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 3;
        var7 = var8[var1];
        var4 = undefined;
        var11 = var5.bind(var4)(var7);
        var10 = var11.useStateFromStores;
        var7 = _closure1_slot5;
        var9 = new Array(1);
        var9[0] = var7;
        var7 = function() {
            var3 = _closure1_slot5;
            var2 = var3.getUser;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var7 = var10.bind(var11)(var9, var7);
        var _closure2_slot1 = var7;
        var1 = var8[var1];
        var8 = var5.bind(var4)(var1);
        var5 = var8.useStateFromStoresArray;
        var1 = _closure1_slot4;
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot4;
                var2 = var3.getMutualGuilds;
                var1 = _closure2_slot0;
                var5 = var2.bind(var3)(var1);
                var2 = null;
                var3 = var2 == var5;
                var1 = undefined;
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = var5.map;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.guild;
                    return var1;
                };
                var1 = var4.bind(var5)(var3);
case 2:
                if(!(var2 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var1 = new Array(0);
case 4:
                return var1;
            }
        };
        var1 = var5.bind(var8)(var4, var1);
        var _closure2_slot2 = var1;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var3 = new Array(3);
        var3[0] = var1;
        var3[1] = var7;
        var3[2] = var6;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = _closure2_slot2;
                var3 = var1.length;
                var1 = 0;
                var1 = var1 === var3;
                if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var4 = _closure2_slot1;
                var3 = null;
                var1 = var3 != var4;
case 6:
                if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var4 = _closure1_slot4;
                var3 = var4.getMutualGuilds;
                var2 = _closure2_slot0;
                var3 = var3.bind(var4)(var2);
                var2 = null;
                var1 = var2 == var3;
case 8:
                if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.wait;
                var1 = function() {
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 5;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = _closure2_slot0;
                    var1 = {};
                    var5 = true;
                    var1['withMutualGuilds'] = var5;
                    var1 = var3.bind(var4)(var2, var4, var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
case 10:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useMutualGuildsForMessageRequests'] = var2;
    return var1;
})();