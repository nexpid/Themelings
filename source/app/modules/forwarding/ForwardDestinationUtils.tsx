// app/modules/forwarding/ForwardDestinationUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo, argBar) { // Original name: isRatelimitedInChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            michal = oscard.rateLimitPerUser;
            entity = null;
            entity = entity != michal;
            if(!entity) { _fun00002_ip = 33; continue _fun00001 }
 21:
            zuuluu = oscard.rateLimitPerUser;
            michal = 0;
            entity = zuuluu > michal;
 33:
            if(!entity) { _fun00002_ip = 89; continue _fun00001 }
 36:
            tangon = report.can;
            michal = _closure1_slot12;
            michal = michal.MANAGE_CHANNELS;
            michal = tangon.bind(report)(michal, oscard);
            if(michal) { _fun00002_ip = 86; continue _fun00001 }
 64:
            tangon = report.can;
            zuuluu = _closure1_slot12;
            zuuluu = zuuluu.MANAGE_MESSAGES;
            michal = tangon.bind(report)(zuuluu, oscard);
 86:
            entity = !michal;
 89:
            return entity;
        }
    };
    var _closure1_slot13 = tangon;
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
    report = report.bind(entity)(verify);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    verify = report.ChannelRecordBase;
    var _closure1_slot4 = verify;
    verify = report.isGuildChannelType;
    var _closure1_slot5 = verify;
    report = report.createChannelRecord;
    var _closure1_slot6 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 4;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 5;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 6;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 7;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.MessageFlags;
    var _closure1_slot11 = option;
    report = report.Permissions;
    var _closure1_slot12 = report;
    report = 17;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/forwarding/ForwardDestinationUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: useSelectedDestinationChannel
        option = argFoo;
        tangon = option.map;
        oscard = _closure1_slot0;
        golfie = _closure1_slot1;
        zuuluu = 8;
        zuuluu = golfie[zuuluu];
        report = undefined;
        zuuluu = oscard.bind(report)(zuuluu);
        zuuluu = zuuluu.getChannelIdFromDestinationId;
        option = tangon.bind(option)(zuuluu);
        tangon = option.find;
        zuuluu = 9;
        zuuluu = golfie[zuuluu];
        zuuluu = oscard.bind(report)(zuuluu);
        zuuluu = zuuluu.isNotNullish;
        zuuluu = tangon.bind(option)(zuuluu);
        var _closure2_slot0 = zuuluu;
        tangon = 10;
        tangon = golfie[tangon];
        golfie = oscard.bind(report)(tangon);
        oscard = golfie.useStateFromStores;
        tangon = _closure1_slot7;
        report = new Array(1);
        report[0] = tangon;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = function() {
            zuuluu = _closure1_slot7;
            michal = zuuluu.getChannel;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report = oscard.bind(golfie)(report, zuuluu, tangon);
        var _closure2_slot1 = report;
        tangon = _closure1_slot2;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure2_slot1;
                entity = null;
                if(!(entity == zuuluu)) { _fun00004_ip = 77; continue _fun00003 }
 13:
                tangon = _closure1_slot6;
                zuuluu = {};
                report = '1';
                zuuluu['id'] = report;
                oscard = _closure1_slot0;
                report = _closure1_slot1;
                entity = 11;
                report = report[entity];
                entity = undefined;
                report = oscard.bind(entity)(report);
                report = report.ChannelTypes;
                report = report.DM;
                zuuluu['type'] = report;
                entity = tangon.bind(entity)(zuuluu);
                _fun00004_ip = 81; continue _fun00003;
 77:
                entity = _closure2_slot1;
 81:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useSelectedDestinationChannel'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: getDestinationIsUnavailable
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            var _closure2_slot0 = oscard;
            entity = _closure1_slot4;
            report = oscard instanceof entity;
            option = _closure1_slot0;
            entity = _closure1_slot1;
            verify = 13;
            golfie = entity[verify];
            entity = undefined;
            offset = option.bind(entity)(golfie);
            option = offset.isChannelNSFW;
            golfie = argBar;
            golfie = option.bind(offset)(golfie);
            if(!golfie) { _fun00006_ip = 161; continue _fun00005 }
 62:
            if(!report) { _fun00006_ip = 96; continue _fun00005 }
 65:
            option = _closure1_slot0;
            golfie = _closure1_slot1;
            golfie = golfie[verify];
            option = option.bind(entity)(golfie);
            golfie = option.isChannelNSFW;
            golfie = golfie.bind(option)(oscard);
            if(golfie) { _fun00006_ip = 161; continue _fun00005 }
 96:
            golfie = {};
            yankee = _closure1_slot0;
            romeon = _closure1_slot1;
            option = 14;
            verify = romeon[option];
            verify = yankee.bind(entity)(verify);
            offset = verify.intl;
            verify = offset.string;
            option = romeon[option];
            option = yankee.bind(entity)(option);
            option = option.t;
            option = option.KgPx1N;
            option = verify.bind(offset)(option);
            golfie['label'] = option;
            return golfie;
 161:
            if(!report) { _fun00006_ip = 847; continue _fun00005 }
 167:
            golfie = _closure1_slot5;
            report = oscard.type;
            report = golfie.bind(entity)(report);
            if(!report) { _fun00006_ip = 847; continue _fun00005 }
 187:
            report = tangon.attachments;
            report = report.length;
            golfie = 0;
            if(!(!(report > golfie))) { _fun00006_ip = 231; continue _fun00005 }
 204:
            verify = tangon.messageSnapshots;
            option = verify.some;
            report = function(argFoo) {
                entity = argFoo;
                entity = entity.message;
                entity = entity.attachments;
                michal = entity.length;
                entity = 0;
                entity = michal > entity;
                return entity;
            };
            report = option.bind(verify)(report);
            if(!report) { _fun00006_ip = 323; continue _fun00005 }
 231:
            verify = _closure1_slot8;
            option = verify.can;
            report = _closure1_slot12;
            report = report.ATTACH_FILES;
            report = option.bind(verify)(report, oscard);
            if(report) { _fun00006_ip = 323; continue _fun00005 }
 260:
            report = {};
            yankee = _closure1_slot0;
            romeon = _closure1_slot1;
            option = 14;
            verify = romeon[option];
            verify = yankee.bind(entity)(verify);
            offset = verify.intl;
            verify = offset.string;
            option = romeon[option];
            option = yankee.bind(entity)(option);
            option = option.t;
            option = option.P7yvbm;
            option = verify.bind(offset)(option);
            report['label'] = option;
            return report;
 323:
            report = tangon.embeds;
            report = report.length;
            if(!(!(report > golfie))) { _fun00006_ip = 368; continue _fun00005 }
 338:
            verify = tangon.messageSnapshots;
            option = verify.some;
            report = function(argFoo) {
                entity = argFoo;
                entity = entity.message;
                entity = entity.embeds;
                michal = entity.length;
                entity = 0;
                entity = michal > entity;
                return entity;
            };
            report = option.bind(verify)(report);
            if(!report) { _fun00006_ip = 503; continue _fun00005 }
 368:
            option = _closure1_slot0;
            report = _closure1_slot1;
            verify = 15;
            report = report[verify];
            offset = option.bind(entity)(report);
            option = offset.canEmbedLinks;
            report = _closure1_slot8;
            report = option.bind(offset)(oscard, report);
            if(report) { _fun00006_ip = 503; continue _fun00005 }
 407:
            option = _closure1_slot0;
            report = _closure1_slot1;
            report = report[verify];
            option = option.bind(entity)(report);
            report = option.shouldStripEmbeds;
            report = report.bind(option)(tangon);
            if(report) { _fun00006_ip = 503; continue _fun00005 }
 438:
            report = {};
            yankee = _closure1_slot0;
            romeon = _closure1_slot1;
            option = 14;
            verify = romeon[option];
            verify = yankee.bind(entity)(verify);
            offset = verify.intl;
            verify = offset.string;
            option = romeon[option];
            option = yankee.bind(entity)(option);
            option = option.t;
            option = option.Wr4RIS;
            option = verify.bind(offset)(option);
            report['label'] = option;
            return report;
 503:
            option = _closure1_slot0;
            verify = _closure1_slot1;
            report = 12;
            report = verify[report];
            option = option.bind(entity)(report);
            report = option.getMessageStickers;
            backup = report.bind(option)(tangon);
            option = new Array(0);
            kiloes = option;
            foxtra = 0;
            foxtra = arraySpread(kiloes, backup, foxtra);
            yankee = tangon.messageSnapshots;
            offset = yankee.flatMap;
            report = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.message;
                tangon = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 12;
                michal = michal[entity];
                entity = undefined;
                michal = tangon.bind(entity)(michal);
                entity = michal.getMessageStickers;
                entity = entity.bind(michal)(zuuluu);
                return entity;
            };
            backup = offset.bind(yankee)(report);
            kiloes = option;
            report = arraySpread(kiloes, backup, foxtra);
            report = option.length;
            if(!(report > golfie)) { _fun00006_ip = 702; continue _fun00005 }
 587:
            verify = _closure1_slot8;
            golfie = verify.can;
            report = _closure1_slot12;
            report = report.USE_EXTERNAL_STICKERS;
            report = golfie.bind(verify)(report, oscard);
            if(report) { _fun00006_ip = 702; continue _fun00005 }
 616:
            golfie = option.some;
            report = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot0;
                    report = _closure1_slot3;
                    zuuluu = report.getStickerById;
                    entity = argFoo;
                    entity = entity.id;
                    zuuluu = zuuluu.bind(report)(entity);
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00008_ip = 81; continue _fun00007 }
 42:
                    oscard = _closure1_slot0;
                    report = _closure1_slot1;
                    tangon = 12;
                    report = report[tangon];
                    tangon = undefined;
                    report = oscard.bind(tangon)(report);
                    tangon = report.isGuildSticker;
                    tangon = tangon.bind(report)(zuuluu);
                    tangon = !tangon;
                    entity = !tangon;
 81:
                    if(!entity) { _fun00008_ip = 106; continue _fun00007 }
 84:
                    zuuluu = zuuluu.guild_id;
                    michal = michal.guild_id;
                    michal = zuuluu !== michal;
                    if(michal) { _fun00008_ip = 103; continue _fun00007 }
 101:
                    michal = undefined;
 103:
                    entity = michal;
 106:
                    return entity;
                }
            };
            report = golfie.bind(option)(report);
            if(!report) { _fun00006_ip = 702; continue _fun00005 }
 637:
            report = {};
            offset = _closure1_slot0;
            yankee = _closure1_slot1;
            golfie = 14;
            option = yankee[golfie];
            option = offset.bind(entity)(option);
            verify = option.intl;
            option = verify.string;
            golfie = yankee[golfie];
            golfie = offset.bind(entity)(golfie);
            golfie = golfie.t;
            golfie = golfie.0Yyrub;
            golfie = option.bind(verify)(golfie);
            report['label'] = golfie;
            return report;
 702:
            golfie = tangon.hasFlag;
            report = _closure1_slot11;
            report = report.IS_VOICE_MESSAGE;
            report = golfie.bind(tangon)(report);
            if(report) { _fun00006_ip = 753; continue _fun00005 }
 726:
            report = tangon.messageSnapshots;
            tangon = report.some;
            michal = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.message;
                michal = zuuluu.hasFlag;
                entity = _closure1_slot11;
                entity = entity.IS_VOICE_MESSAGE;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = tangon.bind(report)(michal);
            if(!michal) { _fun00006_ip = 847; continue _fun00005 }
 753:
            report = _closure1_slot8;
            tangon = report.can;
            michal = _closure1_slot12;
            michal = michal.SEND_VOICE_MESSAGES;
            michal = tangon.bind(report)(michal, oscard);
            if(michal) { _fun00006_ip = 847; continue _fun00005 }
 782:
            michal = {};
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 14;
            tangon = golfie[zuuluu];
            tangon = oscard.bind(entity)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = golfie[zuuluu];
            zuuluu = oscard.bind(entity)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.quj4DQ;
            zuuluu = tangon.bind(report)(zuuluu);
            michal['label'] = zuuluu;
            return michal;
 847:
            return entity;
        }
    };
    zuuluu['getDestinationIsUnavailable'] = report;
    zuuluu['isRatelimitedInChannel'] = tangon;
    michal = function(argFoo) { // Original name: useDestinationNamesWithSlowmode
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        golfie = _closure1_slot1;
        zuuluu = 10;
        option = golfie[zuuluu];
        tangon = undefined;
        yankee = report.bind(tangon)(option);
        offset = yankee.useStateFromStoresArray;
        option = _closure1_slot7;
        verify = new Array(2);
        verify[0] = option;
        option = _closure1_slot8;
        verify[1] = option;
        option = new Array(1);
        option[0] = oscard;
        oscard = function() {
            tangon = _closure2_slot0;
            zuuluu = tangon.map;
            michal = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.type;
                    tangon = entity.id;
                    michal = 'channel';
                    entity = null;
                    if(!(michal === zuuluu)) { _fun00010_ip = 40; continue _fun00009 }
 23:
                    zuuluu = _closure1_slot7;
                    michal = zuuluu.getChannel;
                    entity = michal.bind(zuuluu)(tangon);
 40:
                    return entity;
                }
            };
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.filter;
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            michal = 9;
            report = report[michal];
            michal = undefined;
            michal = oscard.bind(michal)(report);
            michal = michal.isNotNullish;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.filter;
            entity = function(argFoo) {
                tangon = _closure1_slot13;
                zuuluu = _closure1_slot8;
                michal = undefined;
                entity = argFoo;
                entity = tangon.bind(michal)(entity, zuuluu);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        oscard = offset.bind(yankee)(verify, oscard, option);
        var _closure2_slot1 = oscard;
        zuuluu = golfie[zuuluu];
        report = report.bind(tangon)(zuuluu);
        tangon = report.useStateFromStoresArray;
        golfie = _closure1_slot10;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        michal = _closure1_slot9;
        zuuluu[1] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            zuuluu = _closure2_slot1;
            michal = zuuluu.map;
            entity = function(argFoo) {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 16;
                zuuluu = zuuluu[michal];
                michal = undefined;
                oscard = tangon.bind(michal)(zuuluu);
                report = oscard.computeChannelName;
                verify = _closure1_slot10;
                option = _closure1_slot9;
                offset = argFoo;
                golfie = true;
                yankee = oscard;
                entity = yankee[report](offset, verify, option, golfie, oscard);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['useDestinationNamesWithSlowmode'] = michal;
    return entity;
})();