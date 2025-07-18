// app/lib/guild/GuildMemberSubscriptions.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var7 = 1;
    var4 = var6[var7];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.MINUTE;
    var4 = var7 * var4;
    var _closure1_slot5 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function GuildMemberSubscriptions(arg1) {
            var3 = this;
            var _closure3_slot0 = var3;
            var6 = _closure1_slot3;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var6.bind(var1)(var3, var5);
            var5 = {};
            var3['_subscriptions'] = var5;
            var5 = {};
            var3['_unsubscriptions'] = var5;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 3;
            var5 = var7[var5];
            var5 = var6.bind(var1)(var5);
            var6 = var5.DelayedCall;
            var9 = _closure1_slot5;
            var4 = var6.prototype;
            var4 = Object.create(var4, {constructor: {value: var6}});
            var8 = function() {
                var2 = _closure3_slot0;
                var1 = var2.flushUnsubscriptions;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var4;
            var2 = new var10[var6](var9, var8, var7);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['_unsubscribe'] = var2;
            var2 = arg1;
            var3['_onChange'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'reset';
        var1['key'] = var2;
        var2 = function value() {
            var1 = this;
            var2 = {};
            var1['_subscriptions'] = var2;
            var2 = {};
            var1['_unsubscriptions'] = var2;
            var2 = var1._unsubscribe;
            var1 = var2.cancel;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(9);
        var2[0] = var1;
        var1 = {};
        var6 = 'get';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = this;
                var2 = var1._subscriptions;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                if(!(var1 == var3)) { _fun0001_ip = 24; continue _fun0001 }
 22:
                var3 = {};
 24:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.keys;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'clear';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var3 = var1._subscriptions;
            var3 = delete var3[var2];
            var1 = var1._unsubscriptions;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'subscribe';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = arg1;
                var3 = arg2;
                var2 = this;
                var1 = var2._subscriptions;
                var1 = var1[var4];
                var6 = null;
                if(!(var6 == var1)) { _fun0002_ip = 27; continue _fun0002 }
 25:
                var1 = {};
 27:
                var5 = var1[var3];
                var7 = var6 != var5;
                var6 = 0;
                if(!var7) { _fun0002_ip = 43; continue _fun0002 }
 40:
                var6 = var5;
 43:
                var5 = 1;
                var6 = var6 + var5;
                var1[var3] = var6;
                var6 = var2._subscriptions;
                var6[var4] = var1;
                var1 = var1[var3];
                if(!(var5 === var1)) { _fun0002_ip = 94; continue _fun0002 }
 72:
                var5 = var2._onChange;
                var1 = var2.get;
                var1 = var1.bind(var2)(var4);
                var1 = var5.bind(var2)(var4, var1);
 94:
                var1 = var2.checkForLeaks;
                var1 = var1.bind(var2)(var4, var3);
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'isSubscribed';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = arg1;
                var2 = this;
                var1 = var2._subscriptions;
                var1 = var1[var4];
                var3 = null;
                var1 = var3 != var1;
                if(!var1) { _fun0003_ip = 46; continue _fun0003 }
 25:
                var2 = var2._subscriptions;
                var4 = var2[var4];
                var2 = arg2;
                var2 = var4[var2];
                var1 = var3 != var2;
 46:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'isSubscribedToAnyMember';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = this;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var2 = var1.length;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'unsubscribe';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var6 = arg1;
                var4 = arg2;
                var1 = this;
                var2 = var1.isSubscribed;
                var2 = var2.bind(var1)(var6, var4);
                if(!var2) { _fun0004_ip = 106; continue _fun0004 }
 24:
                var2 = var1._unsubscriptions;
                var2 = var2[var6];
                var5 = null;
                if(!(var5 == var2)) { _fun0004_ip = 42; continue _fun0004 }
 40:
                var2 = {};
 42:
                var3 = var2[var4];
                var7 = var5 != var3;
                var5 = 0;
                if(!var7) { _fun0004_ip = 58; continue _fun0004 }
 55:
                var5 = var3;
 58:
                var3 = 1;
                var5 = var5 + var3;
                var2[var4] = var5;
                var5 = var1._unsubscriptions;
                var5[var6] = var2;
                var2 = var2[var4];
                if(!(var3 === var2)) { _fun0004_ip = 106; continue _fun0004 }
 87:
                var3 = var1._unsubscribe;
                var2 = var3.delay;
                var1 = false;
                var1 = var2.bind(var3)(var1);
 106:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'checkForLeaks';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var6 = arg1;
                var7 = arg2;
                var4 = this;
                var1 = var4._subscriptions;
                var2 = var1[var6];
                var5 = null;
                var3 = var5 == var2;
                var1 = undefined;
                var8 = undefined;
                if(var3) { _fun0005_ip = 36; continue _fun0005 }
 32:
                var8 = var2[var7];
 36:
                var9 = var5 != var8;
                var2 = 0;
                if(!var9) { _fun0005_ip = 48; continue _fun0005 }
 45:
                var2 = var8;
 48:
                var4 = var4._unsubscriptions;
                var6 = var4[var6];
                var8 = var5 == var6;
                var4 = undefined;
                if(var8) { _fun0005_ip = 71; continue _fun0005 }
 67:
                var4 = var6[var7];
 71:
                var5 = var5 != var4;
                var3 = 0;
                if(!var5) { _fun0005_ip = 83; continue _fun0005 }
 80:
                var3 = var4;
 83:
                var7 = var2 - var3;
                var4 = 5;
                if(!(var7 > var4)) { _fun0005_ip = 181; continue _fun0005 }
 94:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var4 = var3.bind(var1)(var2);
                var2 = var4.prototype;
                var3 = Object.create(var2, {constructor: {value: var4}});
                var11 = 'GuildMemberSubscriptions';
                var12 = var3;
                var2 = new var12[var4](var11, var10);
                var4 = var2 instanceof Object ? var2 : var3;
                var3 = var4.warn;
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var5 = 'GuildMemberSubscriptions.subscribe(...): Potential reference leak! (';
                var2 = ' subscriptions)';
                var2 = var6.bind(var5)(var7, var2);
                var2 = var3.bind(var4)(var2);
 181:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'flushUnsubscriptions';
        var1['key'] = var6;
        var5 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var7 = _closure1_slot1;
                var1 = _closure1_slot2;
                var6 = 6;
                var5 = var1[var6];
                var1 = undefined;
                var8 = var7.bind(var1)(var5);
                var7 = var8.isEmpty;
                var5 = var3._unsubscriptions;
                var5 = var7.bind(var8)(var5);
                if(var5) { _fun0006_ip = 101; continue _fun0006 }
 54:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var6 = var5.bind(var1)(var4);
                var5 = var6.forEach;
                var4 = var3._unsubscriptions;
                var2 = function(arg1, arg2) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var5 = arg2;
                        var1 = _closure3_slot0;
                        var1 = var1._subscriptions;
                        var6 = var1[var5];
                        var _closure4_slot0 = var6;
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 6;
                        var9 = var7[var3];
                        var1 = undefined;
                        var11 = var4.bind(var1)(var9);
                        var10 = var11.forEach;
                        var9 = arg1;
                        var8 = function(arg1, arg2) {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                                var2 = arg2;
                                var5 = _closure4_slot0;
                                var3 = var5[var2];
                                var4 = null;
                                var7 = var4 != var3;
                                var4 = 0;
                                var6 = 0;
                                if(!var7) { _fun0008_ip = 30; continue _fun0008 }
 27:
                                var6 = var3;
 30:
                                var3 = arg1;
                                var3 = var6 - var3;
                                var5[var2] = var3;
                                var3 = _closure4_slot0;
                                var3 = var3[var2];
                                if(!(var3 <= var4)) { _fun0008_ip = 61; continue _fun0008 }
 53:
                                var1 = _closure4_slot0;
                                var1 = delete var1[var2];
 61:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var8 = var10.bind(var11)(var9, var8);
                        var3 = var7[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.isEmpty;
                        var3 = var3.bind(var4)(var6);
                        if(!var3) { _fun0007_ip = 107; continue _fun0007 }
 93:
                        var3 = _closure3_slot0;
                        var3 = var3._subscriptions;
                        var3 = delete var3[var5];
 107:
                        var4 = _closure3_slot0;
                        var3 = var4._onChange;
                        var2 = var4.get;
                        var2 = var2.bind(var4)(var5);
                        var2 = var3.bind(var4)(var5, var2);
                        return var1;
                    }
                };
                var2 = var5.bind(var6)(var4, var2);
                var2 = {};
                var3['_unsubscriptions'] = var2;
 101:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[8] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/guild/GuildMemberSubscriptions.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();