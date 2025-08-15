// app/utils/URLUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var13 = function isOriginalContentTypeDifferent(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = arg2;
            var4 = null;
            var1 = var4 != var3;
            if(!var1) { _fun0001_ip = 19; continue _fun0001 }
 15:
            var1 = var4 != var2;
 19:
            if(!var1) { _fun0001_ip = 26; continue _fun0001 }
 22:
            var1 = var3 !== var2;
 26:
            return var1;
        }
    };
    var _closure1_slot9 = var13;
    var12 = function isDiscordHostname(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var7 = arg1;
            var3 = arguments[1];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0002_ip = 14; continue _fun0002 }
 12:
            var3 = false;
 14:
            var1 = null;
            var1 = var1 != var7;
            if(!var1) { _fun0002_ip = 76; continue _fun0002 }
 23:
            var5 = _closure1_slot5;
            var2 = var5.test;
            var2 = var2.bind(var5)(var7);
            if(var2) { _fun0002_ip = 73; continue _fun0002 }
 43:
            if(!var3) { _fun0002_ip = 70; continue _fun0002 }
 46:
            var6 = _closure1_slot8;
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
    var _closure1_slot10 = var12;
    var11 = function isDiscordProtocol(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0003_ip = 22; continue _fun0003 }
 12:
            var2 = 'discord:';
            var1 = var2 === var3;
 22:
            return var1;
        }
    };
    var _closure1_slot11 = var11;
    var8 = function isDiscordDirectAssetUrl(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0004_ip = 199; continue _fun0004 }
 12:
            var3 = _closure1_slot1;
            var6 = _closure1_slot3;
            var2 = 3;
            var2 = var6[var2];
            var6 = undefined;
            var3 = var3.bind(var6)(var2);
            var2 = var3.toURLSafe;
            var4 = var2.bind(var3)(var4);
            var1 = var1 != var4;
            if(!var1) { _fun0004_ip = 197; continue _fun0004 }
 58:
            var3 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 4;
            var2 = var7[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.isDiscordBackendDevelopment;
            var2 = var2.bind(var3)();
            var3 = !var2;
            if(var3) { _fun0004_ip = 132; continue _fun0004 }
 94:
            var6 = var4.hostname;
            var2 = 'localhost';
            var2 = var2 !== var6;
            if(!var2) { _fun0004_ip = 129; continue _fun0004 }
 113:
            var7 = var4.hostname;
            var6 = '127.0.0.1';
            var2 = var6 !== var7;
 129:
            var3 = var2;
 132:
            var2 = !var3;
            if(!var3) { _fun0004_ip = 194; continue _fun0004 }
 138:
            var6 = var4.hostname;
            var3 = global;
            var3 = var3.window;
            var3 = var3.GLOBAL_ENV;
            var3 = var3.CDN_HOST;
            var3 = var6 === var3;
            if(var3) { _fun0004_ip = 191; continue _fun0004 }
 171:
            var6 = _closure1_slot6;
            var5 = var6.test;
            var4 = var4.hostname;
            var3 = var5.bind(var6)(var4);
 191:
            var2 = var3;
 194:
            var1 = var2;
 197:
            return var1;
 199:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot12 = var8;
    var7 = function isDiscordProxiedAssetUrl(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot9;
            var6 = undefined;
            var2 = arg2;
            var1 = arg3;
            var1 = var3.bind(var6)(var2, var1);
            if(var1) { _fun0005_ip = 31; continue _fun0005 }
 27:
            var1 = false;
            return var1;
 31:
            var1 = null;
            if(!(var1 != var5)) { _fun0005_ip = 205; continue _fun0005 }
 40:
            var3 = _closure1_slot1;
            var7 = _closure1_slot3;
            var2 = 3;
            var2 = var7[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.toURLSafe;
            var3 = var2.bind(var3)(var5);
            var1 = var1 != var3;
            if(!var1) { _fun0005_ip = 203; continue _fun0005 }
 81:
            var5 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 4;
            var2 = var7[var2];
            var5 = var5.bind(var6)(var2);
            var2 = var5.isDiscordBackendDevelopment;
            var2 = var2.bind(var5)();
            var5 = !var2;
            if(var5) { _fun0005_ip = 155; continue _fun0005 }
 117:
            var6 = var3.hostname;
            var2 = 'localhost';
            var2 = var2 !== var6;
            if(!var2) { _fun0005_ip = 152; continue _fun0005 }
 136:
            var7 = var3.hostname;
            var6 = '127.0.0.1';
            var2 = var6 !== var7;
 152:
            var5 = var2;
 155:
            if(var5) { _fun0005_ip = 174; continue _fun0005 }
 158:
            var6 = var3.port;
            var2 = '4000';
            var5 = var2 !== var6;
 174:
            var2 = !var5;
            if(!var5) { _fun0005_ip = 200; continue _fun0005 }
 180:
            var5 = _closure1_slot7;
            var4 = var5.test;
            var3 = var3.hostname;
            var2 = var4.bind(var5)(var3);
 200:
            var1 = var2;
 203:
            return var1;
 205:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot13 = var7;
    var10 = function isDiscordUrl(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var7 = arg1;
            var4 = arguments[1];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0006_ip = 14; continue _fun0006 }
 12:
            var4 = false;
 14:
            var5 = null;
            if(!(var5 != var7)) { _fun0006_ip = 86; continue _fun0006 }
 20:
            var6 = _closure1_slot1;
            var8 = _closure1_slot3;
            var2 = 3;
            var2 = var8[var2];
            var6 = var6.bind(var3)(var2);
            var2 = var6.toURLSafe;
            var6 = var2.bind(var6)(var7);
            var7 = var5 == var6;
            var2 = undefined;
            if(var7) { _fun0006_ip = 69; continue _fun0006 }
 63:
            var2 = var6.hostname;
 69:
            if(!(var5 != var2)) { _fun0006_ip = 86; continue _fun0006 }
 73:
            var1 = _closure1_slot10;
            var1 = var1.bind(var3)(var2, var4);
            if(var1) { _fun0006_ip = 90; continue _fun0006 }
 86:
            var1 = false;
            return var1;
 90:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot14 = var10;
    var9 = function isDiscordUri(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var6 = arg1;
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0007_ip = 63; continue _fun0007 }
 12:
            var4 = _closure1_slot11;
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
 63:
            return var1;
        }
    };
    var _closure1_slot15 = var9;
    var15 = global;
    var17 = var15.Object;
    var16 = var17.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var16.bind(var17)(var3, var1, var2);
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
    var2 = 1;
    var2 = var6[var2];
    var14 = var14.bind(var1)(var2);
    var2 = var14.v4;
    var2 = var2.bind(var14)();
    var18 = var2.source;
    var17 = var15.RegExp;
    var2 = var15.HermesInternal;
    var16 = var2.concat;
    var14 = '(?:(?:(?:[a-z]+:)?//)|www\\.)(?:\\S+(?::\\S*)?@)?(?:localhost|';
    var2 = '|(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+(?:(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?';
    var21 = var16.bind(var14)(var18, var2);
    var2 = var17.prototype;
    var14 = Object.create(var2, {constructor: {value: var17}});
    var20 = 'ig';
    var22 = var14;
    var2 = new var22[var17](var21, var20, var19);
    var14 = var2 instanceof Object ? var2 : var14;
    var16 = var15.Set;
    var2 = var15.window;
    var2 = var2.GLOBAL_ENV;
    var17 = var2.CDN_HOST;
    var2 = new Array(4);
    var2[0] = var17;
    var17 = var15.window;
    var17 = var17.GLOBAL_ENV;
    var17 = var17.INVITE_HOST;
    var2[1] = var17;
    var17 = var15.window;
    var17 = var17.GLOBAL_ENV;
    var17 = var17.GIFT_CODE_HOST;
    var2[2] = var17;
    var15 = var15.window;
    var15 = var15.GLOBAL_ENV;
    var15 = var15.GUILD_TEMPLATE_HOST;
    var2[3] = var15;
    var15 = var16.prototype;
    var15 = Object.create(var15, {constructor: {value: var16}});
    var22 = var15;
    var21 = var2;
    var2 = new var22[var16](var21, var20);
    var2 = var2 instanceof Object ? var2 : var15;
    var _closure1_slot8 = var2;
    var2 = {};
    var2['URL_REGEX'] = var14;
    var14 = function makeUrl(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.isDiscordFrontendDevelopment;
            var2 = var1.bind(var2)();
            var1 = global;
            if(var2) { _fun0008_ip = 54; continue _fun0008 }
 40:
            var2 = var1.location;
            var6 = var2.host;
            _fun0008_ip = 72; continue _fun0008;
 54:
            var2 = var1.window;
            var2 = var2.GLOBAL_ENV;
            var6 = var2.INVITE_HOST;
 72:
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
    var2['makeUrl'] = var14;
    var2['isOriginalContentTypeDifferent'] = var13;
    var2['isDiscordHostname'] = var12;
    var12 = function isDiscordLocalhost(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var3 = arg1;
            var4 = null;
            var1 = var4 != var3;
            if(!var1) { _fun0009_ip = 19; continue _fun0009 }
 12:
            var2 = arg2;
            var1 = var4 != var2;
 19:
            if(!var1) { _fun0009_ip = 45; continue _fun0009 }
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
    var2['isDiscordLocalhost'] = var12;
    var2['isDiscordProtocol'] = var11;
    var2['isDiscordUrl'] = var10;
    var2['isDiscordUri'] = var9;
    var9 = function isDiscordCdnUrl(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0010_ip = 78; continue _fun0010 }
 12:
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
 78:
            return var1;
        }
    };
    var2['isDiscordCdnUrl'] = var9;
    var2['isDiscordDirectAssetUrl'] = var8;
    var2['isDiscordProxiedAssetUrl'] = var7;
    var7 = function isDiscordAssetUrl(arg1, arg2, arg3) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var6 = arg1;
            var1 = _closure1_slot12;
            var5 = undefined;
            var1 = var1.bind(var5)(var6);
            var3 = !var1;
            var1 = !var3;
            if(!var3) { _fun0011_ip = 49; continue _fun0011 }
 26:
            var4 = _closure1_slot13;
            var3 = arg2;
            var2 = arg3;
            var2 = var4.bind(var5)(var6, var3, var2);
            var2 = !var2;
            var1 = !var2;
 49:
            return var1;
        }
    };
    var2['isDiscordAssetUrl'] = var7;
    var7 = function isDiscordUrlOrUri(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var4 = arg1;
            var1 = _closure1_slot14;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0012_ip = 29; continue _fun0012 }
 20:
            var2 = _closure1_slot15;
            var1 = var2.bind(var3)(var4);
 29:
            return var1;
        }
    };
    var2['isDiscordUrlOrUri'] = var7;
    var7 = function isAppRoute(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var2 = arg1;
            var1 = var2.toLowerCase;
            var4 = var1.bind(var2)();
            var2 = var4.startsWith;
            var1 = '/channels/';
            var1 = var2.bind(var4)(var1);
            if(var1) { _fun0013_ip = 57; continue _fun0013 }
 33:
            var3 = var4.startsWith;
            var2 = _closure1_slot4;
            var2 = var2.ACTIVITY;
            var1 = var3.bind(var4)(var2);
 57:
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
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
 3: // try_start_0
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
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
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
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
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
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/URLUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();