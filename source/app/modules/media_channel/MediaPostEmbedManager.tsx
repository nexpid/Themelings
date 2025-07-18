// app/modules/media_channel/MediaPostEmbedManager.tsx
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
    var1 = function resolveMediaPostEmbeds(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var7 = var1.embeds;
            var3 = null;
            var5 = var3 == var7;
            var1 = undefined;
            var4 = undefined;
            if(var5) { _fun0002_ip = 45; continue _fun0002 }
 28:
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
 45:
            var3 = var3 != var4;
            if(!var3) { _fun0002_ip = 63; continue _fun0002 }
 52:
            var6 = var4.length;
            var5 = 0;
            var3 = var5 !== var6;
 63:
            if(!var3) { _fun0002_ip = 83; continue _fun0002 }
 66:
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.url;
                    var6 = null;
                    if(!(var6 != var2)) { _fun0003_ip = 431; continue _fun0003 }
 17:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 11;
                    var3 = var4[var3];
                    var4 = undefined;
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.isEligibleForGuildMediaChannelPostPreviewEmbed;
                    var3 = var3.bind(var5)();
                    if(!var3) { _fun0003_ip = 431; continue _fun0003 }
 58:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 12;
                    var3 = var7[var3];
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.getMediaPostEmbedChannelPath;
                    var1 = var1.url;
                    var1 = var3.bind(var5)(var1);
                    if(!(var6 != var1)) { _fun0003_ip = 431; continue _fun0003 }
 101:
                    var5 = var6 == var1;
                    var3 = undefined;
                    if(var5) { _fun0003_ip = 116; continue _fun0003 }
 110:
                    var3 = var1.threadId;
 116:
                    if(!(var6 != var3)) { _fun0003_ip = 431; continue _fun0003 }
 123:
                    var5 = var6 == var1;
                    var3 = undefined;
                    if(var5) { _fun0003_ip = 137; continue _fun0003 }
 132:
                    var3 = var1.channelId;
 137:
                    if(!(var6 != var3)) { _fun0003_ip = 431; continue _fun0003 }
 144:
                    var7 = _closure1_slot11;
                    var5 = var7.getEmbedFetchState;
                    var3 = var1.threadId;
                    var5 = var5.bind(var7)(var3);
                    var3 = _closure1_slot12;
                    var3 = var3.NOT_FETCHED;
                    if(!(var5 === var3)) { _fun0003_ip = 431; continue _fun0003 }
 182:
                    var7 = _closure1_slot14;
                    var5 = var7.has;
                    var3 = var1.threadId;
                    var3 = var5.bind(var7)(var3);
                    if(var3) { _fun0003_ip = 431; continue _fun0003 }
 208:
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
                    if(var9) { _fun0003_ip = 266; continue _fun0003 }
 261:
                    var3 = var1.guildId;
 266:
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
                    if(!var10) { _fun0003_ip = 348; continue _fun0003 }
 345:
                    var6 = var3;
 348:
                    var3 = _closure1_slot13;
                    var3 = var3.IS_CROSSPOST;
                    var6 = var7.bind(var9)(var6, var3);
                    var3 = var5;
                    if(!var3) { _fun0003_ip = 376; continue _fun0003 }
 370:
                    var7 = false;
                    var3 = var7 === var8;
 376:
                    if(var3) { _fun0003_ip = 391; continue _fun0003 }
 379:
                    var5 = !var5;
                    if(!var5) { _fun0003_ip = 388; continue _fun0003 }
 385:
                    var5 = var6;
 388:
                    var3 = var5;
 391:
                    if(var3) { _fun0003_ip = 431; continue _fun0003 }
 394:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 14;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.fetchMediaPostEmbed;
                    var1 = var1.threadId;
                    var1 = var2.bind(var3)(var1);
 431:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
 83:
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
 0:
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
                if(var1) { _fun0004_ip = 62; continue _fun0004 }
 49:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var4, var5);
                _fun0004_ip = 100; continue _fun0004;
 62:
                var6 = global;
                var9 = var6.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var5)(var4);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
 100:
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
 0:
                var1 = arg1;
                var3 = var1.firstMessages;
                var1 = null;
                if(!(var1 != var3)) { _fun0005_ip = 59; continue _fun0005 }
 15:
                var4 = _closure1_slot14;
                var2 = var4.clear;
                var2 = var2.bind(var4)();
                if(!(var1 != var3)) { _fun0005_ip = 55; continue _fun0005 }
 36:
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var3 = _closure1_slot16;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
 55:
                var1 = undefined;
                return var1;
 59:
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
 0:
                    var1 = arg1;
                    var4 = var1.first_message;
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0006_ip = 34; continue _fun0006 }
 18:
                    var3 = _closure1_slot16;
                    var2 = undefined;
                    var3 = var3.bind(var2)(var4);
                    var1 = undefined;
 34:
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