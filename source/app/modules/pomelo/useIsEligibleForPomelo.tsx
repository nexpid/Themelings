// app/modules/pomelo/useIsEligibleForPomelo.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: eligible
        _fun94220: for(var _fun94220_ip = 0; ; ) switch(_fun94220_ip) {
 0:
            zulu = argFoo;
            entity = null;
            entity = entity != zulu;
            if(!entity) { _fun94220_ip = 25; continue _fun94220 }
 12:
            mike = zulu.isPomelo;
            mike = mike.bind(zulu)();
            entity = !mike;
 25:
            if(!entity) { _fun94220_ip = 59; continue _fun94220 }
 28:
            mike = zulu.hasVerifiedEmailOrPhone;
            mike = mike.bind(zulu)();
            zulu = !mike;
            mike = !zulu;
            if(zulu) { _fun94220_ip = 56; continue _fun94220 }
 47:
            zulu = argBar;
            zulu = !zulu;
            mike = !zulu;
 56:
            entity = mike;
 59:
            return entity;
        }
    };
    var _closure1_slot3 = entity;
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
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/pomelo/useIsEligibleForPomelo.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() {
        tango = _closure1_slot3;
        zulu = _closure1_slot2;
        mike = zulu.getCurrentUser;
        zulu = mike.bind(zulu)();
        report = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 1;
        entity = mike[entity];
        mike = undefined;
        report = report.bind(mike)(entity);
        entity = report.getPomeloEligibility;
        entity = entity.bind(report)();
        entity = tango.bind(mike)(zulu, entity);
        return entity;
    };
    zulu['isEligibleForPomelo'] = tango;
    mike = function() {
        tango = _closure1_slot3;
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        mike = 2;
        mike = oscar[mike];
        zulu = undefined;
        options = report.bind(zulu)(mike);
        golf = options.useStateFromStores;
        entity = _closure1_slot2;
        mike = new Array(1);
        mike[0] = entity;
        entity = function() {
            mike = _closure1_slot2;
            entity = mike.getCurrentUser;
            entity = entity.bind(mike)();
            return entity;
        };
        mike = golf.bind(options)(mike, entity);
        entity = 1;
        entity = oscar[entity];
        report = report.bind(zulu)(entity);
        entity = report.usePomeloEligibility;
        entity = entity.bind(report)();
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    zulu['useIsEligibleForPomelo'] = mike;
    return entity;
})();