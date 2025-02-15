// app/modules/collectibles/hooks/useShopProductItems.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    report = golf[tango];
    tango = argCorge;
    tango = tango.bind(entity)(report);
    var _closure1_slot4 = tango;
    tango = function() {
        tango = _closure1_slot3;
        zulu = function(argFoo) { // Original name: ItemsSortingHat
            zulu = this;
            tango = _closure1_slot2;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            tango = zulu.sortByTypes;
            mike = argFoo;
            mike = tango.bind(zulu)(mike);
            zulu['itemsByTypes'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'firstAvatarDecoration';
        entity['key'] = mike;
        mike = function() { // Original name: get
            zulu = this;
            mike = zulu.getFirstItemByType;
            report = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 3;
            tango = tango[entity];
            entity = undefined;
            entity = report.bind(entity)(tango);
            entity = entity.CollectiblesItemType;
            entity = entity.AVATAR_DECORATION;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['get'] = mike;
        mike = new Array(4);
        mike[0] = entity;
        entity = {};
        oscar = 'firstProfileEffect';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            zulu = this;
            mike = zulu.getFirstItemByType;
            report = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 3;
            tango = tango[entity];
            entity = undefined;
            entity = report.bind(entity)(tango);
            entity = entity.CollectiblesItemType;
            entity = entity.PROFILE_EFFECT;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['get'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'getFirstItemByType';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = this;
                zulu = entity.itemsByTypes;
                mike = zulu.get;
                entity = argFoo;
                zulu = mike.bind(zulu)(entity);
                mike = null;
                if(!(mike == zulu)) { _fun00002_ip = 32; continue _fun00001 }
 28:
                zulu = new Array(0);
 32:
                entity = 0;
                entity = zulu[entity];
                if(!(mike == entity)) { _fun00002_ip = 46; continue _fun00001 }
 42:
                mike = undefined;
                return mike;
 46:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'sortByTypes';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            tango = argFoo;
            zulu = tango.reduce;
            entity = global;
            entity = entity.Map;
            mike = entity.prototype;
            mike = Object.create(mike, {constructor: {value: entity}});
            golf = mike;
            entity = new golf[entity](oscar);
            mike = entity instanceof Object ? entity : mike;
            entity = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    tango = argBar;
                    zulu = entity.get;
                    mike = tango.type;
                    zulu = zulu.bind(entity)(mike);
                    mike = null;
                    if(!(mike == zulu)) { _fun00004_ip = 53; continue _fun00003 }
 27:
                    oscar = entity.set;
                    report = tango.type;
                    mike = new Array(1);
                    mike[0] = tango;
                    mike = oscar.bind(entity)(report, mike);
                    _fun00004_ip = 63; continue _fun00003;
 53:
                    mike = zulu.push;
                    mike = mike.bind(zulu)(tango);
 63:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        entity['value'] = report;
        mike[3] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot5 = tango;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/collectibles/hooks/useShopProductItems.tsx';
    report = oscar.bind(golf)(report);
    zulu['ItemsSortingHat'] = tango;
    mike = function(argFoo) {
        report = argFoo;
        var _closure2_slot0 = report;
        tango = _closure1_slot4;
        zulu = tango.useMemo;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            zulu = _closure1_slot5;
            entity = _closure2_slot0;
            tango = entity.items;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        mike = zulu.bind(tango)(entity, mike);
        entity = {};
        zulu = mike.firstProfileEffect;
        entity['firstProfileEffect'] = zulu;
        mike = mike.firstAvatarDecoration;
        entity['firstAvatarDecoration'] = mike;
        return entity;
    };
    zulu['useShopProductItems'] = mike;
    return entity;
})();