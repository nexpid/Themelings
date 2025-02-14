// app/modules/guild_communication_disabled/useUserCommunicationDisabled.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = function(argFoo, argBar, argBaz) { // Original name: getUserGuildMember
        _fun71785: for(var _fun71785_ip = 0; ; ) switch(_fun71785_ip) {
 0:
            report = argFoo;
            tango = argBar;
            zulu = argBaz;
            oscar = null;
            mike = oscar != tango;
            entity = null;
            if(!mike) { _fun71785_ip = 41; continue _fun71785 }
 20:
            mike = oscar != report;
            entity = null;
            if(!mike) { _fun71785_ip = 41; continue _fun71785 }
 29:
            mike = zulu.getMember;
            entity = mike.bind(zulu)(tango, report);
 41:
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    entity = function(argFoo) { // Original name: isCommunicationDisabled
        _fun71786: for(var _fun71786_ip = 0; ; ) switch(_fun71786_ip) {
 0:
            tango = argFoo;
            mike = null;
            zulu = mike == tango;
            report = undefined;
            entity = undefined;
            if(zulu) { _fun71786_ip = 22; continue _fun71786 }
 16:
            entity = tango.communicationDisabledUntil;
 22:
            zulu = mike != entity;
            mike = null;
            if(!zulu) { _fun71786_ip = 34; continue _fun71786 }
 31:
            mike = entity;
 34:
            entity = new Array(2);
            entity[0] = mike;
            zulu = _closure1_slot0;
            oscar = _closure1_slot1;
            mike = 3;
            mike = oscar[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.isMemberCommunicationDisabled;
            mike = mike.bind(zulu)(tango);
            entity[1] = mike;
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    tango = function(argFoo, argBar) { // Original name: useUserCommunicationDisabled
        options = argFoo;
        verify = argBar;
        var _closure2_slot0 = options;
        var _closure2_slot1 = verify;
        zulu = _closure1_slot5;
        oscar = _closure1_slot0;
        report = _closure1_slot1;
        mike = 2;
        report = report[mike];
        mike = undefined;
        golf = oscar.bind(mike)(report);
        oscar = golf.useStateFromStores;
        tango = _closure1_slot2;
        report = new Array(1);
        report[0] = tango;
        tango = new Array(2);
        tango[0] = verify;
        tango[1] = options;
        entity = function() {
            report = _closure1_slot4;
            tango = _closure2_slot0;
            zulu = _closure2_slot1;
            mike = _closure1_slot2;
            entity = undefined;
            entity = report.bind(entity)(tango, zulu, mike);
            return entity;
        };
        entity = oscar.bind(golf)(report, entity, tango);
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    var _closure1_slot6 = tango;
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
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_communication_disabled/useUserCommunicationDisabled.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    tango = function(argFoo) { // Original name: useCurrentUserCommunicationDisabled
        _fun71789: for(var _fun71789_ip = 0; ; ) switch(_fun71789_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 2;
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
            entity = report.bind(oscar)(zulu, entity);
            zulu = _closure1_slot6;
            mike = null;
            report = mike == entity;
            mike = undefined;
            if(report) { _fun71789_ip = 77; continue _fun71789 }
 72:
            mike = entity.id;
 77:
            entity = argFoo;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['useCurrentUserCommunicationDisabled'] = tango;
    mike = function(argFoo, argBar) { // Original name: userCommunicationDisabled
        zulu = _closure1_slot5;
        oscar = _closure1_slot4;
        report = _closure1_slot2;
        mike = undefined;
        tango = argFoo;
        entity = argBar;
        entity = oscar.bind(mike)(tango, entity, report);
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['userCommunicationDisabled'] = mike;
    return entity;
})();