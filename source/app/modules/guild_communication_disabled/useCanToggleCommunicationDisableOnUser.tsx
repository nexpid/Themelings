// app/modules/guild_communication_disabled/useCanToggleCommunicationDisableOnUser.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argCorge;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golf;
    mike = function(argFoo, argBar) { // Original name: canToggleCommunicationDisableOnUser
        _fun71477: for(var _fun71477_ip = 0; ; ) switch(_fun71477_ip) {
 0:
            mike = arguments[2];
            verify = undefined;
            if(!(mike === verify)) { _fun71477_ip = 43; continue _fun71477 }
 9:
            tango = _closure1_slot5;
            entity = new Array(3);
            entity[0] = tango;
            tango = _closure1_slot3;
            entity[1] = tango;
            zulu = _closure1_slot4;
            entity[2] = zulu;
            mike = entity;
 43:
            report = mike;
            entity = report[Symbol.iterator];
            report = entity().next;
            tango = report().value;
            mike = entity;
            mike = mike === verify;
            zulu = undefined;
            if(mike) { _fun71477_ip = 68; continue _fun71477 }
 65:
            zulu = tango;
 68:
            tango = undefined;
            if(mike) { _fun71477_ip = 98; continue _fun71477 }
 73:
            golf = report().value;
            oscar = entity;
            oscar = oscar === verify;
            tango = undefined;
            mike = oscar;
            if(oscar) { _fun71477_ip = 98; continue _fun71477 }
 92:
            tango = golf;
            mike = oscar;
 98:
            options = undefined;
            if(mike) { _fun71477_ip = 128; continue _fun71477 }
 103:
            oscar = report().value;
            report = entity;
            report = report === verify;
            options = undefined;
            mike = report;
            if(report) { _fun71477_ip = 128; continue _fun71477 }
 122:
            options = oscar;
            mike = report;
 128:
            if(mike) { _fun71477_ip = 134; continue _fun71477 }
 131:
            entity.return();
 134:
            mike = tango.getGuild;
            entity = argFoo;
            golf = mike.bind(tango)(entity);
            mike = zulu.getUser;
            entity = argBar;
            oscar = mike.bind(zulu)(entity);
            mike = null;
            entity = mike != golf;
            if(!entity) { _fun71477_ip = 174; continue _fun71477 }
 170:
            entity = mike != oscar;
 174:
            if(!entity) { _fun71477_ip = 307; continue _fun71477 }
 180:
            mike = oscar.isNonUserBot;
            mike = mike.bind(oscar)();
            mike = !mike;
            if(!mike) { _fun71477_ip = 304; continue _fun71477 }
 196:
            zulu = golf.isOwner;
            zulu = zulu.bind(golf)(oscar);
            if(zulu) { _fun71477_ip = 269; continue _fun71477 }
 210:
            report = _closure1_slot1;
            yankee = _closure1_slot2;
            tango = 4;
            tango = yankee[tango];
            verify = report.bind(verify)(tango);
            report = verify.can;
            tango = {};
            offset = _closure1_slot6;
            offset = offset.ADMINISTRATOR;
            tango['permission'] = offset;
            tango['user'] = oscar;
            tango['context'] = golf;
            zulu = report.bind(verify)(tango);
 269:
            zulu = !zulu;
            if(!zulu) { _fun71477_ip = 301; continue _fun71477 }
 275:
            report = options.canManageUser;
            tango = _closure1_slot6;
            tango = tango.MODERATE_MEMBERS;
            zulu = report.bind(options)(tango, oscar, golf);
 301:
            mike = zulu;
 304:
            entity = mike;
 307:
            return entity;
        }
    };
    var _closure1_slot7 = mike;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.Permissions;
    var _closure1_slot6 = report;
    report = 6;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_communication_disabled/useCanToggleCommunicationDisableOnUser.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo, argBar) { // Original name: useCanToggleCommunicationDisableOnUser
        golf = argFoo;
        oscar = argBar;
        var _closure2_slot0 = golf;
        var _closure2_slot1 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 5;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        options = _closure1_slot5;
        zulu = new Array(3);
        zulu[0] = options;
        options = _closure1_slot3;
        zulu[1] = options;
        mike = _closure1_slot4;
        zulu[2] = mike;
        mike = new Array(2);
        mike[0] = golf;
        mike[1] = oscar;
        entity = function() {
            report = _closure1_slot7;
            tango = _closure2_slot0;
            zulu = _closure2_slot1;
            oscar = _closure1_slot5;
            mike = new Array(3);
            mike[0] = oscar;
            oscar = _closure1_slot3;
            mike[1] = oscar;
            entity = _closure1_slot4;
            mike[2] = entity;
            entity = undefined;
            entity = report.bind(entity)(tango, zulu, mike);
            return entity;
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['default'] = tango;
    zulu['canToggleCommunicationDisableOnUser'] = mike;
    return entity;
})();