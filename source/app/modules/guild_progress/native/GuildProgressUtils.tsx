// app/modules/guild_progress/native/GuildProgressUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var4 = function useIOSCompletionStates(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var12 = arg1;
            var _closure2_slot0 = var12;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var8 = 10;
            var1 = var7[var8];
            var4 = undefined;
            var10 = var5.bind(var4)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var4 = _closure1_slot5;
                var3 = var4.can;
                var1 = _closure1_slot9;
                var2 = var1.ADMINISTRATOR;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var9.bind(var10)(var3, var1);
            var3 = 11;
            var9 = var7[var3];
            var10 = var5.bind(var4)(var9);
            var9 = var10.useGuildPersonalized;
            var11 = var9.bind(var10)(var12);
            var9 = var7[var3];
            var10 = var5.bind(var4)(var9);
            var9 = var10.useGuildPopulated;
            var12 = var9.bind(var10)(var12);
            var9 = var7[var8];
            var14 = var5.bind(var4)(var9);
            var13 = var14.useStateFromStores;
            var9 = _closure1_slot3;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getDefaultChannel;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var13.bind(var14)(var10, var9);
            var3 = var7[var3];
            var9 = var5.bind(var4)(var3);
            var7 = var9.useChannelsMessaged;
            var5 = null;
            if(!(var5 == var13)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = new Array(0);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var10 = new Array(1);
            var10[0] = var13;
            var3 = var10;
case 4:
            var7 = var7.bind(var9)(var3);
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var13 = var9.bind(var4)(var3);
            var10 = var13.useStateFromStores;
            var3 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot6;
                    var2 = var4.getProgress;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var5 = var2.bind(var4)(var1);
                    var1 = null;
                    var4 = var1 == var5;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var4 = var5.has;
                    var3 = _closure1_slot7;
                    var3 = var3.MESSAGE;
                    var2 = var4.bind(var5)(var3);
case 5:
                    var1 = var1 != var2;
                    if(!var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var1 = var2;
case 7:
                    return var1;
                }
            };
            var3 = var10.bind(var13)(var9, var3);
            var10 = var7;
            if(var10) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var10 = var3;
case 9:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var9 = var3[var8];
            var15 = var7.bind(var4)(var9);
            var14 = var15.useStateFromStores;
            var9 = _closure1_slot4;
            var13 = new Array(1);
            var13[0] = var9;
            var9 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var4 = var1 == var2;
                    var3 = undefined;
                    if(var4) { _fun0003_ip = 11; continue _fun0003 }
case 6:
                    var3 = var2.premiumSubscriberCount;
case 11:
                    var4 = var1 != var3;
                    var2 = 0;
                    var1 = 0;
                    if(!var4) { _fun0003_ip = 5; continue _fun0003 }
case 12:
                    var1 = var3;
case 5:
                    var1 = var1 > var2;
                    return var1;
                }
            };
            var9 = var14.bind(var15)(var13, var9);
            var3 = var3[var8];
            var13 = var7.bind(var4)(var3);
            var8 = var13.useStateFromStores;
            var3 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getProgress;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var8.bind(var13)(var7, var3);
            if(var1) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var1 = {'guildPopulated': false, 'guildPersonalized': false, 'guildMessaged': false, 'guildChannelCreated': false, 'guildBoosted': false, 'showBoostStep': false, 'completed': true, 'dismissed': true, 'numFinished': 0, 'totalSteps': 0};
            return var1;
case 13:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 12;
            var1 = var7[var1];
            var1 = var3.bind(var4)(var1);
            var7 = var1.ServerSetupBoostCtaExperiment;
            var3 = var7.getConfig;
            var1 = {};
            var13 = 'GuildProgress';
            var1['location'] = var13;
            var1 = var3.bind(var7)(var1);
            var7 = var1.enabled;
            var1 = new Array(3);
            var1[0] = var12;
            var1[1] = var11;
            var1[2] = var10;
            if(!var7) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var3 = var1.push;
            var3 = var3.bind(var1)(var9);
case 15:
            var3 = var1.filter;
            var2 = function(arg1) {
                var1 = arg1;
                return var1;
            };
            var2 = var3.bind(var1)(var2);
            var3 = var2.length;
            var2 = var1.length;
            var1 = var5 == var8;
            var4 = undefined;
            if(var1) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var13 = var8.has;
            var1 = _closure1_slot7;
            var1 = var1.COMPLETED;
            var4 = var13.bind(var8)(var1);
case 17:
            if(var4) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var4 = var3 === var2;
case 19:
            var1 = {};
            var1['guildPopulated'] = var12;
            var1['guildPersonalized'] = var11;
            var1['guildMessaged'] = var10;
            var1['guildBoosted'] = var9;
            var1['showBoostStep'] = var7;
            var1['completed'] = var4;
            var5 = var5 == var8;
            if(var5) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var7 = var8.has;
            var6 = _closure1_slot7;
            var6 = var6.DISMISSED;
            var5 = var7.bind(var8)(var6);
case 21:
            var1['dismissed'] = var5;
            if(!var4) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var3 = var2;
case 23:
            var1['numFinished'] = var3;
            var1['totalSteps'] = var2;
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var1 = global;
    var10 = var1.Object;
    var6 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var6 = var8[var5];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.Steps;
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.WELCOME_OLD_GUILD_AGE_THRESHOLD;
    var _closure1_slot8 = var9;
    var6 = var6.Permissions;
    var _closure1_slot9 = var6;
    var6 = 15;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_progress/native/GuildProgressUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['MIN_PROGRESS_PERCENT'] = var5;
    var5 = 'rgba(78, 93, 148, 0.3)';
    var3['PROGRESS_BACKGROUND_COLOR'] = var5;
    var5 = function openActionSheet(arg1) {
        var7 = arg1;
        var5 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var4 = var2[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var4 = _closure1_slot0;
        var3 = 8;
        var3 = var2[var3];
        var4 = var4.bind(var1)(var3);
        var3 = 7;
        var3 = var2[var3];
        var2 = var2.paths;
        var4 = var4.bind(var1)(var3, var2);
        var8 = var7.id;
        var2 = global;
        var2 = var2.HermesInternal;
        var3 = var2.concat;
        var2 = 'guild-progress-';
        var3 = var3.bind(var2)(var8);
        var2 = {};
        var2['guild'] = var7;
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var3['openActionSheet'] = var5;
    var5 = function hideActionSheet(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.hideActionSheet;
        var2 = global;
        var2 = var2.HermesInternal;
        var6 = var2.concat;
        var5 = 'guild-progress-';
        var2 = arg1;
        var2 = var6.bind(var5)(var2);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['hideActionSheet'] = var5;
    var5 = function createGuildProgress(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot4;
            var2 = var4.getGuild;
            var4 = var2.bind(var4)(var3);
            var2 = null;
            if(!(var2 != var4)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.createProgress;
            var1 = var1.bind(var2)(var3);
case 25:
            var1 = undefined;
            return var1;
        }
    };
    var3['createGuildProgress'] = var5;
    var3['useIOSCompletionStates'] = var4;
    var4 = function useGuildProgressStep(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = _closure1_slot10;
            var10 = undefined;
            var1 = arg1;
            var1 = var2.bind(var10)(var1);
            var6 = var1.guildPopulated;
            var12 = var1.guildPersonalized;
            var11 = var1.guildMessaged;
            var8 = var1.guildBoosted;
            var5 = var1.showBoostStep;
            var2 = var1.completed;
            var9 = var1.totalSteps;
            var1 = null;
            var7 = null;
            if(var6) { _fun0005_ip = 27; continue _fun0005 }
case 8:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var6 = 13;
            var13 = var16[var6];
            var13 = var15.bind(var10)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var6 = var16[var6];
            var6 = var15.bind(var10)(var6);
            var6 = var6.t;
            var6 = var6.q9n0Ta;
            var7 = var13.bind(var14)(var6);
case 27:
            var6 = new Array(3);
            var6[0] = var7;
            var7 = null;
            if(var12) { _fun0005_ip = 28; continue _fun0005 }
case 29:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 13;
            var13 = var16[var12];
            var13 = var15.bind(var10)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var10)(var12);
            var12 = var12.t;
            var12 = var12.DWB2YZ;
            var7 = var13.bind(var14)(var12);
case 28:
            var6[1] = var7;
            var7 = null;
            if(var11) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 13;
            var12 = var15[var11];
            var12 = var14.bind(var10)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var10)(var11);
            var11 = var11.t;
            var11 = var11.dNktpr;
            var7 = var12.bind(var13)(var11);
case 30:
            var6[2] = var7;
            if(!var5) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            var7 = var6.push;
            var5 = null;
            if(var8) { _fun0005_ip = 34; continue _fun0005 }
case 35:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 13;
            var11 = var14[var8];
            var11 = var13.bind(var10)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var8 = var14[var8];
            var8 = var13.bind(var10)(var8);
            var8 = var8.t;
            var8 = var8["6Qbqxw"];
            var5 = var11.bind(var12)(var8);
case 34:
            var5 = var7.bind(var6)(var5);
case 32:
            var7 = var6.filter;
            var5 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 == var1;
                return var1;
            };
            var5 = var7.bind(var6)(var5);
            var11 = var5.length;
            var5 = var6.find;
            var3 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var8 = var5.bind(var6)(var3);
            if(!(var1 == var8)) { _fun0005_ip = 36; continue _fun0005 }
case 37:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 13;
            var3 = var7[var1];
            var3 = var6.bind(var10)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var1 = var7[var1];
            var1 = var6.bind(var10)(var1);
            var1 = var1.t;
            var1 = var1["+Gyklt"];
            var8 = var3.bind(var5)(var1);
case 36:
            var1 = {};
            var3 = global;
            var7 = var3.Math;
            var6 = var7.max;
            var3 = 100;
            var3 = var3 * var11;
            var5 = var3 / var9;
            var3 = 3;
            var3 = var6.bind(var7)(var3, var5);
            var1['percentComplete'] = var3;
            if(!(!(var11 < var9))) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 13;
            var5 = var12[var3];
            var5 = var7.bind(var10)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var3 = var12[var3];
            var3 = var7.bind(var10)(var3);
            var3 = var3.t;
            var3 = var3["+Gyklt"];
            var3 = var5.bind(var6)(var3);
            _fun0005_ip = 40; continue _fun0005;
case 38:
            var5 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 13;
            var6 = var12[var4];
            var6 = var5.bind(var10)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var4 = var12[var4];
            var4 = var5.bind(var10)(var4);
            var4 = var4.t;
            var5 = var4.zhHW5c;
            var4 = {};
            var10 = 1;
            var10 = var11 + var10;
            var4['currStep'] = var10;
            var4['total'] = var9;
            var4['step'] = var8;
            var3 = var6.bind(var7)(var5, var4);
case 40:
            var1['subtitle'] = var3;
            var1['completed'] = var2;
            return var1;
        }
    };
    var3['useGuildProgressStep'] = var4;
    var2 = function useIsEligibleForGuildProgress(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 10;
            var4 = var7[var4];
            var6 = undefined;
            var8 = var5.bind(var6)(var4);
            var5 = var8.useStateFromStores;
            var9 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var9;
            var1 = function() {
                var4 = _closure1_slot5;
                var3 = var4.can;
                var1 = _closure1_slot9;
                var2 = var1.ADMINISTRATOR;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var5.bind(var8)(var4, var1);
            var5 = _closure1_slot1;
            var4 = 14;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.extractTimestamp;
            var3 = var3.id;
            var3 = var4.bind(var5)(var3);
            var4 = global;
            var5 = var4.Date;
            var4 = var5.now;
            var4 = var4.bind(var5)();
            var2 = _closure1_slot8;
            var2 = var4 - var2;
            var2 = var3 < var2;
            if(!var1) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var1 = !var2;
case 41:
            return var1;
        }
    };
    var3['useIsEligibleForGuildProgress'] = var2;
    return var1;
})();