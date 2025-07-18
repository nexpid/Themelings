// app/modules/auth/native/components/utils/handleRegisterErrorRedirection.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
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
            var9 = _closure1_slot11;
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
            var7 = _closure1_slot11;
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
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var _closure1_slot11 = var1;
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
    var4 = var4.getRegistrationVariant;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.RegisterTransitionSteps;
    var _closure1_slot4 = var7;
    var7 = var4.RegistrationTransitionActionTypes;
    var _closure1_slot5 = var7;
    var4 = var4.authStateToRegisterTransitionStep;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AbortCodes;
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = 3;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AuthStates;
    var9 = var8.REGISTER_IDENTITY;
    var8 = ['email', 'phoneToken'];
    var4[var9] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AuthStates;
    var9 = var8.REGISTER_IDENTITY_AND_PASSWORD;
    var8 = ['email', 'phoneToken', 'password'];
    var4[var9] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AuthStates;
    var9 = var8.REGISTER_DISPLAY_NAME;
    var8 = ['global_name'];
    var4[var9] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AuthStates;
    var9 = var8.REGISTER_ACCOUNT_INFORMATION;
    var8 = ['username', 'password'];
    var4[var9] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AuthStates;
    var9 = var8.REGISTER_USERNAME;
    var8 = ['username'];
    var4[var9] = var8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.AuthStates;
    var8 = var7.REGISTER_PASSWORD;
    var7 = ['password'];
    var4[var8] = var7;
    var _closure1_slot8 = var4;
    var4 = function getRedirectStepForErrorKey(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var1 = _closure1_slot3;
            var4 = undefined;
            var3 = var1.bind(var4)();
            var1 = 'email';
            if(!(var1 !== var5)) { _fun0004_ip = 414; continue _fun0004 }
 27:
            var1 = 'phoneToken';
            if(!(var1 !== var5)) { _fun0004_ip = 414; continue _fun0004 }
 38:
            var1 = 'global_name';
            if(!(var1 !== var5)) { _fun0004_ip = 380; continue _fun0004 }
 49:
            var1 = 'username';
            if(!(var1 !== var5)) { _fun0004_ip = 243; continue _fun0004 }
 60:
            var1 = 'password';
            if(!(var1 !== var5)) { _fun0004_ip = 72; continue _fun0004 }
 68:
            var1 = null;
            return var1;
 72:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 4;
            var1 = var1[var6];
            var1 = var5.bind(var4)(var1);
            var1 = var1.ExperimentVariants;
            var1 = var1.NAME_AFTER_PASSWORD;
            if(!(var1 !== var3)) { _fun0004_ip = 209; continue _fun0004 }
 108:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var5.bind(var4)(var1);
            var1 = var1.ExperimentVariants;
            var1 = var1.EMAIL_PHONE_PASSWORD;
            if(!(var1 !== var3)) { _fun0004_ip = 175; continue _fun0004 }
 141:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 3;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.AuthStates;
            var1 = var1.REGISTER_ACCOUNT_INFORMATION;
            return var1;
 175:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 3;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.AuthStates;
            var1 = var1.REGISTER_IDENTITY_AND_PASSWORD;
            return var1;
 209:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 3;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.AuthStates;
            var1 = var1.REGISTER_PASSWORD;
            return var1;
 243:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 4;
            var1 = var1[var6];
            var1 = var5.bind(var4)(var1);
            var1 = var1.ExperimentVariants;
            var1 = var1.NAME_AFTER_PASSWORD;
            if(!(var1 !== var3)) { _fun0004_ip = 346; continue _fun0004 }
 279:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var5.bind(var4)(var1);
            var1 = var1.ExperimentVariants;
            var1 = var1.EMAIL_PHONE_PASSWORD;
            if(!(var1 !== var3)) { _fun0004_ip = 346; continue _fun0004 }
 312:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 3;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.AuthStates;
            var1 = var1.REGISTER_ACCOUNT_INFORMATION;
            return var1;
 346:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 3;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.AuthStates;
            var1 = var1.REGISTER_USERNAME;
            return var1;
 380:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 3;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.AuthStates;
            var1 = var1.REGISTER_DISPLAY_NAME;
            return var1;
 414:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 4;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.ExperimentVariants;
            var1 = var1.EMAIL_PHONE_PASSWORD;
            if(!(var3 !== var1)) { _fun0004_ip = 484; continue _fun0004 }
 450:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 3;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.AuthStates;
            var1 = var1.REGISTER_IDENTITY;
            _fun0004_ip = 516; continue _fun0004;
 484:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.AuthStates;
            var1 = var2.REGISTER_IDENTITY_AND_PASSWORD;
 516:
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/utils/handleRegisterErrorRedirection.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function handleRegisterErrorRedirection(arg1, arg2, arg3, arg4) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg1;
            var3 = arg2;
            var6 = arg3;
            var7 = _closure1_slot1;
            var2 = _closure1_slot2;
            var13 = 5;
            var2 = var2[var13];
            var5 = undefined;
            var7 = var7.bind(var5)(var2);
            var2 = 'date_of_birth';
            var2 = var7.bind(var5)(var2, var6);
            var8 = null;
            if(!(var8 == var2)) { _fun0005_ip = 544; continue _fun0005 }
 53:
            var2 = global;
            var7 = var2.Number;
            var2 = var6.code;
            var7 = var7.bind(var5)(var2);
            var2 = _closure1_slot7;
            var2 = var2.UNDER_MINIMUM_AGE;
            if(!(var7 !== var2)) { _fun0005_ip = 544; continue _fun0005 }
 88:
            var2 = _closure1_slot3;
            var9 = var2.bind(var5)();
            var7 = _closure1_slot10;
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var11 = 6;
            var2 = var2[var11];
            var2 = var10.bind(var5)(var2);
            var2 = var2.ORDERED_REGISTRATION_STEPS_BY_VARIANT;
            var2 = var2[var9];
            if(!(var8 == var2)) { _fun0005_ip = 157; continue _fun0005 }
 134:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var11];
            var9 = var10.bind(var5)(var9);
            var2 = var9.DEFAULT_REGISTRATION_STEPS;
 157:
            var12 = var7.bind(var5)(var2);
            var7 = var12.bind(var5)();
            var2 = var7.done;
            var11 = var7;
            var10 = undefined;
            var9 = undefined;
            var7 = undefined;
            if(var2) { _fun0005_ip = 437; continue _fun0005 }
 186:
            var15 = var11.value;
            var14 = _closure1_slot10;
            var2 = _closure1_slot8;
            var2 = var2[var15];
            if(!(var8 == var2)) { _fun0005_ip = 211; continue _fun0005 }
 207:
            var2 = new Array(0);
 211:
            var18 = var14.bind(var5)(var2);
            var14 = var18.bind(var5)();
            var2 = var14.done;
            var17 = var14;
            var15 = var7;
            var7 = var15;
            if(var2) { _fun0005_ip = 419; continue _fun0005 }
 240:
            var20 = var17.value;
            var14 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var13];
            var2 = var14.bind(var5)(var2);
            var16 = var2.bind(var5)(var20, var6);
            if(!(var8 != var16)) { _fun0005_ip = 288; continue _fun0005 }
 272:
            var2 = _closure1_slot9;
            var14 = var2.bind(var5)(var20);
            var15 = var14;
            if(!(var8 == var15)) { _fun0005_ip = 314; continue _fun0005 }
 288:
            var21 = var18.bind(var5)();
            var2 = var21.done;
            var17 = var21;
            var10 = var20;
            var9 = var16;
            var7 = var15;
            if(var2) { _fun0005_ip = 419; continue _fun0005 }
 312:
            _fun0005_ip = 240; continue _fun0005;
 314:
            var2 = {};
            var15 = _closure1_slot6;
            var15 = var15.bind(var5)(var14);
            var2['step'] = var15;
            var15 = _closure1_slot5;
            var15 = var15.RESPONSE_ERROR;
            var2['actionType'] = var15;
            var15 = new Array(2);
            var15[0] = var16;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var16 = 7;
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
 419:
            var14 = var12.bind(var5)();
            var2 = var14.done;
            var11 = var14;
            if(!var2) { _fun0005_ip = 186; continue _fun0005 }
 437:
            var2 = var6.error_code;
            var2 = var8 != var2;
            if(!var2) { _fun0005_ip = 459; continue _fun0005 }
 450:
            var7 = var6.message;
            var2 = var8 != var7;
 459:
            if(!var2) { _fun0005_ip = 542; continue _fun0005 }
 462:
            var2 = {};
            var7 = arg4;
            var2['step'] = var7;
            var7 = _closure1_slot5;
            var7 = var7.RESPONSE_ERROR;
            var2['actionType'] = var7;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 7;
            var7 = var9[var7];
            var8 = var8.bind(var5)(var7);
            var7 = var8.getCommonErrorDetails;
            var6 = var6.error_code;
            var7 = var7.bind(var8)(var6);
            var6 = new Array(1);
            var6[0] = var7;
            var2['details'] = var6;
            var2 = var3.bind(var5)(var2);
 542:
            return var5;
 544:
            var2 = {};
            var6 = _closure1_slot4;
            var6 = var6.AGE_GATE_UNDERAGE;
            var2['step'] = var6;
            var6 = _closure1_slot5;
            var6 = var6.VIEWED;
            var2['actionType'] = var6;
            var2 = var3.bind(var5)(var2);
            var3 = var4.push;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 3;
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