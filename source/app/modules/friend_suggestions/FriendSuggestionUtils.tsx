// app/modules/friend_suggestions/FriendSuggestionUtils.tsx
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
    var2 = 'modules/friend_suggestions/FriendSuggestionUtils.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function getSuggestedContactNameForSuggestion(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = arg2;
            var3 = null;
            var5 = var3 == var6;
            var2 = undefined;
            var1 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var6.contactNames;
case 2:
            var5 = var3 != var1;
            var1 = undefined;
            if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var3 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var6.contactNames;
            var5 = var7.length;
case 6:
            var9 = 2;
            var5 = var5 >= var9;
            var1 = undefined;
            if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 8:
            var7 = var3 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var8 = var6.contactNames;
            var7 = var8.slice;
            var6 = 0;
            var8 = var7.bind(var8)(var6, var9);
            var7 = var8.join;
            var6 = ' ';
            var7 = var7.bind(var8)(var6);
            var6 = var7.trim;
            var5 = var6.bind(var7)();
case 9:
            var1 = var5;
case 4:
            if(!(var3 != var1)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            if(!(var3 == var4)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            if(!(var3 == var1)) { _fun0001_ip = 15; continue _fun0001 }
case 13:
            if(!(var3 != var4)) { _fun0001_ip = 11; continue _fun0001 }
case 16:
            if(!(var4 !== var1)) { _fun0001_ip = 11; continue _fun0001 }
case 17:
            var3 = var4.split;
            var6 = ' ';
            var3 = var3.bind(var4)(var6);
            var5 = 0;
            var4 = var3[var5];
            var3 = var1.split;
            var3 = var3.bind(var1)(var6);
            var3 = var3[var5];
            if(!(var4 === var3)) { _fun0001_ip = 18; continue _fun0001 }
case 11:
            return var2;
case 18:
            return var1;
case 15:
            return var1;
        }
    };
    var3['getSuggestedContactNameForSuggestion'] = var2;
    return var1;
})();