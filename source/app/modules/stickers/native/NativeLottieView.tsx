// app/modules/stickers/native/NativeLottieView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var6 = require;
        var5 = metroImportDefault;
        var3 = exports;
        var7 = dependencyMap;
        var1 = global;
        var9 = var1.Object;
        var8 = var9.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var9)(var3, var1, var2);
        var10 = 0;
        var2 = var7[var10];
        var1 = undefined;
        var2 = var6.bind(var1)(var2);
        var8 = var2.useEffect;
        var _closure1_slot0 = var8;
        var2 = var2.useRef;
        var _closure1_slot1 = var2;
        var2 = var7[var10];
        var2 = var5.bind(var1)(var2);
        var _closure1_slot2 = var2;
        var9 = 1;
        var2 = var7[var9];
        var2 = var6.bind(var1)(var2);
        var11 = var2.requireNativeComponent;
        var8 = 2;
        var2 = var7[var8];
        var2 = var6.bind(var1)(var2);
        var2 = var2.jsx;
        var _closure1_slot3 = var2;
        var2 = 3;
        var2 = var7[var2];
        var12 = var6.bind(var1)(var2);
        var2 = var12.isAndroid;
        var2 = var2.bind(var12)();
        if(var2) { _fun0001_ip = 166; continue _fun0001 }
 153:
        var2 = 'NativeLottieNode';
        var2 = var11.bind(var1)(var2);
        _fun0001_ip = 178; continue _fun0001;
 166:
        var11 = 4;
        var11 = var7[var11];
        var2 = var5.bind(var1)(var11);
 178:
        var _closure1_slot4 = var2;
        var2 = 5;
        var2 = var7[var2];
        var5 = var5.bind(var1)(var2);
        var2 = {};
        var11 = ['setup'];
        var2['supportedCommands'] = var11;
        var2 = var5.bind(var1)(var2);
        var _closure1_slot5 = var2;
        var2 = {};
        var2['LOOP'] = var10;
        var5 = 'LOOP';
        var2[var10] = var5;
        var2['STILL'] = var9;
        var5 = 'STILL';
        var2[var9] = var5;
        var2['ONCE'] = var8;
        var5 = 'ONCE';
        var2[var8] = var5;
        var _closure1_slot6 = var2;
        var5 = 6;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'modules/stickers/native/NativeLottieView.tsx';
        var5 = var6.bind(var7)(var5);
        var4 = function _default(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var13 = var1.asset;
                var12 = var1.url;
                var8 = var1.width;
                var7 = var1.height;
                var6 = var1.opacity;
                var4 = undefined;
                if(!(var6 === var4)) { _fun0002_ip = 40; continue _fun0002 }
 37:
                var6 = 1;
 40:
                var10 = var1.renderMode;
                if(!(var10 === var4)) { _fun0002_ip = 63; continue _fun0002 }
 50:
                var3 = _closure1_slot6;
                var10 = var3.LOOP;
 63:
                var _closure2_slot0 = var10;
                var11 = var1.animating;
                if(!(var11 === var4)) { _fun0002_ip = 79; continue _fun0002 }
 77:
                var11 = true;
 79:
                var3 = var1.accessibilityLabel;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var14 = _closure1_slot2;
                var9 = var14.useRef;
                var5 = null;
                var5 = var9.bind(var14)(var5);
                _closure2_slot1 = var5;
                var9 = {};
                var9['asset'] = var13;
                var9['url'] = var12;
                var9['width'] = var8;
                var9['height'] = var7;
                var9['animating'] = var11;
                var9['accessibilityLabel'] = var3;
                _closure2_slot2 = var9;
                var3 = _closure1_slot1;
                var3 = var3.bind(var4)(var9);
                _closure2_slot3 = var3;
                var9 = _closure1_slot0;
                var3 = function() {
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot2;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var3 = var9.bind(var4)(var3);
                var3 = new Array(1);
                var3[0] = var10;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = _closure2_slot3;
                        var2 = var2.current;
                        var8 = var2.asset;
                        var7 = var2.url;
                        var6 = var2.width;
                        var5 = var2.height;
                        var4 = var2.animating;
                        var3 = var2.accessibilityLabel;
                        var2 = {};
                        var2['asset'] = var8;
                        var2['url'] = var7;
                        var2['width'] = var6;
                        var2['height'] = var5;
                        var5 = _closure2_slot0;
                        var2['renderMode'] = var5;
                        var2['animating'] = var4;
                        var2['accessibilityLabel'] = var3;
                        var10 = var2.asset;
                        var9 = var2.url;
                        var8 = var2.width;
                        var7 = var2.height;
                        var6 = var2.renderMode;
                        var5 = var2.animating;
                        var4 = var2.accessibilityLabel;
                        var2 = '';
                        var2 = var2 !== var9;
                        if(!var2) { _fun0003_ip = 136; continue _fun0003 }
 130:
                        var3 = 0;
                        var2 = var3 !== var8;
 136:
                        if(!var2) { _fun0003_ip = 145; continue _fun0003 }
 139:
                        var3 = 0;
                        var2 = var3 !== var7;
 145:
                        if(!var2) { _fun0003_ip = 198; continue _fun0003 }
 148:
                        var3 = _closure1_slot5;
                        var2 = var3.setup;
                        var1 = _closure2_slot1;
                        var18 = var1.current;
                        var19 = var3;
                        var17 = var10;
                        var16 = var9;
                        var15 = var8;
                        var14 = var7;
                        var13 = var6;
                        var12 = var5;
                        var11 = var4;
                        var1 = var19[var2](var18, var17, var16, var15, var14, var13, var12, var11, var10);
 198:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var9.bind(var4)(var2, var3);
                var3 = _closure1_slot3;
                var2 = _closure1_slot4;
                var1 = {};
                var1['ref'] = var5;
                var5 = {};
                var5['width'] = var8;
                var5['height'] = var7;
                var5['opacity'] = var6;
                var1['style'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var4;
        var3['NativeLottieRenderMode'] = var2;
        return var1;
    }
})();