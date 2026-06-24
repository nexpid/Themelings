// app/modules/collectibles/utils/CollectiblesUtils.tsx
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
    var4 = var4.ApplicationStreamPresets;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/utils/CollectiblesUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function constructGoLiveSource(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg3;
            var1 = {};
            var4 = {};
            var5 = _closure1_slot3;
            var5 = var5.PRESET_CUSTOM;
            var4['preset'] = var5;
            var5 = arg1;
            var4['resolution'] = var5;
            var5 = arg2;
            var4['frameRate'] = var5;
            var1['qualityOptions'] = var4;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var4 = var4[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            var2 = var2.MediaEngineContextTypes;
            var2 = var2.STREAM;
            var1['context'] = var2;
            var4 = null;
            if(!(var4 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3.desktopSource;
            if(!(var4 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = {};
            var5 = var3.desktopSource;
            var5 = var5.id;
            var2['sourceId'] = var5;
            var5 = true;
            var2['sound'] = var5;
            var1['desktopSettings'] = var2;
case 4:
            var2 = var3.cameraSource;
            if(!(var4 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            var2 = {};
            var4 = var3.cameraSource;
            var4 = var4.videoDeviceGuid;
            var2['videoDeviceGuid'] = var4;
            var3 = var3.cameraSource;
            var3 = var3.audioDeviceGuid;
            var2['audioDeviceGuid'] = var3;
            var1['cameraSettings'] = var2;
case 2:
            return var1;
        }
    };
    var3['constructGoLiveSource'] = var4;
    var4 = function buildFetchCollectiblesOptionsQuery(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = arg2;
            var1 = {};
            var4 = null;
            if(!(var4 != var3)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var1['tab'] = var3;
case 7:
            if(!(var4 != var2)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var5 = var2.noCache;
            var3 = true;
            if(!(var3 === var5)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var1['no_cache'] = var3;
case 11:
            var5 = var2.includeUnpublished;
            if(!(var3 === var5)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var1['include_unpublished'] = var3;
case 13:
            var5 = var2.includeBundles;
            if(!(var3 === var5)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var1['include_bundles'] = var3;
case 15:
            var5 = var2.includeDynamicBlocks;
            if(!(var3 === var5)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var1['include_dynamic_blocks'] = var3;
case 17:
            var3 = var2.countryCode;
            var3 = var4 != var3;
            if(!var3) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var6 = var2.countryCode;
            var5 = '';
            var3 = var5 !== var6;
case 19:
            if(!var3) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var3 = var2.countryCode;
            var1['country_code'] = var3;
case 21:
            var3 = var2.paymentGateway;
            if(!(var4 !== var3)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var3 = var2.paymentGateway;
            var1['payment_gateway'] = var3;
case 23:
            var8 = var2.variantsReturnStyle;
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = 2;
            var5 = var5[var7];
            var6 = undefined;
            var5 = var9.bind(var6)(var5);
            var5 = var5.ShopVariantsReturnStyle;
            var5 = var5.VARIANTS_GROUP;
            if(!(var8 === var5)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ShopVariantsReturnStyle;
            var3 = var3.VARIANTS_GROUP;
            var1['variants_return_style'] = var3;
case 25:
            var3 = var2.shopHomeConfig;
            if(!(var4 != var3)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var3 = var2.shopHomeConfig;
            var1['shop_home_config'] = var3;
case 27:
            var3 = var2.skipNumCategories;
            if(!(var4 != var3)) { _fun0002_ip = 9; continue _fun0002 }
case 29:
            var2 = var2.skipNumCategories;
            var1['skip_num_categories'] = var2;
case 9:
            return var1;
        }
    };
    var3['buildFetchCollectiblesOptionsQuery'] = var4;
    var4 = function getOptimizedProfileEffectThumbnailUrl(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 == var4)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var1 = undefined;
            return var1;
case 30:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = '?width=100&height=195';
            var1 = var3.bind(var2)(var4, var1);
            return var1;
        }
    };
    var3['getOptimizedProfileEffectThumbnailUrl'] = var4;
    var2 = function useFetchFractionalPremiumInfo() {
        var3 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 3;
        var2 = var5[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = {};
        var6 = true;
        var2['forceFetch'] = var6;
        var3 = var3.bind(var4)(var2);
        var2 = _closure1_slot0;
        var1 = 4;
        var1 = var5[var1];
        var5 = var2.bind(var4)(var1);
        var4 = var5.dateFormat;
        var2 = var3.endsAt;
        var1 = 'L';
        var2 = var4.bind(var5)(var2, var1);
        var1 = {};
        var4 = var3.fetched;
        var4 = !var4;
        var1['isLoading'] = var4;
        var3 = var3.isFractionalPremiumActive;
        var1['isFractionalPremiumActive'] = var3;
        var1['expiresAt'] = var2;
        return var1;
    };
    var3['useFetchFractionalPremiumInfo'] = var2;
    return var1;
})();