// app/modules/guild_automod/AutomodRuleUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var11;
    var6 = function validateKeywordsOrThrow(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var6 = arg2;
            var1 = var3.length;
            if(!(!(var1 > var6))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var7 = arg1;
                    var2 = var7.length;
                    var1 = _closure1_slot7;
                    if(!(!(var2 > var1))) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = var7.length;
                    var1 = _closure1_slot8;
                    if(!(!(var2 < var1))) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                    var1 = undefined;
                    return var1;
case 4:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var1 = 6;
                    var1 = var9[var1];
                    var2 = undefined;
                    var1 = var8.bind(var2)(var1);
                    var3 = var1.InvalidKeywordError;
                    var1 = 5;
                    var4 = var9[var1];
                    var4 = var8.bind(var2)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var1 = var9[var1];
                    var1 = var8.bind(var2)(var1);
                    var1 = var1.t;
                    var2 = var1.rbRvGR;
                    var1 = {};
                    var1['keyword'] = var7;
                    var7 = _closure1_slot7;
                    var1['max'] = var7;
                    var6 = _closure1_slot8;
                    var1['min'] = var6;
                    var11 = var4.bind(var5)(var2, var1);
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {constructor: {value: var3}});
                    var12 = var2;
                    var1 = new var12[var3](var11, var10);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
case 2:
            var1 = global;
            var3 = var1.Error;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 5;
            var4 = var8[var1];
            var2 = undefined;
            var4 = var7.bind(var2)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var1 = var8[var1];
            var1 = var7.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.mee4qa;
            var1 = {};
            var1['limit'] = var6;
            var10 = var4.bind(var5)(var2, var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var11 = var2;
            var1 = new var11[var3](var10, var9);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var _closure1_slot15 = var6;
    var5 = function validateRegexPatternsOrThrow(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var2 = var3.length;
            var1 = _closure1_slot6;
            if(!(!(var2 > var1))) { _fun0003_ip = 7; continue _fun0003 }
case 5:
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var7 = arg1;
                    var2 = var7.length;
                    var1 = _closure1_slot10;
                    if(!(!(var2 > var1))) { _fun0004_ip = 4; continue _fun0004 }
case 5:
                    var2 = var7.length;
                    var1 = _closure1_slot9;
                    if(!(!(var2 < var1))) { _fun0004_ip = 4; continue _fun0004 }
case 6:
                    var1 = undefined;
                    return var1;
case 4:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var1 = 6;
                    var1 = var9[var1];
                    var2 = undefined;
                    var1 = var8.bind(var2)(var1);
                    var3 = var1.InvalidRegexPatternError;
                    var1 = 5;
                    var4 = var9[var1];
                    var4 = var8.bind(var2)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var1 = var9[var1];
                    var1 = var8.bind(var2)(var1);
                    var1 = var1.t;
                    var2 = var1.WR0m9/;
                    var1 = {};
                    var1['regex'] = var7;
                    var7 = _closure1_slot10;
                    var1['max'] = var7;
                    var6 = _closure1_slot9;
                    var1['min'] = var6;
                    var11 = var4.bind(var5)(var2, var1);
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {constructor: {value: var3}});
                    var12 = var2;
                    var1 = new var12[var3](var11, var10);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
case 7:
            var1 = global;
            var3 = var1.Error;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 5;
            var4 = var8[var1];
            var2 = undefined;
            var4 = var7.bind(var2)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var1 = var8[var1];
            var1 = var7.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.tDjhFx;
            var1 = {};
            var6 = _closure1_slot6;
            var1['limit'] = var6;
            var10 = var4.bind(var5)(var2, var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var11 = var2;
            var1 = new var11[var3](var10, var9);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var _closure1_slot16 = var5;
    var4 = function isBackendPersistedRule(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 7;
            var1 = var3[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var2 = var3.isSnowflake;
            var1 = null;
            var6 = var1 == var5;
            if(var6) { _fun0005_ip = 8; continue _fun0005 }
case 9:
            var4 = var5.id;
case 8:
            var5 = var1 != var4;
            var1 = 'INVALID_SNOWFLAKE';
            if(!var5) { _fun0005_ip = 10; continue _fun0005 }
case 11:
            var1 = var4;
case 10:
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot17 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var8 = var11[var1];
    var7 = metroImportDefault;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var11[var7];
    var7 = var10.bind(var1)(var7);
    var7 = var7.getRuleCountByTriggerType;
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var11[var7];
    var7 = var10.bind(var1)(var7);
    var8 = var7.AutomodTriggerType;
    var _closure1_slot4 = var8;
    var8 = var7.MAX_KEYWORDS_PER_KEYWORD_FILTER;
    var _closure1_slot5 = var8;
    var8 = var7.MAX_REGEX_PATTERNS_PER_KEYWORD_FILTER;
    var _closure1_slot6 = var8;
    var8 = var7.MAX_CHARACTERS_PER_KEYWORD;
    var _closure1_slot7 = var8;
    var8 = var7.MIN_CHARACTERS_PER_KEYWORD;
    var _closure1_slot8 = var8;
    var8 = var7.MIN_REGEX_PATTERN_LENGTH;
    var _closure1_slot9 = var8;
    var8 = var7.MAX_REGEX_PATTERN_LENGTH;
    var _closure1_slot10 = var8;
    var8 = var7.AutomodActionType;
    var _closure1_slot11 = var8;
    var7 = var7.AutomodEventType;
    var _closure1_slot12 = var7;
    var8 = function getNewAutomodRuleMockId(arg1, arg2) {
        var1 = global;
        var1 = var1.HermesInternal;
        var6 = var1.concat;
        var11 = '';
        var10 = arg1;
        var9 = '-';
        var8 = arg2;
        var7 = '-new-rule';
        var1 = var11[var6](var10, var9, var8, var7, var6);
        return var1;
    };
    var _closure1_slot13 = var8;
    var7 = function isRuleKeywordFilter(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0006_ip = 12; continue _fun0006 }
case 13:
            var2 = var1.triggerType;
case 12:
            var1 = _closure1_slot4;
            var1 = var1.KEYWORD;
            var1 = var2 === var1;
            return var1;
        }
    };
    var _closure1_slot14 = var7;
    var9 = 8;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/guild_automod/AutomodRuleUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var3['getNewAutomodRuleMockId'] = var8;
    var3['isRuleKeywordFilter'] = var7;
    var7 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0007_ip = 12; continue _fun0007 }
case 13:
            var2 = var1.triggerType;
case 12:
            var1 = _closure1_slot4;
            var1 = var1.ML_SPAM;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['isRuleMLSpamFilter'] = var7;
    var7 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0008_ip = 12; continue _fun0008 }
case 13:
            var2 = var1.triggerType;
case 12:
            var1 = _closure1_slot4;
            var1 = var1.DEFAULT_KEYWORD_LIST;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['isRuleDefaultKeywordListFilter'] = var7;
    var7 = function(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0009_ip = 12; continue _fun0009 }
case 13:
            var2 = var1.triggerType;
case 12:
            var1 = _closure1_slot4;
            var1 = var1.MENTION_SPAM;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['isRuleMentionSpamFilter'] = var7;
    var7 = function(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0010_ip = 12; continue _fun0010 }
case 13:
            var2 = var1.triggerType;
case 12:
            var1 = _closure1_slot4;
            var1 = var1.SERVER_POLICY;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['isRuleServerPolicyFilter'] = var7;
    var7 = function(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0011_ip = 12; continue _fun0011 }
case 13:
            var2 = var1.triggerType;
case 12:
            var1 = _closure1_slot4;
            var1 = var1.USER_PROFILE;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['isRuleUserProfileFilter'] = var7;
    var7 = function createDefaultRule(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var8 = arg1;
            var7 = arg2;
            var4 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 3;
            var3 = var9[var2];
            var6 = undefined;
            var3 = var4.bind(var6)(var3);
            var3 = var3.triggerConfigs;
            var5 = var3[var7];
            var2 = var9[var2];
            var3 = var4.bind(var6)(var2);
            var2 = var3.getDefaultTriggerMetadataForTriggerType;
            var2 = var2.bind(var3)(var7, var8);
            var3 = {};
            var10 = _closure1_slot13;
            var10 = var10.bind(var6)(var8, var7);
            var3['id'] = var10;
            var10 = var5.getDefaultRuleName;
            var10 = var10.bind(var5)();
            var3['name'] = var10;
            var3['guildId'] = var8;
            var10 = var5.eventType;
            var3['eventType'] = var10;
            var3['triggerType'] = var7;
            var3['triggerMetadata'] = var2;
            var2 = true;
            var3['enabled'] = var2;
            var10 = _closure1_slot2;
            var2 = var10.getId;
            var2 = var2.bind(var10)();
            var3['creatorId'] = var2;
            var2 = 4;
            var2 = var9[var2];
            var4 = var4.bind(var6)(var2);
            var2 = var4.getRuleDefaultActionsFromConfig;
            var2 = var2.bind(var4)(var5);
            var3['actions'] = var2;
            var4 = 0;
            var3['position'] = var4;
            var2 = global;
            var5 = var2.Set;
            var9 = var5.prototype;
            var9 = Object.create(var9, {constructor: {value: var5}});
            var13 = var9;
            var5 = new var13[var5](var12);
            var5 = var5 instanceof Object ? var5 : var9;
            var3['exemptChannels'] = var5;
            var5 = var2.Set;
            var9 = var5.prototype;
            var9 = Object.create(var9, {constructor: {value: var5}});
            var13 = var9;
            var5 = new var13[var5](var12);
            var5 = var5 instanceof Object ? var5 : var9;
            var3['exemptRoles'] = var5;
            var5 = _closure1_slot17;
            var5 = var5.bind(var6)(var3);
            if(var5) { _fun0012_ip = 14; continue _fun0012 }
case 15:
            var5 = _closure1_slot3;
            var7 = var5.bind(var6)(var8, var7);
            if(!(var7 > var4)) { _fun0012_ip = 16; continue _fun0012 }
case 17:
            var5 = var3.name;
            var4 = 1;
            var8 = var7 + var4;
            var4 = var2.HermesInternal;
            var7 = var4.concat;
            var4 = ' ';
            var4 = var7.bind(var4)(var8);
            var4 = var5 + var4;
            var3['name'] = var4;
case 16:
            return var3;
case 14:
            var3 = var2.Error;
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 5;
            var2 = var7[var1];
            var2 = var5.bind(var6)(var2);
            var4 = var2.intl;
            var2 = var4.string;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.A/nX8P;
            var12 = var2.bind(var4)(var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var13 = var2;
            var1 = new var13[var3](var12, var11);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var3['createDefaultRule'] = var7;
    var3['validateKeywordsOrThrow'] = var6;
    var3['validateRegexPatternsOrThrow'] = var5;
    var5 = function validateRuleBeforeSaveOrThrow(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot14;
            var6 = undefined;
            var3 = var3.bind(var6)(var2);
            if(!var3) { _fun0013_ip = 18; continue _fun0013 }
case 12:
            var3 = var2.triggerMetadata;
            var7 = var3.keywordFilter;
            var3 = null;
            if(!(var3 == var7)) { _fun0013_ip = 7; continue _fun0013 }
case 2:
            var7 = new Array(0);
case 7:
            var4 = var2.triggerMetadata;
            var4 = var4.regexPatterns;
            if(!(var3 == var4)) { _fun0013_ip = 19; continue _fun0013 }
case 20:
            var4 = new Array(0);
case 19:
            var3 = var7.length;
            var5 = 0;
            if(!(var5 === var3)) { _fun0013_ip = 21; continue _fun0013 }
case 22:
            var3 = var4.length;
            if(!(var5 !== var3)) { _fun0013_ip = 23; continue _fun0013 }
case 21:
            var5 = _closure1_slot15;
            var3 = _closure1_slot5;
            var3 = var5.bind(var6)(var7, var3);
            var3 = _closure1_slot16;
            var3 = var3.bind(var6)(var4);
case 18:
            var2 = var2.actions;
            var3 = var2.length;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0013_ip = 24; continue _fun0013 }
case 25:
            return var6;
case 24:
            var2 = global;
            var4 = var2.Error;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 5;
            var3 = var8[var2];
            var3 = var7.bind(var6)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.t+gj5e;
            var10 = var3.bind(var5)(var2);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var11 = var3;
            var2 = new var11[var4](var10, var9);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 23:
            var2 = global;
            var3 = var2.Error;
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 5;
            var2 = var7[var1];
            var2 = var5.bind(var6)(var2);
            var4 = var2.intl;
            var2 = var4.string;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.kz2Av7;
            var10 = var2.bind(var4)(var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var11 = var2;
            var1 = new var11[var3](var10, var9);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var3['validateRuleBeforeSaveOrThrow'] = var5;
    var3['isBackendPersistedRule'] = var4;
    var4 = function eventTypeToName(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot12;
            var2 = var2.MESSAGE_SEND;
            if(!(var2 !== var3)) { _fun0014_ip = 26; continue _fun0014 }
case 27:
            var2 = _closure1_slot12;
            var2 = var2.GUILD_MEMBER_JOIN_OR_UPDATE;
            if(!(var2 !== var3)) { _fun0014_ip = 28; continue _fun0014 }
case 29:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.SP9BBw;
            var2 = var3.bind(var4)(var2);
            return var2;
case 28:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Q+68IS;
            var2 = var3.bind(var4)(var2);
            return var2;
case 26:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 5;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.NlQW4O;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['eventTypeToName'] = var4;
    var4 = function actionTypeToName(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot11;
            var2 = var2.BLOCK_MESSAGE;
            if(!(var2 !== var3)) { _fun0015_ip = 30; continue _fun0015 }
case 27:
            var2 = _closure1_slot11;
            var2 = var2.FLAG_TO_CHANNEL;
            if(!(var2 !== var3)) { _fun0015_ip = 15; continue _fun0015 }
case 31:
            var2 = _closure1_slot11;
            var2 = var2.USER_COMMUNICATION_DISABLED;
            if(!(var2 !== var3)) { _fun0015_ip = 32; continue _fun0015 }
case 33:
            var2 = _closure1_slot11;
            var2 = var2.QUARANTINE_USER;
            if(!(var2 !== var3)) { _fun0015_ip = 34; continue _fun0015 }
case 35:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.SP9BBw;
            var2 = var3.bind(var4)(var2);
            return var2;
case 34:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.NPO8eX;
            var2 = var3.bind(var4)(var2);
            return var2;
case 32:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.6WPxY2;
            var2 = var3.bind(var4)(var2);
            return var2;
case 15:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Y+Vmvb;
            var2 = var3.bind(var4)(var2);
            return var2;
case 30:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 5;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.d1ab8v;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['actionTypeToName'] = var4;
    var2 = function triggerTypeToName(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot4;
            var2 = var2.KEYWORD;
            if(!(var2 !== var3)) { _fun0016_ip = 36; continue _fun0016 }
case 27:
            var2 = _closure1_slot4;
            var2 = var2.ML_SPAM;
            if(!(var2 !== var3)) { _fun0016_ip = 37; continue _fun0016 }
case 31:
            var2 = _closure1_slot4;
            var2 = var2.DEFAULT_KEYWORD_LIST;
            if(!(var2 !== var3)) { _fun0016_ip = 38; continue _fun0016 }
case 33:
            var2 = _closure1_slot4;
            var2 = var2.MENTION_SPAM;
            if(!(var2 !== var3)) { _fun0016_ip = 39; continue _fun0016 }
case 40:
            var2 = _closure1_slot4;
            var2 = var2.USER_PROFILE;
            if(!(var2 !== var3)) { _fun0016_ip = 41; continue _fun0016 }
case 42:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.SP9BBw;
            var2 = var3.bind(var4)(var2);
            return var2;
case 41:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.q1L2v7;
            var2 = var3.bind(var4)(var2);
            return var2;
case 39:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.pX7i6u;
            var2 = var3.bind(var4)(var2);
            return var2;
case 38:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.LnGhZm;
            var2 = var3.bind(var4)(var2);
            return var2;
case 37:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 5;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.puF/Oj;
            var2 = var3.bind(var4)(var2);
            return var2;
case 36:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 5;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.ffR2cH;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['triggerTypeToName'] = var2;
    return var1;
})();