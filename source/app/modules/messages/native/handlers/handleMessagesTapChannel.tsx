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
    var1 = function _handleMessagesTapChannel() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = var2.data;
                    var10 = var2.navigationReplace;
                    var3 = undefined;
                    if(!(var10 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var10 = false;
case 4:
                    var12 = var2.onBeforeNavigate;
                    var13 = var2.dismissKeyboard;
                    var8 = undefined;
                    var9 = undefined;
                    var6 = undefined;
                    SaveGenerator(address=54);
case 6:
                    return var3;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var4 = var5.channelId;
                    var8 = var4;
                    var9 = var5.guildId;
                    var6 = var5.messageId;
                    var7 = null;
                    var4 = var7 != var4;
                    var11 = null;
                    if(!var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var14 = _closure1_slot7;
                    var5 = var14.getChannel;
                    var4 = var8;
                    var11 = var5.bind(var14)(var4);
case 10:
                    var15 = _closure1_slot10;
                    var5 = var15.getGuild;
                    var14 = var9;
                    var5 = var5.bind(var15)(var14);
                    var16 = _closure1_slot1;
                    var17 = _closure1_slot3;
                    var15 = 12;
                    var15 = var17[var15];
                    var17 = var16.bind(var3)(var15);
                    var16 = var17.trackDiscordLinkClicked;
                    var15 = {};
                    var15['guildId'] = var14;
                    var18 = var8;
                    var15['channelId'] = var18;
                    var18 = var6;
                    var15['messageId'] = var18;
                    var15 = var16.bind(var17)(var15);
                    if(!(var7 != var14)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var14 = var8;
                    if(!(var7 != var14)) { _fun0001_ip = 12; continue _fun0001 }
case 14:
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var14 = 13;
                    var14 = var16[var14];
                    var16 = var15.bind(var3)(var14);
                    var15 = var16.isStaticRouteIconType;
                    var14 = var8;
                    var14 = var15.bind(var16)(var14);
                    if(var14) { _fun0001_ip = 15; continue _fun0001 }
case 12:
                    var14 = var6;
                    if(!(var7 != var14)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    if(!(var7 == var11)) { _fun0001_ip = 18; continue _fun0001 }
case 16:
                    if(!(var7 != var11)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                    var14 = var9;
                    if(!(var7 == var14)) { _fun0001_ip = 21; continue _fun0001 }
case 19:
                    var14 = var8;
                    if(!(var7 != var14)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var14 = var9;
                    if(!(var7 == var14)) { _fun0001_ip = 24; continue _fun0001 }
case 22:
                    if(!(var7 != var11)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
                    var14 = var11.isPrivate;
                    var14 = var14.bind(var11)();
                    if(var14) { _fun0001_ip = 27; continue _fun0001 }
case 25:
                    var14 = var8;
                    var14 = var7 != var14;
                    if(!var14) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                    var15 = var9;
                    var14 = var7 == var15;
case 28:
                    if(!var14) { _fun0001_ip = 30; continue _fun0001 }
case 31:
                    if(!(var7 != var12)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
                    var14 = var12.bind(var3)();
case 32:
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot3;
                    var14 = 17;
                    var14 = var16[var14];
                    var16 = var15.bind(var3)(var14);
                    var19 = _closure1_slot15;
                    var18 = var19.CHANNEL;
                    var17 = var9;
                    var15 = var8;
                    var14 = var6;
                    var15 = var18.bind(var19)(var17, var15, var14);
                    var14 = {};
                    var14['navigationReplace'] = var10;
                    var17 = true;
                    var14['openChannel'] = var17;
                    var14 = var16.bind(var3)(var15, var14);
                    _fun0001_ip = 30; continue _fun0001;
case 27:
                    if(!(var7 != var13)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
                    var14 = var13.bind(var3)();
case 34:
                    if(!(var7 != var12)) { _fun0001_ip = 36; continue _fun0001 }
case 37:
                    var14 = var12.bind(var3)();
case 36:
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot3;
                    var14 = 25;
                    var14 = var16[var14];
                    var16 = var15.bind(var3)(var14);
                    var15 = var16.selectVoiceChannel;
                    var14 = var8;
                    var14 = var15.bind(var16)(var14);
                    _fun0001_ip = 30; continue _fun0001;
case 24:
                    if(!(var7 != var5)) { _fun0001_ip = 38; continue _fun0001 }
case 39:
                    var14 = _closure1_slot6;
                    var14 = var14.bind(var3)(var5);
                    if(!var14) { _fun0001_ip = 40; continue _fun0001 }
case 38: // try_start_0
                    var15 = _closure1_slot2;
                    var16 = _closure1_slot3;
                    var14 = 24;
                    var14 = var16[var14];
                    var18 = var15.bind(var3)(var14);
                    var17 = var18.startLurking;
                    var16 = var9;
                    var15 = {};
                    var14 = var8;
                    var15['channelId'] = var14;
                    var14 = var6;
                    var15['messageId'] = var14;
                    var14 = {};
                    var14 = var17.bind(var18)(var16, var14, var15);
                    SaveGenerator(address=528);
case 41:
                    return var14;
case 42:
                    ResumeGenerator(result_out_reg=13, return_bool_out_reg=14);
                    if(var15) { _fun0001_ip = 43; continue _fun0001 }
case 44: // try_end0
                    var15 = undefined;
                    return var15;
case 43:
                    return var14;
case 45: // catch_target0
                    CatchBlockStart(arg_register=13);
case 40:
                    if(!(var7 != var12)) { _fun0001_ip = 46; continue _fun0001 }
case 47:
                    var14 = var12.bind(var3)();
case 46:
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot3;
                    var14 = 17;
                    var14 = var16[var14];
                    var16 = var15.bind(var3)(var14);
                    var19 = _closure1_slot15;
                    var18 = var19.CHANNEL;
                    var17 = var9;
                    var15 = var8;
                    var14 = var6;
                    var15 = var18.bind(var19)(var17, var15, var14);
                    var14 = {};
                    var14['navigationReplace'] = var10;
                    var17 = true;
                    var14['openChannel'] = var17;
                    var14 = var16.bind(var3)(var15, var14);
                    _fun0001_ip = 30; continue _fun0001;
case 21:
                    var15 = _closure1_slot5;
                    var14 = var11.type;
                    var14 = var15.bind(var3)(var14);
                    if(!var14) { _fun0001_ip = 48; continue _fun0001 }
case 49:
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var14 = 22;
                    var14 = var16[var14];
                    var15 = var15.bind(var3)(var14);
                    var14 = var15.canViewChannel;
                    var14 = var14.bind(var15)(var11);
                    if(var14) { _fun0001_ip = 50; continue _fun0001 }
case 48:
                    if(!(var7 != var12)) { _fun0001_ip = 51; continue _fun0001 }
case 52:
                    var14 = var12.bind(var3)();
case 51:
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot3;
                    var14 = 17;
                    var14 = var16[var14];
                    var16 = var15.bind(var3)(var14);
                    var18 = _closure1_slot15;
                    var17 = var18.CHANNEL;
                    var15 = var9;
                    var14 = var11.id;
                    var15 = var17.bind(var18)(var15, var14);
                    var14 = {};
                    var14['navigationReplace'] = var10;
                    var17 = true;
                    var14['openChannel'] = var17;
                    var14 = var16.bind(var3)(var15, var14);
                    _fun0001_ip = 30; continue _fun0001;
case 50:
                    var15 = var11.type;
                    var14 = _closure1_slot12;
                    var14 = var14.GUILD_STAGE_VOICE;
                    if(!(var15 === var14)) { _fun0001_ip = 53; continue _fun0001 }
case 54:
                    var16 = _closure1_slot11;
                    var15 = var16.can;
                    var14 = _closure1_slot14;
                    var14 = var14.CONNECT;
                    var14 = var15.bind(var16)(var14, var11);
                    if(var14) { _fun0001_ip = 53; continue _fun0001 }
case 55:
                    return var3;
case 53:
                    if(!(var7 != var13)) { _fun0001_ip = 56; continue _fun0001 }
case 57:
                    var13 = var13.bind(var3)();
case 56:
                    if(!(var7 != var12)) { _fun0001_ip = 58; continue _fun0001 }
case 59:
                    var13 = var12.bind(var3)();
case 58:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot3;
                    var13 = 23;
                    var13 = var15[var13];
                    var14 = var14.bind(var3)(var13);
                    var13 = var14.openChannelCallModal;
                    var13 = var13.bind(var14)(var11);
                    _fun0001_ip = 30; continue _fun0001;
case 18:
                    if(!(var7 != var12)) { _fun0001_ip = 60; continue _fun0001 }
case 61:
                    var12 = var12.bind(var3)();
case 60:
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot3;
                    var12 = 17;
                    var12 = var14[var12];
                    var13 = var13.bind(var3)(var12);
                    var16 = _closure1_slot15;
                    var15 = var16.CHANNEL;
                    var14 = var11.guild_id;
                    var12 = var11.id;
                    var11 = var6;
                    var12 = var15.bind(var16)(var14, var12, var11);
                    var11 = {};
                    var11['navigationReplace'] = var10;
                    var14 = true;
                    var11['openChannel'] = var14;
                    var11 = var13.bind(var3)(var12, var11);
                    _fun0001_ip = 30; continue _fun0001;
case 15:
                    if(!(var7 != var5)) { _fun0001_ip = 62; continue _fun0001 }
case 63:
                    var12 = var8;
                    var11 = 'browse';
                    if(!(var11 !== var12)) { _fun0001_ip = 64; continue _fun0001 }
case 65:
                    var11 = 'customize';
                    if(!(var11 !== var12)) { _fun0001_ip = 66; continue _fun0001 }
case 67:
                    var11 = 'home';
                    if(!(var11 !== var12)) { _fun0001_ip = 68; continue _fun0001 }
case 69:
                    var11 = 'guide';
                    if(!(var11 !== var12)) { _fun0001_ip = 68; continue _fun0001 }
case 70:
                    var11 = 'linked-roles';
                    if(!(var11 !== var12)) { _fun0001_ip = 71; continue _fun0001 }
case 72:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var11 = 21;
                    var11 = var13[var11];
                    var12 = var12.bind(var3)(var11);
                    var11 = var12.assertNever;
                    var8 = var11.bind(var12)(var8);
                    _fun0001_ip = 30; continue _fun0001;
case 71:
                    var13 = var6;
                    if(!(var7 == var13)) { _fun0001_ip = 73; continue _fun0001 }
case 74:
                    var11 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var8 = 14;
                    var8 = var6[var8];
                    var12 = var11.bind(var3)(var8);
                    var11 = var12.pushLazy;
                    var14 = _closure1_slot0;
                    var8 = 16;
                    var8 = var6[var8];
                    var14 = var14.bind(var3)(var8);
                    var8 = 20;
                    var8 = var6[var8];
                    var6 = var6.paths;
                    var8 = var14.bind(var3)(var8, var6);
                    var6 = {};
                    var14 = var9;
                    var6['guildId'] = var14;
                    var6 = var11.bind(var12)(var8, var6);
                    _fun0001_ip = 30; continue _fun0001;
case 73:
                    var11 = _closure1_slot8;
                    var8 = var11.getSelfMember;
                    var6 = var9;
                    var6 = var8.bind(var11)(var6);
                    if(!(var7 != var6)) { _fun0001_ip = 75; continue _fun0001 }
case 76:
                    var12 = _closure1_slot9;
                    var11 = var12.getRole;
                    var8 = var9;
                    var13 = var11.bind(var12)(var8, var13);
                    if(!(var7 != var13)) { _fun0001_ip = 77; continue _fun0001 }
case 78:
                    var8 = var6.roles;
                    var7 = var8.includes;
                    var6 = var13.id;
                    var6 = var7.bind(var8)(var6);
                    if(var6) { _fun0001_ip = 77; continue _fun0001 }
case 79:
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var7 = 18;
                    var7 = var6[var7];
                    var12 = var8.bind(var3)(var7);
                    var11 = var12.openLazy;
                    var8 = _closure1_slot0;
                    var7 = 16;
                    var7 = var6[var7];
                    var8 = var8.bind(var3)(var7);
                    var7 = 19;
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
                    var13 = var9;
                    var6['guildId'] = var13;
                    var6 = var11.bind(var12)(var8, var7, var6);
                    _fun0001_ip = 30; continue _fun0001;
case 77:
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var7 = 14;
                    var7 = var6[var7];
                    var11 = var8.bind(var3)(var7);
                    var8 = var11.pushLazy;
                    var12 = _closure1_slot0;
                    var7 = 16;
                    var7 = var6[var7];
                    var12 = var12.bind(var3)(var7);
                    var7 = 20;
                    var7 = var6[var7];
                    var6 = var6.paths;
                    var7 = var12.bind(var3)(var7, var6);
                    var6 = {};
                    var12 = var9;
                    var6['guildId'] = var12;
                    var6 = var8.bind(var11)(var7, var6);
                    _fun0001_ip = 30; continue _fun0001;
case 75:
                    return var3;
case 68:
                    var8 = var5.features;
                    var7 = var8.has;
                    var6 = _closure1_slot13;
                    var6 = var6.COMMUNITY;
                    var6 = var7.bind(var8)(var6);
                    if(var6) { _fun0001_ip = 80; continue _fun0001 }
case 81:
                    return var3;
case 80:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var6 = 17;
                    var6 = var8[var6];
                    var8 = var7.bind(var3)(var6);
                    var12 = _closure1_slot15;
                    var11 = var12.CHANNEL;
                    var7 = var9;
                    var6 = _closure1_slot16;
                    var6 = var6.GUILD_HOME;
                    var7 = var11.bind(var12)(var7, var6);
                    var6 = {};
                    var6['navigationReplace'] = var10;
                    var10 = true;
                    var6['openChannel'] = var10;
                    var6 = var8.bind(var3)(var7, var6);
                    _fun0001_ip = 30; continue _fun0001;
case 66:
                    var8 = var5.features;
                    var7 = var8.has;
                    var6 = _closure1_slot13;
                    var6 = var6.COMMUNITY;
                    var6 = var7.bind(var8)(var6);
                    if(var6) { _fun0001_ip = 82; continue _fun0001 }
case 83:
                    return var3;
case 82:
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var7 = 14;
                    var7 = var6[var7];
                    var11 = var8.bind(var3)(var7);
                    var10 = var11.pushLazy;
                    var8 = _closure1_slot0;
                    var7 = 16;
                    var7 = var6[var7];
                    var8 = var8.bind(var3)(var7);
                    var7 = 15;
                    var7 = var6[var7];
                    var6 = var6.paths;
                    var8 = var8.bind(var3)(var7, var6);
                    var7 = {};
                    var6 = var9;
                    var7['guildId'] = var6;
                    var6 = _closure1_slot17;
                    var6 = var6.CUSTOMIZE;
                    var7['defaultTab'] = var6;
                    var6 = _closure1_slot18;
                    var6 = var10.bind(var11)(var8, var7, var6);
                    _fun0001_ip = 30; continue _fun0001;
case 64:
                    var7 = var5.features;
                    var6 = var7.has;
                    var5 = _closure1_slot13;
                    var5 = var5.COMMUNITY;
                    var5 = var6.bind(var7)(var5);
                    if(var5) { _fun0001_ip = 84; continue _fun0001 }
case 85:
                    return var3;
case 84:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var6 = 14;
                    var6 = var5[var6];
                    var8 = var7.bind(var3)(var6);
                    var7 = var8.pushLazy;
                    var10 = _closure1_slot0;
                    var6 = 16;
                    var6 = var5[var6];
                    var10 = var10.bind(var3)(var6);
                    var6 = 15;
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
case 30:
                    return var3;
case 62:
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
        var4 = _closure1_slot19;
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