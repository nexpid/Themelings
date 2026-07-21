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
            _closure1_slot31 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function fetchMessages(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var19 = var1.guildId;
            var10 = var1.channelId;
            var16 = var1.messageId;
            var11 = var1.forceFetch;
            var7 = var1.isPreload;
            var15 = var1.jumpType;
            var6 = var1.skipLocalFetch;
            var5 = var1.avoidInitialScroll;
            var4 = var1.fetchKey;
            var3 = null;
            if(!(var3 != var10)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = _closure1_slot24;
            var12 = undefined;
            var1 = var1.bind(var12)(var10);
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var2 = _closure1_slot13;
            var1 = var2.getChannel;
            var1 = var1.bind(var2)(var10);
            var2 = var3 == var1;
            var9 = undefined;
            if(var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var9 = var1.type;
case 9:
            var2 = _closure1_slot20;
            var2 = var2.GUILD_STORE;
            if(!(var9 !== var2)) { _fun0002_ip = 6; continue _fun0002 }
case 11:
            var9 = var3 == var1;
            var2 = undefined;
            if(var9) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = var1.type;
case 12:
            if(!(var3 != var2)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var2 = _closure1_slot23;
            var13 = var2.GUILD_THREADS_ONLY;
            var9 = var13.has;
            var2 = var1.type;
            var2 = var9.bind(var13)(var2);
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 14:
            var9 = _closure1_slot1;
            var18 = _closure1_slot2;
            var13 = 19;
            var2 = var18[var13];
            var9 = var9.bind(var12)(var2);
            var2 = var9.getOrCreate;
            var9 = var2.bind(var9)(var10);
            var14 = var9.some;
            var17 = _closure1_slot0;
            var2 = 20;
            var2 = var18[var2];
            var2 = var17.bind(var12)(var2);
            var2 = var2.messageHasExpiredAttachmentUrl;
            var2 = var14.bind(var9)(var2);
            var18 = var9;
            if(!var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var14 = _closure1_slot26;
            var9 = var14.log;
            var2 = 'Found expired attachment link, clearing messages';
            var2 = var9.bind(var14)(var2);
            var9 = _closure1_slot1;
            var2 = _closure1_slot2;
            var14 = var2[var13];
            var17 = var9.bind(var12)(var14);
            var14 = var17.clear;
            var14 = var14.bind(var17)(var10);
            var2 = var2[var13];
            var9 = var9.bind(var12)(var2);
            var2 = var9.getOrCreate;
            var18 = var2.bind(var9)(var10);
case 16:
            var2 = var18.jumpTargetId;
            var2 = var3 != var2;
            if(!var2) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var2 = var3 == var16;
case 18:
            var17 = var18;
            if(!var2) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var14 = var18.mutate;
            var2 = {'jumpTargetId': null, 'jumped': false};
            var21 = _closure1_slot0;
            var9 = _closure1_slot2;
            var20 = 21;
            var20 = var9[var20];
            var20 = var21.bind(var12)(var20);
            var20 = var20.JumpType;
            var20 = var20.ANIMATED;
            var2['jumpType'] = var20;
            var2 = var14.bind(var18)(var2);
            var14 = _closure1_slot1;
            var9 = var9[var13];
            var14 = var14.bind(var12)(var9);
            var9 = var14.commit;
            var9 = var9.bind(var14)(var2);
            var17 = var2;
case 20:
            var2 = var17.focusTargetId;
            var9 = var3 != var2;
            if(!var9) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var9 = var3 == var16;
case 22:
            var2 = var17;
            if(!var9) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var14 = var17.mutate;
            var9 = {};
            var9['focusTargetId'] = var3;
            var9 = var14.bind(var17)(var9);
            var17 = _closure1_slot1;
            var14 = _closure1_slot2;
            var14 = var14[var13];
            var17 = var17.bind(var12)(var14);
            var14 = var17.commit;
            var14 = var14.bind(var17)(var9);
            var2 = var9;
case 24:
            if(!var7) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var14 = _closure1_slot10;
            var9 = var14.isConnected;
            var9 = var9.bind(var14)();
            if(var9) { _fun0002_ip = 26; continue _fun0002 }
case 28:
            var14 = var2.loadingMore;
            var9 = true;
            if(!var14) { _fun0002_ip = 29; continue _fun0002 }
case 26:
            var14 = var2.loadingMore;
            if(var14) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var14 = var2.ready;
            if(!var14) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var14 = var2.cached;
            if(!var14) { _fun0002_ip = 30; continue _fun0002 }
case 32:
            var14 = var3 != var19;
            if(!var14) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var18 = _closure1_slot14;
            var17 = var18.getGuild;
            var17 = var17.bind(var18)(var19);
            var14 = var3 == var17;
case 34:
            var9 = var11;
            if(var14) { _fun0002_ip = 29; continue _fun0002 }
case 36:
            var9 = true;
            _fun0002_ip = 29; continue _fun0002;
case 30:
            var9 = var11;
            if(!(var3 != var16)) { _fun0002_ip = 29; continue _fun0002 }
case 37:
            var9 = true;
case 29:
            var14 = _closure1_slot1;
            var17 = _closure1_slot2;
            var11 = 22;
            var11 = var17[var11];
            var11 = var14.bind(var12)(var11);
            var11 = var11.bind(var12)(var10);
            if(!var11) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var17 = _closure1_slot15;
            var14 = var17.hasUnread;
            var11 = var14.bind(var17)(var10);
case 38:
            if(!var11) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var9 = true;
case 40:
            if(!var9) { _fun0002_ip = 6; continue _fun0002 }
case 42:
            var11 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var13];
            var14 = var11.bind(var12)(var9);
            var11 = var14.commit;
            var17 = var2.mutate;
            var9 = {};
            var13 = true;
            var9['loadingMore'] = var13;
            var9 = var17.bind(var2)(var9);
            var9 = var11.bind(var14)(var9);
            if(!(var3 != var16)) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = 23;
            var9 = var14[var9];
            var14 = var11.bind(var12)(var9);
            var11 = var14.jumpToMessage;
            var9 = {};
            var9['channelId'] = var10;
            var9['messageId'] = var16;
            var9['flash'] = var13;
            var9['isPreload'] = var7;
            var9['skipLocalFetch'] = var6;
            var9['jumpType'] = var15;
            var9['avoidInitialScroll'] = var5;
            var9 = var11.bind(var14)(var9);
            _fun0002_ip = 6; continue _fun0002;
case 43:
            if(!(var3 != var1)) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var9 = var1.isThread;
            var9 = var9.bind(var1)();
            if(!var9) { _fun0002_ip = 45; continue _fun0002 }
case 47:
            var11 = _closure1_slot15;
            var9 = var11.hasOpenedThread;
            var14 = var9.bind(var11)(var10);
            var9 = false;
            var11 = false;
            if(var14) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var14 = _closure1_slot27;
            if(!(var3 == var14)) { _fun0002_ip = 50; continue _fun0002 }
case 51:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var14 = 25;
            var14 = var16[var14];
            var14 = var15.bind(var12)(var14);
            var17 = var14.Storage;
            var16 = var17.get;
            var15 = _closure1_slot29;
            var14 = {};
            var14 = var16.bind(var17)(var15, var14);
            if(!(var3 == var14)) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            var14 = {};
case 52:
            var _closure1_slot27 = var14;
case 50:
            var14 = _closure1_slot27;
            var14 = var10 in var14;
            var11 = false;
            if(var14) { _fun0002_ip = 48; continue _fun0002 }
case 54:
            var16 = _closure1_slot27;
            var14 = global;
            var17 = var14.Date;
            var15 = var17.now;
            var15 = var15.bind(var17)();
            var16[var10] = var15;
            var15 = var14.Date;
            var14 = var15.now;
            var15 = var14.bind(var15)();
            var14 = _closure1_slot28;
            var19 = var15 - var14;
            var17 = _closure1_slot27;
            for(var14 in var17)
case 55:
            {
case 56:
                var21 = var14;
                var20 = _closure1_slot27;
                var20 = var20[var21];
                if(!(var20 < var19)) { _fun0002_ip = 55; continue _fun0002 }
case 57:
                var20 = _closure1_slot27;
                var20 = delete var20[var21];
                _fun0002_ip = 55; continue _fun0002;
            }
case 58:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var14 = 25;
            var14 = var16[var14];
            var14 = var15.bind(var12)(var14);
            var17 = var14.Storage;
            var16 = var17.set;
            var15 = _closure1_slot29;
            var14 = _closure1_slot27;
            var14 = var16.bind(var17)(var15, var14);
            var11 = true;
case 48:
            if(var11) { _fun0002_ip = 59; continue _fun0002 }
case 45:
            if(!(var3 != var1)) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var3 = var1.isThread;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0002_ip = 60; continue _fun0002 }
case 62:
            var13 = _closure1_slot15;
            var11 = var13.hasTrackedUnread;
            var3 = var1.id;
            var3 = var11.bind(var13)(var3);
            if(!var3) { _fun0002_ip = 60; continue _fun0002 }
case 63:
            var2 = var2.ready;
            if(var2) { _fun0002_ip = 60; continue _fun0002 }
case 64:
            var11 = _closure1_slot15;
            var3 = var11.getTrackedAckMessageId;
            var2 = var1.id;
            var14 = var3.bind(var11)(var2);
            var11 = _closure1_slot26;
            var3 = var11.log;
            var16 = var1.id;
            var2 = global;
            var2 = var2.HermesInternal;
            var15 = var2.concat;
            var13 = 'Jumping to most recent message in thread ';
            var2 = ' - ';
            var2 = var15.bind(var13)(var16, var2, var14);
            var2 = var3.bind(var11)(var2);
            var3 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 23;
            var2 = var16[var2];
            var11 = var3.bind(var12)(var2);
            var3 = var11.fetchMessages;
            var2 = {};
            var2['channelId'] = var10;
            var15 = _closure1_slot0;
            var13 = 24;
            var13 = var16[var13];
            var16 = var15.bind(var12)(var13);
            var15 = var16.getMessageLimit;
            var13 = 'MessageManager.threadUnread';
            var13 = var15.bind(var16)(var13);
            var2['limit'] = var13;
            var13 = {'messageId': null, 'flash': false, 'offset': 1};
            var13['messageId'] = var14;
            var2['jump'] = var13;
            var2['isPreload'] = var7;
            var2['skipLocalFetch'] = var6;
            var2['avoidInitialScroll'] = var5;
            var2['fetchKey'] = var4;
            var2 = var3.bind(var11)(var2);
            return var2;
case 60:
            var3 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 23;
            var2 = var16[var2];
            var11 = var3.bind(var12)(var2);
            var3 = var11.fetchMessages;
            var2 = {};
            var2['channelId'] = var10;
            var15 = _closure1_slot0;
            var13 = 24;
            var13 = var16[var13];
            var17 = var15.bind(var12)(var13);
            var14 = var17.getMessageLimit;
            var13 = 'MessageManager.initialFetch';
            var13 = var14.bind(var17)(var13);
            var2['limit'] = var13;
            var2['isPreload'] = var7;
            var2['skipLocalFetch'] = var6;
            var13 = {};
            var14 = 21;
            var14 = var16[var14];
            var14 = var15.bind(var12)(var14);
            var14 = var14.JumpType;
            var14 = var14.ANIMATED;
            var13['jumpType'] = var14;
            var2['jump'] = var13;
            var2['avoidInitialScroll'] = var5;
            var2['fetchKey'] = var4;
            var2 = var3.bind(var11)(var2);
            return var2;
case 59:
            var3 = _closure1_slot26;
            var2 = var3.log;
            var13 = var1.id;
            var1 = global;
            var1 = var1.HermesInternal;
            var11 = var1.concat;
            var1 = 'Jumping to start of thread ';
            var1 = var11.bind(var1)(var13);
            var1 = var2.bind(var3)(var1);
            var2 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 23;
            var1 = var13[var1];
            var3 = var2.bind(var12)(var1);
            var2 = var3.fetchMessages;
            var1 = {};
            var1['channelId'] = var10;
            var11 = _closure1_slot0;
            var8 = 24;
            var8 = var13[var8];
            var12 = var11.bind(var12)(var8);
            var11 = var12.getMessageLimit;
            var8 = 'MessageManager.threadStart';
            var8 = var11.bind(var12)(var8);
            var1['limit'] = var8;
            var8 = {};
            var8['messageId'] = var10;
            var8['flash'] = var9;
            var1['jump'] = var8;
            var1['isPreload'] = var7;
            var1['skipLocalFetch'] = var6;
            var1['avoidInitialScroll'] = var5;
            var1['fetchKey'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function handleConnectionOpen() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot16;
            var1 = var3.getChannelId;
            var5 = var1.bind(var3)();
            var7 = null;
            if(!(var7 != var5)) { _fun0003_ip = 65; continue _fun0003 }
case 66:
            var3 = _closure1_slot9;
            var1 = var3.getOpenChatChannelIds;
            var6 = var1.bind(var3)();
            var3 = _closure1_slot8;
            var4 = undefined;
            var1 = 1;
            var3 = var3.bind(var4)(var6, var1);
            var1 = 0;
            var6 = var3[var1];
            if(!(var7 != var6)) { _fun0003_ip = 67; continue _fun0003 }
case 68:
            if(!(var6 !== var5)) { _fun0003_ip = 67; continue _fun0003 }
case 69:
            var3 = _closure1_slot13;
            var1 = var3.getChannel;
            var6 = var1.bind(var3)(var6);
            if(!(var7 != var6)) { _fun0003_ip = 67; continue _fun0003 }
case 70:
            var3 = _closure1_slot32;
            var1 = {};
            var8 = var6.getGuildId;
            var8 = var8.bind(var6)();
            var1['guildId'] = var8;
            var6 = var6.id;
            var1['channelId'] = var6;
            var1 = var3.bind(var4)(var1);
case 67:
            var3 = _closure1_slot13;
            var1 = var3.getChannel;
            var1 = var1.bind(var3)(var5);
            if(!(var7 != var1)) { _fun0003_ip = 65; continue _fun0003 }
case 71:
            var3 = var1.id;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 26;
            var5 = var10[var5];
            var9 = var6.bind(var4)(var5);
            var8 = var9.matchPath;
            var5 = 27;
            var5 = var10[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.getHistory;
            var5 = var5.bind(var6)();
            var5 = var5.location;
            var6 = var5.pathname;
            var5 = {};
            var14 = _closure1_slot22;
            var13 = var14.CHANNEL;
            var12 = ':guild';
            var11 = ':channel';
            var10 = ':message';
            var10 = var13.bind(var14)(var12, var11, var10);
            var5['path'] = var10;
            var10 = true;
            var5['exact'] = var10;
            var5 = var8.bind(var9)(var6, var5);
            var6 = {};
            var6['channelId'] = var3;
            var8 = var7 == var5;
            var3 = undefined;
            if(var8) { _fun0003_ip = 72; continue _fun0003 }
case 73:
            var5 = var5.params;
            var8 = var7 == var5;
            var3 = undefined;
            if(var8) { _fun0003_ip = 72; continue _fun0003 }
case 74:
            var3 = var5.message;
case 72:
            var6['messageId'] = var3;
            var5 = _closure1_slot32;
            var3 = {};
            var8 = var1.getGuildId;
            var8 = var8.bind(var1)();
            var3['guildId'] = var8;
            var8 = var1.id;
            var3['channelId'] = var8;
            var8 = var6.messageId;
            var3['messageId'] = var8;
            var6 = var6.messageId;
            var6 = var7 != var6;
            var3['avoidInitialScroll'] = var6;
            var3 = var5.bind(var4)(var3);
            var3 = _closure1_slot38;
            var2 = var1.getGuildId;
            var2 = var2.bind(var1)();
            var1 = var1.id;
            var1 = var3.bind(var4)(var2, var1);
case 65:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function loadSelectedChannelIfNecessary() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot16;
            var1 = var3.getChannelId;
            var6 = var1.bind(var3)();
            var3 = null;
            if(!(var3 != var6)) { _fun0004_ip = 75; continue _fun0004 }
case 66:
            var4 = _closure1_slot13;
            var1 = var4.getChannel;
            var1 = var1.bind(var4)(var6);
            if(!(var3 != var1)) { _fun0004_ip = 75; continue _fun0004 }
case 76:
            var5 = _closure1_slot11;
            var3 = var1.type;
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            if(var3) { _fun0004_ip = 77; continue _fun0004 }
case 78:
            var7 = _closure1_slot38;
            var3 = var1.getGuildId;
            var5 = var3.bind(var1)();
            var3 = var1.id;
            var3 = var7.bind(var4)(var5, var3);
            _fun0004_ip = 75; continue _fun0004;
case 77:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 19;
            var3 = var7[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.getOrCreate;
            var5 = var3.bind(var5)(var6);
            var3 = var5.ready;
            if(!var3) { _fun0004_ip = 79; continue _fun0004 }
case 80:
            var3 = var5.hasFetched;
case 79:
            if(var3) { _fun0004_ip = 81; continue _fun0004 }
case 12:
            var5 = _closure1_slot32;
            var3 = {};
            var6 = var1.getGuildId;
            var6 = var6.bind(var1)();
            var3['guildId'] = var6;
            var6 = var1.id;
            var3['channelId'] = var6;
            var3 = var5.bind(var4)(var3);
case 81:
            var3 = _closure1_slot38;
            var2 = var1.getGuildId;
            var2 = var2.bind(var1)();
            var1 = var1.id;
            var1 = var3.bind(var4)(var2, var1);
case 75:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function handleChannelSelect(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var4 = var2.guildId;
            var3 = var2.channelId;
            var7 = var2.messageId;
            var1 = var2.jumpType;
            var2 = var2.skipMessageFetch;
            if(var2) { _fun0005_ip = 82; continue _fun0005 }
case 83:
            var6 = _closure1_slot32;
            var5 = {};
            var5['guildId'] = var4;
            var5['channelId'] = var3;
            var5['messageId'] = var7;
            var5['jumpType'] = var1;
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var2 = _closure1_slot38;
            var2 = var2.bind(var1)(var4, var3);
            return var1;
case 82:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function handleVoiceChannelSelect(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var1 = var1.channelId;
        var3 = _closure1_slot32;
        var2 = {};
        var2['guildId'] = var4;
        var2['channelId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot36 = var1;
    var1 = function handleJumpToVoiceChannelMessage(arg1) {
        var1 = arg1;
        var6 = var1.guildId;
        var5 = var1.channelId;
        var4 = var1.messageId;
        var1 = var1.jumpType;
        var3 = _closure1_slot32;
        var2 = {};
        var2['guildId'] = var6;
        var2['channelId'] = var5;
        var2['messageId'] = var4;
        var2['jumpType'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot37 = var1;
    var1 = function maybeLoadChannelSplitView(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg2;
            var3 = _closure1_slot12;
            var2 = var3.getCurrentSidebarChannelId;
            var4 = var2.bind(var3)(var5);
            var2 = null;
            if(!(var2 != var4)) { _fun0006_ip = 3; continue _fun0006 }
case 84:
            var3 = _closure1_slot32;
            var2 = {};
            var6 = arg1;
            var2['guildId'] = var6;
            var2['channelId'] = var4;
            var4 = _closure1_slot12;
            var1 = var4.getCurrentSidebarMessageId;
            var1 = var1.bind(var4)(var5);
            var2['messageId'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
case 3:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function handleChannelSectionStoreChange() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = _closure1_slot16;
            var2 = var3.getChannelId;
            var4 = var2.bind(var3)();
            var3 = _closure1_slot17;
            var2 = var3.getGuildId;
            var3 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var3)) { _fun0007_ip = 85; continue _fun0007 }
case 86:
            if(!(var2 != var4)) { _fun0007_ip = 85; continue _fun0007 }
case 87:
            var6 = _closure1_slot12;
            var5 = var6.getSidebarState;
            var5 = var5.bind(var6)(var4);
            var7 = var2 == var5;
            var2 = undefined;
            var6 = undefined;
            if(var7) { _fun0007_ip = 5; continue _fun0007 }
case 88:
            var6 = var5.type;
case 5:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 28;
            var5 = var8[var5];
            var5 = var7.bind(var2)(var5);
            var5 = var5.SidebarType;
            var5 = var5.VIEW_CHANNEL;
            if(!(var6 !== var5)) { _fun0007_ip = 85; continue _fun0007 }
case 89:
            var1 = _closure1_slot38;
            var1 = var1.bind(var2)(var3, var4);
case 85:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function handleChannelPreload(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var3 = var1.channelId;
            var5 = var1.context;
            var2 = _closure1_slot19;
            if(!(var5 === var2)) { _fun0008_ip = 90; continue _fun0008 }
case 91:
            var6 = _closure1_slot32;
            var5 = {};
            var5['guildId'] = var4;
            var5['channelId'] = var3;
            var2 = undefined;
            var5 = var6.bind(var2)(var5);
            var1 = _closure1_slot38;
            var1 = var1.bind(var2)(var4, var3);
case 90:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var1 = function handleChannelCreate(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channel;
            var1 = var1.messageId;
            var5 = var4.guild_id;
            var2 = null;
            var2 = var2 != var5;
            if(!var2) { _fun0009_ip = 92; continue _fun0009 }
case 84:
            var6 = _closure1_slot16;
            var3 = var6.getChannelId;
            var6 = var3.bind(var6)(var5);
            var3 = var4.id;
            var2 = var6 === var3;
case 92:
            if(!var2) { _fun0009_ip = 93; continue _fun0009 }
case 94:
            var3 = _closure1_slot32;
            var2 = {};
            var2['guildId'] = var5;
            var4 = var4.id;
            var2['channelId'] = var4;
            var2['messageId'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
case 93:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = function handleMessageEditEnd(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var2 = var1.response;
            var1 = null;
            if(!(var1 != var2)) { _fun0010_ip = 95; continue _fun0010 }
case 96:
            var3 = var2.body;
            if(!(var1 != var3)) { _fun0010_ip = 95; continue _fun0010 }
case 97:
            var3 = var2.body;
            var4 = var3.code;
            var3 = _closure1_slot21;
            var3 = var3.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED;
            if(!(var4 === var3)) { _fun0010_ip = 98; continue _fun0010 }
case 90:
            var2 = var2.body;
            var12 = var2.retry_after;
            if(!(var1 != var12)) { _fun0010_ip = 98; continue _fun0010 }
case 82:
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 29;
            var2 = var10[var2];
            var9 = undefined;
            var4 = var3.bind(var9)(var2);
            var3 = var4.show;
            var2 = {};
            var6 = _closure1_slot0;
            var5 = 30;
            var7 = var10[var5];
            var7 = var6.bind(var9)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var5];
            var7 = var6.bind(var9)(var7);
            var7 = var7.t;
            var7 = var7.Whhv4w;
            var7 = var8.bind(var11)(var7);
            var2['title'] = var7;
            var7 = var10[var5];
            var7 = var6.bind(var9)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var5 = var10[var5];
            var5 = var6.bind(var9)(var5);
            var5 = var5.t;
            var6 = var5.qoxdQB;
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
case 98:
            var2 = undefined;
            return var2;
case 95:
            return var1;
        }
    };
    var _closure1_slot42 = var1;
    var1 = function handleLoadMessagesSuccess(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var7 = var1.channelId;
            var5 = var1.jump;
            var2 = var1.isStale;
            var3 = var1.isPreview;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0011_ip = 99; continue _fun0011 }
case 100:
            var3 = false;
case 99:
            if(var3) { _fun0011_ip = 101; continue _fun0011 }
case 102:
            var3 = _closure1_slot30;
            var3 = var3[var7];
            var4 = null;
            var4 = var4 != var3;
            var8 = 0;
            if(!var4) { _fun0011_ip = 103; continue _fun0011 }
case 104:
            var8 = var3;
case 103:
            var3 = global;
            var9 = var3.Date;
            var4 = var9.now;
            var4 = var4.bind(var9)();
            var8 = var4 - var8;
            var4 = _closure1_slot25;
            if(!(!(var8 < var4))) { _fun0011_ip = 101; continue _fun0011 }
case 105:
            var4 = _closure1_slot30;
            var8 = var3.Date;
            var3 = var8.now;
            var3 = var3.bind(var8)();
            var4[var7] = var3;
            var4 = _closure1_slot16;
            var3 = var4.getChannelId;
            var3 = var3.bind(var4)();
            var8 = _closure1_slot12;
            var4 = var8.getCurrentSidebarChannelId;
            var4 = var4.bind(var8)(var3);
            if(!var2) { _fun0011_ip = 106; continue _fun0011 }
case 107:
            var9 = _closure1_slot10;
            var8 = var9.isConnected;
            var2 = var8.bind(var9)();
case 106:
            if(!var2) { _fun0011_ip = 108; continue _fun0011 }
case 109:
            var3 = var7 === var3;
            if(var3) { _fun0011_ip = 110; continue _fun0011 }
case 81:
            var3 = var7 === var4;
case 110:
            var2 = var3;
case 108:
            if(!var2) { _fun0011_ip = 101; continue _fun0011 }
case 111:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 23;
            var2 = var8[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.fetchMessages;
            var2 = {};
            var2['channelId'] = var7;
            var7 = _closure1_slot0;
            var6 = 24;
            var6 = var8[var6];
            var8 = var7.bind(var1)(var6);
            var7 = var8.getMessageLimit;
            var6 = 'MessageManager.staleFetch';
            var6 = var7.bind(var8)(var6);
            var2['limit'] = var6;
            var2['jump'] = var5;
            var2 = var3.bind(var4)(var2);
case 101:
            return var1;
        }
    };
    var _closure1_slot43 = var1;
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
            if(!var1) { _fun0012_ip = 112; continue _fun0012 }
case 102:
            var2 = true;
            var1 = var2 !== var3;
case 112:
            if(!var1) { _fun0012_ip = 113; continue _fun0012 }
case 114:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 31;
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
            if(!var7) { _fun0012_ip = 115; continue _fun0012 }
case 10:
            var4 = var6;
case 115:
            var1['reason'] = var4;
            var4 = false;
            var4 = var4 !== var5;
            var1['shouldNotify'] = var4;
            var1 = var2.bind(var3)(var1);
case 113:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot44 = var1;
    var1 = function handleAppWillBecomeActive() {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var3 = _closure1_slot16;
            var1 = var3.getChannelId;
            var5 = var1.bind(var3)();
            var1 = null;
            if(!(var1 != var5)) { _fun0013_ip = 7; continue _fun0013 }
case 116:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 23;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.fetchNewLocalMessages;
            var2 = _closure1_slot18;
            var2 = var3.bind(var4)(var5, var2);
            return var1;
case 7:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot45 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.isTextChannel;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var9 = 10;
    var4 = var6[var9];
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot17 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot18 = var8;
    var8 = var4.CURRENT_APP_CONTEXT;
    var _closure1_slot19 = var8;
    var8 = var4.ChannelTypes;
    var _closure1_slot20 = var8;
    var8 = var4.AbortCodes;
    var _closure1_slot21 = var8;
    var8 = var4.Routes;
    var _closure1_slot22 = var8;
    var4 = var4.ChannelTypesSets;
    var _closure1_slot23 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isStaticChannelRoute;
    var _closure1_slot24 = var4;
    var4 = 17;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var8 = var8.SECOND;
    var8 = var9 * var8;
    var _closure1_slot25 = var8;
    var8 = 18;
    var8 = var6[var8];
    var10 = var7.bind(var1)(var8);
    var8 = var10.prototype;
    var9 = Object.create(var8, {constructor: {value: var10}});
    var13 = 'MessageManager';
    var14 = var9;
    var8 = new var14[var10](var13, var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot26 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var8 = var4.DAY;
    var4 = 90;
    var4 = var4 * var8;
    var _closure1_slot28 = var4;
    var4 = 'viewedThreadIds';
    var _closure1_slot29 = var4;
    var4 = {};
    var _closure1_slot30 = var4;
    var4 = 32;
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
                var1 = _closure1_slot31;
                var1 = var1.bind(var5)();
                if(var1) { _fun0014_ip = 117; continue _fun0014 }
case 118:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0014_ip = 85; continue _fun0014;
case 117:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot6;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 85:
                var1 = var2.bind(var5)(var6, var1);
                var2 = _closure1_slot32;
                var1['fetchMessages'] = var2;
                var2 = _closure1_slot34;
                var1['loadSelectedChannelIfNecessary'] = var2;
                var2 = global;
                var2 = var2.Map;
                var5 = var2.prototype;
                var5 = Object.create(var5, {constructor: {value: var2}});
                var15 = var5;
                var2 = new var15[var2](var14);
                var7 = var2 instanceof Object ? var2 : var5;
                var6 = var7.set;
                var5 = _closure1_slot12;
                var2 = _closure1_slot39;
                var2 = var6.bind(var7)(var5, var2);
                var1['stores'] = var2;
                var2 = {};
                var5 = _closure1_slot45;
                var2['APP_STATE_UPDATE_WILL_BECOME_ACTIVE'] = var5;
                var5 = _closure1_slot33;
                var2['OVERLAY_INITIALIZE'] = var5;
                var5 = _closure1_slot35;
                var2['CHANNEL_SELECT'] = var5;
                var5 = _closure1_slot36;
                var2['VOICE_CHANNEL_SELECT'] = var5;
                var5 = _closure1_slot41;
                var2['THREAD_CREATE'] = var5;
                var6 = function THREAD_LIST_SYNC() {
                    var2 = _closure1_slot34;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2['THREAD_LIST_SYNC'] = var6;
                var2['CHANNEL_CREATE'] = var5;
                var5 = _closure1_slot40;
                var2['CHANNEL_PRELOAD'] = var5;
                var5 = function GUILD_CREATE() {
                    var2 = _closure1_slot34;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2['GUILD_CREATE'] = var5;
                var5 = _closure1_slot42;
                var2['MESSAGE_END_EDIT'] = var5;
                var5 = _closure1_slot43;
                var2['LOAD_MESSAGES_SUCCESS'] = var5;
                var5 = _closure1_slot44;
                var2['UPLOAD_FAIL'] = var5;
                var5 = function CHANNEL_DELETE() {
                    var2 = _closure1_slot34;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2['CHANNEL_DELETE'] = var5;
                var4 = function THREAD_DELETE() {
                    var2 = _closure1_slot34;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2['THREAD_DELETE'] = var4;
                var3 = _closure1_slot37;
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
            var1 = 31;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.subscribe;
            var3 = _closure1_slot33;
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
            var1 = 31;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.unsubscribe;
            var3 = _closure1_slot33;
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
    var14 = var4;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/MessageManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();