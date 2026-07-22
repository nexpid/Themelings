// app/modules/skus/utils/transformSKUTenantMetadata.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = function transformCollectiblesItemAssetsFromServer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 == var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = undefined;
            return var1;
case 2:
            var1 = {};
            var3 = var2.static_image_path;
            var1['staticImagePath'] = var3;
            var3 = var2.animated_image_path;
            var1['animatedImagePath'] = var3;
            var2 = var2.video_path;
            var1['videoPath'] = var2;
            return var1;
        }
    };
    var _closure1_slot2 = var1;
    var1 = function transformProfileEffectKeyFrameFromServer(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var2 = var3.src;
            var1['src'] = var2;
            var2 = var3.loop;
            var1['loop'] = var2;
            var2 = var3.height;
            var1['height'] = var2;
            var2 = var3.width;
            var1['width'] = var2;
            var6 = var3.duration;
            var2 = null;
            var7 = var2 != var6;
            var5 = 0;
            if(!var7) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var5 = var6;
case 4:
            var1['duration'] = var5;
            var5 = var3.start;
            var6 = var2 != var5;
            var4 = 0;
            if(!var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5;
case 6:
            var1['start'] = var4;
            var4 = var3.loopDelay;
            var1['loopDelay'] = var4;
            var4 = var3.position;
            var1['position'] = var4;
            var4 = var3.zIndex;
            var1['zIndex'] = var4;
            var5 = var3.randomizedSources;
            var3 = var2 == var5;
            var2 = undefined;
            if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = var5.map;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.src;
                var1 = {};
                var1['src'] = var2;
                return var1;
            };
            var2 = var4.bind(var5)(var3);
case 8:
            var1['randomizedSources'] = var2;
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = function transformCollectiblesItemFromServer(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var4 = null;
            if(!(var4 == var2)) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            var1 = undefined;
            return var1;
case 2:
            var6 = var2.type;
            var7 = _closure1_slot0;
            var1 = _closure1_slot1;
            var8 = 0;
            var1 = var1[var8];
            var5 = undefined;
            var1 = var7.bind(var5)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.AVATAR_DECORATION;
            if(!(var1 !== var6)) { _fun0003_ip = 10; continue _fun0003 }
case 5:
            var7 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var8];
            var1 = var7.bind(var5)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.NAMEPLATE;
            if(!(var1 !== var6)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var7 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var8];
            var1 = var7.bind(var5)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.PROFILE_EFFECT;
            if(!(var1 !== var6)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var7 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var8];
            var1 = var7.bind(var5)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.PROFILE_FRAME;
            if(!(var1 !== var6)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            return var5;
case 15:
            var1 = {};
            var6 = var2.id;
            var1['id'] = var6;
            var6 = var2.type;
            var1['type'] = var6;
            var6 = var2.label;
            var1['label'] = var6;
            var6 = var2.layers;
            var1['layers'] = var6;
            var6 = var2.inner_width;
            var1['innerWidth'] = var6;
            var6 = var2.overflow_top;
            var1['overflowTop'] = var6;
            var6 = var2.overflow_bottom;
            var1['overflowBottom'] = var6;
            var6 = var2.overflow_horizontal;
            var1['overflowHorizontal'] = var6;
            return var1;
case 13:
            var1 = {};
            var6 = var2.id;
            var1['id'] = var6;
            var6 = var2.type;
            var1['type'] = var6;
            var6 = var2.title;
            var1['title'] = var6;
            var6 = var2.description;
            var1['description'] = var6;
            var6 = var2.accessibilityLabel;
            var1['accessibilityLabel'] = var6;
            var6 = var2.animationType;
            var1['animationType'] = var6;
            var6 = var2.staticFrameSrc;
            var1['staticFrameSrc'] = var6;
            var6 = var2.thumbnailPreviewSrc;
            var1['thumbnailPreviewSrc'] = var6;
            var6 = var2.reducedMotionSrc;
            var1['reducedMotionSrc'] = var6;
            var8 = var2.effects;
            var6 = var4 == var8;
            var4 = undefined;
            if(var6) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var7 = var8.map;
            var6 = _closure1_slot3;
            var4 = var7.bind(var8)(var6);
case 17:
            var1['effects'] = var4;
            return var1;
case 11:
            var1 = {};
            var4 = var2.id;
            var1['id'] = var4;
            var4 = var2.type;
            var1['type'] = var4;
            var4 = var2.asset;
            var1['asset'] = var4;
            var6 = _closure1_slot2;
            var4 = var2.assets;
            var4 = var6.bind(var5)(var4);
            var1['assets'] = var4;
            var4 = var2.label;
            var1['label'] = var4;
            var4 = var2.palette;
            var1['palette'] = var4;
            return var1;
case 10:
            var1 = {};
            var4 = var2.id;
            var1['id'] = var4;
            var4 = var2.type;
            var1['type'] = var4;
            var4 = var2.asset;
            var1['asset'] = var4;
            var4 = _closure1_slot2;
            var3 = var2.assets;
            var3 = var4.bind(var5)(var3);
            var1['assets'] = var3;
            var2 = var2.label;
            var1['label'] = var2;
            return var1;
        }
    };
    var _closure1_slot4 = var1;
    var1 = function transformCollectiblesVariantMetadataFromServer(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 == var2)) { _fun0004_ip = 2; continue _fun0004 }
case 3:
            var1 = undefined;
            return var1;
case 2:
            var1 = {};
            var3 = var2.role;
            var1['role'] = var3;
            var3 = var2.base_variant_sku_id;
            var1['baseVariantSkuId'] = var3;
            var3 = var2.base_variant_name;
            var1['baseVariantName'] = var3;
            var3 = var2.value;
            var1['value'] = var3;
            var3 = var2.label;
            var1['label'] = var3;
            var2 = var2.collapse_under;
            var1['collapseUnder'] = var2;
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = function transformSlayerSKUTenantMetadataFromServer(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var5 = null;
            if(!(var5 == var2)) { _fun0005_ip = 2; continue _fun0005 }
case 3:
            var1 = undefined;
            return var1;
case 2:
            var1 = {};
            var8 = var2.carousel_items;
            var6 = var5 == var8;
            var4 = undefined;
            if(var6) { _fun0005_ip = 19; continue _fun0005 }
case 20:
            var7 = var8.map;
            var6 = function(arg1) {
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
                var3 = var2.label_icon_asset_id;
                var1['labelIconAssetId'] = var3;
                var3 = var2.title;
                var1['title'] = var3;
                var2 = var2.description;
                var1['description'] = var2;
                return var1;
            };
            var4 = var7.bind(var8)(var6);
case 19:
            if(!(var5 == var4)) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            var4 = new Array(0);
case 21:
            var1['carouselItems'] = var4;
            var4 = var2.expires_at;
            var4 = var5 != var4;
            var3 = undefined;
            if(!var4) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var4 = global;
            var6 = var4.Date;
            var9 = var2.expires_at;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var10 = var5;
            var4 = new var10[var6](var9, var8);
            var3 = var4 instanceof Object ? var4 : var5;
case 23:
            var1['expiresAt'] = var3;
            var3 = var2.card_image_asset_id;
            var1['cardImageAssetId'] = var3;
            var2 = var2.card_background_image_asset_id;
            var1['cardBackgroundImageAssetId'] = var2;
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function transformCollectiblesSKUTenantMetadataFromServer(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var6 = null;
            if(!(var6 == var2)) { _fun0006_ip = 2; continue _fun0006 }
case 3:
            var1 = undefined;
            return var1;
case 2:
            var1 = {};
            var3 = var2.type;
            var1['type'] = var3;
            var7 = _closure1_slot4;
            var4 = var2.item;
            var5 = undefined;
            var4 = var7.bind(var5)(var4);
            var1['item'] = var4;
            var4 = var2.category_sku_id;
            var1['categorySkuId'] = var4;
            var4 = var2.premium_type;
            var1['premiumType'] = var4;
            var4 = var2.expires_seconds_after_claim;
            var1['expiresSecondsAfterClaim'] = var4;
            var4 = var2.expires_at;
            var6 = var6 != var4;
            var4 = undefined;
            if(!var6) { _fun0006_ip = 25; continue _fun0006 }
case 26:
            var6 = global;
            var8 = var6.Date;
            var7 = var2.expires_at;
            var6 = 1000;
            var9 = var6 * var7;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var10 = var7;
            var6 = new var10[var8](var9, var8);
            var4 = var6 instanceof Object ? var6 : var7;
case 25:
            var1['expiresAt'] = var4;
            var4 = _closure1_slot5;
            var3 = var2.variant;
            var3 = var4.bind(var5)(var3);
            var1['variant'] = var3;
            var3 = var2.option_selector_display_value;
            var1['optionSelectorDisplayValue'] = var3;
            var3 = var2.source_type;
            var1['sourceType'] = var3;
            var2 = var2.is_first_party;
            var1['isFirstParty'] = var2;
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/skus/utils/transformSKUTenantMetadata.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function transformSKUTenantMetadata(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 == var2)) { _fun0007_ip = 2; continue _fun0007 }
case 3:
            var1 = undefined;
            return var1;
case 2:
            var1 = {};
            var6 = _closure1_slot6;
            var5 = var2.social_layer;
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var1['socialLayer'] = var5;
            var3 = _closure1_slot7;
            var2 = var2.collectibles;
            var2 = var3.bind(var4)(var2);
            var1['collectibles'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();