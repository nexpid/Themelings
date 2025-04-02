// app/modules/guild_member_verification/native/components/MemberVerificationForm.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: useVerificationForm
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            michal = tangon.id;
            var _closure2_slot0 = michal;
            zuuluu = function(argFoo) { // Original name: useRequiredVerificationFields
                tangon = argFoo;
                var _closure3_slot0 = tangon;
                golfie = _closure1_slot0;
                report = _closure1_slot2;
                zuuluu = 11;
                oscard = report[zuuluu];
                zuuluu = undefined;
                golfie = golfie.bind(zuuluu)(oscard);
                oscard = golfie.useInitialVerification;
                tangon = tangon.id;
                tangon = oscard.bind(golfie)(tangon);
                var _closure3_slot1 = tangon;
                tangon = _closure1_slot1;
                michal = 12;
                michal = report[michal];
                michal = tangon.bind(zuuluu)(michal);
                entity = function() {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        entity = _closure3_slot0;
                        michal = entity.verificationLevel;
                        entity = _closure1_slot9;
                        entity = entity.VERY_HIGH;
                        if(!(michal !== entity)) { _fun00004_ip = 99; continue _fun00003 }
 30:
                        entity = {};
                        oscard = _closure1_slot0;
                        golfie = _closure1_slot2;
                        michal = 13;
                        option = golfie[michal];
                        report = undefined;
                        option = oscard.bind(report)(option);
                        option = option.VerificationFormFieldTypes;
                        option = option.VERIFICATION;
                        entity['field_type'] = option;
                        michal = golfie[michal];
                        michal = oscard.bind(report)(michal);
                        michal = michal.UserVerificationFieldPlatforms;
                        michal = michal.EMAIL;
                        entity['platform'] = michal;
                        _fun00004_ip = 197; continue _fun00003;
 99:
                        report = _closure3_slot1;
                        michal = null;
                        if(!(michal != report)) { _fun00004_ip = 124; continue _fun00003 }
 109:
                        zuuluu = _closure3_slot1;
                        zuuluu = zuuluu.phone;
                        michal = null;
                        if(zuuluu) { _fun00004_ip = 194; continue _fun00003 }
 124:
                        zuuluu = {};
                        oscard = _closure1_slot0;
                        golfie = _closure1_slot2;
                        tangon = 13;
                        option = golfie[tangon];
                        report = undefined;
                        option = oscard.bind(report)(option);
                        option = option.VerificationFormFieldTypes;
                        option = option.VERIFICATION;
                        zuuluu['field_type'] = option;
                        tangon = golfie[tangon];
                        tangon = oscard.bind(report)(tangon);
                        tangon = tangon.UserVerificationFieldPlatforms;
                        tangon = tangon.PHONE;
                        zuuluu['platform'] = tangon;
                        michal = zuuluu;
 194:
                        entity = michal;
 197:
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            option = undefined;
            zuuluu = zuuluu.bind(option)(tangon);
            var _closure2_slot1 = zuuluu;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 14;
            zuuluu = report[zuuluu];
            golfie = tangon.bind(option)(zuuluu);
            report = golfie.useStateFromStores;
            zuuluu = _closure1_slot7;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.get;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = report.bind(golfie)(tangon, michal, zuuluu);
            var _closure2_slot2 = zuuluu;
            golfie = _closure1_slot5;
            report = golfie.useMemo;
            michal = null;
            tangon = michal == zuuluu;
            michal = undefined;
            if(tangon) { _fun00002_ip = 120; continue _fun00001 }
 114:
            michal = zuuluu.formFields;
 120:
            tangon = new Array(1);
            tangon[0] = michal;
            michal = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot2;
                    michal = null;
                    report = michal == entity;
                    entity = undefined;
                    if(report) { _fun00006_ip = 55; continue _fun00005 }
 18:
                    tangon = _closure2_slot2;
                    tangon = tangon.formFields;
                    michal = michal == tangon;
                    entity = undefined;
                    if(michal) { _fun00006_ip = 55; continue _fun00005 }
 37:
                    zuuluu = tangon.some;
                    michal = function(argFoo) {
                        entity = argFoo;
                        michal = entity.field_type;
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 13;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu);
                        entity = entity.VerificationFormFieldTypes;
                        entity = entity.TERMS;
                        entity = michal !== entity;
                        return entity;
                    };
                    entity = zuuluu.bind(tangon)(michal);
 55:
                    return entity;
                }
            };
            michal = report.bind(golfie)(michal, tangon);
            var _closure2_slot3 = michal;
            tangon = function() { // Original name: getFormFields
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = _closure2_slot3;
                    if(entity) { _fun00008_ip = 78; continue _fun00007 }
 10:
                    entity = _closure2_slot1;
                    michal = null;
                    if(!(michal != entity)) { _fun00008_ip = 78; continue _fun00007 }
 20:
                    tangon = _closure2_slot1;
                    entity = new Array(1);
                    entity[0] = tangon;
                    tangon = _closure2_slot2;
                    report = michal == tangon;
                    tangon = undefined;
                    if(report) { _fun00008_ip = 55; continue _fun00007 }
 45:
                    report = _closure2_slot2;
                    tangon = report.formFields;
 55:
                    if(!(michal == tangon)) { _fun00008_ip = 63; continue _fun00007 }
 59:
                    tangon = new Array(0);
 63:
                    oscard = 1;
                    option = entity;
                    golfie = tangon;
                    michal = arraySpread(option, golfie, oscard);
                    _fun00008_ip = 130; continue _fun00007;
 78:
                    tangon = _closure2_slot2;
                    michal = null;
                    report = michal == tangon;
                    tangon = undefined;
                    if(report) { _fun00008_ip = 103; continue _fun00007 }
 93:
                    zuuluu = _closure2_slot2;
                    tangon = zuuluu.formFields;
 103:
                    if(!(michal == tangon)) { _fun00008_ip = 111; continue _fun00007 }
 107:
                    tangon = new Array(0);
 111:
                    michal = new Array(0);
                    oscard = 0;
                    option = michal;
                    golfie = tangon;
                    zuuluu = arraySpread(option, golfie, oscard);
                    entity = michal;
 130:
                    return entity;
                }
            };
            var _closure2_slot4 = tangon;
            golfie = _closure1_slot5;
            report = golfie.useRef;
            report = report.bind(golfie)(tangon);
            var _closure2_slot5 = report;
            verify = _closure1_slot5;
            golfie = verify.useEffect;
            report = function() {
                michal = _closure2_slot5;
                entity = _closure2_slot4;
                michal['current'] = entity;
                entity = undefined;
                return entity;
            };
            report = golfie.bind(verify)(report);
            golfie = _closure1_slot5;
            report = golfie.useState;
            tangon = tangon.bind(option)();
            golfie = report.bind(golfie)(tangon);
            report = _closure1_slot4;
            tangon = 2;
            golfie = report.bind(option)(golfie, tangon);
            tangon = 0;
            report = golfie[tangon];
            tangon = 1;
            tangon = golfie[tangon];
            var _closure2_slot6 = tangon;
            option = _closure1_slot5;
            golfie = option.useEffect;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00010_ip = 37; continue _fun00009 }
 13:
                    zuuluu = _closure2_slot6;
                    michal = _closure2_slot5;
                    entity = michal.current;
                    michal = entity.bind(michal)();
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 37:
                    entity = undefined;
                    return entity;
                }
            };
            entity = golfie.bind(option)(entity, oscard);
            entity = new Array(4);
            entity[0] = report;
            entity[1] = tangon;
            entity[2] = zuuluu;
            entity[3] = michal;
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot6 = tangon;
    tangon = 4;
    golfie = oscard[tangon];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot7 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NO_MEMBER_VERIFICATION_FORM;
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.VerificationLevels;
    var _closure1_slot9 = tangon;
    tangon = 6;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot10 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot11 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'flex': 1, 'flexDirection': 'column', 'alignItems': 'stretch', 'paddingHorizontal': 16, 'paddingVertical': 0};
    tangon['container'] = verify;
    verify = {'marginTop': 12, 'marginBottom': 12};
    tangon['submitButton'] = verify;
    verify = {'alignSelf': 'center', 'paddingVertical': 16, 'fontSize': 16};
    tangon['error'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 20;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_member_verification/native/components/MemberVerificationForm.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: MemberVerificationForm
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            result = entity.guild;
            var _closure2_slot0 = result;
            michal = entity.onSuccess;
            var _closure2_slot1 = michal;
            option = entity.onClose;
            var _closure2_slot2 = option;
            entity = _closure1_slot12;
            report = undefined;
            sizing = entity.bind(report)();
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 11;
            entity = zuuluu[entity];
            michal = michal.bind(report)(entity);
            entity = michal.useUserVerificationState;
            verify = entity.bind(michal)();
            var _closure2_slot3 = verify;
            entity = _closure1_slot13;
            zuuluu = entity.bind(report)(result);
            michal = _closure1_slot4;
            entity = 4;
            michal = michal.bind(report)(zuuluu, entity);
            golfie = 0;
            output = michal[golfie];
            var _closure2_slot4 = output;
            oscard = 1;
            entity = michal[oscard];
            var _closure2_slot5 = entity;
            romeon = 2;
            zuuluu = michal[romeon];
            var _closure2_slot6 = zuuluu;
            entity = 3;
            michal = michal[entity];
            var _closure2_slot7 = michal;
            offset = _closure1_slot5;
            tangon = offset.useState;
            entity = false;
            tangon = tangon.bind(offset)(entity);
            entity = _closure1_slot4;
            entity = entity.bind(report)(tangon, romeon);
            yankee = entity[golfie];
            entity = entity[oscard];
            var _closure2_slot8 = entity;
            offset = _closure1_slot5;
            tangon = offset.useState;
            entity = null;
            offset = tangon.bind(offset)(entity);
            tangon = _closure1_slot4;
            tangon = tangon.bind(report)(offset, romeon);
            kiloes = tangon[golfie];
            tangon = tangon[oscard];
            var _closure2_slot9 = tangon;
            golfie = _closure1_slot5;
            oscard = golfie.useEffect;
            tangon = new Array(2);
            tangon[0] = option;
            tangon[1] = zuuluu;
            zuuluu = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure2_slot6;
                    michal = _closure1_slot8;
                    if(!(zuuluu === michal)) { _fun00014_ip = 41; continue _fun00013 }
 18:
                    zuuluu = _closure2_slot2;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00014_ip = 41; continue _fun00013 }
 28:
                    zuuluu = _closure2_slot2;
                    michal = undefined;
                    entity = false;
                    entity = zuuluu.bind(michal)(entity);
 41:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = oscard.bind(golfie)(zuuluu, tangon);
            oscard = _closure1_slot5;
            tangon = oscard.useMemo;
            golfie = result.verificationLevel;
            zuuluu = new Array(4);
            zuuluu[0] = golfie;
            zuuluu[1] = michal;
            zuuluu[2] = verify;
            zuuluu[3] = output;
            michal = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = _closure2_slot4;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00016_ip = 41; continue _fun00015 }
 13:
                    tangon = _closure2_slot4;
                    zuuluu = tangon.some;
                    entity = function(argFoo) {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 15;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.isValidFormResponse;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        entity = !entity;
                        return entity;
                    };
                    entity = zuuluu.bind(tangon)(entity);
                    if(entity) { _fun00016_ip = 278; continue _fun00015 }
 41:
                    entity = _closure2_slot7;
                    if(entity) { _fun00016_ip = 274; continue _fun00015 }
 51:
                    entity = _closure2_slot0;
                    tangon = entity.verificationLevel;
                    zuuluu = _closure1_slot9;
                    zuuluu = zuuluu.VERY_HIGH;
                    if(!(zuuluu !== tangon)) { _fun00016_ip = 227; continue _fun00015 }
 81:
                    zuuluu = _closure1_slot9;
                    zuuluu = zuuluu.HIGH;
                    if(!(zuuluu !== tangon)) { _fun00016_ip = 137; continue _fun00015 }
 95:
                    zuuluu = _closure1_slot9;
                    zuuluu = zuuluu.MEDIUM;
                    if(!(zuuluu !== tangon)) { _fun00016_ip = 137; continue _fun00015 }
 109:
                    zuuluu = _closure1_slot9;
                    zuuluu = zuuluu.LOW;
                    if(!(zuuluu !== tangon)) { _fun00016_ip = 137; continue _fun00015 }
 123:
                    zuuluu = _closure1_slot9;
                    zuuluu = zuuluu.NONE;
                    zuuluu = false;
                    return zuuluu;
 137:
                    tangon = _closure2_slot3;
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    option = 13;
                    zuuluu = zuuluu[option];
                    golfie = undefined;
                    zuuluu = report.bind(golfie)(zuuluu);
                    zuuluu = zuuluu.UserVerificationFieldPlatforms;
                    zuuluu = zuuluu.EMAIL;
                    zuuluu = tangon[zuuluu];
                    zuuluu = !zuuluu;
                    if(!zuuluu) { _fun00016_ip = 225; continue _fun00015 }
 185:
                    report = _closure2_slot3;
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot2;
                    tangon = tangon[option];
                    tangon = oscard.bind(golfie)(tangon);
                    tangon = tangon.UserVerificationFieldPlatforms;
                    tangon = tangon.PHONE;
                    tangon = report[tangon];
                    zuuluu = !tangon;
 225:
                    return zuuluu;
 227:
                    michal = _closure2_slot3;
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 13;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    entity = tangon.bind(entity)(zuuluu);
                    entity = entity.UserVerificationFieldPlatforms;
                    entity = entity.PHONE;
                    entity = michal[entity];
                    entity = !entity;
                    return entity;
 274:
                    entity = false;
                    return entity;
 278:
                    entity = true;
                    return entity;
                }
            };
            romeon = tangon.bind(oscard)(michal, zuuluu);
            var _closure2_slot10 = romeon;
            if(!(entity != output)) { _fun00012_ip = 650; continue _fun00011 }
 311:
            michal = function() {
                tangon = _closure1_slot3;
                zuuluu = undefined;
                michal = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00018_ip = 581; continue _fun00017 }
 10:
                            michal = undefined;
                            report = undefined;
                            yankee = undefined;
                            verify = undefined;
                            oscard = undefined;
                            golfie = undefined;
                            tangon = _closure2_slot10;
                            if(tangon) { _fun00018_ip = 459; continue _fun00017 }
 35:
                            tangon = _closure2_slot9;
                            option = null;
                            tangon = tangon.bind(michal)(option);
                            tangon = _closure2_slot8;
                            romeon = true;
                            tangon = tangon.bind(michal)(romeon);
                            foxtra = {};
                            tangon = _closure2_slot6;
                            if(!(option == tangon)) { _fun00018_ip = 76; continue _fun00017 }
 67:
                            tangon = _closure1_slot8;
                            _fun00018_ip = 80; continue _fun00017;
 76:
                            tangon = _closure2_slot6;
 80:
                            result = foxtra;
                            output = tangon;
                            tangon = copyDataProperties(result, output);
                            kiloes = _closure1_slot0;
                            sizing = _closure1_slot2;
                            backup = 15;
                            backup = sizing[backup];
                            sizing = kiloes.bind(michal)(backup);
                            kiloes = sizing.removeInternalFields;
                            backup = _closure2_slot4;
                            kiloes = kiloes.bind(sizing)(backup);
                            backup = 'formFields';
                            foxtra[backup] = kiloes;
                            report = foxtra;
 140: // try_start_0
                            backup = _closure1_slot1;
                            kiloes = _closure1_slot2;
                            foxtra = 16;
                            foxtra = kiloes[foxtra];
                            kiloes = backup.bind(michal)(foxtra);
                            backup = kiloes.submitVerificationForm;
                            foxtra = _closure2_slot0;
                            foxtra = foxtra.id;
                            report = backup.bind(kiloes)(foxtra, report);
                            SaveGenerator(address=185);
 183:
                            return report;
 185:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=12);
                            if(foxtra) { _fun00018_ip = 244; continue _fun00017 }
 191:
                            yankee = report;
                            backup = _closure2_slot8;
                            foxtra = false;
                            foxtra = backup.bind(michal)(foxtra);
                            foxtra = _closure2_slot1;
                            if(!(option != foxtra)) { _fun00018_ip = 222; continue _fun00017 }
 213:
                            foxtra = _closure2_slot1;
                            yankee = foxtra.bind(michal)(yankee);
 222:
                            yankee = _closure2_slot2;
                            if(!(option != yankee)) { _fun00018_ip = 239; continue _fun00017 }
 230:
                            yankee = _closure2_slot2;
                            yankee = yankee.bind(michal)(romeon);
 239: // try_end0
                            _fun00018_ip = 578; continue _fun00017;
 244:
                            return report;
 247: // catch_target0
                            CatchBlockStart(arg_register=4);
                            offset = report;
                            yankee = option == report;
                            report = undefined;
                            if(yankee) { _fun00018_ip = 266; continue _fun00017 }
 261:
                            report = offset.body;
 266:
                            golfie = report;
                            offset = option == report;
                            report = undefined;
                            if(offset) { _fun00018_ip = 305; continue _fun00017 }
 278:
                            offset = golfie;
                            offset = offset.errors;
                            verify = offset;
                            offset = option == offset;
                            report = undefined;
                            if(offset) { _fun00018_ip = 305; continue _fun00017 }
 299:
                            report = verify.version;
 305:
                            if(!(option == report)) { _fun00018_ip = 380; continue _fun00017 }
 309:
                            report = golfie;
                            verify = option == report;
                            report = undefined;
                            if(verify) { _fun00018_ip = 348; continue _fun00017 }
 321:
                            verify = golfie;
                            verify = verify.errors;
                            oscard = verify;
                            verify = option == verify;
                            report = undefined;
                            if(verify) { _fun00018_ip = 348; continue _fun00017 }
 342:
                            report = oscard.form_fields;
 348:
                            if(!(option == report)) { _fun00018_ip = 380; continue _fun00017 }
 352:
                            oscard = _closure2_slot9;
                            report = golfie;
                            option = option == report;
                            report = undefined;
                            if(option) { _fun00018_ip = 373; continue _fun00017 }
 368:
                            report = golfie.message;
 373:
                            report = oscard.bind(michal)(report);
                            _fun00018_ip = 446; continue _fun00017;
 380:
                            report = _closure2_slot9;
                            option = _closure1_slot0;
                            verify = _closure1_slot2;
                            tangon = 9;
                            oscard = verify[tangon];
                            oscard = option.bind(michal)(oscard);
                            golfie = oscard.intl;
                            oscard = golfie.string;
                            tangon = verify[tangon];
                            tangon = option.bind(michal)(tangon);
                            tangon = tangon.t;
                            tangon = tangon.PD09Sk;
                            tangon = oscard.bind(golfie)(tangon);
                            tangon = report.bind(michal)(tangon);
 446:
                            tangon = _closure2_slot8;
                            zuuluu = false;
                            zuuluu = tangon.bind(michal)(zuuluu);
                            _fun00018_ip = 578; continue _fun00017;
 459:
                            golfie = _closure1_slot1;
                            option = _closure1_slot2;
                            zuuluu = 8;
                            zuuluu = option[zuuluu];
                            report = golfie.bind(michal)(zuuluu);
                            tangon = report.open;
                            zuuluu = {};
                            verify = 'MEMBER_VERIFICATION_FORM_INCOMPLETE';
                            zuuluu['key'] = verify;
                            yankee = _closure1_slot0;
                            oscard = 9;
                            verify = option[oscard];
                            verify = yankee.bind(michal)(verify);
                            offset = verify.intl;
                            verify = offset.string;
                            oscard = option[oscard];
                            oscard = yankee.bind(michal)(oscard);
                            oscard = oscard.t;
                            oscard = oscard.StC49/;
                            oscard = verify.bind(offset)(oscard);
                            zuuluu['content'] = oscard;
                            oscard = 10;
                            oscard = option[oscard];
                            oscard = golfie.bind(michal)(oscard);
                            zuuluu['icon'] = oscard;
                            zuuluu = tangon.bind(report)(zuuluu);
 578:
                            return michal;
 581:
                            return entity;
                        }
                    };
                    return entity;
                };
                michal = tangon.bind(zuuluu)(michal);
                var _closure3_slot0 = michal;
                entity = function() {
                    entity = undefined;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                return entity;
            };
            offset = michal.bind(report)();
            tangon = _closure1_slot11;
            zuuluu = _closure1_slot6;
            michal = {};
            oscard = sizing.container;
            michal['style'] = oscard;
            option = _closure1_slot10;
            golfie = _closure1_slot1;
            echoed = _closure1_slot2;
            oscard = 17;
            oscard = echoed[oscard];
            golfie = golfie.bind(report)(oscard);
            oscard = {};
            result = result.rulesChannelId;
            oscard['rulesChannelId'] = result;
            oscard['formFields'] = output;
            backup = function(argFoo, argBar) { // Original name: onChange
                golfie = argFoo;
                oscard = _closure2_slot4;
                report = oscard[golfie];
                zuuluu = _closure2_slot5;
                entity = oscard.slice;
                tangon = 0;
                offset = entity.bind(oscard)(tangon, golfie);
                michal = new Array(1);
                yankee = michal;
                verify = 0;
                tangon = arraySpread(yankee, offset, verify);
                entity = {};
                yankee = entity;
                offset = report;
                report = copyDataProperties(yankee, offset);
                option = argBar;
                report = 'response';
                entity[report] = option;
                michal[tangon] = entity;
                entity = 1;
                verify = tangon + entity;
                report = oscard.slice;
                entity = golfie + entity;
                offset = report.bind(oscard)(entity);
                yankee = michal;
                entity = arraySpread(yankee, offset, verify);
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            oscard['onChange'] = backup;
            oscard['verification'] = verify;
            golfie = option.bind(report)(golfie, oscard);
            oscard = new Array(3);
            oscard[0] = golfie;
            option = entity != kiloes;
            golfie = null;
            if(!option) { _fun00012_ip = 464; continue _fun00011 }
 419:
            backup = _closure1_slot10;
            verify = _closure1_slot1;
            output = _closure1_slot2;
            option = 18;
            option = output[option];
            verify = verify.bind(report)(option);
            option = {};
            output = sizing.error;
            option['style'] = output;
            option['children'] = kiloes;
            golfie = backup.bind(report)(verify, option);
 464:
            oscard[1] = golfie;
            verify = _closure1_slot10;
            kiloes = _closure1_slot1;
            output = _closure1_slot2;
            backup = 19;
            golfie = output[backup];
            option = kiloes.bind(report)(golfie);
            golfie = {};
            sizing = sizing.submitButton;
            golfie['style'] = sizing;
            sizing = output[backup];
            sizing = kiloes.bind(report)(sizing);
            sizing = sizing.Colors;
            sizing = sizing.BRAND;
            golfie['color'] = sizing;
            backup = output[backup];
            backup = kiloes.bind(report)(backup);
            backup = backup.Sizes;
            backup = backup.MEDIUM;
            golfie['size'] = backup;
            sizing = _closure1_slot0;
            foxtra = 9;
            backup = output[foxtra];
            backup = sizing.bind(report)(backup);
            kiloes = backup.intl;
            backup = kiloes.string;
            foxtra = output[foxtra];
            foxtra = sizing.bind(report)(foxtra);
            foxtra = foxtra.t;
            foxtra = foxtra.verify/DT0;
            foxtra = backup.bind(kiloes)(foxtra);
            golfie['text'] = foxtra;
            golfie['loading'] = yankee;
            if(yankee) { _fun00012_ip = 620; continue _fun00011 }
 617:
            yankee = romeon;
 620:
            golfie['disabled'] = yankee;
            golfie['onPress'] = offset;
            golfie = verify.bind(report)(option, golfie);
            oscard[2] = golfie;
            michal['children'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 650:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();