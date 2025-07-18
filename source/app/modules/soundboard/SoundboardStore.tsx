// app/modules/soundboard/SoundboardStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot24 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0002_ip = 54; continue _fun0002 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0002_ip = 342; continue _fun0002 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 322; continue _fun0002 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 282; continue _fun0002 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 269; continue _fun0002 }
 109:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 233; continue _fun0002 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 246; continue _fun0002 }
 233:
            var9 = _closure1_slot26;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0002_ip = 264; continue _fun0002;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0002_ip = 282; continue _fun0002;
 269:
            var7 = _closure1_slot26;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0002_ip = 322; continue _fun0002 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0002_ip = 329; continue _fun0002 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0003_ip = 67; continue _fun0003;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 342:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var10 = function handleSoundCreateOrUpdate(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var2 = var1.sound;
            var _closure2_slot0 = var2;
            var5 = _closure1_slot15;
            var4 = var5.get;
            var1 = var2.guildId;
            var7 = var4.bind(var5)(var1);
            var5 = null;
            var8 = var5 == var7;
            var1 = undefined;
            var4 = undefined;
            if(var8) { _fun0005_ip = 66; continue _fun0005 }
 50:
            var8 = var7.findIndex;
            var6 = function(arg1) {
                var1 = arg1;
                var2 = var1.soundId;
                var1 = _closure2_slot0;
                var1 = var1.soundId;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var8.bind(var7)(var6);
 66:
            if(!(var5 != var7)) { _fun0005_ip = 84; continue _fun0005 }
 70:
            if(!(var5 != var4)) { _fun0005_ip = 84; continue _fun0005 }
 74:
            var6 = -1;
            if(!(var6 === var4)) { _fun0005_ip = 140; continue _fun0005 }
 84:
            if(!(var5 != var7)) { _fun0005_ip = 180; continue _fun0005 }
 88:
            if(!(var5 != var7)) { _fun0005_ip = 102; continue _fun0005 }
 92:
            var5 = var7.push;
            var5 = var5.bind(var7)(var2);
 102:
            var9 = _closure1_slot15;
            var8 = var9.set;
            var6 = var2.guildId;
            var5 = new Array(0);
            var11 = 0;
            var13 = var5;
            var12 = var7;
            var10 = arraySpread(var13, var12, var11);
            var5 = var8.bind(var9)(var6, var5);
            _fun0005_ip = 180; continue _fun0005;
 140:
            var7[var4] = var2;
            var5 = _closure1_slot15;
            var4 = var5.set;
            var3 = var2.guildId;
            var2 = new Array(0);
            var11 = 0;
            var13 = var2;
            var12 = var7;
            var6 = arraySpread(var13, var12, var11);
            var2 = var4.bind(var5)(var3, var2);
 180:
            return var1;
        }
    };
    var1 = function syncLocalSoundboardMutesFromUserSettings(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var7 = null;
            var4 = var7 == var2;
            var1 = undefined;
            var3 = undefined;
            if(var4) { _fun0006_ip = 36; continue _fun0006 }
 16:
            var2 = var2.audioContextSettings;
            var4 = var7 == var2;
            var3 = undefined;
            if(var4) { _fun0006_ip = 36; continue _fun0006 }
 31:
            var3 = var2.user;
 36:
            if(!(var7 == var3)) { _fun0006_ip = 42; continue _fun0006 }
 40:
            var3 = {};
 42:
            var2 = global;
            var4 = var2.Object;
            var2 = var4.entries;
            var10 = var2.bind(var4)(var3);
            var2 = var10.length;
            var9 = 0;
            var2 = var9 < var2;
            var8 = 2;
            var4 = 1;
            var5 = var3;
            var3 = 0;
            if(!var2) { _fun0006_ip = 158; continue _fun0006 }
 89:
            var11 = var10[var3];
            var2 = _closure1_slot8;
            var2 = var2.bind(var1)(var11, var8);
            var12 = var2[var9];
            var2 = var2[var4];
            var2 = var2.soundboardMuted;
            var11 = _closure1_slot17;
            if(var2) { _fun0006_ip = 136; continue _fun0006 }
 124:
            var2 = var11.delete;
            var2 = var2.bind(var11)(var12);
            _fun0006_ip = 146; continue _fun0006;
 136:
            var2 = var11.add;
            var2 = var2.bind(var11)(var12);
 146:
            var3 = var3 + 1;
            var2 = var10.length;
            if(var3 < var2) { _fun0006_ip = 89; continue _fun0006 }
 158:
            var3 = _closure1_slot25;
            var4 = _closure1_slot17;
            var2 = var4.keys;
            var2 = var2.bind(var4)();
            var4 = var3.bind(var1)(var2);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0006_ip = 234; continue _fun0006 }
 192:
            var9 = var3.value;
            var2 = var5[var9];
            if(!(var7 == var2)) { _fun0006_ip = 219; continue _fun0006 }
 205:
            var8 = _closure1_slot17;
            var2 = var8.delete;
            var2 = var2.bind(var8)(var9);
 219:
            var8 = var4.bind(var1)();
            var2 = var8.done;
            var3 = var8;
            if(!var2) { _fun0006_ip = 192; continue _fun0006 }
 234:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var4 = global;
    var11 = var4.Object;
    var9 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var11)(var3, var1, var2);
    var13 = 0;
    var2 = var7[var13];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var12 = 1;
    var2 = var7[var12];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var11 = 2;
    var2 = var7[var11];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.DEFAULT_SOUND_GUILD_ID;
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.UserSettingsTypes;
    var _closure1_slot13 = var2;
    var2 = {};
    var2['NOT_FETCHED'] = var13;
    var9 = 'NOT_FETCHED';
    var2[var13] = var9;
    var2['FETCHING'] = var12;
    var9 = 'FETCHING';
    var2[var12] = var9;
    var2['FETCHED'] = var11;
    var9 = 'FETCHED';
    var2[var11] = var9;
    var _closure1_slot14 = var2;
    var9 = var4.Map;
    var11 = var9.prototype;
    var11 = Object.create(var11, {constructor: {value: var9}});
    var17 = var11;
    var9 = new var17[var9](var16);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot15 = var9;
    var9 = var4.Map;
    var11 = var9.prototype;
    var11 = Object.create(var11, {constructor: {value: var9}});
    var17 = var11;
    var9 = new var17[var9](var16);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot16 = var9;
    var9 = var4.Set;
    var11 = var9.prototype;
    var11 = Object.create(var11, {constructor: {value: var9}});
    var17 = var11;
    var9 = new var17[var9](var16);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot17 = var9;
    var9 = var2.NOT_FETCHED;
    var _closure1_slot18 = var9;
    var9 = var2.NOT_FETCHED;
    var _closure1_slot19 = var9;
    var9 = var4.Set;
    var11 = var9.prototype;
    var11 = Object.create(var11, {constructor: {value: var9}});
    var17 = var11;
    var9 = new var17[var9](var16);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot20 = var9;
    var4 = var4.Map;
    var9 = var4.prototype;
    var9 = Object.create(var9, {constructor: {value: var4}});
    var17 = var9;
    var4 = new var17[var4](var16);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot21 = var4;
    var4 = false;
    var _closure1_slot22 = var4;
    var4 = 11;
    var4 = var7[var4];
    var12 = var8.bind(var1)(var4);
    var11 = var12.debounce;
    var9 = function(arg1, arg2) {
        var5 = arg1;
        var6 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 12;
        var2 = var4[var1];
        var1 = undefined;
        var8 = var6.bind(var1)(var2);
        var7 = var8.track;
        var2 = _closure1_slot12;
        var6 = var2.UPDATE_SOUNDBOARD_SETTINGS;
        var2 = {};
        var9 = global;
        var11 = var9.Math;
        var10 = var11.round;
        var3 = _closure1_slot0;
        var9 = 13;
        var9 = var4[var9];
        var12 = var3.bind(var1)(var9);
        var9 = var12.amplitudeToPerceptual;
        var9 = var9.bind(var12)(var5);
        var9 = var10.bind(var11)(var9);
        var2['volume'] = var9;
        var9 = arg2;
        var2['location_stack'] = var9;
        var2 = var7.bind(var8)(var6, var2);
        var2 = 14;
        var2 = var4[var2];
        var2 = var3.bind(var1)(var2);
        var4 = var2.SoundboardSettings;
        var3 = var4.updateSetting;
        var2 = {};
        var2['volume'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4 = 1000;
    var4 = var11.bind(var12)(var9, var4);
    var _closure1_slot23 = var4;
    var4 = 16;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function SoundboardStore() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot24;
                var1 = var1.bind(var3)();
                if(var1) { _fun0007_ip = 69; continue _fun0007 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 105; continue _fun0007;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var3 = var4.waitFor;
            var1 = _closure1_slot9;
            var3 = var3.bind(var4)(var1);
            var3 = _closure1_slot27;
            var2 = var1.settings;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(18);
        var1[0] = var5;
        var5 = {};
        var7 = 'getOverlaySerializedState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var3 = global;
            var6 = var3.Object;
            var5 = var6.fromEntries;
            var4 = _closure1_slot15;
            var4 = var5.bind(var6)(var4);
            var1['soundboardSounds'] = var4;
            var6 = var3.Array;
            var5 = var6.from;
            var4 = _closure1_slot20;
            var4 = var5.bind(var6)(var4);
            var1['favoritedSoundIds'] = var4;
            var4 = var3.Array;
            var3 = var4.from;
            var2 = _closure1_slot17;
            var2 = var3.bind(var4)(var2);
            var1['localSoundboardMutes'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getSounds';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getSoundsForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot15;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getSound';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var2 = arg2;
                var _closure3_slot0 = var2;
                var4 = _closure1_slot15;
                var3 = var4.get;
                var2 = arg1;
                var3 = var3.bind(var4)(var2);
                var2 = null;
                if(!(var2 == var3)) { _fun0008_ip = 39; continue _fun0008 }
 35:
                var3 = new Array(0);
 39:
                var2 = var3.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.soundId;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getSoundById';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = global;
            var4 = var2.Array;
            var3 = var4.from;
            var5 = _closure1_slot15;
            var2 = var5.values;
            var2 = var2.bind(var5)();
            var3 = var3.bind(var4)(var2);
            var2 = var3.flat;
            var3 = var2.bind(var3)();
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.soundId;
                var1 = _closure3_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isFetchingSounds';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot19;
            var1 = _closure1_slot14;
            var1 = var1.FETCHING;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isFetchingDefaultSounds';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot18;
            var1 = _closure1_slot14;
            var1 = var1.FETCHING;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'isFetching';
        var5['key'] = var7;
        var7 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = this;
                var1 = var3.isFetchingSounds;
                var1 = var1.bind(var3)();
                if(var1) { _fun0009_ip = 30; continue _fun0009 }
 18:
                var2 = var3.isFetchingDefaultSounds;
                var1 = var2.bind(var3)();
 30:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'shouldFetchDefaultSounds';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot18;
            var1 = _closure1_slot14;
            var1 = var1.NOT_FETCHED;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'hasFetchedDefaultSounds';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot18;
            var1 = _closure1_slot14;
            var1 = var1.FETCHED;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'isUserPlayingSounds';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var3 = _closure1_slot21;
                var2 = var3.get;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0010_ip = 35; continue _fun0010 }
 29:
                var2 = 0;
                var1 = var3 > var2;
 35:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'isPlayingSound';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot16;
            var2 = var3.get;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'isFavoriteSound';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot20;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getFavorites';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'isLocalSoundboardMuted';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot17;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'hasHadOtherUserPlaySoundInSession';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot22;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'hasFetchedAllSounds';
        var5['key'] = var7;
        var6 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var3 = _closure1_slot19;
                var1 = _closure1_slot14;
                var1 = var1.FETCHED;
                var1 = var3 === var1;
                if(!var1) { _fun0011_ip = 42; continue _fun0011 }
 24:
                var3 = _closure1_slot18;
                var2 = _closure1_slot14;
                var2 = var2.FETCHED;
                var1 = var3 === var2;
 42:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[17] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'SoundboardStore';
    var9['displayName'] = var4;
    var4 = 17;
    var4 = var7[var4];
    var16 = var8.bind(var1)(var4);
    var4 = {};
    var11 = function handleReset() {
        var3 = _closure1_slot15;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot16;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot21;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var1 = false;
        _closure1_slot22 = var1;
        var1 = _closure1_slot14;
        var3 = var1.NOT_FETCHED;
        _closure1_slot19 = var3;
        var1 = var1.NOT_FETCHED;
        _closure1_slot18 = var1;
        var1 = undefined;
        return var1;
    };
    var4['LOGOUT'] = var11;
    var11 = function handleSoundboardFetch() {
        var1 = _closure1_slot14;
        var1 = var1.FETCHING;
        _closure1_slot19 = var1;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_SOUNDBOARD_FETCH'] = var11;
    var4['GUILD_SOUNDBOARD_SOUND_CREATE'] = var10;
    var4['GUILD_SOUNDBOARD_SOUND_UPDATE'] = var10;
    var10 = function handleSoundDelete(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var2 = var1.soundId;
            var _closure2_slot0 = var2;
            var5 = var1.guildId;
            var4 = _closure1_slot15;
            var1 = var4.get;
            var7 = var1.bind(var4)(var5);
            var4 = null;
            var8 = var4 == var7;
            var1 = undefined;
            var6 = undefined;
            if(var8) { _fun0012_ip = 66; continue _fun0012 }
 50:
            var8 = var7.findIndex;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.soundId;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var6 = var8.bind(var7)(var3);
 66:
            var3 = var4 == var7;
            if(var3) { _fun0012_ip = 77; continue _fun0012 }
 73:
            var3 = var4 == var6;
 77:
            if(var3) { _fun0012_ip = 86; continue _fun0012 }
 80:
            var4 = 0;
            var3 = var6 < var4;
 86:
            if(var3) { _fun0012_ip = 135; continue _fun0012 }
 89:
            var4 = var7.splice;
            var3 = 1;
            var3 = var4.bind(var7)(var6, var3);
            var4 = _closure1_slot15;
            var3 = var4.set;
            var2 = new Array(0);
            var9 = 0;
            var11 = var2;
            var10 = var7;
            var6 = arraySpread(var11, var10, var9);
            var2 = var3.bind(var4)(var5, var2);
 135:
            return var1;
        }
    };
    var4['GUILD_SOUNDBOARD_SOUND_DELETE'] = var10;
    var10 = function handleSoundPlayStart(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var8 = var1.soundId;
            var4 = var1.userId;
            var2 = _closure1_slot16;
            var1 = var2.get;
            var2 = var1.bind(var2)(var8);
            var1 = null;
            var7 = var1 != var2;
            var6 = 0;
            if(!var7) { _fun0013_ip = 45; continue _fun0013 }
 42:
            var6 = var2;
 45:
            var2 = 1;
            var7 = var6 + var2;
            var9 = _closure1_slot21;
            var6 = var9.get;
            var6 = var6.bind(var9)(var4);
            var9 = var1 != var6;
            var5 = 0;
            if(!var9) { _fun0013_ip = 78; continue _fun0013 }
 75:
            var5 = var6;
 78:
            var6 = var5 + var2;
            var5 = _closure1_slot16;
            var2 = var5.set;
            var2 = var2.bind(var5)(var8, var7);
            var5 = _closure1_slot21;
            var2 = var5.set;
            var2 = var2.bind(var5)(var4, var6);
            var5 = _closure1_slot10;
            var2 = var5.getCurrentUser;
            var5 = var2.bind(var5)();
            var6 = var1 == var5;
            var1 = undefined;
            var2 = undefined;
            if(var6) { _fun0013_ip = 141; continue _fun0013 }
 136:
            var2 = var5.id;
 141:
            if(!(var4 !== var2)) { _fun0013_ip = 151; continue _fun0013 }
 145:
            var2 = true;
            _closure1_slot22 = var2;
 151:
            return var1;
        }
    };
    var4['GUILD_SOUNDBOARD_SOUND_PLAY_START'] = var10;
    var10 = function handleSoundPlayEnd(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var7 = var1.soundId;
            var3 = var1.userId;
            var4 = _closure1_slot16;
            var2 = var4.get;
            var5 = var2.bind(var4)(var7);
            var4 = null;
            var8 = var4 != var5;
            var2 = 0;
            var6 = 0;
            if(!var8) { _fun0014_ip = 47; continue _fun0014 }
 44:
            var6 = var5;
 47:
            var5 = 1;
            var8 = var6 - var5;
            var9 = _closure1_slot21;
            var6 = var9.get;
            var6 = var6.bind(var9)(var3);
            var9 = var4 != var6;
            var4 = 0;
            if(!var9) { _fun0014_ip = 80; continue _fun0014 }
 77:
            var4 = var6;
 80:
            var5 = var4 - var5;
            if(!(!(var8 <= var2))) { _fun0014_ip = 105; continue _fun0014 }
 88:
            var6 = _closure1_slot16;
            var4 = var6.set;
            var4 = var4.bind(var6)(var7, var8);
            _fun0014_ip = 119; continue _fun0014;
 105:
            var6 = _closure1_slot16;
            var4 = var6.delete;
            var4 = var4.bind(var6)(var7);
 119:
            if(!(!(var5 <= var2))) { _fun0014_ip = 140; continue _fun0014 }
 123:
            var4 = _closure1_slot21;
            var2 = var4.set;
            var2 = var2.bind(var4)(var3, var5);
            _fun0014_ip = 154; continue _fun0014;
 140:
            var2 = _closure1_slot21;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
 154:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_SOUNDBOARD_SOUND_PLAY_END'] = var10;
    var10 = function handleSoundsUpdate(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var3 = var1.soundboardSounds;
        var2 = _closure1_slot15;
        var1 = var2.set;
        var1 = var1.bind(var2)(var4, var3);
        var1 = undefined;
        return var1;
    };
    var4['GUILD_SOUNDBOARD_SOUNDS_UPDATE'] = var10;
    var10 = function handleSetLocalVolume(arg1) {
        var1 = arg1;
        var4 = var1.volume;
        var3 = var1.location;
        var2 = _closure1_slot23;
        var1 = undefined;
        var2 = var2.bind(var1)(var4, var3);
        return var1;
    };
    var4['USER_SOUNDBOARD_SET_VOLUME'] = var10;
    var10 = function handleVoiceChannelSelect() {
        var3 = _closure1_slot16;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var2 = _closure1_slot21;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var4['VOICE_CHANNEL_SELECT'] = var10;
    var10 = function handleUserSettingsProtoUpdate(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var1 = var1.settings;
            var3 = var1.type;
            var5 = var1.proto;
            var1 = _closure1_slot13;
            var1 = var1.FRECENCY_AND_FAVORITES_SETTINGS;
            if(!(var3 !== var1)) { _fun0015_ip = 64; continue _fun0015 }
 37:
            var1 = _closure1_slot13;
            var1 = var1.PRELOADED_USER_SETTINGS;
            if(!(var3 === var1)) { _fun0015_ip = 139; continue _fun0015 }
 51:
            var3 = _closure1_slot27;
            var1 = undefined;
            var1 = var3.bind(var1)(var5);
            _fun0015_ip = 139; continue _fun0015;
 64:
            var1 = global;
            var4 = var1.Set;
            var3 = null;
            var6 = var3 == var5;
            var1 = undefined;
            if(var6) { _fun0015_ip = 104; continue _fun0015 }
 83:
            var5 = var5.favoriteSoundboardSounds;
            var6 = var3 == var5;
            var1 = undefined;
            if(var6) { _fun0015_ip = 104; continue _fun0015 }
 98:
            var1 = var5.soundIds;
 104:
            if(!(var3 == var1)) { _fun0015_ip = 112; continue _fun0015 }
 108:
            var1 = new Array(0);
 112:
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var9 = var3;
            var8 = var1;
            var1 = new var9[var4](var8, var7);
            var1 = var1 instanceof Object ? var1 : var3;
            _closure1_slot20 = var1;
 139:
            var1 = undefined;
            return var1;
        }
    };
    var4['USER_SETTINGS_PROTO_UPDATE'] = var10;
    var10 = function handleFetchDefaultSounds() {
        var1 = _closure1_slot14;
        var1 = var1.FETCHING;
        _closure1_slot18 = var1;
        var1 = undefined;
        return var1;
    };
    var4['SOUNDBOARD_FETCH_DEFAULT_SOUNDS'] = var10;
    var10 = function handleFetchDefaultSoundsSuccess(arg1) {
        var1 = arg1;
        var5 = var1.soundboardSounds;
        var4 = _closure1_slot15;
        var3 = var4.set;
        var1 = _closure1_slot11;
        var1 = var3.bind(var4)(var1, var5);
        var1 = _closure1_slot14;
        var1 = var1.FETCHED;
        _closure1_slot18 = var1;
        var1 = undefined;
        return var1;
    };
    var4['SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS'] = var10;
    var10 = function handleSoundboardSoundsReceived(arg1) {
        var1 = arg1;
        var3 = var1.updates;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var1 = arg1;
            var4 = var1.guildId;
            var3 = var1.sounds;
            var2 = _closure1_slot15;
            var1 = var2.set;
            var1 = var1.bind(var2)(var4, var3);
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = _closure1_slot14;
        var1 = var1.FETCHED;
        _closure1_slot19 = var1;
        var1 = undefined;
        return var1;
    };
    var4['SOUNDBOARD_SOUNDS_RECEIVED'] = var10;
    var10 = function handleGuildDelete(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var3 = _closure1_slot15;
        var2 = var3.delete;
        var1 = var1.id;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var4['GUILD_DELETE'] = var10;
    var10 = function handleToggleLocalSoundboardMute(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg1;
            var3 = var1.userId;
            var4 = _closure1_slot17;
            var1 = var4.has;
            var1 = var1.bind(var4)(var3);
            var2 = _closure1_slot17;
            if(var1) { _fun0016_ip = 44; continue _fun0016 }
 32:
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
            _fun0016_ip = 54; continue _fun0016;
 44:
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
 54:
            var1 = undefined;
            return var1;
        }
    };
    var4['AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE'] = var10;
    var5 = function handleOverlayInitialize(arg1) {
        var1 = arg1;
        var2 = var1.soundboardStoreState;
        var4 = global;
        var7 = var4.Map;
        var6 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 15;
        var5 = var5[var1];
        var1 = undefined;
        var8 = var6.bind(var1)(var5);
        var6 = var8.entries;
        var5 = var2.soundboardSounds;
        var9 = var6.bind(var8)(var5);
        var6 = var7.prototype;
        var6 = Object.create(var6, {constructor: {value: var7}});
        var10 = var6;
        var5 = new var10[var7](var9, var8);
        var5 = var5 instanceof Object ? var5 : var6;
        _closure1_slot15 = var5;
        var7 = var4.Set;
        var9 = var2.favoritedSoundIds;
        var6 = var7.prototype;
        var6 = Object.create(var6, {constructor: {value: var7}});
        var10 = var6;
        var5 = new var10[var7](var9, var8);
        var5 = var5 instanceof Object ? var5 : var6;
        _closure1_slot20 = var5;
        var5 = var4.Set;
        var9 = var2.localSoundboardMutes;
        var4 = var5.prototype;
        var4 = Object.create(var4, {constructor: {value: var5}});
        var10 = var4;
        var2 = new var10[var5](var9, var8);
        var2 = var2 instanceof Object ? var2 : var4;
        _closure1_slot17 = var2;
        return var1;
    };
    var4['OVERLAY_INITIALIZE'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var17 = var5;
    var15 = var4;
    var4 = new var17[var9](var16, var15, var14);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 18;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/soundboard/SoundboardStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['FetchState'] = var2;
    return var1;
})();