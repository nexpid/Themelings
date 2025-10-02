// app/modules/media_channel/MediaPostEmbedManager.tsx
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
    var1 = function resolveMediaPostEmbeds(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var7 = var1.embeds;
            var3 = null;
            var5 = var3 == var7;
            var1 = undefined;
            var4 = undefined;
            if(var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = var7.filter;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 10;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.MessageEmbedTypes;
                var1 = var1.POST_PREVIEW;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var6.bind(var7)(var5);
case 6:
            var3 = var3 != var4;
            if(!var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var6 = var4.length;
            var5 = 0;
            var3 = var5 !== var6;
case 8:
            if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.url;
                    var6 = null;
                    if(!(var6 != var2)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 11;
                    var3 = var4[var3];
                    var4 = undefined;
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.isEligibleForGuildMediaChannelPostPreviewEmbed;
                    var3 = var3.bind(var5)();
                    if(!var3) { _fun0003_ip = 12; continue _fun0003 }
case 14:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 12;
                    var3 = var7[var3];
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.getMediaPostEmbedChannelPath;
                    var1 = var1.url;
                    var1 = var3.bind(var5)(var1);
                    if(!(var6 != var1)) { _fun0003_ip = 12; continue _fun0003 }
case 15:
                    var5 = var6 == var1;
                    var3 = undefined;
                    if(var5) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var3 = var1.threadId;
case 16:
                    if(!(var6 != var3)) { _fun0003_ip = 12; continue _fun0003 }
case 18:
                    var5 = var6 == var1;
                    var3 = undefined;
                    if(var5) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var3 = var1.channelId;
case 19:
                    if(!(var6 != var3)) { _fun0003_ip = 12; continue _fun0003 }
case 21:
                    var7 = _closure1_slot11;
                    var5 = var7.getEmbedFetchState;
                    var3 = var1.threadId;
                    var5 = var5.bind(var7)(var3);
                    var3 = _closure1_slot12;
                    var3 = var3.NOT_FETCHED;
                    if(!(var5 === var3)) { _fun0003_ip = 12; continue _fun0003 }
case 22:
                    var7 = _closure1_slot14;
                    var5 = var7.has;
                    var3 = var1.threadId;
                    var3 = var5.bind(var7)(var3);
                    if(var3) { _fun0003_ip = 12; continue _fun0003 }
case 23:
                    var7 = _closure1_slot14;
                    var5 = var7.add;
                    var3 = var1.threadId;
                    var3 = var5.bind(var7)(var3);
                    var5 = _closure1_slot9;
                    var3 = var5.getId;
                    var8 = var3.bind(var5)();
                    var7 = _closure1_slot10;
                    var5 = var7.isMember;
                    var9 = var6 == var1;
                    var3 = undefined;
                    if(var9) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var3 = var1.guildId;
case 24:
                    var5 = var5.bind(var7)(var3, var8);
                    var9 = _closure1_slot8;
                    var8 = var9.isChannelGated;
                    var7 = var1.guildId;
                    var3 = var1.channelId;
                    var8 = var8.bind(var9)(var7, var3);
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 13;
                    var3 = var9[var3];
                    var9 = var7.bind(var4)(var3);
                    var7 = var9.hasFlag;
                    var3 = _closure2_slot0;
                    var3 = var3.flags;
                    var10 = var6 != var3;
                    var6 = 0;
                    if(!var10) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var6 = var3;
case 26:
                    var3 = _closure1_slot13;
                    var3 = var3.IS_CROSSPOST;
                    var6 = var7.bind(var9)(var6, var3);
                    var3 = var5;
                    if(!var3) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var7 = false;
                    var3 = var7 === var8;
case 28:
                    if(var3) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var5 = !var5;
                    if(!var5) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var5 = var6;
case 32:
                    var3 = var5;
case 30:
                    if(var3) { _fun0003_ip = 12; continue _fun0003 }
case 34:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 14;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.fetchMediaPostEmbed;
                    var1 = var1.threadId;
                    var1 = var2.bind(var3)(var1);
case 12:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
case 10:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
    var9 = var6[var8];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot11 = var9;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.FetchState;
    var _closure1_slot12 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.MessageFlags;
    var _closure1_slot13 = var8;
    var4 = var4.Set;
    var8 = var4.prototype;
    var8 = Object.create(var8, {constructor: {value: var4}});
    var14 = var8;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot14 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function MediaPostEmbedManager() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = this;
                var1 = _closure1_slot3;
                var3 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var4, var3);
                var1 = _closure1_slot6;
                var10 = var1.bind(var5)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot15;
                var1 = var1.bind(var5)();
                if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var4, var5);
                _fun0004_ip = 37; continue _fun0004;
case 35:
                var6 = global;
                var9 = var6.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var5)(var4);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
case 37:
                var1 = var3.bind(var5)(var4, var1);
                var3 = {};
                var4 = var1.handleLoadThreadsSuccess;
                var3['LOAD_THREADS_SUCCESS'] = var4;
                var4 = var1.handleLoadThreadsSuccess;
                var3['LOAD_ARCHIVED_THREADS_SUCCESS'] = var4;
                var4 = var1.handleLoadForumPosts;
                var3['LOAD_FORUM_POSTS'] = var4;
                var1['actions'] = var3;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 15;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = _closure1_slot16;
                var2 = {};
                var6 = function onBeforeBatch() {
                    var2 = _closure1_slot14;
                    var1 = var2.clear;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2['onBeforeBatch'] = var6;
                var2 = var4.bind(var5)(var1, var3, var2);
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
        var1 = 'handleLoadThreadsSuccess';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = arg1;
                var3 = var1.firstMessages;
                var1 = null;
                if(!(var1 != var3)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                var4 = _closure1_slot14;
                var2 = var4.clear;
                var2 = var2.bind(var4)();
                if(!(var1 != var3)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var3 = _closure1_slot16;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
case 40:
                var1 = undefined;
                return var1;
case 38:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'handleLoadForumPosts';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var1 = arg1;
            var3 = var1.threads;
            var2 = _closure1_slot14;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var1 = global;
            var2 = var1.Object;
            var1 = var2.values;
            var3 = var1.bind(var2)(var3);
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.first_message;
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var3 = _closure1_slot16;
                    var2 = undefined;
                    var3 = var3.bind(var2)(var4);
                    var1 = undefined;
case 42:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var14 = var4;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_channel/MediaPostEmbedManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();