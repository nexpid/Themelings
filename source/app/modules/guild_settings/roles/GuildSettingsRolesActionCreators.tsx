// app/modules/guild_settings/roles/GuildSettingsRolesActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function AsyncFromSyncIterator(arg1) {
        var1 = function AsyncFromSyncIteratorContinuation(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = arg1;
                var1 = global;
                var5 = var1.Object;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                if(!(var3 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
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
case 2:
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
        _closure1_slot4 = var3;
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
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var1 = undefined;
                var2 = var4.s;
                var6 = var2.return;
                if(!(var3 !== var6)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = _closure2_slot0;
                var5 = var6.apply;
                var4 = var4.s;
                var1 = arguments;
                var1 = var5.bind(var6)(var4, var1);
                var1 = var2.bind(var3)(var1);
                _fun0002_ip = 6; continue _fun0002;
case 4:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.resolve;
                var2 = {};
                var5 = arg1;
                var2['value'] = var5;
                var5 = true;
                var2['done'] = var5;
                var1 = var3.bind(var4)(var2);
case 6:
                return var1;
            }
        };
        var2['return'] = var5;
        var4 = function throw(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var1 = undefined;
                var2 = var4.s;
                var6 = var2.return;
                if(!(var3 !== var6)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                var2 = _closure2_slot0;
                var5 = var6.apply;
                var4 = var4.s;
                var1 = arguments;
                var1 = var5.bind(var6)(var4, var1);
                var1 = var2.bind(var3)(var1);
                _fun0003_ip = 7; continue _fun0003;
case 4:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.reject;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
case 7:
                return var1;
            }
        };
        var2['throw'] = var4;
        var3['prototype'] = var2;
        var3 = _closure1_slot4;
        var1 = var3.prototype;
        var2 = Object.create(var1, {constructor: {value: var3}});
        var6 = arg1;
        var7 = var2;
        var1 = new var7[var3](var6, var5);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = function _saveRoleSettings() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3, arg4, arg5) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4, arg5) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var2 = arguments[5];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var23 = arg1;
                    var22 = arg2;
                    var7 = arg3;
                    var15 = arg4;
                    var24 = arg5;
                    var4 = undefined;
                    if(!(var2 === var4)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var2 = {};
case 10:
                    var5 = var2;
                    var27 = undefined;
                    var28 = undefined;
                    var29 = undefined;
                    var11 = undefined;
                    var17 = undefined;
                    var14 = undefined;
                    var25 = undefined;
                    var13 = undefined;
                    var26 = undefined;
                    var10 = undefined;
                    var12 = undefined;
                    SaveGenerator(address=65);
case 12:
                    return var4;
case 13:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 14; continue _fun0004 }
case 2:
                    var16 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var8 = 1;
                    var9 = var9[var8];
                    var18 = var16.bind(var4)(var9);
                    var16 = var18.dispatch;
                    var9 = {};
                    var19 = 'GUILD_SETTINGS_ROLES_SUBMITTING';
                    var9['type'] = var19;
                    var9 = var16.bind(var18)(var9);
case 15: // try_start_8
                    var16 = var7;
                    var18 = null;
                    var16 = var18 != var16;
                    var9 = var16;
                    if(!var16) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var16 = var7;
                    var19 = var16.length;
                    var16 = 0;
                    var9 = var19 > var16;
case 16:
                    if(!var9) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var16 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var9 = 2;
                    var9 = var19[var9];
                    var19 = var16.bind(var4)(var9);
                    var16 = var19.batchRoleUpdate;
                    var9 = var23;
                    var7 = var16.bind(var19)(var9, var7);
                    SaveGenerator(address=190);
case 20:
                    return var7;
case 21:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                    if(var9) { _fun0004_ip = 22; continue _fun0004 }
case 18:
                    var9 = var22;
                    if(!(var18 != var9)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var9 = var22;
                    var9 = var9.length;
                    var21 = 0;
                    var20 = 2;
                    var19 = '';
                    if(!(var9 > var21)) { _fun0004_ip = 23; continue _fun0004 }
case 25:
                    var16 = var22;
                    var9 = var16.pop;
                    var16 = var9.bind(var16)();
                    var29 = var16;
                    var16 = var18 != var16;
                    var9 = var16;
                    if(!var16) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var16 = var29;
                    var16 = var16.name;
                    var9 = var19 !== var16;
case 26:
                    if(!var9) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var16 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var20];
                    var32 = var16.bind(var4)(var9);
                    var31 = var32.updateRole;
                    var30 = var23;
                    var33 = var29;
                    var16 = var33.id;
                    var9 = {};
                    var34 = var33.name;
                    var9['name'] = var34;
                    var33 = var33.description;
                    var27 = var33;
                    var34 = var18 != var33;
                    var33 = undefined;
                    if(!var34) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var33 = var27;
case 30:
                    var9['description'] = var33;
                    var33 = var29;
                    var34 = var33.permissions;
                    var9['permissions'] = var34;
                    var34 = var33.color;
                    var9['color'] = var34;
                    var33 = var33.colors;
                    var28 = var33;
                    var34 = var18 != var33;
                    var33 = undefined;
                    if(!var34) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                    var33 = var28;
case 32:
                    var9['colors'] = var33;
                    var33 = var29;
                    var34 = var33.hoist;
                    var9['hoist'] = var34;
                    var34 = var33.mentionable;
                    var9['mentionable'] = var34;
                    var34 = var33.icon;
                    var9['icon'] = var34;
                    var33 = var33.unicodeEmoji;
                    var9['unicodeEmoji'] = var33;
                    var9 = var31.bind(var32)(var30, var16, var9);
                    SaveGenerator(address=449);
case 34:
                    return var9;
case 35:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=15);
                    if(var16) { _fun0004_ip = 36; continue _fun0004 }
case 28:
                    var16 = var22;
                    if(!(var18 != var16)) { _fun0004_ip = 23; continue _fun0004 }
case 37:
                    var16 = var22;
                    var16 = var16.length;
                    if(var16 > var21) { _fun0004_ip = 25; continue _fun0004 }
case 23:
                    var16 = var24;
                    if(!(var18 != var16)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                    var16 = var15;
                    if(!(var18 != var16)) { _fun0004_ip = 38; continue _fun0004 }
case 40:
                    var17 = false;
                    var14 = false;
case 41: // try_start_0 // try_start_1
                    var20 = var15;
                    var15 = global;
                    var16 = var15.Symbol;
                    var19 = 'undefined';
                    var16 = typeof var16;
                    var32 = undefined;
                    var31 = undefined;
                    if(!(var19 !== var16)) { _fun0004_ip = 42; continue _fun0004 }
case 43:
                    var16 = var15.Symbol;
                    var32 = var16.asyncIterator;
                    var16 = var15.Symbol;
                    var31 = var16.iterator;
case 42:
                    var30 = '@@asyncIterator';
                    var29 = '@@iterator';
                    var28 = undefined;
                    var27 = var8;
case 44:
                    if(!var32) { _fun0004_ip = 45; continue _fun0004 }
case 46:
                    var19 = var20[var32];
                    var28 = var19;
                    if(!(var18 == var28)) { _fun0004_ip = 47; continue _fun0004 }
case 45:
                    if(!var31) { _fun0004_ip = 48; continue _fun0004 }
case 49:
                    var16 = var20[var31];
                    var28 = var16;
                    if(!(var18 == var28)) { _fun0004_ip = 50; continue _fun0004 }
case 48:
                    var21 = parseFloat(var27);
                    var27 = var21 - 1;
                    var32 = var30;
                    var31 = var29;
                    if(var21) { _fun0004_ip = 44; continue _fun0004 }
case 51:
                    var27 = var15.TypeError;
                    var15 = var27.prototype;
                    var21 = Object.create(var15, {constructor: {value: var27}});
                    var37 = 'Object is not async iterable';
                    var38 = var21;
                    var15 = new var38[var27](var37, var36);
                    var15 = var15 instanceof Object ? var15 : var21;
                    throw var15;
case 50:
                    var21 = _closure1_slot4;
                    var15 = var16.call;
                    var37 = var15.bind(var16)(var20);
                    var16 = var21.prototype;
                    var16 = Object.create(var16, {constructor: {value: var21}});
                    var38 = var16;
                    var15 = new var38[var21](var37, var36);
                    var16 = var15 instanceof Object ? var15 : var16;
                    _fun0004_ip = 52; continue _fun0004;
case 47:
                    var15 = var19.call;
                    var16 = var15.bind(var19)(var20);
case 52:
                    var13 = var16;
                    var15 = var16.next;
                    var16 = var15.bind(var16)();
                    SaveGenerator(address=706);
case 53:
                    return var16;
case 54:
                    ResumeGenerator(result_out_reg=15, return_bool_out_reg=14);
                    if(var15) { _fun0004_ip = 55; continue _fun0004 }
case 56:
                    var25 = var16;
                    var15 = var16.done;
                    var15 = !var15;
                    var17 = var15;
                    var21 = 3;
                    if(!var15) { _fun0004_ip = 57; continue _fun0004 }
case 58:
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
                    if(!(var18 == var15)) { _fun0004_ip = 59; continue _fun0004 }
case 60:
                    var15 = new Array(0);
                    _fun0004_ip = 61; continue _fun0004;
case 59:
                    var15 = var26;
case 61:
                    var19 = var20.bind(var27)(var19, var28, var15);
                    SaveGenerator(address=812);
case 62:
                    return var19;
case 63:
                    ResumeGenerator(result_out_reg=18, return_bool_out_reg=14);
                    if(var15) { _fun0004_ip = 64; continue _fun0004 }
case 65:
                    var17 = false;
                    var20 = var13;
                    var15 = var20.next;
                    var20 = var15.bind(var20)();
                    SaveGenerator(address=839);
case 66:
                    return var20;
case 67:
                    ResumeGenerator(result_out_reg=19, return_bool_out_reg=14);
                    if(var15) { _fun0004_ip = 68; continue _fun0004 }
case 69:
                    var25 = var20;
                    var15 = var20.done;
                    var15 = !var15;
                    var17 = var15;
                    if(var15) { _fun0004_ip = 58; continue _fun0004 }
case 57: // try_end0
                    _fun0004_ip = 70; continue _fun0004;
case 68: // try_start_2 // try_end1
                    var21 = var17;
                    var15 = var21;
                    if(!var21) { _fun0004_ip = 71; continue _fun0004 }
case 72:
                    var21 = var13;
                    var21 = var21.return;
                    var15 = var18 != var21;
case 71:
                    if(!var15) { _fun0004_ip = 73; continue _fun0004 }
case 74:
                    var21 = var13;
                    var15 = var21.return;
                    var15 = var15.bind(var21)();
                    SaveGenerator(address=909);
case 75:
                    return var15;
case 76:
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=20);
                    if(var21) { _fun0004_ip = 77; continue _fun0004 }
case 73: // try_end2
                    var21 = var14;
                    if(var21) { _fun0004_ip = 78; continue _fun0004 }
case 79: // try_end8
                    return var20;
case 78: // try_start_9
                    var20 = var11;
                    throw var20;
case 77:
                    var20 = var14;
                    if(var20) { _fun0004_ip = 80; continue _fun0004 }
case 81: // try_end9
                    return var15;
case 80: // try_start_10
                    var15 = var11;
                    throw var15;
case 82: // catch_target2
                    CatchBlockStart(arg_register=14);
                    var20 = var14;
                    if(var20) { _fun0004_ip = 83; continue _fun0004 }
case 84:
                    throw var15;
case 83:
                    var15 = var11;
                    throw var15;
case 64: // try_start_3
                    var20 = var17;
                    var15 = var20;
                    if(!var20) { _fun0004_ip = 85; continue _fun0004 }
case 86:
                    var20 = var13;
                    var20 = var20.return;
                    var15 = var18 != var20;
case 85:
                    if(!var15) { _fun0004_ip = 87; continue _fun0004 }
case 88:
                    var20 = var13;
                    var15 = var20.return;
                    var15 = var15.bind(var20)();
                    SaveGenerator(address=1000);
case 89:
                    return var15;
case 90:
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=19);
                    if(var20) { _fun0004_ip = 91; continue _fun0004 }
case 87: // try_end3
                    var20 = var14;
                    if(var20) { _fun0004_ip = 92; continue _fun0004 }
case 93: // try_end10
                    return var19;
case 92: // try_start_11
                    var19 = var11;
                    throw var19;
case 91:
                    var19 = var14;
                    if(var19) { _fun0004_ip = 94; continue _fun0004 }
case 95: // try_end11
                    return var15;
case 94: // try_start_12
                    var15 = var11;
                    throw var15;
case 96: // catch_target3
                    CatchBlockStart(arg_register=14);
                    var19 = var14;
                    if(var19) { _fun0004_ip = 97; continue _fun0004 }
case 98:
                    throw var15;
case 97:
                    var15 = var11;
                    throw var15;
case 55: // try_start_4
                    var19 = var17;
                    var15 = var19;
                    if(!var19) { _fun0004_ip = 99; continue _fun0004 }
case 100:
                    var19 = var13;
                    var19 = var19.return;
                    var15 = var18 != var19;
case 99:
                    if(!var15) { _fun0004_ip = 101; continue _fun0004 }
case 102:
                    var19 = var13;
                    var15 = var19.return;
                    var15 = var15.bind(var19)();
                    SaveGenerator(address=1091);
case 103:
                    return var15;
case 104:
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=18);
                    if(var19) { _fun0004_ip = 105; continue _fun0004 }
case 101: // try_end4
                    var19 = var14;
                    if(var19) { _fun0004_ip = 106; continue _fun0004 }
case 107: // try_end12
                    return var16;
case 106: // try_start_13
                    var16 = var11;
                    throw var16;
case 105:
                    var16 = var14;
                    if(var16) { _fun0004_ip = 108; continue _fun0004 }
case 109: // try_end13
                    return var15;
case 108: // try_start_14
                    var15 = var11;
                    throw var15;
case 110: // catch_target4
                    CatchBlockStart(arg_register=14);
                    var16 = var14;
                    if(var16) { _fun0004_ip = 111; continue _fun0004 }
case 112:
                    throw var15;
case 111:
                    var15 = var11;
                    throw var15;
case 113: // try_start_5 // catch_target0
                    CatchBlockStart(arg_register=10);
                    var14 = true;
case 70: // try_start_6 // try_end5
                    var16 = var17;
                    var15 = var16;
                    if(!var16) { _fun0004_ip = 114; continue _fun0004 }
case 115:
                    var16 = var13;
                    var16 = var16.return;
                    var15 = var18 != var16;
case 114:
                    if(!var15) { _fun0004_ip = 116; continue _fun0004 }
case 117:
                    var16 = var13;
                    var15 = var16.return;
                    var15 = var15.bind(var16)();
                    SaveGenerator(address=1186);
case 118:
                    return var15;
case 119:
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=15);
                    if(var16) { _fun0004_ip = 120; continue _fun0004 }
case 116: // try_end6
                    var16 = var14;
                    if(var16) { _fun0004_ip = 121; continue _fun0004 }
case 38:
                    var19 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var16 = var16[var8];
                    var20 = var19.bind(var4)(var16);
                    var19 = var20.dispatch;
                    var16 = {};
                    var21 = 'GUILD_SETTINGS_ROLES_SAVE_SUCCESS';
                    var16['type'] = var21;
                    var16 = var19.bind(var20)(var16);
case 122: // try_end14
                    _fun0004_ip = 123; continue _fun0004;
case 121: // try_start_15
                    var16 = var11;
                    throw var16;
case 120:
                    var16 = var14;
                    if(var16) { _fun0004_ip = 124; continue _fun0004 }
case 125: // try_end15
                    return var15;
case 124: // try_start_16
                    var15 = var11;
                    throw var15;
case 126: // catch_target6
                    CatchBlockStart(arg_register=14);
                    var16 = var14;
                    if(var16) { _fun0004_ip = 127; continue _fun0004 }
case 128:
                    throw var15;
case 127:
                    var15 = var11;
                    throw var15;
case 129: // catch_target1 // catch_target5
                    CatchBlockStart(arg_register=14);
case 130: // try_start_7
                    var16 = var17;
                    if(!var17) { _fun0004_ip = 131; continue _fun0004 }
case 132:
                    var17 = var13;
                    var17 = var17.return;
                    var16 = var18 != var17;
case 131:
                    if(!var16) { _fun0004_ip = 133; continue _fun0004 }
case 134:
                    var16 = var13;
                    var13 = var16.return;
                    var13 = var13.bind(var16)();
                    SaveGenerator(address=1317);
case 135:
                    return var13;
case 136:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=15);
                    if(var16) { _fun0004_ip = 137; continue _fun0004 }
case 133: // try_end7
                    var16 = var14;
                    if(var16) { _fun0004_ip = 138; continue _fun0004 }
case 139:
                    throw var15;
case 138:
                    var15 = var11;
                    throw var15;
case 137:
                    var15 = var14;
                    if(var15) { _fun0004_ip = 140; continue _fun0004 }
case 141: // try_end16
                    return var13;
case 140: // try_start_17
                    var13 = var11;
                    throw var13;
case 142: // catch_target7
                    CatchBlockStart(arg_register=12);
                    if(var14) { _fun0004_ip = 143; continue _fun0004 }
case 144:
                    throw var13;
case 143:
                    throw var11;
case 36: // try_end17
                    return var9;
case 22:
                    return var7;
case 145: // catch_target8 // catch_target9 // catch_target10 // catch_target11 // catch_target12 // catch_target13 // catch_target14 // catch_target15 // catch_target16 // catch_target17
                    CatchBlockStart(arg_register=8);
                    var3 = var9;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var8];
                    var8 = var7.bind(var4)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var11 = 'GUILD_SETTINGS_ROLES_SAVE_FAIL';
                    var6['type'] = var11;
                    var9 = var9.body;
                    var12 = var9;
                    var11 = null;
                    var13 = var11 == var9;
                    var9 = undefined;
                    if(var13) { _fun0004_ip = 146; continue _fun0004 }
case 147:
                    var9 = var12.message;
case 146:
                    var10 = var9;
                    if(!(var11 == var9)) { _fun0004_ip = 148; continue _fun0004 }
case 149:
                    var9 = global;
                    var12 = var9.Object;
                    var11 = var12.values;
                    var9 = var3;
                    var9 = var9.body;
                    var11 = var11.bind(var12)(var9);
                    var9 = 0;
                    var9 = var11[var9];
                    _fun0004_ip = 150; continue _fun0004;
case 148:
                    var9 = var10;
case 150:
                    var6['message'] = var9;
                    var6 = var7.bind(var8)(var6);
                    var5 = var5.throwErr;
                    if(var5) { _fun0004_ip = 151; continue _fun0004 }
case 123:
                    return var4;
case 151:
                    throw var3;
case 14:
                    return var2;
case 8:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/roles/GuildSettingsRolesActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function updateRoleSort(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
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
        var1 = 1;
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
    var4 = function updateRolePermissions(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
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
        var1 = 1;
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
        var1 = 1;
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
        var1 = 1;
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
        var1 = 1;
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
        var1 = 1;
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
        var1 = 1;
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
        var1 = 1;
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
        var1 = 1;
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
        var1 = 1;
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
        var1 = 1;
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
        var4 = _closure1_slot5;
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