// app/modules/main_tabs_v2/native/shared_components/ChannelRowPreview.tsx
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
        _fun86917: for(var _fun86917_ip = 0; ; ) switch(_fun86917_ip) {
 0:
            mike = argFoo;
            entity = argBar;
            backup = mike.username;
            offset = mike.content;
            zulu = mike.icon;
            verify = entity.layout;
            kilo = entity.variant;
            yankee = entity.color;
            update = entity.muted;
            output = entity.lineClamp;
            tango = undefined;
            if(!(output === tango)) { _fun86917_ip = 58; continue _fun86917 }
 55:
            output = 1;
 58:
            mike = entity.fontScale;
            if(!(mike === tango)) { _fun86917_ip = 71; continue _fun86917 }
 68:
            mike = 1;
 71:
            foxtrot = entity.maxFontSizeMultiplier;
            if(!(foxtrot === tango)) { _fun86917_ip = 91; continue _fun86917 }
 81:
            foxtrot = 1.75;
 91:
            oscar = _closure1_slot0;
            entity = _closure1_slot2;
            golf = 9;
            golf = entity[golf];
            options = oscar.bind(tango)(golf);
            golf = options.getLayoutStyles;
            sizing = golf.bind(options)(verify);
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
            if(!entity) { _fun86917_ip = 256; continue _fun86917 }
 184:
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
 256:
            zulu = _closure1_slot12;
            mike = _closure1_slot5;
            entity = {};
            golf = {'flexDirection': 'row', 'alignItems': 'center'};
            romeo = 1;
            echo = romeo;
            if(update) { _fun86917_ip = 289; continue _fun86917 }
 285:
            echo = _closure1_slot10;
 289:
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
            if(!(verify == kilo)) { _fun86917_ip = 355; continue _fun86917 }
 339:
            sizing = sizing.messagePreview;
            sizing = sizing.text;
            kilo = sizing.variant;
 355:
            report['variant'] = kilo;
            report['maxFontSizeMultiplier'] = foxtrot;
            report['color'] = yankee;
            yankee = {};
            yankee['flexShrink'] = romeo;
            report['style'] = yankee;
            yankee = verify != backup;
            if(!yankee) { _fun86917_ip = 415; continue _fun86917 }
 386:
            verify = global;
            verify = verify.HermesInternal;
            foxtrot = verify.concat;
            romeo = '';
            verify = ': ';
            yankee = foxtrot.bind(romeo)(backup, verify);
 415:
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
        _fun86919: for(var _fun86919_ip = 0; ; ) switch(_fun86919_ip) {
 0:
            entity = argFoo;
            mike = entity.message;
            oscar = entity.color;
            zulu = entity.channel;
            options = entity.layout;
            report = entity.muted;
            verify = mike.id;
            tango = _closure1_slot6;
            zulu = tango.getId;
            offset = zulu.bind(tango)();
            zulu = mike.getChannelId;
            golf = zulu.bind(mike)();
            yankee = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 11;
            zulu = tango[zulu];
            tango = undefined;
            zulu = yankee.bind(tango)(zulu);
            golf = zulu.bind(tango)(golf, verify);
            zulu = _closure1_slot17;
            if(golf) { _fun86919_ip = 249; continue _fun86919 }
 100:
            yankee = mike.call;
            verify = null;
            if(!(verify != yankee)) { _fun86919_ip = 192; continue _fun86919 }
 111:
            mike = mike.call;
            verify = mike.participants;
            mike = verify.includes;
            mike = mike.bind(verify)(offset);
            if(mike) { _fun86919_ip = 192; continue _fun86919 }
 135:
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            mike = 12;
            verify = romeo[mike];
            verify = yankee.bind(tango)(verify);
            offset = verify.intl;
            verify = offset.string;
            mike = romeo[mike];
            mike = yankee.bind(tango)(mike);
            mike = mike.t;
            mike = mike.2CnhoK;
            mike = verify.bind(offset)(mike);
            _fun86919_ip = 247; continue _fun86919;
 192:
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            verify = 12;
            offset = foxtrot[verify];
            offset = romeo.bind(tango)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = foxtrot[verify];
            verify = romeo.bind(tango)(verify);
            verify = verify.t;
            verify = verify.v05Xd3;
            mike = offset.bind(yankee)(verify);
 247:
            _fun86919_ip = 304; continue _fun86919;
 249:
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            entity = 12;
            verify = romeo[entity];
            verify = yankee.bind(tango)(verify);
            offset = verify.intl;
            verify = offset.string;
            entity = romeo[entity];
            entity = yankee.bind(tango)(entity);
            entity = entity.t;
            entity = entity.NGg/fn;
            mike = verify.bind(offset)(entity);
 304:
            entity = {};
            entity['layout'] = options;
            entity['muted'] = report;
            report = 'text-positive';
            if(golf) { _fun86919_ip = 328; continue _fun86919 }
 325:
            report = oscar;
 328:
            entity['color'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: Default
        _fun86920: for(var _fun86920_ip = 0; ; ) switch(_fun86920_ip) {
 0:
            mike = argFoo;
            oscar = mike.message;
            var _closure2_slot0 = oscar;
            sizing = mike.channel;
            var _closure2_slot1 = sizing;
            romeo = mike.variant;
            foxtrot = mike.color;
            var _closure2_slot2 = foxtrot;
            yankee = mike.layout;
            var _closure2_slot3 = yankee;
            options = mike.username;
            offset = mike.muted;
            var _closure2_slot4 = offset;
            tango = mike.postProcessor;
            var _closure2_slot5 = tango;
            zulu = mike.lineClamp;
            verify = _closure1_slot0;
            golf = _closure1_slot2;
            report = 13;
            golf = golf[report];
            report = undefined;
            verify = verify.bind(report)(golf);
            golf = verify.useFontScale;
            golf = golf.bind(verify)();
            var _closure2_slot6 = golf;
            kilo = _closure1_slot4;
            backup = kilo.useMemo;
            output = oscar.content;
            verify = new Array(8);
            verify[0] = output;
            verify[1] = offset;
            output = sizing.guild_id;
            verify[2] = output;
            sizing = sizing.id;
            verify[3] = sizing;
            verify[4] = yankee;
            verify[5] = foxtrot;
            verify[6] = tango;
            verify[7] = golf;
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
                oscar = _closure2_slot4;
                entity['muted'] = oscar;
                oscar = _closure2_slot1;
                golf = oscar.guild_id;
                entity['guildId'] = golf;
                oscar = oscar.id;
                entity['channelId'] = oscar;
                oscar = _closure2_slot3;
                entity['layout'] = oscar;
                oscar = _closure2_slot2;
                entity['color'] = oscar;
                oscar = _closure2_slot5;
                entity['postProcessor'] = oscar;
                report = _closure2_slot6;
                entity['fontScale'] = report;
                tango = _closure1_slot13;
                entity['maxFontSizeMultiplier'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            verify = backup.bind(kilo)(tango, verify);
            tango = {};
            tango['color'] = foxtrot;
            tango['variant'] = romeo;
            tango['layout'] = yankee;
            tango['muted'] = offset;
            tango['message'] = oscar;
            tango['fontScale'] = golf;
            tango['lineClamp'] = zulu;
            zulu = _closure1_slot13;
            tango['maxFontSizeMultiplier'] = zulu;
            zulu = null;
            if(!(zulu != verify)) { _fun86920_ip = 268; continue _fun86920 }
 239:
            golf = _closure1_slot4;
            offset = golf.Children;
            golf = offset.count;
            offset = golf.bind(offset)(verify);
            golf = 0;
            if(!(!(offset > golf))) { _fun86920_ip = 2019; continue _fun86920 }
 268:
            yankee = oscar.hasFlag;
            offset = _closure1_slot9;
            offset = offset.IS_VOICE_MESSAGE;
            offset = yankee.bind(oscar)(offset);
            if(offset) { _fun86920_ip = 1942; continue _fun86920 }
 295:
            offset = oscar.attachments;
            offset = offset.length;
            yankee = 0;
            if(!(!(offset > yankee))) { _fun86920_ip = 1443; continue _fun86920 }
 315:
            offset = oscar.embeds;
            offset = offset.length;
            if(!(!(offset > yankee))) { _fun86920_ip = 687; continue _fun86920 }
 333:
            offset = oscar.stickerItems;
            offset = offset.length;
            if(!(!(offset > yankee))) { _fun86920_ip = 592; continue _fun86920 }
 351:
            offset = oscar.isPoll;
            offset = offset.bind(oscar)();
            if(offset) { _fun86920_ip = 481; continue _fun86920 }
 364:
            romeo = _closure1_slot1;
            foxtrot = _closure1_slot2;
            offset = 28;
            offset = foxtrot[offset];
            offset = romeo.bind(report)(offset);
            offset = offset.bind(report)(oscar);
            foxtrot = _closure1_slot16;
            romeo = {};
            romeo['username'] = options;
            if(offset) { _fun86920_ip = 414; continue _fun86920 }
 402:
            romeo['content'] = verify;
            offset = foxtrot.bind(report)(romeo, tango);
            _fun86920_ip = 479; continue _fun86920;
 414:
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
 479:
            _fun86920_ip = 590; continue _fun86920;
 481:
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
            if(update) { _fun86920_ip = 569; continue _fun86920 }
 558:
            echo = echo.question;
            result = echo.text;
 569:
            backup['question'] = result;
            backup = sizing.bind(output)(kilo, backup);
            romeo['content'] = backup;
            offset = foxtrot.bind(report)(romeo, tango);
 590:
            _fun86920_ip = 685; continue _fun86920;
 592:
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
 685:
            return offset;
 687:
            foxtrot = oscar.embeds;
            romeo = foxtrot.every;
            offset = function(argFoo) {
                _fun86925: for(var _fun86925_ip = 0; ; ) switch(_fun86925_ip) {
 0:
                    mike = argFoo;
                    zulu = mike.url;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun86925_ip = 58; continue _fun86925 }
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
            if(!romeo) { _fun86920_ip = 741; continue _fun86920 }
 717:
            kilo = oscar.embeds;
            backup = kilo.every;
            offset = function(argFoo) {
                _fun86926: for(var _fun86926_ip = 0; ; ) switch(_fun86926_ip) {
 0:
                    mike = argFoo;
                    zulu = mike.url;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun86926_ip = 58; continue _fun86926 }
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
 741:
            offset = !foxtrot;
            if(!offset) { _fun86920_ip = 750; continue _fun86920 }
 747:
            offset = !romeo;
 750:
            if(!offset) { _fun86920_ip = 777; continue _fun86920 }
 753:
            sizing = oscar.embeds;
            kilo = sizing.every;
            backup = function(argFoo) {
                _fun86927: for(var _fun86927_ip = 0; ; ) switch(_fun86927_ip) {
 0:
                    mike = argFoo;
                    zulu = mike.url;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun86927_ip = 58; continue _fun86927 }
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
 777:
            if(foxtrot) { _fun86920_ip = 1295; continue _fun86920 }
 783:
            if(romeo) { _fun86920_ip = 1171; continue _fun86920 }
 789:
            if(offset) { _fun86920_ip = 1044; continue _fun86920 }
 795:
            offset = oscar.embeds;
            offset = offset.length;
            if(!(offset > yankee)) { _fun86920_ip = 833; continue _fun86920 }
 810:
            offset = oscar.embeds;
            offset = offset[yankee];
            offset = offset.rawTitle;
            if(!(zulu == offset)) { _fun86920_ip = 1021; continue _fun86920 }
 833:
            offset = oscar.embeds;
            offset = offset.length;
            if(!(offset > yankee)) { _fun86920_ip = 871; continue _fun86920 }
 848:
            offset = oscar.embeds;
            offset = offset[yankee];
            offset = offset.rawDescription;
            if(!(zulu == offset)) { _fun86920_ip = 998; continue _fun86920 }
 871:
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
            _fun86920_ip = 1417; continue _fun86920;
 998:
            offset = oscar.embeds;
            offset = offset[yankee];
            foxtrot = offset.rawDescription;
            romeo = undefined;
            _fun86920_ip = 1417; continue _fun86920;
 1021:
            offset = oscar.embeds;
            offset = offset[yankee];
            foxtrot = offset.rawTitle;
            romeo = undefined;
            _fun86920_ip = 1417; continue _fun86920;
 1044:
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
            _fun86920_ip = 1417; continue _fun86920;
 1171:
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
            _fun86920_ip = 1417; continue _fun86920;
 1295:
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
 1417:
            yankee = _closure1_slot16;
            offset = {};
            offset['username'] = options;
            offset['content'] = foxtrot;
            offset['icon'] = romeo;
            offset = yankee.bind(report)(offset, tango);
            return offset;
 1443:
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
            if(!yankee) { _fun86920_ip = 1497; continue _fun86920 }
 1473:
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
 1497:
            offset = !romeo;
            if(!offset) { _fun86920_ip = 1506; continue _fun86920 }
 1503:
            offset = !yankee;
 1506:
            if(!offset) { _fun86920_ip = 1533; continue _fun86920 }
 1509:
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
 1533:
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
            if(romeo) { _fun86920_ip = 1838; continue _fun86920 }
 1583:
            if(yankee) { _fun86920_ip = 1758; continue _fun86920 }
 1589:
            if(offset) { _fun86920_ip = 1675; continue _fun86920 }
 1592:
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
            _fun86920_ip = 1916; continue _fun86920;
 1675:
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
            _fun86920_ip = 1916; continue _fun86920;
 1758:
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
            _fun86920_ip = 1916; continue _fun86920;
 1838:
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
 1916:
            offset = _closure1_slot16;
            entity = {};
            entity['username'] = options;
            entity['content'] = romeo;
            entity['icon'] = yankee;
            entity = offset.bind(report)(entity, tango);
            return entity;
 1942:
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
 2019:
            entity = oscar.embeds;
            offset = entity.length;
            entity = 1;
            if(!(entity === offset)) { _fun86920_ip = 2081; continue _fun86920 }
 2037:
            entity = oscar.embeds;
            entity = entity[golf];
            offset = entity.url;
            entity = oscar.content;
            if(!(offset === entity)) { _fun86920_ip = 2081; continue _fun86920 }
 2061:
            entity = oscar.embeds;
            entity = entity[golf];
            entity = entity.rawTitle;
            if(!(zulu == entity)) { _fun86920_ip = 2103; continue _fun86920 }
 2081:
            zulu = _closure1_slot16;
            entity = {};
            entity['username'] = options;
            entity['content'] = verify;
            entity = zulu.bind(report)(entity, tango);
            _fun86920_ip = 2139; continue _fun86920;
 2103:
            zulu = _closure1_slot16;
            mike = {};
            mike['username'] = options;
            oscar = oscar.embeds;
            oscar = oscar[golf];
            oscar = oscar.rawTitle;
            mike['content'] = oscar;
            entity = zulu.bind(report)(mike, tango);
 2139:
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
            _fun86930: for(var _fun86930_ip = 0; ; ) switch(_fun86930_ip) {
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
                if(!(mike != report)) { _fun86930_ip = 89; continue _fun86930 }
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
        _fun86931: for(var _fun86931_ip = 0; ; ) switch(_fun86931_ip) {
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
            if(!mike) { _fun86931_ip = 221; continue _fun86931 }
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
        _fun86933: for(var _fun86933_ip = 0; ; ) switch(_fun86933_ip) {
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
            if(!zulu) { _fun86933_ip = 307; continue _fun86933 }
 91:
            zulu = _closure1_slot17;
            mike = mike.author;
            if(!(mike !== sizing)) { _fun86933_ip = 230; continue _fun86933 }
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
            _fun86933_ip = 301; continue _fun86933;
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
        _fun86941: for(var _fun86941_ip = 0; ; ) switch(_fun86941_ip) {
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
            if(report) { _fun86941_ip = 127; continue _fun86941 }
 114:
            report = options.G7p6v7;
            report = verify.bind(offset)(report);
            _fun86941_ip = 138; continue _fun86941;
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
        _fun86942: for(var _fun86942_ip = 0; ; ) switch(_fun86942_ip) {
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
            if(!(zulu !== tango)) { _fun86942_ip = 595; continue _fun86942 }
 47:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.CHANGELOG;
            if(!(zulu !== tango)) { _fun86942_ip = 595; continue _fun86942 }
 83:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.REPLY;
            if(!(zulu !== tango)) { _fun86942_ip = 595; continue _fun86942 }
 119:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.CHAT_INPUT_COMMAND;
            if(!(zulu !== tango)) { _fun86942_ip = 595; continue _fun86942 }
 155:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.CONTEXT_MENU_COMMAND;
            if(!(zulu !== tango)) { _fun86942_ip = 595; continue _fun86942 }
 191:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.POLL_RESULT;
            if(!(zulu !== tango)) { _fun86942_ip = 595; continue _fun86942 }
 227:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.RECIPIENT_ADD;
            if(!(zulu !== tango)) { _fun86942_ip = 589; continue _fun86942 }
 263:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.RECIPIENT_REMOVE;
            if(!(zulu !== tango)) { _fun86942_ip = 583; continue _fun86942 }
 299:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.CALL;
            if(!(zulu !== tango)) { _fun86942_ip = 577; continue _fun86942 }
 335:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.CHANNEL_NAME_CHANGE;
            if(!(zulu !== tango)) { _fun86942_ip = 571; continue _fun86942 }
 371:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.CHANNEL_ICON_CHANGE;
            if(!(zulu !== tango)) { _fun86942_ip = 565; continue _fun86942 }
 407:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.CHANNEL_PINNED_MESSAGE;
            if(!(zulu !== tango)) { _fun86942_ip = 559; continue _fun86942 }
 440:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.USER_JOIN;
            if(!(zulu !== tango)) { _fun86942_ip = 553; continue _fun86942 }
 473:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.THREAD_CREATED;
            if(!(zulu !== tango)) { _fun86942_ip = 547; continue _fun86942 }
 506:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.MessageTypes;
            zulu = zulu.PREMIUM_REFERRAL;
            if(!(zulu !== tango)) { _fun86942_ip = 541; continue _fun86942 }
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
            if(!(entity !== zulu)) { _fun86942_ip = 618; continue _fun86942 }
 612:
            entity = _closure1_slot20;
            _fun86942_ip = 622; continue _fun86942;
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
        _fun86943: for(var _fun86943_ip = 0; ; ) switch(_fun86943_ip) {
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
            if(!(oscar !== tango)) { _fun86943_ip = 138; continue _fun86943 }
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
            _fun86943_ip = 193; continue _fun86943;
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
            if(tango) { _fun86943_ip = 297; continue _fun86943 }
 275:
            oscar = _closure1_slot30;
            tango = _closure1_slot14;
            tango = tango.STREAMLINED;
            tango = oscar.bind(report)(golf, tango);
            _fun86943_ip = 301; continue _fun86943;
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
            if(zulu) { _fun86943_ip = 387; continue _fun86943 }
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
        _fun86946: for(var _fun86946_ip = 0; ; ) switch(_fun86946_ip) {
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
            if(!(golf === oscar)) { _fun86946_ip = 271; continue _fun86946 }
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
            if(tango) { _fun86946_ip = 305; continue _fun86946 }
 283:
            oscar = _closure1_slot30;
            tango = _closure1_slot14;
            tango = tango.STREAMLINED;
            tango = oscar.bind(report)(golf, tango);
            _fun86946_ip = 309; continue _fun86946;
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
            if(zulu) { _fun86946_ip = 395; continue _fun86946 }
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
        _fun86949: for(var _fun86949_ip = 0; ; ) switch(_fun86949_ip) {
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
            if(zulu) { _fun86949_ip = 151; continue _fun86949 }
 129:
            tango = _closure1_slot30;
            zulu = _closure1_slot14;
            zulu = zulu.FULL;
            tango = tango.bind(report)(verify, zulu);
            _fun86949_ip = 155; continue _fun86949;
 151:
            tango = _closure1_slot29;
 155:
            zulu = entity == tango;
            entity = null;
            if(zulu) { _fun86949_ip = 219; continue _fun86949 }
 164:
            zulu = _closure1_slot19;
            if(!(tango === zulu)) { _fun86949_ip = 176; continue _fun86949 }
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
    options = 'modules/main_tabs_v2/native/shared_components/ChannelRowPreview.tsx';
    options = verify.bind(offset)(options);
    zulu['DefaultMessageComponentStyle'] = golf;
    golf = function(argFoo) { // Original name: ChannelRowPreview
        _fun86951: for(var _fun86951_ip = 0; ; ) switch(_fun86951_ip) {
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
            if(zulu) { _fun86951_ip = 107; continue _fun86951 }
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
    zulu['ChannelRowPreview'] = golf;
    oscar = function(argFoo) { // Original name: NotificationChannelRowPreview
        _fun86952: for(var _fun86952_ip = 0; ; ) switch(_fun86952_ip) {
 0:
            tango = argFoo;
            options = tango.message;
            golf = tango.channel;
            verify = tango.componentStyle;
            report = undefined;
            if(!(verify === report)) { _fun86952_ip = 38; continue _fun86952 }
 25:
            entity = _closure1_slot14;
            verify = entity.FULL;
 38:
            zulu = {'message': 0, 'channel': 0, 'componentStyle': 0};
            entity = null;
            romeo = zulu;
            yankee = null;
            mike = silentSetPrototypeOf(romeo, yankee);
            romeo = {};
            yankee = tango;
            offset = zulu;
            oscar = copyDataProperties(romeo, yankee, offset);
            tango = _closure1_slot30;
            zulu = options.type;
            tango = tango.bind(report)(zulu, verify);
            zulu = entity == tango;
            if(zulu) { _fun86952_ip = 126; continue _fun86952 }
 96:
            zulu = _closure1_slot11;
            mike = {};
            mike['message'] = options;
            mike['channel'] = golf;
            romeo = mike;
            yankee = oscar;
            oscar = copyDataProperties(romeo, yankee);
            entity = zulu.bind(report)(tango, mike);
 126:
            return entity;
        }
    };
    zulu['NotificationChannelRowPreview'] = oscar;
    zulu['PrivateChannelRowPreview'] = report;
    zulu['GuildChannelRowPreview'] = tango;
    zulu['SearchChannelRowPreview'] = mike;
    return entity;
})();