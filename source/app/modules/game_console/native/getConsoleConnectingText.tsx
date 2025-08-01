// app/modules/game_console/native/getConsoleConnectingText.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.PlatformTypes;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_console/native/getConsoleConnectingText.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getConsoleConnectingText(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var3 = arg2;
            var2 = arg3;
            var1 = null;
            var4 = var1 == var3;
            var7 = undefined;
            var6 = undefined;
            if(var4) { _fun0001_ip = 27; continue _fun0001 }
 22:
            var6 = var3.type;
 27:
            if(!(var1 == var6)) { _fun0001_ip = 55; continue _fun0001 }
 31:
            var8 = var1 == var5;
            var4 = undefined;
            if(var8) { _fun0001_ip = 52; continue _fun0001 }
 40:
            var5 = var5.clientInfo;
            var4 = var5.os;
 52:
            var6 = var4;
 55:
            var4 = var1 != var3;
            var1 = _closure1_slot2;
            var1 = var1.XBOX;
            if(!(var6 !== var1)) { _fun0001_ip = 249; continue _fun0001 }
 79:
            var1 = _closure1_slot2;
            var1 = var1.PLAYSTATION;
            if(!(var6 !== var1)) { _fun0001_ip = 112; continue _fun0001 }
 93:
            var1 = _closure1_slot2;
            var5 = var1.PLAYSTATION_STAGING;
            var1 = undefined;
            if(!(var6 === var5)) { _fun0001_ip = 244; continue _fun0001 }
 112:
            if(var2) { _fun0001_ip = 181; continue _fun0001 }
 115:
            var5 = 'PS5';
            if(!var4) { _fun0001_ip = 179; continue _fun0001 }
 122:
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var6 = 1;
            var8 = var11[var6];
            var8 = var10.bind(var7)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var6 = var11[var6];
            var6 = var10.bind(var7)(var6);
            var6 = var6.t;
            var6 = var6.QCw1oa;
            var5 = var8.bind(var9)(var6);
 179:
            _fun0001_ip = 241; continue _fun0001;
 181:
            var8 = _closure1_slot0;
            var11 = _closure1_slot1;
            var6 = 1;
            var9 = var11[var6];
            var9 = var8.bind(var7)(var9);
            var10 = var9.intl;
            var9 = var10.format;
            var6 = var11[var6];
            var6 = var8.bind(var7)(var6);
            var6 = var6.t;
            var8 = var6.TZ17Bg;
            var6 = {};
            var5 = var9.bind(var10)(var8, var6);
 241:
            var1 = var5;
 244:
            _fun0001_ip = 381; continue _fun0001;
 249:
            if(var2) { _fun0001_ip = 318; continue _fun0001 }
 252:
            var2 = 'Xbox';
            if(!var4) { _fun0001_ip = 316; continue _fun0001 }
 259:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var4 = 1;
            var5 = var9[var4];
            var5 = var8.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.UjA4HR;
            var2 = var5.bind(var6)(var4);
 316:
            _fun0001_ip = 378; continue _fun0001;
 318:
            var4 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 1;
            var5 = var8[var3];
            var5 = var4.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.format;
            var3 = var8[var3];
            var3 = var4.bind(var7)(var3);
            var3 = var3.t;
            var4 = var3.ynEs/f;
            var3 = {};
            var2 = var5.bind(var6)(var4, var3);
 378:
            var1 = var2;
 381:
            return var1;
        }
    };
    var3['getConsoleConnectingText'] = var2;
    return var1;
})();