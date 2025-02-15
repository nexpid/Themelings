// app/modules/threads/ThreadActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: patchThread
        report = argFoo;
        var _closure2_slot0 = report;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 9;
        zulu = zulu[mike];
        mike = undefined;
        mike = tango.bind(mike)(zulu);
        tango = mike.HTTP;
        zulu = tango.patch;
        mike = {};
        golf = _closure1_slot11;
        oscar = golf.CHANNEL;
        report = report.id;
        report = oscar.bind(golf)(report);
        mike['url'] = report;
        report = argBar;
        mike['body'] = report;
        report = false;
        mike['rejectWithError'] = report;
        zulu = zulu.bind(tango)(mike);
        mike = zulu.then;
        entity = function(argFoo) {
            _fun67939: for(var _fun67939_ip = 0; ; ) switch(_fun67939_ip) {
 0:
                entity = argFoo;
                report = _closure1_slot1;
                zulu = _closure1_slot2;
                oscar = 10;
                zulu = zulu[oscar];
                tango = undefined;
                golf = report.bind(tango)(zulu);
                report = golf.dispatch;
                zulu = {};
                options = 'THREAD_UPDATE';
                zulu['type'] = options;
                verify = _closure1_slot4;
                options = entity.body;
                options = verify.bind(tango)(options);
                zulu['channel'] = options;
                zulu = report.bind(golf)(zulu);
                golf = _closure2_slot0;
                zulu = golf.isForumPost;
                zulu = zulu.bind(golf)();
                if(!zulu) { _fun67939_ip = 102; continue _fun67939 }
 86:
                golf = _closure2_slot0;
                options = golf.parent_id;
                golf = null;
                zulu = golf != options;
 102:
                if(!zulu) { _fun67939_ip = 156; continue _fun67939 }
 105:
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                mike = mike[oscar];
                tango = zulu.bind(tango)(mike);
                zulu = tango.dispatch;
                mike = {};
                oscar = 'RESORT_THREADS';
                mike['type'] = oscar;
                report = _closure2_slot0;
                report = report.parent_id;
                mike['channelId'] = report;
                mike = zulu.bind(tango)(mike);
 156:
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar) { // Original name: dispatchThreadMemberLocalUpdate
        golf = argFoo;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 10;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        oscar = 'THREAD_MEMBER_LOCAL_UPDATE';
        mike['type'] = oscar;
        oscar = golf.id;
        mike['id'] = oscar;
        oscar = golf.getGuildId;
        oscar = oscar.bind(golf)();
        mike['guildId'] = oscar;
        oscar = _closure1_slot5;
        report = oscar.getId;
        report = report.bind(oscar)();
        mike['userId'] = report;
        report = argBar;
        mike['isJoining'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.createChannelRecordFromServer;
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    options = oscar[mike];
    options = golf.bind(entity)(options);
    var _closure1_slot8 = options;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.PAGE_SIZE;
    var _closure1_slot9 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.Endpoints;
    var _closure1_slot11 = golf;
    golf = mike.AbortCodes;
    var _closure1_slot12 = golf;
    golf = mike.AnalyticEvents;
    var _closure1_slot13 = golf;
    mike = mike.Permissions;
    var _closure1_slot14 = mike;
    mike = 8;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.ChannelFlags;
    var _closure1_slot15 = mike;
    mike = {};
    golf = function(argFoo, argBar) { // Original name: archiveThread
        _fun67941: for(var _fun67941_ip = 0; ; ) switch(_fun67941_ip) {
 0:
            tango = {};
            entity = true;
            tango['archived'] = entity;
            mike = argBar;
            if(!mike) { _fun67941_ip = 21; continue _fun67941 }
 15:
            tango['locked'] = entity;
 21:
            zulu = _closure1_slot16;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity, tango);
            return entity;
        }
    };
    mike['archiveThread'] = golf;
    golf = function(argFoo) { // Original name: lockThread
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = this;
        var _closure2_slot1 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun67944: for(var _fun67944_ip = 0; ; ) switch(_fun67944_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun67944_ip = 98; continue _fun67944 }
 7:
                    zulu = _closure2_slot0;
                    mike = zulu.isArchivedThread;
                    zulu = mike.bind(zulu)();
                    if(!zulu) { _fun67944_ip = 59; continue _fun67944 }
 27:
                    golf = _closure2_slot1;
                    oscar = golf.unarchiveThread;
                    report = _closure2_slot0;
                    mike = false;
                    mike = oscar.bind(golf)(report, mike);
                    SaveGenerator(address=53);
 51:
                    return mike;
 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun67944_ip = 95; continue _fun67944 }
 59:
                    oscar = _closure1_slot16;
                    report = _closure2_slot0;
                    tango = {};
                    golf = true;
                    tango['locked'] = golf;
                    tango['archived'] = zulu;
                    zulu = undefined;
                    zulu = oscar.bind(zulu)(report, tango);
                    return zulu;
 95:
                    return mike;
 98:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['lockThread'] = golf;
    golf = function(argFoo) { // Original name: unlockThread
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = this;
        var _closure2_slot1 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun67947: for(var _fun67947_ip = 0; ; ) switch(_fun67947_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun67947_ip = 98; continue _fun67947 }
 7:
                    zulu = _closure2_slot0;
                    mike = zulu.isArchivedThread;
                    zulu = mike.bind(zulu)();
                    if(!zulu) { _fun67947_ip = 59; continue _fun67947 }
 27:
                    golf = _closure2_slot1;
                    oscar = golf.unarchiveThread;
                    report = _closure2_slot0;
                    mike = true;
                    mike = oscar.bind(golf)(report, mike);
                    SaveGenerator(address=53);
 51:
                    return mike;
 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun67947_ip = 95; continue _fun67947 }
 59:
                    oscar = _closure1_slot16;
                    report = _closure2_slot0;
                    tango = {};
                    golf = false;
                    tango['locked'] = golf;
                    tango['archived'] = zulu;
                    zulu = undefined;
                    zulu = oscar.bind(zulu)(report, tango);
                    return zulu;
 95:
                    return mike;
 98:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['unlockThread'] = golf;
    golf = function(argFoo, argBar) { // Original name: unarchiveThread
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun67950: for(var _fun67950_ip = 0; ; ) switch(_fun67950_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=6);
                    if(golf) { _fun67950_ip = 849; continue _fun67950 }
 10:
                    yankee = undefined;
                    report = undefined;
                    oscar = undefined;
                    tango = undefined;
                    zulu = undefined;
                    golf = {};
                    verify = false;
                    golf['archived'] = verify;
                    report = golf;
                    offset = _closure2_slot0;
                    options = offset.isForumPost;
                    oscar = options.bind(offset)();
                    options = _closure2_slot1;
                    if(!options) { _fun67950_ip = 65; continue _fun67950 }
 56:
                    options = report;
                    options['locked'] = verify;
 65: // try_start_0
                    options = _closure1_slot16;
                    golf = _closure2_slot0;
                    report = options.bind(yankee)(golf, report);
                    SaveGenerator(address=86);
 84:
                    return report;
 86:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golf) { _fun67950_ip = 95; continue _fun67950 }
 92: // try_end0
                    return report;
 95:
                    return report;
 98: // catch_target0
                    CatchBlockStart(arg_register=4);
                    mike = report;
                    golf = report.body;
                    tango = golf;
                    report = null;
                    golf = report == golf;
                    options = undefined;
                    if(golf) { _fun67950_ip = 127; continue _fun67950 }
 122:
                    options = tango.code;
 127:
                    tango = _closure1_slot12;
                    tango = tango.TOO_MANY_THREADS;
                    if(!(options !== tango)) { _fun67950_ip = 664; continue _fun67950 }
 147:
                    tango = mike;
                    tango = tango.body;
                    zulu = tango;
                    report = report == tango;
                    tango = undefined;
                    if(report) { _fun67950_ip = 172; continue _fun67950 }
 167:
                    tango = zulu.code;
 172:
                    zulu = _closure1_slot12;
                    zulu = zulu.TOO_MANY_ANNOUNCEMENT_THREADS;
                    if(!(tango !== zulu)) { _fun67950_ip = 523; continue _fun67950 }
 189:
                    zulu = mike;
                    tango = zulu.status;
                    zulu = 429;
                    if(!(zulu !== tango)) { _fun67950_ip = 351; continue _fun67950 }
 210:
                    tango = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    zulu = 11;
                    zulu = foxtrot[zulu];
                    report = tango.bind(yankee)(zulu);
                    tango = report.show;
                    zulu = {};
                    romeo = _closure1_slot0;
                    options = 12;
                    verify = foxtrot[options];
                    verify = romeo.bind(yankee)(verify);
                    backup = verify.intl;
                    offset = backup.string;
                    verify = foxtrot[options];
                    verify = romeo.bind(yankee)(verify);
                    verify = verify.t;
                    verify = verify.j2d6Ki;
                    verify = offset.bind(backup)(verify);
                    zulu['title'] = verify;
                    verify = foxtrot[options];
                    verify = romeo.bind(yankee)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    options = foxtrot[options];
                    options = romeo.bind(yankee)(options);
                    options = options.t;
                    options = options.fEptJC;
                    options = verify.bind(offset)(options);
                    zulu['body'] = options;
                    zulu = tango.bind(report)(zulu);
                    _fun67950_ip = 847; continue _fun67950;
 351:
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 11;
                    zulu = report[zulu];
                    report = tango.bind(yankee)(zulu);
                    tango = report.show;
                    zulu = {};
                    options = oscar;
                    backup = _closure1_slot0;
                    verify = _closure1_slot2;
                    foxtrot = 12;
                    offset = verify[foxtrot];
                    offset = backup.bind(yankee)(offset);
                    romeo = offset.intl;
                    offset = romeo.string;
                    verify = verify[foxtrot];
                    verify = backup.bind(yankee)(verify);
                    verify = verify.t;
                    if(options) { _fun67950_ip = 442; continue _fun67950 }
 429:
                    options = verify.PeIE/v;
                    options = offset.bind(romeo)(options);
                    _fun67950_ip = 453; continue _fun67950;
 442:
                    verify = verify.kwyWNT;
                    options = offset.bind(romeo)(verify);
 453:
                    zulu['title'] = options;
                    romeo = _closure1_slot0;
                    options = _closure1_slot2;
                    verify = options[foxtrot];
                    verify = romeo.bind(yankee)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    options = options[foxtrot];
                    options = romeo.bind(yankee)(options);
                    options = options.t;
                    options = options.Whhv4+;
                    options = verify.bind(offset)(options);
                    zulu['body'] = options;
                    zulu = tango.bind(report)(zulu);
                    _fun67950_ip = 847; continue _fun67950;
 523:
                    tango = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    zulu = 11;
                    zulu = foxtrot[zulu];
                    report = tango.bind(yankee)(zulu);
                    tango = report.show;
                    zulu = {};
                    romeo = _closure1_slot0;
                    options = 12;
                    verify = foxtrot[options];
                    verify = romeo.bind(yankee)(verify);
                    backup = verify.intl;
                    offset = backup.string;
                    verify = foxtrot[options];
                    verify = romeo.bind(yankee)(verify);
                    verify = verify.t;
                    verify = verify.PeIE/v;
                    verify = offset.bind(backup)(verify);
                    zulu['title'] = verify;
                    verify = foxtrot[options];
                    verify = romeo.bind(yankee)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    options = foxtrot[options];
                    options = romeo.bind(yankee)(options);
                    options = options.t;
                    options = options.jDMxz8;
                    options = verify.bind(offset)(options);
                    zulu['body'] = options;
                    zulu = tango.bind(report)(zulu);
                    _fun67950_ip = 847; continue _fun67950;
 664:
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 11;
                    zulu = report[zulu];
                    report = tango.bind(yankee)(zulu);
                    tango = report.show;
                    zulu = {};
                    options = oscar;
                    backup = _closure1_slot0;
                    verify = _closure1_slot2;
                    romeo = 12;
                    offset = verify[romeo];
                    offset = backup.bind(yankee)(offset);
                    foxtrot = offset.intl;
                    offset = foxtrot.string;
                    verify = verify[romeo];
                    verify = backup.bind(yankee)(verify);
                    verify = verify.t;
                    if(options) { _fun67950_ip = 755; continue _fun67950 }
 742:
                    options = verify.PeIE/v;
                    options = offset.bind(foxtrot)(options);
                    _fun67950_ip = 766; continue _fun67950;
 755:
                    verify = verify.kwyWNT;
                    options = offset.bind(foxtrot)(verify);
 766:
                    zulu['title'] = options;
                    offset = _closure1_slot0;
                    golf = _closure1_slot2;
                    options = golf[romeo];
                    options = offset.bind(yankee)(options);
                    verify = options.intl;
                    options = verify.string;
                    golf = golf[romeo];
                    golf = offset.bind(yankee)(golf);
                    golf = golf.t;
                    if(oscar) { _fun67950_ip = 827; continue _fun67950 }
 814:
                    oscar = golf.P0wT5e;
                    oscar = options.bind(verify)(oscar);
                    _fun67950_ip = 838; continue _fun67950;
 827:
                    golf = golf.KGaiEB;
                    oscar = options.bind(verify)(golf);
 838:
                    zulu['body'] = oscar;
                    zulu = tango.bind(report)(zulu);
 847:
                    throw mike;
 849:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['unarchiveThread'] = golf;
    golf = function(argFoo) { // Original name: unarchiveThreadIfNecessary
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = this;
        var _closure2_slot1 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun67953: for(var _fun67953_ip = 0; ; ) switch(_fun67953_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun67953_ip = 154; continue _fun67953 }
 10:
                    oscar = _closure1_slot6;
                    report = oscar.getChannel;
                    tango = _closure2_slot0;
                    report = report.bind(oscar)(tango);
                    oscar = _closure1_slot7;
                    tango = oscar.can;
                    zulu = _closure1_slot14;
                    zulu = zulu.MANAGE_THREADS;
                    tango = tango.bind(oscar)(zulu, report);
                    golf = null;
                    zulu = golf != report;
                    if(!zulu) { _fun67953_ip = 79; continue _fun67953 }
 69:
                    oscar = report.isArchivedThread;
                    zulu = oscar.bind(report)();
 79:
                    if(!zulu) { _fun67953_ip = 115; continue _fun67953 }
 82:
                    if(tango) { _fun67953_ip = 112; continue _fun67953 }
 85:
                    oscar = report.threadMetadata;
                    options = golf == oscar;
                    golf = undefined;
                    if(options) { _fun67953_ip = 106; continue _fun67953 }
 100:
                    golf = oscar.locked;
 106:
                    oscar = true;
                    tango = oscar !== golf;
 112:
                    zulu = tango;
 115:
                    if(!zulu) { _fun67953_ip = 146; continue _fun67953 }
 118:
                    tango = _closure2_slot1;
                    zulu = tango.unarchiveThread;
                    mike = false;
                    mike = zulu.bind(tango)(report, mike);
                    SaveGenerator(address=140);
 138:
                    return mike;
 140:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun67953_ip = 151; continue _fun67953 }
 146:
                    zulu = undefined;
                    return zulu;
 151:
                    return mike;
 154:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['unarchiveThreadIfNecessary'] = golf;
    golf = function(argFoo, argBar) { // Original name: setInvitable
        tango = _closure1_slot16;
        zulu = {};
        entity = argBar;
        zulu['invitable'] = entity;
        mike = undefined;
        entity = argFoo;
        entity = tango.bind(mike)(entity, zulu);
        return entity;
    };
    mike['setInvitable'] = golf;
    golf = function(argFoo, argBar) { // Original name: joinThread
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun67957: for(var _fun67957_ip = 0; ; ) switch(_fun67957_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun67957_ip = 580; continue _fun67957 }
 10:
                    mike = undefined;
                    tango = undefined;
                    options = undefined;
                    oscar = _closure2_slot0;
                    report = oscar.isForumPost;
                    report = report.bind(oscar)();
                    if(!report) { _fun67957_ip = 55; continue _fun67957 }
 36:
                    golf = _closure1_slot17;
                    oscar = _closure2_slot0;
                    report = true;
                    report = golf.bind(mike)(oscar, report);
 55: // try_start_0
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    report = 9;
                    report = golf[report];
                    report = oscar.bind(mike)(report);
                    golf = report.HTTP;
                    oscar = golf.post;
                    report = {};
                    yankee = _closure1_slot11;
                    offset = yankee.THREAD_MEMBER;
                    verify = _closure2_slot0;
                    verify = verify.id;
                    verify = offset.bind(yankee)(verify);
                    report['url'] = verify;
                    verify = {};
                    offset = _closure2_slot1;
                    verify['location'] = offset;
                    report['query'] = verify;
                    verify = false;
                    report['rejectWithError'] = verify;
                    report = oscar.bind(golf)(report);
                    SaveGenerator(address=148);
 146:
                    return report;
 148:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(oscar) { _fun67957_ip = 157; continue _fun67957 }
 154: // try_end0
                    return report;
 157:
                    return report;
 160: // catch_target0
                    CatchBlockStart(arg_register=4);
                    oscar = report.body;
                    tango = oscar;
                    report = null;
                    report = report == oscar;
                    oscar = undefined;
                    if(report) { _fun67957_ip = 186; continue _fun67957 }
 181:
                    oscar = tango.code;
 186:
                    report = _closure1_slot12;
                    report = report.TOO_MANY_THREAD_MEMBERS;
                    if(!(oscar !== report)) { _fun67957_ip = 347; continue _fun67957 }
 206:
                    oscar = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    report = 11;
                    report = foxtrot[report];
                    golf = oscar.bind(mike)(report);
                    oscar = golf.show;
                    report = {};
                    romeo = _closure1_slot0;
                    verify = 12;
                    offset = foxtrot[verify];
                    offset = romeo.bind(mike)(offset);
                    backup = offset.intl;
                    yankee = backup.string;
                    offset = foxtrot[verify];
                    offset = romeo.bind(mike)(offset);
                    offset = offset.t;
                    offset = offset.j2d6Ki;
                    offset = yankee.bind(backup)(offset);
                    report['title'] = offset;
                    offset = foxtrot[verify];
                    offset = romeo.bind(mike)(offset);
                    yankee = offset.intl;
                    offset = yankee.string;
                    verify = foxtrot[verify];
                    verify = romeo.bind(mike)(verify);
                    verify = verify.t;
                    verify = verify.fEptJC;
                    verify = offset.bind(yankee)(verify);
                    report['body'] = verify;
                    report = oscar.bind(golf)(report);
                    _fun67957_ip = 544; continue _fun67957;
 347:
                    oscar = _closure2_slot0;
                    report = oscar.isForumPost;
                    verify = report.bind(oscar)();
                    options = verify;
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    report = 11;
                    report = golf[report];
                    golf = oscar.bind(mike)(report);
                    oscar = golf.show;
                    report = {};
                    backup = _closure1_slot0;
                    offset = _closure1_slot2;
                    foxtrot = 12;
                    yankee = offset[foxtrot];
                    yankee = backup.bind(mike)(yankee);
                    romeo = yankee.intl;
                    yankee = romeo.string;
                    offset = offset[foxtrot];
                    offset = backup.bind(mike)(offset);
                    offset = offset.t;
                    if(verify) { _fun67957_ip = 452; continue _fun67957 }
 439:
                    verify = offset.gtdVcn;
                    verify = yankee.bind(romeo)(verify);
                    _fun67957_ip = 463; continue _fun67957;
 452:
                    offset = offset.EMYJFh;
                    verify = yankee.bind(romeo)(offset);
 463:
                    report['title'] = verify;
                    romeo = _closure1_slot0;
                    verify = _closure1_slot2;
                    offset = verify[foxtrot];
                    offset = romeo.bind(mike)(offset);
                    yankee = offset.intl;
                    offset = yankee.string;
                    verify = verify[foxtrot];
                    verify = romeo.bind(mike)(verify);
                    verify = verify.t;
                    if(options) { _fun67957_ip = 524; continue _fun67957 }
 511:
                    options = verify.abMwgo;
                    options = offset.bind(yankee)(options);
                    _fun67957_ip = 535; continue _fun67957;
 524:
                    verify = verify.QYyad3;
                    options = offset.bind(yankee)(verify);
 535:
                    report['body'] = options;
                    report = oscar.bind(golf)(report);
 544:
                    oscar = _closure2_slot0;
                    report = oscar.isForumPost;
                    report = report.bind(oscar)();
                    if(!report) { _fun67957_ip = 577; continue _fun67957 }
 561:
                    report = _closure1_slot17;
                    tango = _closure2_slot0;
                    zulu = false;
                    zulu = report.bind(mike)(tango, zulu);
 577:
                    return mike;
 580:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['joinThread'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: addMember
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun67960: for(var _fun67960_ip = 0; ; ) switch(_fun67960_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun67960_ip = 519; continue _fun67960 }
 10:
                    mike = undefined;
                    zulu = undefined;
                    oscar = undefined;
 16: // try_start_0
                    report = _closure1_slot0;
                    golf = _closure1_slot2;
                    tango = 9;
                    tango = golf[tango];
                    tango = report.bind(mike)(tango);
                    golf = tango.HTTP;
                    report = golf.post;
                    tango = {};
                    romeo = _closure1_slot11;
                    yankee = romeo.THREAD_MEMBER;
                    options = _closure2_slot0;
                    offset = options.id;
                    options = _closure2_slot1;
                    options = yankee.bind(romeo)(offset, options);
                    tango['url'] = options;
                    options = {};
                    verify = _closure2_slot2;
                    options['location'] = verify;
                    tango['query'] = options;
                    options = false;
                    tango['rejectWithError'] = options;
                    tango = report.bind(golf)(tango);
                    SaveGenerator(address=117);
 115:
                    return tango;
 117:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun67960_ip = 126; continue _fun67960 }
 123: // try_end0
                    return tango;
 126:
                    return tango;
 129: // catch_target0
                    CatchBlockStart(arg_register=3);
                    report = tango.body;
                    zulu = report;
                    tango = null;
                    report = tango == report;
                    tango = undefined;
                    if(report) { _fun67960_ip = 155; continue _fun67960 }
 150:
                    tango = zulu.code;
 155:
                    zulu = _closure1_slot12;
                    zulu = zulu.TOO_MANY_THREAD_MEMBERS;
                    if(!(tango !== zulu)) { _fun67960_ip = 316; continue _fun67960 }
 175:
                    tango = _closure1_slot1;
                    romeo = _closure1_slot2;
                    zulu = 11;
                    zulu = romeo[zulu];
                    report = tango.bind(mike)(zulu);
                    tango = report.show;
                    zulu = {};
                    yankee = _closure1_slot0;
                    options = 12;
                    verify = romeo[options];
                    verify = yankee.bind(mike)(verify);
                    foxtrot = verify.intl;
                    offset = foxtrot.string;
                    verify = romeo[options];
                    verify = yankee.bind(mike)(verify);
                    verify = verify.t;
                    verify = verify.j2d6Ki;
                    verify = offset.bind(foxtrot)(verify);
                    zulu['title'] = verify;
                    verify = romeo[options];
                    verify = yankee.bind(mike)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    options = romeo[options];
                    options = yankee.bind(mike)(options);
                    options = options.t;
                    options = options.fEptJC;
                    options = verify.bind(offset)(options);
                    zulu['body'] = options;
                    zulu = tango.bind(report)(zulu);
                    _fun67960_ip = 516; continue _fun67960;
 316:
                    tango = _closure2_slot0;
                    zulu = tango.isForumPost;
                    options = zulu.bind(tango)();
                    oscar = options;
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 11;
                    zulu = report[zulu];
                    report = tango.bind(mike)(zulu);
                    tango = report.show;
                    zulu = {};
                    foxtrot = _closure1_slot0;
                    verify = _closure1_slot2;
                    yankee = 12;
                    offset = verify[yankee];
                    offset = foxtrot.bind(mike)(offset);
                    romeo = offset.intl;
                    offset = romeo.string;
                    verify = verify[yankee];
                    verify = foxtrot.bind(mike)(verify);
                    verify = verify.t;
                    if(options) { _fun67960_ip = 424; continue _fun67960 }
 411:
                    options = verify.YErysL;
                    options = offset.bind(romeo)(options);
                    _fun67960_ip = 435; continue _fun67960;
 424:
                    verify = verify.0yAqqK;
                    options = offset.bind(romeo)(verify);
 435:
                    zulu['title'] = options;
                    offset = _closure1_slot0;
                    golf = _closure1_slot2;
                    options = golf[yankee];
                    options = offset.bind(mike)(options);
                    verify = options.intl;
                    options = verify.string;
                    golf = golf[yankee];
                    golf = offset.bind(mike)(golf);
                    golf = golf.t;
                    if(oscar) { _fun67960_ip = 496; continue _fun67960 }
 483:
                    oscar = golf.abMwgo;
                    oscar = options.bind(verify)(oscar);
                    _fun67960_ip = 507; continue _fun67960;
 496:
                    golf = golf.QYyad3;
                    oscar = options.bind(verify)(golf);
 507:
                    zulu['body'] = oscar;
                    zulu = tango.bind(report)(zulu);
 516:
                    return mike;
 519:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['addMember'] = golf;
    golf = function(argFoo, argBar) { // Original name: leaveThread
        _fun67961: for(var _fun67961_ip = 0; ; ) switch(_fun67961_ip) {
 0:
            tango = argFoo;
            entity = tango.isForumPost;
            entity = entity.bind(tango)();
            if(!entity) { _fun67961_ip = 33; continue _fun67961 }
 16:
            zulu = _closure1_slot17;
            mike = undefined;
            entity = false;
            entity = zulu.bind(mike)(tango, entity);
 33:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            zulu = entity.HTTP;
            mike = zulu.del;
            entity = {};
            oscar = _closure1_slot11;
            report = oscar.THREAD_MEMBER;
            tango = tango.id;
            tango = report.bind(oscar)(tango);
            entity['url'] = tango;
            tango = {};
            report = argBar;
            tango['location'] = report;
            entity['query'] = tango;
            tango = false;
            entity['rejectWithError'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    mike['leaveThread'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: removeMember
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 9;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.del;
        entity = {};
        golf = _closure1_slot11;
        oscar = golf.THREAD_MEMBER;
        tango = argFoo;
        report = tango.id;
        tango = argBar;
        tango = oscar.bind(golf)(report, tango);
        entity['url'] = tango;
        tango = {};
        report = argBaz;
        tango['location'] = report;
        entity['query'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['removeMember'] = golf;
    golf = function(argFoo, argBar) { // Original name: setAutoArchiveDuration
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 9;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.patch;
        entity = {};
        oscar = _closure1_slot11;
        report = oscar.CHANNEL;
        tango = argFoo;
        tango = tango.id;
        tango = report.bind(oscar)(tango);
        entity['url'] = tango;
        tango = {};
        report = argBar;
        tango['auto_archive_duration'] = report;
        entity['body'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['setAutoArchiveDuration'] = golf;
    golf = function(argFoo) { // Original name: pin
        report = argFoo;
        tango = this;
        mike = report.flags;
        entity = _closure1_slot15;
        entity = entity.PINNED;
        zulu = mike | entity;
        mike = tango.updateFlags;
        entity = report.isArchivedThread;
        entity = entity.bind(report)();
        entity = mike.bind(tango)(report, zulu, entity);
        entity = undefined;
        return entity;
    };
    mike['pin'] = golf;
    golf = function(argFoo) { // Original name: unpin
        tango = argFoo;
        zulu = this;
        mike = tango.flags;
        entity = _closure1_slot15;
        entity = entity.PINNED;
        entity = ~entity;
        mike = mike & entity;
        entity = zulu.updateFlags;
        entity = entity.bind(zulu)(tango, mike);
        entity = undefined;
        return entity;
    };
    mike['unpin'] = golf;
    golf = function(argFoo, argBar) { // Original name: updateFlags
        _fun67966: for(var _fun67966_ip = 0; ; ) switch(_fun67966_ip) {
 0:
            zulu = arguments[2];
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = argBar;
            var _closure2_slot1 = mike;
            mike = undefined;
            if(!(zulu === mike)) { _fun67966_ip = 27; continue _fun67966 }
 25:
            zulu = false;
 27:
            var _closure2_slot2 = zulu;
            zulu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun67968: for(var _fun67968_ip = 0; ; ) switch(_fun67968_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun67968_ip = 253; continue _fun67968 }
 10:
                        mike = undefined;
                        offset = undefined;
                        oscar = _closure1_slot1;
                        tango = _closure1_slot2;
                        report = 10;
                        tango = tango[report];
                        yankee = oscar.bind(mike)(tango);
                        verify = yankee.dispatch;
                        tango = {};
                        golf = 'THREAD_UPDATE';
                        tango['type'] = golf;
                        backup = _closure2_slot0;
                        foxtrot = backup.merge;
                        romeo = {};
                        options = _closure2_slot1;
                        romeo['flags'] = options;
                        romeo = foxtrot.bind(backup)(romeo);
                        tango['channel'] = romeo;
                        tango = verify.bind(yankee)(tango);
                        tango = {};
                        tango['flags'] = options;
                        offset = tango;
                        tango = _closure2_slot2;
                        if(!tango) { _fun67968_ip = 116; continue _fun67968 }
 105:
                        options = offset;
                        tango = false;
                        options['archived'] = tango;
 116: // try_start_0
                        options = _closure1_slot0;
                        verify = _closure1_slot2;
                        tango = 9;
                        tango = verify[tango];
                        tango = options.bind(mike)(tango);
                        verify = tango.HTTP;
                        options = verify.patch;
                        tango = {};
                        foxtrot = _closure1_slot11;
                        romeo = foxtrot.CHANNEL;
                        yankee = _closure2_slot0;
                        yankee = yankee.id;
                        yankee = romeo.bind(foxtrot)(yankee);
                        tango['url'] = yankee;
                        tango['body'] = offset;
                        offset = true;
                        tango['rejectWithError'] = offset;
                        tango = options.bind(verify)(tango);
                        SaveGenerator(address=196);
 194:
                        return tango;
 196:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                        if(options) { _fun67968_ip = 204; continue _fun67968 }
 202: // try_end0
                        _fun67968_ip = 250; continue _fun67968;
 204:
                        return tango;
 207: // catch_target0
                        CatchBlockStart(arg_register=3);
                        tango = _closure1_slot1;
                        zulu = _closure1_slot2;
                        zulu = zulu[report];
                        report = tango.bind(mike)(zulu);
                        tango = report.dispatch;
                        zulu = {};
                        zulu['type'] = golf;
                        oscar = _closure2_slot0;
                        zulu['channel'] = oscar;
                        zulu = tango.bind(report)(zulu);
 250:
                        return mike;
 253:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            return entity;
        }
    };
    mike['updateFlags'] = golf;
    golf = function(argFoo, argBar) { // Original name: replacePin
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = this;
        var _closure2_slot2 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun67971: for(var _fun67971_ip = 0; ; ) switch(_fun67971_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun67971_ip = 604; continue _fun67971 }
 10:
                    mike = _closure2_slot0;
                    report = mike.merge;
                    zulu = {};
                    verify = mike.flags;
                    options = _closure1_slot15;
                    oscar = options.PINNED;
                    oscar = ~oscar;
                    oscar = verify & oscar;
                    zulu['flags'] = oscar;
                    backup = report.bind(mike)(zulu);
                    oscar = _closure2_slot1;
                    report = oscar.merge;
                    zulu = {};
                    verify = oscar.flags;
                    options = options.PINNED;
                    options = verify | options;
                    zulu['flags'] = options;
                    yankee = report.bind(oscar)(zulu);
                    report = _closure1_slot1;
                    zulu = _closure1_slot2;
                    verify = 10;
                    options = zulu[verify];
                    oscar = undefined;
                    foxtrot = report.bind(oscar)(options);
                    romeo = foxtrot.dispatch;
                    offset = {};
                    options = 'THREAD_UPDATE';
                    offset['type'] = options;
                    offset['channel'] = backup;
                    offset = romeo.bind(foxtrot)(offset);
                    zulu = zulu[verify];
                    offset = report.bind(oscar)(zulu);
                    report = offset.dispatch;
                    zulu = {};
                    zulu['type'] = options;
                    zulu['channel'] = yankee;
                    zulu = report.bind(offset)(zulu);
                    report = _closure2_slot2;
                    zulu = report.unarchiveThreadIfNecessary;
                    mike = mike.id;
                    mike = zulu.bind(report)(mike);
                    SaveGenerator(address=194);
 192:
                    return mike;
 194:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun67971_ip = 601; continue _fun67971 }
 203:
                    offset = _closure2_slot2;
                    report = offset.unarchiveThreadIfNecessary;
                    zulu = _closure2_slot1;
                    zulu = zulu.id;
                    zulu = report.bind(offset)(zulu);
                    SaveGenerator(address=231);
 229:
                    return zulu;
 231:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun67971_ip = 598; continue _fun67971 }
 240: // try_start_0
                    offset = _closure1_slot0;
                    report = _closure1_slot2;
                    romeo = 9;
                    report = report[romeo];
                    report = offset.bind(oscar)(report);
                    yankee = report.HTTP;
                    offset = yankee.patch;
                    report = {};
                    sizing = _closure1_slot11;
                    kilo = sizing.CHANNEL;
                    backup = _closure2_slot0;
                    foxtrot = backup.id;
                    foxtrot = kilo.bind(sizing)(foxtrot);
                    report['url'] = foxtrot;
                    foxtrot = {};
                    kilo = backup.flags;
                    backup = _closure1_slot15;
                    backup = backup.PINNED;
                    backup = ~backup;
                    backup = kilo & backup;
                    foxtrot['flags'] = backup;
                    report['body'] = foxtrot;
                    foxtrot = true;
                    report['rejectWithError'] = foxtrot;
                    report = offset.bind(yankee)(report);
                    SaveGenerator(address=348);
 346:
                    return report;
 348:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                    if(offset) { _fun67971_ip = 514; continue _fun67971 }
 357: // try_start_1 // try_end0
                    yankee = _closure1_slot0;
                    offset = _closure1_slot2;
                    offset = offset[romeo];
                    offset = yankee.bind(oscar)(offset);
                    romeo = offset.HTTP;
                    yankee = romeo.patch;
                    offset = {};
                    output = _closure1_slot11;
                    sizing = output.CHANNEL;
                    kilo = _closure2_slot1;
                    backup = kilo.id;
                    backup = sizing.bind(output)(backup);
                    offset['url'] = backup;
                    backup = {};
                    sizing = kilo.flags;
                    kilo = _closure1_slot15;
                    kilo = kilo.PINNED;
                    kilo = sizing | kilo;
                    backup['flags'] = kilo;
                    offset['body'] = backup;
                    offset['rejectWithError'] = foxtrot;
                    offset = yankee.bind(romeo)(offset);
                    SaveGenerator(address=457);
 455:
                    return offset;
 457:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(yankee) { _fun67971_ip = 465; continue _fun67971 }
 463: // try_end1
                    _fun67971_ip = 511; continue _fun67971;
 465:
                    return offset;
 468: // catch_target1
                    CatchBlockStart(arg_register=9);
                    yankee = _closure1_slot1;
                    offset = _closure1_slot2;
                    offset = offset[verify];
                    romeo = yankee.bind(oscar)(offset);
                    yankee = romeo.dispatch;
                    offset = {};
                    offset['type'] = options;
                    foxtrot = _closure2_slot1;
                    offset['channel'] = foxtrot;
                    offset = yankee.bind(romeo)(offset);
 511:
                    return oscar;
 514:
                    return report;
 517: // catch_target0
                    CatchBlockStart(arg_register=4);
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    offset = tango[verify];
                    romeo = report.bind(oscar)(offset);
                    yankee = romeo.dispatch;
                    offset = {};
                    offset['type'] = options;
                    foxtrot = _closure2_slot0;
                    offset['channel'] = foxtrot;
                    offset = yankee.bind(romeo)(offset);
                    tango = tango[verify];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    tango['type'] = options;
                    golf = _closure2_slot1;
                    tango['channel'] = golf;
                    tango = report.bind(oscar)(tango);
                    tango = undefined;
                    return tango;
 598:
                    return zulu;
 601:
                    return mike;
 604:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['replacePin'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: openThreadCreationForMobile
        _fun67972: for(var _fun67972_ip = 0; ; ) switch(_fun67972_ip) {
 0:
            report = argFoo;
            tango = argBar;
            verify = argBaz;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 13;
            zulu = golf[entity];
            entity = undefined;
            offset = oscar.bind(entity)(zulu);
            options = offset.trackWithMetadata;
            zulu = _closure1_slot13;
            oscar = zulu.THREAD_CREATION_STARTED;
            zulu = {};
            zulu['location'] = verify;
            yankee = report.id;
            zulu['channel_id'] = yankee;
            yankee = report.guild_id;
            zulu['guild_id'] = yankee;
            zulu = options.bind(offset)(oscar, zulu);
            oscar = _closure1_slot1;
            zulu = 14;
            zulu = golf[zulu];
            options = oscar.bind(entity)(zulu);
            golf = options.changeThreadSettings;
            oscar = report.id;
            zulu = {};
            zulu['parentMessageId'] = tango;
            offset = false;
            zulu['isPrivate'] = offset;
            zulu['location'] = verify;
            zulu = golf.bind(options)(oscar, zulu);
            zulu = null;
            if(!(zulu == tango)) { _fun67972_ip = 189; continue _fun67972 }
 137:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 15;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.setActiveCommand;
            mike = {'channelId': null, 'command': null, 'section': null};
            report = report.id;
            mike['channelId'] = report;
            mike = zulu.bind(tango)(mike);
 189:
            return entity;
        }
    };
    mike['openThreadCreationForMobile'] = golf;
    golf = function(argFoo, argBar) { // Original name: setNotificationSettings
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = this;
        var _closure2_slot2 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun67975: for(var _fun67975_ip = 0; ; ) switch(_fun67975_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun67975_ip = 203; continue _fun67975 }
 10:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 16;
                    mike = tango[mike];
                    tango = undefined;
                    options = zulu.bind(tango)(mike);
                    golf = options.trackThreadNotificationSettingsUpdated;
                    mike = _closure2_slot0;
                    zulu = _closure2_slot1;
                    zulu = golf.bind(options)(mike, zulu);
                    golf = _closure1_slot10;
                    zulu = golf.hasJoined;
                    mike = mike.id;
                    mike = zulu.bind(golf)(mike);
                    if(mike) { _fun67975_ip = 120; continue _fun67975 }
 81:
                    options = _closure2_slot2;
                    golf = options.joinThread;
                    zulu = _closure2_slot0;
                    mike = 'Change Notification Settings';
                    mike = golf.bind(options)(zulu, mike);
                    SaveGenerator(address=111);
 109:
                    return mike;
 111:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(!zulu) { _fun67975_ip = 120; continue _fun67975 }
 117:
                    return mike;
 120:
                    zulu = _closure1_slot0;
                    golf = _closure1_slot2;
                    mike = 9;
                    mike = golf[mike];
                    mike = zulu.bind(tango)(mike);
                    tango = mike.HTTP;
                    zulu = tango.patch;
                    mike = {};
                    options = _closure1_slot11;
                    golf = options.THREAD_MEMBER_SETTINGS;
                    oscar = _closure2_slot0;
                    oscar = oscar.id;
                    oscar = golf.bind(options)(oscar);
                    mike['url'] = oscar;
                    report = _closure2_slot1;
                    mike['body'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    return mike;
 203:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['setNotificationSettings'] = golf;
    golf = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: loadArchivedThreads
        _fun67976: for(var _fun67976_ip = 0; ; ) switch(_fun67976_ip) {
 0:
            verify = argBar;
            oscar = argBaz;
            foxtrot = argCorge;
            golf = argGrault;
            mike = argFoo;
            var _closure2_slot0 = mike;
            var _closure2_slot1 = verify;
            var _closure2_slot2 = oscar;
            var _closure2_slot3 = foxtrot;
            var _closure2_slot4 = golf;
            zulu = _closure1_slot8;
            mike = zulu.isLoading;
            mike = mike.bind(zulu)(verify, oscar, foxtrot);
            if(mike) { _fun67976_ip = 333; continue _fun67976 }
 63:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 10;
            mike = tango[mike];
            offset = undefined;
            report = zulu.bind(offset)(mike);
            zulu = report.dispatch;
            mike = {};
            yankee = 'LOAD_ARCHIVED_THREADS';
            mike['type'] = yankee;
            mike['channelId'] = verify;
            mike['sortOrder'] = oscar;
            mike['tagFilter'] = foxtrot;
            mike = zulu.bind(report)(mike);
            zulu = _closure1_slot0;
            mike = 9;
            mike = tango[mike];
            mike = zulu.bind(offset)(mike);
            tango = mike.HTTP;
            zulu = tango.get;
            mike = {};
            oscar = _closure1_slot11;
            report = oscar.THREAD_SEARCH;
            report = report.bind(oscar)(verify);
            mike['url'] = report;
            oscar = {'archived': true, 'sort_by': 'last_message_time', 'sort_order': 'desc'};
            report = true;
            verify = _closure1_slot9;
            oscar['limit'] = verify;
            yankee = foxtrot.size;
            verify = 0;
            yankee = yankee > verify;
            verify = undefined;
            if(!yankee) { _fun67976_ip = 241; continue _fun67976 }
 209:
            yankee = global;
            romeo = yankee.Array;
            yankee = romeo.from;
            foxtrot = yankee.bind(romeo)(foxtrot);
            romeo = foxtrot.join;
            yankee = ',';
            verify = romeo.bind(foxtrot)(yankee);
 241:
            oscar['tag'] = verify;
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            options = 17;
            options = yankee[options];
            options = verify.bind(offset)(options);
            options = options.ThreadSearchTagSetting;
            options = options.MATCH_SOME;
            oscar['tag_setting'] = options;
            oscar['offset'] = golf;
            mike['query'] = oscar;
            oscar = 2;
            mike['retries'] = oscar;
            mike['rejectWithError'] = report;
            tango = zulu.bind(tango)(mike);
            zulu = tango.then;
            mike = function(argFoo) {
                _fun67977: for(var _fun67977_ip = 0; ; ) switch(_fun67977_ip) {
 0:
                    entity = argFoo;
                    entity = entity.body;
                    options = entity.threads;
                    yankee = entity.members;
                    tango = entity.has_more;
                    romeo = entity.first_messages;
                    offset = entity.most_recent_messages;
                    golf = null;
                    if(!(golf != options)) { _fun67977_ip = 250; continue _fun67977 }
 49:
                    mike = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 10;
                    entity = zulu[entity];
                    verify = undefined;
                    zulu = mike.bind(verify)(entity);
                    mike = zulu.dispatch;
                    entity = {};
                    foxtrot = 'LOAD_ARCHIVED_THREADS_SUCCESS';
                    entity['type'] = foxtrot;
                    backup = _closure2_slot0;
                    entity['guildId'] = backup;
                    backup = _closure2_slot1;
                    entity['channelId'] = backup;
                    backup = _closure2_slot4;
                    entity['offset'] = backup;
                    backup = _closure2_slot2;
                    entity['sortOrder'] = backup;
                    foxtrot = _closure2_slot3;
                    entity['tagFilter'] = foxtrot;
                    entity['threads'] = options;
                    entity['firstMessages'] = romeo;
                    entity['mostRecentMessages'] = offset;
                    if(!(golf == yankee)) { _fun67977_ip = 158; continue _fun67977 }
 154:
                    yankee = new Array(0);
 158:
                    offset = yankee.map;
                    golf = function(argFoo) {
                        mike = _closure1_slot1;
                        zulu = _closure1_slot2;
                        entity = 18;
                        entity = zulu[entity];
                        zulu = undefined;
                        mike = mike.bind(zulu)(entity);
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    golf = offset.bind(yankee)(golf);
                    entity['members'] = golf;
                    golf = options.map;
                    oscar = function(argFoo) {
                        entity = argFoo;
                        entity = entity.owner;
                        return entity;
                    };
                    golf = golf.bind(options)(oscar);
                    oscar = golf.filter;
                    options = _closure1_slot0;
                    offset = _closure1_slot2;
                    report = 19;
                    report = offset[report];
                    report = options.bind(verify)(report);
                    report = report.isNotNullish;
                    report = oscar.bind(golf)(report);
                    entity['owners'] = report;
                    entity['hasMore'] = tango;
                    entity = mike.bind(zulu)(entity);
                    _fun67977_ip = 326; continue _fun67977;
 250:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 10;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.dispatch;
                    entity = {};
                    tango = 'LOAD_ARCHIVED_THREADS_FAIL';
                    entity['type'] = tango;
                    report = _closure2_slot1;
                    entity['channelId'] = report;
                    report = _closure2_slot2;
                    entity['sortOrder'] = report;
                    tango = _closure2_slot3;
                    entity['tagFilter'] = tango;
                    entity = mike.bind(zulu)(entity);
 326:
                    entity = undefined;
                    return entity;
                }
            };
            entity = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                report = 'LOAD_ARCHIVED_THREADS_FAIL';
                mike['type'] = report;
                oscar = _closure2_slot1;
                mike['channelId'] = oscar;
                oscar = _closure2_slot2;
                mike['sortOrder'] = oscar;
                report = _closure2_slot3;
                mike['tagFilter'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = zulu.bind(tango)(mike, entity);
 333:
            entity = undefined;
            return entity;
        }
    };
    mike['loadArchivedThreads'] = golf;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: searchThreads
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
                _fun67983: for(var _fun67983_ip = 0; ; ) switch(_fun67983_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun67983_ip = 334; continue _fun67983 }
 10:
                    zulu = _closure2_slot3;
                    mike = null;
                    mike = mike != zulu;
                    oscar = undefined;
                    options = undefined;
                    if(!mike) { _fun67983_ip = 86; continue _fun67983 }
 30:
                    mike = _closure2_slot3;
                    zulu = mike.size;
                    mike = 0;
                    mike = zulu > mike;
                    options = undefined;
                    if(!mike) { _fun67983_ip = 86; continue _fun67983 }
 50:
                    mike = global;
                    tango = mike.Array;
                    zulu = tango.from;
                    mike = _closure2_slot3;
                    tango = zulu.bind(tango)(mike);
                    zulu = tango.join;
                    mike = ',';
                    options = zulu.bind(tango)(mike);
 86:
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    mike = 9;
                    mike = yankee[mike];
                    mike = offset.bind(oscar)(mike);
                    report = mike.HTTP;
                    tango = report.get;
                    mike = {};
                    foxtrot = _closure1_slot11;
                    romeo = foxtrot.THREAD_SEARCH;
                    golf = _closure2_slot1;
                    golf = romeo.bind(foxtrot)(golf);
                    mike['url'] = golf;
                    golf = {};
                    romeo = _closure2_slot2;
                    golf['name'] = romeo;
                    golf['tag'] = options;
                    options = 17;
                    options = yankee[options];
                    options = offset.bind(oscar)(options);
                    options = options.ThreadSearchTagSetting;
                    options = options.MATCH_SOME;
                    golf['tag_setting'] = options;
                    mike['query'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=206);
 204:
                    return mike;
 206:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun67983_ip = 331; continue _fun67983 }
 212:
                    tango = mike.body;
                    report = tango.threads;
                    offset = tango.members;
                    options = tango.first_messages;
                    golf = tango.most_recent_messages;
                    tango = _closure1_slot1;
                    yankee = _closure1_slot2;
                    zulu = 10;
                    zulu = yankee[zulu];
                    oscar = tango.bind(oscar)(zulu);
                    tango = oscar.dispatch;
                    zulu = {};
                    yankee = 'LOAD_THREADS_SUCCESS';
                    zulu['type'] = yankee;
                    zulu['threads'] = report;
                    zulu['members'] = offset;
                    verify = _closure2_slot0;
                    zulu['guildId'] = verify;
                    zulu['firstMessages'] = options;
                    zulu['mostRecentMessages'] = golf;
                    zulu = tango.bind(oscar)(zulu);
                    tango = report.map;
                    zulu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.id;
                        return entity;
                    };
                    zulu = tango.bind(report)(zulu);
                    return zulu;
 331:
                    return mike;
 334:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['searchThreads'] = tango;
    tango = 20;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/threads/ThreadActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();