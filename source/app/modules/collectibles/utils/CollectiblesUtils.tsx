// app/modules/collectibles/utils/CollectiblesUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var4 = var4.isAvatarDecorationRecord;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.isNameplateRecord;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.isProfileEffectRecord;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.ApplicationStreamPresets;
    var _closure1_slot6 = var4;
    var4 = function getOptimizedProfileEffectThumbnailUrl(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 == var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = undefined;
            return var1;
case 2:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = '?width=100&height=195';
            var1 = var3.bind(var2)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/collectibles/utils/CollectiblesUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg3;
            var1 = {};
            var4 = {};
            var5 = _closure1_slot6;
            var5 = var5.PRESET_CUSTOM;
            var4['preset'] = var5;
            var5 = arg1;
            var4['resolution'] = var5;
            var5 = arg2;
            var4['frameRate'] = var5;
            var1['qualityOptions'] = var4;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 4;
            var4 = var4[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            var2 = var2.MediaEngineContextTypes;
            var2 = var2.STREAM;
            var1['context'] = var2;
            var4 = null;
            if(!(var4 != var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var2 = var3.desktopSource;
            if(!(var4 != var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = {};
            var5 = var3.desktopSource;
            var5 = var5.id;
            var2['sourceId'] = var5;
            var5 = true;
            var2['sound'] = var5;
            var1['desktopSettings'] = var2;
case 6:
            var2 = var3.cameraSource;
            if(!(var4 != var2)) { _fun0002_ip = 4; continue _fun0002 }
case 8:
            var2 = {};
            var4 = var3.cameraSource;
            var4 = var4.videoDeviceGuid;
            var2['videoDeviceGuid'] = var4;
            var3 = var3.cameraSource;
            var3 = var3.audioDeviceGuid;
            var2['audioDeviceGuid'] = var3;
            var1['cameraSettings'] = var2;
case 4:
            return var1;
        }
    };
    var3['constructGoLiveSource'] = var5;
    var5 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var3 = arg2;
            var1 = {};
            var4 = null;
            if(!(var4 != var3)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var1['tab'] = var3;
case 9:
            if(!(var4 != var2)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var5 = var2.noCache;
            var3 = true;
            if(!(var3 === var5)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var1['no_cache'] = var3;
case 13:
            var5 = var2.includeUnpublished;
            if(!(var3 === var5)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var1['include_unpublished'] = var3;
case 15:
            var5 = var2.includeBundles;
            if(!(var3 === var5)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var1['include_bundles'] = var3;
case 17:
            var5 = var2.includeDynamicBlocks;
            if(!(var3 === var5)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var1['include_dynamic_blocks'] = var3;
case 19:
            var3 = var2.countryCode;
            var3 = var4 != var3;
            if(!var3) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var6 = var2.countryCode;
            var5 = '';
            var3 = var5 !== var6;
case 21:
            if(!var3) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var3 = var2.countryCode;
            var1['country_code'] = var3;
case 23:
            var3 = var2.paymentGateway;
            if(!(var4 !== var3)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var3 = var2.paymentGateway;
            var1['payment_gateway'] = var3;
case 25:
            var8 = var2.variantsReturnStyle;
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = 5;
            var5 = var5[var7];
            var6 = undefined;
            var5 = var9.bind(var6)(var5);
            var5 = var5.ShopVariantsReturnStyle;
            var5 = var5.VARIANTS_GROUP;
            if(!(var8 === var5)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ShopVariantsReturnStyle;
            var3 = var3.VARIANTS_GROUP;
            var1['variants_return_style'] = var3;
case 27:
            var3 = var2.shopHomeConfig;
            if(!(var4 != var3)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var3 = var2.shopHomeConfig;
            var1['shop_home_config'] = var3;
case 29:
            var3 = var2.skipNumCategories;
            if(!(var4 != var3)) { _fun0003_ip = 11; continue _fun0003 }
case 31:
            var2 = var2.skipNumCategories;
            var1['skip_num_categories'] = var2;
case 11:
            return var1;
        }
    };
    var3['buildFetchCollectiblesOptionsQuery'] = var5;
    var5 = function(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getAssetCDNUrl;
        var1 = global;
        var1 = var1.HermesInternal;
        var6 = var1.concat;
        var5 = 'collectibles/';
        var4 = arg1;
        var1 = 'asset.webm';
        var1 = var6.bind(var5)(var4, var1);
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getNameplateSource'] = var5;
    var3['getOptimizedProfileEffectThumbnailUrl'] = var4;
    var4 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var3 = var1.items;
            var1 = null;
            var2 = var1 == var3;
            var4 = undefined;
            var5 = undefined;
            if(var2) { _fun0004_ip = 12; continue _fun0004 }
case 32:
            var2 = 0;
            var5 = var3[var2];
case 12:
            if(!(var1 != var5)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var3 = _closure1_slot3;
            var3 = var3.bind(var4)(var5);
            if(var3) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var3 = _closure1_slot5;
            var3 = var3.bind(var4)(var5);
            if(var3) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var3 = _closure1_slot4;
            var6 = var3.bind(var4)(var5);
            var3 = '';
            if(!var6) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 6;
            var6 = var8[var6];
            var8 = var7.bind(var4)(var6);
            var7 = var8.getAssetCDNUrl;
            var11 = var5.asset;
            var6 = global;
            var6 = var6.HermesInternal;
            var10 = var6.concat;
            var9 = 'collectibles/';
            var6 = 'static.png';
            var6 = var10.bind(var9)(var11, var6);
            var3 = var7.bind(var8)(var6);
case 39:
            return var3;
case 37:
            var3 = var5.staticFrameSrc;
            var8 = var5.thumbnailPreviewSrc;
            if(!(var1 != var3)) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var6 = '';
            if(!(var6 === var3)) { _fun0004_ip = 43; continue _fun0004 }
case 41:
            var7 = var1 != var8;
            var9 = '';
            var6 = var9;
            if(!var7) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var6 = var9;
            if(!(var9 !== var8)) { _fun0004_ip = 44; continue _fun0004 }
case 46:
            var7 = _closure1_slot7;
            var7 = var7.bind(var4)(var8);
            var8 = var1 != var7;
            var6 = var9;
            if(!var8) { _fun0004_ip = 44; continue _fun0004 }
case 47:
            var6 = var7;
case 44:
            var3 = var6;
case 43:
            return var3;
case 35:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.getAvatarDecorationURL;
            var2 = {'avatarDecoration': null, 'size': 40, 'canAnimate': false};
            var2['avatarDecoration'] = var5;
            var2 = var3.bind(var4)(var2);
            var3 = var1 != var2;
            var1 = '';
            if(!var3) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var1 = var2;
case 48:
            return var1;
case 33:
            var1 = '';
            return var1;
        }
    };
    var3['getVariantThumbnailUrl'] = var4;
    var2 = function() {
        var3 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 8;
        var2 = var5[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = {};
        var6 = true;
        var2['forceFetch'] = var6;
        var3 = var3.bind(var4)(var2);
        var2 = _closure1_slot0;
        var1 = 9;
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