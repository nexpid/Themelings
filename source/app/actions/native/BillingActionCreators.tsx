// app/actions/native/BillingActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    verify = argBar;
    foxtra = argBaz;
    yankee = argCor;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = foxtra;
    var _closure1_slot2 = yankee;
    var _closure1_slot3 = offset;
    romeon = function(argFoo) { // Original name: applyAppleReceipt
        entity = argFoo;
        yankee = entity.encodedReceipt;
        offset = entity.entitlementSkuId;
        verify = entity.presentmentCurrency;
        option = entity.presentmentAmount;
        golfie = entity.appStoreRegion;
        oscard = entity.giftInfoOptions;
        tangon = entity.retries;
        zuuluu = _closure1_slot0;
        michal = _closure1_slot3;
        entity = 13;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.post;
        entity = {};
        report = _closure1_slot17;
        report = report.BILLING_APPLY_APPLE_RECEIPT;
        entity['url'] = report;
        report = {};
        report['encoded_receipt'] = yankee;
        report['entitlement_sku_id'] = offset;
        report['presentment_currency'] = verify;
        report['presentment_amount'] = option;
        report['app_store_region'] = golfie;
        report['gift_info_options'] = oscard;
        entity['body'] = report;
        entity['retries'] = tangon;
        tangon = true;
        entity['oldFormErrors'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        zuuluu = michal.bind(zuuluu)(entity);
        michal = zuuluu.catch;
        entity = function(argFoo) {
            entity = argFoo;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 14;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.captureBillingException;
            michal = {};
            report = {};
            oscard = _closure1_slot22;
            report['source'] = oscard;
            michal['tags'] = report;
            michal = zuuluu.bind(tangon)(entity, michal);
            throw entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot26 = romeon;
    entity = function() { // Original name: _getTrialOfferSignature
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 169; continue _fun00001 }
 10:
                    option = argFoo;
                    golfie = argBar;
                    oscard = argBaz;
 19: // try_start_0
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot3;
                    michal = 13;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    tangon = michal.HTTP;
                    zuuluu = tangon.post;
                    michal = {};
                    report = _closure1_slot17;
                    report = report.BILLING_GENERATE_APPLE_TRIAL_OFFER_SIGNATURE;
                    michal['url'] = report;
                    report = {};
                    report['product_id'] = option;
                    report['product_offer_id'] = golfie;
                    report['app_account_token'] = oscard;
                    michal['body'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=111);
 109:
                    return michal;
 111:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 125; continue _fun00001 }
 117:
                    zuuluu = michal.body;
 122: // try_end0
                    return zuuluu;
 125:
                    return michal;
 128: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot3;
                    michal = 14;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.captureBillingException;
                    zuuluu = zuuluu.bind(tangon)(report);
                    return michal;
 169:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot27 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot27 = entity;
    oscard = function() { // Original name: restoreFromLocalReceipt
        entity = undefined;
        tangon = _closure1_slot29;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot28 = oscard;
    entity = function() { // Original name: _restoreFromLocalReceipt
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 489; continue _fun00003 }
 10:
                    report = undefined;
                    option = undefined;
                    foxtra = undefined;
                    oscard = undefined;
                    yankee = undefined;
                    tangon = undefined;
                    offset = undefined;
 24: // try_start_0
                    golfie = _closure1_slot1;
                    verify = _closure1_slot3;
                    michal = 15;
                    michal = verify[michal];
                    golfie = golfie.bind(report)(michal);
                    michal = golfie.receiptData;
                    michal = michal.bind(golfie)();
                    SaveGenerator(address=61);
 59:
                    return michal;
 61:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(golfie) { _fun00004_ip = 479; continue _fun00003 }
 70:
                    foxtra = michal;
                    romeon = _closure1_slot0;
                    kiloes = _closure1_slot3;
                    verify = 16;
                    golfie = kiloes[verify];
                    golfie = romeon.bind(report)(golfie);
                    backup = golfie.Storage;
                    romeon = backup.get;
                    golfie = _closure1_slot20;
                    romeon = romeon.bind(backup)(golfie);
                    backup = _closure1_slot1;
                    golfie = 17;
                    golfie = kiloes[golfie];
                    backup = backup.bind(report)(golfie);
                    golfie = backup.v3;
                    golfie = golfie.bind(backup)(michal);
                    oscard = golfie;
                    if(!(romeon !== golfie)) { _fun00004_ip = 428; continue _fun00003 }
 150:
                    backup = _closure1_slot9;
                    romeon = backup.getGiftOptionsForKey;
                    golfie = oscard;
                    yankee = romeon.bind(backup)(golfie);
                    romeon = _closure1_slot14;
                    golfie = romeon.getProducts;
                    golfie = golfie.bind(romeon)();
                    option = golfie;
                    romeon = null;
                    if(!(romeon == golfie)) { _fun00004_ip = 197; continue _fun00003 }
 191:
                    golfie = new Array(0);
                    _fun00004_ip = 200; continue _fun00003;
 197:
                    golfie = option;
 200:
                    tangon = golfie;
                    option = golfie.length;
                    golfie = 0;
                    backup = option > golfie;
                    option = null;
                    if(!backup) { _fun00004_ip = 223; continue _fun00003 }
 219:
                    option = tangon[golfie];
 223:
                    offset = option;
                    golfie = _closure1_slot26;
                    tangon = {};
                    tangon['encodedReceipt'] = foxtra;
                    foxtra = _closure1_slot21;
                    tangon['retries'] = foxtra;
                    foxtra = romeon == option;
                    option = undefined;
                    if(foxtra) { _fun00004_ip = 261; continue _fun00003 }
 255:
                    option = offset.countryCode;
 261:
                    tangon['appStoreRegion'] = option;
                    option = {};
                    offset = yankee;
                    foxtra = romeon == offset;
                    offset = undefined;
                    if(foxtra) { _fun00004_ip = 289; continue _fun00003 }
 280:
                    foxtra = yankee;
                    offset = foxtra.gift_style;
 289:
                    option['gift_style'] = offset;
                    offset = yankee;
                    romeon = romeon == offset;
                    offset = undefined;
                    if(romeon) { _fun00004_ip = 312; continue _fun00003 }
 306:
                    offset = yankee.reward_sku_ids;
 312:
                    option['reward_sku_ids'] = offset;
                    tangon['giftInfoOptions'] = option;
                    tangon = golfie.bind(report)(tangon);
                    SaveGenerator(address=331);
 329:
                    return tangon;
 331:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golfie) { _fun00004_ip = 425; continue _fun00003 }
 337:
                    offset = _closure1_slot1;
                    golfie = _closure1_slot3;
                    option = 18;
                    option = golfie[option];
                    romeon = offset.bind(report)(option);
                    yankee = romeon.dispatch;
                    option = {};
                    offset = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                    option['type'] = offset;
                    offset = oscard;
                    option['key'] = offset;
                    option = yankee.bind(romeon)(option);
                    option = _closure1_slot0;
                    golfie = golfie[verify];
                    golfie = option.bind(report)(golfie);
                    verify = golfie.Storage;
                    option = verify.set;
                    golfie = _closure1_slot20;
                    golfie = option.bind(verify)(golfie, offset);
 420: // try_end0
                    golfie = true;
                    return golfie;
 425:
                    return tangon;
 428: // try_start_1
                    tangon = _closure1_slot1;
                    golfie = _closure1_slot3;
                    zuuluu = 18;
                    zuuluu = golfie[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                    zuuluu['type'] = golfie;
                    zuuluu['key'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 474: // try_end1
                    zuuluu = false;
                    return zuuluu;
 479:
                    return michal;
 482: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=1);
                    michal = false;
                    return michal;
 489:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot29 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo, argBar) { // Original name: handlePurchaseException
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            verify = argBar;
            tangon = _closure1_slot25;
            zuuluu = tangon.has;
            michal = entity.code;
            michal = zuuluu.bind(tangon)(michal);
            if(michal) { _fun00006_ip = 625; continue _fun00005 }
 34:
            tangon = _closure1_slot24;
            michal = entity.message;
            golfie = null;
            offset = entity;
            if(!(golfie != michal)) { _fun00006_ip = 55; continue _fun00005 }
 52:
            offset = michal;
 55:
            michal = global;
            zuuluu = michal.HermesInternal;
            option = zuuluu.concat;
            report = 'Unable to make request for ';
            zuuluu = ': ';
            zuuluu = option.bind(report)(verify, zuuluu, offset);
            offset = undefined;
            zuuluu = tangon.bind(offset)(zuuluu);
            tangon = _closure1_slot24;
            report = michal.JSON;
            zuuluu = report.stringify;
            option = zuuluu.bind(report)(entity);
            zuuluu = michal.HermesInternal;
            report = zuuluu.concat;
            zuuluu = 'error dumped: ';
            zuuluu = report.bind(zuuluu)(option);
            zuuluu = tangon.bind(offset)(zuuluu);
            tangon = _closure1_slot2;
            report = _closure1_slot3;
            zuuluu = 31;
            zuuluu = report[zuuluu];
            tangon = tangon.bind(offset)(zuuluu);
            zuuluu = tangon.getUnderlyingIOSError;
            report = zuuluu.bind(tangon)(entity);
            if(!(golfie == report)) { _fun00006_ip = 500; continue _fun00005 }
 180:
            yankee = _closure1_slot0;
            zuuluu = _closure1_slot3;
            kiloes = 24;
            tangon = zuuluu[kiloes];
            tangon = yankee.bind(offset)(tangon);
            option = tangon.intl;
            tangon = option.string;
            zuuluu = zuuluu[kiloes];
            zuuluu = yankee.bind(offset)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.PjfUXV;
            yankee = tangon.bind(option)(zuuluu);
            option = yankee.replace;
            tangon = '!';
            zuuluu = '.';
            foxtra = option.bind(yankee)(tangon, zuuluu);
            yankee = entity.message;
            if(yankee) { _fun00006_ip = 265; continue _fun00005 }
 262:
            yankee = foxtra;
 265:
            zuuluu = entity.body;
            option = yankee;
            if(!(golfie != zuuluu)) { _fun00006_ip = 333; continue _fun00005 }
 277:
            zuuluu = entity.body;
            tangon = zuuluu.apple_error_code;
            option = yankee;
            if(!(golfie != tangon)) { _fun00006_ip = 333; continue _fun00005 }
 295:
            output = zuuluu.apple_error_code;
            zuuluu = michal.HermesInternal;
            yankee = zuuluu.concat;
            update = '';
            result = ' (code: ';
            sizing = ')';
            echoed = foxtra;
            option = update[yankee](echoed, result, output, sizing, kiloes);
 333:
            tangon = _closure1_slot1;
            yankee = _closure1_slot3;
            zuuluu = 27;
            zuuluu = yankee[zuuluu];
            golfie = tangon.bind(offset)(zuuluu);
            tangon = golfie.show;
            zuuluu = {};
            backup = _closure1_slot0;
            romeon = yankee[kiloes];
            romeon = backup.bind(offset)(romeon);
            foxtra = romeon.intl;
            romeon = foxtra.string;
            yankee = yankee[kiloes];
            yankee = backup.bind(offset)(yankee);
            yankee = yankee.t;
            yankee = yankee.zrhHHx;
            yankee = romeon.bind(foxtra)(yankee);
            zuuluu['title'] = yankee;
            zuuluu['body'] = option;
            option = true;
            zuuluu['isDismissable'] = option;
            zuuluu = tangon.bind(golfie)(zuuluu);
            zuuluu = 'status';
            zuuluu = zuuluu in entity;
            if(zuuluu) { _fun00006_ip = 498; continue _fun00005 }
 442:
            tangon = _closure1_slot0;
            golfie = _closure1_slot3;
            zuuluu = 14;
            zuuluu = golfie[zuuluu];
            golfie = tangon.bind(offset)(zuuluu);
            tangon = golfie.captureBillingException;
            zuuluu = {};
            option = {};
            yankee = _closure1_slot22;
            option['source'] = yankee;
            option['purchase_type'] = verify;
            zuuluu['tags'] = option;
            zuuluu = tangon.bind(golfie)(entity, zuuluu);
            throw entity;
 498:
            throw entity;
 500:
            zuuluu = _closure1_slot24;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            michal = 'NativeError: ';
            michal = tangon.bind(michal)(report);
            michal = zuuluu.bind(offset)(michal);
            zuuluu = _closure1_slot1;
            yankee = _closure1_slot3;
            michal = 27;
            michal = yankee[michal];
            tangon = zuuluu.bind(offset)(michal);
            zuuluu = tangon.show;
            michal = {};
            verify = _closure1_slot0;
            oscard = 24;
            golfie = yankee[oscard];
            golfie = verify.bind(offset)(golfie);
            option = golfie.intl;
            golfie = option.string;
            oscard = yankee[oscard];
            oscard = verify.bind(offset)(oscard);
            oscard = oscard.t;
            oscard = oscard.POsVOj;
            oscard = golfie.bind(option)(oscard);
            michal['title'] = oscard;
            michal['body'] = report;
            michal = zuuluu.bind(tangon)(michal);
            throw entity;
 625:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: canMakeIAPRequest
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = _closure1_slot14;
            entity = michal.isBusy;
            entity = entity.bind(michal)();
            entity = !entity;
            if(!entity) { _fun00008_ip = 119; continue _fun00007 }
 23:
            zuuluu = _closure1_slot1;
            report = _closure1_slot3;
            michal = 22;
            michal = report[michal];
            report = undefined;
            option = zuuluu.bind(report)(michal);
            golfie = option.getCurrentConfig;
            oscard = {};
            michal = '1ee357_2';
            oscard['location'] = michal;
            michal = {};
            zuuluu = false;
            michal['autoTrackExposure'] = zuuluu;
            michal = golfie.bind(option)(oscard, michal);
            michal = michal.paymentsBlocked;
            michal = !michal;
            if(michal) { _fun00008_ip = 116; continue _fun00007 }
 90:
            oscard = _closure1_slot1;
            golfie = _closure1_slot3;
            tangon = 23;
            tangon = golfie[tangon];
            tangon = oscard.bind(report)(tangon);
            tangon = tangon.bind(report)();
            michal = false;
 116:
            entity = michal;
 119:
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    entity = function() { // Original name: clearAndMakeIAPRequest
        entity = undefined;
        tangon = _closure1_slot33;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot32 = entity;
    entity = function() { // Original name: _clearAndMakeIAPRequest
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00010_ip = 653; continue _fun00009 }
 10:
                    verify = argFoo;
                    foxtra = argBar;
                    yankee = argBaz;
                    oscard = undefined;
                    result = undefined;
                    echoed = undefined;
                    output = undefined;
                    romeon = undefined;
                    kiloes = undefined;
                    backup = undefined;
                    report = undefined;
                    option = false;
                    offset = null;
                    golfie = null;
 41: // try_start_0 // try_start_1
                    sizing = _closure1_slot0;
                    update = _closure1_slot3;
                    zuuluu = 21;
                    zuuluu = update[zuuluu];
                    sizing = sizing.bind(oscard)(zuuluu);
                    zuuluu = sizing.clearTransactionIOS;
                    zuuluu = zuuluu.bind(sizing)();
                    SaveGenerator(address=78);
 76:
                    return zuuluu;
 78:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=15);
                    if(sizing) { _fun00010_ip = 426; continue _fun00009 }
 87:
                    update = _closure1_slot0;
                    source = _closure1_slot3;
                    sizing = 15;
                    sizing = source[sizing];
                    update = update.bind(oscard)(sizing);
                    sizing = update.makeIAPRequest;
                    yankee = sizing.bind(update)(foxtra, yankee);
                    SaveGenerator(address=123);
 121:
                    return yankee;
 123:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=12);
                    if(foxtra) { _fun00010_ip = 354; continue _fun00009 }
 132:
                    romeon = yankee;
                    option = true;
                    foxtra = yankee.purchaseResponse;
                    sizing = foxtra.transactionIdentifier;
                    foxtra = sizing.toString;
                    kiloes = foxtra.bind(sizing)();
                    foxtra = yankee.purchaseResponse;
                    backup = foxtra.transactionDate;
                    foxtra = {};
                    sizing = yankee.purchaseResponse;
                    sizing = sizing.originalTransactionIdentifier;
                    echoed = sizing;
                    update = offset == sizing;
                    sizing = undefined;
                    if(update) { _fun00010_ip = 208; continue _fun00009 }
 196:
                    update = echoed;
                    echoed = update.toString;
                    sizing = echoed.bind(update)();
 208:
                    result = sizing;
                    if(!(offset == sizing)) { _fun00010_ip = 220; continue _fun00009 }
 215:
                    sizing = kiloes;
                    _fun00010_ip = 223; continue _fun00009;
 220:
                    sizing = result;
 223:
                    foxtra['original_transaction_id'] = sizing;
                    sizing = romeon;
                    sizing = sizing.purchaseResponse;
                    sizing = sizing.originalTransactionDate;
                    output = sizing;
                    if(!(offset == sizing)) { _fun00010_ip = 257; continue _fun00009 }
 252:
                    sizing = backup;
                    _fun00010_ip = 260; continue _fun00009;
 257:
                    sizing = output;
 260:
                    foxtra['original_transaction_date'] = sizing;
                    foxtra['transaction_id'] = kiloes;
                    foxtra['transaction_date'] = backup;
                    golfie = foxtra;
 282: // try_end0 // try_end1
                    backup = _closure1_slot1;
                    kiloes = _closure1_slot3;
                    foxtra = 25;
                    foxtra = kiloes[foxtra];
                    sizing = backup.bind(oscard)(foxtra);
                    kiloes = sizing.track;
                    foxtra = _closure1_slot15;
                    backup = foxtra.APPLE_PARTNER_IAP_REQUEST_SENT;
                    foxtra = {};
                    output = verify;
                    foxtra['request_identifier'] = output;
                    output = option;
                    foxtra['success'] = output;
                    ctrled = golfie;
                    vacuum = foxtra;
                    output = copyDataProperties(vacuum, ctrled);
                    foxtra = kiloes.bind(sizing)(backup, foxtra);
                    return romeon;
 354:
                    foxtra = _closure1_slot1;
                    backup = _closure1_slot3;
                    romeon = 25;
                    romeon = backup[romeon];
                    kiloes = foxtra.bind(oscard)(romeon);
                    backup = kiloes.track;
                    romeon = _closure1_slot15;
                    foxtra = romeon.APPLE_PARTNER_IAP_REQUEST_SENT;
                    romeon = {};
                    sizing = verify;
                    romeon['request_identifier'] = sizing;
                    sizing = option;
                    romeon['success'] = sizing;
                    ctrled = golfie;
                    vacuum = romeon;
                    sizing = copyDataProperties(vacuum, ctrled);
                    romeon = backup.bind(kiloes)(foxtra, romeon);
                    return yankee;
 426:
                    romeon = _closure1_slot1;
                    foxtra = _closure1_slot3;
                    yankee = 25;
                    yankee = foxtra[yankee];
                    foxtra = romeon.bind(oscard)(yankee);
                    romeon = foxtra.track;
                    tangon = _closure1_slot15;
                    yankee = tangon.APPLE_PARTNER_IAP_REQUEST_SENT;
                    tangon = {};
                    backup = verify;
                    tangon['request_identifier'] = backup;
                    backup = option;
                    tangon['success'] = backup;
                    ctrled = golfie;
                    vacuum = tangon;
                    backup = copyDataProperties(vacuum, ctrled);
                    tangon = romeon.bind(foxtra)(yankee, tangon);
                    return zuuluu;
 498: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=3);
                    michal = tangon;
                    zuuluu = {};
                    tangon = tangon.code;
                    report = tangon;
                    offset = offset == tangon;
                    tangon = undefined;
                    if(offset) { _fun00010_ip = 534; continue _fun00009 }
 522:
                    offset = report;
                    report = offset.toString;
                    tangon = report.bind(offset)();
 534:
                    zuuluu['error_code'] = tangon;
                    report = _closure1_slot2;
                    offset = _closure1_slot3;
                    tangon = 31;
                    tangon = offset[tangon];
                    report = report.bind(oscard)(tangon);
                    tangon = report.getUnderlyingIOSError;
                    tangon = tangon.bind(report)(michal);
                    zuuluu['error_message'] = tangon;
                    golfie = zuuluu;
                    throw michal;
 583: // try_end2 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    report = _closure1_slot1;
                    offset = _closure1_slot3;
                    tangon = 25;
                    tangon = offset[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.track;
                    zuuluu = _closure1_slot15;
                    tangon = zuuluu.APPLE_PARTNER_IAP_REQUEST_SENT;
                    zuuluu = {};
                    zuuluu['request_identifier'] = verify;
                    zuuluu['success'] = option;
                    ctrled = golfie;
                    vacuum = zuuluu;
                    golfie = copyDataProperties(vacuum, ctrled);
                    zuuluu = report.bind(oscard)(tangon, zuuluu);
                    throw michal;
 653:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot33 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot33 = entity;
    report = function() { // Original name: getIAPJWTRequestData
        entity = undefined;
        tangon = _closure1_slot35;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot34 = report;
    entity = function() { // Original name: _getIAPJWTRequestData
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    report = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00012_ip = 191; continue _fun00011 }
 15:
                    var _closure4_slot0 = report;
                    zuuluu = _closure1_slot1;
                    offset = _closure1_slot3;
                    michal = 32;
                    michal = offset[michal];
                    verify = undefined;
                    tangon = zuuluu.bind(verify)(michal);
                    zuuluu = tangon.post;
                    michal = {};
                    option = _closure1_slot17;
                    option = option.BILLING_CREATE_APPLE_IAP_JWT_TOKEN;
                    michal['url'] = option;
                    michal['body'] = report;
                    report = true;
                    michal['oldFormErrors'] = report;
                    report = {};
                    option = _closure1_slot0;
                    golfie = 33;
                    golfie = offset[golfie];
                    golfie = option.bind(verify)(golfie);
                    golfie = golfie.NetworkActionNames;
                    golfie = golfie.APPLE_JWT_TOKEN_CREATE;
                    report['event'] = golfie;
                    oscard = function(argFoo) { // Original name: properties
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            golfie = argFoo;
                            entity = _closure4_slot0;
                            tangon = entity.operation;
                            report = _closure1_slot0;
                            zuuluu = _closure1_slot3;
                            oscard = 34;
                            zuuluu = zuuluu[oscard];
                            verify = undefined;
                            zuuluu = report.bind(verify)(zuuluu);
                            zuuluu = zuuluu.APBRequestOperations;
                            zuuluu = zuuluu.CREATE;
                            if(!(tangon !== zuuluu)) { _fun00014_ip = 175; continue _fun00013 }
 57:
                            zuuluu = _closure4_slot0;
                            tangon = zuuluu.operation;
                            report = _closure1_slot0;
                            zuuluu = _closure1_slot3;
                            zuuluu = zuuluu[oscard];
                            zuuluu = report.bind(verify)(zuuluu);
                            zuuluu = zuuluu.APBRequestOperations;
                            zuuluu = zuuluu.CHARGE;
                            if(!(tangon !== zuuluu)) { _fun00014_ip = 121; continue _fun00013 }
 100:
                            zuuluu = {};
                            yankee = _closure4_slot0;
                            romeon = zuuluu;
                            tangon = copyDataProperties(romeon, yankee);
                            tangon = zuuluu;
                            _fun00014_ip = 248; continue _fun00013;
 121:
                            zuuluu = {};
                            option = _closure4_slot0;
                            report = option.sku_id;
                            zuuluu['sku_id'] = report;
                            report = option.country_code;
                            zuuluu['request_country_code'] = report;
                            oscard = _closure1_slot6;
                            report = _closure1_slot5;
                            yankee = oscard.bind(verify)(option, report);
                            romeon = zuuluu;
                            report = copyDataProperties(romeon, yankee);
                            tangon = zuuluu;
                            _fun00014_ip = 248; continue _fun00013;
 175:
                            oscard = _closure4_slot0;
                            offset = oscard.items;
                            report = oscard.country_code;
                            zuuluu = _closure1_slot6;
                            michal = _closure1_slot4;
                            yankee = zuuluu.bind(verify)(oscard, michal);
                            michal = {};
                            oscard = global;
                            option = oscard.JSON;
                            oscard = option.stringify;
                            oscard = oscard.bind(option)(offset);
                            michal['subscription_items_json_string'] = oscard;
                            michal['request_country_code'] = report;
                            romeon = michal;
                            zuuluu = copyDataProperties(romeon, yankee);
                            tangon = michal;
 248:
                            michal = _closure1_slot0;
                            zuuluu = _closure1_slot3;
                            entity = 35;
                            entity = zuuluu[entity];
                            zuuluu = michal.bind(verify)(entity);
                            michal = zuuluu.exact;
                            entity = {};
                            report = null;
                            option = report == golfie;
                            oscard = undefined;
                            if(option) { _fun00014_ip = 307; continue _fun00013 }
 287:
                            golfie = golfie.body;
                            option = report == golfie;
                            oscard = undefined;
                            if(option) { _fun00014_ip = 307; continue _fun00013 }
 301:
                            oscard = golfie.request_data;
 307:
                            golfie = report != oscard;
                            report = '';
                            if(!golfie) { _fun00014_ip = 321; continue _fun00013 }
 318:
                            report = oscard;
 321:
                            oscard = report.length;
                            report = 0;
                            report = oscard > report;
                            entity['jwt_token_exists'] = report;
                            romeon = entity;
                            yankee = tangon;
                            tangon = copyDataProperties(romeon, yankee);
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        }
                    };
                    report['properties'] = oscard;
                    michal['trackedActionData'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=142);
 140:
                    return michal;
 142:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00012_ip = 188; continue _fun00011 }
 148:
                    zuuluu = {};
                    tangon = global;
                    oscard = tangon.JSON;
                    report = oscard.stringify;
                    tangon = michal.body;
                    tangon = tangon.request_data;
                    tangon = report.bind(oscard)(tangon);
                    zuuluu['requestJSONString'] = tangon;
                    return zuuluu;
 188:
                    return michal;
 191:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot35 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot35 = entity;
    tangon = function() { // Original name: updateAppleSubscription
        entity = undefined;
        tangon = _closure1_slot37;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot36 = tangon;
    entity = function() { // Original name: _updateAppleSubscription
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    oscard = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00016_ip = 165; continue _fun00015 }
 15:
                    var _closure4_slot0 = oscard;
                    tangon = _closure1_slot1;
                    offset = _closure1_slot3;
                    michal = 32;
                    michal = offset[michal];
                    zuuluu = undefined;
                    report = tangon.bind(zuuluu)(michal);
                    tangon = report.patch;
                    michal = {};
                    romeon = _closure1_slot17;
                    yankee = romeon.BILLING_APPLE_SUBSCRIPTION;
                    verify = oscard.subscription_id;
                    verify = yankee.bind(romeon)(verify);
                    michal['url'] = verify;
                    michal['body'] = oscard;
                    oscard = true;
                    michal['oldFormErrors'] = oscard;
                    oscard = {};
                    verify = _closure1_slot0;
                    option = 33;
                    option = offset[option];
                    option = verify.bind(zuuluu)(option);
                    option = option.NetworkActionNames;
                    option = option.APPLE_JWT_TOKEN_CREATE;
                    oscard['event'] = option;
                    golfie = function(argFoo) { // Original name: properties
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            golfie = argFoo;
                            tangon = {};
                            offset = _closure4_slot0;
                            yankee = tangon;
                            entity = copyDataProperties(yankee, offset);
                            michal = _closure1_slot0;
                            zuuluu = _closure1_slot3;
                            entity = 35;
                            entity = zuuluu[entity];
                            verify = undefined;
                            zuuluu = michal.bind(verify)(entity);
                            michal = zuuluu.exact;
                            entity = {};
                            report = null;
                            option = report == golfie;
                            oscard = undefined;
                            if(option) { _fun00018_ip = 83; continue _fun00017 }
 63:
                            golfie = golfie.body;
                            option = report == golfie;
                            oscard = undefined;
                            if(option) { _fun00018_ip = 83; continue _fun00017 }
 77:
                            oscard = golfie.request_data;
 83:
                            golfie = report != oscard;
                            report = '';
                            if(!golfie) { _fun00018_ip = 97; continue _fun00017 }
 94:
                            report = oscard;
 97:
                            oscard = report.length;
                            report = 0;
                            report = oscard > report;
                            entity['jwt_token_exists'] = report;
                            yankee = entity;
                            offset = tangon;
                            tangon = copyDataProperties(yankee, offset);
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        }
                    };
                    oscard['properties'] = golfie;
                    michal['trackedActionData'] = oscard;
                    oscard = false;
                    michal['rejectWithError'] = oscard;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=153);
 151:
                    return michal;
 153:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00016_ip = 162; continue _fun00015 }
 159:
                    return zuuluu;
 162:
                    return michal;
 165:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot37 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot37 = entity;
    entity = function() { // Original name: _cancelGenericSubscription
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00020_ip = 300; continue _fun00019 }
 10:
                    verify = argFoo;
                    oscard = argBar;
                    michal = undefined;
                    option = undefined;
                    tangon = _closure1_slot31;
                    tangon = tangon.bind(michal)();
                    if(!tangon) { _fun00020_ip = 297; continue _fun00019 }
 37:
                    golfie = _closure1_slot0;
                    tangon = _closure1_slot3;
                    report = 36;
                    report = tangon[report];
                    report = golfie.bind(michal)(report);
                    report = report.ProductIds;
                    yankee = report.GENERIC_SUBSCRIPTION;
                    option = yankee;
                    report = _closure1_slot1;
                    golfie = 18;
                    tangon = tangon[golfie];
                    offset = report.bind(michal)(tangon);
                    report = offset.dispatch;
                    tangon = {};
                    romeon = 'IAP_PURCHASE_PRODUCT_START';
                    tangon['type'] = romeon;
                    tangon['productIdentifier'] = yankee;
                    tangon = report.bind(offset)(tangon);
 115: // try_start_0
                    report = _closure1_slot36;
                    tangon = {};
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot3;
                    offset = 34;
                    offset = romeon[offset];
                    offset = yankee.bind(michal)(offset);
                    offset = offset.APBRequestOperations;
                    offset = offset.CANCEL;
                    tangon['operation'] = offset;
                    tangon['request_identifier'] = verify;
                    tangon['subscription_id'] = oscard;
                    tangon = report.bind(michal)(tangon);
                    SaveGenerator(address=177);
 175:
                    return tangon;
 177:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00020_ip = 232; continue _fun00019 }
 183:
                    oscard = _closure1_slot1;
                    report = _closure1_slot3;
                    report = report[golfie];
                    verify = oscard.bind(michal)(report);
                    oscard = verify.dispatch;
                    report = {};
                    offset = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                    report['type'] = offset;
                    offset = option;
                    report['productIdentifier'] = offset;
                    report = oscard.bind(verify)(report);
 230: // try_end0
                    _fun00020_ip = 297; continue _fun00019;
 232:
                    return tangon;
 235: // catch_target0
                    CatchBlockStart(arg_register=4);
                    oscard = _closure1_slot1;
                    tangon = _closure1_slot3;
                    tangon = tangon[golfie];
                    golfie = oscard.bind(michal)(tangon);
                    oscard = golfie.dispatch;
                    tangon = {};
                    verify = 'IAP_PURCHASE_PRODUCT_FAILURE';
                    tangon['type'] = verify;
                    tangon['productIdentifier'] = option;
                    tangon = oscard.bind(golfie)(tangon);
                    tangon = _closure1_slot30;
                    zuuluu = 'partner_subscription';
                    zuuluu = tangon.bind(michal)(report, zuuluu);
 297:
                    return michal;
 300:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot38 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot38 = entity;
    entity = function(argFoo) { // Original name: isValidCurrency
        entity = global;
        zuuluu = entity.Object;
        michal = zuuluu.values;
        entity = _closure1_slot16;
        zuuluu = michal.bind(zuuluu)(entity);
        michal = zuuluu.includes;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot39 = entity;
    entity = function() { // Original name: _createGenericSubscription
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00022_ip = 614; continue _fun00021 }
 13:
                    oscard = michal.requestIdentifier;
                    offset = michal.items;
                    romeon = michal.currency;
                    yankee = michal.countryCode;
                    zuuluu = undefined;
                    verify = undefined;
                    foxtra = undefined;
                    SaveGenerator(address=47);
 45:
                    return zuuluu;
 47:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00022_ip = 611; continue _fun00021 }
 56:
                    report = _closure1_slot31;
                    report = report.bind(zuuluu)();
                    if(!report) { _fun00022_ip = 608; continue _fun00021 }
 73:
                    option = _closure1_slot0;
                    report = _closure1_slot3;
                    golfie = 36;
                    golfie = report[golfie];
                    golfie = option.bind(zuuluu)(golfie);
                    golfie = golfie.ProductIds;
                    kiloes = golfie.GENERIC_SUBSCRIPTION;
                    verify = kiloes;
                    golfie = _closure1_slot1;
                    option = 18;
                    report = report[option];
                    backup = golfie.bind(zuuluu)(report);
                    golfie = backup.dispatch;
                    report = {};
                    sizing = 'IAP_PURCHASE_PRODUCT_START';
                    report['type'] = sizing;
                    report['productIdentifier'] = kiloes;
                    report = golfie.bind(backup)(report);
 151: // try_start_0
                    golfie = _closure1_slot39;
                    report = romeon;
                    report = golfie.bind(zuuluu)(report);
                    if(report) { _fun00022_ip = 228; continue _fun00021 }
 166:
                    report = global;
                    backup = report.Error;
                    sizing = romeon;
                    report = report.HermesInternal;
                    kiloes = report.concat;
                    golfie = "Unable to create subscription with invalid currency '";
                    report = "' ";
                    echoed = kiloes.bind(golfie)(sizing, report);
                    golfie = backup.prototype;
                    golfie = Object.create(golfie, {constructor: {value: backup}});
                    update = golfie;
                    report = new update[backup](echoed, result);
                    report = report instanceof Object ? report : golfie;
                    throw report;
 228:
                    golfie = _closure1_slot34;
                    report = {};
                    kiloes = _closure1_slot0;
                    sizing = _closure1_slot3;
                    backup = 34;
                    backup = sizing[backup];
                    backup = kiloes.bind(zuuluu)(backup);
                    backup = backup.APBRequestOperations;
                    backup = backup.CREATE;
                    report['operation'] = backup;
                    backup = oscard;
                    report['request_identifier'] = backup;
                    kiloes = offset;
                    backup = kiloes.map;
                    offset = function(argFoo) {
                        michal = argFoo;
                        entity = {};
                        zuuluu = michal.planId;
                        entity['plan_id'] = zuuluu;
                        michal = michal.quantity;
                        entity['quantity'] = michal;
                        return entity;
                    };
                    offset = backup.bind(kiloes)(offset);
                    report['items'] = offset;
                    offset = romeon;
                    report['currency'] = offset;
                    offset = yankee;
                    report['country_code'] = offset;
                    report = golfie.bind(zuuluu)(report);
                    SaveGenerator(address=329);
 327:
                    return report;
 329:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golfie) { _fun00022_ip = 543; continue _fun00021 }
 338:
                    backup = report.requestJSONString;
                    offset = _closure1_slot32;
                    golfie = oscard;
                    oscard = verify;
                    oscard = offset.bind(zuuluu)(golfie, backup, oscard);
                    SaveGenerator(address=365);
 363:
                    return oscard;
 365:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(golfie) { _fun00022_ip = 540; continue _fun00021 }
 374:
                    backup = oscard.purchaseResponse;
                    foxtra = oscard.originalPurchase;
                    offset = _closure1_slot26;
                    golfie = {};
                    backup = backup.transactionReceipt;
                    golfie['encodedReceipt'] = backup;
                    backup = _closure1_slot21;
                    golfie['retries'] = backup;
                    golfie['presentmentCurrency'] = romeon;
                    golfie['appStoreRegion'] = yankee;
                    golfie = offset.bind(zuuluu)(golfie);
                    SaveGenerator(address=431);
 429:
                    return golfie;
 431:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                    if(offset) { _fun00022_ip = 537; continue _fun00021 }
 437:
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot3;
                    offset = 21;
                    offset = romeon[offset];
                    romeon = yankee.bind(zuuluu)(offset);
                    yankee = romeon.finishTransaction;
                    offset = {};
                    offset['purchase'] = foxtra;
                    offset = yankee.bind(romeon)(offset);
                    SaveGenerator(address=479);
 477:
                    return offset;
 479:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(yankee) { _fun00022_ip = 534; continue _fun00021 }
 485:
                    romeon = _closure1_slot1;
                    yankee = _closure1_slot3;
                    yankee = yankee[option];
                    foxtra = romeon.bind(zuuluu)(yankee);
                    romeon = foxtra.dispatch;
                    yankee = {};
                    backup = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                    yankee['type'] = backup;
                    backup = verify;
                    yankee['productIdentifier'] = backup;
                    yankee = romeon.bind(foxtra)(yankee);
 532: // try_end0
                    _fun00022_ip = 608; continue _fun00021;
 534:
                    return offset;
 537:
                    return golfie;
 540:
                    return oscard;
 543:
                    return report;
 546: // catch_target0
                    CatchBlockStart(arg_register=5);
                    golfie = _closure1_slot1;
                    report = _closure1_slot3;
                    report = report[option];
                    option = golfie.bind(zuuluu)(report);
                    golfie = option.dispatch;
                    report = {};
                    offset = 'IAP_PURCHASE_PRODUCT_FAILURE';
                    report['type'] = offset;
                    report['productIdentifier'] = verify;
                    report = golfie.bind(option)(report);
                    report = _closure1_slot30;
                    tangon = 'partner_subscription';
                    tangon = report.bind(zuuluu)(oscard, tangon);
 608:
                    return zuuluu;
 611:
                    return michal;
 614:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot40 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot40 = entity;
    entity = function() { // Original name: _resubscribeGenericSubscription
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00024_ip = 574; continue _fun00023 }
 13:
                    oscard = michal.requestIdentifier;
                    offset = michal.subscriptionId;
                    report = argBar;
                    zuuluu = undefined;
                    verify = undefined;
                    yankee = undefined;
                    foxtra = undefined;
                    SaveGenerator(address=40);
 38:
                    return zuuluu;
 40:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00024_ip = 571; continue _fun00023 }
 49:
                    golfie = _closure1_slot31;
                    golfie = golfie.bind(zuuluu)();
                    if(!golfie) { _fun00024_ip = 568; continue _fun00023 }
 66:
                    romeon = _closure1_slot0;
                    backup = _closure1_slot3;
                    golfie = 36;
                    golfie = backup[golfie];
                    golfie = romeon.bind(zuuluu)(golfie);
                    golfie = golfie.ProductIds;
                    output = golfie.GENERIC_SUBSCRIPTION;
                    verify = output;
                    kiloes = _closure1_slot1;
                    option = 18;
                    golfie = backup[option];
                    sizing = kiloes.bind(zuuluu)(golfie);
                    kiloes = sizing.dispatch;
                    golfie = {};
                    result = 'IAP_PURCHASE_PRODUCT_START';
                    golfie['type'] = result;
                    golfie['productIdentifier'] = output;
                    golfie = kiloes.bind(sizing)(golfie);
                    golfie = 37;
                    golfie = backup[golfie];
                    romeon = romeon.bind(zuuluu)(golfie);
                    golfie = romeon.enableReactivateAPI;
                    golfie = golfie.bind(romeon)();
                    backup = _closure1_slot0;
                    kiloes = _closure1_slot3;
                    romeon = 34;
                    romeon = kiloes[romeon];
                    romeon = backup.bind(zuuluu)(romeon);
                    romeon = romeon.APBRequestOperations;
                    if(golfie) { _fun00024_ip = 203; continue _fun00023 }
 195:
                    golfie = romeon.RESUBSCRIBE;
                    _fun00024_ip = 209; continue _fun00023;
 203:
                    golfie = romeon.REACTIVATE;
 209:
                    yankee = golfie;
 212: // try_start_0
                    if(report) { _fun00024_ip = 266; continue _fun00023 }
 215:
                    golfie = _closure1_slot36;
                    report = {};
                    romeon = yankee;
                    report['operation'] = romeon;
                    romeon = oscard;
                    report['request_identifier'] = romeon;
                    romeon = offset;
                    report['subscription_id'] = romeon;
                    report = golfie.bind(zuuluu)(report);
                    SaveGenerator(address=254);
 252:
                    return report;
 254:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(!golfie) { _fun00024_ip = 445; continue _fun00023 }
 263: // try_end0
                    return report;
 266: // try_start_1
                    golfie = _closure1_slot34;
                    report = {};
                    report['operation'] = yankee;
                    yankee = oscard;
                    report['request_identifier'] = yankee;
                    report['subscription_id'] = offset;
                    report = golfie.bind(zuuluu)(report);
                    SaveGenerator(address=299);
 297:
                    return report;
 299:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golfie) { _fun00024_ip = 503; continue _fun00023 }
 308:
                    yankee = report.requestJSONString;
                    offset = _closure1_slot32;
                    golfie = oscard;
                    oscard = verify;
                    oscard = offset.bind(zuuluu)(golfie, yankee, oscard);
                    SaveGenerator(address=335);
 333:
                    return oscard;
 335:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(golfie) { _fun00024_ip = 500; continue _fun00023 }
 344:
                    yankee = oscard.purchaseResponse;
                    foxtra = oscard.originalPurchase;
                    offset = _closure1_slot26;
                    golfie = {};
                    yankee = yankee.transactionReceipt;
                    golfie['encodedReceipt'] = yankee;
                    yankee = _closure1_slot21;
                    golfie['retries'] = yankee;
                    golfie = offset.bind(zuuluu)(golfie);
                    SaveGenerator(address=391);
 389:
                    return golfie;
 391:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                    if(offset) { _fun00024_ip = 497; continue _fun00023 }
 397:
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot3;
                    offset = 21;
                    offset = romeon[offset];
                    romeon = yankee.bind(zuuluu)(offset);
                    yankee = romeon.finishTransaction;
                    offset = {};
                    offset['purchase'] = foxtra;
                    offset = yankee.bind(romeon)(offset);
                    SaveGenerator(address=439);
 437:
                    return offset;
 439:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(yankee) { _fun00024_ip = 494; continue _fun00023 }
 445:
                    romeon = _closure1_slot1;
                    yankee = _closure1_slot3;
                    yankee = yankee[option];
                    foxtra = romeon.bind(zuuluu)(yankee);
                    romeon = foxtra.dispatch;
                    yankee = {};
                    backup = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                    yankee['type'] = backup;
                    backup = verify;
                    yankee['productIdentifier'] = backup;
                    yankee = romeon.bind(foxtra)(yankee);
 492: // try_end1
                    _fun00024_ip = 568; continue _fun00023;
 494:
                    return offset;
 497:
                    return golfie;
 500:
                    return oscard;
 503:
                    return report;
 506: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=5);
                    golfie = _closure1_slot1;
                    report = _closure1_slot3;
                    report = report[option];
                    option = golfie.bind(zuuluu)(report);
                    golfie = option.dispatch;
                    report = {};
                    offset = 'IAP_PURCHASE_PRODUCT_FAILURE';
                    report['type'] = offset;
                    report['productIdentifier'] = verify;
                    report = golfie.bind(option)(report);
                    report = _closure1_slot30;
                    tangon = 'partner_subscription';
                    tangon = report.bind(zuuluu)(oscard, tangon);
 568:
                    return zuuluu;
 571:
                    return michal;
 574:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot41 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot41 = entity;
    entity = function() { // Original name: _mobilePurchaseSKU
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tangon) { _fun00026_ip = 1016; continue _fun00025 }
 13:
                    foxtra = michal.requestIdentifier;
                    option = michal.skuId;
                    output = michal.currency;
                    golfie = michal.countryCode;
                    source = michal.analyticsLocations;
                    ctrled = michal.analyticsLoadId;
                    romeon = argBar;
                    oscard = undefined;
                    sizing = undefined;
                    echoed = undefined;
                    verify = undefined;
                    SaveGenerator(address=64);
 62:
                    return oscard;
 64:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00026_ip = 1013; continue _fun00025 }
 73:
                    offset = _closure1_slot31;
                    offset = offset.bind(oscard)();
                    if(offset) { _fun00026_ip = 92; continue _fun00025 }
 87:
                    offset = false;
                    return offset;
 92:
                    backup = _closure1_slot0;
                    kiloes = _closure1_slot3;
                    offset = 36;
                    offset = kiloes[offset];
                    offset = backup.bind(oscard)(offset);
                    offset = offset.ProductIds;
                    vacuum = offset.GENERIC_CONSUMABLE;
                    sizing = vacuum;
                    result = _closure1_slot1;
                    offset = 18;
                    yankee = kiloes[offset];
                    update = result.bind(oscard)(yankee);
                    result = update.dispatch;
                    yankee = {};
                    sequen = 'IAP_PURCHASE_PRODUCT_START';
                    yankee['type'] = sequen;
                    yankee['productIdentifier'] = vacuum;
                    yankee = result.bind(update)(yankee);
                    yankee = 38;
                    yankee = kiloes[yankee];
                    kiloes = backup.bind(oscard)(yankee);
                    backup = kiloes.trackPaymentFlowStartedAnalyticsAndCTP;
                    yankee = {};
                    result = option;
                    yankee['sku_id'] = result;
                    result = ctrled;
                    yankee['load_id'] = result;
                    result = source;
                    yankee['location_stack'] = result;
                    result = _closure1_slot18;
                    result = result.APPLE_PARTNER;
                    yankee['payment_gateway'] = result;
                    yankee = backup.bind(kiloes)(yankee);
 234: // try_start_0
                    backup = _closure1_slot39;
                    yankee = output;
                    yankee = backup.bind(oscard)(yankee);
                    if(yankee) { _fun00026_ip = 311; continue _fun00025 }
 249:
                    yankee = global;
                    kiloes = yankee.Error;
                    update = output;
                    yankee = yankee.HermesInternal;
                    result = yankee.concat;
                    backup = "Unable to create subscription with invalid currency '";
                    yankee = "' ";
                    cntext = result.bind(backup)(update, yankee);
                    backup = kiloes.prototype;
                    backup = Object.create(backup, {constructor: {value: kiloes}});
                    papara = backup;
                    yankee = new papara[kiloes](cntext, record);
                    yankee = yankee instanceof Object ? yankee : backup;
                    throw yankee;
 311:
                    backup = _closure1_slot34;
                    yankee = {};
                    result = _closure1_slot0;
                    update = _closure1_slot3;
                    kiloes = 34;
                    kiloes = update[kiloes];
                    kiloes = result.bind(oscard)(kiloes);
                    kiloes = kiloes.APBRequestOperations;
                    kiloes = kiloes.CHARGE;
                    yankee['operation'] = kiloes;
                    kiloes = option;
                    yankee['sku_id'] = kiloes;
                    kiloes = foxtra;
                    yankee['request_identifier'] = kiloes;
                    kiloes = output;
                    yankee['currency'] = kiloes;
                    kiloes = golfie;
                    yankee['country_code'] = kiloes;
                    yankee = backup.bind(oscard)(yankee);
                    SaveGenerator(address=395);
 393:
                    return yankee;
 395:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=13);
                    if(backup) { _fun00026_ip = 686; continue _fun00025 }
 404:
                    result = yankee.requestJSONString;
                    kiloes = _closure1_slot32;
                    backup = foxtra;
                    foxtra = sizing;
                    foxtra = kiloes.bind(oscard)(backup, result, foxtra);
                    SaveGenerator(address=431);
 429:
                    return foxtra;
 431:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=13);
                    if(backup) { _fun00026_ip = 683; continue _fun00025 }
 440:
                    result = foxtra.purchaseResponse;
                    echoed = foxtra.originalPurchase;
                    kiloes = _closure1_slot26;
                    backup = {};
                    result = result.transactionReceipt;
                    backup['encodedReceipt'] = result;
                    result = _closure1_slot21;
                    backup['retries'] = result;
                    backup['presentmentCurrency'] = output;
                    output = golfie;
                    backup['appStoreRegion'] = output;
                    backup = kiloes.bind(oscard)(backup);
                    SaveGenerator(address=500);
 498:
                    return backup;
 500:
                    ResumeGenerator(result_out_reg=13, return_bool_out_reg=14);
                    if(kiloes) { _fun00026_ip = 680; continue _fun00025 }
 509:
                    output = _closure1_slot0;
                    result = _closure1_slot3;
                    kiloes = 21;
                    kiloes = result[kiloes];
                    result = output.bind(oscard)(kiloes);
                    output = result.finishTransaction;
                    kiloes = {};
                    kiloes['purchase'] = echoed;
                    kiloes = output.bind(result)(kiloes);
                    SaveGenerator(address=551);
 549:
                    return kiloes;
 551:
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=16);
                    if(output) { _fun00026_ip = 677; continue _fun00025 }
 557:
                    result = _closure1_slot1;
                    echoed = _closure1_slot3;
                    output = echoed[offset];
                    vacuum = result.bind(oscard)(output);
                    update = vacuum.dispatch;
                    output = {};
                    sequen = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                    output['type'] = sequen;
                    sequen = sizing;
                    output['productIdentifier'] = sequen;
                    output = update.bind(vacuum)(output);
                    output = 25;
                    output = echoed[output];
                    update = result.bind(oscard)(output);
                    echoed = update.track;
                    output = _closure1_slot15;
                    result = output.PAYMENT_FLOW_COMPLETED;
                    output = {};
                    vacuum = option;
                    output['sku_id'] = vacuum;
                    output['load_id'] = ctrled;
                    output['location_stack'] = source;
                    source = _closure1_slot18;
                    source = source.APPLE_PARTNER;
                    output['payment_gateway'] = source;
                    output = echoed.bind(update)(result, output);
 672: // try_end0
                    output = true;
                    return output;
 677:
                    return kiloes;
 680:
                    return backup;
 683:
                    return foxtra;
 686:
                    return yankee;
 689: // catch_target0
                    CatchBlockStart(arg_register=14);
                    zuuluu = kiloes;
                    foxtra = _closure1_slot1;
                    yankee = _closure1_slot3;
                    offset = yankee[offset];
                    backup = foxtra.bind(oscard)(offset);
                    foxtra = backup.dispatch;
                    offset = {};
                    output = 'IAP_PURCHASE_PRODUCT_FAILURE';
                    offset['type'] = output;
                    offset['productIdentifier'] = sizing;
                    offset = foxtra.bind(backup)(offset);
                    backup = _closure1_slot0;
                    offset = 39;
                    offset = yankee[offset];
                    offset = backup.bind(oscard)(offset);
                    offset = offset.BillingError;
                    foxtra = offset.prototype;
                    foxtra = Object.create(foxtra, {constructor: {value: offset}});
                    papara = foxtra;
                    cntext = kiloes;
                    offset = new papara[offset](cntext, record);
                    offset = offset instanceof Object ? offset : foxtra;
                    foxtra = offset.code;
                    offset = 40;
                    yankee = yankee[offset];
                    yankee = backup.bind(oscard)(yankee);
                    yankee = yankee.ErrorCodes;
                    yankee = yankee.BILLING_CANNOT_CHARGE_ZERO_AMOUNT;
                    if(!(foxtra === yankee)) { _fun00026_ip = 991; continue _fun00025 }
 819:
                    foxtra = romeon;
                    yankee = null;
                    if(!(yankee == foxtra)) { _fun00026_ip = 856; continue _fun00025 }
 828:
                    foxtra = _closure1_slot0;
                    backup = _closure1_slot3;
                    yankee = 41;
                    yankee = backup[yankee];
                    yankee = foxtra.bind(oscard)(yankee);
                    yankee = yankee.purchaseSKU;
                    _fun00026_ip = 859; continue _fun00025;
 856:
                    yankee = romeon;
 859:
                    verify = yankee;
 862: // try_start_1
                    yankee = verify;
                    verify = option;
                    option = {};
                    option['countryCode'] = golfie;
                    golfie = 0;
                    option['expectedAmount'] = golfie;
                    golfie = 'collectibles';
                    golfie = yankee.bind(oscard)(golfie, verify, option);
                    SaveGenerator(address=897);
 895:
                    return golfie;
 897:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(option) { _fun00026_ip = 908; continue _fun00025 }
 903: // try_end1
                    option = true;
                    return option;
 908:
                    return golfie;
 911: // catch_target1
                    CatchBlockStart(arg_register=6);
                    report = golfie;
                    option = golfie.code;
                    verify = _closure1_slot0;
                    golfie = _closure1_slot3;
                    golfie = golfie[offset];
                    golfie = verify.bind(oscard)(golfie);
                    golfie = golfie.ErrorCodes;
                    golfie = golfie.BILLING_PURCHASE_REQUEST_INVALID;
                    if(!(option === golfie)) { _fun00026_ip = 991; continue _fun00025 }
 954:
                    option = _closure1_slot0;
                    verify = _closure1_slot3;
                    golfie = 14;
                    golfie = verify[golfie];
                    verify = option.bind(oscard)(golfie);
                    option = verify.captureBillingException;
                    golfie = report;
                    report = {};
                    report = option.bind(verify)(golfie, report);
 991:
                    report = _closure1_slot30;
                    tangon = zuuluu;
                    zuuluu = 'collectibles';
                    zuuluu = report.bind(oscard)(tangon, zuuluu);
                    zuuluu = false;
                    return zuuluu;
 1013:
                    return michal;
 1016:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot42 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot42 = entity;
    entity = ['items', 'country_code'];
    var _closure1_slot4 = entity;
    entity = ['sku_id', 'country_code'];
    var _closure1_slot5 = entity;
    option = global;
    kiloes = option.Object;
    backup = kiloes.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = backup.bind(kiloes)(zuuluu, entity, golfie);
    entity = 0;
    golfie = offset[entity];
    entity = undefined;
    golfie = foxtra.bind(entity)(golfie);
    var _closure1_slot6 = golfie;
    golfie = 1;
    golfie = offset[golfie];
    golfie = foxtra.bind(entity)(golfie);
    var _closure1_slot7 = golfie;
    golfie = 2;
    golfie = offset[golfie];
    golfie = yankee.bind(entity)(golfie);
    golfie = 3;
    yankee = offset[golfie];
    yankee = foxtra.bind(entity)(yankee);
    var _closure1_slot8 = yankee;
    yankee = 4;
    yankee = offset[yankee];
    yankee = foxtra.bind(entity)(yankee);
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
    yankee = foxtra.bind(entity)(yankee);
    var _closure1_slot12 = yankee;
    yankee = 7;
    yankee = offset[yankee];
    yankee = foxtra.bind(entity)(yankee);
    var _closure1_slot13 = yankee;
    yankee = 8;
    yankee = offset[yankee];
    yankee = foxtra.bind(entity)(yankee);
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
    var _closure1_slot21 = golfie;
    golfie = 'BILLING';
    var _closure1_slot22 = golfie;
    golfie = 12;
    golfie = offset[golfie];
    backup = foxtra.bind(entity)(golfie);
    golfie = backup.prototype;
    foxtra = Object.create(golfie, {constructor: {value: backup}});
    result = 'PremiumUtils.tsx';
    echoed = foxtra;
    golfie = new echoed[backup](result, output);
    golfie = golfie instanceof Object ? golfie : foxtra;
    var _closure1_slot23 = golfie;
    golfie = function() { // Original name: log
        entity = undefined;
        return entity;
    };
    var _closure1_slot24 = golfie;
    golfie = {};
    golfie['applyAppleReceipt'] = romeon;
    romeon = 19;
    foxtra = offset[romeon];
    foxtra = verify.bind(entity)(foxtra);
    foxtra = foxtra.fetchMostRecentSubscription;
    golfie['fetchMostRecentSubscription'] = foxtra;
    romeon = offset[romeon];
    romeon = verify.bind(entity)(romeon);
    romeon = romeon.fetchIpCountryCode;
    golfie['fetchIpCountryCode'] = romeon;
    golfie['restoreFromLocalReceipt'] = oscard;
    romeon = function() { // Original name: init
        michal = this;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot7;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00028_ip = 162; continue _fun00027 }
 10: // try_start_0
                    michal = global;
                    oscard = michal.Promise;
                    report = oscard.all;
                    option = _closure1_slot0;
                    verify = _closure1_slot3;
                    michal = 20;
                    michal = verify[michal];
                    tangon = undefined;
                    golfie = option.bind(tangon)(michal);
                    michal = golfie.fetchPremiumSubscriptionPlans;
                    golfie = michal.bind(golfie)();
                    michal = new Array(3);
                    michal[0] = golfie;
                    offset = _closure2_slot0;
                    golfie = offset.loadProducts;
                    golfie = golfie.bind(offset)();
                    michal[1] = golfie;
                    golfie = 19;
                    golfie = verify[golfie];
                    option = option.bind(tangon)(golfie);
                    golfie = option.fetchSubscriptions;
                    golfie = golfie.bind(option)();
                    michal[2] = golfie;
                    michal = report.bind(oscard)(michal);
                    SaveGenerator(address=123);
 121:
                    return michal;
 123:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00028_ip = 152; continue _fun00027 }
 129:
                    zuuluu = _closure1_slot28;
                    zuuluu = zuuluu.bind(tangon)();
                    SaveGenerator(address=141);
 139:
                    return zuuluu;
 141:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00028_ip = 149; continue _fun00027 }
 147: // try_end0
                    _fun00028_ip = 157; continue _fun00027;
 149:
                    return zuuluu;
 152:
                    return michal;
 155: // catch_target0
                    CatchBlockStart(arg_register=1);
 157:
                    michal = undefined;
                    return michal;
 162:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    golfie['init'] = romeon;
    romeon = function() { // Original name: connectGenericIap
        zuuluu = _closure1_slot7;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00030_ip = 202; continue _fun00029 }
 10:
                    tangon = _closure1_slot8;
                    zuuluu = tangon.isGenericIapConnected;
                    zuuluu = zuuluu.bind(tangon)();
 29: // try_start_0
                    tangon = _closure1_slot0;
                    report = _closure1_slot3;
                    zuuluu = 21;
                    zuuluu = report[zuuluu];
                    oscard = undefined;
                    tangon = tangon.bind(oscard)(zuuluu);
                    zuuluu = tangon.initConnection;
                    zuuluu = zuuluu.bind(tangon)();
                    SaveGenerator(address=65);
 63:
                    return zuuluu;
 65:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00030_ip = 121; continue _fun00029 }
 71:
                    report = _closure1_slot1;
                    golfie = _closure1_slot3;
                    tangon = 18;
                    tangon = golfie[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    golfie = 'GENERIC_IAP_INIT_CONNECTION';
                    tangon['type'] = golfie;
                    tangon['connected'] = zuuluu;
                    tangon = report.bind(oscard)(tangon);
 118: // try_end0
                    return zuuluu;
 121:
                    return zuuluu;
 124: // catch_target0
                    CatchBlockStart(arg_register=6);
                    oscard = _closure1_slot0;
                    report = _closure1_slot3;
                    zuuluu = 14;
                    zuuluu = report[zuuluu];
                    tangon = undefined;
                    oscard = oscard.bind(tangon)(zuuluu);
                    zuuluu = oscard.captureBillingException;
                    zuuluu = zuuluu.bind(oscard)(golfie);
                    zuuluu = _closure1_slot1;
                    michal = 18;
                    michal = report[michal];
                    tangon = zuuluu.bind(tangon)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    report = 'GENERIC_IAP_INIT_CONNECTION_FAILED';
                    michal['type'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    michal = false;
                    return michal;
 202:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    golfie['connectGenericIap'] = romeon;
    romeon = function() { // Original name: loadGenericProducts
        zuuluu = _closure1_slot7;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00032_ip = 151; continue _fun00031 }
 10: // try_start_0
                    tangon = _closure1_slot1;
                    report = _closure1_slot3;
                    michal = 15;
                    michal = report[michal];
                    report = undefined;
                    tangon = tangon.bind(report)(michal);
                    michal = tangon.loadGenericProducts;
                    michal = michal.bind(tangon)();
                    SaveGenerator(address=49);
 47:
                    return michal;
 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00032_ip = 105; continue _fun00031 }
 55:
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot3;
                    zuuluu = 18;
                    zuuluu = oscard[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'IAP_LOAD_GENERIC_PRODUCTS';
                    zuuluu['type'] = oscard;
                    zuuluu['products'] = michal;
                    zuuluu = tangon.bind(report)(zuuluu);
 102: // try_end0
                    return michal;
 105:
                    return michal;
 108: // catch_target0
                    CatchBlockStart(arg_register=3);
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot3;
                    michal = 14;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = report.bind(michal)(zuuluu);
                    michal = zuuluu.captureBillingException;
                    michal = michal.bind(zuuluu)(tangon);
                    michal = null;
                    return michal;
 151:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    golfie['loadGenericProducts'] = romeon;
    romeon = function() { // Original name: disconnectGenericIap
        zuuluu = _closure1_slot7;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00034_ip = 148; continue _fun00033 }
 10: // try_start_0
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot3;
                    michal = 21;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    michal = zuuluu.endConnection;
                    michal = michal.bind(zuuluu)();
                    SaveGenerator(address=49);
 47:
                    return michal;
 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00034_ip = 57; continue _fun00033 }
 55: // try_end0
                    _fun00034_ip = 98; continue _fun00033;
 57:
                    return michal;
 60: // catch_target0
                    CatchBlockStart(arg_register=3);
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot3;
                    michal = 14;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = report.bind(michal)(zuuluu);
                    michal = zuuluu.captureBillingException;
                    michal = michal.bind(zuuluu)(tangon);
 98:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot3;
                    michal = 18;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'GENERIC_IAP_END_CONNECTION';
                    zuuluu['type'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    return michal;
 148:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    golfie['disconnectGenericIap'] = romeon;
    romeon = function() { // Original name: loadProducts
        zuuluu = _closure1_slot7;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00036_ip = 150; continue _fun00035 }
 10: // try_start_0
                    tangon = _closure1_slot1;
                    report = _closure1_slot3;
                    michal = 15;
                    michal = report[michal];
                    report = undefined;
                    tangon = tangon.bind(report)(michal);
                    michal = tangon.loadProducts;
                    michal = michal.bind(tangon)();
                    SaveGenerator(address=49);
 47:
                    return michal;
 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00036_ip = 104; continue _fun00035 }
 55:
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot3;
                    zuuluu = 18;
                    zuuluu = oscard[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'IAP_LOAD_PRODUCTS';
                    zuuluu['type'] = oscard;
                    zuuluu['products'] = michal;
                    zuuluu = tangon.bind(report)(zuuluu);
 102: // try_end0
                    _fun00036_ip = 145; continue _fun00035;
 104:
                    return michal;
 107: // catch_target0
                    CatchBlockStart(arg_register=3);
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot3;
                    michal = 14;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = report.bind(michal)(zuuluu);
                    michal = zuuluu.captureBillingException;
                    michal = michal.bind(zuuluu)(tangon);
 145:
                    michal = undefined;
                    return michal;
 150:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    golfie['loadProducts'] = romeon;
    romeon = function(argFoo) { // Original name: createSubscription
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot7;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00038_ip = 1510; continue _fun00037 }
 12:
                    michal = undefined;
                    yankee = undefined;
                    backup = undefined;
                    echoed = undefined;
                    sizing = undefined;
                    sequen = undefined;
                    target = undefined;
                    foxtra = undefined;
                    golfie = undefined;
                    verify = undefined;
                    romeon = undefined;
                    result = undefined;
                    cntext = undefined;
                    vacuum = undefined;
                    ctrled = undefined;
                    source = undefined;
                    config = undefined;
                    record = undefined;
                    var _closure4_slot0 = michal;
                    tangon = _closure2_slot0;
                    yankee = tangon.productId;
                    backup = tangon.isGift;
                    echoed = tangon.giftInfoOptions;
                    sizing = tangon.baseAnalyticsData;
                    sequen = tangon.applicationId;
                    target = tangon.offerId;
                    foxtra = tangon.onPurchaseComplete;
                    golfie = tangon.onPurchaseError;
                    report = _closure1_slot14;
                    tangon = report.isBusy;
                    tangon = tangon.bind(report)();
                    if(tangon) { _fun00038_ip = 1507; continue _fun00037 }
 133:
                    report = _closure1_slot1;
                    option = _closure1_slot3;
                    tangon = 22;
                    tangon = option[tangon];
                    offset = report.bind(michal)(tangon);
                    option = offset.getCurrentConfig;
                    report = {};
                    tangon = '1ee357_1';
                    report['location'] = tangon;
                    tangon = {};
                    output = false;
                    tangon['autoTrackExposure'] = output;
                    tangon = option.bind(offset)(report, tangon);
                    option = tangon.paymentsBlocked;
                    tangon = _closure1_slot1;
                    report = _closure1_slot3;
                    if(option) { _fun00038_ip = 1491; continue _fun00037 }
 206:
                    offset = 18;
                    option = report[offset];
                    update = tangon.bind(michal)(option);
                    output = update.dispatch;
                    option = {};
                    papara = 'IAP_PURCHASE_PRODUCT_START';
                    option['type'] = papara;
                    papara = yankee;
                    option['productIdentifier'] = papara;
                    option = output.bind(update)(option);
 248: // try_start_0
                    output = _closure1_slot1;
                    option = _closure1_slot3;
                    papara = 15;
                    option = option[papara];
                    output = output.bind(michal)(option);
                    option = output.canMakePayments;
                    option = option.bind(output)();
                    SaveGenerator(address=282);
 280:
                    return option;
 282:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=16);
                    if(output) { _fun00038_ip = 1410; continue _fun00037 }
 291:
                    update = _closure1_slot13;
                    output = update.hasFetchedSubscriptions;
                    output = output.bind(update)();
                    if(output) { _fun00038_ip = 439; continue _fun00037 }
 311:
                    update = _closure1_slot0;
                    status = _closure1_slot3;
                    output = 19;
                    output = status[output];
                    update = update.bind(michal)(output);
                    output = update.fetchSubscriptions;
                    output = output.bind(update)();
                    SaveGenerator(address=345);
 343:
                    return output;
 345:
                    ResumeGenerator(result_out_reg=16, return_bool_out_reg=19);
                    if(update) { _fun00038_ip = 436; continue _fun00037 }
 351:
                    update = global;
                    sierra = update.Error;
                    whisks = _closure1_slot0;
                    equals = _closure1_slot3;
                    update = 24;
                    status = equals[update];
                    status = whisks.bind(michal)(status);
                    limora = status.intl;
                    status = limora.string;
                    update = equals[update];
                    update = whisks.bind(michal)(update);
                    update = update.t;
                    update = update.PjfUXV;
                    variable37 = status.bind(limora)(update);
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
                    if(!(output != update)) { _fun00038_ip = 1325; continue _fun00037 }
 464:
                    status = _closure1_slot0;
                    update = _closure1_slot3;
                    update = update[papara];
                    status = status.bind(michal)(update);
                    update = status.convertToUUID;
                    verify = verify.id;
                    romeon = update.bind(status)(verify);
                    result = undefined;
                    verify = target;
                    if(!(output != verify)) { _fun00038_ip = 616; continue _fun00037 }
 506:
                    sierra = yankee;
                    status = target;
                    update = romeon;
                    verify = function() { // Original name: getTrialOfferSignature
                        entity = undefined;
                        tangon = _closure1_slot27;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    verify = verify.bind(michal)(sierra, status, update);
                    SaveGenerator(address=531);
 529:
                    return verify;
 531:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=19);
                    if(update) { _fun00038_ip = 1322; continue _fun00037 }
 540:
                    cntext = verify;
                    if(!(output != verify)) { _fun00038_ip = 616; continue _fun00037 }
 547:
                    update = {};
                    update['identifier'] = target;
                    target = cntext.key_id;
                    update['keyIdentifier'] = target;
                    target = cntext.nonce;
                    update['nonce'] = target;
                    target = cntext.signature;
                    update['signature'] = target;
                    target = global;
                    target = target.Number;
                    cntext = cntext.timestamp;
                    cntext = target.bind(michal)(cntext);
                    update['timestamp'] = cntext;
                    result = update;
 616:
                    cntext = _closure1_slot1;
                    update = _closure1_slot3;
                    update = update[papara];
                    papara = cntext.bind(michal)(update);
                    cntext = papara.purchaseProduct;
                    update = yankee;
                    romeon = cntext.bind(papara)(update, result, romeon);
                    SaveGenerator(address=653);
 651:
                    return romeon;
 653:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=17);
                    if(result) { _fun00038_ip = 1319; continue _fun00037 }
 662:
                    vacuum = romeon;
                    update = _closure1_slot1;
                    result = _closure1_slot3;
                    cntext = 17;
                    cntext = result[cntext];
                    target = update.bind(michal)(cntext);
                    papara = target.v3;
                    cntext = romeon.transactionReceipt;
                    papara = papara.bind(target)(cntext);
                    ctrled = papara;
                    result = result[offset];
                    cntext = update.bind(michal)(result);
                    update = cntext.dispatch;
                    result = {};
                    target = 'GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION';
                    result['type'] = target;
                    result['key'] = papara;
                    papara = {};
                    variable36 = echoed;
                    variable37 = papara;
                    target = copyDataProperties(variable37, variable36);
                    result['giftOptions'] = papara;
                    result = update.bind(cntext)(result);
                    result = foxtra;
                    if(!(output != result)) { _fun00038_ip = 768; continue _fun00037 }
 764:
                    foxtra = foxtra.bind(michal)();
 768:
                    update = _closure1_slot14;
                    result = update.getProduct;
                    foxtra = yankee;
                    foxtra = result.bind(update)(foxtra);
                    source = foxtra;
                    result = output == foxtra;
                    foxtra = undefined;
                    if(result) { _fun00038_ip = 807; continue _fun00037 }
 798:
                    result = source;
                    foxtra = result.price;
 807:
                    config = foxtra;
                    foxtra = source;
                    foxtra = output == foxtra;
                    update = undefined;
                    if(foxtra) { _fun00038_ip = 831; continue _fun00037 }
 822:
                    foxtra = source;
                    update = foxtra.currencyCode;
 831:
                    record = update;
                    result = _closure1_slot26;
                    foxtra = {};
                    vacuum = vacuum.transactionReceipt;
                    foxtra['encodedReceipt'] = vacuum;
                    vacuum = _closure1_slot21;
                    foxtra['retries'] = vacuum;
                    foxtra['presentmentCurrency'] = update;
                    update = config;
                    foxtra['presentmentAmount'] = update;
                    update = source;
                    vacuum = output == update;
                    update = undefined;
                    if(vacuum) { _fun00038_ip = 891; continue _fun00037 }
 885:
                    update = source.countryCode;
 891:
                    foxtra['appStoreRegion'] = update;
                    foxtra['giftInfoOptions'] = echoed;
                    foxtra = result.bind(michal)(foxtra);
                    SaveGenerator(address=910);
 908:
                    return foxtra;
 910:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=17);
                    if(result) { _fun00038_ip = 1316; continue _fun00037 }
 919:
                    result = _closure1_slot10;
                    result = result.bind(michal)();
                    echoed = _closure1_slot1;
                    vacuum = _closure1_slot3;
                    result = vacuum[offset];
                    source = echoed.bind(michal)(result);
                    update = source.dispatch;
                    result = {};
                    cntext = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                    result['type'] = cntext;
                    result['key'] = ctrled;
                    result = update.bind(source)(result);
                    result = 25;
                    result = vacuum[result];
                    update = echoed.bind(michal)(result);
                    echoed = update.track;
                    result = _closure1_slot15;
                    result = result.PAYMENT_FLOW_COMPLETED;
                    ctrled = _closure1_slot0;
                    source = 26;
                    source = vacuum[source];
                    vacuum = ctrled.bind(michal)(source);
                    ctrled = vacuum.getPaymentFlowCompletedAnalyticsFields;
                    source = sizing;
                    sizing = {};
                    cntext = yankee;
                    sizing['subscription_plan_gateway_plan_id'] = cntext;
                    sizing['price'] = config;
                    sizing['regular_price'] = config;
                    config = record;
                    cntext = output == config;
                    config = undefined;
                    if(cntext) { _fun00038_ip = 1067; continue _fun00037 }
 1054:
                    cntext = record;
                    record = cntext.toLowerCase;
                    config = record.bind(cntext)();
 1067:
                    sizing['currency'] = config;
                    sizing['application_id'] = sequen;
                    sizing = ctrled.bind(vacuum)(source, sizing);
                    sizing = echoed.bind(update)(result, sizing);
                    result = _closure1_slot1;
                    sizing = _closure1_slot3;
                    sizing = sizing[offset];
                    echoed = result.bind(michal)(sizing);
                    result = echoed.dispatch;
                    sizing = {};
                    update = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                    sizing['type'] = update;
                    update = yankee;
                    sizing['productIdentifier'] = update;
                    sizing = result.bind(echoed)(sizing);
                    if(backup) { _fun00038_ip = 1311; continue _fun00037 }
 1142:
                    sizing = _closure1_slot0;
                    result = _closure1_slot3;
                    backup = 19;
                    backup = result[backup];
                    sizing = sizing.bind(michal)(backup);
                    backup = sizing.fetchSubscriptions;
                    backup = backup.bind(sizing)();
                    SaveGenerator(address=1176);
 1174:
                    return backup;
 1176:
                    ResumeGenerator(result_out_reg=13, return_bool_out_reg=15);
                    if(sizing) { _fun00038_ip = 1308; continue _fun00037 }
 1185:
                    result = _closure1_slot13;
                    sizing = result.getPremiumSubscription;
                    sizing = sizing.bind(result)();
                    _closure4_slot0 = sizing;
                    if(!(output != sizing)) { _fun00038_ip = 1223; continue _fun00037 }
 1207:
                    sizing = _closure1_slot11;
                    kiloes = function() {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot3;
                        entity = 27;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.openLazy;
                        michal = {};
                        report = function() { // Original name: importer
                            zuuluu = _closure1_slot0;
                            entity = _closure1_slot3;
                            michal = 29;
                            michal = entity[michal];
                            tangon = undefined;
                            zuuluu = zuuluu.bind(tangon)(michal);
                            michal = 28;
                            michal = entity[michal];
                            entity = entity.paths;
                            zuuluu = zuuluu.bind(tangon)(michal, entity);
                            michal = zuuluu.then;
                            entity = function(argFoo) {
                                michal = argFoo;
                                michal = michal.default;
                                var _closure7_slot0 = michal;
                                entity = function(argFoo) {
                                    tangon = _closure1_slot19;
                                    zuuluu = _closure7_slot0;
                                    michal = {};
                                    oscard = argFoo;
                                    golfie = michal;
                                    entity = copyDataProperties(golfie, oscard);
                                    report = _closure4_slot0;
                                    entity = 'subscription';
                                    michal[entity] = report;
                                    entity = undefined;
                                    entity = tangon.bind(entity)(zuuluu, michal);
                                    return entity;
                                };
                                return entity;
                            };
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        michal['importer'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    kiloes = sizing.bind(michal)(kiloes);
                    _fun00038_ip = 1311; continue _fun00037;
 1223:
                    kiloes = global;
                    output = kiloes.Error;
                    echoed = _closure1_slot0;
                    update = _closure1_slot3;
                    kiloes = 24;
                    sizing = update[kiloes];
                    sizing = echoed.bind(michal)(sizing);
                    result = sizing.intl;
                    sizing = result.string;
                    kiloes = update[kiloes];
                    kiloes = echoed.bind(michal)(kiloes);
                    kiloes = kiloes.t;
                    kiloes = kiloes.PjfUXV;
                    variable37 = sizing.bind(result)(kiloes);
                    sizing = output.prototype;
                    sizing = Object.create(sizing, {constructor: {value: output}});
                    variable38 = sizing;
                    kiloes = new variable38[output](variable37, variable36);
                    kiloes = kiloes instanceof Object ? kiloes : sizing;
                    throw kiloes;
 1308: // try_end1
                    return backup;
 1311:
                    _fun00038_ip = 1507; continue _fun00037;
 1316:
                    return foxtra;
 1319:
                    return romeon;
 1322:
                    return verify;
 1325: // try_start_2
                    verify = global;
                    foxtra = verify.Error;
                    kiloes = _closure1_slot0;
                    sizing = _closure1_slot3;
                    verify = 24;
                    romeon = sizing[verify];
                    romeon = kiloes.bind(michal)(romeon);
                    backup = romeon.intl;
                    romeon = backup.string;
                    verify = sizing[verify];
                    verify = kiloes.bind(michal)(verify);
                    verify = verify.t;
                    verify = verify.PjfUXV;
                    variable37 = romeon.bind(backup)(verify);
                    romeon = foxtra.prototype;
                    romeon = Object.create(romeon, {constructor: {value: foxtra}});
                    variable38 = romeon;
                    verify = new variable38[foxtra](variable37, variable36);
                    verify = verify instanceof Object ? verify : romeon;
                    throw verify;
 1410: // try_end2
                    return option;
 1413: // catch_target0 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=2);
                    verify = _closure1_slot1;
                    option = _closure1_slot3;
                    option = option[offset];
                    offset = verify.bind(michal)(option);
                    verify = offset.dispatch;
                    option = {};
                    romeon = 'IAP_PURCHASE_PRODUCT_FAILURE';
                    option['type'] = romeon;
                    option['productIdentifier'] = yankee;
                    option = verify.bind(offset)(option);
                    verify = golfie;
                    option = null;
                    if(!(option != verify)) { _fun00038_ip = 1472; continue _fun00037 }
 1468:
                    golfie = golfie.bind(michal)();
 1472:
                    golfie = _closure1_slot30;
                    oscard = zuuluu;
                    zuuluu = 'subscription';
                    zuuluu = golfie.bind(michal)(oscard, zuuluu);
                    _fun00038_ip = 1507; continue _fun00037;
 1491:
                    zuuluu = 23;
                    zuuluu = report[zuuluu];
                    zuuluu = tangon.bind(michal)(zuuluu);
                    zuuluu = zuuluu.bind(michal)();
 1507:
                    return michal;
 1510:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    golfie['createSubscription'] = romeon;
    romeon = function() { // Original name: backgroundRestoreReceipt
        michal = this;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot7;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00040_ip = 411; continue _fun00039 }
 10:
                    tangon = _closure1_slot14;
                    michal = tangon.isBusy;
                    michal = michal.bind(tangon)();
                    if(michal) { _fun00040_ip = 406; continue _fun00039 }
 33:
                    tangon = _closure1_slot1;
                    michal = _closure1_slot3;
                    oscard = 18;
                    michal = michal[oscard];
                    report = undefined;
                    golfie = tangon.bind(report)(michal);
                    tangon = golfie.dispatch;
                    michal = {};
                    option = 'IAP_RESTORE_PURCHASES_START';
                    michal['type'] = option;
                    michal = tangon.bind(golfie)(michal);
 77: // try_start_0 // try_start_1
                    tangon = _closure2_slot0;
                    michal = tangon.loadProducts;
                    michal = michal.bind(tangon)();
                    SaveGenerator(address=98);
 96:
                    return michal;
 98:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00040_ip = 257; continue _fun00039 }
 107:
                    tangon = _closure1_slot28;
                    tangon = tangon.bind(report)();
                    SaveGenerator(address=119);
 117:
                    return tangon;
 119:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golfie) { _fun00040_ip = 215; continue _fun00039 }
 125:
                    if(!tangon) { _fun00040_ip = 168; continue _fun00039 }
 128:
                    option = _closure1_slot0;
                    verify = _closure1_slot3;
                    golfie = 19;
                    golfie = verify[golfie];
                    option = option.bind(report)(golfie);
                    golfie = option.fetchSubscriptions;
                    golfie = golfie.bind(option)();
                    SaveGenerator(address=162);
 160:
                    return golfie;
 162:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(option) { _fun00040_ip = 173; continue _fun00039 }
 168: // try_end0
                    _fun00040_ip = 322; continue _fun00039;
 173: // try_end1
                    verify = _closure1_slot1;
                    option = _closure1_slot3;
                    option = option[oscard];
                    offset = verify.bind(report)(option);
                    verify = offset.dispatch;
                    option = {};
                    yankee = 'IAP_RESTORE_PURCHASES_END';
                    option['type'] = yankee;
                    option = verify.bind(offset)(option);
                    return golfie;
 215:
                    option = _closure1_slot1;
                    golfie = _closure1_slot3;
                    golfie = golfie[oscard];
                    verify = option.bind(report)(golfie);
                    option = verify.dispatch;
                    golfie = {};
                    offset = 'IAP_RESTORE_PURCHASES_END';
                    golfie['type'] = offset;
                    golfie = option.bind(verify)(golfie);
                    return tangon;
 257:
                    golfie = _closure1_slot1;
                    tangon = _closure1_slot3;
                    tangon = tangon[oscard];
                    option = golfie.bind(report)(tangon);
                    golfie = option.dispatch;
                    tangon = {};
                    verify = 'IAP_RESTORE_PURCHASES_END';
                    tangon['type'] = verify;
                    tangon = golfie.bind(option)(tangon);
                    return michal;
 299: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=1);
                    golfie = _closure1_slot23;
                    tangon = golfie.verbose;
                    michal = 'Unable to restore apple receipts';
                    michal = tangon.bind(golfie)(michal);
 322: // try_end2
                    tangon = _closure1_slot1;
                    michal = _closure1_slot3;
                    michal = michal[oscard];
                    golfie = tangon.bind(report)(michal);
                    tangon = golfie.dispatch;
                    michal = {};
                    option = 'IAP_RESTORE_PURCHASES_END';
                    michal['type'] = option;
                    michal = tangon.bind(golfie)(michal);
                    _fun00040_ip = 406; continue _fun00039;
 363: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot3;
                    zuuluu = zuuluu[oscard];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'IAP_RESTORE_PURCHASES_END';
                    zuuluu['type'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    throw michal;
 406:
                    michal = undefined;
                    return michal;
 411:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    golfie['backgroundRestoreReceipt'] = romeon;
    romeon = function() { // Original name: restoreSubscription
        michal = this;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot7;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00042_ip = 1006; continue _fun00041 }
 12:
                    michal = undefined;
                    verify = undefined;
                    report = _closure1_slot14;
                    zuuluu = report.isBusy;
                    zuuluu = zuuluu.bind(report)();
                    if(zuuluu) { _fun00042_ip = 1003; continue _fun00041 }
 39:
                    report = _closure1_slot1;
                    zuuluu = _closure1_slot3;
                    oscard = 18;
                    zuuluu = zuuluu[oscard];
                    golfie = report.bind(michal)(zuuluu);
                    report = golfie.dispatch;
                    zuuluu = {};
                    offset = 'IAP_RESTORE_PURCHASES_START';
                    zuuluu['type'] = offset;
                    zuuluu = report.bind(golfie)(zuuluu);
 81: // try_start_0 // try_start_2
                    report = _closure2_slot0;
                    zuuluu = report.loadProducts;
                    zuuluu = zuuluu.bind(report)();
                    SaveGenerator(address=102);
 100:
                    return zuuluu;
 102:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00042_ip = 737; continue _fun00041 }
 111:
                    report = _closure1_slot28;
                    report = report.bind(michal)();
                    SaveGenerator(address=123);
 121:
                    return report;
 123:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golfie) { _fun00042_ip = 695; continue _fun00041 }
 132:
                    offset = _closure1_slot1;
                    yankee = _closure1_slot3;
                    golfie = 15;
                    golfie = yankee[golfie];
                    offset = offset.bind(michal)(golfie);
                    golfie = offset.restorePurchases;
                    golfie = golfie.bind(offset)();
                    SaveGenerator(address=166);
 164:
                    return golfie;
 166:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                    if(offset) { _fun00042_ip = 653; continue _fun00041 }
 175:
                    verify = golfie;
                    yankee = golfie.length;
                    offset = 0;
                    if(!(offset !== yankee)) { _fun00042_ip = 508; continue _fun00041 }
 192:
                    yankee = _closure1_slot1;
                    romeon = _closure1_slot3;
                    offset = 30;
                    offset = romeon[offset];
                    offset = yankee.bind(michal)(offset);
                    yankee = offset.bind(michal)(verify);
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
                    option = function(argFoo) {
                        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                            report = argFoo;
                            oscard = _closure1_slot14;
                            tangon = oscard.getProduct;
                            zuuluu = report.productIdentifier;
                            option = tangon.bind(oscard)(zuuluu);
                            oscard = _closure1_slot1;
                            tangon = _closure1_slot3;
                            zuuluu = 17;
                            zuuluu = tangon[zuuluu];
                            tangon = undefined;
                            golfie = oscard.bind(tangon)(zuuluu);
                            oscard = golfie.v3;
                            zuuluu = report.transactionReceipt;
                            golfie = oscard.bind(golfie)(zuuluu);
                            var _closure5_slot0 = golfie;
                            oscard = _closure1_slot9;
                            zuuluu = oscard.getGiftOptionsForKey;
                            golfie = zuuluu.bind(oscard)(golfie);
                            zuuluu = _closure1_slot26;
                            michal = {};
                            report = report.transactionReceipt;
                            michal['encodedReceipt'] = report;
                            oscard = null;
                            verify = oscard == option;
                            report = undefined;
                            if(verify) { _fun00044_ip = 121; continue _fun00043 }
 115:
                            report = option.currencyCode;
 121:
                            michal['presentmentCurrency'] = report;
                            verify = oscard == option;
                            report = undefined;
                            if(verify) { _fun00044_ip = 141; continue _fun00043 }
 135:
                            report = option.price;
 141:
                            michal['presentmentAmount'] = report;
                            verify = oscard == option;
                            report = undefined;
                            if(verify) { _fun00044_ip = 161; continue _fun00043 }
 155:
                            report = option.countryCode;
 161:
                            michal['appStoreRegion'] = report;
                            report = {};
                            verify = oscard == golfie;
                            option = undefined;
                            if(verify) { _fun00044_ip = 183; continue _fun00043 }
 177:
                            option = golfie.gift_style;
 183:
                            report['gift_style'] = option;
                            option = oscard == golfie;
                            oscard = undefined;
                            if(option) { _fun00044_ip = 203; continue _fun00043 }
 197:
                            oscard = golfie.reward_sku_ids;
 203:
                            report['reward_sku_ids'] = oscard;
                            michal['giftInfoOptions'] = report;
                            zuuluu = zuuluu.bind(tangon)(michal);
                            michal = zuuluu.then;
                            entity = function() {
                                zuuluu = _closure1_slot1;
                                michal = _closure1_slot3;
                                entity = 18;
                                michal = michal[entity];
                                entity = undefined;
                                tangon = zuuluu.bind(entity)(michal);
                                zuuluu = tangon.dispatch;
                                michal = {};
                                report = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                                michal['type'] = report;
                                report = _closure5_slot0;
                                michal['key'] = report;
                                michal = zuuluu.bind(tangon)(michal);
                                return entity;
                            };
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        }
                    };
                    offset = verify.bind(offset)(option);
                    option = global;
                    verify = option.Promise;
                    option = verify.all;
                    option = option.bind(verify)(offset);
                    SaveGenerator(address=280);
 278:
                    return option;
 280:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(verify) { _fun00042_ip = 466; continue _fun00041 }
 289:
                    offset = _closure1_slot0;
                    yankee = _closure1_slot3;
                    verify = 19;
                    verify = yankee[verify];
                    offset = offset.bind(michal)(verify);
                    verify = offset.fetchSubscriptions;
                    verify = verify.bind(offset)();
                    SaveGenerator(address=323);
 321:
                    return verify;
 323:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=9);
                    if(offset) { _fun00042_ip = 424; continue _fun00041 }
 329:
                    yankee = _closure1_slot1;
                    output = _closure1_slot3;
                    offset = 27;
                    offset = output[offset];
                    romeon = yankee.bind(michal)(offset);
                    yankee = romeon.show;
                    offset = {};
                    sizing = _closure1_slot0;
                    foxtra = 24;
                    backup = output[foxtra];
                    backup = sizing.bind(michal)(backup);
                    kiloes = backup.intl;
                    backup = kiloes.string;
                    foxtra = output[foxtra];
                    foxtra = sizing.bind(michal)(foxtra);
                    foxtra = foxtra.t;
                    foxtra = foxtra.pnRpIS;
                    foxtra = backup.bind(kiloes)(foxtra);
                    offset['body'] = foxtra;
                    offset = yankee.bind(romeon)(offset);
                    _fun00042_ip = 648; continue _fun00041;
 424: // try_end0 // try_end2
                    yankee = _closure1_slot1;
                    offset = _closure1_slot3;
                    offset = offset[oscard];
                    romeon = yankee.bind(michal)(offset);
                    yankee = romeon.dispatch;
                    offset = {};
                    foxtra = 'IAP_RESTORE_PURCHASES_END';
                    offset['type'] = foxtra;
                    offset = yankee.bind(romeon)(offset);
                    return verify;
 466:
                    offset = _closure1_slot1;
                    verify = _closure1_slot3;
                    verify = verify[oscard];
                    yankee = offset.bind(michal)(verify);
                    offset = yankee.dispatch;
                    verify = {};
                    romeon = 'IAP_RESTORE_PURCHASES_END';
                    verify['type'] = romeon;
                    verify = offset.bind(yankee)(verify);
                    return option;
 508: // try_start_1 // try_start_3
                    verify = _closure1_slot1;
                    kiloes = _closure1_slot3;
                    option = 27;
                    option = kiloes[option];
                    offset = verify.bind(michal)(option);
                    verify = offset.show;
                    option = {};
                    backup = _closure1_slot0;
                    yankee = 24;
                    romeon = kiloes[yankee];
                    romeon = backup.bind(michal)(romeon);
                    sizing = romeon.intl;
                    foxtra = sizing.string;
                    romeon = kiloes[yankee];
                    romeon = backup.bind(michal)(romeon);
                    romeon = romeon.t;
                    romeon = romeon.WXkaoK;
                    romeon = foxtra.bind(sizing)(romeon);
                    option['title'] = romeon;
                    romeon = kiloes[yankee];
                    romeon = backup.bind(michal)(romeon);
                    foxtra = romeon.intl;
                    romeon = foxtra.string;
                    yankee = kiloes[yankee];
                    yankee = backup.bind(michal)(yankee);
                    yankee = yankee.t;
                    yankee = yankee.YW7lqa;
                    yankee = romeon.bind(foxtra)(yankee);
                    option['body'] = yankee;
                    option = verify.bind(offset)(option);
 648: // try_end1
                    _fun00042_ip = 919; continue _fun00041;
 653: // try_end3
                    verify = _closure1_slot1;
                    option = _closure1_slot3;
                    option = option[oscard];
                    offset = verify.bind(michal)(option);
                    verify = offset.dispatch;
                    option = {};
                    yankee = 'IAP_RESTORE_PURCHASES_END';
                    option['type'] = yankee;
                    option = verify.bind(offset)(option);
                    return golfie;
 695:
                    option = _closure1_slot1;
                    golfie = _closure1_slot3;
                    golfie = golfie[oscard];
                    verify = option.bind(michal)(golfie);
                    option = verify.dispatch;
                    golfie = {};
                    offset = 'IAP_RESTORE_PURCHASES_END';
                    golfie['type'] = offset;
                    golfie = option.bind(verify)(golfie);
                    return report;
 737:
                    golfie = _closure1_slot1;
                    report = _closure1_slot3;
                    report = report[oscard];
                    option = golfie.bind(michal)(report);
                    golfie = option.dispatch;
                    report = {};
                    verify = 'IAP_RESTORE_PURCHASES_END';
                    report['type'] = verify;
                    report = golfie.bind(option)(report);
                    return zuuluu;
 779: // try_start_4 // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=2);
                    report = _closure1_slot1;
                    romeon = _closure1_slot3;
                    zuuluu = 27;
                    zuuluu = romeon[zuuluu];
                    golfie = report.bind(michal)(zuuluu);
                    report = golfie.show;
                    zuuluu = {};
                    yankee = _closure1_slot0;
                    option = 24;
                    verify = romeon[option];
                    verify = yankee.bind(michal)(verify);
                    foxtra = verify.intl;
                    offset = foxtra.string;
                    verify = romeon[option];
                    verify = yankee.bind(michal)(verify);
                    verify = verify.t;
                    verify = verify.POsVOj;
                    verify = offset.bind(foxtra)(verify);
                    zuuluu['title'] = verify;
                    verify = romeon[option];
                    verify = yankee.bind(michal)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    option = romeon[option];
                    option = yankee.bind(michal)(option);
                    option = option.t;
                    option = option.XbE/Ex;
                    option = verify.bind(offset)(option);
                    zuuluu['body'] = option;
                    zuuluu = report.bind(golfie)(zuuluu);
 919: // try_end4
                    report = _closure1_slot1;
                    zuuluu = _closure1_slot3;
                    zuuluu = zuuluu[oscard];
                    golfie = report.bind(michal)(zuuluu);
                    report = golfie.dispatch;
                    zuuluu = {};
                    option = 'IAP_RESTORE_PURCHASES_END';
                    zuuluu['type'] = option;
                    zuuluu = report.bind(golfie)(zuuluu);
                    _fun00042_ip = 1003; continue _fun00041;
 960: // catch_target2 // catch_target3 // catch_target4
                    CatchBlockStart(arg_register=2);
                    report = _closure1_slot1;
                    tangon = _closure1_slot3;
                    tangon = tangon[oscard];
                    oscard = report.bind(michal)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    golfie = 'IAP_RESTORE_PURCHASES_END';
                    tangon['type'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    throw zuuluu;
 1003:
                    return michal;
 1006:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    golfie['restoreSubscription'] = romeon;
    romeon = option.Set;
    option = 21;
    option = offset[option];
    option = verify.bind(entity)(option);
    option = option.ErrorCode;
    foxtra = option.E_USER_CANCELLED;
    option = new Array(2);
    option[0] = foxtra;
    yankee = yankee.PAYMENT_CANCELED;
    option[1] = yankee;
    yankee = romeon.prototype;
    yankee = Object.create(yankee, {constructor: {value: romeon}});
    echoed = yankee;
    result = option;
    option = new echoed[romeon](result, output);
    option = option instanceof Object ? option : yankee;
    var _closure1_slot25 = option;
    option = 42;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'actions/native/BillingActionCreators.tsx';
    option = verify.bind(offset)(option);
    zuuluu['default'] = golfie;
    zuuluu['restoreFromLocalReceipt'] = oscard;
    zuuluu['getIAPJWTRequestData'] = report;
    zuuluu['updateAppleSubscription'] = tangon;
    tangon = function() { // Original name: cancelGenericSubscription
        entity = undefined;
        tangon = _closure1_slot38;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['cancelGenericSubscription'] = tangon;
    tangon = function() { // Original name: createGenericSubscription
        entity = undefined;
        tangon = _closure1_slot40;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['createGenericSubscription'] = tangon;
    tangon = function() { // Original name: resubscribeGenericSubscription
        entity = undefined;
        tangon = _closure1_slot41;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['resubscribeGenericSubscription'] = tangon;
    michal = function() { // Original name: mobilePurchaseSKU
        entity = undefined;
        tangon = _closure1_slot42;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['mobilePurchaseSKU'] = michal;
    return entity;
})();