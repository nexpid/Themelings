// app/modules/app_launcher/native/hooks/useNavigationTransitionEnded.tsx
export default (function(_, argBar, argBaz, argCorge, __, argFred, argPlugh) {
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
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.useAppLauncherNavigation;
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_launcher/native/hooks/useNavigationTransitionEnded.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useNavigationTransitionEnded
        report = _closure1_slot3;
        tango = report.useState;
        entity = false;
        oscar = tango.bind(report)(entity);
        tango = _closure1_slot2;
        golf = undefined;
        entity = 2;
        oscar = tango.bind(golf)(oscar, entity);
        entity = 0;
        entity = oscar[entity];
        tango = 1;
        oscar = oscar[tango];
        var _closure2_slot0 = oscar;
        tango = _closure1_slot4;
        options = tango.bind(golf)();
        var _closure2_slot1 = options;
        tango = _closure1_slot0;
        verify = _closure1_slot1;
        zulu = 3;
        zulu = verify[zulu];
        tango = tango.bind(golf)(zulu);
        zulu = tango.useRoute;
        golf = zulu.bind(tango)();
        var _closure2_slot2 = golf;
        tango = report.useEffect;
        zulu = new Array(3);
        zulu[0] = options;
        zulu[1] = golf;
        zulu[2] = oscar;
        mike = function() {
            tango = _closure2_slot1;
            zulu = tango.addListener;
            mike = 'transitionEnd';
            entity = function() {
                _fun118923: for(var _fun118923_ip = 0; ; ) switch(_fun118923_ip) {
 0:
                    zulu = _closure2_slot1;
                    mike = zulu.getState;
                    mike = mike.bind(zulu)();
                    zulu = mike.routes;
                    mike = mike.index;
                    mike = zulu[mike];
                    zulu = mike.key;
                    mike = _closure2_slot2;
                    mike = mike.key;
                    if(!(zulu === mike)) { _fun118923_ip = 63; continue _fun118923 }
 50:
                    zulu = _closure2_slot0;
                    mike = undefined;
                    entity = true;
                    entity = zulu.bind(mike)(entity);
 63:
                    entity = undefined;
                    return entity;
                }
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();