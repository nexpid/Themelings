// app/modules/main_tabs_v2/native/settings/definitions/BuildOverrideActiveSetting.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function() { // Original name: useBuildOverrideActive
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
            _fun99071: for(var _fun99071_ip = 0; ; ) switch(_fun99071_ip) {
 0:
                zulu = _closure1_slot2;
                entity = zulu.getCurrentBuildOverride;
                entity = entity.bind(zulu)();
                report = entity.overrides;
                zulu = null;
                oscar = zulu == report;
                tango = undefined;
                entity = undefined;
                if(oscar) { _fun99071_ip = 80; continue _fun99071 }
 36:
                oscar = _closure1_slot0;
                golf = _closure1_slot1;
                mike = 5;
                mike = golf[mike];
                mike = oscar.bind(tango)(mike);
                mike = mike.DEVICE_FIELD;
                mike = report[mike];
                zulu = zulu == mike;
                entity = undefined;
                if(zulu) { _fun99071_ip = 80; continue _fun99071 }
 75:
                entity = mike.id;
 80:
                return entity;
            }
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
    mike = {'type': null, 'title': 'Build Override Active', 'parent': null};
    options = options.PRESSABLE;
    mike['type'] = options;
    options = 8;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.RefreshIcon;
    mike['IconComponent'] = options;
    options = function() { // Original name: useBuildOverrideActiveDescription
        _fun99072: for(var _fun99072_ip = 0; ; ) switch(_fun99072_ip) {
 0:
            entity = _closure1_slot4;
            report = undefined;
            oscar = entity.bind(report)();
            entity = null;
            zulu = entity != oscar;
            entity = undefined;
            if(!zulu) { _fun99072_ip = 76; continue _fun99072 }
 24:
            tango = _closure1_slot3;
            zulu = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 7;
            mike = golf[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.DevToolsContentSubLabel;
            mike = {};
            golf = 'Build override: ';
            mike['label'] = golf;
            mike['value'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 76:
            return entity;
        }
    };
    mike['useDescription'] = options;
    options = function() { // Original name: useHasBuildOverrideActive
        _fun99073: for(var _fun99073_ip = 0; ; ) switch(_fun99073_ip) {
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
            entity = null;
            entity = entity != zulu;
            if(!entity) { _fun99073_ip = 55; continue _fun99073 }
 52:
            entity = mike;
 55:
            return entity;
        }
    };
    mike['usePredicate'] = options;
    golf = function() { // Original name: handleBuildOverrideActivePress
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.navigateToDevTools;
        mike = {};
        report = 'buildOverride';
        mike['screenKey'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['onPress'] = golf;
    mike['withArrow'] = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/BuildOverrideActiveSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();