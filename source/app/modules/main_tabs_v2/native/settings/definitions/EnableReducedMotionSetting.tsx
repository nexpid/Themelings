// app/modules/main_tabs_v2/native/settings/definitions/EnableReducedMotionSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    entity = 0;
    golf = oscar[entity];
    mike = argBaz;
    entity = undefined;
    mike = mike.bind(entity)(golf);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.MobileSetting;
    mike = {};
    options = 2;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.RendererType;
    options = options.TOGGLE;
    mike['type'] = options;
    options = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 5;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.e3TR1d;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = options;
    golf = golf.ACCESSIBILITY;
    mike['parent'] = golf;
    golf = function() { // Original name: useReducedMotionSettingValue
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 3;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        entity = _closure1_slot2;
        mike = new Array(1);
        mike[0] = entity;
        entity = function() {
            entity = _closure1_slot2;
            entity = entity.useReducedMotion;
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike['useValue'] = golf;
    tango = function(argFoo) { // Original name: onReducedMotionSettingValueChange
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 4;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.setPrefersReducedMotion;
            mike = 'no-preference';
            report = argFoo;
            if(!report) { _fun00002_ip = 47; continue _fun00001 }
 43:
            mike = 'reduce';
 47:
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    mike['onValueChange'] = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/EnableReducedMotionSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();