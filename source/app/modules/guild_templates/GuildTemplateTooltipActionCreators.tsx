// app/modules/guild_templates/GuildTemplateTooltipActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.Permissions;
    var _closure1_slot4 = var2;
    var2 = {};
    var7 = function checkGuildTemplateDirty(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 107; continue _fun0001 }
 7:
                    var7 = _closure1_slot3;
                    var6 = var7.canWithPartialContext;
                    var2 = _closure1_slot4;
                    var5 = var2.MANAGE_GUILD;
                    var4 = {};
                    var8 = _closure2_slot0;
                    var4['guildId'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    if(!var4) { _fun0001_ip = 99; continue _fun0001 }
 52:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 3;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.loadTemplatesForGuild;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=93);
 91:
                    return var2;
 93:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 104; continue _fun0001 }
 99:
                    var3 = undefined;
                    return var3;
 104:
                    return var2;
 107:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['checkGuildTemplateDirty'] = var7;
    var7 = function hideGuildTemplateDirtyTooltip(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['hideGuildTemplateDirtyTooltip'] = var7;
    var4 = function hideGuildTemplatePromotionTooltip() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['hideGuildTemplatePromotionTooltip'] = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_templates/GuildTemplateTooltipActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();