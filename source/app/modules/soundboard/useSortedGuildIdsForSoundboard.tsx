// app/modules/soundboard/useSortedGuildIdsForSoundboard.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
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
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot8 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/soundboard/useSortedGuildIdsForSoundboard.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useSortedGuildIdsForSoundboard
        _fun103472: for(var _fun103472_ip = 0; ; ) switch(_fun103472_ip) {
 0:
            tango = argFoo;
            options = argBar;
            var _closure2_slot0 = tango;
            var _closure2_slot1 = options;
            oscar = _closure1_slot0;
            zulu = _closure1_slot2;
            offset = 6;
            zulu = zulu[offset];
            report = undefined;
            verify = oscar.bind(report)(zulu);
            golf = verify.useStateFromStores;
            zulu = _closure1_slot6;
            oscar = new Array(1);
            oscar[0] = zulu;
            zulu = function() {
                mike = _closure1_slot6;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            verify = golf.bind(verify)(oscar, zulu);
            var _closure2_slot2 = verify;
            zulu = null;
            oscar = zulu == tango;
            golf = undefined;
            if(oscar) { _fun103472_ip = 91; continue _fun103472 }
 86:
            golf = tango.guild_id;
 91:
            if(!(zulu == golf)) { _fun103472_ip = 99; continue _fun103472 }
 95:
            golf = _closure1_slot7;
 99:
            var _closure2_slot3 = golf;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            oscar = zulu[offset];
            foxtrot = tango.bind(report)(oscar);
            romeo = foxtrot.useStateFromStores;
            oscar = _closure1_slot5;
            yankee = new Array(1);
            yankee[0] = oscar;
            oscar = function() {
                mike = _closure1_slot5;
                entity = mike.getFlattenedGuildIds;
                entity = entity.bind(mike)();
                return entity;
            };
            oscar = romeo.bind(foxtrot)(yankee, oscar);
            var _closure2_slot4 = oscar;
            zulu = zulu[offset];
            offset = tango.bind(report)(zulu);
            report = offset.useStateFromStores;
            zulu = _closure1_slot4;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                _fun103475: for(var _fun103475_ip = 0; ; ) switch(_fun103475_ip) {
 0:
                    entity = _closure2_slot0;
                    tango = null;
                    entity = tango == entity;
                    if(entity) { _fun103475_ip = 29; continue _fun103475 }
 16:
                    zulu = _closure2_slot0;
                    zulu = zulu.guild_id;
                    entity = tango == zulu;
 29:
                    if(entity) { _fun103475_ip = 65; continue _fun103475 }
 32:
                    report = _closure1_slot4;
                    tango = report.can;
                    zulu = _closure1_slot8;
                    zulu = zulu.USE_EXTERNAL_SOUNDS;
                    mike = _closure2_slot0;
                    entity = tango.bind(report)(zulu, mike);
 65:
                    return entity;
                }
            };
            report = report.bind(offset)(tango, zulu);
            var _closure2_slot5 = report;
            tango = _closure1_slot3;
            zulu = tango.useMemo;
            mike = new Array(5);
            mike[0] = verify;
            mike[1] = options;
            mike[2] = golf;
            mike[3] = oscar;
            mike[4] = report;
            entity = function() {
                _fun103476: for(var _fun103476_ip = 0; ; ) switch(_fun103476_ip) {
 0:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 7;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.canUseSoundboardEverywhere;
                    entity = _closure2_slot2;
                    entity = zulu.bind(tango)(entity);
                    if(entity) { _fun103476_ip = 53; continue _fun103476 }
 46:
                    entity = _closure2_slot1;
                    if(entity) { _fun103476_ip = 60; continue _fun103476 }
 53:
                    entity = _closure2_slot5;
                    if(entity) { _fun103476_ip = 74; continue _fun103476 }
 60:
                    zulu = _closure2_slot3;
                    entity = new Array(1);
                    entity[0] = zulu;
                    return entity;
 74:
                    zulu = _closure2_slot3;
                    entity = '';
                    zulu = entity !== zulu;
                    oscar = _closure2_slot4;
                    if(zulu) { _fun103476_ip = 98; continue _fun103476 }
 93:
                    entity = oscar;
                    _fun103476_ip = 117; continue _fun103476;
 98:
                    report = oscar.filter;
                    tango = function(argFoo) {
                        mike = _closure2_slot3;
                        entity = argFoo;
                        entity = entity !== mike;
                        return entity;
                    };
                    entity = report.bind(oscar)(tango);
 117:
                    if(!zulu) { _fun103476_ip = 135; continue _fun103476 }
 120:
                    zulu = entity.unshift;
                    mike = _closure2_slot3;
                    mike = zulu.bind(entity)(mike);
 135:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    zulu['useSortedGuildIdsForSoundboard'] = mike;
    return entity;
})();