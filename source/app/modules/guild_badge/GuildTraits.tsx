// app/modules/guild_badge/GuildTraits.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    tango = function(argFoo) { // Original name: isPremiumGuild
        _fun90529: for(var _fun90529_ip = 0; ; ) switch(_fun90529_ip) {
 0:
            report = argFoo;
            zulu = null;
            entity = zulu != report;
            if(!entity) { _fun90529_ip = 94; continue _fun90529 }
 12:
            mike = _closure1_slot0;
            mike = report instanceof mike;
            if(mike) { _fun90529_ip = 53; continue _fun90529 }
 26:
            mike = report.premiumSubscriptionCount;
            mike = zulu != mike;
            if(!mike) { _fun90529_ip = 51; continue _fun90529 }
 39:
            oscar = report.premiumSubscriptionCount;
            zulu = 0;
            mike = oscar > zulu;
 51:
            _fun90529_ip = 91; continue _fun90529;
 53:
            oscar = report.premiumSubscriberCount;
            zulu = 0;
            zulu = oscar > zulu;
            if(zulu) { _fun90529_ip = 88; continue _fun90529 }
 68:
            report = report.premiumTier;
            tango = _closure1_slot2;
            tango = tango.NONE;
            zulu = report > tango;
 88:
            mike = zulu;
 91:
            entity = mike;
 94:
            return entity;
        }
    };
    var _closure1_slot4 = tango;
    entity = global;
    verify = entity.Object;
    oscar = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(verify)(zulu, entity, report);
    entity = 0;
    oscar = options[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(oscar);
    var _closure1_slot0 = report;
    report = 1;
    report = options[report];
    report = golf.bind(entity)(report);
    oscar = report.GuildFeatures;
    var _closure1_slot1 = oscar;
    report = report.BoostedGuildTiers;
    var _closure1_slot2 = report;
    report = {};
    oscar = 'PUBLIC';
    report['PUBLIC'] = oscar;
    oscar = 'INVITE_ONLY';
    report['INVITE_ONLY'] = oscar;
    var _closure1_slot3 = report;
    oscar = 2;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/guild_badge/GuildTraits.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['GuildVisibility'] = report;
    report = function(argFoo) { // Original name: getGuildTraits
        _fun90530: for(var _fun90530_ip = 0; ; ) switch(_fun90530_ip) {
 0:
            entity = argFoo;
            mike = global;
            tango = mike.Set;
            offset = entity.features;
            zulu = tango.prototype;
            zulu = Object.create(zulu, {constructor: {value: tango}});
            yankee = zulu;
            mike = new yankee[tango](offset, verify);
            options = mike instanceof Object ? mike : zulu;
            zulu = options.has;
            mike = _closure1_slot1;
            mike = mike.COMMUNITY;
            mike = zulu.bind(options)(mike);
            if(!mike) { _fun90530_ip = 86; continue _fun90530 }
 63:
            zulu = options.has;
            mike = _closure1_slot1;
            mike = mike.DISCOVERABLE;
            mike = zulu.bind(options)(mike);
            if(mike) { _fun90530_ip = 98; continue _fun90530 }
 86:
            mike = _closure1_slot3;
            report = mike.INVITE_ONLY;
            _fun90530_ip = 108; continue _fun90530;
 98:
            mike = _closure1_slot3;
            report = mike.PUBLIC;
 108:
            zulu = _closure1_slot4;
            mike = undefined;
            tango = zulu.bind(mike)(entity);
            zulu = 0;
            if(!tango) { _fun90530_ip = 166; continue _fun90530 }
 124:
            golf = _closure1_slot0;
            golf = entity instanceof golf;
            if(golf) { _fun90530_ip = 143; continue _fun90530 }
 135:
            golf = entity.premiumSubscriptionCount;
            _fun90530_ip = 149; continue _fun90530;
 143:
            golf = entity.premiumSubscriberCount;
 149:
            verify = null;
            verify = verify != golf;
            mike = 0;
            if(!verify) { _fun90530_ip = 163; continue _fun90530 }
 160:
            mike = golf;
 163:
            zulu = mike;
 166:
            mike = _closure1_slot0;
            mike = entity instanceof mike;
            if(mike) { _fun90530_ip = 189; continue _fun90530 }
 177:
            mike = _closure1_slot2;
            mike = mike.NONE;
            _fun90530_ip = 195; continue _fun90530;
 189:
            mike = entity.premiumTier;
 195:
            entity = {};
            verify = options.has;
            oscar = _closure1_slot1;
            golf = oscar.VERIFIED;
            golf = verify.bind(options)(golf);
            entity['verified'] = golf;
            verify = options.has;
            golf = oscar.PARTNERED;
            golf = verify.bind(options)(golf);
            entity['partnered'] = golf;
            verify = options.has;
            golf = oscar.COMMUNITY;
            golf = verify.bind(options)(golf);
            entity['community'] = golf;
            verify = options.has;
            golf = oscar.INTERNAL_EMPLOYEE_ONLY;
            golf = verify.bind(options)(golf);
            entity['staff'] = golf;
            golf = options.has;
            oscar = oscar.CLAN;
            oscar = golf.bind(options)(oscar);
            entity['clan'] = oscar;
            entity['visibility'] = report;
            entity['premium'] = tango;
            entity['premiumSubscriberCount'] = zulu;
            entity['premiumTier'] = mike;
            return entity;
        }
    };
    zulu['getGuildTraits'] = report;
    zulu['isPremiumGuild'] = tango;
    mike = function(argFoo) { // Original name: isDiscoverableGuild
        _fun90531: for(var _fun90531_ip = 0; ; ) switch(_fun90531_ip) {
 0:
            mike = argFoo;
            entity = null;
            entity = entity != mike;
            if(!entity) { _fun90531_ip = 69; continue _fun90531 }
 12:
            zulu = global;
            tango = zulu.Set;
            report = mike.features;
            zulu = tango.prototype;
            zulu = Object.create(zulu, {constructor: {value: tango}});
            oscar = zulu;
            mike = new oscar[tango](report, tango);
            tango = mike instanceof Object ? mike : zulu;
            zulu = tango.has;
            mike = _closure1_slot1;
            mike = mike.DISCOVERABLE;
            entity = zulu.bind(tango)(mike);
 69:
            return entity;
        }
    };
    zulu['isDiscoverableGuild'] = mike;
    return entity;
})();