// app/modules/game_console/getXboxURIForChannel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.XBOX_HANDOFF_SEARCH_PARAMS;
    var _closure1_slot6 = var7;
    var4 = var4.XBOX_URL_BASE;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Endpoints;
    var _closure1_slot8 = var7;
    var4 = var4.ZERO_STRING_GUILD_ID;
    var _closure1_slot9 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_console/getXboxURIForChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getXboxURIForChannel(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var13 = arg1;
            var1 = arg2;
            var5 = var1.nonce;
            var1 = var1.forQRCode;
            var2 = var13.getGuildId;
            var6 = var2.bind(var13)();
            var4 = _closure1_slot2;
            var3 = var4.getGuild;
            var9 = var3.bind(var4)(var6);
            var4 = _closure1_slot6;
            var3 = {};
            var8 = null;
            if(!(var8 == var6)) { _fun0001_ip = 61; continue _fun0001 }
 57:
            var6 = _closure1_slot9;
 61:
            var3['guildId'] = var6;
            var6 = var13.id;
            var3['channelId'] = var6;
            var10 = _closure1_slot0;
            var7 = _closure1_slot1;
            var6 = 6;
            var7 = var7[var6];
            var6 = undefined;
            var12 = var10.bind(var6)(var7);
            var11 = var12.computeChannelName;
            var10 = _closure1_slot5;
            var7 = _closure1_slot4;
            var7 = var11.bind(var12)(var13, var10, var7);
            var3['channelName'] = var7;
            var10 = var8 == var9;
            var7 = undefined;
            if(var10) { _fun0001_ip = 136; continue _fun0001 }
 131:
            var7 = var9.name;
 136:
            if(!(var8 == var7)) { _fun0001_ip = 195; continue _fun0001 }
 140:
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var8 = 7;
            var9 = var12[var8];
            var9 = var11.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var6)(var8);
            var8 = var8.t;
            var8 = var8.LJpTRE;
            var7 = var9.bind(var10)(var8);
 195:
            var3['guildName'] = var7;
            var8 = _closure1_slot3;
            var7 = var8.isSelfMute;
            var7 = var7.bind(var8)();
            var3['muted'] = var7;
            var7 = var8.isSelfDeaf;
            var7 = var7.bind(var8)();
            var3['deafened'] = var7;
            var3['nonce'] = var5;
            var3 = var4.bind(var6)(var3);
            if(var1) { _fun0001_ip = 290; continue _fun0001 }
 247:
            var8 = _closure1_slot7;
            var1 = var3.toString;
            var7 = var1.bind(var3)();
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = '';
            var1 = '?';
            var1 = var5.bind(var4)(var8, var1, var7);
            _fun0001_ip = 364; continue _fun0001;
 290:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 8;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.getAPIBaseURL;
            var17 = var4.bind(var5)();
            var2 = _closure1_slot8;
            var16 = var2.XBOX_HANDOFF;
            var2 = var3.toString;
            var14 = var2.bind(var3)();
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var18 = '';
            var15 = '?';
            var1 = var18[var4](var17, var16, var15, var14, var13);
 364:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();