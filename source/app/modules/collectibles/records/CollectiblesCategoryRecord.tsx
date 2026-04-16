// app/modules/collectibles/records/CollectiblesCategoryRecord.tsx
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var7 = function allowEmptyItems(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 8;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var4.bind(var5)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.VARIANTS_GROUP;
            var1 = var3 === var1;
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.EXTERNAL_SKU;
            var1 = var3 === var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot9 = var7;
    var2 = function(arg1) {
        var5 = function CollectiblesCategoryRecord(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var4 = this;
                var1 = _closure1_slot2;
                var3 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var4, var3);
                var10 = new Array(1);
                var10[0] = var2;
                var1 = _closure1_slot5;
                var9 = var1.bind(var5)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot10;
                var1 = var1.bind(var5)();
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var4, var10);
                _fun0003_ip = 10; continue _fun0003;
case 8:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var5)(var4);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 10:
                var1 = var3.bind(var5)(var4, var1);
                var3 = var2.products;
                var1['products'] = var3;
                var3 = var2.heroRanking;
                var1['heroRanking'] = var3;
                var3 = var2.unpublishedAt;
                var1['unpublishedAt'] = var3;
                var3 = global;
                var6 = var3.Array;
                var4 = var6.isArray;
                var3 = var2.products;
                var3 = var4.bind(var6)(var3);
                if(!var3) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var4 = var2.products;
                var6 = var4.length;
                var4 = 0;
                var3 = var6 > var4;
case 11:
                if(!var3) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var7 = var2.products;
                var6 = var7.find;
                var4 = function(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isOrbsExclusiveProduct;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    return var1;
                };
                var4 = var6.bind(var7)(var4);
                var3 = var5 === var4;
case 13:
                var1['isOrbsExclusive'] = var3;
                var3 = var2.heroBannerUrl;
                var1['heroBannerUrl'] = var3;
                var3 = var2.heroBannerAnimatedUrl;
                var1['heroBannerAnimatedUrl'] = var3;
                var3 = var2.heroRiveUrl;
                var1['heroRiveUrl'] = var3;
                var3 = var2.heroLogoUrl;
                var1['heroLogoUrl'] = var3;
                var3 = var2.catalogBannerUrl;
                var1['catalogBannerUrl'] = var3;
                var3 = var2.catalogBannerAnimatedUrl;
                var1['catalogBannerAnimatedUrl'] = var3;
                var3 = var2.catalogBannerRiveUrl;
                var1['catalogBannerRiveUrl'] = var3;
                var3 = var2.featuredBlockUrl;
                var1['featuredBlockUrl'] = var3;
                var3 = var2.logoUrl;
                var1['logoUrl'] = var3;
                var3 = var2.pdpBgUrl;
                var1['pdpBgUrl'] = var3;
                var3 = var2.mobileBannerUrl;
                var1['mobileBannerUrl'] = var3;
                var3 = var2.mobileBgUrl;
                var1['mobileBgUrl'] = var3;
                var3 = var2.heroLogoDisplayConfig;
                var1['heroLogoDisplayConfig'] = var3;
                var2 = var2.heroBannerDisplayConfig;
                var1['heroBannerDisplayConfig'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var3 = _closure1_slot7;
        var4 = undefined;
        var2 = arg1;
        var2 = var3.bind(var4)(var5, var2);
        var3 = _closure1_slot3;
        var1 = {};
        var2 = 'fromServer';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = arg1;
                var28 = this;
                var25 = var3.products;
                var23 = var3.unpublished_at;
                var20 = var3.hero_ranking;
                var10 = var3.hero_logo_display_config;
                var5 = var3.hero_banner_display_config;
                var19 = var3.hero_banner_url;
                var18 = var3.hero_banner_animated_url;
                var17 = var3.hero_rive_url;
                var16 = var3.hero_logo_url;
                var15 = var3.catalog_banner_url;
                var14 = var3.catalog_banner_animated_url;
                var13 = var3.catalog_banner_rive_url;
                var12 = var3.featured_block_url;
                var11 = var3.logo_url;
                var9 = var3.pdp_bg_url;
                var8 = var3.mobile_banner_url;
                var7 = var3.mobile_bg_url;
                var2 = {'products': 0, 'unpublished_at': 0, 'hero_ranking': 0, 'hero_logo_display_config': 0, 'hero_banner_display_config': 0, 'hero_banner_url': 0, 'hero_banner_animated_url': 0, 'hero_rive_url': 0, 'hero_logo_url': 0, 'catalog_banner_url': 0, 'catalog_banner_animated_url': 0, 'catalog_banner_rive_url': 0, 'featured_block_url': 0, 'logo_url': 0, 'pdp_bg_url': 0, 'mobile_banner_url': 0, 'mobile_bg_url': 0};
                var21 = null;
                var31 = var2;
                var30 = null;
                var1 = silentSetPrototypeOf(var31, var30);
                var31 = {};
                var30 = var3;
                var29 = var2;
                var26 = copyDataProperties(var31, var30, var29);
                var3 = _closure2_slot0;
                var1 = {};
                var _closure3_slot0 = var28;
                var27 = _closure1_slot6;
                var22 = _closure1_slot5;
                var6 = undefined;
                var24 = var22.bind(var6)(var3);
                var22 = 'fromServer';
                var24 = var27.bind(var6)(var24, var22, var28);
                var _closure3_slot1 = var24;
                var27 = 'function';
                var22 = typeof var24;
                if(!(var27 === var22)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var24 = function(arg1) {
                    var4 = _closure3_slot1;
                    var3 = var4.apply;
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
case 15:
                var22 = new Array(1);
                var22[0] = var26;
                var30 = var24.bind(var6)(var22);
                var31 = var1;
                var22 = copyDataProperties(var31, var30);
                var24 = var25.reduce;
                var22 = function(arg1, arg2) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var1 = arg1;
                        var5 = _closure1_slot8;
                        var4 = var5.fromServer;
                        var3 = arg2;
                        var3 = var4.bind(var5)(var3);
                        var5 = _closure1_slot9;
                        var4 = var3.type;
                        var2 = undefined;
                        var2 = var5.bind(var2)(var4);
                        if(var2) { _fun0005_ip = 9; continue _fun0005 }
case 17:
                        var2 = var3.items;
                        var4 = var2.length;
                        var2 = 0;
                        if(!(var2 !== var4)) { _fun0005_ip = 3; continue _fun0005 }
case 9:
                        var2 = var1.push;
                        var2 = var2.bind(var1)(var3);
case 3:
                        return var1;
                    }
                };
                var4 = new Array(0);
                var22 = var24.bind(var25)(var22, var4);
                var4 = 'products';
                var1[3] = var22;
                var4 = var21 != var23;
                var21 = null;
                if(!var4) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var4 = global;
                var4 = var4.Date;
                var22 = var4.prototype;
                var22 = Object.create(var22, {constructor: {value: var4}});
                var32 = var22;
                var31 = var23;
                var4 = new var32[var4](var31, var30);
                var21 = var4 instanceof Object ? var4 : var22;
case 18:
                var4 = 'unpublishedAt';
                var1[3] = var21;
                var4 = 'heroRanking';
                var1[3] = var20;
                var4 = 'heroBannerUrl';
                var1[3] = var19;
                var4 = 'heroBannerAnimatedUrl';
                var1[3] = var18;
                var4 = 'heroRiveUrl';
                var1[3] = var17;
                var4 = 'heroLogoUrl';
                var1[3] = var16;
                var4 = 'catalogBannerUrl';
                var1[3] = var15;
                var4 = 'catalogBannerAnimatedUrl';
                var1[3] = var14;
                var4 = 'catalogBannerRiveUrl';
                var1[3] = var13;
                var4 = 'featuredBlockUrl';
                var1[3] = var12;
                var4 = 'logoUrl';
                var1[3] = var11;
                var4 = 'pdpBgUrl';
                var1[3] = var9;
                var4 = 'mobileBannerUrl';
                var1[3] = var8;
                var4 = 'mobileBgUrl';
                var1[3] = var7;
                var4 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 10;
                var8 = var7[var2];
                var9 = var4.bind(var6)(var8);
                var8 = var9.getAssetDisplayConfig;
                var9 = var8.bind(var9)(var10);
                var8 = 'heroLogoDisplayConfig';
                var1[7] = var9;
                var2 = var7[var2];
                var4 = var4.bind(var6)(var2);
                var2 = var4.getAssetDisplayConfig;
                var4 = var2.bind(var4)(var5);
                var2 = 'heroBannerDisplayConfig';
                var1[1] = var4;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var32 = var2;
                var31 = var1;
                var1 = new var32[var3](var31, var30);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var7 = 'fromStorefrontCollectionRecord';
        var1['key'] = var7;
        var6 = function value(arg1) {
            var2 = arg1;
            var3 = _closure2_slot0;
            var1 = {};
            var4 = var2.id;
            var1['storeListingId'] = var4;
            var4 = var2.id;
            var1['skuId'] = var4;
            var4 = var2.name;
            var1['name'] = var4;
            var4 = var2.description;
            var1['summary'] = var4;
            var4 = var2.unpublishedAt;
            var1['unpublishedAt'] = var4;
            var4 = var2.styles;
            var1['styles'] = var4;
            var7 = var2.products;
            var6 = var7.reduce;
            var5 = function(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure1_slot8;
                    var4 = var5.fromStorefrontProductRecord;
                    var3 = arg2;
                    var3 = var4.bind(var5)(var3);
                    var4 = null;
                    if(!(var4 != var3)) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                    var5 = _closure1_slot9;
                    var4 = var3.type;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    if(var2) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                    var2 = var3.items;
                    var4 = var2.length;
                    var2 = 0;
                    if(!(var2 !== var4)) { _fun0006_ip = 20; continue _fun0006 }
case 22:
                    var2 = var1.push;
                    var2 = var2.bind(var1)(var3);
case 20:
                    return var1;
                }
            };
            var4 = new Array(0);
            var4 = var6.bind(var7)(var5, var4);
            var1['products'] = var4;
            var4 = var2.heroRanking;
            var1['heroRanking'] = var4;
            var4 = var2.heroBannerUrl;
            var1['heroBannerUrl'] = var4;
            var4 = var2.heroBannerAnimatedUrl;
            var1['heroBannerAnimatedUrl'] = var4;
            var4 = var2.heroRiveUrl;
            var1['heroRiveUrl'] = var4;
            var4 = var2.heroLogoUrl;
            var1['heroLogoUrl'] = var4;
            var4 = var2.catalogBannerUrl;
            var1['catalogBannerUrl'] = var4;
            var4 = var2.catalogBannerAnimatedUrl;
            var1['catalogBannerAnimatedUrl'] = var4;
            var4 = var2.catalogBannerRiveUrl;
            var1['catalogBannerRiveUrl'] = var4;
            var4 = var2.featuredBlockUrl;
            var1['featuredBlockUrl'] = var4;
            var4 = var2.logoUrl;
            var1['logoUrl'] = var4;
            var4 = var2.pdpBgUrl;
            var1['pdpBgUrl'] = var4;
            var4 = var2.mobileBannerUrl;
            var1['mobileBannerUrl'] = var4;
            var4 = var2.mobileBgUrl;
            var1['mobileBgUrl'] = var4;
            var4 = var2.heroLogoDisplayConfig;
            var1['heroLogoDisplayConfig'] = var4;
            var2 = var2.heroDisplayConfig;
            var1['heroBannerDisplayConfig'] = var2;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var10 = var2;
            var9 = var1;
            var1 = new var10[var3](var9, var8);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = null;
        var1 = var3.bind(var4)(var5, var1, var2);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/records/CollectiblesCategoryRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();