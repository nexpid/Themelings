// app/modules/global_discovery_servers/native/components/hooks/useGuildCardPressHandler.tsx
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
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.JoinGuildSources;
    var _closure1_slot7 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/global_discovery_servers/native/components/hooks/useGuildCardPressHandler.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useGuildCardPressHandler
        mike = argFoo;
        report = mike.loadId;
        var _closure2_slot0 = report;
        oscar = mike.categoryId;
        var _closure2_slot1 = oscar;
        golf = mike.analyticsLocation;
        var _closure2_slot2 = golf;
        tango = _closure1_slot3;
        zulu = tango.useCallback;
        mike = function() {
            tango = _closure1_slot2;
            zulu = undefined;
            mike = function* (argFoo, argBar) {
                entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                        StartGenerator();
                        offset = argFoo;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00002_ip = 314; continue _fun00001 }
 13:
                        zulu = _closure1_slot4;
                        mike = zulu.lurkingGuildIds;
                        mike = mike.bind(zulu)();
                        zulu = mike.length;
                        mike = 0;
                        if(!(zulu > mike)) { _fun00002_ip = 86; continue _fun00001 }
 41:
                        tango = _closure1_slot0;
                        zulu = _closure1_slot1;
                        mike = 6;
                        zulu = zulu[mike];
                        mike = undefined;
                        zulu = tango.bind(mike)(zulu);
                        mike = zulu.stopLurking;
                        mike = mike.bind(zulu)();
                        SaveGenerator(address=77);
 75:
                        return mike;
 77:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zulu) { _fun00002_ip = 311; continue _fun00001 }
 86:
                        oscar = _closure1_slot0;
                        tango = _closure1_slot1;
                        zulu = 7;
                        zulu = tango[zulu];
                        tango = undefined;
                        golf = oscar.bind(tango)(zulu);
                        oscar = golf.navigateToGuild;
                        zulu = {};
                        verify = _closure2_slot0;
                        zulu['loadId'] = verify;
                        zulu['guildId'] = offset;
                        verify = argBar;
                        zulu['index'] = verify;
                        verify = _closure2_slot1;
                        zulu['categoryId'] = verify;
                        verify = {};
                        yankee = _closure1_slot7;
                        yankee = yankee.MOBILE_GUILD_DISCOVERY;
                        verify['joinSource'] = yankee;
                        zulu['options'] = verify;
                        verify = _closure2_slot2;
                        zulu['analyticsLocation'] = verify;
                        zulu = oscar.bind(golf)(zulu);
                        SaveGenerator(address=187);
 185:
                        return zulu;
 187:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                        if(oscar) { _fun00002_ip = 308; continue _fun00001 }
 193:
                        golf = _closure1_slot5;
                        oscar = golf.getId;
                        yankee = oscar.bind(golf)();
                        golf = _closure1_slot6;
                        oscar = golf.isMember;
                        verify = oscar.bind(golf)(offset, yankee);
                        if(!verify) { _fun00002_ip = 245; continue _fun00001 }
 226:
                        golf = _closure1_slot6;
                        oscar = golf.isGuestOrLurker;
                        oscar = oscar.bind(golf)(offset, yankee);
                        verify = !oscar;
 245:
                        oscar = _closure1_slot0;
                        golf = _closure1_slot1;
                        report = 8;
                        report = golf[report];
                        golf = oscar.bind(tango)(report);
                        oscar = golf.trackGlobalDiscoveryServersCardClicked;
                        report = {};
                        report['guildId'] = offset;
                        offset = _closure2_slot1;
                        report['categoryId'] = offset;
                        report['isJoined'] = verify;
                        options = _closure2_slot2;
                        report['analyticsLocation'] = options;
                        report = oscar.bind(golf)(report);
                        return tango;
 308:
                        return zulu;
 311:
                        return mike;
 314:
                        return entity;
                    }
                };
                return entity;
            };
            mike = tango.bind(zulu)(mike);
            var _closure3_slot0 = mike;
            entity = function() {
                entity = undefined;
                tango = _closure3_slot0;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            return entity;
        };
        entity = undefined;
        mike = mike.bind(entity)();
        entity = new Array(3);
        entity[0] = golf;
        entity[1] = oscar;
        entity[2] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useGuildCardPressHandler'] = mike;
    return entity;
})();