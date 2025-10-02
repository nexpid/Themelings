// app/modules/age_gate/native/components/DateInput.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function subtractYearsFromToday(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var3.bind(var2)(var1);
        var2 = var1.bind(var2)();
        var4 = var2.set;
        var1 = var2.year;
        var3 = var1.bind(var2)();
        var1 = arg1;
        var3 = var3 - var1;
        var1 = 'year';
        var1 = var4.bind(var2)(var1, var3);
        var1 = var2.toDate;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = function initialDate() {
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = 10;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Keyboard;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var8 = var2.date;
            var _closure2_slot0 = var8;
            var3 = var2.onChangeDate;
            var _closure2_slot1 = var3;
            var6 = var2.label;
            var _closure2_slot2 = var6;
            var13 = var2.style;
            var5 = var2.error;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var2 = function updateDate(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var2 = _closure2_slot3;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = var3.blur;
                    var2 = var2.bind(var3)();
case 2:
                    return var1;
                }
            };
            var _closure2_slot4 = var2;
            var7 = function openDatePicker() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot4;
                    var1 = var3.dismiss;
                    var1 = var1.bind(var3)();
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 4;
                    var4 = var3[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.openLazy;
                    var7 = _closure1_slot0;
                    var4 = 6;
                    var4 = var3[var4];
                    var7 = var7.bind(var1)(var4);
                    var4 = 5;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var4 = var7.bind(var1)(var4, var3);
                    var3 = {};
                    var7 = _closure2_slot4;
                    var3['onSubmit'] = var7;
                    var7 = _closure2_slot2;
                    var3['title'] = var7;
                    var7 = _closure2_slot0;
                    var8 = null;
                    var10 = var8 == var7;
                    var7 = undefined;
                    if(var10) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var10 = _closure2_slot0;
                    var9 = var10.toDate;
                    var7 = var9.bind(var10)();
case 4:
                    if(!(var8 == var7)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var8 = _closure1_slot7;
                    var7 = var8.bind(var1)();
case 6:
                    var3['startDate'] = var7;
                    var7 = _closure1_slot6;
                    var2 = 3;
                    var2 = var7.bind(var1)(var2);
                    var3['maximumDate'] = var2;
                    var2 = true;
                    var3['requireDateChanged'] = var2;
                    var2 = 'DatePicker';
                    var2 = var5.bind(var6)(var4, var2, var3);
                    return var1;
                }
            };
            var _closure2_slot5 = var7;
            var10 = _closure1_slot3;
            var2 = var10.useRef;
            var9 = null;
            var11 = var2.bind(var10)(var9);
            _closure2_slot3 = var11;
            var3 = var10.useImperativeHandle;
            var2 = arg2;
            var1 = function() {
                var1 = {};
                var2 = function focus() {
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var1['focus'] = var2;
                return var1;
            };
            var1 = var3.bind(var10)(var2, var1);
            var2 = var9 == var8;
            var1 = undefined;
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var8.format;
            var2 = 'L';
            var1 = var3.bind(var8)(var2);
case 8:
            var2 = var9 != var1;
            var8 = undefined;
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = var1;
case 10:
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 3;
            var1 = var14[var1];
            var3 = var2.bind(var4)(var1);
            var1 = _closure1_slot7;
            var1 = var1.bind(var4)();
            var10 = var3.bind(var4)(var1);
            var3 = var10.format;
            var1 = 'L';
            var10 = var3.bind(var10)(var1);
            var3 = _closure1_slot5;
            var1 = 7;
            var1 = var14[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['style'] = var13;
            var1['ref'] = var11;
            var14 = var9 != var8;
            var11 = '';
            var13 = var11;
            if(!var14) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var13 = var8;
case 12:
            var1['value'] = var13;
            var1['placeholder'] = var10;
            var13 = 'next';
            var1['returnKeyType'] = var13;
            var13 = 'none';
            var1['textContentType'] = var13;
            var1['autoCapitalize'] = var13;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 8;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.ClearButtonVisibility;
            var12 = var12.NEVER;
            var1['clearButtonVisibility'] = var12;
            var12 = false;
            var1['editable'] = var12;
            var12 = true;
            var1['forceAccessibleContainer'] = var12;
            if(!(var9 != var8)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var10 = var8;
case 14:
            var8 = global;
            var8 = var8.HermesInternal;
            var9 = var8.concat;
            var8 = ', ';
            var8 = var9.bind(var11)(var6, var8, var10);
            var1['accessibilityLabel'] = var8;
            var1['onPress'] = var7;
            var1['label'] = var6;
            var1['error'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_gate/native/components/DateInput.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();