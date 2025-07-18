// app/modules/app_database/modules/UserSettingsProto.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot9;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot9;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 342:
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
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
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
 0:
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
                    if(!(var2 != var5)) { _fun0004_ip = 79; continue _fun0004 }
 56:
                    var4 = var5.transaction;
                    var3 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
 66:
                            {
 75:
                                var15 = var5;
                                var14 = var11.put;
                                var13 = {};
                                var16 = var3.Number;
                                var16 = var16.bind(var1)(var15);
                                var13['id'] = var16;
                                var15 = var12[var15];
                                var13['value'] = var15;
                                var13 = var14.bind(var11)(var13);
                                _fun0005_ip = 66; continue _fun0005;
                            }
 116:
                            var3 = _closure1_slot5;
                            var3 = var3.settings;
                            var7 = var3.versions;
                            var5 = null;
                            var8 = var5 == var7;
                            var3 = undefined;
                            if(var8) { _fun0005_ip = 149; continue _fun0005 }
 143:
                            var3 = var7.dataVersion;
 149:
                            var7 = var5 != var3;
                            var5 = -1;
                            if(!var7) { _fun0005_ip = 165; continue _fun0005 }
 162:
                            var5 = var3;
 165:
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
 79:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 222; continue _fun0006 }
 10:
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
 78:
                    return var2;
 80:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 219; continue _fun0006 }
 89:
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
                    if(var4) { _fun0006_ip = 216; continue _fun0006 }
 182:
                    var4 = var5.value;
                    var8 = var4.id;
                    var4 = var4.value;
                    var3[var8] = var4;
                    var8 = var6.bind(var7)();
                    var4 = var8.done;
                    var5 = var8;
                    if(!var4) { _fun0006_ip = 182; continue _fun0006 }
 216:
                    return var3;
 219:
                    return var2;
 222:
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
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/modules/UserSettingsProto.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();