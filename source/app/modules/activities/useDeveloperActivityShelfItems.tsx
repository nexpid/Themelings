// app/modules/activities/useDeveloperActivityShelfItems.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DEFAULT_EMBEDDED_ACTIVITY_CONFIG;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/useDeveloperActivityShelfItems.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function() {
        var8 = _closure1_slot0;
        var9 = _closure1_slot1;
        var4 = 3;
        var3 = var9[var4];
        var7 = undefined;
        var12 = var8.bind(var7)(var3);
        var11 = var12.useStateFromStoresObject;
        var3 = _closure1_slot3;
        var10 = new Array(1);
        var10[0] = var3;
        var6 = function() {
            var1 = {};
            var3 = _closure1_slot3;
            var2 = var3.getIsEnabled;
            var2 = var2.bind(var3)();
            var1['isEnabled'] = var2;
            var2 = var3.getLastUsedObject;
            var2 = var2.bind(var3)();
            var1['lastUsedObject'] = var2;
            return var1;
        };
        var5 = new Array(0);
        var5 = var11.bind(var12)(var10, var6, var5);
        var6 = var5.isEnabled;
        var _closure2_slot0 = var6;
        var5 = var5.lastUsedObject;
        var _closure2_slot1 = var5;
        var4 = var9[var4];
        var9 = var8.bind(var7)(var4);
        var8 = var9.useStateFromStoresArray;
        var7 = new Array(1);
        var7[0] = var3;
        var4 = function() {
            var2 = _closure1_slot3;
            var1 = var2.getDeveloperShelfItems;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3 = new Array(0);
        var7 = var8.bind(var9)(var7, var4, var3);
        var _closure2_slot2 = var7;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot0;
                if(var1) { _fun0001_ip = 18; continue _fun0001 }
 12:
                var1 = new Array(0);
                _fun0001_ip = 57; continue _fun0001;
 18:
                var5 = _closure2_slot2;
                var4 = var5.map;
                var3 = function(arg1) {
                    var3 = arg1;
                    var1 = {};
                    var1['application'] = var3;
                    var2 = {};
                    var5 = _closure1_slot4;
                    var6 = var2;
                    var4 = copyDataProperties(var6, var5);
                    var5 = var3.embeddedActivityConfig;
                    var6 = var2;
                    var4 = copyDataProperties(var6, var5);
                    var4 = var3.id;
                    var3 = 'application_id';
                    var2[var3] = var4;
                    var1['activity'] = var2;
                    return var1;
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.sort;
                var2 = function(arg1, arg2) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var2 = _closure2_slot1;
                        var1 = arg1;
                        var1 = var1.application;
                        var1 = var1.id;
                        var4 = var2[var1];
                        var1 = arg2;
                        var1 = var1.application;
                        var1 = var1.id;
                        var3 = var2[var1];
                        var2 = null;
                        var5 = var2 == var4;
                        var1 = 1;
                        if(var5) { _fun0002_ip = 73; continue _fun0002 }
 53:
                        var5 = var2 == var3;
                        var2 = -1;
                        if(var5) { _fun0002_ip = 70; continue _fun0002 }
 66:
                        var2 = var3 - var4;
 70:
                        var1 = var2;
 73:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2);
 57:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useDeveloperActivityShelfItems'] = var2;
    return var1;
})();