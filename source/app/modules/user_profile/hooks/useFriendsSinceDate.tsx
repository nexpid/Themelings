// app/modules/user_profile/hooks/useFriendsSinceDate.tsx
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
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RelationshipTypes;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/useFriendsSinceDate.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFriendsSinceDate(arg1) {
        var10 = arg1;
        var _closure2_slot0 = var10;
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var7 = 3;
        var4 = var6[var7];
        var2 = undefined;
        var11 = var5.bind(var2)(var4);
        var9 = var11.useStateFromStores;
        var4 = _closure1_slot2;
        var8 = new Array(1);
        var8[0] = var4;
        var4 = function() {
            var1 = _closure1_slot2;
            var1 = var1.locale;
            return var1;
        };
        var4 = var9.bind(var11)(var8, var4);
        var7 = var6[var7];
        var9 = var5.bind(var2)(var7);
        var8 = var9.useStateFromStores;
        var3 = _closure1_slot3;
        var7 = new Array(1);
        var7[0] = var3;
        var3 = new Array(1);
        var3[0] = var10;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var5 = _closure1_slot3;
                var4 = var5.getRelationshipType;
                var1 = _closure2_slot0;
                var5 = var4.bind(var5)(var1);
                var1 = _closure1_slot4;
                var4 = var1.FRIEND;
                var1 = null;
                if(!(var5 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure1_slot3;
                var3 = var4.getSince;
                var2 = _closure2_slot0;
                var1 = var3.bind(var4)(var2);
case 2:
                return var1;
            }
        };
        var3 = var8.bind(var9)(var7, var1, var3);
        var1 = 4;
        var1 = var6[var1];
        var2 = var5.bind(var2)(var1);
        var1 = var2.getCreatedAtDate;
        var1 = var1.bind(var2)(var3, var4);
        return var1;
    };
    var3['useFriendsSinceDate'] = var2;
    return var1;
})();