// app/modules/launchpad/native/shared/ChannelRowPreview.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    verify = argBar;
    golf = argBaz;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = offset;
    entity = function(argFoo) { // Original name: identityHook
        entity = argFoo;
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo, argBar) { // Original name: renderMessageText
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            entity = argBar;
            backup = mike.username;
            offset = mike.content;
            zulu = mike.icon;
            kilo = entity.variant;
            yankee = entity.color;
            update = entity.muted;
            output = entity.lineClamp;
            tango = undefined;
            if(!(output === tango)) { _fun00002_ip = 52; continue _fun00001 }
 49:
            output = 1;
 52:
            mike = entity.fontScale;
            if(!(mike === tango)) { _fun00002_ip = 65; continue _fun00001 }
 62:
            mike = 1;
 65:
            foxtrot = entity.maxFontSizeMultiplier;
            if(!(foxtrot === tango)) { _fun00002_ip = 85; continue _fun00001 }
 75:
            foxtrot = 1.75;
 85:
            golf = _closure1_slot1;
            entity = _closure1_slot2;
            oscar = 9;
            oscar = entity[oscar];
            oscar = golf.bind(tango)(oscar);
            sizing = oscar.bind(tango)();
            oscar = _closure1_slot0;
            result = 10;
            entity = entity[result];
            entity = oscar.bind(tango)(entity);
            oscar = entity.TextStyleSheet;
            entity = sizing.messagePreview;
            entity = entity.text;
            entity = entity.variant;
            entity = oscar[entity];
            entity = entity.lineHeight;
            options = entity * mike;
            verify = null;
            entity = verify != zulu;
            oscar = undefined;
            if(!entity) { _fun00002_ip = 247; continue _fun00001 }
 175:
            mike = _closure1_slot3;
            entity = 2;
            mike = mike.bind(tango)(zulu, entity);
            entity = 0;
            zulu = mike[entity];
            entity = 1;
            entity = mike[entity];
            mike = _closure1_slot11;
            entity = {};
            golf = sizing.messagePreview;
            golf = golf.messageTypeIconSizeNew;
            entity['size'] = golf;
            entity['color'] = yankee;
            golf = {};
            romeo = 4;
            golf['marginLeft'] = romeo;
            entity['style'] = golf;
            oscar = mike.bind(tango)(zulu, entity);
 247:
            zulu = _closure1_slot12;
            mike = _closure1_slot5;
            entity = {};
            golf = {'flexDirection': 'row', 'alignItems': 'center'};
            romeo = 1;
            echo = romeo;
            if(update) { _fun00002_ip = 280; continue _fun00001 }
 276:
            echo = _closure1_slot10;
 280:
            golf['opacity'] = echo;
            golf['minHeight'] = options;
            entity['style'] = golf;
            options = _closure1_slot12;
            golf = _closure1_slot0;
            report = _closure1_slot2;
            report = report[result];
            report = golf.bind(tango)(report);
            golf = report.Text;
            report = {};
            report['lineClamp'] = output;
            if(!(verify == kilo)) { _fun00002_ip = 346; continue _fun00001 }
 330:
            sizing = sizing.messagePreview;
            sizing = sizing.text;
            kilo = sizing.variant;
 346:
            report['variant'] = kilo;
            report['maxFontSizeMultiplier'] = foxtrot;
            report['color'] = yankee;
            yankee = {};
            yankee['flexShrink'] = romeo;
            report['style'] = yankee;
            yankee = verify != backup;
            if(!yankee) { _fun00002_ip = 406; continue _fun00001 }
 377:
            verify = global;
            verify = verify.HermesInternal;
            foxtrot = verify.concat;
            romeo = '';
            verify = ': ';
            yankee = foxtrot.bind(romeo)(backup, verify);
 406:
            verify = new Array(2);
            verify[0] = yankee;
            verify[1] = offset;
            report['children'] = verify;
            golf = options.bind(tango)(golf, report);
            report = new Array(2);
            report[0] = golf;
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar) { // Original name: renderSystemMessage
        tango = _closure1_slot16;
        zulu = {};
        entity = argFoo;
        zulu['content'] = entity;
        mike = undefined;
        entity = argBar;
        entity = tango.bind(mike)(zulu, entity);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: Call
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            mike = entity.message;
            oscar = entity.color;
            zulu = entity.channel;
            report = entity.muted;
            options = mike.id;
            tango = _closure1_slot6;
            zulu = tango.getId;
            verify = zulu.bind(tango)();
            zulu = mike.getChannelId;
            golf = zulu.bind(mike)();
            offset = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 11;
            zulu = tango[zulu];
            tango = undefined;
            zulu = offset.bind(tango)(zulu);
            golf = zulu.bind(tango)(golf, options);
            zulu = _closure1_slot17;
            if(golf) { _fun00004_ip = 243; continue _fun00003 }
 94:
            offset = mike.call;
            options = null;
            if(!(options != offset)) { _fun00004_ip = 186; continue _fun00003 }
 105:
            mike = mike.call;
            options = mike.participants;
            mike = options.includes;
            mike = mike.bind(options)(verify);
            if(mike) { _fun00004_ip = 186; continue _fun00003 }
 129:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            mike = 12;
            options = yankee[mike];
            options = offset.bind(tango)(options);
            verify = options.intl;
            options = verify.string;
            mike = yankee[mike];
            mike = offset.bind(tango)(mike);
            mike = mike.t;
            mike = mike.2CnhoK;
            mike = options.bind(verify)(mike);
            _fun00004_ip = 241; continue _fun00003;
 186:
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            options = 12;
            verify = romeo[options];
            verify = yankee.bind(tango)(verify);
            offset = verify.intl;
            verify = offset.string;
            options = romeo[options];
            options = yankee.bind(tango)(options);
            options = options.t;
            options = options.v05Xd3;
            mike = verify.bind(offset)(options);
 241:
            _fun00004_ip = 298; continue _fun00003;
 243:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 12;
            options = yankee[entity];
            options = offset.bind(tango)(options);
            verify = options.intl;
            options = verify.string;
            entity = yankee[entity];
            entity = offset.bind(tango)(entity);
            entity = entity.t;
            entity = entity.NGg/fn;
            mike = options.bind(verify)(entity);
 298:
            entity = {};
            entity['muted'] = report;
            report = 'text-positive';
            if(golf) { _fun00004_ip = 317; continue _fun00003 }
 314:
            report = oscar;
 317:
            entity['color'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: Default
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = argFoo;
            oscar = mike.message;
            var _closure2_slot0 = oscar;
            kilo = mike.channel;
            var _closure2_slot1 = kilo;
            yankee = mike.variant;
            romeo = mike.color;
            var _closure2_slot2 = romeo;
            options = mike.username;
            offset = mike.muted;
            var _closure2_slot3 = offset;
            tango = mike.postProcessor;
            var _closure2_slot4 = tango;
            zulu = mike.lineClamp;
            verify = _closure1_slot0;
            golf = _closure1_slot2;
            report = 13;
            golf = golf[report];
            report = undefined;
            verify = verify.bind(report)(golf);
            golf = verify.useFontScale;
            golf = golf.bind(verify)();
            var _closure2_slot5 = golf;
            backup = _closure1_slot4;
            foxtrot = backup.useMemo;
            sizing = oscar.content;
            verify = new Array(7);
            verify[0] = sizing;
            verify[1] = offset;
            sizing = kilo.guild_id;
            verify[2] = sizing;
            kilo = kilo.id;
            verify[3] = kilo;
            verify[4] = romeo;
            verify[5] = tango;
            verify[6] = golf;
            tango = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 14;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.renderMessagePreviewMarkup;
                entity = {};
                oscar = _closure2_slot0;
                oscar = oscar.content;
                entity['content'] = oscar;
                oscar = _closure2_slot3;
                entity['muted'] = oscar;
                oscar = _closure2_slot1;
                golf = oscar.guild_id;
                entity['guildId'] = golf;
                oscar = oscar.id;
                entity['channelId'] = oscar;
                oscar = _closure2_slot2;
                entity['color'] = oscar;
                oscar = _closure2_slot4;
                entity['postProcessor'] = oscar;
                report = _closure2_slot5;
                entity['fontScale'] = report;
                tango = _closure1_slot13;
                entity['maxFontSizeMultiplier'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            verify = foxtrot.bind(backup)(tango, verify);
            tango = {};
            tango['color'] = romeo;
            tango['variant'] = yankee;
            tango['muted'] = offset;
            tango['message'] = oscar;
            tango['fontScale'] = golf;
            tango['lineClamp'] = zulu;
            zulu = _closure1_slot13;
            tango['maxFontSizeMultiplier'] = zulu;
            zulu = null;
            if(!(zulu != verify)) { _fun00006_ip = 249; continue _fun00005 }
 220:
            golf = _closure1_slot4;
            offset = golf.Children;
            golf = offset.count;
            offset = golf.bind(offset)(verify);
            golf = 0;
            if(!(!(offset > golf))) { _fun00006_ip = 2000; continue _fun00005 }
 249:
            yankee = oscar.hasFlag;
            offset = _closure1_slot9;
            offset = offset.IS_VOICE_MESSAGE;
            offset = yankee.bind(oscar)(offset);
            if(offset) { _fun00006_ip = 1923; continue _fun00005 }
 276:
            offset = oscar.attachments;
            offset = offset.length;
            yankee = 0;
            if(!(!(offset > yankee))) { _fun00006_ip = 1424; continue _fun00005 }
 296:
            offset = oscar.embeds;
            offset = offset.length;
            if(!(!(offset > yankee))) { _fun00006_ip = 668; continue _fun00005 }
 314:
            offset = oscar.stickerItems;
            offset = offset.length;
            if(!(!(offset > yankee))) { _fun00006_ip = 573; continue _fun00005 }
 332:
            offset = oscar.isPoll;
            offset = offset.bind(oscar)();
            if(offset) { _fun00006_ip = 462; continue _fun00005 }
 345:
            romeo = _closure1_slot1;
            foxtrot = _closure1_slot2;
            offset = 28;
            offset = foxtrot[offset];
            offset = romeo.bind(report)(offset);
            offset = offset.bind(report)(oscar);
            foxtrot = _closure1_slot16;
            romeo = {};
            romeo['username'] = options;
            if(offset) { _fun00006_ip = 395; continue _fun00005 }
 383:
            romeo['content'] = verify;
            offset = foxtrot.bind(report)(romeo, tango);
            _fun00006_ip = 460; continue _fun00005;
 395:
            output = _closure1_slot0;
            result = _closure1_slot2;
            backup = 12;
            kilo = result[backup];
            kilo = output.bind(report)(kilo);
            sizing = kilo.intl;
            kilo = sizing.string;
            backup = result[backup];
            backup = output.bind(report)(backup);
            backup = backup.t;
            backup = backup.9ddYKi;
            backup = kilo.bind(sizing)(backup);
            romeo['content'] = backup;
            offset = foxtrot.bind(report)(romeo, tango);
 460:
            _fun00006_ip = 571; continue _fun00005;
 462:
            foxtrot = _closure1_slot16;
            romeo = {};
            romeo['username'] = options;
            kilo = _closure1_slot0;
            result = _closure1_slot2;
            backup = 12;
            sizing = result[backup];
            sizing = kilo.bind(report)(sizing);
            output = sizing.intl;
            sizing = output.formatToPlainString;
            backup = result[backup];
            backup = kilo.bind(report)(backup);
            backup = backup.t;
            kilo = backup.ImizdH;
            backup = {};
            echo = oscar.poll;
            update = zulu == echo;
            result = undefined;
            if(update) { _fun00006_ip = 550; continue _fun00005 }
 539:
            echo = echo.question;
            result = echo.text;
 550:
            backup['question'] = result;
            backup = sizing.bind(output)(kilo, backup);
            romeo['content'] = backup;
            offset = foxtrot.bind(report)(romeo, tango);
 571:
            _fun00006_ip = 666; continue _fun00005;
 573:
            foxtrot = _closure1_slot16;
            romeo = {};
            romeo['username'] = options;
            backup = oscar.stickerItems;
            backup = backup[yankee];
            backup = backup.name;
            romeo['content'] = backup;
            kilo = _closure1_slot0;
            output = _closure1_slot2;
            backup = 26;
            backup = output[backup];
            backup = kilo.bind(report)(backup);
            kilo = backup.StickerIcon;
            backup = new Array(2);
            backup[0] = kilo;
            sizing = _closure1_slot1;
            kilo = 27;
            kilo = output[kilo];
            kilo = sizing.bind(report)(kilo);
            backup[1] = kilo;
            romeo['icon'] = backup;
            offset = foxtrot.bind(report)(romeo, tango);
 666:
            return offset;
 668:
            foxtrot = oscar.embeds;
            romeo = foxtrot.every;
            offset = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = argFoo;
                    zulu = mike.url;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun00008_ip = 58; continue _fun00007 }
 17:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 15;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    zulu = tango.isImageUrl;
                    mike = mike.url;
                    entity = zulu.bind(tango)(mike);
 58:
                    return entity;
                }
            };
            foxtrot = romeo.bind(foxtrot)(offset);
            romeo = !foxtrot;
            if(!romeo) { _fun00006_ip = 722; continue _fun00005 }
 698:
            kilo = oscar.embeds;
            backup = kilo.every;
            offset = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    mike = argFoo;
                    zulu = mike.url;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun00010_ip = 58; continue _fun00009 }
 17:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 15;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    zulu = tango.isVideoUrl;
                    mike = mike.url;
                    entity = zulu.bind(tango)(mike);
 58:
                    return entity;
                }
            };
            romeo = backup.bind(kilo)(offset);
 722:
            offset = !foxtrot;
            if(!offset) { _fun00006_ip = 731; continue _fun00005 }
 728:
            offset = !romeo;
 731:
            if(!offset) { _fun00006_ip = 758; continue _fun00005 }
 734:
            sizing = oscar.embeds;
            kilo = sizing.every;
            backup = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    mike = argFoo;
                    zulu = mike.url;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun00012_ip = 58; continue _fun00011 }
 17:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 15;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    zulu = tango.isAudioFile;
                    mike = mike.url;
                    entity = zulu.bind(tango)(mike);
 58:
                    return entity;
                }
            };
            offset = kilo.bind(sizing)(backup);
 758:
            if(foxtrot) { _fun00006_ip = 1276; continue _fun00005 }
 764:
            if(romeo) { _fun00006_ip = 1152; continue _fun00005 }
 770:
            if(offset) { _fun00006_ip = 1025; continue _fun00005 }
 776:
            offset = oscar.embeds;
            offset = offset.length;
            if(!(offset > yankee)) { _fun00006_ip = 814; continue _fun00005 }
 791:
            offset = oscar.embeds;
            offset = offset[yankee];
            offset = offset.rawTitle;
            if(!(zulu == offset)) { _fun00006_ip = 1002; continue _fun00005 }
 814:
            offset = oscar.embeds;
            offset = offset.length;
            if(!(offset > yankee)) { _fun00006_ip = 852; continue _fun00005 }
 829:
            offset = oscar.embeds;
            offset = offset[yankee];
            offset = offset.rawDescription;
            if(!(zulu == offset)) { _fun00006_ip = 979; continue _fun00005 }
 852:
            foxtrot = _closure1_slot0;
            kilo = _closure1_slot2;
            offset = 12;
            romeo = kilo[offset];
            romeo = foxtrot.bind(report)(romeo);
            sizing = romeo.intl;
            backup = sizing.formatToPlainString;
            offset = kilo[offset];
            offset = foxtrot.bind(report)(offset);
            offset = offset.t;
            romeo = offset.9XuYjo;
            offset = {};
            output = oscar.embeds;
            output = output.length;
            offset['count'] = output;
            offset = backup.bind(sizing)(romeo, offset);
            romeo = 24;
            romeo = kilo[romeo];
            romeo = foxtrot.bind(report)(romeo);
            foxtrot = romeo.LinkIcon;
            romeo = new Array(2);
            romeo[0] = foxtrot;
            backup = _closure1_slot1;
            foxtrot = 25;
            foxtrot = kilo[foxtrot];
            foxtrot = backup.bind(report)(foxtrot);
            romeo[1] = foxtrot;
            foxtrot = offset;
            _fun00006_ip = 1398; continue _fun00005;
 979:
            offset = oscar.embeds;
            offset = offset[yankee];
            foxtrot = offset.rawDescription;
            romeo = undefined;
            _fun00006_ip = 1398; continue _fun00005;
 1002:
            offset = oscar.embeds;
            offset = offset[yankee];
            foxtrot = offset.rawTitle;
            romeo = undefined;
            _fun00006_ip = 1398; continue _fun00005;
 1025:
            backup = _closure1_slot0;
            sizing = _closure1_slot2;
            offset = 12;
            yankee = sizing[offset];
            yankee = backup.bind(report)(yankee);
            output = yankee.intl;
            kilo = output.formatToPlainString;
            offset = sizing[offset];
            offset = backup.bind(report)(offset);
            offset = offset.t;
            yankee = offset.fnO3hI;
            offset = {};
            result = oscar.embeds;
            result = result.length;
            offset['count'] = result;
            foxtrot = kilo.bind(output)(yankee, offset);
            offset = 20;
            offset = sizing[offset];
            offset = backup.bind(report)(offset);
            backup = offset.MusicIcon;
            offset = new Array(2);
            offset[0] = backup;
            kilo = _closure1_slot1;
            backup = 21;
            backup = sizing[backup];
            backup = kilo.bind(report)(backup);
            offset[1] = backup;
            romeo = offset;
            _fun00006_ip = 1398; continue _fun00005;
 1152:
            backup = _closure1_slot0;
            sizing = _closure1_slot2;
            offset = 12;
            yankee = sizing[offset];
            yankee = backup.bind(report)(yankee);
            output = yankee.intl;
            kilo = output.formatToPlainString;
            offset = sizing[offset];
            offset = backup.bind(report)(offset);
            offset = offset.t;
            yankee = offset.SJ6pPT;
            offset = {};
            result = oscar.embeds;
            result = result.length;
            offset['count'] = result;
            foxtrot = kilo.bind(output)(yankee, offset);
            offset = 18;
            offset = sizing[offset];
            offset = backup.bind(report)(offset);
            backup = offset.VideoIcon;
            offset = new Array(2);
            offset[0] = backup;
            kilo = _closure1_slot1;
            backup = 19;
            backup = sizing[backup];
            backup = kilo.bind(report)(backup);
            offset[1] = backup;
            romeo = offset;
            _fun00006_ip = 1398; continue _fun00005;
 1276:
            backup = _closure1_slot0;
            sizing = _closure1_slot2;
            offset = 12;
            yankee = sizing[offset];
            yankee = backup.bind(report)(yankee);
            output = yankee.intl;
            kilo = output.formatToPlainString;
            offset = sizing[offset];
            offset = backup.bind(report)(offset);
            offset = offset.t;
            yankee = offset.h4pFfX;
            offset = {};
            result = oscar.embeds;
            result = result.length;
            offset['count'] = result;
            foxtrot = kilo.bind(output)(yankee, offset);
            offset = 16;
            offset = sizing[offset];
            offset = backup.bind(report)(offset);
            backup = offset.ImageIcon;
            offset = new Array(2);
            offset[0] = backup;
            kilo = _closure1_slot1;
            backup = 17;
            backup = sizing[backup];
            backup = kilo.bind(report)(backup);
            offset[1] = backup;
            romeo = offset;
 1398:
            yankee = _closure1_slot16;
            offset = {};
            offset['username'] = options;
            offset['content'] = foxtrot;
            offset['icon'] = romeo;
            offset = yankee.bind(report)(offset, tango);
            return offset;
 1424:
            romeo = oscar.attachments;
            yankee = romeo.every;
            offset = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 15;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.isImageFile;
                entity = argFoo;
                entity = entity.filename;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            romeo = yankee.bind(romeo)(offset);
            yankee = !romeo;
            if(!yankee) { _fun00006_ip = 1478; continue _fun00005 }
 1454:
            backup = oscar.attachments;
            foxtrot = backup.every;
            offset = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 15;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.isVideoFile;
                entity = argFoo;
                entity = entity.filename;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            yankee = foxtrot.bind(backup)(offset);
 1478:
            offset = !romeo;
            if(!offset) { _fun00006_ip = 1487; continue _fun00005 }
 1484:
            offset = !yankee;
 1487:
            if(!offset) { _fun00006_ip = 1514; continue _fun00005 }
 1490:
            backup = oscar.attachments;
            foxtrot = backup.every;
            entity = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 15;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.isAudioFile;
                entity = argFoo;
                entity = entity.filename;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            offset = foxtrot.bind(backup)(entity);
 1514:
            foxtrot = _closure1_slot0;
            kilo = _closure1_slot2;
            entity = 12;
            backup = kilo[entity];
            backup = foxtrot.bind(report)(backup);
            sizing = backup.intl;
            backup = sizing.formatToPlainString;
            entity = kilo[entity];
            entity = foxtrot.bind(report)(entity);
            entity = entity.t;
            if(romeo) { _fun00006_ip = 1819; continue _fun00005 }
 1564:
            if(yankee) { _fun00006_ip = 1739; continue _fun00005 }
 1570:
            if(offset) { _fun00006_ip = 1656; continue _fun00005 }
 1573:
            yankee = entity.89ihS0;
            offset = {};
            romeo = oscar.attachments;
            romeo = romeo.length;
            offset['count'] = romeo;
            offset = backup.bind(sizing)(yankee, offset);
            yankee = 22;
            yankee = kilo[yankee];
            yankee = foxtrot.bind(report)(yankee);
            romeo = yankee.AttachmentIcon;
            yankee = new Array(2);
            yankee[0] = romeo;
            output = _closure1_slot1;
            romeo = 23;
            romeo = kilo[romeo];
            romeo = output.bind(report)(romeo);
            yankee[1] = romeo;
            romeo = offset;
            _fun00006_ip = 1897; continue _fun00005;
 1656:
            output = entity.fnO3hI;
            offset = {};
            result = oscar.attachments;
            result = result.length;
            offset['count'] = result;
            romeo = backup.bind(sizing)(output, offset);
            offset = 20;
            offset = kilo[offset];
            offset = foxtrot.bind(report)(offset);
            result = offset.MusicIcon;
            offset = new Array(2);
            offset[0] = result;
            echo = _closure1_slot1;
            result = 21;
            result = kilo[result];
            result = echo.bind(report)(result);
            offset[1] = result;
            yankee = offset;
            _fun00006_ip = 1897; continue _fun00005;
 1739:
            output = entity.SJ6pPT;
            offset = {};
            result = oscar.attachments;
            result = result.length;
            offset['count'] = result;
            romeo = backup.bind(sizing)(output, offset);
            offset = 18;
            offset = kilo[offset];
            offset = foxtrot.bind(report)(offset);
            result = offset.VideoIcon;
            offset = new Array(2);
            offset[0] = result;
            echo = _closure1_slot1;
            result = 19;
            result = kilo[result];
            result = echo.bind(report)(result);
            offset[1] = result;
            yankee = offset;
            _fun00006_ip = 1897; continue _fun00005;
 1819:
            offset = entity.h4pFfX;
            entity = {};
            output = oscar.attachments;
            output = output.length;
            entity['count'] = output;
            romeo = backup.bind(sizing)(offset, entity);
            entity = 16;
            entity = kilo[entity];
            entity = foxtrot.bind(report)(entity);
            foxtrot = entity.ImageIcon;
            entity = new Array(2);
            entity[0] = foxtrot;
            backup = _closure1_slot1;
            foxtrot = 17;
            foxtrot = kilo[foxtrot];
            foxtrot = backup.bind(report)(foxtrot);
            entity[1] = foxtrot;
            yankee = entity;
 1897:
            offset = _closure1_slot16;
            entity = {};
            entity['username'] = options;
            entity['content'] = romeo;
            entity['icon'] = yankee;
            entity = offset.bind(report)(entity, tango);
            return entity;
 1923:
            offset = _closure1_slot16;
            entity = {};
            entity['username'] = options;
            backup = _closure1_slot0;
            kilo = _closure1_slot2;
            yankee = 12;
            romeo = kilo[yankee];
            romeo = backup.bind(report)(romeo);
            foxtrot = romeo.intl;
            romeo = foxtrot.string;
            yankee = kilo[yankee];
            yankee = backup.bind(report)(yankee);
            yankee = yankee.t;
            yankee = yankee.slFYgo;
            yankee = romeo.bind(foxtrot)(yankee);
            entity['content'] = yankee;
            entity = offset.bind(report)(entity, tango);
            return entity;
 2000:
            entity = oscar.embeds;
            offset = entity.length;
            entity = 1;
            if(!(entity === offset)) { _fun00006_ip = 2062; continue _fun00005 }
 2018:
            entity = oscar.embeds;
            entity = entity[golf];
            offset = entity.url;
            entity = oscar.content;
            if(!(offset === entity)) { _fun00006_ip = 2062; continue _fun00005 }
 2042:
            entity = oscar.embeds;
            entity = entity[golf];
            entity = entity.rawTitle;
            if(!(zulu == entity)) { _fun00006_ip = 2084; continue _fun00005 }
 2062:
            zulu = _closure1_slot16;
            entity = {};
            entity['username'] = options;
            entity['content'] = verify;
            entity = zulu.bind(report)(entity, tango);
            _fun00006_ip = 2120; continue _fun00005;
 2084:
            zulu = _closure1_slot16;
            mike = {};
            mike['username'] = options;
            oscar = oscar.embeds;
            oscar = oscar[golf];
            oscar = oscar.rawTitle;
            mike['content'] = oscar;
            entity = zulu.bind(report)(mike, tango);
 2120:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: DefaultNative
        entity = argFoo;
        options = entity.message;
        mike = entity.lineClamp;
        var _closure2_slot0 = mike;
        oscar = entity.messageSizeCacheRef;
        report = entity.maxHeight;
        zulu = _closure1_slot0;
        offset = _closure1_slot2;
        mike = 29;
        golf = offset[mike];
        tango = undefined;
        golf = zulu.bind(tango)(golf);
        yankee = golf.RenderEmbeds;
        golf = yankee.getSetting;
        foxtrot = golf.bind(yankee)();
        var _closure2_slot1 = foxtrot;
        golf = offset[mike];
        golf = zulu.bind(tango)(golf);
        yankee = golf.InlineEmbedMedia;
        golf = yankee.getSetting;
        romeo = golf.bind(yankee)();
        var _closure2_slot2 = romeo;
        mike = offset[mike];
        mike = zulu.bind(tango)(mike);
        zulu = mike.InlineAttachmentMedia;
        mike = zulu.getSetting;
        mike = mike.bind(zulu)();
        var _closure2_slot3 = mike;
        yankee = _closure1_slot4;
        golf = yankee.useMemo;
        zulu = new Array(3);
        zulu[0] = foxtrot;
        zulu[1] = romeo;
        zulu[2] = mike;
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 30;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            mike = entity.prototype;
            mike = Object.create(mike, {constructor: {value: entity}});
            golf = mike;
            entity = new golf[entity](oscar);
            entity = entity instanceof Object ? entity : mike;
            zulu = entity.setOptions;
            mike = {'renderEmbeds': null, 'inlineEmbedMedia': null, 'inlineAttachmentMedia': null, 'renderReactions': false, 'renderShortcuts': false, 'animateEmoji': false, 'gifAutoPlay': false, 'renderReplies': false, 'renderCodedLinks': false, 'renderGiftCode': false, 'renderActivityInviteEmbed': false, 'renderThreadEmbeds': false, 'renderForumPostActions': false, 'ignoreMentioned': true, 'enableSwipeActions': false, 'renderExecutedCommands': false, 'useAlternateEmbedColors': true};
            report = _closure2_slot1;
            mike['renderEmbeds'] = report;
            report = _closure2_slot2;
            mike['inlineEmbedMedia'] = report;
            tango = _closure2_slot3;
            mike['inlineAttachmentMedia'] = tango;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        golf = golf.bind(yankee)(mike, zulu);
        zulu = _closure1_slot11;
        mike = _closure1_slot1;
        entity = 31;
        entity = offset[entity];
        mike = mike.bind(tango)(entity);
        entity = {'pointerEvents': 'none', 'horizontalOffset': 0};
        verify = function(argFoo) { // Original name: modifyRow
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zulu = argFoo;
                tango = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 32;
                mike = mike[entity];
                entity = undefined;
                mike = tango.bind(entity)(mike);
                mike = mike.MessageContextType;
                mike = mike.SEARCH;
                zulu['contextType'] = mike;
                report = _closure2_slot0;
                mike = null;
                if(!(mike != report)) { _fun00014_ip = 89; continue _fun00013 }
 59:
                mike = {'numberOfLines': null, 'expandable': false, 'seeMoreLabel': ''};
                tango = _closure2_slot0;
                mike['numberOfLines'] = tango;
                zulu['truncation'] = mike;
 89:
                return entity;
            }
        };
        entity['modifyRow'] = verify;
        entity['message'] = options;
        entity['rowGenerator'] = golf;
        entity['messageSizeCacheRef'] = oscar;
        entity['maxHeight'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: RecipientAdd
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            report = argFoo;
            mike = report.message;
            var _closure2_slot0 = mike;
            offset = report.channel;
            verify = report.username;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 33;
            mike = tango[mike];
            tango = undefined;
            oscar = zulu.bind(tango)(mike);
            zulu = oscar.useStateFromStores;
            golf = _closure1_slot8;
            mike = new Array(1);
            mike[0] = golf;
            entity = function() {
                zulu = _closure1_slot8;
                mike = zulu.getUser;
                entity = _closure2_slot0;
                tango = entity.mentions;
                entity = 0;
                entity = tango[entity];
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            backup = zulu.bind(oscar)(mike, entity);
            entity = null;
            mike = entity != backup;
            if(!mike) { _fun00016_ip = 221; continue _fun00015 }
 91:
            zulu = _closure1_slot17;
            oscar = _closure1_slot0;
            foxtrot = _closure1_slot2;
            mike = 12;
            golf = foxtrot[mike];
            golf = oscar.bind(tango)(golf);
            options = golf.intl;
            golf = options.format;
            mike = foxtrot[mike];
            mike = oscar.bind(tango)(mike);
            mike = mike.t;
            oscar = mike.MMN2Ji;
            mike = {};
            mike['username'] = verify;
            verify = _closure1_slot15;
            mike['usernameHook'] = verify;
            romeo = _closure1_slot1;
            yankee = 34;
            yankee = foxtrot[yankee];
            foxtrot = romeo.bind(tango)(yankee);
            romeo = foxtrot.getName;
            yankee = offset.guild_id;
            offset = offset.id;
            offset = romeo.bind(foxtrot)(yankee, offset, backup);
            mike['otherUsername'] = offset;
            mike['otherUsernameHook'] = verify;
            mike = golf.bind(options)(oscar, mike);
            entity = zulu.bind(tango)(mike, report);
 221:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: RecipientRemove
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            report = argFoo;
            mike = report.message;
            var _closure2_slot0 = mike;
            romeo = report.channel;
            yankee = report.username;
            oscar = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 33;
            zulu = tango[zulu];
            tango = undefined;
            golf = oscar.bind(tango)(zulu);
            oscar = golf.useStateFromStores;
            options = _closure1_slot8;
            zulu = new Array(1);
            zulu[0] = options;
            entity = function() {
                zulu = _closure1_slot8;
                mike = zulu.getUser;
                entity = _closure2_slot0;
                tango = entity.mentions;
                entity = 0;
                entity = tango[entity];
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            sizing = oscar.bind(golf)(zulu, entity);
            entity = null;
            zulu = entity != sizing;
            if(!zulu) { _fun00018_ip = 307; continue _fun00017 }
 91:
            zulu = _closure1_slot17;
            mike = mike.author;
            if(!(mike !== sizing)) { _fun00018_ip = 230; continue _fun00017 }
 108:
            oscar = _closure1_slot0;
            kilo = _closure1_slot2;
            mike = 12;
            golf = kilo[mike];
            golf = oscar.bind(tango)(golf);
            options = golf.intl;
            golf = options.format;
            mike = kilo[mike];
            mike = oscar.bind(tango)(mike);
            mike = mike.t;
            oscar = mike.L2FyVl;
            mike = {};
            mike['username'] = yankee;
            verify = _closure1_slot15;
            mike['usernameHook'] = verify;
            backup = _closure1_slot1;
            foxtrot = 34;
            foxtrot = kilo[foxtrot];
            kilo = backup.bind(tango)(foxtrot);
            backup = kilo.getName;
            foxtrot = romeo.guild_id;
            romeo = romeo.id;
            romeo = backup.bind(kilo)(foxtrot, romeo, sizing);
            mike['otherUsername'] = romeo;
            mike['otherUsernameHook'] = verify;
            mike = golf.bind(options)(oscar, mike);
            _fun00018_ip = 301; continue _fun00017;
 230:
            golf = _closure1_slot0;
            romeo = _closure1_slot2;
            oscar = 12;
            options = romeo[oscar];
            options = golf.bind(tango)(options);
            verify = options.intl;
            options = verify.format;
            oscar = romeo[oscar];
            oscar = golf.bind(tango)(oscar);
            oscar = oscar.t;
            golf = oscar.5v2xa2;
            oscar = {};
            oscar['username'] = yankee;
            offset = _closure1_slot15;
            oscar['usernameHook'] = offset;
            mike = options.bind(verify)(golf, oscar);
 301:
            entity = zulu.bind(tango)(mike, report);
 307:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo) { // Original name: ChannelNameChange
        tango = argFoo;
        options = tango.message;
        offset = tango.username;
        zulu = _closure1_slot17;
        report = _closure1_slot0;
        yankee = _closure1_slot2;
        entity = 12;
        oscar = yankee[entity];
        mike = undefined;
        oscar = report.bind(mike)(oscar);
        golf = oscar.intl;
        oscar = golf.format;
        entity = yankee[entity];
        entity = report.bind(mike)(entity);
        entity = entity.t;
        report = entity.oItgEx;
        entity = {};
        entity['username'] = offset;
        verify = _closure1_slot15;
        entity['usernameHook'] = verify;
        options = options.content;
        entity['channelName'] = options;
        entity = oscar.bind(golf)(report, entity);
        entity = zulu.bind(mike)(entity, tango);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: ChannelIconChange
        tango = argFoo;
        zulu = _closure1_slot17;
        report = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 12;
        oscar = verify[entity];
        mike = undefined;
        oscar = report.bind(mike)(oscar);
        golf = oscar.intl;
        oscar = golf.format;
        entity = verify[entity];
        entity = report.bind(mike)(entity);
        entity = entity.t;
        report = entity.OEdU6e;
        entity = {};
        verify = tango.username;
        entity['username'] = verify;
        options = _closure1_slot15;
        entity['usernameHook'] = options;
        entity = oscar.bind(golf)(report, entity);
        entity = zulu.bind(mike)(entity, tango);
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo) { // Original name: ChannelPinnedMessage
        tango = argFoo;
        zulu = _closure1_slot17;
        report = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 12;
        oscar = verify[entity];
        mike = undefined;
        oscar = report.bind(mike)(oscar);
        golf = oscar.intl;
        oscar = golf.format;
        entity = verify[entity];
        entity = report.bind(mike)(entity);
        entity = entity.t;
        report = entity.vfkjq6;
        entity = {};
        verify = tango.username;
        entity['username'] = verify;
        options = _closure1_slot15;
        entity['usernameHook'] = options;
        entity = oscar.bind(golf)(report, entity);
        entity = zulu.bind(mike)(entity, tango);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo) { // Original name: UserJoined
        tango = argFoo;
        verify = tango.message;
        mike = tango.channel;
        report = _closure1_slot1;
        offset = _closure1_slot2;
        entity = 35;
        oscar = offset[entity];
        zulu = undefined;
        golf = report.bind(zulu)(oscar);
        oscar = golf.getWelcomeMessageKind;
        mike = mike.guild_id;
        yankee = oscar.bind(golf)(mike);
        mike = _closure1_slot17;
        golf = _closure1_slot0;
        oscar = 12;
        oscar = offset[oscar];
        oscar = golf.bind(zulu)(oscar);
        golf = oscar.intl;
        oscar = golf.format;
        entity = offset[entity];
        offset = report.bind(zulu)(entity);
        report = offset.getSystemMessageUserJoin;
        entity = verify.id;
        report = report.bind(offset)(entity, yankee);
        entity = {};
        verify = verify.nick;
        entity['username'] = verify;
        options = _closure1_slot15;
        entity['usernameHook'] = options;
        entity = oscar.bind(golf)(report, entity);
        entity = mike.bind(zulu)(entity, tango);
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo) { // Original name: ThreadCreated
        tango = argFoo;
        verify = tango.message;
        offset = tango.username;
        zulu = _closure1_slot17;
        report = _closure1_slot0;
        yankee = _closure1_slot2;
        entity = 12;
        oscar = yankee[entity];
        mike = undefined;
        oscar = report.bind(mike)(oscar);
        golf = oscar.intl;
        oscar = golf.format;
        entity = yankee[entity];
        entity = report.bind(mike)(entity);
        entity = entity.t;
        report = entity.SGaUAQ;
        entity = {};
        entity['actorName'] = offset;
        options = _closure1_slot15;
        entity['actorHook'] = options;
        verify = verify.content;
        entity['threadName'] = verify;
        entity['threadOnClick'] = options;
        entity = oscar.bind(golf)(report, entity);
        entity = zulu.bind(mike)(entity, tango);
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo) { // Original name: PremiumTrialShare
        tango = argFoo;
        report = _closure1_slot0;
        verify = _closure1_slot2;
        mike = 36;
        mike = verify[mike];
        zulu = undefined;
        golf = report.bind(zulu)(mike);
        oscar = golf.getMessageAuthor;
        mike = tango.message;
        options = oscar.bind(golf)(mike);
        mike = _closure1_slot17;
        entity = 12;
        oscar = verify[entity];
        oscar = report.bind(zulu)(oscar);
        golf = oscar.intl;
        oscar = golf.formatToPlainString;
        entity = verify[entity];
        entity = report.bind(zulu)(entity);
        entity = entity.t;
        report = entity.lieTqa;
        entity = {};
        options = options.nick;
        entity['username'] = options;
        entity = oscar.bind(golf)(report, entity);
        entity = mike.bind(zulu)(entity, tango);
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = function(argFoo) { // Original name: HiddenMessage
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            golf = argFoo;
            mike = golf.message;
            tango = _closure1_slot7;
            zulu = tango.isBlocked;
            mike = mike.author;
            mike = mike.id;
            report = zulu.bind(tango)(mike);
            tango = _closure1_slot11;
            zulu = _closure1_slot5;
            mike = {};
            oscar = {'flexDirection': 'row', 'alignItems': 'center'};
            mike['style'] = oscar;
            oscar = _closure1_slot17;
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            options = 12;
            verify = romeo[options];
            entity = undefined;
            verify = yankee.bind(entity)(verify);
            offset = verify.intl;
            verify = offset.string;
            options = romeo[options];
            options = yankee.bind(entity)(options);
            options = options.t;
            if(report) { _fun00020_ip = 127; continue _fun00019 }
 114:
            report = options.G7p6v7;
            report = verify.bind(offset)(report);
            _fun00020_ip = 138; continue _fun00019;
 127:
            options = options.XAkOo6;
            report = verify.bind(offset)(options);
 138:
            report = oscar.bind(entity)(report, golf);
            mike['children'] = report;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo, argBar) { // Original name: getMessageComponentType
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            tango = argFoo;
            report = _closure1_slot0;
            entity = _closure1_slot2;
            oscar = 37;
            zulu = entity[oscar];
            entity = undefined;
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.DEFAULT;
            if(!(zulu !== tango)) { _fun00022_ip = 595; continue _fun00021 }
 47:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.CHANGELOG;
            if(!(zulu !== tango)) { _fun00022_ip = 595; continue _fun00021 }
 83:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.REPLY;
            if(!(zulu !== tango)) { _fun00022_ip = 595; continue _fun00021 }
 119:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.CHAT_INPUT_COMMAND;
            if(!(zulu !== tango)) { _fun00022_ip = 595; continue _fun00021 }
 155:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.CONTEXT_MENU_COMMAND;
            if(!(zulu !== tango)) { _fun00022_ip = 595; continue _fun00021 }
 191:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.POLL_RESULT;
            if(!(zulu !== tango)) { _fun00022_ip = 595; continue _fun00021 }
 227:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.RECIPIENT_ADD;
            if(!(zulu !== tango)) { _fun00022_ip = 589; continue _fun00021 }
 263:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.RECIPIENT_REMOVE;
            if(!(zulu !== tango)) { _fun00022_ip = 583; continue _fun00021 }
 299:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.CALL;
            if(!(zulu !== tango)) { _fun00022_ip = 577; continue _fun00021 }
 335:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.CHANNEL_NAME_CHANGE;
            if(!(zulu !== tango)) { _fun00022_ip = 571; continue _fun00021 }
 371:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.CHANNEL_ICON_CHANGE;
            if(!(zulu !== tango)) { _fun00022_ip = 565; continue _fun00021 }
 407:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.CHANNEL_PINNED_MESSAGE;
            if(!(zulu !== tango)) { _fun00022_ip = 559; continue _fun00021 }
 440:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.USER_JOIN;
            if(!(zulu !== tango)) { _fun00022_ip = 553; continue _fun00021 }
 473:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.THREAD_CREATED;
            if(!(zulu !== tango)) { _fun00022_ip = 547; continue _fun00021 }
 506:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.PREMIUM_REFERRAL;
            if(!(zulu !== tango)) { _fun00022_ip = 541; continue _fun00021 }
 539:
            return entity;
 541:
            entity = _closure1_slot28;
            return entity;
 547:
            entity = _closure1_slot27;
            return entity;
 553:
            entity = _closure1_slot26;
            return entity;
 559:
            entity = _closure1_slot25;
            return entity;
 565:
            entity = _closure1_slot24;
            return entity;
 571:
            entity = _closure1_slot23;
            return entity;
 577:
            entity = _closure1_slot18;
            return entity;
 583:
            entity = _closure1_slot22;
            return entity;
 589:
            entity = _closure1_slot21;
            return entity;
 595:
            entity = _closure1_slot14;
            zulu = entity.STREAMLINED;
            entity = argBar;
            if(!(entity !== zulu)) { _fun00022_ip = 618; continue _fun00021 }
 612:
            entity = _closure1_slot20;
            _fun00022_ip = 622; continue _fun00021;
 618:
            entity = _closure1_slot19;
 622:
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = global;
    report = entity.Object;
    tango = report.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(report)(zulu, entity, mike);
    report = 0;
    mike = offset[report];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    tango = 1;
    options = offset[tango];
    mike = argCorge;
    yankee = mike.bind(entity)(options);
    var _closure1_slot4 = yankee;
    mike = 2;
    mike = offset[mike];
    mike = verify.bind(entity)(mike);
    mike = mike.View;
    var _closure1_slot5 = mike;
    mike = 3;
    mike = offset[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = offset[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = offset[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = offset[mike];
    mike = verify.bind(entity)(mike);
    mike = mike.MessageFlags;
    var _closure1_slot9 = mike;
    mike = 7;
    mike = offset[mike];
    mike = verify.bind(entity)(mike);
    mike = mike.SUBTITLE_OPACITY_NORMAL;
    var _closure1_slot10 = mike;
    mike = 8;
    golf = offset[mike];
    golf = verify.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot11 = golf;
    mike = offset[mike];
    mike = verify.bind(entity)(mike);
    mike = mike.jsxs;
    var _closure1_slot12 = mike;
    mike = 1.75;
    var _closure1_slot13 = mike;
    golf = {};
    golf['STREAMLINED'] = report;
    mike = 'STREAMLINED';
    golf[report] = mike;
    golf['FULL'] = tango;
    mike = 'FULL';
    golf[tango] = mike;
    var _closure1_slot14 = golf;
    tango = yankee.memo;
    mike = function(argFoo) {
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            report = argFoo;
            romeo = report.message;
            var _closure2_slot0 = romeo;
            yankee = report.channel;
            var _closure2_slot1 = yankee;
            entity = null;
            tango = Object.create(entity);
            mike = 0;
            tango['message'] = mike;
            tango['channel'] = mike;
            sizing = {};
            kilo = report;
            backup = tango;
            verify = copyDataProperties(sizing, kilo, backup);
            var _closure2_slot2 = verify;
            report = undefined;
            var _closure2_slot3 = report;
            mike = romeo.author;
            oscar = mike.id;
            golf = _closure1_slot6;
            tango = golf.getId;
            tango = tango.bind(golf)();
            if(!(oscar !== tango)) { _fun00024_ip = 138; continue _fun00023 }
 92:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            tango = 34;
            tango = golf[tango];
            options = oscar.bind(report)(tango);
            golf = options.getName;
            oscar = yankee.id;
            tango = romeo.author;
            offset = golf.bind(options)(entity, oscar, tango);
            _fun00024_ip = 193; continue _fun00023;
 138:
            options = _closure1_slot0;
            foxtrot = _closure1_slot2;
            tango = 12;
            oscar = foxtrot[tango];
            oscar = options.bind(report)(oscar);
            golf = oscar.intl;
            oscar = golf.string;
            tango = foxtrot[tango];
            tango = options.bind(report)(tango);
            tango = tango.t;
            tango = tango.LuZzxs;
            offset = oscar.bind(golf)(tango);
 193:
            _closure2_slot3 = offset;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 33;
            tango = golf[tango];
            foxtrot = oscar.bind(report)(tango);
            options = foxtrot.useStateFromStores;
            tango = _closure1_slot7;
            golf = new Array(1);
            golf[0] = tango;
            tango = romeo.author;
            tango = tango.id;
            oscar = new Array(1);
            oscar[0] = tango;
            tango = function() {
                zulu = _closure1_slot7;
                mike = zulu.isBlockedOrIgnored;
                entity = _closure2_slot0;
                entity = entity.author;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = options.bind(foxtrot)(golf, tango, oscar);
            golf = romeo.type;
            if(tango) { _fun00024_ip = 297; continue _fun00023 }
 275:
            oscar = _closure1_slot30;
            tango = _closure1_slot14;
            tango = tango.STREAMLINED;
            tango = oscar.bind(report)(golf, tango);
            _fun00024_ip = 301; continue _fun00023;
 297:
            tango = _closure1_slot29;
 301:
            options = _closure1_slot4;
            golf = options.useMemo;
            oscar = new Array(4);
            oscar[0] = romeo;
            oscar[1] = yankee;
            oscar[2] = offset;
            oscar[3] = verify;
            zulu = function() {
                entity = {};
                zulu = _closure2_slot0;
                entity['message'] = zulu;
                zulu = _closure2_slot1;
                entity['channel'] = zulu;
                zulu = _closure2_slot3;
                entity['username'] = zulu;
                tango = _closure2_slot2;
                report = entity;
                mike = copyDataProperties(report, tango);
                return entity;
            };
            oscar = golf.bind(options)(zulu, oscar);
            zulu = entity == tango;
            entity = null;
            if(zulu) { _fun00024_ip = 387; continue _fun00023 }
 352:
            zulu = _closure1_slot11;
            mike = {};
            sizing = mike;
            kilo = oscar;
            oscar = copyDataProperties(sizing, kilo);
            golf = 'preview';
            oscar = 'context';
            mike[oscar] = golf;
            entity = zulu.bind(report)(tango, mike);
 387:
            return entity;
        }
    };
    report = tango.bind(yankee)(mike);
    tango = yankee.memo;
    mike = function(argFoo) {
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            report = argFoo;
            foxtrot = report.guildId;
            yankee = report.channel;
            var _closure2_slot0 = yankee;
            romeo = report.message;
            var _closure2_slot1 = romeo;
            tango = {'guildId': 0, 'channel': 0, 'message': 0};
            entity = null;
            output = tango;
            sizing = null;
            mike = silentSetPrototypeOf(output, sizing);
            output = {};
            sizing = report;
            kilo = tango;
            verify = copyDataProperties(output, sizing, kilo);
            var _closure2_slot2 = verify;
            report = undefined;
            var _closure2_slot3 = report;
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            tango = 33;
            tango = options[tango];
            backup = oscar.bind(report)(tango);
            offset = backup.useStateFromStores;
            tango = _closure1_slot7;
            golf = new Array(1);
            golf[0] = tango;
            tango = romeo.author;
            tango = tango.id;
            oscar = new Array(1);
            oscar[0] = tango;
            tango = function() {
                zulu = _closure1_slot7;
                mike = zulu.isBlockedOrIgnored;
                entity = _closure2_slot1;
                entity = entity.author;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = offset.bind(backup)(golf, tango, oscar);
            golf = _closure1_slot1;
            oscar = 34;
            oscar = options[oscar];
            offset = golf.bind(report)(oscar);
            options = offset.useName;
            golf = yankee.id;
            oscar = romeo.author;
            options = options.bind(offset)(foxtrot, golf, oscar);
            oscar = romeo.author;
            golf = oscar.id;
            offset = _closure1_slot6;
            oscar = offset.getId;
            oscar = oscar.bind(offset)();
            offset = options;
            if(!(golf === oscar)) { _fun00026_ip = 271; continue _fun00025 }
 216:
            foxtrot = _closure1_slot0;
            backup = _closure1_slot2;
            oscar = 12;
            golf = backup[oscar];
            golf = foxtrot.bind(report)(golf);
            options = golf.intl;
            golf = options.string;
            oscar = backup[oscar];
            oscar = foxtrot.bind(report)(oscar);
            oscar = oscar.t;
            oscar = oscar.LuZzxs;
            offset = golf.bind(options)(oscar);
 271:
            _closure2_slot3 = offset;
            golf = romeo.type;
            if(tango) { _fun00026_ip = 305; continue _fun00025 }
 283:
            oscar = _closure1_slot30;
            tango = _closure1_slot14;
            tango = tango.STREAMLINED;
            tango = oscar.bind(report)(golf, tango);
            _fun00026_ip = 309; continue _fun00025;
 305:
            tango = _closure1_slot29;
 309:
            options = _closure1_slot4;
            golf = options.useMemo;
            oscar = new Array(4);
            oscar[0] = romeo;
            oscar[1] = yankee;
            oscar[2] = offset;
            oscar[3] = verify;
            zulu = function() {
                entity = {};
                zulu = _closure2_slot1;
                entity['message'] = zulu;
                zulu = _closure2_slot0;
                entity['channel'] = zulu;
                zulu = _closure2_slot3;
                entity['username'] = zulu;
                tango = _closure2_slot2;
                report = entity;
                mike = copyDataProperties(report, tango);
                return entity;
            };
            oscar = golf.bind(options)(zulu, oscar);
            zulu = entity == tango;
            entity = null;
            if(zulu) { _fun00026_ip = 395; continue _fun00025 }
 360:
            zulu = _closure1_slot11;
            mike = {};
            output = mike;
            sizing = oscar;
            oscar = copyDataProperties(output, sizing);
            golf = 'preview';
            oscar = 'context';
            mike[oscar] = golf;
            entity = zulu.bind(report)(tango, mike);
 395:
            return entity;
        }
    };
    tango = tango.bind(yankee)(mike);
    options = yankee.memo;
    mike = function(argFoo) {
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            report = argFoo;
            options = report.message;
            var _closure2_slot0 = options;
            golf = report.channel;
            entity = null;
            tango = Object.create(entity);
            mike = 0;
            tango['message'] = mike;
            tango['channel'] = mike;
            kilo = {};
            backup = report;
            foxtrot = tango;
            oscar = copyDataProperties(kilo, backup, foxtrot);
            verify = _closure1_slot0;
            report = _closure1_slot2;
            tango = 33;
            tango = report[tango];
            report = undefined;
            yankee = verify.bind(report)(tango);
            offset = yankee.useStateFromStores;
            tango = _closure1_slot7;
            verify = new Array(1);
            verify[0] = tango;
            tango = options.author;
            romeo = tango.id;
            tango = new Array(1);
            tango[0] = romeo;
            zulu = function() {
                zulu = _closure1_slot7;
                mike = zulu.isBlockedOrIgnored;
                entity = _closure2_slot0;
                entity = entity.author;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = offset.bind(yankee)(verify, zulu, tango);
            verify = options.type;
            if(zulu) { _fun00028_ip = 151; continue _fun00027 }
 129:
            tango = _closure1_slot30;
            zulu = _closure1_slot14;
            zulu = zulu.FULL;
            tango = tango.bind(report)(verify, zulu);
            _fun00028_ip = 155; continue _fun00027;
 151:
            tango = _closure1_slot29;
 155:
            zulu = entity == tango;
            entity = null;
            if(zulu) { _fun00028_ip = 219; continue _fun00027 }
 164:
            zulu = _closure1_slot19;
            if(!(tango === zulu)) { _fun00028_ip = 176; continue _fun00027 }
 172:
            tango = _closure1_slot20;
 176:
            zulu = _closure1_slot11;
            mike = {};
            mike['message'] = options;
            mike['channel'] = golf;
            kilo = mike;
            backup = oscar;
            oscar = copyDataProperties(kilo, backup);
            golf = 'search';
            oscar = 'context';
            mike[oscar] = golf;
            entity = zulu.bind(report)(tango, mike);
 219:
            return entity;
        }
    };
    mike = options.bind(yankee)(mike);
    options = 38;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'modules/launchpad/native/shared/ChannelRowPreview.tsx';
    options = verify.bind(offset)(options);
    zulu['DefaultMessageComponentStyle'] = golf;
    oscar = function(argFoo) { // Original name: ChannelRowPreview
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            tango = argFoo;
            options = tango.message;
            golf = tango.channel;
            entity = null;
            zulu = Object.create(entity);
            mike = 0;
            zulu['message'] = mike;
            zulu['channel'] = mike;
            romeo = {};
            yankee = tango;
            offset = zulu;
            oscar = copyDataProperties(romeo, yankee, offset);
            verify = _closure1_slot30;
            tango = options.type;
            zulu = _closure1_slot14;
            zulu = zulu.FULL;
            report = undefined;
            tango = verify.bind(report)(tango, zulu);
            zulu = entity == tango;
            if(zulu) { _fun00030_ip = 107; continue _fun00029 }
 77:
            zulu = _closure1_slot11;
            mike = {};
            mike['message'] = options;
            mike['channel'] = golf;
            romeo = mike;
            yankee = oscar;
            oscar = copyDataProperties(romeo, yankee);
            entity = zulu.bind(report)(tango, mike);
 107:
            return entity;
        }
    };
    zulu['ChannelRowPreview'] = oscar;
    zulu['PrivateChannelRowPreview'] = report;
    zulu['GuildChannelRowPreview'] = tango;
    zulu['SearchChannelRowPreview'] = mike;
    return entity;
})();