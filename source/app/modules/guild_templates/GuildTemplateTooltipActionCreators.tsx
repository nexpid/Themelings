// app/modules/guild_templates/GuildTemplateTooltipActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
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
    michal = michal.Permissions;
    var _closure1_slot4 = michal;
    michal = {};
    golfie = function(argFoo) { // Original name: checkGuildTemplateDirty
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot2;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 107; continue _fun00001 }
 7:
                    golfie = _closure1_slot3;
                    oscard = golfie.canWithPartialContext;
                    michal = _closure1_slot4;
                    report = michal.MANAGE_GUILD;
                    tangon = {};
                    option = _closure2_slot0;
                    tangon['guildId'] = option;
                    tangon = oscard.bind(golfie)(report, tangon);
                    if(!tangon) { _fun00002_ip = 99; continue _fun00001 }
 52:
                    report = _closure1_slot0;
                    tangon = _closure1_slot1;
                    zuuluu = 3;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = report.bind(zuuluu)(tangon);
                    zuuluu = tangon.loadTemplatesForGuild;
                    michal = _closure2_slot0;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=93);
 91:
                    return michal;
 93:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 104; continue _fun00001 }
 99:
                    zuuluu = undefined;
                    return zuuluu;
 104:
                    return michal;
 107:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['checkGuildTemplateDirty'] = golfie;
    golfie = function(argFoo) { // Original name: hideGuildTemplateDirtyTooltip
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['hideGuildTemplateDirtyTooltip'] = golfie;
    tangon = function() { // Original name: hideGuildTemplatePromotionTooltip
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['hideGuildTemplatePromotionTooltip'] = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_templates/GuildTemplateTooltipActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();