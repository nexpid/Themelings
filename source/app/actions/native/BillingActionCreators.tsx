// app/actions/native/BillingActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    verify = argBar;
    foxtrot = argBaz;
    yankee = argCorge;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = foxtrot;
    var _closure1_slot2 = yankee;
    var _closure1_slot3 = offset;
    romeo = function(argFoo) { // Original name: applyAppleReceipt
        entity = argFoo;
        yankee = entity.encodedReceipt;
        offset = entity.entitlementSkuId;
        verify = entity.presentmentCurrency;
        options = entity.presentmentAmount;
        golf = entity.appStoreRegion;
        oscar = entity.giftInfoOptions;
        tango = entity.retries;
        zulu = _closure1_slot0;
        mike = _closure1_slot3;
        entity = 13;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {};
        report = _closure1_slot17;
        report = report.BILLING_APPLY_APPLE_RECEIPT;
        entity['url'] = report;
        report = {};
        report['encoded_receipt'] = yankee;
        report['entitlement_sku_id'] = offset;
        report['presentment_currency'] = verify;
        report['presentment_amount'] = options;
        report['app_store_region'] = golf;
        report['gift_info_options'] = oscar;
        entity['body'] = report;
        entity['retries'] = tango;
        tango = true;
        entity['oldFormErrors'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        zulu = mike.bind(zulu)(entity);
        mike = zulu.catch;
        entity = function(argFoo) {
            entity = argFoo;
            tango = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 14;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.captureBillingException;
            mike = {};
            report = {};
            oscar = _closure1_slot22;
            report['source'] = oscar;
            mike['tags'] = report;
            mike = zulu.bind(tango)(entity, mike);
            throw entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot26 = romeo;
    entity = function() { // Original name: _getTrialOfferSignature
        report = undefined;
        entity = undefined;
        tango = _closure1_slot7;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun65801: for(var _fun65801_ip = 0; ; ) switch(_fun65801_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun65801_ip = 169; continue _fun65801 }
 10:
                    options = argFoo;
                    golf = argBar;
                    oscar = argBaz;
 19: // try_start_0
                    tango = _closure1_slot0;
                    zulu = _closure1_slot3;
                    mike = 13;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.HTTP;
                    zulu = tango.post;
                    mike = {};
                    report = _closure1_slot17;
                    report = report.BILLING_GENERATE_APPLE_TRIAL_OFFER_SIGNATURE;
                    mike['url'] = report;
                    report = {};
                    report['product_id'] = options;
                    report['product_offer_id'] = golf;
                    report['app_account_token'] = oscar;
                    mike['body'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=111);
 109:
                    return mike;
 111:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun65801_ip = 125; continue _fun65801 }
 117:
                    zulu = mike.body;
 122: // try_end0
                    return zulu;
 125:
                    return mike;
 128: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tango = _closure1_slot0;
                    zulu = _closure1_slot3;
                    mike = 14;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.captureBillingException;
                    zulu = zulu.bind(tango)(report);
                    return mike;
 169:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot27 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot27 = entity;
    oscar = function() { // Original name: restoreFromLocalReceipt
        entity = undefined;
        tango = _closure1_slot29;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot28 = oscar;
    entity = function() { // Original name: _restoreFromLocalReceipt
        report = undefined;
        entity = undefined;
        tango = _closure1_slot7;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun65805: for(var _fun65805_ip = 0; ; ) switch(_fun65805_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun65805_ip = 489; continue _fun65805 }
 10:
                    report = undefined;
                    options = undefined;
                    foxtrot = undefined;
                    oscar = undefined;
                    yankee = undefined;
                    tango = undefined;
                    offset = undefined;
 24: // try_start_0
                    golf = _closure1_slot1;
                    verify = _closure1_slot3;
                    mike = 15;
                    mike = verify[mike];
                    golf = golf.bind(report)(mike);
                    mike = golf.receiptData;
                    mike = mike.bind(golf)();
                    SaveGenerator(address=61);
 59:
                    return mike;
 61:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(golf) { _fun65805_ip = 479; continue _fun65805 }
 70:
                    foxtrot = mike;
                    romeo = _closure1_slot0;
                    kilo = _closure1_slot3;
                    verify = 16;
                    golf = kilo[verify];
                    golf = romeo.bind(report)(golf);
                    backup = golf.Storage;
                    romeo = backup.get;
                    golf = _closure1_slot20;
                    romeo = romeo.bind(backup)(golf);
                    backup = _closure1_slot1;
                    golf = 17;
                    golf = kilo[golf];
                    backup = backup.bind(report)(golf);
                    golf = backup.v3;
                    golf = golf.bind(backup)(mike);
                    oscar = golf;
                    if(!(romeo !== golf)) { _fun65805_ip = 428; continue _fun65805 }
 150:
                    backup = _closure1_slot9;
                    romeo = backup.getGiftOptionsForKey;
                    golf = oscar;
                    yankee = romeo.bind(backup)(golf);
                    romeo = _closure1_slot14;
                    golf = romeo.getProducts;
                    golf = golf.bind(romeo)();
                    options = golf;
                    romeo = null;
                    if(!(romeo == golf)) { _fun65805_ip = 197; continue _fun65805 }
 191:
                    golf = new Array(0);
                    _fun65805_ip = 200; continue _fun65805;
 197:
                    golf = options;
 200:
                    tango = golf;
                    options = golf.length;
                    golf = 0;
                    backup = options > golf;
                    options = null;
                    if(!backup) { _fun65805_ip = 223; continue _fun65805 }
 219:
                    options = tango[golf];
 223:
                    offset = options;
                    golf = _closure1_slot26;
                    tango = {};
                    tango['encodedReceipt'] = foxtrot;
                    foxtrot = _closure1_slot21;
                    tango['retries'] = foxtrot;
                    foxtrot = romeo == options;
                    options = undefined;
                    if(foxtrot) { _fun65805_ip = 261; continue _fun65805 }
 255:
                    options = offset.countryCode;
 261:
                    tango['appStoreRegion'] = options;
                    options = {};
                    offset = yankee;
                    foxtrot = romeo == offset;
                    offset = undefined;
                    if(foxtrot) { _fun65805_ip = 289; continue _fun65805 }
 280:
                    foxtrot = yankee;
                    offset = foxtrot.gift_style;
 289:
                    options['gift_style'] = offset;
                    offset = yankee;
                    romeo = romeo == offset;
                    offset = undefined;
                    if(romeo) { _fun65805_ip = 312; continue _fun65805 }
 306:
                    offset = yankee.reward_sku_ids;
 312:
                    options['reward_sku_ids'] = offset;
                    tango['giftInfoOptions'] = options;
                    tango = golf.bind(report)(tango);
                    SaveGenerator(address=331);
 329:
                    return tango;
 331:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golf) { _fun65805_ip = 425; continue _fun65805 }
 337:
                    offset = _closure1_slot1;
                    golf = _closure1_slot3;
                    options = 18;
                    options = golf[options];
                    romeo = offset.bind(report)(options);
                    yankee = romeo.dispatch;
                    options = {};
                    offset = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                    options['type'] = offset;
                    offset = oscar;
                    options['key'] = offset;
                    options = yankee.bind(romeo)(options);
                    options = _closure1_slot0;
                    golf = golf[verify];
                    golf = options.bind(report)(golf);
                    verify = golf.Storage;
                    options = verify.set;
                    golf = _closure1_slot20;
                    golf = options.bind(verify)(golf, offset);
 420: // try_end0
                    golf = true;
                    return golf;
 425:
                    return tango;
 428: // try_start_1
                    tango = _closure1_slot1;
                    golf = _closure1_slot3;
                    zulu = 18;
                    zulu = golf[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                    zulu['type'] = golf;
                    zulu['key'] = oscar;
                    zulu = tango.bind(report)(zulu);
 474: // try_end1
                    zulu = false;
                    return zulu;
 479:
                    return mike;
 482: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=1);
                    mike = false;
                    return mike;
 489:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot29 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo, argBar) { // Original name: handlePurchaseException
        _fun65806: for(var _fun65806_ip = 0; ; ) switch(_fun65806_ip) {
 0:
            entity = argFoo;
            verify = argBar;
            tango = _closure1_slot25;
            zulu = tango.has;
            mike = entity.code;
            mike = zulu.bind(tango)(mike);
            if(mike) { _fun65806_ip = 623; continue _fun65806 }
 34:
            tango = _closure1_slot24;
            mike = entity.message;
            golf = null;
            offset = entity;
            if(!(golf != mike)) { _fun65806_ip = 55; continue _fun65806 }
 52:
            offset = mike;
 55:
            mike = global;
            zulu = mike.HermesInternal;
            options = zulu.concat;
            report = 'Unable to make request for ';
            zulu = ': ';
            zulu = options.bind(report)(verify, zulu, offset);
            offset = undefined;
            zulu = tango.bind(offset)(zulu);
            tango = _closure1_slot24;
            report = mike.JSON;
            zulu = report.stringify;
            options = zulu.bind(report)(entity);
            zulu = mike.HermesInternal;
            report = zulu.concat;
            zulu = 'error dumped: ';
            zulu = report.bind(zulu)(options);
            zulu = tango.bind(offset)(zulu);
            tango = _closure1_slot2;
            report = _closure1_slot3;
            zulu = 31;
            zulu = report[zulu];
            tango = tango.bind(offset)(zulu);
            zulu = tango.getUnderlyingIOSError;
            report = zulu.bind(tango)(entity);
            if(!(golf == report)) { _fun65806_ip = 498; continue _fun65806 }
 180:
            yankee = _closure1_slot0;
            zulu = _closure1_slot3;
            kilo = 24;
            tango = zulu[kilo];
            tango = yankee.bind(offset)(tango);
            options = tango.intl;
            tango = options.string;
            zulu = zulu[kilo];
            zulu = yankee.bind(offset)(zulu);
            zulu = zulu.t;
            zulu = zulu.PjfUXV;
            yankee = tango.bind(options)(zulu);
            options = yankee.replace;
            tango = '!';
            zulu = '.';
            foxtrot = options.bind(yankee)(tango, zulu);
            yankee = entity.message;
            if(yankee) { _fun65806_ip = 265; continue _fun65806 }
 262:
            yankee = foxtrot;
 265:
            zulu = entity.body;
            options = yankee;
            if(!(golf != zulu)) { _fun65806_ip = 333; continue _fun65806 }
 277:
            zulu = entity.body;
            tango = zulu.apple_error_code;
            options = yankee;
            if(!(golf != tango)) { _fun65806_ip = 333; continue _fun65806 }
 295:
            output = zulu.apple_error_code;
            zulu = mike.HermesInternal;
            yankee = zulu.concat;
            update = '';
            result = ' (code: ';
            sizing = ')';
            echo = foxtrot;
            options = update[yankee](echo, result, output, sizing, kilo);
 333:
            tango = _closure1_slot1;
            yankee = _closure1_slot3;
            zulu = 27;
            zulu = yankee[zulu];
            golf = tango.bind(offset)(zulu);
            tango = golf.show;
            zulu = {};
            backup = _closure1_slot0;
            romeo = yankee[kilo];
            romeo = backup.bind(offset)(romeo);
            foxtrot = romeo.intl;
            romeo = foxtrot.string;
            yankee = yankee[kilo];
            yankee = backup.bind(offset)(yankee);
            yankee = yankee.t;
            yankee = yankee.zrhHHx;
            yankee = romeo.bind(foxtrot)(yankee);
            zulu['title'] = yankee;
            zulu['body'] = options;
            options = true;
            zulu['isDismissable'] = options;
            zulu = tango.bind(golf)(zulu);
            zulu = 'status';
            zulu = zulu in entity;
            if(zulu) { _fun65806_ip = 496; continue _fun65806 }
 440:
            tango = _closure1_slot0;
            golf = _closure1_slot3;
            zulu = 14;
            zulu = golf[zulu];
            golf = tango.bind(offset)(zulu);
            tango = golf.captureBillingException;
            zulu = {};
            options = {};
            yankee = _closure1_slot22;
            options['source'] = yankee;
            options['purchase_type'] = verify;
            zulu['tags'] = options;
            zulu = tango.bind(golf)(entity, zulu);
            throw entity;
 496:
            throw entity;
 498:
            zulu = _closure1_slot24;
            mike = mike.HermesInternal;
            tango = mike.concat;
            mike = 'NativeError: ';
            mike = tango.bind(mike)(report);
            mike = zulu.bind(offset)(mike);
            zulu = _closure1_slot1;
            yankee = _closure1_slot3;
            mike = 27;
            mike = yankee[mike];
            tango = zulu.bind(offset)(mike);
            zulu = tango.show;
            mike = {};
            verify = _closure1_slot0;
            oscar = 24;
            golf = yankee[oscar];
            golf = verify.bind(offset)(golf);
            options = golf.intl;
            golf = options.string;
            oscar = yankee[oscar];
            oscar = verify.bind(offset)(oscar);
            oscar = oscar.t;
            oscar = oscar.POsVOj;
            oscar = golf.bind(options)(oscar);
            mike['title'] = oscar;
            mike['body'] = report;
            mike = zulu.bind(tango)(mike);
            throw entity;
 623:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: canMakeIAPRequest
        _fun65807: for(var _fun65807_ip = 0; ; ) switch(_fun65807_ip) {
 0:
            mike = _closure1_slot14;
            entity = mike.isBusy;
            entity = entity.bind(mike)();
            entity = !entity;
            if(!entity) { _fun65807_ip = 119; continue _fun65807 }
 23:
            zulu = _closure1_slot1;
            report = _closure1_slot3;
            mike = 22;
            mike = report[mike];
            report = undefined;
            options = zulu.bind(report)(mike);
            golf = options.getCurrentConfig;
            oscar = {};
            mike = '1ee357_2';
            oscar['location'] = mike;
            mike = {};
            zulu = false;
            mike['autoTrackExposure'] = zulu;
            mike = golf.bind(options)(oscar, mike);
            mike = mike.paymentsBlocked;
            mike = !mike;
            if(mike) { _fun65807_ip = 116; continue _fun65807 }
 90:
            oscar = _closure1_slot1;
            golf = _closure1_slot3;
            tango = 23;
            tango = golf[tango];
            tango = oscar.bind(report)(tango);
            tango = tango.bind(report)();
            mike = false;
 116:
            entity = mike;
 119:
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    entity = function() { // Original name: clearAndMakeIAPRequest
        entity = undefined;
        tango = _closure1_slot33;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot32 = entity;
    entity = function() { // Original name: _clearAndMakeIAPRequest
        report = undefined;
        entity = undefined;
        tango = _closure1_slot7;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun65811: for(var _fun65811_ip = 0; ; ) switch(_fun65811_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun65811_ip = 653; continue _fun65811 }
 10:
                    verify = argFoo;
                    foxtrot = argBar;
                    yankee = argBaz;
                    oscar = undefined;
                    result = undefined;
                    echo = undefined;
                    output = undefined;
                    romeo = undefined;
                    kilo = undefined;
                    backup = undefined;
                    report = undefined;
                    options = false;
                    offset = null;
                    golf = null;
 41: // try_start_0 // try_start_1
                    sizing = _closure1_slot0;
                    update = _closure1_slot3;
                    zulu = 21;
                    zulu = update[zulu];
                    sizing = sizing.bind(oscar)(zulu);
                    zulu = sizing.clearTransactionIOS;
                    zulu = zulu.bind(sizing)();
                    SaveGenerator(address=78);
 76:
                    return zulu;
 78:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=15);
                    if(sizing) { _fun65811_ip = 426; continue _fun65811 }
 87:
                    update = _closure1_slot0;
                    source = _closure1_slot3;
                    sizing = 15;
                    sizing = source[sizing];
                    update = update.bind(oscar)(sizing);
                    sizing = update.makeIAPRequest;
                    yankee = sizing.bind(update)(foxtrot, yankee);
                    SaveGenerator(address=123);
 121:
                    return yankee;
 123:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=12);
                    if(foxtrot) { _fun65811_ip = 354; continue _fun65811 }
 132:
                    romeo = yankee;
                    options = true;
                    foxtrot = yankee.purchaseResponse;
                    sizing = foxtrot.transactionIdentifier;
                    foxtrot = sizing.toString;
                    kilo = foxtrot.bind(sizing)();
                    foxtrot = yankee.purchaseResponse;
                    backup = foxtrot.transactionDate;
                    foxtrot = {};
                    sizing = yankee.purchaseResponse;
                    sizing = sizing.originalTransactionIdentifier;
                    echo = sizing;
                    update = offset == sizing;
                    sizing = undefined;
                    if(update) { _fun65811_ip = 208; continue _fun65811 }
 196:
                    update = echo;
                    echo = update.toString;
                    sizing = echo.bind(update)();
 208:
                    result = sizing;
                    if(!(offset == sizing)) { _fun65811_ip = 220; continue _fun65811 }
 215:
                    sizing = kilo;
                    _fun65811_ip = 223; continue _fun65811;
 220:
                    sizing = result;
 223:
                    foxtrot['original_transaction_id'] = sizing;
                    sizing = romeo;
                    sizing = sizing.purchaseResponse;
                    sizing = sizing.originalTransactionDate;
                    output = sizing;
                    if(!(offset == sizing)) { _fun65811_ip = 257; continue _fun65811 }
 252:
                    sizing = backup;
                    _fun65811_ip = 260; continue _fun65811;
 257:
                    sizing = output;
 260:
                    foxtrot['original_transaction_date'] = sizing;
                    foxtrot['transaction_id'] = kilo;
                    foxtrot['transaction_date'] = backup;
                    golf = foxtrot;
 282: // try_end0 // try_end1
                    backup = _closure1_slot1;
                    kilo = _closure1_slot3;
                    foxtrot = 25;
                    foxtrot = kilo[foxtrot];
                    sizing = backup.bind(oscar)(foxtrot);
                    kilo = sizing.track;
                    foxtrot = _closure1_slot15;
                    backup = foxtrot.APPLE_PARTNER_IAP_REQUEST_SENT;
                    foxtrot = {};
                    output = verify;
                    foxtrot['request_identifier'] = output;
                    output = options;
                    foxtrot['success'] = output;
                    control = golf;
                    vacuum = foxtrot;
                    output = copyDataProperties(vacuum, control);
                    foxtrot = kilo.bind(sizing)(backup, foxtrot);
                    return romeo;
 354:
                    foxtrot = _closure1_slot1;
                    backup = _closure1_slot3;
                    romeo = 25;
                    romeo = backup[romeo];
                    kilo = foxtrot.bind(oscar)(romeo);
                    backup = kilo.track;
                    romeo = _closure1_slot15;
                    foxtrot = romeo.APPLE_PARTNER_IAP_REQUEST_SENT;
                    romeo = {};
                    sizing = verify;
                    romeo['request_identifier'] = sizing;
                    sizing = options;
                    romeo['success'] = sizing;
                    control = golf;
                    vacuum = romeo;
                    sizing = copyDataProperties(vacuum, control);
                    romeo = backup.bind(kilo)(foxtrot, romeo);
                    return yankee;
 426:
                    romeo = _closure1_slot1;
                    foxtrot = _closure1_slot3;
                    yankee = 25;
                    yankee = foxtrot[yankee];
                    foxtrot = romeo.bind(oscar)(yankee);
                    romeo = foxtrot.track;
                    tango = _closure1_slot15;
                    yankee = tango.APPLE_PARTNER_IAP_REQUEST_SENT;
                    tango = {};
                    backup = verify;
                    tango['request_identifier'] = backup;
                    backup = options;
                    tango['success'] = backup;
                    control = golf;
                    vacuum = tango;
                    backup = copyDataProperties(vacuum, control);
                    tango = romeo.bind(foxtrot)(yankee, tango);
                    return zulu;
 498: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=3);
                    mike = tango;
                    zulu = {};
                    tango = tango.code;
                    report = tango;
                    offset = offset == tango;
                    tango = undefined;
                    if(offset) { _fun65811_ip = 534; continue _fun65811 }
 522:
                    offset = report;
                    report = offset.toString;
                    tango = report.bind(offset)();
 534:
                    zulu['error_code'] = tango;
                    report = _closure1_slot2;
                    offset = _closure1_slot3;
                    tango = 31;
                    tango = offset[tango];
                    report = report.bind(oscar)(tango);
                    tango = report.getUnderlyingIOSError;
                    tango = tango.bind(report)(mike);
                    zulu['error_message'] = tango;
                    golf = zulu;
                    throw mike;
 583: // try_end2 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    report = _closure1_slot1;
                    offset = _closure1_slot3;
                    tango = 25;
                    tango = offset[tango];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.track;
                    zulu = _closure1_slot15;
                    tango = zulu.APPLE_PARTNER_IAP_REQUEST_SENT;
                    zulu = {};
                    zulu['request_identifier'] = verify;
                    zulu['success'] = options;
                    control = golf;
                    vacuum = zulu;
                    golf = copyDataProperties(vacuum, control);
                    zulu = report.bind(oscar)(tango, zulu);
                    throw mike;
 653:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot33 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot33 = entity;
    report = function() { // Original name: getIAPJWTRequestData
        entity = undefined;
        tango = _closure1_slot35;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot34 = report;
    entity = function() { // Original name: _getIAPJWTRequestData
        report = undefined;
        entity = undefined;
        tango = _closure1_slot7;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun65815: for(var _fun65815_ip = 0; ; ) switch(_fun65815_ip) {
 0:
                    StartGenerator();
                    report = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun65815_ip = 193; continue _fun65815 }
 15:
                    var _closure4_slot0 = report;
                    zulu = _closure1_slot1;
                    offset = _closure1_slot3;
                    mike = 32;
                    mike = offset[mike];
                    verify = undefined;
                    tango = zulu.bind(verify)(mike);
                    zulu = tango.post;
                    mike = {};
                    options = _closure1_slot17;
                    options = options.BILLING_CREATE_APPLE_IAP_JWT_TOKEN;
                    mike['url'] = options;
                    mike['body'] = report;
                    report = true;
                    mike['oldFormErrors'] = report;
                    report = {};
                    options = _closure1_slot0;
                    golf = 33;
                    golf = offset[golf];
                    golf = options.bind(verify)(golf);
                    golf = golf.NetworkActionNames;
                    golf = golf.APPLE_JWT_TOKEN_CREATE;
                    report['event'] = golf;
                    oscar = function(argFoo) { // Original name: properties
                        _fun65816: for(var _fun65816_ip = 0; ; ) switch(_fun65816_ip) {
 0:
                            golf = argFoo;
                            entity = _closure4_slot0;
                            tango = entity.operation;
                            report = _closure1_slot0;
                            zulu = _closure1_slot3;
                            oscar = 34;
                            zulu = zulu[oscar];
                            verify = undefined;
                            zulu = report.bind(verify)(zulu);
                            zulu = zulu.APBRequestOperations;
                            zulu = zulu.CREATE;
                            if(!(tango !== zulu)) { _fun65816_ip = 175; continue _fun65816 }
 57:
                            zulu = _closure4_slot0;
                            tango = zulu.operation;
                            report = _closure1_slot0;
                            zulu = _closure1_slot3;
                            zulu = zulu[oscar];
                            zulu = report.bind(verify)(zulu);
                            zulu = zulu.APBRequestOperations;
                            zulu = zulu.CHARGE;
                            if(!(tango !== zulu)) { _fun65816_ip = 121; continue _fun65816 }
 100:
                            zulu = {};
                            yankee = _closure4_slot0;
                            romeo = zulu;
                            tango = copyDataProperties(romeo, yankee);
                            tango = zulu;
                            _fun65816_ip = 248; continue _fun65816;
 121:
                            zulu = {};
                            options = _closure4_slot0;
                            report = options.sku_id;
                            zulu['sku_id'] = report;
                            report = options.country_code;
                            zulu['request_country_code'] = report;
                            oscar = _closure1_slot6;
                            report = _closure1_slot5;
                            yankee = oscar.bind(verify)(options, report);
                            romeo = zulu;
                            report = copyDataProperties(romeo, yankee);
                            tango = zulu;
                            _fun65816_ip = 248; continue _fun65816;
 175:
                            oscar = _closure4_slot0;
                            offset = oscar.items;
                            report = oscar.country_code;
                            zulu = _closure1_slot6;
                            mike = _closure1_slot4;
                            yankee = zulu.bind(verify)(oscar, mike);
                            mike = {};
                            oscar = global;
                            options = oscar.JSON;
                            oscar = options.stringify;
                            oscar = oscar.bind(options)(offset);
                            mike['subscription_items_json_string'] = oscar;
                            mike['request_country_code'] = report;
                            romeo = mike;
                            zulu = copyDataProperties(romeo, yankee);
                            tango = mike;
 248:
                            mike = _closure1_slot0;
                            zulu = _closure1_slot3;
                            entity = 35;
                            entity = zulu[entity];
                            zulu = mike.bind(verify)(entity);
                            mike = zulu.exact;
                            entity = {};
                            report = null;
                            options = report == golf;
                            oscar = undefined;
                            if(options) { _fun65816_ip = 307; continue _fun65816 }
 287:
                            golf = golf.body;
                            options = report == golf;
                            oscar = undefined;
                            if(options) { _fun65816_ip = 307; continue _fun65816 }
 301:
                            oscar = golf.request_data;
 307:
                            golf = report != oscar;
                            report = '';
                            if(!golf) { _fun65816_ip = 321; continue _fun65816 }
 318:
                            report = oscar;
 321:
                            oscar = report.length;
                            report = 0;
                            report = oscar > report;
                            entity['jwt_token_exists'] = report;
                            romeo = entity;
                            yankee = tango;
                            tango = copyDataProperties(romeo, yankee);
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        }
                    };
                    report['properties'] = oscar;
                    mike['trackedActionData'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=144);
 142:
                    return mike;
 144:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun65815_ip = 190; continue _fun65815 }
 150:
                    zulu = {};
                    tango = global;
                    oscar = tango.JSON;
                    report = oscar.stringify;
                    tango = mike.body;
                    tango = tango.request_data;
                    tango = report.bind(oscar)(tango);
                    zulu['requestJSONString'] = tango;
                    return zulu;
 190:
                    return mike;
 193:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot35 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot35 = entity;
    tango = function() { // Original name: updateAppleSubscription
        entity = undefined;
        tango = _closure1_slot37;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot36 = tango;
    entity = function() { // Original name: _updateAppleSubscription
        report = undefined;
        entity = undefined;
        tango = _closure1_slot7;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun65820: for(var _fun65820_ip = 0; ; ) switch(_fun65820_ip) {
 0:
                    StartGenerator();
                    oscar = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun65820_ip = 167; continue _fun65820 }
 15:
                    var _closure4_slot0 = oscar;
                    tango = _closure1_slot1;
                    offset = _closure1_slot3;
                    mike = 32;
                    mike = offset[mike];
                    zulu = undefined;
                    report = tango.bind(zulu)(mike);
                    tango = report.patch;
                    mike = {};
                    romeo = _closure1_slot17;
                    yankee = romeo.BILLING_APPLE_SUBSCRIPTION;
                    verify = oscar.subscription_id;
                    verify = yankee.bind(romeo)(verify);
                    mike['url'] = verify;
                    mike['body'] = oscar;
                    oscar = true;
                    mike['oldFormErrors'] = oscar;
                    oscar = {};
                    verify = _closure1_slot0;
                    options = 33;
                    options = offset[options];
                    options = verify.bind(zulu)(options);
                    options = options.NetworkActionNames;
                    options = options.APPLE_JWT_TOKEN_CREATE;
                    oscar['event'] = options;
                    golf = function(argFoo) { // Original name: properties
                        _fun65821: for(var _fun65821_ip = 0; ; ) switch(_fun65821_ip) {
 0:
                            golf = argFoo;
                            tango = {};
                            offset = _closure4_slot0;
                            yankee = tango;
                            entity = copyDataProperties(yankee, offset);
                            mike = _closure1_slot0;
                            zulu = _closure1_slot3;
                            entity = 35;
                            entity = zulu[entity];
                            verify = undefined;
                            zulu = mike.bind(verify)(entity);
                            mike = zulu.exact;
                            entity = {};
                            report = null;
                            options = report == golf;
                            oscar = undefined;
                            if(options) { _fun65821_ip = 83; continue _fun65821 }
 63:
                            golf = golf.body;
                            options = report == golf;
                            oscar = undefined;
                            if(options) { _fun65821_ip = 83; continue _fun65821 }
 77:
                            oscar = golf.request_data;
 83:
                            golf = report != oscar;
                            report = '';
                            if(!golf) { _fun65821_ip = 97; continue _fun65821 }
 94:
                            report = oscar;
 97:
                            oscar = report.length;
                            report = 0;
                            report = oscar > report;
                            entity['jwt_token_exists'] = report;
                            yankee = entity;
                            offset = tango;
                            tango = copyDataProperties(yankee, offset);
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        }
                    };
                    oscar['properties'] = golf;
                    mike['trackedActionData'] = oscar;
                    oscar = false;
                    mike['rejectWithError'] = oscar;
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=155);
 153:
                    return mike;
 155:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun65820_ip = 164; continue _fun65820 }
 161:
                    return zulu;
 164:
                    return mike;
 167:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot37 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot37 = entity;
    entity = function() { // Original name: _cancelGenericSubscription
        report = undefined;
        entity = undefined;
        tango = _closure1_slot7;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun65824: for(var _fun65824_ip = 0; ; ) switch(_fun65824_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun65824_ip = 300; continue _fun65824 }
 10:
                    verify = argFoo;
                    oscar = argBar;
                    mike = undefined;
                    options = undefined;
                    tango = _closure1_slot31;
                    tango = tango.bind(mike)();
                    if(!tango) { _fun65824_ip = 297; continue _fun65824 }
 37:
                    golf = _closure1_slot0;
                    tango = _closure1_slot3;
                    report = 36;
                    report = tango[report];
                    report = golf.bind(mike)(report);
                    report = report.ProductIds;
                    yankee = report.GENERIC_SUBSCRIPTION;
                    options = yankee;
                    report = _closure1_slot1;
                    golf = 18;
                    tango = tango[golf];
                    offset = report.bind(mike)(tango);
                    report = offset.dispatch;
                    tango = {};
                    romeo = 'IAP_PURCHASE_PRODUCT_START';
                    tango['type'] = romeo;
                    tango['productIdentifier'] = yankee;
                    tango = report.bind(offset)(tango);
 115: // try_start_0
                    report = _closure1_slot36;
                    tango = {};
                    yankee = _closure1_slot0;
                    romeo = _closure1_slot3;
                    offset = 34;
                    offset = romeo[offset];
                    offset = yankee.bind(mike)(offset);
                    offset = offset.APBRequestOperations;
                    offset = offset.CANCEL;
                    tango['operation'] = offset;
                    tango['request_identifier'] = verify;
                    tango['subscription_id'] = oscar;
                    tango = report.bind(mike)(tango);
                    SaveGenerator(address=177);
 175:
                    return tango;
 177:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun65824_ip = 232; continue _fun65824 }
 183:
                    oscar = _closure1_slot1;
                    report = _closure1_slot3;
                    report = report[golf];
                    verify = oscar.bind(mike)(report);
                    oscar = verify.dispatch;
                    report = {};
                    offset = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                    report['type'] = offset;
                    offset = options;
                    report['productIdentifier'] = offset;
                    report = oscar.bind(verify)(report);
 230: // try_end0
                    _fun65824_ip = 297; continue _fun65824;
 232:
                    return tango;
 235: // catch_target0
                    CatchBlockStart(arg_register=4);
                    oscar = _closure1_slot1;
                    tango = _closure1_slot3;
                    tango = tango[golf];
                    golf = oscar.bind(mike)(tango);
                    oscar = golf.dispatch;
                    tango = {};
                    verify = 'IAP_PURCHASE_PRODUCT_FAILURE';
                    tango['type'] = verify;
                    tango['productIdentifier'] = options;
                    tango = oscar.bind(golf)(tango);
                    tango = _closure1_slot30;
                    zulu = 'partner_subscription';
                    zulu = tango.bind(mike)(report, zulu);
 297:
                    return mike;
 300:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot38 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot38 = entity;
    entity = function(argFoo) { // Original name: isValidCurrency
        entity = global;
        zulu = entity.Object;
        mike = zulu.values;
        entity = _closure1_slot16;
        zulu = mike.bind(zulu)(entity);
        mike = zulu.includes;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot39 = entity;
    entity = function() { // Original name: _createGenericSubscription
        report = undefined;
        entity = undefined;
        tango = _closure1_slot7;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun65828: for(var _fun65828_ip = 0; ; ) switch(_fun65828_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun65828_ip = 616; continue _fun65828 }
 13:
                    oscar = mike.requestIdentifier;
                    offset = mike.items;
                    romeo = mike.currency;
                    yankee = mike.countryCode;
                    zulu = undefined;
                    verify = undefined;
                    foxtrot = undefined;
                    SaveGenerator(address=47);
 45:
                    return zulu;
 47:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun65828_ip = 613; continue _fun65828 }
 56:
                    report = _closure1_slot31;
                    report = report.bind(zulu)();
                    if(!report) { _fun65828_ip = 610; continue _fun65828 }
 73:
                    options = _closure1_slot0;
                    report = _closure1_slot3;
                    golf = 36;
                    golf = report[golf];
                    golf = options.bind(zulu)(golf);
                    golf = golf.ProductIds;
                    kilo = golf.GENERIC_SUBSCRIPTION;
                    verify = kilo;
                    golf = _closure1_slot1;
                    options = 18;
                    report = report[options];
                    backup = golf.bind(zulu)(report);
                    golf = backup.dispatch;
                    report = {};
                    sizing = 'IAP_PURCHASE_PRODUCT_START';
                    report['type'] = sizing;
                    report['productIdentifier'] = kilo;
                    report = golf.bind(backup)(report);
 151: // try_start_0
                    golf = _closure1_slot39;
                    report = romeo;
                    report = golf.bind(zulu)(report);
                    if(report) { _fun65828_ip = 228; continue _fun65828 }
 166:
                    report = global;
                    backup = report.Error;
                    sizing = romeo;
                    report = report.HermesInternal;
                    kilo = report.concat;
                    golf = "Unable to create subscription with invalid currency '";
                    report = "' ";
                    echo = kilo.bind(golf)(sizing, report);
                    golf = backup.prototype;
                    golf = Object.create(golf, {constructor: {value: backup}});
                    update = golf;
                    report = new update[backup](echo, result);
                    report = report instanceof Object ? report : golf;
                    throw report;
 228:
                    golf = _closure1_slot34;
                    report = {};
                    kilo = _closure1_slot0;
                    sizing = _closure1_slot3;
                    backup = 34;
                    backup = sizing[backup];
                    backup = kilo.bind(zulu)(backup);
                    backup = backup.APBRequestOperations;
                    backup = backup.CREATE;
                    report['operation'] = backup;
                    backup = oscar;
                    report['request_identifier'] = backup;
                    kilo = offset;
                    backup = kilo.map;
                    offset = function(argFoo) {
                        mike = argFoo;
                        entity = {};
                        zulu = mike.planId;
                        entity['plan_id'] = zulu;
                        mike = mike.quantity;
                        entity['quantity'] = mike;
                        return entity;
                    };
                    offset = backup.bind(kilo)(offset);
                    report['items'] = offset;
                    offset = romeo;
                    report['currency'] = offset;
                    offset = yankee;
                    report['country_code'] = offset;
                    report = golf.bind(zulu)(report);
                    SaveGenerator(address=331);
 329:
                    return report;
 331:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golf) { _fun65828_ip = 545; continue _fun65828 }
 340:
                    backup = report.requestJSONString;
                    offset = _closure1_slot32;
                    golf = oscar;
                    oscar = verify;
                    oscar = offset.bind(zulu)(golf, backup, oscar);
                    SaveGenerator(address=367);
 365:
                    return oscar;
 367:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(golf) { _fun65828_ip = 542; continue _fun65828 }
 376:
                    backup = oscar.purchaseResponse;
                    foxtrot = oscar.originalPurchase;
                    offset = _closure1_slot26;
                    golf = {};
                    backup = backup.transactionReceipt;
                    golf['encodedReceipt'] = backup;
                    backup = _closure1_slot21;
                    golf['retries'] = backup;
                    golf['presentmentCurrency'] = romeo;
                    golf['appStoreRegion'] = yankee;
                    golf = offset.bind(zulu)(golf);
                    SaveGenerator(address=433);
 431:
                    return golf;
 433:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                    if(offset) { _fun65828_ip = 539; continue _fun65828 }
 439:
                    yankee = _closure1_slot0;
                    romeo = _closure1_slot3;
                    offset = 21;
                    offset = romeo[offset];
                    romeo = yankee.bind(zulu)(offset);
                    yankee = romeo.finishTransaction;
                    offset = {};
                    offset['purchase'] = foxtrot;
                    offset = yankee.bind(romeo)(offset);
                    SaveGenerator(address=481);
 479:
                    return offset;
 481:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(yankee) { _fun65828_ip = 536; continue _fun65828 }
 487:
                    romeo = _closure1_slot1;
                    yankee = _closure1_slot3;
                    yankee = yankee[options];
                    foxtrot = romeo.bind(zulu)(yankee);
                    romeo = foxtrot.dispatch;
                    yankee = {};
                    backup = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                    yankee['type'] = backup;
                    backup = verify;
                    yankee['productIdentifier'] = backup;
                    yankee = romeo.bind(foxtrot)(yankee);
 534: // try_end0
                    _fun65828_ip = 610; continue _fun65828;
 536:
                    return offset;
 539:
                    return golf;
 542:
                    return oscar;
 545:
                    return report;
 548: // catch_target0
                    CatchBlockStart(arg_register=5);
                    golf = _closure1_slot1;
                    report = _closure1_slot3;
                    report = report[options];
                    options = golf.bind(zulu)(report);
                    golf = options.dispatch;
                    report = {};
                    offset = 'IAP_PURCHASE_PRODUCT_FAILURE';
                    report['type'] = offset;
                    report['productIdentifier'] = verify;
                    report = golf.bind(options)(report);
                    report = _closure1_slot30;
                    tango = 'partner_subscription';
                    tango = report.bind(zulu)(oscar, tango);
 610:
                    return zulu;
 613:
                    return mike;
 616:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot40 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot40 = entity;
    entity = function() { // Original name: _resubscribeGenericSubscription
        report = undefined;
        entity = undefined;
        tango = _closure1_slot7;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun65832: for(var _fun65832_ip = 0; ; ) switch(_fun65832_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun65832_ip = 574; continue _fun65832 }
 13:
                    oscar = mike.requestIdentifier;
                    offset = mike.subscriptionId;
                    report = argBar;
                    zulu = undefined;
                    verify = undefined;
                    yankee = undefined;
                    foxtrot = undefined;
                    SaveGenerator(address=40);
 38:
                    return zulu;
 40:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun65832_ip = 571; continue _fun65832 }
 49:
                    golf = _closure1_slot31;
                    golf = golf.bind(zulu)();
                    if(!golf) { _fun65832_ip = 568; continue _fun65832 }
 66:
                    romeo = _closure1_slot0;
                    backup = _closure1_slot3;
                    golf = 36;
                    golf = backup[golf];
                    golf = romeo.bind(zulu)(golf);
                    golf = golf.ProductIds;
                    output = golf.GENERIC_SUBSCRIPTION;
                    verify = output;
                    kilo = _closure1_slot1;
                    options = 18;
                    golf = backup[options];
                    sizing = kilo.bind(zulu)(golf);
                    kilo = sizing.dispatch;
                    golf = {};
                    result = 'IAP_PURCHASE_PRODUCT_START';
                    golf['type'] = result;
                    golf['productIdentifier'] = output;
                    golf = kilo.bind(sizing)(golf);
                    golf = 37;
                    golf = backup[golf];
                    romeo = romeo.bind(zulu)(golf);
                    golf = romeo.enableReactivateAPI;
                    golf = golf.bind(romeo)();
                    backup = _closure1_slot0;
                    kilo = _closure1_slot3;
                    romeo = 34;
                    romeo = kilo[romeo];
                    romeo = backup.bind(zulu)(romeo);
                    romeo = romeo.APBRequestOperations;
                    if(golf) { _fun65832_ip = 203; continue _fun65832 }
 195:
                    golf = romeo.RESUBSCRIBE;
                    _fun65832_ip = 209; continue _fun65832;
 203:
                    golf = romeo.REACTIVATE;
 209:
                    yankee = golf;
 212: // try_start_0
                    if(report) { _fun65832_ip = 266; continue _fun65832 }
 215:
                    golf = _closure1_slot36;
                    report = {};
                    romeo = yankee;
                    report['operation'] = romeo;
                    romeo = oscar;
                    report['request_identifier'] = romeo;
                    romeo = offset;
                    report['subscription_id'] = romeo;
                    report = golf.bind(zulu)(report);
                    SaveGenerator(address=254);
 252:
                    return report;
 254:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(!golf) { _fun65832_ip = 445; continue _fun65832 }
 263: // try_end0
                    return report;
 266: // try_start_1
                    golf = _closure1_slot34;
                    report = {};
                    report['operation'] = yankee;
                    yankee = oscar;
                    report['request_identifier'] = yankee;
                    report['subscription_id'] = offset;
                    report = golf.bind(zulu)(report);
                    SaveGenerator(address=299);
 297:
                    return report;
 299:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golf) { _fun65832_ip = 503; continue _fun65832 }
 308:
                    yankee = report.requestJSONString;
                    offset = _closure1_slot32;
                    golf = oscar;
                    oscar = verify;
                    oscar = offset.bind(zulu)(golf, yankee, oscar);
                    SaveGenerator(address=335);
 333:
                    return oscar;
 335:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(golf) { _fun65832_ip = 500; continue _fun65832 }
 344:
                    yankee = oscar.purchaseResponse;
                    foxtrot = oscar.originalPurchase;
                    offset = _closure1_slot26;
                    golf = {};
                    yankee = yankee.transactionReceipt;
                    golf['encodedReceipt'] = yankee;
                    yankee = _closure1_slot21;
                    golf['retries'] = yankee;
                    golf = offset.bind(zulu)(golf);
                    SaveGenerator(address=391);
 389:
                    return golf;
 391:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                    if(offset) { _fun65832_ip = 497; continue _fun65832 }
 397:
                    yankee = _closure1_slot0;
                    romeo = _closure1_slot3;
                    offset = 21;
                    offset = romeo[offset];
                    romeo = yankee.bind(zulu)(offset);
                    yankee = romeo.finishTransaction;
                    offset = {};
                    offset['purchase'] = foxtrot;
                    offset = yankee.bind(romeo)(offset);
                    SaveGenerator(address=439);
 437:
                    return offset;
 439:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(yankee) { _fun65832_ip = 494; continue _fun65832 }
 445:
                    romeo = _closure1_slot1;
                    yankee = _closure1_slot3;
                    yankee = yankee[options];
                    foxtrot = romeo.bind(zulu)(yankee);
                    romeo = foxtrot.dispatch;
                    yankee = {};
                    backup = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                    yankee['type'] = backup;
                    backup = verify;
                    yankee['productIdentifier'] = backup;
                    yankee = romeo.bind(foxtrot)(yankee);
 492: // try_end1
                    _fun65832_ip = 568; continue _fun65832;
 494:
                    return offset;
 497:
                    return golf;
 500:
                    return oscar;
 503:
                    return report;
 506: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=5);
                    golf = _closure1_slot1;
                    report = _closure1_slot3;
                    report = report[options];
                    options = golf.bind(zulu)(report);
                    golf = options.dispatch;
                    report = {};
                    offset = 'IAP_PURCHASE_PRODUCT_FAILURE';
                    report['type'] = offset;
                    report['productIdentifier'] = verify;
                    report = golf.bind(options)(report);
                    report = _closure1_slot30;
                    tango = 'partner_subscription';
                    tango = report.bind(zulu)(oscar, tango);
 568:
                    return zulu;
 571:
                    return mike;
 574:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot41 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot41 = entity;
    entity = function() { // Original name: _mobilePurchaseSKU
        report = undefined;
        entity = undefined;
        tango = _closure1_slot7;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun65835: for(var _fun65835_ip = 0; ; ) switch(_fun65835_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tango) { _fun65835_ip = 1020; continue _fun65835 }
 13:
                    foxtrot = mike.requestIdentifier;
                    options = mike.skuId;
                    output = mike.currency;
                    golf = mike.countryCode;
                    source = mike.analyticsLocations;
                    control = mike.analyticsLoadId;
                    romeo = argBar;
                    oscar = undefined;
                    sizing = undefined;
                    echo = undefined;
                    verify = undefined;
                    SaveGenerator(address=64);
 62:
                    return oscar;
 64:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun65835_ip = 1017; continue _fun65835 }
 73:
                    offset = _closure1_slot31;
                    offset = offset.bind(oscar)();
                    if(offset) { _fun65835_ip = 92; continue _fun65835 }
 87:
                    offset = false;
                    return offset;
 92:
                    backup = _closure1_slot0;
                    kilo = _closure1_slot3;
                    offset = 36;
                    offset = kilo[offset];
                    offset = backup.bind(oscar)(offset);
                    offset = offset.ProductIds;
                    vacuum = offset.GENERIC_CONSUMABLE;
                    sizing = vacuum;
                    result = _closure1_slot1;
                    offset = 18;
                    yankee = kilo[offset];
                    update = result.bind(oscar)(yankee);
                    result = update.dispatch;
                    yankee = {};
                    sequence = 'IAP_PURCHASE_PRODUCT_START';
                    yankee['type'] = sequence;
                    yankee['productIdentifier'] = vacuum;
                    yankee = result.bind(update)(yankee);
                    yankee = 38;
                    yankee = kilo[yankee];
                    kilo = backup.bind(oscar)(yankee);
                    backup = kilo.trackPaymentFlowStartedAnalyticsAndCTP;
                    yankee = {};
                    result = options;
                    yankee['sku_id'] = result;
                    result = control;
                    yankee['load_id'] = result;
                    result = source;
                    yankee['location_stack'] = result;
                    result = _closure1_slot18;
                    result = result.APPLE_PARTNER;
                    yankee['payment_gateway'] = result;
                    yankee = backup.bind(kilo)(yankee);
 234: // try_start_0
                    backup = _closure1_slot39;
                    yankee = output;
                    yankee = backup.bind(oscar)(yankee);
                    if(yankee) { _fun65835_ip = 311; continue _fun65835 }
 249:
                    yankee = global;
                    kilo = yankee.Error;
                    update = output;
                    yankee = yankee.HermesInternal;
                    result = yankee.concat;
                    backup = "Unable to create subscription with invalid currency '";
                    yankee = "' ";
                    context = result.bind(backup)(update, yankee);
                    backup = kilo.prototype;
                    backup = Object.create(backup, {constructor: {value: kilo}});
                    papa = backup;
                    yankee = new papa[kilo](context, record);
                    yankee = yankee instanceof Object ? yankee : backup;
                    throw yankee;
 311:
                    backup = _closure1_slot34;
                    yankee = {};
                    result = _closure1_slot0;
                    update = _closure1_slot3;
                    kilo = 34;
                    kilo = update[kilo];
                    kilo = result.bind(oscar)(kilo);
                    kilo = kilo.APBRequestOperations;
                    kilo = kilo.CHARGE;
                    yankee['operation'] = kilo;
                    kilo = options;
                    yankee['sku_id'] = kilo;
                    kilo = foxtrot;
                    yankee['request_identifier'] = kilo;
                    kilo = output;
                    yankee['currency'] = kilo;
                    kilo = golf;
                    yankee['country_code'] = kilo;
                    yankee = backup.bind(oscar)(yankee);
                    SaveGenerator(address=395);
 393:
                    return yankee;
 395:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=13);
                    if(backup) { _fun65835_ip = 686; continue _fun65835 }
 404:
                    result = yankee.requestJSONString;
                    kilo = _closure1_slot32;
                    backup = foxtrot;
                    foxtrot = sizing;
                    foxtrot = kilo.bind(oscar)(backup, result, foxtrot);
                    SaveGenerator(address=431);
 429:
                    return foxtrot;
 431:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=13);
                    if(backup) { _fun65835_ip = 683; continue _fun65835 }
 440:
                    result = foxtrot.purchaseResponse;
                    echo = foxtrot.originalPurchase;
                    kilo = _closure1_slot26;
                    backup = {};
                    result = result.transactionReceipt;
                    backup['encodedReceipt'] = result;
                    result = _closure1_slot21;
                    backup['retries'] = result;
                    backup['presentmentCurrency'] = output;
                    output = golf;
                    backup['appStoreRegion'] = output;
                    backup = kilo.bind(oscar)(backup);
                    SaveGenerator(address=500);
 498:
                    return backup;
 500:
                    ResumeGenerator(result_out_reg=13, return_bool_out_reg=14);
                    if(kilo) { _fun65835_ip = 680; continue _fun65835 }
 509:
                    output = _closure1_slot0;
                    result = _closure1_slot3;
                    kilo = 21;
                    kilo = result[kilo];
                    result = output.bind(oscar)(kilo);
                    output = result.finishTransaction;
                    kilo = {};
                    kilo['purchase'] = echo;
                    kilo = output.bind(result)(kilo);
                    SaveGenerator(address=551);
 549:
                    return kilo;
 551:
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=16);
                    if(output) { _fun65835_ip = 677; continue _fun65835 }
 557:
                    result = _closure1_slot1;
                    echo = _closure1_slot3;
                    output = echo[offset];
                    vacuum = result.bind(oscar)(output);
                    update = vacuum.dispatch;
                    output = {};
                    sequence = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                    output['type'] = sequence;
                    sequence = sizing;
                    output['productIdentifier'] = sequence;
                    output = update.bind(vacuum)(output);
                    output = 25;
                    output = echo[output];
                    update = result.bind(oscar)(output);
                    echo = update.track;
                    output = _closure1_slot15;
                    result = output.PAYMENT_FLOW_COMPLETED;
                    output = {};
                    vacuum = options;
                    output['sku_id'] = vacuum;
                    output['load_id'] = control;
                    output['location_stack'] = source;
                    source = _closure1_slot18;
                    source = source.APPLE_PARTNER;
                    output['payment_gateway'] = source;
                    output = echo.bind(update)(result, output);
 672: // try_end0
                    output = true;
                    return output;
 677:
                    return kilo;
 680:
                    return backup;
 683:
                    return foxtrot;
 686:
                    return yankee;
 689: // catch_target0
                    CatchBlockStart(arg_register=14);
                    zulu = kilo;
                    foxtrot = _closure1_slot1;
                    yankee = _closure1_slot3;
                    offset = yankee[offset];
                    backup = foxtrot.bind(oscar)(offset);
                    foxtrot = backup.dispatch;
                    offset = {};
                    output = 'IAP_PURCHASE_PRODUCT_FAILURE';
                    offset['type'] = output;
                    offset['productIdentifier'] = sizing;
                    offset = foxtrot.bind(backup)(offset);
                    backup = _closure1_slot0;
                    offset = 39;
                    offset = yankee[offset];
                    offset = backup.bind(oscar)(offset);
                    offset = offset.BillingError;
                    foxtrot = offset.prototype;
                    foxtrot = Object.create(foxtrot, {constructor: {value: offset}});
                    papa = foxtrot;
                    context = kilo;
                    offset = new papa[offset](context, record);
                    offset = offset instanceof Object ? offset : foxtrot;
                    foxtrot = offset.code;
                    offset = 40;
                    yankee = yankee[offset];
                    yankee = backup.bind(oscar)(yankee);
                    yankee = yankee.ErrorCodes;
                    yankee = yankee.BILLING_CANNOT_CHARGE_ZERO_AMOUNT;
                    if(!(foxtrot === yankee)) { _fun65835_ip = 993; continue _fun65835 }
 819:
                    foxtrot = romeo;
                    yankee = null;
                    if(!(yankee == foxtrot)) { _fun65835_ip = 856; continue _fun65835 }
 828:
                    foxtrot = _closure1_slot0;
                    backup = _closure1_slot3;
                    yankee = 41;
                    yankee = backup[yankee];
                    yankee = foxtrot.bind(oscar)(yankee);
                    yankee = yankee.purchaseSKU;
                    _fun65835_ip = 859; continue _fun65835;
 856:
                    yankee = romeo;
 859:
                    verify = yankee;
 862: // try_start_1
                    yankee = verify;
                    verify = options;
                    options = {};
                    options['countryCode'] = golf;
                    golf = 0;
                    options['expectedAmount'] = golf;
                    golf = 'collectibles';
                    golf = yankee.bind(oscar)(golf, verify, options);
                    SaveGenerator(address=899);
 897:
                    return golf;
 899:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(options) { _fun65835_ip = 910; continue _fun65835 }
 905: // try_end1
                    options = true;
                    return options;
 910:
                    return golf;
 913: // catch_target1
                    CatchBlockStart(arg_register=6);
                    report = golf;
                    options = golf.code;
                    verify = _closure1_slot0;
                    golf = _closure1_slot3;
                    golf = golf[offset];
                    golf = verify.bind(oscar)(golf);
                    golf = golf.ErrorCodes;
                    golf = golf.BILLING_PURCHASE_REQUEST_INVALID;
                    if(!(options === golf)) { _fun65835_ip = 993; continue _fun65835 }
 956:
                    options = _closure1_slot0;
                    verify = _closure1_slot3;
                    golf = 14;
                    golf = verify[golf];
                    verify = options.bind(oscar)(golf);
                    options = verify.captureBillingException;
                    golf = report;
                    report = {};
                    report = options.bind(verify)(golf, report);
 993:
                    report = _closure1_slot30;
                    tango = zulu;
                    zulu = 'collectibles';
                    zulu = report.bind(oscar)(tango, zulu);
                    zulu = false;
                    return zulu;
 1017:
                    return mike;
 1020:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot42 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot42 = entity;
    entity = ['items', 'country_code'];
    var _closure1_slot4 = entity;
    entity = ['sku_id', 'country_code'];
    var _closure1_slot5 = entity;
    options = global;
    kilo = options.Object;
    backup = kilo.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = backup.bind(kilo)(zulu, entity, golf);
    entity = 0;
    golf = offset[entity];
    entity = undefined;
    golf = foxtrot.bind(entity)(golf);
    var _closure1_slot6 = golf;
    golf = 1;
    golf = offset[golf];
    golf = foxtrot.bind(entity)(golf);
    var _closure1_slot7 = golf;
    golf = 2;
    golf = offset[golf];
    golf = yankee.bind(entity)(golf);
    golf = 3;
    yankee = offset[golf];
    yankee = foxtrot.bind(entity)(yankee);
    var _closure1_slot8 = yankee;
    yankee = 4;
    yankee = offset[yankee];
    yankee = foxtrot.bind(entity)(yankee);
    var _closure1_slot9 = yankee;
    yankee = 5;
    yankee = offset[yankee];
    yankee = verify.bind(entity)(yankee);
    backup = yankee.setPaymentSuccess;
    var _closure1_slot10 = backup;
    yankee = yankee.showOldPaymentFlowSuccess;
    var _closure1_slot11 = yankee;
    yankee = 6;
    yankee = offset[yankee];
    yankee = foxtrot.bind(entity)(yankee);
    var _closure1_slot12 = yankee;
    yankee = 7;
    yankee = offset[yankee];
    yankee = foxtrot.bind(entity)(yankee);
    var _closure1_slot13 = yankee;
    yankee = 8;
    yankee = offset[yankee];
    yankee = foxtrot.bind(entity)(yankee);
    var _closure1_slot14 = yankee;
    yankee = 9;
    yankee = offset[yankee];
    yankee = verify.bind(entity)(yankee);
    backup = yankee.AnalyticEvents;
    var _closure1_slot15 = backup;
    backup = yankee.CurrencyCodes;
    var _closure1_slot16 = backup;
    backup = yankee.Endpoints;
    var _closure1_slot17 = backup;
    yankee = yankee.StoreKitErrors;
    backup = 10;
    backup = offset[backup];
    backup = verify.bind(entity)(backup);
    backup = backup.PaymentGateways;
    var _closure1_slot18 = backup;
    backup = 11;
    backup = offset[backup];
    backup = verify.bind(entity)(backup);
    backup = backup.jsx;
    var _closure1_slot19 = backup;
    backup = 'localAppleReceiptHash';
    var _closure1_slot20 = backup;
    var _closure1_slot21 = golf;
    golf = 'BILLING';
    var _closure1_slot22 = golf;
    golf = 12;
    golf = offset[golf];
    backup = foxtrot.bind(entity)(golf);
    golf = backup.prototype;
    foxtrot = Object.create(golf, {constructor: {value: backup}});
    result = 'PremiumUtils.tsx';
    echo = foxtrot;
    golf = new echo[backup](result, output);
    golf = golf instanceof Object ? golf : foxtrot;
    var _closure1_slot23 = golf;
    golf = function() { // Original name: log
        entity = undefined;
        return entity;
    };
    var _closure1_slot24 = golf;
    golf = {};
    golf['applyAppleReceipt'] = romeo;
    romeo = 19;
    foxtrot = offset[romeo];
    foxtrot = verify.bind(entity)(foxtrot);
    foxtrot = foxtrot.fetchMostRecentSubscription;
    golf['fetchMostRecentSubscription'] = foxtrot;
    romeo = offset[romeo];
    romeo = verify.bind(entity)(romeo);
    romeo = romeo.fetchIpCountryCode;
    golf['fetchIpCountryCode'] = romeo;
    golf['restoreFromLocalReceipt'] = oscar;
    romeo = function() { // Original name: init
        mike = this;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot7;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun65839: for(var _fun65839_ip = 0; ; ) switch(_fun65839_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun65839_ip = 162; continue _fun65839 }
 10: // try_start_0
                    mike = global;
                    oscar = mike.Promise;
                    report = oscar.all;
                    options = _closure1_slot0;
                    verify = _closure1_slot3;
                    mike = 20;
                    mike = verify[mike];
                    tango = undefined;
                    golf = options.bind(tango)(mike);
                    mike = golf.fetchPremiumSubscriptionPlans;
                    golf = mike.bind(golf)();
                    mike = new Array(3);
                    mike[0] = golf;
                    offset = _closure2_slot0;
                    golf = offset.loadProducts;
                    golf = golf.bind(offset)();
                    mike[1] = golf;
                    golf = 19;
                    golf = verify[golf];
                    options = options.bind(tango)(golf);
                    golf = options.fetchSubscriptions;
                    golf = golf.bind(options)();
                    mike[2] = golf;
                    mike = report.bind(oscar)(mike);
                    SaveGenerator(address=123);
 121:
                    return mike;
 123:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun65839_ip = 152; continue _fun65839 }
 129:
                    zulu = _closure1_slot28;
                    zulu = zulu.bind(tango)();
                    SaveGenerator(address=141);
 139:
                    return zulu;
 141:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun65839_ip = 149; continue _fun65839 }
 147: // try_end0
                    _fun65839_ip = 157; continue _fun65839;
 149:
                    return zulu;
 152:
                    return mike;
 155: // catch_target0
                    CatchBlockStart(arg_register=1);
 157:
                    mike = undefined;
                    return mike;
 162:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    golf['init'] = romeo;
    romeo = function() { // Original name: connectGenericIap
        zulu = _closure1_slot7;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun65842: for(var _fun65842_ip = 0; ; ) switch(_fun65842_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun65842_ip = 202; continue _fun65842 }
 10:
                    tango = _closure1_slot8;
                    zulu = tango.isGenericIapConnected;
                    zulu = zulu.bind(tango)();
 29: // try_start_0
                    tango = _closure1_slot0;
                    report = _closure1_slot3;
                    zulu = 21;
                    zulu = report[zulu];
                    oscar = undefined;
                    tango = tango.bind(oscar)(zulu);
                    zulu = tango.initConnection;
                    zulu = zulu.bind(tango)();
                    SaveGenerator(address=65);
 63:
                    return zulu;
 65:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun65842_ip = 121; continue _fun65842 }
 71:
                    report = _closure1_slot1;
                    golf = _closure1_slot3;
                    tango = 18;
                    tango = golf[tango];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'GENERIC_IAP_INIT_CONNECTION';
                    tango['type'] = golf;
                    tango['connected'] = zulu;
                    tango = report.bind(oscar)(tango);
 118: // try_end0
                    return zulu;
 121:
                    return zulu;
 124: // catch_target0
                    CatchBlockStart(arg_register=6);
                    oscar = _closure1_slot0;
                    report = _closure1_slot3;
                    zulu = 14;
                    zulu = report[zulu];
                    tango = undefined;
                    oscar = oscar.bind(tango)(zulu);
                    zulu = oscar.captureBillingException;
                    zulu = zulu.bind(oscar)(golf);
                    zulu = _closure1_slot1;
                    mike = 18;
                    mike = report[mike];
                    tango = zulu.bind(tango)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    report = 'GENERIC_IAP_INIT_CONNECTION_FAILED';
                    mike['type'] = report;
                    mike = zulu.bind(tango)(mike);
                    mike = false;
                    return mike;
 202:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    golf['connectGenericIap'] = romeo;
    romeo = function() { // Original name: loadGenericProducts
        zulu = _closure1_slot7;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun65845: for(var _fun65845_ip = 0; ; ) switch(_fun65845_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun65845_ip = 151; continue _fun65845 }
 10: // try_start_0
                    tango = _closure1_slot1;
                    report = _closure1_slot3;
                    mike = 15;
                    mike = report[mike];
                    report = undefined;
                    tango = tango.bind(report)(mike);
                    mike = tango.loadGenericProducts;
                    mike = mike.bind(tango)();
                    SaveGenerator(address=49);
 47:
                    return mike;
 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun65845_ip = 105; continue _fun65845 }
 55:
                    tango = _closure1_slot1;
                    oscar = _closure1_slot3;
                    zulu = 18;
                    zulu = oscar[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'IAP_LOAD_GENERIC_PRODUCTS';
                    zulu['type'] = oscar;
                    zulu['products'] = mike;
                    zulu = tango.bind(report)(zulu);
 102: // try_end0
                    return mike;
 105:
                    return mike;
 108: // catch_target0
                    CatchBlockStart(arg_register=3);
                    report = _closure1_slot0;
                    zulu = _closure1_slot3;
                    mike = 14;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = report.bind(mike)(zulu);
                    mike = zulu.captureBillingException;
                    mike = mike.bind(zulu)(tango);
                    mike = null;
                    return mike;
 151:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    golf['loadGenericProducts'] = romeo;
    romeo = function() { // Original name: disconnectGenericIap
        zulu = _closure1_slot7;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun65848: for(var _fun65848_ip = 0; ; ) switch(_fun65848_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun65848_ip = 148; continue _fun65848 }
 10: // try_start_0
                    tango = _closure1_slot0;
                    zulu = _closure1_slot3;
                    mike = 21;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    mike = zulu.endConnection;
                    mike = mike.bind(zulu)();
                    SaveGenerator(address=49);
 47:
                    return mike;
 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun65848_ip = 57; continue _fun65848 }
 55: // try_end0
                    _fun65848_ip = 98; continue _fun65848;
 57:
                    return mike;
 60: // catch_target0
                    CatchBlockStart(arg_register=3);
                    report = _closure1_slot0;
                    zulu = _closure1_slot3;
                    mike = 14;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = report.bind(mike)(zulu);
                    mike = zulu.captureBillingException;
                    mike = mike.bind(zulu)(tango);
 98:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot3;
                    mike = 18;
                    zulu = zulu[mike];
                    mike = undefined;
                    report = tango.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'GENERIC_IAP_END_CONNECTION';
                    zulu['type'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    return mike;
 148:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    golf['disconnectGenericIap'] = romeo;
    romeo = function() { // Original name: loadProducts
        zulu = _closure1_slot7;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun65851: for(var _fun65851_ip = 0; ; ) switch(_fun65851_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun65851_ip = 150; continue _fun65851 }
 10: // try_start_0
                    tango = _closure1_slot1;
                    report = _closure1_slot3;
                    mike = 15;
                    mike = report[mike];
                    report = undefined;
                    tango = tango.bind(report)(mike);
                    mike = tango.loadProducts;
                    mike = mike.bind(tango)();
                    SaveGenerator(address=49);
 47:
                    return mike;
 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun65851_ip = 104; continue _fun65851 }
 55:
                    tango = _closure1_slot1;
                    oscar = _closure1_slot3;
                    zulu = 18;
                    zulu = oscar[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'IAP_LOAD_PRODUCTS';
                    zulu['type'] = oscar;
                    zulu['products'] = mike;
                    zulu = tango.bind(report)(zulu);
 102: // try_end0
                    _fun65851_ip = 145; continue _fun65851;
 104:
                    return mike;
 107: // catch_target0
                    CatchBlockStart(arg_register=3);
                    report = _closure1_slot0;
                    zulu = _closure1_slot3;
                    mike = 14;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = report.bind(mike)(zulu);
                    mike = zulu.captureBillingException;
                    mike = mike.bind(zulu)(tango);
 145:
                    mike = undefined;
                    return mike;
 150:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    golf['loadProducts'] = romeo;
    romeo = function(argFoo) { // Original name: createSubscription
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot7;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun65854: for(var _fun65854_ip = 0; ; ) switch(_fun65854_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun65854_ip = 1514; continue _fun65854 }
 12:
                    mike = undefined;
                    yankee = undefined;
                    backup = undefined;
                    echo = undefined;
                    sizing = undefined;
                    sequence = undefined;
                    target = undefined;
                    foxtrot = undefined;
                    golf = undefined;
                    verify = undefined;
                    romeo = undefined;
                    result = undefined;
                    context = undefined;
                    vacuum = undefined;
                    control = undefined;
                    source = undefined;
                    config = undefined;
                    record = undefined;
                    var _closure4_slot0 = mike;
                    tango = _closure2_slot0;
                    yankee = tango.productId;
                    backup = tango.isGift;
                    echo = tango.giftInfoOptions;
                    sizing = tango.baseAnalyticsData;
                    sequence = tango.applicationId;
                    target = tango.offerId;
                    foxtrot = tango.onPurchaseComplete;
                    golf = tango.onPurchaseError;
                    report = _closure1_slot14;
                    tango = report.isBusy;
                    tango = tango.bind(report)();
                    if(tango) { _fun65854_ip = 1511; continue _fun65854 }
 133:
                    report = _closure1_slot1;
                    options = _closure1_slot3;
                    tango = 22;
                    tango = options[tango];
                    offset = report.bind(mike)(tango);
                    options = offset.getCurrentConfig;
                    report = {};
                    tango = '1ee357_1';
                    report['location'] = tango;
                    tango = {};
                    output = false;
                    tango['autoTrackExposure'] = output;
                    tango = options.bind(offset)(report, tango);
                    options = tango.paymentsBlocked;
                    tango = _closure1_slot1;
                    report = _closure1_slot3;
                    if(options) { _fun65854_ip = 1495; continue _fun65854 }
 206:
                    offset = 18;
                    options = report[offset];
                    update = tango.bind(mike)(options);
                    output = update.dispatch;
                    options = {};
                    papa = 'IAP_PURCHASE_PRODUCT_START';
                    options['type'] = papa;
                    papa = yankee;
                    options['productIdentifier'] = papa;
                    options = output.bind(update)(options);
 248: // try_start_0
                    output = _closure1_slot1;
                    options = _closure1_slot3;
                    papa = 15;
                    options = options[papa];
                    output = output.bind(mike)(options);
                    options = output.canMakePayments;
                    options = options.bind(output)();
                    SaveGenerator(address=282);
 280:
                    return options;
 282:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=16);
                    if(output) { _fun65854_ip = 1414; continue _fun65854 }
 291:
                    update = _closure1_slot13;
                    output = update.hasFetchedSubscriptions;
                    output = output.bind(update)();
                    if(output) { _fun65854_ip = 439; continue _fun65854 }
 311:
                    update = _closure1_slot0;
                    status = _closure1_slot3;
                    output = 19;
                    output = status[output];
                    update = update.bind(mike)(output);
                    output = update.fetchSubscriptions;
                    output = output.bind(update)();
                    SaveGenerator(address=345);
 343:
                    return output;
 345:
                    ResumeGenerator(result_out_reg=16, return_bool_out_reg=19);
                    if(update) { _fun65854_ip = 436; continue _fun65854 }
 351:
                    update = global;
                    sierra = update.Error;
                    whiskey = _closure1_slot0;
                    equality = _closure1_slot3;
                    update = 24;
                    status = equality[update];
                    status = whiskey.bind(mike)(status);
                    lima = status.intl;
                    status = lima.string;
                    update = equality[update];
                    update = whiskey.bind(mike)(update);
                    update = update.t;
                    update = update.PjfUXV;
                    variable37 = status.bind(lima)(update);
                    status = sierra.prototype;
                    status = Object.create(status, {constructor: {value: sierra}});
                    variable38 = status;
                    update = new variable38[sierra](variable37, variable36);
                    update = update instanceof Object ? update : status;
                    throw update;
 436: // try_end0
                    return output;
 439: // try_start_1
                    update = _closure1_slot12;
                    output = update.getCurrentUser;
                    update = output.bind(update)();
                    verify = update;
                    output = null;
                    if(!(output != update)) { _fun65854_ip = 1329; continue _fun65854 }
 464:
                    status = _closure1_slot0;
                    update = _closure1_slot3;
                    update = update[papa];
                    status = status.bind(mike)(update);
                    update = status.convertToUUID;
                    verify = verify.id;
                    romeo = update.bind(status)(verify);
                    result = undefined;
                    verify = target;
                    if(!(output != verify)) { _fun65854_ip = 618; continue _fun65854 }
 506:
                    sierra = yankee;
                    status = target;
                    update = romeo;
                    verify = function() { // Original name: getTrialOfferSignature
                        entity = undefined;
                        tango = _closure1_slot27;
                        zulu = tango.apply;
                        entity = arguments;
                        mike = entity;
                        entity = this;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    verify = verify.bind(mike)(sierra, status, update);
                    SaveGenerator(address=533);
 531:
                    return verify;
 533:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=19);
                    if(update) { _fun65854_ip = 1326; continue _fun65854 }
 542:
                    context = verify;
                    if(!(output != verify)) { _fun65854_ip = 618; continue _fun65854 }
 549:
                    update = {};
                    update['identifier'] = target;
                    target = context.key_id;
                    update['keyIdentifier'] = target;
                    target = context.nonce;
                    update['nonce'] = target;
                    target = context.signature;
                    update['signature'] = target;
                    target = global;
                    target = target.Number;
                    context = context.timestamp;
                    context = target.bind(mike)(context);
                    update['timestamp'] = context;
                    result = update;
 618:
                    context = _closure1_slot1;
                    update = _closure1_slot3;
                    update = update[papa];
                    papa = context.bind(mike)(update);
                    context = papa.purchaseProduct;
                    update = yankee;
                    romeo = context.bind(papa)(update, result, romeo);
                    SaveGenerator(address=655);
 653:
                    return romeo;
 655:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=17);
                    if(result) { _fun65854_ip = 1323; continue _fun65854 }
 664:
                    vacuum = romeo;
                    update = _closure1_slot1;
                    result = _closure1_slot3;
                    context = 17;
                    context = result[context];
                    target = update.bind(mike)(context);
                    papa = target.v3;
                    context = romeo.transactionReceipt;
                    papa = papa.bind(target)(context);
                    control = papa;
                    result = result[offset];
                    context = update.bind(mike)(result);
                    update = context.dispatch;
                    result = {};
                    target = 'GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION';
                    result['type'] = target;
                    result['key'] = papa;
                    papa = {};
                    variable36 = echo;
                    variable37 = papa;
                    target = copyDataProperties(variable37, variable36);
                    result['giftOptions'] = papa;
                    result = update.bind(context)(result);
                    result = foxtrot;
                    if(!(output != result)) { _fun65854_ip = 770; continue _fun65854 }
 766:
                    foxtrot = foxtrot.bind(mike)();
 770:
                    update = _closure1_slot14;
                    result = update.getProduct;
                    foxtrot = yankee;
                    foxtrot = result.bind(update)(foxtrot);
                    source = foxtrot;
                    result = output == foxtrot;
                    foxtrot = undefined;
                    if(result) { _fun65854_ip = 809; continue _fun65854 }
 800:
                    result = source;
                    foxtrot = result.price;
 809:
                    config = foxtrot;
                    foxtrot = source;
                    foxtrot = output == foxtrot;
                    update = undefined;
                    if(foxtrot) { _fun65854_ip = 833; continue _fun65854 }
 824:
                    foxtrot = source;
                    update = foxtrot.currencyCode;
 833:
                    record = update;
                    result = _closure1_slot26;
                    foxtrot = {};
                    vacuum = vacuum.transactionReceipt;
                    foxtrot['encodedReceipt'] = vacuum;
                    vacuum = _closure1_slot21;
                    foxtrot['retries'] = vacuum;
                    foxtrot['presentmentCurrency'] = update;
                    update = config;
                    foxtrot['presentmentAmount'] = update;
                    update = source;
                    vacuum = output == update;
                    update = undefined;
                    if(vacuum) { _fun65854_ip = 893; continue _fun65854 }
 887:
                    update = source.countryCode;
 893:
                    foxtrot['appStoreRegion'] = update;
                    foxtrot['giftInfoOptions'] = echo;
                    foxtrot = result.bind(mike)(foxtrot);
                    SaveGenerator(address=912);
 910:
                    return foxtrot;
 912:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=17);
                    if(result) { _fun65854_ip = 1320; continue _fun65854 }
 921:
                    result = _closure1_slot10;
                    result = result.bind(mike)();
                    echo = _closure1_slot1;
                    vacuum = _closure1_slot3;
                    result = vacuum[offset];
                    source = echo.bind(mike)(result);
                    update = source.dispatch;
                    result = {};
                    context = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                    result['type'] = context;
                    result['key'] = control;
                    result = update.bind(source)(result);
                    result = 25;
                    result = vacuum[result];
                    update = echo.bind(mike)(result);
                    echo = update.track;
                    result = _closure1_slot15;
                    result = result.PAYMENT_FLOW_COMPLETED;
                    control = _closure1_slot0;
                    source = 26;
                    source = vacuum[source];
                    vacuum = control.bind(mike)(source);
                    control = vacuum.getPaymentFlowCompletedAnalyticsFields;
                    source = sizing;
                    sizing = {};
                    context = yankee;
                    sizing['subscription_plan_gateway_plan_id'] = context;
                    sizing['price'] = config;
                    sizing['regular_price'] = config;
                    config = record;
                    context = output == config;
                    config = undefined;
                    if(context) { _fun65854_ip = 1069; continue _fun65854 }
 1056:
                    context = record;
                    record = context.toLowerCase;
                    config = record.bind(context)();
 1069:
                    sizing['currency'] = config;
                    sizing['application_id'] = sequence;
                    sizing = control.bind(vacuum)(source, sizing);
                    sizing = echo.bind(update)(result, sizing);
                    result = _closure1_slot1;
                    sizing = _closure1_slot3;
                    sizing = sizing[offset];
                    echo = result.bind(mike)(sizing);
                    result = echo.dispatch;
                    sizing = {};
                    update = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                    sizing['type'] = update;
                    update = yankee;
                    sizing['productIdentifier'] = update;
                    sizing = result.bind(echo)(sizing);
                    if(backup) { _fun65854_ip = 1315; continue _fun65854 }
 1144:
                    sizing = _closure1_slot0;
                    result = _closure1_slot3;
                    backup = 19;
                    backup = result[backup];
                    sizing = sizing.bind(mike)(backup);
                    backup = sizing.fetchSubscriptions;
                    backup = backup.bind(sizing)();
                    SaveGenerator(address=1178);
 1176:
                    return backup;
 1178:
                    ResumeGenerator(result_out_reg=13, return_bool_out_reg=15);
                    if(sizing) { _fun65854_ip = 1312; continue _fun65854 }
 1187:
                    result = _closure1_slot13;
                    sizing = result.getPremiumSubscription;
                    sizing = sizing.bind(result)();
                    _closure4_slot0 = sizing;
                    if(!(output != sizing)) { _fun65854_ip = 1227; continue _fun65854 }
 1209:
                    sizing = _closure1_slot11;
                    kilo = function() {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot3;
                        entity = 27;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.openLazy;
                        mike = {};
                        report = function() { // Original name: importer
                            zulu = _closure1_slot0;
                            entity = _closure1_slot3;
                            mike = 29;
                            mike = entity[mike];
                            tango = undefined;
                            zulu = zulu.bind(tango)(mike);
                            mike = 28;
                            mike = entity[mike];
                            entity = entity.paths;
                            zulu = zulu.bind(tango)(mike, entity);
                            mike = zulu.then;
                            entity = function(argFoo) {
                                mike = argFoo;
                                mike = mike.default;
                                var _closure7_slot0 = mike;
                                entity = function(argFoo) {
                                    tango = _closure1_slot19;
                                    zulu = _closure7_slot0;
                                    mike = {};
                                    oscar = argFoo;
                                    golf = mike;
                                    entity = copyDataProperties(golf, oscar);
                                    report = _closure4_slot0;
                                    entity = 'subscription';
                                    mike[entity] = report;
                                    entity = undefined;
                                    entity = tango.bind(entity)(zulu, mike);
                                    return entity;
                                };
                                return entity;
                            };
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        mike['importer'] = report;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    kilo = sizing.bind(mike)(kilo);
                    _fun65854_ip = 1315; continue _fun65854;
 1227:
                    kilo = global;
                    output = kilo.Error;
                    echo = _closure1_slot0;
                    update = _closure1_slot3;
                    kilo = 24;
                    sizing = update[kilo];
                    sizing = echo.bind(mike)(sizing);
                    result = sizing.intl;
                    sizing = result.string;
                    kilo = update[kilo];
                    kilo = echo.bind(mike)(kilo);
                    kilo = kilo.t;
                    kilo = kilo.PjfUXV;
                    variable37 = sizing.bind(result)(kilo);
                    sizing = output.prototype;
                    sizing = Object.create(sizing, {constructor: {value: output}});
                    variable38 = sizing;
                    kilo = new variable38[output](variable37, variable36);
                    kilo = kilo instanceof Object ? kilo : sizing;
                    throw kilo;
 1312: // try_end1
                    return backup;
 1315:
                    _fun65854_ip = 1511; continue _fun65854;
 1320:
                    return foxtrot;
 1323:
                    return romeo;
 1326:
                    return verify;
 1329: // try_start_2
                    verify = global;
                    foxtrot = verify.Error;
                    kilo = _closure1_slot0;
                    sizing = _closure1_slot3;
                    verify = 24;
                    romeo = sizing[verify];
                    romeo = kilo.bind(mike)(romeo);
                    backup = romeo.intl;
                    romeo = backup.string;
                    verify = sizing[verify];
                    verify = kilo.bind(mike)(verify);
                    verify = verify.t;
                    verify = verify.PjfUXV;
                    variable37 = romeo.bind(backup)(verify);
                    romeo = foxtrot.prototype;
                    romeo = Object.create(romeo, {constructor: {value: foxtrot}});
                    variable38 = romeo;
                    verify = new variable38[foxtrot](variable37, variable36);
                    verify = verify instanceof Object ? verify : romeo;
                    throw verify;
 1414: // try_end2
                    return options;
 1417: // catch_target0 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=2);
                    verify = _closure1_slot1;
                    options = _closure1_slot3;
                    options = options[offset];
                    offset = verify.bind(mike)(options);
                    verify = offset.dispatch;
                    options = {};
                    romeo = 'IAP_PURCHASE_PRODUCT_FAILURE';
                    options['type'] = romeo;
                    options['productIdentifier'] = yankee;
                    options = verify.bind(offset)(options);
                    verify = golf;
                    options = null;
                    if(!(options != verify)) { _fun65854_ip = 1476; continue _fun65854 }
 1472:
                    golf = golf.bind(mike)();
 1476:
                    golf = _closure1_slot30;
                    oscar = zulu;
                    zulu = 'subscription';
                    zulu = golf.bind(mike)(oscar, zulu);
                    _fun65854_ip = 1511; continue _fun65854;
 1495:
                    zulu = 23;
                    zulu = report[zulu];
                    zulu = tango.bind(mike)(zulu);
                    zulu = zulu.bind(mike)();
 1511:
                    return mike;
 1514:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    golf['createSubscription'] = romeo;
    romeo = function() { // Original name: backgroundRestoreReceipt
        mike = this;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot7;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun65862: for(var _fun65862_ip = 0; ; ) switch(_fun65862_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun65862_ip = 411; continue _fun65862 }
 10:
                    tango = _closure1_slot14;
                    mike = tango.isBusy;
                    mike = mike.bind(tango)();
                    if(mike) { _fun65862_ip = 406; continue _fun65862 }
 33:
                    tango = _closure1_slot1;
                    mike = _closure1_slot3;
                    oscar = 18;
                    mike = mike[oscar];
                    report = undefined;
                    golf = tango.bind(report)(mike);
                    tango = golf.dispatch;
                    mike = {};
                    options = 'IAP_RESTORE_PURCHASES_START';
                    mike['type'] = options;
                    mike = tango.bind(golf)(mike);
 77: // try_start_0 // try_start_1
                    tango = _closure2_slot0;
                    mike = tango.loadProducts;
                    mike = mike.bind(tango)();
                    SaveGenerator(address=98);
 96:
                    return mike;
 98:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun65862_ip = 257; continue _fun65862 }
 107:
                    tango = _closure1_slot28;
                    tango = tango.bind(report)();
                    SaveGenerator(address=119);
 117:
                    return tango;
 119:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golf) { _fun65862_ip = 215; continue _fun65862 }
 125:
                    if(!tango) { _fun65862_ip = 168; continue _fun65862 }
 128:
                    options = _closure1_slot0;
                    verify = _closure1_slot3;
                    golf = 19;
                    golf = verify[golf];
                    options = options.bind(report)(golf);
                    golf = options.fetchSubscriptions;
                    golf = golf.bind(options)();
                    SaveGenerator(address=162);
 160:
                    return golf;
 162:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(options) { _fun65862_ip = 173; continue _fun65862 }
 168: // try_end0
                    _fun65862_ip = 322; continue _fun65862;
 173: // try_end1
                    verify = _closure1_slot1;
                    options = _closure1_slot3;
                    options = options[oscar];
                    offset = verify.bind(report)(options);
                    verify = offset.dispatch;
                    options = {};
                    yankee = 'IAP_RESTORE_PURCHASES_END';
                    options['type'] = yankee;
                    options = verify.bind(offset)(options);
                    return golf;
 215:
                    options = _closure1_slot1;
                    golf = _closure1_slot3;
                    golf = golf[oscar];
                    verify = options.bind(report)(golf);
                    options = verify.dispatch;
                    golf = {};
                    offset = 'IAP_RESTORE_PURCHASES_END';
                    golf['type'] = offset;
                    golf = options.bind(verify)(golf);
                    return tango;
 257:
                    golf = _closure1_slot1;
                    tango = _closure1_slot3;
                    tango = tango[oscar];
                    options = golf.bind(report)(tango);
                    golf = options.dispatch;
                    tango = {};
                    verify = 'IAP_RESTORE_PURCHASES_END';
                    tango['type'] = verify;
                    tango = golf.bind(options)(tango);
                    return mike;
 299: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=1);
                    golf = _closure1_slot23;
                    tango = golf.verbose;
                    mike = 'Unable to restore apple receipts';
                    mike = tango.bind(golf)(mike);
 322: // try_end2
                    tango = _closure1_slot1;
                    mike = _closure1_slot3;
                    mike = mike[oscar];
                    golf = tango.bind(report)(mike);
                    tango = golf.dispatch;
                    mike = {};
                    options = 'IAP_RESTORE_PURCHASES_END';
                    mike['type'] = options;
                    mike = tango.bind(golf)(mike);
                    _fun65862_ip = 406; continue _fun65862;
 363: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot3;
                    zulu = zulu[oscar];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'IAP_RESTORE_PURCHASES_END';
                    zulu['type'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    throw mike;
 406:
                    mike = undefined;
                    return mike;
 411:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    golf['backgroundRestoreReceipt'] = romeo;
    romeo = function() { // Original name: restoreSubscription
        mike = this;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot7;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun65865: for(var _fun65865_ip = 0; ; ) switch(_fun65865_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun65865_ip = 1002; continue _fun65865 }
 12:
                    mike = undefined;
                    verify = undefined;
                    report = _closure1_slot14;
                    zulu = report.isBusy;
                    zulu = zulu.bind(report)();
                    if(zulu) { _fun65865_ip = 999; continue _fun65865 }
 39:
                    report = _closure1_slot1;
                    zulu = _closure1_slot3;
                    oscar = 18;
                    zulu = zulu[oscar];
                    golf = report.bind(mike)(zulu);
                    report = golf.dispatch;
                    zulu = {};
                    offset = 'IAP_RESTORE_PURCHASES_START';
                    zulu['type'] = offset;
                    zulu = report.bind(golf)(zulu);
 81: // try_start_0 // try_start_2
                    report = _closure2_slot0;
                    zulu = report.loadProducts;
                    zulu = zulu.bind(report)();
                    SaveGenerator(address=102);
 100:
                    return zulu;
 102:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun65865_ip = 735; continue _fun65865 }
 111:
                    report = _closure1_slot28;
                    report = report.bind(mike)();
                    SaveGenerator(address=123);
 121:
                    return report;
 123:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golf) { _fun65865_ip = 693; continue _fun65865 }
 132:
                    offset = _closure1_slot1;
                    yankee = _closure1_slot3;
                    golf = 15;
                    golf = yankee[golf];
                    offset = offset.bind(mike)(golf);
                    golf = offset.restorePurchases;
                    golf = golf.bind(offset)();
                    SaveGenerator(address=166);
 164:
                    return golf;
 166:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                    if(offset) { _fun65865_ip = 651; continue _fun65865 }
 175:
                    verify = golf;
                    yankee = golf.length;
                    offset = 0;
                    if(!(offset !== yankee)) { _fun65865_ip = 510; continue _fun65865 }
 192:
                    yankee = _closure1_slot1;
                    romeo = _closure1_slot3;
                    offset = 30;
                    offset = romeo[offset];
                    offset = yankee.bind(mike)(offset);
                    yankee = offset.bind(mike)(verify);
                    offset = yankee.uniqBy;
                    verify = function(argFoo) {
                        entity = argFoo;
                        entity = entity.originalTransactionIdentifier;
                        return entity;
                    };
                    offset = offset.bind(yankee)(verify);
                    verify = offset.value;
                    offset = verify.bind(offset)();
                    verify = offset.map;
                    options = function(argFoo) {
                        _fun65867: for(var _fun65867_ip = 0; ; ) switch(_fun65867_ip) {
 0:
                            report = argFoo;
                            oscar = _closure1_slot14;
                            tango = oscar.getProduct;
                            zulu = report.productIdentifier;
                            options = tango.bind(oscar)(zulu);
                            oscar = _closure1_slot1;
                            tango = _closure1_slot3;
                            zulu = 17;
                            zulu = tango[zulu];
                            tango = undefined;
                            golf = oscar.bind(tango)(zulu);
                            oscar = golf.v3;
                            zulu = report.transactionReceipt;
                            golf = oscar.bind(golf)(zulu);
                            var _closure5_slot0 = golf;
                            oscar = _closure1_slot9;
                            zulu = oscar.getGiftOptionsForKey;
                            golf = zulu.bind(oscar)(golf);
                            zulu = _closure1_slot26;
                            mike = {};
                            report = report.transactionReceipt;
                            mike['encodedReceipt'] = report;
                            oscar = null;
                            verify = oscar == options;
                            report = undefined;
                            if(verify) { _fun65867_ip = 121; continue _fun65867 }
 115:
                            report = options.currencyCode;
 121:
                            mike['presentmentCurrency'] = report;
                            verify = oscar == options;
                            report = undefined;
                            if(verify) { _fun65867_ip = 141; continue _fun65867 }
 135:
                            report = options.price;
 141:
                            mike['presentmentAmount'] = report;
                            verify = oscar == options;
                            report = undefined;
                            if(verify) { _fun65867_ip = 161; continue _fun65867 }
 155:
                            report = options.countryCode;
 161:
                            mike['appStoreRegion'] = report;
                            report = {};
                            verify = oscar == golf;
                            options = undefined;
                            if(verify) { _fun65867_ip = 183; continue _fun65867 }
 177:
                            options = golf.gift_style;
 183:
                            report['gift_style'] = options;
                            options = oscar == golf;
                            oscar = undefined;
                            if(options) { _fun65867_ip = 203; continue _fun65867 }
 197:
                            oscar = golf.reward_sku_ids;
 203:
                            report['reward_sku_ids'] = oscar;
                            mike['giftInfoOptions'] = report;
                            zulu = zulu.bind(tango)(mike);
                            mike = zulu.then;
                            entity = function() {
                                zulu = _closure1_slot1;
                                mike = _closure1_slot3;
                                entity = 18;
                                mike = mike[entity];
                                entity = undefined;
                                tango = zulu.bind(entity)(mike);
                                zulu = tango.dispatch;
                                mike = {};
                                report = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                                mike['type'] = report;
                                report = _closure5_slot0;
                                mike['key'] = report;
                                mike = zulu.bind(tango)(mike);
                                return entity;
                            };
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        }
                    };
                    offset = verify.bind(offset)(options);
                    options = global;
                    verify = options.Promise;
                    options = verify.all;
                    options = options.bind(verify)(offset);
                    SaveGenerator(address=284);
 282:
                    return options;
 284:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(verify) { _fun65865_ip = 468; continue _fun65865 }
 293:
                    offset = _closure1_slot0;
                    yankee = _closure1_slot3;
                    verify = 19;
                    verify = yankee[verify];
                    offset = offset.bind(mike)(verify);
                    verify = offset.fetchSubscriptions;
                    verify = verify.bind(offset)();
                    SaveGenerator(address=327);
 325:
                    return verify;
 327:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=9);
                    if(offset) { _fun65865_ip = 426; continue _fun65865 }
 333:
                    yankee = _closure1_slot1;
                    output = _closure1_slot3;
                    offset = 27;
                    offset = output[offset];
                    romeo = yankee.bind(mike)(offset);
                    yankee = romeo.show;
                    offset = {};
                    sizing = _closure1_slot0;
                    foxtrot = 24;
                    backup = output[foxtrot];
                    backup = sizing.bind(mike)(backup);
                    kilo = backup.intl;
                    backup = kilo.string;
                    foxtrot = output[foxtrot];
                    foxtrot = sizing.bind(mike)(foxtrot);
                    foxtrot = foxtrot.t;
                    foxtrot = foxtrot.pnRpIS;
                    foxtrot = backup.bind(kilo)(foxtrot);
                    offset['body'] = foxtrot;
                    offset = yankee.bind(romeo)(offset);
                    _fun65865_ip = 646; continue _fun65865;
 426: // try_end0 // try_end2
                    yankee = _closure1_slot1;
                    offset = _closure1_slot3;
                    offset = offset[oscar];
                    romeo = yankee.bind(mike)(offset);
                    yankee = romeo.dispatch;
                    offset = {};
                    foxtrot = 'IAP_RESTORE_PURCHASES_END';
                    offset['type'] = foxtrot;
                    offset = yankee.bind(romeo)(offset);
                    return verify;
 468:
                    offset = _closure1_slot1;
                    verify = _closure1_slot3;
                    verify = verify[oscar];
                    yankee = offset.bind(mike)(verify);
                    offset = yankee.dispatch;
                    verify = {};
                    romeo = 'IAP_RESTORE_PURCHASES_END';
                    verify['type'] = romeo;
                    verify = offset.bind(yankee)(verify);
                    return options;
 510: // try_start_1 // try_start_3
                    verify = _closure1_slot1;
                    kilo = _closure1_slot3;
                    options = 27;
                    options = kilo[options];
                    offset = verify.bind(mike)(options);
                    verify = offset.show;
                    options = {};
                    backup = _closure1_slot0;
                    yankee = 24;
                    romeo = kilo[yankee];
                    romeo = backup.bind(mike)(romeo);
                    sizing = romeo.intl;
                    foxtrot = sizing.string;
                    romeo = kilo[yankee];
                    romeo = backup.bind(mike)(romeo);
                    romeo = romeo.t;
                    romeo = romeo.WXkaoK;
                    romeo = foxtrot.bind(sizing)(romeo);
                    options['title'] = romeo;
                    romeo = kilo[yankee];
                    romeo = backup.bind(mike)(romeo);
                    foxtrot = romeo.intl;
                    romeo = foxtrot.string;
                    yankee = kilo[yankee];
                    yankee = backup.bind(mike)(yankee);
                    yankee = yankee.t;
                    yankee = yankee.YW7lqa;
                    yankee = romeo.bind(foxtrot)(yankee);
                    options['body'] = yankee;
                    options = verify.bind(offset)(options);
 646: // try_end1
                    _fun65865_ip = 915; continue _fun65865;
 651: // try_end3
                    verify = _closure1_slot1;
                    options = _closure1_slot3;
                    options = options[oscar];
                    offset = verify.bind(mike)(options);
                    verify = offset.dispatch;
                    options = {};
                    yankee = 'IAP_RESTORE_PURCHASES_END';
                    options['type'] = yankee;
                    options = verify.bind(offset)(options);
                    return golf;
 693:
                    options = _closure1_slot1;
                    golf = _closure1_slot3;
                    golf = golf[oscar];
                    verify = options.bind(mike)(golf);
                    options = verify.dispatch;
                    golf = {};
                    offset = 'IAP_RESTORE_PURCHASES_END';
                    golf['type'] = offset;
                    golf = options.bind(verify)(golf);
                    return report;
 735:
                    golf = _closure1_slot1;
                    report = _closure1_slot3;
                    report = report[oscar];
                    options = golf.bind(mike)(report);
                    golf = options.dispatch;
                    report = {};
                    verify = 'IAP_RESTORE_PURCHASES_END';
                    report['type'] = verify;
                    report = golf.bind(options)(report);
                    return zulu;
 777: // try_start_4 // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=2);
                    report = _closure1_slot1;
                    romeo = _closure1_slot3;
                    zulu = 27;
                    zulu = romeo[zulu];
                    golf = report.bind(mike)(zulu);
                    report = golf.show;
                    zulu = {};
                    yankee = _closure1_slot0;
                    options = 24;
                    verify = romeo[options];
                    verify = yankee.bind(mike)(verify);
                    foxtrot = verify.intl;
                    offset = foxtrot.string;
                    verify = romeo[options];
                    verify = yankee.bind(mike)(verify);
                    verify = verify.t;
                    verify = verify.POsVOj;
                    verify = offset.bind(foxtrot)(verify);
                    zulu['title'] = verify;
                    verify = romeo[options];
                    verify = yankee.bind(mike)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    options = romeo[options];
                    options = yankee.bind(mike)(options);
                    options = options.t;
                    options = options.XbE/Ex;
                    options = verify.bind(offset)(options);
                    zulu['body'] = options;
                    zulu = report.bind(golf)(zulu);
 915: // try_end4
                    report = _closure1_slot1;
                    zulu = _closure1_slot3;
                    zulu = zulu[oscar];
                    golf = report.bind(mike)(zulu);
                    report = golf.dispatch;
                    zulu = {};
                    options = 'IAP_RESTORE_PURCHASES_END';
                    zulu['type'] = options;
                    zulu = report.bind(golf)(zulu);
                    _fun65865_ip = 999; continue _fun65865;
 956: // catch_target2 // catch_target3 // catch_target4
                    CatchBlockStart(arg_register=2);
                    report = _closure1_slot1;
                    tango = _closure1_slot3;
                    tango = tango[oscar];
                    oscar = report.bind(mike)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'IAP_RESTORE_PURCHASES_END';
                    tango['type'] = golf;
                    tango = report.bind(oscar)(tango);
                    throw zulu;
 999:
                    return mike;
 1002:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    golf['restoreSubscription'] = romeo;
    romeo = options.Set;
    options = 21;
    options = offset[options];
    options = verify.bind(entity)(options);
    options = options.ErrorCode;
    foxtrot = options.E_USER_CANCELLED;
    options = new Array(2);
    options[0] = foxtrot;
    yankee = yankee.PAYMENT_CANCELED;
    options[1] = yankee;
    yankee = romeo.prototype;
    yankee = Object.create(yankee, {constructor: {value: romeo}});
    echo = yankee;
    result = options;
    options = new echo[romeo](result, output);
    options = options instanceof Object ? options : yankee;
    var _closure1_slot25 = options;
    options = 42;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'actions/native/BillingActionCreators.tsx';
    options = verify.bind(offset)(options);
    zulu['default'] = golf;
    zulu['restoreFromLocalReceipt'] = oscar;
    zulu['getIAPJWTRequestData'] = report;
    zulu['updateAppleSubscription'] = tango;
    tango = function() { // Original name: cancelGenericSubscription
        entity = undefined;
        tango = _closure1_slot38;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['cancelGenericSubscription'] = tango;
    tango = function() { // Original name: createGenericSubscription
        entity = undefined;
        tango = _closure1_slot40;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['createGenericSubscription'] = tango;
    tango = function() { // Original name: resubscribeGenericSubscription
        entity = undefined;
        tango = _closure1_slot41;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['resubscribeGenericSubscription'] = tango;
    mike = function() { // Original name: mobilePurchaseSKU
        entity = undefined;
        tango = _closure1_slot42;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['mobilePurchaseSKU'] = mike;
    return entity;
})();