// app/modules/payments/web/experiments/BrowserAutofillExperiment.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    verify = tango.CommonTriggerPoints;
    tango = 1;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.PremiumSubscriptionSKUs;
    var _closure1_slot2 = tango;
    tango = 2;
    report = golf[tango];
    offset = oscar.bind(entity)(report);
    options = offset.createExperiment;
    report = {'id': '2023-07_checkout_optimization_browser_autofill', 'label': 'Checkout Optimization Browser Autofill', 'kind': 'user'};
    yankee = {'enabled': false, 'delay': false};
    report['defaultConfig'] = yankee;
    romeo = {'id': 1, 'label': 'Enabled'};
    yankee = {'enabled': true, 'delay': false};
    romeo['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = romeo;
    romeo = {'id': 2, 'label': 'Enabled with delay'};
    foxtrot = {'enabled': true, 'delay': true};
    romeo['config'] = foxtrot;
    yankee[1] = romeo;
    report['treatments'] = yankee;
    report = options.bind(offset)(report);
    var _closure1_slot3 = report;
    tango = golf[tango];
    options = oscar.bind(entity)(tango);
    report = options.createExperiment;
    tango = {'id': '2024-11_checkout_optimization_browser_autofill_global', 'label': 'Checkout Optimization Browser Autofill Global', 'kind': 'user'};
    offset = {'enabled': false, 'delay': false};
    tango['defaultConfig'] = offset;
    verify = verify.PAYMENT_FLOW_STARTED;
    tango['commonTriggerPoint'] = verify;
    offset = {'id': 1, 'label': 'Enabled'};
    verify = {'enabled': true, 'delay': false};
    offset['config'] = verify;
    verify = new Array(2);
    verify[0] = offset;
    offset = {'id': 2, 'label': 'Enabled with delay'};
    yankee = {'enabled': true, 'delay': true};
    offset['config'] = yankee;
    verify[1] = offset;
    tango['treatments'] = verify;
    tango = report.bind(options)(tango);
    var _closure1_slot4 = tango;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/payments/web/experiments/BrowserAutofillExperiment.tsx';
    report = oscar.bind(golf)(report);
    zulu['BrowserAutofillExperimentGlobal'] = tango;
    tango = function() { // Original name: inBrowserAutofillExperiment
        _fun66277: for(var _fun66277_ip = 0; ; ) switch(_fun66277_ip) {
 0:
            golf = _closure1_slot3;
            report = golf.getCurrentConfig;
            tango = {};
            mike = '5f89bb_3';
            tango['location'] = mike;
            entity = {};
            oscar = true;
            entity['autoTrackExposure'] = oscar;
            entity = report.bind(golf)(tango, entity);
            tango = entity.enabled;
            if(tango) { _fun66277_ip = 77; continue _fun66277 }
 48:
            report = _closure1_slot4;
            tango = report.getCurrentConfig;
            zulu = {};
            zulu['location'] = mike;
            mike = {};
            mike['autoTrackExposure'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 77:
            return entity;
        }
    };
    zulu['inBrowserAutofillExperiment'] = tango;
    mike = function(argFoo, argBar, argBaz) { // Original name: allowDesktopRedirectPurchase
        _fun66278: for(var _fun66278_ip = 0; ; ) switch(_fun66278_ip) {
 0:
            tango = argFoo;
            report = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 3;
            zulu = zulu[entity];
            entity = undefined;
            zulu = report.bind(entity)(zulu);
            entity = zulu.isDesktop;
            entity = entity.bind(zulu)();
            if(!entity) { _fun66278_ip = 47; continue _fun66278 }
 41:
            zulu = null;
            entity = zulu != tango;
 47:
            if(!entity) { _fun66278_ip = 88; continue _fun66278 }
 50:
            mike = _closure1_slot2;
            report = mike.TIER_0;
            zulu = new Array(2);
            zulu[0] = report;
            mike = mike.TIER_2;
            zulu[1] = mike;
            mike = zulu.includes;
            entity = mike.bind(zulu)(tango);
 88:
            if(!entity) { _fun66278_ip = 97; continue _fun66278 }
 91:
            mike = argBar;
            entity = !mike;
 97:
            if(!entity) { _fun66278_ip = 109; continue _fun66278 }
 100:
            zulu = null;
            mike = argBaz;
            entity = zulu == mike;
 109:
            return entity;
        }
    };
    zulu['allowDesktopRedirectPurchase'] = mike;
    return entity;
})();