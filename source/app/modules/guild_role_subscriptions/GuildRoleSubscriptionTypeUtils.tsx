// app/modules/guild_role_subscriptions/GuildRoleSubscriptionTypeUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.GuildRoleSubscriptionBenefitTypes;
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SubscriptionIntervalTypes;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/GuildRoleSubscriptionTypeUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: getBenefitKey
        _fun96858: for(var _fun96858_ip = 0; ; ) switch(_fun96858_ip) {
 0:
            mike = argFoo;
            entity = 'roles';
            entity = entity in mike;
            if(entity) { _fun96858_ip = 73; continue _fun96858 }
 14:
            kilo = mike.ref_type;
            foxtrot = mike.emoji_id;
            yankee = mike.name;
            verify = mike.ref_id;
            entity = global;
            entity = entity.HermesInternal;
            tango = entity.concat;
            sizing = '';
            entity = '-';
            backup = entity;
            romeo = entity;
            offset = entity;
            entity = sizing[tango](kilo, backup, foxtrot, romeo, yankee, offset, verify, options);
            _fun96858_ip = 102; continue _fun96858;
 73:
            tango = mike.id;
            mike = global;
            mike = mike.HermesInternal;
            zulu = mike.concat;
            mike = 'emoji-';
            entity = zulu.bind(mike)(tango);
 102:
            return entity;
        }
    };
    zulu['getBenefitKey'] = tango;
    tango = function(argFoo) { // Original name: formatPlanInterval
        _fun96859: for(var _fun96859_ip = 0; ; ) switch(_fun96859_ip) {
 0:
            entity = argFoo;
            verify = entity.interval;
            report = entity.interval_count;
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            options = 2;
            mike = mike[options];
            golf = undefined;
            mike = zulu.bind(golf)(mike);
            tango = mike.intl;
            zulu = tango.format;
            mike = _closure1_slot3;
            mike = mike.DAY;
            if(!(mike !== verify)) { _fun96859_ip = 154; continue _fun96859 }
 64:
            mike = _closure1_slot3;
            mike = mike.MONTH;
            if(!(mike !== verify)) { _fun96859_ip = 124; continue _fun96859 }
 78:
            mike = _closure1_slot3;
            oscar = mike.YEAR;
            mike = undefined;
            if(!(oscar === verify)) { _fun96859_ip = 182; continue _fun96859 }
 94:
            verify = _closure1_slot0;
            oscar = _closure1_slot1;
            oscar = oscar[options];
            oscar = verify.bind(golf)(oscar);
            oscar = oscar.t;
            mike = oscar.cuSp8f;
            _fun96859_ip = 182; continue _fun96859;
 124:
            verify = _closure1_slot0;
            oscar = _closure1_slot1;
            oscar = oscar[options];
            oscar = verify.bind(golf)(oscar);
            oscar = oscar.t;
            mike = oscar.zuN54+;
            _fun96859_ip = 182; continue _fun96859;
 154:
            oscar = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[options];
            entity = oscar.bind(golf)(entity);
            entity = entity.t;
            mike = entity.3rUmPT;
 182:
            entity = {};
            entity['count'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['formatPlanInterval'] = tango;
    tango = function(argFoo) { // Original name: formatPlanIntervalDuration
        _fun96860: for(var _fun96860_ip = 0; ; ) switch(_fun96860_ip) {
 0:
            entity = argFoo;
            zulu = entity.interval;
            golf = entity.interval_count;
            entity = _closure1_slot3;
            entity = entity.DAY;
            if(!(entity !== zulu)) { _fun96860_ip = 201; continue _fun96860 }
 35:
            entity = _closure1_slot3;
            entity = entity.MONTH;
            if(!(entity !== zulu)) { _fun96860_ip = 134; continue _fun96860 }
 49:
            entity = _closure1_slot3;
            entity = entity.YEAR;
            if(!(entity !== zulu)) { _fun96860_ip = 67; continue _fun96860 }
 63:
            entity = undefined;
            return entity;
 67:
            oscar = _closure1_slot0;
            options = _closure1_slot1;
            entity = 2;
            tango = options[entity];
            zulu = undefined;
            tango = oscar.bind(zulu)(tango);
            report = tango.intl;
            tango = report.formatToPlainString;
            entity = options[entity];
            entity = oscar.bind(zulu)(entity);
            entity = entity.t;
            zulu = entity.IfYQVF;
            entity = {};
            entity['years'] = golf;
            entity = tango.bind(report)(zulu, entity);
            return entity;
 134:
            oscar = _closure1_slot0;
            options = _closure1_slot1;
            entity = 2;
            tango = options[entity];
            zulu = undefined;
            tango = oscar.bind(zulu)(tango);
            report = tango.intl;
            tango = report.formatToPlainString;
            entity = options[entity];
            entity = oscar.bind(zulu)(entity);
            entity = entity.t;
            zulu = entity.erUSmJ;
            entity = {};
            entity['months'] = golf;
            entity = tango.bind(report)(zulu, entity);
            return entity;
 201:
            zulu = 0;
            if(!(golf > zulu)) { _fun96860_ip = 218; continue _fun96860 }
 207:
            oscar = 7;
            entity = golf % oscar;
            if(!(entity !== zulu)) { _fun96860_ip = 285; continue _fun96860 }
 218:
            options = _closure1_slot0;
            verify = _closure1_slot1;
            entity = 2;
            tango = verify[entity];
            zulu = undefined;
            tango = options.bind(zulu)(tango);
            report = tango.intl;
            tango = report.formatToPlainString;
            entity = verify[entity];
            entity = options.bind(zulu)(entity);
            entity = entity.t;
            zulu = entity.jzH70d;
            entity = {};
            entity['days'] = golf;
            entity = tango.bind(report)(zulu, entity);
            _fun96860_ip = 354; continue _fun96860;
 285:
            options = _closure1_slot0;
            verify = _closure1_slot1;
            mike = 2;
            tango = verify[mike];
            zulu = undefined;
            tango = options.bind(zulu)(tango);
            report = tango.intl;
            tango = report.formatToPlainString;
            mike = verify[mike];
            mike = options.bind(zulu)(mike);
            mike = mike.t;
            zulu = mike.iVZYys;
            mike = {};
            oscar = golf / oscar;
            mike['weeks'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 354:
            return entity;
        }
    };
    zulu['formatPlanIntervalDuration'] = tango;
    tango = function(argFoo) { // Original name: isChannelBenefit
        entity = argFoo;
        mike = entity.ref_type;
        entity = _closure1_slot2;
        entity = entity.CHANNEL;
        entity = mike === entity;
        return entity;
    };
    zulu['isChannelBenefit'] = tango;
    mike = function(argFoo) { // Original name: isIntangibleBenefit
        entity = argFoo;
        mike = entity.ref_type;
        entity = _closure1_slot2;
        entity = entity.INTANGIBLE;
        entity = mike === entity;
        return entity;
    };
    zulu['isIntangibleBenefit'] = mike;
    return entity;
})();