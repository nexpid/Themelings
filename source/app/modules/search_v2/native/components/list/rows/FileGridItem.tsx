// app/modules/search_v2/native/components/list/rows/FileGridItem.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo) { // Original name: getAttachmentIcon
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            oscard = 7;
            entity = entity[oscard];
            report = undefined;
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.isImageFile;
            entity = entity.bind(zuuluu)(tangon);
            if(entity) { _fun00002_ip = 168; continue _fun00001 }
 45:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[oscard];
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.isVideoFile;
            entity = entity.bind(zuuluu)(tangon);
            oscard = _closure1_slot8;
            tangon = _closure1_slot0;
            golfie = _closure1_slot1;
            if(entity) { _fun00002_ip = 128; continue _fun00001 }
 88:
            entity = 10;
            entity = golfie[entity];
            entity = tangon.bind(report)(entity);
            zuuluu = entity.FileIcon;
            entity = {'size': 'lg', 'color': 'interactive-normal'};
            entity = oscard.bind(report)(zuuluu, entity);
            _fun00002_ip = 166; continue _fun00001;
 128:
            zuuluu = 9;
            zuuluu = golfie[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = zuuluu.VideoIcon;
            zuuluu = {'size': 'lg', 'color': 'interactive-normal'};
            entity = oscard.bind(report)(tangon, zuuluu);
 166:
            _fun00002_ip = 218; continue _fun00001;
 168:
            tangon = _closure1_slot8;
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 8;
            michal = oscard[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.ImageIcon;
            michal = {'size': 'lg', 'color': 'interactive-normal'};
            entity = tangon.bind(report)(zuuluu, michal);
 218:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot2 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.View;
    var _closure1_slot3 = option;
    tangon = tangon.useWindowDimensions;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.FILE_OR_LINK_IMAGE_BUFFER;
    var _closure1_slot6 = option;
    tangon = tangon.SearchFileTypes;
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.jsx;
    var _closure1_slot8 = option;
    tangon = tangon.jsxs;
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {'flex': 1, 'padding': 0, 'backgroundColor': null, 'overflow': 'hidden'};
    yankee = 6;
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_PRIMARY;
    offset['backgroundColor'] = yankee;
    tangon['container'] = offset;
    offset = {'alignItems': 'center', 'justifyContent': 'center'};
    tangon['icon'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot10 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: FileGridItem
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            yankee = zuuluu.data;
            var _closure2_slot0 = yankee;
            michal = zuuluu.onPress;
            var _closure2_slot1 = michal;
            kiloes = zuuluu.imageStyle;
            var _closure2_slot2 = kiloes;
            foxtra = zuuluu.containerStyle;
            tangon = undefined;
            var _closure2_slot6 = tangon;
            zuuluu = _closure1_slot10;
            option = zuuluu.bind(tangon)();
            var _closure2_slot3 = option;
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.bind(tangon)();
            romeon = zuuluu.scale;
            var _closure2_slot4 = romeon;
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 11;
            zuuluu = golfie[zuuluu];
            verify = report.bind(tangon)(zuuluu);
            golfie = verify.useStateFromStores;
            zuuluu = _closure1_slot5;
            report = new Array(1);
            report[0] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = entity.channelId;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            verify = golfie.bind(verify)(report, zuuluu);
            var _closure2_slot5 = verify;
            offset = _closure1_slot2;
            golfie = offset.useMemo;
            zuuluu = yankee.author;
            report = new Array(2);
            report[0] = zuuluu;
            zuuluu = null;
            backup = zuuluu == verify;
            zuuluu = undefined;
            if(backup) { _fun00004_ip = 171; continue _fun00003 }
 166:
            zuuluu = verify.guild_id;
 171:
            report[1] = zuuluu;
            zuuluu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot0;
                    zuuluu = entity.author;
                    michal = zuuluu.getAvatarSource;
                    report = _closure2_slot5;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00006_ip = 43; continue _fun00005 }
 34:
                    tangon = _closure2_slot5;
                    entity = tangon.guild_id;
 43:
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            offset = golfie.bind(offset)(zuuluu, report);
            zuuluu = yankee.attachment;
            backup = zuuluu.filename;
            _closure2_slot6 = backup;
            zuuluu = yankee.attachment;
            output = zuuluu.size;
            golfie = _closure1_slot2;
            report = golfie.useCallback;
            sizing = yankee.channelId;
            zuuluu = new Array(3);
            zuuluu[0] = sizing;
            sizing = yankee.messageId;
            zuuluu[1] = sizing;
            zuuluu[2] = michal;
            michal = function() {
                zuuluu = _closure2_slot1;
                michal = {};
                entity = _closure2_slot0;
                tangon = entity.channelId;
                michal['channelId'] = tangon;
                entity = entity.messageId;
                michal['messageId'] = entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            report = report.bind(golfie)(michal, zuuluu);
            zuuluu = golfie.useMemo;
            michal = new Array(5);
            michal[0] = yankee;
            michal[1] = backup;
            michal[2] = kiloes;
            michal[3] = romeon;
            option = option.icon;
            michal[4] = option;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = _closure2_slot0;
                    michal = entity.type;
                    entity = _closure1_slot7;
                    entity = entity.ATTACHMENT;
                    if(!(entity !== michal)) { _fun00008_ip = 116; continue _fun00007 }
 29:
                    entity = _closure1_slot7;
                    entity = entity.SOUND;
                    if(!(entity !== michal)) { _fun00008_ip = 47; continue _fun00007 }
 43:
                    entity = undefined;
                    return entity;
 47:
                    tangon = _closure1_slot8;
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    entity = 12;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    entity = michal.bind(zuuluu)(entity);
                    michal = entity.SearchSoundMediaImage;
                    entity = {};
                    report = _closure2_slot2;
                    entity['containerStyle'] = report;
                    oscard = report.height;
                    entity['height'] = oscard;
                    report = report.width;
                    entity['width'] = report;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
 116:
                    entity = _closure2_slot0;
                    entity = entity.attachment;
                    entity = entity.width;
                    zuuluu = null;
                    if(!(zuuluu != entity)) { _fun00008_ip = 196; continue _fun00007 }
 137:
                    entity = _closure2_slot0;
                    entity = entity.attachment;
                    entity = entity.width;
                    michal = 0;
                    if(!(entity > michal)) { _fun00008_ip = 196; continue _fun00007 }
 158:
                    entity = _closure2_slot0;
                    entity = entity.attachment;
                    entity = entity.height;
                    if(!(zuuluu != entity)) { _fun00008_ip = 196; continue _fun00007 }
 177:
                    entity = _closure2_slot0;
                    entity = entity.attachment;
                    entity = entity.height;
                    if(!(!(entity > michal))) { _fun00008_ip = 277; continue _fun00007 }
 196:
                    tangon = _closure1_slot8;
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    entity = 12;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    entity = michal.bind(zuuluu)(entity);
                    michal = entity.SearchFileMediaImage;
                    entity = {};
                    report = _closure2_slot6;
                    entity['fileName'] = report;
                    report = _closure2_slot2;
                    entity['containerStyle'] = report;
                    oscard = report.height;
                    entity['height'] = oscard;
                    report = report.width;
                    entity['width'] = report;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    _fun00008_ip = 421; continue _fun00007;
 277:
                    report = _closure1_slot8;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot1;
                    michal = 12;
                    michal = tangon[michal];
                    tangon = undefined;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = michal.SearchAttachmentMediaImage;
                    michal = {};
                    oscard = _closure2_slot2;
                    michal['containerStyle'] = oscard;
                    verify = _closure2_slot0;
                    offset = verify.attachment;
                    michal['attachment'] = offset;
                    offset = verify.channelId;
                    michal['channelId'] = offset;
                    verify = verify.author;
                    verify = verify.id;
                    michal['authorId'] = verify;
                    option = _closure2_slot4;
                    michal['scale'] = option;
                    option = oscard.height;
                    golfie = _closure1_slot6;
                    option = option + golfie;
                    michal['imageHeight'] = option;
                    oscard = oscard.width;
                    oscard = oscard + golfie;
                    michal['imageWidth'] = oscard;
                    oscard = function() { // Original name: renderFallback
                        tangon = _closure1_slot8;
                        zuuluu = _closure1_slot3;
                        michal = {};
                        oscard = _closure2_slot3;
                        golfie = oscard.icon;
                        oscard = new Array(2);
                        oscard[0] = golfie;
                        golfie = _closure2_slot2;
                        oscard[1] = golfie;
                        michal['style'] = oscard;
                        oscard = _closure1_slot11;
                        entity = _closure2_slot0;
                        entity = entity.attachment;
                        report = entity.filename;
                        entity = undefined;
                        report = oscard.bind(entity)(report);
                        michal['children'] = report;
                        entity = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    };
                    michal['renderFallback'] = oscard;
                    entity = report.bind(tangon)(zuuluu, michal);
 421:
                    return entity;
                }
            };
            sizing = zuuluu.bind(golfie)(entity, michal);
            zuuluu = _closure1_slot9;
            option = _closure1_slot0;
            golfie = _closure1_slot1;
            romeon = 13;
            entity = golfie[romeon];
            entity = option.bind(tangon)(entity);
            michal = entity.SearchListCardContainer;
            entity = {};
            entity['containerStyle'] = foxtra;
            entity['onPress'] = report;
            kiloes = _closure1_slot8;
            report = golfie[romeon];
            report = option.bind(tangon)(report);
            foxtra = report.SearchListCardThumbnail;
            report = {};
            report['thumbnail'] = sizing;
            foxtra = kiloes.bind(tangon)(foxtra, report);
            report = new Array(3);
            report[0] = foxtra;
            foxtra = _closure1_slot8;
            golfie = golfie[romeon];
            golfie = option.bind(tangon)(golfie);
            option = golfie.SearchListCardContent;
            golfie = {};
            golfie['label'] = backup;
            backup = 0;
            kiloes = output > backup;
            backup = undefined;
            if(!kiloes) { _fun00004_ip = 458; continue _fun00003 }
 427:
            sizing = _closure1_slot0;
            result = _closure1_slot1;
            kiloes = 14;
            kiloes = result[kiloes];
            sizing = sizing.bind(tangon)(kiloes);
            kiloes = sizing.sizeString;
            backup = kiloes.bind(sizing)(output);
 458:
            golfie['subLabel'] = backup;
            golfie = foxtra.bind(tangon)(option, golfie);
            report[1] = golfie;
            option = _closure1_slot8;
            golfie = _closure1_slot0;
            oscard = _closure1_slot1;
            oscard = oscard[romeon];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.SearchListCardFooter;
            oscard = {};
            yankee = yankee.author;
            oscard['author'] = yankee;
            oscard['avatarSource'] = offset;
            oscard['channel'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/components/list/rows/FileGridItem.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();