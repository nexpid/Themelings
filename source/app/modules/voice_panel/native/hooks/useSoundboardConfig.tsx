// app/modules/voice_panel/native/hooks/useSoundboardConfig.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var5 = native3;
    var3 = native6;
    var7 = native7;
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
    var2 = native4;
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
 0:
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
            if(!var6) { _fun0001_ip = 241; continue _fun0001 }
 163:
            var8 = _closure1_slot5;
            var8 = var8.VOICE_CONTROLS;
            var8 = var4 === var8;
            if(var8) { _fun0001_ip = 209; continue _fun0001 }
 180:
            var11 = var9;
            if(!var9) { _fun0001_ip = 189; continue _fun0001 }
 186:
            var11 = !var10;
 189:
            if(!var11) { _fun0001_ip = 206; continue _fun0001 }
 192:
            var12 = _closure1_slot5;
            var12 = var12.FLOATING_BUTTON;
            var11 = var4 === var12;
 206:
            var8 = var11;
 209:
            if(var8) { _fun0001_ip = 238; continue _fun0001 }
 212:
            if(!var9) { _fun0001_ip = 218; continue _fun0001 }
 215:
            var9 = var10;
 218:
            if(!var9) { _fun0001_ip = 235; continue _fun0001 }
 221:
            var10 = _closure1_slot5;
            var10 = var10.HEADER;
            var9 = var4 === var10;
 235:
            var8 = var9;
 238:
            var6 = var8;
 241:
            var1['visible'] = var6;
            var6 = _closure1_slot3;
            var8 = var6.useCallback;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var4;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = _closure1_slot4;
                    var3 = var5.getChannel;
                    var2 = _closure2_slot0;
                    var5 = var3.bind(var5)(var2);
                    var2 = null;
                    if(!(var2 != var5)) { _fun0002_ip = 78; continue _fun0002 }
 30:
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
 78:
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