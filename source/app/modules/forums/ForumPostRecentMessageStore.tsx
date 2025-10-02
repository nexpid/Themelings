// app/modules/forums/ForumPostRecentMessageStore.tsx
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function isValidMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = _closure1_slot8;
            var4 = var5.getChannel;
            var6 = null;
            var8 = var6 == var1;
            var7 = undefined;
            var3 = undefined;
            if(var8) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var1.channel_id;
case 6:
            var3 = var4.bind(var5)(var3);
            if(!(var6 != var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = var3.isForumPost;
            var4 = var4.bind(var3)();
            if(!var4) { _fun0002_ip = 8; continue _fun0002 }
case 10:
            var4 = _closure1_slot10;
            var3 = var3.id;
            var5 = var4[var3];
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 7;
            var2 = var4[var2];
            var4 = var3.bind(var7)(var2);
            var3 = var4.compare;
            var8 = var6 == var1;
            var2 = undefined;
            if(var8) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var2 = var1.id;
case 11:
            var8 = var6 == var5;
            var1 = undefined;
            if(var8) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var5 = var5.message;
            var6 = var6 == var5;
            var1 = undefined;
            if(var6) { _fun0002_ip = 13; continue _fun0002 }
case 15:
            var1 = var5.id;
case 13:
            var2 = var3.bind(var4)(var2, var1);
            var1 = -1;
            var1 = var2 > var1;
            return var1;
case 8:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function set(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg2;
            var2 = null;
            var1 = var2 == var4;
            if(var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var1 = var3.createMessageRecord;
            var2 = var1.bind(var3)(var4);
case 16:
            var4 = _closure1_slot10;
            var3 = {};
            var1 = true;
            var3['loaded'] = var1;
            var3['message'] = var2;
            var2 = arg1;
            var4[var2] = var3;
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function getMessageState(arg1) {
        var2 = _closure1_slot10;
        var1 = arg1;
        var1 = var2[var1];
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function getMessage(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot14;
            var1 = undefined;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            var3 = null;
            var3 = var3 == var2;
            if(var3) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var1 = var2.message;
case 18:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var4 = function handleLoadThreadsSuccess(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var5 = var2.threads;
            var4 = var2.mostRecentMessages;
            var3 = var5.forEach;
            var2 = function(arg1) {
                var4 = _closure1_slot13;
                var1 = arg1;
                var3 = var1.id;
                var2 = undefined;
                var1 = null;
                var1 = var4.bind(var2)(var3, var1);
                var1 = true;
                return var1;
            };
            var2 = var3.bind(var5)(var2);
            var2 = null;
            if(!(var2 != var4)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var3 = var4.filter;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 9;
            var5 = var5[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var5);
            var2 = var2.isNotNullish;
            var3 = var3.bind(var4)(var2);
            var2 = var3.forEach;
            var1 = function(arg1) {
                var4 = arg1;
                var3 = _closure1_slot13;
                var2 = var4.channel_id;
                var1 = undefined;
                var2 = var3.bind(var1)(var2, var4);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
case 20:
            var1 = undefined;
            return var1;
        }
    };
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var2);
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
    var2 = {};
    var _closure1_slot10 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ForumPostRecentMessageStore() {
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
                var1 = _closure1_slot11;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 24; continue _fun0006;
case 22:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 24:
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
            var2 = _closure1_slot8;
            var1 = _closure1_slot9;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getMessageState';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = arg1;
                var3 = _closure1_slot10;
                var3 = var2 in var3;
                if(var3) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                var4 = _closure1_slot10;
                var3 = {'loaded': false, 'message': null};
                var4[var2] = var3;
case 25:
                var1 = _closure1_slot10;
                var1 = var1[var2];
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ForumPostRecentMessageStore';
    var8['displayName'] = var2;
    var2 = 11;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleConnectionOpen() {
        var1 = {};
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var10;
    var10 = function handleMessageCreate(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg1;
            var1 = var4.isPushNotification;
            var1 = !var1;
            if(!var1) { _fun0008_ip = 27; continue _fun0008 }
case 28:
            var6 = _closure1_slot12;
            var2 = var4.message;
            var3 = undefined;
            var6 = var6.bind(var3)(var2);
            var2 = !var6;
            var2 = !var2;
            if(!var6) { _fun0008_ip = 8; continue _fun0008 }
case 29:
            var6 = var4.message;
            var7 = var6.channel_id;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 7;
            var6 = var9[var6];
            var9 = var8.bind(var3)(var6);
            var8 = var9.castMessageIdAsChannelId;
            var6 = var4.message;
            var6 = var6.id;
            var6 = var8.bind(var9)(var6);
            if(!(var7 !== var6)) { _fun0008_ip = 30; continue _fun0008 }
case 31:
            var8 = _closure1_slot13;
            var6 = var4.message;
            var7 = var6.channel_id;
            var6 = var4.message;
            var6 = var8.bind(var3)(var7, var6);
            var2 = undefined;
            _fun0008_ip = 8; continue _fun0008;
case 30:
            var6 = _closure1_slot13;
            var4 = var4.message;
            var5 = var4.channel_id;
            var4 = null;
            var4 = var6.bind(var3)(var5, var4);
            var2 = undefined;
case 8:
            var1 = var2;
case 27:
            return var1;
        }
    };
    var2['MESSAGE_CREATE'] = var10;
    var10 = function handleMessageUpdate(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot12;
            var1 = var3.message;
            var11 = undefined;
            var2 = var2.bind(var11)(var1);
            var1 = !var2;
            var1 = !var1;
            if(!var2) { _fun0009_ip = 32; continue _fun0009 }
case 33:
            var2 = var3.message;
            var4 = var2.channel_id;
            var2 = var3.message;
            var2 = var2.id;
            var2 = var4 !== var2;
            if(!var2) { _fun0009_ip = 34; continue _fun0009 }
case 35:
            var4 = var3.message;
            var6 = var4.channel_id;
            var10 = var3.message;
            var3 = _closure1_slot14;
            var8 = var3.bind(var11)(var6);
            var3 = _closure1_slot15;
            var9 = var3.bind(var11)(var6);
            var4 = null;
            var3 = var4 != var8;
            if(!var3) { _fun0009_ip = 36; continue _fun0009 }
case 12:
            var3 = var4 != var9;
case 36:
            if(!var3) { _fun0009_ip = 37; continue _fun0009 }
case 38:
            var5 = _closure1_slot10;
            var4 = {};
            var14 = var4;
            var13 = var8;
            var8 = copyDataProperties(var14, var13);
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 8;
            var7 = var12[var7];
            var8 = var8.bind(var11)(var7);
            var7 = var8.updateMessageRecord;
            var8 = var7.bind(var8)(var9, var10);
            var7 = 'message';
            var4[var7] = var8;
            var5[var6] = var4;
            var3 = true;
case 37:
            var2 = undefined;
case 34:
            var1 = var2;
case 32:
            return var1;
        }
    };
    var2['MESSAGE_UPDATE'] = var10;
    var10 = function handleMessageDelete(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channelId;
            var4 = var1.id;
            var5 = _closure1_slot15;
            var1 = undefined;
            var5 = var5.bind(var1)(var3);
            var6 = null;
            var6 = var6 == var5;
            if(var6) { _fun0010_ip = 39; continue _fun0010 }
case 40:
            var1 = var5.id;
case 39:
            var1 = var1 === var4;
            if(!var1) { _fun0010_ip = 41; continue _fun0010 }
case 16:
            var2 = _closure1_slot10;
            var2 = delete var2[var3];
            var1 = true;
case 41:
            return var1;
        }
    };
    var2['MESSAGE_DELETE'] = var10;
    var9 = function handlePostChannelLoadData(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var8 = var1.threads;
            var6 = var8;
            var1 = undefined;
            for(var3 in var6)
case 42:
            {
case 33:
                var11 = var3;
                var10 = _closure1_slot13;
                var9 = var8[var11];
                var9 = var9.most_recent_message;
                var9 = var10.bind(var1)(var11, var9);
                _fun0011_ip = 42; continue _fun0011;
            }
case 43:
            return var1;
        }
    };
    var2['LOAD_FORUM_POSTS'] = var9;
    var2['LOAD_ARCHIVED_THREADS_SUCCESS'] = var4;
    var2['LOAD_THREADS_SUCCESS'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/ForumPostRecentMessageStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();