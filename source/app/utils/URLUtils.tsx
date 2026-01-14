// app/utils/URLUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var15;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var14 = function isOriginalContentTypeDifferent(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var4 = null;
            var1 = var4 != var3;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var4 != var2;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var3 !== var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot10 = var14;
    var13 = function isDiscordHostname(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var3 = arguments[1];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = false;
case 6:
            var1 = null;
            var1 = var1 != var7;
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var5 = _closure1_slot5;
            var2 = var5.test;
            var2 = var2.bind(var5)(var7);
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            if(!var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var6 = _closure1_slot9;
            var5 = var6.has;
            var4 = var7.toLowerCase;
            var4 = var4.bind(var7)();
            var3 = var5.bind(var6)(var4);
case 12:
            var2 = var3;
case 10:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot11 = var13;
    var12 = function isDiscordProtocol(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0003_ip = 5; continue _fun0003 }
case 7:
            var2 = 'discord:';
            var1 = var2 === var3;
case 5:
            return var1;
        }
    };
    var _closure1_slot12 = var12;
    var9 = function isDiscordDirectAssetUrl(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0004_ip = 14; continue _fun0004 }
case 7:
            var3 = _closure1_slot1;
            var6 = _closure1_slot3;
            var2 = 3;
            var2 = var6[var2];
            var6 = undefined;
            var3 = var3.bind(var6)(var2);
            var2 = var3.toURLSafe;
            var4 = var2.bind(var3)(var4);
            var1 = var1 != var4;
            if(!var1) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var3 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 4;
            var2 = var7[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.isDiscordBackendDevelopment;
            var2 = var2.bind(var3)();
            var3 = !var2;
            if(var3) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var6 = var4.hostname;
            var2 = 'localhost';
            var2 = var2 !== var6;
            if(!var2) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var7 = var4.hostname;
            var6 = '127.0.0.1';
            var2 = var6 !== var7;
case 19:
            var3 = var2;
case 17:
            var2 = !var3;
            if(!var3) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var6 = var4.hostname;
            var3 = global;
            var3 = var3.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.CDN_HOST;
            var3 = var6 === var3;
            if(var3) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var6 = _closure1_slot6;
            var5 = var6.test;
            var4 = var4.hostname;
            var3 = var5.bind(var6)(var4);
case 23:
            var2 = var3;
case 21:
            var1 = var2;
case 15:
            return var1;
case 14:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot13 = var9;
    var8 = function isDiscordProxiedAssetUrl(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot10;
            var6 = undefined;
            var2 = arg2;
            var1 = arg3;
            var1 = var3.bind(var6)(var2, var1);
            if(var1) { _fun0005_ip = 25; continue _fun0005 }
case 26:
            var1 = false;
            return var1;
case 25:
            var1 = null;
            if(!(var1 != var5)) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var3 = _closure1_slot1;
            var7 = _closure1_slot3;
            var2 = 3;
            var2 = var7[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.toURLSafe;
            var3 = var2.bind(var3)(var5);
            var1 = var1 != var3;
            if(!var1) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var5 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 4;
            var2 = var7[var2];
            var5 = var5.bind(var6)(var2);
            var2 = var5.isDiscordBackendDevelopment;
            var2 = var2.bind(var5)();
            var5 = !var2;
            if(var5) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var6 = var3.hostname;
            var2 = 'localhost';
            var2 = var2 !== var6;
            if(!var2) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var7 = var3.hostname;
            var6 = '127.0.0.1';
            var2 = var6 !== var7;
case 33:
            var5 = var2;
case 31:
            if(var5) { _fun0005_ip = 35; continue _fun0005 }
case 36:
            var6 = var3.port;
            var2 = '4000';
            var5 = var2 !== var6;
case 35:
            var2 = !var5;
            if(!var5) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            var5 = _closure1_slot7;
            var4 = var5.test;
            var3 = var3.hostname;
            var2 = var4.bind(var5)(var3);
case 37:
            var1 = var2;
case 29:
            return var1;
case 27:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot14 = var8;
    var7 = function isAllowedGifProviderUrl(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0006_ip = 39; continue _fun0006 }
case 40:
            var6 = _closure1_slot1;
            var4 = _closure1_slot3;
            var2 = 3;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var6.bind(var2)(var4);
            var2 = var4.toURLSafe;
            var2 = var2.bind(var4)(var5);
            var1 = var1 != var2;
            if(!var1) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var4 = _closure1_slot8;
            var3 = var4.has;
            var2 = var2.hostname;
            var1 = var3.bind(var4)(var2);
case 41:
            return var1;
case 39:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot15 = var7;
    var11 = function isDiscordUrl(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var7 = arg1;
            var4 = arguments[1];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0007_ip = 6; continue _fun0007 }
case 7:
            var4 = false;
case 6:
            var5 = null;
            if(!(var5 != var7)) { _fun0007_ip = 43; continue _fun0007 }
case 44:
            var6 = _closure1_slot1;
            var8 = _closure1_slot3;
            var2 = 3;
            var2 = var8[var2];
            var6 = var6.bind(var3)(var2);
            var2 = var6.toURLSafe;
            var6 = var2.bind(var6)(var7);
            var7 = var5 == var6;
            var2 = undefined;
            if(var7) { _fun0007_ip = 45; continue _fun0007 }
case 46:
            var2 = var6.hostname;
case 45:
            if(!(var5 != var2)) { _fun0007_ip = 43; continue _fun0007 }
case 10:
            var1 = _closure1_slot11;
            var1 = var1.bind(var3)(var2, var4);
            if(var1) { _fun0007_ip = 47; continue _fun0007 }
case 43:
            var1 = false;
            return var1;
case 47:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot16 = var11;
    var10 = function isDiscordUri(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var6 = arg1;
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0008_ip = 46; continue _fun0008 }
case 7:
            var4 = _closure1_slot12;
            var5 = _closure1_slot2;
            var3 = _closure1_slot3;
            var2 = 2;
            var2 = var3[var2];
            var3 = undefined;
            var5 = var5.bind(var3)(var2);
            var2 = var5.parse;
            var2 = var2.bind(var5)(var6);
            var2 = var2.protocol;
            var1 = var4.bind(var3)(var2);
case 46:
            return var1;
        }
    };
    var _closure1_slot17 = var10;
    var16 = global;
    var18 = var16.Object;
    var17 = var18.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var17.bind(var18)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.Routes;
    var _closure1_slot4 = var2;
    var2 = /(?:^|\.)(?:discordapp|discord|discordmerch)\.com$/i;
    var _closure1_slot5 = var2;
    var2 = /^.*\.discordapp\.net$/;
    var _closure1_slot6 = var2;
    var2 = /^.*\.media\.discordapp\.net$/;
    var _closure1_slot7 = var2;
    var18 = var16.Set;
    var2 = var18.prototype;
    var17 = Object.create(var2, {constructor: {value: var18}});
    var22 = ['media.tenor.com', 'media.tenor.co', 'c.tenor.com', 'static.klipy.com', 'media.giphy.com', 'i.giphy.com'];
    var23 = var17;
    var2 = new var23[var18](var22, var21);
    var2 = var2 instanceof Object ? var2 : var17;
    var _closure1_slot8 = var2;
    var2 = 1;
    var2 = var6[var2];
    var15 = var15.bind(var1)(var2);
    var2 = var15.v4;
    var2 = var2.bind(var15)();
    var19 = var2.source;
    var18 = var16.RegExp;
    var2 = var16.HermesInternal;
    var17 = var2.concat;
    var15 = '(?:(?:(?:[a-z]+:)?//)|www\\.)(?:\\S+(?::\\S*)?@)?(?:localhost|';
    var2 = '|(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+(?:(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?';
    var22 = var17.bind(var15)(var19, var2);
    var2 = var18.prototype;
    var15 = Object.create(var2, {constructor: {value: var18}});
    var21 = 'ig';
    var23 = var15;
    var2 = new var23[var18](var22, var21, var20);
    var15 = var2 instanceof Object ? var2 : var15;
    var17 = var16.Set;
    var2 = var16.window;
    var2 = var2.GLOBAL_ENV;
    var18 = var2.CDN_HOST;
    var2 = new Array(4);
    var2[0] = var18;
    var18 = var16.window;
    var18 = var18.GLOBAL_ENV;
    var18 = var18.INVITE_HOST;
    var2[1] = var18;
    var18 = var16.window;
    var18 = var18.GLOBAL_ENV;
    var18 = var18.GIFT_CODE_HOST;
    var2[2] = var18;
    var16 = var16.window;
    var16 = var16.GLOBAL_ENV;
    var16 = var16.GUILD_TEMPLATE_HOST;
    var2[3] = var16;
    var16 = var17.prototype;
    var16 = Object.create(var16, {constructor: {value: var17}});
    var23 = var16;
    var22 = var2;
    var2 = new var23[var17](var22, var21);
    var2 = var2 instanceof Object ? var2 : var16;
    var _closure1_slot9 = var2;
    var2 = {};
    var2['URL_REGEX'] = var15;
    var15 = function makeUrl(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg2;
            var1 = null;
            if(!(var1 == var2)) { _fun0009_ip = 48; continue _fun0009 }
case 40:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 4;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var1 = var3.isDiscordFrontendDevelopment;
            var2 = var1.bind(var3)();
case 48:
            var1 = global;
            if(var2) { _fun0009_ip = 46; continue _fun0009 }
case 49:
            var2 = var1.location;
            var6 = var2.host;
            _fun0009_ip = 30; continue _fun0009;
case 46:
            var2 = var1.window;
            var2 = var2.GLOBAL_ENV;
            var6 = var2.INVITE_HOST;
case 30:
            var2 = var1.location;
            var10 = var2.protocol;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var11 = '';
            var9 = '//';
            var7 = arg1;
            var8 = var6;
            var1 = var11[var4](var10, var9, var8, var7, var6);
            return var1;
        }
    };
    var2['makeUrl'] = var15;
    var2['isOriginalContentTypeDifferent'] = var14;
    var2['isDiscordHostname'] = var13;
    var13 = function isDiscordLocalhost(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            var1 = var4 != var3;
            if(!var1) { _fun0010_ip = 2; continue _fun0010 }
case 7:
            var2 = arg2;
            var1 = var4 != var2;
case 2:
            if(!var1) { _fun0010_ip = 50; continue _fun0010 }
case 5:
            var2 = global;
            var2 = var2.window;
            var2 = var2.location;
            var2 = var2.host;
            var1 = var2 === var3;
case 50:
            return var1;
        }
    };
    var2['isDiscordLocalhost'] = var13;
    var2['isDiscordProtocol'] = var12;
    var2['isDiscordUrl'] = var11;
    var2['isDiscordUri'] = var10;
    var10 = function isDiscordCdnUrl(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0011_ip = 51; continue _fun0011 }
case 7:
            var5 = _closure1_slot2;
            var3 = _closure1_slot3;
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
case 51:
            return var1;
        }
    };
    var2['isDiscordCdnUrl'] = var10;
    var2['isDiscordDirectAssetUrl'] = var9;
    var2['isDiscordProxiedAssetUrl'] = var8;
    var2['isAllowedGifProviderUrl'] = var7;
    var7 = function isDiscordAssetUrl(arg1, arg2, arg3) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var5 = arg1;
            var1 = _closure1_slot13;
            var4 = undefined;
            var1 = var1.bind(var4)(var5);
            var2 = !var1;
            var1 = !var2;
            if(!var2) { _fun0012_ip = 12; continue _fun0012 }
case 4:
            var7 = _closure1_slot14;
            var6 = arg2;
            var2 = arg3;
            var2 = var7.bind(var4)(var5, var6, var2);
            var6 = !var2;
            var2 = !var6;
            if(!var6) { _fun0012_ip = 52; continue _fun0012 }
case 42:
            var3 = _closure1_slot15;
            var3 = var3.bind(var4)(var5);
            var3 = !var3;
            var2 = !var3;
case 52:
            var1 = var2;
case 12:
            return var1;
        }
    };
    var2['isDiscordAssetUrl'] = var7;
    var7 = function isDiscordUrlOrUri(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot16;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0013_ip = 53; continue _fun0013 }
case 44:
            var2 = _closure1_slot17;
            var1 = var2.bind(var3)(var4);
case 53:
            return var1;
        }
    };
    var2['isDiscordUrlOrUri'] = var7;
    var7 = function isAppRoute(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = arg1;
            var1 = var2.toLowerCase;
            var4 = var1.bind(var2)();
            var2 = var4.startsWith;
            var1 = '/channels/';
            var1 = var2.bind(var4)(var1);
            if(var1) { _fun0014_ip = 54; continue _fun0014 }
case 55:
            var3 = var4.startsWith;
            var2 = _closure1_slot4;
            var2 = var2.ACTIVITY;
            var1 = var3.bind(var4)(var2);
case 54:
            return var1;
        }
    };
    var2['isAppRoute'] = var7;
    var7 = function format(arg1) {
        var3 = _closure1_slot2;
        var2 = _closure1_slot3;
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
        var2 = _closure1_slot2;
        var7 = _closure1_slot3;
        var1 = 2;
        var1 = var7[var1];
        var6 = undefined;
        var3 = var2.bind(var6)(var1);
        var2 = var3.format;
        var1 = {};
        var5 = arg1;
        var1['pathname'] = var5;
        var5 = _closure1_slot1;
        var4 = 5;
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
        var2 = _closure1_slot2;
        var7 = _closure1_slot3;
        var1 = 2;
        var1 = var7[var1];
        var6 = undefined;
        var3 = var2.bind(var6)(var1);
        var2 = var3.format;
        var1 = {};
        var5 = _closure1_slot1;
        var4 = 5;
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
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
case 56: // try_start_0
            var4 = _closure1_slot2;
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.parse;
            var2 = var1;
            var1 = true;
            var1 = var3.bind(var4)(var2, var1);
case 50: // try_end0
            return var1;
case 57: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = null;
            return var1;
        }
    };
    var2['safeParseWithQuery'] = var7;
    var7 = function toURLSafe(arg1, arg2) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var2 = arg1;
            var1 = arg2;
case 58: // try_start_0
            var3 = global;
            var4 = var3.URL;
            var6 = var2;
            var5 = var1;
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var7 = var2;
            var1 = new var7[var4](var6, var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
case 28: // try_end0
            return var1;
case 59: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = null;
            return var1;
        }
    };
    var2['toURLSafe'] = var7;
    var4 = function safeDecodeURIComponent(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
case 56: // try_start_0
            var2 = global;
            var3 = var2.decodeURIComponent;
            var2 = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
case 60: // try_end0
            return var1;
case 9: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = null;
            return var1;
        }
    };
    var2['safeDecodeURIComponent'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/URLUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();