// app/modules/guild_role_subscriptions/tier_templates/useIsEligibleForTierTemplateUpsell.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildFeatures;
    var _closure1_slot3 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/tier_templates/useIsEligibleForTierTemplateUpsell.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useIsEligibleForTierTemplateUpsell
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            options = argFoo;
            var _closure2_slot0 = options;
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 2;
            mike = tango[mike];
            golf = undefined;
            verify = zulu.bind(golf)(mike);
            oscar = verify.useStateFromStores;
            offset = _closure1_slot2;
            mike = new Array(1);
            mike[0] = offset;
            entity = function() {
                zulu = _closure1_slot2;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            verify = oscar.bind(verify)(mike, entity);
            entity = 3;
            mike = tango[entity];
            oscar = zulu.bind(golf)(mike);
            mike = oscar.useGuildEligibleForTierTemplates;
            mike = mike.bind(oscar)(options);
            entity = tango[entity];
            zulu = zulu.bind(golf)(entity);
            entity = zulu.useUserEligibleForTierTemplates;
            tango = entity.bind(zulu)();
            zulu = null;
            entity = zulu == verify;
            oscar = undefined;
            if(entity) { _fun00002_ip = 138; continue _fun00001 }
 117:
            offset = verify.hasFeature;
            entity = _closure1_slot3;
            entity = entity.ROLE_SUBSCRIPTIONS_ENABLED;
            oscar = offset.bind(verify)(entity);
 138:
            entity = true;
            entity = entity === oscar;
            if(!entity) { _fun00002_ip = 183; continue _fun00001 }
 147:
            zulu = zulu == verify;
            oscar = undefined;
            if(zulu) { _fun00002_ip = 177; continue _fun00001 }
 156:
            offset = verify.hasFeature;
            zulu = _closure1_slot3;
            zulu = zulu.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
            oscar = offset.bind(verify)(zulu);
 177:
            zulu = false;
            entity = zulu === oscar;
 183:
            oscar = _closure1_slot0;
            offset = _closure1_slot1;
            zulu = 4;
            zulu = offset[zulu];
            oscar = oscar.bind(golf)(zulu);
            zulu = oscar.canManageGuildRoleSubscriptions;
            zulu = zulu.bind(oscar)(verify);
            oscar = entity;
            if(!entity) { _fun00002_ip = 223; continue _fun00001 }
 220:
            oscar = tango;
 223:
            if(!oscar) { _fun00002_ip = 229; continue _fun00001 }
 226:
            oscar = zulu;
 229:
            if(!oscar) { _fun00002_ip = 285; continue _fun00001 }
 232:
            oscar = _closure1_slot0;
            verify = _closure1_slot1;
            report = 5;
            report = verify[report];
            report = oscar.bind(golf)(report);
            golf = report.GuildRoleSubscriptionsTierTemplatesExperiment;
            oscar = golf.trackExposure;
            report = {};
            report['guildId'] = options;
            options = 'ca30d9_1';
            report['location'] = options;
            report = oscar.bind(golf)(report);
 285:
            if(!entity) { _fun00002_ip = 291; continue _fun00001 }
 288:
            entity = tango;
 291:
            if(!entity) { _fun00002_ip = 297; continue _fun00001 }
 294:
            entity = zulu;
 297:
            if(!entity) { _fun00002_ip = 303; continue _fun00001 }
 300:
            entity = mike;
 303:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();