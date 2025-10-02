// app/modules/threads/LazyLoadedThreadManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var4 = function loadThread(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var4 = null;
            if(!(var4 != var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var2 = var7[var2];
            var7 = undefined;
            var2 = var6.bind(var7)(var2);
            var2 = var2.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            if(!(var5 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot10;
            var2 = var2.bind(var7)(var5);
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = _closure1_slot6;
            var2 = var6.getChannel;
            var2 = var2.bind(var6)(var5);
            if(!(var4 == var2)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = function initialize() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure1_slot12;
                    if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
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
case 0:
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
                            if(!var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                            var2 = var4 == var5;
case 12:
                            if(!var2) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                            var2 = _closure1_slot13;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
case 14:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var2.bind(var7)();
            var6 = _closure1_slot3;
            var2 = var6.isConnected;
            var2 = var2.bind(var6)();
            if(var2) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = global;
            var6 = var2.Promise;
            var2 = var6.resolve;
            var2 = var2.bind(var6)();
            return var2;
case 16:
            var2 = _closure1_slot11;
            var2 = var2[var5];
            if(!(var4 == var2)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
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
case 0:
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
                    if(!var1) { _fun0004_ip = 20; continue _fun0004 }
case 21:
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
                    if(var8) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var5 = _closure2_slot1;
                    var5 = var5.params;
                    var6 = var6 == var5;
                    var4 = undefined;
                    if(var6) { _fun0004_ip = 22; continue _fun0004 }
case 24:
                    var4 = var5.messageId;
case 22:
                    var1['messageId'] = var4;
                    var1 = var2.bind(var3)(var1);
case 20:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var6.bind(var7)(var4);
            var4 = var6.catch;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
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
                    if(var9) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                    var7 = _closure2_slot1;
                    var7 = var7.params;
                    var8 = var8 == var7;
                    var6 = undefined;
                    if(var8) { _fun0005_ip = 25; continue _fun0005 }
case 27:
                    var6 = var7.guildId;
case 25:
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
case 18:
            var3 = var2.type;
            var1 = 'LOADING';
            if(!(var1 !== var3)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var1 = global;
            var3 = var1.Promise;
            var1 = var3.resolve;
            var1 = var1.bind(var3)();
            _fun0001_ip = 30; continue _fun0001;
case 28:
            var1 = var2.promise;
case 30:
            return var1;
case 8:
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            return var1;
case 6:
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            return var1;
case 4:
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            return var1;
case 2:
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