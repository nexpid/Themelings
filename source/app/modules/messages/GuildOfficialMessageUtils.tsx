// app/modules/messages/GuildOfficialMessageUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
    var7 = function isGuildOfficialMessagesEnabled(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.features;
            var3 = var4.has;
            var2 = _closure1_slot7;
            var2 = var2.VERIFIED;
            var1 = var3.bind(var4)(var2);
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.getCurrentConfig;
            var2 = {};
            var5 = var5.id;
            var2['guildId'] = var5;
            var5 = arg2;
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var1 = var2.enabled;
case 4:
            return var1;
        }
    };
    var _closure1_slot10 = var7;
    var6 = function useIsGuildOfficialMessagesEnabled(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var7 = undefined;
            var9 = var4.bind(var7)(var2);
            var6 = var9.useStateFromStores;
            var2 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var4 = _closure1_slot3;
                    var3 = var4.getGuild;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 6:
                    return var1;
                }
            };
            var4 = var6.bind(var9)(var4, var1, var2);
            var2 = _closure1_slot1;
            var1 = 8;
            var1 = var5[var1];
            var6 = var2.bind(var7)(var1);
            var5 = var6.useExperiment;
            var2 = {};
            var1 = null;
            var9 = var1 != var8;
            if(!var9) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var7 = var8;
case 8:
            var2['guildId'] = var7;
            var7 = arg2;
            var2['location'] = var7;
            var2 = var5.bind(var6)(var2);
            var2 = var2.enabled;
            var1 = var1 != var4;
            if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var5 = var4.features;
            var4 = var5.has;
            var3 = _closure1_slot7;
            var3 = var3.VERIFIED;
            var1 = var4.bind(var5)(var3);
case 10:
            if(!var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var1 = var2;
case 12:
            return var1;
        }
    };
    var _closure1_slot11 = var6;
    var5 = function canManageGuildOfficialMessages(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = _closure1_slot10;
            var4 = undefined;
            var3 = arg1;
            var1 = arg3;
            var1 = var5.bind(var4)(var3, var1);
            if(!var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var5 = _closure1_slot4;
            var4 = var5.can;
            var2 = _closure1_slot9;
            var3 = var2.MANAGE_OFFICIAL_MESSAGES;
            var2 = arg2;
            var1 = var4.bind(var5)(var3, var2);
case 14:
            return var1;
        }
    };
    var _closure1_slot12 = var5;
    var4 = function useCanManageGuildOfficialMessages(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var7 = arg2;
            var _closure2_slot0 = var7;
            var5 = _closure1_slot11;
            var6 = undefined;
            var4 = arg1;
            var1 = arg3;
            var1 = var5.bind(var6)(var4, var1);
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 9;
            var4 = var8[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = new Array(1);
            var3[0] = var7;
            var2 = function() {
                var4 = _closure1_slot4;
                var3 = var4.can;
                var1 = _closure1_slot9;
                var2 = var1.MANAGE_OFFICIAL_MESSAGES;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var5.bind(var6)(var4, var2, var3);
            if(!var1) { _fun0005_ip = 16; continue _fun0005 }
case 17:
            var1 = var2;
case 16:
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var1 = function isChannelOfficialMessageEligible(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0006_ip = 18; continue _fun0006 }
case 3:
            var3 = var2.isPrivate;
            var3 = var3.bind(var2)();
            var1 = !var3;
case 18:
            if(!var1) { _fun0006_ip = 19; continue _fun0006 }
case 20:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 10;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.getIsActiveChannelOrUnarchivableThread;
            var1 = var3.bind(var4)(var2);
case 19:
            if(!var1) { _fun0006_ip = 21; continue _fun0006 }
case 22:
            var4 = var2.type;
            var3 = _closure1_slot6;
            var3 = var3.GUILD_VOICE;
            var1 = var4 !== var3;
case 21:
            if(!var1) { _fun0006_ip = 23; continue _fun0006 }
case 24:
            var3 = var2.type;
            var2 = _closure1_slot6;
            var2 = var2.GUILD_STAGE_VOICE;
            var1 = var3 !== var2;
case 23:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var8);
    var1 = 0;
    var8 = var10[var1];
    var1 = undefined;
    var8 = var11.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.GUILD_OFFICIAL_HIGHLIGHT_ALPHA;
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var11 = var8.ChannelTypes;
    var _closure1_slot6 = var11;
    var11 = var8.GuildFeatures;
    var _closure1_slot7 = var11;
    var11 = var8.MessageFlags;
    var _closure1_slot8 = var11;
    var8 = var8.Permissions;
    var _closure1_slot9 = var8;
    var8 = 12;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/messages/GuildOfficialMessageUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function getAccessibleGuildOfficialTextColor(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arguments[2];
            var13 = arguments[3];
            var7 = undefined;
            if(!(var4 === var7)) { _fun0007_ip = 25; continue _fun0007 }
case 3:
            var4 = 1;
case 25:
            if(!(var13 === var7)) { _fun0007_ip = 26; continue _fun0007 }
case 27:
            var13 = _closure1_slot5;
case 26:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 4;
            var2 = var10[var2];
            var5 = var3.bind(var7)(var2);
            var3 = var5.int2hex;
            var2 = arg1;
            var12 = var3.bind(var5)(var2);
            var8 = _closure1_slot1;
            var3 = 5;
            var2 = var10[var3];
            var5 = var8.bind(var7)(var2);
            var2 = arg2;
            var5 = var5.bind(var7)(var2);
            var2 = var10[var3];
            var2 = var8.bind(var7)(var2);
            var9 = var2.bind(var7)(var12);
            var2 = var10[var3];
            var11 = var8.bind(var7)(var2);
            var6 = var11.mix;
            var14 = 'rgb';
            var18 = var11;
            var17 = var5;
            var16 = var12;
            var15 = var13;
            var2 = var18[var6](var17, var16, var15, var14, var13);
            var6 = var10[var3];
            var11 = var8.bind(var7)(var6);
            var6 = var11.contrast;
            var6 = var6.bind(var11)(var9, var2);
            var3 = var10[var3];
            var8 = var8.bind(var7)(var3);
            var3 = var8.contrast;
            var3 = var3.bind(var8)(var9, var5);
            if(!(var6 < var3)) { _fun0007_ip = 28; continue _fun0007 }
case 29:
            var5 = var2;
case 28:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 6;
            var1 = var8[var1];
            var3 = var6.bind(var7)(var1);
            var2 = var3.getAccessibleForegroundColor;
            var1 = {};
            var1['foreground'] = var9;
            var1['background'] = var5;
            var5 = 7;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.WCAGContrastRatios;
            var5 = var5.Text;
            var1['ratio'] = var5;
            var1['saturationFactor'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getAccessibleGuildOfficialTextColor'] = var8;
    var3['isGuildOfficialMessagesEnabled'] = var7;
    var3['useIsGuildOfficialMessagesEnabled'] = var6;
    var3['canManageGuildOfficialMessages'] = var5;
    var3['useCanManageGuildOfficialMessages'] = var4;
    var4 = function useCanToggleGuildOfficialMessages(arg1, arg2, arg3) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var7 = arg1;
            var5 = arg2;
            var4 = _closure1_slot13;
            var1 = var5.guild_id;
            var2 = null;
            var8 = var2 != var1;
            var6 = undefined;
            var2 = undefined;
            if(!var8) { _fun0008_ip = 30; continue _fun0008 }
case 31:
            var2 = var1;
case 30:
            var1 = arg3;
            var1 = var4.bind(var6)(var2, var5, var1);
            var1 = !var1;
            if(var1) { _fun0008_ip = 32; continue _fun0008 }
case 33:
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 11;
            var2 = var8[var2];
            var2 = var4.bind(var6)(var2);
            var1 = var2.bind(var6)(var7);
case 32:
            var1 = !var1;
            if(!var1) { _fun0008_ip = 34; continue _fun0008 }
case 35:
            var4 = var7.hasFlag;
            var2 = _closure1_slot8;
            var2 = var2.IS_GUILD_OFFICIAL;
            var2 = var4.bind(var7)(var2);
            if(var2) { _fun0008_ip = 36; continue _fun0008 }
case 37:
            var2 = _closure1_slot14;
            var2 = var2.bind(var6)(var5);
            _fun0008_ip = 38; continue _fun0008;
case 36:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 10;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.getIsActiveChannelOrUnarchivableThread;
            var2 = var3.bind(var4)(var5);
case 38:
            var1 = var2;
case 34:
            return var1;
        }
    };
    var3['useCanToggleGuildOfficialMessages'] = var4;
    var2 = function canSendGuildOfficialMessages(arg1, arg2, arg3) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = arg2;
            var6 = _closure1_slot12;
            var3 = undefined;
            var5 = arg1;
            var1 = arg3;
            var1 = var6.bind(var3)(var5, var4, var1);
            if(!var1) { _fun0009_ip = 39; continue _fun0009 }
case 20:
            var2 = _closure1_slot14;
            var1 = var2.bind(var3)(var4);
case 39:
            return var1;
        }
    };
    var3['canSendGuildOfficialMessages'] = var2;
    return var1;
})();