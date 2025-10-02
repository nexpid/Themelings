// app/modules/guild_onboarding/GuildOnboardingPromptsConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var11;
    var5 = function getDefaultPrompt() {
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
        var3 = 2;
        var4 = var8[var3];
        var4 = var6.bind(var7)(var4);
        var5 = var4.intl;
        var4 = var5.string;
        var3 = var8[var3];
        var3 = var6.bind(var7)(var3);
        var3 = var3.t;
        var3 = var3.vY91Cw;
        var3 = var4.bind(var5)(var3);
        var1['title'] = var3;
        var3 = new Array(0);
        var1['options'] = var3;
        var2 = _closure1_slot6;
        var2 = var2.MULTIPLE_CHOICE;
        var1['type'] = var2;
        return var1;
    };
    var _closure1_slot7 = var5;
    var4 = function serverPromptToClientPrompt(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.id;
        var1['id'] = var3;
        var5 = var2.options;
        var4 = var5.map;
        var3 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
                if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = var3;
case 2:
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
    var _closure1_slot8 = var4;
    var1 = ['id'];
    var _closure1_slot3 = var1;
    var1 = ['id'];
    var _closure1_slot4 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var6);
    var13 = 0;
    var6 = var11[var13];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var8 = {};
    var8['CUSTOMIZE'] = var13;
    var6 = 'CUSTOMIZE';
    var8[var13] = var6;
    var12 = 1;
    var8['BROWSE'] = var12;
    var6 = 'BROWSE';
    var8[var12] = var6;
    var7 = {};
    var7['MULTIPLE_CHOICE'] = var13;
    var6 = 'MULTIPLE_CHOICE';
    var7[var13] = var6;
    var7['DROPDOWN'] = var12;
    var6 = 'DROPDOWN';
    var7[var12] = var6;
    var _closure1_slot6 = var7;
    var6 = {};
    var6['ONBOARDING_DEFAULT'] = var13;
    var9 = 'ONBOARDING_DEFAULT';
    var6[var13] = var9;
    var6['ONBOARDING_ADVANCED'] = var12;
    var9 = 'ONBOARDING_ADVANCED';
    var6[var12] = var9;
    var9 = 3;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/guild_onboarding/GuildOnboardingPromptsConstants.tsx';
    var9 = var10.bind(var11)(var9);
    var10 = 100;
    var3['MAX_PROMPT_TITLE_LENGTH'] = var10;
    var9 = 50;
    var3['MAX_PROMPT_OPTION_TITLE_LENGTH'] = var9;
    var3['MAX_PROMPT_OPTION_DESCRIPTION_LENGTH'] = var10;
    var10 = 15;
    var3['MAX_NUM_PROMPTS'] = var10;
    var10 = 12;
    var3['MULTIPLE_CHOICE_MAX_NUM_OPTIONS'] = var10;
    var3['DROPDOWN_MAX_NUM_OPTIONS'] = var9;
    var9 = 25;
    var3['MAX_DEFAULT_CHANNEL_IDS'] = var9;
    var9 = 4;
    var3['MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING'] = var9;
    var9 = 7;
    var3['MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING'] = var9;
    var9 = 5;
    var3['NUM_DEFAULT_CHATTABLE_CHANNELS_MIN'] = var9;
    var9 = 13;
    var3['ONBOARDING_PROMPT_TYPE_SWITCH_THRESHOLD'] = var9;
    var3['GuildOnboardingTab'] = var8;
    var3['OnboardingPromptType'] = var7;
    var3['GuildOnboardingMode'] = var6;
    var6 = function isDefaultPrompt(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var1 = var6.options;
            var2 = var1.length;
            var1 = 0;
            if(!(!(var2 > var1))) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var2 = _closure1_slot7;
            var4 = undefined;
            var3 = var2.bind(var4)();
            var2 = var3.id;
            var5 = _closure1_slot5;
            var2 = _closure1_slot3;
            var3 = var5.bind(var4)(var3, var2);
            var2 = var6.id;
            var2 = _closure1_slot4;
            var2 = var5.bind(var4)(var6, var2);
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 1;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.bind(var4)(var3, var2);
            return var1;
case 4:
            var1 = false;
            return var1;
        }
    };
    var3['isDefaultPrompt'] = var6;
    var3['getDefaultPrompt'] = var5;
    var5 = function getEmptyPrompt(arg1) {
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
        var2 = _closure1_slot6;
        var2 = var2.MULTIPLE_CHOICE;
        var1['type'] = var2;
        return var1;
    };
    var3['getEmptyPrompt'] = var5;
    var5 = function clientPromptToServerPrompt(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.id;
        var1['id'] = var3;
        var5 = var2.options;
        var4 = var5.map;
        var3 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
                if(var7) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var4 = var6.id;
case 6:
                var1['emoji_id'] = var4;
                var6 = var2.emoji;
                var7 = var5 == var6;
                var4 = undefined;
                if(var7) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var4 = var6.name;
case 8:
                var1['emoji_name'] = var4;
                var4 = var2.emoji;
                var5 = var5 == var4;
                var3 = undefined;
                if(var5) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var3 = var4.animated;
case 10:
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
    var3['clientPromptToServerPrompt'] = var5;
    var3['serverPromptToClientPrompt'] = var4;
    var4 = function serverApiResponseToClientState(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var5 = var2.prompts;
            var4 = var5.map;
            var3 = _closure1_slot8;
            var3 = var4.bind(var5)(var3);
            var1['prompts'] = var3;
            var3 = var2.default_channel_ids;
            var1['defaultChannelIds'] = var3;
            var3 = var2.responses;
            var4 = null;
            if(!(var4 == var3)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var3 = new Array(0);
case 12:
            var1['responses'] = var3;
            var3 = var2.mode;
            var1['mode'] = var3;
            var3 = var2.enabled;
            var1['enabled'] = var3;
            var3 = var2.onboarding_prompts_seen;
            if(!(var4 == var3)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var3 = {};
case 14:
            var1['onboardingPromptsSeen'] = var3;
            var3 = var2.onboarding_responses_seen;
            if(!(var4 == var3)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var3 = {};
case 16:
            var1['onboardingResponsesSeen'] = var3;
            var2 = var2.below_requirements;
            var1['belowRequirements'] = var2;
            return var1;
        }
    };
    var3['serverApiResponseToClientState'] = var4;
    var2 = function isEmojiEmpty(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            var1 = var4 == var3;
            if(var1) { _fun0005_ip = 18; continue _fun0005 }
case 19:
            var2 = var3.id;
            var2 = var4 == var2;
            if(!var2) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var3 = var3.name;
            var2 = var4 == var3;
case 20:
            var1 = var2;
case 18:
            return var1;
        }
    };
    var3['isEmojiEmpty'] = var2;
    return var1;
})();