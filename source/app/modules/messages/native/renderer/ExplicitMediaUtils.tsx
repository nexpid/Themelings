// app/modules/messages/native/renderer/ExplicitMediaUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
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
            entity = 3;
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
            entity = 3;
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
            entity = 3;
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
            entity = 3;
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
    var _closure1_slot3 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = function(argFoo) { // Original name: getContentScanVersionFromMedia
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.content_scan_version;
            michal = undefined;
            if(!(michal === zuuluu)) { _fun00004_ip = 35; continue _fun00003 }
 15:
            zuuluu = entity.contentScanVersion;
            michal = undefined;
            if(!(michal !== zuuluu)) { _fun00004_ip = 33; continue _fun00003 }
 27:
            michal = entity.contentScanVersion;
 33:
            return michal;
 35:
            entity = entity.content_scan_version;
            return entity;
        }
    };
    var _closure1_slot2 = entity;
    entity = 4;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/ExplicitMediaUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getAttachmentObscurityProps
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            tangon = entity.attachment;
            verify = entity.shouldObscureSpoiler;
            option = entity.enabledContentHarmTypeFlags;
            entity = entity.shouldAgeVerify;
            yankee = tangon.spoiler;
            romeon = {};
            michal = _closure1_slot2;
            offset = undefined;
            golfie = michal.bind(offset)(tangon);
            michal = null;
            foxtra = michal != golfie;
            zuuluu = 0;
            report = 0;
            if(!foxtra) { _fun00006_ip = 65; continue _fun00005 }
 62:
            report = golfie;
 65:
            romeon['contentScanVersion'] = report;
            tangon = tangon.flags;
            report = michal != tangon;
            michal = 0;
            if(!report) { _fun00006_ip = 87; continue _fun00005 }
 84:
            michal = tangon;
 87:
            romeon['flags'] = michal;
            backup = _closure1_slot0;
            kiloes = _closure1_slot1;
            michal = kiloes[zuuluu];
            report = backup.bind(offset)(michal);
            tangon = report.getMediaObscuredReasonFromBitmask;
            michal = {};
            foxtra = 1;
            golfie = kiloes[foxtra];
            golfie = backup.bind(offset)(golfie);
            golfie = golfie.ObscuredMediaTypes;
            golfie = golfie.Attachment;
            michal['type'] = golfie;
            michal['media'] = romeon;
            michal = tangon.bind(report)(michal, option);
            tangon = kiloes[zuuluu];
            golfie = backup.bind(offset)(tangon);
            report = golfie.isMediaScanPending;
            tangon = {};
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(offset)(foxtra);
            foxtra = foxtra.ObscuredMediaTypes;
            foxtra = foxtra.Attachment;
            tangon['type'] = foxtra;
            tangon['media'] = romeon;
            tangon = report.bind(golfie)(tangon, option);
            michal = michal.length;
            golfie = michal > zuuluu;
            michal = golfie;
            if(!golfie) { _fun00006_ip = 226; continue _fun00005 }
 223:
            michal = entity;
 226:
            zuuluu = golfie;
            if(!zuuluu) { _fun00006_ip = 262; continue _fun00005 }
 232:
            report = _closure1_slot0;
            option = _closure1_slot1;
            entity = 2;
            entity = option[entity];
            report = report.bind(offset)(entity);
            entity = report.isVerifiedTeen;
            zuuluu = entity.bind(report)();
 262:
            entity = {};
            report = verify;
            if(!report) { _fun00006_ip = 276; continue _fun00005 }
 270:
            option = true;
            report = option === yankee;
 276:
            entity['isSpoiler'] = report;
            report = '';
            option = report;
            if(!verify) { _fun00006_ip = 365; continue _fun00005 }
 291:
            verify = true;
            option = report;
            if(!(verify === yankee)) { _fun00006_ip = 365; continue _fun00005 }
 300:
            foxtra = _closure1_slot0;
            backup = _closure1_slot1;
            verify = 3;
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
 365:
            entity['spoiler'] = option;
            entity['obscure'] = golfie;
            if(!golfie) { _fun00006_ip = 433; continue _fun00005 }
 378:
            verify = _closure1_slot0;
            yankee = _closure1_slot1;
            oscard = 3;
            golfie = yankee[oscard];
            golfie = verify.bind(offset)(golfie);
            option = golfie.intl;
            golfie = option.string;
            oscard = yankee[oscard];
            oscard = verify.bind(offset)(oscard);
            oscard = oscard.t;
            oscard = oscard.SpxcUV;
            report = golfie.bind(option)(oscard);
 433:
            entity['obscureDescription'] = report;
            entity['obscureAwaitingScan'] = tangon;
            entity['verifyAge'] = michal;
            entity['obscureHideControls'] = zuuluu;
            if(michal) { _fun00006_ip = 459; continue _fun00005 }
 456:
            michal = zuuluu;
 459:
            entity['obscureIsOpaque'] = michal;
            return entity;
        }
    };
    zuuluu['getAttachmentObscurityProps'] = tangon;
    tangon = function(argFoo) { // Original name: getUnfurledMediaItemObscurityProps
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            yankee = entity.type;
            backup = entity.mediaItem;
            verify = entity.isSpoilered;
            tangon = entity.isAuthorBot;
            report = entity.shouldObscureSpoiler;
            foxtra = entity.enabledContentHarmTypeFlags;
            entity = entity.shouldAgeVerify;
            kiloes = _closure1_slot0;
            romeon = _closure1_slot1;
            zuuluu = 0;
            michal = romeon[zuuluu];
            offset = undefined;
            option = kiloes.bind(offset)(michal);
            golfie = option.getMediaObscuredReasonFromBitmask;
            michal = {};
            output = 1;
            romeon = romeon[output];
            romeon = kiloes.bind(offset)(romeon);
            romeon = romeon.ObscuredMediaTypes;
            romeon = romeon.GenericMedia;
            michal['type'] = romeon;
            michal['media'] = backup;
            michal = golfie.bind(option)(michal, foxtra);
            tangon = !tangon;
            if(!tangon) { _fun00008_ip = 182; continue _fun00007 }
 121:
            sizing = _closure1_slot0;
            kiloes = _closure1_slot1;
            golfie = kiloes[zuuluu];
            romeon = sizing.bind(offset)(golfie);
            option = romeon.isMediaScanPending;
            golfie = {};
            kiloes = kiloes[output];
            kiloes = sizing.bind(offset)(kiloes);
            kiloes = kiloes.ObscuredMediaTypes;
            kiloes = kiloes.GenericMedia;
            golfie['type'] = kiloes;
            golfie['media'] = backup;
            tangon = option.bind(romeon)(golfie, foxtra);
 182:
            if(!verify) { _fun00008_ip = 188; continue _fun00007 }
 185:
            verify = report;
 188:
            michal = michal.length;
            golfie = michal > zuuluu;
            michal = golfie;
            if(!golfie) { _fun00008_ip = 206; continue _fun00007 }
 203:
            michal = entity;
 206:
            zuuluu = golfie;
            if(!zuuluu) { _fun00008_ip = 242; continue _fun00007 }
 212:
            report = _closure1_slot0;
            option = _closure1_slot1;
            entity = 2;
            entity = option[entity];
            report = report.bind(offset)(entity);
            entity = report.isVerifiedTeen;
            zuuluu = entity.bind(report)();
 242:
            entity = {};
            entity['isSpoiler'] = verify;
            option = null;
            if(!verify) { _fun00008_ip = 263; continue _fun00007 }
 254:
            verify = _closure1_slot3;
            option = verify.bind(offset)(yankee);
 263:
            entity['spoilerDescription'] = option;
            entity['isObscured'] = golfie;
            report = null;
            if(!golfie) { _fun00008_ip = 333; continue _fun00007 }
 278:
            verify = _closure1_slot0;
            yankee = _closure1_slot1;
            oscard = 3;
            golfie = yankee[oscard];
            golfie = verify.bind(offset)(golfie);
            option = golfie.intl;
            golfie = option.string;
            oscard = yankee[oscard];
            oscard = verify.bind(offset)(oscard);
            oscard = oscard.t;
            oscard = oscard.SpxcUV;
            report = golfie.bind(option)(oscard);
 333:
            entity['obscureDescription'] = report;
            entity['obscureAwaitingScan'] = tangon;
            entity['verifyAge'] = michal;
            entity['obscureHideControls'] = zuuluu;
            if(michal) { _fun00008_ip = 359; continue _fun00007 }
 356:
            michal = zuuluu;
 359:
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