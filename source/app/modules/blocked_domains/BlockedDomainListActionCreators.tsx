// app/modules/blocked_domains/BlockedDomainListActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: fetchBlockedDomainList_
        entity = undefined;
        tango = _closure1_slot11;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _fetchBlockedDomainList_
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun123206: for(var _fun123206_ip = 0; ; ) switch(_fun123206_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun123206_ip = 1190; continue _fun123206 }
 12:
                    mike = undefined;
                    romeo = undefined;
                    var _closure4_slot0 = mike;
                    golf = undefined;
                    var _closure4_slot1 = mike;
                    report = undefined;
                    foxtrot = undefined;
                    backup = undefined;
                    var _closure4_slot2 = mike;
                    verify = _closure1_slot9;
                    oscar = verify.verbose;
                    tango = 'Fetching blocked domain list';
                    tango = oscar.bind(verify)(tango);
 60: // try_start_4
                    verify = global;
                    offset = verify.parseInt;
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    yankee = 4;
                    tango = tango[yankee];
                    tango = oscar.bind(mike)(tango);
                    kilo = tango.HTTP;
                    oscar = kilo.get;
                    tango = _closure1_slot6;
                    tango = oscar.bind(kilo)(tango);
                    SaveGenerator(address=111);
 109:
                    return tango;
 111:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscar) { _fun123206_ip = 1168; continue _fun123206 }
 120:
                    oscar = tango.text;
                    echo = offset.bind(mike)(oscar);
                    golf = echo;
                    _closure4_slot1 = echo;
                    offset = _closure1_slot4;
                    oscar = offset.getCurrentRevision;
                    offset = oscar.bind(offset)();
                    report = offset;
                    sizing = _closure1_slot9;
                    kilo = sizing.verbose;
                    oscar = verify.HermesInternal;
                    result = oscar.concat;
                    output = 'Server revision: ';
                    oscar = ', Client revision: ';
                    oscar = result.bind(output)(echo, oscar, offset);
                    oscar = kilo.bind(sizing)(oscar);
                    oscar = null;
                    if(!(oscar !== offset)) { _fun123206_ip = 220; continue _fun123206 }
 207:
                    kilo = report;
                    offset = golf;
                    if(!(kilo !== offset)) { _fun123206_ip = 1147; continue _fun123206 }
 220: // try_start_0
                    offset = report;
                    if(!(oscar !== offset)) { _fun123206_ip = 823; continue _fun123206 }
 230:
                    kilo = report;
                    offset = golf;
                    if(!(!(kilo > offset))) { _fun123206_ip = 823; continue _fun123206 }
 243:
                    offset = golf;
                    golf = report;
                    offset = offset - golf;
                    golf = _closure1_slot8;
                    if(!(!(offset > golf))) { _fun123206_ip = 762; continue _fun123206 }
 264:
                    offset = _closure1_slot0;
                    golf = _closure1_slot2;
                    golf = golf[yankee];
                    golf = offset.bind(mike)(golf);
                    kilo = golf.HTTP;
                    offset = kilo.get;
                    golf = {};
                    sizing = _closure1_slot7;
                    golf['url'] = sizing;
                    sizing = {};
                    output = report;
                    sizing['revision'] = output;
                    golf['query'] = sizing;
                    sizing = false;
                    golf['rejectWithError'] = sizing;
                    golf = offset.bind(kilo)(golf);
                    SaveGenerator(address=330);
 328:
                    return golf;
 330:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                    if(offset) { _fun123206_ip = 759; continue _fun123206 }
 339:
                    offset = golf.body;
                    foxtrot = offset;
                    offset = offset.ADDED;
                    offset = offset.length;
                    kilo = 0;
                    if(!(kilo === offset)) { _fun123206_ip = 385; continue _fun123206 }
 364:
                    offset = foxtrot;
                    offset = offset.REMOVED;
                    offset = offset.length;
                    if(!(kilo !== offset)) { _fun123206_ip = 733; continue _fun123206 }
 385:
                    sizing = _closure1_slot9;
                    kilo = sizing.verbose;
                    offset = foxtrot;
                    output = offset.ADDED;
                    update = output.length;
                    offset = offset.REMOVED;
                    echo = offset.length;
                    offset = verify.HermesInternal;
                    result = offset.concat;
                    output = 'Retrieved delta, domains added: ';
                    offset = ', domains removed: ';
                    offset = result.bind(output)(update, offset, echo);
                    offset = kilo.bind(sizing)(offset);
                    kilo = _closure1_slot1;
                    sizing = _closure1_slot2;
                    offset = 3;
                    offset = sizing[offset];
                    result = kilo.bind(mike)(offset);
                    output = result.timeAsync;
                    sizing = '💾';
                    kilo = 'getBlockedDomainList';
                    offset = function() {
                        mike = _closure1_slot4;
                        entity = mike.getBlockedDomainList;
                        entity = entity.bind(mike)();
                        return entity;
                    };
                    offset = output.bind(result)(sizing, kilo, offset);
                    SaveGenerator(address=509);
 507:
                    return offset;
 509:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=14);
                    if(kilo) { _fun123206_ip = 730; continue _fun123206 }
 518:
                    backup = offset;
                    _closure4_slot2 = offset;
                    if(!(oscar !== offset)) { _fun123206_ip = 696; continue _fun123206 }
 532:
                    output = _closure1_slot9;
                    sizing = output.verbose;
                    kilo = backup;
                    update = kilo.size;
                    backup = verify.HermesInternal;
                    echo = backup.concat;
                    result = 'Blocked domains list length: ';
                    backup = ' before update';
                    backup = echo.bind(result)(update, backup);
                    backup = sizing.bind(output)(backup);
                    output = foxtrot.ADDED;
                    sizing = output.forEach;
                    backup = function(argFoo) {
                        _fun123208: for(var _fun123208_ip = 0; ; ) switch(_fun123208_ip) {
 0:
                            tango = argFoo;
                            mike = _closure4_slot2;
                            zulu = mike[tango];
                            mike = null;
                            if(!(mike == zulu)) { _fun123208_ip = 34; continue _fun123208 }
 20:
                            mike = _closure4_slot2;
                            entity = true;
                            mike[tango] = entity;
                            entity = undefined;
                            return entity;
 34:
                            entity = global;
                            zulu = entity.Error;
                            entity = entity.HermesInternal;
                            mike = entity.concat;
                            entity = 'Unable to add domain which is already in the blockedDomains set: ';
                            report = mike.bind(entity)(tango);
                            mike = zulu.prototype;
                            mike = Object.create(mike, {constructor: {value: zulu}});
                            oscar = mike;
                            entity = new oscar[zulu](report, tango);
                            entity = entity instanceof Object ? entity : mike;
                            throw entity;
                        }
                    };
                    backup = sizing.bind(output)(backup);
                    sizing = foxtrot.REMOVED;
                    backup = sizing.forEach;
                    foxtrot = function(argFoo) {
                        _fun123209: for(var _fun123209_ip = 0; ; ) switch(_fun123209_ip) {
 0:
                            tango = argFoo;
                            mike = _closure4_slot2;
                            zulu = mike[tango];
                            mike = null;
                            if(!(mike != zulu)) { _fun123209_ip = 34; continue _fun123209 }
 20:
                            mike = _closure4_slot2;
                            entity = false;
                            mike[tango] = entity;
                            entity = undefined;
                            return entity;
 34:
                            entity = global;
                            zulu = entity.Error;
                            entity = entity.HermesInternal;
                            mike = entity.concat;
                            entity = 'Unable to removed domain which is not in the blockedDomains set: ';
                            report = mike.bind(entity)(tango);
                            mike = zulu.prototype;
                            mike = Object.create(mike, {constructor: {value: zulu}});
                            oscar = mike;
                            entity = new oscar[zulu](report, tango);
                            entity = entity instanceof Object ? entity : mike;
                            throw entity;
                        }
                    };
                    foxtrot = backup.bind(sizing)(foxtrot);
                    backup = verify.Object;
                    foxtrot = backup.keys;
                    kilo = foxtrot.bind(backup)(kilo);
                    backup = kilo.filter;
                    foxtrot = function(argFoo) {
                        mike = _closure4_slot2;
                        entity = argFoo;
                        entity = mike[entity];
                        return entity;
                    };
                    foxtrot = backup.bind(kilo)(foxtrot);
                    romeo = foxtrot;
                    _closure4_slot0 = foxtrot;
                    kilo = _closure1_slot9;
                    backup = kilo.verbose;
                    foxtrot = 'Delta applied successfully';
                    foxtrot = backup.bind(kilo)(foxtrot);
 691: // try_end0
                    _fun123206_ip = 1046; continue _fun123206;
 696: // try_start_1
                    kilo = verify.Error;
                    foxtrot = kilo.prototype;
                    backup = Object.create(foxtrot, {constructor: {value: kilo}});
                    vacuum = 'Blocked domain list is null';
                    sequence = backup;
                    foxtrot = new sequence[kilo](vacuum, control);
                    foxtrot = foxtrot instanceof Object ? foxtrot : backup;
                    throw foxtrot;
 730: // try_end1 // try_end4
                    return offset;
 733: // try_start_2 // try_start_5
                    backup = _closure1_slot9;
                    foxtrot = backup.verbose;
                    offset = 'No changes to blocked domains list.';
                    offset = foxtrot.bind(backup)(offset);
 754: // try_end2 // try_end5
                    offset = undefined;
                    return offset;
 759:
                    return golf;
 762: // try_start_3 // try_start_6
                    foxtrot = verify.Error;
                    kilo = _closure1_slot8;
                    golf = verify.HermesInternal;
                    backup = golf.concat;
                    offset = 'Client revision number is more than ';
                    golf = ' behind the server revision number';
                    vacuum = backup.bind(offset)(kilo, golf);
                    offset = foxtrot.prototype;
                    offset = Object.create(offset, {constructor: {value: foxtrot}});
                    sequence = offset;
                    golf = new sequence[foxtrot](vacuum, control);
                    golf = golf instanceof Object ? golf : offset;
                    throw golf;
 823:
                    golf = verify.Error;
                    offset = 'greater than server revision number';
                    if(!(oscar === report)) { _fun123206_ip = 843; continue _fun123206 }
 839:
                    offset = 'null';
 843:
                    report = golf.prototype;
                    oscar = Object.create(report, {constructor: {value: golf}});
                    report = 'Client revision number is ';
                    vacuum = report + offset;
                    sequence = oscar;
                    report = new sequence[golf](vacuum, control);
                    report = report instanceof Object ? report : oscar;
                    throw report;
 875: // try_end3 // catch_target0 // catch_target1 // catch_target2 // catch_target3
                    CatchBlockStart(arg_register=4);
                    golf = _closure1_slot9;
                    oscar = golf.verbose;
                    foxtrot = report.message;
                    report = verify.HermesInternal;
                    offset = report.concat;
                    report = 'Unable to process domain list delta: ';
                    report = offset.bind(report)(foxtrot);
                    report = oscar.bind(golf)(report);
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    report = 5;
                    report = golf[report];
                    oscar = oscar.bind(mike)(report);
                    report = oscar.isSlowNetwork;
                    report = report.bind(oscar)();
                    golf = _closure1_slot9;
                    oscar = golf.verbose;
                    if(report) { _fun123206_ip = 1152; continue _fun123206 }
 965:
                    report = 'Downloading the full bad domains file';
                    report = oscar.bind(golf)(report);
                    offset = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[yankee];
                    report = offset.bind(mike)(report);
                    yankee = report.HTTP;
                    offset = yankee.get;
                    report = {};
                    foxtrot = _closure1_slot5;
                    report['url'] = foxtrot;
                    foxtrot = false;
                    report['rejectWithError'] = foxtrot;
                    report = offset.bind(yankee)(report);
                    SaveGenerator(address=1028);
 1026:
                    return report;
 1028:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                    if(offset) { _fun123206_ip = 1149; continue _fun123206 }
 1034:
                    offset = report.body;
                    romeo = offset;
                    _closure4_slot0 = offset;
 1046:
                    yankee = _closure1_slot9;
                    offset = yankee.verbose;
                    backup = romeo.length;
                    verify = verify.HermesInternal;
                    foxtrot = verify.concat;
                    romeo = 'Blocked domains list length: ';
                    verify = ' after update';
                    verify = foxtrot.bind(romeo)(backup, verify);
                    verify = offset.bind(yankee)(verify);
                    offset = _closure1_slot1;
                    yankee = _closure1_slot2;
                    verify = 3;
                    verify = yankee[verify];
                    romeo = offset.bind(mike)(verify);
                    yankee = romeo.time;
                    offset = '💾';
                    verify = 'Save Blocked Domain List';
                    options = function() {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 6;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.dispatch;
                        entity = {};
                        tango = 'BLOCKED_DOMAIN_LIST_FETCHED';
                        entity['type'] = tango;
                        report = _closure4_slot0;
                        entity['list'] = report;
                        tango = _closure4_slot1;
                        entity['revision'] = tango;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    options = yankee.bind(romeo)(offset, verify, options);
 1147: // try_end6
                    _fun123206_ip = 1187; continue _fun123206;
 1149:
                    return report;
 1152: // try_start_7
                    report = 'Slow network detected, not downloading full list';
                    report = oscar.bind(golf)(report);
 1163: // try_end7
                    report = undefined;
                    return report;
 1168:
                    return tango;
 1171: // catch_target4 // catch_target5 // catch_target6 // catch_target7
                    CatchBlockStart(arg_register=4);
                    tango = _closure1_slot9;
                    zulu = tango.error;
                    zulu = zulu.bind(tango)(report);
 1187:
                    return mike;
 1190:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot11 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot11 = entity;
    tango = global;
    offset = tango.Object;
    verify = offset.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, options);
    entity = 0;
    options = oscar[entity];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 1;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 'https://cdn.discordapp.com/bad-domains/updated_hashes.json';
    var _closure1_slot5 = options;
    options = 'https://cdn.discordapp.com/bad-domains/current_revision.txt';
    var _closure1_slot6 = options;
    options = tango.window;
    options = options.GLOBAL_ENV;
    offset = options.WEBAPP_ENDPOINT;
    tango = tango.HermesInternal;
    verify = tango.concat;
    options = 'https:';
    tango = '/bad-hash-delta';
    tango = verify.bind(options)(offset, tango);
    var _closure1_slot7 = tango;
    tango = 15;
    var _closure1_slot8 = tango;
    tango = 2;
    tango = oscar[tango];
    options = golf.bind(entity)(tango);
    tango = options.prototype;
    golf = Object.create(tango, {constructor: {value: options}});
    foxtrot = 'FetchBlockedDomain';
    backup = golf;
    tango = new backup[options](foxtrot, romeo);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/blocked_domains/BlockedDomainListActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: fetchBlockedDomainList
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        mike = 3;
        zulu = zulu[mike];
        mike = undefined;
        report = tango.bind(mike)(zulu);
        tango = report.timeAsync;
        zulu = _closure1_slot10;
        mike = '💾';
        entity = 'fetchBlockedDomainList';
        entity = tango.bind(report)(mike, entity, zulu);
        return entity;
    };
    zulu['fetchBlockedDomainList'] = mike;
    return entity;
})();