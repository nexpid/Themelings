// app/modules/user_profile/hooks/usePersonalizedVoiceChannelUsers.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Consents;
    var _closure1_slot6 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_profile/hooks/usePersonalizedVoiceChannelUsers.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: usePersonalizedVoiceChannelUsers
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        verify = _closure1_slot1;
        zulu = 5;
        golf = verify[zulu];
        tango = undefined;
        yankee = report.bind(tango)(golf);
        offset = yankee.useStateFromStoresArray;
        golf = _closure1_slot5;
        options = new Array(1);
        options[0] = golf;
        romeo = oscar.id;
        golf = new Array(2);
        golf[0] = romeo;
        oscar = oscar.guild_id;
        golf[1] = oscar;
        oscar = function() {
            tango = _closure1_slot5;
            zulu = tango.getVoiceStatesForChannelAlt;
            entity = _closure2_slot0;
            mike = entity.id;
            entity = entity.guild_id;
            zulu = zulu.bind(tango)(mike, entity);
            mike = zulu.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.user;
                entity = entity.id;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar = offset.bind(yankee)(options, oscar, golf);
        var _closure2_slot1 = oscar;
        golf = verify[zulu];
        yankee = report.bind(tango)(golf);
        offset = yankee.useStateFromStores;
        golf = _closure1_slot2;
        options = new Array(1);
        options[0] = golf;
        golf = function() {
            mike = _closure1_slot2;
            entity = mike.getUserAffinitiesMap;
            entity = entity.bind(mike)();
            return entity;
        };
        golf = offset.bind(yankee)(options, golf);
        var _closure2_slot2 = golf;
        options = verify[zulu];
        romeo = report.bind(tango)(options);
        yankee = romeo.useStateFromStores;
        options = _closure1_slot3;
        offset = new Array(1);
        offset[0] = options;
        options = function() {
            zulu = _closure1_slot3;
            mike = zulu.hasConsented;
            entity = _closure1_slot6;
            entity = entity.PERSONALIZATION;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        options = yankee.bind(romeo)(offset, options);
        var _closure2_slot3 = options;
        zulu = verify[zulu];
        report = report.bind(tango)(zulu);
        tango = report.useStateFromStoresArray;
        mike = _closure1_slot4;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(3);
        mike[0] = options;
        mike[1] = golf;
        mike[2] = oscar;
        entity = function() {
            _fun80497: for(var _fun80497_ip = 0; ; ) switch(_fun80497_ip) {
 0:
                zulu = _closure2_slot3;
                if(!zulu) { _fun80497_ip = 27; continue _fun80497 }
 12:
                zulu = _closure2_slot2;
                tango = zulu.size;
                zulu = 0;
                if(!(!(tango > zulu))) { _fun80497_ip = 33; continue _fun80497 }
 27:
                tango = _closure2_slot1;
                _fun80497_ip = 86; continue _fun80497;
 33:
                oscar = _closure1_slot0;
                report = _closure1_slot1;
                zulu = 6;
                report = report[zulu];
                zulu = undefined;
                golf = oscar.bind(zulu)(report);
                oscar = golf.orderBy;
                report = _closure2_slot1;
                zulu = function(argFoo) {
                    _fun80498: for(var _fun80498_ip = 0; ; ) switch(_fun80498_ip) {
 0:
                        zulu = _closure2_slot2;
                        mike = zulu.get;
                        entity = argFoo;
                        zulu = mike.bind(zulu)(entity);
                        entity = null;
                        tango = entity == zulu;
                        mike = undefined;
                        if(tango) { _fun80498_ip = 37; continue _fun80498 }
 31:
                        mike = zulu.affinity;
 37:
                        zulu = entity != mike;
                        entity = 0;
                        if(!zulu) { _fun80498_ip = 49; continue _fun80498 }
 46:
                        entity = mike;
 49:
                        return entity;
                    }
                };
                mike = 'desc';
                tango = oscar.bind(golf)(report, zulu, mike);
 86:
                zulu = tango.map;
                mike = function(argFoo) {
                    zulu = _closure1_slot4;
                    mike = zulu.getUser;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                zulu = zulu.bind(tango)(mike);
                mike = zulu.filter;
                entity = function(argFoo) {
                    mike = null;
                    entity = argFoo;
                    entity = mike != entity;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();