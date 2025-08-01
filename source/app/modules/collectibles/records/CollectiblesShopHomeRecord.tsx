// app/modules/collectibles/records/CollectiblesShopHomeRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.CountdownTimerBlockRecord;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FeaturedBlockRecord;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FeedBlockRecord;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HeroBlockRecord;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ShelfBlockRecord;
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.WideBannerBlockRecord;
    var _closure1_slot10 = var4;
    var2 = function() {
        var5 = function CollectiblesShopHomeRecord(arg1) {
            var4 = arg1;
            var3 = this;
            var6 = _closure1_slot2;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var6.bind(var1)(var3, var5);
            var7 = var4.shop_blocks;
            var6 = var7.map;
            var5 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var3 = arg1;
                    var5 = var3.type;
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var7 = 9;
                    var4 = var2[var7];
                    var2 = undefined;
                    var4 = var6.bind(var2)(var4);
                    var4 = var4.ShopBlockType;
                    var4 = var4.HERO;
                    if(!(var4 !== var5)) { _fun0001_ip = 310; continue _fun0001 }
 52:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var7];
                    var4 = var6.bind(var2)(var4);
                    var4 = var4.ShopBlockType;
                    var4 = var4.FEATURED;
                    if(!(var4 !== var5)) { _fun0001_ip = 293; continue _fun0001 }
 88:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var7];
                    var4 = var6.bind(var2)(var4);
                    var4 = var4.ShopBlockType;
                    var4 = var4.FEED;
                    if(!(var4 !== var5)) { _fun0001_ip = 276; continue _fun0001 }
 124:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var7];
                    var4 = var6.bind(var2)(var4);
                    var4 = var4.ShopBlockType;
                    var4 = var4.WIDE_BANNER;
                    if(!(var4 !== var5)) { _fun0001_ip = 259; continue _fun0001 }
 157:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var7];
                    var4 = var6.bind(var2)(var4);
                    var4 = var4.ShopBlockType;
                    var4 = var4.SHELF;
                    if(!(var4 !== var5)) { _fun0001_ip = 242; continue _fun0001 }
 190:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var7];
                    var4 = var6.bind(var2)(var4);
                    var4 = var4.ShopBlockType;
                    var4 = var4.COUNTDOWN_TIMER;
                    if(!(var4 !== var5)) { _fun0001_ip = 225; continue _fun0001 }
 223:
                    return var2;
 225:
                    var4 = _closure1_slot5;
                    var2 = var4.fromServer;
                    var2 = var2.bind(var4)(var3);
                    return var2;
 242:
                    var4 = _closure1_slot9;
                    var2 = var4.fromServer;
                    var2 = var2.bind(var4)(var3);
                    return var2;
 259:
                    var4 = _closure1_slot10;
                    var2 = var4.fromServer;
                    var2 = var2.bind(var4)(var3);
                    return var2;
 276:
                    var4 = _closure1_slot7;
                    var2 = var4.fromServer;
                    var2 = var2.bind(var4)(var3);
                    return var2;
 293:
                    var4 = _closure1_slot6;
                    var2 = var4.fromServer;
                    var2 = var2.bind(var4)(var3);
                    return var2;
 310:
                    var2 = _closure1_slot8;
                    var1 = var2.fromServer;
                    var1 = var1.bind(var2)(var3);
                    return var1;
                }
            };
            var7 = var6.bind(var7)(var5);
            var6 = var7.filter;
            var5 = function(arg1) {
                var2 = undefined;
                var1 = arg1;
                var1 = var2 !== var1;
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var3['shopBlocks'] = var5;
            var5 = var4.categories;
            var4 = var5.map;
            var2 = function(arg1) {
                var3 = _closure1_slot4;
                var2 = var3.fromServer;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            var3['categories'] = var2;
            return var1;
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var1 = {};
        var3 = 'fromServer';
        var1['key'] = var3;
        var2 = function value(arg1) {
            var3 = _closure2_slot0;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = arg1;
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1['value'] = var2;
        var3 = new Array(1);
        var3[0] = var1;
        var2 = undefined;
        var1 = null;
        var1 = var4.bind(var2)(var5, var1, var3);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/records/CollectiblesShopHomeRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['CollectiblesShopHomeRecord'] = var2;
    return var1;
})();