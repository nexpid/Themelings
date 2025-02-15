// app/modules/main_tabs_v2/native/settings/definitions/ExperimentOverrideActiveSetting.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function() { // Original name: useExperimentOverrideActiveCount
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 4;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        entity = _closure1_slot2;
        mike = new Array(1);
        mike[0] = entity;
        entity = function() {
            entity = global;
            zulu = entity.Object;
            mike = zulu.keys;
            tango = _closure1_slot2;
            entity = tango.getAllExperimentOverrideDescriptors;
            entity = entity.bind(tango)();
            entity = mike.bind(zulu)(entity);
            entity = entity.length;
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    tango = true;
    mike['value'] = tango;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    options = oscar[entity];
    mike = argBaz;
    entity = undefined;
    mike = mike.bind(entity)(options);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.RendererType;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.jsx;
    var _closure1_slot3 = mike;
    mike = {'type': null, 'title': 'Experiments Overrides Active', 'parent': null};
    options = options.PRESSABLE;
    mike['type'] = options;
    options = 7;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.BeakerIcon;
    mike['IconComponent'] = options;
    options = function() { // Original name: useExperimentOverrideActiveDescription
        mike = _closure1_slot4;
        tango = undefined;
        oscar = mike.bind(tango)();
        zulu = _closure1_slot3;
        mike = _closure1_slot0;
        report = _closure1_slot1;
        entity = 5;
        entity = report[entity];
        entity = mike.bind(tango)(entity);
        mike = entity.DevToolsContentSubLabel;
        entity = {};
        report = 'Experiments overriden: ';
        entity['label'] = report;
        report = oscar.toString;
        report = report.bind(oscar)();
        entity['value'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike['useDescription'] = options;
    options = function() { // Original name: useHasExperimentOverrideActive
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 6;
            mike = zulu[mike];
            zulu = undefined;
            tango = tango.bind(zulu)(mike);
            mike = tango.useStaffOrDevEnvSettingPredicate;
            mike = mike.bind(tango)();
            entity = _closure1_slot4;
            zulu = entity.bind(zulu)();
            entity = 0;
            entity = zulu > entity;
            if(!entity) { _fun00002_ip = 55; continue _fun00001 }
 52:
            entity = mike;
 55:
            return entity;
        }
    };
    mike['usePredicate'] = options;
    golf = function() { // Original name: handleExperimentOverrideActivePress
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.navigateToDevTools;
        mike = {};
        report = 'experiments';
        mike['screenKey'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['onPress'] = golf;
    mike['withArrow'] = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/ExperimentOverrideActiveSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();