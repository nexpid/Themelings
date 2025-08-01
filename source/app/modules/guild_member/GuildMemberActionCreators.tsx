// app/modules/guild_member/GuildMemberActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member/GuildMemberActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function updateGuildSelfMember(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var6 = arg2;
            var8 = arguments[2];
            var1 = undefined;
            if(!(var8 === var1)) { _fun0001_ip = 17; continue _fun0001 }
 15:
            var8 = false;
 17:
            var4 = _closure1_slot3;
            var3 = var4.isFullServerPreview;
            var3 = var3.bind(var4)(var5);
            if(var3) { _fun0001_ip = 186; continue _fun0001 }
 41:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 3;
            var3 = var7[var3];
            var9 = var4.bind(var1)(var3);
            var4 = var9.dispatch;
            var3 = {};
            var10 = 'GUILD_MEMBER_UPDATE_LOCAL';
            var3['type'] = var10;
            var3['guildId'] = var5;
            var10 = var6.roles;
            var3['roles'] = var10;
            var10 = var6.flags;
            var3['flags'] = var10;
            var3 = var4.bind(var9)(var3);
            var4 = _closure1_slot0;
            var3 = 4;
            var3 = var7[var3];
            var3 = var4.bind(var1)(var3);
            var7 = var3.HTTP;
            var4 = var7.patch;
            var3 = {};
            var10 = _closure1_slot4;
            var9 = var10.SET_GUILD_MEMBER;
            var9 = var9.bind(var10)(var5);
            var3['url'] = var9;
            var3['body'] = var6;
            var9 = !var8;
            var8 = !var9;
            if(!var9) { _fun0001_ip = 168; continue _fun0001 }
 166:
            var8 = undefined;
 168:
            var3['oldFormErrors'] = var8;
            var8 = false;
            var3['rejectWithError'] = var8;
            var3 = var4.bind(var7)(var3);
            return var3;
 186:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 2;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.updateImpersonatedData;
            var2 = {};
            var2['memberOptions'] = var6;
            var2 = var3.bind(var4)(var5, var2);
            return var1;
        }
    };
    var3['updateGuildSelfMember'] = var2;
    return var1;
})();