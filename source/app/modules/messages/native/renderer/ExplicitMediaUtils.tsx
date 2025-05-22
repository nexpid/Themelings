// app/modules/messages/native/renderer/ExplicitMediaUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
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
            if(!(offset === zuuluu)) { _fun00002_ip = 70; continue _fun00001 }
 50:
            zuuluu = michal.contentScanVersion;
            report = undefined;
            if(!(report !== zuuluu)) { _fun00002_ip = 68; continue _fun00001 }
 62:
            report = michal.contentScanVersion;
 68:
            _fun00002_ip = 76; continue _fun00001;
 70:
            report = michal.content_scan_version;
 76:
            tangon = oscard;
            if(!oscard) { _fun00002_ip = 116; continue _fun00001 }
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
            if(!zuuluu) { _fun00002_ip = 168; continue _fun00001 }
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
            if(!oscard) { _fun00002_ip = 201; continue _fun00001 }
 171:
            golfie = _closure1_slot2;
            report = golfie.get;
            michal = 'obscure_blur_effect_enabled';
            michal = report.bind(golfie)(michal);
            if(michal) { _fun00002_ip = 198; continue _fun00001 }
 195:
            michal = zuuluu;
 198:
            oscard = michal;
 201:
            michal = oscard;
            if(!oscard) { _fun00002_ip = 210; continue _fun00001 }
 207:
            michal = entity;
 210:
            zuuluu = oscard;
            if(!zuuluu) { _fun00002_ip = 249; continue _fun00001 }
 216:
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            entity = 4;
            entity = golfie[entity];
            report = report.bind(offset)(entity);
            entity = report.isVerifiedTeen;
            zuuluu = entity.bind(report)();
 249:
            entity = {};
            report = option;
            if(!report) { _fun00002_ip = 263; continue _fun00001 }
 257:
            golfie = true;
            report = golfie === verify;
 263:
            entity['isSpoiler'] = report;
            report = '';
            golfie = report;
            if(!option) { _fun00002_ip = 355; continue _fun00001 }
 278:
            option = true;
            golfie = report;
            if(!(option === verify)) { _fun00002_ip = 355; continue _fun00001 }
 287:
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
 355:
            entity['spoiler'] = golfie;
            entity['obscure'] = oscard;
            if(!oscard) { _fun00002_ip = 426; continue _fun00001 }
 368:
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
 426:
            entity['obscureDescription'] = report;
            entity['obscureAwaitingScan'] = tangon;
            entity['verifyAge'] = michal;
            entity['obscureHideControls'] = zuuluu;
            if(michal) { _fun00002_ip = 452; continue _fun00001 }
 449:
            michal = zuuluu;
 452:
            entity['obscureIsOpaque'] = michal;
            return entity;
        }
    };
    zuuluu['getAttachmentObscurityProps'] = tangon;
    tangon = function(argFoo) { // Original name: getUnfurledMediaItemObscurityProps
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            option = entity.mediaItem;
            verify = entity.isSpoilered;
            zuuluu = entity.isAuthorBot;
            michal = entity.shouldObscureSpoiler;
            golfie = entity.shouldObscureExplicitMedia;
            entity = entity.shouldAgeVerify;
            oscard = option.contentScanMetadata;
            tangon = !zuuluu;
            if(!tangon) { _fun00004_ip = 87; continue _fun00003 }
 51:
            offset = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 2;
            report = report[zuuluu];
            zuuluu = undefined;
            report = offset.bind(zuuluu)(report);
            zuuluu = report.isPendingScan;
            tangon = zuuluu.bind(report)(oscard);
 87:
            if(!verify) { _fun00004_ip = 93; continue _fun00003 }
 90:
            verify = michal;
 93:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot1;
            yankee = 2;
            michal = foxtra[yankee];
            offset = undefined;
            report = romeon.bind(offset)(michal);
            zuuluu = report.isMediaObscured;
            michal = {};
            yankee = foxtra[yankee];
            yankee = romeon.bind(offset)(yankee);
            yankee = yankee.ObscuredMediaTypes;
            yankee = yankee.GenericMedia;
            michal['type'] = yankee;
            michal['media'] = option;
            golfie = zuuluu.bind(report)(michal, golfie);
            michal = golfie;
            if(!golfie) { _fun00004_ip = 171; continue _fun00003 }
 168:
            michal = entity;
 171:
            zuuluu = golfie;
            if(!zuuluu) { _fun00004_ip = 207; continue _fun00003 }
 177:
            report = _closure1_slot0;
            option = _closure1_slot1;
            entity = 4;
            entity = option[entity];
            report = report.bind(offset)(entity);
            entity = report.isVerifiedTeen;
            zuuluu = entity.bind(report)();
 207:
            entity = {};
            entity['isSpoiler'] = verify;
            option = null;
            if(!verify) { _fun00004_ip = 284; continue _fun00003 }
 219:
            foxtra = _closure1_slot0;
            backup = _closure1_slot1;
            verify = 5;
            yankee = backup[verify];
            yankee = foxtra.bind(offset)(yankee);
            romeon = yankee.intl;
            yankee = romeon.string;
            verify = backup[verify];
            verify = foxtra.bind(offset)(verify);
            verify = verify.t;
            verify = verify.F+x38P;
            yankee = yankee.bind(romeon)(verify);
            verify = yankee.toUpperCase;
            option = verify.bind(yankee)();
 284:
            entity['spoilerDescription'] = option;
            entity['isObscured'] = golfie;
            report = null;
            if(!golfie) { _fun00004_ip = 354; continue _fun00003 }
 299:
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
 354:
            entity['obscureDescription'] = report;
            entity['obscureAwaitingScan'] = tangon;
            entity['verifyAge'] = michal;
            entity['obscureHideControls'] = zuuluu;
            if(michal) { _fun00004_ip = 380; continue _fun00003 }
 377:
            michal = zuuluu;
 380:
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