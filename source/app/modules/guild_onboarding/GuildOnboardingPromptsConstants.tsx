// app/modules/guild_onboarding/GuildOnboardingPromptsConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var14 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var15 = dependencyMap;
    var _closure1_slot0 = var14;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var15;
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
            var9 = _closure1_slot12;
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
            var7 = _closure1_slot12;
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
    var _closure1_slot11 = var1;
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
    var _closure1_slot12 = var1;
    var8 = function getDefaultPrompt() {
        var1 = {'id': null, 'title': null, 'options': null, 'singleSelect': false, 'required': false, 'inOnboarding': true};
        var2 = global;
        var3 = var2.String;
        var4 = var2.Date;
        var2 = var4.now;
        var2 = var2.bind(var4)();
        var7 = undefined;
        var2 = var3.bind(var7)(var2);
        var1['id'] = var2;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 4;
        var4 = var8[var3];
        var4 = var6.bind(var7)(var4);
        var5 = var4.intl;
        var4 = var5.string;
        var3 = var8[var3];
        var3 = var6.bind(var7)(var3);
        var3 = var3.t;
        var3 = var3.vY91C9;
        var3 = var4.bind(var5)(var3);
        var1['title'] = var3;
        var3 = new Array(0);
        var1['options'] = var3;
        var2 = _closure1_slot7;
        var2 = var2.MULTIPLE_CHOICE;
        var1['type'] = var2;
        return var1;
    };
    var _closure1_slot13 = var8;
    var7 = function serverPromptToClientPrompt(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.id;
        var1['id'] = var3;
        var5 = var2.options;
        var4 = var5.map;
        var3 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = arg1;
                var1 = {};
                var3 = var2.id;
                var1['id'] = var3;
                var3 = var2.channel_ids;
                var1['channelIds'] = var3;
                var3 = var2.role_ids;
                var1['roleIds'] = var3;
                var3 = var2.emoji;
                var1['emoji'] = var3;
                var3 = var2.title;
                var1['title'] = var3;
                var3 = var2.description;
                var2 = null;
                var4 = var2 != var3;
                var2 = '';
                if(!var4) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                var2 = var3;
case 36:
                var1['description'] = var2;
                return var1;
            }
        };
        var3 = var4.bind(var5)(var3);
        var1['options'] = var3;
        var3 = var2.title;
        var1['title'] = var3;
        var3 = var2.single_select;
        var1['singleSelect'] = var3;
        var3 = var2.disabled;
        var1['disabled'] = var3;
        var3 = var2.required;
        var1['required'] = var3;
        var3 = var2.in_onboarding;
        var1['inOnboarding'] = var3;
        var2 = var2.type;
        var1['type'] = var2;
        return var1;
    };
    var _closure1_slot14 = var7;
    var5 = function getConnectionIdentifier(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var3 = var2.connection_type;
            var1 = _closure1_slot8;
            var1 = var1.APPLICATION;
            if(!(var3 !== var1)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var4 = var2.provider_id;
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var1 = 'provider:';
            var1 = var3.bind(var1)(var4);
            _fun0005_ip = 40; continue _fun0005;
case 38:
            var4 = var2.application_id;
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'app:';
            var1 = var3.bind(var2)(var4);
case 40:
            return var1;
        }
    };
    var _closure1_slot15 = var5;
    var4 = function validateOnboardingConnection(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var1 = new Array(0);
            var5 = var3.connection_type;
            var4 = _closure1_slot8;
            var4 = var4.APPLICATION;
            if(!(var5 !== var4)) { _fun0006_ip = 41; continue _fun0006 }
case 3:
            var5 = var3.connection_type;
            var4 = _closure1_slot8;
            var4 = var4.PROVIDER_CONNECTED_ACCOUNT;
            if(!(var5 === var4)) { _fun0006_ip = 42; continue _fun0006 }
case 41:
            var5 = var3.connection_type;
            var4 = _closure1_slot8;
            var4 = var4.APPLICATION;
            if(!(var5 !== var4)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var5 = var3.connection_type;
            var4 = _closure1_slot8;
            var4 = var4.PROVIDER_CONNECTED_ACCOUNT;
            if(!(var5 === var4)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var7 = 5;
            var4 = var4[var7];
            var6 = undefined;
            var8 = var5.bind(var6)(var4);
            var5 = var8.isNullOrEmpty;
            var4 = var3.provider_id;
            var4 = var5.bind(var8)(var4);
            if(var4) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var8 = _closure1_slot10;
            var5 = var8.includes;
            var4 = var3.provider_id;
            var4 = var5.bind(var8)(var4);
            if(var4) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var5 = var1.push;
            var4 = 'Invalid platform ID';
            var4 = var5.bind(var1)(var4);
            _fun0006_ip = 49; continue _fun0006;
case 47:
            var5 = var1.push;
            var4 = 'Platform ID is required for platform connections';
            var4 = var5.bind(var1)(var4);
case 49:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var6 = var5.bind(var6)(var4);
            var5 = var6.isNullOrEmpty;
            var4 = var3.application_id;
            var4 = var5.bind(var6)(var4);
            if(var4) { _fun0006_ip = 45; continue _fun0006 }
case 51:
            var5 = var1.push;
            var4 = 'Application ID not allowed for platform connections';
            var4 = var5.bind(var1)(var4);
            _fun0006_ip = 45; continue _fun0006;
case 43:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var6 = 5;
            var4 = var4[var6];
            var5 = undefined;
            var8 = var7.bind(var5)(var4);
            var7 = var8.isNullOrEmpty;
            var4 = var3.application_id;
            var4 = var7.bind(var8)(var4);
            if(!var4) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var7 = var1.push;
            var4 = 'Application ID is required for application connections';
            var4 = var7.bind(var1)(var4);
case 52:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var5 = var4.bind(var5)(var2);
            var4 = var5.isNullOrEmpty;
            var2 = var3.provider_id;
            var2 = var4.bind(var5)(var2);
            if(var2) { _fun0006_ip = 45; continue _fun0006 }
case 54:
            var4 = var1.push;
            var2 = 'Platform ID not allowed for application connections';
            var2 = var4.bind(var1)(var2);
case 45:
            var4 = var3.description;
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var3 = var3.description;
            var4 = var3.length;
            var3 = 100;
            var2 = var4 > var3;
case 55:
            if(!var2) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            var3 = var1.push;
            var2 = 'Description must be 100 characters or less';
            var2 = var3.bind(var1)(var2);
            _fun0006_ip = 57; continue _fun0006;
case 42:
            var3 = var1.push;
            var2 = 'Invalid connection type';
            var2 = var3.bind(var1)(var2);
case 57:
            return var1;
        }
    };
    var _closure1_slot16 = var4;
    var1 = ['id'];
    var _closure1_slot3 = var1;
    var1 = ['id'];
    var _closure1_slot4 = var1;
    var13 = global;
    var11 = var13.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var18 = 0;
    var6 = var15[var18];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var16 = 1;
    var6 = var15[var16];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 2;
    var6 = var15[var6];
    var6 = var14.bind(var1)(var6);
    var17 = var6.PlatformTypes;
    var12 = {};
    var12['CUSTOMIZE'] = var18;
    var6 = 'CUSTOMIZE';
    var12[var18] = var6;
    var12['BROWSE'] = var16;
    var6 = 'BROWSE';
    var12[var16] = var6;
    var11 = {};
    var11['MULTIPLE_CHOICE'] = var18;
    var6 = 'MULTIPLE_CHOICE';
    var11[var18] = var6;
    var11['DROPDOWN'] = var16;
    var6 = 'DROPDOWN';
    var11[var16] = var6;
    var _closure1_slot7 = var11;
    var10 = {};
    var10['ONBOARDING_DEFAULT'] = var18;
    var6 = 'ONBOARDING_DEFAULT';
    var10[var18] = var6;
    var10['ONBOARDING_ADVANCED'] = var16;
    var6 = 'ONBOARDING_ADVANCED';
    var10[var16] = var6;
    var9 = {};
    var9['APPLICATION'] = var18;
    var6 = 'APPLICATION';
    var9[var18] = var6;
    var9['PROVIDER_CONNECTED_ACCOUNT'] = var16;
    var6 = 'PROVIDER_CONNECTED_ACCOUNT';
    var9[var16] = var6;
    var _closure1_slot8 = var9;
    var18 = var13.Set;
    var16 = var17.PLAYSTATION_STAGING;
    var6 = new Array(8);
    var6[0] = var16;
    var16 = var17.CONTACTS;
    var6[1] = var16;
    var16 = var17.DOMAIN;
    var6[2] = var16;
    var16 = var17.TWITTER_LEGACY;
    var6[3] = var16;
    var16 = var17.MASTODON;
    var6[4] = var16;
    var16 = var17.INSTAGRAM;
    var6[5] = var16;
    var16 = var17.LEAGUE_OF_LEGENDS;
    var6[6] = var16;
    var16 = var17.SKYPE;
    var6[7] = var16;
    var16 = var18.prototype;
    var16 = Object.create(var16, {constructor: {value: var18}});
    var22 = var16;
    var21 = var6;
    var6 = new var22[var18](var21, var20);
    var6 = var6 instanceof Object ? var6 : var16;
    var _closure1_slot9 = var6;
    var16 = var13.Object;
    var13 = var16.values;
    var17 = var13.bind(var16)(var17);
    var16 = var17.filter;
    var13 = function(arg1) {
        var3 = _closure1_slot9;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        var1 = !var1;
        return var1;
    };
    var13 = var16.bind(var17)(var13);
    var _closure1_slot10 = var13;
    var13 = 6;
    var13 = var15[var13];
    var15 = var14.bind(var1)(var13);
    var14 = var15.fileFinishedImporting;
    var13 = 'modules/guild_onboarding/GuildOnboardingPromptsConstants.tsx';
    var13 = var14.bind(var15)(var13);
    var13 = 100;
    var3['MAX_PROMPT_TITLE_LENGTH'] = var13;
    var14 = 50;
    var3['MAX_PROMPT_OPTION_TITLE_LENGTH'] = var14;
    var3['MAX_PROMPT_OPTION_DESCRIPTION_LENGTH'] = var13;
    var15 = 15;
    var3['MAX_NUM_PROMPTS'] = var15;
    var15 = 12;
    var3['MULTIPLE_CHOICE_MAX_NUM_OPTIONS'] = var15;
    var3['DROPDOWN_MAX_NUM_OPTIONS'] = var14;
    var14 = 25;
    var3['MAX_DEFAULT_CHANNEL_IDS'] = var14;
    var14 = 10;
    var3['MAX_NUMBER_OF_ONBOARDING_CONNECTIONS'] = var14;
    var3['MAX_CONNECTION_DESCRIPTION_LENGTH'] = var13;
    var13 = 4;
    var3['MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING'] = var13;
    var13 = 7;
    var3['MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING'] = var13;
    var13 = 5;
    var3['NUM_DEFAULT_CHATTABLE_CHANNELS_MIN'] = var13;
    var13 = 13;
    var3['ONBOARDING_PROMPT_TYPE_SWITCH_THRESHOLD'] = var13;
    var3['GuildOnboardingTab'] = var12;
    var3['OnboardingPromptType'] = var11;
    var3['GuildOnboardingMode'] = var10;
    var3['OnboardingConnectionType'] = var9;
    var9 = function isDefaultPrompt(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = arg1;
            var1 = var6.options;
            var2 = var1.length;
            var1 = 0;
            if(!(!(var2 > var1))) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var2 = _closure1_slot13;
            var4 = undefined;
            var3 = var2.bind(var4)();
            var2 = var3.id;
            var5 = _closure1_slot6;
            var2 = _closure1_slot3;
            var3 = var5.bind(var4)(var3, var2);
            var2 = var6.id;
            var2 = _closure1_slot4;
            var2 = var5.bind(var4)(var6, var2);
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 3;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.bind(var4)(var3, var2);
            return var1;
case 59:
            var1 = false;
            return var1;
        }
    };
    var3['isDefaultPrompt'] = var9;
    var3['getDefaultPrompt'] = var8;
    var8 = function getEmptyPrompt(arg1) {
        var1 = {'id': null, 'title': '', 'options': null, 'singleSelect': false, 'required': false};
        var2 = global;
        var4 = var2.String;
        var3 = var2.Date;
        var2 = var3.now;
        var3 = var2.bind(var3)();
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var1['id'] = var2;
        var2 = new Array(0);
        var1['options'] = var2;
        var2 = arg1;
        var1['inOnboarding'] = var2;
        var2 = _closure1_slot7;
        var2 = var2.MULTIPLE_CHOICE;
        var1['type'] = var2;
        return var1;
    };
    var3['getEmptyPrompt'] = var8;
    var8 = function clientPromptToServerPrompt(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.id;
        var1['id'] = var3;
        var5 = var2.options;
        var4 = var5.map;
        var3 = function(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = arg1;
                var1 = {};
                var3 = var2.id;
                var1['id'] = var3;
                var3 = var2.channelIds;
                var1['channel_ids'] = var3;
                var3 = var2.roleIds;
                var1['role_ids'] = var3;
                var3 = var2.emoji;
                var1['emoji'] = var3;
                var6 = var2.emoji;
                var5 = null;
                var7 = var5 == var6;
                var4 = undefined;
                if(var7) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                var4 = var6.id;
case 61:
                var1['emoji_id'] = var4;
                var6 = var2.emoji;
                var7 = var5 == var6;
                var4 = undefined;
                if(var7) { _fun0008_ip = 59; continue _fun0008 }
case 63:
                var4 = var6.name;
case 59:
                var1['emoji_name'] = var4;
                var4 = var2.emoji;
                var5 = var5 == var4;
                var3 = undefined;
                if(var5) { _fun0008_ip = 64; continue _fun0008 }
case 65:
                var3 = var4.animated;
case 64:
                var1['emoji_animated'] = var3;
                var3 = var2.title;
                var1['title'] = var3;
                var2 = var2.description;
                var1['description'] = var2;
                return var1;
            }
        };
        var3 = var4.bind(var5)(var3);
        var1['options'] = var3;
        var3 = var2.title;
        var1['title'] = var3;
        var3 = var2.singleSelect;
        var1['single_select'] = var3;
        var3 = var2.disabled;
        var1['disabled'] = var3;
        var3 = var2.required;
        var1['required'] = var3;
        var3 = var2.inOnboarding;
        var1['in_onboarding'] = var3;
        var2 = var2.type;
        var1['type'] = var2;
        return var1;
    };
    var3['clientPromptToServerPrompt'] = var8;
    var3['serverPromptToClientPrompt'] = var7;
    var7 = function serverApiResponseToClientState(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var5 = var2.prompts;
            var4 = var5.map;
            var3 = _closure1_slot14;
            var3 = var4.bind(var5)(var3);
            var1['prompts'] = var3;
            var3 = var2.default_channel_ids;
            var1['defaultChannelIds'] = var3;
            var4 = var2.responses;
            var3 = null;
            if(!(var3 == var4)) { _fun0009_ip = 66; continue _fun0009 }
case 28:
            var4 = new Array(0);
case 66:
            var1['responses'] = var4;
            var4 = var2.mode;
            var1['mode'] = var4;
            var4 = var2.enabled;
            var1['enabled'] = var4;
            var4 = var2.onboarding_prompts_seen;
            if(!(var3 == var4)) { _fun0009_ip = 67; continue _fun0009 }
case 68:
            var4 = {};
case 67:
            var1['onboardingPromptsSeen'] = var4;
            var4 = var2.onboarding_responses_seen;
            if(!(var3 == var4)) { _fun0009_ip = 69; continue _fun0009 }
case 13:
            var4 = {};
case 69:
            var1['onboardingResponsesSeen'] = var4;
            var4 = var2.below_requirements;
            var1['belowRequirements'] = var4;
            var2 = var2.connections;
            if(!(var3 == var2)) { _fun0009_ip = 70; continue _fun0009 }
case 71:
            var2 = new Array(0);
case 70:
            var1['connections'] = var2;
            return var1;
        }
    };
    var3['serverApiResponseToClientState'] = var7;
    var7 = function isEmojiEmpty(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            var1 = var4 == var3;
            if(var1) { _fun0010_ip = 72; continue _fun0010 }
case 73:
            var2 = var3.id;
            var2 = var4 == var2;
            if(!var2) { _fun0010_ip = 33; continue _fun0010 }
case 74:
            var3 = var3.name;
            var2 = var4 == var3;
case 33:
            var1 = var2;
case 72:
            return var1;
        }
    };
    var3['isEmojiEmpty'] = var7;
    var3['EXCLUDED_ONBOARDING_PLATFORM_TYPES'] = var6;
    var3['getConnectionIdentifier'] = var5;
    var5 = function parseConnectionIdentifier(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = arg1;
            var2 = var3.split;
            var1 = ':';
            var5 = var2.bind(var3)(var1);
            var3 = _closure1_slot5;
            var2 = undefined;
            var1 = 2;
            var3 = var3.bind(var2)(var5, var1);
            var1 = 0;
            var7 = var3[var1];
            var1 = 1;
            var3 = var3[var1];
            var1 = 'app';
            if(!(var1 === var7)) { _fun0011_ip = 75; continue _fun0011 }
case 28:
            if(!(var2 !== var3)) { _fun0011_ip = 75; continue _fun0011 }
case 66:
            var1 = '';
            if(!(var1 === var3)) { _fun0011_ip = 76; continue _fun0011 }
case 75:
            var6 = 'provider';
            var1 = null;
            if(!(var6 === var7)) { _fun0011_ip = 64; continue _fun0011 }
case 77:
            var1 = null;
            if(!(var2 !== var3)) { _fun0011_ip = 64; continue _fun0011 }
case 78:
            var2 = '';
            var1 = null;
            if(!(var2 !== var3)) { _fun0011_ip = 64; continue _fun0011 }
case 59:
            var2 = {};
            var5 = _closure1_slot8;
            var5 = var5.PROVIDER_CONNECTED_ACCOUNT;
            var2['type'] = var5;
            var2['providerId'] = var3;
            var1 = var2;
case 64:
            _fun0011_ip = 79; continue _fun0011;
case 76:
            var2 = {};
            var4 = _closure1_slot8;
            var4 = var4.APPLICATION;
            var2['type'] = var4;
            var2['applicationId'] = var3;
            var1 = var2;
case 79:
            return var1;
        }
    };
    var3['parseConnectionIdentifier'] = var5;
    var3['validateOnboardingConnection'] = var4;
    var2 = function validateOnboardingConnections(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var4 = arg1;
            var1 = new Array(0);
            var _closure2_slot0 = var1;
            var2 = global;
            var2 = var2.Set;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var15 = var3;
            var2 = new var15[var2](var14);
            var2 = var2 instanceof Object ? var2 : var3;
            var _closure2_slot1 = var2;
            var10 = function _loop(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var6 = _closure1_slot16;
                    var5 = _closure2_slot2;
                    var1 = undefined;
                    var8 = var6.bind(var1)(var5);
                    var6 = _closure2_slot0;
                    var5 = var6.push;
                    var7 = var8.map;
                    var4 = function(arg1) {
                        var2 = _closure3_slot0;
                        var1 = 1;
                        var5 = var2 + var1;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var4 = var1.concat;
                        var3 = 'Connection ';
                        var2 = ': ';
                        var1 = arg1;
                        var1 = var4.bind(var3)(var5, var2, var1);
                        return var1;
                    };
                    var10 = var7.bind(var8)(var4);
                    var4 = new Array(0);
                    var9 = 0;
                    var11 = var4;
                    var7 = arraySpread(var11, var10, var9);
                    var11 = var5;
                    var10 = var4;
                    var9 = var6;
                    var4 = apply(var11, var10, var9);
                    var4 = _closure1_slot15;
                    var3 = _closure2_slot2;
                    var4 = var4.bind(var1)(var3);
                    var5 = _closure2_slot1;
                    var3 = var5.has;
                    var3 = var3.bind(var5)(var4);
                    if(!var3) { _fun0013_ip = 80; continue _fun0013 }
case 13:
                    var6 = _closure2_slot0;
                    var5 = var6.push;
                    var3 = 'Duplicate connection configuration';
                    var3 = var5.bind(var6)(var3);
case 80:
                    var3 = _closure2_slot1;
                    var2 = var3.add;
                    var2 = var2.bind(var3)(var4);
                    return var1;
                }
            };
            var3 = _closure1_slot11;
            var2 = var4.entries;
            var2 = var2.bind(var4)();
            var8 = undefined;
            var7 = var3.bind(var8)(var2);
            var3 = var7.bind(var8)();
            var2 = var3.done;
            var6 = 2;
            var5 = 0;
            var4 = 1;
            if(var2) { _fun0012_ip = 48; continue _fun0012 }
case 59:
            var12 = var3.value;
            var2 = _closure1_slot5;
            var12 = var2.bind(var8)(var12, var6);
            var2 = var12[var5];
            var12 = var12[var4];
            var _closure2_slot2 = var12;
            var2 = var10.bind(var8)(var2);
            var12 = var7.bind(var8)();
            var2 = var12.done;
            var3 = var12;
            if(!var2) { _fun0012_ip = 59; continue _fun0012 }
case 48:
            return var1;
        }
    };
    var3['validateOnboardingConnections'] = var2;
    return var1;
})();