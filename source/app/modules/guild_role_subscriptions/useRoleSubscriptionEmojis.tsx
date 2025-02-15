// app/modules/guild_role_subscriptions/useRoleSubscriptionEmojis.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, mike);
    entity = 0;
    report = golf[entity];
    mike = argCorge;
    entity = undefined;
    mike = mike.bind(entity)(report);
    var _closure1_slot2 = mike;
    mike = 1;
    report = golf[mike];
    mike = argBaz;
    mike = mike.bind(entity)(report);
    var _closure1_slot3 = mike;
    mike = new Array(0);
    var _closure1_slot4 = mike;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_role_subscriptions/useRoleSubscriptionEmojis.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: useRoleSubscriptionEmojis
        report = argFoo;
        var _closure2_slot0 = report;
        oscar = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 2;
        tango = tango[zulu];
        zulu = undefined;
        options = oscar.bind(zulu)(tango);
        golf = options.useStateFromStores;
        zulu = _closure1_slot3;
        oscar = new Array(1);
        oscar[0] = zulu;
        tango = new Array(1);
        tango[0] = report;
        zulu = function() {
            zulu = _closure1_slot3;
            mike = zulu.getGuildEmoji;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar = golf.bind(options)(oscar, zulu, tango);
        var _closure2_slot1 = oscar;
        tango = _closure1_slot2;
        zulu = tango.useMemo;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure2_slot1;
                mike = null;
                if(!(mike != zulu)) { _fun00002_ip = 38; continue _fun00001 }
 13:
                zulu = _closure2_slot1;
                mike = zulu.filter;
                entity = function(argFoo) {
                    zulu = _closure1_slot0;
                    mike = _closure1_slot1;
                    entity = 3;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.isRoleSubscriptionEmoji;
                    mike = _closure2_slot0;
                    entity = argFoo;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                _fun00002_ip = 45; continue _fun00001;
 38:
                entity = _closure1_slot4;
 45:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = tango;
    zulu['NO_EMOJIS_AVAILABLE'] = mike;
    return entity;
})();