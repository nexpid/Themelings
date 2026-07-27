// app/modules/favorites/hooks/useFavoritesGuildHeaderAction.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Routes;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/favorites/hooks/useFavoritesGuildHeaderAction.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFavoritesGuildHeaderAction() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var8 = undefined;
            var2 = var5.bind(var8)(var1);
            var1 = var2.useFavoritesAccess;
            var1 = var1.bind(var2)();
            var3 = var1.hasAccess;
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var2 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 3;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.transitionTo;
                var2 = _closure1_slot4;
                var2 = var2.ME;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = new Array(0);
            var2 = var7.bind(var9)(var2, var1);
            var1 = {};
            var7 = !var3;
            var1['isPreview'] = var7;
            var9 = 4;
            var4 = var4[var9];
            var4 = var5.bind(var8)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var3 = var7.bind(var8)(var3);
            var3 = var3.t;
            var3 = var3.ojM1xJ;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 5;
            var6 = var9[var6];
            var6 = var7.bind(var8)(var6);
            var3 = var6.G9fGlP;
case 4:
            var3 = var4.bind(var5)(var3);
            var1['label'] = var3;
            var1['exitPreview'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();