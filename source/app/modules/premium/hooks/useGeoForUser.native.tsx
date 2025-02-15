// app/modules/premium/hooks/useGeoForUser.native.tsx
export default (function(_, argBar, argBaz, argCorge, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    options = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/hooks/useGeoForUser.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useGeoForUser
        golf = _closure1_slot0;
        options = _closure1_slot2;
        report = 4;
        mike = options[report];
        oscar = undefined;
        offset = golf.bind(oscar)(mike);
        verify = offset.useStateFromStores;
        mike = _closure1_slot6;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tango = _closure1_slot6;
                zulu = tango.getProduct;
                report = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 5;
                mike = mike[entity];
                entity = undefined;
                mike = report.bind(entity)(mike);
                mike = mike.ProductIds;
                mike = mike.PREMIUM_TIER_2_MONTHLY;
                mike = zulu.bind(tango)(mike);
                zulu = null;
                zulu = zulu == mike;
                if(zulu) { _fun00002_ip = 67; continue _fun00001 }
 61:
                entity = mike.countryCode;
 67:
                return entity;
            }
        };
        zulu = verify.bind(offset)(zulu, mike);
        mike = options[report];
        yankee = golf.bind(oscar)(mike);
        offset = yankee.useStateFromStores;
        mike = _closure1_slot5;
        verify = new Array(1);
        verify[0] = mike;
        mike = function() {
            entity = _closure1_slot5;
            entity = entity.ipCountryCode;
            return entity;
        };
        mike = offset.bind(yankee)(verify, mike);
        report = options[report];
        options = golf.bind(oscar)(report);
        golf = options.useStateFromStores;
        report = _closure1_slot4;
        oscar = new Array(1);
        oscar[0] = report;
        report = function() {
            mike = _closure1_slot4;
            entity = mike.isAuthenticated;
            entity = entity.bind(mike)();
            return entity;
        };
        golf = golf.bind(options)(oscar, report);
        var _closure2_slot0 = golf;
        oscar = _closure1_slot3;
        report = oscar.useEffect;
        tango = new Array(2);
        tango[0] = mike;
        tango[1] = golf;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = _closure2_slot0;
                if(!entity) { _fun00004_ip = 26; continue _fun00003 }
 10:
                mike = _closure1_slot5;
                mike = mike.ipCountryCodeLoaded;
                entity = !mike;
 26:
                if(!entity) { _fun00004_ip = 64; continue _fun00003 }
 29:
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 6;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                entity = mike.fetchIpCountryCode;
                entity = entity.bind(mike)();
 64:
                entity = undefined;
                return entity;
            }
        };
        entity = report.bind(oscar)(entity, tango);
        entity = {};
        entity['defaultBillingCountryCode'] = zulu;
        entity['ipCountryCode'] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();