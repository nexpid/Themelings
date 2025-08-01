// app/modules/activities/useActivityUsers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/useActivityUsers.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useActivityUsers(arg1, arg2) {
        var6 = arg1;
        var7 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var7;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresArray;
        var8 = _closure1_slot3;
        var3 = new Array(2);
        var3[0] = var8;
        var2 = _closure1_slot2;
        var3[1] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure2_slot1;
                var3 = null;
                if(!(var3 != var4)) { _fun0001_ip = 125; continue _fun0001 }
 15:
                var5 = _closure1_slot3;
                var4 = var5.getEmbeddedActivitiesForChannel;
                var2 = _closure2_slot1;
                var5 = var4.bind(var5)(var2);
                var4 = var5.find;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.applicationId;
                    var1 = _closure2_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var2 = var4.bind(var5)(var2);
                if(!(var3 != var2)) { _fun0001_ip = 119; continue _fun0001 }
 59:
                var3 = global;
                var4 = var3.Array;
                var3 = var4.from;
                var2 = var2.userIds;
                var4 = var3.bind(var4)(var2);
                var3 = var4.map;
                var2 = function(arg1) {
                    var3 = _closure1_slot2;
                    var2 = var3.getUser;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.filter;
                var1 = function(arg1) {
                    var2 = null;
                    var1 = arg1;
                    var1 = var2 != var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                _fun0001_ip = 123; continue _fun0001;
 119:
                var1 = new Array(0);
 123:
                return var1;
 125:
                var1 = new Array(0);
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();