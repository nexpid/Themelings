// app/utils/GuildRoleUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    entity = argBaz;
    var _closure1_slot1 = entity;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscar;
    report = function(argFoo) { // Original name: fromServerRole
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            entity = {};
            mike = zulu.id;
            entity['id'] = mike;
            mike = zulu.name;
            entity['name'] = mike;
            report = _closure1_slot2;
            tango = _closure1_slot3;
            mike = 0;
            tango = tango[mike];
            options = undefined;
            golf = report.bind(options)(tango);
            report = golf.deserialize;
            tango = zulu.permissions;
            tango = report.bind(golf)(tango);
            entity['permissions'] = tango;
            tango = zulu.mentionable;
            entity['mentionable'] = tango;
            tango = zulu.position;
            entity['position'] = tango;
            tango = zulu.position;
            entity['originalPosition'] = tango;
            tango = zulu.color;
            entity['color'] = tango;
            report = zulu.color;
            tango = null;
            golf = tango != report;
            report = null;
            if(!golf) { _fun00002_ip = 171; continue _fun00001 }
 124:
            golf = zulu.color;
            report = null;
            if(!(mike !== golf)) { _fun00002_ip = 171; continue _fun00001 }
 135:
            golf = _closure1_slot0;
            verify = _closure1_slot3;
            oscar = 1;
            oscar = verify[oscar];
            options = golf.bind(options)(oscar);
            golf = options.int2hex;
            oscar = zulu.color;
            report = golf.bind(options)(oscar);
 171:
            entity['colorString'] = report;
            report = zulu.hoist;
            entity['hoist'] = report;
            report = zulu.managed;
            entity['managed'] = report;
            report = zulu.tags;
            entity['tags'] = report;
            report = zulu.icon;
            entity['icon'] = report;
            report = zulu.unicode_emoji;
            entity['unicodeEmoji'] = report;
            zulu = zulu.flags;
            tango = tango != zulu;
            mike = 0;
            if(!tango) { _fun00002_ip = 246; continue _fun00001 }
 243:
            mike = zulu;
 246:
            entity['flags'] = mike;
            return entity;
        }
    };
    var _closure1_slot4 = report;
    tango = function(argFoo, argBar) { // Original name: sortClientRoles
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argBar;
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = null;
            if(!(entity != report)) { _fun00004_ip = 73; continue _fun00003 }
 18:
            zulu = report.length;
            entity = 1;
            entity = zulu - entity;
            var _closure2_slot1 = entity;
            entity = {};
            var _closure2_slot2 = entity;
            tango = report.sort;
            zulu = function(argFoo, argBar) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = argFoo;
                    mike = argBar;
                    golf = _closure2_slot0;
                    report = zulu.id;
                    oscar = inf;
                    tango = oscar;
                    if(!(golf !== report)) { _fun00006_ip = 55; continue _fun00005 }
 35:
                    report = zulu.originalPosition;
                    golf = null;
                    if(!(golf == report)) { _fun00006_ip = 52; continue _fun00005 }
 47:
                    report = zulu.position;
 52:
                    tango = -report;
 55:
                    report = _closure2_slot0;
                    entity = mike.id;
                    if(!(report !== entity)) { _fun00006_ip = 88; continue _fun00005 }
 68:
                    entity = mike.originalPosition;
                    report = null;
                    if(!(report == entity)) { _fun00006_ip = 85; continue _fun00005 }
 80:
                    entity = mike.position;
 85:
                    oscar = -entity;
 88:
                    report = tango === oscar;
                    if(report) { _fun00006_ip = 118; continue _fun00005 }
 95:
                    entity = -1;
                    if(!(!(tango < oscar))) { _fun00006_ip = 116; continue _fun00005 }
 105:
                    tango = 1;
                    if(!report) { _fun00006_ip = 113; continue _fun00005 }
 111:
                    tango = 0;
 113:
                    entity = tango;
 116:
                    _fun00006_ip = 165; continue _fun00005;
 118:
                    oscar = _closure1_slot1;
                    report = _closure1_slot3;
                    tango = 2;
                    report = report[tango];
                    tango = undefined;
                    report = oscar.bind(tango)(report);
                    tango = report.compare;
                    zulu = zulu.id;
                    mike = mike.id;
                    entity = tango.bind(report)(zulu, mike);
 165:
                    return entity;
                }
            };
            tango = tango.bind(report)(zulu);
            zulu = tango.forEach;
            mike = function(argFoo, argBar) {
                zulu = argFoo;
                tango = _closure2_slot1;
                mike = argBar;
                mike = tango - mike;
                zulu['position'] = mike;
                mike = _closure2_slot2;
                entity = zulu.id;
                mike[entity] = zulu;
                entity = undefined;
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
 73:
            entity = {};
            return entity;
        }
    };
    var _closure1_slot5 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, options);
    entity = 3;
    oscar = oscar[entity];
    entity = undefined;
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'utils/GuildRoleUtils.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = function(argFoo) { // Original name: fromSerializedGuildRole
        zulu = argFoo;
        tango = _closure1_slot2;
        mike = _closure1_slot3;
        entity = 0;
        mike = mike[entity];
        entity = undefined;
        report = tango.bind(entity)(mike);
        tango = report.deserialize;
        mike = zulu.permissions;
        mike = tango.bind(report)(mike);
        zulu['permissions'] = mike;
        return entity;
    };
    zulu['fromSerializedGuildRole'] = oscar;
    zulu['fromServerRole'] = report;
    zulu['sortClientRoles'] = tango;
    mike = function(argFoo, argBar) { // Original name: sortServerRoles
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zulu = argBar;
            entity = null;
            if(!(entity != zulu)) { _fun00008_ip = 43; continue _fun00007 }
 9:
            tango = _closure1_slot5;
            mike = zulu.map;
            entity = _closure1_slot4;
            zulu = mike.bind(zulu)(entity);
            mike = undefined;
            entity = argFoo;
            entity = tango.bind(mike)(entity, zulu);
            _fun00008_ip = 45; continue _fun00007;
 43:
            entity = {};
 45:
            return entity;
        }
    };
    zulu['sortServerRoles'] = mike;
    return entity;
})();