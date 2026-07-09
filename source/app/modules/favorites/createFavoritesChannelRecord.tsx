// app/modules/favorites/createFavoritesChannelRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/favorites/createFavoritesChannelRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createFavoritesChannelRecord(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg2;
            var5 = arg3;
            var4 = var5.constructor;
            var1 = var5.toJS;
            var7 = var1.bind(var5)();
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var8 = var3;
            var1 = new var8[var4](var7, var6);
            var1 = var1 instanceof Object ? var1 : var3;
            var3 = var2.order;
            var1['position_'] = var3;
            var4 = var2.nickname;
            var3 = null;
            var4 = var3 != var4;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var5.type;
            var5 = _closure1_slot0;
            var5 = var5.DM;
            var4 = var6 !== var5;
case 2:
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var2.nickname;
            var1['name'] = var4;
case 4:
            var4 = var2.parentId;
            if(!(var3 != var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var2.parentId;
            var4 = arg1;
            var4 = var5 in var4;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var5 = var1.parent_id;
            var4 = undefined;
            if(!(var4 === var5)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var1['parent_id'] = var3;
            _fun0001_ip = 9; continue _fun0001;
case 8:
            var2 = var2.parentId;
            var1['parent_id'] = var2;
case 9:
            return var1;
        }
    };
    var3['createFavoritesChannelRecord'] = var2;
    return var1;
})();