// app/modules/autocompleter/sortByMatchScore.tsx
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
    var2 = 'modules/autocompleter/sortByMatchScore.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function sortByMatchScore(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = arg2;
            var4 = var1.score;
            var3 = var2.score;
            if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var1.sortable;
            var6 = null;
            if(!(var6 == var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var1.comparator;
            var4 = var6 == var7;
            var3 = undefined;
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var7.toLocaleLowerCase;
            var3 = var4.bind(var7)();
case 6:
            var5 = var3;
case 4:
            var7 = var6 != var5;
            var4 = '';
            var3 = var4;
            if(!var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var5;
case 8:
            var5 = var1.sortable;
            if(!(var6 == var5)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = var2.comparator;
            var8 = var6 == var9;
            var7 = undefined;
            if(var8) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = var9.toLocaleLowerCase;
            var7 = var8.bind(var9)();
case 12:
            var5 = var7;
case 10:
            var6 = var6 != var5;
            if(!var6) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var4 = var5;
case 14:
            if(!(!(var3 < var4))) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            if(!(!(var3 > var4))) { _fun0001_ip = 18; continue _fun0001 }
case 2:
            var2 = var2.score;
            var1 = var1.score;
            var1 = var2 - var1;
            return var1;
case 18:
            var1 = 1;
            return var1;
case 16:
            var1 = -1;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();