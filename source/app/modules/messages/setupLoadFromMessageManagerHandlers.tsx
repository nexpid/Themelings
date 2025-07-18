// app/modules/messages/setupLoadFromMessageManagerHandlers.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = native7;
    var1 = 0;
    var4 = var2[var1];
    var2 = native2;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/messages/setupLoadFromMessageManagerHandlers.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function setupLoadFromMessageManagerHandlers(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = arguments[2];
            var1 = arg2;
            var _closure2_slot0 = var1;
            var1 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 23; continue _fun0001 }
 21:
            var2 = {};
 23:
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var1;
            var4 = function handleCallbackIfLoaded(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = arg1;
                    var2 = var3.channel_id;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0002_ip = 39; continue _fun0002 }
 17:
                    var5 = _closure2_slot2;
                    var4 = var5.has;
                    var2 = var3.channel_id;
                    var1 = var4.bind(var5)(var2);
 39:
                    if(!var1) { _fun0002_ip = 56; continue _fun0002 }
 42:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
 56:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure2_slot3 = var4;
            var9 = function handleMessage(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.message;
                    var1 = var3.channel_id;
                    var4 = null;
                    var1 = var4 != var1;
                    if(!var1) { _fun0003_ip = 44; continue _fun0003 }
 22:
                    var6 = _closure2_slot2;
                    var5 = var6.has;
                    var2 = var3.channel_id;
                    var1 = var5.bind(var6)(var2);
 44:
                    if(!var1) { _fun0003_ip = 79; continue _fun0003 }
 47:
                    var2 = _closure2_slot1;
                    if(!(var4 != var2)) { _fun0003_ip = 68; continue _fun0003 }
 58:
                    var4 = _closure2_slot1;
                    var2 = undefined;
                    var2 = var4.bind(var2)();
 68:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
 79:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = function handleLoadMessages(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.channelId;
                    var3 = var1.messages;
                    var4 = _closure2_slot2;
                    var2 = var4.add;
                    var2 = var2.bind(var4)(var5);
                    var4 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0004_ip = 51; continue _fun0004 }
 41:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 51:
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var3 = _closure2_slot3;
                        var1 = undefined;
                        var2 = arg1;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = function handleSearchFinish(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 23; continue _fun0005 }
 13:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 23:
                    var1 = arg1;
                    var3 = var1.messages;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var3 = arg1;
                        var2 = var3.forEach;
                        var1 = function(arg1) {
                            var3 = _closure2_slot0;
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var3.bind(var2)(var1);
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var2.onBeforeBatch;
            _closure2_slot1 = var2;
            var2 = global;
            var2 = var2.Set;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var13 = var4;
            var2 = new var13[var2](var12);
            var2 = var2 instanceof Object ? var2 : var4;
            _closure2_slot2 = var2;
            var2 = {};
            var11 = var3.actions;
            var12 = var2;
            var4 = copyDataProperties(var12, var11);
            var5 = function POST_CONNECTION_OPEN() {
                var2 = _closure2_slot2;
                var1 = var2.clear;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var4 = 'POST_CONNECTION_OPEN';
            var2[var4] = var5;
            var10 = {};
            var10['callback'] = var9;
            var4 = false;
            var10['autoSubscribe'] = var4;
            var5 = 'MESSAGE_CREATE';
            var2[var5] = var10;
            var5 = 'MESSAGE_UPDATE';
            var2[var5] = var9;
            var5 = 'LOAD_MESSAGES_SUCCESS';
            var2[var5] = var8;
            var5 = 'LOAD_MESSAGES_AROUND_SUCCESS';
            var2[var5] = var8;
            var8 = function LOAD_RECENT_MENTIONS_SUCCESS(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.messages;
                    var4 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0006_ip = 32; continue _fun0006 }
 22:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 32:
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var3 = _closure2_slot0;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = 'LOAD_RECENT_MENTIONS_SUCCESS';
            var2[var5] = var8;
            var8 = function LOAD_PINNED_MESSAGES_SUCCESS(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.pins;
                    var4 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0007_ip = 32; continue _fun0007 }
 22:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 32:
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.message;
                        var2 = _closure2_slot0;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = 'LOAD_PINNED_MESSAGES_SUCCESS';
            var2[var5] = var8;
            var5 = 'SEARCH_FINISH';
            var2[var5] = var7;
            var5 = 'MOD_VIEW_SEARCH_FINISH';
            var2[var5] = var7;
            var5 = {};
            var6 = function callback(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.channelId;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0008_ip = 31; continue _fun0008 }
 14:
                    var2 = _closure2_slot2;
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var3);
 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['callback'] = var6;
            var5['autoSubscribe'] = var4;
            var4 = 'CHANNEL_SELECT';
            var2[var4] = var5;
            var3['actions'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();