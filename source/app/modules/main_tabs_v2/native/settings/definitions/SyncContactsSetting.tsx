// app/modules/main_tabs_v2/native/settings/definitions/SyncContactsSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    var _closure1_slot2 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.MobileSetting;
    mike = 3;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.RendererType;
    mike = 4;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.PlatformTypes;
    var _closure1_slot4 = mike;
    mike = {};
    options = options.TOGGLE;
    mike['type'] = options;
    options = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 7;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.uSvEy8;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = options;
    golf = golf.CONTENT_AND_SOCIAL;
    mike['parent'] = golf;
    golf = function() { // Original name: useContactSyncSettingValue
        tango = _closure1_slot0;
        report = _closure1_slot1;
        entity = 5;
        zulu = report[entity];
        mike = undefined;
        oscar = tango.bind(mike)(zulu);
        zulu = oscar.useContactSyncAccount;
        zulu = zulu.bind(oscar)();
        entity = report[entity];
        mike = tango.bind(mike)(entity);
        entity = mike.isContactSyncEnabled;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike['useValue'] = golf;
    tango = function(argFoo) { // Original name: onContactSyncSettingValueChange
        _fun94779: for(var _fun94779_ip = 0; ; ) switch(_fun94779_ip) {
 0:
            tango = _closure1_slot2;
            zulu = tango.getLocalAccount;
            entity = _closure1_slot4;
            entity = entity.CONTACTS;
            oscar = zulu.bind(tango)(entity);
            zulu = _closure1_slot3;
            entity = zulu.getCurrentUser;
            zulu = entity.bind(zulu)();
            entity = null;
            tango = entity == zulu;
            entity = undefined;
            report = undefined;
            if(tango) { _fun94779_ip = 60; continue _fun94779 }
 54:
            report = zulu.phone;
 60:
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 6;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.handleSyncContacts;
            mike = argFoo;
            mike = zulu.bind(tango)(oscar, report, mike);
            return entity;
        }
    };
    mike['onValueChange'] = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/SyncContactsSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();