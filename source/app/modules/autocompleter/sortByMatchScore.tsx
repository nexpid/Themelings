// app/modules/autocompleter/sortByMatchScore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = native7;
    var1 = 0;
    var4 = var2[var1];
    var2 = native2;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/autocompleter/sortByMatchScore.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function sortByMatchScore(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = arg2;
            var4 = var1.score;
            var3 = var2.score;
            if(!(var4 === var3)) { _fun0001_ip = 135; continue _fun0001 }
 22:
            var5 = var1.sortable;
            var6 = null;
            if(!(var6 == var5)) { _fun0001_ip = 62; continue _fun0001 }
 34:
            var7 = var1.comparator;
            var4 = var6 == var7;
            var3 = undefined;
            if(var4) { _fun0001_ip = 59; continue _fun0001 }
 49:
            var4 = var7.toLocaleLowerCase;
            var3 = var4.bind(var7)();
 59:
            var5 = var3;
 62:
            var7 = var6 != var5;
            var4 = '';
            var3 = var4;
            if(!var7) { _fun0001_ip = 79; continue _fun0001 }
 76:
            var3 = var5;
 79:
            var5 = var1.sortable;
            if(!(var6 == var5)) { _fun0001_ip = 117; continue _fun0001 }
 89:
            var9 = var2.comparator;
            var8 = var6 == var9;
            var7 = undefined;
            if(var8) { _fun0001_ip = 114; continue _fun0001 }
 104:
            var8 = var9.toLocaleLowerCase;
            var7 = var8.bind(var9)();
 114:
            var5 = var7;
 117:
            var6 = var6 != var5;
            if(!var6) { _fun0001_ip = 127; continue _fun0001 }
 124:
            var4 = var5;
 127:
            if(!(!(var3 < var4))) { _fun0001_ip = 158; continue _fun0001 }
 131:
            if(!(!(var3 > var4))) { _fun0001_ip = 153; continue _fun0001 }
 135:
            var2 = var2.score;
            var1 = var1.score;
            var1 = var2 - var1;
            return var1;
 153:
            var1 = 1;
            return var1;
 158:
            var1 = -1;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();