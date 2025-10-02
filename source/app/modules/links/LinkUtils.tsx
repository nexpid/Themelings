// app/modules/links/LinkUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var4 = function canViewChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = var5.isPrivate;
            var1 = var1.bind(var5)();
            var2 = !var1;
            var1 = !var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot4;
            var3 = var4.can;
            var2 = _closure1_slot6;
            var2 = var2.VIEW_CHANNEL;
            var1 = var3.bind(var4)(var2, var5);
case 2:
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var5 = global;
    var11 = var5.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var9[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var9[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var9[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var12 = var6.ME;
    var _closure1_slot5 = var12;
    var6 = var6.Permissions;
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var10 = var6.StaticChannelRoutes;
    var7 = var5.Array;
    var6 = var7.from;
    var10 = var6.bind(var7)(var10);
    var7 = var10.map;
    var6 = function(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.escape;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var10 = var7.bind(var10)(var6);
    var7 = var10.join;
    var6 = '|';
    var14 = var7.bind(var10)(var6);
    var10 = var5.RegExp;
    var6 = var5.HermesInternal;
    var11 = var6.concat;
    var13 = '^/channels/(\\d+|';
    var17 = ')(?:/)?(\\d+|';
    var15 = ')?';
    var19 = var13;
    var18 = var12;
    var16 = var14;
    var18 = var19[var11](var18, var17, var16, var15, var14);
    var7 = var10.prototype;
    var7 = Object.create(var7, {constructor: {value: var10}});
    var19 = var7;
    var6 = new var19[var10](var18, var17);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot7 = var6;
    var10 = var5.RegExp;
    var6 = var5.HermesInternal;
    var11 = var6.concat;
    var17 = ')(?:/)(\\d+|';
    var15 = ')(?:/)(\\d+)';
    var19 = var13;
    var18 = var12;
    var16 = var14;
    var18 = var19[var11](var18, var17, var16, var15, var14);
    var7 = var10.prototype;
    var7 = Object.create(var7, {constructor: {value: var10}});
    var19 = var7;
    var6 = new var19[var10](var18, var17);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot8 = var6;
    var10 = var5.RegExp;
    var6 = var10.prototype;
    var7 = Object.create(var6, {constructor: {value: var10}});
    var18 = '^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)';
    var19 = var7;
    var6 = new var19[var10](var18, var17);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot9 = var6;
    var10 = var5.RegExp;
    var6 = var10.prototype;
    var7 = Object.create(var6, {constructor: {value: var10}});
    var18 = '^/guild-stages/(\\d+)(?:/)?(\\d+)?';
    var19 = var7;
    var6 = new var19[var10](var18, var17);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot10 = var6;
    var10 = var5.RegExp;
    var6 = var10.prototype;
    var7 = Object.create(var6, {constructor: {value: var10}});
    var18 = '^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?';
    var19 = var7;
    var6 = new var19[var10](var18, var17);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot11 = var6;
    var10 = var5.RegExp;
    var6 = var5.HermesInternal;
    var11 = var6.concat;
    var7 = '^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+|';
    var6 = ')(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?';
    var18 = var11.bind(var7)(var12, var6);
    var7 = var10.prototype;
    var7 = Object.create(var7, {constructor: {value: var10}});
    var19 = var7;
    var6 = new var19[var10](var18, var17);
    var6 = var6 instanceof Object ? var6 : var7;
    var10 = var5.RegExp;
    var5 = var10.prototype;
    var7 = Object.create(var5, {constructor: {value: var10}});
    var18 = '^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)';
    var19 = var7;
    var5 = new var19[var10](var18, var17);
    var5 = var5 instanceof Object ? var5 : var7;
    var7 = 6;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/links/LinkUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['CHANNEL_OR_MESSAGES_URL_RE'] = var6;
    var3['MEDIA_POST_URL_RE'] = var5;
    var5 = function tryParseChannelPath(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var10 = arg1;
            var1 = null;
            if(!(var1 != var10)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = var10.match;
            var3 = _closure1_slot8;
            var4 = var4.bind(var10)(var3);
            if(!(var1 != var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var5 = var4.length;
            var3 = 3;
            if(!(!(var5 > var3))) { _fun0002_ip = 8; continue _fun0002 }
case 6:
            var6 = var10.match;
            var5 = _closure1_slot9;
            var6 = var6.bind(var10)(var5);
            if(!(var1 != var6)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var7 = var6.length;
            var5 = 4;
            if(!(!(var7 > var5))) { _fun0002_ip = 11; continue _fun0002 }
case 9:
            var8 = var10.match;
            var7 = _closure1_slot7;
            var9 = var8.bind(var10)(var7);
            if(!(var1 != var9)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var7 = var9.length;
            var8 = 1;
            if(!(!(var7 > var8))) { _fun0002_ip = 14; continue _fun0002 }
case 12:
            var7 = var10.match;
            var2 = _closure1_slot10;
            var2 = var7.bind(var10)(var2);
            var2 = null;
            _fun0002_ip = 15; continue _fun0002;
case 14:
            var7 = {};
            var8 = var9[var8];
            var7['guildId'] = var8;
            var8 = 2;
            var9 = var9[var8];
            var10 = var1 != var9;
            var8 = undefined;
            if(!var10) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var8 = var9;
case 16:
            var7['channelId'] = var8;
            var2 = var7;
case 15:
            return var2;
case 11:
            var2 = {};
            var7 = 1;
            var7 = var6[var7];
            var2['guildId'] = var7;
            var7 = 2;
            var7 = var6[var7];
            var2['channelId'] = var7;
            var7 = 3;
            var7 = var6[var7];
            var2['threadId'] = var7;
            var5 = var6[var5];
            var2['messageId'] = var5;
            return var2;
case 8:
            var2 = {};
            var5 = 1;
            var5 = var4[var5];
            var2['guildId'] = var5;
            var5 = 2;
            var5 = var4[var5];
            var2['channelId'] = var5;
            var3 = var4[var3];
            var2['messageId'] = var3;
            return var2;
case 4:
            return var1;
        }
    };
    var3['tryParseChannelPath'] = var5;
    var5 = function tryParseEventDetailsPath(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var3 = var4.match;
            var2 = _closure1_slot11;
            var5 = var3.bind(var4)(var2);
            var3 = var1 != var5;
            var2 = null;
            if(!var3) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var3 = var5.length;
            var4 = 1;
            var3 = var3 > var4;
            var2 = null;
            if(!var3) { _fun0003_ip = 20; continue _fun0003 }
case 22:
            var3 = {};
            var4 = var5[var4];
            var3['guildId'] = var4;
            var4 = 2;
            var4 = var5[var4];
            var3['guildEventId'] = var4;
            var4 = 3;
            var4 = var5[var4];
            var3['recurrenceId'] = var4;
            var2 = var3;
case 20:
            return var2;
case 18:
            return var1;
        }
    };
    var3['tryParseEventDetailsPath'] = var5;
    var3['canViewChannel'] = var4;
    var2 = function isAccessibleChannelPath(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var5 = var1.channelId;
            var3 = _closure1_slot3;
            var1 = var3.getGuild;
            var3 = var1.bind(var3)(var4);
            var1 = null;
            if(!(var1 == var3)) { _fun0004_ip = 23; continue _fun0004 }
case 21:
            var3 = _closure1_slot5;
            if(!(var4 === var3)) { _fun0004_ip = 24; continue _fun0004 }
case 23:
            if(!(var1 != var5)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var4 = _closure1_slot2;
            var3 = var4.getChannel;
            var4 = var3.bind(var4)(var5);
            var1 = var1 != var4;
            if(!var1) { _fun0004_ip = 9; continue _fun0004 }
case 27:
            var3 = _closure1_slot12;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
case 9:
            return var1;
case 25:
            var1 = true;
            return var1;
case 24:
            var1 = false;
            return var1;
        }
    };
    var3['isAccessibleChannelPath'] = var2;
    return var1;
})();