// app/modules/app_database/background_sync/native/BackgroundSync.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
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
            verify = _closure1_slot20;
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
            golf = _closure1_slot20;
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
    var _closure1_slot19 = entity;
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
    var _closure1_slot20 = entity;
    entity = function() { // Original name: _backgroundSync
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00008_ip = 1216; continue _fun00007 }
 13:
                    report = mike.force;
                    tango = undefined;
                    if(!(report === tango)) { _fun00008_ip = 27; continue _fun00007 }
 25:
                    report = false;
 27:
                    kilo = report;
                    report = mike.messagesOnly;
                    if(!(report === tango)) { _fun00008_ip = 42; continue _fun00007 }
 40:
                    report = false;
 42:
                    sizing = report;
                    mike = mike.checkLastMessageId;
                    if(!(mike === tango)) { _fun00008_ip = 57; continue _fun00007 }
 55:
                    mike = false;
 57:
                    result = mike;
                    foxtrot = undefined;
                    output = undefined;
                    echo = undefined;
                    golf = undefined;
                    SaveGenerator(address=72);
 70:
                    return tango;
 72:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00008_ip = 1213; continue _fun00007 }
 81:
                    verify = _closure1_slot14;
                    options = verify.verbose;
                    zulu = 'Starting Background Sync';
                    zulu = options.bind(verify)(zulu);
                    zulu = kilo;
                    if(zulu) { _fun00008_ip = 321; continue _fun00007 }
 114:
                    options = _closure1_slot0;
                    zulu = _closure1_slot2;
                    offset = 14;
                    zulu = zulu[offset];
                    zulu = options.bind(tango)(zulu);
                    verify = zulu.Storage;
                    options = verify.get;
                    zulu = _closure1_slot16;
                    zulu = options.bind(verify)(zulu);
                    options = null;
                    options = options != zulu;
                    verify = 0;
                    if(!options) { _fun00008_ip = 168; continue _fun00007 }
 165:
                    verify = zulu;
 168:
                    zulu = global;
                    yankee = zulu.Date;
                    options = yankee.now;
                    options = options.bind(yankee)();
                    if(!(!(verify > options))) { _fun00008_ip = 242; continue _fun00007 }
 189:
                    yankee = zulu.Date;
                    options = yankee.now;
                    options = options.bind(yankee)();
                    verify = options - verify;
                    options = _closure1_slot15;
                    if(!(verify < options)) { _fun00008_ip = 321; continue _fun00007 }
 216:
                    yankee = _closure1_slot14;
                    verify = yankee.log;
                    options = 'Skipping Background Sync because it has been too soon';
                    options = verify.bind(yankee)(options);
                    options = undefined;
                    return options;
 242:
                    yankee = _closure1_slot14;
                    verify = yankee.log;
                    options = 'Skipping Background Sync because of clock skew';
                    options = verify.bind(yankee)(options);
                    verify = _closure1_slot0;
                    options = _closure1_slot2;
                    options = options[offset];
                    options = verify.bind(tango)(options);
                    offset = options.Storage;
                    verify = offset.set;
                    options = _closure1_slot16;
                    yankee = zulu.Date;
                    zulu = yankee.now;
                    zulu = zulu.bind(yankee)();
                    zulu = verify.bind(offset)(options, zulu);
                    zulu = undefined;
                    return zulu;
 321:
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    zulu = 14;
                    zulu = verify[zulu];
                    zulu = options.bind(tango)(zulu);
                    yankee = zulu.Storage;
                    offset = yankee.set;
                    options = _closure1_slot16;
                    verify = global;
                    romeo = verify.Date;
                    zulu = romeo.now;
                    zulu = zulu.bind(romeo)();
                    zulu = offset.bind(yankee)(options, zulu);
                    options = _closure1_slot10;
                    zulu = options.refresh;
                    zulu = zulu.bind(options)();
                    SaveGenerator(address=397);
 395:
                    return zulu;
 397:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(options) { _fun00008_ip = 1210; continue _fun00007 }
 406:
                    options = _closure1_slot10;
                    options = options.isLowDisk;
                    if(options) { _fun00008_ip = 1186; continue _fun00007 }
 422:
                    foxtrot = {};
                    offset = verify.Date;
                    options = offset.now;
                    offset = options.bind(offset)();
                    output = offset;
                    options = verify.String;
                    echo = options.bind(tango)(offset);
                    golf = -1;
 459: // try_start_0 // try_start_1
                    offset = _closure1_slot1;
                    options = _closure1_slot2;
                    romeo = 15;
                    options = options[romeo];
                    offset = offset.bind(tango)(options);
                    options = offset.startBackgroundTask;
                    options = options.bind(offset)();
                    SaveGenerator(address=493);
 491:
                    return options;
 493:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=9);
                    if(offset) { _fun00008_ip = 772; continue _fun00007 }
 502:
                    golf = options;
                    backup = verify.Promise;
                    yankee = backup.all;
                    offset = _closure1_slot22;
                    control = echo;
                    source = foxtrot;
                    update = output;
                    echo = offset.bind(tango)(control, source, update);
                    offset = new Array(3);
                    offset[0] = echo;
                    echo = _closure1_slot26;
                    vacuum = result;
                    context = undefined;
                    record = control;
                    config = source;
                    sequence = update;
                    result = context[echo](record, config, sequence, vacuum, control);
                    offset[1] = result;
                    result = sizing;
                    if(result) { _fun00008_ip = 593; continue _fun00007 }
 577:
                    echo = _closure1_slot24;
                    result = foxtrot;
                    kilo = echo.bind(tango)(result, output, kilo);
                    _fun00008_ip = 609; continue _fun00007;
 593:
                    result = verify.Promise;
                    output = result.resolve;
                    kilo = output.bind(result)();
 609:
                    offset[2] = kilo;
                    offset = yankee.bind(backup)(offset);
                    SaveGenerator(address=622);
 620:
                    return offset;
 622:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(yankee) { _fun00008_ip = 680; continue _fun00007 }
 628:
                    backup = _closure1_slot1;
                    kilo = _closure1_slot2;
                    yankee = 16;
                    yankee = kilo[yankee];
                    kilo = backup.bind(tango)(yankee);
                    backup = kilo.dispatch;
                    yankee = {};
                    output = 'BACKGROUND_SYNC_FINISHED';
                    yankee['type'] = output;
                    yankee['messagesOnly'] = sizing;
                    yankee = backup.bind(kilo)(yankee);
 675: // try_end0
                    _fun00008_ip = 1002; continue _fun00007;
 680: // try_end1
                    backup = _closure1_slot1;
                    yankee = _closure1_slot2;
                    kilo = 18;
                    kilo = yankee[kilo];
                    output = backup.bind(tango)(kilo);
                    sizing = output.track;
                    kilo = _closure1_slot11;
                    kilo = kilo.BACKGROUND_SYNC_COMPLETED;
                    result = foxtrot;
                    kilo = sizing.bind(output)(kilo, result);
                    output = _closure1_slot14;
                    sizing = output.verbose;
                    kilo = 'Finished Background Sync';
                    kilo = sizing.bind(output)(kilo, result);
                    yankee = yankee[romeo];
                    kilo = backup.bind(tango)(yankee);
                    backup = kilo.endBackgroundTask;
                    yankee = golf;
                    yankee = backup.bind(kilo)(yankee);
                    return offset;
 772:
                    yankee = _closure1_slot1;
                    offset = _closure1_slot2;
                    backup = 18;
                    backup = offset[backup];
                    sizing = yankee.bind(tango)(backup);
                    kilo = sizing.track;
                    backup = _closure1_slot11;
                    backup = backup.BACKGROUND_SYNC_COMPLETED;
                    output = foxtrot;
                    backup = kilo.bind(sizing)(backup, output);
                    sizing = _closure1_slot14;
                    kilo = sizing.verbose;
                    backup = 'Finished Background Sync';
                    backup = kilo.bind(sizing)(backup, output);
                    offset = offset[romeo];
                    romeo = yankee.bind(tango)(offset);
                    yankee = romeo.endBackgroundTask;
                    offset = golf;
                    offset = yankee.bind(romeo)(offset);
                    return options;
 864: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=7);
                    oscar = options;
                    offset = options.status;
                    options = 429;
                    if(!(options !== offset)) { _fun00008_ip = 910; continue _fun00007 }
 884:
                    romeo = _closure1_slot14;
                    yankee = romeo.error;
                    offset = oscar;
                    options = 'Background sync encountered error';
                    options = yankee.bind(romeo)(options, offset);
                    _fun00008_ip = 931; continue _fun00007;
 910:
                    yankee = _closure1_slot14;
                    offset = yankee.verbose;
                    options = 'Background sync was rate limited';
                    options = offset.bind(yankee)(options);
 931:
                    options = oscar;
                    options = options.timeout;
                    if(options) { _fun00008_ip = 977; continue _fun00007 }
 943:
                    offset = _closure1_slot1;
                    yankee = _closure1_slot2;
                    options = 17;
                    options = yankee[options];
                    yankee = offset.bind(tango)(options);
                    offset = yankee.captureException;
                    options = oscar;
                    options = offset.bind(yankee)(options);
 977:
                    options = foxtrot;
                    verify = verify.String;
                    oscar = oscar.message;
                    oscar = verify.bind(tango)(oscar);
                    options['error'] = oscar;
 1002: // try_end2
                    options = _closure1_slot1;
                    verify = _closure1_slot2;
                    oscar = 18;
                    oscar = verify[oscar];
                    yankee = options.bind(tango)(oscar);
                    offset = yankee.track;
                    oscar = _closure1_slot11;
                    oscar = oscar.BACKGROUND_SYNC_COMPLETED;
                    romeo = foxtrot;
                    oscar = offset.bind(yankee)(oscar, romeo);
                    yankee = _closure1_slot14;
                    offset = yankee.verbose;
                    oscar = 'Finished Background Sync';
                    oscar = offset.bind(yankee)(oscar, romeo);
                    oscar = 15;
                    oscar = verify[oscar];
                    verify = options.bind(tango)(oscar);
                    options = verify.endBackgroundTask;
                    oscar = golf;
                    oscar = options.bind(verify)(oscar);
                    _fun00008_ip = 1207; continue _fun00007;
 1096: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=5);
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    options = 18;
                    options = offset[options];
                    romeo = verify.bind(tango)(options);
                    yankee = romeo.track;
                    options = _closure1_slot11;
                    options = options.BACKGROUND_SYNC_COMPLETED;
                    options = yankee.bind(romeo)(options, foxtrot);
                    romeo = _closure1_slot14;
                    yankee = romeo.verbose;
                    options = 'Finished Background Sync';
                    options = yankee.bind(romeo)(options, foxtrot);
                    options = 15;
                    options = offset[options];
                    verify = verify.bind(tango)(options);
                    options = verify.endBackgroundTask;
                    golf = options.bind(verify)(golf);
                    throw oscar;
 1186:
                    golf = _closure1_slot14;
                    oscar = golf.log;
                    report = 'Skipping Background Sync because disk is low';
                    report = oscar.bind(golf)(report);
 1207:
                    return tango;
 1210:
                    return zulu;
 1213:
                    return mike;
 1216:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot21 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function() { // Original name: backgroundSyncPrivateChannels
        entity = undefined;
        tango = _closure1_slot23;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = function() { // Original name: _backgroundSyncPrivateChannels
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    golf = argBar;
                    options = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00010_ip = 616; continue _fun00009 }
 18:
                    tango = undefined;
                    var _closure4_slot0 = tango;
                    var _closure4_slot1 = tango;
                    var _closure4_slot2 = tango;
                    oscar = _closure1_slot1;
                    verify = _closure1_slot2;
                    mike = 19;
                    mike = verify[mike];
                    oscar = oscar.bind(tango)(mike);
                    mike = oscar.messages;
                    romeo = mike.bind(oscar)();
                    _closure4_slot0 = romeo;
                    offset = null;
                    if(!(offset == romeo)) { _fun00010_ip = 101; continue _fun00009 }
 75:
                    verify = _closure1_slot14;
                    oscar = verify.log;
                    mike = 'Aborting BG sync because there is no database';
                    mike = oscar.bind(verify)(mike);
                    _fun00010_ip = 607; continue _fun00009;
 101:
                    kilo = _closure1_slot0;
                    backup = _closure1_slot2;
                    mike = 20;
                    mike = backup[mike];
                    mike = kilo.bind(tango)(mike);
                    verify = mike.HTTP;
                    oscar = verify.post;
                    mike = {};
                    yankee = _closure1_slot12;
                    yankee = yankee.MESSAGE_LOG_PRIVATE_CHANNELS;
                    mike['url'] = yankee;
                    yankee = {};
                    foxtrot = _closure1_slot13;
                    yankee['per_channel_limit'] = foxtrot;
                    foxtrot = 14;
                    backup = backup[foxtrot];
                    backup = kilo.bind(tango)(backup);
                    sizing = backup.Storage;
                    kilo = sizing.get;
                    backup = _closure1_slot18;
                    backup = kilo.bind(sizing)(backup);
                    yankee['last_synced_message_id'] = backup;
                    mike['body'] = yankee;
                    yankee = 5000;
                    mike['timeout'] = yankee;
                    yankee = false;
                    mike['rejectWithError'] = yankee;
                    mike = oscar.bind(verify)(mike);
                    SaveGenerator(address=228);
 226:
                    return mike;
 228:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscar) { _fun00010_ip = 613; continue _fun00009 }
 237:
                    kilo = mike.body;
                    _closure4_slot1 = kilo;
                    oscar = global;
                    backup = oscar.Date;
                    verify = backup.now;
                    verify = verify.bind(backup)();
                    verify = verify - options;
                    golf['time_finish_fetch_private_channel_messages'] = verify;
                    verify = 0;
                    golf['num_private_channel_messages'] = verify;
                    backup = oscar.JSON;
                    verify = backup.stringify;
                    verify = verify.bind(backup)(kilo);
                    verify = verify.length;
                    golf['size_private_channel_messages'] = verify;
                    verify = kilo.latest_message_id;
                    if(!(offset != verify)) { _fun00010_ip = 367; continue _fun00009 }
 323:
                    offset = _closure1_slot0;
                    verify = _closure1_slot2;
                    verify = verify[foxtrot];
                    verify = offset.bind(tango)(verify);
                    backup = verify.Storage;
                    foxtrot = backup.set;
                    offset = _closure1_slot18;
                    verify = kilo.latest_message_id;
                    verify = foxtrot.bind(backup)(offset, verify);
 367:
                    offset = {};
                    _closure4_slot2 = offset;
                    foxtrot = oscar.Promise;
                    verify = foxtrot.all;
                    sizing = _closure1_slot1;
                    output = _closure1_slot2;
                    backup = 21;
                    backup = output[backup];
                    output = sizing.bind(tango)(backup);
                    sizing = output.keys;
                    backup = kilo.changes_by_channel_id;
                    sizing = sizing.bind(output)(backup);
                    backup = sizing.map;
                    zulu = function(argFoo) {
                        oscar = argFoo;
                        report = _closure1_slot28;
                        offset = _closure4_slot0;
                        verify = _closure4_slot2;
                        entity = _closure4_slot1;
                        entity = entity.changes_by_channel_id;
                        golf = entity[oscar];
                        yankee = undefined;
                        options = oscar;
                        entity = yankee[report](offset, verify, options, golf, oscar);
                        return entity;
                    };
                    zulu = backup.bind(sizing)(zulu);
                    zulu = verify.bind(foxtrot)(zulu);
                    SaveGenerator(address=447);
 445:
                    return zulu;
 447:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(verify) { _fun00010_ip = 610; continue _fun00009 }
 456:
                    foxtrot = _closure1_slot1;
                    backup = _closure1_slot2;
                    verify = 22;
                    verify = backup[verify];
                    foxtrot = foxtrot.bind(tango)(verify);
                    verify = foxtrot.isEmpty;
                    verify = verify.bind(foxtrot)(offset);
                    if(verify) { _fun00010_ip = 607; continue _fun00009 }
 490:
                    foxtrot = _closure1_slot1;
                    backup = _closure1_slot2;
                    verify = 16;
                    verify = backup[verify];
                    backup = foxtrot.bind(tango)(verify);
                    foxtrot = backup.dispatch;
                    verify = {};
                    sizing = 'BACKGROUND_SYNC_CHANNEL_MESSAGES';
                    verify['type'] = sizing;
                    kilo = kilo.changes_by_channel_id;
                    verify['changesByChannelId'] = kilo;
                    verify = foxtrot.bind(backup)(verify);
                    verify = _closure1_slot30;
                    update = argFoo;
                    vacuum = undefined;
                    control = romeo;
                    source = offset;
                    echo = golf;
                    result = false;
                    report = vacuum[verify](control, source, update, echo, result, output);
                    SaveGenerator(address=569);
 567:
                    return report;
 569:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(verify) { _fun00010_ip = 604; continue _fun00009 }
 575:
                    verify = oscar.Date;
                    oscar = verify.now;
                    oscar = oscar.bind(verify)();
                    oscar = oscar - options;
                    golf['time_save_private_channel_messages'] = oscar;
                    _fun00010_ip = 607; continue _fun00009;
 604:
                    return report;
 607:
                    return tango;
 610:
                    return zulu;
 613:
                    return mike;
 616:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot23 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: backgroundSyncGuildData
        entity = undefined;
        tango = _closure1_slot25;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = function() { // Original name: _backgroundSyncGuildData
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    options = argFoo;
                    verify = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00012_ip = 732; continue _fun00011 }
 18:
                    var _closure4_slot0 = options;
                    golf = global;
                    tango = golf.Promise;
                    zulu = tango.all;
                    yankee = _closure1_slot1;
                    romeo = _closure1_slot2;
                    mike = 23;
                    mike = romeo[mike];
                    oscar = undefined;
                    report = yankee.bind(oscar)(mike);
                    mike = report.getCommittedVersions;
                    report = mike.bind(report)();
                    mike = new Array(3);
                    mike[0] = report;
                    report = 24;
                    report = romeo[report];
                    foxtrot = yankee.bind(oscar)(report);
                    report = foxtrot.getCommittedVersions;
                    report = report.bind(foxtrot)();
                    mike[1] = report;
                    report = 25;
                    report = romeo[report];
                    yankee = yankee.bind(oscar)(report);
                    report = yankee.canUseGuildVersions;
                    report = report.bind(yankee)();
                    mike[2] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=140);
 138:
                    return mike;
 140:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00012_ip = 729; continue _fun00011 }
 149:
                    tango = _closure1_slot3;
                    zulu = 3;
                    tango = tango.bind(oscar)(mike, zulu);
                    report = 0;
                    sizing = tango[report];
                    zulu = 1;
                    backup = tango[zulu];
                    zulu = 2;
                    romeo = tango[zulu];
                    tango = _closure1_slot0;
                    yankee = _closure1_slot2;
                    zulu = 20;
                    zulu = yankee[zulu];
                    zulu = tango.bind(oscar)(zulu);
                    yankee = zulu.HTTP;
                    tango = yankee.post;
                    zulu = {};
                    foxtrot = _closure1_slot12;
                    foxtrot = foxtrot.BACKGROUND_SYNC;
                    zulu['url'] = foxtrot;
                    if(romeo) { _fun00012_ip = 236; continue _fun00011 }
 232:
                    romeo = {};
                    _fun00012_ip = 268; continue _fun00011;
 236:
                    foxtrot = {};
                    foxtrot['guild_versions'] = sizing;
                    sizing = backup.highest_last_message_id;
                    foxtrot['highest_last_message_id'] = sizing;
                    backup = backup.api_code_version;
                    foxtrot['api_code_version'] = backup;
                    romeo = foxtrot;
 268:
                    zulu['body'] = romeo;
                    romeo = 5000;
                    zulu['timeout'] = romeo;
                    romeo = false;
                    zulu['rejectWithError'] = romeo;
                    zulu = tango.bind(yankee)(zulu);
                    SaveGenerator(address=298);
 296:
                    return zulu;
 298:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun00012_ip = 726; continue _fun00011 }
 307:
                    tango = zulu.body;
                    yankee = tango.guilds;
                    backup = tango.api_code_version;
                    romeo = golf.Date;
                    tango = romeo.now;
                    tango = tango.bind(romeo)();
                    tango = tango - verify;
                    options['time_finish_fetch_guild_data'] = tango;
                    romeo = golf.JSON;
                    tango = romeo.stringify;
                    tango = tango.bind(romeo)(yankee);
                    tango = tango.length;
                    options['size_guild_data'] = tango;
                    tango = yankee.length;
                    options['num_guilds'] = tango;
                    options['num_unavailable_guilds'] = report;
                    tango = yankee.length;
                    if(!(report !== tango)) { _fun00012_ip = 717; continue _fun00011 }
 410:
                    report = yankee.map;
                    tango = function(argFoo) {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            zulu = argFoo;
                            mike = zulu.unavailable;
                            entity = zulu;
                            if(!mike) { _fun00014_ip = 60; continue _fun00013 }
 15:
                            tango = _closure4_slot0;
                            mike = tango.num_unavailable_guilds;
                            mike = mike + 1;
                            tango['num_unavailable_guilds'] = mike;
                            mike = {};
                            zulu = zulu.id;
                            mike['id'] = zulu;
                            zulu = 'unavailable';
                            mike['data_mode'] = zulu;
                            entity = mike;
 60:
                            return entity;
                        }
                    };
                    output = report.bind(yankee)(tango);
                    yankee = golf.Promise;
                    tango = yankee.prototype;
                    report = Object.create(tango, {constructor: {value: yankee}});
                    update = function(argFoo) {
                        entity = global;
                        tango = entity.setTimeout;
                        zulu = undefined;
                        mike = argFoo;
                        entity = 0;
                        entity = tango.bind(zulu)(mike, entity);
                        return entity;
                    };
                    source = report;
                    tango = new source[yankee](update, echo);
                    tango = tango instanceof Object ? tango : report;
                    SaveGenerator(address=464);
 462:
                    return tango;
 464:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00012_ip = 723; continue _fun00011 }
 473:
                    report = argBaz;
                    if(report) { _fun00012_ip = 527; continue _fun00011 }
 479:
                    yankee = _closure1_slot9;
                    report = yankee.getState;
                    yankee = report.bind(yankee)();
                    report = 'active';
                    if(!(report === yankee)) { _fun00012_ip = 527; continue _fun00011 }
 501:
                    romeo = _closure1_slot14;
                    yankee = romeo.log;
                    report = 'Skipping guild data background sync because app is now active';
                    report = yankee.bind(romeo)(report);
                    _fun00012_ip = 717; continue _fun00011;
 527:
                    romeo = new Array(0);
                    yankee = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    report = 16;
                    report = foxtrot[report];
                    foxtrot = yankee.bind(oscar)(report);
                    yankee = foxtrot.dispatch;
                    report = {};
                    sizing = 'BACKGROUND_SYNC';
                    report['type'] = sizing;
                    report['guilds'] = output;
                    result = output.map;
                    sizing = function(argFoo) {
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            tango = argFoo;
                            entity = tango.data_mode;
                            zulu = 'unavailable';
                            if(!(zulu !== entity)) { _fun00016_ip = 137; continue _fun00015 }
 17:
                            entity = tango.data_mode;
                            report = 'partial';
                            if(!(report !== entity)) { _fun00016_ip = 64; continue _fun00015 }
 31:
                            entity = {};
                            mike = 'full';
                            entity['dataMode'] = mike;
                            mike = tango.id;
                            entity['guildId'] = mike;
                            mike = tango.emojis;
                            entity['entities'] = mike;
                            _fun00016_ip = 135; continue _fun00015;
 64:
                            mike = {};
                            mike['dataMode'] = report;
                            report = tango.id;
                            mike['guildId'] = report;
                            report = tango.partial_updates;
                            report = report.emojis;
                            oscar = null;
                            if(!(oscar == report)) { _fun00016_ip = 102; continue _fun00015 }
 98:
                            report = new Array(0);
 102:
                            mike['updatedEntities'] = report;
                            report = tango.partial_updates;
                            report = report.deleted_emoji_ids;
                            if(!(oscar == report)) { _fun00016_ip = 127; continue _fun00015 }
 123:
                            report = new Array(0);
 127:
                            mike['deletedEntityIds'] = report;
                            entity = mike;
 135:
                            _fun00016_ip = 156; continue _fun00015;
 137:
                            mike = {};
                            tango = tango.id;
                            mike['guildId'] = tango;
                            mike['dataMode'] = zulu;
                            entity = mike;
 156:
                            return entity;
                        }
                    };
                    sizing = result.bind(output)(sizing);
                    report['emojis'] = sizing;
                    sizing = output.map;
                    kilo = function(argFoo) {
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            tango = argFoo;
                            entity = tango.data_mode;
                            zulu = 'unavailable';
                            if(!(zulu !== entity)) { _fun00018_ip = 137; continue _fun00017 }
 17:
                            entity = tango.data_mode;
                            report = 'partial';
                            if(!(report !== entity)) { _fun00018_ip = 64; continue _fun00017 }
 31:
                            entity = {};
                            mike = 'full';
                            entity['dataMode'] = mike;
                            mike = tango.id;
                            entity['guildId'] = mike;
                            mike = tango.stickers;
                            entity['entities'] = mike;
                            _fun00018_ip = 135; continue _fun00017;
 64:
                            mike = {};
                            mike['dataMode'] = report;
                            report = tango.id;
                            mike['guildId'] = report;
                            report = tango.partial_updates;
                            report = report.stickers;
                            oscar = null;
                            if(!(oscar == report)) { _fun00018_ip = 102; continue _fun00017 }
 98:
                            report = new Array(0);
 102:
                            mike['updatedEntities'] = report;
                            report = tango.partial_updates;
                            report = report.deleted_sticker_ids;
                            if(!(oscar == report)) { _fun00018_ip = 127; continue _fun00017 }
 123:
                            report = new Array(0);
 127:
                            mike['deletedEntityIds'] = report;
                            entity = mike;
 135:
                            _fun00018_ip = 156; continue _fun00017;
 137:
                            mike = {};
                            tango = tango.id;
                            mike['guildId'] = tango;
                            mike['dataMode'] = zulu;
                            entity = mike;
 156:
                            return entity;
                        }
                    };
                    kilo = sizing.bind(output)(kilo);
                    report['stickers'] = kilo;
                    report['apiCodeVersion'] = backup;
                    report['promisesForBackgroundSyncToWaitOn'] = romeo;
                    report = yankee.bind(foxtrot)(report);
                    yankee = golf.Promise;
                    report = yankee.all;
                    report = report.bind(yankee)(romeo);
                    SaveGenerator(address=651);
 649:
                    return report;
 651:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=10);
                    if(yankee) { _fun00012_ip = 720; continue _fun00011 }
 657:
                    yankee = _closure1_slot0;
                    romeo = _closure1_slot2;
                    offset = 26;
                    offset = romeo[offset];
                    romeo = yankee.bind(oscar)(offset);
                    yankee = romeo.writeCaches;
                    offset = true;
                    offset = yankee.bind(romeo)(offset);
                    offset = golf.Date;
                    golf = offset.now;
                    golf = golf.bind(offset)();
                    golf = golf - verify;
                    options['time_save_guild_data'] = golf;
 717:
                    return oscar;
 720:
                    return report;
 723:
                    return tango;
 726:
                    return zulu;
 729:
                    return mike;
 732:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot25 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: backgroundSyncGuildChannels
        entity = undefined;
        tango = _closure1_slot27;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: _backgroundSyncGuildChannels
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo, argBar, argBaz, argCorge) {
            entity = function* (argFoo, argBar, argBaz, argCorge) { // Original name: ?anon_0_
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    StartGenerator();
                    golf = argBar;
                    options = argBaz;
                    output = argCorge;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00020_ip = 956; continue _fun00019 }
 21:
                    tango = undefined;
                    var _closure4_slot0 = tango;
                    oscar = _closure1_slot1;
                    verify = _closure1_slot2;
                    zulu = 19;
                    zulu = verify[zulu];
                    oscar = oscar.bind(tango)(zulu);
                    zulu = oscar.messages;
                    romeo = zulu.bind(oscar)();
                    _closure4_slot0 = romeo;
                    source = null;
                    if(!(source == romeo)) { _fun00020_ip = 96; continue _fun00019 }
 70:
                    verify = _closure1_slot14;
                    oscar = verify.log;
                    zulu = 'Aborting BG sync because there is no database';
                    zulu = oscar.bind(verify)(zulu);
                    _fun00020_ip = 947; continue _fun00019;
 96:
                    oscar = _closure1_slot1;
                    zulu = _closure1_slot2;
                    foxtrot = 22;
                    zulu = zulu[foxtrot];
                    oscar = oscar.bind(tango)(zulu);
                    verify = _closure1_slot8;
                    zulu = verify.getReadStatesByChannel;
                    zulu = zulu.bind(verify)();
                    oscar = oscar.bind(tango)(zulu);
                    zulu = oscar.values;
                    verify = zulu.bind(oscar)();
                    oscar = verify.filter;
                    zulu = function(argFoo) {
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                            tango = argFoo;
                            zulu = _closure1_slot7;
                            mike = zulu.getBasicChannel;
                            entity = tango.channelId;
                            zulu = mike.bind(zulu)(entity);
                            report = null;
                            entity = report != zulu;
                            if(!entity) { _fun00022_ip = 105; continue _fun00021 }
 35:
                            options = _closure1_slot5;
                            mike = zulu.type;
                            golf = undefined;
                            mike = options.bind(golf)(mike);
                            mike = !mike;
                            if(!mike) { _fun00022_ip = 74; continue _fun00021 }
 57:
                            oscar = _closure1_slot6;
                            zulu = zulu.type;
                            zulu = oscar.bind(golf)(zulu);
                            mike = !zulu;
 74:
                            if(!mike) { _fun00022_ip = 102; continue _fun00021 }
 77:
                            zulu = tango.guildId;
                            zulu = report != zulu;
                            if(!zulu) { _fun00022_ip = 99; continue _fun00021 }
 89:
                            tango = tango.lastViewed;
                            zulu = report != tango;
 99:
                            mike = zulu;
 102:
                            entity = mike;
 105:
                            return entity;
                        }
                    };
                    verify = oscar.bind(verify)(zulu);
                    oscar = verify.sortBy;
                    zulu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.lastViewed;
                        entity = -entity;
                        return entity;
                    };
                    offset = oscar.bind(verify)(zulu);
                    oscar = offset.slice;
                    zulu = _closure1_slot17;
                    verify = 0;
                    oscar = oscar.bind(offset)(verify, zulu);
                    zulu = oscar.value;
                    sizing = zulu.bind(oscar)();
                    yankee = _closure1_slot14;
                    offset = yankee.verbose;
                    oscar = sizing.map;
                    zulu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.channelId;
                        return entity;
                    };
                    oscar = oscar.bind(sizing)(zulu);
                    zulu = 'Guild Message Background Syncing for ';
                    zulu = offset.bind(yankee)(zulu, oscar);
                    zulu = sizing.length;
                    if(!(verify !== zulu)) { _fun00020_ip = 947; continue _fun00019 }
 256:
                    oscar = global;
                    offset = oscar.Promise;
                    zulu = offset.all;
                    yankee = sizing.map;
                    mike = function(argFoo) {
                        entity = argFoo;
                        zulu = _closure4_slot0;
                        mike = zulu.withoutLogging;
                        report = mike.bind(zulu)();
                        tango = report.getLatest;
                        zulu = entity.guildId;
                        mike = entity.channelId;
                        entity = 1;
                        entity = tango.bind(report)(zulu, mike, entity);
                        return entity;
                    };
                    mike = yankee.bind(sizing)(mike);
                    mike = zulu.bind(offset)(mike);
                    SaveGenerator(address=296);
 294:
                    return mike;
 296:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00020_ip = 953; continue _fun00019 }
 305:
                    kilo = {};
                    zulu = sizing.length;
                    zulu = verify < zulu;
                    backup = 21;
                    yankee = '0';
                    offset = 0;
                    if(!zulu) { _fun00020_ip = 438; continue _fun00019 }
 330:
                    zulu = mike[offset];
                    result = zulu[verify];
                    echo = source == result;
                    zulu = undefined;
                    if(echo) { _fun00020_ip = 352; continue _fun00019 }
 347:
                    zulu = result.id;
 352:
                    echo = source != zulu;
                    result = yankee;
                    if(!echo) { _fun00020_ip = 365; continue _fun00019 }
 362:
                    result = zulu;
 365:
                    zulu = sizing[offset];
                    echo = output;
                    if(!echo) { _fun00020_ip = 414; continue _fun00019 }
 375:
                    control = _closure1_slot1;
                    update = _closure1_slot2;
                    update = update[backup];
                    vacuum = control.bind(tango)(update);
                    control = vacuum.compare;
                    update = zulu.lastMessageId;
                    update = control.bind(vacuum)(result, update);
                    echo = update >= verify;
 414:
                    if(echo) { _fun00020_ip = 426; continue _fun00019 }
 417:
                    zulu = zulu.channelId;
                    kilo[zulu] = result;
 426:
                    offset = offset + 1;
                    zulu = sizing.length;
                    if(offset < zulu) { _fun00020_ip = 330; continue _fun00019 }
 438:
                    backup = {};
                    zulu = _closure1_slot19;
                    yankee = zulu.bind(tango)(mike);
                    offset = yankee.bind(tango)();
                    zulu = offset.done;
                    if(zulu) { _fun00020_ip = 531; continue _fun00019 }
 461:
                    sizing = _closure1_slot19;
                    zulu = offset.value;
                    output = sizing.bind(tango)(zulu);
                    sizing = output.bind(tango)();
                    zulu = sizing.done;
                    if(zulu) { _fun00020_ip = 516; continue _fun00019 }
 487:
                    result = sizing.value;
                    zulu = result.id;
                    backup[zulu] = result;
                    result = output.bind(tango)();
                    zulu = result.done;
                    sizing = result;
                    if(!zulu) { _fun00020_ip = 487; continue _fun00019 }
 516:
                    sizing = yankee.bind(tango)();
                    zulu = sizing.done;
                    offset = sizing;
                    if(!zulu) { _fun00020_ip = 461; continue _fun00019 }
 531:
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    zulu = 20;
                    zulu = yankee[zulu];
                    zulu = offset.bind(tango)(zulu);
                    yankee = zulu.HTTP;
                    offset = yankee.post;
                    zulu = {};
                    backup = _closure1_slot12;
                    backup = backup.MESSAGE_LOG_GUILD_CHANNELS;
                    zulu['url'] = backup;
                    backup = {};
                    sizing = _closure1_slot13;
                    backup['per_channel_limit'] = sizing;
                    backup['last_synced_message_id_by_channel_id'] = kilo;
                    zulu['body'] = backup;
                    backup = 5000;
                    zulu['timeout'] = backup;
                    backup = false;
                    zulu['rejectWithError'] = backup;
                    zulu = offset.bind(yankee)(zulu);
                    SaveGenerator(address=626);
 624:
                    return zulu;
 626:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=9);
                    if(offset) { _fun00020_ip = 950; continue _fun00019 }
 635:
                    update = zulu.body;
                    yankee = oscar.Date;
                    offset = yankee.now;
                    offset = offset.bind(yankee)();
                    offset = offset - options;
                    golf['time_finish_fetch_guild_channel_messages'] = offset;
                    golf['num_guild_channel_messages'] = verify;
                    offset = oscar.JSON;
                    verify = offset.stringify;
                    verify = verify.bind(offset)(update);
                    verify = verify.length;
                    golf['size_guild_channel_messages'] = verify;
                    yankee = {};
                    backup = {};
                    result = update.change_logs_by_channel_id;
                    for(kilo in result)
 721:
                    {
 730:
                        control = kilo;
                        verify = update.change_logs_by_channel_id;
                        verify = verify[control];
                        verify = verify.changes;
                        if(source == verify) { _fun00020_ip = 721; continue _fun00019 }
 753:
                        backup[control] = verify;
                        offset = _closure1_slot28;
                        verify = update.change_logs_by_channel_id;
                        verify = verify[control];
                        config = verify.changes;
                        target = undefined;
                        papa = romeo;
                        context = yankee;
                        record = control;
                        verify = target[offset](papa, context, record, config, sequence);
                        SaveGenerator(address=796);
 794:
                        return verify;
 796:
                        ResumeGenerator(result_out_reg=8, return_bool_out_reg=9);
                        if(!offset) { _fun00020_ip = 721; continue _fun00019 }
 802:
                        return verify;
                    }
 805:
                    offset = _closure1_slot1;
                    verify = _closure1_slot2;
                    verify = verify[foxtrot];
                    offset = offset.bind(tango)(verify);
                    verify = offset.isEmpty;
                    verify = verify.bind(offset)(yankee);
                    if(verify) { _fun00020_ip = 947; continue _fun00019 }
 836:
                    offset = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    verify = 16;
                    verify = foxtrot[verify];
                    foxtrot = offset.bind(tango)(verify);
                    offset = foxtrot.dispatch;
                    verify = {};
                    kilo = 'BACKGROUND_SYNC_CHANNEL_MESSAGES';
                    verify['type'] = kilo;
                    verify['changesByChannelId'] = backup;
                    verify = offset.bind(foxtrot)(verify);
                    offset = _closure1_slot30;
                    record = argFoo;
                    sequence = true;
                    target = undefined;
                    papa = romeo;
                    context = yankee;
                    config = golf;
                    report = target[offset](papa, context, record, config, sequence, vacuum);
                    SaveGenerator(address=909);
 907:
                    return report;
 909:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(verify) { _fun00020_ip = 944; continue _fun00019 }
 915:
                    verify = oscar.Date;
                    oscar = verify.now;
                    oscar = oscar.bind(verify)();
                    oscar = oscar - options;
                    golf['time_save_guild_channel_messages'] = oscar;
                    _fun00020_ip = 947; continue _fun00019;
 944:
                    return report;
 947:
                    return tango;
 950:
                    return zulu;
 953:
                    return mike;
 956:
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
    entity = function() { // Original name: processChannelChanges
        entity = undefined;
        tango = _closure1_slot29;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: _processChannelChanges
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo, argBar, argBaz, argCorge) {
            entity = function* (argFoo, argBar, argBaz, argCorge) { // Original name: ?anon_0_
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    StartGenerator();
                    zulu = argCorge;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tango) { _fun00024_ip = 514; continue _fun00023 }
 15:
                    tango = argFoo;
                    var _closure4_slot0 = tango;
                    tango = null;
                    if(!(tango != zulu)) { _fun00024_ip = 506; continue _fun00023 }
 31:
                    tango = zulu.new_messages;
                    offset = undefined;
                    if(!(offset === tango)) { _fun00024_ip = 47; continue _fun00023 }
 43:
                    tango = new Array(0);
 47:
                    verify = zulu.modified_messages;
                    if(!(offset === verify)) { _fun00024_ip = 61; continue _fun00023 }
 57:
                    verify = new Array(0);
 61:
                    zulu = zulu.deleted_message_ids;
                    if(!(offset === zulu)) { _fun00024_ip = 75; continue _fun00023 }
 71:
                    zulu = new Array(0);
 75:
                    golf = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    yankee = 22;
                    oscar = foxtrot[yankee];
                    options = golf.bind(offset)(oscar);
                    golf = options.partition;
                    romeo = _closure1_slot0;
                    oscar = 27;
                    oscar = foxtrot[oscar];
                    oscar = romeo.bind(offset)(oscar);
                    oscar = oscar.isLikelyNotDelta;
                    options = golf.bind(options)(verify, oscar);
                    golf = _closure1_slot3;
                    oscar = 2;
                    options = golf.bind(offset)(options, oscar);
                    golf = 0;
                    echo = options[golf];
                    oscar = 1;
                    oscar = options[oscar];
                    verify = tango.push;
                    options = new Array(0);
                    update = options;
                    result = 0;
                    romeo = arraySpread(update, echo, result);
                    update = verify;
                    echo = options;
                    result = tango;
                    options = apply(update, echo, result);
                    options = oscar.length;
                    if(!(options > golf)) { _fun00024_ip = 460; continue _fun00023 }
 201:
                    verify = global;
                    romeo = verify.Promise;
                    options = romeo.all;
                    foxtrot = oscar.map;
                    mike = function(argFoo) {
                        entity = argFoo;
                        zulu = _closure4_slot0;
                        mike = zulu.withoutLogging;
                        report = mike.bind(zulu)();
                        tango = report.get;
                        zulu = entity.channel_id;
                        mike = entity.id;
                        entity = null;
                        entity = tango.bind(report)(entity, zulu, mike);
                        return entity;
                    };
                    mike = foxtrot.bind(oscar)(mike);
                    mike = options.bind(romeo)(mike);
                    SaveGenerator(address=241);
 239:
                    return mike;
 241:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(options) { _fun00024_ip = 511; continue _fun00023 }
 250:
                    foxtrot = mike.filter;
                    backup = _closure1_slot0;
                    options = _closure1_slot2;
                    romeo = 28;
                    romeo = options[romeo];
                    romeo = backup.bind(offset)(romeo);
                    romeo = romeo.isNotNullish;
                    romeo = foxtrot.bind(mike)(romeo);
                    backup = _closure1_slot14;
                    foxtrot = backup.verbose;
                    output = romeo.length;
                    verify = verify.HermesInternal;
                    sizing = verify.concat;
                    kilo = 'Fetched ';
                    verify = ' modified messages from the database';
                    verify = sizing.bind(kilo)(output, verify);
                    verify = foxtrot.bind(backup)(verify);
                    verify = _closure1_slot1;
                    options = options[yankee];
                    yankee = verify.bind(offset)(options);
                    verify = yankee.keyBy;
                    options = 'id';
                    verify = verify.bind(yankee)(romeo, options);
                    report = _closure1_slot19;
                    options = report.bind(offset)(oscar);
                    oscar = options.bind(offset)();
                    report = oscar.done;
                    if(report) { _fun00024_ip = 460; continue _fun00023 }
 385:
                    romeo = oscar.value;
                    report = romeo.id;
                    report = report in verify;
                    if(!report) { _fun00024_ip = 445; continue _fun00023 }
 402:
                    yankee = tango.push;
                    report = {};
                    foxtrot = romeo.id;
                    foxtrot = verify[foxtrot];
                    echo = foxtrot.message;
                    update = report;
                    foxtrot = copyDataProperties(update, echo);
                    update = report;
                    echo = romeo;
                    romeo = copyDataProperties(update, echo);
                    report = yankee.bind(tango)(report);
 445:
                    yankee = options.bind(offset)();
                    report = yankee.done;
                    oscar = yankee;
                    if(!report) { _fun00024_ip = 385; continue _fun00023 }
 460:
                    report = tango.length;
                    report = report > golf;
                    if(report) { _fun00024_ip = 481; continue _fun00023 }
 472:
                    oscar = zulu.length;
                    report = oscar > golf;
 481:
                    if(!report) { _fun00024_ip = 506; continue _fun00023 }
 484:
                    report = new Array(2);
                    report[0] = tango;
                    report[1] = zulu;
                    tango = argBar;
                    zulu = argBaz;
                    tango[zulu] = report;
 506:
                    zulu = undefined;
                    return zulu;
 511:
                    return mike;
 514:
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
    entity = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: writeMessageChanges
        tango = argFoo;
        mike = argBar;
        var _closure2_slot0 = mike;
        mike = argBaz;
        var _closure2_slot1 = mike;
        mike = argCorge;
        var _closure2_slot2 = mike;
        mike = argGrault;
        var _closure2_slot3 = mike;
        zulu = tango.transaction;
        mike = function(argFoo) {
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                mike = argFoo;
                var _closure3_slot0 = mike;
                golf = function(argFoo) { // Original name: _loop
                    _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                        offset = argFoo;
                        var _closure4_slot0 = offset;
                        report = _closure1_slot3;
                        entity = _closure2_slot0;
                        tango = entity[offset];
                        entity = undefined;
                        mike = 2;
                        tango = report.bind(entity)(tango, mike);
                        mike = 0;
                        report = tango[mike];
                        mike = 1;
                        mike = tango[mike];
                        tango = _closure2_slot3;
                        golf = _closure2_slot2;
                        if(tango) { _fun00028_ip = 85; continue _fun00027 }
 62:
                        options = golf.num_private_channel_messages;
                        tango = report.length;
                        tango = options + tango;
                        golf['num_private_channel_messages'] = tango;
                        _fun00028_ip = 106; continue _fun00027;
 85:
                        options = golf.num_guild_channel_messages;
                        tango = report.length;
                        tango = options + tango;
                        golf['num_guild_channel_messages'] = tango;
 106:
                        tango = _closure1_slot19;
                        romeo = tango.bind(entity)(report);
                        verify = romeo.bind(entity)();
                        golf = verify.done;
                        yankee = 29;
                        options = null;
                        if(golf) { _fun00028_ip = 217; continue _fun00027 }
 135:
                        source = verify.value;
                        kilo = _closure3_slot0;
                        backup = kilo.put;
                        sizing = _closure1_slot0;
                        golf = _closure1_slot2;
                        golf = golf[yankee];
                        golf = sizing.bind(entity)(golf);
                        output = golf.KvMessage;
                        sizing = output.fromMessage;
                        update = _closure2_slot1;
                        sequence = output;
                        vacuum = null;
                        control = offset;
                        golf = sequence[sizing](vacuum, control, source, update, echo);
                        golf = backup.bind(kilo)(options, offset, golf);
                        backup = romeo.bind(entity)();
                        golf = backup.done;
                        verify = backup;
                        if(!golf) { _fun00028_ip = 135; continue _fun00027 }
 217:
                        golf = mike.forEach;
                        oscar = function(argFoo) {
                            report = _closure3_slot0;
                            tango = report.deleteMessage;
                            zulu = _closure4_slot0;
                            mike = null;
                            entity = argFoo;
                            entity = tango.bind(report)(mike, zulu, entity);
                            return entity;
                        };
                        oscar = golf.bind(mike)(oscar);
                        golf = _closure3_slot0;
                        oscar = golf.trimChannel;
                        tango = 200;
                        tango = oscar.bind(golf)(options, offset, tango);
                        tango = _closure1_slot14;
                        zulu = tango.verbose;
                        vacuum = report.length;
                        source = mike.length;
                        mike = global;
                        mike = mike.HermesInternal;
                        golf = mike.concat;
                        sequence = 'Wrote ';
                        control = ' and deleted ';
                        update = ' messages for ';
                        echo = offset;
                        mike = sequence[golf](vacuum, control, source, update, echo, result);
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    }
                };
                report = _closure2_slot0;
                entity = undefined;
                for(mike in report)
 33:
                {
 42:
                    options = mike;
                    options = golf.bind(entity)(options);
                    _fun00026_ip = 33; continue _fun00025;
                }
 52:
                return entity;
            }
        };
        entity = 'Background Sync';
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot30 = entity;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Platform;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.isPrivate;
    var _closure1_slot5 = golf;
    tango = tango.isThread;
    var _closure1_slot6 = tango;
    golf = 4;
    tango = oscar[golf];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.AnalyticEvents;
    var _closure1_slot11 = verify;
    verify = tango.Endpoints;
    var _closure1_slot12 = verify;
    tango = tango.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot13 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = oscar[golf];
    tango = report.bind(entity)(tango);
    tango = 10;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = 11;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = 12;
    tango = oscar[tango];
    offset = options.bind(entity)(tango);
    tango = offset.prototype;
    verify = Object.create(tango, {constructor: {value: offset}});
    foxtrot = 'BackgroundSync';
    backup = verify;
    tango = new backup[offset](foxtrot, romeo);
    tango = tango instanceof Object ? tango : verify;
    var _closure1_slot14 = tango;
    tango = 13;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    tango = tango.Millis;
    tango = tango.HOUR;
    tango = golf * tango;
    var _closure1_slot15 = tango;
    tango = 'lastSyncTime';
    var _closure1_slot16 = tango;
    tango = 25;
    var _closure1_slot17 = tango;
    tango = 'lastSyncedPrivateChannelsMessageId';
    var _closure1_slot18 = tango;
    tango = 30;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_database/background_sync/native/BackgroundSync.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: backgroundSync
        entity = undefined;
        tango = _closure1_slot21;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['backgroundSync'] = mike;
    return entity;
})();