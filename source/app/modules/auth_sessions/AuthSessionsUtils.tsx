// app/modules/auth_sessions/AuthSessionsUtils.tsx
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
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/auth_sessions/AuthSessionsUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: useAuthSessions
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 3;
        tango = tango[zulu];
        zulu = undefined;
        oscar = report.bind(zulu)(tango);
        report = oscar.useStateFromStoresObject;
        zulu = _closure1_slot5;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = function() {
            mike = _closure1_slot5;
            entity = mike.getSessions;
            entity = entity.bind(mike)();
            return entity;
        };
        report = report.bind(oscar)(tango, zulu);
        var _closure2_slot0 = report;
        tango = _closure1_slot3;
        zulu = tango.useMemo;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun95566: for(var _fun95566_ip = 0; ; ) switch(_fun95566_ip) {
 0:
                verify = _closure2_slot0;
                mike = new Array(0);
                report = 0;
                offset = mike;
                options = 0;
                zulu = arraySpread(offset, verify, options);
                tango = _closure1_slot4;
                zulu = tango.getAuthSessionIdHash;
                zulu = zulu.bind(tango)();
                var _closure3_slot0 = zulu;
                oscar = null;
                tango = oscar != zulu;
                zulu = null;
                if(!tango) { _fun95566_ip = 102; continue _fun95566 }
 56:
                golf = mike.findIndex;
                tango = function(argFoo) {
                    entity = argFoo;
                    mike = entity.id_hash;
                    entity = _closure3_slot0;
                    entity = mike === entity;
                    return entity;
                };
                golf = golf.bind(mike)(tango);
                tango = golf >= report;
                zulu = null;
                if(!tango) { _fun95566_ip = 102; continue _fun95566 }
 83:
                oscar = mike.splice;
                tango = 1;
                tango = oscar.bind(mike)(golf, tango);
                zulu = tango[report];
 102:
                tango = mike.sort;
                entity = function(argFoo, argBar) {
                    entity = argBar;
                    mike = entity.approx_last_used_time;
                    entity = mike.valueOf;
                    mike = entity.bind(mike)();
                    entity = argFoo;
                    zulu = entity.approx_last_used_time;
                    entity = zulu.valueOf;
                    entity = entity.bind(zulu)();
                    entity = mike - entity;
                    return entity;
                };
                entity = tango.bind(mike)(entity);
                entity = {};
                entity['currentSession'] = zulu;
                entity['otherSessions'] = mike;
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useAuthSessions'] = tango;
    mike = function(argFoo) { // Original name: formatDate
        _fun95569: for(var _fun95569_ip = 0; ; ) switch(_fun95569_ip) {
 0:
            zulu = argFoo;
            entity = global;
            mike = entity.Date;
            entity = mike.now;
            mike = entity.bind(mike)();
            entity = zulu.valueOf;
            entity = entity.bind(zulu)();
            mike = mike - entity;
            entity = 1000;
            entity = mike / entity;
            mike = 60;
            entity = entity / mike;
            mike = entity / mike;
            entity = 1;
            if(!(!(mike < entity))) { _fun95569_ip = 103; continue _fun95569 }
 61:
            tango = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 5;
            entity = mike[entity];
            mike = undefined;
            entity = tango.bind(mike)(entity);
            mike = entity.bind(mike)(zulu);
            entity = mike.fromNow;
            entity = entity.bind(mike)();
            _fun95569_ip = 163; continue _fun95569;
 103:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 4;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.TXCmfH;
            entity = zulu.bind(tango)(mike);
 163:
            return entity;
        }
    };
    zulu['formatDate'] = mike;
    return entity;
})();