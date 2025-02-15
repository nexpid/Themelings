// app/modules/tooltip/useCanShowTooltip.tsx
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
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/tooltip/useCanShowTooltip.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argFoo;
            golf = arguments[1];
            options = arguments[2];
            var _closure2_slot0 = oscar;
            report = undefined;
            if(!(golf === report)) { _fun00002_ip = 23; continue _fun00001 }
 21:
            golf = false;
 23:
            var _closure2_slot1 = golf;
            if(!(options === report)) { _fun00002_ip = 33; continue _fun00001 }
 31:
            options = true;
 33:
            var _closure2_slot2 = options;
            tango = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 2;
            entity = verify[entity];
            verify = tango.bind(report)(entity);
            report = verify.useStateFromStores;
            entity = _closure1_slot4;
            tango = new Array(1);
            tango[0] = entity;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tango = _closure1_slot4;
                    zulu = tango.canShowTooltip;
                    entity = _closure2_slot0;
                    entity = zulu.bind(tango)(entity);
                    if(!entity) { _fun00004_ip = 32; continue _fun00003 }
 28:
                    entity = _closure2_slot2;
 32:
                    return entity;
                }
            };
            entity = report.bind(verify)(tango, entity);
            report = _closure1_slot3;
            tango = report.useEffect;
            zulu = new Array(3);
            zulu[0] = options;
            zulu[1] = golf;
            zulu[2] = oscar;
            mike = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    mike = _closure2_slot2;
                    if(!mike) { _fun00006_ip = 55; continue _fun00005 }
 10:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 3;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.attemptToShowTooltip;
                    mike = _closure2_slot0;
                    entity = _closure2_slot1;
                    entity = zulu.bind(tango)(mike, entity);
 55:
                    entity = undefined;
                    return entity;
                }
            };
            mike = tango.bind(report)(mike, zulu);
            return entity;
        }
    };
    zulu['useCanShowTooltip'] = mike;
    return entity;
})();