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
            var11 = var8.pathname;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 1;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.getRootNavigationRef;
            var12 = var1.bind(var3)();
            var3 = null;
            if(!(var3 != var12)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var12.isReady;
            var1 = var1.bind(var12)();
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var5 = var8.navigationReplace;
            var6 = var11.startsWith;
            var1 = '/channels/';
            var1 = var6.bind(var11)(var1);
            if(!var1) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var14 = _closure1_slot0;
            var13 = _closure1_slot1;
            var6 = 2;
            var1 = var13[var6];
            var10 = var14.bind(var4)(var1);
            var9 = var10.matchPath;
            var7 = {};
            var19 = _closure1_slot2;
            var18 = var19.CHANNEL;
            var17 = 3;
            var1 = var13[var17];
            var1 = var14.bind(var4)(var1);
            var15 = var1.RouteParam;
            var1 = var15.guildId;
            var16 = var1.bind(var15)();
            var1 = var13[var17];
            var1 = var14.bind(var4)(var1);
            var21 = var1.RouteParam;
            var20 = var21.channelId;
            var15 = {};
            var1 = true;
            var15['optional'] = var1;
            var15 = var20.bind(var21)(var15);
            var16 = var18.bind(var19)(var16, var15);
            var18 = var19.VOICE_CHAT_CHANNEL_PARTIAL;
            var15 = var13[var17];
            var15 = var14.bind(var4)(var15);
            var21 = var15.RouteParam;
            var20 = var21.guildId;
            var15 = {};
            var22 = 'voiceGuildId';
            var15['name'] = var22;
            var15 = var20.bind(var21)(var15);
            var13 = var13[var17];
            var13 = var14.bind(var4)(var13);
            var20 = var13.RouteParam;
            var14 = var20.channelId;
            var13 = {};
            var21 = 'voiceChannelId';
            var13['name'] = var21;
            var14 = var14.bind(var20)(var13);
            var13 = ':voiceMessageId?';
            var15 = var18.bind(var19)(var15, var14, var13);
            var13 = global;
            var13 = var13.HermesInternal;
            var14 = var13.concat;
            var13 = '';
            var13 = var14.bind(var13)(var16, var15);
            var7['path'] = var13;
            var7 = var9.bind(var10)(var11, var7);
            if(!(var3 == var7)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var13 = _closure1_slot0;
            var10 = _closure1_slot1;
            var6 = var10[var6];
            var9 = var13.bind(var4)(var6);
            var7 = var9.matchPath;
            var6 = {};
            var16 = _closure1_slot2;
            var15 = var16.CHANNEL;
            var14 = var10[var17];
            var14 = var13.bind(var4)(var14);
            var18 = var14.RouteParam;
            var14 = var18.guildId;
            var14 = var14.bind(var18)();
            var10 = var10[var17];
            var10 = var13.bind(var4)(var10);
            var17 = var10.RouteParam;
            var13 = var17.channelId;
            var10 = {};
            var10['optional'] = var1;
            var13 = var13.bind(var17)(var10);
            var10 = ':messageId?';
            var10 = var15.bind(var16)(var14, var13, var10);
            var6['path'] = var10;
            var6 = var7.bind(var9)(var11, var6);
            if(!(var3 == var6)) { _fun0001_ip = 9; continue _fun0001 }
case 5:
            var9 = var11.startsWith;
            var7 = '/member-verification/';
            var7 = var9.bind(var11)(var7);
            if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = var11.startsWith;
            var7 = _closure1_slot2;
            var7 = var7.LOGIN;
            var7 = var9.bind(var11)(var7);
            if(var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var9 = var11.startsWith;
            var7 = _closure1_slot2;
            var7 = var7.REGISTER;
            var7 = var9.bind(var11)(var7);
            if(var7) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var9 = var11.startsWith;
            var7 = _closure1_slot2;
            var7 = var7.ACCOUNT_STANDING;
            var7 = var9.bind(var11)(var7);
            var9 = !var7;
            var7 = !var9;
            if(var9) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var10 = var12.navigate;
            var9 = {};
            var13 = 'account-standing';
            var9['name'] = var13;
            var9['params'] = var4;
            var9 = var10.bind(var12)(var9);
            var7 = true;
case 15:
            _fun0001_ip = 17; continue _fun0001;
case 12:
            var10 = _closure1_slot0;
            var12 = _closure1_slot1;
            var9 = 5;
            var9 = var12[var9];
            var10 = var10.bind(var4)(var9);
            var9 = var10.resetToAuthRoute;
            var9 = var9.bind(var10)();
            var7 = true;
case 17:
            return var7;
case 10:
            var15 = _closure1_slot0;
            var16 = _closure1_slot1;
            var7 = 2;
            var7 = var16[var7];
            var10 = var15.bind(var4)(var7);
            var9 = var10.matchPath;
            var7 = {};
            var14 = _closure1_slot2;
            var13 = var14.GUILD_MEMBER_VERIFICATION;
            var12 = 3;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var15 = var12.RouteParam;
            var12 = var15.guildId;
            var12 = var12.bind(var15)();
            var12 = var13.bind(var14)(var12);
            var7['path'] = var12;
            var7 = var9.bind(var10)(var11, var7);
            if(!(var3 != var7)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var9 = 5;
            var9 = var11[var9];
            var11 = var10.bind(var4)(var9);
            var10 = var11.navigateToMemberVerification;
            var9 = var7.params;
            var9 = var9.guildId;
            var7 = var7.params;
            var7 = var7.inviteCode;
            var7 = var10.bind(var11)(var9, var7);
case 18:
            var7 = true;
            return var7;
case 9:
            var9 = var6.params;
            var6 = var9.channelId;
            var7 = var9.guildId;
            var10 = var9.messageId;
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var9 = 4;
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
            var9 = 5;
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
case 22:
            if(!(var1 === var5)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var8 = var8.openChannel;
            if(!var8) { _fun0001_ip = 24; continue _fun0001 }
case 26:
            if(!(var3 == var6)) { _fun0001_ip = 27; continue _fun0001 }
case 24:
            var8 = false;
            if(!(var8 !== var5)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var9 = _closure1_slot0;
            var11 = _closure1_slot1;
            var8 = 5;
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
            if(!var8) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var9 = _closure1_slot0;
            var11 = _closure1_slot1;
            var8 = 5;
            var8 = var11[var8];
            var11 = var9.bind(var4)(var8);
            var9 = var11.navigateToChannel;
            var8 = {};
            var8['channelId'] = var6;
            var8['guildId'] = var7;
            var8['messageId'] = var10;
            var8['replaceChannelAndFixRoot'] = var4;
            var8 = var9.bind(var11)(var8);
            _fun0001_ip = 32; continue _fun0001;
case 27:
            var9 = _closure1_slot0;
            var11 = _closure1_slot1;
            var8 = 5;
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
            return var1;
case 20:
            if(!(var3 != var6)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var8 = false;
            if(!(var8 === var5)) { _fun0001_ip = 34; continue _fun0001 }
case 36:
            if(!(var3 != var7)) { _fun0001_ip = 32; continue _fun0001 }
case 37:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 5;
            var3 = var9[var3];
            var9 = var8.bind(var4)(var3);
            var8 = var9.navigateToChannel;
            var3 = {};
            var3['channelId'] = var6;
            var3['guildId'] = var7;
            var3['messageId'] = var10;
            var3['replaceChannelAndFixRoot'] = var5;
            var3 = var8.bind(var9)(var3);
            _fun0001_ip = 32; continue _fun0001;
case 34:
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 5;
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
case 32:
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