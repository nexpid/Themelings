// app/modules/slayer_storefront/SlayerStorefrontUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var9 = require;
        var8 = metroImportDefault;
        var3 = exports;
        var10 = dependencyMap;
        var _closure1_slot0 = var9;
        var _closure1_slot1 = var8;
        var _closure1_slot2 = var10;
        var6 = function getMarketingGuildId() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = _closure1_slot5;
                var3 = var4.getGuild;
                var2 = _closure1_slot7;
                var2 = var3.bind(var4)(var2);
                var3 = null;
                if(!(var3 != var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var5 = var2.features;
                var4 = var5.has;
                var3 = _closure1_slot9;
                var3 = var3.SOCIAL_LAYER_STOREFRONT;
                var3 = var4.bind(var5)(var3);
                if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 2:
                var1 = _closure1_slot6;
                _fun0002_ip = 5; continue _fun0002;
case 4:
                var1 = var2.id;
case 5:
                return var1;
            }
        };
        var _closure1_slot13 = var6;
        var5 = function hasSocialLayerStorefront(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var5 = var2.id;
                var1 = _closure1_slot13;
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
                var4 = _closure1_slot9;
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
        var _closure1_slot14 = var5;
        var4 = function getSKUShareURL(arg1, arg2) {
            var2 = arg2;
            var1 = global;
            var3 = var1.location;
            var5 = var3.protocol;
            var3 = var1.window;
            var3 = var3.GLOBAL_ENV;
            var4 = var3.WEBAPP_ENDPOINT;
            var8 = _closure1_slot10;
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
        var _closure1_slot15 = var4;
        var1 = global;
        var12 = var1.Object;
        var11 = var12.defineProperty;
        var7 = {};
        var1 = true;
        var7['value'] = var1;
        var1 = '__esModule';
        var1 = var11.bind(var12)(var3, var1, var7);
        var1 = 0;
        var7 = var10[var1];
        var1 = undefined;
        var7 = var9.bind(var1)(var7);
        var7 = var7.WishlistRecommendationReason;
        var _closure1_slot3 = var7;
        var7 = 1;
        var7 = var10[var7];
        var7 = var8.bind(var1)(var7);
        var _closure1_slot4 = var7;
        var7 = 2;
        var7 = var10[var7];
        var7 = var8.bind(var1)(var7);
        var _closure1_slot5 = var7;
        var7 = 3;
        var7 = var10[var7];
        var7 = var9.bind(var1)(var7);
        var8 = var7.STOREFRONT_MARKETING_GUILD_ID;
        var _closure1_slot6 = var8;
        var8 = var7.STOREFRONT_MARKETING_GUILD_ID_TEST;
        var _closure1_slot7 = var8;
        var7 = var7.STOREFRONT_ENABLED_APPLICATION_IDS;
        var _closure1_slot8 = var7;
        var7 = 4;
        var7 = var10[var7];
        var7 = var9.bind(var1)(var7);
        var8 = var7.GuildFeatures;
        var _closure1_slot9 = var8;
        var8 = var7.Routes;
        var _closure1_slot10 = var8;
        var7 = var7.SKUProductLines;
        var _closure1_slot11 = var7;
        var7 = 5;
        var7 = var10[var7];
        var7 = var9.bind(var1)(var7);
        var8 = var7.SUPPORTS_WEBP;
        var7 = 'jpg';
        if(!var8) { _fun0001_ip = 12; continue _fun0001 }
case 13:
        var7 = 'webp';
case 12:
        var _closure1_slot12 = var7;
        var8 = 8;
        var8 = var10[var8];
        var10 = var9.bind(var1)(var8);
        var9 = var10.fileFinishedImporting;
        var8 = 'modules/slayer_storefront/SlayerStorefrontUtils.tsx';
        var8 = var9.bind(var10)(var8);
        var3['LARGE_ASSET_FORMAT'] = var7;
        var7 = function isSlayerStorefrontApplication(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var4 = _closure1_slot8;
                var3 = var4.has;
                var2 = var2.id;
                var1 = var3.bind(var4)(var2);
case 14:
                return var1;
            }
        };
        var3['isSlayerStorefrontApplication'] = var7;
        var7 = function isGameItemSKU(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0005_ip = 16; continue _fun0005 }
case 15:
                var3 = var2.productLine;
                var2 = _closure1_slot11;
                var2 = var2.SOCIAL_LAYER_GAME_ITEM;
                var1 = var3 === var2;
case 16:
                return var1;
            }
        };
        var3['isGameItemSKU'] = var7;
        var3['getMarketingGuildId'] = var6;
        var3['hasSocialLayerStorefront'] = var5;
        var5 = function transformSlayerApplicationStorefrontServer(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var3 = arg1;
                        var1 = {};
                        var2 = var3.title;
                        var1['title'] = var2;
                        var2 = var3.leaderboard;
                        var5 = null;
                        var6 = var5 != var2;
                        var4 = undefined;
                        if(!var6) { _fun0007_ip = 17; continue _fun0007 }
case 18:
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
case 17:
                        var1['leaderboard'] = var4;
                        var4 = var3.sku_ids;
                        var1['skuIds'] = var4;
                        var4 = var3.sections;
                        var4 = var5 != var4;
                        var2 = undefined;
                        if(!var4) { _fun0007_ip = 19; continue _fun0007 }
case 20:
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
case 19:
                        var1['sections'] = var2;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2);
                var1['pages'] = var2;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 6;
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
                if(!var5) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                var5 = _closure1_slot4;
                var4 = var5.createFromServer;
                var3 = var3.application;
                var2 = var4.bind(var5)(var3);
case 21:
                var1['application'] = var2;
                return var1;
            }
        };
        var3['transformSlayerApplicationStorefrontServer'] = var5;
        var5 = function getPrimaryCarouselItemInfo(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arg1;
                var12 = arg2;
                var4 = null;
                if(!(var4 != var12)) { _fun0008_ip = 23; continue _fun0008 }
case 24:
                var5 = var4 == var1;
                var3 = undefined;
                var2 = undefined;
                if(var5) { _fun0008_ip = 4; continue _fun0008 }
case 25:
                var5 = var1.tenantMetadata;
                var6 = var4 == var5;
                var2 = undefined;
                if(var6) { _fun0008_ip = 4; continue _fun0008 }
case 26:
                var5 = var5.socialLayer;
                var6 = var4 == var5;
                var2 = undefined;
                if(var6) { _fun0008_ip = 4; continue _fun0008 }
case 2:
                var2 = var5.carouselItems;
case 4:
                if(!(var4 != var2)) { _fun0008_ip = 23; continue _fun0008 }
case 27:
                var2 = var1.tenantMetadata;
                var2 = var2.socialLayer;
                var2 = var2.carouselItems;
                var5 = var2.length;
                var2 = 0;
                if(!(var2 !== var5)) { _fun0008_ip = 23; continue _fun0008 }
case 28:
                var1 = var1.tenantMetadata;
                var1 = var1.socialLayer;
                var1 = var1.carouselItems;
                var2 = var1[var2];
                var1 = var2.labelIconAssetId;
                if(!(var4 != var1)) { _fun0008_ip = 29; continue _fun0008 }
case 30:
                var1 = {};
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var6 = 7;
                var6 = var9[var6];
                var7 = var7.bind(var3)(var6);
                var6 = var7.toURLSafe;
                var8 = _closure1_slot0;
                var5 = 5;
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
                if(!var6) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                var4 = var5;
case 31:
                var1['primaryIconAsset'] = var4;
                var2 = var2.label;
                var1['primaryIconLabel'] = var2;
                _fun0008_ip = 33; continue _fun0008;
case 29:
                var2 = {};
                var2['primaryIconAsset'] = var3;
                var2['primaryIconLabel'] = var3;
                var1 = var2;
case 33:
                return var1;
case 23:
                var1 = {};
                var2 = undefined;
                var1['primaryIconAsset'] = var2;
                var1['primaryIconLabel'] = var2;
                return var1;
            }
        };
        var3['getPrimaryCarouselItemInfo'] = var5;
        var5 = function getGameItemThumbnailUrl(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = arg1;
                var3 = null;
                if(!(var3 != var1)) { _fun0009_ip = 34; continue _fun0009 }
case 35:
                var2 = var1.thumbnailAssetId;
                if(!(var3 == var2)) { _fun0009_ip = 36; continue _fun0009 }
case 34:
                var2 = undefined;
                return var2;
case 36:
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 7;
                var2 = var7[var2];
                var6 = undefined;
                var3 = var3.bind(var6)(var2);
                var2 = var3.toURLSafe;
                var5 = _closure1_slot0;
                var4 = 5;
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
        var3['getGameItemThumbnailUrl'] = var5;
        var5 = function getCardImageURL(arg1) {
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
                var2 = 7;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.toURLSafe;
                var4 = _closure1_slot0;
                var1 = 5;
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
        var3['getCardImageURL'] = var5;
        var5 = function getCardBackgroundImageURL(arg1) {
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
case 18:
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
                var2 = 7;
                var2 = var8[var2];
                var3 = var3.bind(var7)(var2);
                var2 = var3.toURLSafe;
                var6 = _closure1_slot0;
                var5 = 5;
                var5 = var8[var5];
                var8 = var6.bind(var7)(var5);
                var7 = var8.getAssetURL;
                var12 = var4.applicationId;
                var4 = var4.tenantMetadata;
                var4 = var4.socialLayer;
                var11 = var4.cardBackgroundImageAssetId;
                var9 = _closure1_slot12;
                var10 = 1024;
                var13 = var8;
                var1 = var13[var7](var12, var11, var10, var9, var8);
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var3['getCardBackgroundImageURL'] = var5;
        var3['getSKUShareURL'] = var4;
        var4 = function getForwardedSKUShareURL(arg1, arg2) {
            var4 = _closure1_slot15;
            var3 = undefined;
            var2 = arg1;
            var1 = arg2;
            var4 = var4.bind(var3)(var2, var1);
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = '\n\n';
            var1 = var3.bind(var2)(var4, var1);
            return var1;
        };
        var3['getForwardedSKUShareURL'] = var4;
        var4 = function canSeeGameShop(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var4 = _closure1_slot5;
                var3 = var4.getGuild;
                var1 = arg1;
                var4 = var3.bind(var4)(var1);
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0012_ip = 53; continue _fun0012 }
case 54:
                var3 = _closure1_slot14;
                var2 = undefined;
                var1 = var3.bind(var2)(var4);
case 53:
                return var1;
            }
        };
        var3['canSeeGameShop'] = var4;
        var2 = function getHasWishlistOrPopularRecommendations(arg1, arg2, arg3) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var4 = arg1;
                var1 = arg2;
                var _closure2_slot0 = var1;
                var1 = arg3;
                var _closure2_slot1 = var1;
                var3 = var4.length;
                var1 = 0;
                if(!(var1 !== var3)) { _fun0013_ip = 52; continue _fun0013 }
case 40:
                var1 = {};
                var5 = var4.some;
                var3 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var2 = _closure2_slot0;
                        var1 = arg1;
                        var1 = var1.id;
                        var3 = var2[var1];
                        var1 = null;
                        if(!(var1 == var3)) { _fun0014_ip = 3; continue _fun0014 }
case 55:
                        var3 = {};
case 3:
                        var1 = global;
                        var2 = var1.Object;
                        var1 = var2.entries;
                        var3 = var1.bind(var2)(var3);
                        var2 = var3.some;
                        var1 = function(arg1) {
                            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                                var5 = arg1;
                                var1 = var5[Symbol.iterator];
                                var5 = var1().next;
                                var2 = var5().value;
                                var3 = var1;
                                var7 = undefined;
                                var3 = var3 === var7;
                                var4 = undefined;
                                if(var3) { _fun0015_ip = 3; continue _fun0015 }
case 56:
                                var4 = var2;
case 3:
                                var2 = undefined;
                                if(var3) { _fun0015_ip = 57; continue _fun0015 }
case 58:
                                var6 = var5().value;
                                var5 = var1;
                                var5 = var5 === var7;
                                var2 = undefined;
                                var3 = var5;
                                if(var5) { _fun0015_ip = 57; continue _fun0015 }
case 59:
                                var2 = var6;
                                var3 = var5;
case 57:
                                if(var3) { _fun0015_ip = 60; continue _fun0015 }
case 41:
                                var1.return();
case 60:
                                var1 = _closure1_slot3;
                                var1 = var1.WISHLIST;
                                var1 = var2 === var1;
                                if(!var1) { _fun0015_ip = 61; continue _fun0015 }
case 17:
                                var3 = _closure2_slot1;
                                var2 = var3.has;
                                var1 = var2.bind(var3)(var4);
case 61:
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var3 = var5.bind(var4)(var3);
                var1['hasWishlist'] = var3;
                var3 = var4.some;
                var2 = function(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var2 = _closure2_slot0;
                        var1 = arg1;
                        var1 = var1.id;
                        var4 = var2[var1];
                        var1 = null;
                        var1 = var1 == var4;
                        if(var1) { _fun0016_ip = 8; continue _fun0016 }
case 7:
                        var2 = global;
                        var3 = var2.Object;
                        var2 = var3.entries;
                        var4 = var2.bind(var3)(var4);
                        var3 = var4.every;
                        var2 = function(arg1) {
                            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                                var5 = arg1;
                                var1 = var5[Symbol.iterator];
                                var5 = var1().next;
                                var2 = var5().value;
                                var3 = var1;
                                var7 = undefined;
                                var3 = var3 === var7;
                                var4 = undefined;
                                if(var3) { _fun0017_ip = 3; continue _fun0017 }
case 56:
                                var4 = var2;
case 3:
                                var2 = undefined;
                                if(var3) { _fun0017_ip = 57; continue _fun0017 }
case 58:
                                var6 = var5().value;
                                var5 = var1;
                                var5 = var5 === var7;
                                var2 = undefined;
                                var3 = var5;
                                if(var5) { _fun0017_ip = 57; continue _fun0017 }
case 59:
                                var2 = var6;
                                var3 = var5;
case 57:
                                if(var3) { _fun0017_ip = 60; continue _fun0017 }
case 41:
                                var1.return();
case 60:
                                var1 = _closure1_slot3;
                                var1 = var1.RECOMMENDATION;
                                var1 = var2 === var1;
                                if(!var1) { _fun0017_ip = 61; continue _fun0017 }
case 17:
                                var3 = _closure2_slot1;
                                var2 = var3.has;
                                var1 = var2.bind(var3)(var4);
case 61:
                                if(var1) { _fun0017_ip = 62; continue _fun0017 }
case 63:
                                var3 = _closure2_slot1;
                                var2 = var3.has;
                                var2 = var2.bind(var3)(var4);
                                var1 = !var2;
case 62:
                                return var1;
                            }
                        };
                        var1 = var3.bind(var4)(var2);
case 8:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var1['hasPopular'] = var2;
                _fun0013_ip = 64; continue _fun0013;
case 52:
                var1 = {'hasWishlist': false, 'hasPopular': false};
case 64:
                return var1;
            }
        };
        var3['getHasWishlistOrPopularRecommendations'] = var2;
        return var1;
    }
})();