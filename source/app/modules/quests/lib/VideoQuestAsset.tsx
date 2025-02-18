// app/modules/quests/lib/VideoQuestAsset.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.QuestVariants;
    var _closure1_slot2 = tangon;
    tangon = {};
    report = 'video_player_video';
    tangon['VIDEO_PLAYER_VIDEO'] = report;
    report = 'video_player_video_low_res';
    tangon['VIDEO_PLAYER_VIDEO_LOW_RES'] = report;
    report = 'video_player_video_hls';
    tangon['VIDEO_PLAYER_VIDEO_HLS'] = report;
    report = 'video_player_thumbnail';
    tangon['VIDEO_PLAYER_THUMBNAIL'] = report;
    report = 'video_player_caption';
    tangon['VIDEO_PLAYER_CAPTION'] = report;
    report = 'video_player_transcript';
    tangon['VIDEO_PLAYER_TRANSCRIPT'] = report;
    report = 'quest_bar_preview_video';
    tangon['QUEST_BAR_PREVIEW_VIDEO'] = report;
    report = 'quest_bar_preview_thumbnail';
    tangon['QUEST_BAR_PREVIEW_THUMBNAIL'] = report;
    report = 'quest_home_video';
    tangon['QUEST_HOME_VIDEO'] = report;
    var _closure1_slot3 = tangon;
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/quests/lib/VideoQuestAsset.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['VideoQuestAssetId'] = tangon;
    michal = function(argFoo, argBar) { // Original name: resolveVideoQuestAsset
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            verify = argBar;
            entity = _closure1_slot3;
            entity = entity.VIDEO_PLAYER_VIDEO;
            if(!(entity !== zuuluu)) { _fun00002_ip = 485; continue _fun00001 }
 26:
            entity = _closure1_slot3;
            entity = entity.VIDEO_PLAYER_VIDEO_LOW_RES;
            if(!(entity !== zuuluu)) { _fun00002_ip = 446; continue _fun00001 }
 43:
            entity = _closure1_slot3;
            entity = entity.VIDEO_PLAYER_VIDEO_HLS;
            if(!(entity !== zuuluu)) { _fun00002_ip = 407; continue _fun00001 }
 60:
            entity = _closure1_slot3;
            entity = entity.VIDEO_PLAYER_THUMBNAIL;
            if(!(entity !== zuuluu)) { _fun00002_ip = 368; continue _fun00001 }
 77:
            entity = _closure1_slot3;
            entity = entity.VIDEO_PLAYER_CAPTION;
            if(!(entity !== zuuluu)) { _fun00002_ip = 326; continue _fun00001 }
 94:
            entity = _closure1_slot3;
            entity = entity.VIDEO_PLAYER_TRANSCRIPT;
            if(!(entity !== zuuluu)) { _fun00002_ip = 284; continue _fun00001 }
 111:
            entity = _closure1_slot3;
            entity = entity.QUEST_BAR_PREVIEW_VIDEO;
            if(!(entity !== zuuluu)) { _fun00002_ip = 242; continue _fun00001 }
 125:
            entity = _closure1_slot3;
            entity = entity.QUEST_BAR_PREVIEW_THUMBNAIL;
            if(!(entity !== zuuluu)) { _fun00002_ip = 200; continue _fun00001 }
 139:
            entity = _closure1_slot3;
            michal = entity.QUEST_HOME_VIDEO;
            foxtra = undefined;
            if(!(michal === zuuluu)) { _fun00002_ip = 522; continue _fun00001 }
 158:
            michal = verify.config;
            michal = michal.videoMetadata;
            zuuluu = null;
            zuuluu = zuuluu == michal;
            entity = undefined;
            if(zuuluu) { _fun00002_ip = 192; continue _fun00001 }
 180:
            michal = michal.assets;
            entity = michal.questHomeVideo;
 192:
            foxtra = entity;
            _fun00002_ip = 522; continue _fun00001;
 200:
            entity = verify.config;
            michal = entity.videoMetadata;
            entity = null;
            zuuluu = entity == michal;
            entity = undefined;
            if(zuuluu) { _fun00002_ip = 234; continue _fun00001 }
 222:
            michal = michal.assets;
            entity = michal.questBarPreviewThumbnail;
 234:
            foxtra = entity;
            _fun00002_ip = 522; continue _fun00001;
 242:
            entity = verify.config;
            michal = entity.videoMetadata;
            entity = null;
            zuuluu = entity == michal;
            entity = undefined;
            if(zuuluu) { _fun00002_ip = 276; continue _fun00001 }
 264:
            michal = michal.assets;
            entity = michal.questBarPreviewVideo;
 276:
            foxtra = entity;
            _fun00002_ip = 522; continue _fun00001;
 284:
            entity = verify.config;
            michal = entity.videoMetadata;
            entity = null;
            zuuluu = entity == michal;
            entity = undefined;
            if(zuuluu) { _fun00002_ip = 318; continue _fun00001 }
 306:
            michal = michal.assets;
            entity = michal.videoPlayerTranscript;
 318:
            foxtra = entity;
            _fun00002_ip = 522; continue _fun00001;
 326:
            entity = verify.config;
            michal = entity.videoMetadata;
            entity = null;
            zuuluu = entity == michal;
            entity = undefined;
            if(zuuluu) { _fun00002_ip = 360; continue _fun00001 }
 348:
            michal = michal.assets;
            entity = michal.videoPlayerCaption;
 360:
            foxtra = entity;
            _fun00002_ip = 522; continue _fun00001;
 368:
            entity = verify.config;
            michal = entity.videoMetadata;
            entity = null;
            zuuluu = entity == michal;
            entity = undefined;
            if(zuuluu) { _fun00002_ip = 402; continue _fun00001 }
 390:
            michal = michal.assets;
            entity = michal.videoPlayerThumbnail;
 402:
            foxtra = entity;
            _fun00002_ip = 522; continue _fun00001;
 407:
            entity = verify.config;
            michal = entity.videoMetadata;
            entity = null;
            zuuluu = entity == michal;
            entity = undefined;
            if(zuuluu) { _fun00002_ip = 441; continue _fun00001 }
 429:
            michal = michal.assets;
            entity = michal.videoPlayerVideoHls;
 441:
            foxtra = entity;
            _fun00002_ip = 522; continue _fun00001;
 446:
            entity = verify.config;
            michal = entity.videoMetadata;
            entity = null;
            zuuluu = entity == michal;
            entity = undefined;
            if(zuuluu) { _fun00002_ip = 480; continue _fun00001 }
 468:
            michal = michal.assets;
            entity = michal.videoPlayerVideoLowRes;
 480:
            foxtra = entity;
            _fun00002_ip = 522; continue _fun00001;
 485:
            entity = verify.config;
            michal = entity.videoMetadata;
            entity = null;
            zuuluu = entity == michal;
            entity = undefined;
            if(zuuluu) { _fun00002_ip = 519; continue _fun00001 }
 507:
            michal = michal.assets;
            entity = michal.videoPlayerVideo;
 519:
            foxtra = entity;
 522:
            entity = null;
            if(!(entity != foxtra)) { _fun00002_ip = 692; continue _fun00001 }
 531:
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
            golfie = undefined;
            zuuluu = zuuluu.bind(golfie)(michal);
            michal = zuuluu.getMimetype;
            oscard = michal.bind(zuuluu)(foxtra);
            zuuluu = entity == oscard;
            michal = null;
            if(zuuluu) { _fun00002_ip = 690; continue _fun00001 }
 604:
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
 690:
            return michal;
 692:
            return entity;
        }
    };
    zuuluu['resolveVideoQuestAsset'] = michal;
    return entity;
})();