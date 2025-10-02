// app/modules/forums/ForumPostUnreadCountStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var2 = global;
    var9 = var2.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = {};
    var _closure1_slot10 = var7;
    var2 = var2.Set;
    var7 = var2.prototype;
    var7 = Object.create(var7, {constructor: {value: var2}});
    var13 = var7;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function ForumPostUnreadCountStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var5 = this;
            var4 = var5.waitFor;
            var3 = _closure1_slot7;
            var2 = _closure1_slot8;
            var1 = _closure1_slot9;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getCount';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot10;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getThreadIdsMissingCounts';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            var3 = arg2;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 8;
            var2 = var5[var2];
            var5 = undefined;
            var4 = var4.bind(var5)(var2);
            var6 = _closure1_slot7;
            var2 = var6.hasLoaded;
            var1 = arg1;
            var2 = var2.bind(var6)(var1);
            var1 = 'must wait for THREAD_LIST_SYNC before calling this';
            var1 = var4.bind(var5)(var2, var1);
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = arg1;
                    var1 = _closure1_slot10;
                    var3 = var4 in var1;
                    var1 = !var3;
                    if(var3) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var3 = _closure1_slot11;
                    var2 = var3.has;
                    var2 = var2.bind(var3)(var4);
                    var1 = !var2;
case 9:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'ForumPostUnreadCountStore';
    var7['displayName'] = var2;
    var2 = 10;
    var2 = var5[var2];
    var12 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleConnectionOpen() {
        var1 = {};
        _closure1_slot10 = var1;
        var1 = global;
        var1 = var1.Set;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var4 = var3;
        var1 = new var4[var1](var3);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var8;
    var8 = function handleThreadCreate(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channel;
            var1 = var1.isNewlyCreated;
            var2 = !var1;
            var1 = !var2;
            if(var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var6 = _closure1_slot7;
            var5 = var6.hasLoaded;
            var2 = var3.guild_id;
            var2 = var5.bind(var6)(var2);
            var5 = !var2;
            var2 = !var5;
            if(var5) { _fun0004_ip = 5; continue _fun0004 }
case 13:
            var5 = _closure1_slot10;
            var4 = var3.id;
            var3 = 0;
            var5[var4] = var3;
            var2 = undefined;
case 5:
            var1 = var2;
case 11:
            return var1;
        }
    };
    var2['THREAD_CREATE'] = var8;
    var8 = function handleMessageCreate(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var6 = var2.channelId;
            var1 = var2.optimistic;
            var2 = var2.isPushNotification;
            var1 = !var1;
            if(!var1) { _fun0005_ip = 14; continue _fun0005 }
case 15:
            var1 = !var2;
case 14:
            if(!var1) { _fun0005_ip = 6; continue _fun0005 }
case 16:
            var2 = _closure1_slot10;
            var2 = var6 in var2;
            if(!var2) { _fun0005_ip = 17; continue _fun0005 }
case 18:
            var5 = _closure1_slot10;
            var3 = var5[var6];
            var3 = parseFloat(var3);
            var4 = var3 + 1;
            var5[var6] = var4;
            var2 = undefined;
case 17:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var2['MESSAGE_CREATE'] = var8;
    var8 = function handleForumUnreads(arg1) {
        var1 = arg1;
        var3 = var1.threads;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = arg1;
                var3 = var1.count;
                var2 = null;
                if(!(var2 != var3)) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                var3 = _closure1_slot10;
                var2 = var1.threadId;
                var1 = var1.count;
                var3[var2] = var1;
case 19:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['FORUM_UNREADS'] = var8;
    var8 = function handleMessageAck(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channelId;
            var2 = _closure1_slot10;
            var2 = var3 in var2;
            if(var2) { _fun0007_ip = 21; continue _fun0007 }
case 22:
            var6 = _closure1_slot8;
            var2 = var6.getChannel;
            var7 = var2.bind(var6)(var3);
            var5 = var6.getChannel;
            var2 = null;
            var8 = var2 == var7;
            var4 = undefined;
            if(var8) { _fun0007_ip = 23; continue _fun0007 }
case 24:
            var4 = var7.parent_id;
case 23:
            var4 = var5.bind(var6)(var4);
            if(!(var2 != var4)) { _fun0007_ip = 25; continue _fun0007 }
case 26:
            var2 = var4.isForumLikeChannel;
            var2 = var2.bind(var4)();
            if(var2) { _fun0007_ip = 21; continue _fun0007 }
case 25:
            var2 = false;
            return var2;
case 21:
            var2 = _closure1_slot10;
            var4 = _closure1_slot9;
            var1 = var4.getUnreadCount;
            var1 = var1.bind(var4)(var3);
            var2[var3] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['MESSAGE_ACK'] = var8;
    var4 = function handleRequestForumUnreads(arg1) {
        var1 = arg1;
        var3 = var1.threads;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.threadId;
            var2 = _closure1_slot11;
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['REQUEST_FORUM_UNREADS'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var7](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/ForumPostUnreadCountStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();