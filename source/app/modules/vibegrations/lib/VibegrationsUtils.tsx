// app/modules/vibegrations/lib/VibegrationsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function vibegrationsAppIdFromTopic(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.startsWith;
            var3 = _closure1_slot7;
            var3 = var4.bind(var5)(var3);
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var4 = var5.slice;
            var3 = 28;
            var3 = var4.bind(var5)(var3);
            var4 = _closure1_slot8;
            var2 = var4.test;
            var4 = var2.bind(var4)(var3);
            var2 = null;
            if(!var4) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var2 = var3;
case 5:
            return var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var1 = function isVibegrationsChannelCandidateInternal(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var2 = null;
            var1 = var2 != var4;
            if(!var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var6 = var4.type;
            var5 = _closure1_slot5;
            var5 = var5.GUILD_TEXT;
            var1 = var6 === var5;
case 7:
            if(!var1) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var6 = _closure1_slot9;
            var5 = var4.topic;
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var1 = var2 != var4;
case 9:
            if(!var1) { _fun0002_ip = 11; continue _fun0002 }
case 2:
            var2 = var2 != var3;
            if(!var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var5 = var3.features;
            var4 = var5.has;
            var3 = _closure1_slot6;
            var3 = var3.INTERNAL_EMPLOYEE_ONLY;
            var2 = var4.bind(var5)(var3);
case 12:
            var1 = !var2;
case 11:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var8 = var5.Permissions;
    var _closure1_slot4 = var8;
    var8 = var5.ChannelTypes;
    var _closure1_slot5 = var8;
    var5 = var5.GuildFeatures;
    var _closure1_slot6 = var5;
    var5 = 'vibegrations_application_id=';
    var _closure1_slot7 = var5;
    var5 = /^\d{17,20}$/;
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/vibegrations/lib/VibegrationsUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['vibegrationsAppIdFromTopic'] = var4;
    var4 = function vibegrationsTopicForApp(arg1) {
        var4 = _closure1_slot7;
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '';
        var1 = arg1;
        var1 = var3.bind(var2)(var4, var1);
        return var1;
    };
    var3['vibegrationsTopicForApp'] = var4;
    var4 = function canManageVibegrations(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 3;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.isVibegrationsGuildEnabled;
            var1 = {};
            var6 = var3.id;
            var1['guildId'] = var6;
            var6 = arg2;
            var1['location'] = var6;
            var1 = var4.bind(var5)(var1);
            if(!var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var6 = _closure1_slot3;
            var5 = var6.can;
            var4 = _closure1_slot4;
            var4 = var4.MANAGE_CHANNELS;
            var1 = var5.bind(var6)(var4, var3);
case 14:
            if(!var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var6 = _closure1_slot3;
            var5 = var6.can;
            var4 = _closure1_slot4;
            var4 = var4.MANAGE_GUILD;
            var1 = var5.bind(var6)(var4, var3);
case 16:
            if(!var1) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var4 = var3.features;
            var3 = var4.has;
            var2 = _closure1_slot6;
            var2 = var2.INTERNAL_EMPLOYEE_ONLY;
            var2 = var3.bind(var4)(var2);
            var1 = !var2;
case 18:
            return var1;
        }
    };
    var3['canManageVibegrations'] = var4;
    var4 = function useCanManageVibegrations(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 4;
            var3 = var7[var3];
            var5 = undefined;
            var10 = var6.bind(var5)(var3);
            var9 = var10.useStateFromStores;
            var3 = _closure1_slot3;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = new Array(1);
            var3[0] = var4;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var6 = _closure1_slot3;
                    var5 = var6.can;
                    var1 = _closure1_slot4;
                    var4 = var1.MANAGE_CHANNELS;
                    var1 = _closure2_slot0;
                    var1 = var5.bind(var6)(var4, var1);
                    if(!var1) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var5 = _closure1_slot3;
                    var4 = var5.can;
                    var3 = _closure1_slot4;
                    var3 = var3.MANAGE_GUILD;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
case 20:
                    return var1;
                }
            };
            var3 = var9.bind(var10)(var8, var1, var3);
            var1 = 3;
            var1 = var7[var1];
            var6 = var6.bind(var5)(var1);
            var5 = var6.useIsVibegrationsGuildEnabled;
            var1 = {};
            var7 = var4.id;
            var1['guildId'] = var7;
            var7 = arg2;
            var1['location'] = var7;
            var1 = var5.bind(var6)(var1);
            var5 = var4.features;
            var4 = var5.has;
            var2 = _closure1_slot6;
            var2 = var2.INTERNAL_EMPLOYEE_ONLY;
            var2 = var4.bind(var5)(var2);
            if(!var1) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var1 = var3;
case 22:
            if(!var1) { _fun0004_ip = 24; continue _fun0004 }
case 18:
            var1 = !var2;
case 24:
            return var1;
        }
    };
    var3['useCanManageVibegrations'] = var4;
    var4 = function isVibegrationsChannelCandidate(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg1;
            var3 = _closure1_slot10;
            var8 = _closure1_slot2;
            var4 = var8.getGuild;
            var7 = null;
            var9 = var7 == var6;
            var5 = undefined;
            var1 = undefined;
            if(var9) { _fun0006_ip = 25; continue _fun0006 }
case 26:
            var1 = var6.guild_id;
case 25:
            var1 = var4.bind(var8)(var1);
            var1 = var3.bind(var5)(var6, var1);
            if(!var1) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 3;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.isVibegrationsGuildEnabled;
            var2 = {};
            var7 = var7 == var6;
            var5 = undefined;
            if(var7) { _fun0006_ip = 29; continue _fun0006 }
case 17:
            var5 = var6.guild_id;
case 29:
            var2['guildId'] = var5;
            var5 = arg2;
            var2['location'] = var5;
            var1 = var3.bind(var4)(var2);
case 27:
            return var1;
        }
    };
    var3['isVibegrationsChannelCandidate'] = var4;
    var2 = function useIsVibegrationsChannelCandidate(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 4;
            var3 = var7[var3];
            var4 = undefined;
            var9 = var6.bind(var4)(var3);
            var8 = var9.useStateFromStores;
            var10 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var10;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure1_slot2;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0008_ip = 10; continue _fun0008 }
case 30:
                    var4 = _closure2_slot0;
                    var1 = var4.guild_id;
case 10:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var3 = var8.bind(var9)(var3, var2);
            var2 = 3;
            var2 = var7[var2];
            var7 = var6.bind(var4)(var2);
            var6 = var7.useIsVibegrationsGuildEnabled;
            var2 = {};
            var8 = null;
            var9 = var8 == var5;
            var8 = undefined;
            if(var9) { _fun0007_ip = 31; continue _fun0007 }
case 32:
            var8 = var5.guild_id;
case 31:
            var2['guildId'] = var8;
            var8 = arg2;
            var2['location'] = var8;
            var2 = var6.bind(var7)(var2);
            var1 = _closure1_slot10;
            var1 = var1.bind(var4)(var5, var3);
            if(!var1) { _fun0007_ip = 33; continue _fun0007 }
case 34:
            var1 = var2;
case 33:
            return var1;
        }
    };
    var3['useIsVibegrationsChannelCandidate'] = var2;
    return var1;
})();