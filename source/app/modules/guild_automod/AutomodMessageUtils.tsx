// app/modules/guild_automod/AutomodMessageUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var9 = native3;
    var2 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = function getEmbedFieldFromMessage(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg2;
            var _closure2_slot0 = var1;
            var1 = arg1;
            var7 = var1.embeds;
            var3 = null;
            if(!(var3 == var7)) { _fun0001_ip = 28; continue _fun0001 }
 24:
            var7 = new Array(0);
 28:
            var6 = _closure1_slot2;
            var4 = undefined;
            var5 = 1;
            var6 = var6.bind(var4)(var7, var5);
            var5 = 0;
            var5 = var6[var5];
            if(!(var3 != var5)) { _fun0001_ip = 94; continue _fun0001 }
 56:
            var7 = var5.type;
            var6 = _closure1_slot7;
            var6 = var6.AUTO_MODERATION_MESSAGE;
            if(!(var7 !== var6)) { _fun0001_ip = 152; continue _fun0001 }
 75:
            var6 = var5.type;
            var1 = _closure1_slot7;
            var1 = var1.AUTO_MODERATION_NOTIFICATION;
            if(!(var6 !== var1)) { _fun0001_ip = 96; continue _fun0001 }
 94:
            return var4;
 96:
            var6 = var3 == var5;
            var1 = undefined;
            if(var6) { _fun0001_ip = 150; continue _fun0001 }
 105:
            var8 = var5.fields;
            var6 = var3 == var8;
            var1 = undefined;
            if(var6) { _fun0001_ip = 150; continue _fun0001 }
 120:
            var7 = var8.find;
            var6 = function(arg1) {
                var1 = arg1;
                var2 = var1.rawName;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var7 = var3 == var6;
            var1 = undefined;
            if(var7) { _fun0001_ip = 150; continue _fun0001 }
 144:
            var1 = var6.rawValue;
 150:
            return var1;
 152:
            var6 = var3 == var5;
            var1 = undefined;
            if(var6) { _fun0001_ip = 206; continue _fun0001 }
 161:
            var6 = var5.fields;
            var5 = var3 == var6;
            var1 = undefined;
            if(var5) { _fun0001_ip = 206; continue _fun0001 }
 176:
            var5 = var6.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.rawName;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var5.bind(var6)(var2);
            var3 = var3 == var2;
            var1 = undefined;
            if(var3) { _fun0001_ip = 206; continue _fun0001 }
 200:
            var1 = var2.rawValue;
 206:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function getMessageContentFromEmbed(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var5 = var1.embeds;
            var1 = null;
            if(!(var1 == var5)) { _fun0002_ip = 19; continue _fun0002 }
 15:
            var5 = new Array(0);
 19:
            var4 = _closure1_slot2;
            var2 = undefined;
            var3 = 1;
            var4 = var4.bind(var2)(var5, var3);
            var3 = 0;
            var3 = var4[var3];
            var4 = var1 == var3;
            if(var4) { _fun0002_ip = 56; continue _fun0002 }
 50:
            var2 = var3.rawDescription;
 56:
            var3 = var1 != var2;
            var1 = '';
            if(!var3) { _fun0002_ip = 70; continue _fun0002 }
 67:
            var1 = var2;
 70:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function getDecisionOutcomeFromMessage(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = _closure1_slot11;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 6;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var3.bind(var2)(var1);
            var1 = var1.AutomodMessageEmbedKeys;
            var3 = var1.DECISION_OUTCOME;
            var1 = arg1;
            var1 = var4.bind(var2)(var1, var3);
            var3 = null;
            if(!(var3 == var1)) { _fun0003_ip = 58; continue _fun0003 }
 56:
            return var2;
 58:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function getQuarantineTypeFromMessage(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = _closure1_slot11;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 6;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var3.bind(var2)(var1);
            var1 = var1.AutomodMessageEmbedKeys;
            var3 = var1.QUARANTINE_USER;
            var1 = arg1;
            var1 = var4.bind(var2)(var1, var3);
            var3 = null;
            if(!(var3 == var1)) { _fun0004_ip = 58; continue _fun0004 }
 56:
            return var2;
 58:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function getQuarantineActionFromMessage(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = _closure1_slot11;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 6;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var3.bind(var2)(var1);
            var1 = var1.AutomodMessageEmbedKeys;
            var3 = var1.QUARANTINE_USER_ACTION;
            var1 = arg1;
            var1 = var4.bind(var2)(var1, var3);
            var3 = null;
            if(!(var3 == var1)) { _fun0005_ip = 58; continue _fun0005 }
 56:
            return var2;
 58:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function getProfileUpdateTypeFromMessage(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = _closure1_slot11;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 6;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var3.bind(var2)(var1);
            var1 = var1.AutomodMessageEmbedKeys;
            var3 = var1.BLOCK_PROFILE_UPDATE_TYPE;
            var1 = arg1;
            var1 = var4.bind(var2)(var1, var3);
            var3 = null;
            if(!(var3 == var1)) { _fun0006_ip = 58; continue _fun0006 }
 56:
            return var2;
 58:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function getQuarantineEventFromMessage(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = _closure1_slot11;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 6;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var3.bind(var2)(var1);
            var1 = var1.AutomodMessageEmbedKeys;
            var3 = var1.QUARANTINE_EVENT;
            var1 = arg1;
            var1 = var4.bind(var2)(var1, var3);
            var3 = null;
            if(!(var3 == var1)) { _fun0007_ip = 58; continue _fun0007 }
 56:
            return var2;
 58:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function _getUserProfileRuleHeaderText(arg1, arg2, arg3) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var4 = arg1;
            var3 = arg2;
            var5 = arg3;
            var7 = _closure1_slot0;
            var1 = _closure1_slot1;
            var8 = 7;
            var1 = var1[var8];
            var6 = undefined;
            var1 = var7.bind(var6)(var1);
            var1 = var1.AutomodQuarantineUserActionMessageEmbedKeys;
            var1 = var1.BLOCK_PROFILE_UPDATE;
            if(!(var1 !== var3)) { _fun0008_ip = 565; continue _fun0008 }
 53:
            var7 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var8];
            var1 = var7.bind(var6)(var1);
            var1 = var1.AutomodQuarantineUserActionMessageEmbedKeys;
            var1 = var1.QUARANTINE_USER;
            if(!(var1 !== var3)) { _fun0008_ip = 180; continue _fun0008 }
 86:
            var7 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var8];
            var1 = var7.bind(var6)(var1);
            var1 = var1.AutomodQuarantineUserActionMessageEmbedKeys;
            var1 = var1.BLOCK_GUEST_JOIN;
            if(!(var1 !== var3)) { _fun0008_ip = 121; continue _fun0008 }
 119:
            return var6;
 121:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 9;
            var3 = var9[var1];
            var3 = var8.bind(var6)(var3);
            var7 = var3.intl;
            var3 = var7.string;
            var1 = var9[var1];
            var1 = var8.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.MrYeyc;
            var1 = var3.bind(var7)(var1);
            return var1;
 180:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var7 = 10;
            var1 = var1[var7];
            var1 = var3.bind(var6)(var1);
            var1 = var1.AutomodQuarantineEventMessageEmbedKeys;
            var1 = var1.MESSAGE_SEND;
            if(!(var1 !== var5)) { _fun0008_ip = 506; continue _fun0008 }
 219:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var7];
            var1 = var3.bind(var6)(var1);
            var1 = var1.AutomodQuarantineEventMessageEmbedKeys;
            var1 = var1.GUILD_JOIN;
            if(!(var1 !== var5)) { _fun0008_ip = 447; continue _fun0008 }
 255:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var7];
            var1 = var3.bind(var6)(var1);
            var1 = var1.AutomodQuarantineEventMessageEmbedKeys;
            var1 = var1.USERNAME_UPDATE;
            if(!(var1 !== var5)) { _fun0008_ip = 388; continue _fun0008 }
 288:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var7];
            var1 = var3.bind(var6)(var1);
            var1 = var1.AutomodQuarantineEventMessageEmbedKeys;
            var3 = var1.CLAN_TAG_UPDATE;
            var1 = undefined;
            if(!(var3 === var5)) { _fun0008_ip = 563; continue _fun0008 }
 326:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 9;
            var5 = var9[var3];
            var5 = var8.bind(var6)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var3 = var9[var3];
            var3 = var8.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.qV4K6u;
            var1 = var5.bind(var7)(var3);
            _fun0008_ip = 563; continue _fun0008;
 388:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 9;
            var5 = var9[var3];
            var5 = var8.bind(var6)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var3 = var9[var3];
            var3 = var8.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.KNSkCw;
            var1 = var5.bind(var7)(var3);
            _fun0008_ip = 563; continue _fun0008;
 447:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 9;
            var5 = var9[var3];
            var5 = var8.bind(var6)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var3 = var9[var3];
            var3 = var8.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.m9wWzs;
            var1 = var5.bind(var7)(var3);
            _fun0008_ip = 563; continue _fun0008;
 506:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 9;
            var5 = var9[var3];
            var5 = var8.bind(var6)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var3 = var9[var3];
            var3 = var8.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.PmSMMT;
            var1 = var5.bind(var7)(var3);
 563:
            return var1;
 565:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var5 = 8;
            var1 = var1[var5];
            var1 = var3.bind(var6)(var1);
            var1 = var1.AutomodBlockProfileUpdateMessageEmbedKeys;
            var1 = var1.NICKNAME_UPDATE;
            if(!(var1 !== var4)) { _fun0008_ip = 695; continue _fun0008 }
 601:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var3.bind(var6)(var1);
            var1 = var1.AutomodBlockProfileUpdateMessageEmbedKeys;
            var3 = var1.NICKNAME_RESET;
            var1 = undefined;
            if(!(var3 === var4)) { _fun0008_ip = 752; continue _fun0008 }
 636:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 9;
            var4 = var8[var3];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.7u/rlZ;
            var1 = var4.bind(var5)(var3);
            _fun0008_ip = 752; continue _fun0008;
 695:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 9;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.t98DPT;
            var1 = var3.bind(var4)(var2);
 752:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var5 = function getChannelName(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var4 = arg1;
            var1 = arg2;
            if(var1) { _fun0009_ip = 71; continue _fun0009 }
 9:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 9;
            var2 = var7[var1];
            var5 = undefined;
            var2 = var6.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1./YzI6+;
            var1 = var2.bind(var3)(var1);
            _fun0009_ip = 154; continue _fun0009;
 71:
            var3 = null;
            var5 = var3 == var4;
            var7 = undefined;
            var2 = undefined;
            if(var5) { _fun0009_ip = 89; continue _fun0009 }
 84:
            var2 = var4.name;
 89:
            if(!(var3 == var2)) { _fun0009_ip = 151; continue _fun0009 }
 93:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 9;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.J90oLS;
            var2 = var4.bind(var5)(var3);
 151:
            var1 = var2;
 154:
            return var1;
        }
    };
    var _closure1_slot19 = var5;
    var4 = function extractAutomodMessageFields(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var8 = arg1;
            var7 = _closure1_slot11;
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var6 = 6;
            var1 = var10[var6];
            var2 = undefined;
            var1 = var9.bind(var2)(var1);
            var1 = var1.AutomodMessageEmbedKeys;
            var1 = var1.CHANNEL_ID;
            var4 = var7.bind(var2)(var8, var1);
            var1 = var10[var6];
            var1 = var9.bind(var2)(var1);
            var1 = var1.AutomodMessageEmbedKeys;
            var1 = var1.ALERT_ACTIONS_EXECUTION;
            var11 = var7.bind(var2)(var8, var1);
            var1 = 15;
            var1 = var10[var1];
            var3 = var9.bind(var2)(var1);
            var1 = var3.parseAlertActionsExecution;
            var3 = var1.bind(var3)(var11);
            var1 = {};
            var11 = _closure1_slot12;
            var11 = var11.bind(var2)(var8);
            var1['content'] = var11;
            var11 = var10[var6];
            var11 = var9.bind(var2)(var11);
            var11 = var11.AutomodMessageEmbedKeys;
            var11 = var11.RULE_NAME;
            var11 = var7.bind(var2)(var8, var11);
            var1['ruleName'] = var11;
            var11 = var10[var6];
            var11 = var9.bind(var2)(var11);
            var11 = var11.AutomodMessageEmbedKeys;
            var11 = var11.DECISION_ID;
            var11 = var7.bind(var2)(var8, var11);
            var1['decisionId'] = var11;
            var11 = var10[var6];
            var11 = var9.bind(var2)(var11);
            var11 = var11.AutomodMessageEmbedKeys;
            var11 = var11.KEYWORD;
            var11 = var7.bind(var2)(var8, var11);
            var1['keyword'] = var11;
            var11 = var10[var6];
            var11 = var9.bind(var2)(var11);
            var11 = var11.AutomodMessageEmbedKeys;
            var11 = var11.KEYWORD_MATCHED_CONTENT;
            var11 = var7.bind(var2)(var8, var11);
            var1['keywordMatchedContent'] = var11;
            var11 = var10[var6];
            var11 = var9.bind(var2)(var11);
            var11 = var11.AutomodMessageEmbedKeys;
            var11 = var11.FLAGGED_MESSAGE_ID;
            var11 = var7.bind(var2)(var8, var11);
            var1['flaggedMessageId'] = var11;
            var11 = var10[var6];
            var11 = var9.bind(var2)(var11);
            var11 = var11.AutomodMessageEmbedKeys;
            var11 = var11.TIMEOUT_DURATION;
            var11 = var7.bind(var2)(var8, var11);
            var1['timeoutDuration'] = var11;
            var11 = var10[var6];
            var11 = var9.bind(var2)(var11);
            var11 = var11.AutomodMessageEmbedKeys;
            var11 = var11.QUARANTINE_USER;
            var11 = var7.bind(var2)(var8, var11);
            var1['quarantineType'] = var11;
            var11 = var10[var6];
            var11 = var9.bind(var2)(var11);
            var11 = var11.AutomodMessageEmbedKeys;
            var11 = var11.QUARANTINE_USER_ACTION;
            var11 = var7.bind(var2)(var8, var11);
            var1['quarantineAction'] = var11;
            var11 = var10[var6];
            var11 = var9.bind(var2)(var11);
            var11 = var11.AutomodMessageEmbedKeys;
            var11 = var11.DECISION_REASON;
            var11 = var7.bind(var2)(var8, var11);
            var1['decisionReason'] = var11;
            var11 = var10[var6];
            var11 = var9.bind(var2)(var11);
            var11 = var11.AutomodMessageEmbedKeys;
            var11 = var11.APPLICATION_NAME;
            var11 = var7.bind(var2)(var8, var11);
            var1['applicationName'] = var11;
            var11 = var10[var6];
            var11 = var9.bind(var2)(var11);
            var11 = var11.AutomodMessageEmbedKeys;
            var11 = var11.INTERACTION_USER_ID;
            var11 = var7.bind(var2)(var8, var11);
            var1['interactionUserId'] = var11;
            var6 = var10[var6];
            var6 = var9.bind(var2)(var6);
            var6 = var6.AutomodMessageEmbedKeys;
            var6 = var6.INTERACTION_CALLBACK_TYPE;
            var6 = var7.bind(var2)(var8, var6);
            var1['interactionCallbackType'] = var6;
            var6 = _closure1_slot4;
            var5 = var6.getChannel;
            var5 = var5.bind(var6)(var4);
            var1['embedChannel'] = var5;
            var1['embedChannelId'] = var4;
            var4 = null;
            var4 = var4 != var3;
            if(!var4) { _fun0010_ip = 545; continue _fun0010 }
 542:
            var2 = var3;
 545:
            var1['alertActionsExecution'] = var2;
            return var1;
        }
    };
    var _closure1_slot20 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var2, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var10 = var8[var6];
    var6 = native4;
    var6 = var6.bind(var1)(var10);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.MessageEmbedTypes;
    var _closure1_slot7 = var9;
    var9 = var6.MessageTypes;
    var _closure1_slot8 = var9;
    var9 = var6.NOOP_NULL;
    var _closure1_slot9 = var9;
    var6 = var6.Permissions;
    var _closure1_slot10 = var6;
    var6 = 18;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_automod/AutomodMessageUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function useAutomodMessageFields(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var6 = _closure1_slot3;
        var5 = var6.useMemo;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() {
            var3 = _closure1_slot20;
            var2 = _closure2_slot0;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var2 = var5.bind(var6)(var2, var4);
        var _closure2_slot1 = var2;
        var6 = _closure1_slot0;
        var5 = _closure1_slot1;
        var4 = 16;
        var5 = var5[var4];
        var4 = undefined;
        var6 = var6.bind(var4)(var5);
        var5 = var6.useStateFromStores;
        var3 = _closure1_slot4;
        var4 = new Array(1);
        var4[0] = var3;
        var7 = var2.embedChannelId;
        var3 = new Array(1);
        var3[0] = var7;
        var1 = function() {
            var3 = _closure1_slot4;
            var2 = var3.getChannel;
            var1 = _closure2_slot1;
            var1 = var1.embedChannelId;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = var5.bind(var6)(var4, var1, var3);
        var1 = {};
        var10 = var1;
        var9 = var2;
        var2 = copyDataProperties(var10, var9);
        var2 = 'embedChannel';
        var1[var2] = var3;
        return var1;
    };
    var2['default'] = var6;
    var6 = function isAutomodMessageRecord(arg1) {
        var1 = arg1;
        var2 = var1.type;
        var1 = _closure1_slot8;
        var1 = var1.AUTO_MODERATION_ACTION;
        var1 = var2 === var1;
        return var1;
    };
    var2['isAutomodMessageRecord'] = var6;
    var6 = function isAutomodNotification(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var4 = var1.embeds;
            var1 = null;
            var2 = var1 == var4;
            var1 = undefined;
            if(var2) { _fun0011_ip = 38; continue _fun0011 }
 20:
            var3 = var4.some;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot7;
                var1 = var1.AUTO_MODERATION_NOTIFICATION;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var3.bind(var4)(var2);
 38:
            return var1;
        }
    };
    var2['isAutomodNotification'] = var6;
    var6 = function getActionHeaderTextMobile(arg1, arg2, arg3) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var9 = arg1;
            var8 = arg2;
            var1 = _closure1_slot16;
            var11 = undefined;
            var6 = var1.bind(var11)(var9);
            var1 = _closure1_slot15;
            var5 = var1.bind(var11)(var9);
            var1 = _closure1_slot17;
            var3 = var1.bind(var11)(var9);
            var1 = _closure1_slot14;
            var1 = var1.bind(var11)(var9);
            var2 = null;
            if(!(var2 != var1)) { _fun0012_ip = 71; continue _fun0012 }
 53:
            var1 = _closure1_slot18;
            var1 = var1.bind(var11)(var6, var5, var3);
            if(!(var2 == var1)) { _fun0012_ip = 777; continue _fun0012 }
 71:
            var3 = _closure1_slot13;
            var5 = var3.bind(var11)(var9);
            var7 = _closure1_slot11;
            var10 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 6;
            var6 = var12[var3];
            var6 = var10.bind(var11)(var6);
            var6 = var6.AutomodMessageEmbedKeys;
            var6 = var6.INTERACTION_CALLBACK_TYPE;
            var6 = var7.bind(var11)(var9, var6);
            var3 = var12[var3];
            var3 = var10.bind(var11)(var3);
            var3 = var3.AutomodMessageEmbedKeys;
            var3 = var3.APPLICATION_NAME;
            var10 = var7.bind(var11)(var9, var3);
            if(!(var2 == var10)) { _fun0012_ip = 310; continue _fun0012 }
 156:
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 12;
            var3 = var9[var3];
            var3 = var7.bind(var11)(var3);
            var3 = var3.AutomodDecisionOutcomeEmbedKeys;
            var3 = var3.BLOCKED;
            if(!(var5 === var3)) { _fun0012_ip = 251; continue _fun0012 }
 192:
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var3 = 9;
            var7 = var13[var3];
            var7 = var12.bind(var11)(var7);
            var9 = var7.intl;
            var7 = var9.string;
            var3 = var13[var3];
            var3 = var12.bind(var11)(var3);
            var3 = var3.t;
            var3 = var3.2kuGkJ;
            var3 = var7.bind(var9)(var3);
            _fun0012_ip = 308; continue _fun0012;
 251:
            var13 = _closure1_slot0;
            var14 = _closure1_slot1;
            var7 = 9;
            var9 = var14[var7];
            var9 = var13.bind(var11)(var9);
            var12 = var9.intl;
            var9 = var12.string;
            var7 = var14[var7];
            var7 = var13.bind(var11)(var7);
            var7 = var7.t;
            var7 = var7.Oo38tr;
            var3 = var9.bind(var12)(var7);
 308:
            return var3;
 310:
            var9 = _closure1_slot6;
            var7 = var9.getUser;
            var3 = arg3;
            var9 = var7.bind(var9)(var3);
            var7 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 11;
            var3 = var12[var3];
            var3 = var7.bind(var11)(var3);
            var3 = var3.AutomodInteractionCallbackTypeEmbedKeys;
            var3 = var3.MODAL;
            if(!(var6 === var3)) { _fun0012_ip = 371; continue _fun0012 }
 364:
            if(!(var2 == var9)) { _fun0012_ip = 564; continue _fun0012 }
 371:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 12;
            var2 = var6[var2];
            var2 = var3.bind(var11)(var2);
            var2 = var2.AutomodDecisionOutcomeEmbedKeys;
            var2 = var2.BLOCKED;
            if(!(var5 === var2)) { _fun0012_ip = 484; continue _fun0012 }
 407:
            var3 = _closure1_slot0;
            var12 = _closure1_slot1;
            var2 = 9;
            var6 = var12[var2];
            var6 = var3.bind(var11)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var2 = var12[var2];
            var2 = var3.bind(var11)(var2);
            var2 = var2.t;
            var3 = var2.I0FiWl;
            var2 = {};
            var2['applicationName'] = var10;
            var12 = var8.username;
            var2['integrationOwner'] = var12;
            var2 = var6.bind(var7)(var3, var2);
            _fun0012_ip = 559; continue _fun0012;
 484:
            var6 = _closure1_slot0;
            var13 = _closure1_slot1;
            var3 = 9;
            var7 = var13[var3];
            var7 = var6.bind(var11)(var7);
            var12 = var7.intl;
            var7 = var12.formatToPlainString;
            var3 = var13[var3];
            var3 = var6.bind(var11)(var3);
            var3 = var3.t;
            var6 = var3.0Kmtr6;
            var3 = {};
            var3['applicationName'] = var10;
            var13 = var8.username;
            var3['integrationOwner'] = var13;
            var2 = var7.bind(var12)(var6, var3);
 559:
            _fun0012_ip = 775; continue _fun0012;
 564:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 12;
            var3 = var7[var3];
            var3 = var6.bind(var11)(var3);
            var3 = var3.AutomodDecisionOutcomeEmbedKeys;
            var3 = var3.BLOCKED;
            if(!(var5 === var3)) { _fun0012_ip = 687; continue _fun0012 }
 600:
            var5 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 9;
            var6 = var12[var3];
            var6 = var5.bind(var11)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var3 = var12[var3];
            var3 = var5.bind(var11)(var3);
            var3 = var3.t;
            var5 = var3.MCK/t7;
            var3 = {};
            var3['applicationName'] = var10;
            var12 = var9.username;
            var3['interactionUser'] = var12;
            var12 = var8.username;
            var3['integrationOwner'] = var12;
            var3 = var6.bind(var7)(var5, var3);
            _fun0012_ip = 772; continue _fun0012;
 687:
            var5 = _closure1_slot0;
            var12 = _closure1_slot1;
            var4 = 9;
            var6 = var12[var4];
            var6 = var5.bind(var11)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var4 = var12[var4];
            var4 = var5.bind(var11)(var4);
            var4 = var4.t;
            var5 = var4.Xy2Iw8;
            var4 = {};
            var4['applicationName'] = var10;
            var9 = var9.username;
            var4['interactionUser'] = var9;
            var8 = var8.username;
            var4['integrationOwner'] = var8;
            var3 = var6.bind(var7)(var5, var4);
 772:
            var2 = var3;
 775:
            return var2;
 777:
            return var1;
        }
    };
    var2['getActionHeaderTextMobile'] = var6;
    var2['getChannelName'] = var5;
    var5 = function getActionHeaderText(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var5 = arg1;
            var3 = arg2;
            var17 = arguments[2];
            var10 = arguments[3];
            var11 = arguments[4];
            var13 = undefined;
            if(!(var17 === var13)) { _fun0013_ip = 28; continue _fun0013 }
 21:
            var17 = _closure1_slot9;
 28:
            var1 = _closure1_slot16;
            var15 = var1.bind(var13)(var5);
            var1 = _closure1_slot15;
            var9 = var1.bind(var13)(var5);
            var1 = _closure1_slot17;
            var2 = var1.bind(var13)(var5);
            var1 = _closure1_slot14;
            var1 = var1.bind(var13)(var5);
            var4 = _closure1_slot13;
            var7 = var4.bind(var13)(var5);
            var12 = _closure1_slot11;
            var16 = _closure1_slot0;
            var4 = _closure1_slot1;
            var14 = 6;
            var8 = var4[var14];
            var8 = var16.bind(var13)(var8);
            var8 = var8.AutomodMessageEmbedKeys;
            var8 = var8.INTERACTION_CALLBACK_TYPE;
            var8 = var12.bind(var13)(var5, var8);
            var4 = var4[var14];
            var4 = var16.bind(var13)(var4);
            var4 = var4.AutomodMessageEmbedKeys;
            var4 = var4.APPLICATION_NAME;
            var12 = var12.bind(var13)(var5, var4);
            var4 = null;
            if(!(var4 != var1)) { _fun0013_ip = 169; continue _fun0013 }
 151:
            var1 = _closure1_slot18;
            var1 = var1.bind(var13)(var15, var9, var2);
            if(!(var4 == var1)) { _fun0013_ip = 1036; continue _fun0013 }
 169:
            var15 = _closure1_slot5;
            var9 = var15.can;
            var2 = _closure1_slot10;
            var2 = var2.VIEW_CHANNEL;
            var2 = var9.bind(var15)(var2, var3);
            var9 = _closure1_slot19;
            var16 = var9.bind(var13)(var3, var2);
            if(!(var4 != var3)) { _fun0013_ip = 215; continue _fun0013 }
 209:
            var15 = var17;
            if(var2) { _fun0013_ip = 219; continue _fun0013 }
 215:
            var15 = _closure1_slot9;
 219:
            var3 = _closure1_slot11;
            var9 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var14];
            var2 = var9.bind(var13)(var2);
            var2 = var2.AutomodMessageEmbedKeys;
            var2 = var2.VOICE_CHANNEL_STATUS_OUTCOME;
            var5 = var3.bind(var13)(var5, var2);
            var3 = var4 == var5;
            var2 = null;
            if(var3) { _fun0013_ip = 394; continue _fun0013 }
 270:
            var3 = 'blocked';
            if(!(var3 !== var5)) { _fun0013_ip = 313; continue _fun0013 }
 278:
            var5 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 9;
            var3 = var9[var3];
            var3 = var5.bind(var13)(var3);
            var3 = var3.t;
            var14 = var3.bma6cn;
            _fun0013_ip = 346; continue _fun0013;
 313:
            var5 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 9;
            var3 = var9[var3];
            var3 = var5.bind(var13)(var3);
            var3 = var3.t;
            var14 = var3.cLQrq6;
 346:
            var5 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 9;
            var3 = var9[var3];
            var3 = var5.bind(var13)(var3);
            var9 = var3.intl;
            var5 = var9.format;
            var3 = {};
            var3['channelName'] = var16;
            var3['channelHook'] = var17;
            var2 = var5.bind(var9)(var14, var3);
 394:
            if(!(var4 == var2)) { _fun0013_ip = 1034; continue _fun0013 }
 401:
            if(!(var4 == var12)) { _fun0013_ip = 591; continue _fun0013 }
 408:
            var5 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 12;
            var3 = var9[var3];
            var3 = var5.bind(var13)(var3);
            var3 = var3.AutomodDecisionOutcomeEmbedKeys;
            var3 = var3.BLOCKED;
            if(!(var7 === var3)) { _fun0013_ip = 516; continue _fun0013 }
 444:
            var5 = _closure1_slot0;
            var17 = _closure1_slot1;
            var3 = 9;
            var9 = var17[var3];
            var9 = var5.bind(var13)(var9);
            var14 = var9.intl;
            var9 = var14.format;
            var3 = var17[var3];
            var3 = var5.bind(var13)(var3);
            var3 = var3.t;
            var5 = var3.lOIOSE;
            var3 = {};
            var3['channelName'] = var16;
            var3['channelHook'] = var15;
            var3 = var9.bind(var14)(var5, var3);
            _fun0013_ip = 586; continue _fun0013;
 516:
            var9 = _closure1_slot0;
            var18 = _closure1_slot1;
            var5 = 9;
            var14 = var18[var5];
            var14 = var9.bind(var13)(var14);
            var17 = var14.intl;
            var14 = var17.format;
            var5 = var18[var5];
            var5 = var9.bind(var13)(var5);
            var5 = var5.t;
            var9 = var5.IZg0VV;
            var5 = {};
            var5['channelName'] = var16;
            var5['channelHook'] = var15;
            var3 = var14.bind(var17)(var9, var5);
 586:
            _fun0013_ip = 1031; continue _fun0013;
 591:
            var9 = _closure1_slot0;
            var14 = _closure1_slot1;
            var5 = 11;
            var5 = var14[var5];
            var5 = var9.bind(var13)(var5);
            var5 = var5.AutomodInteractionCallbackTypeEmbedKeys;
            var5 = var5.MODAL;
            if(!(var8 === var5)) { _fun0013_ip = 634; continue _fun0013 }
 627:
            if(!(var4 == var11)) { _fun0013_ip = 837; continue _fun0013 }
 634:
            var5 = _closure1_slot0;
            var8 = _closure1_slot1;
            var4 = 12;
            var4 = var8[var4];
            var4 = var5.bind(var13)(var4);
            var4 = var4.AutomodDecisionOutcomeEmbedKeys;
            var4 = var4.BLOCKED;
            if(!(var7 === var4)) { _fun0013_ip = 752; continue _fun0013 }
 670:
            var5 = _closure1_slot0;
            var14 = _closure1_slot1;
            var4 = 9;
            var8 = var14[var4];
            var8 = var5.bind(var13)(var8);
            var9 = var8.intl;
            var8 = var9.format;
            var4 = var14[var4];
            var4 = var5.bind(var13)(var4);
            var4 = var4.t;
            var5 = var4.s3tjMD;
            var4 = {};
            var4['applicationName'] = var12;
            var4['channelName'] = var16;
            var4['channelHook'] = var15;
            var4['integrationOwnerHook'] = var10;
            var4 = var8.bind(var9)(var5, var4);
            _fun0013_ip = 832; continue _fun0013;
 752:
            var8 = _closure1_slot0;
            var17 = _closure1_slot1;
            var5 = 9;
            var9 = var17[var5];
            var9 = var8.bind(var13)(var9);
            var14 = var9.intl;
            var9 = var14.format;
            var5 = var17[var5];
            var5 = var8.bind(var13)(var5);
            var5 = var5.t;
            var8 = var5.AXQufH;
            var5 = {};
            var5['applicationName'] = var12;
            var5['channelName'] = var16;
            var5['channelHook'] = var15;
            var5['integrationOwnerHook'] = var10;
            var4 = var9.bind(var14)(var8, var5);
 832:
            _fun0013_ip = 1028; continue _fun0013;
 837:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 12;
            var5 = var9[var5];
            var5 = var8.bind(var13)(var5);
            var5 = var5.AutomodDecisionOutcomeEmbedKeys;
            var5 = var5.BLOCKED;
            if(!(var7 === var5)) { _fun0013_ip = 950; continue _fun0013 }
 873:
            var7 = _closure1_slot0;
            var14 = _closure1_slot1;
            var5 = 9;
            var8 = var14[var5];
            var8 = var7.bind(var13)(var8);
            var9 = var8.intl;
            var8 = var9.format;
            var5 = var14[var5];
            var5 = var7.bind(var13)(var5);
            var5 = var5.t;
            var7 = var5.S3lNIS;
            var5 = {};
            var5['applicationName'] = var12;
            var5['interactionUserHook'] = var11;
            var5['integrationOwnerHook'] = var10;
            var5 = var8.bind(var9)(var7, var5);
            _fun0013_ip = 1025; continue _fun0013;
 950:
            var7 = _closure1_slot0;
            var14 = _closure1_slot1;
            var6 = 9;
            var8 = var14[var6];
            var8 = var7.bind(var13)(var8);
            var9 = var8.intl;
            var8 = var9.format;
            var6 = var14[var6];
            var6 = var7.bind(var13)(var6);
            var6 = var6.t;
            var7 = var6.4xL9Sk;
            var6 = {};
            var6['applicationName'] = var12;
            var6['interactionUserHook'] = var11;
            var6['integrationOwnerHook'] = var10;
            var5 = var8.bind(var9)(var7, var6);
 1025:
            var4 = var5;
 1028:
            var3 = var4;
 1031:
            var2 = var3;
 1034:
            return var2;
 1036:
            return var1;
        }
    };
    var2['getActionHeaderText'] = var5;
    var5 = function getQuarantineReasonString(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var6 = 13;
            var2 = var2[var6];
            var5 = undefined;
            var2 = var4.bind(var5)(var2);
            var2 = var2.AutomodQuarantineUserMessageEmbedKeys;
            var2 = var2.NICKNAME;
            if(!(var2 !== var3)) { _fun0014_ip = 384; continue _fun0014 }
 47:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.AutomodQuarantineUserMessageEmbedKeys;
            var2 = var2.USERNAME;
            if(!(var2 !== var3)) { _fun0014_ip = 327; continue _fun0014 }
 83:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.AutomodQuarantineUserMessageEmbedKeys;
            var2 = var2.GLOBAL_NAME;
            if(!(var2 !== var3)) { _fun0014_ip = 268; continue _fun0014 }
 119:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.AutomodQuarantineUserMessageEmbedKeys;
            var2 = var2.CLAN_TAG;
            if(!(var2 !== var3)) { _fun0014_ip = 209; continue _fun0014 }
 152:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 9;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.pJQVnp;
            var2 = var3.bind(var4)(var2);
            return var2;
 209:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 9;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Rtum09;
            var2 = var3.bind(var4)(var2);
            return var2;
 268:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 9;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.V9eJ8/;
            var2 = var3.bind(var4)(var2);
            return var2;
 327:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 9;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.pJQVnp;
            var2 = var3.bind(var4)(var2);
            return var2;
 384:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 9;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.fkBQa2;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var2['getQuarantineReasonString'] = var5;
    var5 = function extractAutomodNotificationFields(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot11;
            var9 = _closure1_slot0;
            var13 = _closure1_slot1;
            var1 = 14;
            var4 = var13[var1];
            var2 = undefined;
            var4 = var9.bind(var2)(var4);
            var4 = var4.AutomodNotificationEmbedKeys;
            var4 = var4.NOTIFICATION_TYPE;
            var4 = var3.bind(var2)(var5, var4);
            var6 = var13[var1];
            var6 = var9.bind(var2)(var6);
            var6 = var6.AutomodNotificationEmbedKeys;
            var6 = var6.JOIN_ATTEMPTS;
            var11 = var3.bind(var2)(var5, var6);
            var6 = var13[var1];
            var6 = var9.bind(var2)(var6);
            var6 = var6.AutomodNotificationEmbedKeys;
            var6 = var6.RAID_DATETIME;
            var12 = var3.bind(var2)(var5, var6);
            var6 = var13[var1];
            var6 = var9.bind(var2)(var6);
            var6 = var6.AutomodNotificationEmbedKeys;
            var6 = var6.DMS_SENT;
            var10 = var3.bind(var2)(var5, var6);
            var6 = var13[var1];
            var6 = var9.bind(var2)(var6);
            var6 = var6.AutomodNotificationEmbedKeys;
            var6 = var6.RAID_TYPE;
            var8 = var3.bind(var2)(var5, var6);
            var6 = var13[var1];
            var6 = var9.bind(var2)(var6);
            var6 = var6.AutomodNotificationEmbedKeys;
            var6 = var6.RESOLVED_REASON;
            var7 = var3.bind(var2)(var5, var6);
            var6 = var13[var1];
            var6 = var9.bind(var2)(var6);
            var6 = var6.AutomodNotificationEmbedKeys;
            var6 = var6.DECISION_ID;
            var6 = var3.bind(var2)(var5, var6);
            var1 = var13[var1];
            var1 = var9.bind(var2)(var1);
            var1 = var1.AutomodNotificationEmbedKeys;
            var1 = var1.SUSPICIOUS_MENTION_ACTIVITY_UNTIL;
            var5 = var3.bind(var2)(var5, var1);
            var1 = {};
            var3 = null;
            var13 = var3 == var4;
            var9 = null;
            if(var13) { _fun0015_ip = 255; continue _fun0015 }
 252:
            var9 = var4;
 255:
            var13 = var3 != var9;
            var4 = undefined;
            if(!var13) { _fun0015_ip = 267; continue _fun0015 }
 264:
            var4 = var9;
 267:
            var1['notificationType'] = var4;
            var9 = var3 != var11;
            var4 = undefined;
            if(!var9) { _fun0015_ip = 294; continue _fun0015 }
 281:
            var9 = global;
            var9 = var9.parseInt;
            var4 = var9.bind(var2)(var11);
 294:
            var1['joinAttempts'] = var4;
            var9 = var3 != var12;
            var4 = undefined;
            if(!var9) { _fun0015_ip = 339; continue _fun0015 }
 308:
            var9 = global;
            var9 = var9.Date;
            var11 = var9.prototype;
            var11 = Object.create(var11, {constructor: {value: var9}});
            var16 = var11;
            var15 = var12;
            var9 = new var16[var9](var15, var14);
            var4 = var9 instanceof Object ? var9 : var11;
 339:
            var1['raidDatetime'] = var4;
            var9 = var3 != var10;
            var4 = undefined;
            if(!var9) { _fun0015_ip = 366; continue _fun0015 }
 353:
            var9 = global;
            var9 = var9.parseInt;
            var4 = var9.bind(var2)(var10);
 366:
            var1['dmsSent'] = var4;
            var9 = var3 != var8;
            var4 = undefined;
            if(!var9) { _fun0015_ip = 383; continue _fun0015 }
 380:
            var4 = var8;
 383:
            var1['raidType'] = var4;
            var8 = var3 != var7;
            var4 = undefined;
            if(!var8) { _fun0015_ip = 400; continue _fun0015 }
 397:
            var4 = var7;
 400:
            var1['resolvedReason'] = var4;
            var7 = var3 != var6;
            var4 = undefined;
            if(!var7) { _fun0015_ip = 417; continue _fun0015 }
 414:
            var4 = var6;
 417:
            var1['decisionId'] = var4;
            var3 = var3 != var5;
            var2 = undefined;
            if(!var3) { _fun0015_ip = 462; continue _fun0015 }
 431:
            var3 = global;
            var3 = var3.Date;
            var4 = var3.prototype;
            var4 = Object.create(var4, {constructor: {value: var3}});
            var16 = var4;
            var15 = var5;
            var3 = new var16[var3](var15, var14);
            var2 = var3 instanceof Object ? var3 : var4;
 462:
            var1['suspiciousMentionActivityUntil'] = var2;
            return var1;
        }
    };
    var2['extractAutomodNotificationFields'] = var5;
    var2['extractAutomodMessageFields'] = var4;
    var4 = function useAutomodAlertActions(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0016_ip = 43; continue _fun0016 }
 9:
            var3 = _closure1_slot20;
            var2 = undefined;
            var2 = var3.bind(var2)(var4);
            var3 = var2.alertActionsExecution;
            var4 = var1 != var3;
            var2 = null;
            if(!var4) { _fun0016_ip = 41; continue _fun0016 }
 38:
            var2 = var3;
 41:
            return var2;
 43:
            return var1;
        }
    };
    var2['useAutomodAlertActions'] = var4;
    var4 = function getRaidAlertResolveCTAText(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0017_ip = 361; continue _fun0017 }
 12:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var6 = 17;
            var2 = var2[var6];
            var5 = undefined;
            var2 = var4.bind(var5)(var2);
            var2 = var2.RaidResolutionType;
            var2 = var2.LEGITIMATE_ACTIVITY;
            if(!(var2 !== var3)) { _fun0017_ip = 302; continue _fun0017 }
 56:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.RaidResolutionType;
            var2 = var2.DM_SPAM;
            if(!(var2 !== var3)) { _fun0017_ip = 243; continue _fun0017 }
 92:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.RaidResolutionType;
            var2 = var2.JOIN_RAID;
            if(!(var2 !== var3)) { _fun0017_ip = 184; continue _fun0017 }
 125:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 9;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.GPg6JC;
            var2 = var3.bind(var4)(var2);
            return var2;
 184:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 9;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.qhaRbG;
            var2 = var3.bind(var4)(var2);
            return var2;
 243:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 9;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.j5V0io;
            var2 = var3.bind(var4)(var2);
            return var2;
 302:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 9;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.riQ+HB;
            var1 = var2.bind(var3)(var1);
            return var1;
 361:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 9;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.Gh3A0N;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var2['getRaidAlertResolveCTAText'] = var4;
    var3 = function getUserIdOfAutomodAction(arg1) {
        var4 = _closure1_slot11;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 14;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.AutomodNotificationEmbedKeys;
        var2 = var1.ACTION_BY_USER_ID;
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var2['getUserIdOfAutomodAction'] = var3;
    var2['IS_BACKWARDS_COMPAT_RAID_TYPE'] = var1;
    return var1;
})();