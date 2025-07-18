// app/modules/explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot2 = tangon;
    tangon = 1;
    report = option[tangon];
    tangon = argBaz;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.HelpdeskArticles;
    var _closure1_slot4 = tangon;
    report = function(argFoo) { // Original name: resolveGoreSettingWithDefaults
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
            michal = 3;
            michal = option[michal];
            michal = zuuluu.bind(report)(michal);
            michal = michal.ExplicitContentRedaction;
            michal = michal.UNSET_EXPLICIT_CONTENT_REDACTION;
            if(!(entity === michal)) { _fun00002_ip = 297; continue _fun00001 }
 83:
            option = _closure1_slot3;
            michal = option.getCurrentUser;
            michal = michal.bind(option)();
            verify = _closure1_slot0;
            option = _closure1_slot1;
            yankee = 4;
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
            tangon = _closure1_slot7;
            michal = {};
            michal['isDm'] = golfie;
            michal['isFriend'] = oscard;
            michal = tangon.bind(report)(michal);
            _fun00002_ip = 238; continue _fun00001;
 217:
            option = _closure1_slot8;
            tangon = {};
            tangon['isDm'] = golfie;
            tangon['isFriend'] = oscard;
            michal = option.bind(report)(tangon);
 238:
            _fun00002_ip = 272; continue _fun00001;
 240:
            option = _closure1_slot0;
            verify = _closure1_slot1;
            tangon = 3;
            tangon = verify[tangon];
            tangon = option.bind(report)(tangon);
            tangon = tangon.ExplicitContentRedaction;
            michal = tangon.BLUR;
 272:
            _fun00002_ip = 295; continue _fun00001;
 274:
            tangon = _closure1_slot6;
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
    var _closure1_slot5 = report;
    tangon = function(argFoo) { // Original name: resultDefaultSettingsForSensitiveContentDefaultsMixed
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            michal = entity.isDm;
            tangon = undefined;
            if(!(michal === tangon)) { _fun00004_ip = 17; continue _fun00003 }
 15:
            michal = false;
 17:
            entity = entity.isFriend;
            if(!(entity === tangon)) { _fun00004_ip = 29; continue _fun00003 }
 27:
            entity = false;
 29:
            if(!michal) { _fun00004_ip = 72; continue _fun00003 }
 32:
            if(entity) { _fun00004_ip = 72; continue _fun00003 }
 35:
            michal = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 3;
            entity = zuuluu[entity];
            entity = michal.bind(tangon)(entity);
            entity = entity.ExplicitContentRedaction;
            entity = entity.BLOCK;
            _fun00004_ip = 107; continue _fun00003;
 72:
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 3;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.ExplicitContentRedaction;
            entity = michal.BLUR;
 107:
            return entity;
        }
    };
    var _closure1_slot6 = tangon;
    tangon = function(argFoo) { // Original name: resolveGoreSettingWithDefaultsForAdult
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            entity = michal.isDm;
            tangon = undefined;
            if(!(entity === tangon)) { _fun00006_ip = 17; continue _fun00005 }
 15:
            entity = false;
 17:
            michal = michal.isFriend;
            if(!(michal === tangon)) { _fun00006_ip = 29; continue _fun00005 }
 27:
            michal = false;
 29:
            if(!entity) { _fun00006_ip = 35; continue _fun00005 }
 32:
            if(michal) { _fun00006_ip = 83; continue _fun00005 }
 35:
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 3;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.ExplicitContentRedaction;
            if(entity) { _fun00006_ip = 75; continue _fun00005 }
 67:
            entity = michal.SHOW;
            _fun00006_ip = 81; continue _fun00005;
 75:
            entity = michal.BLOCK;
 81:
            _fun00006_ip = 118; continue _fun00005;
 83:
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 3;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.ExplicitContentRedaction;
            entity = michal.SHOW;
 118:
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
    tangon = function(argFoo) { // Original name: resolveGoreSettingWithDefaultsForTeen
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            entity = michal.isDm;
            tangon = undefined;
            if(!(entity === tangon)) { _fun00008_ip = 17; continue _fun00007 }
 15:
            entity = false;
 17:
            michal = michal.isFriend;
            if(!(michal === tangon)) { _fun00008_ip = 29; continue _fun00007 }
 27:
            michal = false;
 29:
            if(!entity) { _fun00008_ip = 35; continue _fun00007 }
 32:
            if(michal) { _fun00008_ip = 83; continue _fun00007 }
 35:
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 3;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.ExplicitContentRedaction;
            if(entity) { _fun00008_ip = 75; continue _fun00007 }
 67:
            entity = michal.BLUR;
            _fun00008_ip = 81; continue _fun00007;
 75:
            entity = michal.BLOCK;
 81:
            _fun00008_ip = 118; continue _fun00007;
 83:
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 3;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.ExplicitContentRedaction;
            entity = michal.BLUR;
 118:
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    tangon = function(argFoo) { // Original name: getGoreContentSettingOrDefault
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            oscard = argFoo;
            report = null;
            if(!(report == oscard)) { _fun00010_ip = 50; continue _fun00009 }
 9:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            michal = entity.GoreContentSettings;
            entity = michal.getSetting;
            oscard = entity.bind(michal)();
 50:
            entity = {};
            golfie = _closure1_slot5;
            zuuluu = {};
            verify = report == oscard;
            tangon = undefined;
            option = undefined;
            if(verify) { _fun00010_ip = 78; continue _fun00009 }
 72:
            option = oscard.goreContentGuilds;
 78:
            zuuluu['setting'] = option;
            zuuluu = golfie.bind(tangon)(zuuluu);
            entity['goreContentGuilds'] = zuuluu;
            golfie = _closure1_slot5;
            zuuluu = {};
            verify = report == oscard;
            option = undefined;
            if(verify) { _fun00010_ip = 114; continue _fun00009 }
 108:
            option = oscard.goreContentNonFriendDm;
 114:
            zuuluu['setting'] = option;
            option = true;
            zuuluu['isDm'] = option;
            zuuluu = golfie.bind(tangon)(zuuluu);
            entity['goreContentNonFriendDm'] = zuuluu;
            zuuluu = _closure1_slot5;
            michal = {'setting': null, 'isDm': true, 'isFriend': true};
            golfie = report == oscard;
            report = undefined;
            if(golfie) { _fun00010_ip = 165; continue _fun00009 }
 159:
            report = oscard.goreContentFriendDm;
 165:
            michal['setting'] = report;
            michal = zuuluu.bind(tangon)(michal);
            entity['goreContentFriendDm'] = michal;
            return entity;
        }
    };
    var _closure1_slot9 = tangon;
    oscard = 6;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['resolveGoreSettingWithDefaults'] = report;
    zuuluu['getGoreContentSettingOrDefault'] = tangon;
    tangon = function(argFoo) {
        zuuluu = _closure1_slot9;
        entity = undefined;
        oscard = zuuluu.bind(entity)();
        zuuluu = _closure1_slot0;
        tangon = _closure1_slot1;
        michal = 5;
        michal = tangon[michal];
        michal = zuuluu.bind(entity)(michal);
        tangon = michal.GoreContentSettings;
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
    zuuluu['updateGoreContentSetting'] = tangon;
    michal = function() {
        tangon = _closure1_slot2;
        zuuluu = tangon.useMemo;
        michal = function() {
            entity = _closure1_slot4;
            entity = entity.EXPLICIT_MEDIA_REDACTION;
            return entity;
        };
        entity = new Array(0);
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useSensitiveContentFilterHelpArticle'] = michal;
    return entity;
})();