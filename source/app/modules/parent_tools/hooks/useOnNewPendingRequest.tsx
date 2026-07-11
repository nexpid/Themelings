// app/modules/parent_tools/hooks/useOnNewPendingRequest.tsx
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
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/hooks/useOnNewPendingRequest.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useOnNewPendingRequest(arg1) {
        var3 = arg1;
        var _closure2_slot0 = var3;
        var7 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 2;
        var5 = var9[var1];
        var1 = undefined;
        var6 = var7.bind(var1)(var5);
        var5 = var6.usePendingRequestCount;
        var6 = var5.bind(var6)();
        var _closure2_slot1 = var6;
        var5 = 3;
        var5 = var9[var5];
        var10 = var7.bind(var1)(var5);
        var8 = var10.useStateFromStores;
        var5 = _closure1_slot4;
        var7 = new Array(1);
        var7[0] = var5;
        var5 = function() {
            var2 = _closure1_slot4;
            var1 = var2.getAreLinkedUsersProcessed;
            var1 = var1.bind(var2)();
            return var1;
        };
        var7 = var8.bind(var10)(var7, var5);
        var _closure2_slot2 = var7;
        var8 = _closure1_slot1;
        var5 = 4;
        var5 = var9[var5];
        var8 = var8.bind(var1)(var5);
        var5 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot4;
                var2 = var3.getAreLinkedUsersProcessed;
                var2 = var2.bind(var3)();
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.fetchLinkedUsers;
                var3 = var1.bind(var2)();
                var2 = var3.catch;
                var1 = function() {
                    var1 = undefined;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var5 = var8.bind(var1)(var5);
        var5 = _closure1_slot3;
        var4 = var5.useRef;
        var4 = var4.bind(var5)(var3);
        var _closure2_slot3 = var4;
        var8 = var5.useEffect;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var2 = _closure2_slot3;
            var1 = _closure2_slot0;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var3 = var8.bind(var5)(var3, var4);
        var4 = var5.useRef;
        var3 = null;
        var3 = var4.bind(var5)(var3);
        var _closure2_slot4 = var3;
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot2;
                if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = _closure2_slot4;
                var3 = var2.current;
                var2 = null;
                if(!(var2 == var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var3 = _closure2_slot4;
                var2 = _closure2_slot1;
                var3['current'] = var2;
                _fun0002_ip = 4; continue _fun0002;
case 6:
                var4 = _closure2_slot1;
                var3 = _closure2_slot4;
                var2 = var3.current;
                var2 = var4 > var2;
                var3['current'] = var4;
                if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 8:
                var2 = _closure2_slot3;
                var1 = var2.current;
                var1 = var1.bind(var2)();
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();