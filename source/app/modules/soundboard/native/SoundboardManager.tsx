// app/modules/soundboard/native/SoundboardManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var4 = var4.Map;
    var8 = var4.prototype;
    var8 = Object.create(var8, {constructor: {value: var4}});
    var14 = var8;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var7.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var13 = 'SoundboardManagerNative';
    var14 = var8;
    var4 = new var14[var9](var13, var12);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot13 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function SoundboardManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot5;
                var4 = _closure2_slot0;
                var3 = undefined;
                var8 = var8.bind(var3)(var5, var4);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var4);
                var4 = _closure1_slot6;
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 8:
                var1 = var4.bind(var3)(var5, var1);
                var _closure3_slot0 = var1;
                var4 = function() {
                    var4 = _closure1_slot12;
                    var3 = var4.forEach;
                    var1 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.stop;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var1);
                    var1 = global;
                    var1 = var1.Map;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {constructor: {value: var1}});
                    var6 = var3;
                    var1 = new var6[var1](var5);
                    var1 = var1 instanceof Object ? var1 : var3;
                    _closure1_slot12 = var1;
                    var1 = undefined;
                    return var1;
                };
                var1['_stopAndClearSounds'] = var4;
                var4 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var6 = arg1;
                        var4 = arguments[1];
                        var5 = arguments[2];
                        var7 = arguments[3];
                        var1 = undefined;
                        if(!(var4 === var1)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var4 = 1;
case 9:
                        var8 = _closure1_slot10;
                        var3 = var8.getVoiceChannelId;
                        var3 = var3.bind(var8)();
                        if(!(var3 !== var7)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                        var3 = null;
                        if(!(var3 == var7)) { _fun0003_ip = 13; continue _fun0003 }
case 11:
                        var7 = _closure1_slot9;
                        var3 = var7.isDeaf;
                        var3 = var3.bind(var7)();
                        if(var3) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                        var7 = _closure1_slot11;
                        var3 = var7.isLocalSoundboardMuted;
                        var3 = var3.bind(var7)(var5);
                        if(var3) { _fun0003_ip = 13; continue _fun0003 }
case 15:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var3 = 10;
                        var3 = var8[var3];
                        var3 = var7.bind(var1)(var3);
                        var9 = var3.bind(var1)(var4);
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var7 = var3.concat;
                        var4 = '';
                        var3 = '-';
                        var7 = var7.bind(var4)(var5, var3, var6);
                        var4 = _closure1_slot12;
                        var3 = var4.get;
                        var4 = var3.bind(var4)(var7);
                        var3 = null;
                        if(!(var3 != var4)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                        var3 = var4.stop;
                        var3 = var3.bind(var4)();
case 16:
                        var8 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 11;
                        var3 = var4[var3];
                        var3 = var8.bind(var1)(var3);
                        var12 = var3.bind(var1)(var6);
                        var3 = _closure1_slot0;
                        var8 = 12;
                        var8 = var4[var8];
                        var11 = var3.bind(var1)(var8);
                        var10 = var11.createSound;
                        var8 = 'soundboard_sound';
                        var8 = var10.bind(var11)(var12, var8, var9);
                        var8['volume'] = var9;
                        var9 = _closure1_slot12;
                        var2 = var9.set;
                        var2 = var2.bind(var9)(var7, var8);
                        var2 = 13;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.reportSoundStartedPlaying;
                        var2 = var2.bind(var3)(var6, var5);
                        var4 = _closure3_slot0;
                        var3 = var4._playSoundWithListener;
                        var2 = {};
                        var2['sound'] = var8;
                        var2['soundKey'] = var7;
                        var2['soundId'] = var6;
                        var2['userId'] = var5;
                        var2 = var3.bind(var4)(var2);
case 13:
                        return var1;
                    }
                };
                var1['_playSound'] = var4;
                var2 = function() {
                    var4 = _closure1_slot3;
                    var3 = undefined;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                StartGenerator();
                                var2 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                if(var3) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                                var8 = var2.sound;
                                var7 = var2.soundKey;
                                var5 = var2.soundId;
                                var4 = var2.userId;
                                var3 = undefined;
                                var6 = undefined;
                                SaveGenerator(address=44);
case 12:
                                return var3;
case 20:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=8);
                                if(var9) { _fun0004_ip = 16; continue _fun0004 }
case 21:
                                var6 = false;
case 22: // try_start_0
                                var9 = var8;
                                var8 = var9.playWithListener;
                                var8 = var8.bind(var9)();
                                SaveGenerator(address=72);
case 23:
                                return var8;
case 3:
                                ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                                if(var9) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                                var6 = var8;
case 26: // try_end0
                                _fun0004_ip = 8; continue _fun0004;
case 24:
                                return var8;
case 6: // catch_target0
                                CatchBlockStart(arg_register=7);
                                var11 = _closure1_slot13;
                                var10 = var11.error;
                                var9 = {};
                                var9['error'] = var8;
                                var8 = 'Failed to play sound';
                                var8 = var10.bind(var11)(var8, var9);
                                var6 = true;
case 8:
                                if(!var6) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                                var9 = _closure1_slot12;
                                var8 = var9.delete;
                                var7 = var8.bind(var9)(var7);
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var6 = 13;
                                var6 = var8[var6];
                                var7 = var7.bind(var3)(var6);
                                var6 = var7.reportSoundFinishedPlaying;
                                var4 = var6.bind(var7)(var5, var4);
case 27:
                                return var3;
case 16:
                                return var2;
case 18:
                                return var1;
                            }
                        };
                        var2 = var1.next;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure4_slot0 = var2;
                    var1 = function() {
                        var1 = undefined;
                        var4 = _closure4_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var2 = var2.bind(var3)();
                var1['_playSoundWithListener'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot8;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var14 = var4;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/soundboard/native/SoundboardManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();