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
        var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var _closure2_slot0 = var3;
                var5 = global;
                var2 = var5.Symbol;
                var4 = 'undefined';
                var2 = typeof var2;
                var2 = var4 !== var2;
                if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var4 = var5.Symbol;
                var4 = var4.iterator;
                var2 = var3[var4];
case 2:
                if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = var3.@@iterator;
case 4:
                if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var6 = var5.Array;
                var4 = var6.isArray;
                var6 = var4.bind(var6)(var3);
                var4 = var2;
                if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var8 = undefined;
                var6 = undefined;
                if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var9 = 'string';
                var7 = typeof var3;
                if(!(var9 !== var7)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var7 = {};
                var9 = var7.toString;
                var7 = var9.call;
                var11 = var7.bind(var9)(var3);
                var10 = var11.slice;
                var9 = 8;
                var7 = -1;
                var9 = var10.bind(var11)(var9, var7);
                var7 = 'Object';
                var7 = var7 === var9;
                if(!var7) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var7 = var3.constructor;
case 14:
                var10 = var9;
                if(!var7) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var7 = var3.constructor;
                var10 = var7.name;
case 16:
                var7 = 'Map';
                if(!(var7 !== var10)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var7 = 'Set';
                if(!(var7 !== var10)) { _fun0002_ip = 18; continue _fun0002 }
case 20:
                var7 = 'Arguments';
                if(!(var7 !== var10)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var7 = var9.test;
                var9 = var7.bind(var9)(var10);
                var7 = undefined;
                if(!var9) { _fun0002_ip = 23; continue _fun0002 }
case 21:
                var9 = _closure1_slot14;
                var7 = var9.bind(var8)(var3, var8);
case 23:
                _fun0002_ip = 24; continue _fun0002;
case 18:
                var10 = var5.Array;
                var9 = var10.from;
                var7 = var9.bind(var10)(var3);
case 24:
                var6 = var7;
                _fun0002_ip = 10; continue _fun0002;
case 12:
                var7 = _closure1_slot14;
                var6 = var7.bind(var8)(var3, var8);
case 10:
                var4 = var6;
                if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 25:
                var7 = var5.TypeError;
                var5 = var7.prototype;
                var6 = Object.create(var5, {constructor: {value: var7}});
                var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var14 = var6;
                var5 = new var14[var7](var13, var12);
                var5 = var5 instanceof Object ? var5 : var6;
                throw var5;
case 8:
                if(!var4) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                _closure2_slot0 = var4;
case 26:
                var4 = 0;
                var _closure2_slot1 = var4;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var1 = var1.length;
                        if(!(!(var2 >= var1))) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                        var1 = {};
                        var2 = false;
                        var1['done'] = var2;
                        var3 = _closure2_slot0;
                        var2 = _closure2_slot1;
                        var2 = parseFloat(var2);
                        var4 = var2 + 1;
                        _closure2_slot1 = var4;
                        var2 = var3[var2];
                        var1['value'] = var2;
                        _fun0003_ip = 30; continue _fun0003;
case 28:
                        var2 = {};
                        var3 = true;
                        var2['done'] = var3;
                        var1 = var2;
case 30:
                        return var1;
                    }
                };
                return var1;
case 6:
                var1 = var2.call;
                var3 = var1.bind(var2)(var3);
                var2 = var3.next;
                var1 = var2.bind;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var _closure1_slot13 = var1;
        var1 = function _arrayLikeToArray(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var3 = undefined;
                var1 = var1 == var3;
                if(var1) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                var2 = var4.length;
                var1 = var3 > var2;
case 31:
                var2 = undefined;
                if(!var1) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                var2 = var4.length;
case 33:
                var1 = global;
                var1 = var1.Array;
                var1 = var1.bind(var3)(var2);
                var3 = 0;
                var5 = var3 < var2;
                if(!var5) { _fun0004_ip = 35; continue _fun0004 }
case 4:
                var5 = var4[var3];
                var1[var3] = var5;
                var3 = var3 + 1;
                if(var3 < var2) { _fun0004_ip = 4; continue _fun0004 }
case 35:
                return var1;
            }
        };
        var _closure1_slot14 = var1;
        var5 = function hasSocialLayerStorefront(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = arg1;
                var3 = _closure1_slot6;
                var1 = var3.getStorefrontGuildIds;
                var5 = var1.bind(var3)();
                var3 = var5.has;
                var1 = var2.id;
                var1 = var3.bind(var5)(var1);
                var3 = !var1;
                var1 = !var3;
                if(!var3) { _fun0005_ip = 11; continue _fun0005 }
case 2:
                var6 = var2.features;
                var2 = null;
                var5 = var2 == var6;
                var3 = undefined;
                if(var5) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                var5 = var6.has;
                var4 = _closure1_slot9;
                var4 = var4.SOCIAL_LAYER_STOREFRONT;
                var3 = var5.bind(var6)(var4);
case 36:
                var2 = var2 != var3;
                if(!var2) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                var2 = var3;
case 38:
                var1 = var2;
case 11:
                return var1;
            }
        };
        var _closure1_slot15 = var5;
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
        var _closure1_slot16 = var4;
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
        var6 = var8.bind(var1)(var6);
        var6 = var6.WishlistRecommendationReason;
        var _closure1_slot3 = var6;
        var6 = 1;
        var6 = var9[var6];
        var6 = var7.bind(var1)(var6);
        var _closure1_slot4 = var6;
        var6 = 2;
        var6 = var9[var6];
        var6 = var7.bind(var1)(var6);
        var _closure1_slot5 = var6;
        var6 = 3;
        var6 = var9[var6];
        var6 = var7.bind(var1)(var6);
        var _closure1_slot6 = var6;
        var6 = 4;
        var6 = var9[var6];
        var6 = var8.bind(var1)(var6);
        var7 = var6.STOREFRONT_MARKETING_GUILD_ID;
        var _closure1_slot7 = var7;
        var6 = var6.STOREFRONT_MARKETING_GUILD_ID_TEST;
        var _closure1_slot8 = var6;
        var6 = 5;
        var6 = var9[var6];
        var6 = var8.bind(var1)(var6);
        var7 = var6.GuildFeatures;
        var _closure1_slot9 = var7;
        var7 = var6.Routes;
        var _closure1_slot10 = var7;
        var6 = var6.SKUProductLines;
        var _closure1_slot11 = var6;
        var6 = 6;
        var6 = var9[var6];
        var6 = var8.bind(var1)(var6);
        var7 = var6.SUPPORTS_WEBP;
        var6 = 'jpg';
        if(!var7) { _fun0001_ip = 40; continue _fun0001 }
case 41:
        var6 = 'webp';
case 40:
        var _closure1_slot12 = var6;
        var7 = 9;
        var7 = var9[var7];
        var9 = var8.bind(var1)(var7);
        var8 = var9.fileFinishedImporting;
        var7 = 'modules/slayer_storefront/SlayerStorefrontUtils.tsx';
        var7 = var8.bind(var9)(var7);
        var3['LARGE_ASSET_FORMAT'] = var6;
        var6 = function getOrderedStorefrontSkuIds(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var22 = var2;
                var1 = new var22[var1](var21);
                var12 = var1 instanceof Object ? var1 : var2;
                var1 = new Array(0);
                var3 = _closure1_slot13;
                var2 = arg1;
                var2 = var2.pages;
                var10 = undefined;
                var9 = var3.bind(var10)(var2);
                var3 = var9.bind(var10)();
                var2 = var3.done;
                var8 = null;
                var7 = var3;
                var6 = undefined;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(var2) { _fun0006_ip = 42; continue _fun0006 }
case 36:
                var2 = var7.value;
                var14 = _closure1_slot13;
                var13 = var2.skuIds;
                var15 = var14.bind(var10)(var13);
                var14 = var15.bind(var10)();
                var13 = var14.done;
                if(var13) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                var16 = var14.value;
                var13 = var12.has;
                var13 = var13.bind(var12)(var16);
                if(var13) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                var13 = var12.add;
                var13 = var13.bind(var12)(var16);
                var13 = var1.push;
                var13 = var13.bind(var1)(var16);
case 45:
                var17 = var15.bind(var10)();
                var13 = var17.done;
                var14 = var17;
                var6 = var16;
                if(!var13) { _fun0006_ip = 44; continue _fun0006 }
case 43:
                var13 = _closure1_slot13;
                var2 = var2.sections;
                if(!(var8 == var2)) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                var2 = new Array(0);
case 47:
                var15 = var13.bind(var10)(var2);
                var13 = var15.bind(var10)();
                var2 = var13.done;
                var14 = var13;
                var13 = var3;
                var3 = var13;
                if(var2) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                var16 = _closure1_slot13;
                var2 = var14.value;
                var2 = var2.skuIds;
                var17 = var16.bind(var10)(var2);
                var18 = var17.bind(var10)();
                var2 = var18.done;
                var16 = var18;
                var18 = var16;
                if(var2) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                var19 = var16.value;
                var2 = var12.has;
                var2 = var2.bind(var12)(var19);
                if(var2) { _fun0006_ip = 53; continue _fun0006 }
case 54:
                var2 = var12.add;
                var2 = var2.bind(var12)(var19);
                var2 = var1.push;
                var2 = var2.bind(var1)(var19);
case 53:
                var20 = var17.bind(var10)();
                var2 = var20.done;
                var16 = var20;
                var18 = var16;
                var13 = var19;
                if(!var2) { _fun0006_ip = 52; continue _fun0006 }
case 51:
                var19 = var15.bind(var10)();
                var2 = var19.done;
                var5 = var18;
                var14 = var19;
                var4 = var17;
                var3 = var13;
                if(!var2) { _fun0006_ip = 50; continue _fun0006 }
case 49:
                var13 = var9.bind(var10)();
                var2 = var13.done;
                var7 = var13;
                if(!var2) { _fun0006_ip = 36; continue _fun0006 }
case 42:
                return var1;
            }
        };
        var3['getOrderedStorefrontSkuIds'] = var6;
        var6 = function isGameItemSKU(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                var3 = var2.productLine;
                var2 = _closure1_slot11;
                var2 = var2.SOCIAL_LAYER_GAME_ITEM;
                var1 = var3 === var2;
case 55:
                return var1;
            }
        };
        var3['isGameItemSKU'] = var6;
        var6 = function getMarketingGuildId() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = _closure1_slot5;
                var3 = var4.getGuild;
                var2 = _closure1_slot8;
                var2 = var3.bind(var4)(var2);
                var3 = null;
                if(!(var3 != var2)) { _fun0008_ip = 28; continue _fun0008 }
case 57:
                var5 = var2.features;
                var4 = var5.has;
                var3 = _closure1_slot9;
                var3 = var3.SOCIAL_LAYER_STOREFRONT;
                var3 = var4.bind(var5)(var3);
                if(var3) { _fun0008_ip = 58; continue _fun0008 }
case 28:
                var1 = _closure1_slot7;
                _fun0008_ip = 30; continue _fun0008;
case 58:
                var1 = var2.id;
case 30:
                return var1;
            }
        };
        var3['getMarketingGuildId'] = var6;
        var3['hasSocialLayerStorefront'] = var5;
        var5 = function transformSlayerApplicationStorefrontServer(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
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
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var3 = arg1;
                        var1 = {};
                        var2 = var3.title;
                        var1['title'] = var2;
                        var2 = var3.leaderboard;
                        var5 = null;
                        var6 = var5 != var2;
                        var4 = undefined;
                        if(!var6) { _fun0010_ip = 36; continue _fun0010 }
case 59:
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
case 36:
                        var1['leaderboard'] = var4;
                        var4 = var3.sku_ids;
                        var1['skuIds'] = var4;
                        var4 = var3.sections;
                        var4 = var5 != var4;
                        var2 = undefined;
                        if(!var4) { _fun0010_ip = 60; continue _fun0010 }
case 61:
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
case 60:
                        var1['sections'] = var2;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2);
                var1['pages'] = var2;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 7;
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
                if(!var5) { _fun0009_ip = 62; continue _fun0009 }
case 63:
                var5 = _closure1_slot4;
                var4 = var5.createFromServer;
                var3 = var3.application;
                var2 = var4.bind(var5)(var3);
case 62:
                var1['application'] = var2;
                return var1;
            }
        };
        var3['transformSlayerApplicationStorefrontServer'] = var5;
        var5 = function getPrimaryCarouselItemInfo(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = arg1;
                var12 = arg2;
                var4 = null;
                if(!(var4 != var12)) { _fun0011_ip = 24; continue _fun0011 }
case 64:
                var5 = var4 == var1;
                var3 = undefined;
                var2 = undefined;
                if(var5) { _fun0011_ip = 58; continue _fun0011 }
case 65:
                var5 = var1.tenantMetadata;
                var6 = var4 == var5;
                var2 = undefined;
                if(var6) { _fun0011_ip = 58; continue _fun0011 }
case 66:
                var5 = var5.socialLayer;
                var6 = var4 == var5;
                var2 = undefined;
                if(var6) { _fun0011_ip = 58; continue _fun0011 }
case 28:
                var2 = var5.carouselItems;
case 58:
                if(!(var4 != var2)) { _fun0011_ip = 24; continue _fun0011 }
case 67:
                var2 = var1.tenantMetadata;
                var2 = var2.socialLayer;
                var2 = var2.carouselItems;
                var5 = var2.length;
                var2 = 0;
                if(!(var2 !== var5)) { _fun0011_ip = 24; continue _fun0011 }
case 68:
                var1 = var1.tenantMetadata;
                var1 = var1.socialLayer;
                var1 = var1.carouselItems;
                var2 = var1[var2];
                var1 = var2.labelIconAssetId;
                if(!(var4 != var1)) { _fun0011_ip = 69; continue _fun0011 }
case 46:
                var1 = {};
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var6 = 8;
                var6 = var9[var6];
                var7 = var7.bind(var3)(var6);
                var6 = var7.toURLSafe;
                var8 = _closure1_slot0;
                var5 = 6;
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
                if(!var6) { _fun0011_ip = 70; continue _fun0011 }
case 71:
                var4 = var5;
case 70:
                var1['primaryIconAsset'] = var4;
                var2 = var2.label;
                var1['primaryIconLabel'] = var2;
                _fun0011_ip = 72; continue _fun0011;
case 69:
                var2 = {};
                var2['primaryIconAsset'] = var3;
                var2['primaryIconLabel'] = var3;
                var1 = var2;
case 72:
                return var1;
case 24:
                var1 = {};
                var2 = undefined;
                var1['primaryIconAsset'] = var2;
                var1['primaryIconLabel'] = var2;
                return var1;
            }
        };
        var3['getPrimaryCarouselItemInfo'] = var5;
        var5 = function getGameItemThumbnailUrl(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = arg1;
                var3 = null;
                if(!(var3 != var1)) { _fun0012_ip = 73; continue _fun0012 }
case 74:
                var2 = var1.thumbnailAssetId;
                if(!(var3 == var2)) { _fun0012_ip = 31; continue _fun0012 }
case 73:
                var2 = undefined;
                return var2;
case 31:
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 8;
                var2 = var7[var2];
                var6 = undefined;
                var3 = var3.bind(var6)(var2);
                var2 = var3.toURLSafe;
                var5 = _closure1_slot0;
                var4 = 6;
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
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 == var3;
                var5 = undefined;
                var8 = undefined;
                if(var2) { _fun0013_ip = 75; continue _fun0013 }
case 76:
                var8 = var3.applicationId;
case 75:
                var2 = var1 == var3;
                var7 = undefined;
                if(var2) { _fun0013_ip = 77; continue _fun0013 }
case 3:
                var2 = var3.tenantMetadata;
                var4 = var1 == var2;
                var7 = undefined;
                if(var4) { _fun0013_ip = 77; continue _fun0013 }
case 78:
                var2 = var2.socialLayer;
                var4 = var1 == var2;
                var7 = undefined;
                if(var4) { _fun0013_ip = 77; continue _fun0013 }
case 79:
                var7 = var2.cardImageAssetId;
case 77:
                if(!(var1 == var7)) { _fun0013_ip = 80; continue _fun0013 }
case 35:
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0013_ip = 81; continue _fun0013 }
case 82:
                var2 = var3.thumbnailAssetId;
case 81:
                var7 = var2;
case 80:
                if(!(var1 != var7)) { _fun0013_ip = 11; continue _fun0013 }
case 83:
                if(!(var1 == var8)) { _fun0013_ip = 84; continue _fun0013 }
case 11:
                return var5;
case 84:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 8;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.toURLSafe;
                var4 = _closure1_slot0;
                var1 = 6;
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
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var4 = arg1;
                var2 = null;
                var3 = var2 == var4;
                var7 = undefined;
                var1 = undefined;
                if(var3) { _fun0014_ip = 85; continue _fun0014 }
case 76:
                var3 = var4.tenantMetadata;
                var5 = var2 == var3;
                var1 = undefined;
                if(var5) { _fun0014_ip = 85; continue _fun0014 }
case 59:
                var3 = var3.socialLayer;
                var5 = var2 == var3;
                var1 = undefined;
                if(var5) { _fun0014_ip = 85; continue _fun0014 }
case 2:
                var1 = var3.cardBackgroundImageAssetId;
case 85:
                if(!(var2 != var1)) { _fun0014_ip = 86; continue _fun0014 }
case 28:
                var3 = var2 == var4;
                var1 = undefined;
                if(var3) { _fun0014_ip = 35; continue _fun0014 }
case 87:
                var1 = var4.applicationId;
case 35:
                if(!(var2 == var1)) { _fun0014_ip = 88; continue _fun0014 }
case 86:
                return var7;
case 88:
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 8;
                var2 = var8[var2];
                var3 = var3.bind(var7)(var2);
                var2 = var3.toURLSafe;
                var6 = _closure1_slot0;
                var5 = 6;
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
            var4 = _closure1_slot16;
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
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var4 = _closure1_slot5;
                var3 = var4.getGuild;
                var1 = arg1;
                var4 = var3.bind(var4)(var1);
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0015_ip = 89; continue _fun0015 }
case 90:
                var3 = _closure1_slot15;
                var2 = undefined;
                var1 = var3.bind(var2)(var4);
case 89:
                return var1;
            }
        };
        var3['canSeeGameShop'] = var4;
        var2 = function getHasWishlistOrPopularRecommendations(arg1, arg2, arg3) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var4 = arg1;
                var1 = arg2;
                var _closure2_slot0 = var1;
                var1 = arg3;
                var _closure2_slot1 = var1;
                var3 = var4.length;
                var1 = 0;
                if(!(var1 !== var3)) { _fun0016_ip = 88; continue _fun0016 }
case 3:
                var1 = {};
                var5 = var4.some;
                var3 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var2 = _closure2_slot0;
                        var1 = arg1;
                        var1 = var1.id;
                        var3 = var2[var1];
                        var1 = null;
                        if(!(var1 == var3)) { _fun0017_ip = 57; continue _fun0017 }
case 91:
                        var3 = {};
case 57:
                        var1 = global;
                        var2 = var1.Object;
                        var1 = var2.entries;
                        var3 = var1.bind(var2)(var3);
                        var2 = var3.some;
                        var1 = function(arg1) {
                            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                                var5 = arg1;
                                var1 = var5[Symbol.iterator];
                                var5 = var1().next;
                                var2 = var5().value;
                                var3 = var1;
                                var7 = undefined;
                                var3 = var3 === var7;
                                var4 = undefined;
                                if(var3) { _fun0018_ip = 57; continue _fun0018 }
case 92:
                                var4 = var2;
case 57:
                                var2 = undefined;
                                if(var3) { _fun0018_ip = 93; continue _fun0018 }
case 94:
                                var6 = var5().value;
                                var5 = var1;
                                var5 = var5 === var7;
                                var2 = undefined;
                                var3 = var5;
                                if(var5) { _fun0018_ip = 93; continue _fun0018 }
case 95:
                                var2 = var6;
                                var3 = var5;
case 93:
                                if(var3) { _fun0018_ip = 37; continue _fun0018 }
case 79:
                                var1.return();
case 37:
                                var1 = _closure1_slot3;
                                var1 = var1.WISHLIST;
                                var1 = var2 === var1;
                                if(!var1) { _fun0018_ip = 96; continue _fun0018 }
case 36:
                                var3 = _closure2_slot1;
                                var2 = var3.has;
                                var1 = var2.bind(var3)(var4);
case 96:
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
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        var2 = _closure2_slot0;
                        var1 = arg1;
                        var1 = var1.id;
                        var4 = var2[var1];
                        var1 = null;
                        var1 = var1 == var4;
                        if(var1) { _fun0019_ip = 87; continue _fun0019 }
case 34:
                        var2 = global;
                        var3 = var2.Object;
                        var2 = var3.entries;
                        var4 = var2.bind(var3)(var4);
                        var3 = var4.every;
                        var2 = function(arg1) {
                            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                                var5 = arg1;
                                var1 = var5[Symbol.iterator];
                                var5 = var1().next;
                                var2 = var5().value;
                                var3 = var1;
                                var7 = undefined;
                                var3 = var3 === var7;
                                var4 = undefined;
                                if(var3) { _fun0020_ip = 57; continue _fun0020 }
case 92:
                                var4 = var2;
case 57:
                                var2 = undefined;
                                if(var3) { _fun0020_ip = 93; continue _fun0020 }
case 94:
                                var6 = var5().value;
                                var5 = var1;
                                var5 = var5 === var7;
                                var2 = undefined;
                                var3 = var5;
                                if(var5) { _fun0020_ip = 93; continue _fun0020 }
case 95:
                                var2 = var6;
                                var3 = var5;
case 93:
                                if(var3) { _fun0020_ip = 37; continue _fun0020 }
case 79:
                                var1.return();
case 37:
                                var1 = _closure1_slot3;
                                var1 = var1.RECOMMENDATION;
                                var1 = var2 === var1;
                                if(!var1) { _fun0020_ip = 96; continue _fun0020 }
case 36:
                                var3 = _closure2_slot1;
                                var2 = var3.has;
                                var1 = var2.bind(var3)(var4);
case 96:
                                if(var1) { _fun0020_ip = 97; continue _fun0020 }
case 98:
                                var3 = _closure2_slot1;
                                var2 = var3.has;
                                var2 = var2.bind(var3)(var4);
                                var1 = !var2;
case 97:
                                return var1;
                            }
                        };
                        var1 = var3.bind(var4)(var2);
case 87:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var1['hasPopular'] = var2;
                _fun0016_ip = 39; continue _fun0016;
case 88:
                var1 = {'hasWishlist': false, 'hasPopular': false};
case 39:
                return var1;
            }
        };
        var3['getHasWishlistOrPopularRecommendations'] = var2;
        return var1;
    }
})();