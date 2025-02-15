// app/modules/applications/ApplicationActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    oscar = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = oscar;
    var _closure1_slot2 = verify;
    report = function() { // Original name: fetchApplication
        entity = undefined;
        tango = _closure1_slot12;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot11 = report;
    entity = function() { // Original name: _fetchApplication
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    mike = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00002_ip = 296; continue _fun00001 }
 13:
                    golf = argFoo;
                    oscar = undefined;
                    if(!(mike === oscar)) { _fun00002_ip = 24; continue _fun00001 }
 22:
                    mike = false;
 24:
                    romeo = mike;
                    offset = arguments[2];
                    SaveGenerator(address=34);
 32:
                    return oscar;
 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00002_ip = 293; continue _fun00001 }
 43:
                    report = _closure1_slot1;
                    zulu = _closure1_slot2;
                    options = 5;
                    zulu = zulu[options];
                    verify = report.bind(oscar)(zulu);
                    report = verify.dispatch;
                    zulu = {};
                    yankee = 'APPLICATION_FETCH';
                    zulu['type'] = yankee;
                    yankee = golf;
                    zulu['applicationId'] = yankee;
                    zulu = report.bind(verify)(zulu);
 93: // try_start_0
                    report = _closure1_slot0;
                    verify = _closure1_slot2;
                    zulu = 6;
                    zulu = verify[zulu];
                    zulu = report.bind(oscar)(zulu);
                    verify = zulu.HTTP;
                    report = verify.get;
                    zulu = {};
                    backup = _closure1_slot8;
                    foxtrot = backup.APPLICATION_PUBLIC;
                    yankee = golf;
                    yankee = foxtrot.bind(backup)(yankee);
                    zulu['url'] = yankee;
                    yankee = {};
                    yankee['with_guild'] = romeo;
                    zulu['query'] = yankee;
                    yankee = true;
                    zulu['oldFormErrors'] = yankee;
                    zulu['signal'] = offset;
                    offset = false;
                    zulu['rejectWithError'] = offset;
                    zulu = report.bind(verify)(zulu);
                    SaveGenerator(address=185);
 183:
                    return zulu;
 185:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 245; continue _fun00001 }
 191:
                    verify = _closure1_slot1;
                    report = _closure1_slot2;
                    report = report[options];
                    offset = verify.bind(oscar)(report);
                    verify = offset.dispatch;
                    report = {};
                    yankee = 'APPLICATION_FETCH_SUCCESS';
                    report['type'] = yankee;
                    yankee = zulu.body;
                    report['application'] = yankee;
                    report = verify.bind(offset)(report);
                    report = zulu.body;
 242: // try_end0
                    return report;
 245:
                    return zulu;
 248: // catch_target0
                    CatchBlockStart(arg_register=2);
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    tango = tango[options];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    options = 'APPLICATION_FETCH_FAIL';
                    tango['type'] = options;
                    tango['applicationId'] = golf;
                    tango = report.bind(oscar)(tango);
                    throw zulu;
 293:
                    return mike;
 296:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot12 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = global;
    offset = entity.Object;
    golf = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = verify[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = verify[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = verify[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = verify[tango];
    yankee = oscar.bind(entity)(tango);
    var _closure1_slot6 = yankee;
    tango = 4;
    tango = verify[tango];
    tango = options.bind(entity)(tango);
    oscar = tango.ApplicationFlags;
    var _closure1_slot7 = oscar;
    oscar = tango.Endpoints;
    var _closure1_slot8 = oscar;
    tango = tango.NOOP;
    var _closure1_slot9 = tango;
    oscar = {};
    tango = function(argFoo) { // Original name: createApplication
        mike = argFoo;
        zulu = mike.name;
        var _closure2_slot0 = zulu;
        zulu = mike.guildId;
        var _closure2_slot1 = zulu;
        zulu = mike.type;
        var _closure2_slot2 = zulu;
        mike = mike.teamId;
        var _closure2_slot3 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00004_ip = 204; continue _fun00003 }
 10:
                    zulu = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 6;
                    mike = report[mike];
                    oscar = undefined;
                    mike = zulu.bind(oscar)(mike);
                    report = mike.HTTP;
                    zulu = report.post;
                    mike = {};
                    golf = _closure1_slot8;
                    golf = golf.APPLICATIONS;
                    mike['url'] = golf;
                    options = {};
                    verify = _closure2_slot0;
                    options['name'] = verify;
                    verify = _closure2_slot2;
                    options['type'] = verify;
                    verify = _closure2_slot1;
                    options['guild_id'] = verify;
                    verify = _closure2_slot3;
                    options['team_id'] = verify;
                    mike['body'] = options;
                    options = false;
                    mike['rejectWithError'] = options;
                    mike = zulu.bind(report)(mike);
                    SaveGenerator(address=119);
 117:
                    return mike;
 119:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00004_ip = 201; continue _fun00003 }
 125:
                    zulu = mike.body;
                    report = _closure2_slot1;
                    options = null;
                    report = options != report;
                    if(!report) { _fun00004_ip = 151; continue _fun00003 }
 143:
                    golf = _closure2_slot2;
                    report = options != golf;
 151:
                    if(!report) { _fun00004_ip = 198; continue _fun00003 }
 154:
                    report = _closure1_slot1;
                    golf = _closure1_slot2;
                    tango = 5;
                    tango = golf[tango];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'APPLICATION_FETCH_SUCCESS';
                    tango['type'] = golf;
                    tango['application'] = zulu;
                    tango = report.bind(oscar)(tango);
 198:
                    return zulu;
 201:
                    return mike;
 204:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    oscar['createApplication'] = tango;
    tango = function(argFoo) { // Original name: getApplicationsForGuild
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = arguments[1];
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = undefined;
            if(!(report === mike)) { _fun00006_ip = 20; continue _fun00005 }
 18:
            report = {};
 20:
            zulu = report.includeTeam;
            var _closure2_slot1 = zulu;
            zulu = null;
            tango = Object.create(zulu);
            zulu = 0;
            tango['includeTeam'] = zulu;
            options = {};
            golf = report;
            oscar = tango;
            zulu = copyDataProperties(options, golf, oscar);
            var _closure2_slot2 = zulu;
            zulu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00008_ip = 182; continue _fun00007 }
 10:
                        zulu = _closure1_slot0;
                        report = _closure1_slot2;
                        mike = 6;
                        mike = report[mike];
                        oscar = undefined;
                        mike = zulu.bind(oscar)(mike);
                        report = mike.HTTP;
                        zulu = report.get;
                        mike = {};
                        offset = _closure1_slot8;
                        verify = offset.GUILD_APPLICATIONS;
                        golf = _closure2_slot0;
                        golf = verify.bind(offset)(golf);
                        mike['url'] = golf;
                        golf = {};
                        yankee = _closure2_slot2;
                        romeo = golf;
                        verify = copyDataProperties(romeo, yankee);
                        verify = _closure2_slot1;
                        options = 'include_team';
                        golf[options] = verify;
                        mike['query'] = golf;
                        golf = false;
                        mike['rejectWithError'] = golf;
                        mike = zulu.bind(report)(mike);
                        SaveGenerator(address=120);
 118:
                        return mike;
 120:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zulu) { _fun00008_ip = 179; continue _fun00007 }
 126:
                        zulu = mike.body;
                        report = _closure1_slot1;
                        golf = _closure1_slot2;
                        tango = 5;
                        tango = golf[tango];
                        oscar = report.bind(oscar)(tango);
                        report = oscar.dispatch;
                        tango = {};
                        golf = 'APPLICATIONS_FETCH_SUCCESS';
                        tango['type'] = golf;
                        tango['applications'] = zulu;
                        tango = report.bind(oscar)(tango);
                        return zulu;
 179:
                        return mike;
 182:
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
    oscar['getApplicationsForGuild'] = tango;
    tango = function(argFoo) { // Original name: transferApplication
        mike = argFoo;
        zulu = mike.applicationId;
        var _closure2_slot0 = zulu;
        mike = mike.teamId;
        var _closure2_slot1 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00010_ip = 165; continue _fun00009 }
 10:
                    zulu = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 6;
                    mike = report[mike];
                    oscar = undefined;
                    mike = zulu.bind(oscar)(mike);
                    report = mike.HTTP;
                    zulu = report.post;
                    mike = {};
                    offset = _closure1_slot8;
                    verify = offset.APPLICATION_OWNER_TRANSFER;
                    golf = _closure2_slot0;
                    golf = verify.bind(offset)(golf);
                    mike['url'] = golf;
                    golf = {};
                    options = _closure2_slot1;
                    golf['team_id'] = options;
                    mike['body'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = zulu.bind(report)(mike);
                    SaveGenerator(address=104);
 102:
                    return mike;
 104:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00010_ip = 162; continue _fun00009 }
 110:
                    zulu = mike.body;
                    report = _closure1_slot1;
                    golf = _closure1_slot2;
                    tango = 5;
                    tango = golf[tango];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'APPLICATION_FETCH_SUCCESS';
                    tango['type'] = golf;
                    tango['application'] = zulu;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 162:
                    return mike;
 165:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    oscar['transferApplication'] = tango;
    tango = function(argFoo) { // Original name: fetchApplications
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zulu = arguments[1];
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = undefined;
            if(!(zulu === mike)) { _fun00012_ip = 20; continue _fun00011 }
 18:
            zulu = true;
 20:
            var _closure2_slot1 = zulu;
            zulu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zulu) { _fun00014_ip = 374; continue _fun00013 }
 12:
                        report = undefined;
                        yankee = undefined;
                        oscar = _closure2_slot0;
                        tango = _closure2_slot1;
                        if(tango) { _fun00014_ip = 51; continue _fun00013 }
 30:
                        golf = _closure2_slot0;
                        tango = golf.filter;
                        zulu = function(argFoo) {
                            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                                mike = argFoo;
                                zulu = _closure1_slot6;
                                entity = zulu.getApplication;
                                oscar = entity.bind(zulu)(mike);
                                zulu = _closure1_slot0;
                                report = _closure1_slot2;
                                entity = 7;
                                entity = report[entity];
                                options = undefined;
                                offset = zulu.bind(options)(entity);
                                verify = offset.hasFlag;
                                report = null;
                                zulu = report == oscar;
                                entity = undefined;
                                if(zulu) { _fun00016_ip = 65; continue _fun00015 }
 60:
                                entity = oscar.flags;
 65:
                                yankee = report != entity;
                                zulu = 0;
                                golf = 0;
                                if(!yankee) { _fun00016_ip = 79; continue _fun00015 }
 76:
                                golf = entity;
 79:
                                entity = _closure1_slot7;
                                entity = entity.EMBEDDED;
                                entity = verify.bind(offset)(golf, entity);
                                if(!entity) { _fun00016_ip = 157; continue _fun00015 }
 98:
                                verify = report == oscar;
                                golf = undefined;
                                if(verify) { _fun00016_ip = 128; continue _fun00015 }
 107:
                                verify = oscar.embeddedActivityConfig;
                                offset = report == verify;
                                golf = undefined;
                                if(offset) { _fun00016_ip = 128; continue _fun00015 }
 122:
                                golf = verify.supported_platforms;
 128:
                                golf = report == golf;
                                if(golf) { _fun00016_ip = 154; continue _fun00015 }
 135:
                                verify = report == oscar;
                                options = undefined;
                                if(verify) { _fun00016_ip = 150; continue _fun00015 }
 144:
                                options = oscar.bot;
 150:
                                golf = report == options;
 154:
                                entity = golf;
 157:
                                report = report != oscar;
                                if(!report) { _fun00016_ip = 167; continue _fun00015 }
 164:
                                report = !entity;
 167:
                                entity = !report;
                                if(report) { _fun00016_ip = 191; continue _fun00015 }
 173:
                                oscar = _closure1_slot6;
                                report = oscar.isFetchingApplication;
                                report = report.bind(oscar)(mike);
                                entity = !report;
 191:
                                if(!entity) { _fun00016_ip = 212; continue _fun00015 }
 194:
                                report = _closure1_slot6;
                                tango = report.didFetchingApplicationFail;
                                tango = tango.bind(report)(mike);
                                entity = !tango;
 212:
                                if(!entity) { _fun00016_ip = 224; continue _fun00015 }
 215:
                                mike = mike.length;
                                entity = mike > zulu;
 224:
                                return entity;
                            }
                        };
                        oscar = tango.bind(golf)(zulu);
 51:
                        zulu = oscar;
                        tango = zulu.length;
                        zulu = 0;
                        if(!(tango > zulu)) { _fun00014_ip = 304; continue _fun00013 }
 68:
                        options = _closure1_slot1;
                        tango = _closure1_slot2;
                        golf = 5;
                        tango = tango[golf];
                        verify = options.bind(report)(tango);
                        options = verify.dispatch;
                        tango = {};
                        romeo = 'APPLICATIONS_FETCH';
                        tango['type'] = romeo;
                        romeo = oscar;
                        tango['applicationIds'] = romeo;
                        tango = options.bind(verify)(tango);
 119: // try_start_0
                        options = _closure1_slot0;
                        verify = _closure1_slot2;
                        tango = 6;
                        tango = verify[tango];
                        tango = options.bind(report)(tango);
                        verify = tango.HTTP;
                        options = verify.get;
                        tango = {};
                        romeo = _closure1_slot8;
                        romeo = romeo.APPLICATIONS_PUBLIC;
                        tango['url'] = romeo;
                        romeo = global;
                        foxtrot = romeo.URLSearchParams;
                        backup = oscar;
                        romeo = backup.map;
                        offset = function(argFoo) {
                            entity = ['application_ids'];
                            mike = argFoo;
                            entity[1] = mike;
                            return entity;
                        };
                        kilo = romeo.bind(backup)(offset);
                        romeo = foxtrot.prototype;
                        romeo = Object.create(romeo, {constructor: {value: foxtrot}});
                        sizing = romeo;
                        offset = new sizing[foxtrot](kilo, backup);
                        romeo = offset instanceof Object ? offset : romeo;
                        offset = romeo.toString;
                        offset = offset.bind(romeo)();
                        tango['query'] = offset;
                        offset = true;
                        tango['oldFormErrors'] = offset;
                        offset = false;
                        tango['rejectWithError'] = offset;
                        tango = options.bind(verify)(tango);
                        SaveGenerator(address=248);
 246:
                        return tango;
 248:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                        if(options) { _fun00014_ip = 307; continue _fun00013 }
 254:
                        yankee = tango;
 257: // try_end0
                        verify = _closure1_slot1;
                        options = _closure1_slot2;
                        options = options[golf];
                        offset = verify.bind(report)(options);
                        verify = offset.dispatch;
                        options = {};
                        romeo = 'APPLICATIONS_FETCH_SUCCESS';
                        options['type'] = romeo;
                        yankee = yankee.body;
                        options['applications'] = yankee;
                        options = verify.bind(offset)(options);
 304:
                        return report;
 307:
                        return tango;
 310: // catch_target0
                        CatchBlockStart(arg_register=3);
                        mike = tango;
                        options = tango.status;
                        tango = 429;
                        if(!(tango !== options)) { _fun00014_ip = 372; continue _fun00013 }
 330:
                        tango = _closure1_slot1;
                        zulu = _closure1_slot2;
                        zulu = zulu[golf];
                        report = tango.bind(report)(zulu);
                        tango = report.dispatch;
                        zulu = {};
                        golf = 'APPLICATIONS_FETCH_FAIL';
                        zulu['type'] = golf;
                        zulu['applicationIds'] = oscar;
                        zulu = tango.bind(report)(zulu);
 372:
                        throw mike;
 374:
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
    oscar['fetchApplications'] = tango;
    oscar['fetchApplication'] = report;
    romeo = 8;
    tango = verify[romeo];
    offset = options.bind(entity)(tango);
    golf = offset.createFetchStore;
    tango = {};
    foxtrot = function(argFoo) { // Original name: queryId
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            zulu = argFoo;
            entity = null;
            mike = entity != zulu;
            if(!mike) { _fun00018_ip = 29; continue _fun00017 }
 12:
            mike = ['applications'];
            mike[1] = zulu;
            entity = mike;
 29:
            return entity;
        }
    };
    tango['queryId'] = foxtrot;
    foxtrot = function(argFoo) { // Original name: get
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            tango = argFoo;
            entity = null;
            mike = entity != tango;
            if(!mike) { _fun00020_ip = 30; continue _fun00019 }
 12:
            zulu = _closure1_slot6;
            mike = zulu.getApplication;
            entity = mike.bind(zulu)(tango);
 30:
            return entity;
        }
    };
    tango['get'] = foxtrot;
    foxtrot = function(argFoo, argBar) { // Original name: load
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            golf = argBar;
            entity = null;
            if(!(entity == golf)) { _fun00022_ip = 29; continue _fun00021 }
 9:
            entity = global;
            mike = entity.Promise;
            entity = mike.resolve;
            entity = entity.bind(mike)();
            _fun00022_ip = 64; continue _fun00021;
 29:
            oscar = _closure1_slot11;
            report = undefined;
            tango = false;
            zulu = argFoo;
            tango = oscar.bind(report)(golf, tango, zulu);
            zulu = tango.then;
            mike = _closure1_slot9;
            entity = zulu.bind(tango)(mike);
 64:
            return entity;
        }
    };
    tango['load'] = foxtrot;
    romeo = verify[romeo];
    romeo = options.bind(entity)(romeo);
    romeo = romeo.useStateFromStores;
    tango['useStateHook'] = romeo;
    tango = golf.bind(offset)(yankee, tango);
    var _closure1_slot10 = tango;
    golf = 9;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/applications/ApplicationActionCreators.tsx';
    golf = options.bind(verify)(golf);
    zulu['default'] = oscar;
    zulu['fetchApplication'] = report;
    zulu['useApplication'] = tango;
    mike = function(argFoo) { // Original name: useApplicationWithLoggedOutContext
        offset = argFoo;
        var _closure2_slot0 = offset;
        entity = _closure1_slot10;
        options = undefined;
        entity = entity.bind(options)(offset);
        verify = entity.data;
        var _closure2_slot1 = verify;
        zulu = entity.isLoading;
        mike = entity.error;
        entity = {};
        golf = _closure1_slot0;
        yankee = _closure1_slot2;
        oscar = 8;
        oscar = yankee[oscar];
        options = golf.bind(options)(oscar);
        golf = options.useStateFromStores;
        report = _closure1_slot4;
        oscar = new Array(1);
        oscar[0] = report;
        report = new Array(2);
        report[0] = offset;
        report[1] = verify;
        tango = function() {
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                entity = _closure2_slot1;
                tango = null;
                if(!(tango == entity)) { _fun00024_ip = 39; continue _fun00023 }
 13:
                oscar = _closure1_slot4;
                report = oscar.getApplication;
                zulu = _closure2_slot0;
                zulu = report.bind(oscar)(zulu);
                if(!(tango == zulu)) { _fun00024_ip = 45; continue _fun00023 }
 39:
                mike = _closure2_slot1;
                return mike;
 45:
                mike = _closure1_slot5;
                entity = mike.createFromServer;
                entity = entity.bind(mike)(zulu);
                return entity;
            }
        };
        tango = golf.bind(options)(oscar, tango, report);
        entity['app'] = tango;
        entity['isLoading'] = zulu;
        entity['error'] = mike;
        return entity;
    };
    zulu['useApplicationWithLoggedOutContext'] = mike;
    return entity;
})();