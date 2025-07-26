// app/components_native/common/FastImage.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = native2;
        var3 = native6;
        var6 = native7;
        var4 = function FastImageAndroid(arg1) {
            var1 = arg1;
            var4 = _closure1_slot2;
            var3 = _closure1_slot0;
            var2 = {};
            var7 = var2;
            var6 = var1;
            var5 = copyDataProperties(var7, var6);
            var5 = var1.placeholder;
            var1 = 'defaultSource';
            var2[var1] = var5;
            var5 = 0;
            var1 = 'fadeDuration';
            var2[var1] = var5;
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
        var8 = native4;
        var1 = undefined;
        var10 = var8.bind(var1)(var9);
        var8 = 1;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var11 = var8.Image;
        var _closure1_slot0 = var11;
        var12 = var8.StyleSheet;
        var8 = var8.NativeModules;
        var _closure1_slot1 = var8;
        var8 = 2;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var8 = var8.jsx;
        var _closure1_slot2 = var8;
        var9 = var12.create;
        var8 = {};
        var13 = {};
        var14 = 'hidden';
        var13['overflow'] = var14;
        var8['base'] = var13;
        var8 = var9.bind(var12)(var8);
        var _closure1_slot3 = var8;
        var8 = 3;
        var9 = var6[var8];
        var8 = native3;
        var9 = var8.bind(var1)(var9);
        var8 = {'componentName': 'DCDFastImageView', 'componentMissingFallbackInstance': null, 'warnWhenMissing': false};
        var8['componentMissingFallbackInstance'] = var11;
        var8 = var9.bind(var1)(var8);
        var _closure1_slot4 = var8;
        var9 = var10.memo;
        var8 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = arg1;
                var1 = var5.source;
                var11 = var5.style;
                var3 = var5.placeholder;
                var2 = var5.enableAnimation;
                var4 = undefined;
                var9 = var4 === var2;
                if(var9) { _fun0002_ip = 37; continue _fun0002 }
 34:
                var9 = var2;
 37:
                var2 = var5.fade;
                var8 = var4 === var2;
                if(var8) { _fun0002_ip = 53; continue _fun0002 }
 50:
                var8 = var2;
 53:
                var2 = var5.usesSmallCache;
                var7 = var4 !== var2;
                if(!var7) { _fun0002_ip = 69; continue _fun0002 }
 66:
                var7 = var2;
 69:
                var2 = 'number';
                var1 = typeof var1;
                if(!(var2 !== var1)) { _fun0002_ip = 225; continue _fun0002 }
 83:
                var10 = null;
                var1 = var10 != var3;
                var6 = null;
                if(!var1) { _fun0002_ip = 112; continue _fun0002 }
 94:
                var2 = _closure1_slot0;
                var1 = var2.resolveAssetSource;
                var6 = var1.bind(var2)(var3);
 112:
                var3 = _closure1_slot2;
                var2 = _closure1_slot4;
                var1 = {};
                var15 = var1;
                var14 = var5;
                var13 = copyDataProperties(var15, var14);
                var12 = _closure1_slot3;
                var13 = var12.base;
                var12 = new Array(2);
                var12[0] = var13;
                var12[1] = var11;
                var11 = 'style';
                var1[var11] = var12;
                var11 = var10 == var6;
                var10 = undefined;
                if(var11) { _fun0002_ip = 181; continue _fun0002 }
 175:
                var10 = var6.uri;
 181:
                var6 = 'placeholder';
                var1[var6] = var10;
                var6 = 'enableAnimation';
                var1[var6] = var9;
                var6 = 'fade';
                var1[var6] = var8;
                var6 = 'usesSmallCache';
                var1[var6] = var7;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
 225:
                var3 = _closure1_slot2;
                var2 = _closure1_slot0;
                var1 = {};
                var15 = var1;
                var14 = var5;
                var5 = copyDataProperties(var15, var14);
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
                var1 = _closure1_slot1;
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
            var3 = _closure1_slot0;
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
        var7 = 4;
        var7 = var6[var7];
        var8 = var5.bind(var1)(var7);
        var7 = var8.isAndroid;
        var7 = var7.bind(var8)();
        if(!var7) { _fun0001_ip = 281; continue _fun0001 }
 278:
        var2 = var4;
 281:
        var4 = 5;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'components_native/common/FastImage.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();