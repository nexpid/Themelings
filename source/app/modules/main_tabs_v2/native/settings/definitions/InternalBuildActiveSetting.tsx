// app/modules/main_tabs_v2/native/settings/definitions/InternalBuildActiveSetting.tsx
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
    mike = {'type': null, 'title': 'Internal Build Active', 'parent': null};
    golf = 1;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.RendererType;
    golf = golf.STATIC;
    mike['type'] = golf;
    golf = 3;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.MobilePhoneSettingsIcon;
    mike['IconComponent'] = golf;
    golf = function() { // Original name: useInternalBuildActiveDescription
        entity = 'Build installed from builds.discord.tools';
        return entity;
    };
    mike['useDescription'] = golf;
    tango = function() { // Original name: useHasCheckNativeUpdateSetting
        _fun99028: for(var _fun99028_ip = 0; ; ) switch(_fun99028_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 2;
            zulu = zulu[mike];
            mike = undefined;
            zulu = tango.bind(mike)(zulu);
            mike = zulu.useStaffOrDevEnvSettingPredicate;
            mike = mike.bind(zulu)();
            entity = _closure1_slot2;
            entity = entity.hasUpdatesConfigured;
            if(!entity) { _fun99028_ip = 51; continue _fun99028 }
 48:
            entity = mike;
 51:
            return entity;
        }
    };
    mike['usePredicate'] = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/InternalBuildActiveSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();