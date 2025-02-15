// app/modules/auth/RedirectUnauthenticated.tsx
export default (function(_, argBar, __, argCorge, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    mike = function() { // Original name: getRedirectPath
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = global;
            mike = entity.location;
            mike = mike.pathname;
            entity = entity.location;
            entity = entity.search;
            report = mike + entity;
            entity = _closure1_slot3;
            if(entity) { _fun00002_ip = 78; continue _fun00001 }
 40:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 4;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.getLoginPath;
            entity = false;
            entity = zulu.bind(tango)(report, entity);
            _fun00002_ip = 88; continue _fun00001;
 78:
            mike = _closure1_slot2;
            entity = mike.REGISTER;
 88:
            return entity;
        }
    };
    var _closure1_slot5 = mike;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    options = golf[entity];
    report = argCorge;
    entity = undefined;
    report = report.bind(entity)(options);
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.Routes;
    var _closure1_slot2 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.CONFERENCE_MODE_ENABLED;
    var _closure1_slot3 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot4 = report;
    report = 6;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/auth/RedirectUnauthenticated.tsx';
    report = oscar.bind(golf)(report);
    tango = function() { // Original name: RedirectUnauthenticated
        tango = _closure1_slot4;
        mike = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 5;
        entity = zulu[entity];
        zulu = undefined;
        entity = mike.bind(zulu)(entity);
        mike = entity.Redirect;
        entity = {};
        report = _closure1_slot5;
        report = report.bind(zulu)();
        entity['to'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    zulu['default'] = tango;
    zulu['getRedirectPath'] = mike;
    return entity;
})();