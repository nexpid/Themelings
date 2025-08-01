// app/modules/push_feedback/PushFeedbackStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            _closure1_slot8 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.NotificationTypes;
    var _closure1_slot5 = var2;
    var2 = null;
    var _closure1_slot6 = var2;
    var2 = {};
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function PushFeedbackStore() {
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
                var1 = _closure1_slot8;
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
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = arg1;
                var4 = null;
                if(!(var4 != var1)) { _fun0003_ip = 42; continue _fun0003 }
 9:
                var3 = var1.pushFeedback;
                _closure1_slot6 = var3;
                var3 = var1.pushFeedbackMap;
                if(!(var4 != var3)) { _fun0003_ip = 42; continue _fun0003 }
 32:
                var1 = var1.pushFeedbackMap;
                _closure1_slot7 = var1;
 42:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var3 = _closure1_slot6;
            var1['pushFeedback'] = var3;
            var2 = _closure1_slot7;
            var1['pushFeedbackMap'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isEligible';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot6;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isUserPushMessage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = _closure1_slot6;
                var2 = null;
                var3 = var2 == var1;
                var2 = undefined;
                if(var3) { _fun0004_ip = 23; continue _fun0004 }
 18:
                var2 = var1.messageId;
 23:
                var1 = arg1;
                var1 = var2 === var1;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getPushFeedback';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = _closure1_slot6;
                var5 = null;
                var3 = var5 == var1;
                var4 = undefined;
                if(var3) { _fun0005_ip = 23; continue _fun0005 }
 18:
                var4 = var1.messageId;
 23:
                var3 = arg2;
                var1 = null;
                if(!(var4 === var3)) { _fun0005_ip = 54; continue _fun0005 }
 32:
                var3 = _closure1_slot6;
                var4 = var3.channelId;
                var3 = arg1;
                var1 = null;
                if(!(var4 === var3)) { _fun0005_ip = 54; continue _fun0005 }
 50:
                var1 = _closure1_slot6;
 54:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'PushFeedbackStore';
    var8['displayName'] = var2;
    var2 = 'PushFeedbackPersistedStore';
    var8['persistKey'] = var2;
    var2 = 7;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleReceivedNotification(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var3 = var1.notificationType;
            var6 = var1.messageId;
            var5 = var1.channelId;
            var2 = _closure1_slot5;
            var2 = var2.TOP_MESSAGE_PUSH;
            if(!(var2 !== var3)) { _fun0006_ip = 52; continue _fun0006 }
 36:
            var2 = _closure1_slot5;
            var4 = var2.TRENDING_CONTENT_PUSH;
            var2 = false;
            if(!(var4 === var3)) { _fun0006_ip = 54; continue _fun0006 }
 52:
            var2 = true;
 54:
            if(!var2) { _fun0006_ip = 236; continue _fun0006 }
 60:
            var2 = _closure1_slot7;
            var4 = var2[var3];
            var2 = null;
            if(!(var2 == var4)) { _fun0006_ip = 92; continue _fun0006 }
 74:
            var7 = {};
            var7['messageId'] = var6;
            var7['channelId'] = var5;
            var7['pushType'] = var3;
            var4 = var7;
 92:
            var4 = var4.userViewInfo;
            if(!(var2 == var4)) { _fun0006_ip = 116; continue _fun0006 }
 102:
            var4 = {'eligibleAt': 0, 'viewCount': 0};
 116:
            var9 = var4.eligibleAt;
            var7 = var4.viewCount;
            var4 = global;
            var8 = var4.Date;
            var4 = var8.now;
            var10 = var4.bind(var8)();
            if(!(!(var9 < var10))) { _fun0006_ip = 166; continue _fun0006 }
 149:
            var4 = 10;
            var8 = var7 < var4;
            var4 = null;
            if(!var8) { _fun0006_ip = 194; continue _fun0006 }
 161:
            var8 = var7 + 1;
            _fun0006_ip = 179; continue _fun0006;
 166:
            var7 = 604800000;
            var9 = var10 + var7;
            var8 = 1;
 179:
            var7 = {};
            var7['eligibleAt'] = var9;
            var7['viewCount'] = var8;
            var4 = var7;
 194:
            if(!(var2 == var4)) { _fun0006_ip = 204; continue _fun0006 }
 198:
            _closure1_slot6 = var2;
            _fun0006_ip = 236; continue _fun0006;
 204:
            var2 = {};
            var2['messageId'] = var6;
            var2['channelId'] = var5;
            var2['pushType'] = var3;
            var2['userViewInfo'] = var4;
            _closure1_slot6 = var2;
            var1 = _closure1_slot7;
            var1[var3] = var2;
 236:
            var1 = undefined;
            return var1;
        }
    };
    var2['PUSH_FEEDBACK_RECEIVED_NOTIFICATION'] = var9;
    var9 = function handleCleanup() {
        var1 = null;
        _closure1_slot6 = var1;
        var1 = undefined;
        return var1;
    };
    var2['PUSH_FEEDBACK_CLEANUP'] = var9;
    var4 = function handleChannelSelect(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var2 = null;
            if(!(var2 != var4)) { _fun0007_ip = 46; continue _fun0007 }
 14:
            var3 = _closure1_slot6;
            if(!(var2 != var3)) { _fun0007_ip = 46; continue _fun0007 }
 25:
            var3 = _closure1_slot6;
            var3 = var3.channelId;
            if(!(var4 !== var3)) { _fun0007_ip = 42; continue _fun0007 }
 38:
            _closure1_slot6 = var2;
 42:
            var1 = undefined;
            return var1;
 46:
            var1 = false;
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/push_feedback/PushFeedbackStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();