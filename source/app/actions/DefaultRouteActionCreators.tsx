// app/actions/DefaultRouteActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: isLurkingGuildRoute
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 2;
            entity = offset[entity];
            oscard = undefined;
            report = verify.bind(oscard)(entity);
            tangon = report.matchPath;
            zuuluu = {};
            option = _closure1_slot4;
            golfie = option.CHANNEL;
            entity = 3;
            entity = offset[entity];
            entity = verify.bind(oscard)(entity);
            verify = entity.RouteParam;
            entity = verify.guildId;
            entity = entity.bind(verify)();
            entity = golfie.bind(option)(entity);
            zuuluu['path'] = entity;
            entity = argFoo;
            zuuluu = tangon.bind(report)(entity, zuuluu);
            entity = null;
            report = entity == zuuluu;
            tangon = undefined;
            if(report) { _fun00002_ip = 120; continue _fun00001 }
 100:
            zuuluu = zuuluu.params;
            report = entity == zuuluu;
            tangon = undefined;
            if(report) { _fun00002_ip = 120; continue _fun00001 }
 115:
            tangon = zuuluu.guildId;
 120:
            entity = entity == tangon;
            if(entity) { _fun00002_ip = 145; continue _fun00001 }
 127:
            zuuluu = _closure1_slot3;
            michal = zuuluu.isLurking;
            michal = michal.bind(zuuluu)(tangon);
            entity = !michal;
 145:
            entity = !entity;
            return entity;
        }
    };
    var _closure1_slot5 = entity;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Routes;
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/DefaultRouteActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot5;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(report);
            if(zuuluu) { _fun00004_ip = 67; continue _fun00003 }
 20:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 4;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'SAVE_LAST_ROUTE';
            michal['type'] = oscard;
            michal['path'] = report;
            michal = zuuluu.bind(tangon)(michal);
 67:
            return entity;
        }
    };
    zuuluu['saveLastRoute'] = tangon;
    michal = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot5;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(report);
            if(zuuluu) { _fun00006_ip = 67; continue _fun00005 }
 20:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 4;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'SAVE_LAST_NON_VOICE_ROUTE';
            michal['type'] = oscard;
            michal['path'] = report;
            michal = zuuluu.bind(tangon)(michal);
 67:
            return entity;
        }
    };
    zuuluu['saveLastNonVoiceRoute'] = michal;
    return entity;
})();