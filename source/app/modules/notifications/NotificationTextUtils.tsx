// app/modules/notifications/NotificationTextUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot31;
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
            var7 = _closure1_slot31;
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
    var _closure1_slot30 = var1;
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
    var _closure1_slot31 = var1;
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
            var1 = _closure1_slot27;
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
            var4 = _closure1_slot26;
            var4 = var4.DND;
            var5 = var8 === var4;
case 52:
            var4 = !var5;
            if(var5) { _fun0004_ip = 54; continue _fun0004 }
case 55:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 20;
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
    var _closure1_slot32 = var5;
    var4 = function renderTitle(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var11 = arg3;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 27;
            var4 = var3[var2];
            var10 = undefined;
            var7 = var6.bind(var10)(var4);
            var5 = var7.isolate;
            var4 = arg1;
            var7 = var5.bind(var7)(var4);
            var4 = var3[var2];
            var5 = var6.bind(var10)(var4);
            var4 = var5.isolate;
            var12 = 28;
            var3 = var3[var12];
            var14 = var6.bind(var10)(var3);
            var13 = var14.computeChannelName;
            var18 = _closure1_slot19;
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
            if(!var3) { _fun0005_ip = 60; continue _fun0005 }
case 61:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = var8[var2];
            var3 = var9.bind(var10)(var2);
            var2 = var3.isolate;
            var8 = var8[var12];
            var10 = var9.bind(var10)(var8);
            var9 = var10.computeChannelName;
            var8 = _closure1_slot19;
            var1 = _closure1_slot13;
            var1 = var9.bind(var10)(var11, var8, var1);
            var3 = var2.bind(var3)(var1);
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = ', ';
            var4 = var2.bind(var1)(var3);
case 60:
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
    var _closure1_slot33 = var4;
    var1 = function getInviteEmbedFormatString(arg1, arg2, arg3, arg4) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = _closure1_slot22;
            var2 = var2.GUILD_ANNOUNCEMENT;
            if(!(var2 !== var3)) { _fun0006_ip = 62; continue _fun0006 }
case 63:
            var2 = _closure1_slot22;
            var2 = var2.GUILD_TEXT;
            if(!(var2 !== var3)) { _fun0006_ip = 62; continue _fun0006 }
case 64:
            var2 = _closure1_slot22;
            var2 = var2.GROUP_DM;
            if(!(var2 !== var3)) { _fun0006_ip = 65; continue _fun0006 }
case 66:
            var1 = _closure1_slot22;
            var1 = var1.DM;
            var1 = arg4;
            return var1;
case 65:
            var1 = arg3;
            return var1;
case 62:
            var1 = arg2;
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var10 = var6.GUILD_VOCAL_CHANNEL_TYPES;
    var _closure1_slot8 = var10;
    var6 = var6.THREAD_CHANNEL_TYPES;
    var _closure1_slot9 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot10 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot11 = var6;
    var6 = 8;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot12 = var6;
    var6 = 9;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot13 = var6;
    var6 = 10;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot14 = var6;
    var6 = 11;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot15 = var6;
    var6 = 12;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot16 = var6;
    var6 = 13;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot17 = var6;
    var6 = 14;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot18 = var6;
    var6 = 15;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot19 = var6;
    var6 = 16;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot20 = var6;
    var6 = 17;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.ActivityActionTypes;
    var _closure1_slot21 = var9;
    var9 = var6.ChannelTypes;
    var _closure1_slot22 = var9;
    var9 = var6.MessageFlags;
    var _closure1_slot23 = var9;
    var9 = var6.MessageTypes;
    var _closure1_slot24 = var9;
    var9 = var6.MessageTypesSets;
    var _closure1_slot25 = var9;
    var9 = var6.StatusTypes;
    var _closure1_slot26 = var9;
    var6 = var6.UserFlags;
    var _closure1_slot27 = var6;
    var6 = 18;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.ActivityPanelModes;
    var _closure1_slot28 = var6;
    var6 = 19;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.ThreadMemberFlags;
    var _closure1_slot29 = var6;
    var6 = 41;
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
            var5 = undefined;
            if(!(var1 === var5)) { _fun0007_ip = 29; continue _fun0007 }
case 67:
            var1 = true;
case 29:
            if(!(var12 === var5)) { _fun0007_ip = 68; continue _fun0007 }
case 69:
            var12 = false;
case 68:
            var3 = var7.flags;
            var8 = null;
            if(!(var8 != var3)) { _fun0007_ip = 70; continue _fun0007 }
case 71:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 21;
            var4 = var9[var4];
            var9 = var6.bind(var5)(var4);
            var6 = var9.hasFlag;
            var4 = var7.flags;
            var3 = _closure1_slot23;
            var3 = var3.SUPPRESS_NOTIFICATIONS;
            var3 = var6.bind(var9)(var4, var3);
            if(var3) { _fun0007_ip = 72; continue _fun0007 }
case 70:
            var6 = _closure1_slot10;
            var4 = var6.getChannel;
            var11 = var4.bind(var6)(var2);
            var9 = var7.type;
            var4 = _closure1_slot24;
            var6 = var4.THREAD_STARTER_MESSAGE;
            var4 = var11;
            if(!(var9 === var6)) { _fun0007_ip = 73; continue _fun0007 }
case 74:
            var10 = _closure1_slot10;
            var9 = var10.getChannel;
            var13 = var8 == var11;
            var6 = undefined;
            if(var13) { _fun0007_ip = 75; continue _fun0007 }
case 76:
            var6 = var11.parent_id;
case 75:
            var4 = var9.bind(var10)(var6);
case 73:
            var9 = _closure1_slot19;
            var6 = var9.getCurrentUser;
            var6 = var6.bind(var9)();
            var11 = _closure1_slot19;
            var10 = var11.getUser;
            var13 = var7.author;
            var14 = var8 == var13;
            var9 = undefined;
            if(var14) { _fun0007_ip = 77; continue _fun0007 }
case 78:
            var9 = var13.id;
case 77:
            var11 = var10.bind(var11)(var9);
            if(!(var8 != var4)) { _fun0007_ip = 79; continue _fun0007 }
case 80:
            if(!(var8 != var6)) { _fun0007_ip = 79; continue _fun0007 }
case 81:
            if(!(var8 != var11)) { _fun0007_ip = 79; continue _fun0007 }
case 82:
            var10 = var4.type;
            var9 = _closure1_slot22;
            var9 = var9.GROUP_DM;
            if(!(var10 === var9)) { _fun0007_ip = 83; continue _fun0007 }
case 18:
            var10 = var7.type;
            var9 = _closure1_slot24;
            var9 = var9.RECIPIENT_REMOVE;
            if(!(var10 !== var9)) { _fun0007_ip = 84; continue _fun0007 }
case 83:
            var10 = _closure1_slot20;
            var9 = var10.areSlayerNotificationsSuppressed;
            var9 = var9.bind(var10)();
            if(!var9) { _fun0007_ip = 85; continue _fun0007 }
case 86:
            var10 = var4.type;
            var9 = _closure1_slot22;
            var9 = var9.DM;
            var9 = var10 === var9;
            if(var9) { _fun0007_ip = 87; continue _fun0007 }
case 88:
            var10 = var4.linkedLobby;
            var9 = var8 != var10;
case 87:
            if(var9) { _fun0007_ip = 89; continue _fun0007 }
case 85:
            var10 = _closure1_slot32;
            var9 = {};
            var9['ignoreStatus'] = var12;
            var12 = _closure1_slot25;
            var14 = var12.SELF_MENTIONABLE_SYSTEM;
            var13 = var14.has;
            var12 = var7.type;
            var12 = var13.bind(var14)(var12);
            var9['ignoreSameUser'] = var12;
            var19 = undefined;
            var18 = var6;
            var17 = var11;
            var16 = var4;
            var15 = var9;
            var9 = var19[var10](var18, var17, var16, var15, var14);
            if(var9) { _fun0007_ip = 90; continue _fun0007 }
case 91:
            var9 = false;
            return var9;
case 90:
            var10 = _closure1_slot5;
            var9 = var10.isMessageRequest;
            var9 = var9.bind(var10)(var2);
            if(var9) { _fun0007_ip = 92; continue _fun0007 }
case 93:
            if(var1) { _fun0007_ip = 94; continue _fun0007 }
case 95:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 22;
            var1 = var10[var1];
            var10 = var9.bind(var5)(var1);
            var9 = var10.isChannelCurrentlyVisible;
            var1 = var4.id;
            var1 = var9.bind(var10)(var1);
            if(!var1) { _fun0007_ip = 94; continue _fun0007 }
case 96:
            var1 = false;
            return var1;
case 94:
            var9 = _closure1_slot13;
            var1 = var9.isBlockedOrIgnoredForMessage;
            var1 = var1.bind(var9)(var7);
            if(var1) { _fun0007_ip = 97; continue _fun0007 }
case 98:
            var1 = var7.activity_instance;
            if(!(var5 !== var1)) { _fun0007_ip = 99; continue _fun0007 }
case 100:
            var1 = var7.interaction;
            if(!(var8 != var1)) { _fun0007_ip = 99; continue _fun0007 }
case 101:
            var1 = var7.interaction;
            var1 = var1.user;
            var9 = var1.id;
            var1 = var6.id;
            if(!(var9 !== var1)) { _fun0007_ip = 102; continue _fun0007 }
case 99:
            var1 = var7.application_id;
            if(!(var8 != var1)) { _fun0007_ip = 103; continue _fun0007 }
case 104:
            var9 = _closure1_slot3;
            var1 = var9.getCurrentEmbeddedActivity;
            var1 = var1.bind(var9)();
            var8 = var8 == var1;
            var9 = undefined;
            if(var8) { _fun0007_ip = 105; continue _fun0007 }
case 106:
            var9 = var1.applicationId;
case 105:
            var8 = var7.application_id;
            if(!(var9 === var8)) { _fun0007_ip = 103; continue _fun0007 }
case 107:
            var1 = var1.location;
            var1 = var1.channel_id;
            if(!(var1 !== var2)) { _fun0007_ip = 108; continue _fun0007 }
case 103:
            var8 = _closure1_slot9;
            var2 = var8.has;
            var1 = var4.type;
            var1 = var2.bind(var8)(var1);
            if(var1) { _fun0007_ip = 109; continue _fun0007 }
case 110:
            var8 = _closure1_slot8;
            var2 = var8.has;
            var1 = var4.type;
            var1 = var2.bind(var8)(var1);
            var1 = !var1;
            if(var1) { _fun0007_ip = 111; continue _fun0007 }
case 112:
            var8 = _closure1_slot12;
            var2 = var8.getChannelId;
            var8 = var2.bind(var8)();
            var2 = var4.id;
            var1 = var8 === var2;
case 111:
            var8 = _closure1_slot17;
            var2 = var8.allowAllMessages;
            var2 = var2.bind(var8)(var4);
            if(!var2) { _fun0007_ip = 113; continue _fun0007 }
case 114:
            if(var1) { _fun0007_ip = 115; continue _fun0007 }
case 113:
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
            var1 = 24;
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
case 115:
            var1 = true;
            return var1;
case 109:
            var8 = _closure1_slot6;
            var2 = var8.isMuted;
            var1 = var4.id;
            var1 = var2.bind(var8)(var1);
            if(var1) { _fun0007_ip = 116; continue _fun0007 }
case 117:
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 23;
            var1 = var8[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.computeThreadNotificationSetting;
            var4 = var1.bind(var2)(var4);
            var1 = _closure1_slot29;
            var1 = var1.NO_MESSAGES;
            var1 = var4 !== var1;
            if(!var1) { _fun0007_ip = 118; continue _fun0007 }
case 119:
            var2 = _closure1_slot29;
            var2 = var2.ALL_MESSAGES;
            var2 = var4 === var2;
            if(var2) { _fun0007_ip = 120; continue _fun0007 }
case 121:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 24;
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
case 120:
            var1 = var2;
case 118:
            return var1;
case 116:
            var1 = false;
            return var1;
case 108:
            var1 = false;
            return var1;
case 102:
            var1 = false;
            return var1;
case 97:
            var1 = false;
            return var1;
case 92:
            var1 = false;
            return var1;
case 89:
            var1 = false;
            return var1;
case 84:
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
            if(!(var1 === var3)) { _fun0008_ip = 122; continue _fun0008 }
case 123:
            var2 = _closure1_slot10;
            var1 = var2.getChannel;
            var4 = var1.bind(var2)(var3);
            var2 = var9.type;
            var1 = _closure1_slot24;
            var1 = var1.THREAD_STARTER_MESSAGE;
            var10 = var4;
            if(!(var2 === var1)) { _fun0008_ip = 124; continue _fun0008 }
case 125:
            var3 = _closure1_slot10;
            var2 = var3.getChannel;
            var1 = null;
            var5 = var1 == var4;
            var1 = undefined;
            if(var5) { _fun0008_ip = 126; continue _fun0008 }
case 127:
            var1 = var4.parent_id;
case 126:
            var10 = var2.bind(var3)(var1);
case 124:
            var2 = _closure1_slot19;
            var1 = var2.getCurrentUser;
            var5 = var1.bind(var2)();
            var4 = _closure1_slot19;
            var3 = var4.getUser;
            var6 = var9.author;
            var2 = null;
            var7 = var2 == var6;
            var11 = undefined;
            var1 = undefined;
            if(var7) { _fun0008_ip = 128; continue _fun0008 }
case 129:
            var1 = var6.id;
case 128:
            var6 = var3.bind(var4)(var1);
            var1 = var2 != var10;
            if(!var1) { _fun0008_ip = 130; continue _fun0008 }
case 131:
            var1 = var2 != var5;
case 130:
            if(!var1) { _fun0008_ip = 132; continue _fun0008 }
case 133:
            var1 = var2 != var6;
case 132:
            if(!var1) { _fun0008_ip = 134; continue _fun0008 }
case 135:
            var2 = var10.isManaged;
            var2 = var2.bind(var10)();
            var2 = !var2;
            if(!var2) { _fun0008_ip = 136; continue _fun0008 }
case 137:
            var4 = var6.hasFlag;
            var3 = _closure1_slot27;
            var3 = var3.SPAMMER;
            var3 = var4.bind(var6)(var3);
            var3 = !var3;
            if(!var3) { _fun0008_ip = 138; continue _fun0008 }
case 139:
            var7 = _closure1_slot13;
            var4 = var7.isBlockedOrIgnoredForMessage;
            var4 = var4.bind(var7)(var9);
            var4 = !var4;
            if(!var4) { _fun0008_ip = 140; continue _fun0008 }
case 141:
            var6 = var6.id;
            var5 = var5.id;
            var5 = var6 !== var5;
            if(!var5) { _fun0008_ip = 142; continue _fun0008 }
case 143:
            var7 = _closure1_slot16;
            var6 = var7.getStatus;
            var7 = var6.bind(var7)();
            var6 = _closure1_slot26;
            var6 = var6.DND;
            var6 = var7 !== var6;
            if(!var6) { _fun0008_ip = 144; continue _fun0008 }
case 145:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 20;
            var7 = var12[var7];
            var7 = var9.bind(var11)(var7);
            var9 = var7.FocusMode;
            var7 = var9.getSetting;
            var7 = var7.bind(var9)();
            var7 = !var7;
            if(!var7) { _fun0008_ip = 146; continue _fun0008 }
case 147:
            var9 = _closure1_slot17;
            var8 = var9.allowNoMessages;
            var8 = var8.bind(var9)(var10);
            var7 = !var8;
case 146:
            var6 = var7;
case 144:
            var5 = var6;
case 142:
            var4 = var5;
case 140:
            var3 = var4;
case 138:
            var2 = var3;
case 136:
            var1 = var2;
case 134:
            return var1;
case 122:
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
case 148:
            var10 = false;
case 31:
            var2 = _closure1_slot19;
            var1 = var2.getCurrentUser;
            var8 = var1.bind(var2)();
            var3 = _closure1_slot19;
            var2 = var3.getUser;
            var1 = arg1;
            var1 = var1.ownerId;
            var6 = var2.bind(var3)(var1);
            var2 = null;
            var1 = var2 != var7;
            if(!var1) { _fun0009_ip = 149; continue _fun0009 }
case 150:
            var1 = var2 != var8;
case 149:
            if(!var1) { _fun0009_ip = 151; continue _fun0009 }
case 152:
            var1 = var2 != var6;
case 151:
            if(!var1) { _fun0009_ip = 153; continue _fun0009 }
case 154:
            var3 = _closure1_slot32;
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
            if(!var3) { _fun0009_ip = 155; continue _fun0009 }
case 156:
            var10 = _closure1_slot17;
            var8 = var10.isGuildOrCategoryOrChannelMuted;
            var6 = var7.guild_id;
            var3 = var7.id;
            var3 = var8.bind(var10)(var6, var3);
            var3 = !var3;
            if(!var3) { _fun0009_ip = 157; continue _fun0009 }
case 158:
            var4 = !var4;
            if(!var4) { _fun0009_ip = 159; continue _fun0009 }
case 160:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 22;
            var6 = var10[var6];
            var9 = var8.bind(var9)(var6);
            var8 = var9.isChannelCurrentlyVisible;
            var6 = var7.id;
            var4 = var8.bind(var9)(var6);
case 159:
            var4 = !var4;
            if(!var4) { _fun0009_ip = 161; continue _fun0009 }
case 162:
            var6 = _closure1_slot17;
            var5 = var6.getNewForumThreadsCreated;
            var4 = var5.bind(var6)(var7);
case 161:
            var3 = var4;
case 157:
            var2 = var3;
case 155:
            var1 = var2;
case 153:
            return var1;
        }
    };
    var3['shouldNotifyForForumThreadCreation'] = var5;
    var5 = function shouldNotifyForReaction(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg1;
            var1 = var2.message;
            var5 = var2.channel;
            var7 = var2.reactor;
            var4 = var2.includeSelectedChannel;
            var3 = _closure1_slot19;
            var2 = var3.getCurrentUser;
            var11 = var2.bind(var3)();
            var9 = _closure1_slot19;
            var2 = var9.getUser;
            var10 = var1.author;
            var3 = null;
            var12 = var3 == var10;
            var8 = undefined;
            var1 = undefined;
            if(var12) { _fun0010_ip = 163; continue _fun0010 }
case 35:
            var1 = var10.id;
case 163:
            var10 = var2.bind(var9)(var1);
            var1 = var3 != var11;
            if(!var1) { _fun0010_ip = 164; continue _fun0010 }
case 165:
            var1 = var3 != var10;
case 164:
            if(!var1) { _fun0010_ip = 166; continue _fun0010 }
case 167:
            var9 = _closure1_slot32;
            var2 = {};
            var12 = true;
            var2['ignoreSameUser'] = var12;
            var17 = undefined;
            var16 = var11;
            var15 = var10;
            var14 = var5;
            var13 = var2;
            var9 = var17[var9](var16, var15, var14, var13, var12);
            var2 = !var9;
            var2 = !var2;
            if(!var9) { _fun0010_ip = 168; continue _fun0010 }
case 169:
            var3 = var3 == var7;
            if(var3) { _fun0010_ip = 170; continue _fun0010 }
case 49:
            var10 = _closure1_slot13;
            var9 = var10.isBlockedOrIgnored;
            var7 = var7.id;
            var7 = var9.bind(var10)(var7);
            var3 = !var7;
case 170:
            if(!var3) { _fun0010_ip = 171; continue _fun0010 }
case 172:
            var4 = !var4;
            if(!var4) { _fun0010_ip = 173; continue _fun0010 }
case 174:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 22;
            var6 = var9[var6];
            var7 = var7.bind(var8)(var6);
            var6 = var7.isChannelCurrentlyVisible;
            var5 = var5.id;
            var4 = var6.bind(var7)(var5);
case 173:
            var3 = !var4;
case 171:
            var2 = var3;
case 168:
            var1 = var2;
case 166:
            return var1;
        }
    };
    var3['shouldNotifyForReaction'] = var5;
    var5 = function shouldIncludeSelectedChannel() {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = _closure1_slot7;
            var1 = var2.getState;
            var2 = var1.bind(var2)();
            var1 = var2.isVoicePanelFullscreen;
            var2 = var1.bind(var2)();
            var1 = true;
            if(var2) { _fun0011_ip = 174; continue _fun0011 }
case 175:
            var4 = _closure1_slot3;
            var2 = var4.getConnectedActivityLocation;
            var4 = var2.bind(var4)();
            var2 = null;
            if(!(var2 != var4)) { _fun0011_ip = 176; continue _fun0011 }
case 4:
            var5 = _closure1_slot3;
            var4 = var5.getActivityPanelMode;
            var5 = var4.bind(var5)();
            var4 = _closure1_slot28;
            var4 = var4.PANEL;
            var1 = true;
            if(!(var5 !== var4)) { _fun0011_ip = 174; continue _fun0011 }
case 176:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 25;
            var4 = var5[var4];
            var5 = undefined;
            var6 = var6.bind(var5)(var4);
            var4 = var6.getRootNavigationRef;
            var6 = var4.bind(var6)();
            var2 = var2 == var6;
            if(var2) { _fun0011_ip = 169; continue _fun0011 }
case 177:
            var4 = var6.isReady;
            var4 = var4.bind(var6)();
            var2 = !var4;
case 169:
            if(var2) { _fun0011_ip = 51; continue _fun0011 }
case 178:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 26;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.isChannelFocused;
            var3 = var3.bind(var4)();
            var2 = !var3;
case 51:
            var1 = var2;
case 174:
            return var1;
        }
    };
    var3['shouldIncludeSelectedChannel'] = var5;
    var3['renderTitle'] = var4;
    var4 = function makeTextChatNotification(arg1, arg2, arg3) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var8 = arg1;
            var1 = arg2;
            var11 = arg3;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 31;
            var3 = var4[var3];
            var4 = undefined;
            var7 = var5.bind(var4)(var3);
            var6 = var7.getName;
            var3 = var8.getGuildId;
            var5 = var3.bind(var8)();
            var3 = var8.id;
            var15 = var6.bind(var7)(var5, var3, var11);
            var5 = var8.type;
            var3 = _closure1_slot22;
            var3 = var3.GUILD_ANNOUNCEMENT;
            if(!(var3 !== var5)) { _fun0012_ip = 179; continue _fun0012 }
case 180:
            var3 = _closure1_slot22;
            var3 = var3.GUILD_TEXT;
            if(!(var3 !== var5)) { _fun0012_ip = 179; continue _fun0012 }
case 127:
            var3 = _closure1_slot22;
            var3 = var3.GUILD_VOICE;
            if(!(var3 !== var5)) { _fun0012_ip = 179; continue _fun0012 }
case 47:
            var3 = _closure1_slot22;
            var3 = var3.ANNOUNCEMENT_THREAD;
            if(!(var3 !== var5)) { _fun0012_ip = 179; continue _fun0012 }
case 46:
            var3 = _closure1_slot22;
            var3 = var3.PUBLIC_THREAD;
            if(!(var3 !== var5)) { _fun0012_ip = 179; continue _fun0012 }
case 181:
            var3 = _closure1_slot22;
            var3 = var3.PRIVATE_THREAD;
            if(!(var3 !== var5)) { _fun0012_ip = 179; continue _fun0012 }
case 158:
            var3 = _closure1_slot22;
            var3 = var3.GROUP_DM;
            var7 = var15;
            if(!(var3 === var5)) { _fun0012_ip = 182; continue _fun0012 }
case 183:
            var3 = var8.isManaged;
            var3 = var3.bind(var8)();
            if(!var3) { _fun0012_ip = 22; continue _fun0012 }
case 78:
            var3 = var11.bot;
case 22:
            if(!var3) { _fun0012_ip = 184; continue _fun0012 }
case 159:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 28;
            var5 = var9[var5];
            var10 = var6.bind(var4)(var5);
            var9 = var10.computeChannelName;
            var6 = _closure1_slot19;
            var5 = _closure1_slot13;
            var5 = var9.bind(var10)(var8, var6, var5);
            var3 = var15 === var5;
case 184:
            var7 = var15;
            if(var3) { _fun0012_ip = 182; continue _fun0012 }
case 185:
            var3 = _closure1_slot33;
            var7 = var3.bind(var4)(var15, var8);
            _fun0012_ip = 182; continue _fun0012;
case 179:
            var6 = _closure1_slot10;
            var5 = var6.getChannel;
            var3 = var8.parent_id;
            var6 = var5.bind(var6)(var3);
            var5 = var1.type;
            var3 = _closure1_slot24;
            var3 = var3.THREAD_STARTER_MESSAGE;
            if(!(var5 === var3)) { _fun0012_ip = 87; continue _fun0012 }
case 186:
            var3 = null;
            if(!(var3 == var6)) { _fun0012_ip = 187; continue _fun0012 }
case 87:
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 32;
            var3 = var9[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)(var1);
            if(var3) { _fun0012_ip = 188; continue _fun0012 }
case 189:
            var3 = _closure1_slot33;
            var7 = var3.bind(var4)(var15, var8, var6);
            _fun0012_ip = 182; continue _fun0012;
case 188:
            var9 = _closure1_slot11;
            var5 = var9.getGuild;
            var3 = var8.getGuildId;
            var3 = var3.bind(var8)();
            var5 = var5.bind(var9)(var3);
            var3 = null;
            var7 = var15;
            if(!(var3 != var5)) { _fun0012_ip = 182; continue _fun0012 }
case 190:
            var3 = _closure1_slot33;
            var7 = var3.bind(var4)(var15, var8, var6);
            _fun0012_ip = 182; continue _fun0012;
case 187:
            var5 = _closure1_slot33;
            var10 = _closure1_slot10;
            var9 = var10.getChannel;
            var3 = var6.parent_id;
            var3 = var9.bind(var10)(var3);
            var7 = var5.bind(var4)(var15, var6, var3);
case 182:
            var18 = var1.content;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 32;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)(var1);
            if(!var3) { _fun0012_ip = 191; continue _fun0012 }
case 192:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 33;
            var3 = var6[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.stringify;
            var18 = var3.bind(var5)(var1, var8);
            var3 = null;
            if(!(var3 != var18)) { _fun0012_ip = 193; continue _fun0012 }
case 191:
            var3 = 'sticker_items';
            var3 = var3 in var1;
            if(var3) { _fun0012_ip = 194; continue _fun0012 }
case 195:
            var3 = 'stickerItems';
            var3 = var3 in var1;
            if(var3) { _fun0012_ip = 196; continue _fun0012 }
case 197:
            var16 = var1.stickers;
            _fun0012_ip = 198; continue _fun0012;
case 196:
            var16 = var1.stickerItems;
case 198:
            _fun0012_ip = 199; continue _fun0012;
case 194:
            var16 = var1.sticker_items;
case 199:
            var3 = new Array(0);
            var5 = 'message_reference';
            var5 = var5 in var1;
            if(var5) { _fun0012_ip = 200; continue _fun0012 }
case 201:
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 35;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.bind(var4)(var1);
            _fun0012_ip = 202; continue _fun0012;
case 200:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 35;
            var6 = var10[var6];
            var9 = var9.bind(var4)(var6);
            var6 = var9.isForwardServerMessage;
            var5 = var6.bind(var9)(var1);
case 202:
            if(var5) { _fun0012_ip = 203; continue _fun0012 }
case 204:
            var5 = var1.activity;
            var9 = null;
            if(!(var9 != var5)) { _fun0012_ip = 205; continue _fun0012 }
case 206:
            var5 = var1.application;
            if(!(var9 == var5)) { _fun0012_ip = 207; continue _fun0012 }
case 205:
            var5 = var1.activity;
            if(!(var9 != var5)) { _fun0012_ip = 208; continue _fun0012 }
case 209:
            var5 = var1.activity;
            var6 = var5.type;
            var5 = _closure1_slot21;
            var5 = var5.LISTEN;
            if(!(var6 !== var5)) { _fun0012_ip = 210; continue _fun0012 }
case 208:
            if(!(var9 != var16)) { _fun0012_ip = 211; continue _fun0012 }
case 212:
            var5 = var16.length;
            var14 = 0;
            if(!(!(var5 > var14))) { _fun0012_ip = 213; continue _fun0012 }
case 211:
            var6 = var1.type;
            var5 = _closure1_slot24;
            var5 = var5.PREMIUM_REFERRAL;
            if(!(var6 !== var5)) { _fun0012_ip = 214; continue _fun0012 }
case 215:
            var5 = var1.poll;
            if(!(var9 == var5)) { _fun0012_ip = 216; continue _fun0012 }
case 217:
            var6 = var1.type;
            var5 = _closure1_slot24;
            var5 = var5.POLL_RESULT;
            if(!(var6 !== var5)) { _fun0012_ip = 218; continue _fun0012 }
case 219:
            var5 = var1.components;
            if(!(var9 != var5)) { _fun0012_ip = 220; continue _fun0012 }
case 221:
            var5 = var1.components;
            var5 = var5.length;
            var6 = 0;
            if(!(var5 > var6)) { _fun0012_ip = 220; continue _fun0012 }
case 222:
            var5 = var1.components;
            var5 = var5[var6];
            var6 = var5.type;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 37;
            var5 = var12[var5];
            var5 = var10.bind(var4)(var5);
            var5 = var5.ComponentType;
            var5 = var5.CHECKPOINT_CARD;
            if(!(var6 !== var5)) { _fun0012_ip = 223; continue _fun0012 }
case 220:
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 38;
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
            if(!(var13 !== var10)) { _fun0012_ip = 224; continue _fun0012 }
case 225:
            var12 = var8.type;
            var10 = _closure1_slot22;
            var10 = var10.DM;
            var6 = var17;
            var5 = var19;
            if(!(var12 === var10)) { _fun0012_ip = 224; continue _fun0012 }
case 226:
            var10 = var11.bot;
            var6 = var17;
            var5 = var19;
            if(var10) { _fun0012_ip = 224; continue _fun0012 }
case 227:
            var12 = var18.startsWith;
            var10 = '> -# *';
            var10 = var12.bind(var18)(var10);
            var6 = var17;
            var5 = var19;
            if(!var10) { _fun0012_ip = 224; continue _fun0012 }
case 228:
            var12 = var17.substring;
            var10 = 1;
            var12 = var12.bind(var17)(var13, var10);
            var13 = var17.substring;
            var10 = 4;
            var10 = var13.bind(var17)(var10);
            var18 = var12 + var10;
            var10 = _closure1_slot30;
            var17 = var10.bind(var4)(var19);
            var12 = var17.bind(var4)();
            var10 = var12.done;
            var13 = 2;
            var6 = var18;
            var5 = var19;
            if(var10) { _fun0012_ip = 224; continue _fun0012 }
case 229:
            var20 = var12.value;
            var10 = var20.position;
            var10 = var10 - var13;
            var20['position'] = var10;
            var20 = var17.bind(var4)();
            var10 = var20.done;
            var12 = var20;
            var6 = var18;
            var5 = var19;
            if(var10) { _fun0012_ip = 224; continue _fun0012 }
case 230:
            _fun0012_ip = 229; continue _fun0012;
case 223:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var10 = 29;
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
            _fun0012_ip = 224; continue _fun0012;
case 218:
            var13 = var1.embeds;
            var12 = var9 == var13;
            var10 = undefined;
            if(var12) { _fun0012_ip = 231; continue _fun0012 }
case 232:
            var12 = 0;
            var12 = var13[var12];
            var13 = var9 == var12;
            var10 = undefined;
            if(var13) { _fun0012_ip = 231; continue _fun0012 }
case 233:
            var17 = var12.fields;
            var12 = var9 == var17;
            var10 = undefined;
            if(var12) { _fun0012_ip = 231; continue _fun0012 }
case 234:
            var13 = var17.find;
            var12 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = arg1;
                    var2 = 'name';
                    var2 = var2 in var1;
                    if(var2) { _fun0013_ip = 235; continue _fun0013 }
case 32:
                    var2 = var1.rawName;
                    _fun0013_ip = 236; continue _fun0013;
case 235:
                    var2 = var1.name;
case 236:
                    var1 = 'poll_question_text';
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var10 = var13.bind(var17)(var12);
case 231:
            var9 = var9 != var10;
            var17 = '';
            if(!var9) { _fun0012_ip = 237; continue _fun0012 }
case 238:
            var9 = 'value';
            var9 = var9 in var10;
            if(var9) { _fun0012_ip = 239; continue _fun0012 }
case 240:
            var9 = var10.rawValue;
            _fun0012_ip = 241; continue _fun0012;
case 239:
            var9 = var10.value;
case 241:
            var17 = var9;
case 237:
            var10 = _closure1_slot0;
            var18 = _closure1_slot2;
            var9 = 29;
            var12 = var18[var9];
            var12 = var10.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var9 = var18[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.t;
            var10 = var9["9WrecI"];
            var9 = {};
            var9['question'] = var17;
            var6 = var12.bind(var13)(var10, var9);
            var5 = var3;
            _fun0012_ip = 224; continue _fun0012;
case 216:
            var10 = _closure1_slot0;
            var17 = _closure1_slot2;
            var9 = 29;
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
            _fun0012_ip = 224; continue _fun0012;
case 214:
            var10 = _closure1_slot0;
            var19 = _closure1_slot2;
            var9 = 29;
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
            var17 = 36;
            var17 = var19[var17];
            var18 = var18.bind(var4)(var17);
            var17 = var18.getName;
            var17 = var17.bind(var18)(var11);
            var9['username'] = var17;
            var6 = var12.bind(var13)(var10, var9);
            var5 = var3;
            _fun0012_ip = 224; continue _fun0012;
case 213:
            var10 = _closure1_slot0;
            var17 = _closure1_slot2;
            var9 = 29;
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
            _fun0012_ip = 224; continue _fun0012;
case 210:
            var17 = _closure1_slot34;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 29;
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
            _fun0012_ip = 224; continue _fun0012;
case 207:
            var9 = var1.activity;
            var10 = var9.type;
            var9 = _closure1_slot21;
            var9 = var9.JOIN;
            if(!(var10 !== var9)) { _fun0012_ip = 242; continue _fun0012 }
case 243:
            var9 = var1.activity;
            var12 = var9.type;
            var9 = _closure1_slot21;
            var10 = var9.JOIN_REQUEST;
            var9 = '';
            if(!(var12 === var10)) { _fun0012_ip = 244; continue _fun0012 }
case 245:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var10 = 29;
            var12 = var19[var10];
            var12 = var18.bind(var4)(var12);
            var14 = var12.intl;
            var13 = var14.formatToPlainString;
            var17 = _closure1_slot34;
            var12 = var19[var10];
            var12 = var18.bind(var4)(var12);
            var12 = var12.t;
            var23 = var12["/TD0la"];
            var12 = var19[var10];
            var12 = var18.bind(var4)(var12);
            var12 = var12.t;
            var22 = var12["/TD0la"];
            var10 = var19[var10];
            var10 = var18.bind(var4)(var10);
            var10 = var10.t;
            var21 = var10["/TD0la"];
            var25 = undefined;
            var24 = var8;
            var12 = var25[var17](var24, var23, var22, var21, var20);
            var10 = {};
            var10['user'] = var15;
            var16 = var1.application;
            var16 = var16.name;
            var10['game'] = var16;
            var9 = var13.bind(var14)(var12, var10);
case 244:
            _fun0012_ip = 246; continue _fun0012;
case 242:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var10 = 29;
            var12 = var19[var10];
            var12 = var18.bind(var4)(var12);
            var14 = var12.intl;
            var13 = var14.formatToPlainString;
            var17 = _closure1_slot34;
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
case 246:
            var6 = var9;
            var5 = var3;
            _fun0012_ip = 224; continue _fun0012;
case 203:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 29;
            var10 = var14[var9];
            var10 = var13.bind(var4)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var9 = var14[var9];
            var9 = var13.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9["9ddYKt"];
            var6 = var10.bind(var12)(var9);
            var5 = var3;
case 224:
            var3 = var6.length;
            var12 = 0;
            if(!(var12 === var3)) { _fun0012_ip = 247; continue _fun0012 }
case 248:
            var3 = var1.embeds;
            if(!(var4 !== var3)) { _fun0012_ip = 249; continue _fun0012 }
case 250:
            var3 = var1.embeds;
            var3 = var3.length;
            if(!(var3 > var12)) { _fun0012_ip = 249; continue _fun0012 }
case 251:
            var3 = var1.embeds;
            var9 = var3[var12];
            var3 = 'description';
            var3 = var3 in var9;
            if(var3) { _fun0012_ip = 252; continue _fun0012 }
case 253:
            var15 = var9.rawDescription;
            _fun0012_ip = 254; continue _fun0012;
case 252:
            var15 = var9.description;
case 254:
            var3 = 'title';
            var3 = var3 in var9;
            if(var3) { _fun0012_ip = 255; continue _fun0012 }
case 256:
            var14 = var9.rawTitle;
            _fun0012_ip = 257; continue _fun0012;
case 255:
            var14 = var9.title;
case 257:
            var10 = null;
            if(!(var10 == var15)) { _fun0012_ip = 258; continue _fun0012 }
case 259:
            var3 = var14;
            if(!(var10 == var3)) { _fun0012_ip = 260; continue _fun0012 }
case 261:
            var13 = var9.fields;
            if(!(var10 != var13)) { _fun0012_ip = 249; continue _fun0012 }
case 262:
            var13 = var9.fields;
            var13 = var13.length;
            if(!(!(var13 > var12))) { _fun0012_ip = 263; continue _fun0012 }
case 249:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 21;
            var13 = var17[var13];
            var18 = var16.bind(var4)(var13);
            var17 = var18.hasFlag;
            var13 = var1.flags;
            var16 = null;
            var19 = var16 != var13;
            var16 = 0;
            if(!var19) { _fun0012_ip = 264; continue _fun0012 }
case 265:
            var16 = var13;
case 264:
            var13 = _closure1_slot23;
            var13 = var13.IS_VOICE_MESSAGE;
            var13 = var17.bind(var18)(var16, var13);
            if(var13) { _fun0012_ip = 266; continue _fun0012 }
case 267:
            var13 = var1.attachments;
            var16 = '';
            var3 = var16;
            if(!(var4 !== var13)) { _fun0012_ip = 260; continue _fun0012 }
case 268:
            var13 = var1.attachments;
            var13 = var13.length;
            var13 = var13 > var12;
            var3 = var16;
            if(!var13) { _fun0012_ip = 260; continue _fun0012 }
case 269:
            var16 = _closure1_slot1;
            var20 = _closure1_slot2;
            var13 = 30;
            var13 = var20[var13];
            var16 = var16.bind(var4)(var13);
            var13 = var1.attachments;
            var13 = var13[var12];
            var19 = var16.bind(var4)(var13);
            var16 = _closure1_slot0;
            var13 = 29;
            var17 = var20[var13];
            var17 = var16.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.formatToPlainString;
            var13 = var20[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var16 = var13["51OkwL"];
            var13 = {};
            var13['filename'] = var19;
            var3 = var17.bind(var18)(var16, var13);
            _fun0012_ip = 260; continue _fun0012;
case 266:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var13 = 29;
            var16 = var19[var13];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var13 = var19[var13];
            var13 = var18.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.slFYgi;
            var3 = var16.bind(var17)(var13);
            _fun0012_ip = 260; continue _fun0012;
case 263:
            var9 = var9.fields;
            var9 = var9[var12];
            var12 = 'name';
            var12 = var12 in var9;
            if(var12) { _fun0012_ip = 270; continue _fun0012 }
case 271:
            var17 = var9.rawName;
            _fun0012_ip = 272; continue _fun0012;
case 270:
            var17 = var9.name;
case 272:
            var12 = 'value';
            var12 = var12 in var9;
            if(var12) { _fun0012_ip = 273; continue _fun0012 }
case 274:
            var16 = var9.rawValue;
            _fun0012_ip = 275; continue _fun0012;
case 273:
            var16 = var9.value;
case 275:
            var9 = global;
            var9 = var9.HermesInternal;
            var13 = var9.concat;
            var12 = '';
            var9 = ' ';
            var3 = var13.bind(var12)(var17, var9, var16);
            _fun0012_ip = 260; continue _fun0012;
case 258:
            var9 = var15;
            if(!(var10 != var14)) { _fun0012_ip = 276; continue _fun0012 }
case 277:
            var10 = global;
            var10 = var10.HermesInternal;
            var13 = var10.concat;
            var12 = '';
            var10 = ' ';
            var9 = var13.bind(var12)(var14, var10, var15);
case 276:
            var3 = var9;
case 260:
            var6 = var3;
case 247:
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
case 193:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 34;
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
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var3 = _closure1_slot18;
            var2 = var3.hasAction;
            var2 = var2.bind(var3)();
            if(var2) { _fun0014_ip = 278; continue _fun0014 }
case 29:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 20;
            var1 = var5[var1];
            var3 = undefined;
            var1 = var4.bind(var3)(var1);
            var2 = var1.ShowInAppNotifications;
            var1 = var2.getSetting;
            var1 = var1.bind(var2)();
            var2 = 39;
            var2 = var5[var2];
            var3 = var4.bind(var3)(var2);
            var2 = var3.getFocusModeEnabled;
            var2 = var2.bind(var3)();
            if(!var1) { _fun0014_ip = 9; continue _fun0014 }
case 151:
            var1 = !var2;
case 9:
            return var1;
case 278:
            var1 = false;
            return var1;
        }
    };
    var3['allowInAppNotifications'] = var4;
    var2 = function useAllowInAppNotifications() {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 20;
            var2 = var7[var2];
            var5 = undefined;
            var2 = var6.bind(var5)(var2);
            var3 = var2.ShowInAppNotifications;
            var2 = var3.useSetting;
            var3 = var2.bind(var3)();
            var2 = 39;
            var2 = var7[var2];
            var4 = var6.bind(var5)(var2);
            var2 = var4.useFocusModeEnabled;
            var2 = var2.bind(var4)();
            var4 = 40;
            var4 = var7[var4];
            var6 = var6.bind(var5)(var4);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot18;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var2 = _closure1_slot18;
                var1 = var2.hasAction;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var5.bind(var6)(var4, var1);
            var1 = !var1;
            if(!var1) { _fun0015_ip = 61; continue _fun0015 }
case 279:
            var1 = var3;
case 61:
            if(!var1) { _fun0015_ip = 280; continue _fun0015 }
case 281:
            var1 = !var2;
case 280:
            return var1;
        }
    };
    var3['useAllowInAppNotifications'] = var2;
    return var1;
})();