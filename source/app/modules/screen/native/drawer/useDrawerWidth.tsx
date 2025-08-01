// app/modules/screen/native/drawer/useDrawerWidth.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = function computeTabletDrawerWidth(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg2;
            if(var1) { _fun0001_ip = 44; continue _fun0001 }
 9:
            var1 = global;
            var5 = var1.Math;
            var4 = var5.min;
            var3 = _closure1_slot4;
            var6 = arg1;
            var1 = 32;
            var1 = var6 - var1;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 48; continue _fun0001;
 44:
            var1 = _closure1_slot3;
 48:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var8 = var4.DM_WIDTH;
    var4 = 260;
    var4 = var4 + var8;
    var _closure1_slot3 = var4;
    var5 = 300;
    var5 = var5 + var8;
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/screen/native/drawer/useDrawerWidth.tsx';
    var5 = var6.bind(var7)(var5);
    var3['DRAWER_LEFT_WIDTH_MIN'] = var4;
    var4 = function getDrawerWidth() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 1;
            var1 = var6[var1];
            var5 = undefined;
            var4 = var3.bind(var5)(var1);
            var1 = var4.getAppContainerDimensions;
            var1 = var1.bind(var4)();
            var4 = var1.width;
            var1 = 2;
            var1 = var6[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.getChatLayout;
            var1 = var1.bind(var3)();
            var6 = var1.isChatBesideChannelList;
            var3 = var1.isChatLockedOpen;
            var1 = var4;
            if(!var6) { _fun0002_ip = 90; continue _fun0002 }
 80:
            var2 = _closure1_slot5;
            var1 = var2.bind(var5)(var4, var3);
 90:
            return var1;
        }
    };
    var3['getDrawerWidth'] = var4;
    var2 = function useDrawerWidth() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 1;
            var1 = var6[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var4 = var1.width;
            var1 = 2;
            var1 = var6[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var6 = var1.isChatBesideChannelList;
            var3 = var1.isChatLockedOpen;
            var1 = var4;
            if(!var6) { _fun0003_ip = 78; continue _fun0003 }
 68:
            var2 = _closure1_slot5;
            var1 = var2.bind(var5)(var4, var3);
 78:
            return var1;
        }
    };
    var3['useDrawerWidth'] = var2;
    return var1;
})();