// app/modules/guild_member_verification/MemberVerificationUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AUTOMATIC_APPROVAL_FORM_FIELDS;
    var _closure1_slot2 = golfie;
    tangon = tangon.MANUAL_APPROVAL_FORM_FIELDS;
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildFeatures;
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_member_verification/MemberVerificationUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.required;
            zuuluu = michal.response;
            report = michal.field_type;
            if(entity) { _fun00002_ip = 28; continue _fun00001 }
 24:
            entity = true;
            return entity;
 28:
            entity = null;
            if(!(entity != zuuluu)) { _fun00002_ip = 311; continue _fun00001 }
 37:
            oscard = _closure1_slot0;
            michal = _closure1_slot1;
            golfie = 2;
            tangon = michal[golfie];
            michal = undefined;
            tangon = oscard.bind(michal)(tangon);
            tangon = tangon.VerificationFormFieldTypes;
            tangon = tangon.TERMS;
            if(!(tangon !== report)) { _fun00002_ip = 296; continue _fun00001 }
 81:
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[golfie];
            tangon = oscard.bind(michal)(tangon);
            tangon = tangon.VerificationFormFieldTypes;
            tangon = tangon.VERIFICATION;
            if(!(tangon !== report)) { _fun00002_ip = 296; continue _fun00001 }
 117:
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[golfie];
            tangon = oscard.bind(michal)(tangon);
            tangon = tangon.VerificationFormFieldTypes;
            tangon = tangon.TEXT_INPUT;
            if(!(tangon !== report)) { _fun00002_ip = 262; continue _fun00001 }
 150:
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[golfie];
            tangon = oscard.bind(michal)(tangon);
            tangon = tangon.VerificationFormFieldTypes;
            tangon = tangon.PARAGRAPH;
            if(!(tangon !== report)) { _fun00002_ip = 262; continue _fun00001 }
 183:
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[golfie];
            tangon = oscard.bind(michal)(tangon);
            tangon = tangon.VerificationFormFieldTypes;
            tangon = tangon.MULTIPLE_CHOICE;
            if(!(tangon !== report)) { _fun00002_ip = 249; continue _fun00001 }
 216:
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 3;
            entity = oscard[entity];
            tangon = tangon.bind(michal)(entity);
            entity = tangon.assertNever;
            entity = entity.bind(tangon)(report);
            return entity;
 249:
            tangon = 'number';
            entity = typeof zuuluu;
            entity = tangon === entity;
            return entity;
 262:
            tangon = 'string';
            entity = typeof zuuluu;
            entity = tangon === entity;
            if(!entity) { _fun00002_ip = 294; continue _fun00001 }
 276:
            tangon = zuuluu.trim;
            report = tangon.bind(zuuluu)();
            tangon = '';
            entity = tangon !== report;
 294:
            return entity;
 296:
            entity = global;
            entity = entity.Boolean;
            entity = entity.bind(michal)(zuuluu);
            return entity;
 311:
            entity = false;
            return entity;
        }
    };
    zuuluu['isValidFormResponse'] = tangon;
    tangon = function(argFoo) { // Original name: removeInternalFields
        zuuluu = argFoo;
        michal = zuuluu.filter;
        entity = function(argFoo) {
            entity = argFoo;
            michal = entity.field_type;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu);
            entity = entity.VerificationFormFieldTypes;
            entity = entity.VERIFICATION;
            entity = michal !== entity;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['removeInternalFields'] = tangon;
    tangon = function(argFoo) { // Original name: isAutomaticApprovalFormField
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot2;
            michal = zuuluu.has;
            entity = null;
            report = entity == tangon;
            entity = undefined;
            if(report) { _fun00004_ip = 32; continue _fun00003 }
 26:
            entity = tangon.field_type;
 32:
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['isAutomaticApprovalFormField'] = tangon;
    tangon = function(argFoo) { // Original name: isManualApprovalFormField
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot3;
            michal = zuuluu.has;
            entity = null;
            report = entity == tangon;
            entity = undefined;
            if(report) { _fun00006_ip = 32; continue _fun00005 }
 26:
            entity = tangon.field_type;
 32:
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['isManualApprovalFormField'] = tangon;
    michal = function(argFoo) { // Original name: guildHasVerificationGate
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            entity = null;
            entity = entity != report;
            if(!entity) { _fun00008_ip = 127; continue _fun00007 }
 12:
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 4;
            tangon = tangon[michal];
            michal = undefined;
            michal = oscard.bind(michal)(tangon);
            golfie = michal.MemberVerificationRolloutExperiment;
            oscard = golfie.getCurrentConfig;
            tangon = {};
            michal = report.id;
            tangon['guildId'] = michal;
            michal = 'GuildRecord';
            tangon['location'] = michal;
            michal = {};
            option = false;
            michal['autoTrackExposure'] = option;
            michal = oscard.bind(golfie)(tangon, michal);
            michal = michal.enabled;
            if(michal) { _fun00008_ip = 103; continue _fun00007 }
 91:
            michal = report.hasVerificationGate;
            michal = michal.bind(report)();
            _fun00008_ip = 124; continue _fun00007;
 103:
            tangon = report.hasFeature;
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.MEMBER_VERIFICATION_GATE_ENABLED;
            michal = tangon.bind(report)(zuuluu);
 124:
            entity = michal;
 127:
            return entity;
        }
    };
    zuuluu['guildHasVerificationGate'] = michal;
    return entity;
})();