// app/modules/gplay/native/GPlayManager.android.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    verify = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: handleConnectionStateUpdated
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            tangon = entity.connectionState;
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 13;
            zuuluu = zuuluu[entity];
            entity = undefined;
            oscard = report.bind(entity)(zuuluu);
            report = oscard.dispatch;
            zuuluu = {};
            golfie = 'GPLAY_UPDATE_CONNECTION_STATE';
            zuuluu['type'] = golfie;
            zuuluu['connectionState'] = tangon;
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = _closure1_slot11;
            zuuluu = zuuluu.CONNECTED;
            if(!(tangon === zuuluu)) { _fun00002_ip = 105; continue _fun00001 }
 75:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 14;
            michal = tangon[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.loadSkus;
            michal = michal.bind(zuuluu)();
 105:
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo) { // Original name: handlePurchaseStateUpdated
        entity = argFoo;
        report = entity.billingResult;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 13;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        oscard = 'GPLAY_UPDATE_PURCHASE_STATE';
        michal['type'] = oscard;
        michal['billingResult'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: handlePurchaseUpdated
        entity = undefined;
        tangon = _closure1_slot27;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: _handlePurchaseUpdated
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 1310; continue _fun00003 }
 10:
                    michal = argFoo;
                    option = michal.purchase;
                    zuuluu = undefined;
                    romeon = undefined;
                    offset = undefined;
                    kiloes = undefined;
                    foxtra = undefined;
                    SaveGenerator(address=33);
 31:
                    return zuuluu;
 33:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 1307; continue _fun00003 }
 42:
                    golfie = _closure1_slot9;
                    oscard = golfie.isPurchasingProduct;
                    tangon = option;
                    tangon = tangon.productId;
                    tangon = oscard.bind(golfie)(tangon);
                    if(tangon) { _fun00004_ip = 1304; continue _fun00003 }
 75:
                    oscard = _closure1_slot10;
                    tangon = oscard.getState;
                    tangon = tangon.bind(oscard)();
                    golfie = tangon.analyticsByProductId;
                    oscard = option;
                    tangon = oscard.productId;
                    romeon = golfie[tangon];
                    golfie = _closure1_slot19;
                    tangon = oscard.productId;
                    tangon = golfie[tangon];
                    offset = tangon;
                    verify = _closure1_slot1;
                    yankee = _closure1_slot2;
                    golfie = 15;
                    golfie = yankee[golfie];
                    verify = verify.bind(zuuluu)(golfie);
                    golfie = verify.v3;
                    oscard = oscard.purchaseToken;
                    kiloes = golfie.bind(verify)(oscard);
                    golfie = null;
                    if(!(golfie == tangon)) { _fun00004_ip = 188; continue _fun00003 }
 168:
                    verify = _closure1_slot4;
                    oscard = verify.getGiftOptionsForKey;
                    tangon = kiloes;
                    offset = oscard.bind(verify)(tangon);
                    _fun00004_ip = 254; continue _fun00003;
 188:
                    oscard = _closure1_slot1;
                    verify = _closure1_slot2;
                    tangon = 13;
                    tangon = verify[tangon];
                    verify = oscard.bind(zuuluu)(tangon);
                    oscard = verify.dispatch;
                    tangon = {};
                    yankee = 'GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION';
                    tangon['type'] = yankee;
                    yankee = kiloes;
                    tangon['key'] = yankee;
                    yankee = {};
                    echoed = offset;
                    update = yankee;
                    backup = copyDataProperties(update, echoed);
                    tangon['giftOptions'] = yankee;
                    tangon = oscard.bind(verify)(tangon);
 254: // try_start_0 // try_start_2
                    yankee = _closure1_slot1;
                    tangon = _closure1_slot2;
                    verify = 13;
                    oscard = tangon[verify];
                    backup = yankee.bind(zuuluu)(oscard);
                    yankee = backup.dispatch;
                    oscard = {};
                    sizing = 'GPLAY_VERIFICATION_START';
                    oscard['type'] = sizing;
                    sizing = option;
                    output = sizing.productId;
                    oscard['productId'] = output;
                    oscard = yankee.bind(backup)(oscard);
                    oscard = _closure1_slot0;
                    backup = 14;
                    tangon = tangon[backup];
                    yankee = oscard.bind(zuuluu)(tangon);
                    oscard = yankee.verifyPurchase;
                    tangon = offset;
                    tangon = oscard.bind(yankee)(sizing, tangon);
                    SaveGenerator(address=345);
 343:
                    return tangon;
 345:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscard) { _fun00004_ip = 866; continue _fun00003 }
 354:
                    foxtra = tangon;
                    yankee = golfie != tangon;
                    oscard = yankee;
                    if(!yankee) { _fun00004_ip = 371; continue _fun00003 }
 367:
                    oscard = golfie != offset;
 371:
                    if(!oscard) { _fun00004_ip = 434; continue _fun00003 }
 374:
                    offset = _closure1_slot1;
                    oscard = _closure1_slot2;
                    oscard = oscard[verify];
                    yankee = offset.bind(zuuluu)(oscard);
                    offset = yankee.dispatch;
                    oscard = {};
                    sizing = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                    oscard['type'] = sizing;
                    oscard['key'] = kiloes;
                    oscard = offset.bind(yankee)(oscard);
                    offset = _closure1_slot19;
                    oscard = option;
                    oscard = oscard.productId;
                    oscard = delete offset[oscard];
 434:
                    oscard = foxtra;
                    if(!(golfie != oscard)) { _fun00004_ip = 622; continue _fun00003 }
 444:
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    oscard = 16;
                    oscard = yankee[oscard];
                    oscard = offset.bind(zuuluu)(oscard);
                    yankee = oscard.SubscriptionProductIds;
                    offset = yankee.includes;
                    oscard = option;
                    oscard = oscard.productId;
                    oscard = offset.bind(yankee)(oscard);
                    if(oscard) { _fun00004_ip = 622; continue _fun00003 }
 495:
                    yankee = _closure1_slot1;
                    offset = _closure1_slot2;
                    oscard = offset[verify];
                    sizing = yankee.bind(zuuluu)(oscard);
                    kiloes = sizing.dispatch;
                    yankee = {};
                    oscard = 'GPLAY_PURCHASE_VERIFIED';
                    yankee['type'] = oscard;
                    oscard = option;
                    output = oscard.productId;
                    yankee['productId'] = output;
                    yankee = kiloes.bind(sizing)(yankee);
                    yankee = _closure1_slot0;
                    offset = offset[backup];
                    yankee = yankee.bind(zuuluu)(offset);
                    offset = yankee.sendPaymentCompleteAnalytics;
                    offset = offset.bind(yankee)(oscard);
                    yankee = _closure1_slot16;
                    offset = yankee.info;
                    kiloes = oscard.productId;
                    oscard = global;
                    oscard = oscard.HermesInternal;
                    backup = oscard.concat;
                    oscard = '[handlePurchaseUpdated] One Time Purchase verified and consumed: ';
                    oscard = backup.bind(oscard)(kiloes);
                    oscard = offset.bind(yankee)(oscard);
                    _fun00004_ip = 805; continue _fun00003;
 622:
                    oscard = foxtra;
                    if(!(golfie != oscard)) { _fun00004_ip = 642; continue _fun00003 }
 629:
                    oscard = foxtra;
                    oscard = oscard.pendingDowngrade;
                    if(!(golfie == oscard)) { _fun00004_ip = 719; continue _fun00003 }
 642:
                    oscard = _closure1_slot32;
                    oscard = oscard.bind(zuuluu)();
                    SaveGenerator(address=654);
 652:
                    return oscard;
 654:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(!golfie) { _fun00004_ip = 805; continue _fun00003 }
 663: // try_end0 // try_end2
                    offset = _closure1_slot1;
                    golfie = _closure1_slot2;
                    golfie = golfie[verify];
                    yankee = offset.bind(zuuluu)(golfie);
                    offset = yankee.dispatch;
                    golfie = {};
                    backup = 'GPLAY_VERIFICATION_END';
                    golfie['type'] = backup;
                    backup = option;
                    backup = backup.productId;
                    golfie['productId'] = backup;
                    golfie = offset.bind(yankee)(golfie);
                    return oscard;
 719: // try_start_1 // try_start_3
                    golfie = _closure1_slot1;
                    offset = _closure1_slot2;
                    oscard = offset[verify];
                    yankee = golfie.bind(zuuluu)(oscard);
                    golfie = yankee.dispatch;
                    oscard = {};
                    backup = 'GPLAY_UPDATE_PENDING_DOWNGRADE';
                    oscard['type'] = backup;
                    foxtra = foxtra.pendingDowngrade;
                    oscard['pendingDowngrade'] = foxtra;
                    oscard = golfie.bind(yankee)(oscard);
                    golfie = _closure1_slot0;
                    oscard = 17;
                    oscard = offset[oscard];
                    golfie = golfie.bind(zuuluu)(oscard);
                    oscard = golfie.fetchSubscriptions;
                    oscard = oscard.bind(golfie)();
                    SaveGenerator(address=799);
 797:
                    return oscard;
 799:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(golfie) { _fun00004_ip = 810; continue _fun00003 }
 805: // try_end1
                    _fun00004_ip = 1189; continue _fun00003;
 810: // try_end3
                    offset = _closure1_slot1;
                    golfie = _closure1_slot2;
                    golfie = golfie[verify];
                    yankee = offset.bind(zuuluu)(golfie);
                    offset = yankee.dispatch;
                    golfie = {};
                    foxtra = 'GPLAY_VERIFICATION_END';
                    golfie['type'] = foxtra;
                    foxtra = option;
                    foxtra = foxtra.productId;
                    golfie['productId'] = foxtra;
                    golfie = offset.bind(yankee)(golfie);
                    return oscard;
 866:
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot2;
                    oscard = oscard[verify];
                    verify = golfie.bind(zuuluu)(oscard);
                    golfie = verify.dispatch;
                    oscard = {};
                    offset = 'GPLAY_VERIFICATION_END';
                    oscard['type'] = offset;
                    offset = option;
                    offset = offset.productId;
                    oscard['productId'] = offset;
                    oscard = golfie.bind(verify)(oscard);
                    return tangon;
 922: // try_start_4 // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=9);
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 18;
                    tangon = golfie[tangon];
                    verify = oscard.bind(zuuluu)(tangon);
                    oscard = verify.captureBillingException;
                    tangon = {};
                    foxtra = {};
                    yankee = option;
                    backup = yankee.productId;
                    foxtra['productId'] = backup;
                    tangon['tags'] = foxtra;
                    tangon = oscard.bind(verify)(offset, tangon);
                    verify = _closure1_slot16;
                    oscard = verify.error;
                    sizing = yankee.productId;
                    kiloes = offset.message;
                    tangon = global;
                    tangon = tangon.HermesInternal;
                    backup = tangon.concat;
                    foxtra = '[handlePurchaseUpdated] Error verifying purchase ';
                    tangon = ': ';
                    tangon = backup.bind(foxtra)(sizing, tangon, kiloes);
                    tangon = oscard.bind(verify)(tangon);
                    oscard = _closure1_slot1;
                    tangon = 13;
                    tangon = golfie[tangon];
                    foxtra = oscard.bind(zuuluu)(tangon);
                    verify = foxtra.dispatch;
                    tangon = {};
                    backup = 'GPLAY_PURCHASE_VERIFICATION_FAILED';
                    tangon['type'] = backup;
                    backup = yankee.productId;
                    tangon['productId'] = backup;
                    tangon = verify.bind(foxtra)(tangon);
                    tangon = 19;
                    tangon = golfie[tangon];
                    verify = oscard.bind(zuuluu)(tangon);
                    golfie = verify.track;
                    tangon = _closure1_slot13;
                    oscard = tangon.GPLAY_PURCHASE_FAILED;
                    tangon = {};
                    echoed = romeon;
                    update = tangon;
                    romeon = copyDataProperties(update, echoed);
                    foxtra = 'handlePurchaseUpdated';
                    romeon = 'location';
                    tangon[romeon] = foxtra;
                    foxtra = yankee.productId;
                    romeon = 'product_id';
                    tangon[romeon] = foxtra;
                    romeon = yankee.purchaseToken;
                    yankee = 'purchase_token';
                    tangon[yankee] = romeon;
                    yankee = offset.message;
                    offset = 'error';
                    tangon[offset] = yankee;
                    tangon = golfie.bind(verify)(oscard, tangon);
 1189: // try_end4
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 13;
                    tangon = golfie[tangon];
                    golfie = oscard.bind(zuuluu)(tangon);
                    oscard = golfie.dispatch;
                    tangon = {};
                    verify = 'GPLAY_VERIFICATION_END';
                    tangon['type'] = verify;
                    verify = option;
                    verify = verify.productId;
                    tangon['productId'] = verify;
                    tangon = oscard.bind(golfie)(tangon);
                    _fun00004_ip = 1304; continue _fun00003;
 1247: // catch_target2 // catch_target3 // catch_target4
                    CatchBlockStart(arg_register=3);
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 13;
                    report = golfie[report];
                    golfie = oscard.bind(zuuluu)(report);
                    oscard = golfie.dispatch;
                    report = {};
                    verify = 'GPLAY_VERIFICATION_END';
                    report['type'] = verify;
                    option = option.productId;
                    report['productId'] = option;
                    report = oscard.bind(golfie)(report);
                    throw tangon;
 1304:
                    return zuuluu;
 1307:
                    return michal;
 1310:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
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
    entity = function() { // Original name: handleDowngradeCommand
        entity = undefined;
        tangon = _closure1_slot29;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: _handleDowngradeCommand
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 156; continue _fun00005 }
 10:
                    michal = argFoo;
                    option = michal.downgradeCommand;
                    tangon = undefined;
                    SaveGenerator(address=27);
 25:
                    return tangon;
 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 153; continue _fun00005 }
 33:
                    report = _closure1_slot12;
                    report = report.EXECUTE;
                    if(!(report !== option)) { _fun00006_ip = 126; continue _fun00005 }
 50:
                    report = _closure1_slot12;
                    report = report.CLEAR;
                    if(!(report !== option)) { _fun00006_ip = 116; continue _fun00005 }
 64:
                    report = global;
                    golfie = report.Error;
                    report = report.HermesInternal;
                    oscard = report.concat;
                    report = 'Invalid downgrade state ';
                    verify = oscard.bind(report)(option);
                    oscard = golfie.prototype;
                    oscard = Object.create(oscard, {constructor: {value: golfie}});
                    offset = oscard;
                    report = new offset[golfie](verify, option);
                    report = report instanceof Object ? report : oscard;
                    throw report;
 116:
                    zuuluu = _closure1_slot31;
                    zuuluu = zuuluu.bind(tangon)();
                    _fun00006_ip = 147; continue _fun00005;
 126:
                    zuuluu = function() { // Original name: executePendingDowngrade
                        entity = undefined;
                        tangon = _closure1_slot30;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    zuuluu = zuuluu.bind(tangon)();
                    SaveGenerator(address=141);
 139:
                    return zuuluu;
 141:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 150; continue _fun00005 }
 147:
                    return tangon;
 150:
                    return zuuluu;
 153:
                    return michal;
 156:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
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
    entity = function() { // Original name: _executePendingDowngrade
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 610; continue _fun00007 }
 10:
                    report = undefined;
                    offset = undefined;
                    tangon = _closure1_slot9;
                    michal = tangon.getPendingDowngrade;
                    michal = michal.bind(tangon)();
                    offset = michal;
                    yankee = null;
                    if(!(yankee != michal)) { _fun00008_ip = 559; continue _fun00007 }
 45: // try_start_0 // try_start_1
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    golfie = 13;
                    michal = oscard[golfie];
                    verify = tangon.bind(report)(michal);
                    tangon = verify.dispatch;
                    michal = {'type': 'GPLAY_UPDATE_IS_DOWNGRADING', 'isDowngrading': true};
                    michal = tangon.bind(verify)(michal);
                    tangon = _closure1_slot0;
                    michal = 14;
                    michal = oscard[michal];
                    oscard = tangon.bind(report)(michal);
                    tangon = oscard.downgradeSubscription;
                    michal = offset;
                    michal = tangon.bind(oscard)(michal);
                    SaveGenerator(address=123);
 121:
                    return michal;
 123:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 204; continue _fun00007 }
 129:
                    tangon = _closure1_slot31;
                    tangon = tangon.bind(report)();
                    tangon = _closure1_slot32;
                    tangon = tangon.bind(report)();
                    SaveGenerator(address=149);
 147:
                    return tangon;
 149:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscard) { _fun00008_ip = 160; continue _fun00007 }
 155: // try_end0
                    _fun00008_ip = 515; continue _fun00007;
 160: // try_end1
                    verify = _closure1_slot1;
                    oscard = _closure1_slot2;
                    oscard = oscard[golfie];
                    romeon = verify.bind(report)(oscard);
                    verify = romeon.dispatch;
                    oscard = {'type': 'GPLAY_UPDATE_IS_DOWNGRADING', 'isDowngrading': false};
                    oscard = verify.bind(romeon)(oscard);
                    return tangon;
 204:
                    oscard = _closure1_slot1;
                    tangon = _closure1_slot2;
                    tangon = tangon[golfie];
                    golfie = oscard.bind(report)(tangon);
                    oscard = golfie.dispatch;
                    tangon = {'type': 'GPLAY_UPDATE_IS_DOWNGRADING', 'isDowngrading': false};
                    tangon = oscard.bind(golfie)(tangon);
                    return michal;
 248: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=6);
                    option = golfie;
                    kiloes = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 18;
                    michal = oscard[michal];
                    tangon = kiloes.bind(report)(michal);
                    michal = tangon.captureBillingException;
                    michal = michal.bind(tangon)(golfie);
                    tangon = _closure1_slot1;
                    michal = 20;
                    michal = oscard[michal];
                    verify = tangon.bind(report)(michal);
                    golfie = verify.show;
                    michal = {};
                    romeon = 21;
                    foxtra = oscard[romeon];
                    foxtra = kiloes.bind(report)(foxtra);
                    sizing = foxtra.intl;
                    backup = sizing.string;
                    foxtra = oscard[romeon];
                    foxtra = kiloes.bind(report)(foxtra);
                    foxtra = foxtra.t;
                    foxtra = foxtra.U+H+kZ;
                    foxtra = backup.bind(sizing)(foxtra);
                    michal['title'] = foxtra;
                    foxtra = oscard[romeon];
                    foxtra = kiloes.bind(report)(foxtra);
                    backup = foxtra.intl;
                    foxtra = backup.string;
                    romeon = oscard[romeon];
                    romeon = kiloes.bind(report)(romeon);
                    romeon = romeon.t;
                    romeon = romeon.LFFx5O;
                    romeon = foxtra.bind(backup)(romeon);
                    michal['body'] = romeon;
                    michal = golfie.bind(verify)(michal);
                    michal = 19;
                    michal = oscard[michal];
                    golfie = tangon.bind(report)(michal);
                    oscard = golfie.track;
                    michal = _closure1_slot13;
                    tangon = michal.GPLAY_PURCHASE_FAILED;
                    michal = {};
                    verify = 'executePendingDowngrade';
                    michal['location'] = verify;
                    verify = offset;
                    romeon = yankee == verify;
                    verify = undefined;
                    if(romeon) { _fun00008_ip = 472; continue _fun00007 }
 463:
                    romeon = offset;
                    verify = romeon.newSubscriptionSkuId;
 472:
                    michal['product_id'] = verify;
                    verify = offset;
                    yankee = yankee == verify;
                    verify = undefined;
                    if(yankee) { _fun00008_ip = 495; continue _fun00007 }
 489:
                    verify = offset.purchaseToken;
 495:
                    michal['purchase_token'] = verify;
                    option = option.message;
                    michal['error'] = option;
                    michal = oscard.bind(golfie)(tangon, michal);
 515: // try_end2
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    michal = 13;
                    michal = oscard[michal];
                    oscard = tangon.bind(report)(michal);
                    tangon = oscard.dispatch;
                    michal = {'type': 'GPLAY_UPDATE_IS_DOWNGRADING', 'isDowngrading': false};
                    michal = tangon.bind(oscard)(michal);
 559:
                    return report;
 562: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 13;
                    zuuluu = oscard[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {'type': 'GPLAY_UPDATE_IS_DOWNGRADING', 'isDowngrading': false};
                    zuuluu = tangon.bind(report)(zuuluu);
                    throw michal;
 610:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot30 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: clearPendingDowngrade
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 13;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {'type': 'GPLAY_UPDATE_PENDING_DOWNGRADE', 'pendingDowngrade': null};
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot31 = entity;
    entity = function() { // Original name: fetchAndAlertActiveSubscription
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
    entity = function() { // Original name: _fetchAndAlertActiveSubscription
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00010_ip = 201; continue _fun00009 }
 12:
                    option = undefined;
                    var _closure4_slot0 = option;
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 17;
                    michal = oscard[michal];
                    report = report.bind(option)(michal);
                    michal = report.fetchSubscriptions;
                    michal = michal.bind(report)();
                    SaveGenerator(address=55);
 53:
                    return michal;
 55:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00010_ip = 198; continue _fun00009 }
 64:
                    oscard = _closure1_slot8;
                    report = oscard.getPremiumTypeSubscription;
                    oscard = report.bind(oscard)();
                    _closure4_slot0 = oscard;
                    report = null;
                    if(!(report != oscard)) { _fun00010_ip = 113; continue _fun00009 }
 88:
                    report = _closure1_slot5;
                    report = report.bind(option)();
                    report = _closure1_slot6;
                    tangon = function() {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 20;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.openLazy;
                        michal = {};
                        report = function() { // Original name: importer
                            zuuluu = _closure1_slot0;
                            entity = _closure1_slot2;
                            michal = 23;
                            michal = entity[michal];
                            tangon = undefined;
                            zuuluu = zuuluu.bind(tangon)(michal);
                            michal = 22;
                            michal = entity[michal];
                            entity = entity.paths;
                            zuuluu = zuuluu.bind(tangon)(michal, entity);
                            michal = zuuluu.then;
                            entity = function(argFoo) {
                                michal = argFoo;
                                michal = michal.default;
                                var _closure7_slot0 = michal;
                                entity = function(argFoo) {
                                    tangon = _closure1_slot15;
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
                    tangon = report.bind(option)(tangon);
                    return option;
 113:
                    tangon = global;
                    report = tangon.Error;
                    golfie = _closure1_slot0;
                    verify = _closure1_slot2;
                    zuuluu = 21;
                    tangon = verify[zuuluu];
                    tangon = golfie.bind(option)(tangon);
                    oscard = tangon.intl;
                    tangon = oscard.string;
                    zuuluu = verify[zuuluu];
                    zuuluu = golfie.bind(option)(zuuluu);
                    zuuluu = zuuluu.t;
                    zuuluu = zuuluu.PjfUXV;
                    offset = tangon.bind(oscard)(zuuluu);
                    tangon = report.prototype;
                    tangon = Object.create(tangon, {constructor: {value: report}});
                    yankee = tangon;
                    zuuluu = new yankee[report](offset, verify);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 198:
                    return michal;
 201:
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
    entity = function() { // Original name: handleAppStateUpdated
        entity = undefined;
        tangon = _closure1_slot35;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot34 = entity;
    entity = function() { // Original name: _handleAppStateUpdated
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00012_ip = 134; continue _fun00011 }
 10:
                    michal = argFoo;
                    oscard = michal.state;
                    zuuluu = undefined;
                    SaveGenerator(address=24);
 22:
                    return zuuluu;
 24:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00012_ip = 131; continue _fun00011 }
 30:
                    golfie = _closure1_slot9;
                    report = golfie.isReady;
                    report = report.bind(golfie)();
                    if(!report) { _fun00012_ip = 128; continue _fun00011 }
 50:
                    golfie = _closure1_slot7;
                    report = golfie.isAuthenticated;
                    report = report.bind(golfie)();
                    if(!report) { _fun00012_ip = 128; continue _fun00011 }
 67:
                    report = _closure1_slot14;
                    report = report.ACTIVE;
                    if(!(oscard === report)) { _fun00012_ip = 128; continue _fun00011 }
 81: // try_start_0
                    oscard = _closure1_slot17;
                    report = oscard.loadPurchases;
                    report = report.bind(oscard)();
                    SaveGenerator(address=101);
 99:
                    return report;
 101:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(oscard) { _fun00012_ip = 109; continue _fun00011 }
 107: // try_end0
                    _fun00012_ip = 128; continue _fun00011;
 109:
                    return report;
 112: // catch_target0
                    CatchBlockStart(arg_register=4);
                    report = _closure1_slot17;
                    tangon = report.open;
                    tangon = tangon.bind(report)();
 128:
                    return zuuluu;
 131:
                    return michal;
 134:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
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
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = verify.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    golfie = oscard[michal];
    michal = argCor;
    michal = michal.bind(entity)(golfie);
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.NativeEventEmitter;
    michal = michal.NativeModules;
    golfie = 3;
    golfie = oscard[golfie];
    golfie = verify.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 4;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    offset = golfie.setPaymentSuccess;
    var _closure1_slot5 = offset;
    golfie = golfie.showOldPaymentFlowSuccess;
    var _closure1_slot6 = golfie;
    golfie = 5;
    golfie = oscard[golfie];
    golfie = verify.bind(entity)(golfie);
    var _closure1_slot7 = golfie;
    golfie = 6;
    golfie = oscard[golfie];
    golfie = verify.bind(entity)(golfie);
    var _closure1_slot8 = golfie;
    golfie = 7;
    golfie = oscard[golfie];
    golfie = verify.bind(entity)(golfie);
    var _closure1_slot9 = golfie;
    golfie = 8;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.useGPlayAnalyticsStore;
    var _closure1_slot10 = golfie;
    golfie = 9;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    offset = golfie.GPlayConnectionState;
    var _closure1_slot11 = offset;
    golfie = golfie.GPlayDowngradeCommand;
    var _closure1_slot12 = golfie;
    golfie = 10;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    offset = golfie.AnalyticEvents;
    var _closure1_slot13 = offset;
    golfie = golfie.AppStates;
    var _closure1_slot14 = golfie;
    golfie = 11;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot15 = golfie;
    golfie = 12;
    golfie = oscard[golfie];
    offset = verify.bind(entity)(golfie);
    golfie = offset.prototype;
    verify = Object.create(golfie, {constructor: {value: offset}});
    foxtra = 'GPlayManager.android';
    backup = verify;
    golfie = new backup[offset](foxtra, romeon);
    golfie = golfie instanceof Object ? golfie : verify;
    var _closure1_slot16 = golfie;
    michal = michal.BillingManager;
    var _closure1_slot17 = michal;
    golfie = option.prototype;
    golfie = Object.create(golfie, {constructor: {value: option}});
    backup = golfie;
    foxtra = michal;
    michal = new backup[option](foxtra, romeon);
    michal = michal instanceof Object ? michal : golfie;
    var _closure1_slot18 = michal;
    golfie = {};
    var _closure1_slot19 = golfie;
    michal = null;
    var _closure1_slot20 = michal;
    var _closure1_slot21 = michal;
    var _closure1_slot22 = michal;
    var _closure1_slot23 = michal;
    michal = {};
    michal['giftInfoOptionsCache'] = golfie;
    golfie = function() { // Original name: initialize
        zuuluu = _closure1_slot17;
        entity = zuuluu.open;
        entity = entity.bind(zuuluu)();
        report = _closure1_slot18;
        tangon = report.addListener;
        zuuluu = _closure1_slot24;
        entity = 'billing-manager-connection-state-updated';
        entity = tangon.bind(report)(entity, zuuluu);
        _closure1_slot20 = entity;
        tangon = report.addListener;
        zuuluu = _closure1_slot25;
        entity = 'billing-manager-purchase-state-updated';
        entity = tangon.bind(report)(entity, zuuluu);
        _closure1_slot21 = entity;
        tangon = report.addListener;
        zuuluu = _closure1_slot26;
        entity = 'billing-manager-purchase-updated';
        entity = tangon.bind(report)(entity, zuuluu);
        _closure1_slot22 = entity;
        tangon = report.addListener;
        zuuluu = _closure1_slot28;
        entity = 'billing-manager-downgrade-command';
        entity = tangon.bind(report)(entity, zuuluu);
        _closure1_slot23 = entity;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 13;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.subscribe;
        zuuluu = _closure1_slot34;
        michal = 'APP_STATE_UPDATE';
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    michal['initialize'] = golfie;
    tangon = function() { // Original name: terminate
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = _closure1_slot17;
            entity = zuuluu.close;
            entity = entity.bind(zuuluu)();
            tangon = _closure1_slot20;
            entity = null;
            if(!(entity != tangon)) { _fun00014_ip = 37; continue _fun00013 }
 27:
            zuuluu = tangon.remove;
            zuuluu = zuuluu.bind(tangon)();
 37:
            tangon = _closure1_slot21;
            if(!(entity != tangon)) { _fun00014_ip = 55; continue _fun00013 }
 45:
            zuuluu = tangon.remove;
            zuuluu = zuuluu.bind(tangon)();
 55:
            tangon = _closure1_slot22;
            if(!(entity != tangon)) { _fun00014_ip = 73; continue _fun00013 }
 63:
            zuuluu = tangon.remove;
            zuuluu = zuuluu.bind(tangon)();
 73:
            zuuluu = _closure1_slot23;
            if(!(entity != zuuluu)) { _fun00014_ip = 91; continue _fun00013 }
 81:
            entity = zuuluu.remove;
            entity = entity.bind(zuuluu)();
 91:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 13;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.unsubscribe;
            zuuluu = _closure1_slot34;
            michal = 'APP_STATE_UPDATE';
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        }
    };
    michal['terminate'] = tangon;
    tangon = 24;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/gplay/native/GPlayManager.android.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();