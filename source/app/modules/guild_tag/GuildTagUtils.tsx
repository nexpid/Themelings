// app/modules/guild_tag/GuildTagUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function getUserPrimaryGuild(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 18; continue _fun0001 }
 9:
            var1 = var3.identityEnabled;
            if(var1) { _fun0001_ip = 22; continue _fun0001 }
 18:
            var1 = {};
            _fun0001_ip = 57; continue _fun0001;
 22:
            var2 = {};
            var4 = var3.identityGuildId;
            var2['guildId'] = var4;
            var4 = var3.tag;
            var2['tag'] = var4;
            var3 = var3.badge;
            var2['badge'] = var3;
            var1 = var2;
 57:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.GuildTagBadgeMediaProxySizes;
    var8 = var5.GuildTagBadgeMediaProxySizesMobile;
    var _closure1_slot4 = var8;
    var5 = var5.GuildTagBadgeSize;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.GuildFeatures;
    var _closure1_slot6 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_tag/GuildTagUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function guildHasTag(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var2 = null;
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0002_ip = 34; continue _fun0002 }
 14:
            var3 = var3.profile;
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0002_ip = 34; continue _fun0002 }
 29:
            var1 = var3.tag;
 34:
            var1 = var2 != var1;
            return var1;
        }
    };
    var3['guildHasTag'] = var5;
    var5 = function guildSupportsTags(arg1) {
        var1 = arg1;
        var3 = var1.features;
        var2 = var3.has;
        var1 = _closure1_slot6;
        var1 = var1.GUILD_TAGS;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['guildSupportsTags'] = var5;
    var5 = function getGuildTagBadgeUrl(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var9 = arg2;
            var3 = arguments[2];
            var2 = undefined;
            if(!(var3 === var2)) { _fun0003_ip = 25; continue _fun0003 }
 12:
            var1 = _closure1_slot5;
            var3 = var1.SIZE_12;
 25:
            var4 = null;
            if(!(var4 != var9)) { _fun0003_ip = 55; continue _fun0003 }
 31:
            var1 = global;
            var5 = var1.window;
            var5 = var5.GLOBAL_ENV;
            var8 = var5.CDN_HOST;
            if(!(var4 == var8)) { _fun0003_ip = 57; continue _fun0003 }
 55:
            return var2;
 57:
            var2 = _closure1_slot4;
            var10 = var2[var3];
            var1 = var1.HermesInternal;
            var6 = var1.concat;
            var17 = 'https://';
            var15 = '/clan-badges/';
            var14 = arg1;
            var13 = '/';
            var11 = '.png?size=';
            var16 = var8;
            var12 = var9;
            var1 = var17[var6](var16, var15, var14, var13, var12, var11, var10, var9);
            return var1;
        }
    };
    var3['getGuildTagBadgeUrl'] = var5;
    var3['getUserPrimaryGuild'] = var4;
    var4 = function useShouldDisplayGuildTag(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var9 = arg1;
            var10 = arg2;
            var _closure2_slot0 = var9;
            var _closure2_slot1 = var10;
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 4;
            var6 = var7[var3];
            var5 = undefined;
            var13 = var4.bind(var5)(var6);
            var12 = var13.useStateFromStores;
            var6 = _closure1_slot3;
            var11 = new Array(1);
            var11[0] = var6;
            var8 = new Array(1);
            var8[0] = var9;
            var6 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var12.bind(var13)(var11, var6, var8);
            var3 = var7[var3];
            var8 = var4.bind(var5)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot2;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = new Array(2);
            var3[0] = var10;
            var3[1] = var9;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0005_ip = 83; continue _fun0005 }
 13:
                    var2 = _closure2_slot0;
                    if(!(var1 != var2)) { _fun0005_ip = 83; continue _fun0005 }
 21:
                    var6 = _closure1_slot2;
                    var5 = var6.getMember;
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot0;
                    var4 = var5.bind(var6)(var4, var3);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.hasAutomodQuarantinedProfile;
                    var2 = var2.bind(var3)(var4);
                    return var2;
 83:
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var4, var2, var3);
            var3 = _closure1_slot7;
            var4 = null;
            var7 = var4 == var6;
            var1 = undefined;
            if(var7) { _fun0004_ip = 149; continue _fun0004 }
 143:
            var1 = var6.primaryGuild;
 149:
            var1 = var3.bind(var5)(var1);
            var3 = var1.tag;
            var1 = var1.guildId;
            var1 = var4 != var1;
            if(!var1) { _fun0004_ip = 175; continue _fun0004 }
 171:
            var1 = var4 != var3;
 175:
            if(!var1) { _fun0004_ip = 181; continue _fun0004 }
 178:
            var1 = !var2;
 181:
            return var1;
        }
    };
    var3['useShouldDisplayGuildTag'] = var4;
    var2 = function shouldDisplayGuildTag(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var8 = arg1;
            var7 = arg2;
            var2 = _closure1_slot3;
            var1 = var2.getUser;
            var5 = var1.bind(var2)(var8);
            var2 = _closure1_slot7;
            var4 = null;
            var9 = var4 == var5;
            var6 = undefined;
            var1 = undefined;
            if(var9) { _fun0006_ip = 47; continue _fun0006 }
 41:
            var1 = var5.primaryGuild;
 47:
            var1 = var2.bind(var6)(var1);
            var2 = var1.tag;
            var1 = var1.guildId;
            var1 = var4 != var1;
            if(!var1) { _fun0006_ip = 73; continue _fun0006 }
 69:
            var1 = var4 != var2;
 73:
            if(!var1) { _fun0006_ip = 140; continue _fun0006 }
 76:
            var2 = var4 != var7;
            if(!var2) { _fun0006_ip = 87; continue _fun0006 }
 83:
            var2 = var4 != var8;
 87:
            if(!var2) { _fun0006_ip = 137; continue _fun0006 }
 90:
            var5 = _closure1_slot0;
            var9 = _closure1_slot1;
            var4 = 5;
            var4 = var9[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.hasAutomodQuarantinedProfile;
            var6 = _closure1_slot2;
            var3 = var6.getMember;
            var3 = var3.bind(var6)(var7, var8);
            var2 = var4.bind(var5)(var3);
 137:
            var1 = !var2;
 140:
            return var1;
        }
    };
    var3['shouldDisplayGuildTag'] = var2;
    return var1;
})();