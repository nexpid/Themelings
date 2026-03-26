// app/modules/auth/native/RegistrationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function trackRegTransition(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var14 = var1.step;
            var7 = var1.fromStep;
            var6 = var1.toStep;
            var12 = var1.actionType;
            var11 = var1.details;
            var4 = var1.overrideRegistrationOptions;
            var3 = _closure1_slot5;
            var1 = var3.getDisplayedInviteCode;
            var5 = var1.bind(var3)();
            var10 = null;
            if(!(var10 == var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot7;
            var1 = var3.getState;
            var1 = var1.bind(var3)();
            var4 = var1.registrationOptions;
case 2:
            var1 = var10 != var5;
            var9 = null;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot4;
            var1 = var3.getInvite;
            var9 = var1.bind(var3)(var5);
case 4:
            var1 = var10 != var9;
            var8 = null;
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = 'invite';
case 6:
            var5 = var10 == var4;
            var1 = undefined;
            var3 = undefined;
            if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var4.email;
case 8:
            var3 = var10 != var3;
            var13 = 'email';
            if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var10 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = var4.phone;
case 12:
            var3 = var10 != var3;
            var13 = null;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 14:
            var13 = 'phone';
case 10:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 7;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot10;
            var3 = var2.REGISTER_TRANSITION;
            var2 = {};
            var2['step'] = var14;
            var2['identity_type'] = var13;
            var2['action_type'] = var12;
            var2['action_details'] = var11;
            var2['registration_source'] = var8;
            var11 = var10 == var9;
            var8 = undefined;
            if(var11) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var8 = var9.code;
case 15:
            var2['invite_code'] = var8;
            var11 = var10 == var9;
            var8 = undefined;
            if(var11) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var11 = var9.channel;
            var12 = var10 == var11;
            var8 = undefined;
            if(var12) { _fun0001_ip = 17; continue _fun0001 }
case 19:
            var8 = var11.id;
case 17:
            var2['invite_channel_id'] = var8;
            var11 = var10 == var9;
            var8 = undefined;
            if(var11) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var11 = var9.channel;
            var12 = var10 == var11;
            var8 = undefined;
            if(var12) { _fun0001_ip = 20; continue _fun0001 }
case 22:
            var8 = var11.type;
case 20:
            var2['invite_channel_type'] = var8;
            var11 = var10 == var9;
            var8 = undefined;
            if(var11) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var11 = var9.guild;
            var12 = var10 == var11;
            var8 = undefined;
            if(var12) { _fun0001_ip = 23; continue _fun0001 }
case 25:
            var8 = var11.id;
case 23:
            var2['invite_guild_id'] = var8;
            var11 = var10 == var9;
            var8 = undefined;
            if(var11) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var9 = var9.inviter;
            var10 = var10 == var9;
            var8 = undefined;
            if(var10) { _fun0001_ip = 26; continue _fun0001 }
case 28:
            var8 = var9.id;
case 26:
            var2['invite_inviter_id'] = var8;
            var2['from_step'] = var7;
            var2['to_step'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.clearRegistrationErrorMessage;
    var _closure1_slot6 = var8;
    var5 = var5.useRegistrationUIStore;
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.RegisterTransitionSteps;
    var _closure1_slot8 = var8;
    var5 = var5.RegistrationTransitionActionTypes;
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot10 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot11 = var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/auth/native/RegistrationUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function hasAllRegistrationFieldsCompleted(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var1 = arg2;
            var6 = var1.isConsentRequired;
            var1 = var7.email;
            var8 = null;
            var1 = var8 != var1;
            if(var1) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var2 = var7.phoneToken;
            var1 = var8 != var2;
case 29:
            if(!var1) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var2 = var7.username;
            var2 = var8 != var2;
            if(!var2) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var3 = var7.password;
            var3 = var8 != var3;
            if(!var3) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var4 = var7.birthday;
            var4 = var8 != var4;
            if(!var4) { _fun0002_ip = 7; continue _fun0002 }
case 37:
            var5 = var7.consent;
            var5 = var8 != var5;
            if(!var5) { _fun0002_ip = 38; continue _fun0002 }
case 5:
            var6 = !var6;
            if(var6) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var8 = var7.consent;
            var7 = true;
            var6 = var7 === var8;
case 39:
            var5 = var6;
case 38:
            var4 = var5;
case 7:
            var3 = var4;
case 35:
            var2 = var3;
case 33:
            var1 = var2;
case 31:
            return var1;
        }
    };
    var3['hasAllRegistrationFieldsCompleted'] = var5;
    var3['trackRegTransition'] = var4;
    var4 = function getTrackRegTransition(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var2 = var1.step;
                var9 = var1.toStep;
                var3 = var1.actionType;
                var8 = var1.details;
                var5 = var1.overrideRegistrationOptions;
                var1 = _closure1_slot9;
                var1 = var1.VIEWED;
                if(!(var3 === var1)) { _fun0003_ip = 4; continue _fun0003 }
case 41:
                var1 = _closure1_slot8;
                var1 = var1.CAPTCHA;
                if(!(var2 === var1)) { _fun0003_ip = 4; continue _fun0003 }
case 42:
                var7 = _closure1_slot12;
                var6 = {};
                var6['step'] = var2;
                var1 = _closure2_slot0;
                var1 = var1.current;
                var6['fromStep'] = var1;
                var6['actionType'] = var3;
                var1 = undefined;
                var6 = var7.bind(var1)(var6);
                return var1;
case 4:
                var1 = _closure1_slot9;
                var1 = var1.VIEWED;
                if(!(var3 !== var1)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0003_ip = 45; continue _fun0003 }
case 46:
                var7 = _closure1_slot12;
                var6 = {};
                var6['step'] = var2;
                var6['toStep'] = var9;
                var6['actionType'] = var3;
                var6['details'] = var8;
                var6['overrideRegistrationOptions'] = var5;
                var5 = undefined;
                var6 = var7.bind(var5)(var6);
                var1 = undefined;
case 45:
                var1 = undefined;
                _fun0003_ip = 47; continue _fun0003;
case 43:
                var5 = null;
                if(!(var5 != var2)) { _fun0003_ip = 48; continue _fun0003 }
case 49:
                var5 = _closure1_slot12;
                var4 = {};
                var4['step'] = var2;
                var6 = _closure2_slot0;
                var6 = var6.current;
                var4['fromStep'] = var6;
                var4['actionType'] = var3;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
case 48:
                var3 = _closure2_slot0;
                var3['current'] = var2;
                var1 = undefined;
case 47:
                return var1;
            }
        };
        return var1;
    };
    var3['getTrackRegTransition'] = var4;
    var4 = function(arg1) {
        var6 = arg1;
        var9 = _closure1_slot3;
        var8 = var9.useContext;
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 8;
        var3 = var7[var3];
        var4 = undefined;
        var3 = var2.bind(var4)(var3);
        var3 = var3.TrackRegistrationContext;
        var3 = var8.bind(var9)(var3);
        var _closure2_slot0 = var3;
        var3 = var6.destinationStep;
        var _closure2_slot1 = var3;
        var3 = var6.onPress;
        var _closure2_slot2 = var3;
        var3 = _closure1_slot11;
        var1 = 9;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.HeaderBackButton;
        var1 = {};
        var11 = var1;
        var10 = var6;
        var6 = copyDataProperties(var11, var10);
        var6 = function onPress() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure2_slot2;
                var2 = null;
                if(!(var2 != var3)) { _fun0004_ip = 50; continue _fun0004 }
case 51:
                var3 = _closure1_slot6;
                var2 = undefined;
                var3 = var3.bind(var2)();
                var4 = _closure2_slot0;
                var3 = {};
                var6 = _closure2_slot1;
                var3['step'] = var6;
                var5 = _closure1_slot9;
                var5 = var5.VIEWED;
                var3['actionType'] = var5;
                var3 = var4.bind(var2)(var3);
                var1 = _closure2_slot2;
                var1 = var1.bind(var2)();
case 50:
                var1 = undefined;
                return var1;
            }
        };
        var5 = 'onPress';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['BackButtonWithTracking'] = var4;
    var2 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var1 = -1;
            if(!(var1 !== var4)) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var1 = 0;
            if(!(var1 !== var4)) { _fun0005_ip = 18; continue _fun0005 }
case 54:
            var1 = 40333;
            if(!(var1 !== var4)) { _fun0005_ip = 55; continue _fun0005 }
case 56:
            var1 = 50022;
            if(!(var1 !== var4)) { _fun0005_ip = 57; continue _fun0005 }
case 58:
            var1 = 70005;
            if(!(var1 !== var4)) { _fun0005_ip = 59; continue _fun0005 }
case 60:
            var1 = 70003;
            if(!(var1 !== var4)) { _fun0005_ip = 11; continue _fun0005 }
case 61:
            var1 = 70008;
            if(!(var1 !== var4)) { _fun0005_ip = 62; continue _fun0005 }
case 63:
            var1 = 70011;
            if(!(var1 !== var4)) { _fun0005_ip = 62; continue _fun0005 }
case 5:
            var1 = undefined;
            if(!(var1 !== var4)) { _fun0005_ip = 64; continue _fun0005 }
case 40:
            var1 = var4.toString;
            var1 = var1.bind(var4)();
            return var1;
case 64:
            var1 = 'No error code';
            return var1;
case 62:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = ': Phone number already associated with an account';
            var1 = var3.bind(var2)(var4, var1);
            return var1;
case 11:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = ': Unable to send sms to phone number';
            var1 = var3.bind(var2)(var4, var1);
            return var1;
case 59:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = ': Phone number not mobile';
            var1 = var3.bind(var2)(var4, var1);
            return var1;
case 57:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = ': Phone number invalid';
            var1 = var3.bind(var2)(var4, var1);
            return var1;
case 55:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = ': Blocked by proxy';
            var1 = var3.bind(var2)(var4, var1);
            return var1;
case 18:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = ': Internal server error';
            var1 = var3.bind(var2)(var4, var1);
            return var1;
case 52:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = ': Captcha was not completed';
            var1 = var3.bind(var2)(var4, var1);
            return var1;
        }
    };
    var3['getCommonErrorDetails'] = var2;
    return var1;
})();