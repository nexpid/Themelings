// app/modules/communities/invites_behavior/useDefaultInviteExpiration.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function getDefaultInviteExpiration(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var4 = var1.guild;
            var2 = var1.experimentConfig;
            var1 = null;
            if(!(var1 == var2)) { _fun0001_ip = 98; continue _fun0001 }
 20:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 2;
            var3 = var6[var3];
            var7 = undefined;
            var3 = var5.bind(var7)(var3);
            var6 = var3.CommunityEndlessInvitesExperiment;
            var5 = var6.getCurrentConfig;
            var3 = {};
            var9 = var1 == var4;
            if(var9) { _fun0001_ip = 71; continue _fun0001 }
 66:
            var7 = var4.id;
 71:
            if(!(var1 == var7)) { _fun0001_ip = 79; continue _fun0001 }
 75:
            var7 = _closure1_slot4;
 79:
            var3['guildId'] = var7;
            var7 = '6798be_1';
            var3['location'] = var7;
            var2 = var5.bind(var6)(var3);
 98:
            var2 = var2.defaultInvitesToNeverExpire;
            if(!(var1 != var4)) { _fun0001_ip = 140; continue _fun0001 }
 108:
            var6 = var4.features;
            var5 = var6.has;
            var3 = _closure1_slot5;
            var3 = var3.HUB;
            var3 = var5.bind(var6)(var3);
            if(var3) { _fun0001_ip = 188; continue _fun0001 }
 140:
            var5 = var1 != var4;
            var1 = undefined;
            if(!var5) { _fun0001_ip = 224; continue _fun0001 }
 149:
            var6 = var4.features;
            var5 = var6.has;
            var4 = _closure1_slot5;
            var4 = var4.COMMUNITY;
            var4 = var5.bind(var6)(var4);
            var1 = undefined;
            if(!var4) { _fun0001_ip = 224; continue _fun0001 }
 183:
            var1 = undefined;
            if(!var2) { _fun0001_ip = 224; continue _fun0001 }
 188:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.INVITE_OPTIONS_FOREVER;
            var1 = var2.value;
 224:
            return var1;
        }
    };
    var _closure1_slot6 = var2;
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
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot4 = var8;
    var5 = var5.GuildFeatures;
    var _closure1_slot5 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/communities/invites_behavior/useDefaultInviteExpiration.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useDefaultInviteExpiration(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var _closure2_slot0 = var3;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var5.bind(var4)(var1);
            var8 = var1.CommunityEndlessInvitesExperiment;
            var7 = var8.useExperiment;
            var5 = {};
            var1 = null;
            var9 = var3;
            if(!(var1 == var9)) { _fun0002_ip = 66; continue _fun0002 }
 62:
            var9 = _closure1_slot4;
 66:
            var5['guildId'] = var9;
            var9 = '6798be_2';
            var5['location'] = var9;
            var5 = var7.bind(var8)(var5);
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
            var1 = var1 != var3;
            if(!var1) { _fun0002_ip = 162; continue _fun0002 }
 142:
            var3 = _closure1_slot6;
            var2 = {};
            var2['guild'] = var6;
            var2['experimentConfig'] = var5;
            var1 = var3.bind(var4)(var2);
 162:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['getDefaultInviteExpiration'] = var2;
    return var1;
})();