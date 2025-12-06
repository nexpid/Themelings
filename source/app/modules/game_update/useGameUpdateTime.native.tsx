// app/modules/game_update/useGameUpdateTime.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 4;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_update/useGameUpdateTime.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.startDate;
            var7 = null;
            if(!(var7 != var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = '';
            if(!(var1 !== var6)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var11 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 0;
            var2 = var5[var3];
            var8 = undefined;
            var4 = var11.bind(var8)(var2);
            var2 = 'YYYY-MM-DD HH:mm:ss';
            var6 = var4.bind(var8)(var6, var2);
            var9 = _closure1_slot0;
            var2 = 1;
            var4 = var5[var2];
            var12 = var9.bind(var8)(var4);
            var10 = var12.dateFormat;
            var4 = 'MMM D, YYYY';
            var4 = var10.bind(var12)(var6, var4);
            var10 = var5[var3];
            var10 = var11.bind(var8)(var10);
            var11 = var10.bind(var8)();
            var5 = var5[var2];
            var10 = var9.bind(var8)(var5);
            var9 = var10.differenceInCalendarDays;
            var5 = var6.toDate;
            var6 = var5.bind(var6)();
            var5 = var11.toDate;
            var5 = var5.bind(var11)();
            var13 = var9.bind(var10)(var6, var5);
            if(!(var3 !== var13)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = -1;
            if(!(var3 !== var13)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            if(!(var2 !== var13)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            if(!(!(var13 < var3))) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var5 = var13 > var2;
            if(!var5) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var2 = 60;
            var5 = var13 < var2;
case 13:
            var2 = 'content-inventory-overlay-text-secondary';
            var3 = null;
            if(!var5) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 2;
            var5 = var11[var5];
            var5 = var6.bind(var8)(var5);
            var10 = var5.intl;
            var9 = var10.format;
            var6 = _closure1_slot1;
            var5 = 3;
            var5 = var11[var5];
            var5 = var6.bind(var8)(var5);
            var6 = var5.a0fXhG;
            var5 = {};
            var5['count'] = var13;
            var3 = var9.bind(var10)(var6, var5);
            var2 = 'text-link';
            _fun0001_ip = 15; continue _fun0001;
case 11:
            var5 = -14;
            var6 = var13 > var5;
            var5 = 'content-inventory-overlay-text-secondary';
            var3 = null;
            var2 = var5;
            if(!var6) { _fun0001_ip = 15; continue _fun0001 }
case 17:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 2;
            var6 = var11[var6];
            var6 = var7.bind(var8)(var6);
            var10 = var6.intl;
            var9 = var10.format;
            var7 = _closure1_slot1;
            var6 = 3;
            var6 = var11[var6];
            var6 = var7.bind(var8)(var6);
            var7 = var6.4Wc+CC;
            var6 = {};
            var11 = global;
            var12 = var11.Math;
            var11 = var12.abs;
            var11 = var11.bind(var12)(var13);
            var6['count'] = var11;
            var3 = var9.bind(var10)(var7, var6);
            var2 = var5;
            _fun0001_ip = 15; continue _fun0001;
case 9:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 2;
            var6 = var10[var5];
            var6 = var9.bind(var8)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var10[var5];
            var5 = var9.bind(var8)(var5);
            var5 = var5.t;
            var5 = var5.EqnX/z;
            var3 = var6.bind(var7)(var5);
            var2 = 'text-link';
            _fun0001_ip = 15; continue _fun0001;
case 7:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 2;
            var6 = var10[var5];
            var6 = var9.bind(var8)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var10[var5];
            var5 = var9.bind(var8)(var5);
            var5 = var5.t;
            var5 = var5.ZdDLO0;
            var3 = var6.bind(var7)(var5);
            var2 = 'content-inventory-overlay-text-secondary';
            _fun0001_ip = 15; continue _fun0001;
case 5:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 2;
            var5 = var9[var1];
            var5 = var7.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var1 = var9[var1];
            var1 = var7.bind(var8)(var1);
            var1 = var1.t;
            var1 = var1.mbs4NX;
            var3 = var5.bind(var6)(var1);
            var2 = 'text-feedback-positive';
case 15:
            var1 = {};
            var1['formattedStartDate'] = var4;
            var1['relativeLabel'] = var3;
            var1['labelColor'] = var2;
            return var1;
case 2:
            var1 = {'formattedStartDate': '', 'relativeLabel': null, 'labelColor': 'text-muted'};
            return var1;
        }
    };
    var3['useGameUpdateTime'] = var2;
    return var1;
})();