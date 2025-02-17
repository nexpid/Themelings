// app/modules/guild_member_verification/MemberVerificationActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    mike = function(argFoo) { // Original name: showCoachmark
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 8;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot10 = mike;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    options = tango.AnalyticEvents;
    var _closure1_slot8 = options;
    tango = tango.Endpoints;
    var _closure1_slot9 = tango;
    tango = function() {
        tango = _closure1_slot3;
        zulu = undefined;
        mike = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    zulu = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 491; continue _fun00001 }
 13:
                    oscar = argFoo;
                    mike = undefined;
                    foxtrot = undefined;
                    yankee = undefined;
                    report = undefined;
                    golf = undefined;
                    romeo = null;
                    if(!(romeo == zulu)) { _fun00002_ip = 53; continue _fun00001 }
 32:
                    verify = _closure1_slot6;
                    options = verify.getInviteKeyForGuildId;
                    tango = oscar;
                    zulu = options.bind(verify)(tango);
 53:
                    foxtrot = zulu;
                    options = _closure1_slot7;
                    tango = options.getCurrentUser;
                    backup = tango.bind(options)();
                    offset = _closure1_slot5;
                    verify = offset.isMember;
                    options = oscar;
                    kilo = romeo == backup;
                    tango = undefined;
                    if(kilo) { _fun00002_ip = 99; continue _fun00001 }
 94:
                    tango = backup.id;
 99:
                    tango = verify.bind(offset)(options, tango);
                    yankee = !tango;
 108: // try_start_0
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    tango = 6;
                    tango = verify[tango];
                    tango = options.bind(mike)(tango);
                    verify = tango.HTTP;
                    options = verify.get;
                    tango = {};
                    kilo = _closure1_slot9;
                    backup = kilo.GUILD_MEMBER_VERIFICATION;
                    offset = oscar;
                    offset = backup.bind(kilo)(offset);
                    tango['url'] = offset;
                    offset = {};
                    offset['with_guild'] = yankee;
                    yankee = foxtrot;
                    backup = romeo != yankee;
                    yankee = undefined;
                    if(!backup) { _fun00002_ip = 212; continue _fun00001 }
 181:
                    kilo = _closure1_slot0;
                    sizing = _closure1_slot2;
                    backup = 7;
                    backup = sizing[backup];
                    kilo = kilo.bind(mike)(backup);
                    backup = kilo.parseInviteCodeFromInviteKey;
                    yankee = backup.bind(kilo)(foxtrot);
 212:
                    offset['invite_code'] = yankee;
                    tango['query'] = offset;
                    offset = true;
                    tango['oldFormErrors'] = offset;
                    offset = false;
                    tango['rejectWithError'] = offset;
                    tango = options.bind(verify)(tango);
                    SaveGenerator(address=243);
 241:
                    return tango;
 243:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(options) { _fun00002_ip = 437; continue _fun00001 }
 252:
                    report = tango;
                    options = tango.body;
                    if(!(romeo != options)) { _fun00002_ip = 435; continue _fun00001 }
 267:
                    options = report;
                    foxtrot = options.body;
                    golf = foxtrot;
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    options = 8;
                    options = offset[options];
                    offset = verify.bind(mike)(options);
                    verify = offset.dispatch;
                    options = {};
                    yankee = 'MEMBER_VERIFICATION_FORM_UPDATE';
                    options['type'] = yankee;
                    yankee = oscar;
                    options['guildId'] = yankee;
                    yankee = {};
                    backup = foxtrot.version;
                    yankee['version'] = backup;
                    backup = foxtrot.description;
                    yankee['description'] = backup;
                    backup = foxtrot.form_fields;
                    yankee['formFields'] = backup;
                    backup = foxtrot.guild;
                    yankee['guild'] = backup;
                    foxtrot = foxtrot.profile;
                    foxtrot = romeo != foxtrot;
                    romeo = null;
                    if(!foxtrot) { _fun00002_ip = 417; continue _fun00001 }
 377:
                    backup = _closure1_slot0;
                    kilo = _closure1_slot2;
                    foxtrot = 9;
                    foxtrot = kilo[foxtrot];
                    kilo = backup.bind(mike)(foxtrot);
                    backup = kilo.buildGuildProfileFromServer;
                    foxtrot = golf;
                    foxtrot = foxtrot.profile;
                    romeo = backup.bind(kilo)(foxtrot);
 417:
                    yankee['profile'] = romeo;
                    options['form'] = yankee;
                    options = verify.bind(offset)(options);
 432: // try_end0
                    return golf;
 435: // try_start_1
                    throw report;
 437: // try_end1
                    return tango;
 440: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 8;
                    zulu = report[zulu];
                    report = tango.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'MEMBER_VERIFICATION_FORM_FETCH_FAIL';
                    zulu['type'] = golf;
                    zulu['guildId'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    return mike;
 491:
                    return entity;
                }
            };
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
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
    romeo = tango.bind(entity)();
    tango = function() {
        tango = _closure1_slot3;
        zulu = undefined;
        mike = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    golf = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00004_ip = 212; continue _fun00003 }
 13:
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 6;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = report.bind(zulu)(mike);
                    oscar = mike.HTTP;
                    report = oscar.patch;
                    mike = {};
                    verify = _closure1_slot9;
                    options = verify.GUILD_MEMBER_VERIFICATION;
                    options = options.bind(verify)(golf);
                    mike['url'] = options;
                    options = {};
                    verify = argBar;
                    options['form_fields'] = verify;
                    verify = argBaz;
                    options['enabled'] = verify;
                    mike['body'] = options;
                    options = true;
                    mike['oldFormErrors'] = options;
                    options = false;
                    mike['rejectWithError'] = options;
                    mike = report.bind(oscar)(mike);
                    SaveGenerator(address=113);
 111:
                    return mike;
 113:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00004_ip = 209; continue _fun00003 }
 119:
                    options = mike.body;
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 8;
                    tango = oscar[tango];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    verify = 'MEMBER_VERIFICATION_FORM_UPDATE';
                    tango['type'] = verify;
                    tango['guildId'] = golf;
                    golf = {};
                    verify = options.version;
                    golf['version'] = verify;
                    verify = options.description;
                    golf['description'] = verify;
                    options = options.form_fields;
                    golf['formFields'] = options;
                    tango['form'] = golf;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 209:
                    return mike;
 212:
                    return entity;
                }
            };
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
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
    yankee = tango.bind(entity)();
    tango = function() {
        tango = _closure1_slot3;
        zulu = undefined;
        mike = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    golf = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00006_ip = 204; continue _fun00005 }
 13:
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 6;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = report.bind(zulu)(mike);
                    oscar = mike.HTTP;
                    report = oscar.patch;
                    mike = {};
                    verify = _closure1_slot9;
                    options = verify.GUILD_MEMBER_VERIFICATION;
                    options = options.bind(verify)(golf);
                    mike['url'] = options;
                    options = {};
                    verify = argBar;
                    options['description'] = verify;
                    mike['body'] = options;
                    options = true;
                    mike['oldFormErrors'] = options;
                    options = false;
                    mike['rejectWithError'] = options;
                    mike = report.bind(oscar)(mike);
                    SaveGenerator(address=105);
 103:
                    return mike;
 105:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 201; continue _fun00005 }
 111:
                    options = mike.body;
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 8;
                    tango = oscar[tango];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    verify = 'MEMBER_VERIFICATION_FORM_UPDATE';
                    tango['type'] = verify;
                    tango['guildId'] = golf;
                    golf = {};
                    verify = options.version;
                    golf['version'] = verify;
                    verify = options.description;
                    golf['description'] = verify;
                    options = options.form_fields;
                    golf['formFields'] = options;
                    tango['form'] = golf;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 201:
                    return mike;
 204:
                    return entity;
                }
            };
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
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
    offset = tango.bind(entity)();
    tango = function() {
        tango = _closure1_slot3;
        zulu = undefined;
        mike = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00008_ip = 114; continue _fun00007 }
 7:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 6;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = tango.bind(zulu)(mike);
                    report = mike.HTTP;
                    tango = report.patch;
                    mike = {};
                    options = _closure1_slot9;
                    golf = options.GUILD_MEMBER_VERIFICATION;
                    oscar = argFoo;
                    oscar = golf.bind(options)(oscar);
                    mike['url'] = oscar;
                    oscar = {};
                    golf = argBar;
                    oscar['enabled'] = golf;
                    mike['body'] = oscar;
                    oscar = true;
                    mike['oldFormErrors'] = oscar;
                    oscar = false;
                    mike['rejectWithError'] = oscar;
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=102);
 100:
                    return mike;
 102:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00008_ip = 111; continue _fun00007 }
 108:
                    return zulu;
 111:
                    return mike;
 114:
                    return entity;
                }
            };
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
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
    verify = tango.bind(entity)();
    tango = function() {
        tango = _closure1_slot3;
        zulu = undefined;
        mike = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    zulu = argFoo;
                    mike = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(report) { _fun00010_ip = 958; continue _fun00009 }
 18:
                    tango = zulu;
                    var _closure4_slot0 = zulu;
                    backup = argBar;
                    zulu = undefined;
                    if(!(mike === zulu)) { _fun00010_ip = 37; continue _fun00009 }
 34:
                    mike = 200;
 37:
                    romeo = mike;
                    golf = undefined;
                    yankee = undefined;
                    verify = undefined;
                    SaveGenerator(address=50);
 48:
                    return zulu;
 50:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00010_ip = 955; continue _fun00009 }
 59:
                    kilo = _closure1_slot4;
                    foxtrot = kilo.isFullServerPreview;
                    oscar = tango;
                    oscar = foxtrot.bind(kilo)(oscar);
                    if(oscar) { _fun00010_ip = 901; continue _fun00009 }
 86: // try_start_0
                    foxtrot = _closure1_slot0;
                    kilo = _closure1_slot2;
                    oscar = 6;
                    oscar = kilo[oscar];
                    oscar = foxtrot.bind(zulu)(oscar);
                    kilo = oscar.HTTP;
                    foxtrot = kilo.put;
                    oscar = {};
                    result = _closure1_slot9;
                    output = result.GUILD_MEMBER_REQUEST_TO_JOIN;
                    sizing = tango;
                    sizing = output.bind(result)(sizing);
                    oscar['url'] = sizing;
                    sizing = {};
                    output = backup;
                    result = output.version;
                    sizing['version'] = result;
                    output = output.formFields;
                    sizing['form_fields'] = output;
                    oscar['body'] = sizing;
                    sizing = false;
                    oscar['rejectWithError'] = sizing;
                    oscar = foxtrot.bind(kilo)(oscar);
                    SaveGenerator(address=187);
 185:
                    return oscar;
 187:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=12);
                    if(foxtrot) { _fun00010_ip = 335; continue _fun00009 }
 196:
                    result = oscar.body;
                    verify = result;
                    kilo = _closure1_slot1;
                    output = _closure1_slot2;
                    foxtrot = 8;
                    foxtrot = output[foxtrot];
                    sizing = kilo.bind(zulu)(foxtrot);
                    kilo = sizing.dispatch;
                    foxtrot = {};
                    echo = 'USER_GUILD_JOIN_REQUEST_UPDATE';
                    foxtrot['type'] = echo;
                    echo = tango;
                    foxtrot['guildId'] = echo;
                    foxtrot['request'] = result;
                    foxtrot = kilo.bind(sizing)(foxtrot);
                    sizing = _closure1_slot0;
                    kilo = 11;
                    kilo = output[kilo];
                    sizing = sizing.bind(zulu)(kilo);
                    kilo = sizing.hasNonTermsFormField;
                    backup = backup.formFields;
                    backup = kilo.bind(sizing)(backup);
                    foxtrot = backup;
                    if(!backup) { _fun00010_ip = 310; continue _fun00009 }
 297:
                    kilo = romeo;
                    backup = -1;
                    foxtrot = backup !== kilo;
 310:
                    if(!foxtrot) { _fun00010_ip = 332; continue _fun00009 }
 313:
                    foxtrot = global;
                    foxtrot = foxtrot.setTimeout;
                    offset = function() {
                        zulu = _closure1_slot10;
                        mike = _closure4_slot0;
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    offset = foxtrot.bind(zulu)(offset, romeo);
 332: // try_end0
                    return verify;
 335:
                    return oscar;
 338: // catch_target0
                    CatchBlockStart(arg_register=5);
                    options = oscar;
                    verify = oscar.status;
                    oscar = 429;
                    if(!(oscar !== verify)) { _fun00010_ip = 623; continue _fun00009 }
 361:
                    oscar = 403;
                    if(!(oscar !== verify)) { _fun00010_ip = 543; continue _fun00009 }
 374:
                    oscar = {};
                    romeo = options;
                    source = oscar;
                    update = romeo;
                    verify = copyDataProperties(source, update);
                    offset = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    verify = 15;
                    verify = foxtrot[verify];
                    verify = offset.bind(zulu)(verify);
                    verify = verify.APIError;
                    offset = verify.prototype;
                    offset = Object.create(offset, {constructor: {value: verify}});
                    control = offset;
                    source = romeo;
                    verify = new control[verify](source, update);
                    verify = verify instanceof Object ? verify : offset;
                    yankee = verify;
                    offset = null;
                    romeo = offset == verify;
                    verify = undefined;
                    if(romeo) { _fun00010_ip = 465; continue _fun00009 }
 452:
                    romeo = yankee;
                    yankee = romeo.getAnyErrorMessage;
                    verify = yankee.bind(romeo)();
 465:
                    golf = verify;
                    if(!(offset == verify)) { _fun00010_ip = 529; continue _fun00009 }
 472:
                    romeo = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    verify = 14;
                    offset = foxtrot[verify];
                    offset = romeo.bind(zulu)(offset);
                    yankee = offset.intl;
                    offset = yankee.string;
                    verify = foxtrot[verify];
                    verify = romeo.bind(zulu)(verify);
                    verify = verify.t;
                    verify = verify.R0RpRU;
                    verify = offset.bind(yankee)(verify);
                    _fun00010_ip = 532; continue _fun00009;
 529:
                    verify = golf;
 532:
                    golf = 'message';
                    oscar[golf] = verify;
                    throw oscar;
 543:
                    oscar = {};
                    update = options;
                    source = oscar;
                    golf = copyDataProperties(source, update);
                    yankee = _closure1_slot0;
                    romeo = _closure1_slot2;
                    golf = 14;
                    verify = romeo[golf];
                    verify = yankee.bind(zulu)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    golf = romeo[golf];
                    golf = yankee.bind(zulu)(golf);
                    golf = golf.t;
                    golf = golf.bu2hl5;
                    verify = verify.bind(offset)(golf);
                    golf = 'message';
                    oscar[golf] = verify;
                    throw oscar;
 623:
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    oscar = 12;
                    oscar = yankee[oscar];
                    golf = offset.bind(zulu)(oscar);
                    oscar = golf.closeContextMenu;
                    oscar = oscar.bind(golf)();
                    golf = _closure1_slot1;
                    oscar = 13;
                    oscar = yankee[oscar];
                    romeo = golf.bind(zulu)(oscar);
                    verify = romeo.show;
                    oscar = {};
                    golf = 14;
                    foxtrot = yankee[golf];
                    foxtrot = offset.bind(zulu)(foxtrot);
                    kilo = foxtrot.intl;
                    backup = kilo.string;
                    foxtrot = yankee[golf];
                    foxtrot = offset.bind(zulu)(foxtrot);
                    foxtrot = foxtrot.t;
                    foxtrot = foxtrot.2bHM5e;
                    foxtrot = backup.bind(kilo)(foxtrot);
                    oscar['title'] = foxtrot;
                    foxtrot = yankee[golf];
                    foxtrot = offset.bind(zulu)(foxtrot);
                    kilo = foxtrot.intl;
                    backup = kilo.string;
                    foxtrot = yankee[golf];
                    foxtrot = offset.bind(zulu)(foxtrot);
                    foxtrot = foxtrot.t;
                    foxtrot = foxtrot.D0lNBA;
                    foxtrot = backup.bind(kilo)(foxtrot);
                    oscar['body'] = foxtrot;
                    foxtrot = yankee[golf];
                    foxtrot = offset.bind(zulu)(foxtrot);
                    kilo = foxtrot.intl;
                    backup = kilo.string;
                    foxtrot = yankee[golf];
                    foxtrot = offset.bind(zulu)(foxtrot);
                    foxtrot = foxtrot.t;
                    foxtrot = foxtrot.qFctfH;
                    foxtrot = backup.bind(kilo)(foxtrot);
                    oscar['confirmText'] = foxtrot;
                    oscar = verify.bind(romeo)(oscar);
                    oscar = {};
                    update = options;
                    source = oscar;
                    options = copyDataProperties(source, update);
                    options = yankee[golf];
                    options = offset.bind(zulu)(options);
                    verify = options.intl;
                    options = verify.string;
                    golf = yankee[golf];
                    golf = offset.bind(zulu)(golf);
                    golf = golf.t;
                    golf = golf.D0lNBA;
                    options = options.bind(verify)(golf);
                    golf = 'message';
                    oscar[golf] = options;
                    throw oscar;
 901:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    report = 10;
                    report = golf[report];
                    golf = oscar.bind(zulu)(report);
                    oscar = golf.updateImpersonatedData;
                    report = tango;
                    tango = {};
                    options = {};
                    verify = false;
                    options['isPending'] = verify;
                    tango['memberOptions'] = options;
                    tango = oscar.bind(golf)(report, tango);
                    return zulu;
 955:
                    return mike;
 958:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
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
    options = tango.bind(entity)();
    tango = {};
    tango['fetchVerificationForm'] = romeo;
    tango['updateVerificationForm'] = yankee;
    yankee = function(argFoo, argBar) { // Original name: updateVerificationFormFieldsLocal
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 8;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'MEMBER_VERIFICATION_FORM_UPDATE';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        report = {};
        oscar = argBar;
        report['formFields'] = oscar;
        mike['form'] = report;
        report = true;
        mike['isLocalUpdate'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['updateVerificationFormFieldsLocal'] = yankee;
    tango['updateVerificationFormDescription'] = offset;
    offset = function(argFoo, argBar) { // Original name: updateVerificationFormDescriptionLocal
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 8;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'MEMBER_VERIFICATION_FORM_UPDATE';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        report = {};
        oscar = argBar;
        report['description'] = oscar;
        mike['form'] = report;
        report = true;
        mike['isLocalUpdate'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['updateVerificationFormDescriptionLocal'] = offset;
    tango['enableVerificationForm'] = verify;
    tango['submitVerificationForm'] = options;
    options = function() { // Original name: clearCoachmark
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 8;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['clearCoachmark'] = options;
    report = function(argFoo) { // Original name: reportApplication
        entity = argFoo;
        verify = entity.guild;
        yankee = entity.guildJoinRequest;
        offset = entity.guildJoinRequestUser;
        options = entity.reason;
        golf = entity.reasonOther;
        oscar = entity.responses;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 16;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot8;
        zulu = mike.GUILD_MEMBER_APPLICATION_REPORTED;
        mike = {};
        yankee = yankee.joinRequestId;
        mike['application_id'] = yankee;
        offset = offset.id;
        mike['applicant_id'] = offset;
        verify = verify.id;
        mike['guild_id'] = verify;
        mike['reason'] = options;
        mike['reason_other'] = golf;
        mike['responses'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    tango['reportApplication'] = report;
    report = 17;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_member_verification/MemberVerificationActionCreators.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    tango = -1;
    zulu['DISABLE_JOIN_REQUEST_COACHMARK'] = tango;
    zulu['showCoachmark'] = mike;
    return entity;
})();