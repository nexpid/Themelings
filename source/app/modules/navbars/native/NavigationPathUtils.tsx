// app/modules/navbars/native/NavigationPathUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = options;
    tango = function(argFoo) { // Original name: getSelectedSpecialNavigationPath
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zulu = entity.pathname;
            mike = _closure1_slot2;
            mike = mike.FRIENDS;
            if(!(zulu !== mike)) { _fun00002_ip = 30; continue _fun00001 }
 26:
            mike = undefined;
            return mike;
 30:
            entity = _closure1_slot3;
            entity = entity.FRIENDS;
            return entity;
        }
    };
    var _closure1_slot4 = tango;
    entity = global;
    verify = entity.Object;
    oscar = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(verify)(zulu, entity, report);
    verify = 0;
    report = options[verify];
    entity = undefined;
    report = golf.bind(entity)(report);
    report = report.Routes;
    var _closure1_slot2 = report;
    report = {};
    report['FRIENDS'] = verify;
    oscar = 'FRIENDS';
    report[verify] = oscar;
    var _closure1_slot3 = report;
    oscar = 2;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/navbars/native/NavigationPathUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['SpecialNavigationPath'] = report;
    zulu['getSelectedSpecialNavigationPath'] = tango;
    mike = function() { // Original name: useSelectedSpecialNavigationPath
        zulu = _closure1_slot4;
        tango = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 1;
        entity = mike[entity];
        mike = undefined;
        tango = tango.bind(mike)(entity);
        entity = tango.useLocation;
        entity = entity.bind(tango)();
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['useSelectedSpecialNavigationPath'] = mike;
    return entity;
})();