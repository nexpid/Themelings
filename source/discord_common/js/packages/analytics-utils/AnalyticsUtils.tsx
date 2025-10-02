// discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var9 = require;
        var24 = metroImportDefault;
        var3 = exports;
        var10 = dependencyMap;
        var1 = global;
        var _closure1_slot0 = var1;
        var _closure1_slot1 = var9;
        var _closure1_slot2 = var24;
        var _closure1_slot3 = var10;
        var7 = function getOS() {
            var1 = global;
            var1 = var1.window;
            var1 = var1.navigator;
            var1 = var1.userAgent;
            var1 = 'Android';
            return var1;
        };
        var _closure1_slot10 = var7;
        var6 = function getDevice() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = global;
                var1 = var1.window;
                var1 = var1.navigator;
                var1 = var1.userAgent;
                var3 = _closure1_slot1;
                var4 = _closure1_slot3;
                var1 = 6;
                var1 = var4[var1];
                var4 = undefined;
                var1 = var3.bind(var4)(var1);
                var3 = var1.Platform;
                var5 = var3.OS;
                var3 = 'android';
                if(!(var3 !== var5)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var1 = var1.NativeModules;
                var1 = var1.DCDDeviceManager;
                var1 = var1.device;
                _fun0002_ip = 4; continue _fun0002;
case 2:
                var3 = _closure1_slot1;
                var5 = _closure1_slot3;
                var2 = 7;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.default;
                var2 = var3.getConstants;
                var2 = var2.bind(var3)();
                var1 = var2.device;
case 4:
                return var1;
            }
        };
        var _closure1_slot11 = var6;
        var1 = function getDeviceProperties() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = undefined;
                var3 = undefined;
                var7 = undefined;
                var6 = undefined;
                var4 = undefined;
                var9 = {};
                var1 = var9;
                var8 = _closure1_slot10;
                var8 = var8.bind(var5)();
                var10 = 'Android';
                var3 = var10;
                var9['os'] = var10;
                var8 = global;
                var11 = var8.window;
                var11 = var11.navigator;
                var12 = var11.userAgent;
                var11 = var11.vendor;
                var8 = var8.window;
                var8 = var8.opera;
                var8 = 'Discord Android';
                var9['browser'] = var8;
                var8 = _closure1_slot11;
                var8 = var8.bind(var5)();
                var9['device'] = var8;
                var8 = _closure1_slot5;
                var8 = var8.bind(var5)();
                var9['system_locale'] = var8;
                var11 = _closure1_slot1;
                var12 = _closure1_slot3;
                var8 = 3;
                var8 = var12[var8];
                var11 = var11.bind(var5)(var8);
                var8 = var11.usesClientMods;
                var8 = var8.bind(var11)();
                var9['has_client_mods'] = var8;
case 5: // try_start_0
                var9 = _closure1_slot1;
                var11 = _closure1_slot3;
                var8 = 6;
                var8 = var11[var8];
                var8 = var9.bind(var5)(var8);
                var7 = var8;
                var8 = var8.Platform;
                var9 = var8.OS;
                var8 = 'android';
                if(!(var8 !== var9)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var7 = var7.NativeModules;
                var8 = var7.InfoDictionaryManager;
                var7 = var8.getConstants;
                var7 = var7.bind(var8)();
                _fun0003_ip = 8; continue _fun0003;
case 6:
                var9 = _closure1_slot1;
                var11 = _closure1_slot3;
                var8 = 8;
                var8 = var11[var8];
                var8 = var9.bind(var5)(var8);
                var9 = var8.default;
                var8 = var9.getConstants;
                var7 = var8.bind(var9)();
case 8:
                var8 = var7.Version;
                var6 = var7.ReleaseChannel;
                var4 = var7.DeviceVendorID;
                var7 = var1;
                var9 = var3;
                var3 = '';
                if(!(var10 === var9)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var3 = ' - rn';
case 9:
                var3 = var8 + var3;
                var7['client_version'] = var3;
                var3 = var1;
                var3['release_channel'] = var6;
                var3['device_vendor_id'] = var4;
                var4 = _closure1_slot1;
                var6 = _closure1_slot3;
                var2 = 9;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.DesignIds;
                var2 = var2.DESIGN_TABS_IA;
                var3['design_id'] = var2;
case 11: // try_end0
                _fun0003_ip = 12; continue _fun0003;
case 13: // catch_target0
                CatchBlockStart(arg_register=1);
case 12:
                return var1;
            }
        };
        var _closure1_slot12 = var1;
        var5 = function isThrottled(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = arg1;
                var1 = _closure1_slot6;
                var4 = var1[var3];
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var2 = _closure1_slot6;
                var3 = var2[var3];
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                var1 = var3 > var2;
case 14:
                return var1;
            }
        };
        var _closure1_slot13 = var5;
        var4 = function extendSuperProperties(arg1) {
            var1 = {};
            var6 = _closure1_slot4;
            var7 = var1;
            var2 = copyDataProperties(var7, var6);
            var6 = arg1;
            var7 = var1;
            var2 = copyDataProperties(var7, var6);
            _closure1_slot4 = var1;
            var4 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var2);
            var4 = var5.encodeProperties;
            var2 = _closure1_slot4;
            var2 = var4.bind(var5)(var2);
            var _closure1_slot8 = var2;
            return var1;
        };
        var17 = global;
        var12 = var17.Object;
        var11 = var12.defineProperty;
        var8 = {};
        var1 = true;
        var8['value'] = var1;
        var1 = '__esModule';
        var1 = var11.bind(var12)(var3, var1, var8);
        var20 = 0;
        var8 = var10[var20];
        var1 = undefined;
        var8 = var9.bind(var1)(var8);
        var14 = var8.getSystemLocale;
        var _closure1_slot5 = var14;
        var8 = 1;
        var11 = var10[var8];
        var11 = var9.bind(var1)(var11);
        var13 = var11.analyticsTrackingStoreMaker;
        var8 = var10[var8];
        var8 = var9.bind(var1)(var8);
        var12 = var8.AnalyticsActionHandlers;
        var21 = 2;
        var8 = var10[var21];
        var8 = var9.bind(var1)(var8);
        var11 = var8.ImpressionTypes;
        var8 = var10[var21];
        var8 = var9.bind(var1)(var8);
        var8 = var8.ImpressionGroups;
        var15 = {};
        var _closure1_slot6 = var15;
        var15 = {};
        var _closure1_slot7 = var15;
        var15 = var17.window;
        var18 = var15.DiscordNative;
        var15 = null;
        if(!(var15 != var18)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
        var19 = var18.remoteApp;
        var16 = var19.getVersion;
        var27 = var16.bind(var19)();
        var16 = var18.process;
        var16 = var16.platform;
        var19 = var18.os;
        var22 = var19.release;
        var19 = var18.os;
        var26 = var19.arch;
        var19 = var18.os;
        var25 = var19.appArch;
        var23 = var18.remoteApp;
        var19 = var23.getReleaseChannel;
        var28 = var19.bind(var23)();
        var23 = var14.bind(var1)();
        var29 = 'Windows';
        var14 = 'win32';
        if(!(var14 !== var16)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
        var19 = 'darwin';
        if(!(var19 !== var16)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
        var19 = 'linux';
        if(!(var19 !== var16)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
        var29 = var16;
        _fun0001_ip = 18; continue _fun0001;
case 22:
        var29 = 'Linux';
        _fun0001_ip = 18; continue _fun0001;
case 20:
        var29 = 'Mac OS X';
case 18:
        var19 = {};
        var19['os'] = var29;
        var29 = 'Discord Client';
        var19['browser'] = var29;
        if(var28) { _fun0001_ip = 24; continue _fun0001 }
case 25:
        var28 = 'unknown';
case 24:
        var19['release_channel'] = var28;
        var19['client_version'] = var27;
        var19['os_version'] = var22;
        var19['os_arch'] = var26;
        var19['app_arch'] = var25;
        var19['system_locale'] = var23;
        var23 = 3;
        var23 = var10[var23];
        var25 = var9.bind(var1)(var23);
        var23 = var25.usesClientMods;
        var23 = var23.bind(var25)();
        var19['has_client_mods'] = var23;
        var23 = 4;
        var23 = var10[var23];
        var23 = var9.bind(var1)(var23);
        var23 = var23.clientLaunchId;
        var19['client_launch_id'] = var23;
        var _closure1_slot4 = var19;
        var19 = 5;
        var23 = var10[var19];
        var23 = var24.bind(var1)(var23);
        var26 = var23.name;
        var23 = var15 == var26;
        var25 = undefined;
        if(var23) { _fun0001_ip = 26; continue _fun0001 }
case 27:
        var23 = var26.toLocaleLowerCase;
        var25 = var23.bind(var26)();
case 26:
        var23 = 'electron';
        if(!(var23 === var25)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
        var25 = _closure1_slot4;
        var23 = var10[var19];
        var23 = var24.bind(var1)(var23);
        var23 = var23.ua;
        if(var23) { _fun0001_ip = 30; continue _fun0001 }
case 31:
        var23 = '';
case 30:
        var25['browser_user_agent'] = var23;
        var23 = _closure1_slot4;
        var19 = var10[var19];
        var19 = var24.bind(var1)(var19);
        var19 = var19.version;
        if(var19) { _fun0001_ip = 32; continue _fun0001 }
case 33:
        var19 = '';
case 32:
        var23['browser_version'] = var19;
case 28:
        var19 = 'linux';
        if(!(var19 !== var16)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
        var19 = 'darwin';
        if(!(var19 !== var16)) { _fun0001_ip = 36; continue _fun0001 }
case 37:
        if(!(var14 === var16)) { _fun0001_ip = 16; continue _fun0001 }
case 38:
        var16 = _closure1_slot4;
        var19 = var15 == var22;
        var14 = undefined;
        if(var19) { _fun0001_ip = 39; continue _fun0001 }
case 40:
        var23 = var22.split;
        var19 = '.';
        var19 = var23.bind(var22)(var19);
        var14 = var19[var21];
case 39:
        var16['os_sdk_version'] = var14;
        _fun0001_ip = 16; continue _fun0001;
case 36:
        var16 = _closure1_slot4;
        var19 = var15 == var22;
        var14 = undefined;
        if(var19) { _fun0001_ip = 41; continue _fun0001 }
case 42:
        var21 = var22.split;
        var19 = '.';
        var19 = var21.bind(var22)(var19);
        var14 = var19[var20];
case 41:
        var16['os_sdk_version'] = var14;
        _fun0001_ip = 16; continue _fun0001;
case 34:
        var16 = var18.crashReporter;
        var14 = var16.getMetadata;
        var14 = var14.bind(var16)();
        var19 = _closure1_slot4;
        var16 = var14.wm;
        var19['window_manager'] = var16;
        var19 = _closure1_slot4;
        var16 = var14.distro;
        var19['distro'] = var16;
        var19 = _closure1_slot4;
        var16 = var14.runtime_environment;
        var19['runtime_environment'] = var16;
        var16 = _closure1_slot4;
        var14 = var14.display_server;
        var16['display_server'] = var14;
case 16:
        var19 = 'utm_source utm_medium utm_campaign utm_content utm_term';
        var16 = var19.split;
        var14 = ' ';
        var14 = var16.bind(var19)(var14);
        var _closure1_slot9 = var14;
        var14 = _closure1_slot4;
        if(!(var15 == var14)) { _fun0001_ip = 43; continue _fun0001 }
case 44: // try_start_0
        var14 = function getCachedSuperProperties() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var10 = 10;
                var1 = var1[var10];
                var8 = undefined;
                var1 = var2.bind(var8)(var1);
                var2 = var1.Storage;
                var1 = var2.get;
                var7 = 'deviceProperties';
                var4 = var1.bind(var2)(var7);
                var1 = null;
                if(!(var1 == var4)) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                var2 = _closure1_slot12;
                var2 = var2.bind(var8)();
                var6 = _closure1_slot1;
                var3 = _closure1_slot3;
                var3 = var3[var10];
                var3 = var6.bind(var8)(var3);
                var6 = var3.Storage;
                var3 = var6.set;
                var3 = var3.bind(var6)(var7, var2);
                var4 = var2;
case 45:
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var2 = var2[var10];
                var2 = var3.bind(var8)(var2);
                var3 = var2.Storage;
                var2 = var3.get;
                var9 = 'referralProperties';
                var3 = var2.bind(var3)(var9);
                if(!(var1 == var3)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                var2 = {};
                var7 = _closure1_slot1;
                var6 = _closure1_slot3;
                var6 = var6[var10];
                var6 = var7.bind(var8)(var6);
                var7 = var6.Storage;
                var6 = var7.set;
                var6 = var6.bind(var7)(var9, var2);
                var3 = var2;
case 47:
                var6 = _closure1_slot1;
                var2 = _closure1_slot3;
                var10 = 11;
                var2 = var2[var10];
                var2 = var6.bind(var8)(var2);
                var6 = var2.SessionStorage;
                var2 = var6.get;
                var2 = var2.bind(var6)(var9);
                if(!(var1 == var2)) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                var7 = function suffixObjectKeys(arg1, arg2) {
                    var5 = arg1;
                    var _closure3_slot0 = var5;
                    var1 = '_current';
                    var _closure3_slot1 = var1;
                    var1 = {};
                    var _closure3_slot2 = var1;
                    var3 = global;
                    var4 = var3.Object;
                    var3 = var4.keys;
                    var4 = var3.bind(var4)(var5);
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var4 = arg1;
                        var3 = _closure3_slot2;
                        var6 = _closure3_slot1;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var5 = var2.concat;
                        var2 = '';
                        var2 = var5.bind(var2)(var4, var6);
                        var1 = _closure3_slot0;
                        var1 = var1[var4];
                        var3[var2] = var1;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var6 = {};
                var1 = '_current';
                var1 = var7.bind(var8)(var6, var1);
                var7 = _closure1_slot1;
                var6 = _closure1_slot3;
                var6 = var6[var10];
                var6 = var7.bind(var8)(var6);
                var7 = var6.SessionStorage;
                var6 = var7.set;
                var6 = var6.bind(var7)(var9, var1);
                var2 = var1;
case 49:
                var1 = {};
                var12 = var1;
                var11 = var4;
                var4 = copyDataProperties(var12, var11);
                var7 = {};
                var4 = global;
                var4 = var4.window;
                var4 = var4.navigator;
                var4 = var4.userAgent;
                if(var4) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                var4 = '';
case 51:
                var7['browser_user_agent'] = var4;
                var6 = _closure1_slot2;
                var9 = _closure1_slot3;
                var4 = 5;
                var4 = var9[var4];
                var4 = var6.bind(var8)(var4);
                var4 = var4.version;
                if(var4) { _fun0005_ip = 53; continue _fun0005 }
case 22:
                var4 = '';
case 53:
                var7['browser_version'] = var4;
                var6 = _closure1_slot1;
                var9 = _closure1_slot3;
                var4 = 6;
                var4 = var9[var4];
                var6 = var6.bind(var8)(var4);
                var4 = {};
                var12 = var4;
                var11 = var7;
                var7 = copyDataProperties(var12, var11);
                var7 = var6.Platform;
                var9 = var7.OS;
                var7 = 'android';
                if(!(var7 !== var9)) { _fun0005_ip = 54; continue _fun0005 }
case 55:
                var6 = var6.NativeModules;
                var6 = var6.DCDDeviceManager;
                var6 = var6.systemVersion;
                _fun0005_ip = 56; continue _fun0005;
case 54:
                var7 = _closure1_slot1;
                var9 = _closure1_slot3;
                var5 = 7;
                var5 = var9[var5];
                var5 = var7.bind(var8)(var5);
                var7 = var5.default;
                var5 = var7.getConstants;
                var5 = var5.bind(var7)();
                var6 = var5.systemVersion;
case 56:
                if(var6) { _fun0005_ip = 57; continue _fun0005 }
case 58:
                var6 = '';
case 57:
                var5 = 'os_version';
                var4[var5] = var6;
                var12 = var1;
                var11 = var4;
                var4 = copyDataProperties(var12, var11);
                var12 = var1;
                var11 = var3;
                var3 = copyDataProperties(var12, var11);
                var12 = var1;
                var11 = var2;
                var2 = copyDataProperties(var12, var11);
                return var1;
            }
        };
        var14 = var14.bind(var1)();
        _closure1_slot4 = var14;
case 59: // try_end0
        _fun0001_ip = 43; continue _fun0001;
case 60: // catch_target0
        CatchBlockStart(arg_register=13);
        var14 = {};
        _closure1_slot4 = var14;
case 43:
        var14 = {};
        var16 = var17.window;
        var16 = var16.GLOBAL_ENV;
        var16 = var16.RELEASE_CHANNEL;
        var20 = var17.parseInt;
        var19 = '4723';
        var16 = 10;
        var16 = var20.bind(var1)(var19, var16);
        var19 = var17.isNaN;
        var19 = var19.bind(var1)(var16);
        if(var19) { _fun0001_ip = 61; continue _fun0001 }
case 62:
        var14['client_build_number'] = var16;
case 61:
        var19 = var15 == var18;
        var16 = undefined;
        if(var19) { _fun0001_ip = 63; continue _fun0001 }
case 64:
        var19 = var18.remoteApp;
        var19 = var19.getBuildNumber;
        var19 = var15 == var19;
        var16 = undefined;
        if(var19) { _fun0001_ip = 63; continue _fun0001 }
case 65:
        var19 = var18.remoteApp;
        var18 = var19.getBuildNumber;
        var16 = var18.bind(var19)();
case 63:
        var17 = var17.isNaN;
        var17 = var17.bind(var1)(var16);
        if(var17) { _fun0001_ip = 66; continue _fun0001 }
case 67:
        var14['native_build_number'] = var16;
case 66:
        var14['client_event_source'] = var15;
        var15 = 3;
        var15 = var10[var15];
        var16 = var9.bind(var1)(var15);
        var15 = var16.usesClientMods;
        var15 = var15.bind(var16)();
        var14['has_client_mods'] = var15;
        var15 = 4;
        var15 = var10[var15];
        var15 = var9.bind(var1)(var15);
        var15 = var15.clientLaunchId;
        var14['client_launch_id'] = var15;
        var14 = var4.bind(var1)(var14);
        var14 = 16;
        var14 = var10[var14];
        var16 = var9.bind(var1)(var14);
        var15 = var16.fileFinishedImporting;
        var14 = '../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx';
        var14 = var15.bind(var16)(var14);
        var14 = 12;
        var14 = var10[var14];
        var14 = var9.bind(var1)(var14);
        var14 = var14.encodeProperties;
        var3['encodeProperties'] = var14;
        var3['analyticsTrackingStoreMaker'] = var13;
        var3['AnalyticsActionHandlers'] = var12;
        var3['ImpressionTypes'] = var11;
        var3['ImpressionGroups'] = var8;
        var8 = 17;
        var11 = var10[var8];
        var11 = var9.bind(var1)(var11);
        var11 = var11.ImpressionNames;
        var3['ImpressionNames'] = var11;
        var8 = var10[var8];
        var8 = var9.bind(var1)(var8);
        var8 = var8.NetworkActionNames;
        var3['NetworkActionNames'] = var8;
        var8 = function getCampaignParams(arg1) {
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = {};
            var _closure2_slot1 = var1;
            var4 = _closure1_slot9;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = arg1;
                    var8 = _closure2_slot0;
                    var5 = null;
                    var4 = var5 == var8;
                    var9 = '';
                    var2 = var9;
                    if(var4) { _fun0006_ip = 68; continue _fun0006 }
case 69:
                    var7 = var3.replace;
                    var6 = /[[]/;
                    var4 = '\\[';
                    var10 = var7.bind(var3)(var6, var4);
                    var7 = var10.replace;
                    var6 = /[\]]/;
                    var4 = '\\]';
                    var12 = var7.bind(var10)(var6, var4);
                    var7 = global;
                    var10 = var7.RegExp;
                    var4 = var7.HermesInternal;
                    var11 = var4.concat;
                    var6 = '[\\?&]';
                    var4 = '=([^&#]*)';
                    var14 = var11.bind(var6)(var12, var4);
                    var6 = var10.prototype;
                    var6 = Object.create(var6, {constructor: {value: var10}});
                    var15 = var6;
                    var4 = new var15[var10](var14, var13);
                    var6 = var4 instanceof Object ? var4 : var6;
                    var4 = var6.exec;
                    var6 = var4.bind(var6)(var8);
                    var4 = var9;
                    if(!(var5 !== var6)) { _fun0006_ip = 70; continue _fun0006 }
case 71:
                    var5 = 1;
                    var8 = var6[var5];
                    var10 = 'string';
                    var8 = typeof var8;
                    if(!(var10 !== var8)) { _fun0006_ip = 72; continue _fun0006 }
case 73:
                    var8 = var6[var5];
                    var8 = var8.length;
                    var4 = var9;
                    if(var8) { _fun0006_ip = 70; continue _fun0006 }
case 72:
                    var7 = var7.decodeURIComponent;
                    var6 = var6[var5];
                    var5 = undefined;
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.replace;
                    var6 = /\+/g;
                    var5 = ' ';
                    var4 = var7.bind(var8)(var6, var5);
case 70:
                    var2 = var4;
case 68:
                    var5 = var2.length;
                    var4 = 0;
                    if(!(var5 > var4)) { _fun0006_ip = 74; continue _fun0006 }
case 75:
                    var1 = _closure2_slot1;
                    var1[var3] = var2;
case 74:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3['getCampaignParams'] = var8;
        var3['getOS'] = var7;
        var3['getDevice'] = var6;
        var3['isThrottled'] = var5;
        var3['extendSuperProperties'] = var4;
        var4 = function(arg1) {
            var2 = arg1;
            var3 = var2.analyticEventConfigs;
            var _closure2_slot0 = var3;
            var5 = var2.dispatcher;
            var4 = var2.TRACK_ACTION_NAME;
            var6 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = 13;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            var2 = var3.queueTrackingEventMaker;
            var2 = var2.bind(var3)(var5, var4);
            var _closure2_slot1 = var2;
            var1 = function track(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var6 = arg1;
                    var5 = arg2;
                    var4 = arguments[2];
                    var3 = undefined;
                    if(!(var4 === var3)) { _fun0007_ip = 76; continue _fun0007 }
case 77:
                    var4 = {};
case 76:
                    var1 = _closure1_slot0;
                    var2 = var1.isServerRendering;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0007_ip = 78; continue _fun0007 }
case 79:
                    var2 = _closure1_slot0;
                    var7 = var2.isServerRendering;
                    var2 = true;
                    if(!(var2 !== var7)) { _fun0007_ip = 26; continue _fun0007 }
case 78:
                    var11 = var5;
                    if(!(var1 == var11)) { _fun0007_ip = 80; continue _fun0007 }
case 81:
                    var11 = {};
case 80:
                    var7 = _closure2_slot0;
                    var9 = var7[var6];
                    var12 = 'function';
                    var10 = typeof var9;
                    var7 = var9;
                    if(!(var12 === var10)) { _fun0007_ip = 82; continue _fun0007 }
case 83:
                    var10 = var9.bind(var3)(var11);
                    var12 = var1 != var10;
                    var9 = null;
                    if(!var12) { _fun0007_ip = 84; continue _fun0007 }
case 85:
                    var9 = var10;
case 84:
                    var7 = var9;
case 82:
                    if(!(var1 != var7)) { _fun0007_ip = 86; continue _fun0007 }
case 87:
                    var1 = 'throttlePeriod';
                    var1 = var1 in var7;
                    if(var1) { _fun0007_ip = 88; continue _fun0007 }
case 89:
                    var1 = 'throttlePercent';
                    var1 = var1 in var7;
                    if(var1) { _fun0007_ip = 90; continue _fun0007 }
case 91:
                    var9 = _closure1_slot2;
                    var10 = _closure1_slot3;
                    var1 = 15;
                    var1 = var10[var1];
                    var10 = var9.bind(var3)(var1);
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var9 = var1.concat;
                    var1 = 'Unsupported analytics event config: ';
                    var9 = var9.bind(var1)(var7);
                    var1 = false;
                    var1 = var10.bind(var3)(var1, var9);
                    _fun0007_ip = 86; continue _fun0007;
case 90:
                    var1 = global;
                    var10 = var1.Math;
                    var9 = var10.random;
                    var10 = var9.bind(var10)();
                    var9 = var7.throttlePercent;
                    if(!(var10 > var9)) { _fun0007_ip = 86; continue _fun0007 }
case 92:
                    var9 = var1.Promise;
                    var1 = var9.resolve;
                    var1 = var1.bind(var9)();
                    return var1;
case 88:
                    var10 = new Array(1);
                    var10[0] = var6;
                    var1 = var7.throttleKeys;
                    var16 = var1.bind(var7)(var11);
                    var15 = 1;
                    var17 = var10;
                    var1 = arraySpread(var17, var16, var15);
                    var9 = var10.join;
                    var1 = '_';
                    var9 = var9.bind(var10)(var1);
                    var1 = _closure1_slot13;
                    var1 = var1.bind(var3)(var9);
                    if(var1) { _fun0007_ip = 93; continue _fun0007 }
case 94:
                    var1 = var7.throttlePercent;
                    var10 = 'number';
                    var1 = typeof var1;
                    if(!(var10 === var1)) { _fun0007_ip = 95; continue _fun0007 }
case 96:
                    var1 = global;
                    var12 = var1.Math;
                    var10 = var12.random;
                    var12 = var10.bind(var12)();
                    var10 = var7.throttlePercent;
                    if(!(!(var12 > var10))) { _fun0007_ip = 97; continue _fun0007 }
case 95:
                    var10 = var7.deduplicate;
                    if(!var10) { _fun0007_ip = 98; continue _fun0007 }
case 20:
                    var10 = _closure1_slot7;
                    var12 = var10[var9];
                    var13 = _closure1_slot2;
                    var14 = _closure1_slot3;
                    var10 = 14;
                    var10 = var14[var10];
                    var10 = var13.bind(var3)(var10);
                    var10 = var10.bind(var3)(var12, var11);
                    if(var10) { _fun0007_ip = 99; continue _fun0007 }
case 100:
                    var10 = _closure1_slot7;
                    var10[var9] = var11;
case 98:
                    var8 = _closure1_slot6;
                    var10 = global;
                    var11 = var10.Date;
                    var10 = var11.now;
                    var10 = var10.bind(var11)();
                    var7 = var7.throttlePeriod;
                    var7 = var10 + var7;
                    var8[var9] = var7;
case 86:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var3)(var6, var5, var4);
                    return var2;
case 99:
                    var2 = global;
                    var3 = var2.Promise;
                    var2 = var3.resolve;
                    var2 = var2.bind(var3)();
                    return var2;
case 97:
                    var2 = var1.Promise;
                    var1 = var2.resolve;
                    var1 = var1.bind(var2)();
                    return var1;
case 93:
                    var1 = global;
                    var2 = var1.Promise;
                    var1 = var2.resolve;
                    var1 = var1.bind(var2)();
                    return var1;
case 26:
                    var1 = global;
                    var2 = var1.Promise;
                    var1 = var2.resolve;
                    var1 = var1.bind(var2)();
                    return var1;
                }
            };
            return var1;
        };
        var3['trackMaker'] = var4;
        var4 = function getSuperProperties() {
            var1 = _closure1_slot4;
            return var1;
        };
        var3['getSuperProperties'] = var4;
        var2 = function getSuperPropertiesBase64() {
            var1 = _closure1_slot8;
            return var1;
        };
        var3['getSuperPropertiesBase64'] = var2;
        return var1;
    }
})();