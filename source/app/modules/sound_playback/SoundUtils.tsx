// app/modules/sound_playback/SoundUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function createSound(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arguments[2];
            var5 = arguments[3];
            var3 = undefined;
            if(!(var6 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = 1;
case 2:
            if(!(var5 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot5;
            var5 = var1.DEFAULT;
case 4:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            var4 = var1.MobileAudioSound;
            var1 = var4.prototype;
            var2 = Object.create(var1, {constructor: {value: var4}});
            var10 = arg1;
            var9 = arg2;
            var11 = var2;
            var8 = var6;
            var7 = var5;
            var1 = new var11[var4](var10, var9, var8, var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.SoundOutputChannel;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var9 = var8.bind(var1)(var5);
    var5 = var9.prototype;
    var8 = Object.create(var5, {constructor: {value: var9}});
    var13 = 'SoundUtils';
    var14 = var8;
    var5 = new var14[var9](var13, var12);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot6 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/sound_playback/SoundUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function createSoundForPack(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var5 = arguments[2];
            var4 = arguments[3];
            var3 = undefined;
            if(!(var5 === var3)) { _fun0002_ip = 6; continue _fun0002 }
case 2:
            var5 = 1;
case 6:
            if(!(var4 === var3)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var1 = _closure1_slot5;
            var4 = var1.DEFAULT;
case 7:
            var2 = _closure1_slot7;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 4;
            var1 = var8[var1];
            var7 = var7.bind(var3)(var1);
            var1 = arg2;
            var1 = var7.bind(var3)(var1);
            var7 = var1[var6];
            var8 = null;
            var1 = var6;
            if(!(var8 != var7)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var1 = var7;
case 9:
            var13 = undefined;
            var12 = var1;
            var11 = var6;
            var10 = var5;
            var9 = var4;
            var1 = var13[var2](var12, var11, var10, var9, var8);
            return var1;
        }
    };
    var3['createSoundForPack'] = var5;
    var3['createSound'] = var4;
    var2 = function playSound(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var9 = arg1;
            var8 = arguments[1];
            var5 = arguments[2];
            var14 = arguments[3];
            var7 = arguments[4];
            var1 = undefined;
            if(!(var8 === var1)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var8 = 1;
case 11:
            var _closure2_slot0 = var5;
            if(!(var7 === var1)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var2 = _closure1_slot5;
            var7 = var2.DEFAULT;
case 13:
            var2 = _closure1_slot4;
            var2 = var2.disableSounds;
            if(var2) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var4 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 4;
            var2 = var10[var2];
            var10 = var4.bind(var1)(var2);
            var4 = null;
            var2 = var14;
            if(!(var4 == var2)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var12 = _closure1_slot3;
            var11 = var12.getSoundpack;
            var2 = var11.bind(var12)();
case 17:
            var2 = var10.bind(var1)(var2);
            if(!(var4 == var2)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var12 = _closure1_slot6;
            var11 = var12.log;
            var10 = global;
            var10 = var10.HermesInternal;
            var13 = var10.concat;
            var10 = 'Unable to find sound for pack name: ';
            var10 = var13.bind(var10)(var14);
            var10 = var11.bind(var12)(var10);
case 19:
            var6 = _closure1_slot7;
            var10 = var2[var9];
            var2 = var9;
            if(!(var4 != var10)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var2 = var10;
case 21:
            var19 = undefined;
            var18 = var2;
            var17 = var9;
            var16 = var8;
            var15 = var7;
            var2 = var19[var6](var18, var17, var16, var15, var14);
            if(!(var4 == var5)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var4 = var2.play;
            var4 = var4.bind(var2)();
            _fun0003_ip = 25; continue _fun0003;
case 23:
            var4 = var2.playWithListener;
            var5 = var4.bind(var2)();
            var4 = var5.then;
            var3 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    if(!var1) { _fun0004_ip = 5; continue _fun0004 }
case 26:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 5:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
case 25:
            return var2;
case 15:
            return var1;
        }
    };
    var3['playSound'] = var2;
    return var1;
})();