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
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
                if(var1) { _fun0002_ip = 65; continue _fun0002 }
 52:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var4);
                _fun0002_ip = 103; continue _fun0002;
 65:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
 103:
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
                if(var3) { _fun0002_ip = 462; continue _fun0002 }
 460:
                var3 = null;
 462:
                var1['externalPurchaseUrl'] = var3;
                var3 = var2.deleted;
                var1['deleted'] = var3;
                var2 = var2.bundledSkuIds;
                var1['bundledSkuIds'] = var2;
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
 0:
                var2 = this;
                var3 = var2.systemRequirements;
                var1 = null;
                if(!(var1 == var3)) { _fun0003_ip = 21; continue _fun0003 }
 15:
                var1 = new Array(0);
                _fun0003_ip = 45; continue _fun0003;
 21:
                var3 = global;
                var4 = var3.Object;
                var3 = var4.keys;
                var2 = var2.systemRequirements;
                var1 = var3.bind(var4)(var2);
 45:
                var3 = var1.length;
                var2 = 0;
                if(!(!(var3 > var2))) { _fun0003_ip = 80; continue _fun0003 }
 56:
                var2 = _closure1_slot9;
                var3 = var2.WINDOWS;
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
 80:
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
 0:
                var2 = this;
                var1 = var2.price;
                var3 = null;
                var1 = var3 != var1;
                if(!var1) { _fun0004_ip = 34; continue _fun0004 }
 18:
                var2 = var2.price;
                var2 = var2.saleAmount;
                var1 = var3 != var2;
 34:
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
 0:
                var3 = arguments[0];
                var2 = this;
                var1 = undefined;
                if(!(var3 === var1)) { _fun0005_ip = 18; continue _fun0005 }
 12:
                var3 = var2.price;
 18:
                var5 = var2.type;
                var1 = _closure1_slot11;
                var1 = var1.DURABLE_PRIMARY;
                var1 = var5 === var1;
                if(!var1) { _fun0005_ip = 49; continue _fun0005 }
 43:
                var1 = var2.available;
 49:
                if(!var1) { _fun0005_ip = 60; continue _fun0005 }
 52:
                var1 = var2.requiresPayment;
 60:
                if(!var1) { _fun0005_ip = 69; continue _fun0005 }
 63:
                var5 = null;
                var1 = var5 != var3;
 69:
                if(!var1) { _fun0005_ip = 92; continue _fun0005 }
 72:
                var5 = _closure1_slot12;
                var4 = var5.has;
                var3 = var3.currency;
                var1 = var4.bind(var5)(var3);
 92:
                if(!var1) { _fun0005_ip = 107; continue _fun0005 }
 95:
                var3 = var2.externalPurchaseUrl;
                var2 = null;
                var1 = var2 == var3;
 107:
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
 0:
                var6 = arguments[0];
                var2 = arguments[1];
                var4 = undefined;
                if(!(var6 === var4)) { _fun0006_ip = 14; continue _fun0006 }
 12:
                var6 = null;
 14:
                if(!(var2 === var4)) { _fun0006_ip = 20; continue _fun0006 }
 18:
                var2 = true;
 20:
                var1 = this;
                var3 = var1.price;
                var1 = null;
                if(!(var1 != var3)) { _fun0006_ip = 159; continue _fun0006 }
 38:
                if(!(var1 != var6)) { _fun0006_ip = 65; continue _fun0006 }
 42:
                var5 = var3.premium;
                var7 = var1 == var5;
                var4 = undefined;
                if(var7) { _fun0006_ip = 61; continue _fun0006 }
 57:
                var4 = var5[var6];
 61:
                if(!(var1 == var4)) { _fun0006_ip = 133; continue _fun0006 }
 65:
                if(!var2) { _fun0006_ip = 78; continue _fun0006 }
 68:
                var2 = var3.saleAmount;
                if(!(var1 == var2)) { _fun0006_ip = 104; continue _fun0006 }
 78:
                var2 = {};
                var5 = var3.amount;
                var2['amount'] = var5;
                var5 = var3.currency;
                var2['currency'] = var5;
                _fun0006_ip = 131; continue _fun0006;
 104:
                var5 = {};
                var6 = var3.saleAmount;
                var5['amount'] = var6;
                var6 = var3.currency;
                var5['currency'] = var6;
                var2 = var5;
 131:
                return var2;
 133:
                var2 = {};
                var4 = var4.amount;
                var2['amount'] = var4;
                var3 = var3.currency;
                var2['currency'] = var3;
                return var2;
 159:
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
 0:
                var2 = this;
                var1 = var2.price;
                var4 = null;
                var3 = var4 == var1;
                var1 = null;
                if(var3) { _fun0007_ip = 80; continue _fun0007 }
 20:
                var3 = var2.price;
                var3 = var3.salePercentage;
                var3 = var4 == var3;
                var1 = null;
                if(var3) { _fun0007_ip = 80; continue _fun0007 }
 41:
                var2 = var2.price;
                var5 = var2.salePercentage;
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = '-';
                var2 = '%';
                var1 = var4.bind(var3)(var5, var2);
 80:
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
 0:
                var1 = this;
                var2 = var1.getPrice;
                var2 = var2.bind(var1)();
                var1 = var1.premium;
                var1 = !var1;
                if(!var1) { _fun0008_ip = 31; continue _fun0008 }
 25:
                var3 = null;
                var1 = var3 != var2;
 31:
                if(!var1) { _fun0008_ip = 46; continue _fun0008 }
 34:
                var3 = var2.amount;
                var2 = 0;
                var1 = var3 > var2;
 46:
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
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var2 = this;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 8;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.hasFlag;
                var3 = var2.flags;
                var1 = _closure1_slot10;
                var1 = var1.AVAILABLE;
                var1 = var4.bind(var5)(var3, var1);
                if(var1) { _fun0009_ip = 70; continue _fun0009 }
 58:
                var3 = var2.externalPurchaseUrl;
                var2 = null;
                var1 = var2 != var3;
 70:
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
 0:
                var4 = this;
                var1 = var4.available;
                if(!var1) { _fun0010_ip = 28; continue _fun0010 }
 12:
                var2 = var4.getPrice;
                var3 = var2.bind(var4)();
                var2 = null;
                var1 = var2 != var3;
 28:
                if(!var1) { _fun0010_ip = 43; continue _fun0010 }
 31:
                var3 = var4.externalPurchaseUrl;
                var2 = null;
                var1 = var2 == var3;
 43:
                if(!var1) { _fun0010_ip = 113; continue _fun0010 }
 46:
                var2 = var4.premium;
                var2 = !var2;
                if(var2) { _fun0010_ip = 110; continue _fun0010 }
 58:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 8;
                var6 = var6[var5];
                var5 = undefined;
                var6 = var7.bind(var5)(var6);
                var5 = var6.hasFlag;
                var4 = var4.flags;
                var3 = _closure1_slot10;
                var3 = var3.PREMIUM_AND_DISTRIBUTION;
                var2 = var5.bind(var6)(var4, var3);
 110:
                var1 = var2;
 113:
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
            var2 = 8;
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
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var4 = this;
                var1 = var4.premium;
                if(!var1) { _fun0011_ip = 114; continue _fun0011 }
 12:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var8 = 8;
                var2 = var2[var8];
                var7 = undefined;
                var9 = var5.bind(var7)(var2);
                var6 = var9.hasFlag;
                var5 = var4.flags;
                var2 = _closure1_slot10;
                var2 = var2.PREMIUM_PURCHASE;
                var2 = var6.bind(var9)(var5, var2);
                if(var2) { _fun0011_ip = 111; continue _fun0011 }
 67:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var6 = var6.bind(var7)(var5);
                var5 = var6.hasFlag;
                var4 = var4.flags;
                var3 = _closure1_slot10;
                var3 = var3.PREMIUM_AND_DISTRIBUTION;
                var2 = var5.bind(var6)(var4, var3);
 111:
                var1 = var2;
 114:
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
 0:
                var2 = this;
                var1 = var2.preorderReleaseAt;
                var3 = null;
                var1 = var3 != var1;
                if(var1) { _fun0012_ip = 28; continue _fun0012 }
 18:
                var2 = var2.preorderApproximateReleaseDate;
                var1 = var3 != var2;
 28:
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
 0:
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
                var5 = var2.application;
                var4 = null;
                var6 = var4 != var5;
                var5 = null;
                if(!var6) { _fun0013_ip = 85; continue _fun0013 }
 62:
                var9 = _closure1_slot8;
                var7 = var9.createFromServer;
                var6 = var2.application;
                var5 = var7.bind(var9)(var6);
 85:
                var1['application'] = var5;
                var6 = var2.eligible_payment_gateways;
                var7 = var4 != var6;
                var5 = null;
                if(!var7) { _fun0013_ip = 107; continue _fun0013 }
 104:
                var5 = var6;
 107:
                var1['eligiblePaymentGateways'] = var5;
                var5 = var2.product_line;
                var1['productLine'] = var5;
                var7 = var2.name;
                var9 = var4 != var7;
                var5 = '';
                var6 = var5;
                if(!var9) { _fun0013_ip = 145; continue _fun0013 }
 142:
                var6 = var7;
 145:
                var1['name'] = var6;
                var6 = var2.release_date;
                var7 = var4 != var6;
                var6 = null;
                if(!var7) { _fun0013_ip = 200; continue _fun0013 }
 164:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 9;
                var7 = var10[var7];
                var10 = undefined;
                var9 = var9.bind(var10)(var7);
                var7 = var2.release_date;
                var6 = var9.bind(var10)(var7);
 200:
                var1['releaseDate'] = var6;
                var6 = var2.preorder_release_at;
                var7 = var4 != var6;
                var6 = null;
                if(!var7) { _fun0013_ip = 256; continue _fun0013 }
 220:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 9;
                var7 = var10[var7];
                var10 = undefined;
                var9 = var9.bind(var10)(var7);
                var7 = var2.preorder_release_at;
                var6 = var9.bind(var10)(var7);
 256:
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
                var7 = var4 != var8;
                var6 = null;
                if(!var7) { _fun0013_ip = 528; continue _fun0013 }
 464:
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
 528:
                var1['price'] = var6;
                var7 = var2.premium;
                var6 = var4 != var7;
                if(!var6) { _fun0013_ip = 549; continue _fun0013 }
 546:
                var6 = var7;
 549:
                var1['premium'] = var6;
                var6 = var2.show_age_gate;
                if(var6) { _fun0013_ip = 565; continue _fun0013 }
 563:
                var6 = false;
 565:
                var1['showAgeGate'] = var6;
                var6 = var2.restricted;
                if(var6) { _fun0013_ip = 581; continue _fun0013 }
 579:
                var6 = false;
 581:
                var1['restricted'] = var6;
                var6 = var2.slug;
                var7 = var4 != var6;
                if(!var7) { _fun0013_ip = 602; continue _fun0013 }
 599:
                var5 = var6;
 602:
                var1['slug'] = var5;
                var5 = var2.exclusive;
                if(var5) { _fun0013_ip = 618; continue _fun0013 }
 616:
                var5 = false;
 618:
                var1['exclusive'] = var5;
                var5 = var2.locales;
                if(!(var4 == var5)) { _fun0013_ip = 643; continue _fun0013 }
 633:
                var5 = ['en-US'];
 643:
                var1['locales'] = var5;
                var5 = var2.flags;
                var1['flags'] = var5;
                var5 = var2.external_purchase_url;
                var1['externalPurchaseUrl'] = var5;
                var6 = var2.deleted;
                var5 = var4 != var6;
                if(!var5) { _fun0013_ip = 686; continue _fun0013 }
 683:
                var5 = var6;
 686:
                var1['deleted'] = var5;
                var2 = var2.bundled_sku_ids;
                if(!(var4 == var2)) { _fun0013_ip = 705; continue _fun0013 }
 701:
                var2 = new Array(0);
 705:
                var1['bundledSkuIds'] = var2;
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
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'records/SKURecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();