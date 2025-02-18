// app/modules/guild_role_subscriptions/useIsGuildEligibleForRoleSubscriptionsUpsell.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildFeatures;
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_role_subscriptions/useIsGuildEligibleForRoleSubscriptionsUpsell.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useIsGuildEligibleForRoleSubscriptionsUpsell
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 3;
            oscard = report[michal];
            golfie = undefined;
            offset = zuuluu.bind(golfie)(oscard);
            verify = offset.useStateFromStores;
            oscard = _closure1_slot2;
            option = new Array(1);
            option[0] = oscard;
            oscard = function() {
                zuuluu = _closure1_slot2;
                michal = zuuluu.getGuild;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = verify.bind(offset)(option, oscard);
            michal = report[michal];
            report = zuuluu.bind(golfie)(michal);
            zuuluu = report.useStateFromStores;
            option = _closure1_slot3;
            michal = new Array(1);
            michal[0] = option;
            entity = function() {
                michal = _closure1_slot3;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            report = zuuluu.bind(report)(michal, entity);
            zuuluu = null;
            entity = zuuluu == oscard;
            michal = undefined;
            if(entity) { _fun00002_ip = 120; continue _fun00001 }
 114:
            michal = oscard.ownerId;
 120:
            option = zuuluu == report;
            entity = undefined;
            if(option) { _fun00002_ip = 134; continue _fun00001 }
 129:
            entity = report.id;
 134:
            entity = michal === entity;
            report = _closure1_slot0;
            option = _closure1_slot1;
            michal = 4;
            michal = option[michal];
            report = report.bind(golfie)(michal);
            michal = report.useIsUserInCreatorMonetizationEligibleCountry;
            michal = michal.bind(report)();
            report = undefined;
            if(!entity) { _fun00002_ip = 210; continue _fun00001 }
 173:
            option = zuuluu == oscard;
            golfie = undefined;
            if(option) { _fun00002_ip = 203; continue _fun00001 }
 182:
            verify = oscard.hasFeature;
            option = _closure1_slot4;
            option = option.COMMUNITY;
            golfie = verify.bind(oscard)(option);
 203:
            entity = zuuluu != golfie;
            report = golfie;
 210:
            if(!entity) { _fun00002_ip = 216; continue _fun00001 }
 213:
            entity = report;
 216:
            if(!entity) { _fun00002_ip = 222; continue _fun00001 }
 219:
            entity = michal;
 222:
            if(!entity) { _fun00002_ip = 324; continue _fun00001 }
 225:
            michal = zuuluu != oscard;
            if(!michal) { _fun00002_ip = 253; continue _fun00001 }
 232:
            golfie = oscard.hasFeature;
            report = _closure1_slot4;
            report = report.CREATOR_MONETIZABLE;
            michal = golfie.bind(oscard)(report);
 253:
            if(michal) { _fun00002_ip = 287; continue _fun00001 }
 256:
            report = zuuluu != oscard;
            if(!report) { _fun00002_ip = 284; continue _fun00001 }
 263:
            option = oscard.hasFeature;
            golfie = _closure1_slot4;
            golfie = golfie.CREATOR_MONETIZABLE_PROVISIONAL;
            report = option.bind(oscard)(golfie);
 284:
            michal = report;
 287:
            if(michal) { _fun00002_ip = 321; continue _fun00001 }
 290:
            zuuluu = zuuluu != oscard;
            if(!zuuluu) { _fun00002_ip = 318; continue _fun00001 }
 297:
            report = oscard.hasFeature;
            tangon = _closure1_slot4;
            tangon = tangon.CREATOR_MONETIZABLE_DISABLED;
            zuuluu = report.bind(oscard)(tangon);
 318:
            michal = zuuluu;
 321:
            entity = !michal;
 324:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();