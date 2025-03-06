// app/modules/premium/UserOfferActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _fetchUserOffer
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    tangon = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 610; continue _fun00001 }
 13:
                    result = argFoo;
                    zuuluu = undefined;
                    if(!(tangon === zuuluu)) { _fun00002_ip = 24; continue _fun00001 }
 22:
                    tangon = true;
 24:
                    kiloes = undefined;
                    backup = undefined;
                    yankee = undefined;
                    echoed = undefined;
                    golfie = undefined;
                    offset = undefined;
                    verify = undefined;
                    option = undefined;
                    SaveGenerator(address=44);
 42:
                    return zuuluu;
 44:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 607; continue _fun00001 }
 53:
                    if(!tangon) { _fun00002_ip = 604; continue _fun00001 }
 59:
                    romeon = _closure1_slot1;
                    report = _closure1_slot2;
                    oscard = 3;
                    report = report[oscard];
                    foxtra = romeon.bind(zuuluu)(report);
                    romeon = foxtra.dispatch;
                    report = {};
                    sizing = 'BILLING_USER_OFFER_FETCH_START';
                    report['type'] = sizing;
                    report = romeon.bind(foxtra)(report);
 104: // try_start_0
                    report = result;
                    romeon = null;
                    if(!(romeon != report)) { _fun00002_ip = 163; continue _fun00001 }
 113:
                    foxtra = _closure1_slot1;
                    sizing = _closure1_slot2;
                    report = 4;
                    report = sizing[report];
                    output = foxtra.bind(zuuluu)(report);
                    sizing = output.track;
                    report = _closure1_slot4;
                    foxtra = report.FETCH_USER_OFFER_STARTED;
                    report = {};
                    report['call_location'] = result;
                    report = sizing.bind(output)(foxtra, report);
 163:
                    report = _closure1_slot7;
                    output = report.bind(zuuluu)();
                    echoed = output;
                    foxtra = _closure1_slot0;
                    sizing = _closure1_slot2;
                    report = 5;
                    report = sizing[report];
                    report = foxtra.bind(zuuluu)(report);
                    sizing = report.HTTP;
                    foxtra = sizing.post;
                    report = {};
                    result = _closure1_slot5;
                    result = result.USER_OFFER;
                    report['url'] = result;
                    if(!(romeon == output)) { _fun00002_ip = 229; continue _fun00001 }
 225:
                    output = {};
                    _fun00002_ip = 239; continue _fun00001;
 229:
                    result = {};
                    result['payment_gateway'] = echoed;
                    output = result;
 239:
                    report['body'] = output;
                    output = true;
                    report['rejectWithError'] = output;
                    report = foxtra.bind(sizing)(report);
                    SaveGenerator(address=258);
 256:
                    return report;
 258:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=12);
                    if(foxtra) { _fun00002_ip = 560; continue _fun00001 }
 267:
                    golfie = report;
                    foxtra = report.body;
                    foxtra = foxtra.user_trial_offer;
                    kiloes = foxtra;
                    sizing = romeon != foxtra;
                    foxtra = null;
                    if(!sizing) { _fun00002_ip = 296; continue _fun00001 }
 293:
                    foxtra = kiloes;
 296:
                    offset = foxtra;
                    foxtra = golfie;
                    foxtra = foxtra.body;
                    foxtra = foxtra.user_discount;
                    backup = foxtra;
                    kiloes = romeon != foxtra;
                    foxtra = null;
                    if(!kiloes) { _fun00002_ip = 328; continue _fun00001 }
 325:
                    foxtra = backup;
 328:
                    verify = foxtra;
                    golfie = golfie.body;
                    golfie = golfie.user_discount_offer;
                    yankee = golfie;
                    foxtra = romeon != golfie;
                    golfie = null;
                    if(!foxtra) { _fun00002_ip = 357; continue _fun00001 }
 354:
                    golfie = yankee;
 357:
                    option = golfie;
                    yankee = offset;
                    yankee = romeon == yankee;
                    golfie = yankee;
                    if(!yankee) { _fun00002_ip = 428; continue _fun00001 }
 373:
                    backup = _closure1_slot0;
                    kiloes = _closure1_slot2;
                    yankee = 6;
                    yankee = kiloes[yankee];
                    foxtra = backup.bind(zuuluu)(yankee);
                    romeon = foxtra.isDismissibleContentDismissed;
                    yankee = 7;
                    yankee = kiloes[yankee];
                    yankee = backup.bind(zuuluu)(yankee);
                    yankee = yankee.DismissibleContent;
                    yankee = yankee.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING;
                    golfie = romeon.bind(foxtra)(yankee);
 428:
                    if(!golfie) { _fun00002_ip = 486; continue _fun00001 }
 431:
                    foxtra = _closure1_slot0;
                    backup = _closure1_slot2;
                    golfie = 8;
                    golfie = backup[golfie];
                    romeon = foxtra.bind(zuuluu)(golfie);
                    yankee = romeon.removeDismissedContent;
                    golfie = 7;
                    golfie = backup[golfie];
                    golfie = foxtra.bind(zuuluu)(golfie);
                    golfie = golfie.DismissibleContent;
                    golfie = golfie.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING;
                    golfie = yankee.bind(romeon)(golfie);
 486:
                    yankee = _closure1_slot1;
                    golfie = _closure1_slot2;
                    golfie = golfie[oscard];
                    romeon = yankee.bind(zuuluu)(golfie);
                    yankee = romeon.dispatch;
                    golfie = {};
                    foxtra = 'BILLING_USER_OFFER_FETCH_SUCCESS';
                    golfie['type'] = foxtra;
                    golfie['userTrialOffer'] = offset;
                    golfie['userDiscount'] = verify;
                    golfie['userDiscountOffer'] = option;
                    golfie = yankee.bind(romeon)(golfie);
                    golfie = {};
                    golfie['userTrialOffer'] = offset;
                    golfie['userDiscount'] = verify;
                    golfie['userDiscountOffer'] = option;
 557: // try_end0
                    return golfie;
 560:
                    return report;
 563: // catch_target0
                    CatchBlockStart(arg_register=4);
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    tangon = tangon[oscard];
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    golfie = 'BILLING_USER_OFFER_FETCH_FAIL';
                    tangon['type'] = golfie;
                    tangon = report.bind(oscard)(tangon);
 604:
                    return zuuluu;
 607:
                    return michal;
 610:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot8 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot8 = entity;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot4 = golfie;
    golfie = tangon.Endpoints;
    var _closure1_slot5 = golfie;
    tangon = tangon.PaymentGateways;
    var _closure1_slot6 = tangon;
    tangon = function() { // Original name: getPaymentGateway
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            report = 2;
            entity = entity[report];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.isAndroid;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00004_ip = 81; continue _fun00003 }
 37:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[report];
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.isIOS;
            zuuluu = entity.bind(zuuluu)();
            entity = null;
            if(!zuuluu) { _fun00004_ip = 91; continue _fun00003 }
 69:
            zuuluu = _closure1_slot6;
            entity = zuuluu.APPLE;
            _fun00004_ip = 91; continue _fun00003;
 81:
            michal = _closure1_slot6;
            entity = michal.GOOGLE;
 91:
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/UserOfferActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: fetchUserOffer
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchUserOffer'] = tangon;
    michal = function(argFoo, argBar) { // Original name: acknowledgeUserOffer
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            michal = argBar;
            report = null;
            oscard = report != zuuluu;
            tangon = undefined;
            golfie = undefined;
            if(!oscard) { _fun00006_ip = 41; continue _fun00005 }
 21:
            oscard = zuuluu.expires_at;
            oscard = report == oscard;
            golfie = undefined;
            if(!oscard) { _fun00006_ip = 41; continue _fun00005 }
 36:
            golfie = zuuluu.id;
 41:
            zuuluu = report != michal;
            oscard = undefined;
            if(!zuuluu) { _fun00006_ip = 70; continue _fun00005 }
 50:
            zuuluu = michal.expires_at;
            zuuluu = report == zuuluu;
            oscard = undefined;
            if(!zuuluu) { _fun00006_ip = 70; continue _fun00005 }
 65:
            oscard = michal.id;
 70:
            if(!(tangon === golfie)) { _fun00006_ip = 80; continue _fun00005 }
 74:
            if(!(tangon === oscard)) { _fun00006_ip = 80; continue _fun00005 }
 78:
            return tangon;
 80:
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 5;
            michal = option[michal];
            michal = zuuluu.bind(tangon)(michal);
            tangon = michal.HTTP;
            zuuluu = tangon.post;
            michal = {};
            report = _closure1_slot5;
            report = report.USER_OFFER_ACKNOWLEDGED;
            michal['url'] = report;
            report = {};
            report['user_trial_offer_id'] = golfie;
            report['user_discount_offer_id'] = oscard;
            michal['body'] = report;
            report = true;
            michal['oldFormErrors'] = report;
            report = false;
            michal['rejectWithError'] = report;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.then;
            michal = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    oscard = argFoo;
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 3;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    report = 'BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS';
                    michal['type'] = report;
                    report = oscard.body;
                    option = report.user_trial_offer;
                    report = null;
                    verify = report != option;
                    golfie = null;
                    if(!verify) { _fun00008_ip = 70; continue _fun00007 }
 67:
                    golfie = option;
 70:
                    michal['userTrialOffer'] = golfie;
                    golfie = oscard.body;
                    option = golfie.user_discount;
                    verify = report != option;
                    golfie = null;
                    if(!verify) { _fun00008_ip = 98; continue _fun00007 }
 95:
                    golfie = option;
 98:
                    michal['userDiscount'] = golfie;
                    oscard = oscard.body;
                    oscard = oscard.user_discount_offer;
                    golfie = report != oscard;
                    report = null;
                    if(!golfie) { _fun00008_ip = 126; continue _fun00007 }
 123:
                    report = oscard;
 126:
                    michal['userDiscountOffer'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.catch;
            entity = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    michal = entity.status;
                    entity = 404;
                    if(!(entity === michal)) { _fun00010_ip = 63; continue _fun00009 }
 18:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 3;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.dispatch;
                    entity = {'type': 'BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS', 'userTrialOffer': null, 'userDiscount': null, 'userDiscountOffer': null};
                    entity = michal.bind(zuuluu)(entity);
 63:
                    entity = undefined;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['acknowledgeUserOffer'] = michal;
    return entity;
})();