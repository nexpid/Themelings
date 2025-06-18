// app/modules/explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    entity = 0;
    report = option[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    oscard = tangon.ExplicitContentFilterTypes;
    tangon = {};
    verify = oscard.DISABLED;
    report = verify.valueOf;
    offset = report.bind(verify)();
    report = 2;
    verify = option[report];
    verify = golfie.bind(entity)(verify);
    verify = verify.ExplicitContentRedaction;
    verify = verify.SHOW;
    tangon[offset] = verify;
    offset = oscard.NON_FRIENDS;
    verify = offset.valueOf;
    offset = verify.bind(offset)();
    verify = option[report];
    verify = golfie.bind(entity)(verify);
    verify = verify.ExplicitContentRedaction;
    verify = verify.SHOW;
    tangon[offset] = verify;
    offset = oscard.FRIENDS_AND_NON_FRIENDS;
    verify = offset.valueOf;
    offset = verify.bind(offset)();
    verify = option[report];
    verify = golfie.bind(entity)(verify);
    verify = verify.ExplicitContentRedaction;
    verify = verify.BLOCK;
    tangon[offset] = verify;
    var _closure1_slot3 = tangon;
    tangon = {};
    offset = oscard.DISABLED;
    verify = offset.valueOf;
    offset = verify.bind(offset)();
    verify = option[report];
    verify = golfie.bind(entity)(verify);
    verify = verify.ExplicitContentRedaction;
    verify = verify.SHOW;
    tangon[offset] = verify;
    offset = oscard.NON_FRIENDS;
    verify = offset.valueOf;
    offset = verify.bind(offset)();
    verify = option[report];
    verify = golfie.bind(entity)(verify);
    verify = verify.ExplicitContentRedaction;
    verify = verify.BLOCK;
    tangon[offset] = verify;
    offset = oscard.FRIENDS_AND_NON_FRIENDS;
    verify = offset.valueOf;
    offset = verify.bind(offset)();
    verify = option[report];
    verify = golfie.bind(entity)(verify);
    verify = verify.ExplicitContentRedaction;
    verify = verify.BLOCK;
    tangon[offset] = verify;
    var _closure1_slot4 = tangon;
    tangon = {};
    offset = oscard.DISABLED;
    verify = offset.valueOf;
    offset = verify.bind(offset)();
    verify = option[report];
    verify = golfie.bind(entity)(verify);
    verify = verify.ExplicitContentRedaction;
    verify = verify.BLUR;
    tangon[offset] = verify;
    offset = oscard.NON_FRIENDS;
    verify = offset.valueOf;
    offset = verify.bind(offset)();
    verify = option[report];
    verify = golfie.bind(entity)(verify);
    verify = verify.ExplicitContentRedaction;
    verify = verify.BLUR;
    tangon[offset] = verify;
    offset = oscard.FRIENDS_AND_NON_FRIENDS;
    verify = offset.valueOf;
    offset = verify.bind(offset)();
    verify = option[report];
    verify = golfie.bind(entity)(verify);
    verify = verify.ExplicitContentRedaction;
    verify = verify.BLOCK;
    tangon[offset] = verify;
    var _closure1_slot5 = tangon;
    tangon = {};
    offset = oscard.DISABLED;
    verify = offset.valueOf;
    offset = verify.bind(offset)();
    verify = option[report];
    verify = golfie.bind(entity)(verify);
    verify = verify.ExplicitContentRedaction;
    verify = verify.BLUR;
    tangon[offset] = verify;
    offset = oscard.NON_FRIENDS;
    verify = offset.valueOf;
    offset = verify.bind(offset)();
    verify = option[report];
    verify = golfie.bind(entity)(verify);
    verify = verify.ExplicitContentRedaction;
    verify = verify.BLOCK;
    tangon[offset] = verify;
    verify = oscard.FRIENDS_AND_NON_FRIENDS;
    oscard = verify.valueOf;
    oscard = oscard.bind(verify)();
    report = option[report];
    report = golfie.bind(entity)(report);
    report = report.ExplicitContentRedaction;
    report = report.BLOCK;
    tangon[oscard] = report;
    var _closure1_slot6 = tangon;
    report = function(argFoo) { // Original name: resolveExplicitContentSettingWithDefaults
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.setting;
            golfie = michal.isDm;
            report = undefined;
            if(!(golfie === report)) { _fun00002_ip = 23; continue _fun00001 }
 21:
            golfie = false;
 23:
            oscard = michal.isFriend;
            if(!(oscard === report)) { _fun00002_ip = 35; continue _fun00001 }
 33:
            oscard = false;
 35:
            tangon = null;
            if(!(tangon != entity)) { _fun00002_ip = 83; continue _fun00001 }
 41:
            zuuluu = _closure1_slot0;
            option = _closure1_slot1;
            michal = 2;
            michal = option[michal];
            michal = zuuluu.bind(report)(michal);
            michal = michal.ExplicitContentRedaction;
            michal = michal.UNSET_EXPLICIT_CONTENT_REDACTION;
            if(!(entity === michal)) { _fun00002_ip = 297; continue _fun00001 }
 83:
            option = _closure1_slot2;
            michal = option.getCurrentUser;
            michal = michal.bind(option)();
            verify = _closure1_slot0;
            option = _closure1_slot1;
            yankee = 3;
            option = option[yankee];
            verify = verify.bind(report)(option);
            option = verify.isEligibleForSensitiveContentDefaultsMixed;
            offset = 'resolveSettingWithDefaults';
            option = option.bind(verify)(offset);
            if(option) { _fun00002_ip = 274; continue _fun00001 }
 142:
            verify = _closure1_slot0;
            option = _closure1_slot1;
            option = option[yankee];
            verify = verify.bind(report)(option);
            option = verify.isEligibleForSensitiveContentDefaultsAllBlur;
            option = option.bind(verify)(offset);
            if(option) { _fun00002_ip = 240; continue _fun00001 }
 173:
            option = tangon == michal;
            tangon = undefined;
            if(option) { _fun00002_ip = 188; continue _fun00001 }
 182:
            tangon = michal.nsfwAllowed;
 188:
            michal = false;
            if(!(michal !== tangon)) { _fun00002_ip = 217; continue _fun00001 }
 194:
            tangon = _closure1_slot8;
            michal = {};
            michal['isDm'] = golfie;
            michal['isFriend'] = oscard;
            michal = tangon.bind(report)(michal);
            _fun00002_ip = 238; continue _fun00001;
 217:
            option = _closure1_slot9;
            tangon = {};
            tangon['isDm'] = golfie;
            tangon['isFriend'] = oscard;
            michal = option.bind(report)(tangon);
 238:
            _fun00002_ip = 272; continue _fun00001;
 240:
            option = _closure1_slot0;
            verify = _closure1_slot1;
            tangon = 2;
            tangon = verify[tangon];
            tangon = option.bind(report)(tangon);
            tangon = tangon.ExplicitContentRedaction;
            michal = tangon.BLUR;
 272:
            _fun00002_ip = 295; continue _fun00001;
 274:
            tangon = _closure1_slot10;
            zuuluu = {};
            zuuluu['isDm'] = golfie;
            zuuluu['isFriend'] = oscard;
            michal = tangon.bind(report)(zuuluu);
 295:
            return michal;
 297:
            return entity;
        }
    };
    var _closure1_slot7 = report;
    tangon = function(argFoo) { // Original name: resolveSettingWithDefaultsForAdult
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.isDm;
            report = undefined;
            if(!(zuuluu === report)) { _fun00004_ip = 17; continue _fun00003 }
 15:
            zuuluu = false;
 17:
            entity = entity.isFriend;
            if(!(entity === report)) { _fun00004_ip = 29; continue _fun00003 }
 27:
            entity = false;
 29:
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            if(zuuluu) { _fun00004_ip = 69; continue _fun00003 }
 43:
            zuuluu = 2;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.ExplicitContentRedaction;
            zuuluu = zuuluu.SHOW;
            return zuuluu;
 69:
            zuuluu = 4;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = zuuluu.ExplicitContentFilter;
            zuuluu = tangon.getSetting;
            zuuluu = zuuluu.bind(tangon)();
            if(entity) { _fun00004_ip = 110; continue _fun00003 }
 100:
            entity = _closure1_slot4;
            entity = entity[zuuluu];
            _fun00004_ip = 118; continue _fun00003;
 110:
            michal = _closure1_slot3;
            entity = michal[zuuluu];
 118:
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    tangon = function(argFoo) { // Original name: resolveSettingWithDefaultsForTeen
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.isDm;
            report = undefined;
            if(!(zuuluu === report)) { _fun00006_ip = 17; continue _fun00005 }
 15:
            zuuluu = false;
 17:
            entity = entity.isFriend;
            if(!(entity === report)) { _fun00006_ip = 29; continue _fun00005 }
 27:
            entity = false;
 29:
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            if(zuuluu) { _fun00006_ip = 69; continue _fun00005 }
 43:
            zuuluu = 2;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.ExplicitContentRedaction;
            zuuluu = zuuluu.BLUR;
            return zuuluu;
 69:
            zuuluu = 4;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = zuuluu.ExplicitContentFilter;
            zuuluu = tangon.getSetting;
            zuuluu = zuuluu.bind(tangon)();
            if(entity) { _fun00006_ip = 110; continue _fun00005 }
 100:
            entity = _closure1_slot6;
            entity = entity[zuuluu];
            _fun00006_ip = 118; continue _fun00005;
 110:
            michal = _closure1_slot5;
            entity = michal[zuuluu];
 118:
            return entity;
        }
    };
    var _closure1_slot9 = tangon;
    tangon = function(argFoo) { // Original name: resultDefaultSettingsForSensitiveContentDefaultsMixed
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            michal = entity.isDm;
            tangon = undefined;
            if(!(michal === tangon)) { _fun00008_ip = 17; continue _fun00007 }
 15:
            michal = false;
 17:
            entity = entity.isFriend;
            if(!(entity === tangon)) { _fun00008_ip = 29; continue _fun00007 }
 27:
            entity = false;
 29:
            if(!michal) { _fun00008_ip = 72; continue _fun00007 }
 32:
            if(entity) { _fun00008_ip = 72; continue _fun00007 }
 35:
            michal = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 2;
            entity = zuuluu[entity];
            entity = michal.bind(tangon)(entity);
            entity = entity.ExplicitContentRedaction;
            entity = entity.BLOCK;
            _fun00008_ip = 107; continue _fun00007;
 72:
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 2;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.ExplicitContentRedaction;
            entity = michal.BLUR;
 107:
            return entity;
        }
    };
    var _closure1_slot10 = tangon;
    tangon = function(argFoo) { // Original name: getExplicitContentSettingOrDefault
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            oscard = argFoo;
            report = null;
            if(!(report == oscard)) { _fun00010_ip = 50; continue _fun00009 }
 9:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 4;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            michal = entity.ExplicitContentSettings;
            entity = michal.getSetting;
            oscard = entity.bind(michal)();
 50:
            entity = {};
            golfie = _closure1_slot7;
            zuuluu = {};
            verify = report == oscard;
            tangon = undefined;
            option = undefined;
            if(verify) { _fun00010_ip = 78; continue _fun00009 }
 72:
            option = oscard.explicitContentGuilds;
 78:
            zuuluu['setting'] = option;
            zuuluu = golfie.bind(tangon)(zuuluu);
            entity['explicitContentGuilds'] = zuuluu;
            golfie = _closure1_slot7;
            zuuluu = {};
            verify = report == oscard;
            option = undefined;
            if(verify) { _fun00010_ip = 114; continue _fun00009 }
 108:
            option = oscard.explicitContentNonFriendDm;
 114:
            zuuluu['setting'] = option;
            option = true;
            zuuluu['isDm'] = option;
            zuuluu = golfie.bind(tangon)(zuuluu);
            entity['explicitContentNonFriendDm'] = zuuluu;
            zuuluu = _closure1_slot7;
            michal = {'setting': null, 'isDm': true, 'isFriend': true};
            golfie = report == oscard;
            report = undefined;
            if(golfie) { _fun00010_ip = 169; continue _fun00009 }
 163:
            report = oscard.explicitContentFriendDm;
 169:
            michal['setting'] = report;
            michal = zuuluu.bind(tangon)(michal);
            entity['explicitContentFriendDm'] = michal;
            return entity;
        }
    };
    var _closure1_slot11 = tangon;
    oscard = 6;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['resolveExplicitContentSettingWithDefaults'] = report;
    zuuluu['getExplicitContentSettingOrDefault'] = tangon;
    tangon = function(argFoo) {
        zuuluu = _closure1_slot11;
        entity = undefined;
        oscard = zuuluu.bind(entity)();
        zuuluu = _closure1_slot0;
        tangon = _closure1_slot1;
        michal = 4;
        michal = tangon[michal];
        michal = zuuluu.bind(entity)(michal);
        tangon = michal.ExplicitContentSettings;
        zuuluu = tangon.updateSetting;
        michal = {};
        golfie = michal;
        report = copyDataProperties(golfie, oscard);
        oscard = argFoo;
        golfie = michal;
        report = copyDataProperties(golfie, oscard);
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['updateExplicitContentSetting'] = tangon;
    michal = function() { // Original name: shouldRedactMessageMediaForForum
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = _closure1_slot2;
            michal = zuuluu.getCurrentUser;
            zuuluu = michal.bind(zuuluu)();
            michal = null;
            if(!(michal != zuuluu)) { _fun00012_ip = 71; continue _fun00011 }
 22:
            michal = _closure1_slot11;
            tangon = undefined;
            michal = michal.bind(tangon)();
            zuuluu = michal.explicitContentGuilds;
            michal = _closure1_slot0;
            report = _closure1_slot1;
            entity = 5;
            entity = report[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.getShouldObscureForSetting;
            entity = entity.bind(michal)(zuuluu);
            return entity;
 71:
            entity = false;
            return entity;
        }
    };
    zuuluu['shouldRedactMessageMediaForForum'] = michal;
    return entity;
})();