// app/design/components/Text/native/useManaTextMigrationHighlightRestartNotice.tsx
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Text/native/useManaTextMigrationHighlightRestartNotice.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useManaTextMigrationHighlightRestartNotice() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 2;
        var4 = var4[var1];
        var1 = undefined;
        var7 = var5.bind(var1)(var4);
        var6 = var7.useStateFromStores;
        var4 = _closure1_slot4;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = function() {
            var3 = _closure1_slot4;
            var2 = var3.get;
            var1 = 'highlight_mana_text';
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var6.bind(var7)(var5, var4);
        var5 = _closure1_slot3;
        var4 = var5.useRef;
        var3 = true;
        var3 = var4.bind(var5)(var3);
        var _closure2_slot0 = var3;
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot0;
                var2 = var2.current;
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.show;
                var2 = {'title': 'Mana Text Migration Highlighter', 'body': 'Restart the app (force quit and reopen) to see the change.'};
                var2 = var3.bind(var4)(var2);
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var2 = _closure2_slot0;
                var1 = false;
                var2['current'] = var1;
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useManaTextMigrationHighlightRestartNotice'] = var2;
    return var1;
})();