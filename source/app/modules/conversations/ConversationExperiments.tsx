// app/modules/conversations/ConversationExperiments.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var11;
    var1 = function useGuildHasFeature(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                var2 = null;
                var1 = var2 != var1;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = _closure1_slot2;
                var5 = var6.getGuild;
                var3 = _closure2_slot0;
                var5 = var5.bind(var6)(var3);
                var6 = var2 == var5;
                var3 = undefined;
                if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var6 = var5.features;
                var5 = var6.has;
                var4 = _closure2_slot1;
                var3 = var5.bind(var6)(var4);
case 4:
                var2 = var2 != var3;
                if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var2 = var3;
case 6:
                var1 = var2;
case 2:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var5 = function isConversationDebugUXEnabled(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var9 = arg1;
            var1 = _closure1_slot3;
            var8 = var1.CONVERSATIONS_EXTRACTION_PROCESSING;
            var5 = null;
            var1 = var5 != var9;
            var3 = undefined;
            if(!var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var7 = _closure1_slot2;
            var6 = var7.getGuild;
            var6 = var6.bind(var7)(var9);
            var7 = var5 == var6;
            var4 = undefined;
            if(var7) { _fun0002_ip = 4; continue _fun0002 }
case 9:
            var7 = var6.features;
            var6 = var7.has;
            var4 = var6.bind(var7)(var8);
case 4:
            var1 = var5 != var4;
            var3 = var4;
case 7:
            if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 6:
            var1 = var3;
case 2:
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4 = _closure1_slot4;
            var3 = var4.getConfig;
            var2 = {};
            var5 = arg2;
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var1 = var2.enabled;
case 10:
            return var1;
        }
    };
    var _closure1_slot8 = var5;
    var4 = function useIsConversationDebugUXEnabled(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = _closure1_slot4;
            var3 = var4.useConfig;
            var2 = {};
            var5 = arg2;
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var2 = var2.enabled;
            var5 = _closure1_slot7;
            var1 = _closure1_slot3;
            var4 = var1.CONVERSATIONS_EXTRACTION_PROCESSING;
            var3 = undefined;
            var1 = arg1;
            var1 = var5.bind(var3)(var1, var4);
            if(!var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var1 = var2;
case 12:
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var15 = true;
    var6['value'] = var15;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 0;
    var7 = var11[var1];
    var6 = metroImportDefault;
    var1 = undefined;
    var6 = var6.bind(var1)(var7);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var11[var6];
    var6 = var10.bind(var1)(var6);
    var6 = var6.GuildFeatures;
    var _closure1_slot3 = var6;
    var6 = 2;
    var7 = var11[var6];
    var9 = var10.bind(var1)(var7);
    var8 = var9.createApexExperiment;
    var7 = {'kind': 'user', 'name': '2026-03-conversation-highlighting-utility'};
    var12 = {};
    var14 = false;
    var12['enabled'] = var14;
    var7['defaultConfig'] = var12;
    var12 = {};
    var13 = {};
    var13['enabled'] = var14;
    var12[1] = var13;
    var13 = {};
    var13['enabled'] = var15;
    var12[2] = var13;
    var7['variations'] = var12;
    var8 = var8.bind(var9)(var7);
    var _closure1_slot4 = var8;
    var7 = var11[var6];
    var12 = var10.bind(var1)(var7);
    var9 = var12.createApexExperiment;
    var7 = {'kind': 'guild', 'name': '2026-06-topical-navigation-guild'};
    var13 = {};
    var13['enabled'] = var14;
    var7['defaultConfig'] = var13;
    var13 = {};
    var16 = {};
    var16['enabled'] = var15;
    var13[1] = var16;
    var7['variations'] = var13;
    var7 = var9.bind(var12)(var7);
    var _closure1_slot5 = var7;
    var6 = var11[var6];
    var12 = var10.bind(var1)(var6);
    var9 = var12.createApexExperiment;
    var6 = {'kind': 'user', 'name': '2026-04-topical-navigation-staff-control'};
    var13 = {};
    var13['enabled'] = var14;
    var6['defaultConfig'] = var13;
    var13 = {};
    var14 = {};
    var14['enabled'] = var15;
    var13[1] = var14;
    var6['variations'] = var13;
    var6 = var9.bind(var12)(var6);
    var _closure1_slot6 = var6;
    var9 = 4;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/conversations/ConversationExperiments.tsx';
    var9 = var10.bind(var11)(var9);
    var3['ConversationHighlightingExperiment'] = var8;
    var3['TopicalNavGuildExperiment'] = var7;
    var3['TopicalNavUserGateExperiment'] = var6;
    var3['isConversationDebugUXEnabled'] = var5;
    var5 = function isTopicalNavEnabled(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var1 = null;
            if(!(var1 != var6)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var4 = _closure1_slot8;
            var3 = undefined;
            var3 = var4.bind(var3)(var6, var5);
            if(var3) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var7 = _closure1_slot6;
            var4 = var7.getConfig;
            var3 = {};
            var3['location'] = var5;
            var3 = var4.bind(var7)(var3);
            var3 = var3.enabled;
            if(var3) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var3 = false;
            return var3;
case 18:
            var4 = _closure1_slot2;
            var3 = var4.getGuild;
            var3 = var3.bind(var4)(var6);
            var1 = var1 != var3;
            if(!var1) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var8 = var3.features;
            var7 = var8.has;
            var4 = _closure1_slot3;
            var4 = var4.SUMMARIES_ENABLED_GA;
            var4 = var7.bind(var8)(var4);
            var1 = !var4;
case 20:
            if(!var1) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var7 = var3.features;
            var4 = var7.has;
            var3 = _closure1_slot3;
            var3 = var3.CONVERSATIONS_EXTRACTION_PROCESSING;
            var1 = var4.bind(var7)(var3);
case 22:
            if(!var1) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var4 = _closure1_slot5;
            var3 = var4.getConfig;
            var2 = {};
            var2['guildId'] = var6;
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var1 = var2.enabled;
case 24:
            return var1;
case 16:
            var1 = true;
            return var1;
case 14:
            var1 = false;
            return var1;
        }
    };
    var3['isTopicalNavEnabled'] = var5;
    var3['useIsConversationDebugUXEnabled'] = var4;
    var2 = function useIsTopicalNavEnabled(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var7 = arg1;
            var10 = arg2;
            var1 = _closure1_slot9;
            var9 = undefined;
            var2 = var1.bind(var9)(var7, var10);
            var4 = _closure1_slot6;
            var3 = var4.useConfig;
            var1 = {};
            var1['location'] = var10;
            var1 = var3.bind(var4)(var1);
            var3 = var1.enabled;
            var8 = _closure1_slot5;
            var5 = var8.useConfig;
            var4 = {};
            var1 = null;
            var12 = var1 != var7;
            var11 = '';
            if(!var12) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var11 = var7;
case 26:
            var4['guildId'] = var11;
            var4['location'] = var10;
            var4 = var5.bind(var8)(var4);
            var5 = var4.enabled;
            var8 = _closure1_slot7;
            var4 = _closure1_slot3;
            var4 = var4.CONVERSATIONS_EXTRACTION_PROCESSING;
            var4 = var8.bind(var9)(var7, var4);
            var6 = _closure1_slot3;
            var6 = var6.SUMMARIES_ENABLED_GA;
            var6 = var8.bind(var9)(var7, var6);
            var1 = var1 != var7;
            if(!var1) { _fun0005_ip = 28; continue _fun0005 }
case 29:
            var7 = !var2;
            var2 = !var7;
            if(!var7) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var7 = !var3;
            var3 = !var7;
            if(var7) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            if(!var4) { _fun0005_ip = 34; continue _fun0005 }
case 35:
            var4 = !var6;
case 34:
            if(!var4) { _fun0005_ip = 36; continue _fun0005 }
case 37:
            var4 = var5;
case 36:
            var3 = var4;
case 32:
            var2 = var3;
case 30:
            var1 = var2;
case 28:
            return var1;
        }
    };
    var3['useIsTopicalNavEnabled'] = var2;
    return var1;
})();