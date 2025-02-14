// app/modules/guild_role_subscriptions/GroupListingsFetchContext.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    verify = argBaz;
    golf = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    offset = entity.Object;
    options = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    golf = golf.bind(entity)(tango);
    var _closure1_slot3 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    options = oscar[tango];
    options = verify.bind(entity)(options);
    var _closure1_slot5 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.FetchState;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot7 = tango;
    tango = golf.createContext;
    tango = tango.bind(golf)(entity);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/GroupListingsFetchContext.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useGroupListingsFetchContext
        _fun96672: for(var _fun96672_ip = 0; ; ) switch(_fun96672_ip) {
 0:
            mike = argFoo;
            tango = _closure1_slot3;
            zulu = tango.useContext;
            entity = _closure1_slot8;
            zulu = zulu.bind(tango)(entity);
            tango = null;
            if(!(tango != zulu)) { _fun96672_ip = 51; continue _fun96672 }
 31:
            entity = zulu.listingsLoaded;
            report = zulu.fetchGroupListingsForGuild;
            zulu = undefined;
            zulu = report.bind(zulu)();
            return entity;
 51:
            entity = global;
            zulu = entity.Error;
            tango = tango != mike;
            report = 'useGroupListingsFetchContext';
            if(!tango) { _fun96672_ip = 73; continue _fun96672 }
 70:
            report = mike;
 73:
            entity = entity.HermesInternal;
            tango = entity.concat;
            mike = '';
            entity = ' must be used within a GroupListingsFetchContextProvider';
            golf = tango.bind(mike)(report, entity);
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            options = mike;
            entity = new options[zulu](golf, oscar);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    zulu['useGroupListingsFetchContext'] = tango;
    mike = function(argFoo) { // Original name: GroupListingsFetchContextProvider
        entity = argFoo;
        foxtrot = entity.guildId;
        var _closure2_slot0 = foxtrot;
        report = entity.children;
        options = entity.refetchOnMount;
        romeo = entity.includeSoftDeleted;
        var _closure2_slot1 = romeo;
        yankee = entity.countryCode;
        var _closure2_slot2 = yankee;
        golf = entity.dontFetchWhileTrue;
        var _closure2_slot3 = golf;
        oscar = _closure1_slot0;
        verify = _closure1_slot2;
        zulu = 4;
        offset = verify[zulu];
        tango = undefined;
        sizing = oscar.bind(tango)(offset);
        kilo = sizing.useStateFromStores;
        offset = _closure1_slot4;
        backup = new Array(1);
        backup[0] = offset;
        offset = function() {
            mike = _closure1_slot4;
            entity = mike.isConnected;
            entity = entity.bind(mike)();
            return entity;
        };
        backup = kilo.bind(sizing)(backup, offset);
        var _closure2_slot4 = backup;
        zulu = verify[zulu];
        offset = oscar.bind(tango)(zulu);
        verify = offset.useStateFromStores;
        zulu = _closure1_slot5;
        oscar = new Array(1);
        oscar[0] = zulu;
        zulu = function() {
            _fun96675: for(var _fun96675_ip = 0; ; ) switch(_fun96675_ip) {
 0:
                zulu = _closure2_slot0;
                entity = null;
                if(!(entity == zulu)) { _fun96675_ip = 28; continue _fun96675 }
 13:
                entity = _closure1_slot6;
                entity = entity.FETCHED;
                _fun96675_ip = 50; continue _fun96675;
 28:
                tango = _closure1_slot5;
                zulu = tango.getSubscriptionGroupListingsForGuildFetchState;
                mike = _closure2_slot0;
                entity = zulu.bind(tango)(mike);
 50:
                return entity;
            }
        };
        oscar = verify.bind(offset)(oscar, zulu);
        offset = _closure1_slot3;
        zulu = offset.useRef;
        zulu = zulu.bind(offset)(options);
        var _closure2_slot5 = zulu;
        verify = offset.useCallback;
        options = new Array(5);
        options[0] = backup;
        options[1] = foxtrot;
        options[2] = romeo;
        options[3] = yankee;
        options[4] = golf;
        golf = function() {
            _fun96676: for(var _fun96676_ip = 0; ; ) switch(_fun96676_ip) {
 0:
                mike = _closure2_slot0;
                entity = null;
                if(!(entity != mike)) { _fun96676_ip = 160; continue _fun96676 }
 16:
                entity = _closure2_slot4;
                if(!entity) { _fun96676_ip = 160; continue _fun96676 }
 26:
                mike = _closure2_slot3;
                entity = true;
                if(!(entity !== mike)) { _fun96676_ip = 160; continue _fun96676 }
 39:
                tango = _closure1_slot5;
                zulu = tango.getSubscriptionGroupListingsForGuildFetchState;
                mike = _closure2_slot0;
                tango = zulu.bind(tango)(mike);
                mike = _closure2_slot5;
                mike = mike.current;
                if(mike) { _fun96676_ip = 87; continue _fun96676 }
 73:
                zulu = _closure1_slot6;
                zulu = zulu.NOT_FETCHED;
                mike = tango === zulu;
 87:
                if(!mike) { _fun96676_ip = 160; continue _fun96676 }
 90:
                zulu = _closure2_slot5;
                mike = false;
                zulu['current'] = mike;
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 5;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.fetchAllSubscriptionListingsDataForGuild;
                mike = _closure2_slot0;
                entity = {};
                oscar = _closure2_slot1;
                entity['includeSoftDeleted'] = oscar;
                report = _closure2_slot2;
                entity['countryCode'] = report;
                entity = zulu.bind(tango)(mike, entity);
 160:
                entity = undefined;
                return entity;
            }
        };
        golf = verify.bind(offset)(golf, options);
        mike = function(argFoo, argBar) { // Original name: useListingsLoaded
            oscar = argFoo;
            report = argBar;
            var _closure3_slot0 = oscar;
            var _closure3_slot1 = report;
            tango = _closure1_slot3;
            zulu = tango.useMemo;
            mike = new Array(2);
            mike[0] = oscar;
            mike[1] = report;
            entity = function() {
                _fun96678: for(var _fun96678_ip = 0; ; ) switch(_fun96678_ip) {
 0:
                    zulu = _closure3_slot0;
                    entity = _closure1_slot6;
                    entity = entity.FETCHED;
                    entity = zulu === entity;
                    if(!entity) { _fun96678_ip = 42; continue _fun96678 }
 27:
                    mike = _closure3_slot1;
                    zulu = mike.current;
                    mike = true;
                    entity = mike !== zulu;
 42:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        options = mike.bind(tango)(oscar, zulu);
        zulu = _closure1_slot7;
        entity = _closure1_slot8;
        mike = entity.Provider;
        entity = {};
        oscar = {};
        oscar['listingsLoaded'] = options;
        oscar['fetchGroupListingsForGuild'] = golf;
        entity['value'] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['GroupListingsFetchContextProvider'] = mike;
    return entity;
})();