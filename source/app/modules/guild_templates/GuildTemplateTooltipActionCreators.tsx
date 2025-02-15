// app/modules/guild_templates/GuildTemplateTooltipActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.Permissions;
    var _closure1_slot4 = mike;
    mike = {};
    golf = function(argFoo) { // Original name: checkGuildTemplateDirty
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot2;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 107; continue _fun00001 }
 7:
                    golf = _closure1_slot3;
                    oscar = golf.canWithPartialContext;
                    mike = _closure1_slot4;
                    report = mike.MANAGE_GUILD;
                    tango = {};
                    options = _closure2_slot0;
                    tango['guildId'] = options;
                    tango = oscar.bind(golf)(report, tango);
                    if(!tango) { _fun00002_ip = 99; continue _fun00001 }
 52:
                    report = _closure1_slot0;
                    tango = _closure1_slot1;
                    zulu = 3;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    zulu = tango.loadTemplatesForGuild;
                    mike = _closure2_slot0;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=93);
 91:
                    return mike;
 93:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00002_ip = 104; continue _fun00001 }
 99:
                    zulu = undefined;
                    return zulu;
 104:
                    return mike;
 107:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['checkGuildTemplateDirty'] = golf;
    golf = function(argFoo) { // Original name: hideGuildTemplateDirtyTooltip
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['hideGuildTemplateDirtyTooltip'] = golf;
    tango = function() { // Original name: hideGuildTemplatePromotionTooltip
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['hideGuildTemplatePromotionTooltip'] = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_templates/GuildTemplateTooltipActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();