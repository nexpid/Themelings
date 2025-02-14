// app/modules/rtc/hooks/useSecureFramesUserVerifiedKeysCount.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argBaz;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rtc/hooks/useSecureFramesUserVerifiedKeysCount.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useSecureFramesUserVerifiedKeysCount
        mike = argFoo;
        oscar = mike.userId;
        var _closure2_slot0 = oscar;
        zulu = mike.keyToOmit;
        var _closure2_slot1 = zulu;
        golf = _closure1_slot2;
        report = golf.useMemo;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = function() {
            _fun81252: for(var _fun81252_ip = 0; ; ) switch(_fun81252_ip) {
 0:
                zulu = _closure2_slot1;
                entity = null;
                if(!(entity != zulu)) { _fun81252_ip = 83; continue _fun81252 }
 13:
                zulu = global;
                tango = zulu.Uint8Array;
                oscar = _closure2_slot1;
                zulu = tango.prototype;
                zulu = Object.create(zulu, {constructor: {value: tango}});
                golf = zulu;
                mike = new golf[tango](oscar, report);
                tango = mike instanceof Object ? mike : zulu;
                report = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 2;
                zulu = zulu[mike];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                mike = zulu.serializeKey;
                mike = mike.bind(zulu)(tango);
                return mike;
 83:
                return entity;
            }
        };
        golf = report.bind(golf)(zulu, tango);
        var _closure2_slot2 = golf;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 3;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        mike = _closure1_slot3;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(2);
        mike[0] = golf;
        mike[1] = oscar;
        entity = function() {
            _fun81253: for(var _fun81253_ip = 0; ; ) switch(_fun81253_ip) {
 0:
                zulu = _closure1_slot3;
                mike = zulu.getUserVerifiedKeys;
                entity = _closure2_slot0;
                tango = mike.bind(zulu)(entity);
                entity = null;
                mike = entity == tango;
                entity = 0;
                if(mike) { _fun81253_ip = 78; continue _fun81253 }
 36:
                mike = global;
                zulu = mike.Object;
                mike = zulu.keys;
                tango = mike.bind(zulu)(tango);
                zulu = tango.filter;
                mike = function(argFoo) {
                    mike = _closure2_slot2;
                    entity = argFoo;
                    entity = entity !== mike;
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                entity = mike.length;
 78:
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useSecureFramesUserVerifiedKeysCount'] = mike;
    return entity;
})();