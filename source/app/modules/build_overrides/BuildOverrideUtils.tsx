// app/modules/build_overrides/BuildOverrideUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var9 = require;
        var3 = exports;
        var10 = dependencyMap;
        var _closure1_slot0 = var9;
        var1 = metroImportDefault;
        var _closure1_slot1 = var1;
        var1 = metroImportAll;
        var _closure1_slot2 = var1;
        var _closure1_slot3 = var10;
        var6 = function getAPIEndpoint(arg1) {
            var1 = global;
            var2 = var1.location;
            var10 = var2.protocol;
            var2 = var1.location;
            var8 = var2.host;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var11 = '';
            var9 = '//';
            var7 = arg1;
            var1 = var11[var4](var10, var9, var8, var7, var6);
            return var1;
        };
        var _closure1_slot10 = var6;
        var5 = function isManualBuildOverrideLink(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var3 = _closure1_slot7;
                var2 = var3.test;
                var1 = var2.bind(var3)(var4);
case 2:
                return var1;
            }
        };
        var _closure1_slot11 = var5;
        var4 = function manualOverrideLinkMeta(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = arg1;
                var3 = var4.match;
                var1 = _closure1_slot7;
                var3 = var3.bind(var4)(var1);
                var1 = null;
                if(!(var1 != var3)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                var5 = var3.length;
                var4 = 2;
                if(!(var4 === var5)) { _fun0003_ip = 4; continue _fun0003 }
case 6:
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 3;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var5.bind(var2)(var4);
                var2 = var4.getNativePlatform;
                var7 = var2.bind(var4)();
                var2 = 1;
                var6 = var3[var2];
                var2 = {};
                var3 = {};
                var4 = global;
                var4 = var4.HermesInternal;
                var5 = var4.concat;
                var4 = 'discord_';
                var5 = var5.bind(var4)(var7);
                var4 = {};
                var7 = 'branch';
                var4['type'] = var7;
                var4['id'] = var6;
                var3[var5] = var4;
                var2['targetBuildOverride'] = var3;
                var3 = new Array(0);
                var2['validForUserIds'] = var3;
                var3 = 'Mon, 1 Jan 2038 00:00:00 GMT';
                var2['expiresAt'] = var3;
                return var2;
case 4:
                return var1;
            }
        };
        var _closure1_slot12 = var4;
        var8 = global;
        var12 = var8.Object;
        var11 = var12.defineProperty;
        var7 = {};
        var1 = true;
        var7['value'] = var1;
        var1 = '__esModule';
        var1 = var11.bind(var12)(var3, var1, var7);
        var12 = 0;
        var7 = var10[var12];
        var1 = undefined;
        var7 = var9.bind(var1)(var7);
        var7 = var7.BUILD_OVERRIDE_COOKIE_NAME;
        var _closure1_slot4 = var7;
        var7 = 1;
        var7 = var10[var7];
        var7 = var9.bind(var1)(var7);
        var7 = var7.PRIMARY_DOMAIN;
        var7 = 2;
        var7 = var10[var7];
        var11 = var9.bind(var1)(var7);
        var7 = var11.getConstants;
        var11 = var7.bind(var11)();
        var7 = 3;
        var13 = var10[var7];
        var14 = var9.bind(var1)(var13);
        var13 = var14.isAndroid;
        var13 = var13.bind(var14)();
        if(var13) { _fun0001_ip = 7; continue _fun0001 }
case 8:
        var7 = var10[var7];
        var13 = var9.bind(var1)(var7);
        var7 = var13.isIOS;
        var13 = var7.bind(var13)();
        var7 = undefined;
        if(!var13) { _fun0001_ip = 9; continue _fun0001 }
case 10:
        var7 = var11.Version;
case 9:
        _fun0001_ip = 11; continue _fun0001;
case 7:
        var14 = var11.Version;
        var13 = var14.split;
        var11 = ' - ';
        var11 = var13.bind(var14)(var11);
        var7 = var11[var12];
case 11:
        var _closure1_slot5 = var7;
        var13 = var8.RegExp;
        var11 = var13.prototype;
        var12 = Object.create(var11, {constructor: {value: var13}});
        var17 = '^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link?[\\S]+$';
        var14 = 'i';
        var18 = var12;
        var16 = var14;
        var11 = new var18[var13](var17, var16, var15);
        var11 = var11 instanceof Object ? var11 : var12;
        var _closure1_slot6 = var11;
        var13 = var8.RegExp;
        var11 = var13.prototype;
        var12 = Object.create(var11, {constructor: {value: var13}});
        var17 = '^dev://branch/([\\w-./]+)$';
        var18 = var12;
        var11 = new var18[var13](var17, var16, var15);
        var11 = var11 instanceof Object ? var11 : var12;
        var _closure1_slot7 = var11;
        var13 = var8.Set;
        var11 = var13.prototype;
        var12 = Object.create(var11, {constructor: {value: var13}});
        var17 = ['canary.discord.com', 'ptb.discord.com', 'discord.com', 'canary.discordapp.com', 'ptb.discordapp.com', 'discordapp.com'];
        var18 = var12;
        var11 = new var18[var13](var17, var16);
        var11 = var11 instanceof Object ? var11 : var12;
        var _closure1_slot8 = var11;
        var12 = var8.Set;
        var8 = var12.prototype;
        var11 = Object.create(var8, {constructor: {value: var12}});
        var17 = ['/__development/link', '/__development/link/'];
        var18 = var11;
        var8 = new var18[var12](var17, var16);
        var8 = var8 instanceof Object ? var8 : var11;
        var _closure1_slot9 = var8;
        var8 = 8;
        var8 = var10[var8];
        var10 = var9.bind(var1)(var8);
        var9 = var10.fileFinishedImporting;
        var8 = 'modules/build_overrides/BuildOverrideUtils.tsx';
        var8 = var9.bind(var10)(var8);
        var3['APP_VERSION'] = var7;
        var3['getAPIEndpoint'] = var6;
        var6 = function getBuildOverride() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure1_slot1;
                var4 = _closure1_slot3;
                var2 = 4;
                var2 = var4[var2];
                var9 = undefined;
                var4 = var3.bind(var9)(var2);
                var3 = var4.safeParseWithQuery;
                var5 = _closure1_slot10;
                var2 = '/__development/build_overrides';
                var2 = var5.bind(var9)(var2);
                var8 = var3.bind(var4)(var2);
                var4 = null;
                if(!(var4 != var8)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                var8['search'] = var4;
                var2 = _closure1_slot5;
                if(!var2) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var3 = var8.query;
                var2 = _closure1_slot5;
                var3['version'] = var2;
case 14:
                var3 = _closure1_slot0;
                var10 = _closure1_slot3;
                var2 = 5;
                var2 = var10[var2];
                var2 = var3.bind(var9)(var2);
                var5 = var2.HTTP;
                var3 = var5.get;
                var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                var7 = _closure1_slot2;
                var6 = 6;
                var6 = var10[var6];
                var7 = var7.bind(var9)(var6);
                var6 = var7.format;
                var6 = var6.bind(var7)(var8);
                var2['url'] = var6;
                var5 = var3.bind(var5)(var2);
                var3 = var5.then;
                var2 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.body;
                        if(var1) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                        var1 = null;
case 16:
                        return var1;
                    }
                };
                var1 = function() {
                    var1 = null;
                    return var1;
                };
                var1 = var3.bind(var5)(var2, var1);
                _fun0004_ip = 18; continue _fun0004;
case 12:
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.resolve;
                var1 = var2.bind(var3)(var4);
case 18:
                return var1;
            }
        };
        var3['getBuildOverride'] = var6;
        var6 = function getBuildOverrideMeta(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = arg1;
                var3 = _closure1_slot11;
                var4 = undefined;
                var3 = var3.bind(var4)(var5);
                if(var3) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                var6 = _closure1_slot1;
                var7 = _closure1_slot3;
                var3 = 4;
                var3 = var7[var3];
                var6 = var6.bind(var4)(var3);
                var3 = var6.safeParseWithQuery;
                var11 = var3.bind(var6)(var5);
                var7 = null;
                if(!(var7 != var11)) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                var11['search'] = var7;
                var6 = var11.query;
                var3 = 'true';
                var6['meta'] = var3;
                var3 = _closure1_slot5;
                if(!var3) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                var6 = var11.query;
                var3 = _closure1_slot5;
                var6['version'] = var3;
case 23:
                var3 = global;
                var3 = var3.window;
                var3 = var3.location;
                var3 = var3.host;
                var11['host'] = var3;
                var6 = _closure1_slot0;
                var12 = _closure1_slot3;
                var3 = 5;
                var3 = var12[var3];
                var3 = var6.bind(var4)(var3);
                var8 = var3.HTTP;
                var6 = var8.get;
                var3 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                var10 = _closure1_slot2;
                var9 = 6;
                var9 = var12[var9];
                var10 = var10.bind(var4)(var9);
                var9 = var10.format;
                var9 = var9.bind(var10)(var11);
                var3['url'] = var9;
                var8 = var6.bind(var8)(var3);
                var6 = var8.then;
                var3 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.body;
                        if(var1) { _fun0007_ip = 16; continue _fun0007 }
case 17:
                        var1 = null;
case 16:
                        return var1;
                    }
                };
                var2 = function() {
                    var1 = null;
                    return var1;
                };
                var2 = var6.bind(var8)(var3, var2);
                _fun0006_ip = 25; continue _fun0006;
case 21:
                var3 = global;
                var6 = var3.Promise;
                var3 = var6.resolve;
                var2 = var3.bind(var6)(var7);
case 25:
                return var2;
case 19:
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.resolve;
                var1 = _closure1_slot12;
                var1 = var1.bind(var4)(var5);
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var3['getBuildOverrideMeta'] = var6;
        var6 = function probablyHasBuildOverride() {
            var1 = global;
            var2 = var1.window;
            var2 = var2.document;
            var3 = var2.cookie;
            var2 = var3.indexOf;
            var6 = _closure1_slot4;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = '';
            var1 = '=';
            var1 = var5.bind(var4)(var6, var1);
            var2 = var2.bind(var3)(var1);
            var1 = -1;
            var1 = var1 !== var2;
            return var1;
        };
        var3['probablyHasBuildOverride'] = var6;
        var6 = function getBuildOverrideExperiments() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var7 = undefined;
                var2 = undefined;
                var1 = undefined;
case 26: // try_start_0
                var5 = _closure1_slot1;
                var6 = _closure1_slot3;
                var4 = 7;
                var4 = var6[var4];
                var8 = var5.bind(var7)(var4);
                var5 = var8.parse;
                var6 = global;
                var4 = var6.window;
                var4 = var4.document;
                var4 = var4.cookie;
                var4 = var5.bind(var8)(var4);
                var3 = _closure1_slot4;
                var4 = var4[var3];
                var1 = var4;
                var3 = null;
                if(!(var3 != var4)) { _fun0008_ip = 27; continue _fun0008 }
case 28:
                var5 = var6.JSON;
                var4 = var5.parse;
                var6 = var6.atob;
                var9 = var1;
                var8 = var9.substring;
                var10 = var9.indexOf;
                var1 = '.';
                var10 = var10.bind(var9)(var1);
                var1 = 1;
                var1 = var10 + var1;
                var1 = var8.bind(var9)(var1);
                var1 = var6.bind(var7)(var1);
                var1 = var4.bind(var5)(var1);
                var1 = var1.$meta;
                var1 = var1.experiments;
                var2 = var1;
                if(!(var3 == var1)) { _fun0008_ip = 29; continue _fun0008 }
case 30:
                var1 = {};
                _fun0008_ip = 31; continue _fun0008;
case 29:
                var1 = var2;
case 31:
                _fun0008_ip = 32; continue _fun0008;
case 27:
                var1 = {};
case 32: // try_end0
                return var1;
case 33: // catch_target0
                CatchBlockStart(arg_register=0);
                var1 = {};
                return var1;
            }
        };
        var3['getBuildOverrideExperiments'] = var6;
        var6 = function isBuildOverrideLink(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0009_ip = 2; continue _fun0009 }
case 3:
                var3 = _closure1_slot6;
                var2 = var3.test;
                var1 = var2.bind(var3)(var4);
case 2:
                return var1;
            }
        };
        var3['isBuildOverrideLink'] = var6;
        var3['isManualBuildOverrideLink'] = var5;
        var3['manualOverrideLinkMeta'] = var4;
        var2 = function validateURL(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = arg1;
                var1 = _closure1_slot11;
                var7 = undefined;
                var1 = var1.bind(var7)(var2);
                if(var1) { _fun0010_ip = 34; continue _fun0010 }
case 35:
                var3 = _closure1_slot1;
                var5 = _closure1_slot3;
                var1 = 4;
                var1 = var5[var1];
                var3 = var3.bind(var7)(var1);
                var1 = var3.safeParseWithQuery;
                var6 = var1.bind(var3)(var2);
                var1 = null;
                if(!(var1 != var6)) { _fun0010_ip = 36; continue _fun0010 }
case 37:
                var8 = _closure1_slot8;
                var5 = var8.has;
                var3 = var6.hostname;
                var3 = var5.bind(var8)(var3);
                if(!var3) { _fun0010_ip = 38; continue _fun0010 }
case 39:
                var3 = var6.query;
                var11 = 's';
                var3 = var11 in var3;
                if(!var3) { _fun0010_ip = 38; continue _fun0010 }
case 40:
                var8 = _closure1_slot9;
                var5 = var8.has;
                var3 = var6.pathname;
                var3 = var5.bind(var8)(var3);
                if(var3) { _fun0010_ip = 41; continue _fun0010 }
case 38:
                return var1;
case 41:
                var9 = var6.query;
                for(var3 in var9)
case 42:
                {
case 43:
                    var13 = var3;
                    if(var11 === var13) { _fun0010_ip = 42; continue _fun0010 }
case 44:
                    var12 = var6.query;
                    var12 = delete var12[var13];
                    _fun0010_ip = 42; continue _fun0010;
                }
case 45:
                var3 = {};
                var5 = var6.query;
                var5 = var5.s;
                var3['payload'] = var5;
                var5 = _closure1_slot2;
                var8 = _closure1_slot3;
                var4 = 6;
                var4 = var8[var4];
                var5 = var5.bind(var7)(var4);
                var4 = var5.format;
                var4 = var4.bind(var5)(var6);
                var3['url'] = var4;
                return var3;
case 36:
                return var1;
case 34:
                var1 = {};
                var3 = null;
                var1['payload'] = var3;
                var1['url'] = var2;
                return var1;
            }
        };
        var3['validateURL'] = var2;
        return var1;
    }
})();