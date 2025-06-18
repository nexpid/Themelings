// app/actions/SubscriptionPlanActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    tangon = function() { // Original name: fetchSubscriptionPlansForSKU
        entity = undefined;
        tangon = _closure1_slot9;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot8 = tangon;
    entity = function() { // Original name: _fetchSubscriptionPlansForSKU
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz, argCor, argGra) {
            entity = function* (argFoo, argBar, argBaz, argCor, argGra) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    kiloes = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 508; continue _fun00001 }
 13:
                    report = kiloes;
                    romeon = argBar;
                    yankee = argBaz;
                    verify = argCor;
                    golfie = argGra;
                    oscard = undefined;
                    zuuluu = undefined;
                    tangon = undefined;
                    foxtra = _closure1_slot1;
                    offset = _closure1_slot2;
                    option = 4;
                    offset = offset[option];
                    backup = foxtra.bind(oscard)(offset);
                    foxtra = backup.dispatch;
                    offset = {};
                    sizing = 'SUBSCRIPTION_PLANS_FETCH';
                    offset['type'] = sizing;
                    offset['skuId'] = kiloes;
                    offset = foxtra.bind(backup)(offset);
 84: // try_start_0
                    offset = {'url': null, 'oldFormErrors': true, 'rejectWithError': true, 'retries': 10};
                    kiloes = _closure1_slot5;
                    backup = kiloes.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS;
                    foxtra = report;
                    foxtra = backup.bind(kiloes)(foxtra);
                    offset['url'] = foxtra;
                    zuuluu = offset;
                    tangon = {};
                    foxtra = romeon;
                    offset = null;
                    if(!(offset != foxtra)) { _fun00002_ip = 145; continue _fun00001 }
 136:
                    foxtra = tangon;
                    foxtra['country_code'] = romeon;
 145:
                    romeon = yankee;
                    if(!(offset != romeon)) { _fun00002_ip = 161; continue _fun00001 }
 152:
                    romeon = tangon;
                    romeon['payment_source_id'] = yankee;
 161:
                    yankee = verify;
                    if(!(offset != yankee)) { _fun00002_ip = 177; continue _fun00001 }
 168:
                    yankee = tangon;
                    yankee['include_unpublished'] = verify;
 177:
                    verify = golfie;
                    if(!(offset != verify)) { _fun00002_ip = 195; continue _fun00001 }
 184:
                    verify = tangon;
                    verify['revenue_surface'] = golfie;
 195:
                    golfie = zuuluu;
                    golfie['query'] = tangon;
                    tangon = _closure1_slot4;
                    tangon = tangon.ipCountryCodeLoaded;
                    if(tangon) { _fun00002_ip = 260; continue _fun00001 }
 217:
                    golfie = _closure1_slot0;
                    verify = _closure1_slot2;
                    tangon = 5;
                    tangon = verify[tangon];
                    golfie = golfie.bind(oscard)(tangon);
                    tangon = golfie.fetchIpCountryCode;
                    tangon = tangon.bind(golfie)();
                    SaveGenerator(address=251);
 249:
                    return tangon;
 251:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(!golfie) { _fun00002_ip = 260; continue _fun00001 }
 257: // try_end0
                    return tangon;
 260: // try_start_1
                    golfie = _closure1_slot0;
                    verify = _closure1_slot2;
                    tangon = 6;
                    tangon = verify[tangon];
                    tangon = golfie.bind(oscard)(tangon);
                    golfie = tangon.HTTP;
                    tangon = golfie.get;
                    zuuluu = tangon.bind(golfie)(zuuluu);
                    SaveGenerator(address=299);
 297:
                    return zuuluu;
 299:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 365; continue _fun00001 }
 305:
                    golfie = _closure1_slot1;
                    tangon = _closure1_slot2;
                    tangon = tangon[option];
                    verify = golfie.bind(oscard)(tangon);
                    golfie = verify.dispatch;
                    tangon = {};
                    offset = 'SUBSCRIPTION_PLANS_FETCH_SUCCESS';
                    tangon['type'] = offset;
                    offset = report;
                    tangon['skuId'] = offset;
                    offset = zuuluu.body;
                    tangon['subscriptionPlans'] = offset;
                    tangon = golfie.bind(verify)(tangon);
 362: // try_end1
                    return oscard;
 365:
                    return zuuluu;
 368: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
                    zuuluu = _closure1_slot1;
                    golfie = _closure1_slot2;
                    option = golfie[option];
                    offset = zuuluu.bind(oscard)(option);
                    verify = offset.dispatch;
                    option = {};
                    yankee = 'SUBSCRIPTION_PLANS_FETCH_FAILURE';
                    option['type'] = yankee;
                    option['skuId'] = report;
                    option = verify.bind(offset)(option);
                    option = _closure1_slot0;
                    michal = 7;
                    michal = golfie[michal];
                    option = option.bind(oscard)(michal);
                    michal = option.captureBillingException;
                    michal = michal.bind(option)(tangon);
                    michal = 8;
                    michal = golfie[michal];
                    michal = zuuluu.bind(oscard)(michal);
                    zuuluu = michal.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                    result = zuuluu;
                    output = tangon;
                    michal = new result[michal](output, sizing);
                    michal = michal instanceof Object ? michal : zuuluu;
                    zuuluu = global;
                    zuuluu = zuuluu.HermesInternal;
                    tangon = zuuluu.concat;
                    zuuluu = 'Failed to fetch subscription plans for SKU ';
                    zuuluu = tangon.bind(zuuluu)(report);
                    michal['message'] = zuuluu;
                    throw michal;
 508:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot9 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.Endpoints;
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.ACTIVE_PREMIUM_SKUS;
    var _closure1_slot6 = option;
    report = report.PremiumSubscriptionSKUs;
    var _closure1_slot7 = report;
    report = 9;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'actions/SubscriptionPlanActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['fetchSubscriptionPlansForSKU'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: fetchSubscriptionPlansBySKUs
        oscard = argFoo;
        michal = argBar;
        var _closure2_slot0 = michal;
        michal = global;
        zuuluu = michal.Promise;
        michal = zuuluu.all;
        report = oscard.filter;
        tangon = function(argFoo) {
            entity = _closure1_slot7;
            michal = entity.NONE;
            entity = argFoo;
            entity = entity !== michal;
            return entity;
        };
        report = report.bind(oscard)(tangon);
        tangon = report.map;
        entity = function(argFoo) {
            tangon = _closure1_slot8;
            zuuluu = _closure2_slot0;
            michal = undefined;
            entity = argFoo;
            entity = tangon.bind(michal)(entity, zuuluu);
            return entity;
        };
        entity = tangon.bind(report)(entity);
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['fetchSubscriptionPlansBySKUs'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: fetchPremiumSubscriptionPlans
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        michal = global;
        zuuluu = michal.Promise;
        michal = zuuluu.all;
        oscard = _closure1_slot6;
        report = oscard.filter;
        tangon = function(argFoo) {
            entity = _closure1_slot7;
            michal = entity.NONE;
            entity = argFoo;
            entity = entity !== michal;
            return entity;
        };
        report = report.bind(oscard)(tangon);
        tangon = report.map;
        entity = function(argFoo) {
            oscard = _closure1_slot8;
            offset = _closure2_slot0;
            verify = _closure2_slot1;
            golfie = _closure2_slot2;
            yankee = argFoo;
            romeon = undefined;
            option = undefined;
            entity = romeon[oscard](yankee, offset, verify, option, golfie, oscard);
            return entity;
        };
        entity = tangon.bind(report)(entity);
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['fetchPremiumSubscriptionPlans'] = tangon;
    michal = function() { // Original name: resetSubscriptionPlanData
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'SUBSCRIPTION_PLANS_RESET';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['resetSubscriptionPlanData'] = michal;
    return entity;
})();