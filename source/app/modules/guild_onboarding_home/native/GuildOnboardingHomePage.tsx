// app/modules/guild_onboarding_home/native/GuildOnboardingHomePage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function GuildOnboardingHomePage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var15 = var2.guildId;
            var _closure2_slot0 = var15;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 6;
            var2 = var4[var2];
            var7 = var3.bind(var5)(var2);
            var6 = var7.useSharedValue;
            var2 = -999;
            var6 = var6.bind(var7)(var2);
            var2 = 7;
            var2 = var4[var2];
            var8 = var3.bind(var5)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getSettings;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var7.bind(var8)(var3, var2);
            var _closure2_slot1 = var9;
            var3 = _closure1_slot1;
            var2 = 8;
            var2 = var4[var2];
            var2 = var3.bind(var5)(var2);
            var7 = var2.bind(var5)(var15);
            var2 = !var7;
            if(!var2) { _fun0001_ip = 182; continue _fun0001 }
 133:
            var3 = null;
            var4 = var3 == var9;
            var8 = undefined;
            if(var4) { _fun0001_ip = 164; continue _fun0001 }
 144:
            var4 = var9.resourceChannels;
            var10 = var3 == var4;
            var8 = undefined;
            if(var10) { _fun0001_ip = 164; continue _fun0001 }
 159:
            var8 = var4.length;
 164:
            var10 = var3 != var8;
            var4 = 0;
            var3 = 0;
            if(!var10) { _fun0001_ip = 178; continue _fun0001 }
 175:
            var3 = var8;
 178:
            var2 = var4 === var3;
 182:
            _closure2_slot2 = var2;
            var10 = _closure1_slot3;
            var8 = var10.useEffect;
            var4 = new Array(3);
            var4[0] = var15;
            var4[1] = var9;
            var4[2] = var2;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure2_slot1;
                    var3 = _closure1_slot6;
                    if(!(var4 !== var3)) { _fun0002_ip = 272; continue _fun0002 }
 21:
                    var3 = _closure2_slot1;
                    var9 = null;
                    if(!(var9 != var3)) { _fun0002_ip = 309; continue _fun0002 }
 34:
                    var4 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var3 = 10;
                    var3 = var11[var3];
                    var7 = undefined;
                    var6 = var4.bind(var7)(var3);
                    var5 = var6.track;
                    var3 = _closure1_slot8;
                    var4 = var3.SERVER_GUIDE_VIEWED;
                    var3 = {};
                    var10 = _closure1_slot0;
                    var8 = 11;
                    var8 = var11[var8];
                    var11 = var10.bind(var7)(var8);
                    var10 = var11.collectGuildAnalyticsMetadata;
                    var8 = _closure2_slot0;
                    var15 = var10.bind(var11)(var8);
                    var16 = var3;
                    var8 = copyDataProperties(var16, var15);
                    var8 = _closure2_slot1;
                    var8 = var8.newMemberActions;
                    var11 = var9 == var8;
                    var10 = undefined;
                    if(var11) { _fun0002_ip = 135; continue _fun0002 }
 130:
                    var10 = var8.length;
 135:
                    var12 = var9 != var10;
                    var11 = 0;
                    if(!var12) { _fun0002_ip = 147; continue _fun0002 }
 144:
                    var11 = var10;
 147:
                    var10 = 'num_member_actions';
                    var3[var10] = var11;
                    var10 = global;
                    var12 = var10.Object;
                    var11 = var12.keys;
                    var14 = _closure1_slot7;
                    var13 = var14.getCompletedActions;
                    var10 = _closure2_slot0;
                    var10 = var13.bind(var14)(var10);
                    if(!(var9 == var10)) { _fun0002_ip = 196; continue _fun0002 }
 194:
                    var10 = {};
 196:
                    var10 = var11.bind(var12)(var10);
                    var11 = var10.length;
                    var10 = 'num_member_actions_completed';
                    var3[var10] = var11;
                    var10 = _closure2_slot1;
                    var10 = var10.resourceChannels;
                    var11 = var9 == var10;
                    var7 = undefined;
                    if(var11) { _fun0002_ip = 241; continue _fun0002 }
 236:
                    var7 = var10.length;
 241:
                    var9 = var9 != var7;
                    var8 = 0;
                    if(!var9) { _fun0002_ip = 253; continue _fun0002 }
 250:
                    var8 = var7;
 253:
                    var7 = 'num_resource_channels';
                    var3[var7] = var8;
                    var3 = var5.bind(var6)(var4, var3);
                    _fun0002_ip = 309; continue _fun0002;
 272:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchGuildHomeSettings;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
 309:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var8.bind(var10)(var3, var4);
            var8 = _closure1_slot3;
            var4 = var8.useEffect;
            var3 = new Array(3);
            var3[0] = var15;
            var3[1] = var2;
            var3[2] = var9;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0003_ip = 25; continue _fun0003 }
 10:
                    var4 = _closure2_slot1;
                    var3 = _closure1_slot6;
                    var2 = var4 !== var3;
 25:
                    if(!var2) { _fun0003_ip = 68; continue _fun0003 }
 28:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 12;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.escapeToDefaultChannel;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
 68:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var8)(var1, var3);
            var1 = null;
            if(var2) { _fun0001_ip = 532; continue _fun0001 }
 270:
            var4 = _closure1_slot11;
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 13;
            var2 = var10[var2];
            var3 = var8.bind(var5)(var2);
            var2 = {};
            var2['guildId'] = var15;
            var2['scrollValue'] = var6;
            var9 = _closure1_slot9;
            var6 = 14;
            var6 = var10[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var6['guildId'] = var15;
            var6['hideDescription'] = var7;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            if(var7) { _fun0001_ip = 390; continue _fun0001 }
 349:
            var9 = _closure1_slot9;
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var7 = 18;
            var7 = var10[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var7['guildId'] = var15;
            var7 = var9.bind(var5)(var8, var7);
            _fun0001_ip = 518; continue _fun0001;
 390:
            var10 = _closure1_slot11;
            var9 = _closure1_slot10;
            var8 = {};
            var17 = _closure1_slot9;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var11 = 15;
            var11 = var16[var11];
            var14 = var13.bind(var5)(var11);
            var11 = {};
            var11['guildId'] = var15;
            var14 = var17.bind(var5)(var14, var11);
            var11 = new Array(3);
            var11[0] = var14;
            var18 = _closure1_slot9;
            var14 = 16;
            var14 = var16[var14];
            var17 = var13.bind(var5)(var14);
            var14 = {};
            var14['guildId'] = var15;
            var14 = var18.bind(var5)(var17, var14);
            var11[1] = var14;
            var14 = _closure1_slot9;
            var12 = 17;
            var12 = var16[var12];
            var13 = var13.bind(var5)(var12);
            var12 = {};
            var12['guildId'] = var15;
            var12 = var14.bind(var5)(var13, var12);
            var11[2] = var12;
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 518:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 532:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NO_SETTINGS;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var7 = var4.Fragment;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding_home/native/GuildOnboardingHomePage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildOnboardingHomePageGuard(arg1) {
        var1 = arg1;
        var5 = var1.guildId;
        var _closure2_slot0 = var5;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 7;
        var3 = var7[var3];
        var4 = undefined;
        var10 = var6.bind(var4)(var3);
        var9 = var10.useStateFromStores;
        var3 = _closure1_slot4;
        var8 = new Array(1);
        var8[0] = var3;
        var3 = function() {
            var1 = _closure1_slot4;
            var1 = var1.hasLoadedExperiments;
            return var1;
        };
        var9 = var9.bind(var10)(var8, var3);
        var _closure2_slot1 = var9;
        var3 = 19;
        var3 = var7[var3];
        var6 = var6.bind(var4)(var3);
        var3 = var6.useCanSeeOnboardingHome;
        var8 = var3.bind(var6)(var5);
        var _closure2_slot2 = var8;
        var7 = _closure1_slot3;
        var6 = var7.useEffect;
        var3 = new Array(3);
        var3[0] = var5;
        var3[1] = var9;
        var3[2] = var8;
        var2 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = _closure2_slot1;
                if(!var2) { _fun0004_ip = 57; continue _fun0004 }
 10:
                var2 = _closure2_slot2;
                if(var2) { _fun0004_ip = 57; continue _fun0004 }
 17:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 12;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.escapeToDefaultChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
 57:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var6.bind(var7)(var2, var3);
        var3 = _closure1_slot9;
        var2 = _closure1_slot12;
        var1 = {};
        var1['guildId'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();