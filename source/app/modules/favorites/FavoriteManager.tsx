// app/modules/favorites/FavoriteManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot7 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function handleChannelDelete(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var5 = var1.id;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.removeFavoriteChannel;
        var2 = {};
        var6 = false;
        var2['trackAnalytics'] = var6;
        var2 = var3.bind(var4)(var5, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function handleCategoryCollapse(arg1) {
        var1 = arg1;
        var5 = var1.id;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.setFavoriteCategoryCollapsed;
        var2 = true;
        var2 = var3.bind(var4)(var5, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function handleCategoryExpand(arg1) {
        var1 = arg1;
        var5 = var1.id;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.setFavoriteCategoryCollapsed;
        var2 = false;
        var2 = var3.bind(var4)(var5, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function handleCategoryCollapseAll(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guildId;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 6;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isFavoritesGuildId;
            var3 = var3.bind(var4)(var5);
            if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 5;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.setAllFavoriteCategoriesCollapsed;
            var2 = true;
            var2 = var3.bind(var4)(var2);
case 6:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function handleCategoryExpandAll(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guildId;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 6;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isFavoritesGuildId;
            var3 = var3.bind(var4)(var5);
            if(!var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 5;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.setAllFavoriteCategoriesCollapsed;
            var2 = false;
            var2 = var3.bind(var4)(var2);
case 6:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function FavoriteManager(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot3;
                var2 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot7;
                var1 = var1.bind(var4)();
                if(var1) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0004_ip = 10; continue _fun0004;
case 8:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 10:
                var1 = var2.bind(var4)(var5, var1);
                var2 = {};
                var4 = _closure1_slot8;
                var2['CHANNEL_DELETE'] = var4;
                var4 = _closure1_slot9;
                var2['CATEGORY_COLLAPSE'] = var4;
                var4 = _closure1_slot10;
                var2['CATEGORY_EXPAND'] = var4;
                var4 = _closure1_slot11;
                var2['CATEGORY_COLLAPSE_ALL'] = var4;
                var3 = _closure1_slot12;
                var2['CATEGORY_EXPAND_ALL'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot2;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/favorites/FavoriteManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();