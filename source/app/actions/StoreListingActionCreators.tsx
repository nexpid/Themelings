// app/actions/StoreListingActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = ['pathname'];
    var _closure1_slot3 = entity;
    entity = ['pathname'];
    var _closure1_slot4 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.Endpoints;
    var _closure1_slot11 = golfie;
    tangon = tangon.Routes;
    var _closure1_slot12 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/StoreListingActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: fetchStoreListingsForApplications
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            zuuluu = tangon.filter;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = _closure1_slot7;
                    zuuluu = tangon.getApplication;
                    entity = argFoo;
                    entity = zuuluu.bind(tangon)(entity);
                    zuuluu = null;
                    if(!(zuuluu != entity)) { _fun00004_ip = 63; continue _fun00003 }
 27:
                    report = entity.destinationSkuId;
                    entity = zuuluu == report;
                    if(entity) { _fun00004_ip = 61; continue _fun00003 }
 42:
                    tangon = _closure1_slot9;
                    michal = tangon.getForSKU;
                    michal = michal.bind(tangon)(report);
                    entity = zuuluu == michal;
 61:
                    return entity;
 63:
                    entity = true;
                    return entity;
                }
            };
            oscard = zuuluu.bind(tangon)(michal);
            zuuluu = oscard.length;
            michal = 0;
            if(!(michal !== zuuluu)) { _fun00002_ip = 131; continue _fun00001 }
 33:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 7;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.httpGetWithCountryCodeQuery;
            michal = {};
            report = _closure1_slot11;
            report = report.STORE_PUBLISHED_LISTINGS_APPLICATIONS;
            michal['url'] = report;
            report = {};
            report['application_ids'] = oscard;
            michal['query'] = report;
            report = true;
            michal['oldFormErrors'] = report;
            report = false;
            michal['rejectWithError'] = report;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.then;
            entity = function(argFoo) {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 8;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'STORE_LISTINGS_FETCH_SUCCESS';
                michal['type'] = report;
                report = argFoo;
                report = report.body;
                michal['storeListings'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            _fun00002_ip = 149; continue _fun00001;
 131:
            michal = global;
            zuuluu = michal.Promise;
            michal = zuuluu.resolve;
            entity = michal.bind(zuuluu)();
 149:
            return entity;
        }
    };
    zuuluu['fetchStoreListingsForApplications'] = tangon;
    tangon = function(argFoo) { // Original name: fetchAllStoreListingsForApplication
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.httpGetWithCountryCodeQuery;
        entity = {};
        tangon = _closure1_slot11;
        tangon = tangon.STORE_PUBLISHED_LISTINGS_SKUS;
        entity['url'] = tangon;
        tangon = {};
        report = argFoo;
        tangon['application_id'] = report;
        entity['query'] = tangon;
        tangon = true;
        entity['oldFormErrors'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        zuuluu = michal.bind(zuuluu)(entity);
        michal = zuuluu.then;
        entity = function(argFoo) {
            entity = argFoo;
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 8;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'STORE_LISTINGS_FETCH_SUCCESS';
            michal['type'] = report;
            golfie = entity.body;
            oscard = golfie.map;
            report = function(argFoo) {
                entity = {};
                tangon = argFoo;
                report = entity;
                michal = copyDataProperties(report, tangon);
                zuuluu = true;
                michal = 'published';
                entity[michal] = zuuluu;
                return entity;
            };
            report = oscard.bind(golfie)(report);
            michal['storeListings'] = report;
            michal = zuuluu.bind(tangon)(michal);
            entity = entity.body;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['fetchAllStoreListingsForApplication'] = tangon;
    tangon = function(argFoo) { // Original name: fetchStoreListingForSku
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            option = argFoo;
            var _closure2_slot0 = option;
            zuuluu = _closure1_slot8;
            michal = zuuluu.get;
            zuuluu = michal.bind(zuuluu)(option);
            michal = null;
            report = michal != zuuluu;
            if(!report) { _fun00006_ip = 81; continue _fun00005 }
 35:
            golfie = _closure1_slot10;
            tangon = golfie.inTestModeForApplication;
            michal = zuuluu.applicationId;
            michal = tangon.bind(golfie)(michal);
            if(michal) { _fun00006_ip = 78; continue _fun00005 }
 58:
            golfie = _closure1_slot6;
            tangon = golfie.inDevModeForApplication;
            zuuluu = zuuluu.applicationId;
            michal = tangon.bind(golfie)(zuuluu);
 78:
            report = michal;
 81:
            var _closure2_slot1 = report;
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 8;
            michal = golfie[michal];
            tangon = undefined;
            verify = zuuluu.bind(tangon)(michal);
            zuuluu = verify.dispatch;
            michal = {};
            offset = 'STORE_LISTINGS_FETCH_START';
            michal['type'] = offset;
            michal['skuId'] = option;
            michal = zuuluu.bind(verify)(michal);
            zuuluu = _closure1_slot0;
            michal = 7;
            michal = golfie[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.httpGetWithCountryCodeQuery;
            michal = {};
            golfie = _closure1_slot11;
            if(report) { _fun00006_ip = 176; continue _fun00005 }
 163:
            report = golfie.STORE_PUBLISHED_LISTINGS_SKU;
            report = report.bind(golfie)(option);
            _fun00006_ip = 187; continue _fun00005;
 176:
            oscard = golfie.STORE_LISTINGS_SKU;
            report = oscard.bind(golfie)(option);
 187:
            michal['url'] = report;
            report = false;
            michal['rejectWithError'] = report;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.then;
            michal = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    report = argFoo;
                    oscard = _closure2_slot1;
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 8;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    if(oscard) { _fun00008_ip = 70; continue _fun00007 }
 45:
                    oscard = 'STORE_LISTING_FETCH_SUCCESS';
                    michal['type'] = oscard;
                    oscard = report.body;
                    michal['storeListing'] = oscard;
                    oscard = zuuluu.bind(tangon)(michal);
                    _fun00008_ip = 93; continue _fun00007;
 70:
                    oscard = 'STORE_LISTINGS_FETCH_SUCCESS';
                    michal['type'] = oscard;
                    report = report.body;
                    michal['storeListings'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 93:
                    return entity;
                }
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.catch;
            entity = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 8;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'SKU_FETCH_FAIL';
                michal['type'] = report;
                report = _closure2_slot0;
                michal['skuId'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['fetchStoreListingForSku'] = tangon;
    tangon = function(argFoo) { // Original name: fetchStoreListingById
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.httpGetWithCountryCodeQuery;
        entity = {};
        oscard = _closure1_slot11;
        report = oscard.STORE_LISTING;
        tangon = argFoo;
        tangon = report.bind(oscard)(tangon);
        entity['url'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        zuuluu = michal.bind(zuuluu)(entity);
        michal = zuuluu.then;
        entity = function(argFoo) {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 8;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'STORE_LISTING_FETCH_SUCCESS';
            michal['type'] = report;
            report = argFoo;
            report = report.body;
            michal['storeListing'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['fetchStoreListingById'] = tangon;
    tangon = function(argFoo) { // Original name: fetchStoreListingForApplication
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.httpGetWithCountryCodeQuery;
        entity = {};
        oscard = _closure1_slot11;
        report = oscard.STORE_PUBLISHED_LISTINGS_APPLICATION;
        tangon = argFoo;
        tangon = report.bind(oscard)(tangon);
        entity['url'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        zuuluu = michal.bind(zuuluu)(entity);
        michal = zuuluu.then;
        entity = function(argFoo) {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 8;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'STORE_LISTING_FETCH_SUCCESS';
            michal['type'] = report;
            report = argFoo;
            report = report.body;
            michal['storeListing'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['fetchStoreListingForApplication'] = tangon;
    tangon = function() { // Original name: matureAgree
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 8;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'APPLICATION_STORE_MATURE_AGREE';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['matureAgree'] = tangon;
    tangon = function() { // Original name: matureDisagree
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 9;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.transitionTo;
        michal = _closure1_slot12;
        michal = michal.APPLICATION_STORE;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['matureDisagree'] = tangon;
    tangon = function(argFoo) { // Original name: joinPublishedStoreListingSkuGuild
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 10;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.post;
        entity = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        oscard = _closure1_slot11;
        report = oscard.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD;
        tangon = argFoo;
        tangon = report.bind(oscard)(tangon);
        entity['url'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['joinPublishedStoreListingSkuGuild'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: goToSKUStoreListing
        zuuluu = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 7;
        tangon = oscard[entity];
        entity = undefined;
        option = zuuluu.bind(entity)(tangon);
        golfie = option.getStoreListingLocation;
        report = argFoo;
        tangon = argBar;
        golfie = golfie.bind(option)(report, tangon);
        report = golfie.pathname;
        tangon = _closure1_slot5;
        michal = _closure1_slot3;
        tangon = tangon.bind(entity)(golfie, michal);
        michal = 9;
        michal = oscard[michal];
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.transitionTo;
        michal = michal.bind(zuuluu)(report, tangon);
        return entity;
    };
    zuuluu['goToSKUStoreListing'] = tangon;
    michal = function(argFoo, argBar) { // Original name: goToApplicationStoreListing
        zuuluu = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 7;
        tangon = oscard[entity];
        entity = undefined;
        option = zuuluu.bind(entity)(tangon);
        golfie = option.getApplicationStoreListingLocation;
        report = argFoo;
        tangon = argBar;
        golfie = golfie.bind(option)(report, tangon);
        report = golfie.pathname;
        tangon = _closure1_slot5;
        michal = _closure1_slot4;
        tangon = tangon.bind(entity)(golfie, michal);
        michal = 9;
        michal = oscard[michal];
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.transitionTo;
        michal = michal.bind(zuuluu)(report, tangon);
        return entity;
    };
    zuuluu['goToApplicationStoreListing'] = michal;
    return entity;
})();