// app/modules/main_tabs_v2/native/settings/definitions/AndroidViewNsfwDmCommandsSetting.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
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
        entity = 7;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.VGWIAg;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = options;
    options = function() { // Original name: useDescription
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
        entity = entity.J4zza2;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['useDescription'] = options;
    golf = golf.CONTENT_AND_SOCIAL;
    mike['parent'] = golf;
    golf = function() { // Original name: useViewNsfwDmCommandsSettingValue
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = _closure1_slot0;
            report = _closure1_slot1;
            mike = 3;
            mike = report[mike];
            zulu = undefined;
            golf = tango.bind(zulu)(mike);
            oscar = golf.useStateFromStores;
            entity = _closure1_slot2;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                mike = _closure1_slot2;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            entity = oscar.bind(golf)(mike, entity);
            mike = 4;
            mike = report[mike];
            mike = tango.bind(zulu)(mike);
            tango = mike.ViewNsfwCommands;
            mike = tango.useSetting;
            mike = mike.bind(tango)();
            tango = null;
            tango = tango == entity;
            if(tango) { _fun00002_ip = 100; continue _fun00001 }
 94:
            zulu = entity.nsfwAllowed;
 100:
            entity = true;
            entity = entity === zulu;
            if(!entity) { _fun00002_ip = 112; continue _fun00001 }
 109:
            entity = mike;
 112:
            return entity;
        }
    };
    mike['useValue'] = golf;
    golf = 4;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.ViewNsfwCommands;
    golf = golf.updateSetting;
    mike['onValueChange'] = golf;
    tango = function() { // Original name: usePredicate
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 5;
            entity = tango[entity];
            tango = undefined;
            zulu = zulu.bind(tango)(entity);
            entity = zulu.useNSFWAllowed;
            zulu = entity.bind(zulu)();
            entity = null;
            entity = entity == zulu;
            if(entity) { _fun00004_ip = 47; continue _fun00003 }
 44:
            entity = zulu;
 47:
            if(!entity) { _fun00004_ip = 79; continue _fun00003 }
 50:
            zulu = _closure1_slot0;
            report = _closure1_slot1;
            mike = 6;
            mike = report[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.isAndroid;
            entity = mike.bind(zulu)();
 79:
            return entity;
        }
    };
    mike['usePredicate'] = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/AndroidViewNsfwDmCommandsSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    zulu['AndroidViewNsfwDmCommandsSettingV2'] = mike;
    return entity;
})();