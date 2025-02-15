// app/modules/main_tabs_v2/native/settings/definitions/CreateBugReportSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = {};
    golf = 1;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.RendererType;
    golf = golf.TOGGLE;
    mike['type'] = golf;
    golf = 5;
    options = oscar[golf];
    options = report.bind(entity)(options);
    verify = options.intl;
    options = verify.string;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.t;
    golf = golf.aIkGJC;
    golf = options.bind(verify)(golf);
    mike['title'] = golf;
    golf = null;
    mike['parent'] = golf;
    golf = 6;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.WrenchIcon;
    mike['IconComponent'] = golf;
    golf = function(argFoo) { // Original name: handleCreateBugReportSettingToggle
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 2;
            zulu = tango[entity];
            entity = undefined;
            oscar = report.bind(entity)(zulu);
            report = oscar.setDeveloperOptionSettings;
            zulu = {};
            golf = argFoo;
            if(golf) { _fun00002_ip = 82; continue _fun00001 }
 39:
            golf = false;
            zulu['bugReporterEnabled'] = golf;
            golf = report.bind(oscar)(zulu);
            options = _closure1_slot1;
            golf = 3;
            golf = tango[golf];
            verify = options.bind(entity)(golf);
            options = verify.terminate;
            golf = true;
            golf = options.bind(verify)(golf);
            _fun00002_ip = 120; continue _fun00001;
 82:
            golf = true;
            zulu['bugReporterEnabled'] = golf;
            zulu = report.bind(oscar)(zulu);
            zulu = _closure1_slot1;
            mike = 3;
            mike = tango[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.initialize;
            mike = mike.bind(zulu)();
 120:
            return entity;
        }
    };
    mike['onValueChange'] = golf;
    golf = function() { // Original name: useCreateBugReportSettingToggleValue
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 4;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        entity = _closure1_slot3;
        mike = new Array(1);
        mike[0] = entity;
        entity = function() {
            entity = _closure1_slot3;
            entity = entity.isBugReporterEnabled;
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike['useValue'] = golf;
    tango = function() { // Original name: useCreateBugReportSettingDescription
        entity = 'Photo permission is required';
        return entity;
    };
    mike['useDescription'] = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.useBugReporterExperimentSettingPredicate;
    mike['usePredicate'] = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/CreateBugReportSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();