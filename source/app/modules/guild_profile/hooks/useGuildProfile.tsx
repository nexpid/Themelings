// app/modules/guild_profile/hooks/useGuildProfile.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    var _closure1_slot2 = tango;
    tango = 1;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_profile/hooks/useGuildProfile.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useGuildProfile
        golf = argFoo;
        var _closure2_slot0 = golf;
        oscar = _closure1_slot0;
        verify = _closure1_slot1;
        mike = 3;
        entity = verify[mike];
        options = undefined;
        romeo = oscar.bind(options)(entity);
        yankee = romeo.useStateFromStores;
        entity = _closure1_slot4;
        offset = new Array(1);
        offset[0] = entity;
        report = function() {
            zulu = _closure1_slot4;
            mike = zulu.getProfile;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report = yankee.bind(romeo)(offset, report);
        mike = verify[mike];
        verify = oscar.bind(options)(mike);
        oscar = verify.useStateFromStores;
        mike = new Array(1);
        mike[0] = entity;
        entity = function() {
            zulu = _closure1_slot4;
            mike = zulu.getIsFetching;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = oscar.bind(verify)(mike, entity);
        entity = {};
        entity['guildProfile'] = report;
        oscar = _closure1_slot3;
        report = oscar.useCallback;
        tango = _closure1_slot2;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun90623: for(var _fun90623_ip = 0; ; ) switch(_fun90623_ip) {
 0:
                    StartGenerator();
                    oscar = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun90623_ip = 89; continue _fun90623 }
 10:
                    report = undefined;
                    if(!(oscar === report)) { _fun90623_ip = 18; continue _fun90623 }
 16:
                    oscar = false;
 18:
                    SaveGenerator(address=22);
 20:
                    return report;
 22:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun90623_ip = 86; continue _fun90623 }
 28:
                    tango = _closure1_slot0;
                    golf = _closure1_slot1;
                    zulu = 4;
                    zulu = golf[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.getGuildProfile;
                    zulu = _closure2_slot0;
                    zulu = tango.bind(report)(zulu, oscar);
                    SaveGenerator(address=74);
 72:
                    return zulu;
 74:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun90623_ip = 83; continue _fun90623 }
 80:
                    return zulu;
 83:
                    return zulu;
 86:
                    return mike;
 89:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(options)(zulu);
        zulu = new Array(1);
        zulu[0] = golf;
        zulu = report.bind(oscar)(tango, zulu);
        entity['fetchGuildProfile'] = zulu;
        entity['isFetching'] = mike;
        return entity;
    };
    zulu['useGuildProfile'] = mike;
    return entity;
})();