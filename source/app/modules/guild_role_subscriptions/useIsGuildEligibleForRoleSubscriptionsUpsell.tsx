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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.isGuildOwner;
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildFeatures;
    var _closure1_slot5 = tangon;
    tangon = 6;
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
            oscard = _closure1_slot1;
            michal = 4;
            report = oscard[michal];
            golfie = undefined;
            offset = zuuluu.bind(golfie)(report);
            verify = offset.useStateFromStores;
            report = _closure1_slot3;
            option = new Array(1);
            option[0] = report;
            report = function() {
                zuuluu = _closure1_slot3;
                michal = zuuluu.getGuild;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            report = verify.bind(offset)(option, report);
            michal = oscard[michal];
            oscard = zuuluu.bind(golfie)(michal);
            zuuluu = oscard.useStateFromStores;
            option = _closure1_slot4;
            michal = new Array(1);
            michal[0] = option;
            entity = function() {
                michal = _closure1_slot4;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            oscard = zuuluu.bind(oscard)(michal, entity);
            zuuluu = null;
            entity = zuuluu != report;
            if(!entity) { _fun00002_ip = 122; continue _fun00001 }
 112:
            michal = _closure1_slot2;
            entity = michal.bind(golfie)(report, oscard);
 122:
            oscard = _closure1_slot0;
            option = _closure1_slot1;
            michal = 5;
            michal = option[michal];
            oscard = oscard.bind(golfie)(michal);
            michal = oscard.useIsUserInCreatorMonetizationEligibleCountry;
            michal = michal.bind(oscard)();
            oscard = undefined;
            if(!entity) { _fun00002_ip = 199; continue _fun00001 }
 157:
            option = zuuluu == report;
            golfie = undefined;
            if(option) { _fun00002_ip = 192; continue _fun00001 }
 166:
            offset = report.features;
            verify = offset.has;
            option = _closure1_slot5;
            option = option.COMMUNITY;
            golfie = verify.bind(offset)(option);
 192:
            entity = zuuluu != golfie;
            oscard = golfie;
 199:
            if(!entity) { _fun00002_ip = 205; continue _fun00001 }
 202:
            entity = oscard;
 205:
            if(!entity) { _fun00002_ip = 211; continue _fun00001 }
 208:
            entity = michal;
 211:
            if(!entity) { _fun00002_ip = 328; continue _fun00001 }
 214:
            michal = zuuluu != report;
            if(!michal) { _fun00002_ip = 247; continue _fun00001 }
 221:
            option = report.features;
            golfie = option.has;
            oscard = _closure1_slot5;
            oscard = oscard.CREATOR_MONETIZABLE;
            michal = golfie.bind(option)(oscard);
 247:
            if(michal) { _fun00002_ip = 286; continue _fun00001 }
 250:
            oscard = zuuluu != report;
            if(!oscard) { _fun00002_ip = 283; continue _fun00001 }
 257:
            verify = report.features;
            option = verify.has;
            golfie = _closure1_slot5;
            golfie = golfie.CREATOR_MONETIZABLE_PROVISIONAL;
            oscard = option.bind(verify)(golfie);
 283:
            michal = oscard;
 286:
            if(michal) { _fun00002_ip = 325; continue _fun00001 }
 289:
            zuuluu = zuuluu != report;
            if(!zuuluu) { _fun00002_ip = 322; continue _fun00001 }
 296:
            oscard = report.features;
            report = oscard.has;
            tangon = _closure1_slot5;
            tangon = tangon.CREATOR_MONETIZABLE_DISABLED;
            zuuluu = report.bind(oscard)(tangon);
 322:
            michal = zuuluu;
 325:
            entity = !michal;
 328:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();