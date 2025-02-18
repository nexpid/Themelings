// app/modules/guild_role_subscriptions/GuildRoleSubscriptionTypeUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildRoleSubscriptionBenefitTypes;
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SubscriptionIntervalTypes;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_role_subscriptions/GuildRoleSubscriptionTypeUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getBenefitKey
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = 'roles';
            entity = entity in michal;
            if(entity) { _fun00002_ip = 73; continue _fun00001 }
 14:
            kiloes = michal.ref_type;
            foxtra = michal.emoji_id;
            yankee = michal.name;
            verify = michal.ref_id;
            entity = global;
            entity = entity.HermesInternal;
            tangon = entity.concat;
            sizing = '';
            entity = '-';
            backup = entity;
            romeon = entity;
            offset = entity;
            entity = sizing[tangon](kiloes, backup, foxtra, romeon, yankee, offset, verify, option);
            _fun00002_ip = 102; continue _fun00001;
 73:
            tangon = michal.id;
            michal = global;
            michal = michal.HermesInternal;
            zuuluu = michal.concat;
            michal = 'emoji-';
            entity = zuuluu.bind(michal)(tangon);
 102:
            return entity;
        }
    };
    zuuluu['getBenefitKey'] = tangon;
    tangon = function(argFoo) { // Original name: formatPlanInterval
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            verify = entity.interval;
            report = entity.interval_count;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            option = 2;
            michal = michal[option];
            golfie = undefined;
            michal = zuuluu.bind(golfie)(michal);
            tangon = michal.intl;
            zuuluu = tangon.format;
            michal = _closure1_slot3;
            michal = michal.DAY;
            if(!(michal !== verify)) { _fun00004_ip = 158; continue _fun00003 }
 64:
            michal = _closure1_slot3;
            michal = michal.MONTH;
            if(!(michal !== verify)) { _fun00004_ip = 126; continue _fun00003 }
 78:
            michal = _closure1_slot3;
            oscard = michal.YEAR;
            michal = undefined;
            if(!(oscard === verify)) { _fun00004_ip = 188; continue _fun00003 }
 94:
            verify = _closure1_slot0;
            oscard = _closure1_slot1;
            oscard = oscard[option];
            oscard = verify.bind(golfie)(oscard);
            oscard = oscard.t;
            michal = oscard.cuSp8f;
            _fun00004_ip = 188; continue _fun00003;
 126:
            verify = _closure1_slot0;
            oscard = _closure1_slot1;
            oscard = oscard[option];
            oscard = verify.bind(golfie)(oscard);
            oscard = oscard.t;
            michal = oscard.zuN54+;
            _fun00004_ip = 188; continue _fun00003;
 158:
            oscard = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[option];
            entity = oscard.bind(golfie)(entity);
            entity = entity.t;
            michal = entity.3rUmPT;
 188:
            entity = {};
            entity['count'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['formatPlanInterval'] = tangon;
    tangon = function(argFoo) { // Original name: formatPlanIntervalDuration
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.interval;
            golfie = entity.interval_count;
            entity = _closure1_slot3;
            entity = entity.DAY;
            if(!(entity !== zuuluu)) { _fun00006_ip = 201; continue _fun00005 }
 35:
            entity = _closure1_slot3;
            entity = entity.MONTH;
            if(!(entity !== zuuluu)) { _fun00006_ip = 134; continue _fun00005 }
 49:
            entity = _closure1_slot3;
            entity = entity.YEAR;
            if(!(entity !== zuuluu)) { _fun00006_ip = 67; continue _fun00005 }
 63:
            entity = undefined;
            return entity;
 67:
            oscard = _closure1_slot0;
            option = _closure1_slot1;
            entity = 2;
            tangon = option[entity];
            zuuluu = undefined;
            tangon = oscard.bind(zuuluu)(tangon);
            report = tangon.intl;
            tangon = report.formatToPlainString;
            entity = option[entity];
            entity = oscard.bind(zuuluu)(entity);
            entity = entity.t;
            zuuluu = entity.IfYQVF;
            entity = {};
            entity['years'] = golfie;
            entity = tangon.bind(report)(zuuluu, entity);
            return entity;
 134:
            oscard = _closure1_slot0;
            option = _closure1_slot1;
            entity = 2;
            tangon = option[entity];
            zuuluu = undefined;
            tangon = oscard.bind(zuuluu)(tangon);
            report = tangon.intl;
            tangon = report.formatToPlainString;
            entity = option[entity];
            entity = oscard.bind(zuuluu)(entity);
            entity = entity.t;
            zuuluu = entity.erUSmJ;
            entity = {};
            entity['months'] = golfie;
            entity = tangon.bind(report)(zuuluu, entity);
            return entity;
 201:
            zuuluu = 0;
            if(!(golfie > zuuluu)) { _fun00006_ip = 218; continue _fun00005 }
 207:
            oscard = 7;
            entity = golfie % oscard;
            if(!(entity !== zuuluu)) { _fun00006_ip = 285; continue _fun00005 }
 218:
            option = _closure1_slot0;
            verify = _closure1_slot1;
            entity = 2;
            tangon = verify[entity];
            zuuluu = undefined;
            tangon = option.bind(zuuluu)(tangon);
            report = tangon.intl;
            tangon = report.formatToPlainString;
            entity = verify[entity];
            entity = option.bind(zuuluu)(entity);
            entity = entity.t;
            zuuluu = entity.jzH70d;
            entity = {};
            entity['days'] = golfie;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00006_ip = 354; continue _fun00005;
 285:
            option = _closure1_slot0;
            verify = _closure1_slot1;
            michal = 2;
            tangon = verify[michal];
            zuuluu = undefined;
            tangon = option.bind(zuuluu)(tangon);
            report = tangon.intl;
            tangon = report.formatToPlainString;
            michal = verify[michal];
            michal = option.bind(zuuluu)(michal);
            michal = michal.t;
            zuuluu = michal.iVZYys;
            michal = {};
            oscard = golfie / oscard;
            michal['weeks'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 354:
            return entity;
        }
    };
    zuuluu['formatPlanIntervalDuration'] = tangon;
    tangon = function(argFoo) { // Original name: isChannelBenefit
        entity = argFoo;
        michal = entity.ref_type;
        entity = _closure1_slot2;
        entity = entity.CHANNEL;
        entity = michal === entity;
        return entity;
    };
    zuuluu['isChannelBenefit'] = tangon;
    michal = function(argFoo) { // Original name: isIntangibleBenefit
        entity = argFoo;
        michal = entity.ref_type;
        entity = _closure1_slot2;
        entity = entity.INTANGIBLE;
        entity = michal === entity;
        return entity;
    };
    zuuluu['isIntangibleBenefit'] = michal;
    return entity;
})();