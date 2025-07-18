// app/design/components/Icon/native/ClipView.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var7 = native2;
        var6 = native3;
        var3 = native6;
        var8 = native7;
        var1 = global;
        var5 = var1.Object;
        var4 = var5.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var4.bind(var5)(var3, var1, var2);
        var1 = 0;
        var2 = var8[var1];
        var1 = undefined;
        var2 = var7.bind(var1)(var2);
        var5 = var2.requireNativeComponent;
        var2 = {};
        var4 = 'circle';
        var2['Circle'] = var4;
        var4 = 'rounded-rect';
        var2['RoundedRect'] = var4;
        var4 = 1;
        var4 = var8[var4];
        var9 = var7.bind(var1)(var4);
        var4 = var9.isAndroid;
        var4 = var4.bind(var9)();
        if(var4) { _fun0001_ip = 124; continue _fun0001 }
 111:
        var4 = 'ClipView';
        var5 = var5.bind(var1)(var4);
        _fun0001_ip = 136; continue _fun0001;
 124:
        var4 = 2;
        var4 = var8[var4];
        var5 = var6.bind(var1)(var4);
 136:
        var4 = 3;
        var4 = var8[var4];
        var6 = var6.bind(var1)(var4);
        var4 = var6.createAnimatedComponent;
        var4 = var4.bind(var6)(var5);
        var6 = 4;
        var6 = var8[var6];
        var8 = var7.bind(var1)(var6);
        var7 = var8.fileFinishedImporting;
        var6 = 'design/components/Icon/native/ClipView.tsx';
        var6 = var7.bind(var8)(var6);
        var3['default'] = var5;
        var3['ClipViewAnimated'] = var4;
        var3['CutoutShape'] = var2;
        return var1;
    }
})();