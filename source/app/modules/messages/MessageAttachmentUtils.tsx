// app/modules/messages/MessageAttachmentUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    golfie = argBar;
    oscard = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    var _closure1_slot2 = option;
    tangon = function(argFoo, argBar, argBaz) { // Original name: getForumPostShouldObscure
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            option = argBaz;
            report = null;
            if(!(report != zuuluu)) { _fun00002_ip = 482; continue _fun00001 }
 15:
            if(!option) { _fun00002_ip = 66; continue _fun00001 }
 18:
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 4;
            tangon = tangon[entity];
            entity = undefined;
            oscard = oscard.bind(entity)(tangon);
            tangon = oscard.isPendingScanVersion;
            entity = zuuluu.contentScanVersion;
            entity = tangon.bind(oscard)(entity);
            if(entity) { _fun00002_ip = 456; continue _fun00001 }
 66:
            verify = zuuluu.type;
            golfie = _closure1_slot0;
            entity = _closure1_slot2;
            offset = 7;
            oscard = entity[offset];
            entity = undefined;
            oscard = golfie.bind(entity)(oscard);
            oscard = oscard.ForumPostMediaTypes;
            oscard = oscard.EMBED;
            if(!(oscard !== verify)) { _fun00002_ip = 288; continue _fun00001 }
 115:
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[offset];
            oscard = golfie.bind(entity)(oscard);
            oscard = oscard.ForumPostMediaTypes;
            oscard = oscard.ATTACHMENT;
            if(!(oscard !== verify)) { _fun00002_ip = 240; continue _fun00001 }
 148:
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[offset];
            oscard = golfie.bind(entity)(oscard);
            oscard = oscard.ForumPostMediaTypes;
            oscard = oscard.COMPONENT;
            golfie = null;
            if(!(oscard === verify)) { _fun00002_ip = 334; continue _fun00001 }
 186:
            oscard = {};
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            verify = 4;
            verify = yankee[verify];
            verify = offset.bind(entity)(verify);
            verify = verify.ObscuredMediaTypes;
            verify = verify.GenericMedia;
            oscard['type'] = verify;
            verify = zuuluu.srcUnfurledMediaItem;
            oscard['media'] = verify;
            golfie = oscard;
            _fun00002_ip = 334; continue _fun00001;
 240:
            oscard = {};
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            verify = 4;
            verify = yankee[verify];
            verify = offset.bind(entity)(verify);
            verify = verify.ObscuredMediaTypes;
            verify = verify.Attachment;
            oscard['type'] = verify;
            oscard['media'] = zuuluu;
            golfie = oscard;
            _fun00002_ip = 334; continue _fun00001;
 288:
            oscard = {};
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            verify = 4;
            verify = yankee[verify];
            verify = offset.bind(entity)(verify);
            verify = verify.ObscuredMediaTypes;
            verify = verify.Embed;
            oscard['type'] = verify;
            oscard['media'] = zuuluu;
            golfie = oscard;
 334:
            if(!(report != golfie)) { _fun00002_ip = 373; continue _fun00001 }
 338:
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            report = 4;
            report = verify[report];
            oscard = oscard.bind(entity)(report);
            report = oscard.isMediaObscured;
            report = report.bind(oscard)(golfie, option);
            if(report) { _fun00002_ip = 427; continue _fun00001 }
 373:
            report = zuuluu.spoiler;
            zuuluu = new Array(2);
            if(report) { _fun00002_ip = 401; continue _fun00001 }
 386:
            report = false;
            zuuluu[0] = report;
            zuuluu[1] = entity;
            entity = zuuluu;
            _fun00002_ip = 425; continue _fun00001;
 401:
            report = argBar;
            zuuluu[0] = report;
            report = _closure1_slot9;
            report = report.SPOILER;
            zuuluu[1] = report;
            entity = zuuluu;
 425:
            _fun00002_ip = 454; continue _fun00001;
 427:
            zuuluu = new Array(2);
            report = true;
            zuuluu[0] = report;
            tangon = _closure1_slot9;
            tangon = tangon.EXPLICIT_CONTENT;
            zuuluu[1] = tangon;
            entity = zuuluu;
 454:
            return entity;
 456:
            entity = new Array(2);
            zuuluu = true;
            entity[0] = zuuluu;
            michal = _closure1_slot9;
            michal = michal.POTENTIAL_EXPLICIT_CONTENT;
            entity[1] = michal;
            return entity;
 482:
            entity = new Array(2);
            michal = false;
            entity[0] = michal;
            michal = undefined;
            entity[1] = michal;
            return entity;
        }
    };
    var _closure1_slot10 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = option[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = option[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = option[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = option[report];
    report = golfie.bind(entity)(report);
    oscard = report.MessageAttachmentFlags;
    var _closure1_slot6 = oscard;
    oscard = report.MessageEmbedFlags;
    var _closure1_slot7 = oscard;
    report = report.Permissions;
    var _closure1_slot8 = report;
    report = {};
    oscard = 'spoiler';
    report['SPOILER'] = oscard;
    oscard = 'explicit_content';
    report['EXPLICIT_CONTENT'] = oscard;
    oscard = 'potential_explicit_content';
    report['POTENTIAL_EXPLICIT_CONTENT'] = oscard;
    var _closure1_slot9 = report;
    oscard = 13;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/messages/MessageAttachmentUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['ObscureReason'] = report;
    report = function(argFoo, argBar) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            michal = entity.spoiler;
            zuuluu = entity.flags;
            oscard = undefined;
            report = 0;
            if(!(oscard !== zuuluu)) { _fun00004_ip = 25; continue _fun00003 }
 22:
            report = zuuluu;
 25:
            golfie = entity.content_scan_version;
            entity = argBar;
            if(!entity) { _fun00004_ip = 143; continue _fun00003 }
 37:
            tangon = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 4;
            zuuluu = option[zuuluu];
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = tangon.isPendingScanVersion;
            zuuluu = zuuluu.bind(tangon)(golfie);
            if(zuuluu) { _fun00004_ip = 223; continue _fun00003 }
 77:
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 5;
            zuuluu = golfie[zuuluu];
            golfie = tangon.bind(oscard)(zuuluu);
            tangon = golfie.hasFlag;
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.CONTAINS_EXPLICIT_MEDIA;
            zuuluu = tangon.bind(golfie)(report, zuuluu);
            if(zuuluu) { _fun00004_ip = 211; continue _fun00003 }
 122:
            golfie = _closure1_slot3;
            tangon = golfie.get;
            zuuluu = 'obscure_blur_effect_enabled';
            zuuluu = tangon.bind(golfie)(zuuluu);
            if(zuuluu) { _fun00004_ip = 211; continue _fun00003 }
 143:
            if(michal) { _fun00004_ip = 196; continue _fun00003 }
 146:
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 5;
            zuuluu = golfie[zuuluu];
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = tangon.hasFlag;
            michal = _closure1_slot6;
            michal = michal.IS_SPOILER;
            zuuluu = zuuluu.bind(tangon)(report, michal);
            michal = null;
            if(!zuuluu) { _fun00004_ip = 209; continue _fun00003 }
 196:
            zuuluu = _closure1_slot9;
            michal = zuuluu.SPOILER;
 209:
            return michal;
 211:
            michal = _closure1_slot9;
            michal = michal.EXPLICIT_CONTENT;
            return michal;
 223:
            entity = _closure1_slot9;
            entity = entity.POTENTIAL_EXPLICIT_CONTENT;
            return entity;
        }
    };
    zuuluu['getObscureReasonForAttachment'] = report;
    report = function(argFoo, argBar, argBaz, argCor, argGra) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            michal = entity.flags;
            report = undefined;
            oscard = 0;
            if(!(report !== michal)) { _fun00006_ip = 19; continue _fun00005 }
 16:
            oscard = michal;
 19:
            golfie = entity.contentScanVersion;
            option = _closure1_slot4;
            tangon = option.getMessage;
            zuuluu = argBar;
            entity = argBaz;
            zuuluu = tangon.bind(option)(zuuluu, entity);
            entity = null;
            if(!(entity != zuuluu)) { _fun00006_ip = 227; continue _fun00005 }
 59:
            tangon = argGra;
            if(!tangon) { _fun00006_ip = 195; continue _fun00005 }
 68:
            zuuluu = zuuluu.author;
            zuuluu = zuuluu.bot;
            if(zuuluu) { _fun00006_ip = 129; continue _fun00005 }
 83:
            tangon = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 4;
            zuuluu = option[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.isPendingScanVersion;
            zuuluu = zuuluu.bind(tangon)(golfie);
            if(!zuuluu) { _fun00006_ip = 129; continue _fun00005 }
 117:
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.POTENTIAL_EXPLICIT_CONTENT;
            return zuuluu;
 129:
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 5;
            zuuluu = golfie[zuuluu];
            report = tangon.bind(report)(zuuluu);
            tangon = report.hasFlag;
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.CONTAINS_EXPLICIT_MEDIA;
            zuuluu = tangon.bind(report)(oscard, zuuluu);
            if(zuuluu) { _fun00006_ip = 215; continue _fun00005 }
 174:
            report = _closure1_slot3;
            tangon = report.get;
            zuuluu = 'obscure_blur_effect_enabled';
            zuuluu = tangon.bind(report)(zuuluu);
            if(zuuluu) { _fun00006_ip = 215; continue _fun00005 }
 195:
            tangon = argCor;
            zuuluu = null;
            if(!tangon) { _fun00006_ip = 213; continue _fun00005 }
 203:
            tangon = _closure1_slot9;
            zuuluu = tangon.SPOILER;
 213:
            return zuuluu;
 215:
            michal = _closure1_slot9;
            michal = michal.EXPLICIT_CONTENT;
            return michal;
 227:
            return entity;
        }
    };
    zuuluu['getObscureReasonForEmbed'] = report;
    report = function(argFoo, argBar) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = arguments[2];
            entity = arguments[3];
            golfie = undefined;
            if(!(michal === golfie)) { _fun00008_ip = 14; continue _fun00007 }
 12:
            michal = false;
 14:
            if(!(entity === golfie)) { _fun00008_ip = 20; continue _fun00007 }
 18:
            entity = false;
 20:
            zuuluu = argFoo;
            zuuluu = zuuluu.contentScanMetadata;
            tangon = argBar;
            if(!tangon) { _fun00008_ip = 196; continue _fun00007 }
 38:
            if(entity) { _fun00008_ip = 90; continue _fun00007 }
 41:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 4;
            tangon = oscard[tangon];
            report = report.bind(golfie)(tangon);
            tangon = report.isPendingScan;
            tangon = tangon.bind(report)(zuuluu);
            if(!tangon) { _fun00008_ip = 90; continue _fun00007 }
 78:
            entity = _closure1_slot9;
            entity = entity.POTENTIAL_EXPLICIT_CONTENT;
            return entity;
 90:
            entity = null;
            tangon = entity == zuuluu;
            report = undefined;
            if(tangon) { _fun00008_ip = 106; continue _fun00007 }
 101:
            report = zuuluu.flags;
 106:
            if(!(entity != report)) { _fun00008_ip = 172; continue _fun00007 }
 110:
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            entity = 5;
            entity = option[entity];
            tangon = oscard.bind(golfie)(entity);
            zuuluu = tangon.hasFlag;
            entity = 6;
            entity = option[entity];
            entity = oscard.bind(golfie)(entity);
            entity = entity.ContentScanFlags;
            entity = entity.EXPLICIT;
            entity = zuuluu.bind(tangon)(report, entity);
            if(entity) { _fun00008_ip = 216; continue _fun00007 }
 172:
            tangon = _closure1_slot3;
            zuuluu = tangon.get;
            entity = 'obscure_blur_effect_enabled';
            entity = zuuluu.bind(tangon)(entity);
            if(entity) { _fun00008_ip = 216; continue _fun00007 }
 196:
            entity = null;
            if(!michal) { _fun00008_ip = 214; continue _fun00007 }
 201:
            michal = _closure1_slot9;
            entity = michal.SPOILER;
 214:
            return entity;
 216:
            entity = _closure1_slot9;
            entity = entity.EXPLICIT_CONTENT;
            return entity;
        }
    };
    zuuluu['getObscureReasonForUnfurledMediaItem'] = report;
    zuuluu['getForumPostShouldObscure'] = tangon;
    tangon = function(argFoo) { // Original name: useShouldObscure
        entity = argFoo;
        zuuluu = entity.channel;
        var _closure2_slot0 = zuuluu;
        report = entity.media;
        zuuluu = _closure1_slot0;
        verify = _closure1_slot2;
        tangon = 8;
        oscard = verify[tangon];
        tangon = undefined;
        option = zuuluu.bind(tangon)(oscard);
        golfie = option.useStateFromStores;
        offset = _closure1_slot5;
        oscard = new Array(1);
        oscard[0] = offset;
        michal = function() {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = _closure2_slot0;
                entity = null;
                entity = entity != zuuluu;
                if(!entity) { _fun00010_ip = 49; continue _fun00009 }
 16:
                report = _closure1_slot5;
                tangon = report.can;
                zuuluu = _closure1_slot8;
                zuuluu = zuuluu.MANAGE_MESSAGES;
                michal = _closure2_slot0;
                entity = tangon.bind(report)(zuuluu, michal);
 49:
                return entity;
            }
        };
        golfie = golfie.bind(option)(oscard, michal);
        michal = 9;
        michal = verify[michal];
        michal = zuuluu.bind(tangon)(michal);
        oscard = michal.RenderSpoilers;
        michal = oscard.useSetting;
        oscard = michal.bind(oscard)();
        michal = 10;
        michal = verify[michal];
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.useShouldRedactExplicitContentForForum;
        zuuluu = michal.bind(zuuluu)();
        michal = _closure1_slot10;
        option = _closure1_slot1;
        entity = 11;
        entity = verify[entity];
        entity = option.bind(tangon)(entity);
        entity = entity.bind(tangon)(oscard, golfie);
        entity = !entity;
        entity = michal.bind(tangon)(report, entity, zuuluu);
        return entity;
    };
    zuuluu['useShouldObscure'] = tangon;
    michal = function(argFoo) {
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = argFoo;
            michal = _closure1_slot9;
            michal = michal.EXPLICIT_CONTENT;
            if(!(michal !== zuuluu)) { _fun00012_ip = 99; continue _fun00011 }
 20:
            michal = _closure1_slot9;
            michal = michal.SPOILER;
            if(!(michal !== zuuluu)) { _fun00012_ip = 38; continue _fun00011 }
 34:
            michal = undefined;
            return michal;
 38:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 12;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.XpfDHx;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 99:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 12;
            michal = oscard[entity];
            tangon = undefined;
            michal = report.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.SEgHFh;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['getObscuredAlt'] = michal;
    return entity;
})();