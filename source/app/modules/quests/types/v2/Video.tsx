// app/modules/quests/types/v2/Video.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    tangon = function(argFoo) { // Original name: videoAssetFromServer
        michal = argFoo;
        entity = {};
        zuuluu = michal.url;
        entity['url'] = zuuluu;
        zuuluu = michal.width;
        entity['width'] = zuuluu;
        zuuluu = michal.height;
        entity['height'] = zuuluu;
        zuuluu = michal.thumbnail;
        entity['thumbnail'] = zuuluu;
        zuuluu = michal.caption;
        entity['caption'] = zuuluu;
        michal = michal.transcript;
        entity['transcript'] = michal;
        return entity;
    };
    var _closure1_slot0 = tangon;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, report);
    report = argPlu;
    entity = 0;
    oscard = report[entity];
    report = argBar;
    entity = undefined;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/quests/types/v2/Video.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: questVideoMetadataFromServer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            if(!(entity == zuuluu)) { _fun00002_ip = 13; continue _fun00001 }
 9:
            entity = undefined;
            return entity;
 13:
            entity = {};
            michal = {};
            tangon = zuuluu.messages;
            tangon = tangon.video_title;
            michal['videoTitle'] = tangon;
            tangon = zuuluu.messages;
            tangon = tangon.video_end_cta_title;
            michal['videoEndCtaTitle'] = tangon;
            tangon = zuuluu.messages;
            tangon = tangon.video_end_cta_subtitle;
            michal['videoEndCtaSubtitle'] = tangon;
            tangon = zuuluu.messages;
            tangon = tangon.video_end_cta_button_label;
            michal['videoEndCtaButtonLabel'] = tangon;
            entity['messages'] = michal;
            michal = {};
            tangon = zuuluu.assets;
            tangon = tangon.video_player_video;
            michal['videoPlayerVideo'] = tangon;
            tangon = zuuluu.assets;
            tangon = tangon.video_player_video_hls;
            michal['videoPlayerVideoHls'] = tangon;
            tangon = zuuluu.assets;
            tangon = tangon.video_player_thumbnail;
            michal['videoPlayerThumbnail'] = tangon;
            tangon = zuuluu.assets;
            tangon = tangon.video_player_video_low_res;
            michal['videoPlayerVideoLowRes'] = tangon;
            tangon = zuuluu.assets;
            tangon = tangon.video_player_caption;
            michal['videoPlayerCaption'] = tangon;
            tangon = zuuluu.assets;
            tangon = tangon.video_player_transcript;
            michal['videoPlayerTranscript'] = tangon;
            tangon = zuuluu.assets;
            tangon = tangon.quest_bar_preview_video;
            michal['questBarPreviewVideo'] = tangon;
            tangon = zuuluu.assets;
            tangon = tangon.quest_bar_preview_thumbnail;
            michal['questBarPreviewThumbnail'] = tangon;
            zuuluu = zuuluu.assets;
            zuuluu = zuuluu.quest_home_video;
            michal['questHomeVideo'] = zuuluu;
            entity['assets'] = michal;
            return entity;
        }
    };
    zuuluu['questVideoMetadataFromServer'] = report;
    zuuluu['videoAssetFromServer'] = tangon;
    tangon = function(argFoo) { // Original name: desktopVideoAssetsFromServer
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            entity = {};
            oscard = _closure1_slot0;
            report = michal.video;
            tangon = undefined;
            report = oscard.bind(tangon)(report);
            entity['video'] = report;
            report = michal.video_low_res;
            oscard = null;
            if(!(oscard != report)) { _fun00004_ip = 63; continue _fun00003 }
 42:
            golfie = _closure1_slot0;
            report = michal.video_low_res;
            report = golfie.bind(tangon)(report);
            entity['videoLowRes'] = report;
 63:
            report = michal.video_hls;
            if(!(oscard != report)) { _fun00004_ip = 94; continue _fun00003 }
 73:
            zuuluu = _closure1_slot0;
            michal = michal.video_hls;
            michal = zuuluu.bind(tangon)(michal);
            entity['videoHls'] = michal;
 94:
            return entity;
        }
    };
    zuuluu['desktopVideoAssetsFromServer'] = tangon;
    tangon = function(argFoo) { // Original name: desktopVideoMessagesFromServer
        michal = argFoo;
        entity = {};
        zuuluu = michal.video_title;
        entity['videoTitle'] = zuuluu;
        zuuluu = michal.video_end_cta_title;
        entity['videoEndCtaTitle'] = zuuluu;
        zuuluu = michal.video_end_cta_subtitle;
        entity['videoEndCtaSubtitle'] = zuuluu;
        michal = michal.video_end_cta_button_label;
        entity['videoEndCtaButtonLabel'] = michal;
        return entity;
    };
    zuuluu['desktopVideoMessagesFromServer'] = tangon;
    tangon = function(argFoo) { // Original name: mobileVideoAssetsFromServer
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            entity = {};
            oscard = _closure1_slot0;
            report = michal.video;
            tangon = undefined;
            report = oscard.bind(tangon)(report);
            entity['video'] = report;
            report = michal.video_low_res;
            oscard = null;
            if(!(oscard != report)) { _fun00006_ip = 63; continue _fun00005 }
 42:
            golfie = _closure1_slot0;
            report = michal.video_low_res;
            report = golfie.bind(tangon)(report);
            entity['videoLowRes'] = report;
 63:
            report = michal.video_hls;
            if(!(oscard != report)) { _fun00006_ip = 94; continue _fun00005 }
 73:
            zuuluu = _closure1_slot0;
            michal = michal.video_hls;
            michal = zuuluu.bind(tangon)(michal);
            entity['videoHls'] = michal;
 94:
            return entity;
        }
    };
    zuuluu['mobileVideoAssetsFromServer'] = tangon;
    michal = function(argFoo) { // Original name: mobileVideoMessagesFromServer
        michal = argFoo;
        entity = {};
        zuuluu = michal.video_title;
        entity['videoTitle'] = zuuluu;
        zuuluu = michal.video_end_cta_title;
        entity['videoEndCtaTitle'] = zuuluu;
        zuuluu = michal.video_end_cta_subtitle;
        entity['videoEndCtaSubtitle'] = zuuluu;
        michal = michal.video_end_cta_button_label;
        entity['videoEndCtaButtonLabel'] = michal;
        return entity;
    };
    zuuluu['mobileVideoMessagesFromServer'] = michal;
    return entity;
})();