// app/modules/guild_role_subscriptions/useGuildRoleMemberCounts.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argBaz;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = {};
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/useGuildRoleMemberCounts.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useGuildRoleMemberCounts
        _fun62367: for(var _fun62367_ip = 0; ; ) switch(_fun62367_ip) {
 0:
            golf = argFoo;
            oscar = arguments[1];
            var _closure2_slot0 = golf;
            report = undefined;
            if(!(oscar === report)) { _fun62367_ip = 20; continue _fun62367 }
 18:
            oscar = 0;
 20:
            var _closure2_slot1 = oscar;
            tango = _closure1_slot0;
            options = _closure1_slot2;
            entity = 2;
            entity = options[entity];
            options = tango.bind(report)(entity);
            report = options.useStateFromStores;
            entity = _closure1_slot4;
            tango = new Array(1);
            tango[0] = entity;
            entity = function() {
                zulu = _closure1_slot4;
                mike = zulu.getRoleMemberCount;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = report.bind(options)(tango, entity);
            report = _closure1_slot3;
            tango = report.useEffect;
            zulu = new Array(2);
            zulu[0] = golf;
            zulu[1] = oscar;
            mike = function() {
                _fun62369: for(var _fun62369_ip = 0; ; ) switch(_fun62369_ip) {
 0:
                    entity = _closure2_slot0;
                    zulu = null;
                    if(!(zulu != entity)) { _fun62369_ip = 145; continue _fun62369 }
 16:
                    report = _closure1_slot5;
                    tango = _closure2_slot0;
                    report = report[tango];
                    zulu = zulu != report;
                    if(!zulu) { _fun62369_ip = 48; continue _fun62369 }
 38:
                    oscar = _closure2_slot1;
                    tango = 0;
                    zulu = oscar > tango;
 48:
                    if(!zulu) { _fun62369_ip = 80; continue _fun62369 }
 51:
                    tango = global;
                    oscar = tango.Date;
                    tango = oscar.now;
                    tango = tango.bind(oscar)();
                    report = tango - report;
                    tango = _closure2_slot1;
                    zulu = report < tango;
 80:
                    if(zulu) { _fun62369_ip = 145; continue _fun62369 }
 83:
                    tango = _closure1_slot5;
                    zulu = _closure2_slot0;
                    mike = global;
                    report = mike.Date;
                    mike = report.now;
                    mike = mike.bind(report)();
                    tango[zulu] = mike;
                    tango = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 3;
                    mike = mike[entity];
                    entity = undefined;
                    mike = tango.bind(entity)(mike);
                    entity = mike.fetchMemberCounts;
                    entity = entity.bind(mike)(zulu);
 145:
                    entity = undefined;
                    return entity;
                }
            };
            mike = tango.bind(report)(mike, zulu);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();