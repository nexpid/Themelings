// app/modules/main_tabs_v2/navigator/useGuildsRouteGuildId.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 1;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/navigator/useGuildsRouteGuildId.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: useGuildsRouteGuildId
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 0;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.useRoute;
            michal = michal.bind(zuuluu)();
            michal = michal.params;
            zuuluu = null;
            zuuluu = zuuluu == michal;
            if(zuuluu) { _fun00002_ip = 54; continue _fun00001 }
 49:
            entity = michal.guildId;
 54:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function() { // Original name: useGuildsRouteGuildAndChannelId
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 0;
            entity = zuuluu[entity];
            report = undefined;
            michal = michal.bind(report)(entity);
            entity = michal.useRoute;
            zuuluu = entity.bind(michal)();
            tangon = null;
            entity = tangon == zuuluu;
            michal = undefined;
            if(entity) { _fun00004_ip = 65; continue _fun00003 }
 45:
            entity = zuuluu.params;
            oscard = tangon == entity;
            michal = undefined;
            if(oscard) { _fun00004_ip = 65; continue _fun00003 }
 60:
            michal = entity.guildId;
 65:
            entity = new Array(2);
            entity[0] = michal;
            oscard = tangon == zuuluu;
            michal = undefined;
            if(oscard) { _fun00004_ip = 102; continue _fun00003 }
 82:
            zuuluu = zuuluu.params;
            tangon = tangon == zuuluu;
            michal = undefined;
            if(tangon) { _fun00004_ip = 102; continue _fun00003 }
 97:
            michal = zuuluu.channelId;
 102:
            entity[1] = michal;
            return entity;
        }
    };
    zuuluu['useGuildsRouteGuildAndChannelId'] = michal;
    return entity;
})();