// app/modules/auth/native/components/utils/useUsernameRegistrationStep.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useRegistrationUIStore;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.authStateToRegisterTransitionStep;
    var _closure1_slot7 = var7;
    var4 = var4.RegistrationTransitionActionTypes;
    var _closure1_slot8 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/utils/useUsernameRegistrationStep.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useUsernameRegistrationStep(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var6 = _closure1_slot4;
            var8 = var6.useContext;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 5;
            var4 = var7[var4];
            var10 = undefined;
            var4 = var5.bind(var10)(var4);
            var4 = var4.TrackRegistrationContext;
            var8 = var8.bind(var6)(var4);
            var _closure2_slot1 = var8;
            var4 = 6;
            var4 = var7[var4];
            var5 = var5.bind(var10)(var4);
            var4 = var5.useNavigation;
            var12 = var4.bind(var5)();
            var _closure2_slot2 = var12;
            var5 = _closure1_slot6;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.registrationOptions;
                return var1;
            };
            var4 = var5.bind(var10)(var4);
            var5 = var6.useState;
            var7 = var4.username;
            var11 = null;
            if(!(var11 == var7)) { _fun0001_ip = 131; continue _fun0001 }
 117:
            var9 = _closure1_slot5;
            var4 = var9.registrationUsernameSuggestion;
            var7 = var4.bind(var9)();
 131:
            var9 = var11 != var7;
            var4 = '';
            if(!var9) { _fun0001_ip = 145; continue _fun0001 }
 142:
            var4 = var7;
 145:
            var6 = var5.bind(var6)(var4);
            var5 = _closure1_slot3;
            var4 = 2;
            var5 = var5.bind(var10)(var6, var4);
            var4 = 0;
            var7 = var5[var4];
            var _closure2_slot3 = var7;
            var4 = 1;
            var6 = var5[var4];
            var5 = _closure1_slot6;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.errors;
                return var1;
            };
            var9 = var5.bind(var10)(var4);
            var5 = _closure1_slot1;
            var13 = _closure1_slot2;
            var4 = 7;
            var4 = var13[var4];
            var5 = var5.bind(var10)(var4);
            var4 = 'username';
            var9 = var5.bind(var10)(var4, var9);
            var5 = _closure1_slot0;
            var4 = 8;
            var4 = var13[var4];
            var13 = var5.bind(var10)(var4);
            var5 = var13.useUsernameStatus;
            var4 = true;
            var4 = var5.bind(var13)(var7, var4, var4);
            var _closure2_slot4 = var4;
            var5 = var4;
            if(!(var11 != var9)) { _fun0001_ip = 317; continue _fun0001 }
 268:
            var4 = {};
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 9;
            var13 = var15[var13];
            var13 = var14.bind(var10)(var13);
            var13 = var13.NameValidationState;
            var13 = var13.ERROR;
            var4['type'] = var13;
            var4['message'] = var9;
            _closure2_slot4 = var4;
            var5 = var4;
 317:
            var9 = _closure1_slot4;
            var4 = var9.useCallback;
            var3 = new Array(4);
            var3[0] = var5;
            var3[1] = var12;
            var3[2] = var8;
            var3[3] = var2;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot4;
                    var1 = null;
                    var4 = var1 == var3;
                    var1 = undefined;
                    var5 = undefined;
                    if(var4) { _fun0002_ip = 25; continue _fun0002 }
 20:
                    var5 = var3.type;
 25:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 9;
                    var4 = var7[var4];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.NameValidationState;
                    var4 = var4.ERROR;
                    if(!(var5 === var4)) { _fun0002_ip = 130; continue _fun0002 }
 64:
                    var5 = _closure2_slot1;
                    var4 = {};
                    var7 = _closure1_slot7;
                    var6 = _closure2_slot0;
                    var6 = var7.bind(var1)(var6);
                    var4['step'] = var6;
                    var6 = _closure1_slot8;
                    var6 = var6.INPUT_ERROR;
                    var4['actionType'] = var6;
                    var6 = _closure2_slot4;
                    var7 = var6.message;
                    var6 = new Array(1);
                    var6[0] = var7;
                    var4['details'] = var6;
                    var4 = var5.bind(var1)(var4);
 130:
                    var4 = arg1;
                    if(var4) { _fun0002_ip = 252; continue _fun0002 }
 136:
                    var9 = _closure2_slot1;
                    var8 = {};
                    var4 = _closure1_slot7;
                    var6 = _closure2_slot0;
                    var4 = var4.bind(var1)(var6);
                    var8['step'] = var4;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 10;
                    var10 = var7[var4];
                    var11 = var5.bind(var1)(var10);
                    var10 = var11.getNextRegistrationTransitionStep;
                    var10 = var10.bind(var11)(var6);
                    var8['toStep'] = var10;
                    var10 = _closure1_slot8;
                    var10 = var10.SUCCESS;
                    var8['actionType'] = var10;
                    var8 = var9.bind(var1)(var8);
                    var4 = var7[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.getNextAuthState;
                    var6 = var4.bind(var5)(var6);
                    var5 = _closure2_slot2;
                    var4 = var5.push;
                    var4 = var4.bind(var5)(var6);
                    _fun0002_ip = 297; continue _fun0002;
 252:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 10;
                    var3 = var5[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.handleRegistrationSubmit;
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot1;
                    var2 = var5.bind(var6)(var4, var3, var2);
 297:
                    return var1;
                }
            };
            var4 = var4.bind(var9)(var2, var3);
            var8 = var9.useMemo;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var5;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot3;
                    var3 = null;
                    var1 = var3 == var1;
                    if(var1) { _fun0003_ip = 28; continue _fun0003 }
 16:
                    var5 = _closure2_slot3;
                    var4 = '';
                    var1 = var4 === var5;
 28:
                    if(var1) { _fun0003_ip = 90; continue _fun0003 }
 31:
                    var2 = _closure2_slot4;
                    var4 = var3 == var2;
                    var5 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0003_ip = 51; continue _fun0003 }
 46:
                    var3 = var2.type;
 51:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 9;
                    var2 = var6[var2];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.NameValidationState;
                    var2 = var2.ERROR;
                    var1 = var3 === var2;
 90:
                    return var1;
                }
            };
            var3 = var8.bind(var9)(var2, var3);
            var8 = var9.useCallback;
            var2 = new Array(3);
            var2[0] = var7;
            var13 = var11 == var5;
            var12 = undefined;
            if(var13) { _fun0001_ip = 416; continue _fun0001 }
 411:
            var12 = var5.message;
 416:
            var2[1] = var12;
            var11 = var11 == var5;
            var10 = undefined;
            if(var11) { _fun0001_ip = 434; continue _fun0001 }
 429:
            var10 = var5.type;
 434:
            var2[2] = var10;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0004_ip = 97; continue _fun0004 }
 13:
                    var4 = _closure2_slot3;
                    var3 = '';
                    if(!(var3 !== var4)) { _fun0004_ip = 97; continue _fun0004 }
 25:
                    var3 = _closure2_slot4;
                    var5 = var1 == var3;
                    var6 = undefined;
                    var4 = undefined;
                    if(var5) { _fun0004_ip = 45; continue _fun0004 }
 40:
                    var4 = var3.type;
 45:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 9;
                    var3 = var7[var3];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.NameValidationState;
                    var3 = var3.ERROR;
                    var1 = null;
                    if(!(var4 === var3)) { _fun0004_ip = 95; continue _fun0004 }
 86:
                    var2 = _closure2_slot4;
                    var1 = var2.message;
 95:
                    _fun0004_ip = 159; continue _fun0004;
 97:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 11;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.GPfy3N;
                    var1 = var3.bind(var4)(var2);
 159:
                    return var1;
                }
            };
            var2 = var8.bind(var9)(var1, var2);
            var1 = {};
            var1['username'] = var7;
            var1['setUsername'] = var6;
            var1['usernameStatus'] = var5;
            var1['transitionToNextStepOrSubmit'] = var4;
            var1['preventSubmitUsername'] = var3;
            var1['validateUsername'] = var2;
            return var1;
        }
    };
    var3['useUsernameRegistrationStep'] = var2;
    return var1;
})();