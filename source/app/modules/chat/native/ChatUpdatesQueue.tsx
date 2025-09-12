// app/modules/chat/native/ChatUpdatesQueue.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.NativeEventEmitter;
    var _closure1_slot2 = var7;
    var4 = var4.NativeModules;
    var4 = var4.DCDChatBlockerManager;
    var _closure1_slot3 = var4;
    var2 = function() {
        var4 = _closure1_slot1;
        var3 = function ChatUpdatesQueue(arg1, arg2) {
            var3 = this;
            var _closure3_slot0 = var3;
            var6 = _closure1_slot0;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var6.bind(var1)(var3, var5);
            var5 = global;
            var5 = var5.Set;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var10 = var6;
            var5 = new var10[var5](var9);
            var5 = var5 instanceof Object ? var5 : var6;
            var3['blockers'] = var5;
            var5 = new Array(0);
            var3['queue'] = var5;
            var5 = null;
            var3['queueStartTimestamp'] = var5;
            var5 = function(arg1) {
                var2 = _closure3_slot0;
                var1 = arg1;
                var2['onFlushItem'] = var1;
                var1 = undefined;
                return var1;
            };
            var3['setOnFlushItem'] = var5;
            var5 = arg1;
            var3['getReactTag'] = var5;
            var5 = arg2;
            var3['onFlushItem'] = var5;
            var6 = _closure1_slot2;
            var9 = _closure1_slot3;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var10 = var5;
            var4 = new var10[var6](var9, var8);
            var4 = var4 instanceof Object ? var4 : var5;
            var3['eventEmitter'] = var4;
            var7 = var3.eventEmitter;
            var6 = var7.addListener;
            var5 = 'AddBlocker';
            var4 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.blockerId;
                    var5 = var1.reactTag;
                    var4 = _closure3_slot0;
                    var2 = var4.getReactTag;
                    var4 = var2.bind(var4)();
                    var2 = null;
                    var2 = var2 != var5;
                    if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 41:
                    var2 = var5 === var4;
 45:
                    if(!var2) { _fun0001_ip = 65; continue _fun0001 }
 48:
                    var2 = _closure3_slot0;
                    var1 = var2.addBlocker;
                    var1 = var1.bind(var2)(var3);
 65:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var5, var4);
            var3['addBlockerSubscription'] = var4;
            var6 = var3.eventEmitter;
            var5 = var6.addListener;
            var4 = 'RemoveBlocker';
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.blockerId;
                    var5 = var1.reactTag;
                    var4 = _closure3_slot0;
                    var2 = var4.getReactTag;
                    var4 = var2.bind(var4)();
                    var2 = null;
                    var2 = var2 != var5;
                    if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 41:
                    var2 = var5 === var4;
 45:
                    if(!var2) { _fun0002_ip = 65; continue _fun0002 }
 48:
                    var2 = _closure3_slot0;
                    var1 = var2.removeBlocker;
                    var1 = var1.bind(var2)(var3);
 65:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var4, var2);
            var3['removeBlockerSubscription'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'hasUpdates';
        var1['key'] = var2;
        var2 = function value() {
            var1 = this;
            var1 = var1.queue;
            var2 = var1.length;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(8);
        var2[0] = var1;
        var1 = {};
        var6 = 'isBlocking';
        var1['key'] = var6;
        var6 = function get() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = this;
                var1 = var2.hasUpdates;
                var1 = var1.bind(var2)();
                if(var1) { _fun0003_ip = 33; continue _fun0003 }
 16:
                var2 = var2.blockers;
                var3 = var2.size;
                var2 = 0;
                var1 = var3 > var2;
 33:
                return var1;
            }
        };
        var1['get'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'addBlocker';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 != var3)) { _fun0004_ip = 28; continue _fun0004 }
 9:
                var1 = this;
                var2 = var1.blockers;
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
 28:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'removeBlocker';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = arg1;
                var2 = this;
                var1 = null;
                if(!(var1 != var4)) { _fun0005_ip = 55; continue _fun0005 }
 12:
                var3 = var2.blockers;
                var1 = var3.delete;
                var1 = var1.bind(var3)(var4);
                var1 = var2.blockers;
                var3 = var1.size;
                var1 = 0;
                if(!(var1 === var3)) { _fun0005_ip = 55; continue _fun0005 }
 45:
                var1 = var2.flush;
                var1 = var1.bind(var2)();
 55:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'add';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = this;
                var1 = var2.queueStartTimestamp;
                var4 = null;
                if(!(var4 == var1)) { _fun0006_ip = 38; continue _fun0006 }
 15:
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var2['queueStartTimestamp'] = var1;
 38:
                var5 = var2.queue;
                var3 = var5.push;
                var1 = arg1;
                var1 = var3.bind(var5)(var1);
                var1 = var2.queue;
                var3 = var1.length;
                var1 = 100;
                var1 = var3 > var1;
                var3 = var2.queueStartTimestamp;
                var3 = var4 != var3;
                if(!var3) { _fun0006_ip = 125; continue _fun0006 }
 88:
                var4 = global;
                var5 = var4.Date;
                var4 = var5.now;
                var5 = var4.bind(var5)();
                var4 = var2.queueStartTimestamp;
                var5 = var5 - var4;
                var4 = 30000;
                var3 = var5 > var4;
 125:
                if(var1) { _fun0006_ip = 131; continue _fun0006 }
 128:
                var1 = var3;
 131:
                if(!var1) { _fun0006_ip = 160; continue _fun0006 }
 134:
                var3 = var2.blockers;
                var1 = var3.clear;
                var1 = var1.bind(var3)();
                var1 = var2.flush;
                var1 = var1.bind(var2)();
 160:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'tryFlush';
        var1['key'] = var6;
        var6 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = this;
                var1 = var2.blockers;
                var3 = var1.size;
                var1 = 0;
                if(!(var1 === var3)) { _fun0007_ip = 30; continue _fun0007 }
 20:
                var1 = var2.flush;
                var1 = var1.bind(var2)();
 30:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'flush';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var _closure3_slot0 = var2;
            var3 = null;
            var2['queueStartTimestamp'] = var3;
            var4 = var2.queue;
            var3 = var4.forEach;
            var1 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = arg1;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0008_ip = 41; continue _fun0008 }
 9:
                    var3 = _closure3_slot0;
                    var3 = var3.onFlushItem;
                    if(!(var2 != var3)) { _fun0008_ip = 41; continue _fun0008 }
 26:
                    var2 = var3.call;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1, var4);
 41:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1);
            var1 = new Array(0);
            var2['queue'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'cleanup';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var3 = var1.addBlockerSubscription;
            var2 = var3.remove;
            var2 = var2.bind(var3)();
            var2 = var1.removeBlockerSubscription;
            var1 = var2.remove;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[7] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat/native/ChatUpdatesQueue.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();