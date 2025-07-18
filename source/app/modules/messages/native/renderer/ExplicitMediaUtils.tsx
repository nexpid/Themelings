// app/modules/messages/native/renderer/ExplicitMediaUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = function getSpoilerDescriptionForType(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = 'image';
            if(!(var1 !== var2)) { _fun0001_ip = 237; continue _fun0001 }
 14:
            var1 = 'video';
            if(!(var1 !== var2)) { _fun0001_ip = 173; continue _fun0001 }
 25:
            var1 = 'file';
            if(!(var1 !== var2)) { _fun0001_ip = 109; continue _fun0001 }
 33:
            var1 = 'generic';
            if(!(var1 !== var2)) { _fun0001_ip = 45; continue _fun0001 }
 41:
            var1 = undefined;
            return var1;
 45:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 3;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.G71b7+;
            var1 = var2.bind(var3)(var1);
            return var1;
 109:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 3;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.3Gc2XF;
            var1 = var2.bind(var3)(var1);
            return var1;
 173:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 3;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.ehBaMT;
            var1 = var2.bind(var3)(var1);
            return var1;
 237:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 3;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.sb2W2N;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = function getContentScanVersionFromMedia(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var3 = var1.content_scan_version;
            var2 = undefined;
            if(!(var2 === var3)) { _fun0002_ip = 35; continue _fun0002 }
 15:
            var3 = var1.contentScanVersion;
            var2 = undefined;
            if(!(var2 !== var3)) { _fun0002_ip = 33; continue _fun0002 }
 27:
            var2 = var1.contentScanVersion;
 33:
            return var2;
 35:
            var1 = var1.content_scan_version;
            return var1;
        }
    };
    var _closure1_slot2 = var1;
    var1 = 4;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/ExplicitMediaUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getAttachmentObscurityProps(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var4 = var1.attachment;
            var9 = var1.shouldObscureSpoiler;
            var8 = var1.enabledContentHarmTypeFlags;
            var1 = var1.shouldAgeVerify;
            var11 = var4.spoiler;
            var12 = {};
            var2 = _closure1_slot2;
            var10 = undefined;
            var7 = var2.bind(var10)(var4);
            var2 = null;
            var13 = var2 != var7;
            var3 = 0;
            var5 = 0;
            if(!var13) { _fun0003_ip = 65; continue _fun0003 }
 62:
            var5 = var7;
 65:
            var12['contentScanVersion'] = var5;
            var4 = var4.flags;
            var5 = var2 != var4;
            var2 = 0;
            if(!var5) { _fun0003_ip = 87; continue _fun0003 }
 84:
            var2 = var4;
 87:
            var12['flags'] = var2;
            var14 = _closure1_slot0;
            var15 = _closure1_slot1;
            var2 = var15[var3];
            var5 = var14.bind(var10)(var2);
            var4 = var5.getMediaObscuredReasonFromBitmask;
            var2 = {};
            var13 = 1;
            var7 = var15[var13];
            var7 = var14.bind(var10)(var7);
            var7 = var7.ObscuredMediaTypes;
            var7 = var7.Attachment;
            var2['type'] = var7;
            var2['media'] = var12;
            var2 = var4.bind(var5)(var2, var8);
            var4 = var15[var3];
            var7 = var14.bind(var10)(var4);
            var5 = var7.isMediaScanPending;
            var4 = {};
            var13 = var15[var13];
            var13 = var14.bind(var10)(var13);
            var13 = var13.ObscuredMediaTypes;
            var13 = var13.Attachment;
            var4['type'] = var13;
            var4['media'] = var12;
            var4 = var5.bind(var7)(var4, var8);
            var2 = var2.length;
            var7 = var2 > var3;
            var2 = var7;
            if(!var7) { _fun0003_ip = 226; continue _fun0003 }
 223:
            var2 = var1;
 226:
            var3 = var7;
            if(!var3) { _fun0003_ip = 262; continue _fun0003 }
 232:
            var5 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 2;
            var1 = var8[var1];
            var5 = var5.bind(var10)(var1);
            var1 = var5.isVerifiedTeen;
            var3 = var1.bind(var5)();
 262:
            var1 = {};
            var5 = var9;
            if(!var5) { _fun0003_ip = 276; continue _fun0003 }
 270:
            var8 = true;
            var5 = var8 === var11;
 276:
            var1['isSpoiler'] = var5;
            var5 = '';
            var8 = var5;
            if(!var9) { _fun0003_ip = 365; continue _fun0003 }
 291:
            var9 = true;
            var8 = var5;
            if(!(var9 === var11)) { _fun0003_ip = 365; continue _fun0003 }
 300:
            var13 = _closure1_slot0;
            var14 = _closure1_slot1;
            var9 = 3;
            var11 = var14[var9];
            var11 = var13.bind(var10)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var14[var9];
            var9 = var13.bind(var10)(var9);
            var9 = var9.t;
            var9 = var9.F+x38P;
            var11 = var11.bind(var12)(var9);
            var9 = var11.toUpperCase;
            var8 = var9.bind(var11)();
 365:
            var1['spoiler'] = var8;
            var1['obscure'] = var7;
            if(!var7) { _fun0003_ip = 433; continue _fun0003 }
 378:
            var9 = _closure1_slot0;
            var11 = _closure1_slot1;
            var6 = 3;
            var7 = var11[var6];
            var7 = var9.bind(var10)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var11[var6];
            var6 = var9.bind(var10)(var6);
            var6 = var6.t;
            var6 = var6.SpxcUV;
            var5 = var7.bind(var8)(var6);
 433:
            var1['obscureDescription'] = var5;
            var1['obscureAwaitingScan'] = var4;
            var1['verifyAge'] = var2;
            var1['obscureHideControls'] = var3;
            if(var2) { _fun0003_ip = 459; continue _fun0003 }
 456:
            var2 = var3;
 459:
            var1['obscureIsOpaque'] = var2;
            return var1;
        }
    };
    var3['getAttachmentObscurityProps'] = var4;
    var4 = function getUnfurledMediaItemObscurityProps(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var11 = var1.type;
            var14 = var1.mediaItem;
            var9 = var1.isSpoilered;
            var4 = var1.isAuthorBot;
            var5 = var1.shouldObscureSpoiler;
            var13 = var1.enabledContentHarmTypeFlags;
            var1 = var1.shouldAgeVerify;
            var15 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 0;
            var2 = var12[var3];
            var10 = undefined;
            var8 = var15.bind(var10)(var2);
            var7 = var8.getMediaObscuredReasonFromBitmask;
            var2 = {};
            var17 = 1;
            var12 = var12[var17];
            var12 = var15.bind(var10)(var12);
            var12 = var12.ObscuredMediaTypes;
            var12 = var12.GenericMedia;
            var2['type'] = var12;
            var2['media'] = var14;
            var2 = var7.bind(var8)(var2, var13);
            var4 = !var4;
            if(!var4) { _fun0004_ip = 182; continue _fun0004 }
 121:
            var16 = _closure1_slot0;
            var15 = _closure1_slot1;
            var7 = var15[var3];
            var12 = var16.bind(var10)(var7);
            var8 = var12.isMediaScanPending;
            var7 = {};
            var15 = var15[var17];
            var15 = var16.bind(var10)(var15);
            var15 = var15.ObscuredMediaTypes;
            var15 = var15.GenericMedia;
            var7['type'] = var15;
            var7['media'] = var14;
            var4 = var8.bind(var12)(var7, var13);
 182:
            if(!var9) { _fun0004_ip = 188; continue _fun0004 }
 185:
            var9 = var5;
 188:
            var2 = var2.length;
            var7 = var2 > var3;
            var2 = var7;
            if(!var7) { _fun0004_ip = 206; continue _fun0004 }
 203:
            var2 = var1;
 206:
            var3 = var7;
            if(!var3) { _fun0004_ip = 242; continue _fun0004 }
 212:
            var5 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 2;
            var1 = var8[var1];
            var5 = var5.bind(var10)(var1);
            var1 = var5.isVerifiedTeen;
            var3 = var1.bind(var5)();
 242:
            var1 = {};
            var1['isSpoiler'] = var9;
            var8 = null;
            if(!var9) { _fun0004_ip = 263; continue _fun0004 }
 254:
            var9 = _closure1_slot3;
            var8 = var9.bind(var10)(var11);
 263:
            var1['spoilerDescription'] = var8;
            var1['isObscured'] = var7;
            var5 = null;
            if(!var7) { _fun0004_ip = 333; continue _fun0004 }
 278:
            var9 = _closure1_slot0;
            var11 = _closure1_slot1;
            var6 = 3;
            var7 = var11[var6];
            var7 = var9.bind(var10)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var11[var6];
            var6 = var9.bind(var10)(var6);
            var6 = var6.t;
            var6 = var6.SpxcUV;
            var5 = var7.bind(var8)(var6);
 333:
            var1['obscureDescription'] = var5;
            var1['obscureAwaitingScan'] = var4;
            var1['verifyAge'] = var2;
            var1['obscureHideControls'] = var3;
            if(var2) { _fun0004_ip = 359; continue _fun0004 }
 356:
            var2 = var3;
 359:
            var1['obscureIsOpaque'] = var2;
            return var1;
        }
    };
    var3['getUnfurledMediaItemObscurityProps'] = var4;
    var2 = function getAttachmentObscurityDefaults() {
        var1 = {'isSpoiler': false, 'spoiler': ''};
        return var1;
    };
    var3['getAttachmentObscurityDefaults'] = var2;
    return var1;
})();