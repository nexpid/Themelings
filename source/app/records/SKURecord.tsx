// app/records/SKURecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function transformCollectiblesItemAssetsFromServer(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 == var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = undefined;
            return var1;
case 6:
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
    var _closure1_slot15 = var1;
    var1 = function transformProfileEffectKeyFrameFromServer(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
            if(!var7) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var5 = var6;
case 8:
            var1['duration'] = var5;
            var5 = var3.start;
            var6 = var2 != var5;
            var4 = 0;
            if(!var6) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var4 = var5;
case 10:
            var1['start'] = var4;
            var4 = var3.loop_delay;
            var1['loopDelay'] = var4;
            var4 = var3.position;
            var1['position'] = var4;
            var4 = var3.z_index;
            var1['zIndex'] = var4;
            var5 = var3.randomized_sources;
            var3 = var2 == var5;
            var2 = undefined;
            if(var3) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var4 = var5.map;
            var3 = function(arg1) {
                var1 = {};
                var2 = arg1;
                var2 = var2.src;
                var1['src'] = var2;
                return var1;
            };
            var2 = var4.bind(var5)(var3);
case 12:
            var1['randomizedSources'] = var2;
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function transformCollectiblesItemFromServer(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var4 = null;
            if(!(var4 != var2)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var6 = var2.type;
            var7 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 8;
            var1 = var1[var8];
            var5 = undefined;
            var1 = var7.bind(var5)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.AVATAR_DECORATION;
            if(!(var6 !== var1)) { _fun0004_ip = 16; continue _fun0004 }
case 9:
            var6 = var2.type;
            var7 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var7.bind(var5)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.NAMEPLATE;
            if(!(var6 !== var1)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var6 = var2.type;
            var7 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var7.bind(var5)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.PROFILE_EFFECT;
            if(!(var6 !== var1)) { _fun0004_ip = 19; continue _fun0004 }
case 14:
            var1 = undefined;
            return var1;
case 19:
            var1 = {};
            var6 = var2.id;
            var1['id'] = var6;
            var6 = var2.type;
            var1['type'] = var6;
            var6 = var2.title;
            var1['title'] = var6;
            var6 = var2.title_localized;
            var1['titleLocalized'] = var6;
            var6 = var2.description;
            var1['description'] = var6;
            var6 = var2.description_localized;
            var1['descriptionLocalized'] = var6;
            var6 = var2.accessibility_label;
            var1['accessibilityLabel'] = var6;
            var6 = var2.accessibility_label_localized;
            var1['accessibilityLabelLocalized'] = var6;
            var6 = var2.animation_type;
            var1['animationType'] = var6;
            var6 = var2.static_frame_src;
            var1['staticFrameSrc'] = var6;
            var6 = var2.thumbnail_preview_src;
            var1['thumbnailPreviewSrc'] = var6;
            var6 = var2.reduced_motion_src;
            var1['reducedMotionSrc'] = var6;
            var8 = var2.effects;
            var6 = var4 == var8;
            var4 = undefined;
            if(var6) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var7 = var8.map;
            var6 = _closure1_slot16;
            var4 = var7.bind(var8)(var6);
case 20:
            var1['effects'] = var4;
            return var1;
case 17:
            var1 = {};
            var4 = var2.id;
            var1['id'] = var4;
            var4 = var2.type;
            var1['type'] = var4;
            var4 = var2.asset;
            var1['asset'] = var4;
            var6 = _closure1_slot15;
            var4 = var2.assets;
            var4 = var6.bind(var5)(var4);
            var1['assets'] = var4;
            var4 = var2.label;
            var1['label'] = var4;
            var4 = var2.label_localized;
            var1['labelLocalized'] = var4;
            var4 = var2.palette;
            var1['palette'] = var4;
            return var1;
case 16:
            var1 = {};
            var4 = var2.id;
            var1['id'] = var4;
            var4 = var2.type;
            var1['type'] = var4;
            var4 = var2.asset;
            var1['asset'] = var4;
            var4 = _closure1_slot15;
            var3 = var2.assets;
            var3 = var4.bind(var5)(var3);
            var1['assets'] = var3;
            var3 = var2.label;
            var1['label'] = var3;
            var2 = var2.label_localized;
            var1['labelLocalized'] = var2;
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function transformCollectiblesVariantMetadataFromServer(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 == var2)) { _fun0005_ip = 6; continue _fun0005 }
case 7:
            var1 = undefined;
            return var1;
case 6:
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
    var _closure1_slot18 = var1;
    var1 = function transformCollectiblesSKUTenantMetadataFromServer(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var6 = null;
            if(!(var6 == var2)) { _fun0006_ip = 6; continue _fun0006 }
case 7:
            var1 = undefined;
            return var1;
case 6:
            var1 = {};
            var3 = var2.type;
            var1['type'] = var3;
            var7 = _closure1_slot17;
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
            if(!var6) { _fun0006_ip = 22; continue _fun0006 }
case 23:
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
case 22:
            var1['expiresAt'] = var4;
            var4 = _closure1_slot18;
            var3 = var2.variant;
            var3 = var4.bind(var5)(var3);
            var1['variant'] = var3;
            var2 = var2.option_selector_display_value;
            var1['optionSelectorDisplayValue'] = var2;
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function transformTenantMetadata(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 == var2)) { _fun0007_ip = 6; continue _fun0007 }
case 7:
            var1 = undefined;
            return var1;
case 6:
            var1 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 9;
            var5 = var5[var4];
            var4 = undefined;
            var7 = var6.bind(var4)(var5);
            var6 = var7.transformSlayerSKUTenantMetadataFromServer;
            var5 = var2.social_layer;
            var5 = var6.bind(var7)(var5);
            var1['socialLayer'] = var5;
            var3 = _closure1_slot19;
            var2 = var2.collectibles;
            var2 = var3.bind(var4)(var2);
            var1['collectibles'] = var2;
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var7 = 6;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.GIFTABLE_CURRENCIES;
    var _closure1_slot9 = var8;
    var8 = var7.OperatingSystems;
    var _closure1_slot10 = var8;
    var8 = var7.SKUFlags;
    var _closure1_slot11 = var8;
    var7 = var7.SKUTypes;
    var _closure1_slot12 = var7;
    var7 = ['500428425362931713', '451550535720501248', '471376328319303681', '466696214818193408'];
    var _closure1_slot13 = var7;
    var2 = function(arg1) {
        var5 = function SKURecord(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = arg1;
                var5 = this;
                var1 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = _closure1_slot6;
                var10 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot14;
                var1 = var1.bind(var4)();
                if(var1) { _fun0008_ip = 24; continue _fun0008 }
case 25:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var4);
                _fun0008_ip = 26; continue _fun0008;
case 24:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
case 26:
                var1 = var3.bind(var4)(var5, var1);
                var3 = var2.id;
                var1['id'] = var3;
                var3 = var2.type;
                var1['type'] = var3;
                var3 = var2.applicationId;
                var1['applicationId'] = var3;
                var3 = var2.application;
                var1['application'] = var3;
                var3 = var2.eligiblePaymentGateways;
                var1['eligiblePaymentGateways'] = var3;
                var3 = var2.productLine;
                var1['productLine'] = var3;
                var3 = var2.name;
                var1['name'] = var3;
                var3 = var2.preorderReleaseAt;
                var1['preorderReleaseAt'] = var3;
                var3 = var2.preorderApproximateReleaseDate;
                var1['preorderApproximateReleaseDate'] = var3;
                var3 = var2.releaseDate;
                var1['releaseDate'] = var3;
                var3 = var2.summary;
                var1['summary'] = var3;
                var3 = var2.features;
                var1['features'] = var3;
                var3 = var2.genres;
                var1['genres'] = var3;
                var3 = var2.dependentSkuId;
                var1['dependentSkuId'] = var3;
                var3 = var2.manifests;
                var1['manifests'] = var3;
                var3 = var2.availableRegions;
                var1['availableRegions'] = var3;
                var3 = var2.accessType;
                var1['accessType'] = var3;
                var3 = var2.systemRequirements;
                var1['systemRequirements'] = var3;
                var3 = var2.contentRating;
                var1['contentRating'] = var3;
                var3 = var2.contentRatingAgency;
                var1['contentRatingAgency'] = var3;
                var3 = var2.legalNotice;
                var1['legalNotice'] = var3;
                var3 = var2.price;
                var1['price'] = var3;
                var3 = var2.prices;
                var1['prices'] = var3;
                var3 = var2.premium;
                var1['premium'] = var3;
                var3 = var2.showAgeGate;
                var1['showAgeGate'] = var3;
                var3 = var2.restricted;
                var1['restricted'] = var3;
                var3 = var2.slug;
                var1['slug'] = var3;
                var3 = var2.exclusive;
                var1['exclusive'] = var3;
                var3 = var2.locales;
                var1['locales'] = var3;
                var3 = var2.flags;
                var1['flags'] = var3;
                var3 = var2.externalPurchaseUrl;
                if(var3) { _fun0008_ip = 27; continue _fun0008 }
case 28:
                var3 = null;
case 27:
                var1['externalPurchaseUrl'] = var3;
                var3 = var2.deleted;
                var1['deleted'] = var3;
                var3 = var2.bundledSkuIds;
                var1['bundledSkuIds'] = var3;
                var3 = var2.bundledSkus;
                var1['bundledSkus'] = var3;
                var3 = var2.tenantMetadata;
                var1['tenantMetadata'] = var3;
                var3 = var2.selectedOptions;
                var1['selectedOptions'] = var3;
                var3 = var2.productId;
                var1['productId'] = var3;
                var3 = var2.thumbnailAssetId;
                var1['thumbnailAssetId'] = var3;
                var3 = var2.description;
                var1['description'] = var3;
                var3 = var2.orbsReward;
                var1['orbsReward'] = var3;
                var2 = var2.eligibleOffers;
                var1['eligibleOffers'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot7;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot4;
        var6 = {};
        var2 = 'supportedOperatingSystems';
        var6['key'] = var2;
        var2 = function get() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = this;
                var3 = var2.systemRequirements;
                var1 = null;
                if(!(var1 == var3)) { _fun0009_ip = 29; continue _fun0009 }
case 30:
                var1 = new Array(0);
                _fun0009_ip = 31; continue _fun0009;
case 29:
                var3 = global;
                var4 = var3.Object;
                var3 = var4.keys;
                var2 = var2.systemRequirements;
                var1 = var3.bind(var4)(var2);
case 31:
                var3 = var1.length;
                var2 = 0;
                if(!(!(var3 > var2))) { _fun0009_ip = 32; continue _fun0009 }
case 33:
                var2 = _closure1_slot10;
                var3 = var2.WINDOWS;
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
case 32:
                return var1;
            }
        };
        var6['get'] = var2;
        var2 = new Array(13);
        var2[0] = var6;
        var6 = {};
        var7 = 'isOnSale';
        var6['key'] = var7;
        var7 = function get() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = this;
                var1 = var2.price;
                var3 = null;
                var1 = var3 != var1;
                if(!var1) { _fun0010_ip = 34; continue _fun0010 }
case 35:
                var2 = var2.price;
                var2 = var2.saleAmount;
                var1 = var3 != var2;
case 34:
                return var1;
            }
        };
        var6['get'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'isGiftable';
        var6['key'] = var7;
        var7 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = arguments[0];
                var2 = this;
                var1 = undefined;
                if(!(var3 === var1)) { _fun0011_ip = 35; continue _fun0011 }
case 15:
                var3 = var2.price;
case 35:
                var5 = var2.type;
                var1 = _closure1_slot12;
                var1 = var1.DURABLE_PRIMARY;
                var1 = var5 === var1;
                if(!var1) { _fun0011_ip = 36; continue _fun0011 }
case 37:
                var1 = var2.available;
case 36:
                if(!var1) { _fun0011_ip = 38; continue _fun0011 }
case 25:
                var1 = var2.requiresPayment;
case 38:
                if(!var1) { _fun0011_ip = 39; continue _fun0011 }
case 40:
                var5 = null;
                var1 = var5 != var3;
case 39:
                if(!var1) { _fun0011_ip = 41; continue _fun0011 }
case 5:
                var5 = _closure1_slot9;
                var4 = var5.has;
                var3 = var3.currency;
                var1 = var4.bind(var5)(var3);
case 41:
                if(!var1) { _fun0011_ip = 42; continue _fun0011 }
case 43:
                var3 = var2.externalPurchaseUrl;
                var2 = null;
                var1 = var2 == var3;
case 42:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[2] = var6;
        var6 = {};
        var7 = 'getPrice';
        var6['key'] = var7;
        var7 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var6 = arguments[0];
                var2 = arguments[1];
                var4 = undefined;
                if(!(var6 === var4)) { _fun0012_ip = 44; continue _fun0012 }
case 15:
                var6 = null;
case 44:
                if(!(var2 === var4)) { _fun0012_ip = 45; continue _fun0012 }
case 35:
                var2 = true;
case 45:
                var1 = this;
                var3 = var1.price;
                var1 = null;
                if(!(var1 != var3)) { _fun0012_ip = 46; continue _fun0012 }
case 47:
                if(!(var1 != var6)) { _fun0012_ip = 24; continue _fun0012 }
case 48:
                var5 = var3.premium;
                var7 = var1 == var5;
                var4 = undefined;
                if(var7) { _fun0012_ip = 9; continue _fun0012 }
case 49:
                var4 = var5[var6];
case 9:
                if(!(var1 == var4)) { _fun0012_ip = 50; continue _fun0012 }
case 24:
                if(!var2) { _fun0012_ip = 51; continue _fun0012 }
case 52:
                var2 = var3.saleAmount;
                if(!(var1 == var2)) { _fun0012_ip = 53; continue _fun0012 }
case 51:
                var2 = {};
                var5 = var3.amount;
                var2['amount'] = var5;
                var5 = var3.currency;
                var2['currency'] = var5;
                _fun0012_ip = 54; continue _fun0012;
case 53:
                var5 = {};
                var6 = var3.saleAmount;
                var5['amount'] = var6;
                var6 = var3.currency;
                var5['currency'] = var6;
                var2 = var5;
case 54:
                return var2;
case 50:
                var2 = {};
                var4 = var4.amount;
                var2['amount'] = var4;
                var3 = var3.currency;
                var2['currency'] = var3;
                return var2;
case 46:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[3] = var6;
        var6 = {};
        var7 = 'getDisplaySalePercentage';
        var6['key'] = var7;
        var7 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var2 = this;
                var1 = var2.price;
                var4 = null;
                var3 = var4 == var1;
                var1 = null;
                if(var3) { _fun0013_ip = 32; continue _fun0013 }
case 45:
                var3 = var2.price;
                var3 = var3.salePercentage;
                var3 = var4 == var3;
                var1 = null;
                if(var3) { _fun0013_ip = 32; continue _fun0013 }
case 55:
                var2 = var2.price;
                var5 = var2.salePercentage;
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = '-';
                var2 = '%';
                var1 = var4.bind(var3)(var5, var2);
case 32:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[4] = var6;
        var6 = {};
        var7 = 'requiresPayment';
        var6['key'] = var7;
        var7 = function get() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = this;
                var2 = var1.getPrice;
                var2 = var2.bind(var1)();
                var1 = var1.premium;
                var1 = !var1;
                if(!var1) { _fun0014_ip = 56; continue _fun0014 }
case 57:
                var3 = null;
                var1 = var3 != var2;
case 56:
                if(!var1) { _fun0014_ip = 58; continue _fun0014 }
case 34:
                var3 = var2.amount;
                var2 = 0;
                var1 = var3 > var2;
case 58:
                return var1;
            }
        };
        var6['get'] = var7;
        var2[5] = var6;
        var6 = {};
        var7 = 'isTheGameAwardsWinner';
        var6['key'] = var7;
        var7 = function get() {
            var3 = _closure1_slot13;
            var2 = var3.includes;
            var1 = this;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6['get'] = var7;
        var2[6] = var6;
        var6 = {};
        var7 = 'available';
        var6['key'] = var7;
        var7 = function get() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var2 = this;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 10;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.hasFlag;
                var3 = var2.flags;
                var1 = _closure1_slot11;
                var1 = var1.AVAILABLE;
                var1 = var4.bind(var5)(var3, var1);
                if(var1) { _fun0015_ip = 3; continue _fun0015 }
case 59:
                var3 = var2.externalPurchaseUrl;
                var2 = null;
                var1 = var2 != var3;
case 3:
                return var1;
            }
        };
        var6['get'] = var7;
        var2[7] = var6;
        var6 = {};
        var7 = 'isAvailableForDistribution';
        var6['key'] = var7;
        var7 = function value() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var4 = this;
                var1 = var4.available;
                if(!var1) { _fun0016_ip = 60; continue _fun0016 }
case 15:
                var2 = var4.getPrice;
                var3 = var2.bind(var4)();
                var2 = null;
                var1 = var2 != var3;
case 60:
                if(!var1) { _fun0016_ip = 37; continue _fun0016 }
case 56:
                var3 = var4.externalPurchaseUrl;
                var2 = null;
                var1 = var2 == var3;
case 37:
                if(!var1) { _fun0016_ip = 61; continue _fun0016 }
case 58:
                var2 = var4.premium;
                var2 = !var2;
                if(var2) { _fun0016_ip = 62; continue _fun0016 }
case 59:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 10;
                var6 = var6[var5];
                var5 = undefined;
                var6 = var7.bind(var5)(var6);
                var5 = var6.hasFlag;
                var4 = var4.flags;
                var3 = _closure1_slot11;
                var3 = var3.PREMIUM_AND_DISTRIBUTION;
                var2 = var5.bind(var6)(var4, var3);
case 62:
                var1 = var2;
case 61:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[8] = var6;
        var6 = {};
        var7 = 'isAvailable';
        var6['key'] = var7;
        var7 = function value() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 10;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.hasFlag;
            var2 = this;
            var2 = var2.flags;
            var1 = _closure1_slot11;
            var1 = var1.AVAILABLE;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var6['value'] = var7;
        var2[9] = var6;
        var6 = {};
        var7 = 'isPremiumPerk';
        var6['key'] = var7;
        var7 = function value() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var4 = this;
                var1 = var4.premium;
                if(!var1) { _fun0017_ip = 63; continue _fun0017 }
case 15:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var8 = 10;
                var2 = var2[var8];
                var7 = undefined;
                var9 = var5.bind(var7)(var2);
                var6 = var9.hasFlag;
                var5 = var4.flags;
                var2 = _closure1_slot11;
                var2 = var2.PREMIUM_PURCHASE;
                var2 = var6.bind(var9)(var5, var2);
                if(var2) { _fun0017_ip = 64; continue _fun0017 }
case 65:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var6 = var6.bind(var7)(var5);
                var5 = var6.hasFlag;
                var4 = var4.flags;
                var3 = _closure1_slot11;
                var3 = var3.PREMIUM_AND_DISTRIBUTION;
                var2 = var5.bind(var6)(var4, var3);
case 64:
                var1 = var2;
case 63:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[10] = var6;
        var6 = {};
        var7 = 'hasFeature';
        var6['key'] = var7;
        var7 = function value(arg1) {
            var1 = this;
            var3 = var1.features;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6['value'] = var7;
        var2[11] = var6;
        var6 = {};
        var7 = 'isPreorder';
        var6['key'] = var7;
        var7 = function value() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var2 = this;
                var1 = var2.preorderReleaseAt;
                var3 = null;
                var1 = var3 != var1;
                if(var1) { _fun0018_ip = 60; continue _fun0018 }
case 35:
                var2 = var2.preorderApproximateReleaseDate;
                var1 = var3 != var2;
case 60:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[12] = var6;
        var6 = {};
        var7 = 'createFromServer';
        var6['key'] = var7;
        var1 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var2 = arg1;
                var9 = var2.price;
                var3 = _closure2_slot0;
                var1 = {};
                var4 = var2.id;
                var1['id'] = var4;
                var4 = var2.type;
                var1['type'] = var4;
                var4 = var2.application_id;
                var1['applicationId'] = var4;
                var5 = var2.application;
                var4 = null;
                var7 = var4 != var5;
                var5 = null;
                if(!var7) { _fun0019_ip = 66; continue _fun0019 }
case 8:
                var10 = _closure1_slot8;
                var8 = var10.createFromServer;
                var7 = var2.application;
                var5 = var8.bind(var10)(var7);
case 66:
                var1['application'] = var5;
                var7 = var2.eligible_payment_gateways;
                var8 = var4 != var7;
                var5 = null;
                if(!var8) { _fun0019_ip = 67; continue _fun0019 }
case 68:
                var5 = var7;
case 67:
                var1['eligiblePaymentGateways'] = var5;
                var5 = var2.product_line;
                var1['productLine'] = var5;
                var8 = var2.name;
                var10 = var4 != var8;
                var5 = '';
                var7 = var5;
                if(!var10) { _fun0019_ip = 69; continue _fun0019 }
case 19:
                var7 = var8;
case 69:
                var1['name'] = var7;
                var7 = var2.release_date;
                var8 = var4 != var7;
                var7 = null;
                if(!var8) { _fun0019_ip = 70; continue _fun0019 }
case 71:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 11;
                var8 = var11[var8];
                var11 = undefined;
                var10 = var10.bind(var11)(var8);
                var8 = var2.release_date;
                var7 = var10.bind(var11)(var8);
case 70:
                var1['releaseDate'] = var7;
                var7 = var2.preorder_release_at;
                var8 = var4 != var7;
                var7 = null;
                if(!var8) { _fun0019_ip = 72; continue _fun0019 }
case 73:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 11;
                var8 = var11[var8];
                var11 = undefined;
                var10 = var10.bind(var11)(var8);
                var8 = var2.preorder_release_at;
                var7 = var10.bind(var11)(var8);
case 72:
                var1['preorderReleaseAt'] = var7;
                var7 = var2.preorder_approximate_release_date;
                var1['preorderApproximateReleaseDate'] = var7;
                var7 = var2.summary;
                var1['summary'] = var7;
                var7 = global;
                var11 = var7.Set;
                var12 = var2.features;
                var10 = var11.prototype;
                var10 = Object.create(var10, {constructor: {value: var11}});
                var13 = var10;
                var8 = new var13[var11](var12, var11);
                var8 = var8 instanceof Object ? var8 : var10;
                var1['features'] = var8;
                var10 = var7.Set;
                var12 = var2.genres;
                var8 = var10.prototype;
                var8 = Object.create(var8, {constructor: {value: var10}});
                var13 = var8;
                var7 = new var13[var10](var12, var11);
                var7 = var7 instanceof Object ? var7 : var8;
                var1['genres'] = var7;
                var7 = var2.dependent_sku_id;
                var1['dependentSkuId'] = var7;
                var7 = var2.manifests;
                var1['manifests'] = var7;
                var7 = var2.available_regions;
                var1['availableRegions'] = var7;
                var7 = var2.access_type;
                var1['accessType'] = var7;
                var7 = var2.system_requirements;
                var1['systemRequirements'] = var7;
                var7 = var2.content_rating;
                var1['contentRating'] = var7;
                var7 = var2.content_rating_agency;
                var1['contentRatingAgency'] = var7;
                var7 = var2.legal_notice;
                var1['legalNotice'] = var7;
                var8 = var4 != var9;
                var7 = null;
                if(!var8) { _fun0019_ip = 74; continue _fun0019 }
case 75:
                var8 = {};
                var10 = var9.amount;
                var8['amount'] = var10;
                var10 = var9.currency;
                var8['currency'] = var10;
                var10 = var9.sale_amount;
                var8['saleAmount'] = var10;
                var10 = var9.sale_percentage;
                var8['salePercentage'] = var10;
                var9 = var9.premium;
                var8['premium'] = var9;
                var7 = var8;
case 74:
                var1['price'] = var7;
                var7 = var2.prices;
                if(!(var4 == var7)) { _fun0019_ip = 76; continue _fun0019 }
case 77:
                var7 = {};
                _fun0019_ip = 78; continue _fun0019;
case 76:
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var8 = 12;
                var9 = var9[var8];
                var8 = undefined;
                var10 = var10.bind(var8)(var9);
                var9 = var10.getPricesFromServer;
                var8 = var2.prices;
                var7 = var9.bind(var10)(var8);
case 78:
                var1['prices'] = var7;
                var8 = var2.premium;
                var7 = var4 != var8;
                if(!var7) { _fun0019_ip = 79; continue _fun0019 }
case 80:
                var7 = var8;
case 79:
                var1['premium'] = var7;
                var7 = var2.show_age_gate;
                if(var7) { _fun0019_ip = 81; continue _fun0019 }
case 82:
                var7 = false;
case 81:
                var1['showAgeGate'] = var7;
                var7 = var2.restricted;
                if(var7) { _fun0019_ip = 83; continue _fun0019 }
case 84:
                var7 = false;
case 83:
                var1['restricted'] = var7;
                var7 = var2.slug;
                var8 = var4 != var7;
                if(!var8) { _fun0019_ip = 85; continue _fun0019 }
case 86:
                var5 = var7;
case 85:
                var1['slug'] = var5;
                var5 = var2.exclusive;
                if(var5) { _fun0019_ip = 87; continue _fun0019 }
case 88:
                var5 = false;
case 87:
                var1['exclusive'] = var5;
                var5 = var2.locales;
                if(!(var4 == var5)) { _fun0019_ip = 89; continue _fun0019 }
case 90:
                var5 = ['en-US'];
case 89:
                var1['locales'] = var5;
                var5 = var2.flags;
                var1['flags'] = var5;
                var5 = var2.external_purchase_url;
                var1['externalPurchaseUrl'] = var5;
                var7 = var2.deleted;
                var5 = var4 != var7;
                if(!var5) { _fun0019_ip = 91; continue _fun0019 }
case 92:
                var5 = var7;
case 91:
                var1['deleted'] = var5;
                var5 = var2.bundled_sku_ids;
                if(!(var4 == var5)) { _fun0019_ip = 93; continue _fun0019 }
case 94:
                var5 = new Array(0);
case 93:
                var1['bundledSkuIds'] = var5;
                var10 = var2.bundled_skus;
                var8 = var4 == var10;
                var5 = undefined;
                var7 = undefined;
                if(var8) { _fun0019_ip = 95; continue _fun0019 }
case 96:
                var9 = var10.map;
                var8 = function(arg1) {
                    var3 = _closure2_slot0;
                    var2 = var3.createFromServer;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7 = var9.bind(var10)(var8);
case 95:
                if(!(var4 == var7)) { _fun0019_ip = 97; continue _fun0019 }
case 98:
                var7 = new Array(0);
case 97:
                var1['bundledSkus'] = var7;
                var8 = _closure1_slot20;
                var7 = var2.tenant_metadata;
                var7 = var8.bind(var5)(var7);
                var1['tenantMetadata'] = var7;
                var8 = var2.selected_options;
                var7 = var4 == var8;
                var5 = undefined;
                if(var7) { _fun0019_ip = 99; continue _fun0019 }
case 100:
                var7 = var8.map;
                var6 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.option_name;
                    var2 = var1.option_value;
                    var1 = {};
                    var1['optionName'] = var3;
                    var1['optionValue'] = var2;
                    return var1;
                };
                var5 = var7.bind(var8)(var6);
case 99:
                if(!(var4 == var5)) { _fun0019_ip = 101; continue _fun0019 }
case 102:
                var5 = new Array(0);
case 101:
                var1['selectedOptions'] = var5;
                var5 = var2.product_id;
                var1['productId'] = var5;
                var5 = var2.thumbnail_asset_id;
                var1['thumbnailAssetId'] = var5;
                var5 = var2.description;
                var1['description'] = var5;
                var5 = var2.orbs_reward;
                var1['orbsReward'] = var5;
                var2 = var2.eligible_offers;
                if(!(var4 == var2)) { _fun0019_ip = 103; continue _fun0019 }
case 104:
                var2 = new Array(0);
case 103:
                var1['eligibleOffers'] = var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var13 = var2;
                var12 = var1;
                var1 = new var13[var3](var12, var11);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'records/SKURecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();