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
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var21 = arg1;
                    var20 = arg2;
                    var4 = arg3;
                    var13 = arg4;
                    var22 = arg5;
                    var2 = undefined;
                    var25 = undefined;
                    var26 = undefined;
                    var27 = undefined;
                    var9 = undefined;
                    var15 = undefined;
                    var12 = undefined;
                    var23 = undefined;
                    var11 = undefined;
                    var24 = undefined;
                    var7 = undefined;
                    var10 = undefined;
                    var14 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 1;
                    var8 = var8[var5];
                    var16 = var14.bind(var2)(var8);
                    var14 = var16.dispatch;
                    var8 = {};
                    var17 = 'GUILD_SETTINGS_ROLES_SUBMITTING';
                    var8['type'] = var17;
                    var8 = var14.bind(var16)(var8);
case 10: // try_start_8
                    var14 = var4;
                    var16 = null;
                    var14 = var16 != var14;
                    var8 = var14;
                    if(!var14) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var14 = var4;
                    var17 = var14.length;
                    var14 = 0;
                    var8 = var17 > var14;
case 11:
                    if(!var8) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var14 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var8 = 2;
                    var8 = var17[var8];
                    var17 = var14.bind(var2)(var8);
                    var14 = var17.batchRoleUpdate;
                    var8 = var21;
                    var4 = var14.bind(var17)(var8, var4);
                    SaveGenerator(address=165);
case 15:
                    return var4;
case 16:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(var8) { _fun0004_ip = 17; continue _fun0004 }
case 13:
                    var8 = var20;
                    if(!(var16 != var8)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var8 = var20;
                    var8 = var8.length;
                    var19 = 0;
                    var18 = 2;
                    var17 = '';
                    if(!(var8 > var19)) { _fun0004_ip = 18; continue _fun0004 }
case 20:
                    var14 = var20;
                    var8 = var14.pop;
                    var14 = var8.bind(var14)();
                    var27 = var14;
                    var14 = var16 != var14;
                    var8 = var14;
                    if(!var14) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var14 = var27;
                    var14 = var14.name;
                    var8 = var17 !== var14;
case 21:
                    if(!var8) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var14 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var18];
                    var30 = var14.bind(var2)(var8);
                    var29 = var30.updateRole;
                    var28 = var21;
                    var31 = var27;
                    var14 = var31.id;
                    var8 = {};
                    var32 = var31.name;
                    var8['name'] = var32;
                    var31 = var31.description;
                    var25 = var31;
                    var32 = var16 != var31;
                    var31 = undefined;
                    if(!var32) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var31 = var25;
case 25:
                    var8['description'] = var31;
                    var31 = var27;
                    var32 = var31.permissions;
                    var8['permissions'] = var32;
                    var32 = var31.color;
                    var8['color'] = var32;
                    var31 = var31.colors;
                    var26 = var31;
                    var32 = var16 != var31;
                    var31 = undefined;
                    if(!var32) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                    var31 = var26;
case 27:
                    var8['colors'] = var31;
                    var31 = var27;
                    var32 = var31.hoist;
                    var8['hoist'] = var32;
                    var32 = var31.mentionable;
                    var8['mentionable'] = var32;
                    var32 = var31.icon;
                    var8['icon'] = var32;
                    var31 = var31.unicodeEmoji;
                    var8['unicodeEmoji'] = var31;
                    var8 = var29.bind(var30)(var28, var14, var8);
                    SaveGenerator(address=424);
case 29:
                    return var8;
case 30:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=13);
                    if(var14) { _fun0004_ip = 31; continue _fun0004 }
case 23:
                    var14 = var20;
                    if(!(var16 != var14)) { _fun0004_ip = 18; continue _fun0004 }
case 32:
                    var14 = var20;
                    var14 = var14.length;
                    if(var14 > var19) { _fun0004_ip = 20; continue _fun0004 }
case 18:
                    var14 = var22;
                    if(!(var16 != var14)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    var14 = var13;
                    if(!(var16 != var14)) { _fun0004_ip = 33; continue _fun0004 }
case 35:
                    var15 = false;
                    var12 = false;
case 36: // try_start_0 // try_start_1
                    var18 = var13;
                    var13 = global;
                    var14 = var13.Symbol;
                    var17 = 'undefined';
                    var14 = typeof var14;
                    var30 = undefined;
                    var29 = undefined;
                    if(!(var17 !== var14)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                    var14 = var13.Symbol;
                    var30 = var14.asyncIterator;
                    var14 = var13.Symbol;
                    var29 = var14.iterator;
case 37:
                    var28 = '@@asyncIterator';
                    var27 = '@@iterator';
                    var26 = undefined;
                    var25 = var5;
case 39:
                    if(!var30) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                    var17 = var18[var30];
                    var26 = var17;
                    if(!(var16 == var26)) { _fun0004_ip = 42; continue _fun0004 }
case 40:
                    if(!var29) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                    var14 = var18[var29];
                    var26 = var14;
                    if(!(var16 == var26)) { _fun0004_ip = 45; continue _fun0004 }
case 43:
                    var19 = parseFloat(var25);
                    var25 = var19 - 1;
                    var30 = var28;
                    var29 = var27;
                    if(var19) { _fun0004_ip = 39; continue _fun0004 }
case 46:
                    var25 = var13.TypeError;
                    var13 = var25.prototype;
                    var19 = Object.create(var13, {constructor: {value: var25}});
                    var35 = 'Object is not async iterable';
                    var36 = var19;
                    var13 = new var36[var25](var35, var34);
                    var13 = var13 instanceof Object ? var13 : var19;
                    throw var13;
case 45:
                    var19 = _closure1_slot4;
                    var13 = var14.call;
                    var35 = var13.bind(var14)(var18);
                    var14 = var19.prototype;
                    var14 = Object.create(var14, {constructor: {value: var19}});
                    var36 = var14;
                    var13 = new var36[var19](var35, var34);
                    var14 = var13 instanceof Object ? var13 : var14;
                    _fun0004_ip = 47; continue _fun0004;
case 42:
                    var13 = var17.call;
                    var14 = var13.bind(var17)(var18);
case 47:
                    var11 = var14;
                    var13 = var14.next;
                    var14 = var13.bind(var14)();
                    SaveGenerator(address=682);
case 48:
                    return var14;
case 49:
                    ResumeGenerator(result_out_reg=13, return_bool_out_reg=12);
                    if(var13) { _fun0004_ip = 50; continue _fun0004 }
case 51:
                    var23 = var14;
                    var13 = var14.done;
                    var13 = !var13;
                    var15 = var13;
                    var19 = 3;
                    if(!var13) { _fun0004_ip = 52; continue _fun0004 }
case 53:
                    var13 = var23;
                    var26 = var13.value;
                    var17 = var22;
                    var13 = var17.get;
                    var13 = var13.bind(var17)(var26);
                    var24 = var13;
                    var18 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var17 = var17[var19];
                    var25 = var18.bind(var2)(var17);
                    var18 = var25.putRoleConnectionsConfigurations;
                    var17 = var21;
                    if(!(var16 == var13)) { _fun0004_ip = 54; continue _fun0004 }
case 55:
                    var13 = new Array(0);
                    _fun0004_ip = 56; continue _fun0004;
case 54:
                    var13 = var24;
case 56:
                    var17 = var18.bind(var25)(var17, var26, var13);
                    SaveGenerator(address=788);
case 57:
                    return var17;
case 58:
                    ResumeGenerator(result_out_reg=16, return_bool_out_reg=12);
                    if(var13) { _fun0004_ip = 59; continue _fun0004 }
case 60:
                    var15 = false;
                    var18 = var11;
                    var13 = var18.next;
                    var18 = var13.bind(var18)();
                    SaveGenerator(address=815);
case 61:
                    return var18;
case 62:
                    ResumeGenerator(result_out_reg=17, return_bool_out_reg=12);
                    if(var13) { _fun0004_ip = 63; continue _fun0004 }
case 64:
                    var23 = var18;
                    var13 = var18.done;
                    var13 = !var13;
                    var15 = var13;
                    if(var13) { _fun0004_ip = 53; continue _fun0004 }
case 52: // try_end0
                    _fun0004_ip = 65; continue _fun0004;
case 63: // try_start_2 // try_end1
                    var19 = var15;
                    var13 = var19;
                    if(!var19) { _fun0004_ip = 66; continue _fun0004 }
case 67:
                    var19 = var11;
                    var19 = var19.return;
                    var13 = var16 != var19;
case 66:
                    if(!var13) { _fun0004_ip = 68; continue _fun0004 }
case 69:
                    var19 = var11;
                    var13 = var19.return;
                    var13 = var13.bind(var19)();
                    SaveGenerator(address=883);
case 70:
                    return var13;
case 71:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=18);
                    if(var19) { _fun0004_ip = 72; continue _fun0004 }
case 68: // try_end2
                    var19 = var12;
                    if(var19) { _fun0004_ip = 73; continue _fun0004 }
case 74: // try_end8
                    return var18;
case 73: // try_start_9
                    var18 = var9;
                    throw var18;
case 72:
                    var18 = var12;
                    if(var18) { _fun0004_ip = 75; continue _fun0004 }
case 76: // try_end9
                    return var13;
case 75: // try_start_10
                    var13 = var9;
                    throw var13;
case 77: // catch_target2
                    CatchBlockStart(arg_register=12);
                    var18 = var12;
                    if(var18) { _fun0004_ip = 78; continue _fun0004 }
case 79:
                    throw var13;
case 78:
                    var13 = var9;
                    throw var13;
case 59: // try_start_3
                    var18 = var15;
                    var13 = var18;
                    if(!var18) { _fun0004_ip = 80; continue _fun0004 }
case 81:
                    var18 = var11;
                    var18 = var18.return;
                    var13 = var16 != var18;
case 80:
                    if(!var13) { _fun0004_ip = 82; continue _fun0004 }
case 83:
                    var18 = var11;
                    var13 = var18.return;
                    var13 = var13.bind(var18)();
                    SaveGenerator(address=972);
case 84:
                    return var13;
case 85:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=17);
                    if(var18) { _fun0004_ip = 86; continue _fun0004 }
case 82: // try_end3
                    var18 = var12;
                    if(var18) { _fun0004_ip = 87; continue _fun0004 }
case 88: // try_end10
                    return var17;
case 87: // try_start_11
                    var17 = var9;
                    throw var17;
case 86:
                    var17 = var12;
                    if(var17) { _fun0004_ip = 89; continue _fun0004 }
case 90: // try_end11
                    return var13;
case 89: // try_start_12
                    var13 = var9;
                    throw var13;
case 91: // catch_target3
                    CatchBlockStart(arg_register=12);
                    var17 = var12;
                    if(var17) { _fun0004_ip = 92; continue _fun0004 }
case 93:
                    throw var13;
case 92:
                    var13 = var9;
                    throw var13;
case 50: // try_start_4
                    var17 = var15;
                    var13 = var17;
                    if(!var17) { _fun0004_ip = 94; continue _fun0004 }
case 95:
                    var17 = var11;
                    var17 = var17.return;
                    var13 = var16 != var17;
case 94:
                    if(!var13) { _fun0004_ip = 96; continue _fun0004 }
case 97:
                    var17 = var11;
                    var13 = var17.return;
                    var13 = var13.bind(var17)();
                    SaveGenerator(address=1061);
case 98:
                    return var13;
case 99:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=16);
                    if(var17) { _fun0004_ip = 100; continue _fun0004 }
case 96: // try_end4
                    var17 = var12;
                    if(var17) { _fun0004_ip = 101; continue _fun0004 }
case 102: // try_end12
                    return var14;
case 101: // try_start_13
                    var14 = var9;
                    throw var14;
case 100:
                    var14 = var12;
                    if(var14) { _fun0004_ip = 103; continue _fun0004 }
case 104: // try_end13
                    return var13;
case 103: // try_start_14
                    var13 = var9;
                    throw var13;
case 105: // catch_target4
                    CatchBlockStart(arg_register=12);
                    var14 = var12;
                    if(var14) { _fun0004_ip = 106; continue _fun0004 }
case 107:
                    throw var13;
case 106:
                    var13 = var9;
                    throw var13;
case 108: // try_start_5 // catch_target0
                    CatchBlockStart(arg_register=8);
                    var12 = true;
case 65: // try_start_6 // try_end5
                    var14 = var15;
                    var13 = var14;
                    if(!var14) { _fun0004_ip = 109; continue _fun0004 }
case 110:
                    var14 = var11;
                    var14 = var14.return;
                    var13 = var16 != var14;
case 109:
                    if(!var13) { _fun0004_ip = 111; continue _fun0004 }
case 112:
                    var14 = var11;
                    var13 = var14.return;
                    var13 = var13.bind(var14)();
                    SaveGenerator(address=1154);
case 113:
                    return var13;
case 114:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=13);
                    if(var14) { _fun0004_ip = 115; continue _fun0004 }
case 111: // try_end6
                    var14 = var12;
                    if(var14) { _fun0004_ip = 116; continue _fun0004 }
case 33:
                    var17 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var14 = var14[var5];
                    var18 = var17.bind(var2)(var14);
                    var17 = var18.dispatch;
                    var14 = {};
                    var19 = 'GUILD_SETTINGS_ROLES_SAVE_SUCCESS';
                    var14['type'] = var19;
                    var14 = var17.bind(var18)(var14);
case 117: // try_end14
                    _fun0004_ip = 118; continue _fun0004;
case 116: // try_start_15
                    var14 = var9;
                    throw var14;
case 115:
                    var14 = var12;
                    if(var14) { _fun0004_ip = 119; continue _fun0004 }
case 120: // try_end15
                    return var13;
case 119: // try_start_16
                    var13 = var9;
                    throw var13;
case 121: // catch_target6
                    CatchBlockStart(arg_register=12);
                    var14 = var12;
                    if(var14) { _fun0004_ip = 122; continue _fun0004 }
case 123:
                    throw var13;
case 122:
                    var13 = var9;
                    throw var13;
case 124: // catch_target1 // catch_target5
                    CatchBlockStart(arg_register=12);
case 125: // try_start_7
                    var14 = var15;
                    if(!var15) { _fun0004_ip = 126; continue _fun0004 }
case 127:
                    var15 = var11;
                    var15 = var15.return;
                    var14 = var16 != var15;
case 126:
                    if(!var14) { _fun0004_ip = 128; continue _fun0004 }
case 129:
                    var14 = var11;
                    var11 = var14.return;
                    var11 = var11.bind(var14)();
                    SaveGenerator(address=1283);
case 130:
                    return var11;
case 131:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=13);
                    if(var14) { _fun0004_ip = 132; continue _fun0004 }
case 128: // try_end7
                    var14 = var12;
                    if(var14) { _fun0004_ip = 133; continue _fun0004 }
case 134:
                    throw var13;
case 133:
                    var13 = var9;
                    throw var13;
case 132:
                    var13 = var12;
                    if(var13) { _fun0004_ip = 135; continue _fun0004 }
case 136: // try_end16
                    return var11;
case 135: // try_start_17
                    var11 = var9;
                    throw var11;
case 137: // catch_target7
                    CatchBlockStart(arg_register=10);
                    if(var12) { _fun0004_ip = 138; continue _fun0004 }
case 139:
                    throw var11;
case 138:
                    throw var9;
case 31: // try_end17
                    return var8;
case 17:
                    return var4;
case 140: // catch_target8 // catch_target9 // catch_target10 // catch_target11 // catch_target12 // catch_target13 // catch_target14 // catch_target15 // catch_target16 // catch_target17
                    CatchBlockStart(arg_register=7);
                    var6 = var8;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var9 = 'GUILD_SETTINGS_ROLES_SAVE_FAIL';
                    var3['type'] = var9;
                    var8 = var8.body;
                    var10 = var8;
                    var9 = null;
                    var11 = var9 == var8;
                    var8 = undefined;
                    if(var11) { _fun0004_ip = 141; continue _fun0004 }
case 142:
                    var8 = var10.message;
case 141:
                    var7 = var8;
                    if(!(var9 == var8)) { _fun0004_ip = 143; continue _fun0004 }
case 144:
                    var8 = global;
                    var9 = var8.Object;
                    var8 = var9.values;
                    var6 = var6.body;
                    var8 = var8.bind(var9)(var6);
                    var6 = 0;
                    var6 = var8[var6];
                    _fun0004_ip = 145; continue _fun0004;
case 143:
                    var6 = var7;
case 145:
                    var3['message'] = var6;
                    var3 = var4.bind(var5)(var3);
case 118:
                    return var2;
case 8:
                    return var1;
                }
            };
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