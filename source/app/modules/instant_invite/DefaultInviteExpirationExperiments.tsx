// app/modules/instant_invite/DefaultInviteExpirationExperiments.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var9;
    var4 = function getDefaultInviteExpiration(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.guild;
            var2 = var1.experimentConfig;
            var3 = null;
            if(!(var3 != var9)) { _fun0001_ip = 52; continue _fun0001 }
 20:
            var6 = var9.features;
            var5 = var6.has;
            var4 = _closure1_slot5;
            var4 = var4.HUB;
            var4 = var5.bind(var6)(var4);
            if(var4) { _fun0001_ip = 129; continue _fun0001 }
 52:
            if(!(var3 == var2)) { _fun0001_ip = 110; continue _fun0001 }
 56:
            var6 = _closure1_slot7;
            var5 = var6.getCurrentConfig;
            var4 = {};
            var10 = var3 == var9;
            var7 = undefined;
            if(var10) { _fun0001_ip = 85; continue _fun0001 }
 80:
            var7 = var9.id;
 85:
            if(!(var3 == var7)) { _fun0001_ip = 93; continue _fun0001 }
 89:
            var7 = _closure1_slot4;
 93:
            var4['guildId'] = var7;
            var7 = 'getDefaultInviteExpiration';
            var4['location'] = var7;
            var2 = var5.bind(var6)(var4);
 110:
            var2 = var2.defaultMaxAge;
            if(!(var3 == var2)) { _fun0001_ip = 127; continue _fun0001 }
 120:
            var2 = _closure1_slot6;
 127:
            return var2;
 129:
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
    var _closure1_slot8 = var4;
    var1 = global;
    var10 = var1.Object;
    var7 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var9[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var7 = var5.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot4 = var7;
    var5 = var5.GuildFeatures;
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var9[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.INVITE_OPTIONS_7_DAYS;
    var6 = var5.value;
    var _closure1_slot6 = var6;
    var5 = 3;
    var5 = var9[var5];
    var10 = var8.bind(var1)(var5);
    var7 = var10.createExperiment;
    var5 = {'kind': 'guild', 'id': '2025-08_default_invite_expiration_guild', 'label': 'Default Invite Expiration Guild'};
    var11 = {};
    var12 = 604800;
    var11['defaultMaxAge'] = var12;
    var5['defaultConfig'] = var11;
    var12 = {'id': 1, 'label': '14 days'};
    var11 = {};
    var13 = 1209600;
    var11['defaultMaxAge'] = var13;
    var12['config'] = var11;
    var11 = new Array(3);
    var11[0] = var12;
    var12 = {'id': 2, 'label': '30 days'};
    var13 = {};
    var14 = 2592000;
    var13['defaultMaxAge'] = var14;
    var12['config'] = var13;
    var11[1] = var12;
    var12 = {'id': 3, 'label': '60 days'};
    var13 = {};
    var14 = 5184000;
    var13['defaultMaxAge'] = var14;
    var12['config'] = var13;
    var11[2] = var12;
    var5['treatments'] = var11;
    var5 = var7.bind(var10)(var5);
    var _closure1_slot7 = var5;
    var7 = 5;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/instant_invite/DefaultInviteExpirationExperiments.tsx';
    var7 = var8.bind(var9)(var7);
    var3['DEFAULT_MAX_AGE'] = var6;
    var3['DefaultInviteExpirationGuildExperiment'] = var5;
    var3['getDefaultInviteExpiration'] = var4;
    var4 = function useDefaultInviteExpiration(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var _closure2_slot0 = var3;
            var8 = var1.location;
            var7 = _closure1_slot7;
            var5 = var7.useExperiment;
            var4 = {};
            var1 = null;
            var9 = var3;
            if(!(var1 == var9)) { _fun0002_ip = 47; continue _fun0002 }
 43:
            var9 = _closure1_slot4;
 47:
            var4['guildId'] = var9;
            var4['location'] = var8;
            var5 = var5.bind(var7)(var4);
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 4;
            var7 = var7[var4];
            var4 = undefined;
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
            if(var3) { _fun0002_ip = 141; continue _fun0002 }
 121:
            var3 = _closure1_slot8;
            var2 = {};
            var2['guild'] = var6;
            var2['experimentConfig'] = var5;
            var1 = var3.bind(var4)(var2);
 141:
            return var1;
        }
    };
    var3['useDefaultInviteExpiration'] = var4;
    var2 = function useMaxAgeOptions(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var7 = var1.guildId;
            var5 = var1.location;
            var4 = _closure1_slot7;
            var3 = var4.useExperiment;
            var2 = {};
            var6 = null;
            if(!(var6 == var7)) { _fun0003_ip = 38; continue _fun0003 }
 34:
            var7 = _closure1_slot4;
 38:
            var2['guildId'] = var7;
            var2['location'] = var5;
            var4 = var3.bind(var4)(var2);
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 2;
            var1 = var3[var1];
            var5 = undefined;
            var3 = var2.bind(var5)(var1);
            var2 = var3.getMaxAgeOptions;
            var1 = {};
            var6 = var6 == var4;
            if(var6) { _fun0003_ip = 94; continue _fun0003 }
 88:
            var5 = var4.defaultMaxAge;
 94:
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