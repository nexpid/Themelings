// app/modules/media_keyboard/native/MediaKeyboardButtonIcon.tsx
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
    var4 = {};
    var7 = "function MediaKeyboardButtonIconTsx1(){const{withTiming,keyboard,KeyboardTypes,timingStandard}=this.__closure;return{transform:[{rotate:withTiming(keyboard===KeyboardTypes.MEDIA?'45deg':'0deg',timingStandard)}]};}";
    var4['code'] = var7;
    var _closure1_slot4 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/MediaKeyboardButtonIcon.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0001_ip = 271; continue _fun0001 }
 14:
            var17 = {};
            var5 = undefined;
            var16 = var2;
            var15 = undefined;
            var16 = copyDataProperties(var17, var16, var15);
            var _closure2_slot0 = var5;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 2;
            var1 = var9[var1];
            var1 = var3.bind(var5)(var1);
            var13 = var1.bind(var5)();
            _closure2_slot0 = var13;
            var7 = _closure1_slot0;
            var1 = 3;
            var10 = var9[var1];
            var11 = var7.bind(var5)(var10);
            var10 = var11.useAnimatedStyle;
            var6 = function s() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = {};
                    var3 = {};
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 4;
                    var4 = var10[var4];
                    var8 = undefined;
                    var6 = var7.bind(var8)(var4);
                    var5 = var6.withTiming;
                    var9 = _closure2_slot0;
                    var4 = 5;
                    var4 = var10[var4];
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.KeyboardTypes;
                    var7 = var4.MEDIA;
                    var4 = '0deg';
                    if(!(var9 === var7)) { _fun0002_ip = 81; continue _fun0002 }
 75:
                    var4 = '45deg';
 81:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 6;
                    var2 = var9[var2];
                    var2 = var7.bind(var8)(var2);
                    var2 = var2.timingStandard;
                    var2 = var5.bind(var6)(var4, var2);
                    var3['rotate'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var12 = {};
            var14 = 4;
            var14 = var9[var14];
            var14 = var7.bind(var5)(var14);
            var14 = var14.withTiming;
            var12['withTiming'] = var14;
            var12['keyboard'] = var13;
            var13 = 5;
            var13 = var9[var13];
            var13 = var7.bind(var5)(var13);
            var13 = var13.KeyboardTypes;
            var12['KeyboardTypes'] = var13;
            var13 = 6;
            var13 = var9[var13];
            var13 = var7.bind(var5)(var13);
            var13 = var13.timingStandard;
            var12['timingStandard'] = var13;
            var6['__closure'] = var12;
            var12 = 14080572312068.0;
            var6['__workletHash'] = var12;
            var12 = _closure1_slot4;
            var6['__initData'] = var12;
            var6 = var10.bind(var11)(var6);
            var4 = _closure1_slot3;
            var1 = var9[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.View;
            var1 = {};
            var1['style'] = var6;
            var6 = 7;
            var6 = var9[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.PlusLargeIcon;
            var6 = {};
            var17 = var6;
            var8 = copyDataProperties(var17, var16);
            var6 = var4.bind(var5)(var7, var6);
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            return var1;
 271:
            var16 = "Cannot destructure 'undefined' or 'null'.";
            var17 = var2;
            var1 = throwTypeError(var17, var16);
            var1 = undefined;
            throw var1;
        }
    };
    var3['MediaKeyboardButtonIcon'] = var2;
    return var1;
})();