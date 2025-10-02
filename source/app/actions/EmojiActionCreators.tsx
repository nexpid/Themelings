// app/actions/EmojiActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _updateEmoji() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var10 = var2.guildId;
                    var7 = var2.emojiId;
                    var9 = var2.name;
                    var8 = var2.roles;
                    var6 = undefined;
                    SaveGenerator(address=41);
case 4:
                    return var6;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 9;
                    var3 = var5[var3];
                    var3 = var4.bind(var6)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.patch;
                    var3 = {};
                    var12 = _closure1_slot7;
                    var11 = var12.GUILD_EMOJI;
                    var7 = var11.bind(var12)(var10, var7);
                    var3['url'] = var7;
                    var7 = {};
                    var7['name'] = var9;
                    var7['roles'] = var8;
                    var3['body'] = var7;
                    var7 = true;
                    var3['oldFormErrors'] = var7;
                    var3['rejectWithError'] = var7;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=141);
case 8:
                    return var3;
case 9:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 10; continue _fun0001 }
case 11: // try_end0
                    return var3;
case 10:
                    return var3;
case 12: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 10;
                    var3 = var7[var3];
                    var3 = var4.bind(var6)(var3);
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var15 = var4;
                    var14 = var5;
                    var3 = new var15[var3](var14, var13);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function dedupeFavoriteEmojis(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var3 = _closure1_slot6;
            var3 = var3.totalUnavailableGuilds;
            var4 = 0;
            if(!(!(var3 > var4))) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var5 = _closure1_slot5;
            var3 = var5.isConnected;
            var3 = var3.bind(var5)();
            if(var3) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            return var1;
case 15:
            var5 = var1.map;
            var3 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure1_slot4;
                    var1 = var3.getCustomEmojiById;
                    var1 = var1.bind(var3)(var4);
                    var3 = null;
                    if(!(var3 == var1)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 11;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.getByName;
                    var1 = var2.bind(var3)(var4);
case 17:
                    return var1;
                }
            };
            var8 = var5.bind(var1)(var3);
            var6 = var8.filter;
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 12;
            var3 = var7[var3];
            var5 = undefined;
            var3 = var9.bind(var5)(var3);
            var3 = var3.isNotNullish;
            var3 = var6.bind(var8)(var3);
            var6 = _closure1_slot1;
            var2 = 13;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var3 = var2.bind(var5)(var3);
            var2 = var3.keys;
            var11 = var2.bind(var3)();
            var2 = new Array(0);
            var12 = var2;
            var10 = 0;
            var3 = arraySpread(var12, var11, var10);
            return var2;
case 13:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function getFavoriteEmojiNameOrId(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            var2 = var4 == var3;
            var1 = null;
            if(var2) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var2 = var3.id;
            if(!(var4 == var2)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var5 = 11;
            var6 = var6[var5];
            var5 = undefined;
            var8 = var7.bind(var5)(var6);
            var7 = var8.convertSurrogateToBase;
            var6 = var3.surrogates;
            var6 = var7.bind(var8)(var6);
            var7 = var4 == var6;
            if(var7) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var5 = var6.name;
case 23:
            var2 = var5;
case 21:
            if(!(var4 == var2)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var2 = var3.name;
case 25:
            var1 = var2;
case 19:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MAX_FAVORITES;
    var _closure1_slot8 = var7;
    var4 = var4.UserSettingsDelay;
    var _closure1_slot9 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/EmojiActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function setDiversityColor(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 6;
        var4 = var4[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var6 = var4.PreloadedUserSettingsActionCreators;
        var5 = var6.updateAsync;
        var3 = _closure1_slot9;
        var4 = var3.FREQUENT_USER_ACTION;
        var3 = 'textAndImages';
        var2 = function(arg1) {
            var2 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var4 = var3.StringValue;
            var3 = var4.create;
            var3 = var3.bind(var4)();
            var2['diversitySurrogate'] = var3;
            var3 = var2.diversitySurrogate;
            var2 = _closure2_slot0;
            var3['value'] = var2;
            return var1;
        };
        var2 = var5.bind(var6)(var3, var2, var4);
        return var1;
    };
    var3['setDiversityColor'] = var4;
    var4 = function fetchEmoji(arg1) {
        var8 = arg1;
        var _closure2_slot0 = var8;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 8;
        var3 = var5[var1];
        var1 = undefined;
        var7 = var4.bind(var1)(var3);
        var4 = var7.dispatch;
        var3 = {};
        var9 = 'EMOJI_FETCH';
        var3['type'] = var9;
        var3['guildId'] = var8;
        var3 = var4.bind(var7)(var3);
        var4 = _closure1_slot0;
        var3 = 9;
        var3 = var5[var3];
        var3 = var4.bind(var1)(var3);
        var5 = var3.HTTP;
        var4 = var5.get;
        var3 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
        var7 = _closure1_slot7;
        var6 = var7.GUILD_EMOJIS;
        var6 = var6.bind(var7)(var8);
        var3['url'] = var6;
        var5 = var4.bind(var5)(var3);
        var4 = var5.then;
        var3 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'EMOJI_FETCH_SUCCESS';
            var1['type'] = var4;
            var4 = _closure2_slot0;
            var1['guildId'] = var4;
            var4 = arg1;
            var4 = var4.body;
            var1['emojis'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'EMOJI_FETCH_FAILURE';
            var1['type'] = var4;
            var4 = _closure2_slot0;
            var1['guildId'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['fetchEmoji'] = var4;
    var4 = function uploadEmoji(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var12 = var2.guildId;
            var _closure2_slot0 = var12;
            var10 = var2.image;
            var9 = var2.name;
            var8 = var2.roles;
            var7 = var2.analyticsLocation;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var6 = undefined;
            var11 = var3.bind(var6)(var2);
            var3 = var11.dispatch;
            var2 = {};
            var13 = 'EMOJI_UPLOAD_START';
            var2['type'] = var13;
            var2['guildId'] = var12;
            var2 = var3.bind(var11)(var2);
            var3 = _closure1_slot0;
            var2 = 9;
            var2 = var4[var2];
            var2 = var3.bind(var6)(var2);
            var4 = var2.HTTP;
            var3 = var4.post;
            var2 = {};
            var11 = _closure1_slot7;
            var5 = var11.GUILD_EMOJIS;
            var5 = var5.bind(var11)(var12);
            var2['url'] = var5;
            var5 = {};
            var5['image'] = var10;
            var5['name'] = var9;
            var5['roles'] = var8;
            var2['body'] = var5;
            var5 = {};
            var8 = null;
            var8 = var8 == var7;
            if(var8) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var6 = var7.page;
case 27:
            var5['client_event_source'] = var6;
            var2['context'] = var5;
            var5 = true;
            var2['oldFormErrors'] = var5;
            var5 = false;
            var2['rejectWithError'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'EMOJI_UPLOAD_STOP';
                var1['type'] = var4;
                var4 = _closure2_slot0;
                var1['guildId'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = arg1;
                var1 = var1.body;
                return var1;
            };
            var1 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'EMOJI_UPLOAD_STOP';
                var1['type'] = var4;
                var4 = _closure2_slot0;
                var1['guildId'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = global;
                var3 = var1.Promise;
                var2 = var3.reject;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['uploadEmoji'] = var4;
    var4 = function deleteEmoji(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var9 = arg1;
            var8 = arg2;
            var6 = arg3;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var4 = undefined;
            var7 = var2.bind(var4)(var1);
            var2 = var7.dispatch;
            var1 = {};
            var10 = 'EMOJI_DELETE';
            var1['type'] = var10;
            var1['guildId'] = var9;
            var1['emojiId'] = var8;
            var1 = var2.bind(var7)(var1);
            var2 = _closure1_slot0;
            var1 = 9;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var3 = var1.HTTP;
            var2 = var3.del;
            var1 = {};
            var7 = _closure1_slot7;
            var5 = var7.GUILD_EMOJI;
            var5 = var5.bind(var7)(var9, var8);
            var1['url'] = var5;
            var5 = null;
            var5 = var5 != var6;
            if(!var5) { _fun0006_ip = 29; continue _fun0006 }
case 30:
            var5 = {};
            var5['replaced_by'] = var6;
            var4 = var5;
case 29:
            var1['body'] = var4;
            var4 = true;
            var1['oldFormErrors'] = var4;
            var4 = false;
            var1['rejectWithError'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['deleteEmoji'] = var4;
    var4 = function updateEmoji() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['updateEmoji'] = var4;
    var4 = function favoriteEmoji(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = _closure1_slot12;
            var1 = undefined;
            var4 = arg1;
            var5 = var5.bind(var1)(var4);
            var _closure2_slot0 = var5;
            var4 = null;
            if(!(var4 != var5)) { _fun0007_ip = 31; continue _fun0007 }
case 32:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 6;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var6 = var4.FrecencyUserSettingsActionCreators;
            var5 = var6.updateAsync;
            var3 = _closure1_slot9;
            var4 = var3.INFREQUENT_USER_ACTION;
            var3 = 'favoriteEmojis';
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure1_slot11;
                    var1 = var3.emojis;
                    var10 = undefined;
                    var1 = var2.bind(var10)(var1);
                    var3['emojis'] = var1;
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 14;
                    var1 = var4[var1];
                    var4 = var2.bind(var10)(var1);
                    var2 = var4.size;
                    var1 = var3.emojis;
                    var2 = var2.bind(var4)(var1);
                    var1 = _closure1_slot8;
                    if(!(!(var2 >= var1))) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                    var5 = var3.emojis;
                    var4 = var5.includes;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var1);
                    var1 = !var1;
                    if(!var1) { _fun0008_ip = 35; continue _fun0008 }
case 36:
                    var4 = var3.emojis;
                    var3 = var4.push;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
                    var1 = undefined;
case 35:
                    _fun0008_ip = 37; continue _fun0008;
case 33:
                    var3 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var2 = 15;
                    var2 = var11[var2];
                    var4 = var3.bind(var10)(var2);
                    var3 = var4.show;
                    var2 = {};
                    var6 = _closure1_slot0;
                    var5 = 16;
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
                    var9 = _closure1_slot8;
                    var5['count'] = var9;
                    var5 = var7.bind(var8)(var6, var5);
                    var2['body'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var1 = false;
case 37:
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var3, var2, var4);
case 31:
            return var1;
        }
    };
    var3['favoriteEmoji'] = var4;
    var2 = function unfavoriteEmoji(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = _closure1_slot12;
            var1 = undefined;
            var4 = arg1;
            var5 = var5.bind(var1)(var4);
            var _closure2_slot0 = var5;
            var4 = null;
            if(!(var4 != var5)) { _fun0009_ip = 31; continue _fun0009 }
case 32:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 6;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var6 = var4.FrecencyUserSettingsActionCreators;
            var5 = var6.updateAsync;
            var3 = _closure1_slot9;
            var4 = var3.INFREQUENT_USER_ACTION;
            var3 = 'favoriteEmojis';
            var2 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure1_slot11;
                    var2 = var3.emojis;
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3['emojis'] = var2;
                    var5 = var3.emojis;
                    var4 = var5.includes;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var2);
                    if(var2) { _fun0010_ip = 38; continue _fun0010 }
case 39:
                    var2 = false;
                    return var2;
case 38:
                    var5 = var3.emojis;
                    var4 = var5.filter;
                    var2 = function(arg1) {
                        var2 = _closure2_slot0;
                        var1 = arg1;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var2 = var4.bind(var5)(var2);
                    var3['emojis'] = var2;
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var3, var2, var4);
case 31:
            return var1;
        }
    };
    var3['unfavoriteEmoji'] = var2;
    return var1;
})();