// app/modules/main_tabs_v2/native/shared_components/ChannelRowPreview.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    verify = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = offset;
    entity = function(argFoo) { // Original name: identityHook
        entity = argFoo;
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo, argBar) { // Original name: renderMessageText
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = argBar;
            backup = michal.username;
            offset = michal.content;
            zuuluu = michal.icon;
            verify = entity.layout;
            kiloes = entity.variant;
            yankee = entity.color;
            output = entity.lineClamp;
            tangon = undefined;
            if(!(output === tangon)) { _fun00002_ip = 52; continue _fun00001 }
 49:
            output = 1;
 52:
            michal = entity.fontScale;
            if(!(michal === tangon)) { _fun00002_ip = 65; continue _fun00001 }
 62:
            michal = 1;
 65:
            romeon = entity.maxFontSizeMultiplier;
            if(!(romeon === tangon)) { _fun00002_ip = 85; continue _fun00001 }
 75:
            romeon = 1.75;
 85:
            oscard = _closure1_slot0;
            entity = _closure1_slot2;
            golfie = 8;
            golfie = entity[golfie];
            option = oscard.bind(tangon)(golfie);
            golfie = option.getLayoutStyles;
            sizing = golfie.bind(option)(verify);
            result = 9;
            entity = entity[result];
            entity = oscard.bind(tangon)(entity);
            oscard = entity.TextStyleSheet;
            entity = sizing.messagePreview;
            entity = entity.text;
            entity = entity.variant;
            entity = oscard[entity];
            entity = entity.lineHeight;
            foxtra = entity * michal;
            verify = null;
            entity = verify != zuuluu;
            oscard = undefined;
            if(!entity) { _fun00002_ip = 250; continue _fun00001 }
 178:
            michal = _closure1_slot3;
            entity = 2;
            michal = michal.bind(tangon)(zuuluu, entity);
            entity = 0;
            zuuluu = michal[entity];
            entity = 1;
            entity = michal[entity];
            michal = _closure1_slot10;
            entity = {};
            golfie = sizing.messagePreview;
            golfie = golfie.messageTypeIconSizeNew;
            entity['size'] = golfie;
            entity['color'] = yankee;
            golfie = {};
            option = 4;
            golfie['marginLeft'] = option;
            entity['style'] = golfie;
            oscard = michal.bind(tangon)(zuuluu, entity);
 250:
            zuuluu = _closure1_slot11;
            michal = _closure1_slot5;
            entity = {};
            golfie = {'flexDirection': 'row', 'alignItems': 'center'};
            golfie['minHeight'] = foxtra;
            entity['style'] = golfie;
            option = _closure1_slot11;
            golfie = _closure1_slot0;
            report = _closure1_slot2;
            report = report[result];
            report = golfie.bind(tangon)(report);
            golfie = report.Text;
            report = {};
            report['lineClamp'] = output;
            if(!(verify == kiloes)) { _fun00002_ip = 336; continue _fun00001 }
 320:
            sizing = sizing.messagePreview;
            sizing = sizing.text;
            kiloes = sizing.variant;
 336:
            report['variant'] = kiloes;
            report['maxFontSizeMultiplier'] = romeon;
            report['color'] = yankee;
            yankee = {'flexShrink': 1, 'lineHeight': null, 'paddingBottom': 2};
            romeon = 2;
            romeon = foxtra - romeon;
            yankee['lineHeight'] = romeon;
            report['style'] = yankee;
            yankee = verify != backup;
            if(!yankee) { _fun00002_ip = 416; continue _fun00001 }
 387:
            verify = global;
            verify = verify.HermesInternal;
            foxtra = verify.concat;
            romeon = '';
            verify = ': ';
            yankee = foxtra.bind(romeon)(backup, verify);
 416:
            verify = new Array(2);
            verify[0] = yankee;
            verify[1] = offset;
            report['children'] = verify;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo, argBar) { // Original name: renderSystemMessage
        tangon = _closure1_slot14;
        zuuluu = {};
        entity = argFoo;
        zuuluu['content'] = entity;
        michal = undefined;
        entity = argBar;
        entity = tangon.bind(michal)(zuuluu, entity);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: Call
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            michal = entity.message;
            oscard = entity.color;
            zuuluu = entity.channel;
            option = entity.layout;
            report = entity.muted;
            verify = michal.id;
            tangon = _closure1_slot6;
            zuuluu = tangon.getId;
            offset = zuuluu.bind(tangon)();
            zuuluu = michal.getChannelId;
            golfie = zuuluu.bind(michal)();
            yankee = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 10;
            zuuluu = tangon[zuuluu];
            tangon = undefined;
            zuuluu = yankee.bind(tangon)(zuuluu);
            golfie = zuuluu.bind(tangon)(golfie, verify);
            zuuluu = _closure1_slot15;
            if(golfie) { _fun00004_ip = 249; continue _fun00003 }
 100:
            yankee = michal.call;
            verify = null;
            if(!(verify != yankee)) { _fun00004_ip = 192; continue _fun00003 }
 111:
            michal = michal.call;
            verify = michal.participants;
            michal = verify.includes;
            michal = michal.bind(verify)(offset);
            if(michal) { _fun00004_ip = 192; continue _fun00003 }
 135:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            michal = 11;
            verify = romeon[michal];
            verify = yankee.bind(tangon)(verify);
            offset = verify.intl;
            verify = offset.string;
            michal = romeon[michal];
            michal = yankee.bind(tangon)(michal);
            michal = michal.t;
            michal = michal.2CnhoK;
            michal = verify.bind(offset)(michal);
            _fun00004_ip = 247; continue _fun00003;
 192:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            verify = 11;
            offset = foxtra[verify];
            offset = romeon.bind(tangon)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = foxtra[verify];
            verify = romeon.bind(tangon)(verify);
            verify = verify.t;
            verify = verify.v05Xd3;
            michal = offset.bind(yankee)(verify);
 247:
            _fun00004_ip = 304; continue _fun00003;
 249:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            entity = 11;
            verify = romeon[entity];
            verify = yankee.bind(tangon)(verify);
            offset = verify.intl;
            verify = offset.string;
            entity = romeon[entity];
            entity = yankee.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.NGg/fn;
            michal = verify.bind(offset)(entity);
 304:
            entity = {};
            entity['layout'] = option;
            entity['muted'] = report;
            report = 'text-positive';
            if(golfie) { _fun00004_ip = 328; continue _fun00003 }
 325:
            report = oscard;
 328:
            entity['color'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: Default
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            oscard = michal.message;
            var _closure2_slot0 = oscard;
            sizing = michal.channel;
            var _closure2_slot1 = sizing;
            romeon = michal.variant;
            foxtra = michal.color;
            var _closure2_slot2 = foxtra;
            yankee = michal.layout;
            var _closure2_slot3 = yankee;
            option = michal.username;
            offset = michal.muted;
            var _closure2_slot4 = offset;
            tangon = michal.postProcessor;
            var _closure2_slot5 = tangon;
            zuuluu = michal.lineClamp;
            verify = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 12;
            golfie = golfie[report];
            report = undefined;
            verify = verify.bind(report)(golfie);
            golfie = verify.useFontScale;
            golfie = golfie.bind(verify)();
            var _closure2_slot6 = golfie;
            kiloes = _closure1_slot4;
            backup = kiloes.useMemo;
            output = oscard.content;
            verify = new Array(8);
            verify[0] = output;
            verify[1] = offset;
            output = sizing.guild_id;
            verify[2] = output;
            sizing = sizing.id;
            verify[3] = sizing;
            verify[4] = yankee;
            verify[5] = foxtra;
            verify[6] = tangon;
            verify[7] = golfie;
            tangon = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 13;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.renderMessagePreviewMarkup;
                entity = {};
                report = _closure2_slot0;
                report = report.content;
                entity['content'] = report;
                report = _closure2_slot4;
                entity['muted'] = report;
                report = _closure2_slot1;
                oscard = report.guild_id;
                entity['guildId'] = oscard;
                report = report.id;
                entity['channelId'] = report;
                report = _closure2_slot3;
                entity['layout'] = report;
                report = _closure2_slot2;
                entity['color'] = report;
                report = _closure2_slot5;
                entity['postProcessor'] = report;
                tangon = _closure2_slot6;
                entity['fontScale'] = tangon;
                tangon = 1.75;
                entity['maxFontSizeMultiplier'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            verify = backup.bind(kiloes)(tangon, verify);
            tangon = {};
            tangon['color'] = foxtra;
            tangon['variant'] = romeon;
            tangon['layout'] = yankee;
            tangon['muted'] = offset;
            tangon['message'] = oscard;
            tangon['fontScale'] = golfie;
            tangon['lineClamp'] = zuuluu;
            zuuluu = 1.75;
            tangon['maxFontSizeMultiplier'] = zuuluu;
            zuuluu = null;
            if(!(zuuluu != verify)) { _fun00006_ip = 272; continue _fun00005 }
 243:
            golfie = _closure1_slot4;
            offset = golfie.Children;
            golfie = offset.count;
            offset = golfie.bind(offset)(verify);
            golfie = 0;
            if(!(!(offset > golfie))) { _fun00006_ip = 2011; continue _fun00005 }
 272:
            yankee = oscard.hasFlag;
            offset = _closure1_slot9;
            offset = offset.IS_VOICE_MESSAGE;
            offset = yankee.bind(oscard)(offset);
            if(offset) { _fun00006_ip = 1934; continue _fun00005 }
 299:
            offset = oscard.attachments;
            offset = offset.length;
            yankee = 0;
            if(!(!(offset > yankee))) { _fun00006_ip = 1441; continue _fun00005 }
 319:
            offset = oscard.embeds;
            offset = offset.length;
            if(!(!(offset > yankee))) { _fun00006_ip = 691; continue _fun00005 }
 337:
            offset = oscard.stickerItems;
            offset = offset.length;
            if(!(!(offset > yankee))) { _fun00006_ip = 596; continue _fun00005 }
 355:
            offset = oscard.isPoll;
            offset = offset.bind(oscard)();
            if(offset) { _fun00006_ip = 485; continue _fun00005 }
 368:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            offset = 27;
            offset = foxtra[offset];
            offset = romeon.bind(report)(offset);
            offset = offset.bind(report)(oscard);
            foxtra = _closure1_slot14;
            romeon = {};
            romeon['username'] = option;
            if(offset) { _fun00006_ip = 418; continue _fun00005 }
 406:
            romeon['content'] = verify;
            offset = foxtra.bind(report)(romeon, tangon);
            _fun00006_ip = 483; continue _fun00005;
 418:
            output = _closure1_slot0;
            result = _closure1_slot2;
            backup = 11;
            kiloes = result[backup];
            kiloes = output.bind(report)(kiloes);
            sizing = kiloes.intl;
            kiloes = sizing.string;
            backup = result[backup];
            backup = output.bind(report)(backup);
            backup = backup.t;
            backup = backup.9ddYKi;
            backup = kiloes.bind(sizing)(backup);
            romeon['content'] = backup;
            offset = foxtra.bind(report)(romeon, tangon);
 483:
            _fun00006_ip = 594; continue _fun00005;
 485:
            foxtra = _closure1_slot14;
            romeon = {};
            romeon['username'] = option;
            kiloes = _closure1_slot0;
            result = _closure1_slot2;
            backup = 11;
            sizing = result[backup];
            sizing = kiloes.bind(report)(sizing);
            output = sizing.intl;
            sizing = output.formatToPlainString;
            backup = result[backup];
            backup = kiloes.bind(report)(backup);
            backup = backup.t;
            kiloes = backup.ImizdH;
            backup = {};
            echoed = oscard.poll;
            update = zuuluu == echoed;
            result = undefined;
            if(update) { _fun00006_ip = 573; continue _fun00005 }
 562:
            echoed = echoed.question;
            result = echoed.text;
 573:
            backup['question'] = result;
            backup = sizing.bind(output)(kiloes, backup);
            romeon['content'] = backup;
            offset = foxtra.bind(report)(romeon, tangon);
 594:
            _fun00006_ip = 689; continue _fun00005;
 596:
            foxtra = _closure1_slot14;
            romeon = {};
            romeon['username'] = option;
            backup = oscard.stickerItems;
            backup = backup[yankee];
            backup = backup.name;
            romeon['content'] = backup;
            kiloes = _closure1_slot0;
            output = _closure1_slot2;
            backup = 25;
            backup = output[backup];
            backup = kiloes.bind(report)(backup);
            kiloes = backup.StickerIcon;
            backup = new Array(2);
            backup[0] = kiloes;
            sizing = _closure1_slot1;
            kiloes = 26;
            kiloes = output[kiloes];
            kiloes = sizing.bind(report)(kiloes);
            backup[1] = kiloes;
            romeon['icon'] = backup;
            offset = foxtra.bind(report)(romeon, tangon);
 689:
            return offset;
 691:
            foxtra = oscard.embeds;
            romeon = foxtra.every;
            offset = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = argFoo;
                    zuuluu = michal.url;
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00008_ip = 58; continue _fun00007 }
 17:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 14;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = report.bind(zuuluu)(tangon);
                    zuuluu = tangon.isImageUrl;
                    michal = michal.url;
                    entity = zuuluu.bind(tangon)(michal);
 58:
                    return entity;
                }
            };
            foxtra = romeon.bind(foxtra)(offset);
            romeon = !foxtra;
            if(!romeon) { _fun00006_ip = 741; continue _fun00005 }
 719:
            kiloes = oscard.embeds;
            backup = kiloes.every;
            offset = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = argFoo;
                    zuuluu = michal.url;
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00010_ip = 58; continue _fun00009 }
 17:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 14;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = report.bind(zuuluu)(tangon);
                    zuuluu = tangon.isVideoUrl;
                    michal = michal.url;
                    entity = zuuluu.bind(tangon)(michal);
 58:
                    return entity;
                }
            };
            romeon = backup.bind(kiloes)(offset);
 741:
            offset = !foxtra;
            if(!offset) { _fun00006_ip = 750; continue _fun00005 }
 747:
            offset = !romeon;
 750:
            if(!offset) { _fun00006_ip = 775; continue _fun00005 }
 753:
            sizing = oscard.embeds;
            kiloes = sizing.every;
            backup = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = argFoo;
                    zuuluu = michal.url;
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00012_ip = 58; continue _fun00011 }
 17:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 14;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = report.bind(zuuluu)(tangon);
                    zuuluu = tangon.isAudioFile;
                    michal = michal.url;
                    entity = zuuluu.bind(tangon)(michal);
 58:
                    return entity;
                }
            };
            offset = kiloes.bind(sizing)(backup);
 775:
            if(foxtra) { _fun00006_ip = 1293; continue _fun00005 }
 781:
            if(romeon) { _fun00006_ip = 1169; continue _fun00005 }
 787:
            if(offset) { _fun00006_ip = 1042; continue _fun00005 }
 793:
            offset = oscard.embeds;
            offset = offset.length;
            if(!(offset > yankee)) { _fun00006_ip = 831; continue _fun00005 }
 808:
            offset = oscard.embeds;
            offset = offset[yankee];
            offset = offset.rawTitle;
            if(!(zuuluu == offset)) { _fun00006_ip = 1019; continue _fun00005 }
 831:
            offset = oscard.embeds;
            offset = offset.length;
            if(!(offset > yankee)) { _fun00006_ip = 869; continue _fun00005 }
 846:
            offset = oscard.embeds;
            offset = offset[yankee];
            offset = offset.rawDescription;
            if(!(zuuluu == offset)) { _fun00006_ip = 996; continue _fun00005 }
 869:
            foxtra = _closure1_slot0;
            kiloes = _closure1_slot2;
            offset = 11;
            romeon = kiloes[offset];
            romeon = foxtra.bind(report)(romeon);
            sizing = romeon.intl;
            backup = sizing.formatToPlainString;
            offset = kiloes[offset];
            offset = foxtra.bind(report)(offset);
            offset = offset.t;
            romeon = offset.9XuYjo;
            offset = {};
            output = oscard.embeds;
            output = output.length;
            offset['count'] = output;
            offset = backup.bind(sizing)(romeon, offset);
            romeon = 23;
            romeon = kiloes[romeon];
            romeon = foxtra.bind(report)(romeon);
            foxtra = romeon.LinkIcon;
            romeon = new Array(2);
            romeon[0] = foxtra;
            backup = _closure1_slot1;
            foxtra = 24;
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(report)(foxtra);
            romeon[1] = foxtra;
            foxtra = offset;
            _fun00006_ip = 1415; continue _fun00005;
 996:
            offset = oscard.embeds;
            offset = offset[yankee];
            foxtra = offset.rawDescription;
            romeon = undefined;
            _fun00006_ip = 1415; continue _fun00005;
 1019:
            offset = oscard.embeds;
            offset = offset[yankee];
            foxtra = offset.rawTitle;
            romeon = undefined;
            _fun00006_ip = 1415; continue _fun00005;
 1042:
            backup = _closure1_slot0;
            sizing = _closure1_slot2;
            offset = 11;
            yankee = sizing[offset];
            yankee = backup.bind(report)(yankee);
            output = yankee.intl;
            kiloes = output.formatToPlainString;
            offset = sizing[offset];
            offset = backup.bind(report)(offset);
            offset = offset.t;
            yankee = offset.fnO3hI;
            offset = {};
            result = oscard.embeds;
            result = result.length;
            offset['count'] = result;
            foxtra = kiloes.bind(output)(yankee, offset);
            offset = 19;
            offset = sizing[offset];
            offset = backup.bind(report)(offset);
            backup = offset.MusicIcon;
            offset = new Array(2);
            offset[0] = backup;
            kiloes = _closure1_slot1;
            backup = 20;
            backup = sizing[backup];
            backup = kiloes.bind(report)(backup);
            offset[1] = backup;
            romeon = offset;
            _fun00006_ip = 1415; continue _fun00005;
 1169:
            backup = _closure1_slot0;
            sizing = _closure1_slot2;
            offset = 11;
            yankee = sizing[offset];
            yankee = backup.bind(report)(yankee);
            output = yankee.intl;
            kiloes = output.formatToPlainString;
            offset = sizing[offset];
            offset = backup.bind(report)(offset);
            offset = offset.t;
            yankee = offset.SJ6pPT;
            offset = {};
            result = oscard.embeds;
            result = result.length;
            offset['count'] = result;
            foxtra = kiloes.bind(output)(yankee, offset);
            offset = 17;
            offset = sizing[offset];
            offset = backup.bind(report)(offset);
            backup = offset.VideoIcon;
            offset = new Array(2);
            offset[0] = backup;
            kiloes = _closure1_slot1;
            backup = 18;
            backup = sizing[backup];
            backup = kiloes.bind(report)(backup);
            offset[1] = backup;
            romeon = offset;
            _fun00006_ip = 1415; continue _fun00005;
 1293:
            backup = _closure1_slot0;
            sizing = _closure1_slot2;
            offset = 11;
            yankee = sizing[offset];
            yankee = backup.bind(report)(yankee);
            output = yankee.intl;
            kiloes = output.formatToPlainString;
            offset = sizing[offset];
            offset = backup.bind(report)(offset);
            offset = offset.t;
            yankee = offset.h4pFfX;
            offset = {};
            result = oscard.embeds;
            result = result.length;
            offset['count'] = result;
            foxtra = kiloes.bind(output)(yankee, offset);
            offset = 15;
            offset = sizing[offset];
            offset = backup.bind(report)(offset);
            backup = offset.ImageIcon;
            offset = new Array(2);
            offset[0] = backup;
            kiloes = _closure1_slot1;
            backup = 16;
            backup = sizing[backup];
            backup = kiloes.bind(report)(backup);
            offset[1] = backup;
            romeon = offset;
 1415:
            yankee = _closure1_slot14;
            offset = {};
            offset['username'] = option;
            offset['content'] = foxtra;
            offset['icon'] = romeon;
            offset = yankee.bind(report)(offset, tangon);
            return offset;
 1441:
            romeon = oscard.attachments;
            yankee = romeon.every;
            offset = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 14;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.isImageFile;
                entity = argFoo;
                entity = entity.filename;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            romeon = yankee.bind(romeon)(offset);
            yankee = !romeon;
            if(!yankee) { _fun00006_ip = 1491; continue _fun00005 }
 1469:
            backup = oscard.attachments;
            foxtra = backup.every;
            offset = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 14;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.isVideoFile;
                entity = argFoo;
                entity = entity.filename;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            yankee = foxtra.bind(backup)(offset);
 1491:
            offset = !romeon;
            if(!offset) { _fun00006_ip = 1500; continue _fun00005 }
 1497:
            offset = !yankee;
 1500:
            if(!offset) { _fun00006_ip = 1525; continue _fun00005 }
 1503:
            backup = oscard.attachments;
            foxtra = backup.every;
            entity = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 14;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.isAudioFile;
                entity = argFoo;
                entity = entity.filename;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            offset = foxtra.bind(backup)(entity);
 1525:
            foxtra = _closure1_slot0;
            kiloes = _closure1_slot2;
            entity = 11;
            backup = kiloes[entity];
            backup = foxtra.bind(report)(backup);
            sizing = backup.intl;
            backup = sizing.formatToPlainString;
            entity = kiloes[entity];
            entity = foxtra.bind(report)(entity);
            entity = entity.t;
            if(romeon) { _fun00006_ip = 1830; continue _fun00005 }
 1575:
            if(yankee) { _fun00006_ip = 1750; continue _fun00005 }
 1581:
            if(offset) { _fun00006_ip = 1667; continue _fun00005 }
 1584:
            yankee = entity.89ihS0;
            offset = {};
            romeon = oscard.attachments;
            romeon = romeon.length;
            offset['count'] = romeon;
            offset = backup.bind(sizing)(yankee, offset);
            yankee = 21;
            yankee = kiloes[yankee];
            yankee = foxtra.bind(report)(yankee);
            romeon = yankee.AttachmentIcon;
            yankee = new Array(2);
            yankee[0] = romeon;
            output = _closure1_slot1;
            romeon = 22;
            romeon = kiloes[romeon];
            romeon = output.bind(report)(romeon);
            yankee[1] = romeon;
            romeon = offset;
            _fun00006_ip = 1908; continue _fun00005;
 1667:
            output = entity.fnO3hI;
            offset = {};
            result = oscard.attachments;
            result = result.length;
            offset['count'] = result;
            romeon = backup.bind(sizing)(output, offset);
            offset = 19;
            offset = kiloes[offset];
            offset = foxtra.bind(report)(offset);
            result = offset.MusicIcon;
            offset = new Array(2);
            offset[0] = result;
            echoed = _closure1_slot1;
            result = 20;
            result = kiloes[result];
            result = echoed.bind(report)(result);
            offset[1] = result;
            yankee = offset;
            _fun00006_ip = 1908; continue _fun00005;
 1750:
            output = entity.SJ6pPT;
            offset = {};
            result = oscard.attachments;
            result = result.length;
            offset['count'] = result;
            romeon = backup.bind(sizing)(output, offset);
            offset = 17;
            offset = kiloes[offset];
            offset = foxtra.bind(report)(offset);
            result = offset.VideoIcon;
            offset = new Array(2);
            offset[0] = result;
            echoed = _closure1_slot1;
            result = 18;
            result = kiloes[result];
            result = echoed.bind(report)(result);
            offset[1] = result;
            yankee = offset;
            _fun00006_ip = 1908; continue _fun00005;
 1830:
            offset = entity.h4pFfX;
            entity = {};
            output = oscard.attachments;
            output = output.length;
            entity['count'] = output;
            romeon = backup.bind(sizing)(offset, entity);
            entity = 15;
            entity = kiloes[entity];
            entity = foxtra.bind(report)(entity);
            foxtra = entity.ImageIcon;
            entity = new Array(2);
            entity[0] = foxtra;
            backup = _closure1_slot1;
            foxtra = 16;
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(report)(foxtra);
            entity[1] = foxtra;
            yankee = entity;
 1908:
            offset = _closure1_slot14;
            entity = {};
            entity['username'] = option;
            entity['content'] = romeon;
            entity['icon'] = yankee;
            entity = offset.bind(report)(entity, tangon);
            return entity;
 1934:
            offset = _closure1_slot14;
            entity = {};
            entity['username'] = option;
            backup = _closure1_slot0;
            kiloes = _closure1_slot2;
            yankee = 11;
            romeon = kiloes[yankee];
            romeon = backup.bind(report)(romeon);
            foxtra = romeon.intl;
            romeon = foxtra.string;
            yankee = kiloes[yankee];
            yankee = backup.bind(report)(yankee);
            yankee = yankee.t;
            yankee = yankee.slFYgo;
            yankee = romeon.bind(foxtra)(yankee);
            entity['content'] = yankee;
            entity = offset.bind(report)(entity, tangon);
            return entity;
 2011:
            entity = oscard.embeds;
            offset = entity.length;
            entity = 1;
            if(!(entity === offset)) { _fun00006_ip = 2073; continue _fun00005 }
 2029:
            entity = oscard.embeds;
            entity = entity[golfie];
            offset = entity.url;
            entity = oscard.content;
            if(!(offset === entity)) { _fun00006_ip = 2073; continue _fun00005 }
 2053:
            entity = oscard.embeds;
            entity = entity[golfie];
            entity = entity.rawTitle;
            if(!(zuuluu == entity)) { _fun00006_ip = 2095; continue _fun00005 }
 2073:
            zuuluu = _closure1_slot14;
            entity = {};
            entity['username'] = option;
            entity['content'] = verify;
            entity = zuuluu.bind(report)(entity, tangon);
            _fun00006_ip = 2131; continue _fun00005;
 2095:
            zuuluu = _closure1_slot14;
            michal = {};
            michal['username'] = option;
            oscard = oscard.embeds;
            oscard = oscard[golfie];
            oscard = oscard.rawTitle;
            michal['content'] = oscard;
            entity = zuuluu.bind(report)(michal, tangon);
 2131:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: DefaultNative
        entity = argFoo;
        option = entity.message;
        michal = entity.lineClamp;
        var _closure2_slot0 = michal;
        oscard = entity.messageSizeCacheRef;
        report = entity.maxHeight;
        zuuluu = _closure1_slot0;
        offset = _closure1_slot2;
        michal = 28;
        golfie = offset[michal];
        tangon = undefined;
        golfie = zuuluu.bind(tangon)(golfie);
        yankee = golfie.RenderEmbeds;
        golfie = yankee.getSetting;
        foxtra = golfie.bind(yankee)();
        var _closure2_slot1 = foxtra;
        golfie = offset[michal];
        golfie = zuuluu.bind(tangon)(golfie);
        yankee = golfie.InlineEmbedMedia;
        golfie = yankee.getSetting;
        romeon = golfie.bind(yankee)();
        var _closure2_slot2 = romeon;
        michal = offset[michal];
        michal = zuuluu.bind(tangon)(michal);
        zuuluu = michal.InlineAttachmentMedia;
        michal = zuuluu.getSetting;
        michal = michal.bind(zuuluu)();
        var _closure2_slot3 = michal;
        yankee = _closure1_slot4;
        golfie = yankee.useMemo;
        zuuluu = new Array(3);
        zuuluu[0] = foxtra;
        zuuluu[1] = romeon;
        zuuluu[2] = michal;
        michal = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 29;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            michal = entity.prototype;
            michal = Object.create(michal, {constructor: {value: entity}});
            golfie = michal;
            entity = new golfie[entity](oscard);
            entity = entity instanceof Object ? entity : michal;
            zuuluu = entity.setOptions;
            michal = {'renderEmbeds': null, 'inlineEmbedMedia': null, 'inlineAttachmentMedia': null, 'renderReactions': false, 'renderShortcuts': false, 'animateEmoji': false, 'gifAutoPlay': false, 'renderReplies': false, 'renderCodedLinks': false, 'renderGiftCode': false, 'renderActivityInviteEmbed': false, 'renderThreadEmbeds': false, 'renderForumPostActions': false, 'ignoreMentioned': true, 'enableSwipeActions': false, 'renderExecutedCommands': false, 'useAlternateEmbedColors': true};
            report = _closure2_slot1;
            michal['renderEmbeds'] = report;
            report = _closure2_slot2;
            michal['inlineEmbedMedia'] = report;
            tangon = _closure2_slot3;
            michal['inlineAttachmentMedia'] = tangon;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        golfie = golfie.bind(yankee)(michal, zuuluu);
        zuuluu = _closure1_slot10;
        michal = _closure1_slot1;
        entity = 30;
        entity = offset[entity];
        michal = michal.bind(tangon)(entity);
        entity = {'pointerEvents': 'none', 'horizontalOffset': 0};
        verify = function(argFoo) { // Original name: modifyRow
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zuuluu = argFoo;
                tangon = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 31;
                michal = michal[entity];
                entity = undefined;
                michal = tangon.bind(entity)(michal);
                michal = michal.MessageContextType;
                michal = michal.SEARCH;
                zuuluu['contextType'] = michal;
                report = _closure2_slot0;
                michal = null;
                if(!(michal != report)) { _fun00014_ip = 89; continue _fun00013 }
 59:
                michal = {'numberOfLines': null, 'expandable': false, 'seeMoreLabel': ''};
                tangon = _closure2_slot0;
                michal['numberOfLines'] = tangon;
                zuuluu['truncation'] = michal;
 89:
                return entity;
            }
        };
        entity['modifyRow'] = verify;
        entity['message'] = option;
        entity['rowGenerator'] = golfie;
        entity['messageSizeCacheRef'] = oscard;
        entity['maxHeight'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: RecipientAdd
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            report = argFoo;
            michal = report.message;
            var _closure2_slot0 = michal;
            offset = report.channel;
            verify = report.username;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 32;
            michal = tangon[michal];
            tangon = undefined;
            oscard = zuuluu.bind(tangon)(michal);
            zuuluu = oscard.useStateFromStores;
            golfie = _closure1_slot8;
            michal = new Array(1);
            michal[0] = golfie;
            entity = function() {
                zuuluu = _closure1_slot8;
                michal = zuuluu.getUser;
                entity = _closure2_slot0;
                tangon = entity.mentions;
                entity = 0;
                entity = tangon[entity];
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            backup = zuuluu.bind(oscard)(michal, entity);
            entity = null;
            michal = entity != backup;
            if(!michal) { _fun00016_ip = 219; continue _fun00015 }
 89:
            zuuluu = _closure1_slot15;
            oscard = _closure1_slot0;
            foxtra = _closure1_slot2;
            michal = 11;
            golfie = foxtra[michal];
            golfie = oscard.bind(tangon)(golfie);
            option = golfie.intl;
            golfie = option.format;
            michal = foxtra[michal];
            michal = oscard.bind(tangon)(michal);
            michal = michal.t;
            oscard = michal.MMN2Ji;
            michal = {};
            michal['username'] = verify;
            verify = _closure1_slot13;
            michal['usernameHook'] = verify;
            romeon = _closure1_slot1;
            yankee = 33;
            yankee = foxtra[yankee];
            foxtra = romeon.bind(tangon)(yankee);
            romeon = foxtra.getName;
            yankee = offset.guild_id;
            offset = offset.id;
            offset = romeon.bind(foxtra)(yankee, offset, backup);
            michal['otherUsername'] = offset;
            michal['otherUsernameHook'] = verify;
            michal = golfie.bind(option)(oscard, michal);
            entity = zuuluu.bind(tangon)(michal, report);
 219:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: RecipientRemove
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            report = argFoo;
            michal = report.message;
            var _closure2_slot0 = michal;
            romeon = report.channel;
            yankee = report.username;
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 32;
            zuuluu = tangon[zuuluu];
            tangon = undefined;
            golfie = oscard.bind(tangon)(zuuluu);
            oscard = golfie.useStateFromStores;
            option = _closure1_slot8;
            zuuluu = new Array(1);
            zuuluu[0] = option;
            entity = function() {
                zuuluu = _closure1_slot8;
                michal = zuuluu.getUser;
                entity = _closure2_slot0;
                tangon = entity.mentions;
                entity = 0;
                entity = tangon[entity];
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            sizing = oscard.bind(golfie)(zuuluu, entity);
            entity = null;
            zuuluu = entity != sizing;
            if(!zuuluu) { _fun00018_ip = 305; continue _fun00017 }
 89:
            zuuluu = _closure1_slot15;
            michal = michal.author;
            if(!(michal !== sizing)) { _fun00018_ip = 228; continue _fun00017 }
 106:
            oscard = _closure1_slot0;
            kiloes = _closure1_slot2;
            michal = 11;
            golfie = kiloes[michal];
            golfie = oscard.bind(tangon)(golfie);
            option = golfie.intl;
            golfie = option.format;
            michal = kiloes[michal];
            michal = oscard.bind(tangon)(michal);
            michal = michal.t;
            oscard = michal.L2FyVl;
            michal = {};
            michal['username'] = yankee;
            verify = _closure1_slot13;
            michal['usernameHook'] = verify;
            backup = _closure1_slot1;
            foxtra = 33;
            foxtra = kiloes[foxtra];
            kiloes = backup.bind(tangon)(foxtra);
            backup = kiloes.getName;
            foxtra = romeon.guild_id;
            romeon = romeon.id;
            romeon = backup.bind(kiloes)(foxtra, romeon, sizing);
            michal['otherUsername'] = romeon;
            michal['otherUsernameHook'] = verify;
            michal = golfie.bind(option)(oscard, michal);
            _fun00018_ip = 299; continue _fun00017;
 228:
            golfie = _closure1_slot0;
            romeon = _closure1_slot2;
            oscard = 11;
            option = romeon[oscard];
            option = golfie.bind(tangon)(option);
            verify = option.intl;
            option = verify.format;
            oscard = romeon[oscard];
            oscard = golfie.bind(tangon)(oscard);
            oscard = oscard.t;
            golfie = oscard.5v2xa2;
            oscard = {};
            oscard['username'] = yankee;
            offset = _closure1_slot13;
            oscard['usernameHook'] = offset;
            michal = option.bind(verify)(golfie, oscard);
 299:
            entity = zuuluu.bind(tangon)(michal, report);
 305:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: ChannelNameChange
        tangon = argFoo;
        option = tangon.message;
        offset = tangon.username;
        zuuluu = _closure1_slot15;
        report = _closure1_slot0;
        yankee = _closure1_slot2;
        entity = 11;
        oscard = yankee[entity];
        michal = undefined;
        oscard = report.bind(michal)(oscard);
        golfie = oscard.intl;
        oscard = golfie.format;
        entity = yankee[entity];
        entity = report.bind(michal)(entity);
        entity = entity.t;
        report = entity.oItgEx;
        entity = {};
        entity['username'] = offset;
        verify = _closure1_slot13;
        entity['usernameHook'] = verify;
        option = option.content;
        entity['channelName'] = option;
        entity = oscard.bind(golfie)(report, entity);
        entity = zuuluu.bind(michal)(entity, tangon);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: ChannelIconChange
        tangon = argFoo;
        zuuluu = _closure1_slot15;
        report = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 11;
        oscard = verify[entity];
        michal = undefined;
        oscard = report.bind(michal)(oscard);
        golfie = oscard.intl;
        oscard = golfie.format;
        entity = verify[entity];
        entity = report.bind(michal)(entity);
        entity = entity.t;
        report = entity.OEdU6e;
        entity = {};
        verify = tangon.username;
        entity['username'] = verify;
        option = _closure1_slot13;
        entity['usernameHook'] = option;
        entity = oscard.bind(golfie)(report, entity);
        entity = zuuluu.bind(michal)(entity, tangon);
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo) { // Original name: ChannelPinnedMessage
        tangon = argFoo;
        zuuluu = _closure1_slot15;
        report = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 11;
        oscard = verify[entity];
        michal = undefined;
        oscard = report.bind(michal)(oscard);
        golfie = oscard.intl;
        oscard = golfie.format;
        entity = verify[entity];
        entity = report.bind(michal)(entity);
        entity = entity.t;
        report = entity.vfkjq6;
        entity = {};
        verify = tangon.username;
        entity['username'] = verify;
        option = _closure1_slot13;
        entity['usernameHook'] = option;
        entity = oscard.bind(golfie)(report, entity);
        entity = zuuluu.bind(michal)(entity, tangon);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: UserJoined
        tangon = argFoo;
        verify = tangon.message;
        zuuluu = _closure1_slot15;
        report = _closure1_slot0;
        offset = _closure1_slot2;
        entity = 11;
        entity = offset[entity];
        michal = undefined;
        entity = report.bind(michal)(entity);
        golfie = entity.intl;
        oscard = golfie.format;
        report = _closure1_slot1;
        entity = 34;
        entity = offset[entity];
        offset = report.bind(michal)(entity);
        report = offset.getSystemMessageUserJoin;
        entity = verify.id;
        report = report.bind(offset)(entity);
        entity = {};
        verify = verify.nick;
        entity['username'] = verify;
        option = _closure1_slot13;
        entity['usernameHook'] = option;
        entity = oscard.bind(golfie)(report, entity);
        entity = zuuluu.bind(michal)(entity, tangon);
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo) { // Original name: ThreadCreated
        tangon = argFoo;
        verify = tangon.message;
        offset = tangon.username;
        zuuluu = _closure1_slot15;
        report = _closure1_slot0;
        yankee = _closure1_slot2;
        entity = 11;
        oscard = yankee[entity];
        michal = undefined;
        oscard = report.bind(michal)(oscard);
        golfie = oscard.intl;
        oscard = golfie.format;
        entity = yankee[entity];
        entity = report.bind(michal)(entity);
        entity = entity.t;
        report = entity.SGaUAQ;
        entity = {};
        entity['actorName'] = offset;
        option = _closure1_slot13;
        entity['actorHook'] = option;
        verify = verify.content;
        entity['threadName'] = verify;
        entity['threadOnClick'] = option;
        entity = oscard.bind(golfie)(report, entity);
        entity = zuuluu.bind(michal)(entity, tangon);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo) { // Original name: PremiumTrialShare
        tangon = argFoo;
        report = _closure1_slot0;
        verify = _closure1_slot2;
        michal = 35;
        michal = verify[michal];
        zuuluu = undefined;
        golfie = report.bind(zuuluu)(michal);
        oscard = golfie.getMessageAuthor;
        michal = tangon.message;
        option = oscard.bind(golfie)(michal);
        michal = _closure1_slot15;
        entity = 11;
        oscard = verify[entity];
        oscard = report.bind(zuuluu)(oscard);
        golfie = oscard.intl;
        oscard = golfie.formatToPlainString;
        entity = verify[entity];
        entity = report.bind(zuuluu)(entity);
        entity = entity.t;
        report = entity.lieTqa;
        entity = {};
        option = option.nick;
        entity['username'] = option;
        entity = oscard.bind(golfie)(report, entity);
        entity = michal.bind(zuuluu)(entity, tangon);
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo) { // Original name: HiddenMessage
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            golfie = argFoo;
            michal = golfie.message;
            tangon = _closure1_slot7;
            zuuluu = tangon.isBlocked;
            michal = michal.author;
            michal = michal.id;
            report = zuuluu.bind(tangon)(michal);
            tangon = _closure1_slot10;
            zuuluu = _closure1_slot5;
            michal = {};
            oscard = {'flexDirection': 'row', 'alignItems': 'center'};
            michal['style'] = oscard;
            oscard = _closure1_slot15;
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            option = 11;
            verify = romeon[option];
            entity = undefined;
            verify = yankee.bind(entity)(verify);
            offset = verify.intl;
            verify = offset.string;
            option = romeon[option];
            option = yankee.bind(entity)(option);
            option = option.t;
            if(report) { _fun00020_ip = 131; continue _fun00019 }
 118:
            report = option.G7p6v7;
            report = verify.bind(offset)(report);
            _fun00020_ip = 142; continue _fun00019;
 131:
            option = option.XAkOo6;
            report = verify.bind(offset)(option);
 142:
            report = oscard.bind(entity)(report, golfie);
            michal['children'] = report;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo, argBar) { // Original name: getMessageComponentType
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot0;
            entity = _closure1_slot2;
            oscard = 36;
            zuuluu = entity[oscard];
            entity = undefined;
            zuuluu = report.bind(entity)(zuuluu);
            zuuluu = zuuluu.MessageTypes;
            zuuluu = zuuluu.DEFAULT;
            if(!(zuuluu !== tangon)) { _fun00022_ip = 631; continue _fun00021 }
 47:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(entity)(zuuluu);
            zuuluu = zuuluu.MessageTypes;
            zuuluu = zuuluu.CHANGELOG;
            if(!(zuuluu !== tangon)) { _fun00022_ip = 631; continue _fun00021 }
 83:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(entity)(zuuluu);
            zuuluu = zuuluu.MessageTypes;
            zuuluu = zuuluu.REPLY;
            if(!(zuuluu !== tangon)) { _fun00022_ip = 631; continue _fun00021 }
 119:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(entity)(zuuluu);
            zuuluu = zuuluu.MessageTypes;
            zuuluu = zuuluu.CHAT_INPUT_COMMAND;
            if(!(zuuluu !== tangon)) { _fun00022_ip = 631; continue _fun00021 }
 155:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(entity)(zuuluu);
            zuuluu = zuuluu.MessageTypes;
            zuuluu = zuuluu.CONTEXT_MENU_COMMAND;
            if(!(zuuluu !== tangon)) { _fun00022_ip = 631; continue _fun00021 }
 191:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(entity)(zuuluu);
            zuuluu = zuuluu.MessageTypes;
            zuuluu = zuuluu.POLL_RESULT;
            if(!(zuuluu !== tangon)) { _fun00022_ip = 631; continue _fun00021 }
 227:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(entity)(zuuluu);
            zuuluu = zuuluu.MessageTypes;
            zuuluu = zuuluu.AUTO_MODERATION_ACTION;
            if(!(zuuluu !== tangon)) { _fun00022_ip = 631; continue _fun00021 }
 263:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(entity)(zuuluu);
            zuuluu = zuuluu.MessageTypes;
            zuuluu = zuuluu.RECIPIENT_ADD;
            if(!(zuuluu !== tangon)) { _fun00022_ip = 625; continue _fun00021 }
 299:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(entity)(zuuluu);
            zuuluu = zuuluu.MessageTypes;
            zuuluu = zuuluu.RECIPIENT_REMOVE;
            if(!(zuuluu !== tangon)) { _fun00022_ip = 619; continue _fun00021 }
 335:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(entity)(zuuluu);
            zuuluu = zuuluu.MessageTypes;
            zuuluu = zuuluu.CALL;
            if(!(zuuluu !== tangon)) { _fun00022_ip = 613; continue _fun00021 }
 371:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(entity)(zuuluu);
            zuuluu = zuuluu.MessageTypes;
            zuuluu = zuuluu.CHANNEL_NAME_CHANGE;
            if(!(zuuluu !== tangon)) { _fun00022_ip = 607; continue _fun00021 }
 407:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(entity)(zuuluu);
            zuuluu = zuuluu.MessageTypes;
            zuuluu = zuuluu.CHANNEL_ICON_CHANGE;
            if(!(zuuluu !== tangon)) { _fun00022_ip = 601; continue _fun00021 }
 443:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(entity)(zuuluu);
            zuuluu = zuuluu.MessageTypes;
            zuuluu = zuuluu.CHANNEL_PINNED_MESSAGE;
            if(!(zuuluu !== tangon)) { _fun00022_ip = 595; continue _fun00021 }
 476:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(entity)(zuuluu);
            zuuluu = zuuluu.MessageTypes;
            zuuluu = zuuluu.USER_JOIN;
            if(!(zuuluu !== tangon)) { _fun00022_ip = 589; continue _fun00021 }
 509:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(entity)(zuuluu);
            zuuluu = zuuluu.MessageTypes;
            zuuluu = zuuluu.THREAD_CREATED;
            if(!(zuuluu !== tangon)) { _fun00022_ip = 583; continue _fun00021 }
 542:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(entity)(zuuluu);
            zuuluu = zuuluu.MessageTypes;
            zuuluu = zuuluu.PREMIUM_REFERRAL;
            if(!(zuuluu !== tangon)) { _fun00022_ip = 577; continue _fun00021 }
 575:
            return entity;
 577:
            entity = _closure1_slot26;
            return entity;
 583:
            entity = _closure1_slot25;
            return entity;
 589:
            entity = _closure1_slot24;
            return entity;
 595:
            entity = _closure1_slot23;
            return entity;
 601:
            entity = _closure1_slot22;
            return entity;
 607:
            entity = _closure1_slot21;
            return entity;
 613:
            entity = _closure1_slot16;
            return entity;
 619:
            entity = _closure1_slot20;
            return entity;
 625:
            entity = _closure1_slot19;
            return entity;
 631:
            entity = _closure1_slot12;
            zuuluu = entity.STREAMLINED;
            entity = argBar;
            if(!(entity !== zuuluu)) { _fun00022_ip = 654; continue _fun00021 }
 648:
            entity = _closure1_slot18;
            _fun00022_ip = 658; continue _fun00021;
 654:
            entity = _closure1_slot17;
 658:
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = global;
    report = entity.Object;
    tangon = report.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(report)(zuuluu, entity, michal);
    report = 0;
    michal = offset[report];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    tangon = 1;
    option = offset[tangon];
    michal = argCor;
    yankee = michal.bind(entity)(option);
    var _closure1_slot4 = yankee;
    michal = 2;
    michal = offset[michal];
    michal = verify.bind(entity)(michal);
    michal = michal.View;
    var _closure1_slot5 = michal;
    michal = 3;
    michal = offset[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = offset[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = offset[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = offset[michal];
    michal = verify.bind(entity)(michal);
    michal = michal.MessageFlags;
    var _closure1_slot9 = michal;
    michal = 7;
    michal = offset[michal];
    michal = verify.bind(entity)(michal);
    golfie = michal.jsx;
    var _closure1_slot10 = golfie;
    michal = michal.jsxs;
    var _closure1_slot11 = michal;
    golfie = {};
    golfie['STREAMLINED'] = report;
    michal = 'STREAMLINED';
    golfie[report] = michal;
    golfie['FULL'] = tangon;
    michal = 'FULL';
    golfie[tangon] = michal;
    var _closure1_slot12 = golfie;
    tangon = yankee.memo;
    michal = function(argFoo) {
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            report = argFoo;
            romeon = report.message;
            var _closure2_slot0 = romeon;
            yankee = report.channel;
            var _closure2_slot1 = yankee;
            entity = null;
            tangon = Object.create(entity);
            michal = 0;
            tangon['message'] = michal;
            tangon['channel'] = michal;
            sizing = {};
            kiloes = report;
            backup = tangon;
            verify = copyDataProperties(sizing, kiloes, backup);
            var _closure2_slot2 = verify;
            report = undefined;
            var _closure2_slot3 = report;
            michal = romeon.author;
            oscard = michal.id;
            golfie = _closure1_slot6;
            tangon = golfie.getId;
            tangon = tangon.bind(golfie)();
            if(!(oscard !== tangon)) { _fun00024_ip = 138; continue _fun00023 }
 92:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            tangon = 33;
            tangon = golfie[tangon];
            option = oscard.bind(report)(tangon);
            golfie = option.getName;
            oscard = yankee.id;
            tangon = romeon.author;
            offset = golfie.bind(option)(entity, oscard, tangon);
            _fun00024_ip = 193; continue _fun00023;
 138:
            option = _closure1_slot0;
            foxtra = _closure1_slot2;
            tangon = 11;
            oscard = foxtra[tangon];
            oscard = option.bind(report)(oscard);
            golfie = oscard.intl;
            oscard = golfie.string;
            tangon = foxtra[tangon];
            tangon = option.bind(report)(tangon);
            tangon = tangon.t;
            tangon = tangon.LuZzxs;
            offset = oscard.bind(golfie)(tangon);
 193:
            _closure2_slot3 = offset;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 32;
            tangon = golfie[tangon];
            foxtra = oscard.bind(report)(tangon);
            option = foxtra.useStateFromStores;
            tangon = _closure1_slot7;
            golfie = new Array(1);
            golfie[0] = tangon;
            tangon = romeon.author;
            tangon = tangon.id;
            oscard = new Array(1);
            oscard[0] = tangon;
            tangon = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.isBlockedOrIgnored;
                entity = _closure2_slot0;
                entity = entity.author;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = option.bind(foxtra)(golfie, tangon, oscard);
            golfie = romeon.type;
            if(tangon) { _fun00024_ip = 295; continue _fun00023 }
 273:
            oscard = _closure1_slot28;
            tangon = _closure1_slot12;
            tangon = tangon.STREAMLINED;
            tangon = oscard.bind(report)(golfie, tangon);
            _fun00024_ip = 299; continue _fun00023;
 295:
            tangon = _closure1_slot27;
 299:
            option = _closure1_slot4;
            golfie = option.useMemo;
            oscard = new Array(4);
            oscard[0] = romeon;
            oscard[1] = yankee;
            oscard[2] = offset;
            oscard[3] = verify;
            zuuluu = function() {
                entity = {};
                zuuluu = _closure2_slot0;
                entity['message'] = zuuluu;
                zuuluu = _closure2_slot1;
                entity['channel'] = zuuluu;
                zuuluu = _closure2_slot3;
                entity['username'] = zuuluu;
                tangon = _closure2_slot2;
                report = entity;
                michal = copyDataProperties(report, tangon);
                return entity;
            };
            oscard = golfie.bind(option)(zuuluu, oscard);
            zuuluu = entity == tangon;
            entity = null;
            if(zuuluu) { _fun00024_ip = 383; continue _fun00023 }
 348:
            zuuluu = _closure1_slot10;
            michal = {};
            sizing = michal;
            kiloes = oscard;
            oscard = copyDataProperties(sizing, kiloes);
            golfie = 'preview';
            oscard = 'context';
            michal[oscard] = golfie;
            entity = zuuluu.bind(report)(tangon, michal);
 383:
            return entity;
        }
    };
    report = tangon.bind(yankee)(michal);
    tangon = yankee.memo;
    michal = function(argFoo) {
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            report = argFoo;
            foxtra = report.guildId;
            yankee = report.channel;
            var _closure2_slot0 = yankee;
            romeon = report.message;
            var _closure2_slot1 = romeon;
            tangon = {'guildId': 0, 'channel': 0, 'message': 0};
            entity = null;
            output = tangon;
            sizing = null;
            michal = silentSetPrototypeOf(output, sizing);
            output = {};
            sizing = report;
            kiloes = tangon;
            verify = copyDataProperties(output, sizing, kiloes);
            var _closure2_slot2 = verify;
            report = undefined;
            var _closure2_slot3 = report;
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            tangon = 32;
            tangon = option[tangon];
            backup = oscard.bind(report)(tangon);
            offset = backup.useStateFromStores;
            tangon = _closure1_slot7;
            golfie = new Array(1);
            golfie[0] = tangon;
            tangon = romeon.author;
            tangon = tangon.id;
            oscard = new Array(1);
            oscard[0] = tangon;
            tangon = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.isBlockedOrIgnored;
                entity = _closure2_slot1;
                entity = entity.author;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = offset.bind(backup)(golfie, tangon, oscard);
            golfie = _closure1_slot1;
            oscard = 33;
            oscard = option[oscard];
            offset = golfie.bind(report)(oscard);
            option = offset.useName;
            golfie = yankee.id;
            oscard = romeon.author;
            option = option.bind(offset)(foxtra, golfie, oscard);
            oscard = romeon.author;
            golfie = oscard.id;
            offset = _closure1_slot6;
            oscard = offset.getId;
            oscard = oscard.bind(offset)();
            offset = option;
            if(!(golfie === oscard)) { _fun00026_ip = 269; continue _fun00025 }
 214:
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            oscard = 11;
            golfie = backup[oscard];
            golfie = foxtra.bind(report)(golfie);
            option = golfie.intl;
            golfie = option.string;
            oscard = backup[oscard];
            oscard = foxtra.bind(report)(oscard);
            oscard = oscard.t;
            oscard = oscard.LuZzxs;
            offset = golfie.bind(option)(oscard);
 269:
            _closure2_slot3 = offset;
            golfie = romeon.type;
            if(tangon) { _fun00026_ip = 303; continue _fun00025 }
 281:
            oscard = _closure1_slot28;
            tangon = _closure1_slot12;
            tangon = tangon.STREAMLINED;
            tangon = oscard.bind(report)(golfie, tangon);
            _fun00026_ip = 307; continue _fun00025;
 303:
            tangon = _closure1_slot27;
 307:
            option = _closure1_slot4;
            golfie = option.useMemo;
            oscard = new Array(4);
            oscard[0] = romeon;
            oscard[1] = yankee;
            oscard[2] = offset;
            oscard[3] = verify;
            zuuluu = function() {
                entity = {};
                zuuluu = _closure2_slot1;
                entity['message'] = zuuluu;
                zuuluu = _closure2_slot0;
                entity['channel'] = zuuluu;
                zuuluu = _closure2_slot3;
                entity['username'] = zuuluu;
                tangon = _closure2_slot2;
                report = entity;
                michal = copyDataProperties(report, tangon);
                return entity;
            };
            oscard = golfie.bind(option)(zuuluu, oscard);
            zuuluu = entity == tangon;
            entity = null;
            if(zuuluu) { _fun00026_ip = 391; continue _fun00025 }
 356:
            zuuluu = _closure1_slot10;
            michal = {};
            output = michal;
            sizing = oscard;
            oscard = copyDataProperties(output, sizing);
            golfie = 'preview';
            oscard = 'context';
            michal[oscard] = golfie;
            entity = zuuluu.bind(report)(tangon, michal);
 391:
            return entity;
        }
    };
    tangon = tangon.bind(yankee)(michal);
    option = yankee.memo;
    michal = function(argFoo) {
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            report = argFoo;
            option = report.message;
            var _closure2_slot0 = option;
            golfie = report.channel;
            entity = null;
            tangon = Object.create(entity);
            michal = 0;
            tangon['message'] = michal;
            tangon['channel'] = michal;
            kiloes = {};
            backup = report;
            foxtra = tangon;
            oscard = copyDataProperties(kiloes, backup, foxtra);
            verify = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 32;
            tangon = report[tangon];
            report = undefined;
            yankee = verify.bind(report)(tangon);
            offset = yankee.useStateFromStores;
            tangon = _closure1_slot7;
            verify = new Array(1);
            verify[0] = tangon;
            tangon = option.author;
            romeon = tangon.id;
            tangon = new Array(1);
            tangon[0] = romeon;
            zuuluu = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.isBlockedOrIgnored;
                entity = _closure2_slot0;
                entity = entity.author;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = offset.bind(yankee)(verify, zuuluu, tangon);
            verify = option.type;
            if(zuuluu) { _fun00028_ip = 149; continue _fun00027 }
 127:
            tangon = _closure1_slot28;
            zuuluu = _closure1_slot12;
            zuuluu = zuuluu.FULL;
            tangon = tangon.bind(report)(verify, zuuluu);
            _fun00028_ip = 153; continue _fun00027;
 149:
            tangon = _closure1_slot27;
 153:
            zuuluu = entity == tangon;
            entity = null;
            if(zuuluu) { _fun00028_ip = 217; continue _fun00027 }
 162:
            zuuluu = _closure1_slot17;
            if(!(tangon === zuuluu)) { _fun00028_ip = 174; continue _fun00027 }
 170:
            tangon = _closure1_slot18;
 174:
            zuuluu = _closure1_slot10;
            michal = {};
            michal['message'] = option;
            michal['channel'] = golfie;
            kiloes = michal;
            backup = oscard;
            oscard = copyDataProperties(kiloes, backup);
            golfie = 'search';
            oscard = 'context';
            michal[oscard] = golfie;
            entity = zuuluu.bind(report)(tangon, michal);
 217:
            return entity;
        }
    };
    michal = option.bind(yankee)(michal);
    option = 37;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/main_tabs_v2/native/shared_components/ChannelRowPreview.tsx';
    option = verify.bind(offset)(option);
    zuuluu['DefaultMessageComponentStyle'] = golfie;
    golfie = function(argFoo) { // Original name: ChannelRowPreview
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            tangon = argFoo;
            option = tangon.message;
            golfie = tangon.channel;
            entity = null;
            zuuluu = Object.create(entity);
            michal = 0;
            zuuluu['message'] = michal;
            zuuluu['channel'] = michal;
            romeon = {};
            yankee = tangon;
            offset = zuuluu;
            oscard = copyDataProperties(romeon, yankee, offset);
            verify = _closure1_slot28;
            tangon = option.type;
            zuuluu = _closure1_slot12;
            zuuluu = zuuluu.FULL;
            report = undefined;
            tangon = verify.bind(report)(tangon, zuuluu);
            zuuluu = entity == tangon;
            if(zuuluu) { _fun00030_ip = 107; continue _fun00029 }
 77:
            zuuluu = _closure1_slot10;
            michal = {};
            michal['message'] = option;
            michal['channel'] = golfie;
            romeon = michal;
            yankee = oscard;
            oscard = copyDataProperties(romeon, yankee);
            entity = zuuluu.bind(report)(tangon, michal);
 107:
            return entity;
        }
    };
    zuuluu['ChannelRowPreview'] = golfie;
    oscard = function(argFoo) { // Original name: NotificationChannelRowPreview
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            tangon = argFoo;
            option = tangon.message;
            golfie = tangon.channel;
            verify = tangon.componentStyle;
            report = undefined;
            if(!(verify === report)) { _fun00032_ip = 38; continue _fun00031 }
 25:
            entity = _closure1_slot12;
            verify = entity.FULL;
 38:
            zuuluu = {'message': 0, 'channel': 0, 'componentStyle': 0};
            entity = null;
            romeon = zuuluu;
            yankee = null;
            michal = silentSetPrototypeOf(romeon, yankee);
            romeon = {};
            yankee = tangon;
            offset = zuuluu;
            oscard = copyDataProperties(romeon, yankee, offset);
            tangon = _closure1_slot28;
            zuuluu = option.type;
            tangon = tangon.bind(report)(zuuluu, verify);
            zuuluu = entity == tangon;
            if(zuuluu) { _fun00032_ip = 130; continue _fun00031 }
 100:
            zuuluu = _closure1_slot10;
            michal = {};
            michal['message'] = option;
            michal['channel'] = golfie;
            romeon = michal;
            yankee = oscard;
            oscard = copyDataProperties(romeon, yankee);
            entity = zuuluu.bind(report)(tangon, michal);
 130:
            return entity;
        }
    };
    zuuluu['NotificationChannelRowPreview'] = oscard;
    zuuluu['PrivateChannelRowPreview'] = report;
    zuuluu['GuildChannelRowPreview'] = tangon;
    zuuluu['SearchChannelRowPreview'] = michal;
    return entity;
})();