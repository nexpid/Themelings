// app/utils/URLUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var11;
    var1 = metroImportAll;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var10 = function isDiscordHostname(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var3 = arguments[1];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0001_ip = 14; continue _fun0001 }
 12:
            var3 = false;
 14:
            var1 = null;
            var1 = var1 != var7;
            if(!var1) { _fun0001_ip = 76; continue _fun0001 }
 23:
            var5 = _closure1_slot4;
            var2 = var5.test;
            var2 = var2.bind(var5)(var7);
            if(var2) { _fun0001_ip = 73; continue _fun0001 }
 43:
            if(!var3) { _fun0001_ip = 70; continue _fun0001 }
 46:
            var6 = _closure1_slot6;
            var5 = var6.has;
            var4 = var7.toLowerCase;
            var4 = var4.bind(var7)();
            var3 = var5.bind(var6)(var4);
 70:
            var2 = var3;
 73:
            var1 = var2;
 76:
            return var1;
        }
    };
    var _closure1_slot7 = var10;
    var9 = function isDiscordProtocol(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0002_ip = 22; continue _fun0002 }
 12:
            var2 = 'discord:';
            var1 = var2 === var3;
 22:
            return var1;
        }
    };
    var _closure1_slot8 = var9;
    var8 = function isDiscordUrl(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var7 = arg1;
            var4 = arguments[1];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0003_ip = 14; continue _fun0003 }
 12:
            var4 = false;
 14:
            var5 = null;
            if(!(var5 != var7)) { _fun0003_ip = 86; continue _fun0003 }
 20:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 3;
            var2 = var8[var2];
            var6 = var6.bind(var3)(var2);
            var2 = var6.toURLSafe;
            var6 = var2.bind(var6)(var7);
            var7 = var5 == var6;
            var2 = undefined;
            if(var7) { _fun0003_ip = 69; continue _fun0003 }
 63:
            var2 = var6.hostname;
 69:
            if(!(var5 != var2)) { _fun0003_ip = 86; continue _fun0003 }
 73:
            var1 = _closure1_slot7;
            var1 = var1.bind(var3)(var2, var4);
            if(var1) { _fun0003_ip = 90; continue _fun0003 }
 86:
            var1 = false;
            return var1;
 90:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot9 = var8;
    var7 = function isDiscordUri(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var6 = arg1;
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0004_ip = 63; continue _fun0004 }
 12:
            var4 = _closure1_slot8;
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 2;
            var2 = var3[var2];
            var3 = undefined;
            var5 = var5.bind(var3)(var2);
            var2 = var5.parse;
            var2 = var2.bind(var5)(var6);
            var2 = var2.protocol;
            var1 = var4.bind(var3)(var2);
 63:
            return var1;
        }
    };
    var _closure1_slot10 = var7;
    var12 = global;
    var14 = var12.Object;
    var13 = var14.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.Routes;
    var _closure1_slot3 = var2;
    var2 = /(?:^|\.)(?:discordapp|discord|discordmerch)\.com$/i;
    var _closure1_slot4 = var2;
    var2 = /^.*\.discordapp\.net$/;
    var _closure1_slot5 = var2;
    var2 = 1;
    var2 = var6[var2];
    var11 = var11.bind(var1)(var2);
    var2 = var11.v4;
    var2 = var2.bind(var11)();
    var15 = var2.source;
    var14 = var12.RegExp;
    var2 = var12.HermesInternal;
    var13 = var2.concat;
    var11 = '(?:(?:(?:[a-z]+:)?//)|www\\.)(?:\\S+(?::\\S*)?@)?(?:localhost|';
    var2 = '|(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+(?:(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?';
    var18 = var13.bind(var11)(var15, var2);
    var2 = var14.prototype;
    var11 = Object.create(var2, {constructor: {value: var14}});
    var17 = 'ig';
    var19 = var11;
    var2 = new var19[var14](var18, var17, var16);
    var11 = var2 instanceof Object ? var2 : var11;
    var13 = var12.Set;
    var2 = var12.window;
    var2 = var2.GLOBAL_ENV;
    var14 = var2.CDN_HOST;
    var2 = new Array(4);
    var2[0] = var14;
    var14 = var12.window;
    var14 = var14.GLOBAL_ENV;
    var14 = var14.INVITE_HOST;
    var2[1] = var14;
    var14 = var12.window;
    var14 = var14.GLOBAL_ENV;
    var14 = var14.GIFT_CODE_HOST;
    var2[2] = var14;
    var12 = var12.window;
    var12 = var12.GLOBAL_ENV;
    var12 = var12.GUILD_TEMPLATE_HOST;
    var2[3] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var19 = var12;
    var18 = var2;
    var2 = new var19[var13](var18, var17);
    var2 = var2 instanceof Object ? var2 : var12;
    var _closure1_slot6 = var2;
    var2 = {};
    var2['URL_REGEX'] = var11;
    var11 = function makeUrl(arg1) {
        var1 = global;
        var2 = var1.location;
        var8 = var2.host;
        var2 = var1.location;
        var10 = var2.protocol;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var11 = '';
        var9 = '//';
        var7 = arg1;
        var1 = var11[var4](var10, var9, var8, var7, var6);
        return var1;
    };
    var2['makeUrl'] = var11;
    var2['isDiscordHostname'] = var10;
    var10 = function isDiscordLocalhost(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var4 = null;
            var1 = var4 != var3;
            if(!var1) { _fun0005_ip = 19; continue _fun0005 }
 12:
            var2 = arg2;
            var1 = var4 != var2;
 19:
            if(!var1) { _fun0005_ip = 45; continue _fun0005 }
 22:
            var2 = global;
            var2 = var2.window;
            var2 = var2.location;
            var2 = var2.host;
            var1 = var2 === var3;
 45:
            return var1;
        }
    };
    var2['isDiscordLocalhost'] = var10;
    var2['isDiscordProtocol'] = var9;
    var2['isDiscordUrl'] = var8;
    var2['isDiscordUri'] = var7;
    var7 = function isDiscordCdnUrl(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0006_ip = 78; continue _fun0006 }
 12:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.parse;
            var2 = var2.bind(var3)(var4);
            var3 = var2.hostname;
            var2 = global;
            var2 = var2.window;
            var2 = var2.GLOBAL_ENV;
            var2 = var2.CDN_HOST;
            var1 = var3 === var2;
 78:
            return var1;
        }
    };
    var2['isDiscordCdnUrl'] = var7;
    var7 = function isDiscordAssetUrl(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0007_ip = 110; continue _fun0007 }
 9:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            var2 = var3.toURLSafe;
            var3 = var2.bind(var3)(var5);
            var1 = var1 != var3;
            if(!var1) { _fun0007_ip = 108; continue _fun0007 }
 52:
            var5 = var3.hostname;
            var2 = global;
            var2 = var2.window;
            var2 = var2.GLOBAL_ENV;
            var2 = var2.CDN_HOST;
            var2 = var5 === var2;
            if(var2) { _fun0007_ip = 105; continue _fun0007 }
 85:
            var5 = _closure1_slot5;
            var4 = var5.test;
            var3 = var3.hostname;
            var2 = var4.bind(var5)(var3);
 105:
            var1 = var2;
 108:
            return var1;
 110:
            var1 = false;
            return var1;
        }
    };
    var2['isDiscordAssetUrl'] = var7;
    var7 = function isDiscordUrlOrUri(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var4 = arg1;
            var1 = _closure1_slot9;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0008_ip = 29; continue _fun0008 }
 20:
            var2 = _closure1_slot10;
            var1 = var2.bind(var3)(var4);
 29:
            return var1;
        }
    };
    var2['isDiscordUrlOrUri'] = var7;
    var7 = function isAppRoute(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var2 = arg1;
            var1 = var2.toLowerCase;
            var4 = var1.bind(var2)();
            var2 = var4.startsWith;
            var1 = '/channels/';
            var1 = var2.bind(var4)(var1);
            if(var1) { _fun0009_ip = 57; continue _fun0009 }
 33:
            var3 = var4.startsWith;
            var2 = _closure1_slot3;
            var2 = var2.ACTIVITY;
            var1 = var3.bind(var4)(var2);
 57:
            return var1;
        }
    };
    var2['isAppRoute'] = var7;
    var7 = function format(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.format;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['format'] = var7;
    var7 = function formatPathWithQuery(arg1, arg2) {
        var2 = _closure1_slot1;
        var7 = _closure1_slot2;
        var1 = 2;
        var1 = var7[var1];
        var6 = undefined;
        var3 = var2.bind(var6)(var1);
        var2 = var3.format;
        var1 = {};
        var5 = arg1;
        var1['pathname'] = var5;
        var5 = _closure1_slot0;
        var4 = 4;
        var4 = var7[var4];
        var6 = var5.bind(var6)(var4);
        var5 = var6.pickBy;
        var4 = arg2;
        var4 = var5.bind(var6)(var4);
        var1['query'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['formatPathWithQuery'] = var7;
    var7 = function formatSearch(arg1) {
        var2 = _closure1_slot1;
        var7 = _closure1_slot2;
        var1 = 2;
        var1 = var7[var1];
        var6 = undefined;
        var3 = var2.bind(var6)(var1);
        var2 = var3.format;
        var1 = {};
        var5 = _closure1_slot0;
        var4 = 4;
        var4 = var7[var4];
        var6 = var5.bind(var6)(var4);
        var5 = var6.pickBy;
        var4 = arg1;
        var4 = var5.bind(var6)(var4);
        var1['query'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['formatSearch'] = var7;
    var7 = function safeParseWithQuery(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
 3: // try_start_0
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.parse;
            var2 = var1;
            var1 = true;
            var1 = var3.bind(var4)(var2, var1);
 45: // try_end0
            return var1;
 47: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = null;
            return var1;
        }
    };
    var2['safeParseWithQuery'] = var7;
    var7 = function toURLSafe(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var2 = arg1;
            var1 = arg2;
 6: // try_start_0
            var3 = global;
            var4 = var3.URL;
            var6 = var2;
            var5 = var1;
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var7 = var2;
            var1 = new var7[var4](var6, var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
 40: // try_end0
            return var1;
 42: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = null;
            return var1;
        }
    };
    var2['toURLSafe'] = var7;
    var4 = function safeDecodeURIComponent(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
 3: // try_start_0
            var2 = global;
            var3 = var2.decodeURIComponent;
            var2 = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
 21: // try_end0
            return var1;
 23: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = null;
            return var1;
        }
    };
    var2['safeDecodeURIComponent'] = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/URLUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();