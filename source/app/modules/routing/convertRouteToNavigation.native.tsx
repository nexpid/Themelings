// app/modules/routing/convertRouteToNavigation.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/routing/convertRouteToNavigation.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function convertRouteToNavigation(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var12 = var7.pathname;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var13 = 2;
            var2 = var2[var13];
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var2 = var4.getRootNavigationRef;
            var14 = var2.bind(var4)();
            var6 = null;
            if(!(var6 != var14)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var14.isReady;
            var2 = var2.bind(var14)();
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var4 = var7.navigationReplace;
            var2 = _closure1_slot4;
            var2 = var2.NOTIFICATIONS;
            if(!(var12 !== var2)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var5 = var12.startsWith;
            var2 = '/channels/';
            var2 = var5.bind(var12)(var2);
            if(!var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var15 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 4;
            var2 = var11[var8];
            var10 = var15.bind(var3)(var2);
            var9 = var10.matchPath;
            var5 = {};
            var20 = _closure1_slot4;
            var18 = var20.CHANNEL;
            var19 = 5;
            var2 = var11[var19];
            var2 = var15.bind(var3)(var2);
            var16 = var2.RouteParam;
            var2 = var16.guildId;
            var17 = var2.bind(var16)();
            var2 = var11[var19];
            var2 = var15.bind(var3)(var2);
            var22 = var2.RouteParam;
            var21 = var22.channelId;
            var16 = {};
            var2 = true;
            var16['optional'] = var2;
            var16 = var21.bind(var22)(var16);
            var17 = var18.bind(var20)(var17, var16);
            var18 = var20.VOICE_CHAT_CHANNEL_PARTIAL;
            var16 = var11[var19];
            var16 = var15.bind(var3)(var16);
            var22 = var16.RouteParam;
            var21 = var22.guildId;
            var16 = {};
            var23 = 'voiceGuildId';
            var16['name'] = var23;
            var16 = var21.bind(var22)(var16);
            var11 = var11[var19];
            var11 = var15.bind(var3)(var11);
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
            var5['path'] = var11;
            var5 = var9.bind(var10)(var12, var5);
            if(!(var6 == var5)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var15 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = var11[var8];
            var10 = var15.bind(var3)(var8);
            var9 = var10.matchPath;
            var8 = {};
            var18 = _closure1_slot4;
            var17 = var18.CHANNEL;
            var16 = var11[var19];
            var16 = var15.bind(var3)(var16);
            var20 = var16.RouteParam;
            var16 = var20.guildId;
            var16 = var16.bind(var20)();
            var11 = var11[var19];
            var11 = var15.bind(var3)(var11);
            var19 = var11.RouteParam;
            var15 = var19.channelId;
            var11 = {};
            var11['optional'] = var2;
            var15 = var15.bind(var19)(var11);
            var11 = ':messageId?';
            var11 = var17.bind(var18)(var16, var15, var11);
            var8['path'] = var11;
            var8 = var9.bind(var10)(var12, var8);
            if(!(var6 == var8)) { _fun0001_ip = 11; continue _fun0001 }
case 7:
            var10 = var12.startsWith;
            var9 = '/member-verification/';
            var9 = var10.bind(var12)(var9);
            if(var9) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var10 = var12.startsWith;
            var9 = _closure1_slot4;
            var9 = var9.LOGIN;
            var9 = var10.bind(var12)(var9);
            if(var9) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var10 = var12.startsWith;
            var9 = _closure1_slot4;
            var9 = var9.REGISTER;
            var9 = var10.bind(var12)(var9);
            if(var9) { _fun0001_ip = 14; continue _fun0001 }
case 16:
            var10 = var12.startsWith;
            var9 = _closure1_slot4;
            var9 = var9.ACCOUNT_STANDING;
            var9 = var10.bind(var12)(var9);
            var10 = !var9;
            var9 = !var10;
            if(var10) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var11 = var14.navigate;
            var10 = {};
            var15 = 'account-standing';
            var10['name'] = var15;
            var10['params'] = var3;
            var10 = var11.bind(var14)(var10);
            var9 = true;
case 17:
            _fun0001_ip = 19; continue _fun0001;
case 14:
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 3;
            var10 = var15[var10];
            var11 = var11.bind(var3)(var10);
            var10 = var11.resetToAuthRoute;
            var10 = var10.bind(var11)();
            var9 = true;
case 19:
            return var9;
case 12:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var9 = 4;
            var9 = var19[var9];
            var11 = var18.bind(var3)(var9);
            var10 = var11.matchPath;
            var9 = {};
            var17 = _closure1_slot4;
            var16 = var17.GUILD_MEMBER_VERIFICATION;
            var15 = 5;
            var15 = var19[var15];
            var15 = var18.bind(var3)(var15);
            var18 = var15.RouteParam;
            var15 = var18.guildId;
            var15 = var15.bind(var18)();
            var15 = var16.bind(var17)(var15);
            var9['path'] = var15;
            var9 = var10.bind(var11)(var12, var9);
            if(!(var6 != var9)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 3;
            var10 = var12[var10];
            var12 = var11.bind(var3)(var10);
            var11 = var12.navigateToMemberVerification;
            var10 = var9.params;
            var10 = var10.guildId;
            var9 = var9.params;
            var9 = var9.inviteCode;
            var9 = var11.bind(var12)(var10, var9);
case 20:
            var9 = true;
            return var9;
case 11:
            var8 = var8.params;
            var9 = var8.channelId;
            var10 = var8.guildId;
            var11 = var8.messageId;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var8 = 7;
            var8 = var15[var8];
            var12 = var12.bind(var3)(var8);
            var8 = var14.getCurrentRoute;
            var8 = var8.bind(var14)();
            var12 = var12.bind(var3)(var8);
            var8 = _closure1_slot3;
            var13 = var8.bind(var3)(var12, var13);
            var8 = 0;
            var12 = var13[var8];
            var8 = 1;
            var8 = var13[var8];
            if(!(var12 === var10)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            if(!(var8 !== var9)) { _fun0001_ip = 24; continue _fun0001 }
case 22:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 8;
            var8 = var13[var8];
            var12 = var12.bind(var3)(var8);
            var8 = var12.getChatLayout;
            var8 = var8.bind(var12)();
            var8 = var8.isChatLockedOpen;
            if(var8) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            if(!(var6 == var9)) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 3;
            var8 = var13[var8];
            var13 = var12.bind(var3)(var8);
            var12 = var13.navigateToRootTab;
            var8 = {};
            var14 = 'guilds';
            var8['screen'] = var14;
            var8['guildId'] = var10;
            var8['channelId'] = var9;
            var8['resetRoot'] = var4;
            var8 = var12.bind(var13)(var8);
case 27:
            if(!(var2 === var4)) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var7 = var7.openChannel;
            if(!var7) { _fun0001_ip = 29; continue _fun0001 }
case 31:
            if(!(var6 == var9)) { _fun0001_ip = 32; continue _fun0001 }
case 29:
            var7 = false;
            if(!(var7 !== var4)) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 3;
            var7 = var12[var7];
            var12 = var8.bind(var3)(var7);
            var8 = var12.navigateToRootTab;
            var7 = {};
            var13 = 'guilds';
            var7['screen'] = var13;
            var7['guildId'] = var10;
            var7['channelId'] = var9;
            var7['resetRoot'] = var4;
            var7 = var8.bind(var12)(var7);
case 33:
            var7 = var6 != var9;
            if(!var7) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var7 = var2 !== var4;
case 35:
            if(!var7) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 3;
            var7 = var12[var7];
            var12 = var8.bind(var3)(var7);
            var8 = var12.navigateToChannel;
            var7 = {};
            var7['channelId'] = var9;
            var7['guildId'] = var10;
            var7['messageId'] = var11;
            var7['replaceChannelAndFixRoot'] = var3;
            var7 = var8.bind(var12)(var7);
            _fun0001_ip = 37; continue _fun0001;
case 32:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 3;
            var7 = var12[var7];
            var12 = var8.bind(var3)(var7);
            var8 = var12.navigateToChannel;
            var7 = {};
            var7['channelId'] = var9;
            var7['guildId'] = var10;
            var7['messageId'] = var11;
            var7['replaceChannelAndFixRoot'] = var4;
            var7['openChannel'] = var2;
            var7 = var8.bind(var12)(var7);
            return var2;
case 25:
            if(!(var6 != var9)) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var7 = false;
            if(!(var7 === var4)) { _fun0001_ip = 39; continue _fun0001 }
case 41:
            if(!(var6 != var10)) { _fun0001_ip = 37; continue _fun0001 }
case 42:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 3;
            var6 = var8[var6];
            var8 = var7.bind(var3)(var6);
            var7 = var8.navigateToChannel;
            var6 = {};
            var6['channelId'] = var9;
            var6['guildId'] = var10;
            var6['messageId'] = var11;
            var6['replaceChannelAndFixRoot'] = var4;
            var6 = var7.bind(var8)(var6);
            _fun0001_ip = 37; continue _fun0001;
case 39:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 3;
            var6 = var8[var6];
            var8 = var7.bind(var3)(var6);
            var7 = var8.navigateToRootTab;
            var6 = {};
            var11 = 'guilds';
            var6['screen'] = var11;
            var6['guildId'] = var10;
            var6['channelId'] = var9;
            var6['resetRoot'] = var4;
            var6 = var7.bind(var8)(var6);
case 37:
            return var2;
case 24:
            return var2;
case 9:
            var5 = var5.params;
            var9 = var5.voiceGuildId;
            var10 = var5.voiceChannelId;
            var8 = var5.voiceMessageId;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 6;
            var5 = var7[var5];
            var6 = var6.bind(var3)(var5);
            var5 = var6.isVoicePanelEnabled;
            var5 = var5.bind(var6)();
            if(var5) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 3;
            var5 = var7[var5];
            var7 = var6.bind(var3)(var5);
            var6 = var7.navigateToChannel;
            var5 = {};
            var5['channelId'] = var10;
            var5['guildId'] = var9;
            var5['messageId'] = var8;
            var5['replaceChannelAndFixRoot'] = var4;
            var5 = var6.bind(var7)(var5);
case 43:
            return var2;
case 5:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 3;
            var1 = var5[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.navigateToRootTab;
            var1 = {};
            var5 = 'notifications';
            var1['screen'] = var5;
            var1['resetRoot'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = true;
            return var1;
case 2:
            var1 = true;
            return var1;
        }
    };
    var3['convertRouteToNavigation'] = var2;
    return var1;
})();