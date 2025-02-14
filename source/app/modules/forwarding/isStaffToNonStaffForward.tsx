// app/modules/forwarding/isStaffToNonStaffForward.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    entity = function(argFoo) { // Original name: isStaffChannel
        _fun85985: for(var _fun85985_ip = 0; ; ) switch(_fun85985_ip) {
 0:
            entity = argFoo;
            mike = entity.isPrivate;
            mike = mike.bind(entity)();
            if(mike) { _fun85985_ip = 70; continue _fun85985 }
 16:
            report = _closure1_slot1;
            tango = report.getGuild;
            mike = entity.guild_id;
            report = tango.bind(report)(mike);
            mike = null;
            mike = mike != report;
            if(!mike) { _fun85985_ip = 68; continue _fun85985 }
 47:
            tango = report.hasFeature;
            zulu = _closure1_slot3;
            zulu = zulu.INTERNAL_EMPLOYEE_ONLY;
            mike = tango.bind(report)(zulu);
 68:
            return mike;
 70:
            zulu = entity.recipients;
            mike = zulu.every;
            entity = function(argFoo) {
                _fun85986: for(var _fun85986_ip = 0; ; ) switch(_fun85986_ip) {
 0:
                    zulu = _closure1_slot2;
                    mike = zulu.getUser;
                    entity = argFoo;
                    zulu = mike.bind(zulu)(entity);
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun85986_ip = 40; continue _fun85986 }
 30:
                    mike = zulu.isStaff;
                    entity = mike.bind(zulu)();
 40:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot4 = entity;
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
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot1 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildFeatures;
    var _closure1_slot3 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/forwarding/isStaffToNonStaffForward.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: isStaffToNonStaffForward
        _fun85987: for(var _fun85987_ip = 0; ; ) switch(_fun85987_ip) {
 0:
            report = argBar;
            zulu = _closure1_slot2;
            entity = zulu.getCurrentUser;
            tango = entity.bind(zulu)();
            entity = null;
            if(!(entity != tango)) { _fun85987_ip = 112; continue _fun85987 }
 25:
            zulu = tango.isStaff;
            zulu = zulu.bind(tango)();
            if(!zulu) { _fun85987_ip = 112; continue _fun85987 }
 38:
            oscar = _closure1_slot0;
            tango = oscar.getChannel;
            zulu = argFoo;
            zulu = zulu.channel_id;
            tango = tango.bind(oscar)(zulu);
            entity = entity != tango;
            if(!entity) { _fun85987_ip = 110; continue _fun85987 }
 67:
            zulu = _closure1_slot4;
            mike = undefined;
            mike = zulu.bind(mike)(tango);
            zulu = !mike;
            mike = !zulu;
            if(zulu) { _fun85987_ip = 107; continue _fun85987 }
 87:
            tango = report.some;
            zulu = function(argFoo) {
                _fun85988: for(var _fun85988_ip = 0; ; ) switch(_fun85988_ip) {
 0:
                    tango = _closure1_slot0;
                    mike = tango.getChannel;
                    entity = argFoo;
                    report = mike.bind(tango)(entity);
                    entity = null;
                    entity = entity != report;
                    if(!entity) { _fun85988_ip = 62; continue _fun85988 }
 29:
                    mike = report.isPrivate;
                    mike = mike.bind(report)();
                    mike = !mike;
                    if(!mike) { _fun85988_ip = 59; continue _fun85988 }
 45:
                    tango = _closure1_slot4;
                    zulu = undefined;
                    zulu = tango.bind(zulu)(report);
                    mike = !zulu;
 59:
                    entity = mike;
 62:
                    return entity;
                }
            };
            mike = tango.bind(report)(zulu);
 107:
            entity = mike;
 110:
            return entity;
 112:
            entity = false;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();