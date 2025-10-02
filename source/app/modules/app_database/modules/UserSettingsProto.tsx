// app/modules/app_database/modules/UserSettingsProto.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
            var9 = _closure1_slot9;
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
            var7 = _closure1_slot9;
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
    var _closure1_slot8 = var1;
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
    var _closure1_slot9 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var5[var4];
    var7 = var6.bind(var1)(var4);
    var4 = var7.prototype;
    var6 = Object.create(var4, {constructor: {value: var7}});
    var11 = 'UserSettingsProto';
    var12 = var6;
    var4 = new var12[var7](var11, var10);
    var4 = var4 instanceof Object ? var4 : var6;
    var _closure1_slot7 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function UserSettingsProto() {
            var3 = this;
            var _closure3_slot0 = var3;
            var6 = _closure1_slot3;
            var5 = _closure2_slot1;
            var1 = undefined;
            var5 = var6.bind(var1)(var3, var5);
            var5 = {};
            var6 = function CONNECTION_OPEN() {
                var2 = _closure3_slot0;
                var1 = var2.throttledOnChange;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5['CONNECTION_OPEN'] = var6;
            var6 = function USER_SETTINGS_PROTO_UPDATE() {
                var2 = _closure3_slot0;
                var1 = var2.throttledOnChange;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5['USER_SETTINGS_PROTO_UPDATE'] = var6;
            var6 = function USER_SETTINGS_PROTO_ENQUEUE_UPDATE() {
                var2 = _closure3_slot0;
                var1 = var2.throttledOnChange;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5['USER_SETTINGS_PROTO_ENQUEUE_UPDATE'] = var6;
            var6 = function USER_SETTINGS_PROTO_UPDATE_EDIT_INFO() {
                var2 = _closure3_slot0;
                var1 = var2.throttledOnChange;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5['USER_SETTINGS_PROTO_UPDATE_EDIT_INFO'] = var6;
            var3['actions'] = var5;
            var4 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getId;
                    var4 = var2.bind(var3)();
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.database;
                    var5 = var2.bind(var3)(var4);
                    var2 = null;
                    if(!(var2 != var5)) { _fun0004_ip = 36; continue _fun0004 }
case 28:
                    var4 = var5.transaction;
                    var3 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var4 = arg1;
                            var3 = _closure1_slot5;
                            var1 = var3.computeState;
                            var12 = var1.bind(var3)();
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var6 = 7;
                            var3 = var1[var6];
                            var1 = undefined;
                            var5 = var5.bind(var1)(var3);
                            var3 = var5.userSettingsTransaction;
                            var11 = var3.bind(var5)(var4);
                            var9 = var12;
                            var3 = global;
                            for(var5 in var9)
case 37:
                            {
case 38:
                                var15 = var5;
                                var14 = var11.put;
                                var13 = {};
                                var16 = var3.Number;
                                var16 = var16.bind(var1)(var15);
                                var13['id'] = var16;
                                var15 = var12[var15];
                                var13['value'] = var15;
                                var13 = var14.bind(var11)(var13);
                                _fun0005_ip = 37; continue _fun0005;
                            }
case 39:
                            var3 = _closure1_slot5;
                            var3 = var3.settings;
                            var7 = var3.versions;
                            var5 = null;
                            var8 = var5 == var7;
                            var3 = undefined;
                            if(var8) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                            var3 = var7.dataVersion;
case 40:
                            var7 = var5 != var3;
                            var5 = -1;
                            if(!var7) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                            var5 = var3;
case 42:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var6];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.nonGuildVersionsTransaction;
                            var4 = var2.bind(var3)(var4);
                            var3 = var4.put;
                            var2 = {};
                            var6 = 'user_settings_version';
                            var2['id'] = var6;
                            var2['version'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var2 = 'handleUserSettingsProtoChange';
                    var2 = var4.bind(var5)(var3, var2);
case 36:
                    return var1;
                }
            };
            var3['handleUserSettingsProtoChange'] = var4;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 8;
            var2 = var5[var2];
            var6 = var4.bind(var1)(var2);
            var5 = var6.debounce;
            var4 = var3.handleUserSettingsProtoChange;
            var2 = 0;
            var2 = var5.bind(var6)(var4, var2);
            var3['throttledOnChange'] = var2;
            return var1;
        };
        var _closure2_slot1 = var3;
        var5 = {};
        var2 = 'getAll';
        var5['key'] = var2;
        var7 = _closure1_slot2;
        var2 = undefined;
        var1 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                    var3 = global;
                    var4 = var3.performance;
                    var2 = var4.now;
                    var9 = var2.bind(var4)();
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 7;
                    var2 = var6[var2];
                    var7 = undefined;
                    var6 = var5.bind(var7)(var2);
                    var5 = var6.userSettings;
                    var2 = arg1;
                    var5 = var5.bind(var6)(var2);
                    var2 = var5.getMany;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=80);
case 46:
                    return var2;
case 47:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                    var6 = var3.performance;
                    var5 = var6.now;
                    var8 = var5.bind(var6)();
                    var6 = _closure1_slot7;
                    var5 = var6.verbose;
                    var16 = var8 - var9;
                    var14 = var2.length;
                    var3 = var3.HermesInternal;
                    var10 = var3.concat;
                    var17 = 'loaded in ';
                    var15 = 'ms (settings: ';
                    var13 = ')';
                    var3 = var17[var10](var16, var15, var14, var13, var12);
                    var3 = var5.bind(var6)(var3);
                    var3 = {};
                    var4 = _closure1_slot8;
                    var6 = var4.bind(var7)(var2);
                    var5 = var6.bind(var7)();
                    var4 = var5.done;
                    if(var4) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                    var4 = var5.value;
                    var8 = var4.id;
                    var4 = var4.value;
                    var3[var8] = var4;
                    var8 = var6.bind(var7)();
                    var4 = var8.done;
                    var5 = var8;
                    if(!var4) { _fun0006_ip = 51; continue _fun0006 }
case 50:
                    return var3;
case 48:
                    return var2;
case 44:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var7.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var1 = function getAll() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'resetInMemoryState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var12 = var4;
    var2 = new var12[var2](var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/modules/UserSettingsProto.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();