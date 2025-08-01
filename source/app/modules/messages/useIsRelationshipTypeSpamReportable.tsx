// app/modules/messages/useIsRelationshipTypeSpamReportable.tsx
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RelationshipTypes;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/useIsRelationshipTypeSpamReportable.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsRelationshipTypeSpamReportable(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 2;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var5 = var6.useStateFromStores;
            var3 = _closure1_slot2;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = new Array(1);
            var3[0] = var7;
            var1 = function() {
                var3 = _closure1_slot2;
                var2 = var3.getRelationshipType;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var5.bind(var6)(var4, var1, var3);
            var1 = _closure1_slot3;
            var1 = var1.NONE;
            var1 = var3 === var1;
            if(var1) { _fun0001_ip = 104; continue _fun0001 }
 90:
            var4 = _closure1_slot3;
            var4 = var4.BLOCKED;
            var1 = var3 === var4;
 104:
            if(var1) { _fun0001_ip = 121; continue _fun0001 }
 107:
            var2 = _closure1_slot3;
            var2 = var2.PENDING_INCOMING;
            var1 = var3 === var2;
 121:
            return var1;
        }
    };
    var3['useIsRelationshipTypeSpamReportable'] = var2;
    return var1;
})();