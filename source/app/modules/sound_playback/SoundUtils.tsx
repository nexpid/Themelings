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
            var7 = arguments[2];
            var6 = arguments[3];
            var5 = arguments[4];
            var3 = undefined;
            if(!(var7 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = 1;
case 2:
            if(!(var6 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot5;
            var6 = var1.DEFAULT;
case 4:
            if(!(var5 === var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = false;
case 6:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            var4 = var1.MobileAudioSound;
            var1 = var4.prototype;
            var2 = Object.create(var1, {constructor: {value: var4}});
            var12 = arg1;
            var11 = arg2;
            var13 = var2;
            var10 = var7;
            var9 = var6;
            var8 = var5;
            var1 = new var13[var4](var12, var11, var10, var9, var8, var7);
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
            if(!(var5 === var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var5 = 1;
case 2:
            if(!(var4 === var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = _closure1_slot5;
            var4 = var1.DEFAULT;
case 4:
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
            if(!(var8 != var7)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = var7;
case 8:
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
            var10 = arg1;
            var9 = arguments[1];
            var5 = arguments[2];
            var14 = arguments[3];
            var2 = arguments[4];
            var1 = undefined;
            if(!(var9 === var1)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var9 = 1;
case 10:
            var _closure2_slot0 = var5;
            var4 = _closure1_slot4;
            var4 = var4.disableSounds;
            if(var4) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 4;
            var4 = var7[var4];
            var7 = var6.bind(var1)(var4);
            var4 = null;
            var6 = var14;
            if(!(var4 == var6)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var12 = _closure1_slot3;
            var8 = var12.getSoundpack;
            var6 = var8.bind(var12)();
case 14:
            var6 = var7.bind(var1)(var6);
            if(!(var4 == var6)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var12 = _closure1_slot6;
            var8 = var12.log;
            var7 = global;
            var7 = var7.HermesInternal;
            var13 = var7.concat;
            var7 = 'Unable to find sound for pack name: ';
            var7 = var13.bind(var7)(var14);
            var7 = var8.bind(var12)(var7);
case 16:
            var8 = _closure1_slot7;
            var6 = var6[var10];
            var7 = var10;
            if(!(var4 != var6)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var7 = var6;
case 18:
            var12 = var4 == var2;
            var6 = undefined;
            if(var12) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var6 = var2.outputChannel;
case 20:
            if(!(var4 == var6)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var11 = _closure1_slot5;
            var6 = var11.DEFAULT;
case 22:
            var12 = var4 == var2;
            var11 = undefined;
            if(var12) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var11 = var2.trackNotificationFailure;
case 24:
            var2 = var4 != var11;
            if(!var2) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var2 = var11;
case 26:
            var20 = undefined;
            var19 = var7;
            var18 = var10;
            var17 = var9;
            var16 = var6;
            var15 = var2;
            var2 = var20[var8](var19, var18, var17, var16, var15, var14);
            if(!(var4 == var5)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var4 = var2.play;
            var4 = var4.bind(var2)();
            _fun0003_ip = 30; continue _fun0003;
case 28:
            var4 = var2.playWithListener;
            var5 = var4.bind(var2)();
            var4 = var5.then;
            var3 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    if(!var1) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
case 30:
            return var2;
case 12:
            return var1;
        }
    };
    var3['playSound'] = var2;
    return var1;
})();