// app/modules/favorites/native/FavoritesGuildHeaderActions.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/favorites/native/FavoritesGuildHeaderActions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FavoritesGuildHeaderActionButton() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 2;
            var1 = var9[var1];
            var4 = undefined;
            var1 = var10.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var8 = var1.isPreview;
            var5 = var1.label;
            var6 = var1.exitPreview;
            var3 = _closure1_slot3;
            var2 = _closure1_slot0;
            var1 = 3;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.IconButton;
            var1 = {'variant': 'secondary', 'size': 'sm'};
            var12 = _closure1_slot2;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = 5;
            var9 = var12[var9];
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var11 = 4;
            var9 = var12[var11];
case 4:
            var9 = var10.bind(var4)(var9);
            var1['icon'] = var9;
            if(var8) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 6;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var6 = var7.openFavoritesGuildAddActionSheet;
case 5:
            var1['onPress'] = var6;
            var1['accessibilityLabel'] = var5;
            var5 = 1;
            var1['maxFontSizeMultiplier'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['FavoritesGuildHeaderActionButton'] = var2;
    return var1;
})();