// app/modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplateActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _getTemplates
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    golf = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 170; continue _fun00001 }
 13:
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 3;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = report.bind(zulu)(mike);
                    oscar = mike.HTTP;
                    report = oscar.get;
                    mike = {};
                    verify = _closure1_slot4;
                    options = verify.GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES;
                    options = options.bind(verify)(golf);
                    mike['url'] = options;
                    options = false;
                    mike['rejectWithError'] = options;
                    mike = report.bind(oscar)(mike);
                    SaveGenerator(address=84);
 82:
                    return mike;
 84:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 167; continue _fun00001 }
 90:
                    options = mike.body;
                    oscar = options.templates;
                    report = null;
                    if(!(report != oscar)) { _fun00002_ip = 164; continue _fun00001 }
 107:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 2;
                    tango = oscar[tango];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    verify = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES';
                    tango['type'] = verify;
                    options = options.templates;
                    tango['templates'] = options;
                    tango['guildId'] = golf;
                    tango = report.bind(oscar)(tango);
 164:
                    return zulu;
 167:
                    return mike;
 170:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot5 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot5 = entity;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplateActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: stashTemplateChannels
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS';
        mike['type'] = report;
        report = argFoo;
        mike['selectedTemplate'] = report;
        report = argBar;
        mike['guildId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['stashTemplateChannels'] = tango;
    mike = function() { // Original name: getTemplates
        entity = undefined;
        tango = _closure1_slot5;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['getTemplates'] = mike;
    return entity;
})();