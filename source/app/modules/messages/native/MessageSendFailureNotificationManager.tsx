// app/modules/messages/native/MessageSendFailureNotificationManager.tsx
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
    var1 = function handleMessageSendFailure(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var7 = var1.channelId;
            var6 = var1.messageId;
            var1 = var1.shouldNotify;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = _closure1_slot11;
            var1 = var2.getState;
            var2 = var1.bind(var2)();
            var1 = 'active';
            if(!(var1 === var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = _closure1_slot9;
            var1 = var2.getGuildId;
            var3 = var1.bind(var2)();
            var2 = _closure1_slot8;
            var1 = var2.getChannelId;
            var1 = var1.bind(var2)(var3);
            if(!(var7 !== var1)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.enqueueNotification;
            var1 = {};
            var4 = _closure1_slot12;
            var4 = var4.MESSAGE_FAILED_TO_SEND;
            var1['type'] = var4;
            var1['channelId'] = var7;
            var1['messageId'] = var6;
            var4 = '-';
            var4 = var7 + var4;
            var4 = var4 + var6;
            var1['key'] = var4;
            var4 = 5000;
            var1['duration'] = var4;
            var4 = function onDismiss() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.clearNotification;
                var2 = var2.bind(var3)();
                return var1;
            };
            var1['onDismiss'] = var4;
            var1 = var2.bind(var3)(var1);
            _fun0002_ip = 6; continue _fun0002;
case 10:
            var1 = undefined;
            return var1;
case 8:
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 12;
            var1 = var12[var1];
            var11 = undefined;
            var3 = var2.bind(var11)(var1);
            var2 = var3.presentLocalNotification;
            var1 = {};
            var4 = 'local';
            var1['category'] = var4;
            var10 = _closure1_slot0;
            var4 = 13;
            var8 = var12[var4];
            var8 = var10.bind(var11)(var8);
            var13 = var8.intl;
            var9 = var13.string;
            var8 = var12[var4];
            var8 = var10.bind(var11)(var8);
            var8 = var8.t;
            var8 = var8.LdlH2N;
            var8 = var9.bind(var13)(var8);
            var1['alertTitle'] = var8;
            var8 = var12[var4];
            var8 = var10.bind(var11)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var4 = var12[var4];
            var4 = var10.bind(var11)(var4);
            var4 = var4.t;
            var4 = var4.xxRPOT;
            var4 = var8.bind(var9)(var4);
            var1['alertBody'] = var4;
            var4 = {};
            var4['channelId'] = var7;
            var4['messageId'] = var6;
            var5 = _closure1_slot14;
            var5 = var5.MESSAGE_SEND_FAILED;
            var4['type'] = var5;
            var1['userInfo'] = var4;
            var1 = var2.bind(var3)(var1);
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function handleMessageCreate(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var5 = var2.message;
            var _closure2_slot0 = var5;
            var3 = var2.sendMessageOptions;
            var6 = null;
            var2 = var6 != var3;
            if(!var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var2 = var3.isHydratingExpiredPendingMessage;
case 12:
            if(!var2) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var4 = var5.state;
            var3 = _closure1_slot13;
            var3 = var3.SEND_FAILED;
            var2 = var4 === var3;
case 14:
            if(!var2) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var4 = _closure1_slot10;
            var3 = var4.getCurrentUser;
            var7 = var3.bind(var4)();
            var8 = var6 == var7;
            var3 = undefined;
            if(var8) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var3 = var7.id;
case 18:
            var5 = var5.author;
            var6 = var6 == var5;
            var4 = undefined;
            if(var6) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var4 = var5.id;
case 20:
            var2 = var3 === var4;
case 16:
            if(!var2) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var2 = global;
            var4 = var2.setTimeout;
            var3 = undefined;
            var2 = function() {
                var3 = _closure1_slot16;
                var2 = {};
                var1 = _closure2_slot0;
                var4 = var1.channel_id;
                var2['channelId'] = var4;
                var1 = var1.id;
                var2['messageId'] = var1;
                var1 = true;
                var2['shouldNotify'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = 3000;
            var1 = var4.bind(var3)(var2, var1);
case 22:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.InAppNotificationTypes;
    var _closure1_slot12 = var8;
    var4 = var4.MessageStates;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.LocalNotificationTypes;
    var _closure1_slot14 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function MessageSendFailureNotificationManager(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot4;
                var2 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot15;
                var1 = var1.bind(var4)();
                if(var1) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0004_ip = 26; continue _fun0004;
case 24:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 26:
                var1 = var2.bind(var4)(var5, var1);
                var2 = {};
                var4 = _closure1_slot17;
                var2['MESSAGE_CREATE'] = var4;
                var3 = _closure1_slot16;
                var2['MESSAGE_SEND_FAILED'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/MessageSendFailureNotificationManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();