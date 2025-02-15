// app/modules/applications/ApplicationPresenceUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    zulu = argFred;
    report = argPlugh;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, tango);
    entity = 0;
    oscar = report[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(oscar);
    var _closure1_slot0 = tango;
    tango = 1;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/applications/ApplicationPresenceUtils.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: shouldDisableUserPresenceInChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            tango = _closure1_slot0;
            zulu = tango.getChannel;
            entity = argBar;
            tango = zulu.bind(tango)(entity);
            zulu = null;
            entity = zulu != tango;
            if(!entity) { _fun00002_ip = 44; continue _fun00001 }
 38:
            entity = report.bot;
 44:
            if(!entity) { _fun00002_ip = 57; continue _fun00001 }
 47:
            report = tango.isPrivate;
            entity = report.bind(tango)();
 57:
            if(!entity) { _fun00002_ip = 87; continue _fun00001 }
 60:
            report = tango.rawRecipients;
            tango = report.find;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike === entity;
                return entity;
            };
            mike = tango.bind(report)(mike);
            entity = zulu == mike;
 87:
            return entity;
        }
    };
    zulu['shouldDisableUserPresenceInChannel'] = mike;
    return entity;
})();