// app/modules/activities/EmbeddedActivitiesStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    verify = argBar;
    yankee = argBaz;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = offset;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun53626: for(var _fun53626_ip = 0; ; ) switch(_fun53626_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun53626_ip = 46; continue _fun53626 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun53626_ip = 55; continue _fun53626 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun53626_ip = 343; continue _fun53626 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun53626_ip = 323; continue _fun53626 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun53626_ip = 283; continue _fun53626 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun53626_ip = 270; continue _fun53626 }
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
            if(!golf) { _fun53626_ip = 163; continue _fun53626 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun53626_ip = 179; continue _fun53626 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun53626_ip = 249; continue _fun53626 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun53626_ip = 249; continue _fun53626 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun53626_ip = 234; continue _fun53626 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun53626_ip = 247; continue _fun53626 }
 234:
            verify = _closure1_slot39;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun53626_ip = 265; continue _fun53626;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun53626_ip = 283; continue _fun53626;
 270:
            golf = _closure1_slot39;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun53626_ip = 323; continue _fun53626 }
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
            if(!tango) { _fun53626_ip = 330; continue _fun53626 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun53627: for(var _fun53627_ip = 0; ; ) switch(_fun53627_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun53627_ip = 56; continue _fun53627 }
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
                    _fun53627_ip = 67; continue _fun53627;
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
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot38 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun53628: for(var _fun53628_ip = 0; ; ) switch(_fun53628_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun53628_ip = 23; continue _fun53628 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun53628_ip = 33; continue _fun53628 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun53628_ip = 70; continue _fun53628 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun53628_ip = 55; continue _fun53628 }
 70:
            return entity;
        }
    };
    var _closure1_slot39 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun53629: for(var _fun53629_ip = 0; ; ) switch(_fun53629_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot7;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot6;
            entity = _closure1_slot41;
            entity = entity.bind(zulu)();
            if(entity) { _fun53629_ip = 51; continue _fun53629 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun53629_ip = 92; continue _fun53629;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun53629_ip = 71; continue _fun53629 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot7;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot40 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun53630: for(var _fun53630_ip = 0; ; ) switch(_fun53630_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 70: // try_end0
            _fun53630_ip = 74; continue _fun53630;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot41 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot41 = entity;
    entity = function(argFoo, argBar) { // Original name: getLaunchStatesKey
        entity = global;
        entity = entity.HermesInternal;
        report = entity.concat;
        tango = '';
        zulu = argFoo;
        mike = ':';
        entity = argBar;
        entity = report.bind(tango)(zulu, mike, entity);
        return entity;
    };
    var _closure1_slot42 = entity;
    entity = function(argFoo) { // Original name: getNormalizedGuildId
        _fun53634: for(var _fun53634_ip = 0; ; ) switch(_fun53634_ip) {
 0:
            entity = argFoo;
            mike = null;
            if(!(mike == entity)) { _fun53634_ip = 16; continue _fun53634 }
 9:
            entity = _closure1_slot20;
 16:
            return entity;
        }
    };
    var _closure1_slot43 = entity;
    entity = function(argFoo) { // Original name: updateEmbeddedActivities
        _fun53635: for(var _fun53635_ip = 0; ; ) switch(_fun53635_ip) {
 0:
            entity = argFoo;
            foxtrot = entity.location;
            var _closure2_slot0 = foxtrot;
            result = entity.applicationId;
            var _closure2_slot1 = result;
            output = entity.launchId;
            sizing = entity.compositeInstanceId;
            kilo = entity.participants;
            entity = undefined;
            var _closure2_slot2 = entity;
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 13;
            zulu = oscar[zulu];
            zulu = report.bind(entity)(zulu);
            control = zulu.bind(entity)(result);
            offset = null;
            if(!(offset != control)) { _fun53635_ip = 1207; continue _fun53635 }
 84:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            backup = 14;
            zulu = zulu[backup];
            report = report.bind(entity)(zulu);
            zulu = report.getEmbeddedActivityLocationChannelId;
            options = zulu.bind(report)(foxtrot);
            if(!(offset != options)) { _fun53635_ip = 137; continue _fun53635 }
 119:
            report = _closure1_slot23;
            zulu = report.get;
            zulu = zulu.bind(report)(options);
            if(!(offset == zulu)) { _fun53635_ip = 141; continue _fun53635 }
 137:
            zulu = _closure1_slot18;
 141:
            romeo = offset != zulu;
            if(!romeo) { _fun53635_ip = 159; continue _fun53635 }
 148:
            report = zulu.length;
            zulu = 0;
            romeo = zulu === report;
 159:
            oscar = _closure1_slot25;
            report = oscar.get;
            zulu = foxtrot.id;
            verify = report.bind(oscar)(zulu);
            if(!(offset == verify)) { _fun53635_ip = 186; continue _fun53635 }
 182:
            verify = _closure1_slot18;
 186:
            report = verify.find;
            zulu = function(argFoo) {
                entity = argFoo;
                mike = entity.applicationId;
                entity = _closure2_slot1;
                entity = mike === entity;
                return entity;
            };
            report = report.bind(verify)(zulu);
            oscar = kilo.map;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.userId;
                return entity;
            };
            zulu = oscar.bind(kilo)(zulu);
            golf = _closure1_slot9;
            oscar = golf.getId;
            oscar = oscar.bind(golf)();
            _closure2_slot2 = oscar;
            golf = zulu.some;
            oscar = function(argFoo) {
                mike = _closure2_slot2;
                entity = argFoo;
                entity = entity === mike;
                return entity;
            };
            update = golf.bind(zulu)(oscar);
            golf = kilo.find;
            oscar = function(argFoo) {
                entity = argFoo;
                mike = entity.userId;
                entity = _closure2_slot2;
                entity = mike === entity;
                return entity;
            };
            oscar = golf.bind(kilo)(oscar);
            golf = offset == oscar;
            echo = undefined;
            if(golf) { _fun53635_ip = 280; continue _fun53635 }
 274:
            echo = oscar.sessionId;
 280:
            golf = kilo.some;
            oscar = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 15;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.isActivityParticipantCurrentUserCurrentSession;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            source = golf.bind(kilo)(oscar);
            golf = _closure1_slot21;
            oscar = golf.get;
            golf = oscar.bind(golf)(result);
            vacuum = _closure1_slot26;
            yankee = vacuum.get;
            sequence = _closure1_slot42;
            config = offset != options;
            oscar = null;
            if(!config) { _fun53635_ip = 335; continue _fun53635 }
 332:
            oscar = options;
 335:
            oscar = sequence.bind(entity)(oscar, result);
            yankee = yankee.bind(vacuum)(oscar);
            oscar = offset == yankee;
            config = undefined;
            if(oscar) { _fun53635_ip = 361; continue _fun53635 }
 355:
            config = yankee.launchParams;
 361:
            oscar = {};
            oscar['applicationId'] = result;
            oscar['location'] = foxtrot;
            oscar['launchId'] = output;
            oscar['compositeInstanceId'] = sizing;
            oscar['url'] = control;
            control = global;
            vacuum = control.Set;
            sequence = vacuum.prototype;
            sequence = Object.create(sequence, {constructor: {value: vacuum}});
            status = sequence;
            target = zulu;
            vacuum = new status[vacuum](target, papa);
            vacuum = vacuum instanceof Object ? vacuum : sequence;
            oscar['userIds'] = vacuum;
            oscar['participants'] = kilo;
            sequence = offset == golf;
            vacuum = undefined;
            if(sequence) { _fun53635_ip = 441; continue _fun53635 }
 435:
            vacuum = golf.referrerId;
 441:
            if(!(offset == vacuum)) { _fun53635_ip = 463; continue _fun53635 }
 445:
            record = offset == config;
            sequence = undefined;
            if(record) { _fun53635_ip = 460; continue _fun53635 }
 454:
            sequence = config.referrerId;
 460:
            vacuum = sequence;
 463:
            oscar['referrerId'] = vacuum;
            sequence = offset == golf;
            vacuum = undefined;
            if(sequence) { _fun53635_ip = 483; continue _fun53635 }
 477:
            vacuum = golf.customId;
 483:
            if(!(offset == vacuum)) { _fun53635_ip = 505; continue _fun53635 }
 487:
            record = offset == config;
            sequence = undefined;
            if(record) { _fun53635_ip = 502; continue _fun53635 }
 496:
            sequence = config.customId;
 502:
            vacuum = sequence;
 505:
            oscar['customId'] = vacuum;
            vacuum = update;
            if(!vacuum) { _fun53635_ip = 520; continue _fun53635 }
 516:
            vacuum = offset != golf;
 520:
            if(!vacuum) { _fun53635_ip = 565; continue _fun53635 }
 523:
            record = _closure1_slot21;
            config = record.set;
            sequence = golf.applicationId;
            vacuum = {};
            target = vacuum;
            papa = golf;
            context = copyDataProperties(target, papa);
            target = vacuum;
            papa = oscar;
            context = copyDataProperties(target, papa);
            vacuum = config.bind(record)(sequence, vacuum);
 565:
            if(!(offset != golf)) { _fun53635_ip = 724; continue _fun53635 }
 572:
            sequence = foxtrot.id;
            vacuum = golf.location;
            vacuum = vacuum.id;
            if(!(sequence === vacuum)) { _fun53635_ip = 724; continue _fun53635 }
 594:
            sequence = offset == golf;
            vacuum = undefined;
            if(sequence) { _fun53635_ip = 608; continue _fun53635 }
 603:
            vacuum = golf.applicationId;
 608:
            if(!(result === vacuum)) { _fun53635_ip = 724; continue _fun53635 }
 612:
            if(update) { _fun53635_ip = 656; continue _fun53635 }
 615:
            sequence = control.Array;
            vacuum = sequence.from;
            control = golf.userIds;
            sequence = vacuum.bind(sequence)(control);
            vacuum = sequence.some;
            control = function(argFoo) {
                mike = _closure2_slot2;
                entity = argFoo;
                entity = entity === mike;
                return entity;
            };
            control = vacuum.bind(sequence)(control);
            if(control) { _fun53635_ip = 659; continue _fun53635 }
 656:
            if(source) { _fun53635_ip = 724; continue _fun53635 }
 659:
            control = _closure1_slot21;
            source = control.delete;
            source = source.bind(control)(result);
            control = _closure1_slot0;
            vacuum = _closure1_slot2;
            source = 16;
            source = vacuum[source];
            source = control.bind(entity)(source);
            vacuum = source.ComponentDispatch;
            control = vacuum.dispatch;
            source = _closure1_slot15;
            source = source.RELEASE_ACTIVITY_WEB_VIEW;
            source = control.bind(vacuum)(source);
            _fun53635_ip = 871; continue _fun53635;
 724:
            if(!update) { _fun53635_ip = 871; continue _fun53635 }
 730:
            if(!(offset != golf)) { _fun53635_ip = 762; continue _fun53635 }
 734:
            update = golf.applicationId;
            if(!(update === result)) { _fun53635_ip = 762; continue _fun53635 }
 743:
            golf = golf.location;
            update = golf.id;
            golf = foxtrot.id;
            if(!(update !== golf)) { _fun53635_ip = 871; continue _fun53635 }
 762:
            update = _closure1_slot9;
            golf = update.getSessionId;
            golf = golf.bind(update)();
            if(!(echo === golf)) { _fun53635_ip = 871; continue _fun53635 }
 780:
            golf = {};
            golf['applicationId'] = result;
            golf['launchId'] = output;
            golf['compositeInstanceId'] = sizing;
            golf['location'] = foxtrot;
            golf['participants'] = kilo;
            golf['isFirstActivityInChannel'] = romeo;
            report = offset == report;
            golf['isStart'] = report;
            report = oscar.referrerId;
            golf['referrerId'] = report;
            report = oscar.customId;
            golf['customId'] = report;
            romeo = offset == yankee;
            report = undefined;
            if(romeo) { _fun53635_ip = 856; continue _fun53635 }
 850:
            report = yankee.inviterUserId;
 856:
            golf['inviterUserId'] = report;
            report = function(argFoo) { // Original name: openActivity
                _fun53642: for(var _fun53642_ip = 0; ; ) switch(_fun53642_ip) {
 0:
                    entity = argFoo;
                    golf = entity.applicationId;
                    yankee = entity.launchId;
                    offset = entity.compositeInstanceId;
                    zulu = entity.location;
                    sizing = entity.participants;
                    result = entity.isFirstActivityInChannel;
                    output = entity.isStart;
                    verify = entity.referrerId;
                    report = entity.customId;
                    backup = entity.inviterUserId;
                    options = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 13;
                    mike = mike[entity];
                    entity = undefined;
                    mike = options.bind(entity)(mike);
                    mike = mike.bind(entity)(golf);
                    romeo = _closure1_slot9;
                    options = romeo.getSessionId;
                    options = options.bind(romeo)();
                    foxtrot = null;
                    if(!(foxtrot != mike)) { _fun53642_ip = 733; continue _fun53642 }
 116:
                    if(!(foxtrot != options)) { _fun53642_ip = 733; continue _fun53642 }
 123:
                    romeo = _closure1_slot21;
                    options = romeo.get;
                    options = options.bind(romeo)(golf);
                    kilo = foxtrot == options;
                    romeo = undefined;
                    if(kilo) { _fun53642_ip = 156; continue _fun53642 }
 146:
                    options = options.location;
                    romeo = options.id;
 156:
                    options = zulu.id;
                    if(!(romeo !== options)) { _fun53642_ip = 729; continue _fun53642 }
 168:
                    romeo = _closure1_slot0;
                    kilo = _closure1_slot2;
                    options = 14;
                    options = kilo[options];
                    romeo = romeo.bind(entity)(options);
                    options = romeo.getEmbeddedActivityLocationChannelId;
                    options = options.bind(romeo)(zulu);
                    kilo = _closure1_slot10;
                    romeo = kilo.getChannel;
                    echo = romeo.bind(kilo)(options);
                    kilo = foxtrot == echo;
                    romeo = undefined;
                    if(kilo) { _fun53642_ip = 232; continue _fun53642 }
 222:
                    kilo = echo.getGuildId;
                    romeo = kilo.bind(echo)();
 232:
                    update = _closure1_slot12;
                    kilo = update.getCurrentUser;
                    kilo = kilo.bind(update)();
                    if(!(foxtrot != kilo)) { _fun53642_ip = 725; continue _fun53642 }
 252:
                    update = _closure1_slot0;
                    source = _closure1_slot2;
                    kilo = 17;
                    kilo = source[kilo];
                    update = update.bind(entity)(kilo);
                    kilo = update.getIsContextlessActivitiesExperimentEnabled;
                    kilo = kilo.bind(update)();
                    if(kilo) { _fun53642_ip = 319; continue _fun53642 }
 285:
                    if(!(foxtrot == romeo)) { _fun53642_ip = 319; continue _fun53642 }
 289:
                    kilo = foxtrot == echo;
                    romeo = undefined;
                    if(kilo) { _fun53642_ip = 308; continue _fun53642 }
 298:
                    kilo = echo.isPrivate;
                    romeo = kilo.bind(echo)();
 308:
                    if(!(foxtrot != romeo)) { _fun53642_ip = 315; continue _fun53642 }
 312:
                    if(romeo) { _fun53642_ip = 319; continue _fun53642 }
 315:
                    romeo = false;
                    return romeo;
 319:
                    _closure1_slot34 = zulu;
                    foxtrot = sizing.map;
                    romeo = function(argFoo) {
                        entity = argFoo;
                        entity = entity.userId;
                        return entity;
                    };
                    vacuum = foxtrot.bind(sizing)(romeo);
                    kilo = {};
                    kilo['applicationId'] = golf;
                    kilo['url'] = mike;
                    mike = global;
                    romeo = mike.Set;
                    foxtrot = romeo.prototype;
                    foxtrot = Object.create(foxtrot, {constructor: {value: romeo}});
                    sequence = foxtrot;
                    romeo = new sequence[romeo](vacuum, control);
                    romeo = romeo instanceof Object ? romeo : foxtrot;
                    kilo['userIds'] = romeo;
                    kilo['participants'] = sizing;
                    foxtrot = mike.Date;
                    romeo = foxtrot.now;
                    romeo = romeo.bind(foxtrot)();
                    kilo['connectedSince'] = romeo;
                    kilo['launchId'] = yankee;
                    kilo['compositeInstanceId'] = offset;
                    kilo['location'] = zulu;
                    kilo['referrerId'] = verify;
                    kilo['customId'] = report;
                    verify = _closure1_slot21;
                    report = verify.set;
                    report = report.bind(verify)(golf, kilo);
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    report = 16;
                    report = offset[report];
                    report = verify.bind(entity)(report);
                    foxtrot = report.ComponentDispatch;
                    romeo = foxtrot.dispatch;
                    report = _closure1_slot15;
                    yankee = report.OPEN_EMBEDDED_ACTIVITY;
                    report = {};
                    report['location'] = zulu;
                    report['applicationId'] = golf;
                    report['isFirstActivityInChannel'] = result;
                    report['isStart'] = output;
                    report['participants'] = sizing;
                    report['embeddedActivity'] = kilo;
                    report['inviterUserId'] = backup;
                    report = romeo.bind(foxtrot)(yankee, report);
                    report = 18;
                    report = offset[report];
                    verify = verify.bind(entity)(report);
                    report = verify.shouldOpenActivityInPopoutWindow;
                    report = report.bind(verify)();
                    if(report) { _fun53642_ip = 628; continue _fun53642 }
 554:
                    verify = _closure1_slot11;
                    report = verify.getChannelId;
                    report = report.bind(verify)();
                    if(!(options === report)) { _fun53642_ip = 612; continue _fun53642 }
 572:
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    report = 20;
                    report = offset[report];
                    report = verify.bind(entity)(report);
                    report = report.bind(entity)(options);
                    if(report) { _fun53642_ip = 612; continue _fun53642 }
 600:
                    report = _closure1_slot13;
                    report = report.PANEL;
                    _fun53642_ip = 622; continue _fun53642;
 612:
                    options = _closure1_slot13;
                    report = options.PIP;
 622:
                    _closure1_slot35 = report;
                    _fun53642_ip = 678; continue _fun53642;
 628:
                    report = _closure1_slot13;
                    report = report.ACTIVITY_POPOUT_WINDOW;
                    _closure1_slot35 = report;
                    options = _closure1_slot1;
                    verify = _closure1_slot2;
                    report = 19;
                    report = verify[report];
                    options = options.bind(entity)(report);
                    report = options.wait;
                    tango = function() {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 19;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.dispatch;
                        mike = {};
                        report = 'ACTIVITY_POPOUT_WINDOW_OPEN';
                        mike['type'] = report;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    tango = report.bind(options)(tango);
 678:
                    report = _closure1_slot33;
                    tango = report.set;
                    oscar = _closure1_slot47;
                    zulu = zulu.id;
                    zulu = oscar.bind(entity)(zulu, golf);
                    oscar = mike.Date;
                    mike = oscar.now;
                    mike = mike.bind(oscar)();
                    mike = tango.bind(report)(zulu, mike);
                    return entity;
 725:
                    entity = false;
                    return entity;
 729:
                    entity = false;
                    return entity;
 733:
                    entity = false;
                    return entity;
                }
            };
            report = report.bind(entity)(golf);
 871:
            golf = verify.filter;
            report = function(argFoo) {
                entity = argFoo;
                mike = entity.applicationId;
                entity = _closure2_slot1;
                entity = mike !== entity;
                return entity;
            };
            romeo = golf.bind(verify)(report);
            report = zulu.length;
            verify = 0;
            if(!(report > verify)) { _fun53635_ip = 907; continue _fun53635 }
 897:
            report = romeo.push;
            report = report.bind(romeo)(oscar);
 907:
            yankee = _closure1_slot25;
            golf = yankee.set;
            report = foxtrot.id;
            report = golf.bind(yankee)(report, romeo);
            golf = _closure1_slot0;
            report = _closure1_slot2;
            report = report[backup];
            golf = golf.bind(entity)(report);
            report = golf.getEmbeddedActivityLocationStartingChannelId;
            romeo = report.bind(golf)(foxtrot);
            if(!(offset != romeo)) { _fun53635_ip = 1030; continue _fun53635 }
 959:
            golf = _closure1_slot24;
            report = golf.get;
            yankee = report.bind(golf)(romeo);
            if(!(offset == yankee)) { _fun53635_ip = 981; continue _fun53635 }
 977:
            yankee = new Array(0);
 981:
            golf = yankee.filter;
            report = function(argFoo) {
                entity = argFoo;
                entity = entity.location;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike !== entity;
                return entity;
            };
            yankee = golf.bind(yankee)(report);
            report = zulu.length;
            if(!(report > verify)) { _fun53635_ip = 1015; continue _fun53635 }
 1005:
            report = yankee.push;
            report = report.bind(yankee)(oscar);
 1015:
            golf = _closure1_slot24;
            report = golf.set;
            report = report.bind(golf)(romeo, yankee);
 1030:
            if(!(offset != options)) { _fun53635_ip = 1207; continue _fun53635 }
 1037:
            golf = _closure1_slot23;
            report = golf.get;
            yankee = report.bind(golf)(options);
            if(!(offset == yankee)) { _fun53635_ip = 1059; continue _fun53635 }
 1055:
            yankee = new Array(0);
 1059:
            golf = yankee.filter;
            report = function(argFoo) {
                entity = argFoo;
                mike = entity.applicationId;
                entity = _closure2_slot1;
                entity = mike !== entity;
                return entity;
            };
            golf = golf.bind(yankee)(report);
            yankee = _closure1_slot43;
            romeo = _closure1_slot0;
            report = _closure1_slot2;
            report = report[backup];
            romeo = romeo.bind(entity)(report);
            report = romeo.getEmbeddedActivityLocationGuildId;
            report = report.bind(romeo)(foxtrot);
            report = yankee.bind(entity)(report);
            romeo = _closure1_slot22;
            yankee = romeo.get;
            yankee = yankee.bind(romeo)(report);
            if(!(offset == yankee)) { _fun53635_ip = 1133; continue _fun53635 }
 1129:
            yankee = new Array(0);
 1133:
            offset = yankee.filter;
            tango = function(argFoo) {
                _fun53648: for(var _fun53648_ip = 0; ; ) switch(_fun53648_ip) {
 0:
                    zulu = argFoo;
                    tango = zulu.applicationId;
                    entity = _closure2_slot1;
                    entity = tango === entity;
                    if(!entity) { _fun53648_ip = 45; continue _fun53648 }
 22:
                    zulu = zulu.location;
                    zulu = zulu.id;
                    mike = _closure2_slot0;
                    mike = mike.id;
                    entity = zulu === mike;
 45:
                    entity = !entity;
                    return entity;
                }
            };
            tango = offset.bind(yankee)(tango);
            zulu = zulu.length;
            if(!(zulu > verify)) { _fun53635_ip = 1177; continue _fun53635 }
 1157:
            zulu = golf.push;
            zulu = zulu.bind(golf)(oscar);
            zulu = tango.push;
            zulu = zulu.bind(tango)(oscar);
 1177:
            oscar = _closure1_slot23;
            zulu = oscar.set;
            zulu = zulu.bind(oscar)(options, golf);
            zulu = _closure1_slot22;
            mike = zulu.set;
            mike = mike.bind(zulu)(report, tango);
 1207:
            return entity;
        }
    };
    var _closure1_slot44 = entity;
    entity = function(argFoo) { // Original name: updateEmbeddedActivitiesForGuild
        _fun53649: for(var _fun53649_ip = 0; ; ) switch(_fun53649_ip) {
 0:
            entity = argFoo;
            zulu = entity.activity_instances;
            entity = null;
            if(!(entity != zulu)) { _fun53649_ip = 32; continue _fun53649 }
 15:
            mike = zulu.forEach;
            entity = function(argFoo) {
                mike = argFoo;
                golf = mike.location;
                oscar = mike.application_id;
                tango = mike.launch_id;
                entity = mike.composite_instance_id;
                report = mike.participants;
                zulu = _closure1_slot44;
                mike = {};
                mike['location'] = golf;
                mike['applicationId'] = oscar;
                mike['launchId'] = tango;
                mike['compositeInstanceId'] = entity;
                tango = report.map;
                entity = function(argFoo) {
                    mike = argFoo;
                    entity = {};
                    zulu = mike.user_id;
                    entity['userId'] = zulu;
                    zulu = mike.session_id;
                    entity['sessionId'] = zulu;
                    mike = mike.nonce;
                    entity['nonce'] = mike;
                    return entity;
                };
                entity = tango.bind(report)(entity);
                mike['participants'] = entity;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
 32:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot45 = entity;
    entity = function(argFoo) { // Original name: handleEmbeddedActivityLaunchEnd
        entity = argFoo;
        oscar = entity.applicationId;
        report = entity.channelId;
        tango = _closure1_slot26;
        zulu = tango.delete;
        mike = _closure1_slot42;
        entity = undefined;
        mike = mike.bind(entity)(report, oscar);
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot46 = entity;
    entity = function(argFoo, argBar) { // Original name: getActivityKey
        entity = global;
        entity = entity.HermesInternal;
        report = entity.concat;
        tango = '';
        zulu = argFoo;
        mike = ':';
        entity = argBar;
        entity = report.bind(tango)(zulu, mike, entity);
        return entity;
    };
    var _closure1_slot47 = entity;
    backup = global;
    report = backup.Object;
    tango = report.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(report)(zulu, entity, mike);
    entity = 0;
    mike = offset[entity];
    entity = undefined;
    mike = yankee.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = offset[mike];
    mike = yankee.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = offset[mike];
    mike = yankee.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = offset[mike];
    mike = yankee.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = offset[mike];
    mike = yankee.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = offset[mike];
    mike = yankee.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = offset[mike];
    mike = yankee.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 7;
    mike = offset[mike];
    mike = yankee.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 8;
    mike = offset[mike];
    mike = yankee.bind(entity)(mike);
    var _closure1_slot11 = mike;
    mike = 9;
    mike = offset[mike];
    mike = yankee.bind(entity)(mike);
    var _closure1_slot12 = mike;
    mike = 10;
    mike = offset[mike];
    mike = verify.bind(entity)(mike);
    golf = mike.ActivityPopoutWindowLayouts;
    mike = 11;
    mike = offset[mike];
    mike = verify.bind(entity)(mike);
    foxtrot = mike.ActivityPanelModes;
    var _closure1_slot13 = foxtrot;
    romeo = mike.FocusedActivityLayouts;
    var _closure1_slot14 = romeo;
    mike = 12;
    mike = offset[mike];
    mike = verify.bind(entity)(mike);
    tango = mike.ComponentActions;
    var _closure1_slot15 = tango;
    mike = mike.PopoutWindowKeys;
    var _closure1_slot16 = mike;
    report = backup.Set;
    mike = report.prototype;
    tango = Object.create(mike, {constructor: {value: report}});
    echo = new Array(0);
    update = tango;
    mike = new update[report](echo, result);
    oscar = mike instanceof Object ? mike : tango;
    mike = {};
    tango = backup.Set;
    report = tango.prototype;
    report = Object.create(report, {constructor: {value: tango}});
    update = report;
    tango = new update[tango](echo);
    tango = tango instanceof Object ? tango : report;
    mike['everLaunchedActivities'] = tango;
    tango = {};
    mike['seenNewActivities'] = tango;
    tango = {};
    mike['seenUpdatedActivities'] = tango;
    tango = false;
    mike['shouldShowNewActivityIndicator'] = tango;
    var _closure1_slot17 = mike;
    report = new Array(0);
    var _closure1_slot18 = report;
    tango = new Array(0);
    var _closure1_slot19 = tango;
    mike = '0';
    var _closure1_slot20 = mike;
    kilo = backup.Map;
    sizing = kilo.prototype;
    sizing = Object.create(sizing, {constructor: {value: kilo}});
    update = sizing;
    kilo = new update[kilo](echo);
    kilo = kilo instanceof Object ? kilo : sizing;
    var _closure1_slot21 = kilo;
    kilo = backup.Map;
    sizing = kilo.prototype;
    sizing = Object.create(sizing, {constructor: {value: kilo}});
    update = sizing;
    kilo = new update[kilo](echo);
    kilo = kilo instanceof Object ? kilo : sizing;
    var _closure1_slot22 = kilo;
    kilo = backup.Map;
    sizing = kilo.prototype;
    sizing = Object.create(sizing, {constructor: {value: kilo}});
    update = sizing;
    kilo = new update[kilo](echo);
    kilo = kilo instanceof Object ? kilo : sizing;
    var _closure1_slot23 = kilo;
    kilo = backup.Map;
    sizing = kilo.prototype;
    sizing = Object.create(sizing, {constructor: {value: kilo}});
    update = sizing;
    kilo = new update[kilo](echo);
    kilo = kilo instanceof Object ? kilo : sizing;
    var _closure1_slot24 = kilo;
    kilo = backup.Map;
    sizing = kilo.prototype;
    sizing = Object.create(sizing, {constructor: {value: kilo}});
    update = sizing;
    kilo = new update[kilo](echo);
    kilo = kilo instanceof Object ? kilo : sizing;
    var _closure1_slot25 = kilo;
    kilo = backup.Map;
    sizing = kilo.prototype;
    sizing = Object.create(sizing, {constructor: {value: kilo}});
    update = sizing;
    kilo = new update[kilo](echo);
    kilo = kilo instanceof Object ? kilo : sizing;
    var _closure1_slot26 = kilo;
    kilo = backup.Map;
    sizing = kilo.prototype;
    sizing = Object.create(sizing, {constructor: {value: kilo}});
    update = sizing;
    kilo = new update[kilo](echo);
    kilo = kilo instanceof Object ? kilo : sizing;
    var _closure1_slot27 = kilo;
    kilo = backup.Map;
    sizing = kilo.prototype;
    sizing = Object.create(sizing, {constructor: {value: kilo}});
    update = sizing;
    kilo = new update[kilo](echo);
    kilo = kilo instanceof Object ? kilo : sizing;
    var _closure1_slot28 = kilo;
    kilo = backup.Map;
    sizing = kilo.prototype;
    sizing = Object.create(sizing, {constructor: {value: kilo}});
    update = sizing;
    kilo = new update[kilo](echo);
    kilo = kilo instanceof Object ? kilo : sizing;
    var _closure1_slot29 = kilo;
    kilo = backup.Map;
    sizing = kilo.prototype;
    sizing = Object.create(sizing, {constructor: {value: kilo}});
    update = sizing;
    kilo = new update[kilo](echo);
    kilo = kilo instanceof Object ? kilo : sizing;
    var _closure1_slot30 = kilo;
    kilo = backup.Map;
    sizing = kilo.prototype;
    sizing = Object.create(sizing, {constructor: {value: kilo}});
    update = sizing;
    kilo = new update[kilo](echo);
    kilo = kilo instanceof Object ? kilo : sizing;
    var _closure1_slot31 = kilo;
    kilo = backup.Map;
    sizing = kilo.prototype;
    sizing = Object.create(sizing, {constructor: {value: kilo}});
    update = sizing;
    kilo = new update[kilo](echo);
    kilo = kilo instanceof Object ? kilo : sizing;
    var _closure1_slot32 = kilo;
    backup = backup.Map;
    kilo = backup.prototype;
    kilo = Object.create(kilo, {constructor: {value: backup}});
    update = kilo;
    backup = new update[backup](echo);
    backup = backup instanceof Object ? backup : kilo;
    var _closure1_slot33 = backup;
    var _closure1_slot34 = entity;
    foxtrot = foxtrot.DISCONNECTED;
    var _closure1_slot35 = foxtrot;
    romeo = romeo.RESIZABLE;
    var _closure1_slot36 = romeo;
    golf = golf.NORMAL;
    var _closure1_slot37 = golf;
    golf = 25;
    golf = offset[golf];
    golf = yankee.bind(entity)(golf);
    romeo = golf.PersistedStore;
    golf = function(argFoo) {
        tango = function() { // Original name: EmbeddedActivitiesStoreClass
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot4;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot40;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot8;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot5;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun53656: for(var _fun53656_ip = 0; ; ) switch(_fun53656_ip) {
 0:
                mike = argFoo;
                entity = global;
                oscar = entity.Set;
                zulu = null;
                report = zulu == mike;
                entity = undefined;
                tango = undefined;
                if(report) { _fun53656_ip = 30; continue _fun53656 }
 24:
                tango = mike.everLaunchedActivities;
 30:
                if(!(zulu == tango)) { _fun53656_ip = 38; continue _fun53656 }
 34:
                tango = new Array(0);
 38:
                report = oscar.prototype;
                report = Object.create(report, {constructor: {value: oscar}});
                verify = report;
                options = tango;
                tango = new verify[oscar](options, golf);
                tango = tango instanceof Object ? tango : report;
                if(!(zulu != mike)) { _fun53656_ip = 93; continue _fun53656 }
 65:
                zulu = {};
                options = zulu;
                golf = mike;
                mike = copyDataProperties(options, golf);
                mike = 'everLaunchedActivities';
                zulu[mike] = tango;
                _closure1_slot17 = zulu;
 93:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(30);
        entity[0] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot17;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getSelfEmbeddedActivityForChannel';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun53658: for(var _fun53658_ip = 0; ; ) switch(_fun53658_ip) {
 0:
                entity = argFoo;
                var _closure3_slot0 = entity;
                mike = null;
                tango = mike == entity;
                entity = null;
                if(tango) { _fun53658_ip = 84; continue _fun53658 }
 20:
                tango = global;
                oscar = tango.Array;
                report = oscar.from;
                golf = _closure1_slot21;
                tango = golf.values;
                tango = tango.bind(golf)();
                report = report.bind(oscar)(tango);
                tango = report.find;
                zulu = function(argFoo) {
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 14;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.getEmbeddedActivityLocationChannelId;
                    entity = argFoo;
                    entity = entity.location;
                    mike = mike.bind(zulu)(entity);
                    entity = _closure3_slot0;
                    entity = mike === entity;
                    return entity;
                };
                zulu = tango.bind(report)(zulu);
                tango = mike != zulu;
                mike = null;
                if(!tango) { _fun53658_ip = 81; continue _fun53658 }
 78:
                mike = zulu;
 81:
                entity = mike;
 84:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getSelfEmbeddedActivityForLocation';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun53660: for(var _fun53660_ip = 0; ; ) switch(_fun53660_ip) {
 0:
                entity = argFoo;
                var _closure3_slot0 = entity;
                mike = null;
                tango = mike == entity;
                entity = null;
                if(tango) { _fun53660_ip = 84; continue _fun53660 }
 20:
                tango = global;
                oscar = tango.Array;
                report = oscar.from;
                golf = _closure1_slot21;
                tango = golf.values;
                tango = tango.bind(golf)();
                report = report.bind(oscar)(tango);
                tango = report.find;
                zulu = function(argFoo) {
                    entity = argFoo;
                    entity = entity.location;
                    mike = entity.id;
                    entity = _closure3_slot0;
                    entity = entity.id;
                    entity = mike === entity;
                    return entity;
                };
                zulu = tango.bind(report)(zulu);
                tango = mike != zulu;
                mike = null;
                if(!tango) { _fun53660_ip = 81; continue _fun53660 }
 78:
                mike = zulu;
 81:
                entity = mike;
 84:
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getSelfEmbeddedActivitiesForStartingChannel';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun53662: for(var _fun53662_ip = 0; ; ) switch(_fun53662_ip) {
 0:
                mike = argFoo;
                var _closure3_slot0 = mike;
                mike = global;
                tango = mike.location;
                zulu = null;
                if(!(zulu == tango)) { _fun53662_ip = 27; continue _fun53662 }
 23:
                zulu = undefined;
                return zulu;
 27:
                tango = mike.Array;
                zulu = tango.from;
                report = _closure1_slot21;
                mike = report.values;
                mike = mike.bind(report)();
                zulu = zulu.bind(tango)(mike);
                mike = zulu.find;
                entity = function(argFoo) {
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 14;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.getEmbeddedActivityLocationStartingChannelId;
                    entity = argFoo;
                    entity = entity.location;
                    mike = mike.bind(zulu)(entity);
                    entity = _closure3_slot0;
                    entity = mike === entity;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getSelfEmbeddedActivities';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot21;
            return entity;
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getEmbeddedActivitiesForGuild';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun53665: for(var _fun53665_ip = 0; ; ) switch(_fun53665_ip) {
 0:
                tango = _closure1_slot22;
                zulu = tango.get;
                entity = argFoo;
                entity = zulu.bind(tango)(entity);
                zulu = null;
                if(!(zulu == entity)) { _fun53665_ip = 30; continue _fun53665 }
 26:
                entity = _closure1_slot18;
 30:
                return entity;
            }
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'getEmbeddedActivitiesForChannel';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun53666: for(var _fun53666_ip = 0; ; ) switch(_fun53666_ip) {
 0:
                tango = _closure1_slot23;
                zulu = tango.get;
                entity = argFoo;
                entity = zulu.bind(tango)(entity);
                zulu = null;
                if(!(zulu == entity)) { _fun53666_ip = 30; continue _fun53666 }
 26:
                entity = _closure1_slot18;
 30:
                return entity;
            }
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'getEmbeddedActivitiesForLocation';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun53667: for(var _fun53667_ip = 0; ; ) switch(_fun53667_ip) {
 0:
                tango = _closure1_slot25;
                zulu = tango.get;
                entity = argFoo;
                entity = entity.id;
                entity = zulu.bind(tango)(entity);
                zulu = null;
                if(!(zulu == entity)) { _fun53667_ip = 35; continue _fun53667 }
 31:
                entity = _closure1_slot18;
 35:
                return entity;
            }
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'getEmbeddedActivitiesForStartingChannel';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun53668: for(var _fun53668_ip = 0; ; ) switch(_fun53668_ip) {
 0:
                tango = _closure1_slot24;
                zulu = tango.get;
                entity = argFoo;
                entity = zulu.bind(tango)(entity);
                zulu = null;
                if(!(zulu == entity)) { _fun53668_ip = 30; continue _fun53668 }
 26:
                entity = _closure1_slot18;
 30:
                return entity;
            }
        };
        report['value'] = golf;
        entity[9] = report;
        report = {};
        golf = 'getEmbeddedActivitiesByChannel';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot23;
            return entity;
        };
        report['value'] = golf;
        entity[10] = report;
        report = {};
        golf = 'getEmbeddedActivityDurationMs';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun53670: for(var _fun53670_ip = 0; ; ) switch(_fun53670_ip) {
 0:
                zulu = _closure1_slot33;
                mike = zulu.get;
                oscar = _closure1_slot47;
                report = undefined;
                tango = argFoo;
                entity = argBar;
                entity = oscar.bind(report)(tango, entity);
                zulu = mike.bind(zulu)(entity);
                entity = null;
                mike = entity == zulu;
                if(mike) { _fun53670_ip = 65; continue _fun53670 }
 44:
                mike = global;
                tango = mike.Date;
                mike = tango.now;
                mike = mike.bind(tango)();
                entity = mike - zulu;
 65:
                return entity;
            }
        };
        report['value'] = golf;
        entity[11] = report;
        report = {};
        golf = 'isLaunchingActivity';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot26;
            mike = entity.size;
            entity = 0;
            entity = mike > entity;
            return entity;
        };
        report['value'] = golf;
        entity[12] = report;
        report = {};
        golf = 'getShelfActivities';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun53672: for(var _fun53672_ip = 0; ; ) switch(_fun53672_ip) {
 0:
                tango = _closure1_slot43;
                zulu = undefined;
                entity = argFoo;
                tango = tango.bind(zulu)(entity);
                zulu = _closure1_slot27;
                entity = zulu.get;
                entity = entity.bind(zulu)(tango);
                zulu = null;
                if(!(zulu == entity)) { _fun53672_ip = 41; continue _fun53672 }
 37:
                entity = _closure1_slot19;
 41:
                return entity;
            }
        };
        report['value'] = golf;
        entity[13] = report;
        report = {};
        golf = 'getShelfFetchStatus';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot43;
            zulu = undefined;
            mike = argFoo;
            zulu = tango.bind(zulu)(mike);
            mike = _closure1_slot28;
            entity = mike.get;
            entity = entity.bind(mike)(zulu);
            return entity;
        };
        report['value'] = golf;
        entity[14] = report;
        report = {};
        golf = 'shouldFetchShelf';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun53674: for(var _fun53674_ip = 0; ; ) switch(_fun53674_ip) {
 0:
                zulu = _closure1_slot43;
                report = undefined;
                mike = argFoo;
                zulu = zulu.bind(report)(mike);
                mike = _closure1_slot28;
                entity = mike.get;
                zulu = entity.bind(mike)(zulu);
                entity = null;
                if(!(entity == zulu)) { _fun53674_ip = 49; continue _fun53674 }
 37:
                mike = {};
                tango = false;
                mike['isFetching'] = tango;
                zulu = mike;
 49:
                mike = global;
                tango = mike.Date;
                mike = tango.now;
                tango = mike.bind(tango)();
                mike = entity == zulu;
                report = undefined;
                if(mike) { _fun53674_ip = 81; continue _fun53674 }
 75:
                report = zulu.lastFetchTimestampMs;
 81:
                oscar = entity != report;
                mike = 0;
                if(!oscar) { _fun53674_ip = 93; continue _fun53674 }
 90:
                mike = report;
 93:
                tango = tango - mike;
                mike = 21600000;
                mike = tango > mike;
                entity = entity != zulu;
                if(!entity) { _fun53674_ip = 120; continue _fun53674 }
 114:
                entity = zulu.isFetching;
 120:
                entity = !entity;
                if(!entity) { _fun53674_ip = 129; continue _fun53674 }
 126:
                entity = mike;
 129:
                return entity;
            }
        };
        report['value'] = golf;
        entity[15] = report;
        report = {};
        golf = 'getOrientationLockStateForApp';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot29;
            mike = zulu.get;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[16] = report;
        report = {};
        golf = 'getPipOrientationLockStateForApp';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun53676: for(var _fun53676_ip = 0; ; ) switch(_fun53676_ip) {
 0:
                tango = argFoo;
                zulu = this;
                mike = _closure1_slot30;
                entity = mike.get;
                entity = entity.bind(mike)(tango);
                mike = null;
                if(!(mike == entity)) { _fun53676_ip = 40; continue _fun53676 }
 29:
                mike = zulu.getOrientationLockStateForApp;
                entity = mike.bind(zulu)(tango);
 40:
                return entity;
            }
        };
        report['value'] = golf;
        entity[17] = report;
        report = {};
        golf = 'getGridOrientationLockStateForApp';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun53677: for(var _fun53677_ip = 0; ; ) switch(_fun53677_ip) {
 0:
                tango = argFoo;
                zulu = this;
                mike = _closure1_slot31;
                entity = mike.get;
                entity = entity.bind(mike)(tango);
                mike = null;
                if(!(mike == entity)) { _fun53677_ip = 43; continue _fun53677 }
 29:
                oscar = _closure1_slot30;
                report = oscar.get;
                entity = report.bind(oscar)(tango);
 43:
                if(!(mike == entity)) { _fun53677_ip = 58; continue _fun53677 }
 47:
                mike = zulu.getOrientationLockStateForApp;
                entity = mike.bind(zulu)(tango);
 58:
                return entity;
            }
        };
        report['value'] = golf;
        entity[18] = report;
        report = {};
        golf = 'getLayoutModeForApp';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot32;
            mike = zulu.get;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[19] = report;
        report = {};
        golf = 'getConnectedActivityChannelId';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun53679: for(var _fun53679_ip = 0; ; ) switch(_fun53679_ip) {
 0:
                zulu = _closure1_slot34;
                mike = null;
                if(!(mike == zulu)) { _fun53679_ip = 17; continue _fun53679 }
 13:
                mike = undefined;
                return mike;
 17:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 14;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.getEmbeddedActivityLocationChannelId;
                entity = _closure1_slot34;
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        report['value'] = golf;
        entity[20] = report;
        report = {};
        golf = 'getConnectedActivityLocation';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot34;
            return entity;
        };
        report['value'] = golf;
        entity[21] = report;
        report = {};
        golf = 'getActivityPanelMode';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot35;
            return entity;
        };
        report['value'] = golf;
        entity[22] = report;
        report = {};
        golf = 'getFocusedLayout';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot36;
            return entity;
        };
        report['value'] = golf;
        entity[23] = report;
        report = {};
        golf = 'getCurrentEmbeddedActivity';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun53683: for(var _fun53683_ip = 0; ; ) switch(_fun53683_ip) {
 0:
                zulu = this;
                entity = zulu.getConnectedActivityLocation;
                mike = entity.bind(zulu)();
                entity = zulu.getSelfEmbeddedActivityForLocation;
                mike = entity.bind(zulu)(mike);
                entity = null;
                zulu = entity != mike;
                entity = undefined;
                if(!zulu) { _fun53683_ip = 38; continue _fun53683 }
 35:
                entity = mike;
 38:
                return entity;
            }
        };
        report['value'] = golf;
        entity[24] = report;
        report = {};
        golf = 'getEmbeddedActivityForUserId';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun53684: for(var _fun53684_ip = 0; ; ) switch(_fun53684_ip) {
 0:
                romeo = argFoo;
                yankee = argBar;
                offset = undefined;
                if(!(offset === yankee)) { _fun53684_ip = 14; continue _fun53684 }
 12:
                return offset;
 14:
                mike = _closure1_slot38;
                entity = _closure1_slot25;
                options = mike.bind(offset)(entity);
                entity = options.bind(offset)();
                mike = entity.done;
                golf = 2;
                oscar = 0;
                report = 1;
                tango = entity;
                zulu = undefined;
                entity = undefined;
                if(mike) { _fun53684_ip = 172; continue _fun53684 }
 57:
                foxtrot = tango.value;
                mike = _closure1_slot3;
                mike = mike.bind(offset)(foxtrot, golf);
                foxtrot = mike[oscar];
                foxtrot = _closure1_slot38;
                mike = mike[report];
                backup = foxtrot.bind(offset)(mike);
                foxtrot = backup.bind(offset)();
                mike = foxtrot.done;
                if(mike) { _fun53684_ip = 155; continue _fun53684 }
 101:
                kilo = foxtrot.value;
                mike = kilo.applicationId;
                if(!(mike === yankee)) { _fun53684_ip = 137; continue _fun53684 }
 115:
                sizing = kilo.userIds;
                mike = sizing.has;
                mike = mike.bind(sizing)(romeo);
                entity = kilo;
                if(mike) { _fun53684_ip = 172; continue _fun53684 }
 137:
                sizing = backup.bind(offset)();
                mike = sizing.done;
                foxtrot = sizing;
                zulu = kilo;
                if(!mike) { _fun53684_ip = 101; continue _fun53684 }
 155:
                foxtrot = options.bind(offset)();
                mike = foxtrot.done;
                tango = foxtrot;
                entity = undefined;
                if(!mike) { _fun53684_ip = 57; continue _fun53684 }
 172:
                return entity;
            }
        };
        report['value'] = golf;
        entity[25] = report;
        report = {};
        golf = 'hasActivityEverBeenLaunched';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = _closure1_slot17;
            zulu = entity.everLaunchedActivities;
            mike = zulu.has;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[26] = report;
        report = {};
        golf = 'getLaunchState';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun53686: for(var _fun53686_ip = 0; ; ) switch(_fun53686_ip) {
 0:
                oscar = argFoo;
                report = argBar;
                entity = null;
                if(!(entity != oscar)) { _fun53686_ip = 16; continue _fun53686 }
 12:
                if(!(entity == report)) { _fun53686_ip = 20; continue _fun53686 }
 16:
                entity = undefined;
                return entity;
 20:
                zulu = _closure1_slot26;
                mike = zulu.get;
                tango = _closure1_slot42;
                entity = undefined;
                entity = tango.bind(entity)(report, oscar);
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        report['value'] = golf;
        entity[27] = report;
        report = {};
        golf = 'getLaunchStates';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot26;
            return entity;
        };
        report['value'] = golf;
        entity[28] = report;
        report = {};
        golf = 'getActivityPopoutWindowLayout';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot37;
            return entity;
        };
        report['value'] = oscar;
        entity[29] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    romeo = golf.bind(entity)(romeo);
    golf = 'EmbeddedActivitiesStore';
    romeo['displayName'] = golf;
    golf = 'EmbeddedActivities';
    romeo['persistKey'] = golf;
    golf = new Array(7);
    foxtrot = function(argFoo) {
        entity = {};
        tango = argFoo;
        report = entity;
        mike = copyDataProperties(report, tango);
        zulu = new Array(0);
        mike = 'seenFeaturedActivities';
        entity[mike] = zulu;
        zulu = false;
        mike = 'shouldShowNewActivityIndicator';
        entity[mike] = zulu;
        return entity;
    };
    golf[0] = foxtrot;
    foxtrot = function(argFoo) {
        mike = argFoo;
        entity = delete mike.seenFeaturedActivities;
        entity = {};
        tango = entity;
        zulu = mike;
        mike = copyDataProperties(tango, zulu);
        return entity;
    };
    golf[1] = foxtrot;
    foxtrot = function(argFoo) {
        mike = argFoo;
        entity = delete mike.seenActivities;
        entity = {};
        tango = entity;
        zulu = mike;
        mike = copyDataProperties(tango, zulu);
        return entity;
    };
    golf[2] = foxtrot;
    foxtrot = function(argFoo) {
        mike = argFoo;
        entity = delete mike.currentFreeActivity;
        entity = delete mike.lastFreeActivityRotationTimestampMs;
        entity = delete mike.freePeriodActivities;
        entity = delete mike.shouldShowFreeActivityIndicator;
        entity = {};
        tango = entity;
        zulu = mike;
        mike = copyDataProperties(tango, zulu);
        return entity;
    };
    golf[3] = foxtrot;
    foxtrot = function(argFoo) {
        entity = {};
        tango = argFoo;
        report = entity;
        mike = copyDataProperties(report, tango);
        zulu = {};
        mike = 'seenNewActivities';
        entity[mike] = zulu;
        zulu = {};
        mike = 'seenUpdatedActivities';
        entity[mike] = zulu;
        return entity;
    };
    golf[4] = foxtrot;
    foxtrot = function(argFoo) {
        _fun53694: for(var _fun53694_ip = 0; ; ) switch(_fun53694_ip) {
 0:
            mike = argFoo;
            entity = global;
            tango = entity.Set;
            entity = mike.everLaunchedActivities;
            zulu = null;
            if(!(zulu == entity)) { _fun53694_ip = 27; continue _fun53694 }
 23:
            entity = new Array(0);
 27:
            zulu = tango.prototype;
            zulu = Object.create(zulu, {constructor: {value: tango}});
            golf = zulu;
            oscar = entity;
            entity = new golf[tango](oscar, report);
            zulu = entity instanceof Object ? entity : zulu;
            entity = {};
            oscar = entity;
            report = mike;
            mike = copyDataProperties(oscar, report);
            mike = 'everLaunchedActivities';
            entity[mike] = zulu;
            return entity;
        }
    };
    golf[5] = foxtrot;
    foxtrot = function(argFoo) {
        mike = argFoo;
        entity = delete mike.usersHavePlayedByApp;
        entity = {};
        tango = entity;
        zulu = mike;
        mike = copyDataProperties(tango, zulu);
        return entity;
    };
    golf[6] = foxtrot;
    romeo['migrations'] = golf;
    golf = 19;
    golf = offset[golf];
    echo = yankee.bind(entity)(golf);
    golf = {};
    foxtrot = function(argFoo) { // Original name: handleActivityLayoutModeUpdate
        entity = argFoo;
        tango = entity.applicationId;
        zulu = entity.layoutMode;
        mike = _closure1_slot32;
        entity = mike.set;
        entity = entity.bind(mike)(tango, zulu);
        entity = undefined;
        return entity;
    };
    golf['ACTIVITY_LAYOUT_MODE_UPDATE'] = foxtrot;
    foxtrot = function(argFoo) { // Original name: handleConnectionOpen
        entity = argFoo;
        zulu = entity.guilds;
        tango = _closure1_slot23;
        mike = tango.clear;
        mike = mike.bind(tango)();
        tango = _closure1_slot22;
        mike = tango.clear;
        mike = mike.bind(tango)();
        tango = _closure1_slot25;
        mike = tango.clear;
        mike = mike.bind(tango)();
        mike = _closure1_slot24;
        entity = mike.clear;
        entity = entity.bind(mike)();
        mike = zulu.forEach;
        entity = function(argFoo) {
            zulu = _closure1_slot45;
            entity = undefined;
            mike = argFoo;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    golf['CONNECTION_OPEN_SUPPLEMENTAL'] = foxtrot;
    foxtrot = function(argFoo) { // Original name: handleGuildCreate
        entity = argFoo;
        zulu = entity.guild;
        mike = _closure1_slot45;
        entity = undefined;
        mike = mike.bind(entity)(zulu);
        return entity;
    };
    golf['GUILD_CREATE'] = foxtrot;
    foxtrot = function(argFoo) { // Original name: handleChannelDelete
        _fun53700: for(var _fun53700_ip = 0; ; ) switch(_fun53700_ip) {
 0:
            entity = argFoo;
            mike = entity.channel;
            var _closure2_slot0 = mike;
            oscar = _closure1_slot23;
            report = oscar.get;
            entity = mike.id;
            oscar = report.bind(oscar)(entity);
            report = null;
            if(!(report == oscar)) { _fun53700_ip = 46; continue _fun53700 }
 42:
            oscar = new Array(0);
 46:
            verify = _closure1_slot23;
            options = verify.set;
            golf = mike.id;
            entity = new Array(0);
            entity = options.bind(verify)(golf, entity);
            options = _closure1_slot43;
            golf = mike.guild_id;
            entity = undefined;
            verify = options.bind(entity)(golf);
            options = _closure1_slot22;
            golf = options.get;
            options = golf.bind(options)(verify);
            if(!(report == options)) { _fun53700_ip = 108; continue _fun53700 }
 104:
            options = new Array(0);
 108:
            golf = options.filter;
            report = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 14;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.getEmbeddedActivityLocationChannelId;
                entity = argFoo;
                entity = entity.location;
                mike = mike.bind(zulu)(entity);
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike !== entity;
                return entity;
            };
            options = golf.bind(options)(report);
            golf = _closure1_slot22;
            report = golf.set;
            report = report.bind(golf)(verify, options);
            report = oscar.forEach;
            tango = function(argFoo) {
                zulu = _closure1_slot25;
                mike = zulu.delete;
                entity = argFoo;
                entity = entity.location;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            tango = report.bind(oscar)(tango);
            report = _closure1_slot24;
            tango = report.set;
            zulu = mike.id;
            mike = new Array(0);
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    golf['CHANNEL_DELETE'] = foxtrot;
    foxtrot = function(argFoo) { // Original name: handleEmbeddedActivityLaunchStart
        _fun53703: for(var _fun53703_ip = 0; ; ) switch(_fun53703_ip) {
 0:
            entity = argFoo;
            yankee = entity.applicationId;
            offset = entity.componentId;
            tango = entity.commandOrigin;
            options = entity.launchParams;
            report = entity.channelId;
            verify = entity.inviterUserId;
            golf = _closure1_slot26;
            oscar = golf.set;
            mike = _closure1_slot42;
            entity = undefined;
            report = mike.bind(entity)(report, yankee);
            mike = {};
            yankee = true;
            mike['isLaunching'] = yankee;
            mike['componentId'] = offset;
            mike['inviterUserId'] = verify;
            mike['launchParams'] = options;
            mike = oscar.bind(golf)(report, mike);
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 24;
            mike = oscar[mike];
            mike = report.bind(entity)(mike);
            mike = mike.CommandOrigin;
            mike = mike.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
            if(!(tango !== mike)) { _fun53703_ip = 139; continue _fun53703 }
 127:
            mike = _closure1_slot14;
            mike = mike.RESIZABLE;
            _fun53703_ip = 149; continue _fun53703;
 139:
            tango = _closure1_slot14;
            mike = tango.NO_CHAT;
 149:
            _closure1_slot36 = mike;
            return entity;
        }
    };
    golf['EMBEDDED_ACTIVITY_LAUNCH_START'] = foxtrot;
    foxtrot = function(argFoo) { // Original name: handleEmbeddedActivityLaunchSuccess
        entity = argFoo;
        tango = entity.applicationId;
        entity = entity.channelId;
        zulu = _closure1_slot17;
        report = zulu.everLaunchedActivities;
        zulu = report.add;
        zulu = zulu.bind(report)(tango);
        zulu = _closure1_slot46;
        mike = {};
        mike['applicationId'] = tango;
        mike['channelId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    golf['EMBEDDED_ACTIVITY_LAUNCH_SUCCESS'] = foxtrot;
    foxtrot = function(argFoo) { // Original name: handleEmbeddedActivityLaunchFail
        entity = argFoo;
        tango = entity.applicationId;
        entity = entity.channelId;
        zulu = _closure1_slot46;
        mike = {};
        mike['applicationId'] = tango;
        mike['channelId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    golf['EMBEDDED_ACTIVITY_LAUNCH_FAIL'] = foxtrot;
    foxtrot = function(argFoo) { // Original name: handleEmbeddedActivityClose
        _fun53706: for(var _fun53706_ip = 0; ; ) switch(_fun53706_ip) {
 0:
            entity = argFoo;
            tango = entity.applicationId;
            zulu = _closure1_slot21;
            entity = zulu.get;
            report = entity.bind(zulu)(tango);
            zulu = _closure1_slot21;
            entity = zulu.delete;
            entity = entity.bind(zulu)(tango);
            zulu = null;
            oscar = zulu == report;
            entity = undefined;
            tango = undefined;
            if(oscar) { _fun53706_ip = 62; continue _fun53706 }
 52:
            report = report.location;
            tango = report.id;
 62:
            report = _closure1_slot34;
            oscar = zulu == report;
            zulu = undefined;
            if(oscar) { _fun53706_ip = 80; continue _fun53706 }
 75:
            zulu = report.id;
 80:
            if(!(tango === zulu)) { _fun53706_ip = 88; continue _fun53706 }
 84:
            _closure1_slot34 = entity;
 88:
            return entity;
        }
    };
    golf['EMBEDDED_ACTIVITY_CLOSE'] = foxtrot;
    foxtrot = function(argFoo) { // Original name: handleUpdatePopoutWindowLayout
        entity = argFoo;
        mike = entity.layout;
        _closure1_slot37 = mike;
        entity = undefined;
        return entity;
    };
    golf['EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT'] = foxtrot;
    foxtrot = function(argFoo) { // Original name: handleEmbeddedActivityUpdateV2
        mike = argFoo;
        oscar = mike.applicationId;
        tango = mike.launchId;
        entity = mike.compositeInstanceId;
        golf = mike.location;
        report = mike.participants;
        zulu = _closure1_slot44;
        mike = {};
        mike['location'] = golf;
        mike['applicationId'] = oscar;
        mike['launchId'] = tango;
        mike['compositeInstanceId'] = entity;
        tango = report.map;
        entity = function(argFoo) {
            mike = argFoo;
            entity = {};
            zulu = mike.user_id;
            entity['userId'] = zulu;
            zulu = mike.session_id;
            entity['sessionId'] = zulu;
            mike = mike.nonce;
            entity['nonce'] = mike;
            return entity;
        };
        entity = tango.bind(report)(entity);
        mike['participants'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    golf['EMBEDDED_ACTIVITY_UPDATE_V2'] = foxtrot;
    foxtrot = function(argFoo) { // Original name: handleLocalActivityUpdate
        _fun53710: for(var _fun53710_ip = 0; ; ) switch(_fun53710_ip) {
 0:
            entity = argFoo;
            zulu = entity.activity;
            mike = null;
            if(!(mike != zulu)) { _fun53710_ip = 96; continue _fun53710 }
 15:
            report = _closure1_slot21;
            tango = report.get;
            oscar = zulu.application_id;
            golf = mike != oscar;
            zulu = '';
            if(!golf) { _fun53710_ip = 47; continue _fun53710 }
 44:
            zulu = oscar;
 47:
            report = tango.bind(report)(zulu);
            if(!(mike != report)) { _fun53710_ip = 92; continue _fun53710 }
 56:
            tango = _closure1_slot21;
            zulu = tango.set;
            mike = report.applicationId;
            entity = {};
            verify = entity;
            options = report;
            report = copyDataProperties(verify, options);
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
 92:
            entity = false;
            return entity;
 96:
            entity = false;
            return entity;
        }
    };
    golf['LOCAL_ACTIVITY_UPDATE'] = foxtrot;
    foxtrot = function(argFoo) { // Original name: handleSetSelfEmbeddedActivityConfig
        _fun53711: for(var _fun53711_ip = 0; ; ) switch(_fun53711_ip) {
 0:
            entity = argFoo;
            tango = entity.applicationId;
            oscar = entity.config;
            zulu = _closure1_slot21;
            mike = zulu.get;
            report = mike.bind(zulu)(tango);
            mike = null;
            if(!(mike != report)) { _fun53711_ip = 77; continue _fun53711 }
 36:
            tango = _closure1_slot21;
            zulu = tango.set;
            mike = report.applicationId;
            entity = {};
            options = entity;
            golf = report;
            report = copyDataProperties(options, golf);
            report = 'config';
            entity[report] = oscar;
            entity = zulu.bind(tango)(mike, entity);
 77:
            entity = undefined;
            return entity;
        }
    };
    golf['EMBEDDED_ACTIVITY_SET_CONFIG'] = foxtrot;
    foxtrot = function(argFoo) { // Original name: handleEmbeddedActivityFetchShelf
        _fun53712: for(var _fun53712_ip = 0; ; ) switch(_fun53712_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            zulu = _closure1_slot43;
            entity = undefined;
            report = zulu.bind(entity)(tango);
            tango = _closure1_slot28;
            mike = tango.get;
            golf = mike.bind(tango)(report);
            zulu = tango.set;
            mike = {};
            oscar = true;
            mike['isFetching'] = oscar;
            oscar = null;
            options = oscar == golf;
            oscar = undefined;
            if(options) { _fun53712_ip = 67; continue _fun53712 }
 61:
            oscar = golf.lastFetchTimestampMs;
 67:
            mike['lastFetchTimestampMs'] = oscar;
            mike = zulu.bind(tango)(report, mike);
            return entity;
        }
    };
    golf['EMBEDDED_ACTIVITY_FETCH_SHELF'] = foxtrot;
    foxtrot = function(argFoo) { // Original name: handleEmbeddedActivityFetchShelfSuccess
        entity = argFoo;
        report = entity.guildId;
        zulu = entity.activities;
        tango = _closure1_slot43;
        entity = undefined;
        report = tango.bind(entity)(report);
        oscar = _closure1_slot27;
        tango = oscar.set;
        tango = tango.bind(oscar)(report, zulu);
        tango = global;
        oscar = tango.Date;
        tango = oscar.now;
        oscar = tango.bind(oscar)();
        tango = {};
        tango['activities'] = zulu;
        tango['now'] = oscar;
        zulu = function(argFoo) { // Original name: handleShowingNewActivityIndicator
            mike = argFoo;
            zulu = mike.activities;
            mike = mike.now;
            var _closure3_slot0 = mike;
            mike = zulu.forEach;
            entity = function(argFoo) {
                _fun53715: for(var _fun53715_ip = 0; ; ) switch(_fun53715_ip) {
 0:
                    entity = argFoo;
                    tango = entity.application_id;
                    report = entity.client_platform_config;
                    oscar = _closure1_slot1;
                    options = _closure1_slot2;
                    entity = 21;
                    mike = options[entity];
                    entity = undefined;
                    oscar = oscar.bind(entity)(mike);
                    golf = _closure1_slot0;
                    mike = 22;
                    mike = options[mike];
                    golf = golf.bind(entity)(mike);
                    mike = golf.getOS;
                    mike = mike.bind(golf)();
                    mike = oscar.bind(entity)(mike);
                    mike = report[mike];
                    oscar = mike.label_until;
                    report = null;
                    if(!(report != oscar)) { _fun53715_ip = 493; continue _fun53715 }
 90:
                    report = global;
                    options = report.Date;
                    backup = mike.label_until;
                    golf = options.prototype;
                    golf = Object.create(golf, {constructor: {value: options}});
                    kilo = golf;
                    oscar = new kilo[options](backup, foxtrot);
                    golf = oscar instanceof Object ? oscar : golf;
                    oscar = golf.getTime;
                    golf = oscar.bind(golf)();
                    oscar = _closure3_slot0;
                    if(!(!(golf < oscar))) { _fun53715_ip = 493; continue _fun53715 }
 148:
                    oscar = _closure1_slot17;
                    oscar = oscar.seenNewActivities;
                    offset = oscar[tango];
                    verify = report.Object;
                    options = verify.hasOwn;
                    oscar = _closure1_slot17;
                    oscar = oscar.seenNewActivities;
                    options = options.bind(verify)(oscar, tango);
                    oscar = report.Date;
                    verify = oscar.prototype;
                    verify = Object.create(verify, {constructor: {value: oscar}});
                    kilo = verify;
                    backup = offset;
                    oscar = new kilo[oscar](backup, foxtrot);
                    verify = oscar instanceof Object ? oscar : verify;
                    oscar = verify.getTime;
                    oscar = oscar.bind(verify)();
                    verify = oscar < golf;
                    yankee = mike.label_type;
                    romeo = _closure1_slot0;
                    oscar = _closure1_slot2;
                    offset = 23;
                    oscar = oscar[offset];
                    oscar = romeo.bind(entity)(oscar);
                    oscar = oscar.EmbeddedActivityLabelTypes;
                    oscar = oscar.NEW;
                    oscar = yankee !== oscar;
                    if(oscar) { _fun53715_ip = 287; continue _fun53715 }
 278:
                    if(!options) { _fun53715_ip = 284; continue _fun53715 }
 281:
                    options = !verify;
 284:
                    oscar = options;
 287:
                    if(oscar) { _fun53715_ip = 322; continue _fun53715 }
 290:
                    options = _closure1_slot17;
                    oscar = true;
                    options['shouldShowNewActivityIndicator'] = oscar;
                    oscar = _closure1_slot17;
                    options = oscar.seenNewActivities;
                    oscar = mike.label_until;
                    options[tango] = oscar;
 322:
                    oscar = _closure1_slot17;
                    oscar = oscar.seenUpdatedActivities;
                    verify = oscar[tango];
                    yankee = report.Object;
                    options = yankee.hasOwn;
                    oscar = _closure1_slot17;
                    oscar = oscar.seenUpdatedActivities;
                    oscar = options.bind(yankee)(oscar, tango);
                    report = report.Date;
                    options = report.prototype;
                    options = Object.create(options, {constructor: {value: report}});
                    kilo = options;
                    backup = verify;
                    report = new kilo[report](backup, foxtrot);
                    options = report instanceof Object ? report : options;
                    report = options.getTime;
                    report = report.bind(options)();
                    golf = report < golf;
                    options = mike.label_type;
                    verify = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[offset];
                    report = verify.bind(entity)(report);
                    report = report.EmbeddedActivityLabelTypes;
                    report = report.UPDATED;
                    report = options !== report;
                    if(report) { _fun53715_ip = 458; continue _fun53715 }
 449:
                    if(!oscar) { _fun53715_ip = 455; continue _fun53715 }
 452:
                    oscar = !golf;
 455:
                    report = oscar;
 458:
                    if(report) { _fun53715_ip = 493; continue _fun53715 }
 461:
                    oscar = _closure1_slot17;
                    report = true;
                    oscar['shouldShowNewActivityIndicator'] = report;
                    zulu = _closure1_slot17;
                    zulu = zulu.seenUpdatedActivities;
                    mike = mike.label_until;
                    zulu[tango] = mike;
 493:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        zulu = zulu.bind(entity)(tango);
        tango = _closure1_slot28;
        zulu = tango.set;
        mike = {};
        golf = false;
        mike['isFetching'] = golf;
        mike['lastFetchTimestampMs'] = oscar;
        mike = zulu.bind(tango)(report, mike);
        return entity;
    };
    golf['EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS'] = foxtrot;
    foxtrot = function(argFoo) { // Original name: handleEmbeddedActivityFetchShelfFail
        _fun53716: for(var _fun53716_ip = 0; ; ) switch(_fun53716_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            zulu = _closure1_slot43;
            entity = undefined;
            report = zulu.bind(entity)(tango);
            tango = _closure1_slot28;
            mike = tango.get;
            golf = mike.bind(tango)(report);
            zulu = tango.set;
            mike = {};
            oscar = false;
            mike['isFetching'] = oscar;
            oscar = null;
            options = oscar == golf;
            oscar = undefined;
            if(options) { _fun53716_ip = 67; continue _fun53716 }
 61:
            oscar = golf.lastFetchTimestampMs;
 67:
            mike['lastFetchTimestampMs'] = oscar;
            mike = zulu.bind(tango)(report, mike);
            return entity;
        }
    };
    golf['EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL'] = foxtrot;
    foxtrot = function() { // Original name: EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR
        mike = _closure1_slot17;
        entity = false;
        mike['shouldShowNewActivityIndicator'] = entity;
        entity = undefined;
        return entity;
    };
    golf['EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR'] = foxtrot;
    foxtrot = function(argFoo) { // Original name: handleOrientationLockState
        _fun53718: for(var _fun53718_ip = 0; ; ) switch(_fun53718_ip) {
 0:
            entity = argFoo;
            zulu = entity.applicationId;
            golf = entity.lockState;
            oscar = entity.pictureInPictureLockState;
            tango = entity.gridLockState;
            entity = null;
            if(!(entity != golf)) { _fun53718_ip = 52; continue _fun53718 }
 32:
            report = _closure1_slot29;
            mike = report.set;
            mike = mike.bind(report)(zulu, golf);
            _fun53718_ip = 69; continue _fun53718;
 52:
            report = _closure1_slot29;
            mike = report.delete;
            mike = mike.bind(report)(zulu);
 69:
            if(!(entity !== oscar)) { _fun53718_ip = 99; continue _fun53718 }
 73:
            mike = undefined;
            if(!(mike !== oscar)) { _fun53718_ip = 116; continue _fun53718 }
 79:
            report = _closure1_slot30;
            mike = report.set;
            mike = mike.bind(report)(zulu, oscar);
            _fun53718_ip = 116; continue _fun53718;
 99:
            report = _closure1_slot30;
            mike = report.delete;
            mike = mike.bind(report)(zulu);
 116:
            if(!(entity !== tango)) { _fun53718_ip = 146; continue _fun53718 }
 120:
            entity = undefined;
            if(!(entity !== tango)) { _fun53718_ip = 163; continue _fun53718 }
 126:
            mike = _closure1_slot31;
            entity = mike.set;
            entity = entity.bind(mike)(zulu, tango);
            _fun53718_ip = 163; continue _fun53718;
 146:
            mike = _closure1_slot31;
            entity = mike.delete;
            entity = entity.bind(mike)(zulu);
 163:
            entity = undefined;
            return entity;
        }
    };
    golf['EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE'] = foxtrot;
    foxtrot = function(argFoo) { // Original name: handleSetPanelMode
        entity = argFoo;
        mike = entity.activityPanelMode;
        _closure1_slot35 = mike;
        entity = undefined;
        return entity;
    };
    golf['EMBEDDED_ACTIVITY_SET_PANEL_MODE'] = foxtrot;
    foxtrot = function(argFoo) { // Original name: handleSetFocusedLayout
        entity = argFoo;
        mike = entity.focusedActivityLayout;
        _closure1_slot36 = mike;
        entity = undefined;
        return entity;
    };
    golf['EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT'] = foxtrot;
    foxtrot = function(argFoo) { // Original name: handleChannelSelect
        _fun53721: for(var _fun53721_ip = 0; ; ) switch(_fun53721_ip) {
 0:
            entity = argFoo;
            tango = entity.channelId;
            zulu = _closure1_slot34;
            entity = null;
            if(!(entity != zulu)) { _fun53721_ip = 107; continue _fun53721 }
 21:
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 14;
            report = report[zulu];
            zulu = undefined;
            oscar = oscar.bind(zulu)(report);
            report = oscar.getEmbeddedActivityLocationChannelId;
            zulu = _closure1_slot34;
            zulu = report.bind(oscar)(zulu);
            entity = entity != zulu;
            if(!entity) { _fun53721_ip = 69; continue _fun53721 }
 65:
            entity = zulu !== tango;
 69:
            if(!entity) { _fun53721_ip = 90; continue _fun53721 }
 72:
            tango = _closure1_slot35;
            zulu = _closure1_slot13;
            zulu = zulu.PANEL;
            entity = tango === zulu;
 90:
            if(!entity) { _fun53721_ip = 107; continue _fun53721 }
 93:
            entity = _closure1_slot13;
            entity = entity.PIP;
            _closure1_slot35 = entity;
 107:
            entity = undefined;
            return entity;
        }
    };
    golf['CHANNEL_SELECT'] = foxtrot;
    options = function(argFoo) { // Original name: handlePopoutWindowClose
        _fun53722: for(var _fun53722_ip = 0; ; ) switch(_fun53722_ip) {
 0:
            entity = argFoo;
            zulu = entity.key;
            entity = _closure1_slot16;
            entity = entity.ACTIVITY_POPOUT;
            if(!(zulu === entity)) { _fun53722_ip = 39; continue _fun53722 }
 25:
            entity = _closure1_slot13;
            entity = entity.PIP;
            _closure1_slot35 = entity;
 39:
            entity = undefined;
            return entity;
        }
    };
    golf['POPOUT_WINDOW_CLOSE'] = options;
    options = romeo.prototype;
    options = Object.create(options, {constructor: {value: romeo}});
    update = options;
    result = golf;
    golf = new update[romeo](echo, result, output);
    golf = golf instanceof Object ? golf : options;
    options = 26;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'modules/activities/EmbeddedActivitiesStore.tsx';
    options = verify.bind(offset)(options);
    zulu['default'] = golf;
    zulu['FEATURED_ACTIVITY_IDS'] = oscar;
    zulu['NO_ACTIVITIES'] = report;
    zulu['NO_ACTIVITY_CONFIGS'] = tango;
    zulu['ACTIVITIES_GUILD_ID_SENTINEL_FOR_PRIVATE_CHANNELS'] = mike;
    return entity;
})();