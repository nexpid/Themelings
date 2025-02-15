// app/modules/in_app_reports/IarSettingsUpsellsConfigLanguageFilter.tsx
export default (function(_, argBar, __, ___, ____, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    mike = {};
    entity = function() { // Original name: getTitle
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 0;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.DPVOLS;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['getTitle'] = entity;
    entity = function() { // Original name: getDisabledTitle
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 0;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.B/dag4;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['getDisabledTitle'] = entity;
    entity = function() { // Original name: getDescription
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 0;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.+Esd3N;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['getDescription'] = entity;
    options = 1;
    golf = oscar[options];
    entity = undefined;
    golf = report.bind(entity)(golf);
    golf = golf.ReportSubType;
    verify = golf.SUB_GENERAL_HARASSMENT;
    golf = new Array(3);
    golf[0] = verify;
    verify = oscar[options];
    verify = report.bind(entity)(verify);
    verify = verify.ReportSubType;
    verify = verify.SUB_RACIST_OR_DICRIMINATORY_LANGUAGE_OR_IMAGERY;
    golf[1] = verify;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.ReportSubType;
    options = options.SUB_VULGAR_LANGUAGE;
    golf[2] = options;
    mike['eligibleReportSubtypes'] = golf;
    golf = function() { // Original name: onApply
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.KeywordFilterSettings;
        mike = zulu.updateSetting;
        entity = {'profanity': true, 'slurs': true, 'sexualContent': true};
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['onApply'] = golf;
    tango = function() { // Original name: predicate
        _fun68977: for(var _fun68977_ip = 0; ; ) switch(_fun68977_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 3;
            entity = tango[entity];
            tango = undefined;
            report = zulu.bind(tango)(entity);
            zulu = report.isEligibleForKeywordFiltering;
            entity = {};
            oscar = 'iar_settings_upsells';
            entity['location'] = oscar;
            entity = zulu.bind(report)(entity);
            if(!entity) { _fun68977_ip = 84; continue _fun68977 }
 51:
            zulu = _closure1_slot0;
            report = _closure1_slot1;
            mike = 4;
            mike = report[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.getKeywordFilterSetting;
            mike = mike.bind(zulu)();
            entity = !mike;
 84:
            return entity;
        }
    };
    mike['predicate'] = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/in_app_reports/IarSettingsUpsellsConfigLanguageFilter.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();