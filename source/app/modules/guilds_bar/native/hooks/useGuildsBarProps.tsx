// app/modules/guilds_bar/native/hooks/useGuildsBarProps.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
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
            verify = _closure1_slot21;
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
            golf = _closure1_slot21;
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
    var _closure1_slot20 = entity;
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
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: findGuildSectionIndex
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            sizing = argFoo;
            mike = _closure1_slot20;
            zulu = _closure1_slot12;
            entity = zulu.getFastListGuildFolders;
            entity = entity.bind(zulu)();
            kilo = undefined;
            backup = mike.bind(kilo)(entity);
            report = backup.bind(kilo)();
            entity = report.done;
            offset = -1;
            verify = false;
            yankee = report;
            options = undefined;
            golf = undefined;
            oscar = undefined;
            report = offset;
            zulu = 0;
            mike = false;
            if(entity) { _fun00008_ip = 344; continue _fun00007 }
 70:
            sequence = yankee.value;
            echo = offset + 1;
            output = sequence.type;
            entity = _closure1_slot13;
            entity = entity.GUILD;
            if(!(output === entity)) { _fun00008_ip = 116; continue _fun00007 }
 97:
            entity = sequence.id;
            report = echo;
            zulu = 0;
            mike = true;
            if(!(entity !== sizing)) { _fun00008_ip = 344; continue _fun00007 }
 116:
            source = sequence.type;
            entity = _closure1_slot13;
            entity = entity.FOLDER;
            result = 0;
            output = verify;
            update = oscar;
            if(!(source === entity)) { _fun00008_ip = 296; continue _fun00007 }
 146:
            source = _closure1_slot20;
            entity = sequence.children;
            source = source.bind(kilo)(entity);
            control = source.bind(kilo)();
            entity = control.done;
            context = 0;
            record = control;
            result = 0;
            output = verify;
            options = record;
            golf = source;
            update = oscar;
            if(entity) { _fun00008_ip = 296; continue _fun00007 }
 191:
            entity = record.value;
            papa = entity.type;
            control = _closure1_slot13;
            config = control.GUILD;
            vacuum = context;
            control = record;
            target = vacuum;
            if(!(papa === config)) { _fun00008_ip = 236; continue _fun00007 }
 224:
            config = entity.id;
            if(!(config !== sizing)) { _fun00008_ip = 271; continue _fun00007 }
 233:
            target = vacuum + 1;
 236:
            papa = source.bind(kilo)();
            config = papa.done;
            context = target;
            record = papa;
            result = context;
            output = verify;
            options = record;
            golf = source;
            update = entity;
            if(config) { _fun00008_ip = 296; continue _fun00007 }
 269:
            _fun00008_ip = 191; continue _fun00007;
 271:
            sequence = sequence.expanded;
            if(sequence) { _fun00008_ip = 282; continue _fun00007 }
 280:
            vacuum = 0;
 282:
            result = vacuum;
            output = true;
            options = control;
            golf = source;
            update = entity;
 296:
            report = echo;
            zulu = result;
            mike = output;
            if(mike) { _fun00008_ip = 344; continue _fun00007 }
 308:
            source = backup.bind(kilo)();
            entity = source.done;
            yankee = source;
            offset = echo;
            verify = output;
            oscar = update;
            report = offset;
            zulu = result;
            mike = verify;
            if(!entity) { _fun00008_ip = 70; continue _fun00007 }
 344:
            entity = null;
            if(!mike) { _fun00008_ip = 376; continue _fun00007 }
 349:
            mike = {};
            tango = _closure1_slot15;
            tango = tango.GUILDS;
            tango = report + tango;
            mike['section'] = tango;
            mike['item'] = zulu;
            entity = mike;
 376:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: isAnchorIdEqual
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            oscar = argBaz;
            entity = null;
            entity = entity != oscar;
            if(!entity) { _fun00010_ip = 50; continue _fun00009 }
 12:
            mike = global;
            mike = mike.HermesInternal;
            report = mike.concat;
            tango = '';
            zulu = argFoo;
            mike = ':';
            zulu = report.bind(tango)(zulu, mike, oscar);
            mike = argBar;
            entity = mike === zulu;
 50:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
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
    options = 2;
    tango = oscar[options];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 9;
    verify = oscar[tango];
    verify = golf.bind(entity)(verify);
    var _closure1_slot12 = verify;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildsNodeType;
    var _closure1_slot13 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot14 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.FastListRenderSections;
    var _closure1_slot15 = golf;
    golf = tango.GUILD_ITEM_SIZE;
    tango = tango.GUILD_ITEM_MARGIN;
    var _closure1_slot16 = tango;
    verify = 12;
    verify = oscar[verify];
    verify = report.bind(entity)(verify);
    verify = verify.jsx;
    var _closure1_slot17 = verify;
    verify = {};
    offset = 'section-messages';
    verify['MESSAGES'] = offset;
    offset = 'section-favorites';
    verify['FAVORITES'] = offset;
    offset = 'section-pending-join-requests';
    verify['PENDING_JOIN_REQUESTS'] = offset;
    offset = 'section-lurking-guilds';
    verify['LURKING_GUILDS'] = offset;
    offset = 'section-guest-guilds';
    verify['GUEST_GUILDS'] = offset;
    offset = 'section-private-channels';
    verify['UNREAD_PRIVATE_CHANNELS'] = offset;
    offset = 'section-separator';
    verify['SEPARATOR'] = offset;
    offset = 'section-guilds';
    verify['GUILDS'] = offset;
    var _closure1_slot18 = verify;
    tango = options * tango;
    tango = golf + tango;
    var _closure1_slot19 = tango;
    tango = 40;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guilds_bar/native/hooks/useGuildsBarProps.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useGuildsBarProps
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 29;
            zulu = golf[zulu];
            options = undefined;
            zulu = oscar.bind(options)(zulu);
            zulu = zulu.bind(options)();
            vacuum = zulu.top;
            var _closure2_slot1 = vacuum;
            zulu = zulu.bottom;
            var _closure2_slot2 = zulu;
            verify = _closure1_slot0;
            report = 30;
            report = golf[report];
            offset = verify.bind(options)(report);
            report = offset.useMobileQuestDockHeight;
            control = report.bind(offset)();
            var _closure2_slot3 = control;
            romeo = _closure1_slot3;
            yankee = romeo.useEffect;
            offset = new Array(2);
            offset[0] = control;
            offset[1] = vacuum;
            report = function() {
                mike = _closure1_slot14;
                entity = mike.getState;
                entity = entity.bind(mike)();
                zulu = entity.listInsets;
                mike = zulu.set;
                entity = {};
                report = _closure2_slot1;
                entity['start'] = report;
                tango = _closure2_slot3;
                entity['end'] = tango;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            report = yankee.bind(romeo)(report, offset);
            report = 31;
            report = golf[report];
            report = verify.bind(options)(report);
            yankee = report.IOSInAppEducationExperiment;
            offset = yankee.useExperiment;
            verify = {};
            report = 'Mobile GuildList';
            verify['location'] = report;
            report = {};
            romeo = true;
            report['autoTrackExposure'] = romeo;
            report = offset.bind(yankee)(verify, report);
            verify = report.enabled;
            var _closure2_slot4 = verify;
            report = 32;
            report = golf[report];
            report = oscar.bind(options)(report);
            report = report.bind(options)();
            result = 0;
            if(!report) { _fun00012_ip = 204; continue _fun00011 }
 201:
            result = 1;
 204:
            var _closure2_slot5 = result;
            romeo = _closure1_slot0;
            update = _closure1_slot2;
            report = 33;
            oscar = update[report];
            foxtrot = romeo.bind(options)(oscar);
            yankee = foxtrot.useStateFromStoresArray;
            oscar = _closure1_slot10;
            offset = new Array(3);
            offset[0] = oscar;
            oscar = _closure1_slot5;
            offset[1] = oscar;
            oscar = _closure1_slot6;
            offset[2] = oscar;
            golf = function() {
                mike = _closure1_slot10;
                entity = mike.getUnreadPrivateChannelIds;
                tango = entity.bind(mike)();
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 34;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.filterOutMessageRequestsAndSpamById;
                oscar = _closure1_slot5;
                entity = new Array(2);
                entity[0] = oscar;
                report = _closure1_slot6;
                entity[1] = report;
                entity = mike.bind(zulu)(tango, entity);
                return entity;
            };
            oscar = new Array(0);
            backup = yankee.bind(foxtrot)(offset, golf, oscar);
            var _closure2_slot6 = backup;
            oscar = update[report];
            foxtrot = romeo.bind(options)(oscar);
            yankee = foxtrot.useStateFromStoresObject;
            oscar = _closure1_slot9;
            offset = new Array(1);
            offset[0] = oscar;
            golf = function() {
                entity = {};
                zulu = _closure1_slot9;
                mike = zulu.getGeoRestrictedGuilds;
                mike = mike.bind(zulu)();
                entity['geoRestrictedGuilds'] = mike;
                mike = zulu.isLoaded;
                mike = mike.bind(zulu)();
                entity['isGuildsLoaded'] = mike;
                return entity;
            };
            golf = yankee.bind(foxtrot)(offset, golf);
            yankee = golf.isGuildsLoaded;
            var _closure2_slot7 = yankee;
            foxtrot = golf.geoRestrictedGuilds;
            var _closure2_slot8 = foxtrot;
            golf = update[report];
            sizing = romeo.bind(options)(golf);
            kilo = sizing.useStateFromStores;
            golf = _closure1_slot4;
            offset = new Array(1);
            offset[0] = golf;
            golf = function() {
                mike = _closure1_slot4;
                entity = mike.lurkingGuildIds;
                entity = entity.bind(mike)();
                return entity;
            };
            sizing = kilo.bind(sizing)(offset, golf);
            var _closure2_slot9 = sizing;
            golf = update[report];
            kilo = romeo.bind(options)(golf);
            offset = kilo.useStateFromStoresArray;
            golf = new Array(2);
            golf[0] = oscar;
            oscar = _closure1_slot8;
            golf[1] = oscar;
            oscar = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = new Array(0);
                    options = _closure1_slot9;
                    mike = options.getGuilds;
                    oscar = mike.bind(options)();
                    for(mike in oscar)
 29:
                    {
 38:
                        verify = mike;
                        offset = _closure1_slot8;
                        options = offset.isCurrentUserGuest;
                        options = options.bind(offset)(verify);
                        if(!options) { _fun00014_ip = 29; continue _fun00013 }
 59:
                        options = entity.push;
                        options = options.bind(entity)(verify);
                        _fun00014_ip = 29; continue _fun00013;
                    }
 71:
                    return entity;
                }
            };
            kilo = offset.bind(kilo)(golf, oscar);
            var _closure2_slot10 = kilo;
            oscar = update[report];
            sequence = romeo.bind(options)(oscar);
            source = sequence.useStateFromStores;
            oscar = _closure1_slot12;
            output = new Array(1);
            output[0] = oscar;
            echo = _closure1_slot1;
            oscar = 35;
            oscar = update[oscar];
            config = echo.bind(options)(oscar);
            context = function() {
                entity = {};
                tango = _closure1_slot12;
                zulu = tango.getFastListGuildFolders;
                zulu = zulu.bind(tango)();
                entity['guildsNFolders'] = zulu;
                zulu = _closure1_slot12;
                mike = zulu.getGuildsTree;
                mike = mike.bind(zulu)();
                mike = mike.version;
                entity['version'] = mike;
                return entity;
            };
            record = new Array(0);
            target = sequence;
            papa = output;
            oscar = target[source](papa, context, record, config, sequence);
            offset = oscar.guildsNFolders;
            var _closure2_slot11 = offset;
            golf = oscar.version;
            oscar = 36;
            oscar = update[oscar];
            oscar = echo.bind(options)(oscar);
            output = oscar.bind(options)();
            oscar = output.expanded;
            var _closure2_slot12 = oscar;
            output = output.pendingFolderNode;
            var _closure2_slot13 = output;
            report = update[report];
            sequence = romeo.bind(options)(report);
            source = sequence.useStateFromStores;
            report = _closure1_slot7;
            romeo = new Array(1);
            romeo[0] = report;
            report = function() {
                entity = _closure1_slot7;
                entity = entity.totalUnavailableGuilds;
                return entity;
            };
            romeo = source.bind(sequence)(romeo, report);
            var _closure2_slot14 = romeo;
            report = _closure1_slot3;
            source = report.useMemo;
            tango = new Array(3);
            tango[0] = vacuum;
            tango[1] = control;
            tango[2] = zulu;
            zulu = function() {
                entity = {};
                zulu = {};
                report = _closure1_slot16;
                oscar = 3;
                tango = oscar * report;
                zulu['top'] = tango;
                golf = _closure2_slot2;
                oscar = oscar * report;
                oscar = golf + oscar;
                zulu['bottom'] = oscar;
                entity['scrollIndicatorInsets'] = zulu;
                golf = _closure2_slot1;
                zulu = 2;
                oscar = zulu * report;
                oscar = golf + oscar;
                entity['insetStart'] = oscar;
                tango = _closure2_slot3;
                zulu = zulu * report;
                zulu = tango + zulu;
                entity['insetEnd'] = zulu;
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 37;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.getWindowDimensions;
                mike = mike.bind(zulu)();
                mike = mike.height;
                entity['chunkBase'] = mike;
                return entity;
            };
            zulu = source.bind(report)(zulu, tango);
            var _closure2_slot15 = zulu;
            source = report.useCallback;
            control = zulu.insetStart;
            tango = new Array(3);
            tango[0] = control;
            control = zulu.insetEnd;
            tango[1] = control;
            tango[2] = mike;
            mike = function(argFoo, argBar) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tango = argFoo;
                    mike = null;
                    if(!(mike == tango)) { _fun00016_ip = 47; continue _fun00015 }
 9:
                    entity = _closure2_slot0;
                    oscar = entity.current;
                    if(!(mike != oscar)) { _fun00016_ip = 155; continue _fun00015 }
 28:
                    report = oscar.scrollTo;
                    zulu = 0;
                    entity = argBar;
                    entity = report.bind(oscar)(zulu, entity);
                    _fun00016_ip = 155; continue _fun00015;
 47:
                    zulu = _closure1_slot22;
                    entity = undefined;
                    oscar = zulu.bind(entity)(tango);
                    if(!(mike != oscar)) { _fun00016_ip = 159; continue _fun00015 }
 65:
                    zulu = _closure2_slot0;
                    tango = zulu.current;
                    if(!(mike != tango)) { _fun00016_ip = 155; continue _fun00015 }
 81:
                    zulu = tango.scrollToLocation;
                    mike = {};
                    verify = mike;
                    options = oscar;
                    oscar = copyDataProperties(verify, options);
                    golf = 'visible';
                    oscar = 'orientation';
                    mike[oscar] = golf;
                    oscar = _closure2_slot15;
                    golf = oscar.insetStart;
                    oscar = 'paddingStart';
                    mike[oscar] = golf;
                    report = _closure2_slot15;
                    oscar = report.insetEnd;
                    report = 'paddingEnd';
                    mike[report] = oscar;
                    mike = zulu.bind(tango)(mike);
 155:
                    mike = undefined;
                    return mike;
 159:
                    return entity;
                }
            };
            tango = source.bind(report)(mike, tango);
            mike = 38;
            mike = update[mike];
            mike = echo.bind(options)(mike);
            mike = mike.bind(options)(tango);
            options = report.useMemo;
            tango = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    mike = _closure1_slot11;
                    entity = mike.getGuildId;
                    report = entity.bind(mike)();
                    zulu = null;
                    oscar = zulu != report;
                    entity = undefined;
                    mike = undefined;
                    if(!oscar) { _fun00018_ip = 39; continue _fun00017 }
 30:
                    tango = _closure1_slot22;
                    mike = tango.bind(entity)(report);
 39:
                    if(!(zulu == mike)) { _fun00018_ip = 45; continue _fun00017 }
 43:
                    return entity;
 45:
                    entity = {};
                    zulu = mike.item;
                    entity['initialScrollItem'] = zulu;
                    mike = mike.section;
                    entity['initialScrollSection'] = mike;
                    return entity;
                }
            };
            mike = new Array(0);
            options = options.bind(report)(tango, mike);
            var _closure2_slot16 = options;
            tango = report.useMemo;
            mike = new Array(13);
            mike[0] = result;
            mike[1] = output;
            mike[2] = sizing;
            mike[3] = kilo;
            mike[4] = backup;
            mike[5] = foxtrot;
            mike[6] = romeo;
            mike[7] = yankee;
            mike[8] = offset;
            mike[9] = verify;
            mike[10] = options;
            mike[11] = golf;
            mike[12] = oscar;
            entity = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = _closure2_slot5;
                    tango = [1];
                    tango[1] = entity;
                    report = _closure2_slot13;
                    entity = null;
                    report = entity == report;
                    golf = 0;
                    entity = 0;
                    if(report) { _fun00020_ip = 67; continue _fun00019 }
 40:
                    oscar = _closure2_slot12;
                    report = 1;
                    if(!oscar) { _fun00020_ip = 64; continue _fun00019 }
 50:
                    oscar = _closure2_slot13;
                    oscar = oscar.children;
                    report = oscar.length;
 64:
                    entity = report;
 67:
                    tango[2] = entity;
                    entity = _closure2_slot9;
                    entity = entity.length;
                    tango[3] = entity;
                    entity = _closure2_slot10;
                    entity = entity.length;
                    tango[4] = entity;
                    entity = global;
                    options = entity.Math;
                    oscar = options.min;
                    entity = _closure2_slot6;
                    report = entity.length;
                    entity = 10;
                    entity = oscar.bind(options)(report, entity);
                    tango[5] = entity;
                    offset = 1;
                    tango[6] = offset;
                    report = _closure1_slot20;
                    entity = _closure2_slot11;
                    options = undefined;
                    oscar = report.bind(options)(entity);
                    report = oscar.bind(options)();
                    entity = report.done;
                    if(entity) { _fun00020_ip = 275; continue _fun00019 }
 169:
                    entity = report.value;
                    romeo = entity.type;
                    yankee = _closure1_slot13;
                    yankee = yankee.GUILD;
                    if(!(romeo !== yankee)) { _fun00020_ip = 250; continue _fun00019 }
 193:
                    romeo = entity.type;
                    yankee = _closure1_slot13;
                    yankee = yankee.FOLDER;
                    if(!(romeo === yankee)) { _fun00020_ip = 260; continue _fun00019 }
 212:
                    romeo = entity.expanded;
                    yankee = tango.push;
                    if(romeo) { _fun00020_ip = 233; continue _fun00019 }
 226:
                    romeo = yankee.bind(tango)(offset);
                    _fun00020_ip = 260; continue _fun00019;
 233:
                    entity = entity.children;
                    entity = entity.length;
                    entity = yankee.bind(tango)(entity);
                    _fun00020_ip = 260; continue _fun00019;
 250:
                    entity = tango.push;
                    entity = entity.bind(tango)(offset);
 260:
                    yankee = oscar.bind(options)();
                    entity = yankee.done;
                    report = yankee;
                    if(!entity) { _fun00020_ip = 169; continue _fun00019 }
 275:
                    entity = _closure2_slot8;
                    entity = entity.length;
                    if(!(entity > golf)) { _fun00020_ip = 307; continue _fun00019 }
 288:
                    report = tango.push;
                    entity = _closure2_slot8;
                    entity = entity.length;
                    entity = report.bind(tango)(entity);
 307:
                    oscar = new Array(0);
                    var _closure3_slot0 = oscar;
                    entity = _closure2_slot14;
                    if(!(entity > golf)) { _fun00020_ip = 339; continue _fun00019 }
 323:
                    report = oscar.push;
                    entity = 'unavailable-guilds';
                    entity = report.bind(oscar)(entity);
 339:
                    entity = _closure2_slot7;
                    if(!entity) { _fun00020_ip = 359; continue _fun00019 }
 346:
                    report = _closure2_slot11;
                    report = report.length;
                    entity = golf === report;
 359:
                    if(!entity) { _fun00020_ip = 370; continue _fun00019 }
 362:
                    report = _closure2_slot14;
                    entity = golf === report;
 370:
                    if(!entity) { _fun00020_ip = 389; continue _fun00019 }
 373:
                    report = oscar.push;
                    entity = 'empty-nux';
                    entity = report.bind(oscar)(entity);
 389:
                    report = oscar.push;
                    entity = 'create-join-guild';
                    entity = report.bind(oscar)(entity);
                    report = oscar.push;
                    entity = 'hubs';
                    entity = report.bind(oscar)(entity);
                    entity = _closure2_slot4;
                    if(!entity) { _fun00020_ip = 444; continue _fun00019 }
 428:
                    report = oscar.push;
                    entity = 'app-education';
                    entity = report.bind(oscar)(entity);
 444:
                    entity = {};
                    foxtrot = _closure2_slot16;
                    backup = entity;
                    zulu = copyDataProperties(backup, foxtrot);
                    zulu = 'sections';
                    entity[zulu] = tango;
                    tango = function(argFoo) { // Original name: sectionSize
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                            report = argFoo;
                            tango = _closure2_slot11;
                            zulu = _closure2_slot13;
                            entity = _closure1_slot15;
                            entity = entity.PENDING_JOIN_REQUESTS;
                            if(!(report === entity)) { _fun00022_ip = 37; continue _fun00021 }
 31:
                            entity = null;
                            if(!(entity == zulu)) { _fun00022_ip = 115; continue _fun00021 }
 37:
                            entity = _closure1_slot15;
                            entity = entity.GUILDS;
                            zulu = report >= entity;
                            entity = 0;
                            if(!zulu) { _fun00022_ip = 119; continue _fun00021 }
 56:
                            zulu = _closure1_slot15;
                            zulu = zulu.GUILDS;
                            zulu = report - zulu;
                            tango = tango[zulu];
                            zulu = null;
                            report = zulu == tango;
                            zulu = 0;
                            if(report) { _fun00022_ip = 110; continue _fun00021 }
 85:
                            report = tango.type;
                            tango = _closure1_slot13;
                            tango = tango.FOLDER;
                            zulu = 0;
                            if(!(report === tango)) { _fun00022_ip = 110; continue _fun00021 }
 106:
                            zulu = _closure1_slot19;
 110:
                            entity = zulu;
                            _fun00022_ip = 119; continue _fun00021;
 115:
                            entity = _closure1_slot19;
 119:
                            return entity;
                        }
                    };
                    zulu = 'sectionSize';
                    entity[zulu] = tango;
                    tango = function(argFoo, argBar) { // Original name: itemSize
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            entity = {};
                            mike = argFoo;
                            entity['section'] = mike;
                            mike = argBar;
                            entity['row'] = mike;
                            zulu = _closure2_slot11;
                            entity['guildsNFolders'] = zulu;
                            zulu = _closure2_slot13;
                            entity['pendingFolderNode'] = zulu;
                            zulu = _closure2_slot6;
                            entity['privateChannelIds'] = zulu;
                            mike = _closure2_slot8;
                            entity['geoRestrictedGuilds'] = mike;
                            yankee = entity.section;
                            oscar = entity.row;
                            golf = entity.guildsNFolders;
                            tango = entity.pendingFolderNode;
                            report = entity.privateChannelIds;
                            offset = entity.geoRestrictedGuilds;
                            entity = _closure1_slot15;
                            entity = entity.MESSAGES;
                            if(!(entity !== yankee)) { _fun00024_ip = 486; continue _fun00023 }
 111:
                            entity = _closure1_slot15;
                            entity = entity.FAVORITES;
                            if(!(entity !== yankee)) { _fun00024_ip = 486; continue _fun00023 }
 128:
                            entity = _closure1_slot15;
                            entity = entity.LURKING_GUILDS;
                            if(!(entity !== yankee)) { _fun00024_ip = 486; continue _fun00023 }
 145:
                            entity = _closure1_slot15;
                            entity = entity.GUEST_GUILDS;
                            if(!(entity !== yankee)) { _fun00024_ip = 486; continue _fun00023 }
 162:
                            entity = _closure1_slot15;
                            entity = entity.UNREAD_PRIVATE_CHANNELS;
                            if(!(entity !== yankee)) { _fun00024_ip = 446; continue _fun00023 }
 179:
                            entity = _closure1_slot15;
                            zulu = entity.SEPARATOR;
                            entity = 9;
                            if(!(zulu !== yankee)) { _fun00024_ip = 490; continue _fun00023 }
 199:
                            zulu = _closure1_slot15;
                            zulu = zulu.PENDING_JOIN_REQUESTS;
                            if(!(zulu !== yankee)) { _fun00024_ip = 388; continue _fun00023 }
 216:
                            verify = null;
                            zulu = verify == oscar;
                            options = 0;
                            entity = 0;
                            if(zulu) { _fun00024_ip = 490; continue _fun00023 }
 232:
                            zulu = _closure1_slot15;
                            zulu = zulu.GUILDS;
                            zulu = yankee - zulu;
                            yankee = golf.length;
                            if(!(yankee >= zulu)) { _fun00024_ip = 263; continue _fun00023 }
 255:
                            offset = offset[oscar];
                            if(!(verify == offset)) { _fun00024_ip = 382; continue _fun00023 }
 263:
                            golf = golf[zulu];
                            offset = verify == golf;
                            zulu = 0;
                            if(offset) { _fun00024_ip = 377; continue _fun00023 }
 276:
                            yankee = golf.type;
                            offset = _closure1_slot13;
                            offset = offset.ROOT;
                            zulu = 0;
                            if(!(yankee !== offset)) { _fun00024_ip = 377; continue _fun00023 }
 297:
                            yankee = golf.type;
                            offset = _closure1_slot13;
                            offset = offset.GUILD;
                            if(!(yankee === offset)) { _fun00024_ip = 325; continue _fun00023 }
 316:
                            offset = oscar > options;
                            zulu = 0;
                            if(offset) { _fun00024_ip = 377; continue _fun00023 }
 325:
                            yankee = golf.type;
                            offset = _closure1_slot13;
                            offset = offset.FOLDER;
                            if(!(yankee === offset)) { _fun00024_ip = 373; continue _fun00023 }
 344:
                            offset = golf.expanded;
                            zulu = 0;
                            if(!offset) { _fun00024_ip = 377; continue _fun00023 }
 355:
                            golf = golf.children;
                            golf = golf[oscar];
                            golf = verify == golf;
                            zulu = 0;
                            if(golf) { _fun00024_ip = 377; continue _fun00023 }
 373:
                            zulu = _closure1_slot19;
 377:
                            entity = zulu;
                            _fun00024_ip = 490; continue _fun00023;
 382:
                            entity = _closure1_slot19;
                            _fun00024_ip = 490; continue _fun00023;
 388:
                            options = null;
                            verify = options != oscar;
                            zulu = 0;
                            if(!verify) { _fun00024_ip = 441; continue _fun00023 }
 399:
                            verify = options != tango;
                            zulu = 0;
                            if(!verify) { _fun00024_ip = 441; continue _fun00023 }
 408:
                            verify = tango.expanded;
                            zulu = 0;
                            if(!verify) { _fun00024_ip = 441; continue _fun00023 }
 419:
                            tango = tango.children;
                            tango = tango[oscar];
                            tango = options != tango;
                            zulu = 0;
                            if(!tango) { _fun00024_ip = 441; continue _fun00023 }
 437:
                            zulu = _closure1_slot19;
 441:
                            entity = zulu;
                            _fun00024_ip = 490; continue _fun00023;
 446:
                            tango = null;
                            golf = tango != oscar;
                            zulu = -1;
                            if(!golf) { _fun00024_ip = 464; continue _fun00023 }
 461:
                            zulu = oscar;
 464:
                            zulu = report[zulu];
                            tango = tango == zulu;
                            zulu = 0;
                            if(tango) { _fun00024_ip = 481; continue _fun00023 }
 477:
                            zulu = _closure1_slot19;
 481:
                            entity = zulu;
                            _fun00024_ip = 490; continue _fun00023;
 486:
                            entity = _closure1_slot19;
 490:
                            return entity;
                        }
                    };
                    zulu = 'itemSize';
                    entity[zulu] = tango;
                    tango = function() { // Original name: footerSize
                        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                            mike = _closure3_slot0;
                            entity = _closure1_slot20;
                            options = undefined;
                            golf = entity.bind(options)(mike);
                            zulu = golf.bind(options)();
                            entity = zulu.done;
                            oscar = 9;
                            report = 'app-education';
                            tango = zulu;
                            zulu = 0;
                            mike = 0;
                            if(entity) { _fun00026_ip = 91; continue _fun00025 }
 49:
                            entity = tango.value;
                            offset = zulu;
                            if(!(report === entity)) { _fun00026_ip = 65; continue _fun00025 }
 61:
                            offset = zulu + oscar;
 65:
                            entity = _closure1_slot19;
                            zulu = offset + entity;
                            yankee = golf.bind(options)();
                            entity = yankee.done;
                            tango = yankee;
                            mike = zulu;
                            if(!entity) { _fun00026_ip = 49; continue _fun00025 }
 91:
                            entity = 8;
                            entity = mike + entity;
                            return entity;
                        }
                    };
                    zulu = 'footerSize';
                    entity[zulu] = tango;
                    tango = function(argFoo) { // Original name: renderSection
                        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                            report = argFoo;
                            tango = _closure2_slot11;
                            verify = _closure2_slot13;
                            entity = _closure1_slot15;
                            entity = entity.GUILDS;
                            if(!(!(report >= entity))) { _fun00028_ip = 102; continue _fun00027 }
 31:
                            entity = _closure1_slot15;
                            zulu = entity.PENDING_JOIN_REQUESTS;
                            oscar = null;
                            entity = null;
                            if(!(report === zulu)) { _fun00028_ip = 180; continue _fun00027 }
 52:
                            zulu = oscar != verify;
                            entity = null;
                            if(!zulu) { _fun00028_ip = 180; continue _fun00027 }
 61:
                            options = _closure1_slot17;
                            oscar = _closure1_slot1;
                            golf = _closure1_slot2;
                            zulu = 14;
                            zulu = golf[zulu];
                            golf = undefined;
                            oscar = oscar.bind(golf)(zulu);
                            zulu = {};
                            zulu['node'] = verify;
                            entity = options.bind(golf)(oscar, zulu);
                            _fun00028_ip = 180; continue _fun00027;
 102:
                            zulu = _closure1_slot15;
                            zulu = zulu.GUILDS;
                            zulu = report - zulu;
                            oscar = tango[zulu];
                            tango = oscar.type;
                            zulu = _closure1_slot13;
                            zulu = zulu.FOLDER;
                            entity = null;
                            if(!(tango === zulu)) { _fun00028_ip = 180; continue _fun00027 }
 141:
                            report = _closure1_slot17;
                            zulu = _closure1_slot1;
                            tango = _closure1_slot2;
                            mike = 13;
                            mike = tango[mike];
                            tango = undefined;
                            zulu = zulu.bind(tango)(mike);
                            mike = {};
                            mike['node'] = oscar;
                            entity = report.bind(tango)(zulu, mike);
 180:
                            return entity;
                        }
                    };
                    zulu = 'renderSection';
                    entity[zulu] = tango;
                    tango = function(argFoo, argBar) { // Original name: renderItem
                        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                            offset = argFoo;
                            tango = argBar;
                            verify = _closure2_slot11;
                            oscar = _closure2_slot6;
                            zulu = _closure2_slot9;
                            report = _closure2_slot10;
                            options = _closure2_slot8;
                            golf = _closure2_slot13;
                            entity = _closure1_slot15;
                            entity = entity.MESSAGES;
                            if(!(entity !== offset)) { _fun00030_ip = 778; continue _fun00029 }
 53:
                            entity = _closure1_slot15;
                            entity = entity.FAVORITES;
                            if(!(entity !== offset)) { _fun00030_ip = 742; continue _fun00029 }
 70:
                            entity = _closure1_slot15;
                            entity = entity.LURKING_GUILDS;
                            if(!(entity !== offset)) { _fun00030_ip = 686; continue _fun00029 }
 87:
                            entity = _closure1_slot15;
                            entity = entity.GUEST_GUILDS;
                            if(!(entity !== offset)) { _fun00030_ip = 627; continue _fun00029 }
 104:
                            entity = _closure1_slot15;
                            entity = entity.UNREAD_PRIVATE_CHANNELS;
                            if(!(entity !== offset)) { _fun00030_ip = 568; continue _fun00029 }
 121:
                            entity = _closure1_slot15;
                            entity = entity.SEPARATOR;
                            if(!(entity !== offset)) { _fun00030_ip = 529; continue _fun00029 }
 138:
                            entity = _closure1_slot15;
                            entity = entity.PENDING_JOIN_REQUESTS;
                            if(!(entity !== offset)) { _fun00030_ip = 425; continue _fun00029 }
 155:
                            entity = _closure1_slot15;
                            entity = entity.GUILDS;
                            entity = offset - entity;
                            offset = verify.length;
                            if(!(!(entity >= offset))) { _fun00030_ip = 365; continue _fun00029 }
 181:
                            verify = verify[entity];
                            romeo = null;
                            offset = romeo == verify;
                            entity = null;
                            if(offset) { _fun00030_ip = 360; continue _fun00029 }
 199:
                            yankee = verify.type;
                            offset = _closure1_slot13;
                            offset = offset.ROOT;
                            entity = null;
                            if(!(yankee !== offset)) { _fun00030_ip = 360; continue _fun00029 }
 223:
                            yankee = verify.type;
                            offset = _closure1_slot13;
                            offset = offset.GUILD;
                            if(!(yankee === offset)) { _fun00030_ip = 253; continue _fun00029 }
 242:
                            offset = 0;
                            offset = tango > offset;
                            entity = null;
                            if(offset) { _fun00030_ip = 360; continue _fun00029 }
 253:
                            yankee = verify.type;
                            offset = _closure1_slot13;
                            offset = offset.FOLDER;
                            backup = verify;
                            if(!(yankee === offset)) { _fun00030_ip = 284; continue _fun00029 }
 275:
                            verify = verify.children;
                            backup = verify[tango];
 284:
                            offset = romeo == backup;
                            verify = null;
                            if(offset) { _fun00030_ip = 357; continue _fun00029 }
 293:
                            yankee = backup.type;
                            offset = _closure1_slot13;
                            offset = offset.GUILD;
                            verify = null;
                            if(!(yankee === offset)) { _fun00030_ip = 357; continue _fun00029 }
 314:
                            foxtrot = _closure1_slot17;
                            yankee = _closure1_slot1;
                            romeo = _closure1_slot2;
                            offset = 17;
                            offset = romeo[offset];
                            romeo = undefined;
                            yankee = yankee.bind(romeo)(offset);
                            offset = {};
                            backup = backup.id;
                            offset['guildId'] = backup;
                            verify = foxtrot.bind(romeo)(yankee, offset);
 357:
                            entity = verify;
 360:
                            _fun00030_ip = 812; continue _fun00029;
 365:
                            foxtrot = options[tango];
                            options = null;
                            verify = options != foxtrot;
                            if(!verify) { _fun00030_ip = 417; continue _fun00029 }
 378:
                            romeo = _closure1_slot17;
                            offset = _closure1_slot1;
                            yankee = _closure1_slot2;
                            verify = 21;
                            verify = yankee[verify];
                            yankee = undefined;
                            offset = offset.bind(yankee)(verify);
                            verify = {};
                            verify['restrictedGuild'] = foxtrot;
                            options = romeo.bind(yankee)(offset, verify);
 417:
                            entity = options;
                            _fun00030_ip = 812; continue _fun00029;
 425:
                            offset = null;
                            options = offset == golf;
                            entity = null;
                            if(options) { _fun00030_ip = 812; continue _fun00029 }
 439:
                            golf = golf.children;
                            romeo = golf[tango];
                            options = offset == romeo;
                            golf = null;
                            if(options) { _fun00030_ip = 521; continue _fun00029 }
 457:
                            verify = romeo.type;
                            options = _closure1_slot13;
                            options = options.GUILD;
                            golf = null;
                            if(!(verify === options)) { _fun00030_ip = 521; continue _fun00029 }
 478:
                            yankee = _closure1_slot17;
                            verify = _closure1_slot1;
                            offset = _closure1_slot2;
                            options = 20;
                            options = offset[options];
                            offset = undefined;
                            verify = verify.bind(offset)(options);
                            options = {};
                            romeo = romeo.id;
                            options['guildId'] = romeo;
                            golf = yankee.bind(offset)(verify, options);
 521:
                            entity = golf;
                            _fun00030_ip = 812; continue _fun00029;
 529:
                            offset = _closure1_slot17;
                            options = _closure1_slot1;
                            verify = _closure1_slot2;
                            golf = 19;
                            golf = verify[golf];
                            verify = undefined;
                            options = options.bind(verify)(golf);
                            golf = {};
                            entity = offset.bind(verify)(options, golf);
                            _fun00030_ip = 812; continue _fun00029;
 568:
                            yankee = oscar[tango];
                            oscar = null;
                            golf = oscar == yankee;
                            if(golf) { _fun00030_ip = 619; continue _fun00029 }
 581:
                            offset = _closure1_slot17;
                            options = _closure1_slot1;
                            verify = _closure1_slot2;
                            golf = 18;
                            golf = verify[golf];
                            verify = undefined;
                            options = options.bind(verify)(golf);
                            golf = {};
                            golf['channelId'] = yankee;
                            oscar = offset.bind(verify)(options, golf);
 619:
                            entity = oscar;
                            _fun00030_ip = 812; continue _fun00029;
 627:
                            offset = report[tango];
                            report = null;
                            oscar = report == offset;
                            if(oscar) { _fun00030_ip = 678; continue _fun00029 }
 640:
                            verify = _closure1_slot17;
                            golf = _closure1_slot1;
                            options = _closure1_slot2;
                            oscar = 17;
                            oscar = options[oscar];
                            options = undefined;
                            golf = golf.bind(options)(oscar);
                            oscar = {};
                            oscar['guildId'] = offset;
                            report = verify.bind(options)(golf, oscar);
 678:
                            entity = report;
                            _fun00030_ip = 812; continue _fun00029;
 686:
                            options = zulu[tango];
                            zulu = null;
                            tango = zulu == options;
                            if(tango) { _fun00030_ip = 737; continue _fun00029 }
 699:
                            golf = _closure1_slot17;
                            report = _closure1_slot1;
                            oscar = _closure1_slot2;
                            tango = 17;
                            tango = oscar[tango];
                            oscar = undefined;
                            report = report.bind(oscar)(tango);
                            tango = {};
                            tango['guildId'] = options;
                            zulu = golf.bind(oscar)(report, tango);
 737:
                            entity = zulu;
                            _fun00030_ip = 812; continue _fun00029;
 742:
                            oscar = _closure1_slot17;
                            tango = _closure1_slot1;
                            report = _closure1_slot2;
                            zulu = 16;
                            zulu = report[zulu];
                            report = undefined;
                            tango = tango.bind(report)(zulu);
                            zulu = {};
                            entity = oscar.bind(report)(tango, zulu);
                            _fun00030_ip = 812; continue _fun00029;
 778:
                            report = _closure1_slot17;
                            zulu = _closure1_slot1;
                            tango = _closure1_slot2;
                            mike = 15;
                            mike = tango[mike];
                            tango = undefined;
                            zulu = zulu.bind(tango)(mike);
                            mike = {};
                            entity = report.bind(tango)(zulu, mike);
 812:
                            return entity;
                        }
                    };
                    zulu = 'renderItem';
                    entity[zulu] = tango;
                    tango = function() { // Original name: renderFooter
                        zulu = _closure3_slot0;
                        mike = function(argFoo) { // Original name: renderFooterJSX
                            golf = argFoo;
                            tango = _closure1_slot17;
                            mike = _closure1_slot1;
                            zulu = _closure1_slot2;
                            entity = 22;
                            entity = zulu[entity];
                            zulu = undefined;
                            mike = mike.bind(zulu)(entity);
                            entity = {};
                            oscar = golf.map;
                            report = function(argFoo) {
                                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                                    report = argFoo;
                                    entity = 'unavailable-guilds';
                                    if(!(entity !== report)) { _fun00032_ip = 223; continue _fun00031 }
 16:
                                    entity = 'empty-nux';
                                    if(!(entity !== report)) { _fun00032_ip = 183; continue _fun00031 }
 29:
                                    entity = 'create-join-guild';
                                    if(!(entity !== report)) { _fun00032_ip = 143; continue _fun00031 }
 39:
                                    entity = 'hubs';
                                    if(!(entity !== report)) { _fun00032_ip = 103; continue _fun00031 }
 49:
                                    entity = 'app-education';
                                    if(!(entity !== report)) { _fun00032_ip = 63; continue _fun00031 }
 59:
                                    entity = undefined;
                                    return entity;
 63:
                                    tango = _closure1_slot17;
                                    mike = _closure1_slot1;
                                    zulu = _closure1_slot2;
                                    entity = 27;
                                    entity = zulu[entity];
                                    zulu = undefined;
                                    mike = mike.bind(zulu)(entity);
                                    entity = {};
                                    entity = tango.bind(zulu)(mike, entity, report);
                                    return entity;
 103:
                                    tango = _closure1_slot17;
                                    mike = _closure1_slot1;
                                    zulu = _closure1_slot2;
                                    entity = 26;
                                    entity = zulu[entity];
                                    zulu = undefined;
                                    mike = mike.bind(zulu)(entity);
                                    entity = {};
                                    entity = tango.bind(zulu)(mike, entity, report);
                                    return entity;
 143:
                                    tango = _closure1_slot17;
                                    mike = _closure1_slot1;
                                    zulu = _closure1_slot2;
                                    entity = 25;
                                    entity = zulu[entity];
                                    zulu = undefined;
                                    mike = mike.bind(zulu)(entity);
                                    entity = {};
                                    entity = tango.bind(zulu)(mike, entity, report);
                                    return entity;
 183:
                                    tango = _closure1_slot17;
                                    mike = _closure1_slot1;
                                    zulu = _closure1_slot2;
                                    entity = 24;
                                    entity = zulu[entity];
                                    zulu = undefined;
                                    mike = mike.bind(zulu)(entity);
                                    entity = {};
                                    entity = tango.bind(zulu)(mike, entity, report);
                                    return entity;
 223:
                                    tango = _closure1_slot17;
                                    mike = _closure1_slot1;
                                    zulu = _closure1_slot2;
                                    entity = 23;
                                    entity = zulu[entity];
                                    zulu = undefined;
                                    mike = mike.bind(zulu)(entity);
                                    entity = {};
                                    entity = tango.bind(zulu)(mike, entity, report);
                                    return entity;
                                }
                            };
                            report = oscar.bind(golf)(report);
                            entity['children'] = report;
                            entity = tango.bind(zulu)(mike, entity);
                            return entity;
                        };
                        entity = undefined;
                        entity = mike.bind(entity)(zulu);
                        return entity;
                    };
                    zulu = 'renderFooter';
                    entity[zulu] = tango;
                    tango = function(argFoo, argBar, argBaz) { // Original name: getRecyclerKey
                        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                            zulu = argFoo;
                            tango = argBar;
                            report = argBaz;
                            golf = _closure1_slot0;
                            entity = _closure1_slot2;
                            options = 39;
                            mike = entity[options];
                            entity = undefined;
                            mike = golf.bind(entity)(mike);
                            mike = mike.FastListItemTypes;
                            mike = mike.ITEM;
                            if(!(mike !== zulu)) { _fun00034_ip = 85; continue _fun00033 }
 50:
                            golf = _closure1_slot0;
                            mike = _closure1_slot2;
                            mike = mike[options];
                            mike = golf.bind(entity)(mike);
                            mike = mike.FastListItemTypes;
                            mike = mike.SECTION;
                            if(!(mike !== zulu)) { _fun00034_ip = 85; continue _fun00033 }
 83:
                            return entity;
 85:
                            mike = _closure1_slot15;
                            mike = mike.GUILDS;
                            if(!(!(tango < mike))) { _fun00034_ip = 271; continue _fun00033 }
 102:
                            zulu = _closure2_slot11;
                            mike = _closure1_slot15;
                            mike = mike.GUILDS;
                            mike = tango - mike;
                            mike = zulu[mike];
                            tango = null;
                            if(!(tango != mike)) { _fun00034_ip = 271; continue _fun00033 }
 136:
                            golf = mike.type;
                            zulu = _closure1_slot13;
                            zulu = zulu.ROOT;
                            if(!(golf !== zulu)) { _fun00034_ip = 271; continue _fun00033 }
 155:
                            options = mike.type;
                            zulu = _closure1_slot13;
                            golf = zulu.FOLDER;
                            zulu = mike;
                            if(!(options === golf)) { _fun00034_ip = 190; continue _fun00033 }
 177:
                            if(!(tango != report)) { _fun00034_ip = 242; continue _fun00033 }
 181:
                            golf = mike.children;
                            zulu = golf[report];
 190:
                            golf = zulu.type;
                            oscar = _closure1_slot13;
                            oscar = oscar.GUILD;
                            if(!(golf === oscar)) { _fun00034_ip = 213; continue _fun00033 }
 209:
                            if(!(tango != report)) { _fun00034_ip = 271; continue _fun00033 }
 213:
                            report = zulu.id;
                            zulu = global;
                            zulu = zulu.HermesInternal;
                            tango = zulu.concat;
                            zulu = '';
                            zulu = tango.bind(zulu)(report);
                            return zulu;
 242:
                            tango = mike.id;
                            mike = global;
                            mike = mike.HermesInternal;
                            zulu = mike.concat;
                            mike = '';
                            mike = zulu.bind(mike)(tango);
                            return mike;
 271:
                            return entity;
                        }
                    };
                    zulu = 'getRecyclerKey';
                    entity[zulu] = tango;
                    tango = function(argFoo) { // Original name: renderAccessory
                        tango = _closure1_slot17;
                        mike = _closure1_slot1;
                        zulu = _closure1_slot2;
                        entity = 28;
                        entity = zulu[entity];
                        zulu = undefined;
                        mike = mike.bind(zulu)(entity);
                        entity = {};
                        report = argFoo;
                        entity['fastList'] = report;
                        entity = tango.bind(zulu)(mike, entity);
                        return entity;
                    };
                    zulu = 'renderAccessory';
                    entity[zulu] = tango;
                    tango = function(argFoo, argBar) { // Original name: getAnchorIdFromIndex
                        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                            zulu = _closure1_slot14;
                            entity = zulu.getState;
                            entity = entity.bind(zulu)();
                            entity = entity.dropSpecs;
                            tango = null;
                            if(!(tango == entity)) { _fun00036_ip = 53; continue _fun00035 }
 29:
                            zulu = _closure1_slot14;
                            entity = zulu.getState;
                            entity = entity.bind(zulu)();
                            entity = entity.dragSpecs;
                            if(!(tango != entity)) { _fun00036_ip = 57; continue _fun00035 }
 53:
                            entity = undefined;
                            return entity;
 57:
                            verify = {};
                            entity = argFoo;
                            verify['section'] = entity;
                            entity = argBar;
                            verify['item'] = entity;
                            zulu = _closure2_slot9;
                            verify['lurkingGuildsIds'] = zulu;
                            zulu = _closure2_slot10;
                            verify['guestGuildIds'] = zulu;
                            zulu = _closure2_slot6;
                            verify['privateChannelIds'] = zulu;
                            zulu = _closure2_slot11;
                            verify['guildsNFolders'] = zulu;
                            zulu = _closure2_slot13;
                            verify['pendingFolderNode'] = zulu;
                            entity = _closure2_slot8;
                            verify['geoRestrictedGuilds'] = entity;
                            yankee = verify.section;
                            oscar = verify.item;
                            zulu = verify.lurkingGuildsIds;
                            golf = verify.guestGuildIds;
                            options = verify.privateChannelIds;
                            entity = verify.guildsNFolders;
                            report = verify.pendingFolderNode;
                            offset = verify.geoRestrictedGuilds;
                            verify = _closure1_slot15;
                            verify = verify.MESSAGES;
                            if(!(verify !== yankee)) { _fun00036_ip = 784; continue _fun00035 }
 193:
                            verify = _closure1_slot15;
                            verify = verify.FAVORITES;
                            if(!(verify !== yankee)) { _fun00036_ip = 772; continue _fun00035 }
 210:
                            verify = _closure1_slot15;
                            verify = verify.PENDING_JOIN_REQUESTS;
                            if(!(verify !== yankee)) { _fun00036_ip = 672; continue _fun00035 }
 227:
                            verify = _closure1_slot15;
                            verify = verify.LURKING_GUILDS;
                            if(!(verify !== yankee)) { _fun00036_ip = 609; continue _fun00035 }
 244:
                            verify = _closure1_slot15;
                            verify = verify.GUEST_GUILDS;
                            if(!(verify !== yankee)) { _fun00036_ip = 543; continue _fun00035 }
 261:
                            verify = _closure1_slot15;
                            verify = verify.UNREAD_PRIVATE_CHANNELS;
                            if(!(verify !== yankee)) { _fun00036_ip = 477; continue _fun00035 }
 278:
                            verify = _closure1_slot15;
                            verify = verify.SEPARATOR;
                            if(!(verify !== yankee)) { _fun00036_ip = 462; continue _fun00035 }
 295:
                            verify = _closure1_slot15;
                            verify = verify.GUILDS;
                            verify = _closure1_slot15;
                            verify = verify.GUILDS;
                            verify = yankee - verify;
                            yankee = entity[verify];
                            if(!(tango != yankee)) { _fun00036_ip = 363; continue _fun00035 }
 327:
                            if(!(tango != oscar)) { _fun00036_ip = 356; continue _fun00035 }
 331:
                            romeo = yankee.children;
                            romeo = romeo[oscar];
                            backup = tango == romeo;
                            foxtrot = undefined;
                            if(backup) { _fun00036_ip = 354; continue _fun00035 }
 349:
                            foxtrot = romeo.id;
 354:
                            _fun00036_ip = 361; continue _fun00035;
 356:
                            foxtrot = yankee.id;
 361:
                            _fun00036_ip = 410; continue _fun00035;
 363:
                            entity = entity.length;
                            yankee = verify >= entity;
                            entity = undefined;
                            if(!yankee) { _fun00036_ip = 407; continue _fun00035 }
 377:
                            yankee = tango != oscar;
                            entity = undefined;
                            if(!yankee) { _fun00036_ip = 407; continue _fun00035 }
 386:
                            offset = offset[oscar];
                            yankee = tango == offset;
                            verify = undefined;
                            if(yankee) { _fun00036_ip = 404; continue _fun00035 }
 399:
                            verify = offset.id;
 404:
                            entity = verify;
 407:
                            foxtrot = entity;
 410:
                            verify = tango != foxtrot;
                            entity = undefined;
                            if(!verify) { _fun00036_ip = 457; continue _fun00035 }
 419:
                            verify = _closure1_slot18;
                            romeo = verify.GUILDS;
                            verify = global;
                            verify = verify.HermesInternal;
                            yankee = verify.concat;
                            offset = '';
                            verify = ':';
                            entity = yankee.bind(offset)(romeo, verify, foxtrot);
 457:
                            _fun00036_ip = 794; continue _fun00035;
 462:
                            verify = _closure1_slot18;
                            entity = verify.SEPARATOR;
                            _fun00036_ip = 794; continue _fun00035;
 477:
                            if(!(tango != oscar)) { _fun00036_ip = 525; continue _fun00035 }
 481:
                            verify = _closure1_slot18;
                            romeo = verify.UNREAD_PRIVATE_CHANNELS;
                            yankee = options[oscar];
                            options = global;
                            options = options.HermesInternal;
                            offset = options.concat;
                            verify = '';
                            options = ':';
                            options = offset.bind(verify)(romeo, options, yankee);
                            _fun00036_ip = 535; continue _fun00035;
 525:
                            verify = _closure1_slot18;
                            options = verify.UNREAD_PRIVATE_CHANNELS;
 535:
                            entity = options;
                            _fun00036_ip = 794; continue _fun00035;
 543:
                            if(!(tango != oscar)) { _fun00036_ip = 591; continue _fun00035 }
 547:
                            options = _closure1_slot18;
                            yankee = options.GUEST_GUILDS;
                            offset = golf[oscar];
                            golf = global;
                            golf = golf.HermesInternal;
                            verify = golf.concat;
                            options = '';
                            golf = ':';
                            golf = verify.bind(options)(yankee, golf, offset);
                            _fun00036_ip = 601; continue _fun00035;
 591:
                            options = _closure1_slot18;
                            golf = options.GUEST_GUILDS;
 601:
                            entity = golf;
                            _fun00036_ip = 794; continue _fun00035;
 609:
                            if(!(tango != oscar)) { _fun00036_ip = 657; continue _fun00035 }
 613:
                            golf = _closure1_slot18;
                            offset = golf.LURKING_GUILDS;
                            verify = zulu[oscar];
                            zulu = global;
                            zulu = zulu.HermesInternal;
                            options = zulu.concat;
                            golf = '';
                            zulu = ':';
                            zulu = options.bind(golf)(offset, zulu, verify);
                            _fun00036_ip = 667; continue _fun00035;
 657:
                            golf = _closure1_slot18;
                            zulu = golf.LURKING_GUILDS;
 667:
                            entity = zulu;
                            _fun00036_ip = 794; continue _fun00035;
 672:
                            if(!(tango != oscar)) { _fun00036_ip = 760; continue _fun00035 }
 676:
                            golf = tango == report;
                            options = undefined;
                            if(golf) { _fun00036_ip = 708; continue _fun00035 }
 685:
                            report = report.children;
                            report = report[oscar];
                            oscar = tango == report;
                            options = undefined;
                            if(oscar) { _fun00036_ip = 708; continue _fun00035 }
 703:
                            options = report.id;
 708:
                            tango = tango != options;
                            zulu = undefined;
                            if(!tango) { _fun00036_ip = 755; continue _fun00035 }
 717:
                            tango = _closure1_slot18;
                            golf = tango.PENDING_JOIN_REQUESTS;
                            tango = global;
                            tango = tango.HermesInternal;
                            oscar = tango.concat;
                            report = '';
                            tango = ':';
                            zulu = oscar.bind(report)(golf, tango, options);
 755:
                            entity = zulu;
                            _fun00036_ip = 794; continue _fun00035;
 760:
                            zulu = _closure1_slot18;
                            entity = zulu.PENDING_JOIN_REQUESTS;
                            _fun00036_ip = 794; continue _fun00035;
 772:
                            zulu = _closure1_slot18;
                            entity = zulu.FAVORITES;
                            _fun00036_ip = 794; continue _fun00035;
 784:
                            mike = _closure1_slot18;
                            entity = mike.MESSAGES;
 794:
                            return entity;
                        }
                    };
                    zulu = 'getAnchorIdFromIndex';
                    entity[zulu] = tango;
                    zulu = function(argFoo) { // Original name: getAnchorIndexFromId
                        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                            mike = {};
                            entity = argFoo;
                            mike['id'] = entity;
                            zulu = _closure2_slot9;
                            mike['lurkingGuildsIds'] = zulu;
                            zulu = _closure2_slot10;
                            mike['guestGuildIds'] = zulu;
                            zulu = _closure2_slot6;
                            mike['privateChannelIds'] = zulu;
                            zulu = _closure2_slot11;
                            mike['guildsNFolders'] = zulu;
                            zulu = _closure2_slot13;
                            mike['pendingFolderNode'] = zulu;
                            entity = _closure2_slot8;
                            mike['geoRestrictedGuilds'] = entity;
                            verify = mike.id;
                            tango = mike.lurkingGuildsIds;
                            report = mike.guestGuildIds;
                            options = mike.privateChannelIds;
                            golf = mike.guildsNFolders;
                            entity = mike.pendingFolderNode;
                            oscar = mike.geoRestrictedGuilds;
                            mike = _closure1_slot18;
                            mike = mike.MESSAGES;
                            if(!(mike !== verify)) { _fun00038_ip = 1338; continue _fun00037 }
 127:
                            mike = _closure1_slot18;
                            mike = mike.FAVORITES;
                            if(!(mike !== verify)) { _fun00038_ip = 1317; continue _fun00037 }
 144:
                            mike = _closure1_slot18;
                            mike = mike.PENDING_JOIN_REQUESTS;
                            if(!(mike !== verify)) { _fun00038_ip = 1296; continue _fun00037 }
 161:
                            mike = _closure1_slot18;
                            mike = mike.LURKING_GUILDS;
                            if(!(mike !== verify)) { _fun00038_ip = 1275; continue _fun00037 }
 178:
                            mike = _closure1_slot18;
                            mike = mike.GUEST_GUILDS;
                            if(!(mike !== verify)) { _fun00038_ip = 1254; continue _fun00037 }
 195:
                            mike = _closure1_slot18;
                            mike = mike.UNREAD_PRIVATE_CHANNELS;
                            if(!(mike !== verify)) { _fun00038_ip = 1233; continue _fun00037 }
 212:
                            mike = _closure1_slot18;
                            mike = mike.SEPARATOR;
                            if(!(mike !== verify)) { _fun00038_ip = 1209; continue _fun00037 }
 229:
                            offset = verify.startsWith;
                            mike = _closure1_slot18;
                            mike = mike.LURKING_GUILDS;
                            mike = offset.bind(verify)(mike);
                            if(mike) { _fun00038_ip = 1091; continue _fun00037 }
 256:
                            offset = verify.startsWith;
                            mike = _closure1_slot18;
                            mike = mike.PENDING_JOIN_REQUESTS;
                            mike = offset.bind(verify)(mike);
                            if(!mike) { _fun00038_ip = 413; continue _fun00037 }
 283:
                            mike = null;
                            if(!(mike != entity)) { _fun00038_ip = 413; continue _fun00037 }
 292:
                            mike = _closure1_slot20;
                            entity = entity.children;
                            backup = undefined;
                            foxtrot = mike.bind(backup)(entity);
                            mike = foxtrot.bind(backup)();
                            entity = mike.done;
                            yankee = 0;
                            romeo = mike;
                            offset = 0;
                            if(entity) { _fun00038_ip = 413; continue _fun00037 }
 327:
                            entity = romeo.value;
                            kilo = _closure1_slot23;
                            mike = _closure1_slot18;
                            mike = mike.PENDING_JOIN_REQUESTS;
                            entity = entity.id;
                            entity = kilo.bind(backup)(mike, verify, entity);
                            mike = offset;
                            if(entity) { _fun00038_ip = 384; continue _fun00037 }
 364:
                            offset = mike + 1;
                            kilo = foxtrot.bind(backup)();
                            entity = kilo.done;
                            romeo = kilo;
                            if(entity) { _fun00038_ip = 413; continue _fun00037 }
 382:
                            _fun00038_ip = 327; continue _fun00037;
 384:
                            entity = {};
                            offset = _closure1_slot15;
                            offset = offset.PENDING_JOIN_REQUESTS;
                            offset = yankee + offset;
                            entity['section'] = offset;
                            entity['item'] = mike;
                            _fun00038_ip = 1357; continue _fun00037;
 413:
                            offset = verify.startsWith;
                            mike = _closure1_slot18;
                            mike = mike.GUEST_GUILDS;
                            mike = offset.bind(verify)(mike);
                            if(mike) { _fun00038_ip = 973; continue _fun00037 }
 440:
                            offset = verify.startsWith;
                            mike = _closure1_slot18;
                            mike = mike.UNREAD_PRIVATE_CHANNELS;
                            mike = offset.bind(verify)(mike);
                            if(!mike) { _fun00038_ip = 572; continue _fun00037 }
 464:
                            mike = _closure1_slot20;
                            foxtrot = undefined;
                            romeo = mike.bind(foxtrot)(options);
                            options = romeo.bind(foxtrot)();
                            mike = options.done;
                            offset = options;
                            yankee = 0;
                            if(mike) { _fun00038_ip = 572; continue _fun00037 }
 492:
                            backup = offset.value;
                            options = _closure1_slot23;
                            mike = _closure1_slot18;
                            mike = mike.UNREAD_PRIVATE_CHANNELS;
                            mike = options.bind(foxtrot)(mike, verify, backup);
                            options = yankee;
                            if(mike) { _fun00038_ip = 544; continue _fun00037 }
 524:
                            yankee = options + 1;
                            backup = romeo.bind(foxtrot)();
                            mike = backup.done;
                            offset = backup;
                            if(mike) { _fun00038_ip = 572; continue _fun00037 }
 542:
                            _fun00038_ip = 492; continue _fun00037;
 544:
                            mike = {};
                            offset = _closure1_slot15;
                            offset = offset.UNREAD_PRIVATE_CHANNELS;
                            mike['section'] = offset;
                            mike['item'] = options;
                            entity = mike;
                            _fun00038_ip = 1357; continue _fun00037;
 572:
                            options = verify.startsWith;
                            mike = _closure1_slot18;
                            mike = mike.GUILDS;
                            mike = options.bind(verify)(mike);
                            romeo = undefined;
                            entity = undefined;
                            if(!mike) { _fun00038_ip = 1357; continue _fun00037 }
 603:
                            mike = _closure1_slot20;
                            backup = mike.bind(romeo)(golf);
                            golf = backup.bind(romeo)();
                            mike = golf.done;
                            foxtrot = golf;
                            golf = 0;
                            options = 0;
                            if(mike) { _fun00038_ip = 848; continue _fun00037 }
 634:
                            mike = foxtrot.value;
                            sizing = _closure1_slot23;
                            offset = _closure1_slot18;
                            kilo = offset.GUILDS;
                            offset = mike.id;
                            kilo = sizing.bind(romeo)(kilo, verify, offset);
                            offset = golf;
                            if(kilo) { _fun00038_ip = 820; continue _fun00037 }
 674:
                            kilo = _closure1_slot20;
                            mike = mike.children;
                            result = kilo.bind(romeo)(mike);
                            kilo = result.bind(romeo)();
                            mike = kilo.done;
                            output = 0;
                            sizing = kilo;
                            if(mike) { _fun00038_ip = 794; continue _fun00037 }
 705:
                            mike = sizing.value;
                            echo = _closure1_slot23;
                            kilo = _closure1_slot18;
                            kilo = kilo.GUILDS;
                            mike = mike.id;
                            mike = echo.bind(romeo)(kilo, verify, mike);
                            kilo = output;
                            if(mike) { _fun00038_ip = 762; continue _fun00037 }
 742:
                            output = kilo + 1;
                            echo = result.bind(romeo)();
                            mike = echo.done;
                            sizing = echo;
                            if(mike) { _fun00038_ip = 794; continue _fun00037 }
 760:
                            _fun00038_ip = 705; continue _fun00037;
 762:
                            mike = {};
                            sizing = _closure1_slot15;
                            sizing = sizing.GUILDS;
                            sizing = offset + sizing;
                            mike['section'] = sizing;
                            mike['item'] = kilo;
                            entity = mike;
                            _fun00038_ip = 1357; continue _fun00037;
 794:
                            golf = offset + 1;
                            sizing = backup.bind(romeo)();
                            mike = sizing.done;
                            foxtrot = sizing;
                            options = golf;
                            if(mike) { _fun00038_ip = 848; continue _fun00037 }
 815:
                            _fun00038_ip = 634; continue _fun00037;
 820:
                            mike = {};
                            golf = _closure1_slot15;
                            golf = golf.GUILDS;
                            golf = offset + golf;
                            mike['section'] = golf;
                            entity = mike;
                            _fun00038_ip = 1357; continue _fun00037;
 848:
                            mike = _closure1_slot20;
                            offset = mike.bind(romeo)(oscar);
                            oscar = offset.bind(romeo)();
                            mike = oscar.done;
                            yankee = 0;
                            golf = oscar;
                            entity = undefined;
                            if(mike) { _fun00038_ip = 1357; continue _fun00037 }
 879:
                            mike = golf.value;
                            foxtrot = _closure1_slot23;
                            oscar = _closure1_slot18;
                            oscar = oscar.GUILDS;
                            mike = mike.id;
                            mike = foxtrot.bind(romeo)(oscar, verify, mike);
                            oscar = yankee;
                            if(mike) { _fun00038_ip = 941; continue _fun00037 }
 916:
                            yankee = oscar + 1;
                            foxtrot = offset.bind(romeo)();
                            mike = foxtrot.done;
                            golf = foxtrot;
                            entity = undefined;
                            if(mike) { _fun00038_ip = 1357; continue _fun00037 }
 939:
                            _fun00038_ip = 879; continue _fun00037;
 941:
                            mike = {};
                            golf = _closure1_slot15;
                            golf = golf.GUILDS;
                            golf = options + golf;
                            mike['section'] = golf;
                            mike['item'] = oscar;
                            entity = mike;
                            _fun00038_ip = 1357; continue _fun00037;
 973:
                            mike = _closure1_slot20;
                            offset = undefined;
                            options = mike.bind(offset)(report);
                            report = options.bind(offset)();
                            mike = report.done;
                            oscar = report;
                            golf = 0;
                            entity = undefined;
                            if(mike) { _fun00038_ip = 1357; continue _fun00037 }
 1006:
                            yankee = oscar.value;
                            report = _closure1_slot23;
                            mike = _closure1_slot18;
                            mike = mike.GUEST_GUILDS;
                            mike = report.bind(offset)(mike, verify, yankee);
                            report = golf;
                            if(mike) { _fun00038_ip = 1063; continue _fun00037 }
 1038:
                            golf = report + 1;
                            yankee = options.bind(offset)();
                            mike = yankee.done;
                            oscar = yankee;
                            entity = undefined;
                            if(mike) { _fun00038_ip = 1357; continue _fun00037 }
 1061:
                            _fun00038_ip = 1006; continue _fun00037;
 1063:
                            mike = {};
                            oscar = _closure1_slot15;
                            oscar = oscar.GUEST_GUILDS;
                            mike['section'] = oscar;
                            mike['item'] = report;
                            entity = mike;
                            _fun00038_ip = 1357; continue _fun00037;
 1091:
                            mike = _closure1_slot20;
                            options = undefined;
                            golf = mike.bind(options)(tango);
                            tango = golf.bind(options)();
                            mike = tango.done;
                            report = tango;
                            oscar = 0;
                            entity = undefined;
                            if(mike) { _fun00038_ip = 1357; continue _fun00037 }
 1124:
                            offset = report.value;
                            tango = _closure1_slot23;
                            mike = _closure1_slot18;
                            mike = mike.LURKING_GUILDS;
                            mike = tango.bind(options)(mike, verify, offset);
                            tango = oscar;
                            if(mike) { _fun00038_ip = 1181; continue _fun00037 }
 1156:
                            oscar = tango + 1;
                            offset = golf.bind(options)();
                            mike = offset.done;
                            report = offset;
                            entity = undefined;
                            if(mike) { _fun00038_ip = 1357; continue _fun00037 }
 1179:
                            _fun00038_ip = 1124; continue _fun00037;
 1181:
                            mike = {};
                            report = _closure1_slot15;
                            report = report.LURKING_GUILDS;
                            mike['section'] = report;
                            mike['item'] = tango;
                            entity = mike;
                            _fun00038_ip = 1357; continue _fun00037;
 1209:
                            mike = {};
                            tango = _closure1_slot15;
                            tango = tango.SEPARATOR;
                            mike['section'] = tango;
                            entity = mike;
                            _fun00038_ip = 1357; continue _fun00037;
 1233:
                            mike = {};
                            tango = _closure1_slot15;
                            tango = tango.UNREAD_PRIVATE_CHANNELS;
                            mike['section'] = tango;
                            entity = mike;
                            _fun00038_ip = 1357; continue _fun00037;
 1254:
                            mike = {};
                            tango = _closure1_slot15;
                            tango = tango.GUEST_GUILDS;
                            mike['section'] = tango;
                            entity = mike;
                            _fun00038_ip = 1357; continue _fun00037;
 1275:
                            mike = {};
                            tango = _closure1_slot15;
                            tango = tango.LURKING_GUILDS;
                            mike['section'] = tango;
                            entity = mike;
                            _fun00038_ip = 1357; continue _fun00037;
 1296:
                            mike = {};
                            tango = _closure1_slot15;
                            tango = tango.PENDING_JOIN_REQUESTS;
                            mike['section'] = tango;
                            entity = mike;
                            _fun00038_ip = 1357; continue _fun00037;
 1317:
                            mike = {};
                            tango = _closure1_slot15;
                            tango = tango.FAVORITES;
                            mike['section'] = tango;
                            entity = mike;
                            _fun00038_ip = 1357; continue _fun00037;
 1338:
                            mike = {};
                            zulu = _closure1_slot15;
                            zulu = zulu.MESSAGES;
                            mike['section'] = zulu;
                            entity = mike;
 1357:
                            return entity;
                        }
                    };
                    mike = 'getAnchorIndexFromId';
                    entity[mike] = zulu;
                    return entity;
                }
            };
            mike = tango.bind(report)(entity, mike);
            entity = {};
            entity['listProps'] = zulu;
            entity['listDataProps'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();