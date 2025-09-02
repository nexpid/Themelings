// app/modules/main_tabs_v2/native/channel/header/ChannelHeader.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ComponentActions;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/channel/header/ChannelHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function ChannelHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var9 = var2.channelId;
            var _closure2_slot0 = var9;
            var7 = var2.screenIndex;
            var10 = var2.isNavigationScreen;
            var1 = var2.pressable;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0001_ip = 40; continue _fun0001 }
 38:
            var1 = true;
 40:
            var12 = var2.isGuildMemberCountVisible;
            if(!(var12 === var5)) { _fun0001_ip = 52; continue _fun0001 }
 50:
            var12 = true;
 52:
            var6 = var2.showCreateThread;
            if(!(var6 === var5)) { _fun0001_ip = 64; continue _fun0001 }
 62:
            var6 = false;
 64:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var11 = 10;
            var11 = var8[var11];
            var14 = var4.bind(var5)(var11);
            var13 = var14.useStateFromStores;
            var15 = _closure1_slot3;
            var11 = new Array(1);
            var11[0] = var15;
            var3 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var13.bind(var14)(var11, var3);
            var3 = 11;
            var3 = var8[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useIsChannelContentGated;
            var3 = var3.bind(var4)(var11);
            var8 = !var3;
            if(!var8) { _fun0001_ip = 147; continue _fun0001 }
 144:
            var8 = var1;
 147:
            var1 = _closure1_slot5;
            var1 = var1.ROLE_SUBSCRIPTIONS;
            if(!(var9 !== var1)) { _fun0001_ip = 539; continue _fun0001 }
 164:
            var1 = _closure1_slot5;
            var1 = var1.GUILD_HOME;
            if(!(var9 !== var1)) { _fun0001_ip = 505; continue _fun0001 }
 181:
            var13 = null;
            if(!(var13 != var11)) { _fun0001_ip = 203; continue _fun0001 }
 187:
            var1 = var11.isPrivate;
            var1 = var1.bind(var11)();
            if(var1) { _fun0001_ip = 457; continue _fun0001 }
 203:
            if(!(var13 != var11)) { _fun0001_ip = 220; continue _fun0001 }
 207:
            var1 = var11.isForumLikeChannel;
            var1 = var1.bind(var11)();
            if(var1) { _fun0001_ip = 304; continue _fun0001 }
 220:
            var4 = _closure1_slot6;
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 17;
            var1 = var14[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var1['channelId'] = var9;
            var15 = var13 == var11;
            var14 = undefined;
            if(var15) { _fun0001_ip = 264; continue _fun0001 }
 259:
            var14 = var11.guild_id;
 264:
            var1['guildId'] = var14;
            var1['pressable'] = var8;
            var1['isGuildMemberCountVisible'] = var12;
            var1['isNavigationScreen'] = var10;
            var1['screenIndex'] = var7;
            var1['showCreateThread'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 455; continue _fun0001;
 304:
            var6 = _closure1_slot6;
            var4 = _closure1_slot1;
            var14 = _closure1_slot2;
            var3 = 15;
            var3 = var14[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['channelId'] = var9;
            var14 = var13 == var11;
            var13 = undefined;
            if(var14) { _fun0001_ip = 348; continue _fun0001 }
 343:
            var13 = var11.guild_id;
 348:
            var3['guildId'] = var13;
            var3['pressable'] = var8;
            var3['isGuildMemberCountVisible'] = var12;
            var3['isNavigationScreen'] = var10;
            var3['screenIndex'] = var7;
            var10 = var11.isForumChannel;
            var11 = var10.bind(var11)();
            var10 = undefined;
            if(var11) { _fun0001_ip = 444; continue _fun0001 }
 387:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 16;
            var12 = var15[var11];
            var12 = var14.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11.L9fR+P;
            var10 = var12.bind(var13)(var11);
 444:
            var3['searchPlaceholder'] = var10;
            var1 = var6.bind(var5)(var4, var3);
 455:
            _fun0001_ip = 503; continue _fun0001;
 457:
            var6 = _closure1_slot6;
            var4 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 14;
            var3 = var10[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['channelId'] = var9;
            var3['pressable'] = var8;
            var3['screenIndex'] = var7;
            var1 = var6.bind(var5)(var4, var3);
 503:
            _fun0001_ip = 537; continue _fun0001;
 505:
            var6 = _closure1_slot6;
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 13;
            var3 = var7[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var1 = var6.bind(var5)(var4, var3);
 537:
            _fun0001_ip = 571; continue _fun0001;
 539:
            var4 = _closure1_slot6;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 12;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
 571:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function navigateToChannelDetails(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var7 = arg1;
            var6 = arg2;
            var8 = arg3;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isIOS;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0002_ip = 95; continue _fun0002 }
 47:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 6;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.getChatInputRef;
            var4 = var3.bind(var4)(var7, var6);
            var3 = null;
            if(!(var3 != var4)) { _fun0002_ip = 95; continue _fun0002 }
 85:
            var3 = var4.blur;
            var3 = var3.bind(var4)();
 95:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 7;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.isSwipeToMemberListEnabled;
            var3 = var3.bind(var4)();
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            if(var3) { _fun0002_ip = 210; continue _fun0002 }
 136:
            var3 = 9;
            var3 = var5[var3];
            var9 = var4.bind(var1)(var3);
            var3 = var9.getRootNavigationRef;
            var11 = var3.bind(var9)();
            var3 = null;
            var3 = var3 != var11;
            if(!var3) { _fun0002_ip = 177; continue _fun0002 }
 167:
            var9 = var11.isReady;
            var3 = var9.bind(var11)();
 177:
            if(!var3) { _fun0002_ip = 264; continue _fun0002 }
 180:
            var10 = var11.navigate;
            var9 = {};
            var9['channelId'] = var7;
            var9['source'] = var8;
            var3 = 'sidebar';
            var3 = var10.bind(var11)(var3, var9);
            _fun0002_ip = 264; continue _fun0002;
 210:
            var3 = 8;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var5 = var3.ComponentDispatch;
            var4 = var5.dispatch;
            var2 = _closure1_slot4;
            var3 = var2.SHOW_CHANNEL_DETAILS;
            var2 = {};
            var2['source'] = var8;
            var2['channelId'] = var7;
            var2['screenIndex'] = var6;
            var2 = var4.bind(var5)(var3, var2);
 264:
            return var1;
        }
    };
    var3['navigateToChannelDetails'] = var2;
    return var1;
})();