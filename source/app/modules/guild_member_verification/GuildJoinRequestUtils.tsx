// app/modules/guild_member_verification/GuildJoinRequestUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    tango = function(argFoo) { // Original name: isActionedApplicationStatus
        _fun48887: for(var _fun48887_ip = 0; ; ) switch(_fun48887_ip) {
 0:
            zulu = argFoo;
            tango = _closure1_slot0;
            entity = _closure1_slot1;
            oscar = 0;
            entity = entity[oscar];
            report = undefined;
            entity = tango.bind(report)(entity);
            entity = entity.GuildJoinRequestApplicationStatuses;
            entity = entity.APPROVED;
            entity = zulu === entity;
            if(entity) { _fun48887_ip = 79; continue _fun48887 }
 46:
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            mike = mike[oscar];
            mike = tango.bind(report)(mike);
            mike = mike.GuildJoinRequestApplicationStatuses;
            mike = mike.REJECTED;
            entity = zulu === mike;
 79:
            return entity;
        }
    };
    var _closure1_slot2 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    entity = 1;
    report = report[entity];
    entity = undefined;
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_member_verification/GuildJoinRequestUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['isActionedApplicationStatus'] = tango;
    tango = function(argFoo) { // Original name: isSubmittedApplicationStatus
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 0;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        entity = entity.GuildJoinRequestApplicationStatuses;
        mike = entity.SUBMITTED;
        entity = argFoo;
        entity = entity === mike;
        return entity;
    };
    zulu['isSubmittedApplicationStatus'] = tango;
    tango = function(argFoo) { // Original name: isApprovedAndAcked
        _fun48889: for(var _fun48889_ip = 0; ; ) switch(_fun48889_ip) {
 0:
            mike = argFoo;
            zulu = mike.applicationStatus;
            report = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 0;
            tango = tango[entity];
            entity = undefined;
            entity = report.bind(entity)(tango);
            entity = entity.GuildJoinRequestApplicationStatuses;
            entity = entity.APPROVED;
            entity = zulu === entity;
            if(!entity) { _fun48889_ip = 64; continue _fun48889 }
 52:
            zulu = mike.lastSeen;
            mike = null;
            entity = mike != zulu;
 64:
            return entity;
        }
    };
    zulu['isApprovedAndAcked'] = tango;
    mike = function(argFoo) { // Original name: isActionedAndNotAcked
        _fun48890: for(var _fun48890_ip = 0; ; ) switch(_fun48890_ip) {
 0:
            mike = argFoo;
            tango = _closure1_slot2;
            zulu = mike.applicationStatus;
            entity = undefined;
            entity = tango.bind(entity)(zulu);
            if(!entity) { _fun48890_ip = 38; continue _fun48890 }
 26:
            zulu = mike.lastSeen;
            mike = null;
            entity = mike == zulu;
 38:
            return entity;
        }
    };
    zulu['isActionedAndNotAcked'] = mike;
    return entity;
})();