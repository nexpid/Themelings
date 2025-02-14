// app/modules/guild_mod_dash_member_safety/SortUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = 2;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_mod_dash_member_safety/SortUtils.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: getSortValueForMember
        _fun59283: for(var _fun59283_ip = 0; ; ) switch(_fun59283_ip) {
 0:
            mike = argFoo;
            report = argBar;
            options = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 0;
            entity = oscar[entity];
            tango = undefined;
            verify = options.bind(tango)(entity);
            golf = verify.getJoinedAtTimestamp;
            entity = mike.joinedAt;
            entity = golf.bind(verify)(entity);
            golf = 1;
            oscar = oscar[golf];
            oscar = options.bind(tango)(oscar);
            oscar = oscar.OrderBy;
            oscar = oscar.ORDER_BY_GUILD_JOINED_AT_ASC;
            if(!(oscar !== report)) { _fun59283_ip = 230; continue _fun59283 }
 78:
            options = _closure1_slot0;
            oscar = _closure1_slot1;
            oscar = oscar[golf];
            oscar = options.bind(tango)(oscar);
            oscar = oscar.OrderBy;
            oscar = oscar.ORDER_BY_GUILD_JOINED_AT_DESC;
            if(!(oscar !== report)) { _fun59283_ip = 225; continue _fun59283 }
 111:
            options = _closure1_slot0;
            oscar = _closure1_slot1;
            oscar = oscar[golf];
            oscar = options.bind(tango)(oscar);
            oscar = oscar.OrderBy;
            oscar = oscar.ORDER_BY_USER_ID_ASC;
            if(!(oscar !== report)) { _fun59283_ip = 205; continue _fun59283 }
 144:
            oscar = _closure1_slot0;
            zulu = _closure1_slot1;
            zulu = zulu[golf];
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.OrderBy;
            zulu = zulu.ORDER_BY_USER_ID_DESC;
            if(!(zulu !== report)) { _fun59283_ip = 182; continue _fun59283 }
 177:
            zulu = -entity;
            return zulu;
 182:
            zulu = global;
            report = zulu.parseInt;
            zulu = mike.userId;
            zulu = report.bind(tango)(zulu);
            zulu = -zulu;
            return zulu;
 205:
            zulu = global;
            zulu = zulu.parseInt;
            mike = mike.userId;
            mike = zulu.bind(tango)(mike);
            return mike;
 225:
            mike = -entity;
            return mike;
 230:
            return entity;
        }
    };
    zulu['getSortValueForMember'] = mike;
    return entity;
})();