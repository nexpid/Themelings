// app/modules/guild_sidebar/FavoritesServerChannelList.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
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
    mike = function() { // Original name: computeFavoritesState
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = function(argFoo, argBar) { // Original name: makeChannelList
                mike = argBar;
                var _closure3_slot0 = mike;
                zulu = mike.isCollapsed;
                var _closure3_slot1 = zulu;
                mike = mike.isMuted;
                var _closure3_slot2 = mike;
                tango = _closure1_slot1;
                golf = _closure1_slot2;
                zulu = 19;
                zulu = golf[zulu];
                oscar = undefined;
                tango = tango.bind(oscar)(zulu);
                zulu = argFoo;
                report = tango.bind(oscar)(zulu);
                tango = report.map;
                zulu = function(argFoo) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        zulu = argFoo;
                        entity = zulu.isPrivate;
                        entity = entity.bind(zulu)();
                        if(entity) { _fun00010_ip = 52; continue _fun00009 }
 16:
                        tango = _closure1_slot13;
                        mike = tango.can;
                        entity = _closure1_slot18;
                        entity = entity.VIEW_CHANNEL;
                        entity = mike.bind(tango)(entity, zulu);
                        if(entity) { _fun00010_ip = 52; continue _fun00009 }
 48:
                        entity = null;
                        return entity;
 52:
                        entity = _closure2_slot2;
                        mike = null;
                        yankee = mike != entity;
                        if(!yankee) { _fun00010_ip = 105; continue _fun00009 }
 68:
                        entity = _closure2_slot2;
                        tango = entity.id;
                        entity = zulu.id;
                        entity = tango === entity;
                        if(entity) { _fun00010_ip = 102; continue _fun00009 }
 89:
                        report = _closure2_slot3;
                        tango = zulu.id;
                        entity = report === tango;
 102:
                        yankee = entity;
 105:
                        entity = _closure2_slot2;
                        offset = mike != entity;
                        if(!offset) { _fun00010_ip = 130; continue _fun00009 }
 116:
                        tango = _closure2_slot2;
                        entity = tango.isThread;
                        offset = entity.bind(tango)();
 130:
                        if(!offset) { _fun00010_ip = 152; continue _fun00009 }
 133:
                        entity = _closure2_slot2;
                        tango = entity.parent_id;
                        entity = zulu.id;
                        offset = tango === entity;
 152:
                        if(yankee) { _fun00010_ip = 199; continue _fun00009 }
 155:
                        if(offset) { _fun00010_ip = 199; continue _fun00009 }
 158:
                        entity = _closure3_slot1;
                        if(!entity) { _fun00010_ip = 199; continue _fun00009 }
 168:
                        oscar = _closure1_slot7;
                        report = oscar.getActiveJoinedUnreadThreadsForParent;
                        tango = zulu.guild_id;
                        entity = zulu.id;
                        sizing = report.bind(oscar)(tango, entity);
                        _fun00010_ip = 228; continue _fun00009;
 199:
                        oscar = _closure1_slot7;
                        report = oscar.getActiveJoinedRelevantThreadsForParent;
                        tango = zulu.guild_id;
                        entity = zulu.id;
                        sizing = report.bind(oscar)(tango, entity);
 228:
                        if(!(mike == sizing)) { _fun00010_ip = 234; continue _fun00009 }
 232:
                        sizing = {};
 234:
                        foxtrot = _closure1_slot0;
                        kilo = _closure1_slot2;
                        romeo = 21;
                        entity = kilo[romeo];
                        options = undefined;
                        backup = foxtrot.bind(options)(entity);
                        golf = backup.computeThreadIds;
                        update = _closure2_slot2;
                        echo = _closure2_slot3;
                        result = _closure2_slot1;
                        vacuum = backup;
                        control = zulu;
                        source = sizing;
                        output = vacuum[golf](control, source, update, echo, result, output);
                        oscar = _closure1_slot12;
                        tango = oscar.isCollapsed;
                        entity = zulu.id;
                        backup = tango.bind(oscar)(entity);
                        golf = _closure1_slot16;
                        oscar = golf.isChannelMuted;
                        tango = zulu.guild_id;
                        entity = zulu.id;
                        golf = oscar.bind(golf)(tango, entity);
                        entity = {};
                        tango = zulu.id;
                        entity['id'] = tango;
                        entity['record'] = zulu;
                        tango = _closure3_slot0;
                        entity['category'] = tango;
                        sizing = _closure2_slot0;
                        tango = zulu.id;
                        tango = sizing[tango];
                        tango = tango.order;
                        entity['position'] = tango;
                        entity['threadIds'] = output;
                        sizing = _closure1_slot1;
                        tango = 19;
                        tango = kilo[tango];
                        sizing = sizing.bind(options)(tango);
                        tango = sizing.size;
                        tango = tango.bind(sizing)(output);
                        entity['threadCount'] = tango;
                        entity['isCollapsed'] = backup;
                        entity['isMuted'] = golf;
                        tango = false;
                        entity['isFirstVoiceChannel'] = tango;
                        romeo = kilo[romeo];
                        foxtrot = foxtrot.bind(options)(romeo);
                        romeo = foxtrot.computeSubtitle;
                        romeo = romeo.bind(foxtrot)(zulu, backup, tango);
                        entity['subtitle'] = romeo;
                        if(yankee) { _fun00010_ip = 596; continue _fun00009 }
 474:
                        if(offset) { _fun00010_ip = 596; continue _fun00009 }
 477:
                        romeo = _closure1_slot14;
                        yankee = romeo.getMentionCount;
                        offset = zulu.id;
                        yankee = yankee.bind(romeo)(offset);
                        offset = 0;
                        if(!(!(yankee > offset))) { _fun00010_ip = 596; continue _fun00009 }
 503:
                        verify = _closure2_slot1;
                        if(!verify) { _fun00010_ip = 513; continue _fun00009 }
 510:
                        if(golf) { _fun00010_ip = 594; continue _fun00009 }
 513:
                        verify = _closure3_slot1;
                        if(!verify) { _fun00010_ip = 588; continue _fun00009 }
 520:
                        if(golf) { _fun00010_ip = 592; continue _fun00009 }
 523:
                        oscar = _closure3_slot2;
                        if(oscar) { _fun00010_ip = 592; continue _fun00009 }
 530:
                        golf = _closure1_slot9;
                        oscar = zulu.type;
                        oscar = golf.bind(options)(oscar);
                        if(oscar) { _fun00010_ip = 592; continue _fun00009 }
 547:
                        golf = _closure1_slot8;
                        oscar = zulu.type;
                        oscar = golf.bind(options)(oscar);
                        if(!oscar) { _fun00010_ip = 588; continue _fun00009 }
 564:
                        oscar = _closure1_slot14;
                        report = oscar.hasUnread;
                        zulu = zulu.id;
                        zulu = report.bind(oscar)(zulu);
                        if(!(tango !== zulu)) { _fun00010_ip = 590; continue _fun00009 }
 588:
                        return entity;
 590:
                        return mike;
 592:
                        return mike;
 594:
                        return mike;
 596:
                        return entity;
                    }
                };
                tango = tango.bind(report)(zulu);
                zulu = tango.filter;
                report = _closure1_slot0;
                mike = 22;
                mike = golf[mike];
                mike = report.bind(oscar)(mike);
                mike = mike.isNotNullish;
                zulu = zulu.bind(tango)(mike);
                mike = zulu.sortBy;
                entity = function(argFoo) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        entity = argFoo;
                        mike = entity.record;
                        entity = mike.isGuildVocal;
                        entity = entity.bind(mike)();
                        zulu = mike.position;
                        if(entity) { _fun00012_ip = 32; continue _fun00011 }
 27:
                        entity = zulu;
                        _fun00012_ip = 42; continue _fun00011;
 32:
                        mike = 10000;
                        entity = zulu + mike;
 42:
                        return entity;
                    }
                };
                mike = mike.bind(zulu)(entity);
                entity = mike.value;
                entity = entity.bind(mike)();
                return entity;
            };
            var _closure2_slot11 = entity;
            zulu = _closure1_slot5;
            entity = zulu.getFavoriteChannels;
            oscar = entity.bind(zulu)();
            var _closure2_slot0 = oscar;
            report = _closure1_slot16;
            zulu = report.isGuildCollapsed;
            entity = _closure1_slot17;
            zulu = zulu.bind(report)(entity);
            var _closure2_slot1 = zulu;
            report = _closure1_slot15;
            entity = report.getChannelId;
            golf = entity.bind(report)();
            report = _closure1_slot11;
            entity = report.getChannel;
            entity = entity.bind(report)(golf);
            var _closure2_slot2 = entity;
            report = _closure1_slot15;
            entity = report.getVoiceChannelId;
            entity = entity.bind(report)();
            var _closure2_slot3 = entity;
            kilo = new Array(0);
            var _closure2_slot4 = kilo;
            backup = {};
            var _closure2_slot5 = backup;
            romeo = oscar;
            report = undefined;
            entity = null;
            options = 20;
            golf = undefined;
            for(verify in romeo)
 144:
            {
 156:
                sizing = verify;
                output = oscar[sizing];
                echo = _closure1_slot11;
                result = echo.getChannel;
                sizing = output.id;
                result = result.bind(echo)(sizing);
                if(entity == result) { _fun00008_ip = 144; continue _fun00007 }
 186:
                echo = output.type;
                update = _closure1_slot0;
                sizing = _closure1_slot2;
                sizing = sizing[options];
                sizing = update.bind(report)(sizing);
                sizing = sizing.FavoriteChannelType;
                sizing = sizing.CATEGORY;
                if(echo === sizing) { _fun00008_ip = 144; continue _fun00007 }
 224:
                sizing = _closure1_slot6;
                sizing = sizing.bind(report)(oscar, output, result);
                result = output.parentId;
                if(!(entity != result)) { _fun00008_ip = 258; continue _fun00007 }
 245:
                result = output.parentId;
                result = result in oscar;
                if(result) { _fun00008_ip = 273; continue _fun00007 }
 258:
                result = kilo.push;
                result = result.bind(kilo)(sizing);
                golf = sizing;
                _fun00008_ip = 144; continue _fun00007;
 273:
                result = output.parentId;
                result = result in backup;
                if(result) { _fun00008_ip = 300; continue _fun00007 }
 286:
                echo = output.parentId;
                result = new Array(0);
                backup[echo] = result;
 300:
                output = output.parentId;
                result = backup[output];
                output = result.push;
                output = output.bind(result)(sizing);
                golf = sizing;
                _fun00008_ip = 144; continue _fun00007;
            }
 328:
            var _closure2_slot6 = entity;
            entity = {'isMuted': false, 'isCollapsed': false, 'position': 0};
            golf = function() { // Original name: getChannelRecords
                entity = _closure2_slot4;
                return entity;
            };
            entity['getChannelRecords'] = golf;
            golf = function() { // Original name: getShownChannelIds
                zulu = _closure2_slot4;
                mike = zulu.map;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.id;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['getShownChannelIds'] = golf;
            golf = function() { // Original name: getShownChannelAndThreadIds
                zulu = _closure2_slot4;
                mike = zulu.map;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.id;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['getShownChannelAndThreadIds'] = golf;
            golf = function() { // Original name: isEmpty
                entity = _closure2_slot4;
                mike = entity.length;
                entity = 0;
                entity = entity === mike;
                return entity;
            };
            entity['isEmpty'] = golf;
            options = function() { // Original name: get channelList
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = _closure2_slot6;
                    mike = null;
                    if(!(mike == zulu)) { _fun00014_ip = 36; continue _fun00013 }
 13:
                    report = _closure2_slot11;
                    tango = _closure2_slot4;
                    zulu = undefined;
                    mike = this;
                    mike = report.bind(zulu)(tango, mike);
                    _closure2_slot6 = mike;
 36:
                    entity = _closure2_slot6;
                    return entity;
                }
            };
            golf = 'channelList';
            Object.defineProperty(entity, golf, {get: options, set: report, enumerable: true});
            var _closure2_slot7 = entity;
            golf = _closure1_slot1;
            options = _closure1_slot2;
            entity = 19;
            entity = options[entity];
            entity = golf.bind(report)(entity);
            report = entity.bind(report)(oscar);
            entity = report.values;
            oscar = entity.bind(report)();
            report = oscar.filter;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 20;
                zulu = zulu[entity];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                entity = entity.FavoriteChannelType;
                entity = entity.CATEGORY;
                entity = mike === entity;
                return entity;
            };
            oscar = report.bind(oscar)(entity);
            report = oscar.sortBy;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.order;
                return entity;
            };
            oscar = report.bind(oscar)(entity);
            report = oscar.map;
            entity = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = argFoo;
                    report = entity.id;
                    zulu = entity.order;
                    tango = undefined;
                    var _closure3_slot0 = tango;
                    var _closure3_slot1 = tango;
                    oscar = _closure1_slot5;
                    entity = oscar.getCategoryRecord;
                    oscar = entity.bind(oscar)(report);
                    entity = _closure2_slot5;
                    options = entity[report];
                    entity = null;
                    if(!(entity == options)) { _fun00016_ip = 65; continue _fun00015 }
 61:
                    options = new Array(0);
 65:
                    _closure3_slot0 = options;
                    offset = _closure1_slot16;
                    verify = offset.isChannelMuted;
                    options = _closure1_slot17;
                    options = verify.bind(offset)(options, report);
                    verify = _closure1_slot10;
                    golf = verify.isCollapsed;
                    golf = golf.bind(verify)(report);
                    _closure3_slot1 = entity;
                    entity = {};
                    entity['isMuted'] = options;
                    entity['isCollapsed'] = golf;
                    entity['record'] = oscar;
                    entity['id'] = report;
                    entity['position'] = zulu;
                    zulu = function() { // Original name: getChannelRecords
                        entity = _closure3_slot0;
                        return entity;
                    };
                    entity['getChannelRecords'] = zulu;
                    zulu = function() { // Original name: getShownChannelIds
                        zulu = _closure3_slot0;
                        mike = zulu.map;
                        entity = function(argFoo) {
                            entity = argFoo;
                            entity = entity.id;
                            return entity;
                        };
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    entity['getShownChannelIds'] = zulu;
                    zulu = function() { // Original name: getShownChannelAndThreadIds
                        zulu = _closure3_slot0;
                        mike = zulu.map;
                        entity = function(argFoo) {
                            entity = argFoo;
                            entity = entity.id;
                            return entity;
                        };
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    entity['getShownChannelAndThreadIds'] = zulu;
                    zulu = function() { // Original name: isEmpty
                        entity = _closure3_slot0;
                        mike = entity.length;
                        entity = 0;
                        entity = entity === mike;
                        return entity;
                    };
                    entity['isEmpty'] = zulu;
                    zulu = function() { // Original name: get channelList
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            zulu = _closure3_slot1;
                            mike = null;
                            if(!(mike == zulu)) { _fun00018_ip = 39; continue _fun00017 }
 13:
                            report = _closure2_slot11;
                            tango = _closure3_slot0;
                            zulu = undefined;
                            mike = this;
                            mike = report.bind(zulu)(tango, mike);
                            _closure3_slot1 = mike;
 39:
                            entity = _closure3_slot1;
                            return entity;
                        }
                    };
                    mike = 'channelList';
                    Object.defineProperty(entity, mike, {get: zulu, set: tango, enumerable: true});
                    return entity;
                }
            };
            report = report.bind(oscar)(entity);
            entity = report.value;
            entity = entity.bind(report)();
            var _closure2_slot8 = entity;
            entity = {};
            report = function() { // Original name: isEmpty
                entity = true;
                return entity;
            };
            entity['isEmpty'] = report;
            report = function() { // Original name: getRows
                entity = new Array(0);
                return entity;
            };
            entity['getRows'] = report;
            report = function() { // Original name: getRow
                entity = null;
                return entity;
            };
            entity['getRow'] = report;
            var _closure2_slot9 = entity;
            entity = {};
            report = function() { // Original name: isEmpty
                entity = true;
                return entity;
            };
            entity['isEmpty'] = report;
            report = function() { // Original name: getRows
                entity = new Array(0);
                return entity;
            };
            entity['getRows'] = report;
            report = function() { // Original name: getRow
                entity = null;
                return entity;
            };
            entity['getRow'] = report;
            var _closure2_slot10 = entity;
            entity = {'id': null, 'hideMutedChannels': null, 'favoritesSectionNumber': 1, 'recentsSectionNumber': 2, 'voiceChannelsSectionNumber': 4294966297};
            tango = _closure1_slot17;
            entity['id'] = tango;
            entity['hideMutedChannels'] = zulu;
            zulu = function() { // Original name: getSections
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = new Array(0);
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    options = 21;
                    tango = mike[options];
                    golf = undefined;
                    tango = zulu.bind(golf)(tango);
                    tango = tango.SECTION_INDEX_CHANNEL_NOTICES;
                    oscar = 0;
                    entity[tango] = oscar;
                    tango = mike[options];
                    tango = zulu.bind(golf)(tango);
                    tango = tango.SECTION_INDEX_GUILD_ACTIONS;
                    entity[tango] = oscar;
                    tango = mike[options];
                    tango = zulu.bind(golf)(tango);
                    tango = tango.SECTION_INDEX_FAVORITES;
                    entity[tango] = oscar;
                    tango = mike[options];
                    tango = zulu.bind(golf)(tango);
                    tango = tango.SECTION_INDEX_RECENTS;
                    entity[tango] = oscar;
                    mike = mike[options];
                    mike = zulu.bind(golf)(mike);
                    zulu = mike.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
                    mike = _closure2_slot7;
                    mike = mike.channelList;
                    mike = mike.length;
                    entity[zulu] = mike;
                    mike = _closure2_slot8;
                    mike = mike.length;
                    mike = oscar < mike;
                    tango = global;
                    zulu = 1;
                    if(!mike) { _fun00020_ip = 239; continue _fun00019 }
 156:
                    offset = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[options];
                    mike = offset.bind(golf)(mike);
                    mike = mike.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                    offset = mike + oscar;
                    romeo = tango.Math;
                    yankee = romeo.max;
                    mike = _closure2_slot8;
                    mike = mike[oscar];
                    mike = mike.channelList;
                    mike = mike.length;
                    mike = yankee.bind(romeo)(zulu, mike);
                    entity[offset] = mike;
                    oscar = oscar + 1;
                    mike = _closure2_slot8;
                    mike = mike.length;
                    if(oscar < mike) { _fun00020_ip = 156; continue _fun00019 }
 239:
                    return entity;
                }
            };
            entity['getSections'] = zulu;
            zulu = function(argFoo, argBar) { // Original name: isPlaceholderRow
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    tango = argFoo;
                    zulu = _closure1_slot0;
                    entity = _closure1_slot2;
                    golf = 21;
                    entity = entity[golf];
                    oscar = undefined;
                    entity = zulu.bind(oscar)(entity);
                    entity = entity.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                    zulu = tango < entity;
                    if(zulu) { _fun00022_ip = 50; continue _fun00021 }
 41:
                    report = 0;
                    entity = argBar;
                    zulu = report !== entity;
 50:
                    entity = !zulu;
                    if(zulu) { _fun00022_ip = 111; continue _fun00021 }
 56:
                    zulu = _closure2_slot8;
                    report = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[golf];
                    mike = report.bind(oscar)(mike);
                    mike = mike.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                    mike = tango - mike;
                    mike = zulu[mike];
                    mike = mike.channelList;
                    zulu = mike.length;
                    mike = 0;
                    entity = mike === zulu;
 111:
                    return entity;
                }
            };
            entity['isPlaceholderRow'] = zulu;
            zulu = function(argFoo) { // Original name: getCategoryFromSection
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    zulu = argFoo;
                    tango = _closure1_slot0;
                    mike = _closure1_slot2;
                    oscar = 21;
                    mike = mike[oscar];
                    report = undefined;
                    mike = tango.bind(report)(mike);
                    mike = mike.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
                    if(!(zulu !== mike)) { _fun00024_ip = 78; continue _fun00023 }
 38:
                    mike = _closure2_slot8;
                    tango = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[oscar];
                    entity = tango.bind(report)(entity);
                    entity = entity.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                    entity = zulu - entity;
                    entity = mike[entity];
                    _fun00024_ip = 85; continue _fun00023;
 78:
                    entity = _closure2_slot7;
 85:
                    return entity;
                }
            };
            entity['getCategoryFromSection'] = zulu;
            zulu = function(argFoo) { // Original name: getNamedCategoryFromSection
                mike = _closure2_slot8;
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 21;
                zulu = zulu[entity];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                zulu = entity.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                entity = argFoo;
                entity = entity - zulu;
                entity = mike[entity];
                return entity;
            };
            entity['getNamedCategoryFromSection'] = zulu;
            zulu = function(argFoo, argBar) { // Original name: getChannelFromSectionRow
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    tango = argBar;
                    zulu = this;
                    mike = zulu.getCategoryFromSection;
                    entity = argFoo;
                    zulu = mike.bind(zulu)(entity);
                    report = null;
                    mike = report == zulu;
                    entity = null;
                    if(mike) { _fun00026_ip = 73; continue _fun00025 }
 31:
                    mike = zulu.channelList;
                    mike = mike[tango];
                    mike = report == mike;
                    entity = null;
                    if(mike) { _fun00026_ip = 73; continue _fun00025 }
 50:
                    mike = {};
                    mike['category'] = zulu;
                    zulu = zulu.channelList;
                    zulu = zulu[tango];
                    mike['channel'] = zulu;
                    entity = mike;
 73:
                    return entity;
                }
            };
            entity['getChannelFromSectionRow'] = zulu;
            zulu = function() { // Original name: getGuildActionSection
                entity = _closure2_slot9;
                return entity;
            };
            entity['getGuildActionSection'] = zulu;
            zulu = function() { // Original name: getChannelNoticeSection
                entity = _closure2_slot10;
                return entity;
            };
            entity['getChannelNoticeSection'] = zulu;
            zulu = function() { // Original name: getFirstVoiceChannel
                entity = null;
                return entity;
            };
            entity['getFirstVoiceChannel'] = zulu;
            zulu = function(argFoo) { // Original name: getSectionRowsFromChannel
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    golf = argFoo;
                    mike = _closure2_slot7;
                    oscar = new Array(1);
                    oscar[0] = mike;
                    offset = _closure2_slot8;
                    verify = 1;
                    yankee = oscar;
                    entity = arraySpread(yankee, offset, verify);
                    entity = oscar.length;
                    report = 0;
                    entity = report < entity;
                    zulu = 0;
                    if(!entity) { _fun00028_ip = 135; continue _fun00027 }
 48:
                    entity = oscar[zulu];
                    entity = entity.channelList;
                    entity = entity.length;
                    entity = report < entity;
                    tango = zulu;
                    options = 0;
                    if(!entity) { _fun00028_ip = 123; continue _fun00027 }
 75:
                    entity = oscar[tango];
                    entity = entity.channelList;
                    entity = entity[options];
                    mike = entity.id;
                    entity = options;
                    if(!(mike !== golf)) { _fun00028_ip = 141; continue _fun00027 }
 101:
                    options = entity + 1;
                    mike = oscar[tango];
                    mike = mike.channelList;
                    mike = mike.length;
                    if(options < mike) { _fun00028_ip = 75; continue _fun00027 }
 123:
                    zulu = tango + 1;
                    mike = oscar.length;
                    if(zulu < mike) { _fun00028_ip = 48; continue _fun00027 }
 135:
                    mike = new Array(0);
                    return mike;
 141:
                    mike = {};
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 21;
                    report = report[zulu];
                    zulu = undefined;
                    zulu = oscar.bind(zulu)(report);
                    zulu = zulu.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
                    zulu = tango + zulu;
                    mike['section'] = zulu;
                    mike['row'] = entity;
                    entity = new Array(1);
                    entity[0] = mike;
                    return entity;
                }
            };
            entity['getSectionRowsFromChannel'] = zulu;
            zulu = function(argFoo) { // Original name: forEachShownChannel
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    offset = argFoo;
                    mike = _closure2_slot7;
                    verify = new Array(1);
                    verify[0] = mike;
                    update = _closure2_slot8;
                    echo = 1;
                    source = verify;
                    entity = arraySpread(source, update, echo);
                    entity = verify.length;
                    options = 0;
                    mike = options < entity;
                    entity = undefined;
                    oscar = null;
                    report = undefined;
                    tango = undefined;
                    zulu = undefined;
                    if(!mike) { _fun00030_ip = 242; continue _fun00029 }
 62:
                    yankee = _closure1_slot20;
                    mike = verify[options];
                    mike = mike.channelList;
                    foxtrot = yankee.bind(entity)(mike);
                    yankee = foxtrot.bind(entity)();
                    mike = yankee.done;
                    romeo = yankee;
                    yankee = zulu;
                    zulu = yankee;
                    if(mike) { _fun00030_ip = 227; continue _fun00029 }
 105:
                    mike = romeo.value;
                    backup = mike.record;
                    backup = offset.bind(entity)(backup);
                    backup = _closure1_slot20;
                    mike = mike.threadIds;
                    kilo = backup.bind(entity)(mike);
                    sizing = kilo.bind(entity)();
                    mike = sizing.done;
                    backup = sizing;
                    sizing = backup;
                    if(mike) { _fun00030_ip = 203; continue _fun00029 }
 154:
                    result = backup.value;
                    output = _closure1_slot11;
                    mike = output.getChannel;
                    output = mike.bind(output)(result);
                    if(!(oscar != output)) { _fun00030_ip = 182; continue _fun00029 }
 177:
                    mike = offset.bind(entity)(output);
 182:
                    result = kilo.bind(entity)();
                    mike = result.done;
                    backup = result;
                    sizing = backup;
                    yankee = output;
                    if(!mike) { _fun00030_ip = 154; continue _fun00029 }
 203:
                    output = foxtrot.bind(entity)();
                    mike = output.done;
                    report = sizing;
                    romeo = output;
                    tango = kilo;
                    zulu = yankee;
                    if(!mike) { _fun00030_ip = 105; continue _fun00029 }
 227:
                    options = options + 1;
                    mike = verify.length;
                    if(options < mike) { _fun00030_ip = 62; continue _fun00029 }
 242:
                    return entity;
                }
            };
            entity['forEachShownChannel'] = zulu;
            zulu = function(argFoo) { // Original name: forEachChannel
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    oscar = argFoo;
                    mike = _closure2_slot7;
                    report = new Array(1);
                    report[0] = mike;
                    yankee = _closure2_slot8;
                    offset = 1;
                    romeo = report;
                    entity = arraySpread(romeo, yankee, offset);
                    entity = report.length;
                    tango = 0;
                    mike = tango < entity;
                    entity = undefined;
                    if(!mike) { _fun00032_ip = 123; continue _fun00031 }
 51:
                    golf = _closure1_slot20;
                    options = report[tango];
                    mike = options.getChannelRecords;
                    mike = mike.bind(options)();
                    options = golf.bind(entity)(mike);
                    golf = options.bind(entity)();
                    mike = golf.done;
                    if(mike) { _fun00032_ip = 111; continue _fun00031 }
 86:
                    mike = golf.value;
                    mike = oscar.bind(entity)(mike);
                    verify = options.bind(entity)();
                    mike = verify.done;
                    golf = verify;
                    if(!mike) { _fun00032_ip = 86; continue _fun00031 }
 111:
                    tango = tango + 1;
                    mike = report.length;
                    if(tango < mike) { _fun00032_ip = 51; continue _fun00031 }
 123:
                    return entity;
                }
            };
            entity['forEachChannel'] = zulu;
            zulu = function(argFoo) { // Original name: getSlicedChannels
                entity = new Array(3);
                mike = new Array(0);
                entity[0] = mike;
                mike = argFoo;
                entity[1] = mike;
                mike = new Array(0);
                entity[2] = mike;
                return entity;
            };
            entity['getSlicedChannels'] = zulu;
            mike = function() { // Original name: getChannels
                entity = new Array(0);
                return entity;
            };
            entity['getChannels'] = mike;
            return entity;
        }
    };
    var _closure1_slot22 = mike;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    verify = golf[report];
    report = argCorge;
    report = report.bind(entity)(verify);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    echo = options.bind(entity)(report);
    report = 3;
    report = golf[report];
    result = options.bind(entity)(report);
    var _closure1_slot5 = result;
    report = 4;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.createFavoritesChannelRecord;
    var _closure1_slot6 = report;
    report = 5;
    report = golf[report];
    output = options.bind(entity)(report);
    report = 6;
    report = golf[report];
    sizing = options.bind(entity)(report);
    var _closure1_slot7 = sizing;
    report = 7;
    report = golf[report];
    kilo = options.bind(entity)(report);
    report = 8;
    report = golf[report];
    report = oscar.bind(entity)(report);
    verify = report.isGuildReadableType;
    var _closure1_slot8 = verify;
    report = report.isVoiceChannel;
    var _closure1_slot9 = report;
    report = 9;
    report = golf[report];
    backup = options.bind(entity)(report);
    var _closure1_slot10 = backup;
    report = 10;
    report = golf[report];
    foxtrot = options.bind(entity)(report);
    var _closure1_slot11 = foxtrot;
    report = 11;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot12 = report;
    report = 12;
    report = golf[report];
    romeo = options.bind(entity)(report);
    report = 13;
    report = golf[report];
    yankee = options.bind(entity)(report);
    var _closure1_slot13 = yankee;
    report = 14;
    report = golf[report];
    offset = options.bind(entity)(report);
    var _closure1_slot14 = offset;
    report = 15;
    report = golf[report];
    verify = options.bind(entity)(report);
    var _closure1_slot15 = verify;
    report = 16;
    report = golf[report];
    options = options.bind(entity)(report);
    var _closure1_slot16 = options;
    report = 17;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.FAVORITES_RAW_GUILD_ID;
    var _closure1_slot17 = report;
    report = 18;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.Permissions;
    var _closure1_slot18 = report;
    report = new Array(12);
    report[0] = echo;
    report[1] = result;
    report[2] = output;
    report[3] = sizing;
    report[4] = kilo;
    report[5] = backup;
    report[6] = foxtrot;
    report[7] = romeo;
    report[8] = yankee;
    report[9] = offset;
    report[10] = verify;
    report[11] = options;
    var _closure1_slot19 = report;
    report = 23;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_sidebar/FavoritesServerChannelList.tsx';
    report = oscar.bind(golf)(report);
    tango = function() { // Original name: useFavoritesServerChannelList
        report = _closure1_slot4;
        tango = report.useState;
        zulu = function() {
            mike = _closure1_slot22;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        };
        oscar = tango.bind(report)(zulu);
        tango = _closure1_slot3;
        zulu = undefined;
        entity = 2;
        tango = tango.bind(zulu)(oscar, entity);
        entity = 0;
        entity = tango[entity];
        zulu = 1;
        zulu = tango[zulu];
        var _closure2_slot0 = zulu;
        tango = report.useEffect;
        zulu = function() {
            report = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 19;
            tango = tango[zulu];
            zulu = undefined;
            oscar = report.bind(zulu)(tango);
            report = oscar.throttle;
            tango = function() {
                zulu = _closure2_slot0;
                entity = _closure1_slot22;
                mike = undefined;
                entity = entity.bind(mike)();
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            zulu = 100;
            zulu = report.bind(oscar)(tango, zulu);
            var _closure3_slot0 = zulu;
            tango = _closure1_slot19;
            zulu = tango.forEach;
            mike = function(argFoo) {
                zulu = argFoo;
                mike = zulu.addChangeListener;
                entity = _closure3_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            entity = function() {
                zulu = _closure1_slot19;
                mike = zulu.forEach;
                entity = function(argFoo) {
                    zulu = argFoo;
                    mike = zulu.removeChangeListener;
                    entity = _closure3_slot0;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            return entity;
        };
        mike = new Array(0);
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['useFavoritesServerChannelList'] = tango;
    zulu['computeFavoritesState'] = mike;
    return entity;
})();