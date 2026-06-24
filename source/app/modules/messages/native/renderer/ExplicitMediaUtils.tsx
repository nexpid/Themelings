// app/modules/messages/native/renderer/ExplicitMediaUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function getContentScanVersionFromMedia(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.content_scan_version;
            var2 = undefined;
            if(!(var2 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1.contentScanVersion;
            var2 = undefined;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var1.contentScanVersion;
case 4:
            return var2;
case 2:
            var1 = var1.content_scan_version;
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = function getSpoilerDescriptionForType(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = 'image';
            if(!(var1 !== var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = 'video';
            if(!(var1 !== var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = 'file';
            if(!(var1 !== var2)) { _fun0002_ip = 10; continue _fun0002 }
case 4:
            var1 = 'generic';
            if(!(var1 !== var2)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var1 = undefined;
            return var1;
case 11:
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
case 10:
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
            var1 = var1["3Gc2XP"];
            var1 = var2.bind(var3)(var1);
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
            var1 = var1.ehBaMc;
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
            var3 = var1.attachment;
            var12 = var1.shouldObscureSpoiler;
            var8 = var1.enabledContentHarmTypeFlags;
            var5 = var1.shouldAgeVerify;
            var10 = var3.spoiler;
            var2 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 1;
            var1 = var4[var1];
            var11 = undefined;
            var13 = var2.bind(var11)(var1);
            var9 = var13.hasFlag;
            var4 = var3.flags;
            var1 = null;
            var14 = var1 != var4;
            var2 = 0;
            var6 = 0;
            if(!var14) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var6 = var4;
case 13:
            var4 = _closure1_slot2;
            var4 = var4.IS_SPOILER;
            var9 = var9.bind(var13)(var6, var4);
            var13 = {};
            var4 = _closure1_slot3;
            var6 = var4.bind(var11)(var3);
            var14 = var1 != var6;
            var4 = 0;
            if(!var14) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var4 = var6;
case 15:
            var13['contentScanVersion'] = var4;
            var3 = var3.flags;
            var4 = var1 != var3;
            var1 = 0;
            if(!var4) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var1 = var3;
case 17:
            var13['flags'] = var1;
            var15 = _closure1_slot0;
            var16 = _closure1_slot1;
            var3 = 2;
            var1 = var16[var3];
            var6 = var15.bind(var11)(var1);
            var4 = var6.getMediaObscuredReasonFromBitmask;
            var1 = {};
            var14 = 3;
            var17 = var16[var14];
            var17 = var15.bind(var11)(var17);
            var17 = var17.ObscuredMediaTypes;
            var17 = var17.Attachment;
            var1['type'] = var17;
            var1['media'] = var13;
            var1 = var4.bind(var6)(var1, var8);
            var3 = var16[var3];
            var6 = var15.bind(var11)(var3);
            var4 = var6.isMediaScanPending;
            var3 = {};
            var14 = var16[var14];
            var14 = var15.bind(var11)(var14);
            var14 = var14.ObscuredMediaTypes;
            var14 = var14.Attachment;
            var3['type'] = var14;
            var3['media'] = var13;
            var4 = var4.bind(var6)(var3, var8);
            var1 = var1.length;
            var2 = var1 > var2;
            var3 = var2;
            if(!var2) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 4;
            var1 = var8[var1];
            var6 = var6.bind(var11)(var1);
            var1 = var6.isVerifiedTeen;
            var3 = var1.bind(var6)();
case 19:
            var1 = {};
            var6 = var12;
            if(!var6) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var8 = var10;
            if(var8) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var8 = var9;
case 23:
            var6 = var8;
case 21:
            var1['isSpoiler'] = var6;
            var6 = '';
            var8 = var6;
            if(!var12) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            if(var10) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var8 = var6;
            if(!var9) { _fun0003_ip = 25; continue _fun0003 }
case 27:
            var13 = _closure1_slot0;
            var14 = _closure1_slot1;
            var9 = 5;
            var10 = var14[var9];
            var10 = var13.bind(var11)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var9 = var14[var9];
            var9 = var13.bind(var11)(var9);
            var9 = var9.t;
            var9 = var9.F+x38C;
            var10 = var10.bind(var12)(var9);
            var9 = var10.toUpperCase;
            var8 = var9.bind(var10)();
case 25:
            var1['spoiler'] = var8;
            var1['obscure'] = var2;
            if(!var2) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var10 = _closure1_slot0;
            var12 = _closure1_slot1;
            var7 = 5;
            var8 = var12[var7];
            var8 = var10.bind(var11)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var12[var7];
            var7 = var10.bind(var11)(var7);
            var7 = var7.t;
            var7 = var7.SpxcUR;
            var6 = var8.bind(var9)(var7);
case 29:
            var1['obscureDescription'] = var6;
            var1['obscureAwaitingScan'] = var4;
            var4 = var2;
            if(!var4) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var4 = var5;
case 31:
            var1['verifyAge'] = var4;
            var1['obscureHideControls'] = var3;
            var1['obscureIsOpaque'] = var2;
            return var1;
        }
    };
    var3['getAttachmentObscurityProps'] = var4;
    var4 = function getUnfurledMediaItemObscurityProps(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var10 = var1.type;
            var13 = var1.mediaItem;
            var9 = var1.isSpoilered;
            var4 = var1.isAuthorBot;
            var2 = var1.shouldObscureSpoiler;
            var12 = var1.enabledContentHarmTypeFlags;
            var5 = var1.shouldAgeVerify;
            var15 = _closure1_slot0;
            var14 = _closure1_slot1;
            var3 = 2;
            var1 = var14[var3];
            var11 = undefined;
            var8 = var15.bind(var11)(var1);
            var6 = var8.getMediaObscuredReasonFromBitmask;
            var1 = {};
            var16 = 3;
            var14 = var14[var16];
            var14 = var15.bind(var11)(var14);
            var14 = var14.ObscuredMediaTypes;
            var14 = var14.GenericMedia;
            var1['type'] = var14;
            var1['media'] = var13;
            var1 = var6.bind(var8)(var1, var12);
            var4 = !var4;
            if(!var4) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var15 = _closure1_slot0;
            var14 = _closure1_slot1;
            var3 = var14[var3];
            var8 = var15.bind(var11)(var3);
            var6 = var8.isMediaScanPending;
            var3 = {};
            var14 = var14[var16];
            var14 = var15.bind(var11)(var14);
            var14 = var14.ObscuredMediaTypes;
            var14 = var14.GenericMedia;
            var3['type'] = var14;
            var3['media'] = var13;
            var4 = var6.bind(var8)(var3, var12);
case 33:
            if(!var9) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var9 = var2;
case 35:
            var2 = var1.length;
            var1 = 0;
            var2 = var2 > var1;
            var3 = var2;
            if(!var2) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 4;
            var1 = var8[var1];
            var6 = var6.bind(var11)(var1);
            var1 = var6.isVerifiedTeen;
            var3 = var1.bind(var6)();
case 37:
            var1 = {};
            var1['isSpoiler'] = var9;
            var8 = null;
            if(!var9) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var9 = _closure1_slot4;
            var8 = var9.bind(var11)(var10);
case 39:
            var1['spoilerDescription'] = var8;
            var1['isObscured'] = var2;
            var6 = null;
            if(!var2) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var10 = _closure1_slot0;
            var12 = _closure1_slot1;
            var7 = 5;
            var8 = var12[var7];
            var8 = var10.bind(var11)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var12[var7];
            var7 = var10.bind(var11)(var7);
            var7 = var7.t;
            var7 = var7.SpxcUR;
            var6 = var8.bind(var9)(var7);
case 41:
            var1['obscureDescription'] = var6;
            var1['obscureAwaitingScan'] = var4;
            var4 = var2;
            if(!var4) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var4 = var5;
case 43:
            var1['verifyAge'] = var4;
            var1['obscureHideControls'] = var3;
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