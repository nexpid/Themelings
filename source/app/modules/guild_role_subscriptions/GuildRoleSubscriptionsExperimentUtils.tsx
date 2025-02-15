// app/modules/guild_role_subscriptions/GuildRoleSubscriptionsExperimentUtils.tsx
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
    golf = tango.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot2 = golf;
    golf = tango.GuildFeatures;
    options = golf.ROLE_SUBSCRIPTIONS_ENABLED;
    tango = new Array(3);
    tango[0] = options;
    options = golf.CREATOR_MONETIZABLE;
    tango[1] = options;
    golf = golf.CREATOR_MONETIZABLE_PROVISIONAL;
    tango[2] = golf;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/GuildRoleSubscriptionsExperimentUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useGuildEligibleForRoleSubscriptions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot0;
            entity = _closure1_slot1;
            golf = 1;
            entity = entity[golf];
            oscar = undefined;
            entity = mike.bind(oscar)(entity);
            verify = entity.GuildRoleSubscriptionsExperiment;
            options = verify.useExperiment;
            report = {};
            entity = null;
            mike = tango;
            if(!(entity == mike)) { _fun00002_ip = 55; continue _fun00001 }
 51:
            mike = _closure1_slot2;
 55:
            report['guildId'] = mike;
            mike = '504714_1';
            report['location'] = mike;
            mike = {};
            offset = true;
            mike['autoTrackExposure'] = offset;
            mike = options.bind(verify)(report, mike);
            mike = mike.enableRoleSubscriptionsForGuild;
            report = _closure1_slot0;
            zulu = _closure1_slot1;
            zulu = zulu[golf];
            zulu = report.bind(oscar)(zulu);
            golf = zulu.GuildRoleSubscriptionUsersExperiment;
            oscar = golf.useExperiment;
            report = {};
            zulu = '504714_2';
            report['location'] = zulu;
            zulu = {};
            options = false;
            zulu['autoTrackExposure'] = options;
            zulu = oscar.bind(golf)(report, zulu);
            zulu = zulu.enableRoleSubscriptionsForUser;
            entity = entity != tango;
            if(!entity) { _fun00002_ip = 168; continue _fun00001 }
 159:
            if(!mike) { _fun00002_ip = 165; continue _fun00001 }
 162:
            mike = zulu;
 165:
            entity = mike;
 168:
            return entity;
        }
    };
    zulu['useGuildEligibleForRoleSubscriptions'] = tango;
    tango = function(argFoo) { // Original name: isGuildEligibleForRoleSubscriptions
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot0;
            entity = _closure1_slot1;
            golf = 1;
            entity = entity[golf];
            oscar = undefined;
            entity = mike.bind(oscar)(entity);
            options = entity.GuildRoleSubscriptionsExperiment;
            report = options.getCurrentConfig;
            mike = {};
            entity = null;
            verify = tango;
            if(!(entity == verify)) { _fun00004_ip = 55; continue _fun00003 }
 51:
            verify = _closure1_slot2;
 55:
            mike['guildId'] = verify;
            verify = '504714_3';
            mike['location'] = verify;
            mike = report.bind(options)(mike);
            mike = mike.enableRoleSubscriptionsForGuild;
            report = _closure1_slot0;
            zulu = _closure1_slot1;
            zulu = zulu[golf];
            zulu = report.bind(oscar)(zulu);
            golf = zulu.GuildRoleSubscriptionUsersExperiment;
            oscar = golf.getCurrentConfig;
            report = {};
            zulu = '504714_4';
            report['location'] = zulu;
            zulu = {};
            options = false;
            zulu['autoTrackExposure'] = options;
            zulu = oscar.bind(golf)(report, zulu);
            zulu = zulu.enableRoleSubscriptionsForUser;
            entity = entity != tango;
            if(!entity) { _fun00004_ip = 158; continue _fun00003 }
 149:
            if(!mike) { _fun00004_ip = 155; continue _fun00003 }
 152:
            mike = zulu;
 155:
            entity = mike;
 158:
            return entity;
        }
    };
    zulu['isGuildEligibleForRoleSubscriptions'] = tango;
    tango = function(argFoo) { // Original name: useRoleSubscriptionMaxTiersExperiment
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 1;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            zulu = entity.GuildRoleSubscriptionMaxTiersExperiment;
            mike = zulu.useExperiment;
            entity = {};
            oscar = null;
            if(!(oscar == tango)) { _fun00006_ip = 52; continue _fun00005 }
 48:
            tango = _closure1_slot2;
 52:
            entity['guildId'] = tango;
            tango = '504714_7';
            entity['location'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['useRoleSubscriptionMaxTiersExperiment'] = tango;
    tango = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            entity = null;
            entity = entity != zulu;
            if(!entity) { _fun00008_ip = 41; continue _fun00007 }
 18:
            tango = _closure1_slot3;
            zulu = tango.some;
            mike = function(argFoo) {
                zulu = _closure2_slot0;
                mike = zulu.hasFeature;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = zulu.bind(tango)(mike);
 41:
            return entity;
        }
    };
    zulu['hasEnabledMonetization'] = tango;
    tango = function(argFoo) { // Original name: useGuildEligibleForRoleSubscriptionsMobileTeamSetup
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot0;
            report = _closure1_slot1;
            entity = 1;
            entity = report[entity];
            report = undefined;
            entity = zulu.bind(report)(entity);
            golf = entity.GuildRoleSubscriptionsMobileTeamSetupExperiment;
            oscar = golf.useExperiment;
            zulu = {};
            options = null;
            verify = options == tango;
            entity = undefined;
            if(verify) { _fun00010_ip = 58; continue _fun00009 }
 53:
            entity = tango.id;
 58:
            if(!(options == entity)) { _fun00010_ip = 66; continue _fun00009 }
 62:
            entity = _closure1_slot2;
 66:
            zulu['guildId'] = entity;
            entity = '504714_8';
            zulu['location'] = entity;
            entity = {};
            options = true;
            entity['autoTrackExposure'] = options;
            entity = oscar.bind(golf)(zulu, entity);
            entity = entity.enabled;
            zulu = _closure1_slot0;
            oscar = _closure1_slot1;
            mike = 2;
            mike = oscar[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.useIsExpeditedOnboardingGuild;
            mike = mike.bind(zulu)(tango);
            if(!entity) { _fun00010_ip = 137; continue _fun00009 }
 134:
            entity = mike;
 137:
            return entity;
        }
    };
    zulu['useGuildEligibleForRoleSubscriptionsMobileTeamSetup'] = tango;
    tango = function(argFoo) { // Original name: isGuildEligibleForTierTemplates
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 1;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            tango = mike.GuildRoleSubscriptionsTierTemplatesExperiment;
            zulu = tango.getCurrentConfig;
            mike = {};
            oscar = null;
            if(!(oscar == entity)) { _fun00012_ip = 52; continue _fun00011 }
 48:
            entity = _closure1_slot2;
 52:
            mike['guildId'] = entity;
            entity = '504714_9';
            mike['location'] = entity;
            entity = {};
            report = false;
            entity['autoTrackExposure'] = report;
            entity = zulu.bind(tango)(mike, entity);
            entity = entity.enabled;
            return entity;
        }
    };
    zulu['isGuildEligibleForTierTemplates'] = tango;
    tango = function(argFoo) { // Original name: useGuildEligibleForTierTemplates
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 1;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            tango = mike.GuildRoleSubscriptionsTierTemplatesExperiment;
            zulu = tango.useExperiment;
            mike = {};
            oscar = null;
            if(!(oscar == entity)) { _fun00014_ip = 52; continue _fun00013 }
 48:
            entity = _closure1_slot2;
 52:
            mike['guildId'] = entity;
            entity = '504714_10';
            mike['location'] = entity;
            entity = {};
            report = false;
            entity['autoTrackExposure'] = report;
            entity = zulu.bind(tango)(mike, entity);
            entity = entity.enabled;
            return entity;
        }
    };
    zulu['useGuildEligibleForTierTemplates'] = tango;
    tango = function(argFoo) { // Original name: useShowCreatorPortalLinkForTierTemplates
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 1;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            tango = mike.GuildRoleSubscriptionsTierTemplatesExperiment;
            zulu = tango.useExperiment;
            mike = {};
            oscar = null;
            if(!(oscar == entity)) { _fun00016_ip = 52; continue _fun00015 }
 48:
            entity = _closure1_slot2;
 52:
            mike['guildId'] = entity;
            entity = '504714_11';
            mike['location'] = entity;
            entity = {};
            report = false;
            entity['autoTrackExposure'] = report;
            entity = zulu.bind(tango)(mike, entity);
            entity = entity.showCreatorPortalLink;
            return entity;
        }
    };
    zulu['useShowCreatorPortalLinkForTierTemplates'] = tango;
    tango = function() { // Original name: isUserEligibleForTierTemplates
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        tango = entity.GuildRoleSubscriptionsTierTemplatesUserExperiment;
        zulu = tango.getCurrentConfig;
        mike = {};
        entity = '504714_12';
        mike['location'] = entity;
        entity = {};
        report = false;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        entity = entity.enabled;
        return entity;
    };
    zulu['isUserEligibleForTierTemplates'] = tango;
    mike = function() { // Original name: useUserEligibleForTierTemplates
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        tango = entity.GuildRoleSubscriptionsTierTemplatesUserExperiment;
        zulu = tango.useExperiment;
        mike = {};
        entity = '504714_13';
        mike['location'] = entity;
        entity = {};
        report = false;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        entity = entity.enabled;
        return entity;
    };
    zulu['useUserEligibleForTierTemplates'] = mike;
    return entity;
})();