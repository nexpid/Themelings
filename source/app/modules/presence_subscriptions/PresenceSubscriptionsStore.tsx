// app/modules/presence_subscriptions/PresenceSubscriptionsStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function makeSubscriptionId(arg1, arg2) {
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var4 = '';
        var3 = arg1;
        var2 = ':';
        var1 = arg2;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function _isSubscribed(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var5 = _closure1_slot14;
            var4 = var1.applicationId;
            var3 = var1.partyId;
            var1 = undefined;
            var3 = var5.bind(var1)(var4, var3);
            var1 = _closure1_slot10;
            var1 = var3 in var1;
            if(var1) { _fun0002_ip = 48; continue _fun0002 }
 40:
            var2 = _closure1_slot11;
            var1 = var3 in var2;
 48:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var9 = function handleConnectionOpenOrResumed() {
        var1 = {};
        _closure1_slot10 = var1;
        var1 = {};
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
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
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.INVITE_EXPIRATION_MS;
    var _closure1_slot9 = var2;
    var2 = {};
    var _closure1_slot10 = var2;
    var2 = {};
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var11 = var2.DelayedCall;
    var2 = var11.prototype;
    var8 = Object.create(var2, {constructor: {value: var11}});
    var14 = 3000;
    var13 = function flush() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = new Array(0);
            var1 = global;
            var5 = var1.Object;
            var3 = var5.entries;
            var1 = _closure1_slot11;
            var9 = var3.bind(var5)(var1);
            var1 = var9.length;
            var5 = 0;
            var3 = var5 < var1;
            var1 = undefined;
            var8 = 2;
            var7 = 1;
            var6 = 0;
            if(!var3) { _fun0003_ip = 114; continue _fun0003 }
 54:
            var10 = var9[var6];
            var3 = _closure1_slot7;
            var3 = var3.bind(var1)(var10, var8);
            var10 = var3[var5];
            var11 = var3[var7];
            var3 = var4.push;
            var3 = var3.bind(var4)(var11);
            var3 = _closure1_slot10;
            var3[var10] = var11;
            var3 = _closure1_slot11;
            var3 = delete var3[var10];
            var6 = var6 + 1;
            var3 = var9.length;
            if(var6 < var3) { _fun0003_ip = 54; continue _fun0003 }
 114:
            var3 = var4.length;
            if(!(var5 !== var3)) { _fun0003_ip = 154; continue _fun0003 }
 123:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 8;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.subscribeActivities;
            var2 = var2.bind(var3)(var4);
 154:
            return var1;
        }
    };
    var15 = var8;
    var2 = new var15[var11](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function PresenceSubscriptionsStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot13;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 69; continue _fun0004 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 105; continue _fun0004;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
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
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot8;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'isSubscribed';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot15;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'PresenceSubscriptionsStore';
    var8['displayName'] = var2;
    var2 = 11;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleSubscriptionAdd(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var13 = var1.subscription;
            var4 = global;
            var2 = var4.Date;
            var1 = var2.now;
            var14 = var1.bind(var2)();
            var5 = var4.Object;
            var2 = var5.entries;
            var1 = _closure1_slot10;
            var9 = var2.bind(var5)(var1);
            var1 = var9.length;
            var12 = 0;
            var5 = var12 < var1;
            var8 = false;
            var2 = true;
            var6 = undefined;
            var11 = 2;
            var10 = 1;
            var7 = 0;
            var1 = false;
            if(!var5) { _fun0005_ip = 137; continue _fun0005 }
 80:
            var15 = var9[var7];
            var5 = _closure1_slot7;
            var5 = var5.bind(var6)(var15, var11);
            var15 = var5[var12];
            var5 = var5[var10];
            var5 = var5.expiresAt;
            if(!(var5 < var14)) { _fun0005_ip = 122; continue _fun0005 }
 112:
            var5 = _closure1_slot10;
            var5 = delete var5[var15];
            var8 = true;
 122:
            var7 = var7 + 1;
            var5 = var9.length;
            var1 = var8;
            if(var7 < var5) { _fun0005_ip = 80; continue _fun0005 }
 137:
            var8 = var4.Object;
            var7 = var8.entries;
            var5 = _closure1_slot11;
            var9 = var7.bind(var8)(var5);
            var5 = var9.length;
            var5 = var12 < var5;
            var8 = var1;
            var7 = 0;
            var1 = var8;
            if(!var5) { _fun0005_ip = 235; continue _fun0005 }
 178:
            var15 = var9[var7];
            var5 = _closure1_slot7;
            var5 = var5.bind(var6)(var15, var11);
            var15 = var5[var12];
            var5 = var5[var10];
            var5 = var5.expiresAt;
            if(!(var5 < var14)) { _fun0005_ip = 220; continue _fun0005 }
 210:
            var5 = _closure1_slot11;
            var5 = delete var5[var15];
            var8 = true;
 220:
            var7 = var7 + 1;
            var5 = var9.length;
            var1 = var8;
            if(var7 < var5) { _fun0005_ip = 178; continue _fun0005 }
 235:
            var12 = var13.userId;
            var11 = var13.applicationId;
            var10 = var13.partyId;
            var9 = var13.messageId;
            var8 = var13.channelId;
            var7 = var13.inviteTime;
            var5 = _closure1_slot15;
            var5 = var5.bind(var6)(var13);
            if(var5) { _fun0005_ip = 393; continue _fun0005 }
 279:
            var5 = _closure1_slot9;
            var7 = var7 + var5;
            var13 = var4.Date;
            var5 = var13.now;
            var5 = var5.bind(var13)();
            if(!(!(var7 < var5))) { _fun0005_ip = 391; continue _fun0005 }
 306:
            var5 = _closure1_slot14;
            var6 = var5.bind(var6)(var11, var10);
            var5 = _closure1_slot9;
            var7 = var4.Date;
            var4 = var7.now;
            var4 = var4.bind(var7)();
            var7 = var5 + var4;
            var5 = _closure1_slot11;
            var4 = {};
            var4['userId'] = var12;
            var4['applicationId'] = var11;
            var4['partyId'] = var10;
            var4['messageId'] = var9;
            var4['channelId'] = var8;
            var4['expiresAt'] = var7;
            var5[var6] = var4;
            var4 = _closure1_slot12;
            var3 = var4.delay;
            var3 = var3.bind(var4)();
            return var2;
 391:
            return var1;
 393:
            return var1;
        }
    };
    var2['PRESENCE_SUBSCRIPTIONS_ADD'] = var10;
    var2['CONNECTION_OPEN'] = var9;
    var2['CONNECTION_RESUMED'] = var9;
    var4 = function handleLogout() {
        var1 = {};
        _closure1_slot10 = var1;
        var1 = {};
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/presence_subscriptions/PresenceSubscriptionsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();