// discord_common/js/shared/utils/MathUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    mike = global;
    oscar = mike.Object;
    report = oscar.defineProperty;
    tango = {};
    mike = true;
    tango['value'] = mike;
    mike = '__esModule';
    mike = report.bind(oscar)(zulu, mike, tango);
    mike = {};
    tango = 'function roundIfClose_MathUtilsTsx1(num,precision){const decimalPart=num-Math.floor(num);if(decimalPart>=1-precision){return Math.ceil(num);}if(decimalPart<=precision){return Math.floor(num);}return num;}';
    mike['code'] = tango;
    var _closure1_slot0 = mike;
    mike = function() {
        entity = function(argFoo, argBar) { // Original name: roundIfClose
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tango = argFoo;
                report = argBar;
                mike = global;
                zulu = mike.Math;
                entity = zulu.floor;
                entity = entity.bind(zulu)(tango);
                zulu = tango - entity;
                entity = 1;
                entity = entity - report;
                if(!(!(zulu >= entity))) { _fun00002_ip = 66; continue _fun00001 }
 40:
                entity = tango;
                if(!(zulu <= report)) { _fun00002_ip = 64; continue _fun00001 }
 47:
                report = mike.Math;
                zulu = report.floor;
                entity = zulu.bind(report)(tango);
 64:
                _fun00002_ip = 83; continue _fun00001;
 66:
                zulu = mike.Math;
                mike = zulu.ceil;
                entity = mike.bind(zulu)(tango);
 83:
                return entity;
            }
        };
        mike = {};
        entity['__closure'] = mike;
        mike = 15933993422996.0;
        entity['__workletHash'] = mike;
        mike = _closure1_slot0;
        entity['__initData'] = mike;
        return entity;
    };
    entity = undefined;
    mike = mike.bind(entity)();
    report = argPlugh;
    tango = 0;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/shared/utils/MathUtils.tsx';
    tango = report.bind(oscar)(tango);
    zulu['roundIfClose'] = mike;
    return entity;
})();