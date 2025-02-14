// app/modules/guild_role_subscriptions/useIsGuildEligibleForRoleSubscriptionsUpsell.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildFeatures;
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/useIsGuildEligibleForRoleSubscriptionsUpsell.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useIsGuildEligibleForRoleSubscriptionsUpsell
        _fun116024: for(var _fun116024_ip = 0; ; ) switch(_fun116024_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            zulu = _closure1_slot0;
            report = _closure1_slot1;
            mike = 3;
            oscar = report[mike];
            golf = undefined;
            offset = zulu.bind(golf)(oscar);
            verify = offset.useStateFromStores;
            oscar = _closure1_slot2;
            options = new Array(1);
            options[0] = oscar;
            oscar = function() {
                zulu = _closure1_slot2;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = verify.bind(offset)(options, oscar);
            mike = report[mike];
            report = zulu.bind(golf)(mike);
            zulu = report.useStateFromStores;
            options = _closure1_slot3;
            mike = new Array(1);
            mike[0] = options;
            entity = function() {
                mike = _closure1_slot3;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            report = zulu.bind(report)(mike, entity);
            zulu = null;
            entity = zulu == oscar;
            mike = undefined;
            if(entity) { _fun116024_ip = 120; continue _fun116024 }
 114:
            mike = oscar.ownerId;
 120:
            options = zulu == report;
            entity = undefined;
            if(options) { _fun116024_ip = 134; continue _fun116024 }
 129:
            entity = report.id;
 134:
            entity = mike === entity;
            report = _closure1_slot0;
            options = _closure1_slot1;
            mike = 4;
            mike = options[mike];
            report = report.bind(golf)(mike);
            mike = report.useIsUserInCreatorMonetizationEligibleCountry;
            mike = mike.bind(report)();
            report = undefined;
            if(!entity) { _fun116024_ip = 210; continue _fun116024 }
 173:
            options = zulu == oscar;
            golf = undefined;
            if(options) { _fun116024_ip = 203; continue _fun116024 }
 182:
            verify = oscar.hasFeature;
            options = _closure1_slot4;
            options = options.COMMUNITY;
            golf = verify.bind(oscar)(options);
 203:
            entity = zulu != golf;
            report = golf;
 210:
            if(!entity) { _fun116024_ip = 216; continue _fun116024 }
 213:
            entity = report;
 216:
            if(!entity) { _fun116024_ip = 222; continue _fun116024 }
 219:
            entity = mike;
 222:
            if(!entity) { _fun116024_ip = 324; continue _fun116024 }
 225:
            mike = zulu != oscar;
            if(!mike) { _fun116024_ip = 253; continue _fun116024 }
 232:
            golf = oscar.hasFeature;
            report = _closure1_slot4;
            report = report.CREATOR_MONETIZABLE;
            mike = golf.bind(oscar)(report);
 253:
            if(mike) { _fun116024_ip = 287; continue _fun116024 }
 256:
            report = zulu != oscar;
            if(!report) { _fun116024_ip = 284; continue _fun116024 }
 263:
            options = oscar.hasFeature;
            golf = _closure1_slot4;
            golf = golf.CREATOR_MONETIZABLE_PROVISIONAL;
            report = options.bind(oscar)(golf);
 284:
            mike = report;
 287:
            if(mike) { _fun116024_ip = 321; continue _fun116024 }
 290:
            zulu = zulu != oscar;
            if(!zulu) { _fun116024_ip = 318; continue _fun116024 }
 297:
            report = oscar.hasFeature;
            tango = _closure1_slot4;
            tango = tango.CREATOR_MONETIZABLE_DISABLED;
            zulu = report.bind(oscar)(tango);
 318:
            mike = zulu;
 321:
            entity = !mike;
 324:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();