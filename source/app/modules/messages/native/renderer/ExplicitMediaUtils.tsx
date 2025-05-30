// app/modules/messages/native/renderer/ExplicitMediaUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo) { // Original name: getSpoilerDescriptionForType
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = 'image';
            if(!(entity !== michal)) { _fun00002_ip = 237; continue _fun00001 }
 14:
            entity = 'video';
            if(!(entity !== michal)) { _fun00002_ip = 173; continue _fun00001 }
 25:
            entity = 'file';
            if(!(entity !== michal)) { _fun00002_ip = 109; continue _fun00001 }
 33:
            entity = 'generic';
            if(!(entity !== michal)) { _fun00002_ip = 45; continue _fun00001 }
 41:
            entity = undefined;
            return entity;
 45:
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 5;
            michal = oscard[entity];
            tangon = undefined;
            michal = report.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.G71b7+;
            entity = michal.bind(zuuluu)(entity);
            return entity;
 109:
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 5;
            michal = oscard[entity];
            tangon = undefined;
            michal = report.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.3Gc2XF;
            entity = michal.bind(zuuluu)(entity);
            return entity;
 173:
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 5;
            michal = oscard[entity];
            tangon = undefined;
            michal = report.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.ehBaMT;
            entity = michal.bind(zuuluu)(entity);
            return entity;
 237:
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 5;
            michal = oscard[entity];
            tangon = undefined;
            michal = report.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.sb2W2N;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot4 = entity;
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
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MessageAttachmentFlags;
    var _closure1_slot3 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/ExplicitMediaUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getAttachmentObscurityProps
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            michal = entity.attachment;
            option = entity.shouldObscureSpoiler;
            oscard = entity.shouldObscureExplicitMedia;
            entity = entity.shouldAgeVerify;
            verify = michal.spoiler;
            yankee = michal.flags;
            zuuluu = michal.content_scan_version;
            offset = undefined;
            if(!(offset === zuuluu)) { _fun00004_ip = 70; continue _fun00003 }
 50:
            zuuluu = michal.contentScanVersion;
            report = undefined;
            if(!(report !== zuuluu)) { _fun00004_ip = 68; continue _fun00003 }
 62:
            report = michal.contentScanVersion;
 68:
            _fun00004_ip = 76; continue _fun00003;
 70:
            report = michal.content_scan_version;
 76:
            tangon = oscard;
            if(!oscard) { _fun00004_ip = 116; continue _fun00003 }
 82:
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 2;
            michal = golfie[michal];
            zuuluu = zuuluu.bind(offset)(michal);
            michal = zuuluu.isPendingScanVersion;
            tangon = michal.bind(zuuluu)(report);
 116:
            zuuluu = offset !== yankee;
            if(!zuuluu) { _fun00004_ip = 168; continue _fun00003 }
 123:
            golfie = _closure1_slot0;
            romeon = _closure1_slot1;
            report = 3;
            report = romeon[report];
            golfie = golfie.bind(offset)(report);
            report = golfie.hasFlag;
            michal = _closure1_slot3;
            michal = michal.CONTAINS_EXPLICIT_MEDIA;
            zuuluu = report.bind(golfie)(yankee, michal);
 168:
            if(!oscard) { _fun00004_ip = 203; continue _fun00003 }
 171:
            golfie = _closure1_slot2;
            report = golfie.get;
            michal = 'obscure_blur_effect_enabled';
            michal = report.bind(golfie)(michal);
            if(michal) { _fun00004_ip = 200; continue _fun00003 }
 197:
            michal = zuuluu;
 200:
            oscard = michal;
 203:
            michal = oscard;
            if(!oscard) { _fun00004_ip = 212; continue _fun00003 }
 209:
            michal = entity;
 212:
            zuuluu = oscard;
            if(!zuuluu) { _fun00004_ip = 251; continue _fun00003 }
 218:
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            entity = 4;
            entity = golfie[entity];
            report = report.bind(offset)(entity);
            entity = report.isVerifiedTeen;
            zuuluu = entity.bind(report)();
 251:
            entity = {};
            report = option;
            if(!report) { _fun00004_ip = 265; continue _fun00003 }
 259:
            golfie = true;
            report = golfie === verify;
 265:
            entity['isSpoiler'] = report;
            report = '';
            golfie = report;
            if(!option) { _fun00004_ip = 357; continue _fun00003 }
 280:
            option = true;
            golfie = report;
            if(!(option === verify)) { _fun00004_ip = 357; continue _fun00003 }
 289:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot1;
            option = 5;
            verify = foxtra[option];
            verify = romeon.bind(offset)(verify);
            yankee = verify.intl;
            verify = yankee.string;
            option = foxtra[option];
            option = romeon.bind(offset)(option);
            option = option.t;
            option = option.F+x38P;
            verify = verify.bind(yankee)(option);
            option = verify.toUpperCase;
            golfie = option.bind(verify)();
 357:
            entity['spoiler'] = golfie;
            entity['obscure'] = oscard;
            if(!oscard) { _fun00004_ip = 428; continue _fun00003 }
 370:
            verify = _closure1_slot0;
            yankee = _closure1_slot1;
            oscard = 5;
            golfie = yankee[oscard];
            golfie = verify.bind(offset)(golfie);
            option = golfie.intl;
            golfie = option.string;
            oscard = yankee[oscard];
            oscard = verify.bind(offset)(oscard);
            oscard = oscard.t;
            oscard = oscard.SpxcUV;
            report = golfie.bind(option)(oscard);
 428:
            entity['obscureDescription'] = report;
            entity['obscureAwaitingScan'] = tangon;
            entity['verifyAge'] = michal;
            entity['obscureHideControls'] = zuuluu;
            if(michal) { _fun00004_ip = 454; continue _fun00003 }
 451:
            michal = zuuluu;
 454:
            entity['obscureIsOpaque'] = michal;
            return entity;
        }
    };
    zuuluu['getAttachmentObscurityProps'] = tangon;
    tangon = function(argFoo) { // Original name: getUnfurledMediaItemObscurityProps
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            yankee = entity.type;
            option = entity.mediaItem;
            verify = entity.isSpoilered;
            zuuluu = entity.isAuthorBot;
            michal = entity.shouldObscureSpoiler;
            golfie = entity.shouldObscureExplicitMedia;
            entity = entity.shouldAgeVerify;
            oscard = option.contentScanMetadata;
            tangon = !zuuluu;
            if(!tangon) { _fun00006_ip = 92; continue _fun00005 }
 56:
            offset = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 2;
            report = report[zuuluu];
            zuuluu = undefined;
            report = offset.bind(zuuluu)(report);
            zuuluu = report.isPendingScan;
            tangon = zuuluu.bind(report)(oscard);
 92:
            if(!verify) { _fun00006_ip = 98; continue _fun00005 }
 95:
            verify = michal;
 98:
            foxtra = _closure1_slot0;
            backup = _closure1_slot1;
            romeon = 2;
            michal = backup[romeon];
            offset = undefined;
            report = foxtra.bind(offset)(michal);
            zuuluu = report.isMediaObscured;
            michal = {};
            romeon = backup[romeon];
            romeon = foxtra.bind(offset)(romeon);
            romeon = romeon.ObscuredMediaTypes;
            romeon = romeon.GenericMedia;
            michal['type'] = romeon;
            michal['media'] = option;
            golfie = zuuluu.bind(report)(michal, golfie);
            michal = golfie;
            if(!golfie) { _fun00006_ip = 176; continue _fun00005 }
 173:
            michal = entity;
 176:
            zuuluu = golfie;
            if(!zuuluu) { _fun00006_ip = 212; continue _fun00005 }
 182:
            report = _closure1_slot0;
            option = _closure1_slot1;
            entity = 4;
            entity = option[entity];
            report = report.bind(offset)(entity);
            entity = report.isVerifiedTeen;
            zuuluu = entity.bind(report)();
 212:
            entity = {};
            entity['isSpoiler'] = verify;
            option = null;
            if(!verify) { _fun00006_ip = 233; continue _fun00005 }
 224:
            verify = _closure1_slot4;
            option = verify.bind(offset)(yankee);
 233:
            entity['spoilerDescription'] = option;
            entity['isObscured'] = golfie;
            report = null;
            if(!golfie) { _fun00006_ip = 303; continue _fun00005 }
 248:
            verify = _closure1_slot0;
            yankee = _closure1_slot1;
            oscard = 5;
            golfie = yankee[oscard];
            golfie = verify.bind(offset)(golfie);
            option = golfie.intl;
            golfie = option.string;
            oscard = yankee[oscard];
            oscard = verify.bind(offset)(oscard);
            oscard = oscard.t;
            oscard = oscard.SpxcUV;
            report = golfie.bind(option)(oscard);
 303:
            entity['obscureDescription'] = report;
            entity['obscureAwaitingScan'] = tangon;
            entity['verifyAge'] = michal;
            entity['obscureHideControls'] = zuuluu;
            if(michal) { _fun00006_ip = 329; continue _fun00005 }
 326:
            michal = zuuluu;
 329:
            entity['obscureIsOpaque'] = michal;
            return entity;
        }
    };
    zuuluu['getUnfurledMediaItemObscurityProps'] = tangon;
    michal = function() { // Original name: getAttachmentObscurityDefaults
        entity = {'isSpoiler': false, 'spoiler': ''};
        return entity;
    };
    zuuluu['getAttachmentObscurityDefaults'] = michal;
    return entity;
})();