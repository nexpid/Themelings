// app/modules/reactions/canAddNewReactions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
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
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Permissions;
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/reactions/canAddNewReactions.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.getGuildId;
            report = entity.bind(zuuluu)();
            entity = null;
            entity = entity != report;
            if(!entity) { _fun00002_ip = 40; continue _fun00001 }
 22:
            tangon = _closure1_slot0;
            michal = tangon.canChatInGuild;
            entity = michal.bind(tangon)(report);
 40:
            if(!entity) { _fun00002_ip = 72; continue _fun00001 }
 43:
            report = _closure1_slot1;
            tangon = report.can;
            michal = _closure1_slot2;
            michal = michal.ADD_REACTIONS;
            entity = tangon.bind(report)(michal, zuuluu);
 72:
            if(entity) { _fun00002_ip = 85; continue _fun00001 }
 75:
            michal = zuuluu.isPrivate;
            entity = michal.bind(zuuluu)();
 85:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();