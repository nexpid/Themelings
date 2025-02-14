// app/modules/channel_list_v2/native/unread_bars/useChannelsUnreadBarsDataFlashList.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: hasMention
        _fun116103: for(var _fun116103_ip = 0; ; ) switch(_fun116103_ip) {
 0:
            entity = argFoo;
            zulu = entity.kind;
            mike = 'channel';
            if(!(mike !== zulu)) { _fun116103_ip = 24; continue _fun116103 }
 16:
            zulu = entity.threadId;
            _fun116103_ip = 34; continue _fun116103;
 24:
            entity = entity.channel;
            zulu = entity.id;
 34:
            mike = _closure1_slot8;
            entity = mike.getMentionCount;
            mike = entity.bind(mike)(zulu);
            entity = 0;
            entity = mike > entity;
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.isGuildVocalChannelType;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.UnreadSetting;
    var _closure1_slot10 = tango;
    tango = {'top': null, 'bottom': null};
    var _closure1_slot11 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/channel_list_v2/native/unread_bars/useChannelsUnreadBarsDataFlashList.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useChannelsUnreadBarsDataFlashList
        entity = argFoo;
        golf = entity.guildId;
        var _closure2_slot0 = golf;
        foxtrot = entity.data;
        var _closure2_slot1 = foxtrot;
        backup = entity.viewableIndices;
        var _closure2_slot2 = backup;
        verify = entity.selectedChannelId;
        var _closure2_slot3 = verify;
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        tango = 8;
        zulu = oscar[tango];
        options = undefined;
        romeo = report.bind(options)(zulu);
        yankee = romeo.useStateFromStores;
        zulu = _closure1_slot9;
        offset = new Array(1);
        offset[0] = zulu;
        zulu = function() {
            zulu = _closure1_slot9;
            mike = zulu.getMutedChannels;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        romeo = yankee.bind(romeo)(offset, zulu);
        var _closure2_slot4 = romeo;
        zulu = 9;
        zulu = oscar[zulu];
        yankee = report.bind(options)(zulu);
        offset = yankee.useShouldUseNewNotificationSystem;
        zulu = 'ChannelsUnreadBarsData';
        zulu = offset.bind(yankee)(zulu);
        var _closure2_slot5 = zulu;
        offset = oscar[tango];
        sizing = report.bind(options)(offset);
        kilo = sizing.useStateFromStores;
        offset = _closure1_slot5;
        yankee = new Array(1);
        yankee[0] = offset;
        offset = function() {
            mike = _closure1_slot5;
            entity = mike.getMutedThreads;
            entity = entity.bind(mike)();
            return entity;
        };
        yankee = kilo.bind(sizing)(yankee, offset);
        var _closure2_slot6 = yankee;
        tango = oscar[tango];
        offset = report.bind(options)(tango);
        oscar = offset.useStateFromStores;
        tango = _closure1_slot8;
        report = new Array(1);
        report[0] = tango;
        tango = function() {
            zulu = _closure1_slot8;
            mike = zulu.getGuildUnreadsSentinel;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        offset = oscar.bind(offset)(report, tango);
        report = _closure1_slot4;
        oscar = report.useRef;
        tango = {};
        tango['guildId'] = golf;
        kilo = false;
        tango['hasComputed'] = kilo;
        tango = oscar.bind(report)(tango);
        var _closure2_slot7 = tango;
        oscar = report.useCallback;
        tango = new Array(8);
        tango[0] = backup;
        tango[1] = foxtrot;
        tango[2] = romeo;
        tango[3] = yankee;
        tango[4] = offset;
        tango[5] = verify;
        tango[6] = zulu;
        tango[7] = golf;
        zulu = function() {
            _fun116108: for(var _fun116108_ip = 0; ; ) switch(_fun116108_ip) {
 0:
                entity = _closure2_slot7;
                zulu = entity.current;
                mike = _closure2_slot0;
                zulu['guildId'] = mike;
                entity = entity.current;
                update = true;
                entity['hasComputed'] = update;
                entity = _closure2_slot2;
                entity = entity.length;
                echo = 0;
                if(!(echo !== entity)) { _fun116108_ip = 890; continue _fun116108 }
 53:
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 10;
                report = tango[mike];
                result = undefined;
                golf = zulu.bind(result)(report);
                oscar = golf.memoize;
                report = function(argFoo) {
                    _fun116109: for(var _fun116109_ip = 0; ; ) switch(_fun116109_ip) {
 0:
                        mike = argFoo;
                        options = _closure2_slot4;
                        report = _closure2_slot6;
                        golf = _closure2_slot5;
                        zulu = mike.kind;
                        entity = 'thread';
                        if(!(entity !== zulu)) { _fun116109_ip = 179; continue _fun116109 }
 34:
                        oscar = _closure1_slot6;
                        entity = mike.channel;
                        entity = entity.type;
                        tango = undefined;
                        entity = oscar.bind(tango)(entity);
                        if(entity) { _fun116109_ip = 168; continue _fun116109 }
 61:
                        oscar = options.has;
                        entity = mike.channel;
                        entity = entity.id;
                        oscar = oscar.bind(options)(entity);
                        entity = false;
                        if(oscar) { _fun116109_ip = 255; continue _fun116109 }
 89:
                        verify = _closure1_slot8;
                        options = verify.hasUnread;
                        oscar = mike.channel;
                        oscar = oscar.id;
                        options = options.bind(verify)(oscar);
                        oscar = options;
                        if(!golf) { _fun116109_ip = 163; continue _fun116109 }
 120:
                        golf = options;
                        if(!options) { _fun116109_ip = 160; continue _fun116109 }
 126:
                        offset = _closure1_slot9;
                        verify = offset.resolveUnreadSetting;
                        options = mike.channel;
                        verify = verify.bind(offset)(options);
                        options = _closure1_slot10;
                        options = options.ALL_MESSAGES;
                        golf = verify === options;
 160:
                        oscar = golf;
 163:
                        entity = oscar;
                        _fun116109_ip = 255; continue _fun116109;
 168:
                        zulu = _closure1_slot12;
                        entity = zulu.bind(tango)(mike);
                        _fun116109_ip = 255; continue _fun116109;
 179:
                        tango = report.has;
                        zulu = mike.threadId;
                        zulu = tango.bind(report)(zulu);
                        entity = false;
                        if(zulu) { _fun116109_ip = 255; continue _fun116109 }
 200:
                        report = _closure1_slot7;
                        zulu = report.getChannel;
                        mike = mike.threadId;
                        zulu = zulu.bind(report)(mike);
                        mike = null;
                        mike = mike != zulu;
                        if(!mike) { _fun116109_ip = 252; continue _fun116109 }
 232:
                        report = _closure1_slot8;
                        tango = report.hasUnread;
                        zulu = zulu.id;
                        mike = tango.bind(report)(zulu);
 252:
                        entity = mike;
 255:
                        return entity;
                    }
                };
                output = oscar.bind(golf)(report);
                mike = tango[mike];
                tango = zulu.bind(result)(mike);
                zulu = tango.memoize;
                mike = _closure1_slot12;
                sizing = zulu.bind(tango)(mike);
                mike = _closure2_slot1;
                mike = mike.length;
                golf = echo < mike;
                oscar = -1;
                foxtrot = true;
                romeo = false;
                yankee = false;
                offset = oscar;
                verify = offset;
                options = 0;
                zulu = true;
                tango = false;
                mike = false;
                kilo = verify;
                backup = kilo;
                if(!golf) { _fun116108_ip = 357; continue _fun116108 }
 173:
                golf = _closure2_slot1;
                status = golf[options];
                target = sizing.bind(result)(status);
                golf = foxtrot;
                if(!foxtrot) { _fun116108_ip = 195; continue _fun116108 }
 192:
                golf = target;
 195:
                if(!golf) { _fun116108_ip = 200; continue _fun116108 }
 198:
                foxtrot = false;
 200:
                vacuum = _closure2_slot2;
                control = vacuum.includes;
                golf = status.index;
                golf = control.bind(vacuum)(golf);
                record = foxtrot;
                config = romeo;
                sequence = yankee;
                vacuum = offset;
                control = verify;
                if(!golf) { _fun116108_ip = 308; continue _fun116108 }
 237:
                context = offset;
                if(!(oscar === offset)) { _fun116108_ip = 249; continue _fun116108 }
 244:
                context = status.index;
 249:
                papa = status.index;
                golf = verify;
                if(!(papa > verify)) { _fun116108_ip = 266; continue _fun116108 }
 261:
                golf = status.index;
 266:
                papa = !romeo;
                if(romeo) { _fun116108_ip = 277; continue _fun116108 }
 272:
                papa = output.bind(result)(status);
 277:
                if(!papa) { _fun116108_ip = 282; continue _fun116108 }
 280:
                romeo = true;
 282:
                papa = !yankee;
                if(yankee) { _fun116108_ip = 291; continue _fun116108 }
 288:
                papa = target;
 291:
                if(!papa) { _fun116108_ip = 296; continue _fun116108 }
 294:
                yankee = true;
 296:
                sequence = yankee;
                config = romeo;
                vacuum = context;
                control = golf;
 308:
                options = options + 1;
                golf = _closure2_slot1;
                golf = golf.length;
                romeo = config;
                yankee = sequence;
                offset = vacuum;
                verify = control;
                foxtrot = record;
                zulu = foxtrot;
                tango = romeo;
                mike = yankee;
                kilo = offset;
                backup = verify;
                if(options < golf) { _fun116108_ip = 173; continue _fun116108 }
 357:
                if(!(oscar !== kilo)) { _fun116108_ip = 884; continue _fun116108 }
 364:
                if(!(oscar !== backup)) { _fun116108_ip = 884; continue _fun116108 }
 371:
                if(!tango) { _fun116108_ip = 386; continue _fun116108 }
 374:
                if(zulu) { _fun116108_ip = 878; continue _fun116108 }
 380:
                if(mike) { _fun116108_ip = 878; continue _fun116108 }
 386:
                mike = _closure2_slot1;
                mike = mike.length;
                control = echo < mike;
                zulu = null;
                foxtrot = 'thread';
                romeo = null;
                yankee = null;
                offset = false;
                golf = false;
                echo = 0;
                tango = undefined;
                mike = undefined;
                verify = null;
                oscar = null;
                options = false;
                report = false;
                if(!control) { _fun116108_ip = 810; continue _fun116108 }
 433:
                control = _closure2_slot1;
                target = control[echo];
                control = target.kind;
                if(!(foxtrot !== control)) { _fun116108_ip = 470; continue _fun116108 }
 450:
                control = target.channel;
                vacuum = control.id;
                control = _closure2_slot3;
                papa = vacuum === control;
                _fun116108_ip = 484; continue _fun116108;
 470:
                vacuum = target.threadId;
                control = _closure2_slot3;
                papa = vacuum === control;
 484:
                config = romeo;
                sequence = yankee;
                vacuum = offset;
                control = golf;
                context = tango;
                record = mike;
                if(papa) { _fun116108_ip = 716; continue _fun116108 }
 508:
                papa = target.index;
                if(!(papa < kilo)) { _fun116108_ip = 528; continue _fun116108 }
 517:
                papa = output.bind(result)(target);
                if(papa) { _fun116108_ip = 651; continue _fun116108 }
 528:
                papa = target.index;
                config = romeo;
                sequence = yankee;
                vacuum = offset;
                control = golf;
                context = tango;
                record = mike;
                if(!(papa > backup)) { _fun116108_ip = 716; continue _fun116108 }
 558:
                papa = output.bind(result)(target);
                config = romeo;
                sequence = yankee;
                vacuum = offset;
                control = golf;
                context = tango;
                record = mike;
                if(!papa) { _fun116108_ip = 716; continue _fun116108 }
 587:
                papa = sizing.bind(result)(target);
                sierra = zulu == yankee;
                if(sierra) { _fun116108_ip = 602; continue _fun116108 }
 599:
                sierra = papa;
 602:
                status = yankee;
                if(!sierra) { _fun116108_ip = 611; continue _fun116108 }
 608:
                status = target;
 611:
                config = romeo;
                sequence = status;
                vacuum = offset;
                control = golf;
                context = tango;
                record = papa;
                if(!record) { _fun116108_ip = 716; continue _fun116108 }
 632:
                config = romeo;
                sequence = status;
                vacuum = offset;
                control = true;
                context = tango;
                record = papa;
                _fun116108_ip = 716; continue _fun116108;
 651:
                papa = sizing.bind(result)(target);
                status = zulu != romeo;
                if(!status) { _fun116108_ip = 666; continue _fun116108 }
 663:
                status = !papa;
 666:
                if(!status) { _fun116108_ip = 672; continue _fun116108 }
 669:
                status = offset;
 672:
                if(status) { _fun116108_ip = 678; continue _fun116108 }
 675:
                romeo = target;
 678:
                config = romeo;
                sequence = yankee;
                vacuum = offset;
                control = golf;
                context = papa;
                record = mike;
                if(!papa) { _fun116108_ip = 716; continue _fun116108 }
 699:
                config = romeo;
                sequence = yankee;
                vacuum = true;
                control = golf;
                context = papa;
                record = mike;
 716:
                papa = echo + 1;
                target = _closure2_slot1;
                target = target.length;
                verify = config;
                oscar = sequence;
                options = vacuum;
                report = control;
                if(!(papa < target)) { _fun116108_ip = 810; continue _fun116108 }
 744:
                romeo = config;
                yankee = sequence;
                offset = vacuum;
                golf = control;
                echo = papa;
                tango = context;
                mike = record;
                if(!vacuum) { _fun116108_ip = 433; continue _fun116108 }
 771:
                romeo = config;
                yankee = sequence;
                offset = vacuum;
                golf = control;
                echo = papa;
                tango = context;
                mike = record;
                verify = romeo;
                oscar = yankee;
                options = offset;
                report = golf;
                if(!report) { _fun116108_ip = 433; continue _fun116108 }
 810:
                mike = {};
                golf = zulu != verify;
                tango = null;
                if(!golf) { _fun116108_ip = 840; continue _fun116108 }
 821:
                golf = {};
                verify = verify.index;
                golf['index'] = verify;
                golf['isMention'] = options;
                tango = golf;
 840:
                mike['top'] = tango;
                tango = zulu != oscar;
                zulu = null;
                if(!tango) { _fun116108_ip = 872; continue _fun116108 }
 853:
                tango = {};
                oscar = oscar.index;
                tango['index'] = oscar;
                tango['isMention'] = report;
                zulu = tango;
 872:
                mike['bottom'] = zulu;
                return mike;
 878:
                mike = _closure1_slot11;
                return mike;
 884:
                entity = _closure1_slot11;
                return entity;
 890:
                entity = {'top': null, 'bottom': null};
                return entity;
            }
        };
        zulu = oscar.bind(report)(zulu, tango);
        var _closure2_slot8 = zulu;
        oscar = report.useState;
        tango = function() {
            mike = _closure2_slot8;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        };
        oscar = oscar.bind(report)(tango);
        tango = _closure1_slot3;
        entity = 2;
        oscar = tango.bind(options)(oscar, entity);
        entity = 0;
        entity = oscar[entity];
        tango = 1;
        tango = oscar[tango];
        var _closure2_slot9 = tango;
        oscar = report.useCallback;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = function() {
            zulu = _closure2_slot9;
            mike = _closure2_slot8;
            entity = undefined;
            mike = mike.bind(entity)();
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        oscar = oscar.bind(report)(zulu, tango);
        var _closure2_slot10 = oscar;
        tango = report.useEffect;
        zulu = new Array(2);
        zulu[0] = golf;
        zulu[1] = oscar;
        mike = function() {
            _fun116112: for(var _fun116112_ip = 0; ; ) switch(_fun116112_ip) {
 0:
                tango = _closure2_slot0;
                zulu = _closure2_slot7;
                zulu = zulu.current;
                zulu = zulu.guildId;
                if(!(tango !== zulu)) { _fun116112_ip = 54; continue _fun116112 }
 27:
                tango = _closure2_slot7;
                zulu = {};
                report = _closure2_slot0;
                zulu['guildId'] = report;
                report = false;
                zulu['hasComputed'] = report;
                tango['current'] = zulu;
 54:
                zulu = _closure2_slot7;
                zulu = zulu.current;
                zulu = zulu.hasComputed;
                if(zulu) { _fun116112_ip = 84; continue _fun116112 }
 72:
                zulu = _closure2_slot10;
                mike = undefined;
                zulu = zulu.bind(mike)();
                return mike;
 84:
                mike = global;
                report = mike.setTimeout;
                tango = undefined;
                zulu = function() {
                    mike = _closure2_slot10;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    return entity;
                };
                mike = 50;
                mike = report.bind(tango)(zulu, mike);
                var _closure3_slot0 = mike;
                entity = function() {
                    entity = global;
                    zulu = entity.clearTimeout;
                    mike = _closure3_slot0;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['useChannelsUnreadBarsDataFlashList'] = mike;
    return entity;
})();