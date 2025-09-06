// app/modules/collectibles/records/HeroBlockRecord.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.HeroBannerConfigRecord;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AssetDisplayConfigRecord;
    var _closure1_slot5 = var4;
    var2 = function() {
        var5 = function HeroBlockRecord(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = arg1;
                var3 = this;
                var6 = _closure1_slot2;
                var4 = _closure2_slot0;
                var1 = undefined;
                var4 = var6.bind(var1)(var3, var4);
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 4;
                var4 = var7[var4];
                var4 = var6.bind(var1)(var4);
                var4 = var4.ShopBlockType;
                var4 = var4.HERO;
                var3['type'] = var4;
                var4 = var2.category_sku_id;
                var3['categorySkuId'] = var4;
                var4 = var2.name;
                var3['name'] = var4;
                var6 = var2.summary;
                var4 = var6.trim;
                var4 = var4.bind(var6)();
                var3['summary'] = var4;
                var4 = var2.category_store_listing_id;
                var3['categoryStoreListingId'] = var4;
                var4 = var2.fallback_banner_url;
                var3['fallbackBannerUrl'] = var4;
                var4 = var2.banner_asset;
                var3['bannerAsset'] = var4;
                var4 = var2.logo_url;
                var3['logoUrl'] = var4;
                var4 = var2.title;
                var3['title'] = var4;
                var4 = var2.ranked_sku_ids;
                var3['rankedSkuIds'] = var4;
                var4 = var2.unpublished_at;
                var6 = null;
                var7 = var6 != var4;
                var4 = null;
                if(!var7) { _fun0001_ip = 239; continue _fun0001 }
 205:
                var7 = global;
                var9 = var7.Date;
                var11 = var2.unpublished_at;
                var8 = var9.prototype;
                var8 = Object.create(var8, {constructor: {value: var9}});
                var12 = var8;
                var7 = new var12[var9](var11, var10);
                var4 = var7 instanceof Object ? var7 : var8;
 239:
                var3['unpublishedAt'] = var4;
                var4 = var2.banner_text_color;
                var3['bannerTextColor'] = var4;
                var4 = var2.config;
                var7 = var6 != var4;
                var4 = undefined;
                if(!var7) { _fun0001_ip = 291; continue _fun0001 }
 271:
                var9 = _closure1_slot4;
                var8 = var9.fromServer;
                var7 = var2.config;
                var4 = var8.bind(var9)(var7);
 291:
                var3['bannerConfig'] = var4;
                var4 = var2.logo_display_config;
                var6 = var6 != var4;
                var4 = undefined;
                if(!var6) { _fun0001_ip = 335; continue _fun0001 }
 314:
                var7 = _closure1_slot5;
                var6 = var7.fromServer;
                var5 = var2.logo_display_config;
                var4 = var6.bind(var7)(var5);
 335:
                var3['logoConfig'] = var4;
                var4 = var2.mobile_title;
                var3['mobileTitle'] = var4;
                var4 = var2.mobile_summary;
                var3['mobileSummary'] = var4;
                var2 = var2.mobile_products_title;
                var3['mobileProductsTitle'] = var2;
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
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/records/HeroBlockRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['HeroBlockRecord'] = var2;
    return var1;
})();