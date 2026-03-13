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
    var4 = var4.InviteStates;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildMemberFlags;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['flex'] = var9;
    var9 = {};
    var10 = 9;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SURFACE_HIGH;
    var9['backgroundColor'] = var10;
    var4['paddingContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/create_guild/native/components/AcceptInviteContainer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AcceptInviteContainer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var12 = var4.code;
            var _closure2_slot0 = var12;
            var11 = var4.onPressClose;
            var _closure2_slot1 = var11;
            var5 = null;
            var3 = Object.create(var5);
            var1 = 0;
            var3['code'] = var1;
            var3['onPressClose'] = var1;
            var19 = {};
            var18 = var4;
            var17 = var3;
            var7 = copyDataProperties(var19, var18, var17);
            var4 = undefined;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var3 = _closure1_slot11;
            var9 = var3.bind(var4)();
            var14 = var7.isRegistration;
            var _closure2_slot2 = var14;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 10;
            var3 = var10[var3];
            var6 = var8.bind(var4)(var3);
            var3 = var6.useNavigation;
            var3 = var3.bind(var6)();
            var _closure2_slot3 = var3;
            var6 = 11;
            var6 = var10[var6];
            var13 = var8.bind(var4)(var6);
            var10 = var13.useStateFromStoresObject;
            var6 = _closure1_slot7;
            var8 = new Array(3);
            var8[0] = var6;
            var6 = _closure1_slot5;
            var8[1] = var6;
            var6 = _closure1_slot6;
            var8[2] = var6;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var6 = _closure1_slot7;
                    var3 = var6.getInvite;
                    var4 = _closure2_slot0;
                    var7 = var3.bind(var6)(var4);
                    var3 = var6.getInviteError;
                    var6 = var3.bind(var6)(var4);
                    var9 = null;
                    var4 = var9 == var7;
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = var7.guild;
case 2:
                    var4 = var9 != var3;
                    if(!var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var11 = _closure1_slot6;
                    var8 = var11.getGuild;
                    var3 = var7.guild;
                    var3 = var3.id;
                    var3 = var8.bind(var11)(var3);
                    var4 = var9 != var3;
case 4:
                    var8 = var9 == var7;
                    var3 = undefined;
                    if(var8) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = var7.guild;
case 6:
                    var8 = var9 != var3;
                    var3 = null;
                    if(!var8) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var12 = _closure1_slot5;
                    var11 = var12.getSelfMember;
                    var8 = var7.guild;
                    var8 = var8.id;
                    var3 = var11.bind(var12)(var8);
case 8:
                    var8 = _closure1_slot7;
                    var5 = var8.getFriendMemberIds;
                    var2 = _closure2_slot0;
                    var2 = var5.bind(var8)(var2);
                    var5 = false;
                    if(!var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var12 = var9 == var7;
                    var8 = undefined;
                    if(var12) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var8 = var7.roles;
case 12:
                    var8 = var9 != var8;
                    var5 = false;
                    if(!var8) { _fun0002_ip = 10; continue _fun0002 }
case 14:
                    var8 = var7.roles;
                    var12 = var8.length;
                    var8 = 0;
                    var8 = var12 > var8;
                    var5 = false;
                    if(!var8) { _fun0002_ip = 10; continue _fun0002 }
case 15:
                    var8 = global;
                    var8 = var8.Set;
                    var11 = var9 == var3;
                    var10 = undefined;
                    if(var11) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var10 = var3.roles;
case 16:
                    if(!(var9 == var10)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var10 = new Array(0);
case 18:
                    var9 = var8.prototype;
                    var9 = Object.create(var9, {constructor: {value: var8}});
                    var14 = var9;
                    var13 = var10;
                    var8 = new var14[var8](var13, var12);
                    var8 = var8 instanceof Object ? var8 : var9;
                    var _closure3_slot0 = var8;
                    var9 = var7.roles;
                    var8 = var9.some;
                    var1 = function(arg1) {
                        var3 = _closure3_slot0;
                        var2 = var3.has;
                        var1 = arg1;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var5 = var8.bind(var9)(var1);
case 10:
                    var1 = {};
                    var1['invite'] = var7;
                    var1['inviteError'] = var6;
                    if(!var4) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var4 = !var5;
case 20:
                    var1['isGuildMember'] = var4;
                    var1['guildMember'] = var3;
                    var1['friendMemberIds'] = var2;
                    return var1;
                }
            };
            var6 = var10.bind(var13)(var8, var6);
            var _closure2_slot4 = var6;
            var10 = _closure1_slot4;
            var8 = var10.useRef;
            var8 = var8.bind(var10)(var5);
            var _closure2_slot5 = var8;
            var8 = var6.invite;
            var13 = var5 == var8;
            var10 = undefined;
            if(var13) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var10 = var8.state;
case 22:
            var8 = _closure1_slot8;
            var8 = var8.RESOLVED;
            var15 = var10 === var8;
            _closure2_slot6 = var15;
            var8 = var6.invite;
            var10 = var5 == var8;
            var5 = undefined;
            if(var10) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var5 = var8.guild;
case 24:
            _closure2_slot7 = var5;
            var8 = _closure1_slot4;
            var13 = var8.useEffect;
            var10 = new Array(3);
            var10[0] = var12;
            var10[1] = var15;
            var10[2] = var5;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot5;
                    var3 = var1.current;
                    var1 = _closure2_slot0;
                    if(!(var3 !== var1)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var1 = _closure2_slot6;
                    if(!var1) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 12;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.getEligibleInviteFriendMembersExperiment;
                    var3 = {'location': 'accept_invite_modal_native', 'autoTrackExposure': true};
                    var6 = _closure2_slot7;
                    var3['guild'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var1 = var3.showFriendsInServer;
case 28:
                    if(!var1) { _fun0003_ip = 26; continue _fun0003 }
case 30:
                    var1 = _closure2_slot5;
                    var3 = _closure2_slot0;
                    var1['current'] = var3;
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.fetchFriendMembers;
                    var1 = var1.bind(var2)(var3);
case 26:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var13.bind(var8)(var5, var10);
            var10 = var8.useLayoutEffect;
            var5 = new Array(3);
            var5[0] = var6;
            var5[1] = var3;
            var5[2] = var11;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var2 = var3.setOptions;
                    var1 = {};
                    var5 = _closure2_slot4;
                    var6 = var5.invite;
                    var5 = null;
                    if(!(var5 == var6)) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 14;
                    var6 = var6[var5];
                    var5 = undefined;
                    var6 = var7.bind(var5)(var6);
                    var5 = var6.getHeaderBackButton;
                    var4 = _closure2_slot1;
                    var4 = var5.bind(var6)(var4);
                    _fun0004_ip = 33; continue _fun0004;
case 31:
                    var4 = function() {
                        var1 = null;
                        return var1;
                    };
case 33:
                    var1['headerLeft'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var10.bind(var8)(var3, var5);
            var13 = var8.useCallback;
            var3 = _closure1_slot3;
            var5 = function* () {
                var1 = function* anon_0_() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                        var3 = _closure2_slot4;
                        var6 = var3.guildMember;
                        var2 = _closure2_slot2;
                        if(!var2) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                        var4 = null;
                        if(!(var4 != var6)) { _fun0005_ip = 36; continue _fun0005 }
case 38:
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 15;
                        var3 = var5[var3];
                        var5 = undefined;
                        var8 = var7.bind(var5)(var3);
                        var7 = var8.hasFlag;
                        var3 = var6.flags;
                        var9 = var4 != var3;
                        var4 = 0;
                        if(!var9) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                        var4 = var3;
case 39:
                        var3 = _closure1_slot9;
                        var3 = var3.COMPLETED_ONBOARDING;
                        var3 = var7.bind(var8)(var4, var3);
                        if(var3) { _fun0005_ip = 36; continue _fun0005 }
case 41:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var3 = 17;
                        var3 = var2[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = 16;
                        var3 = var2[var3];
                        var2 = var2.paths;
                        var2 = var4.bind(var5)(var3, var2);
                        SaveGenerator(address=151);
case 42:
                        return var2;
case 43:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                        var4 = var2.default;
                        var3 = {};
                        var6 = var6.guildId;
                        var3['guildId'] = var6;
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address=182);
case 46:
                        return var3;
case 47:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(!var4) { _fun0005_ip = 36; continue _fun0005 }
case 48:
                        return var3;
case 44:
                        return var2;
case 36:
                        var2 = undefined;
                        return var2;
case 34:
                        return var1;
                    }
                };
                return var1;
            };
            var10 = var3.bind(var4)(var5);
            var5 = new Array(2);
            var5[0] = var14;
            var5[1] = var6;
            var10 = var13.bind(var8)(var10, var5);
            _closure2_slot8 = var10;
            var5 = var8.useCallback;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0006_ip = 49; continue _fun0006 }
case 50:
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
                                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                        StartGenerator();
                                        var6 = arg1;
                                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                        if(var2) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                                        var _closure7_slot0 = var6;
                                        var2 = undefined;
                                        var7 = undefined;
                                        var4 = null;
                                        if(!(var4 == var6)) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                                        var3 = _closure2_slot1;
                                        var3 = var3.bind(var2)();
                                        _fun0007_ip = 55; continue _fun0007;
case 53:
                                        var9 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var10 = 18;
                                        var8 = var8[var10];
                                        var9 = var9.bind(var2)(var8);
                                        var8 = var9.isGuildScheduledEventInviteEmbed;
                                        var8 = var8.bind(var9)(var6);
                                        if(var8) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                                        var9 = var6.guild;
                                        var11 = var4 == var9;
                                        var8 = undefined;
                                        if(var11) { _fun0007_ip = 58; continue _fun0007 }
case 59:
                                        var8 = var9.id;
case 58:
                                        var7 = var8;
                                        var9 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var8 = var8[var10];
                                        var9 = var9.bind(var2)(var8);
                                        var8 = var9.isRoleSubscriptionInvite;
                                        var8 = var8.bind(var9)(var6);
                                        if(!var8) { _fun0007_ip = 60; continue _fun0007 }
case 61:
                                        var8 = var7;
                                        if(!(var4 != var8)) { _fun0007_ip = 60; continue _fun0007 }
case 62: // try_start_0
                                        var9 = _closure1_slot1;
                                        var10 = _closure1_slot2;
                                        var8 = 20;
                                        var8 = var10[var8];
                                        var9 = var9.bind(var2)(var8);
                                        var8 = var9.performRoleSubscriptionUpsellRedirect;
                                        var7 = var8.bind(var9)(var7);
                                        SaveGenerator(address=180);
case 63:
                                        return var7;
case 46:
                                        ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                                        if(var8) { _fun0007_ip = 48; continue _fun0007 }
case 64: // try_end0
                                        _fun0007_ip = 60; continue _fun0007;
case 48:
                                        return var7;
case 44: // catch_target0
                                        CatchBlockStart(arg_register=6);
case 60:
                                        var7 = var6.channel;
                                        if(!(var4 == var7)) { _fun0007_ip = 65; continue _fun0007 }
case 66:
                                        var7 = _closure2_slot1;
                                        var7 = var7.bind(var2)();
                                        _fun0007_ip = 55; continue _fun0007;
case 65:
                                        var7 = _closure2_slot1;
                                        var7 = var7.bind(var2)();
                                        var7 = global;
                                        var8 = var7.setTimeout;
                                        var7 = function() {
                                            var3 = _closure1_slot1;
                                            var2 = _closure1_slot2;
                                            var1 = 13;
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
case 55:
                                        return var2;
case 56:
                                        var7 = var4 == var6;
                                        var5 = undefined;
                                        if(var7) { _fun0007_ip = 67; continue _fun0007 }
case 68:
                                        var5 = var6.guild_scheduled_event;
case 67:
                                        if(!(var4 != var5)) { _fun0007_ip = 69; continue _fun0007 }
case 70:
                                        var4 = _closure2_slot1;
                                        var4 = var4.bind(var2)();
                                        var4 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var3 = 19;
                                        var3 = var6[var3];
                                        var4 = var4.bind(var2)(var3);
                                        var3 = var4.transitionToEventDetailsFromInvite;
                                        var3 = var3.bind(var4)(var5);
                                        var3 = undefined;
                                        return var3;
case 69:
                                        return var2;
case 51:
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
                        var8 = 21;
                        var8 = var11[var8];
                        var10 = var10.bind(var3)(var8);
                        var8 = var10.handleNSFWGuildInvite;
                        var8 = var8.bind(var10)(var6);
                        if(var8) { _fun0006_ip = 71; continue _fun0006 }
case 4:
                        if(var7) { _fun0006_ip = 72; continue _fun0006 }
case 73:
                        var7 = null;
                        if(!(var7 != var6)) { _fun0006_ip = 72; continue _fun0006 }
case 7:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var4 = 13;
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
                        _fun0006_ip = 36; continue _fun0006;
case 72:
                        var4 = _closure2_slot8;
                        var4 = var4.bind(var3)();
                        SaveGenerator(address=183);
case 12:
                        return var4;
case 74:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(var7) { _fun0006_ip = 75; continue _fun0006 }
case 76:
                        var5 = var5.bind(var3)(var6);
case 36:
                        return var3;
case 75:
                        return var4;
case 71:
                        var2 = _closure2_slot1;
                        var2 = var2.bind(var3)();
                        return var2;
case 49:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = new Array(3);
            var2[0] = var6;
            var2[1] = var10;
            var2[2] = var11;
            var10 = var5.bind(var8)(var3, var2);
            var3 = _closure1_slot10;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 22;
            var2 = var8[var2];
            var5 = var5.bind(var4)(var2);
            var2 = {};
            var2['code'] = var12;
            var2['onPressClose'] = var11;
            var2['onPressJoin'] = var10;
            var19 = var2;
            var18 = var7;
            var7 = copyDataProperties(var19, var18);
            var19 = var2;
            var18 = var6;
            var6 = copyDataProperties(var19, var18);
            var7 = var3.bind(var4)(var5, var2);
            var6 = _closure1_slot0;
            var1 = 23;
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
            var5 = 24;
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
        }
    };
    var3['default'] = var2;
    return var1;
})();