// app/modules/guild_templates/createResolvedGuildTemplate.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildTemplateStates;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_templates/createResolvedGuildTemplate.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createResolvedGuildTemplate(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.code;
            var1['code'] = var3;
            var3 = _closure1_slot0;
            var3 = var3.RESOLVED;
            var1['state'] = var3;
            var3 = var2.name;
            var1['name'] = var3;
            var4 = var2.description;
            var3 = null;
            var5 = var3 != var4;
            var3 = '';
            if(!var5) { _fun0001_ip = 61; continue _fun0001 }
 58:
            var3 = var4;
 61:
            var1['description'] = var3;
            var3 = var2.creator_id;
            var1['creatorId'] = var3;
            var3 = var2.creator;
            var1['creator'] = var3;
            var3 = var2.created_at;
            var1['createdAt'] = var3;
            var3 = var2.updated_at;
            var1['updatedAt'] = var3;
            var3 = var2.source_guild_id;
            var1['sourceGuildId'] = var3;
            var3 = var2.serialized_source_guild;
            var1['serializedSourceGuild'] = var3;
            var3 = var2.usage_count;
            var1['usageCount'] = var3;
            var2 = var2.is_dirty;
            var1['isDirty'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();