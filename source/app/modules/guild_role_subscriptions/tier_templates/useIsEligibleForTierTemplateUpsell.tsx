// app/modules/guild_role_subscriptions/tier_templates/useIsEligibleForTierTemplateUpsell.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildFeatures;
    var _closure1_slot3 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_role_subscriptions/tier_templates/useIsEligibleForTierTemplateUpsell.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useIsEligibleForTierTemplateUpsell
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            option = argFoo;
            var _closure2_slot0 = option;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 2;
            michal = tangon[michal];
            golfie = undefined;
            verify = zuuluu.bind(golfie)(michal);
            oscard = verify.useStateFromStores;
            offset = _closure1_slot2;
            michal = new Array(1);
            michal[0] = offset;
            entity = function() {
                zuuluu = _closure1_slot2;
                michal = zuuluu.getGuild;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            verify = oscard.bind(verify)(michal, entity);
            entity = 3;
            michal = tangon[entity];
            oscard = zuuluu.bind(golfie)(michal);
            michal = oscard.useGuildEligibleForTierTemplates;
            michal = michal.bind(oscard)(option);
            entity = tangon[entity];
            zuuluu = zuuluu.bind(golfie)(entity);
            entity = zuuluu.useUserEligibleForTierTemplates;
            tangon = entity.bind(zuuluu)();
            zuuluu = null;
            entity = zuuluu == verify;
            oscard = undefined;
            if(entity) { _fun00002_ip = 143; continue _fun00001 }
 117:
            yankee = verify.features;
            offset = yankee.has;
            entity = _closure1_slot3;
            entity = entity.ROLE_SUBSCRIPTIONS_ENABLED;
            oscard = offset.bind(yankee)(entity);
 143:
            entity = true;
            entity = entity === oscard;
            if(!entity) { _fun00002_ip = 193; continue _fun00001 }
 152:
            zuuluu = zuuluu == verify;
            oscard = undefined;
            if(zuuluu) { _fun00002_ip = 187; continue _fun00001 }
 161:
            yankee = verify.features;
            offset = yankee.has;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
            oscard = offset.bind(yankee)(zuuluu);
 187:
            zuuluu = false;
            entity = zuuluu === oscard;
 193:
            oscard = _closure1_slot0;
            offset = _closure1_slot1;
            zuuluu = 4;
            zuuluu = offset[zuuluu];
            oscard = oscard.bind(golfie)(zuuluu);
            zuuluu = oscard.canManageGuildRoleSubscriptions;
            zuuluu = zuuluu.bind(oscard)(verify);
            oscard = entity;
            if(!entity) { _fun00002_ip = 233; continue _fun00001 }
 230:
            oscard = tangon;
 233:
            if(!oscard) { _fun00002_ip = 239; continue _fun00001 }
 236:
            oscard = zuuluu;
 239:
            if(!oscard) { _fun00002_ip = 295; continue _fun00001 }
 242:
            oscard = _closure1_slot0;
            verify = _closure1_slot1;
            report = 5;
            report = verify[report];
            report = oscard.bind(golfie)(report);
            golfie = report.GuildRoleSubscriptionsTierTemplatesExperiment;
            oscard = golfie.trackExposure;
            report = {};
            report['guildId'] = option;
            option = 'ca30d9_1';
            report['location'] = option;
            report = oscard.bind(golfie)(report);
 295:
            if(!entity) { _fun00002_ip = 301; continue _fun00001 }
 298:
            entity = tangon;
 301:
            if(!entity) { _fun00002_ip = 307; continue _fun00001 }
 304:
            entity = zuuluu;
 307:
            if(!entity) { _fun00002_ip = 313; continue _fun00001 }
 310:
            entity = michal;
 313:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();