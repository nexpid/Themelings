// app/modules/contact_sync/native/components/ContactSyncError.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'center';
    var9['justifyContent'] = var10;
    var4['container'] = var9;
    var9 = {'paddingHorizontal': 16, 'textAlign': 'center'};
    var4['error'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = {};
    var7 = 'function ContactSyncErrorTsx1(){const{withTiming,hasError,ERROR_HEIGHT}=this.__closure;return{height:withTiming(hasError?ERROR_HEIGHT:0)};}';
    var4['code'] = var7;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/contact_sync/native/components/ContactSyncError.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ContactSyncError(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.style;
            var7 = var1.error;
            var4 = undefined;
            var _closure2_slot0 = var4;
            var1 = _closure1_slot4;
            var8 = var1.bind(var4)();
            var1 = null;
            var13 = var1 != var7;
            if(!var13) { _fun0001_ip = 49; continue _fun0001 }
 41:
            var1 = '';
            var13 = var1 !== var7;
 49:
            _closure2_slot0 = var13;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 3;
            var5 = var9[var1];
            var10 = var6.bind(var4)(var5);
            var5 = var10.useAnimatedStyle;
            var3 = function l() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.withTiming;
                    var5 = _closure2_slot0;
                    var2 = 0;
                    if(!var5) { _fun0002_ip = 47; continue _fun0002 }
 44:
                    var2 = 44;
 47:
                    var2 = var3.bind(var4)(var2);
                    var1['height'] = var2;
                    return var1;
                }
            };
            var12 = {};
            var14 = 4;
            var14 = var9[var14];
            var14 = var6.bind(var4)(var14);
            var14 = var14.withTiming;
            var12['withTiming'] = var14;
            var12['hasError'] = var13;
            var13 = 44;
            var12['ERROR_HEIGHT'] = var13;
            var3['__closure'] = var12;
            var12 = 14558247431913.0;
            var3['__workletHash'] = var12;
            var12 = _closure1_slot5;
            var3['__initData'] = var12;
            var10 = var5.bind(var10)(var3);
            var3 = _closure1_slot3;
            var2 = _closure1_slot1;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var12 = var8.container;
            var5 = new Array(3);
            var5[0] = var12;
            var5[1] = var11;
            var5[2] = var10;
            var1['style'] = var5;
            var5 = 5;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'variant': 'text-sm/medium', 'color': 'text-danger'};
            var8 = var8.error;
            var5['style'] = var8;
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();