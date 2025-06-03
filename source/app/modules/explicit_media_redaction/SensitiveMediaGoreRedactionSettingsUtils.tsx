// app/modules/explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    report = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = option[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = option[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = option[tangon];
    tangon = report.bind(entity)(tangon);
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
            if(!(tangon != entity)) { _fun00002_ip = 80; continue _fun00001 }
 41:
            zuuluu = _closure1_slot0;
            option = _closure1_slot1;
            michal = 3;
            michal = option[michal];
            michal = zuuluu.bind(report)(michal);
            michal = michal.ExplicitContentRedaction;
            michal = michal.UNSET_EXPLICIT_CONTENT_REDACTION;
            if(!(entity === michal)) { _fun00002_ip = 163; continue _fun00001 }
 80:
            option = _closure1_slot4;
            michal = option.getCurrentUser;
            michal = michal.bind(option)();
            option = tangon == michal;
            tangon = undefined;
            if(option) { _fun00002_ip = 111; continue _fun00001 }
 105:
            tangon = michal.nsfwAllowed;
 111:
            michal = false;
            if(!(michal !== tangon)) { _fun00002_ip = 140; continue _fun00001 }
 117:
            tangon = _closure1_slot6;
            michal = {};
            michal['isDm'] = golfie;
            michal['isFriend'] = oscard;
            michal = tangon.bind(report)(michal);
            _fun00002_ip = 161; continue _fun00001;
 140:
            tangon = _closure1_slot7;
            zuuluu = {};
            zuuluu['isDm'] = golfie;
            zuuluu['isFriend'] = oscard;
            michal = tangon.bind(report)(zuuluu);
 161:
            return michal;
 163:
            return entity;
        }
    };
    var _closure1_slot5 = report;
    tangon = function(argFoo) { // Original name: resolveGoreSettingWithDefaultsForAdult
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            entity = michal.isDm;
            tangon = undefined;
            if(!(entity === tangon)) { _fun00004_ip = 17; continue _fun00003 }
 15:
            entity = false;
 17:
            michal = michal.isFriend;
            if(!(michal === tangon)) { _fun00004_ip = 29; continue _fun00003 }
 27:
            michal = false;
 29:
            if(!entity) { _fun00004_ip = 35; continue _fun00003 }
 32:
            if(michal) { _fun00004_ip = 83; continue _fun00003 }
 35:
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 3;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.ExplicitContentRedaction;
            if(entity) { _fun00004_ip = 75; continue _fun00003 }
 67:
            entity = michal.SHOW;
            _fun00004_ip = 81; continue _fun00003;
 75:
            entity = michal.BLOCK;
 81:
            _fun00004_ip = 118; continue _fun00003;
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
    var _closure1_slot6 = tangon;
    tangon = function(argFoo) { // Original name: resolveGoreSettingWithDefaultsForTeen
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            michal = entity.isDm;
            tangon = undefined;
            if(!(michal === tangon)) { _fun00006_ip = 17; continue _fun00005 }
 15:
            michal = false;
 17:
            entity = entity.isFriend;
            if(!(entity === tangon)) { _fun00006_ip = 29; continue _fun00005 }
 27:
            entity = false;
 29:
            if(!michal) { _fun00006_ip = 35; continue _fun00005 }
 32:
            if(entity) { _fun00006_ip = 72; continue _fun00005 }
 35:
            michal = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 3;
            entity = zuuluu[entity];
            entity = michal.bind(tangon)(entity);
            entity = entity.ExplicitContentRedaction;
            entity = entity.BLOCK;
            _fun00006_ip = 107; continue _fun00005;
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
    var _closure1_slot7 = tangon;
    tangon = function() { // Original name: getGoreContentSettingOrDefault
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 4;
            entity = tangon[entity];
            tangon = undefined;
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = entity.GoreContentSettings;
            entity = zuuluu.getSetting;
            oscard = entity.bind(zuuluu)();
            entity = {};
            golfie = _closure1_slot5;
            zuuluu = {};
            report = null;
            verify = report == oscard;
            option = undefined;
            if(verify) { _fun00008_ip = 66; continue _fun00007 }
 60:
            option = oscard.goreContentGuilds;
 66:
            zuuluu['setting'] = option;
            zuuluu = golfie.bind(tangon)(zuuluu);
            entity['goreContentGuilds'] = zuuluu;
            golfie = _closure1_slot5;
            zuuluu = {};
            verify = report == oscard;
            option = undefined;
            if(verify) { _fun00008_ip = 102; continue _fun00007 }
 96:
            option = oscard.goreContentNonFriendDm;
 102:
            zuuluu['setting'] = option;
            option = true;
            zuuluu['isDm'] = option;
            zuuluu = golfie.bind(tangon)(zuuluu);
            entity['goreContentNonFriendDm'] = zuuluu;
            zuuluu = _closure1_slot5;
            michal = {'setting': null, 'isDm': true, 'isFriend': true};
            golfie = report == oscard;
            report = undefined;
            if(golfie) { _fun00008_ip = 157; continue _fun00007 }
 151:
            report = oscard.goreContentFriendDm;
 157:
            michal['setting'] = report;
            michal = zuuluu.bind(tangon)(michal);
            entity['goreContentFriendDm'] = michal;
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    oscard = 7;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['resolveGoreSettingWithDefaults'] = report;
    zuuluu['getGoreContentSettingOrDefault'] = tangon;
    tangon = function(argFoo) { // Original name: shouldRedactGoreContent
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argFoo;
            michal = _closure1_slot4;
            entity = michal.getCurrentUser;
            entity = entity.bind(michal)();
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 5;
            michal = oscard[michal];
            golfie = undefined;
            oscard = report.bind(golfie)(michal);
            report = oscard.isEligibleForSensitiveContentGoreExperiment;
            michal = 'shouldRedactGoreContent';
            michal = report.bind(oscard)(michal);
            if(michal) { _fun00010_ip = 65; continue _fun00009 }
 61:
            michal = false;
            return michal;
 65:
            verify = null;
            if(!(verify != entity)) { _fun00010_ip = 340; continue _fun00009 }
 74:
            report = zuuluu.author;
            oscard = verify == report;
            michal = undefined;
            if(oscard) { _fun00010_ip = 94; continue _fun00009 }
 89:
            michal = report.id;
 94:
            entity = entity.id;
            if(!(michal !== entity)) { _fun00010_ip = 340; continue _fun00009 }
 106:
            entity = _closure1_slot8;
            entity = entity.bind(golfie)();
            offset = entity.goreContentGuilds;
            oscard = entity.goreContentFriendDm;
            option = entity.goreContentNonFriendDm;
            report = _closure1_slot2;
            michal = report.getChannel;
            entity = zuuluu.channel_id;
            report = michal.bind(report)(entity);
            entity = verify != report;
            if(!entity) { _fun00010_ip = 338; continue _fun00009 }
 161:
            michal = report.isDM;
            michal = michal.bind(report)();
            if(michal) { _fun00010_ip = 220; continue _fun00009 }
 174:
            michal = report.isGroupDM;
            michal = michal.bind(report)();
            if(michal) { _fun00010_ip = 220; continue _fun00009 }
 187:
            report = _closure1_slot0;
            yankee = _closure1_slot1;
            michal = 6;
            michal = yankee[michal];
            report = report.bind(golfie)(michal);
            michal = report.getShouldObscureForSetting;
            michal = michal.bind(report)(offset);
            _fun00010_ip = 335; continue _fun00009;
 220:
            report = zuuluu.author;
            if(!(verify != report)) { _fun00010_ip = 268; continue _fun00009 }
 230:
            verify = _closure1_slot3;
            report = verify.getFriendIDs;
            verify = report.bind(verify)();
            report = verify.includes;
            zuuluu = zuuluu.author;
            zuuluu = zuuluu.id;
            zuuluu = report.bind(verify)(zuuluu);
            if(zuuluu) { _fun00010_ip = 301; continue _fun00009 }
 268:
            report = _closure1_slot0;
            verify = _closure1_slot1;
            zuuluu = 6;
            zuuluu = verify[zuuluu];
            report = report.bind(golfie)(zuuluu);
            zuuluu = report.getShouldObscureForSetting;
            zuuluu = zuuluu.bind(report)(option);
            _fun00010_ip = 332; continue _fun00009;
 301:
            report = _closure1_slot0;
            option = _closure1_slot1;
            tangon = 6;
            tangon = option[tangon];
            report = report.bind(golfie)(tangon);
            tangon = report.getShouldObscureForSetting;
            zuuluu = tangon.bind(report)(oscard);
 332:
            michal = zuuluu;
 335:
            entity = michal;
 338:
            return entity;
 340:
            entity = false;
            return entity;
        }
    };
    zuuluu['shouldRedactGoreContent'] = tangon;
    tangon = function(argFoo) {
        zuuluu = _closure1_slot8;
        entity = undefined;
        oscard = zuuluu.bind(entity)();
        zuuluu = _closure1_slot0;
        tangon = _closure1_slot1;
        michal = 4;
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
    michal = function() { // Original name: shouldRedactGoreContentForForum
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = _closure1_slot4;
            michal = zuuluu.getCurrentUser;
            zuuluu = michal.bind(zuuluu)();
            michal = null;
            if(!(michal != zuuluu)) { _fun00012_ip = 71; continue _fun00011 }
 22:
            michal = _closure1_slot8;
            tangon = undefined;
            michal = michal.bind(tangon)();
            zuuluu = michal.goreContentGuilds;
            michal = _closure1_slot0;
            report = _closure1_slot1;
            entity = 6;
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
    zuuluu['shouldRedactGoreContentForForum'] = michal;
    return entity;
})();