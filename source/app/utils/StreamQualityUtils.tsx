// app/utils/StreamQualityUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    report = function(argFoo) { // Original name: isPremiumRequirement
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.quality;
            zuuluu = null;
            entity = zuuluu != entity;
            if(entity) { _fun00002_ip = 28; continue _fun00001 }
 18:
            michal = michal.guildPremiumTier;
            entity = zuuluu != michal;
 28:
            return entity;
        }
    };
    var _closure1_slot14 = report;
    tangon = function(argFoo, argBar, argBaz) { // Original name: getPremiumRequirement
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        zuuluu = _closure1_slot10;
        michal = zuuluu.find;
        entity = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = argFoo;
                zuuluu = michal.preset;
                entity = null;
                entity = entity == zuuluu;
                if(entity) { _fun00004_ip = 35; continue _fun00003 }
 18:
                tangon = michal.preset;
                zuuluu = _closure2_slot0;
                entity = tangon === zuuluu;
 35:
                if(!entity) { _fun00004_ip = 55; continue _fun00003 }
 38:
                tangon = michal.resolution;
                zuuluu = _closure2_slot1;
                entity = tangon === zuuluu;
 55:
                if(!entity) { _fun00004_ip = 75; continue _fun00003 }
 58:
                zuuluu = michal.fps;
                michal = _closure2_slot2;
                entity = zuuluu === michal;
 75:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot15 = tangon;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 3;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.AnalyticEvents;
    var _closure1_slot6 = oscard;
    oscard = 4;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.ApplicationStreamResolutions;
    var _closure1_slot7 = verify;
    verify = oscard.getApplicationResolution;
    var _closure1_slot8 = verify;
    verify = oscard.getApplicationFramerate;
    var _closure1_slot9 = verify;
    verify = oscard.ApplicationStreamSettingRequirements;
    var _closure1_slot10 = verify;
    oscard = oscard.ApplicationStreamFPS;
    var _closure1_slot11 = oscard;
    oscard = 5;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.StreamQualitiesToPremiumType;
    var _closure1_slot12 = oscard;
    oscard = 6;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.ResolutionTypes;
    var _closure1_slot13 = oscard;
    oscard = 9;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'utils/StreamQualityUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo) { // Original name: isPremiumResolution
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00006_ip = 15; continue _fun00005 }
 11:
            tangon = undefined;
            return tangon;
 15:
            tangon = entity.maxResolution;
            oscard = tangon.type;
            report = _closure1_slot13;
            report = report.SOURCE;
            if(!(oscard !== report)) { _fun00006_ip = 56; continue _fun00005 }
 43:
            report = entity.maxResolution;
            golfie = report.height;
            _fun00006_ip = 66; continue _fun00005;
 56:
            report = _closure1_slot7;
            golfie = report.RESOLUTION_SOURCE;
 66:
            report = _closure1_slot8;
            oscard = undefined;
            report = report.bind(oscard)(golfie);
            var _closure2_slot0 = report;
            report = _closure1_slot9;
            entity = entity.maxFrameRate;
            report = report.bind(oscard)(entity);
            entity = _closure1_slot11;
            entity = entity.FPS_5;
            entity = report !== entity;
            if(!entity) { _fun00006_ip = 136; continue _fun00005 }
 113:
            report = _closure1_slot10;
            tangon = report.find;
            michal = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = argFoo;
                    michal = tangon.resolution;
                    entity = _closure2_slot0;
                    entity = michal === entity;
                    if(!entity) { _fun00008_ip = 46; continue _fun00007 }
 23:
                    zuuluu = tangon.fps;
                    michal = _closure1_slot11;
                    michal = michal.FPS_5;
                    entity = zuuluu !== michal;
 46:
                    if(!entity) { _fun00008_ip = 66; continue _fun00007 }
 49:
                    zuuluu = _closure1_slot14;
                    michal = undefined;
                    michal = zuuluu.bind(michal)(tangon);
                    entity = !michal;
 66:
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal);
            entity = zuuluu == michal;
 136:
            return entity;
        }
    };
    zuuluu['isPremiumResolution'] = oscard;
    oscard = function(argFoo) { // Original name: isPremiumFPS
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            michal = null;
            if(!(michal == tangon)) { _fun00010_ip = 15; continue _fun00009 }
 11:
            zuuluu = undefined;
            return zuuluu;
 15:
            oscard = _closure1_slot9;
            report = tangon.maxFrameRate;
            tangon = undefined;
            tangon = oscard.bind(tangon)(report);
            var _closure2_slot0 = tangon;
            tangon = _closure1_slot10;
            zuuluu = tangon.find;
            entity = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tangon = argFoo;
                    michal = tangon.fps;
                    entity = _closure2_slot0;
                    entity = michal === entity;
                    if(!entity) { _fun00012_ip = 40; continue _fun00011 }
 23:
                    zuuluu = _closure1_slot14;
                    michal = undefined;
                    michal = zuuluu.bind(michal)(tangon);
                    entity = !michal;
 40:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity);
            entity = michal == entity;
            return entity;
        }
    };
    zuuluu['isPremiumFPS'] = oscard;
    zuuluu['isPremiumRequirement'] = report;
    zuuluu['getPremiumRequirement'] = tangon;
    tangon = function(argFoo) { // Original name: getResolutionText
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            oscard = argFoo;
            zuuluu = oscard.type;
            entity = _closure1_slot13;
            entity = entity.SOURCE;
            if(!(zuuluu !== entity)) { _fun00014_ip = 97; continue _fun00013 }
 25:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            entity = 7;
            tangon = option[entity];
            zuuluu = undefined;
            tangon = golfie.bind(zuuluu)(tangon);
            report = tangon.intl;
            tangon = report.formatToPlainString;
            entity = option[entity];
            entity = golfie.bind(zuuluu)(entity);
            entity = entity.t;
            zuuluu = entity.TEOC0N;
            entity = {};
            oscard = oscard.height;
            entity['resolution'] = oscard;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00014_ip = 154; continue _fun00013;
 97:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 7;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.XjXqzs;
            entity = zuuluu.bind(tangon)(michal);
 154:
            return entity;
        }
    };
    zuuluu['getResolutionText'] = tangon;
    tangon = function(argFoo) { // Original name: getFPSText
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 7;
        zuuluu = oscard[entity];
        michal = undefined;
        zuuluu = report.bind(michal)(zuuluu);
        tangon = zuuluu.intl;
        zuuluu = tangon.formatToPlainString;
        entity = oscard[entity];
        entity = report.bind(michal)(entity);
        entity = entity.t;
        michal = entity.Qb44XF;
        entity = {};
        report = argFoo;
        entity['fps'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['getFPSText'] = tangon;
    tangon = function(argFoo) { // Original name: getMaxQuality
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.maxResolution;
            tangon = null;
            michal = tangon == entity;
            entity = null;
            if(michal) { _fun00016_ip = 62; continue _fun00015 }
 20:
            michal = zuuluu.maxFrameRate;
            michal = tangon == michal;
            entity = null;
            if(michal) { _fun00016_ip = 62; continue _fun00015 }
 35:
            michal = {};
            tangon = zuuluu.maxFrameRate;
            michal['maxFrameRate'] = tangon;
            zuuluu = zuuluu.maxResolution;
            michal['maxResolution'] = zuuluu;
            entity = michal;
 62:
            return entity;
        }
    };
    zuuluu['getMaxQuality'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: trackStreamSettingsUpdate
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            option = argFoo;
            golfie = argBar;
            oscard = argBaz;
            michal = _closure1_slot15;
            entity = undefined;
            offset = michal.bind(entity)(option, golfie, oscard);
            zuuluu = _closure1_slot5;
            michal = zuuluu.getCurrentUser;
            backup = michal.bind(zuuluu)();
            zuuluu = _closure1_slot4;
            michal = zuuluu.getGuildId;
            tangon = michal.bind(zuuluu)();
            verify = null;
            michal = verify != tangon;
            foxtra = null;
            if(!michal) { _fun00018_ip = 77; continue _fun00017 }
 63:
            zuuluu = _closure1_slot3;
            michal = zuuluu.getGuild;
            foxtra = michal.bind(zuuluu)(tangon);
 77:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 8;
            michal = tangon[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.track;
            michal = _closure1_slot6;
            zuuluu = michal.STREAM_SETTINGS_UPDATE;
            michal = {};
            kiloes = verify == backup;
            yankee = undefined;
            if(kiloes) { _fun00018_ip = 129; continue _fun00017 }
 123:
            yankee = backup.premiumType;
 129:
            michal['user_premium_tier'] = yankee;
            backup = verify == foxtra;
            yankee = undefined;
            if(backup) { _fun00018_ip = 149; continue _fun00017 }
 143:
            yankee = foxtra.premiumTier;
 149:
            michal['guild_premium_tier'] = yankee;
            foxtra = verify == offset;
            yankee = undefined;
            if(foxtra) { _fun00018_ip = 171; continue _fun00017 }
 165:
            yankee = offset.quality;
 171:
            foxtra = verify != yankee;
            yankee = null;
            if(!foxtra) { _fun00018_ip = 194; continue _fun00017 }
 180:
            foxtra = _closure1_slot12;
            romeon = offset.quality;
            yankee = foxtra[romeon];
 194:
            michal['stream_quality_user_premium_tier'] = yankee;
            yankee = verify == offset;
            verify = undefined;
            if(yankee) { _fun00018_ip = 216; continue _fun00017 }
 210:
            verify = offset.guildPremiumTier;
 216:
            michal['stream_quality_guild_premium_tier'] = verify;
            michal['stream_quality_preset'] = option;
            michal['stream_quality_resolution'] = golfie;
            michal['stream_quality_frame_rate'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['trackStreamSettingsUpdate'] = michal;
    return entity;
})();