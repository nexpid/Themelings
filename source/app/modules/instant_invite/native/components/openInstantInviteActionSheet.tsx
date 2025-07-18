// app/modules/instant_invite/native/components/openInstantInviteActionSheet.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 4;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/instant_invite/native/components/openInstantInviteActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function openInstantInviteActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 0;
            var4 = var3[var1];
            var1 = undefined;
            var7 = var5.bind(var1)(var4);
            var6 = var7.openLazy;
            var5 = _closure1_slot0;
            var4 = 2;
            var4 = var3[var4];
            var5 = var5.bind(var1)(var4);
            var4 = 1;
            var4 = var3[var4];
            var3 = var3.paths;
            var5 = var5.bind(var1)(var4, var3);
            var9 = var2.vanityURLCode;
            var3 = null;
            if(!(var3 == var9)) { _fun0001_ip = 89; continue _fun0001 }
 79:
            var3 = var2.channel;
            var9 = var3.id;
 89:
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = 'InstantInviteActionSheet-';
            var4 = var4.bind(var3)(var9);
            var3 = {};
            var14 = var3;
            var13 = var2;
            var9 = copyDataProperties(var14, var13);
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 3;
            var8 = var10[var8];
            var8 = var9.bind(var1)(var8);
            var8 = var8.ImpressionNames;
            var9 = var8.GUILD_INVITE;
            var8 = 'impressionName';
            var3[var8] = var9;
            var9 = {};
            var8 = var2.channel;
            var8 = var8.id;
            var9['invite_channel_id'] = var8;
            var8 = var2.channel;
            var8 = var8.guild_id;
            var9['invite_guild_id'] = var8;
            var8 = 'impressionProperties';
            var3[var8] = var9;
            var11 = var2.stackingBehavior;
            var15 = var7;
            var14 = var5;
            var13 = var4;
            var12 = var3;
            var2 = var15[var6](var14, var13, var12, var11, var10);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();