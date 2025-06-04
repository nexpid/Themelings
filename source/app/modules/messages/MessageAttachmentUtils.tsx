// app/modules/messages/MessageAttachmentUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    verify = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = offset;
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
    report = global;
    yankee = report.Object;
    option = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = option.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = offset[entity];
    entity = undefined;
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = offset[oscard];
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 2;
    oscard = offset[oscard];
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 3;
    oscard = offset[oscard];
    oscard = verify.bind(entity)(oscard);
    golfie = oscard.MessageAttachmentFlags;
    var _closure1_slot6 = golfie;
    golfie = oscard.MessageEmbedFlags;
    var _closure1_slot7 = golfie;
    oscard = oscard.Permissions;
    var _closure1_slot8 = oscard;
    golfie = {};
    oscard = 'spoiler';
    golfie['SPOILER'] = oscard;
    oscard = 'explicit_content';
    golfie['EXPLICIT_CONTENT'] = oscard;
    oscard = 'potential_explicit_content';
    golfie['POTENTIAL_EXPLICIT_CONTENT'] = oscard;
    oscard = 'gore_content';
    golfie['GORE_CONTENT'] = oscard;
    var _closure1_slot9 = golfie;
    yankee = report.Set;
    option = golfie.EXPLICIT_CONTENT;
    oscard = new Array(3);
    oscard[0] = option;
    option = golfie.GORE_CONTENT;
    oscard[1] = option;
    option = golfie.POTENTIAL_EXPLICIT_CONTENT;
    oscard[2] = option;
    option = yankee.prototype;
    option = Object.create(option, {constructor: {value: yankee}});
    kiloes = option;
    backup = oscard;
    oscard = new kiloes[yankee](backup, foxtra);
    oscard = oscard instanceof Object ? oscard : option;
    yankee = report.Set;
    option = golfie.EXPLICIT_CONTENT;
    report = new Array(1);
    report[0] = option;
    option = yankee.prototype;
    option = Object.create(option, {constructor: {value: yankee}});
    kiloes = option;
    backup = report;
    report = new kiloes[yankee](backup, foxtra);
    report = report instanceof Object ? report : option;
    option = 13;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/messages/MessageAttachmentUtils.tsx';
    option = verify.bind(offset)(option);
    zuuluu['ObscureReason'] = golfie;
    zuuluu['SENSITIVE_CONTENT_OBSCURABLE_REASONS'] = oscard;
    zuuluu['AGE_VERIFICATION_OBSCURABLE_REASONS'] = report;
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
            if(!entity) { _fun00004_ip = 219; continue _fun00003 }
 40:
            tangon = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 4;
            zuuluu = option[zuuluu];
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = tangon.isPendingScanVersion;
            zuuluu = zuuluu.bind(tangon)(golfie);
            if(zuuluu) { _fun00004_ip = 311; continue _fun00003 }
 80:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            golfie = 5;
            zuuluu = zuuluu[golfie];
            option = tangon.bind(oscard)(zuuluu);
            tangon = option.hasFlag;
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.CONTAINS_EXPLICIT_MEDIA;
            zuuluu = tangon.bind(option)(report, zuuluu);
            if(zuuluu) { _fun00004_ip = 299; continue _fun00003 }
 128:
            option = _closure1_slot3;
            tangon = option.get;
            zuuluu = 'obscure_blur_effect_explicit_content_enabled';
            zuuluu = tangon.bind(option)(zuuluu);
            if(zuuluu) { _fun00004_ip = 299; continue _fun00003 }
 154:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            golfie = tangon.bind(oscard)(zuuluu);
            tangon = golfie.hasFlag;
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.CONTAINS_GORE_CONTENT;
            zuuluu = tangon.bind(golfie)(report, zuuluu);
            if(zuuluu) { _fun00004_ip = 287; continue _fun00003 }
 196:
            golfie = _closure1_slot3;
            tangon = golfie.get;
            zuuluu = 'obscure_blur_effect_gore_content_enabled';
            zuuluu = tangon.bind(golfie)(zuuluu);
            if(zuuluu) { _fun00004_ip = 287; continue _fun00003 }
 219:
            if(michal) { _fun00004_ip = 272; continue _fun00003 }
 222:
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
            if(!zuuluu) { _fun00004_ip = 285; continue _fun00003 }
 272:
            zuuluu = _closure1_slot9;
            michal = zuuluu.SPOILER;
 285:
            return michal;
 287:
            michal = _closure1_slot9;
            michal = michal.GORE_CONTENT;
            return michal;
 299:
            michal = _closure1_slot9;
            michal = michal.EXPLICIT_CONTENT;
            return michal;
 311:
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
            if(!(entity != zuuluu)) { _fun00006_ip = 306; continue _fun00005 }
 59:
            tangon = argGra;
            if(!tangon) { _fun00006_ip = 262; continue _fun00005 }
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
            zuuluu = _closure1_slot2;
            golfie = 5;
            zuuluu = zuuluu[golfie];
            option = tangon.bind(report)(zuuluu);
            tangon = option.hasFlag;
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.CONTAINS_EXPLICIT_MEDIA;
            zuuluu = tangon.bind(option)(oscard, zuuluu);
            if(zuuluu) { _fun00006_ip = 294; continue _fun00005 }
 174:
            option = _closure1_slot3;
            tangon = option.get;
            zuuluu = 'obscure_blur_effect_explicit_content_enabled';
            zuuluu = tangon.bind(option)(zuuluu);
            if(zuuluu) { _fun00006_ip = 294; continue _fun00005 }
 197:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            report = tangon.bind(report)(zuuluu);
            tangon = report.hasFlag;
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.CONTAINS_GORE_CONTENT;
            zuuluu = tangon.bind(report)(oscard, zuuluu);
            if(zuuluu) { _fun00006_ip = 282; continue _fun00005 }
 239:
            report = _closure1_slot3;
            tangon = report.get;
            zuuluu = 'obscure_blur_effect_gore_content_enabled';
            zuuluu = tangon.bind(report)(zuuluu);
            if(zuuluu) { _fun00006_ip = 282; continue _fun00005 }
 262:
            tangon = argCor;
            zuuluu = null;
            if(!tangon) { _fun00006_ip = 280; continue _fun00005 }
 270:
            tangon = _closure1_slot9;
            zuuluu = tangon.SPOILER;
 280:
            return zuuluu;
 282:
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.GORE_CONTENT;
            return zuuluu;
 294:
            michal = _closure1_slot9;
            michal = michal.EXPLICIT_CONTENT;
            return michal;
 306:
            return entity;
        }
    };
    zuuluu['getObscureReasonForEmbed'] = report;
    report = function(argFoo, argBar) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = arguments[2];
            michal = arguments[3];
            option = undefined;
            if(!(zuuluu === option)) { _fun00008_ip = 14; continue _fun00007 }
 12:
            zuuluu = false;
 14:
            if(!(michal === option)) { _fun00008_ip = 20; continue _fun00007 }
 18:
            michal = false;
 20:
            entity = argFoo;
            entity = entity.contentScanMetadata;
            tangon = argBar;
            if(!tangon) { _fun00008_ip = 287; continue _fun00007 }
 38:
            if(michal) { _fun00008_ip = 90; continue _fun00007 }
 41:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 4;
            tangon = oscard[tangon];
            report = report.bind(option)(tangon);
            tangon = report.isPendingScan;
            tangon = tangon.bind(report)(entity);
            if(!tangon) { _fun00008_ip = 90; continue _fun00007 }
 78:
            michal = _closure1_slot9;
            michal = michal.POTENTIAL_EXPLICIT_CONTENT;
            return michal;
 90:
            michal = null;
            tangon = michal == entity;
            oscard = undefined;
            if(tangon) { _fun00008_ip = 106; continue _fun00007 }
 101:
            oscard = entity.flags;
 106:
            if(!(michal != oscard)) { _fun00008_ip = 175; continue _fun00007 }
 110:
            golfie = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 5;
            entity = verify[entity];
            report = golfie.bind(option)(entity);
            tangon = report.hasFlag;
            entity = 6;
            entity = verify[entity];
            entity = golfie.bind(option)(entity);
            entity = entity.ContentScanFlags;
            entity = entity.EXPLICIT;
            entity = tangon.bind(report)(oscard, entity);
            if(entity) { _fun00008_ip = 319; continue _fun00007 }
 175:
            golfie = _closure1_slot3;
            report = golfie.get;
            tangon = 'obscure_blur_effect_explicit_content_enabled';
            tangon = report.bind(golfie)(tangon);
            if(tangon) { _fun00008_ip = 319; continue _fun00007 }
 201:
            if(!(michal != oscard)) { _fun00008_ip = 264; continue _fun00007 }
 205:
            golfie = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 5;
            michal = verify[michal];
            report = golfie.bind(option)(michal);
            tangon = report.hasFlag;
            michal = 6;
            michal = verify[michal];
            michal = golfie.bind(option)(michal);
            michal = michal.ContentScanFlags;
            michal = michal.GORE;
            michal = tangon.bind(report)(oscard, michal);
            if(michal) { _fun00008_ip = 307; continue _fun00007 }
 264:
            report = _closure1_slot3;
            tangon = report.get;
            michal = 'obscure_blur_effect_gore_content_enabled';
            michal = tangon.bind(report)(michal);
            if(michal) { _fun00008_ip = 307; continue _fun00007 }
 287:
            michal = null;
            if(!zuuluu) { _fun00008_ip = 305; continue _fun00007 }
 292:
            zuuluu = _closure1_slot9;
            michal = zuuluu.SPOILER;
 305:
            return michal;
 307:
            entity = _closure1_slot9;
            entity = entity.GORE_CONTENT;
            return entity;
 319:
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
            if(!(michal !== zuuluu)) { _fun00012_ip = 113; continue _fun00011 }
 20:
            michal = _closure1_slot9;
            michal = michal.GORE_CONTENT;
            if(!(michal !== zuuluu)) { _fun00012_ip = 113; continue _fun00011 }
 34:
            michal = _closure1_slot9;
            michal = michal.SPOILER;
            if(!(michal !== zuuluu)) { _fun00012_ip = 52; continue _fun00011 }
 48:
            michal = undefined;
            return michal;
 52:
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
 113:
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