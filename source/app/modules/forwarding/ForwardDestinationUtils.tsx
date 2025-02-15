// app/modules/forwarding/ForwardDestinationUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    tango = function(argFoo, argBar) { // Original name: isRatelimitedInChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            mike = oscar.rateLimitPerUser;
            entity = null;
            entity = entity != mike;
            if(!entity) { _fun00002_ip = 33; continue _fun00001 }
 21:
            zulu = oscar.rateLimitPerUser;
            mike = 0;
            entity = zulu > mike;
 33:
            if(!entity) { _fun00002_ip = 89; continue _fun00001 }
 36:
            tango = report.can;
            mike = _closure1_slot12;
            mike = mike.MANAGE_CHANNELS;
            mike = tango.bind(report)(mike, oscar);
            if(mike) { _fun00002_ip = 86; continue _fun00001 }
 64:
            tango = report.can;
            zulu = _closure1_slot12;
            zulu = zulu.MANAGE_MESSAGES;
            mike = tango.bind(report)(zulu, oscar);
 86:
            entity = !mike;
 89:
            return entity;
        }
    };
    var _closure1_slot13 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    verify = golf[entity];
    report = argCorge;
    entity = undefined;
    report = report.bind(entity)(verify);
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    verify = report.ChannelRecordBase;
    var _closure1_slot4 = verify;
    verify = report.isGuildChannelType;
    var _closure1_slot5 = verify;
    report = report.createChannelRecord;
    var _closure1_slot6 = report;
    report = 3;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 4;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 5;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 6;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 7;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.MessageFlags;
    var _closure1_slot11 = options;
    report = report.Permissions;
    var _closure1_slot12 = report;
    report = 16;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/forwarding/ForwardDestinationUtils.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: useSelectedDestinationChannel
        options = argFoo;
        tango = options.map;
        oscar = _closure1_slot0;
        golf = _closure1_slot1;
        zulu = 8;
        zulu = golf[zulu];
        report = undefined;
        zulu = oscar.bind(report)(zulu);
        zulu = zulu.getChannelIdFromDestinationId;
        options = tango.bind(options)(zulu);
        tango = options.find;
        zulu = 9;
        zulu = golf[zulu];
        zulu = oscar.bind(report)(zulu);
        zulu = zulu.isNotNullish;
        zulu = tango.bind(options)(zulu);
        var _closure2_slot0 = zulu;
        tango = 10;
        tango = golf[tango];
        golf = oscar.bind(report)(tango);
        oscar = golf.useStateFromStores;
        tango = _closure1_slot7;
        report = new Array(1);
        report[0] = tango;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = function() {
            zulu = _closure1_slot7;
            mike = zulu.getChannel;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report = oscar.bind(golf)(report, zulu, tango);
        var _closure2_slot1 = report;
        tango = _closure1_slot2;
        zulu = tango.useMemo;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = _closure2_slot1;
                entity = null;
                if(!(entity == zulu)) { _fun00004_ip = 77; continue _fun00003 }
 13:
                tango = _closure1_slot6;
                zulu = {};
                report = '1';
                zulu['id'] = report;
                oscar = _closure1_slot0;
                report = _closure1_slot1;
                entity = 11;
                report = report[entity];
                entity = undefined;
                report = oscar.bind(entity)(report);
                report = report.ChannelTypes;
                report = report.DM;
                zulu['type'] = report;
                entity = tango.bind(entity)(zulu);
                _fun00004_ip = 81; continue _fun00003;
 77:
                entity = _closure2_slot1;
 81:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useSelectedDestinationChannel'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: getDestinationIsUnavailable
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = argFoo;
            golf = argBar;
            report = argBaz;
            var _closure2_slot0 = report;
            tango = _closure1_slot4;
            tango = report instanceof tango;
            oscar = golf.isNSFW;
            oscar = oscar.bind(golf)();
            if(!oscar) { _fun00006_ip = 120; continue _fun00005 }
 39:
            if(!tango) { _fun00006_ip = 55; continue _fun00005 }
 42:
            oscar = report.isNSFW;
            oscar = oscar.bind(report)();
            if(oscar) { _fun00006_ip = 120; continue _fun00005 }
 55:
            oscar = {};
            yankee = _closure1_slot0;
            romeo = _closure1_slot1;
            golf = 13;
            options = romeo[golf];
            offset = undefined;
            options = yankee.bind(offset)(options);
            verify = options.intl;
            options = verify.string;
            golf = romeo[golf];
            golf = yankee.bind(offset)(golf);
            golf = golf.t;
            golf = golf.KgPx1N;
            golf = options.bind(verify)(golf);
            oscar['label'] = golf;
            return oscar;
 120:
            if(!tango) { _fun00006_ip = 802; continue _fun00005 }
 126:
            golf = _closure1_slot5;
            tango = report.type;
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            if(!tango) { _fun00006_ip = 802; continue _fun00005 }
 148:
            tango = zulu.attachments;
            tango = tango.length;
            golf = 0;
            if(!(!(tango > golf))) { _fun00006_ip = 192; continue _fun00005 }
 165:
            verify = zulu.messageSnapshots;
            options = verify.some;
            tango = function(argFoo) {
                entity = argFoo;
                entity = entity.message;
                entity = entity.attachments;
                mike = entity.length;
                entity = 0;
                entity = mike > entity;
                return entity;
            };
            tango = options.bind(verify)(tango);
            if(!tango) { _fun00006_ip = 284; continue _fun00005 }
 192:
            verify = _closure1_slot8;
            options = verify.can;
            tango = _closure1_slot12;
            tango = tango.ATTACH_FILES;
            tango = options.bind(verify)(tango, report);
            if(tango) { _fun00006_ip = 284; continue _fun00005 }
 221:
            tango = {};
            yankee = _closure1_slot0;
            romeo = _closure1_slot1;
            options = 13;
            verify = romeo[options];
            verify = yankee.bind(oscar)(verify);
            offset = verify.intl;
            verify = offset.string;
            options = romeo[options];
            options = yankee.bind(oscar)(options);
            options = options.t;
            options = options.P7yvbm;
            options = verify.bind(offset)(options);
            tango['label'] = options;
            return tango;
 284:
            tango = zulu.embeds;
            tango = tango.length;
            if(!(!(tango > golf))) { _fun00006_ip = 329; continue _fun00005 }
 299:
            verify = zulu.messageSnapshots;
            options = verify.some;
            tango = function(argFoo) {
                entity = argFoo;
                entity = entity.message;
                entity = entity.embeds;
                mike = entity.length;
                entity = 0;
                entity = mike > entity;
                return entity;
            };
            tango = options.bind(verify)(tango);
            if(!tango) { _fun00006_ip = 462; continue _fun00005 }
 329:
            options = _closure1_slot0;
            tango = _closure1_slot1;
            verify = 14;
            tango = tango[verify];
            offset = options.bind(oscar)(tango);
            options = offset.canEmbedLinks;
            tango = _closure1_slot8;
            tango = options.bind(offset)(report, tango);
            if(tango) { _fun00006_ip = 462; continue _fun00005 }
 368:
            options = _closure1_slot0;
            tango = _closure1_slot1;
            tango = tango[verify];
            options = options.bind(oscar)(tango);
            tango = options.shouldStripEmbeds;
            tango = tango.bind(options)(zulu);
            if(tango) { _fun00006_ip = 462; continue _fun00005 }
 399:
            tango = {};
            yankee = _closure1_slot0;
            romeo = _closure1_slot1;
            options = 13;
            verify = romeo[options];
            verify = yankee.bind(oscar)(verify);
            offset = verify.intl;
            verify = offset.string;
            options = romeo[options];
            options = yankee.bind(oscar)(options);
            options = options.t;
            options = options.Wr4RIS;
            options = verify.bind(offset)(options);
            tango['label'] = options;
            return tango;
 462:
            options = _closure1_slot0;
            verify = _closure1_slot1;
            tango = 12;
            tango = verify[tango];
            options = options.bind(oscar)(tango);
            tango = options.getMessageStickers;
            backup = tango.bind(options)(zulu);
            options = new Array(0);
            kilo = options;
            foxtrot = 0;
            foxtrot = arraySpread(kilo, backup, foxtrot);
            yankee = zulu.messageSnapshots;
            offset = yankee.flatMap;
            tango = function(argFoo) {
                entity = argFoo;
                zulu = entity.message;
                tango = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 12;
                mike = mike[entity];
                entity = undefined;
                mike = tango.bind(entity)(mike);
                entity = mike.getMessageStickers;
                entity = entity.bind(mike)(zulu);
                return entity;
            };
            backup = offset.bind(yankee)(tango);
            kilo = options;
            tango = arraySpread(kilo, backup, foxtrot);
            tango = options.length;
            if(!(tango > golf)) { _fun00006_ip = 659; continue _fun00005 }
 546:
            verify = _closure1_slot8;
            golf = verify.can;
            tango = _closure1_slot12;
            tango = tango.USE_EXTERNAL_STICKERS;
            tango = golf.bind(verify)(tango, report);
            if(tango) { _fun00006_ip = 659; continue _fun00005 }
 575:
            golf = options.some;
            tango = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = _closure2_slot0;
                    report = _closure1_slot3;
                    zulu = report.getStickerById;
                    entity = argFoo;
                    entity = entity.id;
                    zulu = zulu.bind(report)(entity);
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun00008_ip = 81; continue _fun00007 }
 42:
                    oscar = _closure1_slot0;
                    report = _closure1_slot1;
                    tango = 12;
                    report = report[tango];
                    tango = undefined;
                    report = oscar.bind(tango)(report);
                    tango = report.isGuildSticker;
                    tango = tango.bind(report)(zulu);
                    tango = !tango;
                    entity = !tango;
 81:
                    if(!entity) { _fun00008_ip = 106; continue _fun00007 }
 84:
                    zulu = zulu.guild_id;
                    mike = mike.guild_id;
                    mike = zulu !== mike;
                    if(mike) { _fun00008_ip = 103; continue _fun00007 }
 101:
                    mike = undefined;
 103:
                    entity = mike;
 106:
                    return entity;
                }
            };
            tango = golf.bind(options)(tango);
            if(!tango) { _fun00006_ip = 659; continue _fun00005 }
 596:
            tango = {};
            offset = _closure1_slot0;
            yankee = _closure1_slot1;
            golf = 13;
            options = yankee[golf];
            options = offset.bind(oscar)(options);
            verify = options.intl;
            options = verify.string;
            golf = yankee[golf];
            golf = offset.bind(oscar)(golf);
            golf = golf.t;
            golf = golf.0Yyrub;
            golf = options.bind(verify)(golf);
            tango['label'] = golf;
            return tango;
 659:
            golf = zulu.hasFlag;
            tango = _closure1_slot11;
            tango = tango.IS_VOICE_MESSAGE;
            tango = golf.bind(zulu)(tango);
            if(tango) { _fun00006_ip = 710; continue _fun00005 }
 683:
            tango = zulu.messageSnapshots;
            zulu = tango.some;
            entity = function(argFoo) {
                entity = argFoo;
                zulu = entity.message;
                mike = zulu.hasFlag;
                entity = _closure1_slot11;
                entity = entity.IS_VOICE_MESSAGE;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            if(!entity) { _fun00006_ip = 802; continue _fun00005 }
 710:
            tango = _closure1_slot8;
            zulu = tango.can;
            entity = _closure1_slot12;
            entity = entity.SEND_VOICE_MESSAGES;
            entity = zulu.bind(tango)(entity, report);
            if(entity) { _fun00006_ip = 802; continue _fun00005 }
 739:
            entity = {};
            report = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 13;
            zulu = golf[mike];
            zulu = report.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = report.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.quj4DQ;
            mike = zulu.bind(tango)(mike);
            entity['label'] = mike;
            return entity;
 802:
            entity = undefined;
            return entity;
        }
    };
    zulu['getDestinationIsUnavailable'] = report;
    zulu['isRatelimitedInChannel'] = tango;
    mike = function(argFoo) { // Original name: useDestinationNamesWithSlowmode
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        golf = _closure1_slot1;
        zulu = 10;
        options = golf[zulu];
        tango = undefined;
        yankee = report.bind(tango)(options);
        offset = yankee.useStateFromStoresArray;
        options = _closure1_slot7;
        verify = new Array(2);
        verify[0] = options;
        options = _closure1_slot8;
        verify[1] = options;
        options = new Array(1);
        options[0] = oscar;
        oscar = function() {
            tango = _closure2_slot0;
            zulu = tango.map;
            mike = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.type;
                    tango = entity.id;
                    mike = 'channel';
                    entity = null;
                    if(!(mike === zulu)) { _fun00010_ip = 40; continue _fun00009 }
 23:
                    zulu = _closure1_slot7;
                    mike = zulu.getChannel;
                    entity = mike.bind(zulu)(tango);
 40:
                    return entity;
                }
            };
            tango = zulu.bind(tango)(mike);
            zulu = tango.filter;
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            mike = 9;
            report = report[mike];
            mike = undefined;
            mike = oscar.bind(mike)(report);
            mike = mike.isNotNullish;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.filter;
            entity = function(argFoo) {
                tango = _closure1_slot13;
                zulu = _closure1_slot8;
                mike = undefined;
                entity = argFoo;
                entity = tango.bind(mike)(entity, zulu);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar = offset.bind(yankee)(verify, oscar, options);
        var _closure2_slot1 = oscar;
        zulu = golf[zulu];
        report = report.bind(tango)(zulu);
        tango = report.useStateFromStoresArray;
        golf = _closure1_slot10;
        zulu = new Array(2);
        zulu[0] = golf;
        mike = _closure1_slot9;
        zulu[1] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            zulu = _closure2_slot1;
            mike = zulu.map;
            entity = function(argFoo) {
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 15;
                zulu = zulu[mike];
                mike = undefined;
                oscar = tango.bind(mike)(zulu);
                report = oscar.computeChannelName;
                verify = _closure1_slot10;
                options = _closure1_slot9;
                offset = argFoo;
                golf = true;
                yankee = oscar;
                entity = yankee[report](offset, verify, options, golf, oscar);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useDestinationNamesWithSlowmode'] = mike;
    return entity;
})();