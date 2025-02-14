// app/modules/search_v2/native/components/list/rows/FileGridItem.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo) { // Original name: getAttachmentIcon
        _fun113640: for(var _fun113640_ip = 0; ; ) switch(_fun113640_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            oscar = 7;
            entity = entity[oscar];
            report = undefined;
            zulu = zulu.bind(report)(entity);
            entity = zulu.isImageFile;
            entity = entity.bind(zulu)(tango);
            if(entity) { _fun113640_ip = 168; continue _fun113640 }
 45:
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[oscar];
            zulu = zulu.bind(report)(entity);
            entity = zulu.isVideoFile;
            entity = entity.bind(zulu)(tango);
            oscar = _closure1_slot8;
            tango = _closure1_slot0;
            golf = _closure1_slot1;
            if(entity) { _fun113640_ip = 128; continue _fun113640 }
 88:
            entity = 10;
            entity = golf[entity];
            entity = tango.bind(report)(entity);
            zulu = entity.FileIcon;
            entity = {'size': 'lg', 'color': 'interactive-normal'};
            entity = oscar.bind(report)(zulu, entity);
            _fun113640_ip = 166; continue _fun113640;
 128:
            zulu = 9;
            zulu = golf[zulu];
            zulu = tango.bind(report)(zulu);
            tango = zulu.VideoIcon;
            zulu = {'size': 'lg', 'color': 'interactive-normal'};
            entity = oscar.bind(report)(tango, zulu);
 166:
            _fun113640_ip = 218; continue _fun113640;
 168:
            tango = _closure1_slot8;
            zulu = _closure1_slot0;
            oscar = _closure1_slot1;
            mike = 8;
            mike = oscar[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.ImageIcon;
            mike = {'size': 'lg', 'color': 'interactive-normal'};
            entity = tango.bind(report)(zulu, mike);
 218:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot2 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.View;
    var _closure1_slot3 = options;
    tango = tango.useWindowDimensions;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.FILE_OR_LINK_IMAGE_BUFFER;
    var _closure1_slot6 = options;
    tango = tango.SearchFileTypes;
    var _closure1_slot7 = tango;
    tango = 4;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot8 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot9 = tango;
    tango = 5;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {'flex': 1, 'padding': 0, 'backgroundColor': null, 'overflow': 'hidden'};
    yankee = 6;
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_PRIMARY;
    offset['backgroundColor'] = yankee;
    tango['container'] = offset;
    offset = {'alignItems': 'center', 'justifyContent': 'center'};
    tango['icon'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot10 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: FileGridItem
        _fun113641: for(var _fun113641_ip = 0; ; ) switch(_fun113641_ip) {
 0:
            zulu = argFoo;
            yankee = zulu.data;
            var _closure2_slot0 = yankee;
            mike = zulu.onPress;
            var _closure2_slot1 = mike;
            kilo = zulu.imageStyle;
            var _closure2_slot2 = kilo;
            foxtrot = zulu.containerStyle;
            zulu = _closure1_slot10;
            tango = undefined;
            options = zulu.bind(tango)();
            var _closure2_slot3 = options;
            zulu = _closure1_slot4;
            zulu = zulu.bind(tango)();
            romeo = zulu.scale;
            var _closure2_slot4 = romeo;
            report = _closure1_slot0;
            golf = _closure1_slot1;
            zulu = 11;
            zulu = golf[zulu];
            verify = report.bind(tango)(zulu);
            golf = verify.useStateFromStores;
            zulu = _closure1_slot5;
            report = new Array(1);
            report[0] = zulu;
            zulu = function() {
                zulu = _closure1_slot5;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = entity.channelId;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            verify = golf.bind(verify)(report, zulu);
            var _closure2_slot5 = verify;
            offset = _closure1_slot2;
            golf = offset.useMemo;
            zulu = yankee.author;
            report = new Array(2);
            report[0] = zulu;
            zulu = null;
            backup = zulu == verify;
            zulu = undefined;
            if(backup) { _fun113641_ip = 167; continue _fun113641 }
 162:
            zulu = verify.guild_id;
 167:
            report[1] = zulu;
            zulu = function() {
                _fun113643: for(var _fun113643_ip = 0; ; ) switch(_fun113643_ip) {
 0:
                    entity = _closure2_slot0;
                    zulu = entity.author;
                    mike = zulu.getAvatarSource;
                    report = _closure2_slot5;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun113643_ip = 43; continue _fun113643 }
 34:
                    tango = _closure2_slot5;
                    entity = tango.guild_id;
 43:
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            offset = golf.bind(offset)(zulu, report);
            zulu = yankee.attachment;
            backup = zulu.filename;
            zulu = yankee.attachment;
            output = zulu.size;
            golf = _closure1_slot2;
            report = golf.useCallback;
            sizing = yankee.channelId;
            zulu = new Array(3);
            zulu[0] = sizing;
            sizing = yankee.messageId;
            zulu[1] = sizing;
            zulu[2] = mike;
            mike = function() {
                tango = _closure2_slot1;
                entity = _closure2_slot0;
                zulu = entity.channelId;
                mike = entity.messageId;
                entity = undefined;
                mike = tango.bind(entity)(zulu, mike);
                return entity;
            };
            report = report.bind(golf)(mike, zulu);
            zulu = golf.useMemo;
            mike = new Array(4);
            mike[0] = yankee;
            mike[1] = kilo;
            mike[2] = romeo;
            options = options.icon;
            mike[3] = options;
            entity = function() {
                _fun113645: for(var _fun113645_ip = 0; ; ) switch(_fun113645_ip) {
 0:
                    entity = _closure2_slot0;
                    mike = entity.type;
                    entity = _closure1_slot7;
                    entity = entity.ATTACHMENT;
                    if(!(entity !== mike)) { _fun113645_ip = 116; continue _fun113645 }
 29:
                    entity = _closure1_slot7;
                    entity = entity.SOUND;
                    if(!(entity !== mike)) { _fun113645_ip = 47; continue _fun113645 }
 43:
                    entity = undefined;
                    return entity;
 47:
                    tango = _closure1_slot8;
                    mike = _closure1_slot0;
                    zulu = _closure1_slot1;
                    entity = 12;
                    entity = zulu[entity];
                    zulu = undefined;
                    entity = mike.bind(zulu)(entity);
                    mike = entity.SearchSoundMediaImage;
                    entity = {};
                    report = _closure2_slot2;
                    entity['containerStyle'] = report;
                    options = report.height;
                    entity['height'] = options;
                    report = report.width;
                    entity['width'] = report;
                    entity = tango.bind(zulu)(mike, entity);
                    return entity;
 116:
                    tango = _closure1_slot8;
                    mike = _closure1_slot0;
                    zulu = _closure1_slot1;
                    entity = 12;
                    entity = zulu[entity];
                    zulu = undefined;
                    entity = mike.bind(zulu)(entity);
                    mike = entity.SearchAttachmentMediaImage;
                    entity = {};
                    report = _closure2_slot2;
                    entity['containerStyle'] = report;
                    options = _closure2_slot0;
                    verify = options.attachment;
                    entity['attachment'] = verify;
                    verify = options.channelId;
                    entity['channelId'] = verify;
                    options = options.author;
                    options = options.id;
                    entity['authorId'] = options;
                    golf = _closure2_slot4;
                    entity['scale'] = golf;
                    golf = report.height;
                    oscar = _closure1_slot6;
                    golf = golf + oscar;
                    entity['imageHeight'] = golf;
                    report = report.width;
                    report = report + oscar;
                    entity['imageWidth'] = report;
                    report = function() { // Original name: renderFallback
                        tango = _closure1_slot8;
                        zulu = _closure1_slot3;
                        mike = {};
                        oscar = _closure2_slot3;
                        golf = oscar.icon;
                        oscar = new Array(2);
                        oscar[0] = golf;
                        golf = _closure2_slot2;
                        oscar[1] = golf;
                        mike['style'] = oscar;
                        oscar = _closure1_slot11;
                        entity = _closure2_slot0;
                        entity = entity.attachment;
                        report = entity.filename;
                        entity = undefined;
                        report = oscar.bind(entity)(report);
                        mike['children'] = report;
                        entity = tango.bind(entity)(zulu, mike);
                        return entity;
                    };
                    entity['renderFallback'] = report;
                    entity = tango.bind(zulu)(mike, entity);
                    return entity;
                }
            };
            sizing = zulu.bind(golf)(entity, mike);
            zulu = _closure1_slot9;
            options = _closure1_slot0;
            golf = _closure1_slot1;
            romeo = 13;
            entity = golf[romeo];
            entity = options.bind(tango)(entity);
            mike = entity.SearchListCardContainer;
            entity = {};
            entity['containerStyle'] = foxtrot;
            entity['onPress'] = report;
            kilo = _closure1_slot8;
            report = golf[romeo];
            report = options.bind(tango)(report);
            foxtrot = report.SearchListCardThumbnail;
            report = {};
            report['thumbnail'] = sizing;
            foxtrot = kilo.bind(tango)(foxtrot, report);
            report = new Array(3);
            report[0] = foxtrot;
            foxtrot = _closure1_slot8;
            golf = golf[romeo];
            golf = options.bind(tango)(golf);
            options = golf.SearchListCardContent;
            golf = {};
            golf['label'] = backup;
            backup = 0;
            kilo = output > backup;
            backup = undefined;
            if(!kilo) { _fun113641_ip = 446; continue _fun113641 }
 415:
            sizing = _closure1_slot0;
            result = _closure1_slot1;
            kilo = 14;
            kilo = result[kilo];
            sizing = sizing.bind(tango)(kilo);
            kilo = sizing.sizeString;
            backup = kilo.bind(sizing)(output);
 446:
            golf['subLabel'] = backup;
            golf = foxtrot.bind(tango)(options, golf);
            report[1] = golf;
            options = _closure1_slot8;
            golf = _closure1_slot0;
            oscar = _closure1_slot1;
            oscar = oscar[romeo];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.SearchListCardFooter;
            oscar = {};
            yankee = yankee.author;
            oscar['author'] = yankee;
            oscar['avatarSource'] = offset;
            oscar['channel'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[2] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/search_v2/native/components/list/rows/FileGridItem.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();