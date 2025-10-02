// app/modules/messages/MessageManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot29 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function fetchMessages(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var18 = var1.guildId;
            var9 = var1.channelId;
            var15 = var1.messageId;
            var11 = var1.forceFetch;
            var6 = var1.isPreload;
            var14 = var1.jumpType;
            var5 = var1.skipLocalFetch;
            var4 = var1.avoidInitialScroll;
            var10 = null;
            if(!(var10 != var9)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = _closure1_slot22;
            var3 = undefined;
            var1 = var1.bind(var3)(var9);
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var2 = _closure1_slot11;
            var1 = var2.getChannel;
            var1 = var1.bind(var2)(var9);
            var2 = var10 == var1;
            var8 = undefined;
            if(var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var8 = var1.type;
case 9:
            var2 = _closure1_slot18;
            var2 = var2.GUILD_STORE;
            if(!(var8 !== var2)) { _fun0002_ip = 6; continue _fun0002 }
case 11:
            var8 = var10 == var1;
            var2 = undefined;
            if(var8) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = var1.type;
case 12:
            if(!(var10 != var2)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var2 = _closure1_slot21;
            var12 = var2.GUILD_THREADS_ONLY;
            var8 = var12.has;
            var2 = var1.type;
            var2 = var8.bind(var12)(var2);
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 14:
            var8 = _closure1_slot1;
            var17 = _closure1_slot2;
            var12 = 16;
            var2 = var17[var12];
            var8 = var8.bind(var3)(var2);
            var2 = var8.getOrCreate;
            var8 = var2.bind(var8)(var9);
            var13 = var8.some;
            var16 = _closure1_slot0;
            var2 = 17;
            var2 = var17[var2];
            var2 = var16.bind(var3)(var2);
            var2 = var2.messageHasExpiredAttachmentUrl;
            var2 = var13.bind(var8)(var2);
            var17 = var8;
            if(!var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var13 = _closure1_slot24;
            var8 = var13.log;
            var2 = 'Found expired attachment link, clearing messages';
            var2 = var8.bind(var13)(var2);
            var8 = _closure1_slot1;
            var2 = _closure1_slot2;
            var13 = var2[var12];
            var16 = var8.bind(var3)(var13);
            var13 = var16.clear;
            var13 = var13.bind(var16)(var9);
            var2 = var2[var12];
            var8 = var8.bind(var3)(var2);
            var2 = var8.getOrCreate;
            var17 = var2.bind(var8)(var9);
case 16:
            var2 = var17.jumpTargetId;
            var2 = var10 != var2;
            if(!var2) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var2 = var10 == var15;
case 18:
            var16 = var17;
            if(!var2) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var13 = var17.mutate;
            var2 = {'jumpTargetId': null, 'jumped': false};
            var20 = _closure1_slot0;
            var8 = _closure1_slot2;
            var19 = 18;
            var19 = var8[var19];
            var19 = var20.bind(var3)(var19);
            var19 = var19.JumpTypes;
            var19 = var19.ANIMATED;
            var2['jumpType'] = var19;
            var2 = var13.bind(var17)(var2);
            var13 = _closure1_slot1;
            var8 = var8[var12];
            var13 = var13.bind(var3)(var8);
            var8 = var13.commit;
            var8 = var8.bind(var13)(var2);
            var16 = var2;
case 20:
            var2 = var16.focusTargetId;
            var8 = var10 != var2;
            if(!var8) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var8 = var10 == var15;
case 22:
            var2 = var16;
            if(!var8) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var13 = var16.mutate;
            var8 = {};
            var8['focusTargetId'] = var10;
            var8 = var13.bind(var16)(var8);
            var16 = _closure1_slot1;
            var13 = _closure1_slot2;
            var13 = var13[var12];
            var16 = var16.bind(var3)(var13);
            var13 = var16.commit;
            var13 = var13.bind(var16)(var8);
            var2 = var8;
case 24:
            if(!var6) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var13 = _closure1_slot8;
            var8 = var13.isConnected;
            var8 = var8.bind(var13)();
            if(var8) { _fun0002_ip = 26; continue _fun0002 }
case 28:
            var13 = var2.loadingMore;
            var8 = true;
            if(!var13) { _fun0002_ip = 29; continue _fun0002 }
case 26:
            var13 = var2.loadingMore;
            if(var13) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var13 = var2.ready;
            if(!var13) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var13 = var2.cached;
            if(!var13) { _fun0002_ip = 30; continue _fun0002 }
case 32:
            var13 = var10 != var18;
            if(!var13) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var17 = _closure1_slot12;
            var16 = var17.getGuild;
            var16 = var16.bind(var17)(var18);
            var13 = var10 == var16;
case 34:
            var8 = var11;
            if(var13) { _fun0002_ip = 29; continue _fun0002 }
case 36:
            var8 = true;
            _fun0002_ip = 29; continue _fun0002;
case 30:
            var8 = var11;
            if(!(var10 != var15)) { _fun0002_ip = 29; continue _fun0002 }
case 37:
            var8 = true;
case 29:
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var11 = 19;
            var11 = var16[var11];
            var11 = var13.bind(var3)(var11);
            var11 = var11.bind(var3)(var9);
            if(!var11) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var16 = _closure1_slot13;
            var13 = var16.hasUnread;
            var11 = var13.bind(var16)(var9);
case 38:
            if(!var11) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var8 = true;
case 40:
            if(!var8) { _fun0002_ip = 6; continue _fun0002 }
case 42:
            var11 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var12];
            var13 = var11.bind(var3)(var8);
            var11 = var13.commit;
            var16 = var2.mutate;
            var8 = {};
            var12 = true;
            var8['loadingMore'] = var12;
            var8 = var16.bind(var2)(var8);
            var8 = var11.bind(var13)(var8);
            if(!(var10 != var15)) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var8 = 20;
            var8 = var13[var8];
            var13 = var11.bind(var3)(var8);
            var11 = var13.jumpToMessage;
            var8 = {};
            var8['channelId'] = var9;
            var8['messageId'] = var15;
            var8['flash'] = var12;
            var8['isPreload'] = var6;
            var8['skipLocalFetch'] = var5;
            var8['jumpType'] = var14;
            var8['avoidInitialScroll'] = var4;
            var8 = var11.bind(var13)(var8);
            _fun0002_ip = 6; continue _fun0002;
case 43:
            if(!(var10 != var1)) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var8 = var1.isThread;
            var8 = var8.bind(var1)();
            if(!var8) { _fun0002_ip = 45; continue _fun0002 }
case 47:
            var11 = _closure1_slot13;
            var8 = var11.hasOpenedThread;
            var13 = var8.bind(var11)(var9);
            var8 = false;
            var11 = false;
            if(var13) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var13 = _closure1_slot25;
            if(!(var10 == var13)) { _fun0002_ip = 50; continue _fun0002 }
case 51:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 22;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            var16 = var13.Storage;
            var15 = var16.get;
            var14 = _closure1_slot27;
            var13 = {};
            var13 = var15.bind(var16)(var14, var13);
            if(!(var10 == var13)) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            var13 = {};
case 52:
            var _closure1_slot25 = var13;
case 50:
            var13 = _closure1_slot25;
            var13 = var9 in var13;
            var11 = false;
            if(var13) { _fun0002_ip = 48; continue _fun0002 }
case 54:
            var15 = _closure1_slot25;
            var13 = global;
            var16 = var13.Date;
            var14 = var16.now;
            var14 = var14.bind(var16)();
            var15[var9] = var14;
            var14 = var13.Date;
            var13 = var14.now;
            var14 = var13.bind(var14)();
            var13 = _closure1_slot26;
            var18 = var14 - var13;
            var16 = _closure1_slot25;
            for(var13 in var16)
case 55:
            {
case 56:
                var20 = var13;
                var19 = _closure1_slot25;
                var19 = var19[var20];
                if(!(var19 < var18)) { _fun0002_ip = 55; continue _fun0002 }
case 57:
                var19 = _closure1_slot25;
                var19 = delete var19[var20];
                _fun0002_ip = 55; continue _fun0002;
            }
case 58:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 22;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            var16 = var13.Storage;
            var15 = var16.set;
            var14 = _closure1_slot27;
            var13 = _closure1_slot25;
            var13 = var15.bind(var16)(var14, var13);
            var11 = true;
case 48:
            if(var11) { _fun0002_ip = 59; continue _fun0002 }
case 45:
            if(!(var10 != var1)) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var10 = var1.isThread;
            var10 = var10.bind(var1)();
            if(!var10) { _fun0002_ip = 60; continue _fun0002 }
case 62:
            var12 = _closure1_slot13;
            var11 = var12.hasTrackedUnread;
            var10 = var1.id;
            var10 = var11.bind(var12)(var10);
            if(!var10) { _fun0002_ip = 60; continue _fun0002 }
case 63:
            var2 = var2.ready;
            if(var2) { _fun0002_ip = 60; continue _fun0002 }
case 64:
            var11 = _closure1_slot13;
            var10 = var11.getTrackedAckMessageId;
            var2 = var1.id;
            var13 = var10.bind(var11)(var2);
            var11 = _closure1_slot24;
            var10 = var11.log;
            var15 = var1.id;
            var2 = global;
            var2 = var2.HermesInternal;
            var14 = var2.concat;
            var12 = 'Jumping to most recent message in thread ';
            var2 = ' - ';
            var2 = var14.bind(var12)(var15, var2, var13);
            var2 = var10.bind(var11)(var2);
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 20;
            var2 = var11[var2];
            var11 = var10.bind(var3)(var2);
            var10 = var11.fetchMessages;
            var2 = {};
            var2['channelId'] = var9;
            var12 = _closure1_slot16;
            var2['limit'] = var12;
            var12 = {'messageId': null, 'flash': false, 'offset': 1};
            var12['messageId'] = var13;
            var2['jump'] = var12;
            var2['isPreload'] = var6;
            var2['skipLocalFetch'] = var5;
            var2['avoidInitialScroll'] = var4;
            var2 = var10.bind(var11)(var2);
            return var2;
case 60:
            var10 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 20;
            var2 = var15[var2];
            var11 = var10.bind(var3)(var2);
            var10 = var11.fetchMessages;
            var2 = {};
            var2['channelId'] = var9;
            var12 = _closure1_slot16;
            var2['limit'] = var12;
            var2['isPreload'] = var6;
            var2['skipLocalFetch'] = var5;
            var12 = {};
            var14 = _closure1_slot0;
            var13 = 18;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            var13 = var13.JumpTypes;
            var13 = var13.ANIMATED;
            var12['jumpType'] = var13;
            var2['jump'] = var12;
            var2['avoidInitialScroll'] = var4;
            var2 = var10.bind(var11)(var2);
            return var2;
case 59:
            var10 = _closure1_slot24;
            var2 = var10.log;
            var12 = var1.id;
            var1 = global;
            var1 = var1.HermesInternal;
            var11 = var1.concat;
            var1 = 'Jumping to start of thread ';
            var1 = var11.bind(var1)(var12);
            var1 = var2.bind(var10)(var1);
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 20;
            var1 = var10[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.fetchMessages;
            var1 = {};
            var1['channelId'] = var9;
            var7 = _closure1_slot16;
            var1['limit'] = var7;
            var7 = {};
            var7['messageId'] = var9;
            var7['flash'] = var8;
            var1['jump'] = var7;
            var1['isPreload'] = var6;
            var1['skipLocalFetch'] = var5;
            var1['avoidInitialScroll'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function handleConnectionOpen() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot14;
            var1 = var3.getChannelId;
            var4 = var1.bind(var3)();
            var7 = null;
            if(!(var7 != var4)) { _fun0003_ip = 65; continue _fun0003 }
case 66:
            var3 = _closure1_slot11;
            var1 = var3.getChannel;
            var1 = var1.bind(var3)(var4);
            if(!(var7 != var1)) { _fun0003_ip = 65; continue _fun0003 }
case 67:
            var3 = var1.id;
            var4 = _closure1_slot23;
            if(!(var7 != var4)) { _fun0003_ip = 68; continue _fun0003 }
case 69:
            var4 = _closure1_slot23;
            var4 = var4.channelId;
            if(!(var4 !== var3)) { _fun0003_ip = 70; continue _fun0003 }
case 68:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 23;
            var4 = var6[var4];
            var8 = undefined;
            var9 = var5.bind(var8)(var4);
            var6 = var9.matchPath;
            var4 = global;
            var4 = var4.location;
            var5 = var4.pathname;
            var4 = {};
            var14 = _closure1_slot20;
            var13 = var14.CHANNEL;
            var12 = ':guild';
            var11 = ':channel';
            var10 = ':message';
            var10 = var13.bind(var14)(var12, var11, var10);
            var4['path'] = var10;
            var10 = true;
            var4['exact'] = var10;
            var4 = var6.bind(var9)(var5, var4);
            var6 = {};
            var6['channelId'] = var3;
            var5 = var7 == var4;
            var3 = undefined;
            if(var5) { _fun0003_ip = 71; continue _fun0003 }
case 72:
            var4 = var4.params;
            var5 = var7 == var4;
            var3 = undefined;
            if(var5) { _fun0003_ip = 71; continue _fun0003 }
case 73:
            var3 = var4.message;
case 71:
            var6['messageId'] = var3;
            _fun0003_ip = 74; continue _fun0003;
case 70:
            var6 = _closure1_slot23;
case 74:
            var4 = undefined;
            var _closure1_slot23 = var4;
            var5 = _closure1_slot30;
            var3 = {};
            var8 = var1.getGuildId;
            var8 = var8.bind(var1)();
            var3['guildId'] = var8;
            var8 = var1.id;
            var3['channelId'] = var8;
            var8 = var6.messageId;
            var3['messageId'] = var8;
            var8 = var6.jumpType;
            var3['jumpType'] = var8;
            var6 = var6.messageId;
            var6 = var7 != var6;
            var3['avoidInitialScroll'] = var6;
            var3 = var5.bind(var4)(var3);
            var3 = _closure1_slot36;
            var2 = var1.getGuildId;
            var2 = var2.bind(var1)();
            var1 = var1.id;
            var1 = var3.bind(var4)(var2, var1);
case 65:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function loadSelectedChannelIfNecessary() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot14;
            var1 = var3.getChannelId;
            var6 = var1.bind(var3)();
            var3 = null;
            if(!(var3 != var6)) { _fun0004_ip = 75; continue _fun0004 }
case 66:
            var4 = _closure1_slot11;
            var1 = var4.getChannel;
            var1 = var1.bind(var4)(var6);
            if(!(var3 != var1)) { _fun0004_ip = 75; continue _fun0004 }
case 67:
            var5 = _closure1_slot9;
            var3 = var1.type;
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            if(var3) { _fun0004_ip = 76; continue _fun0004 }
case 77:
            var7 = _closure1_slot36;
            var3 = var1.getGuildId;
            var5 = var3.bind(var1)();
            var3 = var1.id;
            var3 = var7.bind(var4)(var5, var3);
            _fun0004_ip = 75; continue _fun0004;
case 76:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 16;
            var3 = var7[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.getOrCreate;
            var5 = var3.bind(var5)(var6);
            var3 = var5.ready;
            if(!var3) { _fun0004_ip = 78; continue _fun0004 }
case 79:
            var3 = var5.hasFetched;
case 78:
            if(var3) { _fun0004_ip = 80; continue _fun0004 }
case 81:
            var5 = _closure1_slot30;
            var3 = {};
            var6 = var1.getGuildId;
            var6 = var6.bind(var1)();
            var3['guildId'] = var6;
            var6 = var1.id;
            var3['channelId'] = var6;
            var3 = var5.bind(var4)(var3);
case 80:
            var3 = _closure1_slot36;
            var2 = var1.getGuildId;
            var2 = var2.bind(var1)();
            var1 = var1.id;
            var1 = var3.bind(var4)(var2, var1);
case 75:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function handleChannelSelect(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var6 = var2.guildId;
            var5 = var2.channelId;
            var4 = var2.messageId;
            var1 = var2.jumpType;
            var2 = var2.isInitialSetup;
            if(var2) { _fun0005_ip = 82; continue _fun0005 }
case 83:
            var8 = _closure1_slot30;
            var7 = {};
            var7['guildId'] = var6;
            var7['channelId'] = var5;
            var7['messageId'] = var4;
            var7['jumpType'] = var1;
            var2 = undefined;
            var7 = var8.bind(var2)(var7);
            var3 = _closure1_slot36;
            var3 = var3.bind(var2)(var6, var5);
            return var2;
case 82:
            var3 = null;
            if(!(var3 != var5)) { _fun0005_ip = 84; continue _fun0005 }
case 85:
            var2 = {};
            var2['channelId'] = var5;
            var5 = var3 != var4;
            var3 = undefined;
            if(!var5) { _fun0005_ip = 86; continue _fun0005 }
case 87:
            var3 = var4;
case 86:
            var2['messageId'] = var3;
            var2['jumpType'] = var1;
            _closure1_slot23 = var2;
case 84:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function handleVoiceChannelSelect(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var1 = var1.channelId;
        var3 = _closure1_slot30;
        var2 = {};
        var2['guildId'] = var4;
        var2['channelId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot34 = var1;
    var1 = function handleJumpToVoiceChannelMessage(arg1) {
        var1 = arg1;
        var6 = var1.guildId;
        var5 = var1.channelId;
        var4 = var1.messageId;
        var1 = var1.jumpType;
        var3 = _closure1_slot30;
        var2 = {};
        var2['guildId'] = var6;
        var2['channelId'] = var5;
        var2['messageId'] = var4;
        var2['jumpType'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot35 = var1;
    var1 = function maybeLoadChannelSplitView(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg2;
            var3 = _closure1_slot10;
            var2 = var3.getCurrentSidebarChannelId;
            var4 = var2.bind(var3)(var5);
            var2 = null;
            if(!(var2 != var4)) { _fun0006_ip = 5; continue _fun0006 }
case 88:
            var3 = _closure1_slot30;
            var2 = {};
            var6 = arg1;
            var2['guildId'] = var6;
            var2['channelId'] = var4;
            var4 = _closure1_slot10;
            var1 = var4.getCurrentSidebarMessageId;
            var1 = var1.bind(var4)(var5);
            var2['messageId'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
case 5:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function handleChannelSectionStoreChange() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = _closure1_slot14;
            var2 = var3.getChannelId;
            var4 = var2.bind(var3)();
            var3 = _closure1_slot15;
            var2 = var3.getGuildId;
            var3 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var3)) { _fun0007_ip = 89; continue _fun0007 }
case 90:
            if(!(var2 != var4)) { _fun0007_ip = 89; continue _fun0007 }
case 91:
            var6 = _closure1_slot10;
            var5 = var6.getSidebarState;
            var5 = var5.bind(var6)(var4);
            var7 = var2 == var5;
            var2 = undefined;
            var6 = undefined;
            if(var7) { _fun0007_ip = 4; continue _fun0007 }
case 92:
            var6 = var5.type;
case 4:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 24;
            var5 = var8[var5];
            var5 = var7.bind(var2)(var5);
            var5 = var5.SidebarType;
            var5 = var5.VIEW_CHANNEL;
            if(!(var6 !== var5)) { _fun0007_ip = 89; continue _fun0007 }
case 93:
            var1 = _closure1_slot36;
            var1 = var1.bind(var2)(var3, var4);
case 89:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = function handleChannelPreload(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var3 = var1.channelId;
            var5 = var1.context;
            var2 = _closure1_slot17;
            if(!(var5 === var2)) { _fun0008_ip = 69; continue _fun0008 }
case 94:
            var6 = _closure1_slot30;
            var5 = {};
            var5['guildId'] = var4;
            var5['channelId'] = var3;
            var2 = undefined;
            var5 = var6.bind(var2)(var5);
            var1 = _closure1_slot36;
            var1 = var1.bind(var2)(var4, var3);
case 69:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function handleChannelCreate(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channel;
            var1 = var1.messageId;
            var5 = var4.guild_id;
            var2 = null;
            var2 = var2 != var5;
            if(!var2) { _fun0009_ip = 95; continue _fun0009 }
case 88:
            var6 = _closure1_slot14;
            var3 = var6.getChannelId;
            var6 = var3.bind(var6)(var5);
            var3 = var4.id;
            var2 = var6 === var3;
case 95:
            if(!var2) { _fun0009_ip = 96; continue _fun0009 }
case 7:
            var3 = _closure1_slot30;
            var2 = {};
            var2['guildId'] = var5;
            var4 = var4.id;
            var2['channelId'] = var4;
            var2['messageId'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
case 96:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function handleMessageEditEnd(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var2 = var1.response;
            var1 = null;
            if(!(var1 != var2)) { _fun0010_ip = 97; continue _fun0010 }
case 98:
            var3 = var2.body;
            if(!(var1 != var3)) { _fun0010_ip = 97; continue _fun0010 }
case 99:
            var3 = var2.body;
            var4 = var3.code;
            var3 = _closure1_slot19;
            var3 = var3.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED;
            if(!(var4 === var3)) { _fun0010_ip = 100; continue _fun0010 }
case 69:
            var2 = var2.body;
            var12 = var2.retry_after;
            if(!(var1 != var12)) { _fun0010_ip = 100; continue _fun0010 }
case 82:
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 25;
            var2 = var10[var2];
            var9 = undefined;
            var4 = var3.bind(var9)(var2);
            var3 = var4.show;
            var2 = {};
            var6 = _closure1_slot0;
            var5 = 26;
            var7 = var10[var5];
            var7 = var6.bind(var9)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var5];
            var7 = var6.bind(var9)(var7);
            var7 = var7.t;
            var7 = var7.Whhv4+;
            var7 = var8.bind(var11)(var7);
            var2['title'] = var7;
            var7 = var10[var5];
            var7 = var6.bind(var9)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var5 = var10[var5];
            var5 = var6.bind(var9)(var5);
            var5 = var5.t;
            var6 = var5.qoxdQE;
            var5 = {};
            var9 = global;
            var11 = var9.Math;
            var10 = var11.ceil;
            var9 = 60;
            var9 = var12 / var9;
            var9 = var10.bind(var11)(var9);
            var5['retryAfterMinutes'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var2['body'] = var5;
            var2 = var3.bind(var4)(var2);
case 100:
            var2 = undefined;
            return var2;
case 97:
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var1 = function handleLoadMessagesSuccess(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var7 = var1.channelId;
            var5 = var1.jump;
            var2 = var1.isStale;
            var3 = var1.isPreview;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0011_ip = 101; continue _fun0011 }
case 102:
            var3 = false;
case 101:
            if(var3) { _fun0011_ip = 103; continue _fun0011 }
case 104:
            var3 = _closure1_slot28;
            var3 = var3[var7];
            var4 = null;
            var4 = var4 != var3;
            var8 = 0;
            if(!var4) { _fun0011_ip = 105; continue _fun0011 }
case 106:
            var8 = var3;
case 105:
            var3 = global;
            var9 = var3.Date;
            var4 = var9.now;
            var4 = var4.bind(var9)();
            var8 = var4 - var8;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var4 = 21;
            var4 = var10[var4];
            var4 = var9.bind(var1)(var4);
            var4 = var4.Millis;
            var9 = var4.SECOND;
            var4 = 10;
            var4 = var4 * var9;
            if(!(!(var8 < var4))) { _fun0011_ip = 103; continue _fun0011 }
case 107:
            var4 = _closure1_slot28;
            var8 = var3.Date;
            var3 = var8.now;
            var3 = var3.bind(var8)();
            var4[var7] = var3;
            var4 = _closure1_slot14;
            var3 = var4.getChannelId;
            var3 = var3.bind(var4)();
            var8 = _closure1_slot10;
            var4 = var8.getCurrentSidebarChannelId;
            var4 = var4.bind(var8)(var3);
            if(!var2) { _fun0011_ip = 75; continue _fun0011 }
case 108:
            var9 = _closure1_slot8;
            var8 = var9.isConnected;
            var2 = var8.bind(var9)();
case 75:
            if(!var2) { _fun0011_ip = 74; continue _fun0011 }
case 109:
            var3 = var7 === var3;
            if(var3) { _fun0011_ip = 110; continue _fun0011 }
case 111:
            var3 = var7 === var4;
case 110:
            var2 = var3;
case 74:
            if(!var2) { _fun0011_ip = 103; continue _fun0011 }
case 112:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 20;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.fetchMessages;
            var2 = {};
            var2['channelId'] = var7;
            var6 = _closure1_slot16;
            var2['limit'] = var6;
            var2['jump'] = var5;
            var2 = var3.bind(var4)(var2);
case 103:
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = function handleUploadFail(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var8 = var1.channelId;
            var7 = var1.messageId;
            var6 = var1.reason;
            var3 = var1.noSendFailed;
            var5 = var1.shouldSendNotification;
            var4 = null;
            var1 = var4 != var7;
            if(!var1) { _fun0012_ip = 113; continue _fun0012 }
case 104:
            var2 = true;
            var1 = var2 !== var3;
case 113:
            if(!var1) { _fun0012_ip = 114; continue _fun0012 }
case 115:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 27;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var9 = 'MESSAGE_SEND_FAILED';
            var1['type'] = var9;
            var1['channelId'] = var8;
            var1['messageId'] = var7;
            var7 = var4 != var6;
            var4 = null;
            if(!var7) { _fun0012_ip = 116; continue _fun0012 }
case 117:
            var4 = var6;
case 116:
            var1['reason'] = var4;
            var4 = false;
            var4 = var4 !== var5;
            var1['shouldNotify'] = var4;
            var1 = var2.bind(var3)(var1);
case 114:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot42 = var1;
    var1 = function handleAppStateChanged(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var2 = var1.state;
            var1 = 'active';
            if(!(var1 === var2)) { _fun0013_ip = 118; continue _fun0013 }
case 119:
            var3 = _closure1_slot14;
            var1 = var3.getChannelId;
            var5 = var1.bind(var3)();
            var1 = null;
            if(!(var1 != var5)) { _fun0013_ip = 120; continue _fun0013 }
case 121:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 20;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.fetchNewLocalMessages;
            var2 = _closure1_slot16;
            var2 = var3.bind(var4)(var5, var2);
            return var1;
case 120:
            var1 = false;
            return var1;
case 118:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot43 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.isTextChannel;
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
    var4 = var5.bind(var1)(var4);
    var8 = var4.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot16 = var8;
    var8 = var4.CURRENT_APP_CONTEXT;
    var _closure1_slot17 = var8;
    var8 = var4.ChannelTypes;
    var _closure1_slot18 = var8;
    var8 = var4.AbortCodes;
    var _closure1_slot19 = var8;
    var8 = var4.Routes;
    var _closure1_slot20 = var8;
    var4 = var4.ChannelTypesSets;
    var _closure1_slot21 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isStaticChannelRoute;
    var _closure1_slot22 = var4;
    var4 = 15;
    var4 = var6[var4];
    var9 = var7.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var12 = 'MessageManager';
    var13 = var8;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot24 = var4;
    var4 = 21;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var8 = var4.DAY;
    var4 = 90;
    var4 = var4 * var8;
    var _closure1_slot26 = var4;
    var4 = 'viewedThreadIds';
    var _closure1_slot27 = var4;
    var4 = {};
    var _closure1_slot28 = var4;
    var4 = 28;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function MessageManager(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot3;
                var2 = _closure2_slot0;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var2);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot6;
                var10 = var1.bind(var5)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot29;
                var1 = var1.bind(var5)();
                if(var1) { _fun0014_ip = 122; continue _fun0014 }
case 123:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0014_ip = 89; continue _fun0014;
case 122:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot6;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 89:
                var1 = var2.bind(var5)(var6, var1);
                var2 = _closure1_slot30;
                var1['fetchMessages'] = var2;
                var2 = _closure1_slot32;
                var1['loadSelectedChannelIfNecessary'] = var2;
                var2 = global;
                var2 = var2.Map;
                var5 = var2.prototype;
                var5 = Object.create(var5, {constructor: {value: var2}});
                var15 = var5;
                var2 = new var15[var2](var14);
                var7 = var2 instanceof Object ? var2 : var5;
                var6 = var7.set;
                var5 = _closure1_slot10;
                var2 = _closure1_slot37;
                var2 = var6.bind(var7)(var5, var2);
                var1['stores'] = var2;
                var2 = {};
                var5 = _closure1_slot43;
                var2['APP_STATE_UPDATE'] = var5;
                var5 = _closure1_slot31;
                var2['OVERLAY_INITIALIZE'] = var5;
                var5 = _closure1_slot33;
                var2['CHANNEL_SELECT'] = var5;
                var5 = _closure1_slot34;
                var2['VOICE_CHANNEL_SELECT'] = var5;
                var5 = _closure1_slot39;
                var2['THREAD_CREATE'] = var5;
                var6 = function THREAD_LIST_SYNC() {
                    var2 = _closure1_slot32;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2['THREAD_LIST_SYNC'] = var6;
                var2['CHANNEL_CREATE'] = var5;
                var5 = _closure1_slot38;
                var2['CHANNEL_PRELOAD'] = var5;
                var5 = function GUILD_CREATE() {
                    var2 = _closure1_slot32;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2['GUILD_CREATE'] = var5;
                var5 = _closure1_slot40;
                var2['MESSAGE_END_EDIT'] = var5;
                var5 = _closure1_slot41;
                var2['LOAD_MESSAGES_SUCCESS'] = var5;
                var5 = _closure1_slot42;
                var2['UPLOAD_FAIL'] = var5;
                var5 = function CHANNEL_DELETE() {
                    var2 = _closure1_slot32;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2['CHANNEL_DELETE'] = var5;
                var4 = function THREAD_DELETE() {
                    var2 = _closure1_slot32;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2['THREAD_DELETE'] = var4;
                var3 = _closure1_slot35;
                var2['CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 27;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.subscribe;
            var3 = _closure1_slot31;
            var2 = 'CONNECTION_OPEN';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var6 = function value() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 27;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.unsubscribe;
            var3 = _closure1_slot31;
            var2 = 'CONNECTION_OPEN';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/MessageManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();