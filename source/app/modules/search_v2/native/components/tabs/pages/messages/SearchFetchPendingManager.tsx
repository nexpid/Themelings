// app/modules/search_v2/native/components/tabs/pages/messages/SearchFetchPendingManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native3;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var6 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var4);
    var4 = 1;
    var4 = var5[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = function SearchFetchPendingManager() {
        var3 = this;
        var _closure2_slot0 = var3;
        var5 = _closure1_slot2;
        var4 = _closure1_slot5;
        var1 = undefined;
        var4 = var5.bind(var1)(var3, var4);
        var4 = global;
        var4 = var4.Set;
        var5 = var4.prototype;
        var5 = Object.create(var5, {constructor: {value: var4}});
        var8 = var5;
        var4 = new var8[var4](var7);
        var4 = var4 instanceof Object ? var4 : var5;
        var3['pending'] = var4;
        var4 = function(arg1) {
            var1 = _closure2_slot0;
            var3 = var1.pending;
            var2 = var3.add;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var3['add'] = var4;
        var4 = function(arg1) {
            var1 = _closure2_slot0;
            var3 = var1.pending;
            var2 = var3.delete;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var3['remove'] = var4;
        var4 = function(arg1) {
            var1 = _closure2_slot0;
            var3 = var1.pending;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3['has'] = var4;
        var4 = function(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = arg2;
                var4 = _closure2_slot0;
                var2 = var4.has;
                var2 = var2.bind(var4)(var3);
                if(!var2) { _fun0001_ip = 81; continue _fun0001 }
 23:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 3;
                var4 = var4[var2];
                var2 = undefined;
                var5 = var5.bind(var2)(var4);
                var4 = var5.fetchNextMessages;
                var2 = arg1;
                var2 = var4.bind(var5)(var2, var3);
                if(!var2) { _fun0001_ip = 81; continue _fun0001 }
 66:
                var2 = _closure2_slot0;
                var1 = var2.remove;
                var1 = var1.bind(var2)(var3);
 81:
                var1 = undefined;
                return var1;
            }
        };
        var3['flush'] = var4;
        var2 = function() {
            var2 = _closure2_slot0;
            var1 = global;
            var1 = var1.Set;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var4 = var3;
            var1 = new var4[var1](var3);
            var1 = var1 instanceof Object ? var1 : var3;
            var2['pending'] = var1;
            var1 = undefined;
            return var1;
        };
        var3['reset'] = var2;
        return var1;
    };
    var _closure1_slot5 = var4;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search_v2/native/components/tabs/pages/messages/SearchFetchPendingManager.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSearchFetchPendingManager(arg1) {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 4;
        var1 = var5[var1];
        var5 = undefined;
        var4 = var4.bind(var5)(var1);
        var1 = function() {
            var1 = _closure1_slot4;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var3 = var2;
            var1 = new var3[var1](var2);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1 = var4.bind(var5)(var1);
        var _closure2_slot0 = var1;
        var5 = _closure1_slot3;
        var4 = var5.subscribeTextInputValue;
        var3 = arg1;
        var2 = function(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg2;
                var1 = arg1;
                if(!(var2 !== var1)) { _fun0002_ip = 27; continue _fun0002 }
 10:
                var2 = _closure2_slot0;
                var1 = var2.reset;
                var1 = var1.bind(var2)();
 27:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['useSearchFetchPendingManager'] = var2;
    return var1;
})();