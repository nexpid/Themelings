// app/modules/soundboard/SoundboardActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _fetchDefaultSoundsFromApi2() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3: // try_start_0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 5;
                    var2 = var9[var7];
                    var5 = undefined;
                    var2 = var8.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.get;
                    var2 = {};
                    var10 = _closure1_slot6;
                    var10 = var10.SOUNDBOARD_DEFAULT_SOUNDS;
                    var2['url'] = var10;
                    var7 = var9[var7];
                    var8 = var8.bind(var5)(var7);
                    var7 = var8.rejectWithMigratedError;
                    var7 = var7.bind(var8)();
                    var2['rejectWithError'] = var7;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=93);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var7 = var2.body;
                    var6 = var7.map;
                    var4 = function(arg1) {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 6;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.soundboardSoundFromAPI;
                        var2 = _closure1_slot5;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var6 = var6.bind(var7)(var4);
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 7;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS';
                    var3['type'] = var7;
                    var3['soundboardSounds'] = var6;
                    var3 = var4.bind(var5)(var3);
case 8: // try_end0
                    _fun0001_ip = 9; continue _fun0001;
case 6:
                    return var2;
case 10: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 7;
                    var3 = var8[var3];
                    var5 = undefined;
                    var9 = var7.bind(var5)(var3);
                    var4 = var9.dispatch;
                    var3 = {};
                    var10 = 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE';
                    var3['type'] = var10;
                    var3 = var4.bind(var9)(var3);
                    var3 = _closure1_slot0;
                    var2 = 8;
                    var2 = var8[var2];
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.captureOrIgnoreApiError;
                    var2 = 9;
                    var2 = var8[var2];
                    var2 = var7.bind(var5)(var2);
                    var5 = var2.prototype;
                    var5 = Object.create(var5, {constructor: {value: var2}});
                    var12 = var5;
                    var11 = var6;
                    var2 = new var12[var2](var11, var10);
                    var2 = var2 instanceof Object ? var2 : var5;
                    var2 = var3.bind(var4)(var2);
case 9:
                    var2 = undefined;
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function _resolveOnActionCompleted(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.subscribe;
            var3 = _closure2_slot0;
            var2 = function onSoundboardActionCompleted() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.unsubscribe;
                var4 = _closure2_slot0;
                var3 = _closure3_slot1;
                var3 = var5.bind(var6)(var4, var3);
                var3 = global;
                var4 = var3.setTimeout;
                var3 = _closure3_slot0;
                var2 = 0;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var _closure3_slot1 = var2;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function _maybeFetchDefaultSounds() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot4;
            var2 = var3.shouldFetchDefaultSounds;
            var2 = var2.bind(var3)();
            if(var2) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.resolve;
            var2 = var2.bind(var3)();
            return var2;
case 11:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 7;
            var2 = var3[var2];
            var3 = undefined;
            var5 = var4.bind(var3)(var2);
            var4 = var5.dispatch;
            var2 = {};
            var6 = 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS';
            var2['type'] = var6;
            var2 = var4.bind(var5)(var2);
            var2 = _closure1_slot12;
            var1 = 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS';
            var1 = var2.bind(var3)(var1);
            var2 = function _fetchDefaultSoundsFromApi() {
                var1 = undefined;
                var4 = _closure1_slot11;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var2 = var2.bind(var3)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function _maybeFetchGuildSoundboardSounds() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.getGuildIdsToFetchSoundsFor;
            var5 = var1.bind(var3)();
            var3 = var5.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var3 = _closure1_slot12;
            var1 = 'SOUNDBOARD_SOUNDS_RECEIVED';
            var1 = var3.bind(var4)(var1);
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 7;
            var7 = var6[var2];
            var9 = var3.bind(var4)(var7);
            var8 = var9.dispatch;
            var7 = {};
            var10 = 'GUILD_SOUNDBOARD_FETCH';
            var7['type'] = var10;
            var7 = var8.bind(var9)(var7);
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'REQUEST_SOUNDBOARD_SOUNDS';
            var2['type'] = var6;
            var2['guildIds'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
case 13:
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function _maybeFetchSoundboardSounds() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var4 = global;
                    var3 = var4.performance;
                    var2 = var3.now;
                    var8 = var2.bind(var3)();
                    var2 = null;
                    var7 = var2 == var5;
                    var6 = undefined;
                    var3 = undefined;
                    if(var7) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var3 = var5.disableAnalytics;
case 17:
                    var2 = var2 != var3;
                    if(!var2) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var2 = var3;
case 19:
                    var7 = _closure1_slot10;
                    var5 = !var7;
                    if(var7) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var5 = !var2;
case 21:
                    if(!var5) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var2 = true;
                    _closure1_slot10 = var2;
case 23:
                    var9 = var4.Promise;
                    var7 = var9.all;
                    var2 = _closure1_slot13;
                    var10 = var2.bind(var6)();
                    var2 = new Array(2);
                    var2[0] = var10;
                    var10 = _closure1_slot14;
                    var10 = var10.bind(var6)();
                    var2[1] = var10;
                    var2 = var7.bind(var9)(var2);
                    SaveGenerator(address=135);
case 25:
                    return var2;
case 26:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                    if(!var5) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var5 = var4.performance;
                    var4 = var5.now;
                    var7 = var4.bind(var5)();
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var4 = 11;
                    var4 = var9[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot7;
                    var4 = var3.EXPRESSION_PICKER_SOUNDBOARD_SOUNDS_LOADED;
                    var3 = {};
                    var7 = var7 - var8;
                    var3['elapsed_ms'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
case 29:
                    return var2;
case 27:
                    return var2;
case 15:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function _uploadSound() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 31; continue _fun0005 }
case 16:
                    var7 = var2.guildId;
                    var17 = var2.name;
                    var16 = var2.sound;
                    var15 = var2.volume;
                    var14 = var2.emojiId;
                    var13 = var2.emojiName;
                    var6 = undefined;
                    SaveGenerator(address=53);
case 17:
                    return var6;
case 32:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 5;
                    var3 = var11[var9];
                    var3 = var10.bind(var6)(var3);
                    var8 = var3.HTTP;
                    var5 = var8.post;
                    var3 = {};
                    var18 = _closure1_slot6;
                    var12 = var18.GUILD_SOUNDBOARD_SOUNDS;
                    var12 = var12.bind(var18)(var7);
                    var3['url'] = var12;
                    var12 = {};
                    var12['name'] = var17;
                    var12['sound'] = var16;
                    var12['volume'] = var15;
                    var12['emoji_id'] = var14;
                    var12['emoji_name'] = var13;
                    var3['body'] = var12;
                    var9 = var11[var9];
                    var10 = var10.bind(var6)(var9);
                    var9 = var10.rejectWithMigratedError;
                    var9 = var9.bind(var10)();
                    var3['rejectWithError'] = var9;
                    var3 = var5.bind(var8)(var3);
                    SaveGenerator(address=179);
case 35:
                    return var3;
case 36:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 6;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.soundboardSoundFromAPI;
                    var4 = var3.body;
                    var4 = var5.bind(var6)(var4, var7);
                    return var4;
case 37:
                    return var3;
case 33:
                    return var2;
case 31:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function _updateSound() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 39; continue _fun0006 }
case 16:
                    var7 = var2.guildId;
                    var18 = var2.soundId;
                    var16 = var2.name;
                    var15 = var2.volume;
                    var14 = var2.emojiId;
                    var13 = var2.emojiName;
                    var6 = undefined;
                    SaveGenerator(address=53);
case 17:
                    return var6;
case 32:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 40; continue _fun0006 }
case 34:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 5;
                    var3 = var11[var9];
                    var3 = var10.bind(var6)(var3);
                    var8 = var3.HTTP;
                    var5 = var8.patch;
                    var3 = {};
                    var17 = _closure1_slot6;
                    var12 = var17.GUILD_SOUNDBOARD_SOUND;
                    var12 = var12.bind(var17)(var7, var18);
                    var3['url'] = var12;
                    var12 = {};
                    var12['name'] = var16;
                    var12['volume'] = var15;
                    var12['emoji_id'] = var14;
                    var12['emoji_name'] = var13;
                    var3['body'] = var12;
                    var9 = var11[var9];
                    var10 = var10.bind(var6)(var9);
                    var9 = var10.rejectWithMigratedError;
                    var9 = var9.bind(var10)();
                    var3['rejectWithError'] = var9;
                    var3 = var5.bind(var8)(var3);
                    SaveGenerator(address=175);
case 10:
                    return var3;
case 41:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 6;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.soundboardSoundFromAPI;
                    var4 = var3.body;
                    var4 = var5.bind(var6)(var4, var7);
                    return var4;
case 42:
                    return var3;
case 40:
                    return var2;
case 39:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function _deleteSound() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 5;
                    var2 = var8[var6];
                    var3 = undefined;
                    var2 = var7.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.del;
                    var2 = {};
                    var12 = _closure1_slot6;
                    var11 = var12.GUILD_SOUNDBOARD_SOUND;
                    var10 = arg1;
                    var9 = arg2;
                    var9 = var11.bind(var12)(var10, var9);
                    var2['url'] = var9;
                    var9 = true;
                    var2['oldFormErrors'] = var9;
                    var6 = var8[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.rejectWithMigratedError;
                    var6 = var6.bind(var7)();
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=110);
case 46:
                    return var2;
case 47:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                    return var3;
case 48:
                    return var2;
case 44:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot18 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function _fetchSoundGuildData() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 50; continue _fun0008 }
case 3:
                    var12 = arg1;
                    var11 = arg2;
                    var5 = undefined;
                    var4 = undefined;
case 51: // try_start_0
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 5;
                    var2 = var10[var8];
                    var2 = var9.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var3 = var7.get;
                    var2 = {};
                    var14 = _closure1_slot6;
                    var13 = var14.SOUNDBOARD_SOUND_GUILD_DATA;
                    var11 = var13.bind(var14)(var12, var11);
                    var2['url'] = var11;
                    var8 = var10[var8];
                    var9 = var9.bind(var5)(var8);
                    var8 = var9.rejectWithMigratedError;
                    var8 = var8.bind(var9)();
                    var2['rejectWithError'] = var8;
                    var2 = var3.bind(var7)(var2);
                    SaveGenerator(address=107);
case 52:
                    return var2;
case 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var4 = var2;
                    var7 = var2.body;
                    var3 = null;
                    var7 = var3 != var7;
                    if(!var7) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 16;
                    var6 = var8[var6];
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.makeDiscoverableGuild;
                    var4 = var4.body;
                    var3 = var6.bind(var7)(var4);
case 56: // try_end0
                    return var3;
case 54:
                    return var2;
case 58: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 9;
                    var2 = var6[var2];
                    var2 = var3.bind(var5)(var2);
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var17 = var3;
                    var16 = var4;
                    var2 = new var17[var2](var16, var15);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 50:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot19 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var1;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DEFAULT_SOUND_GUILD_ID;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Endpoints;
    var _closure1_slot6 = var7;
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MAX_FAVORITES;
    var _closure1_slot8 = var7;
    var4 = var4.UserSettingsDelay;
    var _closure1_slot9 = var4;
    var4 = false;
    var _closure1_slot10 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/soundboard/SoundboardActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function maybeFetchSoundboardSounds() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['maybeFetchSoundboardSounds'] = var4;
    var4 = function uploadSound() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['uploadSound'] = var4;
    var4 = function updateSound() {
        var1 = undefined;
        var4 = _closure1_slot17;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['updateSound'] = var4;
    var4 = function deleteSound() {
        var1 = undefined;
        var4 = _closure1_slot18;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['deleteSound'] = var4;
    var4 = function addFavoriteSound(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 12;
        var4 = var4[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var6 = var4.FrecencyUserSettingsActionCreators;
        var5 = var6.updateAsync;
        var3 = _closure1_slot9;
        var4 = var3.INFREQUENT_USER_ACTION;
        var3 = 'favoriteSoundboardSounds';
        var2 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = arg1;
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 13;
                var1 = var4[var1];
                var10 = undefined;
                var4 = var2.bind(var10)(var1);
                var2 = var4.size;
                var1 = var3.soundIds;
                var2 = var2.bind(var4)(var1);
                var1 = _closure1_slot8;
                if(!(!(var2 >= var1))) { _fun0009_ip = 46; continue _fun0009 }
case 59:
                var5 = var3.soundIds;
                var4 = var5.includes;
                var1 = _closure2_slot0;
                var1 = var4.bind(var5)(var1);
                var1 = !var1;
                if(!var1) { _fun0009_ip = 60; continue _fun0009 }
case 61:
                var4 = var3.soundIds;
                var3 = var4.push;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                var1 = undefined;
case 60:
                _fun0009_ip = 62; continue _fun0009;
case 46:
                var3 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 14;
                var2 = var11[var2];
                var4 = var3.bind(var10)(var2);
                var3 = var4.show;
                var2 = {};
                var6 = _closure1_slot0;
                var5 = 15;
                var7 = var11[var5];
                var7 = var6.bind(var10)(var7);
                var12 = var7.intl;
                var8 = var12.string;
                var7 = var11[var5];
                var7 = var6.bind(var10)(var7);
                var7 = var7.t;
                var7 = var7["+XYXtZ"];
                var7 = var8.bind(var12)(var7);
                var2['title'] = var7;
                var7 = var11[var5];
                var7 = var6.bind(var10)(var7);
                var8 = var7.intl;
                var7 = var8.formatToPlainString;
                var5 = var11[var5];
                var5 = var6.bind(var10)(var5);
                var5 = var5.t;
                var6 = var5.JaIyFi;
                var5 = {};
                var9 = _closure1_slot8;
                var5['count'] = var9;
                var5 = var7.bind(var8)(var6, var5);
                var2['body'] = var5;
                var2 = var3.bind(var4)(var2);
                var1 = false;
case 62:
                return var1;
            }
        };
        var2 = var5.bind(var6)(var3, var2, var4);
        return var1;
    };
    var3['addFavoriteSound'] = var4;
    var4 = function removeFavoriteSound(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 12;
        var4 = var4[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var6 = var4.FrecencyUserSettingsActionCreators;
        var5 = var6.updateAsync;
        var3 = _closure1_slot9;
        var4 = var3.INFREQUENT_USER_ACTION;
        var3 = 'favoriteSoundboardSounds';
        var2 = function(arg1) {
            var2 = arg1;
            var4 = var2.soundIds;
            var3 = var4.filter;
            var1 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var2['soundIds'] = var1;
            var1 = undefined;
            return var1;
        };
        var2 = var5.bind(var6)(var3, var2, var4);
        return var1;
    };
    var3['removeFavoriteSound'] = var4;
    var4 = function fetchSoundGuildData() {
        var1 = undefined;
        var4 = _closure1_slot19;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchSoundGuildData'] = var4;
    var4 = function playSoundLocally(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY';
        var2['type'] = var5;
        var5 = arg2;
        var2['sound'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var5 = arg3;
        var2['trigger'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['playSoundLocally'] = var4;
    var4 = function reportSoundStartedPlaying(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SOUNDBOARD_SOUND_PLAY_START';
        var2['type'] = var5;
        var5 = arg1;
        var2['soundId'] = var5;
        var5 = arg2;
        var2['userId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['reportSoundStartedPlaying'] = var4;
    var4 = function reportSoundFinishedPlaying(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SOUNDBOARD_SOUND_PLAY_END';
        var2['type'] = var5;
        var5 = arg1;
        var2['soundId'] = var5;
        var5 = arg2;
        var2['userId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['reportSoundFinishedPlaying'] = var4;
    var4 = function updateUserSoundboardVolume(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_SOUNDBOARD_SET_VOLUME';
        var2['type'] = var5;
        var5 = arg1;
        var2['volume'] = var5;
        var5 = arg2;
        var2['location'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateUserSoundboardVolume'] = var4;
    var2 = function muteCustomJoinSound(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SOUNDBOARD_MUTE_JOIN_SOUND';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['muteCustomJoinSound'] = var2;
    return var1;
})();