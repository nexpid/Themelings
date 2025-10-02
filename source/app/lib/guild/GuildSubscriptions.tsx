// app/lib/guild/GuildSubscriptions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var1 = function validateGuildId(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 'null';
            var1 = var2 !== var3;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot6;
            var1 = var3 !== var2;
case 4:
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = 'undefined';
            var1 = var2 !== var3;
case 6:
            if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = _closure1_slot5;
            var1 = var3 !== var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var6);
    var1 = 0;
    var6 = var5[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var4.bind(var1)(var6);
    var7 = var6.FAVORITES;
    var _closure1_slot5 = var7;
    var6 = var6.ME;
    var _closure1_slot6 = var6;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function GuildSubscriptions(arg1) {
            var3 = this;
            var _closure3_slot0 = var3;
            var6 = _closure1_slot3;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var6.bind(var1)(var3, var5);
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var5 = 3;
            var5 = var6[var5];
            var9 = var7.bind(var1)(var5);
            var5 = var9.prototype;
            var8 = Object.create(var5, {constructor: {value: var9}});
            var11 = function(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4._enqueue;
                var2 = {};
                var1 = arg2;
                var2['members'] = var1;
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var12 = var8;
            var5 = new var12[var9](var11, var10);
            var5 = var5 instanceof Object ? var5 : var8;
            var3['_members'] = var5;
            var5 = 4;
            var5 = var6[var5];
            var9 = var7.bind(var1)(var5);
            var5 = var9.prototype;
            var8 = Object.create(var5, {constructor: {value: var9}});
            var11 = function(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4._enqueue;
                var2 = {};
                var1 = arg2;
                var2['channels'] = var1;
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var12 = var8;
            var5 = new var12[var9](var11, var10);
            var5 = var5 instanceof Object ? var5 : var8;
            var3['_channels'] = var5;
            var5 = 5;
            var5 = var6[var5];
            var8 = var7.bind(var1)(var5);
            var5 = var8.prototype;
            var7 = Object.create(var5, {constructor: {value: var8}});
            var11 = function(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4._enqueue;
                var2 = {};
                var1 = arg2;
                var2['thread_member_lists'] = var1;
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var12 = var7;
            var5 = new var12[var8](var11, var10);
            var5 = var5 instanceof Object ? var5 : var7;
            var3['_threadMemberLists'] = var5;
            var5 = global;
            var7 = var5.Set;
            var8 = var7.prototype;
            var8 = Object.create(var8, {constructor: {value: var7}});
            var12 = var8;
            var7 = new var12[var7](var11);
            var7 = var7 instanceof Object ? var7 : var8;
            var3['_typing'] = var7;
            var7 = var5.Set;
            var8 = var7.prototype;
            var8 = Object.create(var8, {constructor: {value: var7}});
            var12 = var8;
            var7 = new var12[var7](var11);
            var7 = var7 instanceof Object ? var7 : var8;
            var3['_threads'] = var7;
            var7 = var5.Set;
            var8 = var7.prototype;
            var8 = Object.create(var8, {constructor: {value: var7}});
            var12 = var8;
            var7 = new var12[var7](var11);
            var7 = var7 instanceof Object ? var7 : var8;
            var3['_activities'] = var7;
            var7 = var5.Set;
            var8 = var7.prototype;
            var8 = Object.create(var8, {constructor: {value: var7}});
            var12 = var8;
            var7 = new var12[var7](var11);
            var7 = var7 instanceof Object ? var7 : var8;
            var3['_memberUpdates'] = var7;
            var5 = var5.Set;
            var7 = var5.prototype;
            var7 = Object.create(var7, {constructor: {value: var5}});
            var12 = var7;
            var5 = new var12[var5](var11);
            var5 = var5 instanceof Object ? var5 : var7;
            var3['_subscribed'] = var5;
            var5 = {};
            var3['_pending'] = var5;
            var5 = _closure1_slot0;
            var4 = 6;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var6 = var4.DelayedCall;
            var4 = var6.prototype;
            var4 = Object.create(var4, {constructor: {value: var6}});
            var11 = 0;
            var10 = function() {
                var2 = _closure3_slot0;
                var1 = var2.flush;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var4;
            var2 = new var12[var6](var11, var10, var9);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['_flush'] = var2;
            var2 = arg1;
            var3['_onChange'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = '_enqueue';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            var4 = arg1;
            var1 = this;
            var3 = var1._pending;
            var2 = {};
            var5 = var1._pending;
            var6 = var5[var4];
            var7 = var2;
            var5 = copyDataProperties(var7, var6);
            var6 = arg2;
            var7 = var2;
            var5 = copyDataProperties(var7, var6);
            var3[var4] = var2;
            var2 = var1._flush;
            var1 = var2.delay;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(19);
        var2[0] = var1;
        var1 = {};
        var6 = 'reset';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var3 = var1._subscribed;
            var2 = var3.clear;
            var2 = var2.bind(var3)();
            var2 = {};
            var1['_pending'] = var2;
            var3 = var1._members;
            var2 = var3.reset;
            var2 = var2.bind(var3)();
            var3 = var1._memberUpdates;
            var2 = var3.clear;
            var2 = var2.bind(var3)();
            var3 = var1._channels;
            var2 = var3.reset;
            var2 = var2.bind(var3)();
            var3 = var1._threadMemberLists;
            var2 = var3.reset;
            var2 = var2.bind(var3)();
            var3 = var1._typing;
            var2 = var3.clear;
            var2 = var2.bind(var3)();
            var3 = var1._threads;
            var2 = var3.clear;
            var2 = var2.bind(var3)();
            var2 = var1._activities;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'get';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var4 = arg1;
            var2 = this;
            var1 = {};
            var5 = var2._typing;
            var3 = var5.has;
            var3 = var3.bind(var5)(var4);
            var1['typing'] = var3;
            var5 = var2._threads;
            var3 = var5.has;
            var3 = var3.bind(var5)(var4);
            var1['threads'] = var3;
            var5 = var2._activities;
            var3 = var5.has;
            var3 = var3.bind(var5)(var4);
            var1['activities'] = var3;
            var5 = var2._members;
            var3 = var5.get;
            var3 = var3.bind(var5)(var4);
            var1['members'] = var3;
            var5 = var2._memberUpdates;
            var3 = var5.has;
            var3 = var3.bind(var5)(var4);
            var1['member_updates'] = var3;
            var5 = var2._channels;
            var3 = var5.get;
            var3 = var3.bind(var5)(var4);
            var1['channels'] = var3;
            var3 = var2._threadMemberLists;
            var2 = var3.get;
            var2 = var2.bind(var3)(var4);
            var1['thread_member_lists'] = var2;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'getSubscribedThreadIds';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1._threadMemberLists;
            var1 = var2.getSubscribedThreadIds;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'isSubscribedToThreads';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1._threads;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'isSubscribedToAnyMember';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = this;
                var3 = var1._members;
                var2 = var3.isSubscribedToAnyMember;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var1 = var2;
case 10:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'isSubscribedToMemberUpdates';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = this;
                var2 = var3.get;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var2 = var1.member_updates;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0003_ip = 4; continue _fun0003 }
case 12:
                var1 = var2;
case 4:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'forEach';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1._subscribed;
            var2 = var3.forEach;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'clearWithoutFlushing';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = arg1;
                var2 = arg2;
                var1 = this;
                var4 = !var2;
                if(!var4) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                var6 = var1._threads;
                var5 = var6.has;
                var4 = var5.bind(var6)(var3);
case 12:
                if(var4) { _fun0004_ip = 14; continue _fun0004 }
case 4:
                var5 = var1._subscribed;
                var4 = var5.delete;
                var4 = var4.bind(var5)(var3);
case 14:
                var4 = var1._pending;
                var4 = delete var4[var3];
                var5 = var1._members;
                var4 = var5.clear;
                var4 = var4.bind(var5)(var3);
                var5 = var1._channels;
                var4 = var5.clear;
                var4 = var4.bind(var5)(var3);
                var5 = var1._threadMemberLists;
                var4 = var5.clear;
                var4 = var4.bind(var5)(var3);
                var5 = var1._typing;
                var4 = var5.delete;
                var4 = var4.bind(var5)(var3);
                var5 = var1._memberUpdates;
                var4 = var5.delete;
                var4 = var4.bind(var5)(var3);
                if(!var2) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var4 = var1._threads;
                var2 = var4.delete;
                var2 = var2.bind(var4)(var3);
case 15:
                var2 = var1._activities;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'flush';
        var1['key'] = var6;
        var6 = function value() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 7;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.forEach;
            var4 = var3._pending;
            var2 = function(arg1, arg2) {
                var1 = _closure3_slot0;
                var3 = var1._subscribed;
                var2 = var3.add;
                var1 = arg2;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var5.bind(var6)(var4, var2);
            var4 = var3._onChange;
            var2 = var3._pending;
            var2 = var4.bind(var3)(var2);
            var2 = {};
            var3['_pending'] = var2;
            return var1;
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'subscribeUser';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = arg1;
                var2 = _closure1_slot7;
                var1 = undefined;
                var2 = var2.bind(var1)(var5);
                if(!var2) { _fun0005_ip = 17; continue _fun0005 }
case 2:
                var2 = this;
                var4 = var2._members;
                var3 = var4.subscribe;
                var2 = arg2;
                var2 = var3.bind(var4)(var5, var2);
case 17:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'unsubscribeUser';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = arg1;
                var2 = _closure1_slot7;
                var1 = undefined;
                var2 = var2.bind(var1)(var5);
                if(!var2) { _fun0006_ip = 17; continue _fun0006 }
case 2:
                var2 = this;
                var4 = var2._members;
                var3 = var4.unsubscribe;
                var2 = arg2;
                var2 = var3.bind(var4)(var5, var2);
case 17:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'subscribeChannel';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var6 = arg1;
                var2 = _closure1_slot7;
                var1 = undefined;
                var2 = var2.bind(var1)(var6);
                var1 = !var2;
                var1 = !var1;
                if(!var2) { _fun0007_ip = 18; continue _fun0007 }
case 19:
                var2 = this;
                var5 = var2._channels;
                var4 = var5.subscribe;
                var3 = arg2;
                var2 = arg3;
                var1 = var4.bind(var5)(var6, var3, var2);
case 18:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'subscribeToMemberUpdates';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = arg1;
                var2 = this;
                var3 = _closure1_slot7;
                var1 = undefined;
                var3 = var3.bind(var1)(var4);
                if(var3) { _fun0008_ip = 20; continue _fun0008 }
case 5:
                var3 = false;
                return var3;
case 20:
                var5 = var2._enqueue;
                var3 = {};
                var6 = true;
                var3['member_updates'] = var6;
                var3 = var5.bind(var2)(var4, var3);
                var3 = var2._memberUpdates;
                var2 = var3.add;
                var2 = var2.bind(var3)(var4);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[13] = var1;
        var1 = {};
        var6 = 'unsubscribeFromMemberUpdates';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var2 = _closure1_slot7;
                var1 = undefined;
                var2 = var2.bind(var1)(var5);
                var6 = false;
                if(var2) { _fun0009_ip = 20; continue _fun0009 }
case 21:
                return var6;
case 20:
                var3 = var4._enqueue;
                var2 = {};
                var2['member_updates'] = var6;
                var2 = var3.bind(var4)(var5, var2);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[14] = var1;
        var1 = {};
        var6 = 'subscribeThreadMemberList';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var6 = arg1;
                var2 = _closure1_slot7;
                var1 = undefined;
                var2 = var2.bind(var1)(var6);
                var1 = !var2;
                var1 = !var1;
                if(!var2) { _fun0010_ip = 18; continue _fun0010 }
case 19:
                var2 = this;
                var5 = var2._threadMemberLists;
                var4 = var5.subscribe;
                var3 = arg2;
                var2 = arg3;
                var1 = var4.bind(var5)(var6, var3, var2);
case 18:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[15] = var1;
        var1 = {};
        var6 = 'unsubscribeThreadMemberList';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var5 = arg1;
                var2 = _closure1_slot7;
                var1 = undefined;
                var2 = var2.bind(var1)(var5);
                var1 = !var2;
                var1 = !var1;
                if(!var2) { _fun0011_ip = 14; continue _fun0011 }
case 19:
                var2 = this;
                var4 = var2._threadMemberLists;
                var3 = var4.unsubscribe;
                var2 = arg2;
                var1 = var3.bind(var4)(var5, var2);
case 14:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[16] = var1;
        var1 = {};
        var6 = 'subscribeToGuild';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var5 = arg1;
            var4 = this;
            var3 = var4._subscribeToFeature;
            var2 = var4._typing;
            var1 = {};
            var6 = true;
            var1['typing'] = var6;
            var1 = var3.bind(var4)(var5, var2, var1);
            var3 = var4._subscribeToFeature;
            var2 = var4._activities;
            var1 = {};
            var1['activities'] = var6;
            var1 = var3.bind(var4)(var5, var2, var1);
            var3 = var4._subscribeToFeature;
            var2 = var4._threads;
            var1 = {};
            var1['threads'] = var6;
            var1 = var3.bind(var4)(var5, var2, var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[17] = var1;
        var1 = {};
        var6 = '_subscribeToFeature';
        var1['key'] = var6;
        var5 = function value(arg1, arg2, arg3) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var5 = arg1;
                var3 = arg2;
                var4 = this;
                var2 = _closure1_slot7;
                var1 = undefined;
                var2 = var2.bind(var1)(var5);
                if(!var2) { _fun0012_ip = 22; continue _fun0012 }
case 19:
                var2 = var3.has;
                var2 = var2.bind(var3)(var5);
                if(var2) { _fun0012_ip = 22; continue _fun0012 }
case 23:
                var2 = var3.add;
                var2 = var2.bind(var3)(var5);
                var3 = var4._enqueue;
                var2 = arg3;
                var2 = var3.bind(var4)(var5, var2);
case 22:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[18] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var6 = 8;
    var6 = var5[var6];
    var8 = var4.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'lib/guild/GuildSubscriptions.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var2;
    var2 = 4;
    var6 = var5[var2];
    var6 = var4.bind(var1)(var6);
    var6 = var6.MINIMUM_RANGE;
    var3['MINIMUM_RANGE'] = var6;
    var2 = var5[var2];
    var2 = var4.bind(var1)(var2);
    var2 = var2.DEFAULT_RANGES;
    var3['DEFAULT_RANGES'] = var2;
    return var1;
})();