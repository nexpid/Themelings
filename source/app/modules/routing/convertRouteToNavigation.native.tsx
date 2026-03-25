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
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/routing/convertRouteToNavigation.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function convertRouteToNavigation(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var9 = var3.pathname;
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var14 = 3;
            var1 = var1[var14];
            var4 = undefined;
            var5 = var5.bind(var4)(var1);
            var1 = var5.getRootNavigationRef;
            var11 = var1.bind(var5)();
            var10 = null;
            if(!(var10 != var11)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var11.isReady;
            var1 = var1.bind(var11)();
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var5 = var9.startsWith;
            var1 = '/channels/';
            var1 = var5.bind(var9)(var1);
            if(!var1) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var13 = _closure1_slot0;
            var12 = _closure1_slot1;
            var5 = 4;
            var1 = var12[var5];
            var8 = var13.bind(var4)(var1);
            var7 = var8.matchPath;
            var6 = {};
            var19 = _closure1_slot2;
            var18 = var19.CHANNEL;
            var17 = 5;
            var1 = var12[var17];
            var1 = var13.bind(var4)(var1);
            var15 = var1.RouteParam;
            var1 = var15.guildId;
            var16 = var1.bind(var15)();
            var1 = var12[var17];
            var1 = var13.bind(var4)(var1);
            var21 = var1.RouteParam;
            var20 = var21.channelId;
            var15 = {};
            var1 = true;
            var15['optional'] = var1;
            var15 = var20.bind(var21)(var15);
            var16 = var18.bind(var19)(var16, var15);
            var18 = var19.VOICE_CHAT_CHANNEL_PARTIAL;
            var15 = var12[var17];
            var15 = var13.bind(var4)(var15);
            var21 = var15.RouteParam;
            var20 = var21.guildId;
            var15 = {};
            var22 = 'voiceGuildId';
            var15['name'] = var22;
            var15 = var20.bind(var21)(var15);
            var12 = var12[var17];
            var12 = var13.bind(var4)(var12);
            var20 = var12.RouteParam;
            var13 = var20.channelId;
            var12 = {};
            var21 = 'voiceChannelId';
            var12['name'] = var21;
            var13 = var13.bind(var20)(var12);
            var12 = ':voiceMessageId?';
            var15 = var18.bind(var19)(var15, var13, var12);
            var12 = global;
            var12 = var12.HermesInternal;
            var13 = var12.concat;
            var12 = '';
            var12 = var13.bind(var12)(var16, var15);
            var6['path'] = var12;
            var6 = var7.bind(var8)(var9, var6);
            if(!(var10 == var6)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var12 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = var8[var5];
            var7 = var12.bind(var4)(var5);
            var6 = var7.matchPath;
            var5 = {};
            var16 = _closure1_slot2;
            var15 = var16.CHANNEL;
            var13 = var8[var17];
            var13 = var12.bind(var4)(var13);
            var18 = var13.RouteParam;
            var13 = var18.guildId;
            var13 = var13.bind(var18)();
            var8 = var8[var17];
            var8 = var12.bind(var4)(var8);
            var17 = var8.RouteParam;
            var12 = var17.channelId;
            var8 = {};
            var8['optional'] = var1;
            var12 = var12.bind(var17)(var8);
            var8 = ':messageId?';
            var8 = var15.bind(var16)(var13, var12, var8);
            var5['path'] = var8;
            var5 = var6.bind(var7)(var9, var5);
            if(!(var10 == var5)) { _fun0001_ip = 9; continue _fun0001 }
case 5:
            var7 = var9.startsWith;
            var6 = '/member-verification/';
            var6 = var7.bind(var9)(var6);
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = var9.startsWith;
            var6 = _closure1_slot2;
            var6 = var6.LOGIN;
            var6 = var7.bind(var9)(var6);
            if(var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = var9.startsWith;
            var6 = _closure1_slot2;
            var6 = var6.REGISTER;
            var6 = var7.bind(var9)(var6);
            if(var6) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var7 = var9.startsWith;
            var6 = _closure1_slot2;
            var6 = var6.ACCOUNT_STANDING;
            var6 = var7.bind(var9)(var6);
            var7 = !var6;
            var6 = !var7;
            if(var7) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var8 = var11.navigate;
            var7 = {};
            var12 = 'account-standing';
            var7['name'] = var12;
            var7['params'] = var4;
            var7 = var8.bind(var11)(var7);
            var6 = true;
case 15:
            _fun0001_ip = 17; continue _fun0001;
case 12:
            var8 = _closure1_slot0;
            var11 = _closure1_slot1;
            var7 = 2;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = var8.resetToAuthRoute;
            var7 = var7.bind(var8)();
            var6 = true;
case 17:
            return var6;
case 10:
            var15 = _closure1_slot0;
            var16 = _closure1_slot1;
            var6 = 4;
            var6 = var16[var6];
            var8 = var15.bind(var4)(var6);
            var7 = var8.matchPath;
            var6 = {};
            var13 = _closure1_slot2;
            var12 = var13.GUILD_MEMBER_VERIFICATION;
            var11 = 5;
            var11 = var16[var11];
            var11 = var15.bind(var4)(var11);
            var15 = var11.RouteParam;
            var11 = var15.guildId;
            var11 = var11.bind(var15)();
            var11 = var12.bind(var13)(var11);
            var6['path'] = var11;
            var6 = var7.bind(var8)(var9, var6);
            if(!(var10 != var6)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var7 = 2;
            var7 = var9[var7];
            var9 = var8.bind(var4)(var7);
            var8 = var9.navigateToMemberVerification;
            var7 = var6.params;
            var7 = var7.guildId;
            var6 = var6.params;
            var6 = var6.inviteCode;
            var6 = var8.bind(var9)(var7, var6);
case 18:
            var6 = true;
            return var6;
case 9:
            var5 = var5.params;
            var6 = var5.channelId;
            var7 = var5.guildId;
            var11 = var5.messageId;
            var5 = var3.navigationReplace;
            var3 = var3.openChannel;
            var9 = _closure1_slot0;
            var12 = _closure1_slot1;
            var8 = 1;
            var8 = var12[var8];
            var9 = var9.bind(var4)(var8);
            var8 = var9.getChatLayout;
            var8 = var8.bind(var9)();
            var8 = var8.isChatLockedOpen;
            if(var8) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            if(!(var10 == var6)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var9 = _closure1_slot0;
            var12 = _closure1_slot1;
            var8 = 2;
            var8 = var12[var8];
            var12 = var9.bind(var4)(var8);
            var9 = var12.navigateToRootTab;
            var8 = {};
            var13 = 'guilds';
            var8['screen'] = var13;
            var8['guildId'] = var7;
            var8['channelId'] = var6;
            var8['resetRoot'] = var5;
            var8 = var9.bind(var12)(var8);
            _fun0001_ip = 24; continue _fun0001;
case 22:
            if(!(var1 === var5)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            if(var3) { _fun0001_ip = 27; continue _fun0001 }
case 25:
            var3 = false;
            if(!(var3 !== var5)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 2;
            var3 = var9[var3];
            var9 = var8.bind(var4)(var3);
            var8 = var9.navigateToRootTab;
            var3 = {};
            var12 = 'guilds';
            var3['screen'] = var12;
            var3['guildId'] = var7;
            var3['channelId'] = var6;
            var3['resetRoot'] = var5;
            var3 = var8.bind(var9)(var3);
case 28:
            var3 = var10 != var6;
            if(!var3) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var3 = var1 !== var5;
case 30:
            if(!var3) { _fun0001_ip = 24; continue _fun0001 }
case 32:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 2;
            var3 = var9[var3];
            var9 = var8.bind(var4)(var3);
            var8 = var9.navigateToChannel;
            var3 = {};
            var3['channelId'] = var6;
            var3['guildId'] = var7;
            var3['messageId'] = var11;
            var3['replaceChannelAndFixRoot'] = var4;
            var3 = var8.bind(var9)(var3);
            _fun0001_ip = 24; continue _fun0001;
case 27:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 2;
            var3 = var9[var3];
            var9 = var8.bind(var4)(var3);
            var8 = var9.navigateToChannel;
            var3 = {};
            var3['channelId'] = var6;
            var3['guildId'] = var7;
            var3['messageId'] = var11;
            var3['replaceChannelAndFixRoot'] = var5;
            var3['openChannel'] = var1;
            var3 = var8.bind(var9)(var3);
            _fun0001_ip = 24; continue _fun0001;
case 20:
            if(!(var10 != var6)) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var3 = false;
            if(!(var3 === var5)) { _fun0001_ip = 33; continue _fun0001 }
case 35:
            var13 = _closure1_slot0;
            var3 = _closure1_slot1;
            var9 = 2;
            var8 = var3[var9];
            var12 = var13.bind(var4)(var8);
            var8 = var12.coerceGuildsRoute;
            var3 = var3[var14];
            var13 = var13.bind(var4)(var3);
            var3 = var13.getRootNavigationRef;
            var14 = var3.bind(var13)();
            var13 = var10 == var14;
            var3 = undefined;
            if(var13) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var13 = var14.getCurrentRoute;
            var3 = var13.bind(var14)();
case 36:
            var8 = var8.bind(var12)(var3);
            var12 = var10 == var8;
            var3 = undefined;
            if(var12) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var8 = var8.params;
            var10 = var10 == var8;
            var3 = undefined;
            if(var10) { _fun0001_ip = 38; continue _fun0001 }
case 40:
            var3 = var8.channelId;
case 38:
            if(!(var3 !== var6)) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var8 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var9];
            var10 = var8.bind(var4)(var3);
            var8 = var10.navigateToChannel;
            var3 = {};
            var3['channelId'] = var6;
            var3['guildId'] = var7;
            var3['messageId'] = var11;
            var3['replaceChannelAndFixRoot'] = var5;
            var3 = var8.bind(var10)(var3);
            _fun0001_ip = 24; continue _fun0001;
case 41:
            var8 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var9];
            var9 = var8.bind(var4)(var3);
            var8 = var9.navigateToRootTab;
            var3 = {};
            var10 = 'guilds';
            var3['screen'] = var10;
            var3['guildId'] = var7;
            var3['channelId'] = var6;
            var3['resetRoot'] = var5;
            var3 = var8.bind(var9)(var3);
            _fun0001_ip = 24; continue _fun0001;
case 33:
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 2;
            var2 = var8[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.navigateToRootTab;
            var2 = {};
            var8 = 'guilds';
            var2['screen'] = var8;
            var2['guildId'] = var7;
            var2['channelId'] = var6;
            var2['resetRoot'] = var5;
            var2 = var3.bind(var4)(var2);
case 24:
            return var1;
case 7:
            return var1;
case 2:
            var1 = true;
            return var1;
        }
    };
    var3['convertRouteToNavigation'] = var2;
    return var1;
})();