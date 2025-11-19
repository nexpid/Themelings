// app/modules/media_keyboard/native/MediaKeyboardButtonIcon.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var4 = function useIsShowingAppLauncherWithoutDedicatedAppButton() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var3 = var2.bind(var5)();
            var4 = _closure1_slot0;
            var1 = 3;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var7 = var1.ChatInputIaMobileExperiment;
            var2 = var7.useConfig;
            var1 = {};
            var8 = 'MediaKeyboardButtonIcon';
            var1['location'] = var8;
            var1 = var2.bind(var7)(var1);
            var2 = var1.moveAppsToOverflow;
            var1 = 4;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.KeyboardTypes;
            var1 = var1.APP_LAUNCHER;
            var1 = var3 === var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot3 = var5;
    var5 = {};
    var8 = "function MediaKeyboardButtonIconTsx1(){const{withTiming,keyboard,KeyboardTypes,showAsXDueToAppLauncher,timingStandard}=this.__closure;return{transform:[{rotate:withTiming(keyboard===KeyboardTypes.MEDIA||showAsXDueToAppLauncher?'45deg':'0deg',timingStandard)}]};}";
    var5['code'] = var8;
    var _closure1_slot4 = var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/media_keyboard/native/MediaKeyboardButtonIcon.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useIsShowingAppLauncherWithoutDedicatedAppButton'] = var4;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var18 = {};
            var5 = undefined;
            var17 = var2;
            var16 = undefined;
            var17 = copyDataProperties(var18, var17, var16);
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var5;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 2;
            var1 = var9[var1];
            var1 = var3.bind(var5)(var1);
            var14 = var1.bind(var5)();
            _closure2_slot0 = var14;
            var1 = _closure1_slot5;
            var13 = var1.bind(var5)();
            _closure2_slot1 = var13;
            var7 = _closure1_slot0;
            var1 = 5;
            var10 = var9[var1];
            var11 = var7.bind(var5)(var10);
            var10 = var11.useAnimatedStyle;
            var6 = function u() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = {};
                    var3 = {};
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = 6;
                    var4 = var11[var4];
                    var8 = undefined;
                    var6 = var10.bind(var8)(var4);
                    var5 = var6.withTiming;
                    var9 = _closure2_slot0;
                    var7 = 4;
                    var7 = var11[var7];
                    var7 = var10.bind(var8)(var7);
                    var7 = var7.KeyboardTypes;
                    var7 = var7.MEDIA;
                    if(!(var9 !== var7)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var7 = _closure2_slot1;
                    var4 = '0deg';
                    if(!var7) { _fun0003_ip = 8; continue _fun0003 }
case 6:
                    var4 = '45deg';
case 8:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 7;
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
            var15 = 6;
            var15 = var9[var15];
            var15 = var7.bind(var5)(var15);
            var15 = var15.withTiming;
            var12['withTiming'] = var15;
            var12['keyboard'] = var14;
            var14 = 4;
            var14 = var9[var14];
            var14 = var7.bind(var5)(var14);
            var14 = var14.KeyboardTypes;
            var12['KeyboardTypes'] = var14;
            var12['showAsXDueToAppLauncher'] = var13;
            var13 = 7;
            var13 = var9[var13];
            var13 = var7.bind(var5)(var13);
            var13 = var13.timingStandard;
            var12['timingStandard'] = var13;
            var6['__closure'] = var12;
            var12 = 12470697679848.0;
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
            var6 = 8;
            var6 = var9[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.PlusLargeIcon;
            var6 = {};
            var18 = var6;
            var8 = copyDataProperties(var18, var17);
            var6 = var4.bind(var5)(var7, var6);
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            return var1;
case 4:
            var17 = "Cannot destructure 'undefined' or 'null'.";
            var18 = var2;
            var1 = throwTypeError(var18, var17);
            var1 = undefined;
            throw var1;
        }
    };
    var3['MediaKeyboardButtonIcon'] = var2;
    return var1;
})();