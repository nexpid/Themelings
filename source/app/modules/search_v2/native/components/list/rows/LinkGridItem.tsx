// app/modules/search_v2/native/components/list/rows/LinkGridItem.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: getLinkNodeAtIndex
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            report = argBar;
            tango = argBaz;
            var _closure2_slot0 = report;
            var _closure2_slot1 = tango;
            zulu = global;
            oscar = zulu.Array;
            zulu = oscar.isArray;
            zulu = zulu.bind(oscar)(entity);
            if(zulu) { _fun00002_ip = 140; continue _fun00001 }
 40:
            oscar = entity.type;
            zulu = 'link';
            if(!(zulu !== oscar)) { _fun00002_ip = 100; continue _fun00001 }
 53:
            oscar = entity.type;
            zulu = 'channelMention';
            if(!(zulu !== oscar)) { _fun00002_ip = 100; continue _fun00001 }
 66:
            oscar = entity.content;
            zulu = null;
            if(!(zulu != oscar)) { _fun00002_ip = 157; continue _fun00001 }
 77:
            golf = _closure1_slot13;
            oscar = entity.content;
            zulu = undefined;
            zulu = golf.bind(zulu)(oscar, report, tango);
            _fun00002_ip = 157; continue _fun00001;
 100:
            zulu = 0;
            if(!(zulu !== report)) { _fun00002_ip = 131; continue _fun00001 }
 106:
            oscar = _closure1_slot13;
            zulu = 1;
            report = report - zulu;
            zulu = undefined;
            zulu = oscar.bind(zulu)(entity, report, tango);
            _fun00002_ip = 157; continue _fun00001;
 131:
            zulu = undefined;
            zulu = tango.bind(zulu)(entity);
            _fun00002_ip = 157; continue _fun00001;
 140:
            zulu = entity.forEach;
            mike = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot13;
                tango = _closure2_slot0;
                zulu = _closure2_slot1;
                mike = undefined;
                mike = report.bind(mike)(entity, tango, zulu);
                return entity;
            };
            mike = zulu.bind(entity)(mike);
 157:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: LinkParsedGridItem
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            backup = mike.author;
            var _closure2_slot0 = backup;
            golf = mike.mediaIndex;
            var _closure2_slot1 = golf;
            offset = mike.channelId;
            var _closure2_slot2 = offset;
            verify = mike.messageId;
            var _closure2_slot3 = verify;
            zulu = mike.onPressSearchLink;
            var _closure2_slot4 = zulu;
            options = mike.onPress;
            var _closure2_slot5 = options;
            vacuum = mike.imageStyle;
            oscar = mike.containerStyle;
            mike = _closure1_slot12;
            tango = undefined;
            control = mike.bind(tango)();
            var _closure2_slot6 = control;
            report = _closure1_slot0;
            foxtrot = _closure1_slot2;
            mike = 9;
            romeo = foxtrot[mike];
            output = report.bind(tango)(romeo);
            sizing = output.useStateFromStores;
            romeo = _closure1_slot8;
            kilo = new Array(1);
            kilo[0] = romeo;
            romeo = function() {
                zulu = _closure1_slot8;
                mike = zulu.getMessage;
                entity = _closure2_slot3;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            result = sizing.bind(output)(kilo, romeo);
            var _closure2_slot7 = result;
            mike = foxtrot[mike];
            sizing = report.bind(tango)(mike);
            kilo = sizing.useStateFromStores;
            mike = _closure1_slot7;
            romeo = new Array(1);
            romeo[0] = mike;
            mike = function() {
                zulu = _closure1_slot7;
                mike = zulu.getChannel;
                entity = _closure2_slot2;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            romeo = kilo.bind(sizing)(romeo, mike);
            var _closure2_slot8 = romeo;
            mike = 10;
            mike = foxtrot[mike];
            report = report.bind(tango)(mike);
            mike = report.useShouldFilterKeywords;
            report = mike.bind(report)();
            var _closure2_slot9 = report;
            kilo = _closure1_slot4;
            foxtrot = kilo.useState;
            mike = null;
            sizing = foxtrot.bind(kilo)(mike);
            kilo = _closure1_slot3;
            foxtrot = 2;
            sizing = kilo.bind(tango)(sizing, foxtrot);
            foxtrot = 0;
            kilo = sizing[foxtrot];
            var _closure2_slot10 = kilo;
            foxtrot = 1;
            foxtrot = sizing[foxtrot];
            var _closure2_slot11 = foxtrot;
            output = _closure1_slot4;
            sizing = output.useCallback;
            foxtrot = new Array(1);
            foxtrot[0] = golf;
            golf = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot13;
                tango = _closure2_slot1;
                zulu = _closure2_slot11;
                mike = undefined;
                mike = report.bind(mike)(entity, tango, zulu);
                return entity;
            };
            output = sizing.bind(output)(golf, foxtrot);
            var _closure2_slot12 = output;
            sizing = _closure1_slot4;
            foxtrot = sizing.useMemo;
            golf = new Array(3);
            golf[0] = result;
            golf[1] = output;
            golf[2] = report;
            report = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    mike = _closure2_slot7;
                    entity = null;
                    if(!(entity != mike)) { _fun00006_ip = 173; continue _fun00005 }
 16:
                    oscar = _closure1_slot0;
                    verify = _closure1_slot2;
                    entity = 12;
                    entity = verify[entity];
                    tango = undefined;
                    options = oscar.bind(tango)(entity);
                    golf = options.renderMessageMarkupWithParser;
                    entity = 13;
                    entity = verify[entity];
                    entity = oscar.bind(tango)(entity);
                    zulu = entity.NativeSearchResultLinkPreviewParser;
                    mike = _closure2_slot7;
                    entity = {};
                    yankee = _closure2_slot12;
                    entity['postProcessor'] = yankee;
                    offset = _closure2_slot9;
                    entity['shouldFilterKeywords'] = offset;
                    entity = golf.bind(options)(zulu, mike, entity);
                    options = entity.content;
                    zulu = _closure1_slot10;
                    mike = _closure1_slot5;
                    entity = {};
                    golf = 'none';
                    entity['pointerEvents'] = golf;
                    golf = _closure1_slot10;
                    report = 14;
                    report = verify[report];
                    report = oscar.bind(tango)(report);
                    oscar = report.Text;
                    report = {'variant': 'text-md/semibold', 'color': 'header-primary', 'lineClamp': 1};
                    report['children'] = options;
                    report = golf.bind(tango)(oscar, report);
                    entity['children'] = report;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
 173:
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    entity = 11;
                    mike = oscar[entity];
                    tango = undefined;
                    mike = report.bind(tango)(mike);
                    zulu = mike.intl;
                    mike = zulu.string;
                    entity = oscar[entity];
                    entity = report.bind(tango)(entity);
                    entity = entity.t;
                    entity = entity.mE3KJC;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            result = foxtrot.bind(sizing)(report, golf);
            sizing = _closure1_slot4;
            foxtrot = sizing.useMemo;
            golf = new Array(2);
            golf[0] = kilo;
            report = control.tapToSee;
            golf[1] = report;
            report = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = _closure2_slot10;
                    zulu = null;
                    if(!(zulu != mike)) { _fun00008_ip = 65; continue _fun00007 }
 13:
                    mike = _closure2_slot10;
                    tango = mike.type;
                    mike = 'link';
                    if(!(mike === tango)) { _fun00008_ip = 65; continue _fun00007 }
 30:
                    mike = _closure2_slot10;
                    mike = mike.target;
                    if(!(zulu != mike)) { _fun00008_ip = 65; continue _fun00007 }
 44:
                    mike = _closure2_slot10;
                    tango = mike.target;
                    mike = '';
                    if(!(mike === tango)) { _fun00008_ip = 297; continue _fun00007 }
 65:
                    mike = _closure2_slot10;
                    if(!(zulu != mike)) { _fun00008_ip = 108; continue _fun00007 }
 73:
                    mike = _closure2_slot10;
                    mike = zulu == mike;
                    report = undefined;
                    zulu = undefined;
                    if(mike) { _fun00008_ip = 97; continue _fun00007 }
 88:
                    mike = _closure2_slot10;
                    zulu = mike.type;
 97:
                    mike = 'channelMention';
                    if(!(mike !== zulu)) { _fun00008_ip = 229; continue _fun00007 }
 108:
                    oscar = _closure1_slot10;
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    mike = 14;
                    mike = yankee[mike];
                    tango = undefined;
                    mike = offset.bind(tango)(mike);
                    zulu = mike.Text;
                    mike = {'variant': 'text-xs/normal', 'color': 'interactive-normal', 'lineClamp': 1};
                    golf = _closure2_slot6;
                    golf = golf.tapToSee;
                    mike['style'] = golf;
                    golf = 11;
                    options = yankee[golf];
                    options = offset.bind(tango)(options);
                    verify = options.intl;
                    options = verify.string;
                    golf = yankee[golf];
                    golf = offset.bind(tango)(golf);
                    golf = golf.t;
                    golf = golf.q2IIoK;
                    golf = options.bind(verify)(golf);
                    mike['children'] = golf;
                    mike = oscar.bind(tango)(zulu, mike);
                    return mike;
 229:
                    mike = _closure2_slot10;
                    oscar = mike.originalLink;
                    tango = _closure1_slot10;
                    zulu = _closure1_slot0;
                    golf = _closure1_slot2;
                    mike = 14;
                    mike = golf[mike];
                    mike = zulu.bind(report)(mike);
                    zulu = mike.Text;
                    mike = {'variant': 'text-xs/normal', 'color': 'text-link', 'lineClamp': 1};
                    mike['children'] = oscar;
                    mike = tango.bind(report)(zulu, mike);
                    return mike;
 297:
                    entity = _closure2_slot10;
                    report = entity.target;
                    tango = _closure1_slot10;
                    mike = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 14;
                    entity = zulu[entity];
                    zulu = undefined;
                    entity = mike.bind(zulu)(entity);
                    mike = entity.Text;
                    entity = {'variant': 'text-xs/normal', 'color': 'text-link', 'lineClamp': 1};
                    entity['children'] = report;
                    entity = tango.bind(zulu)(mike, entity);
                    return entity;
                }
            };
            output = foxtrot.bind(sizing)(report, golf);
            sizing = _closure1_slot4;
            foxtrot = sizing.useMemo;
            golf = mike == kilo;
            report = undefined;
            if(golf) { _fun00004_ip = 400; continue _fun00003 }
 394:
            report = kilo.target;
 400:
            golf = new Array(2);
            golf[0] = report;
            echo = mike == kilo;
            report = undefined;
            if(echo) { _fun00004_ip = 422; continue _fun00003 }
 417:
            report = kilo.type;
 422:
            golf[1] = report;
            report = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zulu = _closure2_slot10;
                    entity = null;
                    entity = entity == zulu;
                    tango = undefined;
                    zulu = undefined;
                    if(entity) { _fun00010_ip = 29; continue _fun00009 }
 20:
                    entity = _closure2_slot10;
                    zulu = entity.type;
 29:
                    entity = 'channelMention';
                    if(!(entity !== zulu)) { _fun00010_ip = 165; continue _fun00009 }
 40:
                    entity = 'link';
                    if(!(entity !== zulu)) { _fun00010_ip = 99; continue _fun00009 }
 48:
                    report = _closure1_slot10;
                    zulu = _closure1_slot0;
                    oscar = _closure1_slot2;
                    entity = 17;
                    entity = oscar[entity];
                    entity = zulu.bind(tango)(entity);
                    zulu = entity.LinkIcon;
                    entity = {};
                    oscar = 'lg';
                    entity['size'] = oscar;
                    entity = report.bind(tango)(zulu, entity);
                    return entity;
 99:
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 16;
                    zulu = oscar[zulu];
                    report = report.bind(tango)(zulu);
                    zulu = report.getUrlIcon;
                    mike = _closure2_slot10;
                    mike = mike.target;
                    zulu = zulu.bind(report)(mike);
                    mike = _closure1_slot10;
                    entity = {};
                    report = 'lg';
                    entity['size'] = report;
                    entity = mike.bind(tango)(zulu, entity);
                    return entity;
 165:
                    zulu = _closure1_slot10;
                    mike = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 15;
                    entity = report[entity];
                    entity = mike.bind(tango)(entity);
                    mike = entity.ChatIcon;
                    entity = {};
                    report = 'lg';
                    entity['size'] = report;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                }
            };
            source = foxtrot.bind(sizing)(report, golf);
            foxtrot = _closure1_slot4;
            golf = foxtrot.useMemo;
            report = new Array(5);
            report[0] = offset;
            report[1] = verify;
            report[2] = kilo;
            report[3] = options;
            report[4] = zulu;
            zulu = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tango = _closure2_slot10;
                    zulu = null;
                    if(!(zulu != tango)) { _fun00012_ip = 69; continue _fun00011 }
 15:
                    zulu = _closure2_slot10;
                    tango = zulu.type;
                    zulu = 'link';
                    if(!(zulu !== tango)) { _fun00012_ip = 60; continue _fun00011 }
 32:
                    entity = _closure2_slot10;
                    tango = entity.type;
                    zulu = 'channelMention';
                    entity = undefined;
                    if(!(zulu === tango)) { _fun00012_ip = 58; continue _fun00011 }
 51:
                    entity = function() {
                        report = _closure2_slot4;
                        mike = _closure2_slot10;
                        tango = mike.originalLink;
                        zulu = _closure2_slot2;
                        mike = undefined;
                        entity = true;
                        entity = report.bind(mike)(tango, entity, zulu);
                        return entity;
                    };
 58:
                    _fun00012_ip = 67; continue _fun00011;
 60:
                    entity = function() {
                        report = _closure2_slot4;
                        golf = _closure2_slot10;
                        tango = golf.target;
                        oscar = _closure1_slot0;
                        zulu = _closure1_slot2;
                        mike = 18;
                        mike = zulu[mike];
                        zulu = undefined;
                        oscar = oscar.bind(zulu)(mike);
                        mike = oscar.isLinkTrusted;
                        mike = mike.bind(oscar)(golf);
                        entity = _closure2_slot2;
                        entity = report.bind(zulu)(tango, mike, entity);
                        return entity;
                    };
 67:
                    _fun00012_ip = 76; continue _fun00011;
 69:
                    entity = function() {
                        tango = _closure2_slot5;
                        zulu = _closure2_slot2;
                        mike = _closure2_slot3;
                        entity = undefined;
                        entity = tango.bind(entity)(zulu, mike);
                        return entity;
                    };
 76:
                    return entity;
                }
            };
            report = golf.bind(foxtrot)(zulu, report);
            foxtrot = _closure1_slot4;
            golf = foxtrot.useMemo;
            zulu = new Array(2);
            zulu[0] = backup;
            kilo = mike == romeo;
            mike = undefined;
            if(kilo) { _fun00004_ip = 516; continue _fun00003 }
 511:
            mike = romeo.guild_id;
 516:
            zulu[1] = mike;
            mike = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = _closure2_slot0;
                    mike = zulu.getAvatarSource;
                    report = _closure2_slot8;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00014_ip = 37; continue _fun00013 }
 28:
                    tango = _closure2_slot8;
                    entity = tango.guild_id;
 37:
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            foxtrot = golf.bind(foxtrot)(mike, zulu);
            golf = _closure1_slot4;
            zulu = golf.useCallback;
            mike = new Array(3);
            mike[0] = offset;
            mike[1] = verify;
            mike[2] = options;
            entity = function() {
                tango = _closure2_slot5;
                zulu = _closure2_slot2;
                mike = _closure2_slot3;
                entity = undefined;
                mike = tango.bind(entity)(zulu, mike);
                return entity;
            };
            sizing = zulu.bind(golf)(entity, mike);
            zulu = _closure1_slot11;
            offset = _closure1_slot0;
            kilo = _closure1_slot2;
            verify = 19;
            entity = kilo[verify];
            entity = offset.bind(tango)(entity);
            mike = entity.SearchListCardContainer;
            entity = {};
            entity['containerStyle'] = oscar;
            entity['onPress'] = report;
            golf = _closure1_slot10;
            report = kilo[verify];
            report = offset.bind(tango)(report);
            oscar = report.SearchListCardThumbnail;
            report = {};
            update = _closure1_slot10;
            echo = _closure1_slot5;
            options = {};
            sequence = control.iconContainer;
            control = new Array(2);
            control[0] = sequence;
            control[1] = vacuum;
            options['style'] = control;
            options['children'] = source;
            options = update.bind(tango)(echo, options);
            report['thumbnail'] = options;
            oscar = golf.bind(tango)(oscar, report);
            report = new Array(3);
            report[0] = oscar;
            options = _closure1_slot10;
            oscar = kilo[verify];
            oscar = offset.bind(tango)(oscar);
            golf = oscar.SearchListCardContent;
            oscar = {};
            oscar['label'] = result;
            oscar['subLabel'] = output;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            options = _closure1_slot10;
            oscar = 20;
            oscar = kilo[oscar];
            oscar = offset.bind(tango)(oscar);
            golf = oscar.PressableHighlight;
            oscar = {};
            oscar['onPress'] = sizing;
            yankee = _closure1_slot10;
            verify = kilo[verify];
            verify = offset.bind(tango)(verify);
            offset = verify.SearchListCardFooter;
            verify = {};
            verify['author'] = backup;
            verify['avatarSource'] = foxtrot;
            verify['channel'] = romeo;
            verify = yankee.bind(tango)(offset, verify);
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[2] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: LinkEmbedGridItem
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zulu = argFoo;
            control = zulu.embed;
            var _closure2_slot0 = control;
            backup = zulu.author;
            var _closure2_slot1 = backup;
            sizing = zulu.channelId;
            var _closure2_slot2 = sizing;
            kilo = zulu.messageId;
            var _closure2_slot3 = kilo;
            mike = zulu.onPressSearchLink;
            var _closure2_slot4 = mike;
            golf = zulu.onPress;
            var _closure2_slot5 = golf;
            update = zulu.imageStyle;
            var _closure2_slot6 = update;
            options = zulu.containerStyle;
            tango = undefined;
            var _closure2_slot12 = tango;
            var _closure2_slot13 = tango;
            zulu = _closure1_slot12;
            zulu = zulu.bind(tango)();
            var _closure2_slot7 = zulu;
            oscar = _closure1_slot0;
            verify = _closure1_slot2;
            report = 9;
            offset = verify[report];
            output = oscar.bind(tango)(offset);
            foxtrot = output.useStateFromStores;
            offset = _closure1_slot8;
            romeo = new Array(1);
            romeo[0] = offset;
            offset = function() {
                zulu = _closure1_slot8;
                mike = zulu.getMessage;
                entity = _closure2_slot3;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            offset = foxtrot.bind(output)(romeo, offset);
            var _closure2_slot8 = offset;
            report = verify[report];
            romeo = oscar.bind(tango)(report);
            verify = romeo.useStateFromStores;
            report = _closure1_slot7;
            oscar = new Array(1);
            oscar[0] = report;
            report = function() {
                zulu = _closure1_slot7;
                mike = zulu.getChannel;
                entity = _closure2_slot2;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            romeo = verify.bind(romeo)(oscar, report);
            var _closure2_slot9 = romeo;
            report = _closure1_slot6;
            report = report.bind(tango)();
            output = report.scale;
            var _closure2_slot10 = output;
            result = control.url;
            var _closure2_slot11 = result;
            verify = control.rawTitle;
            echo = null;
            if(!(echo == verify)) { _fun00016_ip = 262; continue _fun00015 }
 239:
            oscar = control.author;
            foxtrot = echo == oscar;
            report = undefined;
            if(foxtrot) { _fun00016_ip = 259; continue _fun00015 }
 254:
            report = oscar.name;
 259:
            verify = report;
 262:
            if(!(echo == verify)) { _fun00016_ip = 271; continue _fun00015 }
 266:
            verify = control.url;
 271:
            _closure2_slot12 = verify;
            source = _closure1_slot4;
            foxtrot = source.useMemo;
            oscar = new Array(1);
            oscar[0] = offset;
            report = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zulu = _closure2_slot8;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun00018_ip = 56; continue _fun00017 }
 16:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    zulu = 12;
                    zulu = tango[zulu];
                    tango = undefined;
                    zulu = report.bind(tango)(zulu);
                    mike = _closure2_slot8;
                    mike = zulu.bind(tango)(mike);
                    entity = mike.hasSpoilerEmbeds;
 56:
                    return entity;
                }
            };
            source = foxtrot.bind(source)(report, oscar);
            _closure2_slot13 = source;
            foxtrot = _closure1_slot4;
            oscar = foxtrot.useMemo;
            vacuum = backup.id;
            report = new Array(8);
            report[0] = vacuum;
            report[1] = sizing;
            report[2] = control;
            report[3] = source;
            report[4] = update;
            report[5] = kilo;
            report[6] = output;
            zulu = zulu.iconContainer;
            report[7] = zulu;
            zulu = function() {
                tango = _closure1_slot10;
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 21;
                entity = zulu[entity];
                zulu = undefined;
                entity = mike.bind(zulu)(entity);
                mike = entity.SearchEmbedMediaImage;
                entity = {};
                golf = _closure2_slot3;
                entity['messageId'] = golf;
                golf = _closure2_slot2;
                entity['channelId'] = golf;
                golf = _closure2_slot1;
                golf = golf.id;
                entity['authorId'] = golf;
                golf = _closure2_slot0;
                entity['embed'] = golf;
                golf = _closure2_slot6;
                entity['containerStyle'] = golf;
                options = function() { // Original name: renderFallback
                    tango = _closure1_slot10;
                    zulu = _closure1_slot5;
                    mike = {};
                    report = _closure2_slot7;
                    golf = report.iconContainer;
                    report = new Array(2);
                    report[0] = golf;
                    oscar = _closure2_slot6;
                    report[1] = oscar;
                    mike['style'] = report;
                    golf = _closure1_slot10;
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 17;
                    report = report[entity];
                    entity = undefined;
                    report = oscar.bind(entity)(report);
                    oscar = report.LinkIcon;
                    report = {};
                    options = 'md';
                    report['size'] = options;
                    report = golf.bind(entity)(oscar, report);
                    mike['children'] = report;
                    entity = tango.bind(entity)(zulu, mike);
                    return entity;
                };
                entity['renderFallback'] = options;
                options = _closure2_slot10;
                entity['scale'] = options;
                verify = golf.height;
                options = _closure1_slot9;
                options = verify + options;
                entity['imageHeight'] = options;
                golf = golf.width;
                oscar = _closure1_slot9;
                oscar = golf + oscar;
                entity['imageWidth'] = oscar;
                report = _closure2_slot13;
                entity['hasSpoilerEmbeds'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            update = oscar.bind(foxtrot)(zulu, report);
            foxtrot = _closure1_slot4;
            oscar = foxtrot.useMemo;
            report = new Array(2);
            report[0] = backup;
            output = echo == romeo;
            zulu = undefined;
            if(output) { _fun00016_ip = 409; continue _fun00015 }
 404:
            zulu = romeo.guild_id;
 409:
            report[1] = zulu;
            zulu = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zulu = _closure2_slot1;
                    mike = zulu.getAvatarSource;
                    report = _closure2_slot9;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00020_ip = 37; continue _fun00019 }
 28:
                    tango = _closure2_slot9;
                    entity = tango.guild_id;
 37:
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            foxtrot = oscar.bind(foxtrot)(zulu, report);
            oscar = _closure1_slot4;
            report = oscar.useCallback;
            zulu = new Array(4);
            zulu[0] = result;
            zulu[1] = mike;
            zulu[2] = verify;
            zulu[3] = sizing;
            mike = function() {
                tango = _closure1_slot1;
                golf = _closure1_slot2;
                entity = 22;
                mike = golf[entity];
                entity = undefined;
                options = tango.bind(entity)(mike);
                report = _closure2_slot11;
                tango = null;
                oscar = tango != report;
                tango = '[LinkGridItem] Embed url cannot be null';
                tango = options.bind(entity)(oscar, tango);
                tango = _closure2_slot4;
                oscar = _closure1_slot0;
                zulu = 23;
                zulu = golf[zulu];
                golf = oscar.bind(entity)(zulu);
                oscar = golf.isLinkTrusted;
                zulu = _closure2_slot12;
                zulu = oscar.bind(golf)(report, zulu);
                mike = _closure2_slot2;
                mike = tango.bind(entity)(report, zulu, mike);
                return entity;
            };
            report = report.bind(oscar)(mike, zulu);
            oscar = _closure1_slot4;
            zulu = oscar.useCallback;
            mike = new Array(3);
            mike[0] = sizing;
            mike[1] = kilo;
            mike[2] = golf;
            entity = function() {
                tango = _closure2_slot5;
                zulu = _closure2_slot2;
                mike = _closure2_slot3;
                entity = undefined;
                mike = tango.bind(entity)(zulu, mike);
                return entity;
            };
            sizing = zulu.bind(oscar)(entity, mike);
            zulu = _closure1_slot11;
            golf = _closure1_slot0;
            oscar = _closure1_slot2;
            kilo = 19;
            entity = oscar[kilo];
            entity = golf.bind(tango)(entity);
            mike = entity.SearchListCardContainer;
            entity = {};
            entity['containerStyle'] = options;
            entity['onPress'] = report;
            output = _closure1_slot10;
            report = oscar[kilo];
            report = golf.bind(tango)(report);
            options = report.SearchListCardThumbnail;
            report = {};
            report['thumbnail'] = update;
            options = output.bind(tango)(options, report);
            report = new Array(3);
            report[0] = options;
            options = _closure1_slot10;
            oscar = oscar[kilo];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.SearchListCardContent;
            oscar = {};
            if(!(echo == offset)) { _fun00016_ip = 667; continue _fun00015 }
 612:
            source = _closure1_slot0;
            control = _closure1_slot2;
            offset = 11;
            output = control[offset];
            output = source.bind(tango)(output);
            update = output.intl;
            output = update.string;
            offset = control[offset];
            offset = source.bind(tango)(offset);
            offset = offset.t;
            offset = offset.mE3KJC;
            verify = output.bind(update)(offset);
 667:
            oscar['label'] = verify;
            output = _closure1_slot10;
            offset = _closure1_slot0;
            update = _closure1_slot2;
            verify = 14;
            verify = update[verify];
            verify = offset.bind(tango)(verify);
            offset = verify.Text;
            verify = {'variant': 'text-xs/normal', 'color': 'text-link', 'lineClamp': 1};
            if(!(echo == result)) { _fun00016_ip = 773; continue _fun00015 }
 718:
            control = _closure1_slot0;
            vacuum = _closure1_slot2;
            echo = 11;
            update = vacuum[echo];
            update = control.bind(tango)(update);
            source = update.intl;
            update = source.string;
            echo = vacuum[echo];
            echo = control.bind(tango)(echo);
            echo = echo.t;
            echo = echo.q2IIoK;
            result = update.bind(source)(echo);
 773:
            verify['children'] = result;
            verify = output.bind(tango)(offset, verify);
            oscar['subLabel'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            options = _closure1_slot10;
            offset = _closure1_slot0;
            verify = _closure1_slot2;
            oscar = 20;
            oscar = verify[oscar];
            oscar = offset.bind(tango)(oscar);
            golf = oscar.PressableHighlight;
            oscar = {};
            oscar['onPress'] = sizing;
            yankee = _closure1_slot10;
            verify = verify[kilo];
            verify = offset.bind(tango)(verify);
            offset = verify.SearchListCardFooter;
            verify = {};
            verify['author'] = backup;
            verify['avatarSource'] = foxtrot;
            verify['channel'] = romeo;
            verify = yankee.bind(tango)(offset, verify);
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[2] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = romeo.bind(entity)(tango);
    var _closure1_slot3 = tango;
    yankee = 1;
    golf = oscar[yankee];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot4 = golf;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.View;
    var _closure1_slot5 = options;
    tango = tango.useWindowDimensions;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.FILE_OR_LINK_IMAGE_BUFFER;
    var _closure1_slot9 = tango;
    tango = 6;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot10 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot11 = tango;
    tango = 7;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {};
    offset['flex'] = yankee;
    tango['container'] = offset;
    offset = {};
    yankee = 8;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.sm;
    offset['borderTopLeftRadius'] = foxtrot;
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.radii;
    yankee = yankee.sm;
    offset['borderTopRightRadius'] = yankee;
    tango['imageContainer'] = offset;
    offset = {'alignItems': 'center', 'justifyContent': 'center'};
    tango['iconContainer'] = offset;
    offset = {};
    yankee = 'italic';
    offset['fontStyle'] = yankee;
    tango['tapToSee'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot12 = tango;
    tango = golf.memo;
    mike = function(argFoo) {
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            verify = entity.data;
            options = entity.onPressSearchLink;
            golf = entity.onPress;
            oscar = entity.imageStyle;
            mike = entity.containerStyle;
            zulu = verify.embed;
            entity = null;
            if(!(entity == zulu)) { _fun00022_ip = 125; continue _fun00021 }
 43:
            report = _closure1_slot10;
            tango = _closure1_slot14;
            zulu = {};
            entity = verify.messageId;
            zulu['messageId'] = entity;
            entity = verify.channelId;
            zulu['channelId'] = entity;
            entity = verify.author;
            zulu['author'] = entity;
            entity = verify.mediaIndex;
            zulu['mediaIndex'] = entity;
            zulu['onPressSearchLink'] = options;
            zulu['onPress'] = golf;
            zulu['imageStyle'] = oscar;
            zulu['containerStyle'] = mike;
            entity = undefined;
            entity = report.bind(entity)(tango, zulu);
            _fun00022_ip = 216; continue _fun00021;
 125:
            report = _closure1_slot10;
            tango = _closure1_slot15;
            zulu = {};
            offset = verify.embed;
            zulu['embed'] = offset;
            offset = verify.messageId;
            zulu['messageId'] = offset;
            offset = verify.channelId;
            zulu['channelId'] = offset;
            offset = verify.author;
            zulu['author'] = offset;
            verify = verify.mediaIndex;
            zulu['mediaIndex'] = verify;
            zulu['onPressSearchLink'] = options;
            zulu['onPress'] = golf;
            zulu['imageStyle'] = oscar;
            zulu['containerStyle'] = mike;
            mike = undefined;
            entity = report.bind(mike)(tango, zulu);
 216:
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 24;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/search_v2/native/components/list/rows/LinkGridItem.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();