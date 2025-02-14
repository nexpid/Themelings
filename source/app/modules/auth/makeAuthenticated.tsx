// app/modules/auth/makeAuthenticated.tsx
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
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.LoginStates;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot5 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/auth/makeAuthenticated.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: makeAuthenticated
        _fun118287: for(var _fun118287_ip = 0; ; ) switch(_fun118287_ip) {
 0:
            tango = argFoo;
            mike = arguments[2];
            var _closure2_slot0 = tango;
            zulu = argBar;
            var _closure2_slot1 = zulu;
            zulu = undefined;
            if(!(mike === zulu)) { _fun118287_ip = 37; continue _fun118287 }
 25:
            zulu = {};
            report = true;
            zulu['passProps'] = report;
            mike = zulu;
 37:
            var _closure2_slot2 = mike;
            entity = function(argFoo) { // Original name: Authenticated
                _fun118288: for(var _fun118288_ip = 0; ; ) switch(_fun118288_ip) {
 0:
                    golf = argFoo;
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 4;
                    entity = tango[entity];
                    report = undefined;
                    zulu = zulu.bind(report)(entity);
                    entity = zulu.isAuthenticated;
                    entity = entity.bind(zulu)();
                    if(entity) { _fun118288_ip = 189; continue _fun118288 }
 44:
                    zulu = _closure1_slot3;
                    entity = zulu.getLoginStatus;
                    zulu = entity.bind(zulu)();
                    entity = _closure1_slot4;
                    entity = entity.LOGGING_IN;
                    if(!(zulu !== entity)) { _fun118288_ip = 189; continue _fun118288 }
 72:
                    zulu = _closure1_slot3;
                    entity = zulu.allowLogoutRedirect;
                    entity = entity.bind(zulu)();
                    if(!entity) { _fun118288_ip = 189; continue _fun118288 }
 89:
                    tango = _closure2_slot1;
                    entity = null;
                    if(!(entity == tango)) { _fun118288_ip = 136; continue _fun118288 }
 102:
                    oscar = _closure1_slot5;
                    tango = _closure1_slot1;
                    options = _closure1_slot2;
                    entity = 5;
                    entity = options[entity];
                    tango = tango.bind(report)(entity);
                    entity = {};
                    entity = oscar.bind(report)(tango, entity);
                    _fun118288_ip = 187; continue _fun118288;
 136:
                    oscar = _closure1_slot5;
                    tango = _closure2_slot1;
                    zulu = {};
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    options = 5;
                    options = offset[options];
                    verify = verify.bind(report)(options);
                    options = {};
                    options = oscar.bind(report)(verify, options);
                    zulu['renderRedirect'] = options;
                    entity = oscar.bind(report)(tango, zulu);
 187:
                    _fun118288_ip = 236; continue _fun118288;
 189:
                    tango = _closure1_slot5;
                    zulu = _closure2_slot0;
                    mike = {};
                    oscar = _closure2_slot2;
                    options = oscar.passProps;
                    oscar = null;
                    if(!options) { _fun118288_ip = 220; continue _fun118288 }
 217:
                    oscar = golf;
 220:
                    romeo = mike;
                    yankee = oscar;
                    oscar = copyDataProperties(romeo, yankee);
                    entity = tango.bind(report)(zulu, mike);
 236:
                    return entity;
                }
            };
            mike = tango.displayName;
            zulu = null;
            if(!(zulu == mike)) { _fun118287_ip = 64; continue _fun118287 }
 59:
            mike = tango.name;
 64:
            zulu = zulu != mike;
            report = '<Unknown>';
            if(!zulu) { _fun118287_ip = 80; continue _fun118287 }
 77:
            report = mike;
 80:
            mike = global;
            mike = mike.HermesInternal;
            tango = mike.concat;
            zulu = 'Authenticated(';
            mike = ')';
            mike = tango.bind(zulu)(report, mike);
            entity['displayName'] = mike;
            return entity;
        }
    };
    zulu['makeAuthenticated'] = mike;
    return entity;
})();