// app/modules/user_settings/native/account/UserSettingsChangeUsername.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
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
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    romeon = 1;
    tangon = oscard[romeon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    foxtra = 2;
    golfie = oscard[foxtra];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.View;
    var _closure1_slot6 = golfie;
    tangon = tangon.ScrollView;
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UserSettingsSections;
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot10 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot11 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    offset = 8;
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_MOBILE_SECONDARY;
    verify['backgroundColor'] = backup;
    tangon['background'] = verify;
    verify = {};
    backup = 16;
    verify['padding'] = backup;
    tangon['container'] = verify;
    verify = {'flex': 1, 'flexDirection': 'row', 'marginTop': 8};
    tangon['inputs'] = verify;
    verify = {};
    verify['flex'] = foxtra;
    tangon['username'] = verify;
    verify = {};
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.none;
    verify['borderBottomRightRadius'] = foxtra;
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.none;
    verify['borderTopRightRadius'] = foxtra;
    tangon['usernameInput'] = verify;
    verify = {};
    verify['flex'] = romeon;
    tangon['discriminator'] = verify;
    verify = {};
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.radii;
    romeon = romeon.none;
    verify['borderBottomLeftRadius'] = romeon;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.radii;
    romeon = romeon.none;
    verify['borderTopLeftRadius'] = romeon;
    tangon['discriminatorInput'] = verify;
    verify = {'width': 1, 'backgroundColor': null, 'marginBottom': 8};
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BACKGROUND_TERTIARY;
    verify['backgroundColor'] = romeon;
    tangon['divider'] = verify;
    verify = {'flex': 1, 'marginVertical': 12};
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_MODIFIER_SELECTED;
    verify['backgroundColor'] = offset;
    tangon['dividerInner'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot12 = tangon;
    tangon = function(argFoo) { // Original name: UsernameStatusMessage
        michal = argFoo;
        report = michal.usernameStatus;
        michal = michal.showHint;
        var _closure2_slot0 = michal;
        golfie = _closure1_slot0;
        option = _closure1_slot2;
        michal = 9;
        zuuluu = option[michal];
        oscard = undefined;
        tangon = golfie.bind(oscard)(zuuluu);
        zuuluu = tangon.match;
        offset = zuuluu.bind(tangon)(report);
        report = offset.with;
        tangon = {};
        verify = 10;
        zuuluu = option[verify];
        zuuluu = golfie.bind(oscard)(zuuluu);
        zuuluu = zuuluu.NameValidationState;
        zuuluu = zuuluu.ERROR;
        tangon['type'] = zuuluu;
        zuuluu = option[michal];
        zuuluu = golfie.bind(oscard)(zuuluu);
        yankee = zuuluu.P;
        zuuluu = yankee.select;
        zuuluu = zuuluu.bind(yankee)();
        tangon['message'] = zuuluu;
        zuuluu = function(argFoo) {
            tangon = _closure1_slot10;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 11;
            entity = zuuluu[entity];
            zuuluu = undefined;
            entity = michal.bind(zuuluu)(entity);
            michal = entity.Text;
            entity = {'variant': 'text-xs/medium', 'color': 'text-danger'};
            report = argFoo;
            entity['children'] = report;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        report = report.bind(offset)(tangon, zuuluu);
        tangon = report.with;
        zuuluu = {};
        verify = option[verify];
        verify = golfie.bind(oscard)(verify);
        verify = verify.NameValidationState;
        verify = verify.AVAILABLE;
        zuuluu['type'] = verify;
        michal = option[michal];
        michal = golfie.bind(oscard)(michal);
        oscard = michal.P;
        michal = oscard.select;
        michal = michal.bind(oscard)();
        zuuluu['message'] = michal;
        michal = function(argFoo) {
            tangon = _closure1_slot10;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 11;
            entity = zuuluu[entity];
            zuuluu = undefined;
            entity = michal.bind(zuuluu)(entity);
            michal = entity.Text;
            entity = {'variant': 'text-xs/medium', 'color': 'text-positive'};
            report = argFoo;
            entity['children'] = report;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        zuuluu = tangon.bind(report)(zuuluu, michal);
        michal = zuuluu.otherwise;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure2_slot0;
                entity = null;
                if(!michal) { _fun00002_ip = 117; continue _fun00001 }
 12:
                report = _closure1_slot10;
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                michal = 11;
                michal = offset[michal];
                tangon = undefined;
                michal = verify.bind(tangon)(michal);
                zuuluu = michal.Text;
                michal = {'variant': 'text-xs/medium', 'color': 'text-normal'};
                oscard = 12;
                golfie = offset[oscard];
                golfie = verify.bind(tangon)(golfie);
                option = golfie.intl;
                golfie = option.string;
                oscard = offset[oscard];
                oscard = verify.bind(tangon)(oscard);
                oscard = oscard.t;
                oscard = oscard.z7c4bG;
                oscard = golfie.bind(option)(oscard);
                michal['children'] = oscard;
                entity = report.bind(tangon)(zuuluu, michal);
 117:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot13 = tangon;
    tangon = 28;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_settings/native/account/UserSettingsChangeUsername.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: _default
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = _closure1_slot12;
            report = undefined;
            sequen = entity.bind(report)();
            michal = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 13;
            entity = oscard[entity];
            zuuluu = michal.bind(report)(entity);
            entity = zuuluu.useNavigation;
            zuuluu = entity.bind(zuuluu)();
            var _closure2_slot0 = zuuluu;
            entity = 14;
            entity = oscard[entity];
            option = michal.bind(report)(entity);
            golfie = option.useStateFromStores;
            entity = _closure1_slot8;
            tangon = new Array(1);
            tangon[0] = entity;
            entity = function() {
                michal = _closure1_slot8;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            output = golfie.bind(option)(tangon, entity);
            var _closure2_slot1 = output;
            entity = 15;
            entity = oscard[entity];
            michal = michal.bind(report)(entity);
            entity = michal.useChangeUsernameLivecheckEnabled;
            michal = entity.bind(michal)();
            var _closure2_slot2 = michal;
            tangon = _closure1_slot1;
            entity = 16;
            entity = oscard[entity];
            tangon = tangon.bind(report)(entity);
            entity = tangon.canEditDiscriminator;
            source = entity.bind(tangon)(output);
            if(!source) { _fun00004_ip = 173; continue _fun00003 }
 151:
            entity = null;
            entity = entity != output;
            if(!entity) { _fun00004_ip = 170; continue _fun00003 }
 160:
            tangon = output.isPomelo;
            entity = tangon.bind(output)();
 170:
            source = !entity;
 173:
            var _closure2_slot3 = source;
            golfie = _closure1_slot5;
            oscard = golfie.useState;
            entity = null;
            tangon = entity == output;
            option = undefined;
            if(tangon) { _fun00004_ip = 202; continue _fun00003 }
 197:
            option = output.username;
 202:
            offset = entity != option;
            verify = '';
            tangon = verify;
            if(!offset) { _fun00004_ip = 219; continue _fun00003 }
 216:
            tangon = option;
 219:
            oscard = oscard.bind(golfie)(tangon);
            tangon = _closure1_slot4;
            option = 2;
            tangon = tangon.bind(report)(oscard, option);
            romeon = 0;
            cntext = tangon[romeon];
            var _closure2_slot4 = cntext;
            oscard = 1;
            tangon = tangon[oscard];
            var _closure2_slot5 = tangon;
            golfie = _closure1_slot5;
            tangon = golfie.useState;
            yankee = entity == output;
            offset = undefined;
            if(yankee) { _fun00004_ip = 282; continue _fun00003 }
 276:
            offset = output.discriminator;
 282:
            yankee = entity != offset;
            if(!yankee) { _fun00004_ip = 292; continue _fun00003 }
 289:
            verify = offset;
 292:
            tangon = tangon.bind(golfie)(verify);
            golfie = _closure1_slot4;
            tangon = golfie.bind(report)(tangon, option);
            yankee = tangon[romeon];
            var _closure2_slot6 = yankee;
            offset = tangon[oscard];
            verify = _closure1_slot5;
            tangon = verify.useState;
            tangon = tangon.bind(verify)(entity);
            tangon = golfie.bind(report)(tangon, option);
            backup = tangon[romeon];
            tangon = tangon[oscard];
            var _closure2_slot7 = tangon;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 17;
            tangon = golfie[tangon];
            option = oscard.bind(report)(tangon);
            golfie = option.useUsernameStatus;
            oscard = entity == output;
            if(oscard) { _fun00004_ip = 397; continue _fun00003 }
 384:
            tangon = output.isPomelo;
            tangon = tangon.bind(output)();
            oscard = !tangon;
 397:
            tangon = !oscard;
            if(oscard) { _fun00004_ip = 406; continue _fun00003 }
 403:
            tangon = michal;
 406:
            oscard = entity == output;
            michal = undefined;
            if(oscard) { _fun00004_ip = 420; continue _fun00003 }
 415:
            michal = output.username;
 420:
            oscard = false;
            quebec = option;
            equals = cntext;
            whisks = tangon;
            limora = false;
            sierra = michal;
            michal = quebec[golfie](equals, whisks, limora, sierra, status);
            golfie = _closure1_slot5;
            tangon = golfie.useRef;
            option = tangon.bind(golfie)(entity);
            var _closure2_slot8 = option;
            golfie = entity == output;
            tangon = undefined;
            if(golfie) { _fun00004_ip = 472; continue _fun00003 }
 467:
            tangon = output.username;
 472:
            kiloes = cntext !== tangon;
            if(kiloes) { _fun00004_ip = 498; continue _fun00003 }
 479:
            golfie = entity == output;
            tangon = undefined;
            if(golfie) { _fun00004_ip = 494; continue _fun00003 }
 488:
            tangon = output.discriminator;
 494:
            kiloes = yankee !== tangon;
 498:
            if(!kiloes) { _fun00004_ip = 557; continue _fun00003 }
 501:
            tangon = !source;
            if(tangon) { _fun00004_ip = 554; continue _fun00003 }
 507:
            verify = /^\d+$/;
            golfie = verify.test;
            golfie = golfie.bind(verify)(yankee);
            if(!golfie) { _fun00004_ip = 551; continue _fun00003 }
 534:
            verify = global;
            verify = verify.parseInt;
            verify = verify.bind(report)(yankee);
            golfie = verify > romeon;
 551:
            tangon = golfie;
 554:
            kiloes = tangon;
 557:
            var _closure2_slot9 = kiloes;
            romeon = _closure1_slot5;
            verify = romeon.useCallback;
            golfie = new Array(6);
            golfie[0] = kiloes;
            golfie[1] = source;
            golfie[2] = yankee;
            golfie[3] = zuuluu;
            golfie[4] = output;
            golfie[5] = cntext;
            tangon = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot9;
                    if(!entity) { _fun00006_ip = 125; continue _fun00005 }
 12:
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    entity = 18;
                    entity = tangon[entity];
                    option = undefined;
                    golfie = zuuluu.bind(option)(entity);
                    tangon = golfie.setSection;
                    entity = _closure1_slot9;
                    zuuluu = entity.ACCOUNT_CONFIRM_PASSWORD;
                    zuuluu = tangon.bind(golfie)(zuuluu);
                    tangon = _closure2_slot0;
                    zuuluu = tangon.push;
                    michal = entity.ACCOUNT_CONFIRM_PASSWORD;
                    entity = {};
                    golfie = _closure1_slot3;
                    oscard = function* (argFoo) {
                        entity = function* (argFoo) { // Original name: ?anon_0_
                            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(michal) { _fun00008_ip = 317; continue _fun00007 }
 10:
                                zuuluu = _closure2_slot1;
                                michal = null;
                                if(!(michal != zuuluu)) { _fun00008_ip = 314; continue _fun00007 }
 26:
                                zuuluu = _closure2_slot7;
                                oscard = undefined;
                                zuuluu = zuuluu.bind(oscard)(michal);
                                option = {};
                                zuuluu = _closure2_slot4;
                                option['username'] = zuuluu;
                                zuuluu = argFoo;
                                option['password'] = zuuluu;
                                report = _closure2_slot3;
                                zuuluu = undefined;
                                if(!report) { _fun00008_ip = 68; continue _fun00007 }
 64:
                                zuuluu = _closure2_slot6;
 68:
                                option['discriminator'] = zuuluu;
                                report = _closure1_slot1;
                                golfie = _closure1_slot2;
                                zuuluu = 18;
                                zuuluu = golfie[zuuluu];
                                golfie = report.bind(oscard)(zuuluu);
                                report = golfie.saveAccountChanges;
                                zuuluu = {};
                                verify = false;
                                zuuluu['close'] = verify;
                                zuuluu = report.bind(golfie)(option, zuuluu);
                                SaveGenerator(address=121);
 119:
                                return zuuluu;
 121:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                                if(report) { _fun00008_ip = 311; continue _fun00007 }
 130:
                                report = zuuluu.ok;
                                if(report) { _fun00008_ip = 308; continue _fun00007 }
 142:
                                golfie = _closure1_slot0;
                                option = _closure1_slot2;
                                report = 19;
                                report = option[report];
                                report = golfie.bind(oscard)(report);
                                report = report.V6OrEarlierAPIError;
                                golfie = report.prototype;
                                golfie = Object.create(golfie, {constructor: {value: report}});
                                kiloes = golfie;
                                backup = zuuluu;
                                report = new kiloes[report](backup, foxtra);
                                report = report instanceof Object ? report : golfie;
                                option = report.getFieldMessage;
                                golfie = 'username';
                                golfie = option.bind(report)(golfie);
                                if(!(michal == golfie)) { _fun00008_ip = 229; continue _fun00007 }
 210:
                                option = report.getFieldMessage;
                                golfie = 'discriminator';
                                golfie = option.bind(report)(golfie);
                                if(!(michal != golfie)) { _fun00008_ip = 308; continue _fun00007 }
 229:
                                verify = _closure2_slot0;
                                option = verify.dispatch;
                                offset = _closure1_slot0;
                                yankee = _closure1_slot2;
                                golfie = 20;
                                golfie = yankee[golfie];
                                golfie = offset.bind(oscard)(golfie);
                                yankee = golfie.CommonActions;
                                offset = yankee.navigate;
                                golfie = {};
                                romeon = _closure1_slot9;
                                romeon = romeon.ACCOUNT_CHANGE_USERNAME;
                                golfie['name'] = romeon;
                                golfie = offset.bind(yankee)(golfie);
                                golfie = option.bind(verify)(golfie);
                                tangon = _closure2_slot7;
                                tangon = tangon.bind(oscard)(report);
                                return michal;
 308:
                                return zuuluu;
 311:
                                return zuuluu;
 314:
                                return michal;
 317:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    oscard = golfie.bind(option)(oscard);
                    var _closure3_slot0 = oscard;
                    oscard = function() {
                        entity = undefined;
                        tangon = _closure3_slot0;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    entity['onSubmit'] = oscard;
                    report = function() { // Original name: onSuccess
                        tangon = _closure2_slot0;
                        zuuluu = tangon.dispatch;
                        report = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 20;
                        michal = michal[entity];
                        entity = undefined;
                        michal = report.bind(entity)(michal);
                        oscard = michal.CommonActions;
                        report = oscard.navigate;
                        michal = {};
                        golfie = _closure1_slot9;
                        golfie = golfie.ACCOUNT;
                        michal['name'] = golfie;
                        michal = report.bind(oscard)(michal);
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    entity['onSuccess'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
 125:
                    entity = undefined;
                    return entity;
                }
            };
            golfie = verify.bind(romeon)(tangon, golfie);
            var _closure2_slot10 = golfie;
            verify = romeon.useLayoutEffect;
            tangon = new Array(3);
            tangon[0] = kiloes;
            tangon[1] = golfie;
            tangon[2] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure2_slot0;
                michal = zuuluu.setOptions;
                entity = {};
                tangon = function(argFoo) { // Original name: headerRight
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        michal = _closure2_slot9;
                        entity = null;
                        if(!michal) { _fun00010_ip = 137; continue _fun00009 }
 15:
                        report = _closure1_slot10;
                        verify = _closure1_slot0;
                        offset = _closure1_slot2;
                        michal = 21;
                        michal = offset[michal];
                        tangon = undefined;
                        michal = verify.bind(tangon)(michal);
                        zuuluu = michal.HeaderTextButton;
                        michal = {};
                        yankee = argFoo;
                        romeon = michal;
                        golfie = copyDataProperties(romeon, yankee);
                        golfie = _closure2_slot10;
                        oscard = 'onPress';
                        michal[oscard] = golfie;
                        oscard = 12;
                        golfie = offset[oscard];
                        golfie = verify.bind(tangon)(golfie);
                        option = golfie.intl;
                        golfie = option.string;
                        oscard = offset[oscard];
                        oscard = verify.bind(tangon)(oscard);
                        oscard = oscard.t;
                        oscard = oscard.R3BPHx;
                        golfie = golfie.bind(option)(oscard);
                        oscard = 'label';
                        michal[oscard] = golfie;
                        entity = report.bind(tangon)(zuuluu, michal);
 137:
                        return entity;
                    }
                };
                entity['headerRight'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            zuuluu = verify.bind(romeon)(zuuluu, tangon);
            verify = romeon.useCallback;
            tangon = new Array(2);
            tangon[0] = source;
            tangon[1] = golfie;
            zuuluu = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = _closure2_slot3;
                    if(michal) { _fun00012_ip = 22; continue _fun00011 }
 10:
                    zuuluu = _closure2_slot10;
                    michal = undefined;
                    michal = zuuluu.bind(michal)();
                    _fun00012_ip = 47; continue _fun00011;
 22:
                    entity = _closure2_slot8;
                    michal = entity.current;
                    entity = null;
                    if(!(entity != michal)) { _fun00012_ip = 47; continue _fun00011 }
 37:
                    entity = michal.focus;
                    entity = entity.bind(michal)();
 47:
                    entity = undefined;
                    return entity;
                }
            };
            ctrled = verify.bind(romeon)(zuuluu, tangon);
            if(!(entity != output)) { _fun00004_ip = 1657; continue _fun00003 }
 687:
            tangon = entity == backup;
            zuuluu = undefined;
            if(tangon) { _fun00004_ip = 711; continue _fun00003 }
 696:
            verify = backup.getFieldMessage;
            tangon = 'username';
            zuuluu = verify.bind(backup)(tangon);
 711:
            if(!(entity == zuuluu)) { _fun00004_ip = 742; continue _fun00003 }
 715:
            verify = entity == backup;
            tangon = undefined;
            if(verify) { _fun00004_ip = 739; continue _fun00003 }
 724:
            romeon = backup.getFieldMessage;
            verify = 'discriminator';
            tangon = romeon.bind(backup)(verify);
 739:
            zuuluu = tangon;
 742:
            sizing = michal;
            if(!(entity != zuuluu)) { _fun00004_ip = 794; continue _fun00003 }
 749:
            michal = {};
            verify = _closure1_slot0;
            romeon = _closure1_slot2;
            tangon = 10;
            tangon = romeon[tangon];
            tangon = verify.bind(report)(tangon);
            tangon = tangon.NameValidationState;
            tangon = tangon.ERROR;
            michal['type'] = tangon;
            michal['message'] = zuuluu;
            sizing = michal;
 794:
            tangon = _closure1_slot10;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            kiloes = 22;
            michal = michal[kiloes];
            zuuluu = zuuluu.bind(report)(michal);
            if(source) { _fun00004_ip = 907; continue _fun00003 }
 821:
            michal = {};
            michal['ref'] = option;
            verify = sequen.discriminator;
            michal['style'] = verify;
            verify = sequen.discriminatorInput;
            michal['textStyle'] = verify;
            verify = '#';
            verify = verify + yankee;
            michal['value'] = verify;
            romeon = _closure1_slot0;
            backup = _closure1_slot2;
            verify = 24;
            verify = backup[verify];
            verify = romeon.bind(report)(verify);
            verify = verify.ClearButtonVisibility;
            verify = verify.NEVER;
            michal['clearButtonVisibility'] = verify;
            michal['editable'] = oscard;
            _fun00004_ip = 1066; continue _fun00003;
 907:
            oscard = {};
            oscard['ref'] = option;
            option = sequen.discriminator;
            oscard['style'] = option;
            option = sequen.discriminatorInput;
            oscard['textStyle'] = option;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            romeon = 23;
            romeon = verify[romeon];
            romeon = option.bind(report)(romeon);
            romeon = romeon.KeyboardTypes;
            romeon = romeon.NUMERIC;
            oscard['keyboardType'] = romeon;
            oscard['value'] = yankee;
            oscard['onChangeText'] = offset;
            oscard['onSubmitEditing'] = golfie;
            golfie = '1337';
            oscard['placeholder'] = golfie;
            golfie = 'done';
            oscard['returnKeyType'] = golfie;
            golfie = 'none';
            oscard['autoCapitalize'] = golfie;
            golfie = 24;
            golfie = verify[golfie];
            golfie = option.bind(report)(golfie);
            golfie = golfie.ClearButtonVisibility;
            golfie = golfie.WITH_CONTENT;
            oscard['clearButtonVisibility'] = golfie;
            golfie = function() { // Original name: renderLeadingComponent
                tangon = _closure1_slot10;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 11;
                entity = zuuluu[entity];
                zuuluu = undefined;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.Text;
                entity = {'variant': 'text-md/medium', 'children': '#'};
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            oscard['renderLeadingComponent'] = golfie;
            golfie = 4;
            oscard['maxLength'] = golfie;
            michal = oscard;
 1066:
            echoed = tangon.bind(report)(zuuluu, michal);
            tangon = _closure1_slot10;
            config = _closure1_slot0;
            record = _closure1_slot2;
            michal = 25;
            michal = record[michal];
            michal = config.bind(report)(michal);
            zuuluu = michal.RedesignCompat;
            michal = {};
            option = _closure1_slot11;
            golfie = _closure1_slot7;
            oscard = {'style': null, 'keyboardShouldPersistTaps': 'handled', 'alwaysBounceVertical': false};
            verify = sequen.background;
            oscard['style'] = verify;
            result = _closure1_slot1;
            verify = 26;
            verify = record[verify];
            offset = result.bind(report)(verify);
            verify = {};
            offset = tangon.bind(report)(offset, verify);
            verify = new Array(2);
            verify[0] = offset;
            yankee = _closure1_slot6;
            offset = {};
            romeon = sequen.container;
            offset['style'] = romeon;
            romeon = 27;
            romeon = record[romeon];
            backup = result.bind(report)(romeon);
            romeon = {};
            update = 12;
            papara = record[update];
            papara = config.bind(report)(papara);
            status = papara.intl;
            target = status.string;
            papara = record[update];
            papara = config.bind(report)(papara);
            papara = papara.t;
            papara = papara.IEpCBQ;
            papara = target.bind(status)(papara);
            romeon['children'] = papara;
            backup = tangon.bind(report)(backup, romeon);
            romeon = new Array(3);
            romeon[0] = backup;
            backup = {};
            papara = sequen.inputs;
            backup['style'] = papara;
            kiloes = record[kiloes];
            result = result.bind(report)(kiloes);
            kiloes = {};
            papara = sequen.username;
            kiloes['style'] = papara;
            papara = sequen.usernameInput;
            kiloes['textStyle'] = papara;
            papara = 'username';
            kiloes['textContentType'] = papara;
            papara = 23;
            papara = record[papara];
            papara = config.bind(report)(papara);
            papara = papara.KeyboardTypes;
            papara = papara.DEFAULT;
            kiloes['keyboardType'] = papara;
            kiloes['value'] = cntext;
            cntext = output.isPomelo;
            cntext = cntext.bind(output)();
            kiloes['enableAndroidSanitizedInputWorkaround'] = cntext;
            vacuum = function(argFoo) { // Original name: onChangeText
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    tangon = argFoo;
                    entity = _closure2_slot1;
                    zuuluu = null;
                    report = tangon;
                    if(!(zuuluu != entity)) { _fun00014_ip = 49; continue _fun00013 }
 19:
                    oscard = _closure2_slot1;
                    entity = oscard.isPomelo;
                    entity = entity.bind(oscard)();
                    report = tangon;
                    if(!entity) { _fun00014_ip = 49; continue _fun00013 }
 39:
                    entity = tangon.toLowerCase;
                    report = entity.bind(tangon)();
 49:
                    tangon = _closure2_slot5;
                    entity = undefined;
                    tangon = tangon.bind(entity)(report);
                    tangon = _closure2_slot2;
                    if(!tangon) { _fun00014_ip = 76; continue _fun00013 }
 67:
                    michal = _closure2_slot7;
                    michal = michal.bind(entity)(zuuluu);
 76:
                    return entity;
                }
            };
            kiloes['onChangeText'] = vacuum;
            kiloes['onSubmitEditing'] = ctrled;
            ctrled = record[update];
            ctrled = config.bind(report)(ctrled);
            vacuum = ctrled.intl;
            ctrled = vacuum.string;
            update = record[update];
            update = config.bind(report)(update);
            update = update.t;
            update = update.IEpCBQ;
            update = ctrled.bind(vacuum)(update);
            kiloes['placeholder'] = update;
            update = 'done';
            if(!source) { _fun00004_ip = 1441; continue _fun00003 }
 1437:
            update = 'next';
 1441:
            kiloes['returnKeyType'] = update;
            update = 'none';
            kiloes['autoCapitalize'] = update;
            update = true;
            kiloes['autoFocus'] = update;
            result = tangon.bind(report)(result, kiloes);
            kiloes = new Array(3);
            kiloes[0] = result;
            result = output.isPomelo;
            result = result.bind(output)();
            result = !result;
            if(!result) { _fun00004_ip = 1540; continue _fun00003 }
 1492:
            ctrled = _closure1_slot10;
            source = _closure1_slot6;
            update = {};
            vacuum = sequen.divider;
            update['style'] = vacuum;
            vacuum = {};
            sequen = sequen.dividerInner;
            vacuum['style'] = sequen;
            vacuum = ctrled.bind(report)(source, vacuum);
            update['children'] = vacuum;
            result = ctrled.bind(report)(source, update);
 1540:
            kiloes[1] = result;
            result = output.isPomelo;
            result = result.bind(output)();
            result = !result;
            if(!result) { _fun00004_ip = 1563; continue _fun00003 }
 1560:
            result = echoed;
 1563:
            kiloes[2] = result;
            backup['children'] = kiloes;
            backup = option.bind(report)(yankee, backup);
            romeon[1] = backup;
            kiloes = _closure1_slot10;
            backup = _closure1_slot13;
            foxtra = {};
            foxtra['usernameStatus'] = sizing;
            sizing = output.isPomelo;
            sizing = sizing.bind(output)();
            foxtra['showHint'] = sizing;
            foxtra = kiloes.bind(report)(backup, foxtra);
            romeon[2] = foxtra;
            offset['children'] = romeon;
            offset = option.bind(report)(yankee, offset);
            verify[1] = offset;
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 1657:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();