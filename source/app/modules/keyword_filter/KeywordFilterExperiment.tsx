// app/modules/keyword_filter/KeywordFilterExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    yankee = true;
    tango['value'] = yankee;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    options = oscar.bind(entity)(tango);
    report = options.createExperiment;
    tango = {'kind': 'user', 'id': '2024-04_keyword_filter_experiment', 'label': 'Replace registered keywords with asterisks'};
    verify = {};
    offset = false;
    verify['enabled'] = offset;
    tango['defaultConfig'] = verify;
    offset = {'id': 1, 'label': 'Enable Keyword Filter'};
    verify = {};
    verify['enabled'] = yankee;
    offset['config'] = verify;
    verify = new Array(1);
    verify[0] = offset;
    tango['treatments'] = verify;
    tango = report.bind(options)(tango);
    var _closure1_slot2 = tango;
    report = 2;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/keyword_filter/KeywordFilterExperiment.tsx';
    report = oscar.bind(golf)(report);
    zulu['KeywordFilterExperiment'] = tango;
    tango = function(argFoo) { // Original name: useIsEligibleForKeywordFiltering
        _fun68973: for(var _fun68973_ip = 0; ; ) switch(_fun68973_ip) {
 0:
            entity = argFoo;
            entity = entity.location;
            report = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 1;
            tango = tango[mike];
            mike = undefined;
            report = report.bind(mike)(tango);
            tango = report.useIsEligibleForKeywordFilterUpsell;
            mike = {};
            mike['location'] = entity;
            mike = tango.bind(report)(mike);
            report = _closure1_slot2;
            tango = report.useExperiment;
            zulu = {};
            zulu['location'] = entity;
            entity = {};
            oscar = true;
            entity['autoTrackExposure'] = oscar;
            entity = tango.bind(report)(zulu, entity);
            entity = entity.enabled;
            if(entity) { _fun68973_ip = 92; continue _fun68973 }
 89:
            entity = mike;
 92:
            return entity;
        }
    };
    zulu['useIsEligibleForKeywordFiltering'] = tango;
    mike = function(argFoo) { // Original name: isEligibleForKeywordFiltering
        _fun68974: for(var _fun68974_ip = 0; ; ) switch(_fun68974_ip) {
 0:
            entity = argFoo;
            report = entity.location;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 1;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.isEligibleForKeywordFilterUpsell;
            mike = {};
            mike['location'] = report;
            mike = zulu.bind(tango)(mike);
            tango = _closure1_slot2;
            zulu = tango.getCurrentConfig;
            entity = {};
            entity['location'] = report;
            entity = zulu.bind(tango)(entity);
            entity = entity.enabled;
            if(entity) { _fun68974_ip = 82; continue _fun68974 }
 79:
            entity = mike;
 82:
            return entity;
        }
    };
    zulu['isEligibleForKeywordFiltering'] = mike;
    return entity;
})();