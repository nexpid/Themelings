// app/modules/skus/SKURecord.tsx
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
    var7 = var7.THE_GAME_AWARD_WINNER_SKUS;
    var _closure1_slot9 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.GIFTABLE_CURRENCIES;
    var _closure1_slot10 = var8;
    var8 = var7.OperatingSystems;
    var _closure1_slot11 = var8;
    var8 = var7.SKUFlags;
    var _closure1_slot12 = var8;
    var7 = var7.SKUTypes;
    var _closure1_slot13 = var7;
    var2 = function(arg1) {
        var5 = function SKURecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var4);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
case 8:
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
                var3 = var2.googleSkuIds;
                var1['googleSkuIds'] = var3;
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
                if(var3) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var3 = null;
case 9:
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
                var3 = var2.eligibleOffers;
                var1['eligibleOffers'] = var3;
                var2 = var2.previewAssetPaths;
                var1['previewAssetPaths'] = var2;
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
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = this;
                var3 = var2.systemRequirements;
                var1 = null;
                if(!(var1 == var3)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var1 = new Array(0);
                _fun0003_ip = 13; continue _fun0003;
case 11:
                var3 = global;
                var4 = var3.Object;
                var3 = var4.keys;
                var2 = var2.systemRequirements;
                var1 = var3.bind(var4)(var2);
case 13:
                var3 = var1.length;
                var2 = 0;
                if(!(!(var3 > var2))) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var2 = _closure1_slot11;
                var3 = var2.WINDOWS;
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
case 14:
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
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = this;
                var1 = var2.price;
                var3 = null;
                var1 = var3 != var1;
                if(!var1) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var2 = var2.price;
                var2 = var2.saleAmount;
                var1 = var3 != var2;
case 16:
                return var1;
            }
        };
        var6['get'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'isGiftable';
        var6['key'] = var7;
        var7 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = arguments[0];
                var2 = this;
                var1 = undefined;
                if(!(var3 === var1)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var3 = var2.price;
case 17:
                var5 = var2.type;
                var1 = _closure1_slot13;
                var1 = var1.DURABLE_PRIMARY;
                var1 = var5 === var1;
                if(!var1) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                var1 = var2.available;
case 19:
                if(!var1) { _fun0005_ip = 21; continue _fun0005 }
case 7:
                var1 = var2.requiresPayment;
case 21:
                if(!var1) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                var5 = null;
                var1 = var5 != var3;
case 22:
                if(!var1) { _fun0005_ip = 24; continue _fun0005 }
case 5:
                var5 = _closure1_slot10;
                var4 = var5.has;
                var3 = var3.currency;
                var1 = var4.bind(var5)(var3);
case 24:
                if(!var1) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                var3 = var2.externalPurchaseUrl;
                var2 = null;
                var1 = var2 == var3;
case 25:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[2] = var6;
        var6 = {};
        var7 = 'getPrice';
        var6['key'] = var7;
        var7 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var6 = arguments[0];
                var2 = arguments[1];
                var4 = undefined;
                if(!(var6 === var4)) { _fun0006_ip = 27; continue _fun0006 }
case 18:
                var6 = null;
case 27:
                if(!(var2 === var4)) { _fun0006_ip = 28; continue _fun0006 }
case 17:
                var2 = true;
case 28:
                var1 = this;
                var3 = var1.price;
                var1 = null;
                if(!(var1 != var3)) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                if(!(var1 != var6)) { _fun0006_ip = 6; continue _fun0006 }
case 31:
                var5 = var3.premium;
                var7 = var1 == var5;
                var4 = undefined;
                if(var7) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                var4 = var5[var6];
case 32:
                if(!(var1 == var4)) { _fun0006_ip = 34; continue _fun0006 }
case 6:
                if(!var2) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                var2 = var3.saleAmount;
                if(!(var1 == var2)) { _fun0006_ip = 37; continue _fun0006 }
case 35:
                var2 = {};
                var5 = var3.amount;
                var2['amount'] = var5;
                var5 = var3.currency;
                var2['currency'] = var5;
                _fun0006_ip = 38; continue _fun0006;
case 37:
                var5 = {};
                var6 = var3.saleAmount;
                var5['amount'] = var6;
                var6 = var3.currency;
                var5['currency'] = var6;
                var2 = var5;
case 38:
                return var2;
case 34:
                var2 = {};
                var4 = var4.amount;
                var2['amount'] = var4;
                var3 = var3.currency;
                var2['currency'] = var3;
                return var2;
case 29:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[3] = var6;
        var6 = {};
        var7 = 'getDisplaySalePercentage';
        var6['key'] = var7;
        var7 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = this;
                var1 = var2.price;
                var4 = null;
                var3 = var4 == var1;
                var1 = null;
                if(var3) { _fun0007_ip = 14; continue _fun0007 }
case 28:
                var3 = var2.price;
                var3 = var3.salePercentage;
                var3 = var4 == var3;
                var1 = null;
                if(var3) { _fun0007_ip = 14; continue _fun0007 }
case 39:
                var2 = var2.price;
                var5 = var2.salePercentage;
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = '-';
                var2 = '%';
                var1 = var4.bind(var3)(var5, var2);
case 14:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[4] = var6;
        var6 = {};
        var7 = 'requiresPayment';
        var6['key'] = var7;
        var7 = function get() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = this;
                var2 = var1.getPrice;
                var2 = var2.bind(var1)();
                var1 = var1.premium;
                var1 = !var1;
                if(!var1) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                var3 = null;
                var1 = var3 != var2;
case 40:
                if(!var1) { _fun0008_ip = 42; continue _fun0008 }
case 16:
                var3 = var2.amount;
                var2 = 0;
                var1 = var3 > var2;
case 42:
                return var1;
            }
        };
        var6['get'] = var7;
        var2[5] = var6;
        var6 = {};
        var7 = 'isTheGameAwardsWinner';
        var6['key'] = var7;
        var7 = function get() {
            var3 = _closure1_slot9;
            var2 = var3.has;
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
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = this;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 9;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.hasFlag;
                var3 = var2.flags;
                var1 = _closure1_slot12;
                var1 = var1.AVAILABLE;
                var1 = var4.bind(var5)(var3, var1);
                if(var1) { _fun0009_ip = 3; continue _fun0009 }
case 43:
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
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = this;
                var1 = var4.available;
                if(!var1) { _fun0010_ip = 44; continue _fun0010 }
case 18:
                var2 = var4.getPrice;
                var3 = var2.bind(var4)();
                var2 = null;
                var1 = var2 != var3;
case 44:
                if(!var1) { _fun0010_ip = 20; continue _fun0010 }
case 40:
                var3 = var4.externalPurchaseUrl;
                var2 = null;
                var1 = var2 == var3;
case 20:
                if(!var1) { _fun0010_ip = 45; continue _fun0010 }
case 42:
                var2 = var4.premium;
                var2 = !var2;
                if(var2) { _fun0010_ip = 46; continue _fun0010 }
case 43:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 9;
                var6 = var6[var5];
                var5 = undefined;
                var6 = var7.bind(var5)(var6);
                var5 = var6.hasFlag;
                var4 = var4.flags;
                var3 = _closure1_slot12;
                var3 = var3.PREMIUM_AND_DISTRIBUTION;
                var2 = var5.bind(var6)(var4, var3);
case 46:
                var1 = var2;
case 45:
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
            var2 = 9;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.hasFlag;
            var2 = this;
            var2 = var2.flags;
            var1 = _closure1_slot12;
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
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var4 = this;
                var1 = var4.premium;
                if(!var1) { _fun0011_ip = 47; continue _fun0011 }
case 18:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var8 = 9;
                var2 = var2[var8];
                var7 = undefined;
                var9 = var5.bind(var7)(var2);
                var6 = var9.hasFlag;
                var5 = var4.flags;
                var2 = _closure1_slot12;
                var2 = var2.PREMIUM_PURCHASE;
                var2 = var6.bind(var9)(var5, var2);
                if(var2) { _fun0011_ip = 48; continue _fun0011 }
case 49:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var6 = var6.bind(var7)(var5);
                var5 = var6.hasFlag;
                var4 = var4.flags;
                var3 = _closure1_slot12;
                var3 = var3.PREMIUM_AND_DISTRIBUTION;
                var2 = var5.bind(var6)(var4, var3);
case 48:
                var1 = var2;
case 47:
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
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = this;
                var1 = var2.preorderReleaseAt;
                var3 = null;
                var1 = var3 != var1;
                if(var1) { _fun0012_ip = 44; continue _fun0012 }
case 17:
                var2 = var2.preorderApproximateReleaseDate;
                var1 = var3 != var2;
case 44:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[12] = var6;
        var6 = {};
        var7 = 'createFromServer';
        var6['key'] = var7;
        var1 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var5 = arg1;
                var9 = var5.price;
                var3 = _closure2_slot0;
                var1 = {};
                var2 = var5.id;
                var1['id'] = var2;
                var2 = var5.type;
                var1['type'] = var2;
                var2 = var5.application_id;
                var1['applicationId'] = var2;
                var4 = var5.application;
                var2 = null;
                var7 = var2 != var4;
                var4 = null;
                if(!var7) { _fun0013_ip = 50; continue _fun0013 }
case 51:
                var10 = _closure1_slot8;
                var8 = var10.createFromServer;
                var7 = var5.application;
                var4 = var8.bind(var10)(var7);
case 50:
                var1['application'] = var4;
                var7 = var5.eligible_payment_gateways;
                var8 = var2 != var7;
                var4 = null;
                if(!var8) { _fun0013_ip = 52; continue _fun0013 }
case 53:
                var4 = var7;
case 52:
                var1['eligiblePaymentGateways'] = var4;
                var7 = var5.google_sku_ids;
                var8 = var2 != var7;
                var4 = null;
                if(!var8) { _fun0013_ip = 54; continue _fun0013 }
case 55:
                var4 = var7;
case 54:
                var1['googleSkuIds'] = var4;
                var4 = var5.product_line;
                var1['productLine'] = var4;
                var7 = var5.name;
                var10 = var2 != var7;
                var8 = '';
                var4 = var8;
                if(!var10) { _fun0013_ip = 56; continue _fun0013 }
case 57:
                var4 = var7;
case 56:
                var1['name'] = var4;
                var4 = var5.release_date;
                var7 = var2 != var4;
                var4 = null;
                if(!var7) { _fun0013_ip = 58; continue _fun0013 }
case 59:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var7 = 10;
                var7 = var11[var7];
                var11 = undefined;
                var10 = var10.bind(var11)(var7);
                var7 = var5.release_date;
                var4 = var10.bind(var11)(var7);
case 58:
                var1['releaseDate'] = var4;
                var4 = var5.preorder_release_at;
                var7 = var2 != var4;
                var4 = null;
                if(!var7) { _fun0013_ip = 60; continue _fun0013 }
case 61:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var7 = 10;
                var7 = var11[var7];
                var11 = undefined;
                var10 = var10.bind(var11)(var7);
                var7 = var5.preorder_release_at;
                var4 = var10.bind(var11)(var7);
case 60:
                var1['preorderReleaseAt'] = var4;
                var4 = var5.preorder_approximate_release_date;
                var1['preorderApproximateReleaseDate'] = var4;
                var4 = var5.summary;
                var1['summary'] = var4;
                var4 = global;
                var11 = var4.Set;
                var12 = var5.features;
                var10 = var11.prototype;
                var10 = Object.create(var10, {constructor: {value: var11}});
                var13 = var10;
                var7 = new var13[var11](var12, var11);
                var7 = var7 instanceof Object ? var7 : var10;
                var1['features'] = var7;
                var10 = var4.Set;
                var12 = var5.genres;
                var7 = var10.prototype;
                var7 = Object.create(var7, {constructor: {value: var10}});
                var13 = var7;
                var4 = new var13[var10](var12, var11);
                var4 = var4 instanceof Object ? var4 : var7;
                var1['genres'] = var4;
                var4 = var5.dependent_sku_id;
                var1['dependentSkuId'] = var4;
                var4 = var5.manifests;
                var1['manifests'] = var4;
                var4 = var5.available_regions;
                var1['availableRegions'] = var4;
                var4 = var5.access_type;
                var1['accessType'] = var4;
                var4 = var5.system_requirements;
                var1['systemRequirements'] = var4;
                var4 = var5.content_rating;
                var1['contentRating'] = var4;
                var4 = var5.content_rating_agency;
                var1['contentRatingAgency'] = var4;
                var4 = var5.legal_notice;
                var1['legalNotice'] = var4;
                var7 = var2 != var9;
                var4 = null;
                if(!var7) { _fun0013_ip = 62; continue _fun0013 }
case 63:
                var7 = {};
                var10 = var9.amount;
                var7['amount'] = var10;
                var10 = var9.currency;
                var7['currency'] = var10;
                var10 = var9.sale_amount;
                var7['saleAmount'] = var10;
                var10 = var9.sale_percentage;
                var7['salePercentage'] = var10;
                var9 = var9.premium;
                var7['premium'] = var9;
                var4 = var7;
case 62:
                var1['price'] = var4;
                var10 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 11;
                var9 = var9[var4];
                var4 = undefined;
                var10 = var10.bind(var4)(var9);
                var9 = var5.prices;
                var9 = var10.bind(var4)(var9);
                var1['prices'] = var9;
                var10 = var5.premium;
                var9 = var2 != var10;
                if(!var9) { _fun0013_ip = 64; continue _fun0013 }
case 65:
                var9 = var10;
case 64:
                var1['premium'] = var9;
                var9 = var5.show_age_gate;
                if(var9) { _fun0013_ip = 66; continue _fun0013 }
case 67:
                var9 = false;
case 66:
                var1['showAgeGate'] = var9;
                var9 = var5.restricted;
                if(var9) { _fun0013_ip = 68; continue _fun0013 }
case 69:
                var9 = false;
case 68:
                var1['restricted'] = var9;
                var9 = var5.slug;
                var10 = var2 != var9;
                if(!var10) { _fun0013_ip = 70; continue _fun0013 }
case 71:
                var8 = var9;
case 70:
                var1['slug'] = var8;
                var8 = var5.exclusive;
                if(var8) { _fun0013_ip = 72; continue _fun0013 }
case 73:
                var8 = false;
case 72:
                var1['exclusive'] = var8;
                var8 = var5.locales;
                if(!(var2 == var8)) { _fun0013_ip = 74; continue _fun0013 }
case 75:
                var8 = ['en-US'];
case 74:
                var1['locales'] = var8;
                var8 = var5.flags;
                var1['flags'] = var8;
                var8 = var5.external_purchase_url;
                var1['externalPurchaseUrl'] = var8;
                var9 = var5.deleted;
                var8 = var2 != var9;
                if(!var8) { _fun0013_ip = 76; continue _fun0013 }
case 77:
                var8 = var9;
case 76:
                var1['deleted'] = var8;
                var8 = var5.bundled_sku_ids;
                if(!(var2 == var8)) { _fun0013_ip = 78; continue _fun0013 }
case 79:
                var8 = new Array(0);
case 78:
                var1['bundledSkuIds'] = var8;
                var11 = var5.bundled_skus;
                var9 = var2 == var11;
                var8 = undefined;
                if(var9) { _fun0013_ip = 80; continue _fun0013 }
case 81:
                var10 = var11.map;
                var9 = function(arg1) {
                    var3 = _closure2_slot0;
                    var2 = var3.createFromServer;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var8 = var10.bind(var11)(var9);
case 80:
                if(!(var2 == var8)) { _fun0013_ip = 82; continue _fun0013 }
case 83:
                var8 = new Array(0);
case 82:
                var1['bundledSkus'] = var8;
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 12;
                var7 = var9[var7];
                var8 = var8.bind(var4)(var7);
                var7 = var5.tenant_metadata;
                var7 = var8.bind(var4)(var7);
                var1['tenantMetadata'] = var7;
                var8 = var5.selected_options;
                var7 = var2 == var8;
                var4 = undefined;
                if(var7) { _fun0013_ip = 84; continue _fun0013 }
case 85:
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
                var4 = var7.bind(var8)(var6);
case 84:
                if(!(var2 == var4)) { _fun0013_ip = 86; continue _fun0013 }
case 87:
                var4 = new Array(0);
case 86:
                var1['selectedOptions'] = var4;
                var4 = var5.product_id;
                var1['productId'] = var4;
                var4 = var5.thumbnail_asset_id;
                var1['thumbnailAssetId'] = var4;
                var4 = var5.description;
                var1['description'] = var4;
                var4 = var5.orbs_reward;
                var1['orbsReward'] = var4;
                var4 = var5.eligible_offers;
                if(!(var2 == var4)) { _fun0013_ip = 88; continue _fun0013 }
case 89:
                var4 = new Array(0);
case 88:
                var1['eligibleOffers'] = var4;
                var4 = var5.preview_asset_paths;
                var4 = var2 != var4;
                var2 = null;
                if(!var4) { _fun0013_ip = 90; continue _fun0013 }
case 91:
                var4 = {};
                var6 = var5.preview_asset_paths;
                var6 = var6.fg_static;
                var4['fgStatic'] = var6;
                var6 = var5.preview_asset_paths;
                var6 = var6.fg_animated;
                var4['fgAnimated'] = var6;
                var6 = var5.preview_asset_paths;
                var6 = var6.bg_static;
                var4['bgStatic'] = var6;
                var5 = var5.preview_asset_paths;
                var5 = var5.bg_animated;
                var4['bgAnimated'] = var5;
                var2 = var4;
case 90:
                var1['previewAssetPaths'] = var2;
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
    var4 = 'modules/skus/SKURecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();