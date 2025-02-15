// app/actions/StoreListingActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = ['pathname'];
    var _closure1_slot3 = entity;
    entity = ['pathname'];
    var _closure1_slot4 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.Endpoints;
    var _closure1_slot11 = golf;
    tango = tango.Routes;
    var _closure1_slot12 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/StoreListingActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: fetchStoreListingsForApplications
        _fun109736: for(var _fun109736_ip = 0; ; ) switch(_fun109736_ip) {
 0:
            tango = argFoo;
            zulu = tango.filter;
            mike = function(argFoo) {
                _fun109737: for(var _fun109737_ip = 0; ; ) switch(_fun109737_ip) {
 0:
                    tango = _closure1_slot7;
                    zulu = tango.getApplication;
                    entity = argFoo;
                    entity = zulu.bind(tango)(entity);
                    zulu = null;
                    if(!(zulu != entity)) { _fun109737_ip = 63; continue _fun109737 }
 27:
                    report = entity.destinationSkuId;
                    entity = zulu == report;
                    if(entity) { _fun109737_ip = 61; continue _fun109737 }
 42:
                    tango = _closure1_slot9;
                    mike = tango.getForSKU;
                    mike = mike.bind(tango)(report);
                    entity = zulu == mike;
 61:
                    return entity;
 63:
                    entity = true;
                    return entity;
                }
            };
            oscar = zulu.bind(tango)(mike);
            zulu = oscar.length;
            mike = 0;
            if(!(mike !== zulu)) { _fun109736_ip = 130; continue _fun109736 }
 33:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 7;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.httpGetWithCountryCodeQuery;
            mike = {};
            report = _closure1_slot11;
            report = report.STORE_PUBLISHED_LISTINGS_APPLICATIONS;
            mike['url'] = report;
            report = {};
            report['application_ids'] = oscar;
            mike['query'] = report;
            report = true;
            mike['oldFormErrors'] = report;
            report = false;
            mike['rejectWithError'] = report;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.then;
            entity = function(argFoo) {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 8;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                report = 'STORE_LISTINGS_FETCH_SUCCESS';
                mike['type'] = report;
                report = argFoo;
                report = report.body;
                mike['storeListings'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            _fun109736_ip = 148; continue _fun109736;
 130:
            mike = global;
            zulu = mike.Promise;
            mike = zulu.resolve;
            entity = mike.bind(zulu)();
 148:
            return entity;
        }
    };
    zulu['fetchStoreListingsForApplications'] = tango;
    tango = function(argFoo) { // Original name: fetchAllStoreListingsForApplication
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.httpGetWithCountryCodeQuery;
        entity = {};
        tango = _closure1_slot11;
        tango = tango.STORE_PUBLISHED_LISTINGS_SKUS;
        entity['url'] = tango;
        tango = {};
        report = argFoo;
        tango['application_id'] = report;
        entity['query'] = tango;
        tango = true;
        entity['oldFormErrors'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        zulu = mike.bind(zulu)(entity);
        mike = zulu.then;
        entity = function(argFoo) {
            entity = argFoo;
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 8;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.dispatch;
            mike = {};
            report = 'STORE_LISTINGS_FETCH_SUCCESS';
            mike['type'] = report;
            golf = entity.body;
            oscar = golf.map;
            report = function(argFoo) {
                entity = {};
                tango = argFoo;
                report = entity;
                mike = copyDataProperties(report, tango);
                zulu = true;
                mike = 'published';
                entity[mike] = zulu;
                return entity;
            };
            report = oscar.bind(golf)(report);
            mike['storeListings'] = report;
            mike = zulu.bind(tango)(mike);
            entity = entity.body;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['fetchAllStoreListingsForApplication'] = tango;
    tango = function(argFoo) { // Original name: fetchStoreListingForSku
        _fun109742: for(var _fun109742_ip = 0; ; ) switch(_fun109742_ip) {
 0:
            options = argFoo;
            var _closure2_slot0 = options;
            zulu = _closure1_slot8;
            mike = zulu.get;
            zulu = mike.bind(zulu)(options);
            mike = null;
            report = mike != zulu;
            if(!report) { _fun109742_ip = 81; continue _fun109742 }
 35:
            golf = _closure1_slot10;
            tango = golf.inTestModeForApplication;
            mike = zulu.applicationId;
            mike = tango.bind(golf)(mike);
            if(mike) { _fun109742_ip = 78; continue _fun109742 }
 58:
            golf = _closure1_slot6;
            tango = golf.inDevModeForApplication;
            zulu = zulu.applicationId;
            mike = tango.bind(golf)(zulu);
 78:
            report = mike;
 81:
            var _closure2_slot1 = report;
            zulu = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 8;
            mike = golf[mike];
            tango = undefined;
            verify = zulu.bind(tango)(mike);
            zulu = verify.dispatch;
            mike = {};
            offset = 'STORE_LISTINGS_FETCH_START';
            mike['type'] = offset;
            mike['skuId'] = options;
            mike = zulu.bind(verify)(mike);
            zulu = _closure1_slot0;
            mike = 7;
            mike = golf[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.httpGetWithCountryCodeQuery;
            mike = {};
            golf = _closure1_slot11;
            if(report) { _fun109742_ip = 176; continue _fun109742 }
 163:
            report = golf.STORE_PUBLISHED_LISTINGS_SKU;
            report = report.bind(golf)(options);
            _fun109742_ip = 187; continue _fun109742;
 176:
            oscar = golf.STORE_LISTINGS_SKU;
            report = oscar.bind(golf)(options);
 187:
            mike['url'] = report;
            report = false;
            mike['rejectWithError'] = report;
            tango = zulu.bind(tango)(mike);
            zulu = tango.then;
            mike = function(argFoo) {
                _fun109743: for(var _fun109743_ip = 0; ; ) switch(_fun109743_ip) {
 0:
                    report = argFoo;
                    oscar = _closure2_slot1;
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 8;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    if(oscar) { _fun109743_ip = 70; continue _fun109743 }
 45:
                    oscar = 'STORE_LISTING_FETCH_SUCCESS';
                    mike['type'] = oscar;
                    oscar = report.body;
                    mike['storeListing'] = oscar;
                    oscar = zulu.bind(tango)(mike);
                    _fun109743_ip = 93; continue _fun109743;
 70:
                    oscar = 'STORE_LISTINGS_FETCH_SUCCESS';
                    mike['type'] = oscar;
                    report = report.body;
                    mike['storeListings'] = report;
                    mike = zulu.bind(tango)(mike);
 93:
                    return entity;
                }
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.catch;
            entity = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 8;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                report = 'SKU_FETCH_FAIL';
                mike['type'] = report;
                report = _closure2_slot0;
                mike['skuId'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['fetchStoreListingForSku'] = tango;
    tango = function(argFoo) { // Original name: fetchStoreListingById
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.httpGetWithCountryCodeQuery;
        entity = {};
        oscar = _closure1_slot11;
        report = oscar.STORE_LISTING;
        tango = argFoo;
        tango = report.bind(oscar)(tango);
        entity['url'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        zulu = mike.bind(zulu)(entity);
        mike = zulu.then;
        entity = function(argFoo) {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 8;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'STORE_LISTING_FETCH_SUCCESS';
            mike['type'] = report;
            report = argFoo;
            report = report.body;
            mike['storeListing'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['fetchStoreListingById'] = tango;
    tango = function(argFoo) { // Original name: fetchStoreListingForApplication
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.httpGetWithCountryCodeQuery;
        entity = {};
        oscar = _closure1_slot11;
        report = oscar.STORE_PUBLISHED_LISTINGS_APPLICATION;
        tango = argFoo;
        tango = report.bind(oscar)(tango);
        entity['url'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        zulu = mike.bind(zulu)(entity);
        mike = zulu.then;
        entity = function(argFoo) {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 8;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'STORE_LISTING_FETCH_SUCCESS';
            mike['type'] = report;
            report = argFoo;
            report = report.body;
            mike['storeListing'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['fetchStoreListingForApplication'] = tango;
    tango = function() { // Original name: matureAgree
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 8;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'APPLICATION_STORE_MATURE_AGREE';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['matureAgree'] = tango;
    tango = function() { // Original name: matureDisagree
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 9;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.transitionTo;
        mike = _closure1_slot12;
        mike = mike.APPLICATION_STORE;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['matureDisagree'] = tango;
    tango = function(argFoo) { // Original name: joinPublishedStoreListingSkuGuild
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 10;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        oscar = _closure1_slot11;
        report = oscar.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD;
        tango = argFoo;
        tango = report.bind(oscar)(tango);
        entity['url'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['joinPublishedStoreListingSkuGuild'] = tango;
    tango = function(argFoo, argBar) { // Original name: goToSKUStoreListing
        zulu = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 7;
        tango = oscar[entity];
        entity = undefined;
        options = zulu.bind(entity)(tango);
        golf = options.getStoreListingLocation;
        report = argFoo;
        tango = argBar;
        golf = golf.bind(options)(report, tango);
        report = golf.pathname;
        tango = _closure1_slot5;
        mike = _closure1_slot3;
        tango = tango.bind(entity)(golf, mike);
        mike = 9;
        mike = oscar[mike];
        zulu = zulu.bind(entity)(mike);
        mike = zulu.transitionTo;
        mike = mike.bind(zulu)(report, tango);
        return entity;
    };
    zulu['goToSKUStoreListing'] = tango;
    mike = function(argFoo, argBar) { // Original name: goToApplicationStoreListing
        zulu = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 7;
        tango = oscar[entity];
        entity = undefined;
        options = zulu.bind(entity)(tango);
        golf = options.getApplicationStoreListingLocation;
        report = argFoo;
        tango = argBar;
        golf = golf.bind(options)(report, tango);
        report = golf.pathname;
        tango = _closure1_slot5;
        mike = _closure1_slot4;
        tango = tango.bind(entity)(golf, mike);
        mike = 9;
        mike = oscar[mike];
        zulu = zulu.bind(entity)(mike);
        mike = zulu.transitionTo;
        mike = mike.bind(zulu)(report, tango);
        return entity;
    };
    zulu['goToApplicationStoreListing'] = mike;
    return entity;
})();