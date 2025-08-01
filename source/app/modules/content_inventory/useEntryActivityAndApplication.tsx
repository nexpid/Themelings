// app/modules/content_inventory/useEntryActivityAndApplication.tsx
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
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/content_inventory/useEntryActivityAndApplication.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useEntryActivityAndApplication(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var10 = 3;
            var1 = var3[var10];
            var9 = undefined;
            var7 = var2.bind(var9)(var1);
            var5 = var7.useStateFromStores;
            var1 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getMatchingActivity;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var5.bind(var7)(var2, var1);
            var2 = _closure1_slot1;
            var1 = 4;
            var1 = var3[var1];
            var2 = var2.bind(var9)(var1);
            var5 = null;
            var1 = var5 == var7;
            var3 = undefined;
            if(var1) { _fun0001_ip = 95; continue _fun0001 }
 89:
            var3 = var7.application_id;
 95:
            var1 = new Array(2);
            var1[0] = var3;
            var11 = var8.extra;
            var3 = 'application_id';
            var11 = var3 in var11;
            var3 = undefined;
            if(!var11) { _fun0001_ip = 134; continue _fun0001 }
 122:
            var8 = var8.extra;
            var3 = var8.application_id;
 134:
            var1[1] = var3;
            var3 = var2.bind(var9)(var1);
            var2 = _closure1_slot3;
            var1 = 2;
            var2 = var2.bind(var9)(var3, var1);
            var1 = 0;
            var3 = var2[var1];
            var _closure2_slot1 = var3;
            var1 = 1;
            var2 = var2[var1];
            var1 = {};
            var1['activity'] = var7;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var10];
            var8 = var8.bind(var9)(var7);
            var7 = var8.useStateFromStores;
            var9 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var9;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot4;
                    var3 = var4.getEmbeddedActivityForUserId;
                    var1 = _closure2_slot0;
                    var2 = var1.author_id;
                    var6 = _closure2_slot1;
                    var1 = null;
                    var6 = var1 == var6;
                    var1 = undefined;
                    if(var6) { _fun0002_ip = 50; continue _fun0002 }
 41:
                    var5 = _closure2_slot1;
                    var1 = var5.id;
 50:
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var4 = var7.bind(var8)(var6, var4);
            var1['embeddedActivity'] = var4;
            var4 = var2;
            if(!(var5 != var3)) { _fun0001_ip = 240; continue _fun0001 }
 237:
            var4 = var3;
 240:
            var1['anyMatchingApplication'] = var4;
            var1['activityApplication'] = var3;
            var1['fallbackApplication'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();