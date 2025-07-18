// app/modules/soundboard/SoundboardEventStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
            if(var2) { _fun0002_ip = 344; continue _fun0002 }
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
            var9 = _closure1_slot17;
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
            var7 = _closure1_slot17;
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
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
    var _closure1_slot17 = var1;
    var1 = function handleUserSettingsProtoStoreChange() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = _closure1_slot19;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0005_ip = 89; continue _fun0005 }
 16:
            var3 = _closure1_slot8;
            var3 = var3.frecencyWithoutFetchingLatest;
            var4 = var3.playedSoundFrecency;
            var3 = null;
            var5 = var3 == var4;
            var6 = undefined;
            if(var5) { _fun0005_ip = 49; continue _fun0005 }
 43:
            var6 = var4.playedSounds;
 49:
            var5 = _closure1_slot14;
            var4 = var5.overwriteHistory;
            if(!(var3 == var6)) { _fun0005_ip = 65; continue _fun0005 }
 63:
            var6 = {};
 65:
            var3 = function deserializedEventHistory(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.mapValues;
                var2 = arg1;
                var1 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var6 = var1;
                    var5 = var2;
                    var3 = copyDataProperties(var6, var5);
                    var4 = var2.recentUses;
                    var3 = var4.map;
                    var2 = global;
                    var2 = var2.Number;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        var2 = arg1;
                        var1 = 0;
                        var1 = var2 > var1;
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = 'recentUses';
                    var1[var2] = var3;
                    return var1;
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3 = var3.bind(var1)(var6);
            var2 = _closure1_slot12;
            var2 = var4.bind(var5)(var3, var2);
 89:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function _canUseFrequentlyUsed() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 14;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.recentlyHeardExperiment;
        var1 = {'location': 'soundboard_event_store', 'autoTrackExposure': false};
        var1 = var2.bind(var3)(var1);
        var1 = var1.canSeeFrequentlyPlayed;
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var9 = var2.NUM_RECENTLY_HEARD_SOUNDS;
    var8 = var2.NUM_FREQUENTLY_USED_SOUNDS;
    var2 = 9;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.UserSettingsTypes;
    var _closure1_slot11 = var2;
    var2 = new Array(0);
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var6[var2];
    var10 = var7.bind(var1)(var2);
    var2 = {};
    var2['max'] = var9;
    var9 = var10.prototype;
    var9 = Object.create(var9, {constructor: {value: var10}});
    var14 = var9;
    var13 = var2;
    var2 = new var14[var10](var13, var12);
    var2 = var2 instanceof Object ? var2 : var9;
    var _closure1_slot13 = var2;
    var2 = 11;
    var2 = var6[var2];
    var9 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function computeBonus() {
        var1 = 100;
        return var1;
    };
    var2['computeBonus'] = var10;
    var10 = function computeWeight(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arg1;
            var1 = 3;
            var2 = var3 <= var1;
            var1 = 100;
            if(var2) { _fun0006_ip = 71; continue _fun0006 }
 16:
            var2 = 15;
            var2 = var3 <= var2;
            var1 = 70;
            if(var2) { _fun0006_ip = 71; continue _fun0006 }
 29:
            var4 = 30;
            var2 = var3 <= var4;
            var1 = 50;
            if(var2) { _fun0006_ip = 71; continue _fun0006 }
 42:
            var2 = 45;
            var2 = var3 <= var2;
            var1 = var4;
            if(var2) { _fun0006_ip = 71; continue _fun0006 }
 55:
            var2 = 80;
            var2 = var3 <= var2;
            var1 = 1;
            if(!var2) { _fun0006_ip = 71; continue _fun0006 }
 68:
            var1 = 10;
 71:
            return var1;
        }
    };
    var2['computeWeight'] = var10;
    var10 = function lookupKey(arg1) {
        var3 = _closure1_slot10;
        var2 = var3.getSoundById;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['lookupKey'] = var10;
    var10 = function afterCompute() {
        var1 = undefined;
        return var1;
    };
    var2['afterCompute'] = var10;
    var2['numFrequentlyItems'] = var8;
    var8 = var9.prototype;
    var8 = Object.create(var8, {constructor: {value: var9}});
    var14 = var8;
    var13 = var2;
    var2 = new var14[var9](var13, var12);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot14 = var2;
    var2 = 15;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function SoundboardEventStore() {
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
                var1 = _closure1_slot15;
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
        var1 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var3 = arg1;
                var5 = this;
                var6 = var5.waitFor;
                var4 = _closure1_slot9;
                var1 = _closure1_slot10;
                var1 = var6.bind(var5)(var4, var1);
                var6 = null;
                var7 = var6 == var3;
                var1 = undefined;
                var4 = undefined;
                if(var7) { _fun0008_ip = 48; continue _fun0008 }
 42:
                var4 = var3.recentlyHeardCache;
 48:
                if(!(var6 != var4)) { _fun0008_ip = 73; continue _fun0008 }
 52:
                var8 = _closure1_slot13;
                var7 = var8.load;
                var4 = var3.recentlyHeardCache;
                var4 = var7.bind(var8)(var4);
 73:
                var7 = var6 == var3;
                var4 = undefined;
                if(var7) { _fun0008_ip = 88; continue _fun0008 }
 82:
                var4 = var3.playedEventsPendingFlush;
 88:
                if(!(var6 != var4)) { _fun0008_ip = 102; continue _fun0008 }
 92:
                var3 = var3.playedEventsPendingFlush;
                _closure1_slot12 = var3;
 102:
                var4 = var5.syncWith;
                var6 = _closure1_slot8;
                var3 = new Array(1);
                var3[0] = var6;
                var2 = _closure1_slot18;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var4 = _closure1_slot13;
            var3 = var4.dump;
            var3 = var3.bind(var4)();
            var1['recentlyHeardCache'] = var3;
            var2 = _closure1_slot12;
            var1['playedEventsPendingFlush'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'hasPendingUsage';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            var2 = var1.length;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'playedSoundHistory';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot14;
            var1 = var1.usageHistory;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'recentlyHeardSoundIds';
        var5['key'] = var7;
        var7 = function get() {
            var2 = _closure1_slot13;
            var1 = var2.values;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'frecentlyPlayedSounds';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot14;
            var1 = var1.frequently;
            return var1;
        };
        var5['get'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'SoundboardEventStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = 16;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleSoundPlayLocally(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var3 = var1.sound;
            var4 = var1.trigger;
            var5 = _closure1_slot19;
            var1 = undefined;
            var5 = var5.bind(var1)();
            if(!var5) { _fun0009_ip = 152; continue _fun0009 }
 31:
            var5 = var3.soundId;
            var3 = var5.toString;
            var6 = var3.bind(var5)();
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 12;
            var3 = var7[var3];
            var3 = var5.bind(var1)(var3);
            var3 = var3.LocalSoundTrigger;
            var3 = var3.SOUNDBOARD;
            if(!(var4 === var3)) { _fun0009_ip = 152; continue _fun0009 }
 82:
            var4 = _closure1_slot14;
            var3 = var4.track;
            var3 = var3.bind(var4)(var6);
            var5 = _closure1_slot12;
            var4 = var5.push;
            var3 = {};
            var3['key'] = var6;
            var6 = global;
            var7 = var6.Date;
            var6 = var7.now;
            var6 = var6.bind(var7)();
            var3['timestamp'] = var6;
            var3 = var4.bind(var5)(var3);
            var3 = _closure1_slot14;
            var2 = var3.compute;
            var2 = var2.bind(var3)();
 152:
            return var1;
        }
    };
    var2['GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY'] = var9;
    var9 = function handleSoundPlayStart(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var4 = var1.soundId;
            var5 = var1.userId;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var3 = var3[var1];
            var1 = undefined;
            var7 = var6.bind(var1)(var3);
            var6 = var7.recentlyHeardExperiment;
            var3 = {'location': 'soundboard_event_store', 'autoTrackExposure': false};
            var3 = var6.bind(var7)(var3);
            var3 = var3.canSeeRecentlyHeard;
            if(!var3) { _fun0010_ip = 150; continue _fun0010 }
 73:
            var3 = var4.toString;
            var4 = var3.bind(var4)();
            var6 = _closure1_slot9;
            var3 = var6.getCurrentUser;
            var6 = var3.bind(var6)();
            var3 = null;
            var7 = var3 == var6;
            var3 = undefined;
            if(var7) { _fun0010_ip = 111; continue _fun0010 }
 106:
            var3 = var6.id;
 111:
            var3 = var5 !== var3;
            if(!var3) { _fun0010_ip = 132; continue _fun0010 }
 118:
            var5 = function _soundInJoinedGuilds(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var2 = _closure1_slot16;
                    var3 = _closure1_slot10;
                    var1 = var3.getSounds;
                    var3 = var1.bind(var3)();
                    var1 = var3.values;
                    var1 = var1.bind(var3)();
                    var5 = undefined;
                    var4 = var2.bind(var5)(var1);
                    var2 = var4.bind(var5)();
                    var1 = var2.done;
                    var3 = null;
                    if(var1) { _fun0011_ip = 107; continue _fun0011 }
 60:
                    var8 = var2.value;
                    var7 = var8.find;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.soundId;
                        var1 = var2.toString;
                        var2 = var1.bind(var2)();
                        var1 = _closure3_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var7.bind(var8)(var1);
                    if(!(var3 == var1)) { _fun0011_ip = 103; continue _fun0011 }
 86:
                    var7 = var4.bind(var5)();
                    var1 = var7.done;
                    var2 = var7;
                    if(var1) { _fun0011_ip = 107; continue _fun0011 }
 101:
                    _fun0011_ip = 60; continue _fun0011;
 103:
                    var1 = true;
                    return var1;
 107:
                    var1 = false;
                    return var1;
                }
            };
            var3 = var5.bind(var1)(var4);
 132:
            if(!var3) { _fun0010_ip = 150; continue _fun0010 }
 135:
            var3 = _closure1_slot13;
            var2 = var3.set;
            var2 = var2.bind(var3)(var4, var4);
 150:
            return var1;
        }
    };
    var2['GUILD_SOUNDBOARD_SOUND_PLAY_START'] = var9;
    var4 = function handleUserSettingsProtoUpdate(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var2 = var1.settings;
            var6 = var2.type;
            var4 = var1.wasSaved;
            var2 = _closure1_slot19;
            var1 = undefined;
            var2 = var2.bind(var1)();
            if(!var2) { _fun0012_ip = 50; continue _fun0012 }
 36:
            var5 = _closure1_slot11;
            var5 = var5.FRECENCY_AND_FAVORITES_SETTINGS;
            var2 = var6 === var5;
 50:
            if(!var2) { _fun0012_ip = 56; continue _fun0012 }
 53:
            var2 = var4;
 56:
            if(!var2) { _fun0012_ip = 67; continue _fun0012 }
 59:
            var2 = new Array(0);
            _closure1_slot12 = var2;
 67:
            return var1;
        }
    };
    var2['USER_SETTINGS_PROTO_UPDATE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/soundboard/SoundboardEventStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();