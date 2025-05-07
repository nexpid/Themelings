// app/modules/auth/native/RegistrationUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    tangon = function(argFoo) { // Original name: trackRegTransition
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            backup = entity.step;
            golfie = entity.fromStep;
            oscard = entity.toStep;
            romeon = entity.actionType;
            yankee = entity.details;
            tangon = entity.overrideRegistrationOptions;
            zuuluu = _closure1_slot5;
            entity = zuuluu.getDisplayedInviteCode;
            report = entity.bind(zuuluu)();
            offset = null;
            if(!(offset == tangon)) { _fun00002_ip = 82; continue _fun00001 }
 62:
            zuuluu = _closure1_slot6;
            entity = zuuluu.getState;
            entity = entity.bind(zuuluu)();
            tangon = entity.registrationOptions;
 82:
            entity = offset != report;
            verify = null;
            if(!entity) { _fun00002_ip = 106; continue _fun00001 }
 91:
            zuuluu = _closure1_slot4;
            entity = zuuluu.getInvite;
            verify = entity.bind(zuuluu)(report);
 106:
            entity = offset != verify;
            option = null;
            if(!entity) { _fun00002_ip = 119; continue _fun00001 }
 115:
            option = 'invite';
 119:
            report = offset == tangon;
            entity = undefined;
            zuuluu = undefined;
            if(report) { _fun00002_ip = 136; continue _fun00001 }
 130:
            zuuluu = tangon.email;
 136:
            zuuluu = offset != zuuluu;
            foxtra = 'email';
            if(zuuluu) { _fun00002_ip = 175; continue _fun00001 }
 147:
            report = offset == tangon;
            zuuluu = undefined;
            if(report) { _fun00002_ip = 162; continue _fun00001 }
 156:
            zuuluu = tangon.phone;
 162:
            zuuluu = offset != zuuluu;
            foxtra = null;
            if(!zuuluu) { _fun00002_ip = 175; continue _fun00001 }
 171:
            foxtra = 'phone';
 175:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 7;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot9;
            zuuluu = michal.REGISTER_TRANSITION;
            michal = {};
            michal['step'] = backup;
            michal['identity_type'] = foxtra;
            michal['action_type'] = romeon;
            michal['action_details'] = yankee;
            michal['registration_source'] = option;
            yankee = offset == verify;
            option = undefined;
            if(yankee) { _fun00002_ip = 257; continue _fun00001 }
 252:
            option = verify.code;
 257:
            michal['invite_code'] = option;
            yankee = offset == verify;
            option = undefined;
            if(yankee) { _fun00002_ip = 290; continue _fun00001 }
 271:
            yankee = verify.channel;
            romeon = offset == yankee;
            option = undefined;
            if(romeon) { _fun00002_ip = 290; continue _fun00001 }
 285:
            option = yankee.id;
 290:
            michal['invite_channel_id'] = option;
            yankee = offset == verify;
            option = undefined;
            if(yankee) { _fun00002_ip = 323; continue _fun00001 }
 304:
            yankee = verify.channel;
            romeon = offset == yankee;
            option = undefined;
            if(romeon) { _fun00002_ip = 323; continue _fun00001 }
 318:
            option = yankee.type;
 323:
            michal['invite_channel_type'] = option;
            yankee = offset == verify;
            option = undefined;
            if(yankee) { _fun00002_ip = 356; continue _fun00001 }
 337:
            yankee = verify.guild;
            romeon = offset == yankee;
            option = undefined;
            if(romeon) { _fun00002_ip = 356; continue _fun00001 }
 351:
            option = yankee.id;
 356:
            michal['invite_guild_id'] = option;
            yankee = offset == verify;
            option = undefined;
            if(yankee) { _fun00002_ip = 390; continue _fun00001 }
 370:
            verify = verify.inviter;
            offset = offset == verify;
            option = undefined;
            if(offset) { _fun00002_ip = 390; continue _fun00001 }
 385:
            option = verify.id;
 390:
            michal['invite_inviter_id'] = option;
            michal['from_step'] = golfie;
            michal['to_step'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    var _closure1_slot11 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    verify = golfie[entity];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(verify);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.useRegistrationUIStore;
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.RegisterTransitionSteps;
    var _closure1_slot7 = option;
    report = report.RegistrationTransitionActionTypes;
    var _closure1_slot8 = report;
    report = 5;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.AnalyticEvents;
    var _closure1_slot9 = report;
    report = 6;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot10 = report;
    report = 10;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/auth/native/RegistrationUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo, argBar) { // Original name: hasAllRegistrationFieldsCompleted
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golfie = argFoo;
            entity = argBar;
            oscard = entity.isConsentRequired;
            tangon = entity.ignoreBirthday;
            entity = golfie.email;
            option = null;
            entity = option != entity;
            if(entity) { _fun00004_ip = 43; continue _fun00003 }
 33:
            michal = golfie.phoneToken;
            entity = option != michal;
 43:
            if(!entity) { _fun00004_ip = 139; continue _fun00003 }
 46:
            michal = golfie.username;
            michal = option != michal;
            if(!michal) { _fun00004_ip = 136; continue _fun00003 }
 58:
            zuuluu = golfie.password;
            zuuluu = option != zuuluu;
            if(!zuuluu) { _fun00004_ip = 133; continue _fun00003 }
 71:
            report = golfie.birthday;
            report = option == report;
            if(!report) { _fun00004_ip = 87; continue _fun00003 }
 84:
            report = !tangon;
 87:
            tangon = !report;
            if(report) { _fun00004_ip = 130; continue _fun00003 }
 93:
            report = golfie.consent;
            report = option != report;
            if(!report) { _fun00004_ip = 127; continue _fun00003 }
 106:
            oscard = !oscard;
            if(oscard) { _fun00004_ip = 124; continue _fun00003 }
 112:
            option = golfie.consent;
            golfie = true;
            oscard = golfie === option;
 124:
            report = oscard;
 127:
            tangon = report;
 130:
            zuuluu = tangon;
 133:
            michal = zuuluu;
 136:
            entity = michal;
 139:
            return entity;
        }
    };
    zuuluu['hasAllRegistrationFieldsCompleted'] = report;
    zuuluu['trackRegTransition'] = tangon;
    tangon = function(argFoo) { // Original name: getTrackRegTransition
        michal = argFoo;
        var _closure2_slot0 = michal;
        entity = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                michal = entity.step;
                verify = entity.toStep;
                zuuluu = entity.actionType;
                option = entity.details;
                report = entity.overrideRegistrationOptions;
                entity = _closure1_slot8;
                entity = entity.VIEWED;
                if(!(zuuluu === entity)) { _fun00006_ip = 106; continue _fun00005 }
 50:
                entity = _closure1_slot7;
                entity = entity.CAPTCHA;
                if(!(michal === entity)) { _fun00006_ip = 106; continue _fun00005 }
 64:
                golfie = _closure1_slot11;
                oscard = {};
                oscard['step'] = michal;
                entity = _closure2_slot0;
                entity = entity.current;
                oscard['fromStep'] = entity;
                oscard['actionType'] = zuuluu;
                entity = undefined;
                oscard = golfie.bind(entity)(oscard);
                return entity;
 106:
                entity = _closure1_slot8;
                entity = entity.VIEWED;
                if(!(zuuluu !== entity)) { _fun00006_ip = 173; continue _fun00005 }
 120:
                entity = null;
                entity = entity != michal;
                if(!entity) { _fun00006_ip = 169; continue _fun00005 }
 129:
                golfie = _closure1_slot11;
                oscard = {};
                oscard['step'] = michal;
                oscard['toStep'] = verify;
                oscard['actionType'] = zuuluu;
                oscard['details'] = option;
                oscard['overrideRegistrationOptions'] = report;
                report = undefined;
                oscard = golfie.bind(report)(oscard);
                entity = undefined;
 169:
                entity = undefined;
                _fun00006_ip = 234; continue _fun00005;
 173:
                report = null;
                if(!(report != michal)) { _fun00006_ip = 219; continue _fun00005 }
 179:
                report = _closure1_slot11;
                tangon = {};
                tangon['step'] = michal;
                oscard = _closure2_slot0;
                oscard = oscard.current;
                tangon['fromStep'] = oscard;
                tangon['actionType'] = zuuluu;
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
 219:
                zuuluu = _closure2_slot0;
                zuuluu['current'] = michal;
                entity = undefined;
 234:
                return entity;
            }
        };
        return entity;
    };
    zuuluu['getTrackRegTransition'] = tangon;
    tangon = function(argFoo) {
        oscard = argFoo;
        verify = _closure1_slot3;
        option = verify.useContext;
        michal = _closure1_slot0;
        golfie = _closure1_slot2;
        zuuluu = 8;
        zuuluu = golfie[zuuluu];
        tangon = undefined;
        zuuluu = michal.bind(tangon)(zuuluu);
        zuuluu = zuuluu.TrackRegistrationContext;
        zuuluu = option.bind(verify)(zuuluu);
        var _closure2_slot0 = zuuluu;
        zuuluu = oscard.destinationStep;
        var _closure2_slot1 = zuuluu;
        zuuluu = oscard.onPress;
        var _closure2_slot2 = zuuluu;
        zuuluu = _closure1_slot10;
        entity = 9;
        entity = golfie[entity];
        entity = michal.bind(tangon)(entity);
        michal = entity.HeaderBackButton;
        entity = {};
        yankee = entity;
        offset = oscard;
        oscard = copyDataProperties(yankee, offset);
        oscard = function() { // Original name: onPress
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = _closure2_slot2;
                michal = null;
                if(!(michal != zuuluu)) { _fun00008_ip = 61; continue _fun00007 }
 13:
                tangon = _closure2_slot0;
                zuuluu = {};
                michal = _closure2_slot1;
                zuuluu['step'] = michal;
                michal = _closure1_slot8;
                michal = michal.VIEWED;
                zuuluu['actionType'] = michal;
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                entity = _closure2_slot2;
                entity = entity.bind(michal)();
 61:
                entity = undefined;
                return entity;
            }
        };
        report = 'onPress';
        entity[report] = oscard;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['BackButtonWithTracking'] = tangon;
    michal = function(argFoo) {
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            entity = -1;
            if(!(entity !== tangon)) { _fun00010_ip = 302; continue _fun00009 }
 16:
            entity = 0;
            if(!(entity !== tangon)) { _fun00010_ip = 271; continue _fun00009 }
 25:
            entity = 40333;
            if(!(entity !== tangon)) { _fun00010_ip = 240; continue _fun00009 }
 38:
            entity = 50022;
            if(!(entity !== tangon)) { _fun00010_ip = 209; continue _fun00009 }
 51:
            entity = 70005;
            if(!(entity !== tangon)) { _fun00010_ip = 178; continue _fun00009 }
 61:
            entity = 70003;
            if(!(entity !== tangon)) { _fun00010_ip = 147; continue _fun00009 }
 71:
            entity = 70008;
            if(!(entity !== tangon)) { _fun00010_ip = 116; continue _fun00009 }
 81:
            entity = 70011;
            if(!(entity !== tangon)) { _fun00010_ip = 116; continue _fun00009 }
 91:
            entity = undefined;
            if(!(entity !== tangon)) { _fun00010_ip = 108; continue _fun00009 }
 97:
            entity = tangon.toString;
            entity = entity.bind(tangon)();
            return entity;
 108:
            entity = 'No error code';
            return entity;
 116:
            entity = global;
            entity = entity.HermesInternal;
            zuuluu = entity.concat;
            michal = '';
            entity = ': Phone number already associated with an account';
            entity = zuuluu.bind(michal)(tangon, entity);
            return entity;
 147:
            entity = global;
            entity = entity.HermesInternal;
            zuuluu = entity.concat;
            michal = '';
            entity = ': Unable to send sms to phone number';
            entity = zuuluu.bind(michal)(tangon, entity);
            return entity;
 178:
            entity = global;
            entity = entity.HermesInternal;
            zuuluu = entity.concat;
            michal = '';
            entity = ': Phone number not mobile';
            entity = zuuluu.bind(michal)(tangon, entity);
            return entity;
 209:
            entity = global;
            entity = entity.HermesInternal;
            zuuluu = entity.concat;
            michal = '';
            entity = ': Phone number invalid';
            entity = zuuluu.bind(michal)(tangon, entity);
            return entity;
 240:
            entity = global;
            entity = entity.HermesInternal;
            zuuluu = entity.concat;
            michal = '';
            entity = ': Blocked by proxy';
            entity = zuuluu.bind(michal)(tangon, entity);
            return entity;
 271:
            entity = global;
            entity = entity.HermesInternal;
            zuuluu = entity.concat;
            michal = '';
            entity = ': Internal server error';
            entity = zuuluu.bind(michal)(tangon, entity);
            return entity;
 302:
            entity = global;
            entity = entity.HermesInternal;
            zuuluu = entity.concat;
            michal = '';
            entity = ': Captcha was not completed';
            entity = zuuluu.bind(michal)(tangon, entity);
            return entity;
        }
    };
    zuuluu['getCommonErrorDetails'] = michal;
    return entity;
})();