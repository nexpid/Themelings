// app/modules/rpc/server/RPCServerManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot26;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot26;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityActionTypes;
    var _closure1_slot17 = var7;
    var7 = var4.RelationshipTypes;
    var _closure1_slot18 = var7;
    var7 = var4.AnalyticEvents;
    var _closure1_slot19 = var7;
    var7 = var4.RPCEvents;
    var _closure1_slot20 = var7;
    var4 = var4.RPCCloseCodes;
    var _closure1_slot21 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityLayoutMode;
    var _closure1_slot22 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FrameLayoutModes;
    var _closure1_slot23 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MediaEngineContextTypes;
    var _closure1_slot24 = var4;
    var2 = function() {
        var4 = _closure1_slot5;
        var3 = function RPCServerManager(arg1) {
            var2 = arg1;
            var3 = this;
            var _closure3_slot0 = var3;
            var _closure3_slot1 = var3;
            var6 = _closure1_slot4;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var6.bind(var1)(var3, var5);
            var5 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = arg1;
                    var3 = _closure3_slot0;
                    var3 = var3.rpcServer;
                    var3 = var3.subscriptions;
                    var4 = var3.length;
                    var3 = 0;
                    if(!(var3 !== var4)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var4 = var2.type;
                    var3 = 'MESSAGE_CREATE';
                    if(!(var3 === var4)) { _fun0004_ip = 38; continue _fun0004 }
case 5:
                    var5 = _closure3_slot0;
                    var4 = var5.handleActivityMessage;
                    var4 = var4.bind(var5)(var2);
case 38:
                    var4 = var2.type;
                    if(!(var3 !== var4)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                    var3 = 'MESSAGE_UPDATE';
                    if(!(var3 !== var4)) { _fun0004_ip = 41; continue _fun0004 }
case 42:
                    var3 = 'MESSAGE_DELETE';
                    if(!(var3 !== var4)) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 18;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.assertNever;
                    var3 = var3.bind(var4)(var2);
                    return var3;
case 43:
                    var3 = _closure1_slot20;
                    var4 = var3.MESSAGE_DELETE;
                    var7 = var2.channelId;
                    var9 = {};
                    var3 = var2.id;
                    var9['id'] = var3;
                    var6 = var2.id;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var5 = var3.concat;
                    var3 = '';
                    var5 = var5.bind(var3)(var4, var6);
                    var6 = var4;
                    _fun0004_ip = 45; continue _fun0004;
case 41:
                    var3 = _closure1_slot20;
                    var6 = var3.MESSAGE_UPDATE;
                    var3 = var2.message;
                    var7 = var3.channel_id;
                    var9 = var2.message;
                    var5 = null;
                    _fun0004_ip = 45; continue _fun0004;
case 39:
                    var3 = var2.message;
                    var4 = var3.state;
                    var3 = 'SENDING';
                    if(!(var3 !== var4)) { _fun0004_ip = 46; continue _fun0004 }
case 47:
                    var3 = _closure1_slot20;
                    var8 = var3.MESSAGE_CREATE;
                    var7 = var2.channelId;
                    var9 = var2.message;
                    var2 = var2.message;
                    var11 = var2.id;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var10 = var2.concat;
                    var2 = '';
                    var5 = var10.bind(var2)(var8, var11);
                    var6 = var8;
case 45:
                    var2 = null;
                    if(!(var2 != var7)) { _fun0004_ip = 36; continue _fun0004 }
case 48:
                    var1 = _closure3_slot0;
                    var4 = var1.rpcServer;
                    var3 = var4.dispatchToSubscriptions;
                    var2 = {};
                    var2['channel_id'] = var7;
                    var1 = {};
                    var1['channel_id'] = var7;
                    var10 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var7 = 19;
                    var8 = var8[var7];
                    var7 = undefined;
                    var8 = var10.bind(var7)(var8);
                    var7 = var8.transformInternalTextMessage;
                    var7 = var7.bind(var8)(var9);
                    var1['message'] = var7;
                    var16 = var4;
                    var15 = var6;
                    var14 = var2;
                    var13 = var1;
                    var12 = var5;
                    var1 = var16[var3](var15, var14, var13, var12, var11);
case 36:
                    var1 = undefined;
                    return var1;
case 46:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleMessage'] = var5;
            var5 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var6 = arg1;
                    var2 = _closure3_slot0;
                    var2 = var2.rpcServer;
                    var2 = var2.subscriptions;
                    var2 = var2.length;
                    var3 = 0;
                    if(!(var3 !== var2)) { _fun0005_ip = 49; continue _fun0005 }
case 37:
                    var2 = var6.speakingFlags;
                    if(!(var3 === var2)) { _fun0005_ip = 7; continue _fun0005 }
case 2:
                    var2 = _closure1_slot20;
                    var5 = var2.SPEAKING_STOP;
                    _fun0005_ip = 50; continue _fun0005;
case 7:
                    var2 = _closure1_slot20;
                    var5 = var2.SPEAKING_START;
case 50:
                    var4 = var6.context;
                    var2 = _closure1_slot24;
                    var2 = var2.DEFAULT;
                    if(!(var4 === var2)) { _fun0005_ip = 49; continue _fun0005 }
case 51:
                    var4 = _closure1_slot14;
                    var2 = var4.getVoiceChannelId;
                    var8 = var2.bind(var4)();
                    var2 = null;
                    if(!(var2 != var8)) { _fun0005_ip = 49; continue _fun0005 }
case 52:
                    var7 = _closure1_slot7;
                    var4 = var7.getChannel;
                    var4 = var4.bind(var7)(var8);
                    if(!(var2 != var4)) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                    var8 = _closure1_slot16;
                    var7 = var8.getVoiceState;
                    var3 = var4.getGuildId;
                    var4 = var3.bind(var4)();
                    var3 = var6.userId;
                    var7 = var7.bind(var8)(var4, var3);
                    if(!(var2 != var7)) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                    var1 = _closure3_slot0;
                    var4 = var1.rpcServer;
                    var3 = var4.dispatchToSubscriptions;
                    var2 = {};
                    var1 = var7.channelId;
                    var2['channel_id'] = var1;
                    var1 = {};
                    var7 = var7.channelId;
                    var1['channel_id'] = var7;
                    var6 = var6.userId;
                    var1['user_id'] = var6;
                    var1 = var3.bind(var4)(var5, var2, var1);
case 49:
                    var1 = undefined;
                    return var1;
case 55:
                    var1 = undefined;
                    return var1;
case 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleSpeaking'] = var5;
            var5 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.guildId;
                    var6 = var2.channelId;
                    var3 = _closure3_slot0;
                    var3 = var3.rpcServer;
                    var3 = var3.subscriptions;
                    var4 = var3.length;
                    var3 = 0;
                    if(!(var3 !== var4)) { _fun0006_ip = 57; continue _fun0006 }
case 58:
                    var2 = _closure3_slot0;
                    var5 = var2.rpcServer;
                    var4 = var5.dispatchToSubscriptions;
                    var2 = _closure1_slot20;
                    var3 = var2.VOICE_CHANNEL_SELECT;
                    var2 = {};
                    var2['channel_id'] = var6;
                    var2['guild_id'] = var1;
                    var1 = {};
                    var1 = var4.bind(var5)(var3, var1, var2);
case 57:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleVoiceChannelSelect'] = var5;
            var5 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = arg1;
                    var7 = var1.channelId;
                    var13 = var1.message;
                    var10 = var1.icon;
                    var6 = var1.title;
                    var1 = var1.body;
                    var3 = _closure3_slot0;
                    var3 = var3.rpcServer;
                    var3 = var3.subscriptions;
                    var4 = var3.length;
                    var3 = 0;
                    if(!(var3 !== var4)) { _fun0007_ip = 41; continue _fun0007 }
case 7:
                    var2 = _closure3_slot0;
                    var5 = var2.rpcServer;
                    var4 = var5.dispatchToSubscriptions;
                    var2 = _closure1_slot20;
                    var3 = var2.NOTIFICATION_CREATE;
                    var2 = {};
                    var2['channel_id'] = var7;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var12 = 19;
                    var7 = var7[var12];
                    var11 = undefined;
                    var9 = var9.bind(var11)(var7);
                    var7 = var9.transformInternalTextMessage;
                    var7 = var7.bind(var9)(var13);
                    var2['message'] = var7;
                    var7 = null;
                    var9 = var7 != var10;
                    if(!var9) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var12];
                    var9 = var9.bind(var11)(var8);
                    var8 = var9.getRemoteIconURL;
                    var7 = var8.bind(var9)(var10);
case 59:
                    var2['icon_url'] = var7;
                    var2['title'] = var6;
                    var2['body'] = var1;
                    var1 = {};
                    var1 = var4.bind(var5)(var3, var1, var2);
case 41:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleNotificationCreate'] = var5;
            var5 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = arg1;
                    var3 = var2.applicationId;
                    var _closure4_slot0 = var3;
                    var6 = var2.secret;
                    var3 = var2.intent;
                    var4 = var2.embedded;
                    var5 = _closure3_slot0;
                    var5 = var5.rpcServer;
                    var5 = var5.subscriptions;
                    var7 = var5.length;
                    var5 = 0;
                    if(!(var5 !== var7)) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                    var5 = {};
                    var5['secret'] = var6;
                    if(!var4) { _fun0008_ip = 63; continue _fun0008 }
case 64:
                    var5['intent'] = var3;
case 63:
                    var3 = _closure3_slot0;
                    var8 = var3.rpcServer;
                    var7 = var8.dispatchToSubscriptions;
                    var2 = _closure1_slot20;
                    var6 = var2.ACTIVITY_JOIN;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.socket;
                        var1 = var1.application;
                        var2 = var1.id;
                        var1 = _closure4_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var4 = var7.bind(var8)(var6, var4, var5);
                    var4 = var3.rpcServer;
                    var3 = var4.dispatchToSubscriptions;
                    var2 = var2.GAME_JOIN;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.socket;
                        var1 = var1.application;
                        var2 = var1.id;
                        var1 = _closure4_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2, var1, var5);
case 61:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleActivityJoin'] = var5;
            var5 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = arg1;
                    var3 = var2.applicationId;
                    var _closure4_slot0 = var3;
                    var6 = var2.layoutMode;
                    var2 = _closure3_slot0;
                    var2 = var2.rpcServer;
                    var2 = var2.subscriptions;
                    var4 = var2.length;
                    var2 = 0;
                    if(!(var2 !== var4)) { _fun0009_ip = 61; continue _fun0009 }
case 65:
                    var4 = _closure1_slot22;
                    var4 = var4.FOCUSED;
                    var3 = _closure3_slot0;
                    var9 = var3.rpcServer;
                    var8 = var9.dispatchToSubscriptions;
                    var2 = _closure1_slot20;
                    var7 = var2.ACTIVITY_PIP_MODE_UPDATE;
                    var5 = {};
                    var4 = var6 !== var4;
                    var5['is_pip_mode'] = var4;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.socket;
                        var1 = var1.application;
                        var2 = var1.id;
                        var1 = _closure4_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var4 = var8.bind(var9)(var7, var4, var5);
                    var5 = var3.rpcServer;
                    var4 = var5.dispatchToSubscriptions;
                    var3 = var2.ACTIVITY_LAYOUT_MODE_UPDATE;
                    var2 = {};
                    var2['layout_mode'] = var6;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.socket;
                        var1 = var1.application;
                        var2 = var1.id;
                        var1 = _closure4_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var4.bind(var5)(var3, var1, var2);
case 61:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleActivityLayoutModeUpdate'] = var5;
            var5 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = arg1;
                    var3 = var2.applicationId;
                    var _closure4_slot0 = var3;
                    var5 = var2.layoutMode;
                    var2 = _closure3_slot0;
                    var2 = var2.rpcServer;
                    var2 = var2.subscriptions;
                    var4 = var2.length;
                    var2 = 0;
                    if(!(var2 !== var4)) { _fun0010_ip = 41; continue _fun0010 }
case 66:
                    var4 = _closure1_slot23;
                    var4 = var4.PIP;
                    if(!(var5 !== var4)) { _fun0010_ip = 67; continue _fun0010 }
case 35:
                    var4 = _closure1_slot22;
                    var6 = var4.FOCUSED;
                    _fun0010_ip = 44; continue _fun0010;
case 67:
                    var4 = _closure1_slot22;
                    var6 = var4.PIP;
case 44:
                    var4 = _closure1_slot22;
                    var4 = var4.FOCUSED;
                    var3 = _closure3_slot0;
                    var9 = var3.rpcServer;
                    var8 = var9.dispatchToSubscriptions;
                    var2 = _closure1_slot20;
                    var7 = var2.ACTIVITY_PIP_MODE_UPDATE;
                    var5 = {};
                    var4 = var6 !== var4;
                    var5['is_pip_mode'] = var4;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.socket;
                        var1 = var1.application;
                        var2 = var1.id;
                        var1 = _closure4_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var4 = var8.bind(var9)(var7, var4, var5);
                    var5 = var3.rpcServer;
                    var4 = var5.dispatchToSubscriptions;
                    var3 = var2.ACTIVITY_LAYOUT_MODE_UPDATE;
                    var2 = {};
                    var2['layout_mode'] = var6;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.socket;
                        var1 = var1.application;
                        var2 = var1.id;
                        var1 = _closure4_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var4.bind(var5)(var3, var1, var2);
case 41:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleFrameUpdateLayoutMode'] = var5;
            var5 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = arg1;
                    var4 = var2.applicationId;
                    var _closure4_slot0 = var4;
                    var2 = _closure3_slot0;
                    var2 = var2.rpcServer;
                    var2 = var2.subscriptions;
                    var5 = var2.length;
                    var2 = 0;
                    if(!(var2 !== var5)) { _fun0011_ip = 68; continue _fun0011 }
case 69:
                    var2 = null;
                    if(!(var2 != var4)) { _fun0011_ip = 68; continue _fun0011 }
case 65:
                    var5 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 20;
                    var6 = var6[var4];
                    var4 = undefined;
                    var6 = var7.bind(var4)(var6);
                    var4 = var6.getThermalState;
                    var4 = var4.bind(var6)();
                    var5['thermal_state'] = var4;
                    var3 = _closure3_slot0;
                    var4 = var3.rpcServer;
                    var3 = var4.dispatchToSubscriptions;
                    var2 = _closure1_slot20;
                    var2 = var2.THERMAL_STATE_UPDATE;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.socket;
                        var1 = var1.application;
                        var2 = var1.id;
                        var1 = _closure4_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2, var1, var5);
case 68:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleThermalStateChange'] = var5;
            var5 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.screenOrientation;
                    var3 = _closure3_slot0;
                    var3 = var3.rpcServer;
                    var3 = var3.subscriptions;
                    var4 = var3.length;
                    var3 = 0;
                    if(!(var3 !== var4)) { _fun0012_ip = 42; continue _fun0012 }
case 70:
                    var2 = _closure3_slot0;
                    var5 = var2.rpcServer;
                    var4 = var5.dispatchToSubscriptions;
                    var2 = _closure1_slot20;
                    var3 = var2.ORIENTATION_UPDATE;
                    var2 = {};
                    var2['screen_orientation'] = var1;
                    var1 = {};
                    var1 = var4.bind(var5)(var3, var1, var2);
case 42:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleScreenOrientationUpdate'] = var5;
            var5 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = _closure3_slot0;
                    var1 = var1.rpcServer;
                    var1 = var1.subscriptions;
                    var3 = var1.length;
                    var1 = 0;
                    if(!(var1 !== var3)) { _fun0013_ip = 71; continue _fun0013 }
case 3:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 21;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.activityInstanceConnectedParticipants;
                    var5 = var3.bind(var4)();
                    var2 = _closure3_slot0;
                    var4 = var2.rpcServer;
                    var3 = var4.dispatchToSubscriptions;
                    var1 = _closure1_slot20;
                    var2 = var1.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE;
                    var1 = {};
                    var1 = var3.bind(var4)(var2, var1, var5);
case 71:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleEmbeddedActivityUpdate'] = var5;
            var5 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = arg1;
                    var8 = var1.channelId;
                    var7 = var1.message;
                    var1 = undefined;
                    var _closure4_slot0 = var1;
                    var4 = _closure3_slot0;
                    var4 = var4.rpcServer;
                    var4 = var4.subscriptions;
                    var5 = var4.length;
                    var4 = 0;
                    if(!(var4 !== var5)) { _fun0014_ip = 72; continue _fun0014 }
case 73:
                    var4 = var7.application;
                    var9 = var7.activity;
                    var5 = null;
                    if(!(var5 != var4)) { _fun0014_ip = 72; continue _fun0014 }
case 50:
                    if(!(var5 != var9)) { _fun0014_ip = 72; continue _fun0014 }
case 74:
                    var6 = var9.party_id;
                    if(!(var5 != var6)) { _fun0014_ip = 72; continue _fun0014 }
case 75:
                    var12 = _closure1_slot15;
                    var10 = var12.getUser;
                    var13 = var7.author;
                    var14 = var5 == var13;
                    var6 = undefined;
                    if(var14) { _fun0014_ip = 76; continue _fun0014 }
case 77:
                    var6 = var13.id;
case 76:
                    var12 = var10.bind(var12)(var6);
                    if(!(var5 != var12)) { _fun0014_ip = 72; continue _fun0014 }
case 78:
                    var10 = _closure1_slot15;
                    var6 = var10.getCurrentUser;
                    var6 = var6.bind(var10)();
                    if(!(var5 != var6)) { _fun0014_ip = 72; continue _fun0014 }
case 79:
                    var13 = var12.id;
                    var10 = var6.id;
                    if(!(var13 !== var10)) { _fun0014_ip = 72; continue _fun0014 }
case 80:
                    var13 = var9.type;
                    var10 = _closure1_slot17;
                    var10 = var10.JOIN_REQUEST;
                    if(!(var13 !== var10)) { _fun0014_ip = 81; continue _fun0014 }
case 20:
                    var15 = _closure1_slot11;
                    var14 = var15.getApplicationActivity;
                    var13 = var12.id;
                    var10 = var4.id;
                    var10 = var14.bind(var15)(var13, var10);
                    _fun0014_ip = 18; continue _fun0014;
case 81:
                    var14 = _closure1_slot11;
                    var13 = var14.getApplicationActivity;
                    var6 = var6.id;
                    var4 = var4.id;
                    var10 = var13.bind(var14)(var6, var4);
case 18:
                    if(!(var5 != var10)) { _fun0014_ip = 72; continue _fun0014 }
case 82:
                    var4 = var10.party;
                    if(!(var5 != var4)) { _fun0014_ip = 72; continue _fun0014 }
case 83:
                    var4 = var10.party;
                    var5 = var4.id;
                    var4 = var9.party_id;
                    if(!(var5 === var4)) { _fun0014_ip = 72; continue _fun0014 }
case 84:
                    var4 = var10.application_id;
                    _closure4_slot0 = var4;
                    var5 = var9.type;
                    var4 = _closure1_slot17;
                    var4 = var4.JOIN;
                    if(!(var4 !== var5)) { _fun0014_ip = 85; continue _fun0014 }
case 86:
                    var4 = _closure1_slot17;
                    var4 = var4.JOIN_REQUEST;
                    if(!(var4 === var5)) { _fun0014_ip = 72; continue _fun0014 }
case 87:
                    var4 = _closure3_slot0;
                    var14 = var4.rpcServer;
                    var13 = var14.dispatchToSubscriptions;
                    var4 = _closure1_slot20;
                    var6 = var4.ACTIVITY_JOIN_REQUEST;
                    var5 = {};
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var4 = 22;
                    var4 = var16[var4];
                    var4 = var15.bind(var1)(var4);
                    var4 = var4.bind(var1)(var12);
                    var5['user'] = var4;
                    var5['activity'] = var10;
                    var4 = var9.type;
                    var5['type'] = var4;
                    var5['channel_id'] = var8;
                    var4 = var7.id;
                    var5['message_id'] = var4;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.socket;
                        var1 = var1.application;
                        var2 = var1.id;
                        var1 = _closure4_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var4 = var13.bind(var14)(var6, var4, var5);
                    _fun0014_ip = 72; continue _fun0014;
case 85:
                    var3 = _closure3_slot0;
                    var6 = var3.rpcServer;
                    var5 = var6.dispatchToSubscriptions;
                    var3 = _closure1_slot20;
                    var4 = var3.ACTIVITY_INVITE;
                    var3 = {};
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var11 = 22;
                    var11 = var14[var11];
                    var11 = var13.bind(var1)(var11);
                    var11 = var11.bind(var1)(var12);
                    var3['user'] = var11;
                    var3['activity'] = var10;
                    var9 = var9.type;
                    var3['type'] = var9;
                    var3['channel_id'] = var8;
                    var7 = var7.id;
                    var3['message_id'] = var7;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.socket;
                        var1 = var1.application;
                        var2 = var1.id;
                        var1 = _closure4_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var2 = var5.bind(var6)(var4, var2, var3);
case 72:
                    return var1;
                }
            };
            var3['handleActivityMessage'] = var5;
            var5 = function(arg1) {
                var2 = arg1;
                var2 = var2.accessToken;
                var _closure4_slot0 = var2;
                var2 = _closure3_slot0;
                var2 = var2.rpcServer;
                var3 = var2.sockets;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var4 = arg1;
                        var1 = var4.authorization;
                        var2 = var1.accessToken;
                        var1 = _closure4_slot0;
                        if(!(var2 === var1)) { _fun0015_ip = 88; continue _fun0015 }
case 89:
                        var3 = var4.close;
                        var1 = _closure1_slot21;
                        var2 = var1.TOKEN_REVOKED;
                        var1 = 'Token revoked';
                        var1 = var3.bind(var4)(var2, var1);
case 88:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var3['handleOAuth2TokenRevoke'] = var5;
            var5 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.guild;
                    var6 = var1.id;
                    var3 = _closure1_slot9;
                    var1 = var3.getGuild;
                    var1 = var1.bind(var3)(var6);
                    var4 = _closure3_slot0;
                    var4 = var4.rpcServer;
                    var4 = var4.subscriptions;
                    var5 = var4.length;
                    var4 = 0;
                    var4 = var4 !== var5;
                    if(!var4) { _fun0016_ip = 90; continue _fun0016 }
case 91:
                    var5 = null;
                    var4 = var5 != var1;
case 90:
                    if(!var4) { _fun0016_ip = 77; continue _fun0016 }
case 64:
                    var3 = _closure3_slot0;
                    var5 = var3.rpcServer;
                    var4 = var5.dispatchToSubscriptions;
                    var2 = _closure1_slot20;
                    var3 = var2.GUILD_CREATE;
                    var2 = {};
                    var2['id'] = var6;
                    var1 = var1.name;
                    var2['name'] = var1;
                    var1 = {};
                    var1 = var4.bind(var5)(var3, var1, var2);
case 77:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleGuildCreate'] = var5;
            var5 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.channel;
                    var7 = var1.id;
                    var6 = var1.name;
                    var1 = var1.type;
                    var3 = _closure3_slot0;
                    var3 = var3.rpcServer;
                    var3 = var3.subscriptions;
                    var4 = var3.length;
                    var3 = 0;
                    if(!(var3 !== var4)) { _fun0017_ip = 92; continue _fun0017 }
case 66:
                    var2 = _closure3_slot0;
                    var5 = var2.rpcServer;
                    var4 = var5.dispatchToSubscriptions;
                    var2 = _closure1_slot20;
                    var3 = var2.CHANNEL_CREATE;
                    var2 = {};
                    var2['id'] = var7;
                    var2['name'] = var6;
                    var2['type'] = var1;
                    var1 = {};
                    var1 = var4.bind(var5)(var3, var1, var2);
case 92:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleChannelCreate'] = var5;
            var5 = function() {
                var1 = _closure3_slot0;
                var1 = var1.rpcServer;
                var3 = var1.sockets;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var4 = arg1;
                    var3 = var4.close;
                    var1 = _closure1_slot21;
                    var2 = var1.CLOSE_NORMAL;
                    var1 = 'User logout';
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var3['handleLogout'] = var5;
            var5 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.relationship;
                    var7 = var1.id;
                    var8 = var1.type;
                    var1 = undefined;
                    var _closure4_slot0 = var1;
                    var3 = _closure3_slot0;
                    var3 = var3.rpcServer;
                    var3 = var3.subscriptions;
                    var5 = var3.length;
                    var3 = 0;
                    if(!(var3 !== var5)) { _fun0018_ip = 79; continue _fun0018 }
case 88:
                    var6 = _closure1_slot15;
                    var5 = var6.getUser;
                    var7 = var5.bind(var6)(var7);
                    var5 = null;
                    if(!(var5 != var7)) { _fun0018_ip = 79; continue _fun0018 }
case 74:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 19;
                    var5 = var9[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.transformBaseRelationship;
                    var5 = var5.bind(var6)(var8, var7);
                    _closure4_slot0 = var5;
                    var4 = _closure3_slot0;
                    var6 = var4.rpcServer;
                    var5 = var6.dispatchToSubscriptions;
                    var3 = _closure1_slot20;
                    var4 = var3.RELATIONSHIP_UPDATE;
                    var3 = {};
                    var2 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 19;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.transformApplicationRelationship;
                        var2 = _closure4_slot0;
                        var1 = arg1;
                        var1 = var1.socket;
                        var1 = var1.application;
                        var1 = var1.id;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var2 = var5.bind(var6)(var4, var3, var2);
case 79:
                    return var1;
                }
            };
            var3['handleRelationshipAdd'] = var5;
            var5 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.relationship;
                    var7 = var1.id;
                    var8 = var1.type;
                    var1 = undefined;
                    var _closure4_slot0 = var1;
                    var3 = _closure3_slot0;
                    var3 = var3.rpcServer;
                    var3 = var3.subscriptions;
                    var5 = var3.length;
                    var3 = 0;
                    if(!(var3 !== var5)) { _fun0019_ip = 79; continue _fun0019 }
case 88:
                    var6 = _closure1_slot15;
                    var5 = var6.getUser;
                    var7 = var5.bind(var6)(var7);
                    var5 = null;
                    if(!(var5 != var7)) { _fun0019_ip = 79; continue _fun0019 }
case 74:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 19;
                    var5 = var9[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.transformBaseRelationship;
                    var5 = var5.bind(var6)(var8, var7);
                    _closure4_slot0 = var5;
                    var4 = _closure3_slot0;
                    var6 = var4.rpcServer;
                    var5 = var6.dispatchToSubscriptions;
                    var3 = _closure1_slot20;
                    var4 = var3.RELATIONSHIP_UPDATE;
                    var3 = {};
                    var2 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 19;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.transformApplicationRelationship;
                        var2 = _closure4_slot0;
                        var1 = arg1;
                        var1 = var1.socket;
                        var1 = var1.application;
                        var1 = var1.id;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var2 = var5.bind(var6)(var4, var3, var2);
case 79:
                    return var1;
                }
            };
            var3['handleRelationshipUpdate'] = var5;
            var5 = function(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.relationship;
                    var7 = var1.id;
                    var1 = undefined;
                    var _closure4_slot0 = var1;
                    var3 = _closure3_slot0;
                    var3 = var3.rpcServer;
                    var3 = var3.subscriptions;
                    var5 = var3.length;
                    var3 = 0;
                    if(!(var3 !== var5)) { _fun0020_ip = 93; continue _fun0020 }
case 94:
                    var6 = _closure1_slot15;
                    var5 = var6.getUser;
                    var8 = var5.bind(var6)(var7);
                    var5 = null;
                    if(!(var5 != var8)) { _fun0020_ip = 93; continue _fun0020 }
case 40:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 19;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.transformBaseRelationship;
                    var5 = _closure1_slot18;
                    var5 = var5.NONE;
                    var5 = var6.bind(var7)(var5, var8);
                    _closure4_slot0 = var5;
                    var4 = _closure3_slot0;
                    var6 = var4.rpcServer;
                    var5 = var6.dispatchToSubscriptions;
                    var3 = _closure1_slot20;
                    var4 = var3.RELATIONSHIP_UPDATE;
                    var3 = {};
                    var2 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 19;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.transformApplicationRelationship;
                        var2 = _closure4_slot0;
                        var1 = arg1;
                        var1 = var1.socket;
                        var1 = var1.application;
                        var1 = var1.id;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var2 = var5.bind(var6)(var4, var3, var2);
case 93:
                    return var1;
                }
            };
            var3['handleRelationshipRemove'] = var5;
            var5 = function(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var1 = arg1;
                    var8 = var1.updates;
                    var1 = undefined;
                    var _closure4_slot0 = var1;
                    var2 = _closure3_slot0;
                    var2 = var2.rpcServer;
                    var2 = var2.subscriptions;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(var2 !== var3)) { _fun0021_ip = 95; continue _fun0021 }
case 96:
                    var5 = function _loop() {
                        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                            var6 = _closure1_slot13;
                            var5 = var6.getRelationshipType;
                            var4 = _closure4_slot0;
                            var7 = var5.bind(var6)(var4);
                            var4 = _closure1_slot18;
                            var4 = var4.NONE;
                            if(!(var7 !== var4)) { _fun0022_ip = 97; continue _fun0022 }
case 98:
                            var5 = _closure1_slot15;
                            var4 = var5.getUser;
                            var1 = _closure4_slot0;
                            var6 = var4.bind(var5)(var1);
                            var1 = null;
                            if(!(var1 != var6)) { _fun0022_ip = 99; continue _fun0022 }
case 100:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 19;
                            var4 = var4[var1];
                            var1 = undefined;
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.transformBaseRelationship;
                            var4 = var4.bind(var5)(var7, var6);
                            var _closure5_slot0 = var4;
                            var4 = _closure3_slot1;
                            var6 = var4.rpcServer;
                            var5 = var6.dispatchToSubscriptions;
                            var3 = _closure1_slot20;
                            var4 = var3.RELATIONSHIP_UPDATE;
                            var3 = {};
                            var2 = function(arg1) {
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 19;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.transformApplicationRelationship;
                                var2 = _closure5_slot0;
                                var1 = arg1;
                                var1 = var1.socket;
                                var1 = var1.application;
                                var1 = var1.id;
                                var1 = var3.bind(var4)(var2, var1);
                                return var1;
                            };
                            var2 = var5.bind(var6)(var4, var3, var2);
                            return var1;
case 99:
                            var1 = 0;
                            return var1;
case 97:
                            var1 = 0;
                            return var1;
                        }
                    };
                    var3 = _closure1_slot25;
                    var2 = global;
                    var7 = var2.Set;
                    var4 = var8.map;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.user;
                        var1 = var1.id;
                        return var1;
                    };
                    var9 = var4.bind(var8)(var2);
                    var4 = var7.prototype;
                    var4 = Object.create(var4, {constructor: {value: var7}});
                    var10 = var4;
                    var2 = new var10[var7](var9, var8);
                    var4 = var2 instanceof Object ? var2 : var4;
                    var2 = var4.values;
                    var2 = var2.bind(var4)();
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.bind(var1)();
                    var2 = var3.done;
                    if(var2) { _fun0021_ip = 95; continue _fun0021 }
case 68:
                    var2 = var3.value;
                    _closure4_slot0 = var2;
                    var2 = var5.bind(var1)();
                    var7 = var4.bind(var1)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0021_ip = 68; continue _fun0021 }
case 95:
                    return var1;
                }
            };
            var3['handlePresenceUpdates'] = var5;
            var5 = function() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var1 = _closure3_slot0;
                    var1 = var1.rpcServer;
                    var1 = var1.subscriptions;
                    var1 = var1.length;
                    var9 = 0;
                    if(!(var9 !== var1)) { _fun0023_ip = 101; continue _fun0023 }
case 102:
                    var8 = function _loop2() {
                        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                            var5 = _closure4_slot1;
                            var1 = _closure1_slot18;
                            var1 = var1.NONE;
                            if(!(var5 !== var1)) { _fun0024_ip = 103; continue _fun0024 }
case 89:
                            var6 = _closure1_slot15;
                            var5 = var6.getUser;
                            var1 = _closure4_slot0;
                            var7 = var5.bind(var6)(var1);
                            var1 = null;
                            if(!(var1 != var7)) { _fun0024_ip = 104; continue _fun0024 }
case 105:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 19;
                            var5 = var5[var1];
                            var1 = undefined;
                            var6 = var6.bind(var1)(var5);
                            var5 = var6.transformBaseRelationship;
                            var4 = _closure4_slot1;
                            var4 = var5.bind(var6)(var4, var7);
                            var _closure5_slot0 = var4;
                            var4 = _closure3_slot1;
                            var6 = var4.rpcServer;
                            var5 = var6.dispatchToSubscriptions;
                            var3 = _closure1_slot20;
                            var4 = var3.RELATIONSHIP_UPDATE;
                            var3 = {};
                            var2 = function(arg1) {
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 19;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.transformApplicationRelationship;
                                var2 = _closure5_slot0;
                                var1 = arg1;
                                var1 = var1.socket;
                                var1 = var1.application;
                                var1 = var1.id;
                                var1 = var3.bind(var4)(var2, var1);
                                return var1;
                            };
                            var2 = var5.bind(var6)(var4, var3, var2);
                            return var1;
case 104:
                            var1 = 0;
                            return var1;
case 103:
                            var1 = 0;
                            return var1;
                        }
                    };
                    var2 = _closure1_slot25;
                    var3 = _closure1_slot13;
                    var1 = var3.getMutableRelationships;
                    var3 = var1.bind(var3)();
                    var1 = var3.entries;
                    var1 = var1.bind(var3)();
                    var6 = undefined;
                    var5 = var2.bind(var6)(var1);
                    var2 = var5.bind(var6)();
                    var1 = var2.done;
                    var4 = 2;
                    var3 = 1;
                    if(var1) { _fun0023_ip = 101; continue _fun0023 }
case 106:
                    var11 = var2.value;
                    var1 = _closure1_slot3;
                    var1 = var1.bind(var6)(var11, var4);
                    var11 = var1[var9];
                    var _closure4_slot0 = var11;
                    var1 = var1[var3];
                    var _closure4_slot1 = var1;
                    var1 = var8.bind(var6)();
                    var11 = var5.bind(var6)();
                    var1 = var11.done;
                    var2 = var11;
                    if(!var1) { _fun0023_ip = 106; continue _fun0023 }
case 101:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handlePresencesReplace'] = var5;
            var5 = function(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.user;
                    var7 = var1.id;
                    var1 = undefined;
                    var _closure4_slot0 = var1;
                    var3 = _closure3_slot0;
                    var3 = var3.rpcServer;
                    var3 = var3.subscriptions;
                    var5 = var3.length;
                    var3 = 0;
                    if(!(var3 !== var5)) { _fun0025_ip = 107; continue _fun0025 }
case 73:
                    var6 = _closure1_slot13;
                    var5 = var6.getRelationshipType;
                    var8 = var5.bind(var6)(var7);
                    var5 = _closure1_slot18;
                    var5 = var5.NONE;
                    if(!(var8 !== var5)) { _fun0025_ip = 107; continue _fun0025 }
case 9:
                    var6 = _closure1_slot15;
                    var5 = var6.getUser;
                    var7 = var5.bind(var6)(var7);
                    var5 = null;
                    if(!(var5 != var7)) { _fun0025_ip = 107; continue _fun0025 }
case 108:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 19;
                    var5 = var9[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.transformBaseRelationship;
                    var5 = var5.bind(var6)(var8, var7);
                    _closure4_slot0 = var5;
                    var4 = _closure3_slot0;
                    var6 = var4.rpcServer;
                    var5 = var6.dispatchToSubscriptions;
                    var3 = _closure1_slot20;
                    var4 = var3.RELATIONSHIP_UPDATE;
                    var3 = {};
                    var2 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 19;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.transformApplicationRelationship;
                        var2 = _closure4_slot0;
                        var1 = arg1;
                        var1 = var1.socket;
                        var1 = var1.application;
                        var1 = var1.id;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var2 = var5.bind(var6)(var4, var3, var2);
case 107:
                    return var1;
                }
            };
            var3['handleUserUpdate'] = var5;
            var5 = function(arg1) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var2 = arg1;
                    var6 = var2.entitlement;
                    var _closure4_slot0 = var6;
                    var3 = _closure3_slot0;
                    var3 = var3.rpcServer;
                    var3 = var3.subscriptions;
                    var4 = var3.length;
                    var3 = 0;
                    if(!(var3 !== var4)) { _fun0026_ip = 106; continue _fun0026 }
case 109:
                    var2 = _closure3_slot0;
                    var5 = var2.rpcServer;
                    var4 = var5.dispatchToSubscriptions;
                    var2 = _closure1_slot20;
                    var3 = var2.ENTITLEMENT_CREATE;
                    var2 = {};
                    var2['entitlement'] = var6;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.socket;
                        var1 = var1.application;
                        var2 = var1.id;
                        var1 = _closure4_slot0;
                        var1 = var1.application_id;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var4.bind(var5)(var3, var1, var2);
case 106:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleEntitlementCreate'] = var5;
            var5 = function(arg1) {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var2 = arg1;
                    var6 = var2.entitlement;
                    var _closure4_slot0 = var6;
                    var3 = _closure3_slot0;
                    var3 = var3.rpcServer;
                    var3 = var3.subscriptions;
                    var4 = var3.length;
                    var3 = 0;
                    if(!(var3 !== var4)) { _fun0027_ip = 106; continue _fun0027 }
case 109:
                    var2 = _closure3_slot0;
                    var5 = var2.rpcServer;
                    var4 = var5.dispatchToSubscriptions;
                    var2 = _closure1_slot20;
                    var3 = var2.ENTITLEMENT_DELETE;
                    var2 = {};
                    var2['entitlement'] = var6;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.socket;
                        var1 = var1.application;
                        var2 = var1.id;
                        var1 = _closure4_slot0;
                        var1 = var1.application_id;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var4.bind(var5)(var3, var1, var2);
case 106:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleEntitlementDelete'] = var5;
            var4 = function(arg1) {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    var1 = arg1;
                    var7 = var1.enrolledQuestUserStatus;
                    var1 = undefined;
                    var _closure4_slot0 = var1;
                    var _closure4_slot1 = var1;
                    var3 = _closure3_slot0;
                    var3 = var3.rpcServer;
                    var3 = var3.subscriptions;
                    var5 = var3.length;
                    var3 = 0;
                    if(!(var3 !== var5)) { _fun0028_ip = 110; continue _fun0028 }
case 105:
                    var8 = var7.questId;
                    _closure4_slot0 = var8;
                    var6 = _closure1_slot6;
                    var5 = var6.getQuest;
                    var5 = var5.bind(var6)(var8);
                    _closure4_slot1 = var5;
                    var9 = null;
                    if(!(var9 != var5)) { _fun0028_ip = 110; continue _fun0028 }
case 111:
                    var4 = _closure3_slot0;
                    var6 = var4.rpcServer;
                    var5 = var6.dispatchToSubscriptions;
                    var3 = _closure1_slot20;
                    var4 = var3.QUEST_ENROLLMENT_STATUS_UPDATE;
                    var3 = {};
                    var3['quest_id'] = var8;
                    var8 = var7.enrolledAt;
                    var8 = var9 != var8;
                    var3['is_enrolled'] = var8;
                    var7 = var7.enrolledAt;
                    var3['enrolled_at'] = var7;
                    var2 = function(arg1) {
                        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                            var3 = arg1;
                            var1 = var3.socket;
                            var1 = var1.application;
                            var4 = var1.id;
                            var1 = _closure4_slot1;
                            var1 = var1.config;
                            var1 = var1.application;
                            var1 = var1.id;
                            var1 = var4 === var1;
                            if(!var1) { _fun0029_ip = 112; continue _fun0029 }
case 113:
                            var4 = var3.args;
                            var3 = null;
                            var5 = var3 == var4;
                            var3 = undefined;
                            if(var5) { _fun0029_ip = 114; continue _fun0029 }
case 115:
                            var3 = var4.quest_id;
case 114:
                            var2 = _closure4_slot0;
                            var1 = var3 === var2;
case 112:
                            return var1;
                        }
                    };
                    var2 = var5.bind(var6)(var4, var2, var3);
case 110:
                    return var1;
                }
            };
            var3['handleQuestEnrollSuccess'] = var4;
            var4 = var2.server;
            var3['rpcServer'] = var4;
            var4 = var2.transports;
            var3['transports'] = var4;
            var4 = var2.commands;
            var3['rpcCommandHandlers'] = var4;
            var4 = var2.events;
            var3['rpcEventHandlers'] = var4;
            var4 = var2.stores;
            var3['stores'] = var4;
            var2 = var2.registerTransportsForEmbeddedPlatform;
            var3['registerTransportsForEmbeddedPlatform'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'loadServer';
        var1['key'] = var2;
        var2 = function loadServer() {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var9 = this;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = var2.isPlatformEmbedded;
                if(!var2) { _fun0030_ip = 96; continue _fun0030 }
case 116:
                var2 = var9.registerTransportsForEmbeddedPlatform;
                var2 = var2.bind(var9)();
case 96:
                var3 = _closure1_slot25;
                var2 = var9.transports;
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0030_ip = 117; continue _fun0030 }
case 50:
                var6 = var3.value;
                var5 = var9.rpcServer;
                var2 = var5.registerTransport;
                var2 = var2.bind(var5)(var6);
                var5 = var4.bind(var1)();
                var2 = var5.done;
                var3 = var5;
                if(!var2) { _fun0030_ip = 50; continue _fun0030 }
case 117:
                var5 = var9.rpcCommandHandlers;
                var2 = global;
                var4 = var2.Object;
                var3 = var4.entries;
                var10 = var3.bind(var4)(var5);
                var3 = var10.length;
                var7 = 0;
                var3 = var7 < var3;
                var6 = 2;
                var5 = 1;
                var4 = 0;
                if(!var3) { _fun0030_ip = 118; continue _fun0030 }
case 95:
                var11 = var10[var4];
                var3 = _closure1_slot3;
                var3 = var3.bind(var1)(var11, var6);
                var13 = var3[var7];
                var12 = var3[var5];
                var11 = var9.rpcServer;
                var3 = var11.setCommandHandler;
                var3 = var3.bind(var11)(var13, var12);
                var4 = var4 + 1;
                var3 = var10.length;
                if(var4 < var3) { _fun0030_ip = 95; continue _fun0030 }
case 118:
                var4 = var9.rpcEventHandlers;
                var3 = var2.Object;
                var2 = var3.entries;
                var4 = var2.bind(var3)(var4);
                var2 = var4.length;
                var2 = var7 < var2;
                var3 = 0;
                if(!var2) { _fun0030_ip = 119; continue _fun0030 }
case 120:
                var10 = var4[var3];
                var2 = _closure1_slot3;
                var2 = var2.bind(var1)(var10, var6);
                var12 = var2[var7];
                var11 = var2[var5];
                var10 = var9.rpcServer;
                var2 = var10.setEventHandler;
                var2 = var2.bind(var10)(var12, var11);
                var3 = var3 + 1;
                var2 = var4.length;
                if(var3 < var2) { _fun0030_ip = 120; continue _fun0030 }
case 119:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'init';
        var1['key'] = var6;
        var6 = function init() {
            var2 = this;
            var _closure3_slot0 = var2;
            var3 = var2.rpcServer;
            var1 = function() {
                var2 = _closure1_slot15;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3['getCurrentUser'] = var1;
            var3 = var2.rpcServer;
            var1 = function(arg1) {
                var6 = arg1;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 24;
                var3 = var5[var1];
                var1 = undefined;
                var8 = var4.bind(var1)(var3);
                var7 = var8.dispatch;
                var3 = {};
                var9 = 'RPC_APP_CONNECTED';
                var3['type'] = var9;
                var9 = var6.id;
                var3['socketId'] = var9;
                var9 = var6.application;
                var3['application'] = var9;
                var3 = var7.bind(var8)(var3);
                var3 = 25;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot19;
                var3 = var2.AUTHORIZED_APP_CONNECTED;
                var2 = {};
                var7 = var6.application;
                var7 = var7.id;
                var2['app_id'] = var7;
                var6 = var6.transport;
                var2['transport'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var3['onConnect'] = var1;
            var3 = var2.rpcServer;
            var1 = function(arg1, arg2) {
                var5 = arg1;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var6 = 'RPC_APP_DISCONNECTED';
                var2['type'] = var6;
                var6 = var5.id;
                var2['socketId'] = var6;
                var5 = var5.application;
                var2['application'] = var5;
                var5 = arg2;
                var2['reason'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3['onDisconnect'] = var1;
            var1 = _closure1_slot7;
            var9 = new Array(6);
            var9[0] = var1;
            var1 = _closure1_slot8;
            var9[1] = var1;
            var1 = _closure1_slot11;
            var9[2] = var1;
            var1 = _closure1_slot16;
            var9[3] = var1;
            var1 = _closure1_slot10;
            var9[4] = var1;
            var1 = _closure1_slot12;
            var9[5] = var1;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 26;
            var6 = var5[var1];
            var1 = undefined;
            var6 = var7.bind(var1)(var6);
            var8 = var6.BatchedStoreListener;
            var7 = var9.concat;
            var6 = var2.stores;
            var11 = var7.bind(var9)(var6);
            var6 = var8.prototype;
            var6 = Object.create(var6, {constructor: {value: var8}});
            var10 = function() {
                var1 = _closure3_slot0;
                var2 = var1.rpcServer;
                var1 = var2.updateSubscriptions;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var6;
            var4 = new var12[var8](var11, var10, var9);
            var7 = var4 instanceof Object ? var4 : var6;
            var6 = var7.attach;
            var4 = 'RPCServerManager';
            var4 = var6.bind(var7)(var4);
            var4 = _closure1_slot1;
            var3 = 24;
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleMessage;
            var6 = 'MESSAGE_CREATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleMessage;
            var6 = 'MESSAGE_UPDATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleMessage;
            var6 = 'MESSAGE_DELETE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleSpeaking;
            var6 = 'SPEAKING';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleOAuth2TokenRevoke;
            var6 = 'OAUTH2_TOKEN_REVOKE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleGuildCreate;
            var6 = 'GUILD_CREATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleChannelCreate;
            var6 = 'CHANNEL_CREATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleLogout;
            var6 = 'LOGOUT';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleVoiceChannelSelect;
            var6 = 'VOICE_CHANNEL_SELECT';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleNotificationCreate;
            var6 = 'RPC_NOTIFICATION_CREATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleActivityJoin;
            var6 = 'ACTIVITY_JOIN';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleActivityLayoutModeUpdate;
            var6 = 'ACTIVITY_LAYOUT_MODE_UPDATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleFrameUpdateLayoutMode;
            var6 = 'FRAME_UPDATE_LAYOUT_MODE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleThermalStateChange;
            var6 = 'THERMAL_STATE_CHANGE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleScreenOrientationUpdate;
            var6 = 'ACTIVITY_SCREEN_ORIENTATION_UPDATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleEmbeddedActivityUpdate;
            var6 = 'EMBEDDED_ACTIVITY_UPDATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleRelationshipAdd;
            var6 = 'RELATIONSHIP_ADD';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleRelationshipUpdate;
            var6 = 'RELATIONSHIP_UPDATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleRelationshipRemove;
            var6 = 'RELATIONSHIP_REMOVE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handlePresenceUpdates;
            var6 = 'PRESENCE_UPDATES';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handlePresencesReplace;
            var6 = 'PRESENCES_REPLACE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleUserUpdate;
            var6 = 'USER_UPDATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleEntitlementCreate;
            var6 = 'ENTITLEMENT_CREATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleEntitlementDelete;
            var6 = 'ENTITLEMENT_DELETE';
            var6 = var8.bind(var9)(var6, var7);
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.subscribe;
            var3 = var2.handleQuestEnrollSuccess;
            var2 = 'QUESTS_ENROLL_SUCCESS';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'terminate';
        var1['key'] = var6;
        var5 = function terminate() {
            var2 = this;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 24;
            var6 = var5[var3];
            var1 = undefined;
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleMessage;
            var6 = 'MESSAGE_CREATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleMessage;
            var6 = 'MESSAGE_UPDATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleMessage;
            var6 = 'MESSAGE_DELETE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleSpeaking;
            var6 = 'SPEAKING';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleOAuth2TokenRevoke;
            var6 = 'OAUTH2_TOKEN_REVOKE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleGuildCreate;
            var6 = 'GUILD_CREATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleChannelCreate;
            var6 = 'CHANNEL_CREATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleLogout;
            var6 = 'LOGOUT';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleVoiceChannelSelect;
            var6 = 'VOICE_CHANNEL_SELECT';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleNotificationCreate;
            var6 = 'RPC_NOTIFICATION_CREATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleActivityJoin;
            var6 = 'ACTIVITY_JOIN';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleActivityLayoutModeUpdate;
            var6 = 'ACTIVITY_LAYOUT_MODE_UPDATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleFrameUpdateLayoutMode;
            var6 = 'FRAME_UPDATE_LAYOUT_MODE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleThermalStateChange;
            var6 = 'THERMAL_STATE_CHANGE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleScreenOrientationUpdate;
            var6 = 'ACTIVITY_SCREEN_ORIENTATION_UPDATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleEmbeddedActivityUpdate;
            var6 = 'EMBEDDED_ACTIVITY_UPDATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleRelationshipAdd;
            var6 = 'RELATIONSHIP_ADD';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleRelationshipUpdate;
            var6 = 'RELATIONSHIP_UPDATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleRelationshipRemove;
            var6 = 'RELATIONSHIP_REMOVE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handlePresenceUpdates;
            var6 = 'PRESENCE_UPDATES';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handlePresencesReplace;
            var6 = 'PRESENCES_REPLACE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleUserUpdate;
            var6 = 'USER_UPDATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleEntitlementCreate;
            var6 = 'ENTITLEMENT_CREATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleEntitlementDelete;
            var6 = 'ENTITLEMENT_DELETE';
            var6 = var8.bind(var9)(var6, var7);
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.unsubscribe;
            var3 = var2.handleQuestEnrollSuccess;
            var2 = 'QUESTS_ENROLL_SUCCESS';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/server/RPCServerManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();