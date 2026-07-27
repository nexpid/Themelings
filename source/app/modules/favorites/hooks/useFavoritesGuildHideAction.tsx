// app/modules/favorites/hooks/useFavoritesGuildHideAction.tsx
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
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Routes;
    var _closure1_slot5 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/favorites/hooks/useFavoritesGuildHideAction.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFavoritesGuildHideAction() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 3;
            var2 = var3[var2];
            var8 = undefined;
            var5 = var7.bind(var8)(var2);
            var2 = var5.useFavoritesAccess;
            var2 = var2.bind(var5)();
            var6 = var2.hasAccess;
            var _closure2_slot0 = var6;
            var9 = _closure1_slot3;
            var5 = var9.useCallback;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.setFavoritesGuildVisibility;
                    var2 = false;
                    var1 = 'server_context_menu';
                    var1 = var3.bind(var4)(var2, var1);
case 2:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 5;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.isFavoritesGuildId;
                    var6 = _closure1_slot4;
                    var3 = var6.getGuildId;
                    var3 = var3.bind(var6)();
                    var3 = var4.bind(var5)(var3);
                    if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 6;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.transitionTo;
                    var2 = _closure1_slot5;
                    var2 = var2.ME;
                    var2 = var3.bind(var4)(var2);
case 4:
                    return var1;
                }
            };
            var2 = var5.bind(var9)(var1, var2);
            var1 = {};
            var5 = !var6;
            var1['isPreview'] = var5;
            var5 = 7;
            var3 = var3[var5];
            var3 = var7.bind(var8)(var3);
            var9 = var3.intl;
            var7 = var9.string;
            if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var3 = var10.bind(var8)(var3);
            var3 = var3.t;
            var3 = var3.ojM1xJ;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 8;
            var10 = var12[var10];
            var10 = var11.bind(var8)(var10);
            var3 = var10["8FO0y9"];
case 8:
            var3 = var7.bind(var9)(var3);
            var1['label'] = var3;
            var3 = undefined;
            if(!var6) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = var9[var5];
            var5 = var6.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var7 = _closure1_slot1;
            var4 = 8;
            var4 = var9[var4];
            var4 = var7.bind(var8)(var4);
            var4 = var4.FaHxWl;
            var3 = var5.bind(var6)(var4);
case 9:
            var1['subLabel'] = var3;
            var1['perform'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();