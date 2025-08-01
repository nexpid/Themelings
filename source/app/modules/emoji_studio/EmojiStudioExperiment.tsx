// app/modules/emoji_studio/EmojiStudioExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var13 = true;
    var4['value'] = var13;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = 0;
    var5 = var8[var4];
    var1 = undefined;
    var10 = var7.bind(var1)(var5);
    var9 = var10.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-04_emoji_studio', 'label': 'Emoji Studio'};
    var12 = false;
    var6 = {'enabled': false, 'showExpressionPickerButton': false};
    var5['defaultConfig'] = var6;
    var6 = {'id': 1, 'label': 'Enabled - New Modal'};
    var11 = {'enabled': true, 'showExpressionPickerButton': false};
    var6['config'] = var11;
    var11 = new Array(2);
    var11[0] = var6;
    var14 = {'id': 2, 'label': 'Enabled - New Modal with Expression Picker Button'};
    var6 = 2;
    var15 = {'enabled': true, 'showExpressionPickerButton': true};
    var14['config'] = var15;
    var11[1] = var14;
    var5['treatments'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot2 = var5;
    var4 = var8[var4];
    var10 = var7.bind(var1)(var4);
    var9 = var10.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-07_emoji_studio_mobile', 'label': 'Emoji Studio (Mobile)'};
    var11 = {};
    var11['enabled'] = var12;
    var4['defaultConfig'] = var11;
    var12 = {'id': 1, 'label': 'Enabled'};
    var11 = {};
    var11['enabled'] = var13;
    var12['config'] = var11;
    var11 = new Array(1);
    var11[0] = var12;
    var4['treatments'] = var11;
    var4 = var9.bind(var10)(var4);
    var _closure1_slot3 = var4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/emoji_studio/EmojiStudioExperiment.tsx';
    var6 = var7.bind(var8)(var6);
    var3['EmojiStudioExperiment'] = var5;
    var3['MobileEmojiStudioExperiment'] = var4;
    var2 = function useEmojiStudioExperiment(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.location;
            var9 = var1.autoTrackExposure;
            var8 = var1.disable;
            var5 = undefined;
            if(!(var8 === var5)) { _fun0001_ip = 28; continue _fun0001 }
 26:
            var8 = false;
 28:
            var2 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 1;
            var1 = var6[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.isInCultureCreationHoldout;
            var7 = var1.bind(var2)(var3);
            var6 = _closure1_slot2;
            var5 = var6.getCurrentConfig;
            var2 = {};
            var2['location'] = var3;
            var1 = {};
            var1['autoTrackExposure'] = var9;
            var10 = var7;
            if(var7) { _fun0001_ip = 94; continue _fun0001 }
 91:
            var10 = var8;
 94:
            var1['disable'] = var10;
            var1 = var5.bind(var6)(var2, var1);
            var5 = var1.enabled;
            var2 = var1.showExpressionPickerButton;
            var1 = {};
            var1['enabled'] = var5;
            var6 = _closure1_slot3;
            var5 = var6.getCurrentConfig;
            var4 = {};
            var4['location'] = var3;
            var3 = {};
            var3['autoTrackExposure'] = var9;
            if(var7) { _fun0001_ip = 151; continue _fun0001 }
 148:
            var7 = var8;
 151:
            var3['disable'] = var7;
            var3 = var5.bind(var6)(var4, var3);
            var3 = var3.enabled;
            var1['isMobileEnabled'] = var3;
            var1['showExpressionPickerButton'] = var2;
            return var1;
        }
    };
    var3['useEmojiStudioExperiment'] = var2;
    return var1;
})();