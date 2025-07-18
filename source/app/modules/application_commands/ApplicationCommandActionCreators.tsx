// app/modules/application_commands/ApplicationCommandActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function updateOptionStates(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'APPLICATION_COMMAND_UPDATE_OPTIONS';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var5 = arg2;
        var2['changedOptionStates'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Endpoints;
    var _closure1_slot5 = var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/application_commands/ApplicationCommandActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function setActiveCommand(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var16 = var1.channelId;
            var15 = var1.command;
            var14 = var1.section;
            var12 = var1.location;
            var13 = var1.initialValues;
            var11 = var1.triggerSection;
            var10 = var1.queryLength;
            var9 = var1.sectionName;
            var8 = var1.query;
            var7 = var1.searchResultsPosition;
            var6 = var1.source;
            var5 = var1.commandOrigin;
            var1 = null;
            if(!(var1 != var15)) { _fun0001_ip = 151; continue _fun0001 }
 76:
            var3 = _closure1_slot1;
            var18 = _closure1_slot2;
            var2 = 3;
            var2 = var18[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var15.inputType;
            var17 = _closure1_slot0;
            var1 = 4;
            var1 = var18[var1];
            var1 = var17.bind(var4)(var1);
            var1 = var1.ApplicationCommandInputType;
            var1 = var1.PLACEHOLDER;
            var2 = var2 !== var1;
            var1 = 'command should not be placeholder';
            var1 = var3.bind(var4)(var2, var1);
 151:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var17 = 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND';
            var2['type'] = var17;
            var2['channelId'] = var16;
            var2['command'] = var15;
            var2['section'] = var14;
            var2['initialValues'] = var13;
            var2['location'] = var12;
            var2['triggerSection'] = var11;
            var2['queryLength'] = var10;
            var2['sectionName'] = var9;
            var2['query'] = var8;
            var2['searchResultsPosition'] = var7;
            var2['source'] = var6;
            var2['commandOrigin'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['setActiveCommand'] = var5;
    var5 = function setPreferredCommandId(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var5 = arg2;
        var2['commandId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPreferredCommandId'] = var5;
    var3['updateOptionStates'] = var4;
    var4 = function updateOptionValidationStates(arg1, arg2) {
        var4 = _closure1_slot6;
        var1 = global;
        var3 = var1.Object;
        var2 = var3.fromEntries;
        var6 = var1.Object;
        var5 = var6.entries;
        var1 = arg2;
        var6 = var5.bind(var6)(var1);
        var5 = var6.map;
        var1 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = arg1;
                var1 = var5[Symbol.iterator];
                var5 = var1().next;
                var3 = var5().value;
                var2 = var1;
                var7 = undefined;
                var4 = var2 === var7;
                var2 = undefined;
                if(var4) { _fun0002_ip = 27; continue _fun0002 }
 24:
                var2 = var3;
 27:
                var3 = undefined;
                if(var4) { _fun0002_ip = 57; continue _fun0002 }
 32:
                var6 = var5().value;
                var5 = var1;
                var5 = var5 === var7;
                var3 = undefined;
                var4 = var5;
                if(var5) { _fun0002_ip = 57; continue _fun0002 }
 51:
                var3 = var6;
                var4 = var5;
 57:
                if(var4) { _fun0002_ip = 63; continue _fun0002 }
 60:
                var1.return();
 63:
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var2['lastValidationResult'] = var3;
                var1[1] = var2;
                return var1;
            }
        };
        var1 = var5.bind(var6)(var1);
        var3 = var2.bind(var3)(var1);
        var1 = undefined;
        var2 = arg1;
        var2 = var4.bind(var1)(var2, var3);
        return var1;
    };
    var3['updateOptionValidationStates'] = var4;
    var4 = function updateChannelState(arg1) {
        var1 = arg1;
        var10 = var1.channelId;
        var9 = var1.command;
        var8 = var1.section;
        var7 = var1.preferredCommandId;
        var6 = var1.location;
        var5 = var1.changedOptionStates;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var11 = 'APPLICATION_COMMAND_UPDATE_CHANNEL_STATE';
        var2['type'] = var11;
        var2['channelId'] = var10;
        var2['command'] = var9;
        var2['section'] = var8;
        var2['preferredCommandId'] = var7;
        var2['location'] = var6;
        var2['changedOptionStates'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateChannelState'] = var4;
    var4 = function updateApplicationGuildCommandPermissions(arg1, arg2, arg3, arg4) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.put;
        var1 = {};
        var5 = {};
        var6 = arg4;
        var5['permissions'] = var6;
        var1['body'] = var5;
        var8 = _closure1_slot5;
        var7 = var8.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS;
        var6 = arg1;
        var5 = arg2;
        var4 = arg3;
        var4 = var7.bind(var8)(var6, var5, var4);
        var1['url'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['updateApplicationGuildCommandPermissions'] = var4;
    var4 = function performAutocomplete(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var9 = arg2;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 3;
            var3 = var5[var1];
            var1 = undefined;
            var7 = var4.bind(var1)(var3);
            var3 = var9.autocomplete;
            var10 = null;
            var6 = var10 != var3;
            var3 = 'Missing autocomplete context';
            var3 = var7.bind(var1)(var6, var3);
            var3 = var9.autocomplete;
            var11 = var3.query;
            var6 = var3.name;
            var3 = 7;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.fromTimestamp;
            var3 = global;
            var7 = var3.Date;
            var3 = var7.now;
            var3 = var3.bind(var7)();
            var7 = var4.bind(var5)(var3);
            var _closure2_slot0 = var7;
            var3 = var9.channel;
            if(!(var10 != var3)) { _fun0003_ip = 429; continue _fun0003 }
 126:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 5;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.dispatch;
            var3 = {};
            var12 = 'APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST';
            var3['type'] = var12;
            var3['nonce'] = var7;
            var12 = var9.channel;
            var12 = var12.id;
            var3['channelId'] = var12;
            var3['query'] = var11;
            var3['name'] = var6;
            var3 = var4.bind(var5)(var3);
            var5 = _closure1_slot4;
            var4 = var5.getAutocompleteChoices;
            var3 = var9.channel;
            var3 = var3.id;
            var3 = var4.bind(var5)(var3, var6, var11);
            if(!(var10 == var3)) { _fun0003_ip = 429; continue _fun0003 }
 229:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 6;
            var3 = var13[var3];
            var3 = var12.bind(var1)(var3);
            var5 = var3.HTTP;
            var4 = var5.post;
            var3 = {};
            var6 = _closure1_slot5;
            var6 = var6.INTERACTIONS;
            var3['url'] = var6;
            var6 = {};
            var11 = 8;
            var11 = var13[var11];
            var11 = var12.bind(var1)(var11);
            var11 = var11.InteractionTypes;
            var11 = var11.APPLICATION_COMMAND_AUTOCOMPLETE;
            var6['type'] = var11;
            var11 = arg1;
            var11 = var11.applicationId;
            var6['application_id'] = var11;
            var11 = var9.guild;
            var12 = var10 == var11;
            var10 = undefined;
            if(var12) { _fun0003_ip = 338; continue _fun0003 }
 333:
            var10 = var11.id;
 338:
            var6['guild_id'] = var10;
            var9 = var9.channel;
            var9 = var9.id;
            var6['channel_id'] = var9;
            var9 = _closure1_slot3;
            var8 = var9.getSessionId;
            var8 = var8.bind(var9)();
            var6['session_id'] = var8;
            var8 = arg3;
            var6['data'] = var8;
            var6['nonce'] = var7;
            var3['body'] = var6;
            var6 = 3000;
            var3['timeout'] = var6;
            var6 = true;
            var3['rejectWithError'] = var6;
            var4 = var4.bind(var5)(var3);
            var3 = var4.catch;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'INTERACTION_FAILURE';
                var2['type'] = var5;
                var5 = _closure2_slot0;
                var2['nonce'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
 429:
            return var1;
        }
    };
    var3['performAutocomplete'] = var4;
    var4 = function fetchCommand(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'APPLICATION_COMMAND_FETCH';
        var2['type'] = var5;
        var5 = arg2;
        var2['channelId'] = var5;
        var5 = arg3;
        var2['commandId'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['fetchCommand'] = var4;
    var4 = function fetchCommands(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'APPLICATION_COMMANDS_FETCH';
        var2['type'] = var5;
        var5 = arg2;
        var2['channelId'] = var5;
        var5 = arg3;
        var2['commandIds'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['fetchCommands'] = var4;
    var4 = function fetchCommandsForApplication(arg1) {
        var1 = arg1;
        var6 = var1.guildId;
        var7 = var1.channelId;
        var5 = var1.applicationId;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var8 = 'APPLICATION_COMMANDS_FETCH_FOR_APPLICATION';
        var2['type'] = var8;
        var2['channelId'] = var7;
        var2['guildId'] = var6;
        var2['applicationId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['fetchCommandsForApplication'] = var4;
    var4 = function updateRegistry(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'APPLICATION_COMMAND_REGISTRY_UPDATE';
        var2['type'] = var5;
        var5 = arg2;
        var2['applications'] = var5;
        var5 = arg1;
        var2['commands'] = var5;
        var5 = arg3;
        var2['channelId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateRegistry'] = var4;
    var2 = function setAppLauncherActiveCommand(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg2;
            var1 = null;
            if(!(var1 != var5)) { _fun0004_ip = 84; continue _fun0004 }
 9:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 3;
            var2 = var7[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var5.inputType;
            var6 = _closure1_slot0;
            var1 = 4;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.ApplicationCommandInputType;
            var1 = var1.PLACEHOLDER;
            var2 = var2 !== var1;
            var1 = 'command should not be placeholder';
            var1 = var3.bind(var4)(var2, var1);
 84:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'APP_LAUNCHER_SET_ACTIVE_COMMAND';
            var2['type'] = var6;
            var6 = arg1;
            var2['channelId'] = var6;
            var2['command'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['setAppLauncherActiveCommand'] = var2;
    return var1;
})();