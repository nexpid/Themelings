// app/modules/game_detection/Constants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var8 = function detectableCDNUrl(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg2;
            var4 = _closure1_slot0;
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot0;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = 'https://';
            var2 = arg1;
            var1 = var4.bind(var3)(var5, var2);
case 2:
            return var1;
        }
    };
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var2 = var2.Endpoints;
    var4 = var4.window;
    var4 = var4.GLOBAL_ENV;
    var4 = var4.CDN_HOST;
    var _closure1_slot0 = var4;
    var5 = var2.GAMES_DETECTABLE;
    var4 = '/detectables/games.json';
    var4 = var8.bind(var1)(var4, var5);
    var5 = var2.NON_GAMES_DETECTABLE;
    var2 = '/detectables/non-games.json';
    var2 = var8.bind(var1)(var2, var5);
    var5 = 1;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/game_detection/Constants.tsx';
    var5 = var6.bind(var7)(var5);
    var3['DETECTABLE_GAMES_CDN_URL'] = var4;
    var3['DETECTABLE_NON_GAMES_CDN_URL'] = var2;
    return var1;
})();