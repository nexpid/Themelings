// app/modules/premium/gifting/hooks/useIsGiftingPromotionActiveNow.tsx
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
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/gifting/hooks/useIsGiftingPromotionActiveNow.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useIsGiftingPromotionActiveNow
        report = _closure1_slot1;
        zulu = _closure1_slot2;
        golf = 2;
        zulu = zulu[golf];
        tango = undefined;
        report = report.bind(tango)(zulu);
        zulu = argFoo;
        oscar = report.bind(tango)(zulu);
        var _closure2_slot0 = oscar;
        report = _closure1_slot4;
        options = report.useState;
        zulu = function() {
            zulu = _closure2_slot0;
            mike = zulu.isAfter;
            entity = global;
            tango = entity.Date;
            entity = tango.now;
            entity = entity.bind(tango)();
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        zulu = options.bind(report)(zulu);
        entity = _closure1_slot3;
        tango = entity.bind(tango)(zulu, golf);
        entity = 0;
        entity = tango[entity];
        var _closure2_slot1 = entity;
        zulu = 1;
        zulu = tango[zulu];
        var _closure2_slot2 = zulu;
        tango = report.useEffect;
        zulu = new Array(2);
        zulu[0] = entity;
        zulu[1] = oscar;
        mike = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                mike = _closure2_slot1;
                if(mike) { _fun00002_ip = 16; continue _fun00001 }
 12:
                mike = undefined;
                return mike;
 16:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 3;
                mike = zulu[mike];
                zulu = undefined;
                mike = tango.bind(zulu)(mike);
                mike = mike.Timeout;
                tango = mike.prototype;
                tango = Object.create(tango, {constructor: {value: mike}});
                oscar = tango;
                mike = new oscar[mike](report);
                mike = mike instanceof Object ? mike : tango;
                var _closure3_slot0 = mike;
                mike = function() { // Original name: startTimer
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        entity = global;
                        tango = entity.Math;
                        zulu = tango.min;
                        oscar = _closure2_slot0;
                        report = oscar.diff;
                        mike = entity.Date;
                        entity = mike.now;
                        mike = entity.bind(mike)();
                        entity = 'millisecond';
                        mike = report.bind(oscar)(mike, entity);
                        entity = 86400000;
                        tango = zulu.bind(tango)(mike, entity);
                        zulu = _closure3_slot0;
                        mike = null;
                        if(!(mike != zulu)) { _fun00004_ip = 100; continue _fun00003 }
 76:
                        zulu = _closure3_slot0;
                        mike = zulu.start;
                        entity = function() {
                            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                                tango = _closure2_slot0;
                                zulu = tango.isBefore;
                                mike = global;
                                report = mike.Date;
                                mike = report.now;
                                mike = mike.bind(report)();
                                mike = zulu.bind(tango)(mike);
                                if(mike) { _fun00006_ip = 53; continue _fun00005 }
 38:
                                zulu = _closure3_slot1;
                                mike = undefined;
                                mike = zulu.bind(mike)();
                                _fun00006_ip = 66; continue _fun00005;
 53:
                                zulu = _closure2_slot2;
                                mike = undefined;
                                entity = false;
                                entity = zulu.bind(mike)(entity);
 66:
                                entity = undefined;
                                return entity;
                            }
                        };
                        entity = mike.bind(zulu)(tango, entity);
 100:
                        entity = undefined;
                        return entity;
                    }
                };
                var _closure3_slot1 = mike;
                mike = mike.bind(zulu)();
                entity = function() {
                    mike = _closure3_slot0;
                    entity = mike.stop;
                    entity = entity.bind(mike)();
                    return entity;
                };
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['useIsGiftingPromotionActiveNow'] = mike;
    return entity;
})();