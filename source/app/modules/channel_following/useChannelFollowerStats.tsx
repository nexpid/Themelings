// app/modules/channel_following/useChannelFollowerStats.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    golf = 1;
    verify = oscar[golf];
    tango = argCorge;
    tango = tango.bind(entity)(verify);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    tango = tango.Millis;
    tango = tango.HOUR;
    tango = golf * tango;
    var _closure1_slot6 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/channel_following/useChannelFollowerStats.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useChannelFollowerStats
        golf = argFoo;
        var _closure2_slot0 = golf;
        oscar = _closure1_slot4;
        tango = oscar.useState;
        mike = false;
        report = tango.bind(oscar)(mike);
        tango = _closure1_slot3;
        options = undefined;
        mike = 2;
        report = tango.bind(options)(report, mike);
        mike = 0;
        mike = report[mike];
        var _closure2_slot1 = mike;
        tango = 1;
        tango = report[tango];
        var _closure2_slot2 = tango;
        report = _closure1_slot0;
        verify = _closure1_slot2;
        tango = 4;
        tango = verify[tango];
        verify = report.bind(options)(tango);
        options = verify.useStateFromStores;
        zulu = _closure1_slot5;
        report = new Array(1);
        report[0] = zulu;
        tango = new Array(1);
        tango[0] = golf;
        zulu = function() {
            zulu = _closure1_slot5;
            mike = zulu.getFollowerStatsForChannel;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        zulu = options.bind(verify)(report, zulu, tango);
        var _closure2_slot3 = zulu;
        report = oscar.useEffect;
        tango = new Array(3);
        tango[0] = golf;
        tango[1] = zulu;
        tango[2] = mike;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                mike = _closure2_slot3;
                zulu = null;
                if(!(zulu != mike)) { _fun00002_ip = 55; continue _fun00001 }
 13:
                mike = global;
                tango = mike.Date;
                mike = tango.now;
                tango = mike.bind(tango)();
                mike = _closure2_slot3;
                mike = mike.lastFetched;
                tango = tango - mike;
                mike = _closure1_slot6;
                if(!(tango > mike)) { _fun00002_ip = 115; continue _fun00001 }
 55:
                mike = _closure2_slot1;
                if(mike) { _fun00002_ip = 115; continue _fun00001 }
 62:
                tango = _closure2_slot2;
                report = undefined;
                mike = true;
                mike = tango.bind(report)(mike);
                tango = _closure1_slot1;
                oscar = _closure1_slot2;
                mike = 5;
                mike = oscar[mike];
                report = tango.bind(report)(mike);
                tango = report.fetchChannelFollowerStats;
                mike = _closure2_slot0;
                mike = tango.bind(report)(mike);
                _fun00002_ip = 146; continue _fun00001;
 115:
                mike = _closure2_slot3;
                mike = zulu != mike;
                if(!mike) { _fun00002_ip = 130; continue _fun00001 }
 126:
                mike = _closure2_slot1;
 130:
                if(!mike) { _fun00002_ip = 146; continue _fun00001 }
 133:
                zulu = _closure2_slot2;
                mike = undefined;
                entity = false;
                entity = zulu.bind(mike)(entity);
 146:
                entity = undefined;
                return entity;
            }
        };
        entity = report.bind(oscar)(entity, tango);
        entity = new Array(2);
        entity[0] = zulu;
        entity[1] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();