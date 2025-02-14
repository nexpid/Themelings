// app/modules/user_profile/hooks/useUserProfileConnections.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.useMemo;
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = new Array(0);
    var _closure1_slot5 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_profile/hooks/useUserProfileConnections.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useUserProfileConnections
        _fun102704: for(var _fun102704_ip = 0; ; ) switch(_fun102704_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 2;
            mike = golf[mike];
            tango = undefined;
            options = oscar.bind(tango)(mike);
            report = options.usePlatformAllowed;
            mike = {};
            verify = true;
            mike['forUserProfile'] = verify;
            report = report.bind(options)(mike);
            var _closure2_slot1 = report;
            mike = 3;
            mike = golf[mike];
            options = oscar.bind(tango)(mike);
            golf = options.useStateFromStores;
            mike = _closure1_slot4;
            oscar = new Array(1);
            oscar[0] = mike;
            mike = function() {
                zulu = _closure1_slot4;
                mike = zulu.getUserProfile;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = golf.bind(options)(oscar, mike);
            var _closure2_slot2 = mike;
            zulu = _closure1_slot3;
            oscar = null;
            golf = oscar == mike;
            oscar = undefined;
            if(golf) { _fun102704_ip = 125; continue _fun102704 }
 119:
            oscar = mike.connectedAccounts;
 125:
            mike = new Array(2);
            mike[0] = oscar;
            mike[1] = report;
            entity = function() {
                _fun102706: for(var _fun102706_ip = 0; ; ) switch(_fun102706_ip) {
 0:
                    mike = _closure2_slot2;
                    zulu = null;
                    tango = zulu == mike;
                    mike = undefined;
                    if(tango) { _fun102706_ip = 28; continue _fun102706 }
 18:
                    tango = _closure2_slot2;
                    mike = tango.connectedAccounts;
 28:
                    if(!(zulu != mike)) { _fun102706_ip = 63; continue _fun102706 }
 32:
                    entity = _closure2_slot2;
                    zulu = entity.connectedAccounts;
                    mike = zulu.filter;
                    entity = function(argFoo) {
                        _fun102707: for(var _fun102707_ip = 0; ; ) switch(_fun102707_ip) {
 0:
                            entity = argFoo;
                            zulu = entity.type;
                            mike = _closure1_slot1;
                            tango = _closure1_slot2;
                            entity = 4;
                            entity = tango[entity];
                            tango = undefined;
                            mike = mike.bind(tango)(entity);
                            entity = mike.get;
                            zulu = entity.bind(mike)(zulu);
                            entity = null;
                            entity = entity != zulu;
                            if(!entity) { _fun102707_ip = 64; continue _fun102707 }
 52:
                            mike = _closure2_slot1;
                            entity = mike.bind(tango)(zulu);
 64:
                            return entity;
                        }
                    };
                    entity = mike.bind(zulu)(entity);
                    _fun102706_ip = 70; continue _fun102706;
 63:
                    entity = _closure1_slot5;
 70:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();