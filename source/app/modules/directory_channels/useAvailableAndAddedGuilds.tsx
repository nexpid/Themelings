// app/modules/directory_channels/useAvailableAndAddedGuilds.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    options = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = options;
    var _closure1_slot3 = oscar;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot11 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/directory_channels/useAvailableAndAddedGuilds.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: _default
        tango = argFoo;
        var _closure2_slot0 = tango;
        entity = argBar;
        var _closure2_slot1 = entity;
        oscar = _closure1_slot6;
        report = oscar.useState;
        mike = false;
        options = report.bind(oscar)(mike);
        golf = _closure1_slot5;
        report = undefined;
        mike = 2;
        options = golf.bind(report)(options, mike);
        mike = 0;
        mike = options[mike];
        golf = 1;
        golf = options[golf];
        var _closure2_slot2 = golf;
        offset = _closure1_slot0;
        verify = _closure1_slot3;
        options = 8;
        golf = verify[options];
        foxtrot = offset.bind(report)(golf);
        romeo = foxtrot.useStateFromStores;
        golf = _closure1_slot10;
        yankee = new Array(1);
        yankee[0] = golf;
        golf = function() {
            zulu = _closure1_slot10;
            mike = zulu.getAdminGuildEntryIds;
            entity = _closure2_slot1;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        golf = romeo.bind(foxtrot)(yankee, golf);
        var _closure2_slot3 = golf;
        options = verify[options];
        romeo = offset.bind(report)(options);
        yankee = romeo.useStateFromStoresArray;
        options = _closure1_slot9;
        offset = new Array(3);
        offset[0] = options;
        options = _closure1_slot7;
        offset[1] = options;
        options = _closure1_slot8;
        offset[2] = options;
        options = new Array(1);
        options[0] = tango;
        tango = function() {
            zulu = _closure1_slot9;
            entity = zulu.getFlattenedGuildIds;
            tango = entity.bind(zulu)();
            entity = new Array(0);
            var _closure3_slot0 = entity;
            zulu = tango.forEach;
            mike = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    tango = _closure1_slot7;
                    zulu = tango.getGuild;
                    entity = argFoo;
                    zulu = zulu.bind(tango)(entity);
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun00002_ip = 55; continue _fun00001 }
 29:
                    report = _closure1_slot8;
                    tango = report.can;
                    mike = _closure1_slot11;
                    mike = mike.ADMINISTRATOR;
                    entity = tango.bind(report)(mike, zulu);
 55:
                    if(!entity) { _fun00002_ip = 74; continue _fun00001 }
 58:
                    tango = zulu.id;
                    mike = _closure2_slot0;
                    entity = tango !== mike;
 74:
                    if(!entity) { _fun00002_ip = 94; continue _fun00001 }
 77:
                    mike = _closure3_slot0;
                    entity = mike.push;
                    entity = entity.bind(mike)(zulu);
 94:
                    entity = undefined;
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        options = yankee.bind(romeo)(offset, tango, options);
        var _closure2_slot4 = options;
        tango = _closure1_slot1;
        entity = 9;
        entity = verify[entity];
        tango = tango.bind(report)(entity);
        entity = function() {
            zulu = _closure1_slot4;
            entity = undefined;
            mike = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00004_ip = 110; continue _fun00003 }
 7:
                        report = _closure2_slot2;
                        zulu = undefined;
                        mike = true;
                        mike = report.bind(zulu)(mike);
                        report = _closure1_slot2;
                        oscar = _closure1_slot3;
                        mike = 10;
                        mike = oscar[mike];
                        golf = report.bind(zulu)(mike);
                        oscar = golf.fetchGuildEntriesForIds;
                        report = _closure2_slot1;
                        verify = _closure2_slot4;
                        options = verify.map;
                        mike = function(argFoo) {
                            entity = argFoo;
                            entity = entity.id;
                            return entity;
                        };
                        mike = options.bind(verify)(mike);
                        mike = oscar.bind(golf)(report, mike);
                        SaveGenerator(address=87);
 85:
                        return mike;
 87:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(report) { _fun00004_ip = 107; continue _fun00003 }
 93:
                        report = _closure2_slot2;
                        tango = false;
                        tango = report.bind(zulu)(tango);
                        return zulu;
 107:
                        return mike;
 110:
                        return entity;
                    }
                };
                return entity;
            };
            mike = zulu.bind(entity)(mike);
            mike = mike.bind(entity)();
            return entity;
        };
        entity = tango.bind(report)(entity);
        entity = {};
        verify = oscar.useMemo;
        report = new Array(2);
        report[0] = options;
        report[1] = golf;
        tango = function() {
            zulu = _closure2_slot4;
            mike = zulu.filter;
            entity = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = _closure2_slot3;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun00006_ip = 38; continue _fun00005 }
 16:
                    tango = _closure2_slot3;
                    zulu = tango.has;
                    mike = argFoo;
                    mike = mike.id;
                    entity = zulu.bind(tango)(mike);
 38:
                    entity = !entity;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        tango = verify.bind(oscar)(tango, report);
        entity['availableGuilds'] = tango;
        report = oscar.useMemo;
        tango = new Array(2);
        tango[0] = options;
        tango[1] = golf;
        zulu = function() {
            zulu = _closure2_slot4;
            mike = zulu.filter;
            entity = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zulu = _closure2_slot3;
                    entity = null;
                    zulu = entity == zulu;
                    entity = undefined;
                    if(zulu) { _fun00008_ip = 40; continue _fun00007 }
 18:
                    tango = _closure2_slot3;
                    zulu = tango.has;
                    mike = argFoo;
                    mike = mike.id;
                    entity = zulu.bind(tango)(mike);
 40:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        zulu = report.bind(oscar)(zulu, tango);
        entity['addedGuilds'] = zulu;
        entity['loading'] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();