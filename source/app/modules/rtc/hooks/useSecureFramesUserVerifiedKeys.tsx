// app/modules/rtc/hooks/useSecureFramesUserVerifiedKeys.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rtc/hooks/useSecureFramesUserVerifiedKeys.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useSecureFramesUserVerifiedKeys
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 1;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStoresArray;
        report = _closure1_slot3;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            report = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 2;
            zulu = tango[zulu];
            tango = undefined;
            zulu = report.bind(tango)(zulu);
            oscar = _closure1_slot3;
            report = oscar.getUserVerifiedKeys;
            mike = _closure2_slot0;
            mike = report.bind(oscar)(mike);
            zulu = zulu.bind(tango)(mike);
            mike = zulu.entries;
            tango = mike.bind(zulu)();
            zulu = tango.map;
            mike = function(argFoo) {
                _fun99801: for(var _fun99801_ip = 0; ; ) switch(_fun99801_ip) {
 0:
                    report = argFoo;
                    entity = report[Symbol.iterator];
                    report = entity().next;
                    mike = report().value;
                    zulu = entity;
                    golf = undefined;
                    tango = zulu === golf;
                    zulu = undefined;
                    if(tango) { _fun99801_ip = 27; continue _fun99801 }
 24:
                    zulu = mike;
 27:
                    mike = undefined;
                    if(tango) { _fun99801_ip = 57; continue _fun99801 }
 32:
                    oscar = report().value;
                    report = entity;
                    report = report === golf;
                    mike = undefined;
                    tango = report;
                    if(report) { _fun99801_ip = 57; continue _fun99801 }
 51:
                    mike = oscar;
                    tango = report;
 57:
                    if(tango) { _fun99801_ip = 63; continue _fun99801 }
 60:
                    entity.return();
 63:
                    entity = {};
                    entity['verifiedKey'] = zulu;
                    entity['timestamp'] = mike;
                    return entity;
                }
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.sortBy;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.timestamp;
                entity = -1;
                entity = entity * mike;
                return entity;
            };
            mike = mike.bind(zulu)(entity);
            entity = mike.value;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useSecureFramesUserVerifiedKeys'] = mike;
    return entity;
})();