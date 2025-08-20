// app/modules/emoji_studio/EmojiStudioExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var15 = true;
    var4['value'] = var15;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = 0;
    var5 = var10[var4];
    var1 = undefined;
    var7 = var9.bind(var1)(var5);
    var6 = var7.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-04_emoji_studio', 'label': 'Emoji Studio'};
    var14 = false;
    var8 = {'enabled': false, 'showExpressionPickerButton': false};
    var5['defaultConfig'] = var8;
    var8 = {'id': 1, 'label': 'Enabled - New Modal'};
    var11 = {'enabled': true, 'showExpressionPickerButton': false};
    var8['config'] = var11;
    var11 = new Array(3);
    var11[0] = var8;
    var12 = {'id': 2, 'label': 'Enabled - New Modal with Expression Picker Button'};
    var8 = 2;
    var13 = {'enabled': true, 'showExpressionPickerButton': true};
    var12['config'] = var13;
    var11[1] = var12;
    var12 = {'id': 3, 'label': 'Enabled - New Entrypoint Only'};
    var13 = {'enabled': false, 'showExpressionPickerButton': true};
    var12['config'] = var13;
    var11[2] = var12;
    var5['treatments'] = var11;
    var7 = var6.bind(var7)(var5);
    var _closure1_slot2 = var7;
    var5 = var10[var4];
    var11 = var9.bind(var1)(var5);
    var6 = var11.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-07_emoji_studio_mobile', 'label': 'Emoji Studio (Mobile)'};
    var12 = {};
    var12['enabled'] = var14;
    var5['defaultConfig'] = var12;
    var13 = {'id': 1, 'label': 'Enabled'};
    var12 = {};
    var12['enabled'] = var15;
    var13['config'] = var12;
    var12 = new Array(1);
    var12[0] = var13;
    var5['treatments'] = var12;
    var6 = var6.bind(var11)(var5);
    var _closure1_slot3 = var6;
    var5 = var10[var4];
    var12 = var9.bind(var1)(var5);
    var11 = var12.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-08_emoji_studio_entrypoint', 'label': 'Emoji Studio Entrypoint'};
    var13 = {};
    var13['enabled'] = var14;
    var5['defaultConfig'] = var13;
    var16 = {'id': 1, 'label': 'Enabled'};
    var13 = {};
    var13['enabled'] = var15;
    var16['config'] = var13;
    var13 = new Array(1);
    var13[0] = var16;
    var5['treatments'] = var13;
    var5 = var11.bind(var12)(var5);
    var _closure1_slot4 = var5;
    var4 = var10[var4];
    var12 = var9.bind(var1)(var4);
    var11 = var12.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-08-emoji_studio_speedrun', 'label': 'Emoji Studio V2 Speedrun'};
    var13 = {};
    var13['enabled'] = var14;
    var4['defaultConfig'] = var13;
    var14 = {'id': 1, 'label': 'Enabled - Instant Upload, Emoji Editing Support'};
    var13 = {};
    var13['enabled'] = var15;
    var14['config'] = var13;
    var13 = new Array(1);
    var13[0] = var14;
    var4['treatments'] = var13;
    var4 = var11.bind(var12)(var4);
    var _closure1_slot5 = var4;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/emoji_studio/EmojiStudioExperiment.tsx';
    var8 = var9.bind(var10)(var8);
    var3['EmojiStudioExperiment'] = var7;
    var3['MobileEmojiStudioExperiment'] = var6;
    var3['EmojiStudioEntrypointExperiment'] = var5;
    var3['EmojiStudioV2SpeedrunExperiment'] = var4;
    var2 = function useEmojiStudioExperiment(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.location;
            var11 = var2.autoTrackExposure;
            var10 = var2.disable;
            var5 = undefined;
            if(!(var10 === var5)) { _fun0001_ip = 28; continue _fun0001 }
 26:
            var10 = false;
 28:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 1;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.isInCultureCreationHoldout;
            var9 = var3.bind(var4)(var1);
            var6 = _closure1_slot2;
            var5 = var6.useExperiment;
            var4 = {};
            var4['location'] = var1;
            var3 = {};
            var3['autoTrackExposure'] = var11;
            var7 = var9;
            if(var9) { _fun0001_ip = 94; continue _fun0001 }
 91:
            var7 = var10;
 94:
            var3['disable'] = var7;
            var3 = var5.bind(var6)(var4, var3);
            var6 = var3.enabled;
            var4 = var3.showExpressionPickerButton;
            var8 = _closure1_slot3;
            var7 = var8.useExperiment;
            var5 = {};
            var5['location'] = var1;
            var3 = {};
            var3['autoTrackExposure'] = var11;
            var12 = var9;
            if(var9) { _fun0001_ip = 148; continue _fun0001 }
 145:
            var12 = var10;
 148:
            var3['disable'] = var12;
            var3 = var7.bind(var8)(var5, var3);
            var5 = var3.enabled;
            var12 = _closure1_slot4;
            var8 = var12.useExperiment;
            var7 = {};
            var7['location'] = var1;
            var3 = {};
            var3['autoTrackExposure'] = var11;
            var13 = var9;
            if(var9) { _fun0001_ip = 196; continue _fun0001 }
 193:
            var13 = var10;
 196:
            var3['disable'] = var13;
            var3 = var8.bind(var12)(var7, var3);
            var3 = var3.enabled;
            var8 = _closure1_slot5;
            var7 = var8.useExperiment;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var11;
            if(var9) { _fun0001_ip = 241; continue _fun0001 }
 238:
            var9 = var10;
 241:
            var1['disable'] = var9;
            var1 = var7.bind(var8)(var2, var1);
            var2 = var1.enabled;
            var1 = {};
            var1['enabled'] = var6;
            var1['isMobileEnabled'] = var5;
            if(var4) { _fun0001_ip = 274; continue _fun0001 }
 271:
            var4 = var3;
 274:
            if(var4) { _fun0001_ip = 280; continue _fun0001 }
 277:
            var4 = var2;
 280:
            var1['isEntrypointEnabled'] = var4;
            var1['isEntrypointExperimentEnabled'] = var3;
            var1['isV2SpeedrunExperimentEnabled'] = var2;
            return var1;
        }
    };
    var3['useEmojiStudioExperiment'] = var2;
    return var1;
})();