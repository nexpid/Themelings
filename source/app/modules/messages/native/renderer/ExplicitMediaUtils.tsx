// app/modules/messages/native/renderer/ExplicitMediaUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            var1 = 5;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.G71b77;
            var1 = var2.bind(var3)(var1);
            return var1;
case 6:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 5;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.3Gc2XP;
            var1 = var2.bind(var3)(var1);
            return var1;
case 4:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 5;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.ehBaMc;
            var1 = var2.bind(var3)(var1);
            return var1;
case 2:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 5;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.sb2W2J;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot4 = var1;
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
    var4 = var4.MessageAttachmentFlags;
    var _closure1_slot2 = var4;
    var4 = function getContentScanVersionFromMedia(arg1) {
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
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/ExplicitMediaUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getAttachmentObscurityProps(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var4 = var1.attachment;
            var12 = var1.shouldObscureSpoiler;
            var8 = var1.enabledContentHarmTypeFlags;
            var1 = var1.shouldAgeVerify;
            var11 = var4.spoiler;
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 1;
            var2 = var5[var2];
            var10 = undefined;
            var13 = var3.bind(var10)(var2);
            var9 = var13.hasFlag;
            var5 = var4.flags;
            var2 = null;
            var14 = var2 != var5;
            var3 = 0;
            var7 = 0;
            if(!var14) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var7 = var5;
case 13:
            var5 = _closure1_slot2;
            var5 = var5.IS_SPOILER;
            var9 = var9.bind(var13)(var7, var5);
            var13 = {};
            var5 = _closure1_slot3;
            var7 = var5.bind(var10)(var4);
            var14 = var2 != var7;
            var5 = 0;
            if(!var14) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var5 = var7;
case 15:
            var13['contentScanVersion'] = var5;
            var4 = var4.flags;
            var5 = var2 != var4;
            var2 = 0;
            if(!var5) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var2 = var4;
case 17:
            var13['flags'] = var2;
            var15 = _closure1_slot0;
            var16 = _closure1_slot1;
            var4 = 2;
            var2 = var16[var4];
            var7 = var15.bind(var10)(var2);
            var5 = var7.getMediaObscuredReasonFromBitmask;
            var2 = {};
            var14 = 3;
            var17 = var16[var14];
            var17 = var15.bind(var10)(var17);
            var17 = var17.ObscuredMediaTypes;
            var17 = var17.Attachment;
            var2['type'] = var17;
            var2['media'] = var13;
            var2 = var5.bind(var7)(var2, var8);
            var4 = var16[var4];
            var7 = var15.bind(var10)(var4);
            var5 = var7.isMediaScanPending;
            var4 = {};
            var14 = var16[var14];
            var14 = var15.bind(var10)(var14);
            var14 = var14.ObscuredMediaTypes;
            var14 = var14.Attachment;
            var4['type'] = var14;
            var4['media'] = var13;
            var4 = var5.bind(var7)(var4, var8);
            var2 = var2.length;
            var7 = var2 > var3;
            var2 = var7;
            if(!var7) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var2 = var1;
case 19:
            var3 = var7;
            if(!var3) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var5 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 4;
            var1 = var8[var1];
            var5 = var5.bind(var10)(var1);
            var1 = var5.isVerifiedTeen;
            var3 = var1.bind(var5)();
case 21:
            var1 = {};
            var5 = var12;
            if(!var5) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var8 = var11;
            if(var8) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var8 = var9;
case 25:
            var5 = var8;
case 23:
            var1['isSpoiler'] = var5;
            var5 = '';
            var8 = var5;
            if(!var12) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            if(var11) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var8 = var5;
            if(!var9) { _fun0003_ip = 27; continue _fun0003 }
case 29:
            var13 = _closure1_slot0;
            var14 = _closure1_slot1;
            var9 = 5;
            var11 = var14[var9];
            var11 = var13.bind(var10)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var14[var9];
            var9 = var13.bind(var10)(var9);
            var9 = var9.t;
            var9 = var9.F+x38C;
            var11 = var11.bind(var12)(var9);
            var9 = var11.toUpperCase;
            var8 = var9.bind(var11)();
case 27:
            var1['spoiler'] = var8;
            var1['obscure'] = var7;
            if(!var7) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var9 = _closure1_slot0;
            var11 = _closure1_slot1;
            var6 = 5;
            var7 = var11[var6];
            var7 = var9.bind(var10)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var11[var6];
            var6 = var9.bind(var10)(var6);
            var6 = var6.t;
            var6 = var6.SpxcUR;
            var5 = var7.bind(var8)(var6);
case 31:
            var1['obscureDescription'] = var5;
            var1['obscureAwaitingScan'] = var4;
            var1['verifyAge'] = var2;
            var1['obscureHideControls'] = var3;
            if(var2) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var3;
case 33:
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
            var13 = var1.mediaItem;
            var9 = var1.isSpoilered;
            var4 = var1.isAuthorBot;
            var3 = var1.shouldObscureSpoiler;
            var12 = var1.enabledContentHarmTypeFlags;
            var1 = var1.shouldAgeVerify;
            var15 = _closure1_slot0;
            var14 = _closure1_slot1;
            var5 = 2;
            var2 = var14[var5];
            var10 = undefined;
            var8 = var15.bind(var10)(var2);
            var7 = var8.getMediaObscuredReasonFromBitmask;
            var2 = {};
            var16 = 3;
            var14 = var14[var16];
            var14 = var15.bind(var10)(var14);
            var14 = var14.ObscuredMediaTypes;
            var14 = var14.GenericMedia;
            var2['type'] = var14;
            var2['media'] = var13;
            var2 = var7.bind(var8)(var2, var12);
            var4 = !var4;
            if(!var4) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var15 = _closure1_slot0;
            var14 = _closure1_slot1;
            var5 = var14[var5];
            var8 = var15.bind(var10)(var5);
            var7 = var8.isMediaScanPending;
            var5 = {};
            var14 = var14[var16];
            var14 = var15.bind(var10)(var14);
            var14 = var14.ObscuredMediaTypes;
            var14 = var14.GenericMedia;
            var5['type'] = var14;
            var5['media'] = var13;
            var4 = var7.bind(var8)(var5, var12);
case 35:
            if(!var9) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var9 = var3;
case 37:
            var3 = var2.length;
            var2 = 0;
            var7 = var3 > var2;
            var2 = var7;
            if(!var7) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var2 = var1;
case 39:
            var3 = var7;
            if(!var3) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var5 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 4;
            var1 = var8[var1];
            var5 = var5.bind(var10)(var1);
            var1 = var5.isVerifiedTeen;
            var3 = var1.bind(var5)();
case 41:
            var1 = {};
            var1['isSpoiler'] = var9;
            var8 = null;
            if(!var9) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var9 = _closure1_slot4;
            var8 = var9.bind(var10)(var11);
case 43:
            var1['spoilerDescription'] = var8;
            var1['isObscured'] = var7;
            var5 = null;
            if(!var7) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var9 = _closure1_slot0;
            var11 = _closure1_slot1;
            var6 = 5;
            var7 = var11[var6];
            var7 = var9.bind(var10)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var11[var6];
            var6 = var9.bind(var10)(var6);
            var6 = var6.t;
            var6 = var6.SpxcUR;
            var5 = var7.bind(var8)(var6);
case 45:
            var1['obscureDescription'] = var5;
            var1['obscureAwaitingScan'] = var4;
            var1['verifyAge'] = var2;
            var1['obscureHideControls'] = var3;
            if(var2) { _fun0004_ip = 30; continue _fun0004 }
case 28:
            var2 = var3;
case 30:
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