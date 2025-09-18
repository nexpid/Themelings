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
    var4 = var4.isAvatarDecorationRecord;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isNameplateRecord;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isProfileEffectRecord;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ApplicationStreamPresets;
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/utils/CollectiblesUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            if(!(var4 != var3)) { _fun0001_ip = 183; continue _fun0001 }
 90:
            var2 = var3.desktopSource;
            if(!(var4 != var2)) { _fun0001_ip = 131; continue _fun0001 }
 100:
            var2 = {};
            var5 = var3.desktopSource;
            var5 = var5.id;
            var2['sourceId'] = var5;
            var5 = true;
            var2['sound'] = var5;
            var1['desktopSettings'] = var2;
 131:
            var2 = var3.cameraSource;
            if(!(var4 != var2)) { _fun0001_ip = 183; continue _fun0001 }
 141:
            var2 = {};
            var4 = var3.cameraSource;
            var4 = var4.videoDeviceGuid;
            var2['videoDeviceGuid'] = var4;
            var3 = var3.cameraSource;
            var3 = var3.audioDeviceGuid;
            var2['audioDeviceGuid'] = var3;
            var1['cameraSettings'] = var2;
 183:
            return var1;
        }
    };
    var3['constructGoLiveSource'] = var4;
    var4 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var2 = arg2;
            var1 = {};
            var5 = null;
            if(!(var5 != var2)) { _fun0002_ip = 20; continue _fun0002 }
 14:
            var1['tab'] = var2;
 20:
            if(!(var5 != var3)) { _fun0002_ip = 327; continue _fun0002 }
 27:
            var4 = var3.noCache;
            var2 = true;
            if(!(var2 === var4)) { _fun0002_ip = 47; continue _fun0002 }
 39:
            var1['no_cache'] = var2;
 47:
            var4 = var3.includeUnpublished;
            if(!(var2 === var4)) { _fun0002_ip = 63; continue _fun0002 }
 57:
            var1['include_unpublished'] = var2;
 63:
            var4 = var3.includeBundles;
            if(!(var2 === var4)) { _fun0002_ip = 79; continue _fun0002 }
 73:
            var1['include_bundles'] = var2;
 79:
            var4 = var3.includePopularPicks;
            if(!(var2 === var4)) { _fun0002_ip = 97; continue _fun0002 }
 89:
            var1['include_popular_picks'] = var2;
 97:
            var4 = var3.includeDynamicBlocks;
            if(!(var2 === var4)) { _fun0002_ip = 115; continue _fun0002 }
 107:
            var1['include_dynamic_blocks'] = var2;
 115:
            var4 = var3.countryCode;
            var4 = var5 != var4;
            if(!var4) { _fun0002_ip = 142; continue _fun0002 }
 128:
            var7 = var3.countryCode;
            var6 = '';
            var4 = var6 !== var7;
 142:
            if(!var4) { _fun0002_ip = 157; continue _fun0002 }
 145:
            var4 = var3.countryCode;
            var1['country_code'] = var4;
 157:
            var4 = var3.paymentGateway;
            if(!(var5 !== var4)) { _fun0002_ip = 179; continue _fun0002 }
 167:
            var4 = var3.paymentGateway;
            var1['payment_gateway'] = var4;
 179:
            var9 = var3.variantsReturnStyle;
            var10 = _closure1_slot0;
            var6 = _closure1_slot2;
            var8 = 5;
            var6 = var6[var8];
            var7 = undefined;
            var6 = var10.bind(var7)(var6);
            var6 = var6.ShopVariantsReturnStyle;
            var6 = var6.VARIANTS_GROUP;
            if(!(var9 === var6)) { _fun0002_ip = 261; continue _fun0002 }
 226:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var4 = var6.bind(var7)(var4);
            var4 = var4.ShopVariantsReturnStyle;
            var4 = var4.VARIANTS_GROUP;
            var1['variants_return_style'] = var4;
 261:
            var4 = var3.shopHomeConfig;
            if(!(var5 != var4)) { _fun0002_ip = 285; continue _fun0002 }
 271:
            var4 = var3.shopHomeConfig;
            var1['shop_home_config'] = var4;
 285:
            var4 = var3.skipNumCategories;
            if(!(var5 != var4)) { _fun0002_ip = 309; continue _fun0002 }
 295:
            var4 = var3.skipNumCategories;
            var1['skip_num_categories'] = var4;
 309:
            var3 = var3.includeNameplatesOnMobile;
            if(!(var2 === var3)) { _fun0002_ip = 327; continue _fun0002 }
 319:
            var1['include_nameplates_on_mobile'] = var2;
 327:
            return var1;
        }
    };
    var3['buildFetchCollectiblesOptionsQuery'] = var4;
    var4 = function(arg1) {
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
    var3['getNameplateSource'] = var4;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var3 = var1.items;
            var1 = null;
            var2 = var1 == var3;
            var4 = undefined;
            var5 = undefined;
            if(var2) { _fun0003_ip = 28; continue _fun0003 }
 22:
            var2 = 0;
            var5 = var3[var2];
 28:
            if(!(var1 != var5)) { _fun0003_ip = 271; continue _fun0003 }
 35:
            var3 = _closure1_slot3;
            var3 = var3.bind(var4)(var5);
            if(var3) { _fun0003_ip = 204; continue _fun0003 }
 53:
            var3 = _closure1_slot5;
            var3 = var3.bind(var4)(var5);
            if(var3) { _fun0003_ip = 151; continue _fun0003 }
 65:
            var3 = _closure1_slot4;
            var6 = var3.bind(var4)(var5);
            var3 = '';
            if(!var6) { _fun0003_ip = 149; continue _fun0003 }
 81:
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
 149:
            return var3;
 151:
            var3 = var5.staticFrameSrc;
            var7 = var5.thumbnailPreviewSrc;
            if(!(var1 != var3)) { _fun0003_ip = 175; continue _fun0003 }
 167:
            var6 = '';
            if(!(var6 === var3)) { _fun0003_ip = 202; continue _fun0003 }
 175:
            var9 = var1 != var7;
            var8 = '';
            var6 = var8;
            if(!var9) { _fun0003_ip = 199; continue _fun0003 }
 189:
            var6 = var8;
            if(!(var6 !== var7)) { _fun0003_ip = 199; continue _fun0003 }
 196:
            var6 = var7;
 199:
            var3 = var6;
 202:
            return var3;
 204:
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
            if(!var3) { _fun0003_ip = 269; continue _fun0003 }
 266:
            var1 = var2;
 269:
            return var1;
 271:
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