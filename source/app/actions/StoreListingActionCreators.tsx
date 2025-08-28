// app/actions/StoreListingActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = ['pathname'];
    var _closure1_slot3 = var1;
    var1 = ['pathname'];
    var _closure1_slot4 = var1;
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
    var _closure1_slot5 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Endpoints;
    var _closure1_slot11 = var7;
    var4 = var4.Routes;
    var _closure1_slot12 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/StoreListingActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchStoreListingsForApplications(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot7;
                    var3 = var4.getApplication;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var1);
                    var3 = null;
                    if(!(var3 != var1)) { _fun0002_ip = 63; continue _fun0002 }
 27:
                    var5 = var1.destinationSkuId;
                    var1 = var3 == var5;
                    if(var1) { _fun0002_ip = 61; continue _fun0002 }
 42:
                    var4 = _closure1_slot9;
                    var2 = var4.getForSKU;
                    var2 = var2.bind(var4)(var5);
                    var1 = var3 == var2;
 61:
                    return var1;
 63:
                    var1 = true;
                    return var1;
                }
            };
            var6 = var3.bind(var4)(var2);
            var3 = var6.length;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0001_ip = 131; continue _fun0001 }
 33:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.httpGetWithCountryCodeQuery;
            var2 = {};
            var5 = _closure1_slot11;
            var5 = var5.STORE_PUBLISHED_LISTINGS_APPLICATIONS;
            var2['url'] = var5;
            var5 = {};
            var5['application_ids'] = var6;
            var2['query'] = var5;
            var5 = true;
            var2['oldFormErrors'] = var5;
            var5 = false;
            var2['rejectWithError'] = var5;
            var3 = var3.bind(var4)(var2);
            var2 = var3.then;
            var1 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'STORE_LISTINGS_FETCH_SUCCESS';
                var2['type'] = var5;
                var5 = arg1;
                var5 = var5.body;
                var2['storeListings'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            _fun0001_ip = 149; continue _fun0001;
 131:
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.resolve;
            var1 = var2.bind(var3)();
 149:
            return var1;
        }
    };
    var3['fetchStoreListingsForApplications'] = var4;
    var4 = function fetchAllStoreListingsForApplication(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.httpGetWithCountryCodeQuery;
        var1 = {};
        var4 = _closure1_slot11;
        var4 = var4.STORE_PUBLISHED_LISTINGS_SKUS;
        var1['url'] = var4;
        var4 = {};
        var5 = arg1;
        var4['application_id'] = var5;
        var1['query'] = var4;
        var4 = true;
        var1['oldFormErrors'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg1) {
            var1 = arg1;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'STORE_LISTINGS_FETCH_SUCCESS';
            var2['type'] = var5;
            var7 = var1.body;
            var6 = var7.map;
            var5 = function(arg1) {
                var1 = {};
                var4 = arg1;
                var5 = var1;
                var2 = copyDataProperties(var5, var4);
                var3 = true;
                var2 = 'published';
                var1[var2] = var3;
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var2['storeListings'] = var5;
            var2 = var3.bind(var4)(var2);
            var1 = var1.body;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['fetchAllStoreListingsForApplication'] = var4;
    var4 = function fetchStoreListingForSku(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot8;
            var2 = var3.get;
            var3 = var2.bind(var3)(var8);
            var2 = null;
            var5 = var2 != var3;
            if(!var5) { _fun0003_ip = 81; continue _fun0003 }
 35:
            var7 = _closure1_slot10;
            var4 = var7.inTestModeForApplication;
            var2 = var3.applicationId;
            var2 = var4.bind(var7)(var2);
            if(var2) { _fun0003_ip = 78; continue _fun0003 }
 58:
            var7 = _closure1_slot6;
            var4 = var7.inDevModeForApplication;
            var3 = var3.applicationId;
            var2 = var4.bind(var7)(var3);
 78:
            var5 = var2;
 81:
            var _closure2_slot1 = var5;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 8;
            var2 = var7[var2];
            var4 = undefined;
            var9 = var3.bind(var4)(var2);
            var3 = var9.dispatch;
            var2 = {};
            var10 = 'STORE_LISTINGS_FETCH_START';
            var2['type'] = var10;
            var2['skuId'] = var8;
            var2 = var3.bind(var9)(var2);
            var3 = _closure1_slot0;
            var2 = 7;
            var2 = var7[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.httpGetWithCountryCodeQuery;
            var2 = {};
            var7 = _closure1_slot11;
            if(var5) { _fun0003_ip = 176; continue _fun0003 }
 163:
            var5 = var7.STORE_PUBLISHED_LISTINGS_SKU;
            var5 = var5.bind(var7)(var8);
            _fun0003_ip = 187; continue _fun0003;
 176:
            var6 = var7.STORE_LISTINGS_SKU;
            var5 = var6.bind(var7)(var8);
 187:
            var2['url'] = var5;
            var5 = false;
            var2['rejectWithError'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var5 = arg1;
                    var6 = _closure2_slot1;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    if(var6) { _fun0004_ip = 70; continue _fun0004 }
 45:
                    var6 = 'STORE_LISTING_FETCH_SUCCESS';
                    var2['type'] = var6;
                    var6 = var5.body;
                    var2['storeListing'] = var6;
                    var6 = var3.bind(var4)(var2);
                    _fun0004_ip = 93; continue _fun0004;
 70:
                    var6 = 'STORE_LISTINGS_FETCH_SUCCESS';
                    var2['type'] = var6;
                    var5 = var5.body;
                    var2['storeListings'] = var5;
                    var2 = var3.bind(var4)(var2);
 93:
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.catch;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'SKU_FETCH_FAIL';
                var2['type'] = var5;
                var5 = _closure2_slot0;
                var2['skuId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['fetchStoreListingForSku'] = var4;
    var4 = function fetchStoreListingById(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.httpGetWithCountryCodeQuery;
        var1 = {};
        var6 = _closure1_slot11;
        var5 = var6.STORE_LISTING;
        var4 = arg1;
        var4 = var5.bind(var6)(var4);
        var1['url'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'STORE_LISTING_FETCH_SUCCESS';
            var2['type'] = var5;
            var5 = arg1;
            var5 = var5.body;
            var2['storeListing'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['fetchStoreListingById'] = var4;
    var4 = function fetchStoreListingForApplication(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.httpGetWithCountryCodeQuery;
        var1 = {};
        var6 = _closure1_slot11;
        var5 = var6.STORE_PUBLISHED_LISTINGS_APPLICATION;
        var4 = arg1;
        var4 = var5.bind(var6)(var4);
        var1['url'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'STORE_LISTING_FETCH_SUCCESS';
            var2['type'] = var5;
            var5 = arg1;
            var5 = var5.body;
            var2['storeListing'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['fetchStoreListingForApplication'] = var4;
    var4 = function matureAgree() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'APPLICATION_STORE_MATURE_AGREE';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['matureAgree'] = var4;
    var4 = function matureDisagree() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 9;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.transitionTo;
        var2 = _closure1_slot12;
        var2 = var2.APPLICATION_STORE;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['matureDisagree'] = var4;
    var4 = function joinPublishedStoreListingSkuGuild(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        var6 = _closure1_slot11;
        var5 = var6.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD;
        var4 = arg1;
        var4 = var5.bind(var6)(var4);
        var1['url'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['joinPublishedStoreListingSkuGuild'] = var4;
    var4 = function goToSKUStoreListing(arg1, arg2) {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 7;
        var4 = var6[var1];
        var1 = undefined;
        var8 = var3.bind(var1)(var4);
        var7 = var8.getStoreListingLocation;
        var5 = arg1;
        var4 = arg2;
        var7 = var7.bind(var8)(var5, var4);
        var5 = var7.pathname;
        var4 = _closure1_slot5;
        var2 = _closure1_slot3;
        var4 = var4.bind(var1)(var7, var2);
        var2 = 9;
        var2 = var6[var2];
        var3 = var3.bind(var1)(var2);
        var2 = var3.transitionTo;
        var2 = var2.bind(var3)(var5, var4);
        return var1;
    };
    var3['goToSKUStoreListing'] = var4;
    var2 = function goToApplicationStoreListing(arg1, arg2) {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 7;
        var4 = var6[var1];
        var1 = undefined;
        var8 = var3.bind(var1)(var4);
        var7 = var8.getApplicationStoreListingLocation;
        var5 = arg1;
        var4 = arg2;
        var7 = var7.bind(var8)(var5, var4);
        var5 = var7.pathname;
        var4 = _closure1_slot5;
        var2 = _closure1_slot4;
        var4 = var4.bind(var1)(var7, var2);
        var2 = 9;
        var2 = var6[var2];
        var3 = var3.bind(var1)(var2);
        var2 = var3.transitionTo;
        var2 = var2.bind(var3)(var5, var4);
        return var1;
    };
    var3['goToApplicationStoreListing'] = var2;
    return var1;
})();