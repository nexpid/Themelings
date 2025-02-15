// app/modules/billing/experiments/BlockedPaymentsCountryExperiment.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    romeo = true;
    tango['value'] = romeo;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    report = 0;
    tango = golf[report];
    entity = undefined;
    verify = oscar.bind(entity)(tango);
    options = verify.createExperiment;
    tango = {'kind': 'user', 'id': '2022-03_block_russian_purchases', 'label': 'Block purchases based on country'};
    offset = {};
    yankee = false;
    offset['paymentsBlocked'] = yankee;
    tango['defaultConfig'] = offset;
    foxtrot = {'id': 1, 'label': 'Payments Blocked'};
    offset = {};
    offset['paymentsBlocked'] = romeo;
    foxtrot['config'] = offset;
    offset = new Array(1);
    offset[0] = foxtrot;
    tango['treatments'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot2 = tango;
    report = golf[report];
    verify = oscar.bind(entity)(report);
    options = verify.createExperiment;
    report = {'kind': 'user', 'id': '2022-03_block_russian_purchases_desktop', 'label': 'Block purchases based on country (desktop specific flags)'};
    offset = {};
    offset['checkPaymentSource'] = yankee;
    report['defaultConfig'] = offset;
    yankee = {'id': 1, 'label': 'Check Payment Source'};
    offset = {};
    offset['checkPaymentSource'] = romeo;
    yankee['config'] = offset;
    offset = new Array(1);
    offset[0] = yankee;
    report['treatments'] = offset;
    report = options.bind(verify)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/billing/experiments/BlockedPaymentsCountryExperiment.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    mike = function() { // Original name: useBlockedPaymentsConfig
        _fun66187: for(var _fun66187_ip = 0; ; ) switch(_fun66187_ip) {
 0:
            report = _closure1_slot2;
            tango = report.useExperiment;
            mike = {};
            entity = 'c519a9_1';
            mike['location'] = entity;
            entity = {};
            golf = false;
            entity['autoTrackExposure'] = golf;
            entity = tango.bind(report)(mike, entity);
            entity = entity.paymentsBlocked;
            oscar = _closure1_slot3;
            report = oscar.useExperiment;
            tango = {};
            mike = 'c519a9_2';
            tango['location'] = mike;
            mike = {};
            mike['autoTrackExposure'] = golf;
            mike = report.bind(oscar)(tango, mike);
            mike = mike.checkPaymentSource;
            report = _closure1_slot0;
            tango = _closure1_slot1;
            zulu = 1;
            zulu = tango[zulu];
            tango = undefined;
            zulu = report.bind(tango)(zulu);
            zulu = zulu.bind(tango)();
            tango = zulu.defaultBillingCountryCode;
            if(entity) { _fun66187_ip = 136; continue _fun66187 }
 122:
            if(!mike) { _fun66187_ip = 133; continue _fun66187 }
 125:
            zulu = 'RU';
            mike = zulu === tango;
 133:
            entity = mike;
 136:
            return entity;
        }
    };
    zulu['useBlockedPaymentsConfig'] = mike;
    return entity;
})();