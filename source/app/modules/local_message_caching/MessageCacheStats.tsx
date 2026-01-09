// app/modules/local_message_caching/MessageCacheStats.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var1 = function makeLogKey(arg1, arg2, arg3, arg4, arg5) {
        var1 = global;
        var1 = var1.HermesInternal;
        var8 = var1.concat;
        var18 = '';
        var17 = arg1;
        var5 = ':';
        var15 = arg2;
        var13 = arg3;
        var11 = arg4;
        var9 = arg5;
        var16 = var5;
        var14 = var5;
        var12 = var5;
        var10 = var5;
        var1 = var18[var8](var17, var16, var15, var14, var13, var12, var11, var10, var9, var8);
        return var1;
    };
    var _closure1_slot2 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var2 = function() {
        var4 = _closure1_slot1;
        var3 = function MessageCacheStats() {
            var3 = this;
            var4 = _closure1_slot0;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = global;
            var4 = var2.Set;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var8 = var5;
            var4 = new var8[var4](var7);
            var4 = var4 instanceof Object ? var4 : var5;
            var3['channelsFetchStarted'] = var4;
            var4 = var2.Set;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var8 = var5;
            var4 = new var8[var4](var7);
            var4 = var4 instanceof Object ? var4 : var5;
            var3['channelsFetchedWithLocalMessages'] = var4;
            var4 = var2.Set;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var8 = var5;
            var4 = new var8[var4](var7);
            var4 = var4 instanceof Object ? var4 : var5;
            var3['channelsFetchedNetwork'] = var4;
            var2 = var2.Map;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var8 = var4;
            var2 = new var8[var2](var7);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['fetchLogs'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'recordChannelFetchStart';
        var1['key'] = var2;
        var2 = function value(arg1, arg2, arg3, arg4, arg5) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var9 = arg1;
                var10 = arg3;
                var8 = arg4;
                var6 = arg5;
                var1 = this;
                var3 = var1.channelsFetchStarted;
                var2 = var3.add;
                var2 = var2.bind(var3)(var9);
                var5 = var1.fetchLogs;
                var4 = var5.set;
                var12 = _closure1_slot2;
                var7 = null;
                var1 = var7 != var10;
                var11 = null;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var11 = var10;
case 2:
                var1 = var7 != var8;
                var3 = null;
                if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var3 = var8;
case 4:
                var1 = undefined;
                var16 = arg2;
                var18 = undefined;
                var17 = var9;
                var15 = var11;
                var14 = var3;
                var13 = var6;
                var3 = var18[var12](var17, var16, var15, var14, var13, var12);
                var2 = {};
                var2['channelId'] = var9;
                var11 = var7 != var10;
                var9 = null;
                if(!var11) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var9 = var10;
case 6:
                var2['before'] = var9;
                var9 = var7 != var8;
                var7 = null;
                if(!var9) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var7 = var8;
case 8:
                var2['after'] = var7;
                var2['limit'] = var6;
                var6 = global;
                var7 = var6.Date;
                var6 = var7.now;
                var6 = var6.bind(var7)();
                var2['startTime'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'recordChannelFetchedLocal';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3, arg4, arg5, arg6) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var11 = arg1;
                var2 = arg3;
                var1 = arg4;
                var7 = arg6;
                var3 = this;
                var5 = var3.channelsFetchedWithLocalMessages;
                var4 = var5.add;
                var4 = var4.bind(var5)(var11);
                var5 = var3.fetchLogs;
                var3 = var5.get;
                var10 = _closure1_slot2;
                var4 = null;
                var6 = var4 != var2;
                var9 = null;
                if(!var6) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var9 = var2;
case 2:
                var2 = var4 != var1;
                var8 = null;
                if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var8 = var1;
case 4:
                var1 = undefined;
                var15 = arg2;
                var12 = arg5;
                var17 = undefined;
                var16 = var11;
                var14 = var9;
                var13 = var8;
                var2 = var17[var10](var16, var15, var14, var13, var12, var11);
                var3 = var3.bind(var5)(var2);
                if(!(var4 != var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var2 = {};
                var5 = global;
                var6 = var5.Date;
                var5 = var6.now;
                var5 = var5.bind(var6)();
                var2['loadTime'] = var5;
                var5 = var7.length;
                var2['count'] = var5;
                var6 = var7.at;
                var5 = -1;
                var5 = var6.bind(var7)(var5);
                var6 = var4 == var5;
                var4 = undefined;
                if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var4 = var5.id;
case 12:
                var2['lastMessageId'] = var4;
                var3['localMessageDetails'] = var2;
case 10:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'recordChannelFetchedNetwork';
        var1['key'] = var6;
        var5 = function value(arg1, arg2, arg3, arg4, arg5, arg6) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var11 = arg1;
                var2 = arg3;
                var1 = arg4;
                var7 = arg6;
                var3 = this;
                var5 = var3.channelsFetchedNetwork;
                var4 = var5.add;
                var4 = var4.bind(var5)(var11);
                var5 = var3.fetchLogs;
                var3 = var5.get;
                var10 = _closure1_slot2;
                var4 = null;
                var6 = var4 != var2;
                var9 = null;
                if(!var6) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                var9 = var2;
case 2:
                var2 = var4 != var1;
                var8 = null;
                if(!var2) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                var8 = var1;
case 4:
                var1 = undefined;
                var15 = arg2;
                var12 = arg5;
                var17 = undefined;
                var16 = var11;
                var14 = var9;
                var13 = var8;
                var2 = var17[var10](var16, var15, var14, var13, var12, var11);
                var3 = var3.bind(var5)(var2);
                if(!(var4 != var3)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var2 = {};
                var5 = global;
                var6 = var5.Date;
                var5 = var6.now;
                var5 = var5.bind(var6)();
                var2['loadTime'] = var5;
                var5 = var7.length;
                var2['count'] = var5;
                var6 = var7.at;
                var5 = -1;
                var5 = var6.bind(var7)(var5);
                var6 = var4 == var5;
                var4 = undefined;
                if(var6) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var4 = var5.id;
case 12:
                var2['lastMessageId'] = var4;
                var3['networkMessageDetails'] = var2;
case 10:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var12 = var4;
    var2 = new var12[var2](var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/local_message_caching/MessageCacheStats.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var2 = 'NativeAppStartup';
    var3['INITIAL_MESSAGE_FETCH_KEY'] = var2;
    return var1;
})();