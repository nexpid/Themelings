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
            var8 = arg1;
            var10 = var8.pathname;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 3;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.getRootNavigationRef;
            var11 = var1.bind(var3)();
            var3 = null;
            if(!(var3 != var11)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var11.isReady;
            var1 = var1.bind(var11)();
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var5 = var10.startsWith;
            var1 = '/channels/';
            var1 = var5.bind(var10)(var1);
            if(!var1) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var13 = _closure1_slot0;
            var12 = _closure1_slot1;
            var5 = 4;
            var1 = var12[var5];
            var9 = var13.bind(var4)(var1);
            var7 = var9.matchPath;
            var6 = {};
            var18 = _closure1_slot2;
            var17 = var18.CHANNEL;
            var16 = 5;
            var1 = var12[var16];
            var1 = var13.bind(var4)(var1);
            var14 = var1.RouteParam;
            var1 = var14.guildId;
            var15 = var1.bind(var14)();
            var1 = var12[var16];
            var1 = var13.bind(var4)(var1);
            var20 = var1.RouteParam;
            var19 = var20.channelId;
            var14 = {};
            var1 = true;
            var14['optional'] = var1;
            var14 = var19.bind(var20)(var14);
            var15 = var17.bind(var18)(var15, var14);
            var17 = var18.VOICE_CHAT_CHANNEL_PARTIAL;
            var14 = var12[var16];
            var14 = var13.bind(var4)(var14);
            var20 = var14.RouteParam;
            var19 = var20.guildId;
            var14 = {};
            var21 = 'voiceGuildId';
            var14['name'] = var21;
            var14 = var19.bind(var20)(var14);
            var12 = var12[var16];
            var12 = var13.bind(var4)(var12);
            var19 = var12.RouteParam;
            var13 = var19.channelId;
            var12 = {};
            var20 = 'voiceChannelId';
            var12['name'] = var20;
            var13 = var13.bind(var19)(var12);
            var12 = ':voiceMessageId?';
            var14 = var17.bind(var18)(var14, var13, var12);
            var12 = global;
            var12 = var12.HermesInternal;
            var13 = var12.concat;
            var12 = '';
            var12 = var13.bind(var12)(var15, var14);
            var6['path'] = var12;
            var6 = var7.bind(var9)(var10, var6);
            if(!(var3 == var6)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var12 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = var9[var5];
            var7 = var12.bind(var4)(var5);
            var6 = var7.matchPath;
            var5 = {};
            var15 = _closure1_slot2;
            var14 = var15.CHANNEL;
            var13 = var9[var16];
            var13 = var12.bind(var4)(var13);
            var17 = var13.RouteParam;
            var13 = var17.guildId;
            var13 = var13.bind(var17)();
            var9 = var9[var16];
            var9 = var12.bind(var4)(var9);
            var16 = var9.RouteParam;
            var12 = var16.channelId;
            var9 = {};
            var9['optional'] = var1;
            var12 = var12.bind(var16)(var9);
            var9 = ':messageId?';
            var9 = var14.bind(var15)(var13, var12, var9);
            var5['path'] = var9;
            var5 = var6.bind(var7)(var10, var5);
            if(!(var3 == var5)) { _fun0001_ip = 9; continue _fun0001 }
case 5:
            var7 = var10.startsWith;
            var6 = '/member-verification/';
            var6 = var7.bind(var10)(var6);
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = var10.startsWith;
            var6 = _closure1_slot2;
            var6 = var6.LOGIN;
            var6 = var7.bind(var10)(var6);
            if(var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = var10.startsWith;
            var6 = _closure1_slot2;
            var6 = var6.REGISTER;
            var6 = var7.bind(var10)(var6);
            if(var6) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var7 = var10.startsWith;
            var6 = _closure1_slot2;
            var6 = var6.ACCOUNT_STANDING;
            var6 = var7.bind(var10)(var6);
            var7 = !var6;
            var6 = !var7;
            if(var7) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var9 = var11.navigate;
            var7 = {};
            var12 = 'account-standing';
            var7['name'] = var12;
            var7['params'] = var4;
            var7 = var9.bind(var11)(var7);
            var6 = true;
case 15:
            _fun0001_ip = 17; continue _fun0001;
case 12:
            var9 = _closure1_slot0;
            var11 = _closure1_slot1;
            var7 = 2;
            var7 = var11[var7];
            var9 = var9.bind(var4)(var7);
            var7 = var9.resetToAuthRoute;
            var7 = var7.bind(var9)();
            var6 = true;
case 17:
            return var6;
case 10:
            var14 = _closure1_slot0;
            var15 = _closure1_slot1;
            var6 = 4;
            var6 = var15[var6];
            var9 = var14.bind(var4)(var6);
            var7 = var9.matchPath;
            var6 = {};
            var13 = _closure1_slot2;
            var12 = var13.GUILD_MEMBER_VERIFICATION;
            var11 = 5;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var14 = var11.RouteParam;
            var11 = var14.guildId;
            var11 = var11.bind(var14)();
            var11 = var12.bind(var13)(var11);
            var6['path'] = var11;
            var6 = var7.bind(var9)(var10, var6);
            if(!(var3 != var6)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var7 = 2;
            var7 = var10[var7];
            var10 = var9.bind(var4)(var7);
            var9 = var10.navigateToMemberVerification;
            var7 = var6.params;
            var7 = var7.guildId;
            var6 = var6.params;
            var6 = var6.inviteCode;
            var6 = var9.bind(var10)(var7, var6);
case 18:
            var6 = true;
            return var6;
case 9:
            var5 = var5.params;
            var6 = var5.channelId;
            var7 = var5.guildId;
            var10 = var5.messageId;
            var5 = var8.navigationReplace;
            var8 = var8.openChannel;
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var9 = 1;
            var9 = var12[var9];
            var11 = var11.bind(var4)(var9);
            var9 = var11.getChatLayout;
            var9 = var9.bind(var11)();
            var9 = var9.isChatLockedOpen;
            if(var9) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            if(!(var3 == var6)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var9 = 2;
            var9 = var12[var9];
            var12 = var11.bind(var4)(var9);
            var11 = var12.navigateToRootTab;
            var9 = {};
            var13 = 'guilds';
            var9['screen'] = var13;
            var9['guildId'] = var7;
            var9['channelId'] = var6;
            var9['resetRoot'] = var5;
            var9 = var11.bind(var12)(var9);
            _fun0001_ip = 24; continue _fun0001;
case 22:
            if(!(var1 === var5)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            if(var8) { _fun0001_ip = 27; continue _fun0001 }
case 25:
            var8 = false;
            if(!(var8 !== var5)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var9 = _closure1_slot0;
            var11 = _closure1_slot1;
            var8 = 2;
            var8 = var11[var8];
            var11 = var9.bind(var4)(var8);
            var9 = var11.navigateToRootTab;
            var8 = {};
            var12 = 'guilds';
            var8['screen'] = var12;
            var8['guildId'] = var7;
            var8['channelId'] = var6;
            var8['resetRoot'] = var5;
            var8 = var9.bind(var11)(var8);
case 28:
            var8 = var3 != var6;
            if(!var8) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var8 = var1 !== var5;
case 30:
            if(!var8) { _fun0001_ip = 24; continue _fun0001 }
case 32:
            var9 = _closure1_slot0;
            var11 = _closure1_slot1;
            var8 = 2;
            var8 = var11[var8];
            var11 = var9.bind(var4)(var8);
            var9 = var11.navigateToChannel;
            var8 = {};
            var8['channelId'] = var6;
            var8['guildId'] = var7;
            var8['messageId'] = var10;
            var8['replaceChannelAndFixRoot'] = var4;
            var8 = var9.bind(var11)(var8);
            _fun0001_ip = 24; continue _fun0001;
case 27:
            var9 = _closure1_slot0;
            var11 = _closure1_slot1;
            var8 = 2;
            var8 = var11[var8];
            var11 = var9.bind(var4)(var8);
            var9 = var11.navigateToChannel;
            var8 = {};
            var8['channelId'] = var6;
            var8['guildId'] = var7;
            var8['messageId'] = var10;
            var8['replaceChannelAndFixRoot'] = var5;
            var8['openChannel'] = var1;
            var8 = var9.bind(var11)(var8);
            _fun0001_ip = 24; continue _fun0001;
case 20:
            if(!(var3 != var6)) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var3 = false;
            if(!(var3 === var5)) { _fun0001_ip = 33; continue _fun0001 }
case 35:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 2;
            var3 = var9[var3];
            var9 = var8.bind(var4)(var3);
            var8 = var9.navigateToChannel;
            var3 = {};
            var3['channelId'] = var6;
            var3['guildId'] = var7;
            var3['messageId'] = var10;
            var3['replaceChannelAndFixRoot'] = var5;
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