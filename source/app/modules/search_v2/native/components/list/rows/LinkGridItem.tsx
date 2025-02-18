// app/modules/search_v2/native/components/list/rows/LinkGridItem.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: getLinkNodeAtIndex
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            report = argBar;
            tangon = argBaz;
            var _closure2_slot0 = report;
            var _closure2_slot1 = tangon;
            zuuluu = global;
            oscard = zuuluu.Array;
            zuuluu = oscard.isArray;
            zuuluu = zuuluu.bind(oscard)(entity);
            if(zuuluu) { _fun00002_ip = 140; continue _fun00001 }
 40:
            oscard = entity.type;
            zuuluu = 'link';
            if(!(zuuluu !== oscard)) { _fun00002_ip = 100; continue _fun00001 }
 53:
            oscard = entity.type;
            zuuluu = 'channelMention';
            if(!(zuuluu !== oscard)) { _fun00002_ip = 100; continue _fun00001 }
 66:
            oscard = entity.content;
            zuuluu = null;
            if(!(zuuluu != oscard)) { _fun00002_ip = 157; continue _fun00001 }
 77:
            golfie = _closure1_slot13;
            oscard = entity.content;
            zuuluu = undefined;
            zuuluu = golfie.bind(zuuluu)(oscard, report, tangon);
            _fun00002_ip = 157; continue _fun00001;
 100:
            zuuluu = 0;
            if(!(zuuluu !== report)) { _fun00002_ip = 131; continue _fun00001 }
 106:
            oscard = _closure1_slot13;
            zuuluu = 1;
            report = report - zuuluu;
            zuuluu = undefined;
            zuuluu = oscard.bind(zuuluu)(entity, report, tangon);
            _fun00002_ip = 157; continue _fun00001;
 131:
            zuuluu = undefined;
            zuuluu = tangon.bind(zuuluu)(entity);
            _fun00002_ip = 157; continue _fun00001;
 140:
            zuuluu = entity.forEach;
            michal = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot13;
                tangon = _closure2_slot0;
                zuuluu = _closure2_slot1;
                michal = undefined;
                michal = report.bind(michal)(entity, tangon, zuuluu);
                return entity;
            };
            michal = zuuluu.bind(entity)(michal);
 157:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: LinkParsedGridItem
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            backup = michal.author;
            var _closure2_slot0 = backup;
            golfie = michal.mediaIndex;
            var _closure2_slot1 = golfie;
            offset = michal.channelId;
            var _closure2_slot2 = offset;
            verify = michal.messageId;
            var _closure2_slot3 = verify;
            zuuluu = michal.onPressSearchLink;
            var _closure2_slot4 = zuuluu;
            option = michal.onPress;
            var _closure2_slot5 = option;
            vacuum = michal.imageStyle;
            oscard = michal.containerStyle;
            michal = _closure1_slot12;
            tangon = undefined;
            ctrled = michal.bind(tangon)();
            var _closure2_slot6 = ctrled;
            report = _closure1_slot0;
            foxtra = _closure1_slot2;
            michal = 9;
            romeon = foxtra[michal];
            output = report.bind(tangon)(romeon);
            sizing = output.useStateFromStores;
            romeon = _closure1_slot8;
            kiloes = new Array(1);
            kiloes[0] = romeon;
            romeon = function() {
                zuuluu = _closure1_slot8;
                michal = zuuluu.getMessage;
                entity = _closure2_slot3;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            result = sizing.bind(output)(kiloes, romeon);
            var _closure2_slot7 = result;
            michal = foxtra[michal];
            sizing = report.bind(tangon)(michal);
            kiloes = sizing.useStateFromStores;
            michal = _closure1_slot7;
            romeon = new Array(1);
            romeon[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getChannel;
                entity = _closure2_slot2;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            romeon = kiloes.bind(sizing)(romeon, michal);
            var _closure2_slot8 = romeon;
            michal = 10;
            michal = foxtra[michal];
            report = report.bind(tangon)(michal);
            michal = report.useShouldFilterKeywords;
            report = michal.bind(report)();
            var _closure2_slot9 = report;
            kiloes = _closure1_slot4;
            foxtra = kiloes.useState;
            michal = null;
            sizing = foxtra.bind(kiloes)(michal);
            kiloes = _closure1_slot3;
            foxtra = 2;
            sizing = kiloes.bind(tangon)(sizing, foxtra);
            foxtra = 0;
            kiloes = sizing[foxtra];
            var _closure2_slot10 = kiloes;
            foxtra = 1;
            foxtra = sizing[foxtra];
            var _closure2_slot11 = foxtra;
            output = _closure1_slot4;
            sizing = output.useCallback;
            foxtra = new Array(1);
            foxtra[0] = golfie;
            golfie = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot13;
                tangon = _closure2_slot1;
                zuuluu = _closure2_slot11;
                michal = undefined;
                michal = report.bind(michal)(entity, tangon, zuuluu);
                return entity;
            };
            output = sizing.bind(output)(golfie, foxtra);
            var _closure2_slot12 = output;
            sizing = _closure1_slot4;
            foxtra = sizing.useMemo;
            golfie = new Array(3);
            golfie[0] = result;
            golfie[1] = output;
            golfie[2] = report;
            report = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure2_slot7;
                    entity = null;
                    if(!(entity != michal)) { _fun00006_ip = 173; continue _fun00005 }
 16:
                    oscard = _closure1_slot0;
                    verify = _closure1_slot2;
                    entity = 12;
                    entity = verify[entity];
                    tangon = undefined;
                    option = oscard.bind(tangon)(entity);
                    golfie = option.renderMessageMarkupWithParser;
                    entity = 13;
                    entity = verify[entity];
                    entity = oscard.bind(tangon)(entity);
                    zuuluu = entity.NativeSearchResultLinkPreviewParser;
                    michal = _closure2_slot7;
                    entity = {};
                    yankee = _closure2_slot12;
                    entity['postProcessor'] = yankee;
                    offset = _closure2_slot9;
                    entity['shouldFilterKeywords'] = offset;
                    entity = golfie.bind(option)(zuuluu, michal, entity);
                    option = entity.content;
                    zuuluu = _closure1_slot10;
                    michal = _closure1_slot5;
                    entity = {};
                    golfie = 'none';
                    entity['pointerEvents'] = golfie;
                    golfie = _closure1_slot10;
                    report = 14;
                    report = verify[report];
                    report = oscard.bind(tangon)(report);
                    oscard = report.Text;
                    report = {'variant': 'text-md/semibold', 'color': 'header-primary', 'lineClamp': 1};
                    report['children'] = option;
                    report = golfie.bind(tangon)(oscard, report);
                    entity['children'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
 173:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    entity = 11;
                    michal = oscard[entity];
                    tangon = undefined;
                    michal = report.bind(tangon)(michal);
                    zuuluu = michal.intl;
                    michal = zuuluu.string;
                    entity = oscard[entity];
                    entity = report.bind(tangon)(entity);
                    entity = entity.t;
                    entity = entity.mE3KJC;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            result = foxtra.bind(sizing)(report, golfie);
            sizing = _closure1_slot4;
            foxtra = sizing.useMemo;
            golfie = new Array(2);
            golfie[0] = kiloes;
            report = ctrled.tapToSee;
            golfie[1] = report;
            report = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot10;
                    zuuluu = null;
                    if(!(zuuluu != michal)) { _fun00008_ip = 65; continue _fun00007 }
 13:
                    michal = _closure2_slot10;
                    tangon = michal.type;
                    michal = 'link';
                    if(!(michal === tangon)) { _fun00008_ip = 65; continue _fun00007 }
 30:
                    michal = _closure2_slot10;
                    michal = michal.target;
                    if(!(zuuluu != michal)) { _fun00008_ip = 65; continue _fun00007 }
 44:
                    michal = _closure2_slot10;
                    tangon = michal.target;
                    michal = '';
                    if(!(michal === tangon)) { _fun00008_ip = 297; continue _fun00007 }
 65:
                    michal = _closure2_slot10;
                    if(!(zuuluu != michal)) { _fun00008_ip = 108; continue _fun00007 }
 73:
                    michal = _closure2_slot10;
                    michal = zuuluu == michal;
                    report = undefined;
                    zuuluu = undefined;
                    if(michal) { _fun00008_ip = 97; continue _fun00007 }
 88:
                    michal = _closure2_slot10;
                    zuuluu = michal.type;
 97:
                    michal = 'channelMention';
                    if(!(michal !== zuuluu)) { _fun00008_ip = 229; continue _fun00007 }
 108:
                    oscard = _closure1_slot10;
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    michal = 14;
                    michal = yankee[michal];
                    tangon = undefined;
                    michal = offset.bind(tangon)(michal);
                    zuuluu = michal.Text;
                    michal = {'variant': 'text-xs/normal', 'color': 'interactive-normal', 'lineClamp': 1};
                    golfie = _closure2_slot6;
                    golfie = golfie.tapToSee;
                    michal['style'] = golfie;
                    golfie = 11;
                    option = yankee[golfie];
                    option = offset.bind(tangon)(option);
                    verify = option.intl;
                    option = verify.string;
                    golfie = yankee[golfie];
                    golfie = offset.bind(tangon)(golfie);
                    golfie = golfie.t;
                    golfie = golfie.q2IIoK;
                    golfie = option.bind(verify)(golfie);
                    michal['children'] = golfie;
                    michal = oscard.bind(tangon)(zuuluu, michal);
                    return michal;
 229:
                    michal = _closure2_slot10;
                    oscard = michal.originalLink;
                    tangon = _closure1_slot10;
                    zuuluu = _closure1_slot0;
                    golfie = _closure1_slot2;
                    michal = 14;
                    michal = golfie[michal];
                    michal = zuuluu.bind(report)(michal);
                    zuuluu = michal.Text;
                    michal = {'variant': 'text-xs/normal', 'color': 'text-link', 'lineClamp': 1};
                    michal['children'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return michal;
 297:
                    entity = _closure2_slot10;
                    report = entity.target;
                    tangon = _closure1_slot10;
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 14;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    entity = michal.bind(zuuluu)(entity);
                    michal = entity.Text;
                    entity = {'variant': 'text-xs/normal', 'color': 'text-link', 'lineClamp': 1};
                    entity['children'] = report;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                }
            };
            output = foxtra.bind(sizing)(report, golfie);
            sizing = _closure1_slot4;
            foxtra = sizing.useMemo;
            golfie = michal == kiloes;
            report = undefined;
            if(golfie) { _fun00004_ip = 400; continue _fun00003 }
 394:
            report = kiloes.target;
 400:
            golfie = new Array(2);
            golfie[0] = report;
            echoed = michal == kiloes;
            report = undefined;
            if(echoed) { _fun00004_ip = 422; continue _fun00003 }
 417:
            report = kiloes.type;
 422:
            golfie[1] = report;
            report = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure2_slot10;
                    entity = null;
                    entity = entity == zuuluu;
                    tangon = undefined;
                    zuuluu = undefined;
                    if(entity) { _fun00010_ip = 29; continue _fun00009 }
 20:
                    entity = _closure2_slot10;
                    zuuluu = entity.type;
 29:
                    entity = 'channelMention';
                    if(!(entity !== zuuluu)) { _fun00010_ip = 165; continue _fun00009 }
 40:
                    entity = 'link';
                    if(!(entity !== zuuluu)) { _fun00010_ip = 99; continue _fun00009 }
 48:
                    report = _closure1_slot10;
                    zuuluu = _closure1_slot0;
                    oscard = _closure1_slot2;
                    entity = 17;
                    entity = oscard[entity];
                    entity = zuuluu.bind(tangon)(entity);
                    zuuluu = entity.LinkIcon;
                    entity = {};
                    oscard = 'lg';
                    entity['size'] = oscard;
                    entity = report.bind(tangon)(zuuluu, entity);
                    return entity;
 99:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 16;
                    zuuluu = oscard[zuuluu];
                    report = report.bind(tangon)(zuuluu);
                    zuuluu = report.getUrlIcon;
                    michal = _closure2_slot10;
                    michal = michal.target;
                    zuuluu = zuuluu.bind(report)(michal);
                    michal = _closure1_slot10;
                    entity = {};
                    report = 'lg';
                    entity['size'] = report;
                    entity = michal.bind(tangon)(zuuluu, entity);
                    return entity;
 165:
                    zuuluu = _closure1_slot10;
                    michal = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 15;
                    entity = report[entity];
                    entity = michal.bind(tangon)(entity);
                    michal = entity.ChatIcon;
                    entity = {};
                    report = 'lg';
                    entity['size'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                }
            };
            source = foxtra.bind(sizing)(report, golfie);
            foxtra = _closure1_slot4;
            golfie = foxtra.useMemo;
            report = new Array(5);
            report[0] = offset;
            report[1] = verify;
            report[2] = kiloes;
            report[3] = option;
            report[4] = zuuluu;
            zuuluu = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tangon = _closure2_slot10;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00012_ip = 69; continue _fun00011 }
 15:
                    zuuluu = _closure2_slot10;
                    tangon = zuuluu.type;
                    zuuluu = 'link';
                    if(!(zuuluu !== tangon)) { _fun00012_ip = 60; continue _fun00011 }
 32:
                    entity = _closure2_slot10;
                    tangon = entity.type;
                    zuuluu = 'channelMention';
                    entity = undefined;
                    if(!(zuuluu === tangon)) { _fun00012_ip = 58; continue _fun00011 }
 51:
                    entity = function() {
                        report = _closure2_slot4;
                        michal = _closure2_slot10;
                        tangon = michal.originalLink;
                        zuuluu = _closure2_slot2;
                        michal = undefined;
                        entity = true;
                        entity = report.bind(michal)(tangon, entity, zuuluu);
                        return entity;
                    };
 58:
                    _fun00012_ip = 67; continue _fun00011;
 60:
                    entity = function() {
                        report = _closure2_slot4;
                        golfie = _closure2_slot10;
                        tangon = golfie.target;
                        oscard = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        michal = 18;
                        michal = zuuluu[michal];
                        zuuluu = undefined;
                        oscard = oscard.bind(zuuluu)(michal);
                        michal = oscard.isLinkTrusted;
                        michal = michal.bind(oscard)(golfie);
                        entity = _closure2_slot2;
                        entity = report.bind(zuuluu)(tangon, michal, entity);
                        return entity;
                    };
 67:
                    _fun00012_ip = 76; continue _fun00011;
 69:
                    entity = function() {
                        tangon = _closure2_slot5;
                        zuuluu = _closure2_slot2;
                        michal = _closure2_slot3;
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    };
 76:
                    return entity;
                }
            };
            report = golfie.bind(foxtra)(zuuluu, report);
            foxtra = _closure1_slot4;
            golfie = foxtra.useMemo;
            zuuluu = new Array(2);
            zuuluu[0] = backup;
            kiloes = michal == romeon;
            michal = undefined;
            if(kiloes) { _fun00004_ip = 516; continue _fun00003 }
 511:
            michal = romeon.guild_id;
 516:
            zuuluu[1] = michal;
            michal = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    michal = zuuluu.getAvatarSource;
                    report = _closure2_slot8;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00014_ip = 37; continue _fun00013 }
 28:
                    tangon = _closure2_slot8;
                    entity = tangon.guild_id;
 37:
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            foxtra = golfie.bind(foxtra)(michal, zuuluu);
            golfie = _closure1_slot4;
            zuuluu = golfie.useCallback;
            michal = new Array(3);
            michal[0] = offset;
            michal[1] = verify;
            michal[2] = option;
            entity = function() {
                tangon = _closure2_slot5;
                zuuluu = _closure2_slot2;
                michal = _closure2_slot3;
                entity = undefined;
                michal = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            sizing = zuuluu.bind(golfie)(entity, michal);
            zuuluu = _closure1_slot11;
            offset = _closure1_slot0;
            kiloes = _closure1_slot2;
            verify = 19;
            entity = kiloes[verify];
            entity = offset.bind(tangon)(entity);
            michal = entity.SearchListCardContainer;
            entity = {};
            entity['containerStyle'] = oscard;
            entity['onPress'] = report;
            golfie = _closure1_slot10;
            report = kiloes[verify];
            report = offset.bind(tangon)(report);
            oscard = report.SearchListCardThumbnail;
            report = {};
            update = _closure1_slot10;
            echoed = _closure1_slot5;
            option = {};
            sequen = ctrled.iconContainer;
            ctrled = new Array(2);
            ctrled[0] = sequen;
            ctrled[1] = vacuum;
            option['style'] = ctrled;
            option['children'] = source;
            option = update.bind(tangon)(echoed, option);
            report['thumbnail'] = option;
            oscard = golfie.bind(tangon)(oscard, report);
            report = new Array(3);
            report[0] = oscard;
            option = _closure1_slot10;
            oscard = kiloes[verify];
            oscard = offset.bind(tangon)(oscard);
            golfie = oscard.SearchListCardContent;
            oscard = {};
            oscard['label'] = result;
            oscard['subLabel'] = output;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            option = _closure1_slot10;
            oscard = 20;
            oscard = kiloes[oscard];
            oscard = offset.bind(tangon)(oscard);
            golfie = oscard.PressableHighlight;
            oscard = {};
            oscard['onPress'] = sizing;
            yankee = _closure1_slot10;
            verify = kiloes[verify];
            verify = offset.bind(tangon)(verify);
            offset = verify.SearchListCardFooter;
            verify = {};
            verify['author'] = backup;
            verify['avatarSource'] = foxtra;
            verify['channel'] = romeon;
            verify = yankee.bind(tangon)(offset, verify);
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: LinkEmbedGridItem
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zuuluu = argFoo;
            ctrled = zuuluu.embed;
            var _closure2_slot0 = ctrled;
            backup = zuuluu.author;
            var _closure2_slot1 = backup;
            sizing = zuuluu.channelId;
            var _closure2_slot2 = sizing;
            kiloes = zuuluu.messageId;
            var _closure2_slot3 = kiloes;
            michal = zuuluu.onPressSearchLink;
            var _closure2_slot4 = michal;
            golfie = zuuluu.onPress;
            var _closure2_slot5 = golfie;
            update = zuuluu.imageStyle;
            var _closure2_slot6 = update;
            option = zuuluu.containerStyle;
            tangon = undefined;
            var _closure2_slot12 = tangon;
            var _closure2_slot13 = tangon;
            zuuluu = _closure1_slot12;
            zuuluu = zuuluu.bind(tangon)();
            var _closure2_slot7 = zuuluu;
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            report = 9;
            offset = verify[report];
            output = oscard.bind(tangon)(offset);
            foxtra = output.useStateFromStores;
            offset = _closure1_slot8;
            romeon = new Array(1);
            romeon[0] = offset;
            offset = function() {
                zuuluu = _closure1_slot8;
                michal = zuuluu.getMessage;
                entity = _closure2_slot3;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            offset = foxtra.bind(output)(romeon, offset);
            var _closure2_slot8 = offset;
            report = verify[report];
            romeon = oscard.bind(tangon)(report);
            verify = romeon.useStateFromStores;
            report = _closure1_slot7;
            oscard = new Array(1);
            oscard[0] = report;
            report = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getChannel;
                entity = _closure2_slot2;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            romeon = verify.bind(romeon)(oscard, report);
            var _closure2_slot9 = romeon;
            report = _closure1_slot6;
            report = report.bind(tangon)();
            output = report.scale;
            var _closure2_slot10 = output;
            result = ctrled.url;
            var _closure2_slot11 = result;
            verify = ctrled.rawTitle;
            echoed = null;
            if(!(echoed == verify)) { _fun00016_ip = 262; continue _fun00015 }
 239:
            oscard = ctrled.author;
            foxtra = echoed == oscard;
            report = undefined;
            if(foxtra) { _fun00016_ip = 259; continue _fun00015 }
 254:
            report = oscard.name;
 259:
            verify = report;
 262:
            if(!(echoed == verify)) { _fun00016_ip = 271; continue _fun00015 }
 266:
            verify = ctrled.url;
 271:
            _closure2_slot12 = verify;
            source = _closure1_slot4;
            foxtra = source.useMemo;
            oscard = new Array(1);
            oscard[0] = offset;
            report = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = _closure2_slot8;
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00018_ip = 56; continue _fun00017 }
 16:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    zuuluu = 12;
                    zuuluu = tangon[zuuluu];
                    tangon = undefined;
                    zuuluu = report.bind(tangon)(zuuluu);
                    michal = _closure2_slot8;
                    michal = zuuluu.bind(tangon)(michal);
                    entity = michal.hasSpoilerEmbeds;
 56:
                    return entity;
                }
            };
            source = foxtra.bind(source)(report, oscard);
            _closure2_slot13 = source;
            foxtra = _closure1_slot4;
            oscard = foxtra.useMemo;
            vacuum = backup.id;
            report = new Array(8);
            report[0] = vacuum;
            report[1] = sizing;
            report[2] = ctrled;
            report[3] = source;
            report[4] = update;
            report[5] = kiloes;
            report[6] = output;
            zuuluu = zuuluu.iconContainer;
            report[7] = zuuluu;
            zuuluu = function() {
                tangon = _closure1_slot10;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 21;
                entity = zuuluu[entity];
                zuuluu = undefined;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.SearchEmbedMediaImage;
                entity = {};
                golfie = _closure2_slot3;
                entity['messageId'] = golfie;
                golfie = _closure2_slot2;
                entity['channelId'] = golfie;
                golfie = _closure2_slot1;
                golfie = golfie.id;
                entity['authorId'] = golfie;
                golfie = _closure2_slot0;
                entity['embed'] = golfie;
                golfie = _closure2_slot6;
                entity['containerStyle'] = golfie;
                option = function() { // Original name: renderFallback
                    tangon = _closure1_slot10;
                    zuuluu = _closure1_slot5;
                    michal = {};
                    report = _closure2_slot7;
                    golfie = report.iconContainer;
                    report = new Array(2);
                    report[0] = golfie;
                    oscard = _closure2_slot6;
                    report[1] = oscard;
                    michal['style'] = report;
                    golfie = _closure1_slot10;
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 17;
                    report = report[entity];
                    entity = undefined;
                    report = oscard.bind(entity)(report);
                    oscard = report.LinkIcon;
                    report = {};
                    option = 'md';
                    report['size'] = option;
                    report = golfie.bind(entity)(oscard, report);
                    michal['children'] = report;
                    entity = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                };
                entity['renderFallback'] = option;
                option = _closure2_slot10;
                entity['scale'] = option;
                verify = golfie.height;
                option = _closure1_slot9;
                option = verify + option;
                entity['imageHeight'] = option;
                golfie = golfie.width;
                oscard = _closure1_slot9;
                oscard = golfie + oscard;
                entity['imageWidth'] = oscard;
                report = _closure2_slot13;
                entity['hasSpoilerEmbeds'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            update = oscard.bind(foxtra)(zuuluu, report);
            foxtra = _closure1_slot4;
            oscard = foxtra.useMemo;
            report = new Array(2);
            report[0] = backup;
            output = echoed == romeon;
            zuuluu = undefined;
            if(output) { _fun00016_ip = 409; continue _fun00015 }
 404:
            zuuluu = romeon.guild_id;
 409:
            report[1] = zuuluu;
            zuuluu = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.getAvatarSource;
                    report = _closure2_slot9;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00020_ip = 37; continue _fun00019 }
 28:
                    tangon = _closure2_slot9;
                    entity = tangon.guild_id;
 37:
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            foxtra = oscard.bind(foxtra)(zuuluu, report);
            oscard = _closure1_slot4;
            report = oscard.useCallback;
            zuuluu = new Array(4);
            zuuluu[0] = result;
            zuuluu[1] = michal;
            zuuluu[2] = verify;
            zuuluu[3] = sizing;
            michal = function() {
                tangon = _closure1_slot1;
                golfie = _closure1_slot2;
                entity = 22;
                michal = golfie[entity];
                entity = undefined;
                option = tangon.bind(entity)(michal);
                report = _closure2_slot11;
                tangon = null;
                oscard = tangon != report;
                tangon = '[LinkGridItem] Embed url cannot be null';
                tangon = option.bind(entity)(oscard, tangon);
                tangon = _closure2_slot4;
                oscard = _closure1_slot0;
                zuuluu = 23;
                zuuluu = golfie[zuuluu];
                golfie = oscard.bind(entity)(zuuluu);
                oscard = golfie.isLinkTrusted;
                zuuluu = _closure2_slot12;
                zuuluu = oscard.bind(golfie)(report, zuuluu);
                michal = _closure2_slot2;
                michal = tangon.bind(entity)(report, zuuluu, michal);
                return entity;
            };
            report = report.bind(oscard)(michal, zuuluu);
            oscard = _closure1_slot4;
            zuuluu = oscard.useCallback;
            michal = new Array(3);
            michal[0] = sizing;
            michal[1] = kiloes;
            michal[2] = golfie;
            entity = function() {
                tangon = _closure2_slot5;
                zuuluu = _closure2_slot2;
                michal = _closure2_slot3;
                entity = undefined;
                michal = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            sizing = zuuluu.bind(oscard)(entity, michal);
            zuuluu = _closure1_slot11;
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            kiloes = 19;
            entity = oscard[kiloes];
            entity = golfie.bind(tangon)(entity);
            michal = entity.SearchListCardContainer;
            entity = {};
            entity['containerStyle'] = option;
            entity['onPress'] = report;
            output = _closure1_slot10;
            report = oscard[kiloes];
            report = golfie.bind(tangon)(report);
            option = report.SearchListCardThumbnail;
            report = {};
            report['thumbnail'] = update;
            option = output.bind(tangon)(option, report);
            report = new Array(3);
            report[0] = option;
            option = _closure1_slot10;
            oscard = oscard[kiloes];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.SearchListCardContent;
            oscard = {};
            if(!(echoed == offset)) { _fun00016_ip = 667; continue _fun00015 }
 612:
            source = _closure1_slot0;
            ctrled = _closure1_slot2;
            offset = 11;
            output = ctrled[offset];
            output = source.bind(tangon)(output);
            update = output.intl;
            output = update.string;
            offset = ctrled[offset];
            offset = source.bind(tangon)(offset);
            offset = offset.t;
            offset = offset.mE3KJC;
            verify = output.bind(update)(offset);
 667:
            oscard['label'] = verify;
            output = _closure1_slot10;
            offset = _closure1_slot0;
            update = _closure1_slot2;
            verify = 14;
            verify = update[verify];
            verify = offset.bind(tangon)(verify);
            offset = verify.Text;
            verify = {'variant': 'text-xs/normal', 'color': 'text-link', 'lineClamp': 1};
            if(!(echoed == result)) { _fun00016_ip = 773; continue _fun00015 }
 718:
            ctrled = _closure1_slot0;
            vacuum = _closure1_slot2;
            echoed = 11;
            update = vacuum[echoed];
            update = ctrled.bind(tangon)(update);
            source = update.intl;
            update = source.string;
            echoed = vacuum[echoed];
            echoed = ctrled.bind(tangon)(echoed);
            echoed = echoed.t;
            echoed = echoed.q2IIoK;
            result = update.bind(source)(echoed);
 773:
            verify['children'] = result;
            verify = output.bind(tangon)(offset, verify);
            oscard['subLabel'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            option = _closure1_slot10;
            offset = _closure1_slot0;
            verify = _closure1_slot2;
            oscard = 20;
            oscard = verify[oscard];
            oscard = offset.bind(tangon)(oscard);
            golfie = oscard.PressableHighlight;
            oscard = {};
            oscard['onPress'] = sizing;
            yankee = _closure1_slot10;
            verify = verify[kiloes];
            verify = offset.bind(tangon)(verify);
            offset = verify.SearchListCardFooter;
            verify = {};
            verify['author'] = backup;
            verify['avatarSource'] = foxtra;
            verify['channel'] = romeon;
            verify = yankee.bind(tangon)(offset, verify);
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    yankee = 1;
    golfie = oscard[yankee];
    tangon = argCor;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.View;
    var _closure1_slot5 = option;
    tangon = tangon.useWindowDimensions;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FILE_OR_LINK_IMAGE_BUFFER;
    var _closure1_slot9 = tangon;
    tangon = 6;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.jsx;
    var _closure1_slot10 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot11 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {};
    offset['flex'] = yankee;
    tangon['container'] = offset;
    offset = {};
    yankee = 8;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.sm;
    offset['borderTopLeftRadius'] = foxtra;
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.radii;
    yankee = yankee.sm;
    offset['borderTopRightRadius'] = yankee;
    tangon['imageContainer'] = offset;
    offset = {'alignItems': 'center', 'justifyContent': 'center'};
    tangon['iconContainer'] = offset;
    offset = {};
    yankee = 'italic';
    offset['fontStyle'] = yankee;
    tangon['tapToSee'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot12 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) {
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            verify = entity.data;
            option = entity.onPressSearchLink;
            golfie = entity.onPress;
            oscard = entity.imageStyle;
            michal = entity.containerStyle;
            zuuluu = verify.embed;
            entity = null;
            if(!(entity == zuuluu)) { _fun00022_ip = 125; continue _fun00021 }
 43:
            report = _closure1_slot10;
            tangon = _closure1_slot14;
            zuuluu = {};
            entity = verify.messageId;
            zuuluu['messageId'] = entity;
            entity = verify.channelId;
            zuuluu['channelId'] = entity;
            entity = verify.author;
            zuuluu['author'] = entity;
            entity = verify.mediaIndex;
            zuuluu['mediaIndex'] = entity;
            zuuluu['onPressSearchLink'] = option;
            zuuluu['onPress'] = golfie;
            zuuluu['imageStyle'] = oscard;
            zuuluu['containerStyle'] = michal;
            entity = undefined;
            entity = report.bind(entity)(tangon, zuuluu);
            _fun00022_ip = 216; continue _fun00021;
 125:
            report = _closure1_slot10;
            tangon = _closure1_slot15;
            zuuluu = {};
            offset = verify.embed;
            zuuluu['embed'] = offset;
            offset = verify.messageId;
            zuuluu['messageId'] = offset;
            offset = verify.channelId;
            zuuluu['channelId'] = offset;
            offset = verify.author;
            zuuluu['author'] = offset;
            verify = verify.mediaIndex;
            zuuluu['mediaIndex'] = verify;
            zuuluu['onPressSearchLink'] = option;
            zuuluu['onPress'] = golfie;
            zuuluu['imageStyle'] = oscard;
            zuuluu['containerStyle'] = michal;
            michal = undefined;
            entity = report.bind(michal)(tangon, zuuluu);
 216:
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 24;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/components/list/rows/LinkGridItem.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();