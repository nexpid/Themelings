// app/modules/favorites/useGuildIdForChannelRoute.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FAVORITES;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/favorites/useGuildIdForChannelRoute.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useGuildIdForChannelRoute
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 3;
            tangon = tangon[michal];
            michal = undefined;
            report = report.bind(michal)(tangon);
            tangon = report.useStateFromStores;
            entity = _closure1_slot2;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                michal = _closure1_slot2;
                entity = michal.getGuildId;
                entity = entity.bind(michal)();
                return entity;
            };
            entity = tangon.bind(report)(michal, entity);
            michal = null;
            if(!(michal == entity)) { _fun00002_ip = 74; continue _fun00001 }
 64:
            michal = zuuluu.getGuildId;
            entity = michal.bind(zuuluu)();
 74:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: getGuildIdForGenericRedirect
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot2;
            entity = tangon.getGuildId;
            tangon = entity.bind(tangon)();
            entity = _closure1_slot4;
            if(!(tangon === entity)) { _fun00004_ip = 106; continue _fun00003 }
 28:
            report = _closure1_slot3;
            tangon = report.isFavorite;
            entity = zuuluu.id;
            entity = tangon.bind(report)(entity);
            if(entity) { _fun00004_ip = 100; continue _fun00003 }
 51:
            entity = zuuluu.isThread;
            entity = entity.bind(zuuluu)();
            if(!entity) { _fun00004_ip = 88; continue _fun00003 }
 64:
            report = _closure1_slot3;
            tangon = report.isFavorite;
            entity = zuuluu.parent_id;
            entity = tangon.bind(report)(entity);
            if(entity) { _fun00004_ip = 100; continue _fun00003 }
 88:
            entity = zuuluu.getGuildId;
            entity = entity.bind(zuuluu)();
            _fun00004_ip = 104; continue _fun00003;
 100:
            entity = _closure1_slot4;
 104:
            _fun00004_ip = 116; continue _fun00003;
 106:
            michal = zuuluu.getGuildId;
            entity = michal.bind(zuuluu)();
 116:
            return entity;
        }
    };
    zuuluu['getGuildIdForGenericRedirect'] = michal;
    return entity;
})();