// app/modules/media_uploads/handleUploadAttachmentErrors.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.AbortCodes;
    var _closure1_slot3 = var7;
    var4 = var4.MAX_UPLOAD_COUNT;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_uploads/handleUploadAttachmentErrors.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function handleUploadMessageAttachmentsErrors(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = var1.file;
            var9 = var1.guildId;
            var5 = var1.analyticsLocations;
            var2 = var1.code;
            var6 = var1.reason;
            var1 = _closure1_slot3;
            var1 = var1.ENTITY_TOO_LARGE;
            if(!(var2 !== var1)) { _fun0001_ip = 389; continue _fun0001 }
 51:
            var1 = _closure1_slot3;
            var1 = var1.TOO_MANY_ATTACHMENTS;
            if(!(var2 !== var1)) { _fun0001_ip = 235; continue _fun0001 }
 68:
            var1 = _closure1_slot3;
            var1 = var1.ENTITY_EMPTY;
            var1 = var2 === var1;
            if(!var1) { _fun0001_ip = 230; continue _fun0001 }
 88:
            var3 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 3;
            var2 = var15[var2];
            var14 = undefined;
            var4 = var3.bind(var14)(var2);
            var3 = var4.show;
            var2 = {};
            var13 = _closure1_slot0;
            var10 = 4;
            var11 = var15[var10];
            var11 = var13.bind(var14)(var11);
            var16 = var11.intl;
            var12 = var16.string;
            var11 = var15[var10];
            var11 = var13.bind(var14)(var11);
            var11 = var11.t;
            var11 = var11.B3vFdX;
            var11 = var12.bind(var16)(var11);
            var2['title'] = var11;
            var11 = var15[var10];
            var11 = var13.bind(var14)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var15[var10];
            var10 = var13.bind(var14)(var10);
            var10 = var10.t;
            var10 = var10.9ZpT2N;
            var10 = var11.bind(var12)(var10);
            var2['body'] = var10;
            var2 = var3.bind(var4)(var2);
            var1 = true;
 230:
            _fun0001_ip = 387; continue _fun0001;
 235:
            var3 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 3;
            var2 = var15[var2];
            var14 = undefined;
            var4 = var3.bind(var14)(var2);
            var3 = var4.show;
            var2 = {};
            var11 = _closure1_slot0;
            var10 = 4;
            var12 = var15[var10];
            var12 = var11.bind(var14)(var12);
            var16 = var12.intl;
            var13 = var16.string;
            var12 = var15[var10];
            var12 = var11.bind(var14)(var12);
            var12 = var12.t;
            var12 = var12.wOr6hI;
            var12 = var13.bind(var16)(var12);
            var2['title'] = var12;
            var12 = var15[var10];
            var12 = var11.bind(var14)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var10 = var15[var10];
            var10 = var11.bind(var14)(var10);
            var10 = var10.t;
            var11 = var10.qqyp/f;
            var10 = {};
            var14 = _closure1_slot4;
            var10['limit'] = var14;
            var10 = var12.bind(var13)(var11, var10);
            var2['body'] = var10;
            var2 = var3.bind(var4)(var2);
            var1 = true;
 387:
            _fun0001_ip = 483; continue _fun0001;
 389:
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 1;
            var2 = var10[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['file'] = var8;
            var8 = _closure1_slot0;
            var7 = 2;
            var7 = var10[var7];
            var8 = var8.bind(var4)(var7);
            var7 = var8.maxFileSize;
            var7 = var7.bind(var8)(var9);
            var2['maxSize'] = var7;
            var2['analyticsLocations'] = var5;
            var5 = null;
            var7 = var5 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 471; continue _fun0001 }
 466:
            var5 = var6.type;
 471:
            var2['errorReason'] = var5;
            var2 = var3.bind(var4)(var2);
            var1 = true;
 483:
            return var1;
        }
    };
    var3['handleUploadMessageAttachmentsErrors'] = var2;
    return var1;
})();