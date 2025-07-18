// app/modules/routing/convertRouteToNavigation.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Routes;
    var _closure1_slot4 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/routing/convertRouteToNavigation.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function convertRouteToNavigation(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var12 = var7.pathname;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var13 = 2;
            var1 = var1[var13];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.getRootNavigationRef;
            var14 = var1.bind(var3)();
            var6 = null;
            if(!(var6 != var14)) { _fun0001_ip = 1544; continue _fun0001 }
 53:
            var1 = var14.isReady;
            var1 = var1.bind(var14)();
            if(!var1) { _fun0001_ip = 1544; continue _fun0001 }
 69:
            var4 = var7.navigationReplace;
            var1 = _closure1_slot4;
            var1 = var1.NOTIFICATIONS;
            if(!(var12 !== var1)) { _fun0001_ip = 1418; continue _fun0001 }
 92:
            var3 = var12.startsWith;
            var1 = '/channels/';
            var1 = var3.bind(var12)(var1);
            if(!var1) { _fun0001_ip = 472; continue _fun0001 }
 115:
            var15 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 5;
            var1 = var11[var8];
            var10 = var15.bind(var5)(var1);
            var9 = var10.matchPath;
            var3 = {};
            var20 = _closure1_slot4;
            var18 = var20.CHANNEL;
            var19 = 6;
            var1 = var11[var19];
            var1 = var15.bind(var5)(var1);
            var16 = var1.RouteParam;
            var1 = var16.guildId;
            var17 = var1.bind(var16)();
            var1 = var11[var19];
            var1 = var15.bind(var5)(var1);
            var22 = var1.RouteParam;
            var21 = var22.channelId;
            var16 = {};
            var1 = true;
            var16['optional'] = var1;
            var16 = var21.bind(var22)(var16);
            var17 = var18.bind(var20)(var17, var16);
            var18 = var20.VOICE_CHAT_CHANNEL_PARTIAL;
            var16 = var11[var19];
            var16 = var15.bind(var5)(var16);
            var22 = var16.RouteParam;
            var21 = var22.guildId;
            var16 = {};
            var23 = 'voiceGuildId';
            var16['name'] = var23;
            var16 = var21.bind(var22)(var16);
            var11 = var11[var19];
            var11 = var15.bind(var5)(var11);
            var21 = var11.RouteParam;
            var15 = var21.channelId;
            var11 = {};
            var22 = 'voiceChannelId';
            var11['name'] = var22;
            var15 = var15.bind(var21)(var11);
            var11 = ':voiceMessageId?';
            var16 = var18.bind(var20)(var16, var15, var11);
            var11 = global;
            var11 = var11.HermesInternal;
            var15 = var11.concat;
            var11 = '';
            var11 = var15.bind(var11)(var17, var16);
            var3['path'] = var11;
            var3 = var9.bind(var10)(var12, var3);
            if(!(var6 == var3)) { _fun0001_ip = 1309; continue _fun0001 }
 350:
            var15 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = var11[var8];
            var10 = var15.bind(var5)(var8);
            var9 = var10.matchPath;
            var8 = {};
            var18 = _closure1_slot4;
            var17 = var18.CHANNEL;
            var16 = var11[var19];
            var16 = var15.bind(var5)(var16);
            var20 = var16.RouteParam;
            var16 = var20.guildId;
            var16 = var16.bind(var20)();
            var11 = var11[var19];
            var11 = var15.bind(var5)(var11);
            var19 = var11.RouteParam;
            var15 = var19.channelId;
            var11 = {};
            var11['optional'] = var1;
            var15 = var15.bind(var19)(var11);
            var11 = ':messageId?';
            var11 = var17.bind(var18)(var16, var15, var11);
            var8['path'] = var11;
            var8 = var9.bind(var10)(var12, var8);
            if(!(var6 == var8)) { _fun0001_ip = 783; continue _fun0001 }
 472:
            var10 = var12.startsWith;
            var9 = '/member-verification/';
            var9 = var10.bind(var12)(var9);
            if(var9) { _fun0001_ip = 639; continue _fun0001 }
 495:
            var10 = var12.startsWith;
            var9 = _closure1_slot4;
            var9 = var9.LOGIN;
            var9 = var10.bind(var12)(var9);
            if(var9) { _fun0001_ip = 605; continue _fun0001 }
 519:
            var10 = var12.startsWith;
            var9 = _closure1_slot4;
            var9 = var9.REGISTER;
            var9 = var10.bind(var12)(var9);
            if(var9) { _fun0001_ip = 605; continue _fun0001 }
 543:
            var10 = var12.startsWith;
            var9 = _closure1_slot4;
            var9 = var9.ACCOUNT_STANDING;
            var9 = var10.bind(var12)(var9);
            var10 = !var9;
            var9 = !var10;
            if(var10) { _fun0001_ip = 603; continue _fun0001 }
 573:
            var11 = var14.navigate;
            var10 = {};
            var15 = 'account-standing';
            var10['name'] = var15;
            var10['params'] = var5;
            var10 = var11.bind(var14)(var10);
            var9 = true;
 603:
            _fun0001_ip = 637; continue _fun0001;
 605:
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 4;
            var10 = var15[var10];
            var11 = var11.bind(var5)(var10);
            var10 = var11.resetToAuthRoute;
            var10 = var10.bind(var11)();
            var9 = true;
 637:
            return var9;
 639:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var9 = 5;
            var9 = var19[var9];
            var11 = var18.bind(var5)(var9);
            var10 = var11.matchPath;
            var9 = {};
            var17 = _closure1_slot4;
            var16 = var17.GUILD_MEMBER_VERIFICATION;
            var15 = 6;
            var15 = var19[var15];
            var15 = var18.bind(var5)(var15);
            var18 = var15.RouteParam;
            var15 = var18.guildId;
            var15 = var15.bind(var18)();
            var15 = var16.bind(var17)(var15);
            var9['path'] = var15;
            var9 = var10.bind(var11)(var12, var9);
            if(!(var6 != var9)) { _fun0001_ip = 779; continue _fun0001 }
 724:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 4;
            var10 = var12[var10];
            var12 = var11.bind(var5)(var10);
            var11 = var12.navigateToMemberVerification;
            var10 = var9.params;
            var10 = var10.guildId;
            var9 = var9.params;
            var9 = var9.inviteCode;
            var9 = var11.bind(var12)(var10, var9);
 779:
            var9 = true;
            return var9;
 783:
            var8 = var8.params;
            var9 = var8.channelId;
            var10 = var8.guildId;
            var11 = var8.messageId;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var8 = 8;
            var8 = var15[var8];
            var12 = var12.bind(var5)(var8);
            var8 = var14.getCurrentRoute;
            var8 = var8.bind(var14)();
            var12 = var12.bind(var5)(var8);
            var8 = _closure1_slot3;
            var13 = var8.bind(var5)(var12, var13);
            var8 = 0;
            var12 = var13[var8];
            var8 = 1;
            var8 = var13[var8];
            if(!(var12 === var10)) { _fun0001_ip = 873; continue _fun0001 }
 866:
            if(!(var8 !== var9)) { _fun0001_ip = 1307; continue _fun0001 }
 873:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 9;
            var8 = var13[var8];
            var12 = var12.bind(var5)(var8);
            var8 = var12.getChatLayout;
            var8 = var8.bind(var12)();
            var8 = var8.isChatLockedOpen;
            if(var8) { _fun0001_ip = 1184; continue _fun0001 }
 915:
            if(!(var6 == var9)) { _fun0001_ip = 974; continue _fun0001 }
 919:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 4;
            var8 = var13[var8];
            var13 = var12.bind(var5)(var8);
            var12 = var13.navigateToRootTab;
            var8 = {};
            var14 = 'guilds';
            var8['screen'] = var14;
            var8['guildId'] = var10;
            var8['channelId'] = var9;
            var8['resetRoot'] = var4;
            var8 = var12.bind(var13)(var8);
 974:
            if(!(var1 === var4)) { _fun0001_ip = 994; continue _fun0001 }
 978:
            var7 = var7.openChannel;
            if(!var7) { _fun0001_ip = 994; continue _fun0001 }
 987:
            if(!(var6 == var9)) { _fun0001_ip = 1127; continue _fun0001 }
 994:
            var7 = false;
            if(!(var7 !== var4)) { _fun0001_ip = 1055; continue _fun0001 }
 1000:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 4;
            var7 = var12[var7];
            var12 = var8.bind(var5)(var7);
            var8 = var12.navigateToRootTab;
            var7 = {};
            var13 = 'guilds';
            var7['screen'] = var13;
            var7['guildId'] = var10;
            var7['channelId'] = var9;
            var7['resetRoot'] = var4;
            var7 = var8.bind(var12)(var7);
 1055:
            var7 = var6 != var9;
            if(!var7) { _fun0001_ip = 1066; continue _fun0001 }
 1062:
            var7 = var1 !== var4;
 1066:
            if(!var7) { _fun0001_ip = 1305; continue _fun0001 }
 1072:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 4;
            var7 = var12[var7];
            var12 = var8.bind(var5)(var7);
            var8 = var12.navigateToChannel;
            var7 = {};
            var7['channelId'] = var9;
            var7['guildId'] = var10;
            var7['messageId'] = var11;
            var7['replaceChannelAndFixRoot'] = var5;
            var7 = var8.bind(var12)(var7);
            _fun0001_ip = 1305; continue _fun0001;
 1127:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 4;
            var7 = var12[var7];
            var12 = var8.bind(var5)(var7);
            var8 = var12.navigateToChannel;
            var7 = {};
            var7['channelId'] = var9;
            var7['guildId'] = var10;
            var7['messageId'] = var11;
            var7['replaceChannelAndFixRoot'] = var4;
            var7['openChannel'] = var1;
            var7 = var8.bind(var12)(var7);
            return var1;
 1184:
            if(!(var6 != var9)) { _fun0001_ip = 1250; continue _fun0001 }
 1188:
            var7 = false;
            if(!(var7 === var4)) { _fun0001_ip = 1250; continue _fun0001 }
 1194:
            if(!(var6 != var10)) { _fun0001_ip = 1305; continue _fun0001 }
 1198:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 4;
            var6 = var8[var6];
            var8 = var7.bind(var5)(var6);
            var7 = var8.navigateToChannel;
            var6 = {};
            var6['channelId'] = var9;
            var6['guildId'] = var10;
            var6['messageId'] = var11;
            var6['replaceChannelAndFixRoot'] = var4;
            var6 = var7.bind(var8)(var6);
            _fun0001_ip = 1305; continue _fun0001;
 1250:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 4;
            var6 = var8[var6];
            var8 = var7.bind(var5)(var6);
            var7 = var8.navigateToRootTab;
            var6 = {};
            var11 = 'guilds';
            var6['screen'] = var11;
            var6['guildId'] = var10;
            var6['channelId'] = var9;
            var6['resetRoot'] = var4;
            var6 = var7.bind(var8)(var6);
 1305:
            return var1;
 1307:
            return var1;
 1309:
            var3 = var3.params;
            var9 = var3.voiceGuildId;
            var10 = var3.voiceChannelId;
            var8 = var3.voiceMessageId;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 7;
            var3 = var7[var3];
            var6 = var6.bind(var5)(var3);
            var3 = var6.isVoicePanelEnabled;
            var3 = var3.bind(var6)();
            if(var3) { _fun0001_ip = 1416; continue _fun0001 }
 1366:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 4;
            var3 = var7[var3];
            var7 = var6.bind(var5)(var3);
            var6 = var7.navigateToChannel;
            var3 = {};
            var3['channelId'] = var10;
            var3['guildId'] = var9;
            var3['messageId'] = var8;
            var3['replaceChannelAndFixRoot'] = var4;
            var3 = var6.bind(var7)(var3);
 1416:
            return var1;
 1418:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 3;
            var1 = var6[var1];
            var6 = var3.bind(var5)(var1);
            var3 = var6.getIsNotificationsTabMerged;
            var1 = {};
            var7 = 'convertRouteToNavigation';
            var1['location'] = var7;
            var1 = var3.bind(var6)(var1);
            var1 = var1.enabled;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.navigateToRootTab;
            if(var1) { _fun0001_ip = 1516; continue _fun0001 }
 1493:
            var1 = {};
            var5 = 'notifications';
            var1['screen'] = var5;
            var1['resetRoot'] = var4;
            var1 = var2.bind(var3)(var1);
            _fun0001_ip = 1540; continue _fun0001;
 1516:
            var1 = {'screen': 'icymi', 'icymiScreen': 'notifications-screen'};
            var1['resetRoot'] = var4;
            var1 = var2.bind(var3)(var1);
 1540:
            var1 = true;
            return var1;
 1544:
            var1 = true;
            return var1;
        }
    };
    var3['convertRouteToNavigation'] = var2;
    return var1;
})();