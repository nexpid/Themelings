// app/modules/slayer_storefront/SlayerStorefrontUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var7;
    var7 = var4.Routes;
    var _closure1_slot4 = var7;
    var4 = var4.SKUProductLines;
    var _closure1_slot5 = var4;
    var4 = 4;
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
            var2 = _closure1_slot5;
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
            var2 = _closure1_slot3;
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
        var5 = var2.pages;
        var4 = var5.map;
        var3 = function(arg1) {
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
        var3 = var4.bind(var5)(var3);
        var1['pages'] = var3;
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.keyBy;
        var3 = var2.assets;
        var2 = 'id';
        var2 = var4.bind(var5)(var3, var2);
        var1['assets'] = var2;
        return var1;
    };
    var3['transformSlayerApplicationStorefrontServer'] = var4;
    var4 = function transformSlayerSKUTenantMetadataFromServer(arg1) {
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
    var3['transformSlayerSKUTenantMetadataFromServer'] = var4;
    var4 = function getPrimaryCarouselItemInfo(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var12 = arg2;
            var4 = null;
            if(!(var4 != var12)) { _fun0005_ip = 13; continue _fun0005 }
case 14:
            var5 = var4 == var1;
            var3 = undefined;
            var2 = undefined;
            if(var5) { _fun0005_ip = 15; continue _fun0005 }
case 16:
            var5 = var1.tenantMetadata;
            var6 = var4 == var5;
            var2 = undefined;
            if(var6) { _fun0005_ip = 15; continue _fun0005 }
case 4:
            var5 = var5.socialLayer;
            var6 = var4 == var5;
            var2 = undefined;
            if(var6) { _fun0005_ip = 15; continue _fun0005 }
case 17:
            var2 = var5.carouselItems;
case 15:
            if(!(var4 != var2)) { _fun0005_ip = 13; continue _fun0005 }
case 18:
            var2 = var1.tenantMetadata;
            var2 = var2.socialLayer;
            var2 = var2.carouselItems;
            var5 = var2.length;
            var2 = 0;
            if(!(var2 !== var5)) { _fun0005_ip = 13; continue _fun0005 }
case 11:
            var1 = var1.tenantMetadata;
            var1 = var1.socialLayer;
            var1 = var1.carouselItems;
            var2 = var1[var2];
            var1 = var2.labelIconAssetId;
            if(!(var4 != var1)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
            var1 = {};
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 2;
            var6 = var9[var6];
            var7 = var7.bind(var3)(var6);
            var6 = var7.toURLSafe;
            var8 = _closure1_slot0;
            var5 = 3;
            var5 = var9[var5];
            var11 = var8.bind(var3)(var5);
            var10 = var11.getAssetURL;
            var15 = var2.labelIconAssetId;
            var14 = 512;
            var13 = 'png';
            var17 = var11;
            var16 = var12;
            var5 = var17[var10](var16, var15, var14, var13, var12);
            var5 = var6.bind(var7)(var5);
            var6 = var4 != var5;
            var4 = undefined;
            if(!var6) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            var4 = var5;
case 21:
            var1['primaryIconAsset'] = var4;
            var2 = var2.label;
            var1['primaryIconLabel'] = var2;
            _fun0005_ip = 23; continue _fun0005;
case 19:
            var2 = {};
            var2['primaryIconAsset'] = var3;
            var2['primaryIconLabel'] = var3;
            var1 = var2;
case 23:
            return var1;
case 13:
            var1 = {};
            var2 = undefined;
            var1['primaryIconAsset'] = var2;
            var1['primaryIconLabel'] = var2;
            return var1;
        }
    };
    var3['getPrimaryCarouselItemInfo'] = var4;
    var4 = function getGameItemThumbnailUrl(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var3 = null;
            if(!(var3 != var1)) { _fun0006_ip = 24; continue _fun0006 }
case 10:
            var2 = var1.thumbnailAssetId;
            if(!(var3 == var2)) { _fun0006_ip = 25; continue _fun0006 }
case 24:
            var2 = undefined;
            return var2;
case 25:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 2;
            var2 = var7[var2];
            var6 = undefined;
            var3 = var3.bind(var6)(var2);
            var2 = var3.toURLSafe;
            var5 = _closure1_slot0;
            var4 = 3;
            var4 = var7[var4];
            var8 = var5.bind(var6)(var4);
            var7 = var8.getAssetURL;
            var12 = var1.applicationId;
            var11 = var1.thumbnailAssetId;
            var10 = 512;
            var9 = 'png';
            var13 = var8;
            var1 = var13[var7](var12, var11, var10, var9, var8);
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getGameItemThumbnailUrl'] = var4;
    var4 = function getCardImageURL(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var2 = var1 == var3;
            var5 = undefined;
            var8 = undefined;
            if(var2) { _fun0007_ip = 26; continue _fun0007 }
case 27:
            var8 = var3.applicationId;
case 26:
            var2 = var1 == var3;
            var7 = undefined;
            if(var2) { _fun0007_ip = 28; continue _fun0007 }
case 29:
            var2 = var3.tenantMetadata;
            var4 = var1 == var2;
            var7 = undefined;
            if(var4) { _fun0007_ip = 28; continue _fun0007 }
case 30:
            var2 = var2.socialLayer;
            var4 = var1 == var2;
            var7 = undefined;
            if(var4) { _fun0007_ip = 28; continue _fun0007 }
case 31:
            var7 = var2.cardImageAssetId;
case 28:
            if(!(var1 == var7)) { _fun0007_ip = 32; continue _fun0007 }
case 33:
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0007_ip = 34; continue _fun0007 }
case 35:
            var2 = var3.thumbnailAssetId;
case 34:
            var7 = var2;
case 32:
            if(!(var1 != var7)) { _fun0007_ip = 36; continue _fun0007 }
case 37:
            if(!(var1 == var8)) { _fun0007_ip = 38; continue _fun0007 }
case 36:
            return var5;
case 38:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.toURLSafe;
            var4 = _closure1_slot0;
            var1 = 3;
            var1 = var6[var1];
            var6 = var4.bind(var5)(var1);
            var5 = var6.getAssetURL;
            var10 = 512;
            var9 = 'png';
            var13 = var6;
            var12 = var8;
            var11 = var7;
            var1 = var13[var5](var12, var11, var10, var9, var8);
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getCardImageURL'] = var4;
    var4 = function getCardBackgroundImageURL(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var3 = null;
            var4 = var3 == var1;
            var6 = undefined;
            var2 = undefined;
            if(var4) { _fun0008_ip = 39; continue _fun0008 }
case 27:
            var4 = var1.tenantMetadata;
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0008_ip = 39; continue _fun0008 }
case 6:
            var4 = var4.socialLayer;
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0008_ip = 39; continue _fun0008 }
case 40:
            var2 = var4.cardBackgroundImageAssetId;
case 39:
            if(!(var3 != var2)) { _fun0008_ip = 41; continue _fun0008 }
case 17:
            var4 = var3 == var1;
            var2 = undefined;
            if(var4) { _fun0008_ip = 33; continue _fun0008 }
case 42:
            var2 = var1.applicationId;
case 33:
            if(!(var3 == var2)) { _fun0008_ip = 43; continue _fun0008 }
case 41:
            return var6;
case 43:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 2;
            var2 = var7[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.toURLSafe;
            var5 = _closure1_slot0;
            var4 = 3;
            var4 = var7[var4];
            var8 = var5.bind(var6)(var4);
            var7 = var8.getAssetURL;
            var12 = var1.applicationId;
            var1 = var1.tenantMetadata;
            var1 = var1.socialLayer;
            var11 = var1.cardBackgroundImageAssetId;
            var10 = 1024;
            var9 = 'png';
            var13 = var8;
            var1 = var13[var7](var12, var11, var10, var9, var8);
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getCardBackgroundImageURL'] = var4;
    var2 = function getSKUShareURL(arg1, arg2) {
        var2 = arg2;
        var1 = global;
        var3 = var1.location;
        var5 = var3.protocol;
        var3 = var1.window;
        var3 = var3.GLOBAL_ENV;
        var4 = var3.WEBAPP_ENDPOINT;
        var8 = _closure1_slot4;
        var7 = var8.GAME_SHOP;
        var6 = var2.id;
        var3 = var2.slug;
        var2 = arg1;
        var3 = var7.bind(var8)(var2, var6, var3);
        var1 = var1.HermesInternal;
        var2 = var1.concat;
        var1 = '';
        var1 = var2.bind(var1)(var5, var4, var3);
        return var1;
    };
    var3['getSKUShareURL'] = var2;
    return var1;
})();