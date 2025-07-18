// app/modules/threads/LazyLoadedThreadManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var4 = function loadThread(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var4 = null;
            if(!(var4 != var5)) { _fun0001_ip = 502; continue _fun0001 }
 18:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var2 = var7[var2];
            var7 = undefined;
            var2 = var6.bind(var7)(var2);
            var2 = var2.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            if(!(var5 !== var2)) { _fun0001_ip = 482; continue _fun0001 }
 56:
            var2 = _closure1_slot10;
            var2 = var2.bind(var7)(var5);
            if(var2) { _fun0001_ip = 462; continue _fun0001 }
 71:
            var6 = _closure1_slot6;
            var2 = var6.getChannel;
            var2 = var2.bind(var6)(var5);
            if(!(var4 == var2)) { _fun0001_ip = 442; continue _fun0001 }
 92:
            var2 = function initialize() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure1_slot12;
                    if(var2) { _fun0002_ip = 61; continue _fun0002 }
 10:
                    var2 = true;
                    _closure1_slot12 = var2;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.subscribe;
                    var2 = 'CONNECTION_OPEN';
                    var1 = function() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var2 = {};
                            _closure1_slot11 = var2;
                            var3 = _closure1_slot7;
                            var2 = var3.getChannelId;
                            var3 = var2.bind(var3)();
                            var4 = _closure1_slot6;
                            var2 = var4.getChannel;
                            var5 = var2.bind(var4)(var3);
                            var4 = null;
                            var2 = var4 != var3;
                            if(!var2) { _fun0003_ip = 50; continue _fun0003 }
 46:
                            var2 = var4 == var5;
 50:
                            if(!var2) { _fun0003_ip = 64; continue _fun0003 }
 53:
                            var2 = _closure1_slot13;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
 64:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
 61:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var2.bind(var7)();
            var6 = _closure1_slot3;
            var2 = var6.isConnected;
            var2 = var2.bind(var6)();
            if(var2) { _fun0001_ip = 138; continue _fun0001 }
 118:
            var2 = global;
            var6 = var2.Promise;
            var2 = var6.resolve;
            var2 = var2.bind(var6)();
            return var2;
 138:
            var2 = _closure1_slot11;
            var2 = var2[var5];
            if(!(var4 == var2)) { _fun0001_ip = 401; continue _fun0001 }
 153:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 8;
            var4 = var8[var4];
            var11 = var6.bind(var7)(var4);
            var10 = var11.matchPath;
            var4 = global;
            var4 = var4.location;
            var9 = var4.pathname;
            var4 = {};
            var16 = _closure1_slot9;
            var15 = var16.CHANNEL;
            var12 = 9;
            var13 = var8[var12];
            var13 = var6.bind(var7)(var13);
            var14 = var13.RouteParam;
            var13 = var14.guildId;
            var14 = var13.bind(var14)();
            var12 = var8[var12];
            var12 = var6.bind(var7)(var12);
            var13 = var12.RouteParam;
            var12 = var13.channelId;
            var13 = var12.bind(var13)();
            var12 = ':messageId';
            var12 = var15.bind(var16)(var14, var13, var12);
            var4['path'] = var12;
            var12 = true;
            var4['exact'] = var12;
            var4 = var10.bind(var11)(var9, var4);
            var _closure2_slot1 = var4;
            var4 = 10;
            var4 = var8[var4];
            var4 = var6.bind(var7)(var4);
            var7 = var4.HTTP;
            var6 = var7.get;
            var4 = {};
            var9 = _closure1_slot8;
            var8 = var9.CHANNEL;
            var8 = var8.bind(var9)(var5);
            var4['url'] = var8;
            var8 = false;
            var4['rejectWithError'] = var8;
            var7 = var6.bind(var7)(var4);
            var6 = var7.then;
            var4 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var6 = var1.body;
                    var3 = _closure1_slot11;
                    var2 = _closure2_slot0;
                    var1 = {};
                    var7 = 'LOADED';
                    var1['type'] = var7;
                    var3[var2] = var1;
                    var3 = _closure1_slot5;
                    var2 = var3.has;
                    var1 = var6.type;
                    var1 = var2.bind(var3)(var1);
                    if(!var1) { _fun0004_ip = 156; continue _fun0004 }
 58:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var1 = var3[var1];
                    var7 = undefined;
                    var3 = var2.bind(var7)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var8 = 'THREAD_CREATE';
                    var1['type'] = var8;
                    var4 = _closure1_slot4;
                    var4 = var4.bind(var7)(var6);
                    var1['channel'] = var4;
                    var4 = _closure2_slot1;
                    var6 = null;
                    var8 = var6 == var4;
                    var4 = undefined;
                    if(var8) { _fun0004_ip = 147; continue _fun0004 }
 123:
                    var5 = _closure2_slot1;
                    var5 = var5.params;
                    var6 = var6 == var5;
                    var4 = undefined;
                    if(var6) { _fun0004_ip = 147; continue _fun0004 }
 142:
                    var4 = var5.messageId;
 147:
                    var1['messageId'] = var4;
                    var1 = var2.bind(var3)(var1);
 156:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var6.bind(var7)(var4);
            var4 = var6.catch;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure1_slot11;
                    var6 = _closure2_slot0;
                    var2 = {};
                    var4 = 'NOT_FOUND';
                    var2['type'] = var4;
                    var3[var6] = var2;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'CHANNEL_DELETE';
                    var2['type'] = var5;
                    var5 = {};
                    var5['id'] = var6;
                    var6 = _closure2_slot1;
                    var8 = null;
                    var9 = var8 == var6;
                    var6 = undefined;
                    if(var9) { _fun0005_ip = 110; continue _fun0005 }
 86:
                    var7 = _closure2_slot1;
                    var7 = var7.params;
                    var8 = var8 == var7;
                    var6 = undefined;
                    if(var8) { _fun0005_ip = 110; continue _fun0005 }
 105:
                    var6 = var7.guildId;
 110:
                    var5['guild_id'] = var6;
                    var5['parent_id'] = var1;
                    var2['channel'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var4.bind(var6)(var1);
            var4 = _closure1_slot11;
            var3 = {};
            var6 = 'LOADING';
            var3['type'] = var6;
            var3['promise'] = var1;
            var4[var5] = var3;
            return var1;
 401:
            var3 = var2.type;
            var1 = 'LOADING';
            if(!(var1 !== var3)) { _fun0001_ip = 434; continue _fun0001 }
 414:
            var1 = global;
            var3 = var1.Promise;
            var1 = var3.resolve;
            var1 = var1.bind(var3)();
            _fun0001_ip = 440; continue _fun0001;
 434:
            var1 = var2.promise;
 440:
            return var1;
 442:
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            return var1;
 462:
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            return var1;
 482:
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            return var1;
 502:
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var9 = var2.createChannelRecordFromServer;
    var _closure1_slot4 = var9;
    var2 = var2.THREAD_CHANNEL_TYPES;
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.Endpoints;
    var _closure1_slot8 = var8;
    var2 = var2.Routes;
    var _closure1_slot9 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.isStaticChannelRoute;
    var _closure1_slot10 = var2;
    var2 = {};
    var _closure1_slot11 = var2;
    var2 = false;
    var _closure1_slot12 = var2;
    var2 = {};
    var2['loadThread'] = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/LazyLoadedThreadManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();