// app/modules/messages/native/renderer/ExplicitMediaUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = function getSpoilerDescriptionForType(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = 'image';
            if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 'video';
            if(!(var1 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = 'file';
            if(!(var1 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = 'generic';
            if(!(var1 !== var2)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = undefined;
            return var1;
case 8:
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
case 6:
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
case 4:
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
case 2:
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
case 0:
            var1 = arg1;
            var3 = var1.content_scan_version;
            var2 = undefined;
            if(!(var2 === var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = var1.contentScanVersion;
            var2 = undefined;
            if(!(var2 !== var3)) { _fun0002_ip = 7; continue _fun0002 }
case 12:
            var2 = var1.contentScanVersion;
case 7:
            return var2;
case 10:
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
case 0:
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
            if(!var13) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var5 = var7;
case 13:
            var12['contentScanVersion'] = var5;
            var4 = var4.flags;
            var5 = var2 != var4;
            var2 = 0;
            if(!var5) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var2 = var4;
case 15:
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
            if(!var7) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var2 = var1;
case 17:
            var3 = var7;
            if(!var3) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var5 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 2;
            var1 = var8[var1];
            var5 = var5.bind(var10)(var1);
            var1 = var5.isVerifiedTeen;
            var3 = var1.bind(var5)();
case 19:
            var1 = {};
            var5 = var9;
            if(!var5) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var8 = true;
            var5 = var8 === var11;
case 21:
            var1['isSpoiler'] = var5;
            var5 = '';
            var8 = var5;
            if(!var9) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var9 = true;
            var8 = var5;
            if(!(var9 === var11)) { _fun0003_ip = 23; continue _fun0003 }
case 25:
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
case 23:
            var1['spoiler'] = var8;
            var1['obscure'] = var7;
            if(!var7) { _fun0003_ip = 26; continue _fun0003 }
case 27:
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
case 26:
            var1['obscureDescription'] = var5;
            var1['obscureAwaitingScan'] = var4;
            var1['verifyAge'] = var2;
            var1['obscureHideControls'] = var3;
            if(var2) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var2 = var3;
case 28:
            var1['obscureIsOpaque'] = var2;
            return var1;
        }
    };
    var3['getAttachmentObscurityProps'] = var4;
    var4 = function getUnfurledMediaItemObscurityProps(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
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
            if(!var4) { _fun0004_ip = 30; continue _fun0004 }
case 31:
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
case 30:
            if(!var9) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var9 = var5;
case 32:
            var2 = var2.length;
            var7 = var2 > var3;
            var2 = var7;
            if(!var7) { _fun0004_ip = 34; continue _fun0004 }
case 35:
            var2 = var1;
case 34:
            var3 = var7;
            if(!var3) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var5 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 2;
            var1 = var8[var1];
            var5 = var5.bind(var10)(var1);
            var1 = var5.isVerifiedTeen;
            var3 = var1.bind(var5)();
case 36:
            var1 = {};
            var1['isSpoiler'] = var9;
            var8 = null;
            if(!var9) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var9 = _closure1_slot3;
            var8 = var9.bind(var10)(var11);
case 38:
            var1['spoilerDescription'] = var8;
            var1['isObscured'] = var7;
            var5 = null;
            if(!var7) { _fun0004_ip = 40; continue _fun0004 }
case 41:
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
case 40:
            var1['obscureDescription'] = var5;
            var1['obscureAwaitingScan'] = var4;
            var1['verifyAge'] = var2;
            var1['obscureHideControls'] = var3;
            if(var2) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var2 = var3;
case 42:
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