// app/modules/headless_tasks/android/TTITestAction.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, _, argPlu) {
    zuuluu = argBar;
    option = argBaz;
    tangon = argPlu;
    var _closure1_slot0 = zuuluu;
    var _closure1_slot1 = option;
    var _closure1_slot2 = tangon;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot15;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot15;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: sendReply
        entity = _closure1_slot4;
        zuuluu = entity.TTIManager;
        michal = zuuluu.logToDevice;
        entity = global;
        report = entity.JSON;
        tangon = report.stringify;
        entity = {};
        oscard = 'response';
        entity['type'] = oscard;
        oscard = argFoo;
        entity['status'] = oscard;
        oscard = argBar;
        entity['message'] = oscard;
        golfie = argBaz;
        option = entity;
        oscard = copyDataProperties(option, golfie);
        entity = tangon.bind(report)(entity);
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: sendStatus
        oscard = argFoo;
        zuuluu = _closure1_slot12;
        michal = zuuluu.log;
        michal = michal.bind(zuuluu)(oscard);
        entity = _closure1_slot4;
        zuuluu = entity.TTIManager;
        michal = zuuluu.logToDevice;
        entity = global;
        report = entity.JSON;
        tangon = report.stringify;
        entity = {};
        golfie = 'status';
        entity['type'] = golfie;
        entity['message'] = oscard;
        entity = tangon.bind(report)(entity);
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: getErrorDetails
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            golfie = null;
            if(!(golfie != entity)) { _fun00008_ip = 211; continue _fun00007 }
 12:
            zuuluu = 'object';
            michal = typeof entity;
            if(!(zuuluu === michal)) { _fun00008_ip = 211; continue _fun00007 }
 26:
            report = global;
            michal = report.Set;
            zuuluu = michal.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
            backup = zuuluu;
            michal = new backup[michal](foxtra);
            tangon = michal instanceof Object ? michal : zuuluu;
            oscard = undefined;
            michal = entity;
            if(!(golfie != michal)) { _fun00008_ip = 158; continue _fun00007 }
 66:
            verify = _closure1_slot14;
            offset = report.Object;
            option = offset.getOwnPropertyNames;
            option = option.bind(offset)(michal);
            yankee = verify.bind(oscard)(option);
            verify = yankee.bind(oscard)();
            option = verify.done;
            offset = michal;
            if(option) { _fun00008_ip = 137; continue _fun00007 }
 107:
            romeon = verify.value;
            option = tangon.add;
            option = option.bind(tangon)(romeon);
            romeon = yankee.bind(oscard)();
            option = romeon.done;
            verify = romeon;
            if(!option) { _fun00008_ip = 107; continue _fun00007 }
 137:
            verify = report.Object;
            option = verify.getPrototypeOf;
            michal = option.bind(verify)(offset);
            if(golfie != michal) { _fun00008_ip = 66; continue _fun00007 }
 158:
            michal = {};
            zuuluu = _closure1_slot14;
            report = zuuluu.bind(oscard)(tangon);
            tangon = report.bind(oscard)();
            zuuluu = tangon.done;
            if(zuuluu) { _fun00008_ip = 209; continue _fun00007 }
 181:
            golfie = tangon.value;
            zuuluu = entity[golfie];
            michal[golfie] = zuuluu;
            golfie = report.bind(oscard)();
            zuuluu = golfie.done;
            tangon = golfie;
            if(!zuuluu) { _fun00008_ip = 181; continue _fun00007 }
 209:
            return michal;
 211:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    oscard = function() { // Original name: setupTTITest
        entity = undefined;
        tangon = _closure1_slot20;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot19 = oscard;
    entity = function() { // Original name: _setupTTITest
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    tangon = argFoo;
                    michal = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=5);
                    if(oscard) { _fun00010_ip = 1344; continue _fun00009 }
 18:
                    update = tangon;
                    var _closure4_slot0 = tangon;
                    tangon = undefined;
                    if(!(michal === tangon)) { _fun00010_ip = 33; continue _fun00009 }
 31:
                    michal = false;
 33:
                    report = michal;
                    var _closure4_slot1 = michal;
                    backup = undefined;
                    var _closure4_slot2 = tangon;
                    sizing = undefined;
                    foxtra = undefined;
                    option = undefined;
                    yankee = undefined;
                    SaveGenerator(address=58);
 56:
                    return tangon;
 58:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscard) { _fun00010_ip = 1341; continue _fun00009 }
 67:
                    oscard = update;
                    oscard = oscard.user;
                    ctrled = null;
                    if(!(ctrled != oscard)) { _fun00010_ip = 472; continue _fun00009 }
 84:
                    oscard = update;
                    golfie = oscard.user;
                    golfie = golfie.email;
                    backup = golfie;
                    _closure4_slot2 = golfie;
                    golfie = oscard.user;
                    sizing = golfie.password;
                    oscard = oscard.user;
                    foxtra = oscard.expectedId;
 129: // try_start_0
                    verify = _closure1_slot8;
                    golfie = verify.getId;
                    golfie = golfie.bind(verify)();
                    golfie = ctrled != golfie;
                    oscard = golfie;
                    if(!golfie) { _fun00010_ip = 177; continue _fun00009 }
 156:
                    verify = _closure1_slot8;
                    golfie = verify.getId;
                    verify = golfie.bind(verify)();
                    golfie = foxtra;
                    oscard = verify !== golfie;
 177:
                    if(!oscard) { _fun00010_ip = 238; continue _fun00009 }
 180:
                    golfie = _closure1_slot17;
                    oscard = 'Logging out old user';
                    oscard = golfie.bind(tangon)(oscard);
                    golfie = _closure1_slot1;
                    verify = _closure1_slot2;
                    oscard = 15;
                    oscard = verify[oscard];
                    golfie = golfie.bind(tangon)(oscard);
                    oscard = golfie.logout;
                    oscard = oscard.bind(golfie)();
                    SaveGenerator(address=229);
 227:
                    return oscard;
 229:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(golfie) { _fun00010_ip = 1303; continue _fun00009 }
 238:
                    verify = _closure1_slot8;
                    golfie = verify.getId;
                    verify = golfie.bind(verify)();
                    golfie = foxtra;
                    if(!(verify !== golfie)) { _fun00010_ip = 472; continue _fun00009 }
 262:
                    verify = _closure1_slot17;
                    golfie = 'Logging in new user';
                    golfie = verify.bind(tangon)(golfie);
                    offset = global;
                    kiloes = offset.Promise;
                    golfie = kiloes.prototype;
                    verify = Object.create(golfie, {constructor: {value: kiloes}});
                    sierra = function(argFoo, argBar) {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            entity = argFoo;
                            var _closure5_slot0 = entity;
                            entity = argBar;
                            var _closure5_slot1 = entity;
                            tangon = function(argFoo, argBar) { // Original name: subscribeOnce
                                report = argFoo;
                                var _closure6_slot0 = report;
                                entity = argBar;
                                var _closure6_slot1 = entity;
                                zuuluu = _closure1_slot1;
                                michal = _closure1_slot2;
                                entity = 11;
                                michal = michal[entity];
                                entity = undefined;
                                tangon = zuuluu.bind(entity)(michal);
                                zuuluu = tangon.subscribe;
                                michal = function() { // Original name: handler
                                    zuuluu = _closure6_slot1;
                                    report = _closure6_slot0;
                                    entity = undefined;
                                    zuuluu = zuuluu.bind(entity)(report);
                                    tangon = _closure1_slot1;
                                    oscard = _closure1_slot2;
                                    zuuluu = 11;
                                    zuuluu = oscard[zuuluu];
                                    tangon = tangon.bind(entity)(zuuluu);
                                    zuuluu = tangon.unsubscribe;
                                    michal = _closure6_slot2;
                                    michal = zuuluu.bind(tangon)(report, michal);
                                    return entity;
                                };
                                var _closure6_slot2 = michal;
                                michal = zuuluu.bind(tangon)(report, michal);
                                return entity;
                            };
                            oscard = ['LOGIN_MFA_STEP', 'LOGIN_SUSPENDED_USER', 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION', 'LOGIN_ACCOUNT_DISABLED', 'LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED', 'LOGIN_FAILURE'];
                            entity = oscard.length;
                            report = 0;
                            zuuluu = report < entity;
                            entity = undefined;
                            if(!zuuluu) { _fun00012_ip = 78; continue _fun00011 }
 49:
                            golfie = oscard[report];
                            zuuluu = function(argFoo) {
                                zuuluu = _closure5_slot1;
                                entity = global;
                                tangon = entity.Error;
                                romeon = _closure4_slot2;
                                entity = entity.HermesInternal;
                                golfie = entity.concat;
                                foxtra = 'Unable to login ';
                                yankee = ". Login failed with event '";
                                offset = argFoo;
                                verify = "'";
                                romeon = foxtra[golfie](romeon, yankee, offset, verify, option);
                                michal = tangon.prototype;
                                michal = Object.create(michal, {constructor: {value: tangon}});
                                foxtra = michal;
                                entity = new foxtra[tangon](romeon, yankee);
                                michal = entity instanceof Object ? entity : michal;
                                entity = undefined;
                                michal = zuuluu.bind(entity)(michal);
                                return entity;
                            };
                            zuuluu = tangon.bind(entity)(golfie, zuuluu);
                            report = report + 1;
                            zuuluu = oscard.length;
                            if(report < zuuluu) { _fun00012_ip = 49; continue _fun00011 }
 78:
                            zuuluu = 'LOGIN_SUCCESS';
                            michal = function() {
                                michal = _closure5_slot0;
                                entity = undefined;
                                entity = michal.bind(entity)();
                                return entity;
                            };
                            michal = tangon.bind(entity)(zuuluu, michal);
                            return entity;
                        }
                    };
                    limora = verify;
                    golfie = new limora[kiloes](sierra, status);
                    option = golfie instanceof Object ? golfie : verify;
                    verify = _closure1_slot1;
                    kiloes = _closure1_slot2;
                    golfie = 15;
                    golfie = kiloes[golfie];
                    kiloes = verify.bind(tangon)(golfie);
                    verify = kiloes.login;
                    golfie = {};
                    output = backup;
                    golfie['login'] = output;
                    golfie['password'] = sizing;
                    golfie = verify.bind(kiloes)(golfie);
                    SaveGenerator(address=362);
 360:
                    return golfie;
 362:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                    if(verify) { _fun00010_ip = 1300; continue _fun00009 }
 371:
                    SaveGenerator(address=375);
 373:
                    return option;
 375:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(verify) { _fun00010_ip = 1297; continue _fun00009 }
 384:
                    kiloes = _closure1_slot17;
                    verify = 'Waiting for socket connection';
                    verify = kiloes.bind(tangon)(verify);
                    sizing = offset.Promise;
                    verify = sizing.prototype;
                    kiloes = Object.create(verify, {constructor: {value: sizing}});
                    sierra = function(argFoo) {
                        zuuluu = _closure1_slot7;
                        michal = undefined;
                        entity = argFoo;
                        entity = zuuluu.bind(michal)(entity);
                        return entity;
                    };
                    limora = kiloes;
                    verify = new limora[sizing](sierra, status);
                    verify = verify instanceof Object ? verify : kiloes;
                    SaveGenerator(address=436);
 434:
                    return verify;
 436:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=14);
                    if(kiloes) { _fun00010_ip = 1294; continue _fun00009 }
 445:
                    kiloes = _closure1_slot8;
                    romeon = kiloes.getId;
                    kiloes = romeon.bind(kiloes)();
                    yankee = kiloes;
                    romeon = foxtra;
                    if(!(kiloes === romeon)) { _fun00010_ip = 1224; continue _fun00009 }
 472: // try_end0
                    kiloes = _closure1_slot17;
                    romeon = 'Waiting for socket connection';
                    romeon = kiloes.bind(tangon)(romeon);
                    result = global;
                    sizing = result.Promise;
                    romeon = sizing.prototype;
                    kiloes = Object.create(romeon, {constructor: {value: sizing}});
                    sierra = function(argFoo) {
                        zuuluu = _closure1_slot7;
                        michal = undefined;
                        entity = argFoo;
                        entity = zuuluu.bind(michal)(entity);
                        return entity;
                    };
                    limora = kiloes;
                    romeon = new limora[sizing](sierra, status);
                    romeon = romeon instanceof Object ? romeon : kiloes;
                    SaveGenerator(address=529);
 527:
                    return romeon;
 529:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=14);
                    if(kiloes) { _fun00010_ip = 1221; continue _fun00009 }
 538:
                    output = result.Promise;
                    kiloes = output.prototype;
                    sizing = Object.create(kiloes, {constructor: {value: output}});
                    sierra = function(argFoo) {
                        entity = global;
                        tangon = entity.setTimeout;
                        zuuluu = undefined;
                        michal = argFoo;
                        entity = 1000;
                        entity = tangon.bind(zuuluu)(michal, entity);
                        return entity;
                    };
                    limora = sizing;
                    kiloes = new limora[output](sierra, status);
                    kiloes = kiloes instanceof Object ? kiloes : sizing;
                    SaveGenerator(address=575);
 573:
                    return kiloes;
 575:
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=15);
                    if(sizing) { _fun00010_ip = 1218; continue _fun00009 }
 584:
                    sizing = update;
                    sizing = sizing.invite;
                    sizing = ctrled != sizing;
                    if(!sizing) { _fun00010_ip = 633; continue _fun00009 }
 600:
                    sequen = _closure1_slot10;
                    source = sequen.getGuild;
                    output = update;
                    output = output.invite;
                    output = output.expectedGuildId;
                    output = source.bind(sequen)(output);
                    sizing = ctrled == output;
 633:
                    if(!sizing) { _fun00010_ip = 815; continue _fun00009 }
 639:
                    sizing = report;
                    if(sizing) { _fun00010_ip = 660; continue _fun00009 }
 645:
                    output = _closure1_slot17;
                    sizing = 'Inviting to target guild';
                    sizing = output.bind(tangon)(sizing);
 660:
                    output = _closure1_slot1;
                    source = _closure1_slot2;
                    sizing = 16;
                    sizing = source[sizing];
                    source = output.bind(tangon)(sizing);
                    output = source.acceptInvite;
                    sizing = {};
                    sequen = update;
                    sequen = sequen.invite;
                    sequen = sequen.code;
                    sizing['inviteKey'] = sequen;
                    sequen = {};
                    config = 'tti_tests';
                    sequen['location'] = config;
                    sizing['context'] = sequen;
                    sequen = true;
                    sizing['skipOnboarding'] = sequen;
                    sizing = output.bind(source)(sizing);
                    SaveGenerator(address=739);
 737:
                    return sizing;
 739:
                    ResumeGenerator(result_out_reg=15, return_bool_out_reg=16);
                    if(output) { _fun00010_ip = 1215; continue _fun00009 }
 748:
                    output = report;
                    if(output) { _fun00010_ip = 769; continue _fun00009 }
 754:
                    source = _closure1_slot17;
                    output = 'Invite API call finished';
                    output = source.bind(tangon)(output);
 769:
                    sequen = result.Promise;
                    output = sequen.prototype;
                    source = Object.create(output, {constructor: {value: sequen}});
                    sierra = function(argFoo, argBar) {
                        entity = argFoo;
                        var _closure5_slot0 = entity;
                        entity = global;
                        report = entity.setTimeout;
                        entity = undefined;
                        tangon = argBar;
                        zuuluu = 15000;
                        zuuluu = report.bind(entity)(tangon, zuuluu);
                        var _closure5_slot1 = zuuluu;
                        tangon = _closure1_slot10;
                        zuuluu = tangon.addConditionalChangeListener;
                        michal = function() {
                            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                                report = _closure1_slot10;
                                tangon = report.getGuild;
                                zuuluu = _closure4_slot0;
                                zuuluu = zuuluu.invite;
                                zuuluu = zuuluu.expectedGuildId;
                                tangon = tangon.bind(report)(zuuluu);
                                zuuluu = null;
                                if(!(zuuluu == tangon)) { _fun00014_ip = 46; continue _fun00013 }
 42:
                                zuuluu = undefined;
                                return zuuluu;
 46:
                                michal = _closure4_slot1;
                                if(michal) { _fun00014_ip = 70; continue _fun00013 }
 53:
                                zuuluu = _closure1_slot17;
                                michal = undefined;
                                entity = 'Invited guild available in the store';
                                entity = zuuluu.bind(michal)(entity);
 70:
                                entity = global;
                                tangon = entity.clearTimeout;
                                zuuluu = _closure5_slot1;
                                michal = undefined;
                                zuuluu = tangon.bind(michal)(zuuluu);
                                entity = _closure5_slot0;
                                entity = entity.bind(michal)();
                                entity = false;
                                return entity;
                            }
                        };
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    limora = source;
                    output = new limora[sequen](sierra, status);
                    output = output instanceof Object ? output : source;
                    SaveGenerator(address=806);
 804:
                    return output;
 806:
                    ResumeGenerator(result_out_reg=16, return_bool_out_reg=20);
                    if(source) { _fun00010_ip = 1212; continue _fun00009 }
 815:
                    source = update;
                    source = source.channelId;
                    if(!(ctrled != source)) { _fun00010_ip = 965; continue _fun00009 }
 830:
                    config = _closure1_slot9;
                    sequen = config.getChannel;
                    source = update;
                    source = source.channelId;
                    source = sequen.bind(config)(source);
                    if(!(ctrled != source)) { _fun00010_ip = 1122; continue _fun00009 }
 859:
                    source = report;
                    if(source) { _fun00010_ip = 880; continue _fun00009 }
 865:
                    ctrled = _closure1_slot17;
                    source = 'Switching to desired channel';
                    source = ctrled.bind(tangon)(source);
 880:
                    ctrled = _closure1_slot0;
                    sequen = _closure1_slot2;
                    source = 17;
                    source = sequen[source];
                    sequen = ctrled.bind(tangon)(source);
                    ctrled = sequen.transitionToChannel;
                    source = update;
                    source = source.channelId;
                    source = ctrled.bind(sequen)(source);
                    sequen = result.Promise;
                    source = sequen.prototype;
                    ctrled = Object.create(source, {constructor: {value: sequen}});
                    sierra = function(argFoo) {
                        entity = global;
                        tangon = entity.setTimeout;
                        zuuluu = undefined;
                        michal = argFoo;
                        entity = 1000;
                        entity = tangon.bind(zuuluu)(michal, entity);
                        return entity;
                    };
                    limora = ctrled;
                    source = new limora[sequen](sierra, status);
                    source = source instanceof Object ? source : ctrled;
                    SaveGenerator(address=956);
 954:
                    return source;
 956:
                    ResumeGenerator(result_out_reg=20, return_bool_out_reg=21);
                    if(ctrled) { _fun00010_ip = 1119; continue _fun00009 }
 965:
                    ctrled = report;
                    if(ctrled) { _fun00010_ip = 986; continue _fun00009 }
 971:
                    sequen = _closure1_slot17;
                    ctrled = 'Writing caches';
                    ctrled = sequen.bind(tangon)(ctrled);
 986:
                    sequen = _closure1_slot0;
                    config = _closure1_slot2;
                    ctrled = 18;
                    ctrled = config[ctrled];
                    sequen = sequen.bind(tangon)(ctrled);
                    ctrled = sequen.writeCaches;
                    ctrled = ctrled.bind(sequen)();
                    SaveGenerator(address=1020);
 1018:
                    return ctrled;
 1020:
                    ResumeGenerator(result_out_reg=21, return_bool_out_reg=23);
                    if(sequen) { _fun00010_ip = 1116; continue _fun00009 }
 1026:
                    config = result.Promise;
                    sequen = config.prototype;
                    sequen = Object.create(sequen, {constructor: {value: config}});
                    sierra = function(argFoo) {
                        entity = global;
                        tangon = entity.setTimeout;
                        zuuluu = undefined;
                        michal = argFoo;
                        entity = 1000;
                        entity = tangon.bind(zuuluu)(michal, entity);
                        return entity;
                    };
                    limora = sequen;
                    vacuum = new limora[config](sierra, status);
                    vacuum = vacuum instanceof Object ? vacuum : sequen;
                    SaveGenerator(address=1063);
 1061:
                    return vacuum;
 1063:
                    ResumeGenerator(result_out_reg=22, return_bool_out_reg=23);
                    if(sequen) { _fun00010_ip = 1113; continue _fun00009 }
 1069:
                    sequen = report;
                    if(sequen) { _fun00010_ip = 1110; continue _fun00009 }
 1075:
                    config = _closure1_slot17;
                    sequen = 'Sending reply';
                    sequen = config.bind(tangon)(sequen);
                    record = _closure1_slot16;
                    config = 'success';
                    sequen = 'Setup Complete';
                    sequen = record.bind(tangon)(config, sequen);
 1110:
                    return tangon;
 1113:
                    return vacuum;
 1116:
                    return ctrled;
 1119:
                    return source;
 1122:
                    source = result.Error;
                    vacuum = update.channelId;
                    result = result.HermesInternal;
                    ctrled = result.concat;
                    update = 'Unable to switch to channel ';
                    result = ' because it does not exist on the client';
                    sierra = ctrled.bind(update)(vacuum, result);
                    update = source.prototype;
                    update = Object.create(update, {constructor: {value: source}});
                    limora = update;
                    result = new limora[source](sierra, status);
                    result = result instanceof Object ? result : update;
                    update = report;
                    if(update) { _fun00010_ip = 1210; continue _fun00009 }
 1188:
                    source = _closure1_slot16;
                    update = result.message;
                    echoed = 'error';
                    echoed = source.bind(tangon)(echoed, update);
                    return tangon;
 1210:
                    throw result;
 1212:
                    return output;
 1215:
                    return sizing;
 1218:
                    return kiloes;
 1221:
                    return romeon;
 1224: // try_start_1
                    romeon = offset.Error;
                    sierra = backup;
                    target = foxtra;
                    cntext = yankee;
                    offset = offset.HermesInternal;
                    backup = offset.concat;
                    limora = 'Unable to login ';
                    status = ', expected id ';
                    papara = ' after login but was ';
                    sierra = limora[backup](sierra, status, target, papara, cntext, record);
                    yankee = romeon.prototype;
                    yankee = Object.create(yankee, {constructor: {value: romeon}});
                    limora = yankee;
                    offset = new limora[romeon](sierra, status);
                    offset = offset instanceof Object ? offset : yankee;
                    throw offset;
 1294: // try_end1
                    return verify;
 1297:
                    return option;
 1300:
                    return golfie;
 1303:
                    return oscard;
 1306: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=2);
                    if(report) { _fun00010_ip = 1339; continue _fun00009 }
 1311:
                    golfie = _closure1_slot16;
                    report = zuuluu;
                    oscard = report.message;
                    report = 'error';
                    report = golfie.bind(tangon)(report, oscard);
                    return tangon;
 1339:
                    throw zuuluu;
 1341:
                    return michal;
 1344:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot20 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = function() { // Original name: apiLogin
        entity = undefined;
        tangon = _closure1_slot22;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function() { // Original name: _apiLogin
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz, argCor) {
            entity = function* (argFoo, argBar, argBaz, argCor) { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    output = argFoo;
                    michal = argBaz;
                    sizing = argCor;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00016_ip = 547; continue _fun00015 }
 21:
                    var _closure4_slot0 = output;
                    zuuluu = argBar;
                    var _closure4_slot1 = zuuluu;
                    tangon = _closure1_slot8;
                    zuuluu = tangon.getId;
                    zuuluu = zuuluu.bind(tangon)();
                    if(!(zuuluu === sizing)) { _fun00016_ip = 83; continue _fun00015 }
 53:
                    tangon = null;
                    if(!(tangon == michal)) { _fun00016_ip = 544; continue _fun00015 }
 62:
                    report = _closure1_slot8;
                    zuuluu = report.getToken;
                    zuuluu = zuuluu.bind(report)();
                    if(!(tangon == zuuluu)) { _fun00016_ip = 541; continue _fun00015 }
 83:
                    report = _closure1_slot8;
                    tangon = report.getId;
                    tangon = tangon.bind(report)();
                    report = null;
                    if(!(report != tangon)) { _fun00016_ip = 148; continue _fun00015 }
 103:
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 15;
                    oscard = oscard[tangon];
                    tangon = undefined;
                    oscard = golfie.bind(tangon)(oscard);
                    tangon = oscard.logout;
                    tangon = tangon.bind(oscard)();
                    SaveGenerator(address=139);
 137:
                    return tangon;
 139:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscard) { _fun00016_ip = 538; continue _fun00015 }
 148:
                    if(!(report != michal)) { _fun00016_ip = 338; continue _fun00015 }
 155:
                    golfie = global;
                    option = golfie.fetch;
                    oscard = {};
                    report = 'HEAD';
                    oscard['method'] = report;
                    report = {};
                    report['Authorization'] = michal;
                    oscard['headers'] = report;
                    offset = undefined;
                    report = 'https://discord.com/api/users/@me/settings-proto/2';
                    report = option.bind(offset)(report, oscard);
                    SaveGenerator(address=206);
 204:
                    return report;
 206:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(oscard) { _fun00016_ip = 535; continue _fun00015 }
 215:
                    oscard = report.ok;
                    if(!oscard) { _fun00016_ip = 338; continue _fun00015 }
 224:
                    option = _closure1_slot1;
                    romeon = _closure1_slot2;
                    oscard = 15;
                    oscard = romeon[oscard];
                    offset = option.bind(offset)(oscard);
                    option = offset.loginToken;
                    oscard = false;
                    oscard = option.bind(offset)(michal, oscard);
                    SaveGenerator(address=262);
 260:
                    return oscard;
 262:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(option) { _fun00016_ip = 532; continue _fun00015 }
 271:
                    offset = golfie.Promise;
                    golfie = offset.prototype;
                    option = Object.create(golfie, {constructor: {value: offset}});
                    ctrled = function(argFoo) {
                        zuuluu = _closure1_slot7;
                        michal = undefined;
                        entity = argFoo;
                        entity = zuuluu.bind(michal)(entity);
                        return entity;
                    };
                    vacuum = option;
                    golfie = new vacuum[offset](ctrled, source);
                    golfie = golfie instanceof Object ? golfie : option;
                    SaveGenerator(address=308);
 306:
                    return golfie;
 308:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(option) { _fun00016_ip = 529; continue _fun00015 }
 317:
                    offset = _closure1_slot8;
                    option = offset.getId;
                    option = option.bind(offset)();
                    if(!(option !== sizing)) { _fun00016_ip = 526; continue _fun00015 }
 338:
                    offset = global;
                    foxtra = offset.Promise;
                    option = foxtra.prototype;
                    romeon = Object.create(option, {constructor: {value: foxtra}});
                    ctrled = function(argFoo, argBar) {
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            entity = argFoo;
                            var _closure5_slot0 = entity;
                            entity = argBar;
                            var _closure5_slot1 = entity;
                            oscard = function(argFoo) { // Original name: _loop
                                report = argFoo;
                                var _closure6_slot0 = report;
                                tangon = _closure1_slot23;
                                oscard = _closure1_slot1;
                                zuuluu = _closure1_slot2;
                                entity = 11;
                                zuuluu = zuuluu[entity];
                                entity = undefined;
                                zuuluu = oscard.bind(entity)(zuuluu);
                                michal = function() {
                                    zuuluu = _closure5_slot1;
                                    entity = global;
                                    tangon = entity.Error;
                                    romeon = _closure4_slot0;
                                    offset = _closure6_slot0;
                                    entity = entity.HermesInternal;
                                    oscard = entity.concat;
                                    foxtra = 'Unable to login ';
                                    yankee = ". Login failed with action '";
                                    verify = "'";
                                    romeon = foxtra[oscard](romeon, yankee, offset, verify, option);
                                    michal = tangon.prototype;
                                    michal = Object.create(michal, {constructor: {value: tangon}});
                                    foxtra = michal;
                                    entity = new foxtra[tangon](romeon, yankee);
                                    michal = entity instanceof Object ? entity : michal;
                                    entity = undefined;
                                    michal = zuuluu.bind(entity)(michal);
                                    return entity;
                                };
                                michal = tangon.bind(entity)(zuuluu, report, michal);
                                return entity;
                            };
                            report = ['LOGIN_FAILURE', 'PASSWORDLESS_FAILURE', 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION', 'LOGIN_ACCOUNT_DISABLED', 'LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED'];
                            entity = report.length;
                            tangon = 0;
                            zuuluu = tangon < entity;
                            entity = undefined;
                            if(!zuuluu) { _fun00018_ip = 70; continue _fun00017 }
 49:
                            zuuluu = report[tangon];
                            zuuluu = oscard.bind(entity)(zuuluu);
                            tangon = tangon + 1;
                            zuuluu = report.length;
                            if(tangon < zuuluu) { _fun00018_ip = 49; continue _fun00017 }
 70:
                            golfie = _closure1_slot23;
                            zuuluu = _closure1_slot1;
                            tangon = _closure1_slot2;
                            report = 11;
                            report = tangon[report];
                            oscard = zuuluu.bind(entity)(report);
                            report = 'LOGIN_SUCCESS';
                            michal = function(argFoo) {
                                zuuluu = _closure5_slot0;
                                entity = argFoo;
                                michal = entity.token;
                                entity = undefined;
                                entity = zuuluu.bind(entity)(michal);
                                return entity;
                            };
                            michal = golfie.bind(entity)(oscard, report, michal);
                            michal = 15;
                            michal = tangon[michal];
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.login;
                            michal = {};
                            oscard = _closure4_slot0;
                            michal['login'] = oscard;
                            report = _closure4_slot1;
                            michal['password'] = report;
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        }
                    };
                    vacuum = romeon;
                    option = new vacuum[foxtra](ctrled, source);
                    option = option instanceof Object ? option : romeon;
                    SaveGenerator(address=377);
 375:
                    return option;
 377:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=11);
                    if(romeon) { _fun00016_ip = 523; continue _fun00015 }
 386:
                    foxtra = offset.Promise;
                    romeon = foxtra.prototype;
                    romeon = Object.create(romeon, {constructor: {value: foxtra}});
                    ctrled = function(argFoo) {
                        zuuluu = _closure1_slot7;
                        michal = undefined;
                        entity = argFoo;
                        entity = zuuluu.bind(michal)(entity);
                        return entity;
                    };
                    vacuum = romeon;
                    verify = new vacuum[foxtra](ctrled, source);
                    verify = verify instanceof Object ? verify : romeon;
                    SaveGenerator(address=423);
 421:
                    return verify;
 423:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=11);
                    if(romeon) { _fun00016_ip = 520; continue _fun00015 }
 429:
                    romeon = _closure1_slot8;
                    yankee = romeon.getId;
                    kiloes = yankee.bind(romeon)();
                    if(!(kiloes === sizing)) { _fun00016_ip = 450; continue _fun00015 }
 447:
                    return option;
 450:
                    romeon = offset.Error;
                    offset = offset.HermesInternal;
                    backup = offset.concat;
                    vacuum = 'Unable to login ';
                    source = ', expected id ';
                    echoed = ' after login but was ';
                    ctrled = output;
                    update = sizing;
                    result = kiloes;
                    ctrled = vacuum[backup](ctrled, source, update, echoed, result, output);
                    yankee = romeon.prototype;
                    yankee = Object.create(yankee, {constructor: {value: romeon}});
                    vacuum = yankee;
                    offset = new vacuum[romeon](ctrled, source);
                    offset = offset instanceof Object ? offset : yankee;
                    throw offset;
 520:
                    return verify;
 523:
                    return option;
 526:
                    return michal;
 529:
                    return golfie;
 532:
                    return oscard;
 535:
                    return report;
 538:
                    return tangon;
 541:
                    return zuuluu;
 544:
                    return michal;
 547:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot22 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: subscribeOnce
        tangon = argFoo;
        zuuluu = argBar;
        var _closure2_slot0 = tangon;
        var _closure2_slot1 = zuuluu;
        entity = argBaz;
        var _closure2_slot2 = entity;
        michal = tangon.subscribe;
        entity = function(argFoo) { // Original name: handler
            report = _closure2_slot0;
            tangon = report.unsubscribe;
            zuuluu = _closure2_slot1;
            michal = _closure2_slot3;
            michal = tangon.bind(report)(zuuluu, michal);
            zuuluu = _closure2_slot2;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        var _closure2_slot3 = entity;
        entity = michal.bind(tangon)(zuuluu, entity);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = 0;
    report = tangon[entity];
    entity = undefined;
    golfie = option.bind(entity)(report);
    var _closure1_slot3 = golfie;
    report = 1;
    report = tangon[report];
    report = zuuluu.bind(entity)(report);
    report = report.NativeModules;
    var _closure1_slot4 = report;
    report = 2;
    report = tangon[report];
    report = zuuluu.bind(entity)(report);
    report = report.applicationReady;
    var _closure1_slot5 = report;
    report = 3;
    report = tangon[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = tangon[report];
    report = zuuluu.bind(entity)(report);
    report = report.addPostConnectionCallback;
    var _closure1_slot7 = report;
    report = 5;
    report = tangon[report];
    report = option.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 6;
    report = tangon[report];
    report = option.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 7;
    report = tangon[report];
    report = option.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 8;
    report = tangon[report];
    verify = option.bind(entity)(report);
    report = verify.prototype;
    option = Object.create(report, {constructor: {value: verify}});
    offset = 'TTITestAction';
    yankee = option;
    report = new yankee[verify](offset, verify);
    report = report instanceof Object ? report : option;
    var _closure1_slot12 = report;
    report = {};
    report['setup-test'] = oscard;
    oscard = function() { // Original name: ping
        entity = _closure1_slot4;
        zuuluu = entity.TTIManager;
        michal = zuuluu.logToDevice;
        entity = global;
        report = entity.JSON;
        tangon = report.stringify;
        entity = {};
        oscard = 'pong';
        entity['type'] = oscard;
        entity = tangon.bind(report)(entity);
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    report['ping'] = oscard;
    oscard = function() { // Original name: reset-component-profiler
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 9;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.resetComponentProfiler;
        zuuluu = zuuluu.bind(tangon)();
        tangon = _closure1_slot16;
        zuuluu = 'success';
        michal = 'reset-component-profiler';
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    report['reset-component-profiler'] = oscard;
    oscard = function() { // Original name: pause-component-profiler
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 9;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.pauseComponentProfiler;
        zuuluu = zuuluu.bind(tangon)();
        tangon = _closure1_slot16;
        zuuluu = 'success';
        michal = 'pause-component-profiler';
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    report['pause-component-profiler'] = oscard;
    oscard = function() { // Original name: resume-component-profiler
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 9;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.resumeComponentProfiler;
        zuuluu = zuuluu.bind(tangon)();
        tangon = _closure1_slot16;
        zuuluu = 'success';
        michal = 'resume-component-profiler';
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    report['resume-component-profiler'] = oscard;
    oscard = function() { // Original name: dump-component-profiler-stats
        report = _closure1_slot16;
        tangon = {};
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 9;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.dumpStats;
        michal = michal.bind(zuuluu)();
        tangon['stats'] = michal;
        zuuluu = 'success';
        michal = 'dump-component-profiler-stats';
        michal = report.bind(entity)(zuuluu, michal, tangon);
        return entity;
    };
    report['dump-component-profiler-stats'] = oscard;
    oscard = function() { // Original name: dump-jank-stats
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            report = _closure1_slot16;
            tangon = {};
            oscard = _closure1_slot1;
            entity = _closure1_slot2;
            golfie = 10;
            michal = entity[golfie];
            entity = undefined;
            oscard = oscard.bind(entity)(michal);
            michal = null;
            oscard = michal == oscard;
            michal = undefined;
            if(oscard) { _fun00020_ip = 69; continue _fun00019 }
 42:
            oscard = _closure1_slot1;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            oscard = oscard.bind(entity)(zuuluu);
            zuuluu = oscard.requestReport;
            michal = zuuluu.bind(oscard)();
 69:
            tangon['report'] = michal;
            zuuluu = 'success';
            michal = 'dump-jank-stats';
            michal = report.bind(entity)(zuuluu, michal, tangon);
            return entity;
        }
    };
    report['dump-jank-stats'] = oscard;
    oscard = function(argFoo) { // Original name: set-jank-multiplier
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            tangon = _closure1_slot1;
            entity = _closure1_slot2;
            report = 10;
            zuuluu = entity[report];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00022_ip = 70; continue _fun00021 }
 31:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[report];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.setJankHeuristicMultiplier;
            zuuluu = argFoo;
            zuuluu = zuuluu.multiplier;
            zuuluu = tangon.bind(report)(zuuluu);
 70:
            tangon = _closure1_slot16;
            zuuluu = 'success';
            michal = 'set-jank-multiplier';
            michal = tangon.bind(entity)(zuuluu, michal);
            return entity;
        }
    };
    report['set-jank-multiplier'] = oscard;
    oscard = function() { // Original name: start-jank-stats
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            tangon = _closure1_slot1;
            entity = _closure1_slot2;
            report = 10;
            zuuluu = entity[report];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00024_ip = 58; continue _fun00023 }
 31:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[report];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.startTracking;
            zuuluu = zuuluu.bind(tangon)();
 58:
            tangon = _closure1_slot16;
            zuuluu = 'success';
            michal = 'start-jank-stats';
            michal = tangon.bind(entity)(zuuluu, michal);
            return entity;
        }
    };
    report['start-jank-stats'] = oscard;
    oscard = function(argFoo) { // Original name: flux-dispatch
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 11;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.dispatch;
        zuuluu = argFoo;
        zuuluu = zuuluu.action;
        zuuluu = tangon.bind(report)(zuuluu);
        tangon = _closure1_slot16;
        zuuluu = 'success';
        michal = 'flux-dispatch';
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    report['flux-dispatch'] = oscard;
    oscard = function() { // Original name: get-resource-usage
        report = _closure1_slot16;
        tangon = {};
        zuuluu = _closure1_slot1;
        oscard = _closure1_slot2;
        michal = 12;
        golfie = oscard[michal];
        entity = undefined;
        option = zuuluu.bind(entity)(golfie);
        golfie = option.getCumulativeCPUUsage;
        golfie = golfie.bind(option)();
        tangon['cumulativeCPU'] = golfie;
        michal = oscard[michal];
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.getCurrentMemoryUsageKB;
        michal = michal.bind(zuuluu)();
        tangon['currentMemoryUsage'] = michal;
        zuuluu = 'success';
        michal = 'get-resource-usage';
        michal = report.bind(entity)(zuuluu, michal, tangon);
        return entity;
    };
    report['get-resource-usage'] = oscard;
    oscard = function* (argFoo) {
        entity = function* (argFoo) { // Original name: ?anon_0_
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                StartGenerator();
                oscard = argFoo;
                ResumeGenerator(result_out_reg=0, return_bool_out_reg=6);
                if(golfie) { _fun00026_ip = 1161; continue _fun00025 }
 13:
                golfie = undefined;
                michal = undefined;
                sizing = undefined;
                output = undefined;
                option = undefined;
                verify = undefined;
                zuuluu = undefined;
                report = undefined;
                romeon = undefined;
                yankee = undefined;
                tangon = undefined;
                michal = oscard.reply;
                sizing = oscard.source;
                kiloes = oscard.args;
                offset = {};
                foxtra = {};
                result = _closure1_slot0;
                echoed = _closure1_slot2;
                backup = 13;
                backup = echoed[backup];
                backup = result.bind(golfie)(backup);
                backup = backup.getConstants;
                foxtra['getConstants'] = backup;
                offset['ClientInfoUtils'] = foxtra;
                foxtra = {};
                backup = 9;
                update = echoed[backup];
                update = result.bind(golfie)(update);
                update = update.resetComponentProfiler;
                foxtra['resetComponentProfiler'] = update;
                update = echoed[backup];
                update = result.bind(golfie)(update);
                update = update.resumeComponentProfiler;
                foxtra['resumeComponentProfiler'] = update;
                update = echoed[backup];
                update = result.bind(golfie)(update);
                update = update.pauseComponentProfiler;
                foxtra['pauseComponentProfiler'] = update;
                backup = echoed[backup];
                backup = result.bind(golfie)(backup);
                backup = backup.dumpStats;
                foxtra['dumpStats'] = backup;
                offset['ComponentProfiler'] = foxtra;
                backup = _closure1_slot1;
                foxtra = 11;
                foxtra = echoed[foxtra];
                foxtra = backup.bind(golfie)(foxtra);
                offset['Dispatcher'] = foxtra;
                foxtra = _closure1_slot6;
                offset['ExperimentStore'] = foxtra;
                foxtra = 10;
                foxtra = echoed[foxtra];
                foxtra = backup.bind(golfie)(foxtra);
                offset['NativeJankStats'] = foxtra;
                foxtra = 12;
                foxtra = echoed[foxtra];
                foxtra = backup.bind(golfie)(foxtra);
                offset['ProcessUtils'] = foxtra;
                foxtra = {};
                backup = 14;
                update = echoed[backup];
                update = result.bind(golfie)(update);
                update = update.startRecordingAnalyticsEvents;
                foxtra['startRecordingAnalyticsEvents'] = update;
                update = echoed[backup];
                update = result.bind(golfie)(update);
                update = update.stopRecordingAnalyticsEvents;
                foxtra['stopRecordingAnalyticsEvents'] = update;
                update = echoed[backup];
                update = result.bind(golfie)(update);
                update = update.getAnalyticsEventsRecording;
                foxtra['getAnalyticsEventsRecording'] = update;
                backup = echoed[backup];
                backup = result.bind(golfie)(backup);
                backup = backup.clearAnalyticsEventsRecording;
                foxtra['clearAnalyticsEventsRecording'] = backup;
                offset['AnalyticsUtils'] = foxtra;
                foxtra = {};
                backup = _closure1_slot21;
                foxtra['apiLogin'] = backup;
                backup = _closure1_slot19;
                foxtra['setupTTITest'] = backup;
                offset['TTITestAction'] = foxtra;
                output = offset;
                foxtra = _closure1_slot3;
                offset = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00028_ip = 12; continue _fun00027 }
 7:
                            michal = undefined;
                            return michal;
 12:
                            return entity;
                        }
                    };
                    return entity;
                };
                offset = foxtra.bind(golfie)(offset);
                option = offset.constructor;
                verify = {};
                offset = null;
                if(!(offset == kiloes)) { _fun00026_ip = 412; continue _fun00025 }
 410:
                kiloes = {};
 412:
                offset = global;
                backup = offset.Object;
                foxtra = backup.keys;
                zuuluu = foxtra.bind(backup)(output);
                backup = offset.Object;
                foxtra = backup.values;
                report = foxtra.bind(backup)(output);
                backup = offset.Object;
                foxtra = backup.keys;
                romeon = foxtra.bind(backup)(kiloes);
                backup = offset.Object;
                foxtra = backup.values;
                yankee = foxtra.bind(backup)(kiloes);
 478: // try_start_0 // try_start_1
                backup = zuuluu;
                zuuluu = new Array(2);
                vacuum = zuuluu;
                ctrled = backup;
                source = 0;
                output = arraySpread(vacuum, ctrled, source);
                foxtra = 'imports';
                zuuluu[output] = foxtra;
                foxtra = 1;
                source = output + foxtra;
                ctrled = romeon;
                vacuum = zuuluu;
                romeon = arraySpread(vacuum, ctrled, source);
                output = offset.String;
                sizing = output.bind(golfie)(sizing);
                zuuluu[romeon] = sizing;
                romeon = romeon + foxtra;
                vacuum = option;
                ctrled = zuuluu;
                source = undefined;
                option = apply(vacuum, ctrled, source);
                zuuluu = verify;
                ctrled = report;
                report = new Array(1);
                vacuum = report;
                source = 0;
                romeon = arraySpread(vacuum, ctrled, source);
                report[romeon] = backup;
                source = romeon + foxtra;
                ctrled = yankee;
                vacuum = report;
                yankee = arraySpread(vacuum, ctrled, source);
                vacuum = option;
                ctrled = report;
                source = undefined;
                report = apply(vacuum, ctrled, source);
                SaveGenerator(address=609);
 607:
                return report;
 609:
                ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                if(option) { _fun00026_ip = 626; continue _fun00025 }
 615:
                zuuluu['result'] = report;
 621: // try_end0
                _fun00026_ip = 834; continue _fun00025;
 626: // try_end1
                zuuluu = michal;
                option = 'string';
                zuuluu = typeof zuuluu;
                if(!(option === zuuluu)) { _fun00026_ip = 786; continue _fun00025 }
 643:
                yankee = offset.fetch;
                option = michal;
                zuuluu = {};
                romeon = 'PUT';
                zuuluu['method'] = romeon;
                backup = offset.JSON;
                foxtra = backup.stringify;
                romeon = verify;
                romeon = foxtra.bind(backup)(romeon);
                zuuluu['body'] = romeon;
                romeon = {};
                foxtra = 'application/json';
                romeon['Content-Type'] = foxtra;
                zuuluu['headers'] = romeon;
                zuuluu = yankee.bind(golfie)(option, zuuluu);
                SaveGenerator(address=715);
 713:
                return zuuluu;
 715:
                ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                if(option) { _fun00026_ip = 789; continue _fun00025 }
 721:
                tangon = zuuluu;
                option = zuuluu.ok;
                romeon = _closure1_slot16;
                if(option) { _fun00026_ip = 770; continue _fun00025 }
 737:
                foxtra = {};
                option = tangon;
                option = option.status;
                foxtra['status'] = option;
                yankee = 'error';
                option = 'Failed to send backchannel reply';
                option = romeon.bind(golfie)(yankee, option, foxtra);
                _fun00026_ip = 786; continue _fun00025;
 770:
                yankee = 'success';
                option = 'Backchannel reply sent';
                option = romeon.bind(golfie)(yankee, option);
 786:
                return report;
 789:
                return zuuluu;
 792: // try_start_2 // catch_target0
                CatchBlockStart(arg_register=10);
                report = verify;
                zuuluu = {};
                option = _closure1_slot18;
                option = option.bind(golfie)(yankee);
                zuuluu['details'] = option;
                option = offset.String;
                option = option.bind(golfie)(yankee);
                zuuluu['string'] = option;
                report['error'] = zuuluu;
 834: // try_end2
                zuuluu = michal;
                report = 'string';
                zuuluu = typeof zuuluu;
                if(!(report === zuuluu)) { _fun00026_ip = 994; continue _fun00025 }
 851:
                option = offset.fetch;
                report = michal;
                zuuluu = {};
                yankee = 'PUT';
                zuuluu['method'] = yankee;
                foxtra = offset.JSON;
                romeon = foxtra.stringify;
                yankee = verify;
                yankee = romeon.bind(foxtra)(yankee);
                zuuluu['body'] = yankee;
                yankee = {};
                romeon = 'application/json';
                yankee['Content-Type'] = romeon;
                zuuluu['headers'] = yankee;
                zuuluu = option.bind(golfie)(report, zuuluu);
                SaveGenerator(address=923);
 921:
                return zuuluu;
 923:
                ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                if(report) { _fun00026_ip = 997; continue _fun00025 }
 929:
                tangon = zuuluu;
                report = zuuluu.ok;
                yankee = _closure1_slot16;
                if(report) { _fun00026_ip = 978; continue _fun00025 }
 945:
                romeon = {};
                report = tangon;
                report = report.status;
                romeon['status'] = report;
                option = 'error';
                report = 'Failed to send backchannel reply';
                report = yankee.bind(golfie)(option, report, romeon);
                _fun00026_ip = 994; continue _fun00025;
 978:
                option = 'success';
                report = 'Backchannel reply sent';
                report = yankee.bind(golfie)(option, report);
 994:
                return golfie;
 997:
                return zuuluu;
 1000: // catch_target1 // catch_target2
                CatchBlockStart(arg_register=2);
                report = michal;
                option = 'string';
                report = typeof report;
                if(!(option === report)) { _fun00026_ip = 1156; continue _fun00025 }
 1019:
                option = offset.fetch;
                report = michal;
                michal = {};
                yankee = 'PUT';
                michal['method'] = yankee;
                yankee = offset.JSON;
                offset = yankee.stringify;
                verify = offset.bind(yankee)(verify);
                michal['body'] = verify;
                verify = {};
                offset = 'application/json';
                verify['Content-Type'] = offset;
                michal['headers'] = verify;
                michal = option.bind(golfie)(report, michal);
                SaveGenerator(address=1088);
 1086:
                return michal;
 1088:
                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                if(report) { _fun00026_ip = 1158; continue _fun00025 }
 1094:
                tangon = michal;
                report = michal.ok;
                oscard = _closure1_slot16;
                if(report) { _fun00026_ip = 1140; continue _fun00025 }
 1110:
                option = {};
                tangon = tangon.status;
                option['status'] = tangon;
                report = 'error';
                tangon = 'Failed to send backchannel reply';
                tangon = oscard.bind(golfie)(report, tangon, option);
                _fun00026_ip = 1156; continue _fun00025;
 1140:
                report = 'success';
                tangon = 'Backchannel reply sent';
                tangon = oscard.bind(golfie)(report, tangon);
 1156:
                throw zuuluu;
 1158:
                return michal;
 1161:
                return entity;
            }
        };
        return entity;
    };
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot11 = oscard;
    oscard = function() {
        entity = undefined;
        tangon = _closure1_slot11;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    report['backchannel'] = oscard;
    var _closure1_slot13 = report;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = undefined;
        michal = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00030_ip = 244; continue _fun00029 }
 10:
                    zuuluu = global;
                    report = zuuluu.TextDecoder;
                    michal = report.prototype;
                    tangon = Object.create(michal, {constructor: {value: report}});
                    romeon = 'utf-8';
                    foxtra = tangon;
                    michal = new foxtra[report](romeon, yankee);
                    golfie = michal instanceof Object ? michal : tangon;
                    oscard = golfie.decode;
                    option = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 19;
                    report = report[michal];
                    michal = undefined;
                    verify = option.bind(michal)(report);
                    option = verify.base64decode;
                    report = argFoo;
                    report = report.actionData;
                    report = option.bind(verify)(report);
                    golfie = oscard.bind(golfie)(report);
                    oscard = zuuluu.JSON;
                    report = oscard.parse;
                    oscard = report.bind(oscard)(golfie);
                    option = _closure1_slot12;
                    golfie = option.log;
                    report = {};
                    romeon = report;
                    yankee = oscard;
                    verify = copyDataProperties(romeon, yankee);
                    offset = oscard.user;
                    verify = null;
                    offset = verify == offset;
                    verify = 'redacted';
                    if(!offset) { _fun00030_ip = 163; continue _fun00029 }
 161:
                    verify = undefined;
 163:
                    michal = 'user';
                    report[michal] = verify;
                    michal = 'Received TTI Test Action';
                    michal = golfie.bind(option)(michal, report);
                    michal = _closure1_slot5;
                    michal = michal.promise;
                    SaveGenerator(address=198);
 196:
                    return michal;
 198:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00030_ip = 241; continue _fun00029 }
 204:
                    report = _closure1_slot13;
                    tangon = oscard.type;
                    tangon = report[tangon];
                    tangon = tangon.bind(report)(oscard);
                    tangon = zuuluu.Promise;
                    zuuluu = tangon.resolve;
                    zuuluu = zuuluu.bind(tangon)();
                    return zuuluu;
 241:
                    return michal;
 244:
                    return entity;
                }
            };
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        entity = function(argFoo) {
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        return entity;
    };
    report = michal.bind(entity)();
    michal = argGra;
    michal['exports'] = report;
    michal = 20;
    michal = tangon[michal];
    tangon = zuuluu.bind(entity)(michal);
    zuuluu = tangon.fileFinishedImporting;
    michal = 'modules/headless_tasks/android/TTITestAction.tsx';
    michal = zuuluu.bind(tangon)(michal);
    return entity;
})();