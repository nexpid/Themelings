// app/modules/guild_role_subscriptions/GroupListingsFetchContext.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    verify = argBaz;
    golfie = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    offset = entity.Object;
    option = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    golfie = golfie.bind(entity)(tangon);
    var _closure1_slot3 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    option = oscard[tangon];
    option = verify.bind(entity)(option);
    var _closure1_slot5 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FetchState;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot7 = tangon;
    tangon = golfie.createContext;
    tangon = tangon.bind(golfie)(entity);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_role_subscriptions/GroupListingsFetchContext.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useGroupListingsFetchContext
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            tangon = _closure1_slot3;
            zuuluu = tangon.useContext;
            entity = _closure1_slot8;
            zuuluu = zuuluu.bind(tangon)(entity);
            tangon = null;
            if(!(tangon != zuuluu)) { _fun00002_ip = 51; continue _fun00001 }
 31:
            entity = zuuluu.listingsLoaded;
            report = zuuluu.fetchGroupListingsForGuild;
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)();
            return entity;
 51:
            entity = global;
            zuuluu = entity.Error;
            tangon = tangon != michal;
            report = 'useGroupListingsFetchContext';
            if(!tangon) { _fun00002_ip = 73; continue _fun00001 }
 70:
            report = michal;
 73:
            entity = entity.HermesInternal;
            tangon = entity.concat;
            michal = '';
            entity = ' must be used within a GroupListingsFetchContextProvider';
            golfie = tangon.bind(michal)(report, entity);
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            option = michal;
            entity = new option[zuuluu](golfie, oscard);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    zuuluu['useGroupListingsFetchContext'] = tangon;
    michal = function(argFoo) { // Original name: GroupListingsFetchContextProvider
        entity = argFoo;
        foxtra = entity.guildId;
        var _closure2_slot0 = foxtra;
        report = entity.children;
        option = entity.refetchOnMount;
        romeon = entity.includeSoftDeleted;
        var _closure2_slot1 = romeon;
        yankee = entity.countryCode;
        var _closure2_slot2 = yankee;
        golfie = entity.dontFetchWhileTrue;
        var _closure2_slot3 = golfie;
        oscard = _closure1_slot0;
        verify = _closure1_slot2;
        zuuluu = 4;
        offset = verify[zuuluu];
        tangon = undefined;
        sizing = oscard.bind(tangon)(offset);
        kiloes = sizing.useStateFromStores;
        offset = _closure1_slot4;
        backup = new Array(1);
        backup[0] = offset;
        offset = function() {
            michal = _closure1_slot4;
            entity = michal.isConnected;
            entity = entity.bind(michal)();
            return entity;
        };
        backup = kiloes.bind(sizing)(backup, offset);
        var _closure2_slot4 = backup;
        zuuluu = verify[zuuluu];
        offset = oscard.bind(tangon)(zuuluu);
        verify = offset.useStateFromStores;
        zuuluu = _closure1_slot5;
        oscard = new Array(1);
        oscard[0] = zuuluu;
        zuuluu = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure2_slot0;
                entity = null;
                if(!(entity == zuuluu)) { _fun00004_ip = 28; continue _fun00003 }
 13:
                entity = _closure1_slot6;
                entity = entity.FETCHED;
                _fun00004_ip = 50; continue _fun00003;
 28:
                tangon = _closure1_slot5;
                zuuluu = tangon.getSubscriptionGroupListingsForGuildFetchState;
                michal = _closure2_slot0;
                entity = zuuluu.bind(tangon)(michal);
 50:
                return entity;
            }
        };
        oscard = verify.bind(offset)(oscard, zuuluu);
        offset = _closure1_slot3;
        zuuluu = offset.useRef;
        zuuluu = zuuluu.bind(offset)(option);
        var _closure2_slot5 = zuuluu;
        verify = offset.useCallback;
        option = new Array(5);
        option[0] = backup;
        option[1] = foxtra;
        option[2] = romeon;
        option[3] = yankee;
        option[4] = golfie;
        golfie = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = _closure2_slot0;
                entity = null;
                if(!(entity != michal)) { _fun00006_ip = 160; continue _fun00005 }
 16:
                entity = _closure2_slot4;
                if(!entity) { _fun00006_ip = 160; continue _fun00005 }
 26:
                michal = _closure2_slot3;
                entity = true;
                if(!(entity !== michal)) { _fun00006_ip = 160; continue _fun00005 }
 39:
                tangon = _closure1_slot5;
                zuuluu = tangon.getSubscriptionGroupListingsForGuildFetchState;
                michal = _closure2_slot0;
                tangon = zuuluu.bind(tangon)(michal);
                michal = _closure2_slot5;
                michal = michal.current;
                if(michal) { _fun00006_ip = 87; continue _fun00005 }
 73:
                zuuluu = _closure1_slot6;
                zuuluu = zuuluu.NOT_FETCHED;
                michal = tangon === zuuluu;
 87:
                if(!michal) { _fun00006_ip = 160; continue _fun00005 }
 90:
                zuuluu = _closure2_slot5;
                michal = false;
                zuuluu['current'] = michal;
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.fetchAllSubscriptionListingsDataForGuild;
                michal = _closure2_slot0;
                entity = {};
                oscard = _closure2_slot1;
                entity['includeSoftDeleted'] = oscard;
                report = _closure2_slot2;
                entity['countryCode'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
 160:
                entity = undefined;
                return entity;
            }
        };
        golfie = verify.bind(offset)(golfie, option);
        michal = function(argFoo, argBar) { // Original name: useListingsLoaded
            oscard = argFoo;
            report = argBar;
            var _closure3_slot0 = oscard;
            var _closure3_slot1 = report;
            tangon = _closure1_slot3;
            zuuluu = tangon.useMemo;
            michal = new Array(2);
            michal[0] = oscard;
            michal[1] = report;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure3_slot0;
                    entity = _closure1_slot6;
                    entity = entity.FETCHED;
                    entity = zuuluu === entity;
                    if(!entity) { _fun00008_ip = 42; continue _fun00007 }
 27:
                    michal = _closure3_slot1;
                    zuuluu = michal.current;
                    michal = true;
                    entity = michal !== zuuluu;
 42:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        option = michal.bind(tangon)(oscard, zuuluu);
        zuuluu = _closure1_slot7;
        entity = _closure1_slot8;
        michal = entity.Provider;
        entity = {};
        oscard = {};
        oscard['listingsLoaded'] = option;
        oscard['fetchGroupListingsForGuild'] = golfie;
        entity['value'] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['GroupListingsFetchContextProvider'] = michal;
    return entity;
})();