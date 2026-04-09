// app/modules/instant_invite/DefaultInviteExpirationExperiments.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var10;
    var4 = function getDefaultInviteExpiration(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guild;
            var2 = var1.experimentConfig;
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var4.features;
            var6 = var7.has;
            var5 = _closure1_slot5;
            var5 = var5.HUB;
            var5 = var6.bind(var7)(var5);
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            if(!(var3 == var2)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var5 = var3 == var4;
            var10 = undefined;
            if(var5) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var10 = var4.id;
case 7:
            if(!(var3 == var10)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var10 = _closure1_slot4;
case 9:
            var7 = _closure1_slot7;
            var5 = var7.getCurrentConfig;
            var4 = {};
            var4['guildId'] = var10;
            var9 = 'getDefaultInviteExpiration';
            var4['location'] = var9;
            var5 = var5.bind(var7)(var4);
            var7 = var5.defaultMaxAge;
            var4 = _closure1_slot6;
            if(!(var7 === var4)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var8 = _closure1_slot8;
            var7 = var8.getCurrentConfig;
            var4 = {};
            var4['guildId'] = var10;
            var4['location'] = var9;
            var4 = var7.bind(var8)(var4);
            var4 = var4.defaultMaxAge;
            if(!(var3 == var4)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var4 = _closure1_slot6;
case 13:
            _fun0001_ip = 15; continue _fun0001;
case 11:
            var4 = var5.defaultMaxAge;
case 15:
            return var4;
case 5:
            var2 = var2.defaultMaxAge;
            if(!(var3 == var2)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = _closure1_slot6;
case 16:
            return var2;
case 4:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.INVITE_OPTIONS_FOREVER;
            var1 = var1.value;
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var5);
    var1 = 0;
    var5 = var10[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var10[var5];
    var5 = var9.bind(var1)(var5);
    var7 = var5.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot4 = var7;
    var5 = var5.GuildFeatures;
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var10[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.INVITE_OPTIONS_7_DAYS;
    var7 = var5.value;
    var _closure1_slot6 = var7;
    var5 = 3;
    var6 = var10[var5];
    var11 = var9.bind(var1)(var6);
    var8 = var11.createExperiment;
    var6 = {'kind': 'guild', 'id': '2025-08_default_invite_expiration_guild', 'label': 'Default Invite Expiration Guild'};
    var12 = {};
    var13 = 604800;
    var12['defaultMaxAge'] = var13;
    var6['defaultConfig'] = var12;
    var14 = {'id': 1, 'label': '14 days'};
    var12 = {};
    var15 = 1209600;
    var12['defaultMaxAge'] = var15;
    var14['config'] = var12;
    var12 = new Array(3);
    var12[0] = var14;
    var15 = {'id': 2, 'label': '30 days'};
    var16 = {};
    var14 = 2592000;
    var16['defaultMaxAge'] = var14;
    var15['config'] = var16;
    var12[1] = var15;
    var15 = {'id': 3, 'label': '60 days'};
    var16 = {};
    var17 = 5184000;
    var16['defaultMaxAge'] = var17;
    var15['config'] = var16;
    var12[2] = var15;
    var6['treatments'] = var12;
    var6 = var8.bind(var11)(var6);
    var _closure1_slot7 = var6;
    var5 = var10[var5];
    var11 = var9.bind(var1)(var5);
    var8 = var11.createExperiment;
    var5 = {'kind': 'guild', 'id': '2026-04_default_invite_expiration_guild_web', 'label': 'Default Invite Expiration Guild Web'};
    var12 = {};
    var12['defaultMaxAge'] = var13;
    var5['defaultConfig'] = var12;
    var13 = {'id': 1, 'label': '30 days'};
    var12 = {};
    var12['defaultMaxAge'] = var14;
    var13['config'] = var12;
    var12 = new Array(1);
    var12[0] = var13;
    var5['treatments'] = var12;
    var5 = var8.bind(var11)(var5);
    var _closure1_slot8 = var5;
    var8 = 5;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/instant_invite/DefaultInviteExpirationExperiments.tsx';
    var8 = var9.bind(var10)(var8);
    var3['DEFAULT_MAX_AGE'] = var7;
    var3['DefaultInviteExpirationGuildExperiment'] = var6;
    var3['DefaultInviteExpirationGuildWebExperiment'] = var5;
    var3['getDefaultInviteExpiration'] = var4;
    var4 = function useDefaultInviteExpiration(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var _closure2_slot0 = var3;
            var9 = var1.location;
            var1 = null;
            var10 = var3;
            if(!(var1 == var10)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var10 = _closure1_slot4;
case 18:
            var7 = _closure1_slot7;
            var5 = var7.useExperiment;
            var4 = {};
            var4['guildId'] = var10;
            var4['location'] = var9;
            var7 = var5.bind(var7)(var4);
            var8 = _closure1_slot8;
            var5 = var8.useExperiment;
            var4 = {};
            var4['guildId'] = var10;
            var4['location'] = var9;
            var5 = var5.bind(var8)(var4);
            var8 = var1 == var7;
            var4 = undefined;
            var9 = undefined;
            if(var8) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var9 = var7.defaultMaxAge;
case 20:
            var8 = _closure1_slot6;
            if(!(var9 !== var8)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var5 = var7;
case 22:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 4;
            var7 = var9[var7];
            var9 = var8.bind(var4)(var7);
            var8 = var9.useStateFromStores;
            var10 = _closure1_slot3;
            var7 = new Array(1);
            var7[0] = var10;
            var6 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var8.bind(var9)(var7, var6);
            var3 = var1 == var3;
            var1 = null;
            if(var3) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var3 = _closure1_slot9;
            var2 = {};
            var2['guild'] = var6;
            var2['experimentConfig'] = var5;
            var1 = var3.bind(var4)(var2);
case 24:
            return var1;
        }
    };
    var3['useDefaultInviteExpiration'] = var4;
    var2 = function useMaxAgeOptions(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var8 = var1.guildId;
            var7 = var1.location;
            var6 = null;
            if(!(var6 == var8)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var8 = _closure1_slot4;
case 26:
            var4 = _closure1_slot7;
            var3 = var4.useExperiment;
            var2 = {};
            var2['guildId'] = var8;
            var2['location'] = var7;
            var2 = var3.bind(var4)(var2);
            var5 = _closure1_slot8;
            var4 = var5.useExperiment;
            var3 = {};
            var3['guildId'] = var8;
            var3['location'] = var7;
            var4 = var4.bind(var5)(var3);
            var3 = var6 == var2;
            var5 = undefined;
            var7 = undefined;
            if(var3) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var7 = var2.defaultMaxAge;
case 28:
            var3 = _closure1_slot6;
            if(!(var7 !== var3)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var4 = var2;
case 30:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 2;
            var1 = var3[var1];
            var3 = var2.bind(var5)(var1);
            var2 = var3.getMaxAgeOptions;
            var1 = {};
            var6 = var6 == var4;
            var5 = undefined;
            if(var6) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var5 = var4.defaultMaxAge;
case 32:
            var4 = new Array(1);
            var4[0] = var5;
            var1['includeExperimentalValues'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['useMaxAgeOptions'] = var2;
    return var1;
})();