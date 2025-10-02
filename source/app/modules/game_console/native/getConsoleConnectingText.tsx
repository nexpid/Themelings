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
case 0:
            var5 = arg1;
            var3 = arg2;
            var2 = arg3;
            var1 = null;
            var4 = var1 == var3;
            var7 = undefined;
            var6 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var3.type;
case 2:
            if(!(var1 == var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var1 == var5;
            var4 = undefined;
            if(var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var5.clientInfo;
            var4 = var5.os;
case 6:
            var6 = var4;
case 4:
            var4 = var1 != var3;
            var1 = _closure1_slot2;
            var1 = var1.XBOX;
            if(!(var6 !== var1)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = _closure1_slot2;
            var1 = var1.PLAYSTATION;
            if(!(var6 !== var1)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = _closure1_slot2;
            var5 = var1.PLAYSTATION_STAGING;
            var1 = undefined;
            if(!(var6 === var5)) { _fun0001_ip = 12; continue _fun0001 }
case 10:
            if(var2) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var5 = 'PS5';
            if(!var4) { _fun0001_ip = 15; continue _fun0001 }
case 16:
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
case 15:
            _fun0001_ip = 17; continue _fun0001;
case 13:
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
case 17:
            var1 = var5;
case 12:
            _fun0001_ip = 18; continue _fun0001;
case 8:
            if(var2) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var2 = 'Xbox';
            if(!var4) { _fun0001_ip = 21; continue _fun0001 }
case 22:
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
case 21:
            _fun0001_ip = 23; continue _fun0001;
case 19:
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
case 23:
            var1 = var2;
case 18:
            return var1;
        }
    };
    var3['getConsoleConnectingText'] = var2;
    return var1;
})();