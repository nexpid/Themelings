// app/modules/chat/useTypingUsersIds.tsx
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
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/chat/useTypingUsersIds.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useTypingUserIds
        _fun100545: for(var _fun100545_ip = 0; ; ) switch(_fun100545_ip) {
 0:
            golf = argFoo;
            oscar = arguments[1];
            var _closure2_slot0 = golf;
            report = undefined;
            if(!(oscar === report)) { _fun100545_ip = 32; continue _fun100545 }
 18:
            mike = global;
            mike = mike.Number;
            oscar = mike.MAX_SAFE_INTEGER;
 32:
            var _closure2_slot1 = oscar;
            tango = _closure1_slot0;
            options = _closure1_slot1;
            zulu = 3;
            zulu = options[zulu];
            report = tango.bind(report)(zulu);
            tango = report.useStateFromStoresArray;
            options = _closure1_slot4;
            zulu = new Array(3);
            zulu[0] = options;
            options = _closure1_slot3;
            zulu[1] = options;
            mike = _closure1_slot2;
            zulu[2] = mike;
            mike = new Array(2);
            mike[0] = golf;
            mike[1] = oscar;
            entity = function() {
                _fun100546: for(var _fun100546_ip = 0; ; ) switch(_fun100546_ip) {
 0:
                    mike = _closure1_slot4;
                    entity = mike.getCurrentUser;
                    entity = entity.bind(mike)();
                    verify = null;
                    mike = verify == entity;
                    options = undefined;
                    if(mike) { _fun100546_ip = 32; continue _fun100546 }
 27:
                    options = entity.id;
 32:
                    zulu = _closure1_slot3;
                    mike = zulu.getTypingUsers;
                    entity = _closure2_slot0;
                    mike = mike.bind(zulu)(entity);
                    entity = new Array(0);
                    report = mike;
                    for(mike in report)
 69:
                    {
 78:
                        foxtrot = mike;
                        romeo = entity.length;
                        yankee = _closure2_slot1;
                        if(!(!(romeo >= yankee))) { _fun100546_ip = 162; continue _fun100546 }
 94:
                        romeo = _closure1_slot4;
                        yankee = romeo.getUser;
                        yankee = yankee.bind(romeo)(foxtrot);
                        if(verify == yankee) { _fun100546_ip = 69; continue _fun100546 }
 113:
                        romeo = yankee.id;
                        if(romeo === options) { _fun100546_ip = 69; continue _fun100546 }
 122:
                        backup = _closure1_slot2;
                        foxtrot = backup.isBlockedOrIgnored;
                        romeo = yankee.id;
                        romeo = foxtrot.bind(backup)(romeo);
                        if(romeo) { _fun100546_ip = 69; continue _fun100546 }
 145:
                        romeo = entity.push;
                        yankee = yankee.id;
                        yankee = romeo.bind(entity)(yankee);
                        _fun100546_ip = 69; continue _fun100546;
                    }
 162:
                    return entity;
                }
            };
            entity = tango.bind(report)(zulu, entity, mike);
            return entity;
        }
    };
    zulu['useTypingUserIds'] = mike;
    return entity;
})();