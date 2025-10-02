// app/modules/people/hooks/useFriendRequestCounts.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function getIncomingFriendRequestCount(arg1) {
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = arg1;
        var1 = 2;
        var3 = var4.bind(var3)(var2, var1);
        var1 = 0;
        var2 = var3[var1];
        var1 = 1;
        var3 = var3[var1];
        var1 = var2.getPendingCount;
        var2 = var1.bind(var2)();
        var1 = var3.getPendingIncomingCount;
        var1 = var1.bind(var3)();
        var1 = var2 + var1;
        return var1;
    };
    var _closure1_slot5 = var4;
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
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/people/hooks/useFriendRequestCounts.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getIncomingFriendRequestCount'] = var4;
    var4 = function useIncomingFriendRequestCount() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot4;
        var2 = new Array(2);
        var2[0] = var5;
        var1 = _closure1_slot3;
        var2[1] = var1;
        var1 = function() {
            var3 = _closure1_slot5;
            var4 = _closure1_slot4;
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
    var3['useIncomingFriendRequestCount'] = var4;
    var2 = function getOutgoingFriendRequestCount() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arguments[0];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = global;
            var5 = var2.o;
            var1 = new Array(2);
            var1[0] = var5;
            var2 = var2.s;
            var1[1] = var2;
            var4 = var1;
case 2:
            var2 = _closure1_slot2;
            var1 = 2;
            var3 = var2.bind(var3)(var4, var1);
            var1 = 0;
            var2 = var3[var1];
            var1 = 1;
            var3 = var3[var1];
            var1 = var2.getOutgoingCount;
            var2 = var1.bind(var2)();
            var1 = var3.getPendingOutgoingCount;
            var1 = var1.bind(var3)();
            var1 = var2 + var1;
            return var1;
        }
    };
    var3['getOutgoingFriendRequestCount'] = var2;
    return var1;
})();