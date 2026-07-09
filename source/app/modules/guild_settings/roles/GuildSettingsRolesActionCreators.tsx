// app/modules/guild_settings/roles/GuildSettingsRolesActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            var9 = _closure1_slot6;
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
            var7 = _closure1_slot6;
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
    var _closure1_slot5 = var1;
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
    var _closure1_slot6 = var1;
    var1 = function AsyncFromSyncIterator(arg1) {
        var1 = function AsyncFromSyncIteratorContinuation(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var1 = global;
                var5 = var1.Object;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                if(!(var3 === var4)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                var3 = var4.done;
                var _closure3_slot0 = var3;
                var6 = var1.Promise;
                var5 = var6.resolve;
                var3 = var4.value;
                var5 = var5.bind(var6)(var3);
                var3 = var5.then;
                var2 = function(arg1) {
                    var1 = {};
                    var2 = arg1;
                    var1['value'] = var2;
                    var2 = _closure3_slot0;
                    var1['done'] = var2;
                    return var1;
                };
                var2 = var3.bind(var5)(var2);
                return var2;
case 36:
                var3 = var1.Promise;
                var2 = var3.reject;
                var5 = var1.TypeError;
                var1 = ' is not an object.';
                var7 = var4 + var1;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var8 = var4;
                var1 = new var8[var5](var7, var6);
                var1 = var1 instanceof Object ? var1 : var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var _closure2_slot0 = var1;
        var3 = function AsyncFromSyncIterator(arg1) {
            var1 = arg1;
            var2 = this;
            var2['s'] = var1;
            var1 = var1.next;
            var2['n'] = var1;
            var1 = undefined;
            return var1;
        };
        _closure1_slot7 = var3;
        var2 = {'s': null, 'n': null};
        var5 = function next() {
            var4 = this;
            var3 = undefined;
            var1 = undefined;
            var2 = _closure2_slot0;
            var6 = var4.n;
            var5 = var6.apply;
            var4 = var4.s;
            var1 = arguments;
            var1 = var5.bind(var6)(var4, var1);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2['next'] = var5;
        var5 = function return(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var1 = undefined;
                var2 = var4.s;
                var6 = var2.return;
                if(!(var3 !== var6)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                var2 = _closure2_slot0;
                var5 = var6.apply;
                var4 = var4.s;
                var1 = arguments;
                var1 = var5.bind(var6)(var4, var1);
                var1 = var2.bind(var3)(var1);
                _fun0005_ip = 40; continue _fun0005;
case 38:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.resolve;
                var2 = {};
                var5 = arg1;
                var2['value'] = var5;
                var5 = true;
                var2['done'] = var5;
                var1 = var3.bind(var4)(var2);
case 40:
                return var1;
            }
        };
        var2['return'] = var5;
        var4 = function throw(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var1 = undefined;
                var2 = var4.s;
                var6 = var2.return;
                if(!(var3 !== var6)) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                var2 = _closure2_slot0;
                var5 = var6.apply;
                var4 = var4.s;
                var1 = arguments;
                var1 = var5.bind(var6)(var4, var1);
                var1 = var2.bind(var3)(var1);
                _fun0006_ip = 41; continue _fun0006;
case 38:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.reject;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
case 41:
                return var1;
            }
        };
        var2['throw'] = var4;
        var3['prototype'] = var2;
        var3 = _closure1_slot7;
        var1 = var3.prototype;
        var2 = Object.create(var1, {constructor: {value: var3}});
        var6 = arg1;
        var7 = var2;
        var1 = new var7[var3](var6, var5);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function _saveRoleSettings() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3, arg4, arg5) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4, arg5) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var2 = arguments[5];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                    var23 = arg1;
                    var20 = arg2;
                    var7 = arg3;
                    var15 = arg4;
                    var24 = arg5;
                    var4 = undefined;
                    if(!(var2 === var4)) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                    var2 = {};
case 44:
                    var5 = var2;
                    var21 = undefined;
                    var22 = undefined;
                    var27 = undefined;
                    var28 = undefined;
                    var29 = undefined;
                    var8 = undefined;
                    var17 = undefined;
                    var14 = undefined;
                    var25 = undefined;
                    var10 = undefined;
                    var26 = undefined;
                    var11 = undefined;
                    var13 = undefined;
                    var12 = undefined;
                    SaveGenerator(address=71);
case 46:
                    return var4;
case 47:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                    var18 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var9 = 2;
                    var16 = var16[var9];
                    var19 = var18.bind(var4)(var16);
                    var18 = var19.dispatch;
                    var16 = {};
                    var30 = 'GUILD_SETTINGS_ROLES_SUBMITTING';
                    var16['type'] = var30;
                    var16 = var18.bind(var19)(var16);
case 50: // try_start_8
                    var19 = var7;
                    var18 = null;
                    var19 = var18 != var19;
                    var16 = var19;
                    if(!var19) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                    var19 = var7;
                    var30 = var19.length;
                    var19 = 0;
                    var16 = var30 > var19;
case 51:
                    if(!var16) { _fun0007_ip = 22; continue _fun0007 }
case 53:
                    var19 = _closure1_slot1;
                    var30 = _closure1_slot2;
                    var16 = 3;
                    var16 = var30[var16];
                    var30 = var19.bind(var4)(var16);
                    var19 = var30.batchRoleUpdate;
                    var16 = var23;
                    var7 = var19.bind(var30)(var16, var7);
                    SaveGenerator(address=196);
case 54:
                    return var7;
case 55:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=15);
                    if(var16) { _fun0007_ip = 56; continue _fun0007 }
case 22:
                    var19 = _closure1_slot5;
                    var16 = var20;
                    if(!(var18 == var16)) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                    var16 = new Array(0);
                    _fun0007_ip = 59; continue _fun0007;
case 57:
                    var36 = var20;
                    var31 = new Array(0);
                    var35 = 0;
                    var37 = var31;
                    var20 = arraySpread(var37, var36, var35);
                    var30 = var31.sort;
                    var20 = function(arg1, arg2) {
                        var1 = global;
                        var3 = var1.Number;
                        var2 = arg1;
                        var4 = var2.name;
                        var2 = var4.trim;
                        var2 = var2.bind(var4)();
                        var4 = undefined;
                        var5 = '';
                        var2 = var5 !== var2;
                        var2 = var3.bind(var4)(var2);
                        var3 = var1.Number;
                        var1 = arg2;
                        var6 = var1.name;
                        var1 = var6.trim;
                        var1 = var1.bind(var6)();
                        var1 = var5 !== var1;
                        var1 = var3.bind(var4)(var1);
                        var1 = var2 - var1;
                        return var1;
                    };
                    var16 = var30.bind(var31)(var20);
case 59:
                    var16 = var19.bind(var4)(var16);
                    var22 = var16;
                    var16 = var16.bind(var4)();
                    var21 = var16;
                    var16 = var16.done;
                    var20 = 3;
                    if(var16) { _fun0007_ip = 60; continue _fun0007 }
case 61:
                    var16 = var21;
                    var33 = var16.value;
                    var29 = var33;
                    var19 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var16 = var16[var20];
                    var32 = var19.bind(var4)(var16);
                    var31 = var32.updateRole;
                    var30 = var23;
                    var19 = var33.id;
                    var16 = {};
                    var34 = var33.name;
                    var16['name'] = var34;
                    var33 = var33.description;
                    var27 = var33;
                    var34 = var18 != var33;
                    var33 = undefined;
                    if(!var34) { _fun0007_ip = 62; continue _fun0007 }
case 63:
                    var33 = var27;
case 62:
                    var16['description'] = var33;
                    var33 = var29;
                    var34 = var33.permissions;
                    var16['permissions'] = var34;
                    var34 = var33.color;
                    var16['color'] = var34;
                    var33 = var33.colors;
                    var28 = var33;
                    var34 = var18 != var33;
                    var33 = undefined;
                    if(!var34) { _fun0007_ip = 64; continue _fun0007 }
case 65:
                    var33 = var28;
case 64:
                    var16['colors'] = var33;
                    var33 = var29;
                    var34 = var33.hoist;
                    var16['hoist'] = var34;
                    var34 = var33.mentionable;
                    var16['mentionable'] = var34;
                    var34 = var33.icon;
                    var16['icon'] = var34;
                    var33 = var33.unicodeEmoji;
                    var16['unicodeEmoji'] = var33;
                    var16 = var31.bind(var32)(var30, var19, var16);
                    SaveGenerator(address=467);
case 66:
                    return var16;
case 67:
                    ResumeGenerator(result_out_reg=15, return_bool_out_reg=18);
                    if(var19) { _fun0007_ip = 68; continue _fun0007 }
case 69:
                    var19 = var22;
                    var19 = var19.bind(var4)();
                    var21 = var19;
                    var19 = var19.done;
                    if(var19) { _fun0007_ip = 60; continue _fun0007 }
case 70:
                    _fun0007_ip = 61; continue _fun0007;
case 68: // try_end8
                    return var16;
case 60: // try_start_9
                    var16 = var24;
                    if(!(var18 != var16)) { _fun0007_ip = 71; continue _fun0007 }
case 72:
                    var16 = var15;
                    if(!(var18 != var16)) { _fun0007_ip = 71; continue _fun0007 }
case 73:
                    var17 = false;
                    var14 = false;
case 74: // try_start_0 // try_start_1
                    var20 = var15;
                    var15 = global;
                    var16 = var15.Symbol;
                    var19 = 'undefined';
                    var16 = typeof var16;
                    var32 = undefined;
                    var31 = undefined;
                    if(!(var19 !== var16)) { _fun0007_ip = 75; continue _fun0007 }
case 76:
                    var16 = var15.Symbol;
                    var32 = var16.asyncIterator;
                    var16 = var15.Symbol;
                    var31 = var16.iterator;
case 75:
                    var30 = 1;
                    var29 = '@@asyncIterator';
                    var28 = '@@iterator';
                    var27 = undefined;
case 77:
                    if(!var32) { _fun0007_ip = 78; continue _fun0007 }
case 79:
                    var19 = var20[var32];
                    var27 = var19;
                    if(!(var18 == var27)) { _fun0007_ip = 80; continue _fun0007 }
case 78:
                    if(!var31) { _fun0007_ip = 81; continue _fun0007 }
case 82:
                    var16 = var20[var31];
                    var27 = var16;
                    if(!(var18 == var27)) { _fun0007_ip = 83; continue _fun0007 }
case 81:
                    var21 = parseFloat(var30);
                    var30 = var21 - 1;
                    var32 = var29;
                    var31 = var28;
                    if(var21) { _fun0007_ip = 77; continue _fun0007 }
case 84:
                    var27 = var15.TypeError;
                    var15 = var27.prototype;
                    var21 = Object.create(var15, {constructor: {value: var27}});
                    var37 = 'Object is not async iterable';
                    var38 = var21;
                    var15 = new var38[var27](var37, var36);
                    var15 = var15 instanceof Object ? var15 : var21;
                    throw var15;
case 83:
                    var21 = _closure1_slot7;
                    var15 = var16.call;
                    var37 = var15.bind(var16)(var20);
                    var16 = var21.prototype;
                    var16 = Object.create(var16, {constructor: {value: var21}});
                    var38 = var16;
                    var15 = new var38[var21](var37, var36);
                    var16 = var15 instanceof Object ? var15 : var16;
                    _fun0007_ip = 85; continue _fun0007;
case 80:
                    var15 = var19.call;
                    var16 = var15.bind(var19)(var20);
case 85:
                    var10 = var16;
                    var15 = var16.next;
                    var16 = var15.bind(var16)();
                    SaveGenerator(address=726);
case 86:
                    return var16;
case 87:
                    ResumeGenerator(result_out_reg=15, return_bool_out_reg=14);
                    if(var15) { _fun0007_ip = 88; continue _fun0007 }
case 89:
                    var25 = var16;
                    var15 = var16.done;
                    var15 = !var15;
                    var17 = var15;
                    var21 = 4;
                    if(!var15) { _fun0007_ip = 90; continue _fun0007 }
case 91:
                    var15 = var25;
                    var28 = var15.value;
                    var19 = var24;
                    var15 = var19.get;
                    var15 = var15.bind(var19)(var28);
                    var26 = var15;
                    var20 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var19 = var19[var21];
                    var27 = var20.bind(var4)(var19);
                    var20 = var27.putRoleConnectionsConfigurations;
                    var19 = var23;
                    if(!(var18 == var15)) { _fun0007_ip = 92; continue _fun0007 }
case 93:
                    var15 = new Array(0);
                    _fun0007_ip = 94; continue _fun0007;
case 92:
                    var15 = var26;
case 94:
                    var19 = var20.bind(var27)(var19, var28, var15);
                    SaveGenerator(address=832);
case 95:
                    return var19;
case 96:
                    ResumeGenerator(result_out_reg=18, return_bool_out_reg=14);
                    if(var15) { _fun0007_ip = 97; continue _fun0007 }
case 98:
                    var17 = false;
                    var20 = var10;
                    var15 = var20.next;
                    var20 = var15.bind(var20)();
                    SaveGenerator(address=859);
case 99:
                    return var20;
case 100:
                    ResumeGenerator(result_out_reg=19, return_bool_out_reg=14);
                    if(var15) { _fun0007_ip = 101; continue _fun0007 }
case 102:
                    var25 = var20;
                    var15 = var20.done;
                    var15 = !var15;
                    var17 = var15;
                    if(var15) { _fun0007_ip = 91; continue _fun0007 }
case 90: // try_end0
                    _fun0007_ip = 103; continue _fun0007;
case 101: // try_start_2 // try_end1
                    var21 = var17;
                    var15 = var21;
                    if(!var21) { _fun0007_ip = 104; continue _fun0007 }
case 105:
                    var21 = var10;
                    var21 = var21.return;
                    var15 = var18 != var21;
case 104:
                    if(!var15) { _fun0007_ip = 106; continue _fun0007 }
case 107:
                    var21 = var10;
                    var15 = var21.return;
                    var15 = var15.bind(var21)();
                    SaveGenerator(address=929);
case 108:
                    return var15;
case 109:
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=20);
                    if(var21) { _fun0007_ip = 110; continue _fun0007 }
case 106: // try_end2
                    var21 = var14;
                    if(var21) { _fun0007_ip = 111; continue _fun0007 }
case 112: // try_end9
                    return var20;
case 111: // try_start_10
                    var20 = var8;
                    throw var20;
case 110:
                    var20 = var14;
                    if(var20) { _fun0007_ip = 113; continue _fun0007 }
case 114: // try_end10
                    return var15;
case 113: // try_start_11
                    var15 = var8;
                    throw var15;
case 115: // catch_target2
                    CatchBlockStart(arg_register=14);
                    var20 = var14;
                    if(var20) { _fun0007_ip = 116; continue _fun0007 }
case 117:
                    throw var15;
case 116:
                    var15 = var8;
                    throw var15;
case 97: // try_start_3
                    var20 = var17;
                    var15 = var20;
                    if(!var20) { _fun0007_ip = 118; continue _fun0007 }
case 119:
                    var20 = var10;
                    var20 = var20.return;
                    var15 = var18 != var20;
case 118:
                    if(!var15) { _fun0007_ip = 120; continue _fun0007 }
case 121:
                    var20 = var10;
                    var15 = var20.return;
                    var15 = var15.bind(var20)();
                    SaveGenerator(address=1020);
case 122:
                    return var15;
case 123:
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=19);
                    if(var20) { _fun0007_ip = 124; continue _fun0007 }
case 120: // try_end3
                    var20 = var14;
                    if(var20) { _fun0007_ip = 125; continue _fun0007 }
case 126: // try_end11
                    return var19;
case 125: // try_start_12
                    var19 = var8;
                    throw var19;
case 124:
                    var19 = var14;
                    if(var19) { _fun0007_ip = 127; continue _fun0007 }
case 128: // try_end12
                    return var15;
case 127: // try_start_13
                    var15 = var8;
                    throw var15;
case 129: // catch_target3
                    CatchBlockStart(arg_register=14);
                    var19 = var14;
                    if(var19) { _fun0007_ip = 130; continue _fun0007 }
case 131:
                    throw var15;
case 130:
                    var15 = var8;
                    throw var15;
case 88: // try_start_4
                    var19 = var17;
                    var15 = var19;
                    if(!var19) { _fun0007_ip = 132; continue _fun0007 }
case 133:
                    var19 = var10;
                    var19 = var19.return;
                    var15 = var18 != var19;
case 132:
                    if(!var15) { _fun0007_ip = 134; continue _fun0007 }
case 135:
                    var19 = var10;
                    var15 = var19.return;
                    var15 = var15.bind(var19)();
                    SaveGenerator(address=1111);
case 136:
                    return var15;
case 137:
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=18);
                    if(var19) { _fun0007_ip = 138; continue _fun0007 }
case 134: // try_end4
                    var19 = var14;
                    if(var19) { _fun0007_ip = 139; continue _fun0007 }
case 140: // try_end13
                    return var16;
case 139: // try_start_14
                    var16 = var8;
                    throw var16;
case 138:
                    var16 = var14;
                    if(var16) { _fun0007_ip = 141; continue _fun0007 }
case 142: // try_end14
                    return var15;
case 141: // try_start_15
                    var15 = var8;
                    throw var15;
case 143: // catch_target4
                    CatchBlockStart(arg_register=14);
                    var16 = var14;
                    if(var16) { _fun0007_ip = 144; continue _fun0007 }
case 145:
                    throw var15;
case 144:
                    var15 = var8;
                    throw var15;
case 146: // try_start_5 // catch_target0
                    CatchBlockStart(arg_register=7);
                    var14 = true;
case 103: // try_start_6 // try_end5
                    var16 = var17;
                    var15 = var16;
                    if(!var16) { _fun0007_ip = 147; continue _fun0007 }
case 148:
                    var16 = var10;
                    var16 = var16.return;
                    var15 = var18 != var16;
case 147:
                    if(!var15) { _fun0007_ip = 149; continue _fun0007 }
case 150:
                    var16 = var10;
                    var15 = var16.return;
                    var15 = var15.bind(var16)();
                    SaveGenerator(address=1206);
case 151:
                    return var15;
case 152:
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=15);
                    if(var16) { _fun0007_ip = 153; continue _fun0007 }
case 149: // try_end6
                    var16 = var14;
                    if(var16) { _fun0007_ip = 154; continue _fun0007 }
case 71:
                    var19 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var16 = var16[var9];
                    var20 = var19.bind(var4)(var16);
                    var19 = var20.dispatch;
                    var16 = {};
                    var21 = 'GUILD_SETTINGS_ROLES_SAVE_SUCCESS';
                    var16['type'] = var21;
                    var16 = var19.bind(var20)(var16);
case 155: // try_end15
                    _fun0007_ip = 156; continue _fun0007;
case 154: // try_start_16
                    var16 = var8;
                    throw var16;
case 153:
                    var16 = var14;
                    if(var16) { _fun0007_ip = 157; continue _fun0007 }
case 158: // try_end16
                    return var15;
case 157: // try_start_17
                    var15 = var8;
                    throw var15;
case 159: // catch_target6
                    CatchBlockStart(arg_register=14);
                    var16 = var14;
                    if(var16) { _fun0007_ip = 160; continue _fun0007 }
case 161:
                    throw var15;
case 160:
                    var15 = var8;
                    throw var15;
case 162: // catch_target1 // catch_target5
                    CatchBlockStart(arg_register=14);
case 163: // try_start_7
                    var16 = var17;
                    if(!var17) { _fun0007_ip = 164; continue _fun0007 }
case 165:
                    var17 = var10;
                    var17 = var17.return;
                    var16 = var18 != var17;
case 164:
                    if(!var16) { _fun0007_ip = 166; continue _fun0007 }
case 167:
                    var16 = var10;
                    var10 = var16.return;
                    var10 = var10.bind(var16)();
                    SaveGenerator(address=1337);
case 168:
                    return var10;
case 169:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=15);
                    if(var16) { _fun0007_ip = 170; continue _fun0007 }
case 166: // try_end7
                    var16 = var14;
                    if(var16) { _fun0007_ip = 171; continue _fun0007 }
case 172:
                    throw var15;
case 171:
                    var15 = var8;
                    throw var15;
case 170:
                    var15 = var14;
                    if(var15) { _fun0007_ip = 173; continue _fun0007 }
case 174: // try_end17
                    return var10;
case 173: // try_start_18
                    var10 = var8;
                    throw var10;
case 175: // catch_target7
                    CatchBlockStart(arg_register=9);
                    if(var14) { _fun0007_ip = 176; continue _fun0007 }
case 177:
                    throw var10;
case 176:
                    throw var8;
case 56: // try_end18
                    return var7;
case 178: // catch_target8 // catch_target9 // catch_target10 // catch_target11 // catch_target12 // catch_target13 // catch_target14 // catch_target15 // catch_target16 // catch_target17 // catch_target18
                    CatchBlockStart(arg_register=9);
                    var3 = var10;
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var9];
                    var9 = var8.bind(var4)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var14 = 'GUILD_SETTINGS_ROLES_SAVE_FAIL';
                    var7['type'] = var14;
                    var10 = var10.body;
                    var13 = var10;
                    var14 = null;
                    var15 = var14 == var10;
                    var10 = undefined;
                    if(var15) { _fun0007_ip = 179; continue _fun0007 }
case 180:
                    var10 = var13.message;
case 179:
                    var11 = var10;
                    if(!(var14 == var10)) { _fun0007_ip = 181; continue _fun0007 }
case 182:
                    var10 = global;
                    var15 = var10.Object;
                    var13 = var15.values;
                    var10 = var3;
                    var10 = var10.body;
                    var10 = var13.bind(var15)(var10);
                    var13 = 0;
                    var10 = var10[var13];
                    var12 = var10;
                    var14 = var14 == var10;
                    var10 = undefined;
                    if(var14) { _fun0007_ip = 183; continue _fun0007 }
case 184:
                    var10 = var12[var13];
case 183:
                    _fun0007_ip = 185; continue _fun0007;
case 181:
                    var10 = var11;
case 185:
                    var7['message'] = var10;
                    var7 = var8.bind(var9)(var7);
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 5;
                    var7 = var9[var7];
                    var7 = var8.bind(var4)(var7);
                    var8 = var7.ComponentDispatch;
                    var7 = var8.dispatch;
                    var6 = _closure1_slot4;
                    var6 = var6.EMPHASIZE_NOTICE;
                    var6 = var7.bind(var8)(var6);
                    var5 = var5.throwErr;
                    if(var5) { _fun0007_ip = 186; continue _fun0007 }
case 156:
                    return var4;
case 186:
                    throw var3;
case 48:
                    return var2;
case 42:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.ComponentActions;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/roles/GuildSettingsRolesActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function updateRoleSort(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_ROLES_SORT_UPDATE';
        var2['type'] = var5;
        var5 = arg1;
        var2['roles'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateRoleSort'] = var4;
    var4 = function init() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_ROLES_INIT';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['init'] = var4;
    var4 = function discardSectionChanges(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_ROLES_DISCARD_SECTION_CHANGES';
        var2['type'] = var5;
        var5 = arg1;
        var2['id'] = var5;
        var5 = arg2;
        var2['section'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['discardSectionChanges'] = var4;
    var4 = function discardConnectionsChanges(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_ROLES_DISCARD_CONNECTIONS_CHANGES';
        var2['type'] = var5;
        var5 = arg1;
        var2['id'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['discardConnectionsChanges'] = var4;
    var4 = function commitSectionChanges(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_ROLES_COMMIT_SECTION_CHANGES';
        var2['type'] = var5;
        var5 = arg1;
        var2['id'] = var5;
        var5 = arg2;
        var2['section'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['commitSectionChanges'] = var4;
    var4 = function updateRolePermissions(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS';
        var2['type'] = var5;
        var5 = arg1;
        var2['id'] = var5;
        var5 = arg2;
        var2['flag'] = var5;
        var5 = arg3;
        var2['allow'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateRolePermissions'] = var4;
    var4 = function updateRolePermissionSet(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET';
        var2['type'] = var5;
        var5 = arg1;
        var2['id'] = var5;
        var5 = arg2;
        var2['permissions'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateRolePermissionSet'] = var4;
    var4 = function clearRolePermissions(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS';
        var2['type'] = var5;
        var5 = arg1;
        var2['id'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearRolePermissions'] = var4;
    var4 = function updateRoleName(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_ROLES_UPDATE_NAME';
        var2['type'] = var5;
        var5 = arg1;
        var2['id'] = var5;
        var5 = arg2;
        var2['name'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateRoleName'] = var4;
    var4 = function updateRoleDescription(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION';
        var2['type'] = var5;
        var5 = arg1;
        var2['id'] = var5;
        var5 = arg2;
        var2['description'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateRoleDescription'] = var4;
    var4 = function updateRoleColor(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_ROLES_UPDATE_COLOR';
        var2['type'] = var5;
        var5 = arg1;
        var2['id'] = var5;
        var5 = arg2;
        var2['color'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateRoleColor'] = var4;
    var4 = function updateRoleColors(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_ROLES_UPDATE_COLORS';
        var2['type'] = var5;
        var5 = arg1;
        var2['id'] = var5;
        var5 = arg2;
        var2['colors'] = var5;
        var5 = arg3;
        var2['currentStyle'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateRoleColors'] = var4;
    var4 = function updateRoleStyles(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE';
        var2['type'] = var5;
        var5 = arg1;
        var2['id'] = var5;
        var5 = arg2;
        var2['currentStyle'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateRoleStyles'] = var4;
    var4 = function toggleRoleSettings(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_ROLES_UPDATE_SETTINGS';
        var2['type'] = var5;
        var5 = arg1;
        var2['id'] = var5;
        var5 = arg2;
        var2['hoist'] = var5;
        var5 = arg3;
        var2['mentionable'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['toggleRoleSettings'] = var4;
    var4 = function updateRoleIcon(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON';
        var2['type'] = var5;
        var5 = arg1;
        var2['id'] = var5;
        var5 = arg2;
        var2['icon'] = var5;
        var5 = arg3;
        var2['unicodeEmoji'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateRoleIcon'] = var4;
    var4 = function updateRoleConnectionConfigurations(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS';
        var2['type'] = var5;
        var5 = arg1;
        var2['roleId'] = var5;
        var5 = arg2;
        var2['roleConnectionConfigurations'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateRoleConnectionConfigurations'] = var4;
    var2 = function saveRoleSettings() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['saveRoleSettings'] = var2;
    return var1;
})();