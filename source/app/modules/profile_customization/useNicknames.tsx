// app/modules/profile_customization/useNicknames.tsx
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
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_customization/useNicknames.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useNicknames(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var3 = var1 == var3;
                var1 = '';
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure1_slot2;
                var3 = var4.getNicknames;
                var2 = _closure2_slot0;
                var4 = var3.bind(var4)(var2);
                var3 = var4.join;
                var2 = ', ';
                var1 = var3.bind(var4)(var2);
case 2:
                return var1;
            }
        };
        var3 = var4.bind(var5)(var3, var1, var2);
        var1 = {};
        var1['nicknames'] = var3;
        var2 = var3.trim;
        var3 = var2.bind(var3)();
        var2 = '';
        var2 = var2 !== var3;
        var1['canShowNicknames'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();