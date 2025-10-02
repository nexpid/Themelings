// app/actions/ReadStateActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var8;
    var5 = function ack(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arguments[2];
            var6 = arguments[3];
            var1 = undefined;
            if(!(var7 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = false;
case 2:
            if(!(var6 === var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = false;
case 4:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 6;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var8 = 'CHANNEL_ACK';
            var2['type'] = var8;
            var8 = arg1;
            var2['channelId'] = var8;
            var8 = arguments[4];
            var2['messageId'] = var8;
            var2['immediate'] = var7;
            var2['force'] = var6;
            var5 = _closure1_slot7;
            var2['context'] = var5;
            var5 = arg2;
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot8 = var5;
    var4 = function ackCategory(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var8 = arg2;
            var7 = arguments[2];
            var6 = arguments[3];
            var1 = undefined;
            if(!(var7 === var1)) { _fun0002_ip = 6; continue _fun0002 }
case 4:
            var7 = false;
case 6:
            if(!(var6 === var1)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var6 = false;
case 7:
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var1;
            var9 = _closure1_slot4;
            var3 = var9.getChannel;
            var3 = var3.bind(var9)(var4);
            _closure2_slot0 = var3;
            var10 = null;
            if(!(var10 != var3)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var9 = var3.guild_id;
            if(!(var10 != var9)) { _fun0002_ip = 9; continue _fun0002 }
case 11:
            var11 = _closure1_slot5;
            var9 = var11.getCategories;
            var3 = var3.guild_id;
            var3 = var9.bind(var11)(var3);
            var9 = var3[var4];
            if(!(var10 != var9)) { _fun0002_ip = 9; continue _fun0002 }
case 12:
            var9 = var3[var4];
            var4 = var9.filter;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.channel;
                var3 = _closure1_slot3;
                var2 = var1.type;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var9 = var4.bind(var9)(var3);
            var4 = var9.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.channel;
                var1 = var1.id;
                return var1;
            };
            var10 = var4.bind(var9)(var3);
            var4 = new Array(0);
            var3 = 0;
            var15 = var4;
            var14 = var10;
            var13 = 0;
            var9 = arraySpread(var15, var14, var13);
            _closure2_slot1 = var4;
            var9 = var10.forEach;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot2;
                    var3 = var4.getActiveJoinedThreadsForParent;
                    var1 = _closure2_slot0;
                    var2 = var1.guild_id;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    var4 = var1;
                    for(var1 in var4)
case 13:
                    {
case 14:
                        var9 = var1;
                        var8 = _closure2_slot1;
                        var7 = var8.push;
                        var7 = var7.bind(var8)(var9);
                        _fun0003_ip = 13; continue _fun0003;
                    }
case 15:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var9.bind(var10)(var2);
            var2 = var4.length;
            var2 = var3 < var2;
            if(!var2) { _fun0002_ip = 9; continue _fun0002 }
case 16:
            var9 = _closure1_slot8;
            var15 = var4[var3];
            var16 = undefined;
            var14 = var8;
            var13 = var7;
            var12 = var6;
            var2 = var16[var9](var15, var14, var13, var12, var11);
            var3 = var3 + 1;
            var2 = var4.length;
            if(var3 < var2) { _fun0002_ip = 16; continue _fun0002 }
case 9:
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.isReadableType;
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.CURRENT_APP_CONTEXT;
    var _closure1_slot7 = var6;
    var6 = 8;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'actions/ReadStateActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var3['ack'] = var5;
    var3['ackCategory'] = var4;
    var4 = function ackChannel(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var5 = arg2;
            var2 = var1.isCategory;
            var3 = var2.bind(var1)();
            if(var3) { _fun0004_ip = 17; continue _fun0004 }
case 6:
            var3 = var1.isForumLikeChannel;
            var3 = var3.bind(var1)();
            var8 = _closure1_slot8;
            var7 = var1.id;
            if(var3) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var16 = undefined;
            var15 = var7;
            var14 = var5;
            var13 = true;
            var12 = true;
            var3 = var16[var8](var15, var14, var13, var12, var11);
            _fun0004_ip = 20; continue _fun0004;
case 18:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 7;
            var3 = var6[var3];
            var6 = undefined;
            var9 = var4.bind(var6)(var3);
            var4 = var9.fromTimestamp;
            var3 = global;
            var10 = var3.Date;
            var3 = var10.now;
            var3 = var3.bind(var10)();
            var11 = var4.bind(var9)(var3);
            var16 = undefined;
            var15 = var7;
            var14 = var5;
            var13 = true;
            var12 = true;
            var3 = var16[var8](var15, var14, var13, var12, var11, var10);
            _fun0004_ip = 20; continue _fun0004;
case 17:
            var4 = _closure1_slot9;
            var15 = var1.id;
            var16 = undefined;
            var14 = var5;
            var13 = true;
            var12 = true;
            var1 = var16[var4](var15, var14, var13, var12, var11);
case 20:
            var1 = undefined;
            return var1;
        }
    };
    var3['ackChannel'] = var4;
    var4 = function bulkAck(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var6 = 'BULK_ACK';
        var2['type'] = var6;
        var6 = arg1;
        var2['channels'] = var6;
        var5 = _closure1_slot7;
        var2['context'] = var5;
        var5 = arg2;
        var2['onFinished'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['bulkAck'] = var4;
    var4 = function localAck(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CHANNEL_LOCAL_ACK';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['localAck'] = var4;
    var4 = function enableAutomaticAck(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'ENABLE_AUTOMATIC_ACK';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var5 = arg2;
        var2['windowId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['enableAutomaticAck'] = var4;
    var4 = function disableAutomaticAck(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'DISABLE_AUTOMATIC_ACK';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var5 = arg2;
        var2['windowId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['disableAutomaticAck'] = var4;
    var4 = function ackGuildFeature(arg1, arg2, arg3) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_FEATURE_ACK';
        var2['type'] = var5;
        var5 = arg1;
        var2['id'] = var5;
        var5 = arg2;
        var2['ackType'] = var5;
        var5 = arg3;
        var2['ackedId'] = var5;
        var5 = false;
        var2['local'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['ackGuildFeature'] = var4;
    var4 = function ackUserFeature(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot6;
            var1 = var3.getCurrentUser;
            var5 = var1.bind(var3)();
            var4 = null;
            var6 = var4 == var5;
            var1 = undefined;
            var3 = undefined;
            if(var6) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            var3 = var5.id;
case 21:
            if(!(var4 != var3)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 6;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'USER_NON_CHANNEL_ACK';
            var2['type'] = var5;
            var5 = arg1;
            var2['ackType'] = var5;
            var5 = arg2;
            var2['ackedId'] = var5;
            var5 = false;
            var2['local'] = var5;
            var2 = var3.bind(var4)(var2);
case 23:
            return var1;
        }
    };
    var3['ackUserFeature'] = var4;
    var2 = function clearOldestUnreadMessageId(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CLEAR_OLDEST_UNREAD_MESSAGE';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearOldestUnreadMessageId'] = var2;
    return var1;
})();