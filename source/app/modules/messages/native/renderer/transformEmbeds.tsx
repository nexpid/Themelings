// app/modules/messages/native/renderer/transformEmbeds.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: getURL
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            mike = entity.proxyURL;
            tango = entity.url;
            zulu = null;
            entity = tango;
            if(!(zulu != mike)) { _fun00002_ip = 37; continue _fun00001 }
 23:
            zulu = '';
            entity = tango;
            if(!(zulu !== mike)) { _fun00002_ip = 37; continue _fun00001 }
 34:
            entity = mike;
 37:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
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
    tango = report.bind(entity)(tango);
    tango = tango.processColor;
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.MessageEmbedTypes;
    var _closure1_slot4 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/renderer/transformEmbeds.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: transformEmbeds
        mike = argFoo;
        zulu = mike.embeds;
        tango = mike.channelId;
        var _closure2_slot0 = tango;
        tango = mike.gifAutoPlay;
        var _closure2_slot1 = tango;
        tango = mike.hasSpoilerEmbeds;
        var _closure2_slot2 = tango;
        tango = mike.ignoreEmbedDescriptionCache;
        var _closure2_slot3 = tango;
        tango = mike.playInline;
        var _closure2_slot4 = tango;
        tango = mike.shouldInlineEmbedMedia;
        var _closure2_slot5 = tango;
        tango = mike.colors;
        var _closure2_slot6 = tango;
        tango = mike.showListsAndHeaders;
        var _closure2_slot7 = tango;
        tango = mike.showMaskedLinks;
        var _closure2_slot8 = tango;
        tango = mike.themedBackgroundColor;
        var _closure2_slot9 = tango;
        tango = mike.shouldObscureExplicitMedia;
        var _closure2_slot10 = tango;
        tango = mike.authorIsBot;
        var _closure2_slot11 = tango;
        mike = mike.showContentInventoryEntryFallbackEmbed;
        var _closure2_slot12 = mike;
        mike = function(argFoo) { // Original name: renderEmbedMedia
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = argFoo;
                golf = zulu.url;
                mike = zulu.proxyURL;
                oscar = zulu.width;
                report = zulu.height;
                entity = {};
                backup = entity;
                foxtrot = zulu;
                zulu = copyDataProperties(backup, foxtrot);
                options = null;
                tango = mike;
                if(!(options != mike)) { _fun00004_ip = 102; continue _fun00003 }
 45:
                offset = _closure1_slot1;
                verify = _closure1_slot2;
                zulu = 2;
                verify = verify[zulu];
                zulu = undefined;
                offset = offset.bind(zulu)(verify);
                verify = offset.getImageSrc;
                zulu = _closure2_slot1;
                yankee = !zulu;
                kilo = offset;
                backup = mike;
                foxtrot = oscar;
                romeo = report;
                tango = kilo[verify](backup, foxtrot, romeo, yankee, offset);
 102:
                zulu = 'proxyURL';
                entity[zulu] = tango;
                verify = _closure1_slot1;
                tango = _closure1_slot2;
                zulu = 2;
                tango = tango[zulu];
                zulu = undefined;
                tango = verify.bind(zulu)(tango);
                zulu = tango.getImageSrc;
                if(!(options != mike)) { _fun00004_ip = 149; continue _fun00003 }
 146:
                golf = mike;
 149:
                mike = _closure2_slot1;
                yankee = !mike;
                kilo = tango;
                backup = golf;
                foxtrot = oscar;
                romeo = report;
                zulu = kilo[zulu](backup, foxtrot, romeo, yankee, offset);
                mike = 'url';
                entity[mike] = zulu;
                return entity;
            }
        };
        var _closure2_slot13 = mike;
        mike = zulu.flatMap;
        entity = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tango = argFoo;
                mike = tango.type;
                entity = _closure1_slot4;
                entity = entity.POST_PREVIEW;
                if(!(mike !== entity)) { _fun00006_ip = 2502; continue _fun00005 }
 28:
                mike = tango.type;
                entity = _closure1_slot4;
                entity = entity.GIFT;
                if(!(mike !== entity)) { _fun00006_ip = 2502; continue _fun00005 }
 50:
                mike = tango.type;
                entity = _closure1_slot4;
                entity = entity.SAFETY_POLICY_NOTICE;
                if(!(mike !== entity)) { _fun00006_ip = 2502; continue _fun00005 }
 72:
                mike = tango.type;
                entity = _closure1_slot4;
                entity = entity.SAFETY_SYSTEM_NOTIFICATION;
                if(!(mike !== entity)) { _fun00006_ip = 2502; continue _fun00005 }
 94:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 3;
                entity = mike[entity];
                mike = undefined;
                zulu = zulu.bind(mike)(entity);
                entity = zulu.isServerShopArticleEmbed;
                entity = entity.bind(zulu)(tango);
                if(entity) { _fun00006_ip = 2496; continue _fun00005 }
 133:
                zulu = tango.type;
                entity = _closure1_slot4;
                entity = entity.VOICE_CHANNEL;
                if(!(zulu !== entity)) { _fun00006_ip = 2490; continue _fun00005 }
 155:
                zulu = _closure1_slot0;
                report = _closure1_slot2;
                entity = 4;
                entity = report[entity];
                zulu = zulu.bind(mike)(entity);
                entity = zulu.isContentInventoryFallbackEmbed;
                entity = entity.bind(zulu)(tango);
                if(!entity) { _fun00006_ip = 205; continue _fun00005 }
 189:
                entity = _closure2_slot12;
                if(entity) { _fun00006_ip = 205; continue _fun00005 }
 199:
                entity = new Array(0);
                return entity;
 205:
                entity = _closure2_slot5;
                report = null;
                golf = null;
                if(!entity) { _fun00006_ip = 412; continue _fun00005 }
 222:
                entity = tango.thumbnail;
                entity = report != entity;
                golf = null;
                if(!entity) { _fun00006_ip = 412; continue _fun00005 }
 240:
                options = tango.thumbnail;
                romeo = options.url;
                oscar = options.proxyURL;
                yankee = options.width;
                offset = options.height;
                entity = {};
                papa = entity;
                context = options;
                options = copyDataProperties(papa, context);
                verify = oscar;
                if(!(report != oscar)) { _fun00006_ip = 335; continue _fun00005 }
 286:
                foxtrot = _closure1_slot1;
                backup = _closure1_slot2;
                options = 2;
                options = backup[options];
                backup = foxtrot.bind(mike)(options);
                foxtrot = backup.getImageSrc;
                options = _closure2_slot1;
                config = !options;
                target = backup;
                papa = oscar;
                context = yankee;
                record = offset;
                verify = target[foxtrot](papa, context, record, config, sequence);
 335:
                options = 'proxyURL';
                entity[options] = verify;
                verify = _closure1_slot1;
                foxtrot = _closure1_slot2;
                options = 2;
                options = foxtrot[options];
                verify = verify.bind(mike)(options);
                options = verify.getImageSrc;
                if(!(report != oscar)) { _fun00006_ip = 377; continue _fun00005 }
 374:
                romeo = oscar;
 377:
                oscar = _closure2_slot1;
                config = !oscar;
                target = verify;
                papa = romeo;
                context = yankee;
                record = offset;
                options = target[options](papa, context, record, config, sequence);
                oscar = 'url';
                entity[oscar] = options;
                golf = entity;
 412:
                entity = _closure2_slot5;
                offset = null;
                if(!entity) { _fun00006_ip = 456; continue _fun00005 }
 421:
                entity = tango.images;
                entity = report != entity;
                offset = null;
                if(!entity) { _fun00006_ip = 456; continue _fun00005 }
 436:
                options = tango.images;
                oscar = options.map;
                entity = _closure2_slot13;
                offset = oscar.bind(options)(entity);
 456:
                entity = _closure2_slot5;
                yankee = null;
                if(!entity) { _fun00006_ip = 495; continue _fun00005 }
 465:
                entity = tango.image;
                entity = report != entity;
                yankee = null;
                if(!entity) { _fun00006_ip = 495; continue _fun00005 }
 480:
                oscar = _closure2_slot13;
                entity = tango.image;
                yankee = oscar.bind(mike)(entity);
 495:
                romeo = golf;
                if(!(report != romeo)) { _fun00006_ip = 1001; continue _fun00005 }
 505:
                entity = tango.video;
                romeo = golf;
                if(!(report != entity)) { _fun00006_ip = 1001; continue _fun00005 }
 521:
                oscar = tango.type;
                entity = _closure1_slot4;
                entity = entity.GIFV;
                if(!(oscar === entity)) { _fun00006_ip = 550; continue _fun00005 }
 540:
                entity = _closure2_slot1;
                if(entity) { _fun00006_ip = 859; continue _fun00005 }
 550:
                oscar = tango.type;
                entity = _closure1_slot4;
                entity = entity.VIDEO;
                if(!(oscar !== entity)) { _fun00006_ip = 588; continue _fun00005 }
 569:
                oscar = tango.type;
                entity = _closure1_slot4;
                entity = entity.RICH;
                if(!(oscar === entity)) { _fun00006_ip = 607; continue _fun00005 }
 588:
                entity = tango.video;
                entity = entity.proxyURL;
                if(!(report == entity)) { _fun00006_ip = 859; continue _fun00005 }
 607:
                options = tango.type;
                entity = _closure1_slot4;
                entity = entity.VIDEO;
                oscar = golf;
                if(!(options === entity)) { _fun00006_ip = 928; continue _fun00005 }
 632:
                entity = tango.video;
                entity = entity.proxyURL;
                oscar = golf;
                if(!(report == entity)) { _fun00006_ip = 928; continue _fun00005 }
 654:
                options = _closure1_slot0;
                verify = _closure1_slot2;
                entity = 5;
                entity = verify[entity];
                verify = options.bind(mike)(entity);
                options = verify.shouldPlayVideoInline;
                foxtrot = tango.provider;
                backup = report == foxtrot;
                entity = undefined;
                if(backup) { _fun00006_ip = 700; continue _fun00005 }
 695:
                entity = foxtrot.name;
 700:
                entity = options.bind(verify)(entity);
                oscar = golf;
                if(!entity) { _fun00006_ip = 928; continue _fun00005 }
 714:
                entity = tango.provider;
                verify = report == entity;
                options = undefined;
                if(verify) { _fun00006_ip = 734; continue _fun00005 }
 729:
                options = entity.name;
 734:
                entity = 'YouTube';
                verify = false;
                if(!(entity === options)) { _fun00006_ip = 748; continue _fun00005 }
 746:
                verify = true;
 748:
                entity = tango.provider;
                foxtrot = report == entity;
                options = undefined;
                if(foxtrot) { _fun00006_ip = 768; continue _fun00005 }
 763:
                options = entity.name;
 768:
                entity = 'TikTok';
                if(!(entity === options)) { _fun00006_ip = 831; continue _fun00005 }
 778:
                options = _closure1_slot1;
                foxtrot = _closure1_slot2;
                entity = 6;
                entity = foxtrot[entity];
                foxtrot = options.bind(mike)(entity);
                options = foxtrot.trackExposure;
                entity = {};
                backup = 'transformEmbeds';
                entity['location'] = backup;
                entity = options.bind(foxtrot)(entity);
                entity = _closure2_slot4;
                verify = entity.tiktok;
 831:
                entity = {};
                papa = entity;
                context = golf;
                options = copyDataProperties(papa, context);
                options = 'showPlayButton';
                entity[options] = verify;
                oscar = entity;
                _fun00006_ip = 928; continue _fun00005;
 859:
                entity = {};
                papa = entity;
                context = golf;
                golf = copyDataProperties(papa, context);
                options = tango.type;
                golf = _closure1_slot4;
                golf = golf.GIFV;
                options = options === golf;
                golf = 'gifv';
                entity[golf] = options;
                options = _closure1_slot5;
                golf = tango.video;
                options = options.bind(mike)(golf);
                golf = 'videoUrl';
                entity[golf] = options;
                oscar = entity;
 928:
                golf = tango.type;
                entity = _closure1_slot4;
                entity = entity.GIFV;
                entity = golf !== entity;
                if(entity) { _fun00006_ip = 954; continue _fun00005 }
 950:
                entity = _closure2_slot1;
 954:
                romeo = oscar;
                if(entity) { _fun00006_ip = 1001; continue _fun00005 }
 960:
                entity = {};
                papa = entity;
                context = oscar;
                oscar = copyDataProperties(papa, context);
                golf = _closure1_slot5;
                oscar = tango.video;
                golf = golf.bind(mike)(oscar);
                oscar = 'gifvUrlForPortal';
                entity[oscar] = golf;
                romeo = entity;
 1001:
                entity = _closure2_slot6;
                oscar = entity.embedBorderLeftColor;
                entity = tango.color;
                entity = report != entity;
                if(!entity) { _fun00006_ip = 1036; continue _fun00005 }
 1023:
                options = tango.color;
                golf = '';
                entity = golf !== options;
 1036:
                if(!entity) { _fun00006_ip = 1053; continue _fun00005 }
 1039:
                golf = _closure1_slot3;
                entity = tango.color;
                oscar = golf.bind(mike)(entity);
 1053:
                golf = tango.type;
                entity = _closure1_slot4;
                entity = entity.RICH;
                if(!(golf === entity)) { _fun00006_ip = 1082; continue _fun00005 }
 1072:
                entity = tango.rawTitle;
                if(!(report == entity)) { _fun00006_ip = 1090; continue _fun00005 }
 1082:
                backup = tango.rawTitle;
                _fun00006_ip = 1132; continue _fun00005;
 1090:
                golf = _closure1_slot0;
                options = _closure1_slot2;
                entity = 7;
                entity = options[entity];
                verify = golf.bind(mike)(entity);
                options = verify.parseEmbedTitleMarkup;
                golf = tango.rawTitle;
                entity = _closure2_slot0;
                backup = options.bind(verify)(golf, entity);
 1132:
                golf = tango.type;
                entity = _closure1_slot4;
                entity = entity.IMAGE;
                foxtrot = undefined;
                if(!(entity !== golf)) { _fun00006_ip = 1316; continue _fun00005 }
 1156:
                entity = _closure1_slot4;
                entity = entity.VIDEO;
                foxtrot = undefined;
                if(!(entity !== golf)) { _fun00006_ip = 1316; continue _fun00005 }
 1175:
                entity = _closure1_slot4;
                entity = entity.GIFV;
                foxtrot = undefined;
                if(!(entity !== golf)) { _fun00006_ip = 1316; continue _fun00005 }
 1194:
                entity = _closure1_slot4;
                entity = entity.RICH;
                if(!(entity !== golf)) { _fun00006_ip = 1216; continue _fun00005 }
 1208:
                foxtrot = tango.rawDescription;
                _fun00006_ip = 1316; continue _fun00005;
 1216:
                entity = tango.rawDescription;
                entity = report != entity;
                foxtrot = undefined;
                if(!entity) { _fun00006_ip = 1316; continue _fun00005 }
 1231:
                golf = _closure1_slot0;
                options = _closure1_slot2;
                entity = 7;
                entity = options[entity];
                options = golf.bind(mike)(entity);
                golf = options.parseEmbedDescriptionMarkup;
                entity = {};
                verify = tango.rawDescription;
                entity['description'] = verify;
                verify = _closure2_slot0;
                entity['channelId'] = verify;
                verify = false;
                entity['isField'] = verify;
                verify = _closure2_slot3;
                entity['ignoreCache'] = verify;
                verify = _closure2_slot7;
                entity['showListsAndHeaders'] = verify;
                verify = _closure2_slot8;
                entity['showMaskedLinks'] = verify;
                foxtrot = golf.bind(options)(entity);
 1316:
                options = tango.fields;
                if(!(report == options)) { _fun00006_ip = 1330; continue _fun00005 }
 1326:
                options = new Array(0);
 1330:
                golf = options.map;
                entity = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        mike = argFoo;
                        entity = mike.rawName;
                        zulu = null;
                        entity = zulu == entity;
                        tango = null;
                        if(entity) { _fun00008_ip = 70; continue _fun00007 }
 20:
                        oscar = _closure1_slot0;
                        report = _closure1_slot2;
                        entity = 7;
                        report = report[entity];
                        entity = undefined;
                        golf = oscar.bind(entity)(report);
                        oscar = golf.parseEmbedTitleMarkup;
                        report = mike.rawName;
                        entity = _closure2_slot0;
                        tango = oscar.bind(golf)(report, entity);
 70:
                        entity = mike.rawValue;
                        entity = zulu == entity;
                        zulu = null;
                        if(entity) { _fun00008_ip = 194; continue _fun00007 }
 85:
                        oscar = _closure1_slot0;
                        report = _closure1_slot2;
                        entity = 7;
                        report = report[entity];
                        entity = undefined;
                        oscar = oscar.bind(entity)(report);
                        report = oscar.parseEmbedDescriptionMarkup;
                        entity = {};
                        golf = mike.rawValue;
                        entity['description'] = golf;
                        options = _closure2_slot0;
                        entity['channelId'] = options;
                        options = true;
                        entity['isField'] = options;
                        options = _closure2_slot3;
                        entity['ignoreCache'] = options;
                        options = {};
                        verify = '';
                        options['\t'] = verify;
                        entity['replaceMap'] = options;
                        options = _closure2_slot7;
                        entity['showListsAndHeaders'] = options;
                        golf = _closure2_slot8;
                        entity['showMaskedLinks'] = golf;
                        zulu = report.bind(oscar)(entity);
 194:
                        entity = {};
                        yankee = entity;
                        offset = mike;
                        mike = copyDataProperties(yankee, offset);
                        mike = 'name';
                        entity[mike] = tango;
                        mike = 'value';
                        entity[mike] = zulu;
                        return entity;
                    }
                };
                verify = golf.bind(options)(entity);
                entity = tango.timestamp;
                entity = report != entity;
                echo = null;
                if(!entity) { _fun00006_ip = 1401; continue _fun00005 }
 1364:
                golf = _closure1_slot0;
                options = _closure1_slot2;
                entity = 8;
                entity = options[entity];
                options = golf.bind(mike)(entity);
                golf = options.calendarFormat;
                entity = tango.timestamp;
                echo = golf.bind(options)(entity);
 1401:
                entity = tango.footer;
                if(!(report == entity)) { _fun00006_ip = 1445; continue _fun00005 }
 1411:
                entity = report != echo;
                golf = undefined;
                if(!entity) { _fun00006_ip = 1647; continue _fun00005 }
 1423:
                entity = {};
                entity['content'] = echo;
                options = '';
                entity['text'] = options;
                golf = entity;
                _fun00006_ip = 1647; continue _fun00005;
 1445:
                entity = tango.footer;
                result = entity.text;
                kilo = result;
                if(!(report != echo)) { _fun00006_ip = 1493; continue _fun00005 }
 1463:
                entity = global;
                entity = entity.HermesInternal;
                output = entity.concat;
                options = '';
                entity = ' | ';
                kilo = output.bind(options)(result, entity, echo);
 1493:
                entity = {};
                context = tango.footer;
                papa = entity;
                options = copyDataProperties(papa, context);
                options = 'content';
                entity[options] = kilo;
                options = tango.footer;
                options = options.iconProxyURL;
                if(!(report != options)) { _fun00006_ip = 1553; continue _fun00005 }
 1533:
                options = tango.footer;
                kilo = options.iconProxyURL;
                options = '';
                if(!(options === kilo)) { _fun00006_ip = 1567; continue _fun00005 }
 1553:
                options = tango.footer;
                echo = options.iconURL;
                _fun00006_ip = 1579; continue _fun00005;
 1567:
                options = tango.footer;
                echo = options.iconProxyURL;
 1579:
                golf = entity;
                if(!(report != echo)) { _fun00006_ip = 1647; continue _fun00005 }
 1586:
                kilo = _closure1_slot1;
                output = _closure1_slot2;
                options = 2;
                options = output[options];
                result = kilo.bind(mike)(options);
                output = result.getImageSrc;
                options = _closure2_slot1;
                config = !options;
                options = 16;
                target = result;
                papa = echo;
                context = options;
                record = options;
                options = target[output](papa, context, record, config, sequence);
                entity['iconURL'] = options;
                golf = entity;
 1647:
                entity = tango.author;
                entity = report != entity;
                options = undefined;
                if(!entity) { _fun00006_ip = 1821; continue _fun00005 }
 1665:
                entity = tango.author;
                entity = entity.iconProxyURL;
                if(!(report != entity)) { _fun00006_ip = 1701; continue _fun00005 }
 1681:
                entity = tango.author;
                kilo = entity.iconProxyURL;
                entity = '';
                if(!(entity === kilo)) { _fun00006_ip = 1715; continue _fun00005 }
 1701:
                entity = tango.author;
                source = entity.iconURL;
                _fun00006_ip = 1727; continue _fun00005;
 1715:
                entity = tango.author;
                source = entity.iconProxyURL;
 1727:
                if(!(report == source)) { _fun00006_ip = 1739; continue _fun00005 }
 1731:
                entity = tango.author;
                _fun00006_ip = 1818; continue _fun00005;
 1739:
                kilo = {};
                context = tango.author;
                papa = kilo;
                output = copyDataProperties(papa, context);
                result = _closure1_slot1;
                echo = _closure1_slot2;
                output = 2;
                output = echo[output];
                update = result.bind(mike)(output);
                echo = update.getImageSrc;
                output = _closure2_slot1;
                config = !output;
                output = 16;
                target = update;
                papa = source;
                context = output;
                record = output;
                result = target[echo](papa, context, record, config, sequence);
                output = 'iconURL';
                kilo[output] = result;
                entity = kilo;
 1818:
                options = entity;
 1821:
                output = _closure2_slot10;
                if(!output) { _fun00006_ip = 1835; continue _fun00005 }
 1828:
                entity = _closure2_slot11;
                output = !entity;
 1835:
                if(!output) { _fun00006_ip = 1875; continue _fun00005 }
 1838:
                kilo = _closure1_slot0;
                result = _closure1_slot2;
                entity = 9;
                entity = result[entity];
                result = kilo.bind(mike)(entity);
                kilo = result.isPendingScanVersion;
                entity = tango.contentScanVersion;
                output = kilo.bind(result)(entity);
 1875:
                update = _closure1_slot0;
                source = _closure1_slot2;
                entity = 9;
                kilo = source[entity];
                echo = update.bind(mike)(kilo);
                result = echo.isMediaObscured;
                kilo = {};
                entity = source[entity];
                entity = update.bind(mike)(entity);
                entity = entity.ObscuredMediaTypes;
                entity = entity.Embed;
                kilo['type'] = entity;
                kilo['media'] = tango;
                entity = _closure2_slot10;
                echo = result.bind(echo)(kilo, entity);
                entity = {};
                update = tango.id;
                source = report != update;
                kilo = '';
                result = kilo;
                if(!source) { _fun00006_ip = 1967; continue _fun00005 }
 1964:
                result = update;
 1967:
                entity['id'] = result;
                update = tango.type;
                source = report != update;
                result = undefined;
                if(!source) { _fun00006_ip = 1988; continue _fun00005 }
 1985:
                result = update;
 1988:
                entity['type'] = result;
                update = _closure2_slot2;
                result = kilo;
                if(!update) { _fun00006_ip = 2067; continue _fun00005 }
 2002:
                vacuum = _closure1_slot0;
                sequence = _closure1_slot2;
                update = 10;
                source = sequence[update];
                source = vacuum.bind(mike)(source);
                control = source.intl;
                source = control.string;
                update = sequence[update];
                update = vacuum.bind(mike)(update);
                update = update.t;
                update = update.F+x38P;
                source = source.bind(control)(update);
                update = source.toUpperCase;
                result = update.bind(source)();
 2067:
                entity['spoiler'] = result;
                result = kilo;
                if(!echo) { _fun00006_ip = 2133; continue _fun00005 }
 2078:
                control = _closure1_slot0;
                vacuum = _closure1_slot2;
                echo = 10;
                update = vacuum[echo];
                update = control.bind(mike)(update);
                source = update.intl;
                update = source.string;
                echo = vacuum[echo];
                echo = control.bind(mike)(echo);
                echo = echo.t;
                echo = echo.SpxcUV;
                result = update.bind(source)(echo);
 2133:
                entity['obscure'] = result;
                if(!output) { _fun00006_ip = 2196; continue _fun00005 }
 2141:
                echo = _closure1_slot0;
                update = _closure1_slot2;
                sizing = 10;
                output = update[sizing];
                output = echo.bind(mike)(output);
                result = output.intl;
                output = result.string;
                sizing = update[sizing];
                sizing = echo.bind(mike)(sizing);
                sizing = sizing.t;
                sizing = sizing.MRdR7+;
                kilo = output.bind(result)(sizing);
 2196:
                entity['obscureAwaitingScan'] = kilo;
                sizing = tango.provider;
                output = report != sizing;
                kilo = undefined;
                if(!output) { _fun00006_ip = 2219; continue _fun00005 }
 2216:
                kilo = sizing;
 2219:
                entity['provider'] = kilo;
                entity['author'] = options;
                options = tango.rawTitle;
                entity['rawTitle'] = options;
                kilo = report != backup;
                options = undefined;
                if(!kilo) { _fun00006_ip = 2252; continue _fun00005 }
 2249:
                options = backup;
 2252:
                entity['title'] = options;
                backup = tango.url;
                kilo = report != backup;
                options = undefined;
                if(!kilo) { _fun00006_ip = 2273; continue _fun00005 }
 2270:
                options = backup;
 2273:
                entity['url'] = options;
                options = tango.rawDescription;
                entity['rawDescription'] = options;
                backup = report != foxtrot;
                options = undefined;
                if(!backup) { _fun00006_ip = 2300; continue _fun00005 }
 2297:
                options = foxtrot;
 2300:
                entity['description'] = options;
                foxtrot = report != romeo;
                options = undefined;
                if(!foxtrot) { _fun00006_ip = 2316; continue _fun00005 }
 2313:
                options = romeo;
 2316:
                entity['thumbnail'] = options;
                romeo = report != yankee;
                options = undefined;
                if(!romeo) { _fun00006_ip = 2333; continue _fun00005 }
 2330:
                options = yankee;
 2333:
                entity['image'] = options;
                yankee = report != offset;
                options = undefined;
                if(!yankee) { _fun00006_ip = 2350; continue _fun00005 }
 2347:
                options = offset;
 2350:
                entity['images'] = options;
                offset = report != verify;
                options = undefined;
                if(!offset) { _fun00006_ip = 2367; continue _fun00005 }
 2364:
                options = verify;
 2367:
                entity['fields'] = options;
                entity['footer'] = golf;
                options = tango.video;
                verify = report != options;
                golf = undefined;
                if(!verify) { _fun00006_ip = 2395; continue _fun00005 }
 2392:
                golf = options;
 2395:
                entity['video'] = golf;
                entity['borderLeftColor'] = oscar;
                oscar = _closure2_slot6;
                golf = oscar.embedProviderColor;
                entity['providerColor'] = golf;
                golf = oscar.embedHeaderTextColor;
                entity['headerTextColor'] = golf;
                oscar = oscar.embedBodyTextColor;
                entity['bodyTextColor'] = oscar;
                oscar = tango.referenceId;
                golf = report != oscar;
                tango = undefined;
                if(!golf) { _fun00006_ip = 2462; continue _fun00005 }
 2459:
                tango = oscar;
 2462:
                entity['referenceId'] = tango;
                tango = _closure2_slot9;
                tango = report != tango;
                mike = undefined;
                if(!tango) { _fun00006_ip = 2484; continue _fun00005 }
 2480:
                mike = _closure2_slot9;
 2484:
                entity['backgroundColor'] = mike;
                return entity;
 2490:
                entity = new Array(0);
                return entity;
 2496:
                entity = new Array(0);
                return entity;
 2502:
                entity = new Array(0);
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();