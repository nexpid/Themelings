// app/modules/core/native/handleAppStateChanged.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
 0:
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
            if(!var4) { _fun0001_ip = 162; continue _fun0001 }
 148:
            var3 = _closure1_slot6;
            var3 = var3.ACTIVE;
            var4 = var6 === var3;
 162:
            var3 = _closure1_slot6;
            var3 = var3.ACTIVE;
            var3 = var5 === var3;
            if(!var3) { _fun0001_ip = 193; continue _fun0001 }
 179:
            var5 = _closure1_slot6;
            var5 = var5.ACTIVE;
            var3 = var6 !== var5;
 193:
            if(!var4) { _fun0001_ip = 210; continue _fun0001 }
 196:
            var7 = _closure1_slot3;
            var5 = var7.isAuthenticated;
            var4 = var5.bind(var7)();
 210:
            if(!var4) { _fun0001_ip = 250; continue _fun0001 }
 213:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 6;
            var5 = var8[var5];
            var5 = var7.bind(var1)(var5);
            var7 = var5.default;
            var5 = var7.isDisconnected;
            var4 = var5.bind(var7)();
 250:
            if(!var4) { _fun0001_ip = 283; continue _fun0001 }
 253:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 7;
            var4 = var7[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.deferUpdate;
            var4 = var4.bind(var5)();
 283:
            var4 = _closure1_slot6;
            var4 = var4.ACTIVE;
            if(!(var6 === var4)) { _fun0001_ip = 356; continue _fun0001 }
 297:
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
 356:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 10;
            var4 = var7[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.appStateChanged;
            var4 = var4.bind(var5)(var6);
            if(!var3) { _fun0001_ip = 433; continue _fun0001 }
 390:
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
 433:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();