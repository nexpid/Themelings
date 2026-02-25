// app/modules/routing/convertRouteToNavigation.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.Routes;
    var _closure1_slot2 = var4;
    var4 = 7;
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
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 1;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.getRootNavigationRef;
            var13 = var1.bind(var3)();
            var6 = null;
            if(!(var6 != var13)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var13.isReady;
            var1 = var1.bind(var13)();
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var5 = var7.navigationReplace;
            var3 = var12.startsWith;
            var1 = '/channels/';
            var1 = var3.bind(var12)(var1);
            if(!var1) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var14 = _closure1_slot0;
            var11 = _closure1_slot1;
            var8 = 2;
            var1 = var11[var8];
            var10 = var14.bind(var4)(var1);
            var9 = var10.matchPath;
            var3 = {};
            var19 = _closure1_slot2;
            var17 = var19.CHANNEL;
            var18 = 3;
            var1 = var11[var18];
            var1 = var14.bind(var4)(var1);
            var15 = var1.RouteParam;
            var1 = var15.guildId;
            var16 = var1.bind(var15)();
            var1 = var11[var18];
            var1 = var14.bind(var4)(var1);
            var21 = var1.RouteParam;
            var20 = var21.channelId;
            var15 = {};
            var1 = true;
            var15['optional'] = var1;
            var15 = var20.bind(var21)(var15);
            var16 = var17.bind(var19)(var16, var15);
            var17 = var19.VOICE_CHAT_CHANNEL_PARTIAL;
            var15 = var11[var18];
            var15 = var14.bind(var4)(var15);
            var21 = var15.RouteParam;
            var20 = var21.guildId;
            var15 = {};
            var22 = 'voiceGuildId';
            var15['name'] = var22;
            var15 = var20.bind(var21)(var15);
            var11 = var11[var18];
            var11 = var14.bind(var4)(var11);
            var20 = var11.RouteParam;
            var14 = var20.channelId;
            var11 = {};
            var21 = 'voiceChannelId';
            var11['name'] = var21;
            var14 = var14.bind(var20)(var11);
            var11 = ':voiceMessageId?';
            var15 = var17.bind(var19)(var15, var14, var11);
            var11 = global;
            var11 = var11.HermesInternal;
            var14 = var11.concat;
            var11 = '';
            var11 = var14.bind(var11)(var16, var15);
            var3['path'] = var11;
            var3 = var9.bind(var10)(var12, var3);
            if(!(var6 == var3)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var14 = _closure1_slot0;
            var11 = _closure1_slot1;
            var8 = var11[var8];
            var10 = var14.bind(var4)(var8);
            var9 = var10.matchPath;
            var8 = {};
            var17 = _closure1_slot2;
            var16 = var17.CHANNEL;
            var15 = var11[var18];
            var15 = var14.bind(var4)(var15);
            var19 = var15.RouteParam;
            var15 = var19.guildId;
            var15 = var15.bind(var19)();
            var11 = var11[var18];
            var11 = var14.bind(var4)(var11);
            var18 = var11.RouteParam;
            var14 = var18.channelId;
            var11 = {};
            var11['optional'] = var1;
            var14 = var14.bind(var18)(var11);
            var11 = ':messageId?';
            var11 = var16.bind(var17)(var15, var14, var11);
            var8['path'] = var11;
            var8 = var9.bind(var10)(var12, var8);
            if(!(var6 == var8)) { _fun0001_ip = 9; continue _fun0001 }
case 5:
            var10 = var12.startsWith;
            var9 = '/member-verification/';
            var9 = var10.bind(var12)(var9);
            if(var9) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var10 = var12.startsWith;
            var9 = _closure1_slot2;
            var9 = var9.LOGIN;
            var9 = var10.bind(var12)(var9);
            if(var9) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var10 = var12.startsWith;
            var9 = _closure1_slot2;
            var9 = var9.REGISTER;
            var9 = var10.bind(var12)(var9);
            if(var9) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var10 = var12.startsWith;
            var9 = _closure1_slot2;
            var9 = var9.ACCOUNT_STANDING;
            var9 = var10.bind(var12)(var9);
            var10 = !var9;
            var9 = !var10;
            if(var10) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var11 = var13.navigate;
            var10 = {};
            var14 = 'account-standing';
            var10['name'] = var14;
            var10['params'] = var4;
            var10 = var11.bind(var13)(var10);
            var9 = true;
case 15:
            _fun0001_ip = 17; continue _fun0001;
case 12:
            var11 = _closure1_slot0;
            var13 = _closure1_slot1;
            var10 = 5;
            var10 = var13[var10];
            var11 = var11.bind(var4)(var10);
            var10 = var11.resetToAuthRoute;
            var10 = var10.bind(var11)();
            var9 = true;
case 17:
            return var9;
case 10:
            var16 = _closure1_slot0;
            var17 = _closure1_slot1;
            var9 = 2;
            var9 = var17[var9];
            var11 = var16.bind(var4)(var9);
            var10 = var11.matchPath;
            var9 = {};
            var15 = _closure1_slot2;
            var14 = var15.GUILD_MEMBER_VERIFICATION;
            var13 = 3;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var16 = var13.RouteParam;
            var13 = var16.guildId;
            var13 = var13.bind(var16)();
            var13 = var14.bind(var15)(var13);
            var9['path'] = var13;
            var9 = var10.bind(var11)(var12, var9);
            if(!(var6 != var9)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var10 = 5;
            var10 = var12[var10];
            var12 = var11.bind(var4)(var10);
            var11 = var12.navigateToMemberVerification;
            var10 = var9.params;
            var10 = var10.guildId;
            var9 = var9.params;
            var9 = var9.inviteCode;
            var9 = var11.bind(var12)(var10, var9);
case 18:
            var9 = true;
            return var9;
case 9:
            var8 = var8.params;
            var9 = var8.channelId;
            var10 = var8.guildId;
            var11 = var8.messageId;
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var8 = 6;
            var8 = var13[var8];
            var12 = var12.bind(var4)(var8);
            var8 = var12.getChatLayout;
            var8 = var8.bind(var12)();
            var8 = var8.isChatLockedOpen;
            if(var8) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            if(!(var6 == var9)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var8 = 5;
            var8 = var13[var8];
            var13 = var12.bind(var4)(var8);
            var12 = var13.navigateToRootTab;
            var8 = {};
            var14 = 'guilds';
            var8['screen'] = var14;
            var8['guildId'] = var10;
            var8['channelId'] = var9;
            var8['resetRoot'] = var5;
            var8 = var12.bind(var13)(var8);
case 22:
            if(!(var1 === var5)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var7 = var7.openChannel;
            if(!var7) { _fun0001_ip = 24; continue _fun0001 }
case 26:
            if(!(var6 == var9)) { _fun0001_ip = 27; continue _fun0001 }
case 24:
            var7 = false;
            if(!(var7 !== var5)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var8 = _closure1_slot0;
            var12 = _closure1_slot1;
            var7 = 5;
            var7 = var12[var7];
            var12 = var8.bind(var4)(var7);
            var8 = var12.navigateToRootTab;
            var7 = {};
            var13 = 'guilds';
            var7['screen'] = var13;
            var7['guildId'] = var10;
            var7['channelId'] = var9;
            var7['resetRoot'] = var5;
            var7 = var8.bind(var12)(var7);
case 28:
            var7 = var6 != var9;
            if(!var7) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var7 = var1 !== var5;
case 30:
            if(!var7) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var8 = _closure1_slot0;
            var12 = _closure1_slot1;
            var7 = 5;
            var7 = var12[var7];
            var12 = var8.bind(var4)(var7);
            var8 = var12.navigateToChannel;
            var7 = {};
            var7['channelId'] = var9;
            var7['guildId'] = var10;
            var7['messageId'] = var11;
            var7['replaceChannelAndFixRoot'] = var4;
            var7 = var8.bind(var12)(var7);
            _fun0001_ip = 32; continue _fun0001;
case 27:
            var8 = _closure1_slot0;
            var12 = _closure1_slot1;
            var7 = 5;
            var7 = var12[var7];
            var12 = var8.bind(var4)(var7);
            var8 = var12.navigateToChannel;
            var7 = {};
            var7['channelId'] = var9;
            var7['guildId'] = var10;
            var7['messageId'] = var11;
            var7['replaceChannelAndFixRoot'] = var5;
            var7['openChannel'] = var1;
            var7 = var8.bind(var12)(var7);
            return var1;
case 20:
            if(!(var6 != var9)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var7 = false;
            if(!(var7 === var5)) { _fun0001_ip = 34; continue _fun0001 }
case 36:
            if(!(var6 != var10)) { _fun0001_ip = 32; continue _fun0001 }
case 37:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var6 = 5;
            var6 = var8[var6];
            var8 = var7.bind(var4)(var6);
            var7 = var8.navigateToChannel;
            var6 = {};
            var6['channelId'] = var9;
            var6['guildId'] = var10;
            var6['messageId'] = var11;
            var6['replaceChannelAndFixRoot'] = var5;
            var6 = var7.bind(var8)(var6);
            _fun0001_ip = 32; continue _fun0001;
case 34:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var6 = 5;
            var6 = var8[var6];
            var8 = var7.bind(var4)(var6);
            var7 = var8.navigateToRootTab;
            var6 = {};
            var11 = 'guilds';
            var6['screen'] = var11;
            var6['guildId'] = var10;
            var6['channelId'] = var9;
            var6['resetRoot'] = var5;
            var6 = var7.bind(var8)(var6);
case 32:
            return var1;
case 7:
            var3 = var3.params;
            var7 = var3.voiceGuildId;
            var8 = var3.voiceChannelId;
            var6 = var3.voiceMessageId;
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var3 = 4;
            var3 = var10[var3];
            var9 = var9.bind(var4)(var3);
            var3 = var9.isVoicePanelEnabled;
            var3 = var3.bind(var9)();
            if(var3) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var3 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 5;
            var2 = var9[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.navigateToChannel;
            var2 = {};
            var2['channelId'] = var8;
            var2['guildId'] = var7;
            var2['messageId'] = var6;
            var2['replaceChannelAndFixRoot'] = var5;
            var2 = var3.bind(var4)(var2);
case 38:
            return var1;
case 2:
            var1 = true;
            return var1;
        }
    };
    var3['convertRouteToNavigation'] = var2;
    return var1;
})();