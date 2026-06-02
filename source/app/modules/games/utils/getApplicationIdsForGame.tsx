// app/modules/games/utils/getApplicationIdsForGame.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/games/utils/getApplicationIdsForGame.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function getApplicationIdsForGame(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var7 = arg2;
            var4 = arg3;
            var _closure2_slot0 = var7;
            var1 = global;
            var1 = var1.Set;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var11 = var3;
            var1 = new var11[var1](var10);
            var1 = var1 instanceof Object ? var1 : var3;
            var _closure2_slot1 = var1;
            var6 = null;
            if(!(var6 != var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1.add;
            var3 = var3.bind(var1)(var5);
            var3 = var7.getGame;
            var7 = var3.bind(var7)(var5);
            var3 = var6 == var7;
            var8 = var7;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var7.linkedApplications;
            var3 = var6 == var7;
            var8 = var7;
case 4:
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var8.forEach;
            var3 = function(arg1) {
                var3 = _closure2_slot1;
                var2 = var3.add;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var7.bind(var8)(var3);
case 6:
            var3 = var4.getApplication;
            var5 = var3.bind(var4)(var5);
            var3 = var6 == var5;
            var4 = var5;
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var5.linkedGames;
            var3 = var6 == var5;
            var4 = var5;
case 8:
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 10:
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure2_slot1;
                    var4 = var5.add;
                    var3 = var1.id;
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure2_slot0;
                    var2 = var3.getGame;
                    var1 = var1.id;
                    var2 = var2.bind(var3)(var1);
                    var4 = null;
                    var1 = var4 == var2;
                    var3 = var2;
                    if(var1) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var2 = var2.linkedApplications;
                    var1 = var4 == var2;
                    var3 = var2;
case 11:
                    if(var1) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var3 = _closure2_slot1;
                        var2 = var3.add;
                        var1 = arg1;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 13:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();