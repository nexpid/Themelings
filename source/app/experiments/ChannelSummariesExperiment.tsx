// app/experiments/ChannelSummariesExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function canSeeChannelSummaries(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var5 = arguments[1];
            var7 = arguments[2];
            var6 = undefined;
            if(!(var5 === var6)) { _fun0001_ip = 17; continue _fun0001 }
 15:
            var5 = false;
 17:
            if(!(var7 === var6)) { _fun0001_ip = 23; continue _fun0001 }
 21:
            var7 = true;
 23:
            var9 = null;
            var1 = var9 != var4;
            if(!var1) { _fun0001_ip = 265; continue _fun0001 }
 35:
            var8 = var9 == var4;
            var3 = false;
            var2 = false;
            if(var8) { _fun0001_ip = 181; continue _fun0001 }
 49:
            var12 = _closure1_slot3;
            var11 = var12.getGuild;
            var10 = var9 == var4;
            var13 = undefined;
            if(var10) { _fun0001_ip = 75; continue _fun0001 }
 70:
            var13 = var4.guild_id;
 75:
            var14 = var9 != var13;
            var10 = '';
            if(!var14) { _fun0001_ip = 89; continue _fun0001 }
 86:
            var10 = var13;
 89:
            var11 = var11.bind(var12)(var10);
            var10 = var9 != var11;
            if(!var10) { _fun0001_ip = 116; continue _fun0001 }
 101:
            var12 = var11.rulesChannelId;
            var9 = var4.id;
            var10 = var12 === var9;
 116:
            var9 = _closure1_slot2;
            var9 = var9.bind(var6)(var11);
            var8 = _closure1_slot6;
            var12 = var8.SUMMARIZEABLE;
            var11 = var12.has;
            var8 = var4.type;
            var8 = var11.bind(var12)(var8);
            if(!var8) { _fun0001_ip = 166; continue _fun0001 }
 153:
            var11 = var4.isNSFW;
            var11 = var11.bind(var4)();
            var8 = !var11;
 166:
            if(!var8) { _fun0001_ip = 172; continue _fun0001 }
 169:
            var8 = !var10;
 172:
            if(!var8) { _fun0001_ip = 178; continue _fun0001 }
 175:
            var8 = !var9;
 178:
            var2 = var8;
 181:
            var8 = !var2;
            var2 = !var8;
            if(var8) { _fun0001_ip = 262; continue _fun0001 }
 190:
            var3 = var3 !== var5;
            if(var3) { _fun0001_ip = 224; continue _fun0001 }
 197:
            var8 = var4.hasFlag;
            var5 = _closure1_slot9;
            var5 = var5.SUMMARIES_DISABLED;
            var5 = var8.bind(var4)(var5);
            var3 = !var5;
 224:
            if(!var3) { _fun0001_ip = 259; continue _fun0001 }
 227:
            var5 = _closure1_slot11;
            var9 = _closure1_slot3;
            var8 = var9.getGuild;
            var4 = var4.guild_id;
            var4 = var8.bind(var9)(var4);
            var3 = var5.bind(var6)(var4, var7);
 259:
            var2 = var3;
 262:
            var1 = var2;
 265:
            return var1;
        }
    };
    var _closure1_slot10 = var5;
    var4 = function canGuildUseConversationSummaries(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var4 = arguments[1];
            var1 = undefined;
            if(!(var4 === var1)) { _fun0002_ip = 14; continue _fun0002 }
 12:
            var4 = true;
 14:
            var2 = null;
            var1 = var2 != var6;
            if(!var1) { _fun0002_ip = 148; continue _fun0002 }
 26:
            var7 = var6.id;
            var3 = var2 != var7;
            if(!var3) { _fun0002_ip = 63; continue _fun0002 }
 38:
            var2 = _closure1_slot4;
            var2 = var7 === var2;
            if(var2) { _fun0002_ip = 60; continue _fun0002 }
 52:
            var5 = _closure1_slot5;
            var2 = var7 === var5;
 60:
            var3 = var2;
 63:
            var2 = !var3;
            if(var3) { _fun0002_ip = 145; continue _fun0002 }
 69:
            var8 = var6.features;
            var7 = var8.has;
            var3 = _closure1_slot7;
            var3 = var3.SUMMARIES_ENABLED_GA;
            var3 = var7.bind(var8)(var3);
            var7 = !var3;
            var3 = !var7;
            if(var7) { _fun0002_ip = 142; continue _fun0002 }
 107:
            var4 = !var4;
            if(var4) { _fun0002_ip = 139; continue _fun0002 }
 113:
            var7 = var6.features;
            var6 = var7.has;
            var5 = _closure1_slot7;
            var5 = var5.SUMMARIES_ENABLED_BY_USER;
            var4 = var6.bind(var7)(var5);
 139:
            var3 = var4;
 142:
            var2 = var3;
 145:
            var1 = var2;
 148:
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var6 = var6.isGuildNSFW;
    var _closure1_slot2 = var6;
    var6 = 1;
    var9 = var8[var6];
    var6 = metroImportDefault;
    var6 = var6.bind(var1)(var9);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.ME;
    var _closure1_slot4 = var9;
    var9 = var6.FAVORITES;
    var _closure1_slot5 = var9;
    var9 = var6.ChannelTypesSets;
    var _closure1_slot6 = var9;
    var9 = var6.GuildFeatures;
    var _closure1_slot7 = var9;
    var6 = var6.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot8 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.ChannelFlags;
    var _closure1_slot9 = var6;
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'experiments/ChannelSummariesExperiment.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function channelEligibleForSummaries(arg1) {
        var5 = _closure1_slot10;
        var4 = undefined;
        var3 = arg1;
        var2 = true;
        var1 = false;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var3['channelEligibleForSummaries'] = var6;
    var3['canSeeChannelSummaries'] = var5;
    var3['canGuildUseConversationSummaries'] = var4;
    var4 = function useChannelSummariesExperiment(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arguments[2];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0003_ip = 11; continue _fun0003 }
 9:
            var4 = false;
 11:
            var2 = _closure1_slot10;
            var1 = arg1;
            var1 = var2.bind(var3)(var1, var4);
            return var1;
        }
    };
    var3['useChannelSummariesExperiment'] = var4;
    var2 = function useGuildEligibleForSummaries(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = _closure1_slot11;
                var5 = _closure1_slot3;
                var2 = var5.getGuild;
                var1 = _closure2_slot0;
                var7 = null;
                var9 = var7 == var1;
                var3 = undefined;
                var1 = undefined;
                if(var9) { _fun0004_ip = 45; continue _fun0004 }
 36:
                var8 = _closure2_slot0;
                var1 = var8.id;
 45:
                if(!(var7 == var1)) { _fun0004_ip = 53; continue _fun0004 }
 49:
                var1 = _closure1_slot8;
 53:
                var2 = var2.bind(var5)(var1);
                var1 = false;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useGuildEligibleForSummaries'] = var2;
    return var1;
})();