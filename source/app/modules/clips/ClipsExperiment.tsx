// app/modules/clips/ClipsExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var4 = function isUserPremiumTypeForClipsEarlyAccess(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.isPremiumAtLeast;
            var6 = null;
            var6 = var6 == var5;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var5.premiumType;
case 2:
            var1 = _closure1_slot5;
            var1 = var1.TIER_2;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var1 = global;
    var10 = var1.Object;
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
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.PremiumTypes;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var8[var5];
    var9 = var7.bind(var1)(var5);
    var6 = var9.createApexExperiment;
    var5 = {'kind': 'user', 'name': '2026-03-clips-experiment'};
    var10 = {'enableClips': false, 'ignorePlatformRestriction': false, 'showClipsHeaderEntrypoint': false, 'enableScreenshotKeybind': false, 'enableVoiceOnlyClips': false, 'enableAdvancedSignals': false};
    var5['defaultConfig'] = var10;
    var10 = {};
    var11 = {'enableClips': true, 'ignorePlatformRestriction': false, 'showClipsHeaderEntrypoint': true, 'enableScreenshotKeybind': false, 'enableVoiceOnlyClips': false, 'enableAdvancedSignals': false};
    var10[1] = var11;
    var11 = {'enableClips': true, 'ignorePlatformRestriction': true, 'showClipsHeaderEntrypoint': true, 'enableScreenshotKeybind': false, 'enableVoiceOnlyClips': true, 'enableAdvancedSignals': true};
    var10[2] = var11;
    var11 = {'enableClips': true, 'ignorePlatformRestriction': true, 'showClipsHeaderEntrypoint': false, 'enableScreenshotKeybind': false, 'enableVoiceOnlyClips': false, 'enableAdvancedSignals': false};
    var10[3] = var11;
    var5['variations'] = var10;
    var5 = var6.bind(var9)(var5);
    var _closure1_slot6 = var5;
    var6 = 7;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/clips/ClipsExperiment.tsx';
    var6 = var7.bind(var8)(var6);
    var3['ClipsExperiment'] = var5;
    var5 = function areClipsAvailable() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 4;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = _closure1_slot3;
            var1 = var3.bind(var4)(var1);
            if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = false;
            return var1;
case 4:
            var3 = _closure1_slot7;
            var5 = _closure1_slot4;
            var1 = var5.getCurrentUser;
            var1 = var1.bind(var5)();
            var1 = var3.bind(var4)(var1);
            var4 = _closure1_slot6;
            var3 = var4.getConfig;
            var2 = {};
            var5 = 'areClipsEnabled';
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var2 = var2.enableClips;
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['areClipsAvailable'] = var5;
    var5 = function useIsClipsAvailable() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var5 = undefined;
            var3 = var3.bind(var5)(var2);
            var2 = _closure1_slot3;
            var2 = var3.bind(var5)(var2);
            var4 = _closure1_slot0;
            var3 = 5;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var5 = var6.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = var5.bind(var6)(var4, var3);
            var5 = _closure1_slot6;
            var4 = var5.getConfig;
            var1 = {};
            var6 = 'useEnableClips';
            var1['location'] = var6;
            var1 = var4.bind(var5)(var1);
            var1 = var1.enableClips;
            if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var1 = var3;
case 8:
            if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var1 = var2;
case 10:
            return var1;
        }
    };
    var3['useIsClipsAvailable'] = var5;
    var3['isUserPremiumTypeForClipsEarlyAccess'] = var4;
    var4 = function isScreenshotKeybindEnabled() {
        var3 = _closure1_slot6;
        var2 = var3.getConfig;
        var1 = {};
        var4 = 'isScreenshotKeybindEnabled';
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enableScreenshotKeybind;
        return var1;
    };
    var3['isScreenshotKeybindEnabled'] = var4;
    var4 = function useScreenshotKeybindEnabled() {
        var3 = _closure1_slot6;
        var2 = var3.useConfig;
        var1 = {};
        var4 = 'useScreenshotKeybindEnabled';
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enableScreenshotKeybind;
        return var1;
    };
    var3['useScreenshotKeybindEnabled'] = var4;
    var4 = function areVoiceOnlyClipsEnabled() {
        var3 = _closure1_slot6;
        var2 = var3.getConfig;
        var1 = {};
        var4 = 'areVoiceOnlyClipsEnabled';
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enableVoiceOnlyClips;
        return var1;
    };
    var3['areVoiceOnlyClipsEnabled'] = var4;
    var2 = function areAdvancedSignalsEnabled() {
        var3 = _closure1_slot6;
        var2 = var3.getConfig;
        var1 = {};
        var4 = 'areAdvancedSignalsEnabled';
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enableAdvancedSignals;
        return var1;
    };
    var3['areAdvancedSignalsEnabled'] = var2;
    return var1;
})();