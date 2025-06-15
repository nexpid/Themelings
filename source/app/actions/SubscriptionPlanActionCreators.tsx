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
                    if(michal) { _fun00002_ip = 502; continue _fun00001 }
 13:
                    oscard = kiloes;
                    romeon = argBar;
                    yankee = argBaz;
                    verify = argCor;
                    golfie = argGra;
                    tangon = undefined;
                    zuuluu = undefined;
                    report = undefined;
                    foxtra = _closure1_slot1;
                    offset = _closure1_slot2;
                    option = 4;
                    offset = offset[option];
                    backup = foxtra.bind(tangon)(offset);
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
                    foxtra = oscard;
                    foxtra = backup.bind(kiloes)(foxtra);
                    offset['url'] = foxtra;
                    zuuluu = offset;
                    report = {};
                    foxtra = romeon;
                    offset = null;
                    if(!(offset != foxtra)) { _fun00002_ip = 145; continue _fun00001 }
 136:
                    foxtra = report;
                    foxtra['country_code'] = romeon;
 145:
                    romeon = yankee;
                    if(!(offset != romeon)) { _fun00002_ip = 161; continue _fun00001 }
 152:
                    romeon = report;
                    romeon['payment_source_id'] = yankee;
 161:
                    yankee = verify;
                    if(!(offset != yankee)) { _fun00002_ip = 177; continue _fun00001 }
 168:
                    yankee = report;
                    yankee['include_unpublished'] = verify;
 177:
                    verify = golfie;
                    if(!(offset != verify)) { _fun00002_ip = 195; continue _fun00001 }
 184:
                    verify = report;
                    verify['revenue_surface'] = golfie;
 195:
                    golfie = zuuluu;
                    golfie['query'] = report;
                    report = _closure1_slot4;
                    report = report.ipCountryCodeLoaded;
                    if(report) { _fun00002_ip = 260; continue _fun00001 }
 217:
                    golfie = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 5;
                    report = verify[report];
                    golfie = golfie.bind(tangon)(report);
                    report = golfie.fetchIpCountryCode;
                    report = report.bind(golfie)();
                    SaveGenerator(address=251);
 249:
                    return report;
 251:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(!golfie) { _fun00002_ip = 260; continue _fun00001 }
 257: // try_end0
                    return report;
 260: // try_start_1
                    golfie = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 6;
                    report = verify[report];
                    report = golfie.bind(tangon)(report);
                    golfie = report.HTTP;
                    report = golfie.get;
                    zuuluu = report.bind(golfie)(zuuluu);
                    SaveGenerator(address=299);
 297:
                    return zuuluu;
 299:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 365; continue _fun00001 }
 305:
                    golfie = _closure1_slot1;
                    report = _closure1_slot2;
                    report = report[option];
                    verify = golfie.bind(tangon)(report);
                    golfie = verify.dispatch;
                    report = {};
                    offset = 'SUBSCRIPTION_PLANS_FETCH_SUCCESS';
                    report['type'] = offset;
                    offset = oscard;
                    report['skuId'] = offset;
                    offset = zuuluu.body;
                    report['subscriptionPlans'] = offset;
                    report = golfie.bind(verify)(report);
 362: // try_end1
                    return tangon;
 365:
                    return zuuluu;
 368: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=4);
                    zuuluu = _closure1_slot1;
                    golfie = _closure1_slot2;
                    option = golfie[option];
                    offset = zuuluu.bind(tangon)(option);
                    verify = offset.dispatch;
                    option = {};
                    yankee = 'SUBSCRIPTION_PLANS_FETCH_FAILURE';
                    option['type'] = yankee;
                    option['skuId'] = oscard;
                    option = verify.bind(offset)(option);
                    option = _closure1_slot0;
                    michal = 7;
                    michal = golfie[michal];
                    option = option.bind(tangon)(michal);
                    michal = option.captureBillingException;
                    michal = michal.bind(option)(report);
                    michal = 8;
                    michal = golfie[michal];
                    tangon = zuuluu.bind(tangon)(michal);
                    michal = global;
                    michal = michal.HermesInternal;
                    zuuluu = michal.concat;
                    michal = 'Failed to fetch subscription plans for SKU ';
                    result = zuuluu.bind(michal)(oscard);
                    zuuluu = tangon.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                    echoed = zuuluu;
                    output = report;
                    michal = new echoed[tangon](result, output, sizing);
                    michal = michal instanceof Object ? michal : zuuluu;
                    throw michal;
 502:
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