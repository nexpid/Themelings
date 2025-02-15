// app/modules/contact_sync/native/ContactSyncModalActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    offset = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    entity = function() { // Original name: handleNameInputScreenOrSuggestions
        entity = undefined;
        tango = _closure1_slot26;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: _handleNameInputScreenOrSuggestions
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun94812: for(var _fun94812_ip = 0; ; ) switch(_fun94812_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun94812_ip = 1028; continue _fun94812 }
 10:
                    report = argFoo;
                    offset = argBar;
                    zulu = undefined;
                    romeo = undefined;
                    oscar = undefined;
                    foxtrot = undefined;
                    golf = undefined;
                    verify = undefined;
                    yankee = undefined;
                    backup = _closure1_slot4;
                    options = backup.getLocalAccount;
                    mike = _closure1_slot22;
                    mike = mike.CONTACTS;
                    romeo = options.bind(backup)(mike);
                    options = _closure1_slot12;
                    mike = options.getState;
                    mike = mike.bind(options)();
                    oscar = mike.name;
                    backup = _closure1_slot0;
                    mike = _closure1_slot2;
                    options = 8;
                    mike = mike[options];
                    backup = backup.bind(zulu)(mike);
                    mike = backup.checkContactPermissions;
                    mike = mike.bind(backup)();
                    SaveGenerator(address=111);
 109:
                    return mike;
 111:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=13);
                    if(backup) { _fun94812_ip = 1025; continue _fun94812 }
 120:
                    backup = _closure1_slot7;
                    backup = backup.bind(zulu)(mike);
                    backup = _closure1_slot18;
                    backup = backup.NOT_DETERMINED;
                    if(!(mike === backup)) { _fun94812_ip = 199; continue _fun94812 }
 143:
                    kilo = _closure1_slot0;
                    result = _closure1_slot2;
                    backup = 9;
                    sizing = result[backup];
                    output = kilo.bind(zulu)(sizing);
                    sizing = output.trackFlowStep;
                    backup = result[backup];
                    backup = kilo.bind(zulu)(backup);
                    backup = backup.Steps;
                    kilo = backup.PERMISSION_REQUESTED;
                    backup = false;
                    backup = sizing.bind(output)(kilo, backup, backup);
 199: // try_start_0
                    kilo = _closure1_slot0;
                    backup = _closure1_slot2;
                    backup = backup[options];
                    kilo = kilo.bind(zulu)(backup);
                    backup = kilo.getContacts;
                    report = backup.bind(kilo)(report);
                    SaveGenerator(address=231);
 229:
                    return report;
 231:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=13);
                    if(backup) { _fun94812_ip = 754; continue _fun94812 }
 240:
                    kilo = report.names;
                    foxtrot = report.ownName;
                    golf = report.payload;
                    backup = _closure1_slot17;
                    backup = backup.bind(zulu)(kilo);
                    kilo = _closure1_slot1;
                    sizing = _closure1_slot2;
                    backup = 10;
                    backup = sizing[backup];
                    output = kilo.bind(zulu)(backup);
                    sizing = output.track;
                    backup = _closure1_slot21;
                    kilo = backup.PERMISSIONS_ACKED;
                    backup = {};
                    result = _closure1_slot24;
                    result = result.CONTACTS;
                    backup['type'] = result;
                    result = _closure1_slot23;
                    result = result.ACCEPTED;
                    backup['action'] = result;
                    backup = sizing.bind(output)(kilo, backup);
                    backup = oscar;
                    sizing = null;
                    if(!(sizing == backup)) { _fun94812_ip = 446; continue _fun94812 }
 346:
                    kilo = _closure1_slot0;
                    echo = _closure1_slot2;
                    backup = 9;
                    output = echo[backup];
                    result = kilo.bind(zulu)(output);
                    output = result.trackFlowStep;
                    backup = echo[backup];
                    backup = kilo.bind(zulu)(backup);
                    backup = backup.Steps;
                    kilo = backup.NAME_INPUT;
                    backup = false;
                    backup = output.bind(result)(kilo, backup, backup);
                    kilo = _closure1_slot11;
                    backup = foxtrot;
                    foxtrot = true;
                    foxtrot = kilo.bind(zulu)(backup, foxtrot);
                    kilo = offset;
                    backup = kilo.navigate;
                    foxtrot = _closure1_slot19;
                    foxtrot = foxtrot.NAME_INPUT;
                    foxtrot = backup.bind(kilo)(foxtrot);
                    _fun94812_ip = 743; continue _fun94812;
 446:
                    backup = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    foxtrot = foxtrot[options];
                    backup = backup.bind(zulu)(foxtrot);
                    foxtrot = backup.isContactSyncEnabled;
                    romeo = foxtrot.bind(backup)(romeo);
                    backup = _closure1_slot1;
                    kilo = _closure1_slot2;
                    foxtrot = 11;
                    foxtrot = kilo[foxtrot];
                    foxtrot = backup.bind(zulu)(foxtrot);
                    if(romeo) { _fun94812_ip = 548; continue _fun94812 }
 497:
                    backup = foxtrot.updateContactSyncEnabled;
                    romeo = {};
                    kilo = true;
                    romeo['enabled'] = kilo;
                    kilo = oscar;
                    sizing = sizing != kilo;
                    kilo = undefined;
                    if(!sizing) { _fun94812_ip = 526; continue _fun94812 }
 523:
                    kilo = oscar;
 526:
                    romeo['name'] = kilo;
                    romeo = backup.bind(foxtrot)(romeo);
                    SaveGenerator(address=539);
 537:
                    return romeo;
 539:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=13);
                    if(!backup) { _fun94812_ip = 572; continue _fun94812 }
 545: // try_end0
                    return romeo;
 548: // try_start_1
                    romeo = foxtrot.updateName;
                    oscar = romeo.bind(foxtrot)(oscar);
                    SaveGenerator(address=563);
 561:
                    return oscar;
 563:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=11);
                    if(romeo) { _fun94812_ip = 751; continue _fun94812 }
 572:
                    romeo = _closure1_slot19;
                    verify = romeo.SUGGESTIONS;
                    foxtrot = _closure1_slot0;
                    romeo = _closure1_slot2;
                    backup = 9;
                    kilo = romeo[backup];
                    kilo = foxtrot.bind(zulu)(kilo);
                    kilo = kilo.Steps;
                    yankee = kilo.SUGGESTIONS_RESULTS;
                    romeo = romeo[options];
                    foxtrot = foxtrot.bind(zulu)(romeo);
                    romeo = foxtrot.uploadContacts;
                    kilo = false;
                    golf = romeo.bind(foxtrot)(golf, kilo);
                    SaveGenerator(address=641);
 639:
                    return golf;
 641:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=11);
                    if(romeo) { _fun94812_ip = 748; continue _fun94812 }
 647:
                    sizing = _closure1_slot8;
                    foxtrot = golf.friend_suggestions;
                    romeo = golf.bulk_add_token;
                    romeo = sizing.bind(zulu)(foxtrot, romeo);
                    romeo = golf.friend_suggestions;
                    sizing = romeo.length;
                    foxtrot = _closure1_slot0;
                    romeo = _closure1_slot2;
                    romeo = romeo[backup];
                    backup = foxtrot.bind(zulu)(romeo);
                    foxtrot = backup.trackFlowStep;
                    vacuum = yankee;
                    yankee = {};
                    yankee['num_contacts_found'] = sizing;
                    sequence = backup;
                    control = false;
                    source = false;
                    update = yankee;
                    yankee = sequence[foxtrot](vacuum, control, source, update, echo);
                    yankee = offset;
                    offset = yankee.navigate;
                    verify = offset.bind(yankee)(verify);
 743: // try_end1
                    _fun94812_ip = 1022; continue _fun94812;
 748:
                    return golf;
 751:
                    return oscar;
 754:
                    return report;
 757: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=5);
                    verify = _closure1_slot1;
                    report = _closure1_slot2;
                    golf = 10;
                    golf = report[golf];
                    yankee = verify.bind(zulu)(golf);
                    offset = yankee.track;
                    golf = _closure1_slot21;
                    verify = golf.PERMISSIONS_ACKED;
                    golf = {};
                    romeo = _closure1_slot24;
                    romeo = romeo.CONTACTS;
                    golf['type'] = romeo;
                    romeo = _closure1_slot23;
                    romeo = romeo.DENIED;
                    golf['action'] = romeo;
                    golf = offset.bind(yankee)(verify, golf);
                    golf = _closure1_slot0;
                    report = report[options];
                    report = golf.bind(zulu)(report);
                    report = report.ContactSyncPermissionDenied;
                    if(!(oscar !== report)) { _fun94812_ip = 927; continue _fun94812 }
 853:
                    oscar = _closure1_slot6;
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    report = 12;
                    golf = offset[report];
                    golf = verify.bind(zulu)(golf);
                    options = golf.intl;
                    golf = options.string;
                    report = offset[report];
                    report = verify.bind(zulu)(report);
                    report = report.t;
                    report = report.fGrbRU;
                    report = golf.bind(options)(report);
                    report = oscar.bind(zulu)(report);
                    report = _closure1_slot16;
                    report = report.bind(zulu)();
                    _fun94812_ip = 1022; continue _fun94812;
 927:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    report = 9;
                    options = golf[report];
                    offset = oscar.bind(zulu)(options);
                    verify = offset.trackFlowStep;
                    report = golf[report];
                    report = oscar.bind(zulu)(report);
                    report = report.Steps;
                    vacuum = report.LANDING;
                    golf = {};
                    report = 'denied';
                    golf['mobile_contacts_permission'] = report;
                    control = true;
                    source = false;
                    sequence = offset;
                    update = golf;
                    report = sequence[verify](vacuum, control, source, update, echo);
                    report = _closure1_slot7;
                    tango = _closure1_slot18;
                    tango = tango.UNAUTHORIZED;
                    tango = report.bind(zulu)(tango);
 1022:
                    return zulu;
 1025:
                    return mike;
 1028:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot26 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: _handlePhoneVerificationComplete
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun94815: for(var _fun94815_ip = 0; ; ) switch(_fun94815_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun94815_ip = 44; continue _fun94815 }
 7:
                    report = _closure1_slot25;
                    zulu = undefined;
                    tango = argFoo;
                    mike = argBar;
                    mike = report.bind(zulu)(tango, mike);
                    SaveGenerator(address=32);
 30:
                    return mike;
 32:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun94815_ip = 41; continue _fun94815 }
 38:
                    return zulu;
 41:
                    return mike;
 44:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot27 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = function() { // Original name: _startContactSync
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun94818: for(var _fun94818_ip = 0; ; ) switch(_fun94818_ip) {
 0:
                    StartGenerator();
                    tango = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun94818_ip = 169; continue _fun94818 }
 13:
                    report = _closure1_slot5;
                    zulu = report.getCurrentUser;
                    zulu = zulu.bind(report)();
                    oscar = null;
                    options = oscar == zulu;
                    report = undefined;
                    golf = undefined;
                    if(options) { _fun94818_ip = 48; continue _fun94818 }
 42:
                    golf = zulu.phone;
 48:
                    if(!(oscar != golf)) { _fun94818_ip = 78; continue _fun94818 }
 52:
                    zulu = _closure1_slot25;
                    zulu = zulu.bind(report)(golf, tango);
                    SaveGenerator(address=66);
 64:
                    return zulu;
 66:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golf) { _fun94818_ip = 75; continue _fun94818 }
 72:
                    return report;
 75:
                    return zulu;
 78:
                    golf = _closure1_slot0;
                    offset = _closure1_slot2;
                    zulu = 9;
                    options = offset[zulu];
                    verify = golf.bind(report)(options);
                    options = verify.trackFlowStep;
                    zulu = offset[zulu];
                    zulu = golf.bind(report)(zulu);
                    zulu = zulu.Steps;
                    golf = zulu.ADD_PHONE_NUMBER;
                    zulu = false;
                    zulu = options.bind(verify)(golf, zulu, zulu);
                    zulu = _closure1_slot9;
                    zulu = zulu.bind(report)(oscar);
                    zulu = tango.navigate;
                    mike = _closure1_slot19;
                    mike = mike.ADD_PHONE;
                    mike = zulu.bind(tango)(mike);
                    mike = undefined;
                    return mike;
 169:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot28 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: _bulkAddFriendSuggestions
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun94821: for(var _fun94821_ip = 0; ; ) switch(_fun94821_ip) {
 0:
                    StartGenerator();
                    tango = argFoo;
                    mike = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(report) { _fun94821_ip = 839; continue _fun94821 }
 18:
                    offset = tango;
                    var _closure4_slot0 = tango;
                    options = mike;
                    var _closure4_slot1 = mike;
                    mike = undefined;
                    yankee = undefined;
                    var _closure4_slot2 = mike;
                    zulu = undefined;
                    report = _closure1_slot12;
                    tango = report.getState;
                    tango = tango.bind(report)();
                    report = tango.suggestions;
                    yankee = report;
                    _closure4_slot2 = report;
                    report = tango.bulkAddToken;
                    zulu = report;
                    tango = null;
                    if(!(tango == report)) { _fun94821_ip = 137; continue _fun94821 }
 87:
                    report = _closure1_slot33;
                    tango = {'skip': false, 'friendsFound': null, 'friendsAdded': 0, 'back': false};
                    verify = yankee;
                    verify = verify.length;
                    tango['friendsFound'] = verify;
                    verify = options;
                    tango['onComplete'] = verify;
                    tango = report.bind(mike)(tango);
                    _fun94821_ip = 836; continue _fun94821;
 137: // try_start_0
                    report = _closure1_slot0;
                    verify = _closure1_slot2;
                    tango = 8;
                    tango = verify[tango];
                    verify = report.bind(mike)(tango);
                    report = verify.bulkAddFriends;
                    tango = offset;
                    zulu = report.bind(verify)(tango, zulu);
                    SaveGenerator(address=176);
 174:
                    return zulu;
 176:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun94821_ip = 634; continue _fun94821 }
 185:
                    tango = zulu.failed_requests;
                    report = tango.length;
                    tango = 0;
                    if(!(!(report > tango))) { _fun94821_ip = 323; continue _fun94821 }
 204:
                    foxtrot = _closure1_slot1;
                    backup = _closure1_slot2;
                    tango = 14;
                    tango = backup[tango];
                    verify = foxtrot.bind(mike)(tango);
                    report = verify.open;
                    tango = {};
                    romeo = 'TOAST_ADD_FRIENDS';
                    tango['key'] = romeo;
                    output = _closure1_slot0;
                    romeo = 12;
                    kilo = backup[romeo];
                    kilo = output.bind(mike)(kilo);
                    sizing = kilo.intl;
                    kilo = sizing.string;
                    romeo = backup[romeo];
                    romeo = output.bind(mike)(romeo);
                    romeo = romeo.t;
                    romeo = romeo.+hjBfX;
                    romeo = kilo.bind(sizing)(romeo);
                    tango['content'] = romeo;
                    romeo = 15;
                    romeo = backup[romeo];
                    romeo = foxtrot.bind(mike)(romeo);
                    tango['icon'] = romeo;
                    tango = report.bind(verify)(tango);
                    _fun94821_ip = 581; continue _fun94821;
 323:
                    verify = offset;
                    report = verify.map;
                    tango = function(argFoo) {
                        mike = argFoo;
                        var _closure5_slot0 = mike;
                        zulu = _closure4_slot2;
                        mike = zulu.find;
                        entity = function(argFoo) {
                            entity = argFoo;
                            entity = entity.suggested_user;
                            mike = entity.id;
                            entity = _closure5_slot0;
                            entity = mike === entity;
                            return entity;
                        };
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    verify = report.bind(verify)(tango);
                    report = verify.filter;
                    tango = global;
                    tango = tango.Boolean;
                    source = report.bind(verify)(tango);
                    report = _closure1_slot1;
                    sizing = _closure1_slot2;
                    tango = 13;
                    tango = sizing[tango];
                    verify = report.bind(mike)(tango);
                    report = verify.show;
                    tango = {};
                    kilo = _closure1_slot0;
                    romeo = 12;
                    foxtrot = sizing[romeo];
                    foxtrot = kilo.bind(mike)(foxtrot);
                    output = foxtrot.intl;
                    backup = output.string;
                    foxtrot = sizing[romeo];
                    foxtrot = kilo.bind(mike)(foxtrot);
                    foxtrot = foxtrot.t;
                    foxtrot = foxtrot.6moJ8v;
                    foxtrot = backup.bind(output)(foxtrot);
                    tango['title'] = foxtrot;
                    foxtrot = sizing[romeo];
                    foxtrot = kilo.bind(mike)(foxtrot);
                    result = foxtrot.intl;
                    output = result.formatToPlainString;
                    foxtrot = sizing[romeo];
                    foxtrot = kilo.bind(mike)(foxtrot);
                    foxtrot = foxtrot.t;
                    backup = foxtrot.045SiI;
                    foxtrot = {};
                    update = source.join;
                    echo = ', ';
                    echo = update.bind(source)(echo);
                    foxtrot['name'] = echo;
                    foxtrot = output.bind(result)(backup, foxtrot);
                    tango['body'] = foxtrot;
                    foxtrot = sizing[romeo];
                    foxtrot = kilo.bind(mike)(foxtrot);
                    backup = foxtrot.intl;
                    foxtrot = backup.string;
                    romeo = sizing[romeo];
                    romeo = kilo.bind(mike)(romeo);
                    romeo = romeo.t;
                    romeo = romeo.BddRzc;
                    romeo = foxtrot.bind(backup)(romeo);
                    tango['confirmText'] = romeo;
                    romeo = function() { // Original name: onConfirm
                        zulu = _closure1_slot33;
                        mike = {};
                        tango = false;
                        mike['skip'] = tango;
                        report = _closure4_slot2;
                        report = report.length;
                        mike['friendsFound'] = report;
                        report = _closure4_slot0;
                        report = report.length;
                        mike['friendsAdded'] = report;
                        mike['back'] = tango;
                        entity = _closure4_slot1;
                        mike['onComplete'] = entity;
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    tango['onConfirm'] = romeo;
                    tango = report.bind(verify)(tango);
 581:
                    report = _closure1_slot33;
                    tango = {};
                    verify = false;
                    tango['skip'] = verify;
                    yankee = yankee.length;
                    tango['friendsFound'] = yankee;
                    offset = offset.length;
                    tango['friendsAdded'] = offset;
                    tango['back'] = verify;
                    tango['onComplete'] = options;
                    tango = report.bind(mike)(tango);
 629: // try_end0
                    _fun94821_ip = 836; continue _fun94821;
 634:
                    return zulu;
 637: // catch_target0
                    CatchBlockStart(arg_register=2);
                    tango = _closure1_slot1;
                    yankee = _closure1_slot2;
                    zulu = 13;
                    zulu = yankee[zulu];
                    report = tango.bind(mike)(zulu);
                    tango = report.show;
                    zulu = {};
                    offset = _closure1_slot0;
                    golf = 12;
                    options = yankee[golf];
                    options = offset.bind(mike)(options);
                    romeo = options.intl;
                    verify = romeo.string;
                    options = yankee[golf];
                    options = offset.bind(mike)(options);
                    options = options.t;
                    options = options.6moJ8v;
                    options = verify.bind(romeo)(options);
                    zulu['title'] = options;
                    options = yankee[golf];
                    options = offset.bind(mike)(options);
                    romeo = options.intl;
                    verify = romeo.string;
                    options = yankee[golf];
                    options = offset.bind(mike)(options);
                    options = options.t;
                    options = options.Gt2L39;
                    options = verify.bind(romeo)(options);
                    zulu['body'] = options;
                    options = yankee[golf];
                    options = offset.bind(mike)(options);
                    verify = options.intl;
                    options = verify.string;
                    golf = yankee[golf];
                    golf = offset.bind(mike)(golf);
                    golf = golf.t;
                    golf = golf.BddRzc;
                    golf = options.bind(verify)(golf);
                    zulu['confirmText'] = golf;
                    oscar = function() { // Original name: onConfirm
                        zulu = _closure1_slot33;
                        mike = {};
                        tango = false;
                        mike['skip'] = tango;
                        report = _closure4_slot2;
                        report = report.length;
                        mike['friendsFound'] = report;
                        report = _closure4_slot0;
                        report = report.length;
                        mike['friendsAdded'] = report;
                        mike['back'] = tango;
                        entity = _closure4_slot1;
                        mike['onComplete'] = entity;
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    zulu['onConfirm'] = oscar;
                    zulu = tango.bind(report)(zulu);
 836:
                    return mike;
 839:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot29 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = function() { // Original name: _verifyPhone
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun94828: for(var _fun94828_ip = 0; ; ) switch(_fun94828_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun94828_ip = 373; continue _fun94828 }
 10:
                    mike = argFoo;
                    golf = undefined;
                    options = undefined;
                    offset = undefined;
 19: // try_start_0
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 16;
                    zulu = report[zulu];
                    tango = tango.bind(golf)(zulu);
                    zulu = tango.addPhoneWithoutPassword;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=57);
 55:
                    return mike;
 57:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun94828_ip = 80; continue _fun94828 }
 63: // try_end0
                    zulu = {'codeIntercepted': true, 'addedPhone': true};
                    return zulu;
 80:
                    return mike;
 83: // catch_target0
                    CatchBlockStart(arg_register=1);
                    oscar = mike;
                    zulu = mike.status;
                    mike = 301;
                    if(!(mike !== zulu)) { _fun94828_ip = 356; continue _fun94828 }
 106:
                    mike = oscar;
                    zulu = mike.status;
                    mike = 404;
                    if(!(mike !== zulu)) { _fun94828_ip = 356; continue _fun94828 }
 127:
                    zulu = _closure1_slot1;
                    romeo = _closure1_slot2;
                    mike = 14;
                    mike = romeo[mike];
                    tango = zulu.bind(golf)(mike);
                    zulu = tango.open;
                    mike = {};
                    verify = 'PHONE_FAILED_TO_ADD';
                    mike['key'] = verify;
                    yankee = _closure1_slot0;
                    verify = 17;
                    verify = romeo[verify];
                    verify = yankee.bind(golf)(verify);
                    yankee = verify.APIError;
                    foxtrot = oscar;
                    verify = yankee.prototype;
                    verify = Object.create(verify, {constructor: {value: yankee}});
                    backup = verify;
                    oscar = new backup[yankee](foxtrot, romeo);
                    oscar = oscar instanceof Object ? oscar : verify;
                    offset = oscar;
                    verify = null;
                    yankee = verify == oscar;
                    oscar = undefined;
                    if(yankee) { _fun94828_ip = 240; continue _fun94828 }
 227:
                    yankee = offset;
                    offset = yankee.getAnyErrorMessage;
                    oscar = offset.bind(yankee)();
 240:
                    options = oscar;
                    if(!(verify == oscar)) { _fun94828_ip = 304; continue _fun94828 }
 247:
                    yankee = _closure1_slot0;
                    romeo = _closure1_slot2;
                    oscar = 12;
                    verify = romeo[oscar];
                    verify = yankee.bind(golf)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    oscar = romeo[oscar];
                    oscar = yankee.bind(golf)(oscar);
                    oscar = oscar.t;
                    oscar = oscar.cCVXOT;
                    oscar = verify.bind(offset)(oscar);
                    _fun94828_ip = 307; continue _fun94828;
 304:
                    oscar = options;
 307:
                    mike['content'] = oscar;
                    oscar = _closure1_slot1;
                    options = _closure1_slot2;
                    report = 18;
                    report = options[report];
                    report = oscar.bind(golf)(report);
                    mike['icon'] = report;
                    mike = zulu.bind(tango)(mike);
                    mike = {'codeIntercepted': true, 'addedPhone': false};
                    _fun94828_ip = 370; continue _fun94828;
 356:
                    mike = {'codeIntercepted': false, 'addedPhone': false};
 370:
                    return mike;
 373:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot30 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot30 = entity;
    oscar = function(argFoo, argBar, argBaz) { // Original name: openContactSyncModal
        _fun94829: for(var _fun94829_ip = 0; ; ) switch(_fun94829_ip) {
 0:
            golf = argFoo;
            oscar = argBar;
            zulu = _closure1_slot32;
            entity = undefined;
            zulu = zulu.bind(entity)();
            tango = golf.initialRoutes;
            zulu = null;
            if(!(zulu == tango)) { _fun94829_ip = 50; continue _fun94829 }
 31:
            tango = _closure1_slot14;
            zulu = _closure1_slot13;
            zulu = zulu.NORMAL;
            zulu = tango.bind(entity)(zulu);
 50:
            if(!oscar) { _fun94829_ip = 90; continue _fun94829 }
 53:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 9;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.trackFlowStart;
            zulu = {};
            zulu['location'] = oscar;
            zulu = tango.bind(report)(zulu);
 90:
            report = _closure1_slot1;
            zulu = _closure1_slot2;
            tango = 19;
            tango = zulu[tango];
            oscar = report.bind(entity)(tango);
            report = oscar.pushLazy;
            options = _closure1_slot0;
            tango = 21;
            tango = zulu[tango];
            options = options.bind(entity)(tango);
            tango = 20;
            tango = zulu[tango];
            zulu = zulu.paths;
            tango = options.bind(entity)(tango, zulu);
            zulu = {};
            options = golf.initialRoutes;
            zulu['initialRoutes'] = options;
            options = golf.openSettings;
            zulu['openSettingsSheet'] = options;
            golf = golf.customLandingPage;
            zulu['customLandingPage'] = golf;
            mike = _closure1_slot20;
            tango = report.bind(oscar)(tango, zulu, mike);
            zulu = tango.then;
            mike = argBaz;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    var _closure1_slot31 = oscar;
    tango = function() { // Original name: refreshContactSyncPermissionStatus
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 8;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.checkContactPermissions;
        tango = mike.bind(zulu)();
        zulu = tango.then;
        mike = function(argFoo) {
            zulu = _closure1_slot7;
            entity = undefined;
            mike = argFoo;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot32 = tango;
    mike = function(argFoo) { // Original name: closeContactSyncModal
        _fun94832: for(var _fun94832_ip = 0; ; ) switch(_fun94832_ip) {
 0:
            zulu = argFoo;
            oscar = zulu.skip;
            entity = undefined;
            if(!(oscar === entity)) { _fun94832_ip = 19; continue _fun94832 }
 17:
            oscar = true;
 19:
            report = zulu.friendsFound;
            tango = zulu.friendsAdded;
            options = zulu.back;
            if(!(options === entity)) { _fun94832_ip = 43; continue _fun94832 }
 41:
            options = false;
 43:
            zulu = zulu.onComplete;
            golf = null;
            if(!(golf == zulu)) { _fun94832_ip = 82; continue _fun94832 }
 55:
            golf = function() { // Original name: oldCloseContactSyncModal
                _fun94835: for(var _fun94835_ip = 0; ; ) switch(_fun94835_ip) {
 0:
                    verify = arguments[0];
                    golf = arguments[3];
                    entity = undefined;
                    if(!(verify === entity)) { _fun94835_ip = 16; continue _fun94835 }
 14:
                    verify = true;
 16:
                    var _closure3_slot0 = verify;
                    if(!(golf === entity)) { _fun94835_ip = 26; continue _fun94835 }
 24:
                    golf = false;
 26:
                    var _closure3_slot1 = golf;
                    var _closure3_slot2 = entity;
                    tango = _closure1_slot15;
                    tango = tango.bind(entity)();
                    _closure3_slot2 = tango;
                    if(golf) { _fun94835_ip = 102; continue _fun94835 }
 52:
                    oscar = _closure1_slot0;
                    options = _closure1_slot2;
                    report = 9;
                    report = options[report];
                    options = oscar.bind(entity)(report);
                    oscar = options.trackFlowEnd;
                    report = {};
                    offset = arguments[1];
                    report['num_contacts_found'] = offset;
                    offset = arguments[2];
                    report['num_contacts_added'] = offset;
                    report = oscar.bind(options)(verify, report);
 102:
                    if(!tango) { _fun94835_ip = 186; continue _fun94835 }
 105:
                    report = _closure1_slot1;
                    verify = _closure1_slot2;
                    tango = 19;
                    tango = verify[tango];
                    oscar = report.bind(entity)(tango);
                    report = oscar.updateAnimation;
                    tango = _closure1_slot20;
                    options = _closure1_slot0;
                    zulu = 23;
                    zulu = verify[zulu];
                    zulu = options.bind(entity)(zulu);
                    zulu = zulu.ModalAnimation;
                    if(golf) { _fun94835_ip = 174; continue _fun94835 }
 160:
                    golf = zulu.SLIDE_IN_OUT;
                    golf = report.bind(oscar)(tango, golf);
                    _fun94835_ip = 186; continue _fun94835;
 174:
                    zulu = zulu.SLIDE_IN_OUT_REVERSE;
                    zulu = report.bind(oscar)(tango, zulu);
 186:
                    zulu = global;
                    tango = zulu.setTimeout;
                    zulu = function() {
                        _fun94836: for(var _fun94836_ip = 0; ; ) switch(_fun94836_ip) {
 0:
                            report = _closure1_slot1;
                            entity = _closure1_slot2;
                            zulu = 19;
                            tango = entity[zulu];
                            entity = undefined;
                            oscar = report.bind(entity)(tango);
                            report = oscar.popWithKey;
                            tango = _closure1_slot20;
                            tango = report.bind(oscar)(tango);
                            tango = _closure3_slot2;
                            if(!tango) { _fun94836_ip = 191; continue _fun94836 }
 53:
                            options = _closure3_slot1;
                            report = _closure1_slot1;
                            tango = _closure1_slot2;
                            zulu = tango[zulu];
                            golf = report.bind(entity)(zulu);
                            oscar = golf.updateAnimation;
                            report = _closure1_slot20;
                            zulu = _closure1_slot0;
                            mike = 23;
                            mike = tango[mike];
                            mike = zulu.bind(entity)(mike);
                            mike = mike.ModalAnimation;
                            if(options) { _fun94836_ip = 157; continue _fun94836 }
 109:
                            options = mike.SLIDE_IN_OUT;
                            options = oscar.bind(golf)(report, options);
                            options = 24;
                            options = tango[options];
                            offset = zulu.bind(entity)(options);
                            verify = offset.nextOnboardingStep;
                            options = {};
                            yankee = _closure3_slot0;
                            options['skip'] = yankee;
                            options = verify.bind(offset)(options);
                            _fun94836_ip = 191; continue _fun94836;
 157:
                            mike = mike.SLIDE_IN_OUT_REVERSE;
                            mike = oscar.bind(golf)(report, mike);
                            mike = 24;
                            mike = tango[mike];
                            zulu = zulu.bind(entity)(mike);
                            mike = zulu.previousOnboardingStep;
                            mike = mike.bind(zulu)();
 191:
                            return entity;
                        }
                    };
                    mike = 0;
                    mike = tango.bind(entity)(zulu, mike);
                    return entity;
                }
            };
            foxtrot = undefined;
            romeo = oscar;
            yankee = report;
            offset = tango;
            verify = options;
            golf = foxtrot[golf](romeo, yankee, offset, verify, options);
            _fun94832_ip = 107; continue _fun94832;
 82:
            mike = function(argFoo) { // Original name: redesignCloseContactSyncModal
                _fun94833: for(var _fun94833_ip = 0; ; ) switch(_fun94833_ip) {
 0:
                    zulu = arguments[1];
                    entity = undefined;
                    if(!(zulu === entity)) { _fun94833_ip = 11; continue _fun94833 }
 9:
                    zulu = true;
 11:
                    mike = _closure1_slot15;
                    mike = mike.bind(entity)();
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 9;
                    tango = oscar[tango];
                    oscar = report.bind(entity)(tango);
                    report = oscar.trackFlowEnd;
                    tango = {};
                    golf = arguments[2];
                    tango['num_contacts_found'] = golf;
                    golf = arguments[3];
                    tango['num_contacts_added'] = golf;
                    tango = report.bind(oscar)(zulu, tango);
                    if(mike) { _fun94833_ip = 102; continue _fun94833 }
 75:
                    mike = global;
                    report = mike.setTimeout;
                    tango = function() {
                        tango = _closure1_slot1;
                        zulu = _closure1_slot2;
                        entity = 19;
                        zulu = zulu[entity];
                        entity = undefined;
                        tango = tango.bind(entity)(zulu);
                        zulu = tango.popWithKey;
                        mike = _closure1_slot20;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    mike = 0;
                    mike = report.bind(entity)(tango, mike);
                    _fun94833_ip = 110; continue _fun94833;
 102:
                    mike = argFoo;
                    mike = mike.bind(entity)(zulu);
 110:
                    return entity;
                }
            };
            foxtrot = undefined;
            romeo = zulu;
            yankee = oscar;
            offset = report;
            verify = tango;
            mike = foxtrot[mike](romeo, yankee, offset, verify, options);
 107:
            return entity;
        }
    };
    var _closure1_slot33 = mike;
    entity = global;
    romeo = entity.Object;
    yankee = romeo.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, golf);
    entity = 0;
    golf = verify[entity];
    entity = undefined;
    golf = offset.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 1;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 2;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot5 = golf;
    golf = 3;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    offset = golf.setError;
    var _closure1_slot6 = offset;
    offset = golf.setPermissionState;
    var _closure1_slot7 = offset;
    offset = golf.setSuggestions;
    var _closure1_slot8 = offset;
    offset = golf.setPhone;
    var _closure1_slot9 = offset;
    offset = golf.setPhoneToken;
    var _closure1_slot10 = offset;
    offset = golf.setName;
    var _closure1_slot11 = offset;
    offset = golf.useContactSyncModalStore;
    var _closure1_slot12 = offset;
    offset = golf.ContactSyncModes;
    var _closure1_slot13 = offset;
    offset = golf.initialize;
    var _closure1_slot14 = offset;
    golf = golf.getIsOnboarding;
    var _closure1_slot15 = golf;
    golf = 4;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    offset = golf.deleteStoredContacts;
    var _closure1_slot16 = offset;
    golf = golf.setStoredContacts;
    var _closure1_slot17 = golf;
    golf = 5;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    offset = golf.ContactPermissions;
    var _closure1_slot18 = offset;
    offset = golf.ContactSyncScenes;
    var _closure1_slot19 = offset;
    golf = golf.CONTACT_SYNC_MODAL_KEY;
    var _closure1_slot20 = golf;
    golf = 6;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    offset = golf.AnalyticEvents;
    var _closure1_slot21 = offset;
    golf = golf.PlatformTypes;
    var _closure1_slot22 = golf;
    golf = 7;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    offset = golf.NativePermissionStates;
    var _closure1_slot23 = offset;
    golf = golf.NativePermissionTypes;
    var _closure1_slot24 = golf;
    golf = 25;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/contact_sync/native/ContactSyncModalActionCreators.tsx';
    golf = options.bind(verify)(golf);
    golf = function() { // Original name: handlePhoneVerificationComplete
        entity = undefined;
        tango = _closure1_slot27;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['handlePhoneVerificationComplete'] = golf;
    golf = function() { // Original name: startContactSync
        entity = undefined;
        tango = _closure1_slot28;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['startContactSync'] = golf;
    golf = function() { // Original name: bulkAddFriendSuggestions
        entity = undefined;
        tango = _closure1_slot29;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['bulkAddFriendSuggestions'] = golf;
    golf = function(argFoo) { // Original name: goBackToLanding
        tango = argFoo;
        zulu = _closure1_slot0;
        report = _closure1_slot2;
        mike = 9;
        oscar = report[mike];
        entity = undefined;
        golf = zulu.bind(entity)(oscar);
        oscar = golf.trackFlowStep;
        mike = report[mike];
        mike = zulu.bind(entity)(mike);
        mike = mike.Steps;
        report = mike.LANDING;
        zulu = false;
        mike = true;
        mike = oscar.bind(golf)(report, zulu, mike);
        mike = tango.getState;
        mike = mike.bind(tango)();
        mike = mike.routes;
        zulu = tango.pop;
        report = mike.length;
        mike = 1;
        mike = report - mike;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['goBackToLanding'] = golf;
    golf = function(argFoo, argBar) { // Original name: submitPhone
        tango = argBar;
        report = _closure1_slot9;
        entity = undefined;
        zulu = argFoo;
        zulu = report.bind(entity)(zulu);
        report = _closure1_slot0;
        options = _closure1_slot2;
        zulu = 9;
        oscar = options[zulu];
        golf = report.bind(entity)(oscar);
        oscar = golf.trackFlowStep;
        zulu = options[zulu];
        zulu = report.bind(entity)(zulu);
        zulu = zulu.Steps;
        report = zulu.VERIFY_PHONE_NUMBER;
        zulu = false;
        zulu = oscar.bind(golf)(report, zulu, zulu);
        zulu = tango.navigate;
        mike = _closure1_slot19;
        mike = mike.VERIFY_PHONE;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['submitPhone'] = golf;
    golf = function() { // Original name: verifyPhone
        entity = undefined;
        tango = _closure1_slot30;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['verifyPhone'] = golf;
    golf = function(argFoo, argBar) { // Original name: verifyPhoneWithPassword
        tango = argBar;
        report = _closure1_slot0;
        options = _closure1_slot2;
        zulu = 9;
        oscar = options[zulu];
        entity = undefined;
        golf = report.bind(entity)(oscar);
        oscar = golf.trackFlowStep;
        zulu = options[zulu];
        zulu = report.bind(entity)(zulu);
        zulu = zulu.Steps;
        report = zulu.PASSWORD_CONFIRM;
        zulu = false;
        zulu = oscar.bind(golf)(report, zulu, zulu);
        report = _closure1_slot10;
        zulu = argFoo;
        zulu = report.bind(entity)(zulu);
        zulu = tango.navigate;
        mike = _closure1_slot19;
        mike = mike.VERIFY_PASSWORD;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['verifyPhoneWithPassword'] = golf;
    golf = function() { // Original name: upsellDismissed
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 9;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.trackFlowEnd;
        mike = true;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['upsellDismissed'] = golf;
    zulu['openContactSyncModal'] = oscar;
    oscar = function() { // Original name: openContactSyncModalOnboarding
        _fun94845: for(var _fun94845_ip = 0; ; ) switch(_fun94845_ip) {
 0:
            mike = arguments[0];
            entity = undefined;
            if(!(mike === entity)) { _fun94845_ip = 11; continue _fun94845 }
 9:
            mike = false;
 11:
            if(!mike) { _fun94845_ip = 77; continue _fun94845 }
 14:
            zulu = _closure1_slot14;
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 22;
            mike = oscar[mike];
            report = report.bind(entity)(mike);
            mike = report.hasDeferredInvite;
            mike = mike.bind(report)();
            tango = _closure1_slot13;
            if(mike) { _fun94845_ip = 66; continue _fun94845 }
 58:
            mike = tango.ONBOARDING;
            _fun94845_ip = 72; continue _fun94845;
 66:
            mike = tango.ONBOARDING_INVITE;
 72:
            mike = zulu.bind(entity)(mike);
 77:
            verify = _closure1_slot0;
            report = _closure1_slot2;
            options = 9;
            zulu = report[options];
            oscar = verify.bind(entity)(zulu);
            tango = oscar.trackFlowStart;
            zulu = {};
            golf = {};
            options = report[options];
            options = verify.bind(entity)(options);
            options = options.CONTACT_SYNC_ONBOARDING_LOCATION;
            golf['page'] = options;
            zulu['location'] = golf;
            zulu = tango.bind(oscar)(zulu);
            tango = _closure1_slot1;
            zulu = 19;
            zulu = report[zulu];
            oscar = tango.bind(entity)(zulu);
            report = oscar.pushLazy;
            tango = _closure1_slot3;
            zulu = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun94847: for(var _fun94847_ip = 0; ; ) switch(_fun94847_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun94847_ip = 116; continue _fun94847 }
 7:
                        tango = _closure1_slot0;
                        mike = _closure1_slot2;
                        zulu = 21;
                        zulu = mike[zulu];
                        golf = undefined;
                        tango = tango.bind(golf)(zulu);
                        zulu = 20;
                        zulu = mike[zulu];
                        mike = mike.paths;
                        mike = tango.bind(golf)(zulu, mike);
                        SaveGenerator(address=54);
 52:
                        return mike;
 54:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zulu) { _fun94847_ip = 113; continue _fun94847 }
 60:
                        zulu = mike.default;
                        tango = {};
                        oscar = _closure1_slot0;
                        options = _closure1_slot2;
                        report = 23;
                        report = options[report];
                        report = oscar.bind(golf)(report);
                        report = report.ModalAnimation;
                        report = report.SLIDE_IN_OUT;
                        tango['animation'] = report;
                        zulu['modalConfig'] = tango;
                        return zulu;
 113:
                        return mike;
 116:
                        return entity;
                    }
                };
                return entity;
            };
            tango = tango.bind(entity)(zulu);
            zulu = _closure1_slot20;
            mike = {};
            mike = report.bind(oscar)(tango, mike, zulu);
            return entity;
        }
    };
    zulu['openContactSyncModalOnboarding'] = oscar;
    report = function() { // Original name: openContactSyncModalDeeplink
        tango = _closure1_slot31;
        zulu = {};
        entity = 'Deep Link';
        zulu['page'] = entity;
        entity = undefined;
        mike = {};
        mike = tango.bind(entity)(mike, zulu);
        return entity;
    };
    zulu['openContactSyncModalDeeplink'] = report;
    zulu['refreshContactSyncPermissionStatus'] = tango;
    zulu['closeContactSyncModal'] = mike;
    return entity;
})();