// app/modules/main_tabs_v2/native/tabs/gravity/GravityMessageRow.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    michal = function(argFoo) { // Original name: MessageRowContent
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            backup = zuuluu.message;
            var _closure2_slot0 = backup;
            michal = zuuluu.channel;
            var _closure2_slot1 = michal;
            romeon = zuuluu.lineClamp;
            tangon = undefined;
            if(!(romeon === tangon)) { _fun00002_ip = 38; continue _fun00001 }
 35:
            romeon = 3;
 38:
            verify = zuuluu.nested;
            if(!(verify === tangon)) { _fun00002_ip = 50; continue _fun00001 }
 48:
            verify = false;
 50:
            echoed = zuuluu.visible;
            if(!(echoed === tangon)) { _fun00002_ip = 62; continue _fun00001 }
 60:
            echoed = false;
 62:
            zuuluu = _closure1_slot20;
            yankee = zuuluu.bind(tangon)();
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            oscard = 14;
            oscard = report[oscard];
            option = zuuluu.bind(tangon)(oscard);
            golfie = option.extractMediaSourcesFromMessage;
            ctrled = michal.guild_id;
            michal = 15;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            source = michal.GRAVITY_VALID_EMBED_TYPES;
            config = option;
            sequen = backup;
            vacuum = backup;
            oscard = config[golfie](sequen, vacuum, ctrled, source, update);
            michal = 16;
            michal = report[michal];
            golfie = zuuluu.bind(tangon)(michal);
            report = golfie.useStateFromStores;
            michal = _closure1_slot9;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                tangon = _closure1_slot9;
                zuuluu = tangon.isChannelMuted;
                entity = _closure2_slot1;
                michal = entity.getGuildId;
                michal = michal.bind(entity)();
                entity = entity.id;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            foxtra = report.bind(golfie)(zuuluu, michal);
            golfie = _closure1_slot3;
            report = golfie.useMemo;
            michal = backup.attachments;
            michal = michal.length;
            zuuluu = new Array(3);
            zuuluu[0] = michal;
            michal = backup.content;
            zuuluu[1] = michal;
            michal = backup.embeds;
            zuuluu[2] = michal;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot0;
                    entity = entity.embeds;
                    michal = entity.length;
                    entity = 1;
                    michal = entity !== michal;
                    if(michal) { _fun00004_ip = 49; continue _fun00003 }
 28:
                    entity = _closure2_slot0;
                    entity = entity.attachments;
                    tangon = entity.length;
                    entity = 0;
                    michal = tangon > entity;
 49:
                    entity = !michal;
                    if(michal) { _fun00004_ip = 127; continue _fun00003 }
 55:
                    michal = _closure2_slot0;
                    michal = michal.embeds;
                    report = 0;
                    michal = michal[report];
                    tangon = michal.type;
                    michal = _closure1_slot15;
                    michal = michal.GIFV;
                    michal = tangon === michal;
                    if(!michal) { _fun00004_ip = 124; continue _fun00003 }
 96:
                    zuuluu = _closure2_slot0;
                    tangon = zuuluu.embeds;
                    tangon = tangon[report];
                    tangon = tangon.url;
                    zuuluu = zuuluu.content;
                    michal = tangon === zuuluu;
 124:
                    entity = michal;
 127:
                    return entity;
                }
            };
            report = report.bind(golfie)(michal, zuuluu);
            zuuluu = backup.attachments;
            michal = zuuluu.every;
            entity = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    tangon = entity.content_type;
                    entity = null;
                    michal = entity == tangon;
                    entity = undefined;
                    if(michal) { _fun00006_ip = 37; continue _fun00005 }
 20:
                    zuuluu = tangon.startsWith;
                    michal = 'audio/';
                    entity = zuuluu.bind(tangon)(michal);
 37:
                    return entity;
                }
            };
            kiloes = michal.bind(zuuluu)(entity);
            zuuluu = _closure1_slot17;
            michal = _closure1_slot4;
            entity = {};
            option = yankee.messagePreview;
            golfie = new Array(2);
            golfie[0] = option;
            option = null;
            if(verify) { _fun00002_ip = 304; continue _fun00001 }
 290:
            verify = {};
            sizing = _closure1_slot11;
            verify['paddingLeft'] = sizing;
            option = verify;
 304:
            golfie[1] = option;
            entity['style'] = golfie;
            golfie = !report;
            if(!golfie) { _fun00002_ip = 456; continue _fun00001 }
 321:
            verify = _closure1_slot16;
            option = _closure1_slot0;
            sizing = _closure1_slot2;
            report = 17;
            report = sizing[report];
            report = option.bind(tangon)(report);
            option = report.MessageRowPreview;
            report = {};
            report['message'] = backup;
            report['muted'] = foxtra;
            report['lineClamp'] = romeon;
            sizing = oscard.length;
            output = 0;
            romeon = undefined;
            if(!(output === sizing)) { _fun00002_ip = 429; continue _fun00001 }
 380:
            sizing = backup.attachments;
            sizing = sizing.length;
            sizing = sizing > output;
            romeon = undefined;
            if(!sizing) { _fun00002_ip = 429; continue _fun00001 }
 400:
            sizing = backup.embeds;
            sizing = sizing.length;
            romeon = undefined;
            if(!(output === sizing)) { _fun00002_ip = 429; continue _fun00001 }
 417:
            sizing = {};
            output = true;
            sizing['renderAttachments'] = output;
            romeon = sizing;
 429:
            report['messageOptions'] = romeon;
            romeon = 'none';
            if(!kiloes) { _fun00002_ip = 445; continue _fun00001 }
 441:
            romeon = 'auto';
 445:
            report['pointerEvents'] = romeon;
            golfie = verify.bind(tangon)(option, report);
 456:
            report = new Array(3);
            report[0] = golfie;
            golfie = oscard.length;
            option = 0;
            golfie = golfie > option;
            if(!golfie) { _fun00002_ip = 594; continue _fun00001 }
 478:
            kiloes = _closure1_slot16;
            romeon = _closure1_slot4;
            verify = {};
            output = yankee.media;
            sizing = new Array(2);
            sizing[0] = output;
            output = backup.content;
            output = output.length;
            output = option === output;
            if(!output) { _fun00002_ip = 535; continue _fun00001 }
 519:
            result = {};
            update = _closure1_slot11;
            update = -update;
            result['marginTop'] = update;
            output = result;
 535:
            sizing[1] = output;
            verify['style'] = sizing;
            result = _closure1_slot16;
            output = _closure1_slot1;
            update = _closure1_slot2;
            sizing = 18;
            sizing = update[sizing];
            output = output.bind(tangon)(sizing);
            sizing = {};
            sizing['message'] = backup;
            sizing['visible'] = echoed;
            sizing = result.bind(tangon)(output, sizing);
            verify['children'] = sizing;
            golfie = kiloes.bind(tangon)(romeon, verify);
 594:
            report[1] = golfie;
            oscard = oscard.length;
            oscard = option === oscard;
            if(!oscard) { _fun00002_ip = 625; continue _fun00001 }
 610:
            golfie = backup.embeds;
            golfie = golfie.length;
            oscard = golfie > option;
 625:
            if(!oscard) { _fun00002_ip = 713; continue _fun00001 }
 628:
            verify = _closure1_slot16;
            option = _closure1_slot4;
            golfie = {};
            yankee = yankee.media;
            golfie['style'] = yankee;
            romeon = _closure1_slot16;
            yankee = _closure1_slot0;
            kiloes = _closure1_slot2;
            offset = 17;
            offset = kiloes[offset];
            offset = yankee.bind(tangon)(offset);
            yankee = offset.NonMediaEmbedsRowPreview;
            offset = {};
            offset['message'] = backup;
            offset['muted'] = foxtra;
            foxtra = 3;
            offset['lineClamp'] = foxtra;
            offset = romeon.bind(tangon)(yankee, offset);
            golfie['children'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 713:
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot22 = michal;
    entity = function(argFoo) { // Original name: ReplyMessageContent
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            vacuum = michal.message;
            var _closure2_slot0 = vacuum;
            ctrled = michal.channel;
            source = michal.guild;
            var _closure2_slot1 = source;
            michal = _closure1_slot20;
            report = undefined;
            offset = michal.bind(report)();
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 16;
            oscard = tangon[michal];
            verify = zuuluu.bind(report)(oscard);
            option = verify.useStateFromStores;
            oscard = _closure1_slot10;
            golfie = new Array(1);
            golfie[0] = oscard;
            oscard = function() {
                zuuluu = _closure1_slot10;
                michal = zuuluu.getUser;
                entity = _closure2_slot0;
                entity = entity.author;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            sierra = option.bind(verify)(golfie, oscard);
            michal = tangon[michal];
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.useStateFromStores;
            oscard = _closure1_slot6;
            michal = new Array(1);
            michal[0] = oscard;
            entity = function() {
                tangon = _closure1_slot6;
                zuuluu = tangon.getMember;
                michal = _closure2_slot1;
                michal = michal.id;
                entity = _closure2_slot0;
                entity = entity.author;
                entity = entity.id;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal, entity);
            entity = null;
            zuuluu = entity == michal;
            papara = undefined;
            if(zuuluu) { _fun00008_ip = 147; continue _fun00007 }
 141:
            papara = michal.colorString;
 147:
            if(!(entity == papara)) { _fun00008_ip = 186; continue _fun00007 }
 151:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 19;
            michal = tangon[michal];
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.int2hex;
            michal = _closure1_slot14;
            papara = zuuluu.bind(tangon)(michal);
 186:
            tangon = _closure1_slot3;
            zuuluu = tangon.useContext;
            oscard = _closure1_slot0;
            michal = _closure1_slot2;
            echoed = 20;
            michal = michal[echoed];
            michal = oscard.bind(report)(michal);
            michal = michal.ICYMIContext;
            michal = zuuluu.bind(tangon)(michal);
            config = michal.width;
            michal = entity == sierra;
            entity = null;
            if(michal) { _fun00008_ip = 821; continue _fun00007 }
 244:
            tangon = _closure1_slot17;
            zuuluu = _closure1_slot4;
            michal = {};
            oscard = offset.replyPreview;
            michal['style'] = oscard;
            option = _closure1_slot16;
            sizing = _closure1_slot0;
            kiloes = _closure1_slot2;
            backup = 21;
            oscard = kiloes[backup];
            oscard = sizing.bind(report)(oscard);
            golfie = oscard.Text;
            oscard = {'variant': 'text-sm/semibold', 'color': 'text-muted'};
            verify = {};
            yankee = 'italic';
            verify['fontStyle'] = yankee;
            oscard['style'] = verify;
            verify = 22;
            yankee = kiloes[verify];
            yankee = sizing.bind(report)(yankee);
            romeon = yankee.intl;
            yankee = romeon.string;
            verify = kiloes[verify];
            verify = sizing.bind(report)(verify);
            verify = verify.t;
            verify = verify.mPPce3;
            verify = yankee.bind(romeon)(verify);
            oscard['children'] = verify;
            golfie = option.bind(report)(golfie, oscard);
            oscard = new Array(2);
            oscard[0] = golfie;
            verify = _closure1_slot17;
            option = _closure1_slot4;
            golfie = {};
            offset = offset.replyInner;
            golfie['style'] = offset;
            romeon = _closure1_slot16;
            yankee = _closure1_slot1;
            foxtra = 23;
            offset = kiloes[foxtra];
            yankee = yankee.bind(report)(offset);
            offset = {};
            output = false;
            offset['animate'] = output;
            output = source.id;
            offset['guildId'] = output;
            offset['user'] = sierra;
            foxtra = kiloes[foxtra];
            foxtra = sizing.bind(report)(foxtra);
            foxtra = foxtra.AvatarSizes;
            foxtra = foxtra.SMALL;
            offset['size'] = foxtra;
            yankee = romeon.bind(report)(yankee, offset);
            offset = new Array(2);
            offset[0] = yankee;
            foxtra = _closure1_slot17;
            romeon = _closure1_slot4;
            yankee = {};
            output = {};
            update = 4;
            output['gap'] = update;
            update = _closure1_slot13;
            record = config - update;
            update = _closure1_slot12;
            sequen = 2;
            update = sequen * update;
            record = record - update;
            update = _closure1_slot18;
            update = sequen * update;
            cntext = _closure1_slot19;
            update = record - update;
            record = 30;
            update = update - record;
            update = update - cntext;
            update = update - sequen;
            output['width'] = update;
            yankee['style'] = output;
            update = _closure1_slot16;
            backup = kiloes[backup];
            backup = sizing.bind(report)(backup);
            output = backup.Text;
            backup = {'variant': 'text-md/semibold', 'style': null, 'lineClamp': 1};
            cntext = {};
            cntext['color'] = papara;
            backup['style'] = cntext;
            cntext = 24;
            cntext = kiloes[cntext];
            status = sizing.bind(report)(cntext);
            target = status.getName;
            papara = source.id;
            cntext = ctrled.id;
            cntext = target.bind(status)(papara, cntext, sierra);
            backup['children'] = cntext;
            output = update.bind(report)(output, backup);
            backup = new Array(2);
            backup[0] = output;
            output = _closure1_slot16;
            kiloes = kiloes[echoed];
            kiloes = sizing.bind(report)(kiloes);
            kiloes = kiloes.ICYMIContext;
            sizing = kiloes.Provider;
            kiloes = {};
            echoed = {};
            update = _closure1_slot18;
            update = sequen * update;
            update = config - update;
            config = _closure1_slot19;
            update = update - record;
            update = update - config;
            update = update - sequen;
            echoed['width'] = update;
            kiloes['value'] = echoed;
            update = _closure1_slot16;
            echoed = _closure1_slot22;
            result = {};
            result['message'] = vacuum;
            result['channel'] = ctrled;
            result['guild'] = source;
            source = true;
            result['nested'] = source;
            result = update.bind(report)(echoed, result);
            kiloes['children'] = result;
            kiloes = output.bind(report)(sizing, kiloes);
            backup[1] = kiloes;
            yankee['children'] = backup;
            yankee = foxtra.bind(report)(romeon, yankee);
            offset[1] = yankee;
            golfie['children'] = offset;
            golfie = verify.bind(report)(option, golfie);
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 821:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    verify = golfie[entity];
    report = argCor;
    entity = undefined;
    verify = report.bind(entity)(verify);
    var _closure1_slot3 = verify;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.View;
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 6;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 7;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 8;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    offset = report.ICYMI_MARGIN;
    var _closure1_slot11 = offset;
    offset = report.ITEM_PADDING;
    var _closure1_slot12 = offset;
    report = report.MESSAGE_CONTENT_INSET;
    var _closure1_slot13 = report;
    report = 9;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    offset = report.DEFAULT_ROLE_COLOR;
    var _closure1_slot14 = offset;
    report = report.MessageEmbedTypes;
    var _closure1_slot15 = report;
    report = 10;
    offset = golfie[report];
    offset = oscard.bind(entity)(offset);
    offset = offset.jsx;
    var _closure1_slot16 = offset;
    offset = golfie[report];
    offset = oscard.bind(entity)(offset);
    offset = offset.jsxs;
    var _closure1_slot17 = offset;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.Fragment;
    report = 11;
    offset = golfie[report];
    offset = option.bind(entity)(offset);
    offset = offset.spacing;
    offset = offset.PX_12;
    var _closure1_slot18 = offset;
    report = golfie[report];
    report = option.bind(entity)(report);
    report = report.spacing;
    report = report.PX_8;
    var _closure1_slot19 = report;
    report = 12;
    report = golfie[report];
    offset = oscard.bind(entity)(report);
    option = offset.createStyles;
    report = function() {
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = {};
            michal = {};
            option = 1;
            michal['flex'] = option;
            tangon = _closure1_slot13;
            michal['paddingLeft'] = tangon;
            report = _closure1_slot1;
            verify = _closure1_slot2;
            golfie = 11;
            tangon = verify[golfie];
            oscard = undefined;
            tangon = report.bind(oscard)(tangon);
            tangon = tangon.spacing;
            tangon = tangon.PX_8;
            michal['gap'] = tangon;
            entity['pressable'] = michal;
            michal = {};
            tangon = verify[golfie];
            tangon = report.bind(oscard)(tangon);
            tangon = tangon.colors;
            tangon = tangon.BACKGROUND_MODIFIER_ACTIVE;
            michal['backgroundColor'] = tangon;
            entity['rowActive'] = michal;
            michal = {};
            report = _closure1_slot0;
            tangon = 13;
            tangon = verify[tangon];
            report = report.bind(oscard)(tangon);
            tangon = report.isAndroid;
            report = tangon.bind(report)();
            tangon = 0;
            if(!report) { _fun00010_ip = 135; continue _fun00009 }
 129:
            tangon = -2;
 135:
            michal['marginTop'] = tangon;
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            verify = tangon[golfie];
            verify = report.bind(oscard)(verify);
            verify = verify.radii;
            verify = verify.md;
            michal['borderRadius'] = verify;
            verify = tangon[golfie];
            verify = report.bind(oscard)(verify);
            verify = verify.spacing;
            verify = verify.PX_8;
            michal['gap'] = verify;
            entity['messagePreview'] = michal;
            michal = {};
            verify = tangon[golfie];
            verify = report.bind(oscard)(verify);
            verify = verify.spacing;
            verify = verify.PX_8;
            michal['gap'] = verify;
            verify = _closure1_slot11;
            michal['marginHorizontal'] = verify;
            verify = _closure1_slot18;
            michal['padding'] = verify;
            verify = 'hidden';
            michal['overflow'] = verify;
            michal['borderWidth'] = option;
            option = tangon[golfie];
            option = report.bind(oscard)(option);
            option = option.colors;
            option = option.BORDER_SUBTLE;
            michal['borderColor'] = option;
            option = tangon[golfie];
            option = report.bind(oscard)(option);
            option = option.radii;
            option = option.lg;
            michal['borderRadius'] = option;
            option = 132;
            michal['maxHeight'] = option;
            entity['replyPreview'] = michal;
            michal = {'flexDirection': 'row', 'gap': null, 'overflow': 'hidden'};
            option = _closure1_slot19;
            michal['gap'] = option;
            entity['replyInner'] = michal;
            michal = {};
            option = _closure1_slot13;
            michal['paddingLeft'] = option;
            option = _closure1_slot11;
            michal['paddingBottom'] = option;
            entity['afterMessage'] = michal;
            michal = {};
            option = _closure1_slot11;
            michal['marginRight'] = option;
            entity['media'] = michal;
            michal = {};
            option = _closure1_slot11;
            michal['marginVertical'] = option;
            tangon = tangon[golfie];
            tangon = report.bind(oscard)(tangon);
            tangon = tangon.spacing;
            tangon = tangon.PX_8;
            michal['gap'] = tangon;
            tangon = _closure1_slot11;
            michal['paddingHorizontal'] = tangon;
            zuuluu = _closure1_slot13;
            michal['marginLeft'] = zuuluu;
            entity['footer'] = michal;
            return entity;
        }
    };
    report = option.bind(offset)(report);
    var _closure1_slot20 = report;
    option = verify.memo;
    report = function(argFoo) {
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            kiloes = michal.message;
            var _closure2_slot0 = kiloes;
            echoed = michal.channel;
            var _closure2_slot1 = echoed;
            sizing = michal.guild;
            var _closure2_slot2 = sizing;
            update = michal.visible;
            option = michal.messageContext;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 16;
            michal = tangon[michal];
            tangon = undefined;
            oscard = zuuluu.bind(tangon)(michal);
            report = oscard.useStateFromStores;
            michal = _closure1_slot9;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                tangon = _closure1_slot9;
                zuuluu = tangon.isChannelMuted;
                entity = _closure2_slot1;
                michal = entity.getGuildId;
                michal = michal.bind(entity)();
                entity = entity.id;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            result = report.bind(oscard)(zuuluu, michal);
            golfie = _closure1_slot3;
            report = golfie.useEffect;
            oscard = null;
            zuuluu = oscard == sizing;
            michal = undefined;
            if(zuuluu) { _fun00012_ip = 124; continue _fun00011 }
 119:
            michal = sizing.id;
 124:
            zuuluu = new Array(2);
            zuuluu[0] = michal;
            michal = kiloes.author;
            michal = michal.id;
            zuuluu[1] = michal;
            michal = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = _closure2_slot2;
                    oscard = null;
                    tangon = oscard == entity;
                    entity = undefined;
                    zuuluu = undefined;
                    if(tangon) { _fun00014_ip = 29; continue _fun00013 }
 20:
                    tangon = _closure2_slot2;
                    zuuluu = tangon.id;
 29:
                    if(!(oscard != zuuluu)) { _fun00014_ip = 105; continue _fun00013 }
 33:
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 25;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.requestMembersById;
                    zuuluu = _closure2_slot2;
                    oscard = oscard == zuuluu;
                    zuuluu = undefined;
                    if(oscard) { _fun00014_ip = 84; continue _fun00013 }
 75:
                    oscard = _closure2_slot2;
                    zuuluu = oscard.id;
 84:
                    michal = _closure2_slot0;
                    michal = michal.author;
                    michal = michal.id;
                    michal = tangon.bind(report)(zuuluu, michal);
 105:
                    return entity;
                }
            };
            michal = report.bind(golfie)(michal, zuuluu);
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            report = 26;
            michal = michal[report];
            verify = zuuluu.bind(tangon)(michal);
            golfie = verify.useICYMIMessage;
            zuuluu = echoed.id;
            offset = oscard == option;
            michal = undefined;
            if(offset) { _fun00012_ip = 206; continue _fun00011 }
 200:
            michal = option.reply_message_id;
 206:
            source = golfie.bind(verify)(zuuluu, michal);
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[report];
            golfie = zuuluu.bind(tangon)(michal);
            report = golfie.useICYMIMessage;
            zuuluu = echoed.id;
            verify = oscard == option;
            michal = undefined;
            if(verify) { _fun00012_ip = 255; continue _fun00011 }
 249:
            michal = option.before_message_id;
 255:
            ctrled = report.bind(golfie)(zuuluu, michal);
            michal = _closure1_slot20;
            offset = michal.bind(tangon)();
            golfie = _closure1_slot3;
            report = golfie.useCallback;
            michal = echoed.id;
            zuuluu = new Array(3);
            zuuluu[0] = michal;
            michal = sizing.id;
            zuuluu[1] = michal;
            michal = kiloes.id;
            zuuluu[2] = michal;
            michal = function() {
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                tangon = 27;
                michal = oscard[tangon];
                entity = undefined;
                yankee = report.bind(entity)(michal);
                offset = yankee.trackItemInteraction;
                michal = _closure2_slot0;
                verify = michal.id;
                option = 'message';
                golfie = 'press_message';
                golfie = offset.bind(yankee)(verify, option, golfie);
                tangon = oscard[tangon];
                oscard = report.bind(entity)(tangon);
                report = oscard.navigateToPost;
                tangon = _closure2_slot1;
                tangon = tangon.id;
                zuuluu = _closure2_slot2;
                zuuluu = zuuluu.id;
                michal = michal.id;
                michal = report.bind(oscard)(tangon, zuuluu, michal);
                return entity;
            };
            vacuum = report.bind(golfie)(michal, zuuluu);
            golfie = _closure1_slot3;
            report = golfie.useCallback;
            michal = echoed.id;
            zuuluu = new Array(2);
            zuuluu[0] = michal;
            zuuluu[1] = kiloes;
            michal = function() {
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                entity = 27;
                michal = report[entity];
                entity = undefined;
                verify = tangon.bind(entity)(michal);
                option = verify.trackItemInteraction;
                zuuluu = _closure2_slot0;
                golfie = zuuluu.id;
                oscard = 'message';
                zuuluu = 'long_press_channel';
                zuuluu = option.bind(verify)(golfie, oscard, zuuluu);
                zuuluu = 28;
                zuuluu = report[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.openChannelLongPressActionSheet;
                michal = _closure2_slot1;
                michal = michal.id;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            report = report.bind(golfie)(michal, zuuluu);
            option = _closure1_slot3;
            golfie = option.useCallback;
            zuuluu = new Array(2);
            zuuluu[0] = echoed;
            zuuluu[1] = kiloes;
            michal = function() {
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 27;
                michal = tangon[entity];
                entity = undefined;
                yankee = zuuluu.bind(entity)(michal);
                offset = yankee.trackItemInteraction;
                report = _closure2_slot0;
                verify = report.id;
                option = 'message';
                michal = 'long_press_message';
                michal = offset.bind(yankee)(verify, option, michal);
                michal = 29;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.showLongPressMessageActionSheet;
                michal = {};
                golfie = _closure2_slot1;
                michal['channel'] = golfie;
                michal['message'] = report;
                golfie = _closure1_slot10;
                oscard = golfie.getUser;
                report = report.author;
                report = report.id;
                report = oscard.bind(golfie)(report);
                michal['user'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            verify = golfie.bind(option)(michal, zuuluu);
            golfie = _closure1_slot3;
            zuuluu = golfie.useCallback;
            michal = new Array(2);
            michal[0] = kiloes;
            option = sizing.id;
            michal[1] = option;
            entity = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tangon = _closure1_slot0;
                    entity = _closure1_slot2;
                    report = 27;
                    michal = entity[report];
                    entity = undefined;
                    offset = tangon.bind(entity)(michal);
                    verify = offset.trackItemInteraction;
                    oscard = _closure2_slot0;
                    option = oscard.id;
                    golfie = 'message';
                    tangon = 'press_comments';
                    tangon = verify.bind(offset)(option, golfie, tangon);
                    tangon = null;
                    if(!(tangon != oscard)) { _fun00016_ip = 114; continue _fun00015 }
 66:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[report];
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.navigateToPost;
                    zuuluu = _closure2_slot0;
                    zuuluu = zuuluu.id;
                    michal = _closure2_slot2;
                    michal = michal.id;
                    michal = tangon.bind(report)(zuuluu, michal, entity);
 114:
                    return entity;
                }
            };
            backup = zuuluu.bind(golfie)(entity, michal);
            zuuluu = _closure1_slot17;
            yankee = _closure1_slot0;
            foxtra = _closure1_slot2;
            output = 27;
            entity = foxtra[output];
            entity = yankee.bind(tangon)(entity);
            michal = entity.MessageContentPost;
            entity = {};
            entity['channel'] = echoed;
            entity['guild'] = sizing;
            golfie = kiloes.author;
            entity['author'] = golfie;
            entity['message'] = kiloes;
            golfie = kiloes.id;
            entity['id'] = golfie;
            golfie = 'message';
            entity['type'] = golfie;
            sequen = _closure1_slot1;
            golfie = 30;
            golfie = foxtra[golfie];
            config = sequen.bind(tangon)(golfie);
            option = config.extractTimestamp;
            golfie = kiloes.id;
            golfie = option.bind(config)(golfie);
            entity['timestamp'] = golfie;
            entity['onHeaderPress'] = vacuum;
            entity['onHeaderLongPress'] = report;
            option = _closure1_slot17;
            report = 31;
            report = foxtra[report];
            report = yankee.bind(tangon)(report);
            golfie = report.PressableHighlight;
            report = {};
            report['onPress'] = vacuum;
            report['onLongPress'] = verify;
            verify = 130;
            report['unstable_pressDelay'] = verify;
            verify = 'button';
            report['accessibilityRole'] = verify;
            verify = 32;
            vacuum = foxtra[verify];
            sequen = sequen.bind(tangon)(vacuum);
            vacuum = {};
            vacuum['channel'] = echoed;
            vacuum = sequen.bind(tangon)(vacuum);
            report['accessibilityLabel'] = vacuum;
            verify = foxtra[verify];
            foxtra = yankee.bind(tangon)(verify);
            yankee = foxtra.getChannelA11yHint;
            verify = {};
            verify['channel'] = echoed;
            verify['muted'] = result;
            verify = yankee.bind(foxtra)(verify);
            report['accessibilityHint'] = verify;
            verify = offset.pressable;
            report['style'] = verify;
            verify = oscard != ctrled;
            yankee = null;
            if(!verify) { _fun00012_ip = 717; continue _fun00011 }
 684:
            result = _closure1_slot16;
            foxtra = _closure1_slot22;
            verify = {};
            verify['message'] = ctrled;
            verify['channel'] = echoed;
            verify['guild'] = sizing;
            verify['visible'] = update;
            yankee = result.bind(tangon)(foxtra, verify);
 717:
            verify = new Array(3);
            verify[0] = yankee;
            result = _closure1_slot16;
            foxtra = _closure1_slot22;
            yankee = {};
            yankee['message'] = kiloes;
            yankee['channel'] = echoed;
            yankee['guild'] = sizing;
            yankee['visible'] = update;
            yankee = result.bind(tangon)(foxtra, yankee);
            verify[1] = yankee;
            foxtra = oscard != source;
            yankee = null;
            if(!foxtra) { _fun00012_ip = 799; continue _fun00011 }
 771:
            update = _closure1_slot16;
            result = _closure1_slot23;
            foxtra = {};
            foxtra['message'] = source;
            foxtra['channel'] = echoed;
            foxtra['guild'] = sizing;
            yankee = update.bind(tangon)(result, foxtra);
 799:
            verify[2] = yankee;
            report['children'] = verify;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(3);
            report[0] = golfie;
            verify = _closure1_slot17;
            option = _closure1_slot4;
            golfie = {};
            offset = offset.footer;
            golfie['style'] = offset;
            result = _closure1_slot16;
            foxtra = _closure1_slot1;
            yankee = _closure1_slot2;
            offset = 33;
            offset = yankee[offset];
            foxtra = foxtra.bind(tangon)(offset);
            offset = {};
            offset['message'] = kiloes;
            offset['channel'] = echoed;
            foxtra = result.bind(tangon)(foxtra, offset);
            offset = new Array(2);
            offset[0] = foxtra;
            foxtra = _closure1_slot16;
            romeon = _closure1_slot0;
            yankee = yankee[output];
            yankee = romeon.bind(tangon)(yankee);
            romeon = yankee.ThreadAsComments;
            yankee = {};
            yankee['guild'] = sizing;
            yankee['parentMessage'] = kiloes;
            yankee['onPress'] = backup;
            yankee = foxtra.bind(tangon)(romeon, yankee);
            offset[1] = yankee;
            golfie['children'] = offset;
            golfie = verify.bind(tangon)(option, golfie);
            report[1] = golfie;
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    report = option.bind(verify)(report);
    var _closure1_slot21 = report;
    report = 34;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/tabs/gravity/GravityMessageRow.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: MessageRowWrapper
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            michal = argFoo;
            verify = michal.message;
            golfie = michal.messageContext;
            oscard = michal.visible;
            tangon = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 26;
            zuuluu = yankee[zuuluu];
            report = undefined;
            option = tangon.bind(report)(zuuluu);
            zuuluu = option.useGravityMessage;
            offset = zuuluu.bind(option)(verify);
            var _closure2_slot0 = offset;
            zuuluu = 16;
            option = yankee[zuuluu];
            foxtra = tangon.bind(report)(option);
            romeon = foxtra.useStateFromStores;
            option = _closure1_slot5;
            verify = new Array(1);
            verify[0] = option;
            option = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getChannel;
                tangon = _closure2_slot0;
                entity = tangon.getChannelId;
                entity = entity.bind(tangon)();
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            verify = romeon.bind(foxtra)(verify, option);
            var _closure2_slot1 = verify;
            option = yankee[zuuluu];
            backup = tangon.bind(report)(option);
            foxtra = backup.useStateFromStores;
            option = _closure1_slot7;
            romeon = new Array(1);
            romeon[0] = option;
            option = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zuuluu = _closure1_slot7;
                    michal = zuuluu.getGuild;
                    report = _closure2_slot1;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00020_ip = 39; continue _fun00019 }
 30:
                    tangon = _closure2_slot1;
                    entity = tangon.guild_id;
 39:
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            option = foxtra.bind(backup)(romeon, option);
            zuuluu = yankee[zuuluu];
            yankee = tangon.bind(report)(zuuluu);
            tangon = yankee.useStateFromStores;
            romeon = _closure1_slot8;
            zuuluu = new Array(1);
            zuuluu[0] = romeon;
            entity = function() {
                zuuluu = _closure1_slot8;
                michal = zuuluu.isBlocked;
                entity = _closure2_slot0;
                entity = entity.author;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = tangon.bind(yankee)(zuuluu, entity);
            tangon = null;
            yankee = tangon == verify;
            entity = null;
            if(yankee) { _fun00018_ip = 249; continue _fun00017 }
 197:
            yankee = tangon == option;
            entity = null;
            if(yankee) { _fun00018_ip = 249; continue _fun00017 }
 206:
            entity = null;
            if(zuuluu) { _fun00018_ip = 249; continue _fun00017 }
 211:
            tangon = _closure1_slot16;
            zuuluu = _closure1_slot21;
            michal = {};
            michal['message'] = offset;
            michal['channel'] = verify;
            michal['guild'] = option;
            michal['messageContext'] = golfie;
            michal['visible'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 249:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['MessageRowContent'] = michal;
    return entity;
})();