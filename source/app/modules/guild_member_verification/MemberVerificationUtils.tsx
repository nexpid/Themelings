// app/modules/guild_member_verification/MemberVerificationUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    golf = tango.AUTOMATIC_APPROVAL_FORM_FIELDS;
    var _closure1_slot2 = golf;
    tango = tango.MANUAL_APPROVAL_FORM_FIELDS;
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildFeatures;
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_member_verification/MemberVerificationUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) {
        _fun61945: for(var _fun61945_ip = 0; ; ) switch(_fun61945_ip) {
 0:
            mike = argFoo;
            entity = mike.required;
            zulu = mike.response;
            report = mike.field_type;
            if(entity) { _fun61945_ip = 28; continue _fun61945 }
 24:
            entity = true;
            return entity;
 28:
            entity = null;
            if(!(entity != zulu)) { _fun61945_ip = 311; continue _fun61945 }
 37:
            oscar = _closure1_slot0;
            mike = _closure1_slot1;
            golf = 2;
            tango = mike[golf];
            mike = undefined;
            tango = oscar.bind(mike)(tango);
            tango = tango.VerificationFormFieldTypes;
            tango = tango.TERMS;
            if(!(tango !== report)) { _fun61945_ip = 296; continue _fun61945 }
 81:
            oscar = _closure1_slot0;
            tango = _closure1_slot1;
            tango = tango[golf];
            tango = oscar.bind(mike)(tango);
            tango = tango.VerificationFormFieldTypes;
            tango = tango.VERIFICATION;
            if(!(tango !== report)) { _fun61945_ip = 296; continue _fun61945 }
 117:
            oscar = _closure1_slot0;
            tango = _closure1_slot1;
            tango = tango[golf];
            tango = oscar.bind(mike)(tango);
            tango = tango.VerificationFormFieldTypes;
            tango = tango.TEXT_INPUT;
            if(!(tango !== report)) { _fun61945_ip = 262; continue _fun61945 }
 150:
            oscar = _closure1_slot0;
            tango = _closure1_slot1;
            tango = tango[golf];
            tango = oscar.bind(mike)(tango);
            tango = tango.VerificationFormFieldTypes;
            tango = tango.PARAGRAPH;
            if(!(tango !== report)) { _fun61945_ip = 262; continue _fun61945 }
 183:
            oscar = _closure1_slot0;
            tango = _closure1_slot1;
            tango = tango[golf];
            tango = oscar.bind(mike)(tango);
            tango = tango.VerificationFormFieldTypes;
            tango = tango.MULTIPLE_CHOICE;
            if(!(tango !== report)) { _fun61945_ip = 249; continue _fun61945 }
 216:
            tango = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 3;
            entity = oscar[entity];
            tango = tango.bind(mike)(entity);
            entity = tango.assertNever;
            entity = entity.bind(tango)(report);
            return entity;
 249:
            tango = 'number';
            entity = typeof zulu;
            entity = tango === entity;
            return entity;
 262:
            tango = 'string';
            entity = typeof zulu;
            entity = tango === entity;
            if(!entity) { _fun61945_ip = 294; continue _fun61945 }
 276:
            tango = zulu.trim;
            report = tango.bind(zulu)();
            tango = '';
            entity = tango !== report;
 294:
            return entity;
 296:
            entity = global;
            entity = entity.Boolean;
            entity = entity.bind(mike)(zulu);
            return entity;
 311:
            entity = false;
            return entity;
        }
    };
    zulu['isValidFormResponse'] = tango;
    tango = function(argFoo) { // Original name: removeInternalFields
        zulu = argFoo;
        mike = zulu.filter;
        entity = function(argFoo) {
            entity = argFoo;
            mike = entity.field_type;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 2;
            zulu = zulu[entity];
            entity = undefined;
            entity = tango.bind(entity)(zulu);
            entity = entity.VerificationFormFieldTypes;
            entity = entity.VERIFICATION;
            entity = mike !== entity;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['removeInternalFields'] = tango;
    tango = function(argFoo) { // Original name: isAutomaticApprovalFormField
        _fun61948: for(var _fun61948_ip = 0; ; ) switch(_fun61948_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot2;
            mike = zulu.has;
            entity = null;
            report = entity == tango;
            entity = undefined;
            if(report) { _fun61948_ip = 32; continue _fun61948 }
 26:
            entity = tango.field_type;
 32:
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['isAutomaticApprovalFormField'] = tango;
    tango = function(argFoo) { // Original name: isManualApprovalFormField
        _fun61949: for(var _fun61949_ip = 0; ; ) switch(_fun61949_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot3;
            mike = zulu.has;
            entity = null;
            report = entity == tango;
            entity = undefined;
            if(report) { _fun61949_ip = 32; continue _fun61949 }
 26:
            entity = tango.field_type;
 32:
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['isManualApprovalFormField'] = tango;
    mike = function(argFoo) { // Original name: guildHasVerificationGate
        _fun61950: for(var _fun61950_ip = 0; ; ) switch(_fun61950_ip) {
 0:
            report = argFoo;
            entity = null;
            entity = entity != report;
            if(!entity) { _fun61950_ip = 131; continue _fun61950 }
 12:
            oscar = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 4;
            tango = tango[mike];
            mike = undefined;
            mike = oscar.bind(mike)(tango);
            golf = mike.MemberVerificationRolloutExperiment;
            oscar = golf.getCurrentConfig;
            tango = {};
            mike = report.id;
            tango['guildId'] = mike;
            mike = 'GuildRecord';
            tango['location'] = mike;
            mike = {};
            options = false;
            mike['autoTrackExposure'] = options;
            mike = oscar.bind(golf)(tango, mike);
            mike = mike.enabled;
            if(mike) { _fun61950_ip = 107; continue _fun61950 }
 93:
            mike = report.hasVerificationGate;
            mike = mike.bind(report)();
            _fun61950_ip = 128; continue _fun61950;
 107:
            tango = report.hasFeature;
            zulu = _closure1_slot4;
            zulu = zulu.MEMBER_VERIFICATION_GATE_ENABLED;
            mike = tango.bind(report)(zulu);
 128:
            entity = mike;
 131:
            return entity;
        }
    };
    zulu['guildHasVerificationGate'] = mike;
    return entity;
})();