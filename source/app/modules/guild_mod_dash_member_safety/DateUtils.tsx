// app/modules/guild_mod_dash_member_safety/DateUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    tangon = function(argFoo) { // Original name: getMembersTableTimestampFormatter
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            entity = _closure1_slot3;
            entity = entity.JOINED_AT;
            if(!(tangon !== entity)) { _fun00002_ip = 42; continue _fun00001 }
 20:
            entity = _closure1_slot3;
            zuuluu = entity.ACCOUNT_AGE;
            entity = undefined;
            if(!(tangon === zuuluu)) { _fun00002_ip = 40; continue _fun00001 }
 36:
            entity = _closure1_slot5;
 40:
            _fun00002_ip = 46; continue _fun00001;
 42:
            entity = _closure1_slot4;
 46:
            return entity;
        }
    };
    var _closure1_slot6 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    report = {};
    option = 0;
    report['JOINED_AT'] = option;
    entity = 'JOINED_AT';
    report[option] = entity;
    option = 1;
    report['ACCOUNT_AGE'] = option;
    entity = 'ACCOUNT_AGE';
    report[option] = entity;
    var _closure1_slot3 = report;
    entity = function() { // Original name: getJoinedAtDateFormatter
        entity = {};
        tangon = _closure1_slot0;
        report = _closure1_slot2;
        michal = 0;
        oscard = report[michal];
        zuuluu = undefined;
        oscard = tangon.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.FsBhl5;
        entity['seconds'] = oscard;
        oscard = report[michal];
        oscard = tangon.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.4d1mgY;
        entity['minutes'] = oscard;
        oscard = report[michal];
        oscard = tangon.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.2wkczM;
        entity['hours'] = oscard;
        oscard = report[michal];
        oscard = tangon.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.ocdS+f;
        entity['days'] = oscard;
        oscard = report[michal];
        oscard = tangon.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.az14+v;
        entity['months'] = oscard;
        michal = report[michal];
        michal = tangon.bind(zuuluu)(michal);
        michal = michal.t;
        michal = michal.5Gk1np;
        entity['years'] = michal;
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = function() { // Original name: getAccountAgeDateFormatter
        entity = {};
        tangon = _closure1_slot0;
        report = _closure1_slot2;
        michal = 0;
        oscard = report[michal];
        zuuluu = undefined;
        oscard = tangon.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.JZP2Rk;
        entity['hours'] = oscard;
        oscard = report[michal];
        oscard = tangon.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.3moSHR;
        entity['days'] = oscard;
        oscard = report[michal];
        oscard = tangon.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.0Ddwr6;
        entity['months'] = oscard;
        michal = report[michal];
        michal = tangon.bind(zuuluu)(michal);
        michal = michal.t;
        michal = michal.cR7lcn;
        entity['years'] = michal;
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = 2;
    oscard = oscard[entity];
    entity = undefined;
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/guild_mod_dash_member_safety/DateUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = {'month': 'short', 'day': 'numeric', 'year': 'numeric', 'hour': 'numeric', 'minute': '2-digit'};
    zuuluu['ACCOUNT_AGE_DATE_TOOLTIP_CONFIG'] = oscard;
    oscard = {'month': 'short', 'day': 'numeric', 'year': 'numeric', 'hour': 'numeric', 'minute': '2-digit'};
    zuuluu['MEMBER_JOIN_DATE_TOOLTIP_CONFIG'] = oscard;
    zuuluu['MembersTableDateFormats'] = report;
    zuuluu['getMembersTableTimestampFormatter'] = tangon;
    tangon = function(argFoo, argBar) {
        zuuluu = _closure1_slot6;
        report = undefined;
        michal = argBar;
        tangon = zuuluu.bind(report)(michal);
        michal = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 1;
        entity = zuuluu[entity];
        zuuluu = michal.bind(report)(entity);
        michal = argFoo;
        entity = false;
        entity = zuuluu.bind(report)(michal, tangon, entity);
        return entity;
    };
    zuuluu['formatDateRelativeTime'] = tangon;
    michal = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            entity = null;
            if(!(entity == tangon)) { _fun00004_ip = 39; continue _fun00003 }
 9:
            entity = global;
            entity = entity.Date;
            michal = entity.prototype;
            michal = Object.create(michal, {constructor: {value: entity}});
            oscard = michal;
            entity = new oscard[entity](report);
            michal = entity instanceof Object ? entity : michal;
            _fun00004_ip = 70; continue _fun00003;
 39:
            entity = global;
            entity = entity.Date;
            zuuluu = entity.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
            oscard = zuuluu;
            report = tangon;
            entity = new oscard[entity](report, tangon);
            michal = entity instanceof Object ? entity : zuuluu;
 70:
            entity = michal.getTime;
            entity = entity.bind(michal)();
            return entity;
        }
    };
    zuuluu['getJoinedAtTimestamp'] = michal;
    return entity;
})();