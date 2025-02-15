// app/modules/user_settings/shouldWarnAuthorizedAppTwoWay.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    tango = function(argFoo) { // Original name: isAuthorizedAppTwoWay
        _fun95535: for(var _fun95535_ip = 0; ; ) switch(_fun95535_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            oscar = 0;
            entity = entity[oscar];
            report = undefined;
            entity = zulu.bind(report)(entity);
            entity = entity.ConsoleOAuthApplications;
            entity = entity.XBOX_APPLICATION_ID;
            entity = entity === tango;
            if(entity) { _fun95535_ip = 85; continue _fun95535 }
 46:
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            mike = mike[oscar];
            mike = zulu.bind(report)(mike);
            mike = mike.ConsoleOAuthApplicationsSets;
            zulu = mike.PLAYSTATION_APPLICATION_IDS;
            mike = zulu.has;
            entity = mike.bind(zulu)(tango);
 85:
            return entity;
        }
    };
    var _closure1_slot2 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    entity = 1;
    report = report[entity];
    entity = undefined;
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/user_settings/shouldWarnAuthorizedAppTwoWay.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: useShouldWarnAuthorizedAppTwoWay
        zulu = _closure1_slot2;
        mike = undefined;
        entity = argFoo;
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['useShouldWarnAuthorizedAppTwoWay'] = mike;
    return entity;
})();