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
            if(entity) { _fun00002_ip = 138; continue _fun00001 }
 117:
            offset = verify.hasFeature;
            entity = _closure1_slot3;
            entity = entity.ROLE_SUBSCRIPTIONS_ENABLED;
            oscard = offset.bind(verify)(entity);
 138:
            entity = true;
            entity = entity === oscard;
            if(!entity) { _fun00002_ip = 183; continue _fun00001 }
 147:
            zuuluu = zuuluu == verify;
            oscard = undefined;
            if(zuuluu) { _fun00002_ip = 177; continue _fun00001 }
 156:
            offset = verify.hasFeature;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
            oscard = offset.bind(verify)(zuuluu);
 177:
            zuuluu = false;
            entity = zuuluu === oscard;
 183:
            oscard = _closure1_slot0;
            offset = _closure1_slot1;
            zuuluu = 4;
            zuuluu = offset[zuuluu];
            oscard = oscard.bind(golfie)(zuuluu);
            zuuluu = oscard.canManageGuildRoleSubscriptions;
            zuuluu = zuuluu.bind(oscard)(verify);
            oscard = entity;
            if(!entity) { _fun00002_ip = 223; continue _fun00001 }
 220:
            oscard = tangon;
 223:
            if(!oscard) { _fun00002_ip = 229; continue _fun00001 }
 226:
            oscard = zuuluu;
 229:
            if(!oscard) { _fun00002_ip = 285; continue _fun00001 }
 232:
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
 285:
            if(!entity) { _fun00002_ip = 291; continue _fun00001 }
 288:
            entity = tangon;
 291:
            if(!entity) { _fun00002_ip = 297; continue _fun00001 }
 294:
            entity = zuuluu;
 297:
            if(!entity) { _fun00002_ip = 303; continue _fun00001 }
 300:
            entity = michal;
 303:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();