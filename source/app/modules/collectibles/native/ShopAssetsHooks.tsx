// app/modules/collectibles/native/ShopAssetsHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/ShopAssetsHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useIsShopCollectionAssetMigrationEnabled;
        var3 = 'HeroBlock';
        var5 = var4.bind(var5)(var3);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot1;
                var2 = {};
                var4 = _closure2_slot0;
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var7 = var4.bannerAsset;
                var6 = null;
                var8 = var6 == var7;
                var5 = undefined;
                if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = var7.static;
case 4:
                var2['heroBannerURL'] = var5;
                var5 = _closure2_slot0;
                var5 = var5.bannerAsset;
                var6 = var6 == var5;
                var1 = undefined;
                if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var1 = var5.animated;
case 6:
                var2['heroBannerAnimatedURL'] = var1;
                var1 = _closure2_slot0;
                var1 = var1.logoUrl;
                var2['heroLogoURL'] = var1;
                var1 = var2;
                _fun0001_ip = 8; continue _fun0001;
case 2:
                var4 = var4.mobileHeroUrl;
                var5 = null;
                if(!(var5 == var4)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                var6 = _closure2_slot0;
                var4 = var6.heroBannerUrl;
case 9:
                var2['heroBannerURL'] = var4;
                var4 = _closure2_slot0;
                var4 = var4.mobileHeroAnimatedUrl;
                if(!(var5 == var4)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                var5 = _closure2_slot0;
                var4 = var5.heroBannerAnimatedUrl;
case 11:
                var2['heroBannerAnimatedURL'] = var4;
                var3 = _closure2_slot0;
                var3 = var3.heroLogoUrl;
                var2['heroLogoURL'] = var3;
                var1 = var2;
case 8:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useHeroBlockAssets'] = var4;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var1 = var2[var1];
            var2 = undefined;
            var5 = var4.bind(var2)(var1);
            var4 = var5.useIsShopCollectionAssetMigrationEnabled;
            var1 = 'FeaturedBlock';
            var1 = var4.bind(var5)(var1);
            var4 = null;
            var4 = var4 == var3;
            if(var1) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var1 = undefined;
            if(var4) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var1 = var3.bannerUrl;
case 15:
            _fun0002_ip = 17; continue _fun0002;
case 13:
            var2 = undefined;
            if(var4) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var2 = var3.assetUrl;
case 18:
            var1 = var2;
case 17:
            return var1;
        }
    };
    var3['useFeaturedBlockAsset'] = var4;
    var4 = function(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 1;
            var3 = var5[var3];
            var8 = undefined;
            var5 = var4.bind(var8)(var3);
            var4 = var5.useIsShopCollectionAssetMigrationEnabled;
            var3 = arg3;
            var3 = var4.bind(var5)(var3);
            var7 = null;
            if(!(var7 == var2)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            return var8;
case 20:
            if(var3) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 2;
            var1 = var4[var1];
            var5 = var3.bind(var8)(var1);
            var4 = var5.getCollectiblesAssetURL;
            var1 = var7 == var2;
            var3 = undefined;
            if(var1) { _fun0003_ip = 2; continue _fun0003 }
case 24:
            var3 = var2.mobileBanner;
case 2:
            if(!(var7 == var3)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var6 = var7 == var2;
            var1 = undefined;
            if(var6) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var6 = var2.catalogBannerAsset;
            var7 = var7 == var6;
            var1 = undefined;
            if(var7) { _fun0003_ip = 27; continue _fun0003 }
case 29:
            var1 = var6.static;
case 27:
            var3 = var1;
case 25:
            var1 = {};
            var6 = arg2;
            var1['size'] = var6;
            var6 = 'webp';
            var1['format'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0003_ip = 30; continue _fun0003;
case 22:
            var1 = var2.mobileBannerUrl;
case 30:
            return var1;
        }
    };
    var3['useMobileBannerAsset'] = var4;
    var4 = function(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 1;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.useIsShopCollectionAssetMigrationEnabled;
            var4 = arg3;
            var4 = var5.bind(var6)(var4);
            var7 = null;
            if(!(var7 == var2)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            return var1;
case 20:
            if(var4) { _fun0004_ip = 31; continue _fun0004 }
case 23:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 2;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.getCollectiblesAssetURL;
            var3 = var2.mobileBg;
            if(!(var7 == var3)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var6 = var2.catalogBannerAsset;
            var7 = var7 == var6;
            var1 = undefined;
            if(var7) { _fun0004_ip = 34; continue _fun0004 }
case 35:
            var1 = var6.static;
case 34:
            var3 = var1;
case 32:
            var1 = {};
            var6 = arg2;
            var1['size'] = var6;
            var6 = 'webp';
            var1['format'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0004_ip = 36; continue _fun0004;
case 31:
            var1 = var2.mobileBgUrl;
case 36:
            return var1;
        }
    };
    var3['useMobileBgAsset'] = var4;
    var2 = function(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 1;
            var3 = var4[var3];
            var4 = undefined;
            var6 = var5.bind(var4)(var3);
            var5 = var6.useIsShopCollectionAssetMigrationEnabled;
            var3 = arg2;
            var3 = var5.bind(var6)(var3);
            var5 = null;
            if(!(var5 == var2)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            return var4;
case 20:
            if(var3) { _fun0005_ip = 28; continue _fun0005 }
case 23:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 2;
            var1 = var5[var1];
            var5 = var3.bind(var4)(var1);
            var4 = var5.getCollectiblesAssetURL;
            var3 = var2.logo;
            var1 = {'size': 200, 'format': 'webp'};
            var1 = var4.bind(var5)(var3, var1);
            _fun0005_ip = 32; continue _fun0005;
case 28:
            var1 = var2.logoUrl;
case 32:
            return var1;
        }
    };
    var3['useLogoAsset'] = var2;
    return var1;
})();