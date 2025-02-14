// app/modules/guild_role_subscriptions/useUserRoleSubscriptionRelationship.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    mike = function() { // Original name: getUserRoleSubscriptionRelationship
        _fun96565: for(var _fun96565_ip = 0; ; ) switch(_fun96565_ip) {
 0:
            report = arguments[0];
            entity = undefined;
            if(!(report === entity)) { _fun96565_ip = 29; continue _fun96565 }
 11:
            tango = _closure1_slot2;
            zulu = new Array(1);
            zulu[0] = tango;
            report = zulu;
 29:
            zulu = report;
            tango = zulu[Symbol.iterator];
            zulu = tango().next;
            oscar = zulu().value;
            zulu = tango;
            report = zulu === entity;
            zulu = undefined;
            if(report) { _fun96565_ip = 54; continue _fun96565 }
 51:
            zulu = oscar;
 54:
            var _closure2_slot0 = zulu;
            if(report) { _fun96565_ip = 64; continue _fun96565 }
 61:
            tango.return();
 64:
            var _closure2_slot1 = entity;
            entity = zulu.getGuildIdsWithPurchasableRoles;
            entity = entity.bind(zulu)();
            zulu = false;
            _closure2_slot1 = zulu;
            tango = entity.forEach;
            zulu = function(argFoo) {
                _fun96566: for(var _fun96566_ip = 0; ; ) switch(_fun96566_ip) {
 0:
                    tango = _closure2_slot0;
                    zulu = tango.getUserSubscriptionRoles;
                    entity = argFoo;
                    entity = zulu.bind(tango)(entity);
                    zulu = entity.size;
                    entity = 0;
                    if(!(zulu > entity)) { _fun96566_ip = 38; continue _fun96566 }
 32:
                    entity = true;
                    _closure2_slot1 = entity;
 38:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = tango.bind(entity)(zulu);
            mike = _closure2_slot1;
            if(mike) { _fun96565_ip = 151; continue _fun96565 }
 110:
            mike = entity.size;
            entity = 0;
            if(!(entity !== mike)) { _fun96565_ip = 136; continue _fun96565 }
 121:
            entity = _closure1_slot3;
            entity = entity.IN_SUBSCRIPTION_SERVER;
            _fun96565_ip = 149; continue _fun96565;
 136:
            mike = _closure1_slot3;
            entity = mike.NONE;
 149:
            _fun96565_ip = 164; continue _fun96565;
 151:
            mike = _closure1_slot3;
            entity = mike.SUBSCRIBED;
 164:
            return entity;
        }
    };
    var _closure1_slot4 = mike;
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
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(options);
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.UserGuildRoleSubscriptionRelationship;
    var _closure1_slot3 = report;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_role_subscriptions/useUserRoleSubscriptionRelationship.tsx';
    report = oscar.bind(golf)(report);
    tango = function() { // Original name: useUserRoleSubscriptionRelationship
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 2;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        entity = _closure1_slot2;
        mike = new Array(1);
        mike[0] = entity;
        entity = function() {
            zulu = _closure1_slot4;
            entity = _closure1_slot2;
            mike = new Array(1);
            mike[0] = entity;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = tango;
    zulu['getUserRoleSubscriptionRelationship'] = mike;
    return entity;
})();