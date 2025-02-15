// app/modules/screen/native/useScreenDimensions.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
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
    var _closure1_slot0 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot1 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Dimensions;
    var _closure1_slot2 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/screen/native/useScreenDimensions.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useScreenDimensions
        report = _closure1_slot1;
        tango = report.useState;
        golf = _closure1_slot2;
        oscar = golf.get;
        zulu = 'screen';
        zulu = oscar.bind(golf)(zulu);
        oscar = tango.bind(report)(zulu);
        tango = _closure1_slot0;
        zulu = undefined;
        entity = 2;
        tango = tango.bind(zulu)(oscar, entity);
        entity = 0;
        entity = tango[entity];
        zulu = 1;
        zulu = tango[zulu];
        var _closure2_slot0 = zulu;
        tango = report.useEffect;
        zulu = function() {
            report = _closure1_slot2;
            tango = report.addEventListener;
            zulu = 'change';
            mike = function(argFoo) {
                entity = argFoo;
                zulu = entity.screen;
                mike = _closure2_slot0;
                entity = undefined;
                mike = mike.bind(entity)(zulu);
                return entity;
            };
            mike = tango.bind(report)(zulu, mike);
            var _closure3_slot0 = mike;
            entity = function() {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    zulu = _closure3_slot0;
                    entity = null;
                    zulu = entity == zulu;
                    entity = undefined;
                    if(zulu) { _fun00002_ip = 32; continue _fun00001 }
 18:
                    zulu = _closure3_slot0;
                    mike = zulu.remove;
                    entity = mike.bind(zulu)();
 32:
                    return entity;
                }
            };
            return entity;
        };
        mike = new Array(0);
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();