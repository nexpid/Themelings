// app/modules/guild_role_subscriptions/useActiveGuildSubscriptions.tsx
export default (function(_, argBar, argBaz, argCorge, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    options = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = options;
    var _closure1_slot3 = oscar;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.UserGuildRoleSubscriptionRelationship;
    var _closure1_slot6 = tango;
    tango = new Array(0);
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/useActiveGuildSubscriptions.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useActiveGuildSubscriptions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = arguments[0];
            report = undefined;
            if(!(entity === report)) { _fun00002_ip = 13; continue _fun00001 }
 11:
            entity = {};
 13:
            options = entity.ensureFresh;
            if(!(options === report)) { _fun00002_ip = 25; continue _fun00001 }
 23:
            options = false;
 25:
            var _closure2_slot0 = options;
            var _closure2_slot1 = report;
            var _closure2_slot2 = report;
            tango = _closure1_slot1;
            oscar = _closure1_slot3;
            entity = 3;
            entity = oscar[entity];
            entity = tango.bind(report)(entity);
            tango = entity.bind(report)();
            entity = _closure1_slot6;
            entity = entity.SUBSCRIBED;
            golf = tango === entity;
            _closure2_slot1 = golf;
            tango = _closure1_slot0;
            entity = 4;
            entity = oscar[entity];
            oscar = tango.bind(report)(entity);
            report = oscar.useStateFromStores;
            entity = _closure1_slot5;
            tango = new Array(1);
            tango[0] = entity;
            entity = function() {
                mike = _closure1_slot5;
                entity = mike.getActiveGuildSubscriptions;
                entity = entity.bind(mike)();
                return entity;
            };
            entity = report.bind(oscar)(tango, entity);
            oscar = _closure1_slot4;
            report = oscar.useRef;
            tango = false;
            tango = report.bind(oscar)(tango);
            _closure2_slot2 = tango;
            report = oscar.useEffect;
            tango = new Array(2);
            tango[0] = options;
            tango[1] = golf;
            zulu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = {};
                    mike = _closure2_slot0;
                    entity['ensureFresh'] = mike;
                    mike = _closure2_slot1;
                    entity['hasRoleSubscriptions'] = mike;
                    mike = _closure2_slot2;
                    mike = mike.current;
                    entity['hasFetched'] = mike;
                    oscar = entity.ensureFresh;
                    report = entity.hasFetched;
                    tango = entity.hasRoleSubscriptions;
                    golf = _closure1_slot5;
                    entity = golf.getActiveGuildSubscriptions;
                    options = entity.bind(golf)();
                    golf = null;
                    offset = golf == options;
                    entity = undefined;
                    verify = undefined;
                    if(offset) { _fun00004_ip = 90; continue _fun00003 }
 85:
                    verify = options.length;
 90:
                    offset = golf != verify;
                    options = 0;
                    golf = 0;
                    if(!offset) { _fun00004_ip = 104; continue _fun00003 }
 101:
                    golf = verify;
 104:
                    golf = options !== golf;
                    if(golf) { _fun00004_ip = 114; continue _fun00003 }
 111:
                    golf = !tango;
 114:
                    tango = !golf;
                    if(!golf) { _fun00004_ip = 132; continue _fun00003 }
 120:
                    oscar = !oscar;
                    if(oscar) { _fun00004_ip = 129; continue _fun00003 }
 126:
                    oscar = report;
 129:
                    tango = !oscar;
 132:
                    if(tango) { _fun00004_ip = 161; continue _fun00003 }
 135:
                    report = !report;
                    if(!report) { _fun00004_ip = 158; continue _fun00003 }
 141:
                    golf = _closure1_slot5;
                    oscar = golf.hasFetchedSubscriptions;
                    oscar = oscar.bind(golf)();
                    report = !oscar;
 158:
                    tango = report;
 161:
                    if(!tango) { _fun00004_ip = 206; continue _fun00003 }
 164:
                    tango = _closure2_slot2;
                    zulu = true;
                    tango['current'] = zulu;
                    zulu = _closure1_slot2;
                    tango = _closure1_slot3;
                    mike = 5;
                    mike = tango[mike];
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.fetchSubscriptions;
                    mike = mike.bind(zulu)();
 206:
                    return entity;
                }
            };
            zulu = report.bind(oscar)(zulu, tango);
            zulu = null;
            if(!(zulu == entity)) { _fun00002_ip = 188; continue _fun00001 }
 184:
            entity = _closure1_slot7;
 188:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();