// app/modules/parent_tools/hooks/useSelectedTeenUser.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/hooks/useSelectedTeenUser.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        var3 = _closure1_slot1;
        var6 = _closure1_slot2;
        var2 = 2;
        var2 = var6[var2];
        var4 = undefined;
        var2 = var3.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var _closure2_slot0 = var2;
        var3 = _closure1_slot0;
        var2 = 3;
        var2 = var6[var2];
        var4 = var3.bind(var4)(var2);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot4;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot3;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot0;
                if(var1) { _fun0001_ip = 28; continue _fun0001 }
 13:
                var3 = _closure1_slot3;
                var1 = var3.getCurrentUser;
                var1 = var1.bind(var3)();
                return var1;
 28:
                var3 = _closure1_slot4;
                var1 = var3.getSelectedTeenId;
                var4 = var1.bind(var3)();
                var3 = null;
                var1 = undefined;
                if(!(var3 !== var4)) { _fun0001_ip = 65; continue _fun0001 }
 50:
                var3 = _closure1_slot3;
                var2 = var3.getUser;
                var1 = var2.bind(var3)(var4);
 65:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useSelectedTeenUser'] = var4;
    var2 = function(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure1_slot3;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                var2 = null;
                if(!(var2 == var1)) { _fun0002_ip = 35; continue _fun0002 }
 31:
                var2 = undefined;
                return var2;
 35:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useTeenUserForId'] = var2;
    return var1;
})();