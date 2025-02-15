// app/modules/main_tabs_v2/native/tabs/gravity/useGravityItems.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: createItem
        _fun117378: for(var _fun117378_ip = 0; ; ) switch(_fun117378_ip) {
 0:
            tango = argFoo;
            golf = argBar;
            zulu = argBaz;
            report = golf.type;
            verify = _closure1_slot0;
            mike = _closure1_slot2;
            options = 2;
            mike = mike[options];
            oscar = undefined;
            mike = verify.bind(oscar)(mike);
            mike = mike.GravityItemTypes;
            mike = mike.SUMMARY;
            if(!(report !== mike)) { _fun117378_ip = 907; continue _fun117378 }
 58:
            report = golf.type;
            verify = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[options];
            mike = verify.bind(oscar)(mike);
            mike = mike.GravityItemTypes;
            mike = mike.MESSAGE;
            if(!(report !== mike)) { _fun117378_ip = 578; continue _fun117378 }
 99:
            report = golf.type;
            verify = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[options];
            mike = verify.bind(oscar)(mike);
            mike = mike.GravityItemTypes;
            mike = mike.ACTIVITY;
            if(!(report !== mike)) { _fun117378_ip = 467; continue _fun117378 }
 140:
            report = golf.type;
            verify = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[options];
            mike = verify.bind(oscar)(mike);
            mike = mike.GravityItemTypes;
            mike = mike.CUSTOM_STATUS;
            if(!(report !== mike)) { _fun117378_ip = 467; continue _fun117378 }
 181:
            report = golf.type;
            verify = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[options];
            mike = verify.bind(oscar)(mike);
            mike = mike.GravityItemTypes;
            mike = mike.GUILD_EVENT;
            if(!(report !== mike)) { _fun117378_ip = 360; continue _fun117378 }
 222:
            report = golf.type;
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[options];
            entity = mike.bind(oscar)(entity);
            entity = entity.GravityItemTypes;
            mike = entity.RECOMMENDED_GUILDS;
            entity = null;
            if(!(report === mike)) { _fun117378_ip = 358; continue _fun117378 }
 262:
            mike = {};
            report = tango.id;
            mike['id'] = report;
            report = global;
            options = report.Date;
            oscar = options.now;
            oscar = oscar.bind(options)();
            mike['timestamp'] = oscar;
            oscar = {};
            options = 'recommendedGuilds';
            oscar['kind'] = options;
            mike['data'] = oscar;
            oscar = tango.score;
            mike['score'] = oscar;
            options = report.JSON;
            oscar = options.stringify;
            report = tango.score_components;
            report = oscar.bind(options)(report);
            mike['debugScore'] = report;
            mike['unread'] = zulu;
            entity = mike;
 358:
            _fun117378_ip = 465; continue _fun117378;
 360:
            mike = {};
            report = tango.id;
            mike['id'] = report;
            report = global;
            options = report.Date;
            oscar = options.now;
            oscar = oscar.bind(options)();
            mike['timestamp'] = oscar;
            oscar = {};
            options = 'guildEvent';
            oscar['kind'] = options;
            options = golf.event_id;
            oscar['eventId'] = options;
            mike['data'] = oscar;
            oscar = tango.score;
            mike['score'] = oscar;
            options = report.JSON;
            oscar = options.stringify;
            report = tango.score_components;
            report = oscar.bind(options)(report);
            mike['debugScore'] = report;
            mike['unread'] = zulu;
            entity = mike;
 465:
            _fun117378_ip = 573; continue _fun117378;
 467:
            mike = {};
            report = tango.id;
            mike['id'] = report;
            report = global;
            options = report.Date;
            oscar = options.now;
            oscar = oscar.bind(options)();
            mike['timestamp'] = oscar;
            oscar = {};
            options = 'contentInventory';
            oscar['kind'] = options;
            options = golf.activity;
            oscar['content'] = options;
            mike['data'] = oscar;
            oscar = tango.score;
            mike['score'] = oscar;
            options = report.JSON;
            oscar = options.stringify;
            report = tango.score_components;
            report = oscar.bind(options)(report);
            mike['debugScore'] = report;
            mike['unread'] = zulu;
            entity = mike;
 573:
            _fun117378_ip = 905; continue _fun117378;
 578:
            mike = golf.message;
            report = mike.id;
            mike = golf.message;
            mike = mike.channel_id;
            if(!(report === mike)) { _fun117378_ip = 617; continue _fun117378 }
 602:
            report = golf.threadChannel;
            mike = null;
            if(!(mike == report)) { _fun117378_ip = 770; continue _fun117378 }
 617:
            mike = {};
            report = tango.id;
            mike['id'] = report;
            report = global;
            options = report.Date;
            oscar = options.now;
            oscar = oscar.bind(options)();
            mike['timestamp'] = oscar;
            oscar = tango.data;
            oscar = oscar.channel_type;
            mike['channelType'] = oscar;
            oscar = {};
            options = 'message';
            oscar['kind'] = options;
            options = golf.message;
            oscar['message'] = options;
            options = tango.data;
            options = options.has_mention;
            oscar['mentioned'] = options;
            options = tango.data;
            options = options.message_context;
            oscar['messageContext'] = options;
            mike['data'] = oscar;
            oscar = tango.score;
            mike['score'] = oscar;
            options = report.JSON;
            oscar = options.stringify;
            report = tango.score_components;
            report = oscar.bind(options)(report);
            mike['debugScore'] = report;
            mike['unread'] = zulu;
            _fun117378_ip = 902; continue _fun117378;
 770:
            report = {};
            oscar = tango.id;
            report['id'] = oscar;
            oscar = global;
            verify = oscar.Date;
            options = verify.now;
            options = options.bind(verify)();
            report['timestamp'] = options;
            options = tango.data;
            options = options.channel_type;
            report['channelType'] = options;
            options = {};
            verify = 'forumThread';
            options['kind'] = verify;
            verify = golf.message;
            options['message'] = verify;
            verify = golf.threadChannel;
            options['threadChannel'] = verify;
            report['data'] = options;
            options = tango.score;
            report['score'] = options;
            verify = oscar.JSON;
            options = verify.stringify;
            oscar = tango.score_components;
            oscar = options.bind(verify)(oscar);
            report['debugScore'] = oscar;
            report['unread'] = zulu;
            mike = report;
 902:
            entity = mike;
 905:
            _fun117378_ip = 1014; continue _fun117378;
 907:
            mike = {};
            report = tango.id;
            mike['id'] = report;
            report = global;
            options = report.Date;
            oscar = options.now;
            oscar = oscar.bind(options)();
            mike['timestamp'] = oscar;
            oscar = {};
            options = 'channelSummary';
            oscar['kind'] = options;
            golf = golf.summary;
            oscar['topic'] = golf;
            mike['data'] = oscar;
            oscar = tango.score;
            mike['score'] = oscar;
            oscar = report.JSON;
            report = oscar.stringify;
            tango = tango.score_components;
            tango = report.bind(oscar)(tango);
            mike['debugScore'] = tango;
            mike['unread'] = zulu;
            entity = mike;
 1014:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/tabs/gravity/useGravityItems.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useGravityItems
        _fun117379: for(var _fun117379_ip = 0; ; ) switch(_fun117379_ip) {
 0:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            report = 3;
            mike = golf[report];
            output = undefined;
            verify = oscar.bind(output)(mike);
            options = verify.useStateFromStores;
            tango = _closure1_slot4;
            zulu = new Array(1);
            zulu[0] = tango;
            mike = function() {
                mike = _closure1_slot4;
                entity = mike.getUnreadDisplayItems;
                entity = entity.bind(mike)();
                return entity;
            };
            mike = options.bind(verify)(zulu, mike);
            zulu = golf[report];
            offset = oscar.bind(output)(zulu);
            verify = offset.useStateFromStores;
            options = new Array(1);
            options[0] = tango;
            zulu = function() {
                mike = _closure1_slot4;
                entity = mike.getReadDisplayItems;
                entity = entity.bind(mike)();
                return entity;
            };
            sizing = verify.bind(offset)(options, zulu);
            var _closure2_slot0 = sizing;
            zulu = golf[report];
            offset = oscar.bind(output)(zulu);
            verify = offset.useStateFromStores;
            options = new Array(1);
            options[0] = tango;
            zulu = function() {
                mike = _closure1_slot4;
                entity = mike.getNextIndexToHydrate;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu = verify.bind(offset)(options, zulu);
            options = golf[report];
            yankee = oscar.bind(output)(options);
            offset = yankee.useStateFromStoresObject;
            verify = new Array(1);
            verify[0] = tango;
            options = function() {
                mike = _closure1_slot4;
                entity = mike.getHydratedItems;
                entity = entity.bind(mike)();
                return entity;
            };
            kilo = offset.bind(yankee)(verify, options);
            report = golf[report];
            golf = oscar.bind(output)(report);
            oscar = golf.useStateFromStores;
            report = new Array(1);
            report[0] = tango;
            tango = function() {
                mike = _closure1_slot4;
                entity = mike.getMissingItems;
                entity = entity.bind(mike)();
                return entity;
            };
            backup = oscar.bind(golf)(report, tango);
            oscar = _closure1_slot3;
            report = oscar.useEffect;
            tango = new Array(1);
            tango[0] = sizing;
            entity = function() {
                entity = global;
                zulu = entity.Date;
                entity = zulu.now;
                zulu = entity.bind(zulu)();
                golf = _closure2_slot0;
                entity = golf.length;
                entity = zulu + entity;
                var _closure3_slot0 = entity;
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 4;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.ackGravityItems;
                oscar = golf.map;
                report = function(argFoo) {
                    entity = {};
                    mike = argFoo;
                    mike = mike.id;
                    entity['id'] = mike;
                    mike = _closure3_slot0;
                    mike = parseFloat(mike);
                    zulu = mike - 1;
                    _closure3_slot0 = zulu;
                    entity['timestamp'] = mike;
                    return entity;
                };
                mike = true;
                mike = oscar.bind(golf)(report, mike);
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = report.bind(oscar)(entity, tango);
            report = new Array(0);
            tango = new Array(0);
            entity = mike.length;
            foxtrot = 0;
            entity = foxtrot < entity;
            update = true;
            romeo = null;
            yankee = 2;
            echo = 0;
            verify = 0;
            options = undefined;
            golf = undefined;
            oscar = undefined;
            offset = 0;
            if(!entity) { _fun117379_ip = 505; continue _fun117379 }
 276:
            offset = echo;
            if(!(!(offset >= zulu))) { _fun117379_ip = 505; continue _fun117379 }
 286:
            config = mike[verify];
            source = echo + 1;
            entity = config.id;
            entity = backup[entity];
            vacuum = options;
            control = oscar;
            if(entity) { _fun117379_ip = 478; continue _fun117379 }
 314:
            entity = config.id;
            sequence = kilo[entity];
            entity = romeo == sequence;
            if(!entity) { _fun117379_ip = 368; continue _fun117379 }
 330:
            context = config.type;
            papa = _closure1_slot0;
            record = _closure1_slot2;
            record = record[yankee];
            record = papa.bind(output)(record);
            record = record.GravityItemTypes;
            record = record.MESSAGE;
            entity = context === record;
 368:
            if(!entity) { _fun117379_ip = 404; continue _fun117379 }
 371:
            record = config.data;
            record = record.message_context;
            papa = romeo == record;
            context = undefined;
            if(papa) { _fun117379_ip = 397; continue _fun117379 }
 391:
            context = record.reference_message_id;
 397:
            entity = romeo != context;
            options = record;
 404:
            if(!entity) { _fun117379_ip = 422; continue _fun117379 }
 407:
            entity = config.data;
            entity = entity.message_id;
            sequence = kilo[entity];
 422:
            vacuum = options;
            control = oscar;
            golf = sequence;
            if(!(romeo != golf)) { _fun117379_ip = 478; continue _fun117379 }
 435:
            entity = _closure1_slot5;
            entity = entity.bind(output)(config, sequence, update);
            vacuum = options;
            golf = sequence;
            control = entity;
            if(!(romeo != control)) { _fun117379_ip = 478; continue _fun117379 }
 459:
            config = report.push;
            config = config.bind(report)(entity);
            vacuum = options;
            golf = sequence;
            control = entity;
 478:
            verify = verify + 1;
            entity = mike.length;
            options = vacuum;
            oscar = control;
            echo = source;
            offset = echo;
            if(verify < entity) { _fun117379_ip = 276; continue _fun117379 }
 505:
            entity = sizing.length;
            entity = foxtrot < entity;
            verify = false;
            foxtrot = 0;
            options = undefined;
            golf = undefined;
            oscar = undefined;
            if(!entity) { _fun117379_ip = 750; continue _fun117379 }
 530:
            if(!(!(offset >= zulu))) { _fun117379_ip = 750; continue _fun117379 }
 537:
            control = sizing[foxtrot];
            offset = offset + 1;
            entity = control.id;
            entity = backup[entity];
            update = options;
            echo = oscar;
            if(entity) { _fun117379_ip = 729; continue _fun117379 }
 565:
            entity = control.id;
            source = kilo[entity];
            entity = romeo == source;
            if(!entity) { _fun117379_ip = 619; continue _fun117379 }
 581:
            sequence = control.type;
            config = _closure1_slot0;
            vacuum = _closure1_slot2;
            vacuum = vacuum[yankee];
            vacuum = config.bind(output)(vacuum);
            vacuum = vacuum.GravityItemTypes;
            vacuum = vacuum.MESSAGE;
            entity = sequence === vacuum;
 619:
            if(!entity) { _fun117379_ip = 655; continue _fun117379 }
 622:
            vacuum = control.data;
            vacuum = vacuum.message_context;
            config = romeo == vacuum;
            sequence = undefined;
            if(config) { _fun117379_ip = 648; continue _fun117379 }
 642:
            sequence = vacuum.reference_message_id;
 648:
            entity = romeo != sequence;
            options = vacuum;
 655:
            if(!entity) { _fun117379_ip = 673; continue _fun117379 }
 658:
            entity = control.data;
            entity = entity.message_id;
            source = kilo[entity];
 673:
            update = options;
            echo = oscar;
            golf = source;
            if(!(romeo != golf)) { _fun117379_ip = 729; continue _fun117379 }
 686:
            entity = _closure1_slot5;
            entity = entity.bind(output)(control, source, verify);
            update = options;
            golf = source;
            echo = entity;
            if(!(romeo != echo)) { _fun117379_ip = 729; continue _fun117379 }
 710:
            control = tango.push;
            control = control.bind(tango)(entity);
            update = options;
            golf = source;
            echo = entity;
 729:
            foxtrot = foxtrot + 1;
            entity = sizing.length;
            options = update;
            oscar = echo;
            if(foxtrot < entity) { _fun117379_ip = 530; continue _fun117379 }
 750:
            entity = {};
            entity['unreadItems'] = report;
            entity['readItems'] = tango;
            mike = mike.length;
            mike = zulu >= mike;
            entity['allUnreadItemsHydrated'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();