// app/modules/quests/lib/VideoQuestAsset.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    option = argBar;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = verify;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    entity = 0;
    tangon = verify[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    tangon = tangon.QuestVariants;
    var _closure1_slot2 = tangon;
    oscard = {};
    tangon = 'video_player_video';
    oscard['VIDEO_PLAYER_VIDEO'] = tangon;
    tangon = 'video_player_video_low_res';
    oscard['VIDEO_PLAYER_VIDEO_LOW_RES'] = tangon;
    tangon = 'video_player_video_hls';
    oscard['VIDEO_PLAYER_VIDEO_HLS'] = tangon;
    tangon = 'video_player_thumbnail';
    oscard['VIDEO_PLAYER_THUMBNAIL'] = tangon;
    tangon = 'video_player_caption';
    oscard['VIDEO_PLAYER_CAPTION'] = tangon;
    tangon = 'video_player_transcript';
    oscard['VIDEO_PLAYER_TRANSCRIPT'] = tangon;
    tangon = 'quest_bar_preview_video';
    oscard['QUEST_BAR_PREVIEW_VIDEO'] = tangon;
    tangon = 'quest_bar_preview_thumbnail';
    oscard['QUEST_BAR_PREVIEW_THUMBNAIL'] = tangon;
    tangon = 'quest_home_video';
    oscard['QUEST_HOME_VIDEO'] = tangon;
    report = {};
    tangon = 'video';
    report['VIDEO'] = tangon;
    tangon = 'videoLowRes';
    report['VIDEO_LOW_RES'] = tangon;
    tangon = 'videoHls';
    report['VIDEO_HLS'] = tangon;
    tangon = {};
    golfie = 'url';
    tangon['VIDEO'] = golfie;
    golfie = 'thumbnail';
    tangon['THUMBNAIL'] = golfie;
    golfie = 'caption';
    tangon['CAPTION'] = golfie;
    golfie = 'transcript';
    tangon['TRANSCRIPT'] = golfie;
    golfie = {};
    yankee = report.VIDEO;
    offset = oscard.VIDEO_PLAYER_VIDEO;
    golfie[yankee] = offset;
    yankee = report.VIDEO_LOW_RES;
    offset = oscard.VIDEO_PLAYER_VIDEO_LOW_RES;
    golfie[yankee] = offset;
    yankee = report.VIDEO_HLS;
    offset = oscard.VIDEO_PLAYER_VIDEO_HLS;
    golfie[yankee] = offset;
    var _closure1_slot3 = golfie;
    golfie = 2;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/quests/lib/VideoQuestAsset.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['VideoQuestAssetId'] = oscard;
    zuuluu['VideoVariant'] = report;
    zuuluu['VideoAssetProperty'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: resolveVideoQuestAsset
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            verify = argFoo;
            entity = verify.config;
            zuuluu = entity.taskConfigV2;
            entity = null;
            tangon = entity == zuuluu;
            golfie = undefined;
            michal = undefined;
            if(tangon) { _fun00002_ip = 40; continue _fun00001 }
 27:
            tangon = zuuluu.tasks;
            zuuluu = argBar;
            michal = tangon[zuuluu];
 40:
            if(!(entity != michal)) { _fun00002_ip = 247; continue _fun00001 }
 47:
            zuuluu = michal.assets;
            michal = argBaz;
            zuuluu = zuuluu[michal];
            if(!(entity != zuuluu)) { _fun00002_ip = 245; continue _fun00001 }
 67:
            michal = argCor;
            foxtra = zuuluu[michal];
            if(!(entity != foxtra)) { _fun00002_ip = 243; continue _fun00001 }
 81:
            michal = verify.config;
            report = michal.features;
            zuuluu = report.includes;
            michal = _closure1_slot2;
            michal = michal.QUESTS_CDN;
            backup = zuuluu.bind(report)(michal);
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            option = 1;
            michal = michal[option];
            zuuluu = zuuluu.bind(golfie)(michal);
            michal = zuuluu.getMimetype;
            oscard = michal.bind(zuuluu)(foxtra);
            zuuluu = entity == oscard;
            michal = null;
            if(zuuluu) { _fun00002_ip = 241; continue _fun00001 }
 155:
            zuuluu = {};
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            offset = tangon[option];
            romeon = report.bind(golfie)(offset);
            yankee = romeon.buildUrl;
            offset = verify.id;
            verify = {};
            verify['newCdn'] = backup;
            verify = yankee.bind(romeon)(offset, foxtra, verify);
            zuuluu['url'] = verify;
            zuuluu['mimetype'] = oscard;
            tangon = tangon[option];
            tangon = report.bind(golfie)(tangon);
            report = tangon.ANIMATED_MIMETYPES;
            tangon = report.includes;
            tangon = tangon.bind(report)(oscard);
            zuuluu['isAnimated'] = tangon;
            michal = zuuluu;
 241:
            return michal;
 243:
            return entity;
 245:
            return entity;
 247:
            return entity;
        }
    };
    zuuluu['resolveVideoQuestAsset'] = tangon;
    michal = function(argFoo) { // Original name: getVideoAssetId
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            michal = entity == zuuluu;
            if(michal) { _fun00004_ip = 23; continue _fun00003 }
 12:
            michal = _closure1_slot3;
            entity = michal[zuuluu];
 23:
            return entity;
        }
    };
    zuuluu['getVideoAssetId'] = michal;
    return entity;
})();