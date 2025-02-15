// app/modules/main_tabs_v2/native/settings/definitions/GuildSettingActivityStatus.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
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
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    golf = mike.getSelectedGuildId;
    var _closure1_slot2 = golf;
    mike = mike.useUserSafetySettingsSelectedGuildStore;
    var _closure1_slot3 = mike;
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
        entity = entity.IQO6Bg;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = options;
    options = function() { // Original name: useDescription
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
        entity = entity.TUKMam;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['useDescription'] = options;
    golf = golf.CONTENT_AND_SOCIAL;
    mike['parent'] = golf;
    golf = function() { // Original name: useValue
        mike = _closure1_slot3;
        tango = undefined;
        mike = mike.bind(tango)();
        zulu = mike.selectedGuildId;
        mike = _closure1_slot0;
        report = _closure1_slot1;
        entity = 3;
        entity = report[entity];
        entity = mike.bind(tango)(entity);
        mike = entity.ActivityRestrictedGuilds;
        entity = mike.useSetting;
        mike = entity.bind(mike)();
        entity = mike.includes;
        entity = entity.bind(mike)(zulu);
        entity = !entity;
        return entity;
    };
    mike['useValue'] = golf;
    tango = function(argFoo) { // Original name: onValueChange
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = _closure1_slot2;
            entity = undefined;
            tango = zulu.bind(entity)();
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            zulu = 4;
            zulu = oscar[zulu];
            report = report.bind(entity)(zulu);
            zulu = report.getSanitizedActivityRestrictedGuilds;
            oscar = zulu.bind(report)();
            zulu = argFoo;
            if(zulu) { _fun00002_ip = 61; continue _fun00001 }
 49:
            zulu = oscar.add;
            zulu = zulu.bind(oscar)(tango);
            _fun00002_ip = 71; continue _fun00001;
 61:
            zulu = oscar.delete;
            zulu = zulu.bind(oscar)(tango);
 71:
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 3;
            mike = tango[mike];
            mike = zulu.bind(entity)(mike);
            tango = mike.ActivityRestrictedGuilds;
            zulu = tango.updateSetting;
            mike = new Array(0);
            golf = 0;
            verify = mike;
            options = oscar;
            report = arraySpread(verify, options, golf);
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    mike['onValueChange'] = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/GuildSettingActivityStatus.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();