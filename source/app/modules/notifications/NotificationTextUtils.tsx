// app/modules/notifications/NotificationTextUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
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
            var9 = _closure1_slot30;
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
            var7 = _closure1_slot30;
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
    var _closure1_slot29 = var1;
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
    var _closure1_slot30 = var1;
    var5 = function shouldNotifyBase(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg2;
            var9 = arg3;
            var6 = arguments[3];
            var10 = undefined;
            if(!(var6 === var10)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var6 = {};
case 36:
            var2 = var3.hasFlag;
            var1 = _closure1_slot26;
            var1 = var1.SPAMMER;
            var1 = var2.bind(var3)(var1);
            if(var1) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var1 = var9.isManaged;
            var1 = var1.bind(var9)();
            if(var1) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var1 = var9.getGuildId;
            var5 = var1.bind(var9)();
            var1 = null;
            var1 = var1 == var5;
            if(var1) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var4 = _closure1_slot4;
            var2 = var4.isLurking;
            var2 = var2.bind(var4)(var5);
            var1 = !var2;
case 42:
            if(!var1) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var2 = var6.ignoreSameUser;
            var4 = !var2;
            if(!var4) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var5 = var3.id;
            var2 = arg1;
            var2 = var2.id;
            var4 = var5 === var2;
case 46:
            var2 = !var4;
            if(var4) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var5 = _closure1_slot13;
            var4 = var5.isBlockedOrIgnored;
            var3 = var3.id;
            var3 = var4.bind(var5)(var3);
            var3 = !var3;
            if(!var3) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var4 = var6.ignoreStatus;
            var5 = !var4;
            if(!var5) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var8 = _closure1_slot16;
            var4 = var8.getStatus;
            var8 = var4.bind(var8)();
            var4 = _closure1_slot25;
            var4 = var4.DND;
            var5 = var8 === var4;
case 52:
            var4 = !var5;
            if(var5) { _fun0004_ip = 54; continue _fun0004 }
case 55:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 18;
            var5 = var11[var5];
            var5 = var8.bind(var10)(var5);
            var8 = var5.FocusMode;
            var5 = var8.getSetting;
            var5 = var5.bind(var8)();
            var5 = !var5;
            if(!var5) { _fun0004_ip = 56; continue _fun0004 }
case 57:
            var6 = var6.ignoreNoMessagesSetting;
            var6 = !var6;
            if(!var6) { _fun0004_ip = 58; continue _fun0004 }
case 59:
            var8 = _closure1_slot17;
            var7 = var8.allowNoMessages;
            var6 = var7.bind(var8)(var9);
case 58:
            var5 = !var6;
case 56:
            var4 = var5;
case 54:
            var3 = var4;
case 50:
            var2 = var3;
case 48:
            var1 = var2;
case 44:
            return var1;
case 40:
            var1 = false;
            return var1;
case 38:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot31 = var5;
    var1 = function getInviteEmbedFormatString(arg1, arg2, arg3, arg4) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = _closure1_slot21;
            var2 = var2.GUILD_ANNOUNCEMENT;
            if(!(var2 !== var3)) { _fun0005_ip = 60; continue _fun0005 }
case 61:
            var2 = _closure1_slot21;
            var2 = var2.GUILD_TEXT;
            if(!(var2 !== var3)) { _fun0005_ip = 60; continue _fun0005 }
case 62:
            var2 = _closure1_slot21;
            var2 = var2.GROUP_DM;
            if(!(var2 !== var3)) { _fun0005_ip = 63; continue _fun0005 }
case 64:
            var1 = _closure1_slot21;
            var1 = var1.DM;
            var1 = arg4;
            return var1;
case 63:
            var1 = arg3;
            return var1;
case 60:
            var1 = arg2;
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var9 = var4.GUILD_VOCAL_CHANNEL_TYPES;
    var _closure1_slot7 = var9;
    var4 = var4.THREAD_CHANNEL_TYPES;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 13;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot17 = var4;
    var4 = 14;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot18 = var4;
    var4 = 15;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot19 = var4;
    var4 = 16;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var6 = var4.ActivityActionTypes;
    var _closure1_slot20 = var6;
    var6 = var4.ChannelTypes;
    var _closure1_slot21 = var6;
    var6 = var4.MessageFlags;
    var _closure1_slot22 = var6;
    var6 = var4.MessageTypes;
    var _closure1_slot23 = var6;
    var6 = var4.MessageTypesSets;
    var _closure1_slot24 = var6;
    var6 = var4.StatusTypes;
    var _closure1_slot25 = var6;
    var4 = var4.UserFlags;
    var _closure1_slot26 = var4;
    var4 = 17;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.ThreadMemberFlags;
    var _closure1_slot27 = var4;
    var4 = function renderTitle(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var11 = arg3;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 22;
            var4 = var3[var2];
            var10 = undefined;
            var7 = var6.bind(var10)(var4);
            var5 = var7.isolate;
            var4 = arg1;
            var7 = var5.bind(var7)(var4);
            var4 = var3[var2];
            var5 = var6.bind(var10)(var4);
            var4 = var5.isolate;
            var12 = 23;
            var3 = var3[var12];
            var14 = var6.bind(var10)(var3);
            var13 = var14.computeChannelName;
            var18 = _closure1_slot18;
            var17 = _closure1_slot13;
            var19 = arg2;
            var16 = true;
            var20 = var14;
            var3 = var20[var13](var19, var18, var17, var16, var15);
            var6 = var4.bind(var5)(var3);
            var3 = null;
            var3 = var3 != var11;
            var5 = '';
            var4 = var5;
            if(!var3) { _fun0006_ip = 65; continue _fun0006 }
case 66:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = var8[var2];
            var3 = var9.bind(var10)(var2);
            var2 = var3.isolate;
            var8 = var8[var12];
            var10 = var9.bind(var10)(var8);
            var9 = var10.computeChannelName;
            var8 = _closure1_slot18;
            var1 = _closure1_slot13;
            var1 = var9.bind(var10)(var11, var8, var1);
            var3 = var2.bind(var3)(var1);
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = ', ';
            var4 = var2.bind(var1)(var3);
case 65:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var18 = ' (';
            var15 = ')';
            var20 = var5;
            var19 = var7;
            var17 = var6;
            var16 = var4;
            var1 = var20[var3](var19, var18, var17, var16, var15, var14);
            return var1;
        }
    };
    var _closure1_slot28 = var4;
    var6 = 35;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/notifications/NotificationTextUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['shouldNotifyBase'] = var5;
    var5 = function shouldNotify(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var7 = arg1;
            var2 = arg2;
            var1 = arguments[2];
            var12 = arguments[3];
            var13 = arguments[4];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0007_ip = 31; continue _fun0007 }
case 67:
            var1 = true;
case 31:
            if(!(var12 === var5)) { _fun0007_ip = 68; continue _fun0007 }
case 69:
            var12 = false;
case 68:
            if(!(var13 === var5)) { _fun0007_ip = 70; continue _fun0007 }
case 33:
            var13 = false;
case 70:
            var3 = var7.flags;
            var8 = null;
            if(!(var8 != var3)) { _fun0007_ip = 71; continue _fun0007 }
case 2:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 19;
            var4 = var9[var4];
            var9 = var6.bind(var5)(var4);
            var6 = var9.hasFlag;
            var4 = var7.flags;
            var3 = _closure1_slot22;
            var3 = var3.SUPPRESS_NOTIFICATIONS;
            var3 = var6.bind(var9)(var4, var3);
            if(var3) { _fun0007_ip = 72; continue _fun0007 }
case 71:
            var6 = _closure1_slot10;
            var4 = var6.getChannel;
            var11 = var4.bind(var6)(var2);
            var9 = var7.type;
            var4 = _closure1_slot23;
            var6 = var4.THREAD_STARTER_MESSAGE;
            var4 = var11;
            if(!(var9 === var6)) { _fun0007_ip = 73; continue _fun0007 }
case 74:
            var10 = _closure1_slot10;
            var9 = var10.getChannel;
            var14 = var8 == var11;
            var6 = undefined;
            if(var14) { _fun0007_ip = 75; continue _fun0007 }
case 76:
            var6 = var11.parent_id;
case 75:
            var4 = var9.bind(var10)(var6);
case 73:
            var11 = _closure1_slot18;
            var6 = var11.getCurrentUser;
            var6 = var6.bind(var11)();
            var10 = var11.getUser;
            var14 = var7.author;
            var15 = var8 == var14;
            var9 = undefined;
            if(var15) { _fun0007_ip = 77; continue _fun0007 }
case 78:
            var9 = var14.id;
case 77:
            var11 = var10.bind(var11)(var9);
            if(!(var8 != var4)) { _fun0007_ip = 79; continue _fun0007 }
case 80:
            if(!(var8 != var6)) { _fun0007_ip = 79; continue _fun0007 }
case 81:
            if(!(var8 != var11)) { _fun0007_ip = 79; continue _fun0007 }
case 82:
            var10 = var4.type;
            var9 = _closure1_slot21;
            var9 = var9.GROUP_DM;
            if(!(var10 === var9)) { _fun0007_ip = 83; continue _fun0007 }
case 84:
            var10 = var7.type;
            var9 = _closure1_slot23;
            var9 = var9.RECIPIENT_REMOVE;
            if(!(var10 !== var9)) { _fun0007_ip = 85; continue _fun0007 }
case 83:
            var10 = _closure1_slot19;
            var9 = var10.areSlayerNotificationsSuppressed;
            var9 = var9.bind(var10)();
            if(!var9) { _fun0007_ip = 86; continue _fun0007 }
case 87:
            var10 = var4.type;
            var9 = _closure1_slot21;
            var9 = var9.DM;
            var9 = var10 === var9;
            if(var9) { _fun0007_ip = 88; continue _fun0007 }
case 89:
            var10 = var4.linkedLobby;
            var9 = var8 != var10;
case 88:
            if(var9) { _fun0007_ip = 90; continue _fun0007 }
case 86:
            var10 = _closure1_slot31;
            var9 = {};
            var9['ignoreStatus'] = var12;
            var12 = _closure1_slot24;
            var15 = var12.SELF_MENTIONABLE_SYSTEM;
            var14 = var15.has;
            var12 = var7.type;
            var12 = var14.bind(var15)(var12);
            if(var12) { _fun0007_ip = 91; continue _fun0007 }
case 92:
            var12 = var13;
case 91:
            var9['ignoreSameUser'] = var12;
            var20 = undefined;
            var19 = var6;
            var18 = var11;
            var17 = var4;
            var16 = var9;
            var9 = var20[var10](var19, var18, var17, var16, var15);
            if(var9) { _fun0007_ip = 93; continue _fun0007 }
case 94:
            var9 = false;
            return var9;
case 93:
            var10 = _closure1_slot5;
            var9 = var10.isMessageRequest;
            var9 = var9.bind(var10)(var2);
            if(var9) { _fun0007_ip = 95; continue _fun0007 }
case 96:
            if(var1) { _fun0007_ip = 97; continue _fun0007 }
case 98:
            var10 = _closure1_slot14;
            var9 = var10.getChannelId;
            var11 = _closure1_slot15;
            var1 = var11.getGuildId;
            var1 = var1.bind(var11)();
            var10 = var9.bind(var10)(var1);
            var1 = var4.id;
            if(!(var10 !== var1)) { _fun0007_ip = 99; continue _fun0007 }
case 100:
            var9 = _closure1_slot9;
            var1 = var9.getCurrentSidebarChannelId;
            var9 = var1.bind(var9)(var10);
            var1 = var4.id;
            if(!(var9 === var1)) { _fun0007_ip = 97; continue _fun0007 }
case 101:
            var1 = false;
            return var1;
case 99:
            var1 = false;
            return var1;
case 97:
            var9 = _closure1_slot13;
            var1 = var9.isBlockedOrIgnoredForMessage;
            var1 = var1.bind(var9)(var7);
            if(var1) { _fun0007_ip = 102; continue _fun0007 }
case 103:
            var1 = var7.activity_instance;
            if(!(var5 !== var1)) { _fun0007_ip = 104; continue _fun0007 }
case 105:
            var1 = var7.interaction;
            if(!(var8 != var1)) { _fun0007_ip = 104; continue _fun0007 }
case 106:
            var1 = var7.interaction;
            var1 = var1.user;
            var9 = var1.id;
            var1 = var6.id;
            if(!(var9 !== var1)) { _fun0007_ip = 107; continue _fun0007 }
case 104:
            var1 = var7.application_id;
            if(!(var8 != var1)) { _fun0007_ip = 108; continue _fun0007 }
case 109:
            var9 = _closure1_slot3;
            var1 = var9.getCurrentEmbeddedActivity;
            var1 = var1.bind(var9)();
            var8 = var8 == var1;
            var9 = undefined;
            if(var8) { _fun0007_ip = 110; continue _fun0007 }
case 111:
            var9 = var1.applicationId;
case 110:
            var8 = var7.application_id;
            if(!(var9 === var8)) { _fun0007_ip = 108; continue _fun0007 }
case 112:
            var1 = var1.location;
            var1 = var1.channel_id;
            if(!(var1 !== var2)) { _fun0007_ip = 113; continue _fun0007 }
case 108:
            var8 = _closure1_slot8;
            var2 = var8.has;
            var1 = var4.type;
            var1 = var2.bind(var8)(var1);
            if(var1) { _fun0007_ip = 114; continue _fun0007 }
case 115:
            var8 = _closure1_slot7;
            var2 = var8.has;
            var1 = var4.type;
            var1 = var2.bind(var8)(var1);
            var1 = !var1;
            if(var1) { _fun0007_ip = 116; continue _fun0007 }
case 117:
            var8 = _closure1_slot12;
            var2 = var8.getChannelId;
            var8 = var2.bind(var8)();
            var2 = var4.id;
            var1 = var8 === var2;
case 116:
            var8 = _closure1_slot17;
            var2 = var8.allowAllMessages;
            var2 = var2.bind(var8)(var4);
            if(!var2) { _fun0007_ip = 118; continue _fun0007 }
case 119:
            if(var1) { _fun0007_ip = 120; continue _fun0007 }
case 118:
            var8 = _closure1_slot17;
            var2 = var8.isSuppressEveryoneEnabled;
            var1 = var4.getGuildId;
            var1 = var1.bind(var4)();
            var10 = var2.bind(var8)(var1);
            var8 = _closure1_slot17;
            var2 = var8.isSuppressRolesEnabled;
            var1 = var4.getGuildId;
            var1 = var1.bind(var4)();
            var9 = var2.bind(var8)(var1);
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 21;
            var1 = var8[var1];
            var8 = var2.bind(var5)(var1);
            var2 = var8.isRawMessageMentioned;
            var1 = {};
            var1['rawMessage'] = var7;
            var11 = var6.id;
            var1['userId'] = var11;
            var1['suppressEveryone'] = var10;
            var1['suppressRoles'] = var9;
            var1 = var2.bind(var8)(var1);
            return var1;
case 120:
            var1 = true;
            return var1;
case 114:
            var8 = _closure1_slot6;
            var2 = var8.isMuted;
            var1 = var4.id;
            var1 = var2.bind(var8)(var1);
            if(var1) { _fun0007_ip = 121; continue _fun0007 }
case 122:
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 20;
            var1 = var8[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.computeThreadNotificationSetting;
            var4 = var1.bind(var2)(var4);
            var1 = _closure1_slot27;
            var1 = var1.NO_MESSAGES;
            var1 = var4 !== var1;
            if(!var1) { _fun0007_ip = 123; continue _fun0007 }
case 124:
            var2 = _closure1_slot27;
            var2 = var2.ALL_MESSAGES;
            var2 = var4 === var2;
            if(var2) { _fun0007_ip = 125; continue _fun0007 }
case 126:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 21;
            var3 = var8[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.isRawMessageMentioned;
            var3 = {};
            var3['rawMessage'] = var7;
            var6 = var6.id;
            var3['userId'] = var6;
            var6 = false;
            var3['suppressEveryone'] = var6;
            var3['suppressRoles'] = var6;
            var2 = var4.bind(var5)(var3);
case 125:
            var1 = var2;
case 123:
            return var1;
case 121:
            var1 = false;
            return var1;
case 113:
            var1 = false;
            return var1;
case 107:
            var1 = false;
            return var1;
case 102:
            var1 = false;
            return var1;
case 95:
            var1 = false;
            return var1;
case 90:
            var1 = false;
            return var1;
case 85:
            var1 = false;
            return var1;
case 79:
            var1 = false;
            return var1;
case 72:
            var1 = false;
            return var1;
        }
    };
    var3['shouldNotify'] = var5;
    var5 = function shouldNotifyForSelectedChannel(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var9 = arg1;
            var3 = arg2;
            var4 = _closure1_slot14;
            var2 = var4.getChannelId;
            var5 = _closure1_slot15;
            var1 = var5.getGuildId;
            var1 = var1.bind(var5)();
            var1 = var2.bind(var4)(var1);
            if(!(var1 === var3)) { _fun0008_ip = 127; continue _fun0008 }
case 128:
            var2 = _closure1_slot10;
            var1 = var2.getChannel;
            var4 = var1.bind(var2)(var3);
            var2 = var9.type;
            var1 = _closure1_slot23;
            var1 = var1.THREAD_STARTER_MESSAGE;
            var10 = var4;
            if(!(var2 === var1)) { _fun0008_ip = 129; continue _fun0008 }
case 130:
            var3 = _closure1_slot10;
            var2 = var3.getChannel;
            var1 = null;
            var5 = var1 == var4;
            var1 = undefined;
            if(var5) { _fun0008_ip = 131; continue _fun0008 }
case 132:
            var1 = var4.parent_id;
case 131:
            var10 = var2.bind(var3)(var1);
case 129:
            var4 = _closure1_slot18;
            var1 = var4.getCurrentUser;
            var5 = var1.bind(var4)();
            var3 = var4.getUser;
            var6 = var9.author;
            var2 = null;
            var7 = var2 == var6;
            var11 = undefined;
            var1 = undefined;
            if(var7) { _fun0008_ip = 133; continue _fun0008 }
case 134:
            var1 = var6.id;
case 133:
            var6 = var3.bind(var4)(var1);
            var1 = var2 != var10;
            if(!var1) { _fun0008_ip = 135; continue _fun0008 }
case 136:
            var1 = var2 != var5;
case 135:
            if(!var1) { _fun0008_ip = 137; continue _fun0008 }
case 138:
            var1 = var2 != var6;
case 137:
            if(!var1) { _fun0008_ip = 139; continue _fun0008 }
case 140:
            var2 = var10.isManaged;
            var2 = var2.bind(var10)();
            var2 = !var2;
            if(!var2) { _fun0008_ip = 141; continue _fun0008 }
case 142:
            var4 = var6.hasFlag;
            var3 = _closure1_slot26;
            var3 = var3.SPAMMER;
            var3 = var4.bind(var6)(var3);
            var3 = !var3;
            if(!var3) { _fun0008_ip = 143; continue _fun0008 }
case 144:
            var7 = _closure1_slot13;
            var4 = var7.isBlockedOrIgnoredForMessage;
            var4 = var4.bind(var7)(var9);
            var4 = !var4;
            if(!var4) { _fun0008_ip = 145; continue _fun0008 }
case 84:
            var6 = var6.id;
            var5 = var5.id;
            var5 = var6 !== var5;
            if(!var5) { _fun0008_ip = 146; continue _fun0008 }
case 147:
            var7 = _closure1_slot16;
            var6 = var7.getStatus;
            var7 = var6.bind(var7)();
            var6 = _closure1_slot25;
            var6 = var6.DND;
            var6 = var7 !== var6;
            if(!var6) { _fun0008_ip = 148; continue _fun0008 }
case 149:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 18;
            var7 = var12[var7];
            var7 = var9.bind(var11)(var7);
            var9 = var7.FocusMode;
            var7 = var9.getSetting;
            var7 = var7.bind(var9)();
            var7 = !var7;
            if(!var7) { _fun0008_ip = 150; continue _fun0008 }
case 151:
            var9 = _closure1_slot17;
            var8 = var9.allowNoMessages;
            var8 = var8.bind(var9)(var10);
            var7 = !var8;
case 150:
            var6 = var7;
case 148:
            var5 = var6;
case 146:
            var4 = var5;
case 145:
            var3 = var4;
case 143:
            var2 = var3;
case 141:
            var1 = var2;
case 139:
            return var1;
case 127:
            var1 = false;
            return var1;
        }
    };
    var3['shouldNotifyForSelectedChannel'] = var5;
    var5 = function shouldNotifyForForumThreadCreation(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var7 = arg2;
            var4 = arguments[2];
            var10 = arguments[3];
            var9 = undefined;
            if(!(var4 === var9)) { _fun0009_ip = 36; continue _fun0009 }
case 37:
            var4 = true;
case 36:
            if(!(var10 === var9)) { _fun0009_ip = 31; continue _fun0009 }
case 67:
            var10 = false;
case 31:
            var3 = _closure1_slot18;
            var1 = var3.getCurrentUser;
            var8 = var1.bind(var3)();
            var2 = var3.getUser;
            var1 = arg1;
            var1 = var1.ownerId;
            var6 = var2.bind(var3)(var1);
            var2 = null;
            var1 = var2 != var7;
            if(!var1) { _fun0009_ip = 152; continue _fun0009 }
case 63:
            var1 = var2 != var8;
case 152:
            if(!var1) { _fun0009_ip = 153; continue _fun0009 }
case 154:
            var1 = var2 != var6;
case 153:
            if(!var1) { _fun0009_ip = 155; continue _fun0009 }
case 156:
            var3 = _closure1_slot31;
            var2 = {};
            var2['ignoreStatus'] = var10;
            var10 = true;
            var2['ignoreNoMessagesSetting'] = var10;
            var15 = undefined;
            var14 = var8;
            var13 = var6;
            var12 = var7;
            var11 = var2;
            var3 = var15[var3](var14, var13, var12, var11, var10);
            var2 = !var3;
            var2 = !var2;
            if(!var3) { _fun0009_ip = 144; continue _fun0009 }
case 157:
            var9 = _closure1_slot17;
            var8 = var9.isGuildOrCategoryOrChannelMuted;
            var6 = var7.guild_id;
            var3 = var7.id;
            var3 = var8.bind(var9)(var6, var3);
            var3 = !var3;
            if(!var3) { _fun0009_ip = 158; continue _fun0009 }
case 159:
            var6 = !var4;
            if(!var6) { _fun0009_ip = 160; continue _fun0009 }
case 161:
            var9 = _closure1_slot14;
            var8 = var9.getChannelId;
            var10 = _closure1_slot15;
            var4 = var10.getGuildId;
            var4 = var4.bind(var10)();
            var8 = var8.bind(var9)(var4);
            var4 = var7.id;
            var6 = var8 === var4;
case 160:
            var4 = !var6;
            if(var6) { _fun0009_ip = 162; continue _fun0009 }
case 163:
            var6 = _closure1_slot17;
            var5 = var6.getNewForumThreadsCreated;
            var4 = var5.bind(var6)(var7);
case 162:
            var3 = var4;
case 158:
            var2 = var3;
case 144:
            var1 = var2;
case 155:
            return var1;
        }
    };
    var3['shouldNotifyForForumThreadCreation'] = var5;
    var5 = function shouldNotifyVoiceStatus(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = _closure1_slot18;
            var1 = var3.getCurrentUser;
            var6 = var1.bind(var3)();
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0010_ip = 164; continue _fun0010 }
case 61:
            var5 = _closure1_slot31;
            var4 = undefined;
            var3 = arg1;
            var2 = arg2;
            var1 = var5.bind(var4)(var6, var3, var2);
case 164:
            return var1;
        }
    };
    var3['shouldNotifyVoiceStatus'] = var5;
    var3['renderTitle'] = var4;
    var4 = function makeTextChatNotification(arg1, arg2, arg3) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var8 = arg1;
            var1 = arg2;
            var11 = arg3;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 26;
            var3 = var4[var3];
            var4 = undefined;
            var7 = var5.bind(var4)(var3);
            var6 = var7.getName;
            var3 = var8.getGuildId;
            var5 = var3.bind(var8)();
            var3 = var8.id;
            var15 = var6.bind(var7)(var5, var3, var11);
            var5 = var8.type;
            var3 = _closure1_slot21;
            var3 = var3.GUILD_ANNOUNCEMENT;
            if(!(var3 !== var5)) { _fun0011_ip = 165; continue _fun0011 }
case 166:
            var3 = _closure1_slot21;
            var3 = var3.GUILD_TEXT;
            if(!(var3 !== var5)) { _fun0011_ip = 165; continue _fun0011 }
case 132:
            var3 = _closure1_slot21;
            var3 = var3.GUILD_VOICE;
            if(!(var3 !== var5)) { _fun0011_ip = 165; continue _fun0011 }
case 47:
            var3 = _closure1_slot21;
            var3 = var3.ANNOUNCEMENT_THREAD;
            if(!(var3 !== var5)) { _fun0011_ip = 165; continue _fun0011 }
case 46:
            var3 = _closure1_slot21;
            var3 = var3.PUBLIC_THREAD;
            if(!(var3 !== var5)) { _fun0011_ip = 165; continue _fun0011 }
case 167:
            var3 = _closure1_slot21;
            var3 = var3.PRIVATE_THREAD;
            if(!(var3 !== var5)) { _fun0011_ip = 165; continue _fun0011 }
case 168:
            var3 = _closure1_slot21;
            var3 = var3.GROUP_DM;
            var7 = var15;
            if(!(var3 === var5)) { _fun0011_ip = 169; continue _fun0011 }
case 170:
            var3 = var8.isManaged;
            var3 = var3.bind(var8)();
            if(!var3) { _fun0011_ip = 22; continue _fun0011 }
case 171:
            var3 = var11.bot;
case 22:
            if(!var3) { _fun0011_ip = 172; continue _fun0011 }
case 173:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 23;
            var5 = var9[var5];
            var10 = var6.bind(var4)(var5);
            var9 = var10.computeChannelName;
            var6 = _closure1_slot18;
            var5 = _closure1_slot13;
            var5 = var9.bind(var10)(var8, var6, var5);
            var3 = var15 === var5;
case 172:
            var7 = var15;
            if(var3) { _fun0011_ip = 169; continue _fun0011 }
case 174:
            var3 = _closure1_slot28;
            var7 = var3.bind(var4)(var15, var8);
            _fun0011_ip = 169; continue _fun0011;
case 165:
            var6 = _closure1_slot10;
            var5 = var6.getChannel;
            var3 = var8.parent_id;
            var6 = var5.bind(var6)(var3);
            var5 = var1.type;
            var3 = _closure1_slot23;
            var3 = var3.THREAD_STARTER_MESSAGE;
            if(!(var5 === var3)) { _fun0011_ip = 175; continue _fun0011 }
case 176:
            var3 = null;
            if(!(var3 == var6)) { _fun0011_ip = 177; continue _fun0011 }
case 175:
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 27;
            var3 = var9[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)(var1);
            if(var3) { _fun0011_ip = 178; continue _fun0011 }
case 179:
            var3 = _closure1_slot28;
            var7 = var3.bind(var4)(var15, var8, var6);
            _fun0011_ip = 169; continue _fun0011;
case 178:
            var9 = _closure1_slot11;
            var5 = var9.getGuild;
            var3 = var8.getGuildId;
            var3 = var3.bind(var8)();
            var5 = var5.bind(var9)(var3);
            var3 = null;
            var7 = var15;
            if(!(var3 != var5)) { _fun0011_ip = 169; continue _fun0011 }
case 180:
            var3 = _closure1_slot28;
            var7 = var3.bind(var4)(var15, var8, var6);
            _fun0011_ip = 169; continue _fun0011;
case 177:
            var5 = _closure1_slot28;
            var10 = _closure1_slot10;
            var9 = var10.getChannel;
            var3 = var6.parent_id;
            var3 = var9.bind(var10)(var3);
            var7 = var5.bind(var4)(var15, var6, var3);
case 169:
            var18 = var1.content;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 27;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)(var1);
            if(!var3) { _fun0011_ip = 181; continue _fun0011 }
case 182:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 28;
            var3 = var6[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.stringify;
            var18 = var3.bind(var5)(var1, var8);
            var3 = null;
            if(!(var3 != var18)) { _fun0011_ip = 183; continue _fun0011 }
case 181:
            var3 = 'sticker_items';
            var3 = var3 in var1;
            if(var3) { _fun0011_ip = 184; continue _fun0011 }
case 185:
            var3 = 'stickerItems';
            var3 = var3 in var1;
            if(var3) { _fun0011_ip = 186; continue _fun0011 }
case 187:
            var16 = var1.stickers;
            _fun0011_ip = 188; continue _fun0011;
case 186:
            var16 = var1.stickerItems;
case 188:
            _fun0011_ip = 189; continue _fun0011;
case 184:
            var16 = var1.sticker_items;
case 189:
            var3 = new Array(0);
            var5 = 'message_reference';
            var5 = var5 in var1;
            if(var5) { _fun0011_ip = 190; continue _fun0011 }
case 191:
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 30;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.bind(var4)(var1);
            _fun0011_ip = 192; continue _fun0011;
case 190:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 30;
            var6 = var10[var6];
            var9 = var9.bind(var4)(var6);
            var6 = var9.isForwardServerMessage;
            var5 = var6.bind(var9)(var1);
case 192:
            if(var5) { _fun0011_ip = 193; continue _fun0011 }
case 194:
            var5 = var1.activity;
            var9 = null;
            if(!(var9 != var5)) { _fun0011_ip = 195; continue _fun0011 }
case 196:
            var5 = var1.application;
            if(!(var9 == var5)) { _fun0011_ip = 197; continue _fun0011 }
case 195:
            var5 = var1.activity;
            if(!(var9 != var5)) { _fun0011_ip = 198; continue _fun0011 }
case 199:
            var5 = var1.activity;
            var6 = var5.type;
            var5 = _closure1_slot20;
            var5 = var5.LISTEN;
            if(!(var6 !== var5)) { _fun0011_ip = 200; continue _fun0011 }
case 198:
            if(!(var9 != var16)) { _fun0011_ip = 201; continue _fun0011 }
case 202:
            var5 = var16.length;
            var14 = 0;
            if(!(!(var5 > var14))) { _fun0011_ip = 203; continue _fun0011 }
case 201:
            var6 = var1.type;
            var5 = _closure1_slot23;
            var5 = var5.PREMIUM_REFERRAL;
            if(!(var6 !== var5)) { _fun0011_ip = 204; continue _fun0011 }
case 205:
            var5 = var1.poll;
            if(!(var9 == var5)) { _fun0011_ip = 206; continue _fun0011 }
case 207:
            var6 = var1.type;
            var5 = _closure1_slot23;
            var5 = var5.POLL_RESULT;
            if(!(var6 !== var5)) { _fun0011_ip = 208; continue _fun0011 }
case 209:
            var5 = var1.components;
            if(!(var9 != var5)) { _fun0011_ip = 210; continue _fun0011 }
case 211:
            var5 = var1.components;
            var5 = var5.length;
            var6 = 0;
            if(!(var5 > var6)) { _fun0011_ip = 210; continue _fun0011 }
case 212:
            var5 = var1.components;
            var5 = var5[var6];
            var6 = var5.type;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 32;
            var5 = var12[var5];
            var5 = var10.bind(var4)(var5);
            var5 = var5.ComponentType;
            var5 = var5.CHECKPOINT_CARD;
            if(!(var6 !== var5)) { _fun0011_ip = 213; continue _fun0011 }
case 210:
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 33;
            var5 = var10[var5];
            var12 = var6.bind(var4)(var5);
            var10 = var12.unparseWithMeta;
            var6 = var8.id;
            var5 = true;
            var5 = var10.bind(var12)(var18, var6, var5);
            var17 = var5.content;
            var19 = var5.emoji;
            var10 = var18.length;
            var13 = 0;
            var6 = var17;
            var5 = var19;
            if(!(var13 !== var10)) { _fun0011_ip = 214; continue _fun0011 }
case 215:
            var12 = var8.type;
            var10 = _closure1_slot21;
            var10 = var10.DM;
            var6 = var17;
            var5 = var19;
            if(!(var12 === var10)) { _fun0011_ip = 214; continue _fun0011 }
case 216:
            var10 = var11.bot;
            var6 = var17;
            var5 = var19;
            if(var10) { _fun0011_ip = 214; continue _fun0011 }
case 217:
            var12 = var18.startsWith;
            var10 = '> -# *';
            var10 = var12.bind(var18)(var10);
            var6 = var17;
            var5 = var19;
            if(!var10) { _fun0011_ip = 214; continue _fun0011 }
case 113:
            var12 = var17.substring;
            var10 = 1;
            var12 = var12.bind(var17)(var13, var10);
            var13 = var17.substring;
            var10 = 4;
            var10 = var13.bind(var17)(var10);
            var18 = var12 + var10;
            var10 = _closure1_slot29;
            var17 = var10.bind(var4)(var19);
            var12 = var17.bind(var4)();
            var10 = var12.done;
            var13 = 2;
            var6 = var18;
            var5 = var19;
            if(var10) { _fun0011_ip = 214; continue _fun0011 }
case 218:
            var20 = var12.value;
            var10 = var20.position;
            var10 = var10 - var13;
            var20['position'] = var10;
            var20 = var17.bind(var4)();
            var10 = var20.done;
            var12 = var20;
            var6 = var18;
            var5 = var19;
            if(var10) { _fun0011_ip = 214; continue _fun0011 }
case 219:
            _fun0011_ip = 218; continue _fun0011;
case 213:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var10 = 24;
            var12 = var18[var10];
            var12 = var17.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var10 = var18[var10];
            var10 = var17.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.HWnMTQ;
            var6 = var12.bind(var13)(var10);
            var5 = var3;
            _fun0011_ip = 214; continue _fun0011;
case 208:
            var13 = var1.embeds;
            var12 = var9 == var13;
            var10 = undefined;
            if(var12) { _fun0011_ip = 220; continue _fun0011 }
case 221:
            var12 = 0;
            var12 = var13[var12];
            var13 = var9 == var12;
            var10 = undefined;
            if(var13) { _fun0011_ip = 220; continue _fun0011 }
case 222:
            var17 = var12.fields;
            var12 = var9 == var17;
            var10 = undefined;
            if(var12) { _fun0011_ip = 220; continue _fun0011 }
case 223:
            var13 = var17.find;
            var12 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = arg1;
                    var2 = 'name';
                    var2 = var2 in var1;
                    if(var2) { _fun0012_ip = 224; continue _fun0012 }
case 32:
                    var2 = var1.rawName;
                    _fun0012_ip = 69; continue _fun0012;
case 224:
                    var2 = var1.name;
case 69:
                    var1 = 'poll_question_text';
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var10 = var13.bind(var17)(var12);
case 220:
            var9 = var9 != var10;
            var17 = '';
            if(!var9) { _fun0011_ip = 225; continue _fun0011 }
case 226:
            var9 = 'value';
            var9 = var9 in var10;
            if(var9) { _fun0011_ip = 227; continue _fun0011 }
case 228:
            var9 = var10.rawValue;
            _fun0011_ip = 229; continue _fun0011;
case 227:
            var9 = var10.value;
case 229:
            var17 = var9;
case 225:
            var10 = _closure1_slot0;
            var18 = _closure1_slot2;
            var9 = 24;
            var12 = var18[var9];
            var12 = var10.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var9 = var18[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.t;
            var10 = var9.9WrecI;
            var9 = {};
            var9['question'] = var17;
            var6 = var12.bind(var13)(var10, var9);
            var5 = var3;
            _fun0011_ip = 214; continue _fun0011;
case 206:
            var10 = _closure1_slot0;
            var17 = _closure1_slot2;
            var9 = 24;
            var12 = var17[var9];
            var12 = var10.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var9 = var17[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.t;
            var10 = var9.ImizdM;
            var9 = {};
            var17 = var1.poll;
            var17 = var17.question;
            var17 = var17.text;
            var9['question'] = var17;
            var6 = var12.bind(var13)(var10, var9);
            var5 = var3;
            _fun0011_ip = 214; continue _fun0011;
case 204:
            var10 = _closure1_slot0;
            var19 = _closure1_slot2;
            var9 = 24;
            var12 = var19[var9];
            var12 = var10.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var9 = var19[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.t;
            var10 = var9.lieTqU;
            var9 = {};
            var18 = _closure1_slot1;
            var17 = 31;
            var17 = var19[var17];
            var18 = var18.bind(var4)(var17);
            var17 = var18.getName;
            var17 = var17.bind(var18)(var11);
            var9['username'] = var17;
            var6 = var12.bind(var13)(var10, var9);
            var5 = var3;
            _fun0011_ip = 214; continue _fun0011;
case 203:
            var10 = _closure1_slot0;
            var17 = _closure1_slot2;
            var9 = 24;
            var12 = var17[var9];
            var12 = var10.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var9 = var17[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.t;
            var10 = var9.zY4v1B;
            var9 = {};
            var14 = var16[var14];
            var14 = var14.name;
            var9['stickerName'] = var14;
            var6 = var12.bind(var13)(var10, var9);
            var5 = var3;
            _fun0011_ip = 214; continue _fun0011;
case 200:
            var17 = _closure1_slot32;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 24;
            var13 = var12[var9];
            var13 = var10.bind(var4)(var13);
            var13 = var13.t;
            var23 = var13.SaDdmN;
            var13 = var12[var9];
            var13 = var10.bind(var4)(var13);
            var13 = var13.t;
            var22 = var13.qsODhp;
            var13 = var12[var9];
            var13 = var10.bind(var4)(var13);
            var13 = var13.t;
            var21 = var13.WeiMTW;
            var25 = undefined;
            var24 = var8;
            var13 = var25[var17](var24, var23, var22, var21, var20);
            var9 = var12[var9];
            var9 = var10.bind(var4)(var9);
            var12 = var9.intl;
            var10 = var12.formatToPlainString;
            var9 = {};
            var9['user'] = var15;
            var6 = var10.bind(var12)(var13, var9);
            var5 = var3;
            _fun0011_ip = 214; continue _fun0011;
case 197:
            var9 = var1.activity;
            var10 = var9.type;
            var9 = _closure1_slot20;
            var9 = var9.JOIN;
            if(!(var10 !== var9)) { _fun0011_ip = 230; continue _fun0011 }
case 231:
            var9 = var1.activity;
            var12 = var9.type;
            var9 = _closure1_slot20;
            var10 = var9.JOIN_REQUEST;
            var9 = '';
            if(!(var12 === var10)) { _fun0011_ip = 232; continue _fun0011 }
case 233:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var10 = 24;
            var12 = var19[var10];
            var12 = var18.bind(var4)(var12);
            var14 = var12.intl;
            var13 = var14.formatToPlainString;
            var17 = _closure1_slot32;
            var12 = var19[var10];
            var12 = var18.bind(var4)(var12);
            var12 = var12.t;
            var23 = var12./TD0la;
            var12 = var19[var10];
            var12 = var18.bind(var4)(var12);
            var12 = var12.t;
            var22 = var12./TD0la;
            var10 = var19[var10];
            var10 = var18.bind(var4)(var10);
            var10 = var10.t;
            var21 = var10./TD0la;
            var25 = undefined;
            var24 = var8;
            var12 = var25[var17](var24, var23, var22, var21, var20);
            var10 = {};
            var10['user'] = var15;
            var16 = var1.application;
            var16 = var16.name;
            var10['game'] = var16;
            var9 = var13.bind(var14)(var12, var10);
case 232:
            _fun0011_ip = 234; continue _fun0011;
case 230:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var10 = 24;
            var12 = var19[var10];
            var12 = var18.bind(var4)(var12);
            var14 = var12.intl;
            var13 = var14.formatToPlainString;
            var17 = _closure1_slot32;
            var12 = var19[var10];
            var12 = var18.bind(var4)(var12);
            var12 = var12.t;
            var23 = var12.E8CgCh;
            var12 = var19[var10];
            var12 = var18.bind(var4)(var12);
            var12 = var12.t;
            var22 = var12.c6KHWJ;
            var10 = var19[var10];
            var10 = var18.bind(var4)(var10);
            var10 = var10.t;
            var21 = var10.Fy7rJN;
            var25 = undefined;
            var24 = var8;
            var12 = var25[var17](var24, var23, var22, var21, var20);
            var10 = {};
            var10['user'] = var15;
            var15 = var1.application;
            var15 = var15.name;
            var10['game'] = var15;
            var9 = var13.bind(var14)(var12, var10);
case 234:
            var6 = var9;
            var5 = var3;
            _fun0011_ip = 214; continue _fun0011;
case 193:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 24;
            var10 = var14[var9];
            var10 = var13.bind(var4)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var9 = var14[var9];
            var9 = var13.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.9ddYKt;
            var6 = var10.bind(var12)(var9);
            var5 = var3;
case 214:
            var3 = var6.length;
            var12 = 0;
            if(!(var12 === var3)) { _fun0011_ip = 235; continue _fun0011 }
case 236:
            var3 = var1.embeds;
            if(!(var4 !== var3)) { _fun0011_ip = 237; continue _fun0011 }
case 238:
            var3 = var1.embeds;
            var3 = var3.length;
            if(!(var3 > var12)) { _fun0011_ip = 237; continue _fun0011 }
case 239:
            var3 = var1.embeds;
            var9 = var3[var12];
            var3 = 'description';
            var3 = var3 in var9;
            if(var3) { _fun0011_ip = 240; continue _fun0011 }
case 241:
            var15 = var9.rawDescription;
            _fun0011_ip = 242; continue _fun0011;
case 240:
            var15 = var9.description;
case 242:
            var3 = 'title';
            var3 = var3 in var9;
            if(var3) { _fun0011_ip = 243; continue _fun0011 }
case 244:
            var14 = var9.rawTitle;
            _fun0011_ip = 245; continue _fun0011;
case 243:
            var14 = var9.title;
case 245:
            var10 = null;
            if(!(var10 == var15)) { _fun0011_ip = 246; continue _fun0011 }
case 247:
            var3 = var14;
            if(!(var10 == var3)) { _fun0011_ip = 248; continue _fun0011 }
case 249:
            var13 = var9.fields;
            if(!(var10 != var13)) { _fun0011_ip = 237; continue _fun0011 }
case 250:
            var13 = var9.fields;
            var13 = var13.length;
            if(!(!(var13 > var12))) { _fun0011_ip = 251; continue _fun0011 }
case 237:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 19;
            var13 = var17[var13];
            var18 = var16.bind(var4)(var13);
            var17 = var18.hasFlag;
            var13 = var1.flags;
            var16 = null;
            var19 = var16 != var13;
            var16 = 0;
            if(!var19) { _fun0011_ip = 252; continue _fun0011 }
case 253:
            var16 = var13;
case 252:
            var13 = _closure1_slot22;
            var13 = var13.IS_VOICE_MESSAGE;
            var13 = var17.bind(var18)(var16, var13);
            if(var13) { _fun0011_ip = 254; continue _fun0011 }
case 255:
            var13 = var1.attachments;
            var16 = '';
            var3 = var16;
            if(!(var4 !== var13)) { _fun0011_ip = 248; continue _fun0011 }
case 256:
            var13 = var1.attachments;
            var13 = var13.length;
            var13 = var13 > var12;
            var3 = var16;
            if(!var13) { _fun0011_ip = 248; continue _fun0011 }
case 257:
            var16 = _closure1_slot1;
            var20 = _closure1_slot2;
            var13 = 25;
            var13 = var20[var13];
            var16 = var16.bind(var4)(var13);
            var13 = var1.attachments;
            var13 = var13[var12];
            var19 = var16.bind(var4)(var13);
            var16 = _closure1_slot0;
            var13 = 24;
            var17 = var20[var13];
            var17 = var16.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.formatToPlainString;
            var13 = var20[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var16 = var13.51OkwL;
            var13 = {};
            var13['filename'] = var19;
            var3 = var17.bind(var18)(var16, var13);
            _fun0011_ip = 248; continue _fun0011;
case 254:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var13 = 24;
            var16 = var19[var13];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var13 = var19[var13];
            var13 = var18.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.slFYgi;
            var3 = var16.bind(var17)(var13);
            _fun0011_ip = 248; continue _fun0011;
case 251:
            var9 = var9.fields;
            var9 = var9[var12];
            var12 = 'name';
            var12 = var12 in var9;
            if(var12) { _fun0011_ip = 258; continue _fun0011 }
case 259:
            var17 = var9.rawName;
            _fun0011_ip = 260; continue _fun0011;
case 258:
            var17 = var9.name;
case 260:
            var12 = 'value';
            var12 = var12 in var9;
            if(var12) { _fun0011_ip = 261; continue _fun0011 }
case 262:
            var16 = var9.rawValue;
            _fun0011_ip = 263; continue _fun0011;
case 261:
            var16 = var9.value;
case 263:
            var9 = global;
            var9 = var9.HermesInternal;
            var13 = var9.concat;
            var12 = '';
            var9 = ' ';
            var3 = var13.bind(var12)(var17, var9, var16);
            _fun0011_ip = 248; continue _fun0011;
case 246:
            var9 = var15;
            if(!(var10 != var14)) { _fun0011_ip = 264; continue _fun0011 }
case 265:
            var10 = global;
            var10 = var10.HermesInternal;
            var13 = var10.concat;
            var12 = '';
            var10 = ' ';
            var9 = var13.bind(var12)(var14, var10, var15);
case 264:
            var3 = var9;
case 248:
            var6 = var3;
case 235:
            var3 = {};
            var10 = var11.getAvatarURL;
            var9 = var8.guild_id;
            var8 = 128;
            var8 = var10.bind(var11)(var9, var8);
            var3['icon'] = var8;
            var3['title'] = var7;
            var3['body'] = var6;
            var3['emoji'] = var5;
            return var3;
case 183:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 29;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var2 = var4.prototype;
            var3 = Object.create(var2, {constructor: {value: var4}});
            var24 = 'NotificationTextUtils';
            var25 = var3;
            var2 = new var25[var4](var24, var23);
            var4 = var2 instanceof Object ? var2 : var3;
            var3 = var4.warn;
            var2 = {};
            var2['message'] = var1;
            var1 = 'SystemMessageUtils.stringify(...) could not convert';
            var1 = var3.bind(var4)(var1, var2);
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var24 = 'failed to stringify system message';
            var25 = var2;
            var1 = new var25[var3](var24, var23);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var3['makeTextChatNotification'] = var4;
    var4 = function allowInAppNotifications() {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 18;
            var1 = var5[var1];
            var3 = undefined;
            var1 = var4.bind(var3)(var1);
            var2 = var1.ShowInAppNotifications;
            var1 = var2.getSetting;
            var1 = var1.bind(var2)();
            var2 = 34;
            var2 = var5[var2];
            var3 = var4.bind(var3)(var2);
            var2 = var3.getFocusModeEnabled;
            var2 = var2.bind(var3)();
            if(!var1) { _fun0013_ip = 266; continue _fun0013 }
case 267:
            var1 = !var2;
case 266:
            return var1;
        }
    };
    var3['allowInAppNotifications'] = var4;
    var2 = function useAllowInAppNotifications() {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 18;
            var1 = var5[var1];
            var3 = undefined;
            var1 = var4.bind(var3)(var1);
            var2 = var1.ShowInAppNotifications;
            var1 = var2.useSetting;
            var1 = var1.bind(var2)();
            var2 = 34;
            var2 = var5[var2];
            var3 = var4.bind(var3)(var2);
            var2 = var3.useFocusModeEnabled;
            var2 = var2.bind(var3)();
            if(!var1) { _fun0014_ip = 266; continue _fun0014 }
case 267:
            var1 = !var2;
case 266:
            return var1;
        }
    };
    var3['useAllowInAppNotifications'] = var2;
    return var1;
})();