// app/modules/media_uploads/native/showUploadFileSizeError.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot5 = var7;
    var4 = var4.AnalyticsSections;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FileUploadErrorTypes;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PremiumTypes;
    var _closure1_slot8 = var7;
    var7 = var4.PremiumUserLimits;
    var _closure1_slot9 = var7;
    var4 = var4.PremiumUpsellTypes;
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'Nitro Upsell';
    var4['NITRO_UPSELL'] = var7;
    var7 = 'Over Max Size';
    var4['OVER_MAX_SIZE'] = var7;
    var _closure1_slot11 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_uploads/native/showUploadFileSizeError.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function showUploadFileSizeError(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var16 = var1.file;
            var10 = var1.maxSize;
            var13 = var1.analyticsLocations;
            var6 = var1.errorReason;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var1;
            var5 = _closure1_slot4;
            var4 = var5.getCurrentUser;
            var8 = var4.bind(var5)();
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 5;
            var4 = var7[var4];
            var7 = var5.bind(var1)(var4);
            var5 = var7.isPremiumExactly;
            var4 = _closure1_slot8;
            var4 = var4.TIER_2;
            var15 = var5.bind(var7)(var8, var4);
            var4 = var16.items;
            var8 = null;
            if(!(var8 == var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var17 = new Array(0);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 6;
            var4 = var7[var4];
            var7 = var5.bind(var1)(var4);
            var5 = var7.getAttachmentMimeTypes;
            var4 = var16.items;
            var17 = var5.bind(var7)(var4);
case 4:
            var5 = new Array(0);
            _closure2_slot0 = var5;
            var14 = new Array(0);
            _closure2_slot1 = var14;
            var4 = var16.items;
            if(!(var8 != var4)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var7 = var16.items;
            var4 = var7.forEach;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure2_slot0;
                    var4 = var5.push;
                    var6 = var1.postCompressionSize;
                    var3 = null;
                    var7 = var3 != var6;
                    var3 = 0;
                    if(!var7) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var3 = var6;
case 7:
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var1 = var1.preCompressionSize;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var4.bind(var7)(var3);
case 5:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var19 = 7;
            var3 = var4[var19];
            var11 = var7.bind(var1)(var3);
            var9 = var11.getKestrelConfig;
            var3 = {};
            var12 = 'native.showUploadFileSizeError';
            var3['location'] = var12;
            var3 = var9.bind(var11)(var3);
            var11 = 8;
            var4 = var4[var11];
            var12 = var7.bind(var1)(var4);
            var9 = var12.trackWithMetadata;
            var4 = _closure1_slot5;
            var7 = var4.FILE_SIZE_LIMIT_EXCEEDED;
            var4 = {};
            var4['user_individual_file_size_limit'] = var10;
            var18 = var16.attachmentsCount;
            var4['num_attachments'] = var18;
            var4['pre_compression_file_sizes'] = var14;
            var18 = var16.totalPreCompressionSize;
            var4['pre_compression_aggregate_file_size'] = var18;
            var4['post_compression_file_sizes'] = var5;
            var18 = var16.totalPostCompressionSize;
            var4['post_compression_aggregate_file_size'] = var18;
            var4['attachment_mimetypes'] = var17;
            var17 = var6;
            if(!(var8 == var17)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var18 = _closure1_slot7;
            var17 = var18.ERROR_SOURCE_UNKNOWN;
case 9:
            var4['error_type'] = var17;
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var19];
            var18 = var18.bind(var1)(var17);
            var17 = var18.getKestrelVariantName;
            var17 = var17.bind(var18)(var3);
            var4['kestrel_variant'] = var17;
            var4 = var9.bind(var12)(var7, var4);
            var9 = 0;
            if(var15) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var7 = var16.items;
            var4 = var10;
            if(!(var8 != var7)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var7 = _closure1_slot7;
            var7 = var7.ERROR_SOURCE_UNKNOWN;
            var4 = var10;
            if(!(var6 !== var7)) { _fun0001_ip = 13; continue _fun0001 }
case 15:
            var7 = global;
            var8 = var7.Math;
            var7 = var8.max;
            var17 = _closure1_slot7;
            var17 = var17.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE;
            if(!(var6 === var17)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var14 = var5;
case 16:
            var5 = new Array(0);
            var22 = var5;
            var21 = var14;
            var20 = 0;
            var14 = arraySpread(var22, var21, var20);
            var22 = var7;
            var21 = var5;
            var20 = var8;
            var4 = apply(var22, var21, var20);
case 13:
            var9 = var4;
case 11:
            var4 = _closure1_slot7;
            var4 = var4.POSTCOMPRESSION_SUM_TOO_LARGE;
            var4 = var6 === var4;
            if(var4) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var5 = _closure1_slot7;
            var5 = var5.PRECOMPRESSION_SUM_TOO_LARGE;
            var4 = var6 === var5;
case 18:
            var5 = var15;
            if(var5) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var8 = _closure1_slot9;
            var7 = _closure1_slot8;
            var7 = var7.TIER_2;
            var7 = var8[var7];
            var7 = var7.fileSize;
            var5 = var9 > var7;
case 20:
            if(var5) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 9;
            var7 = var14[var7];
            var7 = var8.bind(var1)(var7);
            var7 = var7.MAX_TOTAL_ATTACHMENT_SIZE;
            var5 = var9 > var7;
case 22:
            if(var5) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var5 = var4;
case 24:
            if(var5) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var7 = _closure1_slot7;
            var7 = var7.ERROR_SOURCE_UNKNOWN;
            var5 = var6 === var7;
case 26:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var11];
            var14 = var8.bind(var1)(var7);
            var11 = var14.trackWithMetadata;
            var7 = _closure1_slot5;
            var8 = var7.FILE_UPLOAD_ALERT_VIEWED;
            var7 = {};
            var18 = _closure1_slot11;
            if(var5) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var17 = var18.NITRO_UPSELL;
            _fun0001_ip = 30; continue _fun0001;
case 28:
            var17 = var18.OVER_MAX_SIZE;
case 30:
            var7['alert_type'] = var17;
            var17 = var16.attachmentsCount;
            var7['num_attachments'] = var17;
            var17 = var16.currentSize;
            var7['total_attachment_size'] = var17;
            var17 = var16.hasImage;
            var7['has_image'] = var17;
            var16 = var16.hasVideo;
            var7['has_video'] = var16;
            var7['is_premium'] = var15;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var15 = 10;
            var15 = var17[var15];
            var16 = var16.bind(var1)(var15);
            var15 = var16.getImageCompressionQuality;
            var15 = var15.bind(var16)();
            var7['image_compression_quality'] = var15;
            var15 = _closure1_slot3;
            var15 = var15.dataSavingMode;
            var7['image_compression_setting_enabled'] = var15;
            var7 = var11.bind(var14)(var8, var7);
            if(var5) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var5 = 11;
            var5 = var15[var5];
            var8 = var14.bind(var1)(var5);
            var7 = var8.handleShowUpsellAlert;
            var5 = {};
            var16 = _closure1_slot0;
            var11 = 12;
            var11 = var15[var11];
            var11 = var16.bind(var1)(var11);
            var11 = var11.UpsellTypes;
            var11 = var11.UPLOAD;
            var5['initialUpsellKey'] = var11;
            var11 = {};
            var16 = _closure1_slot6;
            var16 = var16.FILE_UPLOAD_POPOUT;
            var11['section'] = var16;
            var5['analyticsLocation'] = var11;
            var11 = new Array(1);
            var22 = var11;
            var21 = var13;
            var20 = 0;
            var13 = arraySpread(var22, var21, var20);
            var12 = 13;
            var12 = var15[var12];
            var12 = var14.bind(var1)(var12);
            var12 = var12.FILE_UPLOAD_POPOUT;
            var11[12] = var12;
            var12 = 1;
            var12 = var13 + var12;
            var5['analyticsLocations'] = var11;
            var11 = {};
            var12 = _closure1_slot10;
            var12 = var12.UPLOAD_ERROR_UPSELL;
            var11['type'] = var12;
            var5['analyticsProperties'] = var11;
            var5['largestFileSize'] = var9;
            var5 = var7.bind(var8)(var5);
            _fun0001_ip = 33; continue _fun0001;
case 31:
            var5 = _closure1_slot7;
            var5 = var5.ERROR_SOURCE_UNKNOWN;
            if(!(var6 !== var5)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var6 = var3.enabled;
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 14;
            var7 = var5[var3];
            var7 = var9.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var5 = var5[var3];
            var5 = var9.bind(var1)(var5);
            var5 = var5.t;
            if(var6) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var6 = var5["/tGlcj"];
            var6 = var7.bind(var8)(var6);
            _fun0001_ip = 38; continue _fun0001;
case 36:
            var5 = var5.bRYgjH;
            var6 = var7.bind(var8)(var5);
case 38:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = var14[var3];
            var5 = var13.bind(var1)(var5);
            var8 = var5.intl;
            var7 = var8.formatToPlainString;
            var3 = var14[var3];
            var3 = var13.bind(var1)(var3);
            var3 = var3.t;
            if(var4) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var5 = var3.fxEKdS;
            var4 = {};
            var9 = 15;
            var11 = var14[var9];
            var12 = var13.bind(var1)(var11);
            var11 = var12.formatSize;
            var9 = var14[var9];
            var9 = var13.bind(var1)(var9);
            var9 = var9.BYTE_IN_KB;
            var10 = var10 / var9;
            var9 = {};
            var15 = true;
            var9['useKibibytes'] = var15;
            var9 = var11.bind(var12)(var10, var9);
            var4['maxSize'] = var9;
            var5 = var7.bind(var8)(var5, var4);
            _fun0001_ip = 41; continue _fun0001;
case 39:
            var4 = var3.tUOJdH;
            var3 = {};
            var9 = 15;
            var10 = var14[var9];
            var12 = var13.bind(var1)(var10);
            var11 = var12.formatSize;
            var10 = 9;
            var10 = var14[var10];
            var10 = var13.bind(var1)(var10);
            var10 = var10.MAX_TOTAL_ATTACHMENT_SIZE;
            var9 = var14[var9];
            var9 = var13.bind(var1)(var9);
            var9 = var9.BYTE_IN_KB;
            var10 = var10 / var9;
            var9 = {};
            var13 = true;
            var9['useKibibytes'] = var13;
            var9 = var11.bind(var12)(var10, var9);
            var3['maxSize'] = var9;
            var5 = var7.bind(var8)(var4, var3);
case 41:
            _fun0001_ip = 42; continue _fun0001;
case 34:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 14;
            var3 = var10[var4];
            var3 = var9.bind(var1)(var3);
            var8 = var3.intl;
            var7 = var8.string;
            var3 = var10[var4];
            var3 = var9.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.B3vFdU;
            var6 = var7.bind(var8)(var3);
            var7 = var10[var4];
            var7 = var9.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var4 = var10[var4];
            var4 = var9.bind(var1)(var4);
            var4 = var4.t;
            var4 = var4.zMEjJg;
            var5 = var7.bind(var8)(var4);
case 42:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 16;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.show;
            var2 = {};
            var2['title'] = var6;
            var2['body'] = var5;
            var2 = var3.bind(var4)(var2);
case 33:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();