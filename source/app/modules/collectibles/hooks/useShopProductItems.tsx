// app/modules/collectibles/hooks/useShopProductItems.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var5 = var7[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot4 = var4;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = function ItemsSortingHat(arg1) {
            var3 = this;
            var4 = _closure1_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var4 = var3.sortByTypes;
            var2 = arg1;
            var2 = var4.bind(var3)(var2);
            var3['itemsByTypes'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'firstAvatarDecoration';
        var1['key'] = var2;
        var2 = function get() {
            var3 = this;
            var2 = var3.getFirstItemByType;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 3;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.CollectiblesItemType;
            var1 = var1.AVATAR_DECORATION;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['get'] = var2;
        var2 = new Array(5);
        var2[0] = var1;
        var1 = {};
        var6 = 'firstProfileEffect';
        var1['key'] = var6;
        var6 = function get() {
            var3 = this;
            var2 = var3.getFirstItemByType;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 3;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.CollectiblesItemType;
            var1 = var1.PROFILE_EFFECT;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['get'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'firstNameplate';
        var1['key'] = var6;
        var6 = function get() {
            var3 = this;
            var2 = var3.getFirstItemByType;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 3;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.CollectiblesItemType;
            var1 = var1.NAMEPLATE;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['get'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'getFirstItemByType';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = this;
                var3 = var1.itemsByTypes;
                var2 = var3.get;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var2 = null;
                if(!(var2 == var3)) { _fun0001_ip = 32; continue _fun0001 }
 28:
                var3 = new Array(0);
 32:
                var1 = 0;
                var1 = var3[var1];
                if(!(var2 == var1)) { _fun0001_ip = 46; continue _fun0001 }
 42:
                var2 = undefined;
                return var2;
 46:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'sortByTypes';
        var1['key'] = var6;
        var5 = function value(arg1) {
            var4 = arg1;
            var3 = var4.reduce;
            var1 = global;
            var1 = var1.Map;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var7 = var2;
            var1 = new var7[var1](var6);
            var2 = var1 instanceof Object ? var1 : var2;
            var1 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var4 = arg2;
                    var3 = var1.get;
                    var2 = var4.type;
                    var3 = var3.bind(var1)(var2);
                    var2 = null;
                    if(!(var2 == var3)) { _fun0002_ip = 53; continue _fun0002 }
 27:
                    var6 = var1.set;
                    var5 = var4.type;
                    var2 = new Array(1);
                    var2[0] = var4;
                    var2 = var6.bind(var1)(var5, var2);
                    _fun0002_ip = 63; continue _fun0002;
 53:
                    var2 = var3.push;
                    var2 = var2.bind(var3)(var4);
 63:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var5;
        var2[4] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot5 = var4;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/collectibles/hooks/useShopProductItems.tsx';
    var5 = var6.bind(var7)(var5);
    var3['ItemsSortingHat'] = var4;
    var4 = function(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot5;
            var1 = _closure2_slot0;
            var4 = var1.items;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var2 = var3.bind(var4)(var1, var2);
        var1 = {};
        var3 = var2.firstProfileEffect;
        var1['firstProfileEffect'] = var3;
        var3 = var2.firstAvatarDecoration;
        var1['firstAvatarDecoration'] = var3;
        var2 = var2.firstNameplate;
        var1['firstNameplate'] = var2;
        return var1;
    };
    var3['useShopProductItems'] = var4;
    var2 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var7 = arg1;
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 4;
            var3 = var9[var2];
            var1 = undefined;
            var3 = var8.bind(var1)(var3);
            var5 = var3.intl;
            var4 = var5.string;
            var3 = var9[var2];
            var3 = var8.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.7v0T9P;
            var6 = var4.bind(var5)(var3);
            var3 = var9[var2];
            var3 = var8.bind(var1)(var3);
            var5 = var3.intl;
            var4 = var5.string;
            var3 = var9[var2];
            var3 = var8.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.wR5wOj;
            var5 = var4.bind(var5)(var3);
            var3 = var9[var2];
            var3 = var8.bind(var1)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var9[var2];
            var2 = var8.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.x5CoXV;
            var11 = var3.bind(var4)(var2);
            var9 = var7.bundledProducts;
            var8 = null;
            var4 = var6;
            var3 = var5;
            var2 = var11;
            if(!(var8 != var9)) { _fun0003_ip = 324; continue _fun0003 }
 175:
            var9 = var7.bundledProducts;
            var9 = var9.length;
            var10 = 0;
            if(!(var9 > var10)) { _fun0003_ip = 219; continue _fun0003 }
 192:
            var9 = var7.bundledProducts;
            var10 = var9[var10];
            var12 = var8 == var10;
            var9 = undefined;
            if(var12) { _fun0003_ip = 216; continue _fun0003 }
 211:
            var9 = var10.name;
 216:
            var6 = var9;
 219:
            var9 = var7.bundledProducts;
            var9 = var9.length;
            var10 = 1;
            if(!(var9 > var10)) { _fun0003_ip = 264; continue _fun0003 }
 237:
            var9 = var7.bundledProducts;
            var10 = var9[var10];
            var12 = var8 == var10;
            var9 = undefined;
            if(var12) { _fun0003_ip = 261; continue _fun0003 }
 256:
            var9 = var10.name;
 261:
            var5 = var9;
 264:
            var9 = var7.bundledProducts;
            var10 = var9.length;
            var9 = 2;
            var4 = var6;
            var3 = var5;
            var2 = var11;
            if(!(var10 > var9)) { _fun0003_ip = 324; continue _fun0003 }
 291:
            var7 = var7.bundledProducts;
            var7 = var7[var9];
            var8 = var8 == var7;
            var1 = undefined;
            if(var8) { _fun0003_ip = 315; continue _fun0003 }
 310:
            var1 = var7.name;
 315:
            var2 = var1;
            var4 = var6;
            var3 = var5;
 324:
            var1 = {};
            var1['itemOneName'] = var4;
            var1['itemTwoName'] = var3;
            var1['itemThreeName'] = var2;
            return var1;
        }
    };
    var3['getBundleItemNames'] = var2;
    return var1;
})();