// app/modules/create_guild/native/components/AcceptInviteContainer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var7 = var6[var10];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildMemberFlags;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['flex'] = var9;
    var9 = {};
    var10 = 8;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SURFACE_HIGH;
    var9['backgroundColor'] = var10;
    var4['paddingContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/create_guild/native/components/AcceptInviteContainer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AcceptInviteContainer(arg1) {
        var4 = arg1;
        var12 = var4.code;
        var _closure2_slot0 = var12;
        var11 = var4.onPressClose;
        var _closure2_slot1 = var11;
        var14 = var4.inviteInstanceId;
        var _closure2_slot2 = var14;
        var3 = {'code': 0, 'onPressClose': 0, 'inviteInstanceId': 0};
        var19 = null;
        var20 = var3;
        var1 = silentSetPrototypeOf(var20, var19);
        var20 = {};
        var19 = var4;
        var18 = var3;
        var7 = copyDataProperties(var20, var19, var18);
        var3 = _closure1_slot10;
        var4 = undefined;
        var9 = var3.bind(var4)();
        var17 = var7.isRegistration;
        var _closure2_slot3 = var17;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 9;
        var3 = var8[var3];
        var5 = var6.bind(var4)(var3);
        var3 = var5.useNavigation;
        var3 = var3.bind(var5)();
        var _closure2_slot4 = var3;
        var5 = 10;
        var5 = var8[var5];
        var15 = var6.bind(var4)(var5);
        var13 = var15.useStateFromStoresObject;
        var5 = _closure1_slot7;
        var10 = new Array(3);
        var10[0] = var5;
        var5 = _closure1_slot5;
        var10[1] = var5;
        var5 = _closure1_slot6;
        var10[2] = var5;
        var5 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var5 = _closure1_slot7;
                var2 = var5.getInvite;
                var3 = _closure2_slot0;
                var6 = var2.bind(var5)(var3);
                var2 = var5.getInviteError;
                var5 = var2.bind(var5)(var3);
                var8 = null;
                var3 = var8 == var6;
                var2 = undefined;
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = var6.guild;
case 2:
                var3 = var8 != var2;
                if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var10 = _closure1_slot6;
                var7 = var10.getGuild;
                var2 = var6.guild;
                var2 = var2.id;
                var2 = var7.bind(var10)(var2);
                var3 = var8 != var2;
case 4:
                var7 = var8 == var6;
                var2 = undefined;
                if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var2 = var6.guild;
case 6:
                var7 = var8 != var2;
                var2 = null;
                if(!var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var10 = _closure1_slot5;
                var7 = var10.getSelfMember;
                var4 = var6.guild;
                var4 = var4.id;
                var2 = var7.bind(var10)(var4);
case 8:
                var4 = false;
                if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var11 = var8 == var6;
                var7 = undefined;
                if(var11) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                var7 = var6.roles;
case 12:
                var7 = var8 != var7;
                var4 = false;
                if(!var7) { _fun0001_ip = 10; continue _fun0001 }
case 14:
                var7 = var6.roles;
                var11 = var7.length;
                var7 = 0;
                var7 = var11 > var7;
                var4 = false;
                if(!var7) { _fun0001_ip = 10; continue _fun0001 }
case 15:
                var7 = global;
                var7 = var7.Set;
                var10 = var8 == var2;
                var9 = undefined;
                if(var10) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                var9 = var2.roles;
case 16:
                if(!(var8 == var9)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                var9 = new Array(0);
case 18:
                var8 = var7.prototype;
                var8 = Object.create(var8, {constructor: {value: var7}});
                var13 = var8;
                var12 = var9;
                var7 = new var13[var7](var12, var11);
                var7 = var7 instanceof Object ? var7 : var8;
                var _closure3_slot0 = var7;
                var8 = var6.roles;
                var7 = var8.some;
                var1 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.has;
                    var1 = arg1;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    return var1;
                };
                var4 = var7.bind(var8)(var1);
case 10:
                var1 = {};
                var1['invite'] = var6;
                var1['inviteError'] = var5;
                if(!var3) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                var3 = !var4;
case 20:
                var1['isGuildMember'] = var3;
                var1['guildMember'] = var2;
                return var1;
            }
        };
        var5 = var13.bind(var15)(var10, var5);
        var _closure2_slot5 = var5;
        var13 = _closure1_slot4;
        var15 = var13.useLayoutEffect;
        var10 = new Array(3);
        var10[0] = var5;
        var10[1] = var3;
        var10[2] = var11;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure2_slot4;
                var2 = var3.setOptions;
                var1 = {};
                var5 = _closure2_slot5;
                var6 = var5.invite;
                var5 = null;
                if(!(var5 == var6)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 11;
                var6 = var6[var5];
                var5 = undefined;
                var6 = var7.bind(var5)(var6);
                var5 = var6.getHeaderBackButton;
                var4 = _closure2_slot1;
                var4 = var5.bind(var6)(var4);
                _fun0002_ip = 24; continue _fun0002;
case 22:
                var4 = function() {
                    var1 = null;
                    return var1;
                };
case 24:
                var1['headerLeft'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var3 = var15.bind(var13)(var3, var10);
        var16 = var13.useCallback;
        var3 = _closure1_slot3;
        var10 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var3 = _closure2_slot5;
                    var6 = var3.guildMember;
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                    var4 = null;
                    if(!(var4 != var6)) { _fun0003_ip = 27; continue _fun0003 }
case 29:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 12;
                    var3 = var5[var3];
                    var5 = undefined;
                    var8 = var7.bind(var5)(var3);
                    var7 = var8.hasFlag;
                    var3 = var6.flags;
                    var9 = var4 != var3;
                    var4 = 0;
                    if(!var9) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var4 = var3;
case 30:
                    var3 = _closure1_slot8;
                    var3 = var3.COMPLETED_ONBOARDING;
                    var3 = var7.bind(var8)(var4, var3);
                    if(var3) { _fun0003_ip = 27; continue _fun0003 }
case 32:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 14;
                    var3 = var2[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = 13;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var2 = var4.bind(var5)(var3, var2);
                    SaveGenerator(address=151);
case 33:
                    return var2;
case 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 15; continue _fun0003 }
case 35:
                    var4 = var2.default;
                    var3 = {};
                    var6 = var6.guildId;
                    var3['guildId'] = var6;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=182);
case 36:
                    return var3;
case 37:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(!var4) { _fun0003_ip = 27; continue _fun0003 }
case 38:
                    return var3;
case 15:
                    return var2;
case 27:
                    var2 = undefined;
                    return var2;
case 25:
                    return var1;
                }
            };
            return var1;
        };
        var15 = var3.bind(var4)(var10);
        var10 = new Array(2);
        var10[0] = var17;
        var10[1] = var5;
        var15 = var16.bind(var13)(var15, var10);
        var _closure2_slot6 = var15;
        var10 = var13.useCallback;
        var2 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                    var3 = undefined;
                    var _closure4_slot0 = var3;
                    var4 = _closure2_slot5;
                    var7 = var4.isGuildMember;
                    var6 = var4.invite;
                    var4 = function() {
                        var4 = _closure1_slot3;
                        var3 = undefined;
                        var2 = function* (arg1) {
                            var1 = function* anon_0_(arg1) {
                                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                    StartGenerator();
                                    var6 = arg1;
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                                    var _closure7_slot0 = var6;
                                    var2 = undefined;
                                    var7 = undefined;
                                    var4 = null;
                                    if(!(var4 == var6)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                                    var3 = _closure2_slot1;
                                    var3 = var3.bind(var2)();
                                    _fun0005_ip = 39; continue _fun0005;
case 43:
                                    var9 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var10 = 15;
                                    var8 = var8[var10];
                                    var9 = var9.bind(var2)(var8);
                                    var8 = var9.isGuildScheduledEventInviteEmbed;
                                    var8 = var8.bind(var9)(var6);
                                    if(var8) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                                    var9 = var6.guild;
                                    var11 = var4 == var9;
                                    var8 = undefined;
                                    if(var11) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                                    var8 = var9.id;
case 47:
                                    var7 = var8;
                                    var9 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var8 = var8[var10];
                                    var9 = var9.bind(var2)(var8);
                                    var8 = var9.isRoleSubscriptionInvite;
                                    var8 = var8.bind(var9)(var6);
                                    if(!var8) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                                    var8 = var7;
                                    if(!(var4 != var8)) { _fun0005_ip = 49; continue _fun0005 }
case 11: // try_start_0
                                    var9 = _closure1_slot1;
                                    var10 = _closure1_slot2;
                                    var8 = 17;
                                    var8 = var10[var8];
                                    var9 = var9.bind(var2)(var8);
                                    var8 = var9.performRoleSubscriptionUpsellRedirect;
                                    var7 = var8.bind(var9)(var7);
                                    SaveGenerator(address=180);
case 51:
                                    return var7;
case 36:
                                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                                    if(var8) { _fun0005_ip = 38; continue _fun0005 }
case 52: // try_end0
                                    _fun0005_ip = 49; continue _fun0005;
case 38:
                                    return var7;
case 15: // catch_target0
                                    CatchBlockStart(arg_register=6);
case 49:
                                    var7 = var6.channel;
                                    if(!(var4 == var7)) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                                    var7 = _closure2_slot1;
                                    var7 = var7.bind(var2)();
                                    _fun0005_ip = 39; continue _fun0005;
case 53:
                                    var7 = _closure2_slot1;
                                    var7 = var7.bind(var2)();
                                    var7 = global;
                                    var8 = var7.setTimeout;
                                    var7 = function() {
                                        var3 = _closure1_slot1;
                                        var2 = _closure1_slot2;
                                        var1 = 18;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var4 = var3.bind(var1)(var2);
                                        var3 = var4.transitionToInvite;
                                        var2 = _closure7_slot0;
                                        var2 = var3.bind(var4)(var2);
                                        return var1;
                                    };
                                    var5 = 1;
                                    var5 = var8.bind(var2)(var7, var5);
case 39:
                                    return var2;
case 45:
                                    var7 = var4 == var6;
                                    var5 = undefined;
                                    if(var7) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                                    var5 = var6.guild_scheduled_event;
case 55:
                                    if(!(var4 != var5)) { _fun0005_ip = 57; continue _fun0005 }
case 58:
                                    var4 = _closure2_slot1;
                                    var4 = var4.bind(var2)();
                                    var4 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var3 = 16;
                                    var3 = var6[var3];
                                    var4 = var4.bind(var2)(var3);
                                    var3 = var4.transitionToEventDetailsFromInvite;
                                    var3 = var3.bind(var4)(var5);
                                    var3 = undefined;
                                    return var3;
case 57:
                                    return var2;
case 41:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var2 = var4.bind(var3)(var2);
                        var _closure5_slot0 = var2;
                        var1 = function() {
                            var1 = undefined;
                            var4 = _closure5_slot0;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        return var1;
                    };
                    var5 = var4.bind(var3)();
                    _closure4_slot0 = var5;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 19;
                    var8 = var11[var8];
                    var10 = var10.bind(var3)(var8);
                    var8 = var10.handleNSFWGuildInvite;
                    var8 = var8.bind(var10)(var6);
                    if(var8) { _fun0004_ip = 59; continue _fun0004 }
case 60:
                    if(var7) { _fun0004_ip = 61; continue _fun0004 }
case 62:
                    var12 = null;
                    if(!(var12 != var6)) { _fun0004_ip = 61; continue _fun0004 }
case 63:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 18;
                    var4 = var8[var4];
                    var8 = var7.bind(var3)(var4);
                    var7 = var8.acceptInvite;
                    var4 = {};
                    var10 = var6.code;
                    var4['inviteKey'] = var10;
                    var10 = {};
                    var11 = 'Accept Invite Page';
                    var10['location'] = var11;
                    var11 = _closure2_slot2;
                    if(!(var12 == var11)) { _fun0004_ip = 64; continue _fun0004 }
case 65:
                    var11 = {};
                    _fun0004_ip = 66; continue _fun0004;
case 64:
                    var12 = {};
                    var13 = _closure2_slot2;
                    var12['invite_instance_id'] = var13;
                    var11 = var12;
case 66:
                    var15 = var10;
                    var14 = var11;
                    var11 = copyDataProperties(var15, var14);
                    var4['context'] = var10;
                    var9 = function callback(arg1) {
                        var3 = _closure4_slot0;
                        var1 = undefined;
                        var2 = arg1;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var4['callback'] = var9;
                    var4 = var7.bind(var8)(var4);
                    _fun0004_ip = 67; continue _fun0004;
case 61:
                    var4 = _closure2_slot6;
                    var4 = var4.bind(var3)();
                    SaveGenerator(address=222);
case 68:
                    return var4;
case 18:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0004_ip = 69; continue _fun0004 }
case 70:
                    var5 = var5.bind(var3)(var6);
case 67:
                    return var3;
case 69:
                    return var4;
case 59:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var3)();
                    return var2;
case 39:
                    return var1;
                }
            };
            return var1;
        };
        var3 = var3.bind(var4)(var2);
        var2 = new Array(4);
        var2[0] = var5;
        var2[1] = var15;
        var2[2] = var11;
        var2[3] = var14;
        var10 = var10.bind(var13)(var3, var2);
        var3 = _closure1_slot9;
        var2 = _closure1_slot1;
        var1 = 20;
        var1 = var8[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['code'] = var12;
        var1['onPressClose'] = var11;
        var1['onPressJoin'] = var10;
        var20 = var1;
        var19 = var7;
        var7 = copyDataProperties(var20, var19);
        var20 = var1;
        var19 = var5;
        var5 = copyDataProperties(var20, var19);
        var7 = var3.bind(var4)(var2, var1);
        var1 = 21;
        var1 = var8[var1];
        var1 = var6.bind(var4)(var1);
        var2 = var1.SafeAreaPaddingView;
        var1 = {};
        var10 = var9.flex;
        var5 = new Array(2);
        var5[0] = var10;
        var9 = var9.paddingContainer;
        var5[1] = var9;
        var1['style'] = var5;
        var5 = true;
        var1['bottom'] = var5;
        var5 = 22;
        var5 = var8[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.ThemeContextProvider;
        var5 = {};
        var8 = 'darker';
        var5['theme'] = var8;
        var5['children'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();