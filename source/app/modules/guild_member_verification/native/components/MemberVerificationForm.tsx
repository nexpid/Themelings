// app/modules/guild_member_verification/native/components/MemberVerificationForm.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: useVerificationForm
        _fun88535: for(var _fun88535_ip = 0; ; ) switch(_fun88535_ip) {
 0:
            tango = argFoo;
            mike = tango.id;
            var _closure2_slot0 = mike;
            zulu = function(argFoo) { // Original name: useRequiredVerificationFields
                tango = argFoo;
                var _closure3_slot0 = tango;
                golf = _closure1_slot0;
                report = _closure1_slot2;
                zulu = 11;
                oscar = report[zulu];
                zulu = undefined;
                golf = golf.bind(zulu)(oscar);
                oscar = golf.useInitialVerification;
                tango = tango.id;
                tango = oscar.bind(golf)(tango);
                var _closure3_slot1 = tango;
                tango = _closure1_slot1;
                mike = 12;
                mike = report[mike];
                mike = tango.bind(zulu)(mike);
                entity = function() {
                    _fun88537: for(var _fun88537_ip = 0; ; ) switch(_fun88537_ip) {
 0:
                        entity = _closure3_slot0;
                        mike = entity.verificationLevel;
                        entity = _closure1_slot9;
                        entity = entity.VERY_HIGH;
                        if(!(mike !== entity)) { _fun88537_ip = 99; continue _fun88537 }
 30:
                        entity = {};
                        oscar = _closure1_slot0;
                        golf = _closure1_slot2;
                        mike = 13;
                        options = golf[mike];
                        report = undefined;
                        options = oscar.bind(report)(options);
                        options = options.VerificationFormFieldTypes;
                        options = options.VERIFICATION;
                        entity['field_type'] = options;
                        mike = golf[mike];
                        mike = oscar.bind(report)(mike);
                        mike = mike.UserVerificationFieldPlatforms;
                        mike = mike.EMAIL;
                        entity['platform'] = mike;
                        _fun88537_ip = 197; continue _fun88537;
 99:
                        report = _closure3_slot1;
                        mike = null;
                        if(!(mike != report)) { _fun88537_ip = 124; continue _fun88537 }
 109:
                        zulu = _closure3_slot1;
                        zulu = zulu.phone;
                        mike = null;
                        if(zulu) { _fun88537_ip = 194; continue _fun88537 }
 124:
                        zulu = {};
                        oscar = _closure1_slot0;
                        golf = _closure1_slot2;
                        tango = 13;
                        options = golf[tango];
                        report = undefined;
                        options = oscar.bind(report)(options);
                        options = options.VerificationFormFieldTypes;
                        options = options.VERIFICATION;
                        zulu['field_type'] = options;
                        tango = golf[tango];
                        tango = oscar.bind(report)(tango);
                        tango = tango.UserVerificationFieldPlatforms;
                        tango = tango.PHONE;
                        zulu['platform'] = tango;
                        mike = zulu;
 194:
                        entity = mike;
 197:
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            options = undefined;
            zulu = zulu.bind(options)(tango);
            var _closure2_slot1 = zulu;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 14;
            zulu = report[zulu];
            golf = tango.bind(options)(zulu);
            report = golf.useStateFromStores;
            zulu = _closure1_slot7;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                zulu = _closure1_slot7;
                mike = zulu.get;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = report.bind(golf)(tango, mike, zulu);
            var _closure2_slot2 = zulu;
            golf = _closure1_slot5;
            report = golf.useMemo;
            mike = null;
            tango = mike == zulu;
            mike = undefined;
            if(tango) { _fun88535_ip = 124; continue _fun88535 }
 118:
            mike = zulu.formFields;
 124:
            tango = new Array(1);
            tango[0] = mike;
            mike = function() {
                _fun88539: for(var _fun88539_ip = 0; ; ) switch(_fun88539_ip) {
 0:
                    entity = _closure2_slot2;
                    mike = null;
                    report = mike == entity;
                    entity = undefined;
                    if(report) { _fun88539_ip = 57; continue _fun88539 }
 18:
                    tango = _closure2_slot2;
                    tango = tango.formFields;
                    mike = mike == tango;
                    entity = undefined;
                    if(mike) { _fun88539_ip = 57; continue _fun88539 }
 37:
                    zulu = tango.some;
                    mike = function(argFoo) {
                        entity = argFoo;
                        mike = entity.field_type;
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 13;
                        zulu = zulu[entity];
                        entity = undefined;
                        entity = tango.bind(entity)(zulu);
                        entity = entity.VerificationFormFieldTypes;
                        entity = entity.TERMS;
                        entity = mike !== entity;
                        return entity;
                    };
                    entity = zulu.bind(tango)(mike);
 57:
                    return entity;
                }
            };
            mike = report.bind(golf)(mike, tango);
            var _closure2_slot3 = mike;
            tango = function() { // Original name: getFormFields
                _fun88541: for(var _fun88541_ip = 0; ; ) switch(_fun88541_ip) {
 0:
                    entity = _closure2_slot3;
                    if(entity) { _fun88541_ip = 78; continue _fun88541 }
 10:
                    entity = _closure2_slot1;
                    mike = null;
                    if(!(mike != entity)) { _fun88541_ip = 78; continue _fun88541 }
 20:
                    tango = _closure2_slot1;
                    entity = new Array(1);
                    entity[0] = tango;
                    tango = _closure2_slot2;
                    report = mike == tango;
                    tango = undefined;
                    if(report) { _fun88541_ip = 55; continue _fun88541 }
 45:
                    report = _closure2_slot2;
                    tango = report.formFields;
 55:
                    if(!(mike == tango)) { _fun88541_ip = 63; continue _fun88541 }
 59:
                    tango = new Array(0);
 63:
                    oscar = 1;
                    options = entity;
                    golf = tango;
                    mike = arraySpread(options, golf, oscar);
                    _fun88541_ip = 130; continue _fun88541;
 78:
                    tango = _closure2_slot2;
                    mike = null;
                    report = mike == tango;
                    tango = undefined;
                    if(report) { _fun88541_ip = 103; continue _fun88541 }
 93:
                    zulu = _closure2_slot2;
                    tango = zulu.formFields;
 103:
                    if(!(mike == tango)) { _fun88541_ip = 111; continue _fun88541 }
 107:
                    tango = new Array(0);
 111:
                    mike = new Array(0);
                    oscar = 0;
                    options = mike;
                    golf = tango;
                    zulu = arraySpread(options, golf, oscar);
                    entity = mike;
 130:
                    return entity;
                }
            };
            var _closure2_slot4 = tango;
            golf = _closure1_slot5;
            report = golf.useRef;
            report = report.bind(golf)(tango);
            var _closure2_slot5 = report;
            verify = _closure1_slot5;
            golf = verify.useEffect;
            report = function() {
                mike = _closure2_slot5;
                entity = _closure2_slot4;
                mike['current'] = entity;
                entity = undefined;
                return entity;
            };
            report = golf.bind(verify)(report);
            golf = _closure1_slot5;
            report = golf.useState;
            tango = tango.bind(options)();
            golf = report.bind(golf)(tango);
            report = _closure1_slot4;
            tango = 2;
            golf = report.bind(options)(golf, tango);
            tango = 0;
            report = golf[tango];
            tango = 1;
            tango = golf[tango];
            var _closure2_slot6 = tango;
            options = _closure1_slot5;
            golf = options.useEffect;
            oscar = new Array(1);
            oscar[0] = zulu;
            entity = function() {
                _fun88543: for(var _fun88543_ip = 0; ; ) switch(_fun88543_ip) {
 0:
                    zulu = _closure2_slot2;
                    mike = null;
                    if(!(mike != zulu)) { _fun88543_ip = 37; continue _fun88543 }
 13:
                    zulu = _closure2_slot6;
                    mike = _closure2_slot5;
                    entity = mike.current;
                    mike = entity.bind(mike)();
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 37:
                    entity = undefined;
                    return entity;
                }
            };
            entity = golf.bind(options)(entity, oscar);
            entity = new Array(4);
            entity[0] = report;
            entity[1] = tango;
            entity[2] = zulu;
            entity[3] = mike;
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot6 = tango;
    tango = 4;
    golf = oscar[tango];
    golf = options.bind(entity)(golf);
    var _closure1_slot7 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.NO_MEMBER_VERIFICATION_FORM;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.VerificationLevels;
    var _closure1_slot9 = tango;
    tango = 6;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot10 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot11 = tango;
    tango = 7;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'flex': 1, 'flexDirection': 'column', 'alignItems': 'stretch', 'paddingHorizontal': 16, 'paddingVertical': 0};
    tango['container'] = verify;
    verify = {'marginTop': 8, 'marginBottom': 8};
    tango['submitButton'] = verify;
    verify = {'alignSelf': 'center', 'paddingVertical': 16, 'fontSize': 16};
    tango['error'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot12 = tango;
    tango = 20;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_member_verification/native/components/MemberVerificationForm.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: MemberVerificationForm
        _fun88544: for(var _fun88544_ip = 0; ; ) switch(_fun88544_ip) {
 0:
            entity = argFoo;
            result = entity.guild;
            var _closure2_slot0 = result;
            mike = entity.onSuccess;
            var _closure2_slot1 = mike;
            options = entity.onClose;
            var _closure2_slot2 = options;
            entity = _closure1_slot12;
            report = undefined;
            sizing = entity.bind(report)();
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 11;
            entity = zulu[entity];
            mike = mike.bind(report)(entity);
            entity = mike.useUserVerificationState;
            verify = entity.bind(mike)();
            var _closure2_slot3 = verify;
            entity = _closure1_slot13;
            zulu = entity.bind(report)(result);
            mike = _closure1_slot4;
            entity = 4;
            mike = mike.bind(report)(zulu, entity);
            golf = 0;
            output = mike[golf];
            var _closure2_slot4 = output;
            oscar = 1;
            entity = mike[oscar];
            var _closure2_slot5 = entity;
            romeo = 2;
            zulu = mike[romeo];
            var _closure2_slot6 = zulu;
            entity = 3;
            mike = mike[entity];
            var _closure2_slot7 = mike;
            offset = _closure1_slot5;
            tango = offset.useState;
            entity = false;
            tango = tango.bind(offset)(entity);
            entity = _closure1_slot4;
            entity = entity.bind(report)(tango, romeo);
            yankee = entity[golf];
            entity = entity[oscar];
            var _closure2_slot8 = entity;
            offset = _closure1_slot5;
            tango = offset.useState;
            entity = null;
            offset = tango.bind(offset)(entity);
            tango = _closure1_slot4;
            tango = tango.bind(report)(offset, romeo);
            kilo = tango[golf];
            tango = tango[oscar];
            var _closure2_slot9 = tango;
            golf = _closure1_slot5;
            oscar = golf.useEffect;
            tango = new Array(2);
            tango[0] = options;
            tango[1] = zulu;
            zulu = function() {
                _fun88545: for(var _fun88545_ip = 0; ; ) switch(_fun88545_ip) {
 0:
                    zulu = _closure2_slot6;
                    mike = _closure1_slot8;
                    if(!(zulu === mike)) { _fun88545_ip = 41; continue _fun88545 }
 18:
                    zulu = _closure2_slot2;
                    mike = null;
                    if(!(mike != zulu)) { _fun88545_ip = 41; continue _fun88545 }
 28:
                    zulu = _closure2_slot2;
                    mike = undefined;
                    entity = false;
                    entity = zulu.bind(mike)(entity);
 41:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = oscar.bind(golf)(zulu, tango);
            oscar = _closure1_slot5;
            tango = oscar.useMemo;
            golf = result.verificationLevel;
            zulu = new Array(4);
            zulu[0] = golf;
            zulu[1] = mike;
            zulu[2] = verify;
            zulu[3] = output;
            mike = function() {
                _fun88546: for(var _fun88546_ip = 0; ; ) switch(_fun88546_ip) {
 0:
                    zulu = _closure2_slot4;
                    entity = null;
                    if(!(entity != zulu)) { _fun88546_ip = 43; continue _fun88546 }
 13:
                    tango = _closure2_slot4;
                    zulu = tango.some;
                    entity = function(argFoo) {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 15;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.isValidFormResponse;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        entity = !entity;
                        return entity;
                    };
                    entity = zulu.bind(tango)(entity);
                    if(entity) { _fun88546_ip = 280; continue _fun88546 }
 43:
                    entity = _closure2_slot7;
                    if(entity) { _fun88546_ip = 276; continue _fun88546 }
 53:
                    entity = _closure2_slot0;
                    tango = entity.verificationLevel;
                    zulu = _closure1_slot9;
                    zulu = zulu.VERY_HIGH;
                    if(!(zulu !== tango)) { _fun88546_ip = 229; continue _fun88546 }
 83:
                    zulu = _closure1_slot9;
                    zulu = zulu.HIGH;
                    if(!(zulu !== tango)) { _fun88546_ip = 139; continue _fun88546 }
 97:
                    zulu = _closure1_slot9;
                    zulu = zulu.MEDIUM;
                    if(!(zulu !== tango)) { _fun88546_ip = 139; continue _fun88546 }
 111:
                    zulu = _closure1_slot9;
                    zulu = zulu.LOW;
                    if(!(zulu !== tango)) { _fun88546_ip = 139; continue _fun88546 }
 125:
                    zulu = _closure1_slot9;
                    zulu = zulu.NONE;
                    zulu = false;
                    return zulu;
 139:
                    tango = _closure2_slot3;
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    options = 13;
                    zulu = zulu[options];
                    golf = undefined;
                    zulu = report.bind(golf)(zulu);
                    zulu = zulu.UserVerificationFieldPlatforms;
                    zulu = zulu.EMAIL;
                    zulu = tango[zulu];
                    zulu = !zulu;
                    if(!zulu) { _fun88546_ip = 227; continue _fun88546 }
 187:
                    report = _closure2_slot3;
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    tango = tango[options];
                    tango = oscar.bind(golf)(tango);
                    tango = tango.UserVerificationFieldPlatforms;
                    tango = tango.PHONE;
                    tango = report[tango];
                    zulu = !tango;
 227:
                    return zulu;
 229:
                    mike = _closure2_slot3;
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 13;
                    zulu = zulu[entity];
                    entity = undefined;
                    entity = tango.bind(entity)(zulu);
                    entity = entity.UserVerificationFieldPlatforms;
                    entity = entity.PHONE;
                    entity = mike[entity];
                    entity = !entity;
                    return entity;
 276:
                    entity = false;
                    return entity;
 280:
                    entity = true;
                    return entity;
                }
            };
            romeo = tango.bind(oscar)(mike, zulu);
            var _closure2_slot10 = romeo;
            if(!(entity != output)) { _fun88544_ip = 658; continue _fun88544 }
 315:
            mike = function() {
                tango = _closure1_slot3;
                zulu = undefined;
                mike = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun88550: for(var _fun88550_ip = 0; ; ) switch(_fun88550_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun88550_ip = 577; continue _fun88550 }
 10:
                            mike = undefined;
                            report = undefined;
                            yankee = undefined;
                            verify = undefined;
                            oscar = undefined;
                            golf = undefined;
                            tango = _closure2_slot10;
                            if(tango) { _fun88550_ip = 457; continue _fun88550 }
 35:
                            tango = _closure2_slot9;
                            options = null;
                            tango = tango.bind(mike)(options);
                            tango = _closure2_slot8;
                            romeo = true;
                            tango = tango.bind(mike)(romeo);
                            foxtrot = {};
                            tango = _closure2_slot6;
                            if(!(options == tango)) { _fun88550_ip = 76; continue _fun88550 }
 67:
                            tango = _closure1_slot8;
                            _fun88550_ip = 80; continue _fun88550;
 76:
                            tango = _closure2_slot6;
 80:
                            result = foxtrot;
                            output = tango;
                            tango = copyDataProperties(result, output);
                            kilo = _closure1_slot0;
                            sizing = _closure1_slot2;
                            backup = 15;
                            backup = sizing[backup];
                            sizing = kilo.bind(mike)(backup);
                            kilo = sizing.removeInternalFields;
                            backup = _closure2_slot4;
                            kilo = kilo.bind(sizing)(backup);
                            backup = 'formFields';
                            foxtrot[backup] = kilo;
                            report = foxtrot;
 140: // try_start_0
                            backup = _closure1_slot1;
                            kilo = _closure1_slot2;
                            foxtrot = 16;
                            foxtrot = kilo[foxtrot];
                            kilo = backup.bind(mike)(foxtrot);
                            backup = kilo.submitVerificationForm;
                            foxtrot = _closure2_slot0;
                            foxtrot = foxtrot.id;
                            report = backup.bind(kilo)(foxtrot, report);
                            SaveGenerator(address=185);
 183:
                            return report;
 185:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=12);
                            if(foxtrot) { _fun88550_ip = 244; continue _fun88550 }
 191:
                            yankee = report;
                            backup = _closure2_slot8;
                            foxtrot = false;
                            foxtrot = backup.bind(mike)(foxtrot);
                            foxtrot = _closure2_slot1;
                            if(!(options != foxtrot)) { _fun88550_ip = 222; continue _fun88550 }
 213:
                            foxtrot = _closure2_slot1;
                            yankee = foxtrot.bind(mike)(yankee);
 222:
                            yankee = _closure2_slot2;
                            if(!(options != yankee)) { _fun88550_ip = 239; continue _fun88550 }
 230:
                            yankee = _closure2_slot2;
                            yankee = yankee.bind(mike)(romeo);
 239: // try_end0
                            _fun88550_ip = 574; continue _fun88550;
 244:
                            return report;
 247: // catch_target0
                            CatchBlockStart(arg_register=4);
                            offset = report;
                            yankee = options == report;
                            report = undefined;
                            if(yankee) { _fun88550_ip = 266; continue _fun88550 }
 261:
                            report = offset.body;
 266:
                            golf = report;
                            offset = options == report;
                            report = undefined;
                            if(offset) { _fun88550_ip = 305; continue _fun88550 }
 278:
                            offset = golf;
                            offset = offset.errors;
                            verify = offset;
                            offset = options == offset;
                            report = undefined;
                            if(offset) { _fun88550_ip = 305; continue _fun88550 }
 299:
                            report = verify.version;
 305:
                            if(!(options == report)) { _fun88550_ip = 380; continue _fun88550 }
 309:
                            report = golf;
                            verify = options == report;
                            report = undefined;
                            if(verify) { _fun88550_ip = 348; continue _fun88550 }
 321:
                            verify = golf;
                            verify = verify.errors;
                            oscar = verify;
                            verify = options == verify;
                            report = undefined;
                            if(verify) { _fun88550_ip = 348; continue _fun88550 }
 342:
                            report = oscar.form_fields;
 348:
                            if(!(options == report)) { _fun88550_ip = 380; continue _fun88550 }
 352:
                            oscar = _closure2_slot9;
                            report = golf;
                            options = options == report;
                            report = undefined;
                            if(options) { _fun88550_ip = 373; continue _fun88550 }
 368:
                            report = golf.message;
 373:
                            report = oscar.bind(mike)(report);
                            _fun88550_ip = 444; continue _fun88550;
 380:
                            report = _closure2_slot9;
                            options = _closure1_slot0;
                            verify = _closure1_slot2;
                            tango = 9;
                            oscar = verify[tango];
                            oscar = options.bind(mike)(oscar);
                            golf = oscar.intl;
                            oscar = golf.string;
                            tango = verify[tango];
                            tango = options.bind(mike)(tango);
                            tango = tango.t;
                            tango = tango.PD09Sk;
                            tango = oscar.bind(golf)(tango);
                            tango = report.bind(mike)(tango);
 444:
                            tango = _closure2_slot8;
                            zulu = false;
                            zulu = tango.bind(mike)(zulu);
                            _fun88550_ip = 574; continue _fun88550;
 457:
                            golf = _closure1_slot1;
                            options = _closure1_slot2;
                            zulu = 8;
                            zulu = options[zulu];
                            report = golf.bind(mike)(zulu);
                            tango = report.open;
                            zulu = {};
                            verify = 'MEMBER_VERIFICATION_FORM_INCOMPLETE';
                            zulu['key'] = verify;
                            yankee = _closure1_slot0;
                            oscar = 9;
                            verify = options[oscar];
                            verify = yankee.bind(mike)(verify);
                            offset = verify.intl;
                            verify = offset.string;
                            oscar = options[oscar];
                            oscar = yankee.bind(mike)(oscar);
                            oscar = oscar.t;
                            oscar = oscar.StC49/;
                            oscar = verify.bind(offset)(oscar);
                            zulu['content'] = oscar;
                            oscar = 10;
                            oscar = options[oscar];
                            oscar = golf.bind(mike)(oscar);
                            zulu['icon'] = oscar;
                            zulu = tango.bind(report)(zulu);
 574:
                            return mike;
 577:
                            return entity;
                        }
                    };
                    return entity;
                };
                mike = tango.bind(zulu)(mike);
                var _closure3_slot0 = mike;
                entity = function() {
                    entity = undefined;
                    tango = _closure3_slot0;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                return entity;
            };
            offset = mike.bind(report)();
            tango = _closure1_slot11;
            zulu = _closure1_slot6;
            mike = {};
            oscar = sizing.container;
            mike['style'] = oscar;
            options = _closure1_slot10;
            golf = _closure1_slot1;
            echo = _closure1_slot2;
            oscar = 17;
            oscar = echo[oscar];
            golf = golf.bind(report)(oscar);
            oscar = {};
            result = result.rulesChannelId;
            oscar['rulesChannelId'] = result;
            oscar['formFields'] = output;
            backup = function(argFoo, argBar) { // Original name: onChange
                golf = argFoo;
                oscar = _closure2_slot4;
                report = oscar[golf];
                zulu = _closure2_slot5;
                entity = oscar.slice;
                tango = 0;
                offset = entity.bind(oscar)(tango, golf);
                mike = new Array(1);
                yankee = mike;
                verify = 0;
                tango = arraySpread(yankee, offset, verify);
                entity = {};
                yankee = entity;
                offset = report;
                report = copyDataProperties(yankee, offset);
                options = argBar;
                report = 'response';
                entity[report] = options;
                mike[tango] = entity;
                entity = 1;
                verify = tango + entity;
                report = oscar.slice;
                entity = golf + entity;
                offset = report.bind(oscar)(entity);
                yankee = mike;
                entity = arraySpread(yankee, offset, verify);
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            oscar['onChange'] = backup;
            oscar['verification'] = verify;
            golf = options.bind(report)(golf, oscar);
            oscar = new Array(3);
            oscar[0] = golf;
            options = entity != kilo;
            golf = null;
            if(!options) { _fun88544_ip = 472; continue _fun88544 }
 427:
            backup = _closure1_slot10;
            verify = _closure1_slot1;
            output = _closure1_slot2;
            options = 18;
            options = output[options];
            verify = verify.bind(report)(options);
            options = {};
            output = sizing.error;
            options['style'] = output;
            options['children'] = kilo;
            golf = backup.bind(report)(verify, options);
 472:
            oscar[1] = golf;
            verify = _closure1_slot10;
            kilo = _closure1_slot1;
            output = _closure1_slot2;
            backup = 19;
            golf = output[backup];
            options = kilo.bind(report)(golf);
            golf = {};
            sizing = sizing.submitButton;
            golf['style'] = sizing;
            sizing = output[backup];
            sizing = kilo.bind(report)(sizing);
            sizing = sizing.Colors;
            sizing = sizing.BRAND;
            golf['color'] = sizing;
            backup = output[backup];
            backup = kilo.bind(report)(backup);
            backup = backup.Sizes;
            backup = backup.MEDIUM;
            golf['size'] = backup;
            sizing = _closure1_slot0;
            foxtrot = 9;
            backup = output[foxtrot];
            backup = sizing.bind(report)(backup);
            kilo = backup.intl;
            backup = kilo.string;
            foxtrot = output[foxtrot];
            foxtrot = sizing.bind(report)(foxtrot);
            foxtrot = foxtrot.t;
            foxtrot = foxtrot.verify/DT0;
            foxtrot = backup.bind(kilo)(foxtrot);
            golf['text'] = foxtrot;
            golf['loading'] = yankee;
            if(yankee) { _fun88544_ip = 628; continue _fun88544 }
 625:
            yankee = romeo;
 628:
            golf['disabled'] = yankee;
            golf['onPress'] = offset;
            golf = verify.bind(report)(options, golf);
            oscar[2] = golf;
            mike['children'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 658:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();