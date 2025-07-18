// app/modules/favorites/createFavoritesChannelRecord.tsx
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
    var2 = 'modules/favorites/createFavoritesChannelRecord.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function createFavoritesChannelRecord(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg2;
            var3 = arg3;
            var4 = var3.constructor;
            var1 = var3.toJS;
            var6 = var1.bind(var3)();
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var7 = var3;
            var1 = new var7[var4](var6, var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var3 = var2.order;
            var1['position_'] = var3;
            var3 = var2.nickname;
            var4 = null;
            if(!(var4 != var3)) { _fun0001_ip = 77; continue _fun0001 }
 65:
            var3 = var2.nickname;
            var1['name'] = var3;
 77:
            var3 = var2.parentId;
            var3 = var4 != var3;
            if(!var3) { _fun0001_ip = 103; continue _fun0001 }
 90:
            var5 = var2.parentId;
            var4 = arg1;
            var3 = var5 in var4;
 103:
            if(!var3) { _fun0001_ip = 118; continue _fun0001 }
 106:
            var2 = var2.parentId;
            var1['parent_id'] = var2;
 118:
            return var1;
        }
    };
    var3['createFavoritesChannelRecord'] = var2;
    return var1;
})();