// app/modules/threads/ThreadActionUtils.tsx
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
    tango = 'modules/threads/ThreadActionUtils.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: doesThreadMembersActionAffectMe
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            mike = _closure1_slot0;
            entity = mike.getId;
            options = entity.bind(mike)();
            var _closure2_slot0 = options;
            zulu = null;
            entity = zulu != options;
            if(!entity) { _fun00002_ip = 105; continue _fun00001 }
 35:
            golf = report.removedMemberIds;
            oscar = zulu == golf;
            if(oscar) { _fun00002_ip = 61; continue _fun00001 }
 48:
            mike = golf.includes;
            mike = mike.bind(golf)(options);
            oscar = !mike;
 61:
            mike = !oscar;
            if(!oscar) { _fun00002_ip = 102; continue _fun00001 }
 67:
            oscar = report.addedMembers;
            zulu = zulu == oscar;
            if(zulu) { _fun00002_ip = 99; continue _fun00001 }
 80:
            report = oscar.some;
            tango = function(argFoo) {
                entity = argFoo;
                mike = entity.userId;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            tango = report.bind(oscar)(tango);
            zulu = !tango;
 99:
            mike = !zulu;
 102:
            entity = mike;
 105:
            return entity;
        }
    };
    zulu['doesThreadMembersActionAffectMe'] = mike;
    return entity;
})();