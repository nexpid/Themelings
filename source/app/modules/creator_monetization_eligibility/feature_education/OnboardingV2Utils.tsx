// app/modules/creator_monetization_eligibility/feature_education/OnboardingV2Utils.tsx
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
    golfie = tangon.GuildFeatures;
    option = golfie.CREATOR_MONETIZABLE_PROVISIONAL;
    tangon = new Array(5);
    tangon[0] = option;
    option = golfie.CREATOR_MONETIZABLE;
    tangon[1] = option;
    option = golfie.CREATOR_MONETIZABLE_WHITEGLOVE;
    tangon[2] = option;
    option = golfie.CREATOR_MONETIZABLE_DISABLED;
    tangon[3] = option;
    golfie = golfie.CREATOR_MONETIZABLE_RESTRICTED;
    tangon[4] = golfie;
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/creator_monetization_eligibility/feature_education/OnboardingV2Utils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useCanSeeCreatorMonetizationOnboardingV2Upsell
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            option = _closure1_slot0;
            verify = _closure1_slot1;
            entity = 3;
            zuuluu = verify[entity];
            golfie = undefined;
            offset = option.bind(golfie)(zuuluu);
            oscard = offset.useStateFromStores;
            zuuluu = _closure1_slot2;
            report = new Array(1);
            report[0] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure1_slot2;
                michal = zuuluu.getGuild;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = oscard.bind(offset)(report, zuuluu);
            var _closure2_slot1 = oscard;
            entity = verify[entity];
            offset = option.bind(golfie)(entity);
            report = offset.useStateFromStores;
            entity = _closure1_slot3;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                michal = _closure1_slot3;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            report = report.bind(offset)(zuuluu, entity);
            entity = 4;
            zuuluu = verify[entity];
            offset = option.bind(golfie)(zuuluu);
            zuuluu = offset.useGuildRoleSubscriptionSettingsVisibility;
            zuuluu = zuuluu.bind(offset)(oscard);
            entity = verify[entity];
            entity = option.bind(golfie)(entity);
            entity = entity.GuildRoleSubscriptionSettingsVisibility;
            entity = entity.VISIBLE;
            entity = zuuluu === entity;
            zuuluu = null;
            if(!(zuuluu != oscard)) { _fun00002_ip = 208; continue _fun00001 }
 161:
            zuuluu = oscard.isOwner;
            zuuluu = zuuluu.bind(oscard)(report);
            report = _closure1_slot4;
            tangon = report.every;
            michal = function(argFoo) {
                zuuluu = _closure2_slot1;
                michal = zuuluu.hasFeature;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                entity = !entity;
                return entity;
            };
            michal = tangon.bind(report)(michal);
            if(!entity) { _fun00002_ip = 200; continue _fun00001 }
 197:
            entity = zuuluu;
 200:
            if(!entity) { _fun00002_ip = 206; continue _fun00001 }
 203:
            entity = michal;
 206:
            return entity;
 208:
            entity = false;
            return entity;
        }
    };
    zuuluu['useCanSeeCreatorMonetizationOnboardingV2Upsell'] = tangon;
    michal = function(argFoo) { // Original name: canSeeCreatorMonetizationOnboardingV2Upsell
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = _closure1_slot2;
            zuuluu = report.getGuild;
            entity = argFoo;
            oscard = zuuluu.bind(report)(entity);
            var _closure2_slot0 = oscard;
            entity = null;
            if(!(entity != oscard)) { _fun00004_ip = 161; continue _fun00003 }
 35:
            report = _closure1_slot3;
            zuuluu = report.getCurrentUser;
            report = zuuluu.bind(report)();
            if(!(entity != report)) { _fun00004_ip = 157; continue _fun00003 }
 52:
            option = _closure1_slot0;
            verify = _closure1_slot1;
            entity = 4;
            zuuluu = verify[entity];
            golfie = undefined;
            offset = option.bind(golfie)(zuuluu);
            zuuluu = offset.getGuildRoleSubscriptionSettingsVisibility;
            zuuluu = zuuluu.bind(offset)(oscard);
            entity = verify[entity];
            entity = option.bind(golfie)(entity);
            entity = entity.GuildRoleSubscriptionSettingsVisibility;
            entity = entity.VISIBLE;
            entity = zuuluu === entity;
            zuuluu = oscard.isOwner;
            zuuluu = zuuluu.bind(oscard)(report);
            report = _closure1_slot4;
            tangon = report.every;
            michal = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.hasFeature;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                entity = !entity;
                return entity;
            };
            michal = tangon.bind(report)(michal);
            if(!entity) { _fun00004_ip = 149; continue _fun00003 }
 146:
            entity = zuuluu;
 149:
            if(!entity) { _fun00004_ip = 155; continue _fun00003 }
 152:
            entity = michal;
 155:
            return entity;
 157:
            entity = false;
            return entity;
 161:
            entity = false;
            return entity;
        }
    };
    zuuluu['canSeeCreatorMonetizationOnboardingV2Upsell'] = michal;
    return entity;
})();