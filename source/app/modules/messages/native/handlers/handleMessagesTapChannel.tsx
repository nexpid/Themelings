// app/modules/messages/native/handlers/handleMessagesTapChannel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var1 = function maybeStartLurking() {
        var1 = undefined;
        var4 = _closure1_slot20;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function _maybeStartLurking() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = arg2;
                    var7 = arg3;
                    var2 = arg4;
                    var4 = null;
                    if(!(var4 != var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var5 = _closure1_slot6;
                    var4 = undefined;
                    var4 = var5.bind(var4)(var6);
                    if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 4: // try_start_0
                    var6 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var4 = 12;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.startLurking;
                    var4 = var3;
                    var3 = {};
                    var3['channelId'] = var7;
                    var3['messageId'] = var2;
                    var2 = {};
                    var2 = var5.bind(var6)(var4, var2, var3);
                    SaveGenerator(address=99);
case 7:
                    return var2;
case 8:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 9; continue _fun0001 }
case 10: // try_end0
                    var3 = true;
                    return var3;
case 9:
                    return var2;
case 11: // catch_target0
                    CatchBlockStart(arg_register=1);
case 6:
                    var2 = false;
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot20 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function _handleMessagesTapChannel() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var4 = var2.data;
                    var10 = var2.navigationReplace;
                    var3 = undefined;
                    if(!(var10 === var3)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var10 = false;
case 14:
                    var8 = var2.onBeforeNavigate;
                    var13 = var2.dismissKeyboard;
                    SaveGenerator(address=48);
case 16:
                    return var3;
case 17:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var11 = var4.channelId;
                    var9 = var4.guildId;
                    var12 = var4.messageId;
                    var7 = null;
                    var4 = var7 != var11;
                    var6 = null;
                    if(!var4) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var5 = _closure1_slot7;
                    var4 = var5.getChannel;
                    var6 = var4.bind(var5)(var11);
case 20:
                    var14 = _closure1_slot10;
                    var5 = var14.getGuild;
                    var5 = var5.bind(var14)(var9);
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot3;
                    var14 = 13;
                    var14 = var16[var14];
                    var16 = var15.bind(var3)(var14);
                    var15 = var16.trackDiscordLinkClicked;
                    var14 = {};
                    var14['guildId'] = var9;
                    var14['channelId'] = var11;
                    var14['messageId'] = var12;
                    var14 = var15.bind(var16)(var14);
                    if(!(var7 != var9)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    if(!(var7 != var11)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var14 = 14;
                    var14 = var16[var14];
                    var15 = var15.bind(var3)(var14);
                    var14 = var15.isStaticRouteIconType;
                    var14 = var14.bind(var15)(var11);
                    if(var14) { _fun0002_ip = 25; continue _fun0002 }
case 22:
                    if(!(var7 != var12)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    if(!(var7 == var6)) { _fun0002_ip = 28; continue _fun0002 }
case 26:
                    if(!(var7 != var6)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                    if(!(var7 == var9)) { _fun0002_ip = 31; continue _fun0002 }
case 29:
                    if(!(var7 != var11)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                    if(!(var7 == var9)) { _fun0002_ip = 34; continue _fun0002 }
case 32:
                    if(!(var7 != var6)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                    var14 = var6.isPrivate;
                    var14 = var14.bind(var6)();
                    if(var14) { _fun0002_ip = 37; continue _fun0002 }
case 35:
                    var14 = var7 != var11;
                    if(!var14) { _fun0002_ip = 38; continue _fun0002 }
case 39:
                    var14 = var7 == var9;
case 38:
                    if(!var14) { _fun0002_ip = 40; continue _fun0002 }
case 41:
                    if(!(var7 != var8)) { _fun0002_ip = 42; continue _fun0002 }
case 43:
                    var14 = var8.bind(var3)();
case 42:
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot3;
                    var14 = 18;
                    var14 = var16[var14];
                    var16 = var15.bind(var3)(var14);
                    var15 = _closure1_slot15;
                    var14 = var15.CHANNEL;
                    var15 = var14.bind(var15)(var9, var11, var12);
                    var14 = {};
                    var14['navigationReplace'] = var10;
                    var17 = true;
                    var14['openChannel'] = var17;
                    var14 = var16.bind(var3)(var15, var14);
                    _fun0002_ip = 40; continue _fun0002;
case 37:
                    if(!(var7 != var13)) { _fun0002_ip = 44; continue _fun0002 }
case 45:
                    var14 = var13.bind(var3)();
case 44:
                    if(!(var7 != var8)) { _fun0002_ip = 46; continue _fun0002 }
case 47:
                    var14 = var8.bind(var3)();
case 46:
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot3;
                    var14 = 25;
                    var14 = var16[var14];
                    var15 = var15.bind(var3)(var14);
                    var14 = var15.selectVoiceChannel;
                    var14 = var14.bind(var15)(var11);
                    _fun0002_ip = 40; continue _fun0002;
case 34:
                    var14 = _closure1_slot19;
                    var23 = undefined;
                    var22 = var5;
                    var21 = var9;
                    var20 = var11;
                    var19 = var12;
                    var14 = var23[var14](var22, var21, var20, var19, var18);
                    SaveGenerator(address=423);
case 48:
                    return var14;
case 49:
                    ResumeGenerator(result_out_reg=13, return_bool_out_reg=14);
                    if(var15) { _fun0002_ip = 50; continue _fun0002 }
case 51:
                    if(var14) { _fun0002_ip = 52; continue _fun0002 }
case 53:
                    if(!(var7 != var8)) { _fun0002_ip = 54; continue _fun0002 }
case 55:
                    var15 = var8.bind(var3)();
case 54:
                    var16 = _closure1_slot1;
                    var17 = _closure1_slot3;
                    var15 = 18;
                    var15 = var17[var15];
                    var17 = var16.bind(var3)(var15);
                    var16 = _closure1_slot15;
                    var15 = var16.CHANNEL;
                    var16 = var15.bind(var16)(var9, var11, var12);
                    var15 = {};
                    var15['navigationReplace'] = var10;
                    var18 = true;
                    var15['openChannel'] = var18;
                    var15 = var17.bind(var3)(var16, var15);
                    _fun0002_ip = 40; continue _fun0002;
case 52:
                    return var3;
case 50:
                    return var14;
case 31:
                    var14 = var6.isPrivate;
                    var14 = var14.bind(var6)();
                    if(var14) { _fun0002_ip = 56; continue _fun0002 }
case 57:
                    var15 = _closure1_slot19;
                    var20 = var6.id;
                    var23 = undefined;
                    var22 = var5;
                    var21 = var9;
                    var19 = var12;
                    var14 = var23[var15](var22, var21, var20, var19, var18);
                    SaveGenerator(address=549);
case 58:
                    return var14;
case 59:
                    ResumeGenerator(result_out_reg=13, return_bool_out_reg=14);
                    if(var15) { _fun0002_ip = 60; continue _fun0002 }
case 61:
                    if(!var14) { _fun0002_ip = 56; continue _fun0002 }
case 62:
                    return var3;
case 60:
                    return var14;
case 56:
                    var15 = _closure1_slot5;
                    var14 = var6.type;
                    var14 = var15.bind(var3)(var14);
                    if(!var14) { _fun0002_ip = 63; continue _fun0002 }
case 64:
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var14 = 23;
                    var14 = var16[var14];
                    var15 = var15.bind(var3)(var14);
                    var14 = var15.canViewChannel;
                    var14 = var14.bind(var15)(var6);
                    if(var14) { _fun0002_ip = 65; continue _fun0002 }
case 63:
                    if(!(var7 != var8)) { _fun0002_ip = 66; continue _fun0002 }
case 67:
                    var14 = var8.bind(var3)();
case 66:
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot3;
                    var14 = 18;
                    var14 = var16[var14];
                    var16 = var15.bind(var3)(var14);
                    var17 = _closure1_slot15;
                    var15 = var17.CHANNEL;
                    var14 = var6.id;
                    var15 = var15.bind(var17)(var9, var14);
                    var14 = {};
                    var14['navigationReplace'] = var10;
                    var17 = true;
                    var14['openChannel'] = var17;
                    var14 = var16.bind(var3)(var15, var14);
                    _fun0002_ip = 40; continue _fun0002;
case 65:
                    var15 = var6.type;
                    var14 = _closure1_slot12;
                    var14 = var14.GUILD_STAGE_VOICE;
                    if(!(var15 === var14)) { _fun0002_ip = 68; continue _fun0002 }
case 69:
                    var16 = _closure1_slot11;
                    var15 = var16.can;
                    var14 = _closure1_slot14;
                    var14 = var14.CONNECT;
                    var14 = var15.bind(var16)(var14, var6);
                    if(var14) { _fun0002_ip = 68; continue _fun0002 }
case 70:
                    return var3;
case 68:
                    if(!(var7 != var13)) { _fun0002_ip = 71; continue _fun0002 }
case 72:
                    var13 = var13.bind(var3)();
case 71:
                    if(!(var7 != var8)) { _fun0002_ip = 73; continue _fun0002 }
case 74:
                    var13 = var8.bind(var3)();
case 73:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot3;
                    var13 = 24;
                    var13 = var15[var13];
                    var14 = var14.bind(var3)(var13);
                    var13 = var14.openChannelCallModal;
                    var13 = var13.bind(var14)(var6);
                    _fun0002_ip = 40; continue _fun0002;
case 28:
                    var13 = var6.isPrivate;
                    var13 = var13.bind(var6)();
                    if(var13) { _fun0002_ip = 75; continue _fun0002 }
case 76:
                    var15 = _closure1_slot19;
                    var21 = var6.guild_id;
                    var20 = var6.id;
                    var23 = undefined;
                    var22 = var5;
                    var19 = var12;
                    var13 = var23[var15](var22, var21, var20, var19, var18);
                    SaveGenerator(address=835);
case 77:
                    return var13;
case 78:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=13);
                    if(var14) { _fun0002_ip = 79; continue _fun0002 }
case 80:
                    if(!var13) { _fun0002_ip = 75; continue _fun0002 }
case 81:
                    return var3;
case 79:
                    return var13;
case 75:
                    if(!(var7 != var8)) { _fun0002_ip = 82; continue _fun0002 }
case 83:
                    var8 = var8.bind(var3)();
case 82:
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot3;
                    var8 = 18;
                    var8 = var14[var8];
                    var13 = var13.bind(var3)(var8);
                    var15 = _closure1_slot15;
                    var14 = var15.CHANNEL;
                    var8 = var6.guild_id;
                    var6 = var6.id;
                    var8 = var14.bind(var15)(var8, var6, var12);
                    var6 = {};
                    var6['navigationReplace'] = var10;
                    var14 = true;
                    var6['openChannel'] = var14;
                    var6 = var13.bind(var3)(var8, var6);
                    _fun0002_ip = 40; continue _fun0002;
case 25:
                    if(!(var7 != var5)) { _fun0002_ip = 84; continue _fun0002 }
case 85:
                    var6 = 'browse';
                    if(!(var6 !== var11)) { _fun0002_ip = 86; continue _fun0002 }
case 87:
                    var6 = 'customize';
                    if(!(var6 !== var11)) { _fun0002_ip = 88; continue _fun0002 }
case 89:
                    var6 = 'home';
                    if(!(var6 !== var11)) { _fun0002_ip = 90; continue _fun0002 }
case 91:
                    var6 = 'guide';
                    if(!(var6 !== var11)) { _fun0002_ip = 90; continue _fun0002 }
case 92:
                    var6 = 'linked-roles';
                    if(!(var6 !== var11)) { _fun0002_ip = 93; continue _fun0002 }
case 94:
                    var8 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var6 = 22;
                    var6 = var13[var6];
                    var8 = var8.bind(var3)(var6);
                    var6 = var8.assertNever;
                    var6 = var6.bind(var8)(var11);
                    _fun0002_ip = 40; continue _fun0002;
case 93:
                    if(!(var7 == var12)) { _fun0002_ip = 95; continue _fun0002 }
case 96:
                    var11 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var8 = 15;
                    var8 = var6[var8];
                    var13 = var11.bind(var3)(var8);
                    var11 = var13.pushLazy;
                    var14 = _closure1_slot0;
                    var8 = 17;
                    var8 = var6[var8];
                    var14 = var14.bind(var3)(var8);
                    var8 = 21;
                    var8 = var6[var8];
                    var6 = var6.paths;
                    var8 = var14.bind(var3)(var8, var6);
                    var6 = {};
                    var6['guildId'] = var9;
                    var6 = var11.bind(var13)(var8, var6);
                    _fun0002_ip = 40; continue _fun0002;
case 95:
                    var8 = _closure1_slot8;
                    var6 = var8.getSelfMember;
                    var6 = var6.bind(var8)(var9);
                    if(!(var7 != var6)) { _fun0002_ip = 97; continue _fun0002 }
case 98:
                    var11 = _closure1_slot9;
                    var8 = var11.getRole;
                    var13 = var8.bind(var11)(var9, var12);
                    if(!(var7 != var13)) { _fun0002_ip = 99; continue _fun0002 }
case 100:
                    var8 = var6.roles;
                    var7 = var8.includes;
                    var6 = var13.id;
                    var6 = var7.bind(var8)(var6);
                    if(var6) { _fun0002_ip = 99; continue _fun0002 }
case 101:
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var7 = 19;
                    var7 = var6[var7];
                    var12 = var8.bind(var3)(var7);
                    var11 = var12.openLazy;
                    var8 = _closure1_slot0;
                    var7 = 17;
                    var7 = var6[var7];
                    var8 = var8.bind(var3)(var7);
                    var7 = 20;
                    var7 = var6[var7];
                    var6 = var6.paths;
                    var8 = var8.bind(var3)(var7, var6);
                    var14 = var13.id;
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var7 = var6.concat;
                    var6 = 'GuildRoleConnectionsConnectAccountsActionSheet-';
                    var7 = var7.bind(var6)(var14);
                    var6 = {};
                    var6['role'] = var13;
                    var6['guildId'] = var9;
                    var6 = var11.bind(var12)(var8, var7, var6);
                    _fun0002_ip = 40; continue _fun0002;
case 99:
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var7 = 15;
                    var7 = var6[var7];
                    var11 = var8.bind(var3)(var7);
                    var8 = var11.pushLazy;
                    var12 = _closure1_slot0;
                    var7 = 17;
                    var7 = var6[var7];
                    var12 = var12.bind(var3)(var7);
                    var7 = 21;
                    var7 = var6[var7];
                    var6 = var6.paths;
                    var7 = var12.bind(var3)(var7, var6);
                    var6 = {};
                    var6['guildId'] = var9;
                    var6 = var8.bind(var11)(var7, var6);
                    _fun0002_ip = 40; continue _fun0002;
case 97:
                    return var3;
case 90:
                    var8 = var5.features;
                    var7 = var8.has;
                    var6 = _closure1_slot13;
                    var6 = var6.COMMUNITY;
                    var6 = var7.bind(var8)(var6);
                    if(var6) { _fun0002_ip = 102; continue _fun0002 }
case 103:
                    return var3;
case 102:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var6 = 18;
                    var6 = var8[var6];
                    var8 = var7.bind(var3)(var6);
                    var11 = _closure1_slot15;
                    var7 = var11.CHANNEL;
                    var6 = _closure1_slot16;
                    var6 = var6.GUILD_HOME;
                    var7 = var7.bind(var11)(var9, var6);
                    var6 = {};
                    var6['navigationReplace'] = var10;
                    var10 = true;
                    var6['openChannel'] = var10;
                    var6 = var8.bind(var3)(var7, var6);
                    _fun0002_ip = 40; continue _fun0002;
case 88:
                    var8 = var5.features;
                    var7 = var8.has;
                    var6 = _closure1_slot13;
                    var6 = var6.COMMUNITY;
                    var6 = var7.bind(var8)(var6);
                    if(var6) { _fun0002_ip = 104; continue _fun0002 }
case 105:
                    return var3;
case 104:
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var7 = 15;
                    var7 = var6[var7];
                    var11 = var8.bind(var3)(var7);
                    var10 = var11.pushLazy;
                    var8 = _closure1_slot0;
                    var7 = 17;
                    var7 = var6[var7];
                    var8 = var8.bind(var3)(var7);
                    var7 = 16;
                    var7 = var6[var7];
                    var6 = var6.paths;
                    var8 = var8.bind(var3)(var7, var6);
                    var7 = {};
                    var7['guildId'] = var9;
                    var6 = _closure1_slot17;
                    var6 = var6.CUSTOMIZE;
                    var7['defaultTab'] = var6;
                    var6 = _closure1_slot18;
                    var6 = var10.bind(var11)(var8, var7, var6);
                    _fun0002_ip = 40; continue _fun0002;
case 86:
                    var7 = var5.features;
                    var6 = var7.has;
                    var5 = _closure1_slot13;
                    var5 = var5.COMMUNITY;
                    var5 = var6.bind(var7)(var5);
                    if(var5) { _fun0002_ip = 106; continue _fun0002 }
case 107:
                    return var3;
case 106:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var6 = 15;
                    var6 = var5[var6];
                    var8 = var7.bind(var3)(var6);
                    var7 = var8.pushLazy;
                    var10 = _closure1_slot0;
                    var6 = 17;
                    var6 = var5[var6];
                    var10 = var10.bind(var3)(var6);
                    var6 = 16;
                    var6 = var5[var6];
                    var5 = var5.paths;
                    var6 = var10.bind(var3)(var6, var5);
                    var5 = {};
                    var5['guildId'] = var9;
                    var9 = _closure1_slot17;
                    var9 = var9.BROWSE;
                    var5['defaultTab'] = var9;
                    var4 = _closure1_slot18;
                    var4 = var7.bind(var8)(var6, var5, var4);
case 40:
                    return var3;
case 84:
                    return var3;
case 18:
                    return var2;
case 12:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot21 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildVocalChannelType;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildLurker;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ChannelTypes;
    var _closure1_slot12 = var7;
    var7 = var4.GuildFeatures;
    var _closure1_slot13 = var7;
    var7 = var4.Permissions;
    var _closure1_slot14 = var7;
    var4 = var4.Routes;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildOnboardingTab;
    var _closure1_slot17 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CHANNELS_AND_ROLES_MODAL_KEY;
    var _closure1_slot18 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/handlers/handleMessagesTapChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function handleMessagesTapChannel() {
        var1 = undefined;
        var4 = _closure1_slot21;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['handleMessagesTapChannel'] = var2;
    return var1;
})();