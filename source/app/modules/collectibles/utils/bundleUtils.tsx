// app/modules/collectibles/utils/bundleUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = function extractBundleItems(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.ItemsSortingHat;
        var1 = arg1;
        var4 = var1.items;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var2 = var1 instanceof Object ? var1 : var2;
        var1 = {};
        var3 = var2.firstProfileEffect;
        var1['firstProfileEffect'] = var3;
        var3 = var2.firstAvatarDecoration;
        var1['firstAvatarDecoration'] = var3;
        var2 = var2.firstNameplate;
        var1['firstNameplate'] = var2;
        return var1;
    };
    var _closure1_slot2 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/utils/bundleUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isValidCollectiblesBundle(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot2;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var2 = var1.firstAvatarDecoration;
            var5 = var1.firstProfileEffect;
            var4 = var1.firstNameplate;
            var3 = null;
            var1 = var3 != var2;
            if(!var1) { _fun0001_ip = 48; continue _fun0001 }
 44:
            var1 = var3 != var5;
 48:
            if(!var1) { _fun0001_ip = 55; continue _fun0001 }
 51:
            var1 = var3 == var4;
 55:
            if(var1) { _fun0001_ip = 79; continue _fun0001 }
 58:
            var2 = var3 != var2;
            if(!var2) { _fun0001_ip = 69; continue _fun0001 }
 65:
            var2 = var3 != var5;
 69:
            if(!var2) { _fun0001_ip = 76; continue _fun0001 }
 72:
            var2 = var3 != var4;
 76:
            var1 = var2;
 79:
            return var1;
        }
    };
    var3['isValidCollectiblesBundle'] = var4;
    var2 = function bundleContainsNameplates(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var1 = var3[var1];
            var3 = undefined;
            var5 = var5.bind(var3)(var1);
            var1 = var5.isBundleProduct;
            var1 = var1.bind(var5)(var4);
            var5 = !var1;
            var1 = !var5;
            if(var5) { _fun0002_ip = 69; continue _fun0002 }
 48:
            var2 = _closure1_slot2;
            var2 = var2.bind(var3)(var4);
            var3 = var2.firstNameplate;
            var2 = null;
            var1 = var2 != var3;
 69:
            return var1;
        }
    };
    var3['bundleContainsNameplates'] = var2;
    return var1;
})();