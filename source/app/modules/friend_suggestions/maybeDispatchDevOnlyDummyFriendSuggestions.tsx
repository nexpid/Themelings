// app/modules/friend_suggestions/maybeDispatchDevOnlyDummyFriendSuggestions.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var5 = native7;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/friend_suggestions/maybeDispatchDevOnlyDummyFriendSuggestions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function maybeDispatchDevOnlyDummyFriendSuggestions() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arguments[0];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0001_ip = 23; continue _fun0001 }
 9:
            var2 = global;
            var2 = var2.Number;
            var5 = var2.MAX_VALUE;
 23:
            var3 = global;
            var6 = var3.Object;
            var4 = var6.values;
            var7 = _closure1_slot0;
            var2 = var7.getUsers;
            var2 = var2.bind(var7)();
            var2 = var4.bind(var6)(var2);
            var4 = var3.Math;
            var3 = var4.min;
            var2 = var2.length;
            var2 = var3.bind(var4)(var2, var5);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();