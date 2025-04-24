// app/modules/premium/PremiumSubscriptionInvoice.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    verify = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = offset;
    golfie = function() { // Original name: createSubscriptionInvoicePreview
        entity = undefined;
        tangon = _closure1_slot14;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot13 = golfie;
    entity = function() { // Original name: _createSubscriptionInvoicePreview
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot6;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 350; continue _fun00001 }
 13:
                    backup = michal.items;
                    foxtra = michal.paymentSourceId;
                    romeon = michal.trialId;
                    yankee = michal.code;
                    tangon = michal.applyEntitlements;
                    oscard = undefined;
                    if(!(tangon === oscard)) { _fun00002_ip = 50; continue _fun00001 }
 48:
                    tangon = false;
 50:
                    offset = tangon;
                    verify = michal.currency;
                    golfie = michal.renewal;
                    report = michal.metadata;
                    option = undefined;
                    SaveGenerator(address=77);
 75:
                    return oscard;
 77:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 347; continue _fun00001 }
 86:
                    tangon = {};
                    sizing = _closure1_slot0;
                    output = _closure1_slot2;
                    kiloes = 6;
                    kiloes = output[kiloes];
                    output = sizing.bind(oscard)(kiloes);
                    sizing = output.coerceExistingItemsToNewItemInterval;
                    kiloes = backup;
                    sizing = sizing.bind(output)(kiloes);
                    backup = sizing;
                    kiloes = sizing.map;
                    backup = function(argFoo) {
                        tangon = argFoo;
                        zuuluu = tangon.planId;
                        entity = null;
                        michal = Object.create(entity);
                        entity = 0;
                        michal['planId'] = entity;
                        golfie = {};
                        oscard = tangon;
                        report = michal;
                        oscard = copyDataProperties(golfie, oscard, report);
                        entity = {};
                        golfie = entity;
                        michal = copyDataProperties(golfie, oscard);
                        michal = 'plan_id';
                        entity[michal] = zuuluu;
                        return entity;
                    };
                    backup = kiloes.bind(sizing)(backup);
                    tangon['items'] = backup;
                    tangon['payment_source_id'] = foxtra;
                    tangon['trial_id'] = romeon;
                    tangon['code'] = yankee;
                    tangon['apply_entitlements'] = offset;
                    tangon['currency'] = verify;
                    tangon['renewal'] = golfie;
                    tangon['metadata'] = report;
                    option = tangon;
 189: // try_start_0
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 7;
                    tangon = golfie[tangon];
                    tangon = report.bind(oscard)(tangon);
                    golfie = tangon.HTTP;
                    report = golfie.post;
                    tangon = {};
                    verify = _closure1_slot12;
                    verify = verify.BILLING_SUBSCRIPTIONS_PREVIEW;
                    tangon['url'] = verify;
                    tangon['body'] = option;
                    option = true;
                    tangon['oldFormErrors'] = option;
                    option = false;
                    tangon['rejectWithError'] = option;
                    tangon = report.bind(golfie)(tangon);
                    SaveGenerator(address=262);
 260:
                    return tangon;
 262:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 291; continue _fun00001 }
 268:
                    option = _closure1_slot11;
                    golfie = option.createInvoiceFromServer;
                    report = tangon.body;
                    report = golfie.bind(option)(report);
 288: // try_end0
                    return report;
 291:
                    return tangon;
 294: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tangon = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 8;
                    zuuluu = golfie[zuuluu];
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    zuuluu = zuuluu.BillingError;
                    tangon = zuuluu.prototype;
                    tangon = Object.create(tangon, {constructor: {value: zuuluu}});
                    echoed = tangon;
                    result = report;
                    zuuluu = new echoed[zuuluu](result, output);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 347:
                    return michal;
 350:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot14 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot14 = entity;
    oscard = function() { // Original name: updateSubscriptionInvoicePreview
        entity = undefined;
        tangon = _closure1_slot16;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot15 = oscard;
    entity = function() { // Original name: _updateSubscriptionInvoicePreview
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot6;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 388; continue _fun00003 }
 13:
                    verify = michal.subscriptionId;
                    sizing = michal.items;
                    foxtra = michal.paymentSourceId;
                    romeon = michal.renewal;
                    report = michal.currency;
                    backup = michal.applyEntitlements;
                    oscard = undefined;
                    if(!(backup === oscard)) { _fun00004_ip = 57; continue _fun00003 }
 55:
                    backup = false;
 57:
                    golfie = backup;
                    offset = michal.analyticsLocations;
                    yankee = michal.analyticsLocation;
                    tangon = michal.userDiscountOfferId;
                    option = undefined;
                    SaveGenerator(address=86);
 84:
                    return oscard;
 86:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 385; continue _fun00003 }
 95:
                    backup = null;
                    output = sizing;
                    if(!(backup != output)) { _fun00004_ip = 138; continue _fun00003 }
 104:
                    kiloes = _closure1_slot0;
                    result = _closure1_slot2;
                    zuuluu = 6;
                    zuuluu = result[zuuluu];
                    kiloes = kiloes.bind(oscard)(zuuluu);
                    zuuluu = kiloes.coerceExistingItemsToNewItemInterval;
                    output = zuuluu.bind(kiloes)(sizing);
 138:
                    zuuluu = {};
                    kiloes = backup == output;
                    backup = undefined;
                    if(kiloes) { _fun00004_ip = 168; continue _fun00003 }
 149:
                    sizing = output.map;
                    kiloes = function(argFoo) {
                        tangon = argFoo;
                        zuuluu = tangon.planId;
                        entity = null;
                        michal = Object.create(entity);
                        entity = 0;
                        michal['planId'] = entity;
                        golfie = {};
                        oscard = tangon;
                        report = michal;
                        oscard = copyDataProperties(golfie, oscard, report);
                        entity = {};
                        golfie = entity;
                        michal = copyDataProperties(golfie, oscard);
                        michal = 'plan_id';
                        entity[michal] = zuuluu;
                        return entity;
                    };
                    backup = sizing.bind(output)(kiloes);
 168:
                    zuuluu['items'] = backup;
                    zuuluu['payment_source_id'] = foxtra;
                    zuuluu['renewal'] = romeon;
                    zuuluu['apply_entitlements'] = golfie;
                    zuuluu['currency'] = report;
                    zuuluu['user_discount_offer_id'] = tangon;
                    option = zuuluu;
 201: // try_start_0
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = golfie[zuuluu];
                    zuuluu = report.bind(oscard)(zuuluu);
                    golfie = zuuluu.HTTP;
                    report = golfie.patch;
                    zuuluu = {};
                    foxtra = _closure1_slot12;
                    romeon = foxtra.BILLING_SUBSCRIPTION_PREVIEW;
                    verify = romeon.bind(foxtra)(verify);
                    zuuluu['url'] = verify;
                    verify = {};
                    verify['location'] = yankee;
                    verify['location_stack'] = offset;
                    zuuluu['query'] = verify;
                    zuuluu['body'] = option;
                    option = true;
                    zuuluu['oldFormErrors'] = option;
                    option = false;
                    zuuluu['rejectWithError'] = option;
                    zuuluu = report.bind(golfie)(zuuluu);
                    SaveGenerator(address=297);
 295:
                    return zuuluu;
 297:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00004_ip = 326; continue _fun00003 }
 303:
                    golfie = _closure1_slot11;
                    report = golfie.createInvoiceFromServer;
                    tangon = zuuluu.body;
                    tangon = report.bind(golfie)(tangon);
 323: // try_end0
                    return tangon;
 326:
                    return zuuluu;
 329: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tangon = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 8;
                    zuuluu = golfie[zuuluu];
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    zuuluu = zuuluu.BillingError;
                    tangon = zuuluu.prototype;
                    tangon = Object.create(tangon, {constructor: {value: zuuluu}});
                    update = tangon;
                    echoed = report;
                    zuuluu = new update[zuuluu](echoed, result);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 385:
                    return michal;
 388:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot16 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot16 = entity;
    report = function() { // Original name: createOneTimePurchaseInvoicePreview
        entity = undefined;
        tangon = _closure1_slot18;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot17 = report;
    entity = function() { // Original name: _createOneTimePurchaseInvoicePreview
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot6;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 284; continue _fun00005 }
 13:
                    foxtra = michal.paymentSourceId;
                    option = michal.skuId;
                    romeon = michal.subscriptionPlanId;
                    yankee = michal.currency;
                    offset = michal.loadId;
                    oscard = undefined;
                    SaveGenerator(address=49);
 47:
                    return oscard;
 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 281; continue _fun00005 }
 58:
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 9;
                    tangon = golfie[tangon];
                    golfie = report.bind(oscard)(tangon);
                    report = option;
                    tangon = 'SKU ID is missing for one time purchase gift invoice preview';
                    tangon = golfie.bind(oscard)(report, tangon);
 96: // try_start_0
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 10;
                    tangon = golfie[tangon];
                    golfie = report.bind(oscard)(tangon);
                    report = golfie.httpGetWithCountryCodeQuery;
                    tangon = {};
                    backup = _closure1_slot12;
                    verify = backup.STORE_SKU_PURCHASE;
                    option = verify.bind(backup)(option);
                    tangon['url'] = option;
                    verify = {};
                    option = true;
                    verify['gift'] = option;
                    verify['payment_source_id'] = foxtra;
                    verify['sku_subscription_plan_id'] = romeon;
                    verify['currency'] = yankee;
                    verify['load_id'] = offset;
                    tangon['query'] = verify;
                    tangon['oldFormErrors'] = option;
                    option = false;
                    tangon['rejectWithError'] = option;
                    tangon = report.bind(golfie)(tangon);
                    SaveGenerator(address=196);
 194:
                    return tangon;
 196:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 225; continue _fun00005 }
 202:
                    option = _closure1_slot11;
                    golfie = option.createInvoiceFromServer;
                    report = tangon.body;
                    report = golfie.bind(option)(report);
 222: // try_end0
                    return report;
 225:
                    return tangon;
 228: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tangon = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 8;
                    zuuluu = golfie[zuuluu];
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    zuuluu = zuuluu.BillingError;
                    tangon = zuuluu.prototype;
                    tangon = Object.create(tangon, {constructor: {value: zuuluu}});
                    output = tangon;
                    sizing = report;
                    zuuluu = new output[zuuluu](sizing, kiloes);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 281:
                    return michal;
 284:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot18 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot18 = entity;
    tangon = function() { // Original name: getSubscriptionInvoice
        entity = undefined;
        tangon = _closure1_slot20;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot19 = tangon;
    entity = function() { // Original name: _getSubscriptionInvoice
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot6;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00008_ip = 157; continue _fun00007 }
 13:
                    verify = michal.subscriptionId;
                    zuuluu = michal.preventFetch;
                    oscard = undefined;
                    SaveGenerator(address=31);
 29:
                    return oscard;
 31:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 154; continue _fun00007 }
 37:
                    if(zuuluu) { _fun00008_ip = 149; continue _fun00007 }
 40:
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = golfie[zuuluu];
                    zuuluu = report.bind(oscard)(zuuluu);
                    oscard = zuuluu.HTTP;
                    report = oscard.get;
                    zuuluu = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    option = _closure1_slot12;
                    golfie = option.BILLING_SUBSCRIPTION_INVOICE;
                    golfie = golfie.bind(option)(verify);
                    zuuluu['url'] = golfie;
                    zuuluu = report.bind(oscard)(zuuluu);
                    SaveGenerator(address=117);
 115:
                    return zuuluu;
 117:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00008_ip = 146; continue _fun00007 }
 123:
                    oscard = _closure1_slot11;
                    report = oscard.createInvoiceFromServer;
                    tangon = zuuluu.body;
                    tangon = report.bind(oscard)(tangon);
                    return tangon;
 146:
                    return zuuluu;
 149:
                    zuuluu = null;
                    return zuuluu;
 154:
                    return michal;
 157:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot20 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo, argBar) { // Original name: useGenericSubscriptionInvoicePreview
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            golfie = argBar;
            michal = argFoo;
            option = michal.preventFetch;
            oscard = undefined;
            if(!(option === oscard)) { _fun00010_ip = 22; continue _fun00009 }
 20:
            option = false;
 22:
            var _closure2_slot0 = option;
            var _closure2_slot1 = golfie;
            var _closure2_slot2 = oscard;
            var _closure2_slot3 = oscard;
            michal = _closure1_slot9;
            offset = null;
            zuuluu = michal.bind(oscard)(offset);
            michal = _closure1_slot5;
            yankee = 2;
            report = michal.bind(oscard)(zuuluu, yankee);
            michal = 0;
            zuuluu = report[michal];
            verify = 1;
            report = report[verify];
            _closure2_slot2 = report;
            report = _closure1_slot9;
            offset = report.bind(oscard)(offset);
            report = _closure1_slot5;
            report = report.bind(oscard)(offset, yankee);
            michal = report[michal];
            report = report[verify];
            _closure2_slot3 = report;
            report = _closure1_slot8;
            tangon = new Array(2);
            tangon[0] = option;
            tangon[1] = golfie;
            entity = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = function() { // Original name: _loadPreview
                        tangon = undefined;
                        entity = undefined;
                        zuuluu = _closure1_slot6;
                        michal = function* () {
                            entity = function* () { // Original name: ?anon_0_
                                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(michal) { _fun00014_ip = 106; continue _fun00013 }
 7:
                                    michal = undefined;
                                    report = undefined;
 11: // try_start_0
                                    tangon = _closure2_slot3;
                                    golfie = null;
                                    tangon = tangon.bind(michal)(golfie);
                                    tangon = _closure2_slot2;
                                    tangon = tangon.bind(michal)(golfie);
                                    tangon = _closure2_slot1;
                                    tangon = tangon.bind(michal)();
                                    SaveGenerator(address=46);
 44:
                                    return tangon;
 46:
                                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                                    if(golfie) { _fun00014_ip = 76; continue _fun00013 }
 52:
                                    report = tangon;
                                    golfie = _closure3_slot0;
                                    if(golfie) { _fun00014_ip = 74; continue _fun00013 }
 65:
                                    oscard = _closure2_slot2;
                                    report = oscard.bind(michal)(report);
 74: // try_end0
                                    _fun00014_ip = 103; continue _fun00013;
 76:
                                    return tangon;
 79: // catch_target0
                                    CatchBlockStart(arg_register=2);
                                    tangon = _closure3_slot0;
                                    if(tangon) { _fun00014_ip = 103; continue _fun00013 }
 91:
                                    tangon = _closure2_slot3;
                                    zuuluu = tangon.bind(michal)(zuuluu);
 103:
                                    return michal;
 106:
                                    return entity;
                                }
                            };
                            return entity;
                        };
                        tangon = zuuluu.bind(tangon)(michal);
                        _closure3_slot1 = tangon;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    var _closure3_slot1 = michal;
                    michal = false;
                    var _closure3_slot0 = michal;
                    michal = _closure2_slot0;
                    if(michal) { _fun00012_ip = 42; continue _fun00011 }
 29:
                    zuuluu = function() { // Original name: loadPreview
                        entity = undefined;
                        tangon = _closure3_slot1;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    michal = undefined;
                    michal = zuuluu.bind(michal)();
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
            entity = report.bind(oscard)(entity, tangon);
            entity = new Array(2);
            entity[0] = zuuluu;
            entity[1] = michal;
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = ['subscriptionId'];
    var _closure1_slot3 = entity;
    entity = global;
    foxtra = entity.Object;
    romeon = foxtra.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = romeon.bind(foxtra)(zuuluu, entity, option);
    entity = 0;
    option = offset[entity];
    entity = undefined;
    option = yankee.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 1;
    option = offset[option];
    option = yankee.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 2;
    option = offset[option];
    option = yankee.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 3;
    option = offset[option];
    option = verify.bind(entity)(option);
    romeon = option.useCallback;
    var _closure1_slot7 = romeon;
    romeon = option.useEffect;
    var _closure1_slot8 = romeon;
    romeon = option.useState;
    var _closure1_slot9 = romeon;
    option = option.useRef;
    var _closure1_slot10 = option;
    option = 4;
    option = offset[option];
    option = yankee.bind(entity)(option);
    var _closure1_slot11 = option;
    option = 5;
    option = offset[option];
    option = verify.bind(entity)(option);
    option = option.Endpoints;
    var _closure1_slot12 = option;
    option = 11;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/premium/PremiumSubscriptionInvoice.tsx';
    option = verify.bind(offset)(option);
    zuuluu['createSubscriptionInvoicePreview'] = golfie;
    zuuluu['updateSubscriptionInvoicePreview'] = oscard;
    zuuluu['createOneTimePurchaseInvoicePreview'] = report;
    zuuluu['getSubscriptionInvoice'] = tangon;
    tangon = function(argFoo) { // Original name: useOneTimePurchaseInvoicePreview
        tangon = argFoo;
        var _closure2_slot0 = tangon;
        report = _closure1_slot10;
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        var _closure2_slot1 = report;
        oscard = _closure1_slot8;
        report = function() {
            michal = _closure2_slot1;
            entity = _closure2_slot0;
            michal['current'] = entity;
            entity = undefined;
            return entity;
        };
        report = oscard.bind(zuuluu)(report);
        report = global;
        oscard = report.JSON;
        report = oscard.stringify;
        golfie = report.bind(oscard)(tangon);
        oscard = _closure1_slot7;
        report = new Array(1);
        report[0] = golfie;
        michal = function() {
            zuuluu = _closure1_slot17;
            entity = _closure2_slot1;
            michal = entity.current;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        michal = oscard.bind(zuuluu)(michal, report);
        entity = _closure1_slot21;
        entity = entity.bind(zuuluu)(tangon, michal);
        return entity;
    };
    zuuluu['useOneTimePurchaseInvoicePreview'] = tangon;
    tangon = function(argFoo) { // Original name: useSubscriptionInvoicePreview
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            oscard = argFoo;
            var _closure2_slot0 = oscard;
            entity = 'subscriptionId';
            entity = entity in oscard;
            tangon = oscard;
            if(!entity) { _fun00016_ip = 70; continue _fun00015 }
 23:
            zuuluu = oscard.subscriptionId;
            entity = null;
            tangon = oscard;
            if(!(entity == zuuluu)) { _fun00016_ip = 70; continue _fun00015 }
 38:
            entity = oscard.subscriptionId;
            report = _closure1_slot4;
            zuuluu = _closure1_slot3;
            entity = undefined;
            entity = report.bind(entity)(oscard, zuuluu);
            _closure2_slot0 = entity;
            tangon = entity;
 70:
            report = _closure1_slot10;
            zuuluu = undefined;
            report = report.bind(zuuluu)(tangon);
            var _closure2_slot1 = report;
            oscard = _closure1_slot8;
            report = function() {
                michal = _closure2_slot1;
                entity = _closure2_slot0;
                michal['current'] = entity;
                entity = undefined;
                return entity;
            };
            report = oscard.bind(zuuluu)(report);
            report = global;
            oscard = report.JSON;
            report = oscard.stringify;
            golfie = report.bind(oscard)(tangon);
            oscard = _closure1_slot7;
            report = new Array(1);
            report[0] = golfie;
            michal = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = _closure2_slot1;
                    tangon = entity.current;
                    entity = 'subscriptionId';
                    entity = entity in tangon;
                    if(entity) { _fun00018_ip = 52; continue _fun00017 }
 23:
                    entity = 'items';
                    michal = entity in tangon;
                    entity = null;
                    if(!michal) { _fun00018_ip = 50; continue _fun00017 }
 36:
                    zuuluu = _closure1_slot13;
                    michal = undefined;
                    entity = zuuluu.bind(michal)(tangon);
 50:
                    _fun00018_ip = 66; continue _fun00017;
 52:
                    zuuluu = _closure1_slot15;
                    michal = undefined;
                    entity = zuuluu.bind(michal)(tangon);
 66:
                    return entity;
                }
            };
            michal = oscard.bind(zuuluu)(michal, report);
            entity = _closure1_slot21;
            entity = entity.bind(zuuluu)(tangon, michal);
            return entity;
        }
    };
    zuuluu['useSubscriptionInvoicePreview'] = tangon;
    tangon = function(argFoo) { // Original name: useGetSubscriptionInvoice
        tangon = argFoo;
        var _closure2_slot0 = tangon;
        report = _closure1_slot10;
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        var _closure2_slot1 = report;
        oscard = _closure1_slot8;
        report = function() {
            michal = _closure2_slot1;
            entity = _closure2_slot0;
            michal['current'] = entity;
            entity = undefined;
            return entity;
        };
        report = oscard.bind(zuuluu)(report);
        report = global;
        oscard = report.JSON;
        report = oscard.stringify;
        golfie = report.bind(oscard)(tangon);
        oscard = _closure1_slot7;
        report = new Array(1);
        report[0] = golfie;
        michal = function() {
            zuuluu = _closure1_slot19;
            entity = _closure2_slot1;
            michal = entity.current;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        michal = oscard.bind(zuuluu)(michal, report);
        entity = _closure1_slot21;
        entity = entity.bind(zuuluu)(tangon, michal);
        return entity;
    };
    zuuluu['useGetSubscriptionInvoice'] = tangon;
    michal = function(argFoo) { // Original name: getItemUnitPriceWithDiscount
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = michal.subscriptionPlanPrice;
        var _closure2_slot1 = zuuluu;
        tangon = michal.discounts;
        zuuluu = tangon.forEach;
        michal = function(argFoo) {
            entity = argFoo;
            zuuluu = entity.amount;
            entity = _closure2_slot0;
            entity = entity.quantity;
            zuuluu = zuuluu / entity;
            entity = _closure2_slot1;
            entity = entity - zuuluu;
            _closure2_slot1 = entity;
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        entity = _closure2_slot1;
        return entity;
    };
    zuuluu['getItemUnitPriceWithDiscount'] = michal;
    return entity;
})();