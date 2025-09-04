// app/modules/double_tap_to_react/native/DoubleTapToReactHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/double_tap_to_react/native/DoubleTapToReactHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useDoubleTapToReactUpsell(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 2;
            var1 = var7[var4];
            var6 = undefined;
            var9 = var5.bind(var6)(var1);
            var8 = var9.useDoubleTapToReactExperiment;
            var2 = {};
            var1 = false;
            var2['autoTrackExposure'] = var1;
            var1 = arg1;
            var1 = var8.bind(var9)(var1, var2);
            var2 = var1.enabled;
            var1 = 3;
            var1 = var7[var1];
            var8 = var5.bind(var6)(var1);
            var7 = var8.useStateFromStoresObject;
            var1 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure1_slot3;
                    var1 = var1.settings;
                    var3 = var1.textAndImages;
                    var2 = null;
                    var4 = var2 == var3;
                    var1 = undefined;
                    if(var4) { _fun0002_ip = 36; continue _fun0002 }
 30:
                    var1 = var3.defaultReactionEmoji;
 36:
                    if(!(var2 == var1)) { _fun0002_ip = 42; continue _fun0002 }
 40:
                    var1 = {};
 42:
                    return var1;
                }
            };
            var5 = var7.bind(var8)(var5, var1);
            var8 = var5.emojiId;
            var7 = null;
            var9 = var7 == var8;
            var1 = undefined;
            if(var9) { _fun0001_ip = 121; continue _fun0001 }
 116:
            var1 = var8.value;
 121:
            var1 = var7 == var1;
            if(!var1) { _fun0001_ip = 152; continue _fun0001 }
 128:
            var8 = var5.emojiName;
            var9 = var7 == var8;
            var5 = undefined;
            if(var9) { _fun0001_ip = 148; continue _fun0001 }
 143:
            var5 = var8.value;
 148:
            var1 = var7 == var5;
 152:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 4;
            var5 = var8[var5];
            var7 = var7.bind(var6)(var5);
            var5 = var7.useSelectedDismissibleContent;
            if(!var2) { _fun0001_ip = 184; continue _fun0001 }
 181:
            if(var1) { _fun0001_ip = 190; continue _fun0001 }
 184:
            var2 = new Array(0);
            _fun0001_ip = 233; continue _fun0001;
 190:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 5;
            var1 = var9[var1];
            var1 = var8.bind(var6)(var1);
            var1 = var1.DismissibleContent;
            var8 = var1.DOUBLE_TAP_TO_REACT_UPSELL;
            var1 = new Array(1);
            var1[0] = var8;
            var2 = var1;
 233:
            var1 = true;
            var2 = var5.bind(var7)(var2, var6, var1);
            var1 = _closure1_slot2;
            var2 = var1.bind(var6)(var2, var4);
            var1 = 0;
            var4 = var2[var1];
            var1 = 1;
            var2 = var2[var1];
            var1 = {};
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 5;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.DOUBLE_TAP_TO_REACT_UPSELL;
            var3 = var4 === var3;
            var1['showDoubleTapUpsell'] = var3;
            var1['markAsDismissed'] = var2;
            return var1;
        }
    };
    var3['useDoubleTapToReactUpsell'] = var2;
    return var1;
})();