// app/modules/animations/native/DeprecatedLayoutAnimation.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var4 = function DeprecatedLayoutAnimation(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot4;
            var2 = var2.useReducedMotion;
            if(var2) { _fun0001_ip = 50; continue _fun0001 }
 19:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 2;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var4 = var5.isAndroid;
            var2 = var4.bind(var5)();
 50:
            if(var2) { _fun0001_ip = 90; continue _fun0001 }
 53:
            var2 = null;
            if(!(var2 == var3)) { _fun0001_ip = 75; continue _fun0001 }
 59:
            var4 = _closure1_slot3;
            var2 = var4.easeInEaseOut;
            var2 = var2.bind(var4)();
            _fun0001_ip = 90; continue _fun0001;
 75:
            var2 = _closure1_slot3;
            var1 = var2.configureNext;
            var1 = var1.bind(var2)(var3);
 90:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 0;
    var5 = var9[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var6 = var5.Keyboard;
    var _closure1_slot2 = var6;
    var12 = var5.LayoutAnimation;
    var _closure1_slot3 = var12;
    var5 = 1;
    var6 = var9[var5];
    var5 = metroImportDefault;
    var5 = var5.bind(var1)(var6);
    var _closure1_slot4 = var5;
    var6 = var12.create;
    var11 = 150;
    var10 = 'easeInEaseOut';
    var5 = 'opacity';
    var6 = var6.bind(var12)(var11, var10, var5);
    var7 = var12.create;
    var5 = 'scaleXY';
    var5 = var7.bind(var12)(var11, var10, var5);
    var7 = 3;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/animations/native/DeprecatedLayoutAnimation.tsx';
    var7 = var8.bind(var9)(var7);
    var3['CONFIG_GUILD_FOLDER_OPACITY'] = var6;
    var3['CONFIG_GUILD_FOLDER_SCALEXY'] = var5;
    var3['DeprecatedLayoutAnimation'] = var4;
    var2 = function DeprecatedLayoutAnimationKeyboard(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var2 = arguments[1];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0002_ip = 14; continue _fun0002 }
 12:
            var2 = false;
 14:
            if(!var2) { _fun0002_ip = 75; continue _fun0002 }
 17:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 2;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(var3) { _fun0002_ip = 75; continue _fun0002 }
 52:
            var4 = _closure1_slot2;
            var3 = var4.scheduleLayoutAnimation;
            var2 = {};
            var2['duration'] = var6;
            var2 = var3.bind(var4)(var2);
            return var2;
 75:
            var3 = _closure1_slot5;
            var2 = {};
            var2['duration'] = var6;
            var4 = {};
            var4['duration'] = var6;
            var5 = _closure1_slot3;
            var5 = var5.Types;
            var5 = var5.keyboard;
            var4['type'] = var5;
            var2['update'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['DeprecatedLayoutAnimationKeyboard'] = var2;
    return var1;
})();