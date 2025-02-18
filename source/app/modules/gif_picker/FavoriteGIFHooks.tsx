// app/modules/gif_picker/FavoriteGIFHooks.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golfie;
    tangon = function() { // Original name: useFavoriteGIFs
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 1;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.useFrecencySettings;
            zuuluu = zuuluu.bind(tangon)();
            tangon = zuuluu.favoriteGifs;
            zuuluu = null;
            report = zuuluu == tangon;
            if(report) { _fun00002_ip = 56; continue _fun00001 }
 50:
            entity = tangon.gifs;
 56:
            if(!(zuuluu == entity)) { _fun00002_ip = 64; continue _fun00001 }
 60:
            entity = _closure1_slot4;
 64:
            return entity;
        }
    };
    var _closure1_slot5 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot3 = report;
    report = {};
    var _closure1_slot4 = report;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/gif_picker/FavoriteGIFHooks.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['useFavoriteGIFs'] = tangon;
    tangon = function(argFoo) { // Original name: useSortedFavoriteGIFs
        report = argFoo;
        var _closure2_slot0 = report;
        tangon = _closure1_slot5;
        zuuluu = undefined;
        oscard = tangon.bind(zuuluu)();
        var _closure2_slot1 = oscard;
        tangon = _closure1_slot3;
        zuuluu = tangon.useMemo;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function() {
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 2;
            entity = zuuluu[entity];
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(entity);
            entity = _closure2_slot1;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.map;
            entity = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = argFoo;
                    option = argBar;
                    entity = {};
                    offset = entity;
                    verify = michal;
                    zuuluu = copyDataProperties(offset, verify);
                    zuuluu = 'url';
                    entity[zuuluu] = option;
                    zuuluu = _closure2_slot0;
                    tangon = null;
                    oscard = tangon == zuuluu;
                    golfie = undefined;
                    zuuluu = undefined;
                    if(oscard) { _fun00004_ip = 63; continue _fun00003 }
 47:
                    oscard = _closure2_slot0;
                    report = michal.src;
                    zuuluu = oscard.bind(golfie)(report, option);
 63:
                    if(!(tangon == zuuluu)) { _fun00004_ip = 73; continue _fun00003 }
 67:
                    zuuluu = michal.src;
 73:
                    michal = 'src';
                    entity[michal] = zuuluu;
                    return entity;
                }
            };
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.sortBy;
            entity = 'order';
            michal = michal.bind(zuuluu)(entity);
            entity = michal.reverse;
            michal = entity.bind(michal)();
            entity = michal.value;
            entity = entity.bind(michal)();
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useSortedFavoriteGIFs'] = tangon;
    tangon = function() { // Original name: useShouldShowTooltipOnFavorite
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 1;
            entity = michal[entity];
            michal = undefined;
            zuuluu = zuuluu.bind(michal)(entity);
            entity = zuuluu.useFrecencySettings;
            entity = entity.bind(zuuluu)();
            zuuluu = entity.favoriteGifs;
            entity = null;
            tangon = entity == zuuluu;
            if(tangon) { _fun00006_ip = 56; continue _fun00005 }
 50:
            michal = zuuluu.hideTooltip;
 56:
            entity = entity != michal;
            if(!entity) { _fun00006_ip = 66; continue _fun00005 }
 63:
            entity = michal;
 66:
            return entity;
        }
    };
    zuuluu['useShouldShowTooltipOnFavorite'] = tangon;
    michal = function(argFoo) { // Original name: useIsFavoriteGIF
        michal = _closure1_slot5;
        entity = undefined;
        michal = michal.bind(entity)();
        entity = argFoo;
        michal = michal[entity];
        entity = null;
        entity = entity != michal;
        return entity;
    };
    zuuluu['useIsFavoriteGIF'] = michal;
    return entity;
})();