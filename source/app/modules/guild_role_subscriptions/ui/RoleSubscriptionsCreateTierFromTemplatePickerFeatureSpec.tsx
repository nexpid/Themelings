// app/modules/guild_role_subscriptions/ui/RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpec.tsx
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
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.GuildFeatures;
    var _closure1_slot4 = golfie;
    michal = michal.Permissions;
    var _closure1_slot5 = michal;
    michal = {};
    golfie = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 3;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.aTFQKi;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = golfie;
    golfie = function() { // Original name: description
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 3;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.oTbFQk;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['description'] = golfie;
    golfie = false;
    michal['canCreateGuild'] = golfie;
    tangon = function() { // Original name: useIsGuildSupported
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 4;
        zuuluu = zuuluu[michal];
        michal = undefined;
        report = tangon.bind(michal)(zuuluu);
        tangon = report.useStateFromStores;
        michal = _closure1_slot2;
        zuuluu = new Array(2);
        zuuluu[0] = michal;
        entity = _closure1_slot3;
        zuuluu[1] = entity;
        michal = function() {
            entity = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    michal = argFoo;
                    report = michal.features;
                    tangon = report.has;
                    entity = _closure1_slot4;
                    entity = entity.ROLE_SUBSCRIPTIONS_ENABLED;
                    entity = tangon.bind(report)(entity);
                    if(!entity) { _fun00002_ip = 64; continue _fun00001 }
 35:
                    oscard = michal.features;
                    report = oscard.has;
                    tangon = _closure1_slot4;
                    tangon = tangon.CREATOR_MONETIZABLE_RESTRICTED;
                    tangon = report.bind(oscard)(tangon);
                    entity = !tangon;
 64:
                    if(!entity) { _fun00002_ip = 93; continue _fun00001 }
 67:
                    oscard = _closure1_slot3;
                    report = oscard.can;
                    tangon = _closure1_slot5;
                    tangon = tangon.ADMINISTRATOR;
                    entity = report.bind(oscard)(tangon, michal);
 93:
                    if(!entity) { _fun00002_ip = 128; continue _fun00001 }
 96:
                    oscard = _closure1_slot0;
                    report = _closure1_slot1;
                    tangon = 5;
                    report = report[tangon];
                    tangon = undefined;
                    report = oscard.bind(tangon)(report);
                    tangon = report.isUserEligibleForTierTemplates;
                    entity = tangon.bind(report)();
 128:
                    if(!entity) { _fun00002_ip = 169; continue _fun00001 }
 131:
                    report = _closure1_slot0;
                    tangon = _closure1_slot1;
                    zuuluu = 5;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = report.bind(zuuluu)(tangon);
                    zuuluu = tangon.isGuildEligibleForTierTemplates;
                    michal = michal.id;
                    entity = zuuluu.bind(tangon)(michal);
 169:
                    return entity;
                }
            };
            return entity;
        };
        entity = new Array(0);
        entity = tangon.bind(report)(zuuluu, michal, entity);
        return entity;
    };
    michal['useIsGuildSupported'] = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_role_subscriptions/ui/RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpec.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();