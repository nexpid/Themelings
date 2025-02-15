// app/modules/opt_in_channels/OptInChannelsUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: setIndex
        mike = argBar;
        entity = argFoo;
        entity['index'] = mike;
        entity = undefined;
        return entity;
    };
    var _closure1_slot13 = entity;
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
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.Routes;
    var _closure1_slot7 = golf;
    tango = tango.ChannelTypes;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.ChannelFlags;
    var _closure1_slot9 = golf;
    tango = tango.StaticChannelRoute;
    var _closure1_slot10 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelListGuildActionRow;
    var _closure1_slot11 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ReadStateTypes;
    var _closure1_slot12 = tango;
    tango = 21;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/opt_in_channels/OptInChannelsUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: useFilterCategoriesByQuery
        options = argBar;
        golf = argBaz;
        zulu = argCorge;
        var _closure2_slot0 = options;
        var _closure2_slot1 = golf;
        mike = zulu.toLowerCase;
        report = mike.bind(zulu)();
        var _closure2_slot2 = report;
        oscar = _closure1_slot0;
        tango = _closure1_slot2;
        mike = 8;
        tango = tango[mike];
        mike = undefined;
        oscar = oscar.bind(mike)(tango);
        tango = oscar.useCanSeeOnboardingHome;
        mike = argFoo;
        mike = tango.bind(oscar)(mike);
        var _closure2_slot3 = mike;
        tango = _closure1_slot3;
        oscar = tango.useCallback;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function(argFoo, argBar) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = argFoo;
                golf = argBar;
                entity = _closure2_slot3;
                entity = !entity;
                if(entity) { _fun00002_ip = 51; continue _fun00001 }
 19:
                tango = report.channel;
                zulu = tango.hasFlag;
                mike = _closure1_slot9;
                mike = mike.IS_GUILD_RESOURCE_CHANNEL;
                mike = zulu.bind(tango)(mike);
                entity = !mike;
 51:
                if(!entity) { _fun00002_ip = 192; continue _fun00001 }
 57:
                mike = report.channel;
                zulu = mike.type;
                mike = _closure1_slot8;
                mike = mike.GUILD_DIRECTORY;
                mike = zulu !== mike;
                if(!mike) { _fun00002_ip = 189; continue _fun00001 }
 87:
                oscar = golf.length;
                zulu = 0;
                zulu = zulu === oscar;
                if(zulu) { _fun00002_ip = 186; continue _fun00001 }
 101:
                oscar = _closure1_slot1;
                options = _closure1_slot2;
                tango = 9;
                tango = options[tango];
                options = undefined;
                oscar = oscar.bind(options)(tango);
                tango = report.channel;
                verify = tango.name;
                tango = verify.toLowerCase;
                tango = tango.bind(verify)();
                tango = oscar.bind(options)(golf, tango);
                if(tango) { _fun00002_ip = 183; continue _fun00001 }
 152:
                report = report.channel;
                oscar = report.topic;
                report = oscar.toLowerCase;
                oscar = report.bind(oscar)();
                report = oscar.includes;
                tango = report.bind(oscar)(golf);
 183:
                zulu = tango;
 186:
                mike = zulu;
 189:
                entity = mike;
 192:
                return entity;
            }
        };
        oscar = oscar.bind(tango)(mike, zulu);
        var _closure2_slot4 = oscar;
        zulu = tango.useMemo;
        mike = new Array(4);
        mike[0] = options;
        mike[1] = golf;
        mike[2] = oscar;
        mike[3] = report;
        entity = function() {
            entity = {};
            mike = new Array(0);
            entity['null'] = mike;
            mike = new Array(0);
            entity['_categories'] = mike;
            var _closure3_slot0 = entity;
            oscar = _closure2_slot1;
            report = _closure1_slot8;
            report = report.GUILD_CATEGORY;
            golf = oscar[report];
            oscar = golf.forEach;
            report = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = argFoo;
                    tango = mike.channel;
                    zulu = tango.id;
                    mike = 'null';
                    if(!(mike === zulu)) { _fun00004_ip = 66; continue _fun00003 }
 23:
                    zulu = _closure3_slot0;
                    mike = _closure2_slot0;
                    oscar = mike.null;
                    report = oscar.filter;
                    mike = function(argFoo) {
                        tango = _closure2_slot4;
                        zulu = _closure2_slot2;
                        mike = undefined;
                        entity = argFoo;
                        entity = tango.bind(mike)(entity, zulu);
                        return entity;
                    };
                    mike = report.bind(oscar)(mike);
                    zulu['null'] = mike;
 66:
                    zulu = _closure3_slot0;
                    mike = tango.id;
                    report = _closure2_slot0;
                    tango = tango.id;
                    report = report[tango];
                    tango = report.filter;
                    entity = function(argFoo) {
                        tango = _closure2_slot4;
                        zulu = _closure2_slot2;
                        mike = undefined;
                        entity = argFoo;
                        entity = tango.bind(mike)(entity, zulu);
                        return entity;
                    };
                    entity = tango.bind(report)(entity);
                    zulu[mike] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            report = oscar.bind(golf)(report);
            tango = _closure2_slot0;
            report = tango._categories;
            tango = report.filter;
            zulu = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    mike = argFoo;
                    entity = mike.channel;
                    zulu = entity.id;
                    entity = 'null';
                    entity = entity === zulu;
                    if(entity) { _fun00006_ip = 42; continue _fun00005 }
 24:
                    zulu = _closure2_slot2;
                    tango = zulu.length;
                    zulu = 0;
                    entity = zulu === tango;
 42:
                    if(entity) { _fun00006_ip = 77; continue _fun00005 }
 45:
                    zulu = _closure3_slot0;
                    mike = mike.channel;
                    mike = mike.id;
                    mike = zulu[mike];
                    zulu = mike.length;
                    mike = 0;
                    entity = zulu > mike;
 77:
                    return entity;
                }
            };
            zulu = tango.bind(report)(zulu);
            entity['_categories'] = zulu;
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 10;
            zulu = report[zulu];
            report = undefined;
            tango = tango.bind(report)(zulu);
            zulu = entity._categories;
            tango = tango.bind(report)(zulu, entity);
            zulu = tango.forEach;
            mike = _closure1_slot13;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useFilterCategoriesByQuery'] = tango;
    tango = function(argFoo) { // Original name: getFirstRouteFor
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            yankee = argFoo;
            mike = yankee.getSections;
            entity = false;
            offset = mike.bind(yankee)(entity);
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            tango = 11;
            mike = mike[tango];
            verify = undefined;
            mike = zulu.bind(verify)(mike);
            mike = mike.SECTION_INDEX_GUILD_ACTIONS;
            mike = offset[mike];
            options = 0;
            if(!(mike > options)) { _fun00008_ip = 126; continue _fun00007 }
 57:
            mike = yankee.getGuildActionSection;
            zulu = mike.bind(yankee)();
            mike = zulu.getRow;
            zulu = mike.bind(zulu)(options);
            mike = _closure1_slot11;
            mike = mike.GUILD_HOME;
            if(!(mike !== zulu)) { _fun00008_ip = 258; continue _fun00007 }
 95:
            mike = _closure1_slot11;
            mike = mike.GUILD_ROLE_SUBSCRIPTIONS;
            if(!(mike !== zulu)) { _fun00008_ip = 246; continue _fun00007 }
 112:
            mike = _closure1_slot11;
            mike = mike.GUILD_MEMBER_APPLICATIONS;
            if(!(mike !== zulu)) { _fun00008_ip = 234; continue _fun00007 }
 126:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[tango];
            mike = zulu.bind(verify)(mike);
            golf = mike.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
            mike = yankee.voiceChannelsSectionNumber;
            mike = golf < mike;
            zulu = null;
            oscar = undefined;
            report = undefined;
            if(!mike) { _fun00008_ip = 225; continue _fun00007 }
 168:
            mike = offset[golf];
            if(!(mike > options)) { _fun00008_ip = 212; continue _fun00007 }
 176:
            mike = yankee.getChannelFromSectionRow;
            tango = mike.bind(yankee)(golf, options);
            romeo = zulu == tango;
            mike = undefined;
            if(romeo) { _fun00008_ip = 202; continue _fun00007 }
 197:
            mike = tango.channel;
 202:
            oscar = tango;
            report = mike;
            if(!(zulu == report)) { _fun00008_ip = 227; continue _fun00007 }
 212:
            golf = golf + 1;
            tango = yankee.voiceChannelsSectionNumber;
            if(golf < tango) { _fun00008_ip = 168; continue _fun00007 }
 225:
            return zulu;
 227:
            mike = mike.id;
            return mike;
 234:
            mike = _closure1_slot10;
            mike = mike.MEMBER_APPLICATIONS;
            return mike;
 246:
            mike = _closure1_slot10;
            mike = mike.ROLE_SUBSCRIPTIONS;
            return mike;
 258:
            entity = _closure1_slot10;
            entity = entity.GUILD_HOME;
            return entity;
        }
    };
    zulu['getFirstRouteFor'] = tango;
    tango = function(argFoo, argBar) { // Original name: clearRecentChannels
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            golf = argFoo;
            verify = argBar;
            oscar = arguments[2];
            entity = undefined;
            if(!(oscar === entity)) { _fun00010_ip = 17; continue _fun00009 }
 15:
            oscar = null;
 17:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 12;
            zulu = report[zulu];
            options = tango.bind(entity)(zulu);
            zulu = options.bulkClearRecents;
            zulu = zulu.bind(options)(golf, verify);
            zulu = 13;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.bulkAck;
            options = verify.map;
            zulu = function(argFoo) {
                tango = argFoo;
                entity = {};
                entity['channelId'] = tango;
                zulu = _closure1_slot12;
                zulu = zulu.CHANNEL;
                entity['readStateType'] = zulu;
                zulu = _closure1_slot6;
                mike = zulu.lastMessageId;
                mike = mike.bind(zulu)(tango);
                entity['messageId'] = mike;
                return entity;
            };
            zulu = options.bind(verify)(zulu);
            zulu = tango.bind(report)(zulu);
            zulu = null;
            if(!(zulu != oscar)) { _fun00010_ip = 147; continue _fun00009 }
 100:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 14;
            zulu = report[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.transitionTo;
            report = _closure1_slot7;
            mike = report.CHANNEL;
            mike = mike.bind(report)(golf, oscar);
            mike = zulu.bind(tango)(mike);
 147:
            return entity;
        }
    };
    zulu['clearRecentChannels'] = tango;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: useChannelBrowserSections
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argFoo;
            zulu = argBar;
            tango = argCorge;
            var _closure2_slot0 = report;
            var _closure2_slot1 = zulu;
            mike = argBaz;
            var _closure2_slot2 = mike;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            mike = 15;
            mike = offset[mike];
            options = undefined;
            yankee = verify.bind(options)(mike);
            golf = yankee.useIsDismissibleContentDismissed;
            mike = 16;
            mike = offset[mike];
            mike = verify.bind(options)(mike);
            mike = mike.DismissibleContent;
            mike = mike.CHANNEL_BROWSER_NUX;
            mike = golf.bind(yankee)(mike);
            golf = 17;
            golf = offset[golf];
            verify = verify.bind(options)(golf);
            options = verify.useStateFromStoresObject;
            oscar = _closure1_slot4;
            golf = new Array(1);
            golf[0] = oscar;
            oscar = new Array(1);
            oscar[0] = report;
            report = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = {};
                    tango = _closure1_slot4;
                    zulu = tango.getMutableGuildChannelsForGuild;
                    mike = _closure2_slot0;
                    yankee = zulu.bind(tango)(mike);
                    verify = yankee;
                    tango = 1;
                    zulu = null;
                    report = undefined;
                    for(oscar in verify)
 45:
                    {
 54:
                        romeo = oscar;
                        romeo = yankee[romeo];
                        foxtrot = romeo.parent_id;
                        if(zulu == foxtrot) { _fun00014_ip = 45; continue _fun00013 }
 71:
                        report = entity[foxtrot];
                        backup = zulu != report;
                        romeo = 0;
                        if(!backup) { _fun00014_ip = 87; continue _fun00013 }
 84:
                        romeo = report;
 87:
                        romeo = romeo + tango;
                        entity[foxtrot] = romeo;
                        _fun00014_ip = 45; continue _fun00013;
                    }
 97:
                    return entity;
                }
            };
            report = options.bind(verify)(golf, report, oscar);
            var _closure2_slot3 = report;
            report = zulu._categories;
            zulu = report.map;
            entity = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tango = argFoo;
                    mike = _closure2_slot1;
                    entity = tango.channel;
                    entity = entity.id;
                    mike = mike[entity];
                    entity = {};
                    report = tango.channel;
                    oscar = report.id;
                    report = 'null';
                    if(!(report !== oscar)) { _fun00016_ip = 71; continue _fun00015 }
 44:
                    report = _closure2_slot3;
                    tango = tango.channel;
                    tango = tango.id;
                    oscar = report[tango];
                    tango = 1;
                    report = 0;
                    if(!(report !== oscar)) { _fun00016_ip = 76; continue _fun00015 }
 71:
                    tango = mike.length;
 76:
                    entity['rowCount'] = tango;
                    tango = mike.length;
                    mike = 0;
                    if(!(mike !== tango)) { _fun00016_ip = 96; continue _fun00015 }
 92:
                    mike = _closure2_slot2;
 96:
                    entity['rowHeight'] = mike;
                    return entity;
                }
            };
            entity = zulu.bind(report)(entity);
            if(mike) { _fun00012_ip = 174; continue _fun00011 }
 168:
            zulu = null;
            mike = zulu == tango;
 174:
            if(mike) { _fun00012_ip = 203; continue _fun00011 }
 177:
            zulu = entity.unshift;
            mike = {};
            report = 1;
            mike['rowCount'] = report;
            mike['rowHeight'] = tango;
            mike = zulu.bind(entity)(mike);
 203:
            return entity;
        }
    };
    zulu['useChannelBrowserSections'] = tango;
    tango = function(argFoo) { // Original name: useChannelBrowserChannelCount
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 17;
            zulu = report[zulu];
            golf = undefined;
            tango = tango.bind(golf)(zulu);
            zulu = tango.useStateFromStores;
            report = _closure1_slot5;
            mike = new Array(1);
            mike[0] = report;
            entity = function() {
                zulu = _closure1_slot5;
                mike = zulu.getCategories;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report = zulu.bind(tango)(mike, entity);
            entity = report._categories;
            tango = entity.length;
            mike = report._categories;
            entity = report._categories;
            entity = entity.length;
            oscar = 1;
            entity = entity - oscar;
            zulu = mike[entity];
            entity = null;
            if(!(entity != zulu)) { _fun00018_ip = 218; continue _fun00017 }
 109:
            mike = zulu.channel;
            options = entity == mike;
            golf = undefined;
            if(options) { _fun00018_ip = 128; continue _fun00017 }
 123:
            golf = mike.id;
 128:
            options = entity != golf;
            mike = 'null';
            if(!options) { _fun00018_ip = 142; continue _fun00017 }
 139:
            mike = golf;
 142:
            report = report[mike];
            mike = entity == report;
            golf = 0;
            entity = 0;
            if(mike) { _fun00018_ip = 216; continue _fun00017 }
 157:
            mike = report.length;
            if(!(golf !== mike)) { _fun00018_ip = 197; continue _fun00017 }
 166:
            mike = report.length;
            mike = mike - oscar;
            mike = report[mike];
            report = mike.index;
            mike = 2;
            mike = report + mike;
            mike = mike - tango;
            _fun00018_ip = 213; continue _fun00017;
 197:
            report = zulu.index;
            zulu = 2;
            zulu = report + zulu;
            mike = zulu - tango;
 213:
            entity = mike;
 216:
            return entity;
 218:
            entity = 0;
            return entity;
        }
    };
    zulu['useChannelBrowserChannelCount'] = tango;
    mike = function(argFoo) { // Original name: getActiveAgoTimestamp
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            report = argFoo;
            mike = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 18;
            zulu = yankee[entity];
            golf = undefined;
            zulu = mike.bind(golf)(zulu);
            tango = zulu.intl;
            zulu = tango.formatToPlainString;
            entity = yankee[entity];
            entity = mike.bind(golf)(entity);
            entity = entity.t;
            mike = entity.8N0BHR;
            entity = {};
            verify = _closure1_slot1;
            oscar = 19;
            oscar = yankee[oscar];
            oscar = verify.bind(golf)(oscar);
            options = 20;
            options = yankee[options];
            verify = verify.bind(golf)(options);
            options = verify.extractTimestamp;
            yankee = _closure1_slot6;
            offset = yankee.lastMessageId;
            offset = offset.bind(yankee)(report);
            yankee = null;
            if(!(yankee != offset)) { _fun00020_ip = 118; continue _fun00019 }
 115:
            report = offset;
 118:
            report = options.bind(verify)(report);
            oscar = oscar.bind(golf)(report);
            report = oscar.fromNow;
            report = report.bind(oscar)();
            entity['timeAgo'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['getActiveAgoTimestamp'] = mike;
    return entity;
})();