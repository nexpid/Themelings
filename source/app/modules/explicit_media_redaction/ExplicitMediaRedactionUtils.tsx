// app/modules/explicit_media_redaction/ExplicitMediaRedactionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var10;
    var1 = function timeoutAttachmentsAndEmbedsForMessage(arg1) {
        var3 = arg1;
        var1 = {};
        var6 = var3.attachments;
        var5 = var6.map;
        var4 = function(arg1) {
            var1 = arg1;
            var2 = -1;
            var1['content_scan_version'] = var2;
            return var1;
        };
        var4 = var5.bind(var6)(var4);
        var1['attachments'] = var4;
        var4 = var3.embeds;
        var3 = var4.map;
        var2 = function(arg1) {
            var1 = arg1;
            var2 = -1;
            var1['contentScanVersion'] = var2;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        var1['embeds'] = var2;
        return var1;
    };
    var _closure1_slot9 = var1;
    var4 = function useShouldAgeVerifyForExplicitMedia() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 12;
            var1 = var5[var1];
            var3 = undefined;
            var6 = var4.bind(var3)(var1);
            var2 = var6.useIsEligibleForSettingsDefaultsAggregate;
            var1 = 'explicit_media_redaction_utils';
            var1 = var2.bind(var6)(var1);
            var2 = 13;
            var2 = var5[var2];
            var3 = var4.bind(var3)(var2);
            var2 = var3.useShouldShowTiggerPawtect;
            var2 = var2.bind(var3)();
            if(!var1) { _fun0001_ip = 70; continue _fun0001 }
 67:
            var1 = var2;
 70:
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var5);
    var1 = 0;
    var5 = var10[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var10[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var10[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var10[var5];
    var5 = var9.bind(var1)(var5);
    var6 = var5.EXPLICIT_MEDIA_MIN_HEIGHT;
    var _closure1_slot6 = var6;
    var5 = var5.EXPLICIT_MEDIA_MIN_WIDTH;
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var10[var5];
    var5 = var9.bind(var1)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot8 = var5;
    var7 = {};
    var5 = 'explicit_media_learn_more_viewed';
    var7['EXPLICIT_MEDIA_LEARN_MORE_VIEWED'] = var5;
    var5 = 'explicit_media_learn_more_click_settings';
    var7['EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS'] = var5;
    var5 = 'explicit_media_learn_more_click_learn_more';
    var7['EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE'] = var5;
    var5 = 'explicit_media_learn_more_click_dismiss';
    var7['EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS'] = var5;
    var5 = 'explicit_media_learn_more_click_false_positive';
    var7['EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE'] = var5;
    var5 = 'explicit_media_learn_more_click_age_verify_reverify';
    var7['EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY'] = var5;
    var5 = 'explicit_media_learn_more_click_age_verify_learn_more';
    var7['EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE'] = var5;
    var5 = 'explicit_media_false_positive_viewed';
    var7['EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED'] = var5;
    var5 = 'explicit_media_false_positive_click_confirm';
    var7['EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM'] = var5;
    var5 = 'explicit_media_false_positive_click_cancel';
    var7['EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL'] = var5;
    var5 = 'explicit_media_sender_false_positive_button_clicked';
    var7['EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED'] = var5;
    var5 = 'explicit_media_false_positive_clyde_message_sent';
    var7['EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT'] = var5;
    var6 = {};
    var5 = 'explicit_media_obscured_false_positive_flow';
    var6['EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW'] = var5;
    var5 = 'explicit_media_sender_false_positive_flow';
    var6['EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW'] = var5;
    var5 = 'explicit_media_message_send_blocked';
    var6['EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED'] = var5;
    var5 = 'explicit_media_add_media_to_forum_post_blocked';
    var6['EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED'] = var5;
    var5 = {};
    var8 = 'update';
    var5['UPDATE'] = var8;
    var8 = 'timeout';
    var5['TIMEOUT'] = var8;
    var8 = 15;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/explicit_media_redaction/ExplicitMediaRedactionUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function redactionSettingToRenderedString(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 5;
            var5 = var2[var6];
            var2 = undefined;
            var5 = var7.bind(var2)(var5);
            var5 = var5.ExplicitContentRedaction;
            var5 = var5.SHOW;
            if(!(var5 !== var4)) { _fun0002_ip = 128; continue _fun0002 }
 46:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var6];
            var5 = var7.bind(var2)(var5);
            var5 = var5.ExplicitContentRedaction;
            var5 = var5.BLUR;
            if(!(var5 !== var4)) { _fun0002_ip = 121; continue _fun0002 }
 79:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.ExplicitContentRedaction;
            var3 = var3.BLOCK;
            if(!(var3 !== var4)) { _fun0002_ip = 114; continue _fun0002 }
 112:
            return var2;
 114:
            var2 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 6;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.D/157e;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            return var2;
 121:
            var2 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 6;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.S49UaW;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            return var2;
 128:
            var1 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 6;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.5k5OFh;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            return var1;
        }
    };
    var3['redactionSettingToRenderedString'] = var8;
    var8 = function isPendingScanVersion(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot3;
            var2 = var3.get;
            var1 = 'explicit_media_redaction_ignore_pending_scan';
            var1 = var2.bind(var3)(var1);
            var1 = !var1;
            if(!var1) { _fun0003_ip = 83; continue _fun0003 }
 32:
            var2 = 0;
            var2 = var2 !== var5;
            if(!var2) { _fun0003_ip = 51; continue _fun0003 }
 41:
            var3 = -1;
            var2 = var3 !== var5;
 51:
            if(!var2) { _fun0003_ip = 80; continue _fun0003 }
 54:
            var3 = null;
            var3 = var3 == var5;
            if(var3) { _fun0003_ip = 77; continue _fun0003 }
 63:
            var4 = _closure1_slot5;
            var4 = var4.validContentScanVersion;
            var3 = var5 !== var4;
 77:
            var2 = var3;
 80:
            var1 = var2;
 83:
            return var1;
        }
    };
    var3['isPendingScanVersion'] = var8;
    var3['TrackMediaRedactionActionType'] = var7;
    var3['TrackMediaRedactionContext'] = var6;
    var6 = function trackMediaRedactionAction(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var12 = var1.action;
            var9 = var1.channelId;
            var7 = var1.messageId;
            var5 = var1.context;
            var10 = null;
            if(!(var10 != var9)) { _fun0004_ip = 171; continue _fun0004 }
 32:
            if(!(var10 != var7)) { _fun0004_ip = 171; continue _fun0004 }
 39:
            var2 = _closure1_slot4;
            var1 = var2.getChannel;
            var11 = var1.bind(var2)(var9);
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var8 = undefined;
            var4 = var2.bind(var8)(var1);
            var3 = var4.track;
            var1 = _closure1_slot8;
            var2 = var1.EXPLICIT_MEDIA_ACTION;
            var1 = {};
            var1['action'] = var12;
            var12 = var10 == var11;
            var10 = undefined;
            if(var12) { _fun0004_ip = 113; continue _fun0004 }
 108:
            var10 = var11.guild_id;
 113:
            var1['guild_id'] = var10;
            var1['channel_id'] = var9;
            var1['message_id'] = var7;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 8;
            var6 = var9[var6];
            var7 = var7.bind(var8)(var6);
            var6 = var7.isCurrentUserTeen;
            var6 = var6.bind(var7)();
            var1['user_is_underage'] = var6;
            var1['context'] = var5;
            var1 = var3.bind(var4)(var2, var1);
 171:
            var1 = undefined;
            return var1;
        }
    };
    var3['trackMediaRedactionAction'] = var6;
    var3['TimeoutCancelSource'] = var5;
    var5 = function trackScanTiming(arg1, arg2) {
        var6 = global;
        var2 = var6.Date;
        var1 = var2.now;
        var2 = var1.bind(var2)();
        var1 = arg1;
        var7 = var2 - var1;
        var4 = var6.Math;
        var3 = var4.min;
        var5 = var6.Math;
        var2 = var5.floor;
        var1 = 1000;
        var1 = var7 / var1;
        var2 = var2.bind(var5)(var1);
        var1 = 3;
        var8 = var3.bind(var4)(var2, var1);
        var3 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 9;
        var2 = var9[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.increment;
        var2 = {};
        var7 = _closure1_slot0;
        var5 = 10;
        var5 = var9[var5];
        var5 = var7.bind(var1)(var5);
        var5 = var5.MetricEvents;
        var5 = var5.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING;
        var2['name'] = var5;
        var5 = var6.HermesInternal;
        var7 = var5.concat;
        var5 = 'timingBucket:';
        var7 = var7.bind(var5)(var8);
        var5 = new Array(3);
        var5[0] = var7;
        var6 = var6.HermesInternal;
        var8 = var6.concat;
        var7 = 'source:';
        var6 = arg2;
        var6 = var8.bind(var7)(var6);
        var5[1] = var6;
        var6 = 'metricVersion:1';
        var5[2] = var6;
        var2['tags'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['trackScanTiming'] = var5;
    var5 = function trackScanningTimedOut(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var11 = var2.channelId;
            var10 = var2.messageId;
            var1 = var2.attachmentIds;
            var8 = var2.embedIds;
            var7 = null;
            if(!(var7 != var11)) { _fun0005_ip = 443; continue _fun0005 }
 34:
            if(!(var7 != var10)) { _fun0005_ip = 443; continue _fun0005 }
 41:
            var2 = var7 == var1;
            var6 = undefined;
            var3 = undefined;
            if(var2) { _fun0005_ip = 57; continue _fun0005 }
 52:
            var3 = var1.length;
 57:
            var4 = var7 != var3;
            var5 = 0;
            var2 = 0;
            if(!var4) { _fun0005_ip = 71; continue _fun0005 }
 68:
            var2 = var3;
 71:
            if(!(var5 === var2)) { _fun0005_ip = 108; continue _fun0005 }
 75:
            var2 = var7 == var8;
            var3 = undefined;
            if(var2) { _fun0005_ip = 89; continue _fun0005 }
 84:
            var3 = var8.length;
 89:
            var4 = var7 != var3;
            var2 = 0;
            if(!var4) { _fun0005_ip = 101; continue _fun0005 }
 98:
            var2 = var3;
 101:
            if(!(var5 !== var2)) { _fun0005_ip = 443; continue _fun0005 }
 108:
            var4 = _closure1_slot4;
            var3 = var4.getChannel;
            var13 = var3.bind(var4)(var11);
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 7;
            var3 = var9[var3];
            var12 = var4.bind(var6)(var3);
            var9 = var12.track;
            var3 = _closure1_slot8;
            var4 = var3.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT;
            var3 = {};
            var3['channel_id'] = var11;
            var14 = var7 == var13;
            var11 = undefined;
            if(var14) { _fun0005_ip = 180; continue _fun0005 }
 175:
            var11 = var13.guild_id;
 180:
            var3['guild_id'] = var11;
            var3['message_id'] = var10;
            var3['embed_ids'] = var8;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var13 = 8;
            var13 = var11[var13];
            var14 = var10.bind(var6)(var13);
            var13 = var14.isCurrentUserTeen;
            var13 = var13.bind(var14)();
            var3['user_is_underage'] = var13;
            var13 = 11;
            var13 = var11[var13];
            var13 = var10.bind(var6)(var13);
            var13 = var13.MESSAGE_SCAN_TIMEOUT;
            var3['scan_timeout_duration'] = var13;
            var3['attachment_ids_v2'] = var1;
            var3 = var9.bind(var12)(var4, var3);
            var3 = _closure1_slot1;
            var2 = 9;
            var4 = var11[var2];
            var13 = var3.bind(var6)(var4);
            var12 = var13.increment;
            var4 = {};
            var9 = 10;
            var14 = var11[var9];
            var14 = var10.bind(var6)(var14);
            var14 = var14.MetricEvents;
            var14 = var14.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT;
            var4['name'] = var14;
            var14 = ['metricVersion:1'];
            var4['tags'] = var14;
            var4 = var12.bind(var13)(var4);
            var2 = var11[var2];
            var4 = var3.bind(var6)(var2);
            var3 = var4.distribution;
            var2 = {};
            var9 = var11[var9];
            var9 = var10.bind(var6)(var9);
            var9 = var9.MetricEvents;
            var9 = var9.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION;
            var2['name'] = var9;
            var10 = var7 == var1;
            var9 = undefined;
            if(var10) { _fun0005_ip = 395; continue _fun0005 }
 390:
            var9 = var1.length;
 395:
            var10 = var7 != var9;
            var1 = 0;
            if(!var10) { _fun0005_ip = 407; continue _fun0005 }
 404:
            var1 = var9;
 407:
            var9 = var7 == var8;
            var6 = undefined;
            if(var9) { _fun0005_ip = 421; continue _fun0005 }
 416:
            var6 = var8.length;
 421:
            var7 = var7 != var6;
            var5 = 0;
            if(!var7) { _fun0005_ip = 433; continue _fun0005 }
 430:
            var5 = var6;
 433:
            var1 = var1 + var5;
            var1 = var3.bind(var4)(var2, var1);
 443:
            var1 = undefined;
            return var1;
        }
    };
    var3['trackScanningTimedOut'] = var5;
    var5 = function trackExplicitMediaRedactableMessagedLoaded(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var13 = var1.channelId;
            var10 = var1.numOfAttachments;
            var2 = var1.numOfAttachmentsPendingScan;
            var9 = var1.numOfEmbeds;
            var1 = var1.numOfEmbedsPendingScan;
            var11 = null;
            if(!(var11 != var13)) { _fun0006_ip = 225; continue _fun0006 }
 41:
            var4 = _closure1_slot4;
            var3 = var4.getChannel;
            var12 = var3.bind(var4)(var13);
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 7;
            var3 = var6[var3];
            var7 = undefined;
            var8 = var4.bind(var7)(var3);
            var6 = var8.track;
            var3 = _closure1_slot8;
            var4 = var3.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED;
            var3 = {};
            var3['channel_id'] = var13;
            var13 = var11 == var12;
            var11 = undefined;
            if(var13) { _fun0006_ip = 115; continue _fun0006 }
 110:
            var11 = var12.guild_id;
 115:
            var3['guild_id'] = var11;
            var3['num_of_attachments'] = var10;
            var3['num_of_attachments_pending_scan'] = var2;
            var3['num_of_embeds'] = var9;
            var3['num_of_embeds_pending_scan'] = var1;
            var3 = var6.bind(var8)(var4, var3);
            var4 = var2 + var1;
            var1 = 0;
            if(!(var4 > var1)) { _fun0006_ip = 225; continue _fun0006 }
 159:
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 9;
            var1 = var8[var1];
            var3 = var2.bind(var7)(var1);
            var2 = var3.distribution;
            var1 = {};
            var6 = _closure1_slot0;
            var5 = 10;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.MetricEvents;
            var5 = var5.EXPLICIT_MEDIA_PENDING_MESSAGE_LOADED_V2;
            var1['name'] = var5;
            var1 = var2.bind(var3)(var1, var4);
 225:
            var1 = undefined;
            return var1;
        }
    };
    var3['trackExplicitMediaRedactableMessagedLoaded'] = var5;
    var5 = function trackRedactableMessageLoaded(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var17 = var1.messageId;
            var16 = var1.channelId;
            var12 = var1.numOfAttachments;
            var9 = var1.numOfEmbeds;
            var11 = var1.numOfGoreAttachments;
            var10 = var1.numOfExplicitAttachments;
            var8 = var1.numOfGoreEmbeds;
            var7 = var1.numOfExplicitEmbeds;
            var1 = 0;
            var6 = var10 > var1;
            if(var6) { _fun0007_ip = 62; continue _fun0007 }
 58:
            var6 = var7 > var1;
 62:
            var5 = var11 > var1;
            if(var5) { _fun0007_ip = 73; continue _fun0007 }
 69:
            var5 = var8 > var1;
 73:
            var15 = null;
            if(!(var15 != var16)) { _fun0007_ip = 254; continue _fun0007 }
 82:
            if(!(var15 != var17)) { _fun0007_ip = 254; continue _fun0007 }
 89:
            if(var6) { _fun0007_ip = 98; continue _fun0007 }
 92:
            if(!var5) { _fun0007_ip = 254; continue _fun0007 }
 98:
            var3 = _closure1_slot4;
            var2 = var3.getChannel;
            var14 = var2.bind(var3)(var16);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 7;
            var2 = var4[var2];
            var13 = undefined;
            var4 = var3.bind(var13)(var2);
            var3 = var4.track;
            var1 = _closure1_slot8;
            var2 = var1.REDACTABLE_MESSAGE_LOADED;
            var1 = {};
            var1['message_id'] = var17;
            var1['channel_id'] = var16;
            var17 = var15 == var14;
            var16 = undefined;
            if(var17) { _fun0007_ip = 177; continue _fun0007 }
 172:
            var16 = var14.type;
 177:
            var1['channel_type'] = var16;
            var15 = var15 == var14;
            var13 = undefined;
            if(var15) { _fun0007_ip = 196; continue _fun0007 }
 191:
            var13 = var14.guild_id;
 196:
            var1['guild_id'] = var13;
            var1['num_of_attachments'] = var12;
            var1['num_of_gore_attachments'] = var11;
            var1['num_of_explicit_attachments'] = var10;
            var1['num_of_embeds'] = var9;
            var1['num_of_gore_embeds'] = var8;
            var1['num_of_explicit_embeds'] = var7;
            var1['has_redactable_explicit'] = var6;
            var1['has_redactable_gore'] = var5;
            var1 = var3.bind(var4)(var2, var1);
 254:
            var1 = undefined;
            return var1;
        }
    };
    var3['trackRedactableMessageLoaded'] = var5;
    var5 = function trackExplicitMediaScanComplete(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var13 = var1.messageId;
            var12 = var1.channelId;
            var8 = var1.numOfAttachments;
            var7 = var1.numOfExplicitAttachments;
            var6 = var1.numOfEmbeds;
            var5 = var1.numOfExplicitEmbeds;
            var11 = null;
            if(!(var11 != var12)) { _fun0008_ip = 174; continue _fun0008 }
 46:
            var3 = _closure1_slot4;
            var2 = var3.getChannel;
            var10 = var2.bind(var3)(var12);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 7;
            var2 = var4[var2];
            var9 = undefined;
            var4 = var3.bind(var9)(var2);
            var3 = var4.track;
            var1 = _closure1_slot8;
            var2 = var1.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE;
            var1 = {};
            var1['message_id'] = var13;
            var1['channel_id'] = var12;
            var13 = var11 == var10;
            var12 = undefined;
            if(var13) { _fun0008_ip = 125; continue _fun0008 }
 120:
            var12 = var10.type;
 125:
            var1['channel_type'] = var12;
            var11 = var11 == var10;
            var9 = undefined;
            if(var11) { _fun0008_ip = 144; continue _fun0008 }
 139:
            var9 = var10.guild_id;
 144:
            var1['guild_id'] = var9;
            var1['num_of_attachments'] = var8;
            var1['num_of_explicit_attachments'] = var7;
            var1['num_of_embeds'] = var6;
            var1['num_of_explicit_embeds'] = var5;
            var1 = var3.bind(var4)(var2, var1);
 174:
            var1 = undefined;
            return var1;
        }
    };
    var3['trackExplicitMediaScanComplete'] = var5;
    var5 = function handleExplicitMediaScanTimeoutForMessage(arg1) {
        var3 = arg1;
        var1 = _closure1_slot9;
        var2 = undefined;
        var1 = var1.bind(var2)(var3);
        var6 = var1.attachments;
        var5 = var1.embeds;
        var1 = function handleExplicitMediaScanTimeoutForForwardedMessage(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var1 = arg1;
                var1 = var1.messageSnapshots;
                var2 = null;
                if(!(var2 != var1)) { _fun0009_ip = 45; continue _fun0009 }
 15:
                var3 = var1.length;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0009_ip = 45; continue _fun0009 }
 26:
                var3 = var1.map;
                var2 = function(arg1) {
                    var3 = arg1;
                    var4 = var3.message;
                    var2 = _closure1_slot9;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var4);
                    var6 = var1.attachments;
                    var5 = var1.embeds;
                    var2 = var4.merge;
                    var1 = {};
                    var1['attachments'] = var6;
                    var1['embeds'] = var5;
                    var4 = var2.bind(var4)(var1);
                    var2 = var3.merge;
                    var1 = {};
                    var1['message'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var2;
 45:
                return var1;
            }
        };
        var4 = var1.bind(var2)(var3);
        var2 = var3.merge;
        var1 = {};
        var1['attachments'] = var6;
        var1['embeds'] = var5;
        var1['messageSnapshots'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['handleExplicitMediaScanTimeoutForMessage'] = var5;
    var5 = function(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var2 = null;
            var1 = var2 != var5;
            if(!var1) { _fun0010_ip = 19; continue _fun0010 }
 15:
            var1 = var2 != var4;
 19:
            if(!var1) { _fun0010_ip = 47; continue _fun0010 }
 22:
            var2 = _closure1_slot7;
            var2 = var5 <= var2;
            if(var2) { _fun0010_ip = 44; continue _fun0010 }
 36:
            var3 = _closure1_slot6;
            var2 = var4 <= var3;
 44:
            var1 = var2;
 47:
            return var1;
        }
    };
    var3['isObscuredMediaBelowConstraints'] = var5;
    var5 = function shouldAgeVerifyForExplicitMedia() {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 12;
            var1 = var5[var1];
            var3 = undefined;
            var6 = var4.bind(var3)(var1);
            var2 = var6.isEligibleForSettingsDefaultsAggregate;
            var1 = 'explicit_media_redaction_utils';
            var1 = var2.bind(var6)(var1);
            var2 = 13;
            var2 = var5[var2];
            var3 = var4.bind(var3)(var2);
            var2 = var3.shouldShowTiggerPawtect;
            var2 = var2.bind(var3)();
            if(!var1) { _fun0011_ip = 70; continue _fun0011 }
 67:
            var1 = var2;
 70:
            return var1;
        }
    };
    var3['shouldAgeVerifyForExplicitMedia'] = var5;
    var3['useShouldAgeVerifyForExplicitMedia'] = var4;
    var4 = function useShouldAgeVerifyForReason(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var4 = arg1;
            var1 = _closure1_slot10;
            var5 = undefined;
            var1 = var1.bind(var5)();
            var3 = !var1;
            if(var3) { _fun0012_ip = 28; continue _fun0012 }
 22:
            var1 = null;
            var3 = var1 == var4;
 28:
            var1 = !var3;
            if(var3) { _fun0012_ip = 70; continue _fun0012 }
 34:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 14;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.AGE_VERIFICATION_OBSCURABLE_REASONS;
            var2 = var3.has;
            var1 = var2.bind(var3)(var4);
 70:
            return var1;
        }
    };
    var3['useShouldAgeVerifyForReason'] = var4;
    var4 = function trackToggleMediaObscurityV2(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var7 = var1.obscure;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 13;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isVerifiedAdult;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0013_ip = 108; continue _fun0013 }
 47:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 7;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot8;
            var3 = var2.EXPLICIT_MEDIA_OBSCURITY_TOGGLE_V2;
            var2 = {};
            var6 = 'show';
            if(!var7) { _fun0013_ip = 95; continue _fun0013 }
 91:
            var6 = 'hide';
 95:
            var2['toggle_direction'] = var6;
            var2 = var4.bind(var5)(var3, var2);
 108:
            return var1;
        }
    };
    var3['trackToggleMediaObscurityV2'] = var4;
    var2 = function hasMessageSnapshotsWithAttachmentsOrEmbeds(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var4 = var1.message_snapshots;
            var1 = null;
            var2 = var1 == var4;
            var1 = undefined;
            if(var2) { _fun0014_ip = 38; continue _fun0014 }
 20:
            var3 = var4.some;
            var2 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var3 = arg1;
                    var5 = var3.message;
                    var4 = null;
                    var6 = var4 == var5;
                    var1 = undefined;
                    if(var6) { _fun0015_ip = 25; continue _fun0015 }
 19:
                    var1 = var5.attachments;
 25:
                    var1 = var4 != var1;
                    if(!var1) { _fun0015_ip = 54; continue _fun0015 }
 32:
                    var5 = var3.message;
                    var5 = var5.attachments;
                    var6 = var5.length;
                    var5 = 0;
                    var1 = var6 > var5;
 54:
                    if(var1) { _fun0015_ip = 109; continue _fun0015 }
 57:
                    var5 = var3.message;
                    var6 = var4 == var5;
                    var2 = undefined;
                    if(var6) { _fun0015_ip = 77; continue _fun0015 }
 71:
                    var2 = var5.embeds;
 77:
                    var2 = var4 != var2;
                    if(!var2) { _fun0015_ip = 106; continue _fun0015 }
 84:
                    var3 = var3.message;
                    var3 = var3.embeds;
                    var4 = var3.length;
                    var3 = 0;
                    var2 = var4 > var3;
 106:
                    var1 = var2;
 109:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
 38:
            return var1;
        }
    };
    var3['hasMessageSnapshotsWithAttachmentsOrEmbeds'] = var2;
    return var1;
})();