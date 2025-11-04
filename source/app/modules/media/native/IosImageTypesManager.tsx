// app/modules/media/native/IosImageTypesManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var7.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var12 = 'IosImageTypesManager';
    var13 = var8;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot7 = var4;
    var4 = null;
    var _closure1_slot8 = var4;
    var _closure1_slot9 = var4;
    var _closure1_slot10 = var4;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function IosImageTypesManager() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot1;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot4;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot3;
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot4;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot2;
        var5 = {};
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            var2 = this;
            var1 = var2.initializeSupportedImageTypes;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(11);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'initializeSupportedImageTypes';
        var5['key'] = var7;
        var7 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = undefined;
                var5 = undefined;
                var4 = undefined;
                var2 = undefined;
                var13 = undefined;
                var14 = undefined;
                var15 = undefined;
                var16 = undefined;
                var6 = _closure1_slot8;
                var12 = null;
                if(!(var12 === var6)) { _fun0003_ip = 9; continue _fun0003 }
case 10: // try_start_0
                var6 = _closure1_slot6;
                var7 = var6.MediaManager;
                var6 = var7.getSupportedImageTypes;
                var8 = var6.bind(var7)();
                _closure1_slot8 = var8;
                var6 = global;
                var7 = var6.Set;
                var9 = var7.prototype;
                var9 = Object.create(var9, {constructor: {value: var7}});
                var20 = var9;
                var7 = new var20[var7](var19);
                var5 = var7 instanceof Object ? var7 : var9;
                var7 = var6.Set;
                var9 = var7.prototype;
                var9 = Object.create(var9, {constructor: {value: var7}});
                var20 = var9;
                var7 = new var20[var7](var19);
                var4 = var7 instanceof Object ? var7 : var9;
                var7 = var6.Set;
                var9 = var7.prototype;
                var9 = Object.create(var9, {constructor: {value: var7}});
                var20 = var9;
                var7 = new var20[var7](var19);
                var2 = var7 instanceof Object ? var7 : var9;
                var11 = 0;
                var13 = 0;
                var7 = var6.Object;
                var6 = var7.entries;
                var6 = var6.bind(var7)(var8);
                var14 = var6;
                var6 = var6.length;
                var10 = '';
                var9 = 2;
                var8 = 1;
                if(!(var11 < var6)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var7 = var14;
                var6 = var13;
                var7 = var7[var6];
                var6 = _closure1_slot0;
                var6 = var6.bind(var1)(var7, var9);
                var7 = var6[var11];
                var6 = var6[var8];
                var7 = var6.extension;
                var15 = var7;
                var16 = var6.mimeType;
                var7 = var12 != var7;
                var6 = var7;
                if(!var7) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var7 = var15;
                var6 = var10 !== var7;
case 13:
                if(!var6) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var17 = var5;
                var7 = var17.add;
                var6 = var15;
                var6 = var7.bind(var17)(var6);
case 15:
                var7 = var16;
                var7 = var12 != var7;
                var6 = var7;
                if(!var7) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var7 = var16;
                var6 = var10 !== var7;
case 17:
                if(!var6) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var17 = var4;
                var7 = var17.add;
                var6 = var16;
                var6 = var7.bind(var17)(var6);
case 19:
                var6 = var13;
                var7 = var6 + 1;
                var13 = var7;
                var6 = var14;
                var6 = var6.length;
                if(var7 < var6) { _fun0003_ip = 12; continue _fun0003 }
case 11:
                var7 = var5.add;
                var6 = 'jpg';
                var6 = var7.bind(var5)(var6);
                var7 = var2.add;
                var6 = 'gif';
                var6 = var7.bind(var2)(var6);
                var7 = var2.add;
                var6 = 'webp';
                var6 = var7.bind(var2)(var6);
                _closure1_slot9 = var5;
                _closure1_slot10 = var4;
                _closure1_slot11 = var2;
case 21: // try_end0
                _fun0003_ip = 9; continue _fun0003;
case 22: // catch_target0
                CatchBlockStart(arg_register=5);
                var5 = _closure1_slot7;
                var4 = var5.warn;
                var2 = 'Failed to get iOS supported image types:';
                var2 = var4.bind(var5)(var2, var6);
                var2 = {};
                _closure1_slot8 = var2;
                var2 = global;
                var4 = var2.Set;
                var5 = var4.prototype;
                var5 = Object.create(var5, {constructor: {value: var4}});
                var20 = var5;
                var4 = new var20[var4](var19);
                var4 = var4 instanceof Object ? var4 : var5;
                _closure1_slot9 = var4;
                var4 = var2.Set;
                var5 = var4.prototype;
                var5 = Object.create(var5, {constructor: {value: var4}});
                var20 = var5;
                var4 = new var20[var4](var19);
                var4 = var4 instanceof Object ? var4 : var5;
                _closure1_slot10 = var4;
                var2 = var2.Set;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var20 = var4;
                var2 = new var20[var2](var19);
                var2 = var2 instanceof Object ? var2 : var4;
                _closure1_slot11 = var2;
case 9:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getSupportedImageTypes';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isImageTypeSupported';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure1_slot8;
                var1 = null;
                var1 = var1 !== var3;
                if(!var1) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                var3 = _closure1_slot8;
                var2 = arg1;
                var1 = var2 in var3;
case 23:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getSupportedExtensions';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getSupportedMimeTypes';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getAnimatedExtensions';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'isExtensionSupported';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure1_slot9;
                var1 = null;
                var1 = var1 !== var3;
                if(!var1) { _fun0005_ip = 25; continue _fun0005 }
case 24:
                var4 = _closure1_slot9;
                var3 = var4.has;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
case 25:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'isMimeTypeSupported';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = _closure1_slot10;
                var1 = null;
                var1 = var1 !== var3;
                if(!var1) { _fun0006_ip = 25; continue _fun0006 }
case 24:
                var4 = _closure1_slot10;
                var3 = var4.has;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
case 25:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'isExtensionAnimated';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = _closure1_slot11;
                var1 = null;
                var1 = var1 !== var3;
                if(!var1) { _fun0007_ip = 25; continue _fun0007 }
case 24:
                var4 = _closure1_slot11;
                var3 = var4.has;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
case 25:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[10] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media/native/IosImageTypesManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();