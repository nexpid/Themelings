// app/components_native/common/FastImage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var3 = exports;
        var6 = dependencyMap;
        var1 = metroImportDefault;
        var _closure1_slot0 = var1;
        var _closure1_slot1 = var6;
        var4 = function FastImageAndroid(arg1) {
            var1 = arg1;
            var4 = _closure1_slot4;
            var3 = _closure1_slot2;
            var2 = {};
            var7 = var2;
            var6 = var1;
            var5 = copyDataProperties(var7, var6);
            var5 = var1.placeholder;
            var1 = 'defaultSource';
            var2[0] = var5;
            var5 = 0;
            var1 = 'fadeDuration';
            var2[0] = var5;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var2 = global;
        var10 = var2.Object;
        var9 = var10.defineProperty;
        var8 = {};
        var1 = true;
        var8['value'] = var1;
        var1 = '__esModule';
        var1 = var9.bind(var10)(var3, var1, var8);
        var1 = 0;
        var9 = var6[var1];
        var8 = metroImportAll;
        var1 = undefined;
        var10 = var8.bind(var1)(var9);
        var8 = 1;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var9 = var8.Image;
        var _closure1_slot2 = var9;
        var8 = var8.NativeModules;
        var _closure1_slot3 = var8;
        var8 = 2;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var8 = var8.jsx;
        var _closure1_slot4 = var8;
        var8 = 3;
        var8 = var6[var8];
        var11 = var5.bind(var1)(var8);
        var9 = var11.createStyles;
        var8 = {};
        var12 = {};
        var13 = 'hidden';
        var12['overflow'] = var13;
        var8['base'] = var12;
        var8 = var9.bind(var11)(var8);
        var _closure1_slot5 = var8;
        var9 = var10.memo;
        var8 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = arg1;
                var2 = _closure1_slot5;
                var4 = undefined;
                var14 = var2.bind(var4)();
                var2 = var5.source;
                var13 = var5.style;
                var6 = var5.placeholder;
                var3 = var5.enableAnimation;
                var11 = var4 === var3;
                if(var11) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var11 = var3;
case 2:
                var10 = var5.paused;
                var3 = var5.fade;
                var9 = var4 === var3;
                if(var9) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var9 = var3;
case 4:
                var3 = var5.usesSmallCache;
                var8 = var4 !== var3;
                if(!var8) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var8 = var3;
case 6:
                var3 = 'number';
                var2 = typeof var2;
                if(!(var3 !== var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var12 = null;
                var2 = var12 != var6;
                var7 = null;
                if(!var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var3 = _closure1_slot2;
                var2 = var3.resolveAssetSource;
                var7 = var2.bind(var3)(var6);
case 10:
                var6 = _closure1_slot4;
                var3 = _closure1_slot0;
                var15 = _closure1_slot1;
                var2 = 4;
                var2 = var15[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var17 = var2;
                var16 = var5;
                var15 = copyDataProperties(var17, var16);
                var15 = var14.base;
                var14 = new Array(2);
                var14[0] = var15;
                var14[1] = var13;
                var13 = 'style';
                var2[12] = var14;
                var13 = var12 == var7;
                var12 = undefined;
                if(var13) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var12 = var7.uri;
case 12:
                var7 = 'placeholder';
                var2[6] = var12;
                var7 = 'enableAnimation';
                var2[6] = var11;
                var7 = 'paused';
                var2[6] = var10;
                var7 = 'fade';
                var2[6] = var9;
                var7 = 'usesSmallCache';
                var2[6] = var8;
                var2 = var6.bind(var4)(var3, var2);
                return var2;
case 8:
                var3 = _closure1_slot4;
                var2 = _closure1_slot2;
                var1 = {};
                var17 = var1;
                var16 = var5;
                var5 = copyDataProperties(var17, var16);
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var10 = var9.bind(var10)(var8);
        var9 = var2.Object;
        var8 = var9.assign;
        var2 = {};
        var11 = function preload(arg1) {
            var1 = arg1;
            var _closure2_slot0 = var1;
            var5 = global;
            var3 = var5.Promise;
            var2 = var3.race;
            var7 = var5.Promise;
            var1 = var7.prototype;
            var6 = Object.create(var1, {constructor: {value: var7}});
            var8 = function(arg1) {
                var1 = _closure1_slot3;
                var4 = var1.DCDFastImageViewManager;
                var3 = var4.preload;
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var9 = var6;
            var1 = new var9[var7](var8, var7);
            var6 = var1 instanceof Object ? var1 : var6;
            var1 = new Array(2);
            var1[0] = var6;
            var6 = var5.Promise;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var8 = function(arg1) {
                var1 = global;
                var4 = var1.setTimeout;
                var3 = undefined;
                var2 = arg1;
                var1 = 2000;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var9 = var5;
            var4 = new var9[var6](var8, var7);
            var4 = var4 instanceof Object ? var4 : var5;
            var1[1] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2['preload'] = var11;
        var2 = var8.bind(var9)(var10, var2);
        var7 = function(arg1) {
            var3 = _closure1_slot2;
            var2 = var3.prefetch;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var2 = var3.catch;
            var1 = function() {
                var1 = undefined;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var4['preload'] = var7;
        var7 = 5;
        var7 = var6[var7];
        var8 = var5.bind(var1)(var7);
        var7 = var8.isAndroid;
        var7 = var7.bind(var8)();
        if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
        var2 = var4;
case 14:
        var4 = 6;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'components_native/common/FastImage.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();