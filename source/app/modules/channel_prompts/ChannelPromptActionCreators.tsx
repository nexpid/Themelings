// app/modules/channel_prompts/ChannelPromptActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _sendGamingStatsMessage() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var7 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 237; continue _fun0001 }
 13:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var6 = var2.HTTP;
                    var5 = var6.post;
                    var2 = {};
                    var9 = _closure1_slot5;
                    var8 = var9.SEND_GAMING_STATS;
                    var8 = var8.bind(var9)(var7);
                    var2['url'] = var8;
                    var8 = {};
                    var9 = {};
                    var10 = arg1;
                    var9['guild_id'] = var10;
                    var9['channel_id'] = var7;
                    var10 = arg3;
                    var9['message_id'] = var10;
                    var8['message_reference'] = var9;
                    var2['body'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=117);
 115:
                    return var2;
 117:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 234; continue _fun0001 }
 123:
                    var6 = _closure1_slot4;
                    var5 = var6.getMessages;
                    var5 = var5.bind(var6)(var7);
                    var5 = var5.hasMoreAfter;
                    if(var5) { _fun0001_ip = 195; continue _fun0001 }
 147:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 7;
                    var5 = var8[var5];
                    var5 = var6.bind(var3)(var5);
                    var8 = var5.ComponentDispatch;
                    var6 = var8.dispatch;
                    var5 = _closure1_slot8;
                    var5 = var5.SCROLLTO_PRESENT;
                    var5 = var6.bind(var8)(var5);
                    _fun0001_ip = 231; continue _fun0001;
 195:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 6;
                    var5 = var8[var5];
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.jumpToPresent;
                    var4 = _closure1_slot7;
                    var4 = var5.bind(var6)(var7, var4);
 231:
                    return var3;
 234:
                    return var2;
 237:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function _updateGamingStats() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 105; continue _fun0002 }
 10:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.patch;
                    var2 = {};
                    var9 = _closure1_slot5;
                    var8 = var9.UPDATE_GAMING_STATS;
                    var7 = var6.channel_id;
                    var6 = var6.id;
                    var6 = var8.bind(var9)(var7, var6);
                    var2['url'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=93);
 91:
                    return var2;
 93:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 102; continue _fun0002 }
 99:
                    return var3;
 102:
                    return var2;
 105:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
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
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DraftType;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Endpoints;
    var _closure1_slot5 = var7;
    var7 = var4.MessageTypes;
    var _closure1_slot6 = var7;
    var7 = var4.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot7 = var7;
    var4 = var4.ComponentActions;
    var _closure1_slot8 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_prompts/ChannelPromptActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function initiateChannelPrompts(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var4 = var2.HTTP;
        var3 = var4.post;
        var2 = {};
        var5 = _closure1_slot5;
        var5 = var5.INITIATE_CHANNEL_PROMPTS;
        var2['url'] = var5;
        var5 = {};
        var6 = arg1;
        var5['guild_ids'] = var6;
        var2['body'] = var5;
        var5 = true;
        var2['rejectWithError'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['initiateChannelPrompts'] = var4;
    var4 = function forcePrompt(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var6 = arguments[1];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0003_ip = 22; continue _fun0003 }
 9:
            var2 = _closure1_slot6;
            var6 = var2.GUILD_DEADCHAT_REVIVE_PROMPT;
 22:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 5;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var4 = var2.HTTP;
            var3 = var4.post;
            var2 = {};
            var8 = _closure1_slot5;
            var7 = var8.FORCE_SEND_PROMPT;
            var5 = arg1;
            var5 = var7.bind(var8)(var5);
            var2['url'] = var5;
            var5 = {};
            var5['prompt_type'] = var6;
            var2['body'] = var5;
            var5 = true;
            var2['rejectWithError'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['forcePrompt'] = var4;
    var4 = function sendGamingStatsMessage() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['sendGamingStatsMessage'] = var4;
    var2 = function updateGamingStats() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['updateGamingStats'] = var2;
    return var1;
})();