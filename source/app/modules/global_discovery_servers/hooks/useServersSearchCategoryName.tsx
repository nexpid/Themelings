// app/modules/global_discovery_servers/hooks/useServersSearchCategoryName.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo) { // Original name: getServersSearchCategoryName
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            zuuluu = arguments[1];
            oscard = undefined;
            if(!(zuuluu === oscard)) { _fun00002_ip = 30; continue _fun00001 }
 12:
            michal = _closure1_slot2;
            entity = new Array(1);
            entity[0] = michal;
            zuuluu = entity;
 30:
            michal = zuuluu;
            entity = michal[Symbol.iterator];
            michal = entity().next;
            report = michal().value;
            michal = entity;
            michal = michal === oscard;
            zuuluu = undefined;
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 52:
            zuuluu = report;
 55:
            if(michal) { _fun00002_ip = 61; continue _fun00001 }
 58:
            entity.return();
 61:
            entity = _closure1_slot3;
            if(!(tangon !== entity)) { _fun00002_ip = 87; continue _fun00001 }
 72:
            entity = zuuluu.getCategoryName;
            entity = entity.bind(zuuluu)(tangon);
            _fun00002_ip = 144; continue _fun00001;
 87:
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 2;
            zuuluu = golfie[michal];
            zuuluu = report.bind(oscard)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = report.bind(oscard)(michal);
            michal = michal.t;
            michal = michal.Omu0fX;
            entity = zuuluu.bind(tangon)(michal);
 144:
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.DISCOVERY_ALL_CATEGORIES_ID;
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/global_discovery_servers/hooks/useServersSearchCategoryName.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useServersSearchCategoryName
        michal = argFoo;
        michal = michal.categoryId;
        var _closure2_slot0 = michal;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 3;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot2;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            tangon = _closure1_slot4;
            zuuluu = _closure2_slot0;
            entity = _closure1_slot2;
            michal = new Array(1);
            michal[0] = entity;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useServersSearchCategoryName'] = tangon;
    michal = function(argFoo) { // Original name: useServersSearchCategoryNamesById
        michal = argFoo;
        michal = michal.categoryIds;
        var _closure2_slot0 = michal;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 3;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.useStateFromStoresObject;
        report = _closure1_slot2;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            entity = {};
            var _closure3_slot0 = entity;
            tangon = _closure2_slot0;
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                tangon = argFoo;
                zuuluu = _closure3_slot0;
                report = _closure1_slot4;
                entity = _closure1_slot2;
                michal = new Array(1);
                michal[0] = entity;
                entity = undefined;
                michal = report.bind(entity)(tangon, michal);
                zuuluu[tangon] = michal;
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useServersSearchCategoryNamesById'] = michal;
    return entity;
})();