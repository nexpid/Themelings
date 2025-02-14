// app/modules/guild_settings_picker/useFilteredGuilds.tsx
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
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_settings_picker/useFilteredGuilds.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useFilteredGuilds
        _fun107583: for(var _fun107583_ip = 0; ; ) switch(_fun107583_ip) {
 0:
            entity = argFoo;
            verify = entity.isGuildIncluded;
            var _closure2_slot0 = verify;
            tango = entity.selectedGuildId;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            entity = 4;
            zulu = options[entity];
            mike = undefined;
            romeo = golf.bind(mike)(zulu);
            yankee = romeo.useStateFromStores;
            zulu = _closure1_slot5;
            offset = new Array(1);
            offset[0] = zulu;
            zulu = function() {
                mike = _closure1_slot5;
                entity = mike.getFlattenedGuildIds;
                entity = entity.bind(mike)();
                return entity;
            };
            yankee = yankee.bind(romeo)(offset, zulu);
            var _closure2_slot1 = yankee;
            zulu = options[entity];
            foxtrot = golf.bind(mike)(zulu);
            romeo = foxtrot.useStateFromStores;
            zulu = _closure1_slot4;
            offset = new Array(1);
            offset[0] = zulu;
            zulu = function() {
                mike = _closure1_slot4;
                entity = mike.getGuilds;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu = romeo.bind(foxtrot)(offset, zulu);
            var _closure2_slot2 = zulu;
            entity = options[entity];
            offset = golf.bind(mike)(entity);
            options = offset.useStateFromStores;
            entity = _closure1_slot6;
            golf = new Array(1);
            golf[0] = entity;
            entity = function() {
                mike = _closure1_slot6;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            offset = options.bind(offset)(golf, entity);
            var _closure2_slot3 = offset;
            entity = {};
            options = _closure1_slot3;
            golf = options.useMemo;
            oscar = new Array(4);
            oscar[0] = yankee;
            oscar[1] = zulu;
            oscar[2] = offset;
            oscar[3] = verify;
            report = function() {
                _fun107587: for(var _fun107587_ip = 0; ; ) switch(_fun107587_ip) {
 0:
                    zulu = _closure2_slot3;
                    tango = null;
                    if(!(tango != zulu)) { _fun107587_ip = 69; continue _fun107587 }
 15:
                    zulu = _closure2_slot0;
                    if(!(tango != zulu)) { _fun107587_ip = 46; continue _fun107587 }
 23:
                    report = _closure2_slot1;
                    tango = report.filter;
                    zulu = function(argFoo) {
                        zulu = _closure2_slot2;
                        mike = argFoo;
                        tango = zulu[mike];
                        report = _closure1_slot1;
                        zulu = _closure1_slot2;
                        mike = 5;
                        mike = zulu[mike];
                        zulu = undefined;
                        oscar = report.bind(zulu)(mike);
                        mike = null;
                        report = mike != tango;
                        mike = 'guild should not be null';
                        mike = oscar.bind(zulu)(report, mike);
                        mike = _closure2_slot0;
                        entity = _closure2_slot3;
                        entity = mike.bind(zulu)(tango, entity);
                        return entity;
                    };
                    zulu = tango.bind(report)(zulu);
                    _fun107587_ip = 50; continue _fun107587;
 46:
                    zulu = _closure2_slot1;
 50:
                    mike = zulu.map;
                    entity = function(argFoo) {
                        mike = _closure2_slot2;
                        entity = argFoo;
                        mike = mike[entity];
                        zulu = _closure1_slot1;
                        tango = _closure1_slot2;
                        entity = 5;
                        entity = tango[entity];
                        report = undefined;
                        tango = zulu.bind(report)(entity);
                        entity = null;
                        zulu = entity != mike;
                        entity = 'guild should not be null';
                        entity = tango.bind(report)(zulu, entity);
                        entity = {};
                        zulu = mike.name;
                        entity['label'] = zulu;
                        mike = mike.id;
                        entity['value'] = mike;
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    _fun107587_ip = 73; continue _fun107587;
 69:
                    entity = new Array(0);
 73:
                    return entity;
                }
            };
            report = golf.bind(options)(report, oscar);
            entity['options'] = report;
            report = null;
            report = report == tango;
            if(report) { _fun107583_ip = 227; continue _fun107583 }
 223:
            mike = zulu[tango];
 227:
            entity['selectedGuild'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();