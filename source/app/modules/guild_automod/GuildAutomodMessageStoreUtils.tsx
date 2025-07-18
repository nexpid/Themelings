// app/modules/guild_automod/GuildAutomodMessageStoreUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_automod/GuildAutomodMessageStoreUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.type;
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 0;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var4.bind(var5)(var1);
            var1 = var1.MessageEmbedTypes;
            var1 = var1.AUTO_MODERATION_MESSAGE;
            var1 = var3 !== var1;
            if(!var1) { _fun0001_ip = 84; continue _fun0001 }
 51:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.MessageEmbedTypes;
            var2 = var2.AUTO_MODERATION_NOTIFICATION;
            var1 = var3 !== var2;
 84:
            return var1;
        }
    };
    var3['isNotAutomodEmbed'] = var2;
    return var1;
})();