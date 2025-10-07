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
case 0:
                    StartGenerator();
                    var2 = arg1;
                    var4 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var7 = var2;
                    var _closure4_slot0 = var2;
                    var5 = undefined;
                    if(!(var4 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var4 = {};
case 4:
                    var22 = undefined;
                    var _closure4_slot1 = var5;
                    var23 = undefined;
                    var _closure4_slot2 = var5;
                    var24 = undefined;
                    var10 = undefined;
                    var _closure4_slot3 = var5;
                    var20 = undefined;
                    var16 = undefined;
                    var13 = undefined;
                    var12 = undefined;
                    var8 = undefined;
                    var9 = undefined;
                    var14 = undefined;
                    SaveGenerator(address=71);
case 6:
                    return var5;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=10);
                    if(var11) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var11 = var4.source;
                    var22 = var11;
                    _closure4_slot1 = var11;
                    var11 = var4.loadId;
                    var23 = var11;
                    _closure4_slot2 = var11;
                    var24 = var4.lurkLocation;
                    var15 = var4.lurker;
                    var11 = null;
                    var4 = var11 != var15;
                    if(!var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var4 = var15;
case 10:
                    var10 = var4;
                    _closure4_slot3 = var4;
                    var17 = _closure1_slot13;
                    var15 = var17.getCurrentUser;
                    var19 = var15.bind(var17)();
                    var17 = var11 == var19;
                    var15 = undefined;
                    if(var17) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var18 = var19.hasFlag;
                    var17 = _closure1_slot16;
                    var17 = var17.QUARANTINED;
                    var15 = var18.bind(var19)(var17);
case 12:
                    if(!(var11 != var15)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    if(var15) { _fun0001_ip = 16; continue _fun0001 }
case 14:
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot3;
                    var15 = 15;
                    var15 = var18[var15];
                    var18 = var17.bind(var5)(var15);
                    var17 = var18.shouldShowReverifyForLargeGuildId;
                    var15 = var7;
                    var15 = var17.bind(var18)(var15);
                    if(var15) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    var17 = _closure1_slot1;
                    var15 = _closure1_slot3;
                    var19 = 13;
                    var15 = var15[var19];
                    var18 = var17.bind(var5)(var15);
                    var17 = var18.wait;
                    var15 = function() {
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
                    var15 = var17.bind(var18)(var15);
case 19: // try_start_0
                    var17 = _closure1_slot12;
                    var15 = var17.getGuildId;
                    var18 = var15.bind(var17)();
                    var17 = var7;
                    var15 = null;
                    if(!(var17 === var18)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var21 = _closure1_slot10;
                    var18 = var21.getGuild;
                    var17 = var7;
                    var17 = var18.bind(var21)(var17);
                    var17 = var11 != var17;
                    var15 = null;
                    if(!var17) { _fun0001_ip = 20; continue _fun0001 }
case 22:
                    var21 = _closure1_slot11;
                    var18 = var21.getChannelId;
                    var17 = var7;
                    var15 = var18.bind(var21)(var17);
case 20:
                    var20 = var15;
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot3;
                    var15 = 17;
                    var15 = var18[var15];
                    var15 = var17.bind(var5)(var15);
                    var18 = var15.HTTP;
                    var17 = var18.put;
                    var15 = {};
                    var26 = _closure1_slot15;
                    var25 = var26.GUILD_JOIN;
                    var21 = var7;
                    var21 = var25.bind(var26)(var21);
                    var15['url'] = var21;
                    var21 = {};
                    var26 = var10;
                    var21['lurker'] = var26;
                    var25 = null;
                    if(!var26) { _fun0001_ip = 23; continue _fun0001 }
case 24:
                    var27 = _closure1_slot7;
                    var26 = var27.getSessionId;
                    var25 = var26.bind(var27)();
case 23:
                    var21['session_id'] = var25;
                    var21['recommendation_load_id'] = var23;
                    var25 = var10;
                    var23 = null;
                    if(!var25) { _fun0001_ip = 25; continue _fun0001 }
case 26:
                    var25 = var24;
                    var25 = var11 != var25;
                    var23 = null;
                    if(!var25) { _fun0001_ip = 25; continue _fun0001 }
case 27:
                    var23 = var24;
case 25:
                    var21['location'] = var23;
                    var15['query'] = var21;
                    var21 = {};
                    var21['source'] = var22;
                    var15['context'] = var21;
                    var21 = true;
                    var15['oldFormErrors'] = var21;
                    var21 = {};
                    var15['body'] = var21;
                    var21 = false;
                    var15['rejectWithError'] = var21;
                    var15 = var17.bind(var18)(var15);
                    SaveGenerator(address=504);
case 28:
                    return var15;
case 29:
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=16);
                    if(var17) { _fun0001_ip = 30; continue _fun0001 }
case 31:
                    var16 = var15;
                    var17 = var15.body;
                    var17 = var17.join_request;
                    if(!(var11 != var17)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
                    var18 = _closure1_slot1;
                    var17 = _closure1_slot3;
                    var17 = var17[var19];
                    var21 = var18.bind(var5)(var17);
                    var18 = var21.dispatch;
                    var17 = {};
                    var22 = 'USER_GUILD_JOIN_REQUEST_UPDATE';
                    var17['type'] = var22;
                    var22 = var7;
                    var17['guildId'] = var22;
                    var22 = var16;
                    var22 = var22.body;
                    var22 = var22.join_request;
                    var17['request'] = var22;
                    var17 = var18.bind(var21)(var17);
case 32:
                    var21 = _closure1_slot10;
                    var18 = var21.getGuild;
                    var17 = var7;
                    var17 = var18.bind(var21)(var17);
                    if(!(var11 == var17)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
                    var17 = var16;
                    var17 = var17.body;
                    var17 = var17.show_verification_form;
                    if(var17) { _fun0001_ip = 36; continue _fun0001 }
case 34:
                    var17 = var16;
                    var17 = var17.body;
                    var17 = var17.welcome_screen;
                    if(!(var11 != var17)) { _fun0001_ip = 37; continue _fun0001 }
case 38:
                    var18 = _closure1_slot1;
                    var17 = _closure1_slot3;
                    var17 = var17[var19];
                    var21 = var18.bind(var5)(var17);
                    var18 = var21.dispatch;
                    var17 = {};
                    var22 = 'WELCOME_SCREEN_UPDATE';
                    var17['type'] = var22;
                    var22 = var16;
                    var23 = var22.body;
                    var23 = var23.id;
                    var17['guildId'] = var23;
                    var22 = var22.body;
                    var22 = var22.welcome_screen;
                    var17['welcomeScreen'] = var22;
                    var17 = var18.bind(var21)(var17);
case 37:
                    var17 = var16;
                    var17 = var17.body;
                    var17 = var17.approximate_presence_count;
                    if(!(var11 != var17)) { _fun0001_ip = 39; continue _fun0001 }
case 40:
                    var18 = _closure1_slot1;
                    var17 = _closure1_slot3;
                    var17 = var17[var19];
                    var19 = var18.bind(var5)(var17);
                    var18 = var19.dispatch;
                    var17 = {};
                    var21 = 'ONLINE_GUILD_MEMBER_COUNT_UPDATE';
                    var17['type'] = var21;
                    var21 = var16;
                    var22 = var21.body;
                    var22 = var22.id;
                    var17['guildId'] = var22;
                    var21 = var21.body;
                    var21 = var21.approximate_presence_count;
                    var17['count'] = var21;
                    var17 = var18.bind(var19)(var17);
case 39:
                    var17 = var10;
                    if(var17) { _fun0001_ip = 41; continue _fun0001 }
case 42:
                    var19 = _closure1_slot0;
                    var17 = _closure1_slot3;
                    var18 = 20;
                    var18 = var17[var18];
                    var19 = var19.bind(var5)(var18);
                    var18 = 19;
                    var18 = var17[var18];
                    var17 = var17.paths;
                    var17 = var19.bind(var5)(var18, var17);
                    SaveGenerator(address=867);
case 43:
                    return var17;
case 44:
                    ResumeGenerator(result_out_reg=16, return_bool_out_reg=17);
                    if(var18) { _fun0001_ip = 45; continue _fun0001 }
case 46:
                    var19 = var17.default;
                    var18 = {};
                    var21 = var7;
                    var18['guildId'] = var21;
                    var18['returnChannelId'] = var20;
                    var18 = var19.bind(var5)(var18);
                    SaveGenerator(address=903);
case 47:
                    return var18;
case 48:
                    ResumeGenerator(result_out_reg=17, return_bool_out_reg=18);
                    if(!var19) { _fun0001_ip = 41; continue _fun0001 }
case 49: // try_end0
                    return var18;
case 45:
                    return var17;
case 41: // try_start_1
                    var17 = var16;
case 50: // try_end1
                    return var17;
case 36: // try_start_2
                    var18 = _closure1_slot0;
                    var19 = _closure1_slot3;
                    var17 = 18;
                    var17 = var19[var17];
                    var19 = var18.bind(var5)(var17);
                    var18 = var19.transitionTo;
                    var21 = _closure1_slot19;
                    var20 = var21.GUILD_MEMBER_VERIFICATION;
                    var17 = var7;
                    var17 = var20.bind(var21)(var17);
                    var17 = var18.bind(var19)(var17);
case 51: // try_end2
                    return var16;
case 30:
                    return var15;
case 52: // catch_target0 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=14);
                    var6 = var15;
                    var15 = var15.body;
                    var13 = var15;
                    var16 = var11 == var15;
                    var15 = undefined;
                    if(var16) { _fun0001_ip = 53; continue _fun0001 }
case 54:
                    var15 = var13.code;
case 53:
                    var13 = _closure1_slot14;
                    var13 = var13.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED;
                    if(!(var15 === var13)) { _fun0001_ip = 55; continue _fun0001 }
case 56:
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var13 = 16;
                    var13 = var16[var13];
                    var16 = var15.bind(var5)(var13);
                    var15 = var16.openAgeGateModal;
                    var13 = _closure1_slot21;
                    var13 = var13.JOIN_LARGE_GUILD_UNDERAGE;
                    var13 = var15.bind(var16)(var13);
case 55:
                    var13 = var6;
                    var13 = var13.body;
                    var12 = var13;
                    var15 = var11 == var13;
                    var13 = undefined;
                    if(var15) { _fun0001_ip = 57; continue _fun0001 }
case 58:
                    var13 = var12.code;
case 57:
                    var12 = _closure1_slot14;
                    var12 = var12.TOO_MANY_USER_GUILDS;
                    if(!(var13 === var12)) { _fun0001_ip = 59; continue _fun0001 }
case 60:
                    var13 = _closure1_slot13;
                    var12 = var13.getCurrentUser;
                    var16 = var12.bind(var13)();
                    var14 = var16;
                    var15 = _closure1_slot1;
                    var17 = _closure1_slot3;
                    var13 = 21;
                    var13 = var17[var13];
                    var15 = var15.bind(var5)(var13);
                    var13 = var15.canUseIncreasedGuildCap;
                    var13 = var13.bind(var15)(var16);
                    var12 = var13;
                    if(var13) { _fun0001_ip = 61; continue _fun0001 }
case 62:
                    var13 = var14;
                    var15 = var11 == var13;
                    var13 = undefined;
                    if(var15) { _fun0001_ip = 63; continue _fun0001 }
case 64:
                    var15 = var14;
                    var14 = var15.isStaff;
                    var13 = var14.bind(var15)();
case 63:
                    var12 = var13;
case 61:
                    var13 = _closure1_slot22;
                    if(var12) { _fun0001_ip = 65; continue _fun0001 }
case 66:
                    var12 = _closure1_slot17;
                    _fun0001_ip = 67; continue _fun0001;
case 65:
                    var12 = _closure1_slot18;
case 67:
                    var12 = var13.bind(var5)(var12);
case 59:
                    var12 = var6;
                    var12 = var12.body;
                    var8 = var12;
                    var13 = var11 == var12;
                    var12 = undefined;
                    if(var13) { _fun0001_ip = 68; continue _fun0001 }
case 69:
                    var12 = var8.code;
case 68:
                    var8 = _closure1_slot14;
                    var8 = var8.GUILD_AT_CAPACITY;
                    if(!(var12 === var8)) { _fun0001_ip = 70; continue _fun0001 }
case 71:
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
case 70:
                    var8 = var10;
                    if(!var10) { _fun0001_ip = 72; continue _fun0001 }
case 73:
                    var10 = var6;
                    var10 = var10.body;
                    var9 = var10;
                    var11 = var11 == var10;
                    var10 = undefined;
                    if(var11) { _fun0001_ip = 74; continue _fun0001 }
case 75:
                    var10 = var9.code;
case 74:
                    var9 = _closure1_slot14;
                    var9 = var9.UNKNOWN_GUILD;
                    var8 = var10 === var9;
case 72:
                    if(!var8) { _fun0001_ip = 76; continue _fun0001 }
case 77:
                    var8 = _closure1_slot23;
                    var7 = var8.bind(var5)(var7);
case 76:
                    throw var6;
case 17:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var6 = 16;
                    var6 = var8[var6];
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.openAgeGateModal;
                    var6 = _closure1_slot21;
                    var6 = var6.JOIN_LARGE_GUILD_UNDERAGE;
                    var6 = var7.bind(var8)(var6);
                    var6 = global;
                    var8 = var6.Promise;
                    var6 = var8.prototype;
                    var7 = Object.create(var6, {constructor: {value: var8}});
                    var29 = function(arg1, arg2) {
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
                    var30 = var7;
                    var6 = new var30[var8](var29, var28);
                    var6 = var6 instanceof Object ? var6 : var7;
                    return var6;
case 16:
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
                    var29 = function(arg1, arg2) {
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
                    var30 = var4;
                    var3 = new var30[var5](var29, var28);
                    var3 = var3 instanceof Object ? var3 : var4;
                    return var3;
case 8:
                    return var2;
case 2:
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
            var3 = _closure1_slot10;
            var2 = var3.addConditionalChangeListener;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot10;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot0;
                    var4 = var2.bind(var3)(var1);
                    var1 = null;
                    var1 = var1 == var4;
                    if(var1) { _fun0002_ip = 78; continue _fun0002 }
case 4:
                    var3 = _closure3_slot0;
                    var2 = undefined;
                    var2 = var3.bind(var2)(var4);
                    var1 = false;
case 78:
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
    var4 = var8.bind(var1)(var4);
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
    var4 = var6.bind(var1)(var4);
    var8 = var4.AbortCodes;
    var _closure1_slot14 = var8;
    var8 = var4.Endpoints;
    var _closure1_slot15 = var8;
    var8 = var4.UserFlags;
    var _closure1_slot16 = var8;
    var8 = var4.MAX_USER_GUILDS;
    var _closure1_slot17 = var8;
    var8 = var4.MAX_USER_GUILDS_PREMIUM;
    var _closure1_slot18 = var8;
    var8 = var4.Routes;
    var _closure1_slot19 = var8;
    var4 = var4.AnalyticEvents;
    var _closure1_slot20 = var4;
    var4 = 10;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.AgeGateSource;
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 79; continue _fun0003 }
case 80:
                    var5 = _closure1_slot25;
                    var2 = _closure2_slot0;
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    SaveGenerator(address=35);
case 4:
                    return var2;
case 81:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 82; continue _fun0003 }
case 83:
                    var9 = var2.id;
                    var10 = _closure2_slot2;
                    var8 = null;
                    if(!(var8 == var10)) { _fun0003_ip = 84; continue _fun0003 }
case 85:
                    var6 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var5 = 22;
                    var5 = var11[var5];
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.getChannelIdForGuildTransition;
                    var10 = var5.bind(var6)(var9);
case 84:
                    var6 = _closure2_slot1;
                    var5 = var8 != var6;
                    if(!var5) { _fun0003_ip = 86; continue _fun0003 }
case 87:
                    var12 = _closure2_slot1;
                    var11 = var12.hasOwnProperty;
                    var9 = 'welcomeModalChannelId';
                    var5 = var11.bind(var12)(var9);
case 86:
                    if(!var5) { _fun0003_ip = 88; continue _fun0003 }
case 89:
                    var9 = _closure2_slot1;
                    var9 = var9.welcomeModalChannelId;
                    var5 = var8 == var9;
case 88:
                    if(!var5) { _fun0003_ip = 90; continue _fun0003 }
case 91:
                    var5 = {};
                    var14 = _closure2_slot1;
                    var15 = var5;
                    var9 = copyDataProperties(var15, var14);
                    var8 = var8 != var10;
                    var9 = undefined;
                    if(!var8) { _fun0003_ip = 92; continue _fun0003 }
case 93:
                    var9 = var10;
case 92:
                    var8 = 'welcomeModalChannelId';
                    var5[var8] = var9;
                    var6 = var5;
case 90:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var5 = 23;
                    var5 = var9[var5];
                    var5 = var8.bind(var4)(var5);
                    var9 = _closure1_slot19;
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
case 94:
                    return var3;
case 95:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 96; continue _fun0003 }
case 97:
                    return var4;
case 96:
                    return var3;
case 82:
                    return var2;
case 79:
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
        var1 = 24;
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
        var1 = 17;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var7 = _closure1_slot15;
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
        var1 = 17;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var7 = _closure1_slot15;
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
        var1 = 17;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var4 = var2.HTTP;
        var3 = var4.patch;
        var2 = {};
        var8 = _closure1_slot15;
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
        var1 = 17;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var4 = var2.HTTP;
        var3 = var4.patch;
        var2 = {};
        var8 = _closure1_slot15;
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
        var2 = 17;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var4 = var2.HTTP;
        var3 = var4.del;
        var2 = {};
        var6 = _closure1_slot15;
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
case 0:
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
            var1 = 25;
            var1 = var14[var1];
            var13 = undefined;
            var3 = var2.bind(var13)(var1);
            var2 = var3.patch;
            var1 = {};
            var15 = _closure1_slot15;
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
            var5 = 26;
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
            if(!var12) { _fun0004_ip = 12; continue _fun0004 }
case 98:
            var9 = var11;
case 12:
            var5['duration'] = var9;
            var11 = var6 != var10;
            var9 = null;
            if(!var11) { _fun0004_ip = 99; continue _fun0004 }
case 100:
            var9 = var10;
case 99:
            var5['reason'] = var9;
            var5['communication_disabled_until'] = var8;
            var8 = var6 != var7;
            var6 = null;
            if(!var8) { _fun0004_ip = 101; continue _fun0004 }
case 102:
            var6 = var7;
case 101:
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
        var1 = 17;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.put;
        var1 = {};
        var7 = _closure1_slot15;
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
        var1 = 17;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        var7 = _closure1_slot15;
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
        var1 = 17;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var6 = _closure1_slot15;
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 103; continue _fun0005 }
case 80:
                    var5 = undefined;
                    var8 = undefined;
                    var3 = {};
                    var2 = _closure2_slot1;
                    var9 = null;
                    if(!(var9 != var2)) { _fun0005_ip = 104; continue _fun0005 }
case 105:
                    var4 = _closure2_slot1;
                    var2 = '';
                    if(!(var2 === var4)) { _fun0005_ip = 87; continue _fun0005 }
case 104:
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
                    _fun0005_ip = 106; continue _fun0005;
case 87:
                    var2 = _closure2_slot1;
case 106:
                    var3['name'] = var2;
                    var2 = _closure2_slot2;
                    var7 = var9 != var2;
                    var2 = 0;
                    if(!var7) { _fun0005_ip = 11; continue _fun0005 }
case 107:
                    var2 = _closure2_slot2;
case 11:
                    var3['color'] = var2;
                    var2 = _closure2_slot3;
                    if(!(var9 == var2)) { _fun0005_ip = 90; continue _fun0005 }
case 108:
                    var2 = {'primary_color': null, 'secondary_color': null, 'tertiary_color': null};
                    var7 = _closure2_slot2;
                    var7 = var9 != var7;
                    var4 = 0;
                    if(!var7) { _fun0005_ip = 109; continue _fun0005 }
case 92:
                    var4 = _closure2_slot2;
case 109:
                    var2['primary_color'] = var4;
                    _fun0005_ip = 110; continue _fun0005;
case 90:
                    var2 = _closure2_slot3;
case 110:
                    var3['colors'] = var2;
                    var7 = _closure1_slot2;
                    var9 = _closure1_slot3;
                    var4 = 27;
                    var4 = var9[var4];
                    var4 = var7.bind(var5)(var4);
                    var4 = var4.NONE;
                    var3['permissions'] = var4;
                    var8 = var3;
case 111: // try_start_0
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var3 = 17;
                    var3 = var7[var3];
                    var3 = var4.bind(var5)(var3);
                    var7 = var3.HTTP;
                    var4 = var7.post;
                    var3 = {};
                    var11 = _closure1_slot15;
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
                    SaveGenerator(address=304);
case 112:
                    return var3;
case 113:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 114; continue _fun0005 }
case 115:
                    var4 = var3.body;
                    var8 = _closure1_slot2;
                    var9 = _closure1_slot3;
                    var7 = 28;
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
                    var7 = 29;
                    var7 = var9[var7];
                    var8 = var8.bind(var5)(var7);
                    var7 = var8.checkGuildTemplateDirty;
                    var6 = _closure2_slot0;
                    var6 = var7.bind(var8)(var6);
case 116: // try_end0
                    return var4;
case 114:
                    return var3;
case 117: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var2 = 30;
                    var2 = var6[var2];
                    var2 = var3.bind(var5)(var2);
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var14 = var3;
                    var13 = var4;
                    var2 = new var14[var2](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 103:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 118; continue _fun0006 }
case 80:
                    var8 = _closure2_slot2;
                    var2 = var8.icon;
                    var10 = var8.unicodeEmoji;
                    var7 = _closure1_slot5;
                    var5 = _closure1_slot4;
                    var6 = undefined;
                    var9 = var7.bind(var6)(var8, var5);
                    var5 = null;
                    if(!(var5 !== var2)) { _fun0006_ip = 119; continue _fun0006 }
case 120:
                    var5 = var5 != var2;
                    var11 = undefined;
                    if(!var5) { _fun0006_ip = 121; continue _fun0006 }
case 122:
                    var7 = var2.startsWith;
                    var5 = 'data:';
                    var5 = var7.bind(var2)(var5);
                    var11 = undefined;
                    if(!var5) { _fun0006_ip = 121; continue _fun0006 }
case 119:
                    var11 = var2;
case 121:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var2 = 17;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var7 = var2.HTTP;
                    var5 = var7.patch;
                    var2 = {};
                    var14 = _closure1_slot15;
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
case 123:
                    return var2;
case 124:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 125; continue _fun0006 }
case 126:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 29;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.checkGuildTemplateDirty;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 125:
                    return var2;
case 118:
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
        var1 = 17;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var7 = _closure1_slot15;
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
        var1 = 17;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var5 = var3.HTTP;
        var4 = var5.del;
        var3 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
        var8 = _closure1_slot15;
        var7 = var8.GUILD_ROLE;
        var6 = arg2;
        var6 = var7.bind(var8)(var9, var6);
        var3['url'] = var6;
        var4 = var4.bind(var5)(var3);
        var3 = var4.then;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 29;
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 127; continue _fun0007 }
case 80:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 17;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var7 = var2.HTTP;
                    var5 = var7.patch;
                    var2 = {};
                    var10 = _closure1_slot15;
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
case 128:
                    return var2;
case 129:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0007_ip = 130; continue _fun0007 }
case 131:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 29;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.checkGuildTemplateDirty;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 130:
                    return var2;
case 127:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 127; continue _fun0008 }
case 80:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 17;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var7 = var2.HTTP;
                    var5 = var7.patch;
                    var2 = {};
                    var10 = _closure1_slot15;
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
case 128:
                    return var2;
case 129:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0008_ip = 130; continue _fun0008 }
case 131:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 29;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.checkGuildTemplateDirty;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 130:
                    return var2;
case 127:
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
case 0:
            var9 = arg1;
            var6 = arguments[1];
            var5 = arguments[2];
            var4 = arguments[3];
            var3 = undefined;
            if(!(var6 === var3)) { _fun0009_ip = 132; continue _fun0009 }
case 3:
            var6 = '';
case 132:
            if(!(var5 === var3)) { _fun0009_ip = 105; continue _fun0009 }
case 133:
            var5 = 10;
case 105:
            if(!(var4 === var3)) { _fun0009_ip = 81; continue _fun0009 }
case 4:
            var4 = true;
case 81:
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
            if(var8) { _fun0009_ip = 131; continue _fun0009 }
case 134:
            var8 = new Array(1);
            var8[0] = var9;
            var7 = var8;
case 131:
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
case 0:
            var1 = arg2;
            var2 = null;
            if(!(var2 == var1)) { _fun0010_ip = 135; continue _fun0010 }
case 136:
            var1 = {};
case 135:
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
case 0:
            var9 = arg1;
            var7 = arg2;
            var4 = arguments[2];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0011_ip = 137; continue _fun0011 }
case 138:
            var4 = true;
case 137:
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
            if(var8) { _fun0011_ip = 139; continue _fun0011 }
case 140:
            var8 = new Array(1);
            var8[0] = var9;
            var6 = var8;
case 139:
            var1['guildIds'] = var6;
            var6 = var5.Array;
            var5 = var6.isArray;
            var6 = var5.bind(var6)(var7);
            var5 = var7;
            if(var6) { _fun0011_ip = 141; continue _fun0011 }
case 142:
            var6 = new Array(1);
            var6[0] = var7;
            var5 = var6;
case 141:
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
case 0:
            var4 = arg1;
            var8 = arg2;
            var7 = arguments[2];
            var6 = arguments[3];
            var1 = undefined;
            if(!(var7 === var1)) { _fun0012_ip = 143; continue _fun0012 }
case 3:
            var7 = false;
case 143:
            if(!(var6 === var1)) { _fun0012_ip = 133; continue _fun0012 }
case 144:
            var6 = false;
case 133:
            if(!(var4 !== var8)) { _fun0012_ip = 145; continue _fun0012 }
case 146:
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
case 145:
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
        var1 = 31;
        var5 = var4[var1];
        var1 = undefined;
        var6 = var3.bind(var1)(var5);
        var5 = var6.track;
        var2 = _closure1_slot20;
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
case 0:
            var5 = arg1;
            var3 = _closure1_slot8;
            var1 = var3.isFolderExpanded;
            var9 = var1.bind(var3)(var5);
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 31;
            var3 = var3[var1];
            var1 = undefined;
            var7 = var4.bind(var1)(var3);
            var6 = var7.track;
            var3 = _closure1_slot20;
            var4 = var3.GUILD_FOLDER_CLICKED;
            var3 = {};
            var8 = 'sidebar';
            var3['source'] = var8;
            var8 = 'expanded';
            if(!var9) { _fun0013_ip = 140; continue _fun0013 }
case 147:
            var8 = 'collapsed';
case 140:
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
case 0:
            var8 = arg1;
            var4 = _closure1_slot0;
            var1 = _closure1_slot3;
            var6 = 15;
            var3 = var1[var6];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.shouldShowAgeVerificationForLargeGuildId;
            var3 = var3.bind(var4)(var8);
            var4 = null;
            if(!(var4 != var8)) { _fun0014_ip = 148; continue _fun0014 }
case 149:
            if(var3) { _fun0014_ip = 148; continue _fun0014 }
case 150:
            var5 = _closure1_slot9;
            var3 = var5.getDefaultChannel;
            var3 = var3.bind(var5)(var8);
            if(!(var4 != var3)) { _fun0014_ip = 151; continue _fun0014 }
case 152:
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var4 = var4[var6];
            var5 = var5.bind(var1)(var4);
            var4 = var5.isChannelContentGated;
            var4 = var4.bind(var5)(var3);
            if(var4) { _fun0014_ip = 151; continue _fun0014 }
case 129:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var4 = 18;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.transitionTo;
            var7 = _closure1_slot19;
            var6 = var7.CHANNEL;
            var3 = var3.id;
            var3 = var6.bind(var7)(var8, var3);
            var3 = var4.bind(var5)(var3);
            _fun0014_ip = 97; continue _fun0014;
case 151:
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var3 = 18;
            var3 = var5[var3];
            var6 = var4.bind(var1)(var3);
            var5 = var6.transitionTo;
            var3 = _closure1_slot19;
            var4 = var3.FRIENDS;
            var3 = {'navigationReplace': false, 'openChannel': true};
            var3 = var5.bind(var6)(var4, var3);
            _fun0014_ip = 97; continue _fun0014;
case 148:
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var3 = 18;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.transitionTo;
            var2 = _closure1_slot19;
            var3 = var2.FRIENDS;
            var2 = {'navigationReplace': false, 'openChannel': true};
            var2 = var4.bind(var5)(var3, var2);
case 97:
            return var1;
        }
    };
    var4['nsfwReturnToSafety'] = var8;
    var8 = function escapeToDefaultChannel(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var6 = arg1;
            var2 = _closure1_slot9;
            var1 = var2.getDefaultChannel;
            var1 = var1.bind(var2)(var6);
            var2 = null;
            if(!(var2 == var1)) { _fun0015_ip = 153; continue _fun0015 }
case 154:
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 18;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var3);
            var3 = var5.transitionTo;
            var2 = _closure1_slot19;
            var2 = var2.FRIENDS;
            var2 = var3.bind(var5)(var2);
            _fun0015_ip = 11; continue _fun0015;
case 153:
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 18;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.transitionTo;
            var5 = _closure1_slot19;
            var4 = var5.CHANNEL;
            var1 = var1.id;
            var1 = var4.bind(var5)(var6, var1);
            var1 = var2.bind(var3)(var1);
case 11:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0016_ip = 155; continue _fun0016 }
case 80:
                    var6 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var5 = _closure1_slot15;
                    var3 = var5.GUILD_APPLICATIONS;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var5)(var2);
                    var6['url'] = var2;
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0016_ip = 147; continue _fun0016 }
case 156:
                    var2 = {};
                    var3 = _closure2_slot1;
                    var2['channel_id'] = var3;
                    var6['query'] = var2;
case 147:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 17;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var2 = var5.get;
                    var2 = var2.bind(var5)(var6);
                    SaveGenerator(address=118);
case 157:
                    return var2;
case 158:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0016_ip = 159; continue _fun0016 }
case 160:
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
case 159:
                    return var2;
case 155:
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
case 0:
            var4 = arguments[1];
            var3 = arguments[2];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = undefined;
            if(!(var4 === var2)) { _fun0017_ip = 154; continue _fun0017 }
case 161:
            var4 = 1000;
case 154:
            var _closure2_slot1 = var4;
            if(!(var3 === var2)) { _fun0017_ip = 162; continue _fun0017 }
case 81:
            var3 = null;
case 162:
            var _closure2_slot2 = var3;
            var3 = _closure1_slot6;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0018_ip = 163; continue _fun0018 }
case 80:
                        var6 = {};
                        var2 = _closure2_slot1;
                        var6['limit'] = var2;
                        var3 = _closure2_slot2;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0018_ip = 164; continue _fun0018 }
case 4:
                        var2 = _closure2_slot2;
                        var6['after'] = var2;
case 164:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var2 = 17;
                        var2 = var3[var2];
                        var3 = undefined;
                        var2 = var4.bind(var3)(var2);
                        var5 = var2.HTTP;
                        var4 = var5.get;
                        var2 = {};
                        var9 = _closure1_slot15;
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
                        SaveGenerator(address=147);
case 165:
                        return var2;
case 166:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0018_ip = 167; continue _fun0018 }
case 168:
                        return var3;
case 167:
                        return var2;
case 163:
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
case 0:
            var3 = arguments[3];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = arg3;
            var _closure2_slot2 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0019_ip = 81; continue _fun0019 }
case 169:
            var3 = 10;
case 81:
            var _closure2_slot3 = var3;
            var3 = _closure1_slot6;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0020_ip = 170; continue _fun0020 }
case 80:
                        var6 = {};
                        var2 = _closure2_slot3;
                        var6['limit'] = var2;
                        var2 = _closure2_slot2;
                        var3 = null;
                        var2 = var3 != var2;
                        if(!var2) { _fun0020_ip = 171; continue _fun0020 }
case 172:
                        var4 = _closure2_slot2;
                        var5 = var4.length;
                        var4 = 0;
                        var2 = var5 > var4;
case 171:
                        if(!var2) { _fun0020_ip = 173; continue _fun0020 }
case 150:
                        var2 = _closure2_slot2;
                        var6['user_ids'] = var2;
case 173:
                        var2 = _closure2_slot1;
                        var2 = var3 != var2;
                        if(!var2) { _fun0020_ip = 174; continue _fun0020 }
case 175:
                        var4 = _closure2_slot1;
                        var3 = var4.trim;
                        var3 = var3.bind(var4)();
                        var4 = var3.length;
                        var3 = 0;
                        var2 = var4 > var3;
case 174:
                        if(!var2) { _fun0020_ip = 176; continue _fun0020 }
case 177:
                        var2 = _closure2_slot1;
                        var6['query'] = var2;
case 176:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var2 = 17;
                        var2 = var3[var2];
                        var3 = undefined;
                        var2 = var4.bind(var3)(var2);
                        var5 = var2.HTTP;
                        var4 = var5.get;
                        var2 = {};
                        var9 = _closure1_slot15;
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
                        SaveGenerator(address=217);
case 178:
                        return var2;
case 102:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0020_ip = 179; continue _fun0020 }
case 180:
                        return var3;
case 179:
                        return var2;
case 170:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0021_ip = 158; continue _fun0021 }
case 181:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 17;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.get;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var8 = _closure1_slot15;
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
case 129:
                    return var2;
case 182:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0021_ip = 183; continue _fun0021 }
case 184:
                    return var3;
case 183:
                    return var2;
case 158:
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
        var2 = 17;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        var7 = _closure1_slot15;
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0022_ip = 185; continue _fun0022 }
case 181:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 17;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.post;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var9 = _closure1_slot15;
                    var8 = var9.GUILD_ROLE_CONNECTIONS_ASSIGN;
                    var7 = _closure2_slot0;
                    var6 = _closure2_slot1;
                    var6 = var8.bind(var9)(var7, var6);
                    var2['url'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=95);
case 186:
                    return var2;
case 187:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0022_ip = 129; continue _fun0022 }
case 87:
                    return var3;
case 129:
                    return var2;
case 185:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0023_ip = 185; continue _fun0023 }
case 181:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 17;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.post;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var9 = _closure1_slot15;
                    var8 = var9.GUILD_ROLE_CONNECTIONS_UNASSIGN;
                    var7 = _closure2_slot0;
                    var6 = _closure2_slot1;
                    var6 = var8.bind(var9)(var7, var6);
                    var2['url'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=95);
case 186:
                    return var2;
case 187:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0023_ip = 129; continue _fun0023 }
case 87:
                    return var3;
case 129:
                    return var2;
case 185:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0024_ip = 182; continue _fun0024 }
case 181:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 17;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var7 = _closure1_slot15;
                    var6 = var7.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS;
                    var5 = _closure2_slot0;
                    var5 = var6.bind(var7)(var5);
                    var2['url'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=89);
case 121:
                    return var2;
case 188:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0024_ip = 177; continue _fun0024 }
case 187:
                    var3 = var2.body;
                    return var3;
case 177:
                    return var2;
case 182:
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
    var5 = 32;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'actions/GuildActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['waitForGuild'] = var2;
    return var1;
})();