// app/modules/recents/RecentMentionsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun60571: for(var _fun60571_ip = 0; ; ) switch(_fun60571_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot31;
            entity = entity.bind(zulu)();
            if(entity) { _fun60571_ip = 51; continue _fun60571 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun60571_ip = 92; continue _fun60571;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun60571_ip = 71; continue _fun60571 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun60572: for(var _fun60572_ip = 0; ; ) switch(_fun60572_ip) {
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
            _fun60572_ip = 74; continue _fun60572;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot31 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    entity = function(argFoo) { // Original name: updateChannelMentionCount
        _fun60575: for(var _fun60575_ip = 0; ; ) switch(_fun60575_ip) {
 0:
            mike = argFoo;
            oscar = mike.addedMessages;
            zulu = mike.deletedMessages;
            mike = null;
            if(!(mike != oscar)) { _fun60575_ip = 38; continue _fun60575 }
 23:
            report = oscar.forEach;
            tango = function(argFoo) {
                _fun60576: for(var _fun60576_ip = 0; ; ) switch(_fun60576_ip) {
 0:
                    mike = argFoo;
                    tango = _closure1_slot22;
                    zulu = mike.getChannelId;
                    zulu = zulu.bind(mike)();
                    tango = tango[zulu];
                    zulu = null;
                    if(!(zulu == tango)) { _fun60576_ip = 50; continue _fun60576 }
 30:
                    report = _closure1_slot22;
                    zulu = mike.getChannelId;
                    tango = zulu.bind(mike)();
                    zulu = 0;
                    report[tango] = zulu;
 50:
                    zulu = _closure1_slot22;
                    entity = mike.getChannelId;
                    mike = entity.bind(mike)();
                    entity = zulu[mike];
                    entity = entity + 1;
                    zulu[mike] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            tango = report.bind(oscar)(tango);
 38:
            if(!(mike != zulu)) { _fun60575_ip = 57; continue _fun60575 }
 42:
            mike = zulu.forEach;
            entity = function(argFoo) {
                _fun60577: for(var _fun60577_ip = 0; ; ) switch(_fun60577_ip) {
 0:
                    golf = argFoo;
                    zulu = _closure1_slot22;
                    mike = golf.getChannelId;
                    mike = mike.bind(golf)();
                    zulu = zulu[mike];
                    mike = null;
                    if(!(mike != zulu)) { _fun60577_ip = 94; continue _fun60577 }
 30:
                    zulu = _closure1_slot22;
                    mike = golf.getChannelId;
                    mike = mike.bind(golf)();
                    tango = global;
                    oscar = tango.Math;
                    report = oscar.max;
                    tango = _closure1_slot22;
                    entity = golf.getChannelId;
                    entity = entity.bind(golf)();
                    tango = tango[entity];
                    entity = 1;
                    tango = tango - entity;
                    entity = 0;
                    entity = report.bind(oscar)(entity, tango);
                    zulu[mike] = entity;
 94:
                    entity = undefined;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
 57:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    entity = function(argFoo) { // Original name: findOrCreateMessageRecord
        _fun60578: for(var _fun60578_ip = 0; ; ) switch(_fun60578_ip) {
 0:
            entity = argFoo;
            mike = _closure1_slot8;
            mike = entity instanceof mike;
            if(mike) { _fun60578_ip = 84; continue _fun60578 }
 17:
            oscar = _closure1_slot11;
            report = oscar.getMessage;
            tango = entity.channel_id;
            mike = entity.id;
            mike = report.bind(oscar)(tango, mike);
            tango = null;
            if(!(tango == mike)) { _fun60578_ip = 82; continue _fun60578 }
 49:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 16;
            tango = tango[zulu];
            zulu = undefined;
            tango = report.bind(zulu)(tango);
            zulu = tango.createMessageRecord;
            mike = zulu.bind(tango)(entity);
 82:
            return mike;
 84:
            return entity;
        }
    };
    var _closure1_slot33 = entity;
    entity = function(argFoo) { // Original name: parseMessage
        _fun60579: for(var _fun60579_ip = 0; ; ) switch(_fun60579_ip) {
 0:
            zulu = argFoo;
            oscar = arguments[1];
            options = undefined;
            if(!(oscar === options)) { _fun60579_ip = 14; continue _fun60579 }
 12:
            oscar = null;
 14:
            mike = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 19;
            entity = tango[entity];
            entity = mike.bind(options)(entity);
            entity = entity.bind(options)(zulu);
            if(!entity) { _fun60579_ip = 77; continue _fun60579 }
 45:
            entity = _closure1_slot19;
            tango = entity.SELF_MENTIONABLE_SYSTEM;
            mike = tango.has;
            entity = zulu.type;
            entity = mike.bind(tango)(entity);
            if(entity) { _fun60579_ip = 77; continue _fun60579 }
 73:
            entity = null;
            return entity;
 77:
            entity = null;
            if(!(entity == oscar)) { _fun60579_ip = 88; continue _fun60579 }
 83:
            oscar = zulu.channel_id;
 88:
            tango = _closure1_slot10;
            mike = tango.getChannel;
            romeo = mike.bind(tango)(oscar);
            if(!(entity != romeo)) { _fun60579_ip = 493; continue _fun60579 }
 109:
            tango = romeo.type;
            mike = _closure1_slot18;
            mike = mike.DM;
            if(!(tango !== mike)) { _fun60579_ip = 493; continue _fun60579 }
 131:
            mike = _closure1_slot26;
            tango = mike.guildFilter;
            mike = _closure1_slot17;
            mike = mike.THIS_SERVER;
            if(!(tango === mike)) { _fun60579_ip = 186; continue _fun60579 }
 155:
            mike = romeo.getGuildId;
            tango = mike.bind(romeo)();
            oscar = _closure1_slot14;
            mike = oscar.getGuildId;
            mike = mike.bind(oscar)();
            if(!(tango === mike)) { _fun60579_ip = 491; continue _fun60579 }
 186:
            tango = _closure1_slot9;
            mike = tango.getId;
            verify = mike.bind(tango)();
            tango = _closure1_slot13;
            mike = tango.isBlockedOrIgnoredForMessage;
            mike = mike.bind(tango)(zulu);
            if(mike) { _fun60579_ip = 489; continue _fun60579 }
 221:
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 20;
            mike = oscar[mike];
            mike = tango.bind(options)(mike);
            mike = mike.bind(options)(zulu, verify);
            if(mike) { _fun60579_ip = 489; continue _fun60579 }
 253:
            mike = _closure1_slot33;
            zulu = mike.bind(options)(zulu);
            mike = _closure1_slot26;
            mike = mike.everyoneFilter;
            golf = !mike;
            mike = _closure1_slot26;
            mike = mike.roleFilter;
            oscar = !mike;
            tango = _closure1_slot1;
            mike = _closure1_slot2;
            offset = 21;
            mike = mike[offset];
            tango = tango.bind(options)(mike);
            mike = {};
            mike['message'] = zulu;
            mike['userId'] = verify;
            mike['suppressEveryone'] = golf;
            mike['suppressRoles'] = oscar;
            tango = tango.bind(options)(mike);
            mike = null;
            if(!tango) { _fun60579_ip = 487; continue _fun60579 }
 341:
            tango = _closure1_slot29;
            if(!tango) { _fun60579_ip = 377; continue _fun60579 }
 348:
            yankee = _closure1_slot12;
            golf = yankee.ackMessageId;
            oscar = romeo.id;
            golf = golf.bind(yankee)(oscar);
            oscar = zulu.id;
            tango = golf !== oscar;
 377:
            if(!tango) { _fun60579_ip = 472; continue _fun60579 }
 380:
            golf = _closure1_slot1;
            oscar = _closure1_slot2;
            oscar = oscar[offset];
            golf = golf.bind(options)(oscar);
            oscar = {};
            oscar['message'] = zulu;
            oscar['userId'] = verify;
            yankee = _closure1_slot15;
            offset = yankee.isSuppressEveryoneEnabled;
            verify = romeo.getGuildId;
            verify = verify.bind(romeo)();
            verify = offset.bind(yankee)(verify);
            oscar['suppressEveryone'] = verify;
            yankee = _closure1_slot15;
            offset = yankee.isSuppressRolesEnabled;
            verify = romeo.getGuildId;
            verify = verify.bind(romeo)();
            verify = offset.bind(yankee)(verify);
            oscar['suppressRoles'] = verify;
            tango = golf.bind(options)(oscar);
 472:
            mike = zulu;
            if(!tango) { _fun60579_ip = 487; continue _fun60579 }
 478:
            tango = false;
            _closure1_slot29 = tango;
            mike = zulu;
 487:
            return mike;
 489:
            return entity;
 491:
            return entity;
 493:
            return entity;
        }
    };
    var _closure1_slot34 = entity;
    entity = function(argFoo) { // Original name: deleteMessage
        _fun60580: for(var _fun60580_ip = 0; ; ) switch(_fun60580_ip) {
 0:
            tango = argFoo;
            var _closure2_slot0 = tango;
            entity = _closure1_slot23;
            report = entity[tango];
            entity = null;
            if(!(entity != report)) { _fun60580_ip = 127; continue _fun60580 }
 26:
            entity = _closure1_slot23;
            entity = delete entity[tango];
            options = _closure1_slot32;
            golf = {};
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            tango = 17;
            verify = oscar[tango];
            entity = undefined;
            romeo = report.bind(entity)(verify);
            yankee = romeo.filter;
            offset = _closure1_slot21;
            verify = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            verify = yankee.bind(romeo)(offset, verify);
            golf['deletedMessages'] = verify;
            golf = options.bind(entity)(golf);
            tango = oscar[tango];
            oscar = report.bind(entity)(tango);
            report = oscar.filter;
            tango = _closure1_slot21;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = mike !== entity;
                return entity;
            };
            mike = report.bind(oscar)(tango, mike);
            _closure1_slot21 = mike;
            return entity;
 127:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot35 = entity;
    yankee = function(argFoo) { // Original name: handleMessageDelete
        entity = argFoo;
        zulu = entity.id;
        mike = _closure1_slot35;
        entity = undefined;
        entity = mike.bind(entity)(zulu);
        return entity;
    };
    foxtrot = function(argFoo) { // Original name: handleSetRecentMentionsFilters
        _fun60584: for(var _fun60584_ip = 0; ; ) switch(_fun60584_ip) {
 0:
            entity = {};
            yankee = _closure1_slot26;
            romeo = entity;
            tango = copyDataProperties(romeo, yankee);
            var _closure2_slot0 = entity;
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            tango = 17;
            golf = oscar[tango];
            entity = undefined;
            options = report.bind(entity)(golf);
            golf = options.defaults;
            tango = oscar[tango];
            offset = report.bind(entity)(tango);
            verify = offset.pick;
            report = argFoo;
            tango = ['guildFilter', 'roleFilter', 'everyoneFilter'];
            report = verify.bind(offset)(report, tango);
            tango = _closure1_slot26;
            tango = golf.bind(options)(report, tango);
            _closure1_slot26 = tango;
            report = _closure1_slot0;
            tango = 15;
            tango = oscar[tango];
            tango = report.bind(entity)(tango);
            golf = tango.Storage;
            oscar = golf.set;
            report = _closure1_slot20;
            tango = _closure1_slot26;
            tango = oscar.bind(golf)(report, tango);
            golf = function(argFoo, argBar) { // Original name: changesTo
                _fun60585: for(var _fun60585_ip = 0; ; ) switch(_fun60585_ip) {
 0:
                    zulu = argFoo;
                    entity = _closure2_slot0;
                    tango = entity[zulu];
                    entity = _closure1_slot26;
                    entity = entity[zulu];
                    entity = tango !== entity;
                    if(!entity) { _fun60585_ip = 47; continue _fun60585 }
 32:
                    mike = _closure1_slot26;
                    zulu = mike[zulu];
                    mike = argBar;
                    entity = zulu === mike;
 47:
                    return entity;
                }
            };
            tango = _closure1_slot17;
            report = tango.THIS_SERVER;
            tango = 'guildFilter';
            report = golf.bind(entity)(tango, report);
            if(report) { _fun60584_ip = 179; continue _fun60584 }
 167:
            oscar = 'everyoneFilter';
            tango = false;
            report = golf.bind(entity)(oscar, tango);
 179:
            if(report) { _fun60584_ip = 194; continue _fun60584 }
 182:
            oscar = 'roleFilter';
            tango = false;
            report = golf.bind(entity)(oscar, tango);
 194:
            tango = {};
            _closure1_slot23 = tango;
            tango = new Array(0);
            var _closure2_slot1 = tango;
            if(!report) { _fun60584_ip = 230; continue _fun60584 }
 211:
            golf = _closure1_slot21;
            oscar = golf.forEach;
            report = function(argFoo) {
                _fun60586: for(var _fun60586_ip = 0; ; ) switch(_fun60586_ip) {
 0:
                    tango = _closure1_slot34;
                    entity = undefined;
                    mike = argFoo;
                    mike = tango.bind(entity)(mike);
                    tango = null;
                    if(!(tango != mike)) { _fun60586_ip = 55; continue _fun60586 }
 23:
                    report = _closure2_slot1;
                    tango = report.push;
                    tango = tango.bind(report)(mike);
                    tango = _closure1_slot23;
                    zulu = mike.id;
                    mike = true;
                    tango[zulu] = mike;
 55:
                    return entity;
                }
            };
            report = oscar.bind(golf)(report);
 230:
            _closure1_slot21 = tango;
            mike = function(argFoo) { // Original name: resetChannelMentionCount
                zulu = argFoo;
                entity = {};
                _closure1_slot22 = entity;
                mike = zulu.forEach;
                entity = function(argFoo) {
                    _fun60588: for(var _fun60588_ip = 0; ; ) switch(_fun60588_ip) {
 0:
                        mike = argFoo;
                        tango = _closure1_slot22;
                        zulu = mike.getChannelId;
                        zulu = zulu.bind(mike)();
                        tango = tango[zulu];
                        zulu = null;
                        if(!(zulu == tango)) { _fun60588_ip = 50; continue _fun60588 }
 30:
                        report = _closure1_slot22;
                        zulu = mike.getChannelId;
                        tango = zulu.bind(mike)();
                        zulu = 0;
                        report[tango] = zulu;
 50:
                        zulu = _closure1_slot22;
                        entity = mike.getChannelId;
                        mike = entity.bind(mike)();
                        entity = zulu[mike];
                        entity = entity + 1;
                        zulu[mike] = entity;
                        entity = undefined;
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            mike = mike.bind(entity)(tango);
            mike = _closure1_slot21;
            tango = mike.length;
            mike = 0;
            if(!(mike === tango)) { _fun60584_ip = 265; continue _fun60584 }
 259:
            mike = false;
            _closure1_slot27 = mike;
 265:
            return entity;
        }
    };
    var _closure1_slot36 = foxtrot;
    romeo = function() { // Original name: handleConnectionOpen
        entity = new Array(0);
        _closure1_slot21 = entity;
        entity = {};
        _closure1_slot23 = entity;
        entity = false;
        _closure1_slot27 = entity;
        _closure1_slot29 = entity;
        entity = {};
        _closure1_slot22 = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot37 = romeo;
    verify = function() { // Original name: handleRelationshipUpdate
        report = _closure1_slot32;
        tango = {};
        golf = _closure1_slot1;
        oscar = _closure1_slot2;
        entity = 17;
        oscar = oscar[entity];
        entity = undefined;
        verify = golf.bind(entity)(oscar);
        options = verify.filter;
        golf = _closure1_slot21;
        oscar = function(argFoo) {
            zulu = _closure1_slot13;
            mike = zulu.isBlockedOrIgnoredForMessage;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar = options.bind(verify)(golf, oscar);
        tango['deletedMessages'] = oscar;
        tango = report.bind(entity)(tango);
        report = _closure1_slot21;
        tango = report.filter;
        mike = function(argFoo) {
            zulu = _closure1_slot13;
            mike = zulu.isBlockedOrIgnoredForMessage;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = !entity;
            return entity;
        };
        mike = tango.bind(report)(mike);
        _closure1_slot21 = mike;
        return entity;
    };
    offset = function(argFoo) { // Original name: handleDeleteChannel
        entity = argFoo;
        entity = entity.channel;
        var _closure2_slot0 = entity;
        tango = new Array(0);
        var _closure2_slot1 = tango;
        oscar = _closure1_slot1;
        report = _closure1_slot2;
        entity = 17;
        report = report[entity];
        entity = undefined;
        golf = oscar.bind(entity)(report);
        oscar = golf.filter;
        report = _closure1_slot21;
        zulu = function(argFoo) {
            _fun60594: for(var _fun60594_ip = 0; ; ) switch(_fun60594_ip) {
 0:
                tango = argFoo;
                zulu = tango.channel_id;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = zulu !== entity;
                if(entity) { _fun60594_ip = 59; continue _fun60594 }
 27:
                report = _closure1_slot23;
                zulu = tango.id;
                zulu = delete report[zulu];
                zulu = _closure2_slot1;
                mike = zulu.push;
                mike = mike.bind(zulu)(tango);
                entity = false;
 59:
                return entity;
            }
        };
        zulu = oscar.bind(golf)(report, zulu);
        _closure1_slot21 = zulu;
        zulu = _closure1_slot32;
        mike = {};
        mike['deletedMessages'] = tango;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    entity = global;
    kilo = entity.Object;
    options = kilo.defineProperty;
    mike = {};
    backup = true;
    mike['value'] = backup;
    entity = '__esModule';
    entity = options.bind(kilo)(zulu, entity, mike);
    options = 0;
    mike = oscar[options];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
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
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 8;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot11 = mike;
    mike = 9;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot12 = mike;
    mike = 10;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot13 = mike;
    mike = 11;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot14 = mike;
    mike = 12;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot15 = mike;
    mike = 13;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot16 = mike;
    mike = 14;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    result = mike.RecentMentionsFilters;
    var _closure1_slot17 = result;
    kilo = mike.ChannelTypes;
    var _closure1_slot18 = kilo;
    mike = mike.MessageTypesSets;
    var _closure1_slot19 = mike;
    output = 'recentMentionFilterSettings';
    var _closure1_slot20 = output;
    mike = new Array(0);
    var _closure1_slot21 = mike;
    mike = {};
    var _closure1_slot22 = mike;
    mike = {};
    var _closure1_slot23 = mike;
    mike = false;
    var _closure1_slot24 = mike;
    var _closure1_slot25 = backup;
    backup = 15;
    backup = oscar[backup];
    backup = report.bind(entity)(backup);
    sizing = backup.Storage;
    kilo = sizing.get;
    backup = {'guildFilter': null, 'everyoneFilter': true, 'roleFilter': true};
    result = result.ALL_SERVERS;
    backup['guildFilter'] = result;
    backup = kilo.bind(sizing)(output, backup);
    var _closure1_slot26 = backup;
    var _closure1_slot27 = mike;
    var _closure1_slot28 = options;
    var _closure1_slot29 = mike;
    mike = 22;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: RecentMentionsStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot30;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            oscar = this;
            report = oscar.waitFor;
            offset = _closure1_slot16;
            verify = _closure1_slot10;
            options = _closure1_slot11;
            golf = _closure1_slot12;
            yankee = oscar;
            entity = yankee[report](offset, verify, options, golf, oscar);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(13);
        entity[0] = report;
        report = {};
        golf = 'hasLoadedEver';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot27;
            return entity;
        };
        report['get'] = golf;
        entity[1] = report;
        report = {};
        golf = 'lastLoaded';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot28;
            return entity;
        };
        report['get'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getMentions';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun60600: for(var _fun60600_ip = 0; ; ) switch(_fun60600_ip) {
 0:
                entity = _closure1_slot27;
                if(entity) { _fun60600_ip = 30; continue _fun60600 }
 10:
                entity = _closure1_slot21;
                zulu = entity.length;
                entity = 0;
                zulu = zulu > entity;
                entity = null;
                if(!zulu) { _fun60600_ip = 34; continue _fun60600 }
 30:
                entity = _closure1_slot21;
 34:
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'hasMention';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = _closure1_slot23;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'loading';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot24;
            return entity;
        };
        report['get'] = golf;
        entity[5] = report;
        report = {};
        golf = 'hasMore';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot25;
            return entity;
        };
        report['get'] = golf;
        entity[6] = report;
        report = {};
        golf = 'guildFilter';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot26;
            entity = entity.guildFilter;
            return entity;
        };
        report['get'] = golf;
        entity[7] = report;
        report = {};
        golf = 'everyoneFilter';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot26;
            entity = entity.everyoneFilter;
            return entity;
        };
        report['get'] = golf;
        entity[8] = report;
        report = {};
        golf = 'roleFilter';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot26;
            entity = entity.roleFilter;
            return entity;
        };
        report['get'] = golf;
        entity[9] = report;
        report = {};
        golf = 'mentionsAreStale';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot29;
            return entity;
        };
        report['get'] = golf;
        entity[10] = report;
        report = {};
        golf = 'mentionCountByChannel';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot22;
            return entity;
        };
        report['get'] = golf;
        entity[11] = report;
        report = {};
        golf = 'getMentionCountForChannel';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun60609: for(var _fun60609_ip = 0; ; ) switch(_fun60609_ip) {
 0:
                mike = _closure1_slot22;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                zulu = entity != mike;
                entity = 0;
                if(!zulu) { _fun60609_ip = 28; continue _fun60609 }
 25:
                entity = mike;
 28:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[12] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'RecentMentionsStore';
    options['displayName'] = mike;
    mike = 23;
    mike = oscar[mike];
    source = golf.bind(entity)(mike);
    mike = {};
    backup = function(argFoo) { // Original name: handleLoadMentions
        _fun60610: for(var _fun60610_ip = 0; ; ) switch(_fun60610_ip) {
 0:
            entity = argFoo;
            zulu = entity.guildId;
            mike = true;
            _closure1_slot24 = mike;
            mike = null;
            mike = mike == zulu;
            if(!mike) { _fun60610_ip = 50; continue _fun60610 }
 26:
            zulu = _closure1_slot26;
            tango = zulu.guildFilter;
            zulu = _closure1_slot17;
            zulu = zulu.THIS_SERVER;
            mike = tango === zulu;
 50:
            if(!mike) { _fun60610_ip = 81; continue _fun60610 }
 53:
            zulu = _closure1_slot36;
            mike = {};
            entity = _closure1_slot17;
            entity = entity.ALL_SERVERS;
            mike['guildFilter'] = entity;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
 81:
            entity = undefined;
            return entity;
        }
    };
    mike['LOAD_RECENT_MENTIONS'] = backup;
    backup = function(argFoo) { // Original name: handleLoadMentionsSuccess
        _fun60611: for(var _fun60611_ip = 0; ; ) switch(_fun60611_ip) {
 0:
            entity = argFoo;
            mike = entity.hasMoreAfter;
            verify = entity.messages;
            report = entity.isAfter;
            golf = _closure1_slot1;
            entity = _closure1_slot2;
            tango = 17;
            oscar = entity[tango];
            entity = undefined;
            options = golf.bind(entity)(oscar);
            golf = options.map;
            oscar = _closure1_slot33;
            options = golf.bind(options)(verify, oscar);
            golf = _closure1_slot32;
            oscar = {};
            oscar['addedMessages'] = options;
            oscar = golf.bind(entity)(oscar);
            if(report) { _fun60611_ip = 92; continue _fun60611 }
 80:
            _closure1_slot21 = options;
            report = {};
            _closure1_slot23 = report;
            _fun60611_ip = 110; continue _fun60611;
 92:
            oscar = _closure1_slot21;
            report = oscar.concat;
            report = report.bind(oscar)(options);
            _closure1_slot21 = report;
 110:
            oscar = _closure1_slot1;
            report = _closure1_slot2;
            tango = report[tango];
            golf = oscar.bind(entity)(tango);
            oscar = golf.forEach;
            tango = function(argFoo) {
                zulu = _closure1_slot23;
                entity = argFoo;
                mike = entity.id;
                entity = true;
                zulu[mike] = entity;
                entity = undefined;
                return entity;
            };
            tango = oscar.bind(golf)(options, tango);
            tango = false;
            _closure1_slot24 = tango;
            _closure1_slot25 = mike;
            tango = _closure1_slot0;
            mike = 18;
            mike = report[mike];
            tango = tango.bind(entity)(mike);
            mike = tango.now;
            mike = mike.bind(tango)();
            _closure1_slot28 = mike;
            mike = true;
            _closure1_slot27 = mike;
            return entity;
        }
    };
    mike['LOAD_RECENT_MENTIONS_SUCCESS'] = backup;
    backup = function() { // Original name: handleLoadMentionsFailure
        entity = false;
        _closure1_slot24 = entity;
        entity = undefined;
        return entity;
    };
    mike['LOAD_RECENT_MENTIONS_FAILURE'] = backup;
    mike['SET_RECENT_MENTIONS_FILTER'] = foxtrot;
    foxtrot = function() { // Original name: handleClearMentions
        mike = _closure1_slot37;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['CLEAR_MENTIONS'] = foxtrot;
    foxtrot = function(argFoo) { // Original name: handleTruncateMentions
        _fun60615: for(var _fun60615_ip = 0; ; ) switch(_fun60615_ip) {
 0:
            entity = argFoo;
            golf = entity.size;
            tango = _closure1_slot32;
            mike = {};
            report = _closure1_slot21;
            entity = report.slice;
            entity = entity.bind(report)(golf);
            mike['deletedMessages'] = entity;
            entity = undefined;
            mike = tango.bind(entity)(mike);
            mike = _closure1_slot21;
            mike = mike.length;
            tango = golf;
            if(!(tango < mike)) { _fun60615_ip = 96; continue _fun60615 }
 59:
            report = _closure1_slot23;
            mike = _closure1_slot21;
            mike = mike[tango];
            mike = mike.id;
            mike = delete report[mike];
            tango = tango + 1;
            mike = _closure1_slot21;
            mike = mike.length;
            if(tango < mike) { _fun60615_ip = 59; continue _fun60615 }
 96:
            mike = _closure1_slot21;
            tango = mike.length;
            oscar = _closure1_slot21;
            report = oscar.slice;
            mike = 0;
            mike = report.bind(oscar)(mike, golf);
            _closure1_slot21 = mike;
            mike = mike.length;
            if(!(tango > mike)) { _fun60615_ip = 141; continue _fun60615 }
 135:
            mike = true;
            _closure1_slot25 = mike;
 141:
            return entity;
        }
    };
    mike['TRUNCATE_MENTIONS'] = foxtrot;
    foxtrot = function() { // Original name: handleChannelSelect
        _fun60616: for(var _fun60616_ip = 0; ; ) switch(_fun60616_ip) {
 0:
            entity = _closure1_slot26;
            zulu = entity.guildFilter;
            entity = _closure1_slot17;
            entity = entity.THIS_SERVER;
            if(!(zulu === entity)) { _fun60616_ip = 37; continue _fun60616 }
 27:
            entity = false;
            _closure1_slot27 = entity;
            entity = undefined;
            return entity;
 37:
            entity = false;
            return entity;
        }
    };
    mike['CHANNEL_SELECT'] = foxtrot;
    mike['CONNECTION_OPEN'] = romeo;
    romeo = function(argFoo) { // Original name: handleGuildDelete
        entity = argFoo;
        entity = entity.guild;
        var _closure2_slot0 = entity;
        tango = new Array(0);
        var _closure2_slot1 = tango;
        oscar = _closure1_slot1;
        report = _closure1_slot2;
        entity = 17;
        report = report[entity];
        entity = undefined;
        golf = oscar.bind(entity)(report);
        oscar = golf.filter;
        report = _closure1_slot21;
        zulu = function(argFoo) {
            _fun60618: for(var _fun60618_ip = 0; ; ) switch(_fun60618_ip) {
 0:
                tango = argFoo;
                report = _closure1_slot10;
                zulu = report.getChannel;
                entity = tango.channel_id;
                report = zulu.bind(report)(entity);
                entity = null;
                entity = entity != report;
                if(!entity) { _fun60618_ip = 60; continue _fun60618 }
 34:
                zulu = report.getGuildId;
                report = zulu.bind(report)();
                zulu = _closure2_slot0;
                zulu = zulu.id;
                entity = report !== zulu;
 60:
                if(entity) { _fun60618_ip = 95; continue _fun60618 }
 63:
                zulu = _closure1_slot23;
                mike = tango.id;
                mike = delete zulu[mike];
                zulu = _closure2_slot1;
                mike = zulu.push;
                mike = mike.bind(zulu)(tango);
                entity = false;
 95:
                return entity;
            }
        };
        zulu = oscar.bind(golf)(report, zulu);
        _closure1_slot21 = zulu;
        zulu = _closure1_slot32;
        mike = {};
        mike['deletedMessages'] = tango;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    mike['GUILD_DELETE'] = romeo;
    romeo = function(argFoo) { // Original name: handleIncomingMessage
        _fun60619: for(var _fun60619_ip = 0; ; ) switch(_fun60619_ip) {
 0:
            entity = argFoo;
            golf = entity.channelId;
            oscar = entity.message;
            mike = _closure1_slot16;
            entity = mike.getCurrentUser;
            entity = entity.bind(mike)();
            tango = null;
            if(!(tango != entity)) { _fun60619_ip = 187; continue _fun60619 }
 38:
            options = _closure1_slot0;
            report = _closure1_slot2;
            mike = 21;
            report = report[mike];
            mike = undefined;
            verify = options.bind(mike)(report);
            options = verify.isRawMessageMentioned;
            report = {};
            report['rawMessage'] = oscar;
            entity = entity.id;
            report['userId'] = entity;
            entity = false;
            report['suppressRoles'] = entity;
            report['suppressEveryone'] = entity;
            report = options.bind(verify)(report);
            if(!report) { _fun60619_ip = 187; continue _fun60619 }
 102:
            report = _closure1_slot34;
            oscar = report.bind(mike)(oscar, golf);
            if(!(tango != oscar)) { _fun60619_ip = 185; continue _fun60619 }
 116:
            report = _closure1_slot21;
            tango = report.slice;
            report = tango.bind(report)();
            _closure1_slot21 = report;
            tango = report.unshift;
            tango = tango.bind(report)(oscar);
            golf = _closure1_slot23;
            report = oscar.id;
            tango = true;
            golf[report] = tango;
            tango = _closure1_slot32;
            zulu = {};
            report = new Array(1);
            report[0] = oscar;
            zulu['addedMessages'] = report;
            zulu = tango.bind(mike)(zulu);
            return mike;
 185:
            return entity;
 187:
            entity = false;
            return entity;
        }
    };
    mike['MESSAGE_CREATE'] = romeo;
    romeo = function(argFoo) { // Original name: handleMessageUpdate
        _fun60620: for(var _fun60620_ip = 0; ; ) switch(_fun60620_ip) {
 0:
            mike = argFoo;
            entity = mike.message;
            golf = entity.id;
            var _closure2_slot0 = golf;
            oscar = _closure1_slot23;
            entity = global;
            zulu = entity.String;
            entity = undefined;
            zulu = zulu.bind(entity)(golf);
            oscar = oscar[zulu];
            zulu = null;
            if(!(zulu != oscar)) { _fun60620_ip = 164; continue _fun60620 }
 51:
            golf = _closure1_slot1;
            options = _closure1_slot2;
            oscar = 17;
            oscar = options[oscar];
            options = golf.bind(entity)(oscar);
            golf = options.findIndex;
            oscar = _closure1_slot21;
            tango = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            tango = golf.bind(options)(oscar, tango);
            golf = _closure1_slot21;
            oscar = golf.slice;
            oscar = oscar.bind(golf)();
            _closure1_slot21 = oscar;
            golf = oscar[tango];
            if(!(zulu != golf)) { _fun60620_ip = 162; continue _fun60620 }
 117:
            zulu = _closure1_slot21;
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            report = 16;
            report = options[report];
            oscar = oscar.bind(entity)(report);
            report = oscar.updateMessageRecord;
            mike = mike.message;
            mike = report.bind(oscar)(golf, mike);
            zulu[tango] = mike;
 162:
            return entity;
 164:
            entity = false;
            return entity;
        }
    };
    mike['MESSAGE_UPDATE'] = romeo;
    mike['MESSAGE_DELETE'] = yankee;
    mike['RECENT_MENTION_DELETE'] = yankee;
    yankee = function(argFoo) { // Original name: handleMessageDeleteBulk
        entity = argFoo;
        report = entity.ids;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 17;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.forEach;
        mike = _closure1_slot35;
        mike = zulu.bind(tango)(report, mike);
        return entity;
    };
    mike['MESSAGE_DELETE_BULK'] = yankee;
    mike['CHANNEL_DELETE'] = offset;
    mike['THREAD_DELETE'] = offset;
    mike['RELATIONSHIP_ADD'] = verify;
    mike['RELATIONSHIP_REMOVE'] = verify;
    mike['RELATIONSHIP_UPDATE'] = verify;
    tango = function() { // Original name: handleSetRecentMentionsStale
        entity = true;
        _closure1_slot29 = entity;
        entity = undefined;
        return entity;
    };
    mike['SET_RECENT_MENTIONS_STALE'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    control = tango;
    update = mike;
    mike = new control[options](source, update, echo);
    mike = mike instanceof Object ? mike : tango;
    tango = 24;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/recents/RecentMentionsStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();