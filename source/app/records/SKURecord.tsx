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
    var1 = function transformTenantMetadata(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = null;
            if(!(var3 != var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var2.social_layer;
            if(!(var3 == var1)) { _fun0002_ip = 8; continue _fun0002 }
case 6:
            var1 = undefined;
            return var1;
case 8:
            var1 = {};
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 8;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.transformSlayerSKUTenantMetadataFromServer;
            var2 = var2.social_layer;
            var2 = var3.bind(var4)(var2);
            var1['socialLayer'] = var2;
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var8 = var7.OperatingSystems;
    var _closure1_slot9 = var8;
    var8 = var7.SKUFlags;
    var _closure1_slot10 = var8;
    var8 = var7.SKUTypes;
    var _closure1_slot11 = var8;
    var7 = var7.GIFTABLE_CURRENCIES;
    var _closure1_slot12 = var7;
    var7 = ['500428425362931713', '451550535720501248', '471376328319303681', '466696214818193408'];
    var _closure1_slot13 = var7;
    var2 = function(arg1) {
        var5 = function SKURecord(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
                if(var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var4);
                _fun0003_ip = 11; continue _fun0003;
case 9:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
case 11:
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
                if(var3) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var3 = null;
case 12:
                var1['externalPurchaseUrl'] = var3;
                var3 = var2.deleted;
                var1['deleted'] = var3;
                var3 = var2.bundledSkuIds;
                var1['bundledSkuIds'] = var3;
                var2 = var2.tenantMetadata;
                var1['tenantMetadata'] = var2;
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
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = this;
                var3 = var2.systemRequirements;
                var1 = null;
                if(!(var1 == var3)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var1 = new Array(0);
                _fun0004_ip = 16; continue _fun0004;
case 14:
                var3 = global;
                var4 = var3.Object;
                var3 = var4.keys;
                var2 = var2.systemRequirements;
                var1 = var3.bind(var4)(var2);
case 16:
                var3 = var1.length;
                var2 = 0;
                if(!(!(var3 > var2))) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var2 = _closure1_slot9;
                var3 = var2.WINDOWS;
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
case 17:
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
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = this;
                var1 = var2.price;
                var3 = null;
                var1 = var3 != var1;
                if(!var1) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                var2 = var2.price;
                var2 = var2.saleAmount;
                var1 = var3 != var2;
case 19:
                return var1;
            }
        };
        var6['get'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'isGiftable';
        var6['key'] = var7;
        var7 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = arguments[0];
                var2 = this;
                var1 = undefined;
                if(!(var3 === var1)) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                var3 = var2.price;
case 20:
                var5 = var2.type;
                var1 = _closure1_slot11;
                var1 = var1.DURABLE_PRIMARY;
                var1 = var5 === var1;
                if(!var1) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                var1 = var2.available;
case 22:
                if(!var1) { _fun0006_ip = 24; continue _fun0006 }
case 10:
                var1 = var2.requiresPayment;
case 24:
                if(!var1) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                var5 = null;
                var1 = var5 != var3;
case 25:
                if(!var1) { _fun0006_ip = 27; continue _fun0006 }
case 5:
                var5 = _closure1_slot12;
                var4 = var5.has;
                var3 = var3.currency;
                var1 = var4.bind(var5)(var3);
case 27:
                if(!var1) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                var3 = var2.externalPurchaseUrl;
                var2 = null;
                var1 = var2 == var3;
case 28:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[2] = var6;
        var6 = {};
        var7 = 'getPrice';
        var6['key'] = var7;
        var7 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var6 = arguments[0];
                var2 = arguments[1];
                var4 = undefined;
                if(!(var6 === var4)) { _fun0007_ip = 30; continue _fun0007 }
case 21:
                var6 = null;
case 30:
                if(!(var2 === var4)) { _fun0007_ip = 31; continue _fun0007 }
case 20:
                var2 = true;
case 31:
                var1 = this;
                var3 = var1.price;
                var1 = null;
                if(!(var1 != var3)) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                if(!(var1 != var6)) { _fun0007_ip = 9; continue _fun0007 }
case 34:
                var5 = var3.premium;
                var7 = var1 == var5;
                var4 = undefined;
                if(var7) { _fun0007_ip = 35; continue _fun0007 }
case 36:
                var4 = var5[var6];
case 35:
                if(!(var1 == var4)) { _fun0007_ip = 37; continue _fun0007 }
case 9:
                if(!var2) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                var2 = var3.saleAmount;
                if(!(var1 == var2)) { _fun0007_ip = 40; continue _fun0007 }
case 38:
                var2 = {};
                var5 = var3.amount;
                var2['amount'] = var5;
                var5 = var3.currency;
                var2['currency'] = var5;
                _fun0007_ip = 41; continue _fun0007;
case 40:
                var5 = {};
                var6 = var3.saleAmount;
                var5['amount'] = var6;
                var6 = var3.currency;
                var5['currency'] = var6;
                var2 = var5;
case 41:
                return var2;
case 37:
                var2 = {};
                var4 = var4.amount;
                var2['amount'] = var4;
                var3 = var3.currency;
                var2['currency'] = var3;
                return var2;
case 32:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[3] = var6;
        var6 = {};
        var7 = 'getDisplaySalePercentage';
        var6['key'] = var7;
        var7 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = this;
                var1 = var2.price;
                var4 = null;
                var3 = var4 == var1;
                var1 = null;
                if(var3) { _fun0008_ip = 17; continue _fun0008 }
case 31:
                var3 = var2.price;
                var3 = var3.salePercentage;
                var3 = var4 == var3;
                var1 = null;
                if(var3) { _fun0008_ip = 17; continue _fun0008 }
case 42:
                var2 = var2.price;
                var5 = var2.salePercentage;
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = '-';
                var2 = '%';
                var1 = var4.bind(var3)(var5, var2);
case 17:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[4] = var6;
        var6 = {};
        var7 = 'requiresPayment';
        var6['key'] = var7;
        var7 = function get() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = this;
                var2 = var1.getPrice;
                var2 = var2.bind(var1)();
                var1 = var1.premium;
                var1 = !var1;
                if(!var1) { _fun0009_ip = 43; continue _fun0009 }
case 44:
                var3 = null;
                var1 = var3 != var2;
case 43:
                if(!var1) { _fun0009_ip = 45; continue _fun0009 }
case 19:
                var3 = var2.amount;
                var2 = 0;
                var1 = var3 > var2;
case 45:
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
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
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
                var1 = _closure1_slot10;
                var1 = var1.AVAILABLE;
                var1 = var4.bind(var5)(var3, var1);
                if(var1) { _fun0010_ip = 3; continue _fun0010 }
case 46:
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
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var4 = this;
                var1 = var4.available;
                if(!var1) { _fun0011_ip = 47; continue _fun0011 }
case 21:
                var2 = var4.getPrice;
                var3 = var2.bind(var4)();
                var2 = null;
                var1 = var2 != var3;
case 47:
                if(!var1) { _fun0011_ip = 23; continue _fun0011 }
case 43:
                var3 = var4.externalPurchaseUrl;
                var2 = null;
                var1 = var2 == var3;
case 23:
                if(!var1) { _fun0011_ip = 48; continue _fun0011 }
case 45:
                var2 = var4.premium;
                var2 = !var2;
                if(var2) { _fun0011_ip = 49; continue _fun0011 }
case 46:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 9;
                var6 = var6[var5];
                var5 = undefined;
                var6 = var7.bind(var5)(var6);
                var5 = var6.hasFlag;
                var4 = var4.flags;
                var3 = _closure1_slot10;
                var3 = var3.PREMIUM_AND_DISTRIBUTION;
                var2 = var5.bind(var6)(var4, var3);
case 49:
                var1 = var2;
case 48:
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
            var1 = _closure1_slot10;
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
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var4 = this;
                var1 = var4.premium;
                if(!var1) { _fun0012_ip = 50; continue _fun0012 }
case 21:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var8 = 9;
                var2 = var2[var8];
                var7 = undefined;
                var9 = var5.bind(var7)(var2);
                var6 = var9.hasFlag;
                var5 = var4.flags;
                var2 = _closure1_slot10;
                var2 = var2.PREMIUM_PURCHASE;
                var2 = var6.bind(var9)(var5, var2);
                if(var2) { _fun0012_ip = 51; continue _fun0012 }
case 52:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var6 = var6.bind(var7)(var5);
                var5 = var6.hasFlag;
                var4 = var4.flags;
                var3 = _closure1_slot10;
                var3 = var3.PREMIUM_AND_DISTRIBUTION;
                var2 = var5.bind(var6)(var4, var3);
case 51:
                var1 = var2;
case 50:
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
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var2 = this;
                var1 = var2.preorderReleaseAt;
                var3 = null;
                var1 = var3 != var1;
                if(var1) { _fun0013_ip = 47; continue _fun0013 }
case 20:
                var2 = var2.preorderApproximateReleaseDate;
                var1 = var3 != var2;
case 47:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[12] = var6;
        var6 = {};
        var7 = 'createFromServer';
        var6['key'] = var7;
        var1 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var2 = arg1;
                var8 = var2.price;
                var3 = _closure2_slot0;
                var1 = {};
                var4 = var2.id;
                var1['id'] = var4;
                var4 = var2.type;
                var1['type'] = var4;
                var4 = var2.application_id;
                var1['applicationId'] = var4;
                var4 = var2.application;
                var5 = null;
                var6 = var5 != var4;
                var4 = null;
                if(!var6) { _fun0014_ip = 53; continue _fun0014 }
case 54:
                var9 = _closure1_slot8;
                var7 = var9.createFromServer;
                var6 = var2.application;
                var4 = var7.bind(var9)(var6);
case 53:
                var1['application'] = var4;
                var6 = var2.eligible_payment_gateways;
                var7 = var5 != var6;
                var4 = null;
                if(!var7) { _fun0014_ip = 28; continue _fun0014 }
case 40:
                var4 = var6;
case 28:
                var1['eligiblePaymentGateways'] = var4;
                var4 = var2.product_line;
                var1['productLine'] = var4;
                var7 = var2.name;
                var9 = var5 != var7;
                var4 = '';
                var6 = var4;
                if(!var9) { _fun0014_ip = 55; continue _fun0014 }
case 56:
                var6 = var7;
case 55:
                var1['name'] = var6;
                var6 = var2.release_date;
                var7 = var5 != var6;
                var6 = null;
                if(!var7) { _fun0014_ip = 57; continue _fun0014 }
case 58:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 10;
                var7 = var10[var7];
                var10 = undefined;
                var9 = var9.bind(var10)(var7);
                var7 = var2.release_date;
                var6 = var9.bind(var10)(var7);
case 57:
                var1['releaseDate'] = var6;
                var6 = var2.preorder_release_at;
                var7 = var5 != var6;
                var6 = null;
                if(!var7) { _fun0014_ip = 59; continue _fun0014 }
case 60:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 10;
                var7 = var10[var7];
                var10 = undefined;
                var9 = var9.bind(var10)(var7);
                var7 = var2.preorder_release_at;
                var6 = var9.bind(var10)(var7);
case 59:
                var1['preorderReleaseAt'] = var6;
                var6 = var2.preorder_approximate_release_date;
                var1['preorderApproximateReleaseDate'] = var6;
                var6 = var2.summary;
                var1['summary'] = var6;
                var6 = global;
                var10 = var6.Set;
                var11 = var2.features;
                var9 = var10.prototype;
                var9 = Object.create(var9, {constructor: {value: var10}});
                var12 = var9;
                var7 = new var12[var10](var11, var10);
                var7 = var7 instanceof Object ? var7 : var9;
                var1['features'] = var7;
                var9 = var6.Set;
                var11 = var2.genres;
                var7 = var9.prototype;
                var7 = Object.create(var7, {constructor: {value: var9}});
                var12 = var7;
                var6 = new var12[var9](var11, var10);
                var6 = var6 instanceof Object ? var6 : var7;
                var1['genres'] = var6;
                var6 = var2.dependent_sku_id;
                var1['dependentSkuId'] = var6;
                var6 = var2.manifests;
                var1['manifests'] = var6;
                var6 = var2.available_regions;
                var1['availableRegions'] = var6;
                var6 = var2.access_type;
                var1['accessType'] = var6;
                var6 = var2.system_requirements;
                var1['systemRequirements'] = var6;
                var6 = var2.content_rating;
                var1['contentRating'] = var6;
                var6 = var2.content_rating_agency;
                var1['contentRatingAgency'] = var6;
                var6 = var2.legal_notice;
                var1['legalNotice'] = var6;
                var7 = var5 != var8;
                var6 = null;
                if(!var7) { _fun0014_ip = 61; continue _fun0014 }
case 62:
                var7 = {};
                var9 = var8.amount;
                var7['amount'] = var9;
                var9 = var8.currency;
                var7['currency'] = var9;
                var9 = var8.sale_amount;
                var7['saleAmount'] = var9;
                var9 = var8.sale_percentage;
                var7['salePercentage'] = var9;
                var8 = var8.premium;
                var7['premium'] = var8;
                var6 = var7;
case 61:
                var1['price'] = var6;
                var7 = var2.premium;
                var6 = var5 != var7;
                if(!var6) { _fun0014_ip = 63; continue _fun0014 }
case 64:
                var6 = var7;
case 63:
                var1['premium'] = var6;
                var6 = var2.show_age_gate;
                if(var6) { _fun0014_ip = 65; continue _fun0014 }
case 66:
                var6 = false;
case 65:
                var1['showAgeGate'] = var6;
                var6 = var2.restricted;
                if(var6) { _fun0014_ip = 67; continue _fun0014 }
case 68:
                var6 = false;
case 67:
                var1['restricted'] = var6;
                var6 = var2.slug;
                var7 = var5 != var6;
                if(!var7) { _fun0014_ip = 69; continue _fun0014 }
case 70:
                var4 = var6;
case 69:
                var1['slug'] = var4;
                var4 = var2.exclusive;
                if(var4) { _fun0014_ip = 71; continue _fun0014 }
case 72:
                var4 = false;
case 71:
                var1['exclusive'] = var4;
                var4 = var2.locales;
                if(!(var5 == var4)) { _fun0014_ip = 73; continue _fun0014 }
case 74:
                var4 = ['en-US'];
case 73:
                var1['locales'] = var4;
                var4 = var2.flags;
                var1['flags'] = var4;
                var4 = var2.external_purchase_url;
                var1['externalPurchaseUrl'] = var4;
                var6 = var2.deleted;
                var4 = var5 != var6;
                if(!var4) { _fun0014_ip = 75; continue _fun0014 }
case 76:
                var4 = var6;
case 75:
                var1['deleted'] = var4;
                var4 = var2.bundled_sku_ids;
                if(!(var5 == var4)) { _fun0014_ip = 77; continue _fun0014 }
case 78:
                var4 = new Array(0);
case 77:
                var1['bundledSkuIds'] = var4;
                var5 = _closure1_slot15;
                var4 = var2.tenant_metadata;
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var1['tenantMetadata'] = var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var11 = var1;
                var1 = new var12[var3](var11, var10);
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
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'records/SKURecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();