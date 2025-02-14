// app/actions/SubscriptionPlanActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    tango = function() { // Original name: fetchSubscriptionPlansForSKU
        entity = undefined;
        tango = _closure1_slot9;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot8 = tango;
    entity = function() { // Original name: _fetchSubscriptionPlansForSKU
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz, argCorge, argGrault) {
            entity = function* (argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: ?anon_0_
                _fun65748: for(var _fun65748_ip = 0; ; ) switch(_fun65748_ip) {
 0:
                    StartGenerator();
                    kilo = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun65748_ip = 498; continue _fun65748 }
 13:
                    oscar = kilo;
                    romeo = argBar;
                    yankee = argBaz;
                    verify = argCorge;
                    golf = argGrault;
                    tango = undefined;
                    zulu = undefined;
                    report = undefined;
                    foxtrot = _closure1_slot1;
                    offset = _closure1_slot2;
                    options = 4;
                    offset = offset[options];
                    backup = foxtrot.bind(tango)(offset);
                    foxtrot = backup.dispatch;
                    offset = {};
                    sizing = 'SUBSCRIPTION_PLANS_FETCH';
                    offset['type'] = sizing;
                    offset['skuId'] = kilo;
                    offset = foxtrot.bind(backup)(offset);
 84: // try_start_0
                    offset = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    kilo = _closure1_slot5;
                    backup = kilo.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS;
                    foxtrot = oscar;
                    foxtrot = backup.bind(kilo)(foxtrot);
                    offset['url'] = foxtrot;
                    zulu = offset;
                    report = {};
                    foxtrot = romeo;
                    offset = null;
                    if(!(offset != foxtrot)) { _fun65748_ip = 141; continue _fun65748 }
 132:
                    foxtrot = report;
                    foxtrot['country_code'] = romeo;
 141:
                    romeo = yankee;
                    if(!(offset != romeo)) { _fun65748_ip = 157; continue _fun65748 }
 148:
                    romeo = report;
                    romeo['payment_source_id'] = yankee;
 157:
                    yankee = verify;
                    if(!(offset != yankee)) { _fun65748_ip = 173; continue _fun65748 }
 164:
                    yankee = report;
                    yankee['include_unpublished'] = verify;
 173:
                    verify = golf;
                    if(!(offset != verify)) { _fun65748_ip = 191; continue _fun65748 }
 180:
                    verify = report;
                    verify['revenue_surface'] = golf;
 191:
                    golf = zulu;
                    golf['query'] = report;
                    report = _closure1_slot4;
                    report = report.ipCountryCodeLoaded;
                    if(report) { _fun65748_ip = 256; continue _fun65748 }
 213:
                    golf = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 5;
                    report = verify[report];
                    golf = golf.bind(tango)(report);
                    report = golf.fetchIpCountryCode;
                    report = report.bind(golf)();
                    SaveGenerator(address=247);
 245:
                    return report;
 247:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(!golf) { _fun65748_ip = 256; continue _fun65748 }
 253: // try_end0
                    return report;
 256: // try_start_1
                    golf = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 6;
                    report = verify[report];
                    report = golf.bind(tango)(report);
                    golf = report.HTTP;
                    report = golf.get;
                    zulu = report.bind(golf)(zulu);
                    SaveGenerator(address=295);
 293:
                    return zulu;
 295:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun65748_ip = 361; continue _fun65748 }
 301:
                    golf = _closure1_slot1;
                    report = _closure1_slot2;
                    report = report[options];
                    verify = golf.bind(tango)(report);
                    golf = verify.dispatch;
                    report = {};
                    offset = 'SUBSCRIPTION_PLANS_FETCH_SUCCESS';
                    report['type'] = offset;
                    offset = oscar;
                    report['skuId'] = offset;
                    offset = zulu.body;
                    report['subscriptionPlans'] = offset;
                    report = golf.bind(verify)(report);
 358: // try_end1
                    return tango;
 361:
                    return zulu;
 364: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=4);
                    zulu = _closure1_slot1;
                    golf = _closure1_slot2;
                    options = golf[options];
                    offset = zulu.bind(tango)(options);
                    verify = offset.dispatch;
                    options = {};
                    yankee = 'SUBSCRIPTION_PLANS_FETCH_FAILURE';
                    options['type'] = yankee;
                    options['skuId'] = oscar;
                    options = verify.bind(offset)(options);
                    options = _closure1_slot0;
                    mike = 7;
                    mike = golf[mike];
                    options = options.bind(tango)(mike);
                    mike = options.captureBillingException;
                    mike = mike.bind(options)(report);
                    mike = 8;
                    mike = golf[mike];
                    tango = zulu.bind(tango)(mike);
                    mike = global;
                    mike = mike.HermesInternal;
                    zulu = mike.concat;
                    mike = 'Failed to fetch subscription plans for SKU ';
                    result = zulu.bind(mike)(oscar);
                    zulu = tango.prototype;
                    zulu = Object.create(zulu, {constructor: {value: tango}});
                    echo = zulu;
                    output = report;
                    mike = new echo[tango](result, output, sizing);
                    mike = mike instanceof Object ? mike : zulu;
                    throw mike;
 498:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot9 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
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
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.Endpoints;
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.ACTIVE_PREMIUM_SKUS;
    var _closure1_slot6 = options;
    report = report.PremiumSubscriptionSKUs;
    var _closure1_slot7 = report;
    report = 9;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'actions/SubscriptionPlanActionCreators.tsx';
    report = oscar.bind(golf)(report);
    zulu['fetchSubscriptionPlansForSKU'] = tango;
    tango = function(argFoo, argBar) { // Original name: fetchSubscriptionPlansBySKUs
        oscar = argFoo;
        mike = argBar;
        var _closure2_slot0 = mike;
        mike = global;
        zulu = mike.Promise;
        mike = zulu.all;
        report = oscar.filter;
        tango = function(argFoo) {
            entity = _closure1_slot7;
            mike = entity.NONE;
            entity = argFoo;
            entity = entity !== mike;
            return entity;
        };
        report = report.bind(oscar)(tango);
        tango = report.map;
        entity = function(argFoo) {
            tango = _closure1_slot8;
            zulu = _closure2_slot0;
            mike = undefined;
            entity = argFoo;
            entity = tango.bind(mike)(entity, zulu);
            return entity;
        };
        entity = tango.bind(report)(entity);
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['fetchSubscriptionPlansBySKUs'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: fetchPremiumSubscriptionPlans
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        mike = global;
        zulu = mike.Promise;
        mike = zulu.all;
        oscar = _closure1_slot6;
        report = oscar.filter;
        tango = function(argFoo) {
            entity = _closure1_slot7;
            mike = entity.NONE;
            entity = argFoo;
            entity = entity !== mike;
            return entity;
        };
        report = report.bind(oscar)(tango);
        tango = report.map;
        entity = function(argFoo) {
            oscar = _closure1_slot8;
            offset = _closure2_slot0;
            verify = _closure2_slot1;
            golf = _closure2_slot2;
            yankee = argFoo;
            romeo = undefined;
            options = undefined;
            entity = romeo[oscar](yankee, offset, verify, options, golf, oscar);
            return entity;
        };
        entity = tango.bind(report)(entity);
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['fetchPremiumSubscriptionPlans'] = tango;
    mike = function() { // Original name: resetSubscriptionPlanData
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'SUBSCRIPTION_PLANS_RESET';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['resetSubscriptionPlanData'] = mike;
    return entity;
})();