// app/modules/gif_picker/FavoriteGIFHooks.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golf;
    tango = function() { // Original name: useFavoriteGIFs
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 1;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.useFrecencySettings;
            zulu = zulu.bind(tango)();
            tango = zulu.favoriteGifs;
            zulu = null;
            report = zulu == tango;
            if(report) { _fun00002_ip = 56; continue _fun00001 }
 50:
            entity = tango.gifs;
 56:
            if(!(zulu == entity)) { _fun00002_ip = 64; continue _fun00001 }
 60:
            entity = _closure1_slot4;
 64:
            return entity;
        }
    };
    var _closure1_slot5 = tango;
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
    report = argCorge;
    entity = undefined;
    report = report.bind(entity)(options);
    var _closure1_slot3 = report;
    report = {};
    var _closure1_slot4 = report;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/gif_picker/FavoriteGIFHooks.tsx';
    report = oscar.bind(golf)(report);
    zulu['useFavoriteGIFs'] = tango;
    tango = function(argFoo) { // Original name: useSortedFavoriteGIFs
        report = argFoo;
        var _closure2_slot0 = report;
        tango = _closure1_slot5;
        zulu = undefined;
        oscar = tango.bind(zulu)();
        var _closure2_slot1 = oscar;
        tango = _closure1_slot3;
        zulu = tango.useMemo;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 2;
            entity = zulu[entity];
            zulu = undefined;
            mike = mike.bind(zulu)(entity);
            entity = _closure2_slot1;
            zulu = mike.bind(zulu)(entity);
            mike = zulu.map;
            entity = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = argFoo;
                    options = argBar;
                    entity = {};
                    offset = entity;
                    verify = mike;
                    zulu = copyDataProperties(offset, verify);
                    zulu = 'url';
                    entity[zulu] = options;
                    zulu = _closure2_slot0;
                    tango = null;
                    oscar = tango == zulu;
                    golf = undefined;
                    zulu = undefined;
                    if(oscar) { _fun00004_ip = 63; continue _fun00003 }
 47:
                    oscar = _closure2_slot0;
                    report = mike.src;
                    zulu = oscar.bind(golf)(report, options);
 63:
                    if(!(tango == zulu)) { _fun00004_ip = 73; continue _fun00003 }
 67:
                    zulu = mike.src;
 73:
                    mike = 'src';
                    entity[mike] = zulu;
                    return entity;
                }
            };
            zulu = mike.bind(zulu)(entity);
            mike = zulu.sortBy;
            entity = 'order';
            mike = mike.bind(zulu)(entity);
            entity = mike.reverse;
            mike = entity.bind(mike)();
            entity = mike.value;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useSortedFavoriteGIFs'] = tango;
    tango = function() { // Original name: useShouldShowTooltipOnFavorite
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 1;
            entity = mike[entity];
            mike = undefined;
            zulu = zulu.bind(mike)(entity);
            entity = zulu.useFrecencySettings;
            entity = entity.bind(zulu)();
            zulu = entity.favoriteGifs;
            entity = null;
            tango = entity == zulu;
            if(tango) { _fun00006_ip = 56; continue _fun00005 }
 50:
            mike = zulu.hideTooltip;
 56:
            entity = entity != mike;
            if(!entity) { _fun00006_ip = 66; continue _fun00005 }
 63:
            entity = mike;
 66:
            return entity;
        }
    };
    zulu['useShouldShowTooltipOnFavorite'] = tango;
    mike = function(argFoo) { // Original name: useIsFavoriteGIF
        mike = _closure1_slot5;
        entity = undefined;
        mike = mike.bind(entity)();
        entity = argFoo;
        mike = mike[entity];
        entity = null;
        entity = entity != mike;
        return entity;
    };
    zulu['useIsFavoriteGIF'] = mike;
    return entity;
})();