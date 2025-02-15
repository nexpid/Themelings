// app/utils/StreamQualityUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = options;
    report = function(argFoo) { // Original name: isPremiumRequirement
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            entity = mike.quality;
            zulu = null;
            entity = zulu != entity;
            if(entity) { _fun00002_ip = 28; continue _fun00001 }
 18:
            mike = mike.guildPremiumTier;
            entity = zulu != mike;
 28:
            return entity;
        }
    };
    var _closure1_slot14 = report;
    tango = function(argFoo, argBar, argBaz) { // Original name: getPremiumRequirement
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        zulu = _closure1_slot10;
        mike = zulu.find;
        entity = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                mike = argFoo;
                zulu = mike.preset;
                entity = null;
                entity = entity == zulu;
                if(entity) { _fun00004_ip = 35; continue _fun00003 }
 18:
                tango = mike.preset;
                zulu = _closure2_slot0;
                entity = tango === zulu;
 35:
                if(!entity) { _fun00004_ip = 55; continue _fun00003 }
 38:
                tango = mike.resolution;
                zulu = _closure2_slot1;
                entity = tango === zulu;
 55:
                if(!entity) { _fun00004_ip = 75; continue _fun00003 }
 58:
                zulu = mike.fps;
                mike = _closure2_slot2;
                entity = zulu === mike;
 75:
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot15 = tango;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 3;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.AnalyticEvents;
    var _closure1_slot6 = oscar;
    oscar = 4;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    verify = oscar.ApplicationStreamResolutions;
    var _closure1_slot7 = verify;
    verify = oscar.getApplicationResolution;
    var _closure1_slot8 = verify;
    verify = oscar.getApplicationFramerate;
    var _closure1_slot9 = verify;
    verify = oscar.ApplicationStreamSettingRequirements;
    var _closure1_slot10 = verify;
    oscar = oscar.ApplicationStreamFPS;
    var _closure1_slot11 = oscar;
    oscar = 5;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.StreamQualitiesToPremiumType;
    var _closure1_slot12 = oscar;
    oscar = 6;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.ResolutionTypes;
    var _closure1_slot13 = oscar;
    oscar = 9;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'utils/StreamQualityUtils.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = function(argFoo) { // Original name: isPremiumResolution
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            zulu = null;
            if(!(zulu == entity)) { _fun00006_ip = 15; continue _fun00005 }
 11:
            tango = undefined;
            return tango;
 15:
            tango = entity.maxResolution;
            oscar = tango.type;
            report = _closure1_slot13;
            report = report.SOURCE;
            if(!(oscar !== report)) { _fun00006_ip = 56; continue _fun00005 }
 43:
            report = entity.maxResolution;
            golf = report.height;
            _fun00006_ip = 66; continue _fun00005;
 56:
            report = _closure1_slot7;
            golf = report.RESOLUTION_SOURCE;
 66:
            report = _closure1_slot8;
            oscar = undefined;
            report = report.bind(oscar)(golf);
            var _closure2_slot0 = report;
            report = _closure1_slot9;
            entity = entity.maxFrameRate;
            report = report.bind(oscar)(entity);
            entity = _closure1_slot11;
            entity = entity.FPS_5;
            entity = report !== entity;
            if(!entity) { _fun00006_ip = 136; continue _fun00005 }
 113:
            report = _closure1_slot10;
            tango = report.find;
            mike = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tango = argFoo;
                    mike = tango.resolution;
                    entity = _closure2_slot0;
                    entity = mike === entity;
                    if(!entity) { _fun00008_ip = 46; continue _fun00007 }
 23:
                    zulu = tango.fps;
                    mike = _closure1_slot11;
                    mike = mike.FPS_5;
                    entity = zulu !== mike;
 46:
                    if(!entity) { _fun00008_ip = 66; continue _fun00007 }
 49:
                    zulu = _closure1_slot14;
                    mike = undefined;
                    mike = zulu.bind(mike)(tango);
                    entity = !mike;
 66:
                    return entity;
                }
            };
            mike = tango.bind(report)(mike);
            entity = zulu == mike;
 136:
            return entity;
        }
    };
    zulu['isPremiumResolution'] = oscar;
    oscar = function(argFoo) { // Original name: isPremiumFPS
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tango = argFoo;
            mike = null;
            if(!(mike == tango)) { _fun00010_ip = 15; continue _fun00009 }
 11:
            zulu = undefined;
            return zulu;
 15:
            oscar = _closure1_slot9;
            report = tango.maxFrameRate;
            tango = undefined;
            tango = oscar.bind(tango)(report);
            var _closure2_slot0 = tango;
            tango = _closure1_slot10;
            zulu = tango.find;
            entity = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tango = argFoo;
                    mike = tango.fps;
                    entity = _closure2_slot0;
                    entity = mike === entity;
                    if(!entity) { _fun00012_ip = 40; continue _fun00011 }
 23:
                    zulu = _closure1_slot14;
                    mike = undefined;
                    mike = zulu.bind(mike)(tango);
                    entity = !mike;
 40:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity);
            entity = mike == entity;
            return entity;
        }
    };
    zulu['isPremiumFPS'] = oscar;
    zulu['isPremiumRequirement'] = report;
    zulu['getPremiumRequirement'] = tango;
    tango = function(argFoo) { // Original name: getResolutionText
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            oscar = argFoo;
            zulu = oscar.type;
            entity = _closure1_slot13;
            entity = entity.SOURCE;
            if(!(zulu !== entity)) { _fun00014_ip = 97; continue _fun00013 }
 25:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            entity = 7;
            tango = options[entity];
            zulu = undefined;
            tango = golf.bind(zulu)(tango);
            report = tango.intl;
            tango = report.formatToPlainString;
            entity = options[entity];
            entity = golf.bind(zulu)(entity);
            entity = entity.t;
            zulu = entity.TEOC0N;
            entity = {};
            oscar = oscar.height;
            entity['resolution'] = oscar;
            entity = tango.bind(report)(zulu, entity);
            _fun00014_ip = 154; continue _fun00013;
 97:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 7;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.XjXqzs;
            entity = zulu.bind(tango)(mike);
 154:
            return entity;
        }
    };
    zulu['getResolutionText'] = tango;
    tango = function(argFoo) { // Original name: getFPSText
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 7;
        zulu = oscar[entity];
        mike = undefined;
        zulu = report.bind(mike)(zulu);
        tango = zulu.intl;
        zulu = tango.formatToPlainString;
        entity = oscar[entity];
        entity = report.bind(mike)(entity);
        entity = entity.t;
        mike = entity.Qb44XF;
        entity = {};
        report = argFoo;
        entity['fps'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['getFPSText'] = tango;
    tango = function(argFoo) { // Original name: getMaxQuality
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zulu = argFoo;
            entity = zulu.maxResolution;
            tango = null;
            mike = tango == entity;
            entity = null;
            if(mike) { _fun00016_ip = 62; continue _fun00015 }
 20:
            mike = zulu.maxFrameRate;
            mike = tango == mike;
            entity = null;
            if(mike) { _fun00016_ip = 62; continue _fun00015 }
 35:
            mike = {};
            tango = zulu.maxFrameRate;
            mike['maxFrameRate'] = tango;
            zulu = zulu.maxResolution;
            mike['maxResolution'] = zulu;
            entity = mike;
 62:
            return entity;
        }
    };
    zulu['getMaxQuality'] = tango;
    mike = function(argFoo, argBar, argBaz) { // Original name: trackStreamSettingsUpdate
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            options = argFoo;
            golf = argBar;
            oscar = argBaz;
            mike = _closure1_slot15;
            entity = undefined;
            offset = mike.bind(entity)(options, golf, oscar);
            zulu = _closure1_slot5;
            mike = zulu.getCurrentUser;
            backup = mike.bind(zulu)();
            zulu = _closure1_slot4;
            mike = zulu.getGuildId;
            tango = mike.bind(zulu)();
            verify = null;
            mike = verify != tango;
            foxtrot = null;
            if(!mike) { _fun00018_ip = 77; continue _fun00017 }
 63:
            zulu = _closure1_slot3;
            mike = zulu.getGuild;
            foxtrot = mike.bind(zulu)(tango);
 77:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 8;
            mike = tango[mike];
            report = zulu.bind(entity)(mike);
            tango = report.track;
            mike = _closure1_slot6;
            zulu = mike.STREAM_SETTINGS_UPDATE;
            mike = {};
            kilo = verify == backup;
            yankee = undefined;
            if(kilo) { _fun00018_ip = 129; continue _fun00017 }
 123:
            yankee = backup.premiumType;
 129:
            mike['user_premium_tier'] = yankee;
            backup = verify == foxtrot;
            yankee = undefined;
            if(backup) { _fun00018_ip = 149; continue _fun00017 }
 143:
            yankee = foxtrot.premiumTier;
 149:
            mike['guild_premium_tier'] = yankee;
            foxtrot = verify == offset;
            yankee = undefined;
            if(foxtrot) { _fun00018_ip = 171; continue _fun00017 }
 165:
            yankee = offset.quality;
 171:
            foxtrot = verify != yankee;
            yankee = null;
            if(!foxtrot) { _fun00018_ip = 194; continue _fun00017 }
 180:
            foxtrot = _closure1_slot12;
            romeo = offset.quality;
            yankee = foxtrot[romeo];
 194:
            mike['stream_quality_user_premium_tier'] = yankee;
            yankee = verify == offset;
            verify = undefined;
            if(yankee) { _fun00018_ip = 216; continue _fun00017 }
 210:
            verify = offset.guildPremiumTier;
 216:
            mike['stream_quality_guild_premium_tier'] = verify;
            mike['stream_quality_preset'] = options;
            mike['stream_quality_resolution'] = golf;
            mike['stream_quality_frame_rate'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['trackStreamSettingsUpdate'] = mike;
    return entity;
})();