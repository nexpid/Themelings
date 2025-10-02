// app/modules/auth/native/components/utils/handleRegisterErrorRedirection.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
            var9 = _closure1_slot10;
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
            var7 = _closure1_slot10;
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
    var _closure1_slot9 = var1;
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
    var _closure1_slot10 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.RegisterTransitionSteps;
    var _closure1_slot3 = var7;
    var7 = var4.RegistrationTransitionActionTypes;
    var _closure1_slot4 = var7;
    var4 = var4.authStateToRegisterTransitionStep;
    var _closure1_slot5 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AbortCodes;
    var _closure1_slot6 = var4;
    var4 = {};
    var7 = 2;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AuthStates;
    var9 = var8.REGISTER_IDENTITY;
    var8 = ['email', 'phoneToken'];
    var4[var9] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AuthStates;
    var9 = var8.REGISTER_DISPLAY_NAME;
    var8 = ['global_name'];
    var4[var9] = var8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.AuthStates;
    var8 = var7.REGISTER_ACCOUNT_INFORMATION;
    var7 = ['username', 'password'];
    var4[var8] = var7;
    var _closure1_slot7 = var4;
    var4 = function getRedirectStepForErrorKey(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = 'email';
            if(!(var1 !== var2)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var1 = 'phoneToken';
            if(!(var1 !== var2)) { _fun0004_ip = 36; continue _fun0004 }
case 38:
            var1 = 'global_name';
            if(!(var1 !== var2)) { _fun0004_ip = 9; continue _fun0004 }
case 39:
            var1 = 'username';
            if(!(var1 !== var2)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var1 = 'password';
            if(!(var1 !== var2)) { _fun0004_ip = 40; continue _fun0004 }
case 42:
            var1 = null;
            return var1;
case 40:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.AuthStates;
            var1 = var1.REGISTER_ACCOUNT_INFORMATION;
            return var1;
case 9:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.AuthStates;
            var1 = var1.REGISTER_DISPLAY_NAME;
            return var1;
case 36:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.AuthStates;
            var1 = var1.REGISTER_IDENTITY;
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/utils/handleRegisterErrorRedirection.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function handleRegisterErrorRedirection(arg1, arg2, arg3, arg4) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var6 = arg3;
            var7 = _closure1_slot1;
            var2 = _closure1_slot2;
            var13 = 3;
            var2 = var2[var13];
            var5 = undefined;
            var7 = var7.bind(var5)(var2);
            var2 = 'date_of_birth';
            var2 = var7.bind(var5)(var2, var6);
            var8 = null;
            if(!(var8 == var2)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var2 = global;
            var7 = var2.Number;
            var2 = var6.code;
            var7 = var7.bind(var5)(var2);
            var2 = _closure1_slot6;
            var2 = var2.UNDER_MINIMUM_AGE;
            if(!(var7 !== var2)) { _fun0005_ip = 43; continue _fun0005 }
case 45:
            var7 = _closure1_slot9;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 4;
            var2 = var10[var2];
            var9 = var9.bind(var5)(var2);
            var2 = var9.getRegistrationSteps;
            var2 = var2.bind(var9)();
            var12 = var7.bind(var5)(var2);
            var7 = var12.bind(var5)();
            var2 = var7.done;
            var11 = var7;
            var10 = undefined;
            var9 = undefined;
            var7 = undefined;
            if(var2) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var15 = var11.value;
            var14 = _closure1_slot9;
            var2 = _closure1_slot7;
            var2 = var2[var15];
            if(!(var8 == var2)) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var2 = new Array(0);
case 48:
            var18 = var14.bind(var5)(var2);
            var14 = var18.bind(var5)();
            var2 = var14.done;
            var17 = var14;
            var15 = var7;
            var7 = var15;
            if(var2) { _fun0005_ip = 50; continue _fun0005 }
case 22:
            var20 = var17.value;
            var14 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var13];
            var2 = var14.bind(var5)(var2);
            var16 = var2.bind(var5)(var20, var6);
            if(!(var8 != var16)) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var2 = _closure1_slot8;
            var14 = var2.bind(var5)(var20);
            var15 = var14;
            if(!(var8 == var15)) { _fun0005_ip = 53; continue _fun0005 }
case 51:
            var21 = var18.bind(var5)();
            var2 = var21.done;
            var17 = var21;
            var10 = var20;
            var9 = var16;
            var7 = var15;
            if(var2) { _fun0005_ip = 50; continue _fun0005 }
case 54:
            _fun0005_ip = 22; continue _fun0005;
case 53:
            var2 = {};
            var15 = _closure1_slot5;
            var15 = var15.bind(var5)(var14);
            var2['step'] = var15;
            var15 = _closure1_slot4;
            var15 = var15.RESPONSE_ERROR;
            var2['actionType'] = var15;
            var15 = new Array(2);
            var15[0] = var16;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var16 = 5;
            var16 = var18[var16];
            var18 = var17.bind(var5)(var16);
            var17 = var18.getCommonErrorDetails;
            var16 = var6.error_code;
            var16 = var17.bind(var18)(var16);
            var15[1] = var16;
            var2['details'] = var15;
            var2 = var3.bind(var5)(var2);
            var2 = var4.navigate;
            var2 = var2.bind(var4)(var14);
            var2 = undefined;
            return var2;
case 50:
            var14 = var12.bind(var5)();
            var2 = var14.done;
            var11 = var14;
            if(!var2) { _fun0005_ip = 47; continue _fun0005 }
case 46:
            var2 = var6.error_code;
            var2 = var8 != var2;
            if(!var2) { _fun0005_ip = 55; continue _fun0005 }
case 56:
            var7 = var6.message;
            var2 = var8 != var7;
case 55:
            if(!var2) { _fun0005_ip = 57; continue _fun0005 }
case 58:
            var2 = {};
            var7 = arg4;
            var2['step'] = var7;
            var7 = _closure1_slot4;
            var7 = var7.RESPONSE_ERROR;
            var2['actionType'] = var7;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 5;
            var7 = var9[var7];
            var8 = var8.bind(var5)(var7);
            var7 = var8.getCommonErrorDetails;
            var6 = var6.error_code;
            var7 = var7.bind(var8)(var6);
            var6 = new Array(1);
            var6[0] = var7;
            var2['details'] = var6;
            var2 = var3.bind(var5)(var2);
case 57:
            return var5;
case 43:
            var2 = {};
            var6 = _closure1_slot3;
            var6 = var6.AGE_GATE_UNDERAGE;
            var2['step'] = var6;
            var6 = _closure1_slot4;
            var6 = var6.VIEWED;
            var2['actionType'] = var6;
            var2 = var3.bind(var5)(var2);
            var3 = var4.push;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 2;
            var1 = var6[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.AuthStates;
            var2 = var1.AGE_GATE_UNDERAGE;
            var1 = {'fromRegister': true, 'disableSwipe': true};
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();