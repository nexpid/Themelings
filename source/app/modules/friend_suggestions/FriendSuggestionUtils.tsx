// app/modules/friend_suggestions/FriendSuggestionUtils.tsx
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
    var2 = 'modules/friend_suggestions/FriendSuggestionUtils.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function getSuggestedContactNameForSuggestion(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var6 = arg2;
            var3 = null;
            var5 = var3 == var6;
            var2 = undefined;
            var1 = undefined;
            if(var5) { _fun0001_ip = 25; continue _fun0001 }
 19:
            var1 = var6.contactNames;
 25:
            var5 = var3 != var1;
            var1 = undefined;
            if(!var5) { _fun0001_ip = 121; continue _fun0001 }
 34:
            var7 = var3 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 54; continue _fun0001 }
 43:
            var7 = var6.contactNames;
            var5 = var7.length;
 54:
            var9 = 2;
            var5 = var5 >= var9;
            var1 = undefined;
            if(!var5) { _fun0001_ip = 121; continue _fun0001 }
 66:
            var7 = var3 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 118; continue _fun0001 }
 75:
            var8 = var6.contactNames;
            var7 = var8.slice;
            var6 = 0;
            var8 = var7.bind(var8)(var6, var9);
            var7 = var8.join;
            var6 = ' ';
            var7 = var7.bind(var8)(var6);
            var6 = var7.trim;
            var5 = var6.bind(var7)();
 118:
            var1 = var5;
 121:
            if(!(var3 != var1)) { _fun0001_ip = 179; continue _fun0001 }
 125:
            if(!(var3 == var4)) { _fun0001_ip = 133; continue _fun0001 }
 129:
            if(!(var3 == var1)) { _fun0001_ip = 183; continue _fun0001 }
 133:
            if(!(var3 != var4)) { _fun0001_ip = 179; continue _fun0001 }
 137:
            if(!(var4 !== var1)) { _fun0001_ip = 179; continue _fun0001 }
 141:
            var3 = var4.split;
            var6 = ' ';
            var3 = var3.bind(var4)(var6);
            var5 = 0;
            var4 = var3[var5];
            var3 = var1.split;
            var3 = var3.bind(var1)(var6);
            var3 = var3[var5];
            if(!(var4 === var3)) { _fun0001_ip = 181; continue _fun0001 }
 179:
            return var2;
 181:
            return var1;
 183:
            return var1;
        }
    };
    var3['getSuggestedContactNameForSuggestion'] = var2;
    return var1;
})();