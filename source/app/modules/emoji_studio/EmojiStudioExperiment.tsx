// app/modules/emoji_studio/EmojiStudioExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var14 = true;
    var4['value'] = var14;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = 0;
    var5 = var9[var4];
    var1 = undefined;
    var10 = var8.bind(var1)(var5);
    var6 = var10.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-07_emoji_studio_mobile', 'label': 'Emoji Studio (Mobile)'};
    var7 = {};
    var13 = false;
    var7['enabled'] = var13;
    var5['defaultConfig'] = var7;
    var12 = {'id': 1, 'label': 'Enabled'};
    var7 = 1;
    var11 = {};
    var11['enabled'] = var14;
    var12['config'] = var11;
    var11 = new Array(1);
    var11[0] = var12;
    var5['treatments'] = var11;
    var6 = var6.bind(var10)(var5);
    var _closure1_slot0 = var6;
    var5 = var9[var4];
    var11 = var8.bind(var1)(var5);
    var10 = var11.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-08_emoji_studio_entrypoint', 'label': 'Emoji Studio Entrypoint'};
    var12 = {};
    var12['enabled'] = var13;
    var5['defaultConfig'] = var12;
    var13 = {'id': 1, 'label': 'Enabled'};
    var12 = {};
    var12['enabled'] = var14;
    var13['config'] = var12;
    var12 = new Array(1);
    var12[0] = var13;
    var5['treatments'] = var12;
    var5 = var10.bind(var11)(var5);
    var _closure1_slot1 = var5;
    var4 = var9[var4];
    var11 = var8.bind(var1)(var4);
    var10 = var11.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-08_emoji_studio_speedrun', 'label': 'Emoji Studio V2 Speedrun'};
    var12 = {'isEmojiEditingExperimentEnabled': false, 'isSelectFileBeforeEmojiStudioExperimentEnabled': false};
    var4['defaultConfig'] = var12;
    var13 = {'id': 1, 'label': 'Emoji Editing'};
    var12 = {'isEmojiEditingExperimentEnabled': true, 'isSelectFileBeforeEmojiStudioExperimentEnabled': false};
    var13['config'] = var12;
    var12 = new Array(2);
    var12[0] = var13;
    var13 = {'id': 2, 'label': '"Speedrun": Select Image File Before Emoji Studio'};
    var14 = {'isEmojiEditingExperimentEnabled': false, 'isSelectFileBeforeEmojiStudioExperimentEnabled': true};
    var13['config'] = var14;
    var12[1] = var13;
    var4['treatments'] = var12;
    var4 = var10.bind(var11)(var4);
    var _closure1_slot2 = var4;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/emoji_studio/EmojiStudioExperiment.tsx';
    var7 = var8.bind(var9)(var7);
    var3['MobileEmojiStudioExperiment'] = var6;
    var3['EmojiStudioEntrypointExperiment'] = var5;
    var3['EmojiStudioV2SpeedrunExperiment'] = var4;
    var2 = function useEmojiStudioExperiment(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.location;
            var8 = var2.autoTrackExposure;
            var7 = var2.disable;
            var2 = undefined;
            if(!(var7 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = false;
case 2:
            var6 = _closure1_slot0;
            var5 = var6.useExperiment;
            var3 = {};
            var3['location'] = var1;
            var2 = {};
            var2['autoTrackExposure'] = var8;
            var2['disable'] = var7;
            var2 = var5.bind(var6)(var3, var2);
            var2 = var2.enabled;
            var9 = _closure1_slot1;
            var6 = var9.useExperiment;
            var5 = {};
            var5['location'] = var1;
            var3 = {};
            var3['autoTrackExposure'] = var8;
            var3['disable'] = var7;
            var3 = var6.bind(var9)(var5, var3);
            var3 = var3.enabled;
            var6 = _closure1_slot2;
            var5 = var6.useExperiment;
            var4 = {};
            var4['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var8;
            var1['disable'] = var7;
            var1 = var5.bind(var6)(var4, var1);
            var5 = var1.isEmojiEditingExperimentEnabled;
            var4 = var1.isSelectFileBeforeEmojiStudioExperimentEnabled;
            var1 = {};
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var5;
case 4:
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var4;
case 6:
            var1['enabled'] = var3;
            var1['isMobileEnabled'] = var2;
            return var1;
        }
    };
    var3['useEmojiStudioExperiment'] = var2;
    return var1;
})();