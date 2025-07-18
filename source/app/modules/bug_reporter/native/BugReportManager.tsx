// app/modules/bug_reporter/native/BugReportManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function showNotification() {
        var3 = function() {
            var4 = _closure1_slot8;
            var3 = undefined;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 242; continue _fun0002 }
 10:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 9;
                        var2 = var5[var2];
                        var5 = undefined;
                        var4 = var4.bind(var5)(var2);
                        var2 = var4.isIOS;
                        var2 = var2.bind(var4)();
                        if(var2) { _fun0002_ip = 102; continue _fun0002 }
 48:
                        var2 = _closure1_slot9;
                        var6 = var2.CameraRollUtils;
                        var4 = var6.getPhotos;
                        var2 = {'first': 1, 'assetType': 'photos'};
                        var2 = var4.bind(var6)(var2);
                        SaveGenerator(address=87);
 85:
                        return var2;
 87:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        var6 = var4;
                        var4 = var2;
                        if(!var6) { _fun0002_ip = 188; continue _fun0002 }
 99:
                        return var2;
 102:
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var7 = 10;
                        var2 = var2[var7];
                        var6 = var6.bind(var5)(var2);
                        var2 = null;
                        var6 = var2 == var6;
                        var2 = undefined;
                        if(var6) { _fun0002_ip = 175; continue _fun0002 }
 133:
                        var6 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var7];
                        var7 = var6.bind(var5)(var3);
                        var6 = var7.getPhotos;
                        var3 = {'first': 1, 'groupTypes': 'Recents', 'assetType': 'Photos'};
                        var2 = var6.bind(var7)(var3);
 175:
                        SaveGenerator(address=179);
 177:
                        return var2;
 179:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        var4 = var2;
                        if(var3) { _fun0002_ip = 239; continue _fun0002 }
 188:
                        var3 = null;
                        if(!(var3 == var4)) { _fun0002_ip = 196; continue _fun0002 }
 194:
                        var4 = {};
 196:
                        var4 = var4.edges;
                        if(!(var3 != var4)) { _fun0002_ip = 217; continue _fun0002 }
 206:
                        var6 = var4.length;
                        var3 = 0;
                        if(!(!(var6 > var3))) { _fun0002_ip = 220; continue _fun0002 }
 217:
                        return var5;
 220:
                        var3 = var4[var3];
                        var3 = var3.node;
                        var3 = var3.image;
                        return var3;
 239:
                        return var2;
 242:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var1 = undefined;
        var3 = var3.bind(var1)();
        var _closure2_slot0 = var3;
        var3 = global;
        var4 = var3.setTimeout;
        var3 = _closure1_slot8;
        var2 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 161; continue _fun0003 }
 10:
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=27);
 25:
                    return var2;
 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 158; continue _fun0003 }
 36:
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var4 = 11;
                    var4 = var9[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.enqueueNotification;
                    var4 = {'type': 'BUG_REPORTER', 'duration': 5000};
                    var8 = _closure1_slot0;
                    var7 = 12;
                    var7 = var9[var7];
                    var8 = var8.bind(var3)(var7);
                    var7 = var8.v4;
                    var7 = var7.bind(var8)();
                    var4['key'] = var7;
                    var4['image'] = var2;
                    var7 = null;
                    var8 = var7 == var2;
                    var7 = undefined;
                    if(var8) { _fun0003_ip = 131; continue _fun0003 }
 125:
                    var7 = var2.uri;
 131:
                    var4['imageUri'] = var7;
                    var7 = function onDismiss() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.clearNotification;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var4['onDismiss'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
 158:
                    return var2;
 161:
                    return var1;
                }
            };
            return var1;
        };
        var3 = var3.bind(var1)(var2);
        var2 = 1200;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var4 = var8.NativeModules;
    var _closure1_slot9 = var4;
    var9 = var8.NativeEventEmitter;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.NativePermissionStatus;
    var _closure1_slot11 = var8;
    var12 = var4.ScreenshotHelper;
    var8 = var9.prototype;
    var8 = Object.create(var8, {constructor: {value: var9}});
    var13 = var8;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot13 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function BugReportManager() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot1;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 69; continue _fun0004 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 105; continue _fun0004;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot1 = var4;
        var2 = _closure1_slot7;
        var3 = undefined;
        var1 = arg1;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            var2 = this;
            var1 = var2.initBugReporter;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var8 = '_terminate';
        var5['key'] = var8;
        var8 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = _closure1_slot12;
                var1 = null;
                if(!(var1 != var3)) { _fun0005_ip = 23; continue _fun0005 }
 13:
                var1 = var3.remove;
                var1 = var1.bind(var3)();
 23:
                var1 = undefined;
                var _closure1_slot12 = var1;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[1] = var5;
        var5 = {};
        var8 = 'initBugReporter';
        var5['key'] = var8;
        var8 = _closure1_slot8;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 194; continue _fun0006 }
 10:
                    var2 = _closure1_slot9;
                    var3 = var2.NativePermissionManager;
                    var2 = var3.hasPhotoAuthorization;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=39);
 37:
                    return var2;
 39:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 191; continue _fun0006 }
 48:
                    var3 = _closure1_slot11;
                    var3 = var3.AUTHORIZED;
                    var6 = var2 === var3;
                    var3 = _closure1_slot10;
                    var7 = var3.isBugReporterEnabled;
                    var8 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 13;
                    var4 = var4[var3];
                    var3 = undefined;
                    var10 = var8.bind(var3)(var4);
                    var9 = var10.getCurrentConfig;
                    var8 = {};
                    var4 = 'native-BugReportManager';
                    var8['location'] = var4;
                    var4 = {};
                    var11 = false;
                    var4['autoTrackExposure'] = var11;
                    var4 = var9.bind(var10)(var8, var4);
                    var4 = var4.hasBugReporterAccess;
                    if(!var4) { _fun0006_ip = 139; continue _fun0006 }
 136:
                    var4 = var7;
 139:
                    if(!var4) { _fun0006_ip = 145; continue _fun0006 }
 142:
                    var4 = var6;
 145:
                    if(!var4) { _fun0006_ip = 188; continue _fun0006 }
 148:
                    var6 = _closure1_slot12;
                    var4 = null;
                    if(!(var4 == var6)) { _fun0006_ip = 188; continue _fun0006 }
 158:
                    var8 = _closure1_slot13;
                    var7 = var8.addListener;
                    var6 = _closure1_slot15;
                    var4 = 'screenshotTaken';
                    var4 = var7.bind(var8)(var4, var6);
                    _closure1_slot12 = var4;
 188:
                    return var3;
 191:
                    return var2;
 194:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var6 = function initBugReporter() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/bug_reporter/native/BugReportManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();