// app/modules/main_tabs_v2/useRecipientsLabel.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/useRecipientsLabel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useRecipientsLabel(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var7 = var5.bind(var3)(var4);
        var5 = var7.useStateFromStoresArray;
        var3 = _closure1_slot4;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var2 = _closure2_slot0;
            var4 = var2.recipients;
            var3 = var4.map;
            var2 = function(arg1) {
                var3 = _closure1_slot4;
                var2 = var3.getUser;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 4;
            var5 = var5[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var5);
            var2 = var2.isNotNullish;
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getName;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5 = var5.bind(var7)(var4, var3);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                var5 = var1.name;
                var4 = '';
                var1 = null;
                if(!(var4 !== var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var8 = _closure2_slot1;
                var3 = var8.length;
                var7 = 0;
                var2 = null;
                if(!(var7 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var3 = var8.length;
                var9 = 1;
                if(!(var9 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var3 = var8.length;
                var11 = 2;
                if(!(var11 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var3 = var8.length;
                var4 = 3;
                if(!(var4 !== var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var3 = var8.length;
                var10 = var3 - var4;
                var12 = _closure1_slot0;
                var3 = _closure1_slot2;
                var5 = var3[var11];
                var4 = undefined;
                var5 = var12.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var3 = var3[var11];
                var3 = var12.bind(var4)(var3);
                var3 = var3.t;
                var4 = var3.VYfueX;
                var3 = {};
                var12 = var8[var7];
                var3['first'] = var12;
                var12 = var8[var9];
                var3['second'] = var12;
                var12 = var8[var11];
                var3['third'] = var12;
                var3['count'] = var10;
                var2 = var5.bind(var6)(var4, var3);
                _fun0001_ip = 4; continue _fun0001;
case 10:
                var10 = _closure1_slot0;
                var3 = _closure1_slot2;
                var5 = var3[var11];
                var4 = undefined;
                var5 = var10.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var3 = var3[var11];
                var3 = var10.bind(var4)(var3);
                var3 = var3.t;
                var4 = var3.QDB5en;
                var3 = {};
                var10 = var8[var7];
                var3['first'] = var10;
                var10 = var8[var9];
                var3['second'] = var10;
                var10 = var8[var11];
                var3['third'] = var10;
                var2 = var5.bind(var6)(var4, var3);
                _fun0001_ip = 4; continue _fun0001;
case 8:
                var10 = _closure1_slot0;
                var3 = _closure1_slot2;
                var5 = var3[var11];
                var4 = undefined;
                var5 = var10.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var3 = var3[var11];
                var3 = var10.bind(var4)(var3);
                var3 = var3.t;
                var4 = var3.gwRP0d;
                var3 = {};
                var10 = var8[var7];
                var3['first'] = var10;
                var9 = var8[var9];
                var3['second'] = var9;
                var2 = var5.bind(var6)(var4, var3);
                _fun0001_ip = 4; continue _fun0001;
case 6:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 2;
                var5 = var10[var3];
                var4 = undefined;
                var5 = var9.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var3 = var10[var3];
                var3 = var9.bind(var4)(var3);
                var3 = var3.t;
                var4 = var3.J+Wpsr;
                var3 = {};
                var7 = var8[var7];
                var3['first'] = var7;
                var2 = var5.bind(var6)(var4, var3);
case 4:
                var1 = var2;
case 2:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useRecipientsLabel'] = var2;
    return var1;
})();