// app/modules/emoji_studio/EmojiStudioExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
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
    var5 = {'kind': 'user', 'id': '2025-04_emoji_studio', 'label': 'Emoji Studio'};
    var13 = false;
    var7 = {'enabled': false, 'showExpressionPickerButton': false};
    var5['defaultConfig'] = var7;
    var7 = {'id': 1, 'label': 'Enabled - New Modal'};
    var11 = {'enabled': true, 'showExpressionPickerButton': false};
    var7['config'] = var11;
    var11 = new Array(3);
    var11[0] = var7;
    var12 = {'id': 2, 'label': 'Enabled - New Modal with Expression Picker Button'};
    var7 = 2;
    var15 = {'enabled': true, 'showExpressionPickerButton': true};
    var12['config'] = var15;
    var11[1] = var12;
    var12 = {'id': 3, 'label': 'Enabled - New Entrypoint Only'};
    var15 = {'enabled': false, 'showExpressionPickerButton': true};
    var12['config'] = var15;
    var11[2] = var12;
    var5['treatments'] = var11;
    var6 = var6.bind(var10)(var5);
    var _closure1_slot2 = var6;
    var5 = var9[var4];
    var11 = var8.bind(var1)(var5);
    var10 = var11.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-07_emoji_studio_mobile', 'label': 'Emoji Studio (Mobile)'};
    var12 = {};
    var12['enabled'] = var13;
    var5['defaultConfig'] = var12;
    var15 = {'id': 1, 'label': 'Enabled'};
    var12 = {};
    var12['enabled'] = var14;
    var15['config'] = var12;
    var12 = new Array(1);
    var12[0] = var15;
    var5['treatments'] = var12;
    var5 = var10.bind(var11)(var5);
    var _closure1_slot3 = var5;
    var4 = var9[var4];
    var11 = var8.bind(var1)(var4);
    var10 = var11.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-08_emoji_studio_entrypoint', 'label': 'Emoji Studio Entrypoint'};
    var12 = {};
    var12['enabled'] = var13;
    var4['defaultConfig'] = var12;
    var13 = {'id': 1, 'label': 'Enabled'};
    var12 = {};
    var12['enabled'] = var14;
    var13['config'] = var12;
    var12 = new Array(1);
    var12[0] = var13;
    var4['treatments'] = var12;
    var4 = var10.bind(var11)(var4);
    var _closure1_slot4 = var4;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/emoji_studio/EmojiStudioExperiment.tsx';
    var7 = var8.bind(var9)(var7);
    var3['EmojiStudioExperiment'] = var6;
    var3['MobileEmojiStudioExperiment'] = var5;
    var3['EmojiStudioEntrypointExperimentConfig'] = var4;
    var2 = function useEmojiStudioExperiment(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.location;
            var10 = var2.autoTrackExposure;
            var9 = var2.disable;
            var5 = undefined;
            if(!(var9 === var5)) { _fun0001_ip = 28; continue _fun0001 }
 26:
            var9 = false;
 28:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 1;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.isInCultureCreationHoldout;
            var8 = var3.bind(var4)(var1);
            var6 = _closure1_slot2;
            var5 = var6.useExperiment;
            var4 = {};
            var4['location'] = var1;
            var3 = {};
            var3['autoTrackExposure'] = var10;
            var7 = var8;
            if(var8) { _fun0001_ip = 94; continue _fun0001 }
 91:
            var7 = var9;
 94:
            var3['disable'] = var7;
            var3 = var5.bind(var6)(var4, var3);
            var5 = var3.enabled;
            var4 = var3.showExpressionPickerButton;
            var11 = _closure1_slot3;
            var7 = var11.useExperiment;
            var6 = {};
            var6['location'] = var1;
            var3 = {};
            var3['autoTrackExposure'] = var10;
            var12 = var8;
            if(var8) { _fun0001_ip = 148; continue _fun0001 }
 145:
            var12 = var9;
 148:
            var3['disable'] = var12;
            var3 = var7.bind(var11)(var6, var3);
            var3 = var3.enabled;
            var7 = _closure1_slot4;
            var6 = var7.useExperiment;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var10;
            if(var8) { _fun0001_ip = 193; continue _fun0001 }
 190:
            var8 = var9;
 193:
            var1['disable'] = var8;
            var1 = var6.bind(var7)(var2, var1);
            var2 = var1.enabled;
            var1 = {};
            var1['enabled'] = var5;
            var1['isMobileEnabled'] = var3;
            var3 = var2;
            if(var3) { _fun0001_ip = 229; continue _fun0001 }
 226:
            var3 = var4;
 229:
            var1['isEntrypointEnabled'] = var3;
            var1['isEntrypointExperimentEnabled'] = var2;
            return var1;
        }
    };
    var3['useEmojiStudioExperiment'] = var2;
    return var1;
})();