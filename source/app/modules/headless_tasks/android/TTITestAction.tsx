// app/modules/headless_tasks/android/TTITestAction.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, _, argPlugh) {
    zulu = argBar;
    options = argBaz;
    tango = argPlugh;
    var _closure1_slot0 = zulu;
    var _closure1_slot1 = options;
    var _closure1_slot2 = tango;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot15;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot15;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: sendReply
        entity = _closure1_slot4;
        zulu = entity.TTIManager;
        mike = zulu.logToDevice;
        entity = global;
        report = entity.JSON;
        tango = report.stringify;
        entity = {};
        oscar = 'response';
        entity['type'] = oscar;
        oscar = argFoo;
        entity['status'] = oscar;
        oscar = argBar;
        entity['message'] = oscar;
        golf = argBaz;
        options = entity;
        oscar = copyDataProperties(options, golf);
        entity = tango.bind(report)(entity);
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: sendStatus
        oscar = argFoo;
        zulu = _closure1_slot12;
        mike = zulu.log;
        mike = mike.bind(zulu)(oscar);
        entity = _closure1_slot4;
        zulu = entity.TTIManager;
        mike = zulu.logToDevice;
        entity = global;
        report = entity.JSON;
        tango = report.stringify;
        entity = {};
        golf = 'status';
        entity['type'] = golf;
        entity['message'] = oscar;
        entity = tango.bind(report)(entity);
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: getErrorDetails
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            golf = null;
            if(!(golf != entity)) { _fun00008_ip = 211; continue _fun00007 }
 12:
            zulu = 'object';
            mike = typeof entity;
            if(!(zulu === mike)) { _fun00008_ip = 211; continue _fun00007 }
 26:
            report = global;
            mike = report.Set;
            zulu = mike.prototype;
            zulu = Object.create(zulu, {constructor: {value: mike}});
            backup = zulu;
            mike = new backup[mike](foxtrot);
            tango = mike instanceof Object ? mike : zulu;
            oscar = undefined;
            mike = entity;
            if(!(golf != mike)) { _fun00008_ip = 158; continue _fun00007 }
 66:
            verify = _closure1_slot14;
            offset = report.Object;
            options = offset.getOwnPropertyNames;
            options = options.bind(offset)(mike);
            yankee = verify.bind(oscar)(options);
            verify = yankee.bind(oscar)();
            options = verify.done;
            offset = mike;
            if(options) { _fun00008_ip = 137; continue _fun00007 }
 107:
            romeo = verify.value;
            options = tango.add;
            options = options.bind(tango)(romeo);
            romeo = yankee.bind(oscar)();
            options = romeo.done;
            verify = romeo;
            if(!options) { _fun00008_ip = 107; continue _fun00007 }
 137:
            verify = report.Object;
            options = verify.getPrototypeOf;
            mike = options.bind(verify)(offset);
            if(golf != mike) { _fun00008_ip = 66; continue _fun00007 }
 158:
            mike = {};
            zulu = _closure1_slot14;
            report = zulu.bind(oscar)(tango);
            tango = report.bind(oscar)();
            zulu = tango.done;
            if(zulu) { _fun00008_ip = 209; continue _fun00007 }
 181:
            golf = tango.value;
            zulu = entity[golf];
            mike[golf] = zulu;
            golf = report.bind(oscar)();
            zulu = golf.done;
            tango = golf;
            if(!zulu) { _fun00008_ip = 181; continue _fun00007 }
 209:
            return mike;
 211:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    oscar = function() { // Original name: setupTTITest
        entity = undefined;
        tango = _closure1_slot20;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot19 = oscar;
    entity = function() { // Original name: _setupTTITest
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    tango = argFoo;
                    mike = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=5);
                    if(oscar) { _fun00010_ip = 1344; continue _fun00009 }
 18:
                    update = tango;
                    var _closure4_slot0 = tango;
                    tango = undefined;
                    if(!(mike === tango)) { _fun00010_ip = 33; continue _fun00009 }
 31:
                    mike = false;
 33:
                    report = mike;
                    var _closure4_slot1 = mike;
                    backup = undefined;
                    var _closure4_slot2 = tango;
                    sizing = undefined;
                    foxtrot = undefined;
                    options = undefined;
                    yankee = undefined;
                    SaveGenerator(address=58);
 56:
                    return tango;
 58:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscar) { _fun00010_ip = 1341; continue _fun00009 }
 67:
                    oscar = update;
                    oscar = oscar.user;
                    control = null;
                    if(!(control != oscar)) { _fun00010_ip = 472; continue _fun00009 }
 84:
                    oscar = update;
                    golf = oscar.user;
                    golf = golf.email;
                    backup = golf;
                    _closure4_slot2 = golf;
                    golf = oscar.user;
                    sizing = golf.password;
                    oscar = oscar.user;
                    foxtrot = oscar.expectedId;
 129: // try_start_0
                    verify = _closure1_slot8;
                    golf = verify.getId;
                    golf = golf.bind(verify)();
                    golf = control != golf;
                    oscar = golf;
                    if(!golf) { _fun00010_ip = 177; continue _fun00009 }
 156:
                    verify = _closure1_slot8;
                    golf = verify.getId;
                    verify = golf.bind(verify)();
                    golf = foxtrot;
                    oscar = verify !== golf;
 177:
                    if(!oscar) { _fun00010_ip = 238; continue _fun00009 }
 180:
                    golf = _closure1_slot17;
                    oscar = 'Logging out old user';
                    oscar = golf.bind(tango)(oscar);
                    golf = _closure1_slot1;
                    verify = _closure1_slot2;
                    oscar = 15;
                    oscar = verify[oscar];
                    golf = golf.bind(tango)(oscar);
                    oscar = golf.logout;
                    oscar = oscar.bind(golf)();
                    SaveGenerator(address=229);
 227:
                    return oscar;
 229:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(golf) { _fun00010_ip = 1303; continue _fun00009 }
 238:
                    verify = _closure1_slot8;
                    golf = verify.getId;
                    verify = golf.bind(verify)();
                    golf = foxtrot;
                    if(!(verify !== golf)) { _fun00010_ip = 472; continue _fun00009 }
 262:
                    verify = _closure1_slot17;
                    golf = 'Logging in new user';
                    golf = verify.bind(tango)(golf);
                    offset = global;
                    kilo = offset.Promise;
                    golf = kilo.prototype;
                    verify = Object.create(golf, {constructor: {value: kilo}});
                    sierra = function(argFoo, argBar) {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            entity = argFoo;
                            var _closure5_slot0 = entity;
                            entity = argBar;
                            var _closure5_slot1 = entity;
                            tango = function(argFoo, argBar) { // Original name: subscribeOnce
                                report = argFoo;
                                var _closure6_slot0 = report;
                                entity = argBar;
                                var _closure6_slot1 = entity;
                                zulu = _closure1_slot1;
                                mike = _closure1_slot2;
                                entity = 11;
                                mike = mike[entity];
                                entity = undefined;
                                tango = zulu.bind(entity)(mike);
                                zulu = tango.subscribe;
                                mike = function() { // Original name: handler
                                    zulu = _closure6_slot1;
                                    report = _closure6_slot0;
                                    entity = undefined;
                                    zulu = zulu.bind(entity)(report);
                                    tango = _closure1_slot1;
                                    oscar = _closure1_slot2;
                                    zulu = 11;
                                    zulu = oscar[zulu];
                                    tango = tango.bind(entity)(zulu);
                                    zulu = tango.unsubscribe;
                                    mike = _closure6_slot2;
                                    mike = zulu.bind(tango)(report, mike);
                                    return entity;
                                };
                                var _closure6_slot2 = mike;
                                mike = zulu.bind(tango)(report, mike);
                                return entity;
                            };
                            oscar = ['LOGIN_MFA_STEP', 'LOGIN_SUSPENDED_USER', 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION', 'LOGIN_ACCOUNT_DISABLED', 'LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED', 'LOGIN_FAILURE'];
                            entity = oscar.length;
                            report = 0;
                            zulu = report < entity;
                            entity = undefined;
                            if(!zulu) { _fun00012_ip = 78; continue _fun00011 }
 49:
                            golf = oscar[report];
                            zulu = function(argFoo) {
                                zulu = _closure5_slot1;
                                entity = global;
                                tango = entity.Error;
                                romeo = _closure4_slot2;
                                entity = entity.HermesInternal;
                                golf = entity.concat;
                                foxtrot = 'Unable to login ';
                                yankee = ". Login failed with event '";
                                offset = argFoo;
                                verify = "'";
                                romeo = foxtrot[golf](romeo, yankee, offset, verify, options);
                                mike = tango.prototype;
                                mike = Object.create(mike, {constructor: {value: tango}});
                                foxtrot = mike;
                                entity = new foxtrot[tango](romeo, yankee);
                                mike = entity instanceof Object ? entity : mike;
                                entity = undefined;
                                mike = zulu.bind(entity)(mike);
                                return entity;
                            };
                            zulu = tango.bind(entity)(golf, zulu);
                            report = report + 1;
                            zulu = oscar.length;
                            if(report < zulu) { _fun00012_ip = 49; continue _fun00011 }
 78:
                            zulu = 'LOGIN_SUCCESS';
                            mike = function() {
                                mike = _closure5_slot0;
                                entity = undefined;
                                entity = mike.bind(entity)();
                                return entity;
                            };
                            mike = tango.bind(entity)(zulu, mike);
                            return entity;
                        }
                    };
                    lima = verify;
                    golf = new lima[kilo](sierra, status);
                    options = golf instanceof Object ? golf : verify;
                    verify = _closure1_slot1;
                    kilo = _closure1_slot2;
                    golf = 15;
                    golf = kilo[golf];
                    kilo = verify.bind(tango)(golf);
                    verify = kilo.login;
                    golf = {};
                    output = backup;
                    golf['login'] = output;
                    golf['password'] = sizing;
                    golf = verify.bind(kilo)(golf);
                    SaveGenerator(address=362);
 360:
                    return golf;
 362:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                    if(verify) { _fun00010_ip = 1300; continue _fun00009 }
 371:
                    SaveGenerator(address=375);
 373:
                    return options;
 375:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(verify) { _fun00010_ip = 1297; continue _fun00009 }
 384:
                    kilo = _closure1_slot17;
                    verify = 'Waiting for socket connection';
                    verify = kilo.bind(tango)(verify);
                    sizing = offset.Promise;
                    verify = sizing.prototype;
                    kilo = Object.create(verify, {constructor: {value: sizing}});
                    sierra = function(argFoo) {
                        zulu = _closure1_slot7;
                        mike = undefined;
                        entity = argFoo;
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    lima = kilo;
                    verify = new lima[sizing](sierra, status);
                    verify = verify instanceof Object ? verify : kilo;
                    SaveGenerator(address=436);
 434:
                    return verify;
 436:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=14);
                    if(kilo) { _fun00010_ip = 1294; continue _fun00009 }
 445:
                    kilo = _closure1_slot8;
                    romeo = kilo.getId;
                    kilo = romeo.bind(kilo)();
                    yankee = kilo;
                    romeo = foxtrot;
                    if(!(kilo === romeo)) { _fun00010_ip = 1224; continue _fun00009 }
 472: // try_end0
                    kilo = _closure1_slot17;
                    romeo = 'Waiting for socket connection';
                    romeo = kilo.bind(tango)(romeo);
                    result = global;
                    sizing = result.Promise;
                    romeo = sizing.prototype;
                    kilo = Object.create(romeo, {constructor: {value: sizing}});
                    sierra = function(argFoo) {
                        zulu = _closure1_slot7;
                        mike = undefined;
                        entity = argFoo;
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    lima = kilo;
                    romeo = new lima[sizing](sierra, status);
                    romeo = romeo instanceof Object ? romeo : kilo;
                    SaveGenerator(address=529);
 527:
                    return romeo;
 529:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=14);
                    if(kilo) { _fun00010_ip = 1221; continue _fun00009 }
 538:
                    output = result.Promise;
                    kilo = output.prototype;
                    sizing = Object.create(kilo, {constructor: {value: output}});
                    sierra = function(argFoo) {
                        entity = global;
                        tango = entity.setTimeout;
                        zulu = undefined;
                        mike = argFoo;
                        entity = 1000;
                        entity = tango.bind(zulu)(mike, entity);
                        return entity;
                    };
                    lima = sizing;
                    kilo = new lima[output](sierra, status);
                    kilo = kilo instanceof Object ? kilo : sizing;
                    SaveGenerator(address=575);
 573:
                    return kilo;
 575:
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=15);
                    if(sizing) { _fun00010_ip = 1218; continue _fun00009 }
 584:
                    sizing = update;
                    sizing = sizing.invite;
                    sizing = control != sizing;
                    if(!sizing) { _fun00010_ip = 633; continue _fun00009 }
 600:
                    sequence = _closure1_slot10;
                    source = sequence.getGuild;
                    output = update;
                    output = output.invite;
                    output = output.expectedGuildId;
                    output = source.bind(sequence)(output);
                    sizing = control == output;
 633:
                    if(!sizing) { _fun00010_ip = 815; continue _fun00009 }
 639:
                    sizing = report;
                    if(sizing) { _fun00010_ip = 660; continue _fun00009 }
 645:
                    output = _closure1_slot17;
                    sizing = 'Inviting to target guild';
                    sizing = output.bind(tango)(sizing);
 660:
                    output = _closure1_slot1;
                    source = _closure1_slot2;
                    sizing = 16;
                    sizing = source[sizing];
                    source = output.bind(tango)(sizing);
                    output = source.acceptInvite;
                    sizing = {};
                    sequence = update;
                    sequence = sequence.invite;
                    sequence = sequence.code;
                    sizing['inviteKey'] = sequence;
                    sequence = {};
                    config = 'tti_tests';
                    sequence['location'] = config;
                    sizing['context'] = sequence;
                    sequence = true;
                    sizing['skipOnboarding'] = sequence;
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
                    output = source.bind(tango)(output);
 769:
                    sequence = result.Promise;
                    output = sequence.prototype;
                    source = Object.create(output, {constructor: {value: sequence}});
                    sierra = function(argFoo, argBar) {
                        entity = argFoo;
                        var _closure5_slot0 = entity;
                        entity = global;
                        report = entity.setTimeout;
                        entity = undefined;
                        tango = argBar;
                        zulu = 15000;
                        zulu = report.bind(entity)(tango, zulu);
                        var _closure5_slot1 = zulu;
                        tango = _closure1_slot10;
                        zulu = tango.addConditionalChangeListener;
                        mike = function() {
                            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                                report = _closure1_slot10;
                                tango = report.getGuild;
                                zulu = _closure4_slot0;
                                zulu = zulu.invite;
                                zulu = zulu.expectedGuildId;
                                tango = tango.bind(report)(zulu);
                                zulu = null;
                                if(!(zulu == tango)) { _fun00014_ip = 46; continue _fun00013 }
 42:
                                zulu = undefined;
                                return zulu;
 46:
                                mike = _closure4_slot1;
                                if(mike) { _fun00014_ip = 70; continue _fun00013 }
 53:
                                zulu = _closure1_slot17;
                                mike = undefined;
                                entity = 'Invited guild available in the store';
                                entity = zulu.bind(mike)(entity);
 70:
                                entity = global;
                                tango = entity.clearTimeout;
                                zulu = _closure5_slot1;
                                mike = undefined;
                                zulu = tango.bind(mike)(zulu);
                                entity = _closure5_slot0;
                                entity = entity.bind(mike)();
                                entity = false;
                                return entity;
                            }
                        };
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    lima = source;
                    output = new lima[sequence](sierra, status);
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
                    if(!(control != source)) { _fun00010_ip = 965; continue _fun00009 }
 830:
                    config = _closure1_slot9;
                    sequence = config.getChannel;
                    source = update;
                    source = source.channelId;
                    source = sequence.bind(config)(source);
                    if(!(control != source)) { _fun00010_ip = 1122; continue _fun00009 }
 859:
                    source = report;
                    if(source) { _fun00010_ip = 880; continue _fun00009 }
 865:
                    control = _closure1_slot17;
                    source = 'Switching to desired channel';
                    source = control.bind(tango)(source);
 880:
                    control = _closure1_slot0;
                    sequence = _closure1_slot2;
                    source = 17;
                    source = sequence[source];
                    sequence = control.bind(tango)(source);
                    control = sequence.transitionToChannel;
                    source = update;
                    source = source.channelId;
                    source = control.bind(sequence)(source);
                    sequence = result.Promise;
                    source = sequence.prototype;
                    control = Object.create(source, {constructor: {value: sequence}});
                    sierra = function(argFoo) {
                        entity = global;
                        tango = entity.setTimeout;
                        zulu = undefined;
                        mike = argFoo;
                        entity = 1000;
                        entity = tango.bind(zulu)(mike, entity);
                        return entity;
                    };
                    lima = control;
                    source = new lima[sequence](sierra, status);
                    source = source instanceof Object ? source : control;
                    SaveGenerator(address=956);
 954:
                    return source;
 956:
                    ResumeGenerator(result_out_reg=20, return_bool_out_reg=21);
                    if(control) { _fun00010_ip = 1119; continue _fun00009 }
 965:
                    control = report;
                    if(control) { _fun00010_ip = 986; continue _fun00009 }
 971:
                    sequence = _closure1_slot17;
                    control = 'Writing caches';
                    control = sequence.bind(tango)(control);
 986:
                    sequence = _closure1_slot0;
                    config = _closure1_slot2;
                    control = 18;
                    control = config[control];
                    sequence = sequence.bind(tango)(control);
                    control = sequence.writeCaches;
                    control = control.bind(sequence)();
                    SaveGenerator(address=1020);
 1018:
                    return control;
 1020:
                    ResumeGenerator(result_out_reg=21, return_bool_out_reg=23);
                    if(sequence) { _fun00010_ip = 1116; continue _fun00009 }
 1026:
                    config = result.Promise;
                    sequence = config.prototype;
                    sequence = Object.create(sequence, {constructor: {value: config}});
                    sierra = function(argFoo) {
                        entity = global;
                        tango = entity.setTimeout;
                        zulu = undefined;
                        mike = argFoo;
                        entity = 1000;
                        entity = tango.bind(zulu)(mike, entity);
                        return entity;
                    };
                    lima = sequence;
                    vacuum = new lima[config](sierra, status);
                    vacuum = vacuum instanceof Object ? vacuum : sequence;
                    SaveGenerator(address=1063);
 1061:
                    return vacuum;
 1063:
                    ResumeGenerator(result_out_reg=22, return_bool_out_reg=23);
                    if(sequence) { _fun00010_ip = 1113; continue _fun00009 }
 1069:
                    sequence = report;
                    if(sequence) { _fun00010_ip = 1110; continue _fun00009 }
 1075:
                    config = _closure1_slot17;
                    sequence = 'Sending reply';
                    sequence = config.bind(tango)(sequence);
                    record = _closure1_slot16;
                    config = 'success';
                    sequence = 'Setup Complete';
                    sequence = record.bind(tango)(config, sequence);
 1110:
                    return tango;
 1113:
                    return vacuum;
 1116:
                    return control;
 1119:
                    return source;
 1122:
                    source = result.Error;
                    vacuum = update.channelId;
                    result = result.HermesInternal;
                    control = result.concat;
                    update = 'Unable to switch to channel ';
                    result = ' because it does not exist on the client';
                    sierra = control.bind(update)(vacuum, result);
                    update = source.prototype;
                    update = Object.create(update, {constructor: {value: source}});
                    lima = update;
                    result = new lima[source](sierra, status);
                    result = result instanceof Object ? result : update;
                    update = report;
                    if(update) { _fun00010_ip = 1210; continue _fun00009 }
 1188:
                    source = _closure1_slot16;
                    update = result.message;
                    echo = 'error';
                    echo = source.bind(tango)(echo, update);
                    return tango;
 1210:
                    throw result;
 1212:
                    return output;
 1215:
                    return sizing;
 1218:
                    return kilo;
 1221:
                    return romeo;
 1224: // try_start_1
                    romeo = offset.Error;
                    sierra = backup;
                    target = foxtrot;
                    context = yankee;
                    offset = offset.HermesInternal;
                    backup = offset.concat;
                    lima = 'Unable to login ';
                    status = ', expected id ';
                    papa = ' after login but was ';
                    sierra = lima[backup](sierra, status, target, papa, context, record);
                    yankee = romeo.prototype;
                    yankee = Object.create(yankee, {constructor: {value: romeo}});
                    lima = yankee;
                    offset = new lima[romeo](sierra, status);
                    offset = offset instanceof Object ? offset : yankee;
                    throw offset;
 1294: // try_end1
                    return verify;
 1297:
                    return options;
 1300:
                    return golf;
 1303:
                    return oscar;
 1306: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=2);
                    if(report) { _fun00010_ip = 1339; continue _fun00009 }
 1311:
                    golf = _closure1_slot16;
                    report = zulu;
                    oscar = report.message;
                    report = 'error';
                    report = golf.bind(tango)(report, oscar);
                    return tango;
 1339:
                    throw zulu;
 1341:
                    return mike;
 1344:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot20 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = function() { // Original name: apiLogin
        entity = undefined;
        tango = _closure1_slot22;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function() { // Original name: _apiLogin
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz, argCorge) {
            entity = function* (argFoo, argBar, argBaz, argCorge) { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    output = argFoo;
                    mike = argBaz;
                    sizing = argCorge;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00016_ip = 547; continue _fun00015 }
 21:
                    var _closure4_slot0 = output;
                    zulu = argBar;
                    var _closure4_slot1 = zulu;
                    tango = _closure1_slot8;
                    zulu = tango.getId;
                    zulu = zulu.bind(tango)();
                    if(!(zulu === sizing)) { _fun00016_ip = 83; continue _fun00015 }
 53:
                    tango = null;
                    if(!(tango == mike)) { _fun00016_ip = 544; continue _fun00015 }
 62:
                    report = _closure1_slot8;
                    zulu = report.getToken;
                    zulu = zulu.bind(report)();
                    if(!(tango == zulu)) { _fun00016_ip = 541; continue _fun00015 }
 83:
                    report = _closure1_slot8;
                    tango = report.getId;
                    tango = tango.bind(report)();
                    report = null;
                    if(!(report != tango)) { _fun00016_ip = 148; continue _fun00015 }
 103:
                    golf = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 15;
                    oscar = oscar[tango];
                    tango = undefined;
                    oscar = golf.bind(tango)(oscar);
                    tango = oscar.logout;
                    tango = tango.bind(oscar)();
                    SaveGenerator(address=139);
 137:
                    return tango;
 139:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscar) { _fun00016_ip = 538; continue _fun00015 }
 148:
                    if(!(report != mike)) { _fun00016_ip = 338; continue _fun00015 }
 155:
                    golf = global;
                    options = golf.fetch;
                    oscar = {};
                    report = 'HEAD';
                    oscar['method'] = report;
                    report = {};
                    report['Authorization'] = mike;
                    oscar['headers'] = report;
                    offset = undefined;
                    report = 'https://discord.com/api/users/@me/settings-proto/2';
                    report = options.bind(offset)(report, oscar);
                    SaveGenerator(address=206);
 204:
                    return report;
 206:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(oscar) { _fun00016_ip = 535; continue _fun00015 }
 215:
                    oscar = report.ok;
                    if(!oscar) { _fun00016_ip = 338; continue _fun00015 }
 224:
                    options = _closure1_slot1;
                    romeo = _closure1_slot2;
                    oscar = 15;
                    oscar = romeo[oscar];
                    offset = options.bind(offset)(oscar);
                    options = offset.loginToken;
                    oscar = false;
                    oscar = options.bind(offset)(mike, oscar);
                    SaveGenerator(address=262);
 260:
                    return oscar;
 262:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(options) { _fun00016_ip = 532; continue _fun00015 }
 271:
                    offset = golf.Promise;
                    golf = offset.prototype;
                    options = Object.create(golf, {constructor: {value: offset}});
                    control = function(argFoo) {
                        zulu = _closure1_slot7;
                        mike = undefined;
                        entity = argFoo;
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    vacuum = options;
                    golf = new vacuum[offset](control, source);
                    golf = golf instanceof Object ? golf : options;
                    SaveGenerator(address=308);
 306:
                    return golf;
 308:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(options) { _fun00016_ip = 529; continue _fun00015 }
 317:
                    offset = _closure1_slot8;
                    options = offset.getId;
                    options = options.bind(offset)();
                    if(!(options !== sizing)) { _fun00016_ip = 526; continue _fun00015 }
 338:
                    offset = global;
                    foxtrot = offset.Promise;
                    options = foxtrot.prototype;
                    romeo = Object.create(options, {constructor: {value: foxtrot}});
                    control = function(argFoo, argBar) {
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            entity = argFoo;
                            var _closure5_slot0 = entity;
                            entity = argBar;
                            var _closure5_slot1 = entity;
                            oscar = function(argFoo) { // Original name: _loop
                                report = argFoo;
                                var _closure6_slot0 = report;
                                tango = _closure1_slot23;
                                oscar = _closure1_slot1;
                                zulu = _closure1_slot2;
                                entity = 11;
                                zulu = zulu[entity];
                                entity = undefined;
                                zulu = oscar.bind(entity)(zulu);
                                mike = function() {
                                    zulu = _closure5_slot1;
                                    entity = global;
                                    tango = entity.Error;
                                    romeo = _closure4_slot0;
                                    offset = _closure6_slot0;
                                    entity = entity.HermesInternal;
                                    oscar = entity.concat;
                                    foxtrot = 'Unable to login ';
                                    yankee = ". Login failed with action '";
                                    verify = "'";
                                    romeo = foxtrot[oscar](romeo, yankee, offset, verify, options);
                                    mike = tango.prototype;
                                    mike = Object.create(mike, {constructor: {value: tango}});
                                    foxtrot = mike;
                                    entity = new foxtrot[tango](romeo, yankee);
                                    mike = entity instanceof Object ? entity : mike;
                                    entity = undefined;
                                    mike = zulu.bind(entity)(mike);
                                    return entity;
                                };
                                mike = tango.bind(entity)(zulu, report, mike);
                                return entity;
                            };
                            report = ['LOGIN_FAILURE', 'PASSWORDLESS_FAILURE', 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION', 'LOGIN_ACCOUNT_DISABLED', 'LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED'];
                            entity = report.length;
                            tango = 0;
                            zulu = tango < entity;
                            entity = undefined;
                            if(!zulu) { _fun00018_ip = 70; continue _fun00017 }
 49:
                            zulu = report[tango];
                            zulu = oscar.bind(entity)(zulu);
                            tango = tango + 1;
                            zulu = report.length;
                            if(tango < zulu) { _fun00018_ip = 49; continue _fun00017 }
 70:
                            golf = _closure1_slot23;
                            zulu = _closure1_slot1;
                            tango = _closure1_slot2;
                            report = 11;
                            report = tango[report];
                            oscar = zulu.bind(entity)(report);
                            report = 'LOGIN_SUCCESS';
                            mike = function(argFoo) {
                                zulu = _closure5_slot0;
                                entity = argFoo;
                                mike = entity.token;
                                entity = undefined;
                                entity = zulu.bind(entity)(mike);
                                return entity;
                            };
                            mike = golf.bind(entity)(oscar, report, mike);
                            mike = 15;
                            mike = tango[mike];
                            tango = zulu.bind(entity)(mike);
                            zulu = tango.login;
                            mike = {};
                            oscar = _closure4_slot0;
                            mike['login'] = oscar;
                            report = _closure4_slot1;
                            mike['password'] = report;
                            mike = zulu.bind(tango)(mike);
                            return entity;
                        }
                    };
                    vacuum = romeo;
                    options = new vacuum[foxtrot](control, source);
                    options = options instanceof Object ? options : romeo;
                    SaveGenerator(address=377);
 375:
                    return options;
 377:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=11);
                    if(romeo) { _fun00016_ip = 523; continue _fun00015 }
 386:
                    foxtrot = offset.Promise;
                    romeo = foxtrot.prototype;
                    romeo = Object.create(romeo, {constructor: {value: foxtrot}});
                    control = function(argFoo) {
                        zulu = _closure1_slot7;
                        mike = undefined;
                        entity = argFoo;
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    vacuum = romeo;
                    verify = new vacuum[foxtrot](control, source);
                    verify = verify instanceof Object ? verify : romeo;
                    SaveGenerator(address=423);
 421:
                    return verify;
 423:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=11);
                    if(romeo) { _fun00016_ip = 520; continue _fun00015 }
 429:
                    romeo = _closure1_slot8;
                    yankee = romeo.getId;
                    kilo = yankee.bind(romeo)();
                    if(!(kilo === sizing)) { _fun00016_ip = 450; continue _fun00015 }
 447:
                    return options;
 450:
                    romeo = offset.Error;
                    offset = offset.HermesInternal;
                    backup = offset.concat;
                    vacuum = 'Unable to login ';
                    source = ', expected id ';
                    echo = ' after login but was ';
                    control = output;
                    update = sizing;
                    result = kilo;
                    control = vacuum[backup](control, source, update, echo, result, output);
                    yankee = romeo.prototype;
                    yankee = Object.create(yankee, {constructor: {value: romeo}});
                    vacuum = yankee;
                    offset = new vacuum[romeo](control, source);
                    offset = offset instanceof Object ? offset : yankee;
                    throw offset;
 520:
                    return verify;
 523:
                    return options;
 526:
                    return mike;
 529:
                    return golf;
 532:
                    return oscar;
 535:
                    return report;
 538:
                    return tango;
 541:
                    return zulu;
 544:
                    return mike;
 547:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot22 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: subscribeOnce
        tango = argFoo;
        zulu = argBar;
        var _closure2_slot0 = tango;
        var _closure2_slot1 = zulu;
        entity = argBaz;
        var _closure2_slot2 = entity;
        mike = tango.subscribe;
        entity = function(argFoo) { // Original name: handler
            report = _closure2_slot0;
            tango = report.unsubscribe;
            zulu = _closure2_slot1;
            mike = _closure2_slot3;
            mike = tango.bind(report)(zulu, mike);
            zulu = _closure2_slot2;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        var _closure2_slot3 = entity;
        entity = mike.bind(tango)(zulu, entity);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = 0;
    report = tango[entity];
    entity = undefined;
    golf = options.bind(entity)(report);
    var _closure1_slot3 = golf;
    report = 1;
    report = tango[report];
    report = zulu.bind(entity)(report);
    report = report.NativeModules;
    var _closure1_slot4 = report;
    report = 2;
    report = tango[report];
    report = zulu.bind(entity)(report);
    report = report.applicationReady;
    var _closure1_slot5 = report;
    report = 3;
    report = tango[report];
    report = options.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = tango[report];
    report = zulu.bind(entity)(report);
    report = report.addPostConnectionCallback;
    var _closure1_slot7 = report;
    report = 5;
    report = tango[report];
    report = options.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 6;
    report = tango[report];
    report = options.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 7;
    report = tango[report];
    report = options.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 8;
    report = tango[report];
    verify = options.bind(entity)(report);
    report = verify.prototype;
    options = Object.create(report, {constructor: {value: verify}});
    offset = 'TTITestAction';
    yankee = options;
    report = new yankee[verify](offset, verify);
    report = report instanceof Object ? report : options;
    var _closure1_slot12 = report;
    report = {};
    report['setup-test'] = oscar;
    oscar = function() { // Original name: ping
        entity = _closure1_slot4;
        zulu = entity.TTIManager;
        mike = zulu.logToDevice;
        entity = global;
        report = entity.JSON;
        tango = report.stringify;
        entity = {};
        oscar = 'pong';
        entity['type'] = oscar;
        entity = tango.bind(report)(entity);
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    report['ping'] = oscar;
    oscar = function() { // Original name: reset-component-profiler
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 9;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.resetComponentProfiler;
        zulu = zulu.bind(tango)();
        tango = _closure1_slot16;
        zulu = 'success';
        mike = 'reset-component-profiler';
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    report['reset-component-profiler'] = oscar;
    oscar = function() { // Original name: pause-component-profiler
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 9;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.pauseComponentProfiler;
        zulu = zulu.bind(tango)();
        tango = _closure1_slot16;
        zulu = 'success';
        mike = 'pause-component-profiler';
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    report['pause-component-profiler'] = oscar;
    oscar = function() { // Original name: resume-component-profiler
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 9;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.resumeComponentProfiler;
        zulu = zulu.bind(tango)();
        tango = _closure1_slot16;
        zulu = 'success';
        mike = 'resume-component-profiler';
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    report['resume-component-profiler'] = oscar;
    oscar = function() { // Original name: dump-component-profiler-stats
        report = _closure1_slot16;
        tango = {};
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 9;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.dumpStats;
        mike = mike.bind(zulu)();
        tango['stats'] = mike;
        zulu = 'success';
        mike = 'dump-component-profiler-stats';
        mike = report.bind(entity)(zulu, mike, tango);
        return entity;
    };
    report['dump-component-profiler-stats'] = oscar;
    oscar = function() { // Original name: dump-jank-stats
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            report = _closure1_slot16;
            tango = {};
            oscar = _closure1_slot1;
            entity = _closure1_slot2;
            golf = 10;
            mike = entity[golf];
            entity = undefined;
            oscar = oscar.bind(entity)(mike);
            mike = null;
            oscar = mike == oscar;
            mike = undefined;
            if(oscar) { _fun00020_ip = 69; continue _fun00019 }
 42:
            oscar = _closure1_slot1;
            zulu = _closure1_slot2;
            zulu = zulu[golf];
            oscar = oscar.bind(entity)(zulu);
            zulu = oscar.requestReport;
            mike = zulu.bind(oscar)();
 69:
            tango['report'] = mike;
            zulu = 'success';
            mike = 'dump-jank-stats';
            mike = report.bind(entity)(zulu, mike, tango);
            return entity;
        }
    };
    report['dump-jank-stats'] = oscar;
    oscar = function(argFoo) { // Original name: set-jank-multiplier
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            tango = _closure1_slot1;
            entity = _closure1_slot2;
            report = 10;
            zulu = entity[report];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = null;
            if(!(zulu != tango)) { _fun00022_ip = 70; continue _fun00021 }
 31:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            zulu = zulu[report];
            report = tango.bind(entity)(zulu);
            tango = report.setJankHeuristicMultiplier;
            zulu = argFoo;
            zulu = zulu.multiplier;
            zulu = tango.bind(report)(zulu);
 70:
            tango = _closure1_slot16;
            zulu = 'success';
            mike = 'set-jank-multiplier';
            mike = tango.bind(entity)(zulu, mike);
            return entity;
        }
    };
    report['set-jank-multiplier'] = oscar;
    oscar = function() { // Original name: start-jank-stats
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            tango = _closure1_slot1;
            entity = _closure1_slot2;
            report = 10;
            zulu = entity[report];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = null;
            if(!(zulu != tango)) { _fun00024_ip = 58; continue _fun00023 }
 31:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            zulu = zulu[report];
            tango = tango.bind(entity)(zulu);
            zulu = tango.startTracking;
            zulu = zulu.bind(tango)();
 58:
            tango = _closure1_slot16;
            zulu = 'success';
            mike = 'start-jank-stats';
            mike = tango.bind(entity)(zulu, mike);
            return entity;
        }
    };
    report['start-jank-stats'] = oscar;
    oscar = function(argFoo) { // Original name: flux-dispatch
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 11;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.dispatch;
        zulu = argFoo;
        zulu = zulu.action;
        zulu = tango.bind(report)(zulu);
        tango = _closure1_slot16;
        zulu = 'success';
        mike = 'flux-dispatch';
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    report['flux-dispatch'] = oscar;
    oscar = function() { // Original name: get-resource-usage
        report = _closure1_slot16;
        tango = {};
        zulu = _closure1_slot1;
        oscar = _closure1_slot2;
        mike = 12;
        golf = oscar[mike];
        entity = undefined;
        options = zulu.bind(entity)(golf);
        golf = options.getCumulativeCPUUsage;
        golf = golf.bind(options)();
        tango['cumulativeCPU'] = golf;
        mike = oscar[mike];
        zulu = zulu.bind(entity)(mike);
        mike = zulu.getCurrentMemoryUsageKB;
        mike = mike.bind(zulu)();
        tango['currentMemoryUsage'] = mike;
        zulu = 'success';
        mike = 'get-resource-usage';
        mike = report.bind(entity)(zulu, mike, tango);
        return entity;
    };
    report['get-resource-usage'] = oscar;
    oscar = function* (argFoo) {
        entity = function* (argFoo) { // Original name: ?anon_0_
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                StartGenerator();
                oscar = argFoo;
                ResumeGenerator(result_out_reg=0, return_bool_out_reg=6);
                if(golf) { _fun00026_ip = 1161; continue _fun00025 }
 13:
                golf = undefined;
                mike = undefined;
                sizing = undefined;
                output = undefined;
                options = undefined;
                verify = undefined;
                zulu = undefined;
                report = undefined;
                romeo = undefined;
                yankee = undefined;
                tango = undefined;
                mike = oscar.reply;
                sizing = oscar.source;
                kilo = oscar.args;
                offset = {};
                foxtrot = {};
                result = _closure1_slot0;
                echo = _closure1_slot2;
                backup = 13;
                backup = echo[backup];
                backup = result.bind(golf)(backup);
                backup = backup.getConstants;
                foxtrot['getConstants'] = backup;
                offset['ClientInfoUtils'] = foxtrot;
                foxtrot = {};
                backup = 9;
                update = echo[backup];
                update = result.bind(golf)(update);
                update = update.resetComponentProfiler;
                foxtrot['resetComponentProfiler'] = update;
                update = echo[backup];
                update = result.bind(golf)(update);
                update = update.resumeComponentProfiler;
                foxtrot['resumeComponentProfiler'] = update;
                update = echo[backup];
                update = result.bind(golf)(update);
                update = update.pauseComponentProfiler;
                foxtrot['pauseComponentProfiler'] = update;
                backup = echo[backup];
                backup = result.bind(golf)(backup);
                backup = backup.dumpStats;
                foxtrot['dumpStats'] = backup;
                offset['ComponentProfiler'] = foxtrot;
                backup = _closure1_slot1;
                foxtrot = 11;
                foxtrot = echo[foxtrot];
                foxtrot = backup.bind(golf)(foxtrot);
                offset['Dispatcher'] = foxtrot;
                foxtrot = _closure1_slot6;
                offset['ExperimentStore'] = foxtrot;
                foxtrot = 10;
                foxtrot = echo[foxtrot];
                foxtrot = backup.bind(golf)(foxtrot);
                offset['NativeJankStats'] = foxtrot;
                foxtrot = 12;
                foxtrot = echo[foxtrot];
                foxtrot = backup.bind(golf)(foxtrot);
                offset['ProcessUtils'] = foxtrot;
                foxtrot = {};
                backup = 14;
                update = echo[backup];
                update = result.bind(golf)(update);
                update = update.startRecordingAnalyticsEvents;
                foxtrot['startRecordingAnalyticsEvents'] = update;
                update = echo[backup];
                update = result.bind(golf)(update);
                update = update.stopRecordingAnalyticsEvents;
                foxtrot['stopRecordingAnalyticsEvents'] = update;
                update = echo[backup];
                update = result.bind(golf)(update);
                update = update.getAnalyticsEventsRecording;
                foxtrot['getAnalyticsEventsRecording'] = update;
                backup = echo[backup];
                backup = result.bind(golf)(backup);
                backup = backup.clearAnalyticsEventsRecording;
                foxtrot['clearAnalyticsEventsRecording'] = backup;
                offset['AnalyticsUtils'] = foxtrot;
                foxtrot = {};
                backup = _closure1_slot21;
                foxtrot['apiLogin'] = backup;
                backup = _closure1_slot19;
                foxtrot['setupTTITest'] = backup;
                offset['TTITestAction'] = foxtrot;
                output = offset;
                foxtrot = _closure1_slot3;
                offset = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun00028_ip = 12; continue _fun00027 }
 7:
                            mike = undefined;
                            return mike;
 12:
                            return entity;
                        }
                    };
                    return entity;
                };
                offset = foxtrot.bind(golf)(offset);
                options = offset.constructor;
                verify = {};
                offset = null;
                if(!(offset == kilo)) { _fun00026_ip = 412; continue _fun00025 }
 410:
                kilo = {};
 412:
                offset = global;
                backup = offset.Object;
                foxtrot = backup.keys;
                zulu = foxtrot.bind(backup)(output);
                backup = offset.Object;
                foxtrot = backup.values;
                report = foxtrot.bind(backup)(output);
                backup = offset.Object;
                foxtrot = backup.keys;
                romeo = foxtrot.bind(backup)(kilo);
                backup = offset.Object;
                foxtrot = backup.values;
                yankee = foxtrot.bind(backup)(kilo);
 478: // try_start_0 // try_start_1
                backup = zulu;
                zulu = new Array(2);
                vacuum = zulu;
                control = backup;
                source = 0;
                output = arraySpread(vacuum, control, source);
                foxtrot = 'imports';
                zulu[output] = foxtrot;
                foxtrot = 1;
                source = output + foxtrot;
                control = romeo;
                vacuum = zulu;
                romeo = arraySpread(vacuum, control, source);
                output = offset.String;
                sizing = output.bind(golf)(sizing);
                zulu[romeo] = sizing;
                romeo = romeo + foxtrot;
                vacuum = options;
                control = zulu;
                source = undefined;
                options = apply(vacuum, control, source);
                zulu = verify;
                control = report;
                report = new Array(1);
                vacuum = report;
                source = 0;
                romeo = arraySpread(vacuum, control, source);
                report[romeo] = backup;
                source = romeo + foxtrot;
                control = yankee;
                vacuum = report;
                yankee = arraySpread(vacuum, control, source);
                vacuum = options;
                control = report;
                source = undefined;
                report = apply(vacuum, control, source);
                SaveGenerator(address=609);
 607:
                return report;
 609:
                ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                if(options) { _fun00026_ip = 626; continue _fun00025 }
 615:
                zulu['result'] = report;
 621: // try_end0
                _fun00026_ip = 834; continue _fun00025;
 626: // try_end1
                zulu = mike;
                options = 'string';
                zulu = typeof zulu;
                if(!(options === zulu)) { _fun00026_ip = 786; continue _fun00025 }
 643:
                yankee = offset.fetch;
                options = mike;
                zulu = {};
                romeo = 'PUT';
                zulu['method'] = romeo;
                backup = offset.JSON;
                foxtrot = backup.stringify;
                romeo = verify;
                romeo = foxtrot.bind(backup)(romeo);
                zulu['body'] = romeo;
                romeo = {};
                foxtrot = 'application/json';
                romeo['Content-Type'] = foxtrot;
                zulu['headers'] = romeo;
                zulu = yankee.bind(golf)(options, zulu);
                SaveGenerator(address=715);
 713:
                return zulu;
 715:
                ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                if(options) { _fun00026_ip = 789; continue _fun00025 }
 721:
                tango = zulu;
                options = zulu.ok;
                romeo = _closure1_slot16;
                if(options) { _fun00026_ip = 770; continue _fun00025 }
 737:
                foxtrot = {};
                options = tango;
                options = options.status;
                foxtrot['status'] = options;
                yankee = 'error';
                options = 'Failed to send backchannel reply';
                options = romeo.bind(golf)(yankee, options, foxtrot);
                _fun00026_ip = 786; continue _fun00025;
 770:
                yankee = 'success';
                options = 'Backchannel reply sent';
                options = romeo.bind(golf)(yankee, options);
 786:
                return report;
 789:
                return zulu;
 792: // try_start_2 // catch_target0
                CatchBlockStart(arg_register=10);
                report = verify;
                zulu = {};
                options = _closure1_slot18;
                options = options.bind(golf)(yankee);
                zulu['details'] = options;
                options = offset.String;
                options = options.bind(golf)(yankee);
                zulu['string'] = options;
                report['error'] = zulu;
 834: // try_end2
                zulu = mike;
                report = 'string';
                zulu = typeof zulu;
                if(!(report === zulu)) { _fun00026_ip = 994; continue _fun00025 }
 851:
                options = offset.fetch;
                report = mike;
                zulu = {};
                yankee = 'PUT';
                zulu['method'] = yankee;
                foxtrot = offset.JSON;
                romeo = foxtrot.stringify;
                yankee = verify;
                yankee = romeo.bind(foxtrot)(yankee);
                zulu['body'] = yankee;
                yankee = {};
                romeo = 'application/json';
                yankee['Content-Type'] = romeo;
                zulu['headers'] = yankee;
                zulu = options.bind(golf)(report, zulu);
                SaveGenerator(address=923);
 921:
                return zulu;
 923:
                ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                if(report) { _fun00026_ip = 997; continue _fun00025 }
 929:
                tango = zulu;
                report = zulu.ok;
                yankee = _closure1_slot16;
                if(report) { _fun00026_ip = 978; continue _fun00025 }
 945:
                romeo = {};
                report = tango;
                report = report.status;
                romeo['status'] = report;
                options = 'error';
                report = 'Failed to send backchannel reply';
                report = yankee.bind(golf)(options, report, romeo);
                _fun00026_ip = 994; continue _fun00025;
 978:
                options = 'success';
                report = 'Backchannel reply sent';
                report = yankee.bind(golf)(options, report);
 994:
                return golf;
 997:
                return zulu;
 1000: // catch_target1 // catch_target2
                CatchBlockStart(arg_register=2);
                report = mike;
                options = 'string';
                report = typeof report;
                if(!(options === report)) { _fun00026_ip = 1156; continue _fun00025 }
 1019:
                options = offset.fetch;
                report = mike;
                mike = {};
                yankee = 'PUT';
                mike['method'] = yankee;
                yankee = offset.JSON;
                offset = yankee.stringify;
                verify = offset.bind(yankee)(verify);
                mike['body'] = verify;
                verify = {};
                offset = 'application/json';
                verify['Content-Type'] = offset;
                mike['headers'] = verify;
                mike = options.bind(golf)(report, mike);
                SaveGenerator(address=1088);
 1086:
                return mike;
 1088:
                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                if(report) { _fun00026_ip = 1158; continue _fun00025 }
 1094:
                tango = mike;
                report = mike.ok;
                oscar = _closure1_slot16;
                if(report) { _fun00026_ip = 1140; continue _fun00025 }
 1110:
                options = {};
                tango = tango.status;
                options['status'] = tango;
                report = 'error';
                tango = 'Failed to send backchannel reply';
                tango = oscar.bind(golf)(report, tango, options);
                _fun00026_ip = 1156; continue _fun00025;
 1140:
                report = 'success';
                tango = 'Backchannel reply sent';
                tango = oscar.bind(golf)(report, tango);
 1156:
                throw zulu;
 1158:
                return mike;
 1161:
                return entity;
            }
        };
        return entity;
    };
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot11 = oscar;
    oscar = function() {
        entity = undefined;
        tango = _closure1_slot11;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    report['backchannel'] = oscar;
    var _closure1_slot13 = report;
    mike = function() {
        tango = _closure1_slot3;
        zulu = undefined;
        mike = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00030_ip = 244; continue _fun00029 }
 10:
                    zulu = global;
                    report = zulu.TextDecoder;
                    mike = report.prototype;
                    tango = Object.create(mike, {constructor: {value: report}});
                    romeo = 'utf-8';
                    foxtrot = tango;
                    mike = new foxtrot[report](romeo, yankee);
                    golf = mike instanceof Object ? mike : tango;
                    oscar = golf.decode;
                    options = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 19;
                    report = report[mike];
                    mike = undefined;
                    verify = options.bind(mike)(report);
                    options = verify.base64decode;
                    report = argFoo;
                    report = report.actionData;
                    report = options.bind(verify)(report);
                    golf = oscar.bind(golf)(report);
                    oscar = zulu.JSON;
                    report = oscar.parse;
                    oscar = report.bind(oscar)(golf);
                    options = _closure1_slot12;
                    golf = options.log;
                    report = {};
                    romeo = report;
                    yankee = oscar;
                    verify = copyDataProperties(romeo, yankee);
                    offset = oscar.user;
                    verify = null;
                    offset = verify == offset;
                    verify = 'redacted';
                    if(!offset) { _fun00030_ip = 163; continue _fun00029 }
 161:
                    verify = undefined;
 163:
                    mike = 'user';
                    report[mike] = verify;
                    mike = 'Received TTI Test Action';
                    mike = golf.bind(options)(mike, report);
                    mike = _closure1_slot5;
                    mike = mike.promise;
                    SaveGenerator(address=198);
 196:
                    return mike;
 198:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00030_ip = 241; continue _fun00029 }
 204:
                    report = _closure1_slot13;
                    tango = oscar.type;
                    tango = report[tango];
                    tango = tango.bind(report)(oscar);
                    tango = zulu.Promise;
                    zulu = tango.resolve;
                    zulu = zulu.bind(tango)();
                    return zulu;
 241:
                    return mike;
 244:
                    return entity;
                }
            };
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function(argFoo) {
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        return entity;
    };
    report = mike.bind(entity)();
    mike = argGrault;
    mike['exports'] = report;
    mike = 20;
    mike = tango[mike];
    tango = zulu.bind(entity)(mike);
    zulu = tango.fileFinishedImporting;
    mike = 'modules/headless_tasks/android/TTITestAction.tsx';
    mike = zulu.bind(tango)(mike);
    return entity;
})();