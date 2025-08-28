// app/modules/guild_settings/GuildSettingsEmojiStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var2 = 0;
    var7 = var5[var2];
    var1 = undefined;
    var7 = var6.bind(var1)(var7);
    var _closure1_slot0 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot1 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 5;
    var8 = var5[var7];
    var8 = var6.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 6;
    var8 = var5[var8];
    var8 = var6.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = {};
    var _closure1_slot7 = var8;
    var8 = {};
    var _closure1_slot8 = var8;
    var _closure1_slot9 = var2;
    var2 = false;
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var5[var2];
    var8 = var6.bind(var1)(var2);
    var2 = {};
    var2['max'] = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var7 = var7.Millis;
    var7 = var7.HOUR;
    var2['maxAge'] = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var12 = var7;
    var11 = var2;
    var2 = new var12[var8](var11, var10);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function GuildSettingsEmojiStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
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
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot6;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'isUploadingEmoji';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot9;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getEmojiRevision';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = _closure1_slot7;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0003_ip = 28; continue _fun0003 }
 25:
                var1 = var2;
 28:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getEmojis';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot8;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getEmojiFileInputAutoOpen';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getEmojiRawAsset';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot11;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'GuildSettingsEmojiStore';
    var7['displayName'] = var2;
    var2 = 10;
    var2 = var5[var2];
    var11 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleEmojiDelete(arg1) {
        var2 = arg1;
        var3 = var2.guildId;
        var2 = var2.emojiId;
        var _closure2_slot0 = var2;
        var2 = _closure1_slot8;
        var5 = var2[var3];
        var4 = var5.filter;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.id;
            var1 = _closure2_slot0;
            var1 = var2 !== var1;
            return var1;
        };
        var1 = var4.bind(var5)(var1);
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var2['EMOJI_DELETE'] = var8;
    var8 = function handleFetchSuccess(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var5 = var1.emojis;
        var2 = _closure1_slot8;
        var4 = var5.map;
        var1 = function(arg1) {
            var3 = _closure1_slot5;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = arg1;
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1 = var4.bind(var5)(var1);
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var2['EMOJI_FETCH_SUCCESS'] = var8;
    var8 = function handleFetchFailure(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot8;
        var1 = new Array(0);
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var2['EMOJI_FETCH_FAILURE'] = var8;
    var8 = function handleStartUploading() {
        var1 = _closure1_slot9;
        var1 = var1 + 1;
        _closure1_slot9 = var1;
        var1 = undefined;
        return var1;
    };
    var2['EMOJI_UPLOAD_START'] = var8;
    var8 = function handleStopUploading() {
        var1 = _closure1_slot9;
        var1 = var1 - 1;
        _closure1_slot9 = var1;
        var1 = undefined;
        return var1;
    };
    var2['EMOJI_UPLOAD_STOP'] = var8;
    var8 = function handleEmojiFileInputAutoOpen(arg1) {
        var1 = arg1;
        var2 = var1.autoOpen;
        _closure1_slot10 = var2;
        var1 = undefined;
        return var1;
    };
    var2['EMOJI_FILE_INPUT_AUTO_OPEN'] = var8;
    var8 = function handleCacheRawEmojiAsset(arg1) {
        var1 = arg1;
        var4 = var1.emojiId;
        var3 = var1.userImage;
        var2 = _closure1_slot11;
        var1 = var2.set;
        var1 = var1.bind(var2)(var4, var3);
        var1 = undefined;
        return var1;
    };
    var2['EMOJI_CACHE_RAW_EMOJI_ASSET'] = var8;
    var4 = function handleGuildEmojiUpdate(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var2 = _closure1_slot7;
            var1 = var2[var3];
            var4 = null;
            var5 = var4 != var1;
            var4 = 0;
            if(!var5) { _fun0004_ip = 33; continue _fun0004 }
 30:
            var4 = var1;
 33:
            var1 = 1;
            var1 = var4 + var1;
            var2[var3] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['GUILD_EMOJIS_UPDATE'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var12 = var4;
    var10 = var2;
    var2 = new var12[var7](var11, var10, var9);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/GuildSettingsEmojiStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();