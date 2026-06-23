// app/modules/quickswitcher/QuickSwitcherActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var11;
    var8 = function getQuickSwitcherOptions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 13;
            var2 = var4[var2];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var4 = var2.GameProfileInQuickswitcherExperiment;
            var3 = var4.getConfig;
            var2 = {};
            var6 = 'QuickSwitcherActionCreators.getQueryMode';
            var2['location'] = var6;
            var2 = var3.bind(var4)(var2);
            var2 = var2.enabled;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = _closure1_slot21;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = _closure1_slot22;
case 4:
            if(var2) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var4 = _closure1_slot19;
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var4 = _closure1_slot20;
case 7:
            var3 = var8.charAt;
            var2 = 0;
            var3 = var3.bind(var8)(var2);
            var4 = var4[var3];
            var3 = null;
            var6 = var3 != var4;
            if(!var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var4;
case 8:
            var6 = var8.replace;
            var4 = '';
            var6 = var6.bind(var8)(var7, var4);
            var4 = new Array(2);
            var4[0] = var6;
            var4[1] = var3;
            var3 = _closure1_slot4;
            var1 = 2;
            var3 = var3.bind(var5)(var4, var1);
            var1 = {};
            var2 = var3[var2];
            var1['query'] = var2;
            var2 = 1;
            var2 = var3[var2];
            var1['queryMode'] = var2;
            return var1;
        }
    };
    var _closure1_slot23 = var8;
    var7 = function trackOpen(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot11;
            var2 = var3.isOpen;
            var2 = var2.bind(var3)();
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = _closure1_slot10;
            var2 = var3.getGuildId;
            var7 = var2.bind(var3)();
            var3 = _closure1_slot9;
            var2 = var3.getChannelId;
            var6 = var2.bind(var3)(var7);
            var2 = null;
            var3 = var2 != var6;
            var4 = undefined;
            var5 = undefined;
            if(!var3) { _fun0002_ip = 12; continue _fun0002 }
case 3:
            var8 = _closure1_slot7;
            var3 = var8.getChannel;
            var3 = var3.bind(var8)(var6);
            var8 = var2 != var3;
            var2 = null;
            if(!var8) { _fun0002_ip = 13; continue _fun0002 }
case 7:
            var2 = var3.type;
case 13:
            var5 = var2;
case 12:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 14;
            var2 = var8[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.track;
            var1 = _closure1_slot14;
            var2 = var1.QUICKSWITCHER_OPENED;
            var1 = {};
            var8 = arg1;
            var1['source'] = var8;
            var1['current_guild_id'] = var7;
            var1['current_channel_id'] = var6;
            var1['current_channel_type'] = var5;
            var1 = var3.bind(var4)(var2, var1);
case 10:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot24 = var7;
    var6 = function trackClose(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var10 = arg2;
            var3 = _closure1_slot11;
            var1 = var3.getProps;
            var1 = var1.bind(var3)();
            var8 = var1.results;
            var17 = var1.queryMode;
            var12 = var1.query;
            var3 = var1.maxQueryLength;
            var4 = _closure1_slot10;
            var1 = var4.getGuildId;
            var16 = var1.bind(var4)();
            var4 = _closure1_slot9;
            var1 = var4.getChannelId;
            var7 = var1.bind(var4)(var16);
            var5 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 12;
            var4 = var11[var9];
            var1 = undefined;
            var13 = var5.bind(var1)(var4);
            var6 = var13.findNextSelectedResult;
            var4 = var11[var9];
            var4 = var5.bind(var1)(var4);
            var4 = var4.FindResultDirections;
            var5 = var4.DOWN;
            var4 = -1;
            var4 = var6.bind(var13)(var5, var4, var8);
            var6 = var8[var4];
            var5 = _closure1_slot1;
            var4 = 15;
            var13 = var11[var4];
            var14 = var5.bind(var1)(var13);
            var13 = var14.isEmail;
            var15 = var13.bind(var14)(var12);
            var13 = var11[var4];
            var14 = var5.bind(var1)(var13);
            var13 = var14.isPhoneNumber;
            var14 = var13.bind(var14)(var12);
            var4 = var11[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.isUserTagLike;
            var13 = var4.bind(var5)(var12);
            var4 = null;
            var19 = var4 != var7;
            if(!var19) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var5 = _closure1_slot17;
            var19 = var5.bind(var1)(var7);
case 14:
            var11 = function getResultType(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var1 = null;
                    var2 = var1 == var3;
                    if(var2) { _fun0004_ip = 12; continue _fun0004 }
case 16:
                    var4 = var3.type;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 12;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var2 = var2.AutocompleterResultTypes;
                    var2 = var2.IN_APP_NAVIGATION;
                    if(!(var4 !== var2)) { _fun0004_ip = 3; continue _fun0004 }
case 17:
                    var2 = var3.type;
                    _fun0004_ip = 13; continue _fun0004;
case 3:
                    var5 = var3.type;
                    var4 = '_';
                    var4 = var5 + var4;
                    var3 = var3.record;
                    var3 = var3.type;
                    var2 = var4 + var3;
case 13:
                    var1 = var2;
case 12:
                    return var1;
                }
            };
            var5 = {};
            var18 = undefined;
            if(var19) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var18 = var7;
case 18:
            var5['current_channel_id'] = var18;
            var18 = undefined;
            if(!var19) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var18 = var7;
case 20:
            var5['current_channel_static_route'] = var18;
            var5['current_guild_id'] = var16;
            var18 = var4 != var17;
            var16 = 'GENERAL';
            if(!var18) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var16 = var17;
case 22:
            var5['query_mode'] = var16;
            var16 = var12.length;
            var5['query_length'] = var16;
            var5['max_query_length'] = var3;
            var5['is_email_like'] = var15;
            var5['is_phone_like'] = var14;
            var5['is_username_like'] = var13;
            var3 = null;
            if(var15) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var3 = null;
            if(var14) { _fun0003_ip = 24; continue _fun0003 }
case 26:
            var3 = null;
            if(var13) { _fun0003_ip = 24; continue _fun0003 }
case 27:
            var3 = var12;
case 24:
            var5['query'] = var3;
            var3 = var11.bind(var1)(var6);
            var5['top_result_type'] = var3;
            var12 = var4 != var6;
            var3 = null;
            if(!var12) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var3 = var6.score;
case 28:
            var5['top_result_score'] = var3;
            var6 = _closure1_slot11;
            var3 = var6.getResultTotals;
            var3 = var3.bind(var6)();
            var5['num_results_total'] = var3;
            var14 = _closure1_slot11;
            var12 = var14.getResultTotals;
            var13 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = var3[var9];
            var6 = var13.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.USER;
            var6 = var12.bind(var14)(var6);
            var5['num_results_users'] = var6;
            var14 = _closure1_slot11;
            var12 = var14.getResultTotals;
            var6 = var3[var9];
            var6 = var13.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.TEXT_CHANNEL;
            var6 = var12.bind(var14)(var6);
            var5['num_results_text_channels'] = var6;
            var14 = _closure1_slot11;
            var12 = var14.getResultTotals;
            var6 = var3[var9];
            var6 = var13.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.VOICE_CHANNEL;
            var6 = var12.bind(var14)(var6);
            var5['num_results_voice_channels'] = var6;
            var14 = _closure1_slot11;
            var12 = var14.getResultTotals;
            var6 = var3[var9];
            var6 = var13.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.GUILD;
            var6 = var12.bind(var14)(var6);
            var5['num_results_guilds'] = var6;
            var12 = _closure1_slot11;
            var6 = var12.getResultTotals;
            var3 = var3[var9];
            var3 = var13.bind(var1)(var3);
            var3 = var3.AutocompleterResultTypes;
            var3 = var3.GROUP_DM;
            var3 = var6.bind(var12)(var3);
            var5['num_results_group_dms'] = var3;
            if(!(var4 != var7)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var6 = _closure1_slot7;
            var3 = var6.getChannel;
            var6 = var3.bind(var6)(var7);
            var7 = var4 != var6;
            var3 = null;
            if(!var7) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var3 = var6.type;
case 32:
            var5['current_channel_type'] = var3;
case 30:
            if(!(var4 != var10)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var7 = var10.type;
            var6 = var10.score;
            var3 = var10.record;
            var11 = var11.bind(var1)(var10);
            var5['selected_type'] = var11;
            var5['selected_score'] = var6;
            var6 = var8.indexOf;
            var6 = var6.bind(var8)(var10);
            var5['selected_index'] = var6;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var6 = var8.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.GUILD;
            if(!(var6 !== var7)) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var6 = var8.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.TEXT_CHANNEL;
            if(!(var6 !== var7)) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var6 = var8.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.VOICE_CHANNEL;
            if(!(var6 !== var7)) { _fun0003_ip = 38; continue _fun0003 }
case 40:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var6 = var8.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.GROUP_DM;
            if(!(var6 !== var7)) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var6 = var8.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.USER;
            if(!(var6 === var7)) { _fun0003_ip = 34; continue _fun0003 }
case 43:
            var6 = var3.id;
            var5['selected_user_id'] = var6;
            _fun0003_ip = 34; continue _fun0003;
case 41:
            var6 = var3.id;
            var5['selected_channel_id'] = var6;
            _fun0003_ip = 34; continue _fun0003;
case 38:
            var6 = _closure1_slot6;
            var6 = var3 instanceof var6;
            if(!var6) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var6 = var3.guild_id;
            var6 = var4 != var6;
            var4 = null;
            if(!var6) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var4 = var3.guild_id;
case 46:
            var5['selected_guild_id'] = var4;
case 44:
            var4 = var3.id;
            var5['selected_channel_id'] = var4;
            _fun0003_ip = 34; continue _fun0003;
case 36:
            var3 = var3.id;
            var5['selected_guild_id'] = var3;
case 34:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 14;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.track;
            var2 = arg1;
            var2 = var3.bind(var4)(var2, var5);
            return var1;
        }
    };
    var _closure1_slot25 = var6;
    var1 = function hideQuickSwitcher() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 16;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'QUICKSWITCHER_HIDE';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot26 = var1;
    var5 = function show() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arguments[0];
            var6 = arguments[1];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0005_ip = 48; continue _fun0005 }
case 16:
            var3 = 'KEYBIND';
case 48:
            if(!(var6 === var1)) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var6 = '';
case 49:
            var2 = _closure1_slot24;
            var2 = var2.bind(var1)(var3);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 16;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var7 = 'QUICKSWITCHER_SHOW';
            var2['type'] = var7;
            var5 = _closure1_slot23;
            var8 = var5.bind(var1)(var6);
            var9 = var2;
            var5 = copyDataProperties(var9, var8);
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot27 = var5;
    var4 = function hide() {
        var4 = _closure1_slot25;
        var1 = _closure1_slot14;
        var3 = var1.QUICKSWITCHER_CLOSED;
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var2 = _closure1_slot26;
        var2 = var2.bind(var1)();
        return var1;
    };
    var _closure1_slot28 = var4;
    var1 = function _openInviteFromQuickSwitcher() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 29;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.resolveInvite;
                    var2 = 'Quick Switcher';
                    var2 = var4.bind(var5)(var8, var2);
                    SaveGenerator(address=60);
case 17:
                    return var2;
case 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                    var9 = var2.invite;
                    var4 = null;
                    if(!(var4 != var9)) { _fun0006_ip = 56; continue _fun0006 }
case 6:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 16;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var10 = 'INVITE_MODAL_OPEN';
                    var4['type'] = var10;
                    var4['invite'] = var9;
                    var4['code'] = var8;
                    var7 = _closure1_slot13;
                    var7 = var7.APP;
                    var4['context'] = var7;
                    var4 = var5.bind(var6)(var4);
case 56:
                    return var3;
case 54:
                    return var2;
case 51:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot29 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot29 = var1;
    var9 = global;
    var15 = var9.Object;
    var14 = var15.defineProperty;
    var12 = {};
    var1 = true;
    var12['value'] = var1;
    var1 = '__esModule';
    var1 = var14.bind(var15)(var3, var1, var12);
    var1 = 0;
    var12 = var11[var1];
    var1 = undefined;
    var12 = var13.bind(var1)(var12);
    var _closure1_slot3 = var12;
    var12 = 1;
    var12 = var11[var12];
    var12 = var13.bind(var1)(var12);
    var _closure1_slot4 = var12;
    var12 = 2;
    var12 = var11[var12];
    var12 = var10.bind(var1)(var12);
    var12 = var12.InAppNavigationType;
    var _closure1_slot5 = var12;
    var12 = 3;
    var12 = var11[var12];
    var12 = var10.bind(var1)(var12);
    var12 = var12.ChannelRecordBase;
    var _closure1_slot6 = var12;
    var12 = 4;
    var12 = var11[var12];
    var12 = var13.bind(var1)(var12);
    var _closure1_slot7 = var12;
    var12 = 5;
    var12 = var11[var12];
    var12 = var13.bind(var1)(var12);
    var _closure1_slot8 = var12;
    var12 = 6;
    var12 = var11[var12];
    var12 = var13.bind(var1)(var12);
    var _closure1_slot9 = var12;
    var12 = 7;
    var12 = var11[var12];
    var12 = var13.bind(var1)(var12);
    var _closure1_slot10 = var12;
    var12 = 8;
    var12 = var11[var12];
    var12 = var13.bind(var1)(var12);
    var _closure1_slot11 = var12;
    var12 = 9;
    var12 = var11[var12];
    var12 = var10.bind(var1)(var12);
    var13 = var12.Layers;
    var13 = var12.ME;
    var _closure1_slot12 = var13;
    var13 = var12.AppContext;
    var _closure1_slot13 = var13;
    var13 = var12.AnalyticEvents;
    var _closure1_slot14 = var13;
    var13 = var12.AnalyticsLocations;
    var _closure1_slot15 = var13;
    var12 = var12.AnalyticsPages;
    var _closure1_slot16 = var12;
    var12 = 10;
    var12 = var11[var12];
    var12 = var10.bind(var1)(var12);
    var12 = var12.isStaticChannelRoute;
    var _closure1_slot17 = var12;
    var12 = 11;
    var12 = var11[var12];
    var12 = var10.bind(var1)(var12);
    var12 = var12.CollectibleShopTab;
    var _closure1_slot18 = var12;
    var15 = var9.Object;
    var14 = var15.freeze;
    var13 = {};
    var12 = 12;
    var16 = var11[var12];
    var16 = var10.bind(var1)(var16);
    var16 = var16.AutocompleterQuerySymbols;
    var17 = var16.USER;
    var16 = var11[var12];
    var16 = var10.bind(var1)(var16);
    var16 = var16.AutocompleterResultTypes;
    var16 = var16.USER;
    var13[16] = var16;
    var16 = var11[var12];
    var16 = var10.bind(var1)(var16);
    var16 = var16.AutocompleterQuerySymbols;
    var17 = var16.TEXT_CHANNEL;
    var16 = var11[var12];
    var16 = var10.bind(var1)(var16);
    var16 = var16.AutocompleterResultTypes;
    var16 = var16.TEXT_CHANNEL;
    var13[16] = var16;
    var16 = var11[var12];
    var16 = var10.bind(var1)(var16);
    var16 = var16.AutocompleterQuerySymbols;
    var17 = var16.VOICE_CHANNEL;
    var16 = var11[var12];
    var16 = var10.bind(var1)(var16);
    var16 = var16.AutocompleterResultTypes;
    var16 = var16.VOICE_CHANNEL;
    var13[16] = var16;
    var16 = var11[var12];
    var16 = var10.bind(var1)(var16);
    var16 = var16.AutocompleterQuerySymbols;
    var17 = var16.GUILD;
    var16 = var11[var12];
    var16 = var10.bind(var1)(var16);
    var16 = var16.AutocompleterResultTypes;
    var16 = var16.GUILD;
    var13[16] = var16;
    var16 = var14.bind(var15)(var13);
    var _closure1_slot19 = var16;
    var15 = var9.Object;
    var14 = var15.freeze;
    var13 = {};
    var30 = var13;
    var29 = var16;
    var16 = copyDataProperties(var30, var29);
    var16 = var11[var12];
    var16 = var10.bind(var1)(var16);
    var16 = var16.AutocompleterQuerySymbols;
    var17 = var16.GAME_PROFILE;
    var16 = var11[var12];
    var16 = var10.bind(var1)(var16);
    var16 = var16.AutocompleterResultTypes;
    var16 = var16.GAME_PROFILE;
    var13[16] = var16;
    var13 = var14.bind(var15)(var13);
    var _closure1_slot20 = var13;
    var15 = var9.RegExp;
    var13 = var11[var12];
    var13 = var10.bind(var1)(var13);
    var13 = var13.AutocompleterQuerySymbols;
    var21 = var13.USER;
    var13 = var11[var12];
    var13 = var10.bind(var1)(var13);
    var13 = var13.AutocompleterQuerySymbols;
    var28 = var13.TEXT_CHANNEL;
    var13 = var11[var12];
    var13 = var10.bind(var1)(var13);
    var13 = var13.AutocompleterQuerySymbols;
    var26 = var13.VOICE_CHANNEL;
    var13 = var11[var12];
    var13 = var10.bind(var1)(var13);
    var13 = var13.AutocompleterQuerySymbols;
    var24 = var13.GUILD;
    var13 = var9.HermesInternal;
    var13 = var13.concat;
    var20 = '^';
    var19 = '|';
    var18 = '|\\';
    var31 = var20;
    var30 = var21;
    var29 = var19;
    var27 = var19;
    var25 = var18;
    var30 = var31[var13](var30, var29, var28, var27, var26, var25, var24, var23);
    var14 = var15.prototype;
    var14 = Object.create(var14, {constructor: {value: var15}});
    var31 = var14;
    var13 = new var31[var15](var30, var29);
    var13 = var13 instanceof Object ? var13 : var14;
    var _closure1_slot21 = var13;
    var13 = var9.RegExp;
    var14 = var11[var12];
    var14 = var10.bind(var1)(var14);
    var14 = var14.AutocompleterQuerySymbols;
    var17 = var14.USER;
    var14 = var11[var12];
    var14 = var10.bind(var1)(var14);
    var14 = var14.AutocompleterQuerySymbols;
    var28 = var14.TEXT_CHANNEL;
    var14 = var11[var12];
    var14 = var10.bind(var1)(var14);
    var14 = var14.AutocompleterQuerySymbols;
    var26 = var14.VOICE_CHANNEL;
    var14 = var11[var12];
    var14 = var10.bind(var1)(var14);
    var14 = var14.AutocompleterQuerySymbols;
    var24 = var14.GUILD;
    var12 = var11[var12];
    var12 = var10.bind(var1)(var12);
    var12 = var12.AutocompleterQuerySymbols;
    var22 = var12.GAME_PROFILE;
    var9 = var9.HermesInternal;
    var9 = var9.concat;
    var31 = var20;
    var30 = var17;
    var23 = var18;
    var30 = var31[var9](var30, var29, var28, var27, var26, var25, var24, var23, var22, var21);
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var31 = var12;
    var9 = new var31[var13](var30, var29);
    var9 = var9 instanceof Object ? var9 : var12;
    var _closure1_slot22 = var9;
    var9 = 30;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/quickswitcher/QuickSwitcherActionCreators.tsx';
    var9 = var10.bind(var11)(var9);
    var3['getQuickSwitcherOptions'] = var8;
    var3['trackOpen'] = var7;
    var3['trackClose'] = var6;
    var3['show'] = var5;
    var3['hide'] = var4;
    var4 = function toggle() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arguments[0];
            var1 = undefined;
            if(!(var4 === var1)) { _fun0007_ip = 52; continue _fun0007 }
case 57:
            var4 = 'KEYBIND';
case 52:
            var5 = _closure1_slot11;
            var3 = var5.isOpen;
            var3 = var3.bind(var5)();
            if(var3) { _fun0007_ip = 58; continue _fun0007 }
case 59:
            var3 = _closure1_slot27;
            var3 = var3.bind(var1)(var4);
            _fun0007_ip = 60; continue _fun0007;
case 58:
            var2 = _closure1_slot28;
            var2 = var2.bind(var1)();
case 60:
            return var1;
        }
    };
    var3['toggle'] = var4;
    var4 = function search(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 16;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var6 = 'QUICKSWITCHER_SEARCH';
        var2['type'] = var6;
        var6 = _closure1_slot23;
        var5 = arg1;
        var7 = var6.bind(var1)(var5);
        var8 = var2;
        var5 = copyDataProperties(var8, var7);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['search'] = var4;
    var4 = function selectResult(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 16;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'QUICKSWITCHER_SELECT';
        var2['type'] = var5;
        var5 = arg1;
        var2['selectedIndex'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['selectResult'] = var4;
    var2 = function switchToResult(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = arg1;
            var6 = arguments[1];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0008_ip = 61; continue _fun0008 }
case 16:
            var6 = false;
case 61:
            var3 = _closure1_slot26;
            var3 = var3.bind(var1)();
            var4 = _closure1_slot25;
            var3 = _closure1_slot14;
            var3 = var3.QUICKSWITCHER_RESULT_SELECTED;
            var3 = var4.bind(var1)(var3, var5);
            var7 = var5.type;
            var3 = var5.record;
            var10 = {};
            var4 = _closure1_slot16;
            var4 = var4.QUICK_SWITCHER;
            var10['page'] = var4;
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var9 = 12;
            var4 = var4[var9];
            var4 = var8.bind(var1)(var4);
            var4 = var4.AutocompleterResultTypes;
            var4 = var4.GUILD;
            if(!(var4 !== var7)) { _fun0008_ip = 62; continue _fun0008 }
case 63:
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var4 = var8.bind(var1)(var4);
            var4 = var4.AutocompleterResultTypes;
            var4 = var4.TEXT_CHANNEL;
            if(!(var4 !== var7)) { _fun0008_ip = 64; continue _fun0008 }
case 65:
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var4 = var8.bind(var1)(var4);
            var4 = var4.AutocompleterResultTypes;
            var4 = var4.VOICE_CHANNEL;
            if(!(var4 !== var7)) { _fun0008_ip = 66; continue _fun0008 }
case 67:
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var4 = var8.bind(var1)(var4);
            var4 = var4.AutocompleterResultTypes;
            var4 = var4.USER;
            if(!(var4 !== var7)) { _fun0008_ip = 68; continue _fun0008 }
case 69:
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var4 = var8.bind(var1)(var4);
            var4 = var4.AutocompleterResultTypes;
            var4 = var4.GROUP_DM;
            if(!(var4 !== var7)) { _fun0008_ip = 70; continue _fun0008 }
case 20:
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var4 = var8.bind(var1)(var4);
            var4 = var4.AutocompleterResultTypes;
            var4 = var4.APPLICATION;
            if(!(var4 !== var7)) { _fun0008_ip = 71; continue _fun0008 }
case 72:
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var4 = var8.bind(var1)(var4);
            var4 = var4.AutocompleterResultTypes;
            var4 = var4.GAME_PROFILE;
            if(!(var4 !== var7)) { _fun0008_ip = 73; continue _fun0008 }
case 74:
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var4 = var8.bind(var1)(var4);
            var4 = var4.AutocompleterResultTypes;
            var4 = var4.LINK;
            if(!(var4 !== var7)) { _fun0008_ip = 75; continue _fun0008 }
case 76:
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var4 = var8.bind(var1)(var4);
            var4 = var4.AutocompleterResultTypes;
            var4 = var4.IN_APP_NAVIGATION;
            if(!(var4 === var7)) { _fun0008_ip = 77; continue _fun0008 }
case 78:
            var4 = var5.record;
            var7 = var4.type;
            var4 = _closure1_slot5;
            var4 = var4.SETTINGS;
            if(!(var7 !== var4)) { _fun0008_ip = 77; continue _fun0008 }
case 79:
            var4 = var5.record;
            var7 = var4.type;
            var4 = _closure1_slot5;
            var4 = var4.PLAYGROUND;
            if(!(var7 !== var4)) { _fun0008_ip = 80; continue _fun0008 }
case 81:
            var4 = var5.record;
            var7 = var4.type;
            var4 = _closure1_slot5;
            var4 = var4.SHOP_ORBS_TAB;
            if(!(var7 !== var4)) { _fun0008_ip = 82; continue _fun0008 }
case 83:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 25;
            var4 = var8[var4];
            var8 = var7.bind(var1)(var4);
            var7 = var3.path;
            var4 = {};
            var9 = true;
            var4['navigationReplace'] = var9;
            var4 = var8.bind(var1)(var7, var4);
            _fun0008_ip = 77; continue _fun0008;
case 82:
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 27;
            var4 = var12[var4];
            var8 = var7.bind(var1)(var4);
            var7 = var8.openCollectiblesShop;
            var4 = {};
            var9 = _closure1_slot18;
            var9 = var9.ORBS;
            var4['tab'] = var9;
            var11 = _closure1_slot1;
            var9 = 28;
            var13 = var12[var9];
            var13 = var11.bind(var1)(var13);
            var14 = var13.QUICK_SWITCHER;
            var13 = new Array(1);
            var13[0] = var14;
            var4['analyticsLocations'] = var13;
            var9 = var12[var9];
            var9 = var11.bind(var1)(var9);
            var9 = var9.QUICK_SWITCHER;
            var4['analyticsSource'] = var9;
            var4 = var7.bind(var8)(var4);
            _fun0008_ip = 77; continue _fun0008;
case 80:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 26;
            var4 = var8[var4];
            var8 = var7.bind(var1)(var4);
            var7 = var8.getHasPlaygroundAccess;
            var4 = 'quickswitcher_action';
            var4 = var7.bind(var8)(var4);
            if(var4) { _fun0008_ip = 77; continue _fun0008 }
case 84:
            return var1;
case 75:
            var7 = var3.inviteCode;
            var4 = null;
            if(!(var4 == var7)) { _fun0008_ip = 85; continue _fun0008 }
case 86:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 25;
            var4 = var8[var4];
            var8 = var7.bind(var1)(var4);
            var7 = var3.path;
            var4 = {};
            var9 = true;
            var4['navigationReplace'] = var9;
            var4 = var8.bind(var1)(var7, var4);
            _fun0008_ip = 77; continue _fun0008;
case 85:
            var7 = var3.inviteCode;
            var4 = function openInviteFromQuickSwitcher() {
                var1 = undefined;
                var4 = _closure1_slot29;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var4 = var4.bind(var1)(var7);
            _fun0008_ip = 77; continue _fun0008;
case 73:
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var4 = 23;
            var4 = var12[var4];
            var8 = var7.bind(var1)(var4);
            var7 = var8.openGameProfileModal;
            var4 = {};
            var9 = var3.id;
            var4['gameId'] = var9;
            var9 = {};
            var11 = true;
            var9['shouldOpenGameProfile'] = var11;
            var11 = var3.id;
            var9['gameId'] = var11;
            var4['gameProfileModalChecks'] = var9;
            var11 = _closure1_slot0;
            var9 = 24;
            var9 = var12[var9];
            var9 = var11.bind(var1)(var9);
            var9 = var9.GameProfileSources;
            var9 = var9.QuickSwitcher;
            var4['source'] = var9;
            var4 = var7.bind(var8)(var4);
            _fun0008_ip = 77; continue _fun0008;
case 71:
            var8 = _closure1_slot8;
            var7 = var8.getActiveLibraryApplication;
            var4 = var3.id;
            var4 = var7.bind(var8)(var4);
            var4 = var3.id;
            var4 = _closure1_slot15;
            var7 = var4.QUICK_SWITCHER;
            var4 = var4.QUICK_SWITCHER;
            var4 = global;
            var7 = var4.Promise;
            var4 = var7.resolve;
            var4 = var4.bind(var7)();
            _fun0008_ip = 77; continue _fun0008;
case 70:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 18;
            var4 = var8[var4];
            var11 = var7.bind(var1)(var4);
            var9 = var11.transitionToChannel;
            var7 = var3.id;
            var4 = {};
            var12 = true;
            var4['navigationReplace'] = var12;
            var4 = var9.bind(var11)(var7, var4);
            var7 = _closure1_slot1;
            var4 = 22;
            var4 = var8[var4];
            var9 = var7.bind(var1)(var4);
            var8 = var9.channelListScrollTo;
            var7 = _closure1_slot12;
            var4 = var3.id;
            var4 = var8.bind(var9)(var7, var4);
            _fun0008_ip = 77; continue _fun0008;
case 68:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 21;
            var4 = var8[var4];
            var11 = var7.bind(var1)(var4);
            var9 = var11.openPrivateChannel;
            var4 = {};
            var13 = var3.id;
            var12 = new Array(1);
            var12[0] = var13;
            var4['recipientIds'] = var12;
            var12 = 'Quickswitcher';
            var4['location'] = var12;
            var4 = var9.bind(var11)(var4);
            var4 = 22;
            var4 = var8[var4];
            var9 = var7.bind(var1)(var4);
            var8 = var9.channelListScrollTo;
            var7 = _closure1_slot12;
            var12 = _closure1_slot7;
            var11 = var12.getDMFromUserId;
            var4 = var3.id;
            var4 = var11.bind(var12)(var4);
            var4 = var8.bind(var9)(var7, var4);
            _fun0008_ip = 77; continue _fun0008;
case 66:
            var8 = _closure1_slot7;
            var7 = var8.getChannel;
            var4 = var3.id;
            var4 = var7.bind(var8)(var4);
            var7 = null;
            if(!(var7 != var4)) { _fun0008_ip = 77; continue _fun0008 }
case 87:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            if(var6) { _fun0008_ip = 88; continue _fun0008 }
case 89:
            var6 = 20;
            var6 = var8[var6];
            var11 = var7.bind(var1)(var6);
            var9 = var11.selectVoiceChannel;
            var6 = var3.id;
            var6 = var9.bind(var11)(var6);
            _fun0008_ip = 90; continue _fun0008;
case 88:
            var6 = 19;
            var6 = var8[var6];
            var9 = var7.bind(var1)(var6);
            var8 = var9.updateChatOpen;
            var7 = var3.id;
            var6 = true;
            var6 = var8.bind(var9)(var7, var6);
case 90:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 18;
            var6 = var8[var6];
            var8 = var7.bind(var1)(var6);
            var7 = var8.transitionToChannel;
            var6 = var4.id;
            var4 = {};
            var9 = {};
            var9['analyticsSource'] = var10;
            var4['state'] = var9;
            var9 = true;
            var4['navigationReplace'] = var9;
            var4 = var7.bind(var8)(var6, var4);
            _fun0008_ip = 77; continue _fun0008;
case 64:
            var7 = _closure1_slot7;
            var6 = var7.getChannel;
            var4 = var3.id;
            var4 = var6.bind(var7)(var4);
            var6 = null;
            if(!(var6 != var4)) { _fun0008_ip = 77; continue _fun0008 }
case 91:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 18;
            var6 = var8[var6];
            var8 = var7.bind(var1)(var6);
            var7 = var8.transitionToChannel;
            var6 = var4.id;
            var4 = {};
            var9 = {};
            var9['analyticsSource'] = var10;
            var4['state'] = var9;
            var9 = true;
            var4['navigationReplace'] = var9;
            var4 = var7.bind(var8)(var6, var4);
            _fun0008_ip = 77; continue _fun0008;
case 62:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 17;
            var4 = var7[var4];
            var7 = var6.bind(var1)(var4);
            var6 = var7.transitionToGuild;
            var4 = var3.id;
            var3 = {};
            var8 = true;
            var3['navigationReplace'] = var8;
            var3 = var6.bind(var7)(var4, var3);
case 77:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 16;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'QUICKSWITCHER_SWITCH_TO';
            var2['type'] = var6;
            var2['result'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['switchToResult'] = var2;
    return var1;
})();