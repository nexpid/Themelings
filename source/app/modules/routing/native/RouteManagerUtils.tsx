// app/modules/routing/native/RouteManagerUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var12 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var12;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var13;
    var1 = function matchPathToRoutes(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.matchPath;
        var2 = {'path': null, 'strict': false, 'exact': false};
        var1 = arg2;
        var2['path'] = var1;
        var1 = arg1;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var9 = function extractParamsFromVoiceModalRoute(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var4 = _closure1_slot18;
            var3 = var8.pathname;
            var1 = _closure1_slot17;
            var7 = undefined;
            var9 = var4.bind(var7)(var3, var1);
            var3 = null;
            var4 = var3 == var9;
            var1 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var9.params;
case 2:
            if(!(var3 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = {};
case 4:
            var5 = var1.voiceChannelId;
            var4 = var1.voiceGuildId;
            var3 = var1.voiceMessageId;
            var1 = {};
            var6 = _closure1_slot25;
            var2 = {};
            var2['match'] = var9;
            var2['location'] = var8;
            var10 = var6.bind(var7)(var2);
            var11 = var1;
            var2 = copyDataProperties(var11, var10);
            var2 = 'voiceChannelId';
            var1[1] = var5;
            var2 = 'voiceGuildId';
            var1[1] = var4;
            var2 = 'voiceMessageId';
            var1[1] = var3;
            return var1;
        }
    };
    var _closure1_slot19 = var9;
    var1 = function selectLastVisitedTextChannel(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var3 = _closure1_slot7;
            var2 = var3.getChannel;
            var5 = _closure1_slot10;
            var1 = var5.getLastSelectedChannelId;
            var1 = var1.bind(var5)();
            var2 = var2.bind(var3)(var1);
            var5 = null;
            var6 = var5 == var2;
            var3 = undefined;
            var1 = undefined;
            if(var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var2.type;
case 6:
            if(!(var5 != var1)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var6 = _closure1_slot6;
            var8 = var5 == var2;
            var1 = undefined;
            if(var8) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var1 = var2.type;
case 10:
            var1 = var6.bind(var3)(var1);
            if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 8:
            var6 = _closure1_slot10;
            var1 = var6.getMostRecentSelectedTextChannelId;
            var1 = var1.bind(var6)(var7);
            if(!(var5 == var1)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var6 = _closure1_slot9;
            var4 = var6.getDefaultChannel;
            var4 = var4.bind(var6)(var7);
            var5 = var5 == var4;
            var3 = undefined;
            if(var5) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var3 = var4.id;
case 15:
            var1 = var3;
case 13:
            _fun0002_ip = 17; continue _fun0002;
case 12:
            var1 = var2.id;
case 17:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var8 = function voiceRouteRewriter(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var7 = arg1;
            var3 = var7.state;
            var2 = _closure1_slot25;
            var1 = {};
            var8 = _closure1_slot18;
            var6 = var7.pathname;
            var4 = _closure1_slot17;
            var10 = undefined;
            var4 = var8.bind(var10)(var6, var4);
            var1['match'] = var4;
            var1['location'] = var7;
            var4 = var2.bind(var10)(var1);
            var9 = var4.channelId;
            var6 = var4.guildId;
            var2 = _closure1_slot4;
            var1 = _closure1_slot3;
            var4 = var2.bind(var10)(var4, var1);
            var2 = _closure1_slot7;
            var1 = var2.getChannel;
            var2 = var1.bind(var2)(var9);
            var8 = null;
            var11 = var8 == var9;
            var1 = null;
            if(var11) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var11 = var8 == var6;
            var1 = null;
            if(var11) { _fun0003_ip = 18; continue _fun0003 }
case 20:
            var11 = var8 == var2;
            var12 = undefined;
            if(var11) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var12 = var2.type;
case 21:
            var11 = _closure1_slot13;
            var11 = var11.GUILD_VOICE;
            if(!(var12 !== var11)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var11 = var8 == var2;
            var10 = undefined;
            if(var11) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var10 = var2.type;
case 25:
            var2 = _closure1_slot13;
            var2 = var2.GUILD_STAGE_VOICE;
            var1 = null;
            if(!(var10 === var2)) { _fun0003_ip = 18; continue _fun0003 }
case 23:
            var2 = {};
            var15 = var2;
            var14 = var4;
            var4 = copyDataProperties(var15, var14);
            var4 = 'channelId';
            var2[3] = var9;
            var4 = 'guildId';
            var2[3] = var6;
            var1 = var2;
case 18:
            if(!(var8 == var1)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            return var8;
case 27:
            var2 = _closure1_slot15;
            if(!(var8 != var2)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var6 = _closure1_slot15;
            var4 = var6.log;
            var2 = global;
            var10 = var2.JSON;
            var9 = var10.stringify;
            var10 = var9.bind(var10)(var1);
            var2 = var2.HermesInternal;
            var9 = var2.concat;
            var2 = 'voiceRouteRewriter: has voiceChannelParams = ';
            var2 = var9.bind(var2)(var10);
            var2 = var4.bind(var6)(var2);
case 29:
            var2 = _closure1_slot8;
            var9 = var2.lastNonVoiceRoute;
            var10 = _closure1_slot12;
            var6 = var10.VOICE_CHAT_CHANNEL_PARTIAL;
            var4 = var1.guildId;
            var2 = var1.channelId;
            var1 = var1.messageId;
            var6 = var6.bind(var10)(var4, var2, var1);
            var2 = global;
            var1 = var2.HermesInternal;
            var4 = var1.concat;
            var1 = '';
            var4 = var4.bind(var1)(var9, var6);
            var6 = var7.pathname;
            var1 = null;
            if(!(var4 !== var6)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var6 = _closure1_slot15;
            if(!(var8 != var6)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var6 = _closure1_slot15;
            var5 = var6.log;
            var9 = var7.pathname;
            var2 = var2.HermesInternal;
            var8 = var2.concat;
            var7 = 'voiceRouteRewriter: rewriting route: ';
            var2 = ' -> ';
            var2 = var8.bind(var7)(var9, var2, var4);
            var2 = var5.bind(var6)(var2);
case 33:
            var2 = {};
            var2['path'] = var4;
            var2['state'] = var3;
            var1 = var2;
case 31:
            return var1;
        }
    };
    var _closure1_slot21 = var8;
    var7 = function saveLastRouteListener(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 14;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.saveLastRoute;
        var2 = arg1;
        var2 = var2.pathname;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot22 = var7;
    var6 = function saveLastNonVoiceRouteListener(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var7 = arg1;
            var4 = _closure1_slot18;
            var3 = var7.pathname;
            var2 = _closure1_slot17;
            var1 = undefined;
            var8 = var4.bind(var1)(var3, var2);
            var6 = _closure1_slot7;
            var4 = var6.getChannel;
            var3 = null;
            var9 = var3 == var8;
            var2 = undefined;
            if(var9) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var9 = var8.params;
            var2 = var9.channelId;
case 35:
            var4 = var4.bind(var6)(var2);
            var2 = var3 == var4;
            var9 = undefined;
            if(var2) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var9 = var4.type;
case 37:
            var2 = _closure1_slot13;
            var6 = var2.GUILD_VOICE;
            var2 = null;
            if(!(var9 !== var6)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var9 = var3 == var4;
            var6 = undefined;
            if(var9) { _fun0004_ip = 41; continue _fun0004 }
case 14:
            var6 = var4.type;
case 41:
            var4 = _closure1_slot13;
            var4 = var4.GUILD_STAGE_VOICE;
            var2 = null;
            if(!(var6 !== var4)) { _fun0004_ip = 39; continue _fun0004 }
case 42:
            var6 = _closure1_slot25;
            var4 = {};
            var4['match'] = var8;
            var4['location'] = var7;
            var2 = var6.bind(var1)(var4);
case 39:
            if(!(var3 != var2)) { _fun0004_ip = 43; continue _fun0004 }
case 26:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 14;
            var3 = var6[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.saveLastNonVoiceRoute;
            var7 = _closure1_slot12;
            var6 = var7.CHANNEL;
            var5 = var2.guildId;
            var2 = var2.channelId;
            var2 = var6.bind(var7)(var5, var2);
            var2 = var3.bind(var4)(var2);
case 43:
            return var1;
        }
    };
    var _closure1_slot23 = var6;
    var5 = function updateSelectedChannelListener(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var14 = arg1;
            var2 = _closure1_slot19;
            var3 = undefined;
            var2 = var2.bind(var3)(var14);
            var10 = null;
            if(!(var10 == var2)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var2 = {};
case 44:
            var8 = var2.guildId;
            var7 = var2.channelId;
            var6 = var2.messageId;
            var5 = var2.jumpType;
            var18 = var2.voiceChannelId;
            var17 = var2.voiceGuildId;
            var16 = var2.voiceMessageId;
            var4 = var2.skipMessageFetch;
            if(!(var10 == var18)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            if(!(var10 != var17)) { _fun0005_ip = 48; continue _fun0005 }
case 46:
            var11 = _closure1_slot7;
            var2 = var11.getChannel;
            var2 = var2.bind(var11)(var18);
            var _closure2_slot0 = var2;
            var11 = var10 == var2;
            var12 = undefined;
            if(var11) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var12 = var2.type;
case 49:
            var11 = _closure1_slot13;
            var11 = var11.GUILD_VOICE;
            if(!(var12 !== var11)) { _fun0005_ip = 51; continue _fun0005 }
case 15:
            var11 = var10 == var2;
            var12 = undefined;
            if(var11) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var12 = var2.type;
case 52:
            var11 = _closure1_slot13;
            var11 = var11.GUILD_STAGE_VOICE;
            if(!(var12 !== var11)) { _fun0005_ip = 51; continue _fun0005 }
case 54:
            var11 = _closure1_slot15;
            if(!(var10 != var11)) { _fun0005_ip = 55; continue _fun0005 }
case 56:
            var13 = _closure1_slot15;
            var12 = var13.log;
            var11 = var10 == var2;
            var24 = undefined;
            if(var11) { _fun0005_ip = 57; continue _fun0005 }
case 58:
            var24 = var2.id;
case 57:
            var11 = global;
            var19 = var11.JSON;
            var15 = var19.stringify;
            var28 = var15.bind(var19)(var14);
            var20 = var11.JSON;
            var19 = var20.stringify;
            var15 = {};
            var15['guildId'] = var8;
            var15['channelId'] = var7;
            var15['messageId'] = var6;
            var15['jumpType'] = var5;
            var15['voiceChannelId'] = var18;
            var15['voiceGuildId'] = var17;
            var15['voiceMessageId'] = var16;
            var26 = var19.bind(var20)(var15);
            var11 = var11.HermesInternal;
            var21 = var11.concat;
            var33 = 'UpdateSelectedChannelListener -> !!!VERY BAD!!! channel.id ';
            var31 = ' (voiceChannelId ';
            var29 = ') is not a voice channel! and yet RouteUtils thinks it is! ';
            var11 = ' ';
            var32 = var24;
            var30 = var18;
            var27 = var11;
            var25 = var11;
            var11 = var33[var21](var32, var31, var30, var29, var28, var27, var26, var25, var24);
            var11 = var12.bind(var13)(var11);
            _fun0005_ip = 55; continue _fun0005;
case 51:
            var11 = _closure1_slot15;
            if(!(var10 != var11)) { _fun0005_ip = 59; continue _fun0005 }
case 60:
            var13 = _closure1_slot15;
            var12 = var13.verbose;
            var11 = global;
            var19 = var11.JSON;
            var15 = var19.stringify;
            var21 = var15.bind(var19)(var14);
            var20 = var11.JSON;
            var19 = var20.stringify;
            var15 = {};
            var15['guildId'] = var8;
            var15['channelId'] = var7;
            var15['messageId'] = var6;
            var15['jumpType'] = var5;
            var15['voiceChannelId'] = var18;
            var15['voiceGuildId'] = var17;
            var15['voiceMessageId'] = var16;
            var30 = var19.bind(var20)(var15);
            var11 = var11.HermesInternal;
            var19 = var11.concat;
            var33 = 'UpdateSelectedChannelListener -> voice route present! ';
            var11 = ' ';
            var32 = var21;
            var31 = var11;
            var29 = var11;
            var11 = var33[var19](var32, var31, var30, var29, var28);
            var11 = var12.bind(var13)(var11);
case 59:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 18;
            var11 = var13[var11];
            var12 = var12.bind(var3)(var11);
            var11 = var12.isVoicePanelEnabled;
            var11 = var11.bind(var12)(var2);
            if(var11) { _fun0005_ip = 61; continue _fun0005 }
case 62:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var11 = 17;
            var11 = var13[var11];
            var15 = var12.bind(var3)(var11);
            var11 = var15.selectGuild;
            var11 = var11.bind(var15)(var17);
            var11 = 12;
            var11 = var13[var11];
            var13 = var12.bind(var3)(var11);
            var12 = var13.selectChannel;
            var11 = {};
            var11['guildId'] = var17;
            var11['channelId'] = var18;
            var11['messageId'] = var16;
            var11['jumpType'] = var5;
            var11 = var12.bind(var13)(var11);
case 61:
            var19 = _closure1_slot0;
            var12 = _closure1_slot2;
            var11 = 19;
            var11 = var12[var11];
            var15 = var19.bind(var3)(var11);
            var13 = var15.isModalOpen;
            var11 = 16;
            var12 = var12[var11];
            var20 = var19.bind(var3)(var12);
            var19 = var20.getVoiceChannelKey;
            var12 = var2.id;
            var12 = var19.bind(var20)(var12);
            var12 = var13.bind(var15)(var12);
            if(var12) { _fun0005_ip = 63; continue _fun0005 }
case 64:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var15 = 15;
            var15 = var13[var15];
            var19 = var12.bind(var3)(var15);
            var15 = var19.popAboveKey;
            var20 = _closure1_slot0;
            var11 = var13[var11];
            var21 = var20.bind(var3)(var11);
            var20 = var21.getVoiceChannelKey;
            var11 = var2.id;
            var11 = var20.bind(var21)(var11);
            var11 = var15.bind(var19)(var11);
            var11 = 20;
            var11 = var13[var11];
            var12 = var12.bind(var3)(var11);
            var11 = var12.wait;
            var9 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openGuildVoiceModal;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var9 = var11.bind(var12)(var9);
case 63:
            var9 = var2.isGuildVoice;
            var9 = var9.bind(var2)();
            if(!var9) { _fun0005_ip = 65; continue _fun0005 }
case 66:
            var9 = var10 != var16;
case 65:
            if(var9) { _fun0005_ip = 67; continue _fun0005 }
case 68:
            var11 = var2.isGuildStageVoice;
            var9 = var11.bind(var2)();
case 67:
            if(!var9) { _fun0005_ip = 55; continue _fun0005 }
case 69:
            var11 = _closure1_slot5;
            var9 = var2.id;
            var2 = _closure1_slot14;
            var2 = var2.OPEN;
            var2 = var11.bind(var3)(var9, var2);
            var2 = var10 != var17;
            if(!var2) { _fun0005_ip = 70; continue _fun0005 }
case 71:
            var2 = var10 != var18;
case 70:
            if(!var2) { _fun0005_ip = 72; continue _fun0005 }
case 73:
            var2 = var10 != var16;
case 72:
            if(!var2) { _fun0005_ip = 55; continue _fun0005 }
case 74:
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 21;
            var2 = var11[var2];
            var9 = var9.bind(var3)(var2);
            var2 = var9.jumpToVoiceChannelMessage;
            var33 = var9;
            var32 = var17;
            var31 = var18;
            var30 = var16;
            var29 = var5;
            var2 = var33[var2](var32, var31, var30, var29, var28);
case 55:
            return var3;
case 48:
            var2 = _closure1_slot15;
            if(!(var10 != var2)) { _fun0005_ip = 75; continue _fun0005 }
case 76:
            var11 = _closure1_slot15;
            var9 = var11.verbose;
            var2 = global;
            var13 = var2.JSON;
            var12 = var13.stringify;
            var15 = var12.bind(var13)(var14);
            var14 = var2.JSON;
            var13 = var14.stringify;
            var12 = {};
            var12['guildId'] = var8;
            var12['channelId'] = var7;
            var12['messageId'] = var6;
            var12['jumpType'] = var5;
            var12['voiceChannelId'] = var18;
            var12['voiceGuildId'] = var17;
            var12['voiceMessageId'] = var16;
            var30 = var13.bind(var14)(var12);
            var2 = var2.HermesInternal;
            var13 = var2.concat;
            var33 = 'UpdateSelectedChannelListener -> no voice route present in ';
            var2 = ' ';
            var32 = var15;
            var31 = var2;
            var29 = var2;
            var2 = var33[var13](var32, var31, var30, var29, var28);
            var2 = var9.bind(var11)(var2);
case 75:
            var9 = _closure1_slot10;
            var2 = var9.getLastSelectedChannelId;
            var11 = var2.bind(var9)();
            var9 = _closure1_slot7;
            var2 = var9.getChannel;
            var2 = var2.bind(var9)(var11);
            var9 = var10 != var2;
            if(!var9) { _fun0005_ip = 77; continue _fun0005 }
case 78:
            var11 = var2.isGuildVoice;
            var9 = var11.bind(var2)();
case 77:
            if(var9) { _fun0005_ip = 79; continue _fun0005 }
case 80:
            var10 = var10 != var2;
            if(!var10) { _fun0005_ip = 81; continue _fun0005 }
case 82:
            var11 = var2.isGuildStageVoice;
            var10 = var11.bind(var2)();
case 81:
            var9 = var10;
case 79:
            if(!var9) { _fun0005_ip = 83; continue _fun0005 }
case 84:
            var10 = _closure1_slot1;
            var13 = _closure1_slot2;
            var9 = 15;
            var9 = var13[var9];
            var10 = var10.bind(var3)(var9);
            var9 = var10.popWithKey;
            var12 = _closure1_slot0;
            var11 = 16;
            var11 = var13[var11];
            var12 = var12.bind(var3)(var11);
            var11 = var12.getVoiceChannelKey;
            var2 = var2.id;
            var2 = var11.bind(var12)(var2);
            var2 = var9.bind(var10)(var2);
case 83:
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 17;
            var1 = var9[var1];
            var10 = var2.bind(var3)(var1);
            var1 = var10.selectGuild;
            var1 = var1.bind(var10)(var8);
            var1 = 12;
            var1 = var9[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.selectChannel;
            var1 = {};
            var1['guildId'] = var8;
            var1['channelId'] = var7;
            var1['messageId'] = var6;
            var1['jumpType'] = var5;
            var1['skipMessageFetch'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot24 = var5;
    var4 = function extractParams(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var1 = var2.match;
            var2 = var2.location;
            var5 = null;
            if(!(var5 != var1)) { _fun0006_ip = 85; continue _fun0006 }
case 86:
            var1 = var1.params;
            var8 = var1.guildId;
            var6 = var1.channelId;
            var4 = var1.messageId;
            var3 = var2.jumpType;
            var10 = _closure1_slot0;
            var1 = _closure1_slot2;
            var11 = 22;
            var1 = var1[var11];
            var9 = undefined;
            var1 = var10.bind(var9)(var1);
            var1 = var1.JumpTypes;
            var1 = var1.INSTANT;
            if(!(var3 !== var1)) { _fun0006_ip = 87; continue _fun0006 }
case 88:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var11];
            var1 = var3.bind(var9)(var1);
            var1 = var1.JumpTypes;
            var3 = var1.ANIMATED;
            _fun0006_ip = 89; continue _fun0006;
case 87:
            var10 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var11];
            var1 = var10.bind(var9)(var1);
            var1 = var1.JumpTypes;
            var3 = var1.INSTANT;
case 89:
            var1 = {};
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var10 = 10;
            var11 = var11[var10];
            var12 = var12.bind(var9)(var11);
            var11 = var12.isValidGuildId;
            var11 = var11.bind(var12)(var8);
            if(var11) { _fun0006_ip = 90; continue _fun0006 }
case 91:
            var8 = _closure1_slot11;
case 90:
            var1['guildId'] = var8;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var10];
            var8 = var8.bind(var9)(var7);
            var7 = var8.isValidChannelId;
            var7 = var7.bind(var8)(var6);
            var5 = null;
            if(!var7) { _fun0006_ip = 92; continue _fun0006 }
case 93:
            var5 = var6;
case 92:
            var1['channelId'] = var5;
            var1['messageId'] = var4;
            var1['jumpType'] = var3;
            var2 = var2.skipMessageFetch;
            var2 = !var2;
            var2 = !var2;
            var1['skipMessageFetch'] = var2;
            return var1;
case 85:
            var1 = {'guildId': null, 'channelId': null, 'messageId': null, 'jumpType': null, 'skipMessageFetch': false};
            var3 = _closure1_slot11;
            var1['guildId'] = var3;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 22;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.JumpTypes;
            var2 = var2.ANIMATED;
            var1['jumpType'] = var2;
            return var1;
        }
    };
    var _closure1_slot25 = var4;
    var1 = function logRouteChange(arg1) {
        var3 = _closure1_slot15;
        var2 = var3.log;
        var1 = arg1;
        var5 = var1.pathname;
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var1 = 'Navigated to: ';
        var1 = var4.bind(var1)(var5);
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = ['channelId', 'guildId'];
    var _closure1_slot3 = var1;
    var11 = global;
    var16 = var11.Object;
    var15 = var16.defineProperty;
    var10 = {};
    var20 = true;
    var10['value'] = var20;
    var1 = '__esModule';
    var1 = var15.bind(var16)(var3, var1, var10);
    var1 = 0;
    var10 = var13[var1];
    var1 = undefined;
    var10 = var14.bind(var1)(var10);
    var _closure1_slot4 = var10;
    var10 = 1;
    var10 = var13[var10];
    var10 = var12.bind(var1)(var10);
    var10 = var10.setVoiceChatDrawerState;
    var _closure1_slot5 = var10;
    var10 = 2;
    var10 = var13[var10];
    var10 = var12.bind(var1)(var10);
    var10 = var10.isGuildSelectableChannelType;
    var _closure1_slot6 = var10;
    var10 = 3;
    var10 = var13[var10];
    var10 = var14.bind(var1)(var10);
    var _closure1_slot7 = var10;
    var10 = 4;
    var10 = var13[var10];
    var10 = var14.bind(var1)(var10);
    var _closure1_slot8 = var10;
    var10 = 5;
    var10 = var13[var10];
    var10 = var14.bind(var1)(var10);
    var _closure1_slot9 = var10;
    var10 = 6;
    var10 = var13[var10];
    var10 = var14.bind(var1)(var10);
    var _closure1_slot10 = var10;
    var10 = 7;
    var10 = var13[var10];
    var10 = var12.bind(var1)(var10);
    var15 = var10.ME;
    var _closure1_slot11 = var15;
    var18 = var10.Routes;
    var _closure1_slot12 = var18;
    var10 = var10.ChannelTypes;
    var _closure1_slot13 = var10;
    var10 = 8;
    var10 = var13[var10];
    var10 = var12.bind(var1)(var10);
    var10 = var10.VoiceChatDrawerState;
    var _closure1_slot14 = var10;
    var10 = 9;
    var10 = var13[var10];
    var15 = var14.bind(var1)(var10);
    var10 = var15.prototype;
    var14 = Object.create(var10, {constructor: {value: var15}});
    var23 = 'RouteUtils';
    var24 = var14;
    var10 = new var24[var15](var23, var22);
    var10 = var10 instanceof Object ? var10 : var14;
    var _closure1_slot15 = var10;
    var10 = false;
    var _closure1_slot16 = var10;
    var17 = var18.CHANNEL;
    var14 = 10;
    var10 = var13[var14];
    var10 = var12.bind(var1)(var10);
    var15 = var10.RouteParam;
    var10 = var15.guildId;
    var16 = var10.bind(var15)();
    var10 = var13[var14];
    var10 = var12.bind(var1)(var10);
    var19 = var10.RouteParam;
    var15 = var19.channelId;
    var10 = {};
    var10['optional'] = var20;
    var15 = var15.bind(var19)(var10);
    var10 = ':messageId?';
    var10 = var17.bind(var18)(var16, var15, var10);
    var17 = var18.VOICE_CHAT_CHANNEL_PARTIAL;
    var15 = var13[var14];
    var15 = var12.bind(var1)(var15);
    var19 = var15.RouteParam;
    var16 = var19.guildId;
    var15 = {};
    var20 = 'voiceGuildId';
    var15['name'] = var20;
    var16 = var16.bind(var19)(var15);
    var14 = var13[var14];
    var14 = var12.bind(var1)(var14);
    var19 = var14.RouteParam;
    var15 = var19.channelId;
    var14 = {};
    var20 = 'voiceChannelId';
    var14['name'] = var20;
    var15 = var15.bind(var19)(var14);
    var14 = ':voiceMessageId?';
    var15 = var17.bind(var18)(var16, var15, var14);
    var11 = var11.HermesInternal;
    var14 = var11.concat;
    var11 = '';
    var14 = var14.bind(var11)(var10, var15);
    var11 = new Array(2);
    var11[0] = var14;
    var11[1] = var10;
    var _closure1_slot17 = var11;
    var11 = 24;
    var11 = var13[var11];
    var13 = var12.bind(var1)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = 'modules/routing/native/RouteManagerUtils.tsx';
    var11 = var12.bind(var13)(var11);
    var3['MAIN_DRAWER_ROUTES'] = var10;
    var3['extractParamsFromVoiceModalRoute'] = var9;
    var9 = function popVoiceRoute(arg1) {
        var9 = arg1;
        var1 = _closure1_slot8;
        var4 = var1.lastNonVoiceRoute;
        var5 = _closure1_slot15;
        var3 = var5.log;
        var1 = global;
        var1 = var1.HermesInternal;
        var6 = var1.concat;
        var1 = 'popVoiceRoute: last non-voice route is ';
        var1 = var6.bind(var1)(var4);
        var1 = var3.bind(var5)(var1);
        var6 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 12;
        var3 = var5[var1];
        var1 = undefined;
        var7 = var6.bind(var1)(var3);
        var6 = var7.selectChannel;
        var3 = {};
        var3['guildId'] = var9;
        var8 = _closure1_slot20;
        var8 = var8.bind(var1)(var9);
        var3['channelId'] = var8;
        var3 = var6.bind(var7)(var3);
        var3 = _closure1_slot0;
        var2 = 13;
        var2 = var5[var2];
        var3 = var3.bind(var1)(var2);
        var2 = var3.transitionTo;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var3['popVoiceRoute'] = var9;
    var9 = function transitionToVoiceRoute(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var1 = _closure1_slot8;
            var14 = var1.defaultRoute;
            var6 = _closure1_slot18;
            var3 = _closure1_slot17;
            var1 = undefined;
            var7 = var6.bind(var1)(var14, var3);
            var6 = null;
            var8 = var6 == var7;
            var3 = undefined;
            if(var8) { _fun0007_ip = 6; continue _fun0007 }
case 94:
            var3 = var7.params;
case 6:
            if(!(var6 == var3)) { _fun0007_ip = 95; continue _fun0007 }
case 9:
            var3 = {};
case 95:
            var11 = var3.voiceChannelId;
            var8 = _closure1_slot15;
            var7 = var8.log;
            var3 = global;
            var6 = var3.HermesInternal;
            var13 = var6.concat;
            var22 = 'transitionToVoiceRoute(<';
            var20 = '>, <';
            var18 = '>), current route ';
            var16 = ' has voiceChannelId ';
            var21 = var5;
            var19 = var4;
            var17 = var14;
            var15 = var11;
            var6 = var22[var13](var21, var20, var19, var18, var17, var16, var15, var14);
            var6 = var7.bind(var8)(var6);
            if(!(var11 === var4)) { _fun0007_ip = 96; continue _fun0007 }
case 97:
            var7 = _closure1_slot15;
            var6 = var7.log;
            var3 = var3.HermesInternal;
            var10 = var3.concat;
            var22 = 'transitionToVoiceRoute -> ';
            var20 = ' === ';
            var18 = '. staying where we are';
            var21 = var11;
            var19 = var4;
            var3 = var22[var10](var21, var20, var19, var18, var17);
            var3 = var6.bind(var7)(var3);
            _fun0007_ip = 98; continue _fun0007;
case 96:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 13;
            var2 = var6[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.transitionToGuild;
            var2 = var2.bind(var3)(var5, var4);
case 98:
            return var1;
        }
    };
    var3['transitionToVoiceRoute'] = var9;
    var3['voiceRouteRewriter'] = var8;
    var3['saveLastRouteListener'] = var7;
    var3['saveLastNonVoiceRouteListener'] = var6;
    var3['updateSelectedChannelListener'] = var5;
    var3['extractParams'] = var4;
    var4 = function initializeRouteManagerIfNeeded() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = _closure1_slot16;
            if(var1) { _fun0008_ip = 99; continue _fun0008 }
case 100:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 23;
            var6 = var5[var1];
            var3 = undefined;
            var8 = var4.bind(var3)(var6);
            var7 = var8.addRouteRewriter;
            var6 = _closure1_slot21;
            var6 = var7.bind(var8)(var6);
            var6 = var5[var1];
            var8 = var4.bind(var3)(var6);
            var7 = var8.addRouteChangeListener;
            var6 = _closure1_slot22;
            var6 = var7.bind(var8)(var6);
            var6 = var5[var1];
            var8 = var4.bind(var3)(var6);
            var7 = var8.addRouteChangeListener;
            var6 = _closure1_slot23;
            var6 = var7.bind(var8)(var6);
            var6 = var5[var1];
            var8 = var4.bind(var3)(var6);
            var7 = var8.addRouteChangeListener;
            var6 = _closure1_slot24;
            var6 = var7.bind(var8)(var6);
            var6 = var5[var1];
            var8 = var4.bind(var3)(var6);
            var7 = var8.addRouteChangeListener;
            var6 = _closure1_slot26;
            var6 = var7.bind(var8)(var6);
            var1 = var5[var1];
            var3 = var4.bind(var3)(var1);
            var1 = var3.initialize;
            var1 = var1.bind(var3)();
            var1 = true;
            _closure1_slot16 = var1;
case 99:
            var1 = undefined;
            return var1;
        }
    };
    var3['initializeRouteManagerIfNeeded'] = var4;
    var2 = function cleanupRouteManager() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = _closure1_slot16;
            if(!var1) { _fun0009_ip = 101; continue _fun0009 }
case 100:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 23;
            var6 = var5[var1];
            var3 = undefined;
            var8 = var4.bind(var3)(var6);
            var7 = var8.removeRouteRewriter;
            var6 = _closure1_slot21;
            var6 = var7.bind(var8)(var6);
            var6 = var5[var1];
            var8 = var4.bind(var3)(var6);
            var7 = var8.removeRouteChangeListener;
            var6 = _closure1_slot22;
            var6 = var7.bind(var8)(var6);
            var6 = var5[var1];
            var8 = var4.bind(var3)(var6);
            var7 = var8.removeRouteChangeListener;
            var6 = _closure1_slot23;
            var6 = var7.bind(var8)(var6);
            var6 = var5[var1];
            var8 = var4.bind(var3)(var6);
            var7 = var8.removeRouteChangeListener;
            var6 = _closure1_slot24;
            var6 = var7.bind(var8)(var6);
            var6 = var5[var1];
            var8 = var4.bind(var3)(var6);
            var7 = var8.removeRouteChangeListener;
            var6 = _closure1_slot26;
            var6 = var7.bind(var8)(var6);
            var1 = var5[var1];
            var3 = var4.bind(var3)(var1);
            var1 = var3.cleanup;
            var1 = var1.bind(var3)();
            var1 = false;
            _closure1_slot16 = var1;
case 101:
            var1 = undefined;
            return var1;
        }
    };
    var3['cleanupRouteManager'] = var2;
    return var1;
})();