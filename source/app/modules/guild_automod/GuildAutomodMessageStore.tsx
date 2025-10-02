// app/modules/guild_automod/GuildAutomodMessageStore.tsx
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
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var9 = function handleMessageSendFailedAutomod(arg1) {
        var1 = arg1;
        var7 = var1.messageData;
        var6 = var1.errorResponseBody;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 8;
        var3 = var9[var1];
        var5 = undefined;
        var4 = var8.bind(var5)(var3);
        var3 = var4.getFailedMessageId;
        var4 = var3.bind(var4)(var7);
        var3 = {};
        var3['id'] = var4;
        var1 = var9[var1];
        var10 = var8.bind(var5)(var1);
        var1 = var10.isMessageDataEdit;
        var1 = var1.bind(var10)(var7);
        var3['isBlockedEdit'] = var1;
        var3['messageData'] = var7;
        var1 = 9;
        var1 = var9[var1];
        var5 = var8.bind(var5)(var1);
        var1 = var5.getAutomodErrorMessage;
        var1 = var1.bind(var5)(var7, var6);
        var3['errorMessage'] = var1;
        var1 = _closure1_slot13;
        var1[var4] = var3;
        var1 = _closure1_slot14;
        var1 = var1 + 1;
        _closure1_slot14 = var1;
        var1 = true;
        return var1;
    };
    var10 = function handleLoadMessages(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var7 = var1.messages;
            var3 = _closure1_slot8;
            var1 = var3.getChannel;
            var5 = var1.bind(var3)(var4);
            var1 = null;
            var3 = var1 == var5;
            var4 = undefined;
            if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var5.getGuildId;
            var4 = var3.bind(var5)();
case 6:
            if(!(var1 != var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = _closure1_slot16;
            var6 = var3[var4];
            var5 = var7.reduce;
            var3 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var7 = arg1;
                    var3 = arg2;
                    var5 = var3.type;
                    var1 = _closure1_slot12;
                    var2 = var1.AUTO_MODERATION_ACTION;
                    var1 = var7;
                    if(!(var5 === var2)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var10 = var3.embeds;
                    var5 = null;
                    var8 = var5 == var10;
                    var2 = undefined;
                    var6 = undefined;
                    if(var8) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var9 = var10.some;
                    var8 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var1 = _closure1_slot11;
                        var1 = var1.AUTO_MODERATION_NOTIFICATION;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var6 = var9.bind(var10)(var8);
case 12:
                    var1 = var7;
                    if(!var6) { _fun0003_ip = 10; continue _fun0003 }
case 4:
                    if(!(var5 != var7)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 12;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.compare;
                    var4 = var3.id;
                    var5 = var5.bind(var6)(var7, var4);
                    var4 = -1;
                    var2 = undefined;
                    if(!(var4 === var5)) { _fun0003_ip = 16; continue _fun0003 }
case 14:
                    var2 = var3.id;
case 16:
                    var1 = var2;
case 10:
                    return var1;
                }
            };
            var3 = var5.bind(var7)(var3, var6);
            var1 = var1 != var3;
            if(!var1) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var5 = _closure1_slot16;
            var5 = var5[var4];
            var1 = var5 !== var3;
case 17:
            if(!var1) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var2 = _closure1_slot16;
            var2[var4] = var3;
            var1 = true;
case 19:
            return var1;
case 8:
            var1 = false;
            return var1;
        }
    };
    var1 = global;
    var11 = var1.Object;
    var8 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var2);
    var2 = 0;
    var8 = var6[var2];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var11 = var8.AbortCodes;
    var _closure1_slot10 = var11;
    var11 = var8.MessageEmbedTypes;
    var _closure1_slot11 = var11;
    var8 = var8.MessageTypes;
    var _closure1_slot12 = var8;
    var8 = {};
    var _closure1_slot13 = var8;
    var _closure1_slot14 = var2;
    var2 = {};
    var _closure1_slot15 = var2;
    var2 = {};
    var _closure1_slot16 = var2;
    var2 = function removeFailedMessage(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot13;
            var4 = var1[var3];
            var1 = null;
            if(!(var1 != var4)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var1 = _closure1_slot13;
            var1 = delete var1[var3];
case 21:
            var1 = _closure1_slot14;
            var1 = var1 + 1;
            _closure1_slot14 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot17 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function GuildAutomodMessageStore() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot18;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0005_ip = 20; continue _fun0005;
case 23:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 20:
                var1 = var2.bind(var3)(var4, var1);
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = arg1;
                var5 = this;
                var4 = var5.waitFor;
                var3 = _closure1_slot9;
                var3 = var4.bind(var5)(var3);
                var3 = null;
                if(!(var3 != var1)) { _fun0006_ip = 13; continue _fun0006 }
case 25:
                var3 = var1.automodFailedMessages;
                _closure1_slot13 = var3;
                var1 = var1.mentionRaidDetectionByGuild;
                _closure1_slot15 = var1;
case 13:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var3 = _closure1_slot13;
            var1['automodFailedMessages'] = var3;
            var3 = _closure1_slot15;
            var1['mentionRaidDetectionByGuild'] = var3;
            var2 = _closure1_slot16;
            var1['lastIncidentAlertMessage'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getMessage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = arg1;
                var2 = null;
                var3 = var2 == var4;
                var1 = null;
                if(var3) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                var3 = _closure1_slot13;
                var3 = var3[var4];
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                var2 = var3;
case 28:
                var1 = var2;
case 26:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getMessagesVersion';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getMentionRaidDetected';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = _closure1_slot15;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                var1 = var2;
case 30:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getLastIncidentAlertMessage';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = _closure1_slot16;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0009_ip = 30; continue _fun0009 }
case 31:
                var1 = var2;
case 30:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GuildAutomodMessageStore';
    var8['displayName'] = var2;
    var2 = 'GuildAutomodMessages';
    var8['persistKey'] = var2;
    var2 = 14;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var11 = function handleConnectionOpen() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = global;
            var4 = var1.Object;
            var2 = var4.keys;
            var1 = _closure1_slot13;
            var1 = var2.bind(var4)(var1);
            var2 = var1.length;
            var1 = 0;
            var1 = var1 !== var2;
            if(!var1) { _fun0010_ip = 32; continue _fun0010 }
case 33:
            var2 = {};
            _closure1_slot13 = var2;
            var2 = _closure1_slot14;
            var2 = var2 + 1;
            _closure1_slot14 = var2;
            var1 = true;
case 32:
            return var1;
        }
    };
    var2['CONNECTION_OPEN'] = var11;
    var2['LOAD_MESSAGES_SUCCESS'] = var10;
    var2['LOCAL_MESSAGES_LOADED'] = var10;
    var10 = function handleIncidentAlertMessageCreate(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guildId;
            var8 = var1.message;
            var1 = null;
            if(!(var1 != var5)) { _fun0011_ip = 34; continue _fun0011 }
case 35:
            var2 = var8.type;
            var1 = _closure1_slot12;
            var1 = var1.AUTO_MODERATION_ACTION;
            if(!(var2 === var1)) { _fun0011_ip = 36; continue _fun0011 }
case 37:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 10;
            var3 = var1[var3];
            var7 = undefined;
            var6 = var2.bind(var7)(var3);
            var3 = var6.createMessageRecord;
            var3 = var3.bind(var6)(var8);
            var8 = 11;
            var1 = var1[var8];
            var2 = var2.bind(var7)(var1);
            var1 = var2.isAutomodMessageRecord;
            var1 = var1.bind(var2)(var3);
            var2 = !var1;
            var1 = !var2;
            if(var2) { _fun0011_ip = 38; continue _fun0011 }
case 39:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var6 = var6.bind(var7)(var2);
            var2 = var6.isAutomodNotification;
            var2 = var2.bind(var6)(var3);
            var6 = !var2;
            var2 = !var6;
            if(var6) { _fun0011_ip = 40; continue _fun0011 }
case 41:
            var4 = _closure1_slot16;
            var3 = var3.id;
            var4[var5] = var3;
            var2 = true;
case 40:
            var1 = var2;
case 38:
            return var1;
case 36:
            var1 = false;
            return var1;
case 34:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_CREATE'] = var10;
    var2['MESSAGE_SEND_FAILED_AUTOMOD'] = var9;
    var2['MESSAGE_EDIT_FAILED_AUTOMOD'] = var9;
    var9 = function handleMessageNoticeRemove(arg1) {
        var1 = arg1;
        var3 = var1.messageId;
        var2 = _closure1_slot17;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        var1 = true;
        return var1;
    };
    var2['REMOVE_AUTOMOD_MESSAGE_NOTICE'] = var9;
    var9 = function handleMessageEndEdit(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var3 = var1.response;
            var4 = null;
            var5 = var4 == var3;
            var1 = undefined;
            var2 = undefined;
            if(var5) { _fun0012_ip = 42; continue _fun0012 }
case 35:
            var2 = var3.body;
case 42:
            if(!(var4 != var2)) { _fun0012_ip = 43; continue _fun0012 }
case 11:
            var2 = var3.body;
            var6 = var2.code;
            var5 = _closure1_slot10;
            var5 = var5.AUTOMOD_MESSAGE_BLOCKED;
            if(!(var6 !== var5)) { _fun0012_ip = 44; continue _fun0012 }
case 32:
            var3 = var3.body;
            var3 = var3.id;
            if(!(var4 != var3)) { _fun0012_ip = 45; continue _fun0012 }
case 5:
            var2 = _closure1_slot17;
            var2 = var2.bind(var1)(var3);
            return var1;
case 45:
            var1 = false;
            return var1;
case 44:
            var1 = false;
            return var1;
case 43:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_END_EDIT'] = var9;
    var9 = function handleMentionRaidDetection(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var5 = var1.decisionId;
        var4 = var1.suspiciousMentionActivityUntil;
        var2 = _closure1_slot15;
        var1 = {};
        var1['guildId'] = var3;
        var1['decisionId'] = var5;
        var1['suspiciousMentionActivityUntil'] = var4;
        var2[var3] = var1;
        var1 = true;
        return var1;
    };
    var2['AUTO_MODERATION_MENTION_RAID_DETECTION'] = var9;
    var4 = function handleMentionRaidNoticeDismiss(arg1) {
        var1 = arg1;
        var2 = var1.guildId;
        var1 = _closure1_slot15;
        var1 = delete var1[var2];
        var1 = true;
        return var1;
    };
    var2['AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_automod/GuildAutomodMessageStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();