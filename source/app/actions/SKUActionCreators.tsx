// app/actions/SKUActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _fetchSKU
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    tango = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 326; continue _fun00001 }
 13:
                    report = tango;
                    zulu = _closure1_slot5;
                    mike = zulu.get;
                    zulu = mike.bind(zulu)(tango);
                    mike = null;
                    if(!(mike == zulu)) { _fun00002_ip = 214; continue _fun00001 }
 42:
                    golf = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 5;
                    zulu = zulu[mike];
                    tango = undefined;
                    options = golf.bind(tango)(zulu);
                    golf = options.dispatch;
                    zulu = {};
                    verify = 'SKU_FETCH_START';
                    zulu['type'] = verify;
                    verify = report;
                    zulu['skuId'] = verify;
                    zulu = golf.bind(options)(zulu);
 94: // try_start_0
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 6;
                    zulu = options[zulu];
                    options = golf.bind(tango)(zulu);
                    golf = options.httpGetWithCountryCodeQuery;
                    zulu = {};
                    yankee = _closure1_slot8;
                    offset = yankee.STORE_SKU;
                    verify = report;
                    verify = offset.bind(yankee)(verify);
                    zulu['url'] = verify;
                    verify = false;
                    zulu['rejectWithError'] = verify;
                    zulu = golf.bind(options)(zulu);
                    SaveGenerator(address=159);
 157:
                    return zulu;
 159:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golf) { _fun00002_ip = 219; continue _fun00001 }
 165:
                    options = _closure1_slot1;
                    golf = _closure1_slot2;
                    golf = golf[mike];
                    verify = options.bind(tango)(golf);
                    options = verify.dispatch;
                    golf = {};
                    offset = 'SKU_FETCH_SUCCESS';
                    golf['type'] = offset;
                    offset = zulu.body;
                    golf['sku'] = offset;
                    golf = options.bind(verify)(golf);
 214: // try_end0
                    golf = undefined;
                    return golf;
 219:
                    return zulu;
 222: // catch_target0
                    CatchBlockStart(arg_register=2);
                    zulu = _closure1_slot1;
                    oscar = _closure1_slot2;
                    mike = oscar[mike];
                    options = zulu.bind(tango)(mike);
                    golf = options.dispatch;
                    mike = {};
                    verify = 'SKU_FETCH_FAIL';
                    mike['type'] = verify;
                    mike['skuId'] = report;
                    mike = golf.bind(options)(mike);
                    mike = 7;
                    mike = oscar[mike];
                    tango = zulu.bind(tango)(mike);
                    mike = global;
                    mike = mike.HermesInternal;
                    zulu = mike.concat;
                    mike = 'Failed to fetch SKU ';
                    romeo = zulu.bind(mike)(report);
                    zulu = tango.prototype;
                    zulu = Object.create(zulu, {constructor: {value: tango}});
                    foxtrot = zulu;
                    mike = new foxtrot[tango](romeo, yankee);
                    mike = mike instanceof Object ? mike : zulu;
                    throw mike;
 326:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot10 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _fetchPublishedSKU
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    romeo = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00004_ip = 534; continue _fun00003 }
 13:
                    verify = argFoo;
                    report = romeo;
                    yankee = argBaz;
                    tango = undefined;
                    golf = undefined;
                    zulu = undefined;
                    offset = undefined;
                    options = _closure1_slot5;
                    mike = options.get;
                    options = mike.bind(options)(romeo);
                    mike = null;
                    if(!(mike == options)) { _fun00004_ip = 424; continue _fun00003 }
 56:
                    romeo = _closure1_slot1;
                    options = _closure1_slot2;
                    mike = 5;
                    options = options[mike];
                    foxtrot = romeo.bind(tango)(options);
                    romeo = foxtrot.dispatch;
                    options = {};
                    backup = 'SKU_FETCH_START';
                    options['type'] = backup;
                    backup = report;
                    options['skuId'] = backup;
                    options = romeo.bind(foxtrot)(options);
 106: // try_start_0
                    backup = _closure1_slot6;
                    foxtrot = backup.inTestModeForApplication;
                    romeo = verify;
                    romeo = foxtrot.bind(backup)(romeo);
                    options = romeo;
                    if(romeo) { _fun00004_ip = 145; continue _fun00003 }
 130:
                    foxtrot = _closure1_slot4;
                    romeo = foxtrot.inDevModeForApplication;
                    options = romeo.bind(foxtrot)(verify);
 145:
                    verify = options;
                    golf = verify;
                    options = {};
                    backup = _closure1_slot8;
                    if(verify) { _fun00004_ip = 176; continue _fun00003 }
 160:
                    romeo = backup.STORE_PUBLISHED_LISTINGS_SKU;
                    verify = report;
                    verify = romeo.bind(backup)(verify);
                    _fun00004_ip = 190; continue _fun00003;
 176:
                    foxtrot = backup.STORE_SKU;
                    romeo = report;
                    verify = foxtrot.bind(backup)(romeo);
 190:
                    options['url'] = verify;
                    verify = false;
                    options['rejectWithError'] = verify;
                    zulu = options;
                    verify = yankee;
                    romeo = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    options = 8;
                    options = foxtrot[options];
                    options = romeo.bind(tango)(options);
                    options = options.ShopVariantsReturnStyle;
                    options = options.VARIANTS_GROUP;
                    if(!(verify === options)) { _fun00004_ip = 258; continue _fun00003 }
 242:
                    verify = zulu;
                    options = {};
                    options['variants_return_style'] = yankee;
                    verify['query'] = options;
 258:
                    verify = _closure1_slot0;
                    yankee = _closure1_slot2;
                    options = 6;
                    options = yankee[options];
                    verify = verify.bind(tango)(options);
                    options = verify.httpGetWithCountryCodeQuery;
                    zulu = options.bind(verify)(zulu);
                    SaveGenerator(address=293);
 291:
                    return zulu;
 293:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(options) { _fun00004_ip = 427; continue _fun00003 }
 302:
                    offset = zulu;
                    verify = _closure1_slot1;
                    options = _closure1_slot2;
                    options = options[mike];
                    yankee = verify.bind(tango)(options);
                    verify = yankee.dispatch;
                    options = {};
                    romeo = 'SKU_FETCH_SUCCESS';
                    options['type'] = romeo;
                    romeo = golf;
                    foxtrot = offset;
                    foxtrot = foxtrot.body;
                    if(romeo) { _fun00004_ip = 361; continue _fun00003 }
 353:
                    romeo = foxtrot.sku;
                    _fun00004_ip = 364; continue _fun00003;
 361:
                    romeo = foxtrot;
 364:
                    options['sku'] = romeo;
                    options = verify.bind(yankee)(options);
                    if(golf) { _fun00004_ip = 424; continue _fun00003 }
 377:
                    options = _closure1_slot1;
                    golf = _closure1_slot2;
                    golf = golf[mike];
                    verify = options.bind(tango)(golf);
                    options = verify.dispatch;
                    golf = {};
                    yankee = 'STORE_LISTING_FETCH_SUCCESS';
                    golf['type'] = yankee;
                    offset = offset.body;
                    golf['storeListing'] = offset;
                    golf = options.bind(verify)(golf);
 424: // try_end0
                    return tango;
 427:
                    return zulu;
 430: // catch_target0
                    CatchBlockStart(arg_register=2);
                    zulu = _closure1_slot1;
                    oscar = _closure1_slot2;
                    mike = oscar[mike];
                    options = zulu.bind(tango)(mike);
                    golf = options.dispatch;
                    mike = {};
                    verify = 'SKU_FETCH_FAIL';
                    mike['type'] = verify;
                    mike['skuId'] = report;
                    mike = golf.bind(options)(mike);
                    mike = 7;
                    mike = oscar[mike];
                    tango = zulu.bind(tango)(mike);
                    mike = global;
                    mike = mike.HermesInternal;
                    zulu = mike.concat;
                    mike = 'Failed to fetch SKU ';
                    kilo = zulu.bind(mike)(report);
                    zulu = tango.prototype;
                    zulu = Object.create(zulu, {constructor: {value: tango}});
                    sizing = zulu;
                    mike = new sizing[tango](kilo, backup);
                    mike = mike instanceof Object ? mike : zulu;
                    throw mike;
 534:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot11 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _fetchTestSKUsForApplication
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    zulu = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00006_ip = 244; continue _fun00005 }
 16:
                    golf = undefined;
                    if(!(zulu === golf)) { _fun00006_ip = 24; continue _fun00005 }
 22:
                    zulu = true;
 24:
                    SaveGenerator(address=28);
 26:
                    return golf;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00006_ip = 241; continue _fun00005 }
 37:
                    oscar = _closure1_slot6;
                    tango = oscar.inTestModeForApplication;
                    tango = tango.bind(oscar)(offset);
                    if(tango) { _fun00006_ip = 115; continue _fun00005 }
 58:
                    oscar = _closure1_slot4;
                    tango = oscar.inDevModeForApplication;
                    tango = tango.bind(oscar)(offset);
                    if(tango) { _fun00006_ip = 115; continue _fun00005 }
 76:
                    if(!zulu) { _fun00006_ip = 115; continue _fun00005 }
 79:
                    zulu = global;
                    oscar = zulu.Error;
                    zulu = oscar.prototype;
                    tango = Object.create(zulu, {constructor: {value: oscar}});
                    yankee = 'this should only be used in test mode';
                    romeo = tango;
                    zulu = new romeo[oscar](yankee, offset);
                    zulu = zulu instanceof Object ? zulu : tango;
                    throw zulu;
 115:
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 6;
                    zulu = oscar[zulu];
                    oscar = tango.bind(golf)(zulu);
                    tango = oscar.httpGetWithCountryCodeQuery;
                    zulu = {};
                    verify = _closure1_slot8;
                    options = verify.APPLICATION_SKUS;
                    options = options.bind(verify)(offset);
                    zulu['url'] = options;
                    options = false;
                    zulu['rejectWithError'] = options;
                    zulu = tango.bind(oscar)(zulu);
                    SaveGenerator(address=177);
 175:
                    return zulu;
 177:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun00006_ip = 238; continue _fun00005 }
 183:
                    tango = zulu.body;
                    oscar = _closure1_slot1;
                    options = _closure1_slot2;
                    report = 5;
                    report = options[report];
                    golf = oscar.bind(golf)(report);
                    oscar = golf.dispatch;
                    report = {};
                    options = 'SKUS_FETCH_SUCCESS';
                    report['type'] = options;
                    report['skus'] = tango;
                    report = oscar.bind(golf)(report);
                    return tango;
 238:
                    return zulu;
 241:
                    return mike;
 244:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot12 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: _fetchPurchasePreview
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz, argCorge) {
            entity = function* (argFoo, argBar, argBaz, argCorge) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    report = argBaz;
                    options = argCorge;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tango) { _fun00008_ip = 580; continue _fun00007 }
 19:
                    romeo = argBar;
                    foxtrot = report;
                    golf = undefined;
                    zulu = undefined;
                    yankee = undefined;
                    mike = undefined;
                    tango = {};
                    tango['payment_source_id'] = report;
                    report = null;
                    verify = report == options;
                    report = undefined;
                    if(verify) { _fun00008_ip = 57; continue _fun00007 }
 51:
                    report = options.isGift;
 57:
                    tango['gift'] = report;
                    yankee = tango;
                    options = _closure1_slot6;
                    report = options.inTestModeForApplication;
                    report = report.bind(options)(offset);
                    if(report) { _fun00008_ip = 101; continue _fun00007 }
 86:
                    verify = _closure1_slot4;
                    options = verify.inDevModeForApplication;
                    report = options.bind(verify)(offset);
 101:
                    if(!report) { _fun00008_ip = 115; continue _fun00007 }
 104:
                    options = yankee;
                    report = true;
                    options['test_mode'] = report;
 115:
                    options = _closure1_slot1;
                    report = _closure1_slot2;
                    verify = 5;
                    report = report[verify];
                    offset = options.bind(golf)(report);
                    options = offset.dispatch;
                    report = {};
                    backup = 'SKU_PURCHASE_PREVIEW_FETCH';
                    report['type'] = backup;
                    backup = romeo;
                    report['skuId'] = backup;
                    report = options.bind(offset)(report);
 165: // try_start_0
                    options = _closure1_slot0;
                    offset = _closure1_slot2;
                    report = 6;
                    report = offset[report];
                    offset = options.bind(golf)(report);
                    options = offset.httpGetWithCountryCodeQuery;
                    report = {};
                    sizing = _closure1_slot8;
                    kilo = sizing.STORE_SKU_PURCHASE;
                    backup = romeo;
                    backup = kilo.bind(sizing)(backup);
                    report['url'] = backup;
                    report['query'] = yankee;
                    yankee = true;
                    report['oldFormErrors'] = yankee;
                    yankee = false;
                    report['rejectWithError'] = yankee;
                    report = options.bind(offset)(report);
                    SaveGenerator(address=241);
 239:
                    return report;
 241:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(options) { _fun00008_ip = 317; continue _fun00007 }
 247:
                    zulu = report;
                    offset = _closure1_slot1;
                    options = _closure1_slot2;
                    options = options[verify];
                    yankee = offset.bind(golf)(options);
                    offset = yankee.dispatch;
                    options = {};
                    backup = 'SKU_PURCHASE_PREVIEW_FETCH_SUCCESS';
                    options['type'] = backup;
                    backup = romeo;
                    options['skuId'] = backup;
                    options['paymentSourceId'] = foxtrot;
                    foxtrot = report.body;
                    options['price'] = foxtrot;
                    options = offset.bind(yankee)(options);
 312: // try_end0
                    _fun00008_ip = 575; continue _fun00007;
 317:
                    return report;
 320: // catch_target0
                    CatchBlockStart(arg_register=7);
                    oscar = options;
                    offset = _closure1_slot1;
                    report = _closure1_slot2;
                    verify = report[verify];
                    yankee = offset.bind(golf)(verify);
                    offset = yankee.dispatch;
                    verify = {};
                    foxtrot = 'SKU_PURCHASE_PREVIEW_FETCH_FAILURE';
                    verify['type'] = foxtrot;
                    verify['skuId'] = romeo;
                    verify = offset.bind(yankee)(verify);
                    offset = _closure1_slot0;
                    verify = 9;
                    report = report[verify];
                    report = offset.bind(golf)(report);
                    report = report.BillingError;
                    report = options instanceof report;
                    if(report) { _fun00008_ip = 446; continue _fun00007 }
 398:
                    options = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[verify];
                    report = options.bind(golf)(report);
                    verify = report.BillingError;
                    output = oscar;
                    options = verify.prototype;
                    options = Object.create(options, {constructor: {value: verify}});
                    result = options;
                    report = new result[verify](output, sizing);
                    report = report instanceof Object ? report : options;
                    _fun00008_ip = 449; continue _fun00007;
 446:
                    report = oscar;
 449:
                    mike = report;
                    oscar = report.code;
                    verify = _closure1_slot0;
                    report = _closure1_slot2;
                    options = 10;
                    report = report[options];
                    report = verify.bind(golf)(report);
                    report = report.ErrorCodes;
                    report = report.BILLING_BUNDLE_ALREADY_PURCHASED;
                    if(!(oscar !== report)) { _fun00008_ip = 578; continue _fun00007 }
 493:
                    report = mike;
                    oscar = report.code;
                    verify = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[options];
                    report = verify.bind(golf)(report);
                    report = report.ErrorCodes;
                    report = report.BILLING_BUNDLE_PARTIALLY_OWNED;
                    if(!(oscar !== report)) { _fun00008_ip = 578; continue _fun00007 }
 534:
                    report = mike;
                    report = report.code;
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    tango = tango[options];
                    tango = oscar.bind(golf)(tango);
                    tango = tango.ErrorCodes;
                    tango = tango.INVALID_BILLING_ADDRESS;
                    if(!(report !== tango)) { _fun00008_ip = 578; continue _fun00007 }
 575:
                    return zulu;
 578:
                    throw mike;
 580:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot13 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _grantChannelBranchEntitlement
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    romeo = argFoo;
                    yankee = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00010_ip = 334; continue _fun00009 }
 16:
                    golf = romeo;
                    offset = argBar;
                    oscar = yankee;
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    options = 5;
                    mike = mike[options];
                    report = undefined;
                    verify = zulu.bind(report)(mike);
                    zulu = verify.dispatch;
                    mike = {};
                    foxtrot = 'SKU_PURCHASE_START';
                    mike['type'] = foxtrot;
                    mike['applicationId'] = romeo;
                    mike['skuId'] = yankee;
                    mike = zulu.bind(verify)(mike);
 81: // try_start_0
                    zulu = _closure1_slot0;
                    verify = _closure1_slot2;
                    mike = 11;
                    mike = verify[mike];
                    mike = zulu.bind(report)(mike);
                    verify = mike.HTTP;
                    zulu = verify.post;
                    mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    romeo = _closure1_slot8;
                    yankee = romeo.CHANNEL_ENTITLEMENT_GRANT;
                    offset = yankee.bind(romeo)(offset);
                    mike['url'] = offset;
                    mike = zulu.bind(verify)(mike);
                    SaveGenerator(address=152);
 150:
                    return mike;
 152:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00010_ip = 230; continue _fun00009 }
 158:
                    verify = _closure1_slot1;
                    zulu = _closure1_slot2;
                    zulu = zulu[options];
                    offset = verify.bind(report)(zulu);
                    verify = offset.dispatch;
                    zulu = {};
                    yankee = 'SKU_PURCHASE_SUCCESS';
                    zulu['type'] = yankee;
                    yankee = oscar;
                    zulu['skuId'] = yankee;
                    yankee = mike.body;
                    zulu['entitlements'] = yankee;
                    yankee = new Array(0);
                    zulu['libraryApplications'] = yankee;
                    zulu = verify.bind(offset)(zulu);
                    zulu = mike.body;
 227: // try_end0
                    return zulu;
 230:
                    return mike;
 233: // catch_target0
                    CatchBlockStart(arg_register=9);
                    verify = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 9;
                    mike = zulu[mike];
                    mike = verify.bind(report)(mike);
                    mike = mike.BillingError;
                    verify = mike.prototype;
                    verify = Object.create(verify, {constructor: {value: mike}});
                    kilo = verify;
                    backup = offset;
                    mike = new kilo[mike](backup, foxtrot);
                    mike = mike instanceof Object ? mike : verify;
                    tango = _closure1_slot1;
                    zulu = zulu[options];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    options = 'SKU_PURCHASE_FAIL';
                    zulu['type'] = options;
                    zulu['applicationId'] = golf;
                    zulu['skuId'] = oscar;
                    zulu['error'] = mike;
                    zulu = tango.bind(report)(zulu);
                    throw mike;
 334:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot14 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _purchaseSKU
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    config = argFoo;
                    oscar = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=7);
                    if(options) { _fun00012_ip = 1362; continue _fun00011 }
 18:
                    foxtrot = config;
                    var _closure4_slot0 = config;
                    golf = oscar;
                    var _closure4_slot1 = oscar;
                    options = undefined;
                    zulu = undefined;
                    source = undefined;
                    update = undefined;
                    output = undefined;
                    backup = undefined;
                    result = undefined;
                    report = undefined;
                    echo = undefined;
                    sizing = undefined;
                    offset = undefined;
                    kilo = undefined;
                    control = undefined;
                    romeo = undefined;
                    mike = undefined;
                    verify = {};
                    sierra = _closure1_slot9;
                    lima = verify;
                    vacuum = copyDataProperties(lima, sierra);
                    sierra = argBaz;
                    lima = verify;
                    vacuum = copyDataProperties(lima, sierra);
                    zulu = verify.paymentSource;
                    source = verify.expectedAmount;
                    update = verify.expectedCurrency;
                    output = verify.analyticsLoadId;
                    backup = verify.isGift;
                    result = verify.giftInfoOptions;
                    report = verify.subscriptionPlanId;
                    echo = verify.loadId;
                    sizing = verify.countryCode;
                    sequence = _closure1_slot1;
                    vacuum = _closure1_slot2;
                    verify = 5;
                    vacuum = vacuum[verify];
                    sequence = sequence.bind(options)(vacuum);
                    vacuum = sequence.wait;
                    yankee = function() {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 5;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.dispatch;
                        mike = {};
                        report = 'SKU_PURCHASE_START';
                        mike['type'] = report;
                        oscar = _closure4_slot0;
                        mike['applicationId'] = oscar;
                        report = _closure4_slot1;
                        mike['skuId'] = report;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    yankee = vacuum.bind(sequence)(yankee);
                    sequence = _closure1_slot6;
                    vacuum = sequence.inTestModeForApplication;
                    vacuum = vacuum.bind(sequence)(config);
                    yankee = vacuum;
                    if(vacuum) { _fun00012_ip = 221; continue _fun00011 }
 203:
                    config = _closure1_slot4;
                    sequence = config.inDevModeForApplication;
                    vacuum = foxtrot;
                    yankee = sequence.bind(config)(vacuum);
 221:
                    offset = yankee;
 224: // try_start_0
                    yankee = {};
                    vacuum = backup;
                    yankee['gift'] = vacuum;
                    yankee['sku_subscription_plan_id'] = report;
                    vacuum = _closure1_slot0;
                    sequence = _closure1_slot2;
                    report = 12;
                    report = sequence[report];
                    sequence = vacuum.bind(options)(report);
                    vacuum = sequence.createGatewayCheckoutContext;
                    report = zulu;
                    report = vacuum.bind(sequence)(report);
                    SaveGenerator(address=277);
 275:
                    return report;
 277:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=22);
                    if(vacuum) { _fun00012_ip = 957; continue _fun00011 }
 286:
                    yankee['gateway_checkout_context'] = report;
                    yankee['load_id'] = echo;
                    kilo = yankee;
                    if(offset) { _fun00012_ip = 658; continue _fun00011 }
 305:
                    offset = zulu;
                    echo = null;
                    if(!(echo != offset)) { _fun00012_ip = 550; continue _fun00011 }
 317:
                    yankee = kilo;
                    config = zulu;
                    offset = config.id;
                    yankee['payment_source_id'] = offset;
                    vacuum = _closure1_slot0;
                    offset = _closure1_slot2;
                    sequence = 13;
                    offset = offset[sequence];
                    vacuum = vacuum.bind(options)(offset);
                    offset = vacuum.createPaymentSourceToken;
                    offset = offset.bind(vacuum)(config);
                    SaveGenerator(address=369);
 367:
                    return offset;
 369:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=22);
                    if(vacuum) { _fun00012_ip = 655; continue _fun00011 }
 378:
                    yankee['payment_source_token'] = offset;
                    config = _closure1_slot7;
                    vacuum = config.has;
                    yankee = zulu;
                    yankee = yankee.type;
                    yankee = vacuum.bind(config)(yankee);
                    if(!yankee) { _fun00012_ip = 550; continue _fun00011 }
 412:
                    vacuum = _closure1_slot0;
                    yankee = _closure1_slot2;
                    yankee = yankee[sequence];
                    sequence = vacuum.bind(options)(yankee);
                    vacuum = sequence.popupBridgeState;
                    yankee = zulu;
                    yankee = yankee.type;
                    yankee = vacuum.bind(sequence)(yankee);
                    SaveGenerator(address=452);
 450:
                    return yankee;
 452:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=22);
                    if(vacuum) { _fun00012_ip = 652; continue _fun00011 }
 461:
                    control = yankee;
                    vacuum = kilo;
                    config = _closure1_slot0;
                    record = _closure1_slot2;
                    sequence = 11;
                    sequence = record[sequence];
                    config = config.bind(options)(sequence);
                    sequence = config.getAPIBaseURL;
                    sequence = sequence.bind(config)();
                    papa = _closure1_slot8;
                    context = papa.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                    config = zulu;
                    record = config.type;
                    target = echo != yankee;
                    config = '';
                    if(!target) { _fun00012_ip = 529; continue _fun00011 }
 526:
                    config = control;
 529:
                    control = 'success';
                    control = context.bind(papa)(record, config, control);
                    control = sequence + control;
                    vacuum['return_url'] = control;
 550:
                    control = source;
                    if(!(echo != control)) { _fun00012_ip = 568; continue _fun00011 }
 557:
                    control = kilo;
                    control['expected_amount'] = source;
 568:
                    source = update;
                    if(!(echo != source)) { _fun00012_ip = 586; continue _fun00011 }
 575:
                    source = kilo;
                    source['expected_currency'] = update;
 586:
                    update = kilo;
                    update['gift_info_options'] = result;
                    result = sizing;
                    if(!(echo != result)) { _fun00012_ip = 611; continue _fun00011 }
 602:
                    result = kilo;
                    result['country_code'] = sizing;
 611:
                    result = kilo;
                    echo = _closure1_slot0;
                    update = _closure1_slot2;
                    sizing = 14;
                    sizing = update[sizing];
                    echo = echo.bind(options)(sizing);
                    sizing = echo.getPurchaseToken;
                    sizing = sizing.bind(echo)();
                    result['purchase_token'] = sizing;
                    _fun00012_ip = 669; continue _fun00011;
 652: // try_end0
                    return yankee;
 655:
                    return offset;
 658: // try_start_1
                    yankee = kilo;
                    offset = true;
                    yankee['test_mode'] = offset;
 669:
                    yankee = _closure1_slot0;
                    sizing = _closure1_slot2;
                    offset = 11;
                    offset = sizing[offset];
                    offset = yankee.bind(options)(offset);
                    sizing = offset.HTTP;
                    yankee = sizing.post;
                    offset = {};
                    update = _closure1_slot8;
                    echo = update.STORE_SKU_PURCHASE;
                    result = golf;
                    result = echo.bind(update)(result);
                    offset['url'] = result;
                    offset['body'] = kilo;
                    kilo = {};
                    kilo['load_id'] = output;
                    offset['context'] = kilo;
                    kilo = true;
                    offset['oldFormErrors'] = kilo;
                    kilo = false;
                    offset['rejectWithError'] = kilo;
                    offset = yankee.bind(sizing)(offset);
                    SaveGenerator(address=761);
 759:
                    return offset;
 761:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(yankee) { _fun00012_ip = 954; continue _fun00011 }
 770:
                    romeo = offset;
                    sizing = _closure1_slot1;
                    yankee = _closure1_slot2;
                    yankee = yankee[verify];
                    output = sizing.bind(options)(yankee);
                    sizing = output.dispatch;
                    yankee = {};
                    result = 'SKU_PURCHASE_SUCCESS';
                    yankee['type'] = result;
                    result = golf;
                    yankee['skuId'] = result;
                    result = offset.body;
                    echo = result.library_applications;
                    result = null;
                    if(!(result == echo)) { _fun00012_ip = 836; continue _fun00011 }
 830:
                    result = new Array(0);
                    _fun00012_ip = 886; continue _fun00011;
 836:
                    echo = romeo;
                    echo = echo.body;
                    source = echo.library_applications;
                    update = source.filter;
                    control = _closure1_slot0;
                    vacuum = _closure1_slot2;
                    echo = 15;
                    echo = vacuum[echo];
                    echo = control.bind(options)(echo);
                    echo = echo.isNotNullish;
                    result = update.bind(source)(echo);
 886:
                    yankee['libraryApplications'] = result;
                    result = romeo.body;
                    result = result.entitlements;
                    yankee['entitlements'] = result;
                    result = romeo.body;
                    result = result.gift_code;
                    yankee['giftCode'] = result;
                    yankee = sizing.bind(output)(yankee);
                    yankee = {};
                    sierra = romeo.body;
                    lima = yankee;
                    romeo = copyDataProperties(lima, sierra);
                    romeo = 'redirectConfirmation';
                    yankee[romeo] = kilo;
 951: // try_end1
                    return yankee;
 954:
                    return offset;
 957:
                    return report;
 960: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=9);
                    tango = offset;
                    romeo = _closure1_slot0;
                    report = _closure1_slot2;
                    yankee = 9;
                    report = report[yankee];
                    report = romeo.bind(options)(report);
                    report = report.BillingError;
                    report = offset instanceof report;
                    if(report) { _fun00012_ip = 1046; continue _fun00011 }
 998:
                    offset = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[yankee];
                    report = offset.bind(options)(report);
                    yankee = report.BillingError;
                    lima = tango;
                    offset = yankee.prototype;
                    offset = Object.create(offset, {constructor: {value: yankee}});
                    whiskey = offset;
                    report = new whiskey[yankee](lima, sierra);
                    offset = report instanceof Object ? report : offset;
                    _fun00012_ip = 1049; continue _fun00011;
 1046:
                    offset = tango;
 1049:
                    mike = offset;
                    romeo = offset.code;
                    kilo = _closure1_slot0;
                    yankee = _closure1_slot2;
                    offset = 10;
                    yankee = yankee[offset];
                    yankee = kilo.bind(options)(yankee);
                    yankee = yankee.ErrorCodes;
                    yankee = yankee.CONFIRMATION_REQUIRED;
                    yankee = romeo !== yankee;
                    report = yankee;
                    if(!yankee) { _fun00012_ip = 1140; continue _fun00011 }
 1099:
                    yankee = mike;
                    romeo = yankee.code;
                    kilo = _closure1_slot0;
                    yankee = _closure1_slot2;
                    yankee = yankee[offset];
                    yankee = kilo.bind(options)(yankee);
                    yankee = yankee.ErrorCodes;
                    yankee = yankee.AUTHENTICATION_REQUIRED;
                    report = romeo !== yankee;
 1140:
                    if(report) { _fun00012_ip = 1195; continue _fun00011 }
 1143:
                    yankee = _closure1_slot1;
                    report = _closure1_slot2;
                    report = report[verify];
                    romeo = yankee.bind(options)(report);
                    yankee = romeo.dispatch;
                    report = {};
                    kilo = 'SKU_PURCHASE_AWAIT_CONFIRMATION';
                    report['type'] = kilo;
                    kilo = golf;
                    report['skuId'] = kilo;
                    report['isGift'] = backup;
                    report = yankee.bind(romeo)(report);
 1195:
                    yankee = _closure1_slot1;
                    report = _closure1_slot2;
                    verify = report[verify];
                    romeo = yankee.bind(options)(verify);
                    yankee = romeo.dispatch;
                    verify = {};
                    backup = 'SKU_PURCHASE_FAIL';
                    verify['type'] = backup;
                    verify['applicationId'] = foxtrot;
                    verify['skuId'] = golf;
                    golf = mike;
                    verify['error'] = golf;
                    verify = yankee.bind(romeo)(verify);
                    golf = golf.code;
                    verify = _closure1_slot0;
                    report = report[offset];
                    report = verify.bind(options)(report);
                    report = report.ErrorCodes;
                    report = report.CONFIRMATION_REQUIRED;
                    if(!(golf === report)) { _fun00012_ip = 1360; continue _fun00011 }
 1284:
                    report = tango;
                    report = report.body;
                    report = report.payment_id;
                    golf = _closure1_slot0;
                    verify = _closure1_slot2;
                    oscar = 13;
                    oscar = verify[oscar];
                    oscar = golf.bind(options)(oscar);
                    if(report) { _fun00012_ip = 1340; continue _fun00011 }
 1321:
                    golf = oscar.dispatchConfirmationError;
                    report = 'payment id cannot be null on redirected confirmations.';
                    report = golf.bind(oscar)(report);
                    throw report;
 1340:
                    report = oscar.handleConfirmation;
                    tango = tango.body;
                    zulu = report.bind(oscar)(tango, zulu);
                    return zulu;
 1360:
                    throw mike;
 1362:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot15 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _resendPaymentVerificationEmail
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00014_ip = 239; continue _fun00013 }
 10: // try_start_0
                    golf = {};
                    oscar = _closure1_slot0;
                    verify = _closure1_slot2;
                    mike = 14;
                    mike = verify[mike];
                    report = undefined;
                    tango = oscar.bind(report)(mike);
                    mike = tango.getPurchaseToken;
                    mike = mike.bind(tango)();
                    golf['purchase_token'] = mike;
                    tango = {};
                    mike = 11;
                    mike = verify[mike];
                    mike = oscar.bind(report)(mike);
                    oscar = mike.HTTP;
                    report = oscar.post;
                    mike = {};
                    options = _closure1_slot8;
                    options = options.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION;
                    mike['url'] = options;
                    mike['body'] = golf;
                    golf = true;
                    mike['oldFormErrors'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = report.bind(oscar)(mike);
                    SaveGenerator(address=119);
 117:
                    return mike;
 119:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00014_ip = 140; continue _fun00013 }
 125:
                    offset = mike.body;
                    yankee = tango;
                    report = copyDataProperties(yankee, offset);
 137: // try_end0
                    return tango;
 140:
                    return mike;
 143: // catch_target0
                    CatchBlockStart(arg_register=6);
                    zulu = golf;
                    options = _closure1_slot0;
                    tango = _closure1_slot2;
                    oscar = 9;
                    tango = tango[oscar];
                    report = undefined;
                    tango = options.bind(report)(tango);
                    tango = tango.BillingError;
                    tango = golf instanceof tango;
                    if(tango) { _fun00014_ip = 234; continue _fun00013 }
 186:
                    tango = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[oscar];
                    mike = tango.bind(report)(mike);
                    report = mike.BillingError;
                    yankee = zulu;
                    tango = report.prototype;
                    tango = Object.create(tango, {constructor: {value: report}});
                    romeo = tango;
                    mike = new romeo[report](yankee, offset);
                    mike = mike instanceof Object ? mike : tango;
                    _fun00014_ip = 237; continue _fun00013;
 234:
                    mike = zulu;
 237:
                    throw mike;
 239:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot16 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot16 = entity;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.ADYEN_PAYMENT_SOURCES;
    var _closure1_slot7 = golf;
    tango = tango.Endpoints;
    var _closure1_slot8 = tango;
    tango = {};
    golf = false;
    tango['isGift'] = golf;
    var _closure1_slot9 = tango;
    tango = 16;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/SKUActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: fetchSKU
        entity = undefined;
        tango = _closure1_slot10;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchSKU'] = tango;
    tango = function() { // Original name: fetchPublishedSKU
        entity = undefined;
        tango = _closure1_slot11;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchPublishedSKU'] = tango;
    tango = function() { // Original name: fetchTestSKUsForApplication
        entity = undefined;
        tango = _closure1_slot12;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchTestSKUsForApplication'] = tango;
    tango = function() { // Original name: fetchPurchasePreview
        entity = undefined;
        tango = _closure1_slot13;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchPurchasePreview'] = tango;
    tango = function() { // Original name: grantChannelBranchEntitlement
        entity = undefined;
        tango = _closure1_slot14;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['grantChannelBranchEntitlement'] = tango;
    tango = function() { // Original name: purchaseSKU
        entity = undefined;
        tango = _closure1_slot15;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['purchaseSKU'] = tango;
    tango = function() { // Original name: resendPaymentVerificationEmail
        entity = undefined;
        tango = _closure1_slot16;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['resendPaymentVerificationEmail'] = tango;
    tango = function() { // Original name: clearPurchaseError
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'SKU_PURCHASE_CLEAR_ERROR';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['clearPurchaseError'] = tango;
    tango = function() { // Original name: showPurchaseConfirmationStep
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.wait;
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            tango = 'SKU_PURCHASE_SHOW_CONFIRMATION_STEP';
            entity['type'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['showPurchaseConfirmationStep'] = tango;
    mike = function(argFoo) { // Original name: updateSKUPaymentIsGift
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'SKU_PURCHASE_UPDATE_IS_GIFT';
        mike['type'] = report;
        report = argFoo;
        mike['isGift'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['updateSKUPaymentIsGift'] = mike;
    return entity;
})();