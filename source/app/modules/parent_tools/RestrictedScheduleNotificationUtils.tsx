// app/modules/parent_tools/RestrictedScheduleNotificationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var8;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot7;
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
            var7 = _closure1_slot7;
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
    var _closure1_slot6 = var1;
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
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function isOnlyDayLoss(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var3 = arg2;
            var5 = var1.label;
            var4 = var3.label;
            if(!(var5 === var4)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var8 = _closure1_slot1;
            var5 = _closure1_slot2;
            var7 = 0;
            var5 = var5[var7];
            var6 = undefined;
            var10 = var8.bind(var6)(var5);
            var9 = var10.isEqual;
            var8 = var1.startTime;
            var5 = var3.startTime;
            var5 = var9.bind(var10)(var8, var5);
            if(var5) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var5 = false;
            return var5;
case 38:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var7 = var5.bind(var6)(var4);
            var6 = var7.isEqual;
            var5 = var1.endTime;
            var4 = var3.endTime;
            var4 = var6.bind(var7)(var5, var4);
            if(var4) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var4 = false;
            return var4;
case 40:
            var4 = global;
            var6 = var4.Set;
            var12 = var1.days;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var13 = var5;
            var4 = new var13[var6](var12, var11);
            var4 = var4 instanceof Object ? var4 : var5;
            var _closure2_slot0 = var4;
            var4 = var3.days;
            var4 = var4.length;
            var1 = var1.days;
            var1 = var1.length;
            var1 = var4 < var1;
            if(!var1) { _fun0004_ip = 42; continue _fun0004 }
case 20:
            var4 = var3.days;
            var3 = var4.every;
            var2 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 42:
            return var1;
case 36:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var5 = {};
    var4 = true;
    var5['value'] = var4;
    var4 = '__esModule';
    var4 = var6.bind(var9)(var3, var4, var5);
    var5 = {};
    var4 = 'created';
    var5['Created'] = var4;
    var4 = 'enabled';
    var5['Enabled'] = var4;
    var4 = 'disabled';
    var5['Disabled'] = var4;
    var4 = 'updated';
    var5['Updated'] = var4;
    var4 = 'removed';
    var5['Removed'] = var4;
    var4 = 'multiple';
    var5['Multiple'] = var4;
    var _closure1_slot3 = var5;
    var1 = var1.Map;
    var4 = var1.prototype;
    var4 = Object.create(var4, {constructor: {value: var1}});
    var16 = var4;
    var1 = new var16[var1](var15);
    var4 = var1 instanceof Object ? var1 : var4;
    var _closure1_slot4 = var4;
    var6 = {};
    var12 = var5.Created;
    var9 = 1;
    var10 = var8[var9];
    var1 = undefined;
    var10 = var11.bind(var1)(var10);
    var10 = var10["5V7eBH"];
    var6[11] = var10;
    var12 = var5.Enabled;
    var10 = var8[var9];
    var10 = var11.bind(var1)(var10);
    var10 = var10.iefrVg;
    var6[11] = var10;
    var12 = var5.Disabled;
    var10 = var8[var9];
    var10 = var11.bind(var1)(var10);
    var10 = var10.k+s9cM;
    var6[11] = var10;
    var12 = var5.Updated;
    var10 = var8[var9];
    var10 = var11.bind(var1)(var10);
    var10 = var10.Nm6hZV;
    var6[11] = var10;
    var12 = var5.Multiple;
    var10 = var8[var9];
    var10 = var11.bind(var1)(var10);
    var10 = var10.Nm6hZV;
    var6[11] = var10;
    var10 = var5.Removed;
    var9 = var8[var9];
    var9 = var11.bind(var1)(var9);
    var9 = var9.jR6uOs;
    var6[9] = var9;
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/parent_tools/RestrictedScheduleNotificationUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['RestrictedScheduleNotificationKind'] = var5;
    var3['EMPTY_SCHEDULE_SNAPSHOT'] = var4;
    var4 = function toScheduleSnapshot(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 != var1)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var2 = var1.rules;
            var3 = var2.length;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0005_ip = 43; continue _fun0005 }
case 45:
            var2 = global;
            var3 = var2.Map;
            var4 = var1.rules;
            var2 = var4.map;
            var1 = function(arg1) {
                var2 = arg1;
                var3 = var2.ruleId;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var5 = var2.bind(var4)(var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var6 = var2;
            var1 = new var6[var3](var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            _fun0005_ip = 46; continue _fun0005;
case 43:
            var1 = _closure1_slot4;
case 46:
            return var1;
        }
    };
    var3['toScheduleSnapshot'] = var4;
    var4 = function diffSchedules(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var14 = arg1;
            var13 = arg2;
            var12 = function record(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = arg1;
                    var1 = arg2;
                    var4 = _closure2_slot4;
                    var3 = 0;
                    if(!(var3 === var4)) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                    _closure2_slot0 = var5;
                    _closure2_slot1 = var1;
case 47:
                    var3 = _closure2_slot4;
                    var3 = var3 + 1;
                    _closure2_slot4 = var3;
                    var4 = _closure1_slot3;
                    var4 = var4.Removed;
                    if(!(var5 !== var4)) { _fun0007_ip = 49; continue _fun0007 }
case 4:
                    var4 = _closure1_slot3;
                    var4 = var4.Created;
                    if(!(var5 !== var4)) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                    var4 = _closure1_slot3;
                    var4 = var4.Updated;
                    if(!(var5 !== var4)) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                    var3 = _closure1_slot3;
                    var6 = var3.Enabled;
                    var4 = new Array(2);
                    var4[0] = var6;
                    var3 = var3.Disabled;
                    var4[1] = var3;
                    var3 = var4.includes;
                    var3 = var3.bind(var4)(var5);
                    if(!var3) { _fun0007_ip = 54; continue _fun0007 }
case 41:
                    var3 = _closure2_slot8;
                    var3 = var3 + 1;
                    _closure2_slot8 = var3;
                    _fun0007_ip = 54; continue _fun0007;
case 52:
                    _closure2_slot3 = var1;
                    var3 = _closure2_slot7;
                    var3 = var3 + 1;
                    _closure2_slot7 = var3;
                    _fun0007_ip = 54; continue _fun0007;
case 50:
                    _closure2_slot2 = var1;
                    var1 = _closure2_slot6;
                    var1 = var1 + 1;
                    _closure2_slot6 = var1;
                    _fun0007_ip = 54; continue _fun0007;
case 49:
                    var1 = _closure2_slot5;
                    var1 = var1 + 1;
                    _closure2_slot5 = var1;
case 54:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = null;
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var1;
            var _closure2_slot3 = var1;
            var5 = 0;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var2 = new Array(0);
            var7 = _closure1_slot6;
            var6 = global;
            var9 = var6.Set;
            var6 = var14.keys;
            var26 = var6.bind(var14)();
            var6 = new Array(0);
            var27 = var6;
            var25 = 0;
            var25 = arraySpread(var27, var26, var25);
            var8 = var13.keys;
            var26 = var8.bind(var13)();
            var27 = var6;
            var8 = arraySpread(var27, var26, var25);
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var28 = var8;
            var27 = var6;
            var6 = new var28[var9](var27, var26);
            var6 = var6 instanceof Object ? var6 : var8;
            var10 = undefined;
            var11 = var7.bind(var10)(var6);
            var7 = var11.bind(var10)();
            var6 = var7.done;
            var9 = undefined;
            var8 = undefined;
            if(var6) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var16 = var7.value;
            var6 = var14.get;
            var15 = var6.bind(var14)(var16);
            var6 = var13.get;
            var18 = var6.bind(var13)(var16);
            if(!(var1 != var18)) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            if(!(var1 != var15)) { _fun0006_ip = 59; continue _fun0006 }
case 60:
            var16 = var15.enabled;
            var6 = var18.enabled;
            if(!(var16 === var6)) { _fun0006_ip = 61; continue _fun0006 }
case 62:
            var6 = var18.enabled;
            var20 = !var6;
            var19 = var9;
            var6 = var8;
            if(var20) { _fun0006_ip = 63; continue _fun0006 }
case 64:
            var17 = var15.label;
            var16 = var18.label;
            var16 = var17 === var16;
            if(!var16) { _fun0006_ip = 65; continue _fun0006 }
case 66:
            var21 = _closure1_slot1;
            var17 = _closure1_slot2;
            var17 = var17[var5];
            var23 = var21.bind(var10)(var17);
            var22 = var23.isEqual;
            var21 = var15.startTime;
            var17 = var18.startTime;
            var16 = var22.bind(var23)(var21, var17);
case 65:
            if(!var16) { _fun0006_ip = 67; continue _fun0006 }
case 68:
            var21 = _closure1_slot1;
            var17 = _closure1_slot2;
            var17 = var17[var5];
            var23 = var21.bind(var10)(var17);
            var22 = var23.isEqual;
            var21 = var15.endTime;
            var17 = var18.endTime;
            var16 = var22.bind(var23)(var21, var17);
case 67:
            if(!var16) { _fun0006_ip = 69; continue _fun0006 }
case 70:
            var21 = _closure1_slot1;
            var17 = _closure1_slot2;
            var17 = var17[var5];
            var23 = var21.bind(var10)(var17);
            var22 = var23.isEqual;
            var26 = var15.days;
            var21 = new Array(0);
            var27 = var21;
            var25 = 0;
            var17 = arraySpread(var27, var26, var25);
            var17 = var21.sort;
            var21 = var17.bind(var21)();
            var26 = var18.days;
            var24 = new Array(0);
            var27 = var24;
            var17 = arraySpread(var27, var26, var25);
            var17 = var24.sort;
            var17 = var17.bind(var24)();
            var16 = var22.bind(var23)(var21, var17);
case 69:
            var20 = var16;
            var19 = var15;
            var6 = var18;
case 63:
            var17 = var19;
            var16 = var6;
            if(var20) { _fun0006_ip = 71; continue _fun0006 }
case 72:
            var20 = _closure1_slot3;
            var20 = var20.Updated;
            var20 = var12.bind(var10)(var20, var18);
            var21 = var2.push;
            var20 = {};
            var20['oldRule'] = var15;
            var20['newRule'] = var18;
            var20 = var21.bind(var2)(var20);
            var17 = var19;
            var16 = var6;
            _fun0006_ip = 71; continue _fun0006;
case 61:
            var19 = var18.enabled;
            var6 = _closure1_slot3;
            if(var19) { _fun0006_ip = 73; continue _fun0006 }
case 74:
            var19 = var6.Disabled;
            _fun0006_ip = 75; continue _fun0006;
case 73:
            var19 = var6.Enabled;
case 75:
            var20 = var18.enabled;
            var6 = var15;
            if(!var20) { _fun0006_ip = 76; continue _fun0006 }
case 77:
            var6 = var18;
case 76:
            var6 = var12.bind(var10)(var19, var6);
            var17 = var9;
            var16 = var8;
            _fun0006_ip = 71; continue _fun0006;
case 59:
            var6 = var18.enabled;
            var17 = var9;
            var16 = var8;
            if(!var6) { _fun0006_ip = 71; continue _fun0006 }
case 78:
            var6 = _closure1_slot3;
            var6 = var6.Created;
            var6 = var12.bind(var10)(var6, var18);
            var17 = var9;
            var16 = var8;
            _fun0006_ip = 71; continue _fun0006;
case 57:
            var6 = var1 != var15;
            if(!var6) { _fun0006_ip = 79; continue _fun0006 }
case 80:
            var6 = var15.enabled;
case 79:
            var17 = var9;
            var16 = var8;
            if(!var6) { _fun0006_ip = 71; continue _fun0006 }
case 81:
            var6 = _closure1_slot3;
            var6 = var6.Removed;
            var6 = var12.bind(var10)(var6, var15);
            var17 = var9;
            var16 = var8;
case 71:
            var15 = var11.bind(var10)();
            var6 = var15.done;
            var9 = var17;
            var8 = var16;
            var7 = var15;
            if(!var6) { _fun0006_ip = 56; continue _fun0006 }
case 55:
            var6 = _closure2_slot4;
            if(!(var5 !== var6)) { _fun0006_ip = 82; continue _fun0006 }
case 83:
            var7 = var2.every;
            var6 = function(arg1) {
                var1 = arg1;
                var4 = var1.oldRule;
                var3 = var1.newRule;
                var2 = _closure1_slot8;
                var1 = undefined;
                var1 = var2.bind(var1)(var4, var3);
                return var1;
            };
            var6 = var7.bind(var2)(var6);
            var8 = _closure2_slot6;
            var7 = 1;
            if(!(var7 === var8)) { _fun0006_ip = 84; continue _fun0006 }
case 85:
            var8 = _closure2_slot8;
            if(!(var5 === var8)) { _fun0006_ip = 84; continue _fun0006 }
case 86:
            if(var6) { _fun0006_ip = 87; continue _fun0006 }
case 84:
            var6 = _closure2_slot7;
            if(!(var7 === var6)) { _fun0006_ip = 88; continue _fun0006 }
case 89:
            var6 = _closure2_slot6;
            if(!(var5 === var6)) { _fun0006_ip = 88; continue _fun0006 }
case 90:
            var6 = _closure2_slot5;
            if(!(var6 >= var7)) { _fun0006_ip = 88; continue _fun0006 }
case 91:
            var6 = _closure2_slot8;
            if(!(var5 !== var6)) { _fun0006_ip = 92; continue _fun0006 }
case 88:
            var8 = _closure2_slot7;
            var6 = 2;
            if(!(var6 === var8)) { _fun0006_ip = 93; continue _fun0006 }
case 94:
            var6 = _closure2_slot6;
            if(!(var5 === var6)) { _fun0006_ip = 93; continue _fun0006 }
case 95:
            var6 = _closure2_slot5;
            if(!(var5 === var6)) { _fun0006_ip = 93; continue _fun0006 }
case 96:
            var6 = _closure2_slot8;
            if(!(var5 === var6)) { _fun0006_ip = 93; continue _fun0006 }
case 97:
            var6 = var2[var5];
            var5 = var2[var7];
            var9 = _closure1_slot8;
            var8 = var6.oldRule;
            var2 = var6.newRule;
            var2 = var9.bind(var10)(var8, var2);
            if(var2) { _fun0006_ip = 98; continue _fun0006 }
case 99:
            var9 = _closure1_slot8;
            var8 = var5.oldRule;
            var2 = var5.newRule;
            var2 = var9.bind(var10)(var8, var2);
            if(var2) { _fun0006_ip = 100; continue _fun0006 }
case 93:
            var2 = _closure2_slot4;
            if(!(!(var2 > var7))) { _fun0006_ip = 101; continue _fun0006 }
case 102:
            var2 = {};
            var7 = _closure2_slot0;
            var2['kind'] = var7;
            var7 = _closure2_slot1;
            var2['rule'] = var7;
            _fun0006_ip = 103; continue _fun0006;
case 101:
            var7 = {};
            var8 = _closure1_slot3;
            var8 = var8.Multiple;
            var7['kind'] = var8;
            var7['rule'] = var1;
            var2 = var7;
case 103:
            return var2;
case 100:
            var2 = {};
            var7 = _closure1_slot3;
            var7 = var7.Updated;
            var2['kind'] = var7;
            var6 = var6.newRule;
            var2['rule'] = var6;
            return var2;
case 98:
            var2 = {};
            var6 = _closure1_slot3;
            var6 = var6.Updated;
            var2['kind'] = var6;
            var5 = var5.newRule;
            var2['rule'] = var5;
            return var2;
case 92:
            var2 = {};
            var5 = _closure1_slot3;
            var5 = var5.Updated;
            var2['kind'] = var5;
            var5 = _closure2_slot3;
            var2['rule'] = var5;
            return var2;
case 87:
            var2 = {};
            var4 = _closure1_slot3;
            var4 = var4.Created;
            var2['kind'] = var4;
            var3 = _closure2_slot2;
            var2['rule'] = var3;
            return var2;
case 82:
            return var1;
        }
    };
    var3['diffSchedules'] = var4;
    var4 = function getRestrictedScheduleNotificationTitle(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var3 = var2.intl;
        var2 = var3.string;
        var4 = _closure1_slot5;
        var1 = arg1;
        var1 = var4[var1];
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getRestrictedScheduleNotificationTitle'] = var4;
    var4 = function getRestrictedScheduleNotificationSubtitle(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = arg1;
            var2 = null;
            var3 = var2 != var5;
            var1 = null;
            if(!var3) { _fun0008_ip = 104; continue _fun0008 }
case 32:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 3;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var3 = var4.formatRestrictedScheduleInAppSubtitle;
            var1 = var3.bind(var4)(var5);
case 104:
            if(!(var2 == var1)) { _fun0008_ip = 105; continue _fun0008 }
case 106:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 2;
            var3 = var7[var3];
            var6 = undefined;
            var3 = var4.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var5 = _closure1_slot1;
            var2 = 1;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2["8OlpoY"];
            var1 = var3.bind(var4)(var2);
case 105:
            return var1;
        }
    };
    var3['getRestrictedScheduleNotificationSubtitle'] = var4;
    var2 = function restrictedScheduleNotificationKey(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = 'restricted-schedule-';
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['restrictedScheduleNotificationKey'] = var2;
    return var1;
})();