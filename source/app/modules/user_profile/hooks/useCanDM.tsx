// app/modules/user_profile/hooks/useCanDM.tsx
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
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_profile/hooks/useCanDM.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useCanDM
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        tango = _closure1_slot0;
        oscar = _closure1_slot1;
        mike = 5;
        golf = oscar[mike];
        zulu = undefined;
        offset = tango.bind(zulu)(golf);
        verify = offset.useStateFromStores;
        golf = _closure1_slot4;
        options = new Array(1);
        options[0] = golf;
        golf = function() {
            mike = _closure1_slot4;
            entity = mike.getId;
            mike = entity.bind(mike)();
            entity = _closure2_slot0;
            entity = mike === entity;
            return entity;
        };
        golf = verify.bind(offset)(options, golf);
        var _closure2_slot2 = golf;
        golf = oscar[mike];
        offset = tango.bind(zulu)(golf);
        verify = offset.useStateFromStores;
        golf = _closure1_slot3;
        options = new Array(1);
        options[0] = golf;
        golf = function() {
            _fun102776: for(var _fun102776_ip = 0; ; ) switch(_fun102776_ip) {
 0:
                zulu = _closure2_slot1;
                entity = null;
                entity = entity != zulu;
                if(!entity) { _fun102776_ip = 38; continue _fun102776 }
 16:
                tango = _closure1_slot3;
                zulu = tango.isLurking;
                mike = _closure2_slot1;
                entity = zulu.bind(tango)(mike);
 38:
                return entity;
            }
        };
        golf = verify.bind(offset)(options, golf);
        var _closure2_slot3 = golf;
        golf = 6;
        golf = oscar[golf];
        golf = tango.bind(zulu)(golf);
        options = golf.RestrictedGuildIds;
        golf = options.useSetting;
        golf = golf.bind(options)();
        var _closure2_slot4 = golf;
        mike = oscar[mike];
        tango = tango.bind(zulu)(mike);
        zulu = tango.useStateFromStores;
        oscar = _closure1_slot6;
        mike = new Array(3);
        mike[0] = oscar;
        oscar = _closure1_slot5;
        mike[1] = oscar;
        report = _closure1_slot2;
        mike[2] = report;
        entity = function() {
            _fun102777: for(var _fun102777_ip = 0; ; ) switch(_fun102777_ip) {
 0:
                entity = _closure2_slot2;
                entity = !entity;
                if(!entity) { _fun102777_ip = 20; continue _fun102777 }
 13:
                zulu = _closure2_slot3;
                entity = !zulu;
 20:
                if(!entity) { _fun102777_ip = 95; continue _fun102777 }
 23:
                oscar = _closure1_slot6;
                report = oscar.isFriend;
                zulu = _closure2_slot0;
                zulu = report.bind(oscar)(zulu);
                if(zulu) { _fun102777_ip = 92; continue _fun102777 }
 48:
                oscar = _closure1_slot5;
                report = oscar.memberOf;
                tango = _closure2_slot0;
                oscar = report.bind(oscar)(tango);
                report = oscar.find;
                tango = function(argFoo) {
                    zulu = _closure2_slot4;
                    mike = zulu.includes;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    entity = !entity;
                    return entity;
                };
                report = report.bind(oscar)(tango);
                tango = null;
                zulu = tango != report;
 92:
                entity = zulu;
 95:
                if(entity) { _fun102777_ip = 175; continue _fun102777 }
 98:
                report = _closure1_slot2;
                tango = report.getGameFriendsForUser;
                mike = _closure2_slot0;
                mike = tango.bind(report)(mike);
                tango = mike.length;
                mike = 0;
                mike = tango > mike;
                if(!mike) { _fun102777_ip = 172; continue _fun102777 }
 134:
                report = _closure1_slot0;
                tango = _closure1_slot1;
                zulu = 6;
                tango = tango[zulu];
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                tango = zulu.AllowGameFriendDmsInDiscord;
                zulu = tango.getSetting;
                mike = zulu.bind(tango)();
 172:
                entity = mike;
 175:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();