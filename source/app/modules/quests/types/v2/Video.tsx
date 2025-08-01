// app/modules/quests/types/v2/Video.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = function videoAssetFromServer(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.url;
        var1['url'] = var3;
        var3 = var2.width;
        var1['width'] = var3;
        var3 = var2.height;
        var1['height'] = var3;
        var3 = var2.thumbnail;
        var1['thumbnail'] = var3;
        var3 = var2.caption;
        var1['caption'] = var3;
        var2 = var2.transcript;
        var1['transcript'] = var2;
        return var1;
    };
    var _closure1_slot0 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var5 = dependencyMap;
    var1 = 0;
    var6 = var5[var1];
    var5 = require;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/types/v2/Video.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function questVideoMetadataFromServer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 == var3)) { _fun0001_ip = 13; continue _fun0001 }
 9:
            var1 = undefined;
            return var1;
 13:
            var1 = {};
            var2 = {};
            var4 = var3.messages;
            var4 = var4.video_title;
            var2['videoTitle'] = var4;
            var4 = var3.messages;
            var4 = var4.video_end_cta_title;
            var2['videoEndCtaTitle'] = var4;
            var4 = var3.messages;
            var4 = var4.video_end_cta_subtitle;
            var2['videoEndCtaSubtitle'] = var4;
            var4 = var3.messages;
            var4 = var4.video_end_cta_button_label;
            var2['videoEndCtaButtonLabel'] = var4;
            var1['messages'] = var2;
            var2 = {};
            var4 = var3.assets;
            var4 = var4.video_player_video;
            var2['videoPlayerVideo'] = var4;
            var4 = var3.assets;
            var4 = var4.video_player_video_hls;
            var2['videoPlayerVideoHls'] = var4;
            var4 = var3.assets;
            var4 = var4.video_player_thumbnail;
            var2['videoPlayerThumbnail'] = var4;
            var4 = var3.assets;
            var4 = var4.video_player_video_low_res;
            var2['videoPlayerVideoLowRes'] = var4;
            var4 = var3.assets;
            var4 = var4.video_player_caption;
            var2['videoPlayerCaption'] = var4;
            var4 = var3.assets;
            var4 = var4.video_player_transcript;
            var2['videoPlayerTranscript'] = var4;
            var4 = var3.assets;
            var4 = var4.quest_bar_preview_video;
            var2['questBarPreviewVideo'] = var4;
            var4 = var3.assets;
            var4 = var4.quest_bar_preview_thumbnail;
            var2['questBarPreviewThumbnail'] = var4;
            var3 = var3.assets;
            var3 = var3.quest_home_video;
            var2['questHomeVideo'] = var3;
            var1['assets'] = var2;
            return var1;
        }
    };
    var3['questVideoMetadataFromServer'] = var5;
    var3['videoAssetFromServer'] = var4;
    var4 = function desktopVideoAssetsFromServer(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var1 = {};
            var6 = _closure1_slot0;
            var5 = var2.video;
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var1['video'] = var5;
            var5 = var2.video_low_res;
            var6 = null;
            if(!(var6 != var5)) { _fun0002_ip = 63; continue _fun0002 }
 42:
            var7 = _closure1_slot0;
            var5 = var2.video_low_res;
            var5 = var7.bind(var4)(var5);
            var1['videoLowRes'] = var5;
 63:
            var5 = var2.video_hls;
            if(!(var6 != var5)) { _fun0002_ip = 94; continue _fun0002 }
 73:
            var3 = _closure1_slot0;
            var2 = var2.video_hls;
            var2 = var3.bind(var4)(var2);
            var1['videoHls'] = var2;
 94:
            return var1;
        }
    };
    var3['desktopVideoAssetsFromServer'] = var4;
    var4 = function desktopVideoMessagesFromServer(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.video_title;
        var1['videoTitle'] = var3;
        var3 = var2.video_end_cta_title;
        var1['videoEndCtaTitle'] = var3;
        var3 = var2.video_end_cta_subtitle;
        var1['videoEndCtaSubtitle'] = var3;
        var2 = var2.video_end_cta_button_label;
        var1['videoEndCtaButtonLabel'] = var2;
        return var1;
    };
    var3['desktopVideoMessagesFromServer'] = var4;
    var4 = function mobileVideoAssetsFromServer(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var1 = {};
            var6 = _closure1_slot0;
            var5 = var2.video;
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var1['video'] = var5;
            var5 = var2.video_low_res;
            var6 = null;
            if(!(var6 != var5)) { _fun0003_ip = 63; continue _fun0003 }
 42:
            var7 = _closure1_slot0;
            var5 = var2.video_low_res;
            var5 = var7.bind(var4)(var5);
            var1['videoLowRes'] = var5;
 63:
            var5 = var2.video_hls;
            if(!(var6 != var5)) { _fun0003_ip = 94; continue _fun0003 }
 73:
            var3 = _closure1_slot0;
            var2 = var2.video_hls;
            var2 = var3.bind(var4)(var2);
            var1['videoHls'] = var2;
 94:
            return var1;
        }
    };
    var3['mobileVideoAssetsFromServer'] = var4;
    var2 = function mobileVideoMessagesFromServer(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.video_title;
        var1['videoTitle'] = var3;
        var3 = var2.video_end_cta_title;
        var1['videoEndCtaTitle'] = var3;
        var3 = var2.video_end_cta_subtitle;
        var1['videoEndCtaSubtitle'] = var3;
        var2 = var2.video_end_cta_button_label;
        var1['videoEndCtaButtonLabel'] = var2;
        return var1;
    };
    var3['mobileVideoMessagesFromServer'] = var2;
    return var1;
})();