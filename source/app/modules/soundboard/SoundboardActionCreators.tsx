// app/modules/soundboard/SoundboardActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _uploadSound() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 214; continue _fun0001 }
 13:
                    var7 = var2.guildId;
                    var14 = var2.name;
                    var13 = var2.sound;
                    var12 = var2.volume;
                    var11 = var2.emojiId;
                    var10 = var2.emojiName;
                    var6 = undefined;
                    SaveGenerator(address=53);
 51:
                    return var6;
 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 211; continue _fun0001 }
 62:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 5;
                    var3 = var8[var3];
                    var3 = var5.bind(var6)(var3);
                    var8 = var3.HTTP;
                    var5 = var8.post;
                    var3 = {};
                    var15 = _closure1_slot6;
                    var9 = var15.GUILD_SOUNDBOARD_SOUNDS;
                    var9 = var9.bind(var15)(var7);
                    var3['url'] = var9;
                    var9 = {};
                    var9['name'] = var14;
                    var9['sound'] = var13;
                    var9['volume'] = var12;
                    var9['emoji_id'] = var11;
                    var9['emoji_name'] = var10;
                    var3['body'] = var9;
                    var9 = false;
                    var3['rejectWithError'] = var9;
                    var3 = var5.bind(var8)(var3);
                    SaveGenerator(address=162);
 160:
                    return var3;
 162:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 208; continue _fun0001 }
 168:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 6;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.soundboardSoundFromAPI;
                    var4 = var3.body;
                    var4 = var5.bind(var6)(var4, var7);
                    return var4;
 208:
                    return var3;
 211:
                    return var2;
 214:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function _updateSound() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 210; continue _fun0002 }
 13:
                    var7 = var2.guildId;
                    var15 = var2.soundId;
                    var13 = var2.name;
                    var12 = var2.volume;
                    var11 = var2.emojiId;
                    var10 = var2.emojiName;
                    var6 = undefined;
                    SaveGenerator(address=53);
 51:
                    return var6;
 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 207; continue _fun0002 }
 62:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 5;
                    var3 = var8[var3];
                    var3 = var5.bind(var6)(var3);
                    var8 = var3.HTTP;
                    var5 = var8.patch;
                    var3 = {};
                    var14 = _closure1_slot6;
                    var9 = var14.GUILD_SOUNDBOARD_SOUND;
                    var9 = var9.bind(var14)(var7, var15);
                    var3['url'] = var9;
                    var9 = {};
                    var9['name'] = var13;
                    var9['volume'] = var12;
                    var9['emoji_id'] = var11;
                    var9['emoji_name'] = var10;
                    var3['body'] = var9;
                    var9 = false;
                    var3['rejectWithError'] = var9;
                    var3 = var5.bind(var8)(var3);
                    SaveGenerator(address=158);
 156:
                    return var3;
 158:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 204; continue _fun0002 }
 164:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 6;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.soundboardSoundFromAPI;
                    var4 = var3.body;
                    var4 = var5.bind(var6)(var4, var7);
                    return var4;
 204:
                    return var3;
 207:
                    return var2;
 210:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function _deleteSound() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 102; continue _fun0003 }
 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.del;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var9 = _closure1_slot6;
                    var8 = var9.GUILD_SOUNDBOARD_SOUND;
                    var7 = arg1;
                    var6 = arg2;
                    var6 = var8.bind(var9)(var7, var6);
                    var2['url'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=90);
 88:
                    return var2;
 90:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 99; continue _fun0003 }
 96:
                    return var3;
 99:
                    return var2;
 102:
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
    var1 = function _fetchSoundGuildData() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 205; continue _fun0004 }
 10:
                    var9 = arg1;
                    var8 = arg2;
                    var5 = undefined;
                    var4 = undefined;
 20: // try_start_0
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 5;
                    var2 = var7[var2];
                    var2 = var3.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var3 = var7.get;
                    var2 = {};
                    var11 = _closure1_slot6;
                    var10 = var11.SOUNDBOARD_SOUND_GUILD_DATA;
                    var8 = var10.bind(var11)(var9, var8);
                    var2['url'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var3.bind(var7)(var2);
                    SaveGenerator(address=90);
 88:
                    return var2;
 90:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 152; continue _fun0004 }
 96:
                    var4 = var2;
                    var7 = var2.body;
                    var3 = null;
                    var7 = var3 != var7;
                    if(!var7) { _fun0004_ip = 149; continue _fun0004 }
 113:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 14;
                    var6 = var8[var6];
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.makeDiscoverableGuild;
                    var4 = var4.body;
                    var3 = var6.bind(var7)(var4);
 149: // try_end0
                    return var3;
 152:
                    return var2;
 155: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 8;
                    var2 = var6[var2];
                    var2 = var3.bind(var5)(var2);
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var14 = var3;
                    var13 = var4;
                    var2 = new var14[var2](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 205:
                    return var1;
                }
            };
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
    var4 = var4.Endpoints;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MAX_FAVORITES;
    var _closure1_slot7 = var7;
    var4 = var4.UserSettingsDelay;
    var _closure1_slot8 = var4;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 243; continue _fun0005 }
 10: // try_start_0
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var6 = var2.HTTP;
                    var5 = var6.get;
                    var2 = {};
                    var7 = _closure1_slot6;
                    var7 = var7.SOUNDBOARD_DEFAULT_SOUNDS;
                    var2['url'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=76);
 74:
                    return var2;
 76:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 154; continue _fun0005 }
 82:
                    var7 = var2.body;
                    var6 = var7.map;
                    var5 = function(arg1) {
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
                    var7 = var6.bind(var7)(var5);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 7;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS';
                    var4['type'] = var8;
                    var4['soundboardSounds'] = var7;
                    var4 = var5.bind(var6)(var4);
 151: // try_end0
                    return var3;
 154:
                    return var2;
 157: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 7;
                    var2 = var6[var2];
                    var3 = undefined;
                    var8 = var5.bind(var3)(var2);
                    var7 = var8.dispatch;
                    var2 = {};
                    var9 = 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE';
                    var2['type'] = var9;
                    var2 = var7.bind(var8)(var2);
                    var2 = 8;
                    var2 = var6[var2];
                    var2 = var5.bind(var3)(var2);
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var11 = var3;
                    var10 = var4;
                    var2 = new var11[var2](var10, var9);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 243:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot9 = var4;
    var4 = function _resolveOnActionCompleted(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var5 = function onSoundboardActionCompleted() {
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
            var _closure3_slot1 = var5;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.subscribe;
            var2 = _closure2_slot0;
            var2 = var3.bind(var4)(var2, var5);
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot10 = var4;
    var4 = function _maybeFetchDefaultSounds() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = _closure1_slot4;
            var1 = var3.shouldFetchDefaultSounds;
            var1 = var1.bind(var3)();
            if(var1) { _fun0006_ip = 42; continue _fun0006 }
 22:
            var1 = global;
            var3 = var1.Promise;
            var1 = var3.resolve;
            var1 = var1.bind(var3)();
            return var1;
 42:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var3 = undefined;
            var5 = var4.bind(var3)(var1);
            var4 = var5.dispatch;
            var1 = {};
            var6 = 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS';
            var1['type'] = var6;
            var1 = var4.bind(var5)(var1);
            var4 = _closure1_slot10;
            var1 = 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS';
            var1 = var4.bind(var3)(var1);
            var2 = _closure1_slot9;
            var2 = var2.bind(var3)();
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var4 = function _maybeFetchGuildSoundboardSounds() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.getGuildIdsToFetchSoundsFor;
            var5 = var1.bind(var3)();
            var3 = var5.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0007_ip = 139; continue _fun0007 }
 46:
            var3 = _closure1_slot10;
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
 139:
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/soundboard/SoundboardActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        var1 = global;
        var3 = var1.Promise;
        var2 = var3.all;
        var1 = _closure1_slot11;
        var5 = undefined;
        var6 = var1.bind(var5)();
        var1 = new Array(2);
        var1[0] = var6;
        var4 = _closure1_slot12;
        var4 = var4.bind(var5)();
        var1[1] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['maybeFetchSoundboardSounds'] = var4;
    var4 = function uploadSound() {
        var1 = undefined;
        var4 = _closure1_slot13;
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
        var4 = _closure1_slot14;
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
        var4 = _closure1_slot15;
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
        var1 = 10;
        var4 = var4[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var6 = var4.FrecencyUserSettingsActionCreators;
        var5 = var6.updateAsync;
        var3 = _closure1_slot8;
        var4 = var3.INFREQUENT_USER_ACTION;
        var3 = 'favoriteSoundboardSounds';
        var2 = function(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var3 = arg1;
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 11;
                var1 = var4[var1];
                var10 = undefined;
                var4 = var2.bind(var10)(var1);
                var2 = var4.size;
                var1 = var3.soundIds;
                var2 = var2.bind(var4)(var1);
                var1 = _closure1_slot7;
                if(!(!(var2 >= var1))) { _fun0008_ip = 108; continue _fun0008 }
 52:
                var5 = var3.soundIds;
                var4 = var5.includes;
                var1 = _closure2_slot0;
                var1 = var4.bind(var5)(var1);
                var1 = !var1;
                if(!var1) { _fun0008_ip = 103; continue _fun0008 }
 81:
                var4 = var3.soundIds;
                var3 = var4.push;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                var1 = undefined;
 103:
                _fun0008_ip = 258; continue _fun0008;
 108:
                var3 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 12;
                var2 = var11[var2];
                var4 = var3.bind(var10)(var2);
                var3 = var4.show;
                var2 = {};
                var6 = _closure1_slot0;
                var5 = 13;
                var7 = var11[var5];
                var7 = var6.bind(var10)(var7);
                var12 = var7.intl;
                var8 = var12.string;
                var7 = var11[var5];
                var7 = var6.bind(var10)(var7);
                var7 = var7.t;
                var7 = var7.+XYXtb;
                var7 = var8.bind(var12)(var7);
                var2['title'] = var7;
                var7 = var11[var5];
                var7 = var6.bind(var10)(var7);
                var8 = var7.intl;
                var7 = var8.formatToPlainString;
                var5 = var11[var5];
                var5 = var6.bind(var10)(var5);
                var5 = var5.t;
                var6 = var5.JaIyFh;
                var5 = {};
                var9 = _closure1_slot7;
                var5['count'] = var9;
                var5 = var7.bind(var8)(var6, var5);
                var2['body'] = var5;
                var2 = var3.bind(var4)(var2);
                var1 = false;
 258:
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
        var1 = 10;
        var4 = var4[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var6 = var4.FrecencyUserSettingsActionCreators;
        var5 = var6.updateAsync;
        var3 = _closure1_slot8;
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
        var4 = _closure1_slot16;
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