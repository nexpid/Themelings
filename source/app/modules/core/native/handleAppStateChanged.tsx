// app/modules/core/native/handleAppStateChanged.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot5 = var8;
    var4 = var4.AppStates;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'index.native.tsx';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot7 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/core/native/handleAppStateChanged.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function handleAppStateChanged(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var3 = _closure1_slot4;
            var1 = var3.getState;
            var5 = var1.bind(var3)();
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 4;
            var3 = var7[var1];
            var1 = undefined;
            var11 = var4.bind(var1)(var3);
            var10 = var11.markAndLog;
            var9 = _closure1_slot7;
            var3 = global;
            var3 = var3.HermesInternal;
            var12 = var3.concat;
            var8 = 'AppState changing from ';
            var3 = ' to ';
            var8 = var12.bind(var8)(var5, var3, var6);
            var3 = '🏃';
            var3 = var10.bind(var11)(var9, var3, var8);
            var3 = 5;
            var3 = var7[var3];
            var7 = var4.bind(var1)(var3);
            var4 = var7.dispatch;
            var3 = {};
            var8 = 'APP_STATE_UPDATE';
            var3['type'] = var8;
            var3['state'] = var6;
            var3 = var4.bind(var7)(var3);
            var3 = _closure1_slot6;
            var3 = var3.BACKGROUND;
            var4 = var5 === var3;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot6;
            var3 = var3.ACTIVE;
            var4 = var6 === var3;
case 2:
            var3 = _closure1_slot6;
            var3 = var3.ACTIVE;
            var3 = var5 === var3;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot6;
            var5 = var5.ACTIVE;
            var3 = var6 !== var5;
case 4:
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = _closure1_slot3;
            var5 = var7.isAuthenticated;
            var4 = var5.bind(var7)();
case 6:
            if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 6;
            var5 = var8[var5];
            var5 = var7.bind(var1)(var5);
            var7 = var5.default;
            var5 = var7.isDisconnected;
            var4 = var5.bind(var7)();
case 8:
            if(!var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 7;
            var4 = var7[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.deferUpdate;
            var4 = var4.bind(var5)();
case 10:
            var4 = _closure1_slot6;
            var4 = var4.ACTIVE;
            if(!(var6 === var4)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 8;
            var4 = var7[var4];
            var9 = var5.bind(var1)(var4);
            var8 = var9.trackAppOpened;
            var4 = 'launcher';
            var4 = var8.bind(var9)(var4);
            var4 = 9;
            var4 = var7[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.setSystemThemeIfNeeded;
            var4 = var4.bind(var5)();
case 12:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 10;
            var4 = var7[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.appStateChanged;
            var4 = var4.bind(var5)(var6);
            if(!var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 11;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot5;
            var3 = var2.APP_BACKGROUND;
            var2 = {};
            var2 = var4.bind(var5)(var3, var2);
case 14:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();