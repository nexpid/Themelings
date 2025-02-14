// app/modules/global_discovery_servers/hooks/useServersSearchCategoryName.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo) { // Original name: getServersSearchCategoryName
        _fun118106: for(var _fun118106_ip = 0; ; ) switch(_fun118106_ip) {
 0:
            tango = argFoo;
            zulu = arguments[1];
            oscar = undefined;
            if(!(zulu === oscar)) { _fun118106_ip = 30; continue _fun118106 }
 12:
            mike = _closure1_slot2;
            entity = new Array(1);
            entity[0] = mike;
            zulu = entity;
 30:
            mike = zulu;
            entity = mike[Symbol.iterator];
            mike = entity().next;
            report = mike().value;
            mike = entity;
            mike = mike === oscar;
            zulu = undefined;
            if(mike) { _fun118106_ip = 55; continue _fun118106 }
 52:
            zulu = report;
 55:
            if(mike) { _fun118106_ip = 61; continue _fun118106 }
 58:
            entity.return();
 61:
            entity = _closure1_slot3;
            if(!(tango !== entity)) { _fun118106_ip = 87; continue _fun118106 }
 72:
            entity = zulu.getCategoryName;
            entity = entity.bind(zulu)(tango);
            _fun118106_ip = 142; continue _fun118106;
 87:
            report = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 2;
            zulu = golf[mike];
            zulu = report.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = report.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.Omu0fX;
            entity = zulu.bind(tango)(mike);
 142:
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.DISCOVERY_ALL_CATEGORIES_ID;
    var _closure1_slot3 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/global_discovery_servers/hooks/useServersSearchCategoryName.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useServersSearchCategoryName
        mike = argFoo;
        mike = mike.categoryId;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 3;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStores;
        report = _closure1_slot2;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            tango = _closure1_slot4;
            zulu = _closure2_slot0;
            entity = _closure1_slot2;
            mike = new Array(1);
            mike[0] = entity;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useServersSearchCategoryName'] = tango;
    mike = function(argFoo) { // Original name: useServersSearchCategoryNamesById
        mike = argFoo;
        mike = mike.categoryIds;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 3;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStoresObject;
        report = _closure1_slot2;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            entity = {};
            var _closure3_slot0 = entity;
            tango = _closure2_slot0;
            zulu = tango.forEach;
            mike = function(argFoo) {
                tango = argFoo;
                zulu = _closure3_slot0;
                report = _closure1_slot4;
                entity = _closure1_slot2;
                mike = new Array(1);
                mike[0] = entity;
                entity = undefined;
                mike = report.bind(entity)(tango, mike);
                zulu[tango] = mike;
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useServersSearchCategoryNamesById'] = mike;
    return entity;
})();