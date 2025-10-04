// app/modules/slayer_storefront/SlayerStorefrontUtils.tsx
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
    var7 = var4.GuildFeatures;
    var _closure1_slot0 = var7;
    var4 = var4.SKUProductLines;
    var _closure1_slot1 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/slayer_storefront/SlayerStorefrontUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isGameItemSKU(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2.productLine;
            var2 = _closure1_slot1;
            var2 = var2.SOCIAL_LAYER_GAME_ITEM;
            var1 = var3 === var2;
case 2:
            return var1;
        }
    };
    var3['isGameItemSKU'] = var4;
    var4 = function hasSocialLayerStorefront(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 3:
            var4 = var2.features;
            var3 = var4.has;
            var2 = _closure1_slot0;
            var2 = var2.SOCIAL_LAYER_STOREFRONT;
            var1 = var3.bind(var4)(var2);
case 4:
            return var1;
        }
    };
    var3['hasSocialLayerStorefront'] = var4;
    var4 = function transformSlayerApplicationStorefrontServer(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.application_id;
        var1['applicationId'] = var3;
        var3 = var2.title;
        var1['title'] = var3;
        var3 = var2.logo_asset_id;
        var1['logoAssetId'] = var3;
        var4 = var2.pages;
        var3 = var4.map;
        var2 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var1 = {};
                var2 = var3.title;
                var1['title'] = var2;
                var2 = var3.leaderboard;
                var5 = null;
                var6 = var5 != var2;
                var4 = undefined;
                if(!var6) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                var6 = {};
                var7 = var3.leaderboard;
                var7 = var7.title;
                var6['title'] = var7;
                var7 = var3.leaderboard;
                var7 = var7.description;
                var6['description'] = var7;
                var7 = var3.leaderboard;
                var7 = var7.background_image_asset_id;
                var6['backgroundImageAssetId'] = var7;
                var4 = var6;
case 5:
                var1['leaderboard'] = var4;
                var4 = var3.sku_ids;
                var1['skuIds'] = var4;
                var4 = var3.sections;
                var4 = var5 != var4;
                var2 = undefined;
                if(!var4) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                var5 = var3.sections;
                var4 = var5.map;
                var3 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var3 = var2.title;
                    var1['title'] = var3;
                    var2 = var2.sku_ids;
                    var1['skuIds'] = var2;
                    return var1;
                };
                var2 = var4.bind(var5)(var3);
case 7:
                var1['sections'] = var2;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var1['pages'] = var2;
        return var1;
    };
    var3['transformSlayerApplicationStorefrontServer'] = var4;
    var2 = function transformSlayerSKUTenantMetadataFromServer(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var4 = null;
            if(!(var4 == var2)) { _fun0004_ip = 9; continue _fun0004 }
case 10:
            var1 = undefined;
            return var1;
case 9:
            var1 = {};
            var6 = var2.carousel_items;
            var5 = var6.map;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.thumbnail_asset_id;
                var1['thumbnailAssetId'] = var3;
                var3 = var2.asset_id;
                var1['assetId'] = var3;
                var3 = var2.background_asset_id;
                var1['backgroundAssetId'] = var3;
                var3 = var2.youtube_video_id;
                var1['youtubeVideoId'] = var3;
                var3 = var2.label;
                var1['label'] = var3;
                var2 = var2.label_icon_asset_id;
                var1['labelIconAssetId'] = var2;
                return var1;
            };
            var3 = var5.bind(var6)(var3);
            var1['carouselItems'] = var3;
            var3 = var2.label;
            var1['label'] = var3;
            var3 = var2.expires_at;
            var4 = var4 != var3;
            var3 = undefined;
            if(!var4) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var4 = global;
            var6 = var4.Date;
            var7 = var2.expires_at;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var8 = var5;
            var4 = new var8[var6](var7, var6);
            var3 = var4 instanceof Object ? var4 : var5;
case 11:
            var1['expiresAt'] = var3;
            var3 = var2.card_image_asset_id;
            var1['cardImageAssetId'] = var3;
            var2 = var2.card_background_image_asset_id;
            var1['cardBackgroundImageAssetId'] = var2;
            return var1;
        }
    };
    var3['transformSlayerSKUTenantMetadataFromServer'] = var2;
    return var1;
})();