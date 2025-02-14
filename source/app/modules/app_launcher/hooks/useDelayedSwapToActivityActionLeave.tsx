// app/modules/app_launcher/hooks/useDelayedSwapToActivityActionLeave.tsx
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
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_launcher/hooks/useDelayedSwapToActivityActionLeave.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useDelayedSwapToActivityActionLeave
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot3;
        zulu = report.useState;
        golf = zulu.bind(report)(oscar);
        tango = _closure1_slot2;
        zulu = undefined;
        entity = 2;
        tango = tango.bind(zulu)(golf, entity);
        entity = 0;
        entity = tango[entity];
        zulu = 1;
        zulu = tango[zulu];
        var _closure2_slot1 = zulu;
        tango = report.useLayoutEffect;
        zulu = new Array(1);
        zulu[0] = oscar;
        mike = function() {
            _fun118997: for(var _fun118997_ip = 0; ; ) switch(_fun118997_ip) {
 0:
                tango = _closure2_slot0;
                oscar = _closure1_slot0;
                report = _closure1_slot1;
                zulu = 2;
                zulu = report[zulu];
                report = undefined;
                zulu = oscar.bind(report)(zulu);
                zulu = zulu.ActivityAction;
                zulu = zulu.LEAVE;
                if(!(tango !== zulu)) { _fun118997_ip = 65; continue _fun118997 }
 50:
                zulu = _closure2_slot1;
                mike = _closure2_slot0;
                mike = zulu.bind(report)(mike);
                return report;
 65:
                mike = global;
                tango = mike.setTimeout;
                zulu = function() {
                    zulu = _closure2_slot1;
                    mike = _closure2_slot0;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                mike = 100;
                mike = tango.bind(report)(zulu, mike);
                var _closure3_slot0 = mike;
                entity = function() {
                    entity = global;
                    zulu = entity.clearTimeout;
                    mike = _closure3_slot0;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['useDelayedSwapToActivityActionLeave'] = mike;
    return entity;
})();