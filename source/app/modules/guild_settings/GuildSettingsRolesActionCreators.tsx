// app/modules/guild_settings/GuildSettingsRolesActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function AsyncFromSyncIterator(arg1) {
        var1 = function AsyncFromSyncIteratorContinuation(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = arg1;
                var1 = global;
                var5 = var1.Object;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                if(!(var3 === var4)) { _fun0001_ip = 74; continue _fun0001 }
 24:
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
 74:
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
 0:
                var4 = this;
                var3 = undefined;
                var1 = undefined;
                var2 = var4.s;
                var6 = var2.return;
                if(!(var3 !== var6)) { _fun0002_ip = 53; continue _fun0002 }
 21:
                var2 = _closure2_slot0;
                var5 = var6.apply;
                var4 = var4.s;
                var1 = arguments;
                var1 = var5.bind(var6)(var4, var1);
                var1 = var2.bind(var3)(var1);
                _fun0002_ip = 87; continue _fun0002;
 53:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.resolve;
                var2 = {};
                var5 = arg1;
                var2['value'] = var5;
                var5 = true;
                var2['done'] = var5;
                var1 = var3.bind(var4)(var2);
 87:
                return var1;
            }
        };
        var2['return'] = var5;
        var4 = function throw(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var1 = undefined;
                var2 = var4.s;
                var6 = var2.return;
                if(!(var3 !== var6)) { _fun0003_ip = 53; continue _fun0003 }
 21:
                var2 = _closure2_slot0;
                var5 = var6.apply;
                var4 = var4.s;
                var1 = arguments;
                var1 = var5.bind(var6)(var4, var1);
                var1 = var2.bind(var3)(var1);
                _fun0003_ip = 75; continue _fun0003;
 53:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.reject;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
 75:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 1406; continue _fun0004 }
 10:
                    var21 = arg1;
                    var20 = arg2;
                    var4 = arg3;
                    var13 = arg4;
                    var22 = arg5;
                    var2 = undefined;
                    var25 = undefined;
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
 90: // try_start_8
                    var14 = var4;
                    var16 = null;
                    var14 = var16 != var14;
                    var8 = var14;
                    if(!var14) { _fun0004_ip = 119; continue _fun0004 }
 105:
                    var14 = var4;
                    var17 = var14.length;
                    var14 = 0;
                    var8 = var17 > var14;
 119:
                    if(!var8) { _fun0004_ip = 170; continue _fun0004 }
 122:
                    var14 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var8 = 2;
                    var8 = var17[var8];
                    var17 = var14.bind(var2)(var8);
                    var14 = var17.batchRoleUpdate;
                    var8 = var21;
                    var4 = var14.bind(var17)(var8, var4);
                    SaveGenerator(address=161);
 159:
                    return var4;
 161:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(var8) { _fun0004_ip = 1287; continue _fun0004 }
 170:
                    var8 = var20;
                    if(!(var16 != var8)) { _fun0004_ip = 415; continue _fun0004 }
 180:
                    var8 = var20;
                    var8 = var8.length;
                    var19 = 0;
                    var18 = 2;
                    var17 = '';
                    if(!(var8 > var19)) { _fun0004_ip = 415; continue _fun0004 }
 204:
                    var14 = var20;
                    var8 = var14.pop;
                    var14 = var8.bind(var14)();
                    var25 = var14;
                    var14 = var16 != var14;
                    var8 = var14;
                    if(!var14) { _fun0004_ip = 242; continue _fun0004 }
 230:
                    var14 = var25;
                    var14 = var14.name;
                    var8 = var17 !== var14;
 242:
                    if(!var8) { _fun0004_ip = 393; continue _fun0004 }
 248:
                    var14 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var18];
                    var28 = var14.bind(var2)(var8);
                    var27 = var28.updateRole;
                    var26 = var21;
                    var29 = var25;
                    var14 = var29.id;
                    var8 = {};
                    var30 = var29.name;
                    var8['name'] = var30;
                    var30 = var29.description;
                    var8['description'] = var30;
                    var30 = var29.permissions;
                    var8['permissions'] = var30;
                    var30 = var29.color;
                    var8['color'] = var30;
                    var30 = var29.colors;
                    var8['colors'] = var30;
                    var30 = var29.hoist;
                    var8['hoist'] = var30;
                    var30 = var29.mentionable;
                    var8['mentionable'] = var30;
                    var30 = var29.icon;
                    var8['icon'] = var30;
                    var29 = var29.unicodeEmoji;
                    var8['unicodeEmoji'] = var29;
                    var8 = var27.bind(var28)(var26, var14, var8);
                    SaveGenerator(address=384);
 382:
                    return var8;
 384:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=13);
                    if(var14) { _fun0004_ip = 1284; continue _fun0004 }
 393:
                    var14 = var20;
                    if(!(var16 != var14)) { _fun0004_ip = 415; continue _fun0004 }
 400:
                    var14 = var20;
                    var14 = var14.length;
                    if(var14 > var19) { _fun0004_ip = 204; continue _fun0004 }
 415:
                    var14 = var22;
                    if(!(var16 != var14)) { _fun0004_ip = 1125; continue _fun0004 }
 425:
                    var14 = var13;
                    if(!(var16 != var14)) { _fun0004_ip = 1125; continue _fun0004 }
 435:
                    var15 = false;
                    var12 = false;
 439: // try_start_0 // try_start_1
                    var18 = var13;
                    var13 = global;
                    var14 = var13.Symbol;
                    var17 = 'undefined';
                    var14 = typeof var14;
                    var30 = undefined;
                    var29 = undefined;
                    if(!(var17 !== var14)) { _fun0004_ip = 487; continue _fun0004 }
 464:
                    var14 = var13.Symbol;
                    var30 = var14.asyncIterator;
                    var14 = var13.Symbol;
                    var29 = var14.iterator;
 487:
                    var28 = '@@asyncIterator';
                    var27 = '@@iterator';
                    var26 = undefined;
                    var25 = var5;
 502:
                    if(!var30) { _fun0004_ip = 516; continue _fun0004 }
 505:
                    var17 = var18[var30];
                    var26 = var17;
                    if(!(var16 == var26)) { _fun0004_ip = 615; continue _fun0004 }
 516:
                    if(!var29) { _fun0004_ip = 530; continue _fun0004 }
 519:
                    var14 = var18[var29];
                    var26 = var14;
                    if(!(var16 == var26)) { _fun0004_ip = 579; continue _fun0004 }
 530:
                    var19 = parseFloat(var25);
                    var25 = var19 - 1;
                    var30 = var28;
                    var29 = var27;
                    if(var19) { _fun0004_ip = 502; continue _fun0004 }
 545:
                    var25 = var13.TypeError;
                    var13 = var25.prototype;
                    var19 = Object.create(var13, {constructor: {value: var25}});
                    var33 = 'Object is not async iterable';
                    var34 = var19;
                    var13 = new var34[var25](var33, var32);
                    var13 = var13 instanceof Object ? var13 : var19;
                    throw var13;
 579:
                    var19 = _closure1_slot4;
                    var13 = var14.call;
                    var33 = var13.bind(var14)(var18);
                    var14 = var19.prototype;
                    var14 = Object.create(var14, {constructor: {value: var19}});
                    var34 = var14;
                    var13 = new var34[var19](var33, var32);
                    var14 = var13 instanceof Object ? var13 : var14;
                    _fun0004_ip = 625; continue _fun0004;
 615:
                    var13 = var17.call;
                    var14 = var13.bind(var17)(var18);
 625:
                    var11 = var14;
                    var13 = var14.next;
                    var14 = var13.bind(var14)();
                    SaveGenerator(address=641);
 639:
                    return var14;
 641:
                    ResumeGenerator(result_out_reg=13, return_bool_out_reg=12);
                    if(var13) { _fun0004_ip = 980; continue _fun0004 }
 650:
                    var23 = var14;
                    var13 = var14.done;
                    var13 = !var13;
                    var15 = var13;
                    var19 = 3;
                    if(!var13) { _fun0004_ip = 797; continue _fun0004 }
 673:
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
                    if(!(var16 == var13)) { _fun0004_ip = 733; continue _fun0004 }
 727:
                    var13 = new Array(0);
                    _fun0004_ip = 736; continue _fun0004;
 733:
                    var13 = var24;
 736:
                    var17 = var18.bind(var25)(var17, var26, var13);
                    SaveGenerator(address=747);
 745:
                    return var17;
 747:
                    ResumeGenerator(result_out_reg=16, return_bool_out_reg=12);
                    if(var13) { _fun0004_ip = 891; continue _fun0004 }
 756:
                    var15 = false;
                    var18 = var11;
                    var13 = var18.next;
                    var18 = var13.bind(var18)();
                    SaveGenerator(address=774);
 772:
                    return var18;
 774:
                    ResumeGenerator(result_out_reg=17, return_bool_out_reg=12);
                    if(var13) { _fun0004_ip = 802; continue _fun0004 }
 780:
                    var23 = var18;
                    var13 = var18.done;
                    var13 = !var13;
                    var15 = var13;
                    if(var13) { _fun0004_ip = 673; continue _fun0004 }
 797: // try_end0
                    _fun0004_ip = 1073; continue _fun0004;
 802: // try_start_2 // try_end1
                    var19 = var15;
                    var13 = var19;
                    if(!var19) { _fun0004_ip = 823; continue _fun0004 }
 811:
                    var19 = var11;
                    var19 = var19.return;
                    var13 = var16 != var19;
 823:
                    if(!var13) { _fun0004_ip = 848; continue _fun0004 }
 826:
                    var19 = var11;
                    var13 = var19.return;
                    var13 = var13.bind(var19)();
                    SaveGenerator(address=842);
 840:
                    return var13;
 842:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=18);
                    if(var19) { _fun0004_ip = 862; continue _fun0004 }
 848: // try_end2
                    var19 = var12;
                    if(var19) { _fun0004_ip = 857; continue _fun0004 }
 854: // try_end8
                    return var18;
 857: // try_start_9
                    var18 = var9;
                    throw var18;
 862:
                    var18 = var12;
                    if(var18) { _fun0004_ip = 871; continue _fun0004 }
 868: // try_end9
                    return var13;
 871: // try_start_10
                    var13 = var9;
                    throw var13;
 876: // catch_target2
                    CatchBlockStart(arg_register=12);
                    var18 = var12;
                    if(var18) { _fun0004_ip = 886; continue _fun0004 }
 884:
                    throw var13;
 886:
                    var13 = var9;
                    throw var13;
 891: // try_start_3
                    var18 = var15;
                    var13 = var18;
                    if(!var18) { _fun0004_ip = 912; continue _fun0004 }
 900:
                    var18 = var11;
                    var18 = var18.return;
                    var13 = var16 != var18;
 912:
                    if(!var13) { _fun0004_ip = 937; continue _fun0004 }
 915:
                    var18 = var11;
                    var13 = var18.return;
                    var13 = var13.bind(var18)();
                    SaveGenerator(address=931);
 929:
                    return var13;
 931:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=17);
                    if(var18) { _fun0004_ip = 951; continue _fun0004 }
 937: // try_end3
                    var18 = var12;
                    if(var18) { _fun0004_ip = 946; continue _fun0004 }
 943: // try_end10
                    return var17;
 946: // try_start_11
                    var17 = var9;
                    throw var17;
 951:
                    var17 = var12;
                    if(var17) { _fun0004_ip = 960; continue _fun0004 }
 957: // try_end11
                    return var13;
 960: // try_start_12
                    var13 = var9;
                    throw var13;
 965: // catch_target3
                    CatchBlockStart(arg_register=12);
                    var17 = var12;
                    if(var17) { _fun0004_ip = 975; continue _fun0004 }
 973:
                    throw var13;
 975:
                    var13 = var9;
                    throw var13;
 980: // try_start_4
                    var17 = var15;
                    var13 = var17;
                    if(!var17) { _fun0004_ip = 1001; continue _fun0004 }
 989:
                    var17 = var11;
                    var17 = var17.return;
                    var13 = var16 != var17;
 1001:
                    if(!var13) { _fun0004_ip = 1026; continue _fun0004 }
 1004:
                    var17 = var11;
                    var13 = var17.return;
                    var13 = var13.bind(var17)();
                    SaveGenerator(address=1020);
 1018:
                    return var13;
 1020:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=16);
                    if(var17) { _fun0004_ip = 1040; continue _fun0004 }
 1026: // try_end4
                    var17 = var12;
                    if(var17) { _fun0004_ip = 1035; continue _fun0004 }
 1032: // try_end12
                    return var14;
 1035: // try_start_13
                    var14 = var9;
                    throw var14;
 1040:
                    var14 = var12;
                    if(var14) { _fun0004_ip = 1049; continue _fun0004 }
 1046: // try_end13
                    return var13;
 1049: // try_start_14
                    var13 = var9;
                    throw var13;
 1054: // catch_target4
                    CatchBlockStart(arg_register=12);
                    var14 = var12;
                    if(var14) { _fun0004_ip = 1064; continue _fun0004 }
 1062:
                    throw var13;
 1064:
                    var13 = var9;
                    throw var13;
 1069: // try_start_5 // catch_target0
                    CatchBlockStart(arg_register=8);
                    var12 = true;
 1073: // try_start_6 // try_end5
                    var14 = var15;
                    var13 = var14;
                    if(!var14) { _fun0004_ip = 1094; continue _fun0004 }
 1082:
                    var14 = var11;
                    var14 = var14.return;
                    var13 = var16 != var14;
 1094:
                    if(!var13) { _fun0004_ip = 1119; continue _fun0004 }
 1097:
                    var14 = var11;
                    var13 = var14.return;
                    var13 = var13.bind(var14)();
                    SaveGenerator(address=1113);
 1111:
                    return var13;
 1113:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=13);
                    if(var14) { _fun0004_ip = 1174; continue _fun0004 }
 1119: // try_end6
                    var14 = var12;
                    if(var14) { _fun0004_ip = 1169; continue _fun0004 }
 1125:
                    var17 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var14 = var14[var5];
                    var18 = var17.bind(var2)(var14);
                    var17 = var18.dispatch;
                    var14 = {};
                    var19 = 'GUILD_SETTINGS_ROLES_SAVE_SUCCESS';
                    var14['type'] = var19;
                    var14 = var17.bind(var18)(var14);
 1164: // try_end14
                    _fun0004_ip = 1403; continue _fun0004;
 1169: // try_start_15
                    var14 = var9;
                    throw var14;
 1174:
                    var14 = var12;
                    if(var14) { _fun0004_ip = 1183; continue _fun0004 }
 1180: // try_end15
                    return var13;
 1183: // try_start_16
                    var13 = var9;
                    throw var13;
 1188: // catch_target6
                    CatchBlockStart(arg_register=12);
                    var14 = var12;
                    if(var14) { _fun0004_ip = 1198; continue _fun0004 }
 1196:
                    throw var13;
 1198:
                    var13 = var9;
                    throw var13;
 1203: // catch_target1 // catch_target5
                    CatchBlockStart(arg_register=12);
 1205: // try_start_7
                    var14 = var15;
                    if(!var15) { _fun0004_ip = 1223; continue _fun0004 }
 1211:
                    var15 = var11;
                    var15 = var15.return;
                    var14 = var16 != var15;
 1223:
                    if(!var14) { _fun0004_ip = 1248; continue _fun0004 }
 1226:
                    var14 = var11;
                    var11 = var14.return;
                    var11 = var11.bind(var14)();
                    SaveGenerator(address=1242);
 1240:
                    return var11;
 1242:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=13);
                    if(var14) { _fun0004_ip = 1261; continue _fun0004 }
 1248: // try_end7
                    var14 = var12;
                    if(var14) { _fun0004_ip = 1256; continue _fun0004 }
 1254:
                    throw var13;
 1256:
                    var13 = var9;
                    throw var13;
 1261:
                    var13 = var12;
                    if(var13) { _fun0004_ip = 1270; continue _fun0004 }
 1267: // try_end16
                    return var11;
 1270: // try_start_17
                    var11 = var9;
                    throw var11;
 1275: // catch_target7
                    CatchBlockStart(arg_register=10);
                    if(var12) { _fun0004_ip = 1282; continue _fun0004 }
 1280:
                    throw var11;
 1282:
                    throw var9;
 1284: // try_end17
                    return var8;
 1287:
                    return var4;
 1290: // catch_target8 // catch_target9 // catch_target10 // catch_target11 // catch_target12 // catch_target13 // catch_target14 // catch_target15 // catch_target16 // catch_target17
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
                    if(var11) { _fun0004_ip = 1353; continue _fun0004 }
 1348:
                    var8 = var10.message;
 1353:
                    var7 = var8;
                    if(!(var9 == var8)) { _fun0004_ip = 1391; continue _fun0004 }
 1360:
                    var8 = global;
                    var9 = var8.Object;
                    var8 = var9.values;
                    var6 = var6.body;
                    var8 = var8.bind(var9)(var6);
                    var6 = 0;
                    var6 = var8[var6];
                    _fun0004_ip = 1394; continue _fun0004;
 1391:
                    var6 = var7;
 1394:
                    var3['message'] = var6;
                    var3 = var4.bind(var5)(var3);
 1403:
                    return var2;
 1406:
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
    var4 = 'modules/guild_settings/GuildSettingsRolesActionCreators.tsx';
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