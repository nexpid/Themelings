// app/design/void/LegacyText/native/useLegacyTextMigrationHighlight.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var10 = 1;
    var4 = var6[var10];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['borderWidth'] = var10;
    var10 = 2;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.STATUS_DANGER;
    var9['borderColor'] = var10;
    var4['highlight'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/void/LegacyText/native/useLegacyTextMigrationHighlight.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useLegacyTextMigrationHighlight() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot3;
            var5 = undefined;
            var2 = var2.bind(var5)();
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 3;
            var3 = var6[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.useStateFromStores;
            var1 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot2;
                var2 = var3.get;
                var1 = 'highlight_mana_text';
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var4.bind(var5)(var3, var1);
            var1 = null;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.highlight;
case 2:
            return var1;
        }
    };
    var3['useLegacyTextMigrationHighlight'] = var2;
    return var1;
})();