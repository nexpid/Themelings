// app/modules/voice_filters/VoiceFilterExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var6 = var4.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {constructor: {value: var6}});
    var15 = ['943265993613008967'];
    var16 = var5;
    var4 = new var16[var6](var15, var14);
    var5 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot4 = var5;
    var4 = 2;
    var4 = var8[var4];
    var9 = var7.bind(var1)(var4);
    var6 = var9.createExperiment;
    var4 = {'kind': 'user', 'id': '2024-10_flamingo', 'label': 'Flamingo'};
    var10 = {'enabled': false, 'isTester': false};
    var4['defaultConfig'] = var10;
    var11 = {'id': 1, 'label': 'Enabled - Treatment 1'};
    var10 = {'enabled': true, 'isTester': false};
    var11['config'] = var10;
    var10 = new Array(4);
    var10[0] = var11;
    var11 = {'id': 2, 'label': 'Enabled - Treatment 2'};
    var12 = {'enabled': true, 'isTester': false};
    var11['config'] = var12;
    var10[1] = var11;
    var11 = {'id': 3, 'label': 'Enabled - Treatment 3'};
    var12 = {'enabled': true, 'isTester': false};
    var11['config'] = var12;
    var10[2] = var11;
    var11 = {'id': 4, 'label': 'Enabled - Tester'};
    var12 = {'enabled': true, 'isTester': true};
    var11['config'] = var12;
    var10[3] = var11;
    var4['treatments'] = var10;
    var4 = var6.bind(var9)(var4);
    var _closure1_slot5 = var4;
    var6 = function platformSupportsVoiceFilters() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var5 = 3;
            var1 = var1[var5];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isWindows;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var5];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isMac;
            var1 = var2.bind(var3)();
case 2:
            return var1;
        }
    };
    var _closure1_slot6 = var6;
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/voice_filters/VoiceFilterExperiment.tsx';
    var6 = var7.bind(var8)(var6);
    var3['voiceFilterTestGuilds'] = var5;
    var3['VoiceFilterExperiment'] = var4;
    var4 = function isVoiceFiltersEnabled(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.location;
            var6 = var1.autoTrackExposure;
            var4 = _closure1_slot6;
            var1 = undefined;
            var1 = var4.bind(var1)();
            var4 = !var1;
            var1 = !var4;
            if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var5 = _closure1_slot5;
            var4 = var5.getCurrentConfig;
            var3 = {};
            var3['location'] = var2;
            var2 = {};
            var2['autoTrackExposure'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var1 = var2.enabled;
case 4:
            return var1;
        }
    };
    var3['isVoiceFiltersEnabled'] = var4;
    var4 = function isVoiceFiltersTestingDisabled(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = var2.location;
            var5 = var2.guildId;
            var6 = _closure1_slot5;
            var4 = var6.getCurrentConfig;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var7 = false;
            var1['autoTrackExposure'] = var7;
            var1 = var4.bind(var6)(var2, var1);
            var1 = var1.isTester;
            if(!var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var2 = null;
            var2 = var2 == var5;
            if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 2:
            var4 = _closure1_slot4;
            var3 = var4.has;
            var3 = var3.bind(var4)(var5);
            var2 = !var3;
case 8:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['isVoiceFiltersTestingDisabled'] = var4;
    var2 = function useAreVoiceFiltersEnabled(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = var2.location;
            var6 = var2.autoTrackExposure;
            var5 = _closure1_slot5;
            var4 = var5.useExperiment;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var6;
            var2 = var4.bind(var5)(var2, var1);
            var1 = var2.enabled;
            var2 = var2.isTester;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 4;
            var5 = var5[var4];
            var4 = undefined;
            var8 = var6.bind(var4)(var5);
            var7 = var8.useStateFromStores;
            var5 = _closure1_slot3;
            var6 = new Array(2);
            var6[0] = var5;
            var5 = _closure1_slot2;
            var6[1] = var5;
            var5 = function() {
                var3 = _closure1_slot2;
                var2 = var3.getChannel;
                var4 = _closure1_slot3;
                var1 = var4.getVoiceChannelId;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var7.bind(var8)(var6, var5);
            var2 = !var2;
            if(var2) { _fun0004_ip = 9; continue _fun0004 }
case 10:
            var5 = null;
            var5 = var5 != var6;
            if(!var5) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var8 = _closure1_slot4;
            var7 = var8.has;
            var6 = var6.guild_id;
            var5 = var7.bind(var8)(var6);
case 11:
            var2 = var5;
case 9:
            if(!var1) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var3 = _closure1_slot6;
            var1 = var3.bind(var4)();
case 13:
            if(!var1) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var1 = var2;
case 15:
            return var1;
        }
    };
    var3['useAreVoiceFiltersEnabled'] = var2;
    return var1;
})();