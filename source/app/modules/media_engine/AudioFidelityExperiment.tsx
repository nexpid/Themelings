// app/modules/media_engine/AudioFidelityExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function getAudioFidelityExperimentConfig(arg1) {
        var1 = arg1;
        var4 = var1.location;
        var3 = _closure1_slot2;
        var2 = var3.getConfig;
        var1 = {};
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot3 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var9 = var6.bind(var1)(var5);
    var8 = var9.createApexExperiment;
    var5 = {'kind': 'user', 'name': '2026-08-audio-fidelity'};
    var10 = {'capSampleRate': false, 'capChannelCount': false, 'condition': 'none'};
    var5['defaultConfig'] = var10;
    var10 = {};
    var11 = {'capSampleRate': true, 'capChannelCount': false, 'condition': 'krisp'};
    var10[1] = var11;
    var11 = {'capSampleRate': true, 'capChannelCount': false, 'condition': 'noiseSuppression'};
    var10[2] = var11;
    var11 = {'capSampleRate': true, 'capChannelCount': false, 'condition': 'echoCancellation'};
    var10[3] = var11;
    var11 = {'capSampleRate': true, 'capChannelCount': false, 'condition': 'any'};
    var10[4] = var11;
    var11 = {'capSampleRate': true, 'capChannelCount': true, 'condition': 'krisp'};
    var10[5] = var11;
    var11 = {'capSampleRate': true, 'capChannelCount': true, 'condition': 'noiseSuppression'};
    var10[6] = var11;
    var11 = {'capSampleRate': true, 'capChannelCount': true, 'condition': 'echoCancellation'};
    var10[7] = var11;
    var11 = {'capSampleRate': true, 'capChannelCount': true, 'condition': 'any'};
    var10[8] = var11;
    var5['variations'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot2 = var5;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/media_engine/AudioFidelityExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getAudioFidelityExperimentConfig'] = var4;
    var2 = function getVoiceFidelityCaps(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg2;
            var1 = arg1;
            var3 = var1.location;
            var4 = _closure1_slot3;
            var1 = {};
            var1['location'] = var3;
            var3 = undefined;
            var4 = var4.bind(var3)(var1);
            var7 = var4.condition;
            var1 = 'krisp';
            if(!(var1 !== var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 'noiseSuppression';
            if(!(var1 !== var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = 'echoCancellation';
            if(!(var1 !== var7)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = 'any';
            if(!(var1 !== var7)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = 'none';
            var1 = false;
            if(!(var6 !== var7)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 1;
            var5 = var8[var5];
            var6 = var6.bind(var3)(var5);
            var5 = var6.assertNever;
            var5 = var5.bind(var6)(var7);
            var1 = undefined;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var3 = var2.krispEnabled;
            if(var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = var2.noiseSuppressionEnabled;
case 12:
            if(var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var3 = var2.echoCancellationEnabled;
case 14:
            var1 = var3;
            _fun0001_ip = 10; continue _fun0001;
case 6:
            var1 = var2.echoCancellationEnabled;
            _fun0001_ip = 10; continue _fun0001;
case 4:
            var1 = var2.noiseSuppressionEnabled;
            _fun0001_ip = 10; continue _fun0001;
case 2:
            var1 = var2.krispEnabled;
case 10:
            if(var1) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var1 = {'maxSampleRateHz': 0, 'maxChannelCount': 0};
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var2 = {};
            var6 = var4.capSampleRate;
            var5 = 0;
            if(!var6) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var5 = 32000;
case 19:
            var2['maxSampleRateHz'] = var5;
            var4 = var4.capChannelCount;
            var3 = 0;
            if(!var4) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var3 = 1;
case 21:
            var2['maxChannelCount'] = var3;
            var1 = var2;
case 18:
            return var1;
        }
    };
    var3['getVoiceFidelityCaps'] = var2;
    return var1;
})();