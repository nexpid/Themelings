// app/modules/user_profile/hooks/useDisplayProfile.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = options;
    report = function(argFoo, argBar) { // Original name: useDisplayProfile
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 3;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        oscar = _closure1_slot4;
        mike = new Array(2);
        mike[0] = oscar;
        report = _closure1_slot5;
        mike[1] = report;
        entity = function() {
            report = _closure1_slot8;
            tango = _closure2_slot0;
            zulu = _closure2_slot1;
            oscar = _closure1_slot4;
            mike = new Array(2);
            mike[0] = oscar;
            entity = _closure1_slot5;
            mike[1] = entity;
            entity = undefined;
            entity = report.bind(entity)(tango, zulu, mike);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot7 = report;
    mike = function(argFoo, argBar) { // Original name: getDisplayProfile
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golf = argFoo;
            mike = arguments[2];
            report = undefined;
            if(!(mike === report)) { _fun00002_ip = 38; continue _fun00001 }
 12:
            tango = _closure1_slot4;
            entity = new Array(2);
            entity[0] = tango;
            zulu = _closure1_slot5;
            entity[1] = zulu;
            mike = entity;
 38:
            tango = mike;
            entity = tango[Symbol.iterator];
            tango = entity().next;
            oscar = tango().value;
            mike = entity;
            zulu = mike === report;
            mike = undefined;
            if(zulu) { _fun00002_ip = 63; continue _fun00001 }
 60:
            mike = oscar;
 63:
            oscar = undefined;
            if(zulu) { _fun00002_ip = 93; continue _fun00001 }
 68:
            options = tango().value;
            tango = entity;
            tango = tango === report;
            oscar = undefined;
            zulu = tango;
            if(tango) { _fun00002_ip = 93; continue _fun00001 }
 87:
            oscar = options;
            zulu = tango;
 93:
            if(zulu) { _fun00002_ip = 99; continue _fun00001 }
 96:
            entity.return();
 99:
            entity = mike.getUser;
            entity = entity.bind(mike)(golf);
            mike = oscar.getUserProfile;
            tango = mike.bind(oscar)(golf);
            zulu = oscar.getGuildMemberProfile;
            mike = argBar;
            zulu = zulu.bind(oscar)(golf, mike);
            oscar = null;
            mike = oscar == entity;
            entity = null;
            if(mike) { _fun00002_ip = 169; continue _fun00001 }
 147:
            mike = oscar == tango;
            entity = null;
            if(mike) { _fun00002_ip = 169; continue _fun00001 }
 156:
            mike = _closure1_slot6;
            entity = mike.bind(report)(tango, zulu);
 169:
            return entity;
        }
    };
    var _closure1_slot8 = mike;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    offset = options[entity];
    oscar = argCorge;
    entity = undefined;
    oscar = oscar.bind(entity)(offset);
    var _closure1_slot3 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 5;
    oscar = options[oscar];
    offset = golf.bind(entity)(oscar);
    verify = offset.cachedFunction;
    oscar = function(argFoo, argBar) {
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        entity = tango.prototype;
        mike = Object.create(entity, {constructor: {value: tango}});
        oscar = argFoo;
        report = argBar;
        golf = mike;
        entity = new golf[tango](oscar, report, tango);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    oscar = verify.bind(offset)(oscar);
    var _closure1_slot6 = oscar;
    oscar = 7;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/user_profile/hooks/useDisplayProfile.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = report;
    tango = function(argFoo, argBar) { // Original name: useDisplayProfileWithFetchEffect
        tango = argFoo;
        zulu = argBar;
        var _closure2_slot0 = tango;
        var _closure2_slot1 = zulu;
        golf = _closure1_slot3;
        oscar = golf.useEffect;
        report = new Array(2);
        report[0] = zulu;
        report[1] = tango;
        mike = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 4;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = _closure2_slot0;
                mike = {};
                golf = _closure2_slot1;
                report = null;
                golf = report != golf;
                report = undefined;
                if(!golf) { _fun00004_ip = 53; continue _fun00003 }
 49:
                report = _closure2_slot1;
 53:
                mike['guildId'] = report;
                mike = tango.bind(entity)(zulu, entity, mike);
                return entity;
            }
        };
        mike = oscar.bind(golf)(mike, report);
        mike = _closure1_slot7;
        entity = undefined;
        entity = mike.bind(entity)(tango, zulu);
        return entity;
    };
    zulu['useDisplayProfileWithFetchEffect'] = tango;
    zulu['getDisplayProfile'] = mike;
    return entity;
})();