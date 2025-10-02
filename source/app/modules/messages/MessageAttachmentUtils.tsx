// app/modules/messages/MessageAttachmentUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function getForumPostShouldObscure(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = arg3;
            var3 = null;
            if(!(var3 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var1.type;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 6;
            var4 = var2[var9];
            var2 = undefined;
            var4 = var7.bind(var2)(var4);
            var4 = var4.ForumPostMediaTypes;
            var4 = var4.EMBED;
            if(!(var4 !== var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var4 = var7.bind(var2)(var4);
            var4 = var4.ForumPostMediaTypes;
            var4 = var4.ATTACHMENT;
            if(!(var4 !== var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var4 = var7.bind(var2)(var4);
            var4 = var4.ForumPostMediaTypes;
            var4 = var4.COMPONENT;
            var7 = null;
            if(!(var4 === var5)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 3;
            var5 = var10[var5];
            var5 = var9.bind(var2)(var5);
            var5 = var5.ObscuredMediaTypes;
            var5 = var5.GenericMedia;
            var4['type'] = var5;
            var5 = var1.srcUnfurledMediaItem;
            var4['media'] = var5;
            var7 = var4;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var4 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 3;
            var5 = var10[var5];
            var5 = var9.bind(var2)(var5);
            var5 = var5.ObscuredMediaTypes;
            var5 = var5.Attachment;
            var4['type'] = var5;
            var4['media'] = var1;
            var7 = var4;
            _fun0001_ip = 8; continue _fun0001;
case 4:
            var4 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 3;
            var5 = var10[var5];
            var5 = var9.bind(var2)(var5);
            var5 = var5.ObscuredMediaTypes;
            var5 = var5.Embed;
            var4['type'] = var5;
            var4['media'] = var1;
            var7 = var4;
case 8:
            if(!(var3 != var7)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 2;
            var5 = var9[var3];
            var10 = var4.bind(var2)(var5);
            var5 = var10.getMediaObscuredReasonFromBitmask;
            var5 = var5.bind(var10)(var7, var8);
            var3 = var9[var3];
            var4 = var4.bind(var2)(var3);
            var3 = var4.isMediaScanPending;
            var7 = var3.bind(var4)(var7, var8);
            var3 = var5.length;
            var4 = 0;
            if(!(!(var3 > var4))) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = new Array(2);
            if(var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = var1.spoiler;
            if(var1) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var1 = false;
            var3[0] = var1;
            var3[1] = var2;
            var1 = var3;
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var7 = arg2;
            var3[0] = var7;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 4;
            var7 = var9[var7];
            var7 = var8.bind(var2)(var7);
            var7 = var7.ObscureReason;
            var7 = var7.SPOILER;
            var3[1] = var7;
            var1 = var3;
case 18:
            _fun0001_ip = 19; continue _fun0001;
case 14:
            var7 = true;
            var3[0] = var7;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 4;
            var6 = var8[var6];
            var6 = var7.bind(var2)(var6);
            var6 = var6.ObscureReason;
            var6 = var6.POTENTIAL_EXPLICIT_CONTENT;
            var3[1] = var6;
            var1 = var3;
case 19:
            _fun0001_ip = 20; continue _fun0001;
case 12:
            var3 = new Array(2);
            var6 = true;
            var3[0] = var6;
            var4 = var5[var4];
            var3[1] = var4;
            var1 = var3;
case 20:
            return var1;
case 10:
            var1 = new Array(2);
            var3 = false;
            var1[0] = var3;
            var1[1] = var2;
            return var1;
case 2:
            var1 = new Array(2);
            var2 = false;
            var1[0] = var2;
            var2 = undefined;
            var1[1] = var2;
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.MessageAttachmentFlags;
    var _closure1_slot4 = var8;
    var5 = var5.Permissions;
    var _closure1_slot5 = var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/MessageAttachmentUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var11 = arg1;
            var10 = arg2;
            var1 = var11.spoiler;
            var2 = var11.flags;
            var3 = 0;
            var6 = undefined;
            var8 = 0;
            if(!(var6 !== var2)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var8 = var2;
case 21:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 2;
            var2 = var14[var5];
            var9 = var13.bind(var6)(var2);
            var7 = var9.getMediaObscuredReasonFromBitmask;
            var2 = {};
            var12 = 3;
            var15 = var14[var12];
            var15 = var13.bind(var6)(var15);
            var15 = var15.ObscuredMediaTypes;
            var15 = var15.Attachment;
            var2['type'] = var15;
            var2['media'] = var11;
            var2 = var7.bind(var9)(var2, var10);
            var5 = var14[var5];
            var9 = var13.bind(var6)(var5);
            var7 = var9.isMediaScanPending;
            var5 = {};
            var12 = var14[var12];
            var12 = var13.bind(var6)(var12);
            var12 = var12.ObscuredMediaTypes;
            var12 = var12.Attachment;
            var5['type'] = var12;
            var5['media'] = var11;
            var5 = var7.bind(var9)(var5, var10);
            var7 = var2.length;
            if(!(!(var7 > var3))) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            if(var5) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            if(var1) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 5;
            var1 = var7[var1];
            var7 = var5.bind(var6)(var1);
            var5 = var7.hasFlag;
            var1 = _closure1_slot4;
            var1 = var1.IS_SPOILER;
            var5 = var5.bind(var7)(var8, var1);
            var1 = null;
            if(!var5) { _fun0002_ip = 29; continue _fun0002 }
case 27:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 4;
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var5 = var5.ObscureReason;
            var1 = var5.SPOILER;
case 29:
            _fun0002_ip = 30; continue _fun0002;
case 25:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 4;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.ObscureReason;
            var1 = var4.POTENTIAL_EXPLICIT_CONTENT;
case 30:
            _fun0002_ip = 11; continue _fun0002;
case 23:
            var1 = var2[var3];
case 11:
            return var1;
        }
    };
    var3['getObscureReasonForAttachment'] = var5;
    var5 = function(arg1, arg2, arg3, arg4) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var9 = arg1;
            var8 = arg4;
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 2;
            var1 = var7[var2];
            var6 = undefined;
            var5 = var10.bind(var6)(var1);
            var3 = var5.getMediaObscuredReasonFromBitmask;
            var1 = {};
            var12 = 3;
            var7 = var7[var12];
            var7 = var10.bind(var6)(var7);
            var7 = var7.ObscuredMediaTypes;
            var7 = var7.Embed;
            var1['type'] = var7;
            var1['media'] = var9;
            var3 = var3.bind(var5)(var1, var8);
            var1 = arg2;
            var1 = var1.author;
            var1 = var1.bot;
            var1 = !var1;
            if(!var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = var10[var2];
            var7 = var11.bind(var6)(var2);
            var5 = var7.isMediaScanPending;
            var2 = {};
            var10 = var10[var12];
            var10 = var11.bind(var6)(var10);
            var10 = var10.ObscuredMediaTypes;
            var10 = var10.Embed;
            var2['type'] = var10;
            var2['media'] = var9;
            var1 = var5.bind(var7)(var2, var8);
case 31:
            var5 = var3.length;
            var2 = 0;
            if(!(!(var5 > var2))) { _fun0003_ip = 29; continue _fun0003 }
case 28:
            if(var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var5 = arg3;
            var1 = null;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 4;
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var5 = var5.ObscureReason;
            var1 = var5.SPOILER;
case 35:
            _fun0003_ip = 37; continue _fun0003;
case 33:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 4;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.ObscureReason;
            var1 = var4.POTENTIAL_EXPLICIT_CONTENT;
case 37:
            _fun0003_ip = 38; continue _fun0003;
case 29:
            var1 = var3[var2];
case 38:
            return var1;
        }
    };
    var3['getObscureReasonForEmbed'] = var5;
    var5 = function(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var10 = arg1;
            var9 = arg2;
            var3 = arguments[2];
            var1 = arguments[3];
            var4 = undefined;
            if(!(var3 === var4)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var3 = false;
case 39:
            if(!(var1 === var4)) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var1 = false;
case 41:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 2;
            var6 = var11[var5];
            var8 = var12.bind(var4)(var6);
            var7 = var8.getMediaObscuredReasonFromBitmask;
            var6 = {};
            var13 = 3;
            var11 = var11[var13];
            var11 = var12.bind(var4)(var11);
            var11 = var11.ObscuredMediaTypes;
            var11 = var11.GenericMedia;
            var6['type'] = var11;
            var6['media'] = var10;
            var8 = var7.bind(var8)(var6, var9);
            var1 = !var1;
            if(!var1) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = var11[var5];
            var7 = var12.bind(var4)(var5);
            var6 = var7.isMediaScanPending;
            var5 = {};
            var11 = var11[var13];
            var11 = var12.bind(var4)(var11);
            var11 = var11.ObscuredMediaTypes;
            var11 = var11.GenericMedia;
            var5['type'] = var11;
            var5['media'] = var10;
            var1 = var6.bind(var7)(var5, var9);
case 43:
            var7 = var8.includes;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 4;
            var6 = var6[var5];
            var6 = var9.bind(var4)(var6);
            var6 = var6.ObscureReason;
            var6 = var6.EXPLICIT_CONTENT;
            var6 = var7.bind(var8)(var6);
            if(var6) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var7 = var8.includes;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var5];
            var6 = var9.bind(var4)(var6);
            var6 = var6.ObscureReason;
            var6 = var6.GORE_CONTENT;
            var6 = var7.bind(var8)(var6);
            if(var6) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            if(var1) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var1 = null;
            if(!var3) { _fun0004_ip = 11; continue _fun0004 }
case 51:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.ObscureReason;
            var1 = var3.SPOILER;
case 11:
            _fun0004_ip = 52; continue _fun0004;
case 49:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.ObscureReason;
            var1 = var3.POTENTIAL_EXPLICIT_CONTENT;
case 52:
            _fun0004_ip = 53; continue _fun0004;
case 47:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.ObscureReason;
            var1 = var3.GORE_CONTENT;
case 53:
            _fun0004_ip = 54; continue _fun0004;
case 45:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ObscureReason;
            var1 = var2.EXPLICIT_CONTENT;
case 54:
            return var1;
        }
    };
    var3['getObscureReasonForUnfurledMediaItem'] = var5;
    var3['getForumPostShouldObscure'] = var4;
    var4 = function useShouldObscure(arg1) {
        var1 = arg1;
        var3 = var1.channel;
        var _closure2_slot0 = var3;
        var5 = var1.media;
        var10 = _closure1_slot0;
        var9 = _closure1_slot2;
        var3 = 7;
        var3 = var9[var3];
        var4 = undefined;
        var7 = var10.bind(var4)(var3);
        var6 = var7.useStateFromStores;
        var8 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var8;
        var2 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                var5 = _closure1_slot3;
                var4 = var5.can;
                var3 = _closure1_slot5;
                var3 = var3.MANAGE_MESSAGES;
                var2 = _closure2_slot0;
                var1 = var4.bind(var5)(var3, var2);
case 55:
                return var1;
            }
        };
        var7 = var6.bind(var7)(var3, var2);
        var2 = 8;
        var2 = var9[var2];
        var2 = var10.bind(var4)(var2);
        var3 = var2.RenderSpoilers;
        var2 = var3.useSetting;
        var6 = var2.bind(var3)();
        var2 = 2;
        var2 = var9[var2];
        var8 = var10.bind(var4)(var2);
        var3 = var8.getEnabledHarmTypesBitmaskForChannelType;
        var2 = 3;
        var2 = var9[var2];
        var2 = var10.bind(var4)(var2);
        var2 = var2.ContentHarmTypeChannel;
        var2 = var2.GUILD;
        var3 = var3.bind(var8)(var2);
        var2 = _closure1_slot6;
        var8 = _closure1_slot1;
        var1 = 9;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var1 = var1.bind(var4)(var6, var7);
        var1 = !var1;
        var1 = var2.bind(var4)(var5, var1, var3);
        return var1;
    };
    var3['useShouldObscure'] = var4;
    var2 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 4;
            var2 = var2[var6];
            var5 = undefined;
            var2 = var4.bind(var5)(var2);
            var2 = var2.ObscureReason;
            var2 = var2.EXPLICIT_CONTENT;
            if(!(var2 !== var3)) { _fun0006_ip = 34; continue _fun0006 }
case 57:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ObscureReason;
            var2 = var2.GORE_CONTENT;
            if(!(var2 !== var3)) { _fun0006_ip = 34; continue _fun0006 }
case 58:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ObscureReason;
            var2 = var2.SPOILER;
            if(!(var2 !== var3)) { _fun0006_ip = 59; continue _fun0006 }
case 60:
            return var5;
case 59:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.XpfDHx;
            var2 = var3.bind(var4)(var2);
            return var2;
case 34:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 10;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.SEgHFh;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getObscuredAlt'] = var2;
    return var1;
})();