// app/utils/StreamQualityUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    option = argBar;
    offset = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    oscard = function(argFoo) { // Original name: isPremiumRequirement
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
    var _closure1_slot17 = oscard;
    report = function(argFoo, argBar, argBaz) { // Original name: getPremiumRequirement
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        zuuluu = _closure1_slot12;
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
    var _closure1_slot18 = report;
    tangon = function(argFoo) { // Original name: getMaxQuality
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.maxResolution;
            tangon = null;
            michal = tangon == entity;
            entity = null;
            if(michal) { _fun00006_ip = 62; continue _fun00005 }
 20:
            michal = zuuluu.maxFrameRate;
            michal = tangon == michal;
            entity = null;
            if(michal) { _fun00006_ip = 62; continue _fun00005 }
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
    var _closure1_slot19 = tangon;
    entity = global;
    romeon = entity.Object;
    yankee = romeon.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, golfie);
    entity = 0;
    yankee = verify[entity];
    golfie = argCor;
    entity = undefined;
    golfie = golfie.bind(entity)(yankee);
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 2;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    golfie = 3;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot6 = golfie;
    golfie = 4;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot7 = golfie;
    golfie = 5;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot8 = golfie;
    golfie = 6;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.AnalyticEvents;
    var _closure1_slot9 = golfie;
    golfie = 7;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    offset = golfie.ApplicationStreamFPS;
    var _closure1_slot10 = offset;
    offset = golfie.ApplicationStreamResolutions;
    var _closure1_slot11 = offset;
    offset = golfie.ApplicationStreamSettingRequirements;
    var _closure1_slot12 = offset;
    offset = golfie.getApplicationFramerate;
    var _closure1_slot13 = offset;
    golfie = golfie.getApplicationResolution;
    var _closure1_slot14 = golfie;
    golfie = 8;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.StreamQualitiesToPremiumType;
    var _closure1_slot15 = golfie;
    golfie = 9;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.ResolutionTypes;
    var _closure1_slot16 = golfie;
    golfie = 13;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'utils/StreamQualityUtils.tsx';
    golfie = option.bind(verify)(golfie);
    golfie = function(argFoo) { // Original name: isPremiumResolution
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00008_ip = 15; continue _fun00007 }
 11:
            tangon = undefined;
            return tangon;
 15:
            tangon = entity.maxResolution;
            oscard = tangon.type;
            report = _closure1_slot16;
            report = report.SOURCE;
            if(!(oscard !== report)) { _fun00008_ip = 56; continue _fun00007 }
 43:
            report = entity.maxResolution;
            golfie = report.height;
            _fun00008_ip = 66; continue _fun00007;
 56:
            report = _closure1_slot11;
            golfie = report.RESOLUTION_SOURCE;
 66:
            report = _closure1_slot14;
            oscard = undefined;
            report = report.bind(oscard)(golfie);
            var _closure2_slot0 = report;
            report = _closure1_slot13;
            entity = entity.maxFrameRate;
            report = report.bind(oscard)(entity);
            entity = _closure1_slot10;
            entity = entity.FPS_5;
            entity = report !== entity;
            if(!entity) { _fun00008_ip = 136; continue _fun00007 }
 113:
            report = _closure1_slot12;
            tangon = report.find;
            michal = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tangon = argFoo;
                    michal = tangon.resolution;
                    entity = _closure2_slot0;
                    entity = michal === entity;
                    if(!entity) { _fun00010_ip = 46; continue _fun00009 }
 23:
                    zuuluu = tangon.fps;
                    michal = _closure1_slot10;
                    michal = michal.FPS_5;
                    entity = zuuluu !== michal;
 46:
                    if(!entity) { _fun00010_ip = 66; continue _fun00009 }
 49:
                    zuuluu = _closure1_slot17;
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
    zuuluu['isPremiumResolution'] = golfie;
    golfie = function(argFoo) { // Original name: isPremiumFPS
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = argFoo;
            michal = null;
            if(!(michal == tangon)) { _fun00012_ip = 15; continue _fun00011 }
 11:
            zuuluu = undefined;
            return zuuluu;
 15:
            oscard = _closure1_slot13;
            report = tangon.maxFrameRate;
            tangon = undefined;
            tangon = oscard.bind(tangon)(report);
            var _closure2_slot0 = tangon;
            tangon = _closure1_slot12;
            zuuluu = tangon.find;
            entity = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    tangon = argFoo;
                    michal = tangon.fps;
                    entity = _closure2_slot0;
                    entity = michal === entity;
                    if(!entity) { _fun00014_ip = 40; continue _fun00013 }
 23:
                    zuuluu = _closure1_slot17;
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
    zuuluu['isPremiumFPS'] = golfie;
    zuuluu['isPremiumRequirement'] = oscard;
    zuuluu['getPremiumRequirement'] = report;
    report = function(argFoo) { // Original name: getResolutionText
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            oscard = argFoo;
            zuuluu = oscard.type;
            entity = _closure1_slot16;
            entity = entity.SOURCE;
            if(!(zuuluu !== entity)) { _fun00016_ip = 97; continue _fun00015 }
 25:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            entity = 10;
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
            _fun00016_ip = 154; continue _fun00015;
 97:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 10;
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
    zuuluu['getResolutionText'] = report;
    report = function(argFoo) { // Original name: getFPSText
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 10;
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
    zuuluu['getFPSText'] = report;
    zuuluu['getMaxQuality'] = tangon;
    tangon = function(argFoo) { // Original name: useMaxQuality
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        golfie = _closure1_slot0;
        option = _closure1_slot2;
        zuuluu = 11;
        report = option[zuuluu];
        tangon = undefined;
        yankee = golfie.bind(tangon)(report);
        offset = yankee.useStateFromStoresObject;
        report = _closure1_slot4;
        verify = new Array(1);
        verify[0] = report;
        report = function() {
            michal = _closure1_slot4;
            entity = michal.getState;
            entity = entity.bind(michal)();
            return entity;
        };
        report = offset.bind(yankee)(verify, report);
        var _closure2_slot1 = report;
        zuuluu = option[zuuluu];
        option = golfie.bind(tangon)(zuuluu);
        golfie = option.useStateFromStores;
        zuuluu = _closure1_slot5;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = function() {
            michal = _closure1_slot5;
            entity = michal.getId;
            entity = entity.bind(michal)();
            return entity;
        };
        golfie = golfie.bind(option)(tangon, zuuluu);
        var _closure2_slot2 = golfie;
        tangon = _closure1_slot3;
        zuuluu = tangon.useMemo;
        michal = new Array(3);
        michal[0] = golfie;
        michal[1] = oscard;
        michal[2] = report;
        entity = function() {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                michal = _closure2_slot2;
                entity = _closure2_slot0;
                entity = entity.user;
                entity = entity.id;
                if(!(michal !== entity)) { _fun00018_ip = 45; continue _fun00017 }
 25:
                tangon = _closure1_slot19;
                michal = _closure2_slot0;
                entity = undefined;
                entity = tangon.bind(entity)(michal);
                _fun00018_ip = 130; continue _fun00017;
 45:
                michal = {};
                tangon = _closure2_slot1;
                zuuluu = tangon.fps;
                michal['maxFrameRate'] = zuuluu;
                zuuluu = {};
                report = tangon.resolution;
                zuuluu['height'] = report;
                report = 0;
                zuuluu['width'] = report;
                tangon = tangon.resolution;
                if(!(report !== tangon)) { _fun00018_ip = 105; continue _fun00017 }
 90:
                tangon = _closure1_slot16;
                tangon = tangon.FIXED;
                _fun00018_ip = 118; continue _fun00017;
 105:
                report = _closure1_slot16;
                tangon = report.SOURCE;
 118:
                zuuluu['type'] = tangon;
                michal['maxResolution'] = zuuluu;
                entity = michal;
 130:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useMaxQuality'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: trackStreamSettingsUpdate
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            option = argFoo;
            golfie = argBar;
            oscard = argBaz;
            michal = _closure1_slot18;
            entity = undefined;
            offset = michal.bind(entity)(option, golfie, oscard);
            zuuluu = _closure1_slot8;
            michal = zuuluu.getCurrentUser;
            backup = michal.bind(zuuluu)();
            zuuluu = _closure1_slot7;
            michal = zuuluu.getGuildId;
            tangon = michal.bind(zuuluu)();
            verify = null;
            michal = verify != tangon;
            foxtra = null;
            if(!michal) { _fun00020_ip = 77; continue _fun00019 }
 63:
            zuuluu = _closure1_slot6;
            michal = zuuluu.getGuild;
            foxtra = michal.bind(zuuluu)(tangon);
 77:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 12;
            michal = tangon[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.track;
            michal = _closure1_slot9;
            zuuluu = michal.STREAM_SETTINGS_UPDATE;
            michal = {};
            kiloes = verify == backup;
            yankee = undefined;
            if(kiloes) { _fun00020_ip = 129; continue _fun00019 }
 123:
            yankee = backup.premiumType;
 129:
            michal['user_premium_tier'] = yankee;
            backup = verify == foxtra;
            yankee = undefined;
            if(backup) { _fun00020_ip = 149; continue _fun00019 }
 143:
            yankee = foxtra.premiumTier;
 149:
            michal['guild_premium_tier'] = yankee;
            foxtra = verify == offset;
            yankee = undefined;
            if(foxtra) { _fun00020_ip = 171; continue _fun00019 }
 165:
            yankee = offset.quality;
 171:
            foxtra = verify != yankee;
            yankee = null;
            if(!foxtra) { _fun00020_ip = 194; continue _fun00019 }
 180:
            foxtra = _closure1_slot15;
            romeon = offset.quality;
            yankee = foxtra[romeon];
 194:
            michal['stream_quality_user_premium_tier'] = yankee;
            yankee = verify == offset;
            verify = undefined;
            if(yankee) { _fun00020_ip = 216; continue _fun00019 }
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