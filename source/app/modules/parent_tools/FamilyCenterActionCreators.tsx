// app/modules/parent_tools/FamilyCenterActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = function() { // Original name: _updateLinkForUserId
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 125; continue _fun00001 }
 7:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 4;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = tango.bind(zulu)(mike);
                    report = mike.HTTP;
                    tango = report.patch;
                    mike = {};
                    oscar = _closure1_slot6;
                    oscar = oscar.FAMILY_CENTER_LINKED_USERS;
                    mike['url'] = oscar;
                    oscar = {};
                    golf = argFoo;
                    oscar['linked_user_id'] = golf;
                    golf = argBar;
                    oscar['link_status'] = golf;
                    mike['body'] = oscar;
                    oscar = false;
                    mike['rejectWithError'] = oscar;
                    report = tango.bind(report)(mike);
                    tango = report.then;
                    mike = function(argFoo) {
                        entity = argFoo;
                        entity = entity.body;
                        tango = _closure1_slot1;
                        zulu = _closure1_slot2;
                        mike = 3;
                        zulu = zulu[mike];
                        mike = undefined;
                        tango = tango.bind(mike)(zulu);
                        zulu = tango.dispatch;
                        mike = {};
                        report = 'FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS';
                        mike['type'] = report;
                        mike['linkedUsers'] = entity;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=113);
 111:
                    return mike;
 113:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00002_ip = 122; continue _fun00001 }
 119:
                    return zulu;
 122:
                    return mike;
 125:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot7 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _removeLinkForUserId
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    options = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00004_ip = 121; continue _fun00003 }
 12:
                    var _closure4_slot0 = options;
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 4;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    oscar = tango.HTTP;
                    report = oscar.del;
                    tango = {};
                    golf = _closure1_slot6;
                    golf = golf.FAMILY_CENTER_LINKED_USERS;
                    tango['url'] = golf;
                    golf = {};
                    golf['linked_user_id'] = options;
                    tango['body'] = golf;
                    golf = false;
                    tango['rejectWithError'] = golf;
                    report = report.bind(oscar)(tango);
                    tango = report.then;
                    mike = function(argFoo) {
                        entity = argFoo;
                        entity = entity.body;
                        tango = _closure1_slot1;
                        zulu = _closure1_slot2;
                        mike = 3;
                        zulu = zulu[mike];
                        mike = undefined;
                        tango = tango.bind(mike)(zulu);
                        zulu = tango.dispatch;
                        mike = {};
                        report = 'FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS';
                        mike['type'] = report;
                        mike['linkedUsers'] = entity;
                        report = _closure4_slot0;
                        mike['deletedUserId'] = report;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=109);
 107:
                    return mike;
 109:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00004_ip = 118; continue _fun00003 }
 115:
                    return zulu;
 118:
                    return mike;
 121:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot8 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _getLinkCodeForCurrentUser
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00006_ip = 102; continue _fun00005 }
 7:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 4;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = tango.bind(zulu)(mike);
                    report = mike.HTTP;
                    tango = report.get;
                    mike = {};
                    oscar = _closure1_slot6;
                    oscar = oscar.FAMILY_CENTER_LINK_CODE;
                    mike['url'] = oscar;
                    oscar = false;
                    mike['rejectWithError'] = oscar;
                    report = tango.bind(report)(mike);
                    tango = report.then;
                    mike = function(argFoo) {
                        entity = argFoo;
                        entity = entity.body;
                        entity = entity.link_code;
                        tango = _closure1_slot1;
                        zulu = _closure1_slot2;
                        mike = 3;
                        zulu = zulu[mike];
                        mike = undefined;
                        tango = tango.bind(mike)(zulu);
                        zulu = tango.dispatch;
                        mike = {};
                        report = 'FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS';
                        mike['type'] = report;
                        mike['linkCode'] = entity;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=90);
 88:
                    return mike;
 90:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00006_ip = 99; continue _fun00005 }
 96:
                    return zulu;
 99:
                    return mike;
 102:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot9 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.FamilyCenterAction;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    report = tango.AnalyticEvents;
    var _closure1_slot5 = report;
    tango = tango.Endpoints;
    var _closure1_slot6 = tango;
    tango = {};
    report = function() { // Original name: initialPageLoad
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00008_ip = 358; continue _fun00007 }
 10:
                    zulu = _closure1_slot1;
                    report = _closure1_slot2;
                    verify = 3;
                    mike = report[verify];
                    oscar = undefined;
                    golf = zulu.bind(oscar)(mike);
                    zulu = golf.dispatch;
                    mike = {};
                    options = 'FAMILY_CENTER_FETCH_START';
                    mike['type'] = options;
                    mike = zulu.bind(golf)(mike);
                    zulu = _closure1_slot0;
                    mike = 4;
                    mike = report[mike];
                    mike = zulu.bind(oscar)(mike);
                    report = mike.HTTP;
                    zulu = report.get;
                    mike = {};
                    golf = _closure1_slot6;
                    golf = golf.FAMILY_CENTER_TEEN_ACTIVITY_ME;
                    mike['url'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = zulu.bind(report)(mike);
                    SaveGenerator(address=114);
 112:
                    return mike;
 114:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00008_ip = 355; continue _fun00007 }
 123:
                    zulu = mike.body;
                    yankee = zulu.teen_audit_log;
                    options = zulu.linked_users;
                    golf = zulu.users;
                    zulu = {};
                    offset = null;
                    romeo = offset == yankee;
                    report = undefined;
                    if(romeo) { _fun00008_ip = 165; continue _fun00007 }
 159:
                    report = yankee.teen_user_id;
 165:
                    zulu['teenId'] = report;
                    romeo = offset == yankee;
                    report = undefined;
                    if(romeo) { _fun00008_ip = 185; continue _fun00007 }
 179:
                    report = yankee.range_start_id;
 185:
                    zulu['rangeStartId'] = report;
                    romeo = offset == yankee;
                    report = undefined;
                    if(romeo) { _fun00008_ip = 205; continue _fun00007 }
 199:
                    report = yankee.totals;
 205:
                    if(!(offset == report)) { _fun00008_ip = 211; continue _fun00007 }
 209:
                    report = {};
 211:
                    zulu['totals'] = report;
                    romeo = offset == yankee;
                    report = undefined;
                    if(romeo) { _fun00008_ip = 231; continue _fun00007 }
 225:
                    report = yankee.actions;
 231:
                    if(!(offset == report)) { _fun00008_ip = 239; continue _fun00007 }
 235:
                    report = new Array(0);
 239:
                    zulu['actions'] = report;
                    romeo = offset == yankee;
                    report = undefined;
                    if(romeo) { _fun00008_ip = 259; continue _fun00007 }
 253:
                    report = yankee.users;
 259:
                    if(!(offset == report)) { _fun00008_ip = 267; continue _fun00007 }
 263:
                    report = new Array(0);
 267:
                    zulu['users'] = report;
                    romeo = offset == yankee;
                    report = undefined;
                    if(romeo) { _fun00008_ip = 287; continue _fun00007 }
 281:
                    report = yankee.guilds;
 287:
                    if(!(offset == report)) { _fun00008_ip = 295; continue _fun00007 }
 291:
                    report = new Array(0);
 295:
                    zulu['guilds'] = report;
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    tango = tango[verify];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    verify = 'FAMILY_CENTER_INITIAL_LOAD';
                    tango['type'] = verify;
                    tango['familyCenterTeenActivity'] = zulu;
                    tango['linkedUsers'] = options;
                    tango['users'] = golf;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 355:
                    return mike;
 358:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    tango['initialPageLoad'] = report;
    report = function() { // Original name: fetchLinkedUsers
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00010_ip = 167; continue _fun00009 }
 10:
                    zulu = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 4;
                    mike = report[mike];
                    oscar = undefined;
                    mike = zulu.bind(oscar)(mike);
                    report = mike.HTTP;
                    zulu = report.get;
                    mike = {};
                    golf = _closure1_slot6;
                    golf = golf.FAMILY_CENTER_LINKED_USERS;
                    mike['url'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = zulu.bind(report)(mike);
                    SaveGenerator(address=76);
 74:
                    return mike;
 76:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00010_ip = 164; continue _fun00009 }
 82:
                    report = mike.body;
                    zulu = {};
                    golf = report.linked_users;
                    zulu['linkedUsers'] = golf;
                    report = report.users;
                    zulu['users'] = report;
                    report = _closure1_slot1;
                    golf = _closure1_slot2;
                    tango = 3;
                    tango = golf[tango];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS';
                    tango['type'] = golf;
                    verify = tango;
                    options = zulu;
                    golf = copyDataProperties(verify, options);
                    tango = report.bind(oscar)(tango);
                    return zulu;
 164:
                    return mike;
 167:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    tango['fetchLinkedUsers'] = report;
    report = function(argFoo, argBar) { // Original name: requestLink
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00012_ip = 194; continue _fun00011 }
 10:
                    zulu = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 4;
                    mike = report[mike];
                    oscar = undefined;
                    mike = zulu.bind(oscar)(mike);
                    report = mike.HTTP;
                    zulu = report.post;
                    mike = {};
                    golf = _closure1_slot6;
                    golf = golf.FAMILY_CENTER_LINKED_USERS;
                    mike['url'] = golf;
                    golf = {};
                    verify = _closure2_slot0;
                    golf['recipient_id'] = verify;
                    options = _closure2_slot1;
                    golf['code'] = options;
                    mike['body'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = zulu.bind(report)(mike);
                    SaveGenerator(address=103);
 101:
                    return mike;
 103:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00012_ip = 191; continue _fun00011 }
 109:
                    report = mike.body;
                    zulu = {};
                    golf = report.linked_users;
                    zulu['linkedUsers'] = golf;
                    report = report.users;
                    zulu['users'] = report;
                    report = _closure1_slot1;
                    golf = _closure1_slot2;
                    tango = 3;
                    tango = golf[tango];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'FAMILY_CENTER_REQUEST_LINK_SUCCESS';
                    tango['type'] = golf;
                    yankee = tango;
                    offset = zulu;
                    golf = copyDataProperties(yankee, offset);
                    tango = report.bind(oscar)(tango);
                    return zulu;
 191:
                    return mike;
 194:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    tango['requestLink'] = report;
    report = function(argFoo) { // Original name: fetchTeenActivity
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00014_ip = 262; continue _fun00013 }
 10:
                    zulu = _closure1_slot1;
                    report = _closure1_slot2;
                    golf = 3;
                    mike = report[golf];
                    oscar = undefined;
                    options = zulu.bind(oscar)(mike);
                    zulu = options.dispatch;
                    mike = {};
                    verify = 'FAMILY_CENTER_FETCH_START';
                    mike['type'] = verify;
                    mike = zulu.bind(options)(mike);
                    options = _closure1_slot6;
                    zulu = options.FAMILY_CENTER_TEEN_ACTIVITY;
                    mike = _closure2_slot0;
                    options = zulu.bind(options)(mike);
                    zulu = _closure1_slot0;
                    mike = 4;
                    mike = report[mike];
                    mike = zulu.bind(oscar)(mike);
                    report = mike.HTTP;
                    zulu = report.get;
                    mike = {};
                    mike['url'] = options;
                    options = false;
                    mike['rejectWithError'] = options;
                    mike = zulu.bind(report)(mike);
                    SaveGenerator(address=126);
 124:
                    return mike;
 126:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00014_ip = 259; continue _fun00013 }
 135:
                    zulu = mike.body;
                    report = zulu.teen_audit_log;
                    zulu = {};
                    options = report.teen_user_id;
                    zulu['teenId'] = options;
                    options = report.range_start_id;
                    zulu['rangeStartId'] = options;
                    options = report.totals;
                    zulu['totals'] = options;
                    options = report.actions;
                    zulu['actions'] = options;
                    options = report.users;
                    zulu['users'] = options;
                    report = report.guilds;
                    zulu['guilds'] = report;
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    tango = tango[golf];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS';
                    tango['type'] = golf;
                    tango['familyCenterTeenActivity'] = zulu;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 259:
                    return mike;
 262:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    tango['fetchTeenActivity'] = report;
    report = function(argFoo, argBar, argBaz, argCorge) { // Original name: fetchMoreTeenActivity
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        mike = argCorge;
        var _closure2_slot3 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00016_ip = 299; continue _fun00015 }
 10:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 4;
                    mike = tango[mike];
                    oscar = undefined;
                    mike = zulu.bind(oscar)(mike);
                    tango = mike.HTTP;
                    zulu = tango.get;
                    mike = {};
                    yankee = _closure1_slot6;
                    offset = yankee.FAMILY_CENTER_TEEN_ACTIVITY_MORE;
                    output = _closure2_slot0;
                    sizing = _closure2_slot1;
                    kilo = _closure2_slot2;
                    backup = _closure2_slot3;
                    result = yankee;
                    report = result[offset](output, sizing, kilo, backup, foxtrot);
                    mike['url'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=102);
 100:
                    return mike;
 102:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00016_ip = 296; continue _fun00015 }
 111:
                    zulu = mike.body;
                    zulu = zulu.teen_audit_log;
                    golf = {};
                    tango = zulu.teen_user_id;
                    golf['teenId'] = tango;
                    tango = zulu.range_start_id;
                    golf['rangeStartId'] = tango;
                    tango = zulu.actions;
                    golf['actions'] = tango;
                    tango = zulu.users;
                    golf['users'] = tango;
                    tango = zulu.guilds;
                    golf['guilds'] = tango;
                    report = _closure1_slot1;
                    options = _closure1_slot2;
                    tango = 5;
                    tango = options[tango];
                    yankee = report.bind(oscar)(tango);
                    offset = yankee.track;
                    tango = _closure1_slot5;
                    verify = tango.FAMILY_CENTER_ACTION;
                    tango = {};
                    foxtrot = _closure1_slot4;
                    foxtrot = foxtrot.LoadMore;
                    tango['action'] = foxtrot;
                    foxtrot = _closure2_slot0;
                    tango['selected_teen_id'] = foxtrot;
                    romeo = _closure2_slot1;
                    tango['action_display_type'] = romeo;
                    tango = offset.bind(yankee)(verify, tango);
                    tango = 3;
                    tango = options[tango];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    options = 'FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS';
                    tango['type'] = options;
                    tango['familyCenterTeenActivity'] = golf;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 296:
                    return mike;
 299:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    tango['fetchMoreTeenActivity'] = report;
    report = function(argFoo) { // Original name: selectTab
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'FAMILY_CENTER_HANDLE_TAB_SELECT';
        mike['type'] = report;
        report = argFoo;
        mike['tab'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['selectTab'] = report;
    report = 6;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/parent_tools/FamilyCenterActionCreators.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    tango = function() { // Original name: updateLinkForUserId
        entity = undefined;
        tango = _closure1_slot7;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['updateLinkForUserId'] = tango;
    tango = function() { // Original name: removeLinkForUserId
        entity = undefined;
        tango = _closure1_slot8;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['removeLinkForUserId'] = tango;
    mike = function() { // Original name: getLinkCodeForCurrentUser
        entity = undefined;
        tango = _closure1_slot9;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['getLinkCodeForCurrentUser'] = mike;
    return entity;
})();