// app/modules/collectibles/records/FramesProductShelfBlockRecord.tsx
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
    var2 = function() {
        var5 = function FramesProductShelfBlockRecord(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = arg1;
                var3 = this;
                var6 = _closure1_slot2;
                var5 = _closure2_slot0;
                var1 = undefined;
                var5 = var6.bind(var1)(var3, var5);
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 2;
                var4 = var6[var4];
                var4 = var5.bind(var1)(var4);
                var4 = var4.ShopBlockType;
                var4 = var4.FRAMES_PRODUCT_SHELF;
                var3['type'] = var4;
                var4 = var2.title;
                var3['title'] = var4;
                var4 = var2.category_sku_id;
                var3['categorySkuId'] = var4;
                var4 = var2.category_store_listing_id;
                var3['categoryStoreListingId'] = var4;
                var4 = var2.ranked_sku_ids;
                var5 = null;
                if(!(var5 == var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = new Array(0);
case 2:
                var3['rankedSkuIds'] = var4;
                var4 = var2.background_image;
                var3['backgroundImage'] = var4;
                var2 = var2.button_text;
                var3['buttonText'] = var2;
                return var1;
            }
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
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/records/FramesProductShelfBlockRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['FramesProductShelfBlockRecord'] = var2;
    return var1;
})();