// app/modules/mobile_native_updater/MobileNativeUpdateUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function _checkForNewerBuild() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 462; continue _fun0001 }
 10:
                    var3 = _closure1_slot3;
                    var2 = null;
                    if(!(var2 !== var3)) { _fun0001_ip = 459; continue _fun0001 }
 26:
                    var5 = _closure1_slot4;
                    var4 = var5.info;
                    var3 = _closure1_slot3;
                    var10 = var3.url;
                    var6 = global;
                    var3 = var6.HermesInternal;
                    var8 = var3.concat;
                    var7 = 'Checking ';
                    var3 = ' for updates';
                    var3 = var8.bind(var7)(var10, var3);
                    var3 = var4.bind(var5)(var3);
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 3;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var5 = var3.HTTP;
                    var4 = var5.get;
                    var3 = {};
                    var7 = _closure1_slot3;
                    var8 = var7.url;
                    var7 = var8.toString;
                    var7 = var7.bind(var8)();
                    var3['url'] = var7;
                    var7 = {};
                    var8 = 'application/json';
                    var7['Accept'] = var8;
                    var3['headers'] = var7;
                    var7 = false;
                    var3['rejectWithError'] = var7;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=168);
 166:
                    return var3;
 168:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 456; continue _fun0001 }
 177:
                    var4 = var3.ok;
                    if(var4) { _fun0001_ip = 188; continue _fun0001 }
 186:
                    throw var3;
 188:
                    var5 = {};
                    var4 = var3.body;
                    var4 = var4.build;
                    var5['build'] = var4;
                    var4 = var3.body;
                    var4 = var4.version;
                    var5['version'] = var4;
                    var8 = var6.Date;
                    var4 = var3.body;
                    var16 = var4.build_timestamp;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {constructor: {value: var8}});
                    var17 = var7;
                    var4 = new var17[var8](var16, var15);
                    var4 = var4 instanceof Object ? var4 : var7;
                    var5['buildTimestamp'] = var4;
                    var4 = var3.body;
                    var4 = var4.urls;
                    var5['urls'] = var4;
                    var7 = var5.build;
                    var4 = _closure1_slot3;
                    var4 = var4.currentBuild;
                    if(!(var7 > var4)) { _fun0001_ip = 324; continue _fun0001 }
 304:
                    var7 = var5.version;
                    var4 = _closure1_slot3;
                    var4 = var4.currentVersion;
                    if(!(!(var7 >= var4))) { _fun0001_ip = 389; continue _fun0001 }
 324:
                    var8 = _closure1_slot4;
                    var7 = var8.info;
                    var13 = var5.build;
                    var4 = _closure1_slot3;
                    var12 = var4.currentBuild;
                    var4 = var6.HermesInternal;
                    var11 = var4.concat;
                    var10 = 'Update build ';
                    var4 = ' is older than ';
                    var4 = var11.bind(var10)(var13, var4, var12);
                    var4 = var7.bind(var8)(var4);
                    var4 = null;
                    _fun0001_ip = 453; continue _fun0001;
 389:
                    var8 = _closure1_slot4;
                    var7 = var8.info;
                    var12 = var5.build;
                    var9 = _closure1_slot3;
                    var11 = var9.currentBuild;
                    var6 = var6.HermesInternal;
                    var10 = var6.concat;
                    var9 = 'Update build ';
                    var6 = ' is newer than ';
                    var6 = var10.bind(var9)(var12, var6, var11);
                    var6 = var7.bind(var8)(var6);
                    var4 = var5;
 453:
                    return var4;
 456:
                    return var3;
 459:
                    return var2;
 462:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
    var2 = function openBuildInstallerUrl(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var1 = undefined;
            var5 = undefined;
            var4 = undefined;
 9: // try_start_0
            var2 = global;
            var7 = var2.URL;
            var10 = var3;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var11 = var6;
            var3 = new var11[var7](var10, var9);
            var3 = var3 instanceof Object ? var3 : var6;
            var5 = var3;
            var7 = var3.origin;
            var8 = _closure1_slot3;
            var6 = null;
            var8 = var6 == var8;
            var6 = undefined;
            if(var8) { _fun0002_ip = 82; continue _fun0002 }
 67:
            var8 = _closure1_slot3;
            var8 = var8.url;
            var6 = var8.origin;
 82:
            if(!(var7 === var6)) { _fun0002_ip = 222; continue _fun0002 }
 89:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var6 = 4;
            var6 = var8[var6];
            var6 = var7.bind(var1)(var6);
            var6 = var6.default;
            var4 = var6.openURLExternally;
            var6 = 5;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.isIOS;
            var6 = var6.bind(var7)();
            if(var6) { _fun0002_ip = 167; continue _fun0002 }
 145:
            var7 = var4;
            var8 = var5;
            var6 = var8.toString;
            var6 = var6.bind(var8)();
            var6 = var7.bind(var1)(var6);
            _fun0002_ip = 220; continue _fun0002;
 167:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var6 = 6;
            var6 = var8[var6];
            var6 = var7.bind(var1)(var6);
            var6 = var6.WebBrowserType;
            var7 = var6.SAFARI;
            var6 = var4;
            var8 = var5;
            var4 = var8.toString;
            var4 = var4.bind(var8)();
            var4 = var6.bind(var1)(var4, var7);
 220: // try_end0
            _fun0002_ip = 267; continue _fun0002;
 222: // try_start_1
            var4 = _closure1_slot4;
            var3 = var4.error;
            var6 = var5;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var2 = 'Attempted to follow invalid install URL ';
            var2 = var5.bind(var2)(var6);
            var2 = var3.bind(var4)(var2);
 261: // try_end1
            var2 = undefined;
            return var2;
 265: // catch_target0 // catch_target1
            CatchBlockStart(arg_register=1);
 267:
            return var1;
        }
    };
    var _closure1_slot6 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.UPDATE_CONFIG;
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var9 = var8.bind(var1)(var5);
    var5 = var9.prototype;
    var8 = Object.create(var5, {constructor: {value: var9}});
    var13 = 'MobileNativeUpdateUtils';
    var14 = var8;
    var5 = new var14[var9](var13, var12);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot4 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/mobile_native_updater/MobileNativeUpdateUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function checkForNewerBuild() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['checkForNewerBuild'] = var5;
    var4 = function openBuildInstaller(arg1) {
        var3 = _closure1_slot6;
        var1 = arg1;
        var1 = var1.urls;
        var2 = var1.install;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['openBuildInstaller'] = var4;
    var3['openBuildInstallerUrl'] = var2;
    return var1;
})();