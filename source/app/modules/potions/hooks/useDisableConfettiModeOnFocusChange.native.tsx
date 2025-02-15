// app/modules/potions/hooks/useDisableConfettiModeOnFocusChange.native.tsx
export default (function(_, argBar, argBaz, argCorge, __, argFred, argPlugh) {
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
    tango = 'modules/potions/hooks/useDisableConfettiModeOnFocusChange.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: _default
        report = _closure1_slot0;
        tango = _closure1_slot2;
        entity = 2;
        tango = tango[entity];
        entity = undefined;
        golf = report.bind(entity)(tango);
        oscar = golf.useStateFromStores;
        tango = _closure1_slot4;
        report = new Array(1);
        report[0] = tango;
        tango = function() {
            mike = _closure1_slot4;
            entity = mike.getState;
            mike = entity.bind(mike)();
            entity = 'active';
            entity = entity === mike;
            return entity;
        };
        oscar = oscar.bind(golf)(report, tango);
        var _closure2_slot0 = oscar;
        report = _closure1_slot3;
        tango = report.useEffect;
        zulu = new Array(1);
        zulu[0] = oscar;
        mike = function() {
            _fun121196: for(var _fun121196_ip = 0; ; ) switch(_fun121196_ip) {
 0:
                entity = _closure2_slot0;
                if(entity) { _fun121196_ip = 59; continue _fun121196 }
 10:
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 3;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.dispatch;
                entity = {'type': 'POTIONS_SET_CONFETTI_MODE', 'enabled': false};
                entity = mike.bind(zulu)(entity);
 59:
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();