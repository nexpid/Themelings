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
            var1 = var8.charAt;
            var2 = 0;
            var7 = var1.bind(var8)(var2);
            var3 = _closure1_slot16;
            var5 = var3[var7];
            var4 = null;
            var6 = var4 != var5;
            var3 = null;
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var5;
case 2:
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 10;
            var6 = var6[var5];
            var5 = undefined;
            var6 = var9.bind(var5)(var6);
            var6 = var6.AutocompleterQuerySymbols;
            var6 = var6.APPLICATION;
            if(!(var7 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = null;
case 4:
            var7 = var8.replace;
            var6 = _closure1_slot17;
            var4 = '';
            var6 = var7.bind(var8)(var6, var4);
            var4 = new Array(2);
            var4[0] = var6;
            var4[1] = var3;
            var3 = _closure1_slot3;
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
    var _closure1_slot18 = var8;
    var7 = function trackOpen(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot10;
            var2 = var3.isOpen;
            var2 = var2.bind(var3)();
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = _closure1_slot9;
            var2 = var3.getGuildId;
            var7 = var2.bind(var3)();
            var3 = _closure1_slot8;
            var2 = var3.getChannelId;
            var6 = var2.bind(var3)(var7);
            var2 = null;
            var3 = var2 != var6;
            var4 = undefined;
            var5 = undefined;
            if(!var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var8 = _closure1_slot6;
            var3 = var8.getChannel;
            var3 = var3.bind(var8)(var6);
            var8 = var2 != var3;
            var2 = null;
            if(!var8) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = var3.type;
case 10:
            var5 = var2;
case 8:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 11;
            var2 = var8[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.track;
            var1 = _closure1_slot12;
            var2 = var1.QUICKSWITCHER_OPENED;
            var1 = {};
            var8 = arg1;
            var1['source'] = var8;
            var1['current_guild_id'] = var7;
            var1['current_channel_id'] = var6;
            var1['current_channel_type'] = var5;
            var1 = var3.bind(var4)(var2, var1);
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot19 = var7;
    var6 = function trackClose(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var10 = arg2;
            var3 = _closure1_slot10;
            var1 = var3.getProps;
            var1 = var1.bind(var3)();
            var8 = var1.results;
            var17 = var1.queryMode;
            var12 = var1.query;
            var3 = var1.maxQueryLength;
            var4 = _closure1_slot9;
            var1 = var4.getGuildId;
            var16 = var1.bind(var4)();
            var4 = _closure1_slot8;
            var1 = var4.getChannelId;
            var7 = var1.bind(var4)(var16);
            var5 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 10;
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
            var4 = 12;
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
            if(!var19) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var5 = _closure1_slot15;
            var19 = var5.bind(var1)(var7);
case 12:
            var11 = function getResultType(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var1 = null;
                    var2 = var1 == var3;
                    if(var2) { _fun0004_ip = 8; continue _fun0004 }
case 14:
                    var4 = var3.type;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 10;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var2 = var2.AutocompleterResultTypes;
                    var2 = var2.IN_APP_NAVIGATION;
                    if(!(var4 !== var2)) { _fun0004_ip = 9; continue _fun0004 }
case 15:
                    var2 = var3.type;
                    _fun0004_ip = 10; continue _fun0004;
case 9:
                    var5 = var3.type;
                    var4 = '_';
                    var4 = var5 + var4;
                    var3 = var3.record;
                    var3 = var3.type;
                    var2 = var4 + var3;
case 10:
                    var1 = var2;
case 8:
                    return var1;
                }
            };
            var5 = {};
            var18 = undefined;
            if(var19) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var18 = var7;
case 16:
            var5['current_channel_id'] = var18;
            var18 = undefined;
            if(!var19) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var18 = var7;
case 18:
            var5['current_channel_static_route'] = var18;
            var5['current_guild_id'] = var16;
            var18 = var4 != var17;
            var16 = 'GENERAL';
            if(!var18) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var16 = var17;
case 20:
            var5['query_mode'] = var16;
            var16 = var12.length;
            var5['query_length'] = var16;
            var5['max_query_length'] = var3;
            var5['is_email_like'] = var15;
            var5['is_phone_like'] = var14;
            var5['is_username_like'] = var13;
            var3 = null;
            if(var15) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var3 = null;
            if(var14) { _fun0003_ip = 22; continue _fun0003 }
case 24:
            var3 = null;
            if(var13) { _fun0003_ip = 22; continue _fun0003 }
case 25:
            var3 = var12;
case 22:
            var5['query'] = var3;
            var3 = var11.bind(var1)(var6);
            var5['top_result_type'] = var3;
            var12 = var4 != var6;
            var3 = null;
            if(!var12) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var3 = var6.score;
case 26:
            var5['top_result_score'] = var3;
            var6 = _closure1_slot10;
            var3 = var6.getResultTotals;
            var3 = var3.bind(var6)();
            var5['num_results_total'] = var3;
            var14 = _closure1_slot10;
            var12 = var14.getResultTotals;
            var13 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = var3[var9];
            var6 = var13.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.USER;
            var6 = var12.bind(var14)(var6);
            var5['num_results_users'] = var6;
            var14 = _closure1_slot10;
            var12 = var14.getResultTotals;
            var6 = var3[var9];
            var6 = var13.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.TEXT_CHANNEL;
            var6 = var12.bind(var14)(var6);
            var5['num_results_text_channels'] = var6;
            var14 = _closure1_slot10;
            var12 = var14.getResultTotals;
            var6 = var3[var9];
            var6 = var13.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.VOICE_CHANNEL;
            var6 = var12.bind(var14)(var6);
            var5['num_results_voice_channels'] = var6;
            var14 = _closure1_slot10;
            var12 = var14.getResultTotals;
            var6 = var3[var9];
            var6 = var13.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.GUILD;
            var6 = var12.bind(var14)(var6);
            var5['num_results_guilds'] = var6;
            var12 = _closure1_slot10;
            var6 = var12.getResultTotals;
            var3 = var3[var9];
            var3 = var13.bind(var1)(var3);
            var3 = var3.AutocompleterResultTypes;
            var3 = var3.GROUP_DM;
            var3 = var6.bind(var12)(var3);
            var5['num_results_group_dms'] = var3;
            if(!(var4 != var7)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var6 = _closure1_slot6;
            var3 = var6.getChannel;
            var6 = var3.bind(var6)(var7);
            var7 = var4 != var6;
            var3 = null;
            if(!var7) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var3 = var6.type;
case 30:
            var5['current_channel_type'] = var3;
case 28:
            if(!(var4 != var10)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
            if(!(var6 !== var7)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var6 = var8.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.TEXT_CHANNEL;
            if(!(var6 !== var7)) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var6 = var8.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.VOICE_CHANNEL;
            if(!(var6 !== var7)) { _fun0003_ip = 36; continue _fun0003 }
case 38:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var6 = var8.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.GROUP_DM;
            if(!(var6 !== var7)) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var6 = var8.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.USER;
            if(!(var6 === var7)) { _fun0003_ip = 32; continue _fun0003 }
case 41:
            var6 = var3.id;
            var5['selected_user_id'] = var6;
            _fun0003_ip = 32; continue _fun0003;
case 39:
            var6 = var3.id;
            var5['selected_channel_id'] = var6;
            _fun0003_ip = 32; continue _fun0003;
case 36:
            var6 = _closure1_slot5;
            var6 = var3 instanceof var6;
            if(!var6) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var6 = var3.guild_id;
            var6 = var4 != var6;
            var4 = null;
            if(!var6) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var4 = var3.guild_id;
case 44:
            var5['selected_guild_id'] = var4;
case 42:
            var4 = var3.id;
            var5['selected_channel_id'] = var4;
            _fun0003_ip = 32; continue _fun0003;
case 34:
            var3 = var3.id;
            var5['selected_guild_id'] = var3;
case 32:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.track;
            var2 = arg1;
            var2 = var3.bind(var4)(var2, var5);
            return var1;
        }
    };
    var _closure1_slot20 = var6;
    var1 = function hideQuickSwitcher() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 13;
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
    var _closure1_slot21 = var1;
    var5 = function show() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arguments[0];
            var6 = arguments[1];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0005_ip = 46; continue _fun0005 }
case 14:
            var3 = 'KEYBIND';
case 46:
            if(!(var6 === var1)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var6 = '';
case 47:
            var2 = _closure1_slot19;
            var2 = var2.bind(var1)(var3);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 13;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var7 = 'QUICKSWITCHER_SHOW';
            var2['type'] = var7;
            var5 = _closure1_slot18;
            var8 = var5.bind(var1)(var6);
            var9 = var2;
            var5 = copyDataProperties(var9, var8);
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot22 = var5;
    var4 = function hide() {
        var4 = _closure1_slot20;
        var1 = _closure1_slot12;
        var3 = var1.QUICKSWITCHER_CLOSED;
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var2 = _closure1_slot21;
        var2 = var2.bind(var1)();
        return var1;
    };
    var _closure1_slot23 = var4;
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
    var12 = var10.bind(var1)(var12);
    var12 = var12.InAppNavigationType;
    var _closure1_slot4 = var12;
    var12 = 2;
    var12 = var11[var12];
    var12 = var10.bind(var1)(var12);
    var12 = var12.ChannelRecordBase;
    var _closure1_slot5 = var12;
    var12 = 3;
    var12 = var11[var12];
    var12 = var13.bind(var1)(var12);
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
    var12 = var10.bind(var1)(var12);
    var13 = var12.ME;
    var _closure1_slot11 = var13;
    var13 = var12.AnalyticEvents;
    var _closure1_slot12 = var13;
    var13 = var12.AnalyticsLocations;
    var _closure1_slot13 = var13;
    var12 = var12.AnalyticsPages;
    var _closure1_slot14 = var12;
    var12 = 9;
    var12 = var11[var12];
    var12 = var10.bind(var1)(var12);
    var12 = var12.isStaticChannelRoute;
    var _closure1_slot15 = var12;
    var15 = var9.Object;
    var14 = var15.freeze;
    var13 = {};
    var12 = 10;
    var16 = var11[var12];
    var16 = var10.bind(var1)(var16);
    var16 = var16.AutocompleterQuerySymbols;
    var17 = var16.USER;
    var16 = var11[var12];
    var16 = var10.bind(var1)(var16);
    var16 = var16.AutocompleterResultTypes;
    var16 = var16.USER;
    var13[var17] = var16;
    var16 = var11[var12];
    var16 = var10.bind(var1)(var16);
    var16 = var16.AutocompleterQuerySymbols;
    var17 = var16.TEXT_CHANNEL;
    var16 = var11[var12];
    var16 = var10.bind(var1)(var16);
    var16 = var16.AutocompleterResultTypes;
    var16 = var16.TEXT_CHANNEL;
    var13[var17] = var16;
    var16 = var11[var12];
    var16 = var10.bind(var1)(var16);
    var16 = var16.AutocompleterQuerySymbols;
    var17 = var16.VOICE_CHANNEL;
    var16 = var11[var12];
    var16 = var10.bind(var1)(var16);
    var16 = var16.AutocompleterResultTypes;
    var16 = var16.VOICE_CHANNEL;
    var13[var17] = var16;
    var16 = var11[var12];
    var16 = var10.bind(var1)(var16);
    var16 = var16.AutocompleterQuerySymbols;
    var17 = var16.GUILD;
    var16 = var11[var12];
    var16 = var10.bind(var1)(var16);
    var16 = var16.AutocompleterResultTypes;
    var16 = var16.GUILD;
    var13[var17] = var16;
    var16 = var11[var12];
    var16 = var10.bind(var1)(var16);
    var16 = var16.AutocompleterQuerySymbols;
    var17 = var16.APPLICATION;
    var16 = var11[var12];
    var16 = var10.bind(var1)(var16);
    var16 = var16.AutocompleterResultTypes;
    var16 = var16.APPLICATION;
    var13[var17] = var16;
    var13 = var14.bind(var15)(var13);
    var _closure1_slot16 = var13;
    var13 = var9.RegExp;
    var14 = var11[var12];
    var14 = var10.bind(var1)(var14);
    var14 = var14.AutocompleterQuerySymbols;
    var20 = var14.USER;
    var14 = var11[var12];
    var14 = var10.bind(var1)(var14);
    var14 = var14.AutocompleterQuerySymbols;
    var27 = var14.TEXT_CHANNEL;
    var14 = var11[var12];
    var14 = var10.bind(var1)(var14);
    var14 = var14.AutocompleterQuerySymbols;
    var25 = var14.VOICE_CHANNEL;
    var14 = var11[var12];
    var14 = var10.bind(var1)(var14);
    var14 = var14.AutocompleterQuerySymbols;
    var23 = var14.GUILD;
    var12 = var11[var12];
    var12 = var10.bind(var1)(var12);
    var12 = var12.AutocompleterQuerySymbols;
    var21 = var12.APPLICATION;
    var9 = var9.HermesInternal;
    var15 = var9.concat;
    var30 = '^';
    var12 = '|';
    var9 = '|\\';
    var29 = var20;
    var28 = var12;
    var26 = var12;
    var24 = var9;
    var22 = var9;
    var29 = var30[var15](var29, var28, var27, var26, var25, var24, var23, var22, var21, var20);
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var30 = var12;
    var9 = new var30[var13](var29, var28);
    var9 = var9 instanceof Object ? var9 : var12;
    var _closure1_slot17 = var9;
    var9 = 22;
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
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arguments[0];
            var1 = undefined;
            if(!(var4 === var1)) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var4 = 'KEYBIND';
case 49:
            var5 = _closure1_slot10;
            var3 = var5.isOpen;
            var3 = var3.bind(var5)();
            if(var3) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            var3 = _closure1_slot22;
            var3 = var3.bind(var1)(var4);
            _fun0006_ip = 53; continue _fun0006;
case 51:
            var2 = _closure1_slot23;
            var2 = var2.bind(var1)();
case 53:
            return var1;
        }
    };
    var3['toggle'] = var4;
    var4 = function search(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 13;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var6 = 'QUICKSWITCHER_SEARCH';
        var2['type'] = var6;
        var6 = _closure1_slot18;
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
        var1 = 13;
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
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = arg1;
            var6 = arguments[1];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0007_ip = 54; continue _fun0007 }
case 14:
            var6 = false;
case 54:
            var3 = _closure1_slot21;
            var3 = var3.bind(var1)();
            var4 = _closure1_slot20;
            var3 = _closure1_slot12;
            var3 = var3.QUICKSWITCHER_RESULT_SELECTED;
            var3 = var4.bind(var1)(var3, var5);
            var7 = var5.type;
            var3 = var5.record;
            var10 = {};
            var4 = _closure1_slot14;
            var4 = var4.QUICK_SWITCHER;
            var10['page'] = var4;
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var9 = 10;
            var4 = var4[var9];
            var4 = var8.bind(var1)(var4);
            var4 = var4.AutocompleterResultTypes;
            var4 = var4.GUILD;
            if(!(var4 !== var7)) { _fun0007_ip = 55; continue _fun0007 }
case 56:
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var4 = var8.bind(var1)(var4);
            var4 = var4.AutocompleterResultTypes;
            var4 = var4.TEXT_CHANNEL;
            if(!(var4 !== var7)) { _fun0007_ip = 57; continue _fun0007 }
case 58:
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var4 = var8.bind(var1)(var4);
            var4 = var4.AutocompleterResultTypes;
            var4 = var4.VOICE_CHANNEL;
            if(!(var4 !== var7)) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var4 = var8.bind(var1)(var4);
            var4 = var4.AutocompleterResultTypes;
            var4 = var4.USER;
            if(!(var4 !== var7)) { _fun0007_ip = 61; continue _fun0007 }
case 62:
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var4 = var8.bind(var1)(var4);
            var4 = var4.AutocompleterResultTypes;
            var4 = var4.GROUP_DM;
            if(!(var4 !== var7)) { _fun0007_ip = 63; continue _fun0007 }
case 18:
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var4 = var8.bind(var1)(var4);
            var4 = var4.AutocompleterResultTypes;
            var4 = var4.APPLICATION;
            if(!(var4 !== var7)) { _fun0007_ip = 64; continue _fun0007 }
case 65:
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var4 = var8.bind(var1)(var4);
            var4 = var4.AutocompleterResultTypes;
            var4 = var4.LINK;
            if(!(var4 !== var7)) { _fun0007_ip = 66; continue _fun0007 }
case 67:
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var4 = var8.bind(var1)(var4);
            var4 = var4.AutocompleterResultTypes;
            var4 = var4.IN_APP_NAVIGATION;
            if(!(var4 === var7)) { _fun0007_ip = 68; continue _fun0007 }
case 69:
            var4 = var5.record;
            var7 = var4.type;
            var4 = _closure1_slot4;
            var4 = var4.SETTINGS;
            if(!(var7 !== var4)) { _fun0007_ip = 70; continue _fun0007 }
case 71:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 20;
            var4 = var8[var4];
            var8 = var7.bind(var1)(var4);
            var7 = var3.path;
            var4 = {};
            var9 = true;
            var4['navigationReplace'] = var9;
            var4 = var8.bind(var1)(var7, var4);
            _fun0007_ip = 68; continue _fun0007;
case 70:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 21;
            var4 = var8[var4];
            var7 = var7.bind(var1)(var4);
            var4 = var5.record;
            var4 = var4.path;
            var4 = var7.bind(var1)(var4);
            _fun0007_ip = 68; continue _fun0007;
case 66:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 20;
            var4 = var8[var4];
            var8 = var7.bind(var1)(var4);
            var7 = var3.path;
            var4 = {};
            var9 = true;
            var4['navigationReplace'] = var9;
            var4 = var8.bind(var1)(var7, var4);
            _fun0007_ip = 68; continue _fun0007;
case 64:
            var8 = _closure1_slot7;
            var7 = var8.getActiveLibraryApplication;
            var4 = var3.id;
            var4 = var7.bind(var8)(var4);
            var4 = var3.id;
            var4 = _closure1_slot13;
            var7 = var4.QUICK_SWITCHER;
            var4 = var4.QUICK_SWITCHER;
            var4 = global;
            var7 = var4.Promise;
            var4 = var7.resolve;
            var4 = var4.bind(var7)();
            _fun0007_ip = 68; continue _fun0007;
case 63:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 15;
            var4 = var8[var4];
            var11 = var7.bind(var1)(var4);
            var9 = var11.transitionToChannel;
            var7 = var3.id;
            var4 = {};
            var12 = true;
            var4['navigationReplace'] = var12;
            var4 = var9.bind(var11)(var7, var4);
            var7 = _closure1_slot1;
            var4 = 19;
            var4 = var8[var4];
            var9 = var7.bind(var1)(var4);
            var8 = var9.channelListScrollTo;
            var7 = _closure1_slot11;
            var4 = var3.id;
            var4 = var8.bind(var9)(var7, var4);
            _fun0007_ip = 68; continue _fun0007;
case 61:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 18;
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
            var4 = 19;
            var4 = var8[var4];
            var9 = var7.bind(var1)(var4);
            var8 = var9.channelListScrollTo;
            var7 = _closure1_slot11;
            var12 = _closure1_slot6;
            var11 = var12.getDMFromUserId;
            var4 = var3.id;
            var4 = var11.bind(var12)(var4);
            var4 = var8.bind(var9)(var7, var4);
            _fun0007_ip = 68; continue _fun0007;
case 59:
            var8 = _closure1_slot6;
            var7 = var8.getChannel;
            var4 = var3.id;
            var4 = var7.bind(var8)(var4);
            var7 = null;
            if(!(var7 != var4)) { _fun0007_ip = 68; continue _fun0007 }
case 72:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            if(var6) { _fun0007_ip = 73; continue _fun0007 }
case 74:
            var6 = 17;
            var6 = var8[var6];
            var11 = var7.bind(var1)(var6);
            var9 = var11.selectVoiceChannel;
            var6 = var3.id;
            var6 = var9.bind(var11)(var6);
            _fun0007_ip = 75; continue _fun0007;
case 73:
            var6 = 16;
            var6 = var8[var6];
            var9 = var7.bind(var1)(var6);
            var8 = var9.updateChatOpen;
            var7 = var3.id;
            var6 = true;
            var6 = var8.bind(var9)(var7, var6);
case 75:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 15;
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
            _fun0007_ip = 68; continue _fun0007;
case 57:
            var7 = _closure1_slot6;
            var6 = var7.getChannel;
            var4 = var3.id;
            var4 = var6.bind(var7)(var4);
            var6 = null;
            if(!(var6 != var4)) { _fun0007_ip = 68; continue _fun0007 }
case 34:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 15;
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
            _fun0007_ip = 68; continue _fun0007;
case 55:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 14;
            var4 = var7[var4];
            var7 = var6.bind(var1)(var4);
            var6 = var7.transitionToGuild;
            var4 = var3.id;
            var3 = {};
            var8 = true;
            var3['navigationReplace'] = var8;
            var3 = var6.bind(var7)(var4, var3);
case 68:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 13;
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