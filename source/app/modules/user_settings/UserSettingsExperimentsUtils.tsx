// app/modules/user_settings/UserSettingsExperimentsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot4;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot4;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 36; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot4 = var1;
    var5 = function getExperimentDateFromId(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot2;
            var2 = var3.exec;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var1 = null;
            var2 = var1 != var3;
            if(!var2) { _fun0004_ip = 37; continue _fun0004 }
case 3:
            var2 = 1;
            var1 = var3[var2];
case 37:
            return var1;
        }
    };
    var _closure1_slot5 = var5;
    var4 = function matchesDeep(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var6 = arg2;
            var1 = global;
            var4 = var1.Array;
            var3 = var4.isArray;
            var3 = var3.bind(var4)(var2);
            if(var3) { _fun0005_ip = 17; continue _fun0005 }
case 3:
            var4 = typeof var2;
            var3 = 'object';
            if(!(var3 === var4)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var3 = null;
            if(!(var3 === var2)) { _fun0005_ip = 40; continue _fun0005 }
case 38:
            var3 = 'string';
            if(!(var3 === var4)) { _fun0005_ip = 21; continue _fun0005 }
case 41:
            var3 = var2.toLowerCase;
            var5 = var3.bind(var2)();
            var4 = var5.includes;
            var3 = var6.toLowerCase;
            var3 = var3.bind(var6)();
            var3 = var4.bind(var5)(var3);
            if(!var3) { _fun0005_ip = 21; continue _fun0005 }
case 42:
            var3 = true;
            return var3;
case 40:
            var3 = var1.Object;
            var1 = var3.values;
            var7 = var1.bind(var3)(var2);
            var1 = var7.length;
            var5 = 0;
            var1 = var5 < var1;
            var3 = undefined;
            if(!var1) { _fun0005_ip = 21; continue _fun0005 }
case 43:
            var8 = _closure1_slot6;
            var1 = var7[var5];
            var1 = var8.bind(var3)(var1, var6);
            if(var1) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var5 = var5 + 1;
            var1 = var7.length;
            if(var5 < var1) { _fun0005_ip = 43; continue _fun0005 }
case 14:
            _fun0005_ip = 21; continue _fun0005;
case 44:
            var1 = true;
            return var1;
case 17:
            var1 = _closure1_slot3;
            var4 = undefined;
            var3 = var1.bind(var4)(var2);
            var2 = var3.bind(var4)();
            var1 = var2.done;
            if(var1) { _fun0005_ip = 21; continue _fun0005 }
case 20:
            var7 = _closure1_slot6;
            var1 = var2.value;
            var1 = var7.bind(var4)(var1, var6);
            if(var1) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var7 = var3.bind(var4)();
            var1 = var7.done;
            var2 = var7;
            if(var1) { _fun0005_ip = 21; continue _fun0005 }
case 48:
            _fun0005_ip = 20; continue _fun0005;
case 46:
            var1 = true;
            return var1;
case 21:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = /^(\d{4}-\d{1,2})/;
    var _closure1_slot2 = var1;
    var1 = 1;
    var7 = var6[var1];
    var6 = require;
    var1 = undefined;
    var8 = var6.bind(var1)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/user_settings/UserSettingsExperimentsUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['getExperimentDateFromId'] = var5;
    var5 = function getEntries(arg1) {
        var1 = global;
        var3 = var1.Array;
        var2 = var3.from;
        var5 = var1.Object;
        var4 = var5.entries;
        var1 = arg1;
        var1 = var4.bind(var5)(var1);
        var3 = var2.bind(var3)(var1);
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = arg1;
                var1 = var5[Symbol.iterator];
                var5 = var1().next;
                var2 = var5().value;
                var3 = var1;
                var7 = undefined;
                var4 = var3 === var7;
                var3 = undefined;
                if(var4) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                var3 = var2;
case 49:
                var2 = undefined;
                if(var4) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                var6 = var5().value;
                var5 = var1;
                var5 = var5 === var7;
                var2 = undefined;
                var4 = var5;
                if(var5) { _fun0006_ip = 51; continue _fun0006 }
case 53:
                var2 = var6;
                var4 = var5;
case 51:
                if(var4) { _fun0006_ip = 54; continue _fun0006 }
case 7:
                var1.return();
case 54:
                var1 = {};
                var1['id'] = var3;
                var1['experiment'] = var2;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getEntries'] = var5;
    var3['matchesDeep'] = var4;
    var4 = function sortEntries(arg1, arg2) {
        var3 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = var3.slice;
        var3 = var2.bind(var3)();
        var2 = var3.sort;
        var1 = function(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = arg1;
                var2 = arg2;
                var6 = _closure2_slot0;
                var1 = null;
                var8 = var1 == var3;
                var7 = undefined;
                var5 = undefined;
                if(var8) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                var5 = var3.id;
case 55:
                var5 = var6[var5];
                if(!(var1 != var5)) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                var6 = _closure2_slot0;
                var8 = var1 == var2;
                var5 = undefined;
                if(var8) { _fun0007_ip = 51; continue _fun0007 }
case 59:
                var5 = var2.id;
case 51:
                var5 = var6[var5];
                if(!(var1 != var5)) { _fun0007_ip = 60; continue _fun0007 }
case 57:
                var6 = _closure2_slot0;
                var8 = var1 == var3;
                var5 = undefined;
                if(var8) { _fun0007_ip = 61; continue _fun0007 }
case 62:
                var5 = var3.id;
case 61:
                var5 = var6[var5];
                if(!(var1 == var5)) { _fun0007_ip = 63; continue _fun0007 }
case 42:
                var5 = _closure2_slot0;
                var6 = var1 == var2;
                var4 = undefined;
                if(var6) { _fun0007_ip = 64; continue _fun0007 }
case 65:
                var4 = var2.id;
case 64:
                var4 = var5[var4];
                if(!(var1 == var4)) { _fun0007_ip = 66; continue _fun0007 }
case 63:
                var6 = _closure1_slot5;
                var4 = var3.id;
                var5 = var6.bind(var7)(var4);
                var4 = var2.id;
                var4 = var6.bind(var7)(var4);
                if(!(var1 != var5)) { _fun0007_ip = 67; continue _fun0007 }
case 68:
                if(!(var1 != var4)) { _fun0007_ip = 67; continue _fun0007 }
case 69:
                var1 = var4.localeCompare;
                var1 = var1.bind(var4)(var5);
                var4 = 0;
                if(!(var4 === var1)) { _fun0007_ip = 70; continue _fun0007 }
case 67:
                var3 = var3.experiment;
                var4 = var3.title;
                var3 = var4.localeCompare;
                var2 = var2.experiment;
                var2 = var2.title;
                var2 = var3.bind(var4)(var2);
                return var2;
case 70:
                return var1;
case 66:
                var1 = 1;
                return var1;
case 60:
                var1 = -1;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['sortEntries'] = var4;
    var2 = function getBestMatches(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var5 = arg2;
            var4 = var5.split;
            var3 = /\s+/g;
            var5 = var4.bind(var5)(var3);
            var4 = var5.filter;
            var3 = function(arg1) {
                var2 = '';
                var1 = arg1;
                var1 = var2 !== var1;
                return var1;
            };
            var12 = var4.bind(var5)(var3);
            var3 = var12.length;
            var7 = 0;
            if(!(var7 !== var3)) { _fun0008_ip = 71; continue _fun0008 }
case 54:
            var6 = new Array(0);
            var5 = _closure1_slot3;
            var4 = undefined;
            var11 = var5.bind(var4)(var1);
            var8 = var11.bind(var4)();
            var5 = var8.done;
            var10 = null;
            var9 = 1;
            if(var5) { _fun0008_ip = 46; continue _fun0008 }
case 72:
            var14 = var8.value;
            var5 = _closure1_slot3;
            var17 = var5.bind(var4)(var12);
            var5 = var17.bind(var4)();
            var13 = var5.done;
            var16 = var5;
            var15 = 0;
            var5 = 0;
            if(var13) { _fun0008_ip = 73; continue _fun0008 }
case 74:
            var18 = _closure1_slot6;
            var13 = var16.value;
            var13 = var18.bind(var4)(var14, var13);
            var18 = var15;
            if(!var13) { _fun0008_ip = 75; continue _fun0008 }
case 69:
            var18 = var15 + var9;
case 75:
            var19 = var17.bind(var4)();
            var13 = var19.done;
            var15 = var18;
            var16 = var19;
            var5 = var15;
            if(!var13) { _fun0008_ip = 74; continue _fun0008 }
case 73:
            if(!(var7 !== var5)) { _fun0008_ip = 60; continue _fun0008 }
case 76:
            var13 = var6[var5];
            if(!(var10 == var13)) { _fun0008_ip = 77; continue _fun0008 }
case 78:
            var13 = new Array(0);
            var6[var5] = var13;
case 77:
            var13 = var6[var5];
            var5 = var13.push;
            var5 = var5.bind(var13)(var14);
case 60:
            var13 = var11.bind(var4)();
            var5 = var13.done;
            var8 = var13;
            if(!var5) { _fun0008_ip = 72; continue _fun0008 }
case 46:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var5.bind(var4)(var3);
            var5 = var6.filter;
            var2 = function(arg1) {
                var2 = undefined;
                var1 = arg1;
                var1 = var2 !== var1;
                return var1;
            };
            var5 = var5.bind(var6)(var2);
            var2 = var5.reverse;
            var2 = var2.bind(var5)();
            var2 = var3.bind(var4)(var2);
            return var2;
case 71:
            return var1;
        }
    };
    var3['getBestMatches'] = var2;
    return var1;
})();