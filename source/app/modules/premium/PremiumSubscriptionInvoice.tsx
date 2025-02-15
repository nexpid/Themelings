// app/modules/premium/PremiumSubscriptionInvoice.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    verify = argBar;
    yankee = argBaz;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = offset;
    golf = function() { // Original name: createSubscriptionInvoicePreview
        entity = undefined;
        tango = _closure1_slot14;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot13 = golf;
    entity = function() { // Original name: _createSubscriptionInvoicePreview
        report = undefined;
        entity = undefined;
        tango = _closure1_slot6;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00002_ip = 350; continue _fun00001 }
 13:
                    backup = mike.items;
                    foxtrot = mike.paymentSourceId;
                    romeo = mike.trialId;
                    yankee = mike.code;
                    tango = mike.applyEntitlements;
                    oscar = undefined;
                    if(!(tango === oscar)) { _fun00002_ip = 50; continue _fun00001 }
 48:
                    tango = false;
 50:
                    offset = tango;
                    verify = mike.currency;
                    golf = mike.renewal;
                    report = mike.metadata;
                    options = undefined;
                    SaveGenerator(address=77);
 75:
                    return oscar;
 77:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00002_ip = 347; continue _fun00001 }
 86:
                    tango = {};
                    sizing = _closure1_slot0;
                    output = _closure1_slot2;
                    kilo = 6;
                    kilo = output[kilo];
                    output = sizing.bind(oscar)(kilo);
                    sizing = output.coerceExistingItemsToNewItemInterval;
                    kilo = backup;
                    sizing = sizing.bind(output)(kilo);
                    backup = sizing;
                    kilo = sizing.map;
                    backup = function(argFoo) {
                        tango = argFoo;
                        zulu = tango.planId;
                        entity = null;
                        mike = Object.create(entity);
                        entity = 0;
                        mike['planId'] = entity;
                        golf = {};
                        oscar = tango;
                        report = mike;
                        oscar = copyDataProperties(golf, oscar, report);
                        entity = {};
                        golf = entity;
                        mike = copyDataProperties(golf, oscar);
                        mike = 'plan_id';
                        entity[mike] = zulu;
                        return entity;
                    };
                    backup = kilo.bind(sizing)(backup);
                    tango['items'] = backup;
                    tango['payment_source_id'] = foxtrot;
                    tango['trial_id'] = romeo;
                    tango['code'] = yankee;
                    tango['apply_entitlements'] = offset;
                    tango['currency'] = verify;
                    tango['renewal'] = golf;
                    tango['metadata'] = report;
                    options = tango;
 189: // try_start_0
                    report = _closure1_slot0;
                    golf = _closure1_slot2;
                    tango = 7;
                    tango = golf[tango];
                    tango = report.bind(oscar)(tango);
                    golf = tango.HTTP;
                    report = golf.post;
                    tango = {};
                    verify = _closure1_slot12;
                    verify = verify.BILLING_SUBSCRIPTIONS_PREVIEW;
                    tango['url'] = verify;
                    tango['body'] = options;
                    options = true;
                    tango['oldFormErrors'] = options;
                    options = false;
                    tango['rejectWithError'] = options;
                    tango = report.bind(golf)(tango);
                    SaveGenerator(address=262);
 260:
                    return tango;
 262:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 291; continue _fun00001 }
 268:
                    options = _closure1_slot11;
                    golf = options.createInvoiceFromServer;
                    report = tango.body;
                    report = golf.bind(options)(report);
 288: // try_end0
                    return report;
 291:
                    return tango;
 294: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tango = _closure1_slot0;
                    golf = _closure1_slot2;
                    zulu = 8;
                    zulu = golf[zulu];
                    zulu = tango.bind(oscar)(zulu);
                    zulu = zulu.BillingError;
                    tango = zulu.prototype;
                    tango = Object.create(tango, {constructor: {value: zulu}});
                    echo = tango;
                    result = report;
                    zulu = new echo[zulu](result, output);
                    zulu = zulu instanceof Object ? zulu : tango;
                    throw zulu;
 347:
                    return mike;
 350:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
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
    oscar = function() { // Original name: updateSubscriptionInvoicePreview
        entity = undefined;
        tango = _closure1_slot16;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot15 = oscar;
    entity = function() { // Original name: _updateSubscriptionInvoicePreview
        report = undefined;
        entity = undefined;
        tango = _closure1_slot6;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00004_ip = 388; continue _fun00003 }
 13:
                    verify = mike.subscriptionId;
                    sizing = mike.items;
                    foxtrot = mike.paymentSourceId;
                    romeo = mike.renewal;
                    report = mike.currency;
                    backup = mike.applyEntitlements;
                    oscar = undefined;
                    if(!(backup === oscar)) { _fun00004_ip = 57; continue _fun00003 }
 55:
                    backup = false;
 57:
                    golf = backup;
                    offset = mike.analyticsLocations;
                    yankee = mike.analyticsLocation;
                    tango = mike.userDiscountOfferId;
                    options = undefined;
                    SaveGenerator(address=86);
 84:
                    return oscar;
 86:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00004_ip = 385; continue _fun00003 }
 95:
                    backup = null;
                    output = sizing;
                    if(!(backup != output)) { _fun00004_ip = 138; continue _fun00003 }
 104:
                    kilo = _closure1_slot0;
                    result = _closure1_slot2;
                    zulu = 6;
                    zulu = result[zulu];
                    kilo = kilo.bind(oscar)(zulu);
                    zulu = kilo.coerceExistingItemsToNewItemInterval;
                    output = zulu.bind(kilo)(sizing);
 138:
                    zulu = {};
                    kilo = backup == output;
                    backup = undefined;
                    if(kilo) { _fun00004_ip = 168; continue _fun00003 }
 149:
                    sizing = output.map;
                    kilo = function(argFoo) {
                        tango = argFoo;
                        zulu = tango.planId;
                        entity = null;
                        mike = Object.create(entity);
                        entity = 0;
                        mike['planId'] = entity;
                        golf = {};
                        oscar = tango;
                        report = mike;
                        oscar = copyDataProperties(golf, oscar, report);
                        entity = {};
                        golf = entity;
                        mike = copyDataProperties(golf, oscar);
                        mike = 'plan_id';
                        entity[mike] = zulu;
                        return entity;
                    };
                    backup = sizing.bind(output)(kilo);
 168:
                    zulu['items'] = backup;
                    zulu['payment_source_id'] = foxtrot;
                    zulu['renewal'] = romeo;
                    zulu['apply_entitlements'] = golf;
                    zulu['currency'] = report;
                    zulu['user_discount_offer_id'] = tango;
                    options = zulu;
 201: // try_start_0
                    report = _closure1_slot0;
                    golf = _closure1_slot2;
                    zulu = 7;
                    zulu = golf[zulu];
                    zulu = report.bind(oscar)(zulu);
                    golf = zulu.HTTP;
                    report = golf.patch;
                    zulu = {};
                    foxtrot = _closure1_slot12;
                    romeo = foxtrot.BILLING_SUBSCRIPTION_PREVIEW;
                    verify = romeo.bind(foxtrot)(verify);
                    zulu['url'] = verify;
                    verify = {};
                    verify['location'] = yankee;
                    verify['location_stack'] = offset;
                    zulu['query'] = verify;
                    zulu['body'] = options;
                    options = true;
                    zulu['oldFormErrors'] = options;
                    options = false;
                    zulu['rejectWithError'] = options;
                    zulu = report.bind(golf)(zulu);
                    SaveGenerator(address=297);
 295:
                    return zulu;
 297:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00004_ip = 326; continue _fun00003 }
 303:
                    golf = _closure1_slot11;
                    report = golf.createInvoiceFromServer;
                    tango = zulu.body;
                    tango = report.bind(golf)(tango);
 323: // try_end0
                    return tango;
 326:
                    return zulu;
 329: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tango = _closure1_slot0;
                    golf = _closure1_slot2;
                    zulu = 8;
                    zulu = golf[zulu];
                    zulu = tango.bind(oscar)(zulu);
                    zulu = zulu.BillingError;
                    tango = zulu.prototype;
                    tango = Object.create(tango, {constructor: {value: zulu}});
                    update = tango;
                    echo = report;
                    zulu = new update[zulu](echo, result);
                    zulu = zulu instanceof Object ? zulu : tango;
                    throw zulu;
 385:
                    return mike;
 388:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
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
    report = function() { // Original name: createOneTimePurchaseInvoicePreview
        entity = undefined;
        tango = _closure1_slot18;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot17 = report;
    entity = function() { // Original name: _createOneTimePurchaseInvoicePreview
        report = undefined;
        entity = undefined;
        tango = _closure1_slot6;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00006_ip = 284; continue _fun00005 }
 13:
                    foxtrot = mike.paymentSourceId;
                    options = mike.skuId;
                    romeo = mike.subscriptionPlanId;
                    yankee = mike.currency;
                    offset = mike.loadId;
                    oscar = undefined;
                    SaveGenerator(address=49);
 47:
                    return oscar;
 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00006_ip = 281; continue _fun00005 }
 58:
                    report = _closure1_slot1;
                    golf = _closure1_slot2;
                    tango = 9;
                    tango = golf[tango];
                    golf = report.bind(oscar)(tango);
                    report = options;
                    tango = 'SKU ID is missing for one time purchase gift invoice preview';
                    tango = golf.bind(oscar)(report, tango);
 96: // try_start_0
                    report = _closure1_slot0;
                    golf = _closure1_slot2;
                    tango = 10;
                    tango = golf[tango];
                    golf = report.bind(oscar)(tango);
                    report = golf.httpGetWithCountryCodeQuery;
                    tango = {};
                    backup = _closure1_slot12;
                    verify = backup.STORE_SKU_PURCHASE;
                    options = verify.bind(backup)(options);
                    tango['url'] = options;
                    verify = {};
                    options = true;
                    verify['gift'] = options;
                    verify['payment_source_id'] = foxtrot;
                    verify['sku_subscription_plan_id'] = romeo;
                    verify['currency'] = yankee;
                    verify['load_id'] = offset;
                    tango['query'] = verify;
                    tango['oldFormErrors'] = options;
                    options = false;
                    tango['rejectWithError'] = options;
                    tango = report.bind(golf)(tango);
                    SaveGenerator(address=196);
 194:
                    return tango;
 196:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 225; continue _fun00005 }
 202:
                    options = _closure1_slot11;
                    golf = options.createInvoiceFromServer;
                    report = tango.body;
                    report = golf.bind(options)(report);
 222: // try_end0
                    return report;
 225:
                    return tango;
 228: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tango = _closure1_slot0;
                    golf = _closure1_slot2;
                    zulu = 8;
                    zulu = golf[zulu];
                    zulu = tango.bind(oscar)(zulu);
                    zulu = zulu.BillingError;
                    tango = zulu.prototype;
                    tango = Object.create(tango, {constructor: {value: zulu}});
                    output = tango;
                    sizing = report;
                    zulu = new output[zulu](sizing, kilo);
                    zulu = zulu instanceof Object ? zulu : tango;
                    throw zulu;
 281:
                    return mike;
 284:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot18 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot18 = entity;
    tango = function() { // Original name: getSubscriptionInvoice
        entity = undefined;
        tango = _closure1_slot20;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot19 = tango;
    entity = function() { // Original name: _getSubscriptionInvoice
        report = undefined;
        entity = undefined;
        tango = _closure1_slot6;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00008_ip = 153; continue _fun00007 }
 13:
                    verify = mike.subscriptionId;
                    zulu = mike.preventFetch;
                    oscar = undefined;
                    SaveGenerator(address=31);
 29:
                    return oscar;
 31:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00008_ip = 150; continue _fun00007 }
 37:
                    if(zulu) { _fun00008_ip = 145; continue _fun00007 }
 40:
                    report = _closure1_slot0;
                    golf = _closure1_slot2;
                    zulu = 7;
                    zulu = golf[zulu];
                    zulu = report.bind(oscar)(zulu);
                    oscar = zulu.HTTP;
                    report = oscar.get;
                    zulu = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    options = _closure1_slot12;
                    golf = options.BILLING_SUBSCRIPTION_INVOICE;
                    golf = golf.bind(options)(verify);
                    zulu['url'] = golf;
                    zulu = report.bind(oscar)(zulu);
                    SaveGenerator(address=113);
 111:
                    return zulu;
 113:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00008_ip = 142; continue _fun00007 }
 119:
                    oscar = _closure1_slot11;
                    report = oscar.createInvoiceFromServer;
                    tango = zulu.body;
                    tango = report.bind(oscar)(tango);
                    return tango;
 142:
                    return zulu;
 145:
                    zulu = null;
                    return zulu;
 150:
                    return mike;
 153:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot20 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo, argBar) { // Original name: useGenericSubscriptionInvoicePreview
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            golf = argBar;
            mike = argFoo;
            options = mike.preventFetch;
            oscar = undefined;
            if(!(options === oscar)) { _fun00010_ip = 22; continue _fun00009 }
 20:
            options = false;
 22:
            var _closure2_slot0 = options;
            var _closure2_slot1 = golf;
            var _closure2_slot2 = oscar;
            var _closure2_slot3 = oscar;
            mike = _closure1_slot9;
            offset = null;
            zulu = mike.bind(oscar)(offset);
            mike = _closure1_slot5;
            yankee = 2;
            report = mike.bind(oscar)(zulu, yankee);
            mike = 0;
            zulu = report[mike];
            verify = 1;
            report = report[verify];
            _closure2_slot2 = report;
            report = _closure1_slot9;
            offset = report.bind(oscar)(offset);
            report = _closure1_slot5;
            report = report.bind(oscar)(offset, yankee);
            mike = report[mike];
            report = report[verify];
            _closure2_slot3 = report;
            report = _closure1_slot8;
            tango = new Array(2);
            tango[0] = options;
            tango[1] = golf;
            entity = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    mike = function() { // Original name: _loadPreview
                        tango = undefined;
                        entity = undefined;
                        zulu = _closure1_slot6;
                        mike = function* () {
                            entity = function* () { // Original name: ?anon_0_
                                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(mike) { _fun00014_ip = 106; continue _fun00013 }
 7:
                                    mike = undefined;
                                    report = undefined;
 11: // try_start_0
                                    tango = _closure2_slot3;
                                    golf = null;
                                    tango = tango.bind(mike)(golf);
                                    tango = _closure2_slot2;
                                    tango = tango.bind(mike)(golf);
                                    tango = _closure2_slot1;
                                    tango = tango.bind(mike)();
                                    SaveGenerator(address=46);
 44:
                                    return tango;
 46:
                                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                                    if(golf) { _fun00014_ip = 76; continue _fun00013 }
 52:
                                    report = tango;
                                    golf = _closure3_slot0;
                                    if(golf) { _fun00014_ip = 74; continue _fun00013 }
 65:
                                    oscar = _closure2_slot2;
                                    report = oscar.bind(mike)(report);
 74: // try_end0
                                    _fun00014_ip = 103; continue _fun00013;
 76:
                                    return tango;
 79: // catch_target0
                                    CatchBlockStart(arg_register=2);
                                    tango = _closure3_slot0;
                                    if(tango) { _fun00014_ip = 103; continue _fun00013 }
 91:
                                    tango = _closure2_slot3;
                                    zulu = tango.bind(mike)(zulu);
 103:
                                    return mike;
 106:
                                    return entity;
                                }
                            };
                            return entity;
                        };
                        tango = zulu.bind(tango)(mike);
                        _closure3_slot1 = tango;
                        zulu = tango.apply;
                        entity = arguments;
                        mike = entity;
                        entity = this;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    var _closure3_slot1 = mike;
                    mike = false;
                    var _closure3_slot0 = mike;
                    mike = _closure2_slot0;
                    if(mike) { _fun00012_ip = 42; continue _fun00011 }
 29:
                    zulu = function() { // Original name: loadPreview
                        entity = undefined;
                        tango = _closure3_slot1;
                        zulu = tango.apply;
                        entity = arguments;
                        mike = entity;
                        entity = this;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    mike = undefined;
                    mike = zulu.bind(mike)();
 42:
                    entity = function() {
                        entity = true;
                        _closure3_slot0 = entity;
                        entity = undefined;
                        return entity;
                    };
                    return entity;
                }
            };
            entity = report.bind(oscar)(entity, tango);
            entity = new Array(2);
            entity[0] = zulu;
            entity[1] = mike;
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = ['subscriptionId'];
    var _closure1_slot3 = entity;
    entity = global;
    foxtrot = entity.Object;
    romeo = foxtrot.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = romeo.bind(foxtrot)(zulu, entity, options);
    entity = 0;
    options = offset[entity];
    entity = undefined;
    options = yankee.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 1;
    options = offset[options];
    options = yankee.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 2;
    options = offset[options];
    options = yankee.bind(entity)(options);
    var _closure1_slot6 = options;
    options = 3;
    options = offset[options];
    options = verify.bind(entity)(options);
    romeo = options.useCallback;
    var _closure1_slot7 = romeo;
    romeo = options.useEffect;
    var _closure1_slot8 = romeo;
    romeo = options.useState;
    var _closure1_slot9 = romeo;
    options = options.useRef;
    var _closure1_slot10 = options;
    options = 4;
    options = offset[options];
    options = yankee.bind(entity)(options);
    var _closure1_slot11 = options;
    options = 5;
    options = offset[options];
    options = verify.bind(entity)(options);
    options = options.Endpoints;
    var _closure1_slot12 = options;
    options = 11;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'modules/premium/PremiumSubscriptionInvoice.tsx';
    options = verify.bind(offset)(options);
    zulu['createSubscriptionInvoicePreview'] = golf;
    zulu['updateSubscriptionInvoicePreview'] = oscar;
    zulu['createOneTimePurchaseInvoicePreview'] = report;
    zulu['getSubscriptionInvoice'] = tango;
    tango = function(argFoo) { // Original name: useOneTimePurchaseInvoicePreview
        tango = argFoo;
        var _closure2_slot0 = tango;
        report = _closure1_slot10;
        zulu = undefined;
        report = report.bind(zulu)(tango);
        var _closure2_slot1 = report;
        oscar = _closure1_slot8;
        report = function() {
            mike = _closure2_slot1;
            entity = _closure2_slot0;
            mike['current'] = entity;
            entity = undefined;
            return entity;
        };
        report = oscar.bind(zulu)(report);
        report = global;
        oscar = report.JSON;
        report = oscar.stringify;
        golf = report.bind(oscar)(tango);
        oscar = _closure1_slot7;
        report = new Array(1);
        report[0] = golf;
        mike = function() {
            zulu = _closure1_slot17;
            entity = _closure2_slot1;
            mike = entity.current;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        mike = oscar.bind(zulu)(mike, report);
        entity = _closure1_slot21;
        entity = entity.bind(zulu)(tango, mike);
        return entity;
    };
    zulu['useOneTimePurchaseInvoicePreview'] = tango;
    tango = function(argFoo) { // Original name: useSubscriptionInvoicePreview
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            oscar = argFoo;
            var _closure2_slot0 = oscar;
            entity = 'subscriptionId';
            entity = entity in oscar;
            tango = oscar;
            if(!entity) { _fun00016_ip = 70; continue _fun00015 }
 23:
            zulu = oscar.subscriptionId;
            entity = null;
            tango = oscar;
            if(!(entity == zulu)) { _fun00016_ip = 70; continue _fun00015 }
 38:
            entity = oscar.subscriptionId;
            report = _closure1_slot4;
            zulu = _closure1_slot3;
            entity = undefined;
            entity = report.bind(entity)(oscar, zulu);
            _closure2_slot0 = entity;
            tango = entity;
 70:
            report = _closure1_slot10;
            zulu = undefined;
            report = report.bind(zulu)(tango);
            var _closure2_slot1 = report;
            oscar = _closure1_slot8;
            report = function() {
                mike = _closure2_slot1;
                entity = _closure2_slot0;
                mike['current'] = entity;
                entity = undefined;
                return entity;
            };
            report = oscar.bind(zulu)(report);
            report = global;
            oscar = report.JSON;
            report = oscar.stringify;
            golf = report.bind(oscar)(tango);
            oscar = _closure1_slot7;
            report = new Array(1);
            report[0] = golf;
            mike = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = _closure2_slot1;
                    tango = entity.current;
                    entity = 'subscriptionId';
                    entity = entity in tango;
                    if(entity) { _fun00018_ip = 52; continue _fun00017 }
 23:
                    entity = 'items';
                    mike = entity in tango;
                    entity = null;
                    if(!mike) { _fun00018_ip = 50; continue _fun00017 }
 36:
                    zulu = _closure1_slot13;
                    mike = undefined;
                    entity = zulu.bind(mike)(tango);
 50:
                    _fun00018_ip = 66; continue _fun00017;
 52:
                    zulu = _closure1_slot15;
                    mike = undefined;
                    entity = zulu.bind(mike)(tango);
 66:
                    return entity;
                }
            };
            mike = oscar.bind(zulu)(mike, report);
            entity = _closure1_slot21;
            entity = entity.bind(zulu)(tango, mike);
            return entity;
        }
    };
    zulu['useSubscriptionInvoicePreview'] = tango;
    tango = function(argFoo) { // Original name: useGetSubscriptionInvoice
        tango = argFoo;
        var _closure2_slot0 = tango;
        report = _closure1_slot10;
        zulu = undefined;
        report = report.bind(zulu)(tango);
        var _closure2_slot1 = report;
        oscar = _closure1_slot8;
        report = function() {
            mike = _closure2_slot1;
            entity = _closure2_slot0;
            mike['current'] = entity;
            entity = undefined;
            return entity;
        };
        report = oscar.bind(zulu)(report);
        report = global;
        oscar = report.JSON;
        report = oscar.stringify;
        golf = report.bind(oscar)(tango);
        oscar = _closure1_slot7;
        report = new Array(1);
        report[0] = golf;
        mike = function() {
            zulu = _closure1_slot19;
            entity = _closure2_slot1;
            mike = entity.current;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        mike = oscar.bind(zulu)(mike, report);
        entity = _closure1_slot21;
        entity = entity.bind(zulu)(tango, mike);
        return entity;
    };
    zulu['useGetSubscriptionInvoice'] = tango;
    mike = function(argFoo) { // Original name: getItemUnitPriceWithDiscount
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = mike.subscriptionPlanPrice;
        var _closure2_slot1 = zulu;
        tango = mike.discounts;
        zulu = tango.forEach;
        mike = function(argFoo) {
            entity = argFoo;
            zulu = entity.amount;
            entity = _closure2_slot0;
            entity = entity.quantity;
            zulu = zulu / entity;
            entity = _closure2_slot1;
            entity = entity - zulu;
            _closure2_slot1 = entity;
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        entity = _closure2_slot1;
        return entity;
    };
    zulu['getItemUnitPriceWithDiscount'] = mike;
    return entity;
})();