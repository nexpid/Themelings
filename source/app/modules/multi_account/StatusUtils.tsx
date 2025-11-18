// app/modules/multi_account/StatusUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = function isSameDate(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = arg2;
            var1 = var3.getFullYear;
            var2 = var1.bind(var3)();
            var1 = var4.getFullYear;
            var1 = var1.bind(var4)();
            var1 = var2 === var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3.getMonth;
            var5 = var2.bind(var3)();
            var2 = var4.getMonth;
            var2 = var2.bind(var4)();
            var1 = var5 === var2;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.getDate;
            var3 = var2.bind(var3)();
            var2 = var4.getDate;
            var2 = var2.bind(var4)();
            var1 = var3 === var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot2 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/multi_account/StatusUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getStatusExpiryParts(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = global;
            var4 = var1.Date;
            var3 = var1.Number;
            var6 = undefined;
            var2 = arg1;
            var15 = var3.bind(var6)(var2);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var16 = var3;
            var2 = new var16[var4](var15, var14);
            var9 = var2 instanceof Object ? var2 : var3;
            var2 = _closure1_slot2;
            var3 = var1.Date;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var16 = var5;
            var3 = new var16[var3](var15);
            var3 = var3 instanceof Object ? var3 : var5;
            var5 = var2.bind(var6)(var9, var3);
            var1 = var1.Date;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var16 = var3;
            var1 = new var16[var1](var15);
            var1 = var1 instanceof Object ? var1 : var3;
            var7 = var1.setDate;
            var3 = var1.getDate;
            var3 = var3.bind(var1)();
            var11 = 1;
            var3 = var3 + var11;
            var3 = var7.bind(var1)(var3);
            var1 = var2.bind(var6)(var9, var1);
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var8 = 0;
            var2 = var2[var8];
            var2 = var3.bind(var6)(var2);
            var2 = var2.intl;
            var7 = var2.data;
            var3 = var7.formatTime;
            var2 = {};
            var10 = 'short';
            var2['format'] = var10;
            var3 = var3.bind(var7)(var9, var2);
            var2 = {};
            if(var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            if(var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = 'date';
            var2['kind'] = var1;
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var8];
            var1 = var5.bind(var6)(var1);
            var1 = var1.intl;
            var7 = var1.data;
            var5 = var7.formatDate;
            var1 = {};
            var1['dateStyle'] = var10;
            var1 = var5.bind(var7)(var9, var1);
            var2['dateString'] = var1;
            var2['timeString'] = var3;
            var1 = var2;
            _fun0002_ip = 10; continue _fun0002;
case 8:
            var5 = 'tomorrow';
            var2['kind'] = var5;
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var8];
            var5 = var7.bind(var6)(var5);
            var5 = var5.intl;
            var10 = var5.data;
            var9 = var10.formatRelativeTime;
            var7 = {};
            var5 = 'auto';
            var7['numeric'] = var5;
            var5 = 'day';
            var5 = var9.bind(var10)(var11, var5, var7);
            var2['dateString'] = var5;
            var2['timeString'] = var3;
            var1 = var2;
case 10:
            _fun0002_ip = 11; continue _fun0002;
case 6:
            var5 = 'today';
            var2['kind'] = var5;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var8];
            var4 = var5.bind(var6)(var4);
            var4 = var4.intl;
            var7 = var4.data;
            var6 = var7.formatRelativeTime;
            var5 = {};
            var4 = 'auto';
            var5['numeric'] = var4;
            var4 = 'day';
            var4 = var6.bind(var7)(var8, var4, var5);
            var2['dateString'] = var4;
            var2['timeString'] = var3;
            var1 = var2;
case 11:
            return var1;
        }
    };
    var3['getStatusExpiryParts'] = var2;
    return var1;
})();