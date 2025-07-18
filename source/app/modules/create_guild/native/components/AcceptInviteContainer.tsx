// app/modules/create_guild/native/components/AcceptInviteContainer.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
    var10 = var10.BG_SURFACE_RAISED;
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
        var1 = null;
        var3 = Object.create(var1);
        var1 = 0;
        var3['code'] = var1;
        var3['onPressClose'] = var1;
        var19 = {};
        var18 = var4;
        var17 = var3;
        var7 = copyDataProperties(var19, var18, var17);
        var3 = _closure1_slot10;
        var4 = undefined;
        var9 = var3.bind(var4)();
        var16 = var7.isRegistration;
        var _closure2_slot2 = var16;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 9;
        var3 = var8[var3];
        var5 = var6.bind(var4)(var3);
        var3 = var5.useNavigation;
        var3 = var3.bind(var5)();
        var _closure2_slot3 = var3;
        var5 = 10;
        var5 = var8[var5];
        var14 = var6.bind(var4)(var5);
        var13 = var14.useStateFromStoresObject;
        var5 = _closure1_slot7;
        var10 = new Array(3);
        var10[0] = var5;
        var5 = _closure1_slot5;
        var10[1] = var5;
        var5 = _closure1_slot6;
        var10[2] = var5;
        var5 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var6 = _closure1_slot7;
                var1 = var6.getInvite;
                var5 = _closure2_slot0;
                var3 = var1.bind(var6)(var5);
                var1 = {};
                var1['invite'] = var3;
                var2 = var6.getInviteError;
                var2 = var2.bind(var6)(var5);
                var1['inviteError'] = var2;
                var2 = null;
                var7 = var2 == var3;
                var6 = undefined;
                if(var7) { _fun0001_ip = 64; continue _fun0001 }
 59:
                var6 = var3.guild;
 64:
                var6 = var2 != var6;
                if(!var6) { _fun0001_ip = 99; continue _fun0001 }
 71:
                var9 = _closure1_slot6;
                var8 = var9.getGuild;
                var7 = var3.guild;
                var7 = var7.id;
                var7 = var8.bind(var9)(var7);
                var6 = var2 != var7;
 99:
                var1['isGuildMember'] = var6;
                var6 = var2 == var3;
                var5 = undefined;
                if(var6) { _fun0001_ip = 118; continue _fun0001 }
 113:
                var5 = var3.guild;
 118:
                var5 = var2 != var5;
                var2 = null;
                if(!var5) { _fun0001_ip = 152; continue _fun0001 }
 127:
                var5 = _closure1_slot5;
                var4 = var5.getSelfMember;
                var3 = var3.guild;
                var3 = var3.id;
                var2 = var4.bind(var5)(var3);
 152:
                var1['guildMember'] = var2;
                return var1;
            }
        };
        var5 = var13.bind(var14)(var10, var5);
        var _closure2_slot4 = var5;
        var13 = _closure1_slot4;
        var14 = var13.useLayoutEffect;
        var10 = new Array(3);
        var10[0] = var5;
        var10[1] = var3;
        var10[2] = var11;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure2_slot3;
                var2 = var3.setOptions;
                var1 = {};
                var5 = _closure2_slot4;
                var6 = var5.invite;
                var5 = null;
                if(!(var5 == var6)) { _fun0002_ip = 73; continue _fun0002 }
 31:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 11;
                var6 = var6[var5];
                var5 = undefined;
                var6 = var7.bind(var5)(var6);
                var5 = var6.getHeaderBackButton;
                var4 = _closure2_slot1;
                var4 = var5.bind(var6)(var4);
                _fun0002_ip = 82; continue _fun0002;
 73:
                var4 = function() {
                    var1 = null;
                    return var1;
                };
 82:
                var1['headerLeft'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var3 = var14.bind(var13)(var3, var10);
        var15 = var13.useCallback;
        var3 = _closure1_slot3;
        var10 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 199; continue _fun0003 }
 10:
                    var3 = _closure2_slot4;
                    var6 = var3.guildMember;
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0003_ip = 194; continue _fun0003 }
 33:
                    var4 = null;
                    if(!(var4 != var6)) { _fun0003_ip = 194; continue _fun0003 }
 42:
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
                    if(!var9) { _fun0003_ip = 90; continue _fun0003 }
 87:
                    var4 = var3;
 90:
                    var3 = _closure1_slot8;
                    var3 = var3.COMPLETED_ONBOARDING;
                    var3 = var7.bind(var8)(var4, var3);
                    if(var3) { _fun0003_ip = 194; continue _fun0003 }
 109:
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
 149:
                    return var2;
 151:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 191; continue _fun0003 }
 157:
                    var4 = var2.default;
                    var3 = {};
                    var6 = var6.guildId;
                    var3['guildId'] = var6;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=182);
 180:
                    return var3;
 182:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(!var4) { _fun0003_ip = 194; continue _fun0003 }
 188:
                    return var3;
 191:
                    return var2;
 194:
                    var2 = undefined;
                    return var2;
 199:
                    return var1;
                }
            };
            return var1;
        };
        var14 = var3.bind(var4)(var10);
        var10 = new Array(2);
        var10[0] = var16;
        var10[1] = var5;
        var14 = var15.bind(var13)(var14, var10);
        var _closure2_slot5 = var14;
        var10 = var13.useCallback;
        var2 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 211; continue _fun0004 }
 12:
                    var3 = undefined;
                    var _closure4_slot0 = var3;
                    var4 = _closure2_slot4;
                    var7 = var4.isGuildMember;
                    var6 = var4.invite;
                    var4 = function() {
                        var4 = _closure1_slot3;
                        var3 = undefined;
                        var2 = function* (arg1) {
                            var1 = function* anon_0_(arg1) {
                                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                    StartGenerator();
                                    var6 = arg1;
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0005_ip = 322; continue _fun0005 }
 15:
                                    var _closure7_slot0 = var6;
                                    var2 = undefined;
                                    var7 = undefined;
                                    var4 = null;
                                    if(!(var4 == var6)) { _fun0005_ip = 45; continue _fun0005 }
 29:
                                    var3 = _closure2_slot1;
                                    var3 = var3.bind(var2)();
                                    _fun0005_ip = 250; continue _fun0005;
 45:
                                    var9 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var10 = 15;
                                    var8 = var8[var10];
                                    var9 = var9.bind(var2)(var8);
                                    var8 = var9.isGuildScheduledEventInviteEmbed;
                                    var8 = var8.bind(var9)(var6);
                                    if(var8) { _fun0005_ip = 253; continue _fun0005 }
 85:
                                    var9 = var6.guild;
                                    var11 = var4 == var9;
                                    var8 = undefined;
                                    if(var11) { _fun0005_ip = 104; continue _fun0005 }
 99:
                                    var8 = var9.id;
 104:
                                    var7 = var8;
                                    var9 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var8 = var8[var10];
                                    var9 = var9.bind(var2)(var8);
                                    var8 = var9.isRoleSubscriptionInvite;
                                    var8 = var8.bind(var9)(var6);
                                    if(!var8) { _fun0005_ip = 193; continue _fun0005 }
 138:
                                    var8 = var7;
                                    if(!(var4 != var8)) { _fun0005_ip = 193; continue _fun0005 }
 145: // try_start_0
                                    var9 = _closure1_slot1;
                                    var10 = _closure1_slot2;
                                    var8 = 17;
                                    var8 = var10[var8];
                                    var9 = var9.bind(var2)(var8);
                                    var8 = var9.performRoleSubscriptionUpsellRedirect;
                                    var7 = var8.bind(var9)(var7);
                                    SaveGenerator(address=180);
 178:
                                    return var7;
 180:
                                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                                    if(var8) { _fun0005_ip = 188; continue _fun0005 }
 186: // try_end0
                                    _fun0005_ip = 193; continue _fun0005;
 188:
                                    return var7;
 191: // catch_target0
                                    CatchBlockStart(arg_register=6);
 193:
                                    var7 = var6.channel;
                                    if(!(var4 == var7)) { _fun0005_ip = 215; continue _fun0005 }
 202:
                                    var7 = _closure2_slot1;
                                    var7 = var7.bind(var2)();
                                    _fun0005_ip = 250; continue _fun0005;
 215:
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
 250:
                                    return var2;
 253:
                                    var7 = var4 == var6;
                                    var5 = undefined;
                                    if(var7) { _fun0005_ip = 268; continue _fun0005 }
 262:
                                    var5 = var6.guild_scheduled_event;
 268:
                                    if(!(var4 != var5)) { _fun0005_ip = 319; continue _fun0005 }
 272:
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
 319:
                                    return var2;
 322:
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
                    if(var8) { _fun0004_ip = 200; continue _fun0004 }
 89:
                    if(var7) { _fun0004_ip = 171; continue _fun0004 }
 92:
                    var7 = null;
                    if(!(var7 != var6)) { _fun0004_ip = 171; continue _fun0004 }
 98:
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
                    _fun0004_ip = 194; continue _fun0004;
 171:
                    var4 = _closure2_slot5;
                    var4 = var4.bind(var3)();
                    SaveGenerator(address=183);
 181:
                    return var4;
 183:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0004_ip = 197; continue _fun0004 }
 189:
                    var5 = var5.bind(var3)(var6);
 194:
                    return var3;
 197:
                    return var4;
 200:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var3)();
                    return var2;
 211:
                    return var1;
                }
            };
            return var1;
        };
        var3 = var3.bind(var4)(var2);
        var2 = new Array(3);
        var2[0] = var5;
        var2[1] = var14;
        var2[2] = var11;
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
        var19 = var1;
        var18 = var7;
        var7 = copyDataProperties(var19, var18);
        var19 = var1;
        var18 = var5;
        var5 = copyDataProperties(var19, var18);
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