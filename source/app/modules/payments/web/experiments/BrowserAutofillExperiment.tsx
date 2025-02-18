// app/modules/payments/web/experiments/BrowserAutofillExperiment.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    verify = tangon.CommonTriggerPoints;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.PremiumSubscriptionSKUs;
    var _closure1_slot2 = tangon;
    tangon = 2;
    report = golfie[tangon];
    offset = oscard.bind(entity)(report);
    option = offset.createExperiment;
    report = {'id': '2023-07_checkout_optimization_browser_autofill', 'label': 'Checkout Optimization Browser Autofill', 'kind': 'user'};
    yankee = {'enabled': false, 'delay': false};
    report['defaultConfig'] = yankee;
    romeon = {'id': 1, 'label': 'Enabled'};
    yankee = {'enabled': true, 'delay': false};
    romeon['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = romeon;
    romeon = {'id': 2, 'label': 'Enabled with delay'};
    foxtra = {'enabled': true, 'delay': true};
    romeon['config'] = foxtra;
    yankee[1] = romeon;
    report['treatments'] = yankee;
    report = option.bind(offset)(report);
    var _closure1_slot3 = report;
    tangon = golfie[tangon];
    option = oscard.bind(entity)(tangon);
    report = option.createExperiment;
    tangon = {'id': '2024-11_checkout_optimization_browser_autofill_global', 'label': 'Checkout Optimization Browser Autofill Global', 'kind': 'user'};
    offset = {'enabled': false, 'delay': false};
    tangon['defaultConfig'] = offset;
    verify = verify.PAYMENT_FLOW_STARTED;
    tangon['commonTriggerPoint'] = verify;
    offset = {'id': 1, 'label': 'Enabled'};
    verify = {'enabled': true, 'delay': false};
    offset['config'] = verify;
    verify = new Array(2);
    verify[0] = offset;
    offset = {'id': 2, 'label': 'Enabled with delay'};
    yankee = {'enabled': true, 'delay': true};
    offset['config'] = yankee;
    verify[1] = offset;
    tangon['treatments'] = verify;
    tangon = report.bind(option)(tangon);
    var _closure1_slot4 = tangon;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/payments/web/experiments/BrowserAutofillExperiment.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['BrowserAutofillExperimentGlobal'] = tangon;
    tangon = function() { // Original name: inBrowserAutofillExperiment
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = _closure1_slot3;
            report = golfie.getCurrentConfig;
            tangon = {};
            michal = '5f89bb_3';
            tangon['location'] = michal;
            entity = {};
            oscard = true;
            entity['autoTrackExposure'] = oscard;
            entity = report.bind(golfie)(tangon, entity);
            tangon = entity.enabled;
            if(tangon) { _fun00002_ip = 77; continue _fun00001 }
 48:
            report = _closure1_slot4;
            tangon = report.getCurrentConfig;
            zuuluu = {};
            zuuluu['location'] = michal;
            michal = {};
            michal['autoTrackExposure'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 77:
            return entity;
        }
    };
    zuuluu['inBrowserAutofillExperiment'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: allowDesktopRedirectPurchase
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 3;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = report.bind(entity)(zuuluu);
            entity = zuuluu.isDesktop;
            entity = entity.bind(zuuluu)();
            if(!entity) { _fun00004_ip = 47; continue _fun00003 }
 41:
            zuuluu = null;
            entity = zuuluu != tangon;
 47:
            if(!entity) { _fun00004_ip = 88; continue _fun00003 }
 50:
            michal = _closure1_slot2;
            report = michal.TIER_0;
            zuuluu = new Array(2);
            zuuluu[0] = report;
            michal = michal.TIER_2;
            zuuluu[1] = michal;
            michal = zuuluu.includes;
            entity = michal.bind(zuuluu)(tangon);
 88:
            if(!entity) { _fun00004_ip = 97; continue _fun00003 }
 91:
            michal = argBar;
            entity = !michal;
 97:
            if(!entity) { _fun00004_ip = 109; continue _fun00003 }
 100:
            zuuluu = null;
            michal = argBaz;
            entity = zuuluu == michal;
 109:
            return entity;
        }
    };
    zuuluu['allowDesktopRedirectPurchase'] = michal;
    return entity;
})();