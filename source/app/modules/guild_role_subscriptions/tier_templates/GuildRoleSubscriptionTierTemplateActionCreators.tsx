// app/modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplateActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _getTemplates
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    golfie = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 170; continue _fun00001 }
 13:
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 3;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = report.bind(zuuluu)(michal);
                    oscard = michal.HTTP;
                    report = oscard.get;
                    michal = {};
                    verify = _closure1_slot4;
                    option = verify.GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES;
                    option = option.bind(verify)(golfie);
                    michal['url'] = option;
                    option = false;
                    michal['rejectWithError'] = option;
                    michal = report.bind(oscard)(michal);
                    SaveGenerator(address=84);
 82:
                    return michal;
 84:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 167; continue _fun00001 }
 90:
                    option = michal.body;
                    oscard = option.templates;
                    report = null;
                    if(!(report != oscard)) { _fun00002_ip = 164; continue _fun00001 }
 107:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 2;
                    tangon = oscard[tangon];
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    verify = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES';
                    tangon['type'] = verify;
                    option = option.templates;
                    tangon['templates'] = option;
                    tangon['guildId'] = golfie;
                    tangon = report.bind(oscard)(tangon);
 164:
                    return zuuluu;
 167:
                    return michal;
 170:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot5 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot5 = entity;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplateActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: stashTemplateChannels
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS';
        michal['type'] = report;
        report = argFoo;
        michal['selectedTemplate'] = report;
        report = argBar;
        michal['guildId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['stashTemplateChannels'] = tangon;
    michal = function() { // Original name: getTemplates
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['getTemplates'] = michal;
    return entity;
})();