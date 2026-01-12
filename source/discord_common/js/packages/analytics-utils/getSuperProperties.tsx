// discord_common/js/packages/analytics-utils/getSuperProperties.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var8 = require;
        var19 = metroImportDefault;
        var3 = exports;
        var9 = dependencyMap;
        var _closure1_slot0 = var8;
        var _closure1_slot1 = var19;
        var _closure1_slot2 = var9;
        var6 = function getOS() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = undefined;
                var1 = undefined;
                var3 = undefined;
                var2 = global;
                var2 = var2.window;
                var2 = var2.navigator;
                var2 = var2.userAgent;
case 2: // try_start_0
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 4;
                var2 = var6[var2];
                var2 = var5.bind(var4)(var2);
                var2 = var2.default;
                var3 = var2;
                var5 = null;
                var6 = var5 == var2;
                var2 = undefined;
                if(var6) { _fun0002_ip = 3; continue _fun0002 }
case 4:
                var6 = var3;
                var3 = var6.getConstants;
                var3 = var3.bind(var6)();
                var1 = var3;
                var3 = var5 == var3;
                var2 = undefined;
                if(var3) { _fun0002_ip = 3; continue _fun0002 }
case 5:
                var2 = var1.deviceModel;
case 3:
                var1 = 'Quest';
                if(!(var1 !== var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7: // try_end0
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var1 = 'Horizon OS';
                return var1;
case 9: // catch_target0
                CatchBlockStart(arg_register=0);
case 8:
                var1 = 'Android';
                return var1;
            }
        };
        var _closure1_slot7 = var6;
        var5 = function getDevice() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = global;
                var1 = var1.window;
                var1 = var1.navigator;
                var1 = var1.userAgent;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 5;
                var1 = var4[var1];
                var4 = undefined;
                var1 = var3.bind(var4)(var1);
                var3 = var1.Platform;
                var5 = var3.OS;
                var3 = 'android';
                if(!(var3 !== var5)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var1 = var1.NativeModules;
                var1 = var1.DCDDeviceManager;
                var1 = var1.device;
                _fun0003_ip = 12; continue _fun0003;
case 10:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 4;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.default;
                var2 = var3.getConstants;
                var2 = var2.bind(var3)();
                var1 = var2.device;
case 12:
                return var1;
            }
        };
        var _closure1_slot8 = var5;
        var1 = function getDeviceProperties() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var5 = undefined;
                var3 = undefined;
                var7 = undefined;
                var6 = undefined;
                var4 = undefined;
                var9 = {};
                var1 = var9;
                var8 = _closure1_slot7;
                var8 = var8.bind(var5)();
                var3 = var8;
                var9['os'] = var8;
                var8 = global;
                var10 = var8.window;
                var10 = var10.navigator;
                var11 = var10.userAgent;
                var10 = var10.vendor;
                var8 = var8.window;
                var8 = var8.opera;
                var8 = 'Discord Android';
                var9['browser'] = var8;
                var8 = _closure1_slot8;
                var8 = var8.bind(var5)();
                var9['device'] = var8;
                var8 = _closure1_slot5;
                var8 = var8.bind(var5)();
                var9['system_locale'] = var8;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 1;
                var8 = var11[var8];
                var10 = var10.bind(var5)(var8);
                var8 = var10.usesClientMods;
                var8 = var8.bind(var10)();
                var9['has_client_mods'] = var8;
case 13: // try_start_0
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 5;
                var8 = var10[var8];
                var8 = var9.bind(var5)(var8);
                var7 = var8;
                var8 = var8.Platform;
                var9 = var8.OS;
                var8 = 'android';
                if(!(var8 !== var9)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var7 = var7.NativeModules;
                var8 = var7.InfoDictionaryManager;
                var7 = var8.getConstants;
                var7 = var7.bind(var8)();
                _fun0004_ip = 16; continue _fun0004;
case 14:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 6;
                var8 = var10[var8];
                var8 = var9.bind(var5)(var8);
                var9 = var8.default;
                var8 = var9.getConstants;
                var7 = var8.bind(var9)();
case 16:
                var8 = var7.Version;
                var6 = var7.ReleaseChannel;
                var4 = var7.DeviceVendorID;
                var7 = var1;
                var10 = var3;
                var3 = '';
                var9 = 'Android';
                if(!(var9 === var10)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var3 = ' - rn';
case 17:
                var3 = var8 + var3;
                var7['client_version'] = var3;
                var3 = var1;
                var3['release_channel'] = var6;
                var3['device_vendor_id'] = var4;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 7;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.DesignIds;
                var2 = var2.DESIGN_TABS_IA;
                var3['design_id'] = var2;
case 19: // try_end0
                _fun0004_ip = 20; continue _fun0004;
case 21: // catch_target0
                CatchBlockStart(arg_register=1);
case 20:
                return var1;
            }
        };
        var _closure1_slot9 = var1;
        var4 = function extendSuperProperties(arg1) {
            var1 = {};
            var6 = _closure1_slot3;
            var7 = var1;
            var2 = copyDataProperties(var7, var6);
            var6 = arg1;
            var7 = var1;
            var2 = copyDataProperties(var7, var6);
            _closure1_slot3 = var1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var2);
            var4 = var5.encodeProperties;
            var2 = _closure1_slot3;
            var2 = var4.bind(var5)(var2);
            var _closure1_slot4 = var2;
            return var1;
        };
        var12 = global;
        var11 = var12.Object;
        var10 = var11.defineProperty;
        var7 = {};
        var1 = true;
        var7['value'] = var1;
        var1 = '__esModule';
        var1 = var10.bind(var11)(var3, var1, var7);
        var15 = 0;
        var7 = var9[var15];
        var1 = undefined;
        var7 = var8.bind(var1)(var7);
        var7 = var7.getSystemLocale;
        var _closure1_slot5 = var7;
        var10 = var12.window;
        var13 = var10.DiscordNative;
        var10 = null;
        if(!(var10 != var13)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
        var14 = var13.remoteApp;
        var11 = var14.getVersion;
        var21 = var11.bind(var14)();
        var11 = var13.process;
        var11 = var11.platform;
        var14 = var13.os;
        var17 = var14.release;
        var14 = var13.os;
        var20 = var14.arch;
        var14 = var13.os;
        var18 = var14.appArch;
        var16 = var13.remoteApp;
        var14 = var16.getReleaseChannel;
        var22 = var14.bind(var16)();
        var16 = var7.bind(var1)();
        var23 = 'Windows';
        var7 = 'win32';
        if(!(var7 !== var11)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
        var14 = 'darwin';
        if(!(var14 !== var11)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
        var14 = 'linux';
        if(!(var14 !== var11)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
        var23 = var11;
        _fun0001_ip = 24; continue _fun0001;
case 28:
        var23 = 'Linux';
        _fun0001_ip = 24; continue _fun0001;
case 26:
        var23 = 'Mac OS X';
case 24:
        var14 = {};
        var14['os'] = var23;
        var23 = 'Discord Client';
        var14['browser'] = var23;
        if(var22) { _fun0001_ip = 30; continue _fun0001 }
case 31:
        var22 = 'unknown';
case 30:
        var14['release_channel'] = var22;
        var14['client_version'] = var21;
        var14['os_version'] = var17;
        var14['os_arch'] = var20;
        var14['app_arch'] = var18;
        var14['system_locale'] = var16;
        var16 = 1;
        var16 = var9[var16];
        var18 = var8.bind(var1)(var16);
        var16 = var18.usesClientMods;
        var16 = var16.bind(var18)();
        var14['has_client_mods'] = var16;
        var16 = 2;
        var18 = var9[var16];
        var18 = var8.bind(var1)(var18);
        var18 = var18.clientLaunchId;
        var14['client_launch_id'] = var18;
        var _closure1_slot3 = var14;
        var14 = 3;
        var18 = var9[var14];
        var18 = var19.bind(var1)(var18);
        var21 = var18.name;
        var18 = var10 == var21;
        var20 = undefined;
        if(var18) { _fun0001_ip = 32; continue _fun0001 }
case 33:
        var18 = var21.toLocaleLowerCase;
        var20 = var18.bind(var21)();
case 32:
        var18 = 'electron';
        if(!(var18 === var20)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
        var20 = _closure1_slot3;
        var18 = var9[var14];
        var18 = var19.bind(var1)(var18);
        var18 = var18.ua;
        if(var18) { _fun0001_ip = 36; continue _fun0001 }
case 37:
        var18 = '';
case 36:
        var20['browser_user_agent'] = var18;
        var18 = _closure1_slot3;
        var14 = var9[var14];
        var14 = var19.bind(var1)(var14);
        var14 = var14.version;
        if(var14) { _fun0001_ip = 38; continue _fun0001 }
case 39:
        var14 = '';
case 38:
        var18['browser_version'] = var14;
case 34:
        var14 = 'linux';
        if(!(var14 !== var11)) { _fun0001_ip = 40; continue _fun0001 }
case 41:
        var14 = 'darwin';
        if(!(var14 !== var11)) { _fun0001_ip = 42; continue _fun0001 }
case 43:
        if(!(var7 === var11)) { _fun0001_ip = 22; continue _fun0001 }
case 44:
        var11 = _closure1_slot3;
        var14 = var10 == var17;
        var7 = undefined;
        if(var14) { _fun0001_ip = 45; continue _fun0001 }
case 46:
        var18 = var17.split;
        var14 = '.';
        var14 = var18.bind(var17)(var14);
        var7 = var14[var16];
case 45:
        var11['os_sdk_version'] = var7;
        _fun0001_ip = 22; continue _fun0001;
case 42:
        var11 = _closure1_slot3;
        var14 = var10 == var17;
        var7 = undefined;
        if(var14) { _fun0001_ip = 47; continue _fun0001 }
case 48:
        var16 = var17.split;
        var14 = '.';
        var14 = var16.bind(var17)(var14);
        var7 = var14[var15];
case 47:
        var11['os_sdk_version'] = var7;
        _fun0001_ip = 22; continue _fun0001;
case 40:
        var11 = var13.crashReporter;
        var7 = var11.getMetadata;
        var7 = var7.bind(var11)();
        var14 = _closure1_slot3;
        var11 = var7.wm;
        var14['window_manager'] = var11;
        var14 = _closure1_slot3;
        var11 = var7.distro;
        var14['distro'] = var11;
        var14 = _closure1_slot3;
        var11 = var7.runtime_environment;
        var14['runtime_environment'] = var11;
        var11 = _closure1_slot3;
        var7 = var7.display_server;
        var11['display_server'] = var7;
case 22:
        var14 = 'utm_source utm_medium utm_campaign utm_content utm_term';
        var11 = var14.split;
        var7 = ' ';
        var7 = var11.bind(var14)(var7);
        var _closure1_slot6 = var7;
        var7 = _closure1_slot3;
        if(!(var10 == var7)) { _fun0001_ip = 49; continue _fun0001 }
case 50: // try_start_0
        var7 = function getCachedSuperProperties() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var10 = 8;
                var1 = var1[var10];
                var8 = undefined;
                var1 = var2.bind(var8)(var1);
                var2 = var1.Storage;
                var1 = var2.get;
                var7 = 'deviceProperties';
                var4 = var1.bind(var2)(var7);
                var1 = null;
                if(!(var1 == var4)) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                var2 = _closure1_slot9;
                var2 = var2.bind(var8)();
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var10];
                var3 = var6.bind(var8)(var3);
                var6 = var3.Storage;
                var3 = var6.set;
                var3 = var3.bind(var6)(var7, var2);
                var4 = var2;
case 51:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var10];
                var2 = var3.bind(var8)(var2);
                var3 = var2.Storage;
                var2 = var3.get;
                var9 = 'referralProperties';
                var3 = var2.bind(var3)(var9);
                if(!(var1 == var3)) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                var2 = {};
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var10];
                var6 = var7.bind(var8)(var6);
                var7 = var6.Storage;
                var6 = var7.set;
                var6 = var6.bind(var7)(var9, var2);
                var3 = var2;
case 53:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var10 = 9;
                var2 = var2[var10];
                var2 = var6.bind(var8)(var2);
                var6 = var2.SessionStorage;
                var2 = var6.get;
                var2 = var2.bind(var6)(var9);
                if(!(var1 == var2)) { _fun0005_ip = 55; continue _fun0005 }
case 56:
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
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var10];
                var6 = var7.bind(var8)(var6);
                var7 = var6.SessionStorage;
                var6 = var7.set;
                var6 = var6.bind(var7)(var9, var1);
                var2 = var1;
case 55:
                var1 = {};
                var12 = var1;
                var11 = var4;
                var4 = copyDataProperties(var12, var11);
                var7 = {};
                var4 = global;
                var4 = var4.window;
                var4 = var4.navigator;
                var4 = var4.userAgent;
                if(var4) { _fun0005_ip = 57; continue _fun0005 }
case 58:
                var4 = '';
case 57:
                var7['browser_user_agent'] = var4;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 3;
                var4 = var9[var4];
                var4 = var6.bind(var8)(var4);
                var4 = var4.version;
                if(var4) { _fun0005_ip = 59; continue _fun0005 }
case 60:
                var4 = '';
case 59:
                var7['browser_version'] = var4;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 5;
                var4 = var9[var4];
                var6 = var6.bind(var8)(var4);
                var4 = {};
                var12 = var4;
                var11 = var7;
                var7 = copyDataProperties(var12, var11);
                var7 = var6.Platform;
                var9 = var7.OS;
                var7 = 'android';
                if(!(var7 !== var9)) { _fun0005_ip = 61; continue _fun0005 }
case 62:
                var6 = var6.NativeModules;
                var6 = var6.DCDDeviceManager;
                var6 = var6.systemVersion;
                _fun0005_ip = 63; continue _fun0005;
case 61:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 4;
                var5 = var9[var5];
                var5 = var7.bind(var8)(var5);
                var7 = var5.default;
                var5 = var7.getConstants;
                var5 = var5.bind(var7)();
                var6 = var5.systemVersion;
case 63:
                if(var6) { _fun0005_ip = 64; continue _fun0005 }
case 65:
                var6 = '';
case 64:
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
        var7 = var7.bind(var1)();
        _closure1_slot3 = var7;
case 66: // try_end0
        _fun0001_ip = 49; continue _fun0001;
case 67: // catch_target0
        CatchBlockStart(arg_register=6);
        var7 = {};
        _closure1_slot3 = var7;
case 49:
        var7 = {};
        var11 = var12.window;
        var11 = var11.GLOBAL_ENV;
        var11 = var11.RELEASE_CHANNEL;
        var15 = var12.parseInt;
        var14 = '5042';
        var11 = 10;
        var11 = var15.bind(var1)(var14, var11);
        var14 = var12.isNaN;
        var14 = var14.bind(var1)(var11);
        if(var14) { _fun0001_ip = 68; continue _fun0001 }
case 69:
        var7['client_build_number'] = var11;
case 68:
        var14 = var10 == var13;
        var11 = undefined;
        if(var14) { _fun0001_ip = 70; continue _fun0001 }
case 71:
        var14 = var13.remoteApp;
        var14 = var14.getBuildNumber;
        var14 = var10 == var14;
        var11 = undefined;
        if(var14) { _fun0001_ip = 70; continue _fun0001 }
case 72:
        var14 = var13.remoteApp;
        var13 = var14.getBuildNumber;
        var11 = var13.bind(var14)();
case 70:
        var12 = var12.isNaN;
        var12 = var12.bind(var1)(var11);
        if(var12) { _fun0001_ip = 73; continue _fun0001 }
case 74:
        var7['native_build_number'] = var11;
case 73:
        var7['client_event_source'] = var10;
        var10 = 1;
        var10 = var9[var10];
        var11 = var8.bind(var1)(var10);
        var10 = var11.usesClientMods;
        var10 = var10.bind(var11)();
        var7['has_client_mods'] = var10;
        var10 = 2;
        var10 = var9[var10];
        var10 = var8.bind(var1)(var10);
        var10 = var10.clientLaunchId;
        var7['client_launch_id'] = var10;
        var7 = var4.bind(var1)(var7);
        var7 = 11;
        var7 = var9[var7];
        var9 = var8.bind(var1)(var7);
        var8 = var9.fileFinishedImporting;
        var7 = '../discord_common/js/packages/analytics-utils/getSuperProperties.tsx';
        var7 = var8.bind(var9)(var7);
        var3['getOS'] = var6;
        var3['getDevice'] = var5;
        var5 = function getCampaignParams(arg1) {
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = {};
            var _closure2_slot1 = var1;
            var4 = _closure1_slot6;
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
                    if(var4) { _fun0006_ip = 75; continue _fun0006 }
case 76:
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
                    if(!(var5 !== var6)) { _fun0006_ip = 77; continue _fun0006 }
case 78:
                    var5 = 1;
                    var8 = var6[var5];
                    var10 = 'string';
                    var8 = typeof var8;
                    if(!(var10 !== var8)) { _fun0006_ip = 79; continue _fun0006 }
case 80:
                    var8 = var6[var5];
                    var8 = var8.length;
                    var4 = var9;
                    if(var8) { _fun0006_ip = 77; continue _fun0006 }
case 79:
                    var7 = var7.decodeURIComponent;
                    var6 = var6[var5];
                    var5 = undefined;
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.replace;
                    var6 = /\+/g;
                    var5 = ' ';
                    var4 = var7.bind(var8)(var6, var5);
case 77:
                    var2 = var4;
case 75:
                    var5 = var2.length;
                    var4 = 0;
                    if(!(var5 > var4)) { _fun0006_ip = 81; continue _fun0006 }
case 82:
                    var1 = _closure2_slot1;
                    var1[var3] = var2;
case 81:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3['getCampaignParams'] = var5;
        var3['extendSuperProperties'] = var4;
        var4 = function getSuperProperties() {
            var1 = _closure1_slot3;
            return var1;
        };
        var3['getSuperProperties'] = var4;
        var2 = function getSuperPropertiesBase64() {
            var1 = _closure1_slot4;
            return var1;
        };
        var3['getSuperPropertiesBase64'] = var2;
        return var1;
    }
})();