// app/modules/explicit_media_redaction/HarmTypeConfiguration.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    entity = global;
    report = entity.Object;
    tangon = report.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(report)(zuuluu, entity, michal);
    oscard = 0;
    michal = option[oscard];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    foxtra = michal.MessageAttachmentFlags;
    romeon = michal.MessageEmbedFlags;
    report = {};
    michal = 'explicit';
    report['EXPLICIT'] = michal;
    michal = 'gore';
    report['GORE'] = michal;
    tangon = {};
    tangon['NONE'] = oscard;
    michal = 'NONE';
    tangon[oscard] = michal;
    backup = 1;
    tangon['EXPLICIT'] = backup;
    michal = 'EXPLICIT';
    tangon[backup] = michal;
    yankee = 2;
    tangon['GORE'] = yankee;
    michal = 'GORE';
    tangon[yankee] = michal;
    oscard = 3;
    tangon['ALL'] = oscard;
    michal = 'ALL';
    tangon[oscard] = michal;
    michal = {};
    verify = report.EXPLICIT;
    oscard = {};
    kiloes = report.EXPLICIT;
    oscard['harmType'] = kiloes;
    kiloes = option[backup];
    kiloes = golfie.bind(entity)(kiloes);
    kiloes = kiloes.ObscureReason;
    kiloes = kiloes.EXPLICIT_CONTENT;
    oscard['obscureReason'] = kiloes;
    kiloes = foxtra.CONTAINS_EXPLICIT_MEDIA;
    oscard['attachmentFlag'] = kiloes;
    kiloes = romeon.CONTAINS_EXPLICIT_MEDIA;
    oscard['embedFlag'] = kiloes;
    kiloes = option[yankee];
    kiloes = golfie.bind(entity)(kiloes);
    kiloes = kiloes.ContentScanFlags;
    kiloes = kiloes.EXPLICIT;
    oscard['genericMediaFlag'] = kiloes;
    kiloes = tangon.EXPLICIT;
    oscard['bitmask'] = kiloes;
    kiloes = 'obscure_blur_effect_explicit_content_enabled';
    oscard['devSettingKey'] = kiloes;
    kiloes = function(argFoo) { // Original name: getProtoUserSettings
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            report = null;
            zuuluu = report == entity;
            michal = undefined;
            tangon = undefined;
            if(zuuluu) { _fun00002_ip = 37; continue _fun00001 }
 16:
            entity = entity.textAndImages;
            zuuluu = report == entity;
            tangon = undefined;
            if(zuuluu) { _fun00002_ip = 37; continue _fun00001 }
 31:
            tangon = entity.explicitContentSettings;
 37:
            entity = {};
            option = _closure1_slot0;
            oscard = _closure1_slot1;
            golfie = 3;
            oscard = oscard[golfie];
            oscard = option.bind(michal)(oscard);
            oscard = oscard.ContentHarmTypeChannel;
            option = oscard.GUILD;
            verify = report == tangon;
            oscard = undefined;
            if(verify) { _fun00002_ip = 89; continue _fun00001 }
 83:
            oscard = tangon.explicitContentGuilds;
 89:
            entity[option] = oscard;
            option = _closure1_slot0;
            oscard = _closure1_slot1;
            oscard = oscard[golfie];
            oscard = option.bind(michal)(oscard);
            oscard = oscard.ContentHarmTypeChannel;
            option = oscard.FRIEND_DM;
            verify = report == tangon;
            oscard = undefined;
            if(verify) { _fun00002_ip = 138; continue _fun00001 }
 132:
            oscard = tangon.explicitContentFriendDm;
 138:
            entity[option] = oscard;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[golfie];
            zuuluu = oscard.bind(michal)(zuuluu);
            zuuluu = zuuluu.ContentHarmTypeChannel;
            zuuluu = zuuluu.NON_FRIEND_DM;
            report = report == tangon;
            michal = undefined;
            if(report) { _fun00002_ip = 187; continue _fun00001 }
 181:
            michal = tangon.explicitContentNonFriendDm;
 187:
            entity[zuuluu] = michal;
            return entity;
        }
    };
    oscard['getProtoUserSettings'] = kiloes;
    kiloes = function(argFoo) { // Original name: getUserSettingsWithDefaults
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            verify = argFoo;
            golfie = null;
            if(!(golfie == verify)) { _fun00004_ip = 250; continue _fun00003 }
 12:
            entity = {};
            offset = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 3;
            oscard = report[zuuluu];
            michal = undefined;
            oscard = offset.bind(michal)(oscard);
            oscard = oscard.ContentHarmTypeChannel;
            option = oscard.GUILD;
            oscard = 4;
            report = report[oscard];
            report = offset.bind(michal)(report);
            offset = report.ExplicitContentSettings;
            report = offset.getSetting;
            offset = report.bind(offset)();
            yankee = golfie == offset;
            report = undefined;
            if(yankee) { _fun00004_ip = 94; continue _fun00003 }
 88:
            report = offset.explicitContentGuilds;
 94:
            entity[option] = report;
            offset = _closure1_slot0;
            report = _closure1_slot1;
            option = report[zuuluu];
            option = offset.bind(michal)(option);
            option = option.ContentHarmTypeChannel;
            option = option.FRIEND_DM;
            report = report[oscard];
            report = offset.bind(michal)(report);
            offset = report.ExplicitContentSettings;
            report = offset.getSetting;
            offset = report.bind(offset)();
            yankee = golfie == offset;
            report = undefined;
            if(yankee) { _fun00004_ip = 168; continue _fun00003 }
 162:
            report = offset.explicitContentFriendDm;
 168:
            entity[option] = report;
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = tangon[zuuluu];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.ContentHarmTypeChannel;
            zuuluu = zuuluu.NON_FRIEND_DM;
            tangon = tangon[oscard];
            tangon = report.bind(michal)(tangon);
            report = tangon.ExplicitContentSettings;
            tangon = report.getSetting;
            tangon = tangon.bind(report)();
            report = golfie == tangon;
            michal = undefined;
            if(report) { _fun00004_ip = 242; continue _fun00003 }
 236:
            michal = tangon.explicitContentNonFriendDm;
 242:
            entity[zuuluu] = michal;
            verify = entity;
 250:
            entity = {};
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            romeon = 3;
            zuuluu = michal[romeon];
            yankee = undefined;
            zuuluu = tangon.bind(yankee)(zuuluu);
            zuuluu = zuuluu.ContentHarmTypeChannel;
            zuuluu = zuuluu.GUILD;
            report = 5;
            michal = michal[report];
            oscard = tangon.bind(yankee)(michal);
            tangon = oscard.resolveExplicitContentSettingWithDefaults;
            michal = {};
            foxtra = golfie == verify;
            offset = undefined;
            if(foxtra) { _fun00004_ip = 351; continue _fun00003 }
 318:
            backup = _closure1_slot0;
            foxtra = _closure1_slot1;
            foxtra = foxtra[romeon];
            foxtra = backup.bind(yankee)(foxtra);
            foxtra = foxtra.ContentHarmTypeChannel;
            foxtra = foxtra.GUILD;
            offset = verify[foxtra];
 351:
            michal['setting'] = offset;
            michal = tangon.bind(oscard)(michal);
            entity[zuuluu] = michal;
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            zuuluu = michal[romeon];
            zuuluu = tangon.bind(yankee)(zuuluu);
            zuuluu = zuuluu.ContentHarmTypeChannel;
            zuuluu = zuuluu.FRIEND_DM;
            michal = michal[report];
            offset = tangon.bind(yankee)(michal);
            tangon = offset.resolveExplicitContentSettingWithDefaults;
            michal = {'setting': null, 'isDm': true, 'isFriend': true};
            foxtra = golfie == verify;
            oscard = undefined;
            if(foxtra) { _fun00004_ip = 466; continue _fun00003 }
 433:
            backup = _closure1_slot0;
            foxtra = _closure1_slot1;
            foxtra = foxtra[romeon];
            foxtra = backup.bind(yankee)(foxtra);
            foxtra = foxtra.ContentHarmTypeChannel;
            foxtra = foxtra.FRIEND_DM;
            oscard = verify[foxtra];
 466:
            michal['setting'] = oscard;
            oscard = true;
            michal = tangon.bind(offset)(michal);
            entity[zuuluu] = michal;
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            zuuluu = michal[romeon];
            zuuluu = tangon.bind(yankee)(zuuluu);
            zuuluu = zuuluu.ContentHarmTypeChannel;
            zuuluu = zuuluu.NON_FRIEND_DM;
            michal = michal[report];
            report = tangon.bind(yankee)(michal);
            tangon = report.resolveExplicitContentSettingWithDefaults;
            michal = {};
            offset = golfie == verify;
            golfie = undefined;
            if(offset) { _fun00004_ip = 572; continue _fun00003 }
 539:
            offset = _closure1_slot0;
            option = _closure1_slot1;
            option = option[romeon];
            option = offset.bind(yankee)(option);
            option = option.ContentHarmTypeChannel;
            option = option.NON_FRIEND_DM;
            golfie = verify[option];
 572:
            michal['setting'] = golfie;
            michal['isDm'] = oscard;
            michal = tangon.bind(report)(michal);
            entity[zuuluu] = michal;
            return entity;
        }
    };
    oscard['getUserSettingsWithDefaults'] = kiloes;
    michal[verify] = oscard;
    verify = report.GORE;
    oscard = {};
    kiloes = report.GORE;
    oscard['harmType'] = kiloes;
    backup = option[backup];
    backup = golfie.bind(entity)(backup);
    backup = backup.ObscureReason;
    backup = backup.GORE_CONTENT;
    oscard['obscureReason'] = backup;
    foxtra = foxtra.CONTAINS_GORE_CONTENT;
    oscard['attachmentFlag'] = foxtra;
    romeon = romeon.CONTAINS_GORE_CONTENT;
    oscard['embedFlag'] = romeon;
    yankee = option[yankee];
    yankee = golfie.bind(entity)(yankee);
    yankee = yankee.ContentScanFlags;
    yankee = yankee.GORE;
    oscard['genericMediaFlag'] = yankee;
    yankee = tangon.GORE;
    oscard['bitmask'] = yankee;
    yankee = 'obscure_blur_effect_gore_content_enabled';
    oscard['devSettingKey'] = yankee;
    yankee = function(argFoo) { // Original name: getProtoUserSettings
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            report = null;
            zuuluu = report == entity;
            michal = undefined;
            tangon = undefined;
            if(zuuluu) { _fun00006_ip = 37; continue _fun00005 }
 16:
            entity = entity.textAndImages;
            zuuluu = report == entity;
            tangon = undefined;
            if(zuuluu) { _fun00006_ip = 37; continue _fun00005 }
 31:
            tangon = entity.goreContentSettings;
 37:
            entity = {};
            option = _closure1_slot0;
            oscard = _closure1_slot1;
            golfie = 3;
            oscard = oscard[golfie];
            oscard = option.bind(michal)(oscard);
            oscard = oscard.ContentHarmTypeChannel;
            option = oscard.GUILD;
            verify = report == tangon;
            oscard = undefined;
            if(verify) { _fun00006_ip = 89; continue _fun00005 }
 83:
            oscard = tangon.goreContentGuilds;
 89:
            entity[option] = oscard;
            option = _closure1_slot0;
            oscard = _closure1_slot1;
            oscard = oscard[golfie];
            oscard = option.bind(michal)(oscard);
            oscard = oscard.ContentHarmTypeChannel;
            option = oscard.FRIEND_DM;
            verify = report == tangon;
            oscard = undefined;
            if(verify) { _fun00006_ip = 138; continue _fun00005 }
 132:
            oscard = tangon.goreContentFriendDm;
 138:
            entity[option] = oscard;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[golfie];
            zuuluu = oscard.bind(michal)(zuuluu);
            zuuluu = zuuluu.ContentHarmTypeChannel;
            zuuluu = zuuluu.NON_FRIEND_DM;
            report = report == tangon;
            michal = undefined;
            if(report) { _fun00006_ip = 187; continue _fun00005 }
 181:
            michal = tangon.goreContentNonFriendDm;
 187:
            entity[zuuluu] = michal;
            return entity;
        }
    };
    oscard['getProtoUserSettings'] = yankee;
    yankee = function(argFoo) { // Original name: getUserSettingsWithDefaults
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            verify = argFoo;
            golfie = null;
            if(!(golfie == verify)) { _fun00008_ip = 250; continue _fun00007 }
 12:
            entity = {};
            offset = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 3;
            oscard = report[zuuluu];
            michal = undefined;
            oscard = offset.bind(michal)(oscard);
            oscard = oscard.ContentHarmTypeChannel;
            option = oscard.GUILD;
            oscard = 4;
            report = report[oscard];
            report = offset.bind(michal)(report);
            offset = report.GoreContentSettings;
            report = offset.getSetting;
            offset = report.bind(offset)();
            yankee = golfie == offset;
            report = undefined;
            if(yankee) { _fun00008_ip = 94; continue _fun00007 }
 88:
            report = offset.goreContentGuilds;
 94:
            entity[option] = report;
            offset = _closure1_slot0;
            report = _closure1_slot1;
            option = report[zuuluu];
            option = offset.bind(michal)(option);
            option = option.ContentHarmTypeChannel;
            option = option.FRIEND_DM;
            report = report[oscard];
            report = offset.bind(michal)(report);
            offset = report.GoreContentSettings;
            report = offset.getSetting;
            offset = report.bind(offset)();
            yankee = golfie == offset;
            report = undefined;
            if(yankee) { _fun00008_ip = 168; continue _fun00007 }
 162:
            report = offset.goreContentFriendDm;
 168:
            entity[option] = report;
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = tangon[zuuluu];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.ContentHarmTypeChannel;
            zuuluu = zuuluu.NON_FRIEND_DM;
            tangon = tangon[oscard];
            tangon = report.bind(michal)(tangon);
            report = tangon.GoreContentSettings;
            tangon = report.getSetting;
            tangon = tangon.bind(report)();
            report = golfie == tangon;
            michal = undefined;
            if(report) { _fun00008_ip = 242; continue _fun00007 }
 236:
            michal = tangon.goreContentNonFriendDm;
 242:
            entity[zuuluu] = michal;
            verify = entity;
 250:
            entity = {};
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            romeon = 3;
            zuuluu = michal[romeon];
            yankee = undefined;
            zuuluu = tangon.bind(yankee)(zuuluu);
            zuuluu = zuuluu.ContentHarmTypeChannel;
            zuuluu = zuuluu.GUILD;
            report = 6;
            michal = michal[report];
            oscard = tangon.bind(yankee)(michal);
            tangon = oscard.resolveGoreSettingWithDefaults;
            michal = {};
            foxtra = golfie == verify;
            offset = undefined;
            if(foxtra) { _fun00008_ip = 351; continue _fun00007 }
 318:
            backup = _closure1_slot0;
            foxtra = _closure1_slot1;
            foxtra = foxtra[romeon];
            foxtra = backup.bind(yankee)(foxtra);
            foxtra = foxtra.ContentHarmTypeChannel;
            foxtra = foxtra.GUILD;
            offset = verify[foxtra];
 351:
            michal['setting'] = offset;
            michal = tangon.bind(oscard)(michal);
            entity[zuuluu] = michal;
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            zuuluu = michal[romeon];
            zuuluu = tangon.bind(yankee)(zuuluu);
            zuuluu = zuuluu.ContentHarmTypeChannel;
            zuuluu = zuuluu.FRIEND_DM;
            michal = michal[report];
            offset = tangon.bind(yankee)(michal);
            tangon = offset.resolveGoreSettingWithDefaults;
            michal = {'setting': null, 'isDm': true, 'isFriend': true};
            foxtra = golfie == verify;
            oscard = undefined;
            if(foxtra) { _fun00008_ip = 466; continue _fun00007 }
 433:
            backup = _closure1_slot0;
            foxtra = _closure1_slot1;
            foxtra = foxtra[romeon];
            foxtra = backup.bind(yankee)(foxtra);
            foxtra = foxtra.ContentHarmTypeChannel;
            foxtra = foxtra.FRIEND_DM;
            oscard = verify[foxtra];
 466:
            michal['setting'] = oscard;
            oscard = true;
            michal = tangon.bind(offset)(michal);
            entity[zuuluu] = michal;
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            zuuluu = michal[romeon];
            zuuluu = tangon.bind(yankee)(zuuluu);
            zuuluu = zuuluu.ContentHarmTypeChannel;
            zuuluu = zuuluu.NON_FRIEND_DM;
            michal = michal[report];
            report = tangon.bind(yankee)(michal);
            tangon = report.resolveGoreSettingWithDefaults;
            michal = {};
            offset = golfie == verify;
            golfie = undefined;
            if(offset) { _fun00008_ip = 572; continue _fun00007 }
 539:
            offset = _closure1_slot0;
            option = _closure1_slot1;
            option = option[romeon];
            option = offset.bind(yankee)(option);
            option = option.ContentHarmTypeChannel;
            option = option.NON_FRIEND_DM;
            golfie = verify[option];
 572:
            michal['setting'] = golfie;
            michal['isDm'] = oscard;
            michal = tangon.bind(report)(michal);
            entity[zuuluu] = michal;
            return entity;
        }
    };
    oscard['getUserSettingsWithDefaults'] = yankee;
    offset = function() { // Original name: isEligible
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.isEligibleForSensitiveContentGoreExperiment;
        entity = 'ContentPolicyRegistry';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    oscard['isEligible'] = offset;
    michal[verify] = oscard;
    oscard = 8;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/explicit_media_redaction/HarmTypeConfiguration.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['ContentHarmType'] = report;
    zuuluu['ContentHarmTypeBitMask'] = tangon;
    zuuluu['CONTENT_SCAN_TYPE_REGISTRY'] = michal;
    return entity;
})();