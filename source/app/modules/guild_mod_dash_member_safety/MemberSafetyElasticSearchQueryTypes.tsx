// app/modules/guild_mod_dash_member_safety/MemberSafetyElasticSearchQueryTypes.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    report = entity.Object;
    tangon = report.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(report)(zuuluu, entity, michal);
    golfie = 0;
    tangon = oscard[golfie];
    michal = argBaz;
    entity = undefined;
    michal = michal.bind(entity)(tangon);
    michal = michal.Millis;
    michal = michal.DAY;
    option = 2;
    tangon = option * michal;
    michal = {};
    michal['ORDER_BY_UNSPECIFIED'] = golfie;
    report = 'ORDER_BY_UNSPECIFIED';
    michal[golfie] = report;
    report = 1;
    michal['ORDER_BY_GUILD_JOINED_AT_DESC'] = report;
    golfie = 'ORDER_BY_GUILD_JOINED_AT_DESC';
    michal[report] = golfie;
    michal['ORDER_BY_GUILD_JOINED_AT_ASC'] = option;
    golfie = 'ORDER_BY_GUILD_JOINED_AT_ASC';
    michal[option] = golfie;
    option = 3;
    michal['ORDER_BY_USER_ID_DESC'] = option;
    golfie = 'ORDER_BY_USER_ID_DESC';
    michal[option] = golfie;
    option = 4;
    michal['ORDER_BY_USER_ID_ASC'] = option;
    golfie = 'ORDER_BY_USER_ID_ASC';
    michal[option] = golfie;
    oscard = oscard[report];
    report = argBar;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_mod_dash_member_safety/MemberSafetyElasticSearchQueryTypes.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['UNUSUAL_DM_COMPARISON_DELTA'] = tangon;
    tangon = function(argFoo) { // Original name: createMemberSearchCursor
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscard = entity.joinedAt;
            zuuluu = entity.userId;
            entity = null;
            michal = entity == oscard;
            if(michal) { _fun00002_ip = 81; continue _fun00001 }
 23:
            michal = {};
            tangon = global;
            tangon = tangon.Date;
            report = tangon.prototype;
            report = Object.create(report, {constructor: {value: tangon}});
            option = report;
            golfie = oscard;
            tangon = new option[tangon](golfie, oscard);
            report = tangon instanceof Object ? tangon : report;
            tangon = report.getTime;
            tangon = tangon.bind(report)();
            michal['guild_joined_at'] = tangon;
            michal['user_id'] = zuuluu;
            entity = michal;
 81:
            return entity;
        }
    };
    zuuluu['createMemberSearchCursor'] = tangon;
    zuuluu['OrderBy'] = michal;
    return entity;
})();