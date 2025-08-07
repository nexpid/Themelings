// app/actions/GuildActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
    var1 = function _joinGuild() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    var4 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 1376; continue _fun0001 }
 18:
                    var7 = var2;
                    var _closure4_slot0 = var2;
                    var5 = undefined;
                    if(!(var4 === var5)) { _fun0001_ip = 33; continue _fun0001 }
 31:
                    var4 = {};
 33:
                    var21 = undefined;
                    var _closure4_slot1 = var5;
                    var22 = undefined;
                    var _closure4_slot2 = var5;
                    var23 = undefined;
                    var10 = undefined;
                    var _closure4_slot3 = var5;
                    var19 = undefined;
                    var15 = undefined;
                    var12 = undefined;
                    var8 = undefined;
                    var9 = undefined;
                    var14 = undefined;
                    SaveGenerator(address=69);
 67:
                    return var5;
 69:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=10);
                    if(var11) { _fun0001_ip = 1373; continue _fun0001 }
 78:
                    var11 = var4.source;
                    var21 = var11;
                    _closure4_slot1 = var11;
                    var11 = var4.loadId;
                    var22 = var11;
                    _closure4_slot2 = var11;
                    var23 = var4.lurkLocation;
                    var13 = var4.lurker;
                    var11 = null;
                    var4 = var11 != var13;
                    if(!var4) { _fun0001_ip = 127; continue _fun0001 }
 124:
                    var4 = var13;
 127:
                    var10 = var4;
                    _closure4_slot3 = var4;
                    var16 = _closure1_slot14;
                    var13 = var16.getCurrentUser;
                    var18 = var13.bind(var16)();
                    var16 = var11 == var18;
                    var13 = undefined;
                    if(var16) { _fun0001_ip = 180; continue _fun0001 }
 159:
                    var17 = var18.hasFlag;
                    var16 = _closure1_slot17;
                    var16 = var16.QUARANTINED;
                    var13 = var17.bind(var18)(var16);
 180:
                    if(!(var11 != var13)) { _fun0001_ip = 190; continue _fun0001 }
 184:
                    if(var13) { _fun0001_ip = 1313; continue _fun0001 }
 190:
                    var16 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var18 = 13;
                    var13 = var13[var18];
                    var17 = var16.bind(var5)(var13);
                    var16 = var17.wait;
                    var13 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'GUILD_JOIN';
                        var1['type'] = var4;
                        var5 = _closure4_slot0;
                        var1['guildId'] = var5;
                        var5 = _closure4_slot3;
                        var1['lurker'] = var5;
                        var5 = _closure4_slot1;
                        var1['source'] = var5;
                        var4 = _closure4_slot2;
                        var1['loadId'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var13 = var16.bind(var17)(var13);
 226: // try_start_0
                    var16 = _closure1_slot13;
                    var13 = var16.getGuildId;
                    var17 = var13.bind(var16)();
                    var16 = var7;
                    var13 = null;
                    if(!(var16 === var17)) { _fun0001_ip = 293; continue _fun0001 }
 249:
                    var20 = _closure1_slot11;
                    var17 = var20.getGuild;
                    var16 = var7;
                    var16 = var17.bind(var20)(var16);
                    var16 = var11 != var16;
                    var13 = null;
                    if(!var16) { _fun0001_ip = 293; continue _fun0001 }
 275:
                    var20 = _closure1_slot12;
                    var17 = var20.getChannelId;
                    var16 = var7;
                    var13 = var17.bind(var20)(var16);
 293:
                    var19 = var13;
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot3;
                    var13 = 15;
                    var13 = var17[var13];
                    var13 = var16.bind(var5)(var13);
                    var17 = var13.HTTP;
                    var16 = var17.put;
                    var13 = {};
                    var25 = _closure1_slot16;
                    var24 = var25.GUILD_JOIN;
                    var20 = var7;
                    var20 = var24.bind(var25)(var20);
                    var13['url'] = var20;
                    var20 = {};
                    var25 = var10;
                    var20['lurker'] = var25;
                    var24 = null;
                    if(!var25) { _fun0001_ip = 380; continue _fun0001 }
 366:
                    var26 = _closure1_slot8;
                    var25 = var26.getSessionId;
                    var24 = var25.bind(var26)();
 380:
                    var20['session_id'] = var24;
                    var20['recommendation_load_id'] = var22;
                    var24 = var10;
                    var22 = null;
                    if(!var24) { _fun0001_ip = 415; continue _fun0001 }
 400:
                    var24 = var23;
                    var24 = var11 != var24;
                    var22 = null;
                    if(!var24) { _fun0001_ip = 415; continue _fun0001 }
 412:
                    var22 = var23;
 415:
                    var20['location'] = var22;
                    var13['query'] = var20;
                    var20 = {};
                    var20['source'] = var21;
                    var13['context'] = var20;
                    var20 = true;
                    var13['oldFormErrors'] = var20;
                    var20 = {};
                    var13['body'] = var20;
                    var20 = false;
                    var13['rejectWithError'] = var20;
                    var13 = var16.bind(var17)(var13);
                    SaveGenerator(address=461);
 459:
                    return var13;
 461:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=15);
                    if(var16) { _fun0001_ip = 929; continue _fun0001 }
 470:
                    var15 = var13;
                    var16 = var13.body;
                    var16 = var16.join_request;
                    if(!(var11 != var16)) { _fun0001_ip = 553; continue _fun0001 }
 488:
                    var17 = _closure1_slot1;
                    var16 = _closure1_slot3;
                    var16 = var16[var18];
                    var20 = var17.bind(var5)(var16);
                    var17 = var20.dispatch;
                    var16 = {};
                    var21 = 'USER_GUILD_JOIN_REQUEST_UPDATE';
                    var16['type'] = var21;
                    var21 = var7;
                    var16['guildId'] = var21;
                    var21 = var15;
                    var21 = var21.body;
                    var21 = var21.join_request;
                    var16['request'] = var21;
                    var16 = var17.bind(var20)(var16);
 553:
                    var20 = _closure1_slot11;
                    var17 = var20.getGuild;
                    var16 = var7;
                    var16 = var17.bind(var20)(var16);
                    if(!(var11 == var16)) { _fun0001_ip = 596; continue _fun0001 }
 574:
                    var16 = var15;
                    var16 = var16.body;
                    var16 = var16.show_verification_form;
                    if(var16) { _fun0001_ip = 877; continue _fun0001 }
 596:
                    var16 = var15;
                    var16 = var16.body;
                    var16 = var16.welcome_screen;
                    if(!(var11 != var16)) { _fun0001_ip = 686; continue _fun0001 }
 614:
                    var17 = _closure1_slot1;
                    var16 = _closure1_slot3;
                    var16 = var16[var18];
                    var20 = var17.bind(var5)(var16);
                    var17 = var20.dispatch;
                    var16 = {};
                    var21 = 'WELCOME_SCREEN_UPDATE';
                    var16['type'] = var21;
                    var21 = var15;
                    var22 = var21.body;
                    var22 = var22.id;
                    var16['guildId'] = var22;
                    var21 = var21.body;
                    var21 = var21.welcome_screen;
                    var16['welcomeScreen'] = var21;
                    var16 = var17.bind(var20)(var16);
 686:
                    var16 = var15;
                    var16 = var16.body;
                    var16 = var16.approximate_presence_count;
                    if(!(var11 != var16)) { _fun0001_ip = 775; continue _fun0001 }
 704:
                    var17 = _closure1_slot1;
                    var16 = _closure1_slot3;
                    var16 = var16[var18];
                    var18 = var17.bind(var5)(var16);
                    var17 = var18.dispatch;
                    var16 = {};
                    var20 = 'ONLINE_GUILD_MEMBER_COUNT_UPDATE';
                    var16['type'] = var20;
                    var20 = var15;
                    var21 = var20.body;
                    var21 = var21.id;
                    var16['guildId'] = var21;
                    var20 = var20.body;
                    var20 = var20.approximate_presence_count;
                    var16['count'] = var20;
                    var16 = var17.bind(var18)(var16);
 775:
                    var16 = var10;
                    if(var16) { _fun0001_ip = 871; continue _fun0001 }
 781:
                    var18 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var17 = 18;
                    var17 = var16[var17];
                    var18 = var18.bind(var5)(var17);
                    var17 = 17;
                    var17 = var16[var17];
                    var16 = var16.paths;
                    var16 = var18.bind(var5)(var17, var16);
                    SaveGenerator(address=823);
 821:
                    return var16;
 823:
                    ResumeGenerator(result_out_reg=15, return_bool_out_reg=16);
                    if(var17) { _fun0001_ip = 868; continue _fun0001 }
 829:
                    var18 = var16.default;
                    var17 = {};
                    var20 = var7;
                    var17['guildId'] = var20;
                    var17['returnChannelId'] = var19;
                    var17 = var18.bind(var5)(var17);
                    SaveGenerator(address=859);
 857:
                    return var17;
 859:
                    ResumeGenerator(result_out_reg=16, return_bool_out_reg=17);
                    if(!var18) { _fun0001_ip = 871; continue _fun0001 }
 865: // try_end0
                    return var17;
 868:
                    return var16;
 871: // try_start_1
                    var16 = var15;
 874: // try_end1
                    return var16;
 877: // try_start_2
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot3;
                    var16 = 16;
                    var16 = var18[var16];
                    var18 = var17.bind(var5)(var16);
                    var17 = var18.transitionTo;
                    var20 = _closure1_slot20;
                    var19 = var20.GUILD_MEMBER_VERIFICATION;
                    var16 = var7;
                    var16 = var19.bind(var20)(var16);
                    var16 = var17.bind(var18)(var16);
 926: // try_end2
                    return var15;
 929:
                    return var13;
 932: // catch_target0 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=12);
                    var6 = var13;
                    var13 = var13.body;
                    var12 = var13;
                    var15 = var11 == var13;
                    var13 = undefined;
                    if(var15) { _fun0001_ip = 959; continue _fun0001 }
 954:
                    var13 = var12.code;
 959:
                    var12 = _closure1_slot15;
                    var12 = var12.TOO_MANY_USER_GUILDS;
                    if(!(var13 === var12)) { _fun0001_ip = 1076; continue _fun0001 }
 973:
                    var13 = _closure1_slot14;
                    var12 = var13.getCurrentUser;
                    var16 = var12.bind(var13)();
                    var14 = var16;
                    var15 = _closure1_slot1;
                    var17 = _closure1_slot3;
                    var13 = 19;
                    var13 = var17[var13];
                    var15 = var15.bind(var5)(var13);
                    var13 = var15.canUseIncreasedGuildCap;
                    var13 = var13.bind(var15)(var16);
                    var12 = var13;
                    if(var13) { _fun0001_ip = 1054; continue _fun0001 }
 1026:
                    var13 = var14;
                    var15 = var11 == var13;
                    var13 = undefined;
                    if(var15) { _fun0001_ip = 1051; continue _fun0001 }
 1038:
                    var15 = var14;
                    var14 = var15.isStaff;
                    var13 = var14.bind(var15)();
 1051:
                    var12 = var13;
 1054:
                    var13 = _closure1_slot22;
                    if(var12) { _fun0001_ip = 1067; continue _fun0001 }
 1061:
                    var12 = _closure1_slot18;
                    _fun0001_ip = 1071; continue _fun0001;
 1067:
                    var12 = _closure1_slot19;
 1071:
                    var12 = var13.bind(var5)(var12);
 1076:
                    var12 = var6;
                    var12 = var12.body;
                    var8 = var12;
                    var13 = var11 == var12;
                    var12 = undefined;
                    if(var13) { _fun0001_ip = 1101; continue _fun0001 }
 1096:
                    var12 = var8.code;
 1101:
                    var8 = _closure1_slot15;
                    var8 = var8.GUILD_AT_CAPACITY;
                    if(!(var12 === var8)) { _fun0001_ip = 1254; continue _fun0001 }
 1118:
                    var12 = _closure1_slot1;
                    var18 = _closure1_slot3;
                    var8 = 11;
                    var8 = var18[var8];
                    var13 = var12.bind(var5)(var8);
                    var12 = var13.show;
                    var8 = {};
                    var17 = _closure1_slot0;
                    var14 = 12;
                    var15 = var18[var14];
                    var15 = var17.bind(var5)(var15);
                    var19 = var15.intl;
                    var16 = var19.string;
                    var15 = var18[var14];
                    var15 = var17.bind(var5)(var15);
                    var15 = var15.t;
                    var15 = var15.ZZlox8;
                    var15 = var16.bind(var19)(var15);
                    var8['title'] = var15;
                    var15 = var18[var14];
                    var15 = var17.bind(var5)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var14 = var18[var14];
                    var14 = var17.bind(var5)(var14);
                    var14 = var14.t;
                    var14 = var14.ZUEGFh;
                    var14 = var15.bind(var16)(var14);
                    var8['body'] = var14;
                    var8 = var12.bind(var13)(var8);
 1254:
                    var8 = var10;
                    if(!var10) { _fun0001_ip = 1299; continue _fun0001 }
 1260:
                    var10 = var6;
                    var10 = var10.body;
                    var9 = var10;
                    var11 = var11 == var10;
                    var10 = undefined;
                    if(var11) { _fun0001_ip = 1285; continue _fun0001 }
 1280:
                    var10 = var9.code;
 1285:
                    var9 = _closure1_slot15;
                    var9 = var9.UNKNOWN_GUILD;
                    var8 = var10 === var9;
 1299:
                    if(!var8) { _fun0001_ip = 1311; continue _fun0001 }
 1302:
                    var8 = _closure1_slot23;
                    var7 = var8.bind(var5)(var7);
 1311:
                    throw var6;
 1313:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 14;
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.bind(var5)();
                    var4 = global;
                    var5 = var4.Promise;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var28 = function(arg1, arg2) {
                        var1 = global;
                        var1 = var1.Error;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {constructor: {value: var1}});
                        var5 = var2;
                        var1 = new var5[var1](var4);
                        var3 = var1 instanceof Object ? var1 : var2;
                        var2 = arg2;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var29 = var4;
                    var3 = new var29[var5](var28, var27);
                    var3 = var3 instanceof Object ? var3 : var4;
                    return var3;
 1373:
                    return var2;
 1376:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot24 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot24 = var1;
    var2 = function waitForGuild(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var3 = _closure1_slot11;
            var2 = var3.addConditionalChangeListener;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot11;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot0;
                    var4 = var2.bind(var3)(var1);
                    var1 = null;
                    var1 = var1 == var4;
                    if(var1) { _fun0002_ip = 49; continue _fun0002 }
 33:
                    var3 = _closure3_slot0;
                    var2 = undefined;
                    var2 = var3.bind(var2)(var4);
                    var1 = false;
 49:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot25 = var2;
    var1 = ['icon', 'unicodeEmoji'];
    var _closure1_slot4 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.isGuildNSFW;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var8 = var4.AbortCodes;
    var _closure1_slot15 = var8;
    var8 = var4.Endpoints;
    var _closure1_slot16 = var8;
    var8 = var4.UserFlags;
    var _closure1_slot17 = var8;
    var8 = var4.MAX_USER_GUILDS;
    var _closure1_slot18 = var8;
    var8 = var4.MAX_USER_GUILDS_PREMIUM;
    var _closure1_slot19 = var8;
    var8 = var4.Routes;
    var _closure1_slot20 = var8;
    var4 = var4.AnalyticEvents;
    var _closure1_slot21 = var4;
    var4 = function showTooManyUserGuildsAlert(arg1) {
        var3 = _closure1_slot1;
        var9 = _closure1_slot3;
        var1 = 11;
        var2 = var9[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.show;
        var2 = {};
        var6 = _closure1_slot0;
        var5 = 12;
        var7 = var9[var5];
        var7 = var6.bind(var1)(var7);
        var10 = var7.intl;
        var8 = var10.string;
        var7 = var9[var5];
        var7 = var6.bind(var1)(var7);
        var7 = var7.t;
        var7 = var7.cTaRxM;
        var7 = var8.bind(var10)(var7);
        var2['title'] = var7;
        var7 = var9[var5];
        var7 = var6.bind(var1)(var7);
        var8 = var7.intl;
        var7 = var8.formatToPlainString;
        var5 = var9[var5];
        var5 = var6.bind(var1)(var5);
        var5 = var5.t;
        var6 = var5.VSd+Ag;
        var5 = {};
        var9 = arg1;
        var5['quantity'] = var9;
        var5 = var7.bind(var8)(var6, var5);
        var2['body'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot22 = var4;
    var8 = function deleteGuild(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 13;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_DELETE';
        var2['type'] = var5;
        var5 = {};
        var6 = arg1;
        var5['id'] = var6;
        var2['guild'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot23 = var8;
    var4 = {};
    var9 = function joinGuild() {
        var1 = undefined;
        var4 = _closure1_slot24;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var4['joinGuild'] = var9;
    var4['waitForGuild'] = var2;
    var9 = function transitionToGuildSync(arg1, arg2, arg3, arg4) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var2 = arg4;
        var _closure2_slot3 = var2;
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 281; continue _fun0003 }
 10:
                    var5 = _closure1_slot25;
                    var2 = _closure2_slot0;
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    SaveGenerator(address=35);
 33:
                    return var2;
 35:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 278; continue _fun0003 }
 44:
                    var9 = var2.id;
                    var10 = _closure2_slot2;
                    var8 = null;
                    if(!(var8 == var10)) { _fun0003_ip = 90; continue _fun0003 }
 59:
                    var6 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var5 = 20;
                    var5 = var11[var5];
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.getChannelIdForGuildTransition;
                    var10 = var5.bind(var6)(var9);
 90:
                    var6 = _closure2_slot1;
                    var5 = var8 != var6;
                    if(!var5) { _fun0003_ip = 120; continue _fun0003 }
 101:
                    var12 = _closure2_slot1;
                    var11 = var12.hasOwnProperty;
                    var9 = 'welcomeModalChannelId';
                    var5 = var11.bind(var12)(var9);
 120:
                    if(!var5) { _fun0003_ip = 137; continue _fun0003 }
 123:
                    var9 = _closure2_slot1;
                    var9 = var9.welcomeModalChannelId;
                    var5 = var8 == var9;
 137:
                    if(!var5) { _fun0003_ip = 177; continue _fun0003 }
 140:
                    var5 = {};
                    var14 = _closure2_slot1;
                    var15 = var5;
                    var9 = copyDataProperties(var15, var14);
                    var8 = var8 != var10;
                    var9 = undefined;
                    if(!var8) { _fun0003_ip = 165; continue _fun0003 }
 162:
                    var9 = var10;
 165:
                    var8 = 'welcomeModalChannelId';
                    var5[var8] = var9;
                    var6 = var5;
 177:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var5 = 21;
                    var5 = var9[var5];
                    var5 = var8.bind(var4)(var5);
                    var9 = _closure1_slot20;
                    var8 = var9.CHANNEL;
                    var7 = _closure2_slot0;
                    var3 = _closure2_slot3;
                    var3 = var8.bind(var9)(var7, var10, var3);
                    var3 = var5.bind(var4)(var3, var6);
                    var3 = global;
                    var6 = var3.Promise;
                    var15 = var3.setImmediate;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {constructor: {value: var6}});
                    var16 = var5;
                    var3 = new var16[var6](var15, var14);
                    var3 = var3 instanceof Object ? var3 : var5;
                    SaveGenerator(address=266);
 264:
                    return var3;
 266:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 275; continue _fun0003 }
 272:
                    return var4;
 275:
                    return var3;
 278:
                    return var2;
 281:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var4['transitionToGuildSync'] = var9;
    var4['deleteGuild'] = var8;
    var8 = function selectGuild(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 22;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.stopLurking;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['selectGuild'] = var8;
    var8 = function createGuild(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 13;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_CREATE';
        var2['type'] = var5;
        var5 = arg1;
        var2['guild'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['createGuild'] = var8;
    var8 = function setServerMute(arg1, arg2, arg3) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 15;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var7 = _closure1_slot16;
        var6 = var7.GUILD_MEMBER;
        var5 = arg1;
        var4 = arg2;
        var4 = var6.bind(var7)(var5, var4);
        var1['url'] = var4;
        var4 = {};
        var5 = arg3;
        var4['mute'] = var5;
        var1['body'] = var4;
        var4 = true;
        var1['oldFormErrors'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['setServerMute'] = var8;
    var8 = function setServerDeaf(arg1, arg2, arg3) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 15;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var7 = _closure1_slot16;
        var6 = var7.GUILD_MEMBER;
        var5 = arg1;
        var4 = arg2;
        var4 = var6.bind(var7)(var5, var4);
        var1['url'] = var4;
        var4 = {};
        var5 = arg3;
        var4['deaf'] = var5;
        var1['body'] = var4;
        var4 = true;
        var1['oldFormErrors'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['setServerDeaf'] = var8;
    var8 = function setChannel(arg1, arg2, arg3) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 15;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var4 = var2.HTTP;
        var3 = var4.patch;
        var2 = {};
        var8 = _closure1_slot16;
        var7 = var8.GUILD_MEMBER;
        var6 = arg1;
        var5 = arg2;
        var5 = var7.bind(var8)(var6, var5);
        var2['url'] = var5;
        var5 = {};
        var6 = arg3;
        var5['channel_id'] = var6;
        var2['body'] = var5;
        var5 = true;
        var2['oldFormErrors'] = var5;
        var2['rejectWithError'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['setChannel'] = var8;
    var8 = function setMemberFlags(arg1, arg2, arg3) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 15;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var4 = var2.HTTP;
        var3 = var4.patch;
        var2 = {};
        var8 = _closure1_slot16;
        var7 = var8.GUILD_MEMBER;
        var6 = arg1;
        var5 = arg2;
        var5 = var7.bind(var8)(var6, var5);
        var2['url'] = var5;
        var5 = {};
        var6 = arg3;
        var5['flags'] = var6;
        var2['body'] = var5;
        var5 = true;
        var2['oldFormErrors'] = var5;
        var2['rejectWithError'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['setMemberFlags'] = var8;
    var8 = function kickUser(arg1, arg2, arg3, arg4) {
        var8 = arg1;
        var7 = arg2;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var7;
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var2 = 15;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var4 = var2.HTTP;
        var3 = var4.del;
        var2 = {};
        var6 = _closure1_slot16;
        var5 = var6.GUILD_MEMBER;
        var5 = var5.bind(var6)(var8, var7);
        var2['url'] = var5;
        var5 = {};
        var6 = arg3;
        var5['reason'] = var6;
        var6 = arg4;
        var5['moderator_report_id'] = var6;
        var2['query'] = var5;
        var5 = true;
        var2['oldFormErrors'] = var5;
        var5 = false;
        var2['rejectWithError'] = var5;
        var3 = var3.bind(var4)(var2);
        var2 = var3.then;
        var1 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'GUILD_MEMBER_REMOVE_LOCAL';
            var2['type'] = var5;
            var6 = _closure2_slot0;
            var2['guildId'] = var6;
            var5 = _closure2_slot1;
            var2['userId'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['kickUser'] = var8;
    var8 = function setCommunicationDisabledUntil(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var9 = var1.guildId;
            var6 = var1.userId;
            var8 = var1.communicationDisabledUntilTimestamp;
            var11 = var1.duration;
            var10 = var1.reason;
            var7 = var1.location;
            var12 = var1.moderatorReportId;
            var2 = _closure1_slot1;
            var14 = _closure1_slot3;
            var1 = 23;
            var1 = var14[var1];
            var13 = undefined;
            var3 = var2.bind(var13)(var1);
            var2 = var3.patch;
            var1 = {};
            var15 = _closure1_slot16;
            var4 = var15.GUILD_MEMBER;
            var4 = var4.bind(var15)(var9, var6);
            var1['url'] = var4;
            var1['reason'] = var10;
            var4 = {};
            var4['communication_disabled_until'] = var8;
            var4['moderator_report_id'] = var12;
            var1['body'] = var4;
            var4 = true;
            var1['oldFormErrors'] = var4;
            var4 = {};
            var12 = _closure1_slot0;
            var5 = 24;
            var5 = var14[var5];
            var5 = var12.bind(var13)(var5);
            var5 = var5.NetworkActionNames;
            var5 = var5.USER_COMMUNICATION_DISABLED_UPDATE;
            var4['event'] = var5;
            var5 = {};
            var5['guild_id'] = var9;
            var5['target_user_id'] = var6;
            var6 = null;
            var12 = var6 != var11;
            var9 = null;
            if(!var12) { _fun0004_ip = 182; continue _fun0004 }
 179:
            var9 = var11;
 182:
            var5['duration'] = var9;
            var11 = var6 != var10;
            var9 = null;
            if(!var11) { _fun0004_ip = 198; continue _fun0004 }
 195:
            var9 = var10;
 198:
            var5['reason'] = var9;
            var5['communication_disabled_until'] = var8;
            var8 = var6 != var7;
            var6 = null;
            if(!var8) { _fun0004_ip = 220; continue _fun0004 }
 217:
            var6 = var7;
 220:
            var5['location'] = var6;
            var4['properties'] = var5;
            var1['trackedActionData'] = var4;
            var4 = false;
            var1['rejectWithError'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var4['setCommunicationDisabledUntil'] = var8;
    var8 = function banUser(arg1, arg2, arg3, arg4, arg5) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 15;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.put;
        var1 = {};
        var7 = _closure1_slot16;
        var6 = var7.GUILD_BAN;
        var5 = arg1;
        var4 = arg2;
        var4 = var6.bind(var7)(var5, var4);
        var1['url'] = var4;
        var4 = arg4;
        var1['reason'] = var4;
        var4 = {};
        var5 = arg3;
        var4['delete_message_seconds'] = var5;
        var5 = arg5;
        var4['moderator_report_id'] = var5;
        var1['body'] = var4;
        var4 = true;
        var1['oldFormErrors'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['banUser'] = var8;
    var8 = function unbanUser(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 15;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        var7 = _closure1_slot16;
        var6 = var7.GUILD_BAN;
        var5 = arg1;
        var4 = arg2;
        var4 = var6.bind(var7)(var5, var4);
        var1['url'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['unbanUser'] = var8;
    var8 = function banMultipleUsers(arg1, arg2, arg3, arg4) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 15;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var6 = _closure1_slot16;
        var5 = var6.BULK_GUILD_BAN;
        var4 = arg1;
        var4 = var5.bind(var6)(var4);
        var1['url'] = var4;
        var4 = {};
        var5 = arg2;
        var4['user_ids'] = var5;
        var5 = arg3;
        var4['delete_message_seconds'] = var5;
        var1['body'] = var4;
        var4 = arg4;
        var1['reason'] = var4;
        var4 = true;
        var1['oldFormErrors'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['banMultipleUsers'] = var8;
    var8 = function createRole(arg1, arg2, arg3, arg4) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var2 = arg4;
        var _closure2_slot3 = var2;
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 493; continue _fun0005 }
 10:
                    var5 = undefined;
                    var8 = undefined;
                    var3 = {};
                    var2 = _closure2_slot1;
                    var9 = null;
                    if(!(var9 != var2)) { _fun0005_ip = 41; continue _fun0005 }
 29:
                    var4 = _closure2_slot1;
                    var2 = '';
                    if(!(var2 === var4)) { _fun0005_ip = 101; continue _fun0005 }
 41:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var2 = 12;
                    var4 = var11[var2];
                    var4 = var10.bind(var5)(var4);
                    var7 = var4.intl;
                    var4 = var7.string;
                    var2 = var11[var2];
                    var2 = var10.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.QBMHvL;
                    var2 = var4.bind(var7)(var2);
                    _fun0005_ip = 105; continue _fun0005;
 101:
                    var2 = _closure2_slot1;
 105:
                    var3['name'] = var2;
                    var2 = _closure2_slot2;
                    var7 = var9 != var2;
                    var2 = 0;
                    if(!var7) { _fun0005_ip = 126; continue _fun0005 }
 122:
                    var2 = _closure2_slot2;
 126:
                    var3['color'] = var2;
                    var2 = _closure2_slot3;
                    if(!(var9 == var2)) { _fun0005_ip = 173; continue _fun0005 }
 138:
                    var2 = {'primary_color': null, 'secondary_color': null, 'tertiary_color': null};
                    var7 = _closure2_slot2;
                    var7 = var9 != var7;
                    var4 = 0;
                    if(!var7) { _fun0005_ip = 165; continue _fun0005 }
 161:
                    var4 = _closure2_slot2;
 165:
                    var2['primary_color'] = var4;
                    _fun0005_ip = 177; continue _fun0005;
 173:
                    var2 = _closure2_slot3;
 177:
                    var3['colors'] = var2;
                    var7 = _closure1_slot2;
                    var9 = _closure1_slot3;
                    var4 = 25;
                    var4 = var9[var4];
                    var4 = var7.bind(var5)(var4);
                    var4 = var4.NONE;
                    var3['permissions'] = var4;
                    var8 = var3;
 218: // try_start_0
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var3 = 15;
                    var3 = var7[var3];
                    var3 = var4.bind(var5)(var3);
                    var7 = var3.HTTP;
                    var4 = var7.post;
                    var3 = {};
                    var11 = _closure1_slot16;
                    var10 = var11.GUILD_ROLES;
                    var9 = _closure2_slot0;
                    var9 = var10.bind(var11)(var9);
                    var3['url'] = var9;
                    var9 = true;
                    var3['oldFormErrors'] = var9;
                    var3['body'] = var8;
                    var8 = false;
                    var3['rejectWithError'] = var8;
                    var3 = var4.bind(var7)(var3);
                    SaveGenerator(address=300);
 298:
                    return var3;
 300:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 443; continue _fun0005 }
 309:
                    var4 = var3.body;
                    var8 = _closure1_slot2;
                    var9 = _closure1_slot3;
                    var7 = 26;
                    var7 = var9[var7];
                    var10 = var8.bind(var5)(var7);
                    var8 = var10.deserialize;
                    var7 = var4.permissions;
                    var7 = var8.bind(var10)(var7);
                    var4['permissions'] = var7;
                    var8 = _closure1_slot1;
                    var7 = 13;
                    var7 = var9[var7];
                    var11 = var8.bind(var5)(var7);
                    var10 = var11.dispatch;
                    var7 = {};
                    var12 = 'GUILD_SETTINGS_ROLE_SELECT';
                    var7['type'] = var12;
                    var12 = var3.body;
                    var12 = var12.id;
                    var7['roleId'] = var12;
                    var7['role'] = var4;
                    var7 = var10.bind(var11)(var7);
                    var7 = 27;
                    var7 = var9[var7];
                    var8 = var8.bind(var5)(var7);
                    var7 = var8.checkGuildTemplateDirty;
                    var6 = _closure2_slot0;
                    var6 = var7.bind(var8)(var6);
 440: // try_end0
                    return var4;
 443:
                    return var3;
 446: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var2 = 28;
                    var2 = var6[var2];
                    var2 = var3.bind(var5)(var2);
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var14 = var3;
                    var13 = var4;
                    var2 = new var14[var2](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 493:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var4['createRole'] = var8;
    var8 = function updateRole(arg1, arg2, arg3) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 251; continue _fun0006 }
 10:
                    var8 = _closure2_slot2;
                    var2 = var8.icon;
                    var10 = var8.unicodeEmoji;
                    var7 = _closure1_slot5;
                    var5 = _closure1_slot4;
                    var6 = undefined;
                    var9 = var7.bind(var6)(var8, var5);
                    var5 = null;
                    if(!(var5 !== var2)) { _fun0006_ip = 84; continue _fun0006 }
 53:
                    var5 = var5 != var2;
                    var11 = undefined;
                    if(!var5) { _fun0006_ip = 87; continue _fun0006 }
 62:
                    var7 = var2.startsWith;
                    var5 = 'data:';
                    var5 = var7.bind(var2)(var5);
                    var11 = undefined;
                    if(!var5) { _fun0006_ip = 87; continue _fun0006 }
 84:
                    var11 = var2;
 87:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var2 = 15;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var7 = var2.HTTP;
                    var5 = var7.patch;
                    var2 = {};
                    var14 = _closure1_slot16;
                    var13 = var14.GUILD_ROLE;
                    var12 = _closure2_slot0;
                    var8 = _closure2_slot1;
                    var8 = var13.bind(var14)(var12, var8);
                    var2['url'] = var8;
                    var8 = {};
                    var16 = var8;
                    var15 = var9;
                    var9 = copyDataProperties(var16, var15);
                    var9 = 'icon';
                    var8[var9] = var11;
                    var9 = 'unicode_emoji';
                    var8[var9] = var10;
                    var2['body'] = var8;
                    var8 = true;
                    var2['oldFormErrors'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var5.bind(var7)(var2);
                    SaveGenerator(address=204);
 202:
                    return var2;
 204:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 248; continue _fun0006 }
 210:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 27;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.checkGuildTemplateDirty;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var5)(var3);
                    return var2;
 248:
                    return var2;
 251:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var4['updateRole'] = var8;
    var8 = function updateRolePermissions(arg1, arg2, arg3) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 15;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var7 = _closure1_slot16;
        var6 = var7.GUILD_ROLE;
        var5 = arg1;
        var4 = arg2;
        var4 = var6.bind(var7)(var5, var4);
        var1['url'] = var4;
        var4 = {};
        var5 = arg3;
        var4['permissions'] = var5;
        var1['body'] = var4;
        var4 = true;
        var1['oldFormErrors'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['updateRolePermissions'] = var8;
    var8 = function deleteRole(arg1, arg2) {
        var9 = arg1;
        var _closure2_slot0 = var9;
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var1 = 15;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var5 = var3.HTTP;
        var4 = var5.del;
        var3 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
        var8 = _closure1_slot16;
        var7 = var8.GUILD_ROLE;
        var6 = arg2;
        var6 = var7.bind(var8)(var9, var6);
        var3['url'] = var6;
        var4 = var4.bind(var5)(var3);
        var3 = var4.then;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 27;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.checkGuildTemplateDirty;
            var2 = _closure2_slot0;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['deleteRole'] = var8;
    var8 = function batchChannelUpdate(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 151; continue _fun0007 }
 10:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 15;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var7 = var2.HTTP;
                    var5 = var7.patch;
                    var2 = {};
                    var10 = _closure1_slot16;
                    var9 = var10.GUILD_CHANNELS;
                    var8 = _closure2_slot0;
                    var8 = var9.bind(var10)(var8);
                    var2['url'] = var8;
                    var8 = _closure2_slot1;
                    var2['body'] = var8;
                    var8 = true;
                    var2['oldFormErrors'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var5.bind(var7)(var2);
                    SaveGenerator(address=104);
 102:
                    return var2;
 104:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0007_ip = 148; continue _fun0007 }
 110:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 27;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.checkGuildTemplateDirty;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var5)(var3);
                    return var2;
 148:
                    return var2;
 151:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var4['batchChannelUpdate'] = var8;
    var8 = function batchRoleUpdate(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 151; continue _fun0008 }
 10:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 15;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var7 = var2.HTTP;
                    var5 = var7.patch;
                    var2 = {};
                    var10 = _closure1_slot16;
                    var9 = var10.GUILD_ROLES;
                    var8 = _closure2_slot0;
                    var8 = var9.bind(var10)(var8);
                    var2['url'] = var8;
                    var8 = _closure2_slot1;
                    var2['body'] = var8;
                    var8 = true;
                    var2['oldFormErrors'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var5.bind(var7)(var2);
                    SaveGenerator(address=104);
 102:
                    return var2;
 104:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0008_ip = 148; continue _fun0008 }
 110:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 27;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.checkGuildTemplateDirty;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var5)(var3);
                    return var2;
 148:
                    return var2;
 151:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var4['batchRoleUpdate'] = var8;
    var8 = function requestMembers(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var9 = arg1;
            var6 = arguments[1];
            var5 = arguments[2];
            var4 = arguments[3];
            var3 = undefined;
            if(!(var6 === var3)) { _fun0009_ip = 22; continue _fun0009 }
 18:
            var6 = '';
 22:
            if(!(var5 === var3)) { _fun0009_ip = 29; continue _fun0009 }
 26:
            var5 = 10;
 29:
            if(!(var4 === var3)) { _fun0009_ip = 35; continue _fun0009 }
 33:
            var4 = true;
 35:
            var2 = _closure1_slot1;
            var7 = _closure1_slot3;
            var1 = 13;
            var1 = var7[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var7 = 'GUILD_MEMBERS_REQUEST';
            var1['type'] = var7;
            var7 = global;
            var8 = var7.Array;
            var7 = var8.isArray;
            var8 = var7.bind(var8)(var9);
            var7 = var9;
            if(var8) { _fun0009_ip = 110; continue _fun0009 }
 99:
            var8 = new Array(1);
            var8[0] = var9;
            var7 = var8;
 110:
            var1['guildIds'] = var7;
            var1['query'] = var6;
            var1['limit'] = var5;
            var1['presences'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var4['requestMembers'] = var8;
    var8 = function searchRecentMembers(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg2;
            var2 = null;
            if(!(var2 == var1)) { _fun0010_ip = 11; continue _fun0010 }
 9:
            var1 = {};
 11:
            var5 = var1.query;
            var4 = var1.continuationToken;
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var6 = 'GUILD_SEARCH_RECENT_MEMBERS';
            var1['type'] = var6;
            var6 = arg1;
            var1['guildId'] = var6;
            var1['query'] = var5;
            var1['continuationToken'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var4['searchRecentMembers'] = var8;
    var8 = function requestMembersById(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var9 = arg1;
            var7 = arg2;
            var4 = arguments[2];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0011_ip = 17; continue _fun0011 }
 15:
            var4 = true;
 17:
            var2 = _closure1_slot1;
            var5 = _closure1_slot3;
            var1 = 13;
            var1 = var5[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var5 = 'GUILD_MEMBERS_REQUEST';
            var1['type'] = var5;
            var5 = global;
            var8 = var5.Array;
            var6 = var8.isArray;
            var8 = var6.bind(var8)(var9);
            var6 = var9;
            if(var8) { _fun0011_ip = 92; continue _fun0011 }
 81:
            var8 = new Array(1);
            var8[0] = var9;
            var6 = var8;
 92:
            var1['guildIds'] = var6;
            var6 = var5.Array;
            var5 = var6.isArray;
            var6 = var5.bind(var6)(var7);
            var5 = var7;
            if(var6) { _fun0011_ip = 130; continue _fun0011 }
 119:
            var6 = new Array(1);
            var6[0] = var7;
            var5 = var6;
 130:
            var1['userIds'] = var5;
            var1['presences'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var4['requestMembersById'] = var8;
    var8 = function move(arg1, arg2, arg3, arg4) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 13;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_MOVE';
        var2['type'] = var5;
        var5 = arg1;
        var2['fromIndex'] = var5;
        var5 = arg2;
        var2['toIndex'] = var5;
        var5 = arg3;
        var2['fromFolderIndex'] = var5;
        var5 = arg4;
        var2['toFolderIndex'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['move'] = var8;
    var8 = function moveById(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var4 = arg1;
            var8 = arg2;
            var7 = arguments[2];
            var6 = arguments[3];
            var1 = undefined;
            if(!(var7 === var1)) { _fun0012_ip = 20; continue _fun0012 }
 18:
            var7 = false;
 20:
            if(!(var6 === var1)) { _fun0012_ip = 26; continue _fun0012 }
 24:
            var6 = false;
 26:
            if(!(var4 !== var8)) { _fun0012_ip = 97; continue _fun0012 }
 30:
            var3 = _closure1_slot1;
            var5 = _closure1_slot3;
            var2 = 13;
            var2 = var5[var2];
            var5 = var3.bind(var1)(var2);
            var3 = var5.dispatch;
            var2 = {};
            var9 = 'GUILD_MOVE_BY_ID';
            var2['type'] = var9;
            var2['sourceId'] = var4;
            var2['targetId'] = var8;
            var2['moveToBelow'] = var7;
            var2['combine'] = var6;
            var2 = var3.bind(var5)(var2);
            return var1;
 97:
            var1 = global;
            var3 = var1.Error;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'GuildActionCreators.moveById: `sourceId` and `targetId` cannot be the same value: ';
            var10 = var2.bind(var1)(var4);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var11 = var2;
            var1 = new var11[var3](var10, var9);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var4['moveById'] = var8;
    var8 = function createGuildFolderLocal(arg1, arg2) {
        var3 = _closure1_slot1;
        var4 = _closure1_slot3;
        var1 = 29;
        var5 = var4[var1];
        var1 = undefined;
        var6 = var3.bind(var1)(var5);
        var5 = var6.track;
        var2 = _closure1_slot21;
        var2 = var2.GUILD_FOLDER_CREATED;
        var2 = var5.bind(var6)(var2);
        var2 = 13;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_FOLDER_CREATE_LOCAL';
        var2['type'] = var5;
        var5 = arg1;
        var2['sourceIds'] = var5;
        var5 = arg2;
        var2['name'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['createGuildFolderLocal'] = var8;
    var8 = function editGuildFolderLocal(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 13;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_FOLDER_EDIT_LOCAL';
        var2['type'] = var5;
        var5 = arg1;
        var2['targetId'] = var5;
        var5 = arg2;
        var2['sourceIds'] = var5;
        var5 = arg3;
        var2['name'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['editGuildFolderLocal'] = var8;
    var8 = function deleteGuildFolderLocal(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 13;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_FOLDER_DELETE_LOCAL';
        var2['type'] = var5;
        var5 = arg1;
        var2['targetId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['deleteGuildFolderLocal'] = var8;
    var8 = function toggleGuildFolderExpand(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot9;
            var1 = var3.isFolderExpanded;
            var9 = var1.bind(var3)(var5);
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 29;
            var3 = var3[var1];
            var1 = undefined;
            var7 = var4.bind(var1)(var3);
            var6 = var7.track;
            var3 = _closure1_slot21;
            var4 = var3.GUILD_FOLDER_CLICKED;
            var3 = {};
            var8 = 'sidebar';
            var3['source'] = var8;
            var8 = 'expanded';
            if(!var9) { _fun0013_ip = 81; continue _fun0013 }
 77:
            var8 = 'collapsed';
 81:
            var3['action'] = var8;
            var3 = var6.bind(var7)(var4, var3);
            var3 = _closure1_slot1;
            var4 = _closure1_slot3;
            var2 = 13;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'TOGGLE_GUILD_FOLDER_EXPAND';
            var2['type'] = var6;
            var2['folderId'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var4['toggleGuildFolderExpand'] = var8;
    var8 = function setGuildFolderExpanded(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 13;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SET_GUILD_FOLDER_EXPANDED';
        var2['type'] = var5;
        var5 = arg1;
        var2['folderId'] = var5;
        var5 = arg2;
        var2['expanded'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['setGuildFolderExpanded'] = var8;
    var8 = function collapseAllFolders() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 13;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_FOLDER_COLLAPSE';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['collapseAllFolders'] = var8;
    var8 = function nsfwAgree(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 13;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_NSFW_AGREE';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['nsfwAgree'] = var8;
    var8 = function nsfwReturnToSafety(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var8 = arg1;
            var3 = _closure1_slot11;
            var1 = var3.getGuild;
            var4 = var1.bind(var3)(var8);
            var3 = _closure1_slot7;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            var4 = null;
            if(!(var4 != var8)) { _fun0014_ip = 196; continue _fun0014 }
 40:
            if(var3) { _fun0014_ip = 196; continue _fun0014 }
 46:
            var5 = _closure1_slot10;
            var3 = var5.getDefaultChannel;
            var3 = var3.bind(var5)(var8);
            if(!(var4 != var3)) { _fun0014_ip = 153; continue _fun0014 }
 65:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var4 = 30;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.isChannelNSFW;
            var4 = var4.bind(var5)(var3);
            if(var4) { _fun0014_ip = 153; continue _fun0014 }
 99:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var4 = 16;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.transitionTo;
            var7 = _closure1_slot20;
            var6 = var7.CHANNEL;
            var3 = var3.id;
            var3 = var6.bind(var7)(var8, var3);
            var3 = var4.bind(var5)(var3);
            _fun0014_ip = 237; continue _fun0014;
 153:
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var3 = 16;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.transitionTo;
            var3 = _closure1_slot20;
            var3 = var3.FRIENDS;
            var3 = var4.bind(var5)(var3);
            _fun0014_ip = 237; continue _fun0014;
 196:
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var3 = 16;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.transitionTo;
            var2 = _closure1_slot20;
            var2 = var2.FRIENDS;
            var2 = var3.bind(var4)(var2);
 237:
            return var1;
        }
    };
    var4['nsfwReturnToSafety'] = var8;
    var8 = function escapeToDefaultChannel(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var6 = arg1;
            var2 = _closure1_slot10;
            var1 = var2.getDefaultChannel;
            var1 = var1.bind(var2)(var6);
            var2 = null;
            if(!(var2 == var1)) { _fun0015_ip = 72; continue _fun0015 }
 27:
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 16;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var3);
            var3 = var5.transitionTo;
            var2 = _closure1_slot20;
            var2 = var2.FRIENDS;
            var2 = var3.bind(var5)(var2);
            _fun0015_ip = 126; continue _fun0015;
 72:
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 16;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.transitionTo;
            var5 = _closure1_slot20;
            var4 = var5.CHANNEL;
            var1 = var1.id;
            var1 = var4.bind(var5)(var6, var1);
            var1 = var2.bind(var3)(var1);
 126:
            var1 = undefined;
            return var1;
        }
    };
    var4['escapeToDefaultChannel'] = var8;
    var8 = function fetchApplications(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0016_ip = 188; continue _fun0016 }
 10:
                    var6 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var5 = _closure1_slot16;
                    var3 = var5.GUILD_APPLICATIONS;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var5)(var2);
                    var6['url'] = var2;
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0016_ip = 77; continue _fun0016 }
 61:
                    var2 = {};
                    var3 = _closure2_slot1;
                    var2['channel_id'] = var3;
                    var6['query'] = var2;
 77:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 15;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var2 = var5.get;
                    var2 = var2.bind(var5)(var6);
                    SaveGenerator(address=118);
 116:
                    return var2;
 118:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0016_ip = 185; continue _fun0016 }
 124:
                    var7 = var2.body;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 13;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var9 = 'GUILD_APPLICATIONS_FETCH_SUCCESS';
                    var4['type'] = var9;
                    var8 = _closure2_slot0;
                    var4['guildId'] = var8;
                    var4['applications'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
 185:
                    return var2;
 188:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var4['fetchApplications'] = var8;
    var8 = function fetchGuildBansBatch(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var4 = arguments[1];
            var3 = arguments[2];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = undefined;
            if(!(var4 === var2)) { _fun0017_ip = 27; continue _fun0017 }
 21:
            var4 = 1000;
 27:
            var _closure2_slot1 = var4;
            if(!(var3 === var2)) { _fun0017_ip = 37; continue _fun0017 }
 35:
            var3 = null;
 37:
            var _closure2_slot2 = var3;
            var3 = _closure1_slot6;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0018_ip = 158; continue _fun0018 }
 10:
                        var6 = {};
                        var2 = _closure2_slot1;
                        var6['limit'] = var2;
                        var3 = _closure2_slot2;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0018_ip = 43; continue _fun0018 }
 33:
                        var2 = _closure2_slot2;
                        var6['after'] = var2;
 43:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var2 = 15;
                        var2 = var3[var2];
                        var3 = undefined;
                        var2 = var4.bind(var3)(var2);
                        var5 = var2.HTTP;
                        var4 = var5.get;
                        var2 = {};
                        var9 = _closure1_slot16;
                        var8 = var9.GUILD_BANS;
                        var7 = _closure2_slot0;
                        var7 = var8.bind(var9)(var7);
                        var2['url'] = var7;
                        var7 = true;
                        var2['oldFormErrors'] = var7;
                        var2['query'] = var6;
                        var6 = false;
                        var2['rejectWithError'] = var6;
                        var5 = var4.bind(var5)(var2);
                        var4 = var5.then;
                        var2 = function(arg1) {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var5 = 'GUILD_SETTINGS_LOADED_BANS_BATCH';
                            var2['type'] = var5;
                            var5 = arg1;
                            var5 = var5.body;
                            var2['bans'] = var5;
                            var5 = _closure2_slot0;
                            var2['guildId'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address=146);
 144:
                        return var2;
 146:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0018_ip = 155; continue _fun0018 }
 152:
                        return var3;
 155:
                        return var2;
 158:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var4['fetchGuildBansBatch'] = var8;
    var8 = function searchGuildBans(arg1, arg2, arg3) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var3 = arguments[3];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = arg3;
            var _closure2_slot2 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0019_ip = 35; continue _fun0019 }
 32:
            var3 = 10;
 35:
            var _closure2_slot3 = var3;
            var3 = _closure1_slot6;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0020_ip = 228; continue _fun0020 }
 10:
                        var6 = {};
                        var2 = _closure2_slot3;
                        var6['limit'] = var2;
                        var2 = _closure2_slot2;
                        var3 = null;
                        var2 = var3 != var2;
                        if(!var2) { _fun0020_ip = 51; continue _fun0020 }
 36:
                        var4 = _closure2_slot2;
                        var5 = var4.length;
                        var4 = 0;
                        var2 = var5 > var4;
 51:
                        if(!var2) { _fun0020_ip = 64; continue _fun0020 }
 54:
                        var2 = _closure2_slot2;
                        var6['user_ids'] = var2;
 64:
                        var2 = _closure2_slot1;
                        var2 = var3 != var2;
                        if(!var2) { _fun0020_ip = 100; continue _fun0020 }
 75:
                        var4 = _closure2_slot1;
                        var3 = var4.trim;
                        var3 = var3.bind(var4)();
                        var4 = var3.length;
                        var3 = 0;
                        var2 = var4 > var3;
 100:
                        if(!var2) { _fun0020_ip = 113; continue _fun0020 }
 103:
                        var2 = _closure2_slot1;
                        var6['query'] = var2;
 113:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var2 = 15;
                        var2 = var3[var2];
                        var3 = undefined;
                        var2 = var4.bind(var3)(var2);
                        var5 = var2.HTTP;
                        var4 = var5.get;
                        var2 = {};
                        var9 = _closure1_slot16;
                        var8 = var9.GUILD_BANS_SEARCH;
                        var7 = _closure2_slot0;
                        var7 = var8.bind(var9)(var7);
                        var2['url'] = var7;
                        var7 = true;
                        var2['oldFormErrors'] = var7;
                        var2['query'] = var6;
                        var6 = false;
                        var2['rejectWithError'] = var6;
                        var5 = var4.bind(var5)(var2);
                        var4 = var5.then;
                        var2 = function(arg1) {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var5 = 'GUILD_SETTINGS_LOADED_BANS_BATCH';
                            var2['type'] = var5;
                            var5 = arg1;
                            var5 = var5.body;
                            var2['bans'] = var5;
                            var6 = _closure2_slot2;
                            var2['userIds'] = var6;
                            var5 = _closure2_slot0;
                            var2['guildId'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address=216);
 214:
                        return var2;
 216:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0020_ip = 225; continue _fun0020 }
 222:
                        return var3;
 225:
                        return var2;
 228:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var4['searchGuildBans'] = var8;
    var8 = function fetchGuildBans(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0021_ip = 118; continue _fun0021 }
 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 15;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.get;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var8 = _closure1_slot16;
                    var7 = var8.GUILD_BANS;
                    var6 = _closure2_slot0;
                    var6 = var7.bind(var8)(var6);
                    var2['url'] = var6;
                    var5 = var4.bind(var5)(var2);
                    var4 = var5.then;
                    var2 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'GUILD_SETTINGS_LOADED_BANS';
                        var2['type'] = var5;
                        var5 = arg1;
                        var5 = var5.body;
                        var2['bans'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=106);
 104:
                    return var2;
 106:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0021_ip = 115; continue _fun0021 }
 112:
                    return var3;
 115:
                    return var2;
 118:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var4['fetchGuildBans'] = var8;
    var8 = function fetchGuildRoleConnectionsEligibility(arg1, arg2) {
        var8 = arg2;
        var _closure2_slot0 = var8;
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var2 = 15;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        var7 = _closure1_slot16;
        var6 = var7.GUILD_ROLE_CONNECTIONS_ELIGIBILITY;
        var5 = arg1;
        var5 = var6.bind(var7)(var5, var8);
        var2['url'] = var5;
        var3 = var3.bind(var4)(var2);
        var2 = var3.then;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.body;
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = 13;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS';
            var2['type'] = var5;
            var5 = _closure2_slot0;
            var2['roleId'] = var5;
            var2['roleConnectionEligibility'] = var1;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['fetchGuildRoleConnectionsEligibility'] = var8;
    var8 = function assignGuildRoleConnection(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0022_ip = 107; continue _fun0022 }
 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 15;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.post;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var9 = _closure1_slot16;
                    var8 = var9.GUILD_ROLE_CONNECTIONS_ASSIGN;
                    var7 = _closure2_slot0;
                    var6 = _closure2_slot1;
                    var6 = var8.bind(var9)(var7, var6);
                    var2['url'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=95);
 93:
                    return var2;
 95:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0022_ip = 104; continue _fun0022 }
 101:
                    return var3;
 104:
                    return var2;
 107:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var4['assignGuildRoleConnection'] = var8;
    var8 = function unassignGuildRoleConnection(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0023_ip = 107; continue _fun0023 }
 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 15;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.post;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var9 = _closure1_slot16;
                    var8 = var9.GUILD_ROLE_CONNECTIONS_UNASSIGN;
                    var7 = _closure2_slot0;
                    var6 = _closure2_slot1;
                    var6 = var8.bind(var9)(var7, var6);
                    var2['url'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=95);
 93:
                    return var2;
 95:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0023_ip = 104; continue _fun0023 }
 101:
                    return var3;
 104:
                    return var2;
 107:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var4['unassignGuildRoleConnection'] = var8;
    var5 = function getGuildRoleConnectionsConfigurations(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0024_ip = 106; continue _fun0024 }
 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var7 = _closure1_slot16;
                    var6 = var7.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS;
                    var5 = _closure2_slot0;
                    var5 = var6.bind(var7)(var5);
                    var2['url'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=89);
 87:
                    return var2;
 89:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0024_ip = 103; continue _fun0024 }
 95:
                    var3 = var2.body;
                    return var3;
 103:
                    return var2;
 106:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var4['getGuildRoleConnectionsConfigurations'] = var5;
    var5 = 31;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'actions/GuildActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['waitForGuild'] = var2;
    return var1;
})();