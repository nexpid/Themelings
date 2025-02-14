// app/modules/user_settings/native/openUserSettings.tsx
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
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.UserSettingsSections;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_settings/native/openUserSettings.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        _fun65407: for(var _fun65407_ip = 0; ; ) switch(_fun65407_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 1;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.getRootNavigationRef;
            tango = mike.bind(zulu)();
            golf = null;
            mike = golf != tango;
            if(!mike) { _fun65407_ip = 57; continue _fun65407 }
 47:
            zulu = tango.isReady;
            mike = zulu.bind(tango)();
 57:
            if(!mike) { _fun65407_ip = 174; continue _fun65407 }
 60:
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 2;
            mike = oscar[mike];
            oscar = zulu.bind(entity)(mike);
            zulu = oscar.dispatch;
            mike = {};
            options = 'USER_SETTINGS_MODAL_INIT';
            mike['type'] = options;
            options = report.screen;
            if(!(golf == options)) { _fun65407_ip = 115; continue _fun65407 }
 105:
            verify = _closure1_slot3;
            options = verify.OVERVIEW;
 115:
            mike['section'] = options;
            options = report.subsection;
            verify = golf != options;
            golf = null;
            if(!verify) { _fun65407_ip = 137; continue _fun65407 }
 134:
            golf = options;
 137:
            mike['subsection'] = golf;
            golf = report.analyticsLocation;
            mike['analyticsLocation'] = golf;
            mike = zulu.bind(oscar)(mike);
            zulu = tango.navigate;
            mike = 'settings';
            mike = zulu.bind(tango)(mike, report);
 174:
            return entity;
        }
    };
    zulu['openUserSettings'] = mike;
    return entity;
})();