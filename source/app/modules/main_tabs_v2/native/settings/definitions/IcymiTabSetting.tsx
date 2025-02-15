// app/modules/main_tabs_v2/native/settings/definitions/IcymiTabSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    golf = mike.MobileSetting;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.RendererType;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.AnalyticEvents;
    var _closure1_slot3 = mike;
    mike = {};
    options = options.TOGGLE;
    mike['type'] = options;
    options = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 7;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.D4clKi;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = options;
    golf = golf.ADVANCED;
    mike['parent'] = golf;
    golf = function() { // Original name: useICYMISettingValue
        mike = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 3;
        entity = zulu[entity];
        zulu = undefined;
        mike = mike.bind(zulu)(entity);
        entity = 'hide_icymi_tab';
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['useValue'] = golf;
    golf = function(argFoo) { // Original name: onICYMISettingValueChange
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            report = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 4;
            tango = tango[entity];
            entity = undefined;
            golf = report.bind(entity)(tango);
            oscar = golf.track;
            tango = _closure1_slot3;
            report = tango.FEED_ITEM_INTERACTED;
            tango = {};
            options = 'icymi_tab_toggle';
            tango['home_session_id'] = options;
            options = 'show';
            if(!mike) { _fun00002_ip = 67; continue _fun00001 }
 63:
            options = 'hide';
 67:
            tango['feed_item_id'] = options;
            tango = oscar.bind(golf)(report, tango);
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 5;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.toggleLabFeature;
            zulu = {};
            zulu['enabled'] = mike;
            mike = 'hide_icymi_tab';
            mike = tango.bind(report)(mike, zulu);
            return entity;
        }
    };
    mike['onValueChange'] = golf;
    tango = function() { // Original name: useICYMIPredicate
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.useICYMIExperiment;
        entity = 'settings';
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['usePredicate'] = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/IcymiTabSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();