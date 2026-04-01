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
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var2 = function(arg1) {
        var5 = function CollectiblesCategoryRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                var1 = _closure1_slot9;
                var1 = var1.bind(var5)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var4, var10);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var5)(var4);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 8:
                var1 = var3.bind(var5)(var4, var1);
                var3 = var2.products;
                var1['products'] = var3;
                var3 = var2.heroRanking;
                var1['heroRanking'] = var3;
                var3 = global;
                var6 = var3.Array;
                var4 = var6.isArray;
                var3 = var2.products;
                var3 = var4.bind(var6)(var3);
                if(!var3) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var4 = var2.products;
                var6 = var4.length;
                var4 = 0;
                var3 = var6 > var4;
case 9:
                if(!var3) { _fun0002_ip = 11; continue _fun0002 }
case 12:
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
case 11:
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
        var6 = _closure1_slot7;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot3;
        var1 = {};
        var6 = 'fromServer';
        var1['key'] = var6;
        var2 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var26 = this;
                var23 = var3.products;
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
                var2 = {'products': 0, 'hero_ranking': 0, 'hero_logo_display_config': 0, 'hero_banner_display_config': 0, 'hero_banner_url': 0, 'hero_banner_animated_url': 0, 'hero_rive_url': 0, 'hero_logo_url': 0, 'catalog_banner_url': 0, 'catalog_banner_animated_url': 0, 'catalog_banner_rive_url': 0, 'featured_block_url': 0, 'logo_url': 0, 'pdp_bg_url': 0, 'mobile_banner_url': 0, 'mobile_bg_url': 0};
                var28 = null;
                var29 = var2;
                var1 = silentSetPrototypeOf(var29, var28);
                var29 = {};
                var28 = var3;
                var27 = var2;
                var24 = copyDataProperties(var29, var28, var27);
                var3 = _closure2_slot0;
                var1 = {};
                var _closure3_slot0 = var26;
                var25 = _closure1_slot6;
                var21 = _closure1_slot5;
                var6 = undefined;
                var22 = var21.bind(var6)(var3);
                var21 = 'fromServer';
                var22 = var25.bind(var6)(var22, var21, var26);
                var _closure3_slot1 = var22;
                var25 = 'function';
                var21 = typeof var22;
                if(!(var25 === var21)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var22 = function(arg1) {
                    var4 = _closure3_slot1;
                    var3 = var4.apply;
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
case 13:
                var21 = new Array(1);
                var21[0] = var24;
                var28 = var22.bind(var6)(var21);
                var29 = var1;
                var21 = copyDataProperties(var29, var28);
                var22 = var23.reduce;
                var21 = function(arg1, arg2) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = arg1;
                        var5 = _closure1_slot8;
                        var3 = var5.fromServer;
                        var2 = arg2;
                        var3 = var3.bind(var5)(var2);
                        var5 = var3.type;
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var8 = 8;
                        var2 = var2[var8];
                        var7 = undefined;
                        var2 = var6.bind(var7)(var2);
                        var2 = var2.CollectiblesItemType;
                        var2 = var2.VARIANTS_GROUP;
                        var2 = var5 !== var2;
                        if(!var2) { _fun0004_ip = 15; continue _fun0004 }
case 3:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var4 = var4[var8];
                        var4 = var6.bind(var7)(var4);
                        var4 = var4.CollectiblesItemType;
                        var4 = var4.EXTERNAL_SKU;
                        var2 = var5 !== var4;
case 15:
                        if(!var2) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                        var4 = var3.items;
                        var5 = var4.length;
                        var4 = 0;
                        var2 = var4 === var5;
case 16:
                        if(var2) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                        var2 = var1.push;
                        var2 = var2.bind(var1)(var3);
case 18:
                        return var1;
                    }
                };
                var4 = new Array(0);
                var21 = var22.bind(var23)(var21, var4);
                var4 = 'products';
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
                var30 = var2;
                var29 = var1;
                var1 = new var30[var3](var29, var28);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
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