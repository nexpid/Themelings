// app/modules/media_uploads/native/showUploadFileSizeError.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_uploads/native/showUploadFileSizeError.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function showUploadFileSizeError(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var15 = var1.file;
            var10 = var1.maxSize;
            var12 = var1.analyticsLocations;
            var4 = var1.errorReason;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var1;
            var6 = _closure1_slot4;
            var5 = var6.getCurrentUser;
            var8 = var5.bind(var6)();
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 5;
            var5 = var7[var5];
            var7 = var6.bind(var1)(var5);
            var6 = var7.isPremiumExactly;
            var5 = _closure1_slot8;
            var5 = var5.TIER_2;
            var14 = var6.bind(var7)(var8, var5);
            var5 = var15.items;
            var7 = null;
            if(!(var7 == var5)) { _fun0001_ip = 115; continue _fun0001 }
 109:
            var16 = new Array(0);
            _fun0001_ip = 152; continue _fun0001;
 115:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 6;
            var5 = var8[var5];
            var8 = var6.bind(var1)(var5);
            var6 = var8.getAttachmentMimeTypes;
            var5 = var15.items;
            var16 = var6.bind(var8)(var5);
 152:
            var5 = new Array(0);
            _closure2_slot0 = var5;
            var13 = new Array(0);
            _closure2_slot1 = var13;
            var6 = var15.items;
            if(!(var7 != var6)) { _fun0001_ip = 199; continue _fun0001 }
 178:
            var8 = var15.items;
            var6 = var8.forEach;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var5 = _closure2_slot0;
                    var4 = var5.push;
                    var6 = var1.postCompressionSize;
                    var3 = null;
                    var7 = var3 != var6;
                    var3 = 0;
                    if(!var7) { _fun0002_ip = 35; continue _fun0002 }
 32:
                    var3 = var6;
 35:
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var1 = var1.preCompressionSize;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var6.bind(var8)(var3);
 199:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var9 = 7;
            var3 = var3[var9];
            var11 = var6.bind(var1)(var3);
            var8 = var11.trackWithMetadata;
            var3 = _closure1_slot5;
            var6 = var3.FILE_SIZE_LIMIT_EXCEEDED;
            var3 = {};
            var3['user_individual_file_size_limit'] = var10;
            var17 = var15.attachmentsCount;
            var3['num_attachments'] = var17;
            var3['pre_compression_file_sizes'] = var13;
            var17 = var15.totalPreCompressionSize;
            var3['pre_compression_aggregate_file_size'] = var17;
            var3['post_compression_file_sizes'] = var5;
            var17 = var15.totalPostCompressionSize;
            var3['post_compression_aggregate_file_size'] = var17;
            var3['attachment_mimetypes'] = var16;
            var16 = var4;
            if(!(var7 == var16)) { _fun0001_ip = 319; continue _fun0001 }
 309:
            var17 = _closure1_slot7;
            var16 = var17.ERROR_SOURCE_UNKNOWN;
 319:
            var3['error_type'] = var16;
            var3 = var8.bind(var11)(var6, var3);
            var8 = 0;
            if(var14) { _fun0001_ip = 427; continue _fun0001 }
 335:
            var6 = var15.items;
            var3 = var10;
            if(!(var7 != var6)) { _fun0001_ip = 424; continue _fun0001 }
 348:
            var6 = _closure1_slot7;
            var6 = var6.ERROR_SOURCE_UNKNOWN;
            var3 = var10;
            if(!(var4 !== var6)) { _fun0001_ip = 424; continue _fun0001 }
 365:
            var6 = global;
            var7 = var6.Math;
            var6 = var7.max;
            var16 = _closure1_slot7;
            var16 = var16.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE;
            if(!(var4 === var16)) { _fun0001_ip = 395; continue _fun0001 }
 392:
            var13 = var5;
 395:
            var5 = new Array(0);
            var21 = var5;
            var20 = var13;
            var19 = 0;
            var13 = arraySpread(var21, var20, var19);
            var21 = var6;
            var20 = var5;
            var19 = var7;
            var3 = apply(var21, var20, var19);
 424:
            var8 = var3;
 427:
            var3 = _closure1_slot7;
            var3 = var3.POSTCOMPRESSION_SUM_TOO_LARGE;
            var5 = var4 === var3;
            if(var5) { _fun0001_ip = 458; continue _fun0001 }
 444:
            var3 = _closure1_slot7;
            var3 = var3.PRECOMPRESSION_SUM_TOO_LARGE;
            var5 = var4 === var3;
 458:
            var3 = var14;
            if(var3) { _fun0001_ip = 492; continue _fun0001 }
 464:
            var7 = _closure1_slot9;
            var6 = _closure1_slot8;
            var6 = var6.TIER_2;
            var6 = var7[var6];
            var6 = var6.fileSize;
            var3 = var8 > var6;
 492:
            if(var3) { _fun0001_ip = 525; continue _fun0001 }
 495:
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 8;
            var6 = var13[var6];
            var6 = var7.bind(var1)(var6);
            var6 = var6.MAX_TOTAL_ATTACHMENT_SIZE;
            var3 = var8 > var6;
 525:
            if(var3) { _fun0001_ip = 531; continue _fun0001 }
 528:
            var3 = var5;
 531:
            if(var3) { _fun0001_ip = 548; continue _fun0001 }
 534:
            var6 = _closure1_slot7;
            var6 = var6.ERROR_SOURCE_UNKNOWN;
            var3 = var4 === var6;
 548:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var13 = var7.bind(var1)(var6);
            var9 = var13.trackWithMetadata;
            var6 = _closure1_slot5;
            var7 = var6.FILE_UPLOAD_ALERT_VIEWED;
            var6 = {};
            var17 = _closure1_slot11;
            if(var3) { _fun0001_ip = 598; continue _fun0001 }
 590:
            var16 = var17.NITRO_UPSELL;
            _fun0001_ip = 604; continue _fun0001;
 598:
            var16 = var17.OVER_MAX_SIZE;
 604:
            var6['alert_type'] = var16;
            var16 = var15.attachmentsCount;
            var6['num_attachments'] = var16;
            var16 = var15.currentSize;
            var6['total_attachment_size'] = var16;
            var16 = var15.hasImage;
            var6['has_image'] = var16;
            var15 = var15.hasVideo;
            var6['has_video'] = var15;
            var6['is_premium'] = var14;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var14 = 9;
            var14 = var16[var14];
            var15 = var15.bind(var1)(var14);
            var14 = var15.getImageCompressionQuality;
            var14 = var14.bind(var15)();
            var6['image_compression_quality'] = var14;
            var14 = _closure1_slot3;
            var14 = var14.dataSavingMode;
            var6['image_compression_setting_enabled'] = var14;
            var6 = var9.bind(var13)(var7, var6);
            if(var3) { _fun0001_ip = 901; continue _fun0001 }
 732:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var3 = 10;
            var3 = var14[var3];
            var7 = var13.bind(var1)(var3);
            var6 = var7.handleShowUpsellAlert;
            var3 = {};
            var15 = _closure1_slot0;
            var9 = 11;
            var9 = var14[var9];
            var9 = var15.bind(var1)(var9);
            var9 = var9.UpsellTypes;
            var9 = var9.UPLOAD;
            var3['initialUpsellKey'] = var9;
            var9 = {};
            var15 = _closure1_slot6;
            var15 = var15.FILE_UPLOAD_POPOUT;
            var9['section'] = var15;
            var3['analyticsLocation'] = var9;
            var9 = new Array(1);
            var21 = var9;
            var20 = var12;
            var19 = 0;
            var12 = arraySpread(var21, var20, var19);
            var11 = 12;
            var11 = var14[var11];
            var11 = var13.bind(var1)(var11);
            var11 = var11.FILE_UPLOAD_POPOUT;
            var9[var12] = var11;
            var11 = 1;
            var11 = var12 + var11;
            var3['analyticsLocations'] = var9;
            var9 = {};
            var11 = _closure1_slot10;
            var11 = var11.UPLOAD_ERROR_UPSELL;
            var9['type'] = var11;
            var3['analyticsProperties'] = var9;
            var3['largestFileSize'] = var8;
            var3 = var6.bind(var7)(var3);
            _fun0001_ip = 1328; continue _fun0001;
 901:
            var3 = _closure1_slot7;
            var3 = var3.ERROR_SOURCE_UNKNOWN;
            if(!(var4 !== var3)) { _fun0001_ip = 1186; continue _fun0001 }
 918:
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = 13;
            var6 = var3[var4];
            var6 = var8.bind(var1)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var3 = var3[var4];
            var3 = var8.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3./tGlcn;
            var3 = var6.bind(var7)(var3);
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = var14[var4];
            var6 = var13.bind(var1)(var6);
            var8 = var6.intl;
            var7 = var8.formatToPlainString;
            var4 = var14[var4];
            var4 = var13.bind(var1)(var4);
            var4 = var4.t;
            if(var5) { _fun0001_ip = 1090; continue _fun0001 }
 1017:
            var6 = var4.fxEKdX;
            var5 = {};
            var9 = 14;
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
            var5['maxSize'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            _fun0001_ip = 1181; continue _fun0001;
 1090:
            var6 = var4.tUOJdH;
            var4 = {};
            var9 = 14;
            var10 = var14[var9];
            var12 = var13.bind(var1)(var10);
            var11 = var12.formatSize;
            var10 = 8;
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
            var4['maxSize'] = var9;
            var5 = var7.bind(var8)(var6, var4);
 1181:
            var6 = var3;
            _fun0001_ip = 1287; continue _fun0001;
 1186:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 13;
            var3 = var10[var4];
            var3 = var9.bind(var1)(var3);
            var8 = var3.intl;
            var7 = var8.string;
            var3 = var10[var4];
            var3 = var9.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.B3vFdX;
            var6 = var7.bind(var8)(var3);
            var7 = var10[var4];
            var7 = var9.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var4 = var10[var4];
            var4 = var9.bind(var1)(var4);
            var4 = var4.t;
            var4 = var4.zMEjJi;
            var5 = var7.bind(var8)(var4);
 1287:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 15;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.show;
            var2 = {};
            var2['title'] = var6;
            var2['body'] = var5;
            var2 = var3.bind(var4)(var2);
 1328:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();