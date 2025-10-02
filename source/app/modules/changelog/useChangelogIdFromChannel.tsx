// app/modules/changelog/useChangelogIdFromChannel.tsx
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
    var4 = 'modules/changelog/useChangelogIdFromChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useChangelogIdFromChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 1;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.useStateFromStores;
            var6 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = function() {
                var3 = _closure1_slot2;
                var2 = var3.getLastMessage;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2);
            var3 = null;
            var3 = var3 == var2;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.changelogId;
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();