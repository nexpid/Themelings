// app/modules/guild_member_verification/MemberVerificationFormStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot11;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot11 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    verify = entity.Object;
    tango = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = {'version': '', 'description': ''};
    tango = new Array(0);
    mike['formFields'] = tango;
    var _closure1_slot8 = mike;
    tango = {};
    var _closure1_slot9 = tango;
    tango = 7;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    verify = tango.Store;
    tango = function(argFoo) {
        tango = function() { // Original name: MemberVerificationFormStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot10;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'get';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                mike = argFoo;
                entity = null;
                if(!(entity == mike)) { _fun00006_ip = 13; continue _fun00005 }
 9:
                entity = undefined;
                return entity;
 13:
                entity = _closure1_slot9;
                entity = entity[mike];
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = 'getRulesPrompt';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 5;
                mike = tango[mike];
                oscar = undefined;
                tango = zulu.bind(oscar)(mike);
                zulu = tango.find;
                report = _closure1_slot9;
                mike = argFoo;
                report = report[mike];
                mike = null;
                golf = mike == report;
                mike = undefined;
                if(golf) { _fun00008_ip = 58; continue _fun00007 }
 52:
                mike = report.formFields;
 58:
                report = _closure1_slot0;
                golf = _closure1_slot2;
                entity = 6;
                entity = golf[entity];
                entity = report.bind(oscar)(entity);
                entity = entity.isTermsFormField;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    verify = tango.bind(entity)(verify);
    tango = 'MemberVerificationFormStore';
    verify['displayName'] = tango;
    tango = 8;
    tango = golf[tango];
    foxtrot = options.bind(entity)(tango);
    tango = {};
    offset = function(argFoo) { // Original name: handleInviteData
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            entity = entity.invite;
            oscar = entity.member_verification_form;
            report = entity.guild;
            golf = null;
            entity = golf != report;
            if(!entity) { _fun00010_ip = 35; continue _fun00009 }
 31:
            entity = golf != oscar;
 35:
            if(!entity) { _fun00010_ip = 107; continue _fun00009 }
 38:
            tango = _closure1_slot9;
            zulu = report.id;
            mike = {};
            options = oscar.version;
            mike['version'] = options;
            options = oscar.description;
            verify = golf != options;
            golf = '';
            if(!verify) { _fun00010_ip = 82; continue _fun00009 }
 79:
            golf = options;
 82:
            mike['description'] = golf;
            oscar = oscar.form_fields;
            mike['formFields'] = oscar;
            mike['guild'] = report;
            tango[zulu] = mike;
            entity = true;
 107:
            return entity;
        }
    };
    tango['INVITE_ACCEPT_SUCCESS'] = offset;
    offset = function(argFoo) { // Original name: handleVerificationFormUpdate
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            tango = entity.form;
            zulu = entity.guildId;
            mike = null;
            if(!(mike != tango)) { _fun00012_ip = 71; continue _fun00011 }
 20:
            report = _closure1_slot9;
            report = report[zulu];
            if(!(mike == report)) { _fun00012_ip = 39; continue _fun00011 }
 35:
            report = _closure1_slot8;
 39:
            mike = _closure1_slot9;
            entity = {};
            golf = entity;
            oscar = report;
            report = copyDataProperties(golf, oscar);
            golf = entity;
            oscar = tango;
            tango = copyDataProperties(golf, oscar);
            mike[zulu] = entity;
            _fun00012_ip = 86; continue _fun00011;
 71:
            mike = _closure1_slot9;
            entity = _closure1_slot8;
            mike[zulu] = entity;
 86:
            entity = undefined;
            return entity;
        }
    };
    tango['MEMBER_VERIFICATION_FORM_UPDATE'] = offset;
    offset = function(argFoo) { // Original name: handleVerificationFormFetchFail
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            zulu = entity.guildId;
            mike = _closure1_slot9;
            entity = mike[zulu];
            report = null;
            if(!(report == entity)) { _fun00014_ip = 29; continue _fun00013 }
 25:
            entity = _closure1_slot8;
 29:
            mike[zulu] = entity;
            entity = undefined;
            return entity;
        }
    };
    tango['MEMBER_VERIFICATION_FORM_FETCH_FAIL'] = offset;
    report = function(argFoo) { // Original name: handleGuildDelete
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            tango = entity.guild;
            zulu = _closure1_slot9;
            entity = null;
            report = entity == tango;
            entity = undefined;
            mike = undefined;
            if(report) { _fun00016_ip = 33; continue _fun00015 }
 28:
            mike = tango.id;
 33:
            mike = delete zulu[mike];
            return entity;
        }
    };
    tango['GUILD_DELETE'] = report;
    report = verify.prototype;
    report = Object.create(report, {constructor: {value: verify}});
    backup = report;
    romeo = tango;
    tango = new backup[verify](foxtrot, romeo, yankee);
    tango = tango instanceof Object ? tango : report;
    report = 9;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_member_verification/MemberVerificationFormStore.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['NO_MEMBER_VERIFICATION_FORM'] = mike;
    return entity;
})();