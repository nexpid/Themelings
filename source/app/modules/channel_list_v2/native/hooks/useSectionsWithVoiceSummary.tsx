// app/modules/channel_list_v2/native/hooks/useSectionsWithVoiceSummary.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function areSectionsWithVoiceSummaryEqual(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var10 = arg1;
            var9 = arg2;
            var8 = global;
            var2 = var8.Object;
            var1 = var2.keys;
            var7 = var1.bind(var2)(var10);
            var2 = var8.Object;
            var1 = var2.keys;
            var1 = var1.bind(var2)(var9);
            var2 = var7.length;
            var1 = var1.length;
            if(!(var2 === var1)) { _fun0001_ip = 214; continue _fun0001 }
 57:
            var1 = var7.length;
            var6 = 0;
            var1 = var6 < var1;
            var4 = 2;
            var3 = undefined;
            var2 = null;
            if(!var1) { _fun0001_ip = 198; continue _fun0001 }
 81:
            var11 = var7[var6];
            var1 = var8.Number;
            var1 = var1.bind(var3)(var11);
            var11 = var10[var1];
            var1 = var9[var1];
            if(!(var2 != var1)) { _fun0001_ip = 210; continue _fun0001 }
 108:
            if(!(var2 != var11)) { _fun0001_ip = 210; continue _fun0001 }
 112:
            var12 = var1.category;
            if(!(var2 != var12)) { _fun0001_ip = 206; continue _fun0001 }
 122:
            var13 = var11.category;
            var12 = var1.category;
            if(!(var13 === var12)) { _fun0001_ip = 202; continue _fun0001 }
 138:
            var13 = _closure1_slot0;
            var12 = _closure1_slot1;
            var12 = var12[var4];
            var13 = var13.bind(var3)(var12);
            var12 = var13.areArraysShallowEqual;
            var11 = var11.activeVoiceChannels;
            var1 = var1.activeVoiceChannels;
            var1 = var12.bind(var13)(var11, var1);
            if(var1) { _fun0001_ip = 186; continue _fun0001 }
 182:
            var1 = false;
            return var1;
 186:
            var6 = var6 + 1;
            var1 = var7.length;
            if(var6 < var1) { _fun0001_ip = 81; continue _fun0001 }
 198:
            var1 = true;
            return var1;
 202:
            var1 = false;
            return var1;
 206:
            var1 = false;
            return var1;
 210:
            var1 = false;
            return var1;
 214:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot4 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/hooks/useSectionsWithVoiceSummary.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSectionsWithVoiceSummary(arg1) {
        var2 = arg1;
        var3 = var2.guildId;
        var _closure2_slot0 = var3;
        var9 = var2.sections;
        var _closure2_slot1 = var9;
        var3 = var2.guildChannels;
        var _closure2_slot2 = var3;
        var8 = var2.guildChannelsVersion;
        var7 = var2.optInEnabled;
        var _closure2_slot3 = var7;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var6 = var5.bind(var3)(var4);
        var5 = var6.useStateFromStores;
        var3 = _closure1_slot3;
        var4 = new Array(2);
        var4[0] = var3;
        var3 = _closure1_slot2;
        var4[1] = var3;
        var3 = new Array(3);
        var3[0] = var9;
        var3[1] = var8;
        var3[2] = var7;
        var10 = _closure1_slot4;
        var12 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = {};
                var4 = _closure1_slot3;
                var3 = var4.getVoiceStates;
                var2 = _closure2_slot0;
                var12 = var3.bind(var4)(var2);
                var2 = _closure2_slot1;
                var2 = var2.length;
                var11 = 0;
                var2 = var11 < var2;
                var10 = undefined;
                var9 = 6;
                var8 = null;
                var7 = 5;
                var6 = 4;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0002_ip = 377; continue _fun0002 }
 67:
                var2 = _closure2_slot1;
                var2 = var2[var5];
                var16 = var4;
                var15 = var3;
                if(!(var11 !== var2)) { _fun0002_ip = 352; continue _fun0002 }
 88:
                var17 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var18 = var17.bind(var10)(var2);
                var17 = var18.isVoiceChannelsSection;
                var2 = _closure2_slot2;
                var2 = var17.bind(var18)(var5, var2);
                if(var2) { _fun0002_ip = 160; continue _fun0002 }
 124:
                var17 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var17.bind(var10)(var2);
                var2 = var2.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                var16 = var4;
                var15 = var3;
                if(!(!(var5 < var2))) { _fun0002_ip = 352; continue _fun0002 }
 160:
                var17 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var9];
                var19 = var17.bind(var10)(var2);
                var18 = var19.getSectionFooterConfig;
                var17 = _closure2_slot2;
                var2 = _closure2_slot3;
                var2 = var18.bind(var19)(var17, var2, var5);
                var2 = var2.canHaveVoiceSummary;
                var16 = var4;
                var15 = var3;
                if(!var2) { _fun0002_ip = 352; continue _fun0002 }
 216:
                var17 = _closure2_slot2;
                var2 = var17.getNamedCategoryFromSection;
                var17 = var2.bind(var17)(var5);
                var15 = var3;
                var16 = var17;
                if(!(var8 != var16)) { _fun0002_ip = 352; continue _fun0002 }
 241:
                var18 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var9];
                var19 = var18.bind(var10)(var2);
                var18 = var19.getSectionFooterActiveVoiceChannels;
                var2 = {};
                var2['category'] = var17;
                var21 = _closure1_slot2;
                var20 = var21.getChannelId;
                var20 = var20.bind(var21)();
                var2['selectedChannelId'] = var20;
                var20 = var21.getVoiceChannelId;
                var20 = var20.bind(var21)();
                var2['selectedVoiceChannelId'] = var20;
                var2['voiceStates'] = var12;
                var2 = var18.bind(var19)(var2);
                var18 = var2.length;
                var16 = var17;
                var15 = var2;
                if(!(var11 !== var18)) { _fun0002_ip = 352; continue _fun0002 }
 330:
                var18 = {};
                var18['category'] = var17;
                var18['activeVoiceChannels'] = var2;
                var1[var5] = var18;
                var16 = var17;
                var15 = var2;
 352:
                var5 = var5 + 1;
                var2 = _closure2_slot1;
                var2 = var2.length;
                var4 = var16;
                var3 = var15;
                if(var5 < var2) { _fun0002_ip = 67; continue _fun0002 }
 377:
                return var1;
            }
        };
        var14 = var6;
        var13 = var4;
        var11 = var3;
        var1 = var14[var5](var13, var12, var11, var10, var9);
        return var1;
    };
    var3['useSectionsWithVoiceSummary'] = var2;
    return var1;
})();