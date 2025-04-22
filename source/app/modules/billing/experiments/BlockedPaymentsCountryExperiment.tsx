// app/modules/billing/experiments/BlockedPaymentsCountryExperiment.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    romeon = true;
    tangon['value'] = romeon;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    report = 0;
    tangon = golfie[report];
    entity = undefined;
    verify = oscard.bind(entity)(tangon);
    option = verify.createExperiment;
    tangon = {'kind': 'user', 'id': '2022-03_block_russian_purchases', 'label': 'Block purchases based on country'};
    offset = {};
    yankee = false;
    offset['paymentsBlocked'] = yankee;
    tangon['defaultConfig'] = offset;
    foxtra = {'id': 1, 'label': 'Payments Blocked'};
    offset = {};
    offset['paymentsBlocked'] = romeon;
    foxtra['config'] = offset;
    offset = new Array(1);
    offset[0] = foxtra;
    tangon['treatments'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot2 = tangon;
    report = golfie[report];
    verify = oscard.bind(entity)(report);
    option = verify.createExperiment;
    report = {'kind': 'user', 'id': '2022-03_block_russian_purchases_desktop', 'label': 'Block purchases based on country (desktop specific flags)'};
    offset = {};
    offset['checkPaymentSource'] = yankee;
    report['defaultConfig'] = offset;
    yankee = {'id': 1, 'label': 'Check Payment Source'};
    offset = {};
    offset['checkPaymentSource'] = romeon;
    yankee['config'] = offset;
    offset = new Array(1);
    offset[0] = yankee;
    report['treatments'] = offset;
    report = option.bind(verify)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/billing/experiments/BlockedPaymentsCountryExperiment.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    michal = function() { // Original name: useBlockedPaymentsConfig
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = _closure1_slot2;
            tangon = report.useExperiment;
            michal = {};
            entity = 'c519a9_1';
            michal['location'] = entity;
            entity = {};
            golfie = false;
            entity['autoTrackExposure'] = golfie;
            entity = tangon.bind(report)(michal, entity);
            entity = entity.paymentsBlocked;
            oscard = _closure1_slot3;
            report = oscard.useExperiment;
            tangon = {};
            michal = 'c519a9_2';
            tangon['location'] = michal;
            michal = {};
            michal['autoTrackExposure'] = golfie;
            michal = report.bind(oscard)(tangon, michal);
            michal = michal.checkPaymentSource;
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = 1;
            zuuluu = tangon[zuuluu];
            tangon = undefined;
            zuuluu = report.bind(tangon)(zuuluu);
            zuuluu = zuuluu.bind(tangon)();
            tangon = zuuluu.defaultBillingCountryCode;
            if(entity) { _fun00002_ip = 136; continue _fun00001 }
 122:
            if(!michal) { _fun00002_ip = 133; continue _fun00001 }
 125:
            zuuluu = 'RU';
            michal = zuuluu === tangon;
 133:
            entity = michal;
 136:
            return entity;
        }
    };
    zuuluu['useBlockedPaymentsConfig'] = michal;
    return entity;
})();