// app/modules/soundboard/native/SoundboardHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.SOUNDS_PER_ROW;
    var _closure1_slot7 = var7;
    var4 = var4.SOUND_ROW_PADDING;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot9 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/soundboard/native/SoundboardHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useSoundButtonStyleConfig() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 6;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var1 = var1.bind(var3)();
        var6 = var1.width;
        var1 = {};
        var3 = global;
        var5 = var3.Math;
        var4 = var5.min;
        var3 = _closure1_slot9;
        var4 = var4.bind(var5)(var3, var6);
        var3 = _closure1_slot8;
        var3 = var4 - var3;
        var2 = _closure1_slot7;
        var2 = var3 / var2;
        var1['buttonWidth'] = var2;
        return var1;
    };
    var3['useSoundButtonStyleConfig'] = var4;
    var2 = function useMaybeFetchSoundboardSounds(arg1) {
        var1 = arg1;
        var6 = var1.shouldFetch;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var4 = 7;
        var8 = var7[var4];
        var1 = undefined;
        var11 = var5.bind(var1)(var8);
        var10 = var11.useStateFromStores;
        var8 = _closure1_slot5;
        var9 = new Array(1);
        var9[0] = var8;
        var8 = function() {
            var1 = _closure1_slot5;
            var1 = var1.saturation;
            return var1;
        };
        var8 = var10.bind(var11)(var9, var8);
        var4 = var7[var4];
        var9 = var5.bind(var1)(var4);
        var7 = var9.useStateFromStores;
        var4 = _closure1_slot6;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = function() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.isThemeDark;
            var1 = _closure1_slot6;
            var1 = var1.theme;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var7 = var7.bind(var9)(var5, var4);
        var5 = _closure1_slot4;
        var4 = var5.useEffect;
        var3 = new Array(3);
        var3[0] = var8;
        var3[1] = var7;
        var3[2] = var6;
        var2 = function() {
            var2 = function _fetchAndHydrateColors() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                            var2 = _closure2_slot0;
                            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 9;
                            var2 = var5[var2];
                            var3 = undefined;
                            var2 = var4.bind(var3)(var2);
                            var6 = var2.FrecencyUserSettingsActionCreators;
                            var2 = var6.loadIfNecessary;
                            var2 = var2.bind(var6)();
                            var2 = 10;
                            var2 = var5[var2];
                            var3 = var4.bind(var3)(var2);
                            var2 = var3.maybeFetchSoundboardSounds;
                            var2 = var2.bind(var3)();
                            SaveGenerator(address=84);
case 6:
                            return var2;
case 7:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 4:
                            var3 = undefined;
                            return var3;
case 8:
                            return var2;
case 2:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure3_slot0 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure3_slot0 = var2;
            var2 = function fetchAndHydrateColors() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var1 = undefined;
            var2 = var2.bind(var1)();
            var2 = !var2;
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useMaybeFetchSoundboardSounds'] = var2;
    return var1;
})();