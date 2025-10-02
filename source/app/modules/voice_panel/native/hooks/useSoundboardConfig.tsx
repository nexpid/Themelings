// app/modules/voice_panel/native/hooks/useSoundboardConfig.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var8 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var8);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = {};
    var5 = 'call control drawer';
    var2['VOICE_CONTROLS'] = var5;
    var5 = 'call floating button';
    var2['FLOATING_BUTTON'] = var5;
    var5 = 'call header';
    var2['HEADER'] = var5;
    var _closure1_slot5 = var2;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_panel/native/hooks/useSoundboardConfig.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useSoundboardConfig(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var4 = arg2;
            var _closure2_slot0 = var7;
            var _closure2_slot1 = var4;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 2;
            var1 = var10[var1];
            var8 = undefined;
            var1 = var9.bind(var8)(var1);
            var6 = var1.bind(var8)(var7);
            var12 = _closure1_slot0;
            var1 = 3;
            var1 = var10[var1];
            var11 = var12.bind(var8)(var1);
            var2 = var11.UNSAFE_useIsDismissibleContentDismissed;
            var1 = 4;
            var1 = var10[var1];
            var1 = var12.bind(var8)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.SOUNDBOARD_MOBILE_NEW_BADGE;
            var1 = var2.bind(var11)(var1);
            var2 = !var1;
            var1 = 5;
            var1 = var10[var1];
            var10 = var9.bind(var8)(var1);
            var9 = var10.useExperiment;
            var8 = {};
            var8['location'] = var4;
            var1 = {};
            var11 = true;
            var1['autoTrackExposure'] = var11;
            var11 = !var6;
            var1['disable'] = var11;
            var1 = var9.bind(var10)(var8, var1);
            var9 = var1.enabled;
            var10 = var1.showInHeader;
            var1 = {};
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = _closure1_slot5;
            var8 = var8.VOICE_CONTROLS;
            var8 = var4 === var8;
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = var9;
            if(!var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var11 = !var10;
case 6:
            if(!var11) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var12 = _closure1_slot5;
            var12 = var12.FLOATING_BUTTON;
            var11 = var4 === var12;
case 8:
            var8 = var11;
case 4:
            if(var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            if(!var9) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var9 = var10;
case 12:
            if(!var9) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var10 = _closure1_slot5;
            var10 = var10.HEADER;
            var9 = var4 === var10;
case 14:
            var8 = var9;
case 10:
            var6 = var8;
case 2:
            var1['visible'] = var6;
            var6 = _closure1_slot3;
            var8 = var6.useCallback;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var4;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure1_slot4;
                    var3 = var5.getChannel;
                    var2 = _closure2_slot0;
                    var5 = var3.bind(var5)(var2);
                    var2 = null;
                    if(!(var2 != var5)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.showSoundboardSoundPickerActionSheet;
                    var1 = {};
                    var1['channel'] = var5;
                    var4 = _closure2_slot1;
                    var1['analyticsSource'] = var4;
                    var1 = var2.bind(var3)(var1);
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var8.bind(var6)(var4, var5);
            var1['handlePress'] = var4;
            var5 = var6.useMemo;
            var4 = new Array(1);
            var4[0] = var7;
            var3 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 7;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var5 = _closure1_slot4;
                var4 = var5.getChannel;
                var1 = _closure2_slot0;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var3 = var5.bind(var6)(var3, var4);
            var1['disabled'] = var3;
            var1['showIndicator'] = var2;
            return var1;
        }
    };
    var3['default'] = var4;
    var3['SoundboardButtonLocation'] = var2;
    return var1;
})();