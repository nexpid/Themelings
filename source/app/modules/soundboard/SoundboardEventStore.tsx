// app/modules/soundboard/SoundboardEventStore.tsx
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
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
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
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot17;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot17;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
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
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 39; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 39:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function handleUserSettingsProtoStoreChange() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot19;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var3 = _closure1_slot8;
            var3 = var3.frecencyWithoutFetchingLatest;
            var4 = var3.playedSoundFrecency;
            var3 = null;
            var5 = var3 == var4;
            var6 = undefined;
            if(var5) { _fun0005_ip = 9; continue _fun0005 }
case 42:
            var6 = var4.playedSounds;
case 9:
            var5 = _closure1_slot14;
            var4 = var5.overwriteHistory;
            if(!(var3 == var6)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var6 = {};
case 43:
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
case 40:
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
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
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
                if(var1) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 47; continue _fun0006;
case 45:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 47:
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
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
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
                if(var7) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                var4 = var3.recentlyHeardCache;
case 48:
                if(!(var6 != var4)) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                var8 = _closure1_slot13;
                var7 = var8.load;
                var4 = var3.recentlyHeardCache;
                var4 = var7.bind(var8)(var4);
case 50:
                var7 = var6 == var3;
                var4 = undefined;
                if(var7) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                var4 = var3.playedEventsPendingFlush;
case 52:
                if(!(var6 != var4)) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                var3 = var3.playedEventsPendingFlush;
                _closure1_slot12 = var3;
case 54:
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
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var3 = var1.sound;
            var4 = var1.trigger;
            var5 = _closure1_slot19;
            var1 = undefined;
            var5 = var5.bind(var1)();
            if(!var5) { _fun0008_ip = 56; continue _fun0008 }
case 57:
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
            if(!(var4 === var3)) { _fun0008_ip = 56; continue _fun0008 }
case 53:
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
case 56:
            return var1;
        }
    };
    var2['GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY'] = var9;
    var9 = function handleSoundPlayStart(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
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
            if(!var3) { _fun0009_ip = 58; continue _fun0009 }
case 50:
            var3 = var4.toString;
            var4 = var3.bind(var4)();
            var6 = _closure1_slot9;
            var3 = var6.getCurrentUser;
            var6 = var3.bind(var6)();
            var3 = null;
            var7 = var3 == var6;
            var3 = undefined;
            if(var7) { _fun0009_ip = 59; continue _fun0009 }
case 60:
            var3 = var6.id;
case 59:
            var3 = var5 !== var3;
            if(!var3) { _fun0009_ip = 61; continue _fun0009 }
case 62:
            var5 = function _soundInJoinedGuilds(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
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
                    if(var1) { _fun0010_ip = 63; continue _fun0010 }
case 64:
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
                    if(!(var3 == var1)) { _fun0010_ip = 65; continue _fun0010 }
case 66:
                    var7 = var4.bind(var5)();
                    var1 = var7.done;
                    var2 = var7;
                    if(var1) { _fun0010_ip = 63; continue _fun0010 }
case 54:
                    _fun0010_ip = 64; continue _fun0010;
case 65:
                    var1 = true;
                    return var1;
case 63:
                    var1 = false;
                    return var1;
                }
            };
            var3 = var5.bind(var1)(var4);
case 61:
            if(!var3) { _fun0009_ip = 58; continue _fun0009 }
case 67:
            var3 = _closure1_slot13;
            var2 = var3.set;
            var2 = var2.bind(var3)(var4, var4);
case 58:
            return var1;
        }
    };
    var2['GUILD_SOUNDBOARD_SOUND_PLAY_START'] = var9;
    var4 = function handleUserSettingsProtoUpdate(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var2 = var1.settings;
            var6 = var2.type;
            var4 = var1.wasSaved;
            var2 = _closure1_slot19;
            var1 = undefined;
            var2 = var2.bind(var1)();
            if(!var2) { _fun0011_ip = 68; continue _fun0011 }
case 69:
            var5 = _closure1_slot11;
            var5 = var5.FRECENCY_AND_FAVORITES_SETTINGS;
            var2 = var6 === var5;
case 68:
            if(!var2) { _fun0011_ip = 32; continue _fun0011 }
case 70:
            var2 = var4;
case 32:
            if(!var2) { _fun0011_ip = 34; continue _fun0011 }
case 71:
            var2 = new Array(0);
            _closure1_slot12 = var2;
case 34:
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