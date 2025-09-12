// app/modules/guild_onboarding_home/GuildOnboardingHomeActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var9;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var5 = var4.AnalyticEvents;
    var _closure1_slot8 = var5;
    var4 = var4.Endpoints;
    var _closure1_slot9 = var4;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 287; continue _fun0001 }
 13:
                    var6 = var9;
                    var7 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var5 = 6;
                    var4 = var2[var5];
                    var2 = undefined;
                    var8 = var7.bind(var2)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var10 = 'GUILD_HOME_SETTINGS_FETCH_START';
                    var4['type'] = var10;
                    var4['guildId'] = var9;
                    var4 = var7.bind(var8)(var4);
 67: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 7;
                    var4 = var8[var4];
                    var4 = var7.bind(var2)(var4);
                    var8 = var4.HTTP;
                    var7 = var8.get;
                    var4 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var11 = _closure1_slot9;
                    var10 = var11.GUILD_HOME_SETTINGS;
                    var9 = var6;
                    var9 = var10.bind(var11)(var9);
                    var4['url'] = var9;
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=144);
 142:
                    return var4;
 144:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 236; continue _fun0001 }
 150:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var7 = 8;
                    var7 = var8[var7];
                    var10 = var9.bind(var2)(var7);
                    var9 = var10.settingsFromServer;
                    var7 = var4.body;
                    var7 = var9.bind(var10)(var7);
                    var9 = _closure1_slot1;
                    var8 = var8[var5];
                    var10 = var9.bind(var2)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var11 = 'GUILD_HOME_SETTINGS_FETCH_SUCCESS';
                    var8['type'] = var11;
                    var11 = var6;
                    var8['guildId'] = var11;
                    var8['homeSettings'] = var7;
                    var8 = var9.bind(var10)(var8);
 233: // try_end0
                    return var7;
 236:
                    return var4;
 239: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'GUILD_HOME_SETTINGS_FETCH_FAIL';
                    var3['type'] = var7;
                    var3['guildId'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
 287:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var6 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 313; continue _fun0002 }
 13:
                    var5 = var6;
                    var4 = _closure1_slot4;
                    var3 = var4.isFullServerPreview;
                    var3 = var3.bind(var4)(var6);
                    if(var3) { _fun0002_ip = 308; continue _fun0002 }
 40:
                    var7 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var6 = 6;
                    var3 = var3[var6];
                    var4 = undefined;
                    var8 = var7.bind(var4)(var3);
                    var7 = var8.dispatch;
                    var3 = {};
                    var9 = 'GUILD_NEW_MEMBER_ACTIONS_FETCH_START';
                    var3['type'] = var9;
                    var9 = var5;
                    var3['guildId'] = var9;
                    var3 = var7.bind(var8)(var3);
 91: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 7;
                    var3 = var8[var3];
                    var3 = var7.bind(var4)(var3);
                    var8 = var3.HTTP;
                    var7 = var8.get;
                    var3 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var11 = _closure1_slot9;
                    var10 = var11.GUILD_MEMBER_ACTIONS;
                    var9 = var5;
                    var9 = var10.bind(var11)(var9);
                    var3['url'] = var9;
                    var3 = var7.bind(var8)(var3);
                    SaveGenerator(address=168);
 166:
                    return var3;
 168:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 260; continue _fun0002 }
 174:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var7 = 8;
                    var7 = var8[var7];
                    var10 = var9.bind(var4)(var7);
                    var9 = var10.actionsFromServer;
                    var7 = var3.body;
                    var7 = var9.bind(var10)(var7);
                    var9 = _closure1_slot1;
                    var8 = var8[var6];
                    var10 = var9.bind(var4)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var11 = 'GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS';
                    var8['type'] = var11;
                    var11 = var5;
                    var8['guildId'] = var11;
                    var8['memberActions'] = var7;
                    var8 = var9.bind(var10)(var8);
 257: // try_end0
                    return var7;
 260:
                    return var3;
 263: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var6 = 'GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL';
                    var2['type'] = var6;
                    var2['guildId'] = var5;
                    var2 = var3.bind(var4)(var2);
 308:
                    var2 = undefined;
                    return var2;
 313:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var5 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 250; continue _fun0003 }
 13:
                    var6 = var9;
                    var7 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var5 = 6;
                    var4 = var2[var5];
                    var2 = undefined;
                    var8 = var7.bind(var2)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var10 = 'GUILD_NEW_MEMBER_ACTIONS_DELETE_START';
                    var4['type'] = var10;
                    var4['guildId'] = var9;
                    var4 = var7.bind(var8)(var4);
 67: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 7;
                    var4 = var8[var4];
                    var4 = var7.bind(var2)(var4);
                    var8 = var4.HTTP;
                    var7 = var8.del;
                    var4 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var11 = _closure1_slot9;
                    var10 = var11.GUILD_MEMBER_ACTIONS;
                    var9 = var6;
                    var9 = var10.bind(var11)(var9);
                    var4['url'] = var9;
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=145);
 143:
                    return var4;
 145:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0003_ip = 199; continue _fun0003 }
 151:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var5];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var10 = 'GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS';
                    var7['type'] = var10;
                    var10 = var6;
                    var7['guildId'] = var10;
                    var7 = var8.bind(var9)(var7);
 197: // try_end0
                    _fun0003_ip = 247; continue _fun0003;
 199:
                    return var4;
 202: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'GUILD_NEW_MEMBER_ACTIONS_DELETE_FAIL';
                    var3['type'] = var7;
                    var3['guildId'] = var6;
                    var3 = var4.bind(var5)(var3);
 247:
                    return var2;
 250:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var4 = var4.bind(var1)();
    var7 = 12;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/guild_onboarding_home/GuildOnboardingHomeActionCreators.tsx';
    var7 = var8.bind(var9)(var7);
    var3['fetchGuildHomeSettings'] = var6;
    var3['fetchNewMemberActions'] = var5;
    var3['clearNewMemberActions'] = var4;
    var4 = function(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var10 = arg1;
            var5 = arg2;
            var3 = arguments[2];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0004_ip = 17; continue _fun0004 }
 15:
            var3 = true;
 17:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 6;
            var4 = var7[var4];
            var7 = var6.bind(var1)(var4);
            var6 = var7.dispatch;
            var4 = {};
            var8 = 'SELECT_HOME_RESOURCE_CHANNEL';
            var4['type'] = var8;
            var4['guildId'] = var10;
            var4['channelId'] = var5;
            var4 = var6.bind(var7)(var4);
            var7 = null;
            if(!(var7 != var5)) { _fun0004_ip = 270; continue _fun0004 }
 79:
            var6 = _closure1_slot5;
            var4 = var6.getChannel;
            var9 = var4.bind(var6)(var5);
            var6 = _closure1_slot6;
            var4 = var6.getResourceForChannel;
            var6 = var4.bind(var6)(var10, var5);
            var4 = var7 == var10;
            if(var4) { _fun0004_ip = 133; continue _fun0004 }
 118:
            var11 = _closure1_slot4;
            var8 = var11.isFullServerPreview;
            var4 = var8.bind(var11)(var10);
 133:
            if(var4) { _fun0004_ip = 140; continue _fun0004 }
 136:
            var4 = var7 == var9;
 140:
            if(var4) { _fun0004_ip = 147; continue _fun0004 }
 143:
            var4 = var7 == var6;
 147:
            if(var4) { _fun0004_ip = 226; continue _fun0004 }
 150:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 9;
            var4 = var7[var4];
            var8 = var6.bind(var1)(var4);
            var7 = var8.track;
            var4 = _closure1_slot8;
            var6 = var4.SERVER_GUIDE_CHANNEL_SELECTED;
            var4 = {};
            var4['guild_id'] = var10;
            var9 = var9.id;
            var4['channel_id'] = var9;
            var9 = 'resource';
            var4['server_guide_channel_type'] = var9;
            var9 = -1;
            var4['channel_action_type'] = var9;
            var4 = var7.bind(var8)(var6, var4);
 226:
            if(!var3) { _fun0004_ip = 270; continue _fun0004 }
 229:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 10;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.transitionToChannel;
            var2 = {};
            var6 = false;
            var2['navigationReplace'] = var6;
            var2 = var3.bind(var4)(var5, var2);
 270:
            return var1;
        }
    };
    var3['selectHomeResourceChannel'] = var4;
    var4 = function(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var10 = arg1;
            var4 = arg2;
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 6;
            var3 = var3[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var3);
            var5 = var6.dispatch;
            var3 = {};
            var7 = 'SELECT_NEW_MEMBER_ACTION_CHANNEL';
            var3['type'] = var7;
            var3['guildId'] = var10;
            var3['channelId'] = var4;
            var3 = var5.bind(var6)(var3);
            var5 = _closure1_slot5;
            var3 = var5.getChannel;
            var9 = var3.bind(var5)(var4);
            var5 = _closure1_slot6;
            var3 = var5.getActionForChannel;
            var8 = var3.bind(var5)(var10, var4);
            var5 = null;
            var3 = var5 == var10;
            if(var3) { _fun0005_ip = 115; continue _fun0005 }
 100:
            var7 = _closure1_slot4;
            var6 = var7.isFullServerPreview;
            var3 = var6.bind(var7)(var10);
 115:
            if(var3) { _fun0005_ip = 122; continue _fun0005 }
 118:
            var3 = var5 == var9;
 122:
            if(var3) { _fun0005_ip = 129; continue _fun0005 }
 125:
            var3 = var5 == var8;
 129:
            if(var3) { _fun0005_ip = 210; continue _fun0005 }
 132:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 9;
            var3 = var6[var3];
            var7 = var5.bind(var1)(var3);
            var6 = var7.track;
            var3 = _closure1_slot8;
            var5 = var3.SERVER_GUIDE_CHANNEL_SELECTED;
            var3 = {};
            var3['guild_id'] = var10;
            var9 = var9.id;
            var3['channel_id'] = var9;
            var9 = 'member action';
            var3['server_guide_channel_type'] = var9;
            var8 = var8.actionType;
            var3['channel_action_type'] = var8;
            var3 = var6.bind(var7)(var5, var3);
 210:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 10;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.transitionToChannel;
            var2 = var2.bind(var3)(var4);
            return var1;
        }
    };
    var3['selectNewMemberActionChannel'] = var4;
    var2 = function(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var8 = arg1;
            var7 = arg2;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'COMPLETE_NEW_MEMBER_ACTION';
            var2['type'] = var6;
            var2['guildId'] = var8;
            var2['channelId'] = var7;
            var2 = var3.bind(var4)(var2);
            var3 = _closure1_slot4;
            var2 = var3.isFullServerPreview;
            var2 = var2.bind(var3)(var8);
            if(var2) { _fun0006_ip = 372; continue _fun0006 }
 84:
            var3 = _closure1_slot5;
            var2 = var3.getChannel;
            var11 = var2.bind(var3)(var7);
            var3 = _closure1_slot6;
            var2 = var3.getActionForChannel;
            var10 = var2.bind(var3)(var8, var7);
            var2 = null;
            if(!(var2 != var11)) { _fun0006_ip = 308; continue _fun0006 }
 123:
            if(!(var2 != var10)) { _fun0006_ip = 308; continue _fun0006 }
 130:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 11;
            var3 = var6[var3];
            var6 = var4.bind(var1)(var3);
            var4 = var6.keys;
            var12 = _closure1_slot7;
            var3 = var12.getCompletedActions;
            var3 = var3.bind(var12)(var8);
            if(!(var2 == var3)) { _fun0006_ip = 176; continue _fun0006 }
 174:
            var3 = {};
 176:
            var3 = var4.bind(var6)(var3);
            var _closure2_slot0 = var3;
            var4 = _closure1_slot6;
            var3 = var4.getNewMemberActions;
            var12 = var3.bind(var4)(var8);
            if(!(var2 == var12)) { _fun0006_ip = 208; continue _fun0006 }
 204:
            var12 = new Array(0);
 208:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var6 = var3.bind(var1)(var2);
            var4 = var6.track;
            var2 = _closure1_slot8;
            var3 = var2.SERVER_GUIDE_ACTION_COMPLETED;
            var2 = {};
            var13 = var11.guild_id;
            var2['guild_id'] = var13;
            var11 = var11.id;
            var2['channel_id'] = var11;
            var10 = var10.actionType;
            var2['channel_action_type'] = var10;
            var11 = var12.reduce;
            var10 = function(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = arg1;
                    if(!var1) { _fun0007_ip = 31; continue _fun0007 }
 6:
                    var4 = _closure2_slot0;
                    var3 = var4.includes;
                    var2 = arg2;
                    var2 = var2.channelId;
                    var1 = var3.bind(var4)(var2);
 31:
                    return var1;
                }
            };
            var9 = true;
            var9 = var11.bind(var12)(var10, var9);
            var2['has_completed_all'] = var9;
            var2 = var4.bind(var6)(var3, var2);
 308:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 7;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var4 = var2.HTTP;
            var3 = var4.post;
            var2 = {};
            var6 = _closure1_slot9;
            var5 = var6.GUILD_MEMBER_ACTION_UPDATE;
            var5 = var5.bind(var6)(var8, var7);
            var2['url'] = var5;
            var5 = true;
            var2['rejectWithError'] = var5;
            var2 = var3.bind(var4)(var2);
 372:
            return var1;
        }
    };
    var3['completeNewMemberAction'] = var2;
    return var1;
})();