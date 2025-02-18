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
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    tangon = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 603; continue _fun00001 }
 13:
                    result = argFoo;
                    echoed = argBar;
                    zuuluu = undefined;
                    if(!(tangon === zuuluu)) { _fun00002_ip = 27; continue _fun00001 }
 25:
                    tangon = true;
 27:
                    kiloes = undefined;
                    backup = undefined;
                    yankee = undefined;
                    golfie = undefined;
                    offset = undefined;
                    verify = undefined;
                    option = undefined;
                    SaveGenerator(address=45);
 43:
                    return zuuluu;
 45:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 600; continue _fun00001 }
 54:
                    if(!tangon) { _fun00002_ip = 597; continue _fun00001 }
 60:
                    romeon = _closure1_slot1;
                    report = _closure1_slot2;
                    oscard = 2;
                    report = report[oscard];
                    foxtra = romeon.bind(zuuluu)(report);
                    romeon = foxtra.dispatch;
                    report = {};
                    sizing = 'BILLING_USER_OFFER_FETCH_START';
                    report['type'] = sizing;
                    report = romeon.bind(foxtra)(report);
 105: // try_start_0
                    report = result;
                    romeon = null;
                    if(!(romeon != report)) { _fun00002_ip = 164; continue _fun00001 }
 114:
                    foxtra = _closure1_slot1;
                    sizing = _closure1_slot2;
                    report = 3;
                    report = sizing[report];
                    output = foxtra.bind(zuuluu)(report);
                    sizing = output.track;
                    report = _closure1_slot4;
                    foxtra = report.FETCH_USER_OFFER_STARTED;
                    report = {};
                    report['call_location'] = result;
                    report = sizing.bind(output)(foxtra, report);
 164:
                    foxtra = _closure1_slot0;
                    sizing = _closure1_slot2;
                    report = 4;
                    report = sizing[report];
                    report = foxtra.bind(zuuluu)(report);
                    sizing = report.HTTP;
                    foxtra = sizing.post;
                    report = {};
                    output = _closure1_slot5;
                    output = output.USER_OFFER;
                    report['url'] = output;
                    output = echoed;
                    if(!(romeon == output)) { _fun00002_ip = 222; continue _fun00001 }
 218:
                    output = {};
                    _fun00002_ip = 232; continue _fun00001;
 222:
                    result = {};
                    result['payment_gateway'] = echoed;
                    output = result;
 232:
                    report['body'] = output;
                    output = true;
                    report['rejectWithError'] = output;
                    report = foxtra.bind(sizing)(report);
                    SaveGenerator(address=251);
 249:
                    return report;
 251:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=12);
                    if(foxtra) { _fun00002_ip = 553; continue _fun00001 }
 260:
                    golfie = report;
                    foxtra = report.body;
                    foxtra = foxtra.user_trial_offer;
                    kiloes = foxtra;
                    sizing = romeon != foxtra;
                    foxtra = null;
                    if(!sizing) { _fun00002_ip = 289; continue _fun00001 }
 286:
                    foxtra = kiloes;
 289:
                    offset = foxtra;
                    foxtra = golfie;
                    foxtra = foxtra.body;
                    foxtra = foxtra.user_discount;
                    backup = foxtra;
                    kiloes = romeon != foxtra;
                    foxtra = null;
                    if(!kiloes) { _fun00002_ip = 321; continue _fun00001 }
 318:
                    foxtra = backup;
 321:
                    verify = foxtra;
                    golfie = golfie.body;
                    golfie = golfie.user_discount_offer;
                    yankee = golfie;
                    foxtra = romeon != golfie;
                    golfie = null;
                    if(!foxtra) { _fun00002_ip = 350; continue _fun00001 }
 347:
                    golfie = yankee;
 350:
                    option = golfie;
                    yankee = offset;
                    yankee = romeon == yankee;
                    golfie = yankee;
                    if(!yankee) { _fun00002_ip = 421; continue _fun00001 }
 366:
                    backup = _closure1_slot0;
                    kiloes = _closure1_slot2;
                    yankee = 5;
                    yankee = kiloes[yankee];
                    foxtra = backup.bind(zuuluu)(yankee);
                    romeon = foxtra.isDismissibleContentDismissed;
                    yankee = 6;
                    yankee = kiloes[yankee];
                    yankee = backup.bind(zuuluu)(yankee);
                    yankee = yankee.DismissibleContent;
                    yankee = yankee.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING;
                    golfie = romeon.bind(foxtra)(yankee);
 421:
                    if(!golfie) { _fun00002_ip = 479; continue _fun00001 }
 424:
                    foxtra = _closure1_slot0;
                    backup = _closure1_slot2;
                    golfie = 7;
                    golfie = backup[golfie];
                    romeon = foxtra.bind(zuuluu)(golfie);
                    yankee = romeon.removeDismissedContent;
                    golfie = 6;
                    golfie = backup[golfie];
                    golfie = foxtra.bind(zuuluu)(golfie);
                    golfie = golfie.DismissibleContent;
                    golfie = golfie.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING;
                    golfie = yankee.bind(romeon)(golfie);
 479:
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
 550: // try_end0
                    return golfie;
 553:
                    return report;
 556: // catch_target0
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
 597:
                    return zuuluu;
 600:
                    return michal;
 603:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot6 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot6 = entity;
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
    tangon = tangon.Endpoints;
    var _closure1_slot5 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/UserOfferActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: fetchUserOffer
        entity = undefined;
        tangon = _closure1_slot6;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchUserOffer'] = tangon;
    michal = function(argFoo, argBar) { // Original name: acknowledgeUserOffer
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            michal = argBar;
            report = null;
            oscard = report != zuuluu;
            tangon = undefined;
            golfie = undefined;
            if(!oscard) { _fun00004_ip = 41; continue _fun00003 }
 21:
            oscard = zuuluu.expires_at;
            oscard = report == oscard;
            golfie = undefined;
            if(!oscard) { _fun00004_ip = 41; continue _fun00003 }
 36:
            golfie = zuuluu.id;
 41:
            zuuluu = report != michal;
            oscard = undefined;
            if(!zuuluu) { _fun00004_ip = 70; continue _fun00003 }
 50:
            zuuluu = michal.expires_at;
            zuuluu = report == zuuluu;
            oscard = undefined;
            if(!zuuluu) { _fun00004_ip = 70; continue _fun00003 }
 65:
            oscard = michal.id;
 70:
            if(!(tangon === golfie)) { _fun00004_ip = 80; continue _fun00003 }
 74:
            if(!(tangon === oscard)) { _fun00004_ip = 80; continue _fun00003 }
 78:
            return tangon;
 80:
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 4;
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
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    oscard = argFoo;
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 2;
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
                    if(!verify) { _fun00006_ip = 70; continue _fun00005 }
 67:
                    golfie = option;
 70:
                    michal['userTrialOffer'] = golfie;
                    golfie = oscard.body;
                    option = golfie.user_discount;
                    verify = report != option;
                    golfie = null;
                    if(!verify) { _fun00006_ip = 98; continue _fun00005 }
 95:
                    golfie = option;
 98:
                    michal['userDiscount'] = golfie;
                    oscard = oscard.body;
                    oscard = oscard.user_discount_offer;
                    golfie = report != oscard;
                    report = null;
                    if(!golfie) { _fun00006_ip = 126; continue _fun00005 }
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
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    michal = entity.status;
                    entity = 404;
                    if(!(entity === michal)) { _fun00008_ip = 67; continue _fun00007 }
 18:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 2;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.dispatch;
                    entity = {'type': 'BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS', 'userTrialOffer': null, 'userDiscount': null, 'userDiscountOffer': null};
                    entity = michal.bind(zuuluu)(entity);
 67:
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