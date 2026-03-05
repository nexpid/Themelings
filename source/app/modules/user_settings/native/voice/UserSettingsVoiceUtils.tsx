// app/modules/user_settings/native/voice/UserSettingsVoiceUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var9;
    var5 = function getNoiseCancellationDeferredToSystem() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arguments[0];
            var5 = undefined;
            if(!(var2 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot3;
case 2:
            var1 = var2.getSystemMicrophoneMode;
            var4 = var1.bind(var2)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 3;
            var1 = var3[var1];
            var3 = var2.bind(var5)(var1);
            var2 = {};
            var1 = 'VoiceProcessingOptions';
            var2['location'] = var1;
            var1 = true;
            var1 = var3.bind(var5)(var1, var4, var2);
            var1 = !var1;
            return var1;
        }
    };
    var _closure1_slot7 = var5;
    var4 = function getSelectedNoiseSuppressionOption() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arguments[0];
            var5 = undefined;
            if(!(var6 === var5)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var6 = _closure1_slot3;
case 2:
            var1 = var6.getNoiseSuppression;
            var1 = var1.bind(var6)();
            var2 = var6.getNoiseCancellation;
            var4 = var2.bind(var6)();
            var2 = _closure1_slot7;
            var2 = var2.bind(var5)(var6);
            var3 = _closure1_slot6;
            if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var3.NONE;
            _fun0002_ip = 8; continue _fun0002;
case 6:
            var1 = var3.STANDARD;
case 8:
            _fun0002_ip = 9; continue _fun0002;
case 4:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = var3.KRISP;
            _fun0002_ip = 12; continue _fun0002;
case 10:
            var2 = var3.NONE;
case 12:
            var1 = var2;
case 9:
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var9[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var7 = var6.AnalyticsPages;
    var _closure1_slot4 = var7;
    var6 = var6.AnalyticsSections;
    var _closure1_slot5 = var6;
    var6 = {};
    var7 = 'NONE';
    var6['NONE'] = var7;
    var7 = 'STANDARD';
    var6['STANDARD'] = var7;
    var7 = 'KRISP';
    var6['KRISP'] = var7;
    var _closure1_slot6 = var6;
    var7 = 5;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/user_settings/native/voice/UserSettingsVoiceUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function handleAutomaticGainControlChange(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 2;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.setAutomaticGainControl;
        var3 = {};
        var6 = _closure1_slot4;
        var6 = var6.USER_SETTINGS;
        var3['page'] = var6;
        var2 = _closure1_slot5;
        var2 = var2.SETTINGS_VOICE_AND_VIDEO;
        var3['section'] = var2;
        var2 = arg1;
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['handleAutomaticGainControlChange'] = var7;
    var7 = function handleEchoCancellationChange(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 2;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.setEchoCancellation;
        var3 = {};
        var6 = _closure1_slot4;
        var6 = var6.USER_SETTINGS;
        var3['page'] = var6;
        var2 = _closure1_slot5;
        var2 = var2.SETTINGS_VOICE_AND_VIDEO;
        var3['section'] = var2;
        var2 = arg1;
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['handleEchoCancellationChange'] = var7;
    var7 = function handleNoiseSuppressionChange(arg1) {
        var6 = arg1;
        var1 = _closure1_slot6;
        var9 = var1.KRISP;
        var1 = _closure1_slot6;
        var2 = var1.STANDARD;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var3 = 2;
        var8 = var5[var3];
        var1 = undefined;
        var12 = var4.bind(var1)(var8);
        var11 = var12.setNoiseCancellation;
        var10 = {};
        var8 = _closure1_slot4;
        var13 = var8.USER_SETTINGS;
        var10['page'] = var13;
        var7 = _closure1_slot5;
        var13 = var7.SETTINGS_VOICE_AND_VIDEO;
        var10['section'] = var13;
        var9 = var6 === var9;
        var9 = var11.bind(var12)(var9, var10);
        var3 = var5[var3];
        var5 = var4.bind(var1)(var3);
        var4 = var5.setNoiseSuppression;
        var3 = {};
        var8 = var8.USER_SETTINGS;
        var3['page'] = var8;
        var7 = var7.SETTINGS_VOICE_AND_VIDEO;
        var3['section'] = var7;
        var2 = var6 === var2;
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['handleNoiseSuppressionChange'] = var7;
    var3['NoiseSuppressionOpt'] = var6;
    var3['getNoiseCancellationDeferredToSystem'] = var5;
    var5 = function useNoiseCancellationDeferredToSystem() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var3 = _closure1_slot7;
            var2 = _closure1_slot3;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useNoiseCancellationDeferredToSystem'] = var5;
    var3['getSelectedNoiseSuppressionOption'] = var4;
    var2 = function useSelectedNoiseSuppressionOption() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var3 = _closure1_slot8;
            var2 = _closure1_slot3;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useSelectedNoiseSuppressionOption'] = var2;
    return var1;
})();