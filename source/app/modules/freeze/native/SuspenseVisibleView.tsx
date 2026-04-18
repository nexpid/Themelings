// app/modules/freeze/native/SuspenseVisibleView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var7 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var7;
        var _closure1_slot2 = var6;
        var1 = function NativedSuspenseVisibleView(arg1) {
            var5 = arg1;
            var9 = var5.forwardedRef;
            var7 = null;
            var4 = Object.create(var7);
            var3 = 0;
            var4['forwardedRef'] = var3;
            var13 = {};
            var12 = var5;
            var11 = var4;
            var5 = copyDataProperties(var13, var12, var11);
            var6 = _closure1_slot4;
            var4 = var6.useState;
            var8 = var4.bind(var6)(var7);
            var7 = _closure1_slot3;
            var4 = undefined;
            var6 = 2;
            var6 = var7.bind(var4)(var8, var6);
            var10 = var6[var3];
            var _closure2_slot0 = var10;
            var3 = 1;
            var3 = var6[var3];
            var _closure2_slot1 = var3;
            var8 = _closure1_slot4;
            var7 = var8.useCallback;
            var6 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = arg1;
                    var6 = null;
                    var4 = var6 == var3;
                    var1 = undefined;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = var3.viewConfig;
                    var5 = var6 == var4;
                    var2 = undefined;
                    if(var5) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var4 = var4.validAttributes;
                    var5 = var6 == var4;
                    var2 = undefined;
                    if(var5) { _fun0002_ip = 2; continue _fun0002 }
case 5:
                    var2 = var4.style;
case 2:
                    if(!(var6 == var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = var6 == var3;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = var3._viewConfig;
                    var5 = var6 == var4;
                    var2 = undefined;
                    if(var5) { _fun0002_ip = 8; continue _fun0002 }
case 10:
                    var4 = var4.validAttributes;
                    var5 = var6 == var4;
                    var2 = undefined;
                    if(var5) { _fun0002_ip = 8; continue _fun0002 }
case 11:
                    var2 = var4.style;
case 8:
                    if(!(var6 == var2)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var4 = var6 == var3;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var4 = var3.__viewConfig;
                    var5 = var6 == var4;
                    var2 = undefined;
                    if(var5) { _fun0002_ip = 14; continue _fun0002 }
case 16:
                    var4 = var4.validAttributes;
                    var5 = var6 == var4;
                    var2 = undefined;
                    if(var5) { _fun0002_ip = 14; continue _fun0002 }
case 17:
                    var2 = var4.style;
case 14:
                    if(!(var6 != var2)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var2 = var3.__viewConfig;
                    var4 = var2.validAttributes;
                    var2 = {};
                    var5 = var3.__viewConfig;
                    var5 = var5.validAttributes;
                    var7 = var5.style;
                    var8 = var2;
                    var5 = copyDataProperties(var8, var7);
                    var5 = 'display';
                    var2[4] = var6;
                    var4['style'] = var2;
                    _fun0002_ip = 18; continue _fun0002;
case 12:
                    var2 = var3._viewConfig;
                    var4 = var2.validAttributes;
                    var2 = {};
                    var5 = var3._viewConfig;
                    var5 = var5.validAttributes;
                    var7 = var5.style;
                    var8 = var2;
                    var5 = copyDataProperties(var8, var7);
                    var5 = 'display';
                    var2[4] = var6;
                    var4['style'] = var2;
                    _fun0002_ip = 18; continue _fun0002;
case 6:
                    var2 = var3.viewConfig;
                    var4 = var2.validAttributes;
                    var2 = {};
                    var5 = var3.viewConfig;
                    var5 = var5.validAttributes;
                    var7 = var5.style;
                    var8 = var2;
                    var5 = copyDataProperties(var8, var7);
                    var5 = 'display';
                    var2[4] = var6;
                    var4['style'] = var2;
case 18:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var3 = new Array(0);
            var6 = var7.bind(var8)(var6, var3);
            var8 = _closure1_slot4;
            var7 = var8.useImperativeHandle;
            var3 = new Array(1);
            var3[0] = var10;
            var2 = function() {
                var1 = _closure2_slot0;
                return var1;
            };
            var2 = var7.bind(var8)(var9, var2, var3);
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 6;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['ref'] = var6;
            var13 = var1;
            var12 = var5;
            var5 = copyDataProperties(var13, var12);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot8 = var1;
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
        var7 = var6[var4];
        var4 = metroImportAll;
        var7 = var4.bind(var1)(var7);
        var _closure1_slot4 = var7;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.jsx;
        var _closure1_slot6 = var4;
        var4 = 4;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var4 = var8.isIOS;
        var4 = var4.bind(var8)();
        if(!var4) { _fun0001_ip = 20; continue _fun0001 }
case 21:
        var8 = 5;
        var8 = var6[var8];
        var9 = var5.bind(var1)(var8);
        var8 = var9.isFabric;
        var8 = var8.bind(var9)();
        var4 = !var8;
case 20:
        var _closure1_slot7 = var4;
        var4 = var7.forwardRef;
        var2 = function(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var6 = arg2;
                var1 = _closure1_slot7;
                if(var1) { _fun0003_ip = 22; continue _fun0003 }
case 3:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var8 = undefined;
                var4 = var4.bind(var8)(var1);
                var1 = var4.isAndroid;
                var1 = var1.bind(var4)();
                var7 = _closure1_slot6;
                if(var1) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                var4 = _closure1_slot8;
                var1 = {};
                var1['forwardedRef'] = var6;
                var11 = var1;
                var10 = var2;
                var5 = copyDataProperties(var11, var10);
                var1 = var7.bind(var8)(var4, var1);
                _fun0003_ip = 25; continue _fun0003;
case 23:
                var5 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 6;
                var4 = var9[var4];
                var5 = var5.bind(var8)(var4);
                var4 = {};
                var4['ref'] = var6;
                var11 = var4;
                var10 = var2;
                var9 = copyDataProperties(var11, var10);
                var1 = var7.bind(var8)(var5, var4);
case 25:
                _fun0003_ip = 26; continue _fun0003;
case 22:
                var5 = _closure1_slot6;
                var4 = _closure1_slot5;
                var3 = {};
                var3['ref'] = var6;
                var11 = var3;
                var10 = var2;
                var2 = copyDataProperties(var11, var10);
                var2 = undefined;
                var1 = var5.bind(var2)(var4, var3);
case 26:
                return var1;
            }
        };
        var2 = var4.bind(var7)(var2);
        var4 = 7;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/freeze/native/SuspenseVisibleView.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();