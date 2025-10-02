// app/lib/PlainRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var11;
    var6 = function constructInPlace(arg1, arg2) {
        var1 = arg2;
        var3 = _closure1_slot3;
        var2 = arg1;
        var1[var3] = var2;
        return var1;
    };
    var _closure1_slot4 = var6;
    var4 = function isValueEqual(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = var3 === var2;
            if(var1) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var4 = global;
            var5 = var4.Date;
            var5 = var3 instanceof var5;
            if(!var5) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var5 = var4.Date;
            var5 = var2 instanceof var5;
            if(var5) { _fun0001_ip = 9; continue _fun0001 }
case 7:
            var5 = var4.Set;
            var5 = var3 instanceof var5;
            if(!var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var4.Set;
            var5 = var2 instanceof var5;
            if(var5) { _fun0001_ip = 12; continue _fun0001 }
case 10:
            var6 = var4.Array;
            var5 = var6.isArray;
            var5 = var5.bind(var6)(var3);
            if(!var5) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var5 = var4.Array;
            var4 = var5.isArray;
            var4 = var4.bind(var5)(var2);
            if(var4) { _fun0001_ip = 15; continue _fun0001 }
case 13:
            var6 = 'object';
            var4 = typeof var3;
            var4 = var6 === var4;
            if(!var4) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var5 = typeof var2;
            var4 = var6 === var5;
case 16:
            if(!var4) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var5 = 3;
            var5 = var6[var5];
            var6 = undefined;
            var5 = var7.bind(var6)(var5);
            var4 = var5.bind(var6)(var3, var2);
case 18:
            _fun0001_ip = 20; continue _fun0001;
case 15:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 3;
            var6 = var6[var5];
            var5 = undefined;
            var6 = var7.bind(var5)(var6);
            var5 = var6.areArraysShallowEqual;
            var4 = var5.bind(var6)(var3, var2);
case 20:
            _fun0001_ip = 21; continue _fun0001;
case 12:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 2;
            var6 = var6[var5];
            var5 = undefined;
            var6 = var7.bind(var5)(var6);
            var5 = var6.areSetsEqual;
            var4 = var5.bind(var6)(var3, var2);
case 21:
            _fun0001_ip = 22; continue _fun0001;
case 9:
            var5 = var3.getTime;
            var6 = var5.bind(var3)();
            var5 = var2.getTime;
            var5 = var5.bind(var2)();
            var4 = var6 === var5;
case 22:
            var1 = var4;
case 5:
            _fun0001_ip = 23; continue _fun0001;
case 2:
            var1 = var3 === var2;
case 23:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var2 = function isPlainRecordDataEqual(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var6 = arg2;
            if(!(var7 !== var6)) { _fun0002_ip = 10; continue _fun0002 }
case 24:
            var1 = global;
            var2 = var1.Object;
            var1 = var2.keys;
            var5 = var1.bind(var2)(var7);
            var1 = var5.length;
            var4 = 0;
            var1 = var4 < var1;
            var2 = undefined;
            if(!var1) { _fun0002_ip = 25; continue _fun0002 }
case 8:
            var1 = var5[var4];
            var9 = _closure1_slot5;
            var8 = var7[var1];
            var1 = var6[var1];
            var1 = var9.bind(var2)(var8, var1);
            if(var1) { _fun0002_ip = 11; continue _fun0002 }
case 26:
            var1 = false;
            return var1;
case 11:
            var4 = var4 + 1;
            var1 = var5.length;
            if(var4 < var1) { _fun0002_ip = 8; continue _fun0002 }
case 25:
            var1 = true;
            return var1;
case 10:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot6 = var2;
    var1 = global;
    var12 = var1.Object;
    var8 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var12)(var3, var1, var7);
    var7 = 0;
    var8 = var11[var7];
    var1 = undefined;
    var8 = var9.bind(var1)(var8);
    var7 = var11[var7];
    var7 = var10.bind(var1)(var7);
    var7 = var7.TypeTag;
    var _closure1_slot3 = var7;
    var9 = 4;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'lib/PlainRecord.tsx';
    var9 = var10.bind(var11)(var9);
    var3['default'] = var8;
    var3['TypeTag'] = var7;
    var7 = function set(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var3 = arg3;
            var6 = _closure1_slot5;
            var2 = var5[var4];
            var1 = undefined;
            var2 = var6.bind(var1)(var2, var3);
            var1 = var5;
            if(var2) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var2 = {};
            var8 = var2;
            var7 = var5;
            var5 = copyDataProperties(var8, var7);
            var2[var4] = var3;
            var1 = var2;
case 27:
            return var1;
        }
    };
    var3['set'] = var7;
    var7 = function merge(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var12 = arg2;
            var10 = var12;
            var3 = null;
            var5 = undefined;
            var4 = null;
            var2 = null;
            for(var7 in var10)
case 29:
            {
                var13 = var4;
                var2 = var13;
case 30:
                var16 = var7;
                var18 = var1[var16];
                var15 = var12[var16];
                var14 = var5 === var15;
                if(var14) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                var17 = _closure1_slot5;
                var14 = var17.bind(var5)(var18, var15);
case 31:
                var4 = var13;
                if(var14) { _fun0004_ip = 29; continue _fun0004 }
case 33:
                if(!(var3 != var13)) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                var13[var16] = var15;
                _fun0004_ip = 36; continue _fun0004;
case 34:
                var14 = {};
                var20 = var14;
                var19 = var1;
                var17 = copyDataProperties(var20, var19);
                var14[var16] = var15;
                var13 = var14;
case 36:
                var4 = var13;
                _fun0004_ip = 29; continue _fun0004;
            }
case 37:
            if(!(var3 != var2)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var1 = var2;
case 38:
            return var1;
        }
    };
    var3['merge'] = var7;
    var7 = function tryReuseExistingInPlacePlainRecord(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var1 = arg2;
            var2 = arg3;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 1;
            var6 = var6[var4];
            var4 = undefined;
            var9 = var7.bind(var4)(var6);
            var6 = null;
            var8 = var6 == var1;
            if(var8) { _fun0005_ip = 40; continue _fun0005 }
case 30:
            var7 = _closure1_slot3;
            var7 = var1[var7];
            var8 = var7 === var5;
case 40:
            var7 = 'Existing record type does not match the expected type';
            var7 = var9.bind(var4)(var8, var7);
            if(!(var6 != var1)) { _fun0005_ip = 41; continue _fun0005 }
case 31:
            var6 = _closure1_slot6;
            var6 = var6.bind(var4)(var1, var2);
            if(var6) { _fun0005_ip = 42; continue _fun0005 }
case 41:
            var3 = _closure1_slot4;
            var3 = var3.bind(var4)(var5, var2);
            var1 = var2;
case 42:
            return var1;
        }
    };
    var3['tryReuseExistingInPlacePlainRecord'] = var7;
    var7 = function objectIsPlainRecordOfType(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg2;
            var2 = 'object';
            var1 = typeof var4;
            var1 = var2 === var1;
            if(!var1) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var2 = null;
            var1 = var2 != var4;
case 43:
            if(!var1) { _fun0006_ip = 40; continue _fun0006 }
case 45:
            var3 = _closure1_slot3;
            var3 = var3 in var4;
            if(!var3) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var2 = _closure1_slot3;
            var3 = var4[var2];
case 46:
            var2 = arg1;
            var1 = var3 === var2;
case 40:
            return var1;
        }
    };
    var3['objectIsPlainRecordOfType'] = var7;
    var3['constructInPlace'] = var6;
    var5 = function copyConstruct(arg1, arg2) {
        var1 = {};
        var4 = arg2;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var3 = _closure1_slot3;
        var2 = arg1;
        var1[var3] = var2;
        return var1;
    };
    var3['copyConstruct'] = var5;
    var3['isValueEqual'] = var4;
    var3['isPlainRecordDataEqual'] = var2;
    return var1;
})();