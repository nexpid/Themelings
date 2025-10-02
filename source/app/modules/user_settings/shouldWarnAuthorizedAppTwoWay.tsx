// app/modules/user_settings/shouldWarnAuthorizedAppTwoWay.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var4 = function isAuthorizedAppTwoWay(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 0;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var1 = var1.ConsoleOAuthApplications;
            var1 = var1.XBOX_APPLICATION_ID;
            var1 = var1 === var4;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var3.bind(var5)(var2);
            var2 = var2.ConsoleOAuthApplicationsSets;
            var3 = var2.PLAYSTATION_APPLICATION_IDS;
            var2 = var3.has;
            var1 = var2.bind(var3)(var4);
case 2:
            return var1;
        }
    };
    var _closure1_slot2 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 1;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/shouldWarnAuthorizedAppTwoWay.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function useShouldWarnAuthorizedAppTwoWay(arg1) {
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useShouldWarnAuthorizedAppTwoWay'] = var2;
    return var1;
})();