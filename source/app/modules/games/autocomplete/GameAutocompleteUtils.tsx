// app/modules/games/autocomplete/GameAutocompleteUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/games/autocomplete/GameAutocompleteUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 100;
    var3['GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH'] = var4;
    var4 = function normalizeGameAutocompleteQuery(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3.trim;
            var3 = var2.bind(var3)();
            var2 = var3.toLowerCase;
            var5 = var2.bind(var3)();
            var4 = var5.replaceAll;
            var3 = '_';
            var2 = ' ';
            var5 = var4.bind(var5)(var3, var2);
            var3 = var5.slice;
            var4 = 0;
            var2 = 100;
            var3 = var3.bind(var5)(var4, var2);
            var2 = var3.length;
            var4 = var2 > var4;
            var2 = null;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3;
case 4:
            return var2;
case 2:
            return var1;
        }
    };
    var3['normalizeGameAutocompleteQuery'] = var4;
    var4 = function detectableGameToGameDescriptor(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var1 = var3.icon;
            var2 = null;
            if(!(var2 == var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var3.icon_hash;
case 6:
            var5 = var2 != var1;
            var4 = null;
            if(!var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = var1;
case 8:
            var1 = {};
            var5 = var3.id;
            var1['id'] = var5;
            var3 = var3.name;
            var1['name'] = var3;
            var3 = var2 != var4;
            var2 = null;
            if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = {};
            var5 = 'hash';
            var3['type'] = var5;
            var3['value'] = var4;
            var2 = var3;
case 10:
            var1['icon'] = var2;
            return var1;
        }
    };
    var3['detectableGameToGameDescriptor'] = var4;
    var2 = function isGameAutocompleteResultAllowedInGameWidgets(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.GAME_WIDGET_BANNED_APPLICATION_IDS;
        var2 = var3.has;
        var1 = arg1;
        var1 = var1.id;
        var1 = var2.bind(var3)(var1);
        var1 = !var1;
        return var1;
    };
    var3['isGameAutocompleteResultAllowedInGameWidgets'] = var2;
    return var1;
})();