// app/modules/slayer_storefront/SlayerStorefrontUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var8 = require;
        var7 = metroImportDefault;
        var3 = exports;
        var9 = dependencyMap;
        var _closure1_slot0 = var8;
        var _closure1_slot1 = var7;
        var _closure1_slot2 = var9;
        var5 = function getMarketingGuildId() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = _closure1_slot4;
                var3 = var4.getGuild;
                var2 = _closure1_slot6;
                var2 = var3.bind(var4)(var2);
                var3 = null;
                if(!(var3 != var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var5 = var2.features;
                var4 = var5.has;
                var3 = _closure1_slot7;
                var3 = var3.SOCIAL_LAYER_STOREFRONT;
                var3 = var4.bind(var5)(var3);
                if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 2:
                var1 = _closure1_slot5;
                _fun0002_ip = 5; continue _fun0002;
case 4:
                var1 = var2.id;
case 5:
                return var1;
            }
        };
        var _closure1_slot11 = var5;
        var4 = function hasSocialLayerStorefront(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var5 = var2.id;
                var1 = _closure1_slot11;
                var3 = undefined;
                var1 = var1.bind(var3)();
                var1 = var5 === var1;
                if(var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var6 = var2.features;
                var2 = null;
                var5 = var2 == var6;
                var3 = undefined;
                if(var5) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var5 = var6.has;
                var4 = _closure1_slot7;
                var4 = var4.SOCIAL_LAYER_STOREFRONT;
                var3 = var5.bind(var6)(var4);
case 8:
                var2 = var2 != var3;
                if(!var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var2 = var3;
case 10:
                var1 = var2;
case 6:
                return var1;
            }
        };
        var _closure1_slot12 = var4;
        var1 = global;
        var11 = var1.Object;
        var10 = var11.defineProperty;
        var6 = {};
        var1 = true;
        var6['value'] = var1;
        var1 = '__esModule';
        var1 = var10.bind(var11)(var3, var1, var6);
        var1 = 0;
        var6 = var9[var1];
        var1 = undefined;
        var6 = var7.bind(var1)(var6);
        var _closure1_slot3 = var6;
        var6 = 1;
        var6 = var9[var6];
        var6 = var7.bind(var1)(var6);
        var _closure1_slot4 = var6;
        var6 = 2;
        var6 = var9[var6];
        var6 = var8.bind(var1)(var6);
        var7 = var6.STOREFRONT_MARKETING_GUILD_ID;
        var _closure1_slot5 = var7;
        var6 = var6.STOREFRONT_MARKETING_GUILD_ID_TEST;
        var _closure1_slot6 = var6;
        var6 = 3;
        var6 = var9[var6];
        var6 = var8.bind(var1)(var6);
        var7 = var6.GuildFeatures;
        var _closure1_slot7 = var7;
        var7 = var6.Routes;
        var _closure1_slot8 = var7;
        var6 = var6.SKUProductLines;
        var _closure1_slot9 = var6;
        var6 = 4;
        var6 = var9[var6];
        var6 = var8.bind(var1)(var6);
        var7 = var6.SUPPORTS_WEBP;
        var6 = 'jpg';
        if(!var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
        var6 = 'webp';
case 12:
        var _closure1_slot10 = var6;
        var7 = 8;
        var7 = var9[var7];
        var9 = var8.bind(var1)(var7);
        var8 = var9.fileFinishedImporting;
        var7 = 'modules/slayer_storefront/SlayerStorefrontUtils.tsx';
        var7 = var8.bind(var9)(var7);
        var3['LARGE_ASSET_FORMAT'] = var6;
        var6 = function isGameItemSKU(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var3 = var2.productLine;
                var2 = _closure1_slot9;
                var2 = var2.SOCIAL_LAYER_GAME_ITEM;
                var1 = var3 === var2;
case 14:
                return var1;
            }
        };
        var3['isGameItemSKU'] = var6;
        var3['getMarketingGuildId'] = var5;
        var3['hasSocialLayerStorefront'] = var4;
        var4 = function transformSlayerApplicationStorefrontServer(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = arg1;
                var1 = {};
                var2 = var3.application_id;
                var1['applicationId'] = var2;
                var2 = var3.title;
                var1['title'] = var2;
                var2 = var3.logo_asset_id;
                var1['logoAssetId'] = var2;
                var2 = var3.light_theme_logo_asset_id;
                var1['lightThemeLogoAssetId'] = var2;
                var5 = var3.pages;
                var4 = var5.map;
                var2 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = arg1;
                        var1 = {};
                        var2 = var3.title;
                        var1['title'] = var2;
                        var2 = var3.leaderboard;
                        var5 = null;
                        var6 = var5 != var2;
                        var4 = undefined;
                        if(!var6) { _fun0006_ip = 16; continue _fun0006 }
case 17:
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
case 16:
                        var1['leaderboard'] = var4;
                        var4 = var3.sku_ids;
                        var1['skuIds'] = var4;
                        var4 = var3.sections;
                        var4 = var5 != var4;
                        var2 = undefined;
                        if(!var4) { _fun0006_ip = 18; continue _fun0006 }
case 19:
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
case 18:
                        var1['sections'] = var2;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2);
                var1['pages'] = var2;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 5;
                var5 = var5[var2];
                var2 = undefined;
                var8 = var6.bind(var2)(var5);
                var7 = var8.keyBy;
                var6 = var3.assets;
                var5 = 'id';
                var5 = var7.bind(var8)(var6, var5);
                var1['assets'] = var5;
                var6 = var3.application;
                var5 = null;
                var5 = var5 != var6;
                if(!var5) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                var5 = _closure1_slot3;
                var4 = var5.createFromServer;
                var3 = var3.application;
                var2 = var4.bind(var5)(var3);
case 20:
                var1['application'] = var2;
                return var1;
            }
        };
        var3['transformSlayerApplicationStorefrontServer'] = var4;
        var4 = function transformSlayerSKUTenantMetadataFromServer(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = arg1;
                var4 = null;
                if(!(var4 == var2)) { _fun0007_ip = 22; continue _fun0007 }
case 23:
                var1 = undefined;
                return var1;
case 22:
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
                if(!var4) { _fun0007_ip = 24; continue _fun0007 }
case 5:
                var4 = global;
                var6 = var4.Date;
                var7 = var2.expires_at;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var8 = var5;
                var4 = new var8[var6](var7, var6);
                var3 = var4 instanceof Object ? var4 : var5;
case 24:
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
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arg1;
                var12 = arg2;
                var4 = null;
                if(!(var4 != var12)) { _fun0008_ip = 25; continue _fun0008 }
case 26:
                var5 = var4 == var1;
                var3 = undefined;
                var2 = undefined;
                if(var5) { _fun0008_ip = 4; continue _fun0008 }
case 27:
                var5 = var1.tenantMetadata;
                var6 = var4 == var5;
                var2 = undefined;
                if(var6) { _fun0008_ip = 4; continue _fun0008 }
case 28:
                var5 = var5.socialLayer;
                var6 = var4 == var5;
                var2 = undefined;
                if(var6) { _fun0008_ip = 4; continue _fun0008 }
case 2:
                var2 = var5.carouselItems;
case 4:
                if(!(var4 != var2)) { _fun0008_ip = 25; continue _fun0008 }
case 29:
                var2 = var1.tenantMetadata;
                var2 = var2.socialLayer;
                var2 = var2.carouselItems;
                var5 = var2.length;
                var2 = 0;
                if(!(var2 !== var5)) { _fun0008_ip = 25; continue _fun0008 }
case 24:
                var1 = var1.tenantMetadata;
                var1 = var1.socialLayer;
                var1 = var1.carouselItems;
                var2 = var1[var2];
                var1 = var2.labelIconAssetId;
                if(!(var4 != var1)) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                var1 = {};
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var6 = 6;
                var6 = var9[var6];
                var7 = var7.bind(var3)(var6);
                var6 = var7.toURLSafe;
                var8 = _closure1_slot0;
                var5 = 4;
                var5 = var9[var5];
                var11 = var8.bind(var3)(var5);
                var10 = var11.getAssetURL;
                var15 = var2.labelIconAssetId;
                var14 = 512;
                var13 = 'webp';
                var17 = var11;
                var16 = var12;
                var5 = var17[var10](var16, var15, var14, var13, var12);
                var5 = var6.bind(var7)(var5);
                var6 = var4 != var5;
                var4 = undefined;
                if(!var6) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                var4 = var5;
case 32:
                var1['primaryIconAsset'] = var4;
                var2 = var2.label;
                var1['primaryIconLabel'] = var2;
                _fun0008_ip = 34; continue _fun0008;
case 30:
                var2 = {};
                var2['primaryIconAsset'] = var3;
                var2['primaryIconLabel'] = var3;
                var1 = var2;
case 34:
                return var1;
case 25:
                var1 = {};
                var2 = undefined;
                var1['primaryIconAsset'] = var2;
                var1['primaryIconLabel'] = var2;
                return var1;
            }
        };
        var3['getPrimaryCarouselItemInfo'] = var4;
        var4 = function getGameItemThumbnailUrl(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = arg1;
                var3 = null;
                if(!(var3 != var1)) { _fun0009_ip = 35; continue _fun0009 }
case 23:
                var2 = var1.thumbnailAssetId;
                if(!(var3 == var2)) { _fun0009_ip = 36; continue _fun0009 }
case 35:
                var2 = undefined;
                return var2;
case 36:
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 6;
                var2 = var7[var2];
                var6 = undefined;
                var3 = var3.bind(var6)(var2);
                var2 = var3.toURLSafe;
                var5 = _closure1_slot0;
                var4 = 4;
                var4 = var7[var4];
                var8 = var5.bind(var6)(var4);
                var7 = var8.getAssetURL;
                var12 = var1.applicationId;
                var11 = var1.thumbnailAssetId;
                var10 = 512;
                var9 = 'webp';
                var13 = var8;
                var1 = var13[var7](var12, var11, var10, var9, var8);
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var3['getGameItemThumbnailUrl'] = var4;
        var4 = function getCardImageURL(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 == var3;
                var5 = undefined;
                var8 = undefined;
                if(var2) { _fun0010_ip = 37; continue _fun0010 }
case 38:
                var8 = var3.applicationId;
case 37:
                var2 = var1 == var3;
                var7 = undefined;
                if(var2) { _fun0010_ip = 39; continue _fun0010 }
case 40:
                var2 = var3.tenantMetadata;
                var4 = var1 == var2;
                var7 = undefined;
                if(var4) { _fun0010_ip = 39; continue _fun0010 }
case 9:
                var2 = var2.socialLayer;
                var4 = var1 == var2;
                var7 = undefined;
                if(var4) { _fun0010_ip = 39; continue _fun0010 }
case 41:
                var7 = var2.cardImageAssetId;
case 39:
                if(!(var1 == var7)) { _fun0010_ip = 42; continue _fun0010 }
case 43:
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0010_ip = 44; continue _fun0010 }
case 45:
                var2 = var3.thumbnailAssetId;
case 44:
                var7 = var2;
case 42:
                if(!(var1 != var7)) { _fun0010_ip = 46; continue _fun0010 }
case 47:
                if(!(var1 == var8)) { _fun0010_ip = 48; continue _fun0010 }
case 46:
                return var5;
case 48:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 6;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.toURLSafe;
                var4 = _closure1_slot0;
                var1 = 4;
                var1 = var6[var1];
                var6 = var4.bind(var5)(var1);
                var5 = var6.getAssetURL;
                var10 = 512;
                var9 = 'webp';
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
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var4 = arg1;
                var2 = null;
                var3 = var2 == var4;
                var7 = undefined;
                var1 = undefined;
                if(var3) { _fun0011_ip = 49; continue _fun0011 }
case 38:
                var3 = var4.tenantMetadata;
                var5 = var2 == var3;
                var1 = undefined;
                if(var5) { _fun0011_ip = 49; continue _fun0011 }
case 17:
                var3 = var3.socialLayer;
                var5 = var2 == var3;
                var1 = undefined;
                if(var5) { _fun0011_ip = 49; continue _fun0011 }
case 50:
                var1 = var3.cardBackgroundImageAssetId;
case 49:
                if(!(var2 != var1)) { _fun0011_ip = 51; continue _fun0011 }
case 2:
                var3 = var2 == var4;
                var1 = undefined;
                if(var3) { _fun0011_ip = 43; continue _fun0011 }
case 8:
                var1 = var4.applicationId;
case 43:
                if(!(var2 == var1)) { _fun0011_ip = 52; continue _fun0011 }
case 51:
                return var7;
case 52:
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 6;
                var2 = var8[var2];
                var3 = var3.bind(var7)(var2);
                var2 = var3.toURLSafe;
                var6 = _closure1_slot0;
                var5 = 4;
                var5 = var8[var5];
                var8 = var6.bind(var7)(var5);
                var7 = var8.getAssetURL;
                var12 = var4.applicationId;
                var4 = var4.tenantMetadata;
                var4 = var4.socialLayer;
                var11 = var4.cardBackgroundImageAssetId;
                var9 = _closure1_slot10;
                var10 = 1024;
                var13 = var8;
                var1 = var13[var7](var12, var11, var10, var9, var8);
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var3['getCardBackgroundImageURL'] = var4;
        var4 = function getSKUShareURL(arg1, arg2) {
            var2 = arg2;
            var1 = global;
            var3 = var1.location;
            var5 = var3.protocol;
            var3 = var1.window;
            var3 = var3.GLOBAL_ENV;
            var4 = var3.WEBAPP_ENDPOINT;
            var8 = _closure1_slot8;
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
        var3['getSKUShareURL'] = var4;
        var2 = function canSeeGameShop(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var4 = _closure1_slot4;
                var3 = var4.getGuild;
                var1 = arg1;
                var5 = var3.bind(var4)(var1);
                var1 = null;
                var1 = var1 != var5;
                if(!var1) { _fun0012_ip = 53; continue _fun0012 }
case 54:
                var4 = _closure1_slot12;
                var3 = undefined;
                var1 = var4.bind(var3)(var5);
case 53:
                if(!var1) { _fun0012_ip = 44; continue _fun0012 }
case 55:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getIsEligibleForSocialLayerStorefrontUserExperiment;
                var2 = {};
                var5 = arg2;
                var2['location'] = var5;
                var1 = var3.bind(var4)(var2);
case 44:
                return var1;
            }
        };
        var3['canSeeGameShop'] = var2;
        return var1;
    }
})();