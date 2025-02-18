// app/modules/guild_mod_dash_member_safety/SortUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
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
    entity = 2;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_mod_dash_member_safety/SortUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: getSortValueForMember
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            report = argBar;
            option = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 0;
            entity = oscard[entity];
            tangon = undefined;
            verify = option.bind(tangon)(entity);
            golfie = verify.getJoinedAtTimestamp;
            entity = michal.joinedAt;
            entity = golfie.bind(verify)(entity);
            golfie = 1;
            oscard = oscard[golfie];
            oscard = option.bind(tangon)(oscard);
            oscard = oscard.OrderBy;
            oscard = oscard.ORDER_BY_GUILD_JOINED_AT_ASC;
            if(!(oscard !== report)) { _fun00002_ip = 230; continue _fun00001 }
 78:
            option = _closure1_slot0;
            oscard = _closure1_slot1;
            oscard = oscard[golfie];
            oscard = option.bind(tangon)(oscard);
            oscard = oscard.OrderBy;
            oscard = oscard.ORDER_BY_GUILD_JOINED_AT_DESC;
            if(!(oscard !== report)) { _fun00002_ip = 225; continue _fun00001 }
 111:
            option = _closure1_slot0;
            oscard = _closure1_slot1;
            oscard = oscard[golfie];
            oscard = option.bind(tangon)(oscard);
            oscard = oscard.OrderBy;
            oscard = oscard.ORDER_BY_USER_ID_ASC;
            if(!(oscard !== report)) { _fun00002_ip = 205; continue _fun00001 }
 144:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[golfie];
            zuuluu = oscard.bind(tangon)(zuuluu);
            zuuluu = zuuluu.OrderBy;
            zuuluu = zuuluu.ORDER_BY_USER_ID_DESC;
            if(!(zuuluu !== report)) { _fun00002_ip = 182; continue _fun00001 }
 177:
            zuuluu = -entity;
            return zuuluu;
 182:
            zuuluu = global;
            report = zuuluu.parseInt;
            zuuluu = michal.userId;
            zuuluu = report.bind(tangon)(zuuluu);
            zuuluu = -zuuluu;
            return zuuluu;
 205:
            zuuluu = global;
            zuuluu = zuuluu.parseInt;
            michal = michal.userId;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 225:
            michal = -entity;
            return michal;
 230:
            return entity;
        }
    };
    zuuluu['getSortValueForMember'] = michal;
    return entity;
})();