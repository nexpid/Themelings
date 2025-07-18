// app/modules/auth/native/RegistrationUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function trackRegTransition(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            if(!(var10 == var4)) { _fun0001_ip = 82; continue _fun0001 }
 62:
            var3 = _closure1_slot7;
            var1 = var3.getState;
            var1 = var1.bind(var3)();
            var4 = var1.registrationOptions;
 82:
            var1 = var10 != var5;
            var9 = null;
            if(!var1) { _fun0001_ip = 106; continue _fun0001 }
 91:
            var3 = _closure1_slot4;
            var1 = var3.getInvite;
            var9 = var1.bind(var3)(var5);
 106:
            var1 = var10 != var9;
            var8 = null;
            if(!var1) { _fun0001_ip = 119; continue _fun0001 }
 115:
            var8 = 'invite';
 119:
            var5 = var10 == var4;
            var1 = undefined;
            var3 = undefined;
            if(var5) { _fun0001_ip = 136; continue _fun0001 }
 130:
            var3 = var4.email;
 136:
            var3 = var10 != var3;
            var13 = 'email';
            if(var3) { _fun0001_ip = 175; continue _fun0001 }
 147:
            var5 = var10 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 162; continue _fun0001 }
 156:
            var3 = var4.phone;
 162:
            var3 = var10 != var3;
            var13 = null;
            if(!var3) { _fun0001_ip = 175; continue _fun0001 }
 171:
            var13 = 'phone';
 175:
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
            if(var11) { _fun0001_ip = 257; continue _fun0001 }
 252:
            var8 = var9.code;
 257:
            var2['invite_code'] = var8;
            var11 = var10 == var9;
            var8 = undefined;
            if(var11) { _fun0001_ip = 290; continue _fun0001 }
 271:
            var11 = var9.channel;
            var12 = var10 == var11;
            var8 = undefined;
            if(var12) { _fun0001_ip = 290; continue _fun0001 }
 285:
            var8 = var11.id;
 290:
            var2['invite_channel_id'] = var8;
            var11 = var10 == var9;
            var8 = undefined;
            if(var11) { _fun0001_ip = 323; continue _fun0001 }
 304:
            var11 = var9.channel;
            var12 = var10 == var11;
            var8 = undefined;
            if(var12) { _fun0001_ip = 323; continue _fun0001 }
 318:
            var8 = var11.type;
 323:
            var2['invite_channel_type'] = var8;
            var11 = var10 == var9;
            var8 = undefined;
            if(var11) { _fun0001_ip = 356; continue _fun0001 }
 337:
            var11 = var9.guild;
            var12 = var10 == var11;
            var8 = undefined;
            if(var12) { _fun0001_ip = 356; continue _fun0001 }
 351:
            var8 = var11.id;
 356:
            var2['invite_guild_id'] = var8;
            var11 = var10 == var9;
            var8 = undefined;
            if(var11) { _fun0001_ip = 390; continue _fun0001 }
 370:
            var9 = var9.inviter;
            var10 = var10 == var9;
            var8 = undefined;
            if(var10) { _fun0001_ip = 390; continue _fun0001 }
 385:
            var8 = var9.id;
 390:
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
    var5 = native4;
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
 0:
            var7 = arg1;
            var1 = arg2;
            var6 = var1.isConsentRequired;
            var1 = var7.email;
            var8 = null;
            var1 = var8 != var1;
            if(var1) { _fun0002_ip = 37; continue _fun0002 }
 27:
            var2 = var7.phoneToken;
            var1 = var8 != var2;
 37:
            if(!var1) { _fun0002_ip = 124; continue _fun0002 }
 40:
            var2 = var7.username;
            var2 = var8 != var2;
            if(!var2) { _fun0002_ip = 121; continue _fun0002 }
 52:
            var3 = var7.password;
            var3 = var8 != var3;
            if(!var3) { _fun0002_ip = 118; continue _fun0002 }
 65:
            var4 = var7.birthday;
            var4 = var8 != var4;
            if(!var4) { _fun0002_ip = 115; continue _fun0002 }
 78:
            var5 = var7.consent;
            var5 = var8 != var5;
            if(!var5) { _fun0002_ip = 112; continue _fun0002 }
 91:
            var6 = !var6;
            if(var6) { _fun0002_ip = 109; continue _fun0002 }
 97:
            var8 = var7.consent;
            var7 = true;
            var6 = var7 === var8;
 109:
            var5 = var6;
 112:
            var4 = var5;
 115:
            var3 = var4;
 118:
            var2 = var3;
 121:
            var1 = var2;
 124:
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
 0:
                var1 = arg1;
                var2 = var1.step;
                var9 = var1.toStep;
                var3 = var1.actionType;
                var8 = var1.details;
                var5 = var1.overrideRegistrationOptions;
                var1 = _closure1_slot9;
                var1 = var1.VIEWED;
                if(!(var3 === var1)) { _fun0003_ip = 106; continue _fun0003 }
 50:
                var1 = _closure1_slot8;
                var1 = var1.CAPTCHA;
                if(!(var2 === var1)) { _fun0003_ip = 106; continue _fun0003 }
 64:
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
 106:
                var1 = _closure1_slot9;
                var1 = var1.VIEWED;
                if(!(var3 !== var1)) { _fun0003_ip = 173; continue _fun0003 }
 120:
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0003_ip = 169; continue _fun0003 }
 129:
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
 169:
                var1 = undefined;
                _fun0003_ip = 234; continue _fun0003;
 173:
                var5 = null;
                if(!(var5 != var2)) { _fun0003_ip = 219; continue _fun0003 }
 179:
                var5 = _closure1_slot12;
                var4 = {};
                var4['step'] = var2;
                var6 = _closure2_slot0;
                var6 = var6.current;
                var4['fromStep'] = var6;
                var4['actionType'] = var3;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
 219:
                var3 = _closure2_slot0;
                var3['current'] = var2;
                var1 = undefined;
 234:
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
 0:
                var3 = _closure2_slot2;
                var2 = null;
                if(!(var2 != var3)) { _fun0004_ip = 69; continue _fun0004 }
 13:
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
 69:
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
 0:
            var4 = arg1;
            var1 = -1;
            if(!(var1 !== var4)) { _fun0005_ip = 302; continue _fun0005 }
 16:
            var1 = 0;
            if(!(var1 !== var4)) { _fun0005_ip = 271; continue _fun0005 }
 25:
            var1 = 40333;
            if(!(var1 !== var4)) { _fun0005_ip = 240; continue _fun0005 }
 38:
            var1 = 50022;
            if(!(var1 !== var4)) { _fun0005_ip = 209; continue _fun0005 }
 51:
            var1 = 70005;
            if(!(var1 !== var4)) { _fun0005_ip = 178; continue _fun0005 }
 61:
            var1 = 70003;
            if(!(var1 !== var4)) { _fun0005_ip = 147; continue _fun0005 }
 71:
            var1 = 70008;
            if(!(var1 !== var4)) { _fun0005_ip = 116; continue _fun0005 }
 81:
            var1 = 70011;
            if(!(var1 !== var4)) { _fun0005_ip = 116; continue _fun0005 }
 91:
            var1 = undefined;
            if(!(var1 !== var4)) { _fun0005_ip = 108; continue _fun0005 }
 97:
            var1 = var4.toString;
            var1 = var1.bind(var4)();
            return var1;
 108:
            var1 = 'No error code';
            return var1;
 116:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = ': Phone number already associated with an account';
            var1 = var3.bind(var2)(var4, var1);
            return var1;
 147:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = ': Unable to send sms to phone number';
            var1 = var3.bind(var2)(var4, var1);
            return var1;
 178:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = ': Phone number not mobile';
            var1 = var3.bind(var2)(var4, var1);
            return var1;
 209:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = ': Phone number invalid';
            var1 = var3.bind(var2)(var4, var1);
            return var1;
 240:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = ': Blocked by proxy';
            var1 = var3.bind(var2)(var4, var1);
            return var1;
 271:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = ': Internal server error';
            var1 = var3.bind(var2)(var4, var1);
            return var1;
 302:
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