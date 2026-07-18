// app/modules/icymi/ICYMIUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var9;
    var6 = function generateHydrationId(arg1, arg2) {
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var4 = 'hydration-';
        var3 = arg1;
        var2 = '-';
        var1 = arg2;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot15 = var6;
    var4 = function hydrateItems() {
        var1 = undefined;
        var4 = _closure1_slot17;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var4;
    var1 = function _hydrateItems() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var4 = arg1;
                    var7 = arg2;
                    var6 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = undefined;
                    var _closure4_slot0 = var3;
                    var5 = _closure1_slot10;
                    var2 = var5.getHydratedItems;
                    var2 = var2.bind(var5)();
                    _closure4_slot0 = var2;
                    var2 = var4.slice;
                    var11 = var2.bind(var4)(var7, var6);
                    var2 = var11.length;
                    var12 = 0;
                    if(!(var12 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 11;
                    var10 = var5[var2];
                    var13 = var4.bind(var3)(var10);
                    var10 = var13.loadHydratedAttempt;
                    var9 = _closure1_slot15;
                    var9 = var9.bind(var3)(var7, var6);
                    var9 = var10.bind(var13)(var9);
                    var10 = var11.filter;
                    var9 = function(arg1) {
                        var2 = _closure4_slot0;
                        var1 = arg1;
                        var1 = var1.id;
                        var2 = var2[var1];
                        var1 = null;
                        var1 = var1 == var2;
                        return var1;
                    };
                    var14 = var10.bind(var11)(var9);
                    var10 = var14.filter;
                    var9 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 10;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.ICYMIItemTypes;
                        var1 = var1.MESSAGE;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var11 = var10.bind(var14)(var9);
                    var10 = var11.map;
                    var9 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.data;
                        var3 = var3.channel_id;
                        var1['channel_id'] = var3;
                        var2 = var2.data;
                        var2 = var2.message_id;
                        var1['message_id'] = var2;
                        return var1;
                    };
                    var16 = var10.bind(var11)(var9);
                    var11 = var14.map;
                    var9 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var4 = arg1;
                            var3 = var4.type;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 10;
                            var1 = var2[var1];
                            var2 = undefined;
                            var1 = var5.bind(var2)(var1);
                            var1 = var1.ICYMIItemTypes;
                            var1 = var1.MESSAGE;
                            if(!(var3 !== var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                            var1 = new Array(0);
                            return var1;
case 6:
                            var1 = new Array(0);
                            var3 = var4.data;
                            var6 = var3.message_context;
                            var3 = null;
                            var7 = var3 == var6;
                            var5 = undefined;
                            if(var7) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                            var5 = var6.reply_message_id;
case 8:
                            if(!(var3 != var5)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                            var6 = var1.push;
                            var5 = {};
                            var7 = var4.data;
                            var7 = var7.channel_id;
                            var5['channel_id'] = var7;
                            var7 = var4.data;
                            var7 = var7.message_context;
                            var7 = var7.reply_message_id;
                            var5['message_id'] = var7;
                            var5 = var6.bind(var1)(var5);
case 10:
                            var5 = var4.data;
                            var6 = var5.message_context;
                            var7 = var3 == var6;
                            var5 = undefined;
                            if(var7) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                            var5 = var6.before_message_id;
case 12:
                            if(!(var3 != var5)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                            var6 = var1.push;
                            var5 = {};
                            var7 = var4.data;
                            var7 = var7.channel_id;
                            var5['channel_id'] = var7;
                            var7 = var4.data;
                            var7 = var7.message_context;
                            var7 = var7.before_message_id;
                            var5['message_id'] = var7;
                            var5 = var6.bind(var1)(var5);
case 14:
                            var5 = var4.data;
                            var5 = var5.message_context;
                            var6 = var3 == var5;
                            var2 = undefined;
                            if(var6) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                            var2 = var5.after_message_id;
case 16:
                            if(!(var3 != var2)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                            var3 = var1.push;
                            var2 = {};
                            var5 = var4.data;
                            var5 = var5.channel_id;
                            var2['channel_id'] = var5;
                            var4 = var4.data;
                            var4 = var4.message_context;
                            var4 = var4.after_message_id;
                            var2['message_id'] = var4;
                            var2 = var3.bind(var1)(var2);
case 18:
                            return var1;
                        }
                    };
                    var11 = var11.bind(var14)(var9);
                    var9 = var11.flat;
                    var13 = var9.bind(var11)();
                    var11 = var13.filter;
                    var9 = global;
                    var9 = var9.Boolean;
                    var11 = var11.bind(var13)(var9);
                    var13 = var14.filter;
                    var9 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 10;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.ICYMIItemTypes;
                        var1 = var1.ACTIVITY;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var13 = var13.bind(var14)(var9);
                    var9 = var13.map;
                    var8 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.data;
                        var3 = var3.user_id;
                        var1['user_id'] = var3;
                        var2 = var2.data;
                        var2 = var2.content_id;
                        var1['content_id'] = var2;
                        return var1;
                    };
                    var8 = var9.bind(var13)(var8);
                    var2 = var5[var2];
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.fetchHydrated;
                    var2 = {};
                    var9 = new Array(0);
                    var17 = var9;
                    var15 = 0;
                    var15 = arraySpread(var17, var16, var15);
                    var17 = var9;
                    var16 = var11;
                    var10 = arraySpread(var17, var16, var15);
                    var2['messageItems'] = var9;
                    var2['activityItems'] = var8;
                    var2 = var4.bind(var5)(var7, var6, var2);
                    SaveGenerator(address=305);
case 20:
                    return var2;
case 21:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 22; continue _fun0001 }
case 4:
                    return var3;
case 22:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function _hydrateNextPage() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var4 = _closure1_slot10;
                    var3 = var4.getUnreadDisplayItems;
                    var10 = var3.bind(var4)();
                    var4 = _closure1_slot10;
                    var3 = var4.getReadDisplayItems;
                    var7 = var3.bind(var4)();
                    var4 = _closure1_slot10;
                    var3 = var4.getNextIndexToHydrate;
                    var6 = var3.bind(var4)();
                    var5 = _closure1_slot16;
                    var4 = new Array(0);
                    var9 = 0;
                    var11 = var4;
                    var9 = arraySpread(var11, var10, var9);
                    var11 = var4;
                    var10 = var7;
                    var3 = arraySpread(var11, var10, var9);
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var7.bind(var3)(var2);
                    var2 = var2.ICYMI_PAGE_SIZE;
                    var2 = var6 + var2;
                    var2 = var5.bind(var3)(var4, var6, var2);
                    SaveGenerator(address=125);
case 25:
                    return var2;
case 26:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                    return var3;
case 27:
                    return var2;
case 23:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot18 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function _regenerateFeedAndClearReadStates() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var8 = undefined;
                    var _closure4_slot1 = var8;
                    var _closure4_slot2 = var8;
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var5 = 22;
                    var3 = var2[var5];
                    var6 = var6.bind(var8)(var3);
                    var3 = 21;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var2 = var6.bind(var8)(var3, var2);
                    SaveGenerator(address=74);
case 31:
                    return var2;
case 32:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    var3 = var2.ack;
                    _closure4_slot1 = var3;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var5 = var3[var5];
                    var6 = var6.bind(var8)(var5);
                    var5 = 23;
                    var5 = var3[var5];
                    var3 = var3.paths;
                    var3 = var6.bind(var8)(var5, var3);
                    SaveGenerator(address=132);
case 35:
                    return var3;
case 36:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                    var5 = var3.AnalyticsObjectTypes;
                    _closure4_slot2 = var5;
                    var6 = _closure1_slot10;
                    var5 = var6.getDehydratedItems;
                    var6 = var5.bind(var6)();
                    var5 = var6.forEach;
                    var4 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var2 = arg1;
                            var5 = var2.type;
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 10;
                            var4 = var4[var1];
                            var1 = undefined;
                            var4 = var6.bind(var1)(var4);
                            var4 = var4.ICYMIItemTypes;
                            var4 = var4.MESSAGE;
                            var4 = var5 === var4;
                            if(!var4) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                            var5 = var2.data;
                            var6 = var5.channel_type;
                            var5 = _closure1_slot12;
                            var5 = var5.GUILD_ANNOUNCEMENT;
                            var4 = var6 === var5;
case 39:
                            if(!var4) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 13;
                            var5 = var7[var5];
                            var8 = var6.bind(var1)(var5);
                            var7 = var8.compare;
                            var9 = _closure1_slot9;
                            var6 = var9.ackMessageId;
                            var5 = var2.data;
                            var5 = var5.channel_id;
                            var6 = var6.bind(var9)(var5);
                            var5 = var2.data;
                            var5 = var5.message_id;
                            var6 = var7.bind(var8)(var6, var5);
                            var5 = 0;
                            var4 = var6 >= var5;
case 41:
                            if(!var4) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                            var6 = _closure4_slot1;
                            var4 = var2.data;
                            var5 = var4.channel_id;
                            var4 = {};
                            var8 = _closure4_slot0;
                            var4['object'] = var8;
                            var7 = _closure4_slot2;
                            var7 = var7.ACK_SEMI_AUTOMATIC;
                            var4['objectType'] = var7;
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var3 = 13;
                            var3 = var8[var3];
                            var7 = var7.bind(var1)(var3);
                            var3 = var7.atPreviousMillisecond;
                            var2 = var2.data;
                            var2 = var2.message_id;
                            var10 = var3.bind(var7)(var2);
                            var15 = undefined;
                            var14 = var5;
                            var13 = var4;
                            var12 = true;
                            var11 = true;
                            var2 = var15[var6](var14, var13, var12, var11, var10, var9);
case 43:
                            return var1;
                        }
                    };
                    var4 = var5.bind(var6)(var4);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var11 = 11;
                    var4 = var4[var11];
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.clearReadStates;
                    var4 = var4.bind(var5)();
                    SaveGenerator(address=216);
case 45:
                    return var4;
case 46:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 47; continue _fun0004 }
case 48:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var11];
                    var7 = var6.bind(var8)(var5);
                    var6 = var7.fetchDehydrated;
                    var5 = {'isReloading': true, 'forceRefresh': true};
                    var5 = var6.bind(var7)(var5);
                    SaveGenerator(address=271);
case 49:
                    return var5;
case 50:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 51; continue _fun0004 }
case 52:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var11];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.reloadICYMITab;
                    var6 = var6.bind(var7)();
                    SaveGenerator(address=308);
case 53:
                    return var6;
case 54:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0004_ip = 55; continue _fun0004 }
case 22:
                    var10 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var11];
                    var10 = var10.bind(var8)(var7);
                    var7 = var10.getGuildChannelScores;
                    var7 = var7.bind(var10)();
                    SaveGenerator(address=345);
case 56:
                    return var7;
case 57:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                    if(var10) { _fun0004_ip = 58; continue _fun0004 }
case 59:
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var11];
                    var10 = var10.bind(var8)(var9);
                    var9 = var10.getRecommendedGuilds;
                    var9 = var9.bind(var10)();
                    return var8;
case 58:
                    return var7;
case 55:
                    return var6;
case 51:
                    return var5;
case 47:
                    return var4;
case 37:
                    return var3;
case 33:
                    return var2;
case 29:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot19 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var5);
    var14 = 0;
    var5 = var9[var14];
    var1 = undefined;
    var5 = var7.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var13 = 1;
    var5 = var9[var13];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var12 = 2;
    var5 = var9[var12];
    var5 = var8.bind(var1)(var5);
    var5 = var5.ThreadChannelRecord;
    var _closure1_slot5 = var5;
    var11 = 3;
    var5 = var9[var11];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var10 = 4;
    var5 = var9[var10];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var9[var5];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var9[var5];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var9[var5];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var9[var5];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var7 = var5.ChannelTypes;
    var _closure1_slot12 = var7;
    var5 = var5.GuildNSFWContentLevel;
    var _closure1_slot13 = var5;
    var5 = {};
    var5['UNKNOWN'] = var14;
    var7 = 'UNKNOWN';
    var5[var14] = var7;
    var5['DEFAULT'] = var13;
    var7 = 'DEFAULT';
    var5[var13] = var7;
    var5['MORE'] = var12;
    var7 = 'MORE';
    var5[var12] = var7;
    var5['LESS'] = var11;
    var7 = 'LESS';
    var5[var11] = var7;
    var5['MUTED'] = var10;
    var7 = 'MUTED';
    var5[var10] = var7;
    var _closure1_slot14 = var5;
    var7 = 24;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/icymi/ICYMIUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['generateHydrationId'] = var6;
    var3['ICYMICustomScore'] = var5;
    var5 = function isGuildItem(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var4 = var3.type;
            var7 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 10;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var7.bind(var5)(var1);
            var1 = var1.ICYMIItemTypes;
            var1 = var1.MESSAGE;
            var1 = var4 === var1;
            if(var1) { _fun0006_ip = 60; continue _fun0006 }
case 40:
            var3 = var3.type;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ICYMIItemTypes;
            var2 = var2.GUILD_EVENT;
            var1 = var3 === var2;
case 60:
            return var1;
        }
    };
    var3['isGuildItem'] = var5;
    var5 = function isChannelCustomScoreEligible(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg1;
            var2 = var4.type;
            var1 = _closure1_slot12;
            var1 = var1.GUILD_FORUM;
            var1 = var2 === var1;
            if(var1) { _fun0007_ip = 31; continue _fun0007 }
case 61:
            var5 = var4.type;
            var2 = _closure1_slot12;
            var2 = var2.GUILD_ANNOUNCEMENT;
            var2 = var5 === var2;
            if(var2) { _fun0007_ip = 62; continue _fun0007 }
case 63:
            var4 = var4.type;
            var3 = _closure1_slot12;
            var3 = var3.GUILD_TEXT;
            var2 = var4 === var3;
case 62:
            var1 = var2;
case 31:
            return var1;
        }
    };
    var3['isChannelCustomScoreEligible'] = var5;
    var5 = function numberToCustomScore(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var1 = -1.5;
            if(!(!(var2 < var1))) { _fun0008_ip = 31; continue _fun0008 }
case 64:
            var1 = 0;
            if(!(!(var2 < var1))) { _fun0008_ip = 65; continue _fun0008 }
case 66:
            if(!(!(var2 > var1))) { _fun0008_ip = 67; continue _fun0008 }
case 68:
            var1 = _closure1_slot14;
            var1 = var1.DEFAULT;
            _fun0008_ip = 6; continue _fun0008;
case 67:
            var2 = _closure1_slot14;
            var1 = var2.MORE;
case 6:
            _fun0008_ip = 69; continue _fun0008;
case 65:
            var2 = _closure1_slot14;
            var1 = var2.LESS;
case 69:
            _fun0008_ip = 70; continue _fun0008;
case 31:
            var2 = _closure1_slot14;
            var1 = var2.MUTED;
case 70:
            return var1;
        }
    };
    var3['numberToCustomScore'] = var5;
    var5 = function customScoreToNumber(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot14;
            var3 = var3.MORE;
            if(!(var3 !== var2)) { _fun0009_ip = 71; continue _fun0009 }
case 72:
            var3 = _closure1_slot14;
            var3 = var3.LESS;
            if(!(var3 !== var2)) { _fun0009_ip = 73; continue _fun0009 }
case 74:
            var1 = _closure1_slot14;
            var1 = var1.MUTED;
            if(!(var1 !== var2)) { _fun0009_ip = 40; continue _fun0009 }
case 75:
            var1 = 0;
            return var1;
case 40:
            var1 = -2;
            return var1;
case 73:
            var1 = -1;
            return var1;
case 71:
            var1 = 1;
            return var1;
        }
    };
    var3['customScoreToNumber'] = var5;
    var3['hydrateItems'] = var4;
    var4 = function hydrateNextPage() {
        var1 = undefined;
        var4 = _closure1_slot18;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['hydrateNextPage'] = var4;
    var4 = function createGravityMessageFromServer(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var8 = arg2;
            var9 = var1;
            var3 = copyDataProperties(var9, var8);
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 12;
            var5 = var5[var3];
            var3 = undefined;
            var7 = var6.bind(var3)(var5);
            var6 = var7.createMessageRecord;
            var5 = var2.message;
            var6 = var6.bind(var7)(var5);
            var5 = 'message';
            var1[4] = var6;
            var6 = var2.thread_channel;
            var5 = null;
            var5 = var5 != var6;
            if(!var5) { _fun0010_ip = 76; continue _fun0010 }
case 42:
            var6 = _closure1_slot5;
            var5 = var6.fromServer;
            var4 = var2.thread_channel;
            var2 = var2.guild_id;
            var3 = var5.bind(var6)(var4, var2);
case 76:
            var2 = 'threadChannel';
            var1[1] = var3;
            return var1;
        }
    };
    var3['createGravityMessageFromServer'] = var4;
    var4 = function isItemUnreadInChannel(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = _closure1_slot9;
            var3 = var4.getTrackedAckMessageId;
            var1 = arg1;
            var5 = var3.bind(var4)(var1);
            var1 = null;
            var1 = var1 == var5;
            if(var1) { _fun0011_ip = 60; continue _fun0011 }
case 77:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 13;
            var3 = var7[var2];
            var4 = undefined;
            var9 = var6.bind(var4)(var3);
            var8 = var9.extractTimestamp;
            var3 = arg2;
            var3 = var8.bind(var9)(var3);
            var2 = var7[var2];
            var4 = var6.bind(var4)(var2);
            var2 = var4.extractTimestamp;
            var2 = var2.bind(var4)(var5);
            var1 = var3 > var2;
case 60:
            return var1;
        }
    };
    var3['isItemUnreadInChannel'] = var4;
    var4 = function useGravityMessage(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 14;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot8;
        var3 = new Array(2);
        var3[0] = var7;
        var2 = _closure1_slot10;
        var3[1] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var6 = _closure1_slot8;
                var5 = var6.getMessage;
                var1 = _closure2_slot0;
                var3 = var1.getChannelId;
                var3 = var3.bind(var1)();
                var1 = var1.id;
                var1 = var5.bind(var6)(var3, var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0012_ip = 78; continue _fun0012 }
case 79:
                var6 = _closure1_slot10;
                var5 = var6.getHydratedItem;
                var4 = _closure2_slot0;
                var4 = var4.id;
                var5 = var5.bind(var6)(var4);
                var6 = var3 == var5;
                var4 = undefined;
                if(var6) { _fun0012_ip = 70; continue _fun0012 }
case 42:
                var4 = var5.message;
case 70:
                var1 = var4;
case 78:
                if(!(var3 == var1)) { _fun0012_ip = 80; continue _fun0012 }
case 81:
                var1 = _closure2_slot0;
case 80:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useGravityMessage'] = var4;
    var4 = function useGravityMessageItem(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var4 = 14;
        var5 = var5[var4];
        var4 = undefined;
        var5 = var6.bind(var4)(var5);
        var4 = var5.useStateFromStores;
        var6 = _closure1_slot10;
        var3 = new Array(1);
        var3[0] = var6;
        var6 = var2.id;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var3 = _closure1_slot10;
            var2 = var3.getHydratedItem;
            var1 = _closure2_slot0;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useGravityMessageItem'] = var4;
    var4 = function useICYMIMessage(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 14;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var8 = _closure1_slot8;
        var3 = new Array(2);
        var3[0] = var8;
        var2 = _closure1_slot10;
        var3[1] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var1 = _closure2_slot1;
                var3 = null;
                var2 = var3 != var1;
                var1 = null;
                if(!var2) { _fun0013_ip = 78; continue _fun0013 }
case 82:
                var8 = _closure1_slot8;
                var7 = var8.getMessage;
                var6 = _closure2_slot0;
                var2 = _closure2_slot1;
                var2 = var7.bind(var8)(var6, var2);
                if(!(var3 == var2)) { _fun0013_ip = 70; continue _fun0013 }
case 7:
                var6 = _closure1_slot10;
                var5 = var6.getHydratedItem;
                var4 = _closure2_slot1;
                var4 = var5.bind(var6)(var4);
                var5 = var3 == var4;
                var3 = undefined;
                if(var5) { _fun0013_ip = 83; continue _fun0013 }
case 39:
                var3 = var4.message;
case 83:
                var2 = var3;
case 70:
                var1 = var2;
case 78:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useICYMIMessage'] = var4;
    var4 = function icymiEnabled(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 15;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getICYMIEnabled;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['icymiEnabled'] = var4;
    var4 = function customStatusToContentInventoryEntry(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.id;
            var1['id'] = var3;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 10;
            var3 = var7[var3];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var3 = var3.ICYMIItemTypes;
            var3 = var3.CUSTOM_STATUS;
            var1['type'] = var3;
            var3 = {};
            var4 = var2.id;
            var3['id'] = var4;
            var4 = var2.data;
            var4 = var4.user_id;
            var3['author_id'] = var4;
            var4 = 16;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.ContentInventoryAuthorType;
            var4 = var4.USER;
            var3['author_type'] = var4;
            var4 = new Array(0);
            var3['traits'] = var4;
            var4 = new Array(0);
            var3['participants'] = var4;
            var4 = 17;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.ContentInventoryEntryType;
            var4 = var4.CUSTOM_STATUS;
            var3['content_type'] = var4;
            var4 = {};
            var5 = 'custom_status_extra';
            var4['type'] = var5;
            var5 = var2.data;
            var6 = var5.text;
            var5 = null;
            var7 = var5 != var6;
            var5 = '';
            if(!var7) { _fun0014_ip = 84; continue _fun0014 }
case 85:
            var5 = var6;
case 84:
            var4['status'] = var5;
            var5 = var2.data;
            var5 = var5.emoji_id;
            var4['emoji_id'] = var5;
            var5 = var2.data;
            var5 = var5.emoji_name;
            var4['emoji_name'] = var5;
            var5 = var2.data;
            var5 = var5.emoji_animated;
            var4['emoji_animated'] = var5;
            var5 = var2.data;
            var5 = var5.attachments;
            var4['attachments'] = var5;
            var3['extra'] = var4;
            var1['activity'] = var3;
            var3 = var2.score;
            var1['score'] = var3;
            var2 = var2.score_components;
            var1['score_components'] = var2;
            return var1;
        }
    };
    var3['customStatusToContentInventoryEntry'] = var4;
    var4 = function compareGravityUnreadIds(arg1, arg2, arg3) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var7 = arg1;
            var6 = arg2;
            var2 = arg3;
            var4 = _closure1_slot11;
            var3 = var4.getReadTimestamp;
            var5 = var3.bind(var4)(var7);
            var3 = null;
            if(!(var3 == var5)) { _fun0015_ip = 7; continue _fun0015 }
case 86:
            var8 = var3 == var2;
            var4 = undefined;
            if(var8) { _fun0015_ip = 87; continue _fun0015 }
case 67:
            var4 = var2[var7];
case 87:
            var5 = var4;
case 7:
            var4 = _closure1_slot11;
            var1 = var4.getReadTimestamp;
            var4 = var1.bind(var4)(var6);
            if(!(var3 == var4)) { _fun0015_ip = 88; continue _fun0015 }
case 71:
            var7 = var3 == var2;
            var1 = undefined;
            if(var7) { _fun0015_ip = 9; continue _fun0015 }
case 39:
            var1 = var2[var6];
case 9:
            var4 = var1;
case 88:
            if(!(var3 == var5)) { _fun0015_ip = 89; continue _fun0015 }
case 78:
            var2 = var3 == var4;
            var1 = 0;
            if(var2) { _fun0015_ip = 35; continue _fun0015 }
case 89:
            var6 = var3 == var5;
            var2 = -1;
            if(var6) { _fun0015_ip = 90; continue _fun0015 }
case 91:
            var6 = var3 == var4;
            var3 = 1;
            if(var6) { _fun0015_ip = 92; continue _fun0015 }
case 93:
            var3 = var4 - var5;
case 92:
            var2 = var3;
case 90:
            var1 = var2;
case 35:
            return var1;
        }
    };
    var3['compareGravityUnreadIds'] = var4;
    var4 = function getViewableFeedItemsArray(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var11 = arg1;
            var3 = _closure1_slot10;
            var2 = var3.getUnreadDisplayItems;
            var17 = var2.bind(var3)();
            var4 = new Array(0);
            var3 = 0;
            var18 = var4;
            var16 = 0;
            var16 = arraySpread(var18, var17, var16);
            var6 = _closure1_slot10;
            var2 = var6.getReadDisplayItems;
            var17 = var2.bind(var6)();
            var18 = var4;
            var2 = arraySpread(var18, var17, var16);
            var6 = null;
            var _closure2_slot0 = var6;
            var2 = var11.length;
            var5 = 1;
            var9 = var2 - var5;
            var8 = 18;
            var7 = undefined;
            var2 = null;
            if(!(var9 >= var3)) { _fun0016_ip = 94; continue _fun0016 }
case 8:
            var12 = var11[var9];
            if(!(var6 != var12)) { _fun0016_ip = 95; continue _fun0016 }
case 96:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var14.bind(var7)(var13);
            var15 = var13.NON_ELIGIBLE_SCROLL_ITEMS;
            var14 = var15.has;
            var13 = var12.item;
            var13 = var13.data;
            var13 = var13.kind;
            var13 = var14.bind(var15)(var13);
            if(var13) { _fun0016_ip = 95; continue _fun0016 }
case 97:
            var12 = var12.item;
            var12 = var12.id;
            _closure2_slot0 = var12;
            var2 = var12;
            _fun0016_ip = 94; continue _fun0016;
case 95:
            var9 = var9 - 1;
            var2 = null;
            if(var9 >= var3) { _fun0016_ip = 8; continue _fun0016 }
case 94:
            if(!(var6 != var2)) { _fun0016_ip = 48; continue _fun0016 }
case 98:
            var2 = var4.findIndex;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var4)(var1);
            if(!(!(var1 < var3))) { _fun0016_ip = 99; continue _fun0016 }
case 100:
            var2 = var4.slice;
            var1 = var1 + var5;
            var1 = var2.bind(var4)(var3, var1);
            _fun0016_ip = 101; continue _fun0016;
case 99:
            var1 = new Array(0);
case 101:
            return var1;
case 48:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['getViewableFeedItemsArray'] = var4;
    var4 = function isItemNSFW(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var2 = var1.data;
            var3 = var2.kind;
            var2 = 'message';
            if(!(var2 !== var3)) { _fun0017_ip = 102; continue _fun0017 }
case 3:
            var2 = 'forumThread';
            if(!(var2 !== var3)) { _fun0017_ip = 81; continue _fun0017 }
case 103:
            var2 = 'guildEvent';
            if(!(var2 !== var3)) { _fun0017_ip = 104; continue _fun0017 }
case 105:
            var2 = false;
            return var2;
case 104:
            var4 = _closure1_slot4;
            var3 = var4.getGuildScheduledEvent;
            var2 = var1.data;
            var2 = var2.eventId;
            var2 = var3.bind(var4)(var2);
            var3 = null;
            var3 = var3 == var2;
            var7 = undefined;
            if(var3) { _fun0017_ip = 78; continue _fun0017 }
case 34:
            var7 = var2.guild_id;
case 78:
            var4 = undefined;
            _fun0017_ip = 106; continue _fun0017;
case 81:
            var2 = var1.data;
            var2 = var2.threadChannel;
            var4 = var2.id;
            var7 = undefined;
            _fun0017_ip = 106; continue _fun0017;
case 102:
            var1 = var1.data;
            var1 = var1.message;
            var4 = var1.channel_id;
            var7 = undefined;
case 106:
            var3 = _closure1_slot6;
            var1 = var3.getChannel;
            var4 = var1.bind(var3)(var4);
            var5 = null;
            if(!(var5 != var4)) { _fun0017_ip = 107; continue _fun0017 }
case 108:
            var1 = var4.nsfw;
            if(var1) { _fun0017_ip = 49; continue _fun0017 }
case 107:
            var6 = var5 == var4;
            var1 = undefined;
            if(var6) { _fun0017_ip = 109; continue _fun0017 }
case 110:
            var1 = var4.guild_id;
case 109:
            if(!(var5 != var1)) { _fun0017_ip = 111; continue _fun0017 }
case 112:
            var7 = var1;
case 111:
            var1 = var5 != var7;
            var4 = null;
            if(!var1) { _fun0017_ip = 113; continue _fun0017 }
case 114:
            var6 = _closure1_slot7;
            var1 = var6.getGuild;
            var4 = var1.bind(var6)(var7);
case 113:
            var1 = var5 == var4;
            var6 = undefined;
            if(var1) { _fun0017_ip = 115; continue _fun0017 }
case 116:
            var6 = var4.nsfwLevel;
case 115:
            var1 = _closure1_slot13;
            var1 = var1.EXPLICIT;
            var1 = var6 === var1;
            if(var1) { _fun0017_ip = 117; continue _fun0017 }
case 118:
            var5 = var5 == var4;
            var3 = undefined;
            if(var5) { _fun0017_ip = 119; continue _fun0017 }
case 19:
            var3 = var4.nsfwLevel;
case 119:
            var2 = _closure1_slot13;
            var2 = var2.AGE_RESTRICTED;
            var1 = var3 === var2;
case 117:
            return var1;
case 49:
            var1 = true;
            return var1;
        }
    };
    var3['isItemNSFW'] = var4;
    var4 = function itemToType(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var6 = arg1;
            var1 = var6.data;
            var7 = var1.kind;
            var1 = 'end';
            if(!(var1 !== var7)) { _fun0018_ip = 120; continue _fun0018 }
case 121:
            var2 = 'loading';
            if(!(var2 !== var7)) { _fun0018_ip = 122; continue _fun0018 }
case 123:
            var3 = 'bottomLoading';
            if(!(var3 !== var7)) { _fun0018_ip = 124; continue _fun0018 }
case 75:
            var5 = 'message';
            if(!(var5 !== var7)) { _fun0018_ip = 99; continue _fun0018 }
case 125:
            var4 = 'guildEvent';
            if(!(var4 !== var7)) { _fun0018_ip = 126; continue _fun0018 }
case 69:
            var4 = 'contentInventory';
            if(!(var4 !== var7)) { _fun0018_ip = 127; continue _fun0018 }
case 42:
            var4 = 'recommendedGuilds';
            if(!(var4 !== var7)) { _fun0018_ip = 36; continue _fun0018 }
case 60:
            var4 = 'forumThread';
            if(!(var4 !== var7)) { _fun0018_ip = 92; continue _fun0018 }
case 128:
            var4 = 'icymiHeader';
            if(!(var4 !== var7)) { _fun0018_ip = 129; continue _fun0018 }
case 91:
            var4 = 'unknown';
            return var4;
case 129:
            var4 = 'icymi_header';
            return var4;
case 92:
            var4 = 'forum_thread';
            return var4;
case 36:
            var4 = 'recommended_guilds';
            return var4;
case 127:
            var4 = var6.data;
            var4 = var4.content;
            var8 = var4.content_type;
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 17;
            var7 = var7[var4];
            var4 = undefined;
            var4 = var9.bind(var4)(var7);
            var4 = var4.ContentInventoryEntryType;
            var7 = var4.CUSTOM_STATUS;
            var4 = 'hotwheels_gaming_activity';
            if(!(var8 === var7)) { _fun0018_ip = 130; continue _fun0018 }
case 131:
            var4 = 'hotwheels_custom_status';
case 130:
            return var4;
case 126:
            var4 = 'guild_event';
            return var4;
case 99:
            var8 = var6.channelType;
            var4 = _closure1_slot12;
            var7 = var4.GUILD_ANNOUNCEMENT;
            var4 = 'announcement';
            if(!(var8 !== var7)) { _fun0018_ip = 132; continue _fun0018 }
case 133:
            var6 = var6.data;
            var8 = var6.messageContext;
            var7 = null;
            var9 = var7 == var8;
            var6 = undefined;
            if(var9) { _fun0018_ip = 134; continue _fun0018 }
case 135:
            var6 = var8.external_content_application_id;
case 134:
            var6 = var7 != var6;
            if(!var6) { _fun0018_ip = 136; continue _fun0018 }
case 137:
            var5 = 'game_message';
case 136:
            var4 = var5;
case 132:
            return var4;
case 124:
            return var3;
case 122:
            return var2;
case 120:
            return var1;
        }
    };
    var3['itemToType'] = var4;
    var4 = function determineContentType(arg1, arg2) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var3 = arg1;
            var4 = arg2;
            var6 = var3.type;
            var5 = _closure1_slot12;
            var5 = var5.GUILD_ANNOUNCEMENT;
            if(!(var6 !== var5)) { _fun0019_ip = 138; continue _fun0019 }
case 86:
            var5 = var3.type;
            var3 = _closure1_slot12;
            var3 = var3.GUILD_FORUM;
            if(!(var5 !== var3)) { _fun0019_ip = 139; continue _fun0019 }
case 6:
            var5 = var4.reactions;
            var3 = null;
            if(!(var3 != var5)) { _fun0019_ip = 106; continue _fun0019 }
case 140:
            var6 = var4.reactions;
            var5 = var6.map;
            var3 = function(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var4 = arg1;
                    var1 = var4.count_details;
                    var5 = null;
                    var2 = var5 == var1;
                    var1 = 0;
                    if(var2) { _fun0020_ip = 31; continue _fun0020 }
case 72:
                    var2 = var4.count_details;
                    var6 = var2.burst;
                    var7 = var5 != var6;
                    var2 = 0;
                    if(!var7) { _fun0020_ip = 141; continue _fun0020 }
case 142:
                    var2 = var6;
case 141:
                    var4 = var4.count_details;
                    var4 = var4.normal;
                    var5 = var5 != var4;
                    var3 = 0;
                    if(!var5) { _fun0020_ip = 71; continue _fun0020 }
case 143:
                    var3 = var4;
case 71:
                    var1 = var2 + var3;
case 31:
                    return var1;
                }
            };
            var5 = var5.bind(var6)(var3);
            var6 = var5.length;
            var3 = 0;
            if(!(var3 !== var6)) { _fun0019_ip = 106; continue _fun0019 }
case 144:
            var3 = var5.reduce;
            var2 = function(arg1, arg2) {
                var2 = arg1;
                var1 = arg2;
                var1 = var2 + var1;
                return var1;
            };
            var2 = var3.bind(var5)(var2);
            var3 = 10;
            if(!(!(var2 > var3))) { _fun0019_ip = 145; continue _fun0019 }
case 106:
            var2 = var4.attachments;
            var2 = var2.length;
            var10 = 0;
            if(!(!(var2 > var10))) { _fun0019_ip = 146; continue _fun0019 }
case 147:
            var2 = var4.embeds;
            var2 = var2.length;
            if(!(!(var2 > var10))) { _fun0019_ip = 148; continue _fun0019 }
case 107:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 10;
            var5 = var5[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var5);
            var2 = var2.ContentType;
            var2 = var2.INTERESTING;
            _fun0019_ip = 149; continue _fun0019;
case 148:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 10;
            var6 = var6[var5];
            var5 = undefined;
            var5 = var7.bind(var5)(var6);
            var5 = var5.ContentType;
            var2 = var5.LINK;
case 149:
            _fun0019_ip = 150; continue _fun0019;
case 146:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 19;
            var6 = var6[var5];
            var7 = undefined;
            var9 = var8.bind(var7)(var6);
            var8 = var9.isValidImageAttachment;
            var6 = var4.attachments;
            var6 = var6[var10];
            var9 = var8.bind(var9)(var6);
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            if(var9) { _fun0019_ip = 151; continue _fun0019 }
case 132:
            var5 = var8[var5];
            var9 = var6.bind(var7)(var5);
            var5 = var9.isValidVideoAttachment;
            var4 = var4.attachments;
            var4 = var4[var10];
            var4 = var5.bind(var9)(var4);
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 10;
            var5 = var10[var5];
            var5 = var9.bind(var7)(var5);
            var5 = var5.ContentType;
            if(var4) { _fun0019_ip = 152; continue _fun0019 }
case 153:
            var4 = var5.FILE;
            _fun0019_ip = 154; continue _fun0019;
case 152:
            var4 = var5.VIDEO;
case 154:
            _fun0019_ip = 155; continue _fun0019;
case 151:
            var5 = 10;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.ContentType;
            var4 = var5.IMAGE;
case 155:
            var2 = var4;
case 150:
            return var2;
case 145:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = var2[var3];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.ContentType;
            var2 = var2.POPULAR_MESSAGE;
            return var2;
case 139:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 10;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.ContentType;
            var2 = var2.FORUM_POST;
            return var2;
case 138:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.ContentType;
            var1 = var1.ANNOUNCEMENT;
            return var1;
        }
    };
    var3['determineContentType'] = var4;
    var4 = function contentTypeToText(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var4 = arg1;
            var2 = arguments[1];
            var5 = undefined;
            if(!(var2 === var5)) { _fun0021_ip = 156; continue _fun0021 }
case 30:
            var2 = false;
case 156:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 10;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.POPULAR_MESSAGE;
            if(!(var3 !== var4)) { _fun0021_ip = 157; continue _fun0021 }
case 158:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.IMAGE;
            if(!(var3 !== var4)) { _fun0021_ip = 159; continue _fun0021 }
case 81:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.VIDEO;
            if(!(var3 !== var4)) { _fun0021_ip = 160; continue _fun0021 }
case 161:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.LINK;
            if(!(var3 !== var4)) { _fun0021_ip = 162; continue _fun0021 }
case 163:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.THREAD;
            if(!(var3 !== var4)) { _fun0021_ip = 164; continue _fun0021 }
case 165:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.FORUM_POST;
            if(!(var3 !== var4)) { _fun0021_ip = 166; continue _fun0021 }
case 146:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.CHANGED_STATUS;
            if(!(var3 !== var4)) { _fun0021_ip = 167; continue _fun0021 }
case 168:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.INTERESTING;
            if(!(var3 !== var4)) { _fun0021_ip = 169; continue _fun0021 }
case 54:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.ANNOUNCEMENT;
            if(!(var3 !== var4)) { _fun0021_ip = 170; continue _fun0021 }
case 171:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ContentType;
            var3 = var3.FILE;
            if(!(var3 !== var4)) { _fun0021_ip = 172; continue _fun0021 }
case 173:
            return var5;
case 172:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 20;
            var4 = var8[var3];
            var4 = var7.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.pYrnTY;
            var3 = var4.bind(var6)(var3);
            return var3;
case 170:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 20;
            var4 = var8[var3];
            var4 = var7.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.t;
            if(var2) { _fun0021_ip = 174; continue _fun0021 }
case 175:
            var2 = var3["2ih63V"];
            var2 = var4.bind(var6)(var2);
            _fun0021_ip = 176; continue _fun0021;
case 174:
            var3 = var3.E0MW8I;
            var2 = var4.bind(var6)(var3);
case 176:
            return var2;
case 169:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 20;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.TahE/i;
            var2 = var3.bind(var4)(var2);
            return var2;
case 167:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 20;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.TGrUmi;
            var2 = var3.bind(var4)(var2);
            return var2;
case 166:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 20;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Q9/6BS;
            var2 = var3.bind(var4)(var2);
            return var2;
case 164:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 20;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.DwLrLK;
            var2 = var3.bind(var4)(var2);
            return var2;
case 162:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 20;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.oj5yvD;
            var2 = var3.bind(var4)(var2);
            return var2;
case 160:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 20;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.swhcPM;
            var2 = var3.bind(var4)(var2);
            return var2;
case 159:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 20;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.gmOWAo;
            var2 = var3.bind(var4)(var2);
            return var2;
case 157:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 20;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.H/2+cl;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['contentTypeToText'] = var4;
    var2 = function regenerateFeedAndClearReadStates() {
        var1 = undefined;
        var4 = _closure1_slot19;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['regenerateFeedAndClearReadStates'] = var2;
    return var1;
})();