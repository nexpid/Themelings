// app/modules/soundboard/useSoundboardSoundPlayer.native.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SoundOutputChannel;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/soundboard/useSoundboardSoundPlayer.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSoundboardSoundPlayer(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var4 = arg2;
            var _closure2_slot0 = var9;
            var _closure2_slot1 = var4;
            var1 = arguments[2];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 3;
            var1 = var5[var1];
            var1 = var3.bind(var6)(var1);
            var3 = var1.SoundboardSettings;
            var1 = var3.getSetting;
            var5 = var1.bind(var3)();
            var3 = null;
            var7 = var3 == var5;
            var1 = undefined;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var5.volume;
case 4:
            var1 = var3 != var1;
case 2:
            var1 = arguments[3];
            if(!(var1 === var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = _closure1_slot5;
            var1 = var1.DEFAULT;
case 6:
            var _closure2_slot2 = var6;
            var7 = _closure1_slot3;
            var5 = var7.useContext;
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 4;
            var3 = var10[var3];
            var3 = var8.bind(var6)(var3);
            var3 = var5.bind(var7)(var3);
            var8 = var3.audioRef;
            _closure2_slot2 = var8;
            var5 = _closure1_slot0;
            var3 = 5;
            var3 = var10[var3];
            var10 = var5.bind(var6)(var3);
            var6 = var10.useStateFromStores;
            var1 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var1;
            var3 = new Array(1);
            var3[0] = var9;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.isPlayingSound;
                var1 = _closure2_slot0;
                var1 = var1.soundId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var6.bind(var10)(var5, var1, var3);
            var1 = {};
            var6 = var7.useCallback;
            var5 = new Array(3);
            var5[0] = var9;
            var5[1] = var8;
            var5[2] = var4;
            var4 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var2 = var2.current;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = _closure2_slot2;
                    var4 = var2.current;
                    var2 = var4.pause;
                    var2 = var2.bind(var4)();
case 8:
                    var2 = _closure2_slot1;
                    if(!(var3 != var2)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.playSound;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = arg1;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var4, var5);
            var1['playSoundboardSound'] = var4;
            var1['isPlayingSound'] = var3;
            var2 = function previewSound() {
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.resolve;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1['previewSound'] = var2;
            var2 = false;
            var1['isPreviewingSound'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();