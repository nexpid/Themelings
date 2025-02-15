// app/modules/game_console/native/useShouldDisplayCancelConsoleTransfer.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo) { // Original name: shouldDisplayCancel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            entity = null;
            entity = entity != mike;
            if(!entity) { _fun00002_ip = 50; continue _fun00001 }
 12:
            zulu = global;
            tango = zulu.Date;
            zulu = tango.now;
            zulu = zulu.bind(tango)();
            mike = mike.startedAt;
            zulu = zulu - mike;
            mike = _closure1_slot2;
            entity = zulu > mike;
 50:
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, tango);
    entity = 0;
    oscar = report[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(oscar);
    var _closure1_slot0 = tango;
    tango = 1;
    oscar = report[tango];
    tango = argCorge;
    tango = tango.bind(entity)(oscar);
    var _closure1_slot1 = tango;
    tango = 6000;
    var _closure1_slot2 = tango;
    tango = 2;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/game_console/native/useShouldDisplayCancelConsoleTransfer.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useShouldDisplayCancelConsoleTransfer
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot1;
        tango = report.useState;
        zulu = function() {
            zulu = _closure1_slot3;
            mike = _closure2_slot0;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        golf = tango.bind(report)(zulu);
        tango = _closure1_slot0;
        zulu = undefined;
        entity = 2;
        tango = tango.bind(zulu)(golf, entity);
        entity = 0;
        entity = tango[entity];
        zulu = 1;
        zulu = tango[zulu];
        var _closure2_slot1 = zulu;
        tango = report.useEffect;
        zulu = new Array(1);
        zulu[0] = oscar;
        mike = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = _closure1_slot3;
                golf = _closure2_slot0;
                entity = undefined;
                report = report.bind(entity)(golf);
                oscar = _closure2_slot1;
                oscar = oscar.bind(entity)(report);
                oscar = null;
                if(!(oscar != golf)) { _fun00004_ip = 112; continue _fun00003 }
 38:
                if(report) { _fun00004_ip = 112; continue _fun00003 }
 41:
                oscar = global;
                report = oscar.setTimeout;
                tango = _closure1_slot2;
                golf = oscar.Date;
                oscar = golf.now;
                oscar = oscar.bind(golf)();
                zulu = _closure2_slot0;
                zulu = zulu.startedAt;
                zulu = oscar - zulu;
                tango = tango - zulu;
                zulu = function() {
                    zulu = _closure2_slot1;
                    tango = _closure1_slot3;
                    entity = _closure2_slot0;
                    mike = undefined;
                    entity = tango.bind(mike)(entity);
                    entity = zulu.bind(mike)(entity);
                    return entity;
                };
                zulu = report.bind(entity)(zulu, tango);
                var _closure3_slot0 = zulu;
                mike = function() {
                    entity = global;
                    zulu = entity.clearTimeout;
                    mike = _closure3_slot0;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                return mike;
 112:
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();