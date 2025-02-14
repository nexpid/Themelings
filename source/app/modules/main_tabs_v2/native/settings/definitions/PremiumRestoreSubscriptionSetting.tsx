// app/modules/main_tabs_v2/native/settings/definitions/PremiumRestoreSubscriptionSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    mike = {};
    golf = true;
    mike['value'] = golf;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.RendererType;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.jsx;
    var _closure1_slot4 = mike;
    mike = {};
    options = options.PRESSABLE;
    mike['type'] = options;
    options = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 9;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.s9h22N;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = options;
    options = null;
    mike['parent'] = options;
    options = 10;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.NitroWheelIcon;
    mike['IconComponent'] = options;
    options = function() { // Original name: handleNitroRestoreSettingPress
        zulu = _closure1_slot1;
        tango = _closure1_slot2;
        entity = 3;
        mike = tango[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        mike = report.restoreSubscription;
        mike = mike.bind(report)();
        mike = 4;
        mike = tango[mike];
        tango = zulu.bind(entity)(mike);
        zulu = tango.openLazy;
        mike = {};
        report = function() { // Original name: importer
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            mike = 6;
            mike = entity[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = 5;
            mike = entity[mike];
            entity = entity.paths;
            zulu = zulu.bind(tango)(mike, entity);
            mike = zulu.then;
            entity = function(argFoo) {
                mike = argFoo;
                mike = mike.default;
                var _closure4_slot0 = mike;
                entity = function(argFoo) {
                    tango = _closure1_slot4;
                    zulu = _closure4_slot0;
                    mike = {};
                    report = argFoo;
                    oscar = mike;
                    entity = copyDataProperties(oscar, report);
                    entity = undefined;
                    entity = tango.bind(entity)(zulu, mike);
                    return entity;
                };
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike['importer'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['onPress'] = options;
    mike['withArrow'] = golf;
    tango = function() { // Original name: useHasPremiumRestoreSubscriptionSetting
        _fun96963: for(var _fun96963_ip = 0; ; ) switch(_fun96963_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 7;
            entity = tango[entity];
            tango = undefined;
            oscar = zulu.bind(tango)(entity);
            report = oscar.useStateFromStores;
            entity = _closure1_slot3;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                mike = _closure1_slot3;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu = report.bind(oscar)(zulu, entity);
            entity = null;
            entity = entity != zulu;
            if(!entity) { _fun96963_ip = 72; continue _fun96963 }
 66:
            entity = zulu.verified;
 72:
            if(!entity) { _fun96963_ip = 107; continue _fun96963 }
 75:
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 8;
            mike = report[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.isAndroid;
            mike = mike.bind(zulu)();
            entity = !mike;
 107:
            return entity;
        }
    };
    mike['usePredicate'] = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/PremiumRestoreSubscriptionSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();