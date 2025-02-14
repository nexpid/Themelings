// app/modules/channel_list_v2/native/hooks/useChannelListData.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun116049: for(var _fun116049_ip = 0; ; ) switch(_fun116049_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun116049_ip = 46; continue _fun116049 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun116049_ip = 55; continue _fun116049 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun116049_ip = 345; continue _fun116049 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun116049_ip = 323; continue _fun116049 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun116049_ip = 283; continue _fun116049 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun116049_ip = 270; continue _fun116049 }
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
            if(!golf) { _fun116049_ip = 163; continue _fun116049 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun116049_ip = 179; continue _fun116049 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun116049_ip = 249; continue _fun116049 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun116049_ip = 249; continue _fun116049 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun116049_ip = 234; continue _fun116049 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun116049_ip = 247; continue _fun116049 }
 234:
            verify = _closure1_slot21;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun116049_ip = 265; continue _fun116049;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun116049_ip = 283; continue _fun116049;
 270:
            golf = _closure1_slot21;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun116049_ip = 323; continue _fun116049 }
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
            if(!tango) { _fun116049_ip = 330; continue _fun116049 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun116050: for(var _fun116050_ip = 0; ; ) switch(_fun116050_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun116050_ip = 56; continue _fun116050 }
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
                    _fun116050_ip = 67; continue _fun116050;
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
        _fun116051: for(var _fun116051_ip = 0; ; ) switch(_fun116051_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun116051_ip = 23; continue _fun116051 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun116051_ip = 33; continue _fun116051 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun116051_ip = 70; continue _fun116051 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun116051_ip = 55; continue _fun116051 }
 70:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
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
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.TABLE_ROW_HEIGHT;
    var _closure1_slot5 = tango;
    golf = 3;
    tango = oscar[golf];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
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
    options = tango.CATEGORY_MARGIN_TOP;
    var _closure1_slot11 = options;
    options = tango.getScaledCategoryRowHeight;
    var _closure1_slot12 = options;
    tango = tango.getScaledChannelRowHeight;
    var _closure1_slot13 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelTypes;
    var _closure1_slot14 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.StaticChannelRoute;
    var _closure1_slot15 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.ChannelListGuildActionRow;
    var _closure1_slot16 = options;
    tango = tango.ChannelListChannelNoticeRow;
    var _closure1_slot17 = tango;
    tango = {};
    tango['mass'] = golf;
    var _closure1_slot18 = tango;
    tango = {};
    golf = 'function useChannelListDataTsx1(finished){const{runOnJS,clearNavigationParams}=this.__closure;if(finished){runOnJS(clearNavigationParams)();}}';
    tango['code'] = golf;
    var _closure1_slot19 = tango;
    tango = 30;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/channel_list_v2/native/hooks/useChannelListData.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useChannelListData
        _fun116052: for(var _fun116052_ip = 0; ; ) switch(_fun116052_ip) {
 0:
            mike = argFoo;
            echo = mike.guildChannels;
            var _closure2_slot0 = echo;
            backup = mike.guildChannelsVersion;
            romeo = mike.layout;
            golf = undefined;
            if(!(romeo === golf)) { _fun116052_ip = 68; continue _fun116052 }
 33:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 12;
            zulu = report[zulu];
            zulu = tango.bind(golf)(zulu);
            zulu = zulu.ChannelListLayoutTypes;
            romeo = zulu.COMPACT;
 68:
            oscar = mike.listRef;
            foxtrot = mike.selectedChannelId;
            var _closure2_slot1 = foxtrot;
            var _closure2_slot2 = golf;
            var _closure2_slot3 = golf;
            var _closure2_slot4 = golf;
            var _closure2_slot5 = golf;
            var _closure2_slot6 = golf;
            var _closure2_slot7 = golf;
            var _closure2_slot8 = golf;
            var _closure2_slot9 = golf;
            var _closure2_slot10 = golf;
            var _closure2_slot11 = golf;
            var _closure2_slot12 = golf;
            var _closure2_slot13 = golf;
            var _closure2_slot14 = golf;
            source = echo.id;
            _closure2_slot2 = source;
            options = _closure1_slot4;
            tango = options.useState;
            zulu = function() {
                entity = global;
                entity = entity.Map;
                zulu = entity.prototype;
                zulu = Object.create(zulu, {constructor: {value: entity}});
                tango = zulu;
                entity = new tango[entity](zulu);
                entity = entity instanceof Object ? entity : zulu;
                var _closure3_slot0 = entity;
                entity = {};
                zulu = function(argFoo) { // Original name: get
                    _fun116054: for(var _fun116054_ip = 0; ; ) switch(_fun116054_ip) {
 0:
                        mike = argFoo;
                        report = _closure3_slot0;
                        tango = report.get;
                        entity = mike.itemKey;
                        entity = tango.bind(report)(entity);
                        tango = null;
                        tango = tango != entity;
                        if(!tango) { _fun116054_ip = 66; continue _fun116054 }
 35:
                        golf = _closure1_slot1;
                        oscar = _closure1_slot2;
                        report = 13;
                        report = oscar[report];
                        oscar = undefined;
                        report = golf.bind(oscar)(report);
                        tango = report.bind(oscar)(mike, entity);
 66:
                        if(tango) { _fun116054_ip = 93; continue _fun116054 }
 69:
                        report = _closure3_slot0;
                        tango = report.set;
                        zulu = mike.itemKey;
                        zulu = tango.bind(report)(zulu, mike);
                        entity = mike;
 93:
                        return entity;
                    }
                };
                entity['get'] = zulu;
                mike = function() { // Original name: clear
                    mike = _closure3_slot0;
                    entity = mike.clear;
                    entity = entity.bind(mike)();
                    entity = undefined;
                    return entity;
                };
                entity['clear'] = mike;
                return entity;
            };
            report = tango.bind(options)(zulu);
            tango = _closure1_slot3;
            zulu = 1;
            tango = tango.bind(golf)(report, zulu);
            zulu = 0;
            result = tango[zulu];
            _closure2_slot3 = result;
            report = options.useEffect;
            tango = new Array(2);
            tango[0] = result;
            tango[1] = source;
            zulu = function() {
                entity = function() {
                    zulu = _closure2_slot3;
                    mike = zulu.clear;
                    entity = _closure2_slot2;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                return entity;
            };
            zulu = report.bind(options)(zulu, tango);
            tango = echo.getSections;
            zulu = false;
            output = tango.bind(echo)(zulu);
            _closure2_slot4 = output;
            zulu = _closure1_slot0;
            update = _closure1_slot2;
            tango = 14;
            tango = update[tango];
            report = zulu.bind(golf)(tango);
            tango = report.useFontScale;
            offset = tango.bind(report)();
            _closure2_slot5 = offset;
            tango = 15;
            tango = update[tango];
            report = zulu.bind(golf)(tango);
            tango = report.useOptInEnabledForGuild;
            yankee = tango.bind(report)(source);
            tango = 16;
            tango = update[tango];
            verify = zulu.bind(golf)(tango);
            report = verify.useSectionsWithVoiceSummary;
            tango = {};
            tango['guildId'] = source;
            tango['sections'] = output;
            tango['guildChannels'] = echo;
            tango['guildChannelsVersion'] = backup;
            tango['optInEnabled'] = yankee;
            sizing = report.bind(verify)(tango);
            _closure2_slot6 = sizing;
            tango = 17;
            tango = update[tango];
            report = zulu.bind(golf)(tango);
            tango = report.useJumpToChannelId;
            report = tango.bind(report)();
            _closure2_slot7 = report;
            tango = _closure1_slot12;
            kilo = tango.bind(golf)(offset);
            _closure2_slot8 = kilo;
            tango = _closure1_slot13;
            verify = tango.bind(golf)(offset);
            _closure2_slot9 = verify;
            _closure2_slot10 = verify;
            tango = 18;
            tango = update[tango];
            yankee = zulu.bind(golf)(tango);
            tango = yankee.getLayoutStyles;
            backup = tango.bind(yankee)(romeo);
            _closure2_slot11 = backup;
            tango = 19;
            yankee = update[tango];
            vacuum = zulu.bind(golf)(yankee);
            control = vacuum.useStateFromStores;
            yankee = _closure1_slot8;
            romeo = new Array(1);
            romeo[0] = yankee;
            yankee = function() {
                zulu = _closure1_slot8;
                mike = zulu.getDirectoryChannelIds;
                entity = _closure2_slot2;
                mike = mike.bind(zulu)(entity);
                entity = 0;
                entity = mike[entity];
                return entity;
            };
            romeo = control.bind(vacuum)(romeo, yankee);
            _closure2_slot12 = romeo;
            tango = update[tango];
            vacuum = zulu.bind(golf)(tango);
            control = vacuum.useStateFromStores;
            tango = _closure1_slot9;
            yankee = new Array(2);
            yankee[0] = tango;
            mike = _closure1_slot7;
            yankee[1] = mike;
            tango = new Array(1);
            tango[0] = source;
            mike = function() {
                _fun116059: for(var _fun116059_ip = 0; ; ) switch(_fun116059_ip) {
 0:
                    tango = _closure1_slot9;
                    zulu = tango.getUserVoiceChannelId;
                    mike = _closure2_slot2;
                    report = _closure1_slot7;
                    entity = report.getId;
                    entity = entity.bind(report)();
                    mike = zulu.bind(tango)(mike, entity);
                    entity = null;
                    zulu = entity != mike;
                    entity = undefined;
                    if(!zulu) { _fun116059_ip = 54; continue _fun116059 }
 51:
                    entity = mike;
 54:
                    return entity;
                }
            };
            yankee = control.bind(vacuum)(yankee, mike, tango);
            _closure2_slot13 = yankee;
            mike = 20;
            mike = update[mike];
            tango = zulu.bind(golf)(mike);
            mike = tango.useGuildLiveChannelNoticeInfo;
            tango = mike.bind(tango)(source);
            mike = 21;
            mike = update[mike];
            zulu = zulu.bind(golf)(mike);
            mike = zulu.getScaledLiveChannelNoticeHeight;
            mike = mike.bind(zulu)(offset, tango);
            _closure2_slot14 = mike;
            tango = options.useMemo;
            zulu = new Array(15);
            zulu[0] = echo;
            zulu[1] = result;
            zulu[2] = output;
            zulu[3] = sizing;
            zulu[4] = kilo;
            kilo = backup.category;
            kilo = kilo.margin;
            kilo = kilo.marginTop;
            zulu[5] = kilo;
            backup = backup.voiceUsers;
            backup = backup.height;
            zulu[6] = backup;
            zulu[7] = verify;
            zulu[8] = foxtrot;
            zulu[9] = romeo;
            zulu[10] = yankee;
            zulu[11] = report;
            zulu[12] = offset;
            zulu[13] = verify;
            zulu[14] = mike;
            mike = function() {
                _fun116060: for(var _fun116060_ip = 0; ; ) switch(_fun116060_ip) {
 0:
                    whiskey = function(argFoo) { // Original name: mutateAndPushItem
                        _fun116061: for(var _fun116061_ip = 0; ; ) switch(_fun116061_ip) {
 0:
                            tango = argFoo;
                            entity = _closure3_slot4;
                            verify = entity.length;
                            tango['index'] = verify;
                            zulu = tango.kind;
                            oscar = 'channel';
                            if(!(oscar !== zulu)) { _fun116061_ip = 220; continue _fun116061 }
 37:
                            entity = 'thread';
                            if(!(entity !== zulu)) { _fun116061_ip = 171; continue _fun116061 }
 48:
                            entity = 'sectionHeaderCategory';
                            if(!(entity !== zulu)) { _fun116061_ip = 126; continue _fun116061 }
 58:
                            entity = 'sectionFooterVoice';
                            if(!(entity !== zulu)) { _fun116061_ip = 126; continue _fun116061 }
 68:
                            entity = 'sectionFooterSeparator';
                            if(!(entity !== zulu)) { _fun116061_ip = 88; continue _fun116061 }
 78:
                            entity = tango.kind;
                            _fun116061_ip = 271; continue _fun116061;
 88:
                            options = tango.kind;
                            zulu = global;
                            zulu = zulu.HermesInternal;
                            golf = zulu.concat;
                            report = '';
                            zulu = '-';
                            entity = golf.bind(report)(options, zulu, verify);
                            _fun116061_ip = 271; continue _fun116061;
 126:
                            verify = tango.kind;
                            zulu = tango.category;
                            options = zulu.id;
                            zulu = global;
                            zulu = zulu.HermesInternal;
                            golf = zulu.concat;
                            report = '';
                            zulu = '-';
                            entity = golf.bind(report)(verify, zulu, options);
                            _fun116061_ip = 271; continue _fun116061;
 171:
                            kilo = tango.kind;
                            foxtrot = tango.section;
                            yankee = tango.threadId;
                            zulu = global;
                            zulu = zulu.HermesInternal;
                            golf = zulu.concat;
                            sizing = '';
                            zulu = '-';
                            backup = zulu;
                            romeo = zulu;
                            entity = sizing[golf](kilo, backup, foxtrot, romeo, yankee, offset);
                            _fun116061_ip = 271; continue _fun116061;
 220:
                            kilo = tango.kind;
                            foxtrot = tango.section;
                            zulu = tango.channel;
                            yankee = zulu.id;
                            zulu = global;
                            zulu = zulu.HermesInternal;
                            golf = zulu.concat;
                            sizing = '';
                            zulu = '-';
                            backup = zulu;
                            romeo = zulu;
                            entity = sizing[golf](kilo, backup, foxtrot, romeo, yankee, offset);
 271:
                            tango['itemKey'] = entity;
                            entity = tango.kind;
                            zulu = 'sectionHeaderCategory';
                            entity = zulu === entity;
                            if(entity) { _fun116061_ip = 310; continue _fun116061 }
 295:
                            golf = tango.kind;
                            report = 'sectionHeaderFavorites';
                            entity = report === golf;
 310:
                            if(entity) { _fun116061_ip = 328; continue _fun116061 }
 313:
                            golf = tango.kind;
                            report = 'sectionHeaderRecents';
                            entity = report === golf;
 328:
                            if(entity) { _fun116061_ip = 346; continue _fun116061 }
 331:
                            golf = tango.kind;
                            report = 'sectionHeaderRecentlyVisited';
                            entity = report === golf;
 346:
                            if(entity) { _fun116061_ip = 416; continue _fun116061 }
 349:
                            report = tango.kind;
                            report = oscar === report;
                            if(!report) { _fun116061_ip = 388; continue _fun116061 }
 361:
                            oscar = tango.channel;
                            golf = oscar.type;
                            oscar = _closure1_slot14;
                            oscar = oscar.GUILD_CATEGORY;
                            report = golf === oscar;
 388:
                            if(!report) { _fun116061_ip = 413; continue _fun116061 }
 391:
                            golf = tango.section;
                            oscar = _closure2_slot0;
                            oscar = oscar.voiceChannelsSectionNumber;
                            report = golf === oscar;
 413:
                            entity = report;
 416:
                            if(!entity) { _fun116061_ip = 528; continue _fun116061 }
 419:
                            report = _closure3_slot0;
                            golf = null;
                            verify = golf == report;
                            oscar = undefined;
                            if(verify) { _fun116061_ip = 439; continue _fun116061 }
 434:
                            oscar = report.kind;
 439:
                            report = 'happeningNow';
                            report = report === oscar;
                            if(report) { _fun116061_ip = 478; continue _fun116061 }
 450:
                            oscar = _closure3_slot0;
                            verify = golf == oscar;
                            options = undefined;
                            if(verify) { _fun116061_ip = 468; continue _fun116061 }
 463:
                            options = oscar.kind;
 468:
                            oscar = 'sectionFooterSeparator';
                            report = oscar === options;
 478:
                            if(report) { _fun116061_ip = 489; continue _fun116061 }
 481:
                            oscar = _closure3_slot0;
                            report = golf == oscar;
 489:
                            if(report) { _fun116061_ip = 525; continue _fun116061 }
 492:
                            oscar = _closure3_slot0;
                            oscar = golf != oscar;
                            if(!oscar) { _fun116061_ip = 522; continue _fun116061 }
 503:
                            golf = _closure3_slot0;
                            options = golf.kind;
                            golf = 'newPanelsListHeader';
                            oscar = golf === options;
 522:
                            report = oscar;
 525:
                            entity = report;
 528:
                            if(!entity) { _fun116061_ip = 539; continue _fun116061 }
 531:
                            entity = true;
                            tango['isFirstCategory'] = entity;
 539:
                            entity = tango.kind;
                            if(!(zulu === entity)) { _fun116061_ip = 589; continue _fun116061 }
 548:
                            zulu = tango.isFirstCategory;
                            entity = _closure2_slot8;
                            if(zulu) { _fun116061_ip = 583; continue _fun116061 }
 564:
                            zulu = _closure1_slot11;
                            zulu = entity + zulu;
                            tango['height'] = zulu;
                            _fun116061_ip = 589; continue _fun116061;
 583:
                            tango['height'] = entity;
 589:
                            zulu = _closure3_slot2;
                            entity = tango.height;
                            entity = zulu + entity;
                            _closure3_slot2 = entity;
                            zulu = _closure2_slot3;
                            entity = zulu.get;
                            entity = entity.bind(zulu)(tango);
                            var _closure3_slot0 = entity;
                            tango = _closure3_slot4;
                            zulu = tango.push;
                            entity = _closure3_slot0;
                            entity = zulu.bind(tango)(entity);
                            tango = _closure1_slot0;
                            zulu = _closure1_slot2;
                            entity = 23;
                            zulu = zulu[entity];
                            entity = undefined;
                            report = tango.bind(entity)(zulu);
                            tango = report.isReadableItem;
                            zulu = _closure3_slot0;
                            zulu = tango.bind(report)(zulu);
                            if(!zulu) { _fun116061_ip = 706; continue _fun116061 }
 688:
                            tango = _closure3_slot5;
                            zulu = tango.push;
                            mike = _closure3_slot0;
                            mike = zulu.bind(tango)(mike);
 706:
                            return entity;
                        }
                    };
                    var _closure3_slot7 = whiskey;
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 22;
                    zulu = report[entity];
                    sierra = undefined;
                    zulu = tango.bind(sierra)(zulu);
                    zulu = zulu.DIVIDER_MARGIN_TOP;
                    entity = report[entity];
                    entity = tango.bind(sierra)(entity);
                    entity = entity.DIVIDER_MARGIN_BOTTOM;
                    entity = zulu + entity;
                    status = 1;
                    target = status + entity;
                    var _closure3_slot1 = target;
                    papa = 0;
                    var _closure3_slot2 = papa;
                    context = -1;
                    var _closure3_slot3 = context;
                    tango = new Array(0);
                    var _closure3_slot4 = tango;
                    zulu = new Array(0);
                    var _closure3_slot5 = zulu;
                    report = _closure1_slot20;
                    entity = _closure2_slot4;
                    config = report.bind(sierra)(entity);
                    report = config.bind(sierra)();
                    entity = report.done;
                    sequence = 'showAllVoiceChannelsButton';
                    vacuum = null;
                    control = 23;
                    source = 2;
                    update = 'sectionFooterVoice';
                    echo = 52;
                    result = 'sectionFooterSeparator';
                    output = false;
                    sizing = 'sectionHeaderRecents';
                    kilo = 'sectionHeaderVoiceChannels';
                    backup = 'sectionHeaderCategory';
                    foxtrot = 24;
                    romeo = report;
                    yankee = undefined;
                    offset = undefined;
                    verify = undefined;
                    options = undefined;
                    golf = undefined;
                    oscar = undefined;
                    report = undefined;
                    if(entity) { _fun116060_ip = 1346; continue _fun116060 }
 206:
                    variable46 = romeo.value;
                    variable40 = context + 1;
                    _closure3_slot3 = variable40;
                    if(!(papa === variable46)) { _fun116060_ip = 276; continue _fun116060 }
 222:
                    equality = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[control];
                    quebec = equality.bind(sierra)(entity);
                    equality = quebec.isVoiceChannelsSection;
                    entity = _closure2_slot0;
                    entity = equality.bind(quebec)(variable40, entity);
                    variable38 = yankee;
                    variable37 = offset;
                    variable36 = verify;
                    quebec = options;
                    equality = report;
                    if(!entity) { _fun116060_ip = 1310; continue _fun116060 }
 276:
                    variable39 = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[control];
                    variable41 = variable39.bind(sierra)(entity);
                    variable39 = variable41.isFavoritesSection;
                    entity = _closure2_slot0;
                    entity = variable39.bind(variable41)(variable40, entity);
                    if(entity) { _fun116060_ip = 790; continue _fun116060 }
 315:
                    variable39 = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[control];
                    variable41 = variable39.bind(sierra)(entity);
                    variable39 = variable41.isRecentsSection;
                    entity = _closure2_slot0;
                    entity = variable39.bind(variable41)(variable40, entity);
                    if(entity) { _fun116060_ip = 702; continue _fun116060 }
 354:
                    variable39 = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[control];
                    variable41 = variable39.bind(sierra)(entity);
                    variable39 = variable41.isVoiceChannelsSection;
                    entity = _closure2_slot0;
                    entity = variable39.bind(variable41)(variable40, entity);
                    if(entity) { _fun116060_ip = 571; continue _fun116060 }
 393:
                    variable39 = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[foxtrot];
                    entity = variable39.bind(sierra)(entity);
                    entity = entity.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                    variable45 = yankee;
                    variable44 = offset;
                    variable43 = verify;
                    variable42 = options;
                    if(!(variable40 >= entity)) { _fun116060_ip = 831; continue _fun116060 }
 435:
                    variable39 = _closure2_slot0;
                    entity = variable39.getNamedCategoryFromSection;
                    entity = entity.bind(variable39)(variable40);
                    variable45 = yankee;
                    variable44 = offset;
                    variable43 = verify;
                    variable42 = entity;
                    if(!(vacuum != entity)) { _fun116060_ip = 831; continue _fun116060 }
 469:
                    variable39 = {};
                    variable39['kind'] = backup;
                    variable39['section'] = variable40;
                    variable39['category'] = entity;
                    variable47 = _closure2_slot8;
                    variable48 = _closure1_slot0;
                    variable41 = _closure1_slot2;
                    variable41 = variable41[foxtrot];
                    variable41 = variable48.bind(sierra)(variable41);
                    variable48 = variable41.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                    variable41 = 0;
                    if(!(variable40 !== variable48)) { _fun116060_ip = 536; continue _fun116060 }
 516:
                    variable48 = _closure2_slot11;
                    variable48 = variable48.category;
                    variable48 = variable48.margin;
                    variable41 = variable48.marginTop;
 536:
                    variable41 = variable47 + variable41;
                    variable39['height'] = variable41;
                    variable39['isFirstCategory'] = output;
                    variable39 = whiskey.bind(sierra)(variable39);
                    variable45 = yankee;
                    variable44 = offset;
                    variable43 = verify;
                    variable42 = entity;
                    _fun116060_ip = 831; continue _fun116060;
 571:
                    variable41 = _closure2_slot0;
                    variable39 = variable41.getCategoryFromSection;
                    entity = variable41.voiceChannelsSectionNumber;
                    entity = variable39.bind(variable41)(entity);
                    variable39 = vacuum == entity;
                    if(variable39) { _fun116060_ip = 609; continue _fun116060 }
 599:
                    variable41 = entity.isEmpty;
                    variable39 = variable41.bind(entity)();
 609:
                    variable45 = yankee;
                    variable44 = offset;
                    variable43 = entity;
                    variable42 = options;
                    if(variable39) { _fun116060_ip = 831; continue _fun116060 }
 627:
                    variable39 = {};
                    variable39['kind'] = result;
                    variable39['height'] = target;
                    variable39 = whiskey.bind(sierra)(variable39);
                    variable39 = entity.isCollapsed;
                    variable45 = yankee;
                    variable44 = offset;
                    variable43 = entity;
                    variable42 = options;
                    if(!variable39) { _fun116060_ip = 831; continue _fun116060 }
 666:
                    variable39 = {};
                    variable39['kind'] = kilo;
                    variable41 = _closure2_slot8;
                    variable39['height'] = variable41;
                    variable39 = whiskey.bind(sierra)(variable39);
                    variable45 = yankee;
                    variable44 = offset;
                    variable43 = entity;
                    variable42 = options;
                    _fun116060_ip = 831; continue _fun116060;
 702:
                    variable41 = {};
                    variable41['kind'] = sizing;
                    entity = _closure2_slot8;
                    variable41['height'] = entity;
                    variable39 = _closure2_slot0;
                    entity = variable39.getCategoryFromSection;
                    entity = entity.bind(variable39)(variable40);
                    variable47 = vacuum == entity;
                    variable39 = undefined;
                    if(variable47) { _fun116060_ip = 750; continue _fun116060 }
 740:
                    variable47 = entity.getShownChannelAndThreadIds;
                    variable39 = variable47.bind(entity)();
 750:
                    variable47 = variable39;
                    if(!(vacuum == variable39)) { _fun116060_ip = 761; continue _fun116060 }
 757:
                    variable47 = new Array(0);
 761:
                    variable41['channelIds'] = variable47;
                    variable41['isFirstCategory'] = output;
                    variable41 = whiskey.bind(sierra)(variable41);
                    variable45 = variable39;
                    variable44 = entity;
                    variable43 = verify;
                    variable42 = options;
                    _fun116060_ip = 831; continue _fun116060;
 790:
                    entity = {'kind': 'sectionHeaderFavorites', 'height': null, 'isFirstCategory': false};
                    variable39 = _closure2_slot8;
                    entity['height'] = variable39;
                    entity = whiskey.bind(sierra)(entity);
                    variable45 = yankee;
                    variable44 = offset;
                    variable43 = verify;
                    variable42 = options;
 831:
                    variable41 = function() { // Original name: _loop
                        _fun116062: for(var _fun116062_ip = 0; ; ) switch(_fun116062_ip) {
 0:
                            oscar = _closure3_slot3;
                            golf = _closure1_slot0;
                            entity = _closure1_slot2;
                            options = 24;
                            report = entity[options];
                            entity = undefined;
                            report = golf.bind(entity)(report);
                            report = report.SECTION_INDEX_CHANNEL_NOTICES;
                            if(!(oscar !== report)) { _fun116062_ip = 915; continue _fun116062 }
 47:
                            oscar = _closure3_slot3;
                            golf = _closure1_slot0;
                            report = _closure1_slot2;
                            report = report[options];
                            report = golf.bind(entity)(report);
                            report = report.SECTION_INDEX_GUILD_ACTIONS;
                            if(!(oscar !== report)) { _fun116062_ip = 431; continue _fun116062 }
 81:
                            verify = _closure2_slot0;
                            golf = verify.getChannelFromSectionRow;
                            oscar = _closure3_slot3;
                            report = _closure3_slot6;
                            report = golf.bind(verify)(oscar, report);
                            offset = null;
                            if(!(offset != report)) { _fun116062_ip = 1072; continue _fun116062 }
 117:
                            report = report.channel;
                            var _closure4_slot0 = report;
                            golf = _closure2_slot9;
                            verify = report.record;
                            oscar = verify.isGuildVocal;
                            oscar = oscar.bind(verify)();
                            verify = golf;
                            if(!oscar) { _fun116062_ip = 265; continue _fun116062 }
 152:
                            romeo = _closure1_slot10;
                            yankee = romeo.countVoiceStatesForChannel;
                            oscar = report.id;
                            yankee = yankee.bind(romeo)(oscar);
                            oscar = 0;
                            verify = golf;
                            if(!(yankee > oscar)) { _fun116062_ip = 265; continue _fun116062 }
 181:
                            romeo = _closure1_slot0;
                            foxtrot = _closure1_slot2;
                            oscar = 25;
                            oscar = foxtrot[oscar];
                            kilo = romeo.bind(entity)(oscar);
                            backup = kilo.getVoiceUserHeight;
                            oscar = _closure2_slot5;
                            oscar = backup.bind(kilo)(oscar);
                            backup = oscar * yankee;
                            oscar = 26;
                            yankee = foxtrot[oscar];
                            yankee = romeo.bind(entity)(yankee);
                            yankee = yankee.VOICE_USERS_MARGIN_BOTTOM;
                            yankee = backup + yankee;
                            oscar = foxtrot[oscar];
                            oscar = romeo.bind(entity)(oscar);
                            oscar = oscar.VOICE_USERS_MARGIN_TOP;
                            oscar = yankee + oscar;
                            verify = golf + oscar;
 265:
                            golf = _closure3_slot7;
                            oscar = {};
                            yankee = 'channel';
                            oscar['kind'] = yankee;
                            yankee = report.record;
                            oscar['channel'] = yankee;
                            yankee = report.isMuted;
                            oscar['isMuted'] = yankee;
                            yankee = report.subtitle;
                            romeo = offset != yankee;
                            offset = undefined;
                            if(!romeo) { _fun116062_ip = 318; continue _fun116062 }
 315:
                            offset = yankee;
 318:
                            oscar['subtitle'] = offset;
                            offset = report.threadCount;
                            oscar['threadCount'] = offset;
                            offset = _closure3_slot3;
                            oscar['section'] = offset;
                            oscar['height'] = verify;
                            offset = report.id;
                            verify = _closure2_slot1;
                            verify = offset === verify;
                            if(verify) { _fun116062_ip = 375; continue _fun116062 }
 362:
                            yankee = report.id;
                            offset = _closure2_slot13;
                            verify = yankee === offset;
 375:
                            oscar['selected'] = verify;
                            verify = report.id;
                            options = _closure2_slot7;
                            options = verify === options;
                            oscar['needsJumpAndHighlight'] = options;
                            oscar = golf.bind(entity)(oscar);
                            oscar = report.threadIds;
                            report = oscar.forEach;
                            tango = function(argFoo, argBar) {
                                tango = argFoo;
                                zulu = _closure3_slot7;
                                mike = {};
                                report = 'thread';
                                mike['kind'] = report;
                                mike['threadId'] = tango;
                                report = argBar;
                                mike['threadIndex'] = report;
                                report = _closure4_slot0;
                                report = report.threadCount;
                                mike['threadCount'] = report;
                                entity = _closure3_slot3;
                                mike['section'] = entity;
                                report = _closure2_slot10;
                                mike['height'] = report;
                                entity = _closure2_slot1;
                                entity = tango === entity;
                                mike['selected'] = entity;
                                entity = undefined;
                                mike = zulu.bind(entity)(mike);
                                return entity;
                            };
                            tango = report.bind(oscar)(tango);
                            _fun116062_ip = 1072; continue _fun116062;
 431:
                            report = _closure2_slot0;
                            tango = report.getGuildActionSection;
                            golf = tango.bind(report)();
                            report = golf.getRow;
                            tango = _closure3_slot6;
                            golf = report.bind(golf)(tango);
                            tango = null;
                            if(!(tango != golf)) { _fun116062_ip = 1072; continue _fun116062 }
 472:
                            tango = _closure1_slot16;
                            tango = tango.GUILD_HUB_HEADER_OPTIONS;
                            if(!(golf !== tango)) { _fun116062_ip = 870; continue _fun116062 }
 489:
                            tango = _closure1_slot16;
                            tango = tango.GUILD_SCHEDULED_EVENTS;
                            if(!(golf !== tango)) { _fun116062_ip = 870; continue _fun116062 }
 506:
                            tango = _closure1_slot16;
                            tango = tango.GUILD_HOME;
                            if(!(golf !== tango)) { _fun116062_ip = 819; continue _fun116062 }
 523:
                            tango = _closure1_slot16;
                            tango = tango.GUILD_ROLE_SUBSCRIPTIONS;
                            if(!(golf !== tango)) { _fun116062_ip = 768; continue _fun116062 }
 540:
                            tango = _closure1_slot16;
                            tango = tango.CHANNELS_AND_ROLES;
                            if(!(golf !== tango)) { _fun116062_ip = 686; continue _fun116062 }
 557:
                            tango = _closure1_slot16;
                            tango = tango.GUILD_DIRECTORY;
                            if(!(golf !== tango)) { _fun116062_ip = 641; continue _fun116062 }
 571:
                            tango = _closure1_slot16;
                            tango = tango.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
                            if(!(golf === tango)) { _fun116062_ip = 1072; continue _fun116062 }
 588:
                            report = _closure3_slot7;
                            tango = {'kind': 'newMemberActions', 'height': 48};
                            tango = report.bind(entity)(tango);
                            tango = {};
                            options = 'sectionFooterSeparator';
                            tango['kind'] = options;
                            options = _closure3_slot1;
                            tango['height'] = options;
                            tango = report.bind(entity)(tango);
                            _fun116062_ip = 1072; continue _fun116062;
 641:
                            report = _closure3_slot7;
                            tango = {};
                            tango['kind'] = golf;
                            verify = _closure2_slot1;
                            options = _closure2_slot12;
                            options = verify === options;
                            tango['selected'] = options;
                            options = _closure2_slot9;
                            tango['height'] = options;
                            tango = report.bind(entity)(tango);
                            _fun116062_ip = 1072; continue _fun116062;
 686:
                            report = _closure3_slot7;
                            tango = {};
                            options = _closure1_slot16;
                            options = options.CHANNELS_AND_ROLES;
                            tango['kind'] = options;
                            verify = _closure2_slot1;
                            options = _closure1_slot15;
                            options = options.CHANNEL_BROWSER;
                            options = verify === options;
                            if(options) { _fun116062_ip = 745; continue _fun116062 }
 727:
                            offset = _closure2_slot1;
                            verify = _closure1_slot15;
                            verify = verify.CUSTOMIZE_COMMUNITY;
                            options = offset === verify;
 745:
                            tango['selected'] = options;
                            options = _closure2_slot9;
                            tango['height'] = options;
                            tango = report.bind(entity)(tango);
                            _fun116062_ip = 1072; continue _fun116062;
 768:
                            report = _closure3_slot7;
                            tango = {};
                            tango['kind'] = golf;
                            verify = _closure2_slot1;
                            options = _closure1_slot15;
                            options = options.ROLE_SUBSCRIPTIONS;
                            options = verify === options;
                            tango['selected'] = options;
                            options = _closure2_slot9;
                            tango['height'] = options;
                            tango = report.bind(entity)(tango);
                            _fun116062_ip = 1072; continue _fun116062;
 819:
                            report = _closure3_slot7;
                            tango = {};
                            tango['kind'] = golf;
                            verify = _closure2_slot1;
                            options = _closure1_slot15;
                            options = options.GUILD_HOME;
                            options = verify === options;
                            tango['selected'] = options;
                            options = _closure2_slot9;
                            tango['height'] = options;
                            tango = report.bind(entity)(tango);
                            _fun116062_ip = 1072; continue _fun116062;
 870:
                            tango = _closure1_slot16;
                            tango = tango.GUILD_SCHEDULED_EVENTS;
                            if(!(golf !== tango)) { _fun116062_ip = 1072; continue _fun116062 }
 887:
                            report = _closure3_slot7;
                            tango = {};
                            tango['kind'] = golf;
                            oscar = _closure2_slot9;
                            tango['height'] = oscar;
                            tango = report.bind(entity)(tango);
                            _fun116062_ip = 1072; continue _fun116062;
 915:
                            oscar = _closure2_slot0;
                            tango = oscar.getChannelNoticeSection;
                            golf = tango.bind(oscar)();
                            oscar = golf.getRow;
                            tango = _closure3_slot6;
                            tango = oscar.bind(golf)(tango);
                            oscar = null;
                            if(!(oscar != tango)) { _fun116062_ip = 1072; continue _fun116062 }
 953:
                            oscar = _closure1_slot17;
                            oscar = oscar.GUILD_PROGRESS;
                            if(!(tango !== oscar)) { _fun116062_ip = 1049; continue _fun116062 }
 967:
                            oscar = _closure1_slot17;
                            oscar = oscar.MFA_WARNING;
                            if(!(tango !== oscar)) { _fun116062_ip = 1024; continue _fun116062 }
 981:
                            zulu = _closure1_slot17;
                            zulu = zulu.LIVE_CHANNEL_NOTICE;
                            if(!(tango === zulu)) { _fun116062_ip = 1072; continue _fun116062 }
 995:
                            tango = _closure3_slot7;
                            zulu = {};
                            oscar = 'liveChannelNotice';
                            zulu['kind'] = oscar;
                            report = _closure2_slot14;
                            zulu['height'] = report;
                            zulu = tango.bind(entity)(zulu);
                            _fun116062_ip = 1072; continue _fun116062;
 1024:
                            tango = _closure3_slot7;
                            zulu = {'kind': 'mfaWarning', 'height': 48};
                            zulu = tango.bind(entity)(zulu);
                            _fun116062_ip = 1072; continue _fun116062;
 1049:
                            zulu = _closure3_slot7;
                            mike = {'kind': 'guildProgress', 'height': 48};
                            mike = zulu.bind(entity)(mike);
 1072:
                            return entity;
                        }
                    };
                    var _closure3_slot6 = papa;
                    variable47 = papa < variable46;
                    entity = 0;
                    variable39 = 0;
                    if(!variable47) { _fun116060_ip = 874; continue _fun116060 }
 853:
                    variable47 = variable41.bind(sierra)();
                    variable47 = entity + 1;
                    _closure3_slot6 = variable47;
                    entity = variable47;
                    variable39 = entity;
                    if(variable39 < variable46) { _fun116060_ip = 853; continue _fun116060 }
 874:
                    variable46 = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[control];
                    variable47 = variable46.bind(sierra)(entity);
                    variable46 = variable47.isFavoritesSection;
                    entity = _closure2_slot0;
                    entity = variable46.bind(variable47)(variable40, entity);
                    if(entity) { _fun116060_ip = 943; continue _fun116060 }
 910:
                    variable47 = _closure1_slot0;
                    variable46 = _closure1_slot2;
                    variable46 = variable46[control];
                    variable48 = variable47.bind(sierra)(variable46);
                    variable47 = variable48.isRecentsSection;
                    variable46 = _closure2_slot0;
                    entity = variable47.bind(variable48)(variable40, variable46);
 943:
                    if(!entity) { _fun116060_ip = 961; continue _fun116060 }
 946:
                    entity = {};
                    entity['kind'] = result;
                    entity['height'] = target;
                    entity = whiskey.bind(sierra)(entity);
 961:
                    entity = _closure2_slot6;
                    entity = variable40 in entity;
                    if(!entity) { _fun116060_ip = 1057; continue _fun116060 }
 972:
                    entity = _closure2_slot6;
                    entity = entity[variable40];
                    variable47 = entity.category;
                    variable46 = entity.activeVoiceChannels;
                    entity = {};
                    entity['kind'] = update;
                    entity['category'] = variable47;
                    entity['activeVoiceChannels'] = variable46;
                    variable46 = variable46.length;
                    variable47 = variable46 > status;
                    variable46 = echo;
                    if(variable47) { _fun116060_ip = 1048; continue _fun116060 }
 1021:
                    variable48 = _closure2_slot9;
                    variable47 = _closure2_slot11;
                    variable47 = variable47.voiceUsers;
                    variable47 = variable47.height;
                    variable47 = variable48 + variable47;
                    variable46 = variable47 - source;
 1048:
                    entity['height'] = variable46;
                    entity = whiskey.bind(sierra)(entity);
 1057:
                    variable46 = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[control];
                    variable47 = variable46.bind(sierra)(entity);
                    variable46 = variable47.isVoiceChannelsSection;
                    entity = _closure2_slot0;
                    entity = variable46.bind(variable47)(variable40, entity);
                    variable38 = variable45;
                    variable37 = variable44;
                    variable36 = variable43;
                    quebec = variable42;
                    golf = variable41;
                    oscar = variable39;
                    equality = report;
                    if(!entity) { _fun116060_ip = 1310; continue _fun116060 }
 1117:
                    variable46 = _closure2_slot0;
                    entity = variable46.getCategoryFromSection;
                    entity = entity.bind(variable46)(variable40);
                    variable38 = variable45;
                    variable37 = variable44;
                    variable36 = variable43;
                    quebec = variable42;
                    golf = variable41;
                    oscar = variable39;
                    equality = entity;
                    if(!(vacuum != equality)) { _fun116060_ip = 1310; continue _fun116060 }
 1160:
                    variable46 = entity.getHiddenChannelIds;
                    variable46 = variable46.bind(entity)();
                    variable46 = variable46.length;
                    if(!(!(variable46 > papa))) { _fun116060_ip = 1213; continue _fun116060 }
 1179:
                    variable46 = entity.isEmpty;
                    variable46 = variable46.bind(entity)();
                    variable38 = variable45;
                    variable37 = variable44;
                    variable36 = variable43;
                    quebec = variable42;
                    golf = variable41;
                    oscar = variable39;
                    equality = entity;
                    if(variable46) { _fun116060_ip = 1310; continue _fun116060 }
 1213:
                    variable46 = entity.getShownChannelIds;
                    variable46 = variable46.bind(entity)();
                    variable46 = variable46.length;
                    variable47 = entity.getShownChannelIds;
                    variable47 = variable47.bind(entity)();
                    variable46 = variable46 - status;
                    variable48 = variable47[variable46];
                    variable47 = _closure1_slot10;
                    variable46 = variable47.countVoiceStatesForChannel;
                    variable47 = variable46.bind(variable47)(variable48);
                    variable46 = {};
                    variable46['kind'] = sequence;
                    variable48 = _closure1_slot5;
                    variable46['height'] = variable48;
                    variable47 = variable47 > papa;
                    variable46['isLastShownChannelActive'] = variable47;
                    variable46 = whiskey.bind(sierra)(variable46);
                    variable38 = variable45;
                    variable37 = variable44;
                    variable36 = variable43;
                    quebec = variable42;
                    golf = variable41;
                    oscar = variable39;
                    equality = entity;
 1310:
                    variable39 = config.bind(sierra)();
                    entity = variable39.done;
                    yankee = variable38;
                    offset = variable37;
                    verify = variable36;
                    options = quebec;
                    report = equality;
                    context = variable40;
                    romeo = variable39;
                    if(!entity) { _fun116060_ip = 206; continue _fun116060 }
 1346:
                    entity = {};
                    entity['data'] = tango;
                    entity['unreadBarsData'] = zulu;
                    mike = _closure3_slot2;
                    entity['estimateContentHeight'] = mike;
                    return entity;
                }
            };
            mike = tango.bind(options)(mike, zulu);
            tango = mike.data;
            zulu = mike.unreadBarsData;
            mike = mike.estimateContentHeight;
            entity = function(argFoo, argBar, argBaz) { // Original name: useJumpToChannel
                tango = argFoo;
                options = argBar;
                oscar = argBaz;
                var _closure3_slot0 = tango;
                var _closure3_slot1 = options;
                var _closure3_slot2 = oscar;
                golf = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 27;
                zulu = zulu[entity];
                entity = undefined;
                golf = golf.bind(entity)(zulu);
                zulu = golf.useNavigation;
                zulu = zulu.bind(golf)();
                var _closure3_slot3 = zulu;
                report = _closure1_slot4;
                verify = report.useCallback;
                golf = new Array(1);
                golf[0] = zulu;
                zulu = function() {
                    tango = _closure3_slot3;
                    zulu = tango.setParams;
                    mike = {};
                    entity = undefined;
                    mike['jumpToChannelId'] = entity;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                golf = verify.bind(report)(zulu, golf);
                var _closure3_slot4 = golf;
                zulu = report.useRef;
                zulu = zulu.bind(report)(tango);
                var _closure3_slot5 = zulu;
                tango = report.useEffect;
                zulu = function() {
                    mike = _closure3_slot5;
                    entity = _closure3_slot0;
                    mike['current'] = entity;
                    entity = undefined;
                    return entity;
                };
                zulu = tango.bind(report)(zulu);
                tango = report.useEffect;
                zulu = new Array(3);
                zulu[0] = options;
                zulu[1] = golf;
                zulu[2] = oscar;
                mike = function() {
                    _fun116067: for(var _fun116067_ip = 0; ; ) switch(_fun116067_ip) {
 0:
                        mike = _closure3_slot1;
                        zulu = null;
                        if(!(zulu != mike)) { _fun116067_ip = 351; continue _fun116067 }
 18:
                        tango = _closure1_slot6;
                        oscar = tango.useReducedMotion;
                        tango = _closure3_slot5;
                        golf = tango.current;
                        report = golf.findIndex;
                        tango = function(argFoo) {
                            _fun116068: for(var _fun116068_ip = 0; ; ) switch(_fun116068_ip) {
 0:
                                mike = argFoo;
                                zulu = mike.kind;
                                entity = 'channel';
                                entity = entity === zulu;
                                if(!entity) { _fun116068_ip = 25; continue _fun116068 }
 19:
                                entity = mike.needsJumpAndHighlight;
 25:
                                return entity;
                            }
                        };
                        golf = report.bind(golf)(tango);
                        backup = 0;
                        if(!(!(golf < backup))) { _fun116067_ip = 341; continue _fun116067 }
 67:
                        tango = _closure3_slot2;
                        report = tango.current;
                        if(!(zulu != report)) { _fun116067_ip = 120; continue _fun116067 }
 80:
                        tango = report.scrollToIndex;
                        zulu = {};
                        zulu['index'] = golf;
                        oscar = !oscar;
                        zulu['animated'] = oscar;
                        oscar = 0.5;
                        zulu['viewPosition'] = oscar;
                        zulu = tango.bind(report)(zulu);
 120:
                        result = _closure1_slot0;
                        echo = _closure1_slot2;
                        zulu = 17;
                        zulu = echo[zulu];
                        output = undefined;
                        zulu = result.bind(output)(zulu);
                        tango = zulu.jumpToChannelHighlightOpacity;
                        zulu = tango.set;
                        sizing = 28;
                        report = echo[sizing];
                        golf = result.bind(output)(report);
                        oscar = golf.withSequence;
                        yankee = 29;
                        report = echo[yankee];
                        offset = result.bind(output)(report);
                        verify = offset.withSpring;
                        foxtrot = _closure1_slot18;
                        report = 1;
                        report = verify.bind(offset)(report, foxtrot);
                        verify = echo[sizing];
                        offset = result.bind(output)(verify);
                        verify = offset.withDelay;
                        yankee = echo[yankee];
                        romeo = result.bind(output)(yankee);
                        yankee = romeo.withSpring;
                        options = function(argFoo) { // Original name: t
                            _fun116069: for(var _fun116069_ip = 0; ; ) switch(_fun116069_ip) {
 0:
                                entity = argFoo;
                                if(!entity) { _fun116069_ip = 52; continue _fun116069 }
 6:
                                zulu = _closure1_slot0;
                                mike = _closure1_slot2;
                                entity = 28;
                                entity = mike[entity];
                                mike = undefined;
                                tango = zulu.bind(mike)(entity);
                                zulu = tango.runOnJS;
                                entity = _closure3_slot4;
                                entity = zulu.bind(tango)(entity);
                                entity = entity.bind(mike)();
 52:
                                entity = undefined;
                                return entity;
                            }
                        };
                        kilo = {};
                        sizing = echo[sizing];
                        sizing = result.bind(output)(sizing);
                        sizing = sizing.runOnJS;
                        kilo['runOnJS'] = sizing;
                        sizing = _closure3_slot4;
                        kilo['clearNavigationParams'] = sizing;
                        options['__closure'] = kilo;
                        kilo = 4258427482717.0;
                        options['__workletHash'] = kilo;
                        mike = _closure1_slot19;
                        options['__initData'] = mike;
                        source = 'respect-motion-settings';
                        sequence = romeo;
                        vacuum = 0;
                        control = foxtrot;
                        update = options;
                        options = sequence[yankee](vacuum, control, source, update, echo);
                        mike = 150;
                        mike = verify.bind(offset)(mike, options);
                        mike = oscar.bind(golf)(report, mike);
                        mike = zulu.bind(tango)(mike);
                        _fun116067_ip = 351; continue _fun116067;
 341:
                        mike = _closure3_slot4;
                        entity = undefined;
                        entity = mike.bind(entity)();
 351:
                        entity = undefined;
                        return entity;
                    }
                };
                mike = tango.bind(report)(mike, zulu);
                return entity;
            };
            entity = entity.bind(golf)(tango, report, oscar);
            entity = {};
            entity['data'] = tango;
            entity['unreadBarsData'] = zulu;
            entity['estimateContentHeight'] = mike;
            return entity;
        }
    };
    zulu['useChannelListData'] = mike;
    return entity;
})();