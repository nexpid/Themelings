// app/modules/auth/native/RegistrationUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    tango = function(argFoo) { // Original name: trackRegTransition
        _fun111632: for(var _fun111632_ip = 0; ; ) switch(_fun111632_ip) {
 0:
            entity = argFoo;
            backup = entity.step;
            golf = entity.fromStep;
            oscar = entity.toStep;
            romeo = entity.actionType;
            yankee = entity.details;
            tango = entity.overrideRegistrationOptions;
            zulu = _closure1_slot5;
            entity = zulu.getDisplayedInviteCode;
            report = entity.bind(zulu)();
            offset = null;
            if(!(offset == tango)) { _fun111632_ip = 82; continue _fun111632 }
 62:
            zulu = _closure1_slot6;
            entity = zulu.getState;
            entity = entity.bind(zulu)();
            tango = entity.registrationOptions;
 82:
            entity = offset != report;
            verify = null;
            if(!entity) { _fun111632_ip = 106; continue _fun111632 }
 91:
            zulu = _closure1_slot4;
            entity = zulu.getInvite;
            verify = entity.bind(zulu)(report);
 106:
            entity = offset != verify;
            options = null;
            if(!entity) { _fun111632_ip = 119; continue _fun111632 }
 115:
            options = 'invite';
 119:
            report = offset == tango;
            entity = undefined;
            zulu = undefined;
            if(report) { _fun111632_ip = 136; continue _fun111632 }
 130:
            zulu = tango.email;
 136:
            zulu = offset != zulu;
            foxtrot = 'email';
            if(zulu) { _fun111632_ip = 175; continue _fun111632 }
 147:
            report = offset == tango;
            zulu = undefined;
            if(report) { _fun111632_ip = 162; continue _fun111632 }
 156:
            zulu = tango.phone;
 162:
            zulu = offset != zulu;
            foxtrot = null;
            if(!zulu) { _fun111632_ip = 175; continue _fun111632 }
 171:
            foxtrot = 'phone';
 175:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 7;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.track;
            mike = _closure1_slot9;
            zulu = mike.REGISTER_TRANSITION;
            mike = {};
            mike['step'] = backup;
            mike['identity_type'] = foxtrot;
            mike['action_type'] = romeo;
            mike['action_details'] = yankee;
            mike['registration_source'] = options;
            yankee = offset == verify;
            options = undefined;
            if(yankee) { _fun111632_ip = 257; continue _fun111632 }
 252:
            options = verify.code;
 257:
            mike['invite_code'] = options;
            yankee = offset == verify;
            options = undefined;
            if(yankee) { _fun111632_ip = 290; continue _fun111632 }
 271:
            yankee = verify.channel;
            romeo = offset == yankee;
            options = undefined;
            if(romeo) { _fun111632_ip = 290; continue _fun111632 }
 285:
            options = yankee.id;
 290:
            mike['invite_channel_id'] = options;
            yankee = offset == verify;
            options = undefined;
            if(yankee) { _fun111632_ip = 323; continue _fun111632 }
 304:
            yankee = verify.channel;
            romeo = offset == yankee;
            options = undefined;
            if(romeo) { _fun111632_ip = 323; continue _fun111632 }
 318:
            options = yankee.type;
 323:
            mike['invite_channel_type'] = options;
            yankee = offset == verify;
            options = undefined;
            if(yankee) { _fun111632_ip = 356; continue _fun111632 }
 337:
            yankee = verify.guild;
            romeo = offset == yankee;
            options = undefined;
            if(romeo) { _fun111632_ip = 356; continue _fun111632 }
 351:
            options = yankee.id;
 356:
            mike['invite_guild_id'] = options;
            yankee = offset == verify;
            options = undefined;
            if(yankee) { _fun111632_ip = 390; continue _fun111632 }
 370:
            verify = verify.inviter;
            offset = offset == verify;
            options = undefined;
            if(offset) { _fun111632_ip = 390; continue _fun111632 }
 385:
            options = verify.id;
 390:
            mike['invite_inviter_id'] = options;
            mike['from_step'] = golf;
            mike['to_step'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    var _closure1_slot11 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    verify = golf[entity];
    report = argCorge;
    entity = undefined;
    report = report.bind(entity)(verify);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.useRegistrationUIStore;
    var _closure1_slot6 = report;
    report = 4;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.RegisterTransitionSteps;
    var _closure1_slot7 = options;
    report = report.RegistrationTransitionActionTypes;
    var _closure1_slot8 = report;
    report = 5;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.AnalyticEvents;
    var _closure1_slot9 = report;
    report = 6;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot10 = report;
    report = 10;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/auth/native/RegistrationUtils.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: hasAllRegisterFieldsCompleted
        _fun111633: for(var _fun111633_ip = 0; ; ) switch(_fun111633_ip) {
 0:
            report = argFoo;
            tango = arguments[1];
            entity = undefined;
            if(!(tango === entity)) { _fun111633_ip = 14; continue _fun111633 }
 12:
            tango = false;
 14:
            entity = report.email;
            oscar = null;
            entity = oscar != entity;
            if(entity) { _fun111633_ip = 39; continue _fun111633 }
 29:
            mike = report.phoneToken;
            entity = oscar != mike;
 39:
            if(!entity) { _fun111633_ip = 108; continue _fun111633 }
 42:
            mike = report.username;
            mike = oscar != mike;
            if(!mike) { _fun111633_ip = 105; continue _fun111633 }
 54:
            zulu = report.password;
            zulu = oscar != zulu;
            if(!zulu) { _fun111633_ip = 102; continue _fun111633 }
 67:
            golf = report.birthday;
            golf = oscar == golf;
            if(!golf) { _fun111633_ip = 83; continue _fun111633 }
 80:
            golf = !tango;
 83:
            tango = !golf;
            if(golf) { _fun111633_ip = 99; continue _fun111633 }
 89:
            report = report.consent;
            tango = oscar != report;
 99:
            zulu = tango;
 102:
            mike = zulu;
 105:
            entity = mike;
 108:
            return entity;
        }
    };
    zulu['hasAllRegisterFieldsCompleted'] = report;
    zulu['trackRegTransition'] = tango;
    tango = function(argFoo) { // Original name: getTrackRegTransition
        mike = argFoo;
        var _closure2_slot0 = mike;
        entity = function(argFoo) {
            _fun111635: for(var _fun111635_ip = 0; ; ) switch(_fun111635_ip) {
 0:
                entity = argFoo;
                mike = entity.step;
                verify = entity.toStep;
                zulu = entity.actionType;
                options = entity.details;
                report = entity.overrideRegistrationOptions;
                entity = _closure1_slot8;
                entity = entity.VIEWED;
                if(!(zulu === entity)) { _fun111635_ip = 106; continue _fun111635 }
 50:
                entity = _closure1_slot7;
                entity = entity.CAPTCHA;
                if(!(mike === entity)) { _fun111635_ip = 106; continue _fun111635 }
 64:
                golf = _closure1_slot11;
                oscar = {};
                oscar['step'] = mike;
                entity = _closure2_slot0;
                entity = entity.current;
                oscar['fromStep'] = entity;
                oscar['actionType'] = zulu;
                entity = undefined;
                oscar = golf.bind(entity)(oscar);
                return entity;
 106:
                entity = _closure1_slot8;
                entity = entity.VIEWED;
                if(!(zulu !== entity)) { _fun111635_ip = 173; continue _fun111635 }
 120:
                entity = null;
                entity = entity != mike;
                if(!entity) { _fun111635_ip = 169; continue _fun111635 }
 129:
                golf = _closure1_slot11;
                oscar = {};
                oscar['step'] = mike;
                oscar['toStep'] = verify;
                oscar['actionType'] = zulu;
                oscar['details'] = options;
                oscar['overrideRegistrationOptions'] = report;
                report = undefined;
                oscar = golf.bind(report)(oscar);
                entity = undefined;
 169:
                entity = undefined;
                _fun111635_ip = 234; continue _fun111635;
 173:
                report = null;
                if(!(report != mike)) { _fun111635_ip = 219; continue _fun111635 }
 179:
                report = _closure1_slot11;
                tango = {};
                tango['step'] = mike;
                oscar = _closure2_slot0;
                oscar = oscar.current;
                tango['fromStep'] = oscar;
                tango['actionType'] = zulu;
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
 219:
                zulu = _closure2_slot0;
                zulu['current'] = mike;
                entity = undefined;
 234:
                return entity;
            }
        };
        return entity;
    };
    zulu['getTrackRegTransition'] = tango;
    tango = function(argFoo) {
        oscar = argFoo;
        verify = _closure1_slot3;
        options = verify.useContext;
        mike = _closure1_slot0;
        golf = _closure1_slot2;
        zulu = 8;
        zulu = golf[zulu];
        tango = undefined;
        zulu = mike.bind(tango)(zulu);
        zulu = zulu.TrackRegistrationContext;
        zulu = options.bind(verify)(zulu);
        var _closure2_slot0 = zulu;
        zulu = oscar.destinationStep;
        var _closure2_slot1 = zulu;
        zulu = oscar.onPress;
        var _closure2_slot2 = zulu;
        zulu = _closure1_slot10;
        entity = 9;
        entity = golf[entity];
        entity = mike.bind(tango)(entity);
        mike = entity.HeaderBackButton;
        entity = {};
        yankee = entity;
        offset = oscar;
        oscar = copyDataProperties(yankee, offset);
        oscar = function() { // Original name: onPress
            _fun111637: for(var _fun111637_ip = 0; ; ) switch(_fun111637_ip) {
 0:
                zulu = _closure2_slot2;
                mike = null;
                if(!(mike != zulu)) { _fun111637_ip = 61; continue _fun111637 }
 13:
                tango = _closure2_slot0;
                zulu = {};
                mike = _closure2_slot1;
                zulu['step'] = mike;
                mike = _closure1_slot8;
                mike = mike.VIEWED;
                zulu['actionType'] = mike;
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                entity = _closure2_slot2;
                entity = entity.bind(mike)();
 61:
                entity = undefined;
                return entity;
            }
        };
        report = 'onPress';
        entity[report] = oscar;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['BackButtonWithTracking'] = tango;
    mike = function(argFoo) {
        _fun111638: for(var _fun111638_ip = 0; ; ) switch(_fun111638_ip) {
 0:
            tango = argFoo;
            entity = -1;
            if(!(entity !== tango)) { _fun111638_ip = 302; continue _fun111638 }
 16:
            entity = 0;
            if(!(entity !== tango)) { _fun111638_ip = 271; continue _fun111638 }
 25:
            entity = 40333;
            if(!(entity !== tango)) { _fun111638_ip = 240; continue _fun111638 }
 38:
            entity = 50022;
            if(!(entity !== tango)) { _fun111638_ip = 209; continue _fun111638 }
 51:
            entity = 70005;
            if(!(entity !== tango)) { _fun111638_ip = 178; continue _fun111638 }
 61:
            entity = 70003;
            if(!(entity !== tango)) { _fun111638_ip = 147; continue _fun111638 }
 71:
            entity = 70008;
            if(!(entity !== tango)) { _fun111638_ip = 116; continue _fun111638 }
 81:
            entity = 70011;
            if(!(entity !== tango)) { _fun111638_ip = 116; continue _fun111638 }
 91:
            entity = undefined;
            if(!(entity !== tango)) { _fun111638_ip = 108; continue _fun111638 }
 97:
            entity = tango.toString;
            entity = entity.bind(tango)();
            return entity;
 108:
            entity = 'No error code';
            return entity;
 116:
            entity = global;
            entity = entity.HermesInternal;
            zulu = entity.concat;
            mike = '';
            entity = ': Phone number already associated with an account';
            entity = zulu.bind(mike)(tango, entity);
            return entity;
 147:
            entity = global;
            entity = entity.HermesInternal;
            zulu = entity.concat;
            mike = '';
            entity = ': Unable to send sms to phone number';
            entity = zulu.bind(mike)(tango, entity);
            return entity;
 178:
            entity = global;
            entity = entity.HermesInternal;
            zulu = entity.concat;
            mike = '';
            entity = ': Phone number not mobile';
            entity = zulu.bind(mike)(tango, entity);
            return entity;
 209:
            entity = global;
            entity = entity.HermesInternal;
            zulu = entity.concat;
            mike = '';
            entity = ': Phone number invalid';
            entity = zulu.bind(mike)(tango, entity);
            return entity;
 240:
            entity = global;
            entity = entity.HermesInternal;
            zulu = entity.concat;
            mike = '';
            entity = ': Blocked by proxy';
            entity = zulu.bind(mike)(tango, entity);
            return entity;
 271:
            entity = global;
            entity = entity.HermesInternal;
            zulu = entity.concat;
            mike = '';
            entity = ': Internal server error';
            entity = zulu.bind(mike)(tango, entity);
            return entity;
 302:
            entity = global;
            entity = entity.HermesInternal;
            zulu = entity.concat;
            mike = '';
            entity = ': Captcha was not completed';
            entity = zulu.bind(mike)(tango, entity);
            return entity;
        }
    };
    zulu['getCommonErrorDetails'] = mike;
    return entity;
})();